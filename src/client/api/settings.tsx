import { useForceUpdate } from '@components/hooks';
import { createLogger } from '@common/logger';
import * as Settings from '@common/settings';
import React from 'react';

const Logger = createLogger('Settings');

export const listeners = {};

export const get = Settings.get;
export const toggle = Settings.toggle;
export const set = Settings.set;

export function initialize() {
   Settings.on('change', onSettingsChange);
}

export function shutdown() {
   Settings.off('change', onSettingsChange);
}

export function connectComponent(Component: React.ComponentType<any>, id: string, predicate?: Fn): React.FC<any> {
   return (props) => {
      const forceUpdate = useForceUpdate();
      const onChange = (payload) => {
         if (!predicate || predicate(payload)) {
            forceUpdate();
         }
      };

      React.useEffect(() => {
         subscribe(id, onChange);
         return () => unsubscribe(id, onChange);
      }, []);

      return <Component {...props} settings={makeStore(id)} />;
   };
}

export function makeStore(id: string) {
   return {
      settings: Settings.settings[id] ?? {},
      set: (key: string, value: any) => set(id, key, value),
      get: (key: string, defaults: any) => get(id, key, defaults),
      toggle: (key: string, defaults: any) => toggle(id, key, defaults),
      subscribe: (callback: Fn) => subscribe(id, callback),
      unsubscribe: (callback: Fn) => unsubscribe(id, callback),
      connectComponent: (component: React.ComponentType<any>, predicate?: Fn) => connectComponent(component, id, predicate)
   };
}

export function subscribe(id: string, callback: Fn) {
   listeners[id] ??= new Set();
   listeners[id].add(callback);
}

export function unsubscribe(id: string, callback: Fn) {
   listeners[id]?.delete(callback);

   if (listeners[id]?.size === 0) {
      delete listeners[id];
   }
}

function onSettingsChange(payload) {
   if (!listeners[payload.id]) return;

   for (const listener of [...listeners[payload.id]]) {
      try {
         listener(payload);
      } catch (e) {
         Logger.error('Failed to fire settings listener.', payload, e);
      }
   }
};
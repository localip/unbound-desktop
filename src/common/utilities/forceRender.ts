const overrides = {
   useMemo: factory => factory(),
   useState: initialState => [initialState, () => void 0],
   useReducer: initialValue => [initialValue, () => void 0],
   useEffect: () => { },
   useLayoutEffect: () => { },
   useRef: () => ({ current: null }),
   useCallback: callback => callback,
   useImperativeHandle: () => { },
   useContext: (ctx) => ctx._currentValue
};

const keys = Object.keys(overrides);

/**
 * @name forceRender
 * @description Allows you to grab a components return value by disabling its hooks when you need it outside of a render
 * @param {React.Component|Function|React.memo} component - The component to wrap
 * @return {React.Component} Returns the wrapped component's result
 */

function forceRender(component: Fn, options?: OptionalKeys<typeof overrides>) {
   return (...args) => {
      const React = require('react');
      const ReactDispatcher = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current;
      const originals = keys.map(e => [e, ReactDispatcher[e]]);

      Object.assign(ReactDispatcher, overrides, options);

      const res = {
         rendered: null,
         error: null
      };

      try {
         res.rendered = component(...args);
      } catch (error) {
         res.error = error;
      }

      Object.assign(ReactDispatcher, Object.fromEntries(originals));

      if (res.error) {
         throw res.error;
      }

      return res.rendered;
   };
};

export = forceRender;
import { ipcRenderer } from 'electron';

const { windowOptions } = ipcRenderer.sendSync('GET_WINDOW_OPTIONS');

if (!window.require && windowOptions.webPreferences.nativeWindowOpen) {
   ipcRenderer.invoke('PROCESS_ISOLATED');
} else {
   require('./init');
}

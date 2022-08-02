"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function _export(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{initialize:()=>initialize,shutdown:()=>shutdown,start:()=>start,stop:()=>stop});const a=require("../../api/modals"),b=require("../../../common/logger"),c=_interopRequireWildcard(require("../../../common/settings")),d=require("../../modules/webpack/common"),e=_interopRequireWildcard(require("./registry")),f=require("../../../common/utilities/index");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const g=(0,b.createLogger)("Built-In"),h=(0,f.debounce)(onSettingsChange,250),i={};async function initialize(){c.on("change",h);let a=Object.keys(e);for(let b=0;b<a.length;b++){let d=a[b];await start(d)}}async function shutdown(){c.off("change",h);let a=Object.keys(e);for(let b=0;b<a.length;b++){let d=a[b];await stop(d)}}async function start(a){let b=e[a];if(c.get("unbound",b.data.id,b.data.default)&& !i[b.data.id]&&b)try{b.data.wait?await b.initialize?.():b.initialize?.(),i[b.data.id]=!0,g.log(`${b.data.name} was initialized.`)}catch(d){g.error(`Failed to start ${b.data.name}.`,d.message)}}async function stop(a){let b=e[a];if(i[b.data.id]&&b)try{b.data.wait?await b.shutdown?.():b.shutdown?.(),delete i[b.data.id],g.log(`${b.data.name} was stopped.`)}catch(c){g.error(`Failed to stop ${b.data.name}.`,c.message)}}async function onSettingsChange({key:b,value:c}){let f=Object.entries(e).find(([,a])=>a.data.id===b);if(!f)return;let[g,h]=f;if(h.data.restart)return(0,a.showConfirmModal)({header:d.Locale.Messages.UNBOUND_RESTART,content:d.Locale.Messages.UNBOUND_RESTART_SETTING_DESC,confirmText:d.Locale.Messages.UNBOUND_RESTART,cancelText:d.Locale.Messages.CANCEL,onConfirm:()=>window.location.reload()});c?await start(g):await stop(g)}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9idWlsdGlucy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG93Q29uZmlybU1vZGFsIH0gZnJvbSAnQGFwaS9tb2RhbHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XHJcbmltcG9ydCAqIGFzIFNldHRpbmdzIGZyb20gJ0Bjb21tb24vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICdAd2VicGFjay9jb21tb24nO1xyXG5pbXBvcnQgKiBhcyBCdWlsdElucyBmcm9tICcuL3JlZ2lzdHJ5JztcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdAdXRpbGl0aWVzJztcclxuXHJcbmNvbnN0IExvZ2dlciA9IGNyZWF0ZUxvZ2dlcignQnVpbHQtSW4nKTtcclxuXHJcbmNvbnN0IGhhbmRsZVNldHRpbmdzQ2hhbmdlID0gZGVib3VuY2Uob25TZXR0aW5nc0NoYW5nZSwgMjUwKTtcclxuXHJcbmludGVyZmFjZSBTZXR0aW5nc0NoYW5nZSB7XHJcbiAgIGtleTogc3RyaW5nO1xyXG4gICB2YWx1ZTogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEJ1aWx0SW5EYXRhIHtcclxuICAgcmVzdGFydD86IGJvb2xlYW47XHJcbiAgIGRlZmF1bHQ6IGJvb2xlYW47XHJcbiAgIHdhaXQ/OiBib29sZWFuO1xyXG4gICBuYW1lOiBzdHJpbmcsXHJcbiAgIGlkOiBzdHJpbmcsXHJcbn1cclxuXHJcbmludGVyZmFjZSBJbnN0YW5jZSBleHRlbmRzIEJ1aWx0SW5EYXRhIHtcclxuICAgaW5pdGlhbGl6ZTogRm47XHJcbiAgIHNodXRkb3duOiBGbjtcclxuICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5jb25zdCBzdGFydGVkOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgIFNldHRpbmdzLm9uKCdjaGFuZ2UnLCBoYW5kbGVTZXR0aW5nc0NoYW5nZSk7XHJcblxyXG4gICBjb25zdCBidWlsdGlucyA9IE9iamVjdC5rZXlzKEJ1aWx0SW5zKTtcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWlsdGlucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBuYW1lID0gYnVpbHRpbnNbaV07XHJcbiAgICAgIGF3YWl0IHN0YXJ0KG5hbWUpO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaHV0ZG93bigpIHtcclxuICAgU2V0dGluZ3Mub2ZmKCdjaGFuZ2UnLCBoYW5kbGVTZXR0aW5nc0NoYW5nZSk7XHJcblxyXG4gICBjb25zdCBidWlsdGlucyA9IE9iamVjdC5rZXlzKEJ1aWx0SW5zKTtcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWlsdGlucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBuYW1lID0gYnVpbHRpbnNbaV07XHJcbiAgICAgIGF3YWl0IHN0b3AobmFtZSk7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0KG5hbWU6IHN0cmluZykge1xyXG4gICBjb25zdCBpbnN0YW5jZSA9IEJ1aWx0SW5zW25hbWVdO1xyXG5cclxuICAgaWYgKCFTZXR0aW5ncy5nZXQoJ3VuYm91bmQnLCBpbnN0YW5jZS5kYXRhLmlkLCBpbnN0YW5jZS5kYXRhLmRlZmF1bHQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgfVxyXG5cclxuICAgaWYgKHN0YXJ0ZWRbaW5zdGFuY2UuZGF0YS5pZF0gfHwgIWluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgfVxyXG5cclxuICAgdHJ5IHtcclxuICAgICAgaWYgKGluc3RhbmNlLmRhdGEud2FpdCkge1xyXG4gICAgICAgICBhd2FpdCBpbnN0YW5jZS5pbml0aWFsaXplPy4oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZT8uKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXJ0ZWRbaW5zdGFuY2UuZGF0YS5pZF0gPSB0cnVlO1xyXG4gICAgICBMb2dnZXIubG9nKGAke2luc3RhbmNlLmRhdGEubmFtZX0gd2FzIGluaXRpYWxpemVkLmApO1xyXG4gICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIExvZ2dlci5lcnJvcihgRmFpbGVkIHRvIHN0YXJ0ICR7aW5zdGFuY2UuZGF0YS5uYW1lfS5gLCBlLm1lc3NhZ2UpO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdG9wKG5hbWU6IHN0cmluZykge1xyXG4gICBjb25zdCBpbnN0YW5jZSA9IEJ1aWx0SW5zW25hbWVdO1xyXG5cclxuICAgaWYgKCFzdGFydGVkW2luc3RhbmNlLmRhdGEuaWRdIHx8ICFpbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbiAgIHRyeSB7XHJcbiAgICAgIGlmIChpbnN0YW5jZS5kYXRhLndhaXQpIHtcclxuICAgICAgICAgYXdhaXQgaW5zdGFuY2Uuc2h1dGRvd24/LigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBpbnN0YW5jZS5zaHV0ZG93bj8uKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRlbGV0ZSBzdGFydGVkW2luc3RhbmNlLmRhdGEuaWRdO1xyXG4gICAgICBMb2dnZXIubG9nKGAke2luc3RhbmNlLmRhdGEubmFtZX0gd2FzIHN0b3BwZWQuYCk7XHJcbiAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgTG9nZ2VyLmVycm9yKGBGYWlsZWQgdG8gc3RvcCAke2luc3RhbmNlLmRhdGEubmFtZX0uYCwgZS5tZXNzYWdlKTtcclxuICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBvblNldHRpbmdzQ2hhbmdlKHsga2V5LCB2YWx1ZSB9OiBTZXR0aW5nc0NoYW5nZSkge1xyXG4gICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmVudHJpZXMoQnVpbHRJbnMpLmZpbmQoKFssIHZdKSA9PiB2LmRhdGEuaWQgPT09IGtleSk7XHJcbiAgIGlmICghcGF5bG9hZCkgcmV0dXJuO1xyXG5cclxuICAgY29uc3QgW2J1aWx0aW4sIGluc3RhbmNlXSA9IHBheWxvYWQgYXMgdW5rbm93biBhcyBbc3RyaW5nLCBJbnN0YW5jZV07XHJcblxyXG4gICBpZiAoaW5zdGFuY2UuZGF0YS5yZXN0YXJ0KSB7XHJcbiAgICAgIHJldHVybiBzaG93Q29uZmlybU1vZGFsKHtcclxuICAgICAgICAgaGVhZGVyOiBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9SRVNUQVJULFxyXG4gICAgICAgICBjb250ZW50OiBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9SRVNUQVJUX1NFVFRJTkdfREVTQyxcclxuICAgICAgICAgY29uZmlybVRleHQ6IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1JFU1RBUlQsXHJcbiAgICAgICAgIGNhbmNlbFRleHQ6IExvY2FsZS5NZXNzYWdlcy5DQU5DRUwsXHJcbiAgICAgICAgIG9uQ29uZmlybTogKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgIH0pO1xyXG4gICB9O1xyXG5cclxuICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICBhd2FpdCBzdG9wKGJ1aWx0aW4pO1xyXG4gICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCBzdGFydChidWlsdGluKTtcclxuICAgfVxyXG59Il0sIm5hbWVzIjpbImluaXRpYWxpemUiLCJzaHV0ZG93biIsInN0YXJ0Iiwic3RvcCIsIkxvZ2dlciIsImNyZWF0ZUxvZ2dlciIsImhhbmRsZVNldHRpbmdzQ2hhbmdlIiwiZGVib3VuY2UiLCJvblNldHRpbmdzQ2hhbmdlIiwic3RhcnRlZCIsIlNldHRpbmdzIiwib24iLCJidWlsdGlucyIsIk9iamVjdCIsImtleXMiLCJCdWlsdElucyIsImkiLCJsZW5ndGgiLCJuYW1lIiwib2ZmIiwiaW5zdGFuY2UiLCJnZXQiLCJkYXRhIiwiaWQiLCJkZWZhdWx0Iiwid2FpdCIsImxvZyIsImUiLCJlcnJvciIsIm1lc3NhZ2UiLCJrZXkiLCJ2YWx1ZSIsInBheWxvYWQiLCJlbnRyaWVzIiwiZmluZCIsInYiLCJidWlsdGluIiwicmVzdGFydCIsInNob3dDb25maXJtTW9kYWwiLCJoZWFkZXIiLCJMb2NhbGUiLCJNZXNzYWdlcyIsIlVOQk9VTkRfUkVTVEFSVCIsImNvbnRlbnQiLCJVTkJPVU5EX1JFU1RBUlRfU0VUVElOR19ERVNDIiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0IiwiQ0FOQ0VMIiwib25Db25maXJtIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiJBQUFBLHdLQWdDc0JBLFVBQVUsS0FBVkEsVUFBVSxDQVVWQyxRQUFRLEtBQVJBLFFBQVEsQ0FVUkMsS0FBSyxLQUFMQSxLQUFLLENBeUJMQyxJQUFJLEtBQUpBLElBQUksbUJBN0VPLGtCQUFhLFlBQ2pCLHdCQUFnQixvQ0FDbkIsMEJBQWtCLGFBQ3JCLDhCQUFpQixvQ0FDZCxZQUFZLGFBQ2IsaUNBQVksMHBCQUVyQyxNQUFNQyxDQUFNLENBQUdDLEdBQUFBLENBQVksYUFBQSxFQUFDLFVBQVUsQ0FBQyxDQUVqQ0MsQ0FBb0IsQ0FBR0MsR0FBQUEsQ0FBUSxTQUFBLEVBQUNDLGdCQUFnQixDQUFFLEdBQUcsQ0FBQyxDQXFCdERDLENBQU8sQ0FBNEIsRUFBRSxBQXZCSCxBQXlCakMsZ0JBQWVULFVBQVUsRUFBRyxDQUNoQ1UsQ0FBUSxDQUFDQyxFQUFFLENBQUMsUUFBUSxDQUFFTCxDQUFvQixDQUFDLEFBRTNDLEtBQU1NLENBQVEsQ0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLENBQVEsQ0FBQyxBQUFDLEFBQ3ZDLEtBQUssSUFBSUMsQ0FBQyxDQUFHLENBQUMsQ0FBRUEsQ0FBQyxDQUFHSixDQUFRLENBQUNLLE1BQU0sQ0FBRUQsQ0FBQyxFQUFFLENBQUUsQ0FDdkMsSUFBTUUsQ0FBSSxDQUFHTixDQUFRLENB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
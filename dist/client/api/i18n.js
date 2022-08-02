"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function _export(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{state:()=>c,initialize:()=>initialize,shutdown:()=>shutdown,add:()=>add,addStrings:()=>addStrings,inject:()=>inject});const a=require("../modules/webpack/common"),b=function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(require("../i18n")),c={locale:"en-US",messages:{}};function initialize(){a.Locale&&(c.locale=a.Locale.getLocale()??"en-US",a.Locale.on("locale",onChange),add(b.default))}function shutdown(){a.Locale&&a.Locale.off("locale",onChange)}function add(a){if("object"!=typeof a||Array.isArray(a))throw Error("Locale strings must be an object with languages and strings.");for(let b in a)addStrings(b,a[b])}function addStrings(a,b){c.locale&&(c.messages[a]??={},Object.assign(c.messages[a],b),inject())}function inject(){if(!c.locale||!a.Locale)return;let b=a.Locale._provider._context;Object.assign(b.messages,c.messages[c.locale]??{}),Object.assign(b.defaultMessages,c.messages["en-US"]??{})}function onChange(b){c.locale=b,a.Locale.loadPromise.then(inject)}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvYXBpL2kxOG4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnQHdlYnBhY2svY29tbW9uJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnQGNsaWVudC9pMThuJztcclxuXHJcbnR5cGUgTG9jYWxlU3RyaW5ncyA9IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIGFueT4+O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXRlID0ge1xyXG4gICBsb2NhbGU6ICdlbi1VUycsXHJcbiAgIG1lc3NhZ2VzOiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgIGlmICghTG9jYWxlKSByZXR1cm47XHJcblxyXG4gICBzdGF0ZS5sb2NhbGUgPSBMb2NhbGUuZ2V0TG9jYWxlKCkgPz8gJ2VuLVVTJztcclxuICAgTG9jYWxlLm9uKCdsb2NhbGUnLCBvbkNoYW5nZSk7XHJcblxyXG4gICAvLyBBZGQgY29yZSBzdHJpbmdzXHJcbiAgIGFkZChpMThuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNodXRkb3duKCkge1xyXG4gICBpZiAoIUxvY2FsZSkgcmV0dXJuO1xyXG5cclxuICAgTG9jYWxlLm9mZignbG9jYWxlJywgb25DaGFuZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkKHN0cmluZ3M6IExvY2FsZVN0cmluZ3MpIHtcclxuICAgaWYgKHR5cGVvZiBzdHJpbmdzICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHN0cmluZ3MpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTG9jYWxlIHN0cmluZ3MgbXVzdCBiZSBhbiBvYmplY3Qgd2l0aCBsYW5ndWFnZXMgYW5kIHN0cmluZ3MuJyk7XHJcbiAgIH1cclxuXHJcbiAgIGZvciAoY29uc3QgbG9jYWxlIGluIHN0cmluZ3MpIHtcclxuICAgICAgYWRkU3RyaW5ncyhsb2NhbGUsIHN0cmluZ3NbbG9jYWxlXSk7XHJcbiAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRTdHJpbmdzKGxvY2FsZTogc3RyaW5nLCBzdHJpbmdzOiBMb2NhbGVTdHJpbmdzKSB7XHJcbiAgIGlmICghc3RhdGUubG9jYWxlKSByZXR1cm47XHJcblxyXG4gICBzdGF0ZS5tZXNzYWdlc1tsb2NhbGVdID8/PSB7fTtcclxuICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5tZXNzYWdlc1tsb2NhbGVdLCBzdHJpbmdzKTtcclxuXHJcbiAgIGluamVjdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0KCkge1xyXG4gICBpZiAoIXN0YXRlLmxvY2FsZSB8fCAhTG9jYWxlKSByZXR1cm47XHJcblxyXG4gICBjb25zdCBjb250ZXh0ID0gTG9jYWxlLl9wcm92aWRlci5fY29udGV4dDtcclxuXHJcbiAgIE9iamVjdC5hc3NpZ24oY29udGV4dC5tZXNzYWdlcywgc3RhdGUubWVzc2FnZXNbc3RhdGUubG9jYWxlXSA/PyB7fSk7XHJcbiAgIE9iamVjdC5hc3NpZ24oY29udGV4dC5kZWZhdWx0TWVzc2FnZXMsIHN0YXRlLm1lc3NhZ2VzWydlbi1VUyddID8/IHt9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25DaGFuZ2UobG9jYWxlKSB7XHJcbiAgIHN0YXRlLmxvY2FsZSA9IGxvY2FsZTtcclxuICAgTG9jYWxlLmxvYWRQcm9taXNlLnRoZW4oaW5qZWN0KTtcclxufSJdLCJuYW1lcyI6WyJzdGF0ZSIsImluaXRpYWxpemUiLCJzaHV0ZG93biIsImFkZCIsImFkZFN0cmluZ3MiLCJpbmplY3QiLCJsb2NhbGUiLCJtZXNzYWdlcyIsIkxvY2FsZSIsImdldExvY2FsZSIsIm9uIiwib25DaGFuZ2UiLCJpMThuIiwib2ZmIiwic3RyaW5ncyIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udGV4dCIsIl9wcm92aWRlciIsIl9jb250ZXh0IiwiZGVm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
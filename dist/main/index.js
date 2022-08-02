"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const a=require("#kernel/core/patchers/BrowserWindowPatcher"),b=function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(require("./csp"));function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}global.isUnbound=!0,require("./nullbyte"),require("../ipc/main"),(0,a.patch)("unbound",a=>{global.__ABORT__||(a.webPreferences??={},a.webPreferences.contextIsolation=!1,a.webPreferences.nodeIntegration=!0)});try{b.remove()}catch{console.error("Failed to remove CSP, expect issues.")}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhdGNoIH0gZnJvbSAnI2tlcm5lbC9jb3JlL3BhdGNoZXJzL0Jyb3dzZXJXaW5kb3dQYXRjaGVyJztcclxuaW1wb3J0IHsgQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucyB9IGZyb20gJ2VsZWN0cm9uJztcclxuaW1wb3J0ICogYXMgQ1NQIGZyb20gJy4vY3NwJztcclxuXHJcbmdsb2JhbC5pc1VuYm91bmQgPSB0cnVlO1xyXG5cclxucmVxdWlyZSgnLi9udWxsYnl0ZScpO1xyXG5yZXF1aXJlKCcuLi9pcGMvbWFpbicpO1xyXG5cclxucGF0Y2goJ3VuYm91bmQnLCAob3B0aW9uczogQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucykgPT4ge1xyXG4gICBpZiAoZ2xvYmFsLl9fQUJPUlRfXykgcmV0dXJuO1xyXG5cclxuICAgb3B0aW9ucy53ZWJQcmVmZXJlbmNlcyA/Pz0ge307XHJcbiAgIG9wdGlvbnMud2ViUHJlZmVyZW5jZXMuY29udGV4dElzb2xhdGlvbiA9IGZhbHNlO1xyXG4gICBvcHRpb25zLndlYlByZWZlcmVuY2VzLm5vZGVJbnRlZ3JhdGlvbiA9IHRydWU7XHJcbn0pO1xyXG5cclxudHJ5IHtcclxuICAgQ1NQLnJlbW92ZSgpO1xyXG59IGNhdGNoIHtcclxuICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHJlbW92ZSBDU1AsIGV4cGVjdCBpc3N1ZXMuJyk7XHJcbn0iXSwibmFtZXMiOlsiZ2xvYmFsIiwiaXNVbmJvdW5kIiwicmVxdWlyZSIsInBhdGNoIiwib3B0aW9ucyIsIl9fQUJPUlRfXyIsIndlYlByZWZlcmVuY2VzIiwiY29udGV4dElzb2xhdGlvbiIsIm5vZGVJbnRlZ3JhdGlvbiIsIkNTUCIsInJlbW92ZSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQXNCLDRDQUE0Qyx3ZkFFN0MsT0FBTyxnTEFFNUJBLE1BQU0sQ0FBQ0MsU0FBUyxDQUFHLENBQUEsQ0FBSSxDQUV2QkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUNyQkEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUV0QkMsR0FBQUEsQ0FBSyxNQUFBLEVBQUMsU0FBUyxDQUFFLEFBQUNDLENBQXdDLEVBQUssQ0FDeERKLE1BQU0sQ0FBQ0ssU0FBUyxHQUVwQkQsQ0FBTyxDQUFDRSxjQUFjLEdBQUssRUFBRSxDQUM3QkYsQ0FBTyxDQUFDRSxjQUFjLENBQUNDLGdCQUFnQixDQUFHLENBQUEsQ0FBSyxDQUMvQ0gsQ0FBTyxDQUFDRSxjQUFjLENBQUNFLGVBQWUsQ0FBRyxDQUFBLENBQUksRUFDL0MsQ0FBQyxBQUVGLElBQUksQ0FDREMsQ0FBRyxDQUFDQyxNQUFNLEVBQUUsQ0FDZCxBQUFDLEtBQU0sQ0FDTEMsT0FBTyxDQUFDQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FDdkQifQ==
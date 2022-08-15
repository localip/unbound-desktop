"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function _export(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(exports,{started:()=>i,initialize:()=>initialize,shutdown:()=>shutdown});const e=require("../../../common/logger"),t=function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(i,a,o):i[a]=e[a]}return i.default=e,r&&r.set(e,i),i}(require("./registry"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}const r=(0,e.createLogger)("Patches"),i={};async function initialize(){let e=Object.entries(t);for(let n=0;n<e.length;n++){let[a,o]=e[n];if(!i[a])try{await o.initialize(),i[a]=!0}catch(l){r.error(`Failed to initialize ${a}.`,l.message)}}}async function shutdown(){let e=Object.entries(t);for(let n=0;n<e.length;n++){let[a,o]=e[n];if(i[a])try{await o.shutdown(),delete i[a]}catch(l){r.error(`Failed to initialize ${a}.`,l.message)}}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9wYXRjaGVzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcclxuaW1wb3J0ICogYXMgUGF0Y2hlcyBmcm9tICcuL3JlZ2lzdHJ5JztcclxuXHJcbmNvbnN0IExvZ2dlciA9IGNyZWF0ZUxvZ2dlcignUGF0Y2hlcycpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXJ0ZWQ6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgY29uc3QgcGF0Y2hlcyA9IE9iamVjdC5lbnRyaWVzKFBhdGNoZXMpO1xyXG5cclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRjaGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IFtuYW1lLCBwYXRjaF0gPSBwYXRjaGVzW2ldO1xyXG4gICAgICBpZiAoc3RhcnRlZFtuYW1lXSkgY29udGludWU7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgICBhd2FpdCBwYXRjaC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgIHN0YXJ0ZWRbbmFtZV0gPSB0cnVlO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgIExvZ2dlci5lcnJvcihgRmFpbGVkIHRvIGluaXRpYWxpemUgJHtuYW1lfS5gLCBlLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNodXRkb3duKCkge1xyXG4gICBjb25zdCBwYXRjaGVzID0gT2JqZWN0LmVudHJpZXMoUGF0Y2hlcyk7XHJcblxyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgW25hbWUsIHBhdGNoXSA9IHBhdGNoZXNbaV07XHJcbiAgICAgIGlmICghc3RhcnRlZFtuYW1lXSkgY29udGludWU7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgICBhd2FpdCBwYXRjaC5zaHV0ZG93bigpO1xyXG4gICAgICAgICBkZWxldGUgc3RhcnRlZFtuYW1lXTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICBMb2dnZXIuZXJyb3IoYEZhaWxlZCB0byBpbml0aWFsaXplICR7bmFtZX0uYCwgZS5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iXSwibmFtZXMiOlsic3RhcnRlZCIsImluaXRpYWxpemUiLCJzaHV0ZG93biIsIkxvZ2dlciIsImNyZWF0ZUxvZ2dlciIsInBhdGNoZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiUGF0Y2hlcyIsImkiLCJsZW5ndGgiLCJuYW1lIiwicGF0Y2giLCJlIiwiZXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQSx3S0FLYUEsT0FBTyxLQUFQQSxDQUFPLENBRUVDLFVBQVUsS0FBVkEsVUFBVSxDQWdCVkMsUUFBUSxLQUFSQSxRQUFRLG1CQXZCRCx3QkFBZ0Isd2ZBQ3BCLFlBQVksZ0xBRXJDLE1BQU1DLENBQU0sQ0FBR0MsR0FBQUEsQ0FBWSxhQUFBLEVBQUMsU0FBUyxDQUFDLENBRXpCSixDQUFPLENBQTRCLEVBQUUsQUFGWCxBQUloQyxnQkFBZUMsVUFBVSxFQUFHLENBQ2hDLElBQU1JLENBQU8sQ0FBR0MsTUFBTSxDQUFDQyxPQUFPLENBQUNDLENBQU8sQ0FBQyxBQUFDLEFBRXhDLEtBQUssSUFBSUMsQ0FBQyxDQUFHLENBQUMsQ0FBRUEsQ0FBQyxDQUFHSixDQUFPLENBQUNLLE1BQU0sQ0FBRUQsQ0FBQyxFQUFFLENBQUUsQ0FDdEMsR0FBTSxDQUFDRSxDQUFJLENBQUVDLENBQUssQ0FBQyxDQUFHUCxDQUFPLENBQUNJLENBQUMsQ0FBQyxBQUFDLEFBQ2pDLEtBQUlULENBQU8sQ0FBQ1csQ0FBSSxDQUFDLENBRWpCLEdBQUksQ0FDRCxNQUFNQyxDQUFLLENBQUNYLFVBQVUsRUFBRSxDQUN4QkQsQ0FBTyxDQUFDVyxDQUFJLENBQUMsQ0FBRyxDQUFBLENBQUksQ0FDdEIsQUFBQyxNQUFPRSxDQUFDLENBQUUsQ0FDVFYsQ0FBTSxDQUFDVyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsRUFBRUgsQ0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFFRSxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUMxRCxBQVAyQixDQVE5QixDQUNILEFBRU0sZUFBZWIsUUFBUSxFQUFHLENBQzlCLElBQU1HLENBQU8sQ0FBR0MsTUFBTSxDQUFDQyxPQUFPLENBQUNDLENBQU8sQ0FBQyxBQUFDLEFBRXhDLEtBQUssSUFBSUMsQ0FBQyxDQUFHLENBQUMsQ0FBRUEsQ0FBQyxDQUFHSixDQUFPLENBQUNLLE1BQU0sQ0FBRUQsQ0FBQyxFQUFFLENBQUUsQ0FDdEMsR0FBTSxDQUFDRSxDQUFJLENBQUVDLENBQUssQ0FBQyxDQUFHUCxDQUFPLENBQUNJLENBQUMsQ0FBQyxBQUFDLEFBQ2pDLElBQUtULENBQU8sQ0FBQ1csQ0FBSSxDQUFDLENBRWxCLEdBQUksQ0FDRCxNQUFNQyxDQUFLLENBQUNWLFFBQVEsRUFBRSxDQUN0QixPQUFPRixDQUFPLENBQUNXLENBQUksQ0FBQyxDQUN0QixBQUFDLE1BQU9FLENBQUMsQ0FBRSxDQUNUVixDQUFNLENBQUNXLEtBQUssQ0FBQyxDQUFDLHFCQUFxQixFQUFFSCxDQUFJLENBQUMsQ0FBQyxDQUFDLENBQUVFLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLENBQzFELEFBUDRCLENBUS9CLENBQ0gifQ==
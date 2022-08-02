"use strict";const a=_interopRequireDefault(require("./getReactInstance")),b=_interopRequireDefault(require("./traverseType"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}module.exports=function getOwnerInstace(c,d=a=>!0,e=!0){if(!c)return null;let f=(0,a.default)(c),g=f,matches=()=>{if(!g?.stateNode||"string"==typeof g.type)return!1;let a=(0,b.default)(g);return!!a&&a&&d(g?.stateNode)};for(;!matches();)g=g?.return;return e?g?.stateNode:g}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL2dldE93bmVySW5zdGFuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFJlYWN0SW5zdGFuY2UgZnJvbSAnLi9nZXRSZWFjdEluc3RhbmNlJztcclxuaW1wb3J0IHRyYXZlcnNlVHlwZSBmcm9tICcuL3RyYXZlcnNlVHlwZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgZ2V0T3duZXJJbnN0YW5jZVxyXG4gKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcGFyZW50L293bmVyIGluc3RhbmNlIHRoZSBjb21wb25lbnQgYmVsb25ncyB0by5cclxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlIC0gVGhlIGVsZW1lbnQgdG8gZmluZCB0aGUgaW5zdGFuY2UgZm9yXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZpbHRlciAtIFRoZSBmaWx0ZXIgdG8gYXBwbHkgZm9yIHRoZSBzZWFyY2hcclxuICogQHJldHVybiB7b2JqZWN0fHZvaWR9IFJldHVybnMgdGhlIG93bmVyIGluc3RhbmNlLCB1c3VhbGx5IGFuIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0T3duZXJJbnN0YWNlKG5vZGU6IEVsZW1lbnQsIGZpbHRlcjogKC4uLmFyZ3MpID0+IGFueSA9IF8gPT4gdHJ1ZSwgc3RhdGVOb2RlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICBpZiAoIW5vZGUpIHJldHVybiBudWxsO1xyXG4gICBjb25zdCBmaWJlciA9IGdldFJlYWN0SW5zdGFuY2Uobm9kZSk7XHJcbiAgIGxldCBjdXJyZW50ID0gZmliZXI7XHJcblxyXG4gICBjb25zdCBtYXRjaGVzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoIWN1cnJlbnQ/LnN0YXRlTm9kZSB8fCB0eXBlb2YgY3VycmVudC50eXBlID09PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBjb25zdCB0eXBlID0gdHJhdmVyc2VUeXBlKGN1cnJlbnQpO1xyXG4gICAgICBpZiAoIXR5cGUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiB0eXBlICYmIGZpbHRlcihjdXJyZW50Py5zdGF0ZU5vZGUpO1xyXG4gICB9O1xyXG5cclxuICAgd2hpbGUgKCFtYXRjaGVzKCkpIHtcclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQ/LnJldHVybjtcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIHN0YXRlTm9kZSA/IGN1cnJlbnQ/LnN0YXRlTm9kZSA6IGN1cnJlbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgPSBnZXRPd25lckluc3RhY2U7Il0sIm5hbWVzIjpbImdldE93bmVySW5zdGFjZSIsIm5vZGUiLCJmaWx0ZXIiLCJfIiwic3RhdGVOb2RlIiwiZmliZXIiLCJnZXRSZWFjdEluc3RhbmNlIiwiY3VycmVudCIsIm1hdGNoZXMiLCJ0eXBlIiwidHJhdmVyc2VUeXBlIiwicmV0dXJuIl0sIm1hcHBpbmdzIjoiQUFBQSxvREFBNkIsb0JBQW9CLG9DQUN4QixnQkFBZ0IsMEZBU3pDLFNBQVNBLGVBQWUsQ0FBQ0MsQ0FBYSxDQUFFQyxDQUF3QixDQUFHQyxDQUFDLEVBQUksQ0FBQSxDQUFJLENBQUVDLENBQWtCLENBQUcsQ0FBQSxDQUFJLENBQUUsQ0FDdEcsR0FBSSxDQURrQkgsQ0FBYSxBQUMxQixDQUFFLE9BQU8sSUFBSSxBQUFDLEFBQ3ZCLEtBQU1JLENBQUssQ0FBR0MsR0FBQUEsQ0FBZ0IsUUFBQSxFQUZSTCxDQUFhLENBRUMsQ0FDaENNLENBQU8sQ0FBR0YsQ0FBSyxDQUViRyxPQUFPLENBQUcsSUFBTSxDQUNuQixHQUFJLENBQUNELENBQU8sRUFBRUgsU0FBUyxFQUFJLEFBQXdCLFFBQVEsRUFBaEMsT0FBT0csQ0FBTyxDQUFDRSxJQUFJLEFBQWEsQ0FBRSxNQUFPLENBQUEsQ0FBSyxBQUFDLEFBQzFFLEtBQU1BLENBQUksQ0FBR0MsR0FBQUEsQ0FBWSxRQUFBLEVBQUNILENBQU8sQ0FBQyxBQUFDLE9BQ25DLEVBQUtFLENBQUksRUFFRkEsQ0FBSSxFQUFJUCxBQVZtQkEsQ0FBd0IsQ0FVcENLLENBQU8sRUFBRUgsU0FBUyxDQUFDLEFBRmpCLENBRzFCLEFBVG9DLEFBV3JDLE1BQU8sQ0FBQ0ksT0FBTyxFQUFFLEVBQ2RELENBQU8sQ0FBR0EsQ0FBTyxFQUFFSSxNQUFNLEFBQzNCLEFBRUQsUUFBT1AsQUFqQm9FQSxDQUFrQixDQWlCMUVHLENBQU8sRUFBRUgsU0FBUyxDQUFHRyxDQUFPLEFBQUMsQ0FDbEQsQUFFd0IifQ==
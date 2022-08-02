"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const a=require("../../common/utilities/index"),b=_interopRequireDefault(require("./structures/unbound")),c=require("../../common/constants"),d=_interopRequireDefault(require("react")),e=_interopRequireDefault(require("./style.css"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}!function init(){e.default.append();let f=new b.default;f.initialize();let g=document.querySelector("#splash");if(!g)return;let h=(0,a.getOwnerInstance)(g,()=>!0,!1);if(!h)return;let i=h.type,j=i.prototype.render;i.prototype.render=function(...b){let e=j.apply(this,b),f=(0,a.findInReactTree)(e,a=>a.find?.(a=>a?.props?.className==="splash-status"));return f&&f.splice(1,0,d.default.createElement("span",{className:"unbound-splash-text"},c.SplashQuotes[c.SplashQuotes.length*Math.random()|0])),e},h.stateNode.forceUpdate()}()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVsb2FkL3NwbGFzaC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmluZEluUmVhY3RUcmVlLCBnZXRPd25lckluc3RhbmNlIH0gZnJvbSAnQHV0aWxpdGllcyc7XHJcbmltcG9ydCBVbmJvdW5kIGZyb20gJy4vc3RydWN0dXJlcy91bmJvdW5kJztcclxuaW1wb3J0IHsgU3BsYXNoUXVvdGVzIH0gZnJvbSAnQGNvbnN0YW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgU3R5bGUuYXBwZW5kKCk7XHJcblxyXG4gICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVbmJvdW5kKCk7XHJcbiAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcclxuXHJcbiAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BsYXNoJyk7XHJcbiAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgY29uc3Qgc3BsYXNoID0gZ2V0T3duZXJJbnN0YW5jZShlbGVtZW50LCAoKSA9PiB0cnVlLCBmYWxzZSk7XHJcbiAgIGlmICghc3BsYXNoKSByZXR1cm47XHJcblxyXG4gICBjb25zdCBTcGxhc2ggPSBzcGxhc2gudHlwZTtcclxuXHJcbiAgIGNvbnN0IG9SZW5kZXIgPSBTcGxhc2gucHJvdG90eXBlLnJlbmRlcjtcclxuICAgU3BsYXNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICBjb25zdCByZXMgPSBvUmVuZGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cclxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBmaW5kSW5SZWFjdFRyZWUocmVzLCByID0+IHIuZmluZD8uKGMgPT4gYz8ucHJvcHM/LmNsYXNzTmFtZSA9PT0gJ3NwbGFzaC1zdGF0dXMnKSk7XHJcbiAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICBjaGlsZHJlbi5zcGxpY2UoMSwgMCwgPHNwYW4gY2xhc3NOYW1lPSd1bmJvdW5kLXNwbGFzaC10ZXh0Jz5cclxuICAgICAgICAgICAge1NwbGFzaFF1b3Rlc1tTcGxhc2hRdW90ZXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSB8IDBdfVxyXG4gICAgICAgICA8L3NwYW4+KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgfTtcclxuXHJcbiAgIHNwbGFzaC5zdGF0ZU5vZGUuZm9yY2VVcGRhdGUoKTtcclxufVxyXG5cclxuaW5pdCgpOyJdLCJuYW1lcyI6WyJpbml0IiwiU3R5bGUiLCJhcHBlbmQiLCJpbnN0YW5jZSIsIlVuYm91bmQiLCJpbml0aWFsaXplIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNwbGFzaCIsImdldE93bmVySW5zdGFuY2UiLCJTcGxhc2giLCJ0eXBlIiwib1JlbmRlciIsInByb3RvdHlwZSIsInJlbmRlciIsImFyZ3MiLCJyZXMiLCJhcHBseSIsImNoaWxkcmVuIiwiZmluZEluUmVhY3RUcmVlIiwiciIsImZpbmQiLCJjIiwicHJvcHMiLCJjbGFzc05hbWUiLCJzcGxpY2UiLCJzcGFuIiwiU3BsYXNoUXVvdGVzIiwibGVuZ3RoIiwiTWF0aCIsInJhbmRvbSIsInN0YXRlTm9kZSIsImZvcmNlVXBkYXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxvRkFBa0QsOEJBQVksbUNBQzFDLHNCQUFzQixhQUNiLHdCQUFZLG1DQUN2QixPQUFPLG9DQUVQLGFBQWEsNEVBaUMvQkEsQUEvQkEsU0FBU0EsSUFBSSxFQUFHLENBQ2JDLENBQUssUUFBQSxDQUFDQyxNQUFNLEVBQUUsQUFFZCxLQUFNQyxDQUFRLENBQUcsSUFBSUMsQ0FBTyxRQUFBLEFBQUUsQUFBQyxBQUMvQkQsQ0FBQUEsQ0FBUSxDQUFDRSxVQUFVLEVBQUUsQUFFckIsS0FBTUMsQ0FBTyxDQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQUFBQyxBQUNsRCxJQUFJLENBQUNGLENBQU8sQ0FBRSxNQUFPLEFBRXJCLEtBQU1HLENBQU0sQ0FBR0MsR0FBQUEsQ0FBZ0IsaUJBQUEsRUFBQ0osQ0FBTyxDQUFFLElBQU0sQ0FBQSxDQUFJLENBQUUsQ0FBQSxDQUFLLENBQUMsQUFBQyxBQUM1RCxJQUFJLENBQUNHLENBQU0sQ0FBRSxNQUFPLEFBRXBCLEtBQU1FLENBQU0sQ0FBR0YsQ0FBTSxDQUFDRyxJQUFJLENBRXBCQyxDQUFPLENBQUdGLENBQU0sQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLEFBRlosQUFHM0JKLENBQUFBLENBQU0sQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUcsU0FBVSxHQUFHQyxDQUFJLENBQUUsQ0FDMUMsSUFBTUMsQ0FBRyxDQUFHSixDQUFPLENBQUNLLEtBQUssQ0FBQyxJQUFJLENBQUVGLENBQUksQ0FBQyxDQUUvQkcsQ0FBUSxDQUFHQyxHQUFBQSxDQUFlLGdCQUFBLEVBQUNILENBQUcsQ0FBRUksQ0FBQyxFQUFJQSxDQUFDLENBQUNDLElBQUksR0FBR0MsQ0FBQyxFQUFJQSxDQUFDLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxHQUFLLGVBQWUsQ0FBQyxDQUFDLEFBRjVELEFBU3RDLFFBTklOLENBQVEsRUFDVEEsQ0FBUSxDQUFDTyxNQUFNLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBRSx3QkFBQ0MsTUFBSSxFQUFDRixTQUFTLENBQUMscUJBQXFCLEVBQ3ZERyxDQUFZLGFBQUEsQ0FBQ0EsQ0FBWSxhQUFBLENBQUNDLE1BQU0sQ0FBR0MsSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBRyxDQUFDLENBQUMsQ0FDbEQsQ0FBQyxDQUdKZCxDQUFHLEFBQUMsQ0FDYixDQUVEUixDQUFNLENBQUN1QixTQUFTLENBQUNDLFdBQVcsRUFBRSxDQUNoQyxFQUVLLEFBQUMifQ==
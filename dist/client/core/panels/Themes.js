"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>f});const a=require("../../api/settings"),b=require("../components/Icons"),c=require("../../components/discord"),d=function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(require("../../api/toasts")),e=function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(require("./Manager"));function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}class Themes extends e.default{constructor(a){super(a,"themes"),this.state={search:"",breadcrumbs:[],settings:{entity:null,client:null}}}componentWillMount(){let a=this.forceUpdate.bind(this,null);window.powercord&&powercord.styleManager.on("updated",a),window.BdApi&&BdApi.Themes.on("updated",a),window.unbound&&unbound.managers.themes.on("updated",a)}componentWillUnmount(){let a=this.forceUpdate.bind(this,null);window.powercord&&powercord.styleManager.off("updated",a),window.BdApi&&BdApi.Themes.off("updated",a),window.unbound&&unbound.managers.themes.off("updated",a)}getAddons(){let a={unbound:[...unbound.managers.themes.entities.values()],powercord:[],bd:[]};return window.powercord&&a.powercord.push(...powercord.styleManager.addons),window.BdApi&&a.bd.push(...BdApi.Themes.getAll()),{addons:a,count:Object.values(a).flat().length}}onReload(){let a={unbound:[],powercord:[]};if(window.unbound){let e=unbound.managers.themes.loadMissing();a.unbound.push(...e.loaded)}if(window.powercord){let f=powercord.styleManager.loadAll(!0,!1);a.powercord.push(...f)}let g=Object.entries(a).map(([a,d])=>{if(!d.length)return;let e=[];for(let f of d){let g=this.resolve(f,a,"name");e.push(React.createElement(c.Flex,{direction:c.Flex.Direction.HORIZONTAL,align:c.Flex.Align.CENTER,wrap:c.Flex.Wrap.NO_WRAP},"powercord"===a?React.createElement(b.Plug,{width:12,height:12}):null," ",g))}return e}).filter(Boolean);g.length&&d.open({title:"Missing themes found:",icon:"CheckmarkCircle",color:"var(--info-positive-foreground)",content:()=>g})}}const f=(0,a.connectComponent)(Themes,"themes-manager")
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9wYW5lbHMvVGhlbWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0Q29tcG9uZW50IH0gZnJvbSAnQGFwaS9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFBsdWcgfSBmcm9tICdAY29yZS9jb21wb25lbnRzL0ljb25zJztcclxuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0Bjb21wb25lbnRzL2Rpc2NvcmQnO1xyXG5pbXBvcnQgKiBhcyBUb2FzdHMgZnJvbSAnQGFwaS90b2FzdHMnO1xyXG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL01hbmFnZXInO1xyXG5cclxuY2xhc3MgVGhlbWVzIGV4dGVuZHMgTWFuYWdlciB7XHJcbiAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzLCAndGhlbWVzJyk7XHJcblxyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICBzZWFyY2g6ICcnLFxyXG4gICAgICAgICBicmVhZGNydW1iczogW10sXHJcbiAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIGVudGl0eTogbnVsbCxcclxuICAgICAgICAgICAgY2xpZW50OiBudWxsXHJcbiAgICAgICAgIH1cclxuICAgICAgfTtcclxuICAgfVxyXG5cclxuICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICBjb25zdCBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzLCBudWxsKTtcclxuXHJcbiAgICAgIHdpbmRvdy5wb3dlcmNvcmQgJiYgcG93ZXJjb3JkLnN0eWxlTWFuYWdlci5vbigndXBkYXRlZCcsIGZvcmNlVXBkYXRlKTtcclxuICAgICAgd2luZG93LkJkQXBpICYmIEJkQXBpLlRoZW1lcy5vbigndXBkYXRlZCcsIGZvcmNlVXBkYXRlKTtcclxuICAgICAgd2luZG93LnVuYm91bmQgJiYgdW5ib3VuZC5tYW5hZ2Vycy50aGVtZXMub24oJ3VwZGF0ZWQnLCBmb3JjZVVwZGF0ZSk7XHJcbiAgIH1cclxuXHJcbiAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICBjb25zdCBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzLCBudWxsKTtcclxuXHJcbiAgICAgIHdpbmRvdy5wb3dlcmNvcmQgJiYgcG93ZXJjb3JkLnN0eWxlTWFuYWdlci5vZmYoJ3VwZGF0ZWQnLCBmb3JjZVVwZGF0ZSk7XHJcbiAgICAgIHdpbmRvdy5CZEFwaSAmJiBCZEFwaS5UaGVtZXMub2ZmKCd1cGRhdGVkJywgZm9yY2VVcGRhdGUpO1xyXG4gICAgICB3aW5kb3cudW5ib3VuZCAmJiB1bmJvdW5kLm1hbmFnZXJzLnRoZW1lcy5vZmYoJ3VwZGF0ZWQnLCBmb3JjZVVwZGF0ZSk7XHJcbiAgIH1cclxuXHJcbiAgIG92ZXJyaWRlIGdldEFkZG9ucygpIHtcclxuICAgICAgY29uc3QgYWRkb25zID0ge1xyXG4gICAgICAgICB1bmJvdW5kOiBbLi4udW5ib3VuZC5tYW5hZ2Vycy50aGVtZXMuZW50aXRpZXMudmFsdWVzKCldLFxyXG4gICAgICAgICBwb3dlcmNvcmQ6IFtdLFxyXG4gICAgICAgICBiZDogW11cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh3aW5kb3cucG93ZXJjb3JkKSB7XHJcbiAgICAgICAgIGFkZG9ucy5wb3dlcmNvcmQucHVzaCguLi5wb3dlcmNvcmQuc3R5bGVNYW5hZ2VyLmFkZG9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh3aW5kb3cuQmRBcGkpIHtcclxuICAgICAgICAgYWRkb25zLmJkLnB1c2goLi4uQmRBcGkuVGhlbWVzLmdldEFsbCgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgYWRkb25zLCBjb3VudDogT2JqZWN0LnZhbHVlcyhhZGRvbnMpLmZsYXQoKS5sZW5ndGggfTtcclxuICAgfVxyXG5cclxuICAgb3ZlcnJpZGUgb25SZWxvYWQoKSB7XHJcbiAgICAgIGNvbnN0IG1pc3NpbmcgPSB7XHJcbiAgICAgICAgIHVuYm91bmQ6IFtdLFxyXG4gICAgICAgICBwb3dlcmNvcmQ6IFtdXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAod2luZG93LnVuYm91bmQpIHtcclxuICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHVuYm91bmQubWFuYWdlcnMudGhlbWVzLmxvYWRNaXNzaW5nKCk7XHJcbiAgICAgICAgIG1pc3NpbmcudW5ib3VuZC5wdXNoKC4uLnBheWxvYWQubG9hZGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHdpbmRvdy5wb3dlcmNvcmQpIHtcclxuICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHBvd2VyY29yZC5zdHlsZU1hbmFnZXIubG9hZEFsbCh0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgIG1pc3NpbmcucG93ZXJjb3JkLnB1c2goLi4ucGF5bG9hZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5lbnRyaWVzKG1pc3NpbmcpLm1hcCgoW2NsaWVudCwgYWRkb25zXSkgPT4ge1xyXG4gICAgICAgICBpZiAoIWFkZG9ucy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICAgY29uc3QgY29udGVudCA9IFtdO1xyXG5cclxuICAgICAgICAgZm9yIChjb25zdCBhZGRvbiBvZiBhZGRvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMucmVzb2x2ZShhZGRvbiwgY2xpZW50LCAnbmFtZScpO1xyXG5cclxuICAgICAgICAgICAgY29udGVudC5wdXNoKDxGbGV4XHJcbiAgICAgICAgICAgICAgIGRpcmVjdGlvbj17RmxleC5EaXJlY3Rpb24uSE9SSVpPTlRBTH1cclxuICAgICAgICAgICAgICAgYWxpZ249e0ZsZXguQWxpZ24uQ0VOVEVSfVxyXG4gICAgICAgICAgICAgICB3cmFwPXtGbGV4LldyYXAuTk9fV1JBUH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICB7Y2xpZW50ID09PSAncG93ZXJjb3JkJyA/IDxQbHVnXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMn1cclxuICAgICAgICAgICAgICAgLz4gOiBudWxsfSB7bmFtZX1cclxuICAgICAgICAgICAgPC9GbGV4Pik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgICB9KS5maWx0ZXIoQm9vbGVhbikgYXMgYW55IGFzIEpTWC5FbGVtZW50O1xyXG5cclxuICAgICAgaWYgKCEocmVzIGFzIGFueSBhcyBbXSkubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICBUb2FzdHMub3Blbih7XHJcbiAgICAgICAgIHRpdGxlOiAnTWlzc2luZyB0aGVtZXMgZm91bmQ6JyxcclxuICAgICAgICAgaWNvbjogJ0NoZWNrbWFya0NpcmNsZScsXHJcbiAgICAgICAgIGNvbG9yOiAndmFyKC0taW5mby1wb3NpdGl2ZS1mb3JlZ3JvdW5kKScsXHJcbiAgICAgICAgIGNvbnRlbnQ6ICgpID0+IHJlc1xyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0Q29tcG9uZW50KFRoZW1lcywgJ3RoZW1lcy1tYW5hZ2VyJyk7Il0sIm5hbWVzIjpbIlRoZW1lcyIsIk1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzZWFyY2giLCJicmVhZGNydW1icyIsInNldHRpbmdzIiwiZW50aXR5IiwiY2xpZW50IiwiY29tcG9uZW50V2lsbE1vdW50IiwiZm9yY2VVcGRhdGUiLCJiaW5kIiwid2luZG93IiwicG93ZXJjb3JkIiwic3R5bGVNYW5hZ2VyIiwib24iLCJCZEFwaSIsInVuYm91bmQiLCJtYW5hZ2VycyIsInRoZW1lcyIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwib2ZmIiwiZ2V0QWRkb25zIiwiYWRkb25zIiwiZW50aXRpZXMiLCJ2YWx1ZXMiLCJiZCIsInB1c2giLCJnZXRBbGwiLCJjb3VudCIsIk9iamVjdCIsImZsYXQiLCJsZW5ndGgiLCJvblJlbG9hZCIsIm1pc3NpbmciLCJwYXlsb2FkIiwibG9hZE1pc3NpbmciLCJsb2FkZWQiLCJsb2FkQWxsIiwicmVzIiwiZW50cmllcyIsIm1hcCIsImNvbnRlbnQiLCJhZGRvbiIsIm5hbWUiLCJyZXNvbHZlIiwiRmxleCIsImRpcmVjdGlvbiIsIkRpcmVjdGlvbiIsIkhPUklaT05UQUwiLCJhbGlnbiIsIkFsaWduIiwiQ0VOVEVSIiwid3JhcCIsIldyYXAiLCJOT19XUkFQIiwiUGx1ZyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsdGVyIiwiQm9vbGVhbiIsIlRvYXN0cyIsIm9wZW4iLCJ0aXRsZSIsImljb24iLCJjb2xvciIsImNvbm5lY3RDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBLGtHQXVHQSxTQUEwRCx3QkFBMUQsQ0FBMEQsbUJBdkd6QixvQkFBZSxZQUMzQixxQkFBd0IsWUFDeEIsMEJBQXFCLHdmQUNsQixrQkFBYSxzRkFDakIsV0FBVyxnTEFFL0IsTUFBTUEsTUFBTSxTQUFTQyxDQUFPLFFBQUEsQ0FDekJDLFlBQVlDLENBQUssQ0FBRSxDQUNoQixLQUFLLENBQUNBLENBQUssQ0FBRSxRQUFRLENBQUMsQ0FFdEIsSUFBSSxDQUFDQyxLQUFLLENBQUcsQ0FDVkMsTUFBTSxDQUFFLEVBQUUsQ0FDVkMsV0FBVyxDQUFFLEVBQUUsQ0FDZkMsUUFBUSxDQUFFLENBQ1BDLE1BQU0sQ0FBRSxJQUFJLENBQ1pDLE1BQU0sQ0FBRSxJQUFJLENBQ2QsQ0FDSCxDQUNILEFBRURDLGtCQUFrQixFQUFHLENBQ2xCLElBQU1DLENBQVcsQ0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQUFBQyxBQUV0REMsQ0FBQUEsTUFBTSxDQUFDQyxTQUFTLEVBQUlBLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxFQUFFLENBQUMsU0FBUyxDQUFFTCxDQUFXLENBQUMsQ0FD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
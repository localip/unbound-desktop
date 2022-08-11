"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function _export(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(exports,{data:()=>i,initialize:()=>initialize,shutdown:()=>shutdown});const e=require("../../modules/webpack/common"),n=require("../../modules/webpack/stores"),t=require("../../modules/patcher/index"),a=(0,t.create)("unbound-experiments"),i={name:"Experiments",id:"dev.experiments",default:!1,restart:!0,wait:!1,cancelled:!1};async function initialize(){i.cancelled=!1;let t=Object.values(e.Dispatcher._actionHandlers._dependencyGraph.nodes);if(i.cancelled)return;let r=a.after(n.Users,"getCurrentUser",(n,t,a)=>{if(a)return new Proxy({},{get:(n,t)=>"hasFlag"===t?function(n){return n===e.Constants.UserFlags.STAFF||a.hasFlag.call(this,n)}:a[t]})});function onDispatch(){let a=t.find(e=>"ExperimentStore"===e.name);a&&a.actionHandler.CONNECTION_OPEN({type:"CONNECTION_OPEN",guildExperiments:[],experiments:[],user:{...n.Users.getCurrentUser(),flags:1}});let i=t.find(e=>"DeveloperExperimentStore"===e.name);i&&i.actionHandler.CONNECTION_OPEN(),e.Dispatcher.unsubscribe("CONNECTION_OPEN",onDispatch),r()}n.Users.getCurrentUser()?onDispatch():e.Dispatcher.subscribe("CONNECTION_OPEN",onDispatch)}function shutdown(){i.cancelled=!0,a.unpatchAll()}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9idWlsdGlucy9leHBlcmltZW50cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMsIERpc3BhdGNoZXIgfSBmcm9tICdAd2VicGFjay9jb21tb24nO1xyXG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJ0B3ZWJwYWNrL3N0b3Jlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ0BwYXRjaGVyJztcclxuXHJcbmNvbnN0IFBhdGNoZXIgPSBjcmVhdGUoJ3VuYm91bmQtZXhwZXJpbWVudHMnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhID0ge1xyXG4gICBuYW1lOiAnRXhwZXJpbWVudHMnLFxyXG4gICBpZDogJ2Rldi5leHBlcmltZW50cycsXHJcbiAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICByZXN0YXJ0OiB0cnVlLFxyXG4gICB3YWl0OiBmYWxzZSxcclxuXHJcbiAgIGNhbmNlbGxlZDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICBkYXRhLmNhbmNlbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgLy8gV2FpdCBmb3IgZGlzcGF0Y2hlciBoYW5kbGVyc1xyXG4gICBjb25zdCBldmVudHM6IGFueVtdID0gT2JqZWN0LnZhbHVlcyhEaXNwYXRjaGVyLl9hY3Rpb25IYW5kbGVycy5fZGVwZW5kZW5jeUdyYXBoLm5vZGVzKTtcclxuXHJcbiAgIC8vIERvbid0IHJ1biBjb2RlIGJsb2NrIGluY2FzZSBleHBlcmltZW50cyBpcyB0b2dnbGVkIGJlZm9yZSB0aGUgYWJvdmUgcmVzb2x2ZXNcclxuICAgaWYgKGRhdGEuY2FuY2VsbGVkKSByZXR1cm47XHJcblxyXG4gICAvLyBTcG9vZiB0aGUgc3RhZmYgZmxhZ1xyXG4gICBjb25zdCB1bnBhdGNoID0gUGF0Y2hlci5hZnRlcihVc2VycywgJ2dldEN1cnJlbnRVc2VyJywgKF8sIF9fLCByZXMpID0+IHtcclxuICAgICAgaWYgKCFyZXMpIHJldHVybjtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgZ2V0KF8sIHByb3ApIHtcclxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdoYXNGbGFnJykge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGZsYWcgPT09IENvbnN0YW50cy5Vc2VyRmxhZ3MuU1RBRkYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuaGFzRmxhZy5jYWxsKHRoaXMsIGZsYWcpO1xyXG4gICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzW3Byb3BdO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9KTtcclxuXHJcbiAgIGZ1bmN0aW9uIG9uRGlzcGF0Y2goKSB7XHJcbiAgICAgIC8vIENhbGwgdGhlIGRpc3BhdGNoZXIgYWN0aW9uIGhhbmRsZXIgd2l0aCB0aGUgc3Bvb2ZlZCBmbGFncyB0byBpbnRlcm5hbGx5IGFsbG93IGJ1Y2tldCBvdmVycmlkZXNcclxuICAgICAgY29uc3QgRXhwZXJpbWVudFN0b3JlID0gZXZlbnRzLmZpbmQoaCA9PiBoLm5hbWUgPT09ICdFeHBlcmltZW50U3RvcmUnKTtcclxuICAgICAgaWYgKEV4cGVyaW1lbnRTdG9yZSkgRXhwZXJpbWVudFN0b3JlLmFjdGlvbkhhbmRsZXIuQ09OTkVDVElPTl9PUEVOKHtcclxuICAgICAgICAgdHlwZTogJ0NPTk5FQ1RJT05fT1BFTicsXHJcbiAgICAgICAgIGd1aWxkRXhwZXJpbWVudHM6IFtdLFxyXG4gICAgICAgICBleHBlcmltZW50czogW10sXHJcbiAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgLi4uVXNlcnMuZ2V0Q3VycmVudFVzZXIoKSxcclxuICAgICAgICAgICAgZmxhZ3M6IDEsXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDYWxsIHRoZSBkaXNwYXRjaGVyIGFjdGlvbiBoYW5kbGVyIHRvIHVwZGF0ZSBpc0RldmVsb3BlciBpbnRlcm5hbGx5XHJcbiAgICAgIGNvbnN0IERldmVsb3BlckV4cGVyaW1lbnRTdG9yZSA9IGV2ZW50cy5maW5kKGggPT4gaC5uYW1lID09PSAnRGV2ZWxvcGVyRXhwZXJpbWVudFN0b3JlJyk7XHJcbiAgICAgIGlmIChEZXZlbG9wZXJFeHBlcmltZW50U3RvcmUpIERldmVsb3BlckV4cGVyaW1lbnRTdG9yZS5hY3Rpb25IYW5kbGVyLkNPTk5FQ1RJT05fT1BFTigpO1xyXG5cclxuICAgICAgRGlzcGF0Y2hlci51bnN1YnNjcmliZSgnQ09OTkVDVElPTl9PUEVOJywgb25EaXNwYXRjaCk7XHJcbiAgICAgIHVucGF0Y2goKTtcclxuICAgfVxyXG5cclxuICAgaWYgKFVzZXJzLmdldEN1cnJlbnRVc2VyKCkpIHtcclxuICAgICAgb25EaXNwYXRjaCgpO1xyXG4gICB9IGVsc2Uge1xyXG4gICAgICBEaXNwYXRjaGVyLnN1YnNjcmliZSgnQ09OTkVDVElPTl9PUEVOJywgb25EaXNwYXRjaCk7XHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaHV0ZG93bigpIHtcclxuICAgZGF0YS5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICBQYXRjaGVyLnVucGF0Y2hBbGwoKTtcclxufSJdLCJuYW1lcyI6WyJkYXRhIiwiaW5pdGlhbGl6ZSIsInNodXRkb3duIiwiUGF0Y2hlciIsImNyZWF0ZSIsIm5hbWUiLCJpZCIsImRlZmF1bHQiLCJyZXN0YXJ0Iiwid2FpdCIsImNhbmNlbGxlZCIsImV2ZW50cyIsIk9iamVjdCIsInZhbHVlcyIsIkRpc3BhdGNoZXIiLCJfYWN0aW9uSGFuZGxlcnMiLCJfZGVwZW5kZW5jeUdyYXBoIiwibm9kZXMiLCJ1bnBhdGNoIiwiYWZ0ZXIiLCJVc2VycyIsIl8iLCJfXyIsInJlcyIsIlByb3h5IiwiZ2V0IiwicHJvcCIsImZsYWciLCJDb25zdGFudHMiLCJVc2VyRmxhZ3MiLCJTVEFGRiIsImhhc0ZsYWciLCJjYWxsIiwib25EaXNwYXRjaCIsIkV4cGVyaW1lbnRTdG9yZSIsImZpbmQiLCJoIiwiYWN0aW9uSGFuZGxlciIsIkNPTk5FQ1RJT05fT1BFTiIsInR5cGUiLCJndWlsZEV4cGVyaW1lbnRzIiwiZXhwZXJpbWVudHMiLCJ1c2VyIiwiZ2V0Q3VycmVudFVzZXIiLCJmbGFncyIsIkRldmVsb3BlckV4cGVyaW1lbnRTdG9yZSIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwidW5wYXRjaEFsbCJdLCJtYXBwaW5ncyI6IkFBQUEsd0tBTWFBLElBQUksS0FBSkEsQ0FBSSxDQVVLQyxVQUFVLEtBQVZBLFVBQVUsQ0EyRGhCQyxRQUFRLEtBQVJBLFFBQVEsbUJBM0VjLDhCQUFpQixZQUNqQyw4QkFBaUIsWUFDaEIsNkJBQVUsRUFFM0JDLENBQU8sQ0FBR0MsR0FBQUEsQ0FBTSxPQUFBLEVBQUMscUJBQXFCLENBQUMsQ0FFaENKLENBQUksQ0FBRyxDQUNqQkssSUFBSSxDQUFFLGFBQWEsQ0FDbkJDLEVBQUUsQ0FBRSxpQkFBaUIsQ0FDckJDLE9BQU8sQ0FBRSxDQUFBLENBQUssQ0FDZEMsT0FBTyxDQUFFLENBQUEsQ0FBSSxDQUNiQyxJQUFJLENBQUUsQ0FBQSxDQUFLLENBRVhDLFNBQVMsQ0FBRSxDQUFBLENBQUssQ0FDbEIsQUFFTSxnQkFBZVQsVUFBVSxFQUFHLENBQ2hDRCxDQUFJLENBQUNVLFNBQVMsQ0FBRyxDQUFBLENBQUssQUFHdEIsS0FBTUMsQ0FBTSxDQUFVQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBVSxXQUFBLENBQUNDLGVBQWUsQ0FBQ0MsZ0JBQWdCLENBQUNDLEtBQUssQ0FBQyxBQUFDLEFBR3ZGLElBQUlqQixDQUFJLENBQUNVLFNBQVMsQ0FBRSxNQUFPLEFBRzNCLEtBQU1RLENBQU8sQ0FBR2YsQ0FBTyxDQUFDZ0IsS0FBSyxDQUFDQyxDQUFLLE1BQUEsQ0FBRSxnQkFBZ0IsQ0FBRSxDQUFDQyxDQUFDLENBQUVDLENBQUUsQ0FBRUMsQ0FBRyxHQUFLLENBQ3BFLEdBQUtBLENBQUcsQ0FFUixPQUFPLElBQUlDLEtBQUssQ0FBQyxFQUFFLENBQUUsQ0FDbEJDLEdBQUcsQ0FBSEEsQ0FBSUosQ0FBQyxDQUFFSyxDQUFJLEdBQ1IsQUFBSUEsQUFBUyxTQUFTLEdBRGxCQSxDQUFJLEFBQ2MsQ0FDWixTQUFVQyxDQUFJLENBQUUsUUFDcEIsQUFEY0EsQ0FBSSxHQUNMQyxDQUFTLFVBQUEsQ0FBQ0MsU0FBUyxDQUFDQyxLQUFLLEVBSS9CUCxDQUFHLENBQUNRLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FMZEwsQ0FBSSxDQUtpQixBQUZsQyxDQUdILENBR0dKLENBQUcsQ0FYTkcsQ0FBSSxDQVdRLEFBRmYsQUFHSCxDQUNILENBQUMsQUFBQyxBQWhCYyxDQWlCbkIsQ0FBQyxBQUFDLEFBRUgsVUFBU08sVUFBVSxFQUFHLENBRW5CLElBQU1DLENBQWUsQ0FBR3ZCLENBQU0sQ0FBQ3dCLElBQUksQ0FBQ0MsQ0FBQyxFQUFJQSxBQUFXLGlCQUFpQixHQUE1QkEsQ0FBQyxDQUFDL0IsSUFBSSxBQUFzQixDQUFDLEFBQUMsQ0FDbkU2QixDQUFlLEVBQUVBLENBQWUsQ0FBQ0csYUFBYSxDQUFDQyxlQUFlLENBQUMsQ0FDaEVDLElBQUksQ0FBRSxpQkFBaUIsQ0FDdkJDLGdCQUFnQixDQUFFLEVBQUUsQ0FDcEJDLFdBQVcsQ0FBRSxFQUFFLENBQ2ZDLElBQUksQ0FBRSxDQUNILEdBQUd0QixDQUFLLE1BQUEsQ0FBQ3VCLGNBQWMsRUFBRSxDQUN6QkMsS0FBSyxDQUFFLENBQUMsQ0FDVixDQUNILENBQUMsQUFHRixLQUFNQyxDQUF3QixDQUFHbEMsQ0FBTSxDQUFDd0IsSUFBSSxDQUFDQyxDQUFDLEVBQUlBLEFBQVcsMEJBQTBCLEdBQXJDQSxDQUFDLENBQUMvQixJQUFJLEFBQStCLENBQUMsQUFBQyxDQUNyRndDLENBQXdCLEVBQUVBLENBQXdCLENBQUNSLGFBQWEsQ0FBQ0MsZUFBZSxFQUFFLENBRXRGeEIsQ0FBVSxXQUFBLENBQUNnQyxXQUFXLENBQUMsaUJBQWlCLENBQUViLFVBQVUsQ0FBQyxDQUNyRGYsQ0FBTyxFQUFFLENBQ1gsQUFFR0UsQ0FBSyxNQUFBLENBQUN1QixjQUFjLEVBQUUsQ0FDdkJWLFVBQVUsRUFBRSxDQUVabkIsQ0FBVSxXQUFBLENBQUNpQyxTQUFTLENBQUMsaUJBQWlCLENBQUVkLFVBQVUsQ0FBQyxDQUd4RCxBQUVNLFNBQVMvQixRQUFRLEVBQUcsQ0FDeEJGLENBQUksQ0FBQ1UsU0FBUyxDQUFHLENBQUEsQ0FBSSxDQUNyQlAsQ0FBTyxDQUFDNkMsVUFBVSxFQUFFLENBQ3RCIn0=
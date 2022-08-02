"use strict";const a=require("../../../common/logger"),b=_interopRequireWildcard(require("../../../client/api/settings")),c=require("path"),d=_interopRequireWildcard(require("../../../client/managers/index")),e=_interopRequireWildcard(require("@webpack"));function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const f=(0,a.createLogger)();module.exports=class Unbound{webpack=e;async initialize(){global.unbound=this,f.log("Initializing...");let a=performance.now();for(let c in this.apis={settings:b},this.apis){let e=this.apis[c];await e.initialize()}this.managers={plugins:new d.Plugins},this.managers.plugins.initialize(),f.log(`Initialized in ${Math.round(performance.now()-a)}ms.`)}async shutdown(){f.log("Shutting down..."),this.managers.plugins.shutdown(),await e.shutdown();let a=(0,c.basename)((0,c.resolve)(__dirname,"..","..","..")),b=Object.keys(require.cache).filter(b=>~b.indexOf(a));b.map(a=>delete require.cache[a]),delete global.unbound,global.unbound={async initialize(){let a=require("@webpack");await a.initialize();let b=require("./unbound"),c=new b;await c.initialize()},restart:()=>global.unbound.initialize(),shutdown(){}}}async restart(){await this.shutdown(),await global.unbound?.initialize?.()}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmVsb2FkL3NwbGFzaC9zdHJ1Y3R1cmVzL3VuYm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogTW9yZSBsaW1pdGVkIHZlcnNpb24gb2YgdGhlIG9yaWdpbmFsIHVuYm91bmQgZ2xvYmFsLlxyXG4gKiBJdCdzIGR1cGxpY2F0ZSBjb2RlLCBidXQgbG9hZGluZyB0aGUgb3JpZ2luYWwgd2lsbFxyXG4gKiBjYXVzZSBpdCB0byBub3QgbG9hZCBhcyB0aGVyZSdzIEFQSXMgd2hpY2ggcmVseSBvblxyXG4gKiB3ZWJwYWNrIG1vZHVsZXMgdGhhdCBhcmVuJ3QgaW4gdGhlIHNwbGFzaCBzY3JlZW4uXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xyXG5pbXBvcnQgKiBhcyBTZXR0aW5ncyBmcm9tICdAYXBpL3NldHRpbmdzJztcclxuaW1wb3J0IHsgYmFzZW5hbWUsIHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0ICogYXMgTWFuYWdlcnMgZnJvbSAnQG1hbmFnZXJzJztcclxuaW1wb3J0ICogYXMgV2VicGFjayBmcm9tICdAd2VicGFjayc7XHJcblxyXG5jb25zdCBMb2dnZXIgPSBjcmVhdGVMb2dnZXIoKTtcclxuXHJcbmNsYXNzIFVuYm91bmQge1xyXG4gICBhcGlzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gICB3ZWJwYWNrID0gV2VicGFjaztcclxuICAgbWFuYWdlcnM6IHtcclxuICAgICAgcGx1Z2luczogTWFuYWdlcnMuUGx1Z2lucztcclxuICAgfTtcclxuXHJcbiAgIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgIChnbG9iYWwudW5ib3VuZCBhcyBhbnkpID0gdGhpcztcclxuXHJcbiAgICAgIExvZ2dlci5sb2coJ0luaXRpYWxpemluZy4uLicpO1xyXG4gICAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgdGhpcy5hcGlzID0ge1xyXG4gICAgICAgICBzZXR0aW5nczogU2V0dGluZ3NcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEluaXRpYWxpemUgQVBJc1xyXG4gICAgICBmb3IgKGNvbnN0IGFwaSBpbiB0aGlzLmFwaXMpIHtcclxuICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmFwaXNbYXBpXTtcclxuICAgICAgICAgYXdhaXQgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm1hbmFnZXJzID0ge1xyXG4gICAgICAgICBwbHVnaW5zOiBuZXcgTWFuYWdlcnMuUGx1Z2lucygpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLm1hbmFnZXJzLnBsdWdpbnMuaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgICAgTG9nZ2VyLmxvZyhgSW5pdGlhbGl6ZWQgaW4gJHtNYXRoLnJvdW5kKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpfW1zLmApO1xyXG4gICB9XHJcblxyXG4gICBhc3luYyBzaHV0ZG93bigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgTG9nZ2VyLmxvZygnU2h1dHRpbmcgZG93bi4uLicpO1xyXG5cclxuICAgICAgdGhpcy5tYW5hZ2Vycy5wbHVnaW5zLnNodXRkb3duKCk7XHJcblxyXG4gICAgICBhd2FpdCBXZWJwYWNrLnNodXRkb3duKCk7XHJcblxyXG4gICAgICAvLyBDbGVhciByZXF1aXJlIGNhY2hlIHRvIGFsbG93IGZvciBhbnkgY29kZSBjaGFuZ2VzIHRvIGFwcGx5XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IGJhc2VuYW1lKHJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnLi4nKSk7XHJcbiAgICAgIGNvbnN0IGNhY2hlID0gT2JqZWN0LmtleXMocmVxdWlyZS5jYWNoZSkuZmlsdGVyKGMgPT4gfmMuaW5kZXhPZihwYXJlbnQpKTtcclxuICAgICAgY2FjaGUubWFwKGMgPT4gZGVsZXRlIHJlcXVpcmUuY2FjaGVbY10pO1xyXG5cclxuICAgICAgZGVsZXRlIGdsb2JhbC51bmJvdW5kO1xyXG4gICAgICAoZ2xvYmFsLnVuYm91bmQgYXMgYW55KSA9IHtcclxuICAgICAgICAgaW5pdGlhbGl6ZTogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBXZWJwYWNrID0gcmVxdWlyZSgnQHdlYnBhY2snKTtcclxuICAgICAgICAgICAgYXdhaXQgV2VicGFjay5pbml0aWFsaXplKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBDbGllbnQgPSByZXF1aXJlKCcuL3VuYm91bmQnKTtcclxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xpZW50KCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGluc3RhbmNlLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgcmVzdGFydDogKCkgPT4gZ2xvYmFsLnVuYm91bmQuaW5pdGlhbGl6ZSgpLFxyXG4gICAgICAgICBzaHV0ZG93bjogKCkgPT4geyB9XHJcbiAgICAgIH07XHJcbiAgIH1cclxuXHJcbiAgIGFzeW5jIHJlc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2h1dGRvd24oKTtcclxuICAgICAgYXdhaXQgZ2xvYmFsLnVuYm91bmQ/LmluaXRpYWxpemU/LigpO1xyXG4gICB9XHJcbn07XHJcblxyXG5leHBvcnQgPSBVbmJvdW5kOyJdLCJuYW1lcyI6WyJMb2dnZXIiLCJjcmVhdGVMb2dnZXIiLCJVbmJvdW5kIiwid2VicGFjayIsIldlYnBhY2siLCJpbml0aWFsaXplIiwiZ2xvYmFsIiwidW5ib3VuZCIsImxvZyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJhcGkiLCJhcGlzIiwic2V0dGluZ3MiLCJTZXR0aW5ncyIsImluc3RhbmNlIiwibWFuYWdlcnMiLCJwbHVnaW5zIiwiTWFuYWdlcnMiLCJQbHVnaW5zIiwiTWF0aCIsInJvdW5kIiwic2h1dGRvd24iLCJwYXJlbnQiLCJiYXNlbmFtZSIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJjYWNoZSIsIk9iamVjdCIsImtleXMiLCJyZXF1aXJlIiwiZmlsdGVyIiwiYyIsImluZGV4T2YiLCJtYXAiLCJDbGllbnQiLCJyZXN0YXJ0Il0sIm1hcHBpbmdzIjoiQUFPQSw2QkFBNkIsd0JBQWdCLG9DQUNuQiw4QkFBZSxhQUNQLE1BQU0sb0NBQ2QsZ0NBQVcscUNBQ1osVUFBVSwycEJBRW5DLE1BQU1BLENBQU0sQ0FBR0MsR0FBQUEsQ0FBWSxhQUFBLEdBQUUsQUFBQyxnQkFFOUIsTUFBTUMsT0FBTyxDQUVWQyxPQUFPLENBQUdDLENBQU8sQUFBQyxBQUtsQixPQUFNQyxVQUFVLEVBQWtCLENBQy9CLEFBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFXLElBQUksQ0FFOUJQLENBQU0sQ0FBQ1EsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEFBQzdCLEtBQU1DLENBQUssQ0FBR0MsV0FBVyxDQUFDQyxHQUFHLEVBQUUsQUFBQyxBQU9oQyxLQUFLLElBQU1DLENBQUcsSUFMZCxJQUFJLENBQUNDLElBQUksQ0FBRyxDQUNUQyxRQUFRLENBQUVDLENBQVEsQ0FDcEIsQ0FHaUIsSUFBSSxDQUFDRixJQUFJLENBQUUsQ0FDMUIsSUFBTUcsQ0FBUSxDQUFHLElBQUksQ0FBQ0gsSUFBSSxDQUFDRCxDQUFHLENBQUMsQUFBQyxBQUNoQyxPQUFNSSxDQUFRLENBQUNYLFVBQVUsRUFBRSxDQUM3QixBQUVELElBQUksQ0FBQ1ksUUFBUSxDQUFHLENBQ2JDLE9BQU8sQ0FBRSxJQUFJQyxDQUFRLENBQUNDLE9BQU8sQUFBRSxDQUNqQyxDQUVELElBQUksQ0FBQ0gsUUFBUSxDQUFDQyxPQUFPLENBQUNiLFVBQVUsRUFBRSxDQUVsQ0wsQ0FBTSxDQUFDUSxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUVhLElBQUksQ0FBQ0MsS0FBSyxDQUFDWixXQUFXLENBQUNDLEdBQUcsRUFBRSxDQUFHRixDQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUMxRSxBQUVELE1BQU1jLFFBQVEsRUFBa0IsQ0FDN0J2QixDQUFNLENBQUNRLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUU5QixJQUFJLENBQUNTLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDSyxRQUFRLEVBQUUsQ0FFaEMsTUFBTW5CLENBQU8sQ0FBQ21CLFFBQVEsRUFBRSxBQUd4QixLQUFNQyxDQUFNLENBQUdDLEdBQUFBLENBQVEsU0FBQSxFQUFDQyxHQUFBQSxDQUFPLFFBQUEsRUFBQ0MsU0FBUyxDQUFFLElBQUksQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FDdkRDLENBQUssQ0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDLENBQUNJLE1BQU0sQ0FBQ0MsQ0FBQyxFQUFJLENBQUNBLENBQUMsQ0FBQ0MsT0FBTyxDQUFDVixDQUFNLENBQUMsQ0FBQyxBQURWLEFBRTlESSxDQUFBQSxDQUFLLENBQUNPLEdBQUcsQ0FBQ0YsQ0FBQyxFQUFJLE9BQU9GLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDSyxDQUFDLENBQUMsQ0FBQyxDQUV2QyxPQUFPM0IsTUFBTSxDQUFDQyxPQUFPLENBQ3JCLEFBQUNELE1BQU0sQ0FBQ0MsT0FBTyxDQUFXLENBQ1gsTUFBWkYsVUFBVSxFQUFjLENBQ3JCLElBQU1ELENBQU8sQ0FBRzJCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQUFBQyxBQUNwQyxPQUFNM0IsQ0FBTyxDQUFDQyxVQUFVLEVBQUUsQUFFMUIsS0FBTStCLENBQU0sQ0FBR0wsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUM3QmYsQ0FBUSxDQUFHLElBQUlvQixDQUFNLEFBQUUsQUFETyxBQUVwQyxPQUFNcEIsQ0FBUSxDQUFDWCxVQUFVLEVBQUUsQ0FDN0IsQ0FDRGdDLE9BQU8sQ0FBRSxJQUFNL0IsTUFBTSxDQUFDQyxPQUFPLENBQUNGLFVBQVUsRUFBRSxDQUNoQyxBQUFWa0IsUUFBUSxFQUFRLEVBQUcsQ0FDckIsQ0FDSCxBQUVELE1BQU1jLE9BQU8sRUFBa0IsQ0FDNUIsTUFBTSxJQUFJLENBQUNkLFFBQVEsRUFBRSxDQUNyQixNQUFNakIsTUFBTSxDQUFDQyxPQUFPLEVBQUVGLFVBQVUsSUFBSSxDQUN0QyxDQUNILEFBRWdCIn0=
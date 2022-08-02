"use strict";const a=require("path"),b=_interopRequireWildcard(require("../../common/utilities")),c=require("../../common/logger"),d=_interopRequireWildcard(require("../core/builtins")),e=_interopRequireWildcard(require("../core/patches")),f=_interopRequireWildcard(require("../managers/index")),g=_interopRequireWildcard(require("@webpack")),h=require("http"),i=function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(require("../modules/patcher/index")),j=_interopRequireWildcard(require("@api"));function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const k=(0,c.createLogger)();class Unbound{#sockets=new Set;utilities=b;patcher=i.default;webpack=g;async initialize(){global.unbound=this,k.log("Initializing...");let a=performance.now();for(let b in await e.initialize(),await d.initialize(),this.apis={},j){let c=b.toLowerCase();this.apis[c]=j[b],await this.apis[c].initialize?.()}this.managers={plugins:new f.Plugins,themes:new f.Themes},this.managers.themes.initialize(),this.managers.plugins.initialize(),k.log(`Initialized in ${Math.round(performance.now()-a)}ms.`),this.#setupServer()}async shutdown(){for(let b of this.#sockets)b.destroy(),this.#sockets.delete(b);for(let c in this.server?.close?.(()=>k.debug("Server closed")),k.log("Shutting down..."),this.managers.plugins.shutdown(),this.managers.themes.shutdown(),j){let f=c.toLowerCase();this.apis[f]=j[c],await this.apis[f].shutdown?.()}await e.shutdown(),await d.shutdown(),await g.shutdown();let h=[...document.querySelectorAll('style[data-unbound="true"')];for(let i of h)i.remove();let l=(0,a.basename)((0,a.resolve)(__dirname,"..","..","..")),m=Object.keys(require.cache).filter(a=>~a.indexOf(l));for(let n=0,o=m.length;n<o;n++){let p=require.cache[m[n]];delete require.cache[m[n]];for(let q=0;q<p.parent.children.filter(Boolean).length;q++)if(p.parent.children[q]&& ~p.parent.children[q].path.indexOf(l)){p.parent.children.splice(q,1);break}}delete global.unbound,global.unbound={async initialize(){let a=require("@webpack");await a.initialize();let b=require("@structures/unbound"),c=new b;await c.initialize()},restart:()=>global.unbound.initialize(),shutdown(){}}}async restart(){await this.shutdown(),await global.unbound?.initialize?.()}#setupServer(){this.server=(0,h.createServer)(this.#onRequest.bind(this)),this.server.on("connection",a=>{this.#sockets.add(a),this.server.once("close",()=>{this.#sockets.delete(a)})}),this.server.listen(9859,()=>k.debug("Server running at port 9859"))}#onRequest(l,m){m.statusCode=200;let n=l.method.toLowerCase(),o=l.url.split(/[?#]/),p=o[1],q=o[0];if(m.setHeader("Access-Control-Allow-Origin","*"),!q||"/"===q)return m.end();let r=(0,a.join)(__dirname,"..","routes",q);if(require.resolve(r))try{let s=require(r);if(!s[n])return m.statusCode=405,m.end();s[n](this,l,m,p)}catch(t){k.error(`Router failed to route request. (URL: ${q})`,t),m.statusCode=500,m.end()}else m.statusCode=404,m.end()}}module.exports=Unbound
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvc3RydWN0dXJlcy91bmJvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhc2VuYW1lLCBqb2luLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICdAY29tbW9uL3V0aWxpdGllcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcclxuaW1wb3J0ICogYXMgQnVpbHRJbnMgZnJvbSAnQGNvcmUvYnVpbHRpbnMnO1xyXG5pbXBvcnQgKiBhcyBQYXRjaGVzIGZyb20gJ0Bjb3JlL3BhdGNoZXMnO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VycyBmcm9tICdAbWFuYWdlcnMnO1xyXG5pbXBvcnQgKiBhcyBXZWJwYWNrIGZyb20gJ0B3ZWJwYWNrJztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSAnaHR0cCc7XHJcbmltcG9ydCBQYXRjaGVyIGZyb20gJ0BwYXRjaGVyJztcclxuaW1wb3J0ICogYXMgQVBJcyBmcm9tICdAYXBpJztcclxuXHJcbmNvbnN0IExvZ2dlciA9IGNyZWF0ZUxvZ2dlcigpO1xyXG5cclxuY2xhc3MgVW5ib3VuZCB7XHJcbiAgICNzb2NrZXRzOiBhbnkgPSBuZXcgU2V0KCk7XHJcbiAgIHNlcnZlcjogYW55O1xyXG4gICBhcGlzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gICB1dGlsaXRpZXMgPSBVdGlsaXRpZXM7XHJcbiAgIHBhdGNoZXIgPSBQYXRjaGVyO1xyXG4gICB3ZWJwYWNrID0gV2VicGFjaztcclxuICAgbWFuYWdlcnM6IHtcclxuICAgICAgcGx1Z2luczogTWFuYWdlcnMuUGx1Z2lucztcclxuICAgICAgdGhlbWVzOiBNYW5hZ2Vycy5UaGVtZXM7XHJcbiAgIH07XHJcblxyXG4gICBhc3luYyBpbml0aWFsaXplKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICBnbG9iYWwudW5ib3VuZCA9IHRoaXM7XHJcblxyXG4gICAgICBMb2dnZXIubG9nKCdJbml0aWFsaXppbmcuLi4nKTtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgIC8vIEluaXRpYWxpemUgY29yZSBwYXRjaGVzXHJcbiAgICAgIGF3YWl0IFBhdGNoZXMuaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgICAgLy8gSW5pdGlhbGl6ZSBidWlsdGluc1xyXG4gICAgICBhd2FpdCBCdWlsdElucy5pbml0aWFsaXplKCk7XHJcblxyXG4gICAgICAvLyBJbml0aWFsaXplIEFQSXNcclxuICAgICAgdGhpcy5hcGlzID0ge307XHJcbiAgICAgIGZvciAoY29uc3QgYXBpIGluIEFQSXMpIHtcclxuICAgICAgICAgY29uc3QgbmFtZSA9IGFwaS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgdGhpcy5hcGlzW25hbWVdID0gQVBJc1thcGldO1xyXG4gICAgICAgICBhd2FpdCB0aGlzLmFwaXNbbmFtZV0uaW5pdGlhbGl6ZT8uKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubWFuYWdlcnMgPSB7XHJcbiAgICAgICAgIHBsdWdpbnM6IG5ldyBNYW5hZ2Vycy5QbHVnaW5zKCksXHJcbiAgICAgICAgIHRoZW1lczogbmV3IE1hbmFnZXJzLlRoZW1lcygpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLm1hbmFnZXJzLnRoZW1lcy5pbml0aWFsaXplKCk7XHJcbiAgICAgIHRoaXMubWFuYWdlcnMucGx1Z2lucy5pbml0aWFsaXplKCk7XHJcblxyXG4gICAgICBMb2dnZXIubG9nKGBJbml0aWFsaXplZCBpbiAke01hdGgucm91bmQocGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCl9bXMuYCk7XHJcblxyXG4gICAgICAvLyBPZmZsb2FkIHNlcnZlciB0byBhbm90aGVyIHRocmVhZFxyXG4gICAgICB0aGlzLiNzZXR1cFNlcnZlcigpO1xyXG4gICB9XHJcblxyXG4gICBhc3luYyBzaHV0ZG93bigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgLy8gRGVzdHJveSBhbGwgcGVuZGluZyBIVFRQIHNvY2tldHNcclxuICAgICAgZm9yIChjb25zdCBzb2NrZXQgb2YgdGhpcy4jc29ja2V0cykge1xyXG4gICAgICAgICBzb2NrZXQuZGVzdHJveSgpO1xyXG4gICAgICAgICB0aGlzLiNzb2NrZXRzLmRlbGV0ZShzb2NrZXQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNlcnZlcj8uY2xvc2U/LigoKSA9PiBMb2dnZXIuZGVidWcoJ1NlcnZlciBjbG9zZWQnKSk7XHJcblxyXG4gICAgICBMb2dnZXIubG9nKCdTaHV0dGluZyBkb3duLi4uJyk7XHJcblxyXG4gICAgICB0aGlzLm1hbmFnZXJzLnBsdWdpbnMuc2h1dGRvd24oKTtcclxuICAgICAgdGhpcy5tYW5hZ2Vycy50aGVtZXMuc2h1dGRvd24oKTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgYXBpIGluIEFQSXMpIHtcclxuICAgICAgICAgY29uc3QgbmFtZSA9IGFwaS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgdGhpcy5hcGlzW25hbWVdID0gQVBJc1thcGldO1xyXG4gICAgICAgICBhd2FpdCB0aGlzLmFwaXNbbmFtZV0uc2h1dGRvd24/LigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhd2FpdCBQYXRjaGVzLnNodXRkb3duKCk7XHJcbiAgICAgIGF3YWl0IEJ1aWx0SW5zLnNodXRkb3duKCk7XHJcbiAgICAgIGF3YWl0IFdlYnBhY2suc2h1dGRvd24oKTtcclxuXHJcbiAgICAgIC8vIEB0cy1pZ25vcmUgUmVtb3ZlIGFsbCBzdHlsZXMgcmVsYXRlZCB0byB1bmJvdW5kXHJcbiAgICAgIGNvbnN0IHN0eWxlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZVtkYXRhLXVuYm91bmQ9XCJ0cnVlXCInKV07XHJcbiAgICAgIGZvciAoY29uc3Qgc3R5bGUgb2Ygc3R5bGVzKSBzdHlsZS5yZW1vdmUoKTtcclxuXHJcbiAgICAgIC8vIENsZWFyIHJlcXVpcmUgY2FjaGUgdG8gYWxsb3cgZm9yIGFueSBjb2RlIGNoYW5nZXMgdG8gYXBwbHlcclxuICAgICAgY29uc3QgcGFyZW50ID0gYmFzZW5hbWUocmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICcuLicsICcuLicpKTtcclxuICAgICAgY29uc3QgY2FjaGUgPSBPYmplY3Qua2V5cyhyZXF1aXJlLmNhY2hlKS5maWx0ZXIoYyA9PiB+Yy5pbmRleE9mKHBhcmVudCkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNhY2hlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgIGNvbnN0IG1vZCA9IHJlcXVpcmUuY2FjaGVbY2FjaGVbaV1dO1xyXG4gICAgICAgICBkZWxldGUgcmVxdWlyZS5jYWNoZVtjYWNoZVtpXV07XHJcblxyXG4gICAgICAgICAvLyBEZWxldGUgcGFyZW50IGNoaWxkcmVuIHRvIGF2b2lkIG1lbW9yeSBsZWFrc1xyXG4gICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG1vZC5wYXJlbnQuY2hpbGRyZW4uZmlsdGVyKEJvb2xlYW4pLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmICghbW9kLnBhcmVudC5jaGlsZHJlbltrXSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh+bW9kLnBhcmVudC5jaGlsZHJlbltrXS5wYXRoLmluZGV4T2YocGFyZW50KSkge1xyXG4gICAgICAgICAgICAgICBtb2QucGFyZW50LmNoaWxkcmVuLnNwbGljZShrLCAxKTtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkZWxldGUgZ2xvYmFsLnVuYm91bmQ7XHJcbiAgICAgIChnbG9iYWwudW5ib3VuZCBhcyBhbnkpID0ge1xyXG4gICAgICAgICBpbml0aWFsaXplOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFdlYnBhY2sgPSByZXF1aXJlKCdAd2VicGFjaycpO1xyXG4gICAgICAgICAgICBhd2FpdCBXZWJwYWNrLmluaXRpYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IENsaWVudCA9IHJlcXVpcmUoJ0BzdHJ1Y3R1cmVzL3VuYm91bmQnKTtcclxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xpZW50KCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGluc3RhbmNlLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgcmVzdGFydDogKCkgPT4gZ2xvYmFsLnVuYm91bmQuaW5pdGlhbGl6ZSgpLFxyXG4gICAgICAgICBzaHV0ZG93bjogKCkgPT4geyB9XHJcbiAgICAgIH07XHJcbiAgIH1cclxuXHJcbiAgIGFzeW5jIHJlc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2h1dGRvd24oKTtcclxuICAgICAgYXdhaXQgZ2xvYmFsLnVuYm91bmQ/LmluaXRpYWxpemU/LigpO1xyXG4gICB9XHJcblxyXG4gICAjc2V0dXBTZXJ2ZXIoKSB7XHJcbiAgICAgIHRoaXMuc2VydmVyID0gY3JlYXRlU2VydmVyKHRoaXMuI29uUmVxdWVzdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIHRoaXMuc2VydmVyLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldCkgPT4ge1xyXG4gICAgICAgICB0aGlzLiNzb2NrZXRzLmFkZChzb2NrZXQpO1xyXG5cclxuICAgICAgICAgdGhpcy5zZXJ2ZXIub25jZSgnY2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuI3NvY2tldHMuZGVsZXRlKHNvY2tldCk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuc2VydmVyLmxpc3Rlbig5ODU5LCAoKSA9PiBMb2dnZXIuZGVidWcoJ1NlcnZlciBydW5uaW5nIGF0IHBvcnQgOTg1OScpKTtcclxuICAgfVxyXG5cclxuICAgI29uUmVxdWVzdChyZXEsIHJlcykge1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuXHJcbiAgICAgIGNvbnN0IG1ldGhvZCA9IHJlcS5tZXRob2QudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3QgcGF0aCA9IHJlcS51cmwuc3BsaXQoL1s/I10vKTtcclxuICAgICAgY29uc3QgcXVlcnkgPSBwYXRoWzFdO1xyXG4gICAgICBjb25zdCB1cmwgPSBwYXRoWzBdO1xyXG5cclxuICAgICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuXHJcbiAgICAgIGlmICghdXJsIHx8IHVybCA9PT0gJy8nKSByZXR1cm4gcmVzLmVuZCgpO1xyXG5cclxuICAgICAgY29uc3Qgcm91dGUgPSBqb2luKF9fZGlybmFtZSwgJy4uJywgJ3JvdXRlcycsIHVybCk7XHJcbiAgICAgIGlmICghcmVxdWlyZS5yZXNvbHZlKHJvdXRlKSkge1xyXG4gICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcclxuICAgICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHJlcXVpcmUocm91dGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gNDA1IE1ldGhvZCBOb3QgQWxsb3dlZFxyXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlW21ldGhvZF0pIHtcclxuICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDU7XHJcbiAgICAgICAgICAgICAgIHJldHVybiByZXMuZW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluc3RhbmNlW21ldGhvZF0odGhpcywgcmVxLCByZXMsIHF1ZXJ5KTtcclxuICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBXZWxsLCBzaGl0LlxyXG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoYFJvdXRlciBmYWlsZWQgdG8gcm91dGUgcmVxdWVzdC4gKFVSTDogJHt1cmx9KWAsIGUpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59O1xyXG5cclxuZXhwb3J0ID0gVW5ib3VuZDsiXSwibmFtZXMiOlsiTG9nZ2VyIiwiY3JlYXRlTG9nZ2VyIiwiVW5ib3VuZCIsInNvY2tldHMiLCJTZXQiLCJ1dGlsaXRpZXMiLCJVdGlsaXRpZXMiLCJwYXRjaGVyIiwiUGF0Y2hlciIsIndlYnBhY2siLCJXZWJwYWNrIiwiaW5pdGlhbGl6ZSIsImdsb2JhbCIsInVuYm91bmQiLCJsb2ciLCJzdGFydCIsInBlcmZvcm1hbmNlIiwibm93IiwiYXBpIiwiUGF0Y2hlcyIsIkJ1aWx0SW5zIiwiYXBpcyIsIkFQSXMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJtYW5hZ2VycyIsInBsdWdpbnMiLCJNYW5hZ2VycyIsIlBsdWdpbnMiLCJ0aGVtZXMiLCJUaGVtZXMiLCJNYXRoIiwicm91bmQiLCJzZXR1cFNlcnZlciIsInNodXRkb3duIiwic29ja2V0IiwiZGVzdHJveSIsImRlbGV0ZSIsInNlcnZlciIsImNsb3NlIiwiZGVidWciLCJzdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsInJlbW92ZSIsInBhcmVudCIsImJhc2VuYW1lIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImNhY2hlIiwiT2JqZWN0Iiwia2V5cyIsInJlcXVpcmUiLCJmaWx0ZXIiLCJjIiwiaW5kZXhPZiIsImkiLCJsZW4iLCJsZW5ndGgiLCJtb2QiLCJrIiwiY2hpbGRyZW4iLCJCb29sZWFuIiwicGF0aCIsInNwbGljZSIsIkNsaWVudCIsImluc3RhbmNlIiwicmVzdGFydCIsImNyZWF0ZVNlcnZlciIsIm9uUmVxdWVzdCIsImJpbmQiLCJvbiIsImFkZCIsIm9uY2UiLCJsaXN0ZW4iLCJyZXEiLCJyZXMiLCJzdGF0dXNDb2RlIiwibWV0aG9kIiwidXJsIiwic3BsaXQiLCJxdWVyeSIsInNldEhlYWRlciIsImVuZCIsInJvdXRlIiwiam9pbiIsImUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQXdDLE1BQU0sb0NBQ25CLHdCQUFtQixhQUNqQixxQkFBZ0Isb0NBQ25CLGtCQUFnQixxQ0FDakIsaUJBQWUscUNBQ2QsbUJBQVcscUNBQ1osVUFBVSxhQUNOLE1BQU0scUZBQ2YsMEJBQVUscUNBQ1IsTUFBTSwycEJBRTVCLE1BQU1BLENBQU0sQ0FBR0MsR0FBQUEsQ0FBWSxhQUFBLEdBQUUsQUFBQyxBQUU5QixPQUFNQyxPQUFPLENBQ1YsQ0FBQ0MsT0FBTyxDQUFRLElBQUlDLEdBQUcsQUFBRSxBQUFDLEFBRzFCQyxDQUFBQSxTQUFTLENBQUdDLENBQVMsQUFBQyxBQUN0QkMsQ0FBQUEsT0FBTyxDQUFHQyxDQUFPLFFBQUEsQUFBQyxBQUNsQkMsQ0FBQUEsT0FBTyxDQUFHQyxDQUFPLEFBQUMsQUFNbEIsT0FBTUMsVUFBVSxFQUFrQixDQUMvQkMsTUFBTSxDQUFDQyxPQUFPLENBQUcsSUFBSSxDQUVyQmIsQ0FBTSxDQUFDYyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQUFDN0IsS0FBTUMsQ0FBSyxDQUFHQyxXQUFXLENBQUNDLEdBQUcsRUFBRSxBQUFDLEFBVWhDLEtBQUssSUFBTUMsQ0FBRyxJQVBkLE1BQU1DLENBQU8sQ0FBQ1IsVUFBVSxFQUFFLENBRzFCLE1BQU1TLENBQVEsQ0FBQ1QsVUFBVSxFQUFFLENBRzNCLElBQUksQ0FBQ1UsSUFBSSxDQUFHLEVBQUUsQ0FDSUMsQ0FBSSxDQUFFLENBQ3JCLElBQU1DLENBQUksQ0FBR0wsQ0FBRyxDQUFDTSxXQUFXLEVBQUUsQUFBQyxBQUUvQixDQUFBLElBQUksQ0FBQ0gsSUFBSSxDQUFDRSxDQUFJLENBQUMsQ0FBR0QsQ0FBSSxDQUFDSixDQUFHLENBQUMsQ0FDM0IsTUFBTSxJ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
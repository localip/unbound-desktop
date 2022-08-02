"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>Themes});const a=_interopRequireDefault(require("../../preload/compilers/structures/stylesheet")),b=require("../../common/logger"),c=require("@entities"),d=require("path"),e=_interopRequireDefault(require("./base"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}class Themes extends e.default{logger=(0,b.createLogger)("Managers","Themes");constructor(){super({name:"Themes",entity:"Theme",folder:"themes"})}resolvePayload(b,e,f=!1){let g=(0,d.resolve)(b,f?e.splash:e.main??""),h=require(g);return h instanceof a.default||h.append&&h.remove?class extends c.Theme{start(){h.append()}stop(){h.remove()}}:h.default??h}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvbWFuYWdlcnMvdGhlbWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGVldCBmcm9tICdAY29tcGlsZXJzL3N0cnVjdHVyZXMvc3R5bGVzaGVldCc7XHJcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAZW50aXRpZXMnO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZXMgZXh0ZW5kcyBCYXNlIHtcclxuICAgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKCdNYW5hZ2VycycsICdUaGVtZXMnKTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcih7XHJcbiAgICAgICAgIG5hbWU6ICdUaGVtZXMnLFxyXG4gICAgICAgICBlbnRpdHk6ICdUaGVtZScsXHJcbiAgICAgICAgIGZvbGRlcjogJ3RoZW1lcydcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIG92ZXJyaWRlIHJlc29sdmVQYXlsb2FkKHJvb3Q6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PiwgaXNTcGxhc2g6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICBjb25zdCBwYXRoID0gcmVzb2x2ZShyb290LCBpc1NwbGFzaCA/IGRhdGEuc3BsYXNoIDogZGF0YS5tYWluID8/ICcnKTtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IHJlcXVpcmUocGF0aCk7XHJcblxyXG4gICAgICBpZiAocGF5bG9hZCBpbnN0YW5jZW9mIFNoZWV0IHx8IChwYXlsb2FkLmFwcGVuZCAmJiBwYXlsb2FkLnJlbW92ZSkpIHtcclxuICAgICAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgVGhlbWUge1xyXG4gICAgICAgICAgICBzdGFydCgpIHtcclxuICAgICAgICAgICAgICAgcGF5bG9hZC5hcHBlbmQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RvcCgpIHtcclxuICAgICAgICAgICAgICAgcGF5bG9hZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcGF5bG9hZC5kZWZhdWx0ID8/IHBheWxvYWQ7XHJcbiAgIH1cclxufSJdLCJuYW1lcyI6WyJUaGVtZXMiLCJCYXNlIiwibG9nZ2VyIiwiY3JlYXRlTG9nZ2VyIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZW50aXR5IiwiZm9sZGVyIiwicmVzb2x2ZVBheWxvYWQiLCJyb290IiwiZGF0YSIsImlzU3BsYXNoIiwicGF0aCIsInJlc29sdmUiLCJzcGxhc2giLCJtYWluIiwicGF5bG9hZCIsInJlcXVpcmUiLCJTaGVldCIsImFwcGVuZCIsInJlbW92ZSIsIlRoZW1lIiwic3RhcnQiLCJzdG9wIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUEsa0dBTUEsU0E2QkMsd0JBN0JvQkEsTUFBTSwwQ0FOVCwrQ0FBa0MsYUFDdkIscUJBQWdCLFlBQ3ZCLFdBQVcsWUFDVCxNQUFNLG1DQUNiLFFBQVEsMkVBRVYsTUFBTUEsTUFBTSxTQUFTQyxDQUFJLFFBQUEsQ0FDckNDLE1BQU0sQ0FBR0MsR0FBQUEsQ0FBWSxhQUFBLEVBQUMsVUFBVSxDQUFFLFFBQVEsQ0FBQyxBQUFDLEFBRTVDQyxjQUFjLENBQ1gsS0FBSyxDQUFDLENBQ0hDLElBQUksQ0FBRSxRQUFRLENBQ2RDLE1BQU0sQ0FBRSxPQUFPLENBQ2ZDLE1BQU0sQ0FBRSxRQUFRLENBQ2xCLENBQUMsQ0FDSixBQUVELEFBQVNDLGNBQWMsQ0FBQ0MsQ0FBWSxDQUFFQyxDQUF5QixDQUFFQyxDQUFpQixDQUFHLENBQUEsQ0FBSyxDQUFFLENBQ3pGLElBQU1DLENBQUksQ0FBR0MsR0FBQUEsQ0FBTyxRQUFBLEVBRENKLENBQVksQ0FDTkUsQUFEbUNBLENBQWlCLENBQ3pDRCxBQURIQSxDQUF5QixDQUNqQkksTUFBTSxDQUFHSixBQURqQkEsQ0FBeUIsQ0FDSEssSUFBSSxFQUFJLEVBQUUsQ0FBQyxDQUM5REMsQ0FBTyxDQUFHQyxPQUFPLENBQUNMLENBQUksQ0FBQyxBQUR3QyxRQUdyRSxBQUFJSSxDQUFPLFlBQVlFLENBQUssUUFBQSxFQUFLRixDQUFPLENBQUNHLE1BQU0sRUFBSUgsQ0FBTyxDQUFDSSxNQUFNLEFBQUMsQ0FDeEQsY0FBY0MsQ0FBSyxNQUFBLENBQ3ZCQyxLQUFLLEVBQUcsQ0FDTE4sQ0FBTyxDQUFDRyxNQUFNLEVBQUUsQ0FDbEIsQUFFREksSUFBSSxFQUFHLENBQ0pQLENBQU8sQ0FBQ0ksTUFBTSxFQUFFLENBQ2xCLENBQ0gsQ0FHR0osQ0FBTyxDQUFDUSxPQUFPLEVBQUlSLENBQU8sQUFGaEMsQ0FHSCxDQUNIIn0=
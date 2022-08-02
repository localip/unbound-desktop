"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>ColorPicker});const a=require("../../../common/utilities/index"),b=require("../../../common/logger"),c=require("@webpack"),d=require("../../modules/webpack/common"),e=_interopRequireDefault(require("react")),f=_interopRequireDefault(require("./SettingsItem")),g=_interopRequireDefault(require("../AsyncComponent")),h=_interopRequireDefault(require("../../styles/components/colorpicker.css"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}h.default.append();const i=(0,b.createLogger)("Components","ColorPicker"),j=(0,a.memoize)(async()=>{try{let b=(0,c.findByDisplayName)("GuildSettingsRolesEditDisplay");if(!b)throw"GuildSettingsRolesEditDisplay was not found!";let d=(0,a.forceRender)(()=>new b({guild:{id:""},role:{id:""}}))(),e=(0,a.findInReactTree)(d,a=>a.type?.displayName==="ColorPickerFormItem"),f=e.type({role:{id:""}}),g=(0,a.findInReactTree)(f,a=>a.props?.defaultColor).type,h=await g().props.children.type,j=await (h._ctor??h._payload._result)();return j.default}catch(k){return i.error("Failed to get ColorPicker component!",k),()=>null}});class ColorPicker extends e.default.PureComponent{render(){let{className:b,title:c,description:h,required:i,default:k,defaultColors:l=d.Constants.ROLE_COLORS,...m}=this.props,n=this.props.children;delete this.props.children;let o=g.default.from(j);return e.default.createElement(f.default,Object.assign({title:c,description:h,required:i},m),e.default.createElement(o,Object.assign({colors:l,defaultColor:"number"==typeof k?k:d.Constants.DEFAULT_ROLE_COLOR,className:(0,a.classnames)("unbound-settings-color-picker",b)},this.props)),n)}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9zZXR0aW5ncy9Db2xvclBpY2tlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmluZEluUmVhY3RUcmVlLCBmb3JjZVJlbmRlciwgY2xhc3NuYW1lcywgbWVtb2l6ZSB9IGZyb20gJ0B1dGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XHJcbmltcG9ydCB7IGZpbmRCeURpc3BsYXlOYW1lIH0gZnJvbSAnQHdlYnBhY2snO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICdAd2VicGFjay9jb21tb24nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFNldHRpbmdzSXRlbSwgeyBTZXR0aW5nc0l0ZW1Qcm9wcyB9IGZyb20gJy4vU2V0dGluZ3NJdGVtJztcclxuaW1wb3J0IEFzeW5jQ29tcG9uZW50IGZyb20gJy4uL0FzeW5jQ29tcG9uZW50JztcclxuXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnQHN0eWxlcy9jb21wb25lbnRzL2NvbG9ycGlja2VyLmNzcyc7XHJcblN0eWxlcy5hcHBlbmQoKTtcclxuXHJcbmNvbnN0IExvZ2dlciA9IGNyZWF0ZUxvZ2dlcignQ29tcG9uZW50cycsICdDb2xvclBpY2tlcicpO1xyXG5cclxuY29uc3QgZ2V0UGlja2VyID0gbWVtb2l6ZShhc3luYyAoKSA9PiB7XHJcbiAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IEd1aWxkU2V0dGluZ3NSb2xlc0VkaXREaXNwbGF5ID0gZmluZEJ5RGlzcGxheU5hbWUoJ0d1aWxkU2V0dGluZ3NSb2xlc0VkaXREaXNwbGF5Jyk7XHJcbiAgICAgIGlmICghR3VpbGRTZXR0aW5nc1JvbGVzRWRpdERpc3BsYXkpIHtcclxuICAgICAgICAgdGhyb3cgJ0d1aWxkU2V0dGluZ3NSb2xlc0VkaXREaXNwbGF5IHdhcyBub3QgZm91bmQhJztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgQ29udGVudCA9IGZvcmNlUmVuZGVyKCgpID0+IG5ldyBHdWlsZFNldHRpbmdzUm9sZXNFZGl0RGlzcGxheSh7IGd1aWxkOiB7IGlkOiAnJyB9LCByb2xlOiB7IGlkOiAnJyB9IH0pKSgpO1xyXG4gICAgICBjb25zdCBDb2xvclBpY2tlckZvcm1JdGVtID0gZmluZEluUmVhY3RUcmVlKENvbnRlbnQsIHIgPT4gci50eXBlPy5kaXNwbGF5TmFtZSA9PT0gJ0NvbG9yUGlja2VyRm9ybUl0ZW0nKTtcclxuICAgICAgY29uc3QgQ29sb3JQaWNrZXIgPSBDb2xvclBpY2tlckZvcm1JdGVtLnR5cGUoeyByb2xlOiB7IGlkOiAnJyB9IH0pO1xyXG5cclxuICAgICAgY29uc3QgbG9hZGVyID0gZmluZEluUmVhY3RUcmVlKENvbG9yUGlja2VyLCByID0+IHIucHJvcHM/LmRlZmF1bHRDb2xvcikudHlwZTtcclxuICAgICAgY29uc3QgbGF6eSA9IGF3YWl0IGxvYWRlcigpLnByb3BzLmNoaWxkcmVuLnR5cGU7XHJcbiAgICAgIGNvbnN0IG1kbCA9IGF3YWl0IChsYXp5Ll9jdG9yID8/IGxhenkuX3BheWxvYWQuX3Jlc3VsdCkoKTtcclxuXHJcbiAgICAgIHJldHVybiBtZGwuZGVmYXVsdCBhcyBGbjtcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgTG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gZ2V0IENvbG9yUGlja2VyIGNvbXBvbmVudCEnLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiAoKSA9PiBudWxsO1xyXG4gICB9XHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIENvbG9yUGlja2VyUHJvcHMgZXh0ZW5kcyBTZXR0aW5nc0l0ZW1Qcm9wcyB7XHJcbiAgIGRlZmF1bHQ/OiBudW1iZXI7XHJcbiAgIGRlZmF1bHRDb2xvcnM/OiBudW1iZXJbXTtcclxuICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclBpY2tlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Q29sb3JQaWNrZXJQcm9wcz4ge1xyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICB0aXRsZSxcclxuICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICBkZWZhdWx0OiBkZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgIGRlZmF1bHRDb2xvcnMgPSBDb25zdGFudHMuUk9MRV9DT0xPUlMsXHJcbiAgICAgICAgIC4uLnJlc3RcclxuICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XHJcblxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGRlbGV0ZSB0aGlzLnByb3BzLmNoaWxkcmVuO1xyXG5cclxuICAgICAgY29uc3QgUGlja2VyID0gQXN5bmNDb21wb25lbnQuZnJvbShnZXRQaWNrZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgPFNldHRpbmdzSXRlbVxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGlja2VyXHJcbiAgICAgICAgICAgICAgIGNvbG9ycz17ZGVmYXVsdENvbG9yc31cclxuICAgICAgICAgICAgICAgZGVmYXVsdENvbG9yPXt0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnbnVtYmVyJyA/IGRlZmF1bHRWYWx1ZSA6IENvbnN0YW50cy5ERUZBVUxUX1JPTEVfQ09MT1J9XHJcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygndW5ib3VuZC1zZXR0aW5ncy1jb2xvci1waWNrZXInLCBjbGFzc05hbWUpfVxyXG4gICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2NoaWxkcmVuIGFzIEpTWC5FbGVtZW50fVxyXG4gICAgICAgICA8L1NldHRpbmdzSXRlbT5cclxuICAgICAgKTtcclxuICAgfVxyXG59OyJdLCJuYW1lcyI6WyJDb2xvclBpY2tlciIsIlN0eWxlcyIsImFwcGVuZCIsIkxvZ2dlciIsImNyZWF0ZUxvZ2dlciIsImdldFBpY2tlciIsIm1lbW9pemUiLCJHdWlsZFNldHRpbmdzUm9sZXNFZGl0RGlzcGxheSIsImZpbmRCeURpc3BsYXlOYW1lIiwiQ29udGVudCIsImZvcmNlUmVuZGVyIiwiZ3VpbGQiLCJpZCIsInJvbGUiLCJDb2xvclBpY2tlckZvcm1JdGVtIiwiZmluZEluUmVhY3RUcmVlIiwiciIsInR5cGUiLCJkaXNwbGF5TmFtZSIsImxvYWRlciIsInByb3BzIiwiZGVmYXVsdENvbG9yIiwibGF6eSIsImNoaWxkcmVuIiwibWRsIiwiX2N0b3IiLCJfcGF5bG9hZCIsIl9yZXN1bHQiLCJkZWZhdWx0IiwiZXJyb3IiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmVxdWlyZWQiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0Q29sb3JzIiwiQ29uc3RhbnRzIiwiUk9MRV9DT0xPUlMiLCJyZXN0IiwiUGlja2VyIiwiQXN5bmNDb21wb25lbnQiLCJmcm9tIiwiU2V0dGluZ3NJdGVtIiwiY29sb3JzIiwiREVGQVVMVF9ST0xFX0NPTE9SIiwiY2xhc3NuYW1lcyJdLCJtYXBwaW5ncyI6IkFBQUEsa0dBMENBLFNBb0NDLHdCQXBDb0JBLFdBQVcsbUJBMUNrQyxpQ0FBWSxZQUNqRCx3QkFBZ0IsWUFDWCxVQUFVLFlBQ2xCLDhCQUFpQixtQ0FDekIsT0FBTyxvQ0FFdUIsZ0JBQWdC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
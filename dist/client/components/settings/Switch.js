"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>Switch});const a=require("../discord"),b=_interopRequireDefault(require("react")),c=_interopRequireDefault(require("./SettingsItem")),d=_interopRequireDefault(require("../../styles/components/switch.css"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}d.default.append();class Switch extends b.default.PureComponent{render(){let{title:d,description:e,required:f,...g}=this.props;return delete this.props.children,b.default.createElement(c.default,Object.assign({description:e,required:f},g),b.default.createElement("div",{className:"unbound-settings-switch-container"},b.default.createElement("div",{className:"unbound-settings-switch-title"},d),b.default.createElement(a.Switch,Object.assign({},this.props))))}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9zZXR0aW5ncy9Td2l0Y2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN3aXRjaCBhcyBTd2l0Y2hJdGVtIH0gZnJvbSAnQGNvbXBvbmVudHMvZGlzY29yZCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgU2V0dGluZ3NJdGVtLCB7IFNldHRpbmdzSXRlbVByb3BzIH0gZnJvbSAnLi9TZXR0aW5nc0l0ZW0nO1xyXG5cclxuaW1wb3J0IFN0eWxlcyBmcm9tICdAc3R5bGVzL2NvbXBvbmVudHMvc3dpdGNoLmNzcyc7XHJcblN0eWxlcy5hcHBlbmQoKTtcclxuXHJcbmludGVyZmFjZSBTd2l0Y2hQcm9wcyBleHRlbmRzIFNldHRpbmdzSXRlbVByb3BzIHtcclxuICAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgIG9uQ2hhbmdlPzogRm47XHJcbiAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxTd2l0Y2hQcm9wcz4ge1xyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCByZXF1aXJlZCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgZGVsZXRlIHRoaXMucHJvcHMuY2hpbGRyZW47XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICA8U2V0dGluZ3NJdGVtXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5ib3VuZC1zZXR0aW5ncy1zd2l0Y2gtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYm91bmQtc2V0dGluZ3Mtc3dpdGNoLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPFN3aXRjaEl0ZW0gey4uLnRoaXMucHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L1NldHRpbmdzSXRlbT5cclxuICAgICAgKTtcclxuICAgfVxyXG59OyJdLCJuYW1lcyI6WyJTd2l0Y2giLCJTdHlsZXMiLCJhcHBlbmQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmVxdWlyZWQiLCJyZXN0IiwicHJvcHMiLCJjaGlsZHJlbiIsIlNldHRpbmdzSXRlbSIsImRpdiIsImNsYXNzTmFtZSIsIlN3aXRjaEl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBLGtHQWNBLFNBc0JDLHdCQXRCb0JBLE1BQU0sbUJBZFUsWUFBcUIsbUNBQ3hDLE9BQU8sb0NBRXVCLGdCQUFnQixvQ0FFN0Msb0NBQStCLDJFQUNsREMsQ0FBTSxRQUFBLENBQUNDLE1BQU0sRUFBRSxBQVFBLE9BQU1GLE1BQU0sU0FBU0csQ0FBSyxRQUFBLENBQUNDLGFBQWEsQ0FDcERDLE1BQU0sRUFBRyxDQUNOLEdBQU0sQ0FBRUMsS0FBSyxDQUFMQSxDQUFLLENBQUVDLFdBQVcsQ0FBWEEsQ0FBVyxDQUFFQyxRQUFRLENBQVJBLENBQVEsQ0FBRSxHQUFHQyxDQUFJLENBQUUsQ0FBRyxJQUFJLENBQUNDLEtBQUssQUFBQyxBQUs3RCxRQUZBLE9BQU8sSUFBSSxDQUFDQSxLQUFLLENBQUNDLFFBQVEsQ0FHdkIsd0JBQUNDLENBQVksUUFBQSxnQkFDVkwsV0FBVyxDQUFFQSxDQUFXLENBQ3hCQyxRQUFRLENBQUVBLENBQVEsRUFDZEMsQ0FBSSxFQUVSLHdCQUFDSSxLQUFHLEVBQUNDLFNBQVMsQ0FBQyxtQ0FBbUMsRUFDL0Msd0JBQUNELEtBQUcsRUFBQ0MsU0FBUyxDQUFDLCtCQUErQixFQUMxQ1IsQ0FBSyxDQUNILENBQ04sd0JBQUNTLENBQVUsT0FBQSxrQkFBSyxJQUFJLENBQUNMLEtBQUssRUFBSSxDQUMzQixDQUNNLEFBQ2hCLENBQ0osQ0FDSCxBQUFDIn0=
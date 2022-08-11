"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>D});const t=require("../../components/discord"),a=require("../../components/index"),s=require("../../api/settings"),l=require("../../modules/webpack/common"),E=_interopRequireDefault(require("react")),o=_interopRequireDefault(require("../../styles/panels/updater.css"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}o.default.append(),function(e){e.CHECKING="checking",e.UPDATING="updating",e.IDLE="idle"}(e||(e={}));class Updater extends E.default.Component{render(){let{settings:s}=this.props,o=s.get("status",e.IDLE),D=s.get("disabled",!1),c=s.get("updates",[]),N=s.get("force",!1),U={icon:"CloudDone",color:"var(--info-positive-foreground)",text:l.Locale.Messages.UNBOUND_UPDATER_DEFAULT_TEXT,description:l.Locale.Messages.UNBOUND_UPDATER_DEFAULT_DESCRIPTION};return D?(U.text=l.Locale.Messages.UNBOUND_UPDATER_DISABLED_TEXT,U.description=l.Locale.Messages.UNBOUND_UPDATER_DISABLED_DESCRIPTION,U.color="var(--info-warning-foreground)",U.icon="PrivacyAndSafety"):N?(U.text=l.Locale.Messages.UNBOUND_UPDATER_FAILED_TEXT,U.description=l.Locale.Messages.UNBOUND_UPDATER_FAILED_DESCRIPTION,U.color="var(--info-danger-foreground)",U.icon="CloseCircle"):o===e.CHECKING?(U.text=l.Locale.Messages.UNBOUND_UPDATER_FETCHING_TEXT,U.description=l.Locale.Messages.UNBOUND_UPDATER_FETCHING_DESCRIPTION,U.color="var(--header-primary)"):o===e.UPDATING?(U.text=l.Locale.Messages.UNBOUND_UPDATER_UPDATING_TEXT,U.description=l.Locale.Messages.UNBOUND_UPDATER_UPDATING_DESCRIPTION,U.icon="UpdateAvailable",U.color="var(--header-primary)"):c.length&&(U.text=l.Locale.Messages.UNBOUND_UPDATER_NEW_UPDATES_TEXT,U.description=l.Locale.Messages.UNBOUND_UPDATER_NEW_UPDATES_DESCRIPTION,U.icon="CloudDownload",U.color="var(--header-primary)"),E.default.createElement(a.ErrorBoundary,null,E.default.createElement(t.FormTitle,{tag:"h1",className:"unbound-settings-title"},l.Locale.Messages.UNBOUND_UPDATER),E.default.createElement("div",{className:"unbound-updater"},E.default.createElement("div",{className:"unbound-updater-icon-container"},o===e.CHECKING?E.default.createElement(t.Spinner,{className:"unbound-updater-checking",type:t.Spinner.Type.SPINNING_CIRCLE}):E.default.createElement(a.Icon,{style:{color:U.color},className:"unbound-updater-icon",name:U.icon})),E.default.createElement("div",{className:"unbound-updater-status-container"},E.default.createElement(t.FormTitle,{className:"unbound-updater-status",tag:"h3"},U.text),E.default.createElement(t.Text,{tag:"h3"},U.description))),E.default.createElement("div",{className:"unbound-updater-actions"},!1,E.default.createElement(t.Button,{disabled:!1,size:t.Button.Sizes.SMALL,onClick(){s.set("status",e.CHECKING),setTimeout(()=>s.set("status",e.IDLE),2e3)}},l.Locale.Messages.UNBOUND_UPDATER_CHECK_FOR_UPDATES),E.default.createElement(t.Button,{disabled:o===e.CHECKING,className:"unbound-updater-actions-disable",color:D?t.Button.Colors.GREEN:t.Button.Colors.RED,size:t.Button.Sizes.SMALL,onClick:()=>s.toggle("disabled",!1)},D?l.Locale.Messages.UNBOUND_UPDATER_ENABLE_UPDATES:l.Locale.Messages.UNBOUND_UPDATER_DISABLE_UPDATES)),E.default.createElement(a.Divider,null),E.default.createElement("div",{className:"unbound-updater-updates-container"},0===c.length?E.default.createElement("div",{className:"unbound-updater-no-updates"},E.default.createElement("img",{className:"unbound-updater-placeholder-image","data-is-checking":o===e.CHECKING,src:D?"/assets/b5eb2f7d6b3f8cc9b60be4a5dcf28015.svg":o!==e.CHECKING?"/assets/13cb217fd14b022bf4b00dcc8c157238.svg":"/assets/8f79e7f01dbb1afeb122cb3e8c4a342f.svg"}),E.default.createElement(t.Text,{className:"unbound-updater-no-updates-title",color:t.Text.Colors.HEADER_PRIMARY,size:t.Text.Sizes.SIZE_20},D?l.Locale.Messages.UNBOUND_UPDATER_UPDATES_DISABLED:o!==e.CHECKING?l.Locale.Messages.UNBOUND_UPDATER_UPDATES_IDLE_TITLE:l.Locale.Messages.UNBOUND_UPDATER_UPDATES_SEARCHING_TITLE),E.default.createElement(t.Text,{className:"unbound-updater-no-updates-desc",color:t.Text.Colors.HEADER_SECONDARY,size:t.Text.Sizes.SIZE_16},D?l.Locale.Messages.UNBOUND_UPDATER_UPDATES_DISABLED_DESC:o!==e.CHECKING?l.Locale.Messages.UNBOUND_UPDATER_UPDATES_IDLE_TEXT:l.Locale.Messages.UNBOUND_UPDATER_UPDATES_SEARCHING_TEXT)):[]))}}const D=(0,s.connectComponent)(Updater,"updater")
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9wYW5lbHMvVXBkYXRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUZXh0LCBTcGlubmVyLCBGb3JtVGl0bGUgfSBmcm9tICdAY29tcG9uZW50cy9kaXNjb3JkJztcclxuaW1wb3J0IHsgRGl2aWRlciwgRXJyb3JCb3VuZGFyeSwgSWNvbiB9IGZyb20gJ0Bjb21wb25lbnRzJztcclxuaW1wb3J0IHsgY29ubmVjdENvbXBvbmVudCB9IGZyb20gJ0BhcGkvc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICdAd2VicGFjay9jb21tb24nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFN0eWxlcyBmcm9tICdAc3R5bGVzL3BhbmVscy91cGRhdGVyLmNzcyc7XHJcblN0eWxlcy5hcHBlbmQoKTtcclxuXHJcbmVudW0gVXBkYXRlclN0YXR1cyB7XHJcbiAgIENIRUNLSU5HID0gJ2NoZWNraW5nJyxcclxuICAgVVBEQVRJTkcgPSAndXBkYXRpbmcnLFxyXG4gICBJRExFID0gJ2lkbGUnXHJcbn1cclxuXHJcbmludGVyZmFjZSBVcGRhdGVyUHJvcHMge1xyXG4gICBzZXR0aW5nczogU2V0dGluZ3NTdG9yZTtcclxufVxyXG5cclxuY2xhc3MgVXBkYXRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVcGRhdGVyUHJvcHM+IHtcclxuICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IHNldHRpbmdzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgY29uc3Qgc3RhdHVzID0gc2V0dGluZ3MuZ2V0KCdzdGF0dXMnLCBVcGRhdGVyU3RhdHVzLklETEUpO1xyXG4gICAgICBjb25zdCBkaXNhYmxlZCA9IHNldHRpbmdzLmdldCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZXMgPSBzZXR0aW5ncy5nZXQoJ3VwZGF0ZXMnLCBbXSk7XHJcbiAgICAgIGNvbnN0IGZvcmNlID0gc2V0dGluZ3MuZ2V0KCdmb3JjZScsIGZhbHNlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgIGljb246ICdDbG91ZERvbmUnLFxyXG4gICAgICAgICBjb2xvcjogJ3ZhcigtLWluZm8tcG9zaXRpdmUtZm9yZWdyb3VuZCknLFxyXG4gICAgICAgICB0ZXh0OiBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9VUERBVEVSX0RFRkFVTFRfVEVYVCxcclxuICAgICAgICAgZGVzY3JpcHRpb246IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1VQREFURVJfREVGQVVMVF9ERVNDUklQVElPTlxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgICAgIGRhdGEudGV4dCA9IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1VQREFURVJfRElTQUJMRURfVEVYVDtcclxuICAgICAgICAgZGF0YS5kZXNjcmlwdGlvbiA9IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1VQREFURVJfRElTQUJMRURfREVTQ1JJUFRJT047XHJcbiAgICAgICAgIGRhdGEuY29sb3IgPSAndmFyKC0taW5mby13YXJuaW5nLWZvcmVncm91bmQpJztcclxuICAgICAgICAgZGF0YS5pY29uID0gJ1ByaXZhY3lBbmRTYWZldHknO1xyXG4gICAgICB9IGVsc2UgaWYgKGZvcmNlKSB7XHJcbiAgICAgICAgIGRhdGEudGV4dCA9IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1VQREFURVJfRkFJTEVEX1RFWFQ7XHJcbiAgICAgICAgIGRhdGEuZGVzY3JpcHRpb24gPSBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9VUERBVEVSX0ZBSUxFRF9ERVNDUklQVElPTjtcclxuICAgICAgICAgZGF0YS5jb2xvciA9ICd2YXIoLS1pbmZvLWRhbmdlci1mb3JlZ3JvdW5kKSc7XHJcbiAgICAgICAgIGRhdGEuaWNvbiA9ICdDbG9zZUNpcmNsZSc7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBVcGRhdGVyU3RhdHVzLkNIRUNLSU5HKSB7XHJcbiAgICAgICAgIGRhdGEudGV4dCA9IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1VQREFURVJfRkVUQ0hJTkdfVEVYVDtcclxuICAgICAgICAgZGF0YS5kZXNjcmlwdGlvbiA9IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1VQREFURVJfRkVUQ0hJTkdfREVTQ1JJUFRJT047XHJcbiAgICAgICAgIGRhdGEuY29sb3IgPSAndmFyKC0taGVhZGVyLXByaW1hcnkpJztcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFVwZGF0ZXJTdGF0dXMuVVBEQVRJTkcpIHtcclxuICAgICAgICAgZGF0YS50ZXh0ID0gTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVVBEQVRFUl9VUERBVElOR19URVhUO1xyXG4gICAgICAgICBkYXRhLmRlc2NyaXB0aW9uID0gTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVVBEQVRFUl9VUERBVElOR19ERVNDUklQVElPTjtcclxuICAgICAgICAgZGF0YS5pY29uID0gJ1VwZGF0ZUF2YWlsYWJsZSc7XHJcbiAgICAgICAgIGRhdGEuY29sb3IgPSAndmFyKC0taGVhZGVyLXByaW1hcnkpJztcclxuICAgICAgfSBlbHNlIGlmICh1cGRhdGVzLmxlbmd0aCkge1xyXG4gICAgICAgICBkYXRhLnRleHQgPSBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9VUERBVEVSX05FV19VUERBVEVTX1RFWFQ7XHJcbiAgICAgICAgIGRhdGEuZGVzY3JpcHRpb24gPSBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9VUERBVEVSX05FV19VUERBVEVTX0RFU0NSSVBUSU9OO1xyXG4gICAgICAgICBkYXRhLmljb24gPSAnQ2xvdWREb3dubG9hZCc7XHJcbiAgICAgICAgIGRhdGEuY29sb3IgPSAndmFyKC0taGVhZGVyLXByaW1hcnkpJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIDxFcnJvckJvdW5kYXJ5PlxyXG4gICAgICAgICA8Rm9ybVRpdGxlIHRhZz0naDEnIGNsYXNzTmFtZT0ndW5ib3VuZC1zZXR0aW5ncy10aXRsZSc+XHJcbiAgICAgICAgICAgIHtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9VUERBVEVSfVxyXG4gICAgICAgICA8L0Zvcm1UaXRsZT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYm91bmQtdXBkYXRlcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1bmJvdW5kLXVwZGF0ZXItaWNvbi1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICB7c3RhdHVzID09PSBVcGRhdGVyU3RhdHVzLkNIRUNLSU5HID9cclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLXVwZGF0ZXItY2hlY2tpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1NwaW5uZXIuVHlwZS5TUElOTklOR19DSVJDTEV9XHJcbiAgICAgICAgICAgICAgICAgIC8+IDpcclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGRhdGEuY29sb3IgfX1cclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLXVwZGF0ZXItaWNvbidcclxuICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZGF0YS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5ib3VuZC11cGRhdGVyLXN0YXR1cy1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICA8Rm9ybVRpdGxlIGNsYXNzTmFtZT0ndW5ib3VuZC11cGRhdGVyLXN0YXR1cycgdGFnPSdoMyc+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLnRleHR9XHJcbiAgICAgICAgICAgICAgIDwvRm9ybVRpdGxlPlxyXG4gICAgICAgICAgICAgICA8VGV4dCB0YWc9J2gzJz5cclxuICAgICAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5ib3VuZC11cGRhdGVyLWFjdGlvbnMnPlxyXG4gICAgICAgICAgICB7W10ubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdGF0dXMgPT09IFVwZGF0ZXJTdGF0dXMuQ0hFQ0tJTkd9XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtmb3JjZSA/IEJ1dHRvbi5Db2xvcnMuUkVEIDogQnV0dG9uLkNvbG9ycy5HUkVFTn1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLlNNQUxMfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IH19XHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2ZvcmNlID8gTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVVBEQVRFUl9GT1JDRV9VUERBVEVTIDogTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVVBEQVRFUl9VUERBVEVfQUxMfVxyXG4gICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZSAmJiBzdGF0dXMgPT09IFVwZGF0ZXJTdGF0dXMuQ0hFQ0tJTkd9XHJcbiAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5TTUFMTH1cclxuICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXR0aW5ncy5zZXQoJ3N0YXR1cycsIFVwZGF0ZXJTdGF0dXMuQ0hFQ0tJTkcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXR0aW5ncy5zZXQoJ3N0YXR1cycsIFVwZGF0ZXJTdGF0dXMuSURMRSksIDIwMDApO1xyXG4gICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIHtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9VUERBVEVSX0NIRUNLX0ZPUl9VUERBVEVTfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICBkaXNhYmxlZD17c3RhdHVzID09PSBVcGRhdGVyU3RhdHVzLkNIRUNLSU5HfVxyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtdXBkYXRlci1hY3Rpb25zLWRpc2FibGUnXHJcbiAgICAgICAgICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/IEJ1dHRvbi5Db2xvcnMuR1JFRU4gOiBCdXR0b24uQ29sb3JzLlJFRH1cclxuICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLlNNQUxMfVxyXG4gICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXR0aW5ncy50b2dnbGUoJ2Rpc2FibGVkJywgZmFsc2UpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIHtkaXNhYmxlZCA/IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1VQREFURVJfRU5BQkxFX1VQREFURVMgOiBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9VUERBVEVSX0RJU0FCTEVfVVBEQVRFU31cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5ib3VuZC11cGRhdGVyLXVwZGF0ZXMtY29udGFpbmVyJz5cclxuICAgICAgICAgICAge3VwZGF0ZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYm91bmQtdXBkYXRlci1uby11cGRhdGVzJz5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtdXBkYXRlci1wbGFjZWhvbGRlci1pbWFnZSdcclxuICAgICAgICAgICAgICAgICAgICAgZGF0YS1pcy1jaGVja2luZz17c3RhdHVzID09PSBVcGRhdGVyU3RhdHVzLkNIRUNLSU5HfVxyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9e2Rpc2FibGVkID8gJy9hc3NldHMvYjVlYjJmN2Q2YjNmOGNjOWI2MGJlNGE1ZGNmMjgwMTUuc3ZnJyA6IHN0YXR1cyAhPT0gVXBkYXRlclN0YXR1cy5DSEVDS0lORyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcvYXNzZXRzLzEzY2IyMTdmZDE0YjAyMmJmNGIwMGRjYzhjMTU3MjM4LnN2ZycgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnL2Fzc2V0cy84Zjc5ZTdmMDFkYmIxYWZlYjEyMmNiM2U4YzRhMzQyZi5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLXVwZGF0ZXItbm8tdXBkYXRlcy10aXRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1RleHQuQ29sb3JzLkhFQURFUl9QUklNQVJZfVxyXG4gICAgICAgICAgICAgICAgICAgICBzaXplPXtUZXh0LlNpemVzLlNJWkVfMjB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAge2Rpc2FibGVkID8gTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVVBEQVRFUl9VUERBVEVTX0RJU0FCTEVEIDogc3RhdHVzICE9PSBVcGRhdGVyU3RhdHVzLkNIRUNLSU5HID8gTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVVBEQVRFUl9VUERBVEVTX0lETEVfVElUTEUgOiBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9VUERBVEVSX1VQREFURVNfU0VBUkNISU5HX1RJVExFfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5ib3VuZC11cGRhdGVyLW5vLXVwZGF0ZXMtZGVzYydcclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1RleHQuQ29sb3JzLkhFQURFUl9TRUNPTkRBUll9XHJcbiAgICAgICAgICAgICAgICAgICAgIHNpemU9e1RleHQuU2l6ZXMuU0laRV8xNn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICB7ZGlzYWJsZWQgPyBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9VUERBVEVSX1VQREFURVNfRElTQUJMRURfREVTQyA6IHN0YXR1cyAhPT0gVXBkYXRlclN0YXR1cy5DSEVDS0lORyA/IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1VQREFURVJfVVBEQVRFU19JRExFX1RFWFQgOiBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9VUERBVEVSX1VQREFURVNfU0VBUkNISU5HX1RFWFR9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgW11cclxuICAgICAgICAgICAgICAgLy8gdXBkYXRlcy5tYXAodXBkYXRlID0+IDxVcGRhdGUgc2V0dGluZ3M9e3NldHRpbmdzfSB1cGRhdGU9e3VwZGF0ZX0gLz4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRXJyb3JCb3VuZGFyeT47XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdENvbXBvbmVudChVcGRhdGVyLCAndXBkYXRlcicpOyJdLCJuYW1lcyI6WyJTdHlsZXMiLCJhcHBlbmQiLCJVcGRhdGVyU3RhdHVzIiwiQ0hFQ0tJTkciLCJVUERBVElORyIsIklETEUiLCJVcGRhdGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJzZXR0aW5ncyIsInByb3BzIiwic3RhdHVzIiwiZ2V0IiwiZGlzYWJsZWQiLCJ1cGRhdGVzIiwiZm9yY2UiLCJkYXRhIiwiaWNvbiIsImNvbG9yIiwidGV4dCIsIkxvY2FsZSIsIk1lc3NhZ2VzIiwiVU5CT1VORF9VUERBVEVSX0RFRkFVTFRfVEVYVCIsImRlc2NyaXB0aW9uIiwiVU5CT1VORF9VUERBVEVSX0RFRkFVTFRfREVTQ1JJUFRJT04iLCJVTkJPVU5EX1VQREFURVJfRElTQUJMRURfVEVYVCIsIlVOQk9VTkRfVVBEQVRFUl9ESVNBQkxFRF9ERVNDUklQVElPTiIsIlVOQk9VTkRfVVBEQVRFUl9GQUlMRURfVEVYVCIsIlVOQk9VTkRfVVBEQVRFUl9GQUlMRURfREVTQ1JJUFRJT04iLCJVTkJPVU5EX1VQREFURVJfRkVUQ0hJTkdfVEVYVCIsIlVOQk9VTkRfVVBEQVRFUl9GRVRDSElOR19ERVNDUklQVElPTiIsIlVOQk9VTkRfVVBEQVRFUl9VUERBVElOR19URVhUIiwiVU5CT1VORF9VUERBVEVSX1VQREFUSU5HX0RFU0NSSVBUSU9OIiwibGVuZ3RoIiwiVU5CT1VORF9VUERBVEVSX05FV19VUERBVEVTX1RFWFQiLCJVTkJPVU5EX1VQREFURVJfTkVXX1VQREFURVNfREVTQ1JJUFRJT04iLCJFcnJvckJvdW5kYXJ5IiwiRm9ybVRpdGxlIiwidGFnIiwiY2xhc3NOYW1lIiwiVU5CT1VORF9VUERBVEVSIiwiZGl2IiwiU3Bpbm5lciIsInR5cGUiLCJUeXBlIiwiU1BJTk5JTkdfQ0lSQ0xFIiwiSWNvbiIsInN0eWxlIiwibmFtZSIsIlRleHQiLCJCdXR0b24iLCJzaXplIiwiU2l6ZXMiLCJTTUFMTCIsIm9uQ2xpY2siLCJzZXQiLCJzZXRUaW1lb3V0IiwiVU5CT1VORF9VUERBVEVSX0NIRUNLX0ZPUl9VUERBVEVTIiwiQ29sb3JzIiwiR1JFRU4iLCJSRUQiLCJ0b2dnbGUiLCJVTkJPVU5EX1VQREFURVJfRU5BQkxFX1VQREFURVMiLCJVTkJPVU5EX1VQREFURVJfRElTQUJMRV9VUERBVEVTIiwiRGl2aWRlciIsImltZyIsImRhdGEtaXMtY2hlY2tpbmciLCJzcmMiLCJIRUFERVJfUFJJTUFSWSIsIlNJWkVfMjAiLCJVTkJPVU5EX1VQREFURVJfVVBEQVRFU19ESVNBQkxFRCIsIlVOQk9VTkRfVVBEQVRFUl9VUERBVEVTX0lETEVfVElUTEUiLCJVTkJPVU5EX1VQREFURVJfVVBEQVRFU19TRUFSQ0hJTkdfVElUTEUiLCJIRUFERVJfU0VDT05EQVJZIiwiU0laRV8xNiIsIlVOQk9VTkRfVVBEQVRFUl9VUERBVEVTX0RJU0FCTEVEX0RFU0MiLCJVTkJPVU5EX1VQREFURVJfVVBEQVRFU19JRExFX1RFWFQiLCJVTkJPVU5EX1VQREFURVJfVVBEQVRFU19TRUFSQ0hJTkdfVEVYVCIsImNvbm5lY3RDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBLGlCQVNBLENBSUMsc0ZBK0lELFNBQW9ELHdCQUFwRCxDQUFvRCxtQkE1SkgsMEJBQXFCLFlBQ3pCLHdCQUFhLFlBQ3pCLG9CQUFlLFlBQ3pCLDhCQUFpQixtQ0FDdEIsT0FBTyxvQ0FFTixpQ0FBNEIsMkVBQy9DQSxDQUFNLFFBQUEsQ0FBQ0MsTUFBTSxFQUFFLFVBRVZDLENBQWEsRUFBYkEsQ0FBYSxDQUNmQyxRQUFRLENBQUcsVUFBVSxDQURuQkQsQ0FBYSxDQUVmRSxRQUFRLENBQUcsVUFBVSxDQUZuQkYsQ0FBYSxDQUdmRyxJQUFJLENBQUcsTUFBTSxFQUhYSCxDQUFhLEdBQWJBLENBQWEsS0FVbEIsT0FBTUksT0FBTyxTQUFTQyxDQUFLLFFBQUEsQ0FBQ0MsU0FBUyxDQUNsQ0MsTUFBTSxFQUFHLENBQ04sR0FBTSxD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
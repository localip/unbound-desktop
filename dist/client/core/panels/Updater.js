"use strict";var a;Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>h});const b=require("../../components/discord"),c=require("../../components/index"),d=require("../../api/settings"),e=require("../../modules/webpack/common"),f=_interopRequireDefault(require("react")),g=_interopRequireDefault(require("../../styles/panels/updater.css"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}g.default.append(),function(a){a.CHECKING="checking",a.UPDATING="updating",a.IDLE="idle"}(a||(a={}));class Updater extends f.default.Component{render(){let{settings:d}=this.props,g=d.get("status",a.IDLE),h=d.get("disabled",!1),i=d.get("updates",[]),j=d.get("force",!1),k={icon:"CloudDone",color:"var(--info-positive-foreground)",text:e.Locale.Messages.UNBOUND_UPDATER_DEFAULT_TEXT,description:e.Locale.Messages.UNBOUND_UPDATER_DEFAULT_DESCRIPTION};return h?(k.text=e.Locale.Messages.UNBOUND_UPDATER_DISABLED_TEXT,k.description=e.Locale.Messages.UNBOUND_UPDATER_DISABLED_DESCRIPTION,k.color="var(--info-warning-foreground)",k.icon="PrivacyAndSafety"):j?(k.text=e.Locale.Messages.UNBOUND_UPDATER_FAILED_TEXT,k.description=e.Locale.Messages.UNBOUND_UPDATER_FAILED_DESCRIPTION,k.color="var(--info-danger-foreground)",k.icon="CloseCircle"):g===a.CHECKING?(k.text=e.Locale.Messages.UNBOUND_UPDATER_FETCHING_TEXT,k.description=e.Locale.Messages.UNBOUND_UPDATER_FETCHING_DESCRIPTION,k.color="var(--header-primary)"):g===a.UPDATING?(k.text=e.Locale.Messages.UNBOUND_UPDATER_UPDATING_TEXT,k.description=e.Locale.Messages.UNBOUND_UPDATER_UPDATING_DESCRIPTION,k.icon="UpdateAvailable",k.color="var(--header-primary)"):i.length&&(k.text=e.Locale.Messages.UNBOUND_UPDATER_NEW_UPDATES_TEXT,k.description=e.Locale.Messages.UNBOUND_UPDATER_NEW_UPDATES_DESCRIPTION,k.icon="CloudDownload",k.color="var(--header-primary)"),f.default.createElement(c.ErrorBoundary,null,f.default.createElement(b.FormTitle,{tag:"h1",className:"unbound-settings-title"},e.Locale.Messages.UNBOUND_UPDATER),f.default.createElement("div",{className:"unbound-updater"},f.default.createElement("div",{className:"unbound-updater-icon-container"},g===a.CHECKING?f.default.createElement(b.Spinner,{className:"unbound-updater-checking",type:b.Spinner.Type.SPINNING_CIRCLE}):f.default.createElement(c.Icon,{style:{color:k.color},className:"unbound-updater-icon",name:k.icon})),f.default.createElement("div",{className:"unbound-updater-status-container"},f.default.createElement(b.FormTitle,{className:"unbound-updater-status",tag:"h3"},k.text),f.default.createElement(b.Text,{tag:"h3"},k.description))),f.default.createElement("div",{className:"unbound-updater-actions"},!1,f.default.createElement(b.Button,{disabled:!1,size:b.Button.Sizes.SMALL,onClick(){d.set("status",a.CHECKING),setTimeout(()=>d.set("status",a.IDLE),2e3)}},e.Locale.Messages.UNBOUND_UPDATER_CHECK_FOR_UPDATES),f.default.createElement(b.Button,{disabled:g===a.CHECKING,className:"unbound-updater-actions-disable",color:h?b.Button.Colors.GREEN:b.Button.Colors.RED,size:b.Button.Sizes.SMALL,onClick:()=>d.toggle("disabled",!1)},h?e.Locale.Messages.UNBOUND_UPDATER_ENABLE_UPDATES:e.Locale.Messages.UNBOUND_UPDATER_DISABLE_UPDATES)),f.default.createElement(c.Divider,null),f.default.createElement("div",{className:"unbound-updater-updates-container"},0===i.length?f.default.createElement("div",{className:"unbound-updater-no-updates"},f.default.createElement("img",{className:"unbound-updater-placeholder-image","data-is-checking":g===a.CHECKING,src:h?"/assets/b5eb2f7d6b3f8cc9b60be4a5dcf28015.svg":g!==a.CHECKING?"/assets/13cb217fd14b022bf4b00dcc8c157238.svg":"/assets/8f79e7f01dbb1afeb122cb3e8c4a342f.svg"}),f.default.createElement(b.Text,{className:"unbound-updater-no-updates-title",color:b.Text.Colors.HEADER_PRIMARY,size:b.Text.Sizes.SIZE_20},h?e.Locale.Messages.UNBOUND_UPDATER_UPDATES_DISABLED:g!==a.CHECKING?e.Locale.Messages.UNBOUND_UPDATER_UPDATES_IDLE_TITLE:e.Locale.Messages.UNBOUND_UPDATER_UPDATES_SEARCHING_TITLE),f.default.createElement(b.Text,{className:"unbound-updater-no-updates-desc",color:b.Text.Colors.HEADER_SECONDARY,size:b.Text.Sizes.SIZE_16},h?e.Locale.Messages.UNBOUND_UPDATER_UPDATES_DISABLED_DESC:g!==a.CHECKING?e.Locale.Messages.UNBOUND_UPDATER_UPDATES_IDLE_TEXT:e.Locale.Messages.UNBOUND_UPDATER_UPDATES_SEARCHING_TEXT)):[]))}}const h=(0,d.connectComponent)(Updater,"updater")
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"showConfirmModal",{enumerable:!0,get:()=>showConfirmModal});const a=require("../components/discord"),b=require("@webpack"),c=require("../modules/webpack/common"),d=function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(require("react")),e={};function showConfirmModal(f){e.ConfirmModal??=(0,b.findByDisplayName)("ConfirmModal");let g=e.ConfirmModal;return c.Modals.openModal(b=>d.default.createElement(g,Object.assign({},f,b),d.default.createElement(a.Markdown,null,f.content)))}
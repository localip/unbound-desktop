"use strict";const a=require("../../../common/logger"),b=require("../../api/settings"),c=require("../../modules/patcher/index"),d=function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(require("./base"));class Plugin extends d.default{constructor(){super(),this.logger=(0,a.createLogger)("Plugin",this.data.name),this.patcher=(0,c.create)(this.data.id),this.settings=(0,b.makeStore)(this.data.id)}_stop(){this.patcher.unpatchAll(),this.stop()}}module.exports=Plugin
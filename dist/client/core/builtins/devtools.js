"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function _export(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{data:()=>d,initialize:()=>initialize,shutdown:()=>shutdown});const a=require("@webpack"),b=require("../../modules/webpack/common"),c=(0,a.bulk)(a.filters.byStrings("devtools-closed"),a.filters.byProps("hideToken"),{wait:!0}),d={name:"DevTools Warning",id:"dev.devtoolsWarning",default:!1,wait:!1};async function initialize(){await c,DiscordNative.window.setDevtoolsCallbacks(()=>{},()=>{})}async function shutdown(){let[a,d]=await c;a(b.Locale,d,DiscordNative)}
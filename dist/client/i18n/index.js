"use strict";const a=require("fs"),b=require("path"),c={};(0,a.readdirSync)(__dirname).filter(a=>a!==(0,b.basename)(__filename)&&"README.md"!==a).map(a=>{let b=a.split(".");1!=b.length&&b.splice(b.length-1,1),c[b.join(".")]=require(`${__dirname}/${a}`)}),module.exports=c
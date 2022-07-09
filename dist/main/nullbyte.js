"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const a=require("../common/nullbyte"),b=require("fs"),c=require("path"),d=(0,c.resolve)(__dirname,"..","..","nullbyte",`nullbyte-${process.platform}.node`);if(a.PATTERNS[process.platform]&&(0,b.existsSync)(d))try{let e=require(d),f=e.patch(process.pid,a.PATTERNS[process.platform]);if(!f)throw 0}catch(g){global.__ABORT__=!0,console.error("nullbyte failed patching, expect issues.")}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluL251bGxieXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBBVFRFUk5TIH0gZnJvbSAnQGNvbW1vbi9udWxsYnl0ZSc7XHJcbmltcG9ydCB7IGV4aXN0c1N5bmMgfSBmcm9tICdmcyc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuXHJcbmNvbnN0IGluc3RhbmNlID0gcmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICcuLicsICdudWxsYnl0ZScsIGBudWxsYnl0ZS0ke3Byb2Nlc3MucGxhdGZvcm19Lm5vZGVgKTtcclxuXHJcbmlmIChQQVRURVJOU1twcm9jZXNzLnBsYXRmb3JtXSAmJiBleGlzdHNTeW5jKGluc3RhbmNlKSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBudWxsYnl0ZSA9IHJlcXVpcmUoaW5zdGFuY2UpO1xyXG4gICAgY29uc3Qgc3VjY2VzcyA9IG51bGxieXRlLnBhdGNoKHByb2Nlc3MucGlkLCBQQVRURVJOU1twcm9jZXNzLnBsYXRmb3JtXSk7XHJcbiAgICBpZiAoIXN1Y2Nlc3MpIHRocm93IDA7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgZ2xvYmFsLl9fQUJPUlRfXyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmVycm9yKCdudWxsYnl0ZSBmYWlsZWQgcGF0Y2hpbmcsIGV4cGVjdCBpc3N1ZXMuJyk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImluc3RhbmNlIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsIlBBVFRFUk5TIiwiZXhpc3RzU3luYyIsIm51bGxieXRlIiwicmVxdWlyZSIsInN1Y2Nlc3MiLCJwYXRjaCIsInBpZCIsImUiLCJnbG9iYWwiLCJfX0FCT1JUX18iLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLG9GQUF5QixvQkFBa0IsWUFDaEIsSUFBSSxZQUNQLE1BQU0sRUFFeEJBLENBQVEsQ0FBR0MsR0FBQUEsQ0FBTyxRQUFBLEVBQUNDLFNBQVMsQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFFLFVBQVUsQ0FBRSxDQUFDLFNBQVMsRUFBRUMsT0FBTyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQUFFaEcsSUFBSUMsQ0FBUSxTQUFBLENBQUNGLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLEVBQUlFLEdBQUFBLENBQVUsV0FBQSxFQUFDTixDQUFRLENBQUMsQ0FDcEQsR0FBSSxDQUNGLElBQU1PLENBQVEsQ0FBR0MsT0FBTyxDQUFDUixDQUFRLENBQUMsQ0FDNUJTLENBQU8sQ0FBR0YsQ0FBUSxDQUFDRyxLQUFLLENBQUNQLE9BQU8sQ0FBQ1EsR0FBRyxDQUFFTixDQUFRLFNBQUEsQ0FBQ0YsT0FBTyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxBQURwQyxBQUVuQyxJQUFJLENBQUNLLENBQU8sQ0FBRSxNQUFNLENBQUMsQUFBQyxDQUN2QixBQUFDLE1BQU9HLENBQUMsQ0FBRSxDQUNWQyxNQUFNLENBQUNDLFNBQVMsQ0FBRyxDQUFBLENBQUksQ0FDdkJDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQzFELEFBQ0YifQ==
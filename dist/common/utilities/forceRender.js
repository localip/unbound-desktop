"use strict";const a={useMemo:a=>a(),useState:a=>[a,()=>void 0],useReducer:a=>[a,()=>void 0],useEffect(){},useLayoutEffect(){},useRef:()=>({current:null}),useCallback:a=>a,useImperativeHandle(){},useContext:a=>a._currentValue},b=Object.keys(a);module.exports=function(c,d){return(...e)=>{let f=require("react"),g=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current,h=b.map(a=>[a,g[a]]);Object.assign(g,a,d);let i={rendered:null,error:null};try{i.rendered=c(...e)}catch(j){i.error=j}if(Object.assign(g,Object.fromEntries(h)),i.error)throw i.error;return i.rendered}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL2ZvcmNlUmVuZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG92ZXJyaWRlcyA9IHtcclxuICB1c2VNZW1vOiBmYWN0b3J5ID0+IGZhY3RvcnkoKSxcclxuICB1c2VTdGF0ZTogaW5pdGlhbFN0YXRlID0+IFtpbml0aWFsU3RhdGUsICgpID0+IHZvaWQgMF0sXHJcbiAgdXNlUmVkdWNlcjogaW5pdGlhbFZhbHVlID0+IFtpbml0aWFsVmFsdWUsICgpID0+IHZvaWQgMF0sXHJcbiAgdXNlRWZmZWN0OiAoKSA9PiB7IH0sXHJcbiAgdXNlTGF5b3V0RWZmZWN0OiAoKSA9PiB7IH0sXHJcbiAgdXNlUmVmOiAoKSA9PiAoeyBjdXJyZW50OiBudWxsIH0pLFxyXG4gIHVzZUNhbGxiYWNrOiBjYWxsYmFjayA9PiBjYWxsYmFjayxcclxuICB1c2VJbXBlcmF0aXZlSGFuZGxlOiAoKSA9PiB7IH0sXHJcbiAgdXNlQ29udGV4dDogKGN0eCkgPT4gY3R4Ll9jdXJyZW50VmFsdWVcclxufTtcclxuXHJcbmNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvdmVycmlkZXMpO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIGZvcmNlUmVuZGVyXHJcbiAqIEBkZXNjcmlwdGlvbiBBbGxvd3MgeW91IHRvIGdyYWIgYSBjb21wb25lbnRzIHJldHVybiB2YWx1ZSBieSBkaXNhYmxpbmcgaXRzIGhvb2tzIHdoZW4geW91IG5lZWQgaXQgb3V0c2lkZSBvZiBhIHJlbmRlclxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudHxGdW5jdGlvbnxSZWFjdC5tZW1vfSBjb21wb25lbnQgLSBUaGUgY29tcG9uZW50IHRvIHdyYXBcclxuICogQHJldHVybiB7UmVhY3QuQ29tcG9uZW50fSBSZXR1cm5zIHRoZSB3cmFwcGVkIGNvbXBvbmVudCdzIHJlc3VsdFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGZvcmNlUmVuZGVyKGNvbXBvbmVudDogRm4sIG9wdGlvbnM/OiBPcHRpb25hbEtleXM8dHlwZW9mIG92ZXJyaWRlcz4pIHtcclxuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgIGNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuICAgIGNvbnN0IFJlYWN0RGlzcGF0Y2hlciA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELlJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcclxuICAgIGNvbnN0IG9yaWdpbmFscyA9IGtleXMubWFwKGUgPT4gW2UsIFJlYWN0RGlzcGF0Y2hlcltlXV0pO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oUmVhY3REaXNwYXRjaGVyLCBvdmVycmlkZXMsIG9wdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgcmVuZGVyZWQ6IG51bGwsXHJcbiAgICAgIGVycm9yOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHJlcy5yZW5kZXJlZCA9IGNvbXBvbmVudCguLi5hcmdzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5lcnJvciA9IGVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oUmVhY3REaXNwYXRjaGVyLCBPYmplY3QuZnJvbUVudHJpZXMob3JpZ2luYWxzKSk7XHJcblxyXG4gICAgaWYgKHJlcy5lcnJvcikge1xyXG4gICAgICB0aHJvdyByZXMuZXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5yZW5kZXJlZDtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0ID0gZm9yY2VSZW5kZXI7Il0sIm5hbWVzIjpbIm92ZXJyaWRlcyIsInVzZU1lbW8iLCJmYWN0b3J5IiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJ1c2VSZWR1Y2VyIiwiaW5pdGlhbFZhbHVlIiwidXNlRWZmZWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiY3VycmVudCIsInVzZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlQ29udGV4dCIsImN0eCIsIl9jdXJyZW50VmFsdWUiLCJrZXlzIiwiT2JqZWN0IiwiY29tcG9uZW50Iiwib3B0aW9ucyIsImFyZ3MiLCJSZWFjdCIsInJlcXVpcmUiLCJSZWFjdERpc3BhdGNoZXIiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJvcmlnaW5hbHMiLCJtYXAiLCJlIiwiYXNzaWduIiwicmVzIiwicmVuZGVyZWQiLCJlcnJvciIsImZyb21FbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFBLE9BQU1BLENBQVMsQ0FBRyxDQUNoQkMsT0FBTyxDQUFFQyxDQUFPLEVBQUlBLENBQU8sRUFBRSxDQUM3QkMsUUFBUSxDQUFFQyxDQUFZLEVBQUksQ0FBQ0EsQ0FBWSxDQUFFLElBQU0sS0FBSyxDQUFDLENBQUMsQ0FDdERDLFVBQVUsQ0FBRUMsQ0FBWSxFQUFJLENBQUNBLENBQVksQ0FBRSxJQUFNLEtBQUssQ0FBQyxDQUFDLENBQzdDLEFBQVhDLFNBQVMsRUFBUSxFQUFHLENBQ0gsQUFBakJDLGVBQWUsRUFBUSxFQUFHLENBQzFCQyxNQUFNLENBQUUsSUFBTyxDQUFBLENBQUVDLE9BQU8sQ0FBRSxJQUFJLENBQUUsQ0FBQSxBQUFDLENBQ2pDQyxXQUFXLENBQUVDLENBQVEsRUFBSUEsQ0FBUSxDQUNaLEFBQXJCQyxtQkFBbUIsRUFBUSxFQUFHLENBQzlCQyxVQUFVLENBQUUsQUFBQ0MsQ0FBRyxFQUFLQSxDQUFHLENBQUNDLGFBQWEsQ0FDdkMsQ0FFS0MsQ0FBSSxDQUFHQyxNQUFNLENBQUNELElBQUksQ0FBQ2pCLENBQVMsQ0FBQyxBQUZqQyxnQkFXRixTQUFxQm1CLENBQWEsQ0FBRUMsQ0FBd0MsQ0FBRSxDQUM1RSxNQUFPLENBQUlDLEdBQUFBLENBQUksR0FBSyxDQUNsQixJQUFNQyxDQUFLLENBQUdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDeEJDLENBQWUsQ0FBR0YsQ0FBSyxDQUFDRyxrREFBa0QsQ0FBQ0Msc0JBQXNCLENBQUNoQixPQUFPLENBQ3pHaUIsQ0FBUyxDQUFHVixDQUFJLENBQUNXLEdBQUcsQ0FBQ0MsQ0FBQyxFQUFJLENBQUNBLENBQUMsQ0FBRUwsQ0FBZSxDQUFDSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBRnpCLEFBSS9CWCxDQUFBQSxNQUFNLENBQUNZLE1BQU0sQ0FBQ04sQ0FBZSxDQUFFeEIsQ0FBUyxDQUFFb0IsQ0FBTyxDQUFDLEFBRWxELEtBQU1XLENBQUcsQ0FBRyxDQUNWQyxRQUFRLENBQUUsSUFBSSxDQUNkQyxLQUFLLENBQUUsSUFBSSxDQUNaLEFBQUMsQUFFRixJQUFJLENBQ0ZGLENBQUcsQ0FBQ0MsUUFBUSxDQUFHYixDQUFTLElBQUlFLENBQUksQ0FBQyxDQUNsQyxBQUFDLE1BQU9ZLENBQUssQ0FBRSxDQUNkRixDQUFHLENBQUNFLEtBQUssQ0FBR0EsQ0FBSyxDQUNsQixBQUlELEdBRkFmLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDTixDQUFlLENBQUVOLE1BQU0sQ0FBQ2dCLFdBQVcsQ0FBQ1AsQ0FBUyxDQUFDLENBQUMsQ0FFekRJLENBQUcsQ0FBQ0UsS0FBSyxDQUNYLE1BQU1GLENBQUcsQ0FBQ0UsS0FBSyxBQUFDLEFBQ2pCLEFBRUQsUUFBT0YsQ0FBRyxDQUFDQyxRQUFRLEFBQUMsQ0FDckIsQUFBQyxDQUNILEFBRW9CIn0=
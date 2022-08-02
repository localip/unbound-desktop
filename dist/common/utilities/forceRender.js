"use strict";const a={useMemo:a=>a(),useState:a=>[a,()=>void 0],useReducer:a=>[a,()=>void 0],useEffect(){},useLayoutEffect(){},useRef:()=>({current:null}),useCallback:a=>a,useImperativeHandle(){},useContext:a=>a._currentValue},b=Object.keys(a);module.exports=function forceRender(c,d){return(...e)=>{let f=require("react"),g=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current,h=b.map(a=>[a,g[a]]);Object.assign(g,a,d);let i={rendered:null,error:null};try{i.rendered=c(...e)}catch(j){i.error=j}if(Object.assign(g,Object.fromEntries(h)),i.error)throw i.error;return i.rendered}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL2ZvcmNlUmVuZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG92ZXJyaWRlcyA9IHtcclxuICAgdXNlTWVtbzogZmFjdG9yeSA9PiBmYWN0b3J5KCksXHJcbiAgIHVzZVN0YXRlOiBpbml0aWFsU3RhdGUgPT4gW2luaXRpYWxTdGF0ZSwgKCkgPT4gdm9pZCAwXSxcclxuICAgdXNlUmVkdWNlcjogaW5pdGlhbFZhbHVlID0+IFtpbml0aWFsVmFsdWUsICgpID0+IHZvaWQgMF0sXHJcbiAgIHVzZUVmZmVjdDogKCkgPT4geyB9LFxyXG4gICB1c2VMYXlvdXRFZmZlY3Q6ICgpID0+IHsgfSxcclxuICAgdXNlUmVmOiAoKSA9PiAoeyBjdXJyZW50OiBudWxsIH0pLFxyXG4gICB1c2VDYWxsYmFjazogY2FsbGJhY2sgPT4gY2FsbGJhY2ssXHJcbiAgIHVzZUltcGVyYXRpdmVIYW5kbGU6ICgpID0+IHsgfSxcclxuICAgdXNlQ29udGV4dDogKGN0eCkgPT4gY3R4Ll9jdXJyZW50VmFsdWVcclxufTtcclxuXHJcbmNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvdmVycmlkZXMpO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIGZvcmNlUmVuZGVyXHJcbiAqIEBkZXNjcmlwdGlvbiBBbGxvd3MgeW91IHRvIGdyYWIgYSBjb21wb25lbnRzIHJldHVybiB2YWx1ZSBieSBkaXNhYmxpbmcgaXRzIGhvb2tzIHdoZW4geW91IG5lZWQgaXQgb3V0c2lkZSBvZiBhIHJlbmRlclxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudHxGdW5jdGlvbnxSZWFjdC5tZW1vfSBjb21wb25lbnQgLSBUaGUgY29tcG9uZW50IHRvIHdyYXBcclxuICogQHJldHVybiB7UmVhY3QuQ29tcG9uZW50fSBSZXR1cm5zIHRoZSB3cmFwcGVkIGNvbXBvbmVudCdzIHJlc3VsdFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGZvcmNlUmVuZGVyKGNvbXBvbmVudDogRm4sIG9wdGlvbnM/OiBPcHRpb25hbEtleXM8dHlwZW9mIG92ZXJyaWRlcz4pIHtcclxuICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgIGNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuICAgICAgY29uc3QgUmVhY3REaXNwYXRjaGVyID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQuUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xyXG4gICAgICBjb25zdCBvcmlnaW5hbHMgPSBrZXlzLm1hcChlID0+IFtlLCBSZWFjdERpc3BhdGNoZXJbZV1dKTtcclxuXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oUmVhY3REaXNwYXRjaGVyLCBvdmVycmlkZXMsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0ge1xyXG4gICAgICAgICByZW5kZXJlZDogbnVsbCxcclxuICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgIHJlcy5yZW5kZXJlZCA9IGNvbXBvbmVudCguLi5hcmdzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgcmVzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oUmVhY3REaXNwYXRjaGVyLCBPYmplY3QuZnJvbUVudHJpZXMob3JpZ2luYWxzKSk7XHJcblxyXG4gICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgIHRocm93IHJlcy5lcnJvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlcy5yZW5kZXJlZDtcclxuICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCA9IGZvcmNlUmVuZGVyOyJdLCJuYW1lcyI6WyJvdmVycmlkZXMiLCJ1c2VNZW1vIiwiZmFjdG9yeSIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsImluaXRpYWxWYWx1ZSIsInVzZUVmZmVjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsImN1cnJlbnQiLCJ1c2VDYWxsYmFjayIsImNhbGxiYWNrIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZUNvbnRleHQiLCJjdHgiLCJfY3VycmVudFZhbHVlIiwia2V5cyIsIk9iamVjdCIsImZvcmNlUmVuZGVyIiwiY29tcG9uZW50Iiwib3B0aW9ucyIsImFyZ3MiLCJSZWFjdCIsInJlcXVpcmUiLCJSZWFjdERpc3BhdGNoZXIiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJvcmlnaW5hbHMiLCJtYXAiLCJlIiwiYXNzaWduIiwicmVzIiwicmVuZGVyZWQiLCJlcnJvciIsImZyb21FbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFBLE9BQU1BLENBQVMsQ0FBRyxDQUNmQyxPQUFPLENBQUVDLENBQU8sRUFBSUEsQ0FBTyxFQUFFLENBQzdCQyxRQUFRLENBQUVDLENBQVksRUFBSSxDQUFDQSxDQUFZLENBQUUsSUFBTSxLQUFLLENBQUMsQ0FBQyxDQUN0REMsVUFBVSxDQUFFQyxDQUFZLEVBQUksQ0FBQ0EsQ0FBWSxDQUFFLElBQU0sS0FBSyxDQUFDLENBQUMsQ0FDN0MsQUFBWEMsU0FBUyxFQUFRLEVBQUcsQ0FDSCxBQUFqQkMsZUFBZSxFQUFRLEVBQUcsQ0FDMUJDLE1BQU0sQ0FBRSxJQUFPLENBQUEsQ0FBRUMsT0FBTyxDQUFFLElBQUksQ0FBRSxDQUFBLEFBQUMsQ0FDakNDLFdBQVcsQ0FBRUMsQ0FBUSxFQUFJQSxDQUFRLENBQ1osQUFBckJDLG1CQUFtQixFQUFRLEVBQUcsQ0FDOUJDLFVBQVUsQ0FBRSxBQUFDQyxDQUFHLEVBQUtBLENBQUcsQ0FBQ0MsYUFBYSxDQUN4QyxDQUVLQyxDQUFJLENBQUdDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDakIsQ0FBUyxDQUFDLEFBRmpDLGdCQVdGLFNBQVNtQixXQUFXLENBQUNDLENBQWEsQ0FBRUMsQ0FBd0MsQ0FBRSxDQUMzRSxNQUFPLENBQUlDLEdBQUFBLENBQUksR0FBSyxDQUNqQixJQUFNQyxDQUFLLENBQUdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FDeEJDLENBQWUsQ0FBR0YsQ0FBSyxDQUFDRyxrREFBa0QsQ0FBQ0Msc0JBQXNCLENBQUNqQixPQUFPLENBQ3pHa0IsQ0FBUyxDQUFHWCxDQUFJLENBQUNZLEdBQUcsQ0FBQ0MsQ0FBQyxFQUFJLENBQUNBLENBQUMsQ0FBRUwsQ0FBZSxDQUFDSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBRnpCLEFBSS9CWixDQUFBQSxNQUFNLENBQUNhLE1BQU0sQ0FBQ04sQ0FBZSxDQUFFekIsQ0FBUyxDQUFFcUIsQ0FBTyxDQUFDLEFBRWxELEtBQU1XLENBQUcsQ0FBRyxDQUNUQyxRQUFRLENBQUUsSUFBSSxDQUNkQyxLQUFLLENBQUUsSUFBSSxDQUNiLEFBQUMsQUFFRixJQUFJLENBQ0RGLENBQUcsQ0FBQ0MsUUFBUSxDQUFHYixDQUFTLElBQUlFLENBQUksQ0FBQyxDQUNuQyxBQUFDLE1BQU9ZLENBQUssQ0FBRSxDQUNiRixDQUFHLENBQUNFLEtBQUssQ0FBR0EsQ0FBSyxDQUNuQixBQUlELEdBRkFoQixNQUFNLENBQUNhLE1BQU0sQ0FBQ04sQ0FBZSxDQUFFUCxNQUFNLENBQUNpQixXQUFXLENBQUNQLENBQVMsQ0FBQyxDQUFDLENBRXpESSxDQUFHLENBQUNFLEtBQUssQ0FDVixNQUFNRixDQUFHLENBQUNFLEtBQUssQUFBQyxBQUNsQixBQUVELFFBQU9GLENBQUcsQ0FBQ0MsUUFBUSxBQUFDLENBQ3RCLEFBQUMsQ0FDSixBQUVvQiJ9
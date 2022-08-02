"use strict";const a=require("../constants");function traverseType(b){if(!b)return null;let c=b.$$typeof;return c===a.ReactSymbols.Ref?traverseType(b.render):[a.ReactSymbols.Memo,a.ReactSymbols.Element].includes(c)?traverseType(b.type):b}module.exports=traverseType
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL3RyYXZlcnNlVHlwZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdFN5bWJvbHMgfSBmcm9tICdAY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIHRyYXZlcnNlVHlwZShjb21wb25lbnQ6IGFueSk6IEpTWC5FbGVtZW50IHwgdW5kZWZpbmVkIHtcclxuICAgaWYgKCFjb21wb25lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgY29uc3QgdHlwZSA9IGNvbXBvbmVudC4kJHR5cGVvZjtcclxuICAgaWYgKHR5cGUgPT09IFJlYWN0U3ltYm9scy5SZWYpIHtcclxuICAgICAgcmV0dXJuIHRyYXZlcnNlVHlwZShjb21wb25lbnQucmVuZGVyKTtcclxuICAgfSBlbHNlIGlmIChbUmVhY3RTeW1ib2xzLk1lbW8sIFJlYWN0U3ltYm9scy5FbGVtZW50XS5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICByZXR1cm4gdHJhdmVyc2VUeXBlKGNvbXBvbmVudC50eXBlKTtcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZXhwb3J0ID0gdHJhdmVyc2VUeXBlOyJdLCJuYW1lcyI6WyJ0cmF2ZXJzZVR5cGUiLCJjb21wb25lbnQiLCJ0eXBlIiwiJCR0eXBlb2YiLCJSZWFjdFN5bWJvbHMiLCJSZWYiLCJyZW5kZXIiLCJNZW1vIiwiRWxlbWVudCIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkIsY0FBWSxDQUV6QyxVQUFTQSxZQUFZLENBQUNDLENBQWMsQ0FBMkIsQ0FDNUQsR0FBSSxDQUFDQSxDQUFTLENBQUUsT0FBTyxJQUFJLEFBQUMsQUFFNUIsS0FBTUMsQ0FBSSxDQUFHRCxDQUFTLENBQUNFLFFBQVEsQUFBQyxRQUNoQyxBQUFJRCxDQUFJLEdBQUtFLENBQVksYUFBQSxDQUFDQyxHQUFHLENBQ25CTCxZQUFZLENBQUNDLENBQVMsQ0FBQ0ssTUFBTSxDQUFDLENBQzdCLENBQUNGLENBQVksYUFBQSxDQUFDRyxJQUFJLENBQUVILENBQVksYUFBQSxDQUFDSSxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxDQUFDUCxDQUFJLENBQUMsQ0FDekRGLFlBQVksQ0FBQ0MsQ0FBUyxDQUFDQyxJQUFJLENBQUMsQ0FHL0JELENBQVMsQUFGZixDQUdILGVBRVFELFlBQVksQUFBQyJ9
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"post",{enumerable:!0,get:()=>post});const e=require("../../common/constants"),t=require("../modules/webpack/stores");function post(s,r,n){let d=t.Users.getCurrentUser();d?.id&&~Object.values(e.Owners).indexOf(d.id)?(s.restart(),n.statusCode=200):n.statusCode=401,n.end()}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvcm91dGVzL3JlbG9hZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPd25lcnMgfSBmcm9tICdAY29tbW9uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnQHdlYnBhY2svc3RvcmVzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGluc3RhbmNlLCBfLCByZXMpIHtcclxuICAgY29uc3QgdXNlciA9IFVzZXJzLmdldEN1cnJlbnRVc2VyKCk7XHJcblxyXG4gICBpZiAodXNlcj8uaWQgJiYgfk9iamVjdC52YWx1ZXMoT3duZXJzKS5pbmRleE9mKHVzZXIuaWQpKSB7XHJcbiAgICAgIGluc3RhbmNlLnJlc3RhcnQoKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xyXG4gICB9XHJcblxyXG4gICByZXMuZW5kKCk7XHJcbn07Il0sIm5hbWVzIjpbInBvc3QiLCJpbnN0YW5jZSIsIl8iLCJyZXMiLCJ1c2VyIiwiVXNlcnMiLCJnZXRDdXJyZW50VXNlciIsImlkIiwiT2JqZWN0IiwidmFsdWVzIiwiT3duZXJzIiwiaW5kZXhPZiIsInJlc3RhcnQiLCJzdGF0dXNDb2RlIiwiZW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxrR0FHZ0JBLE1BQUksd0JBQUpBLElBQUksbUJBSEcsd0JBQW1CLFlBQ3BCLDJCQUFpQixDQUVoQyxVQUFTQSxJQUFJLENBQUNDLENBQVEsQ0FBRUMsQ0FBQyxDQUFFQyxDQUFHLENBQUUsQ0FDcEMsSUFBTUMsQ0FBSSxDQUFHQyxDQUFLLE1BQUEsQ0FBQ0MsY0FBYyxFQUFFLEFBQUMsQUFFaENGLENBQUFBLENBQUksRUFBRUcsRUFBRSxFQUFJLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxDQUFNLE9BQUEsQ0FBQyxDQUFDQyxPQUFPLENBQUNQLENBQUksQ0FBQ0csRUFBRSxDQUFDLEVBQ3BETixBQUplQSxDQUFRLENBSWRXLE9BQU8sRUFBRSxDQUNsQlQsQ0FBRyxDQUFDVSxVQUFVLENBQUcsR0FBRyxFQUVwQlYsQ0FBRyxDQUFDVSxVQUFVLENBQUcsR0FBRyxDQUd2QlYsQ0FBRyxDQUFDVyxHQUFHLEVBQUUsQ0FDWCxBQUFDIn0=
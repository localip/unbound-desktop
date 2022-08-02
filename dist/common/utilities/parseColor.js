"use strict";module.exports=function parseColor(a){0===a.indexOf("--")&&(a=getComputedStyle(document.documentElement).getPropertyValue(a));let b=new CSSStyleSheet;return b.replaceSync(`target {color: ${a}}`),b.cssRules[0].style.color.match(/[\.\d]+/g).map(Number)}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL3BhcnNlQ29sb3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFNoZWV0IHtcclxuICAgcmVwbGFjZVN5bmM6IEZuO1xyXG4gICBjc3NSdWxlczogUmVjb3JkPHN0cmluZywgYW55PltdO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgcGFyc2VDb2xvclxyXG4gKiBAZGVzY3JpcHRpb24gUGFyc2VzIGEgY29sb3Igc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgUkdCKEEpIHZhbHVlcy5cclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQSBDU1MgcGFyc2FibGUgY29sb3Igc3RyaW5nIG9yIGEgQ1NTIHZhcmlhYmxlIG5hbWUgaW4gOnJvb3QuXHJcbiAqIEByZXR1cm4ge1tudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXI/XX0gQW4gYXJyYXkgb2YgdGhlIFJHQihBKSB2YWx1ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJzZUNvbG9yKGNvbG9yKSB7XHJcbiAgIGlmIChjb2xvci5pbmRleE9mKCctLScpID09PSAwKSB7XHJcbiAgICAgIGNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY29sb3IpO1xyXG4gICB9XHJcblxyXG4gICBjb25zdCBzaGVldCA9IChuZXcgQ1NTU3R5bGVTaGVldCgpKSBhcyBhbnkgYXMgU2hlZXQ7XHJcbiAgIHNoZWV0LnJlcGxhY2VTeW5jKGB0YXJnZXQge2NvbG9yOiAke2NvbG9yfX1gKTtcclxuICAgcmV0dXJuIHNoZWV0LmNzc1J1bGVzWzBdLnN0eWxlLmNvbG9yLm1hdGNoKC9bXFwuXFxkXSsvZykubWFwKE51bWJlcik7XHJcbn07XHJcblxyXG5leHBvcnQgPSBwYXJzZUNvbG9yOyJdLCJuYW1lcyI6WyJwYXJzZUNvbG9yIiwiY29sb3IiLCJpbmRleE9mIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsInNoZWV0IiwiQ1NTU3R5bGVTaGVldCIsInJlcGxhY2VTeW5jIiwiY3NzUnVsZXMiLCJzdHlsZSIsIm1hdGNoIiwibWFwIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQSw0QkFXQSxTQUFTQSxVQUFVLENBQUNDLENBQUssQ0FBRSxDQUNJLENBQUMsR0FBekJBLENBQUssQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNwQkQsQ0FBQUEsQ0FBSyxDQUFHRSxnQkFBZ0IsQ0FBQ0MsUUFBUSxDQUFDQyxlQUFlLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUNMLENBQUssQ0FBQyxDQUFBLEFBRzdFLEtBQU1NLENBQUssQ0FBSSxJQUFJQyxhQUFhLEFBQUUsQUFBaUIsQUFBQyxBQUVwRCxRQURBRCxDQUFLLENBQUNFLFdBQVcsQ0FBQyxDQUFDLGVBQWUsRUFBRVIsQ0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3RDTSxDQUFLLENBQUNHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDVixLQUFLLENBQUNXLEtBQUssWUFBWSxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxBQUFDLENBQ3JFLEFBRW1CIn0=
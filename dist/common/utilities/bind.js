"use strict";module.exports=function bind(a,b,c){let d=c.value;if("function"!=typeof d)throw TypeError("bind can only be used on functions");return{configurable:!0,get(){if(this===a.prototype||this.hasOwnProperty(b)||"function"!=typeof d)return d;let c=d.bind(this);return Object.defineProperty(this,b,{configurable:!0,get:()=>c,set(a){d=a,delete this[b]}}),c},set(a){d=a}}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL2JpbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIGJpbmRcclxuICogQGRlc2NyaXB0aW9uIFR5cGVTY3JpcHQgZGVjb3JhdG9yIHRvIGF1dG8tYmluZCBmdW5jdGlvbnMgaW4gY2xhc3Nlcy5cclxuICovXHJcblxyXG5mdW5jdGlvbiBiaW5kKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUmVjb3JkPHN0cmluZywgYW55Pik6IFByb3BlcnR5RGVzY3JpcHRvciB7XHJcbiAgIGxldCBwYXlsb2FkID0gZGVzY3JpcHRvci52YWx1ZTtcclxuXHJcbiAgIGlmICh0eXBlb2YgcGF5bG9hZCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdiaW5kIGNhbiBvbmx5IGJlIHVzZWQgb24gZnVuY3Rpb25zJyk7XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZ2V0KCkge1xyXG4gICAgICAgICBpZiAodGhpcyA9PT0gdGFyZ2V0LnByb3RvdHlwZSB8fCB0aGlzLmhhc093blByb3BlcnR5KGtleSkgfHwgdHlwZW9mIHBheWxvYWQgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQ7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGNvbnN0IGJvdW5kID0gcGF5bG9hZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gYm91bmQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICBwYXlsb2FkID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICByZXR1cm4gYm91bmQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICBwYXlsb2FkID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgfTtcclxufVxyXG5cclxuZXhwb3J0ID0gYmluZDsiXSwibmFtZXMiOlsiYmluZCIsInRhcmdldCIsImtleSIsImRlc2NyaXB0b3IiLCJwYXlsb2FkIiwidmFsdWUiLCJUeXBlRXJyb3IiLCJjb25maWd1cmFibGUiLCJnZXQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImJvdW5kIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJzZXQiXSwibWFwcGluZ3MiOiJBQUtBLDRCQUFBLFNBQVNBLElBQUksQ0FBQ0MsQ0FBVyxDQUFFQyxDQUFXLENBQUVDLENBQStCLENBQXNCLENBQzFGLElBQUlDLENBQU8sQ0FBR0QsQUFEdUJBLENBQStCLENBQzNDRSxLQUFLLEFBQUMsQUFFL0IsSUFBSSxBQUFtQixVQUFVLEVBQTdCLE9BQU9ELENBQU8sQUFBZSxDQUM5QixNQUFNLEFBQUlFLFNBQVMsQ0FBQyxvQ0FBb0MsQ0FBQyxBQUFDLEFBQzVELEFBRUQsT0FBTyxDQUNKQyxZQUFZLENBQUUsQ0FBQSxDQUFJLENBQ2xCQyxHQUFHLEVBQUcsQ0FDSCxHQUFJLElBQUksR0FBS1AsQUFWUkEsQ0FBVyxDQVVJUSxTQUFTLEVBQUksSUFBSSxDQUFDQyxjQUFjLENBQUNSLENBQUcsQ0FBQyxFQUFJLEFBQW1CLFVBQVUsRUFBN0IsT0FBT0UsQ0FBTyxBQUFlLENBQ3ZGLE9BQU9BLENBQU8sQUFBQyxBQUNqQixBQUVELEtBQU1PLENBQUssQ0FBR1AsQ0FBTyxDQUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsQUFZakMsUUFYQVksTUFBTSxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFFWCxDQUFHLENBQUUsQ0FDOUJLLFlBQVksQ0FBRSxDQUFBLENBQUksQ0FDbEJDLEdBQUcsQ0FBSEEsSUFDVUcsQ0FBSyxBQUNkLENBQ0RHLEdBQUcsQ0FBQ1QsQ0FBSyxDQUFFLENBQ1JELENBQU8sQ0FETkMsQ0FBSyxBQUNTLENBQ2YsT0FBTyxJQUFJLENBQUNILENBQUcsQ0FBQyxDQUNsQixDQUNILENBQUMsQ0FFS1MsQ0FBSyxBQUFDLENBQ2YsQ0FDREcsR0FBRyxDQUFDVCxDQUFLLENBQUUsQ0FDUkQsQ0FBTyxDQUROQyxDQUFLLEFBQ1MsQ0FDakIsQ0FDSCxBQUFDLENBQ0osQUFFYSJ9
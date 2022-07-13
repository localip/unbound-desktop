"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>g});const a=require("../discord"),b=require("../../../common/utilities/index"),c=f(require("react")),d=f(require("./SettingsItem")),e=f(require("../../styles/components/sliderinput.css"));function f(a){return a&&a.__esModule?a:{default:a}}e.default.append();class g extends c.default.PureComponent{render(){let{title:e,description:f,required:g,markers:h,...i}=this.props,j=this.props.children;return delete this.props.children,c.default.createElement(d.default,Object.assign({title:e,description:f,required:g},i),c.default.createElement(a.Slider,Object.assign({},this.props,{className:(0,b.classnames)(this.props.className,"unbound-settings-slider",h&&"unbound-settings-slider-has-markers")})),j)}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9zZXR0aW5ncy9TbGlkZXJJbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAnQGNvbXBvbmVudHMvZGlzY29yZCc7XHJcbmltcG9ydCB7IGNsYXNzbmFtZXMgfSBmcm9tICdAdXRpbGl0aWVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBTZXR0aW5nc0l0ZW0sIHsgU2V0dGluZ3NJdGVtUHJvcHMgfSBmcm9tICcuL1NldHRpbmdzSXRlbSc7XHJcblxyXG5pbXBvcnQgU3R5bGVzIGZyb20gJ0BzdHlsZXMvY29tcG9uZW50cy9zbGlkZXJpbnB1dC5jc3MnO1xyXG5TdHlsZXMuYXBwZW5kKCk7XHJcblxyXG5pbnRlcmZhY2UgU2xpZGVySW5wdXRQcm9wcyBleHRlbmRzIFNldHRpbmdzSXRlbVByb3BzIHtcclxuICBmaWxsU3R5bGVzPzogUmVjb3JkPGFueSwgYW55PjtcclxuICBzdGlja1RvTWFya2Vycz86IGJvb2xlYW47XHJcbiAgaW5pdGlhbFZhbHVlPzogbnVtYmVyO1xyXG4gIGtleWJvYXJkU3RlcD86IG51bWJlcjtcclxuICBkZWZhdWx0VmFsdWU/OiBudW1iZXI7XHJcbiAgaGFuZGxlU2l6ZT86IG51bWJlcjtcclxuICBtYXJrZXJzPzogbnVtYmVyW107XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIG9uVmFsdWVDaGFuZ2U/OiBGbjtcclxuICBvblZhbHVlUmVuZGVyPzogRm47XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIG1heFZhbHVlPzogbnVtYmVyO1xyXG4gIG1pblZhbHVlPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJJbnB1dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8U2xpZGVySW5wdXRQcm9wcz4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCByZXF1aXJlZCwgbWFya2VycywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBkZWxldGUgdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2V0dGluZ3NJdGVtXHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgID5cclxuICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgICd1bmJvdW5kLXNldHRpbmdzLXNsaWRlcicsXHJcbiAgICAgICAgICAgIG1hcmtlcnMgJiYgJ3VuYm91bmQtc2V0dGluZ3Mtc2xpZGVyLWhhcy1tYXJrZXJzJ1xyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtjaGlsZHJlbiBhcyBKU1guRWxlbWVudH1cclxuICAgICAgPC9TZXR0aW5nc0l0ZW0+XHJcbiAgICApO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiU2xpZGVySW5wdXQiLCJTdHlsZXMiLCJhcHBlbmQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmVxdWlyZWQiLCJtYXJrZXJzIiwicmVzdCIsInByb3BzIiwiY2hpbGRyZW4iLCJTZXR0aW5nc0l0ZW0iLCJTbGlkZXIiLCJjbGFzc05hbWUiLCJjbGFzc25hbWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxrR0F5QkEsU0EyQkMsd0JBM0JvQkEsQ0FBVyxtQkF6QlQsWUFBcUIsWUFDakIsaUNBQVksY0FDckIsT0FBTyxlQUV1QixnQkFBZ0IsZUFFN0MseUNBQW9DLHNEQUN2REMsQ0FBTSxRQUFBLENBQUNDLE1BQU0sRUFBRSxBQWtCQSxPQUFNRixDQUFXLFNBQVNHLENBQUssUUFBQSxDQUFDQyxhQUFhLENBQzFEQyxNQUFNLEVBQUcsQ0FDUCxHQUFNLENBQUVDLEtBQUssQ0FBTEEsQ0FBSyxDQUFFQyxXQUFXLENBQVhBLENBQVcsQ0FBRUMsUUFBUSxDQUFSQSxDQUFRLENBQUVDLE9BQU8sQ0FBUEEsQ0FBTyxDQUFFLEdBQUdDLENBQUksQ0FBRSxDQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUMvREMsQ0FBUSxDQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxRQUFRLEFBRGtDLEFBTXRFLFFBRkEsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0MsUUFBUSxDQUd4Qix3QkFBQ0MsQ0FBWSxRQUFBLGdCQUNYUCxLQUFLLENBQUVBLENBQUssQ0FDWkMsV0FBVyxDQUFFQSxDQUFXLENBQ3hCQyxRQUFRLENBQUVBLENBQVEsRUFDZEUsQ0FBSSxFQUVSLHdCQUFDSSxDQUFNLE9BQUEsa0JBQ0QsSUFBSSxDQUFDSCxLQUFLLEVBQ2RJLFNBQVMsQ0FBRUMsR0FBQUEsQ0FBVSxXQUFBLEVBQ25CLElBQUksQ0FBQ0wsS0FBSyxDQUFDSSxTQUFTLENBQ3BCLHlCQUF5QixDQUN6Qk4sQ0FBTyxFQUFJLHFDQUFxQyxDQUNqRCxHQUNELENBQ0RHLENBQVEsQ0FDSSxBQUNmLENBQ0gsQ0FDRixBQUFDIn0=
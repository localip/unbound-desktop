"use strict";const a=require("./discord"),b=function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}(require("react")),Divider=({direction:c="VERTICAL",height:d,width:e,margin:f,background:g,...h})=>c===Divider.Directions.HORIZONTAL?b.default.createElement("div",Object.assign({style:{height:d??"24px",width:e??"1px",margin:f??"0 8px",flex:"0 0 auto",background:g??"var(--background-modifier-accent)"}},h)):b.default.createElement(a.FormDivider,Object.assign({},h));Divider.Directions={HORIZONTAL:"HORIZONTAL",VERTICAL:"VERTICAL"},module.exports=Divider
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9EaXZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRGl2aWRlciB9IGZyb20gJ0Bjb21wb25lbnRzL2Rpc2NvcmQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIERpdmlkZXJQcm9wcyB7XHJcbiAgIGRpcmVjdGlvbj86ICdIT1JJWk9OVEFMJyB8ICdWRVJUSUNBTCc7XHJcbiAgIGhlaWdodD86IGFueTtcclxuICAgd2lkdGg/OiBhbnk7XHJcbiAgIG1hcmdpbj86IGFueTtcclxuICAgYmFja2dyb3VuZD86IGFueTtcclxuICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRGl2aWRlciBleHRlbmRzIFJlYWN0LkZDPGFueT4ge1xyXG4gICBEaXJlY3Rpb25zOiB7XHJcbiAgICAgIEhPUklaT05UQUw6ICdIT1JJWk9OVEFMJyxcclxuICAgICAgVkVSVElDQUw6ICdWRVJUSUNBTCc7XHJcbiAgIH07XHJcbn1cclxuXHJcbmNvbnN0IERpdmlkZXI6IERpdmlkZXIgPSAoeyBkaXJlY3Rpb24gPSAnVkVSVElDQUwnLCBoZWlnaHQsIHdpZHRoLCBtYXJnaW4sIGJhY2tncm91bmQsIC4uLnJlc3QgfTogRGl2aWRlclByb3BzKSA9PiB7XHJcbiAgIGlmIChkaXJlY3Rpb24gPT09IERpdmlkZXIuRGlyZWN0aW9ucy5IT1JJWk9OVEFMKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2XHJcbiAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ID8/ICcyNHB4JyxcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoID8/ICcxcHgnLFxyXG4gICAgICAgICAgICBtYXJnaW46IG1hcmdpbiA/PyAnMCA4cHgnLFxyXG4gICAgICAgICAgICBmbGV4OiAnMCAwIGF1dG8nLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kID8/ICd2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWFjY2VudCknXHJcbiAgICAgICAgIH19XHJcbiAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAvPjtcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIDxGb3JtRGl2aWRlciB7Li4ucmVzdH0gLz47XHJcbn07XHJcblxyXG5EaXZpZGVyLkRpcmVjdGlvbnMgPSB7XHJcbiAgIEhPUklaT05UQUw6ICdIT1JJWk9OVEFMJyxcclxuICAgVkVSVElDQUw6ICdWRVJUSUNBTCdcclxufTtcclxuXHJcbmV4cG9ydCA9IERpdmlkZXI7Il0sIm5hbWVzIjpbIkRpdmlkZXIiLCJkaXJlY3Rpb24iLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJyZXN0IiwiRGlyZWN0aW9ucyIsIkhPUklaT05UQUwiLCJkaXYiLCJzdHlsZSIsImZsZXgiLCJGb3JtRGl2aWRlciIsIlZFUlRJQ0FMIl0sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNEIsV0FBcUIscUZBQy9CLE9BQU8sR0FrQm5CQSxPQUFPLENBQVksQ0FBQyxDQUFFQyxTQUFTLENBQVRBLENBQVMsQ0FBRyxVQUFVLENBQUVDLE1BQU0sQ0FBTkEsQ0FBTSxDQUFFQyxLQUFLLENBQUxBLENBQUssQ0FBRUMsTUFBTSxDQUFOQSxDQUFNLENBQUVDLFVBQVUsQ0FBVkEsQ0FBVSxDQUFFLEdBQUdDLENBQUksQ0FBZ0IsR0FDM0csQUFBSUwsQ0FBUyxHQUFLRCxPQUFPLENBQUNPLFVBQVUsQ0FBQ0MsVUFBVSxDQUNyQyx3QkFBQ0MsS0FBRyxnQkFDUkMsS0FBSyxDQUFFLENBQ0pSLE1BQU0sQ0FBRUEsQ0FBTSxFQUFJLE1BQU0sQ0FDeEJDLEtBQUssQ0FBRUEsQ0FBSyxFQUFJLEtBQUssQ0FDckJDLE1BQU0sQ0FBRUEsQ0FBTSxFQUFJLE9BQU8sQ0FDekJPLElBQUksQ0FBRSxVQUFVLENBQ2hCTixVQUFVLENBQUVBLENBQVUsRUFBSSxtQ0FBbUMsQ0FDL0QsRUFDR0MsQ0FBSSxFQUNULENBR0Usd0JBQUNNLENBQVcsWUFBQSxrQkFBS04sQ0FBSSxFQUFJLEFBRi9CLEFBR0gsQUFFRE4sQ0FBQUEsT0FBTyxDQUFDTyxVQUFVLENBQUcsQ0FDbEJDLFVBQVUsQ0FBRSxZQUFZLENBQ3hCSyxRQUFRLENBQUUsVUFBVSxDQUN0QixnQkFFUWIsT0FBTyxBQUFDIn0=
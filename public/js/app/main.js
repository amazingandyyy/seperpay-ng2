"use strict";var platform_browser_dynamic_1=require("@angular/platform-browser-dynamic"),app_routes_1=require("./app.routes"),forms_1=require("@angular/forms"),http_1=require("@angular/http"),app_component_1=require("./app.component"),common_1=require("@angular/common");platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent,[app_routes_1.appRouterProviders,{provide:common_1.LocationStrategy,useClass:common_1.HashLocationStrategy},forms_1.disableDeprecatedForms(),forms_1.provideForms(),http_1.HTTP_PROVIDERS])["catch"](function(r){return console.error(r)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtYWluLnRzIl0sIm5hbWVzIjpbInBsYXRmb3JtX2Jyb3dzZXJfZHluYW1pY18xIiwicmVxdWlyZSIsImFwcF9yb3V0ZXNfMSIsImZvcm1zXzEiLCJodHRwXzEiLCJhcHBfY29tcG9uZW50XzEiLCJjb21tb25fMSIsImJvb3RzdHJhcCIsIkFwcENvbXBvbmVudCIsImFwcFJvdXRlclByb3ZpZGVycyIsInByb3ZpZGUiLCJMb2NhdGlvblN0cmF0ZWd5IiwidXNlQ2xhc3MiLCJIYXNoTG9jYXRpb25TdHJhdGVneSIsImRpc2FibGVEZXByZWNhdGVkRm9ybXMiLCJwcm92aWRlRm9ybXMiLCJIVFRQX1BST1ZJREVSUyIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsWUNDQSxJQUFBQSw0QkFBQUMsUUFBMEIscUNBQzFCQyxhQUFBRCxRQUFtQyxnQkFDbkNFLFFBQUFGLFFBQXFELGtCQUNyREcsT0FBQUgsUUFBK0IsaUJBRS9CSSxnQkFBQUosUUFBNkIsbUJBQzdCSyxTQUFBTCxRQUFnRSxrQkFFaEVELDRCQUFBTyxVQUFVRixnQkFBQUcsY0FDTk4sYUFBQU8sb0JBQ0VDLFFBQVNKLFNBQUFLLGlCQUFrQkMsU0FBVU4sU0FBQU8sc0JBQ3ZDVixRQUFBVyx5QkFDQVgsUUFBQVksZUFDQVgsT0FBQVksaUJBTEpoQixTQU1TLFNBQUNpQixHQUFhLE1BQUFDLFNBQVFDLE1BQU1GIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MuZC50c1wiLz5cbnZhciBwbGF0Zm9ybV9icm93c2VyX2R5bmFtaWNfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYycpO1xudmFyIGFwcF9yb3V0ZXNfMSA9IHJlcXVpcmUoJy4vYXBwLnJvdXRlcycpO1xudmFyIGZvcm1zXzEgPSByZXF1aXJlKCdAYW5ndWxhci9mb3JtcycpO1xudmFyIGh0dHBfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2h0dHAnKTtcbnZhciBhcHBfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9hcHAuY29tcG9uZW50XCIpO1xudmFyIGNvbW1vbl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tbW9uJyk7XG5wbGF0Zm9ybV9icm93c2VyX2R5bmFtaWNfMS5ib290c3RyYXAoYXBwX2NvbXBvbmVudF8xLkFwcENvbXBvbmVudCwgW1xuICAgIGFwcF9yb3V0ZXNfMS5hcHBSb3V0ZXJQcm92aWRlcnMsXG4gICAgeyBwcm92aWRlOiBjb21tb25fMS5Mb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogY29tbW9uXzEuSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSxcbiAgICBmb3Jtc18xLmRpc2FibGVEZXByZWNhdGVkRm9ybXMoKSxcbiAgICBmb3Jtc18xLnByb3ZpZGVGb3JtcygpLFxuICAgIGh0dHBfMS5IVFRQX1BST1ZJREVSU1xuXSkuY2F0Y2goZnVuY3Rpb24gKGVycikgeyByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpOyB9KTtcbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MuZC50c1wiLz5cbmltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBhcHBSb3V0ZXJQcm92aWRlcnMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuaW1wb3J0IHsgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcywgcHJvdmlkZUZvcm1zIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9jYXRpb24sIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gICAgYXBwUm91dGVyUHJvdmlkZXJzLFxuICAgIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0sXG4gICAgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcygpLFxuICAgIHByb3ZpZGVGb3JtcygpLFxuICAgIEhUVFBfUFJPVklERVJTXG5dKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),http_1=require("@angular/http");require("rxjs/operator");var AuthService=function(){function e(e){this.http=e}return e.prototype.logUserIn=function(e){return console.log(e),this.http.post("/api/auth/logUserIn",e).toPromise().then(this.handelResponse)["catch"](function(e){return console.log("err when logUserIn @auth.service.ts")})},e.prototype.handelResponse=function(e){var t=e.json();return t||{}},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],e)}();exports.AuthService=AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwiYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsInRoaXMiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImQiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiY29yZV8xIiwicmVxdWlyZSIsImh0dHBfMSIsIkF1dGhTZXJ2aWNlIiwiaHR0cCIsInByb3RvdHlwZSIsImxvZ1VzZXJJbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsInRvUHJvbWlzZSIsInRoZW4iLCJoYW5kZWxSZXNwb25zZSIsImVyciIsInJlcyIsInRva2VuIiwianNvbiIsIkluamVjdGFibGUiLCJIdHRwIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFDQSxJQUFJQSxZQUFjQyxNQUFRQSxLQUFLRCxZQUFlLFNBQVVFLEVBQVlDLEVBQVFDLEVBQUtDLEdBQzdFLEdBQTJIQyxHQUF2SEMsRUFBSUMsVUFBVUMsT0FBUUMsRUFBSUgsRUFBSSxFQUFJSixFQUFrQixPQUFURSxFQUFnQkEsRUFBT00sT0FBT0MseUJBQXlCVCxFQUFRQyxHQUFPQyxDQUNySCxJQUF1QixnQkFBWlEsVUFBb0Qsa0JBQXJCQSxTQUFRQyxTQUF5QkosRUFBSUcsUUFBUUMsU0FBU1osRUFBWUMsRUFBUUMsRUFBS0MsT0FDcEgsS0FBSyxHQUFJVSxHQUFJYixFQUFXTyxPQUFTLEVBQUdNLEdBQUssRUFBR0EsS0FBU1QsRUFBSUosRUFBV2EsTUFBSUwsR0FBS0gsRUFBSSxFQUFJRCxFQUFFSSxHQUFLSCxFQUFJLEVBQUlELEVBQUVILEVBQVFDLEVBQUtNLEdBQUtKLEVBQUVILEVBQVFDLEtBQVNNLEVBQ2hKLE9BQU9ILEdBQUksR0FBS0csR0FBS0MsT0FBT0ssZUFBZWIsRUFBUUMsRUFBS00sR0FBSUEsR0FFNURPLFdBQWNoQixNQUFRQSxLQUFLZ0IsWUFBZSxTQUFVQyxFQUFHQyxHQUN2RCxHQUF1QixnQkFBWk4sVUFBb0Qsa0JBQXJCQSxTQUFRTyxTQUF5QixNQUFPUCxTQUFRTyxTQUFTRixFQUFHQyxJQ1IxR0UsT0FBQUMsUUFBMkIsaUJBQzNCQyxPQUFBRCxRQUErQixnQkFDL0JBLFNBQU8sZ0JBS1AsSUFBQUUsYUFBQSxXQUVJLFFBQUFBLEdBQW1CQyxHQUFBeEIsS0FBQXdCLEtBQUFBLEVBZXZCLE1BYklELEdBQUFFLFVBQUFDLFVBQUEsU0FBVUMsR0FFTixNQURBQyxTQUFRQyxJQUFJRixHQUNMM0IsS0FBS3dCLEtBQUtNLEtBQUssc0JBQXVCSCxHQUN4Q0ksWUFDQUMsS0FBS2hDLEtBQUtpQyxnQkFGUmpDLFNBR0ksU0FBQ2tDLEdBQWEsTUFBQU4sU0FBUUMsSUFBSSwwQ0FHakNOLEVBQUFFLFVBQUFRLGVBQVIsU0FBdUJFLEdBQ25CLEdBQUlDLEdBQVFELEVBQUlFLE1BQ2hCLE9BQU9ELFFBZmZiLEVBQUF4QixZQUFDcUIsT0FBQWtCLGFEd0JPdEIsV0FBVyxxQkFBc0JNLE9BQU9pQixRQUN6Q2hCLEtDeEJNaUIsU0FBQWpCLFlBQVdBIiwiZmlsZSI6ImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBodHRwXzEgPSByZXF1aXJlKCdAYW5ndWxhci9odHRwJyk7XG5yZXF1aXJlKCdyeGpzL29wZXJhdG9yJyk7XG52YXIgQXV0aFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF1dGhTZXJ2aWNlKGh0dHApIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICB9XG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmxvZ1VzZXJJbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvYXV0aC9sb2dVc2VySW4nLCBkYXRhKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbih0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIGNvbnNvbGUubG9nKCdlcnIgd2hlbiBsb2dVc2VySW4gQGF1dGguc2VydmljZS50cycpOyB9KTtcbiAgICB9O1xuICAgIEF1dGhTZXJ2aWNlLnByb3RvdHlwZS5oYW5kZWxSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIHRva2VuID0gcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHRva2VuIHx8IHt9O1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2h0dHBfMS5IdHRwXSlcbiAgICBdLCBBdXRoU2VydmljZSk7XG4gICAgcmV0dXJuIEF1dGhTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydHMuQXV0aFNlcnZpY2UgPSBBdXRoU2VydmljZTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvb3BlcmF0b3InO1xuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi9hdXRoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7IH1cblxuICAgIGxvZ1VzZXJJbihkYXRhOiBBdXRoKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL2F1dGgvbG9nVXNlckluJywgZGF0YSlcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdlcnIgd2hlbiBsb2dVc2VySW4gQGF1dGguc2VydmljZS50cycpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRlbFJlc3BvbnNlKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IHRva2VuID0gcmVzLmpzb24oKVxuICAgICAgICByZXR1cm4gdG9rZW4gfHwge307XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

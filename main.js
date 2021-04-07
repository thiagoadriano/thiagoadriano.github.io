(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\thiago.adriano\projects\meu-site\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Thiago Adriano';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 32, vars: 1, consts: [[1, "bloco"], ["src", "assets/thiago-adriano.jpg", "alt", "Thiago Adriano - Dev Full Stack NodeJS"], [1, "contatos"], ["href", "https://api.whatsapp.com/send?phone=5521976098512&text=Ol%C3%A1%20Thiago%2C%20encontrei%20seu%20site%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA%20sobre%20uma%20proposta%20que%20tenho."], ["src", "assets/whatsapp.svg", "alt", "Thiago Adriano - Whatsapp"], ["href", "mailto:contato@thiagoadriano.com.br"], ["src", "assets/mail.svg", "alt", "Thiago Adriano - Email"], ["href", "https://github.com/thiagoadriano"], ["src", "assets/github.svg", "alt", "Thiago Adriano - GitHub"], ["href", "https://www.linkedin.com/in/thiagoadriano/"], ["src", "assets/linkedin.svg", "alt", "Thiago Adriano - Linkedin"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dev Full Stack NodeJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Atuante no front end com Angular e VueJs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No back end com NodeJS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "E no mobile com Ionic e Flutter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contatos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(21) 9 7609-8512");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "contato@thiagoadriano.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "/thiagoadriano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "/thiagoadriano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".bloco[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 400px;\n  height: auto;\n  border-radius: 8px;\n  margin: 115px auto 0;\n  text-align: center;\n  border: solid 1px #ccc;\n  box-shadow: rgba(0, 0, 0, 0.1) 2px 3px 4px;\n}\n.bloco[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 130px;\n  width: auto;\n  object-fit: cover;\n  border-radius: 50%;\n  margin: -65px auto 0;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 0px 1px;\n}\n.bloco[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .bloco[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .bloco[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .bloco[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .bloco[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-family: Ubuntu;\n  color: #333;\n}\n.bloco[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #737373;\n}\n.bloco[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 25px 0 -4px;\n  text-align: left;\n  padding: 10px 35px;\n  font-size: 18px;\n  background: #3672cc;\n  color: #fff;\n  display: inline-block;\n  left: 0;\n  position: relative;\n  border-radius: 5px 5px 0 0;\n  text-transform: uppercase;\n}\n.bloco[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%] {\n  display: block;\n  background: #3672cc;\n  min-height: 20px;\n  border-radius: 0 0 8px 8px;\n  padding: 25px 20px;\n}\n.bloco[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  display: block;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  text-decoration: none;\n}\n.bloco[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.bloco[_ngcontent-%COMP%]   .contatos[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 26px;\n  display: inline-block;\n  margin: 18px 10px -8px 0;\n  filter: invert(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQ0FBQTtBQUNKO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUFOO0FBRVE7RUFDRSxhQUFBO0FBQVY7QUFFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBQVIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NvXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG4gIHdpZHRoOiA0MDBweFxyXG4gIGhlaWdodDogYXV0b1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweFxyXG4gIG1hcmdpbjogMTE1cHggYXV0byAwXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDEwJSkgMnB4IDNweCA0cHhcclxuXHJcbiAgPiBpbWdcclxuICAgIGhlaWdodDogMTMwcHhcclxuICAgIHdpZHRoOiBhdXRvXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlclxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgICBtYXJnaW46IC02NXB4IGF1dG8gMFxyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gLjIpIDBweCAtMXB4IDBweCAxcHhcclxuXHJcbiAgaDEsIGgzLCBoNCwgcCwgYVxyXG4gICAgbWFyZ2luOiAwIDAgNXB4XHJcbiAgICBmb250LWZhbWlseTogVWJ1bnR1XHJcbiAgICBjb2xvcjogIzMzM1xyXG5cclxuICBoM1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG4gICAgY29sb3I6ICM3MzczNzNcclxuXHJcbiAgaDRcclxuICAgIG1hcmdpbjogMjVweCAwIC00cHhcclxuICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgIHBhZGRpbmc6IDEwcHggMzVweFxyXG4gICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzY3MmNjXHJcbiAgICBjb2xvcjogI2ZmZlxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICBsZWZ0OiAwXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXHJcblxyXG5cclxuICAuY29udGF0b3NcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzY3MmNjXHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweFxyXG4gICAgcGFkZGluZzogMjVweCAyMHB4XHJcblxyXG4gICAgYVxyXG4gICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICBtYXJnaW46IDBcclxuICAgICAgcGFkZGluZzogMFxyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG4gICAgICAmOmZpcnN0LWNoaWxkXHJcbiAgICAgICAgaW1nXHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwXHJcblxyXG4gICAgICBpbWdcclxuICAgICAgICB3aWR0aDogYXV0b1xyXG4gICAgICAgIGhlaWdodDogMjZweFxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgICAgIG1hcmdpbjogMThweCAxMHB4IC04cHggMFxyXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEpXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
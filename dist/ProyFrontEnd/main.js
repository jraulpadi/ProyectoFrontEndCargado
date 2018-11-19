(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/principal/principal.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _producto_detalle_producto_detalle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./producto-detalle/producto-detalle.component */ "./src/app/producto-detalle/producto-detalle.component.ts");
/* harmony import */ var _locals_locals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locals/locals.component */ "./src/app/locals/locals.component.ts");
/* harmony import */ var _cargalocal_cargalocal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cargalocal/cargalocal.component */ "./src/app/cargalocal/cargalocal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'detalle/:id', component: _producto_detalle_producto_detalle_component__WEBPACK_IMPORTED_MODULE_4__["ProductoDetalleComponent"] },
    { path: 'productos', component: _principal_principal_component__WEBPACK_IMPORTED_MODULE_2__["PrincipalComponent"] },
    { path: 'locals', component: _locals_locals_component__WEBPACK_IMPORTED_MODULE_5__["LocalsComponent"] },
    { path: 'cargalocal', component: _cargalocal_cargalocal_component__WEBPACK_IMPORTED_MODULE_6__["CargalocalComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\n/* AppComponent's private CSS styles */\r\n\r\n/*\r\n    DEMO STYLE\r\n*/\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n#sidebar {\r\n    width: 250px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    z-index: 999;\r\n    background: rgb(5, 18, 70);\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n    margin-left: -250px;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #6d7fcc;\r\n}\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n    color: #fff;\r\n    padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #7386D5;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n#content {\r\n    width: calc(100% - 250px);\r\n    padding: 40px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n\r\n#content.active {\r\n    width: 100%;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        margin-left: -250px;\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0;\r\n    }\r\n    #content {\r\n        width: 100%;\r\n    }\r\n    #content.active {\r\n        width: calc(100% - 250px);\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">    \n    <nav id=\"sidebar\">\n        <div class=\"sidebar-header\"><h3>{{title}}</h3> </div>\n        <ul class=\"list-unstyled components\">\n            <p>Opciones</p>\n            <li class=\"active\">\n                <a routerLink=\"/dashboard\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">Menú</a>\n            </li>\n            <li>                \n                <ul class=\"list-unstyled\" id=\"dashboard\">\n                    <li><a routerLink=\"/dashboard\">Top Productos</a></li>\n                    <li><a routerLink=\"/productos\">Productos</a></li>\n                    <li><a routerLink=\"/locals\">Datos locales</a></li>\n                </ul>\n            </li>\n        </ul>\n    </nav>\n    <div id=\"content\">\n        <!---->\n        <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\">\n                <i class=\"fas fa-align-left\"></i>                        \n                <span>Toggle Sidebar</span>\n        </button>        \n        <button class=\"btn btn-dark d-inline-block d-lg-none ml-auto\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <i class=\"fas fa-align-justify\"></i>\n        </button>\n        \n        <router-outlet></router-outlet>\n        <app-messages></app-messages>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Inventario Landivar';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/principal/principal.component.ts");
/* harmony import */ var _producto_detalle_producto_detalle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./producto-detalle/producto-detalle.component */ "./src/app/producto-detalle/producto-detalle.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _producto_search_producto_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./producto-search/producto-search.component */ "./src/app/producto-search/producto-search.component.ts");
/* harmony import */ var _locals_locals_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locals/locals.component */ "./src/app/locals/locals.component.ts");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _cargalocal_cargalocal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cargalocal/cargalocal.component */ "./src/app/cargalocal/cargalocal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"],
                _producto_detalle_producto_detalle_component__WEBPACK_IMPORTED_MODULE_7__["ProductoDetalleComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _producto_search_producto_search_component__WEBPACK_IMPORTED_MODULE_11__["ProductoSearchComponent"],
                _locals_locals_component__WEBPACK_IMPORTED_MODULE_12__["LocalsComponent"],
                _cargalocal_cargalocal_component__WEBPACK_IMPORTED_MODULE_14__["CargalocalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_13__["DataTableModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                /*  HttpClientInMemoryWebApiModule.forRoot(
                      InMemoryDataService, { dataEncapsulation: false }
                  )*/
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cargalocal/cargalocal.component.css":
/*!*****************************************************!*\
  !*** ./src/app/cargalocal/cargalocal.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cargalocal/cargalocal.component.html":
/*!******************************************************!*\
  !*** ./src/app/cargalocal/cargalocal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cargalocal works!\n</p>\n<label> Tipo:\n    <input #nombreid />\n</label>\n<label> Nombre:\n    <input #nombre />\n</label>\n<label> Valor:\n    <input #valor />\n</label>\n\n<div>\n    \n  <li><button (click)=\"cambiarlocal(nombreid.value, nombre.value, valor.value)\">Cargar</button></li>\n  <li><button (click)=\"goBack()\">Volver</button></li>\n</div>"

/***/ }),

/***/ "./src/app/cargalocal/cargalocal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cargalocal/cargalocal.component.ts ***!
  \****************************************************/
/*! exports provided: CargalocalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargalocalComponent", function() { return CargalocalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CargalocalComponent = /** @class */ (function () {
    function CargalocalComponent(route, location) {
        this.route = route;
        this.location = location;
    }
    CargalocalComponent.prototype.ngOnInit = function () {
    };
    CargalocalComponent.prototype.goBack = function () {
        this.location.back();
    };
    CargalocalComponent.prototype.cambiarlocal = function (nombreid, nombre, valor) {
        if (nombreid.length > 0) {
            localStorage.setItem('nombreid', nombreid);
        }
        if (nombre.length > 0) {
            localStorage.setItem('nombre', nombre);
        }
        if (valor.length > 0) {
            localStorage.setItem('valor', valor);
        }
        this.goBack();
    };
    CargalocalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cargalocal',
            template: __webpack_require__(/*! ./cargalocal.component.html */ "./src/app/cargalocal/cargalocal.component.html"),
            styles: [__webpack_require__(/*! ./cargalocal.component.css */ "./src/app/cargalocal/cargalocal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], CargalocalComponent);
    return CargalocalComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n    float: left;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n[class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n  }\r\na {\r\n    text-decoration: none;\r\n  }\r\n*, *:after, *:before {\r\n    box-sizing: border-box;\r\n  }\r\nh3 {\r\n    text-align: center; margin-bottom: 0;\r\n  }\r\nh4 {\r\n    position: relative;\r\n  }\r\n.grid {\r\n    margin: 0;\r\n  }\r\n.col-1-4 {\r\n    width: 25%;\r\n  }\r\n.module {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #eee;\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: #607d8b;\r\n    border-radius: 2px;\r\n  }\r\n.module:hover {\r\n    background-color: #eee;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n  }\r\n.grid-pad {\r\n    padding: 10px 0;\r\n  }\r\n.grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Inventario</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let producto of productos\" class=\"col-1-4\"\n      routerLink=\"/detalle/{{producto.id}}\">\n    <div class=\"module producto\">\n      <h4>{{producto.nombre}}</h4>\n    </div>\n  </a>\n</div>\n\n<app-producto-search></app-producto-search>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../producto.service */ "./src/app/producto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(productoService) {
        this.productoService = productoService;
        this.productos = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getProductos();
    };
    DashboardComponent.prototype.getProductos = function () {
        var _this = this;
        this.productoService.getProductos()
            .subscribe(function (productos) { return _this.productos = productos.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/locals/locals.component.css":
/*!*********************************************!*\
  !*** ./src/app/locals/locals.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/locals/locals.component.html":
/*!**********************************************!*\
  !*** ./src/app/locals/locals.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <label>Local Tipo: {{nombreid}}</label> \n</div>\n<div>\n    <label>Local Nombre: {{nombre}}</label> \n  </div>\n  <div>\n      <label>Local Valor: {{valor}}</label> \n    </div>\n<div>\n  <li><button (click)=\"CargarLocalNombre()\">Cargar</button></li>  \n  <li><button (click)=\"BorrarLocalNombre()\">Borrar</button></li>\n  <li><button a routerLink=\"/cargalocal\">Carga Local</button></li>\n</div>"

/***/ }),

/***/ "./src/app/locals/locals.component.ts":
/*!********************************************!*\
  !*** ./src/app/locals/locals.component.ts ***!
  \********************************************/
/*! exports provided: LocalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalsComponent", function() { return LocalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalsComponent = /** @class */ (function () {
    function LocalsComponent() {
    }
    LocalsComponent.prototype.ngOnInit = function () {
        /*
        this.nombreid = 'nombre';
        this.nombre = 'Julio Raúl Padilla';
        this.valor = 'Activo';
        */
        this.nombre = localStorage.getItem('nombre');
        this.nombreid = localStorage.getItem('nombreid');
        this.valor = localStorage.getItem('valor');
    };
    LocalsComponent.prototype.CargarLocalNombre = function () {
        //localStorage.setItem(this.almlocal.nombreid, this.almlocal.nombre);   
        this.nombre = localStorage.getItem('nombre');
        this.nombreid = localStorage.getItem('nombreid');
        this.valor = localStorage.getItem('valor');
    };
    LocalsComponent.prototype.BorrarLocalNombre = function () {
        //localStorage.removeItem('nombre');    
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
            title: '¿Quiere borrar los datos?',
            text: 'Los datos se borraran de la memoria local',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí. Borrar',
            cancelButtonText: 'No, mantener los datos'
        }).then(function (result) {
            if (result.value) {
                localStorage.removeItem('nombreid');
                localStorage.removeItem('nombre');
                localStorage.removeItem('valor');
                _this.CargarLocalNombre();
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()('Borrados', 'Los datos del LocalStorage han sido eliminados.', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()('Cancelado', 'Los datos siguen', 'error');
            }
        });
    };
    LocalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locals',
            template: __webpack_require__(/*! ./locals.component.html */ "./src/app/locals/locals.component.html"),
            styles: [__webpack_require__(/*! ./locals.component.css */ "./src/app/locals/locals.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocalsComponent);
    return LocalsComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n    color: red;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n  }\r\nbody {\r\n    margin: 2em;\r\n  }\r\nbody, input[text], button {\r\n    color: crimson;\r\n    font-family: Cambria, Georgia;\r\n  }\r\nbutton.clear {\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #aaa;\r\n    cursor: auto;\r\n  }\r\nbutton.clear {\r\n    color: #888;\r\n    margin-bottom: 12px;\r\n  }"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/principal/principal.component.css":
/*!***************************************************!*\
  !*** ./src/app/principal/principal.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\r\n.selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n.productos {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n.productos li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n.productos li.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n.productos li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n.productos .text {\r\n    position: relative;\r\n    top: -3px;\r\n  }\r\n.productos a {\r\n    color: #888;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n.productos a:hover {\r\n    color:#607D8B;\r\n  }\r\n.productos .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.5em 0.5em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\nbutton {\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    font-family: Arial;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton.delete {\r\n    position: relative;\r\n    left: 194px;\r\n    top: -32px;\r\n    background-color: gray !important;\r\n    color: white;\r\n  }"

/***/ }),

/***/ "./src/app/principal/principal.component.html":
/*!****************************************************!*\
  !*** ./src/app/principal/principal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Productos</h2>\n\n<div>\n    <label> Id:\n        <input #productoId />    \n    </label>\n    <label> Nombre:\n        <input #productoNombre />    \n    </label>\n    <label> Valor:\n        <input #productoValor />\n    </label>\n    <button (click)=\"add(productoNombre.value, productoId.value, productoValor.value); productoNombre.value=''; productoId.value=''; productoValor.value=''\">Agregar</button>\n</div>\n\n<ul class=\"productos\">\n  <li *ngFor=\"let producto of productos\">\n  <a routerLink=\"/detalle/{{producto.id}}\">\n    <span class=\"badge\">{{producto.id}}</span> {{producto.nombre}}\n  </a>\n  <button class=\"delete\" title=\"delete producto\" (click)=\"delete(producto)\">X</button>\n  </li>\n</ul>\n<!--\n<app-producto-detalle [producto]=\"selectedProducto\"></app-producto-detalle>\n-->\n\n<table class=\"table table-striped\" [mfData]=\"producto\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n    <thead>\n    <tr>\n        <th style=\"width: 20%\">\n            <mfDefaultSorter by=\"name\">Id</mfDefaultSorter>\n        </th>\n        <th style=\"width: 50%\">\n            <mfDefaultSorter by=\"email\">Nombre</mfDefaultSorter>\n        </th>        \n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let producto of productos\">\n        <td>{{producto.id}}</td>\n        <td>{{producto.nombre}}</td>        \n    </tr>\n    </tbody>\n    <tfoot>\n    <tr>\n        <td colspan=\"4\">\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n        </td>\n    </tr>\n    </tfoot>\n</table>"

/***/ }),

/***/ "./src/app/principal/principal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/principal/principal.component.ts ***!
  \**************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../producto.service */ "./src/app/producto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent(productoService) {
        this.productoService = productoService;
    }
    PrincipalComponent.prototype.ngOnInit = function () {
        this.getProductos();
    };
    /*
    onSelect(producto: Producto): void {
      this.selectedProducto = producto;
    }
    */
    PrincipalComponent.prototype.getProductos = function () {
        var _this = this;
        this.productoService.getProductos()
            .subscribe(function (productos) { return _this.productos = productos; });
    };
    PrincipalComponent.prototype.add = function (nombre, id, valor) {
        var _this = this;
        nombre = nombre.trim();
        //id = Number(id);
        if (!nombre) {
            return;
        }
        this.productoService.addProducto({ id: id, nombre: nombre, valor: valor })
            .subscribe(function (producto) {
            //console.log(producto[0]);
            //this.productos.push(producto);
            _this.getProductos();
        });
    };
    PrincipalComponent.prototype.delete = function (producto) {
        this.productos = this.productos.filter(function (p) { return p != producto; });
        this.productoService.deleteProducto(producto)
            .subscribe();
    };
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"]])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/producto-detalle/producto-detalle.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/producto-detalle/producto-detalle.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/producto-detalle/producto-detalle.component.html":
/*!******************************************************************!*\
  !*** ./src/app/producto-detalle/producto-detalle.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"producto\">\n  <h2>{{producto.nombre}}</h2>\n  <div><span>id: </span>{{producto.id}}</div>  \n\n  <div>\n    <label>nombre:\n      <input [(ngModel)]=\"producto.nombre\" placeholder=\"nombre\">\n    </label>\n  </div>\n  <button (click)=\"goBack()\">Volver</button>\n</div>\n\n<button (click)=\"save()\">Guardar</button>"

/***/ }),

/***/ "./src/app/producto-detalle/producto-detalle.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/producto-detalle/producto-detalle.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductoDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDetalleComponent", function() { return ProductoDetalleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../producto.service */ "./src/app/producto.service.ts");
/* harmony import */ var _producto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../producto */ "./src/app/producto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductoDetalleComponent = /** @class */ (function () {
    function ProductoDetalleComponent(route, productoService, location) {
        this.route = route;
        this.productoService = productoService;
        this.location = location;
    }
    ProductoDetalleComponent.prototype.ngOnInit = function () {
        this.getProducto();
    };
    ProductoDetalleComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductoDetalleComponent.prototype.getProducto = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.productoService.getProducto(id)
            .subscribe(function (producto) { return _this.producto = producto[0]; });
        console.log(this.producto);
    };
    ProductoDetalleComponent.prototype.save = function () {
        //console.log(this.producto);
        var _this = this;
        this.productoService.updateProducto(this.producto)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _producto__WEBPACK_IMPORTED_MODULE_4__["Producto"])
    ], ProductoDetalleComponent.prototype, "producto", void 0);
    ProductoDetalleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto-detalle',
            template: __webpack_require__(/*! ./producto-detalle.component.html */ "./src/app/producto-detalle/producto-detalle.component.html"),
            styles: [__webpack_require__(/*! ./producto-detalle.component.css */ "./src/app/producto-detalle/producto-detalle.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ProductoDetalleComponent);
    return ProductoDetalleComponent;
}());



/***/ }),

/***/ "./src/app/producto-search/producto-search.component.css":
/*!***************************************************************!*\
  !*** ./src/app/producto-search/producto-search.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n.search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width:195px;\r\n    height: 16px;\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n  }\r\n   */\r\n  .search-result li:hover {\r\n    background-color: #607D8B;\r\n  }\r\n  .search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n  .search-result li a:hover {\r\n    color: white;\r\n  }\r\n  .search-result li a:active {\r\n    color: white;\r\n  }\r\n  #search-box {\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\n  ul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n  }"

/***/ }),

/***/ "./src/app/producto-search/producto-search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/producto-search/producto-search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Producto Search</h4>\n \n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n \n  <ul class=\"search-result\">\n    <li *ngFor=\"let producto of productos$ | async\" >\n      <a routerLink=\"/detalle/{{producto.id}}\">\n        {{producto.nombre}}\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/producto-search/producto-search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/producto-search/producto-search.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductoSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoSearchComponent", function() { return ProductoSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../producto.service */ "./src/app/producto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoSearchComponent = /** @class */ (function () {
    function ProductoSearchComponent(productoService) {
        this.productoService = productoService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ProductoSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ProductoSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productos$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.productoService.searchProductos(term); }));
    };
    ProductoSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto-search',
            template: __webpack_require__(/*! ./producto-search.component.html */ "./src/app/producto-search/producto-search.component.html"),
            styles: [__webpack_require__(/*! ./producto-search.component.css */ "./src/app/producto-search/producto-search.component.css")]
        }),
        __metadata("design:paramtypes", [_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"]])
    ], ProductoSearchComponent);
    return ProductoSearchComponent;
}());



/***/ }),

/***/ "./src/app/producto.service.ts":
/*!*************************************!*\
  !*** ./src/app/producto.service.ts ***!
  \*************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProductoService = /** @class */ (function () {
    function ProductoService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        //private productosUrl = 'api/productos';  // URL to web api
        // LocalHost
        //private productosUrl = 'http://localhost:3000/api/v1';
        //Azure
        this.productosUrl = 'https://atrasdesdevsc.azurewebsites.net/api/v1';
    }
    ProductoService.prototype.getProductos = function () {
        var _this = this;
        return this.http.get(this.productosUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (productos) { return _this.log('productos capturados.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProductos', [])));
    };
    ProductoService.prototype.getProducto = function (id) {
        var _this = this;
        var url = this.productosUrl + "/" + id;
        console.log(url);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("producto capturado id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getProducto id=" + id)));
        //return of(PRODUCTOS.find(producto => producto.id === id ));
    };
    ProductoService.prototype.log = function (message) {
        this.messageService.add("ProductoService: " + message);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ProductoService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " Fallida. Error: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    /**
     * PUT: actualiza el producto en el servidor
     * POST: agrega producto
     * DELETE: DELETEA
     **/
    ProductoService.prototype.updateProducto = function (producto) {
        var _this = this;
        var url = this.productosUrl + "/" + producto.id;
        return this.http.put(url, producto, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("actualizado producto id=" + producto.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProducto')));
    };
    ProductoService.prototype.addProducto = function (producto) {
        var _this = this;
        var url = this.productosUrl + "/" + producto.id;
        //console.log(producto);
        //return this.http.post<Producto>(this.productosUrl, producto, httpOptions)
        return this.http.post(url, producto, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (producto) { return _this.log("agregado producto w/ id=" + producto.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProducto')));
    };
    ProductoService.prototype.deleteProducto = function (producto) {
        var _this = this;
        var id = typeof producto === 'number' ? producto : producto.id;
        var url = this.productosUrl + "/" + id;
        //return this.http.delete<Producto>(url, httpOptions)
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Eliminado producto id = " + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("deleteProducto")));
    };
    /**
     * Búsqueda
    **/
    ProductoService.prototype.searchProductos = function (term) {
        var _this = this;
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.http.get(this.productosUrl + "/like/" + term)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Se encontraron productos parecidos a \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchProductos', [])));
    };
    ProductoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], ProductoService);
    return ProductoService;
}());



/***/ }),

/***/ "./src/app/producto.ts":
/*!*****************************!*\
  !*** ./src/app/producto.ts ***!
  \*****************************/
/*! exports provided: Producto, LocalDatos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDatos", function() { return LocalDatos; });
var Producto = /** @class */ (function () {
    function Producto() {
    }
    return Producto;
}());

var LocalDatos = /** @class */ (function () {
    function LocalDatos() {
    }
    return LocalDatos;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Modelos\PrograWeb\ProyFrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
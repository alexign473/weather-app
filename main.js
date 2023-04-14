/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/Cloud-background.png */ "./src/assets/Cloud-background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nbutton {\n  border: 0;\n  cursor: pointer;\n}\n\ninput {\n  border: 0;\n  outline: 0;\n}\n\n/* <-- reset */\n:root {\n  --ff-body: \"Raleway\", sans-serif;\n  --c-light: #e7e7eb;\n  --c-dark: #100e1d;\n  --c-muted: #a09fb1;\n  --c-accent-dark: #1e213a;\n  --shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  --w-sidebar: 460px;\n}\n\nbody {\n  height: 100%;\n  background-color: var(--c-dark);\n  color: var(--c-light);\n  font-family: var(--ff-body);\n  font-weight: 500;\n  line-height: 1.17;\n}\n\n.preload * {\n  transition: none !important;\n}\n\nbutton {\n  background-color: #3c47e9;\n  color: var(--c-light);\n  padding: 14px;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n  background: var(--c-accent-dark);\n  padding: 18px 12px;\n  transform: translateX(-100%);\n  transition: 0.3s;\n}\n.sidebar.active {\n  transform: translateX(0);\n}\n.sidebar .close {\n  float: right;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.sidebar__searchbar {\n  display: flex;\n  gap: 12px;\n  margin-top: 50px;\n}\n.sidebar__input {\n  position: relative;\n  flex: 1;\n}\n.sidebar__input i {\n  position: absolute;\n  padding: 16px;\n  color: #616475;\n}\n.sidebar__input input {\n  width: 100%;\n  height: 100%;\n  padding: 0 46px;\n  border: 1px solid var(--c-light);\n  background-color: transparent;\n  color: var(--c-light);\n  transition: 0.1s ease;\n}\n.sidebar__input input::placeholder {\n  color: #616475;\n}\n.sidebar__error {\n  margin: 1.5rem 0;\n}\n.sidebar button {\n  min-width: 80px;\n}\n.sidebar button:disabled {\n  background-color: #2b33a5;\n}\n@media (width > 48em) {\n  .sidebar {\n    width: var(--w-sidebar);\n    padding: 20px 46px;\n  }\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  min-height: 100%;\n  width: 100%;\n}\n@media (width > 48em) {\n  .wrapper {\n    grid-template-columns: 33% 1fr;\n  }\n}\n@media (width > 85.375em) {\n  .wrapper {\n    grid-template-columns: var(--w-sidebar) 1fr;\n  }\n}\n\n/* Weather Current */\n.weather-current {\n  padding: 18px 12px;\n  background: linear-gradient(rgba(30, 33, 58, 0.95) 100%, rgba(30, 33, 58, 0.95) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 50% 10%;\n  background-repeat: no-repeat;\n  background-size: 150%;\n}\n.weather-current__searchbar {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 76px;\n}\n.weather-current__searchbar button {\n  padding: 12px 18px;\n  background: #6e707a;\n  color: var(--c-light);\n  box-shadow: var(--shadow);\n}\n.weather-current__content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  color: var(--c-muted);\n}\n.weather-current__img {\n  width: 150px;\n  margin-bottom: 40px;\n}\n.weather-current__temp {\n  font-size: 4rem;\n  margin-bottom: 24px;\n}\n.weather-current__temp span {\n  font-size: 9rem;\n  color: var(--c-light);\n}\n.weather-current__status {\n  font-size: 2.25rem;\n  font-weight: 600;\n  margin-bottom: 48px;\n}\n.weather-current__date, .weather-current__location {\n  font-size: 1.125rem;\n}\n.weather-current__date {\n  margin-bottom: 32px;\n}\n.weather-current__location {\n  margin-bottom: 100px;\n}\n@media (width > 48em) {\n  .weather-current {\n    padding: 42px 46px;\n  }\n  .weather-current__searchbar {\n    margin-bottom: 100px;\n  }\n  .weather-current__img, .weather-current__temp, .weather-current__status {\n    margin-bottom: 86px;\n  }\n  .weather-current__location {\n    margin-bottom: 0;\n  }\n}\n\n/* Weather Info */\n.weather-info {\n  padding: 20px;\n}\n\nh2 {\n  font-size: 1.5rem;\n  margin-bottom: 32px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  max-width: 750px;\n  min-height: 100%;\n  margin: 0 auto;\n}\n\n.forecast {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 32px 26px;\n  padding: 30px 30px 50px;\n}\n@media (width > 48em) {\n  .forecast {\n    padding: 66px 0 72px;\n  }\n}\n\n.forecast-card,\n.daily-detail-card {\n  background-color: var(--c-accent-dark);\n}\n\n.forecast-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 20px;\n}\n.forecast-card p {\n  margin-bottom: 10px;\n}\n.forecast-card img {\n  width: 65%;\n  margin-bottom: 30px;\n}\n.forecast-card__info {\n  display: flex;\n  align-self: stretch;\n  justify-content: space-between;\n  margin-top: auto;\n}\n.forecast-card__info span:last-of-type {\n  color: var(--c-muted);\n}\n\n.daily-detail {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 32px;\n}\n@media (width > 64em) {\n  .daily-detail {\n    grid-template-columns: 1fr 1fr;\n    gap: 48px;\n  }\n}\n\n.daily-detail-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 22px 22px 38px;\n}\n.daily-detail-card__info {\n  font-size: 2.25rem;\n}\n.daily-detail-card__info span {\n  font-size: 4rem;\n  font-weight: 700;\n}\n\n.atribution {\n  text-align: center;\n  font-size: 14px;\n  color: var(--c-muted);\n  margin-top: 96px;\n  position: relative;\n  bottom: 0;\n}\n.atribution a {\n  color: inherit;\n  font-weight: 700;\n}\n@media (width > 64em) {\n  .atribution {\n    margin-top: auto;\n  }\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n* {\r\n  margin: 0;\r\n}\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  border: 0;\r\n  outline: 0;\r\n}\r\n\r\n/* <-- reset */\r\n\r\n:root {\r\n  --ff-body: 'Raleway', sans-serif;\r\n  --c-light: #e7e7eb;\r\n  --c-dark: #100e1d;\r\n  --c-muted: #a09fb1;\r\n  --c-accent-dark: #1e213a;\r\n  --shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n  --w-sidebar: 460px;\r\n}\r\n\r\n$bp-sm: 48em; // 768px\r\n$bp-md: 64em; // 1024px\r\n$bp-lg: 85.375em; // 1366px\r\n$bp-xl: 120em; // 1920px\r\n$bp-xxl: 160em; // 2560px\r\n\r\nbody {\r\n  height: 100%;\r\n  background-color: var(--c-dark);\r\n  color: var(--c-light);\r\n  font-family: var(--ff-body);\r\n  font-weight: 500;\r\n  line-height: 1.17;\r\n}\r\n\r\n// Remove transitions on page load\r\n.preload * {\r\n  transition: none !important;\r\n}\r\n\r\nbutton {\r\n  background-color: #3c47e9;\r\n  color: var(--c-light);\r\n  padding: 14px;\r\n}\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--c-accent-dark);\r\n  padding: 18px 12px;\r\n  transform: translateX(-100%);\r\n  transition: 0.3s;\r\n\r\n  &.active {\r\n    transform: translateX(0);\r\n  }\r\n\r\n  .close {\r\n    float: right;\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &__searchbar {\r\n    display: flex;\r\n    gap: 12px;\r\n    margin-top: 50px;\r\n  }\r\n\r\n  &__input {\r\n    position: relative;\r\n    flex: 1;\r\n\r\n    i {\r\n      position: absolute;\r\n      padding: 16px;\r\n      color: #616475;\r\n    }\r\n\r\n    input {\r\n      width: 100%;\r\n      height: 100%;\r\n      padding: 0 46px;\r\n      border: 1px solid var(--c-light);\r\n      background-color: transparent;\r\n      color: var(--c-light);\r\n      transition: 0.1s ease;\r\n\r\n      &::placeholder {\r\n        color: #616475;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__error {\r\n    margin: 1.5rem 0;\r\n  }\r\n\r\n  button {\r\n    min-width: 80px;\r\n    &:disabled {\r\n      background-color: #2b33a5;\r\n    }\r\n  }\r\n\r\n  @media (width > $bp-sm) {\r\n    width: var(--w-sidebar);\r\n    padding: 20px 46px;\r\n  }\r\n}\r\n\r\n.wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: auto;\r\n  min-height: 100%;\r\n  width: 100%;\r\n\r\n  @media (width > $bp-sm) {\r\n    grid-template-columns: 33% 1fr;\r\n  }\r\n\r\n  @media (width > $bp-lg) {\r\n    grid-template-columns: var(--w-sidebar) 1fr;\r\n  }\r\n}\r\n\r\n/* Weather Current */\r\n.weather-current {\r\n  padding: 18px 12px;\r\n  background: linear-gradient(\r\n      rgba(30, 33, 58, 0.95) 100%,\r\n      rgba(30, 33, 58, 0.95) 100%\r\n    ),\r\n    url('assets/Cloud-background.png');\r\n  background-position: 50% 10%;\r\n  background-repeat: no-repeat;\r\n  background-size: 150%;\r\n\r\n  &__searchbar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 76px;\r\n\r\n    button {\r\n      padding: 12px 18px;\r\n      background: #6e707a;\r\n      color: var(--c-light);\r\n      box-shadow: var(--shadow);\r\n    }\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    color: var(--c-muted);\r\n  }\r\n\r\n  &__img {\r\n    width: 150px;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  &__temp {\r\n    font-size: 4rem;\r\n    margin-bottom: 24px;\r\n\r\n    span {\r\n      font-size: 9rem;\r\n      color: var(--c-light);\r\n    }\r\n  }\r\n\r\n  &__status {\r\n    font-size: 2.25rem;\r\n    font-weight: 600;\r\n    margin-bottom: 48px;\r\n  }\r\n\r\n  &__date,\r\n  &__location {\r\n    font-size: 1.125rem;\r\n  }\r\n\r\n  &__date {\r\n    margin-bottom: 32px;\r\n  }\r\n\r\n  &__location {\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  @media (width > $bp-sm) {\r\n    padding: 42px 46px;\r\n\r\n    &__searchbar {\r\n      margin-bottom: 100px;\r\n    }\r\n\r\n    &__img,\r\n    &__temp,\r\n    &__status {\r\n      margin-bottom: 86px;\r\n    }\r\n\r\n    &__location {\r\n      margin-bottom: 0;\r\n    }\r\n  }\r\n}\r\n\r\n/* Weather Info */\r\n.weather-info {\r\n  padding: 20px;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 750px;\r\n  min-height: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.forecast {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\r\n  gap: 32px 26px;\r\n  padding: 30px 30px 50px;\r\n\r\n  @media (width > $bp-sm) {\r\n    padding: 66px 0 72px;\r\n  }\r\n}\r\n\r\n.forecast-card,\r\n.daily-detail-card {\r\n  background-color: var(--c-accent-dark);\r\n}\r\n\r\n.forecast-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 18px 20px;\r\n\r\n  p {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  img {\r\n    width: 65%;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  &__info {\r\n    display: flex;\r\n    align-self: stretch;\r\n    justify-content: space-between;\r\n    margin-top: auto;\r\n    span:last-of-type {\r\n      color: var(--c-muted);\r\n    }\r\n  }\r\n}\r\n\r\n.daily-detail {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 32px;\r\n\r\n  @media (width > $bp-md) {\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 48px;\r\n  }\r\n}\r\n\r\n.daily-detail-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 22px 22px 38px;\r\n\r\n  &__info {\r\n    font-size: 2.25rem;\r\n\r\n    span {\r\n      font-size: 4rem;\r\n      font-weight: 700;\r\n    }\r\n  }\r\n}\r\n\r\n.atribution {\r\n  text-align: center;\r\n  font-size: 14px;\r\n  color: var(--c-muted);\r\n  margin-top: 96px;\r\n  position: relative;\r\n  bottom: 0;\r\n\r\n  a {\r\n    color: inherit;\r\n    font-weight: 700;\r\n  }\r\n\r\n  @media (width > $bp-md) {\r\n    margin-top: auto;\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");



const App = () => {
  console.log('App');
  const state = {
    loading: null,
    error: null,
    data: null,
  };

  const $currTemp = document.querySelector('#currTemp');
  const $currStatus = document.querySelector('#currStatus');
  const $currLocation = document.querySelector('#currLocation');
  const $currDate = document.querySelector('#currDate');
  const $currImg = document.querySelector('#currImg');

  const $sidebar = document.querySelector('.sidebar');
  const $error = document.querySelector('.sidebar__error');
  const $openSidebarBtn = document.querySelector('#openSidebarBtn');
  const $closeSidebarBtn = document.querySelector('#closeSidebarBtn');
  const $searchForm = document.querySelector('#searchForm');
  const $searchInput = $searchForm.querySelector('input');

  const $forecast = document.querySelector('#forecast');

  const createForecastCard = (item) => {
    const { code, text, icon } = item.day.condition;
    console.log('========');
    console.log(text, code, icon);
    const img = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.imageByCode)(code);
    console.log(img);
    const src = `${img ? `./assets/${img}.png` : icon}`;
    const card = document.createElement('div');
    card.className = 'forecast-card';
    card.innerHTML = `
              <p>${item.date}</p>
              <img src="${src}" alt="${text}" />
              <div>${item.day.condition.text}</div>
              <div class="forecast-card__info">
                <span>${item.day.maxtemp_c}&deg;C</span>
                <span>${item.day.mintemp_c}&deg;C</span>
              </div>
    `;
    return card;
  };

  const renderForecast = (forecast) => {
    const itemsToShow = forecast.slice(1);
    $forecast.innerHTML = '';
    $forecast.append(...itemsToShow.map(createForecastCard));
  };

  const updateView = () => {
    if (!state.data) return;
    const { current, location, forecast } = state.data;
    const { text, code } = current.condition;
    $currImg.src = `./assets/${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.imageByCode)(code)}.png`;
    $currTemp.textContent = Math.round(current.temp_c);
    $currStatus.textContent = text;
    $currLocation.textContent = `${location.name}, ${location.country}`;
    renderForecast(forecast.forecastday);
  };

  const toggleSidebar = (open) => {
    $sidebar.classList.toggle('active', open);
    if (open) {
      $searchInput.focus();
    }
  };

  const setLoadingBtn = (loading) => {
    const $searchBtn = $searchForm.querySelector('button');
    const $span = $searchBtn.querySelector('span');
    const $spinner = $searchBtn.querySelector('i');
    $searchBtn.disabled = loading;
    $spinner.classList.toggle('hidden', !loading);
    $span.classList.toggle('hidden', loading);
  };

  const getData = async (query) => {
    state.loading = true;
    setLoadingBtn(true);
    $error.textContent = '';
    console.log('loading', state);

    try {
      const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
      console.log(data);
      state.data = data;
      updateView();
      toggleSidebar(false);
    } catch (err) {
      state.error = true;
      console.log('error', state);
      $error.textContent = err;
    } finally {
      state.loading = false;
      setLoadingBtn(false);
      console.log('finally', state);
    }
  };

  getData('tokyo');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = $searchInput;
    if (value.trim() === '') return;
    getData(value);
    $searchInput.value = '';
  };

  $openSidebarBtn.addEventListener('click', () => toggleSidebar(true));
  $closeSidebarBtn.addEventListener('click', () => toggleSidebar(false));
  $searchForm.addEventListener('submit', handleSubmit);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const URL = 'http://api.weatherapi.com/v1/forecast.json';
const KEY = '3babf595b26c4b1482c111127231004';

const searchQuery = async (query) => {
  try {
    const res = await fetch(
      `${URL}?key=${KEY}&q=${query}&days=4&aqi=no&alerts=no`,
      { mode: 'cors' }
    );
    console.log(res);
    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      throw Error(data.error.message);
    }

    return data;
  } catch (err) {
    console.log(err);
    throw err.message;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchQuery);


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageByCode": () => (/* binding */ imageByCode)
/* harmony export */ });
const imageByCode = (code) => {
  switch (code) {
    case 1000:
      return 'Clear';
    case 1003:
    case 1006:
    case 1030:
      return 'LightCloud';

    case 1009:
      return 'HeavyCloud';
    case 1150:
    case 1153:
    case 1183:
      return 'LightRain';
    case 1189:
    case 1192:
    case 1195:
      return 'HeavyRain';
    case 1063:
    case 1180:
    case 1186:
    case 1240:
    case 1243:
    case 1246:
      return 'Shower';
    case 1069:
    case 1168:
    case 1198:
    case 1201:
    case 1204:
    case 1207:
    case 1249:
    case 1252:
      return 'Sleet';
    case 1114:
    case 1117:
    case 1210:
    case 1213:
    case 1216:
    case 1255:
      return 'Snow';
    case 1219:
    case 1225:
    case 1237:
    case 1258:
    case 1261:
    case 1264:
      return 'Hail';
    case 1087:
    case 1273:
    case 1276:
    case 1279:
    case 1282:
      return 'Thunderstorm';

    default:
      return false;
  }
};




/***/ }),

/***/ "./src/assets/Cloud-background.png":
/*!*****************************************!*\
  !*** ./src/assets/Cloud-background.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f88244c26c2492e3c5f1.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");



// Init App
(0,_App__WEBPACK_IMPORTED_MODULE_1__["default"])();

window.onload = () => document.body.classList.remove('preload');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksS0FBSyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSx3REFBd0QsNkJBQTZCLEtBQUssT0FBTyxnQkFBZ0IsS0FBSyxtQkFBbUIsbUJBQW1CLEtBQUssVUFBVSx1QkFBdUIsMENBQTBDLEtBQUssa0RB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0R2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDRTtBQUN4QjtBQUNBO0FBQ0EsZ0RBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9DbG91ZC1iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi8qIDwtLSByZXNldCAqL1xcbjpyb290IHtcXG4gIC0tZmYtYm9keTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1jLWxpZ2h0OiAjZTdlN2ViO1xcbiAgLS1jLWRhcms6ICMxMDBlMWQ7XFxuICAtLWMtbXV0ZWQ6ICNhMDlmYjE7XFxuICAtLWMtYWNjZW50LWRhcms6ICMxZTIxM2E7XFxuICAtLXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIC0tdy1zaWRlYmFyOiA0NjBweDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWRhcmspO1xcbiAgY29sb3I6IHZhcigtLWMtbGlnaHQpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWJvZHkpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE3O1xcbn1cXG5cXG4ucHJlbG9hZCAqIHtcXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzQ3ZTk7XFxuICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jLWFjY2VudC1kYXJrKTtcXG4gIHBhZGRpbmc6IDE4cHggMTJweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uc2lkZWJhci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG4uc2lkZWJhciAuY2xvc2Uge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlYmFyX19zZWFyY2hiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTJweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5zaWRlYmFyX19pbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAxO1xcbn1cXG4uc2lkZWJhcl9faW5wdXQgaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgY29sb3I6ICM2MTY0NzU7XFxufVxcbi5zaWRlYmFyX19pbnB1dCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgNDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWMtbGlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XFxufVxcbi5zaWRlYmFyX19pbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM2MTY0NzU7XFxufVxcbi5zaWRlYmFyX19lcnJvciB7XFxuICBtYXJnaW46IDEuNXJlbSAwO1xcbn1cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgbWluLXdpZHRoOiA4MHB4O1xcbn1cXG4uc2lkZWJhciBidXR0b246ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMzNhNTtcXG59XFxuQG1lZGlhICh3aWR0aCA+IDQ4ZW0pIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IHZhcigtLXctc2lkZWJhcik7XFxuICAgIHBhZGRpbmc6IDIwcHggNDZweDtcXG4gIH1cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNDhlbSkge1xcbiAgLndyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAxZnI7XFxuICB9XFxufVxcbkBtZWRpYSAod2lkdGggPiA4NS4zNzVlbSkge1xcbiAgLndyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXctc2lkZWJhcikgMWZyO1xcbiAgfVxcbn1cXG5cXG4vKiBXZWF0aGVyIEN1cnJlbnQgKi9cXG4ud2VhdGhlci1jdXJyZW50IHtcXG4gIHBhZGRpbmc6IDE4cHggMTJweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDMwLCAzMywgNTgsIDAuOTUpIDEwMCUsIHJnYmEoMzAsIDMzLCA1OCwgMC45NSkgMTAwJSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTUwJTtcXG59XFxuLndlYXRoZXItY3VycmVudF9fc2VhcmNoYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiA3NnB4O1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19zZWFyY2hiYXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEycHggMThweDtcXG4gIGJhY2tncm91bmQ6ICM2ZTcwN2E7XFxuICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jLW11dGVkKTtcXG59XFxuLndlYXRoZXItY3VycmVudF9faW1nIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi53ZWF0aGVyLWN1cnJlbnRfX3RlbXAge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLndlYXRoZXItY3VycmVudF9fdGVtcCBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXG59XFxuLndlYXRoZXItY3VycmVudF9fc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19kYXRlLCAud2VhdGhlci1jdXJyZW50X19sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19kYXRlIHtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcbi53ZWF0aGVyLWN1cnJlbnRfX2xvY2F0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNDhlbSkge1xcbiAgLndlYXRoZXItY3VycmVudCB7XFxuICAgIHBhZGRpbmc6IDQycHggNDZweDtcXG4gIH1cXG4gIC53ZWF0aGVyLWN1cnJlbnRfX3NlYXJjaGJhciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcbiAgLndlYXRoZXItY3VycmVudF9faW1nLCAud2VhdGhlci1jdXJyZW50X190ZW1wLCAud2VhdGhlci1jdXJyZW50X19zdGF0dXMge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4NnB4O1xcbiAgfVxcbiAgLndlYXRoZXItY3VycmVudF9fbG9jYXRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5cXG4vKiBXZWF0aGVyIEluZm8gKi9cXG4ud2VhdGhlci1pbmZvIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNzUwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMjBweCwgMWZyKSk7XFxuICBnYXA6IDMycHggMjZweDtcXG4gIHBhZGRpbmc6IDMwcHggMzBweCA1MHB4O1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNDhlbSkge1xcbiAgLmZvcmVjYXN0IHtcXG4gICAgcGFkZGluZzogNjZweCAwIDcycHg7XFxuICB9XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkLFxcbi5kYWlseS1kZXRhaWwtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWFjY2VudC1kYXJrKTtcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMThweCAyMHB4O1xcbn1cXG4uZm9yZWNhc3QtY2FyZCBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5mb3JlY2FzdC1jYXJkIGltZyB7XFxuICB3aWR0aDogNjUlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmZvcmVjYXN0LWNhcmRfX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4uZm9yZWNhc3QtY2FyZF9faW5mbyBzcGFuOmxhc3Qtb2YtdHlwZSB7XFxuICBjb2xvcjogdmFyKC0tYy1tdXRlZCk7XFxufVxcblxcbi5kYWlseS1kZXRhaWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ2FwOiAzMnB4O1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNjRlbSkge1xcbiAgLmRhaWx5LWRldGFpbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiA0OHB4O1xcbiAgfVxcbn1cXG5cXG4uZGFpbHktZGV0YWlsLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMjJweCAyMnB4IDM4cHg7XFxufVxcbi5kYWlseS1kZXRhaWwtY2FyZF9faW5mbyB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcbi5kYWlseS1kZXRhaWwtY2FyZF9faW5mbyBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5hdHJpYnV0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS1jLW11dGVkKTtcXG4gIG1hcmdpbi10b3A6IDk2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxufVxcbi5hdHJpYnV0aW9uIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNjRlbSkge1xcbiAgLmF0cmlidXRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsU0FBQTtBQUVGOztBQUFBOztFQUVFLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsbUNBQUE7QUFJRjs7QUFGQTs7Ozs7RUFLRSxjQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhBOzs7O0VBSUUsYUFBQTtBQU1GOztBQUpBOzs7Ozs7O0VBT0UseUJBQUE7QUFPRjs7QUFKQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBSkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQU9GOztBQUpBLGNBQUE7QUFFQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FBTUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUlBO0VBQ0UsMkJBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSx3QkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0FBSko7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFKTjtBQU9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFMTjtBQU9NO0VBQ0UsY0FBQTtBQUxSO0FBVUU7RUFDRSxnQkFBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0FBVEo7QUFVSTtFQUNFLHlCQUFBO0FBUk47QUFZRTtFQWhFRjtJQWlFSSx1QkFBQTtJQUNBLGtCQUFBO0VBVEY7QUFDRjs7QUFZQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBVEY7QUFXRTtFQVBGO0lBUUksOEJBQUE7RUFSRjtBQUNGO0FBVUU7RUFYRjtJQVlJLDJDQUFBO0VBUEY7QUFDRjs7QUFVQSxvQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSw4SEFBQTtFQUtBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQVhGO0FBYUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVhKO0FBYUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQVhOO0FBZUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFiSjtBQWdCRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQWRKO0FBaUJFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBZko7QUFpQkk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFmTjtBQW1CRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWpCSjtBQW9CRTtFQUVFLG1CQUFBO0FBbkJKO0FBc0JFO0VBQ0UsbUJBQUE7QUFwQko7QUF1QkU7RUFDRSxvQkFBQTtBQXJCSjtBQXdCRTtFQWxFRjtJQW1FSSxrQkFBQTtFQXJCRjtFQXVCRTtJQUNFLG9CQUFBO0VBckJKO0VBd0JFO0lBR0UsbUJBQUE7RUF4Qko7RUEyQkU7SUFDRSxnQkFBQTtFQXpCSjtBQUNGOztBQTZCQSxpQkFBQTtBQUNBO0VBQ0UsYUFBQTtBQTFCRjs7QUE2QkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBMUJGOztBQTZCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBMUJGOztBQTZCQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQTFCRjtBQTRCRTtFQU5GO0lBT0ksb0JBQUE7RUF6QkY7QUFDRjs7QUE0QkE7O0VBRUUsc0NBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXpCRjtBQTJCRTtFQUNFLG1CQUFBO0FBekJKO0FBNEJFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBMUJKO0FBNkJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQTNCSjtBQTRCSTtFQUNFLHFCQUFBO0FBMUJOOztBQStCQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7QUE1QkY7QUE4QkU7RUFMRjtJQU1JLDhCQUFBO0lBQ0EsU0FBQTtFQTNCRjtBQUNGOztBQThCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBM0JGO0FBNkJFO0VBQ0Usa0JBQUE7QUEzQko7QUE2Qkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUEzQk47O0FBZ0NBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQTdCRjtBQStCRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQTdCSjtBQWdDRTtFQWJGO0lBY0ksZ0JBQUE7RUE3QkY7QUFDRjs7QUFnQ0E7RUFDRSxhQUFBO0FBN0JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG59XFxyXFxuaW1nLFxcclxcbnBpY3R1cmUsXFxyXFxudmlkZW8sXFxyXFxuY2FudmFzLFxcclxcbnN2ZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhLFxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5wLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIDwtLSByZXNldCAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZmYtYm9keTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1jLWxpZ2h0OiAjZTdlN2ViO1xcclxcbiAgLS1jLWRhcms6ICMxMDBlMWQ7XFxyXFxuICAtLWMtbXV0ZWQ6ICNhMDlmYjE7XFxyXFxuICAtLWMtYWNjZW50LWRhcms6ICMxZTIxM2E7XFxyXFxuICAtLXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIC0tdy1zaWRlYmFyOiA0NjBweDtcXHJcXG59XFxyXFxuXFxyXFxuJGJwLXNtOiA0OGVtOyAvLyA3NjhweFxcclxcbiRicC1tZDogNjRlbTsgLy8gMTAyNHB4XFxyXFxuJGJwLWxnOiA4NS4zNzVlbTsgLy8gMTM2NnB4XFxyXFxuJGJwLXhsOiAxMjBlbTsgLy8gMTkyMHB4XFxyXFxuJGJwLXh4bDogMTYwZW07IC8vIDI1NjBweFxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1kYXJrKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ib2R5KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xNztcXHJcXG59XFxyXFxuXFxyXFxuLy8gUmVtb3ZlIHRyYW5zaXRpb25zIG9uIHBhZ2UgbG9hZFxcclxcbi5wcmVsb2FkICoge1xcclxcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNDdlOTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXHJcXG4gIHBhZGRpbmc6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWMtYWNjZW50LWRhcmspO1xcclxcbiAgcGFkZGluZzogMThweCAxMnB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxuICAmLmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZSB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3NlYXJjaGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2lucHV0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcblxcclxcbiAgICBpIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgICBjb2xvcjogIzYxNjQ3NTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dCB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHBhZGRpbmc6IDAgNDZweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jLWxpZ2h0KTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xcclxcblxcclxcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjNjE2NDc1O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZXJyb3Ige1xcclxcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcclxcbiAgICAmOmRpc2FibGVkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzM2E1O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKHdpZHRoID4gJGJwLXNtKSB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS13LXNpZGViYXIpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDQ2cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIEBtZWRpYSAod2lkdGggPiAkYnAtc20pIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhICh3aWR0aCA+ICRicC1sZykge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXctc2lkZWJhcikgMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBXZWF0aGVyIEN1cnJlbnQgKi9cXHJcXG4ud2VhdGhlci1jdXJyZW50IHtcXHJcXG4gIHBhZGRpbmc6IDE4cHggMTJweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICByZ2JhKDMwLCAzMywgNTgsIDAuOTUpIDEwMCUsXFxyXFxuICAgICAgcmdiYSgzMCwgMzMsIDU4LCAwLjk1KSAxMDAlXFxyXFxuICAgICksXFxyXFxuICAgIHVybCgnYXNzZXRzL0Nsb3VkLWJhY2tncm91bmQucG5nJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTUwJTtcXHJcXG5cXHJcXG4gICZfX3NlYXJjaGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNzZweDtcXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzZlNzA3YTtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxyXFxuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWMtbXV0ZWQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1nIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdGVtcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG5cXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgZm9udC1zaXplOiA5cmVtO1xcclxcbiAgICAgIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc3RhdHVzIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGF0ZSxcXHJcXG4gICZfX2xvY2F0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2RhdGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbG9jYXRpb24ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAod2lkdGggPiAkYnAtc20pIHtcXHJcXG4gICAgcGFkZGluZzogNDJweCA0NnB4O1xcclxcblxcclxcbiAgICAmX19zZWFyY2hiYXIge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ltZyxcXHJcXG4gICAgJl9fdGVtcCxcXHJcXG4gICAgJl9fc3RhdHVzIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4NnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xvY2F0aW9uIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFdlYXRoZXIgSW5mbyAqL1xcclxcbi53ZWF0aGVyLWluZm8ge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcXHJcXG4gIGdhcDogMzJweCAyNnB4O1xcclxcbiAgcGFkZGluZzogMzBweCAzMHB4IDUwcHg7XFxyXFxuXFxyXFxuICBAbWVkaWEgKHdpZHRoID4gJGJwLXNtKSB7XFxyXFxuICAgIHBhZGRpbmc6IDY2cHggMCA3MnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtY2FyZCxcXHJcXG4uZGFpbHktZGV0YWlsLWNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1hY2NlbnQtZGFyayk7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDE4cHggMjBweDtcXHJcXG5cXHJcXG4gIHAge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2luZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgIHNwYW46bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tYy1tdXRlZCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWRldGFpbCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxuXFxyXFxuICBAbWVkaWEgKHdpZHRoID4gJGJwLW1kKSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiA0OHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZGV0YWlsLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMjJweCAyMnB4IDM4cHg7XFxyXFxuXFxyXFxuICAmX19pbmZvIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcblxcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYXRyaWJ1dGlvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tYy1tdXRlZCk7XFxyXFxuICBtYXJnaW4tdG9wOiA5NnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcblxcclxcbiAgYSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhICh3aWR0aCA+ICRicC1tZCkge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzZWFyY2hRdWVyeSBmcm9tICcuL2FwaSc7XHJcbmltcG9ydCB7IGltYWdlQnlDb2RlIH0gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnQXBwJyk7XHJcbiAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiBudWxsLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBkYXRhOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0ICRjdXJyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyVGVtcCcpO1xyXG4gIGNvbnN0ICRjdXJyU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJTdGF0dXMnKTtcclxuICBjb25zdCAkY3VyckxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJMb2NhdGlvbicpO1xyXG4gIGNvbnN0ICRjdXJyRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyRGF0ZScpO1xyXG4gIGNvbnN0ICRjdXJySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJJbWcnKTtcclxuXHJcbiAgY29uc3QgJHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gIGNvbnN0ICRlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19lcnJvcicpO1xyXG4gIGNvbnN0ICRvcGVuU2lkZWJhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuU2lkZWJhckJ0bicpO1xyXG4gIGNvbnN0ICRjbG9zZVNpZGViYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VTaWRlYmFyQnRuJyk7XHJcbiAgY29uc3QgJHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoRm9ybScpO1xyXG4gIGNvbnN0ICRzZWFyY2hJbnB1dCA9ICRzZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcblxyXG4gIGNvbnN0ICRmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JlY2FzdCcpO1xyXG5cclxuICBjb25zdCBjcmVhdGVGb3JlY2FzdENhcmQgPSAoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb2RlLCB0ZXh0LCBpY29uIH0gPSBpdGVtLmRheS5jb25kaXRpb247XHJcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT0nKTtcclxuICAgIGNvbnNvbGUubG9nKHRleHQsIGNvZGUsIGljb24pO1xyXG4gICAgY29uc3QgaW1nID0gaW1hZ2VCeUNvZGUoY29kZSk7XHJcbiAgICBjb25zb2xlLmxvZyhpbWcpO1xyXG4gICAgY29uc3Qgc3JjID0gYCR7aW1nID8gYC4vYXNzZXRzLyR7aW1nfS5wbmdgIDogaWNvbn1gO1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSAnZm9yZWNhc3QtY2FyZCc7XHJcbiAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICA8cD4ke2l0ZW0uZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3NyY31cIiBhbHQ9XCIke3RleHR9XCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2PiR7aXRlbS5kYXkuY29uZGl0aW9uLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcmVjYXN0LWNhcmRfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiR7aXRlbS5kYXkubWF4dGVtcF9jfSZkZWc7Qzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiR7aXRlbS5kYXkubWludGVtcF9jfSZkZWc7Qzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGb3JlY2FzdCA9IChmb3JlY2FzdCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXNUb1Nob3cgPSBmb3JlY2FzdC5zbGljZSgxKTtcclxuICAgICRmb3JlY2FzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICRmb3JlY2FzdC5hcHBlbmQoLi4uaXRlbXNUb1Nob3cubWFwKGNyZWF0ZUZvcmVjYXN0Q2FyZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVZpZXcgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlLmRhdGEpIHJldHVybjtcclxuICAgIGNvbnN0IHsgY3VycmVudCwgbG9jYXRpb24sIGZvcmVjYXN0IH0gPSBzdGF0ZS5kYXRhO1xyXG4gICAgY29uc3QgeyB0ZXh0LCBjb2RlIH0gPSBjdXJyZW50LmNvbmRpdGlvbjtcclxuICAgICRjdXJySW1nLnNyYyA9IGAuL2Fzc2V0cy8ke2ltYWdlQnlDb2RlKGNvZGUpfS5wbmdgO1xyXG4gICAgJGN1cnJUZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChjdXJyZW50LnRlbXBfYyk7XHJcbiAgICAkY3VyclN0YXR1cy50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAkY3VyckxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24ubmFtZX0sICR7bG9jYXRpb24uY291bnRyeX1gO1xyXG4gICAgcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QuZm9yZWNhc3RkYXkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAob3BlbikgPT4ge1xyXG4gICAgJHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgb3Blbik7XHJcbiAgICBpZiAob3Blbikge1xyXG4gICAgICAkc2VhcmNoSW5wdXQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRMb2FkaW5nQnRuID0gKGxvYWRpbmcpID0+IHtcclxuICAgIGNvbnN0ICRzZWFyY2hCdG4gPSAkc2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuICAgIGNvbnN0ICRzcGFuID0gJHNlYXJjaEJ0bi5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICBjb25zdCAkc3Bpbm5lciA9ICRzZWFyY2hCdG4ucXVlcnlTZWxlY3RvcignaScpO1xyXG4gICAgJHNlYXJjaEJ0bi5kaXNhYmxlZCA9IGxvYWRpbmc7XHJcbiAgICAkc3Bpbm5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCAhbG9hZGluZyk7XHJcbiAgICAkc3Bhbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBsb2FkaW5nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHNldExvYWRpbmdCdG4odHJ1ZSk7XHJcbiAgICAkZXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nJywgc3RhdGUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZWFyY2hRdWVyeShxdWVyeSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBzdGF0ZS5kYXRhID0gZGF0YTtcclxuICAgICAgdXBkYXRlVmlldygpO1xyXG4gICAgICB0b2dnbGVTaWRlYmFyKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIHN0YXRlKTtcclxuICAgICAgJGVycm9yLnRleHRDb250ZW50ID0gZXJyO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBzZXRMb2FkaW5nQnRuKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coJ2ZpbmFsbHknLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2V0RGF0YSgndG9reW8nKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9ICRzZWFyY2hJbnB1dDtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSByZXR1cm47XHJcbiAgICBnZXREYXRhKHZhbHVlKTtcclxuICAgICRzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRvcGVuU2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVNpZGViYXIodHJ1ZSkpO1xyXG4gICRjbG9zZVNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVTaWRlYmFyKGZhbHNlKSk7XHJcbiAgJHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiY29uc3QgVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbic7XHJcbmNvbnN0IEtFWSA9ICczYmFiZjU5NWIyNmM0YjE0ODJjMTExMTI3MjMxMDA0JztcclxuXHJcbmNvbnN0IHNlYXJjaFF1ZXJ5ID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtVUkx9P2tleT0ke0tFWX0mcT0ke3F1ZXJ5fSZkYXlzPTQmYXFpPW5vJmFsZXJ0cz1ub2AsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICB0aHJvdyBFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHRocm93IGVyci5tZXNzYWdlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFF1ZXJ5O1xyXG4iLCJjb25zdCBpbWFnZUJ5Q29kZSA9IChjb2RlKSA9PiB7XHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlIDEwMDA6XHJcbiAgICAgIHJldHVybiAnQ2xlYXInO1xyXG4gICAgY2FzZSAxMDAzOlxyXG4gICAgY2FzZSAxMDA2OlxyXG4gICAgY2FzZSAxMDMwOlxyXG4gICAgICByZXR1cm4gJ0xpZ2h0Q2xvdWQnO1xyXG5cclxuICAgIGNhc2UgMTAwOTpcclxuICAgICAgcmV0dXJuICdIZWF2eUNsb3VkJztcclxuICAgIGNhc2UgMTE1MDpcclxuICAgIGNhc2UgMTE1MzpcclxuICAgIGNhc2UgMTE4MzpcclxuICAgICAgcmV0dXJuICdMaWdodFJhaW4nO1xyXG4gICAgY2FzZSAxMTg5OlxyXG4gICAgY2FzZSAxMTkyOlxyXG4gICAgY2FzZSAxMTk1OlxyXG4gICAgICByZXR1cm4gJ0hlYXZ5UmFpbic7XHJcbiAgICBjYXNlIDEwNjM6XHJcbiAgICBjYXNlIDExODA6XHJcbiAgICBjYXNlIDExODY6XHJcbiAgICBjYXNlIDEyNDA6XHJcbiAgICBjYXNlIDEyNDM6XHJcbiAgICBjYXNlIDEyNDY6XHJcbiAgICAgIHJldHVybiAnU2hvd2VyJztcclxuICAgIGNhc2UgMTA2OTpcclxuICAgIGNhc2UgMTE2ODpcclxuICAgIGNhc2UgMTE5ODpcclxuICAgIGNhc2UgMTIwMTpcclxuICAgIGNhc2UgMTIwNDpcclxuICAgIGNhc2UgMTIwNzpcclxuICAgIGNhc2UgMTI0OTpcclxuICAgIGNhc2UgMTI1MjpcclxuICAgICAgcmV0dXJuICdTbGVldCc7XHJcbiAgICBjYXNlIDExMTQ6XHJcbiAgICBjYXNlIDExMTc6XHJcbiAgICBjYXNlIDEyMTA6XHJcbiAgICBjYXNlIDEyMTM6XHJcbiAgICBjYXNlIDEyMTY6XHJcbiAgICBjYXNlIDEyNTU6XHJcbiAgICAgIHJldHVybiAnU25vdyc7XHJcbiAgICBjYXNlIDEyMTk6XHJcbiAgICBjYXNlIDEyMjU6XHJcbiAgICBjYXNlIDEyMzc6XHJcbiAgICBjYXNlIDEyNTg6XHJcbiAgICBjYXNlIDEyNjE6XHJcbiAgICBjYXNlIDEyNjQ6XHJcbiAgICAgIHJldHVybiAnSGFpbCc7XHJcbiAgICBjYXNlIDEwODc6XHJcbiAgICBjYXNlIDEyNzM6XHJcbiAgICBjYXNlIDEyNzY6XHJcbiAgICBjYXNlIDEyNzk6XHJcbiAgICBjYXNlIDEyODI6XHJcbiAgICAgIHJldHVybiAnVGh1bmRlcnN0b3JtJztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgaW1hZ2VCeUNvZGUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxuLy8gSW5pdCBBcHBcclxuQXBwKCk7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
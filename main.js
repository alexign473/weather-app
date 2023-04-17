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
  const $wind = document.querySelector('#wind');
  const $humidity = document.querySelector('#humidity');
  const $visibility = document.querySelector('#visibility');
  const $airp = document.querySelector('#airp');

  const createForecastCard = (item) => {
    const { code, text, icon } = item.day.condition;
    const img = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.imageByCode)(code);
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

  const updateView = (data) => {
    if (!data) return;
    const { current, location, forecast } = data;
    const { text, code } = current.condition;
    renderForecast(forecast.forecastday);
    $currImg.src = `./assets/${(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.imageByCode)(code)}.png`;
    $currTemp.textContent = Math.round(current.temp_c);
    $currStatus.textContent = text;
    $currLocation.textContent = `${location.name}, ${location.country}`;
    $wind.textContent = current.wind_mph;
    $humidity.textContent = current.humidity;
    $visibility.textContent = current.vis_miles;
    $airp.textContent = current.pressure_mb;
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
    setLoadingBtn(true);
    $error.textContent = '';

    try {
      const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
      console.log(data);
      updateView(data);
      toggleSidebar(false);
    } catch (err) {
      $error.textContent = err;
    } finally {
      setLoadingBtn(false);
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
const URL = 'https://api.weatherapi.com/v1/forecast.json';
const KEY = '3babf595b26c4b1482c111127231004';

const searchQuery = async (query) => {
  try {
    const res = await fetch(
      `${URL}?key=${KEY}&q=${query}&days=4&aqi=no&alerts=no`,
      { mode: 'cors' }
    );
    const data = await res.json();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksS0FBSyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSx3REFBd0QsNkJBQTZCLEtBQUssT0FBTyxnQkFBZ0IsS0FBSyxtQkFBbUIsbUJBQW1CLEtBQUssVUFBVSx1QkFBdUIsMENBQTBDLEtBQUssa0RB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3RHZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNFO0FBQ3hCO0FBQ0E7QUFDQSxnREFBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL0Nsb3VkLWJhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogPC0tIHJlc2V0ICovXFxuOnJvb3Qge1xcbiAgLS1mZi1ib2R5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWMtbGlnaHQ6ICNlN2U3ZWI7XFxuICAtLWMtZGFyazogIzEwMGUxZDtcXG4gIC0tYy1tdXRlZDogI2EwOWZiMTtcXG4gIC0tYy1hY2NlbnQtZGFyazogIzFlMjEzYTtcXG4gIC0tc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgLS13LXNpZGViYXI6IDQ2MHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtZGFyayk7XFxuICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtYm9keSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTc7XFxufVxcblxcbi5wcmVsb2FkICoge1xcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNDdlOTtcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWMtYWNjZW50LWRhcmspO1xcbiAgcGFkZGluZzogMThweCAxMnB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5zaWRlYmFyLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcbi5zaWRlYmFyIC5jbG9zZSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNpZGViYXJfX3NlYXJjaGJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuLnNpZGViYXJfX2lucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDE7XFxufVxcbi5zaWRlYmFyX19pbnB1dCBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBjb2xvcjogIzYxNjQ3NTtcXG59XFxuLnNpZGViYXJfX2lucHV0IGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCA0NnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYy1saWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcXG59XFxuLnNpZGViYXJfX2lucHV0IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzYxNjQ3NTtcXG59XFxuLnNpZGViYXJfX2Vycm9yIHtcXG4gIG1hcmdpbjogMS41cmVtIDA7XFxufVxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxufVxcbi5zaWRlYmFyIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzM2E1O1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNDhlbSkge1xcbiAgLnNpZGViYXIge1xcbiAgICB3aWR0aDogdmFyKC0tdy1zaWRlYmFyKTtcXG4gICAgcGFkZGluZzogMjBweCA0NnB4O1xcbiAgfVxcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAod2lkdGggPiA0OGVtKSB7XFxuICAud3JhcHBlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDFmcjtcXG4gIH1cXG59XFxuQG1lZGlhICh3aWR0aCA+IDg1LjM3NWVtKSB7XFxuICAud3JhcHBlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tdy1zaWRlYmFyKSAxZnI7XFxuICB9XFxufVxcblxcbi8qIFdlYXRoZXIgQ3VycmVudCAqL1xcbi53ZWF0aGVyLWN1cnJlbnQge1xcbiAgcGFkZGluZzogMThweCAxMnB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMzAsIDMzLCA1OCwgMC45NSkgMTAwJSwgcmdiYSgzMCwgMzMsIDU4LCAwLjk1KSAxMDAlKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlO1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19zZWFyY2hiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDc2cHg7XFxufVxcbi53ZWF0aGVyLWN1cnJlbnRfX3NlYXJjaGJhciBidXR0b24ge1xcbiAgcGFkZGluZzogMTJweCAxOHB4O1xcbiAgYmFja2dyb3VuZDogIzZlNzA3YTtcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcbi53ZWF0aGVyLWN1cnJlbnRfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWMtbXV0ZWQpO1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19pbWcge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLndlYXRoZXItY3VycmVudF9fdGVtcCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X190ZW1wIHNwYW4ge1xcbiAgZm9udC1zaXplOiA5cmVtO1xcbiAgY29sb3I6IHZhcigtLWMtbGlnaHQpO1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19zdGF0dXMge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcbi53ZWF0aGVyLWN1cnJlbnRfX2RhdGUsIC53ZWF0aGVyLWN1cnJlbnRfX2xvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcbi53ZWF0aGVyLWN1cnJlbnRfX2RhdGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuLndlYXRoZXItY3VycmVudF9fbG9jYXRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxufVxcbkBtZWRpYSAod2lkdGggPiA0OGVtKSB7XFxuICAud2VhdGhlci1jdXJyZW50IHtcXG4gICAgcGFkZGluZzogNDJweCA0NnB4O1xcbiAgfVxcbiAgLndlYXRoZXItY3VycmVudF9fc2VhcmNoYmFyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICB9XFxuICAud2VhdGhlci1jdXJyZW50X19pbWcsIC53ZWF0aGVyLWN1cnJlbnRfX3RlbXAsIC53ZWF0aGVyLWN1cnJlbnRfX3N0YXR1cyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDg2cHg7XFxuICB9XFxuICAud2VhdGhlci1jdXJyZW50X19sb2NhdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxufVxcblxcbi8qIFdlYXRoZXIgSW5mbyAqL1xcbi53ZWF0aGVyLWluZm8ge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA3NTBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcXG4gIGdhcDogMzJweCAyNnB4O1xcbiAgcGFkZGluZzogMzBweCAzMHB4IDUwcHg7XFxufVxcbkBtZWRpYSAod2lkdGggPiA0OGVtKSB7XFxuICAuZm9yZWNhc3Qge1xcbiAgICBwYWRkaW5nOiA2NnB4IDAgNzJweDtcXG4gIH1cXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQsXFxuLmRhaWx5LWRldGFpbC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtYWNjZW50LWRhcmspO1xcbn1cXG5cXG4uZm9yZWNhc3QtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxOHB4IDIwcHg7XFxufVxcbi5mb3JlY2FzdC1jYXJkIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmZvcmVjYXN0LWNhcmQgaW1nIHtcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uZm9yZWNhc3QtY2FyZF9faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5mb3JlY2FzdC1jYXJkX19pbmZvIHNwYW46bGFzdC1vZi10eXBlIHtcXG4gIGNvbG9yOiB2YXIoLS1jLW11dGVkKTtcXG59XFxuXFxuLmRhaWx5LWRldGFpbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBnYXA6IDMycHg7XFxufVxcbkBtZWRpYSAod2lkdGggPiA2NGVtKSB7XFxuICAuZGFpbHktZGV0YWlsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDQ4cHg7XFxuICB9XFxufVxcblxcbi5kYWlseS1kZXRhaWwtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAyMnB4IDIycHggMzhweDtcXG59XFxuLmRhaWx5LWRldGFpbC1jYXJkX19pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuLmRhaWx5LWRldGFpbC1jYXJkX19pbmZvIHNwYW4ge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmF0cmlidXRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHZhcigtLWMtbXV0ZWQpO1xcbiAgbWFyZ2luLXRvcDogOTZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuLmF0cmlidXRpb24gYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBtZWRpYSAod2lkdGggPiA2NGVtKSB7XFxuICAuYXRyaWJ1dGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxTQUFBO0FBRUY7O0FBQUE7O0VBRUUsWUFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxtQ0FBQTtBQUlGOztBQUZBOzs7OztFQUtFLGNBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7Ozs7RUFJRSxhQUFBO0FBTUY7O0FBSkE7Ozs7Ozs7RUFPRSx5QkFBQTtBQU9GOztBQUpBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFKQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBT0Y7O0FBSkEsY0FBQTtBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBSUE7RUFDRSwyQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLHdCQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7QUFKSjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUpOO0FBT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUxOO0FBT007RUFDRSxjQUFBO0FBTFI7QUFVRTtFQUNFLGdCQUFBO0FBUko7QUFXRTtFQUNFLGVBQUE7QUFUSjtBQVVJO0VBQ0UseUJBQUE7QUFSTjtBQVlFO0VBaEVGO0lBaUVJLHVCQUFBO0lBQ0Esa0JBQUE7RUFURjtBQUNGOztBQVlBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFURjtBQVdFO0VBUEY7SUFRSSw4QkFBQTtFQVJGO0FBQ0Y7QUFVRTtFQVhGO0lBWUksMkNBQUE7RUFQRjtBQUNGOztBQVVBLG9CQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLDhIQUFBO0VBS0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBWEY7QUFhRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFhSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBWE47QUFlRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBZEo7QUFpQkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFmSjtBQWlCSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQWZOO0FBbUJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakJKO0FBb0JFO0VBRUUsbUJBQUE7QUFuQko7QUFzQkU7RUFDRSxtQkFBQTtBQXBCSjtBQXVCRTtFQUNFLG9CQUFBO0FBckJKO0FBd0JFO0VBbEVGO0lBbUVJLGtCQUFBO0VBckJGO0VBdUJFO0lBQ0Usb0JBQUE7RUFyQko7RUF3QkU7SUFHRSxtQkFBQTtFQXhCSjtFQTJCRTtJQUNFLGdCQUFBO0VBekJKO0FBQ0Y7O0FBNkJBLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0FBMUJGOztBQTZCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUExQkY7O0FBNkJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUExQkY7O0FBNkJBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBMUJGO0FBNEJFO0VBTkY7SUFPSSxvQkFBQTtFQXpCRjtBQUNGOztBQTRCQTs7RUFFRSxzQ0FBQTtBQXpCRjs7QUE0QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekJGO0FBMkJFO0VBQ0UsbUJBQUE7QUF6Qko7QUE0QkU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBM0JKO0FBNEJJO0VBQ0UscUJBQUE7QUExQk47O0FBK0JBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQTVCRjtBQThCRTtFQUxGO0lBTUksOEJBQUE7SUFDQSxTQUFBO0VBM0JGO0FBQ0Y7O0FBOEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUEzQkY7QUE2QkU7RUFDRSxrQkFBQTtBQTNCSjtBQTZCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQTNCTjs7QUFnQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBN0JGO0FBK0JFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBN0JKO0FBZ0NFO0VBYkY7SUFjSSxnQkFBQTtFQTdCRjtBQUNGOztBQWdDQTtFQUNFLGFBQUE7QUE3QkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbnAsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPC0tIHJlc2V0ICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1mZi1ib2R5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWMtbGlnaHQ6ICNlN2U3ZWI7XFxyXFxuICAtLWMtZGFyazogIzEwMGUxZDtcXHJcXG4gIC0tYy1tdXRlZDogI2EwOWZiMTtcXHJcXG4gIC0tYy1hY2NlbnQtZGFyazogIzFlMjEzYTtcXHJcXG4gIC0tc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgLS13LXNpZGViYXI6IDQ2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4kYnAtc206IDQ4ZW07IC8vIDc2OHB4XFxyXFxuJGJwLW1kOiA2NGVtOyAvLyAxMDI0cHhcXHJcXG4kYnAtbGc6IDg1LjM3NWVtOyAvLyAxMzY2cHhcXHJcXG4kYnAteGw6IDEyMGVtOyAvLyAxOTIwcHhcXHJcXG4kYnAteHhsOiAxNjBlbTsgLy8gMjU2MHB4XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWRhcmspO1xcclxcbiAgY29sb3I6IHZhcigtLWMtbGlnaHQpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWJvZHkpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE3O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBSZW1vdmUgdHJhbnNpdGlvbnMgb24gcGFnZSBsb2FkXFxyXFxuLnByZWxvYWQgKiB7XFxyXFxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0N2U5O1xcclxcbiAgY29sb3I6IHZhcigtLWMtbGlnaHQpO1xcclxcbiAgcGFkZGluZzogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYy1hY2NlbnQtZGFyayk7XFxyXFxuICBwYWRkaW5nOiAxOHB4IDEycHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHJcXG4gICYuYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlIHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc2VhcmNoYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW5wdXQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuXFxyXFxuICAgIGkge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICAgIGNvbG9yOiAjNjE2NDc1O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGlucHV0IHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgcGFkZGluZzogMCA0NnB4O1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWMtbGlnaHQpO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XFxyXFxuXFxyXFxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgY29sb3I6ICM2MTY0NzU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19lcnJvciB7XFxyXFxuICAgIG1hcmdpbjogMS41cmVtIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24ge1xcclxcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxyXFxuICAgICY6ZGlzYWJsZWQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjMzYTU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAod2lkdGggPiAkYnAtc20pIHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXctc2lkZWJhcik7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNDZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgQG1lZGlhICh3aWR0aCA+ICRicC1zbSkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKHdpZHRoID4gJGJwLWxnKSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tdy1zaWRlYmFyKSAxZnI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFdlYXRoZXIgQ3VycmVudCAqL1xcclxcbi53ZWF0aGVyLWN1cnJlbnQge1xcclxcbiAgcGFkZGluZzogMThweCAxMnB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHJnYmEoMzAsIDMzLCA1OCwgMC45NSkgMTAwJSxcXHJcXG4gICAgICByZ2JhKDMwLCAzMywgNTgsIDAuOTUpIDEwMCVcXHJcXG4gICAgKSxcXHJcXG4gICAgdXJsKCdhc3NldHMvQ2xvdWQtYmFja2dyb3VuZC5wbmcnKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlO1xcclxcblxcclxcbiAgJl9fc2VhcmNoYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA3NnB4O1xcclxcblxcclxcbiAgICBidXR0b24ge1xcclxcbiAgICAgIHBhZGRpbmc6IDEycHggMThweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjNmU3MDdhO1xcclxcbiAgICAgIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXHJcXG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYy1tdXRlZCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbWcge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190ZW1wIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcblxcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICBmb250LXNpemU6IDlyZW07XFxyXFxuICAgICAgY29sb3I6IHZhcigtLWMtbGlnaHQpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zdGF0dXMge1xcclxcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19kYXRlLFxcclxcbiAgJl9fbG9jYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGF0ZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19sb2NhdGlvbiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhICh3aWR0aCA+ICRicC1zbSkge1xcclxcbiAgICBwYWRkaW5nOiA0MnB4IDQ2cHg7XFxyXFxuXFxyXFxuICAgICZfX3NlYXJjaGJhciB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW1nLFxcclxcbiAgICAmX190ZW1wLFxcclxcbiAgICAmX19zdGF0dXMge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDg2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbG9jYXRpb24ge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogV2VhdGhlciBJbmZvICovXFxyXFxuLndlYXRoZXItaW5mbyB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3Qge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcclxcbiAgZ2FwOiAzMnB4IDI2cHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDMwcHggNTBweDtcXHJcXG5cXHJcXG4gIEBtZWRpYSAod2lkdGggPiAkYnAtc20pIHtcXHJcXG4gICAgcGFkZGluZzogNjZweCAwIDcycHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1jYXJkLFxcclxcbi5kYWlseS1kZXRhaWwtY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWFjY2VudC1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMThweCAyMHB4O1xcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgc3BhbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICAgIGNvbG9yOiB2YXIoLS1jLW11dGVkKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZGV0YWlsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG5cXHJcXG4gIEBtZWRpYSAod2lkdGggPiAkYnAtbWQpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDQ4cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1kZXRhaWwtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAyMnB4IDIycHggMzhweDtcXHJcXG5cXHJcXG4gICZfX2luZm8ge1xcclxcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hdHJpYnV0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jLW11dGVkKTtcXHJcXG4gIG1hcmdpbi10b3A6IDk2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKHdpZHRoID4gJGJwLW1kKSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHNlYXJjaFF1ZXJ5IGZyb20gJy4vYXBpJztcclxuaW1wb3J0IHsgaW1hZ2VCeUNvZGUgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0ICRjdXJyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyVGVtcCcpO1xyXG4gIGNvbnN0ICRjdXJyU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJTdGF0dXMnKTtcclxuICBjb25zdCAkY3VyckxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJMb2NhdGlvbicpO1xyXG4gIGNvbnN0ICRjdXJyRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyRGF0ZScpO1xyXG4gIGNvbnN0ICRjdXJySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJJbWcnKTtcclxuXHJcbiAgY29uc3QgJHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gIGNvbnN0ICRlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19lcnJvcicpO1xyXG4gIGNvbnN0ICRvcGVuU2lkZWJhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuU2lkZWJhckJ0bicpO1xyXG4gIGNvbnN0ICRjbG9zZVNpZGViYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VTaWRlYmFyQnRuJyk7XHJcbiAgY29uc3QgJHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoRm9ybScpO1xyXG4gIGNvbnN0ICRzZWFyY2hJbnB1dCA9ICRzZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcblxyXG4gIGNvbnN0ICRmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JlY2FzdCcpO1xyXG4gIGNvbnN0ICR3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQnKTtcclxuICBjb25zdCAkaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcclxuICBjb25zdCAkdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXNpYmlsaXR5Jyk7XHJcbiAgY29uc3QgJGFpcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWlycCcpO1xyXG5cclxuICBjb25zdCBjcmVhdGVGb3JlY2FzdENhcmQgPSAoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb2RlLCB0ZXh0LCBpY29uIH0gPSBpdGVtLmRheS5jb25kaXRpb247XHJcbiAgICBjb25zdCBpbWcgPSBpbWFnZUJ5Q29kZShjb2RlKTtcclxuICAgIGNvbnN0IHNyYyA9IGAke2ltZyA/IGAuL2Fzc2V0cy8ke2ltZ30ucG5nYCA6IGljb259YDtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2ZvcmVjYXN0LWNhcmQnO1xyXG4gICAgY2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgPHA+JHtpdGVtLmRhdGV9PC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzcmN9XCIgYWx0PVwiJHt0ZXh0fVwiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdj4ke2l0ZW0uZGF5LmNvbmRpdGlvbi50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdC1jYXJkX19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke2l0ZW0uZGF5Lm1heHRlbXBfY30mZGVnO0M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke2l0ZW0uZGF5Lm1pbnRlbXBfY30mZGVnO0M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRm9yZWNhc3QgPSAoZm9yZWNhc3QpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zVG9TaG93ID0gZm9yZWNhc3Quc2xpY2UoMSk7XHJcbiAgICAkZm9yZWNhc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAkZm9yZWNhc3QuYXBwZW5kKC4uLml0ZW1zVG9TaG93Lm1hcChjcmVhdGVGb3JlY2FzdENhcmQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVWaWV3ID0gKGRhdGEpID0+IHtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG4gICAgY29uc3QgeyBjdXJyZW50LCBsb2NhdGlvbiwgZm9yZWNhc3QgfSA9IGRhdGE7XHJcbiAgICBjb25zdCB7IHRleHQsIGNvZGUgfSA9IGN1cnJlbnQuY29uZGl0aW9uO1xyXG4gICAgcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QuZm9yZWNhc3RkYXkpO1xyXG4gICAgJGN1cnJJbWcuc3JjID0gYC4vYXNzZXRzLyR7aW1hZ2VCeUNvZGUoY29kZSl9LnBuZ2A7XHJcbiAgICAkY3VyclRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGN1cnJlbnQudGVtcF9jKTtcclxuICAgICRjdXJyU3RhdHVzLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICRjdXJyTG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbi5uYW1lfSwgJHtsb2NhdGlvbi5jb3VudHJ5fWA7XHJcbiAgICAkd2luZC50ZXh0Q29udGVudCA9IGN1cnJlbnQud2luZF9tcGg7XHJcbiAgICAkaHVtaWRpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50Lmh1bWlkaXR5O1xyXG4gICAgJHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50LnZpc19taWxlcztcclxuICAgICRhaXJwLnRleHRDb250ZW50ID0gY3VycmVudC5wcmVzc3VyZV9tYjtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKG9wZW4pID0+IHtcclxuICAgICRzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIG9wZW4pO1xyXG4gICAgaWYgKG9wZW4pIHtcclxuICAgICAgJHNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0TG9hZGluZ0J0biA9IChsb2FkaW5nKSA9PiB7XHJcbiAgICBjb25zdCAkc2VhcmNoQnRuID0gJHNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcbiAgICBjb25zdCAkc3BhbiA9ICRzZWFyY2hCdG4ucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgY29uc3QgJHNwaW5uZXIgPSAkc2VhcmNoQnRuLnF1ZXJ5U2VsZWN0b3IoJ2knKTtcclxuICAgICRzZWFyY2hCdG4uZGlzYWJsZWQgPSBsb2FkaW5nO1xyXG4gICAgJHNwaW5uZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgIWxvYWRpbmcpO1xyXG4gICAgJHNwYW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgbG9hZGluZyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChxdWVyeSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ0J0bih0cnVlKTtcclxuICAgICRlcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZWFyY2hRdWVyeShxdWVyeSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB1cGRhdGVWaWV3KGRhdGEpO1xyXG4gICAgICB0b2dnbGVTaWRlYmFyKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAkZXJyb3IudGV4dENvbnRlbnQgPSBlcnI7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nQnRuKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnZXREYXRhKCd0b2t5bycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gJHNlYXJjaElucHV0O1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVybjtcclxuICAgIGdldERhdGEodmFsdWUpO1xyXG4gICAgJHNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJG9wZW5TaWRlYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlU2lkZWJhcih0cnVlKSk7XHJcbiAgJGNsb3NlU2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVNpZGViYXIoZmFsc2UpKTtcclxuICAkc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJjb25zdCBVUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbic7XHJcbmNvbnN0IEtFWSA9ICczYmFiZjU5NWIyNmM0YjE0ODJjMTExMTI3MjMxMDA0JztcclxuXHJcbmNvbnN0IHNlYXJjaFF1ZXJ5ID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtVUkx9P2tleT0ke0tFWX0mcT0ke3F1ZXJ5fSZkYXlzPTQmYXFpPW5vJmFsZXJ0cz1ub2AsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH1cclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICB0aHJvdyBFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHRocm93IGVyci5tZXNzYWdlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFF1ZXJ5O1xyXG4iLCJjb25zdCBpbWFnZUJ5Q29kZSA9IChjb2RlKSA9PiB7XHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlIDEwMDA6XHJcbiAgICAgIHJldHVybiAnQ2xlYXInO1xyXG4gICAgY2FzZSAxMDAzOlxyXG4gICAgY2FzZSAxMDA2OlxyXG4gICAgY2FzZSAxMDMwOlxyXG4gICAgICByZXR1cm4gJ0xpZ2h0Q2xvdWQnO1xyXG5cclxuICAgIGNhc2UgMTAwOTpcclxuICAgICAgcmV0dXJuICdIZWF2eUNsb3VkJztcclxuICAgIGNhc2UgMTE1MDpcclxuICAgIGNhc2UgMTE1MzpcclxuICAgIGNhc2UgMTE4MzpcclxuICAgICAgcmV0dXJuICdMaWdodFJhaW4nO1xyXG4gICAgY2FzZSAxMTg5OlxyXG4gICAgY2FzZSAxMTkyOlxyXG4gICAgY2FzZSAxMTk1OlxyXG4gICAgICByZXR1cm4gJ0hlYXZ5UmFpbic7XHJcbiAgICBjYXNlIDEwNjM6XHJcbiAgICBjYXNlIDExODA6XHJcbiAgICBjYXNlIDExODY6XHJcbiAgICBjYXNlIDEyNDA6XHJcbiAgICBjYXNlIDEyNDM6XHJcbiAgICBjYXNlIDEyNDY6XHJcbiAgICAgIHJldHVybiAnU2hvd2VyJztcclxuICAgIGNhc2UgMTA2OTpcclxuICAgIGNhc2UgMTE2ODpcclxuICAgIGNhc2UgMTE5ODpcclxuICAgIGNhc2UgMTIwMTpcclxuICAgIGNhc2UgMTIwNDpcclxuICAgIGNhc2UgMTIwNzpcclxuICAgIGNhc2UgMTI0OTpcclxuICAgIGNhc2UgMTI1MjpcclxuICAgICAgcmV0dXJuICdTbGVldCc7XHJcbiAgICBjYXNlIDExMTQ6XHJcbiAgICBjYXNlIDExMTc6XHJcbiAgICBjYXNlIDEyMTA6XHJcbiAgICBjYXNlIDEyMTM6XHJcbiAgICBjYXNlIDEyMTY6XHJcbiAgICBjYXNlIDEyNTU6XHJcbiAgICAgIHJldHVybiAnU25vdyc7XHJcbiAgICBjYXNlIDEyMTk6XHJcbiAgICBjYXNlIDEyMjU6XHJcbiAgICBjYXNlIDEyMzc6XHJcbiAgICBjYXNlIDEyNTg6XHJcbiAgICBjYXNlIDEyNjE6XHJcbiAgICBjYXNlIDEyNjQ6XHJcbiAgICAgIHJldHVybiAnSGFpbCc7XHJcbiAgICBjYXNlIDEwODc6XHJcbiAgICBjYXNlIDEyNzM6XHJcbiAgICBjYXNlIDEyNzY6XHJcbiAgICBjYXNlIDEyNzk6XHJcbiAgICBjYXNlIDEyODI6XHJcbiAgICAgIHJldHVybiAnVGh1bmRlcnN0b3JtJztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgaW1hZ2VCeUNvZGUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxuLy8gSW5pdCBBcHBcclxuQXBwKCk7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nbutton {\n  border: 0;\n  cursor: pointer;\n}\n\ninput {\n  border: 0;\n  outline: 0;\n}\n\n/* <-- reset */\n:root {\n  --ff-body: \"Raleway\", sans-serif;\n  --c-light: #e7e7eb;\n  --c-dark: #100e1d;\n  --c-muted: #a09fb1;\n  --c-accent-dark: #1e213a;\n  --shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  --w-sidebar: 460px;\n}\n\nbody {\n  height: 100%;\n  background-color: var(--c-dark);\n  color: var(--c-light);\n  font-family: var(--ff-body);\n  font-weight: 500;\n  line-height: 1.17;\n}\n\n.preload * {\n  transition: none !important;\n}\n\nbutton {\n  background-color: #3c47e9;\n  color: var(--c-light);\n  padding: 14px;\n}\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n  background: var(--c-accent-dark);\n  padding: 18px 12px;\n  transform: translateX(-100%);\n  transition: 0.3s;\n}\n.sidebar.active {\n  transform: translateX(0);\n}\n.sidebar .close {\n  float: right;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.sidebar__searchbar {\n  display: flex;\n  gap: 12px;\n  margin-top: 50px;\n}\n.sidebar__input {\n  position: relative;\n  flex: 1;\n}\n.sidebar__input i {\n  position: absolute;\n  padding: 16px;\n  color: #616475;\n}\n.sidebar__input input {\n  width: 100%;\n  height: 100%;\n  padding: 0 46px;\n  border: 1px solid var(--c-light);\n  background-color: transparent;\n  color: var(--c-light);\n  transition: 0.1s ease;\n}\n.sidebar__input input::placeholder {\n  color: #616475;\n}\n.sidebar__error {\n  margin: 1.5rem 0;\n}\n.sidebar button {\n  min-width: 80px;\n}\n.sidebar button:disabled {\n  background-color: #2b33a5;\n}\n@media (width > 48em) {\n  .sidebar {\n    width: var(--w-sidebar);\n    padding: 20px 46px;\n  }\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  min-height: 100%;\n  width: 100%;\n}\n@media (width > 48em) {\n  .wrapper {\n    grid-template-columns: 33% 1fr;\n  }\n}\n@media (width > 85.375em) {\n  .wrapper {\n    grid-template-columns: var(--w-sidebar) 1fr;\n  }\n}\n\n/* Weather Current */\n.weather-current {\n  padding: 18px 12px;\n  background: linear-gradient(rgba(30, 33, 58, 0.95) 100%, rgba(30, 33, 58, 0.95) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 50% 10%;\n  background-repeat: no-repeat;\n  background-size: 150%;\n}\n.weather-current__searchbar {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 76px;\n}\n.weather-current__searchbar button {\n  padding: 12px 18px;\n  background: #6e707a;\n  color: var(--c-light);\n  box-shadow: var(--shadow);\n}\n.weather-current__content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  color: var(--c-muted);\n}\n.weather-current__img {\n  width: 150px;\n  margin-bottom: 40px;\n}\n.weather-current__img img {\n  width: 100%;\n}\n.weather-current__temp {\n  font-size: 4rem;\n  margin-bottom: 24px;\n}\n.weather-current__temp span {\n  font-size: 9rem;\n  color: var(--c-light);\n}\n.weather-current__status {\n  font-size: 2.25rem;\n  font-weight: 600;\n  margin-bottom: 48px;\n}\n.weather-current__date, .weather-current__location {\n  font-size: 1.125rem;\n}\n.weather-current__date {\n  margin-bottom: 32px;\n}\n.weather-current__location {\n  margin-bottom: 100px;\n}\n@media (width > 48em) {\n  .weather-current {\n    padding: 42px 46px;\n  }\n  .weather-current__searchbar {\n    margin-bottom: 100px;\n  }\n  .weather-current__img, .weather-current__temp, .weather-current__status {\n    margin-bottom: 86px;\n  }\n  .weather-current__location {\n    margin-bottom: 0;\n  }\n}\n\n/* Weather Info */\n.weather-info {\n  padding: 20px;\n}\n\nh2 {\n  font-size: 1.5rem;\n  margin-bottom: 32px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  max-width: 750px;\n  min-height: 100%;\n  margin: 0 auto;\n}\n\n.forecast {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 32px 26px;\n  padding: 30px 30px 50px;\n}\n@media (width > 48em) {\n  .forecast {\n    padding: 66px 0 72px;\n  }\n}\n\n.forecast-card,\n.daily-detail-card {\n  background-color: var(--c-accent-dark);\n}\n\n.forecast-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 20px;\n}\n.forecast-card p {\n  margin-bottom: 10px;\n}\n.forecast-card img {\n  width: 65%;\n  margin-bottom: 30px;\n}\n.forecast-card__info {\n  display: flex;\n  align-self: stretch;\n  justify-content: space-between;\n  margin-top: auto;\n}\n.forecast-card__info span:last-of-type {\n  color: var(--c-muted);\n}\n\n.daily-detail {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 32px;\n}\n@media (width > 64em) {\n  .daily-detail {\n    grid-template-columns: 1fr 1fr;\n    gap: 48px;\n  }\n}\n\n.daily-detail-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 22px 22px 38px;\n}\n.daily-detail-card__info {\n  font-size: 2.25rem;\n}\n.daily-detail-card__info span {\n  font-size: 4rem;\n  font-weight: 700;\n}\n\n.atribution {\n  text-align: center;\n  font-size: 14px;\n  color: var(--c-muted);\n  margin-top: 96px;\n  position: relative;\n  bottom: 0;\n}\n.atribution a {\n  color: inherit;\n  font-weight: 700;\n}\n@media (width > 64em) {\n  .atribution {\n    margin-top: 110px;\n  }\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;AACF;;AACA;EACE,SAAA;AAEF;;AAAA;;EAEE,YAAA;AAGF;;AADA;EACE,gBAAA;EACA,mCAAA;AAIF;;AAFA;;;;;EAKE,cAAA;EACA,eAAA;AAKF;;AAHA;;;;EAIE,aAAA;AAMF;;AAJA;;;;;;;EAOE,yBAAA;AAOF;;AAJA;EACE,SAAA;EACA,eAAA;AAOF;;AAJA;EACE,SAAA;EACA,UAAA;AAOF;;AAJA,cAAA;AAEA;EACE,gCAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,wBAAA;EACA,yCAAA;EACA,kBAAA;AAMF;;AAGA;EACE,YAAA;EACA,+BAAA;EACA,qBAAA;EACA,2BAAA;EACA,gBAAA;EACA,iBAAA;AAAF;;AAIA;EACE,2BAAA;AADF;;AAIA;EACE,yBAAA;EACA,qBAAA;EACA,aAAA;AADF;;AAIA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;EACA,kBAAA;EACA,4BAAA;EACA,gBAAA;AADF;AAGE;EACE,wBAAA;AADJ;AAIE;EACE,YAAA;EACA,iBAAA;EACA,eAAA;AAFJ;AAKE;EACE,aAAA;EACA,SAAA;EACA,gBAAA;AAHJ;AAME;EACE,kBAAA;EACA,OAAA;AAJJ;AAMI;EACE,kBAAA;EACA,aAAA;EACA,cAAA;AAJN;AAOI;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,gCAAA;EACA,6BAAA;EACA,qBAAA;EACA,qBAAA;AALN;AAOM;EACE,cAAA;AALR;AAUE;EACE,gBAAA;AARJ;AAWE;EACE,eAAA;AATJ;AAUI;EACE,yBAAA;AARN;AAYE;EAhEF;IAiEI,uBAAA;IACA,kBAAA;EATF;AACF;;AAYA;EACE,aAAA;EACA,0BAAA;EACA,wBAAA;EACA,gBAAA;EACA,WAAA;AATF;AAWE;EAPF;IAQI,8BAAA;EARF;AACF;AAUE;EAXF;IAYI,2CAAA;EAPF;AACF;;AAUA,oBAAA;AACA;EACE,kBAAA;EACA,8HAAA;EAKA,4BAAA;EACA,4BAAA;EACA,qBAAA;AAXF;AAaE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AAXJ;AAaI;EACE,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;AAXN;AAeE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;AAbJ;AAgBE;EACE,YAAA;EACA,mBAAA;AAdJ;AAgBI;EACE,WAAA;AAdN;AAkBE;EACE,eAAA;EACA,mBAAA;AAhBJ;AAkBI;EACE,eAAA;EACA,qBAAA;AAhBN;AAoBE;EACE,kBAAA;EACA,gBAAA;EACA,mBAAA;AAlBJ;AAqBE;EAEE,mBAAA;AApBJ;AAuBE;EACE,mBAAA;AArBJ;AAwBE;EACE,oBAAA;AAtBJ;AAyBE;EAtEF;IAuEI,kBAAA;EAtBF;EAwBE;IACE,oBAAA;EAtBJ;EAyBE;IAGE,mBAAA;EAzBJ;EA4BE;IACE,gBAAA;EA1BJ;AACF;;AA8BA,iBAAA;AACA;EACE,aAAA;AA3BF;;AA8BA;EACE,iBAAA;EACA,mBAAA;AA3BF;;AA8BA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAAA;AA3BF;;AA8BA;EACE,aAAA;EACA,2DAAA;EACA,cAAA;EACA,uBAAA;AA3BF;AA6BE;EANF;IAOI,oBAAA;EA1BF;AACF;;AA6BA;;EAEE,sCAAA;AA1BF;;AA6BA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AA1BF;AA4BE;EACE,mBAAA;AA1BJ;AA6BE;EACE,UAAA;EACA,mBAAA;AA3BJ;AA8BE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;AA5BJ;AA6BI;EACE,qBAAA;AA3BN;;AAgCA;EACE,aAAA;EACA,0BAAA;EACA,SAAA;AA7BF;AA+BE;EALF;IAMI,8BAAA;IACA,SAAA;EA5BF;AACF;;AA+BA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,uBAAA;AA5BF;AA8BE;EACE,kBAAA;AA5BJ;AA8BI;EACE,eAAA;EACA,gBAAA;AA5BN;;AAiCA;EACE,kBAAA;EACA,eAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;AA9BF;AAgCE;EACE,cAAA;EACA,gBAAA;AA9BJ;AAiCE;EAbF;IAcI,iBAAA;EA9BF;AACF;;AAiCA;EACE,aAAA;AA9BF","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n* {\r\n  margin: 0;\r\n}\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  border: 0;\r\n  outline: 0;\r\n}\r\n\r\n/* <-- reset */\r\n\r\n:root {\r\n  --ff-body: 'Raleway', sans-serif;\r\n  --c-light: #e7e7eb;\r\n  --c-dark: #100e1d;\r\n  --c-muted: #a09fb1;\r\n  --c-accent-dark: #1e213a;\r\n  --shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n  --w-sidebar: 460px;\r\n}\r\n\r\n$bp-sm: 48em; // 768px\r\n$bp-md: 64em; // 1024px\r\n$bp-lg: 85.375em; // 1366px\r\n$bp-xl: 120em; // 1920px\r\n$bp-xxl: 160em; // 2560px\r\n\r\nbody {\r\n  height: 100%;\r\n  background-color: var(--c-dark);\r\n  color: var(--c-light);\r\n  font-family: var(--ff-body);\r\n  font-weight: 500;\r\n  line-height: 1.17;\r\n}\r\n\r\n// Remove transitions on page load\r\n.preload * {\r\n  transition: none !important;\r\n}\r\n\r\nbutton {\r\n  background-color: #3c47e9;\r\n  color: var(--c-light);\r\n  padding: 14px;\r\n}\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--c-accent-dark);\r\n  padding: 18px 12px;\r\n  transform: translateX(-100%);\r\n  transition: 0.3s;\r\n\r\n  &.active {\r\n    transform: translateX(0);\r\n  }\r\n\r\n  .close {\r\n    float: right;\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &__searchbar {\r\n    display: flex;\r\n    gap: 12px;\r\n    margin-top: 50px;\r\n  }\r\n\r\n  &__input {\r\n    position: relative;\r\n    flex: 1;\r\n\r\n    i {\r\n      position: absolute;\r\n      padding: 16px;\r\n      color: #616475;\r\n    }\r\n\r\n    input {\r\n      width: 100%;\r\n      height: 100%;\r\n      padding: 0 46px;\r\n      border: 1px solid var(--c-light);\r\n      background-color: transparent;\r\n      color: var(--c-light);\r\n      transition: 0.1s ease;\r\n\r\n      &::placeholder {\r\n        color: #616475;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__error {\r\n    margin: 1.5rem 0;\r\n  }\r\n\r\n  button {\r\n    min-width: 80px;\r\n    &:disabled {\r\n      background-color: #2b33a5;\r\n    }\r\n  }\r\n\r\n  @media (width > $bp-sm) {\r\n    width: var(--w-sidebar);\r\n    padding: 20px 46px;\r\n  }\r\n}\r\n\r\n.wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: auto;\r\n  min-height: 100%;\r\n  width: 100%;\r\n\r\n  @media (width > $bp-sm) {\r\n    grid-template-columns: 33% 1fr;\r\n  }\r\n\r\n  @media (width > $bp-lg) {\r\n    grid-template-columns: var(--w-sidebar) 1fr;\r\n  }\r\n}\r\n\r\n/* Weather Current */\r\n.weather-current {\r\n  padding: 18px 12px;\r\n  background: linear-gradient(\r\n      rgba(30, 33, 58, 0.95) 100%,\r\n      rgba(30, 33, 58, 0.95) 100%\r\n    ),\r\n    url('assets/Cloud-background.png');\r\n  background-position: 50% 10%;\r\n  background-repeat: no-repeat;\r\n  background-size: 150%;\r\n\r\n  &__searchbar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 76px;\r\n\r\n    button {\r\n      padding: 12px 18px;\r\n      background: #6e707a;\r\n      color: var(--c-light);\r\n      box-shadow: var(--shadow);\r\n    }\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    color: var(--c-muted);\r\n  }\r\n\r\n  &__img {\r\n    width: 150px;\r\n    margin-bottom: 40px;\r\n\r\n    img {\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n  &__temp {\r\n    font-size: 4rem;\r\n    margin-bottom: 24px;\r\n\r\n    span {\r\n      font-size: 9rem;\r\n      color: var(--c-light);\r\n    }\r\n  }\r\n\r\n  &__status {\r\n    font-size: 2.25rem;\r\n    font-weight: 600;\r\n    margin-bottom: 48px;\r\n  }\r\n\r\n  &__date,\r\n  &__location {\r\n    font-size: 1.125rem;\r\n  }\r\n\r\n  &__date {\r\n    margin-bottom: 32px;\r\n  }\r\n\r\n  &__location {\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  @media (width > $bp-sm) {\r\n    padding: 42px 46px;\r\n\r\n    &__searchbar {\r\n      margin-bottom: 100px;\r\n    }\r\n\r\n    &__img,\r\n    &__temp,\r\n    &__status {\r\n      margin-bottom: 86px;\r\n    }\r\n\r\n    &__location {\r\n      margin-bottom: 0;\r\n    }\r\n  }\r\n}\r\n\r\n/* Weather Info */\r\n.weather-info {\r\n  padding: 20px;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 750px;\r\n  min-height: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.forecast {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\r\n  gap: 32px 26px;\r\n  padding: 30px 30px 50px;\r\n\r\n  @media (width > $bp-sm) {\r\n    padding: 66px 0 72px;\r\n  }\r\n}\r\n\r\n.forecast-card,\r\n.daily-detail-card {\r\n  background-color: var(--c-accent-dark);\r\n}\r\n\r\n.forecast-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 18px 20px;\r\n\r\n  p {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  img {\r\n    width: 65%;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  &__info {\r\n    display: flex;\r\n    align-self: stretch;\r\n    justify-content: space-between;\r\n    margin-top: auto;\r\n    span:last-of-type {\r\n      color: var(--c-muted);\r\n    }\r\n  }\r\n}\r\n\r\n.daily-detail {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 32px;\r\n\r\n  @media (width > $bp-md) {\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 48px;\r\n  }\r\n}\r\n\r\n.daily-detail-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 22px 22px 38px;\r\n\r\n  &__info {\r\n    font-size: 2.25rem;\r\n\r\n    span {\r\n      font-size: 4rem;\r\n      font-weight: 700;\r\n    }\r\n  }\r\n}\r\n\r\n.atribution {\r\n  text-align: center;\r\n  font-size: 14px;\r\n  color: var(--c-muted);\r\n  margin-top: 96px;\r\n  position: relative;\r\n  bottom: 0;\r\n\r\n  a {\r\n    color: inherit;\r\n    font-weight: 700;\r\n  }\r\n\r\n  @media (width > $bp-md) {\r\n    margin-top: 110px;\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/isTomorrow.js":
/*!*************************************************!*\
  !*** ./node_modules/dayjs/plugin/isTomorrow.js ***!
  \*************************************************/
/***/ (function(module) {

!function(o,e){ true?module.exports=e():0}(this,(function(){"use strict";return function(o,e,t){e.prototype.isTomorrow=function(){var o="YYYY-MM-DD",e=t().add(1,"day");return this.format(o)===e.format(o)}}}));

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");



const TODAY = new Date();

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

  $currDate.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.formatDate)(TODAY);

  const createForecastCard = (item) => {
    const { code, text, icon } = item.day.condition;
    const img = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.imageByCode)(code);
    const src = `${img ? `./assets/${img}.png` : icon}`;
    const date = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.dateIsTomorrow)(item.date) ? 'Tomorrow' : (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.formatDate)(item.date);

    const card = document.createElement('div');
    card.className = 'forecast-card';
    card.innerHTML = `
              <p>${date}</p>
              <img src="${src}" alt="${text}" />
              <div class="forecast-card__info">
                <span>${Math.round(item.day.maxtemp_c)}&deg;C</span>
                <span>${Math.round(item.day.mintemp_c)}&deg;C</span>
              </div>
    `;
    return card;
  };

  const renderForecast = (forecast) => {
    // Delete first item of array === current day
    const itemsToShow = forecast.slice(1);
    $forecast.innerHTML = '';
    $forecast.append(...itemsToShow.map(createForecastCard));
  };

  const updateCurrent = (current, location) => {
    const { text, code, icon } = current.condition;
    const img = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.imageByCode)(code);
    $currImg.src = `${img ? `./assets/${img}.png` : icon}`;
    $currTemp.textContent = Math.round(current.temp_c);
    $currStatus.textContent = text;
    $currLocation.textContent = `${location.name}, ${location.country}`;
    $wind.textContent = current.wind_mph;
    $humidity.textContent = current.humidity;
    $visibility.textContent = current.vis_miles;
    $airp.textContent = current.pressure_mb;
  };

  const updateView = (data) => {
    if (!data) return;
    const { current, location, forecast } = data;
    renderForecast(forecast.forecastday);
    updateCurrent(current, location);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const URL = 'https://api.weatherapi.com/v1/forecast.json';
const KEY = '3babf595b26c4b1482c111127231004';

const searchQuery = async (query) => {
  try {
    const res = await fetch(
      `${URL}?key=${KEY}&q=${query}&days=6&aqi=no&alerts=no`,
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateIsTomorrow": () => (/* binding */ dateIsTomorrow),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "imageByCode": () => (/* binding */ imageByCode)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_isTomorrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/isTomorrow */ "./node_modules/dayjs/plugin/isTomorrow.js");
/* harmony import */ var dayjs_plugin_isTomorrow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isTomorrow__WEBPACK_IMPORTED_MODULE_1__);



dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_isTomorrow__WEBPACK_IMPORTED_MODULE_1___default()));

const formatDate = (date) => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('ddd, D MMM');

const dateIsTomorrow = (date) => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).isTomorrow();

const imageByCode = (code) => {
  switch (code) {
    case 1000:
      return 'Clear';
    case 1003:
    case 1006:
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

"use strict";
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLEtBQUssVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsd0RBQXdELDZCQUE2QixLQUFLLE9BQU8sZ0JBQWdCLEtBQUssbUJBQW1CLG1CQUFt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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNFO0FBQ3hCO0FBQ0E7QUFDQSxnREFBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL2lzVG9tb3Jyb3cuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9DbG91ZC1iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi8qIDwtLSByZXNldCAqL1xcbjpyb290IHtcXG4gIC0tZmYtYm9keTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1jLWxpZ2h0OiAjZTdlN2ViO1xcbiAgLS1jLWRhcms6ICMxMDBlMWQ7XFxuICAtLWMtbXV0ZWQ6ICNhMDlmYjE7XFxuICAtLWMtYWNjZW50LWRhcms6ICMxZTIxM2E7XFxuICAtLXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIC0tdy1zaWRlYmFyOiA0NjBweDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWRhcmspO1xcbiAgY29sb3I6IHZhcigtLWMtbGlnaHQpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWJvZHkpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE3O1xcbn1cXG5cXG4ucHJlbG9hZCAqIHtcXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzQ3ZTk7XFxuICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jLWFjY2VudC1kYXJrKTtcXG4gIHBhZGRpbmc6IDE4cHggMTJweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG4uc2lkZWJhci5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG4uc2lkZWJhciAuY2xvc2Uge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaWRlYmFyX19zZWFyY2hiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTJweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5zaWRlYmFyX19pbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAxO1xcbn1cXG4uc2lkZWJhcl9faW5wdXQgaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgY29sb3I6ICM2MTY0NzU7XFxufVxcbi5zaWRlYmFyX19pbnB1dCBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgNDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWMtbGlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XFxufVxcbi5zaWRlYmFyX19pbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM2MTY0NzU7XFxufVxcbi5zaWRlYmFyX19lcnJvciB7XFxuICBtYXJnaW46IDEuNXJlbSAwO1xcbn1cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgbWluLXdpZHRoOiA4MHB4O1xcbn1cXG4uc2lkZWJhciBidXR0b246ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMzNhNTtcXG59XFxuQG1lZGlhICh3aWR0aCA+IDQ4ZW0pIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IHZhcigtLXctc2lkZWJhcik7XFxuICAgIHBhZGRpbmc6IDIwcHggNDZweDtcXG4gIH1cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNDhlbSkge1xcbiAgLndyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAxZnI7XFxuICB9XFxufVxcbkBtZWRpYSAod2lkdGggPiA4NS4zNzVlbSkge1xcbiAgLndyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXctc2lkZWJhcikgMWZyO1xcbiAgfVxcbn1cXG5cXG4vKiBXZWF0aGVyIEN1cnJlbnQgKi9cXG4ud2VhdGhlci1jdXJyZW50IHtcXG4gIHBhZGRpbmc6IDE4cHggMTJweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDMwLCAzMywgNTgsIDAuOTUpIDEwMCUsIHJnYmEoMzAsIDMzLCA1OCwgMC45NSkgMTAwJSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTUwJTtcXG59XFxuLndlYXRoZXItY3VycmVudF9fc2VhcmNoYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiA3NnB4O1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19zZWFyY2hiYXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEycHggMThweDtcXG4gIGJhY2tncm91bmQ6ICM2ZTcwN2E7XFxuICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jLW11dGVkKTtcXG59XFxuLndlYXRoZXItY3VycmVudF9faW1nIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi53ZWF0aGVyLWN1cnJlbnRfX2ltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi53ZWF0aGVyLWN1cnJlbnRfX3RlbXAge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLndlYXRoZXItY3VycmVudF9fdGVtcCBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXG59XFxuLndlYXRoZXItY3VycmVudF9fc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19kYXRlLCAud2VhdGhlci1jdXJyZW50X19sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG4ud2VhdGhlci1jdXJyZW50X19kYXRlIHtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcbi53ZWF0aGVyLWN1cnJlbnRfX2xvY2F0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNDhlbSkge1xcbiAgLndlYXRoZXItY3VycmVudCB7XFxuICAgIHBhZGRpbmc6IDQycHggNDZweDtcXG4gIH1cXG4gIC53ZWF0aGVyLWN1cnJlbnRfX3NlYXJjaGJhciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcbiAgLndlYXRoZXItY3VycmVudF9faW1nLCAud2VhdGhlci1jdXJyZW50X190ZW1wLCAud2VhdGhlci1jdXJyZW50X19zdGF0dXMge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4NnB4O1xcbiAgfVxcbiAgLndlYXRoZXItY3VycmVudF9fbG9jYXRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5cXG4vKiBXZWF0aGVyIEluZm8gKi9cXG4ud2VhdGhlci1pbmZvIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNzUwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMjBweCwgMWZyKSk7XFxuICBnYXA6IDMycHggMjZweDtcXG4gIHBhZGRpbmc6IDMwcHggMzBweCA1MHB4O1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNDhlbSkge1xcbiAgLmZvcmVjYXN0IHtcXG4gICAgcGFkZGluZzogNjZweCAwIDcycHg7XFxuICB9XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkLFxcbi5kYWlseS1kZXRhaWwtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWFjY2VudC1kYXJrKTtcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMThweCAyMHB4O1xcbn1cXG4uZm9yZWNhc3QtY2FyZCBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5mb3JlY2FzdC1jYXJkIGltZyB7XFxuICB3aWR0aDogNjUlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmZvcmVjYXN0LWNhcmRfX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4uZm9yZWNhc3QtY2FyZF9faW5mbyBzcGFuOmxhc3Qtb2YtdHlwZSB7XFxuICBjb2xvcjogdmFyKC0tYy1tdXRlZCk7XFxufVxcblxcbi5kYWlseS1kZXRhaWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ2FwOiAzMnB4O1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNjRlbSkge1xcbiAgLmRhaWx5LWRldGFpbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiA0OHB4O1xcbiAgfVxcbn1cXG5cXG4uZGFpbHktZGV0YWlsLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMjJweCAyMnB4IDM4cHg7XFxufVxcbi5kYWlseS1kZXRhaWwtY2FyZF9faW5mbyB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcbi5kYWlseS1kZXRhaWwtY2FyZF9faW5mbyBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5hdHJpYnV0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS1jLW11dGVkKTtcXG4gIG1hcmdpbi10b3A6IDk2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxufVxcbi5hdHJpYnV0aW9uIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5AbWVkaWEgKHdpZHRoID4gNjRlbSkge1xcbiAgLmF0cmlidXRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcXG4gIH1cXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7QUFFRjs7QUFBQTs7RUFFRSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLG1DQUFBO0FBSUY7O0FBRkE7Ozs7O0VBS0UsY0FBQTtFQUNBLGVBQUE7QUFLRjs7QUFIQTs7OztFQUlFLGFBQUE7QUFNRjs7QUFKQTs7Ozs7OztFQU9FLHlCQUFBO0FBT0Y7O0FBSkE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQU9GOztBQUpBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFPRjs7QUFKQSxjQUFBO0FBRUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUdBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLDJCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0Usd0JBQUE7QUFESjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0VB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Q0E7RUFDRSxhQUFBO0FBOUJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG59XFxyXFxuaW1nLFxcclxcbnBpY3R1cmUsXFxyXFxudmlkZW8sXFxyXFxuY2FudmFzLFxcclxcbnN2ZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhLFxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5wLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIDwtLSByZXNldCAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZmYtYm9keTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1jLWxpZ2h0OiAjZTdlN2ViO1xcclxcbiAgLS1jLWRhcms6ICMxMDBlMWQ7XFxyXFxuICAtLWMtbXV0ZWQ6ICNhMDlmYjE7XFxyXFxuICAtLWMtYWNjZW50LWRhcms6ICMxZTIxM2E7XFxyXFxuICAtLXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIC0tdy1zaWRlYmFyOiA0NjBweDtcXHJcXG59XFxyXFxuXFxyXFxuJGJwLXNtOiA0OGVtOyAvLyA3NjhweFxcclxcbiRicC1tZDogNjRlbTsgLy8gMTAyNHB4XFxyXFxuJGJwLWxnOiA4NS4zNzVlbTsgLy8gMTM2NnB4XFxyXFxuJGJwLXhsOiAxMjBlbTsgLy8gMTkyMHB4XFxyXFxuJGJwLXh4bDogMTYwZW07IC8vIDI1NjBweFxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYy1kYXJrKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ib2R5KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xNztcXHJcXG59XFxyXFxuXFxyXFxuLy8gUmVtb3ZlIHRyYW5zaXRpb25zIG9uIHBhZ2UgbG9hZFxcclxcbi5wcmVsb2FkICoge1xcclxcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNDdlOTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jLWxpZ2h0KTtcXHJcXG4gIHBhZGRpbmc6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWMtYWNjZW50LWRhcmspO1xcclxcbiAgcGFkZGluZzogMThweCAxMnB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxuICAmLmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZSB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3NlYXJjaGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2lucHV0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcblxcclxcbiAgICBpIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgICBjb2xvcjogIzYxNjQ3NTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dCB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHBhZGRpbmc6IDAgNDZweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jLWxpZ2h0KTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xcclxcblxcclxcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjNjE2NDc1O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZXJyb3Ige1xcclxcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcclxcbiAgICAmOmRpc2FibGVkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzM2E1O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKHdpZHRoID4gJGJwLXNtKSB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS13LXNpZGViYXIpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDQ2cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIEBtZWRpYSAod2lkdGggPiAkYnAtc20pIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhICh3aWR0aCA+ICRicC1sZykge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXctc2lkZWJhcikgMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBXZWF0aGVyIEN1cnJlbnQgKi9cXHJcXG4ud2VhdGhlci1jdXJyZW50IHtcXHJcXG4gIHBhZGRpbmc6IDE4cHggMTJweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICByZ2JhKDMwLCAzMywgNTgsIDAuOTUpIDEwMCUsXFxyXFxuICAgICAgcmdiYSgzMCwgMzMsIDU4LCAwLjk1KSAxMDAlXFxyXFxuICAgICksXFxyXFxuICAgIHVybCgnYXNzZXRzL0Nsb3VkLWJhY2tncm91bmQucG5nJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTUwJTtcXHJcXG5cXHJcXG4gICZfX3NlYXJjaGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNzZweDtcXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzZlNzA3YTtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tYy1saWdodCk7XFxyXFxuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWMtbXV0ZWQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1nIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190ZW1wIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcblxcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICBmb250LXNpemU6IDlyZW07XFxyXFxuICAgICAgY29sb3I6IHZhcigtLWMtbGlnaHQpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zdGF0dXMge1xcclxcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19kYXRlLFxcclxcbiAgJl9fbG9jYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGF0ZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19sb2NhdGlvbiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhICh3aWR0aCA+ICRicC1zbSkge1xcclxcbiAgICBwYWRkaW5nOiA0MnB4IDQ2cHg7XFxyXFxuXFxyXFxuICAgICZfX3NlYXJjaGJhciB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW1nLFxcclxcbiAgICAmX190ZW1wLFxcclxcbiAgICAmX19zdGF0dXMge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDg2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbG9jYXRpb24ge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogV2VhdGhlciBJbmZvICovXFxyXFxuLndlYXRoZXItaW5mbyB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3Qge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcclxcbiAgZ2FwOiAzMnB4IDI2cHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDMwcHggNTBweDtcXHJcXG5cXHJcXG4gIEBtZWRpYSAod2lkdGggPiAkYnAtc20pIHtcXHJcXG4gICAgcGFkZGluZzogNjZweCAwIDcycHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1jYXJkLFxcclxcbi5kYWlseS1kZXRhaWwtY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLWFjY2VudC1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMThweCAyMHB4O1xcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgc3BhbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICAgIGNvbG9yOiB2YXIoLS1jLW11dGVkKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZGV0YWlsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG5cXHJcXG4gIEBtZWRpYSAod2lkdGggPiAkYnAtbWQpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDQ4cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1kZXRhaWwtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAyMnB4IDIycHggMzhweDtcXHJcXG5cXHJcXG4gICZfX2luZm8ge1xcclxcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hdHJpYnV0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jLW11dGVkKTtcXHJcXG4gIG1hcmdpbi10b3A6IDk2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKHdpZHRoID4gJGJwLW1kKSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDExMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGY9XCJtb250aFwiLGg9XCJxdWFydGVyXCIsYz1cInllYXJcIixkPVwiZGF0ZVwiLGw9XCJJbnZhbGlkIERhdGVcIiwkPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8seT0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csTT17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpLG9yZGluYWw6ZnVuY3Rpb24odCl7dmFyIGU9W1widGhcIixcInN0XCIsXCJuZFwiLFwicmRcIl0sbj10JTEwMDtyZXR1cm5cIltcIit0KyhlWyhuLTIwKSUxMF18fGVbbl18fGVbMF0pK1wiXVwifX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LHY9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixmKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGYpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpmLHk6Yyx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6aH1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LGc9XCJlblwiLEQ9e307RFtnXT1NO3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX30sUz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sdz1mdW5jdGlvbih0LGUpe2lmKHAodCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxPPXY7Ty5sPVMsTy5pPXAsTy53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHcodCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPVModC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KX12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKE8udShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLiR4PXQueHx8e30sdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIE99LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49dyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTx3KHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gTy51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFPLnUoZSl8fGUsaD1PLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPU8udyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8udyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGgpe2Nhc2UgYzpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBmOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Ty5wKHQpLGg9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1oK1wiRGF0ZVwiLG5bZF09aCtcIkRhdGVcIixuW2ZdPWgrXCJNb250aFwiLG5bY109aCtcIkZ1bGxZZWFyXCIsblt1XT1oK1wiSG91cnNcIixuW3NdPWgrXCJNaW51dGVzXCIsbltpXT1oK1wiU2Vjb25kc1wiLG5bcl09aCtcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1mfHxvPT09Yyl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tPLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsaCl7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPU8ucChoKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPXcobCk7cmV0dXJuIE8udyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWYpcmV0dXJuIHRoaXMuc2V0KGYsdGhpcy4kTStyKTtpZigkPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBPLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPU8ueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsZj1uLm1vbnRocyxoPWZ1bmN0aW9uKHQsbixpLHMpe3JldHVybiB0JiYodFtuXXx8dChlLHIpKXx8aVtuXS5zbGljZSgwLHMpfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBPLnMocyUxMnx8MTIsdCxcIjBcIil9LGQ9bi5tZXJpZGllbXx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn0sJD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTphKzEsTU06Ty5zKGErMSwyLFwiMFwiKSxNTU06aChuLm1vbnRoc1Nob3J0LGEsZiwzKSxNTU1NOmgoZixhKSxEOnRoaXMuJEQsREQ6Ty5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6aChuLndlZWtkYXlzTWluLHRoaXMuJFcsbywyKSxkZGQ6aChuLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxvLDMpLGRkZGQ6b1t0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpPLnMocywyLFwiMFwiKSxoOmMoMSksaGg6YygyKSxhOmQocyx1LCEwKSxBOmQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpPLnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpPLnModGhpcy4kcywyLFwiMFwiKSxTU1M6Ty5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6aX07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LGUpe3JldHVybiBlfHwkW3RdfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsbCl7dmFyICQseT1PLnAoZCksTT13KHIpLG09KE0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSx2PXRoaXMtTSxnPU8ubSh0aGlzLE0pO3JldHVybiBnPSgkPXt9LCRbY109Zy8xMiwkW2ZdPWcsJFtoXT1nLzMsJFtvXT0odi1tKS82MDQ4ZTUsJFthXT0odi1tKS84NjRlNSwkW3VdPXYvbiwkW3NdPXYvZSwkW2ldPXYvdCwkKVt5XXx8dixsP2c6Ty5hKGcpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoZikuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBEW3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPVModCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBPLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLFQ9Xy5wcm90b3R5cGU7cmV0dXJuIHcucHJvdG90eXBlPVQsW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixmXSxbXCIkeVwiLGNdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe1RbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSx3LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sdyksdC4kaT0hMCksd30sdy5sb2NhbGU9Uyx3LmlzRGF5anM9cCx3LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHcoMWUzKnQpfSx3LmVuPURbZ10sdy5Mcz1ELHcucD17fSx3fSkpOyIsIiFmdW5jdGlvbihvLGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOihvPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6b3x8c2VsZikuZGF5anNfcGx1Z2luX2lzVG9tb3Jyb3c9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihvLGUsdCl7ZS5wcm90b3R5cGUuaXNUb21vcnJvdz1mdW5jdGlvbigpe3ZhciBvPVwiWVlZWS1NTS1ERFwiLGU9dCgpLmFkZCgxLFwiZGF5XCIpO3JldHVybiB0aGlzLmZvcm1hdChvKT09PWUuZm9ybWF0KG8pfX19KSk7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHNlYXJjaFF1ZXJ5IGZyb20gJy4vYXBpJztcclxuaW1wb3J0IHsgaW1hZ2VCeUNvZGUsIGZvcm1hdERhdGUsIGRhdGVJc1RvbW9ycm93IH0gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmNvbnN0IFRPREFZID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCAkY3VyclRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VyclRlbXAnKTtcclxuICBjb25zdCAkY3VyclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyU3RhdHVzJyk7XHJcbiAgY29uc3QgJGN1cnJMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyTG9jYXRpb24nKTtcclxuICBjb25zdCAkY3VyckRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VyckRhdGUnKTtcclxuICBjb25zdCAkY3VyckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJySW1nJyk7XHJcblxyXG4gIGNvbnN0ICRzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICBjb25zdCAkZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fZXJyb3InKTtcclxuICBjb25zdCAkb3BlblNpZGViYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3BlblNpZGViYXJCdG4nKTtcclxuICBjb25zdCAkY2xvc2VTaWRlYmFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlU2lkZWJhckJ0bicpO1xyXG4gIGNvbnN0ICRzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEZvcm0nKTtcclxuICBjb25zdCAkc2VhcmNoSW5wdXQgPSAkc2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cclxuICBjb25zdCAkZm9yZWNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9yZWNhc3QnKTtcclxuICBjb25zdCAkd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kJyk7XHJcbiAgY29uc3QgJGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XHJcbiAgY29uc3QgJHZpc2liaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlzaWJpbGl0eScpO1xyXG4gIGNvbnN0ICRhaXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FpcnAnKTtcclxuXHJcbiAgJGN1cnJEYXRlLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZShUT0RBWSk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUZvcmVjYXN0Q2FyZCA9IChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvZGUsIHRleHQsIGljb24gfSA9IGl0ZW0uZGF5LmNvbmRpdGlvbjtcclxuICAgIGNvbnN0IGltZyA9IGltYWdlQnlDb2RlKGNvZGUpO1xyXG4gICAgY29uc3Qgc3JjID0gYCR7aW1nID8gYC4vYXNzZXRzLyR7aW1nfS5wbmdgIDogaWNvbn1gO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRhdGVJc1RvbW9ycm93KGl0ZW0uZGF0ZSkgPyAnVG9tb3Jyb3cnIDogZm9ybWF0RGF0ZShpdGVtLmRhdGUpO1xyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2ZvcmVjYXN0LWNhcmQnO1xyXG4gICAgY2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgPHA+JHtkYXRlfTwvcD5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7c3JjfVwiIGFsdD1cIiR7dGV4dH1cIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdC1jYXJkX19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke01hdGgucm91bmQoaXRlbS5kYXkubWF4dGVtcF9jKX0mZGVnO0M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke01hdGgucm91bmQoaXRlbS5kYXkubWludGVtcF9jKX0mZGVnO0M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRm9yZWNhc3QgPSAoZm9yZWNhc3QpID0+IHtcclxuICAgIC8vIERlbGV0ZSBmaXJzdCBpdGVtIG9mIGFycmF5ID09PSBjdXJyZW50IGRheVxyXG4gICAgY29uc3QgaXRlbXNUb1Nob3cgPSBmb3JlY2FzdC5zbGljZSgxKTtcclxuICAgICRmb3JlY2FzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICRmb3JlY2FzdC5hcHBlbmQoLi4uaXRlbXNUb1Nob3cubWFwKGNyZWF0ZUZvcmVjYXN0Q2FyZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnQgPSAoY3VycmVudCwgbG9jYXRpb24pID0+IHtcclxuICAgIGNvbnN0IHsgdGV4dCwgY29kZSwgaWNvbiB9ID0gY3VycmVudC5jb25kaXRpb247XHJcbiAgICBjb25zdCBpbWcgPSBpbWFnZUJ5Q29kZShjb2RlKTtcclxuICAgICRjdXJySW1nLnNyYyA9IGAke2ltZyA/IGAuL2Fzc2V0cy8ke2ltZ30ucG5nYCA6IGljb259YDtcclxuICAgICRjdXJyVGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoY3VycmVudC50ZW1wX2MpO1xyXG4gICAgJGN1cnJTdGF0dXMudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgJGN1cnJMb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uLm5hbWV9LCAke2xvY2F0aW9uLmNvdW50cnl9YDtcclxuICAgICR3aW5kLnRleHRDb250ZW50ID0gY3VycmVudC53aW5kX21waDtcclxuICAgICRodW1pZGl0eS50ZXh0Q29udGVudCA9IGN1cnJlbnQuaHVtaWRpdHk7XHJcbiAgICAkdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IGN1cnJlbnQudmlzX21pbGVzO1xyXG4gICAgJGFpcnAudGV4dENvbnRlbnQgPSBjdXJyZW50LnByZXNzdXJlX21iO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVZpZXcgPSAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm47XHJcbiAgICBjb25zdCB7IGN1cnJlbnQsIGxvY2F0aW9uLCBmb3JlY2FzdCB9ID0gZGF0YTtcclxuICAgIHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0LmZvcmVjYXN0ZGF5KTtcclxuICAgIHVwZGF0ZUN1cnJlbnQoY3VycmVudCwgbG9jYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAob3BlbikgPT4ge1xyXG4gICAgJHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgb3Blbik7XHJcbiAgICBpZiAob3Blbikge1xyXG4gICAgICAkc2VhcmNoSW5wdXQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRMb2FkaW5nQnRuID0gKGxvYWRpbmcpID0+IHtcclxuICAgIGNvbnN0ICRzZWFyY2hCdG4gPSAkc2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuICAgIGNvbnN0ICRzcGFuID0gJHNlYXJjaEJ0bi5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICBjb25zdCAkc3Bpbm5lciA9ICRzZWFyY2hCdG4ucXVlcnlTZWxlY3RvcignaScpO1xyXG4gICAgJHNlYXJjaEJ0bi5kaXNhYmxlZCA9IGxvYWRpbmc7XHJcbiAgICAkc3Bpbm5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCAhbG9hZGluZyk7XHJcbiAgICAkc3Bhbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBsb2FkaW5nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nQnRuKHRydWUpO1xyXG4gICAgJGVycm9yLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlYXJjaFF1ZXJ5KHF1ZXJ5KTtcclxuICAgICAgdXBkYXRlVmlldyhkYXRhKTtcclxuICAgICAgdG9nZ2xlU2lkZWJhcihmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgJGVycm9yLnRleHRDb250ZW50ID0gZXJyO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZ0J0bihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2V0RGF0YSgndG9reW8nKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9ICRzZWFyY2hJbnB1dDtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09ICcnKSByZXR1cm47XHJcbiAgICBnZXREYXRhKHZhbHVlKTtcclxuICAgICRzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRvcGVuU2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZVNpZGViYXIodHJ1ZSkpO1xyXG4gICRjbG9zZVNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVTaWRlYmFyKGZhbHNlKSk7XHJcbiAgJHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiY29uc3QgVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24nO1xyXG5jb25zdCBLRVkgPSAnM2JhYmY1OTViMjZjNGIxNDgyYzExMTEyNzIzMTAwNCc7XHJcblxyXG5jb25zdCBzZWFyY2hRdWVyeSA9IGFzeW5jIChxdWVyeSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7VVJMfT9rZXk9JHtLRVl9JnE9JHtxdWVyeX0mZGF5cz02JmFxaT1ubyZhbGVydHM9bm9gLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgdGhyb3cgRXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB0aHJvdyBlcnIubWVzc2FnZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hRdWVyeTtcclxuIiwiaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IGlzVG9tb3Jyb3cgZnJvbSAnZGF5anMvcGx1Z2luL2lzVG9tb3Jyb3cnO1xyXG5cclxuZGF5anMuZXh0ZW5kKGlzVG9tb3Jyb3cpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4gZGF5anMoZGF0ZSkuZm9ybWF0KCdkZGQsIEQgTU1NJyk7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZUlzVG9tb3Jyb3cgPSAoZGF0ZSkgPT4gZGF5anMoZGF0ZSkuaXNUb21vcnJvdygpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGltYWdlQnlDb2RlID0gKGNvZGUpID0+IHtcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgMTAwMDpcclxuICAgICAgcmV0dXJuICdDbGVhcic7XHJcbiAgICBjYXNlIDEwMDM6XHJcbiAgICBjYXNlIDEwMDY6XHJcbiAgICAgIHJldHVybiAnTGlnaHRDbG91ZCc7XHJcbiAgICBjYXNlIDEwMDk6XHJcbiAgICAgIHJldHVybiAnSGVhdnlDbG91ZCc7XHJcbiAgICBjYXNlIDExNTA6XHJcbiAgICBjYXNlIDExNTM6XHJcbiAgICBjYXNlIDExODM6XHJcbiAgICAgIHJldHVybiAnTGlnaHRSYWluJztcclxuICAgIGNhc2UgMTE4OTpcclxuICAgIGNhc2UgMTE5MjpcclxuICAgIGNhc2UgMTE5NTpcclxuICAgICAgcmV0dXJuICdIZWF2eVJhaW4nO1xyXG4gICAgY2FzZSAxMDYzOlxyXG4gICAgY2FzZSAxMTgwOlxyXG4gICAgY2FzZSAxMTg2OlxyXG4gICAgY2FzZSAxMjQwOlxyXG4gICAgY2FzZSAxMjQzOlxyXG4gICAgY2FzZSAxMjQ2OlxyXG4gICAgICByZXR1cm4gJ1Nob3dlcic7XHJcbiAgICBjYXNlIDEwNjk6XHJcbiAgICBjYXNlIDExNjg6XHJcbiAgICBjYXNlIDExOTg6XHJcbiAgICBjYXNlIDEyMDE6XHJcbiAgICBjYXNlIDEyMDQ6XHJcbiAgICBjYXNlIDEyMDc6XHJcbiAgICBjYXNlIDEyNDk6XHJcbiAgICBjYXNlIDEyNTI6XHJcbiAgICAgIHJldHVybiAnU2xlZXQnO1xyXG4gICAgY2FzZSAxMTE0OlxyXG4gICAgY2FzZSAxMTE3OlxyXG4gICAgY2FzZSAxMjEwOlxyXG4gICAgY2FzZSAxMjEzOlxyXG4gICAgY2FzZSAxMjE2OlxyXG4gICAgY2FzZSAxMjU1OlxyXG4gICAgICByZXR1cm4gJ1Nub3cnO1xyXG4gICAgY2FzZSAxMjE5OlxyXG4gICAgY2FzZSAxMjI1OlxyXG4gICAgY2FzZSAxMjM3OlxyXG4gICAgY2FzZSAxMjU4OlxyXG4gICAgY2FzZSAxMjYxOlxyXG4gICAgY2FzZSAxMjY0OlxyXG4gICAgICByZXR1cm4gJ0hhaWwnO1xyXG4gICAgY2FzZSAxMDg3OlxyXG4gICAgY2FzZSAxMjczOlxyXG4gICAgY2FzZSAxMjc2OlxyXG4gICAgY2FzZSAxMjc5OlxyXG4gICAgY2FzZSAxMjgyOlxyXG4gICAgICByZXR1cm4gJ1RodW5kZXJzdG9ybSc7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxuLy8gSW5pdCBBcHBcclxuQXBwKCk7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
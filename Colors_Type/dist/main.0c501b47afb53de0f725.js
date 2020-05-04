/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./components/color.css":
/*!*********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/color.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/color.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./style.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/color.css */ \"../node_modules/css-loader/dist/cjs.js!./components/color.css\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../src/img/logo.svg */ \"./img/logo.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"/*-------Quicksland; Montserrat---------\\n@font-face {\\n  font-family: \\\"Quicksand\\\";\\n  src: url(\\\"../Colors_Type/fonts/Quicksand-Regular.eot\\\");\\n  src: url(\\\"../Colors_Type/fonts/Quicksand-Regular.eot?#iefix\\\") format(\\\"embedded-opentype\\\"),\\n    url(\\\"../Colors_Type/fonts/Quicksand-Regular.woff\\\") format(\\\"woff\\\"),\\n    url(\\\"../Colors_Type/fonts/Quicksand-Regular.ttf\\\") format(\\\"truetype\\\"),\\n    url(\\\"../Colors_Type/fonts/Quicksand-Regular.svg#Quicksand-Regular\\\") format(\\\"svg\\\");\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\\"Quicksand\\\";\\n  src: url(\\\"fonts/Quicksand-Bold.eot\\\");\\n  src: url(\\\"fonts/Quicksand-Bold.eot?#iefix\\\") format(\\\"embedded-opentype\\\"),\\n    url(\\\"fonts/Quicksand-Bold.woff\\\") format(\\\"woff\\\"),\\n    url(\\\"fonts/Quicksand-Bold.svg\\\") format(\\\"svg\\\"),\\n    url(\\\"fonts/Quicksand-Bold.ttf\\\") format(\\\"truetype\\\");\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n\\n@font-face {\\n  font-family: \\\"Montserrat\\\";\\n  src: url(\\\"fonts/Montserrat-Regular.woff\\\") format(\\\"woff\\\"),\\n    url(\\\"fonts/Montserrat-Regular.ttf\\\") format(\\\"truetype\\\"),\\n    url(\\\"fonts/Montserrat-Regular.svg#Montserrat-Regular\\\") format(\\\"svg\\\");\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: \\\"Montserrat\\\";\\n  src: url(\\\"fonts/Montserrat-Bold.woff\\\") format(\\\"woff\\\"),\\n    url(\\\"fonts/Montserrat-Bold.ttf\\\") format(\\\"truetype\\\"),\\n    url(\\\"fonts/Montserrat-Bold.svg#Montserrat-Bold\\\") format(\\\"svg\\\");\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n--------------------------Reset Styles-----------------------------------*/\\n* {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n}\\n*,\\n*:before,\\n*:after {\\n  -moz-box-sizing: border-box;\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n:focus,\\n:active {\\n  outline: none;\\n}\\na:focus,\\na:active {\\n  outline: none;\\n}\\n\\nnav,\\nfooter,\\nheader,\\naside {\\n  display: block;\\n}\\n\\nhtml,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  font-size: 100%;\\n  line-height: 1;\\n  font-size: 14px;\\n  -ms-text-size-adjust: 100%;\\n  -ms-text-size-adjust: 100%;\\n  -webkit-text-size-adjust: 100%;\\n}\\n\\ninput,\\nbutton,\\ntextarea {\\n  font-family: inherit;\\n}\\n\\ninput::-ms-clear {\\n  display: none;\\n}\\nbutton {\\n  cursor: pointer;\\n}\\nbutton::-moz-focus-inner {\\n  padding: 0;\\n  border: 0;\\n}\\na,\\na:visited {\\n  text-decoration: none;\\n}\\na:hover {\\n  text-decoration: none;\\n}\\nul li {\\n  list-style: none;\\n}\\nimg {\\n  vertical-align: top;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: 400;\\n}\\n/*---------------------------Header----------------------------------*/\\n.body-wrapper {\\n}\\n.screen-width {\\n}\\n.header {\\n}\\n.logo {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  position: absolute;\\n  width: 48px;\\n  height: 48px;\\n  left: 30px;\\n  top: 30px;\\n  border-radius: 50%;\\n}\\n/*---------------------------Colors----------------------------------*/\\n.content-wrapper__two-columns {\\n  position: absolute;\\n  left: 149.74px;\\n  top: 145px;\\n  width: 1100px;\\n  height: 610px;\\n}\\n.colors-wrapper {\\n  position: absolute;\\n  width: 269.26px;\\n  height: 610px;\\n  font-family: Quicksand;\\n  font-style: normal;\\n  font-weight: 700;\\n  font-size: 19px;\\n  line-height: 29px;\\n}\\n.colors {\\n}\\n.colors__code {\\n  position: absolute;\\n  left: ;\\n  font-family: Quicksand, Arial, Helvetica, sans-serif;\\n  font-style: normal;\\n  font-weight: 400;\\n  line-height: 29px;\\n  font-size: 19px;\\n  align-items: center;\\n}\\n/*square 100*/\\n.square-100 {\\n  position: absolute;\\n  width: 70px;\\n  height: 70px;\\n  background: #1f2041;\\n  border-radius: 6px;\\n}\\n\\n.square-100__designation {\\n  position: absolute;\\n  left: 110px;\\n  top: 6px;\\n  width: 159px;\\n  height: 57px;\\n  color: #1f2041;\\n}\\n\\n/*square 75*/\\n.square-75 {\\n  position: absolute;\\n  width: 70px;\\n  height: 70px;\\n  top: 90px;\\n  background: rgba(31, 32, 65, 0.75);\\n  border-radius: 6px;\\n}\\n\\n.square-75__designation {\\n  position: absolute;\\n  width: 150px;\\n  height: 58px;\\n  left: 110px;\\n  top: 96px;\\n  color: #1f2041;\\n}\\n/*square 50*/\\n.square-50 {\\n  position: absolute;\\n  width: 70px;\\n  height: 70px;\\n  top: 180px;\\n  background: rgba(31, 32, 65, 0.5);\\n  border-radius: 6px;\\n}\\n\\n.square-50__designation {\\n  position: absolute;\\n  width: 151px;\\n  height: 58px;\\n  left: 110px;\\n  top: 186px;\\n  color: #1f2041;\\n}\\n/*square 25*/\\n.square-25 {\\n  position: absolute;\\n  width: 70px;\\n  height: 70px;\\n  top: 270px;\\n  background: rgba(31, 32, 65, 0.25);\\n  border-radius: 6px;\\n}\\n\\n.square-25__designation {\\n  position: absolute;\\n  width: 149px;\\n  height: 58px;\\n  left: 110px;\\n  top: 276px;\\n  color: #1f2041;\\n}\\n/*square 5*/\\n.square-5 {\\n  position: absolute;\\n  width: 70px;\\n  height: 70px;\\n  top: 360px;\\n  background: rgba(31, 32, 65, 0.05);\\n  border-radius: 6px;\\n}\\n\\n.square-5__designation {\\n  position: absolute;\\n  width: 139px;\\n  height: 58px;\\n  left: 110px;\\n  top: 366px;\\n  color: #1f2041;\\n}\\n/*square purple*/\\n.square-purple {\\n  position: absolute;\\n  width: 70px;\\n  height: 70px;\\n  top: 450px;\\n  background: #bc9cff;\\n  border-radius: 6px;\\n}\\n\\n.square-purple__designation {\\n  position: absolute;\\n  width: 82px;\\n  height: 58px;\\n  left: 110px;\\n  top: 456px;\\n  color: #1f2041;\\n}\\n/*square green*/\\n.square-green {\\n  position: absolute;\\n  width: 70px;\\n  height: 70px;\\n  top: 540px;\\n  background: #6fcf97;\\n  border-radius: 6px;\\n}\\n\\n.square-green__designation {\\n  position: absolute;\\n  width: 77px;\\n  height: 57px;\\n  left: 110px;\\n  top: 547px;\\n  color: #1f2041;\\n}\\n/*square end*/\\n\\n/*---------------------------Type----------------------------------*/\\n.type-wrapper {\\n  position: absolute;\\n  width: 403px;\\n  height: 321px;\\n  right: 0px;\\n  top: -1px;\\n  box-sizing: border-box;\\n}\\n\\n.type {\\n  position: relative;\\n  width: 403px;\\n  height: 60px;\\n}\\n\\n/*--------------------------------------------------------*/\\n.type__block-title_size_h1 {\\n  position: absolute;\\n  left: 7px;\\n  top: 1px;\\n  width: 29px;\\n  height: 60px;\\n}\\n.type__block-title_size_h2 {\\n  position: absolute;\\n  left: 9px;\\n  top: 51px;\\n  width: 27px;\\n  height: 60px;\\n}\\n.type__block-title_size_h3 {\\n  position: absolute;\\n  top: 89px;\\n  left: 19px;\\n  width: 17px;\\n  height: 15px;\\n}\\n.type__block-title_size_body {\\n  position: absolute;\\n  top: 91px;\\n  left: -1px;\\n  width: 37px;\\n  height: 24px;\\n}\\n/*--------------------------------------------------------*/\\n.type__block-text_size_h1 {\\n  position: absolute;\\n  left: 66px;\\n  top: 1px;\\n  width: 340px;\\n  height: 60px;\\n}\\n.type__block-text_size_h2 {\\n  position: absolute;\\n  width: 290px;\\n  height: 48px;\\n  left: 66px;\\n  top: 51px;\\n}\\n.type__block-text_size_h3 {\\n  position: absolute;\\n  left: 66px;\\n  top: 89px;\\n  width: 186px;\\n  height: 15px;\\n}\\n.type__block-text_size_body {\\n  position: absolute;\\n  left: 66px;\\n  top: 91px;\\n  width: 310px;\\n  height: 48px;\\n}\\n/*--------------------------------------------------------*/\\n.type_font-size_h1 {\\n  font-size: 24px;\\n  line-height: 30px;\\n}\\n.type_font-size_h2 {\\n  font-size: 19px;\\n  line-height: 24px;\\n}\\n.type_font-size_h3 {\\n  font-size: 12px;\\n  line-height: 15px;\\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  color: #1f2041;\\n}\\n.type_font-size_body {\\n  font-size: 14px;\\n  line-height: 24px;\\n}\\n/*--------------------------------------------------------*/\\n.type__block-title {\\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\\n  color: rgba(31, 32, 65, 0.25);\\n  font-weight: 400;\\n  text-align: right;\\n}\\n\\n.type__block-text {\\n  font-family: Quicksand, Arial, Helvetica, sans-serif;\\n  font-weight: 700;\\n  color: #1f2041;\\n  display: inline-block;\\n}\\n.type__block-text_font-style_body {\\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\\n  font-weight: 400;\\n  color: rgba(31, 32, 65, 0.75);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./Post.js":
/*!*****************!*\
  !*** ./Post.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\nclass Post {\n  constructor(title, img) {\n    this.title = title;\n    this.img = img;\n    this.date = new Date();\n  }\n\n  toString() {\n    return JSON.stringify({\n      title: this.title,\n      date: this.date.toJSON(),\n      img: this.img\n    });\n  }\n  get uppercaseTitle() {\n    return this.title.toUpperCase();\n  }\n}\n\n\n//# sourceURL=webpack:///./Post.js?");

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/*! exports provided: title, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"title\\\":\\\"I am JSON title\\\"}\");\n\n//# sourceURL=webpack:///./assets/json.json?");

/***/ }),

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c2a93d6ae04f381031de3bb8cecdf4b0.svg\");\n\n//# sourceURL=webpack:///./img/logo.svg?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_json_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/json.json */ \"./assets/json.json\");\nvar _assets_json_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./assets/json.json */ \"./assets/json.json\", 1);\n/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.svg */ \"./img/logo.svg\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ \"./Post.js\");\n\n\n\n\n\n\nconst post = new _Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('Webpack', _img_logo_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconsole.log('Post to string:', post.toString());\nconsole.log('JSON', _assets_json_json__WEBPACK_IMPORTED_MODULE_0__);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./style.css?");

/***/ })

/******/ });
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueHeartRating"] = factory(require("vue"));
	else
		root["VueHeartRating"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__274__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 621:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.vue-heart-rating-heart[data-v-0dd9db4c]{display:inline-block;-webkit-tap-highlight-color:transparent}.vue-heart-rating-pointer[data-v-0dd9db4c]{cursor:pointer}.vue-heart-rating[data-v-0dd9db4c]{display:flex;align-items:center}.vue-heart-rating-inline[data-v-0dd9db4c]{display:inline-flex}.vue-heart-rating-rating-text[data-v-0dd9db4c]{margin-left:7px}.vue-heart-rating-rtl[data-v-0dd9db4c]{direction:rtl}.vue-heart-rating-rtl .vue-heart-rating-rating-text[data-v-0dd9db4c]{margin-right:10px;direction:rtl}.sr-only[data-v-0dd9db4c]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.vue-heart-rating-heart[data-v-79a236c4]{overflow:visible!important}.vue-heart-rating-heart-rotate[data-v-79a236c4]{transition:all .25s}.vue-heart-rating-heart-rotate[data-v-79a236c4]:hover{transition:transform .25s;transform:rotate(-15deg) scale(1.3)}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
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

/***/ 601:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 173:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(966);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(548)/* ["default"] */ .A)
var update = add("5b397d71", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 710:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(719);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(548)/* ["default"] */ .A)
var update = add("53ce2410", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ addStylesClient)
});

;// ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 924:
/***/ ((module) => {

class AlphaColor {

    constructor(color) {
        this.color = color
    }

    parseAlphaColor() {
        if (/^rgba\((\d{1,3}%?\s*,\s*){3}(\d*(?:\.\d+)?)\)$/.test(this.color)) {
            return this.parseRgba()
        } else if (/^hsla\(\d+\s*,\s*([\d.]+%\s*,\s*){2}(\d*(?:\.\d+)?)\)$/.test(this.color)) {
            return this.parseHsla()
        } else if (/^#([0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/.test(this.color)) {
            return this.parseAlphaHex()
        } else if (/^transparent$/.test(this.color)) {
            return this.parseTransparent()
        }

        return {
            color: this.color,
            opacity: '1'
        }
    }

    parseRgba() {
        return {
            color: this.color.replace(/,(?!.*,).*(?=\))|a/g, ''),
            opacity: this.color.match(/\.\d+|[01](?=\))/)[0]
        }
    }

    parseHsla() {
        return {
            color: this.color.replace(/,(?!.*,).*(?=\))|a/g, ''),
            opacity: this.color.match(/\.\d+|[01](?=\))/)[0]
        }
    }

    parseAlphaHex() {
        return {
            color: this.color.length === 5 ? this.color.substring(0, 4) : this.color.substring(0, 7),
            opacity: this.color.length === 5 ? (parseInt(this.color.substring(4, 5) + this.color.substring(4, 5), 16) / 255).toFixed(2) : (parseInt(this.color.substring(7, 9), 16) / 255).toFixed(2)

        }
    }

    parseTransparent() {
        return {
            color: '#fff',
            opacity: 0
        }
    }
}

module.exports = AlphaColor

/***/ }),

/***/ 274:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__274__;

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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/heart-rating.vue?vue&type=template&id=0dd9db4c&scoped=true


const _hoisted_1 = { class: "sr-only" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_heart = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("heart")

  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(['vue-heart-rating', {'vue-heart-rating-rtl':$props.rtl}, {'vue-heart-rating-inline': $props.inline}])
  }, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_1, [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "screen-reader", {
        rating: $data.selectedRating,
        hearts: $props.maxRating
      }, () => [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "Rated " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.selectedRating) + " hearts out of " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.maxRating), 1)
      ], true)
    ]),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "vue-heart-rating",
      onMouseleave: _cache[1] || (_cache[1] = (...args) => ($options.resetRating && $options.resetRating(...args)))
    }, [
      ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.maxRating, (n) => {
        return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
          key: n,
          class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)([{'vue-heart-rating-pointer': !$props.readOnly }, 'vue-heart-rating-heart']),
          style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({'margin-right': $options.margin + 'px'})
        }, [
          (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_heart, {
            fill: $data.fillLevel[n-1],
            size: $props.heartSize,
            "heart-id": n,
            step: $data.step,
            "active-color": $options.currentActiveColor,
            "inactive-color": $props.inactiveColor,
            "border-color": $props.borderColor,
            "active-border-color": $options.currentActiveBorderColor,
            "border-width": $props.borderWidth,
            "rounded-corners": $props.roundedCorners,
            rtl: $props.rtl,
            glow: $props.glow,
            "glow-color": $props.glowColor,
            animate: $props.animate,
            onHeartSelected: _cache[0] || (_cache[0] = $event => ($options.setRating($event, true))),
            onHeartMouseMove: $options.setRating
          }, null, 8, ["fill", "size", "heart-id", "step", "active-color", "inactive-color", "border-color", "active-border-color", "border-width", "rounded-corners", "rtl", "glow", "glow-color", "animate", "onHeartMouseMove"])
        ], 6))
      }), 128)),
      ($props.showRating)
        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
            key: 0,
            class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(['vue-heart-rating-rating-text', $props.textClass])
          }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($options.formattedRating), 3))
        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)
    ], 32)
  ], 2))
}
;// ./src/heart-rating.vue?vue&type=template&id=0dd9db4c&scoped=true

;// ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/heart.vue?vue&type=template&id=79a236c4&scoped=true


const heartvue_type_template_id_79a236c4_scoped_true_hoisted_1 = ["height", "width", "viewBox"]
const _hoisted_2 = ["id"]
const _hoisted_3 = ["offset", "stop-color", "stop-opacity"]
const _hoisted_4 = ["offset", "stop-color", "stop-opacity"]
const _hoisted_5 = ["id"]
const _hoisted_6 = ["stdDeviation"]
const _hoisted_7 = ["d", "fill", "stroke", "filter", "stroke-width"]
const _hoisted_8 = ["d", "fill", "stroke", "stroke-width", "stroke-linejoin"]

function heartvue_type_template_id_79a236c4_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("svg", {
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(['vue-heart-rating-heart', {'vue-heart-rating-heart-rotate' : $options.shouldAnimate}]),
    height: $options.heartSize,
    width: $options.heartSize,
    viewBox: $options.viewBox,
    onMousemove: _cache[0] || (_cache[0] = (...args) => ($options.mouseMoving && $options.mouseMoving(...args))),
    onClick: _cache[1] || (_cache[1] = (...args) => ($options.selected && $options.selected(...args))),
    onTouchstart: _cache[2] || (_cache[2] = (...args) => ($options.touchStart && $options.touchStart(...args))),
    onTouchend: _cache[3] || (_cache[3] = (...args) => ($options.touchEnd && $options.touchEnd(...args)))
  }, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("linearGradient", {
      id: $data.grad,
      x1: "0",
      x2: "100%",
      y1: "0",
      y2: "0"
    }, [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("stop", {
        offset: $options.heartFill,
        "stop-color": ($props.rtl) ? $options.getColor($props.inactiveColor) : $options.getColor($props.activeColor),
        "stop-opacity": ($props.rtl) ? $options.getOpacity($props.inactiveColor) : $options.getOpacity($props.activeColor)
      }, null, 8, _hoisted_3),
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("stop", {
        offset: $options.heartFill,
        "stop-color": ($props.rtl) ? $options.getColor($props.activeColor) : $options.getColor($props.inactiveColor),
        "stop-opacity": ($props.rtl) ? $options.getOpacity($props.activeColor) : $options.getOpacity($props.inactiveColor)
      }, null, 8, _hoisted_4)
    ], 8, _hoisted_2),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("filter", {
      id: $data.glowId,
      height: "130%",
      width: "130%",
      filterUnits: "userSpaceOnUse"
    }, [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("feGaussianBlur", {
        stdDeviation: $props.glow,
        result: "coloredBlur"
      }, null, 8, _hoisted_6),
      _cache[4] || (_cache[4] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("feMerge", null, [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("feMergeNode", { in: "coloredBlur" }),
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("feMergeNode", { in: "SourceGraphic" })
      ], -1))
    ], 8, _hoisted_5),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
      d: $data.heartPath,
      fill: $options.gradId,
      stroke: $props.glowColor,
      filter: 'url(#'+$data.glowId+')',
      "stroke-width": $options.border
    }, null, 8, _hoisted_7), [
      [external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $props.glowColor && $props.glow > 0 && $props.fill > 0]
    ]),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
      d: $data.heartPath,
      fill: $options.gradId,
      stroke: $options.getBorderColor,
      "stroke-width": $options.border,
      "stroke-linejoin": $options.strokeLinejoin
    }, null, 8, _hoisted_8)
  ], 42, heartvue_type_template_id_79a236c4_scoped_true_hoisted_1))
}
;// ./src/heart.vue?vue&type=template&id=79a236c4&scoped=true

// EXTERNAL MODULE: ./src/classes/AlphaColor.js
var AlphaColor = __webpack_require__(924);
var AlphaColor_default = /*#__PURE__*/__webpack_require__.n(AlphaColor);
;// ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/heart.vue?vue&type=script&lang=js

  
  
  /* harmony default export */ const heartvue_type_script_lang_js = ({
    name: 'Heart',
    props: {
      fill: {
        type: Number,
        default: 0
      },
      size: {
        type: Number,
        default: 50
      },
      heartId: {
        type: Number,
        required: true
      },
      activeColor: {
        type: String,
        required: true
      },
      inactiveColor: {
        type: String,
        required: true
      },
      borderColor: {
        type: String,
        default: '#000'
      },
      activeBorderColor: {
        type: String,
        default: '#000'
      },
      borderWidth: {
        type: Number,
        default: 0
      },
      roundedCorners: {
        type: Boolean,
        default: false
      },
      rtl: {
        type: Boolean,
        default: false
      },
      glow: {
        type: Number,
        default: 0
      },
      glowColor: {
        type: String,
        default: null,
        required: false
      },
      animate: {
        type: Boolean,
        default: false
      }
    },
    emits: ['heart-mouse-move', 'heart-selected'],
    data() {
      return {
        heartPath: 'M 297.29747 550.86823 C 283.52243 535.43191 249.1268 505.33855 220.86277 483.99412 C 137.11867 420.75228 125.72108 411.5999 91.719238 380.29088 C 29.03471 322.57071 2.413622 264.58086 2.5048478 185.95124 C 2.5493594 147.56739 5.1656152 132.77929 15.914734 110.15398 C 34.151433 71.768267 61.014996 43.244667 95.360052 25.799457 C 119.68545 13.443675 131.6827 7.9542046 172.30448 7.7296236 C 214.79777 7.4947896 223.74311 12.449347 248.73919 26.181459 C 279.1637 42.895777 310.47909 78.617167 316.95242 103.99205 L 320.95052 119.66445 L 330.81015 98.079942 C 386.52632 -23.892986 564.40851 -22.06811 626.31244 101.11153 C 645.95011 140.18758 648.10608 223.6247 630.69256 270.6244 C 607.97729 331.93377 565.31255 378.67493 466.68622 450.30098 C 402.0054 497.27462 328.80148 568.34684 323.70555 578.32901 C 317.79007 589.91654 323.42339 580.14491 297.29747 550.86823 z',
        grad: '',
        glowId: '',
        isHeartActive: true
      };
    },
    computed: {
      gradId() {
        return 'url(#' + this.grad + ')'
      },
      heartSize() {
        const size = (this.roundedCorners && this.borderWidth <= 0) ? parseInt(this.size) - parseInt(this.border) : this.size;
        return parseInt(size) + parseInt(this.border);
      },
      heartFill() {
        return (this.rtl) ? 100 - this.fill + '%' : this.fill + '%';
      },
      border() {
        return (this.roundedCorners && this.borderWidth <= 0) ? 6 : this.borderWidth;
      },
      getBorderColor() {
        if (this.roundedCorners && this.borderWidth <= 0) {
          return (this.fill <= 0) ? this.inactiveColor : this.activeColor;
        }
        return (this.fill <= 0) ? this.borderColor : this.activeBorderColor;
      },
      maxSize() {
        return 700; // Adjust to the original width of the heart path
      },
      viewBox() {
        return '0 0 ' + this.maxSize + ' ' + this.maxSize;
      },
      shouldAnimate() {
        return this.animate && this.isHeartActive;
      },
      strokeLinejoin() {
        return this.roundedCorners ? 'round' : 'miter';
      }
    },
    created() {
      this.grad = this.getRandomId();
      this.glowId = this.getRandomId();
    },
    methods: {
      mouseMoving($event) {
        if ($event.touchAction !== 'undefined') {
          this.$emit('heart-mouse-move', {
            event: $event,
            position: this.getPosition($event),
            id: this.heartId
          });
        }
      },
      touchStart() {
        this.$nextTick(() => {
          this.isHeartActive = true;
        });
      },
      touchEnd() {
        this.$nextTick(() => {
          this.isHeartActive = false;
        });
      },
      getPosition($event) {
        let heartWidth = (92 / 100) * this.size;
        const offset = (this.rtl) ? Math.min($event.offsetX, 45) : Math.max($event.offsetX, 1);
        let position = Math.round((100 / heartWidth) * offset);
        return Math.min(position, 100);
      },
      selected($event) {
        this.$emit('heart-selected', {
          id: this.heartId,
          position: this.getPosition($event)
        });
      },
      getRandomId() {
        return Math.random().toString(36).substring(7);
      },
      getColor(color) {
        return new (AlphaColor_default())(color).parseAlphaColor().color;
      },
      getOpacity(color) {
        return new (AlphaColor_default())(color).parseAlphaColor().opacity;
      }
    }
  });
  
;// ./src/heart.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-52.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[3]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/heart.vue?vue&type=style&index=0&id=79a236c4&scoped=true&lang=css
var heartvue_type_style_index_0_id_79a236c4_scoped_true_lang_css = __webpack_require__(710);
;// ./src/heart.vue?vue&type=style&index=0&id=79a236c4&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(621);
;// ./src/heart.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(heartvue_type_script_lang_js, [['render',heartvue_type_template_id_79a236c4_scoped_true_render],['__scopeId',"data-v-79a236c4"]])

/* harmony default export */ const heart = (__exports__);
;// ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/heart-rating.vue?vue&type=script&lang=js

  /* eslint-disable vue/custom-event-name-casing */
  
  
  /* harmony default export */ const heart_ratingvue_type_script_lang_js = ({
    name: 'VueHeartRating',
    components: {
      Heart: heart
    },
    props: {
      increment: {
        type: Number,
        default: 1
      },
      rating: {
        type: Number,
        default: 0
      },
      roundStartRating: {
        type: Boolean,
        default: true
      },
      activeColor: {
        type: [String, Array],
        default: '#990000'
      },
      inactiveColor: {
        type: String,
        default: '#d8d8d8'
      },
      maxRating: {
        type: Number,
        default: 5
      },
      heartSize: {
        type: Number,
        default: 50
      },
      showRating: {
        type: Boolean,
        default: true
      },
      readOnly: {
        type: Boolean,
        default: false
      },
      textClass: {
        type: String,
        default: ''
      },
      inline: {
        type: Boolean,
        default: false
      },
      borderColor: {
        type: String,
        default: '#999'
      },
      activeBorderColor: {
        type: [String, Array],
        default: null
      },
      borderWidth: {
        type: Number,
        default: 0
      },
      roundedCorners: {
        type: Boolean,
        default: false
      },
      padding: {
        type: Number,
        default: 0
      },
      rtl: {
        type: Boolean,
        default: false
      },
      fixedPoints: {
        type: Number,
        default: null
      },
      glow: {
        type: Number,
        default: 0
      },
      glowColor: {
        type: String,
        default: '#fff'
      },
      clearable: {
        type: Boolean,
        default: false
      },
      activeOnClick: {
        type: Boolean,
        default: false
      },
      animate: {
        type: Boolean,
        default: false
      }
    },
    emits: ['update:rating', 'hover:rating'],
  
    data() {
      return {
        step: 0,
        fillLevel: [],
        currentRating: 0,
        selectedRating: 0,
        ratingSelected: false
      }
    },
    computed: {
      formattedRating() {
        return (this.fixedPoints === null) ? this.currentRating : this.currentRating.toFixed(this.fixedPoints)
      },
      shouldRound() {
        return this.ratingSelected || this.roundStartRating
      },
      margin() {
        return this.padding + this.borderWidth
      },
      activeColors() {
        if (Array.isArray(this.activeColor)) {
          return this.padColors(this.activeColor, this.maxRating, this.activeColor.slice(-1)[0])
        }
  
        return new Array(this.maxRating).fill(this.activeColor)
      },
      currentActiveColor() {
        if (!this.activeOnClick) {
          return (this.currentRating > 0) ? this.activeColors[Math.ceil(this.currentRating) - 1] : this.inactiveColor
  
        }
        return (this.selectedRating > 0) ? this.activeColors[Math.ceil(this.selectedRating) - 1] : this.inactiveColor
      },
      activeBorderColors() {
        if (Array.isArray(this.activeBorderColor)) {
          return this.padColors(this.activeBorderColor, this.maxRating, this.activeBorderColor.slice(-1)[0])
        }
        let borderColor = (this.activeBorderColor) ? this.activeBorderColor : this.borderColor
        return new Array(this.maxRating).fill(borderColor)
      },
      currentActiveBorderColor() {
        if (!this.activeOnClick) {
          return (this.currentRating > 0) ? this.activeBorderColors[Math.ceil(this.currentRating) - 1] : this.borderColor
  
        }
        return (this.selectedRating > 0) ? this.activeBorderColors[Math.ceil(this.selectedRating) - 1] : this.borderColor
      },
      roundedRating() {
        let inv = 1.0 / this.increment
        return Math.min(this.maxRating, Math.ceil(this.currentRating * inv) / inv)
      }
    },
    watch: {
      rating(val) {
        this.currentRating = val
        this.selectedRating = val
        this.createHearts(this.shouldRound)
      }
    },
    created() {
      this.step = this.increment * 100
      this.currentRating = this.rating
      this.selectedRating = this.currentRating
      this.createHearts(this.roundStartRating)
    },
    methods: {
      setRating($event, persist) {
        if (!this.readOnly) {
          const position = (this.rtl) ? (100 - $event.position) / 100 : $event.position / 100
          this.currentRating = (($event.id + position) - 1).toFixed(2)
          this.currentRating = (this.currentRating > this.maxRating) ? this.maxRating : this.currentRating
          if (persist) {
            this.createHearts(true, true)
            this.selectedRating = (this.clearable && this.currentRating === this.selectedRating) ? 0 : this.currentRating
            this.$emit('update:rating', this.selectedRating)
            this.ratingSelected = true
  
          } else {
            this.createHearts(true, !this.activeOnClick)
            this.$emit('hover:rating', this.currentRating)
          }
        }
      },
      resetRating() {
        if (!this.readOnly) {
          this.currentRating = this.selectedRating
          this.createHearts(this.shouldRound)
        }
      },
      createHearts(round = true, applyFill = true) {
        this.currentRating = (round) ? this.roundedRating : this.currentRating
        for (let i = 0; i < this.maxRating; i++) {
          let level = 0
          if (i < this.currentRating) {
            level = (this.currentRating - i > 1) ? 100 : (this.currentRating - i) * 100
          }
          if (applyFill) {
            this.fillLevel[i] = Math.round(level)
          }
        }
      },
      padColors(array, minLength, fillValue) {
        return Object.assign(new Array(minLength).fill(fillValue), array)
      }
    }
  });
  
;// ./src/heart-rating.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-52.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[3]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/heart-rating.vue?vue&type=style&index=0&id=0dd9db4c&scoped=true&lang=css
var heart_ratingvue_type_style_index_0_id_0dd9db4c_scoped_true_lang_css = __webpack_require__(173);
;// ./src/heart-rating.vue?vue&type=style&index=0&id=0dd9db4c&scoped=true&lang=css

;// ./src/heart-rating.vue




;


const heart_rating_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(heart_ratingvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-0dd9db4c"]])

/* harmony default export */ const heart_rating = (heart_rating_exports_);
;// ./src/index.js


/* harmony default export */ const src_0 = (heart_rating);

;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (src_0);


})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=VueHeartRating.umd.js.map
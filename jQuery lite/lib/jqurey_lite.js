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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = (arg) => {
  console.log(arg);
  if(typeof(arg) === "string"){
    let elementList = document.querySelectorAll(arg);
    let elementArray = Array.from(elementList);
    let dnc = new DOMNodeCollection(elementArray);
    return dnc;
  } else if (arg instanceof HTMLElement){
    let dnc = new DOMNodeCollection([arg]);
    return dnc;
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(array){
    this.array = array;
    // this.html = html;
  }


}

DOMNodeCollection.prototype.html = function html(string) {
  if (arguments.length === 0) {
    return this.array[0].innerHTML;
  } else {
    this.array.forEach(function(el) {
      el.innerHTML = string;
      return this;
    });
  }
};

DOMNodeCollection.prototype.empty = function (){
  this.array.forEach(function(el){
    el.innerHTML = "";
  });
};

DOMNodeCollection.prototype.append = function (content){
  if (content instanceof HTMLElement) {
    this.array.forEach(function(el) {
      console.log(el.innerHTML);
      el.innerHTML += content.outerHTML;
    });
  } else {
    this.array.forEach(function(el) {
      console.log(el.innerHTML);
      el.innerHTML += content;
    });
  }
};

DOMNodeCollection.prototype.attr = function(){

};

DOMNodeCollection.prototype.addClass = function(){

};

DOMNodeCollection.prototype.removeClass = function(){

};



module.exports = DOMNodeCollection;


/***/ })
/******/ ]);
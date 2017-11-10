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

const Router = __webpack_require__(1);

let routes = {};

document.addEventListener("DOMContentLoaded", function() {
  let selectorCon = '.content';
  let contentElems = document.querySelector(selectorCon);
  let router = new Router(contentElems, routes);
  router.start();

  let selectorSide = '.sidebar-nav li';
  let sidebarElems = document.querySelectorAll(selectorSide);
  // console.log(contentElems);
  sidebarElems.forEach(function(el){
    el.addEventListener("click", ()=>{
      let location = el.innerText.toLowerCase();
      window.location.hash = location;
    });

  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Router {
  constructor(node, routes) {
    this.node = node;
    // console.log(this.node);
    this.routes = routes;
  }
}

Router.prototype.start = function start() {

  window.addEventListener("hashchange", () => {
    console.log(this);
    this.render();
  });
};

Router.prototype.render = function render() {

  this.node.innerHTML = "";
  let currentRoute = this.activeRoute();
  let newNode = document.createElement("P");
  console.log(newNode);
  newNode.innerHTML = currentRoute;
  console.log(this.node instanceof Node);
  this.node.appendChild(newNode);
};

Router.prototype.activeRoute = function activeRoute() {
  let hashString = window.location.hash;
  return hashString.slice(1);
};


// class Router {
//   constructor(node, routes) {
//     this.node = node;
//     this.routes = routes;
//   }
//
//   start() {
//     this.render();
//     window.addEventListener("hashchange", () => {
//       this.render();
//     });
//   }
//
//   render() {
//     this.node.innerHTML = "";
//     let component = this.activeRoute();
//     if(component) {
//       this.node.appendChild(component.render());
//     }
//   }
//
//   activeRoute() {
//     let hash = window.location.hash.substr(1);
//     let component = this.routes[hash];
//     return component;
//   }
// }
//
// module.exports = Router;


module.exports = Router;


/***/ })
/******/ ]);
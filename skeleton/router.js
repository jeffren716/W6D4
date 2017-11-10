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

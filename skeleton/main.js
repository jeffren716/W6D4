const Router = require("./router");

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

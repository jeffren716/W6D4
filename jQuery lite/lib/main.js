const DOMNodeCollection = require('./dom_node_collection.js');

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

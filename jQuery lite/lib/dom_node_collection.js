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

'use strict';

var app = {

  chars: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'],

  init: function () {
    var container = document.createElement('div');
    document.body.appendChild(container);
    container.className = 'animation-container';
    for ( var i = 0; i < 50; i++ ) {
      var element = document.createElement('span');
      element.className = 'animation-element';
      container.appendChild(element);
      app.animate(element);
    }
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];
    var duration = Math.floor(Math.random() * 15);
    var offset = Math.floor(Math.random() * (30 - duration * 2)) + 3;
    var size = 10 + (15 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size: '+size+'px; animation-duration:'+duration+'s';
    element.innerHTML = character;
    window.setTimeout(function (element) {
      app.animate(element);
    }, duration * 1000, element);
  },

};

document.addEventListener('DOMContentLoaded', app.init);

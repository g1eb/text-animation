"use strict";var app={chars:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],init:function(){window.setInterval(function(){for(var a=0;a<Math.floor(Math.random()*5);a++){var t=document.createElement("span");document.body.appendChild(t);var n=app.chars[Math.floor(Math.random()*app.chars.length)];var o=Math.floor(Math.random()*15);var e=Math.floor(Math.random()*(30-o*2))+3;var r=10+(15-o);t.className="animation";t.style.cssText="right:"+e+"vw; font-size: "+r+"px; animation-duration:"+o+"s";t.innerHTML=n;window.setTimeout(function(a){a.parentNode.removeChild(a)},o*1e3,t)}},250)}};document.addEventListener("DOMContentLoaded",app.init);
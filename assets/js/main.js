!function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";t.r(a);const r=[{url:"./mingau-de-aveia-e-banana.html",image:"./assets/images/mingau-de-aveia-e-banana.jpg",title:"Mingau de aveia e Banana"},{url:"./açai-na-tigela.html",image:"./assets/images/açai-na-tigela.jpg",title:"Açaí na tigela"},{url:"./panqueca-integral.html",image:"./assets/images/panqueca-integral.jpg",title:"Panqueca integral"},{url:"./espaguete-de-abobrinha.html",image:"./assets/images/espaguete-de-abobrinha.jpg",title:"Espaguete de abobrinha"},{url:"./arroz-integral-refrescante.html",image:"./assets/images/arroz-integral-refrescante.jpg",title:"Arroz integral refrescante"},{url:"./batata-rostie-recheada.html",image:"./assets/images/batata-rosti-recheada.jpg",title:"Batata rostie recheada"},{url:"./sopa-de-espinafre.html",image:"./assets/images/sopa-de-espinafre.jpg",title:"Sopa de espinafre"},{url:"./salada-de-abobrinha.html",image:"./assets/images/salada-de-abobrinha.jpg",title:"Salada de abobrinha"}],n=e=>`\n    <div class="recipe">\n      <a href="${e.url}">\n        <div class="recipe-image">\n          <img src="${e.image}">\n        </div>\n        <div class="recipe-title">\n          <h3>${e.title}</h3>\n        </div>\n      </a>\n    </div>\t\t\t\t\t\n    </div>\n    `;for(let e=0;e<r.length;e++){i=".row",l=n(r[e]),document.querySelector(i).innerHTML+=l}var i,l}]);
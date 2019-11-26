!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return v})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return c})),n.d(t,"i",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"h",(function(){return f})),n.d(t,"f",(function(){return p}));var r=n(1),i=n.n(r),o=[],u=function(){return o},c=function(e){return o.find((function(t){return t.id===e}))},a=function(e,t){var n=t.title,r=t.description,i=t.ingredients,o=c(e);o&&(n&&(o.title=n),r&&(o.description=r),i&&(o.ingredients=i)),s()},d=function(){var e={id:i()(),title:"Untitled",description:"Add Recipe Steps...",ingredients:[]};return o.push(e),s(),e.id},l=function(e,t){var n=c(e);if(n){var r=n.ingredients,o=e+i()();return r.push({id:o,name:t,available:!1}),s(),o}},f=function(e,t,n){var r,i=n.available,o=c(e);if(o){var u=(r=t,o.ingredients.find((function(e){return e.id===r})));u&&(u.available=i,s())}},p=function(e,t){var n,r=c(e);if(r){var i=(n=t,r.ingredients.findIndex((function(e){return e.id===n})));i>-1&&(r.ingredients.splice(i,1),s())}},s=function(){localStorage.setItem("recipe-data",JSON.stringify(o))},v=function(){o=[],s()},m=function(e){var t=function(e){return o.findIndex((function(t){return t.id===e}))}(e);t>-1&&(o.splice(t,1),s())};!function(){var e=localStorage.getItem("recipe-data");if(e)try{o=JSON.parse(e)}catch(e){console.log("could not load recipe data from local storage: ".concat(e.message)),o=[],s()}else o=[]}()},function(e,t,n){var r=n(2),i=n(3);e.exports=function(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var u=(e=e||{}).random||(e.rng||r)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,t)for(var c=0;c<16;++c)t[o+c]=u[c];return t||i(u)}},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var i=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,i=n;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},,function(e,t,n){"use strict";n.r(t);var r=n(0),i=function(e,t){var n=document.querySelector(".ingredient-container");n.innerHTML="";var i=document.createElement("table");i.appendChild(function(){var e=document.createElement("tr"),t=document.createElement("th");t.textContent="Available";var n=document.createElement("th");n.textContent="Ingredient";var r=document.createElement("th");return r.textContent="Remove",e.appendChild(t),e.appendChild(n),e.appendChild(r),e}()),t.forEach((function(t){return i.appendChild(function(e,t){var n=document.createElement("tr"),i=document.createElement("td"),u=document.createElement("input");u.type="checkbox",u.checked=t.available,u.addEventListener("change",(function(n){var i=n.target.checked;Object(r.h)(e,t.id,{available:i}),o(e)})),i.appendChild(u);var c=document.createElement("td");c.textContent=t.name;var a=document.createElement("td"),d=document.createElement("button");return d.className="button-ing-delete",d.textContent="remove",d.addEventListener("click",(function(n){Object(r.f)(e,t.id),o(e)})),a.appendChild(d),n.appendChild(i),n.appendChild(c),n.appendChild(a),n}(e,t))})),n.appendChild(i)},o=function(e){var t=Object(r.d)(e);t&&i(t.id,t.ingredients)},u=location.hash.substring(1),c=Object(r.d)(u);c||location.assign("/"),o(u),document.querySelector("#recipe-title-input").value=c.title,document.querySelector("#recipe-steps-area-id").value=c.description,document.querySelector("#recipe-title-input").addEventListener("input",(function(e){var t=e.target.value;Object(r.i)(u,{title:t})})),document.querySelector("#recipe-steps-area-id").addEventListener("input",(function(e){var t=e.target.value;Object(r.i)(u,{description:t})})),document.querySelector("#ingredient-add-button-id").addEventListener("click",(function(e){var t=document.querySelector("#ingredient-input-id").value;t.trim()&&(Object(r.a)(u,t),o(u)),document.querySelector("#ingredient-input-id").value=""})),document.querySelector("#recipe-delete-button-id").addEventListener("click",(function(e){Object(r.g)(u),location.assign("/")})),window.addEventListener("storage",(function(e){var t=e.newValue,n=JSON.parse(t),r=location.hash.substring(1),i=n.find((function(e){return e.id===r}));i||location.assign("/"),o(r),document.querySelector("#recipe-title-input").value=i.title,document.querySelector("#recipe-steps-area-id").value=i.description}))}]);
//# sourceMappingURL=view-bundle.js.map
(this["webpackJsonpsudoku-solver-react.js"]=this["webpackJsonpsudoku-solver-react.js"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),u=(n(14),n(15),n(7)),l=n(3),s=n.n(l),i=n(8),f=n(6);function b(){return[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]]}function m(e,t){return v.apply(this,arguments)}function v(){return(v=Object(f.a)(s.a.mark((function e(t,n){var r,a,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:r=Object(i.a)(t),a=0;case 4:if(!(a<9)){e.next=32;break}o=0;case 6:if(!(o<9)){e.next=29;break}if(0===r[a][o]){e.next=9;break}return e.abrupt("continue",26);case 9:c=1;case 10:if(!(c<=9)){e.next=25;break}if(!k(r,a,o,c)){e.next=22;break}return r[a][o]=c,n(r),e.next=16,m(t,n);case 16:if(!e.sent){e.next=20;break}return e.abrupt("return",!0);case 20:r[a][o]=0,n(r);case 22:c++,e.next=10;break;case 25:return e.abrupt("return",!1);case 26:o++,e.next=6;break;case 29:a++,e.next=4;break;case 32:return e.abrupt("return",!0);case 33:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,n,r){for(var a=0;a<9;a++){if(e[a][n]===r)return!1;if(e[t][a]===r)return!1;if(e[3*Math.floor(t/3)+Math.floor(a/3)][3*Math.floor(n/3)+a%3]===r)return!1}return!0}function p(){return new Promise((function(e){return setTimeout(e,0)}))}var d=function(e){var t=e.row,n=e.col,r=e.value,o="Cell-row".concat(t," Cell-col").concat(n," Cell");return a.a.createElement("td",{className:o},0===r?"":r)},h=function(e){var t=e.board;return a.a.createElement("table",{className:"Board"},a.a.createElement("tbody",null,t.map((function(e,t){return a.a.createElement("tr",{key:t},e.map((function(e,n){return a.a.createElement(d,{key:"".concat(t,"-").concat(n),row:t,col:n,value:e})})))}))))},w=function(){var e=Object(r.useState)(b),t=Object(u.a)(e,2),n=t[0],o=t[1];return a.a.createElement("div",null,a.a.createElement(h,{board:n}),a.a.createElement("button",{onClick:function(){console.log("Solving..."),m(n,o).then((function(e){return console.log(e?"Solved.":"Unsolveable.")}))}},"Solve"),a.a.createElement("button",{onClick:function(){console.log("Resetting..."),o(b),console.log("Reset.")}},"Reset"))},x=function(){return a.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.af44f70c.chunk.js.map
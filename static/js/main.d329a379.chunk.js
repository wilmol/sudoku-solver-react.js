(this["webpackJsonpsudoku-solver-react.js"]=this["webpackJsonpsudoku-solver-react.js"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),u=(n(14),n(3)),i=n.n(u),s=n(7),l=n(6),f=n(8);n(16);function b(){return[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]]}function m(e,t,n,r){for(var a=0;a<9;a++){if(e[a][n]===r)return!1;if(e[t][a]===r)return!1;if(e[3*Math.floor(t/3)+Math.floor(a/3)][3*Math.floor(n/3)+a%3]===r)return!1}return!0}function k(){return new Promise((function(e){return setTimeout(e,0)}))}var p=function(){var e=Object(r.useState)(b),t=Object(f.a)(e,2),n=t[0],o=t[1];function c(){return u.apply(this,arguments)}function u(){return(u=Object(l.a)(i.a.mark((function e(){var t,r,a,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=Object(s.a)(n),r=0;case 4:if(!(r<9)){e.next=32;break}a=0;case 6:if(!(a<9)){e.next=29;break}if(0===t[r][a]){e.next=9;break}return e.abrupt("continue",26);case 9:u=1;case 10:if(!(u<=9)){e.next=25;break}if(!m(t,r,a,u)){e.next=22;break}return t[r][a]=u,o(t),e.next=16,c();case 16:if(!e.sent){e.next=20;break}return e.abrupt("return",!0);case 20:t[r][a]=0,o(t);case 22:u++,e.next=10;break;case 25:return e.abrupt("return",!1);case 26:a++,e.next=6;break;case 29:r++,e.next=4;break;case 32:return e.abrupt("return",!0);case 33:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement("div",null,a.a.createElement("table",{border:"1"},a.a.createElement("tbody",null,n.map((function(e,t){return a.a.createElement("tr",{key:t},e.map((function(e){return a.a.createElement("td",null,0===e?"":e)})))})))),a.a.createElement("button",{onClick:function(){console.log("Solving..."),c().then((function(e){return console.log(e?"Solved.":"Unsolveable.")}))}},"Solve"),a.a.createElement("button",{onClick:function(){console.log("Resetting..."),o(b),console.log("Reset.")}},"Reset"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.d329a379.chunk.js.map
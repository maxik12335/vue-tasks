(function(){"use strict";var t={7152:function(t,r,a){a(6992),a(8674),a(9601),a(7727);var e=a(144),s=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"trackers",on:{dragstart:t.testStart,dragend:t.testEnd,dragover:t.dragover}},[t._m(0),t._m(1),t._m(2)])])])},n=[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"tracker"},[a("div",{staticClass:"tracker__task tracker__task-title"},[t._v("Task 1")]),a("div",{staticClass:"tracker__task",attrs:{draggable:"true"}},[t._v("1")]),a("div",{staticClass:"tracker__task",attrs:{draggable:"true"}},[t._v("2")]),a("div",{staticClass:"tracker__task",attrs:{draggable:"true"}},[t._v("3")])])},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"tracker"},[a("div",{staticClass:"tracker__task tracker__task-title",attrs:{draggable:"true"}},[t._v("Task 2")]),a("div",{staticClass:"tracker__task",attrs:{draggable:"true"}},[t._v("1")]),a("div",{staticClass:"tracker__task",attrs:{draggable:"true"}},[t._v("2")]),a("div",{staticClass:"tracker__task",attrs:{draggable:"true"}},[t._v("3")])])},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"tracker"},[a("div",{staticClass:"tracker__task tracker__task-title",attrs:{draggable:"true"}},[t._v("Task 3")]),a("div",{staticClass:"tracker__task",attrs:{draggable:"true"}},[t._v("1")]),a("div",{staticClass:"tracker__task",attrs:{draggable:"true"}},[t._v("2")]),a("div",{staticClass:"tracker__task",attrs:{draggable:"true"}},[t._v("3")])])}],i={name:"App",methods:{testStart:function(t){t.target.classList.add("test-start")},testEnd:function(t){t.target.classList.remove("test-start")},dragover:function(t){t.preventDefault();var r=document.querySelector(".test-start"),a=t.target,e=r!==a&&a.classList.contains("tracker__task");if(e){var s=a===r.nextElementSibling?a.nextElementSibling:a;s.insertAdjacentElement("beforeBegin",r)}}}},c=i,l=a(1001),o=(0,l.Z)(c,s,n,!1,null,null,null),u=o.exports;e.Z.config.productionTip=!1,new e.Z({render:function(t){return t(u)}}).$mount("#app")}},r={};function a(e){var s=r[e];if(void 0!==s)return s.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(r,e,s,n){if(!e){var i=1/0;for(u=0;u<t.length;u++){e=t[u][0],s=t[u][1],n=t[u][2];for(var c=!0,l=0;l<e.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](e[l])}))?e.splice(l--,1):(c=!1,n<i&&(i=n));if(c){t.splice(u--,1);var o=s();void 0!==o&&(r=o)}}return r}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[e,s,n]}}(),function(){a.d=function(t,r){for(var e in r)a.o(r,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){var t={143:0};a.O.j=function(r){return 0===t[r]};var r=function(r,e){var s,n,i=e[0],c=e[1],l=e[2],o=0;if(i.some((function(r){return 0!==t[r]}))){for(s in c)a.o(c,s)&&(a.m[s]=c[s]);if(l)var u=l(a)}for(r&&r(e);o<i.length;o++)n=i[o],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},e=self["webpackChunktextvue"]=self["webpackChunktextvue"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(7152)}));e=a.O(e)})();
//# sourceMappingURL=app-legacy.3f33aca8.js.map
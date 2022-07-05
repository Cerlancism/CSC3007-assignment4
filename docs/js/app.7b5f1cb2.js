(function(){"use strict";var t={9756:function(t,e,n){var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-card",{class:t.radius},[n("v-toolbar",{attrs:{color:"dark",dark:"",flat:""},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"white"}}),n("v-tab",{attrs:{to:"/"}},[t._v("Home")]),n("v-tab",{attrs:{to:"/about"}},[t._v("About")])],1)]},proxy:!0}])},[n("v-toolbar-title",[t._v("Singapore COVID 19 Force Graph")]),n("v-spacer")],1)],1),n("v-main",[n("router-view")],1)],1)},a=[],i=n(3796),c=n(1929),s=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};let l=class extends c.w3{constructor(...t){super(...t),(0,i.Z)(this,"tab",null),(0,i.Z)(this,"items",["Home","About"]),(0,i.Z)(this,"radius","rounded-0")}};l=s([c.wA],l);var u=l,f=u,d=n(1001),p=n(3453),v=n.n(p),h=n(7524),m=n(26),b=n(7877),g=n(9762),y=n(4227),x=n(5673),w=n(1208),Z=n(5218),k=n(7921),O=(0,d.Z)(f,o,a,!1,null,null,null),V=O.exports;v()(O,{VApp:h.Z,VCard:m.Z,VMain:b.Z,VSpacer:g.Z,VTab:y.Z,VTabs:x.Z,VTabsSlider:w.Z,VToolbar:Z.Z,VToolbarTitle:k.qW});var j=n(8345),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ForceGraph")],1)},M=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"max-width":"1600px"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[n("v-card",[n("svg",{attrs:{id:"forcegraph"}})])],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[n("v-card",[n("v-card-title",[t._v(" Case Details ")]),n("v-card-subtitle",[t._v(" Mouse hover a node to display details ")]),n("v-card-text",[t._v(" P: Partially Vaccinated "),n("br"),t._v(" U: Unvaccinated ")]),n("v-list",{attrs:{dense:""}},t._l(t.focusNode,(function(e,r){return n("v-list-item",{key:r},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.capitalise(r)))]),n("v-list-item-subtitle",[t._v(t._s(e+" "))])],1)],1)})),1)],1)],1)],1)],1)},C=[],P=n(196),A=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};let S=class extends c.w3{constructor(...t){super(...t),(0,i.Z)(this,"focusNode",{id:"",gender:"",age:"",nationality:"",occupation:"",organization:"",date:"",serology:"",vaccinated:""})}capitalise(t){return t.replace(/(\w)(\w*)/g,(function(t,e,n){return e.toUpperCase()+n.toLowerCase()}))}async mounted(){let t=800,e=600;const n=16,r=10;let o=P.Ys("#forcegraph").attr("viewBox","0 0 "+t+" "+e);const[a,i]=await Promise.all([P.AVB("data/links-sample.json"),P.AVB("data/cases-sample.json")]);a.forEach((t=>{t.source=t.infector,t.target=t.infectee})),o.append("defs").selectAll("marker").data(["default"]).enter().append("marker").attr("id",(function(t){return t})).attr("viewBox","0 -5 10 10").attr("refX",0).attr("refY",0).attr("markerWidth",r).attr("markerHeight",r).attr("orient","auto").append("path").attr("d","M0,-5L10,0L0,5");let c=o.append("g").attr("id","links").selectAll("path").data(a).enter().append("path").attr("fill","none").attr("stroke","black").attr("marker-end",(function(t){return"url(#default)"})),s=o.append("g").attr("id","nodes").selectAll("circle").data(i).enter().append("g").on("mouseover",((t,e)=>{P.Ys(t.target).classed("node-hover",!0);for(const n in this.focusNode)Object.prototype.hasOwnProperty.call(this.focusNode,n)&&(this.focusNode[n]=e[n].toString())})).on("mouseout",((t,e)=>{P.Ys(t.target).classed("node-hover",!1);for(const n in this.focusNode)Object.prototype.hasOwnProperty.call(this.focusNode,n)&&(this.focusNode[n]="")})).call(P.ohM().on("start",u).on("drag",f).on("end",d));s.append("circle").attr("r",n).style("fill",(t=>"female"===t.gender?"palevioletred":"steelblue")),s.append("text").attr("text-anchor","middle").attr("dominant-baseline","central").attr("font-size","18px").style("pointer-events","none").text((t=>"no"==t.vaccinated?"N":t.vaccinated.startsWith("partial")?"P":""));let l=P.A4v().nodes(i).force("x",P.RUJ().strength(.1).x(t/2)).force("y",P.Mrm().strength(.1).y(e/2)).force("link",P.Fsl(a).id((t=>t.id))).force("charge",P.q5i().strength(20)).force("collide",P.Hh().strength(.3).radius(3*n)).on("tick",(()=>{s.attr("transform",(t=>"translate("+t.x+","+t.y+")")),c.attr("d",(o=>{const a=o.target.x-o.source.x,i=o.target.y-o.source.y,c=Math.sqrt(a*a+i*i),s=Math.atan2(i,a),l=Math.max(n,Math.min(t-n,o.source.x+Math.cos(s)*n)),u=Math.max(n,Math.min(e-n,o.source.y+Math.sin(s)*n)),f=Math.max(n,Math.min(t-n,o.target.x-Math.cos(s)*(n+r))),d=Math.max(n,Math.min(e-n,o.target.y-Math.sin(s)*(n+r)));return"M"+l+","+u+"A"+c+","+c+" 0 0,1 "+f+","+d}))}));function u(t,e){t.active?console.log("dragstarted event.active",t.active,t):l.alphaTarget(.05).restart(),e.fx=e.x,e.fy=e.y}function f(t,e){e.fx=t.x,e.fy=t.y}function d(t,e){t.active?console.log("dragended event.active",t.active,t):l.alphaTarget(0),e.fx=null,e.fy=null}}};S=A([c.wA],S);var N=S,E=N,R=n(7118),L=n(2102),B=n(9846),F=n(6816),q=n(7620),D=n(8246),I=n(2877),$=(0,d.Z)(E,T,C,!1,null,null,null),H=$.exports;v()($,{VCard:m.Z,VCardSubtitle:R.Qq,VCardText:R.ZB,VCardTitle:R.EB,VCol:L.Z,VContainer:B.Z,VList:F.Z,VListItem:q.Z,VListItemContent:D.km,VListItemSubtitle:D.oZ,VListItemTitle:D.V9,VRow:I.Z});var U=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};let Y=class extends c.w3{async mounted(){}unmounted(){console.log(`unmounted ${this.constructor.name}`)}};Y=U([(0,c.wA)({components:{ForceGraph:H}})],Y);var G=Y,W=G,z=(0,d.Z)(W,_,M,!1,null,null,null),J=z.exports;r.Z.use(j.Z);const Q=[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7454))}],X=new j.Z({routes:Q});var K=X,tt=n(1910);r.Z.use(tt.Z);var et=new tt.Z({});r.Z.config.productionTip=!1,new r.Z({router:K,vuetify:et,render:t=>t(V)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],a=t[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.2baa47a1.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="csc3007-assignment4:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var c,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+a),c.src=r),t[r]=[o];var d=function(e,n){c.onerror=c.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),c=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],c=r[1],s=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},r=self["webpackChunkcsc3007_assignment4"]=self["webpackChunkcsc3007_assignment4"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9756)}));r=n.O(r)})();
//# sourceMappingURL=app.7b5f1cb2.js.map
(function(){"use strict";var t={9756:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-card",{class:t.radius},[n("v-toolbar",{attrs:{color:"dark",dark:"",flat:""},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"white"}}),n("v-tab",{attrs:{to:"/"}},[t._v("Home")]),n("v-tab",{attrs:{to:"/about"}},[t._v("About")])],1)]},proxy:!0}])},[n("v-toolbar-title",[t._v("Singapore COVID 19 Force Graph")]),n("v-spacer")],1)],1),n("v-main",[n("router-view")],1)],1)},a=[],i=n(2751),c=n(6133),u=n(3263),l=n(796),s=n(6035),f=n(3796),d=n(9726),p=(n(5003),n(1539),n(1299),n(2222),n(1929)),v=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,d.Z)(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},h=function(t){(0,l.Z)(n,t);var e=(0,s.Z)(n);function n(){var t;(0,c.Z)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,f.Z)((0,u.Z)(t),"tab",null),(0,f.Z)((0,u.Z)(t),"items",["Home","About"]),(0,f.Z)((0,u.Z)(t),"radius","rounded-0"),t}return(0,i.Z)(n)}(p.w3);h=v([p.wA],h);var m=h,g=m,b=n(1001),y=n(3453),Z=n.n(y),w=n(7524),x=n(26),k=n(7877),O=n(9762),V=n(4227),j=n(5673),_=n(1208),M=n(7688),A=n(7921),T=(0,b.Z)(g,o,a,!1,null,null,null),C=T.exports;Z()(T,{VApp:w.Z,VCard:x.Z,VMain:k.Z,VSpacer:O.Z,VTab:V.Z,VTabs:j.Z,VTabsSlider:_.Z,VToolbar:M.Z,VToolbarTitle:A.qW});n(8783),n(3948);var P=n(8345),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ForceGraph")],1)},S=[],N=n(7906),E=n(6198),L=(n(8309),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"max-width":"1600px"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[n("v-card",[n("svg",{attrs:{id:"forcegraph"}})])],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[n("v-card",[n("v-card-title",[t._v(" Case Details ")]),n("v-card-subtitle",[t._v(" Mouse hover a node to display details ")]),n("v-card-text",[t._v(" P: Partially Vaccinated "),n("br"),t._v(" U: Unvaccinated ")]),n("v-list",{attrs:{dense:""}},t._l(t.focusNode,(function(e,r){return n("v-list-item",{key:r},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.capitalise(r)))]),n("v-list-item-subtitle",[t._v(t._s(e+" "))])],1)],1)})),1)],1)],1)],1)],1)}),B=[],F=n(5200),q=(n(4916),n(5306),n(4747),n(9714),n(6755),n(196)),D=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,d.Z)(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},I=function(t){(0,l.Z)(n,t);var e=(0,s.Z)(n);function n(){var t;(0,c.Z)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,f.Z)((0,u.Z)(t),"focusNode",{id:"",gender:"",age:"",nationality:"",occupation:"",organization:"",date:"",serology:"",vaccinated:""}),t}return(0,i.Z)(n,[{key:"capitalise",value:function(t){return t.replace(/(\w)(\w*)/g,(function(t,e,n){return e.toUpperCase()+n.toLowerCase()}))}},{key:"mounted",value:function(){var t=(0,E.Z)((0,N.Z)().mark((function t(){var e,n,r,o,a,i,c,u,l,s,f,d,p,v,h,m=this;return(0,N.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return h=function(t,e){t.active?console.log("dragended event.active",t.active,t):d.alphaTarget(0),e.fx=null,e.fy=null},v=function(t,e){e.fx=t.x,e.fy=t.y},p=function(t,e){t.active?console.log("dragstarted event.active",t.active,t):d.alphaTarget(.05).restart(),e.fx=e.x,e.fy=e.y},e=800,n=600,r=16,o=10,a=q.Ys("#forcegraph").attr("viewBox","0 0 "+e+" "+n),t.next=9,Promise.all([q.AVB("data/links-sample.json"),q.AVB("data/cases-sample.json")]);case 9:i=t.sent,c=(0,F.Z)(i,2),u=c[0],l=c[1],u.forEach((function(t){t.source=t.infector,t.target=t.infectee})),a.append("defs").selectAll("marker").data(["default"]).enter().append("marker").attr("id",(function(t){return t})).attr("viewBox","0 -5 10 10").attr("refX",0).attr("refY",0).attr("markerWidth",o).attr("markerHeight",o).attr("orient","auto").append("path").attr("d","M0,-5L10,0L0,5"),s=a.append("g").attr("id","links").selectAll("path").data(u).enter().append("path").attr("fill","none").attr("stroke","black").attr("marker-end",(function(t){return"url(#default)"})),f=a.append("g").attr("id","nodes").selectAll("circle").data(l).enter().append("g").on("mouseover",(function(t,e){for(var n in q.Ys(t.target).classed("node-hover",!0),m.focusNode)Object.prototype.hasOwnProperty.call(m.focusNode,n)&&(m.focusNode[n]=e[n].toString())})).on("mouseout",(function(t,e){for(var n in q.Ys(t.target).classed("node-hover",!1),m.focusNode)Object.prototype.hasOwnProperty.call(m.focusNode,n)&&(m.focusNode[n]="")})).call(q.ohM().on("start",p).on("drag",v).on("end",h)),f.append("circle").attr("r",r).style("fill",(function(t){return"female"===t.gender?"palevioletred":"steelblue"})),f.append("text").attr("text-anchor","middle").attr("dominant-baseline","central").attr("font-size","18px").style("pointer-events","none").text((function(t){return"no"==t.vaccinated?"N":t.vaccinated.startsWith("partial")?"P":""})),d=q.A4v().nodes(l).force("x",q.RUJ().strength(.1).x(e/2)).force("y",q.Mrm().strength(.1).y(n/2)).force("link",q.Fsl(u).id((function(t){return t.id}))).force("charge",q.q5i().strength(20)).force("collide",q.Hh().strength(.3).radius(3*r)).on("tick",(function(){f.attr("transform",(function(t){return"translate("+t.x+","+t.y+")"})),s.attr("d",(function(t){var a=t.target.x-t.source.x,i=t.target.y-t.source.y,c=Math.sqrt(a*a+i*i),u=Math.atan2(i,a),l=Math.max(r,Math.min(e-r,t.source.x+Math.cos(u)*r)),s=Math.max(r,Math.min(n-r,t.source.y+Math.sin(u)*r)),f=Math.max(r,Math.min(e-r,t.target.x-Math.cos(u)*(r+o))),d=Math.max(r,Math.min(n-r,t.target.y-Math.sin(u)*(r+o)));return"M"+l+","+s+"A"+c+","+c+" 0 0,1 "+f+","+d}))}));case 20:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(p.w3);I=D([p.wA],I);var H=I,U=H,Y=n(7118),$=n(2102),G=n(9846),W=n(6816),z=n(7620),J=n(8246),Q=n(2877),X=(0,b.Z)(U,L,B,!1,null,null,null),K=X.exports;Z()(X,{VCard:x.Z,VCardSubtitle:Y.Qq,VCardText:Y.ZB,VCardTitle:Y.EB,VCol:$.Z,VContainer:G.Z,VList:W.Z,VListItem:z.Z,VListItemContent:J.km,VListItemSubtitle:J.oZ,VListItemTitle:J.V9,VRow:Q.Z});var tt=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,d.Z)(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},et=function(t){(0,l.Z)(n,t);var e=(0,s.Z)(n);function n(){return(0,c.Z)(this,n),e.apply(this,arguments)}return(0,i.Z)(n,[{key:"mounted",value:function(){var t=(0,E.Z)((0,N.Z)().mark((function t(){return(0,N.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return");case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"unmounted",value:function(){console.log("unmounted ".concat(this.constructor.name))}}]),n}(p.w3);et=tt([(0,p.wA)({components:{ForceGraph:K}})],et);var nt=et,rt=nt,ot=(0,b.Z)(rt,R,S,!1,null,null,null),at=ot.exports;r.Z.use(P.Z);var it=[{path:"/",name:"home",component:at},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,7454))}}],ct=new P.Z({routes:it}),ut=ct,lt=n(5613);r.Z.use(lt.Z);var st=new lt.Z({});r.Z.config.productionTip=!1,new r.Z({router:ut,vuetify:st,render:function(t){return t(C)}}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],a=t[s][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about-legacy.9950877a.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="csc3007-assignment4:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var c,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+a),c.src=r),t[r]=[o];var d=function(e,n){c.onerror=c.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),c=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],c=r[1],u=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var s=u(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(s)},r=self["webpackChunkcsc3007_assignment4"]=self["webpackChunkcsc3007_assignment4"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9756)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.91c1d9d2.js.map
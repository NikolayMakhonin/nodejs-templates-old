import{a as t,b as e,c as n,d as r,e as a,f as o,g as s,h as i,i as c,j as l,k as u,l as f,m as h,n as p,o as d,p as m}from"./chunk.accfd0f1.js";function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(e){var f,h,p,d,m,g,v,_,y,b,E,S,P,R,j,A,C;if(n(this,e),this._state=t({undefined:void 0},e.data),this._intro=!0,this._fragment=(f=this._state,{c:function(){h=r("nav"),p=r("ul"),d=r("li"),m=r("a"),g=a("home"),_=a("\n\t\t"),y=r("li"),b=r("a"),E=a("about"),P=a("\n\n\t\t\n\t\t"),R=r("li"),j=r("a"),A=a("blog"),this.h()},l:function(t){h=o(t,"NAV",{class:!0},!1);var e=s(h);p=o(e,"UL",{class:!0},!1);var n=s(p);d=o(n,"LI",{class:!0},!1);var r=s(d);m=o(r,"A",{class:!0,href:!0},!1);var a=s(m);g=i(a,"home"),a.forEach(c),r.forEach(c),_=i(n,"\n\t\t"),y=o(n,"LI",{class:!0},!1);var l=s(y);b=o(l,"A",{class:!0,href:!0},!1);var u=s(b);E=i(u,"about"),u.forEach(c),l.forEach(c),P=i(n,"\n\n\t\t\n\t\t"),R=o(n,"LI",{class:!0},!1);var f=s(R);j=o(f,"A",{rel:!0,class:!0,href:!0},!1);var v=s(j);A=i(v,"blog"),v.forEach(c),f.forEach(c),n.forEach(c),e.forEach(c),this.h()},h:function(){m.className=v=(f.segment===f.undefined?"selected":"")+" svelte-18u57i1",m.href="",d.className="svelte-18u57i1",b.className=S=("about"===f.segment?"selected":"")+" svelte-18u57i1",b.href="about",y.className="svelte-18u57i1",j.rel="prefetch",j.className=C=("blog"===f.segment?"selected":"")+" svelte-18u57i1",j.href="blog",R.className="svelte-18u57i1",p.className="svelte-18u57i1",h.className="svelte-18u57i1"},m:function(t,e){l(t,h,e),u(h,p),u(p,d),u(d,m),u(m,g),u(p,_),u(p,y),u(y,b),u(b,E),u(p,P),u(p,R),u(R,j),u(j,A)},p:function(t,e){(t.segment||t.undefined)&&v!==(v=(e.segment===e.undefined?"selected":"")+" svelte-18u57i1")&&(m.className=v),t.segment&&S!==(S=("about"===e.segment?"selected":"")+" svelte-18u57i1")&&(b.className=S),t.segment&&C!==(C=("blog"===e.segment?"selected":"")+" svelte-18u57i1")&&(j.className=C)},d:function(t){t&&c(h)}}),e.target){var L=s(e.target);e.hydrate?this._fragment.l(L):this._fragment.c(),L.forEach(c),this._mount(e.target,e.anchor)}}function _(e){if(n(this,e),this._state=t({},e.data),this._intro=!0,this._fragment=function(e,n){var u,h,p={segment:n.child.segment},d=new v({root:e.root,store:e.store,data:p}),m=[n.child.props],g=n.child.component;function _(n){for(var r={},a=0;a<m.length;a+=1)r=t(r,m[a]);return{root:e.root,store:e.store,data:r}}if(g)var y=new g(_());return{c:function(){d._fragment.c(),u=a("\n\n"),h=r("main"),y&&y._fragment.c(),this.h()},l:function(t){d._fragment.l(t),u=i(t,"\n\n"),h=o(t,"MAIN",{class:!0},!1);var e=s(h);y&&y._fragment.l(e),e.forEach(c),this.h()},h:function(){h.className="svelte-1uhnsl8"},m:function(t,e){d._mount(t,e),l(t,u,e),l(t,h,e),y&&y._mount(h,null)},p:function(t,e){var n={};t.child&&(n.segment=e.child.segment),d._set(n);var r=t.child?f(m,[e.child.props]):{};g!==(g=e.child.component)?(y&&y.destroy(),g?((y=new g(_()))._fragment.c(),y._mount(h,null)):y=null):g&&y._set(r)},d:function(t){d.destroy(t),t&&(c(u),c(h)),y&&y.destroy()}}}(this,this._state),e.target){var u=s(e.target);e.hydrate?this._fragment.l(u):this._fragment.c(),u.forEach(c),this._mount(e.target,e.anchor),h(this)}}t(v.prototype,e),t(_.prototype,e);var y=!1;function b(t,e){var n,f,h,m,g,v,_,b,E,S=e.error.message;document.title=n=e.status;var P=y&&e.error.stack&&function(t,e){var n,f,h=e.error.stack;return{c:function(){n=r("pre"),f=a(h)},l:function(t){n=o(t,"PRE",{},!1);var e=s(n);f=i(e,h),e.forEach(c)},m:function(t,e){l(t,n,e),u(n,f)},p:function(t,e){t.error&&h!==(h=e.error.stack)&&d(f,h)},d:function(t){t&&c(n)}}}(0,e);return{c:function(){f=a("\n\n"),h=r("h1"),m=a(e.status),g=a("\n\n"),v=r("p"),_=a(S),b=a("\n\n"),P&&P.c(),E=p(),this.h()},l:function(t){f=i(t,"\n\n"),h=o(t,"H1",{class:!0},!1);var n=s(h);m=i(n,e.status),n.forEach(c),g=i(t,"\n\n"),v=o(t,"P",{class:!0},!1);var r=s(v);_=i(r,S),r.forEach(c),b=i(t,"\n\n"),P&&P.l(t),E=p(),this.h()},h:function(){h.className="svelte-8od9u6",v.className="svelte-8od9u6"},m:function(t,e){l(t,f,e),l(t,h,e),u(h,m),l(t,g,e),l(t,v,e),u(v,_),l(t,b,e),P&&P.m(t,e),l(t,E,e)},p:function(t,e){t.status&&n!==(n=e.status)&&(document.title=n),t.status&&d(m,e.status),t.error&&S!==(S=e.error.message)&&d(_,S),P&&(P.d(1),P=null)},d:function(t){t&&(c(f),c(h),c(g),c(v),c(b)),P&&P.d(t),t&&c(E)}}}function E(e){if(n(this,e),this._state=t({},e.data),this._intro=!0,this._fragment=b(0,this._state),e.target){var r=s(e.target);e.hydrate?this._fragment.l(r):this._fragment.c(),r.forEach(c),this._mount(e.target,e.anchor)}}t(E.prototype,e);var S,P,R,j,A,C,L,N=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],w=[{js:function(){return import("./chunk.49c7d69b.js")},css:["chunk.49c7d69b.css"]},{js:function(){return import("./chunk.9f5adf05.js")},css:[]},{js:function(){return import("./chunk.5dae6f8b.js")},css:["chunk.5dae6f8b.css"]},{js:function(){return import("./chunk.bdea9803.js")},css:["chunk.bdea9803.css"]}],q=(S=decodeURIComponent,[{pattern:/^\/?$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[null,{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:function(t){return{slug:S(t[1])}}}]}]),O=!1,U=[],k={path:null,params:null,query:null,child:{segment:null,component:null,props:{}}},x=null;var I,D=1;var $,H,T,V,K="undefined"!=typeof __SAPPER__&&__SAPPER__,B="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},J={};function G(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(K.baseUrl))return null;var e=t.pathname.slice(K.baseUrl.length);if(!N.some(function(t){return t.test(e)}))for(var n=0;n<q.length;n+=1){var r=q[n],a=r.pattern.exec(e);if(a){var o=function(){var n=Object.create(null);return t.search.length>0&&t.search.slice(1).split("&").forEach(function(t){var e=g(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t)),3),r=e[1],a=e[2];a=(a||"").replace(/\+/g," "),"string"==typeof n[r]&&(n[r]=[n[r]]),"object"===m(n[r])?n[r].push(a):n[r]=a}),{v:{url:t,path:e,page:r,match:a,query:n}}}();if("object"===m(o))return o.v}}}function M(){return{x:pageXOffset,y:pageYOffset}}function W(t,e,n,r){if(e)I=e;else{var a=M();J[I]=a,e=I=++D,J[I]=n?a:{x:0,y:0}}I=e,P&&P.set({preloading:!0});var o=x&&x.href===t.url.href?x.promise:Y(t);x=null;var s=R={};return o.then(function(t){var a=t.redirect,o=t.data,i=t.nullable_depth;if(a)return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=G(new URL(t,document.baseURI));return n?(B[e.replaceState?"replaceState":"pushState"]({id:I},"",t),W(n,null).then(function(){})):(location.href=t,new Promise(function(t){}))}(a.location,{replaceState:!0});X(o,i,J[e],n,r,s),document.activeElement&&document.activeElement.blur()})}function X(t,e,n,r,a,o){if(R===o){if(P){for(var s=t.child,i=0;i<e&&i!==e;i+=1)s=s.props.child;var c=s.component;s.component=null,P.set({child:t.child}),s.component=c,P.set(t)}else{var l=document.querySelector("#sapper-head-start"),u=document.querySelector("#sapper-head-end");if(l&&u){for(;l.nextSibling!==u;)F(l.nextSibling);F(l),F(u)}Object.assign(t,A),P=new _({target:L,data:t,store:C,hydrate:!0})}if(!r){if(a){var f=document.querySelector(a);f&&(n={x:0,y:f.getBoundingClientRect().top})}J[I]=n,n&&scrollTo(n.x,n.y)}Object.assign(k,t),O=!0}}function Y(t){for(var e=t.page,n=t.path,r=t.query,a=n.split("/").filter(Boolean),o=0;U[o]&&a[o]&&U[o]===a[o];)o+=1;var s=null,i=null,c={store:C,fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:function(t,e){i={statusCode:t,message:e}}};return j||(j=_.preload?K.preloaded[0]||_.preload.call(c,{path:n,query:r,params:{}}):{}),Promise.all(e.parts.map(function(e,a){return a<o?null:e?(s=w[e.i],i="string"==typeof s.css?[]:s.css.map(z),i.unshift(s.js()),Promise.all(i).then(function(t){return t[0].default})).then(function(o){var s,i={path:n,query:r,params:e.params?e.params(t.match):{}};return s=O||!K.preloaded[a+1]?o.preload?o.preload.call(c,i):{}:K.preloaded[a+1],Promise.resolve(s).then(function(t){return{Component:o,preloaded:t}})}):null;var s,i})).catch(function(t){return i={statusCode:500,message:t},[]}).then(function(t){return A?t:Promise.resolve(j).then(function(e){return A=e,t})}).then(function(c){if(s)return{redirect:s};U=a;var l=(e.parts[e.parts.length-1].params||function(){return{}})(t.match);if(i){var u={path:n,query:r,params:l,error:"string"==typeof i.message?new Error(i.message):i.message,status:i.statusCode};return{data:Object.assign({},u,{preloading:!1,child:{component:E,props:u}})}}var f={path:n,query:r,error:null,status:null},h={path:n,preloading:!1,child:Object.assign({},k.child,{segment:U[0]})};Q(r,k.query)&&(h.query=r),Q(l,k.params)&&(h.params=l);for(var p=h.child,d=0,m=0;m<e.parts.length;m+=1){var g=e.parts[m];if(g){var v=g.params||function(){return{}};m<o?(p.props.path=n,p.props.query=r,p.props.child=Object.assign({},p.props.child),d+=1):(p.component=c[m].Component,p.props=Object.assign({},p.props,f,{params:v(t.match)},c[m].preloaded),p.props.child={}),(p=p.props.child).segment=U[m+1]}}return{data:h,nullable_depth:d}})}function z(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)})}function F(t){t.parentNode.removeChild(t)}function Q(t,e){return JSON.stringify(t)!==JSON.stringify(e)}function Z(t){var e=G(new URL(t,document.baseURI));if(e)return x&&t===x.href||function(t,e){x={href:t,promise:e}}(t,Y(e)),x.promise}function tt(t){clearTimeout($),$=setTimeout(function(){et(t)},20)}function et(t){var e=rt(t.target);e&&"prefetch"===e.rel&&Z(e.href)}function nt(t){if(1===function(t){return null===t.which?t.button:t.which}(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=rt(t.target);if(e&&e.href){var n="object"===m(e.href)&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&(n?!e.target.baseVal:!e.target)){var a=new URL(r);if(a.pathname!==location.pathname||a.search!==location.search){var o=G(a);if(o)W(o,null,e.hasAttribute("sapper-noscroll"),a.hash),t.preventDefault(),B.pushState({id:I},"",a.href)}}}else location.hash||t.preventDefault()}}}function rt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function at(t){if(J[I]=M(),t.state){var e=G(new URL(location.href));e?W(e,t.state.id):location.href=location.href}else(function(t){I=t})(D=D+1),B.replaceState({id:I},"",location.href)}H={target:document.querySelector("#sapper")},"scrollRestoration"in B&&(B.scrollRestoration="manual"),T=H.target,L=T,H.store&&(V=H.store,C=V(K.store)),addEventListener("click",nt),addEventListener("popstate",at),addEventListener("touchstart",et),addEventListener("mousemove",tt),Promise.resolve().then(function(){var t=location,e=t.hash,n=t.href;if(B.replaceState({id:D},"",n),!K.error){var r=G(new URL(location.href));if(r)return W(r,D,!1,e)}});
//# sourceMappingURL=client.a71a9e74.js.map

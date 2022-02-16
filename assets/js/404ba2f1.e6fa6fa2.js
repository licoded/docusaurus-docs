"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[23],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5766:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"\u5b9a\u4f4d\u5230\u67d0\u6b21\u63d0\u4ea4",slug:"/git/specify",sidebar_label:"\u5b9a\u4f4d\u5230\u67d0\u6b21\u63d0\u4ea4"},l=void 0,p={unversionedId:"git/specify-one-commit",id:"git/specify-one-commit",title:"\u5b9a\u4f4d\u5230\u67d0\u6b21\u63d0\u4ea4",description:"--root",source:"@site/docs/git/specify-one-commit.md",sourceDirName:"git",slug:"/git/specify",permalink:"/docs/git/specify",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git/specify-one-commit.md",tags:[],version:"current",frontMatter:{title:"\u5b9a\u4f4d\u5230\u67d0\u6b21\u63d0\u4ea4",slug:"/git/specify",sidebar_label:"\u5b9a\u4f4d\u5230\u67d0\u6b21\u63d0\u4ea4"},sidebar:"git",previous:{title:"\u6982\u8ff0",permalink:"/docs/git"},next:{title:"git rebase",permalink:"/docs/git/rebase"}},u=[{value:"<code>--root</code>",id:"--root",children:[],level:3},{value:"<code>~</code>",id:"",children:[],level:3}],s={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"--root"},(0,o.kt)("inlineCode",{parentName:"h3"},"--root")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"git rebase -i --root")," \u6765\u5b9a\u4f4d\u5230\u5f53\u524d\u5206\u652f\u7684\u6839\u63d0\u4ea4(\u7a7a\u767d\u63d0\u4ea4\uff0c\u4e0d\u542b\u7b2c\u4e00\u6b21\u63d0\u4ea4)")),(0,o.kt)("h3",{id:""},(0,o.kt)("inlineCode",{parentName:"h3"},"~")),(0,o.kt)("p",null,"\u76f8\u5bf9\u5b9a\u4f4d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"<commit-id>~")," \u8868\u793a \u524d\u4e00\u6b21\u63d0\u4ea4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"<commit-id>~<num>")," \u8868\u793a\u524d\u7b2c ",(0,o.kt)("strong",{parentName:"p"},"num")," \u6b21\u63d0\u4ea4"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u95ee\u9898\u8bb0\u5f55")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5b9e\u8df5\u4e2d\uff0c\u5f53num\u6bd4\u8f83\u5927\u65f6\uff0c\u6bd4\u59828\u621613\u8fd9\u6837\u5927\u65f6\uff0c\u597d\u50cf\u8fd9\u79cd\u76f8\u5bf9\u5b9a\u4f4d\u5e76\u4e0d\u51c6\u786e\uff08\u8fd8\u9700\u8fdb\u4e00\u6b65\u9a8c\u8bc1\uff09"))))}m.isMDXComponent=!0}}]);
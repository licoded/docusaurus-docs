"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[604],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(g,o(o({ref:t},m),{},{components:r})):n.createElement(g,o({ref:t},m))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7735:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={title:"git rebase \u8ba9\u63d0\u4ea4\u8bb0\u5f55\u66f4\u7b80\u6d01",slug:"/git/rebase",sidebar_label:"git rebase"},l=void 0,s={unversionedId:"git/git-rebase",id:"git/git-rebase",title:"git rebase \u8ba9\u63d0\u4ea4\u8bb0\u5f55\u66f4\u7b80\u6d01",description:"\u6559\u7a0b\u63a8\u8350",source:"@site/docs/git/git-rebase.md",sourceDirName:"git",slug:"/git/rebase",permalink:"/docs/git/rebase",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git/git-rebase.md",tags:[],version:"current",frontMatter:{title:"git rebase \u8ba9\u63d0\u4ea4\u8bb0\u5f55\u66f4\u7b80\u6d01",slug:"/git/rebase",sidebar_label:"git rebase"},sidebar:"git",previous:{title:"\u5b9a\u4f4d\u5230\u67d0\u6b21\u63d0\u4ea4",permalink:"/docs/git/specify"},next:{title:"git cherry-pick",permalink:"/docs/git/cherry-pick"}},m=[{value:"\u6559\u7a0b\u63a8\u8350",id:"\u6559\u7a0b\u63a8\u8350",children:[],level:3},{value:"\u7528\u9014",id:"\u7528\u9014",children:[],level:3},{value:"\u4ea4\u4e92\u5f0frebase",id:"\u4ea4\u4e92\u5f0frebase",children:[],level:3}],u={toc:m};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u6559\u7a0b\u63a8\u8350"},"\u6559\u7a0b\u63a8\u8350"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903839221432328"},"\u57fa\u4e8eGit rebase\u4fee\u6539\u5386\u53f2\u63d0\u4ea4\u4fe1\u606f"))),(0,a.kt)("h3",{id:"\u7528\u9014"},"\u7528\u9014"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u5386\u53f2\u63d0\u4ea4\u7684\u5185\u5bb9\u3001\u6ce8\u91ca\u3001\u4f5c\u8005\u4fe1\u606f\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u5408\u5e76\u591a\u6b21\u63d0\u4ea4"),(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664\u4e00\u6b21\u6216\u591a\u6b21\u63d0\u4ea4"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u6301\u7ebf\u6027\u63d0\u4ea4\u5386\u53f2")),(0,a.kt)("h3",{id:"\u4ea4\u4e92\u5f0frebase"},"\u4ea4\u4e92\u5f0frebase"),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"git reabse -i <commit-id>")," \u5c31\u4f1a\u6253\u5f00\u7f16\u8f91\u5668\uff0c\u5728\u8fd9\u91cc\u53ef\u4ee5\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u4e0d\u9700\u8981\u7684\u63d0\u4ea4"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u63d0\u4ea4\u8bb0\u5f55\u91cd\u65b0\u6392\u5e8f"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u9009\u62e9\u7684\u6bcf\u4e2a\u63d0\u4ea4\u6307\u5b9a\u547d\u4ee4(\u7b56\u7565)")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u652f\u6301\u7684\u547d\u4ee4")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4e0b\u9762\u662f\u6240\u6709\u652f\u6301\u7684\u547d\u4ee4\u5217\u8868\u4ee5\u53ca\u5bf9\u5e94\u7684\u82f1\u6587\u89e3\u91ca"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Commands:\n# p, pick <commit> = use commit\n# r, reword <commit> = use commit, but edit the commit message\n# e, edit <commit> = use commit, but stop for amending\n# s, squash <commit> = use commit, but meld into previous commit\n# f, fixup <commit> = like \"squash\", but discard this commit's log message\n# x, exec <command> = run command (the rest of the line) using shell\n# b, break = stop here (continue rebase later with 'git rebase --continue')\n# d, drop <commit> = remove commit\n# l, label <label> = label current HEAD with a name\n# t, reset <label> = reset HEAD to a label\n# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]\n# .       create a merge commit using the original merge commit's\n# .       message (or the oneline, if no original merge commit was\n# .       specified). Use -c <commit> to reword the commit message.\n#\n# These lines can be re-ordered; they are executed from top to bottom.\n")))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkgatsby_starter_apple=self.webpackChunkgatsby_starter_apple||[]).push([[691],{1225:function(e,t,a){a.r(t),a.d(t,{HashtagContainer:function(){return G},ThumbnailWrapper:function(){return D},default:function(){return H}});var n=a(5785),i=a(7294),r=a(9),o=a(6125),l=a(6968),c=a(9477),s=a(9624),d=a(7949),m=a(5444),g=function(e){var t=e.src,a=e.alt,n=(0,m.useStaticQuery)("48878111"),r=(0,i.useMemo)((function(){var e=n.allImageSharp.edges.find((function(e){return e.node.id===t}));return null==e?void 0:e.node.gatsbyImageData}),[t,n.allImageSharp.edges]);return i.createElement(u,null,i.createElement(p,null,i.createElement(o.G,{image:r,loading:"eager",alt:null!=a?a:"Thumbnail Image"})))},u=r.default.div.withConfig({displayName:"centeredImg__ThumbnailWrapper",componentId:"sc-ku254p-0"})(['position:relative;width:100%;&::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--color-dimmed);transition:0.3s ease;}']),p=r.default.div.withConfig({displayName:"centeredImg__InnerWrapper",componentId:"sc-ku254p-1"})(["overflow:hidden;"]),f=i.memo(g),h=function(e){var t=e.thumbnail,a=e.alt,n=e.category,r=e.title,o=e.desc;e.date,e.link;return i.createElement(b,null,i.createElement(f,{src:t,alt:a}),i.createElement(v,null,i.createElement("div",null,i.createElement(d.Z,null,n),i.createElement(w,null,r),i.createElement(y,null,o))))},b=r.default.div.withConfig({displayName:"card__Wrapper",componentId:"sc-nx3lqc-0"})(["position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;border-radius:var(--border-radius-base);background-color:var(--color-card);transform:translateZ(0);"]),v=r.default.div.withConfig({displayName:"card__Text",componentId:"sc-nx3lqc-1"})(["display:flex;flex-direction:column;flex:1 1 auto;justify-content:space-between;padding:var(--sizing-md);& > *{display:block;}"]),w=r.default.h3.withConfig({displayName:"card__Title",componentId:"sc-nx3lqc-2"})(["margin-top:var(--sizing-xs);font-size:var(--text-lg);font-weight:var(--font-weight-bold);line-height:1.3;@media (max-width:","){font-size:1.3125rem;}@media (max-width:","){font-size:var(--text-md);}"],(function(e){return e.theme.device.md}),(function(e){return e.theme.device.sm})),y=r.default.p.withConfig({displayName:"card__Desc",componentId:"sc-nx3lqc-3"})(["line-height:1.5;margin-top:8px;padding-bottom:var(--sizing-sm);color:var(--color-text-2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;overflow:hidden;text-overflow:ellipsis;"]),x=i.memo(h),_=function(e){var t=e.posts,a=e.scrollEdgeRef,r=e.maxPostNum,o=void 0===r?10:r,l=e.offsetY,c=void 0===l?400:l,s=(0,i.useState)(!1),d=s[0],m=s[1],g=(0,i.useState)([]),u=g[0],p=g[1],f=(0,i.useState)(!1),h=f[0],b=f[1],v=(0,i.useState)(!1),w=v[0],y=v[1],x=(0,i.useRef)();return(0,i.useLayoutEffect)((function(){t.length&&!h&&(m(t.length>o),p((0,n.Z)(t.slice(0,o))),b(!0))}),[h,t,o]),(0,i.useEffect)((function(){var e=a.current,i={rootMargin:"0px 0px "+c+"px 0px",threshold:[0]};return x.current=new IntersectionObserver((function(e){d&&e.forEach((function(e){var a,i,r;w?e.isIntersecting&&(a=u.length,i=a<t.length,r=i?t.slice(a,a+o):[],m(i),p([].concat((0,n.Z)(u),(0,n.Z)(r)))):y(!0)}))}),i),x.current.observe(e),function(){return x.current&&x.current.disconnect()}})),u},E=r.default.ul.withConfig({displayName:"postGrid__Grid",componentId:"sc-14uqf8l-0"})(["display:grid;grid-gap:var(--grid-gap-xl);grid-template-columns:repeat(2,1fr);list-style:none;& > li{margin:0 auto;}@media (max-width:","){grid-gap:var(--grid-gap-lg);}"],(function(e){return e.theme.device.sm})),k=r.default.li.withConfig({displayName:"postGrid__List",componentId:"sc-14uqf8l-1"})(["box-sizing:border-box;grid-column:span 1;a{display:block;height:100%;}a:hover ","::after,a:focus ","::after{opacity:1;}& .gatsby-image-wrapper{transition:opacity 1s ease-out,transform 0.5s ease;}a:hover,a:focus{.gatsby-image-wrapper{transform:scale(1.03);}}@media (max-width:","){grid-column:span 2;}"],u,u,(function(e){return e.theme.device.sm})),I=function(e){var t=e.posts,a=(0,i.useRef)(null),n=_({posts:t,scrollEdgeRef:a,maxPostNum:10,offsetY:200});return i.createElement(E,{role:"list"},n.map((function(e){var t=e.id,a=(e.slug,e.title),n=e.desc,r=e.date,o=e.category,l=e.thumbnail,c=e.alt,s=e.link;return i.createElement(k,{key:t,role:"listitem"},i.createElement("a",{href:null!=s?s:"",target:"_blank"},i.createElement(x,{thumbnail:l,alt:c,category:o,title:a,desc:n,date:r,link:s})))})),i.createElement("div",{ref:a}))},z=a(4656),C=a(768),N=(0,r.default)(z.Z).attrs({as:"main"}).withConfig({displayName:"indexText__Container",componentId:"sc-11sx9bo-0"})(["margin-top:20px;margin-bottom:4rem;font-weight:600;@media (max-width:","){margin-top:var(--sizing-xl);}h1{margin-bottom:2rem;}h2{margin-top:var(--sizing-lg);@media (max-width:","){font-size:1.75rem;}}h3{@media (max-width:","){font-size:1.25rem;}}"],(function(e){return e.theme.device.sm}),(function(e){return e.theme.device.sm}),(function(e){return e.theme.device.sm})),S=function(){var e=(0,m.useStaticQuery)("2316726977").allMarkdownRemark.edges[0].node.html;return i.createElement(N,{dangerouslySetInnerHTML:{__html:null!=e?e:""},rhythm:C.q})},T=r.default.main.withConfig({displayName:"pages__Main",componentId:"sc-1891g3r-0"})(["min-width:var(--min-width);min-height:calc(100vh - var(--nav-height) - var(--footer-height));background-color:var(--color-background);"]),Z=r.default.div.withConfig({displayName:"pages__Content",componentId:"sc-1891g3r-1"})(["box-sizing:content-box;width:87.5%;max-width:var(--width);padding-top:var(--sizing-lg);padding-bottom:var(--sizing-lg);margin:0 auto;font-weight:600;@media (max-width:","){padding-top:var(--grid-gap-lg);width:87.5%;}"],(function(e){return e.theme.device.sm})),q=r.default.h2.withConfig({displayName:"pages__PostTitle",componentId:"sc-1891g3r-2"})(["font-size:1.5rem;font-weight:var(--font-weight-extra-bold);margin-bottom:var(--sizing-md);line-height:1.21875;color:#FED001;@media (max-width:","){font-size:1.75rem;}"],(function(e){return e.theme.device.sm})),L=r.default.h3.withConfig({displayName:"pages__Title",componentId:"sc-1891g3r-3"})(["margin-top:var(--sizing-xs);margin-bottom:var(--sizing-lg);font-size:var(--text-lg);font-weight:var(--font-weight-bold);line-height:1.3;text-align:center;font-size:30px;@media (max-width:","){font-size:1.3125rem;}@media (max-width:","){font-size:var(--text-md);}"],(function(e){return e.theme.device.md}),(function(e){return e.theme.device.sm})),M=r.default.ul.withConfig({displayName:"pages__Grid",componentId:"sc-1891g3r-4"})(["display:grid;grid-gap:var(--grid-gap-xl);grid-template-columns:repeat(2,1fr);list-style:none;margin-top:20px;& > li{margin-bottom:0;}@media (max-width:","){grid-gap:var(--grid-gap-lg);}"],(function(e){return e.theme.device.sm})),P=r.default.li.withConfig({displayName:"pages__List",componentId:"sc-1891g3r-5"})(["box-sizing:border-box;grid-column:span 1;display:flex;justify-content:center;a{display:block;height:100%;}@media (max-width:","){grid-column:span 2;}"],(function(e){return e.theme.device.sm})),R=r.default.p.withConfig({displayName:"pages__TextContent",componentId:"sc-1891g3r-6"})(["line-height:1.68;text-align:left;font-size:1.0625rem;"]),D=r.default.div.withConfig({displayName:"pages__ThumbnailWrapper",componentId:"sc-1891g3r-7"})(['display:flex;position:relative;&::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--color-dimmed);transition:0.3s ease;}']),G=r.default.div.withConfig({displayName:"pages__HashtagContainer",componentId:"sc-1891g3r-8"})(["display:flex;justify-content:center;margin-bottom:4rem;"]),H=function(e){var t=e.pageContext,r=e.data,d=(0,i.useState)([]),m=d[0],g=d[1],u=t.category,p=r.allMarkdownRemark.edges;(0,i.useLayoutEffect)((function(){(u?p.filter((function(e){var t,a=e.node;return(null==a||null===(t=a.frontmatter)||void 0===t?void 0:t.category)===u})):p).forEach((function(e){var t=e.node,a=t.id,i=(null==t?void 0:t.fields).slug,r=null==t?void 0:t.frontmatter,o=r.title,l=r.desc,c=r.date,s=r.category,d=r.thumbnail,m=r.alt,u=r.link,p=d.childImageSharp;g((function(e){return[].concat((0,n.Z)(e),[{id:a,slug:i,title:o,desc:l,date:c,category:s,thumbnail:null==p?void 0:p.id,alt:m,link:u}])}))}))}),[u,p]);var f=(0,l.Z)();u||f.postTitle;return i.createElement(c.Z,null,i.createElement(s.Z,{title:"Home"}),i.createElement(T,null,i.createElement(Z,null,i.createElement(L,null,"In the face of acts of aggression against civilians, ",i.createElement("br",null),"we express our solidarity with our neighbours and friends, Ukrainians."),i.createElement(M,{role:"list"},i.createElement(P,{role:"listitem"},i.createElement(D,null,i.createElement(o.S,{src:"../images/dove.png",width:300,marginLeft:30,__imageData:a(3811)}))),i.createElement(P,{role:"listitem"},i.createElement(R,null,"The cost of war is always the highest for everyday people. The true scale of the humanitarian effort needed - both for the refugees seeking safety in Poland, and Hungary and for the people still in Ukraine - will be huge.",i.createElement("br",null),i.createElement("br",null),"People need food, warmth, water and safe places to stay and probably for months. They might also need legal support or health care.",i.createElement("br",null),i.createElement("br",null),"As we write this already over 500,000 Ukrainians have fled the country and as long as Putin is advancing into Ukraine, this will drive up the number of people needing help."))),i.createElement(S,null),i.createElement(G,null,i.createElement(o.S,{src:"../images/hashtag.png",__imageData:a(8822)})),i.createElement(q,null,"Aid Organisations"),i.createElement(I,{posts:m}))))}},7949:function(e,t,a){var n=a(9).default.span.withConfig({displayName:"category__Category",componentId:"sc-wcpv1v-0"})(["display:block;font-size:0.875rem;font-weight:var(--font-weight-semi-bold);color:var(--color-text-3);"]);t.Z=n},8822:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/5522071a42b2e5f4b59ba2caac652c88/4360f/hashtag.png","srcSet":"/static/5522071a42b2e5f4b59ba2caac652c88/3aba8/hashtag.png 175w,\\n/static/5522071a42b2e5f4b59ba2caac652c88/52420/hashtag.png 350w,\\n/static/5522071a42b2e5f4b59ba2caac652c88/4360f/hashtag.png 700w","sizes":"(min-width: 700px) 700px, 100vw"},"sources":[{"srcSet":"/static/5522071a42b2e5f4b59ba2caac652c88/9e87d/hashtag.webp 175w,\\n/static/5522071a42b2e5f4b59ba2caac652c88/99c58/hashtag.webp 350w,\\n/static/5522071a42b2e5f4b59ba2caac652c88/13af9/hashtag.webp 700w","type":"image/webp","sizes":"(min-width: 700px) 700px, 100vw"}]},"width":700,"height":110.99999999999999}')},3811:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/0a0c2310dd92454816631e8cb65115a8/00820/dove.png","srcSet":"/static/0a0c2310dd92454816631e8cb65115a8/d8fb1/dove.png 75w,\\n/static/0a0c2310dd92454816631e8cb65115a8/0f8cf/dove.png 150w,\\n/static/0a0c2310dd92454816631e8cb65115a8/00820/dove.png 300w,\\n/static/0a0c2310dd92454816631e8cb65115a8/f48b7/dove.png 600w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/0a0c2310dd92454816631e8cb65115a8/7e57b/dove.webp 75w,\\n/static/0a0c2310dd92454816631e8cb65115a8/f6945/dove.webp 150w,\\n/static/0a0c2310dd92454816631e8cb65115a8/f1374/dove.webp 300w,\\n/static/0a0c2310dd92454816631e8cb65115a8/41d7a/dove.webp 600w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":354}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-da5e9434dcab671675a1.js.map
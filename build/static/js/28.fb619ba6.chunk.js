(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[28],{1324:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(23),o=n(11),c=n(1),s=n(701),l=n(788),p=n(789),d=n(790),m=n.n(d),u=n(8),g=n(700),h=n(7),f=n(12),b=n(687);const x=[{link:"/help",name:a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:m.a,alt:"back"})," HELP CENTER")}],y=Object(o.a)((()=>{const e=Object(u.d)(991),{supportCategories:t,slugSupport:n}=Object(g.a)(),{articles:r,supportCategoryName:i}=a.a.useMemo((()=>{const e=t.find((({slugSupport:e})=>e===n)),r=e?e.supportCategoryName:"";return{articles:(e&&e.supportPages||[]).map((({fields:e})=>e)),supportCategoryName:r}}),[t,n]);return a.a.createElement(f.e,{in:!0},a.a.createElement(l.a,null,a.a.createElement(b.a,{title:`${i} | Vinovest Help Center`}),a.a.createElement(E,null,e&&a.a.createElement(p.a,{breadcrumbs:x}),a.a.createElement(s.a,null,i),r.map((({name:e,slug:t})=>a.a.createElement(v,{key:t,to:`${h.a.help}/${t}`},e))))))})),E=c.e.div`
    ${s.a} {
        text-align: left;
        margin-bottom: 20px;
    }
`,v=Object(c.e)(i.b)`
    color: #4f81b0;
    font-size: 20px;
    line-height: 57px;
    text-decoration: none;
    text-transform: none;
    font-family: Favoritstd, sans-serif;
    font-weight: 500;
    display: block;
`;t.default=y},687:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(6);const o={title:Object(i.get)(document.querySelector("title"),"innerText"),description:Object(i.get)(document.querySelector('[name="description"]'),"content")},c=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:l(t)})),{}),s=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:l(t)})),{});function l(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(i.get)(t,"content"),tagSelector:e};const n=document.createElement("meta");return n.setAttribute("property",e),n.setAttribute("content",""),{createNode:n,tagSelector:e}}const p=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},d=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(a.a.useEffect((()=>{const n=document.querySelector("title"),r=document.querySelector('[name="description"]');return n.innerHTML=e||o.title,r.content=t||o.description,Object.values(s).forEach(p(e)),Object.values(c).forEach(p(t)),()=>{n.innerHTML=o.title,r.content=o.description,Object.values(s).forEach(d()),Object.values(c).forEach(d())}}),[t,e]),null)},700:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(18),o=n(8);t.a=()=>{const e=Object(o.f)(),t=Object(i.i)().category||"",{supportCategories:n,fetchSupportCategories:r,isSupportCategoriesPending:c,fetchSearchFAQArticles:s,searchFAQArticlesList:l,isSearchFAQArticlesListPending:p,isSearchFAQArticlesListDone:d,isSupportCategoriesDone:m,isSupportCategoriesFirstRenderPending:u}=e.support;return a.a.useEffect((()=>{n.length||c||m||r()}),[n,r,c,m]),a.a.useEffect((()=>{window.CRISP_WEBSITE_ID||(window.$crisp=[],window.CRISP_WEBSITE_ID="621284db-a9a6-49dc-bcdd-2b03ed7fd93d",function(){var e=document,t=e.createElement("script");t.src="https://client.crisp.chat/l.js",t.async=1,e.getElementsByTagName("head")[0].appendChild(t)}());const e=document.querySelector(".crisp-client");return e&&(e.style.display="block"),()=>{const e=document.querySelector(".crisp-client");e?e.style.display="none":setTimeout((()=>{const e=document.querySelector(".crisp-client");e&&!window.location.pathname.startsWith("/help")&&(e.style.display="none")}),500)}}),[]),{supportCategories:n,s:e,slugSupport:t,fetchSearchFAQArticles:s,searchFAQArticlesList:l,isSearchFAQArticlesListPending:p,isSearchFAQArticlesListDone:d,isSupportCategoriesFirstRenderPending:u}}},701:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(1),o=n(23);const c=i.e.div`
    padding-top: 118px;
    padding-right: 40px;
    padding-left: 40px;
    color: #242e35;

    @media screen and (max-width: 480px) {
        padding-right: 15px;
        padding-left: 15px;
    }
`,s=i.e.h1`
    font-size: 45px;
    line-height: 60px;
    text-align: center;
    font-family: Roslindaledisplaycondensed, sans-serif;
    font-weight: 500;
`,l=i.e.div`
    position: relative;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 180px;
    padding-top: 180px;

    .circleSmall,
    .circleBig {
        border-radius: 50%;
        position: absolute;
    }

    .circleSmall {
        width: 90px;
        height: 90px;
        background-color: rgb(239, 221, 199);
        bottom: -55px;
        left: 21%;
    }

    .circleBig {
        width: 138px;
        height: 138px;
        background-color: rgb(230, 201, 201);
        transform: translateY(-75%);
        right: 4%;
    }
`,p=Object(i.e)(o.b)`
    position: relative;
    display: block;
    text-decoration: none;
    text-transform: none;
    width: 100%;
    max-width: 980px;
    text-align: center;
    color: #242e35;
    border: 4px solid #242e35;
    margin-right: auto;
    margin-left: auto;
    padding: 50px 0;
    font-size: 32px;
    line-height: 48px;
    font-family: Roslindaledisplaycondensed, sans-serif;
    font-weight: 500;
    letter-spacing: 0.035em;
    transition: 0.3s;

    span {
        position: relative;
        display: inline-block;
        white-space: nowrap;

        &:before,
        &:after {
            content: " ";
            display: block;
            position: absolute;
        }

        &:before {
            bottom: -20px;
            border-bottom: 2px solid #242e35;
            width: 100%;
        }

        &:after {
            bottom: -27px;
            right: 0;
            border-bottom: 2px solid #242e35;
            border-left: 2px solid #242e35;
            width: 14px;
            height: 14px;
            transform: rotate(-135deg);
        }
    }

    &:hover {
        color: #fff;
        background-color: #242e35;
    }
`;t.b=({children:e})=>a.a.createElement(a.a.Fragment,null,a.a.createElement(c,null,e),a.a.createElement(l,null,a.a.createElement("div",{className:"circleSmall"}),a.a.createElement("div",{className:"circleBig"}),a.a.createElement(p,{to:"/contact-us"},"Can\u2019t find what you\u2019re looking for? ",a.a.createElement("span",null,"Contact Us"))))},788:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(23),o=n(11),c=n(1),s=n(228),l=n(12),p=n(701),d=n(7),m=n(700);const u=Object(o.a)((({children:e})=>{const{supportCategories:t,isSupportCategoriesFirstRenderPending:n}=Object(m.a)();return n?a.a.createElement(s.a,{loading:!0}):a.a.createElement(l.e,{in:!0},a.a.createElement(p.b,null,a.a.createElement(g,null,a.a.createElement(h,null,t.map((({supportCategoryName:e="",slugSupport:t})=>a.a.createElement(i.b,{key:e,to:`${d.a.helpCategory}/${t}`},e)))),a.a.createElement("div",null,e))))})),g=c.e.div`
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;

    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 100px;
    grid-row-gap: 16px;
    grid-template-columns: 0.3fr 1fr;
    grid-template-rows: auto;

    @media screen and (max-width: 991px) {
        display: block;
    }
`,h=c.e.div`
    @media screen and (max-width: 991px) {
        display: none;
    }

    a {
        display: block;
        margin-bottom: 30px;
        color: inherit;
        text-decoration: none;
        font-family: Favoritmonostd, sans-serif;
        font-size: 14px;
        line-height: 32px;
        text-transform: uppercase;
    }
`;t.a=u},789:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(23),o=n(1);const c=Object(o.e)(i.b)`
    color: #242e35;
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Favoritmonostd, sans-serif;
    font-weight: 500;
    display: block;
`,s=o.e.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .slash {
        margin: 0 7px;
        height: fit-content;
        ${c};
    }

    img {
        margin-right: 7px;
    }
`;t.a=({breadcrumbs:e=[]})=>a.a.createElement(s,null,e.map((({link:t,name:n},r)=>a.a.createElement(a.a.Fragment,{key:t},a.a.createElement(c,{to:t},n)," ",e.length&&r+1<e.length?a.a.createElement("div",{className:"slash"},"/"):""))))},790:function(e,t,n){e.exports=n.p+"static/media/arrow.8d51dd78.svg"}}]);
//# sourceMappingURL=28.fb619ba6.chunk.js.map
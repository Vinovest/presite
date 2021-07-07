(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[31],{1249:function(e,t,n){e.exports=n.p+"static/media/iconSearch.183c59c5.svg"},1250:function(e,t,n){e.exports=n.p+"static/media/iconClose.966063bf.svg"},1359:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(23),i=n(11),c=n(6),s=n(1),l=n(700),p=n(228),d=n(1249),m=n.n(d),g=n(1250),u=n.n(g);const h=s.e.div`
    position: relative;
    display: flex;
    max-width: 678px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 100px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0px 3px 0 rgb(85 95 110 / 20%);
    border: 1px solid #f7f7f7;

    .queryInput {
        flex-grow: 1;
        background: transparent;
        border: 0;
        outline: 0;
        font-family: Favoritmonostd, sans-serif;
        height: 50px;
        border: 0 !important;
        outline: 0 !important;
        width: 100%;
        padding: 0 20px;
    }
    .closeWrapper {
        outline: 0;
        border: 0;
        width: fit-content;
        background-color: transparent;
    }
    .search,
    .close {
        width: fit-content;

        display: block;
        margin-left: 15px;
        margin-right: 15px;
    }
    .search {
        width: 18px;
    }
    .close {
        width: 12px;

        &:hover {
            cursor: pointer;
        }
    }
`,f=s.e.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 20px;
    font-family: Favoritmonostd;
    overflow: auto;
    max-height: 400px;
    background-color: #fcfcfc;
    border: 1px solid #e0e0e0;
    border-top: 0;
    box-shadow: 1px 3px 4px rgb(0 0 0 / 9%);
    text-transform: uppercase;
`,x=Object(s.e)(a.b)`
    background-color: transparent;
    color: #242e35;
    text-decoration: none;
    text-transform: none;
    display: block;
    margin-bottom: 20px;
    text-transform: uppercase;

    span {
        font-style: italic;
    }
`,b=s.e.div`
    margin-bottom: 20px;
    color: #a86d37;
    font-family: Favoritmonostd;
    font-size: 20px;
    line-height: 160%;
`;var w=({searchFAQArticlesList:e,isSearchFAQArticlesListPending:t,fetchSearchFAQArticles:n,isSearchFAQArticlesListDone:r})=>{const[a,i]=o.a.useState(""),s=e.hits||[],l=o.a.useMemo((()=>Object(c.debounce)(n,500)),[n]);return o.a.useEffect((()=>{e.query!==a&&a&&l(a)}),[e.query,a,n,l]),o.a.createElement(h,null,o.a.createElement("img",{className:"search",src:m.a,alt:"search"}),o.a.createElement("input",{className:"queryInput",placeholder:"SEARCH...",value:a,onChange:({target:e})=>{i(e.value)},type:"text"}),o.a.createElement("button",{onClick:()=>i(""),type:"button",className:"closeWrapper"},o.a.createElement("img",{className:"close",src:u.a,alt:"close"})),!t&&e&&e.query===a&&o.a.createElement(f,null,!s.length&&r&&o.a.createElement(b,null,"WE DIDN`T FIND ANY RESULTS FOR THE SEARCH ",o.a.createElement("em",null,'"',a,'"'),"."),s.map((({Name:e,Slug:t,"Item ID":n})=>o.a.createElement(x,{key:t,to:t.startsWith("category/")?`/help-${t}`:`help/${t}`},e&&e.split(" ").map(((e,t)=>o.a.createElement(o.a.Fragment,{key:t},a.toLocaleLowerCase().split(" ").includes(e.toLocaleLowerCase())?o.a.createElement("span",null,e," "):`${e} `))))))))},y=n(701),E=n(7),S=n(12),v=n(687);const A=Object(i.a)((()=>{const{supportCategories:e,isSupportCategoriesFirstRenderPending:t,searchFAQArticlesList:n,fetchSearchFAQArticles:r,isSearchFAQArticlesListPending:a,isSearchFAQArticlesListDone:i}=Object(l.a)();return t?o.a.createElement(p.a,{loading:!0}):o.a.createElement(S.e,{in:!0},o.a.createElement(y.b,null,o.a.createElement(v.a,{title:"Help Center",description:"Got questions on wine investment through Vinovest? Get answers to all your queries on how Vinovest works, returns, ownership, fees, shipping, storage, and more."}),o.a.createElement(k,null,"How can we help you?"),o.a.createElement(w,{searchFAQArticlesList:n,fetchSearchFAQArticles:r,isSearchFAQArticlesListPending:a,isSearchFAQArticlesListDone:i}),o.a.createElement(L,null,e.map((({categoryImage:e,supportCategoryName:t,slugSupport:n,supportPages:r=[]},a)=>o.a.createElement(F,{key:t,icon:Object(c.get)(e,"fields.file.url"),name:t,id:n,supportPages:r}))))))})),F=({icon:e,name:t,id:n,supportPages:r})=>{const a=o.a.useMemo((()=>{const e=({fields:e})=>e;return r.filter(e).map(e).slice(0,3)}),[r]);return o.a.createElement(C,null,o.a.createElement(j,{src:e,alt:t}),o.a.createElement(O,null,t),a.map((({slug:e,name:t})=>o.a.createElement(N,{key:e,to:`${E.a.help}/${e}`},t))),o.a.createElement(q,{to:`${E.a.helpCategory}/${n}`},"VIEW ALL"," ",o.a.createElement("svg",{width:"17",height:"12",viewBox:"0 0 17 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M0 6.00006L15 6.00006",stroke:"#4F81B0",strokeWidth:"1.5"}),o.a.createElement("path",{d:"M10 11.0001L15 6.00006L10 1.00006",stroke:"#4F81B0",strokeWidth:"1.5"}))))},k=Object(s.e)(y.a)`
    margin-bottom: 50px;
`,L=s.e.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    margin-right: auto;
    margin-left: auto;
    grid-auto-columns: 1fr;
    grid-column-gap: 100px;
    grid-row-gap: 100px;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 767px) {
        grid-column-gap: 30px;
        grid-row-gap: 50px;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding-right: 21px;
        padding-left: 21px;
    }
`,C=s.e.div``,j=s.e.img`
    height: 117px;
`,O=s.e.h2`
    margin-top: 20px;
    font-family: Roslindaledisplaycondensed, sans-serif;
    font-size: 32px;
    line-height: 150%;
    font-weight: 500;
`,Q=Object(s.e)(a.b)`
    background-color: transparent;
    color: #242e35;
    text-decoration: none;
    text-transform: none;
`,N=Object(s.e)(Q)`
    display: block;
    margin-bottom: 15px;
    font-family: Favoritstd, sans-serif;
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    letter-spacing: 0.5px;
`,q=Object(s.e)(Q)`
    display: inline-block;
    font-family: Favoritmonostd, sans-serif;
    color: #4f81b0;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 5px 0;
`;t.default=A},687:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(6);const i={title:Object(a.get)(document.querySelector("title"),"innerText"),description:Object(a.get)(document.querySelector('[name="description"]'),"content")},c=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:l(t)})),{}),s=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:l(t)})),{});function l(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(a.get)(t,"content"),tagSelector:e};const n=document.createElement("meta");return n.setAttribute("property",e),n.setAttribute("content",""),{createNode:n,tagSelector:e}}const p=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},d=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(o.a.useEffect((()=>{const n=document.querySelector("title"),r=document.querySelector('[name="description"]');return n.innerHTML=e||i.title,r.content=t||i.description,Object.values(s).forEach(p(e)),Object.values(c).forEach(p(t)),()=>{n.innerHTML=i.title,r.content=i.description,Object.values(s).forEach(d()),Object.values(c).forEach(d())}}),[t,e]),null)},700:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(18),i=n(8);t.a=()=>{const e=Object(i.f)(),t=Object(a.i)().category||"",{supportCategories:n,fetchSupportCategories:r,isSupportCategoriesPending:c,fetchSearchFAQArticles:s,searchFAQArticlesList:l,isSearchFAQArticlesListPending:p,isSearchFAQArticlesListDone:d,isSupportCategoriesDone:m,isSupportCategoriesFirstRenderPending:g}=e.support;return o.a.useEffect((()=>{n.length||c||m||r()}),[n,r,c,m]),o.a.useEffect((()=>{window.CRISP_WEBSITE_ID||(window.$crisp=[],window.CRISP_WEBSITE_ID="621284db-a9a6-49dc-bcdd-2b03ed7fd93d",function(){var e=document,t=e.createElement("script");t.src="https://client.crisp.chat/l.js",t.async=1,e.getElementsByTagName("head")[0].appendChild(t)}());const e=document.querySelector(".crisp-client");return e&&(e.style.display="block"),()=>{const e=document.querySelector(".crisp-client");e?e.style.display="none":setTimeout((()=>{const e=document.querySelector(".crisp-client");e&&!window.location.pathname.startsWith("/help")&&(e.style.display="none")}),500)}}),[]),{supportCategories:n,s:e,slugSupport:t,fetchSearchFAQArticles:s,searchFAQArticlesList:l,isSearchFAQArticlesListPending:p,isSearchFAQArticlesListDone:d,isSupportCategoriesFirstRenderPending:g}}},701:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n.n(r),a=n(1),i=n(23);const c=a.e.div`
    padding-top: 118px;
    padding-right: 40px;
    padding-left: 40px;
    color: #242e35;

    @media screen and (max-width: 480px) {
        padding-right: 15px;
        padding-left: 15px;
    }
`,s=a.e.h1`
    font-size: 45px;
    line-height: 60px;
    text-align: center;
    font-family: Roslindaledisplaycondensed, sans-serif;
    font-weight: 500;
`,l=a.e.div`
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
`,p=Object(a.e)(i.b)`
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
`;t.b=({children:e})=>o.a.createElement(o.a.Fragment,null,o.a.createElement(c,null,e),o.a.createElement(l,null,o.a.createElement("div",{className:"circleSmall"}),o.a.createElement("div",{className:"circleBig"}),o.a.createElement(p,{to:"/contact-us"},"Can\u2019t find what you\u2019re looking for? ",o.a.createElement("span",null,"Contact Us"))))}}]);
//# sourceMappingURL=31.1a12b926.chunk.js.map
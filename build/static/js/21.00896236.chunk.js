(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[21],{1360:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=n(6),l=n(1),c=n(18),s=n(701),p=n(788),d=n(795),m=n(789),g=n(790),u=n.n(g),h=n(8);const f=l.e.div`
    margin-top: 90px;
    padding: 34px 48px;
    background-color: #eee;

    h3 {
        margin-bottom: 10px;
        font-weight: 400;
        font-family: Favoritmonostd, sans-serif;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 1px;
    }

    p {
        font-size: 14px;
        line-height: 21px;
        margin-top: 0;
        margin-bottom: 10px;
        font-family: Favoritstd, sans-serif;
        color: #242e35;
        font-weight: 500;

        span {
            color: #a86d37;
        }
    }
`;var x=()=>r.a.createElement(f,null,r.a.createElement("h3",null,"NOTE"),r.a.createElement("p",null,"Laws and regulations administered by ",r.a.createElement("span",null,"OFAC")," impose restrictions on the provision of services to persons, including U.S. citizens and permanent residents, that are located in specified sanctioned jurisdictions, including Cuba, Iran, North Korea, Syria, and the Crimea region of Ukraine. If you travel to these locations, you won\u2019t be able to access your account, and attempted log-ins may lead to account restrictions.")),b=n(7),y=n(700),E=n(687);const v=Object(i.a)((()=>{const e=Object(h.d)(991),{slug:t}=Object(c.i)(),{supportCategories:n}=Object(y.a)(),a=r.a.useMemo((()=>n.reduce(((e,{supportPages:t})=>[...e,...(t||[]).map((({fields:e})=>e))]),[]).find((({slug:e})=>e===t))||{}),[t,n]),{pageBody:i,name:l,noteSwitch:g}=a,f=Object(o.get)(i,"content",[]),v=Object(o.get)(a,"parentCategorySlug"),S=Object(o.get)(a,"parentCategoryName"),O=r.a.useMemo((()=>{const t=[{link:`${b.a.helpCategory}/${v}`,name:r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:u.a,alt:"back"})," ",S)}],n=[{link:"/help",name:"HELP CENTER"},{link:`${b.a.helpCategory}/${v}`,name:S}];return e?t:n}),[e,v,S]);return r.a.createElement(p.a,null,r.a.createElement(E.a,{title:`${l} | ${S} | Vinovest Help Center`}),r.a.createElement(w,null,r.a.createElement(m.a,{breadcrumbs:O}),r.a.createElement(s.a,null,l),r.a.createElement(k,null,r.a.createElement(d.a,{fillingOnly:!0,postSections:f})),g&&r.a.createElement(x,null)))})),w=l.e.div`
    ${s.a} {
        text-align: left;
        margin-bottom: 20px;
    }
`,k=l.e.div`
    margin-top: 60px;
    font-family: Favoritstd, sans-serif;
    color: #242e35;

    p {
        margin-top: 10px;
        margin-bottom: 21px;
        font-size: 20px;
        line-height: 160%;
    }

    ul {
        font-family: Favoritstd book, sans-serif;
        font-weight: 400;

        li {
            margin-top: 3px;
            margin-bottom: 3px;
            font-size: 18px;
            line-height: 160%;
        }
    }

    strong {
        font-weight: 500;
    }
`;t.default=v},687:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(6);const o={title:Object(i.get)(document.querySelector("title"),"innerText"),description:Object(i.get)(document.querySelector('[name="description"]'),"content")},l=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:s(t)})),{}),c=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:s(t)})),{});function s(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(i.get)(t,"content"),tagSelector:e};const n=document.createElement("meta");return n.setAttribute("property",e),n.setAttribute("content",""),{createNode:n,tagSelector:e}}const p=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},d=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(r.a.useEffect((()=>{const n=document.querySelector("title"),a=document.querySelector('[name="description"]');return n.innerHTML=e||o.title,a.content=t||o.description,Object.values(c).forEach(p(e)),Object.values(l).forEach(p(t)),()=>{n.innerHTML=o.title,a.content=o.description,Object.values(c).forEach(d()),Object.values(l).forEach(d())}}),[t,e]),null)},700:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(18),o=n(8);t.a=()=>{const e=Object(o.f)(),t=Object(i.i)().category||"",{supportCategories:n,fetchSupportCategories:a,isSupportCategoriesPending:l,fetchSearchFAQArticles:c,searchFAQArticlesList:s,isSearchFAQArticlesListPending:p,isSearchFAQArticlesListDone:d,isSupportCategoriesDone:m,isSupportCategoriesFirstRenderPending:g}=e.support;return r.a.useEffect((()=>{n.length||l||m||a()}),[n,a,l,m]),r.a.useEffect((()=>{window.CRISP_WEBSITE_ID||(window.$crisp=[],window.CRISP_WEBSITE_ID="621284db-a9a6-49dc-bcdd-2b03ed7fd93d",function(){var e=document,t=e.createElement("script");t.src="https://client.crisp.chat/l.js",t.async=1,e.getElementsByTagName("head")[0].appendChild(t)}());const e=document.querySelector(".crisp-client");return e&&(e.style.display="block"),()=>{const e=document.querySelector(".crisp-client");e?e.style.display="none":setTimeout((()=>{const e=document.querySelector(".crisp-client");e&&!window.location.pathname.startsWith("/help")&&(e.style.display="none")}),500)}}),[]),{supportCategories:n,s:e,slugSupport:t,fetchSearchFAQArticles:c,searchFAQArticlesList:s,isSearchFAQArticlesListPending:p,isSearchFAQArticlesListDone:d,isSupportCategoriesFirstRenderPending:g}}},701:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),i=n(1),o=n(23);const l=i.e.div`
    padding-top: 118px;
    padding-right: 40px;
    padding-left: 40px;
    color: #242e35;

    @media screen and (max-width: 480px) {
        padding-right: 15px;
        padding-left: 15px;
    }
`,c=i.e.h1`
    font-size: 45px;
    line-height: 60px;
    text-align: center;
    font-family: Roslindaledisplaycondensed, sans-serif;
    font-weight: 500;
`,s=i.e.div`
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
`;t.b=({children:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null,e),r.a.createElement(s,null,r.a.createElement("div",{className:"circleSmall"}),r.a.createElement("div",{className:"circleBig"}),r.a.createElement(p,{to:"/contact-us"},"Can\u2019t find what you\u2019re looking for? ",r.a.createElement("span",null,"Contact Us"))))},735:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=n(1).e.div`
    a {
        text-decoration: none;
        color: #0066cc;
    }

    p,
    ul,
    ol {
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 38px;
        padding: 35px 50px 0;
        color: #242e35;
        margin: 0;

        @media screen and (max-width: 767px) {
            padding: 30px 0 0;
            font-size: 16px;
            line-height: 30px;
        }
    }

    ul,
    ol {
        margin-left: 26px;

        li {
            &:not(:first-child) {
                padding: 15px 0 0;
            }
        }

        &.anchors {
            padding-top: 23px;

            li {
                &:not(:first-child) {
                    padding: 0;

                    @media screen and (max-width: 767px) {
                        padding: 0;
                    }
                }
                &::marker {
                    color: #0066cc;
                }
            }
        }
    }

    h2,
    h3 {
        font-family: RoslindaleDisplayCondensed;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 44px;
        color: #242e35;
        padding: 60px 50px 0;
        margin: 0;

        @media screen and (max-width: 767px) {
            font-size: 24px;
            line-height: 34px;
            padding: 30px 0 0;
        }
    }

    h3 {
        font-size: 36px;
        line-height: 54px;
        @media screen and (max-width: 767px) {
            font-size: 32px;
            line-height: 44px;
        }
    }

    img {
        margin: 60px 0 0;
        display: block;
        width: 100%;

        @media screen and (max-width: 767px) {
            margin: 30px 0 0;
        }
    }

    strong {
        font-weight: 500;
    }
`},788:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(23),o=n(11),l=n(1),c=n(228),s=n(12),p=n(701),d=n(7),m=n(700);const g=Object(o.a)((({children:e})=>{const{supportCategories:t,isSupportCategoriesFirstRenderPending:n}=Object(m.a)();return n?r.a.createElement(c.a,{loading:!0}):r.a.createElement(s.e,{in:!0},r.a.createElement(p.b,null,r.a.createElement(u,null,r.a.createElement(h,null,t.map((({supportCategoryName:e="",slugSupport:t})=>r.a.createElement(i.b,{key:e,to:`${d.a.helpCategory}/${t}`},e)))),r.a.createElement("div",null,e))))})),u=l.e.div`
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
`,h=l.e.div`
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
`;t.a=g},789:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(23),o=n(1);const l=Object(o.e)(i.b)`
    color: #242e35;
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Favoritmonostd, sans-serif;
    font-weight: 500;
    display: block;
`,c=o.e.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .slash {
        margin: 0 7px;
        height: fit-content;
        ${l};
    }

    img {
        margin-right: 7px;
    }
`;t.a=({breadcrumbs:e=[]})=>r.a.createElement(c,null,e.map((({link:t,name:n},a)=>r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(l,{to:t},n)," ",e.length&&a+1<e.length?r.a.createElement("div",{className:"slash"},"/"):""))))},790:function(e,t,n){e.exports=n.p+"static/media/arrow.8d51dd78.svg"},795:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(6),o=n(23);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const c=({nodeType:e,value:t,marks:n,...a})=>{const l=Object(i.get)(a,"data.uri"),c=Object(i.get)(a,"content[0].value");let s=null;s="hyperlink"===e?l.startsWith("http")?r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},c):l.startsWith("#")?r.a.createElement("a",{href:l},c):r.a.createElement(o.b,{to:l},c):`${t}`;let p=s;const d=(e=>t=>e.some((({type:e})=>e===t))).call(null,n||[]);if(d("bold")&&(p=r.a.createElement("strong",null,p)),d("code")){const e=s&&s.split("anchor:").join("").split(" ")[0].trim();p=r.a.createElement("span",{id:e})}return r.a.createElement(r.a.Fragment,null," ",p," ")},s=e=>r.a.createElement(r.a.Fragment,null,e.map(((e,t)=>r.a.createElement(c,l({},e,{key:t})))));var p=n(735);t.a=({postSections:e=[],fillingOnly:t})=>{const n=r.a.createElement(r.a.Fragment,null,e.map(((e,t)=>{const n=Object(i.get)(e,"nodeType",""),a=Object(i.get)(e,"content",[]);switch(n){case"paragraph":{const e=s(a);return e.props.children.some((({props:e})=>e.value))?a.length>0&&!a[0].marks.some((({type:e})=>"code"===e))?r.a.createElement("p",{key:t},e):r.a.createElement(r.a.Fragment,{key:t},e):null}case"heading-2":return r.a.createElement("h2",{key:t},s(a));case"heading-3":return r.a.createElement("h3",{key:t},s(a));case"embedded-asset-block":return r.a.createElement("img",{key:t,src:Object(i.get)(e,"data.target.fields.file.url"),alt:Object(i.get)(e,"data.target.fields.file.fileName")});case"ordered-list":return r.a.createElement("ol",{key:t},a.map(((e,t)=>{const n=Object(i.get)(e,"content[0].content");return n?r.a.createElement("li",{key:t},s(n)):null})));case"unordered-list":return r.a.createElement("ul",{key:t},a.map(((e,t)=>{const n=Object(i.get)(e,"content[0].content");return n?r.a.createElement("li",{key:t},s(n)):null})));default:return null}})));return t?r.a.createElement(r.a.Fragment,null,n):r.a.createElement(p.a,null,n)}}}]);
//# sourceMappingURL=21.00896236.chunk.js.map
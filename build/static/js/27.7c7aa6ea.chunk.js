(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[27],{1352:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),o=a(18),l=a(216),c=a.n(l),d=a(11),s=a(1),p=a(8),m=a(795),g=a(735),h=a(687),u=a(721);const x=s.e.div`
    position: relative;

    ${u.a} {
        color: #242e35;
        padding: 0;
        padding-top: 36px;

        @media screen and (max-width: 991px) {
            &.isBig {
                font-size: 12px;
                line-height: 16px;
                padding-top: 15px;
            }
        }
    }

    .heroImg {
        width: 100%;
        display: block;
        height: 500px;
        object-fit: cover;

        @media screen and (max-width: 991px) {
            height: 300px;
        }

        @media screen and (max-width: 768px) {
            height: 191px;
        }
    }

    .heroDescriptionsWrapper {
        margin: 0 20px;
        height: fit-content;
        position: relative;
    }
    .socialsWrapper,
    .heroDescriptions {
        max-width: 740px;
        margin: 0 auto;
    }

    .heroDescriptions {
        position: relative;
        margin: ${({height:e})=>e?`-${e/2}px`:"-180px"} auto 0;

        padding: 33px 50px;
        background: #ffffff;
        border: 2px solid #242e35;
        box-sizing: border-box;

        @media screen and (max-width: 991px) {
            margin: -41px auto 0;
            padding: 40px;
        }

        @media screen and (max-width: 600px) {
            padding: 20px;
        }

        h1 {
            font-family: RoslindaleDisplayCondensed;
            font-style: normal;
            font-weight: 500;
            font-size: 64px;
            line-height: 84px;
            margin: 0;
            color: #242e35;

            @media screen and (max-width: 768px) {
                font-size: 50px;
                line-height: 55px;
            }

            @media screen and (max-width: 600px) {
                font-size: 32px;
                line-height: 44px;
            }
        }
    }
`,f=s.e.div`
    position: absolute;
    top: -105px;
    left: -71.85px;
    transform: translateX(-100%);
    display: flex;
    flex-direction: column;

    .at-share-btn-elements {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 11px !important;
        border: 1px solid #a8abad !important;
        padding: 0px !important;
    }

    svg {
        width: 41px;
        height: 41px;
        padding: 10px;
    }

    @media screen and (max-width: 1340px) {
        margin-top: 27px;
        flex-direction: row;
        position: static;
        transform: none;

        .at-share-btn-elements {
            flex-direction: row;
        }

        a {
            margin-right: 11px !important;
            margin-bottom: 0 !important;
        }
    }
`;var b=({data:e,isArticlePagePending:t})=>{const a=Object(p.d)(991)&&"300px",o=Object(p.d)(768)&&"191px",l=i.a.useRef(null),[d,s]=i.a.useState(0);i.a.useEffect((()=>{s(l.current.clientHeight)}),[e]);const m=Object(r.get)(e,"heroImage.fields.file.url"),g=Object(r.get)(e,"postTitle"),h=Object(r.get)(e,"blogAuthor.fields.authorName"),b=Object(r.get)(e,"postDate");return Object(n.useEffect)((()=>{window.addthis&&window.addthis.update("share","url","//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e67e40eac34d36d")}),[]),Object(n.useEffect)((()=>{const e=document.createElement("script");return e.src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e67e40eac34d36d",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]),i.a.createElement(x,{className:"heroWrapper",height:d},t?i.a.createElement(c.a,{style:{height:o||a||"500px",width:"100%",display:"block"}}):i.a.createElement("img",{className:"heroImg",src:m,alt:"hero",height:"500",width:"1028"}),i.a.createElement("div",{className:"heroDescriptionsWrapper"},i.a.createElement("div",{className:"heroDescriptions",ref:l},i.a.createElement("h1",null,t?i.a.createElement(c.a,{style:{height:"64px",width:"100%",display:"block"}}):g),t?i.a.createElement(c.a,{style:{height:"20px",width:"60px",display:"block",marginTop:"15px"}}):i.a.createElement(u.b,{isBig:!0,author:h,date:b,full:!0})),i.a.createElement("div",{className:"socialsWrapper"},i.a.createElement(f,null,i.a.createElement("div",{className:"addthis_inline_share_toolbox"})))))};const w=s.e.div`
    max-width: 505px;
    width: 100%;
    margin: 80px auto 0;
    padding: 35px 37px;
    border: 2px solid #242e35;
    display: flex;
    align-items: center;
    color: #242e35;

    img {
        display: block;
        width: 122.55px;
        margin-right: 27.34px;
    }

    .descriptionWrapper {
        h4,
        h2,
        div {
            margin: 0;
            font-family: VinovestMedium;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 20px;
        }

        h2 {
            font-size: 32px;
            line-height: 44px;
            margin: 3px 0;
        }

        div {
            font-size: 16px;
            line-height: 26px;
        }

        h4 {
            text-transform: uppercase;
            font-family: VinovestMono;
        }
    }

    @media screen and (max-width: 991px) {
        padding: 30px;
        flex-direction: column;
        align-items: flex-start;

        img {
            width: 96.81px;
            margin-bottom: 19px;
        }

        h2 {
            margin-top: 2px;
        }
    }

    @media screen and (min-width: 991px) {
        &.wide {
            max-width: 740px;
        }
    }
`;var E=({author:e})=>{const t=Object(r.get)(e,"authorPhoto.fields.file.url",""),a=Object(r.get)(e,"authorName",""),n=Object(r.get)(e,"authorBio","");return i.a.createElement(w,{className:n.length>180?"wide":""},i.a.createElement("img",{src:t,alt:a,height:"123",width:"123"}),i.a.createElement("div",{className:"descriptionWrapper"},i.a.createElement("h4",null,"Written by"),i.a.createElement("h2",null,a),i.a.createElement("div",null,n)))},j=a(300),y=a(791),v=a(792);const O=Object(d.a)((()=>{const e=Object(p.f)(),{slug:t}=Object(o.i)(),{fetchArticle:a,article:n,resetArticle:l,isArticlePagePending:d,articlePageDoesNotExist:s}=e.blog,u=i.a.useMemo((()=>Object.entries(n).filter((([e])=>e.includes("postSection"))).sort((([e],[t])=>+e.slice(11)-+t.slice(11)))),[n]),x=Object(r.get)(n,"postIntro.content",[]),f=Object(r.get)(n,"blogAuthor.fields",{}),w=Object(r.get)(n,"furtherReading.content",[]),O=Object(r.get)(n,"anchorLinks.content",[]),D=Object(r.get)(n,"relatedArticlesFromResponse",[]);return i.a.useEffect((()=>(t&&a(t),()=>l())),[a,l,t]),i.a.useEffect((()=>(document.querySelector("html").style.scrollBehavior="smooth",()=>{document.querySelector("html").style.scrollBehavior="auto"})),[]),s?i.a.createElement(j.a,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{title:Object(r.get)(n,"postTitle"),description:Object(r.get)(n,"metaPreviewText")}),i.a.createElement(k,null,i.a.createElement(N,null,i.a.createElement(b,{data:n,isArticlePagePending:d}),i.a.createElement(z,null,i.a.createElement("div",{className:"gupWrapper"},i.a.createElement(m.a,{postSections:x}),i.a.createElement(B,null,i.a.createElement(g.a,null,i.a.createElement("h3",null,"Further reading"),i.a.createElement(m.a,{postSections:w}))),i.a.createElement(S,null,i.a.createElement(m.a,{postSections:O})),u.map((([e,t],a)=>i.a.createElement(m.a,{key:a,postSections:Object(r.get)(t,"content")}))),d&&i.a.createElement(c.a,{style:{height:"800px",width:"100%",display:"block",marginTop:"60px"}}),!d&&i.a.createElement(E,{author:f}))))),i.a.createElement(T,null,D&&!!D.length&&i.a.createElement(F,null,i.a.createElement("h3",null,"Related articles"),i.a.createElement(v.a,null,D.map((e=>i.a.createElement(y.a,{key:e.id,card:e})))))))})),k=s.e.div`
    max-width: 1148px;
    width: 100%;
    margin: 0 auto;
    padding-top: 44px;

    @media screen and (max-width: 991px) {
        padding-top: 0;
    }
`,N=s.e.div`
    max-width: 1028px;
    margin: 0 auto;
`,z=s.e.div`
    max-width: 780px;
    margin: 0 auto;

    .gupWrapper {
        margin: 0 20px;
    }
`,B=s.e.div`
    width: 100%;
    border: 2px solid #242e35;
    padding: 29px 50px 50px;
    margin-top: 39px;

    h3,
    ul,
    ol {
        padding: 0;
    }

    ul,
    ol {
        padding-top: 22px;
    }

    ul li,
    ol li {
        padding: 0 !important;
    }
    @media screen and (max-width: 991px) {
        padding: 27px 20px;
    }
`,S=s.e.div`
    color: #0066cc;
    h2 {
        padding-bottom: 23px;
    }

    ul,
    ol,
    ul li,
    ol li,
    p {
        padding-top: 0 !important;

        &::marker {
            color: #0066cc;
        }
    }

    p {
        padding-left: 60px;
    }
`,T=s.e.div`
    margin: 112px auto 119px;
    max-width: 1201px;
    width: 100%;

    @media screen and (max-width: 991px) {
        margin: 73px auto 132px;
    }
`,F=s.e.div`
    h3 {
        font-family: RoslindaleDisplayCondensed;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 44px;
        color: #242e35;
        margin: 0;
        margin-bottom: 50px;
        ${v.b};

        &:after {
            content: " ";
            display: block;
            margin-top: 36px;
            border-bottom: 1px solid #242e35;
        }

        @media screen and (max-width: 991px) {
            margin-bottom: 22px;

            &:after {
                display: none;
            }
        }
    }
`;t.default=O},687:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(6);const o={title:Object(r.get)(document.querySelector("title"),"innerText"),description:Object(r.get)(document.querySelector('[name="description"]'),"content")},l=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:d(t)})),{}),c=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:d(t)})),{});function d(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(r.get)(t,"content"),tagSelector:e};const a=document.createElement("meta");return a.setAttribute("property",e),a.setAttribute("content",""),{createNode:a,tagSelector:e}}const s=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},p=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(i.a.useEffect((()=>{const a=document.querySelector("title"),n=document.querySelector('[name="description"]');return a.innerHTML=e||o.title,n.content=t||o.description,Object.values(c).forEach(s(e)),Object.values(l).forEach(s(t)),()=>{a.innerHTML=o.title,n.content=o.description,Object.values(c).forEach(p()),Object.values(l).forEach(p())}}),[t,e]),null)},721:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(0),i=a.n(n),r=a(1),o=a(30),l=a(19);function c(e,t){Object(l.a)(2,arguments);var a=Object(o.a)(e),n=Object(o.a)(t);return a.getFullYear()-n.getFullYear()}function d(e,t){Object(l.a)(2,arguments);var a=Object(o.a)(e),n=Object(o.a)(t),i=a.getTime()-n.getTime();return i<0?-1:i>0?1:i}var s=a(363);function p(e,t){Object(l.a)(2,arguments);var a=Object(o.a)(e),n=Object(o.a)(t),i=a.getFullYear()-n.getFullYear(),r=a.getMonth()-n.getMonth();return 12*i+r}function m(e){Object(l.a)(1,arguments);var t=Object(o.a)(e);return t.setHours(23,59,59,999),t}function g(e){Object(l.a)(1,arguments);var t=Object(o.a)(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function h(e){Object(l.a)(1,arguments);var t=Object(o.a)(e);return m(t).getTime()===g(t).getTime()}var u=a(20);const x=(e,t)=>{const a=function(e,t){Object(l.a)(2,arguments);var a=Object(o.a)(e),n=Object(o.a)(t),i=d(a,n),r=Math.abs(c(a,n));a.setFullYear("1584"),n.setFullYear("1584");var s=d(a,n)===-i,p=i*(r-s);return 0===p?0:p}(new Date,Object(s.a)(e)),n=function(e,t){Object(l.a)(2,arguments);var a,n=Object(o.a)(e),i=Object(o.a)(t),r=d(n,i),c=Math.abs(p(n,i));if(c<1)a=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-r*c);var s=d(n,i)===-r;h(Object(o.a)(e))&&1===c&&1===d(e,i)&&(s=!1),a=r*(c-s)}return 0===a?0:a}(new Date,Object(s.a)(e));return a>0&&!t?`${a} year${a>1?"s":""} ago`:n>0&&!t?`${n} month${n>1?"s":""} ago`:Object(u.f)(e)},f=r.e.div`
    font-family: VinovestMono, sans-serif;
    color: #606060;
    font-size: 12px;
    line-height: 20px;
    text-transform: uppercase;

    &.isBig {
        font-size: 14px;
        line-height: 18px;
        padding: 35px 0;
    }

    .divider {
        padding: 0 8px;
    }
`;t.b=({isBig:e,author:t,date:a,full:n})=>i.a.createElement(f,{className:""+(e?"isBig":"")},"BY ",t,a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"divider"},"/")," ",`${x(a,n)}`))},735:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=a(1).e.div`
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
`},791:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),o=a(6),l=a(23),c=a(7),d=a(721);const s=Object(r.e)(l.b)`
    width: 100%;
    min-height: 360px;
    border: 2px solid #242e35;
    background-color: #fff;
    box-shadow: 1px 1px 40px 0 rgb(0 0 0 / 10%);
    text-decoration: none;
    overflow: hidden;
    color: #242e35;
    display: flex;
    flex-direction: column;

    &:hover {
        opacity: 1 !important;
        box-shadow: 10px 10px 0px 0px #fae8d1;
    }

    .wrap {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 24px 24px 25px;

        &.isBig {
            padding: 30px 38px 4px;
        }
    }

    .cardOfArticleImage {
        width: 100%;
        height: 187px;
        display: block;
        object-fit: cover;

        &.isBig {
            height: 351px;
        }
    }
    .cardOfArticleTitle {
        margin: 0;
        font-size: 20px;
        line-height: 32px;
        font-family: Roslindaledisplaycondensed, sans-serif;
        font-weight: 500;
        flex-grow: 1;

        &.isBig {
            font-size: 36px;
            line-height: 54px;
        }
    }
`;t.a=({isBig:e,card:t})=>{const a=Object(o.get)(t,"heroImage.fields.file.url"),n=Object(o.get)(t,"postTitle"),r=Object(o.get)(t,"blogAuthor.fields.authorName"),l=Object(o.get)(t,"postDate"),p=Object(o.get)(t,"slug");return i.a.createElement(s,{to:`${c.a.blog}/${p}`},i.a.createElement("img",{className:"cardOfArticleImage "+(e?"isBig":""),src:a,alt:n,height:""+(e?"351":"187"),width:""+(e?"740":"356")}),i.a.createElement("div",{className:"wrap "+(e?"isBig":"")},i.a.createElement("h2",{className:"cardOfArticleTitle "+(e?"isBig":"")},n),i.a.createElement(d.b,{isBig:e,author:r,date:l&&new Date(l).toISOString()})))}},792:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var n=a(1);const i="\npadding-right: 20px;\npadding-left: 20px;\n",r=n.e.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 43px;
    grid-template-columns: 1fr 1fr 1fr;
    ${({disable:e})=>e?"pointer-events: none;":""};
    ${i};

    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`},795:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(6),o=a(23);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const c=({nodeType:e,value:t,marks:a,...n})=>{const l=Object(r.get)(n,"data.uri"),c=Object(r.get)(n,"content[0].value");let d=null;d="hyperlink"===e?l.startsWith("http")?i.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},c):l.startsWith("#")?i.a.createElement("a",{href:l},c):i.a.createElement(o.b,{to:l},c):`${t}`;let s=d;const p=(e=>t=>e.some((({type:e})=>e===t))).call(null,a||[]);if(p("bold")&&(s=i.a.createElement("strong",null,s)),p("code")){const e=d&&d.split("anchor:").join("").split(" ")[0].trim();s=i.a.createElement("span",{id:e})}return i.a.createElement(i.a.Fragment,null," ",s," ")},d=e=>i.a.createElement(i.a.Fragment,null,e.map(((e,t)=>i.a.createElement(c,l({},e,{key:t})))));var s=a(735);t.a=({postSections:e=[],fillingOnly:t})=>{const a=i.a.createElement(i.a.Fragment,null,e.map(((e,t)=>{const a=Object(r.get)(e,"nodeType",""),n=Object(r.get)(e,"content",[]);switch(a){case"paragraph":{const e=d(n);return e.props.children.some((({props:e})=>e.value))?n.length>0&&!n[0].marks.some((({type:e})=>"code"===e))?i.a.createElement("p",{key:t},e):i.a.createElement(i.a.Fragment,{key:t},e):null}case"heading-2":return i.a.createElement("h2",{key:t},d(n));case"heading-3":return i.a.createElement("h3",{key:t},d(n));case"embedded-asset-block":return i.a.createElement("img",{key:t,src:Object(r.get)(e,"data.target.fields.file.url"),alt:Object(r.get)(e,"data.target.fields.file.fileName")});case"ordered-list":return i.a.createElement("ol",{key:t},n.map(((e,t)=>{const a=Object(r.get)(e,"content[0].content");return a?i.a.createElement("li",{key:t},d(a)):null})));case"unordered-list":return i.a.createElement("ul",{key:t},n.map(((e,t)=>{const a=Object(r.get)(e,"content[0].content");return a?i.a.createElement("li",{key:t},d(a)):null})));default:return null}})));return t?i.a.createElement(i.a.Fragment,null,a):i.a.createElement(s.a,null,a)}}}]);
//# sourceMappingURL=27.7c7aa6ea.chunk.js.map
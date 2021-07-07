(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[32],{1347:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(11),r=a(216),l=a.n(r),s=a(6),c=a(1),p=a(791),d=a(23),g=a(7),m=a(721);const h=Object(s.range)(4),u=c.e.div``,f=c.e.div`
    margin-bottom: 10px;
    font-family: VinovestMedium, sans-serif;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
    padding-bottom: 17px;
    border-bottom: 1px solid #caccce;
`,x="\n    margin-top: 20px;\n    border-bottom: 1px solid #caccce;\n    background-color: transparent;\n    color: #242e35;\n    text-decoration: none;\n    text-transform: none;\n    display: block;\n    padding-bottom: 14px;\n\n    .popularTitle {\n        margin-top: 25px;\n        margin-bottom: 14px;\n        font-family: Roslindaledisplaycondensed, sans-serif;\n        font-size: 24px;\n        line-height: 34px;\n        font-weight: 500;\n        margin-top: 0;\n    }\n\n    .popularAuthor {\n        display: inline-block;\n        color: #606060;\n        padding: 7px 0 3px;\n        font-family: VinovestMedium, sans-serif;\n        text-transform: uppercase;\n        font-size: 12px;\n        line-height: 20px;\n        font-weight: 500;\n    }\n",b=c.e.div`
    ${x};
`,w=Object(c.e)(d.b)`
    ${x};
`;var v=({popular:e,pending:t})=>i.a.createElement(u,null,i.a.createElement(f,null,"MOST POPULAR"),e.map((({postTitle:e,blogAuthor:t,postDate:a,slug:n,id:o})=>i.a.createElement(w,{key:o,to:`${g.a.blog}/${n}`},i.a.createElement("h2",{className:"popularTitle"},e),i.a.createElement(m.b,{author:Object(s.get)(t,"fields.authorName",""),date:a})))),!!t&&h.map((e=>i.a.createElement(b,{key:e},i.a.createElement("h2",{className:"popularTitle"},i.a.createElement(l.a,{style:{height:"28px",width:"100%",display:"block",marginBottom:"7px"}}),i.a.createElement(l.a,{style:{height:"28px",width:"50%",display:"block"}})),i.a.createElement(l.a,{style:{height:"20px",width:"50%",display:"block"}})))));const y=c.e.div`
    width: 100%;
    overflow: auto;
    margin-top: 64px;
    margin-bottom: 43.54px;
    height: 39px;

    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;

    @media screen and (max-width: 991px) {
        margin-bottom: 0;
        margin-top: 0;
        height: 114px;
        display: flex;
        align-items: center;
    }

    button {
        font-family: VinovestMono;
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        text-transform: uppercase;
        border: 0;
        outline: 0;
        background: #fff;
        white-space: nowrap;
        margin-right: 10px;
        position: relative;
        color: #606060;

        &:after {
            transition: 0.3s;
            content: " ";
            position: absolute;
            display: block;
            width: 0px;
            bottom: -13px;
            left: 50%;
            transform: translateX(-50%);
            border-bottom: 1.5px solid #242e35;
        }

        &.active {
            color: #242e35;

            @media screen and (min-width: 992px) {
                &:after {
                    width: 34px;
                }
            }
        }

        @media screen and (max-width: 991px) {
            padding-top: 8px;
            padding-bottom: 8px;
            padding-right: 15px;
            padding-left: 15px;

            font-size: 12px;
            line-height: 20px;

            border-radius: 3px;
            box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
        }
    }
`,E=c.e.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: fit-content;
    width: 100%;
    padding-left: 20px;
`;var O=({blogCategories:e,active:t,setActive:a,disabled:n})=>i.a.createElement(y,null,i.a.createElement(E,null,e.map((({name:e})=>i.a.createElement("button",{disabled:n,key:e,type:"button",className:e&&t===e?"active":"",onClick:()=>{t!==e&&a({category:e})}},e))))),j=a(8),k=a(780);var N=function(){return Object(n.useEffect)((()=>{const e=document.querySelector("html"),t=e.style.scrollBehavior;return e.style.scrollBehavior="smooth",()=>{e.style.scrollBehavior=t}}),[]),null};const B=c.e.div`
    margin: 0 auto;
    width: fit-content;
    display: flex;
    align-items: center;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #242e35;
    text-transform: uppercase;

    .page {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        border-radius: 50%;
        transition: color 0.1s;

        &.withDotsRight {
            margin-right: 0;

            &:after {
                content: ". . .";
                display: inline-block;
                margin-left: 10px;
            }
        }
        &.withDotsLeft {
            margin-left: 0;
            &:before {
                content: ". . .";
                display: inline-block;
                margin-right: 10px;
            }
        }

        &:hover {
            cursor: pointer;
        }

        &.currentPage {
            color: #fff;
            background: #242e35;
            position: relative;
            background-color: #242e35;
            width: 28px;
            height: 28px;
            margin: 0;
            pointer-events: none;

            &:hover {
                cursor: default;
            }
        }
    }

    .prevNext {
        margin: 0 35px;

        &:hover {
            cursor: pointer;
        }

        &.disabled {
            color: #d8d8d8;
            &:hover {
                cursor: default;
            }
        }

        @media screen and (max-width: 768px) {
            margin: 0 10px;
        }
    }
`;var P=({totalPages:e,changePage:t,page:a,showElements:n=3})=>{const o=[...new Array(e)].map(((e,t)=>t+1));return i.a.createElement(B,null,e>1&&i.a.createElement("div",{className:"prevNext "+(1===a?"disabled":""),onClick:()=>a>1&&t(a-1)},"prev"),i.a.createElement("div",{className:`page ${a>n+2?"withDotsRight":""} ${1===a?"currentPage":""}`,onClick:()=>t(1)},"1"),o.slice(1,-1).filter((e=>e-a<=n&&a-e<n+1)).map((e=>i.a.createElement("div",{className:"page "+(a===e?"currentPage":""),key:e,onClick:()=>t(e)},e))),e>1&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:`page ${a<e-(n+1)?"withDotsLeft":""} ${a===e?"currentPage":""}`,onClick:()=>t(e)},e),i.a.createElement("div",{className:"prevNext "+(a===e?"disabled":""),onClick:()=>e-a>0&&t(a+1)},"next")))},$=a(792);const M=Object(o.a)((()=>{const e=Object(j.d)(),t=Object(j.f)(),{blogCategories:a,fetchParams:n,updateCategory:o,fetchBlogCategories:r,fetchBlogs:c,blogList:d,isBlogListPagePending:g,popular:m,isPopularPending:h,isPopularPendingDone:u}=t.blog;i.a.useEffect((()=>{1===a.length&&r(),!d.length&&c(1)}),[]);const f=i.a.useMemo((()=>Object(s.range)(g?n.limit:0)),[n.limit,g]),x=h||!u;return i.a.createElement(T,null,i.a.createElement(N,null),i.a.createElement(k.a,{path:"/blog/"}),i.a.createElement(C,null,i.a.createElement("h1",{className:"blogTitleMobile"},"Blog"),i.a.createElement(D,null,!x&&i.a.createElement(p.a,{className:"first",card:m.featured.length?m.featured[0]:{},isBig:!0}),x&&i.a.createElement(l.a,{style:{height:"569.45px",width:"100%",display:"block"}}),i.a.createElement(v,{className:"second",popular:m.mostPopular,pending:x})),i.a.createElement(O,{blogCategories:a,active:n.category,setActive:o,disabled:g}),i.a.createElement($.a,{disable:g?1:0},d.map((e=>i.a.createElement(p.a,{key:e.id,card:e}))),f.map((e=>i.a.createElement(l.a,{key:e,style:{height:"360px",width:"100%",display:"block"}})))),i.a.createElement(z,{hide:n.pagesCount?0:1},i.a.createElement(P,{totalPages:n.pagesCount,page:n.page,changePage:async e=>{g||("latest"===n.category&&await c(e),"latest"!==n.category&&await o({page:e,category:n.category}),window.snapshot&&window.snapshot(),window.scrollTo(0,0))},showElements:e?1:3}))))})),T=c.e.div`
    padding-top: 40px;
    padding-bottom: 142px;
    color: #242e35;

    @media screen and (max-width: 991px) {
        padding-top: 37px;
        padding-bottom: 30px;
    }

    a,
    button {
        transition: 0.3s;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }
`,C=c.e.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    .blogTitleMobile {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        opacity: 0;

        @media screen and (max-width: 991px) {
            position: static;
            width: 100%;
            height: fit-content;
            opacity: 1;
            display: block;
            font-family: Roslindaledisplaycondensed, sans-serif;
            font-size: 36px;
            line-height: 54px;
            font-weight: 500;
            text-align: center;
        }
    }
`,D=c.e.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 45px;
    grid-row-gap: 45px;
    grid-template-columns: 6fr 3fr;

    ${$.b};

    @media screen and (max-width: 1360px) {
        grid-template-columns: 739fr 371fr;
    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: 739fr 451fr;
    }

    @media screen and (max-width: 991px) {
        display: none;
    }
`,z=c.e.div`
    ${({hide:e})=>e?"opacity: 0;":""};

    padding-top: 117px;

    @media screen and (max-width: 991px) {
        padding-top: 91px;
    }
`;t.default=M},721:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(0),i=a.n(n),o=a(1),r=a(30),l=a(19);function s(e,t){Object(l.a)(2,arguments);var a=Object(r.a)(e),n=Object(r.a)(t);return a.getFullYear()-n.getFullYear()}function c(e,t){Object(l.a)(2,arguments);var a=Object(r.a)(e),n=Object(r.a)(t),i=a.getTime()-n.getTime();return i<0?-1:i>0?1:i}var p=a(363);function d(e,t){Object(l.a)(2,arguments);var a=Object(r.a)(e),n=Object(r.a)(t),i=a.getFullYear()-n.getFullYear(),o=a.getMonth()-n.getMonth();return 12*i+o}function g(e){Object(l.a)(1,arguments);var t=Object(r.a)(e);return t.setHours(23,59,59,999),t}function m(e){Object(l.a)(1,arguments);var t=Object(r.a)(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function h(e){Object(l.a)(1,arguments);var t=Object(r.a)(e);return g(t).getTime()===m(t).getTime()}var u=a(20);const f=(e,t)=>{const a=function(e,t){Object(l.a)(2,arguments);var a=Object(r.a)(e),n=Object(r.a)(t),i=c(a,n),o=Math.abs(s(a,n));a.setFullYear("1584"),n.setFullYear("1584");var p=c(a,n)===-i,d=i*(o-p);return 0===d?0:d}(new Date,Object(p.a)(e)),n=function(e,t){Object(l.a)(2,arguments);var a,n=Object(r.a)(e),i=Object(r.a)(t),o=c(n,i),s=Math.abs(d(n,i));if(s<1)a=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-o*s);var p=c(n,i)===-o;h(Object(r.a)(e))&&1===s&&1===c(e,i)&&(p=!1),a=o*(s-p)}return 0===a?0:a}(new Date,Object(p.a)(e));return a>0&&!t?`${a} year${a>1?"s":""} ago`:n>0&&!t?`${n} month${n>1?"s":""} ago`:Object(u.f)(e)},x=o.e.div`
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
`;t.b=({isBig:e,author:t,date:a,full:n})=>i.a.createElement(x,{className:""+(e?"isBig":"")},"BY ",t,a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"divider"},"/")," ",`${f(a,n)}`))},780:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(8);t.a=({path:e})=>{const t=Object(o.a)();return i.a.useEffect((()=>{const a=window.localStorage.getItem(t.saveLastRouterPaths),[n]=a?JSON.parse(a):[];n&&n.includes(e)||window.scrollTo(0,0)}),[t.saveLastRouterPaths,e]),null}},791:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(1),r=a(6),l=a(23),s=a(7),c=a(721);const p=Object(o.e)(l.b)`
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
`;t.a=({isBig:e,card:t})=>{const a=Object(r.get)(t,"heroImage.fields.file.url"),n=Object(r.get)(t,"postTitle"),o=Object(r.get)(t,"blogAuthor.fields.authorName"),l=Object(r.get)(t,"postDate"),d=Object(r.get)(t,"slug");return i.a.createElement(p,{to:`${s.a.blog}/${d}`},i.a.createElement("img",{className:"cardOfArticleImage "+(e?"isBig":""),src:a,alt:n,height:""+(e?"351":"187"),width:""+(e?"740":"356")}),i.a.createElement("div",{className:"wrap "+(e?"isBig":"")},i.a.createElement("h2",{className:"cardOfArticleTitle "+(e?"isBig":"")},n),i.a.createElement(c.b,{isBig:e,author:o,date:l&&new Date(l).toISOString()})))}},792:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(1);const i="\npadding-right: 20px;\npadding-left: 20px;\n",o=n.e.div`
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
`}}]);
//# sourceMappingURL=32.91546685.chunk.js.map
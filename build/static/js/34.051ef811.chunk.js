(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[34],{1251:function(e,t,a){e.exports=a.p+"static/media/downloadIcon.e1c638c1.svg"},1252:function(e,t,a){e.exports=a.p+"static/media/readingMan.7b920099.svg"},1353:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),o=a(214),s=a(1251),c=a.n(s),l=a(1252),d=a.n(l),p=a(687);const m=({children:e,href:t})=>r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t},r.a.createElement("img",{src:c.a,alt:"download icon",className:"downloadSvg"}),e),g=i.e.section`
    width: 1440px;
    max-width: 100%;
    padding: 110px 8.888% 0;
    margin: 0 auto;
    overflow: hidden;

    .sectionDivider {
        width: 100%;
        display: grid;
        grid-column-gap: 100px;
        border-bottom: 1px solid #d8d8d8;
        padding-bottom: 80px;
        grid-auto-columns: 1fr;
        grid-template-columns: 1fr minmax(200px, 654px);
        grid-template-rows: auto;
        grid-row-gap: 16px;
    }
    a {
        color: #242e35;
    }

    ${o.h} {
        line-height: 84px;
        margin-bottom: 20px;
    }
    ${o.e} {
        text-align: start;
        line-height: 36px;
        font-weight: 500;
    }
    ${o.f} {
        text-align: start;
        margin-bottom: 38px;
    }
    .press__materials {
        position: relative;
        padding: 33px 29px 29px;
        border: 2px solid #c5d5e4;
        .imageWrapper {
            position: absolute;
            top: -54px;
            right: -54px;
        }
    }
    .gridContainer {
        display: grid;
        grid-auto-columns: 1fr;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-column-gap: 21px;
        grid-row-gap: 16px;
        grid-template-rows: auto;
        a {
            text-decoration: none;
            border: 1px solid #eee;
            background-color: transparent;
            transition: border-color 350ms;
            font-family: Favoritmonostd, sans-serif;
            font-size: 11px;
            padding: 9px 15px;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 11px;
            min-height: 53px;
            display: flex;
            justify-content: center;
            align-items: center;

            .downloadSvg {
                margin-right: 10px;
                width: 14px;
                object-fit: contain;
                transform: translateY(-4px);
            }
        }
    }
    @media screen and (max-width: 991px) {
        .sectionDivider {
            grid-row-gap: 80px;
            grid-template-columns: 1fr;
        }
    }
    @media screen and (max-width: 768px) {
        padding: 40px 8.888% 0;
    }
    @media screen and (max-width: 767px) {
        .gridContainer {
            margin-top: 20px;
            grid-row-gap: 21px;
            grid-template-columns: 1fr;
        }
        ${o.f} {
            margin-bottom: 20px;
        }
        .press__materials {
            .imageWrapper {
                right: -44px;
            }
        }
    }

    @media screen and (max-width: 450px) {
        ${o.f} {
            margin-top: 40px;
        }
    }
`;var x=()=>r.a.createElement(g,null,r.a.createElement("div",{className:"sectionDivider"},r.a.createElement(p.a,{title:"Press | Vinovest",description:"Get in touch with Vinovest to explore press opportunities. Also access press materials and media coverage."}),r.a.createElement("div",{className:"contactCont"},r.a.createElement(o.h,{as:"h1"},"Press"),r.a.createElement(o.e,null,"For press opportunities please email ",r.a.createElement("a",{href:"mailto:press@vinovest.co"},"press@vinovest.co"))),r.a.createElement("div",{className:"press__materials"},r.a.createElement(o.f,null,"Press materials"),r.a.createElement("div",{className:"imageWrapper"},r.a.createElement("img",{src:d.a,alt:"read icon"})),r.a.createElement("div",{className:"gridContainer"},r.a.createElement(m,{href:"https://drive.google.com/file/d/1DnAMu9YdbnZeRl8I4ce9HDKqEfQtNkD_/view"},"Press Images"),r.a.createElement(m,{href:"https://drive.google.com/file/d/1nayIfQRZ4tpE0cOVRQBbYkw7sAsKSC6Q/view"},"Logos"),r.a.createElement(m,{href:"https://drive.google.com/drive/folders/1Gv-qSEiQ2QpB21n0uHX-sRDLZqfo1b-w?usp=sharing"},"Brand Playbook"),r.a.createElement(m,{href:"https://docs.google.com/document/d/1TJnu_BbRogpmQVlZXJazQZiKtBszlGbj0bJJKvVVN-A/edit#heading=h.fgvl02i1i48d"},"Fact sheet"))))),u=a(216),f=a.n(u),h=a(6),b=a(11),w=a(8),v=a(20);const E=Object(h.range)(3),y=Object(b.a)((()=>{const e=Object(w.f)(),{fetchNewsList:t,isNewsListPending:a,newsList:n,isNewsListDone:i}=e.press;return r.a.useEffect((()=>{a||n.length||i||t()}),[t,a,n,i]),r.a.createElement(N,null,!a&&n.map((e=>r.a.createElement(j,{key:Object(h.get)(e,"sys.id"),item:e}))),a&&E.map((e=>r.a.createElement(j,{key:e,isPending:!0}))))})),j=({item:e={},isPending:t})=>{const a=Object(h.get)(e,"fields.date"),n=Object(h.get)(e,"fields.title"),i=Object(h.get)(e,"fields.image.fields.file.url"),s=Object(h.get)(e,"fields.url");return r.a.createElement("div",{className:"newsItem"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"linkWrapper",href:s},r.a.createElement("div",{className:"textWrapper"},r.a.createElement(o.i,null,t?r.a.createElement(f.a,{style:{height:"16px",width:"100px"}}):Object(v.f)(a)),r.a.createElement(o.f,null,t?r.a.createElement(f.a,{style:{height:"36px",width:"260px"}}):n)),r.a.createElement("div",{className:"logoWrapper"},t?r.a.createElement(f.a,{style:{height:"111px",width:"247px"}}):r.a.createElement("img",{src:i,alt:n}))))},N=i.e.section`
    padding: 0 8.888% 100px;
    margin: 0 auto;
    width: 1440px;
    max-width: 95%;
    .newsItem {
        border-bottom: 1px solid #eee;
    }
    .linkWrapper {
        padding: 65px 0;
        display: flex;
        color: #242e35;
        text-decoration: none;
        justify-content: space-between;
        align-items: center;
    }

    .textWrapper {
        max-width: 770px;
        ${o.i} {
            font-size: 14px;
            margin-bottom: 14px;
            display: block;
        }
        ${o.f} {
            text-align: start;
        }
    }
    .logoWrapper {
        max-width: 247px;
        img {
            width: 100%;
            object-fit: contain;
        }
    }
    @media screen and (max-width: 767px) {
        .linkWrapper {
            flex-direction: column;
            align-items: flex-start;
            padding: 33px 0px;
        }
        .logoWrapper {
            margin-top: 20px;
            max-width: 180px;
        }
    }
`;var O=y;t.default=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(O,null))},687:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(6);const o={title:Object(i.get)(document.querySelector("title"),"innerText"),description:Object(i.get)(document.querySelector('[name="description"]'),"content")},s=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:l(t)})),{}),c=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:l(t)})),{});function l(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(i.get)(t,"content"),tagSelector:e};const a=document.createElement("meta");return a.setAttribute("property",e),a.setAttribute("content",""),{createNode:a,tagSelector:e}}const d=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},p=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(r.a.useEffect((()=>{const a=document.querySelector("title"),n=document.querySelector('[name="description"]');return a.innerHTML=e||o.title,n.content=t||o.description,Object.values(c).forEach(d(e)),Object.values(s).forEach(d(t)),()=>{a.innerHTML=o.title,n.content=o.description,Object.values(c).forEach(p()),Object.values(s).forEach(p())}}),[t,e]),null)}}]);
//# sourceMappingURL=34.051ef811.chunk.js.map
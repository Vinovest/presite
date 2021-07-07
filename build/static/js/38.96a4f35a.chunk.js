(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[38],{1325:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(1),i=a(214),r=a(687),o=a(670);a(10);const m=c.e.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 6.666% 100px;
    color: #242e35;

    br {
        margin-bottom: 16px;
    }
    ${i.h} {
        font-size: 48px;
    }
    ${i.e} {
        font-size: 18px;
        text-align: start;
    }
`,s=c.e.div`
    border: 2px solid #242e35;
    box-shadow: 11px 11px 0 1px #efddc7;
    max-width: 1040px;
    width: 100%;
    margin-top: 78px;
    margin-bottom: 110px;
    padding: 80px 120px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    li {
        margin: 23px;
        line-height: 160%;
        font-family: Favoritstd, sans-serif;
        font-weight: 500;
        font-size: 18px;
    }
    a {
        color: #a86d37;
        text-decoration: none;
    }
    ${i.f} {
        margin-bottom: 13px;

        &.toLeft {
           text-align: left;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 68px 49px 50px;
        
        ul {
            padding: 0;
        }
    }

    @media screen and (max-width: 479px) {
        padding: 58px 30px 34px;
    }

    @media screen and (min-width: 479px) and (max-width: 767px) {
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
`,d=c.e.p`
    margin: 0;
    padding: 0;
    letter-spacing: 0.005em;
    font-size: 20px;
    line-height: 150%;
    font-family: Favoritstd, sans-serif;
    max-width: 700px;
    width: 100%;
    text-align: center;
    color: #242e35;
    margin: 26px 0px 0px;
`;t.default=()=>{const{t:e}=Object(o.a)("accessibility");return l.a.createElement(m,null,l.a.createElement(r.a,{title:e("title"),description:e("title")}),l.a.createElement(i.h,{as:"h1"},e("title")),l.a.createElement(d,null,e("description")),l.a.createElement(s,null,l.a.createElement(i.f,null,e("ada-compliance-statement.title")),l.a.createElement("br",null),l.a.createElement(i.e,null,e("ada-compliance-statement.paragraph1")),l.a.createElement("br",null),l.a.createElement(i.e,null,e("ada-compliance-statement.paragraph2")),l.a.createElement("br",null),l.a.createElement(i.e,null,e("ada-compliance-statement.paragraph3")),l.a.createElement("ul",null,l.a.createElement("li",null,e("ada-compliance-statement.list1")),l.a.createElement("li",null,e("ada-compliance-statement.list2")),l.a.createElement("li",null,e("ada-compliance-statement.list3")),l.a.createElement("li",null,e("ada-compliance-statement.list4")),l.a.createElement("li",null,e("ada-compliance-statement.list5"))),l.a.createElement(i.e,null,e("ada-compliance-statement.last-assessment")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(i.f,{className:"toLeft"},e("feedback.title")),l.a.createElement(i.e,null,e("feedback.paragraph1")),l.a.createElement("br",null),l.a.createElement(i.e,null,e("feedback.paragraph2")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(i.f,{className:"toLeft"}," ",e("reaching-out.title")),l.a.createElement(i.e,null,e("reaching-out.description"),l.a.createElement("a",{href:"mailto:accessibility@vinovest.co"},"accessibility@vinovest.co"))))}},687:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(6);const i={title:Object(c.get)(document.querySelector("title"),"innerText"),description:Object(c.get)(document.querySelector('[name="description"]'),"content")},r=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:m(t)})),{}),o=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:m(t)})),{});function m(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(c.get)(t,"content"),tagSelector:e};const a=document.createElement("meta");return a.setAttribute("property",e),a.setAttribute("content",""),{createNode:a,tagSelector:e}}const s=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},d=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(l.a.useEffect((()=>{const a=document.querySelector("title"),n=document.querySelector('[name="description"]');return a.innerHTML=e||i.title,n.content=t||i.description,Object.values(o).forEach(s(e)),Object.values(r).forEach(s(t)),()=>{a.innerHTML=i.title,n.content=i.description,Object.values(o).forEach(d()),Object.values(r).forEach(d())}}),[t,e]),null)}}]);
//# sourceMappingURL=38.96a4f35a.chunk.js.map
(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[44],{1322:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),c=n(1),r=n(214),a=n(687);const s=c.e.section`
    padding: 100px 8.888% 100px;
    align-items: center;
    display: flex;
    flex-direction: column;
    ${r.h} {
        font-size: 48px;
        line-height: 56px;
        margin-bottom: 70px;
    }
    ${r.e} {
        margin-bottom: 10px;
        width: 100%;
        max-width: 585px;
        text-align: start;
        font-size: 20px;
        line-height: 160%;
    }
    @media screen and (max-width: 768px) {
        ${r.e} {
            max-width: 511px;
        }
    }
    @media screen and (max-width: 767px) {
        ${r.e} {
            font-size: 18px;
        }
    } ;
`;t.default=()=>o.a.createElement(s,null,o.a.createElement(a.a,{title:"The Vinovest Satisfaction Guarantee",description:"As an organization, we're committed to bringing excellence to the customer experience in every way we possible can, including serving our user base with the urgency and care you deserve."}),o.a.createElement(r.h,{as:"h1"},"The Vinovest",o.a.createElement("br",null),"Satisfaction Guarantee"),o.a.createElement(r.e,null,"At Vinovest, we are committed to providing our customers with a great investing experience."),o.a.createElement(r.e,null,"If, for any reason, you are not completely satisfied with your Vinovest account, we will do everything we can to make it right, up to and including waiving Vinovest\u2019s management fees for the next 90 days."))},687:function(e,t,n){"use strict";var i=n(0),o=n.n(i),c=n(6);const r={title:Object(c.get)(document.querySelector("title"),"innerText"),description:Object(c.get)(document.querySelector('[name="description"]'),"content")},a=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:l(t)})),{}),s=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:l(t)})),{});function l(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(c.get)(t,"content"),tagSelector:e};const n=document.createElement("meta");return n.setAttribute("property",e),n.setAttribute("content",""),{createNode:n,tagSelector:e}}const d=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},u=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(o.a.useEffect((()=>{const n=document.querySelector("title"),i=document.querySelector('[name="description"]');return n.innerHTML=e||r.title,i.content=t||r.description,Object.values(s).forEach(d(e)),Object.values(a).forEach(d(t)),()=>{n.innerHTML=r.title,i.content=r.description,Object.values(s).forEach(u()),Object.values(a).forEach(u())}}),[t,e]),null)}}]);
//# sourceMappingURL=44.cc2e7a8d.chunk.js.map
(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[33],{1072:function(e,t,n){e.exports=n.p+"static/media/questionMark.1ba47259.svg"},1073:function(e,t,n){e.exports=n.p+"static/media/advisor.f00b4999.svg"},1074:function(e,t,n){e.exports=n.p+"static/media/investor.02e7cb1f.svg"},1351:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(1),a=n(8),c=n(1072),l=n.n(c),s=n(1073),d=n.n(s),m=n(1074),p=n.n(m);const u=[{img:l.a,title:"All support topics",desc:"The answers to most questions can be found on our Help Page",link:`${window.location.origin}/help`,linkText:"CHECK OUT HELP PAGE"},{img:d.a,title:"For new investors",desc:"If you are interested in growing your wine portfolio",link:null,linkText:"CONTACT PORTFOLIO ADVISORS"},{img:p.a,title:"For current investors",desc:"If you have any account or support related questions",link:`${window.location.origin}/contact-support`,linkText:"CONTACT CUSTOMER SUPPORT TEAM"}];var g=n(214),f=n(687);const h=i.a.createElement("svg",{width:"17",height:"12",viewBox:"0 0 17 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M0 6.00006L15 6.00006",stroke:"#4F81B0",strokeWidth:"1.5"}),i.a.createElement("path",{d:"M10 11.0001L15 6.00006L10 1.00006",stroke:"#4F81B0",strokeWidth:"1.5"})),x=r.e.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 6.666%;
    color: #242e35;

    .image {
        height: 106px;
        object-fit: contain;
    }
    ${g.d} {
        margin-bottom: 125px;
        font-size: 64px;
    }

    ${g.f} {
        margin-bottom: 20px;
    }
    ${g.e} {
        font-family: Favoritstd, sans-serif;
        font-weight: 500;
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.5px;
    }
    ul {
        max-width: 1200px;
        display: grid;
        grid-auto-columns: 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 100px;
        padding: 0;
        grid-row-gap: 80px;
    }
    .imageWrapper {
        margin-bottom: 20px;
    }
    li {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .custom {
        font-family: Favoritmonostd, sans-serif;
        margin-right: 5px;
        font-size: 14px;
        color: #4f81b0;
        background-color: transparent;
        outline: none;
        text-decoration: none;
        border: none;
        cursor: pointer;
    }
    @media (max-width: 1200px) {
        ul {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 767px) {
        ul {
            grid-template-columns: 1fr;
        }
    }
`;var b=()=>{const e=Object(a.a)(),t=Object(o.useCallback)((()=>{window.Calendly.showPopupWidget(e.calendly.contactUsPageUrl)}),[e]);return i.a.createElement(x,null,i.a.createElement(f.a,{title:"Contact Us"}),i.a.createElement(g.d,null,"Contact Us"),i.a.createElement("ul",null,u.map((e=>i.a.createElement("li",{key:e.title},i.a.createElement("div",{className:"imageWrapper"},i.a.createElement("img",{className:"image",alt:e.title,src:e.img,height:"106",width:"153"})),i.a.createElement(g.f,null,e.title),i.a.createElement(g.e,null,e.desc),e.link?i.a.createElement("div",{className:"actionWrapper"},i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"custom",href:e.link},e.linkText),h):i.a.createElement("div",{className:"actionWrapper"},i.a.createElement("button",{type:"button",onClick:t,className:"custom"},e.linkText),h))))))};t.default=()=>i.a.createElement(b,null)},687:function(e,t,n){"use strict";var o=n(0),i=n.n(o),r=n(6);const a={title:Object(r.get)(document.querySelector("title"),"innerText"),description:Object(r.get)(document.querySelector('[name="description"]'),"content")},c=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:s(t)})),{}),l=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:s(t)})),{});function s(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(r.get)(t,"content"),tagSelector:e};const n=document.createElement("meta");return n.setAttribute("property",e),n.setAttribute("content",""),{createNode:n,tagSelector:e}}const d=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},m=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(i.a.useEffect((()=>{const n=document.querySelector("title"),o=document.querySelector('[name="description"]');return n.innerHTML=e||a.title,o.content=t||a.description,Object.values(l).forEach(d(e)),Object.values(c).forEach(d(t)),()=>{n.innerHTML=a.title,o.content=a.description,Object.values(l).forEach(m()),Object.values(c).forEach(m())}}),[t,e]),null)}}]);
//# sourceMappingURL=33.e1596f00.chunk.js.map
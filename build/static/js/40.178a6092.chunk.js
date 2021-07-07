(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[40],{1323:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),r=n(11),c=n(18),l=n(214),s=n(8),d=n(687);const m=Object(r.a)((()=>{const e=Object(s.f)(),[t,n]=o.a.useState(!1),[a,i]=o.a.useState({email:"",Name:"",Phone:"",Question:""}),r=Object(c.g)(),m=({target:e})=>i((t=>({...t,[e.name]:e.value})));return o.a.createElement(p,null,o.a.createElement(d.a,{title:"Contact Us"}),o.a.createElement(l.d,null,"Contact Us"),o.a.createElement(l.b,null,"If you are a Premium or Grand Cru member, please contact your dedicated Portfolio Advisor directly."),t?o.a.createElement(l.b,{className:"thanksMessage"},"Thank you! Your submission has been received!"):o.a.createElement(u,null,o.a.createElement("form",{onSubmit:t=>{t.preventDefault(),n(!0),e.tracking.gtm.contactUsForm({...a,id:a.email})}},o.a.createElement("label",{className:"contact-form-label"},"FULL NAME"),o.a.createElement("input",{type:"text",className:"contactInput",maxLength:"256",placeholder:"Name",required:!0,value:a.Name,name:"Name",onChange:m}),o.a.createElement("label",{className:"contact-form-label"},"Email"),o.a.createElement("input",{type:"email",className:"contactInput",maxLength:"256",placeholder:"Email",required:!0,value:a.email,name:"email",onChange:m}),o.a.createElement("label",{className:"contact-form-label"},"Phone Number"),o.a.createElement("input",{type:"tel",className:"contactInput",maxLength:"256","data-name":"Phone",placeholder:"(___) ___ - ____",value:a.Phone,name:"Phone",onChange:m}),o.a.createElement("label",{className:"contact-form-label"},"Message"),o.a.createElement("textarea",{placeholder:"Briefly describe your question...",maxLength:"5000",required:!0,className:"contactInput contact-form-textarea",value:a.Question,name:"Question",onChange:m}),o.a.createElement("input",{type:"submit",value:"SUBMIT",className:"submit"}))),o.a.createElement(h,{onClick:()=>r.push("/contact-us")},o.a.createElement("svg",{width:"25",height:"16",viewBox:"0 0 25 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M8 15L1 8M1 8L8 1M1 8H23.5",stroke:"#242E35",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))))})),p=i.e.div`
    padding: 120px 0 100px;
    color: #242e35;
    text-align: center;

    ${l.d} {
        font-size: 64px;
        line-height: 70px;
        font-weight: 500;
        letter-spacing: 2px;
    }

    ${l.b} {
        margin: 24px auto 40px;
        max-width: 550px;
        width: fit-content;
        font-family: Favoritstd, sans-serif;
        color: #242e35;
        font-size: 20px;
        line-height: 160%;
        font-weight: 500;

        padding-right: 40px;
        padding-left: 40px;

        &.thanksMessage {
            padding: 20px;
            text-align: center;
            max-width: 380px;
        }
    }
`,u=i.e.div`
    max-width: 462px;
    width: 100%;
    margin: 0 auto;
    text-align: left;
    padding-right: 40px;
    padding-left: 40px;

    .contactInput {
        height: 50px;
        margin-bottom: 22px;
        border: solid 1px #caccce;
        display: block;
        margin-bottom: 25px;
        background-color: #fff;
        font-family: VinovestMedium, sans-serif;
        font-weight: 400;
        padding: 8px 12px;
        outline: 0;
        width: 100%;
        color: #242424;
        font-size: 20px;

        &::placeholder {
            color: #a8abad;
            font-weight: 200;
            font-size: 16px;
            line-height: 26px;
            font-family: Favoritstd book, sans-serif;
        }
    }

    .contact-form-label {
        font-family: Favoritmonostd, sans-serif;
        font-size: 11px;
        line-height: 16px;
        font-weight: 500;
        letter-spacing: 0.7px;
        text-transform: uppercase;
        text-align: left;
        display: block;
        margin-bottom: 5px;
    }

    .contact-form-textarea {
        height: 150px;
    }

    .submit {
        width: 100%;
        height: 50px;
        padding-top: 9px;
        padding-bottom: 9px;
        font-family: Favoritmonostd, sans-serif;
        font-size: 16px;
        width: 100%;
        border-color: #a86d37;
        background-color: #a86d37;
        color: #fff;
        border: 0;
        outline: 0;
        transition: 0.3s;

        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    }
`,h=i.e.button`
    position: fixed;
    width: 60px;
    height: 60px;
    left: 7.749vw;
    top: 40%;
    border: 2px solid #eeeeee;
    box-sizing: border-box;
    background: transparent;
    outline: 0;

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        left: 2.749vw;
    }

    @media screen and (max-width: 1023px) {
        position: fixed;
        z-index: 999;
        top: 0;
        height: 80px;
        left: 10px;
        background: white;
        border: 0;
    }
`;t.default=m},687:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(6);const r={title:Object(i.get)(document.querySelector("title"),"innerText"),description:Object(i.get)(document.querySelector('[name="description"]'),"content")},c=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:s(t)})),{}),l=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:s(t)})),{});function s(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(i.get)(t,"content"),tagSelector:e};const n=document.createElement("meta");return n.setAttribute("property",e),n.setAttribute("content",""),{createNode:n,tagSelector:e}}const d=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},m=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(o.a.useEffect((()=>{const n=document.querySelector("title"),a=document.querySelector('[name="description"]');return n.innerHTML=e||r.title,a.content=t||r.description,Object.values(l).forEach(d(e)),Object.values(c).forEach(d(t)),()=>{n.innerHTML=r.title,a.content=r.description,Object.values(l).forEach(m()),Object.values(c).forEach(m())}}),[t,e]),null)}}]);
//# sourceMappingURL=40.178a6092.chunk.js.map
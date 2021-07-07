(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[26],{1344:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(12),l=i(2),r=i(8),s=i(41),c=i(11),d=i(778);var u=e=>({"choose-the-option":{subPage:"choose-the-option",index:0,title:"Please choose the option that best describes your goal",description:"I want to...",next:"select-wines",prev:"/before-you-liquidate-your-portfolio"},"select-wines":{subPage:"select-wines",index:1,title:"Select wines to sell",description:"It will typically take 2-4 weeks to sell wines on the market.",next:"confirm-your-wines",prev:"choose-the-option"},"confirm-your-wines":{subPage:"confirm-your-wines",index:2,title:"Confirm your wines to be sold",description:"It will typically take 2-4 weeks to sell the wines on the market.",next:"confirm-liquidation",prev:"select-wines"},"confirm-liquidation":{subPage:"confirm-liquidation",index:3,title:"Confirm liquidation",description:"For security reasons, we've sent a confirmation email to your associated email account. Your liquidation process is not complete until you click confirm on that email. Please make sure to check your spam folder in case you do not receive the email.",next:"/",prev:"null"}}),p=i(27),m=i(704),x=i(7),h=i(733),g=i(779),f=i(1),b=i(670);const w=f.e.label`
    margin: 11px 0;
    display: flex;
    max-width: 620px;
    width: 100%;
    min-height: 69px;
    align-items: center;
    padding: 24px 22px;
    background: #edf6ff;
    border-radius: 4px;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #242e35;

    svg {
        width: 22px;
        height: 22px;
        margin-right: 16px;
        flex-shrink: 0;
    }

    div {
        width: 100%;

        a {
            color: #a86d37;
            text-decoration: none;
        }
    }
`;var E=({children:e})=>{const{t}=Object(b.a)();return a.a.createElement(w,null,a.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 12C1 5.92487 5.92487 1 12 1V1C18.0751 1 23 5.92487 23 12V12C23 18.0751 18.0751 23 12 23V23C5.92487 23 1 18.0751 1 12V12Z",stroke:"#4F81B0",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M12 7V13",stroke:"#4F81B0",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M12 16V17",stroke:"#4F81B0",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),a.a.createElement("div",null,e))};var v=({goNext:e,nextTitle:t,selectedSellOption:i,setSelectedSellOption:n})=>{const{t:l}=Object(b.a)(["liquidation"]),r=[a.a.createElement(a.a.Fragment,null,l("before_you_request.sell_options.note")," ",a.a.createElement(p.a,{to:x.a.transactions,target:"_blank"},l("sell-options.transactionTab")))],s=(e=>[{value:"all",text:e("before_you_request.sell_options.all"),id:"sellAllYouWine"},{value:"part",text:e("before_you_request.sell_options.some"),id:"sellPartOffYouWine"}])(l);return a.a.createElement(o.e,{in:!0},a.a.createElement(m.e,null,a.a.createElement(m.b,null,a.a.createElement(m.d,null,s&&s.map((({value:e,text:t,id:o},l)=>a.a.createElement(g.a,{key:o,value:e,text:t,setSelected:n,selected:i,border:s.length-1===l})))),"all"===i&&a.a.createElement(m.c,null,r.map((e=>a.a.createElement(E,{key:e},e))))),a.a.createElement(h.a,{goNext:i?e:null,nextTitle:t})))};const k=Object(f.e)(o.g)`
    outline: 0;
    max-width: 393px !important;
    background: #ffffff;
    width: 100% !important;
    border: 1px solid #a8abad;
    height: 70px;
    color: #242e35;
    margin: 0 auto 0 !important;

    @media screen and (max-width: 1024px) {
        height: 60px;
    }
`,y=f.e.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 57px auto 57px;

    @media screen and (max-width: 1024px) {
        margin: 57px auto 0;
    }
`,q=Object(f.e)(m.a)`
    margin: 52px 0;

    @media screen and (max-width: 1024px) {
        margin: 32px 0;
    }
`;var _=Object(c.a)((()=>{const{t:e}=Object(b.a)(["liquidation"]),t=Object(r.f)(),i=Object(l.f)(t.liquidation.putConfirmWinesLiquidationResendEmailEntity).isPending();return a.a.createElement(o.e,{in:!0},a.a.createElement(y,null,a.a.createElement(k,{disabled:i,onClick:()=>t.liquidation.resendEmail()},e("resend_email")),a.a.createElement(q,null,e("please")," ",a.a.createElement("a",{href:"https://www.vinovest.co/contact-support",target:"_blank",rel:"noopener noreferrer"},e("contact_support"))," ",e("did_not_get_email"))))})),L=i(216),j=i.n(L),C=i(794),O=i(734),W=i(17);const P=f.e.div`
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    grid-template-rows: 1fr;
    gap: 1px 0px;
    grid-template-areas: ". . .";
    background: #eeeeee;
    max-width: 780px;
    width: 100%;
    margin: 51px auto 31px;
    border-bottom: 1px solid #eeeeee;
`,S=f.e.div`
    padding: 17px 0;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #767a7f;
    background: #fff;
    ${({hide:e})=>e?"color: transparent;":""}
`,M=Object(f.e)(S)`
    min-width: 175px;

    @media screen and (max-width: 1024px) {
        min-width: 85px;
    }
`,I=f.e.div`
    padding: 17px 0;
    padding-right: 10px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.005em;
    color: #242e35;
    background: #fff;
`,z=Object(f.e)(I)`
    min-width: 160px;
    width: 100%;
`,A=Object(f.e)(I)`
    padding-right: 15px;
`,B=f.e.div`
    width: fit-content;
    margin: 0 auto;
    padding-bottom: 10px;
`,V=f.e.div`
    width: 100%;
    margin-top: 50px;
`;var F=Object(c.a)((({liquidateWinesList:e=[],liquidateWinesListPending:t,goNext:i,selectedWines:n=[],setSelectedWines:s,confirmMode:c,onRequestWithdrawalClick:d})=>{const{t:u}=Object(b.a)(["liquidation"]),m=Object(r.f)(),g=Object(l.f)(m.liquidation.postWinesToLiquidateStatusEntity).isPending();a.a.useEffect((()=>{m.auth.isAuthenticated&&m.user.oktaUserInfo&&m.user.oktaUserInfo.sub&&(m.liquidation.liquidateWinesList.length||m.liquidation.fetchLiquidateWinesList())}),[m.auth.isAuthenticated,m.user.oktaUserInfo.sub]);const f=({target:e})=>{s((t=>t.includes(e.value)?t.filter((t=>t!==e.value)):[...t,e.value]))},w=e.length!==n.length||t?null:a.a.createElement(B,null,a.a.createElement(E,null,u("before_you_request.select_wines.note")," ",a.a.createElement(p.a,{to:x.a.transactions,target:"_blank"},u("before_you_request.select_wines.transaction_tab"))));return a.a.createElement(o.e,{in:!0},a.a.createElement("div",null,a.a.createElement(P,null,a.a.createElement(S,null,u("before_you_request.select_wines.holdings.title")),a.a.createElement(M,null,u("before_you_request.select_wines.holdings.quantity")),a.a.createElement(S,{hide:c},u("before_you_request.select_wines.holdings.sell")),e.map((({name:e,lwin18:i,bottleCount:o,pending:l})=>a.a.createElement(a.a.Fragment,{key:i},a.a.createElement(z,null,l?a.a.createElement(j.a,{style:{height:"24px",maxWidth:"240px",width:"100%",display:"block",margin:"0"}}):e),a.a.createElement(I,null,l?a.a.createElement(j.a,{style:{height:"24px",maxWidth:"50px",width:"100%",display:"block",margin:"0"}}):(({lwin18:e,bottleCount:t,t:i})=>{const n=e&&+e.slice(11,13),a=i(n>1?"before_you_request.select_wines.case":"before_you_request.select_wines.bottle"),o=n?(+t/+n).toFixed(0):+t;return`${o} ${a}${o>1?"s":""}`})({bottleCount:o,lwin18:i,t:u})),a.a.createElement(A,null,c?a.a.createElement(O.a,{color:n.includes(i)?"#448B47":"#fff"}):a.a.createElement(a.a.Fragment,null,t?a.a.createElement(j.a,{style:{height:"24px",width:"24px",display:"block",margin:"0"}}):a.a.createElement(C.a,{id:i,value:i,checked:n.includes(i),onChange:f,disabled:t}))))))),!c&&w,a.a.createElement(V,null,c?a.a.createElement(h.a,{goNext:()=>{try{W.a.capture("click_sell_my_wine",{})}catch(e){}d(i)},nextTitle:u("before_you_request.select_wines.sell_wine_button"),disabled:t||g,isLoading:g}):a.a.createElement(h.a,{goNext:n.length?i:null,disabled:t}))))}));i(43),i(31);t.default=Object(c.a)((()=>{const{t:e}=Object(b.a)(["liquidation"]),t=Object(s.a)(),[i,n]=a.a.useState("choose-the-option"),[c,p]=a.a.useState(null),[m,x]=a.a.useState([]),h=Object(r.f)(),{liquidateWinesList:g,winesInLiquidationProcess:f}=h.liquidation,w=Object(l.f)(h.liquidation.winesInLiquidationProcessEntity).isDone(),E=Object(l.f)(h.liquidation.liquidateWinesListEntity).isPending();f.length&&w&&"confirm-liquidation"!==i&&n("confirm-liquidation"),a.a.useEffect((()=>{c&&!E&&x("all"===c?g.map((({lwin18:e})=>e)):[])}),[c,g,E]),a.a.useEffect((()=>(h.auth.isAuthenticated&&h.user.oktaUserInfo&&h.user.oktaUserInfo.sub&&(h.liquidation.liquidateWinesList.length||h.liquidation.fetchWinesInLiquidationProcess()),()=>{h.liquidation.resetState()})),[h.auth.isAuthenticated,h.user.oktaUserInfo.sub]),a.a.useEffect((()=>window.scrollTo(0,0)),[i]);const k=a.a.useMemo((()=>u(e)),[e]),{title:y,next:q,prev:L,description:j,subPage:C}=k[i]||{},O=e=>e.includes("/")?t.push(e):n(e),P=L?()=>O(L):null,S=q?()=>O(q):null;let M=null,I=!0;const z=a.a.useMemo((()=>g.filter((({lwin18:e})=>m.includes(e)))),[g,m]),A=a.a.useCallback((e=>{const t=z.map((({lwin18:e,bottleCount:t})=>({lwin18:e,quantity:t})));h.liquidation.liquidateWines(t,e)}),[h.liquidation,z]);switch(C){case"choose-the-option":M=a.a.createElement(v,{goNext:()=>{try{W.a.capture("click_next_describe_goal",{})}catch(e){}S()},selectedSellOption:c,setSelectedSellOption:p});break;case"select-wines":M=a.a.createElement(F,{selectedWines:m,setSelectedWines:x,goNext:()=>{try{W.a.capture("click_next_select_wines_to_sell",{})}catch(e){}S()},liquidateWinesList:g,liquidateWinesListPending:E});break;case"confirm-your-wines":M=a.a.createElement(F,{selectedWines:m,goNext:S,liquidateWinesList:z,liquidateWinesListPending:E,onRequestWithdrawalClick:A,confirmMode:!0});break;case"confirm-liquidation":I=!1,M=a.a.createElement(_,null);break;default:I=!1,M=null}return a.a.createElement(o.e,{in:!0},w?a.a.createElement(d.a,{title:y,goBack:I?P:null,description:j},M):a.a.createElement(o.b,null))}))},704:function(e,t,i){"use strict";i.d(t,"e",(function(){return a})),i.d(t,"b",(function(){return o})),i.d(t,"d",(function(){return l})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return s}));var n=i(1);const a=n.e.div`
    width: 100%;
`,o=n.e.div`
    width: 100%;
    margin-bottom: 76px;

    @media screen and (max-width: 767px) {
        margin-bottom: 65px;
    }
`,l=n.e.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 45px;

    @media screen and (max-width: 767px) {
        padding-bottom: 27px;
    }
`,r=Object(n.e)(l)`
    margin-bottom: 0;
    padding: 0;

    @media screen and (max-width: 767px) {
        padding-bottom: 0;
    }
`,s=n.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.005em;
    color: #242e35;
    margin: 0 auto 42px;
    max-width: 783px;
    text-align: center;

    a {
        color: #a86d37;
        text-decoration: none;
    }

    @media screen and (max-width: 767px) {
        margin: 32px 0;
        font-size: 11px;
        line-height: 21px;
        max-width: 317px;
    }
`;n.e.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 28px;

    img {
        margin-bottom: 62px;
        max-width: 319px;
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        padding-top: 46px;

        img {
            margin-bottom: 58px;
            max-width: 257px;
            width: 100%;
        }
    }
`},733:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(113),l=i.n(o),r=i(12),s=i(1),c=i(670);const d=Object(s.e)(r.g)`
    outline: 0;
    max-width: 393px !important;
    width: 100% !important;
    height: 70px;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 1024px) {
        height: 60px;
    }
`;t.a=({goNext:e,nextTitle:t,disabled:i,isLoading:n})=>{const{t:o}=Object(c.a)(["liquidation"]);return a.a.createElement(d,{disabled:!e||i,onClick:e},n?a.a.createElement(l.a,{size:8,margin:"10px",color:"#828282",loading:!0}):t||o("next"))}},734:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(1);t.a=({color:e})=>a.a.createElement(l,null,a.a.createElement("svg",{width:"17",height:"13",viewBox:"0 0 17 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M15.9211 0.0103244C15.7132 0.0421079 15.5212 0.146403 15.3757 0.306681L5.58743 10.6635L1.53356 7.23209C1.33808 7.06662 1.08848 6.99008 0.839673 7.01933C0.590864 7.04858 0.363228 7.18123 0.206842 7.38807C0.0504564 7.59491 -0.0218689 7.859 0.00577645 8.12226C0.0334218 8.38552 0.158773 8.62639 0.354256 8.79186L5.07149 12.7848C5.25303 12.9367 5.481 13.0127 5.71202 12.9983C5.94305 12.9839 6.16102 12.8802 6.3245 12.7069L16.7024 1.72607C16.8487 1.58067 16.9474 1.38969 16.9841 1.18088C17.0208 0.972079 16.9936 0.756351 16.9065 0.565018C16.8194 0.373684 16.6768 0.216733 16.4996 0.11698C16.3224 0.0172268 16.1198 -0.0201406 15.9211 0.0103244Z",fill:e||"#FAE8D1"})));const l=o.e.div`
    width: 11px;

    svg {
        width: 100%;
    }
`},778:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(219),l=i(1),r=i(12),s=i(704);const c=l.e.div`
    width: 100%;
`,d=l.e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 91px 186px 78px;
    min-height: fit-content;
    position: relative;

    @media screen and (max-width: 1024px) {
        padding: 59px 20px 105px;
    }
`,u=Object(l.e)(o.a)`
    margin: 0;
    max-width: 712px;
    text-align: center;

    @media screen and (max-width: 767px) {
        max-width: 286px;
    }
`;l.e.button`
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
        top: 2px;
        left: 10px;
        background: white;
        border: 0;
    }
`;t.a=({children:e,title:t,goBack:i,description:n})=>a.a.createElement(d,null,a.a.createElement(u,null,t),a.a.createElement(s.a,null,n),a.a.createElement(c,null,e),i&&a.a.createElement(r.a,{goBack:i}))},779:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(1),l=i(734),r=i(670);const s=o.e.label`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 620px;
    width: 100%;
    min-height: 50px;
    background: #ffffff;
    border: 1px solid #a8abad;
    border-bottom: 0;
    ${({border:e})=>e?"border: 1px solid #a8abad;":""}
    box-sizing: border-box;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
    align-items: center;
    padding: 0 20px 0 30px;
    color: #242e35;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    input[type="checkbox"] {
        opacity: 0;
        position: absolute;
    }

    &.selected {
        background: #242e35;
        border: 1px solid #242e35;
        box-sizing: border-box;
        color: #fae8d1;
    }

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1024px) {
        padding: 14px 15px;
        line-height: 26px;
    }
`,c=o.e.label`
    width: 15px;
    flex-shrink: 0;
`;t.a=({value:e,text:t,setSelected:i,selected:n,border:o})=>{const{t:d}=Object(r.a)(["liquidation"]);return a.a.createElement(s,{className:n===e?"selected":"",border:o},t,a.a.createElement(c,null,n===e&&a.a.createElement(l.a,null)),a.a.createElement("input",{onChange:()=>i(e),type:"checkbox",checked:n===e}))}},794:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(1),l=({checked:e})=>a.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("rect",{x:"0.5",y:"0.5",width:"23",height:"23",rx:"3.5",fill:e?"#A86D37":"white",stroke:e?"#A86D37":"#A8ABAD"}),e&&a.a.createElement("path",{d:"M7 12.2353L11.1905 16L18 8",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}));const r=o.e.label`
    position: relative;
    display: block;

    input[type="checkbox"] {
        opacity: 0;
        position: absolute;
        width: 1px;
        height: 1px;
    }

    &:hover {
        cursor: pointer;
    }
`;t.a=({id:e,value:t,checked:i,onChange:n,disabled:o})=>a.a.createElement(r,{htmlFor:e},a.a.createElement(l,{checked:i}),a.a.createElement("input",{id:e,type:"checkbox",onChange:n,value:t,checked:i,disabled:o}))}}]);
//# sourceMappingURL=26.9f9d7475.chunk.js.map
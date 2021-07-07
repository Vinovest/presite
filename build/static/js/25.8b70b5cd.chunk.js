(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[25],{1321:function(e,t,i){"use strict";i.r(t),i.d(t,"SubscribeWrapper",(function(){return k}));var n=i(0),a=i.n(n),o=i(12),r=i(41),l=i(1),d=i(11),c=i(794),s=i(8),p=i(2),m=i(704),u=i(733),x=i(778),h=i(779),b=i(670);const f=l.e.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,g=l.e.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,w=Object(l.e)(m.b)`
    margin: 0;
    @media screen and (max-width: 1024px) {
        margin: 0;
    }
`,v=l.e.textarea`
    margin: 6px auto 75px;
    padding: 17px 30px;
    width: 100%;
    max-width: 620px;
    min-height: 100px;
    background: #ffffff;
    border: 1px solid #a8abad;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 1024px) {
        padding: 14px 15px;
        min-height: 141px;
        margin: 16px auto 36px;
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.005em;
        color: #242e35;
    }
`,k=l.e.div`
    display: flex;
    margin-bottom: 52px;

    label {
        display: block;
        margin-left: 25px;
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.005em;
        color: #242e35;

        @media screen and (max-width: 1024px) {
            margin-left: 17px;
            font-size: 14px;
            line-height: 21px;
        }
    }

    svg {
        @media screen and (max-width: 1024px) {
            width: 22px;
        }
    }
`,_=l.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #242e35;
    text-align: center;
    margin-top: 55px;

    a {
        color: #a86d37;
        text-decoration: none;
    }

    @media screen and (max-width: 1024px) {
        margin-top: 37px;
    }
`;t.default=Object(d.a)((()=>{const{t:e}=Object(b.a)(["liquidation"]),t=Object(r.a)(),i=Object(s.f)(),{confirmWinesLiquidationStatus:n}=i.liquidation,l=Object(p.f)(i.liquidation.confirmWinesLiquidationStatusEntity).isFailed(),d=a.a.useMemo((()=>(e=>[e("before_you_request.feedback_options.option1"),e("before_you_request.feedback_options.option2"),e("before_you_request.feedback_options.option3"),e("before_you_request.feedback_options.option4"),e("before_you_request.feedback_options.option5")])(e)),[e]);a.a.useEffect((()=>{i.auth.isAuthenticated&&i.user.oktaUserInfo&&i.user.oktaUserInfo.sub&&i.liquidation.confirmWinesLiquidation()}),[i.auth.isAuthenticated,i.user.oktaUserInfo.sub]);const[E,y]=a.a.useState(null),[q,C]=a.a.useState(""),[j,O]=a.a.useState(!0),F=Object(s.d)();return a.a.createElement(o.e,{in:!0},n.completed?a.a.createElement("div",null,l?a.a.createElement(g,null,a.a.createElement(_,null,F?a.a.createElement(a.a.Fragment,null,e("feedback_options.support.mobile_email")," ",a.a.createElement("a",{href:"mailto:support@vinovest.co"},"support@vinovest.co")," ",e("before_you_request.feedback_options.support.mobile_questions")):a.a.createElement(a.a.Fragment,null,e("before_you_request.feedback_options.support.email")," ",a.a.createElement("a",{href:"mailto:support@vinovest.co"},e("before_you_request.feedback_options.support.support"))," ",e("before_you_request.feedback_options.support.mobile_questions")))):a.a.createElement(x.a,{title:e("Your wines are scheduled to be sold"),description:a.a.createElement(a.a.Fragment,null,e("before_you_request.feedback_options.completed.description")," ",a.a.createElement("br",null),a.a.createElement("br",null)," ",e("before_you_request.feedback_options.completed.feedback"))},a.a.createElement(f,null,a.a.createElement(w,null,a.a.createElement(m.d,null,d.map(((e,t)=>a.a.createElement(h.a,{key:e,value:e,text:e,setSelected:y,selected:E,border:d.length-1===t}))))),a.a.createElement(v,{placeholder:e("optional_feedback"),value:q,onChange:({target:e})=>C(e.value)}),a.a.createElement(k,null,a.a.createElement(c.a,{id:"scheduledToBeSold",checked:j,onChange:()=>O((e=>!e))})," ",a.a.createElement("label",{htmlFor:"scheduledToBeSold"},e("feedback-options.subscribe.label"))),a.a.createElement(u.a,{goNext:E?()=>{"I choose not to respond"!==E?i.tracking.gtm.liquidationFeedback({selectedFeedBackOption:E}):i.tracking.gtm.liquidationNoFeedback(),q&&i.tracking.gtm.liquidationNewsletterOptIn({feedBackOptional:q}),j&&i.tracking.gtm.trackLiquidationFlowNewsletter(),t.replace("/")}:null,nextTitle:"Done"}),a.a.createElement(_,null,F?a.a.createElement(a.a.Fragment,null,e("before_you_request.feedback_options.support.mobile_email")," ",a.a.createElement("a",{href:"mailto:support@vinovest.co"},"support@vinovest.co")," ",e("before_you_request.feedback_options.support.mobile_questions")):a.a.createElement(a.a.Fragment,null,e("before_you_request.feedback_options.support.email")," ",a.a.createElement("a",{href:"mailto:support@vinovest.co"},e("before_you_request.feedback_options.support.support"))," ",e("before_you_request.feedback_options.support.mobile_questions")))))):a.a.createElement(o.b,null))}))},704:function(e,t,i){"use strict";i.d(t,"e",(function(){return a})),i.d(t,"b",(function(){return o})),i.d(t,"d",(function(){return r})),i.d(t,"c",(function(){return l})),i.d(t,"a",(function(){return d}));var n=i(1);const a=n.e.div`
    width: 100%;
`,o=n.e.div`
    width: 100%;
    margin-bottom: 76px;

    @media screen and (max-width: 767px) {
        margin-bottom: 65px;
    }
`,r=n.e.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 45px;

    @media screen and (max-width: 767px) {
        padding-bottom: 27px;
    }
`,l=Object(n.e)(r)`
    margin-bottom: 0;
    padding: 0;

    @media screen and (max-width: 767px) {
        padding-bottom: 0;
    }
`,d=n.e.div`
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
`},733:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(113),r=i.n(o),l=i(12),d=i(1),c=i(670);const s=Object(d.e)(l.g)`
    outline: 0;
    max-width: 393px !important;
    width: 100% !important;
    height: 70px;
    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 1024px) {
        height: 60px;
    }
`;t.a=({goNext:e,nextTitle:t,disabled:i,isLoading:n})=>{const{t:o}=Object(c.a)(["liquidation"]);return a.a.createElement(s,{disabled:!e||i,onClick:e},n?a.a.createElement(r.a,{size:8,margin:"10px",color:"#828282",loading:!0}):t||o("next"))}},734:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(1);t.a=({color:e})=>a.a.createElement(r,null,a.a.createElement("svg",{width:"17",height:"13",viewBox:"0 0 17 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M15.9211 0.0103244C15.7132 0.0421079 15.5212 0.146403 15.3757 0.306681L5.58743 10.6635L1.53356 7.23209C1.33808 7.06662 1.08848 6.99008 0.839673 7.01933C0.590864 7.04858 0.363228 7.18123 0.206842 7.38807C0.0504564 7.59491 -0.0218689 7.859 0.00577645 8.12226C0.0334218 8.38552 0.158773 8.62639 0.354256 8.79186L5.07149 12.7848C5.25303 12.9367 5.481 13.0127 5.71202 12.9983C5.94305 12.9839 6.16102 12.8802 6.3245 12.7069L16.7024 1.72607C16.8487 1.58067 16.9474 1.38969 16.9841 1.18088C17.0208 0.972079 16.9936 0.756351 16.9065 0.565018C16.8194 0.373684 16.6768 0.216733 16.4996 0.11698C16.3224 0.0172268 16.1198 -0.0201406 15.9211 0.0103244Z",fill:e||"#FAE8D1"})));const r=o.e.div`
    width: 11px;

    svg {
        width: 100%;
    }
`},778:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(219),r=i(1),l=i(12),d=i(704);const c=r.e.div`
    width: 100%;
`,s=r.e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 91px 186px 78px;
    min-height: fit-content;
    position: relative;

    @media screen and (max-width: 1024px) {
        padding: 59px 20px 105px;
    }
`,p=Object(r.e)(o.a)`
    margin: 0;
    max-width: 712px;
    text-align: center;

    @media screen and (max-width: 767px) {
        max-width: 286px;
    }
`;r.e.button`
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
`;t.a=({children:e,title:t,goBack:i,description:n})=>a.a.createElement(s,null,a.a.createElement(p,null,t),a.a.createElement(d.a,null,n),a.a.createElement(c,null,e),i&&a.a.createElement(l.a,{goBack:i}))},779:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(1),r=i(734),l=i(670);const d=o.e.label`
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
`;t.a=({value:e,text:t,setSelected:i,selected:n,border:o})=>{const{t:s}=Object(l.a)(["liquidation"]);return a.a.createElement(d,{className:n===e?"selected":"",border:o},t,a.a.createElement(c,null,n===e&&a.a.createElement(r.a,null)),a.a.createElement("input",{onChange:()=>i(e),type:"checkbox",checked:n===e}))}},794:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(1),r=({checked:e})=>a.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("rect",{x:"0.5",y:"0.5",width:"23",height:"23",rx:"3.5",fill:e?"#A86D37":"white",stroke:e?"#A86D37":"#A8ABAD"}),e&&a.a.createElement("path",{d:"M7 12.2353L11.1905 16L18 8",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}));const l=o.e.label`
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
`;t.a=({id:e,value:t,checked:i,onChange:n,disabled:o})=>a.a.createElement(l,{htmlFor:e},a.a.createElement(r,{checked:i}),a.a.createElement("input",{id:e,type:"checkbox",onChange:n,value:t,checked:i,disabled:o}))}}]);
//# sourceMappingURL=25.8b70b5cd.chunk.js.map
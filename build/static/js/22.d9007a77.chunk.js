(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[22],{1326:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(18),o=n(17),l=n(11),s=n(8),c=n(222),m=n(1);var p=m.e.div``;var u=m.e.div`
  width: 100%;
  background: ${e=>e.theme.colors[e.selected?"mainAccentBlue":"white"]};
  color: ${e=>e.theme.colors[e.selected?"mainInnerTaupe":"mainAccentBlue"]};

  border: 0.5px solid ${({selected:e,theme:t})=>e?t.colors.mainAccentBlue:"#D9D9D9"};
  border-top: ${({isFirstRow:e})=>!e&&"none"}

  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  letter-spacing: 0.005em;
  margin: 0;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
    z-index: 2;
  }

  ${({theme:e})=>e.media.greaterThan("1024px")`
    padding: 10px 30px;
    width: 65%;
  `}
`;var d=m.e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 22px;
    position: relative;
`;m.e.span`
    border: 0 inset #ccc;
    background: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: 0.005em;
    color: #242424;
    margin-top: 12px;
    margin-bottom: 50px;
    padding-left: 15px;
    @media screen and (min-width: 768px) {
        max-width: 400px;
        margin: 0 auto;
        margin-bottom: 50px;
    }
`;m.e.input`
    border: 0;
    padding: 10px 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: 0.005em;
    color: #242424;
    width: 90%;
    margin-left: 12px;
    :focus {
        outline: 0;
    }
`;m.e.input`
    background: ${({theme:e})=>e.colors.mainAccentBlue};
    color: ${({theme:e})=>e.colors.mainInnerTaupe};
    width: 100%;
    height: 50px;
    padding-left: 15px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 25px;
    outline: 0;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;

    ${({theme:e})=>e.media.greaterThan("1024px")`
    width: 65%;
  `}
`;m.e.div`
    background: #f8f8f8;
    padding: 24px 20px;
    text-align: center;
    @media screen and (min-width: 768px) {
        margin: 0 auto;
        text-align: center;
        background: #fff;
    }
`;const g=m.e.div`
    margin-bottom: 22px;
    color: ${({theme:e})=>e.colors.mainAccentBlue};

    ${({theme:e})=>e.media.lessThan("1024px")`
    margin-bottom: 50px;
  `}
`,h=m.e.div`
    font-family: VinovestMono;
    font-size: ${e=>e.theme.typography.size.sm}px;
    letter-spacing: 0.005em;
    padding-left: 14px;
    padding-bottom: 22px;
    text-align: center;

    ${e=>e.theme.media.greaterThan("medium")`
    font-size: ${e=>e.theme.typography.size.md}px;
    padding-left: 0;
    line-height: 30px;
  `}
`,b=m.e.div`
    font-family: RoslindaleDisplayCondensed;
    font-size: ${({theme:e})=>2*e.typography.size.sm}px;
    line-height: 24px;
    letter-spacing: 0.005em;
    padding-left: 14px;
    margin-bottom: 18px;
    text-align: center;
    ${e=>e.theme.media.greaterThan("medium")`
    padding-left: 0;
    font-size: ${({theme:e})=>4*e.typography.size.sm}px;
    line-height: initial;
    margin-bottom: 60px;
  `}
`,x=m.e.div`
    padding: 30px 20px;
    background: ${({theme:e})=>e.colors.white};
    height: 90vh;
`,f=m.e.div`
    @media screen and (min-width: 768px) {
        padding: 0px 20vw;
    }
`;var v=n(5),y=n.n(v),w=n(41),E=n(12),O=n(883),j=n.n(O),k=n(744);const C=m.e.div`
    margin-top: 56px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        width: 100%;
        max-width: 570px;
        border: 1px solid #e6e6e6;
        margin-top: 53px;
        margin-bottom: 56px;
        border: 1px solid #242e35;
        box-sizing: border-box;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
    }
`,z=m.e.div`
    padding: 0 20px 37px;
    @media screen and (min-width: 768px) {
        padding: 57px 42px 56px;
    }
`,$=m.e.div`
    background-color: ${({theme:e})=>e.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 90vh;
`;m.e.div`
    height: 1px;
    width: 100%;
    background-color: #e5e5e5;
    margin: 32px 0;
`;var q=n(23);Object(m.e)(q.b)`
    border: none;
    outline: none;
    background-color: transparent;
    font-size: ${e=>e.theme.typography.size.md}px;
    line-height: 20px;
    text-align: center;
    color: ${e=>e.theme.colors.disclaimerGray};
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        text-decoration: underline;
    }
`;const _=m.e.div`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #242e35;
`,S=m.e.div`
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #242e35;
    margin-top: 11px;

    @media screen and (min-width: 768px) {
        font-size: 45px;
        line-height: 60px;
        margin-top: 16px;
    }
`,R=m.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #242424;
    margin-top: 23px;
    /* margin-bottom: 24px; */

    span {
        margin-bottom: 25px;
    }

    img {
        width: 21px;
        margin: 0 15px 0 16px;
    }

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;

        img {
            width: 21px;
            margin: 0 32px 0 16px;
        }
    }
`,P=m.e.div`
    display: flex;
    justify-content: center;
    margin: 30px 0 36.13px;

    img {
        width: 297px;
    }

    @media screen and (min-width: 768px) {
        margin: 30px 0 38.13px;
    }
`;var A=n(670),V=n(13);var T=Object(l.a)((()=>{const e=Object(s.f)(),t=Object(s.b)(),{t:n}=Object(A.a)(["risk-tolerance"]);Object(a.useEffect)((()=>{(async()=>{await e.user.updateProfile()})()}),[e.user]);const r=e.quiz.investingStyle?e.quiz.investingStyle:V.g.MODERATE,l=Object(k.a)(n).filter((e=>e.id==r.toLowerCase()));return Object(a.useEffect)((()=>{Object(c.a)(),window.scrollTo(0,0)}),[]),i.a.createElement($,null,i.a.createElement(C,null,i.a.createElement(z,null,i.a.createElement(_,null,n("your_portfolio.plan_title")),i.a.createElement("div",null,i.a.createElement(S,null,l[0].planName),i.a.createElement(P,null,i.a.createElement("img",{src:l[0].svg,alt:l[0].planName})),i.a.createElement(_,null,n("your_portfolio.plan_subtitle")),i.a.createElement(R,null,l[0][1].map((e=>i.a.createElement("div",{key:e,style:{display:"flex",alignItems:"center",width:"auto"}},i.a.createElement("img",{alt:"green checkmark",src:j.a,style:{alignSelf:"flex-start",width:"30px",height:"30px"}}),i.a.createElement("span",null,e))))),i.a.createElement(F,{onClick:()=>{o.a.capture("quiz_completed",{}),t("/")}},n("buttons.next"))))))}));const F=Object(m.e)(E.g)`
    margin-top: 149px;
    font-size: 14px;
    line-height: 18px;

    @media screen and (min-width: 768px) {
        margin-top: 15px;
        max-width: 393px;
        height: 60px;
        font-size: 16px;
        line-height: 18px;
    }
`;let N;!function(e){e.Email="email_entry",e.Password="password_entry",e.Name="name_entry",e.Question_1="q1_entry",e.Question_2="q2_entry",e.Question_3="q3_entry",e.PhoneNumber="phone_number_entry",e.Question_4="q4_entry",e.Submitted="quiz_completed"}(N||(N={}));var Q=n(10).a.t("risk-tolerance:quiz.options.question-options");const B=[N.Question_1,N.Question_2,N.Question_3];function L(e,t){const n=Q[e.page].name;switch(o.a.capture(B[e.page],{[`${n}`]:JSON.stringify(t.payload.values[n]),value:JSON.stringify(t.payload.values[n])}),t.type){case"next":return{page:Math.min(e.page+1,t.payload.pages-1),values:t.payload.values};case"previous":return{...e,page:Math.max(e.page-1,0)};default:throw new Error}}const M=e=>({values:e,page:0});var I=n(736),D=n(706),J=n.n(D),W=n(6),K=n.n(W);function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class G{static setValue(e,t){const n=Object(W.isObject)(t)?JSON.stringify(t):t;this.storage.setItem(this.getKey(e),n)}static getValue(e){try{const t=this.storage.getItem(this.getKey(e));return function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(t)?JSON.parse(t):t}catch(t){return null}}static has(e){return null!==this.storage.getItem(this.getKey(e))}static clear(){this.storage.clear()}static getKey(e){return this.storageKeyPrefix.concat(e)}}U(G,"storage",window.sessionStorage),U(G,"storageKeyPrefix","vinovest__");const H=J()(((e,t)=>{G.setValue(e,t)}),300),Z=({form:e})=>{const{initialize:t}=Object(I.e)(),n=i.a.useCallback((({values:t})=>H(e,t)),[e]);return i.a.useEffect((()=>{const n=G.getValue(e);n&&t(n)}),[]),i.a.createElement(I.c,{onChange:n})};Z.propTypes={form:y.a.string.isRequired};var X=Z;const Y=({disableSubmit:e})=>{const{t}=Object(A.a)(["risk-tolerance"]);return i.a.createElement(E.g,{disabled:e,type:"submit"},t("buttons.continue"))};Y.propTypes={disableSubmit:y.a.bool.isRequired};var ee=Y;const te=({page:e,next:t,values:n,children:r,onSubmit:o})=>{const l=Object(a.useMemo)((()=>i.a.Children.toArray(r)[e]),[r,e]),s=Object(a.useCallback)((n=>{const a=i.a.Children.count(r);if(e===a-1)return o(n);t(n,a)}),[o,r,e,t]);return i.a.createElement(I.b,{initialValues:n,onSubmit:s},(({handleSubmit:t,submitting:n,invalid:a})=>i.a.createElement("form",{onSubmit:t},i.a.createElement(E.e,{in:!0,timeout:700,key:e},i.a.createElement("div",null,l,i.a.createElement(ee,{disableSubmit:a||n}))),i.a.createElement(X,{form:"quiz"}))))};te.propTypes={onSubmit:y.a.func.isRequired,children:y.a.arrayOf(y.a.node).isRequired,page:y.a.number.isRequired,values:y.a.shape({investingStyle:y.a.string,goalsWithVinovest:y.a.array,anticipatedCashAccess:y.a.string,subscribe:y.a.bool}).isRequired,next:y.a.func.isRequired},te.Page=({children:e})=>e;var ne=i.a.memo(te);const ae=()=>i.a.createElement("svg",{width:"25",height:"16",viewBox:"0 0 25 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M8 15L1 8M1 8L8 1M1 8H23.5",stroke:"#102035",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),ie=({onButtonClick:e})=>{const t=Object(w.a)();return i.a.createElement(re,{onClick:e||t.goBack},i.a.createElement(ae,null))};ie.defaultProps={onButtonClick:void 0},ie.propTypes={onButtonClick:y.a.func};const re=m.e.div`
    position: fixed;
    left: 100px;
    top: 50%;
    height: 60px;
    width: 60px;
    border: 2px solid ${e=>e.theme.colors.lighterGray};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    :active {
        background: ${({theme:e})=>e.colors.mainAccentBlue};
    }
`,oe=m.e.span`
    color: red;
    display: inline-block;
`,le=({name:e})=>i.a.createElement(I.a,{name:e,subscribe:{touched:!0,error:!0},render:({meta:{touched:e,error:t}})=>e&&t?i.a.createElement(oe,null,t):null});le.propTypes={name:y.a.string.isRequired};var se=le,ce=({selected:e})=>i.a.createElement("svg",{width:16,height:10,viewBox:"0 0 16 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M14.5098 0.00794184C14.3203 0.0323907 14.1454 0.112617 14.0127 0.235908L5.09213 8.20271L1.39762 5.56315C1.21947 5.43586 0.991992 5.37698 0.76524 5.39949C0.538487 5.42199 0.33103 5.52402 0.188507 5.68313C0.0459837 5.84224 -0.0199304 6.04538 0.00526439 6.24789C0.0304591 6.4504 0.144699 6.63569 0.322853 6.76297L4.62192 9.83447C4.78738 9.95129 4.99513 10.0097 5.20568 9.99868C5.41622 9.98762 5.61488 9.90783 5.76386 9.77451L15.2218 1.32775C15.3552 1.2159 15.4451 1.06899 15.4785 0.908372C15.512 0.747753 15.4872 0.581809 15.4078 0.434629C15.3284 0.28745 15.1985 0.166718 15.037 0.0899845C14.8755 0.0132514 14.6908 -0.0154928 14.5098 0.00794184Z",fill:e?"#FAE8D1":"#FFFFFF"}));function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const pe=({title:e,selected:t,multiple:n,isFirstRow:a,...r})=>i.a.createElement(u,{isFirstRow:a,selected:t,onClick:()=>{let t;t=n&&Array.isArray(r.value)?-1===r.value.indexOf(e)?[...r.value,e]:r.value.filter((t=>t!==e)):e===r.value?"":e,r.onChange(t)}},i.a.createElement("input",me({type:"hidden"},r)),e,i.a.createElement(p,null,i.a.createElement(ce,{selected:t})));pe.propTypes={title:y.a.string,selected:y.a.bool,multiple:y.a.bool,isFirstRow:y.a.bool,onChange:y.a.func,value:y.a.any};var ue=pe;function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const ge=e=>Object(W.isEmpty)(e)?"Required":void 0,he=({name:e,options:t,heading:n,onPrevious:a,isFirstQuestion:r,text:l,multiple:c,numberOfQuestion:m})=>{const p=Object(s.d)(),{input:u}=Object(I.d)(c?`${e}[]`:e,{validate:ge});return i.a.useEffect((()=>{2===m&&o.a.capture("q1_entry",{}),3===m&&o.a.capture("q2_entry",{})}),[]),i.a.createElement(g,null,i.a.createElement(h,null,n),i.a.createElement(b,null,l),i.a.createElement(d,null,!p&&!r&&i.a.createElement(ie,{onButtonClick:a}),t.map(((e,t)=>i.a.createElement(ue,de({key:e},u,{title:e,multiple:c,selected:u.value.includes(e),isFirstRow:0===t}))))),i.a.createElement(se,{name:e}))};he.propTypes={options:y.a.arrayOf(y.a.string).isRequired,name:y.a.string.isRequired,heading:y.a.string.isRequired,text:y.a.string.isRequired,onPrevious:y.a.func.isRequired,isFirstQuestion:y.a.bool.isRequired,multiple:y.a.bool},he.defaultProps={multiple:!1};var be=he;function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}N.Question_1,N.Question_2,N.Question_3;const fe=({initialValues:e,onSubmit:t})=>{const{t:n}=Object(A.a)(["risk-tolerance"]),r=Object(s.f)(),[l,c]=Object(a.useReducer)(L,e,M),m=Object(w.a)(),p=Object(s.b)(),u=Object(a.useCallback)(((e,t)=>{c({type:"next",payload:{values:e,pages:t}}),p()}),[p]),d=Object(a.useCallback)((()=>c({type:"previous"})),[]);return Object(a.useEffect)((()=>{o.a.capture("click_get_started",{});const e=m.listen(((e,t)=>{"POP"===t&&d()}));return()=>{e()}}),[]),Object(a.useEffect)((()=>{const e=Q[l.page].name;r.tracking.gtm.trackQuizAction(`#${l.page+1}: ${e}`)}),[l,r.tracking.gtm]),i.a.createElement(x,null,i.a.createElement(f,null,i.a.createElement(ne,xe({},l,{next:u,onSubmit:t,initialValues:e}),Q.map(((e,t)=>i.a.createElement(be,xe({heading:`${n("quiz.question")} ${t+1} ${n("quiz.of")} ${Q.length}`,key:e.name,onPrevious:d,isFirstQuestion:0===t,numberOfQuestion:t+1},e)))))))};fe.propTypes={initialValues:y.a.shape({investingStyle:y.a.string,goalsWithVinovest:y.a.array,anticipatedCashAccess:y.a.string,subscribe:y.a.bool}).isRequired,onSubmit:y.a.func.isRequired};var ve=Object(a.memo)(fe);const ye={investingStyle:"",goalsWithVinovest:[],anticipatedCashAccess:"",subscribe:!1};var we=Object(l.a)((()=>{const e=Object(s.f)(),t=Object(s.b)();i.a.useEffect((()=>{Object(c.a)()}),[]);const n=i.a.useCallback((async({...n})=>{e.tracking.gtm.trackQuizCompleted(n),o.a.capture(N.Question_3,{value:n.anticipatedCashAccess,anticipatedCashAccess:n.anticipatedCashAccess}),await e.quiz.setInvestingStyle(n.investingStyle),await e.quiz.saveQuizData({investmentProfile:n}),"1"===e.user.phoneNumberABVariant?t("/personalize/capital"):t("/personalize/enter-number")}),[e.quiz,e.tracking.gtm,t,e.user.phoneNumberABVariant]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,null,i.a.createElement(ve,{onSubmit:n,initialValues:ye})))})),Ee=n(123),Oe=n(20),je=n(219),ke=n(56),Ce=n(25);const ze=Object(l.a)((()=>{const{t:e}=Object(A.a)(["risk-tolerance"]),t=Object(Ee.d)(),n=Object(s.d)(),r=Object(s.f)(),l=Object(s.b)("/personalize/your-plan"),[m,p]=Object(a.useState)(!1),[u,d]=Object(a.useState)(""),g={minimum:/zh/.test(t.language)?Ce.a.minimum:Ce.c.minimum,tier1:/zh/.test(t.language)?Ce.a.tier1:Ce.c.tier1,tier2:/zh/.test(t.language)?Ce.a.tier2:Ce.c.tier2,premium:/zh/.test(t.language)?Ce.a.premium:Ce.c.premium,grandcru:/zh/.test(t.language)?Ce.a.grandcru:Ce.c.grandcru};i.a.useEffect((()=>{Object(c.a)()}),[]);const h=Object(a.useCallback)((()=>{r.tracking.gtm.trackHave1000question(r,u),o.a.capture(N.Question_4,{value:u,locale:t.language,monetaryValueMinimum:g[u]}),p(!0),setTimeout((()=>{p(!1),r.user.saveMinimumCapitalToCIO(`${u}`),l()}),500)}),[r,u,t.language,g,l]);return i.a.createElement($e,null,i.a.createElement(qe,null,!n&&i.a.createElement(ie,null),i.a.createElement(je.a,null,e("minimum-capital.title")),i.a.createElement(ue,{title:`${Object(Oe.c)(g.minimum,{decimal:!1})} ${e("minimum-capital.minimum")}`,isFirstRow:!0,selected:"minimum"===u,onChange:()=>d("minimum")}),i.a.createElement(ue,{title:`${Object(Oe.c)(g.tier1,{decimal:!1})} - ${Object(Oe.c)(g.tier2-1,{decimal:!1})}`,selected:"tier1"===u,onChange:()=>d("tier1")}),i.a.createElement(ue,{title:`${Object(Oe.c)(g.tier2,{decimal:!1})} - ${Object(Oe.c)(g.premium-1,{decimal:!1})}`,selected:"tier2"===u,onChange:()=>d("tier2")}),i.a.createElement(ue,{title:`${Object(Oe.c)(g.premium,{decimal:!1})}+ ${e("minimum-capital.premium")}`,selected:"premium"===u,onChange:()=>d("premium")}),i.a.createElement(ue,{title:`${Object(Oe.c)(g.grandcru,{decimal:!1})}+ ${e("minimum-capital.grandcru")}`,selected:"grandcru"===u,onChange:()=>d("grandcru")}),i.a.createElement(_e,null,i.a.createElement(ke.a,{CTA:"Next",disabled:K.a.isNil(u),onClick:h,isLoading:m}))))})),$e=m.e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 42px 24px;
    margin-top: 60px;
`,qe=m.e.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
    margin: 24px 0;
    text-align: center;
`,_e=m.e.div`
    width: 100%;
    max-width: 520px;
`;var Se=n(221),Re=n(691),Pe=n(698),Ae=(n(798),n(793));const Ve=()=>{const e=Object(s.d)(),t=Object(s.b)(),[n,r]=function(e){const[t,n]=Object(a.useState)(e);return[t,function(e,a){n({...t,[e]:a})}]}({primaryPhone:""}),[l,m]=Object(a.useState)(""),p=Object(s.f)();Object(a.useEffect)((()=>{Object(c.a)()}),[]);return i.a.createElement(Te,null,!e&&i.a.createElement(ie,null),i.a.createElement(Be,null,"Enter your phone number"),i.a.createElement(Fe,{onSubmit:e=>{e.preventDefault();const{primaryPhone:a}=n;1==Object(Ae.c)(a)?(p.user.savePhoneNumberToCIO(a),Se.a.useAccountInformationPut(p.user.oktaUserEntity.data.sub,p.auth.accessToken,n).then((()=>{o.a.capture(N.PhoneNumber,{value:a}),p.tracking.gtm.trackEnterPhone(p,a),p.tracking.gtm.trackEnterPhoneABTest(),"0"===p.user.phoneNumberABVariant?t("/personalize/capital"):t("/personalize/start")})).catch((()=>{m("Unable to accept your phone number at this time.")}))):m("Invalid phone number")}},i.a.createElement(Ne,{className:"full"},i.a.createElement(Ae.a,{displayInitialValueAsLocalNumber:!0,defaultCountry:"US",placeholder:"Enter phone number",value:"",onChange:e=>r("primaryPhone",e)}),l&&i.a.createElement(Re.a,{type:"error"},i.a.createElement(Pe.a,null)," ",l)),i.a.createElement(Qe,{type:"submit"},"Continue")))},Te=m.e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 42px 12px;
    margin-top: 60px;
`,Fe=m.e.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`,Ne=m.e.div`
    color: #766a7f;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    position: relative;
    width: 100%;

    input,
    select {
        border: 1px solid #caccce;
        color: #242e35;
        font-size: 1rem;
        font-weight: 500;
        padding: 1rem;
        width: 100%;

        &::placeholder {
            color: #a8abad;
        }
    }

    select {
        background-color: transparent;
        appearance: none;
    }

    img {
        position: absolute;
        right: 1rem;
        top: 2.5rem;
        width: 20px;
    }

    .PhoneInputCountryIcon {
        box-shadow: none;
    }

    .PhoneInputCountry {
        border-bottom: 1px solid #caccce;
        border-left: 1px solid #caccce;
        border-top: 1px solid #caccce;
        justify-content: center;
        margin-right: 0;
        width: 15%;

        img {
            right: auto;
            top: 0;
        }
    }
`,Qe=m.e.button`
    background: #a86d37;
    border: 1px solid #a86d37;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 0.875rem;
    min-width: 150px;
    padding: 1rem 2rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
`,Be=m.e.div`
    color: #242e35;
    font-family: RoslindaleDisplayCondensed;
    font-size: ${({theme:e})=>2*e.typography.size.sm}px;
    line-height: 24px;
    letter-spacing: 0.005em;
    padding-left: 14px;
    margin-bottom: 18px;
    text-align: center;

    ${e=>e.theme.media.greaterThan("medium")`
        padding-left: 0;
        font-size: ${({theme:e})=>4*e.typography.size.sm}px;
        line-height: initial;
        margin-bottom: 60px;
    `}
`;t.default=()=>{const{t:e}=Object(A.a)(),{type:t}=Object(r.i)();return Object(a.useMemo)((()=>({start:i.a.createElement(we,null),"enter-number":i.a.createElement(Ve,null),capital:i.a.createElement(ze,null),"your-plan":i.a.createElement(T,null)})),[])[t]}},691:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1);t.a=function(e){return i.a.createElement(o,{className:e.type},e.children)};const o=r.e.div`
    border-radius: 4px;
    color: ${e=>e.theme.colors.mainAccentBlue};
    display: flex;
    font-size: 1rem;
    font-family: ${e=>e.theme.fonts.body};
    margin-top: 2rem;
    padding: 1rem;
    align-items: center;
    width: 100%;

    svg {
        height: 22px;
        margin-right: 1rem;
        min-width: 22px;
        vertical-align: middle;
        width: 22px;
    }

    &.success {
        background: ${e=>e.theme.alerts.success};
    }

    &.error {
        background: ${e=>e.theme.alerts.error};
    }
`},698:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=()=>i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 12C1 5.92487 5.92487 1 12 1V1C18.0751 1 23 5.92487 23 12V12C23 18.0751 18.0751 23 12 23V23C5.92487 23 1 18.0751 1 12V12Z",stroke:"#FF4D00",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.a.createElement("path",{d:"M12 7V13",stroke:"#FF4D00",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.a.createElement("path",{d:"M12 16V17",stroke:"#FF4D00",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},744:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(745),i=n.n(a),r=n(746),o=n.n(r),l=n(747),s=n.n(l);const c=e=>[{id:"conservative",svg:o.a,planName:e("plans.conservative_investing"),1:e("plans.conservative")},{id:"moderate",svg:i.a,planName:e("plans.balanced_investing"),1:e("plans.balanced")},{id:"aggressive",svg:s.a,planName:e("plans.aggressive_investing"),1:e("plans.aggressive")}]},745:function(e,t,n){e.exports=n.p+"static/media/balancedInvesting.1a7d8018.svg"},746:function(e,t,n){e.exports=n.p+"static/media/conservative.f6751e27.svg"},747:function(e,t,n){e.exports=n.p+"static/media/aggressive.f8014f86.svg"},883:function(e,t,n){e.exports=n.p+"static/media/checkmark.de70a901.svg"}}]);
//# sourceMappingURL=22.d9007a77.chunk.js.map
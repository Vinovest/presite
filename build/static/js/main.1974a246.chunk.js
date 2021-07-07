(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[6],{101:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i(0),a=i(122);const o=()=>Object(n.useContext)(a.b)},102:function(e,t,i){"use strict";var n=i(0),a=i.n(n);const o=i(1).e.div`
    position: relative;
    width: fit-content;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .toolTipCellar {
        position: absolute;
        right: -95.5px;
        ${({toRight:e})=>e?"right: -17px;":""}
        top: -10px;
        transform: translateX(-50%);
        transform: translateY(-100%);
        opacity: 0;
        width: 0;
        height: 0;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: -8px 8px 24px rgba(36, 46, 53, 0.16);
        background: #513011;
        padding: 16px 11px 11px 21px;
        text-align: left;
        white-space: pre-wrap;
        color: #e0e5cd;
        text-transform: none;
        font-family: VinovestMedium;
        font-size: 11px;
        line-height: 14px;

        &:after {
            content: " ";
            position: absolute;
            display: block;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 50%) rotate(45deg);
            width: 16px;
            height: 16px;
            background: #513011;
            ${({toRight:e})=>e?"left: 89%":""}
        }
    }

    &:hover .toolTipCellar {
        opacity: 1;
        width: 201px;
        height: fit-content;
        z-index: 5;
        overflow: visible;
    }
`;t.a=({children:e,text:t,toRight:i})=>a.a.createElement(o,{toRight:i},e,a.a.createElement("div",{className:"toolTipCellar"},t))},103:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var n=i(0),a=i.n(n),o=i(37),r=i.n(o),s=i(1),l=i(406),c=i.n(l);const d=document.getElementById("modal-root"),u=({isOpen:e,onClose:t,children:i,additionalStyles:o})=>{const[s,l]=Object(n.useState)(null),u=Object(n.useRef)(),m=Object(n.useCallback)((e=>{"opacity"===e.propertyName&&"in"!==s&&"out"===s&&t()}),[s,t]),f=Object(n.useCallback)((e=>{e.preventDefault(),l("out")}),[]),g=Object(n.useCallback)((e=>{"Escape"===e.key&&l("out")}),[]);return Object(n.useEffect)((()=>{const t=document.querySelector("body");return t.style.overflow="hidden",window.addEventListener("keydown",g,!1),l(e?"in":"out"),()=>{t.style.overflow="initial",window.removeEventListener("keydown",g,!1)}}),[e,g]),r.a.createPortal(a.a.createElement(p,{className:`fade-${s}`,onTransitionEnd:m,additionalStyles:o},a.a.createElement("div",{className:"box-dialog"},a.a.createElement(h,{src:c.a,onClick:f,className:"closeIcon"}),i),a.a.createElement("div",{className:"background",onMouseDown:f,ref:u})),d)},p=s.e.div`
    position: fixed; //TODO:
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity linear 0.15s;
    z-index: 2000;

    margin: 40px auto;

    &.fade-in {
        opacity: 1;
        transition: opacity linear 0.15s;
    }
    &.fade-out {
        opacity: 0;
        transition: opacity linear 0.15s;
    }
    .box-dialog {
        position: relative;
        z-index: 1050;
        background-color: #fefefe;
        box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        ${e=>e.additionalStyles}
    }
    .background {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: 1040;
        display: block;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        outline: 0;
    }
`,h=s.e.img`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 100;
`},106:function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var n=i(0),a=i.n(n),o=i(1),r=i(384),s=i.n(r),l=i(385),c=i.n(l),d=i(386),u=i.n(d),p=i(387),h=i.n(p);const m={standard:s.a,green:c.a,brown:u.a,light:h.a},f=o.e.img`
    height: 100%;
    width: 100%;
    display: block;
    object-fit: contain;
`,g=({type:e="standard"})=>a.a.createElement(f,{src:m[e]})},107:function(e,t,i){"use strict";const n=i(1).e.button`
    font-family: VinovestMono;
    height: 50px;
    background: ${({theme:e})=>e.colors.burntOrange};
    opacity: ${e=>e.disabled?.7:1};
    color: ${({theme:e})=>e.colors.white};
    font-size: 0.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3.5px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    width: 100%;
    border: none;
    cursor: pointer;
    pointer-events: ${e=>e.disabled?"none":"initial"};
    transition: box-shadow 0.3s ease-in-out;
    :hover {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    }
    :focus {
        outline: 0;
    }
    @media screen and (min-width: 768px) {
        margin: 0 auto;
        max-width: ${e=>e.fullWidth?"initial":"300px"};
    }
    :disabled {
        background: ${({theme:e})=>e.colors.lightGray};
    }
`;t.a=n},108:function(e,t,i){"use strict";i.d(t,"a",(function(){return ie})),i.d(t,"b",(function(){return ne}));var n=i(0),a=i.n(n),o=i(49),r=i(18),s=i(222),l=i(8),c=i(13);var d=()=>{const e=Object(l.f)(),[t,i]=Object(n.useState)({authenticated:!1,error:""}),{oktaAuth:d}=Object(o.d)();if("normal"===localStorage.getItem("signFrom"))return a.a.createElement(o.a,null);if(Object(n.useEffect)((()=>{Object(s.a)()}),[]),Object(n.useEffect)((()=>{if("google"===localStorage.getItem("signFrom")){const t=new URLSearchParams(window.location.hash.replace("#","?")).get("code"),n=localStorage.getItem(c.d.KEY);n&&(localStorage.setItem(c.a.KEY,n),localStorage.removeItem(c.d.KEY)),async function(t){let n=null;try{if(n=await e.auth.requestAccessTokenFromOAuthCode(t),!n||n.error)throw Error(n.error_description);localStorage.setItem("signFrom","normal"),d.signInWithRedirect({accessToken:n.access_token})}catch(a){i({authenticated:!1,error:a.toString()})}}(t)}}),[d,e.auth]),t.error)throw Error(t.error);if(!t.authenticated)return null;const u=JSON.parse(localStorage.getItem(c.e.KEY)||"{}");return localStorage.removeItem(c.e.KEY),a.a.createElement(r.a,{to:u})},u=i(11),p=i(20);const h=a.a.lazy((()=>Promise.all([i.e(0),i.e(1),i.e(3)]).then(i.bind(null,1330)))),m=a.a.lazy((()=>Promise.all([i.e(0),i.e(1),i.e(2),i.e(4),i.e(11)]).then(i.bind(null,1328))));var f=Object(u.a)((()=>{const e=Object(l.f)();return a.a.useMemo((()=>e.auth.isAuthenticated),[e])||Object(p.b)()?a.a.createElement(m,null):a.a.createElement(h,null)})),g=i(300),b=i(7);const y=Object(n.lazy)((()=>Promise.all([i.e(5),i.e(37),i.e(22)]).then(i.bind(null,1326)))),v=Object(n.lazy)((()=>i.e(48).then(i.bind(null,1332)))),w=Object(n.lazy)((()=>i.e(49).then(i.bind(null,1287)))),x=Object(n.lazy)((()=>Promise.all([i.e(0),i.e(1),i.e(2),i.e(4),i.e(18)]).then(i.bind(null,1327)))),k=Object(n.lazy)((()=>Promise.all([i.e(0),i.e(2),i.e(9),i.e(45)]).then(i.bind(null,1333)))),E=Object(n.lazy)((()=>i.e(47).then(i.bind(null,1350)).then((e=>e)))),O=Object(n.lazy)((()=>Promise.all([i.e(5),i.e(13),i.e(24)]).then(i.bind(null,1331)))),_=Object(n.lazy)((()=>i.e(46).then(i.bind(null,1320)).then((e=>e)))),C=Object(n.lazy)((()=>i.e(41).then(i.bind(null,1354)))),S=Object(n.lazy)((()=>i.e(17).then(i.bind(null,1329)).then((e=>e)))),A=Object(n.lazy)((()=>i.e(42).then(i.bind(null,1340)).then((e=>e)))),j=Object(n.lazy)((()=>i.e(26).then(i.bind(null,1344)))),T=Object(n.lazy)((()=>i.e(43).then(i.bind(null,1348)))),P=Object(n.lazy)((()=>i.e(25).then(i.bind(null,1321)))),I=Object(n.lazy)((()=>i.e(12).then(i.bind(null,1341)))),L=Object(n.lazy)((()=>i.e(14).then(i.bind(null,1342)))),N=Object(n.lazy)((()=>i.e(16).then(i.bind(null,1337)))),V=Object(n.lazy)((()=>i.e(33).then(i.bind(null,1351)))),D=Object(n.lazy)((()=>Promise.all([i.e(50),i.e(19)]).then(i.bind(null,1343)))),z=Object(n.lazy)((()=>i.e(15).then(i.bind(null,1345)))),B=Object(n.lazy)((()=>Promise.all([i.e(0),i.e(1),i.e(23)]).then(i.bind(null,1355)))),R=Object(n.lazy)((()=>i.e(20).then(i.bind(null,1349)))),F=Object(n.lazy)((()=>Promise.all([i.e(0),i.e(1),i.e(30)]).then(i.bind(null,846)))),M=Object(n.lazy)((()=>i.e(44).then(i.bind(null,1322)))),q=Object(n.lazy)((()=>i.e(29).then(i.bind(null,1346)))),W=Object(n.lazy)((()=>i.e(36).then(i.bind(null,1356)))),H=Object(n.lazy)((()=>Promise.all([i.e(0),i.e(1),i.e(3)]).then(i.bind(null,1330)))),U=Object(n.lazy)((()=>i.e(10).then(i.bind(null,1338)))),Y=Object(n.lazy)((()=>i.e(35).then(i.bind(null,1357)))),G=Object(n.lazy)((()=>i.e(39).then(i.bind(null,1358)))),J=Object(n.lazy)((()=>i.e(40).then(i.bind(null,1323)))),$=Object(n.lazy)((()=>i.e(31).then(i.bind(null,1359)))),K=Object(n.lazy)((()=>i.e(28).then(i.bind(null,1324)))),Z=Object(n.lazy)((()=>i.e(21).then(i.bind(null,1360)))),Q=Object(n.lazy)((()=>i.e(32).then(i.bind(null,1347)))),X=Object(n.lazy)((()=>i.e(27).then(i.bind(null,1352)))),ee=Object(n.lazy)((()=>i.e(34).then(i.bind(null,1353)))),te=Object(n.lazy)((()=>i.e(38).then(i.bind(null,1325)))),ie=[{path:b.a.login,exact:!0,component:v,isSecure:!1},{path:b.a.signup,exact:!0,component:v,isSecure:!1},{path:"/reset_password",exact:!0,component:v,isSecure:!1},{path:"/personalize/:type(start|your-plan|enter-number|capital)",exact:!1,component:y,isSecure:!0},{path:b.a.home,exact:!0,component:f},{path:b.a.portfolio,exact:!0,component:x,isSecure:!0},{path:b.a.transactions,exact:!0,component:S,isSecure:!0},{path:b.a.documentsPage,exact:!0,component:A,isSecure:!0},{path:`${b.a.documentsPage}/:doc`,exact:!0,component:A,isSecure:!0},{path:b.a.deposit,component:_,isSecure:!0},{path:`${b.a.print}/:type`,component:C,isSecure:!0},{path:`${b.a.account}/:setting(email|phone|auto-invest|investment-plan|sell)?`,exact:!1,component:O,isSecure:!0},{path:b.a.beforeYouRequest,exact:!0,component:T,isSecure:!0},{path:b.a.liquidation,exact:!0,component:j,isSecure:!0},{path:b.a.scheduledWines,exact:!0,component:P,isSecure:!0},{path:"/implicit/callback",exact:!0,component:d,isSecure:!1},{path:b.a.invite,exact:!0,component:E,isSecure:!0},{path:"/chart",exact:!0,component:k},{path:b.a.terms,exact:!0,component:W},{path:b.a.contactUs,exact:!0,component:V},{path:b.a.whyWine,exact:!0,component:L},{path:b.a.press,exact:!0,component:ee},{path:b.a.advisors,exact:!0,component:N},{path:b.a.aboutUs,exact:!0,component:I},{path:b.a.council,exact:!0,component:R},{path:b.a.howItWorks,exact:!0,component:D},{path:b.a.sustainability,exact:!0,component:z},{path:b.a.pricing,exact:!0,component:F},{path:b.a.wineFutures,exact:!0,component:q},{path:b.a.adSlider,exact:!0,component:B},{path:b.a.satisfaction,exact:!0,component:M},{path:b.a.vinovestHome,exact:!0,component:H},{path:b.a.vinovest100Index,exact:!0,component:U},{path:b.a.privacyPolicy,exact:!0,component:Y,isSecure:!1},{path:b.a.careers,exact:!0,component:G},{path:b.a.contactSupport,exact:!0,component:J},{path:b.a.support,exact:!1,component:w},{path:b.a.supportCategory,exact:!1,component:w},{path:b.a.help,exact:!0,component:$},{path:`${b.a.helpCategory}/:category`,exact:!0,component:K},{path:`${b.a.help}/:slug`,exact:!0,component:Z},{path:`${b.a.blog}`,exact:!0,component:Q},{path:`${b.a.blog}/:slug`,exact:!0,component:X},{path:b.a.accessibility,exact:!0,component:te},{path:"*",component:g.a,isSecure:!1}],ne={mobileMax:767,mobile:768,tablet:1023}},109:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i(6),a=i.n(n),o=i(20),r=i(13);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class l{constructor(){s(this,"type",null),s(this,"data",{})}isACH(){return this.type===r.b.BankTransfer}isCreditCard(){return this.type===r.b.CreditCard}isNotSet(){return a.a.isEmpty(this.data)}get maskedBankAccountDisplayInfo(){return`${Object(o.a)(this.data.name)} ****${this.data.L4}`}}},112:function(e,t,i){e.exports=i.p+"static/media/info.2d791547.svg"},12:function(e,t,i){"use strict";i.d(t,"d",(function(){return A})),i.d(t,"e",(function(){return R})),i.d(t,"c",(function(){return Y})),i.d(t,"h",(function(){return Z.b})),i.d(t,"f",(function(){return Z.a})),i.d(t,"g",(function(){return ie.a})),i.d(t,"i",(function(){return ae})),i.d(t,"a",(function(){return re})),i.d(t,"b",(function(){return de}));var n=i(5),a=i.n(n),o=i(0),r=i.n(o),s=i(164),l=i.n(s),c=i(8);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var u=r.a.createElement("path",{d:"M13 1L7 7L1 1",stroke:"#242424"});const p=({svgRef:e,title:t,...i})=>r.a.createElement("svg",d({width:14,height:8,viewBox:"0 0 14 8",fill:"none",ref:e},i),t?r.a.createElement("title",null,t):null,u),h=r.a.forwardRef(((e,t)=>r.a.createElement(p,d({svgRef:t},e))));i.p;var m=i(1);var f=m.e.li`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 25px;
    &:hover {
        background: #00000005;
        cursor: pointer;
    }
    ${e=>e.selected&&e.background&&`background: ${e.background}`||"none"};

    svg {
        display: ${e=>e.selected?"block":"none"};
    }
`;var g=m.e.ul`
    list-style: none;
    margin: 0;
    padding: 14px 0;
    position: absolute;
    right: 0;
    display: ${e=>e.open?"block":"none"};
    background: white;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
    min-width: 183px;
`;var b=m.e.button`
    background: transparent;
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 14px;
    line-height: 25px;
    svg {
        margin-left: 16px;
    }
`;var y=m.e.div`
    position: relative;
`;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var w=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1047 0.812366C11.2772 0.596735 11.2422 0.282089 11.0266 0.109584C10.811 -0.0629208 10.4963 -0.0279601 10.3238 0.187671L4.3871 7.60857L0.853553 4.07502C0.658291 3.87976 0.341709 3.87976 0.146447 4.07502C-0.0488155 4.27028 -0.0488155 4.58687 0.146447 4.78213L4.06985 8.70553C4.07792 8.71382 4.08634 8.72189 4.09509 8.7297C4.13828 8.76843 4.18658 8.79833 4.23767 8.8194C4.37815 8.87748 4.53757 8.86779 4.66932 8.79549C4.71777 8.76891 4.76248 8.73386 4.80113 8.6906C4.80896 8.68187 4.81642 8.67294 4.82353 8.66381L11.1047 0.812366Z",fill:"#242424"});const x=({svgRef:e,title:t,...i})=>r.a.createElement("svg",v({width:12,height:9,viewBox:"0 0 12 9",fill:"none",ref:e},i),t?r.a.createElement("title",null,t):null,w),k=r.a.forwardRef(((e,t)=>r.a.createElement(x,v({svgRef:t},e))));i.p;const E=({selected:e,onClick:t,value:i,label:n,selectedBackground:a})=>{const o=r.a.useCallback((e=>{e.stopPropagation(),t({value:i,label:n})}),[i,n,t]);return r.a.createElement(f,{selected:e,onClick:o,background:a},r.a.createElement("span",null,n),r.a.createElement(k,null))},O={label:a.a.string.isRequired,value:a.a.any.isRequired};E.propTypes={...O};var _=E;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}const S=({options:e,defaultValue:t,onChange:i,defaultOpen:n,selectedInParent:a,selectedLabel:o,selectedBackground:s})=>{const[l,d]=r.a.useState(t||e[0].label),[u,p]=r.a.useState(n),m=r.a.useRef();Object(c.e)(m,(()=>p(!1)));const f=r.a.useCallback((e=>{d(e.label),i(e),p(!1)}),[i]);return r.a.createElement(y,{open:u,ref:m},r.a.createElement(b,{onClick:()=>p((e=>!e))},r.a.createElement("span",null,void 0!==a?o:l),r.a.createElement(h,null)),r.a.createElement(g,{open:u,onClick:()=>p((e=>!e))},e.map(((e,t)=>r.a.createElement(_,C({key:t},e,{onClick:f,selected:void 0!==a?a===e.value:e.label===l,selectedBackground:s}))))))};S.defaultProps={options:[],onChange:l.a,defaultOpen:!1},S.propTypes={options:a.a.arrayOf(a.a.shape(O)),onChange:a.a.func,defaultOpen:a.a.bool};var A=S,j=i(685);function T(e,t){const{timeout:i,style:n={}}=e;return{duration:n.transitionDuration||"number"===typeof i?i:i[t.mode]||0,delay:n.transitionDelay}}const P={standard:300,enteringScreen:225,leavingScreen:195},I={entering:{opacity:1},entered:{opacity:1}},L={enter:P.enteringScreen,exit:P.leavingScreen},N=e=>`${Math.round(e)}ms`,V=(e=["all"],t={})=>{const{duration:i=P.standard,easing:n=D.easeInOut,delay:a=0}=t;return(Array.isArray(e)?e:[e]).map((e=>`${e} ${"string"===typeof i?i:N(i)} ${n} ${"string"===typeof a?a:N(a)}`)).join(",")},D={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"};function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}const B=e=>{const{children:t,in:i,onEnter:n,onExit:a,style:o,timeout:s=L,...l}=e;return r.a.createElement(j.a,z({appear:!0,in:i,onEnter:(e,t)=>{(e=>{e.scrollTop})(e);const i=T({style:o,timeout:s},{mode:"enter"});e.style.webkitTransition=V("opacity",i),e.style.transition=V("opacity",i),n&&n(e,t)},onExit:e=>{const t=T({style:o,timeout:s},{mode:"exit"});e.style.webkitTransition=V("opacity",t),e.style.transition=V("opacity",t),a&&a(e)},timeout:s},l),((e,n)=>r.a.cloneElement(t,{style:{opacity:0,visibility:"exited"!==e||i?void 0:"hidden",...I[e],...o,...t.props.style},...n})))};B.defaultProps={in:!1,timeout:500},B.propTypes={children:a.a.element,in:a.a.bool,onEnter:a.a.func,onExit:a.a.func,style:a.a.object,timeout:a.a.oneOfType([a.a.number,a.a.shape({enter:a.a.number,exit:a.a.number})])};var R=B;const F=m.e.input`
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,M=m.e.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #242424;
    transition: all 150ms;
    ${F}:focus + & {
        box-shadow: 0 0 0 3px #242424;
    }

    ${e=>e.square&&m.d`
            border: 1px solid #f1f1f1;
            border-radius: 0;
            width: 30px;
            height: 30px;
            background: ${e=>e.checked?"black":"white"};
            path {
                fill: white;
            }
        `}

    svg {
        visibility: ${e=>e.checked?"visible":"hidden"};
    }
`,q=m.e.div`
    display: inline-block;
    vertical-align: middle;
`;var W=()=>r.a.createElement("svg",{width:14,height:14,viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9.07094 0.00496492C8.95248 0.0202494 8.84311 0.0704039 8.76018 0.14748L3.1834 5.12801L0.873736 3.47786C0.762362 3.39829 0.620154 3.36148 0.478397 3.37554C0.336641 3.38961 0.206947 3.4534 0.117847 3.55287C0.0287472 3.65233 -0.0124597 3.77933 0.00329109 3.90593C0.0190418 4.03253 0.0904599 4.14837 0.201835 4.22794L2.88944 6.14812C2.99288 6.22115 3.12276 6.25769 3.25438 6.25077C3.38601 6.24386 3.5102 6.19398 3.60334 6.11063L9.51607 0.830055C9.59943 0.760134 9.65565 0.66829 9.67656 0.567878C9.69747 0.467466 9.68198 0.363724 9.63234 0.271713C9.5827 0.179702 9.5015 0.104225 9.40054 0.0562547C9.29958 0.00828425 9.18412 -0.00968546 9.07094 0.00496492Z",fill:"#242424"}));function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}const U=({className:e,checked:t,square:i,...n})=>{const a=t||n.value;return r.a.createElement(q,{className:e,onClick:()=>{const e=n.value||t;n.onChange(!e)}},r.a.createElement(F,H({checked:a},n)),r.a.createElement(M,{checked:a,square:i},r.a.createElement(W,null)))};U.defaultProps={checked:!1,square:!1,onChange:()=>{}},U.propTypes={className:a.a.string,checked:a.a.bool,square:a.a.bool};var Y=U;m.e.div`
    background: #70808c;
    color: #ffffff;
    padding: 3px 5px;
    text-align: center;
    font-weight: 500;
`;var G=i(213);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}const $={container:()=>({}),menu:()=>({}),control:e=>({...e,border:"1px solid #F0F0F0;",borderBox:"border-box",height:64,"&:focus":{outline:"none"},"&:hover":{border:"1px solid #F0F0F0;",boxShadow:"none"}}),noOptionsMessage:()=>({display:"none"}),indicatorSeparator:()=>({display:"none"})},K=e=>r.a.createElement(G.a,J({},e,{styles:$}));K.propTypes=G.a.propTypes;var Z=i(86);const Q=m.e.section`
    padding: 15px 20px;
    background-color: #c5d5e4;
`,X=m.e.h1`
    padding: 0;
    margin: 0;
`,ee=m.e.p`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    padding: 0;
    margin: 0;
    letter-spacing: 0.005em;
`,te=({title:e,description:t,variant:i})=>r.a.createElement(R,{in:!0},r.a.createElement(Q,{variant:i},r.a.createElement(X,null,e),r.a.createElement(ee,null,t)));te.propTypes={title:a.a.string.isRequired,description:a.a.string.isRequired,variant:a.a.oneOf(["success","warning","danger"]).isRequired};var ie=i(107);Object(m.e)(ie.a)`
    border: 1px solid ${e=>e.theme.colors.lightGray};
    color: ${e=>e.theme.colors.gray};
    background: ${e=>e.theme.colors.white};
`;const ne=m.e.button`
    text-transform: ${e=>e.uppercase?"uppercase":"none"};
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: ${e=>e.theme.typography.size.sm}px;
    line-height: 25px;
    letter-spacing: 1px;
    cursor: pointer;
`;ne.defaultProps={uppercase:!1},ne.propTypes={uppercase:a.a.bool};var ae=ne;const oe=m.e.button`
    position: fixed;
    width: 60px;
    height: 60px;
    left: 7.749vw;
    top: 40%;
    border: 2px solid #eeeeee;
    box-sizing: border-box;
    background: transparent;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1044px) {
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
`;var re=({goBack:e})=>r.a.createElement(oe,{onClick:e},r.a.createElement("svg",{width:"25",height:"16",viewBox:"0 0 25 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M8 15L1 8M1 8L8 1M1 8H23.5",stroke:"#242E35",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),se=i(390),le=i.n(se),ce=i(391);const de=({h:e=400,w:t=400})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{height:e,width:t,options:{loop:!0,autoplay:!0,animationData:ce,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}}}))},122:function(e,i,n){"use strict";n.d(i,"a",(function(){return St})),n.d(i,"b",(function(){return At})),n.d(i,"c",(function(){return jt}));var a,o,r=n(0),s=n.n(r),l=n(59),c=n(3),d=n(6),u=n.n(d);function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function h(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let m=(o=h((a=class e{static build(t,i){return new e(t,i)}constructor(e,t){var i,n,a,r;i=this,n="accessToken",r=this,(a=o)&&Object.defineProperty(i,n,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(r):void 0}),p(this,"checkAndSetAJwt",Object(c.e)((function*(e){const t=yield e.accessToken;t&&this.setAccessToken(t.value)}))),p(this,"requestAccessTokenFromOAuthCode",Object(c.e)((function*(e){return yield this.api.exchangeCodeToToken(e)}))),p(this,"registerNewUserAccount",Object(c.e)((function*(e){return yield this.api.createOktaAccount(e)}))),this.root=e,this.api=t}get isAuthenticated(){return!u.a.isEmpty(this.accessToken)}setAccessToken(e){this.accessToken=e}resetStateOnLogout(){this.accessToken="",this.root.deposit.resetState(),this.root.portfolio.resetState(),this.root.quiz.resetState(),this.root.referral.resetState(),this.root.transfer.resetState(),this.root.user.resetState(),this.root.documents.resetState(),this.root.liquidation.resetState()}}).prototype,"accessToken",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),h(a.prototype,"isAuthenticated",[c.c],Object.getOwnPropertyDescriptor(a.prototype,"isAuthenticated"),a.prototype),h(a.prototype,"setAccessToken",[c.b],Object.getOwnPropertyDescriptor(a.prototype,"setAccessToken"),a.prototype),h(a.prototype,"resetStateOnLogout",[c.b],Object.getOwnPropertyDescriptor(a.prototype,"resetStateOnLogout"),a.prototype),a);var f,g,b,y,v,w,x=n(149),k=n(83),E=n.n(k),O=n(20),_=n(2),C=n(202);function S(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function A(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function j(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}const T=(e=[])=>{const t=e[0];return e.map((({price:e,date:i,...n})=>{const a=e-t.price||0;return{price:e,date:i,tooltipDate:Object(C.b)(new Date(i),C.a.shortMonthDayandYear),priceDifference:Object(O.j)(a)||"0.0",priceDifferencePercents:Object(O.j)(100/t.price*a)||"0.0",...n}}))};let P=(g=j((f=class e{static build(t,i,n){return new e(t,i,n)}constructor(e,t,i){A(this,"premium",5e4),A(this,"grandCru",25e4),S(this,"winesListEntity",g,this),S(this,"totalsEntity",b,this),S(this,"winesCollectionEntity",y,this),S(this,"winesContentfulCollectionEntity",v,this),S(this,"featuredWineEntity",w,this),A(this,"fetchPortfolioWines",Object(c.e)((function*(){const{accessToken:e}=this.root.auth,{winesList:t}=this.root.portfolio;this.winesListEntity={data:t||{nextPageToken:null,pageSize:"6",wines:[]},status:Object(_.g)()};const i=this.root.user.oktaUserInfo.sub,{pageSize:n,nextPageToken:a}=t,o={pageSize:n};a&&(this.root.disposers.initialPortfolioLoad&&this.root.disposers.initialPortfolioLoad(),o.pageToken=a);const{ok:r,data:s}=yield this.api.getPortfolioWines(e,i,o);r?(yield this.fetchWinesContentfulCollection(s.wines.filter((({lwin11:e})=>!this.winesCollectionEntity.data[e])).map((({lwin11:e})=>e))),!s.nextPageToken&&this.root.disposers.subsequentPortfolioLoad&&this.root.disposers.subsequentPortfolioLoad(),this.winesListEntity={data:{...s,wines:[...this.winesListEntity.data.wines,...s.wines]},status:Object(_.b)()}):this.winesListEntity.status=Object(_.d)("Portfolio wines could not be fetched")}))),A(this,"fetchPortfolioWineToCollection",Object(c.e)((function*(e,t="6m"){const{accessToken:i}=this.root.auth,n=this.winesCollectionEntity.data[e]&&this.winesCollectionEntity.data[e].data;this.winesCollectionEntity={data:{...this.winesCollectionEntity.data,[e]:{data:n||null,status:Object(_.g)()}},status:Object(_.g)()};const a=this.root.user.oktaUserInfo.sub,{ok:o,data:r}=yield this.api.getPortfolioWineToCollection(i,a,e,t);let s;s=n?n.producerData:yield this.api.fetchVineyardBackground(e.slice(0,7)),this.winesCollectionEntity=o?{data:{...this.winesCollectionEntity.data,[e]:{data:{...r,historical:{...r.historical,pricing:T(r.historical.pricing)},producerData:s},status:Object(_.b)()}},status:Object(_.b)()}:{data:{...this.winesCollectionEntity.data,[e]:{data:n||null,status:Object(_.d)()}},status:Object(_.d)()}}))),A(this,"fetchWinesContentfulCollection",Object(c.e)((function*(e){this.winesContentfulCollectionEntity.status=Object(_.g)();const{ok:t,data:i}=yield this.api.getWinesFromContentful(e);t?this.winesContentfulCollectionEntity={data:{...this.winesContentfulCollectionEntity.data,...i},status:Object(_.b)()}:this.winesContentfulCollectionEntity.status=Object(_.d)()}))),A(this,"fetchPortfolioTotals",Object(c.e)((function*(e="6m"){const{accessToken:t}=this.root.auth;this.totalsEntity={data:{},status:Object(_.g)()};const i=this.root.user.oktaUserInfo.sub,{ok:n,data:a}=yield this.api.getPortfolioTotals(t,i,e);this.totalsEntity=n&&a?{data:{...a,selectedRange:e,totalHistory:{...a.totalHistory,pricing:T(a.totalHistory.pricing)}},status:Object(_.b)()}:{data:{},status:Object(_.d)("Portfolio total information could not be fetched")}}))),A(this,"updatePortfolioTotalsRange",Object(c.e)((function*(e="6m"){const{accessToken:t}=this.root.auth;this.totalsEntity.data.pending=!0;const i=this.root.user.oktaUserInfo.sub,{ok:n,data:a}=yield this.api.getPortfolioTotals(t,i,e);if(!n)return this.totalsEntity.data.pending=!1,void this.toastClient.error("Chart information could not be updated",{position:"bottom-center"});this.totalsEntity.data.pending=!1,this.totalsEntity.data={...a,selectedRange:e,totalHistory:{...a.totalHistory,pricing:T(a.totalHistory.pricing)}}}))),A(this,"fetchPortfolioFeatured",Object(c.e)((function*(){const{accessToken:e}=this.root.auth;this.featuredWineEntity={data:{},status:Object(_.g)()};const t=this.root.user.oktaUserInfo.sub,{ok:i,data:n}=yield this.api.getPortfolioFeatured(e,t);i?(yield this.fetchWinesContentfulCollection([n.lwin11]),yield this.fetchPortfolioWineToCollection(n.lwin18),this.featuredWineEntity={data:n,status:Object(_.b)()}):this.featuredWineEntity={data:{},status:Object(_.d)("Portfolio featured information could not be fetched")}}))),this.root=e,this.api=t,this.toastClient=i}get winesList(){return Object(_.e)(this.winesListEntity)}get winesListFetchFinished(){return this.winesListEntity.isDone()&&!this.winesListEntity.isPending()}get winesCollection(){return Object(_.e)(this.winesCollectionEntity)}get winesContentfulCollection(){return Object(_.e)(this.winesContentfulCollectionEntity)}get totals(){return Object(_.e)(this.totalsEntity)}get featuredWine(){return Object(_.e)(this.featuredWineEntity)}get hasWinesInPortfolio(){return!!u.a.get(this.totals,"bottleCount",!1)}get totalReturn(){return u.a.get(this.totals,"returns.netChange.amount",0)/100}get totalEquity(){return u.a.get(this.totals,"positionTotal.amount",0)/100}get totalAccountValue(){return+(u.a.get(this.totals,"cash.amount",0)/100)+ +(u.a.get(this.totals,"positionTotal.amount",0)/100)}get valueChangeForToday(){const e=u.a.get(this.totals,"totalHistory.pricing");if(!e||u.a.isEmpty(e))return 0;const t=u.a.last(e),i=E.a.utc(t.date).startOf("day"),n=u.a.defaultTo(u.a.find(e,{date:i.format()}),{price:0});return t.price-n.price}get cash(){const e=u.a.get(this.totals,"cash.amount",0)/100;return e?Object(O.l)(e,2):"0.00"}get userPriceHistory(){return u.a.get(this.totals,"totalHistory.pricing",[])}get accountLevel(){let e="Standard";return this.totalAccountValue>=this.grandCru?e="Grand Cru":this.totalAccountValue>=this.premium&&(e="Premium"),e}get regionDiversityBreakdown(){const e=u.a.get(this.totals,"regionAllocation",[]);if(e.length>6){const t=e.slice(0,6),i=e.slice(6).reduce(((e,t)=>+e+ +t.percentage),0);return t.push({region:"REST OF WORLD",percentage:i}),t}return e}resetState(){this.winesListEntity=Object(_.c)({nextPageToken:null,pageSize:"6",wines:[]}),this.totalsEntity=Object(_.c)({}),this.winesCollectionEntity=Object(_.c)({}),this.winesContentfulCollectionEntity=Object(_.c)({})}}).prototype,"winesListEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({nextPageToken:null,pageSize:"6",wines:[]})}}),b=j(f.prototype,"totalsEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),y=j(f.prototype,"winesCollectionEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),v=j(f.prototype,"winesContentfulCollectionEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),w=j(f.prototype,"featuredWineEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),j(f.prototype,"winesList",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"winesList"),f.prototype),j(f.prototype,"winesListFetchFinished",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"winesListFetchFinished"),f.prototype),j(f.prototype,"winesCollection",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"winesCollection"),f.prototype),j(f.prototype,"winesContentfulCollection",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"winesContentfulCollection"),f.prototype),j(f.prototype,"totals",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"totals"),f.prototype),j(f.prototype,"featuredWine",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"featuredWine"),f.prototype),j(f.prototype,"hasWinesInPortfolio",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"hasWinesInPortfolio"),f.prototype),j(f.prototype,"totalReturn",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"totalReturn"),f.prototype),j(f.prototype,"totalEquity",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"totalEquity"),f.prototype),j(f.prototype,"totalAccountValue",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"totalAccountValue"),f.prototype),j(f.prototype,"valueChangeForToday",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"valueChangeForToday"),f.prototype),j(f.prototype,"cash",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"cash"),f.prototype),j(f.prototype,"userPriceHistory",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"userPriceHistory"),f.prototype),j(f.prototype,"accountLevel",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"accountLevel"),f.prototype),j(f.prototype,"regionDiversityBreakdown",[c.c],Object.getOwnPropertyDescriptor(f.prototype,"regionDiversityBreakdown"),f.prototype),j(f.prototype,"resetState",[c.b],Object.getOwnPropertyDescriptor(f.prototype,"resetState"),f.prototype),f);var I,L,N;function V(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function D(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let z=(L=D((I=class e{static build(t,i){return new e(t,i)}constructor(e,t){V(this,"investingStyle",L,this),V(this,"quizData",N,this),this.root=e,this.api=t}get quizDataAsJS(){return Object(c.k)(this.quizData)}setInvestingStyle(e){this.investingStyle=e}saveQuizData(e){this.quizData=e}resetState(){this.investingStyle="",this.quizData={}}}).prototype,"investingStyle",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),N=D(I.prototype,"quizData",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),D(I.prototype,"quizDataAsJS",[c.c],Object.getOwnPropertyDescriptor(I.prototype,"quizDataAsJS"),I.prototype),D(I.prototype,"setInvestingStyle",[c.b],Object.getOwnPropertyDescriptor(I.prototype,"setInvestingStyle"),I.prototype),D(I.prototype,"saveQuizData",[c.b],Object.getOwnPropertyDescriptor(I.prototype,"saveQuizData"),I.prototype),D(I.prototype,"resetState",[c.b],Object.getOwnPropertyDescriptor(I.prototype,"resetState"),I.prototype),I);var B,R,F,M,q,W=n(70),H=n.n(W),U=n(13);function Y(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function G(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function J(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let $=(R=J((B=class e{static build(t,i){return new e(t,i)}constructor(e,t){Y(this,"referralInviteStatus",R,this),Y(this,"referralProfileDetails",F,this),Y(this,"referralInviteModalWindowOpen",M,this),Y(this,"toggleReferralInviteModalWindowOpen",q,this),G(this,"validateReferralInviteIfExists",Object(c.e)((function*(){const e=H.a.get(U.f.KEY);if(H.a.remove(U.f.KEY,U.f.CONFIG),!u.a.isNil(e)&&e!==this.referralProfileDetails.id){const t=this.root.user.oktaUserInfo.sub,{accessToken:i}=this.root.auth,n=yield this.api.linkReferralInviteCode(i,t,e);if(!n.ok){const e=yield n.json(),t=u.a.get(e,"message");return void(this.referralInviteStatus.error=t)}this.referralInviteStatus.isReferralLinkSuccessful=!0,this.root.tracking.gtm.trackReferralAction("Successfully Linked Through Invite")}}))),G(this,"pollForUserReferralDetails",Object(c.e)((function*(e){const t=this.root.user.oktaUserInfo,i=t.sub;let n=e;const{accessToken:a}=this.root.auth;for(;n>0;){const e=yield this.api.getUserReferralProfileStatus(a,i);if(e.ok){const i=yield e.json();this.referralProfileDetails={...this.referralProfileDetails,...i},this.root.tracking.gtm.trackUserIdentified({...t,growsurf_referral_link:i.shareUrl});break}yield Object(O.d)(8e3),n-=1}this.referralProfileDetails.id}))),this.root=e,this.api=t}get referrerId(){return u.a.get(this.referralProfileDetails,"referrer.id","")}get isReferralWinner(){return u.a.get(this.referralProfileDetails,"isWinner",!1)}get successfulReferralCount(){return u.a.get(this.referralProfileDetails,"referralCount")}get monthsManagedFreeCount(){return 3*u.a.get(this.referralProfileDetails,"rewards",[]).length}get hasPendingReferralInvite(){const{pendingTransfers:e}=this.root.transfer;return u.a.get(this.referralInviteStatus,"isReferralLinkSuccessful")||!u.a.isEmpty(this.referrerId)&&!this.isReferralWinner&&!e}resetState(){this.referralInviteStatus={error:"",isReferralLinkSuccessful:!1},this.referralProfileDetails={referralCount:0,shareUrl:"",rewards:[],referrer:{},isWinner:!1},this.referralInviteModalWindowOpen=!1}}).prototype,"referralInviteStatus",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{error:"",isReferralLinkSuccessful:!1}}}),F=J(B.prototype,"referralProfileDetails",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{referralCount:0,shareUrl:"",rewards:[],referrer:{},isWinner:!1}}}),M=J(B.prototype,"referralInviteModalWindowOpen",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),J(B.prototype,"referrerId",[c.c],Object.getOwnPropertyDescriptor(B.prototype,"referrerId"),B.prototype),J(B.prototype,"isReferralWinner",[c.c],Object.getOwnPropertyDescriptor(B.prototype,"isReferralWinner"),B.prototype),J(B.prototype,"successfulReferralCount",[c.c],Object.getOwnPropertyDescriptor(B.prototype,"successfulReferralCount"),B.prototype),J(B.prototype,"monthsManagedFreeCount",[c.c],Object.getOwnPropertyDescriptor(B.prototype,"monthsManagedFreeCount"),B.prototype),J(B.prototype,"hasPendingReferralInvite",[c.c],Object.getOwnPropertyDescriptor(B.prototype,"hasPendingReferralInvite"),B.prototype),q=J(B.prototype,"toggleReferralInviteModalWindowOpen",[c.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return()=>{this.referralInviteModalWindowOpen=!this.referralInviteModalWindowOpen}}}),J(B.prototype,"resetState",[c.b],Object.getOwnPropertyDescriptor(B.prototype,"resetState"),B.prototype),B);var K,Z,Q,X,ee,te,ie;function ne(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function ae(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function oe(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let re=(Z=oe((K=class e{static build(t,i,n){return new e(t,i,n)}constructor(e,t,i){ne(this,"transferInProgress",Z,this),ne(this,"portalURIFetch",Q,this),ne(this,"depositsEntity",X,this),ne(this,"bidsActiveEntity",ee,this),ne(this,"pendingTransferEntity",te,this),ne(this,"shouldShowAccountSubscriptionEntity",ie,this),ae(this,"fetchPendingTransfers",Object(c.e)((function*(e){e?this.pendingTransferEntity.status=Object(_.g)(_.a.READ_OP):this.pendingTransferEntity={data:[],status:Object(_.g)(_.a.READ_OP)};const t=this.root.user.oktaUserInfo.sub,{accessToken:i}=this.root.auth,{ok:n,data:a}=yield this.api.getPendingTransfers(i,t);n?this.pendingTransferEntity={data:a,status:Object(_.b)()}:this.pendingTransferEntity.status=Object(_.d)(a)}))),ae(this,"fetchBidsActive",Object(c.e)((function*(){this.bidsActiveEntity={data:[],status:Object(_.g)(_.a.READ_OP)};const{accessToken:e}=this.root.auth,t=this.root.user.oktaUserInfo.sub,{ok:i,data:n}=yield this.api.getBidsActive(e,t);this.bidsActiveEntity=i?{data:n,status:Object(_.b)()}:{data:[],status:Object(_.d)(n)}}))),ae(this,"fetchDeposits",Object(c.e)((function*(e,t){const{type:i,range:n,nextPageToken:a}=this.depositsEntity.data,o={type:i,range:n,...e};if(t){if(!a||Object(_.f)(this.depositsEntity).isPending())return;this.depositsEntity.status=Object(_.g)(),o.pageToken=a}else this.depositsEntity={data:{fees:[],pageSize:10,type:"",range:"",...o},status:Object(_.g)()};const{accessToken:r}=this.root.auth,s=this.root.user.oktaUserInfo.sub,{ok:l,data:c}=yield this.api.getDeposits(r,s,{pageSize:10,...o});if(!c){const e="There was an issue fetching your deposits. Please try again or chat with us here \u{1f449}";return t||(this.depositsEntity.data={fees:[],pageSize:10,type:"",range:""}),this.depositsEntity.status=Object(_.d)(c),void this.toastClient.error(e,{position:"bottom-center"})}this.depositsEntity=t?{data:{...o,...c,fees:[...this.depositsEntity.data.fees,...c.fees]},status:Object(_.b)()}:{data:{...o,...c},status:Object(_.b)()}}))),ae(this,"requestGetSelfServicePortalURI",Object(c.e)((function*(){const{accessToken:e}=this.root.auth;this.portalURIFetch={data:void 0,status:Object(_.g)(_.a.READ_OP)};const t=yield this.api.getPaymentSelfServicePortalURI(e);if(!t.ok)return void(this.portalURIFetch={data:void 0,status:Object(_.d)("Self service portal link could not be fetched")});const i=yield t.json();this.portalURIFetch={data:i,status:Object(_.b)()}}))),ae(this,"fetchShouldShowAccountSubscriptionEntity",Object(c.e)((function*(){this.shouldShowAccountSubscriptionEntity={data:{response:!1,show:!1},status:Object(_.g)()};const{accessToken:e}=this.root.auth,t=this.root.user.oktaUserInfo.sub,{ok:i,data:n}=yield this.api.getShouldShowAccountSubscription(e,t);this.shouldShowAccountSubscriptionEntity=i?{data:{response:!n.hasSubscription,show:!n.hasSubscription},status:Object(_.b)()}:{data:{response:!1,show:!1},status:Object(_.d)()}}))),this.root=e,this.api=t,this.toastClient=i}get deposits(){return Object(_.e)(this.depositsEntity)}get bidsActive(){return Object(_.e)(this.bidsActiveEntity)||[]}get pendingTransfers(){return Object(_.e)(this.pendingTransferEntity)||[]}get hasMadeTransfers(){const e=this.depositsEntity.data.fees;return!u.a.isEmpty(this.pendingDeposits)||!u.a.isEmpty(e)}get shouldShowAccountSubscription(){return Object(_.e)(this.shouldShowAccountSubscriptionEntity).show}get skeletonAccountSubscription(){return Object(_.e)(this.shouldShowAccountSubscriptionEntity).response}get pendingDeposits(){return u.a.map(this.pendingTransferEntity.data,((e,t)=>({type:U.h.pending_deposit,status:e.status,id:`pending_deposit${t}`,money:{amount:100*e.amount},meta:{name:e.paymentMethod.achDebit?"ACH":e.paymentMethod.card?"Credit Card":"Pending"}})))}get sourcingWines(){return u.a.map(this.bidsActiveEntity.data,((e,t)=>({...e,type:U.h.sourcing_wine,id:`sourcing_wine ${t}`,money:{amount:null},meta:{name:e.description?`${e.description} ${Object(O.k)(e.lwin18)}`:"Sourcing wine",lwin18:e.lwin18,quantity:`${e.quantity} Case${e.quantity>1?"s":""}`,bottles:""+ +Object(O.h)(e.lwin18)}})))}get hasTransferAndAwaitingWinePurchase(){const{hasWinesInPortfolio:e}=this.root.portfolio;return!e&&(this.transferInProgress||this.hasMadeTransfers)}setTransferInProgress(e){this.transferInProgress=e}resetState(){this.transferInProgress=!1,this.portalURIFetch=Object(_.c)(),this.depositsEntity=Object(_.c)({fees:[],pageSize:10,type:"",range:""}),this.bidsActiveEntity=Object(_.c)([]),this.pendingTransferEntity=Object(_.c)([])}hideAccountSubscriptionBanner(){this.shouldShowAccountSubscriptionEntity.data.show=!1}}).prototype,"transferInProgress",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Q=oe(K.prototype,"portalURIFetch",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)()}}),X=oe(K.prototype,"depositsEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({fees:[],pageSize:10,type:"",range:""})}}),ee=oe(K.prototype,"bidsActiveEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)([])}}),te=oe(K.prototype,"pendingTransferEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)([])}}),ie=oe(K.prototype,"shouldShowAccountSubscriptionEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({response:!1,show:!1})}}),oe(K.prototype,"deposits",[c.c],Object.getOwnPropertyDescriptor(K.prototype,"deposits"),K.prototype),oe(K.prototype,"bidsActive",[c.c],Object.getOwnPropertyDescriptor(K.prototype,"bidsActive"),K.prototype),oe(K.prototype,"pendingTransfers",[c.c],Object.getOwnPropertyDescriptor(K.prototype,"pendingTransfers"),K.prototype),oe(K.prototype,"hasMadeTransfers",[c.c],Object.getOwnPropertyDescriptor(K.prototype,"hasMadeTransfers"),K.prototype),oe(K.prototype,"shouldShowAccountSubscription",[c.c],Object.getOwnPropertyDescriptor(K.prototype,"shouldShowAccountSubscription"),K.prototype),oe(K.prototype,"skeletonAccountSubscription",[c.c],Object.getOwnPropertyDescriptor(K.prototype,"skeletonAccountSubscription"),K.prototype),oe(K.prototype,"pendingDeposits",[c.c],Object.getOwnPropertyDescriptor(K.prototype,"pendingDeposits"),K.prototype),oe(K.prototype,"sourcingWines",[c.c],Object.getOwnPropertyDescriptor(K.prototype,"sourcingWines"),K.prototype),oe(K.prototype,"hasTransferAndAwaitingWinePurchase",[c.c],Object.getOwnPropertyDescriptor(K.prototype,"hasTransferAndAwaitingWinePurchase"),K.prototype),oe(K.prototype,"setTransferInProgress",[c.b],Object.getOwnPropertyDescriptor(K.prototype,"setTransferInProgress"),K.prototype),oe(K.prototype,"resetState",[c.b],Object.getOwnPropertyDescriptor(K.prototype,"resetState"),K.prototype),oe(K.prototype,"hideAccountSubscriptionBanner",[c.b],Object.getOwnPropertyDescriptor(K.prototype,"hideAccountSubscriptionBanner"),K.prototype),K);var se,le,ce,de,ue,pe,he=n(36),me=n(17);function fe(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function ge(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function be(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let ye=(le=be((se=class e{static build(t,i){return new e(t,i)}constructor(e,t){fe(this,"oktaUserEntity",le,this),fe(this,"profileEntity",ce,this),fe(this,"userInformationEntity",de,this),fe(this,"signUpModalWindow",ue,this),fe(this,"phoneNumberABVariant",pe,this),ge(this,"requestUserDetailsFromOkta",Object(c.e)((function*(e){this.oktaUserEntity={data:{},status:Object(_.g)(_.a.READ_OP)};const t=yield e.getUser(),i=u.a.get(t,"sub");if(!t||!i)return he.b(new Error("User Info fetch came up empty or incomplete"),{extra:{user:t}}),void(this.oktaUserEntity={data:{},status:Object(_.d)()});this.oktaUserEntity={data:t,status:Object(_.b)()},me.a.identify(i),this.root.tracking.gtm.trackUserIdentified(Object(c.k)(t))}))),ge(this,"fetchProfile",Object(c.e)((function*(){this.profileEntity={data:{},status:Object(_.g)(_.a.READ_OP)};const{accessToken:e}=this.root.auth,t=this.oktaUserInfo.sub,{ok:i,data:n}=yield this.api.getUserProfile(t,e);if(!i)return this.profileEntity={data:{},status:Object(_.d)(n.message)},void console.log(99999,n.message);this.profileEntity={data:n,status:Object(_.b)()}}))),ge(this,"fetchUserInformation",Object(c.e)((function*(){this.userInformationEntity={data:{},status:Object(_.g)(_.a.READ_OP)};const{accessToken:e}=this.root.auth,t=this.oktaUserInfo.sub,{ok:i,data:n}=yield this.api.getUserInformation(t,e);if(i)return this.userInformationEntity={data:n,status:Object(_.b)()},n;this.userInformationEntity={data:{},status:Object(_.d)(n.message)}}))),ge(this,"updateUserLanguage",Object(c.e)((function*(e){const{data:t,status:i}=this.profileEntity;this.profileEntity={data:{...t,language:e},status:i},this.root.history.updateBasename(e)}))),ge(this,"updateProfile",Object(c.e)((function*(){const e=this.oktaUserInfo.sub,{accessToken:t}=this.root.auth,{quizDataAsJS:i,investingStyle:n}=this.root.quiz,{ok:a}=yield this.api.updateUserProfile(e,t,i);a&&(this.root.tracking.gtm.trackUserIdentified(Object(c.k)({...this.oktaUserInfo,investing_style:n})),yield this.fetchProfile())}))),this.root=e,this.api=t,this.setPhoneNumberABVariant=this.setPhoneNumberABVariant.bind(this)}get oktaUserInfo(){return Object(_.e)(this.oktaUserEntity)}get isProfileEmpty(){return u.a.isEmpty(Object(_.e)(this.profileEntity))}get needsOnboarding(){const{investingStyle:e}=Object(_.e)(this.profileEntity);return"Could not find this user profile"===Object(_.f)(this.profileEntity).error&&!e}get profileId(){return Object(_.e)(this.oktaUserEntity).sub}get profileLanguage(){return Object(_.e)(this.profileEntity).language}resetState(){this.oktaUserEntity=Object(_.c)({}),this.profileEntity=Object(_.c)({}),this.userInformationEntity=Object(_.c)({})}signUpModalToggle(e){this.signUpModalWindow=void 0===e?!this.signUpModalWindow:e}setPhoneNumberABVariant(e){this.phoneNumberABVariant=e}savePhoneNumberToCIO(e){this.root.tracking.gtm.trackUserIdentified(Object(c.k)({...this.oktaUserInfo,phone_number:e}))}saveMinimumCapitalToCIO(e){this.root.tracking.gtm.trackUserIdentified(Object(c.k)({...this.oktaUserInfo,has_1k_liquid_capital:e}))}}).prototype,"oktaUserEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),ce=be(se.prototype,"profileEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),de=be(se.prototype,"userInformationEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),ue=be(se.prototype,"signUpModalWindow",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),pe=be(se.prototype,"phoneNumberABVariant",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),be(se.prototype,"oktaUserInfo",[c.c],Object.getOwnPropertyDescriptor(se.prototype,"oktaUserInfo"),se.prototype),be(se.prototype,"isProfileEmpty",[c.c],Object.getOwnPropertyDescriptor(se.prototype,"isProfileEmpty"),se.prototype),be(se.prototype,"needsOnboarding",[c.c],Object.getOwnPropertyDescriptor(se.prototype,"needsOnboarding"),se.prototype),be(se.prototype,"profileId",[c.c],Object.getOwnPropertyDescriptor(se.prototype,"profileId"),se.prototype),be(se.prototype,"profileLanguage",[c.c],Object.getOwnPropertyDescriptor(se.prototype,"profileLanguage"),se.prototype),be(se.prototype,"resetState",[c.b],Object.getOwnPropertyDescriptor(se.prototype,"resetState"),se.prototype),be(se.prototype,"signUpModalToggle",[c.b],Object.getOwnPropertyDescriptor(se.prototype,"signUpModalToggle"),se.prototype),be(se.prototype,"setPhoneNumberABVariant",[c.b],Object.getOwnPropertyDescriptor(se.prototype,"setPhoneNumberABVariant"),se.prototype),se);var ve;const we="AutoInvestBanner",xe="DepositBannersList",ke="RecommendedPlanBanner",Ee="PersonalSnapshot",Oe="AccountValueGraph",_e="ReturnsBox",Ce="RewardsBox",Se="HistoricalReturnsCarousel",Ae="ReferralModule",je="QualityValueProps",Te="BookACall",Pe="RegionDiversityGraph",Ie="WhiskeyVestBanner";let Le=(function(e,t,i,n,a){var o={};Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null)}((ve=class e{static build(t){return new e(t)}constructor(e){this.root=e}get getOverviewModules(){const e=this.root;let t=ke;e.transfer.skeletonAccountSubscription&&e.portfolio.totalAccountValue&&(t=we),(e.transfer.pendingDeposits.length||e.transfer.sourcingWines.length)&&(t=xe);let i=[{type:t},{type:Ee},{type:Oe},{type:Ce},{type:_e},{type:Pe},{type:Se},{type:Te},{type:Ae},{type:Ie},{type:je}];return e.transfer.hasMadeTransfers&&(i=u.a.filter(i,(e=>e.type!==Se))),"Standard"===e.portfolio.accountLevel&&e.portfolio.totalAccountValue>0&&(i=u.a.filter(i,(e=>e.type!==Te))),i}}).prototype,"getOverviewModules",[c.c],Object.getOwnPropertyDescriptor(ve.prototype,"getOverviewModules"),ve.prototype),ve);var Ne,Ve,De,ze,Be=n(686),Re=n(10),Fe=n(25);function Me(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function qe(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function We(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let He=(Ve=We((Ne=class e{static build(t,i,n){return new e(t,i,n)}constructor(e,i,n){Me(this,"accountStatementsEntity",Ve,this),Me(this,"accountStatementsMonthsEntity",De,this),Me(this,"accountWineCertificateEntity",ze,this),qe(this,"getDocumentItem",Object(c.e)((function*(e,i,n){const{accessToken:a}=this.root.auth;this.root.documents.setAccountStatementPending(e,!0);const{data:o,ok:r}=yield this.api.getDocumentItem(a,e);if(!r){const n=Re.a.t("documents:error",{document:i||t("documents:error_option.account_statement")});return this.root.documents.setAccountStatementPending(e,!1),void this.toastClient.error(n,{position:"bottom-center"})}this.root.documents.setAccountStatementPending(e,!1);const s=document.createElement("a");document.body.appendChild(s),s.style="display: none",s.href=o.link,n&&(s.target="_blank"),s.click(),document.body.removeChild(s)}))),qe(this,"localizeDocuments",(function(e){e.map((({date:e,id:t,name:i,type:n})=>{const a=new Date(e);return{date:e,id:t,name:Object(Be.a)({locale:Fe.f[Re.a.language]},"MMMM yyyy")(a),type:n}}))})),qe(this,"fetchAccountStatements",Object(c.e)((function*(e,i){i?this.accountStatementsEntity.status=Object(_.g)():this.accountStatementsEntity={data:{},status:Object(_.g)()};const{accessToken:n}=this.root.auth,{ok:a,data:o}=yield this.api.getAccountStatements(n,e);if(!a){const e=Re.a.t("documents:error",{document:title||t("documents:error_option.account_statements")});return this.accountStatementsEntity={data:{},status:Object(_.d)(o)},void this.toastClient.error(e,{position:"bottom-center"})}this.accountStatementsEntity=i?{data:{...e,...o,documents:[...this.accountStatementsEntity.data.documents,...o.documents]},status:Object(_.b)()}:{data:{...e,...o},status:Object(_.b)()}}))),qe(this,"fetchWineCertificates",Object(c.e)((function*(e,t){const{type:i,range:n,nextPageToken:a}=this.accountWineCertificateEntity.data,o={type:i,range:n,...e};if(t){if(!a||Object(_.f)(this.accountWineCertificateEntity).isPending())return;this.accountWineCertificateEntity.status=Object(_.g)(),o.pageToken=a}else this.accountWineCertificateEntity={data:{},status:Object(_.g)()};const{accessToken:r}=this.root.auth,{data:s}=yield this.api.getWineCertificates(r,{pageSize:10,...o});this.accountWineCertificateEntity=t?{data:{...o,...s,documents:[...this.accountWineCertificateEntity.data.documents,...s.documents]},status:Object(_.b)()}:{data:{...o,...s},status:Object(_.b)()}}))),qe(this,"fetchAccountStatementMonths",Object(c.e)((function*(){this.accountStatementsMonthsEntity={data:{},status:Object(_.g)()};const{accessToken:e}=this.root.auth,{ok:i,data:n}=yield this.api.getAccountStatementsMonths(e);if(!i){const e=Re.a.t("documents:error",{document:title||t("documents:error_option.available_month")});return this.accountStatementsMonthsEntity={data:{},status:Object(_.d)(n)},void this.toastClient.error(e,{position:"bottom-center"})}this.accountStatementsMonthsEntity={data:n,status:Object(_.b)()}}))),this.root=e,this.api=i,this.toastClient=n}get wineCertificates(){return Object(_.e)(this.accountWineCertificateEntity)}get accountStatements(){return Object(_.e)(this.accountStatementsEntity)}get accountStatementsMonths(){return(Object(_.e)(this.accountStatementsMonthsEntity).years||[]).map((e=>({label:e,value:e})))}setAccountStatementPending(e,t){this.accountStatementsEntity.data.documents=this.accountStatementsEntity.data.documents.map((i=>i.id===e?{...i,pending:t}:i))}resetState(){this.accountStatementsMonthsEntity=Object(_.c)({}),this.accountStatementsEntity=Object(_.c)({}),this.accountWineCertificateEntity=Object(_.c)({})}}).prototype,"accountStatementsEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),De=We(Ne.prototype,"accountStatementsMonthsEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),ze=We(Ne.prototype,"accountWineCertificateEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),We(Ne.prototype,"wineCertificates",[c.c],Object.getOwnPropertyDescriptor(Ne.prototype,"wineCertificates"),Ne.prototype),We(Ne.prototype,"accountStatements",[c.c],Object.getOwnPropertyDescriptor(Ne.prototype,"accountStatements"),Ne.prototype),We(Ne.prototype,"accountStatementsMonths",[c.c],Object.getOwnPropertyDescriptor(Ne.prototype,"accountStatementsMonths"),Ne.prototype),We(Ne.prototype,"setAccountStatementPending",[c.b],Object.getOwnPropertyDescriptor(Ne.prototype,"setAccountStatementPending"),Ne.prototype),We(Ne.prototype,"resetState",[c.b],Object.getOwnPropertyDescriptor(Ne.prototype,"resetState"),Ne.prototype),Ne);var Ue,Ye,Ge,Je,$e,Ke;function Ze(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function Qe(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Xe(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let et=(Ye=Xe((Ue=class e{static build(t,i,n){return new e(t,i,n)}constructor(e,t,i){Ze(this,"liquidateWinesListEntity",Ye,this),Ze(this,"winesInLiquidationProcessEntity",Ge,this),Ze(this,"confirmWinesLiquidationStatusEntity",Je,this),Ze(this,"postWinesToLiquidateStatusEntity",$e,this),Ze(this,"putConfirmWinesLiquidationResendEmailEntity",Ke,this),Qe(this,"fetchLiquidateWinesList",Object(c.e)((function*(){this.liquidateWinesListEntity={data:[],status:Object(_.g)()};const{accessToken:e}=this.root.auth,t=this.root.user.oktaUserInfo.sub;let i="0",n={};for(;i;){this.liquidateWinesListEntity.data=[...this.liquidateWinesListEntity.data,...[...new Array(10)].map(((e,t)=>({lwin18:`lwin18 ${t}`,pending:!0})))];const{ok:o,data:r}=yield this.api.getPortfolioWines(e,t,{pageSize:10,pageToken:i}),l=()=>{const e=s.a.createElement(s.a.Fragment,null,"There was an issue with fetching your wine list. Please refresh your page or check your internet connection. Alternatively, you can contact"," ",s.a.createElement("a",{href:"mailto:ir@vinovest.co",style:{color:"#fff",fonhtWeight:"500"}},"our support team")," ","for any technical help.");this.liquidateWinesListEntity={data:[],status:Object(_.d)(r)},this.toastClient.error(e,{position:"bottom-center"})};if(!o)return l(),void(i=null);try{const e=(yield this.api.getLwin7ContentfulData(r.wines.map((({lwin11:e})=>e)))).items.reduce(((e,t)=>({...e,[t.fields.lwin7]:t.fields})),{});n={...n,...e}}catch(a){return l(),void(i=null)}const c=r.wines.map((e=>{const t=n[e.lwin11.slice(0,7)]||{};return{...e,name:`${t.displayName||""} ${e.lwin18.slice(7,11)}`,bottleCount:e.total.bottleCount}}));this.liquidateWinesListEntity.data=[...this.liquidateWinesListEntity.data.filter((({pending:e})=>!e)),...c],i=r.nextPageToken}this.liquidateWinesListEntity.status=Object(_.b)()}))),Qe(this,"fetchWinesInLiquidationProcess",Object(c.e)((function*(){this.winesInLiquidationProcessEntity={data:{},status:Object(_.g)()};const{accessToken:e}=this.root.auth,t=this.root.user.oktaUserInfo.sub,{ok:i,data:n}=yield this.api.getWinesInLiquidationProcess(e,t);this.winesInLiquidationProcessEntity=i?{data:n.wines,status:Object(_.b)()}:{data:{},status:Object(_.d)(n)}}))),Qe(this,"liquidateWines",Object(c.e)((function*(e,t){this.postWinesToLiquidateStatusEntity={data:{completed:!1},status:Object(_.g)()};const{accessToken:i}=this.root.auth,n=this.root.user.oktaUserInfo.sub,{ok:a}=yield this.api.postWinesToLiquidate(i,n,e);if(a)this.postWinesToLiquidateStatusEntity={data:{completed:!0},status:Object(_.b)()},t();else{this.postWinesToLiquidateStatusEntity={data:{completed:!0},status:Object(_.d)()};const e=s.a.createElement(s.a.Fragment,null,'We detected an error in sending you confirmation email. Please click the "Sell Your Wine" button again. Alternatively, you can'," ",s.a.createElement("a",{href:"mailto:ir@vinovest.co",style:{color:"#fff",fonhtWeight:"500"}},"contact our support team")," ","for any technical help.");this.toastClient.error(e,{position:"bottom-center"})}}))),Qe(this,"resendEmail",Object(c.e)((function*(e){this.putConfirmWinesLiquidationResendEmailEntity={data:{completed:!1},status:Object(_.g)()};const{accessToken:t}=this.root.auth,i=this.root.user.oktaUserInfo.sub,{ok:n}=yield this.api.putConfirmWinesLiquidationResendEmail(t,i);if(n)this.putConfirmWinesLiquidationResendEmailEntity={data:{completed:!0},status:Object(_.b)()};else{this.putConfirmWinesLiquidationResendEmailEntity={data:{completed:!0},status:Object(_.d)()};const e=s.a.createElement(s.a.Fragment,null,'We detected an error in sending you confirmation email. Please click the "Resend Email" button again. Alternatively, you can'," ",s.a.createElement("a",{href:"mailto:ir@vinovest.co",style:{color:"#fff",fonhtWeight:"500"}},"contact our support team")," ","for any technical help.");this.toastClient.error(e,{position:"bottom-center"})}}))),Qe(this,"confirmWinesLiquidation",Object(c.e)((function*(){this.confirmWinesLiquidationStatusEntity={data:{completed:!1},status:Object(_.g)()};const{accessToken:e}=this.root.auth,t=this.root.user.oktaUserInfo.sub,i=s.a.createElement(s.a.Fragment,null,"This link is no longer active. Please start again to sell your wines. Alternatively, you can"," ",s.a.createElement("a",{href:"mailto:ir@vinovest.co",style:{color:"#fff",fonhtWeight:"500"}},"contact our support team")," ","for any technical help."),n=s.a.createElement(s.a.Fragment,null,"We detected an error in sending your confirmation. Please refresh your page. Alternatively, you can"," ",s.a.createElement("a",{href:"mailto:ir@vinovest.co",style:{color:"#fff",fonhtWeight:"500"}},"contact our support team")," ","for any technical help."),{data:a}=yield this.api.getWinesInLiquidationProcess(e,t);if(!a||!a.wines||!a.wines.length)return this.confirmWinesLiquidationStatusEntity={data:{completed:!0},status:Object(_.d)()},void this.toastClient.error(i,{position:"bottom-center"});const{ok:o}=yield this.api.putConfirmWinesLiquidation(e,t);if(!o)return this.confirmWinesLiquidationStatusEntity={data:{completed:!0},status:Object(_.d)()},void this.toastClient.error(n,{position:"bottom-center"});this.confirmWinesLiquidationStatusEntity={data:{completed:!0},status:Object(_.b)()}}))),this.root=e,this.api=t,this.toastClient=i}get liquidateWinesList(){return Object(_.e)(this.liquidateWinesListEntity)}get winesInLiquidationProcess(){return Object(_.e)(this.winesInLiquidationProcessEntity)}get confirmWinesLiquidationStatus(){return Object(_.e)(this.confirmWinesLiquidationStatusEntity)}get postWinesToLiquidateStatus(){return Object(_.e)(this.postWinesToLiquidateStatusEntity)}get putConfirmWinesLiquidationResendEmail(){return Object(_.e)(this.putConfirmWinesLiquidationResendEmailEntity)}resetState(){this.liquidateWinesListEntity=Object(_.c)([]),this.winesInLiquidationProcessEntity=Object(_.c)([]),this.confirmWinesLiquidationStatusEntity=Object(_.c)({completed:!1}),this.postWinesToLiquidateStatusEntity=Object(_.c)({completed:!1}),this.putConfirmWinesLiquidationResendEmailEntity=Object(_.c)({completed:!1})}}).prototype,"liquidateWinesListEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)([])}}),Ge=Xe(Ue.prototype,"winesInLiquidationProcessEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)([])}}),Je=Xe(Ue.prototype,"confirmWinesLiquidationStatusEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({completed:!1})}}),$e=Xe(Ue.prototype,"postWinesToLiquidateStatusEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({completed:!1})}}),Ke=Xe(Ue.prototype,"putConfirmWinesLiquidationResendEmailEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({completed:!1})}}),Xe(Ue.prototype,"liquidateWinesList",[c.c],Object.getOwnPropertyDescriptor(Ue.prototype,"liquidateWinesList"),Ue.prototype),Xe(Ue.prototype,"winesInLiquidationProcess",[c.c],Object.getOwnPropertyDescriptor(Ue.prototype,"winesInLiquidationProcess"),Ue.prototype),Xe(Ue.prototype,"confirmWinesLiquidationStatus",[c.c],Object.getOwnPropertyDescriptor(Ue.prototype,"confirmWinesLiquidationStatus"),Ue.prototype),Xe(Ue.prototype,"postWinesToLiquidateStatus",[c.c],Object.getOwnPropertyDescriptor(Ue.prototype,"postWinesToLiquidateStatus"),Ue.prototype),Xe(Ue.prototype,"putConfirmWinesLiquidationResendEmail",[c.c],Object.getOwnPropertyDescriptor(Ue.prototype,"putConfirmWinesLiquidationResendEmail"),Ue.prototype),Xe(Ue.prototype,"resetState",[c.b],Object.getOwnPropertyDescriptor(Ue.prototype,"resetState"),Ue.prototype),Ue);var tt,it,nt,at,ot,rt,st=n(147),lt=n.n(st);function ct(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function dt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ut(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}const pt=()=>Object(_.c)([{name:"latest"}]);let ht=(it=ut((tt=class e{static build(t,i,n){return new e(t,i,n)}constructor(e,t,i){ct(this,"blogCategoriesEntity",it,this),ct(this,"fetchParams",nt,this),ct(this,"blogListEntity",at,this),ct(this,"articleEntity",ot,this),ct(this,"popularEntity",rt,this),dt(this,"runCircularReplacer",(e=>JSON.parse(lt()(e)))),dt(this,"fetchBlogCategories",Object(c.e)((function*(){this.blogCategoriesEntity.status=Object(_.g)();const{ok:e,data:t}=yield this.api.getBlogCategoriesFromContentful();if(!e||!t){const e="There was an issue fetching your blog categories. Please try again or chat with us here \u{1f449}";return this.blogCategoriesEntity.status=Object(_.d)(t),void this.toastClient.error(e,{position:"bottom-center"})}const i=t.reduce(((e,t)=>({...e,[t.name]:t})),{}),{"Most Popular":n,Featured:a,...o}=i,r=Object.values(o);this.blogCategoriesEntity={data:[...pt().data,...r],status:Object(_.b)()},this.fetchPopular({mostPopular:n?n.blogs:[],featured:a?a.blogs:[]})}))),dt(this,"fetchBlogsByIds",Object(c.e)((function*(e,t){if(!e||!e.length)return[];const i=e.map((({sys:e})=>e.id)),{ok:n,data:a}=yield this.api.getBlogsListFromContentful({skip:0,category:null,filterIds:i.join(","),limit:t});if(!n||!a){const e="There was an issue fetching your blogs. Please try again or chat with us here \u{1f449}";return void this.toastClient.error(e,{position:"bottom-center"})}return(()=>Object(d.get)(a,"items",[]).map((e=>this.runCircularReplacer(e))))()}))),dt(this,"fetchPopular",Object(c.e)((function*({mostPopular:e,featured:t}){this.popularEntity={data:{mostPopular:[],featured:{}},status:Object(_.g)()};const[i,n]=yield Promise.all([this.fetchBlogsByIds(e,4),this.fetchBlogsByIds(t)]);i&&(this.popularEntity.data.mostPopular=i),i&&(this.popularEntity.data.featured=n.filter((e=>Object.entries(e).length>1))),this.popularEntity.status=Object(_.b)()}))),dt(this,"fetchBlogs",Object(c.e)((function*(e){const{limit:t,pagesCount:i}=this.fetchParams;if(e>i&&i)return;this.blogListEntity={status:Object(_.g)(),data:[]},this.fetchParams.page=e;const n=yield this.api.getBlogsListFromContentful({skip:(e-1)*t,limit:t,category:null}),{ok:a,data:o}=n;if(!a||!o){const e="There was an issue fetching your blogs. Please try again or chat with us here \u{1f449}";return this.blogListEntity={status:Object(_.d)(),data:[]},void this.toastClient.error(e,{position:"bottom-center"})}const{total:r,skip:s}=o;this.fetchParams={...this.fetchParams,total:r,skip:s,pagesCount:Math.ceil(r/t)},this.blogListEntity={data:this.runCircularReplacer(o.items),status:Object(_.b)()}}))),dt(this,"fetchBlogsByCategory",Object(c.e)((function*(e){this.blogListEntity={data:[],status:Object(_.g)()};const t=yield this.fetchBlogsByIds(e.blogs);this.blogListEntity={status:Object(_.b)(),data:t||[]}}))),dt(this,"fetchArticle",Object(c.e)((function*(e){if(this.isBlogListPagePending)return;this.articleEntity={status:Object(_.g)(),data:{}};const{ok:t,data:i,error:n}=yield this.api.getArticleFromContentful(e);if(!t||!i){const e="There was an issue fetching blog. Please try again or chat with us here \u{1f449}";return this.articleEntity={status:Object(_.d)(n),data:{}},void("PAGE_NOT_FOUND"!==n&&this.toastClient.error(e,{position:"bottom-center"}))}const a=yield this.fetchBlogsByIds(i.relatedArticles);i.relatedArticlesFromResponse=this.runCircularReplacer(a),this.articleEntity={data:this.runCircularReplacer(i),status:Object(_.b)()}}))),this.root=e,this.api=t,this.toastClient=i,this.updateCategory=this.updateCategory.bind(this),this.fetchBlogCategories=this.fetchBlogCategories.bind(this),this.fetchBlogs=this.fetchBlogs.bind(this),this.fetchArticle=this.fetchArticle.bind(this),this.resetArticle=this.resetArticle.bind(this),this.fetchBlogsByCategory=this.fetchBlogsByCategory.bind(this)}get blogCategories(){return Object(_.e)(this.blogCategoriesEntity)}get blogList(){return Object(_.e)(this.blogListEntity)}get article(){return Object(_.e)(this.articleEntity)}get popular(){return Object(_.e)(this.popularEntity)}get isBlogListPagePending(){return Object(_.f)(this.blogListEntity).isPending()||Object(_.f)(this.blogCategoriesEntity).isPending()}get isArticlePagePending(){return Object(_.f)(this.articleEntity).isPending()}get articlePageDoesNotExist(){return"PAGE_NOT_FOUND"===Object(_.f)(this.articleEntity).error}get isPopularPending(){return Object(_.f)(this.popularEntity).isPending()}get isPopularPendingDone(){return Object(_.f)(this.popularEntity).isDone()}updateCategory({category:e,page:t=1}){if(!this.isBlogListPagePending){if("latest"!==e){const i=this.blogCategoriesEntity.data.find((({name:t})=>t===e)),n={category:"latest",total:0,skip:0,limit:18,pagesCount:0,page:1},a=i.blogs.length;return this.fetchParams={...n,category:e,pagesCount:Math.ceil(a/n.limit),total:a,page:t},this.fetchBlogsByCategory({...i,blogs:i.blogs.slice((t-1)*n.limit,(t-1)*n.limit+n.limit)})}this.fetchParams={category:"latest",total:0,skip:0,limit:18,pagesCount:0,page:1,category:e},this.fetchBlogs(1)}}resetArticle(){this.articleEntity=Object(_.c)({})}}).prototype,"blogCategoriesEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return pt()}}),nt=ut(tt.prototype,"fetchParams",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{category:"latest",total:0,skip:0,limit:18,pagesCount:0,page:1}}}),at=ut(tt.prototype,"blogListEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)([])}}),ot=ut(tt.prototype,"articleEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),rt=ut(tt.prototype,"popularEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({mostPopular:[],featured:{}})}}),ut(tt.prototype,"blogCategories",[c.c],Object.getOwnPropertyDescriptor(tt.prototype,"blogCategories"),tt.prototype),ut(tt.prototype,"blogList",[c.c],Object.getOwnPropertyDescriptor(tt.prototype,"blogList"),tt.prototype),ut(tt.prototype,"article",[c.c],Object.getOwnPropertyDescriptor(tt.prototype,"article"),tt.prototype),ut(tt.prototype,"popular",[c.c],Object.getOwnPropertyDescriptor(tt.prototype,"popular"),tt.prototype),ut(tt.prototype,"isBlogListPagePending",[c.c],Object.getOwnPropertyDescriptor(tt.prototype,"isBlogListPagePending"),tt.prototype),ut(tt.prototype,"isArticlePagePending",[c.c],Object.getOwnPropertyDescriptor(tt.prototype,"isArticlePagePending"),tt.prototype),ut(tt.prototype,"articlePageDoesNotExist",[c.c],Object.getOwnPropertyDescriptor(tt.prototype,"articlePageDoesNotExist"),tt.prototype),ut(tt.prototype,"isPopularPending",[c.c],Object.getOwnPropertyDescriptor(tt.prototype,"isPopularPending"),tt.prototype),ut(tt.prototype,"isPopularPendingDone",[c.c],Object.getOwnPropertyDescriptor(tt.prototype,"isPopularPendingDone"),tt.prototype),ut(tt.prototype,"updateCategory",[c.b],Object.getOwnPropertyDescriptor(tt.prototype,"updateCategory"),tt.prototype),ut(tt.prototype,"resetArticle",[c.b],Object.getOwnPropertyDescriptor(tt.prototype,"resetArticle"),tt.prototype),tt);var mt,ft,gt;function bt(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function yt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function vt(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let wt=(ft=vt((mt=class e{static build(t,i,n){return new e(t,i,n)}constructor(e,t,i){bt(this,"supportCategoriesEntity",ft,this),bt(this,"searchFAQArticlesListEntity",gt,this),yt(this,"fetchSupportCategories",Object(c.e)((function*(){if(Object(_.f)(this.supportCategoriesEntity).isPending())return;this.supportCategoriesEntity.status=Object(_.g)();const{ok:e,data:t}=yield this.api.getSupportCategoriesFromContentful();if(!e||!t){const e="There was an issue fetching your support categories. Please try again or chat with us here \u{1f449}";return this.supportCategoriesEntity.status=Object(_.d)(t),void this.toastClient.error(e,{position:"bottom-center"})}const i=t.reduce(((e,t)=>({...e,[t.slugSupport]:t})),{}),{"about-vinovest":n,investing:a,"returns-and-liquidity":o,ownership:r,"fees-minimums-payment-methods":s,"shipping-storage-taxes":l,...c}=i,u=Object.values(c),p=Object(d.compact)([n,a,o,r,s,l,...u]).map((({supportPages:e,...t})=>e&&{...t,supportPages:e.map((e=>({...e,fields:{...e.fields,parentCategorySlug:t.slugSupport,parentCategoryName:t.supportCategoryName}})))}||{}));this.supportCategoriesEntity={data:p,status:Object(_.b)()}}))),yt(this,"fetchSearchFAQArticles",Object(c.e)((function*(e){if(Object(_.f)(this.searchFAQArticlesListEntity).isPending())return;this.searchFAQArticlesListEntity.status=Object(_.g)();const{ok:t,data:i}=yield this.api.searchFAQArticles(e);if(!t||!i)return this.searchFAQArticlesListEntity.status=Object(_.d)(i),void(this.searchFAQArticlesListEntity.data=[]);this.searchFAQArticlesListEntity={data:i,status:Object(_.b)()}}))),this.root=e,this.api=t,this.toastClient=i,this.fetchSupportCategories=this.fetchSupportCategories.bind(this),this.fetchSearchFAQArticles=this.fetchSearchFAQArticles.bind(this)}get supportCategories(){return Object(_.e)(this.supportCategoriesEntity)}get searchFAQArticlesList(){return Object(_.e)(this.searchFAQArticlesListEntity)}get isSearchFAQArticlesListPending(){return Object(_.f)(this.searchFAQArticlesListEntity).isPending()}get isSearchFAQArticlesListDone(){return Object(_.f)(this.searchFAQArticlesListEntity).isDone()}get isSupportCategoriesPending(){return Object(_.f)(this.supportCategoriesEntity).isPending()}get isSupportCategoriesDone(){return Object(_.f)(this.supportCategoriesEntity).isDone()}get isSupportCategoriesFirstRenderPending(){return Object(_.f)(this.supportCategoriesEntity).isPending()||!Object(_.f)(this.supportCategoriesEntity).isDone()}}).prototype,"supportCategoriesEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)([])}}),gt=vt(mt.prototype,"searchFAQArticlesListEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),vt(mt.prototype,"supportCategories",[c.c],Object.getOwnPropertyDescriptor(mt.prototype,"supportCategories"),mt.prototype),vt(mt.prototype,"searchFAQArticlesList",[c.c],Object.getOwnPropertyDescriptor(mt.prototype,"searchFAQArticlesList"),mt.prototype),vt(mt.prototype,"isSearchFAQArticlesListPending",[c.c],Object.getOwnPropertyDescriptor(mt.prototype,"isSearchFAQArticlesListPending"),mt.prototype),vt(mt.prototype,"isSearchFAQArticlesListDone",[c.c],Object.getOwnPropertyDescriptor(mt.prototype,"isSearchFAQArticlesListDone"),mt.prototype),vt(mt.prototype,"isSupportCategoriesPending",[c.c],Object.getOwnPropertyDescriptor(mt.prototype,"isSupportCategoriesPending"),mt.prototype),vt(mt.prototype,"isSupportCategoriesDone",[c.c],Object.getOwnPropertyDescriptor(mt.prototype,"isSupportCategoriesDone"),mt.prototype),vt(mt.prototype,"isSupportCategoriesFirstRenderPending",[c.c],Object.getOwnPropertyDescriptor(mt.prototype,"isSupportCategoriesFirstRenderPending"),mt.prototype),mt);var xt,kt;function Et(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let Ot=(kt=Et((xt=class e{static build(t,i,n){return new e(t,i,n)}constructor(e,t,i){var n,a,o,r,s,l,d;n=this,a="newsListEntity",r=this,(o=kt)&&Object.defineProperty(n,a,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(r):void 0}),s=this,l="fetchNewsList",d=Object(c.e)((function*(){this.newsListEntity.status=Object(_.g)();const{ok:e,data:t}=yield this.api.getNewsListFromContentful();if(!e||!t){const e="There was an issue fetching your press data. Please try again or chat with us here \u{1f449}";return this.newsListEntity.status=Object(_.d)(t),void this.toastClient.error(e,{position:"bottom-center"})}this.newsListEntity={data:t,status:Object(_.b)()}})),l in s?Object.defineProperty(s,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[l]=d,this.root=e,this.api=t,this.toastClient=i,this.fetchNewsList=this.fetchNewsList.bind(this)}get newsList(){return Object(_.e)(this.newsListEntity).items||[]}get isNewsListPending(){return Object(_.f)(this.newsListEntity).isPending()}get isNewsListDone(){return Object(_.f)(this.newsListEntity).isDone()}}).prototype,"newsListEntity",[c.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(_.c)({})}}),Et(xt.prototype,"newsList",[c.c],Object.getOwnPropertyDescriptor(xt.prototype,"newsList"),xt.prototype),Et(xt.prototype,"isNewsListPending",[c.c],Object.getOwnPropertyDescriptor(xt.prototype,"isNewsListPending"),xt.prototype),Et(xt.prototype,"isNewsListDone",[c.c],Object.getOwnPropertyDescriptor(xt.prototype,"isNewsListDone"),xt.prototype),xt);var _t=n(108);function Ct(e){const{tablet:t}=_t.b,i=window.innerWidth<=t;return{initialPortfolioLoad:Object(c.h)((()=>{var t,i,n,a,o,r;return(null===(t=e.user)||void 0===t?void 0:t.profileId)&&e.auth.isAuthenticated&&!(null!==(i=e.portfolio)&&void 0!==i&&null!==(n=i.winesList)&&void 0!==n&&null!==(a=n.wines)&&void 0!==a&&a.length)&&!(null!==(o=e.portfolio)&&void 0!==o&&null!==(r=o.winesList)&&void 0!==r&&r.nextPageToken)}),((t,i,n)=>{t&&(e.portfolio.fetchPortfolioWines(),e.portfolio.fetchPortfolioTotals())})),subsequentPortfolioLoad:!i&&Object(c.h)((()=>{var t,i,n,a,o,r;return(null===(t=e.user)||void 0===t?void 0:t.profileId)&&e.auth.isAuthenticated&&(null===(i=e.portfolio)||void 0===i||null===(n=i.winesList)||void 0===n||null===(a=n.wines)||void 0===a?void 0:a.length)&&(null===(o=e.portfolio)||void 0===o||null===(r=o.winesList)||void 0===r?void 0:r.nextPageToken)}),(async(t,i,n)=>{t&&e.portfolio.fetchPortfolioWines()}))}}Object(c.d)({enforceActions:"observed"});class St{static build(e,t,i){const n=new St(e,t,i);return function(e){return Promise.all([Ct(e)])}(n).then((e=>{n.disposers=e.reduce(((e,t)=>({...e,...t})),{})})),n}constructor(e,t,i){var n,a,o;o={},(a="tracking")in(n=this)?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,this.tracking=t,this.auth=m.build(this,e),this.deposit=x.a.build(this,e),this.portfolio=P.build(this,e,l.b),this.quiz=z.build(this,e),this.referral=$.build(this,e),this.transfer=re.build(this,e,l.b),this.user=ye.build(this,e),this.skeleton=Le.build(this),this.documents=He.build(this,e,l.b),this.liquidation=et.build(this,e,l.b),this.blog=ht.build(this,e,l.b),this.support=wt.build(this,e,l.b),this.press=Ot.build(this,e,l.b)}setBrowserHistory(e){this.history=e}}const At=Object(r.createContext)(),jt=At.Provider},125:function(e,t,i){"use strict";i.d(t,"a",(function(){return Tt}));var n=i(0),a=i.n(n),o=i(1),r=i(18),s=i(64),l=i(393),c=i(670),d=i(219),u=i(8),p=i(394),h=i.n(p),m=i(27),f=i(7),g=i(6),b=i.n(g),y=i(11),v=i(49),w=i(17);const x=o.e.div`
    position: relative;
    height: 65px;
    border: 1px solid ${e=>e.theme.colors[e.isFocused?"burntOrange":"borderGray"]};
    transition: border 0.1s ease-in-out;
    display: flex;
    align-items: center;
    box-shadow: ${e=>e.theme.shadow.v2};

    font-size: 16px;
    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 18px;
    `}
`;var k=i(56),E=i(155),O=i.n(E),_=i(12),C=i(20),S=i(13),A=i(150),j=i(109);class T extends j.a{static build(e){return new T(e)}constructor(e){super(),this.type=S.b.CreditCard,this.data=e,this.isACH=this.isACH.bind(this),this.isCreditCard=this.isCreditCard.bind(this)}isACH(){return!1}isCreditCard(){return!0}}const P=Object(o.e)(_.g)`
    margin-top: 32px;
    @media screen and (min-width: 768px) {
        margin-top: 40px;
        max-width: initial;
    }
`,I=Object(o.e)(P)`
    background: ${e=>e.theme.colors.white};
    border: 1px solid ${e=>e.theme.colors.mainAccentBlue};
    color: ${e=>e.theme.colors.mainAccentBlue};
    transition: border 0.1s ease-in-out;
    :hover {
        box-shadow: none;
        border: 1px solid ${e=>e.theme.colors.burntOrange};
    }
`,L=o.e.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    button {
        width: 48%;
    }
`,N=o.e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
`,V=o.e.div.attrs((e=>({marginTop:e.marginTop||"0px",padding:e.padding||"0 15px",paddingBottom:e.paddingBottom||"0px",position:e.position||"absolute"})))`
    text-align: center;
    font-family: ${e=>e.theme.fonts.label};
    text-transform: uppercase;

    color: ${e=>b.a.cond([[b.a.matches("warn"),b.a.constant(e.theme.colors.burntOrange)],[b.a.matches("error"),b.a.constant(e.theme.colors.red)],[b.a.stubTrue,b.a.constant(e.theme.colors.mainAccentBlue)]])(e.level)};

    position:${e=>e.position};
    display: flex;
    justify-content: center;
    padding: ${e=>e.padding};
    padding-bottom: ${e=>e.paddingBottom}
    font-size: 13px;
    margin-top: ${e=>e.marginTop};
    width: 100%;
`,D=o.e.div`
    margin-top: 48px;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,z=o.e.button`
    display: flex;
    align-items: center;
    border: 1px solid ${e=>e.theme.colors.borderGray};
    text-align: center;
    cursor: pointer;
    transition: border 0.1s ease-in-out;
    padding: 28px;
    height: 100px;
    font-size: 18px;
    width: 100%;
    background: none;
    border-top-color: transparent;

    :nth-child(1) {
        border-top-color: ${e=>e.theme.colors.borderGray};
    }
    :last-child {
        margin-bottom: 20px;
    }
    :hover {
        border: 1px solid ${e=>e.theme.colors.burntOrange};
    }

    ${e=>e.disabled?`\n        opacity: 0.3;\n        cursor: not-allowed;\n        :hover {\n        border: 1px solid ${e.theme.colors.borderGray}\n        };\n    `:void 0}

    span {
        margin-left: 24px;
    }
    .icon-wrapper {
        width: 45px;
    }
    .payment-right-arrow-icon {
        margin-left: auto;
    }
`,B=o.e.div`
    padding: 0 20px;

    ${e=>e.theme.media.greaterThan("768px")`
        padding: 0;
  `}
`,R=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.005em;
    color: #242e35;
    max-width: ${({maxWidth:e})=>e||"754px"};
    width: 100%;
    margin: 0 auto;
    text-align: center;

    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 20px;
        line-height: 36px;
  `}
`,F=Object(o.e)(_.g)`
    max-width: 393px !important;
    min-height: 70px;
    margin: 39px auto 0;

    ${e=>e.theme.media.greaterThan("768px")`
        margin: 52px auto 0;
    `}
`,M=o.e.div`
    display: inline-block;
    height: 36px;
    margin-left: 6px;
`;var q=i(221);const W=[1e3,5e3,1e4,5e4,25e4],H="Other amount",U="yuSU9pogQpOHSmeoxBstIg",Y=Object(y.a)((()=>{const{t:e}=Object(c.a)(["deposit","common"]),t=Object(u.f)(),{oktaAuth:i}=Object(v.d)(),[o,r]=Object(n.useState)(null);Object(n.useEffect)((()=>{let e;if(void 0!==window.google_optimize&&!window.google_optimize.get(U)){return(async()=>{if(window.dataLayer){const e=await window.dataLayer.push({event:"optimizeAddFund"});console.log("optimizeAddFund",{optimizeAddFund:e})}e=setInterval((()=>{if(void 0!==window.google_optimize){const t=window.google_optimize.get(U);t&&(E(W.includes(s.depositAmt)&&!!+t),console.log("OptimizeVariant",{variant:t}),clearInterval(e))}}),100)})(),()=>{clearInterval(e)}}}),[]),Object(n.useEffect)((()=>{(async()=>{await t.user.requestUserDetailsFromOkta(i);const e=await q.a.useAccountPortfolioGet(t.user.oktaUserEntity.data.sub,t.auth.accessToken);r(e)})()}),[]);const{deposit:s}=Object(u.f)(),l=Object(u.b)(),d=Object(n.useMemo)((()=>{const{recurringMinDepositAmount:e,oneTimeMinDepositAmount:t}=s;return(null===o||void 0===o?void 0:o.cash.amount)+(null===o||void 0===o?void 0:o.positionTotal.amount)>0?e:t}),[s.recurringMinDepositAmount,s.oneTimeMinDepositAmount,s.selectedDepositFrequency,o]),[p,h]=Object(n.useState)(""),[m,f]=Object(n.useState)(!1),[g,y]=Object(n.useState)(s.depositAmt),[x,E]=Object(n.useState)(W.includes(s.depositAmt)&&!!+(window.google_optimize&&window.google_optimize.get(U))),j=Object(n.useCallback)((e=>{if(h(""),e.target.value.length>=10)return;const t=+e.target.value.replace(/,/g,"");y(b.a.isNaN(t)?0:t)}),[]);Object(n.useEffect)((()=>{s.userSelectedFrequency||s.setDepositFrequencyKey("")}),[]);const[P,I]=Object(n.useState)(0),L=Object(n.useCallback)((()=>{h("");const t=s.normalizedSavedPaymentMethods[P],i=g;if(i<d){const t=e("amountvalidation",{minValue:Object(C.l)(d),currency:e("common:currencySymbol")});h(t)}else{if(s.setDepositAmt(i),w.a.capture(Tt.DepositAmountAdded,{value:i}),s.selectedFrequencyKey||s.setDepositFrequencyKey("one time"),t)return t.type===S.b.BankTransfer&&s.setPaymentSource(A.a.build(t)),t.type===S.b.CreditCard&&s.setPaymentSource(T.build(t)),w.a.capture(Tt.ClickExistingPayment,{value:t.type}),void l("/deposit/review-transfer");l("/deposit/select-source"),w.a.capture(Tt.ClickNewPayment)}}),[g,s,l,P,d]),V=Object(n.useCallback)((e=>{13===e.keyCode&&L()}),[L]);return a.a.createElement(_.e,{in:!0},a.a.createElement(N,null,a.a.createElement(G,null,a.a.createElement(J,null,e("source")),a.a.createElement(K,null,a.a.createElement("select",{value:P,onChange:e=>{const t=e.target.value;I(t)}},b.a.map(s.normalizedSavedPaymentMethods,((e,t)=>a.a.createElement("option",{value:t,key:e.id},`${e.name} ****${e.L4}`))),a.a.createElement("option",{value:99},e("new_payment_source"))),a.a.createElement("img",{src:O.a,alt:"expand-icon",className:"expand-dropdown-arrow"}))),a.a.createElement(G,null,a.a.createElement(J,null,e("frequency")),a.a.createElement($,null,e("feebanner",{amount:5})),a.a.createElement(K,null,a.a.createElement("select",{value:s.selectedFrequencyKey,onChange:e=>{s.setDepositFrequencyKey(e.target.value),s.setUserSelectedFrequency(),w.a.capture(Tt.SelectFrequency,{value:e.target.value})}},a.a.createElement("option",{value:"",disabled:!0},e("option")),b.a.map(s.depositFrequencyOptions,((e,t)=>a.a.createElement("option",{value:t,key:t},Object(C.a)(t))))),a.a.createElement("img",{src:O.a,alt:"expand-icon",className:"expand-dropdown-arrow"}))),a.a.createElement(G,null,a.a.createElement(J,null,e("amount")),x?a.a.createElement(K,null,a.a.createElement("select",{value:g,onChange:e=>{e.target.value===H?(y(""),E(!1)):y(+e.target.value)}},b.a.map(W,(e=>a.a.createElement("option",{value:e,key:e},`$${Object(C.l)(e)}`))),a.a.createElement("option",{value:H},e("select_other"))),a.a.createElement("img",{src:O.a,alt:"expand-icon",className:"expand-dropdown-arrow"})):a.a.createElement(Z,{isFocused:m,hasInput:!!g},a.a.createElement("input",{id:"deposit-input-field",type:"text",onKeyDown:V,onFocus:()=>{f(!0)},onBlur:()=>{f(!1)},onChange:j,value:g||"",placeholder:"e.g.  $5,000"}),!!g&&a.a.createElement("span",{id:"currency-symbol"},"$"),p&&a.a.createElement(_.e,{in:!0,timeout:200},a.a.createElement("span",{id:"add-funds-error"},p)))),a.a.createElement(k.a,{CTA:g?e("continue",{currency_symbol:e("common:currencySymbol"),amount:Object(C.l)(+g)}):"",onClick:L,isLoading:s.savedPaymentMethodsFetch.status.isFetching()})))})),G=o.e.div`
    display: flex;
    flex-direction: column;
    margin: 26px 0;
    width: 100%;
`,J=o.e.label`
    font-family: ${e=>e.theme.fonts.label};
    text-transform: uppercase;
    margin-bottom: 10px;

    font-size: 14px;
    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 16px;
  `}
`,$=o.e.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${e=>e.theme.fonts.label};
    text-transform: uppercase;
    background: #4f81b0;
    color: white;
    text-align: center;
    font-size: 12px;
    height: 48px;

    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 14px;
    `};
`,K=(o.e.div`
    font-family: ${e=>e.theme.fonts.label};
    text-transform: uppercase;
    background: #4f81b0;
    color: white;
    padding: 7px 13px;
    border-radius: 4px;
    position: absolute;

    left: 55%;
    font-size: 14px;
    ${e=>e.theme.media.greaterThan("768px")`
    font-size: 16px;
    left: 45%;
  `}
`,Object(o.e)(x)`
    select {
        cursor: pointer;
        height: 100%;
        width: 100%;
        outline: 0;
        appearance: none;
        position: absolute;
        background: none;
        border: 0;
        left: 0;
        top: 0;
        z-index: 1;

        option {
            font-family: Verdana;
        }
        padding: 0 34px 0 20px;
        ${e=>e.theme.media.greaterThan("768px")`
            padding: 0 34px 0 28px;
        `}
    }

    .expand-dropdown-arrow {
        position: absolute;
        right: 35px;
        height: 13px;
    }
`),Z=Object(o.e)(x)`
    padding: 0 34px 0 ${e=>e.hasInput?"28px":"10px"};
    #deposit-input-field {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 0 15px;
        appearance: none;
    }
    #currency-symbol {
        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #add-funds-error {
        position: absolute;
        font-family: ${e=>e.theme.fonts.label};
        color: ${e=>e.theme.colors.red};
        text-transform: uppercase;
        top: 70px;
        left: 0;

        font-size: 12px;
        ${e=>e.theme.media.greaterThan("768px")`
            font-size: 14px;
        `}
    }
`;var Q=i(301),X=i(41),ee=i(292),te=i.n(ee);const ie=Object(y.a)((()=>{const{t:e}=Object(c.a)(["deposit"]),{deposit:t,transfer:i}=Object(u.f)(),o=Object(u.h)("colors"),r=Object(X.a)(),l=Object(u.b)(),d=Object(s.useStripe)();Object(n.useEffect)((()=>{t.depositAmt&&!t.selectedPaymentSource.isNotSet()||l("/deposit/add-funds",Tt.AddFundsRetry)}),[t.depositAmt,t.selectedPaymentSource,l]);const p=Object(n.useMemo)((()=>`$${Object(C.l)(t.depositAmt)}`),[t.depositAmt]),h=Object(n.useMemo)((()=>{if(!t.selectedPaymentSource.isNotSet())return t.selectedPaymentSource.maskedBankAccountDisplayInfo}),[t.selectedPaymentSource]),m=Object(n.useMemo)((()=>Object(C.a)(t.selectedFrequencyKey)),[t.selectedFrequencyKey]),f=Object(n.useMemo)((()=>t.depositStartDate.format("MMM DD, YYYY")),[t.depositStartDate]),g=Object(n.useMemo)((()=>{const i=t.selectedPaymentSource;return i.isACH()?e("ach_fee"):i.isCreditCard()?e("credit"):e("fee")}),[t.selectedPaymentSource,e]),b=Object(n.useMemo)((()=>`$${Object(C.l)((t.depositAmtPlusFeesInCents-t.depositAmtInCents)/100)}`),[t.depositAmtPlusFeesInCents,t.depositAmtInCents]),y=Object(n.useCallback)((async()=>{await t.requestCreateDeposit(d),i.fetchPendingTransfers(),t.depositPost.status.isSuccess()?l("/deposit/confirmation"):l("/deposit/failed")}),[t,l,d,i]);return a.a.createElement(_.e,{in:!0},a.a.createElement(N,null,a.a.createElement(ne,null,a.a.createElement(ae,null,a.a.createElement(oe,null,e("amount"),":"),a.a.createElement(re,null,p)),a.a.createElement(ae,null,a.a.createElement(oe,null,e("source"),":"),a.a.createElement(re,null,h)),a.a.createElement(ae,null,a.a.createElement(oe,null,e("frequency"),":"),a.a.createElement(se,null,a.a.createElement(re,null,m),t.isSubscription&&a.a.createElement(le,null,e("transfer_description")))),a.a.createElement(ae,null,a.a.createElement(oe,null,e("date"),":"),a.a.createElement(re,null,f)),a.a.createElement(ae,null,a.a.createElement(oe,null,`${g}:`),a.a.createElement(re,null,b),t.selectedPaymentSource.isCreditCard()&&a.a.createElement("img",{src:te.a,id:"label-icon",alt:"info-bubble","data-tip":"info-bubble","data-background-color":o.darkBrown,"data-text-color":o.lightGreenBeige,"data-effect":"solid"}),a.a.createElement(Q.a,{className:"fee-tooltip"},e("review")))),a.a.createElement(ce,{CTA:"Complete Transfer",onClick:y,isLoading:t.depositPost.status.isPending()}),a.a.createElement(_.a,{goBack:r.goBack})))})),ne=o.e.div`
    font-family: ${e=>e.theme.body};
    margin-bottom: 24px;
    width: 100%;

    #label-icon {
        width: 15px;
        margin-left: 10px;
        cursor: pointer;
    }
    .fee-tooltip {
        box-shadow: -8px 8px 24px rgba(36, 46, 53, 0.16) !important;
        opacity: 1 !important;
        max-width: 260px !important;
        padding: 18px !important;
        border-radius: 10px !important;
        line-height: 18px !important;
    }

    font-size: 14px;
    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 16px;
  `}
`,ae=o.e.div`
    display: flex;
    align-items: center;
    min-height: 80px;
    padding: 25px 15px;
    border-top: 1px solid ${e=>e.theme.colors.borderGray};
    :last-child {
        border-bottom: 1px solid ${e=>e.theme.colors.borderGray};
    }
`,oe=o.e.div`
    font-family: ${e=>e.theme.fonts.label};
    text-transform: uppercase;
    color: ${e=>e.theme.colors.labelGray};
    width: 40%;
`,re=o.e.div`
    font-size: 15px;
    ${e=>e.theme.media.greaterThan("768px")`
    font-size: 18px;
  `}
`,se=o.e.div`
    max-width: 60%;
`,le=o.e.div`
    margin-top: 15px;
    line-height: 24px;
`,ce=Object(o.e)(k.a)`
    width: 100% !important;
`;var de=i(113),ue=i.n(de),pe=i(395),he=i.n(pe),me=i(396),fe=i.n(me),ge=i(43),be=i(216),ye=i.n(be),ve=i(397),we=i.n(ve),xe=i(87),ke=i.n(xe);var Ee=Object(y.a)((function({setAlert:e,isCreateACHAccountPending:t}){const{t:i}=Object(c.a)("deposit"),{deposit:o}=Object(u.f)(),r=Object(u.b)(),[s,l]=Object(n.useState)(!1),d=Object(n.useCallback)((()=>{let t=!1;const n=window.bitpay;window.addEventListener("message",(e=>{"paid"===e.data.status&&(t=!0,w.a.capture(Tt.CompletedBitpayPayment))}),!1),n.onModalWillEnter((()=>{l(!1),e({message:"",level:"warn"}),w.a.capture(Tt.BeginBitpayPayment)})),n.onModalWillLeave((()=>{!1===t?(e({message:i("bitpay_error"),level:"error"}),r("/deposit/select-source")):(ge.a.hide(),r("/"))})),o.bitpayInvoiceID&&n.showInvoice(o.bitpayInvoiceID),!o.bitpayInvoiceID&&e({message:i("bitpay_warning"),level:"warn"})}),[o.bitpayInvoiceID,r,e,i]),p=Object(n.useCallback)((async()=>{var t,i,n,a,r;l(!0),o.setPaymentSource({isBitpay:()=>!0,isACH:()=>!1}),await o.createBitpayInvoiceDeposit(),w.a.capture(Tt.SelectCryptocurrency),o.bitpayInvoiceID&&(null===(t=o.deposit)||void 0===t||null===(i=t.status)||void 0===i||!i.error)&&d(),(null===(n=o.deposit)||void 0===n||null===(a=n.status)||void 0===a||null===(r=a.error)||void 0===r?void 0:r.message)&&e({message:o.deposit.status.error.message,level:"error"})}),[o,d,e]);return a.a.createElement(a.a.Fragment,null,s?a.a.createElement(ye.a,{style:{padding:"28px",height:"100px"}}):a.a.createElement(z,{onClick:p,disabled:t||o.isSubscription},a.a.createElement("div",{className:"icon-wrapper"},a.a.createElement("img",{className:"payment-source-icon",alt:"source-icon",src:we.a})),a.a.createElement("span",null,i("crypto")),a.a.createElement("img",{className:"payment-right-arrow-icon",alt:"right-arrow",src:ke.a})))})),Oe=i(398),_e=i(211),Ce=i.n(_e);var Se=({label:e,iconSrc:t,...i})=>a.a.createElement(z,i,a.a.createElement("div",{className:"icon-wrapper"},a.a.createElement("img",{className:"payment-source-icon",alt:"source-icon",src:t})),a.a.createElement("span",null,e),a.a.createElement("img",{className:"payment-right-arrow-icon",alt:"right-arrow",src:ke.a})," ");const Ae=({plaidToken:e,setAlert:t})=>{const{deposit:i}=Object(u.f)(),o=Object(u.b)(),{t:r}=Object(c.a)(["deposit"]),s=Object(n.useCallback)((async(e,n)=>{await i.requestCreateV2ACHAccount(e,n);const a=i.ACHAccountCreate.status.error;a?t({message:a,level:"error"}):o("/deposit/review-transfer")}),[i,o,t]),{open:l,ready:d}=Object(Oe.usePlaidLink)({onSuccess:s,onEvent:async e=>{if("OPEN"===e){const e=setInterval((()=>{const t=document.getElementById("plaid-link-iframe-1");t&&(t.className+="sd-block",clearInterval(e))}),100)}},token:e});return a.a.createElement(a.a.Fragment,null,a.a.createElement(Se,{onClick:l,disabled:!d,iconSrc:Ce.a,label:r("connect_bank")}))};var je=Object(y.a)((({plaidToken:e,setAlert:t})=>{const{t:i}=Object(c.a)(["deposit"]),{deposit:o}=Object(u.f)(),r=Object(n.useMemo)((()=>o.plaidLinkFetch.status.isPending()),[o.plaidLinkFetch]);return Object(n.useEffect)((()=>{!o.plaidLinkToken&&!r&&o.requestPlaidLink()}),[o,r]),o.plaidLinkToken&&!r?a.a.createElement(Ae,{plaidToken:e,setAlert:t}):a.a.createElement(Se,{onClick:open,disabled:!0,iconSrc:Ce.a,label:i("connect_bank")})}));const Te=Object(y.a)((()=>{const{t:e}=Object(c.a)(["deposit"]),{deposit:t,user:i}=Object(u.f)(),[o,r]=Object(n.useState)({message:"",level:"warn"}),s=(Object(u.a)(),Object(X.a)()),l=Object(u.b)();Object(n.useEffect)((()=>{t.isSubscription&&r((t=>({...t,message:e("alert_message")})))}),[t.isSubscription,e]);const d=Object(n.useCallback)((()=>{l("/deposit/credit-card"),w.a.capture(Tt.SelectCreditCard)}),[l]),p=Object(n.useCallback)((()=>{l("/deposit/wire-transfer-type"),w.a.capture(Tt.SelectWire)}),[l]),h=Object(n.useMemo)((()=>t.ACHAccountCreate.status.isPending()),[t.ACHAccountCreate.status]);return a.a.createElement(_.e,{in:!0},a.a.createElement(N,null,o.message&&a.a.createElement(_.e,{in:!0},a.a.createElement(V,{role:"alert",level:o.level},o.message)),a.a.createElement(D,null,a.a.createElement(je,{plaidToken:t.plaidLinkToken,setAlert:r}),a.a.createElement(Se,{onClick:d,disabled:h,iconSrc:fe.a,label:e("credit_card")}),a.a.createElement(Ee,{isCreateACHAccountPending:h,setAlert:r}),a.a.createElement(Se,{onClick:p,disabled:t.isSubscription||h,iconSrc:he.a,label:e("bank_wire")}),h&&a.a.createElement(Pe,null,a.a.createElement(ue.a,{color:"#828282"}))),a.a.createElement(Ie,null,`${e("mail_check_deposit")} `,a.a.createElement(m.a,{to:`${f.a.deposit}/mail-a-check`,target:"_blank"},e("instructions"))),a.a.createElement(_.a,{goBack:s.goBack})))})),Pe=o.e.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: not-allowed;
`,Ie=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: normal;
    margin-top: 27px;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #242e35;

    a {
        color: #a86d37;
        text-decoration: none;
    }

    ${e=>e.theme.media.greaterThan("768px")`
        margin-top: 41px;
        font-size: 14px;
        line-height: 18px;
    `};
`;var Le=i(399),Ne=i.n(Le),Ve=i(400),De=i.n(Ve);const ze=Object(y.a)((()=>{const{t:e}=Object(c.a)(["deposit"]),t=Object(X.a)();return a.a.createElement(_.e,{in:!0},a.a.createElement(N,null,a.a.createElement(D,null,a.a.createElement(z,{onClick:()=>t.push(`${f.a.deposit}/domestic-wire-transfer`)},a.a.createElement("div",{className:"icon-wrapper"},a.a.createElement("img",{className:"payment-source-icon",alt:"source-icon",src:Ne.a})),a.a.createElement("span",null,e("us_bank_wire")),a.a.createElement("img",{className:"payment-right-arrow-icon",alt:"right-arrow",src:ke.a})),a.a.createElement(z,{onClick:()=>t.push(`${f.a.deposit}/international-wire-transfer`)},a.a.createElement("div",{className:"icon-wrapper"},a.a.createElement("img",{className:"payment-source-icon",alt:"source-icon",src:De.a})),a.a.createElement("span",null,e("international_bank_wire")),a.a.createElement("img",{className:"payment-right-arrow-icon",alt:"right-arrow",src:ke.a}))),a.a.createElement(_.a,{goBack:t.goBack})))}));var Be=i(149);const Re={iconStyle:"solid",style:{base:{iconColor:"#A86D37",color:"#242E35",fontWeight:"500",fontFamily:"VinovestMono, Roboto, Open Sans, Segoe UI, sans-serif",fontSize:"16px",textTransform:"uppercase",fontSmoothing:"antialiased",":-webkit-autofill":{color:"#767A7F"},"::placeholder":{color:"#767A7F"}},complete:{iconColor:"#27AE60",color:"#27AE60"},invalid:{iconColor:"#FF4D00",color:"#FF4D00"}}},Fe=Object(y.a)((()=>{const{t:e}=Object(c.a)("deposit"),t=Object(X.a)(),i=Object(s.useStripe)(),o=Object(s.useElements)(),r=Object(u.b)(),{deposit:l}=Object(u.f)(),[d,p]=Object(n.useState)(!1),[h,m]=Object(n.useState)(""),[f,g]=Object(n.useState)(null),[b,y]=Object(n.useState)(!1),[v,x]=Object(n.useState)(!1),[E,O]=Object(n.useState)(null),C=Object(n.useCallback)((t=>{const i=t.target.value.replace(/[^a-z ]/gi,""),n=i.length>=2&&i.length<=26,a=i.length>26;m(i),a&&O(e("cc_name_length")),n&&x(!0),n&&O(null)}),[e]),S=Object(n.useCallback)((async()=>{p(!0);const e=o.getElement(s.CardElement);let t;const{paymentMethod:n,error:a}=await i.createPaymentMethod({card:e,billing_details:{name:h},type:"card"});if(t=a,!t&&l.isSubscription){t=(await l.requestAndConfirmStripeSetupIntent(i,n)).error}if(p(!1),t)return void g(t);const c=T.build(Object(Be.b)(n));l.setPaymentSource(c),r("/deposit/review-transfer"),w.a.capture(Tt.CreditCardLinked)}),[h,o,l,i,r]),A=Object(n.useMemo)((()=>b&&v),[b,v]),j=Object(n.useCallback)((e=>{13===e.keyCode&&A&&S()}),[A,S]);return a.a.createElement(_.e,{in:!0},a.a.createElement(N,null,a.a.createElement(Me,null,a.a.createElement(qe,{className:"sb-block",isComplete:b},a.a.createElement(s.CardElement,{options:Re,onChange:e=>{g(e.error),y(e.complete)}})),f&&a.a.createElement(V,{position:"unset",paddingBottom:"15px",role:"alert",level:"error"},f.message),a.a.createElement(qe,{isComplete:v,nameError:E},a.a.createElement("input",{id:"cc-name-row",autoComplete:"name",value:h,onKeyDown:j,onChange:C,placeholder:e("cc_name_placeholder"),minLength:2,maxLength:27,onBlur:t=>(t=>{const{value:i}=t.target;i.length<2&&O(e("cc_name_length_min")),26===h.length&&E&&O(null)})(t)})),E&&a.a.createElement(V,{role:"alert",level:"error"},E)),a.a.createElement(L,null,a.a.createElement(I,{onClick:t.goBack},e("back")),a.a.createElement(k.a,{CTA:e("next"),isLoading:d,disabled:!A,onClick:S}))))})),Me=o.e.div`
    width: 100%;
    position: relative;
    margin-top: 32px;
    display: "flex";
    flex-direction: "column";
`,qe=o.e.div`
    margin: 0 0 20px;
    padding: 0;
    border: 1px solid
        ${e=>e.nameError?e.theme.colors.red:e.isComplete?e.theme.colors.green:e.theme.colors.borderGray};

    will-change: opacity, transform;
    box-shadow: ${e=>e.theme.shadow.v2};
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 15px;

    .StripeElement,
    #cc-name-row {
        width: 100%;
    }

    #cc-name-error {
        position: absolute;
        font-family: ${e=>e.theme.fonts.label};
        color: ${e=>e.theme.colors.red};
        text-transform: uppercase;
        top: 90px;
        left: 0;

        font-size: 12px;
        ${e=>e.theme.media.greaterThan("768px")`
            font-size: 14px;
        `}
    }

    #cc-name-row,
    .InputElement {
        font-family: Roboto, Open Sans, Segoe UI, sans-serif;
        text-transform: uppercase;
        color: ${e=>e.nameError?e.theme.colors.red:e.isComplete?e.theme.colors.green:e.theme.colors.mainAccentBlue};
        font-size: 16px;
        outline: none;
        ::placeholder {
            font-family: Roboto, Open Sans, Segoe UI, sans-serif;
            color: ${e=>e.theme.colors.labelGray};
            font-size: 16px;
            font-weight: 500;
        }
        background: none;
        border: 0;
    }
`;var We=i(2),He=i(102);const Ue=({data:e})=>a.a.createElement(Ye,null,e.map((({title:e,value:t,isReference:i})=>a.a.createElement(a.a.Fragment,{key:e},a.a.createElement(Je,null,e),a.a.createElement($e,null,i?a.a.createElement(Ke,null,t):t.map((e=>a.a.createElement(a.a.Fragment,{key:e},e,a.a.createElement("br",null))))))))),Ye=o.e.div`
    display: grid;
    grid-template-columns: 42fr 58fr;
    gap: 0px 0px;
    grid-template-areas: ". .";
    margin: 0 auto;

    ${e=>e.theme.media.greaterThan("768px")`
        max-width: 666px;
        grid-template-columns: 1fr 1fr;
    `}
`,Ge=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #5b646b;
    border-bottom: 1px solid #caccce;
    padding: 19px 0;
    height: 100%;
    display: flex;
    align-items: center;

    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 16px;
        line-height: 26px;
    `}
`,Je=Object(o.e)(Ge)`
    padding-right: 16px;
`,$e=Object(o.e)(Ge)`
    color: #242e35;
    font-size: 16px;
    line-height: 26px;

    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 20px;
        line-height: 36px;
    `}
`,Ke=o.e.div`
    background: #fae8d1;
    padding: 0 14px 0 7px;
`;var Ze=i(401),Qe=i.n(Ze),Xe=i(112),et=i.n(Xe);const tt=Object(y.a)((({data:e,description:t,tip:i,printPathChunk:n})=>{const{t:o}=Object(c.a)(["deposit"]),r=Object(u.f)(),s=Object(X.a)(),{data:l}=r.deposit.referenceKeyFetch,d=Object(u.b)(),p=Object(We.f)(r.deposit.referenceKeyFetch).isPending(),h=Object(We.f)(r.deposit.referenceKeyFetch).isDone(),m=a.a.useCallback((()=>{ge.a.hide(),r.transfer.setTransferInProgress(!0),w.a.capture("viewed_wire_transfer_instructions",{}),d("/")}),[d,r.transfer]),g=a.a.useMemo((()=>[...e,{title:a.a.createElement(a.a.Fragment,null,o("wire_transfer.field")," ",a.a.createElement(M,null,a.a.createElement(He.a,{text:i},a.a.createElement("img",{src:et.a,alt:"info"})))),value:l,isReference:!0}]),[e,i,l]);return a.a.createElement(B,null,!p&&h||h?a.a.createElement(a.a.Fragment,null,a.a.createElement(it,null,t),a.a.createElement(Ue,{data:g}),a.a.createElement(nt,{href:`${window.location.origin}${f.a.print}/${n}`,target:"_blank"},a.a.createElement("img",{src:Qe.a,alt:"png"})," ",o("wire_transfer.download")),a.a.createElement(F,{onClick:m},o("wire_transfer.button_done"))):a.a.createElement(_.b,null),a.a.createElement(_.a,{goBack:s.goBack}))})),it=Object(o.e)(R)`
    min-height: 98px;
    margin-bottom: 58px;

    ${e=>e.theme.media.greaterThan("768px")`
        margin-bottom: 71px;
    `}
`,nt=o.e.a`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #a86d37;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 44px auto 0;
    border: 0;
    outline: 0;
    background: transparent;
    transition: 0.3s;
    text-decoration: none;

    img {
        margin-right: 16px;
        display: block;
        width: 20px;
        height: 23px;
    }

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }

    ${e=>e.theme.media.greaterThan("768px")`
        margin-top: 60px;
    `}
`;var at=i(294);const ot=()=>{const{t:e}=Object(c.a)(["deposit"]);return a.a.createElement(tt,{printPathChunk:"domestic-wire-transfer",data:Object(at.a)(e),tip:e("domestic_wire_tip"),description:e("domestic_wire_description")})};var rt=i(295);const st=()=>{const{t:e}=Object(c.a)(["deposit"]);return a.a.createElement(tt,{printPathChunk:"international-wire-transfer",data:Object(rt.a)(e),tip:e("intl_tip"),description:e("intl_description")})};var lt=i(402),ct=i.n(lt),dt=i(403),ut=i.n(dt);const pt=()=>{const{t:e}=Object(c.a)(["deposit"]),t=Object(X.a)(),i=(e=>[{title:e("pay_order"),value:[e("vinovest")]},{title:e("memo"),value:[e("memo_value")]},{title:e("mail_to"),value:[e("vinovest_address.name"),e("vinovest_address.street"),e("vinovest_address.city_state")]},{title:a.a.createElement(M,null,e("amount")," ",a.a.createElement(He.a,{text:e("portfolio_tooltip")},a.a.createElement("img",{src:et.a,alt:e("info")}))),value:[e("minimum_check_limit_reminder")]}])(e);return a.a.createElement(B,null,a.a.createElement(R,null,e("check_instructions")),a.a.createElement(_.e,{in:!0},a.a.createElement(ht,null,a.a.createElement("img",{className:"mailCheckExampleImg",src:ct.a,alt:e("mail_check_example")}),a.a.createElement(ft,null,a.a.createElement("svg",{className:"arrowTimImgHorizontal",width:"117",height:"8",viewBox:"0 0 117 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M0.646446 3.64646C0.451187 3.84172 0.451187 4.1583 0.646446 4.35356L3.82843 7.53554C4.02369 7.73081 4.34027 7.73081 4.53554 7.53554C4.7308 7.34028 4.7308 7.0237 4.53554 6.82844L1.70711 4.00001L4.53554 1.17158C4.7308 0.976321 4.7308 0.659738 4.53554 0.464476C4.34027 0.269214 4.02369 0.269214 3.82843 0.464476L0.646446 3.64646ZM117 3.5L1 3.50001L1 4.50001L117 4.5L117 3.5Z",fill:"#5B646B"})),e("average_deposit")," ",a.a.createElement(M,null,a.a.createElement(He.a,{text:e("portfolio_tooltip"),toRight:!0},a.a.createElement("img",{src:et.a,alt:e("info")})))),a.a.createElement(mt,null,a.a.createElement("img",{src:ut.a,alt:e("arrow")}),a.a.createElement("span",null,e("average_deposit")," ",a.a.createElement(M,null,a.a.createElement(He.a,{text:e("portfolio_tooltip"),toRight:!0},a.a.createElement("img",{src:et.a,alt:"info"}))))))),a.a.createElement(Ue,{data:i}),a.a.createElement(gt,{maxWidth:"456px"},e("wire_description")," ",a.a.createElement("a",{href:"mailto:support@vinovest.co"},e("wire_mail_link"))," ",e("wire_description_contd")),a.a.createElement(F,{onClick:()=>{t.push("/")}},e("done")))},ht=o.e.div`
    max-width: 883px;
    margin: 58px auto 16px;
    position: relative;

    .mailCheckExampleImg {
        width: 100%;
    }

    ${e=>e.theme.media.greaterThan("768px")`
        max-width: 666px;
        grid-template-columns: 1fr 1fr;
        margin: 37px auto;
    `}
`,mt=o.e.div`
    position: absolute;
    right: 23.5%;
    top: -4%;
    display: flex;
    align-items: center;
    width: 2.5%;

    img {
        width: 100%;
    }

    span {
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.005em;
        color: #5b646b;
        font-size: 11px;
        line-height: 21px;
        white-space: nowrap;
        position: absolute;
        top: -30px;
        left: 0;
        transform: translateX(-50%);
    }

    ${e=>e.theme.media.greaterThan("1140px")`
        display: none;
    `}
`,ft=o.e.div`
    display: none;
    position: absolute;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.005em;
    color: #5b646b;

    .arrowTimImgHorizontal {
        margin-right: 16px;
    }

    ${e=>e.theme.media.greaterThan("1140px")`
        display: flex;
        align-items: center;
        transform: translate(100%, -50%);
        font-size: 14px;
        line-height: 21px;
        top: 35.38%;
        right: 14%;

        .arrowTimImgHorizontal {
            display: inline;
        }
    `}
`,gt=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.005em;
    color: #242e35;
    font-size: 16px;
    line-height: 26px;
    max-width: 456px;
    margin: 37px auto 0;
    text-align: center;

    a {
        margin-top: 21px;
        color: #a86d37;
        text-decoration: none;
    }
`;var bt=i(296),yt=i.n(bt);const vt=Object(y.a)((()=>{const{t:e}=Object(c.a)(["deposit","common"]),{deposit:t,transfer:i}=Object(u.f)(),o=Object(u.b)();Object(n.useEffect)((()=>{t.depositPost.status.isSuccess()&&t.trackDeposit()}),[t.depositPost.status,t]);const r=Object(n.useMemo)((()=>[e("transfer_message_line1",{currencySymbol:e("common:currencySymbol"),amount:Object(C.l)(t.depositAmtPlusFeesInCents/100)}),e("transfer_message_line2",{minDay:3,maxDay:5}),e("transfer_message_line3")]),[t.depositAmtPlusFeesInCents]),s=Object(n.useCallback)((()=>{i.shouldShowAccountSubscription&&"month"===t.selectedDepositFrequency&&i.fetchShouldShowAccountSubscriptionEntity(),ge.a.hide(),t.setDepositAmt(0),t.setDepositFrequencyKey(),i.setTransferInProgress(!0),w.a.capture("deposit_initiated",{}),o("/")}),[o,t,i]);return a.a.createElement(_.e,{in:!0},a.a.createElement(N,null,a.a.createElement(wt,{src:yt.a}),a.a.createElement(xt,null,r.map((e=>a.a.createElement("p",{key:e.slice(4)},e)))),a.a.createElement(kt,null,a.a.createElement(k.a,{CTA:"Done",onClick:s}))))})),wt=o.e.img`
    margin-bottom: 20px;
`,xt=o.e.div`
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 20px;
`,kt=o.e.div`
    width: 100%;
    max-width: 400px;
`;var Et=i(156),Ot=i.n(Et);const _t=Object(y.a)((()=>{const{t:e}=Object(c.a)(["deposit"]),{deposit:t}=Object(u.f)(),i=Object(u.b)(),o=Object(n.useMemo)((()=>[t.depositPost.status.error,e("failed_line1"),e("failed_line2")]),[t.depositPost.status.error,e]),r=Object(n.useCallback)((()=>{i("/deposit/add-funds",Tt.AddFundsRetry)}),[i]);return a.a.createElement(_.e,{in:!0},a.a.createElement(N,null,a.a.createElement(Ct,{src:Ot.a}),a.a.createElement(St,null,b.a.compact(o).map((e=>a.a.createElement("p",{key:e.slice(4)},e)))),a.a.createElement(At,null,a.a.createElement(k.a,{CTA:e("retry"),onClick:r}))))})),Ct=o.e.img`
    margin-bottom: 20px;
`,St=o.e.div`
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 20px;
`,At=o.e.div`
    width: 100%;
    max-width: 400px;
`,jt=Object(n.memo)((()=>a.a.createElement(m.d,null,a.a.createElement(r.b,{path:`${f.a.deposit}/add-funds`,component:Y}),a.a.createElement(r.b,{path:`${f.a.deposit}/select-source`,component:Te}),a.a.createElement(r.b,{path:`${f.a.deposit}/credit-card`,component:Fe}),a.a.createElement(r.b,{path:`${f.a.deposit}/wire-transfer-type`,component:ze}),a.a.createElement(r.b,{path:`${f.a.deposit}/domestic-wire-transfer`,component:ot}),a.a.createElement(r.b,{path:`${f.a.deposit}/international-wire-transfer`,component:st}),a.a.createElement(r.b,{path:`${f.a.deposit}/mail-a-check`,component:pt}),a.a.createElement(r.b,{path:`${f.a.deposit}/review-transfer`,component:ie}),a.a.createElement(r.b,{path:`${f.a.deposit}/confirmation`,component:vt}),a.a.createElement(r.b,{path:`${f.a.deposit}/failed`,component:_t}),a.a.createElement(r.a,{exact:!0,from:"/deposit",to:`${f.a.deposit}/add-funds`}),a.a.createElement(r.a,{to:"/not-found"}))));let Tt;!function(e){e.ClickExistingPayment="click_exisiting_payment",e.ClickNewPayment="click_new_payment",e.SelectCryptocurrency="select_cryptocurrency",e.BeginBitpayPayment="begin_bitpay_payment",e.CompletedBitpayPayment="completed_bitpay_payment",e.LinkCryptoWallet="link_crypto_wallet",e.SelectCreditCard="select_credit_card",e.CreditCardLinked="credit_card_linked",e.SelectBank="select_bank",e.BankLinked="bank_linked",e.SelectWire="select_wire",e.DownloadWirePdf="download_wire_pdf",e.AddFunds="add_funds",e.SelectFrequency="select_frequency",e.DepositAmountAdded="depsoit_amount_added",e.AddFundsRetry="add_funds_retry"}(Tt||(Tt={}));const Pt={fonts:[{family:"VinovestMono",src:`url(${h.a})`,weight:"400"}]},It=()=>{const{pathname:e}=Object(r.h)();return Object(n.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},Lt=Object(n.memo)((()=>{const{t:e}=Object(c.a)(["deposit"]),t=Object(u.f)(),{deposit:i,auth:o,tracking:d}=t,{pathname:p}=Object(r.h)(),h=Object(u.a)(),m={"add-funds":e("add_funds"),"select-source":e("select_source"),"credit-card":e("credit_card"),"domestic-wire-transfer":e("domestic_wire_transfer"),"wire-transfer-type":e("wire_transfer_type"),"international-wire-transfer":e("international_wire_transfer"),"mail-a-check":e("mail_check"),"review-transfer":e("review_transfer"),confirmation:e("confirmation"),failed:e("failed")},f=Object(n.useMemo)((()=>p.split("/")[2]),[p]),g=Object(n.useMemo)((()=>m[f]),[f,m]),b=Object(n.useMemo)((()=>Object(l.a)(h.stripeKey)),[h]);return Object(n.useEffect)((()=>{t.user.oktaUserInfo.sub&&d.gtm&&(d.gtm.trackDepositStarted(),d.gtm.trackDepositStartedSecondPixel(t))}),[d.gtm,t.user.oktaUserInfo.sub,t]),Object(n.useEffect)((()=>{o.isAuthenticated&&i.fetchSavedBankAccountsAndCreditCards()}),[o.isAuthenticated,i]),a.a.createElement(Nt,null,a.a.createElement(It,null),a.a.createElement(Vt,{as:"h1"},g),a.a.createElement(s.Elements,{stripe:b,options:Pt},a.a.createElement(jt,null)))}));t.b=Lt;const Nt=o.e.div`
    width: 100%;
    max-width: 900px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${e=>e.theme.colors.mainAccentBlue};

    padding: 24px 12px;
    ${e=>e.theme.media.greaterThan("768px")`
    min-height: 80vh;
    padding: 108px 0;
  `}
`,Vt=Object(o.e)(d.a)`
    text-align: center;
    margin-top: 0;
    font-weight: 500;
`},13:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"d",(function(){return o})),i.d(t,"e",(function(){return r})),i.d(t,"b",(function(){return s})),i.d(t,"g",(function(){return l})),i.d(t,"c",(function(){return d})),i.d(t,"f",(function(){return u})),i.d(t,"h",(function(){return p}));var n=i(10);const a={KEY:"authenticationType",SIGNUP:"SIGNUP",LOGIN:"LOGIN"},o={KEY:"googleAuthenticationType"},r={KEY:"secureRouterReferrerPath"},s={CreditCard:n.a.t("common:utils.constants.credit_card"),BankTransfer:n.a.t("common:utils.constants.bank_transfer")},l={CONSERVATIVE:n.a.t("common:utils.constants.conservative"),MODERATE:n.a.t("common:utils.constants.moderate"),AGGRESSIVE:n.a.t("common:utils.constants.aggressive")},c={domain:".vinovest.co",path:"/"},d={KEY:"emailcapture",CONFIG:{...c}},u={KEY:"referralinvite",CONFIG:{...c}},p=(n.a.t("common:utils.constants.funds_added"),n.a.t("common:utils.constants.funds_withdrew"),n.a.t("common:utils.constants.transfer_in"),n.a.t("common:utils.constants.transfer_out"),n.a.t("common:utils.constants.trade_settlement_sell"),n.a.t("common:utils.constants.trade_settlement_purchase"),n.a.t("common:utils.constants.wine_purchase"),n.a.t("common:utils.constants.wine_sold"),n.a.t("common:utils.constants.vinovest_monthly_fee"),n.a.t("common:utils.constants.rebalance_add"),n.a.t("common:utils.constants.pending_deposit"),{sourcing_wine:"sourcing_wine",wine_purchase:"wine_purchase",funds_added:"funds_added",pending_deposit:"pending_deposit",vinovest_monthly_fee:"vinovest_monthly_fee",wine_sold:"wine_sold",funds_withdrew:"funds_withdrew",trade_settlement_purchase:"trade_settlement_purchase",transfer_in:"transfer_in",early_withdrawl_60_day:"early_withdrawl_60_day",rebalance_add:"rebalance_add",vinovest_monthly_fee_waived:"vinovest_monthly_fee_waived",wine_shipped:"wine_shipped"})},144:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i(0);const a=i.n(n).a.createContext({}),o=a.Provider;t.b=()=>{const e=Object(n.useContext)(a);if(void 0===e)throw new Error("useConfig must be used within a ConfigProvider");return e}},149:function(e,t,i){"use strict";i.d(t,"b",(function(){return j})),i.d(t,"a",(function(){return P}));var n,a,o,r,s,l,c,d,u,p,h,m,f,g=i(3),b=i(83),y=i.n(b),v=i(6),w=i.n(v),x=i(669),k=i(13),E=i(2),O=i(150),_=i(109);function C(e,t,i,n){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}function S(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function A(e,t,i,n,a){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=i.slice().reverse().reduce((function(i,n){return n(e,t,i)||i}),o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}const j=e=>{const t=!w.a.isNil(e.card);return{type:t?k.b.CreditCard:k.b.BankTransfer,id:w.a.get(e,"id"),name:t?w.a.get(e,"card.brand","").toUpperCase():w.a.get(e,"achDebit.name","").toUpperCase(),L4:t?w.a.get(e,"card.last4"):w.a.get(e,"achDebit.last4")}},T=e=>({type:k.b.BankTransfer,id:w.a.get(e,"id"),name:w.a.get(e,"bank.name"),L4:w.a.get(e,"bank.lastFour")});let P=(a=A((n=class e{static build(t,i){return new e(t,i)}constructor(e,t){C(this,"depositAmt",a,this),C(this,"selectedPaymentSource",o,this),C(this,"selectedFrequencyKey",r,this),C(this,"userSelectedFrequency",s,this),C(this,"depositStartDate",l,this),C(this,"referenceKeyFetch",c,this),C(this,"depositPost",d,this),C(this,"savedPaymentMethodsFetch",u,this),C(this,"plaidLinkFetch",p,this),C(this,"ACHAccountCreate",h,this),C(this,"bitpayInvoice",m,this),C(this,"reocurringBitpay",f,this),S(this,"oneTimeMinDepositAmount",1e3),S(this,"recurringMinDepositAmount",500),S(this,"depositFrequencyOptions",{"one time":"once",weekly:"week","monthly (Most Popular)":"month"}),S(this,"fetchReferenceKey",Object(g.e)((function*(){this.referenceKeyFetch={data:"",status:Object(E.g)(E.a.READ_OP)};const{accessToken:e}=this.root.auth,t=yield this.api.getReferenceKey(e);if(!t.ok)return void(this.referenceKeyFetch={data:"",status:Object(E.d)("Reference key could not be fetched")});const i=yield t.json();this.referenceKeyFetch={data:i.key,status:Object(E.b)()}}))),S(this,"fetchSavedBankAccountsAndCreditCards",Object(g.e)((function*(){const{accessToken:e}=this.root.auth;this.savedPaymentMethodsFetch={data:void 0,status:Object(E.g)(E.a.READ_OP)};const t=yield this.api.getSavedPaymentMethodsAndSources(e);if(!t.ok)return void(this.savedPaymentMethodsFetch={data:void 0,status:Object(E.d)()});const i=yield t.json();this.savedPaymentMethodsFetch={data:i,status:Object(E.b)()}}))),S(this,"requestAndConfirmStripeSetupIntent",Object(g.e)((function*(e,t){const{accessToken:i}=this.root.auth,n=yield this.api.getStripeSetupIntentToken(i);if(!n.ok)return{error:{message:"Unable to fetch Setup Intent token"}};const{ClientSecret:a}=yield n.json(),{error:o}=yield e.confirmCardSetup(a,{payment_method:t.id});return{error:o}}))),S(this,"requestPlaidLink",Object(g.e)((function*(){var e;const{accessToken:t}=this.root.auth;this.plaidLinkFetch={status:Object(E.g)()};const i=yield this.api.getPlaidLink(t,null===(e=this.root)||void 0===e?void 0:e.user.profileId),n=yield i.json();i.ok?this.plaidLinkFetch={status:Object(E.b)(),data:{...n}}:this.plaidLinkFetch={data:void 0,status:Object(E.d)()}}))),S(this,"requestCreateV2ACHAccount",Object(g.e)((function*(e,t){this.ACHAccountCreate={status:Object(E.g)()};const{accessToken:i}=this.root.auth,n=yield this.api.createV2ACHAccount(i,e,t);if(this.ACHAccountCreate={status:n.ok?Object(E.b)():Object(E.d)("\n            We were unable to link your account. Please review your info or try another payment method\n        ")},n.ok){const e=yield n.json();this.setPaymentSource(O.a.build(T({id:e.accountID,bank:e})))}return n}))),S(this,"_requestCreateV2TransferWithInterval",Object(g.e)((function*(){const{accessToken:e}=this.root.auth,t=w.a.get(this.selectedPaymentSource,"data.id"),i={amount:this.depositAmtPlusFeesInCents,interval:this.selectedDepositFrequency,startDate:this.depositStartDate.toISOString()};return yield this.api.createV2TransferWithInterval(e,t,i)}))),S(this,"_requestOneTimeStripeTransferWithPaymentIntent",Object(g.e)((function*(e){const{accessToken:t}=this.root.auth,{depositAmtPlusFeesInCents:i}=this,n={ok:!1},a=yield this.api.createStripePaymentIntent(t,i/100);if(!a.ok)return n.json=()=>Promise.resolve({message:"Couldn't verify payment amount. Please try again later"}),n;const o=yield a.json(),r=this.selectedPaymentSource,s=yield e.confirmCardPayment(o,{payment_method:r.data.id});return s.error?(n.json=()=>Promise.resolve(s.error),n):(n.ok=!0,n)}))),S(this,"requestCreateDeposit",Object(g.e)((function*(e){this.depositPost={...this.depositPost,status:Object(E.g)()};let t={};if(t=this.selectedPaymentSource.isACH()||this.isSubscription?yield this._requestCreateV2TransferWithInterval():yield this._requestOneTimeStripeTransferWithPaymentIntent(e),t.ok)this.depositPost={...this.depositPost,status:Object(E.b)()};else{const e=yield t.json(),i="card_declined"===e.code?" Please reach out to customer service or your card issuer to find out about next steps.":"";this.depositPost={...this.depositPost,status:Object(E.d)(`${e.message}${i}`)}}}))),S(this,"_requestBitpayInvoice",Object(g.e)((function*(){const{profileId:e}=this.root.user,{accessToken:t}=this.root.auth,{api:i,depositAmtPlusBitpayFees:n}=this,{getBitpayInvoice:a}=i,o={profileId:e,depositAmtInCents:n,jwt:t},r=yield a(o);if(null===r||void 0===r||!r.ok){const e=yield r.json();return void(this.depositPost={...this.depositPost,status:Object(E.d)(e)})}return yield r.json()}))),S(this,"createBitpayInvoiceDeposit",Object(g.e)((function*(){this.depositPost={...this.depositPost,status:Object(E.g)()};const e=yield this._requestBitpayInvoice();e&&(this.setBitpayInvoice(e.invoiceID),this.depositPost={...this.depositPost,status:Object(E.b)()})}))),this.root=e,this.api=t}get normalizedSavedPaymentMethods(){if(w.a.isEmpty(this.savedPaymentMethodsFetch.data))return[];const{paymentSources:e=[],paymentMethods:t=[]}=this.savedPaymentMethodsFetch.data;return[...e.map(T),...t.map(j)]}get depositAmtInCents(){return 100*this.depositAmt}get depositAmtPlusBitpayFees(){const{depositAmtInCents:e}=this;return Math.ceil(e/.99)}get deposit(){return Object(g.k)(this.depositPost)}get depositAmtPlusFeesInCents(){const{depositAmtInCents:e,selectedPaymentSource:t}=this;let i=e;t.isCreditCard()&&(i=i/.971+30);return Math.round(i)}get selectedDepositFrequency(){return this.depositFrequencyOptions[this.selectedFrequencyKey]||"once"}get isSubscription(){return!!this.selectedFrequencyKey&&"one time"!==this.selectedFrequencyKey}get bitpayInvoiceID(){return Object(g.k)(this.bitpayInvoice)}get plaidLinkToken(){var e;return null===(e=Object(E.e)(this.plaidLinkFetch))||void 0===e?void 0:e.token}setPlaidLink(e){this.plaidLink=e}setDepositAmt(e){this.depositAmt=e}setBitpayInvoice(e){this.bitpayInvoice=e}setPaymentSource(e){this.selectedPaymentSource=e}setDepositFrequencyKey(e){this.selectedFrequencyKey=e}setUserSelectedFrequency(){this.userSelectedFrequency=!0}resetState(){this.depositAmt=5e3,this.depositPost=Object(E.c)(),this.savedPaymentMethodsFetch=Object(E.c)(),this.referenceKeyFetch=Object(E.c)(),this.ACHAccountCreate=Object(E.c)()}trackDeposit(){const e={id:Object(x.a)(),currency:"USD",method:this.selectedPaymentSource.type,value:this.depositAmt,frequency:this.selectedDepositFrequency};this.root.tracking.gtm.trackDepositAdded(e),this.root.tracking.gtm.trackFundAccountPurchase(this.root,e.value)}}).prototype,"depositAmt",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5e3}}),o=A(n.prototype,"selectedPaymentSource",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new _.a}}),r=A(n.prototype,"selectedFrequencyKey",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),s=A(n.prototype,"userSelectedFrequency",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=A(n.prototype,"depositStartDate",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return y()().endOf("day")}}),c=A(n.prototype,"referenceKeyFetch",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(E.c)()}}),d=A(n.prototype,"depositPost",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(E.c)()}}),u=A(n.prototype,"savedPaymentMethodsFetch",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(E.c)()}}),p=A(n.prototype,"plaidLinkFetch",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(E.c)()}}),h=A(n.prototype,"ACHAccountCreate",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(E.c)()}}),m=A(n.prototype,"bitpayInvoice",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(E.c)()}}),f=A(n.prototype,"reocurringBitpay",[g.g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Object(E.c)()}}),A(n.prototype,"normalizedSavedPaymentMethods",[g.c],Object.getOwnPropertyDescriptor(n.prototype,"normalizedSavedPaymentMethods"),n.prototype),A(n.prototype,"depositAmtInCents",[g.c],Object.getOwnPropertyDescriptor(n.prototype,"depositAmtInCents"),n.prototype),A(n.prototype,"depositAmtPlusBitpayFees",[g.c],Object.getOwnPropertyDescriptor(n.prototype,"depositAmtPlusBitpayFees"),n.prototype),A(n.prototype,"deposit",[g.c],Object.getOwnPropertyDescriptor(n.prototype,"deposit"),n.prototype),A(n.prototype,"depositAmtPlusFeesInCents",[g.c],Object.getOwnPropertyDescriptor(n.prototype,"depositAmtPlusFeesInCents"),n.prototype),A(n.prototype,"selectedDepositFrequency",[g.c],Object.getOwnPropertyDescriptor(n.prototype,"selectedDepositFrequency"),n.prototype),A(n.prototype,"isSubscription",[g.c],Object.getOwnPropertyDescriptor(n.prototype,"isSubscription"),n.prototype),A(n.prototype,"bitpayInvoiceID",[g.c],Object.getOwnPropertyDescriptor(n.prototype,"bitpayInvoiceID"),n.prototype),A(n.prototype,"plaidLinkToken",[g.c],Object.getOwnPropertyDescriptor(n.prototype,"plaidLinkToken"),n.prototype),A(n.prototype,"setPlaidLink",[g.b],Object.getOwnPropertyDescriptor(n.prototype,"setPlaidLink"),n.prototype),A(n.prototype,"setDepositAmt",[g.b],Object.getOwnPropertyDescriptor(n.prototype,"setDepositAmt"),n.prototype),A(n.prototype,"setBitpayInvoice",[g.b],Object.getOwnPropertyDescriptor(n.prototype,"setBitpayInvoice"),n.prototype),A(n.prototype,"setPaymentSource",[g.b],Object.getOwnPropertyDescriptor(n.prototype,"setPaymentSource"),n.prototype),A(n.prototype,"setDepositFrequencyKey",[g.b],Object.getOwnPropertyDescriptor(n.prototype,"setDepositFrequencyKey"),n.prototype),A(n.prototype,"setUserSelectedFrequency",[g.b],Object.getOwnPropertyDescriptor(n.prototype,"setUserSelectedFrequency"),n.prototype),A(n.prototype,"resetState",[g.b],Object.getOwnPropertyDescriptor(n.prototype,"resetState"),n.prototype),n)},150:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i(13),a=i(109);class o extends a.a{static build(e){return new o(e)}constructor(e){super(),this.type=n.b.BankTransfer,this.data=e}isCreditCard(){return!1}isACH(){return!0}}},155:function(e,t,i){e.exports=i.p+"static/media/check.95d501d6.svg"},156:function(e,t,i){e.exports=i.p+"static/media/unplugged.ab022ffc.svg"},2:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"g",(function(){return l})),i.d(t,"d",(function(){return c})),i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return u})),i.d(t,"e",(function(){return p})),i.d(t,"f",(function(){return h}));var n=i(6),a=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const r={CREATE_OP:"CREATE",DELETE_OP:"DELETE",READ_OP:"READ",UPDATE_OP:"UPDATE"};class s{constructor({error:e,isInvalidated:t,pendingOperation:i}={}){o(this,"error",void 0),o(this,"isInvalidated",!0),o(this,"pendingOperation",void 0),this.error=a.a.isNil(e)?this.error:e,this.isInvalidated=a.a.isNil(t)?this.isInvalidated:t,this.pendingOperation=a.a.isNil(i)?this.pendingOperation:i}set(e,t){this[e]=t}isPending(){return!a.a.isNil(this.pendingOperation)}isFailed(){return!a.a.isNil(this.error)}isDone(){return!this.isPending()&&!this.isInvalidated}isFetching(){return this.isPending()&&this.pendingOperation===r.READ_OP}isSuccess(){return!this.isFailed()&&this.isDone()}}const l=(e=!0)=>new s({isInvalidated:!1,pendingOperation:e}),c=(e="SET ERROR MESSAGE")=>new s({isInvalidated:!1,error:e}),d=()=>new s({isInvalidated:!1}),u=e=>({data:e,status:new s}),p=e=>e.data,h=e=>e.status},20:function(e,t,i){"use strict";i.d(t,"n",(function(){return c})),i.d(t,"m",(function(){return d})),i.d(t,"l",(function(){return u})),i.d(t,"e",(function(){return p})),i.d(t,"c",(function(){return h})),i.d(t,"a",(function(){return m})),i.d(t,"d",(function(){return f})),i.d(t,"j",(function(){return g})),i.d(t,"f",(function(){return b})),i.d(t,"h",(function(){return y})),i.d(t,"k",(function(){return v})),i.d(t,"i",(function(){return w})),i.d(t,"g",(function(){return x})),i.d(t,"b",(function(){return k}));var n=i(121),a=i(363),o=i(10),r=i(25),s=i(72);const l={xDays:"{{count}}D",xMonths:"{{count}}M",xYears:"{{count}}Y"},c={formatDistance:(e,t)=>l[e].replace("{{count}}",t)},d=e=>{window.open(e,"_blank").focus()},u=(e,t)=>e.toFixed(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),p=e=>/^(\w+[\w+.-]*)@(\w+([.-\w]*)\.\w{2,})$/.test(e),h=(e,t={style:"currency",decimal:!0})=>{const i=o.a.language.slice().replace(/_/g,"-"),n=r.b[s.a.language],{decimal:a}=t,l=a?new Intl.NumberFormat(o.a.locale,{style:"currency",currency:n}).resolvedOptions().maximumFractionDigits:0;return e.toLocaleString(i,{currency:n,style:"currency",maximumFractionDigits:l,minimumFractionDigits:l})},m=(e="")=>e.charAt(0).toUpperCase()+e.slice(1),f=e=>new Promise((t=>{const i=setTimeout((()=>{clearTimeout(i),t()}),e)}));function g(e){const t=`${e}`.split(".");let i=0;if(t[1]){const e=t[1].split("");for(;i<e.length&&!+e[i];i++);}return e.toFixed(i+1)}function b(e){return Object(n.a)(Object(a.a)(e),"PP",{locale:r.f[s.a.language]})}const y=e=>e.slice(11,13),v=e=>e.slice(7,11),w=e=>e.slice(0,7),x=e=>e.slice(-4),k=()=>!!Object.entries(JSON.parse(window.localStorage.getItem("okta-token-storage")||"{}")).length},202:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return s}));var n=i(121),a=i(72),o=i(25);const r={shortMonthDayandYear:"MMM dd, YYY"},s=(e,t)=>{const i=o.f[a.a.language];return Object(n.a)(e,t,{locale:i})}},204:function(e,t){},211:function(e,t,i){e.exports=i.p+"static/media/regular-bank.46dfdfe9.svg"},214:function(e,t,i){"use strict";i.d(t,"g",(function(){return a})),i.d(t,"h",(function(){return o})),i.d(t,"a",(function(){return r})),i.d(t,"d",(function(){return s})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return c})),i.d(t,"i",(function(){return d})),i.d(t,"f",(function(){return u})),i.d(t,"e",(function(){return p}));var n=i(1);const a=n.e.p`
    font-family: Favoritmonostd;
    font-size: 18px;
    line-height: 177.77%;
    text-transform: uppercase;
    font-weight: 500;
    width: fit-content;
`,o=n.e.h2`
    font-family: Roslindaledisplaycondensed, sans-serif;
    font-size: 64px;
    line-height: 137%;
    font-weight: 500;
    width: fit-content;
    text-align: center;
    margin: 0;
    color: #242e35;

    @media screen and (max-width: 767px) {
        font-size: 48px;
    }
`,r=n.e.div`
    max-width: 560px;
    font-size: 20px;
    line-height: 160%;
    font-family: VinovestMedium, sans-serif;
    font-weight: 500;
    padding: 0 20px 0;
`,s=n.e.h1`
    margin-top: 0;
    margin-bottom: 0;
    font-family: Roslindaledisplaycondensed, fangsong;
    font-size: 72px;
    text-align: center;
    line-height: 133.33%;
    font-weight: 500;

    @media screen and (max-width: 767px) {
        font-size: 48px;
    }
`,l=n.e.div`
    margin: 0;
    padding: 0;
    letter-spacing: 0.005em;
    font-size: 20px;
    text-align: center;
    line-height: 160%;
    font-family: Favoritstd, sans-serif;
    font-weight: 500;

    @media screen and (max-width: 767px) {
        font-size: 18px;
    }
`,c=n.e.img`
    margin: 0;
    padding: 0;
    max-width: 1140px;
    object-fit: contain;
    width: 100%;
`,d=n.e.span`
    font-family: Favoritmonostd, sans-serif;
    font-size: 16px;
    margin: 0;
    text-transform: uppercase;
    padding: 0;
`,u=n.e.h3`
    font-size: 32px;
    font-family: Roslindaledisplaycondensed, sans-serif;
    margin: 0;
    text-align: center;
    padding: 0;
`,p=n.e.p`
    margin: 0;
    padding: 0;
    letter-spacing: 0.005em;
    font-size: 20px;
    text-align: center;
    line-height: 150%;
    font-family: Favoritstd, sans-serif;
    font-weight: 500;

    @media screen and (max-width: 767px) {
        font-size: 18px;
    }
`},217:function(e,t,i){"use strict";var n=i(0);t.a=({ref:e})=>{const[t,i]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{const{clientHeight:t}=e.current,{top:n}=e.current.getBoundingClientRect();n-window.innerHeight<=0&&n+t>0&&i(!0)}),[e]),Object(n.useEffect)((()=>{if(!t){const t=()=>{const{clientHeight:t}=e.current,{top:n}=e.current.getBoundingClientRect();n-window.innerHeight<=0&&n+t>0&&i(!0)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)}}),[t,e]),{hasRevealed:t}}},218:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(1),r=i(8);const s=({className:e,children:t,onClick:i,disabled:n,width:o,colors:s=["rgb(239, 221, 199)","rgb(36, 46, 53)"]})=>{const[d,u,p]=s,h=Object(r.f)();return a.a.createElement(c,{onClick:i||(()=>{h.user.signUpModalToggle(!0)}),second:u,first:d,disabled:n,width:o,className:e,optional:p},a.a.createElement(l,{second:u,first:d,optional:p},t))},l=o.e.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 177%;
    font-family: Favoritmonostd, sans-serif;
    background: transparent;
    border: 2px ${({first:e,optional:t})=>t||e} solid;
    transform: translate3d(-8px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    background-color: ${({first:e})=>e};
    color: ${({second:e})=>e};
    transition: 0.3s;
    text-transform: uppercase;
`,c=o.e.button`
    min-width: ${({width:e})=>e||"254px"};
    height: 71px;
    padding: 0 10px;
    position: relative;
    background: transparent;
    border: 2px ${({first:e,optional:t})=>t||e} solid;

    :hover {
        cursor: pointer;
        outline: 0;

        ${l} {
            transform: translate3d(-16px, -16px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                skew(0deg, 0deg);
            transform-style: preserve-3d;
            background-color: ${({second:e})=>e};
            color: ${({first:e})=>e};
        }
    }
    :focus {
        outline: 0;
    }
    :disabled {
        background: ${({theme:e})=>e.colors.lightGray};
    }
`;s.styled={Layer:l,WithLayers:c},t.a=s},219:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n=i(1).e.div`
    font-family: ${e=>e.theme.fonts.title};

    margin-bottom: 34px;
    font-size: 32px;
    ${e=>e.theme.media.greaterThan("768px")`
        margin-bottom: 42px;
        font-size: 42px;
    `};
`},221:function(e,t,i){"use strict";var n=i(10),a=i(31);const o={async useAccountInformationPut(e,t,i){const o=await fetch(`${a.a.apiEndpoint}/v1/user/${e}/information`,{method:"PUT",headers:{Authorization:`Bearer ${t}`},body:JSON.stringify(i)});if(o.ok)return o.json();throw new Error(n.a.t("account:error_generic"))},async useAccountPortfolioGet(e,t){const i=await fetch(`${a.a.apiEndpoint}/v1/portfolio/${e}`,{method:"GET",headers:{Authorization:`Bearer ${t}`}});if(i.ok)return i.json()},async useAccountPortfolioPut(e,t,i){const o=await fetch(`${a.a.apiEndpoint}/v1/portfolio/${e}/settings`,{method:"PUT",headers:{Authorization:`Bearer ${t}`},body:JSON.stringify(i)});if(o.ok)return o.json();throw new Error(n.a.t("account:error_generic"))},async useAccountPasswordPut(e,t,i){const n=await fetch(`${a.a.apiEndpoint}/v1/user/${e}/password`,{method:"PUT",headers:{Authorization:`Bearer ${t}`},body:JSON.stringify(i)});if(!n.ok){const e=(await n.json()).message;return Promise.reject(e)}}};t.a=o},222:function(e,t,i){"use strict";function n(){window._vwo_code=window._vwo_code||function(){var e=!1,t=document,i={use_existing_jquery:function(){return false},library_tolerance:function(){return 2500},finish:function(){if(!e){e=!0;var i=t.getElementById("_vis_opt_path_hides");i&&i.parentNode.removeChild(i)}},finished:function(){return e},load:function(e){var i=t.createElement("script");i.src=e,i.type="text/javascript",i.innerText,i.onerror=function(){_vwo_code.finish()},t.getElementsByTagName("head")[0].appendChild(i)},init:function(){window.settings_timer=setTimeout((function(){_vwo_code.finish()}),2e3);var e=t.createElement("style"),i="body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}",n=t.getElementsByTagName("head")[0];return e.setAttribute("id","_vis_opt_path_hides"),e.setAttribute("type","text/css"),e.styleSheet?e.styleSheet.cssText=i:e.appendChild(t.createTextNode(i)),n.appendChild(e),this.load("https://dev.visualwebsiteoptimizer.com/j.php?a=555458&u="+encodeURIComponent(t.URL)+"&f=1&r="+Math.random()),settings_timer}};return window._vwo_settings_timer=i.init(),i}()}i.d(t,"a",(function(){return n}))},225:function(e,t,i){"use strict";i.d(t,"n",(function(){return a})),i.d(t,"h",(function(){return o})),i.d(t,"j",(function(){return r})),i.d(t,"c",(function(){return c})),i.d(t,"e",(function(){return d})),i.d(t,"r",(function(){return u})),i.d(t,"k",(function(){return p})),i.d(t,"i",(function(){return h})),i.d(t,"d",(function(){return m})),i.d(t,"a",(function(){return f})),i.d(t,"b",(function(){return g})),i.d(t,"l",(function(){return b})),i.d(t,"f",(function(){return y})),i.d(t,"s",(function(){return v})),i.d(t,"m",(function(){return w})),i.d(t,"p",(function(){return x})),i.d(t,"o",(function(){return k})),i.d(t,"q",(function(){return E})),i.d(t,"g",(function(){return _}));var n=i(1);var a=n.e.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    ${e=>e.theme.mq({alignItems:["flex-start","center"]})}

    padding: 40px 20px;
    ${e=>e.theme.media.greaterThan("medium")`
    height: 85%;
    padding: initial;
  `}
`;var o=n.e.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    background: ${e=>e.theme.colors.white};
    overflow-y: auto;

    ${e=>e.theme.media.greaterThan("medium")`
    height: 100vh;
    flex-direction: row;
  `}
`;var r=n.e.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    align-items: center;
    ${e=>e.theme.media.greaterThan("medium")`
    padding: 0 79px 55px 79px;
    flex: 1;
    align-items: initial;
`}
`,s=i(6),l=i.n(s);const c=n.e.div`
    width: 100% !important;
    margin: 0;
    position: relative;
    ${e=>e.theme.media.greaterThan("medium")`
      max-width:393px
  `}

    @media screen and (min-width: 600px) {
        margin: 0 auto !important;
        max-width: 393px;
    }
`,d=n.e.div`
    font-family: RoslindaleDisplayCondensed;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 0.005em;
    color: #102035;
    margin-top: 0px;
    margin-bottom: 20px;
    @media screen and (min-width: 1024px) {
        margin-bottom: 30px;
        font-size: 35px;
    }
`,u=n.e.p`
    text-align: center;
    font-style: normal;
    font-size: 12px;
    line-height: 15px;
    color: ${e=>e.theme.colors.disclaimerGray};
    margin: 15px 0 0 0;
    @media screen and (min-width: 1024px) {
        font-size: 16px;
        line-height: 20px;
    }
`,p=n.e.input`
    width: 100%;
    background: #ffffff;
    border: ${e=>e.isInvalid?"1px solid #ed1c24":"1px solid #e5e5e5"};
    box-shadow: "none";
    outline: none;
    box-sizing: border-box;
    padding: 15px;
    font-size: 14px;
    height: 50px;
    margin-top: 18px;
    ::placeholder {
        color: ${e=>e.theme.colors.darkGray};
    }
    :focus {
        outline: none;
        border-color: #e5e5e5;
    }
    -webkit-appearance: none;
`,h=(n.e.input`
    width: 48%;
    background: #ffffff;
    border: ${e=>e.isInvalid?"1px solid #ed1c24":"1px solid #e5e5e5"};
    box-shadow: "none";
    outline: none;
    box-sizing: border-box;
    padding: 15px;
    font-size: 14px;
    height: 50px;
    margin-top: 18px;
    ::placeholder {
        color: ${e=>e.theme.colors.darkGray};
    }
    :focus {
        outline: none;
        border-color: #e5e5e5;
    }
    -webkit-appearance: none;
`,n.e.div`
    margin-top: 10px;
    padding: 0 5px;
`),m=n.e.label`
    font-family: VinovestMono;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 21px;

    color: ${({theme:e,isValid:t})=>l.a.cond([[e=>!0===e,l.a.constant(e.colors.green)],[e=>!1===e,l.a.constant(e.colors.red)],[l.a.stubTrue,l.a.constant(e.colors.disclaimerGray)]])(t)};
`,f=n.e.label`
    font-family: VinovestMono;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 15px;
    color: ${e=>e.isNotDecrator?e.theme.disclaimerGray:"#242424"};
    text-decoration: ${e=>e.hasUnderline?"underline":"none"};
    @media screen and (min-width: 1024px) {
        font-size: 12px;
        line-height: 17px;
    }
    :hover {
        text-decoration: ${e=>e.isNotDecrator?"none":"underline"};
        cursor: ${e=>e.isNotDecrator?"default":"pointer"};
    }
`,g=Object(n.e)(f)`
    display: block;
    text-align: center;
    margin-top: 97px;

    @media screen and (min-width: 1024px) {
        margin-top: 121px;
    }
`,b=Object(n.e)("img")`
    display: block;
    width: 255px;
    margin: 22px auto;

    @media screen and (min-width: 1024px) {
        width: 361px;
        margin: 26px auto;
    }
`,y=n.e.p`
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    color: #636363;

    @media screen and (min-width: 1024px) {
        font-size: 16px;
        line-height: 24px;
    }
`,v=n.e.button`
    padding-top: 4px;
    font-family: VinovestMono;
    height: 50px;
    background: ${({theme:e})=>e.colors.burntOrange};
    color: ${({theme:e})=>e.colors.white};
    opacity: ${e=>e.disabled?.7:1};
    transition: opacity 0.2s ease-in-out;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 170%;
    width: 100%;
    border: none;
    cursor: pointer;
    pointer-events: ${e=>e.disabled?"none":"initial"};
    :hover {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.6s ease-in-out;
    }
    :focus {
        outline: 0;
    }
    :disabled {
        background: ${({theme:e})=>e.colors.lightGray};
    }
    margin-top: 28px;
    @media screen and (min-width: 768px) {
        margin: 0 auto;
        margin-top: 40px;
    }
`,w=n.e.div`
    margin-bottom: 30px;
    @media screen and (min-width: 1024px) {
        margin-bottom: 45px;
    }
    :hover {
        cursor: pointer;
    }
`,x=n.e.div`
    width: 100%;
    display: flex;
    justify-content: center;
`,k=n.e.div`
    height: 64px;
    ${e=>e.theme.media.greaterThan("768px")`
        height: 104px;
    `}

    ${e=>e.theme.media.greaterThan("1184px")`
        width: ${e.isSplitPane?"fit-content":"1184px"};
        display: flex;
        justify-content: flex-start;
    `}
`,E=n.e.div`
    display: flex;
    justify-content: space-between;
    input {
        width: 49%;
    }

    ${({theme:e})=>e.media.lessThan("480px")`
    flex-direction: column;
    justify-content: initial;
    input {
      width: 100%;
    }
  `}
`,O=n.e.div`
    display: flex;
    flex-direction: column;
    margin-top: ${e=>e.mTop}px;
    margin-bottom: ${e=>e.mBottom}px;
`;O.defaultProps={mTop:0,mBottom:0};const _=Object(n.e)(O)`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto 1fr;
    align-items: center;
    label {
        font-size: 15px;
        line-height: 25px;
    }
`},228:function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var n=i(5),a=i.n(n),o=i(0),r=i.n(o),s=i(407),l=i(12);var c=i(1).e.div`
    height: 100vh;
    display: ${e=>e.hidden?"none":"flex"};
    align-items: center;
    justify-content: center;
`;const d=({children:e,fallback:t,shouldRender:i})=>i?e():t;d.propTypes={children:a.a.func.isRequired,shouldRender:a.a.bool.isRequired,fallback:a.a.node},d.defaultProps={fallback:null};var u=d,p=i(8);const h=(e,t=300)=>()=>setTimeout(e,t),m=({loading:e})=>{const[t,i]=Object(p.i)(!0);return r.a.createElement(u,{shouldRender:t},(()=>r.a.createElement(l.e,{timeout:1200,in:e,onExit:h(i)},r.a.createElement(c,{hidden:!e},r.a.createElement(s.ClipLoader,{size:100})))))};m.propTypes={loading:a.a.bool.isRequired};var f=m},25:function(e,t,i){"use strict";i.d(t,"h",(function(){return n})),i.d(t,"f",(function(){return r})),i.d(t,"d",(function(){return s})),i.d(t,"j",(function(){return d})),i.d(t,"i",(function(){return l})),i.d(t,"e",(function(){return u})),i.d(t,"g",(function(){return p})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return h})),i.d(t,"a",(function(){return m}));var n={en:{404:i(303),"about-us":i(304),accessibility:i(305),account:i(306),chart:i(307),common:i(308),currency:i(309),deposit:i(310),documents:i(311),footer:i(312),invite:i(313),lang:i(314),liquidation:i(315),login:i(316),"not-found":i(317),overview:i(318),portfolio:i(319),"risk-tolerance":i(320),"sign-up-modal":i(321),"terms-conditions":i(322),transactions:i(323),"why-wine":i(324)},zh_CN:{404:i(325),"about-us":i(326),account:i(327),chart:i(328),common:i(329),currency:i(330),deposit:i(331),documents:i(332),invite:i(333),lang:i(334),liquidation:i(335),login:i(336),"not-found":i(337),overview:i(338),portfolio:i(339),"risk-tolerance":i(340),"terms-conditions":i(341),transactions:i(342)},zh_Hans_HK:{404:i(343),account:i(344),chart:i(345),common:i(346),currency:i(347),deposit:i(348),documents:i(349),invite:i(350),lang:i(351),liquidation:i(352),login:i(353),"not-found":i(354),overview:i(355),portfolio:i(356),"risk-tolerance":i(357),transactions:i(358)}},a=i(299),o=i(684);const r={en_US:a.a,zh_CN:o.a,zh_Hans_HK:o.a},s={en:"en",en_US:"en",zh_CN:"zh-CN",zh_Hans_HK:"zh-HANS-HK"},l={en:"",en_US:"en",en_GB:"en-gb",zh_CN:"zh",zh_Hans_HK:"zh-hk"},c={en:"USD",en_US:"USD",zh_CN:"HKD",zh_Hans_HK:"HKD"},d=Object.entries(l).reduce(((e,[t,i])=>(e[i]=t,e)),{}),u=(Object.keys(n),"i18nLng"),p={default:["common","404","overview","account","login","accessibility"],async:["chart","deposit","documents","invite","liquidation","overview","portfolio","risk-tolerance","transactions"]},h={minimum:1e3,tier1:2e3,tier2:1e4,premium:5e4,grandcru:25e4},m={minimum:8*h.minimum,tier1:8*h.tier1,tier2:8*h.tier2,premium:8*h.premium,grandcru:8*h.grandcru}},27:function(e,t,i){"use strict";i.d(t,"d",(function(){return u})),i.d(t,"c",(function(){return p})),i.d(t,"b",(function(){return h})),i.d(t,"a",(function(){return m})),i.d(t,"e",(function(){return g}));var n=i(0),a=i.n(n),o=i(18),r=i(23),s=i(72),l=i(25);const c=[Object.values(l.i)].filter((e=>!!e)).join("|"),d=new RegExp(`^/?(${c})/?`,"g"),u=({children:e})=>a.a.createElement(o.d,null,a.a.Children.map(e,(e=>{const{path:t}=e.props,i=g(t);return a.a.cloneElement(e,{...e.props,path:i})}))),p=({children:e})=>{const t=`/:language(${c})?`;return a.a.createElement(o.b,{path:t},(({match:t,location:i})=>a.a.createElement(a.a.Fragment,null,e)))},h=({to:e,...t})=>{const i={...t,to:g(e)};return a.a.createElement(r.c,i)},m=({to:e,...t})=>{const i={...t,to:g(e)};return a.a.createElement(r.b,i)},f=e=>{const t=l.i[s.a.language],i=e.replace(d,"");return b(t?`${t}${i}`:e)},g=e=>{let t;switch(typeof e){case"string":t=f(e);break;case"object":t={...e,pathname:f(e.pathname)};break;default:t=e}return t},b=e=>{try{return`/${e.replace(/(^\/|\/$)/gm,"")}`}catch(t){return console.error("There was a problem cleaning the route path",t),e}}},292:function(e,t,i){e.exports=i.p+"static/media/info-bubble.f4027a53.svg"},294:function(e,t,i){"use strict";t.a=e=>[{title:e("bank.domestic.bank_name"),value:[e("bank.domestic.bank_name_value")]},{title:e("bank.aba_number"),value:[e("bank.aba_number_value")]},{title:e("bank.bank_address"),value:[e("bank.domestic.bank_address_value")]},{title:e("bank.domestic.beneficiary_name"),value:[e("bank.beneficiary_name_value")]},{title:e("bank.type_acct"),value:[e("bank.type_acct_value")]},{title:e("bank.acct_number"),value:[e("bank.domestic.acct_number_value")]},{title:e("bank.domestic.beneficiary_addr"),value:[e("bank.domestic.beneficiary_addr_value")]}]},295:function(e,t,i){"use strict";t.a=e=>[{title:e("bank.international.bank_name"),value:[e("bank.international.bank_name_value")]},{title:e("bank.bank_address"),value:[e("bank.international.bank_address_value")]},{title:e("bank.international.swift_code"),value:[e("bank.international.swift_code_value")]},{title:e("bank.international.beneficiary_name"),value:[e("bank.international.bank_name_value")]},{title:e("bank.international.beneficiary_addr"),value:[e("bank.international.bank_address_value")]},{title:e("bank.international.beneficiary"),value:[e("bank.beneficiary_name_value")]},{title:e("bank.acct_number"),value:[e("bank.international.account_number_value")]},{title:e("bank.international.memo"),value:[e("bank.international.memo_value")]}]},296:function(e,t,i){e.exports=i.p+"static/media/balloon-coin.2e5a00ed.svg"},297:function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var n=i(0),a=i.n(n),o=i(666),r=i(667),s=i(668),l=i(6),c=i.n(l),d=i(11),u=i(1),p=i(8),h=i(88),m=i(670);const f=Object(d.a)((({modalMode:e})=>{const{t}=Object(m.a)("invite"),i=Object(p.f)(),[l,d]=Object(n.useState)(""),u=Object(n.useRef)(null),f=Object(n.useMemo)((()=>i.referral.referralProfileDetails.shareUrl),[i.referral.referralProfileDetails]),A=Object(n.useCallback)((e=>{i.tracking.gtm.trackReferralAction("Copy URL to clipboard"),d(t("copied")),u.current.select(),document.execCommand("copy"),e.target.focus(),setTimeout((()=>{d("")}),900)}),[d,i.tracking.gtm]),j=Object(n.useCallback)((e=>{i.tracking.gtm.trackReferralAction(`Click ${e} share button`)}),[i.tracking.gtm]),T=a.a.createElement(C,null,a.a.createElement(S,{background:"#55ACEE",onClick:()=>{j("Twitter")}},a.a.createElement(o.a,{title:t("social_share_msg"),url:f,hashtags:[t("wine"),t("finewine"),t("investing")]},a.a.createElement(h.e,null))),a.a.createElement(S,{background:"#3B5998",onClick:()=>{j("Facebook")}},a.a.createElement(r.a,{quote:t("social_share_msg"),url:f},a.a.createElement(h.c,null))),a.a.createElement(S,{background:"#007fb1",onClick:()=>{j("LinkedIn")}},a.a.createElement(s.a,{title:t("social_share_msg"),summary:t("social_summary"),url:f,source:f},a.a.createElement(h.d,null))));return e?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(w,null,a.a.createElement(k,{ref:u,value:f,readOnly:!0}),a.a.createElement(O,{onClick:A,disabled:!c.a.isEmpty(l)},t("copyCTA")))),T):a.a.createElement(g,null,a.a.createElement(b,null,t("shareInviteLink")),a.a.createElement(y,null,a.a.createElement(v,null,a.a.createElement(x,{ref:u,value:f,readOnly:!0}),a.a.createElement(E,{onClick:A,disabled:!c.a.isEmpty(l)},t("copyCTA"))),!c.a.isEmpty(l)&&a.a.createElement(_,null,l)),T)})),g=u.e.div`
    border: 1px solid ${({theme:e})=>e.colors.borderGray};
    flex-grow: 1;

    padding: 20px 15px;
    height: 240px;
    ${({theme:e})=>e.media.greaterThan("1024px")`
    padding: 30px 25px;
    height: 300px;
    margin-left: 20px;
  `}

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,b=u.e.div`
    font-family: VinovestMono;
    margin: 10px 0;

    font-size: 14px;
    ${({theme:e})=>e.media.greaterThan("1024px")`
    font-size: 16px;
  `}
`,y=u.e.div`
    height: 75px;
`,v=u.e.div`
    display: flex;
    width: 100%;
    margin-bottom: 10px;
`,w=Object(u.e)(v)`
    margin-bottom: 30px;

    ${({theme:e})=>e.media.greaterThan("1024px")`
            margin-bottom: 63px;

    `}
`,x=u.e.input`
    border: 1px solid ${({theme:e})=>e.colors.mainAccentBlue};
    height: 50px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 0 15px;
`,k=u.e.input`
    background: #ffffff;
    border: 1px solid #caccce;
    border-right: 0;
    height: 60px;
    flex-grow: 1;
    padding: 0 18px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;

    ${({theme:e})=>e.media.greaterThan("1024px")`
        font-size: 20px;
        line-height: 36px;
    `}
`,E=u.e.button`
    font-family: VinovestMono;
    background: ${({theme:e})=>e.colors.mainAccentBlue};
    border: 1px solid ${({theme:e})=>e.colors.mainAccentBlue};
    color: #EFDDC7;
    height: 50px
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${e=>e.disabled?.7:1};
    transition: opacity 0.2s ease-in-out;
    padding-top: 5px;
    width: 25%;

    ${({theme:e})=>e.media.greaterThan("1024px")`
        width: 150px;
    `}

    &:hover {
        cursor: pointer;
    }
`,O=Object(u.e)(E)`
    height: 60px;
    background: #a86d37;
    border: 0;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #ffffff;
`,_=u.e.div`
    font-family: VinovestMono;
    font-size: 14px;
`,C=u.e.div`
    display: flex;
    justify-content: space-between;
`,S=u.e.div`
    background: ${e=>e.background};
    border: 1px solid ${e=>e.background};
    width: 32%;
    height: 50px;

    button {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`},298:function(e,t,i){e.exports=i.p+"static/media/international.e9b27ab9.svg"},300:function(e,t,i){"use strict";i.d(t,"a",(function(){return w}));var n=i(0),a=i.n(n),o=i(27);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var s=a.a.createElement("path",{d:"M51.0906 33.7925V34.1455L51.4232 34.2636C58.4492 36.7603 63.4992 43.4635 63.4992 51.3512V121.667C63.4992 123.666 61.862 125.303 59.863 125.303H30.9096C28.8921 125.303 27.2734 123.667 27.2734 121.667V51.3512C27.2734 43.4629 32.3039 36.7603 39.349 34.2638L39.682 34.1458V33.7925V29.1021H51.0906V33.7925Z",stroke:"#242424"}),l=a.a.createElement("path",{d:"M39.6875 0.5H51.0961V9.82031H39.6875V0.5Z",stroke:"#242424"}),c=a.a.createElement("path",{d:"M39.6875 9.61084H51.0961V29.312H39.6875V9.61084Z",fill:"#242424",stroke:"#242424"}),d=a.a.createElement("path",{d:"M27.5 93.5V63.5H62.5V93.5H27.5Z",fill:"#242424",stroke:"#242424"}),u=a.a.createElement("path",{d:"M34.7963 84.9014V82.5614H29.3782V81.4094L34.6882 72.3014H37.0643V80.4734H38.4683V82.5614H37.0643V84.9014H34.7963ZM32.1323 80.4734H34.7963V75.6674L32.1323 80.4734ZM41.7497 73.8674C42.5537 72.7274 43.6997 72.1574 45.1877 72.1574C46.6757 72.1574 47.8217 72.7274 48.6257 73.8674C49.4297 74.9954 49.8317 76.5734 49.8317 78.6014C49.8317 80.6294 49.4297 82.2134 48.6257 83.3534C47.8217 84.4814 46.6757 85.0454 45.1877 85.0454C43.6997 85.0454 42.5537 84.4814 41.7497 83.3534C40.9457 82.2134 40.5437 80.6294 40.5437 78.6014C40.5437 76.5734 40.9457 74.9954 41.7497 73.8674ZM47.5997 78.6014C47.5997 75.6974 46.7957 74.2454 45.1877 74.2454C43.5797 74.2454 42.7757 75.6974 42.7757 78.6014C42.7757 81.5054 43.5797 82.9574 45.1877 82.9574C46.7957 82.9574 47.5997 81.5054 47.5997 78.6014ZM57.0895 84.9014V82.5614H51.6715V81.4094L56.9815 72.3014H59.3575V80.4734H60.7615V82.5614H59.3575V84.9014H57.0895ZM54.4255 80.4734H57.0895V75.6674L54.4255 80.4734Z",fill:"#F9F8F7"}),p=a.a.createElement("line",{y1:125.5,x2:82,y2:125.5,stroke:"black"}),h=a.a.createElement("line",{x1:85,y1:125.5,x2:90,y2:125.5,stroke:"black"});const m=({svgRef:e,title:t,...i})=>a.a.createElement("svg",r({width:90,height:126,viewBox:"0 0 90 126",fill:"none",ref:e},i),t?a.a.createElement("title",null,t):null,s,l,c,d,u,p,h),f=a.a.forwardRef(((e,t)=>a.a.createElement(m,r({svgRef:t},e))));i.p;var g=i(1);var b=g.e.div`
    height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: 500;
        font-size: 36px;
        line-height: 30px;
        margin-bottom: 25px;
        margin-top: 35px;
    }
    h6 {
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        margin-top: 0;
        margin-bottom: 45px;
    }

    a {
        width: 202px;
        border: 1px solid #000000;
        box-sizing: border-box;
        color: #000000;
        text-decoration: none;
        text-align: center;
        line-height: 50px;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.05em;
        text-transform: uppercase;

        :hover {
            cursor: pointer;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
        }
    }
`,y=i(670);const v=g.c` 
footer{
display: none !important;
}`;var w=()=>{const{t:e}=Object(y.a)(["404"]);return a.a.createElement(b,null,a.a.createElement(v,null),a.a.createElement(f,null),a.a.createElement("h1",{"data-testid":"title"},e("title")),a.a.createElement("h6",{"data-testid":"subtitle"},e("subtitle")),a.a.createElement(o.a,{to:"/","data-testid":"back"},e("back_link")))}},303:function(e){e.exports=JSON.parse('{"back_link":"Back to Home","subtitle":"The page is missing or you assembled the link incorrectly","title":"Page Not Found"}')},304:function(e){e.exports=JSON.parse('{"yuan":{"name":"Yuan Jing","position":"Chateau Pichon Baron Asia Sales Director","description":"In 2014, Jing Yuan was appointed as the Asia Sales Director for AXA Mill\xe9simes while managing 8 properties. Originating from Bejing, she goes to Bordeaux every two months during her 13 year career in wine. Career highlights include 6 years as Asia Sales Manager for an important Bordeaux Wine Merchant and 1 year as Asia Mission Manager at CIVB (Conseil Interprofessionel du Vin de Bordeaux). Being born in China and having lived in Europe for 17 years has helped shape Jing\'s appreciation of culture and passion for wine."}}')},305:function(e){e.exports=JSON.parse('{"title":"Accessibility","description":"Our mission is to give everyone access to investments in fine wine. We are committed to a multi-year plan to improve our platform and adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 level A, and the Americans with Disabilities Act (ADA).","ada-compliance-statement":{"title":"ADA compliance statement","last-assessment":"The last ADA assessment was completed and issues addressed on May 26, 2020.","paragraph1":"We firmly believe that the internet should be available and accessible to anyone, and are committed to providing a website that is accessible to the widest possible audience, regardless of circumstance and ability.","paragraph2":"To fulfill this, we aim to adhere as strictly as possible to the World Wide Web Consortium\u2019s (W3C) Web Content Accessibility Guidelines 2.1 (WCAG 2.1) at the AA level. Complying with these guidelines helps us ensure that the website is accessible to all people: visual impairment, people with motor impairments, cognitive disabilities, and more.","paragraph3":"This website utilizes various technologies that are meant to make it as accessible as possible at all times. We utilize an accessibility interface that allows persons with specific disabilities to adjust the website\u2019s UI (user interface) and design it to their personal needs. However, here are some key points to note:","list1":"Some pages have partial conformance due to the use of 3rd party vendors. As such Vinovest does not claim full site-wide conformance, instead a partial conformance, as defined by WCAG Level AA 2.1. Vinovest cannot ensure conformance of crucial third-party plug-ins and widgets.","list2":"Our conformance claims only extend to domains owned by Vinovest, Inc.","list3":" Vinovest used WCAG guidelines for conformance as suggested by the Department of Justice.","list4":"We are in the process of converting our PDFs to conformant versions. If you find one that does not conform or is not readable, please contact us so we may send you the information in a format that works for you.","list5":"Vinovest utilizes ADA assessment tools to scan and establish a baseline for conformance but understands W3C\'s position that, at this time, there is no tool that can perform a completely automatic assessment on the checkpoints in the guidelines, and fully automatic testing may remain difficult or impossible."},"feedback":{"title":"Feedback","paragraph1":"Despite our very best efforts to allow anybody to adjust the website to their needs, there may still be pages or sections that are not fully accessible, are in the process of becoming accessible, or are lacking an adequate technological solution to make them accessible.","paragraph2":"Still, we are continually improving our accessibility, adding, updating, and improving its options and features, and developing and adopting new technologies. All this is meant to reach the optimal level of accessibility, following technological advancements."},"reaching-out":{"title":"Reaching out regarding accessibility issues","description":"If you encounter any issues gaining access to material on this website, please contact us through email at "}}')},306:function(e){e.exports=JSON.parse('{"account_auto_invest":{"subtitle":"View your billing history and manage Automatic Investments","title":"Manage Automatic Investments"},"account_email":{"email":"Email Address","error_invalid_email":"Invalid email address","label_email":"Email Address","notice":"Vinovest uses this email address to contact you with important information regarding the status of your account. Please keep it current.","updated":"Your email has been updated","placeholder_email":"EX: example@email.com","required":"Email is required"},"account_investment_plan":{"notice":"Noted: Your investment plan determines the blend of investments your money is allocated to. It will only affect future investments and will not re-balance your current positions.","title":"Investment Plan","updated":"Your investment plan has been updated"},"account_personal_information":{"description_address":"This should be the address used for tax purposes.","label_address":"Address","label_city":"City","label_country":"Country","label_first":"First Name","label_fullname":"Full Name","label_last":"Last Name","label_state":"State","label_zip":"Zip","placeholder_address":"EX: 123 Main St.","placeholder_city":"EX: San Fransico","placeholder_first":"EX: John","placeholder_last":"EX: Smith","placeholder_zip":"EX: 90103","success":"Your personal information has been updated","title":"Personal Information"},"account_settings":{"auto_invest":"Auto-Invest","sell_wine":"Sell your wine"},"account_mobile":{"title":"Mobile Number","label":"Phone Number","success_updated":"Your phone number has been updated","error_invalid":"Invalid phone number","required":"Phone number is required","placeholder":"Enter phone number"},"accountsettings":{"sell":"Sell your wine"},"button_cancel":"Cancel","button_save":"Save","disclaimer":"All of your information is secured. We will never send your data to marketers or send you spam","error_post":"Unable to update your information at this time.","grand_cru":"Grand Cru","main":{"account":"Account","logout":"log out","user_settings":"User Settings"},"myaccount":{"edit":"Edit","editbutton":"Edit"},"not_provided":"Not provided","premium":"Premium","sell_your_wine":{"description":{"description":"Please allow 2-4 weeks for the process to be completed.","portfolio_sold":"We have received your request to sell your entire wine portfolio.","sell_portfolio":"If you would like to liquidate and or withdraw your funds, please click the button below."},"liquidation":{"full":"We have received your request to sell your entire wine portfolio.","neither":"If you would like to liquidate and or withdraw your funds, please click the button below.","partial":"We have received your request to sell some of your wines."},"sell_button":{"disabled":"sell your wine","enabled":"In Progress"},"support":{"notsold":"If you have any questions, please check out our","notsold_email_message":"support page","sold":"If you have any questions, please","sold_email_message":"contact our support team"}},"sellyourwine":{"description":{"description":"Please allow 2-4 weeks for the process to be completed.","portfolio-sold":"We have received your request to sell your entire wine portfolio.","sell-portfolio":"If you would like to liquidate and or withdraw your funds, please click the button below."},"sellbutton":{"disabled":"sell your wine","enabled":"In Progress"},"support":{"notsold":"If you have any questions, please check out our","notsold-email-message":"support page","sold":"If you have any questions, please","sold-email-message":"contact our support team"}},"standard":"Standard","support":{"help_support":"Help & Support","privacy_policy":"Privacy Policy","terms_condition":"Terms & Conditions","title":"Support"},"title":"User Settings","update_info":{"complete_message":"Your number has been updated!"},"updateinfo":{"complete-message":"Your number has been updated!"},"user_settings":{"account":"Personal Information","investment_plan":"Investment Plan","logout":"Log Out","password":"Password","phone":"Mobile Number"},"password":{"title":"Password","match":"Password does not match.","current_password":"Current password is incorrect. This is required to update your password.","notice":"To change your password, enter your current password and then create a new one using the following form.","label_current_password":"Current Password","label_new_password":"New Password","password_requirements":"At least 8 characters one number one uppercase letter and one special character","error_characters":"Password should contain at least 8 characters","error_number":"Password should contain at least one number","error_upper":"Password should contain at least one uppercase character","error_special":"Password should contain at least one special character","error_new_required":"New Password field is required","error_old_password":"Your old password is required","error_confirm_password":"Confirm Password field is required","success_update":"Your password has been updated.","label_confirm_password":"Confirm New Password","retype_password":"Type your new password again.","button_cancel":"Cancel","button_change":"Change"},"error_generic":"Something went wrong"}')},307:function(e){e.exports=JSON.parse('{"price_history":{"average_price":"Average price","benchmark":"Benchmark","benchmark_wine_name":"Bordeaux Blend Red, Napa Valle","current_wine":"Current wine","current_wine_name":"Opus One, Napa Valley, USA","hide_benchmark":"Hide bench mark","price_history":"Price History"},"pricehistory":{"averageprice":"Average price","benchmark":"Benchmark","currentwine":"Current wine","hidebenchmark":"Hide bench mark","pricehistory":"Price History"}}')},308:function(e){e.exports=JSON.parse('{"account":"Account","calendly":{"book":"Book a 1-on-1 call with one of our wine experts. Build a wine portfolio to hedge against uncertain market conditions.","mobile-book":"Book a 1-on-1 call with our wine experts"},"units":{"ml":"ml"},"minimum_investment_amount":1000,"copywrite":"Vinovest. All rights reserved.","currency":"USD","currency_symbol":"$","currencySymbol":"$","date-format":{"month":"MM/YYYY","standard":"MM/DD/YYYY"},"date":{"short":"{{ date, short }}"},"documents":"Documents","why-wine":"Why Wine","how-it-works":"HOW IT WORKS","about":"About","blog":"Blog","help":"Help","duration":"{{ count, duration}} {{ unit, duration}}","en_currency":"USD","get-started":"Get started","error-boundry":{"button-retry":"Try Again","description":"Sorry about that! It looks like we&apos;re having an issue on our end.","error":"Error Message","hold":"Give us a second, and try again","title":"It\'s not you, it\'s us"},"footer":{"and":"and","button-about":"About us","button-faq":"FAQ","button-home":"Home","button-privacy":"Privacy Policy","button-terms":"Terms of Service","button-terms-conditions":"Terms & conditions","button-website":"Vinovest.co","disclaimer-1":"Vinovest, Inc (\u201cVinovest\u201d) operates a website at","disclaimer-2":"By using the Platform, you accept our","disclaimer-3":"Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. Buying wines involve risk and may result in partial loss. While the data we use from third parties is believed to be reliable, we cannot ensure the accuracy or completeness of data provided by investors or other third parties.","disclaimer-4":"Neither Vinovest nor any of its affiliates provide tax advice and do not represent in any manner that the outcomes described herein will result in any particular tax consequence. Prospective investors should confer with their personal tax advisors regarding the tax consequences based on their particular circumstances. Neither Vinovest nor any of its affiliates assume responsibility for the tax consequences for any investor of any investment."},"invite":"Invite","months":{"april":"April","august":"August","december":"December","february":"February","january":"January","july":"July","june":"June","march":"March","may":"May","november":"November","october":"October","september":"September"},"navigation":{"funds":"Add Funds"},"overview":"Overview","phone-number-capture":{"error":"Please enter a valid phone number","error-region":"The string supplied did not seem to be a phone number","title":"Enter your phone number"},"portfolio":"Portfolio","transactions":"Transactions","uppercase":"{{ text, uppercase }}","utils":{"constants":{"aggressive":"Aggressive","bank_transfer":"Bank Transfer","conservative":"Conservative","credit_card":"Credit Card","funds_added":"funds added","funds_withdrew":"funds withdrew","moderate":"Moderate","pending_deposit":"pending deposit","rebalance_add":"rebalance add","trade_settlement_purchase":"trade settlement purchase","trade_settlement_sell":"trade settlement sell","transfer_in":"transfer in","transfer_out":"transfer out","vinovest_monthly_fee":"vinovest monthly fee","wine_purchase":"wine purchase","wine_sold":"wine sold"},"shared":{"bottle":"{{count}} Bottle","bottle_plural":"{{count}} Bottles","case":"{{count}} Case","case_plural":"{{count}} Cases"}},"zh_CN_currency":"CNY","zh_Hans_HK_currency":"HKD"}')},309:function(e){e.exports=JSON.parse('{"en":"USD","en-US":"USD","zh-CN":"CNY","zh-Hans-HK":"HKD"}')},31:function(e,t,i){"use strict";function n(){const e=new Date,t=new Date;return e.setUTCHours(15),t.setUTCHours(1),{startDate:e,endDate:t}}i.d(t,"b",(function(){return n}));const a={env:("production","production"),issuer:("https://dev-404044.okta.com/oauth2/default","https://vinovest.okta.com/oauth2/aus1w5vycgzymXjSh357"),redirectUri:`${window.location.origin}/implicit/callback`,clientId:("0oa1gna6qqVVU3cGE357","0oa1w5q6ihvbriWcs357"),pkce:!0,scopes:["openid","profile","email"],baseUrl:("https://dev-404044.okta.com","https://vinovest.okta.com"),googleID:("0oa1iwssveTtDBwAv357","0oa1w8go0eH9KHVbl357"),apiEndpoint:("https://api.staging.vinovest.co","https://api.vinovest.co"),authServerID:(null,"aus1w5vycgzymXjSh357"),calendly:{url:"https://calendly.com/vinovest/30min",contactUsPageUrl:"https://calendly.com/vinovestofficial/video-chat-with-vinovest-contact-us-page",ceoUrl:"https://calendly.com/vinovestofficial/video-call-with-vinovest-ceo-portfolio-advisor",huntervino:"https://calendly.com/huntervino/30min"},stripeKey:"pk_test_KzpJ36ubFFlECuzf5eMVGz5H00esyPcPve",feature:{accountValueGraph:{enabled:!0},transactionsFeed:{enabled:!0},serviceBellDeposit:{enabled:!0},serviceBellLiquidate:{enabled:!0},serviceBell:{enabled:!1}},plaid:{publicKey:"d6e323e1a06d03ceea45b15e347b7e"},sentry:{dsn:"https://874883e6a8074ce681af16a8b8023df8@o344696.ingest.sentry.io/1895886",release:"web@"+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,APP_ENV:"production",APP_GTM_APPEND:"",APP_SENTRY_TRACING_RATE:"0.05"}).APP_RELEASE_TAG_OR_BRANCH_NAME,tracesSampleRate:Number("0.05"),tracingOrigins:["localhost",/.*vinovest.co.*/,/vinovest-web.*releaseapp.io/]},wineImagesBase:"https://staging-wine-images.s3-us-west-2.amazonaws.com/lwins",postHogKey:"v5luq5ViV_wnJ-jXntlKWNl0-9Vt3jSJOmZhSmzqH54",contentfulSpace:"zpx0hfp3jryq",contentfulAccessToken:"6_FkLcOgH0Zo8_q8K00d9bY6KTd7f0XMDxXl-pfvmfM",contentfulEnvironment:"prod-2020-12-22",sentryTag:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,APP_ENV:"production",APP_GTM_APPEND:"",APP_SENTRY_TRACING_RATE:"0.05"}).SENTRY_TAG,serviceBell:{publicToken:"e4c8b813366f48ce9aa39ca8f66f6976",options:{hidden:!0,position:"right"}},algoliaSearchId:"CCOI1HW5Z1",algoliaSearchKey:"818a2bb30afaf66441d7c5e916a5b96b",algoliaSearchIndex:"prod_Contentful_Help",saveLastRouterPaths:"saveLastRouterPaths"};a.calendly.url="https://calendly.com/vinovestofficial/video-call-with-vinovest-ceo-portfolio-advisor",a.stripeKey="pk_live_n3KgC7LCzIU7ha5c0r0Eqk2s00VMmaNSaW",a.wineImagesBase="https://prod-wine-images.s3-us-west-2.amazonaws.com/lwins",a.postHogKey="S-vQXo_K_76bZrF9bW4lltHL874rQalMNv_jd6UJoEA",a.feature.accountValueGraph.enabled=!0,a.feature.transactionsFeed.enabled=!0,a.contentfulSpace="zpx0hfp3jryq",a.contentfulAccessToken="iHuWz8MmcL9GGDzNQMXX-dgQRy24BtE8o2HFZbS6l-Q",a.contentfulEnvironment="prod-2020-12-22",a.algoliaSearchId="CCOI1HW5Z1",a.algoliaSearchKey="818a2bb30afaf66441d7c5e916a5b96b",a.algoliaSearchIndex="prod_Contentful_Help",t.a=a},310:function(e){e.exports=JSON.parse('{"ach_fee":"ACH Fee","add_funds":"Add funds","crypto":"Crypto currency","alert_message":"Auto Invest is not available for bank wires or crypto payments at this time","amount":"Amount","amountvalidation":"Please enter an amount of at least {{ currency }}{{ minValue }}","arrow":"arrow","average_deposit":"Average initial deposit","back":"Back","bank_wire":"Bank wire","bitpay_error":"Your Bitpay payment did not go through. Please try another payment method or try again later.","bitpay_warning":"Unable to generate Bitpay invoice. Try again later.","bank":{"aba_number":"ABA Routing Number","aba_number_value":"084106768","acct_number":"Account Number","bank_address":"Bank Address","beneficiary_name_value":"Vinovest, Inc.","domestic":{"acct_number_value":"9800534046","bank_address_value":"6070 Poplar Ave, Suite 200 Memphis, TN 38119","bank_name":"Bank Name","bank_name_value":"Evolve Bank & Trust","beneficiary_addr":"Beneficiary Address","beneficiary_addr_value":"9900 Culver Boulevard, Apt Phe Culver City, CA 90232","beneficiary_name":"Beneficiary Name"},"international":{"account_number_value":"3302798623","bank_address_value":"3003 Tasman Drive, Santa Clara, CA 95054, USA","bank_name":"Receiving Bank/Correspondent Bank (Pay to): ","bank_name_value":"Silicon Valley Bank","beneficiary":"Beneficiary","beneficiary_addr":"Beneficiary bank address","beneficiary_address_value":"Beneficiary bank address","beneficiary_name":"Beneficiary bank","memo":"Include this memo in the field for originator to beneficiary information (OBI) / further credit / special instructions:","memo_value":"For: Vinovest, Inc. account 3302798623 at Silicon Valley Bank","swift_code":"SWIFT code","swift_code_value":"SVBKUS6S"},"type_acct":"Type of Account","type_acct_value":"Checking"},"card_namep_laceholder":"Name on card","cc_name_length":"Name length cannot be greater than 26.","cc_name_length_min":"Name length must be greater than 2.","cc_name_placeholder":"Name on card","check_instructions":"To fund your account via check follow the instructions below.","completetransfer":"Complete Transfer","confirmation":"Transfer initiated","connect_bank":"Connect bank","continue":"Continue {{currency_symbol}}{{amount}}","credit":"Credit Card Fee","credit_card":"Credit card","date":"Date","domestic_wire_description":"You can credit your account via bank transfer. Please send funds to this account and please quote the reference number shown on your transfer.","domestic_wire_print":"domestic-wire-transfer","domestic_wire_tip":"A reference number is a unique identifier assigned to any financial transaction including those made using a credit or debit card","domestic_wire_transfer":"US bank wire transfer","done":"Done","enter_credit_card":"Enter credit card","enterCreditCard":{"nameplaceholder":"Name on card"},"failed":"Transfer failed","failed_line1":"Your transfer failed to be completed. ","failed_line2":"Please check your connection, payment method, and retry. ","fee":"Fee","feebanner":"Save {{amount}}% on Fees By Setting Up Auto-Invest","feePercentage":"2.9%","frequency":"Frequency","info":"info","instructions":"see instructions","international_bank_wire":"International bank wire","international_wire_transfer":"International bank wire transfer","intl_description":"You can credit your account via bank transfer. Please send funds to this account and please quote the reference number shown on your transfer.","intl_tip":"A reference number is a unique identifier assigned to any financial transaction including those made using a credit or debit card","lower_add":"$t(add_funds, uppercase)","mail_check":"Mail a check","mail_check_deposit":"mail a check for deposit","mail_check_example":"Mail a check example","mail_to":"Mail to","memo":"Memo","memo_value":"Please put the email address associated with your Vinovest account as the reference memo.","minimum_check_limit_reminder":"Please send an amount of at least $1,000. Average first time deposits are $5,000. ","new":"New","new_payment_source":"New payment method","next":"Next","option":"Choose a frequency","otheramount":"Other amount","pay_order":"Pay to the order of","placeholder":"e.g. %1$s%1$s","portfolio_tooltip":"Historically portfolios above $10,000 have performed significantly better than those funded below $10,000.","print_path":"international-wire-transfer","questions":"Questions? Speak with a specialist.","receiving_bank_dtls":"Receiving Bank Details","retry":"Retry","review":"2.9% credit card processing fee for U.S. cards. International cards will see an additional 1-2%","review_tooltip":"%1$s% credit card processing fee for U.S. cards. International cards will see an additional %1$s-%1$s%","review_transfer":"Review your transfer","reviewTranfer":{"amount":{"title":"[%key_id:83269566%]"},"completetransfer":"Complete Transfer","date":{"title":"Date","tooltip":" %1$s% credit card processing fee for U.S. cards. International cards will see an additional %1$s-%1$s%"},"frequency":{"description":"Your first transfer will be scheduled on the start date below, followed by recurring transfers based on your selected frequency.","title":"[%key_id:83269562%]"},"paymentTypeFeeLabel":{"ach":"ACH Fee","credit":"Credit Card Fee","default":"Fee"},"source":{"title":"[%key_id:83269560%]"}},"rootdeposit":{"add-funds":"Add funds","credit-card":"Enter credit card","failed":"Transfer failed","review-transfer":"Review your transfer","select-source":"Select source of funds"},"select_source":"Select source of funds","selectSource":{"alert-message":"Auto Invest is not available for bank wires or crypto payments at this time","back":"Back","bank-wire":"Bank wire","connect-bank":"Connect bank","credit-card":"Credit card"},"source":"Source","transfer_description":"Your first transfer will be scheduled on the start date below, followed by recurring transfers based on your selected frequency.","transfer_message_line1":"We\'ve initiated your transfer of {{currencySymbol}}{{amount}}","transfer_message_line2":"It may take up to {{minDay}}-{{maxDay}} days to be deducted","transfer_message_line3":"from your account","us_bank_wire":"US bank wire","vinovest":"Vinovest Inc.","vinovest_address":{"city_state":"Culver City,\xa0CA 90232","name":"Vinovest Inc.","street":"9900 Culver Blvd. unit PHE,"},"wire_description":"Please allow 5 business days for processing once received. Feel free to","wire_description_contd":"for any questions.","wire_mail_link":"contact us","wire_transfer_type":"Select a wire transfer type","select_other":"Other Amount","wire_transfer":{"field":"Reference Field","download":"Download and print","button_done":"Done"}}')},311:function(e){e.exports=JSON.parse('{"documents":"Documents","empty_button":"fund your account","empty_title":"You don\'t have any documents yet.","empty":{"button":"fund your account","title":"You don\'t have any documents yet."},"error":"There was an issue fetching your {{ document }}. Please try again or chat with us here \u{1f449}","error_options":{"account_statement":"account statement","account_statements":"account statements","available_month":"available month options"},"issued":"Date Issued","list_title":"TITLE","listTitle":"TITLE","loadmore":"Load more","mobile_statements":"Statements","mobileStatements":"Statements","statement":"Account Statement","statements":"Account Statements"}')},312:function(e){e.exports=JSON.parse('{"follow":"follow","newsletter":{"title":"Sign up for the newsletter!","subscribed":"You\'re now subscribed to our newsletter","email":"email address"},"support":{"title":"Want to talk wine investing?","reply":"will reply in 24hrs","hours":"9-5pm PST mon-fri"},"recent-articles":{"title":"Recent articles","champagne":"Champagne (Taste, Best Bottles, Prices 2021)","mimosa":"How to Make a Mimosa (Recipe, Wine Ideas, Serving)","sangria":"Easy Sangria Recipes (Tips, Best Wines)","malbec":"Malbec Wine - Winemaking, Best Wines, Prices (2021)","sauvignon-blanc":"Sauvignon Blanc (Best Wines, Taste, Prices 2021)"},"company":{"title":"Company","home":"Home","about":"About","vinovest-council":"Vinovest council","careers":"Careers","press":"Press"},"learn":{"title":"Learn","why-wine":"Why wine","how-it-works":"How it works","vinovest-100":"Vinovest 100","pricing":"Pricing"},"services":{"title":"Services","guarantee":"Guarantee","sustainability":"Sustainability","wine-futures":"Wine futures","for-advisors":"For Advisors","whiskeyvest":"Whiskeyvest"},"resources":{"title":"Resources","blog":"Blog","help":"Help","contact-us":"Contact us","privacy-policy":"Privacy policy","terms":"T&C","accessibility":"Accessibility"},"banner":{"simple-investing":"Simple, modern wine investing","intelligently-diversify":"Intelligently add wine to a diversified portfolio you can savor."}}')},313:function(e){e.exports=JSON.parse('{"cheersToYouBoth":"Cheers to you both! \u{1f942}","copied":"COPIED!","copyCTA":"COPY","finewine":"finewine","get3MonthsOfNoFees":"Get 3 months of no fees.","helpEveryoneGrowTheirMoney":"Help everyone in your circle grow their money. When a friend funds a Vinovest account through your invite link, you\u2019ll get an additional 3 months of free wine storage and management. Best part is, your friend also gets 3 months free as well!","investing":"investing","monthsManagedFree":"MONTHS MANAGED FREE","shareInviteLink":"SHARE INVITE LINK","shareTheWealth":"Share the wealth","social_share_msg":"I manage a fine wine investment portfolio with Vinovest. Use this link to get 3 months of waived fees for free","social_summary":"If you do it, we will get rewards","successfulInvites":"SUCCESSFUL INVITES","wine":"wine"}')},314:function(e){e.exports=JSON.parse('{"welcome.hello":"hello there"}')},315:function(e){e.exports=JSON.parse('{"acknowlege":"Acknowledge and continue","advisor":"Portfolio advisor","back":"Back","before_you_request":{"choose_the_option":{"description":"I want to...","index":"0","next":"select_wines","prev":"/before_you_liquidate_your_portfolio","subPage":"choose_the_option","title":"Please choose the option that best describes your goal"},"confirm_liquidation":{"description":"For security reasons, we\'ve sent a confirmation email to your associated email account. Your liquidation process is not complete until you click confirm on that email. Please make sure to check your spam folder in case you do not receive the email.","index":"3","next":"/","prev":"null","subPage":"confirm_liquidation","title":"Confirm liquidation"},"confirm_your_wines":{"description":"It will typically take 2_4 weeks to sell the wines on the market.","index":"2","next":"confirm_liquidation","prev":"select_wines","subPage":"confirm_your_wines","title":"Confirm your wines to be sold"},"feedback_options":{"completed":{"description":"We will notify you when the transactions are completed ","feedback":"We greatly value feedback from our investors, and would appreciate it if you could let us know why you are requesting to redeem your wines. We will never share your responses and they will have no effect on your request.","leave_feedback_placeholder":"Leave us any feedback  (Optional)","title":"Your wines are scheduled to be sold"},"option1":"I\u2019m requesting to sell due to market conditions","option2":"I\u2019m requesting to sell due to personal circumstances","option3":"I\u2019ve been dissatisfied with my experience on Vinovest","option4":"My fees/ account charges were too high","option5":"I choose not to respond","sharpe_ratio":{"one":"","other":""},"support":{"email":"Visit the","email_rest":"page for any questions","mobile_email":"email","mobile_questions":"for questions","support":"Support"}},"select_wines":{"bottle":"Bottle","case":"Case","description":"It will typically take 2_4 weeks to sell wines on the market.","holdings":{"quantity":"Quantity","sell":"Sell","title":"Your holdings"},"index":"1","next":"confirm_your_wines","note":"Note: Requesting a full liquidation automatically cancels any pending orders. You can view your order history from","prev":"choose_the_option","sell_wine":"Sell my wine","sell_wine_button":"Sell my wine","subPage":"select_wines","title":"Select wines to sell","transaction_tab":"transactions tab"},"sell_options":{"all":"Sell all of my wine collection","note":"Note: Requesting a full liquidation automatically cancels any pending orders. You can view your order history from","some":"Sell part of my wine collection","transaction":"transactions tab"}},"book_call":"Book a call now","choose_details":"I want to...","choose_title":"Please choose the option that best describes your goal","choose-the-option":{"description":"I want to...","index":"0","next":"select-wines","prev":"/before-you-liquidate-your-portfolio","subPage":"choose-the-option","title":"Please choose the option that best describes your goal"},"confirm_details":"It will typically take 2-4 weeks to sell the wines on the market.","confirm_title":"Confirm your wines to be sold","confirm-liquidation":{"description":"For security reasons, we\'ve sent a confirmation email to your associated email account. Your liquidation process is not complete until you click confirm on that email. Please make sure to check your spam folder in case you do not receive the email.","index":"3","next":"/","prev":"null","subPage":"confirm-liquidation","title":"Confirm liquidation"},"confirm-your-wines":{"description":"It will typically take 2-4 weeks to sell the wines on the market.","index":"2","next":"confirm-liquidation","prev":"select-wines","subPage":"confirm-your-wines","title":"Confirm your wines to be sold"},"contact_support":"contact our support team","corp_bonds":"Corp. bonds","did_not_get_email":"if you do not receive an email","early_penalty":"Early liquidation penalty","fee_description":"Enjoy fee free investing for 3 months. We\'re happy to see you invest long term.","fee_next_button":"Go to overview","fee_title":"Congratulations","feedback-options":{"before-you-request":{"acknowlege":"Acknowledge and continue","back":"Back","sharpe-ratio-description":"The Sharpe Ratio is a measure of risk-adjusted return. A greater ratio indicates higher returns while taking into consideration the risk of the asset.","sharpe-ratio":{"year":"Sharpe Ratio (%1$s - %1$s)"},"sticky-box":{"advisor":"Portfolio advisor","book-call":"Book a call now","liz":"Liz Dowty Mitchell","subtitle":"Book a call to take advantage of the upcoming limited wine releases and futures.","title":"Get access to this month\u2019s lucrative fine wine releases!"},"title":"What to know before you request to liquidate your portfolio"},"completed":{"description":"We will notify you when the transactions are completed ","feedback":"We greatly value feedback from our investors, and would appreciate it if you could let us know why you are requesting to redeem your wines. We will never share your responses and they will have no effect on your request.","leave-feedback-placeholder":"Leave us any feedback  (Optional)","title":"Your wines are scheduled to be sold"},"confirm-liquidation":{"contact-support":"contact our support team","did-not-receive":"if you do not receive an email","please":"Please","resend-email":"Resend email"},"fee-congrats":{"description":"Enjoy fee free investing for 3 months. We\'re happy to see you invest long term.","next-button":"Go to overview","title":"Congratulations"},"option1":"I\u2019m requesting to sell due to market conditions","option2":"I\u2019m requesting to sell due to personal circumstances","option3":"I\u2019ve been dissatisfied with my experience on Vinovest","option4":"My fees/ account charges were too high","option5":"I choose not to respond","subscribe":{"label":"Subscribe to the Vinovest newsletter to stay up to date"},"support":{"email":"Visit the","email-rest":"page for any questions","mobile-email":"email","mobile-questions":"for questions","support":"Support"}},"fine_wine":"Fine Wine","gold":"Gold","gov_bonds":"Gov. bonds","hk_equities":"HK Equities","irs":"Any redemptions you make will be reported to the internal revenue service, and your returns may be taxable. Vinovest does not provide tax advice, so if you have questions about the potential tax consequences of this, please consult your financial advisor or tax professional before you proceed.","liquid_details":"For security reasons, we\'ve sent a confirmation email to your associated email account. Your liquidation process is not complete until you click confirm on that email. Please make sure to check your spam folder in case you do not receive the email.","liquid_title":"Confirm liquidation","liquidate_info":"What to know before you request to liquidate your portfolio","liz":"Liz Dowty Mitchell","nature_asset":"Due to the nature of this asset class, once you initiate the sale of your wines, we search for buyers to purchase them. If you choose to sell before our AI algorithm deems your wines ready to be sold, it is likely that they have not yet reached their peak drinking window. We cannot guarantee the same selling price that they are currently valued at within your portfolio. The final sale price typically falls somewhere between our ask price and a buyer\'s offer price.","oil":"Oil","optional_feedback":"Leave us any feedback  (Optional)","penalty":"We assess a 3% early liquidation fee if you choose to withdraw within 60 days of your first wine being purchased. There are no additional selling fees for active account holders after 60 days.","please":"Please","resend_email":"Resend email","select_details":"It will typically take 2-4 weeks to sell wines on the market.","select_title":"Select wines to sell","select-wines":{"description":"It will typically take 2-4 weeks to sell wines on the market.","holdings":{"quantity":"Quantity","sell":"Sell","title":"Your holdings"},"index":"1","next":"confirm-your-wines","note":"Note: Requesting a full liquidation automatically cancels any pending orders. You can view your order history from","prev":"choose-the-option","sell-wine-button":"Sell my wine","subPage":"select-wines","title":"Select wines to sell","transaction-tab":"transactions tab"},"sell-options":{"all":"Sell all of my wine collection","note":"Note: Requesting a full liquidation automatically cancels any pending orders. You can view your order history from","some":"Sell part of my wine collection","transactionTab":"transactions tab"},"sharpe_ratio_description":"The Sharpe Ratio is a measure of risk-adjusted return. A greater ratio indicates higher returns while taking into consideration the risk of the asset.","sharpe_ratio_year":"Sharpe Ratio ({{startYear}}-{{endYear}})","sticky_box_subtitle":"Book a call to take advantage of the upcoming limited wine releases and futures.","sticky_box_title":"Get access to this month\u2019s lucrative fine wine releases!","subscribe":"Subscribe to the Vinovest newsletter to stay up to date","taxable":"Redemptions may be taxable","uk_equities":"UK Equities","us_equities":"US Equities","vinovest_algo":"The Vinovest algorithm and liquidity","wine_longterm":"Wine is a long term investment","wine_longterm_explain":"Investment-grade fine wine is a long-term asset class that relies on a diminishing supply and the increasing quality of the product to drive pricing. Selling one\'s wine investment early limits the potential returns and could possibly expose the investor to additional penalties and taxes. Just like a great wine, your investment takes time to develop, and patience leads to the best returns!","wine_market_returns":"Not only does fine wine provide above-market returns, but this asset class also provides strong risk-adjusted returns. This is especially important when investing in alternative assets as they are often viewed as a way of countering the volatility of other assets in one\'s investment portfolio.","wines_scheduled":"Your wines are scheduled to be sold"}')},316:function(e){e.exports=JSON.parse('{"depositCta":"Deposit to claim it now!","login":"Login","google-signin":{"button-label":"With Google","login":"Log In","signup":"Sign Up"},"okta-check":{"button":"Go to home page","message":"Check your inbox for a link to reset your password. For security reasons, this link will expire in 60 minutes. Please allow a few minutes for the email to arrive.","title":"Check your inbox"},"okta-login":{"button-create":"Create new account","button-forgot":"Forgot Password?","button-login":"Log in","empty-email":"Please enter email address","fail-login":"Please enter correct email address and password.","invalid-email":"Whoops, make sure you\'ve entered valid email address!","invalid-password":"Please enter password.","or":"Or"},"okta-register":{"button-account":"Have an account?","button-email":"Sign up with email","button-login":"Log in","disclaimer":"Signing up for the Vinovest account means you agree to the","disclaimer-cont":"and","email":"email","empty-email":"Please enter email address","error-name":"Please enter your full name","header-email":"Enter your email","header-invest":"Start investing today!","header-name":"Enter your full name","header-password":"Create a password","international":"Available to all international clients","invalid-email":"Whoops, make sure you\'ve entered valid email address!","newsletter":"You also agree to receive periodic newsletters from us","password":"password","password-char":"8 characters","password-cont":"and","password-min":"at least","password-num":"one number","password-special":"one special character","password-upper":"one uppercase letter","placeholder-first":"First Name","placeholder-last":"Last Name","privacy":"Privacy policy","show-password":"Show password","submit":"Continue","subscribe":"Stay up to date by subscribing to our emails.","terms":"Terms of service"},"okta-reset":{"button-back":"Go back to sign in page","button-submit":"Send Instruction","email-empty":"Please enter email address.","email-invalid":"Whoops, make sure you\'ve entered valid email address!","email-placeholder":"Email","message":"Enter your email and we\'ll send you instructions on how to reset your password.","title":"Reset your password"},"referral-confirmation":{"depositCta":"Deposit to claim it now!","welcomeToVinovest":"Welcome to Vinovest. Thanks to your friend, you have been given three months of waived fees on Vinovest!","woohooTitle":"Woohoo!  You have 3 free months"},"uppercase":"{{text, uppercase}}","welcomeToVinovest":"Welcome to Vinovest. Thanks to your friend, you have been given three months of waived fees on Vinovest!","woohooTitle":"Woohoo!  You have 3 free months"}')},317:function(e){e.exports=JSON.parse('{"backLink":"Back to Home","subtitle":"The page is missing or you assembled the link incorrectly","title":"Page Not Found"}')},318:function(e){e.exports=JSON.parse('{"account-value":{"title":"Total Account Value","today":"Today,","tooltip":"Your total account value is represented in this chart. All deposits and estimated wine values will be represented here."},"all":"All","american":"American","auto-invest":{"description":"Auto Invest enables you to easily build a long-term wine portfolio through dollar cost averaging. Simply pick an amount and desired frequency (Weekly, monthly, etc.) to begin.","description_uppercase":"$t(auto-invest.description, uppercase)","enroll-button":"Save {{amount}}% now","title":"Save {{amount}}% on your fees by setting up Auto Invest"},"book-call":{"book-button":"Book a call now","subtitle":"Learn about building a wine portfolio to hedge against uncertain market conditions","title":"Book a call with one of our wine experts"},"bordeaux":"Bordeaux","burgundy":"Burgundy","champagne":"Champagne","california":"California","piedmont":"Piedmont","south_australia":"South Australia","rest_of_world":"Rest of world","whiskey-banner":{"early-access":"Get early access!","whiskey-investing":"Whiskey investing","learn-more":"Learn more"},"deposit-banner-list":{"pending-message":"You have a deposit in progress. It typically takes 2-4 business days for your deposit to be confirmed by your bank and transferred into your Vinovest account. Visit the","pending-message-cont":"tab to see more details","pending-message-mobile":"You have a deposit in progress. Visit the","pending-message-mobile-cont":"tab to see more details.","sourced-wine-message":"Deposit received! Our AI algorithm is sourcing bottles from 5,000 different vendors to find you the best available prices. Due to the nature of this asset class, this process can take up to 3 weeks. Visit the ","sourced-wine-message-cont":"tab to see more details","sourced-wine-message-mobile":"Deposit received! Visit the","transaction-link":"Transactions"},"diversification":{"add-funds-2":"to your account","add-funds-link":"adding funds","addFunds":"Increase your diversification over time by","description-bar":"You will see the breakdown of your holdings by region once your wines are purchased for you","title":"Diversification"},"historical-returns":{"returns":"Historical returns"},"italian":"Italian","personal-snapshot":{"account-level":"Account level","friend":"friend","investing":"Investing","investment-plan":"Investment plan","net-returns":"Net returns to date","not-investing":"Not yet set","snapshot-header":"Here\'s your account snapshot","welcome":"Welcome","wine_collection":"Your wine collection"},"quality-value":{"authenticity-header":"Authenticity","description":"Our direct relationships with wineries and trusted industry partners ensure the authenticity and provenance of every bottle we purchase.","insurance-description":"Vinovest offers a robust insurance policy that offers replacement at full market value in cases of breakage or theft.","insurance-header":"Full insurance","stored-description":"Our state-of-the-art storage facilities keep your wines in perfect aging conditions.","stored-header":"Perfectly Stored"},"recommended-banner":{"fund":"Fund your Account","investing":"Investing","investment":"investment","plan":"plan is","recommend":"Your recommended"},"referal":{"message":" When you share your unique referral with a friend, both of you will be entered into a raffle to have $1000 of Vinovest credit added to your wine portfolio. The more successful referrals you have, the more chances you get to win. A successful referral is when a friend uses your link and funds their account. The winner will be chosen randomly and announced 11/20/2020.","sharelink":"Get Share Link","win":"Win {{currencySymbol}}{{value}}"},"referral-module":{"earn":"Earn rewards.","earn-description":"Earn 90 days of investing without advisory fees for each friend who joins Vinovest through your invite link. Your friends will get their first 90 days of fees waived too","invite":"Invite friends.","learn":"Learn More"},"rest":"Rest of the world","returns-box":{"all":"All Time","appreciation":"Appreciation","fees":"Fees","title":"Returns","total":"Total","ytd":"2021 ytd","ytd_upper":"$t(returns-box.ytd, uppercase)"},"rewards-box":{"cycles":"Fee free payment cycles","cycles-message":"Your last month of rewards is","cycles-period":"Months","fees-description":"invites accepted","fees-title":"Management fees saved","link":"Copy Link","link-mobile":"Copy","snapshot-description":"You and your friend get an additional 3 months of free wine storage and management when a friend funds their Vinovest account through your invite link.","title":"Rewards"},"rhone":"Rhone","wine-expert":"wine expert"}')},319:function(e){e.exports=JSON.parse('{"add-funds":"Add funds","buttons":{"arrow-first":"Load","arrow-second":"more"},"cellar-list":{"add-funds":"Add funds","bottle":"Per Bottle","case":"Per Case","futures":"(Wine Futures)","power":"Buying power","disclaimer":"You will not be charged fees on remaining cash in your portfolio"},"condition":{"authentic":"Authentic","coverage":"Full coverage","excellent":"Excellent","insurance":"Insurance","title":"Condition","verfication":"Verification"},"description":{"read":"Read more"},"graphical-price-history":{"title":"Est. Price Per Case Of","tooltip":"Estimated price is the best price on average for which this wine was purchased recently in the market."},"hero":{"futures":"(Wine Futures)","learn":"learn more","pending-learn":"Learn more","title":"featured: from your wine cellar"},"wine-bottles-totals":{"bottle":"bottle","bottles":"bottles","case":"Case","of":"of"},"wine-cellar-model":{"average-hold":"Average hold time","contact":"Want to visit your wines? We\u2019d be happy to arrange a visit to one of our storage facilities. Please","contact-contd":"for more details.","contact-link":"contact us","cost":"Avg. Cost basis","percentage-portfolio":"% of portfolio","position":"Your position","position-total":"Position total","quantity":"Quantity","storage":"Storage location"},"wine-cellar":{"buttons":{"load":"Load More"},"cellar-view-toggle":{"grid":"Grid","List":"List","list":"List"},"empty-cellar":{"add-funds":"Add funds","empty":"Start building your wine cellar!","funded":"Sit tight as we look for great deals"},"list-view-titles":{"avg-cost":"Avg. Cost","basis":"basis","position":"Position","quantity":"Quantity","tooltip-cost-basis":"This is the average purchase price per bottle.","tooltip-position":"Position total is the estimated value of bottles owned, net of fees, plus pending orders","tooltip-quantity":"Quantity is the amount of individual bottles or cases that you own. Case sizes can have 3, 6 or 12 bottles and price varies on the wine depending on the case size.","total":"total","wine":"Wine"},"title":"Your wine cellar","totals":{"basis":"basis","bottles":"bottles","cell_total":"Totals","cost":"Cost","position":"Position","quantity_title":"Quantity","tooltip-position":"Position total is the estimated value of bottles owned, net of fees, plus pending orders","tooltip-quantity":"Quantity is the amount of individual bottles or cases that you own. Case sizes can have 3, 6 or 12 bottles and price varies on the wine depending on the case size.","tooltip-total-cost":"This is the total cost for all of your wine purchased.","total":"total","total_title":"Total"}},"wine-maker-notes":{"title":"Winemaker notes"}}')},320:function(e){e.exports=JSON.parse('{"buttons":{"continue":"Continue","next":"Next"},"minimum-capital":{"title":"How much are you planning on investing?","minimum":"(Account minimum)","premium":"(Premium Plan)","grandcru":"(Grand Cru Plan)","currency":"{{currencySymbol}}{{amount}}"},"plans":{"aggressive_investing":"Aggressive Investing","aggressive":["Are looking for a fine wine portfolio with target allocation toward high-growth wine regions","Have a medium to long-term timeline","Have had experience investing another alternative asset classes"],"balanced_investing":"Balanced Investing","balanced":["Are looking for a fine wine portfolio with maximum diversification","Have a medium to long-term timeline ","May be newer to investing outside the stock market"],"conservative_investing":"Conservative Investing","conservative":["Are looking for a fine wine portfolio optimizing for downside protection","Have a long-term timeline","Want a globally diversified portfolio of wines with a proven historical track record"],"your-portfolio":{"great":"Great if you...","label":"Here\'s your custom plan","next-button":"Next"}},"quiz":{"question":"QUESTION","of":"OF","options":{"question-options":[{"name":"investingStyle","options":["Conservative","Moderate","Aggressive"],"text":"How would you describe your investing style?"},{"multiple":"1","name":"goalsWithVinovest","options":["Earn higher risk-adjusted returns than my other investments","Diversify into alternative asset classes","Invest in something that I am passionate about"],"text":"What is your primary motivation for joining Vinovest?"},{"name":"anticipatedCashAccess","options":["Less than 3 years","Between 3 and 7 years","More than 7 years"],"text":"When do you anticipate needing access to cash from your wine purchase?\\n"}],"question1":["Conservative","Moderate","Aggressive"],"question2":["Earn higher risk-adjusted returns than my other investments","Diversify into alternative asset classes","Invest in something that I am passionate about"],"question3":["Less than 3 years","Between 3 and 7 years","More than 7 years"]}},"your_portfolio":{"plan_subtitle":"Great if you...","plan_title":"Here\'s your custom plan"},"form":{"notice":"Noted: Your investment plan determines the blend of investments your money is allocated to. It will only affect future investments and will not re-balance your current positions."},"button_cancel":"Cancel","button_save":"Save","error_post":"Unable to update your information at this time."}')},321:function(e){e.exports=JSON.parse('{"title":"Start investing today!","email_placeholder":"Enter your email","continue":"continue","disclaimer":"signing up for the vinovest means you agree to the","end":"end","privacy":"privacy policy","terms":"terms of service","available_to_clients":"available to all international clients"}')},322:function(e){e.exports=JSON.parse('{"title":"Terms & Conditions","general":{"title":"GENERAL","paragraph1":"At Vinovest, we strive to offer a first-class experience for our members, and uphold the highest degree of\\nprofessionalism. The following terms and conditions (\u201cTerms\u201d) constitute a binding agreement between you and\\nVinovest, its affiliates, and its and their parent and subsidiary companies (collectively, \u201cVinovest,\u201d \u201cwe,\u201d\\nor \u201cus\u201d) with respect to your use of this website (the \u201cVinovest Site\u201d) and the services available on such\\nplatforms (together with the Vinovest Site, the \u201cServices\u201d), including any Content (as defined below). If\\nyou do not agree to these Terms, please do not use or access the Vinovest Site or Services for any purpose.\\nAdditional policies, terms, and conditions applicable to certain Services, specific areas of the Vinovest\\nSite, or to particular content or transactions, may also be posted in particular areas of the Vinovest Site\\nand, together with these Terms, govern your use of those areas. Any such additional policies, terms, and\\nconditions are incorporated into these Terms. If any inconsistency exists between these Terms and such\\nadditional policies, terms, and conditions, such additional policies, terms, and conditions applicable to\\nthose specific areas of the Vinovest Site will be controlling. Vinovest reserves the right to cancel and/or\\nterminate any user\u2019s account for any violation of these Terms or other terms stated on the Vinovest Site.\\nFraudulent behavior, creating multiple accounts to acquire additional credits, spamming, flaming, excessive\\nuse of profanity or abusive language, on the Vinovest Site or any other website in regards to Vinovest, or\\nwhile contacting any of our team, will not be tolerated.","paragraph2":"You must be at least 21 years (18 outside of the United States) of age to use the Vinovest Site and purchase\\nalcohol through the Services. A valid government-issued ID may be required upon delivery","paragraph3":"Wine sales are solicited, offered, accepted, made, and delivered by a licensed winery who receives all\\norders. To address possible state alcoholic beverage law concerns, Vinovest pays for new member referrals\\nand discount shipping through an instant rebate that discounts a portion of the price of each item the\\nexisting member purchases. Void where prohibited","paragraph4":"The Vinovest Site also provides pricing and market information. While we endeavor to give you accurate\\ninformation, we cannot assure you that any of the market and value information that we give you is accurate\\nas of the date you access it and we undertake no obligation to update such information or notify you of any\\nchanges to such information."},"privacy":{"title":"PRIVACY","paragraph1":"Your use of the Vinovest Site and Services is subject to our Privacy Notice located at","paragraph2":"incorporated herein by reference, which applies to the collection, use, disclosure and other processing of\\npersonal information by Vinovest."},"account":{"title":"YOUR ACCOUNT","registration":"Registration.","membership":"Member Information Changes.","payment":"Payment.","paragraph1":"If you wish to utilize Vinovest Services, you agree to complete the initial\\nregistration process according to the requirements stated on the Vinovest Site, and to provide accurate and\\ncomplete information including, but not limited to, your legal name, age, billing address, delivery address\\nif different), email address, and telephone number. When making a purchase/investment on or through our\\nServices, you must provide accurate and complete information as required when using a credit card, other\\npayment card or bank information, including the cardholder/account holder name, payment card number/account\\nnumber, expiration date (if applicable), and if requested, card security code, at the time of submitting\\nyour order form. You represent and warrant to Vinovest that your use of a payment card or your account in\\nconnection with any purchase you make on or through Vinovest Services is authorized and legal. As part of\\nthe initial registration process, you must choose a username and a password to use when accessing the\\nServices. For your protection, you must keep your username and password secret. You must immediately notify\\nVinovest if you learn or suspect that the security of your username or password has been breached. You are\\nresponsible for any loss or damage arising from your failure to protect your username or password.","paragraph2":"You are responsible for updating your registration information, and\\npayment service or payment card information, as applicable, and for making sure that the billing address in\\nyour registration information is consistent with the billing address for your payment service or payment\\ncard. You are also responsible for promptly notifying your payment service or payment card issuer of any\\nchanges to your billing information or of any loss, theft, or unauthorized use of your payment service\\naccount or payment card number.","paragraph3":"The total amount to be paid by you for your order will be the sum of the prices for the\\nproducts you select or those selected for you, all applicable taxes, and shipping and handling charges.\\nPayment is due when you submit your order, and you hereby authorize Vinovest to charge such an amount to\\nyour payment card at that time.","paragraph4":"All alcohol listings are intended for individuals who are 21 years of age or older. Vinovest reserves the\\nright to refuse service, terminate accounts, remove or edit content, or cancel orders, in its sole\\ndiscretion. Vinovest provides all of its services in accordance with law and a shipment of wine requested by\\nyou may be suspended or made impossible due to applicable federal, state, county, city and local laws in\\nyour jurisdiction. In that case, we will suspend shipping until we can comply with law."},"program":{"title":"VINOVEST PROGRAM","paragraph1":"When you start an account with Vinovest, you will be depositing money into your Vinovest account. You then\\nauthorize us to put together a portfolio of wine based on the amount you have deposited. You understand that\\nwe will be buying actual wine and storing it in our secure facilities. This wine belongs to you and not\\nVinovest; it is your asset, not an asset of Vinovest. We are simply holding the wine for you. Wines held in\\nstorage have an insurance policy protecting it at full current market value, with appraisals updated\\nannually. You authorize us to sell wine on your behalf. Any leftover amounts in your account will be used to\\npay for Vinovest\u2019s management fees. If there are amounts left after the payment of your management fees, you\\ncan leave such amount in your account or ask for it to be returned to you.","paragraph2":{"sentence1":"Each time you login to your account, you will be able to see the liquidation value of your portfolio.","sentence2":"You\\nmay, at any time, ask that we liquidate your portfolio.","sentence3":"You acknowledge that Vinovest cannot guarantee that\\nthe value of the portfolio will increase, nor can we guarantee that the value will not decrease. ","sentence4":"We assess a 3% early liquidation penalty if you choose to withdraw less than\\n60 days after the initial purchase of wines for your account. There are no additional selling fees for\\nactive account holders past 60 days after the initial purchase. Once liquidated, we will deposit the funds\\nin your account, which you may withdraw at any time thereafter.","rest":"If you ask\\nfor your portfolio to be liquidated, we will endeavor to do so as soon as practicable, but in any event\\nwithin 4 weeks of your request. "},"paragraph3":"Also, you may request us to ship your wine to you for consumption (minimum one case at a time). In such an\\nevent, we will ship the wine to you at your expense (deducting shipping costs, duties, VAT, tariffs and\\nother taxes from the cash balance of your account) and will ship it as soon as practicable. Shipping and\\ndelivery of wine is always subject to the laws of the jurisdiction where the wine is being shipped (whether\\nfederal, state, county, city or local law).","last-sentence":" You acknowledge that the value of your portfolio will decrease by any wine shipped to you for consumption."},"risk":{"title":"RISK OF LOSS","paragraph1":"All items purchased from Vinovest are speculative in nature. The price of the wine you purchase may decrease\\nor lose its value completely. If you request delivery, delivery will be made pursuant to a shipment\\ncontract. This means that the risk of loss and title for such items pass to you upon our delivery to the\\ncarrier."},"disclaimer":{"title":"DISCLAIMER OF WARRANTIES","paragraph1":"THE VINOVEST SITE AND SERVICES AND THE CONTENT PROVIDED ON OR THROUGH THE VINOVEST SITE AND SERVICES IS\\nPROVIDED TO YOU ON AN \u201cAS IS\u201d AND \u201cAS AVAILABLE\u201d BASIS, WITHOUT WARRANTIES OF ANY KIND, AND VINOVEST HEREBY\\nDISCLAIMS ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO\\nANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT.\\nNEITHER VINOVEST NOR ANY PERSON ASSOCIATED WITH VINOVEST MAKES ANY REPRESENTATION OR WARRANTY WITH RESPECT\\nTO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE VINOVEST SITE OT ITS\\nCONTENT. WITHOUT LIMITING THE FOREGOING, NEITHER VINOVEST NOR ANYONE ASSOCIATED WITH VINOVEST REPRESENTS OR\\nWARRANTS THAT THE VINOVEST SITE, SERVICES OR THE CONTENT WILL BE ACCURATE, RELIABLE, ERROR-FREE OR\\nUNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SITES OR THE SERVER THAT MAKES THEM AVAILABLE ARE\\nFREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE VINOVEST SITE OR ITS CONTENT WILL OTHERWISE MEET\\nYOUR NEEDS OR EXPECTATIONS."},"liability":{"title":"LIMITATION OF LIABILITY","paragraph1":"IN NO EVENT WILL VINOVEST, ITS LICENSORS OR CONTENT PROVIDERS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY\\nLEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE VINOVEST SITE AND\\nSERVICES, OR ANY CONTENT, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY OR\\nPUNITIVE DAMAGES OF ANY KIND WHATSOEVER, WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT\\nOR OTHERWISE, EVEN IF FORESEEABLE. USE OF THE VINOVEST SITE, SERVICES OR ITS CONTENT IS AT YOUR SOLE RISK."},"indemnification":{"title":"INDEMNIFICATION","paragraph1":"You agree to defend, indemnify and hold harmless Vinovest and its officers, directors, employees, agents,\\nlicensors and content providers from and against any claims, liabilities, damages, judgments, awards,\\nlosses, costs, expenses or fees (including reasonable attorneys\u2019 fees) resulting from your violation of\\nthese Terms, or your use of Vinovest Site or Services."},"trademarks":{"title":"TRADEMARKS","paragraph1":"The trademarks and service marks displayed on the Vinovest Site and Services are the registered and\\nunregistered trademarks, service marks and trade dress of Vinovest and its licensors. In addition, graphics,\\nlogos, page headers, button icons, scripts, and service names included in or made available through the\\nVinovest Site and Services are trademarks, service marks or trade dress of Vinovest or our partners. Such\\ntrademarks, service marks and trade dress may not be used in connection with any product or service that is\\nnot Vinovest, in any manner that is likely to cause confusion among customers, or in any manner that\\ndisparages or discredits Vinovest. All trademarks not owned by Vinovest that appear in any Service are the\\nproperty of their respective owners, who may or may not be affiliated with, connected to, or sponsored by\\nVinovest."},"copywrite":{"title":"COPYRIGHT","paragraph1":"All content included on or made available through the Vinovest Site and Services, such as text, graphics,\\nlogos, button icons, images, audio clips, digital downloads, and data compilations is the property of\\nVinovest or its content suppliers and protected by United States and international copyright laws. The\\ncompilation of all content included in or made available through the Vinovest Site and Services is the\\nexclusive property of Vinovest and protected by U.S. and international copyright laws."},"submitted-works":{"title":"SUBMITTED MATERIALS AND IDEAS","paragraph1":"All comments, suggestions, ideas, drawings, images, concepts, or other information or materials disclosed or\\noffered to us by you through the Services or in response to solicitations on the Vinovest Site shall be\\ndeemed to be property of Vinovest."},"links":{"title":"LINKS TO THIRD-PARTY WEBSITES","paragraph1":"\u200dThe Vinovest Site or Services may contain links to third-party websites. These links are provided for your\\nconvenience only. Vinovest has no control over third-party websites and we are not responsible for the\\ncontent of such websites or the privacy practices of those third-party websites. If you decide to access a\\nthird-party website linked from the Vinovest Site, you do so entirely at your own risk and your use of those\\nsites is subject to those websites\u2019 terms and conditions and privacy policies."},"disputes":{"title":"DISPUTES","paragraph1":" READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS AND IMPACTS HOW CLAIMS YOU AND VINOVEST MAY HAVE AGAINST\\nEACH OTHER ARE DETERMINED."},"arbitration":{"title":"Agreement to Arbitrate","paragraph1":"You and Vinovest agree that any claim or dispute at law or equity that has arisen or may arise between us\\nrelating in any way to this or previous versions of the Vinovest Terms, your use of the Vinovest Site or\\nServices, or to any products sold or distributed by Vinovest or through the Vinovest Site or Services will\\nbe resolved by binding arbitration, rather than in court. The Federal Arbitration Act applies to this\\nagreement","paragraph2":"There is no judge or jury in arbitration, and court review of an arbitration award is limited. However, an\\narbitrator can award on an individual basis the same damages and relief as a court (including injunctive and\\ndeclaratory relief or statutory damages) and must follow these Terms as a court would","paragraph3":"To begin an arbitration proceeding, you must send a letter requesting arbitration and describing your claim\\nto Vinovest. The arbitration will be conducted by JAMS. The JAMS rules are available at jamsadr.com or by\\ncalling 1-800-352-5267. Payment of all filing, administration and arbitrator fees will be governed by the\\nJAMS rules","paragraph5":"The arbitrator will decide all claims in accordance with applicable law. The arbitrator shall not be bound\\nby rulings in prior arbitrations involving other Vinovest members, but is bound by rulings in prior\\narbitrations involving the same Vinovest member to the extent required by applicable law. The arbitrator\'s\\naward shall be final and binding and judgment on the arbitrator\u2019s award may be entered in any court having\\njurisdiction","class-action":{"title":"Prohibition of Class, Representative, and Consolidated Actions","paragraph1":"You and Vinovest agree that each of us may bring claims against the other only on an individual basis and\\nnot as a plaintiff or class member in any purported class or representative action. Unless both you and\\nVinovest agree otherwise, the arbitrator may not join more than one party\u2019s claims, and may not adjudicate\\nor determine any form of a representative, class, or consolidated proceeding. The arbitrator may award\\nrelief (including monetary, injunctive, and declaratory relief) only in favor of the individual party\\nbringing the claim, if such relief is warranted by the facts and law. Any relief awarded by the arbitrator\\nwill not affect other Vinovest members.","paragraph2":" If for any reason a claim proceeds in court rather than in arbitration both you and Vinovest each waive any\\nright to a jury trial. You and Vinovest also both agree that you or we may bring suit in court to enjoin\\ninfringement or other misuse of intellectual property rights."},"paragraph4":"The arbitration hearing will be held in the country in which you reside or at another mutually agreed\\nlocation. You or Vinovest may elect to have the arbitration conducted by telephone or based solely on\\nwritten submissions, which election shall be binding on you and Vinovest subject to the arbitrator\u2019s\\ndiscretion to require an in-person hearing."},"law":{"title":"GOVERNING LAW AND JURISDICTION","paragraph1":" Any dispute or claim relating in any way to these Terms or previous versions of these Terms, your use of the\\nVinovest Site or Services, or any products sold or distributed by Vinovest or through the Vinovest Site or\\nServices, shall be governed by and construed in accordance with the laws of the State of California without\\ngiving effect to any choice or conflict of law provision or rule.","paragraph2":" Unless you and Vinovest agree otherwise, in the event that the Agreement to Arbitrate above is found not to\\napply to you or to a particular claim or dispute, any legal suit, action or proceeding arising out of or\\nrelated to these Terms or previous versions of these Terms, your use of the Vinovest Site or Services, or\\nany products sold or distributed by Vinovest or through the Vinovest Site or Services shall be instituted\\nexclusively in the federal or state courts located in Los Angeles, California. You agree to waive any and\\nall objections to the exercise of jurisdiction over you by such courts and to venue in such courts."},"severability":{"title":"WAIVER AND SEVERABILITY","paragraph1":"No waiver of these Terms by Vinovest shall be deemed a further or continuing waiver of such Terms or any\\nother term or condition, and any failure of Vinovest to assert a right or provision under these Terms shall\\nnot constitute a waiver of such right or provision. If any provision of these Terms is held by a court of\\ncompetent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be\\neliminated or limited to the minimum extent such that the remaining provisions of these Terms will continue\\nin full force and effect."},"agreement":{"title":"ENTIRE AGREEMENT","paragraph1":"These Terms and our Privacy Notice constitute the sole and entire agreement between you and Vinovest with\\nrespect to the Vinovest Services and supersede all prior and contemporaneous understandings, agreements,\\nrepresentations and warranties, both written and oral, with respect to the sites."},"modifications":{"title":"MODIFICATIONS","paragraph1":"Vinovest reserves the right to make changes to these Terms at any time. If Vinovest makes a material\\nmodification to these Terms, we will notify you by displaying a prominent announcement above the text of the\\nTerms or at Vinovest.co, as appropriate, for thirty (30) days, and that will be deemed sufficient\\nnotification of such changes.","paragraph2":"The date these Terms were last updated is set forth at the top of this page."},"contact":{"title":"CONTACT INFORMATION","paragraph1":"If you have questions or comments about these Terms or the Vinovest Site or Services, please write, phone or\\nemail us via the contact information below:"},"address":{"name":"Vinovest, Inc.","street":"9900 Culver Blvd","city-state-zip":"Culver City, CA 90232","phone":"949-415-8730","email":"help@vinovest.co"}}')},323:function(e){e.exports=JSON.parse('{"buttons":{"fee_free":"Get fee free investing now!","wine_certificate":"Wine certificate"},"details":{"management":"Management","early_withdrawal":"Early withdrawal"},"items":{"completed":"Completed","deposit":"Deposit","fee":"Fee","free":"Free","funds":"Funds","in-progress":"In Progress","monthly":"Monthly","pending":"Deposit","purchase":"Purchase","sold":"Sold","wine":"Wine","withdrawn":"Withdrawn","sourcing":"Sourcing wine","buy":"Buy","fee-credit":"Fee credit","adjust":"Adjustment"},"labels":{"bottles":"Bottles","date":"Date","price_per_bottle":"Price per bottle","quantity":"Quantity","size":"Size","case_size":"1 Case of","ml":"ML","vintage":"vintage"},"messages":{"empty":"Your completed transactions will show up here.","empty_transaction":"No pending transactions.","failed":"Transaction failed. Please try again.","no_match":"No matches. Please try again.","pending":"Pending"},"section":{"empty":"You don\'t have any transactions yet","fund":"Fund your Account"},"title":"Transactions","transactions-header":{"all_time":"All time","all_transactions":"All Transactions","buy":"Buy","current_year":"This year","deposit":"Deposit","fee":"Fee","last_90":"Last 90 days","last_month":"Last month","month":"This month","previous_year":"Last year","sell":"Sell","withdraw":"Withdraw"},"transactions-list":{"amount":"Amount","date":"Date","description":"Description","failed":"Failed","pending":"Pending","type":"Type"},"wine-details":{"bottle":"bottle","of":"of","sourcing":"Sourcing","more_case":"more case","more_cases":"more cases","sourcing_wine_statement":"We are sourcing the best available wine for your investment account"}}')},324:function(e){e.exports=JSON.parse('{"wine_futures":{"header":{"title":"Unprecedented Opportunity with Wine Futures","button":"Book a Call"},"opportunity":{"top_description":"Why should you care?","title":"A once in a decade opportunity","bottom_description":"We are hearing through the grapevine that this year\u2019s en primeurs will be priced substantially lower than previous years, giving investors greater upside on future returns. This global pandemic presents a once in a decade opportunity."},"recommended":{"title":"What do we recommend?","description":"If you want to take advantage of this incredibly rare opportunity, we highly recommend you deposit funds into your account ASAP. Our investment team will leverage your uninvested funds to purchase wine futures throughout June. The window to grab these top tier investments can be just a couple of hours, so it\'s important your account has cash at the ready. Once we have allocated your funds you will be notified."},"should_do":{"title":"What you should do","top_description":"We strongly recommend loading up your Vinovest account now with additional cash balance so that our algorithm and investment team can help you take advantage of fast-moving en primeur opportunities over the month of June.","bottom_description":"Availability for these wines can run out within hours, so don\u2019t miss out."},"futures":{"title":"Invest in wine futures","top_description":"What is it?","bottom_description":"En Primeur (wine futures) is buying wine that is still in the barrel. Critics and other industry insiders have given initial ratings, but these wines are still 2 to 3 years out from being released. En primeur is typically only available to industry insiders, but we at Vinovest are pleased to be able to bring you access to this opportunity."}},"why_wine":{"outpreform":{"title_1":"Wine outperforms the S&P 500 by","title_2":"1000%","title_3":"over the last","title_4":"20 years","top_description":"A wine for every occassion","title":"Wine performance, explained","description":"Simple mechanisms drive wine values up over time. These factors make wine suitable investments for good times and the not so good times.","scarcity":"Scarcity","aging":"Aging","brand":"Brand Equity","hero_title":"Discover wine investing","hero_description":"Learn why wine investing not only delivers delight, but also consistent returns that have outpaced the stock market.","hero_button":"Get Started"},"steady_yields":{"top_description":"performance you can see ... and taste","description":"Wine has outperformed the S&P for the past 30 years, including during downturns.","graph_text":"Wine","label_sp500":"S&P 500","title":"Steady yields","label_wine":"Wine"},"quyality":{"header_1":"Authenticity, guaranteed","header_2":"Stored and safe","header_3":"Insured","description_1":"We inspect every bottle for authenticity and guarantee your wine\u2019s provenance","description_2":"Our facilities are monitored 24/7 and are climate controlled.","description_3":"Each bottle is insured in the case of Force Majeure or other catastrophic events.","title":"Security you can savor","description":"Grow your passion and returns"},"network":{"title_1":"Vinovest provides more than great returns","title_2":"Access to limited vintages","title_3":"Grow your passion","title_4":"Wine events","description_1":"Join a global network of wine lovers and experts","description_2":"Through our extensive wine network we are granted access to up and coming vineyards, private sales, and limited releases for your portfolio.","description_3":"Vinovest shares details about our wine investing so you can learn more about your portfolio and your passion. Consult wine experts with any questions you have.","description_4":"Feel connected to the Vinovest community and meet people just like you. Join tastings with our Master Sommeliers who host some of the world\u2019s greatest winemakers and vineyards."}}}')},325:function(e){e.exports=JSON.parse('{"back_link":"\u8fd4\u56de\u9996\u9875","subtitle":"\u8be5\u9875\u9762\u5df2\u4e22\u5931\u6216\u8005\u60a8\u7684\u9875\u9762\u94fe\u63a5\u4e0d\u6b63\u786e","title":"\u627e\u4e0d\u5230\u7f51\u9875"}')},326:function(e){e.exports=JSON.parse('{"yuan":{"name":"\u539f\u6676\u5973\u58eb","position":"\u7537\u7235\u53e4\u5821\u4e9a\u6d32\u5e02\u573a\u4ee3\u8868"}}')},327:function(e){e.exports=JSON.parse('{"account_auto_invest":{"subtitle":"\u67e5\u770b\u8d26\u5355\u8bb0\u5f55\u5e76\u7ba1\u7406\u81ea\u52a8\u6295\u8d44","title":"\u7ba1\u7406\u81ea\u52a8\u6295\u8d44"},"account_email":{"email":"\u7535\u5b50\u90ae\u4ef6\u5730\u5740","error_invalid_email":"\u90ae\u4ef6\u5730\u5740\u65e0\u6548","label_email":"\u7535\u5b50\u90ae\u4ef6\u5730\u5740","notice":"\u4f1f\u8bfa\u7ea2\u9152\u5c06\u901a\u8fc7\u6b64\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u5411\u60a8\u53d1\u9001\u6709\u5173\u60a8\u5e10\u6237\u72b6\u6001\u7684\u91cd\u8981\u4fe1\u606f\uff0c\u56e0\u6b64\u8bf7\u8f93\u5165\u60a8\u6700\u8fd1\u5e38\u4f7f\u7528\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002","placeholder_email":"\u4f8b\u5982\uff1aexample@email.com","updated":"\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u5df2\u66f4\u65b0"},"account_investment_plan":{"notice":"\u8bf7\u6ce8\u610f\uff1a\u60a8\u7684\u6295\u8d44\u8ba1\u5212\u51b3\u5b9a\u4e86\u60a8\u7684\u8d44\u91d1\u88ab\u5206\u914d\u7684\u6295\u8d44\u6bd4\u4f8b\u3002\u8fd9\u53ea\u4f1a\u5f71\u54cd\u672a\u6765\u7684\u6295\u8d44\uff0c\u800c\u4e0d\u4f1a\u91cd\u65b0\u5e73\u8861\u60a8\u76ee\u524d\u7684\u5934\u5bf8\u3002","title":"\u6295\u8d44\u8ba1\u5212","updated":"\u60a8\u7684\u6295\u8d44\u8ba1\u5212\u5df2\u66f4\u65b0"},"account_mobile":{"error_invalid":"\u7535\u8bdd\u53f7\u7801\u65e0\u6548","label":"\u7535\u8bdd\u53f7\u7801","success_updated":"\u60a8\u7684\u7535\u8bdd\u53f7\u7801\u5df2\u66f4\u65b0","title":"\u624b\u673a\u53f7\u7801"},"account_personal_information":{"description_address":"\u8be5\u5730\u5740\u5e94\u8be5\u53ef\u7528\u4e8e\u7a0e\u6536\u76ee\u7684\u3002","label_address":"\u8be6\u7ec6\u5730\u5740","label_city":"\u57ce\u5e02","label_country":"\u56fd\u5bb6","label_first":"\u540d","label_fullname":"\u5168\u540d","label_last":"\u59d3","label_state":"\u5dde","label_zip":"\u90ae\u7f16","placeholder_address":"\u4f8b\u5982\uff1a\u67d0\u5927\u8857123\u53f7","placeholder_city":"\u4f8b\u5982\uff1a\u65e7\u91d1\u5c71","placeholder_first":"\u4f8b\u5982\uff1a\u7ea6\u7ff0","placeholder_last":"\u4f8b\u5982\uff1a\u53f2\u5bc6\u65af","placeholder_zip":"\u4f8b\u5982\uff1a90103","success":"\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u5df2\u66f4\u65b0","title":"\u4e2a\u4eba\u4fe1\u606f"},"account_settings":{"auto_invest":"\u81ea\u52a8\u6295\u8d44","sell_wine":"\u51fa\u552e\u60a8\u7684\u8461\u8404\u9152"},"accountsettings":{"sell":"\u5356\u4f60\u7684\u9152"},"button_cancel":"\u53d6\u6d88","button_save":"\u4fdd\u5b58","disclaimer":"\u60a8\u7684\u6240\u6709\u4fe1\u606f\u90fd\u5df2\u83b7\u5f97\u5b89\u5168\u4fdd\u62a4\u3002\u6211\u4eec\u7edd\u4e0d\u4f1a\u5c06\u4e0e\u60a8\u76f8\u5173\u7684\u6570\u636e\u53d1\u9001\u7ed9\u8425\u9500\u670d\u52a1\u63d0\u4f9b\u5546\u6216\u8005\u5411\u60a8\u53d1\u9001\u5783\u573e\u90ae\u4ef6","error_post":"\u6682\u65f6\u65e0\u6cd5\u66f4\u65b0\u60a8\u7684\u4fe1\u606f\u3002","grand_cru":"\u7279\u7ea7\u56ed","main":{"account":"\u8d26\u6237","logout":"\u9000\u51fa\u767b\u5f55","user_settings":"\u7528\u6237\u8bbe\u7f6e"},"myaccount":{"edit":"\u7f16\u8f91","editbutton":"\u7f16\u8f91"},"not_provided":"\u672a\u63d0\u4f9b","password":{"button_cancel":"\u53d6\u6d88","button_change":"\u66f4\u6539","current_password":"\u5f53\u524d\u5bc6\u7801\u4e0d\u6b63\u786e\u3002\u82e5\u8981\u66f4\u65b0\u5bc6\u7801\uff0c\u8bf7\u5148\u8f93\u5165\u6b63\u786e\u7684\u5f53\u524d\u5bc6\u7801\u3002","error_and":"\u548c","error_at_least":"\u81f3\u5c11","error_characters":"8\u4e2a\u5b57\u7b26","error_number":"\u4e00\u4e2a\u6570\u5b57","error_special":"\u4e00\u4e2a\u7279\u6b8a\u5b57\u7b26","error_upper":"\u4e00\u4e2a\u5927\u5199\u5b57\u6bcd","label_confirm_password":"\u786e\u8ba4\u65b0\u5bc6\u7801","label_current_password":"\u5f53\u524d\u5bc6\u7801","label_new_password":"\u65b0\u5bc6\u7801","match":"\u5bc6\u7801\u4e0d\u5339\u914d\u3002","notice":"\u8981\u66f4\u6539\u5bc6\u7801\uff0c\u8bf7\u8f93\u5165\u5f53\u524d\u5bc6\u7801\uff0c\u7136\u540e\u4f7f\u7528\u4ee5\u4e0b\u8868\u5355\u521b\u5efa\u65b0\u5bc6\u7801\u3002","required_criteria":"\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\u3002","retype_password":"\u8bf7\u518d\u6b21\u8f93\u5165\u60a8\u7684\u65b0\u5bc6\u7801\u3002","success_update":"\u60a8\u7684\u5bc6\u7801\u5df2\u66f4\u65b0\u3002","title":"\u5bc6\u7801"},"premium":"\u6ea2\u4ef7","sell_your_wine":{"description":{"description":"\u5b8c\u6210\u8be5\u8fc7\u7a0b\u9700\u89812-4\u5468\u7684\u65f6\u95f4\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002","portfolio_sold":"\u6211\u4eec\u5df2\u6536\u5230\u5173\u4e8e\u60a8\u5e0c\u671b\u552e\u51fa\u5168\u90e8\u8461\u8404\u9152\u7684\u8bf7\u6c42\u3002","sell_portfolio":"\u5982\u679c\u60a8\u60f3\u6e05\u7b97\u548c/\u6216\u63d0\u53d6\u8d44\u91d1\uff0c\u8bf7\u70b9\u51fb\u4e0b\u9762\u7684\u6309\u94ae\u3002"},"liquidation":{"full":"\u6211\u4eec\u5df2\u6536\u5230\u5173\u4e8e\u60a8\u5e0c\u671b\u51fa\u552e\u5168\u90e8\u8461\u8404\u9152\u7684\u7533\u8bf7\u3002","neither":"\u5982\u679c\u60a8\u60f3\u6e05\u7b97\u548c/\u6216\u63d0\u53d6\u8d44\u91d1\uff0c\u8bf7\u70b9\u51fb\u4e0b\u9762\u7684\u6309\u94ae\u3002","partial":"\u6211\u4eec\u5df2\u6536\u5230\u5173\u4e8e\u60a8\u5e0c\u671b\u51fa\u552e\u90e8\u5206\u8461\u8404\u9152\u7684\u7533\u8bf7\u3002"},"sell_button":{"disabled":"\u51fa\u552e\u60a8\u7684\u8461\u8404\u9152","enabled":"\u8fdb\u884c\u4e2d"},"support":{"notsold":"\u5982\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u6b22\u8fce\u67e5\u770b\u6211\u4eec\u7684","notsold_email_message":"\u5ba2\u6237\u652f\u6301\u9875\u9762","sold":"\u5982\u679c\u60a8\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7","sold_email_message":"\u8bf7\u8054\u7cfb\u6211\u4eec\u7684\u652f\u6301\u56e2\u961f"}},"sellyourwine":{"description":{"description":"\u8bf7\u7b49\u5f852-4\u5468\uff0c\u4ee5\u5b8c\u6210\u8be5\u8fc7\u7a0b\u3002","portfolio-sold":"\u6211\u4eec\u5df2\u6536\u5230\u60a8\u51fa\u552e\u5168\u90e8\u8461\u8404\u9152\u7ec4\u5408\u7684\u8bf7\u6c42\u3002","sell-portfolio":"\u5982\u679c\u60a8\u60f3\u6e05\u7b97\u548c/\u6216\u63d0\u53d6\u8d44\u91d1\uff0c\u8bf7\u5355\u51fb\u4e0b\u9762\u7684\u6309\u94ae\u3002"},"sellbutton":{"disabled":"\u5356\u4f60\u7684\u9152","enabled":"\u8fdb\u884c\u4e2d"},"support":{"notsold":"\u5982\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7\u67e5\u770b\u6211\u4eec\u7684","notsold-email-message":"\u652f\u6301\u9875\u9762","sold":"\u5982\u679c\u60a8\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7","sold-email-message":"\u8bf7\u8054\u7cfb\u6211\u4eec\u7684\u652f\u6301\u56e2\u961f"}},"standard":"\u6807\u51c6","support":{"help_support":"\u5e2e\u52a9\u652f\u6301","privacy_policy":"\u9690\u79c1\u653f\u7b56","terms_condition":"\u6761\u6b3e\u53ca\u7ec6\u5219","title":"\u5ba2\u6237\u652f\u6301"},"title":"\u7528\u6237\u8bbe\u7f6e","update_info":{"complete_message":"\u60a8\u7684\u7535\u8bdd\u53f7\u7801\u5df2\u66f4\u65b0\uff01"},"updateinfo":{"complete-message":"\u60a8\u7684\u7535\u8bdd\u53f7\u7801\u5df2\u66f4\u65b0\uff01"},"user_settings":{"account":"\u4e2a\u4eba\u4fe1\u606f","investment_plan":"\u6295\u8d44\u8ba1\u5212","logout":"\u767b\u51fa","password":"\u5bc6\u7801","phone":"\u624b\u673a\u53f7\u7801"},"usersettings":{"account":"\u4e2a\u4eba\u4fe1\u606f","phone":"\u624b\u673a\u53f7\u7801"}}')},328:function(e){e.exports=JSON.parse('{"price_history":{"average_price":"\u5e73\u5747\u4ef7\u683c","benchmark":"\u57fa\u51c6","benchmark_wine_name":"\u7eb3\u5e15\u8c37\u6ce2\u5c14\u591a\u7ea2\u8461\u8404\u6df7\u917f","current_wine":"\u5f53\u524d\u7684\u8461\u8404\u9152","current_wine_name":"\u7f8e\u56fd\u7eb3\u5e15\u8c37\u4f5c\u54c1\u4e00\u53f7","hide_benchmark":"\u9690\u85cf\u57fa\u51c6","price_history":"\u4ef7\u683c\u5386\u53f2\u8bb0\u5f55"},"pricehistory":{"averageprice":"\u5e73\u5747\u4ef7\u683c","benchmark":"\u57fa\u51c6","currentwine":"\u5f53\u524d\u7684\u8461\u8404\u9152","hidebenchmark":"\u9690\u85cf\u57fa\u51c6","pricehistory":"\u4ef7\u683c\u5386\u53f2\u8bb0\u5f55"}}')},329:function(e){e.exports=JSON.parse('{"account":"\u8d26\u6237","calendly":{"book":"\u6b22\u8fce\u6765\u7535\u4e0e\u6211\u4eec\u7684\u8461\u8404\u9152\u4e13\u5bb6\u8fdb\u884c\u4e00\u5bf9\u4e00\u4e13\u9879\u6c9f\u901a\u3002\u5efa\u7acb\u8461\u8404\u9152\u6295\u8d44\u7ec4\u5408\u4ee5\u5bf9\u6297\u5e02\u573a\u7684\u4e0d\u786e\u5b9a\u6027\u3002","mobile-book":"\u6b22\u8fce\u6765\u7535\u4e0e\u6211\u4eec\u7684\u8461\u8404\u9152\u4e13\u5bb6\u8fdb\u884c\u4e00\u5bf9\u4e00\u4e13\u9879\u6c9f\u901a"},"units":{"ml":"\u6beb\u5347"},"copywrite":"\u4f1f\u8bfa\u7ea2\u9152\u3002\u7248\u6743\u6240\u6709\u3002","currency":"\u7f8e\u5143","currency_symbol":"\xa5","currencySymbol":"\xa5","date-format":{"month":"\u6708/\u5e74","standard":"\u6708/\u65e5/\u5e74"},"date":{"short":"{{ date, short }}"},"documents":"\u6587\u4ef6\u8d44\u6599","duration":"{{ count, duration}} {{ unit, duration}}","en_currency":"\u7f8e\u5143","error-boundry":{"button-retry":"\u8bf7\u518d\u8bd5\u4e00\u6b21","description":"\u5f88\u62b1\u6b49\uff01\u6211\u4eec&apos;\u4f3c\u4e4e\u51fa\u4e86\u70b9\u95ee\u9898\u3002","error":"\u9519\u8bef\u4fe1\u606f","hold":"\u8bf7\u5728\u7a0d\u7b49\u7247\u523b\u4e4b\u540e\u91cd\u65b0\u5c1d\u8bd5","title":"\u4e0d\u662f\u60a8\uff0c\u800c\u662f\u6211\u4eec"},"footer":{"and":"\u548c","button-about":"\u5173\u4e8e\u6211\u4eec","button-faq":"\u5e38\u89c1\u95ee\u9898","button-home":"\u9996\u9875","button-privacy":"\u9690\u79c1\u653f\u7b56","button-terms":"\u670d\u52a1\u6761\u6b3e","button-terms-conditions":"\u6761\u6b3e\u53ca\u7ec6\u5219","button-website":"Vinovest.co","disclaimer-1":"\u4f1f\u8bfa\u7ea2\u9152\uff08Vinovest\uff09\u6240\u8fd0\u8425\u7684\u7f51\u7ad9\u662f\u5728","disclaimer-2":"\u4f7f\u7528\u672c\u5e73\u53f0\uff0c\u5373\u8868\u793a\u60a8\u63a5\u53d7\u6211\u4eec\u7684","disclaimer-3":"\u8fc7\u53bb\u7684\u8868\u73b0\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u5c06\u6765\u7684\u7ed3\u679c\u3002\u4efb\u4f55\u5386\u53f2\u6536\u76ca\u3001\u9884\u671f\u6536\u76ca\u6216\u6982\u7387\u9884\u6d4b\u90fd\u65e0\u6cd5\u4ee3\u8868\u672a\u6765\u7684\u5b9e\u9645\u8868\u73b0\u3002 \u8d2d\u4e70\u8461\u8404\u9152\u4f1a\u6709\u98ce\u9669\uff0c\u5e76\u53ef\u80fd\u4f1a\u5bfc\u81f4\u90e8\u5206\u8d22\u52a1\u635f\u5931\u3002 \u5c3d\u7ba1\u6211\u4eec\u4f7f\u7528\u7684\u662f\u53ef\u9760\u7684\u7b2c\u4e09\u65b9\u6570\u636e\uff0c\u4f46\u6211\u4eec\u4e0d\u80fd\u4fdd\u8bc1\u7531\u6295\u8d44\u8005\u6216\u5176\u4ed6\u7b2c\u4e09\u65b9\u6240\u63d0\u4f9b\u7684\u6570\u636e\u90fd\u662f\u51c6\u786e\u6216\u5b8c\u6574\u7684\u3002","disclaimer-4":"\u4f1f\u8bfa\u7ea2\u9152\u6216\u5176\u4efb\u4f55\u9644\u5c5e\u516c\u53f8\u5747\u4e0d\u63d0\u4f9b\u7a0e\u52a1\u54a8\u8be2\uff0c\u4e5f\u4e0d\u4ee5\u4efb\u4f55\u65b9\u5f0f\u4ee3\u8868\u6b64\u5904\u6240\u8ff0\u7ed3\u679c\u4f1a\u5bfc\u81f4\u4efb\u4f55\u7279\u5b9a\u7684\u7a0e\u52a1\u540e\u679c\u3002\u5173\u4e8e\u7a0e\u52a1\u95ee\u9898\uff0c\u6f5c\u5728\u6295\u8d44\u8005\u5e94\u6839\u636e\u81ea\u5df1\u7684\u5177\u4f53\u60c5\u51b5\u5411\u81ea\u5df1\u7684\u7a0e\u52a1\u987e\u95ee\u54a8\u8be2\u3002 \u4f1f\u8bfa\u7ea2\u9152\u6216\u5176\u4efb\u4f55\u9644\u5c5e\u516c\u53f8\u5747\u4e0d\u5bf9\u4efb\u4f55\u6295\u8d44\u8005\u7684\u4efb\u4f55\u6295\u8d44\u627f\u62c5\u4efb\u4f55\u7a0e\u52a1\u540e\u679c\u3002"},"invite":"\u9080\u8bf7","months":{"april":"\u56db\u6708","august":"\u516b\u6708","december":"\u5341\u4e8c\u6708","february":"\u4e8c\u6708","january":"\u4e00\u6708","july":"\u4e03\u6708","june":"\u516d\u6708","march":"\u884c\u8fdb","may":"\u53ef\u80fd","november":"\u5341\u4e00\u6708","october":"\u5341\u6708","september":"\u4e5d\u6708"},"navigation":{"funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d"},"overview":"\u6982\u89c8","phone-number-capture":{"error":"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u8bdd\u53f7\u7801","error-region":"\u63d0\u4f9b\u7684\u5b57\u7b26\u4e32\u4f3c\u4e4e\u4e0d\u662f\u7535\u8bdd\u53f7\u7801","title":"\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u8bdd\u53f7\u7801"},"portfolio":"\u6295\u8d44\u7ec4\u5408","transactions":"\u4ea4\u6613","uppercase":"{{ text, uppercase }}","utils":{"constants":{"aggressive":"\u6311\u8845\u7684","bank_transfer":"\u94f6\u884c\u8f6c\u5e10","conservative":"\u4fdd\u5b88\u7684","credit_card":"\u4fe1\u7528\u5361","funds_added":"\u8865\u5145\u8d44\u91d1","funds_withdrew":"\u8d44\u91d1\u63d0\u53d6","moderate":"\u7f13\u548c","pending_deposit":"\u5f85\u5b9a\u5b58\u6b3e","rebalance_add":"\u91cd\u65b0\u5e73\u8861\u6dfb\u52a0","trade_settlement_purchase":"\u8d38\u6613\u7ed3\u7b97\u8d2d\u4e70","trade_settlement_sell":"\u8d38\u6613\u7ed3\u7b97\u51fa\u552e","transfer_in":"\u8f6c\u5165","transfer_out":"\u8f6c\u51fa","vinovest_monthly_fee":"\u6700\u4fbf\u5b9c\u5730\u6708\u8d39","wine_purchase":"\u8461\u8404\u9152\u8d2d\u4e70","wine_sold":"\u5356\u9152"},"shared":{"bottle":"{{count}} \u74f6","bottle_plural":"{{count}} \u74f6","case":"{{count}}\u6848\u4f8b","case_plural":"%1$s\u6848\u4f8b"}},"zh_CN_currency":"\u4eba\u6c11\u5e01","zh_Hans_HK_currency":"\u6e2f\u5e01"}')},330:function(e){e.exports=JSON.parse('{"en":"\u7f8e\u5143","zh_CN":"\u4eba\u6c11\u5e01","zh_Hans_HK":"\u6e2f\u5e01"}')},331:function(e){e.exports=JSON.parse('{"ach_fee":"\u81ea\u52a8\u6e05\u7b97\u624b\u7eed\u8d39","add_funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","alert_message":"\u76ee\u524d\uff0c\u94f6\u884c\u7535\u6c47\u4e0d\u9002\u7528\u4e8e\u81ea\u52a8\u6295\u8d44","alipay":"\u652f\u4ed8\u5b9d","amount":"\u6570\u989d","amountvalidation":"\u8bf7\u8f93\u5165\u81f3\u5c11{{currency}}{{minValue}} ","arrow":"\u7bad\u5934","average_deposit":"\u5e73\u5747\u5f00\u6237\u91d1\u989d","back":"\u8fd4\u56de","bank_wire":"\u94f6\u884c\u7535\u6c47","bank":{"aba_number":"ABA\u6c47\u6b3e\u8def\u7ebf\u53f7\u7801","aba_number_value":"084106768","acct_number":"\u8d26\u53f7","bank_address":"\u94f6\u884c\u5730\u5740","beneficiary_name_value":"\u4f1f\u8bfa\u7ea2\u9152","domestic":{"acct_number_value":"9800534046","bank_address_value":"\u7530\u7eb3\u897f\u5dde\u5b5f\u83f2\u65af\u5e02\u767d\u6768\u5927\u90536070\u53f7200\u5ba4\uff0c\u90ae\u7f1638119","bank_name":"\u94f6\u884c\u540d\u79f0","bank_name_value":"Evolve\u94f6\u884c\u4e0e\u4fe1\u6258\u516c\u53f8","beneficiary_addr":"\u6536\u6b3e\u4eba\u5730\u5740","beneficiary_addr_value":"\u52a0\u5229\u798f\u5229\u4e9a\u963f\u5e15\u94c1\u5361\u5c14\u5f17\u5e02\u5361\u5c14\u5f17\u5927\u90539900\u53f7\uff0c\u90ae\u7f16 90232","beneficiary_name":"\u6536\u6b3e\u4eba\u59d3\u540d"},"international":{"account_number_value":"3302798623","bank_address_value":"\u7f8e\u56fd\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde\u5723\u514b\u62c9\u62c9\u5e02\u5854\u65af\u66fc\u8def3003\u53f7\uff0c\u90ae\u7f1695054","bank_name":"\u6536\u6b3e\u94f6\u884c/\u4ee3\u7406\u94f6\u884c\uff08\u4ed8\u6b3e\u81f3\uff09\uff1a","bank_name_value":"\u7845\u8c37\u94f6\u884c","beneficiary":"\u6536\u6b3e\u4eba","beneficiary_addr":"\u6536\u6b3e\u4eba\u94f6\u884c\u5730\u5740","beneficiary_address_value":"\u6536\u6b3e\u4eba\u94f6\u884c\u5730\u5740","beneficiary_name":"\u6536\u6b3e\u94f6\u884c","memo":"\u8bf7\u5728\u53d1\u8d77\u4eba\u7ed9\u6536\u76ca\u4eba\u4fe1\u606f(OBI)/\u8fdb\u4e00\u6b65\u4fe1\u7528\u4fe1\u606f/\u7279\u522b\u8bf4\u660e\u4e00\u680f\u4e2d\u5305\u542b\u6b64\u5907\u5fd8\u5f55\uff1a","memo_value":"\u4ed8\u6b3e\u81f3\u4f1f\u8bfa\u7ea2\u9152\u5728\u7845\u8c37\u94f6\u884c\u7684\u8d26\u6237\uff1a3302798623","swift_code":"SWIFT\u4ee3\u7801","swift_code_value":"SVBKUS6S"},"type_acct":"\u8d26\u6237\u7c7b\u578b","type_acct_value":"\u6b63\u5728\u68c0\u67e5"},"bitpay_error":"\u60a8\u7684Bitpay\u4ed8\u6b3e\u672a\u901a\u8fc7\u3002\u8bf7\u5c1d\u8bd5\u5176\u4ed6\u4ed8\u6b3e\u65b9\u5f0f\u6216\u7a0d\u540e\u518d\u8bd5\u3002","bitpay_warning":"\u6682\u65f6\u65e0\u6cd5\u751f\u6210Bitpay\u53d1\u7968\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002","card_namep_laceholder":"\u4fe1\u7528\u5361\u6301\u5361\u4eba\u59d3\u540d","cc_name_length":"\u540d\u79f0\u957f\u5ea6\u4e0d\u80fd\u5927\u4e8e26\u3002","cc_name_length_min":"\u540d\u79f0\u957f\u5ea6\u5fc5\u987b\u5927\u4e8e2\u3002","cc_name_placeholder":"\u4fe1\u7528\u5361\u6301\u5361\u4eba\u59d3\u540d","check_instructions":"\u8981\u901a\u8fc7\u652f\u7968\u4e3a\u60a8\u7684\u8d26\u6237\u6ce8\u8d44\uff0c\u8bf7\u9075\u5faa\u4ee5\u4e0b\u64cd\u4f5c\u8bf4\u660e\u3002","completetransfer":"\u5b8c\u6210\u8f6c\u8d26","confirmation":"\u8f6c\u8d26\u5df2\u542f\u52a8","connect_bank":"\u7ed1\u5b9a\u94f6\u884c\u8d26\u6237","continue":"\u7ee7\u7eed{{currencySymbol}} {{amount}}","credit":"\u4fe1\u7528\u5361\u624b\u7eed\u8d39","credit_card":"\u4fe1\u7528\u5361","crypto":"\u52a0\u5bc6\u8d27\u5e01","date":"\u65e5\u671f","domestic_wire_description":"\u60a8\u53ef\u4ee5\u901a\u8fc7\u94f6\u884c\u8f6c\u8d26\u5c06\u8d44\u91d1\u5b58\u5165\u60a8\u7684\u8d26\u6237\u3002\u8bf7\u5c06\u8d44\u91d1\u6c47\u5165\u8be5\u8d26\u6237\uff0c\u5e76\u5728\u6c47\u6b3e\u65f6\u6ce8\u660e\u53c2\u8003\u7f16\u53f7\u3002","domestic_wire_print":"\u56fd\u5185\u7535\u6c47","domestic_wire_tip":"\u53c2\u8003\u7f16\u53f7\u662f\u5206\u914d\u7ed9\u4efb\u4f55\u91d1\u878d\u4ea4\u6613\uff08\u5305\u62ec\u4f7f\u7528\u4fe1\u7528\u5361\u6216\u501f\u8bb0\u5361\u8fdb\u884c\u7684\u91d1\u878d\u4ea4\u6613\uff09\u7684\u552f\u4e00\u6807\u8bc6\u7b26","domestic_wire_transfer":"\u7f8e\u56fd\u94f6\u884c\u7535\u6c47\u8f6c\u8d26","done":"\u5b8c\u6210","enter_credit_card":"\u8f93\u5165\u4fe1\u7528\u5361\u5361\u53f7","enterCreditCard":{"nameplaceholder":"\u4fe1\u7528\u5361\u6301\u5361\u4eba\u59d3\u540d"},"failed":"\u8f6c\u8d26\u5931\u8d25","failed_line1":"\u8f6c\u8d26\u4e2d\u65ad\u3002","failed_line2":"\u8bf7\u68c0\u67e5\u60a8\u7684\u94f6\u884c\u8d26\u6237\u662f\u5426\u7ed1\u5b9a\u6210\u529f\u4ee5\u53ca\u6dfb\u52a0\u7684\u4ed8\u6b3e\u65b9\u5f0f\uff0c\u7136\u540e\u8bf7\u91cd\u8bd5\u3002","fee":"\u8d39\u7528","feebanner":"\u8bbe\u7f6e\u81ea\u52a8\u6295\u8d44\u53ef\u8282\u7701{{ammount}}%","feePercentage":"2.9\uff05","frequency":"\u5468\u671f","info":"\u4fe1\u606f","instructions":"\u8bf7\u53c2\u8003\u8bf4\u660e","international_bank_wire":"\u56fd\u9645\u94f6\u884c\u7535\u6c47","international_wire_transfer":"\u56fd\u9645\u94f6\u884c\u7535\u6c47\u8f6c\u8d26","intl_description":"\u60a8\u53ef\u4ee5\u901a\u8fc7\u94f6\u884c\u8f6c\u8d26\u5c06\u8d44\u91d1\u5b58\u5165\u60a8\u7684\u8d26\u6237\u3002\u8bf7\u5c06\u8d44\u91d1\u6c47\u5165\u8be5\u8d26\u6237\uff0c\u5e76\u5728\u6c47\u6b3e\u65f6\u6ce8\u660e\u53c2\u8003\u7f16\u53f7\u3002","intl_tip":"\u53c2\u8003\u7f16\u53f7\u662f\u5206\u914d\u7ed9\u4efb\u4f55\u91d1\u878d\u4ea4\u6613\uff08\u5305\u62ec\u4f7f\u7528\u4fe1\u7528\u5361\u6216\u501f\u8bb0\u5361\u8fdb\u884c\u7684\u91d1\u878d\u4ea4\u6613\uff09\u7684\u552f\u4e00\u6807\u8bc6\u7b26","lower_add":"$ t\uff08add_funds\uff0c\u5927\u5199\uff09","mail_check":"\u90ae\u5bc4\u652f\u7968","mail_check_deposit":"\u90ae\u5bc4\u652f\u7968\u4ee5\u6ce8\u8d44","mail_check_example":"\u90ae\u5bc4\u652f\u7968\u793a\u4f8b","mail_to":"\u8bf7\u90ae\u5bc4\u81f3","memo":"\u5907\u5fd8\u5f55","memo_value":"\u8bf7\u5c06\u4e0e\u60a8\u7684\u4f1f\u8bfa\u7ea2\u9152\u6295\u8d44\u8d26\u6237\u5173\u8054\u7684\u7535\u5b50\u90ae\u4ef6\u5305\u542b\u8fdb\u53c2\u8003\u5907\u5fd8\u5f55\u4e2d\u3002","minimum_check_limit_reminder":"\u6c47\u6b3e\u91d1\u989d\u4e3a1000\u7f8e\u91d1\u8d77\u3002\u5e73\u5747\u5f00\u6237\u91d1\u989d\u4e3a5000\u7f8e\u91d1\u3002","new":"\u65b0\u7684","new_payment_source":"\u6dfb\u52a0\u65b0\u7684\u4ed8\u6b3e\u65b9\u5f0f","next":"\u4e0b\u4e00\u9879","option":"\u9009\u62e9\u5468\u671f","otheramount":"\u5176\u4ed6\u91d1\u989d","pay_order":"\u652f\u4ed8\u8ba2\u5355","placeholder":"\u4f8b\u5982\uff0c{{currencySymbol}} {{amount}}","portfolio_tooltip":"\u5386\u53f2\u6570\u636e\u663e\u793a\uff0c\u91d1\u989d\u5927\u4e8e10000\u7f8e\u91d1\u7684\u6295\u8d44\u7684\u8868\u73b0\u8981\u660e\u663e\u4f18\u4e8e\u91d1\u989d\u5c0f\u4e8e10000\u7f8e\u91d1\u7684\u6295\u8d44\u3002","print_path":"\u56fd\u9645\u7535\u6c47","questions":"\u5982\u6709\u95ee\u9898\uff0c\u6b22\u8fce\u5411\u6211\u4eec\u7684\u4e13\u5bb6\u54a8\u8be2\u3002","receiving_bank_dtls":"\u6536\u6b3e\u94f6\u884c\u660e\u7ec6","retry":"\u8bf7\u91cd\u8bd5","review":"\u7f8e\u56fd\u4fe1\u7528\u5361\u7684\u624b\u7eed\u8d39\u4e3a2.9\uff05\u3002\u56fd\u9645\u4fe1\u7528\u5361\u4f1a\u518d\u989d\u5916\u6536\u53d61-2\uff05\u7684\u624b\u7eed\u8d39","review_tooltip":"\u4f7f\u7528\u7f8e\u56fd\u4fe1\u7528\u5361\u5c06\u4f1a\u6536\u53d6{{feePercentage}}%\u624b\u7eed\u8d39\u3002\\\\n\u4f7f\u7528\u56fd\u9645\u4fe1\u7528\u5361\u4f1a\u518d\u989d\u5916\u6536\u53d6{{minFeeAdditional}} - {{maxFeeAdditional}} \uff05\u7684\u624b\u7eed\u8d39","review_transfer":"\u67e5\u770b\u60a8\u7684\u8f6c\u8d26","reviewTranfer":{"amount":{"title":"[%key_id:83269566%]"},"completetransfer":"\u5b8c\u6210\u8f6c\u8d26","date":{"title":"\u65e5\u671f","tooltip":"\u4f7f\u7528\u6ce8\u518c\u5730\u4e3a\u7f8e\u56fd\u7684\u4fe1\u7528\u5361\u5c06\u4f1a\u6536\u53d6{{feePercentage}}%\u624b\u7eed\u8d39\u3002\\\\n\u4f7f\u7528\u6ce8\u518c\u5730\u4e3a\u5176\u4ed6\u56fd\u5bb6\u7684\u56fd\u9645\u4fe1\u7528\u5361\u4f1a\u518d\u989d\u5916\u6536\u53d6{{minFeeAdditional}} - {{maxFeeAdditional}} \uff05\u7684\u624b\u7eed\u8d39"},"frequency":{"description":"\u60a8\u7684\u7b2c\u4e00\u6b21\u8f6c\u5e10\u4f1a\u5b89\u6392\u5728\u5982\u4e0b\u65e5\u671f\u8fdb\u884c\uff0c\u4e4b\u540e\u5c06\u6839\u636e\u60a8\u6240\u9009\u62e9\u7684\u8f6c\u8d26\u5468\u671f\u6765\u8fdb\u884c\u5b9a\u671f\u8f6c\u5e10\u3002","title":"[%key_id:83269562%]"},"paymentTypeFeeLabel":{"ach":"\u81ea\u52a8\u6e05\u7b97\u624b\u7eed\u8d39","credit":"\u4fe1\u7528\u5361\u624b\u7eed\u8d39","default":"\u8d39\u7528"},"source":{"title":"[%key_id:83269560%]"}},"rootdeposit":{"add-funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","credit-card":"\u8f93\u5165\u4fe1\u7528\u5361\u5361\u53f7","failed":"\u8f6c\u8d26\u5931\u8d25","review-transfer":"\u67e5\u770b\u60a8\u7684\u8f6c\u8d26","select-source":"\u9009\u62e9\u8d44\u91d1\u6765\u6e90"},"select_other":"\u5176\u4ed6\u91d1\u989d","select_source":"\u9009\u62e9\u8d44\u91d1\u6765\u6e90","selectSource":{"alert-message":"\u76ee\u524d\uff0c\u94f6\u884c\u7535\u6c47\u4e0d\u9002\u7528\u4e8e\u81ea\u52a8\u6295\u8d44","back":"\u8fd4\u56de","bank-wire":"\u94f6\u884c\u7535\u6c47","connect-bank":"\u7ed1\u5b9a\u94f6\u884c\u8d26\u6237","credit-card":"\u4fe1\u7528\u5361"},"source":"\u6765\u6e90","transfer_description":"\u60a8\u7684\u9996\u6b21\u8f6c\u5e10\u4f1a\u5b89\u6392\u5728\u5982\u4e0b\u65e5\u671f\u8fdb\u884c\uff0c\u4e4b\u540e\u5c06\u6839\u636e\u60a8\u6240\u9009\u62e9\u7684\u8f6c\u8d26\u5468\u671f\u6765\u8fdb\u884c\u5b9a\u671f\u8f6c\u5e10\u3002","transfer_message_line1":"\u60a8\u7684%1$s %1$s\u8f6c\u8d26\u5df2\u7ecf\u542f\u52a8","transfer_message_line2":"\u6700\u591a\u53ef\u80fd\u9700\u8981%1$s - %1$s\u5929\u624d\u80fd\u6263\u9664","transfer_message_line3":"\u4ece\u60a8\u7684\u8d26\u6237","us_bank_wire":"\u7f8e\u56fd\u94f6\u884c\u7535\u6c47","vinovest":"\u4f1f\u8bfa\u7ea2\u9152","vinovest_address":{"city_state":"\u52a0\u5229\u798f\u5c3c\u4e9a\u5361\u5c14\u5f17\u5e02\uff0c\u90ae\u7f1690232","name":"\u4f1f\u8bfa\u7ea2\u9152","street":"\u5361\u5c14\u5f17\u5927\u90539900\u53f7PHE\u5355\u5143\uff0c"},"wire_description":"\u5230\u8d26\u540e\uff0c\u5904\u7406\u5b8c\u6210\u97005\u4e2a\u5de5\u4f5c\u65e5\u3002\u8bf7","wire_description_contd":"\u5982\u6709\u4efb\u4f55\u7591\u95ee\u3002","wire_mail_link":"\u6b22\u8fce\u4e0e\u6211\u4eec\u8054\u7cfb","wire_transfer_type":"\u8bf7\u9009\u62e9\u7535\u6c47\u8f6c\u8d26\u7c7b\u578b","wire_transfer":{"button_done":"\u5b8c\u6210","download":"\u4e0b\u8f7d\u5e76\u6253\u5370","field":"\u53c2\u8003\u5b57\u6bb5"}}')},332:function(e){e.exports=JSON.parse('{"documents":"\u6587\u4ef6\u8d44\u6599","empty_button":"\u4e3a\u60a8\u7684\u8d26\u6237\u6ce8\u8d44","empty_title":"\u60a8\u5c1a\u672a\u6709\u4efb\u4f55\u6587\u4ef6\u3002","empty":{"button":"\u4e3a\u60a8\u7684\u8d26\u6237\u6ce8\u8d44","title":"\u60a8\u5c1a\u672a\u6709\u4efb\u4f55\u6587\u4ef6\u3002"},"error":"\u63d0\u53d6\u60a8\u7684{{document}}\u65f6\u51fa\u73b0\u95ee\u9898\u3002\u8bf7\u91cd\u8bd5\u6216\u5728\u8fd9\u91cc\u4e0e\u6211\u4eec\u804a\u5929\u{1f449}","error_options":{"account_statement":"\u5e10\u6237\u5bf9\u5e10\u5355","account_statements":"\u5e10\u6237\u5bf9\u5e10\u5355","available_month":"\u53ef\u7528\u6708\u4efd\u9009\u9879"},"issued":"\u53d1\u884c\u65e5\u671f","list_title":"\u6807\u9898","listTitle":"\u6807\u9898","loadmore":"\u7ee7\u7eed\u52a0\u8f7d","mobile_statements":"\u58f0\u660e","mobileStatements":"\u58f0\u660e","statement":"\u8d26\u6237\u5bf9\u8d26\u5355","statements":"\u8d26\u6237\u5bf9\u8d26\u5355"}')},333:function(e){e.exports=JSON.parse('{"cheersToYouBoth":"\u4e3a\u4f60\u4eec\u4fe9\u5e72\u676f\uff01 \u{1f942}","copied":"\u5df2\u590d\u5236\uff01","copyCTA":"\u590d\u5236","finewine":"\u9ad8\u7ea7\u8461\u8404\u9152","get3MonthsOfNoFees":"\u83b7\u5f973\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f\u3002","helpEveryoneGrowTheirMoney":"\u5e2e\u52a9\u60a8\u5708\u5b50\u4e2d\u7684\u6bcf\u4e2a\u4eba\u90fd\u8d5a\u94b1\u3002\u5f53\u670b\u53cb\u901a\u8fc7\u60a8\u7684\u9080\u8bf7\u94fe\u63a5\u4e3aVinovest\u8d26\u6237\u6ce8\u8d44\u65f6\uff0c\u60a8\u5c06\u989d\u5916\u83b7\u5f973\u4e2a\u6708\u7684\u514d\u8d39\u8461\u8404\u9152\u50a8\u85cf\u548c\u7ba1\u7406\u3002\u6700\u597d\u7684\u90e8\u5206\u662f\uff0c\u60a8\u7684\u670b\u53cb\u4e5f\u5c06\u514d\u8d39\u83b7\u5f973\u4e2a\u6708\u7684\u514d\u8d39\u670d\u52a1\uff01","investing":"\u6b63\u5728\u6295\u8d44","monthsManagedFree":"\u591a\u6708\u514d\u8d39\u7ba1\u7406","shareInviteLink":"\u9080\u8bf7\u94fe\u63a5","shareTheWealth":"\u5206\u4eab\u8d22\u5bcc","social_share_msg":"\u6211\u4e0e\u4f1f\u8bfa\u7ea2\u9152\u5171\u540c\u7ba1\u7406\u4f18\u8d28\u8461\u8404\u9152\u7684\u6295\u8d44\u3002\u4f7f\u7528\u6b64\u94fe\u63a5\u53ef\u83b7\u5f973\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u4f1f\u8bfa\u7ea2\u9152\u6295\u8d44\u4ea4\u6613\u5e73\u53f0\u4f7f\u7528\u6743","social_summary":"\u5982\u679c\u60a8\u8fd9\u6837\u505a\uff0c\u6211\u4eec\u4f1a\u83b7\u5f97\u5956\u52b1","successfulInvites":"\u9080\u8bf7\u6210\u529f","wine":"\u8461\u8404\u9152"}')},334:function(e){e.exports=JSON.parse('{"welcome.hello":"\u60a8\u597d"}')},335:function(e){e.exports=JSON.parse('{"acknowlege":"\u786e\u8ba4\u5e76\u7ee7\u7eed","advisor":"\u6295\u8d44\u987e\u95ee","back":"\u8fd4\u56de","before_you_request":{"choose_the_option":{"description":"\u6211\u60f3\u8981...","index":"0","next":"\u8461\u8404\u9152\u9009\u62e9","prev":"/ before_you_liquidate_your_portfolio","subPage":"\u9009\u9879\u9009\u62e9","title":"\u8bf7\u9009\u62e9\u6700\u80fd\u63cf\u8ff0\u60a8\u76ee\u6807\u7684\u9009\u9879"},"confirm_liquidation":{"description":"\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u6211\u4eec\u5df2\u5411\u60a8\u5173\u8054\u7684\u7535\u5b50\u90ae\u4ef6\u8d26\u6237\u53d1\u9001\u4e86\u4e00\u5c01\u786e\u8ba4\u7535\u5b50\u90ae\u4ef6\u3002\u5728\u60a8\u5355\u51fb\u8be5\u7535\u5b50\u90ae\u4ef6\u4e0a\u7684\u786e\u8ba4\u4e4b\u524d\uff0c\u60a8\u7684\u6e05\u7b97\u8fc7\u7a0b\u5c1a\u672a\u5b8c\u6210\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6\uff0c\u8bf7\u786e\u4fdd\u68c0\u67e5\u60a8\u7684\u5783\u573e\u90ae\u4ef6\u6587\u4ef6\u5939\u3002","index":"3","next":"/","prev":"\u65e0\u6548","subPage":"\u6e05\u7b97\u786e\u8ba4","title":"\u786e\u8ba4\u6e05\u7b97"},"confirm_your_wines":{"description":"\u901a\u5e38\uff0c\u5728\u5e02\u573a\u4e0a\u51fa\u552e\u8461\u8404\u9152\u9700\u89812\u52304\u5468\u7684\u65f6\u95f4\u3002","index":"2","next":"\u6e05\u7b97\u786e\u8ba4","prev":"\u8461\u8404\u9152\u9009\u62e9","subPage":"\u8461\u8404\u9152\u786e\u8ba4","title":"\u786e\u8ba4\u60a8\u5c06\u88ab\u51fa\u552e\u7684\u8461\u8404\u9152"},"feedback_options":{"completed":{"description":"\u4ea4\u6613\u5b8c\u6210\u65f6\uff0c\u6211\u4eec\u4f1a\u901a\u77e5\u60a8","feedback":"\u6211\u4eec\u975e\u5e38\u91cd\u89c6\u60a8\u7684\u53cd\u9988\uff0c\u5982\u679c\u60a8\u80fd\u544a\u77e5\u6211\u4eec\u60a8\u5151\u73b0\u8461\u8404\u9152\u7684\u539f\u56e0\uff0c\u6211\u4eec\u5c06\u4e0d\u80dc\u611f\u6fc0\u3002\u6211\u4eec\u5411\u60a8\u627f\u8bfa\uff0c\u60a8\u7684\u53cd\u9988\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u516c\u5f00\uff0c\u56e0\u6b64\u4e0d\u4f1a\u5bf9\u60a8\u7684\u7533\u8bf7\u4ea7\u751f\u4efb\u4f55\u7684\u5f71\u54cd\u3002","leave_feedback_placeholder":"\u60a8\u7684\u53cd\u9988\uff08\u53ef\u9009\uff09","title":"\u60a8\u7684\u8461\u8404\u9152\u5df2\u88ab\u5b89\u6392\u51fa\u552e"},"option1":"\u6211\u56e0\u4e3a\u5e02\u573a\u73af\u5883\u8981\u6c42\u51fa\u552e","option2":"\u6211\u56e0\u4e2a\u4eba\u539f\u56e0\u8981\u6c42\u51fa\u552e","option3":"\u6211\u5bf9Vinovest\u7684\u7ecf\u9a8c\u4e0d\u592a\u6ee1\u610f","option4":"\u6211\u7684\u8d39\u7528/\u8d26\u6237\u8d39\u7528\u592a\u9ad8","option5":"\u6211\u9009\u62e9\u4e0d\u56de\u7b54","sharpe_ratio":{"other":""},"support":{"email":"\u9020\u8bbf","email_rest":"\u53ef\u4e3a\u4efb\u4f55\u95ee\u9898\u63d0\u4f9b\u89e3\u7b54\u7684\u9875\u9762","mobile_email":"\u7535\u5b50\u90ae\u4ef6","mobile_questions":"\u5982\u6709\u95ee\u9898","support":"\u652f\u6301"}},"select_wines":{"bottle":"\u74f6","case":"\u7bb1","description":"\u901a\u5e38\uff0c\u5728\u5e02\u573a\u4e0a\u51fa\u552e\u8461\u8404\u9152\u9700\u89812-4\u5468\u7684\u65f6\u95f4\u3002","holdings":{"quantity":"\u6570\u91cf","sell":"\u51fa\u552e","title":"\u60a8\u7684\u8d44\u4ea7"},"index":"1","next":"\u8461\u8404\u9152\u786e\u8ba4","note":"\u6ce8\u610f\uff1a\u8981\u6c42\u5b8c\u5168\u6e05\u7b97\u4f1a\u81ea\u52a8\u53d6\u6d88\u6240\u6709\u7b49\u5f85\u7684\u8ba2\u5355\u3002\u8981\u67e5\u770b\u5386\u53f2\u8ba2\u5355\u8bb0\u5f55\uff0c\u60a8\u53ef\u4ee5\u4ece","prev":"\u9009\u9879\u9009\u62e9","sell_wine":"\u51fa\u552e\u6211\u7684\u8461\u8404\u9152","sell_wine_button":"\u51fa\u552e\u6211\u7684\u8461\u8404\u9152","subPage":"\u8461\u8404\u9152\u9009\u62e9","title":"\u9009\u62e9\u8981\u51fa\u552e\u7684\u8461\u8404\u9152","transaction_tab":"\u4ea4\u6613\u6807\u7b7e"},"sell_options":{"all":"\u51fa\u552e\u6240\u6709\u6211\u7684\u8461\u8404\u9152\u85cf\u54c1","note":"\u6ce8\u610f\uff1a\u8981\u6c42\u5b8c\u5168\u6e05\u7b97\u4f1a\u81ea\u52a8\u53d6\u6d88\u6240\u6709\u7b49\u5f85\u7684\u8ba2\u5355\u3002\u8981\u67e5\u770b\u5386\u53f2\u8ba2\u5355\u8bb0\u5f55\uff0c\u60a8\u53ef\u4ee5\u4ece","some":"\u51fa\u552e\u90e8\u5206\u6211\u7684\u8461\u8404\u9152\u85cf\u54c1","transaction":"\u4ea4\u6613\u6807\u7b7e"}},"book_call":"\u6765\u7535\u9884\u7ea6","choose_details":"\u6211\u60f3\u8981...","choose_title":"\u8bf7\u9009\u62e9\u6700\u80fd\u63cf\u8ff0\u60a8\u76ee\u6807\u7684\u9009\u9879","choose-the-option":{"description":"\u6211\u60f3\u8981...","index":"0","next":"\u7cbe\u9009\u8461\u8404\u9152","prev":"/\u5728\u60a8\u6e05\u7b97\u60a8\u7684\u6295\u8d44\u4e4b\u524d","subPage":"\u9009\u9879\u9009\u62e9","title":"\u8bf7\u9009\u62e9\u6700\u80fd\u63cf\u8ff0\u60a8\u76ee\u6807\u7684\u9009\u9879"},"confirm_details":"\u8461\u8404\u9152\u552e\u51fa\u901a\u5e38\u9700\u89812-4\u5468\u7684\u65f6\u95f4\u3002","confirm_title":"\u786e\u8ba4\u60a8\u5c06\u88ab\u51fa\u552e\u7684\u8461\u8404\u9152","confirm-liquidation":{"description":"\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u6211\u4eec\u5df2\u5411\u60a8\u5173\u8054\u7684\u7535\u5b50\u90ae\u4ef6\u8d26\u6237\u53d1\u9001\u4e86\u4e00\u5c01\u786e\u8ba4\u7535\u5b50\u90ae\u4ef6\u3002\u5728\u60a8\u5355\u51fb\u8be5\u7535\u5b50\u90ae\u4ef6\u4e0a\u7684\u786e\u8ba4\u4e4b\u524d\uff0c\u60a8\u7684\u6e05\u7b97\u8fc7\u7a0b\u5c1a\u672a\u5b8c\u6210\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6\uff0c\u8bf7\u786e\u4fdd\u68c0\u67e5\u60a8\u7684\u5783\u573e\u90ae\u4ef6\u6587\u4ef6\u5939\u3002","index":"3","next":"/","prev":"\u65e0\u6548","subPage":"\u6e05\u7b97\u786e\u8ba4","title":"\u786e\u8ba4\u6e05\u7b97"},"confirm-your-wines":{"description":"\u8461\u8404\u9152\u552e\u51fa\u901a\u5e38\u9700\u89812-4\u5468\u7684\u65f6\u95f4\u3002","index":"2","next":"\u6e05\u7b97\u786e\u8ba4","prev":"\u7cbe\u9009\u8461\u8404\u9152","subPage":"\u8461\u8404\u9152\u786e\u8ba4","title":"\u786e\u8ba4\u60a8\u5c06\u88ab\u51fa\u552e\u7684\u8461\u8404\u9152"},"contact_support":"\u8bf7\u8054\u7cfb\u6211\u4eec\u7684\u652f\u6301\u56e2\u961f","corp_bonds":"\u516c\u53f8\u503a\u5238","did_not_get_email":"\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6","early_penalty":"\u63d0\u524d\u6e05\u7b97\u7f5a\u6b3e","fee_description":"\u4eab\u53d73\u4e2a\u6708\u7684\u65e0\u624b\u7eed\u8d39\u6295\u8d44\u3002\u5bf9\u4e8e\u60a8\u7684\u957f\u671f\u6295\u8d44\uff0c\u6211\u4eec\u8868\u793a\u70ed\u70c8\u6b22\u8fce\u3002","fee_next_button":"\u524d\u5f80\u6982\u89c8","fee_title":"\u606d\u559c\u60a8","feedback-options":{"before-you-request":{"acknowlege":"\u786e\u8ba4\u5e76\u7ee7\u7eed","back":"\u8fd4\u56de","sharpe-ratio-description":"\u590f\u666e\u6bd4\u7387\u8861\u91cf\u7684\u662f\u98ce\u9669\u8c03\u6574\u540e\u7684\u6536\u76ca\u3002\u6bd4\u7387\u8d8a\u5927\uff0c\u8868\u793a\u5728\u8003\u8651\u8d44\u4ea7\u98ce\u9669\u7684\u60c5\u51b5\u4e0b\u6536\u76ca\u5c31\u4f1a\u8d8a\u9ad8\u3002","sharpe-ratio":{"year":"\u590f\u666e\u6bd4\u7387\uff08 {{startYear}} - {{endYear}} \uff09"},"sticky-box":{"advisor":"\u6295\u8d44\u987e\u95ee","book-call":"\u6765\u7535\u9884\u7ea6","liz":"\u4e3d\u5179\xb7\u9053\u8482\xb7\u7c73\u5207\u5c14","subtitle":"\u6b22\u8fce\u6765\u7535\u54a8\u8be2\u5373\u5c06\u63a8\u51fa\u7684\u9650\u91cf\u8461\u8404\u9152\u548c\u671f\u8d27\u3002","title":"\u672c\u6708\u53d1\u5e03\u7684\u7f8e\u9152\u5229\u6da6\u4e30\u539a\uff0c\u673a\u4f1a\u96be\u5f97\uff0c\u4e0d\u8981\u9519\u8fc7\uff01"},"title":"\u5728\u7533\u8bf7\u6e05\u7b97\u6295\u8d44\u4e4b\u524d\u987b\u77e5\u6089\u7684\u4e8b\u9879"},"completed":{"description":"\u4ea4\u6613\u5b8c\u6210\u65f6\uff0c\u6211\u4eec\u4f1a\u901a\u77e5\u60a8","feedback":"\u6211\u4eec\u975e\u5e38\u91cd\u89c6\u60a8\u7684\u53cd\u9988\uff0c\u5982\u679c\u60a8\u80fd\u544a\u77e5\u6211\u4eec\u60a8\u5151\u73b0\u8461\u8404\u9152\u7684\u539f\u56e0\uff0c\u6211\u4eec\u5c06\u4e0d\u80dc\u611f\u6fc0\u3002\u6211\u4eec\u5411\u60a8\u627f\u8bfa\uff0c\u60a8\u7684\u53cd\u9988\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u516c\u5f00\uff0c\u56e0\u6b64\u4e0d\u4f1a\u5bf9\u60a8\u7684\u7533\u8bf7\u4ea7\u751f\u4efb\u4f55\u7684\u5f71\u54cd\u3002","leave-feedback-placeholder":"\u60a8\u7684\u53cd\u9988\uff08\u53ef\u9009\uff09","title":"\u60a8\u7684\u8461\u8404\u9152\u5df2\u88ab\u5b89\u6392\u51fa\u552e"},"confirm-liquidation":{"contact-support":"\u8bf7\u8054\u7cfb\u6211\u4eec\u7684\u652f\u6301\u56e2\u961f","did-not-receive":"\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6","please":"\u8bf7","resend-email":"\u91cd\u65b0\u53d1\u9001\u7535\u5b50\u90ae\u4ef6"},"fee-congrats":{"description":"\u4eab\u53d73\u4e2a\u6708\u7684\u65e0\u624b\u7eed\u8d39\u6295\u8d44\u3002\u5bf9\u4e8e\u60a8\u7684\u957f\u671f\u6295\u8d44\uff0c\u6211\u4eec\u8868\u793a\u70ed\u70c8\u6b22\u8fce\u3002","next-button":"\u524d\u5f80\u6982\u89c8","title":"\u606d\u559c\u60a8"},"option1":"\u6211\u56e0\u4e3a\u5e02\u573a\u73af\u5883\u8981\u6c42\u51fa\u552e","option2":"\u6211\u56e0\u4e2a\u4eba\u539f\u56e0\u8981\u6c42\u51fa\u552e","option3":"\u6211\u5bf9Vinovest\u7684\u7ecf\u9a8c\u4e0d\u592a\u6ee1\u610f","option4":"\u6211\u7684\u8d39\u7528/\u8d26\u6237\u8d39\u7528\u592a\u9ad8","option5":"\u6211\u9009\u62e9\u4e0d\u56de\u7b54","subscribe":{"label":"\u6b22\u8fce\u8ba2\u9605Vinovest\u6700\u65b0\u8d44\u8baf"},"support":{"email":"\u8bf7\u8bbf\u95ee","email-rest":"\u53ef\u4e3a\u4efb\u4f55\u95ee\u9898\u63d0\u4f9b\u89e3\u7b54\u7684\u9875\u9762","mobile-email":"\u7535\u5b50\u90ae\u4ef6","mobile-questions":"\u5982\u6709\u95ee\u9898","support":"\u652f\u6301"}},"fine_wine":"\u4e0a\u7b49\u8461\u8404\u9152","gold":"\u9ec4\u91d1","gov_bonds":"\u653f\u5e9c\u503a\u5238","hk_equitities":"\u9999\u6e2f\u80a1\u7968","irs":"\u60a8\u7684\u4efb\u4f55\u6295\u8d44\u5151\u73b0\u90fd\u4f1a\u4e0a\u62a5\u7ed9\u7f8e\u56fd\u56fd\u5185\u7a0e\u52a1\u7f72\uff0c\u60a8\u7684\u6536\u76ca\u53ef\u80fd\u4f1a\u88ab\u5f81\u7a0e\u3002 \u4f1f\u8bfa\u7ea2\u9152\u4e0d\u63d0\u4f9b\u7a0e\u52a1\u54a8\u8be2\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u5bf9\u76f8\u5173\u7a0e\u52a1\u4e8b\u5b9c\u8fd8\u6709\u7591\u95ee\uff0c\u8bf7\u5728\u8fdb\u884c\u4e0b\u4e00\u6b65\u64cd\u4f5c\u4e4b\u524d\u5411\u60a8\u7684\u8d22\u52a1\u987e\u95ee\u6216\u7a0e\u52a1\u4e13\u5bb6\u54a8\u8be2\u3002","liquid_details":"\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u6211\u4eec\u5df2\u5411\u60a8\u5173\u8054\u7684\u7535\u5b50\u90ae\u4ef6\u8d26\u6237\u53d1\u9001\u4e86\u4e00\u5c01\u786e\u8ba4\u7535\u5b50\u90ae\u4ef6\u3002\u5728\u60a8\u5355\u51fb\u8be5\u7535\u5b50\u90ae\u4ef6\u4e0a\u7684\u786e\u8ba4\u4e4b\u524d\uff0c\u60a8\u7684\u6e05\u7b97\u8fc7\u7a0b\u5c1a\u672a\u5b8c\u6210\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6\uff0c\u8bf7\u786e\u4fdd\u68c0\u67e5\u60a8\u7684\u5783\u573e\u90ae\u4ef6\u6587\u4ef6\u5939\u3002","liquid_title":"\u786e\u8ba4\u6e05\u7b97","liquidate_info":"\u5728\u7533\u8bf7\u6e05\u7b97\u6295\u8d44\u4e4b\u524d\u987b\u77e5\u6089\u7684\u4e8b\u9879","liz":"\u4e3d\u5179\xb7\u9053\u8482\xb7\u7c73\u5207\u5c14","nature_asset":"\u9274\u4e8e\u8be5\u7c7b\u8d44\u4ea7\u7684\u81ea\u8eab\u5c5e\u6027\uff0c\u4e00\u65e6\u60a8\u5f00\u59cb\u51fa\u552e\u8461\u8404\u9152\uff0c\u6211\u4eec\u5c31\u4f1a\u4e3a\u60a8\u5bfb\u627e\u4e70\u5bb6\u3002 \u5f53\u6211\u4eec\u7684AI\u7b97\u6cd5\u8fd8\u672a\u8ba4\u4e3a\u60a8\u7684\u8461\u8404\u9152\u9002\u5b9c\u51fa\u552e\u7684\u65f6\u5019\uff0c\u60a8\u82e5\u9009\u62e9\u51fa\u552e\uff0c\u90a3\u4e48\u60a8\u7684\u8461\u8404\u9152\u5f88\u53ef\u80fd\u8fd8\u672a\u5230\u8fbe\u53e3\u611f\u6700\u4f73\u7684\u65f6\u673a\u3002 \u6211\u4eec\u65e0\u6cd5\u4fdd\u8bc1\u5b83\u4eec\u4f1a\u5728\u60a8\u7684\u6295\u8d44\u7ec4\u5408\u4e2d\u4fdd\u6301\u76ee\u524d\u7684\u552e\u4ef7\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u6700\u7ec8\u7684\u51fa\u552e\u4ef7\u683c\u4f1a\u4ecb\u4e8e\u6211\u4eec\u7684\u6cbd\u76d8\u4ef7\u548c\u4e70\u65b9\u7684\u51fa\u4ef7\u4e4b\u95f4\u3002","oil":"\u77f3\u6cb9","optional_feedback":"\u60a8\u7684\u53cd\u9988\uff08\u53ef\u9009\uff09","penalty":"\u5982\u679c\u60a8\u9700\u8981\u5728\u9996\u6b21\u6ce8\u8d44\u540e\u768460\u5929\u5185\u63d0\u6b3e\uff0c\u6211\u4eec\u4f1a\u6536\u53d63\uff05\u7684\u63d0\u524d\u6e05\u7b97\u670d\u52a1\u8d39\u7528\u3002\u6d3b\u52a8\u5e10\u6237\u6301\u6709\u4eba\u5728\u9996\u6b21\u6ce8\u8d4460\u5929\u540e\u63d0\u6b3e\u5219\u65e0\u9700\u652f\u4ed8\u989d\u5916\u7684\u9500\u552e\u8d39\u7528\u3002","please":"\u8bf7","resend_email":"\u91cd\u65b0\u53d1\u9001\u7535\u5b50\u90ae\u4ef6","select_details":"\u901a\u5e38\uff0c\u5728\u5e02\u573a\u4e0a\u51fa\u552e\u8461\u8404\u9152\u9700\u89812-4\u5468\u7684\u65f6\u95f4\u3002","select_title":"\u9009\u62e9\u8981\u51fa\u552e\u7684\u8461\u8404\u9152","select-wines":{"description":"\u901a\u5e38\uff0c\u5728\u5e02\u573a\u4e0a\u51fa\u552e\u8461\u8404\u9152\u9700\u89812-4\u5468\u7684\u65f6\u95f4\u3002","holdings":{"quantity":"\u6570\u91cf","sell":"\u51fa\u552e","title":"\u60a8\u7684\u8d44\u4ea7"},"index":"1","next":"\u8461\u8404\u9152\u786e\u8ba4","note":"\u6ce8\u610f\uff1a\u8981\u6c42\u5b8c\u5168\u6e05\u7b97\u4f1a\u81ea\u52a8\u53d6\u6d88\u6240\u6709\u7b49\u5f85\u7684\u8ba2\u5355\u3002\u8981\u67e5\u770b\u5386\u53f2\u8ba2\u5355\u8bb0\u5f55\uff0c\u60a8\u53ef\u4ee5\u4ece","prev":"\u9009\u9879\u9009\u62e9","sell-wine-button":"\u51fa\u552e\u6211\u7684\u8461\u8404\u9152","subPage":"\u7cbe\u9009\u8461\u8404\u9152","title":"\u9009\u62e9\u8981\u51fa\u552e\u7684\u8461\u8404\u9152","transaction-tab":"\u4ea4\u6613\u6807\u7b7e"},"sell-options":{"all":"\u51fa\u552e\u6240\u6709\u6211\u7684\u8461\u8404\u9152\u85cf\u54c1","note":"\u6ce8\u610f\uff1a\u8981\u6c42\u5b8c\u5168\u6e05\u7b97\u4f1a\u81ea\u52a8\u53d6\u6d88\u6240\u6709\u7b49\u5f85\u7684\u8ba2\u5355\u3002\u8981\u67e5\u770b\u5386\u53f2\u8ba2\u5355\u8bb0\u5f55\uff0c\u60a8\u53ef\u4ee5\u4ece","some":"\u51fa\u552e\u90e8\u5206\u6211\u7684\u8461\u8404\u9152\u85cf\u54c1","transactionTab":"\u4ea4\u6613\u6807\u7b7e"},"sharpe_ratio_description":"\u590f\u666e\u6bd4\u7387\u8861\u91cf\u7684\u662f\u98ce\u9669\u8c03\u6574\u540e\u7684\u6536\u76ca\u3002\u6bd4\u7387\u8d8a\u5927\uff0c\u8868\u793a\u5728\u8003\u8651\u8d44\u4ea7\u98ce\u9669\u7684\u60c5\u51b5\u4e0b\u6536\u76ca\u5c31\u4f1a\u8d8a\u9ad8\u3002","sharpe_ratio_year":"\u590f\u666e\u6bd4\u7387\uff08 %1$s _ %1$s \uff09","sticky_box_subtitle":"\u6b22\u8fce\u6765\u7535\u54a8\u8be2\u5373\u5c06\u63a8\u51fa\u7684\u9650\u91cf\u8461\u8404\u9152\u548c\u671f\u8d27\u3002","sticky_box_title":"\u672c\u6708\u53d1\u5e03\u7684\u7f8e\u9152\u5229\u6da6\u4e30\u539a\uff0c\u673a\u4f1a\u96be\u5f97\uff0c\u4e0d\u8981\u9519\u8fc7\uff01","subscribe":"\u6b22\u8fce\u8ba2\u9605Vinovest\u6700\u65b0\u8d44\u8baf","taxable":"\u5151\u73b0\u53ef\u80fd\u9700\u8981\u5f81\u7a0e","UK Equitites":"\u82f1\u56fd\u80a1\u7968","us_equities":"\u7f8e\u56fd\u80a1\u7968","vinovest_algo":"\u4f1f\u8bfa\u7ea2\u9152\u7684\u7b97\u6cd5\u4e0e\u6e05\u7b97","wine_longterm":"\u8461\u8404\u9152\u6295\u8d44\u662f\u4e00\u9879\u957f\u671f\u7684\u6295\u8d44","wine_longterm_explain":"\u6295\u8d44\u7ea7\u4f18\u8d28\u8461\u8404\u9152\u662f\u4e00\u79cd\u957f\u671f\u8d44\u4ea7\u7c7b\u522b\uff0c\u5b83\u6839\u636e\u4f9b\u5e94\u91cf\u7684\u51cf\u5c11\u548c\u4ea7\u54c1\u8d28\u91cf\u7684\u63d0\u9ad8\u6765\u63a8\u52a8\u552e\u4ef7\u3002\u6295\u8d44\u7684\u8461\u8404\u9152\u8d8a\u65e9\u51fa\u552e\uff0c\u6240\u83b7\u5f97\u7684\u6536\u76ca\u53ef\u80fd\u8d8a\u6709\u9650\uff0c\u4e14\u53ef\u80fd\u4f1a\u8ba9\u6295\u8d44\u8005\u9762\u4e34\u989d\u5916\u7684\u7f5a\u6b3e\u548c\u7a0e\u6536\u3002\u5c31\u50cf\u4f18\u8d28\u8461\u8404\u9152\u4e00\u6837\uff0c\u8461\u8404\u9152\u6295\u8d44\u4e5f\u9700\u8981\u65f6\u95f4\u915d\u917f\u53d1\u9175\uff0c\u8d8a\u6709\u8010\u5fc3\uff0c\u6536\u76ca\u624d\u80fd\u8d8a\u9ad8\uff01","wine_market_returns":"\u4f18\u8d28\u8461\u8404\u9152\u4e0d\u4ec5\u53ef\u4ee5\u5e26\u6765\u9ad8\u4e8e\u5e02\u573a\u7684\u6536\u76ca\uff0c\u6b64\u7c7b\u8d44\u4ea7\u8fd8\u53ef\u4ee5\u5e26\u6765\u98ce\u9669\u8c03\u6574\u540e\u7684\u5f3a\u52b2\u6536\u76ca\u3002 \u5f53\u6295\u8d44\u53e6\u7c7b\u8d44\u4ea7\u65f6\uff0c\u8fd9\u4e00\u70b9\u5c24\u4e3a\u91cd\u8981\uff0c\u56e0\u4e3a\u53e6\u7c7b\u8d44\u4ea7\u901a\u5e38\u88ab\u89c6\u4e3a\u62b5\u6d88\u5176\u4ed6\u8d44\u4ea7\u6295\u8d44\u6536\u76ca\u6ce2\u52a8\u7684\u4e00\u79cd\u65b9\u5f0f\u3002","wines_scheduled":"\u60a8\u7684\u8461\u8404\u9152\u5df2\u88ab\u5b89\u6392\u51fa\u552e"}')},336:function(e){e.exports=JSON.parse('{"depositCta":"\u73b0\u5728\u6295\u8d44\u4fbf\u53ef\u9a6c\u4e0a\u5f97\u5230\uff01","google-signin":{"button-label":"\u7528\u8c37\u6b4c","login":"\u767b\u5f55","signup":"\u6ce8\u518c"},"okta-check":{"button":"\u8fd4\u56de\u9996\u9875","message":"\u8bf7\u67e5\u770b\u60a8\u90ae\u4ef6\u4e2d\u6240\u6536\u5230\u7684\u94fe\u63a5\u5e76\u91cd\u8bbe\u5bc6\u7801\u3002\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u6b64\u94fe\u63a5\u5c06\u572860\u5206\u949f\u540e\u5931\u6548\u3002\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u63a5\u6536\u9700\u8981\u51e0\u5206\u949f\uff0c\u8bf7\u7a0d\u540e\u3002","title":"\u8bf7\u67e5\u770b\u60a8\u7684\u6536\u4ef6\u7bb1"},"okta-login":{"button-create":"\u521b\u5efa\u65b0\u5e10\u6237","button-forgot":"\u5fd8\u8bb0\u5bc6\u7801\uff1f","button-login":"\u767b\u5f55","empty-email":"\u8bf7\u8f93\u5165\u7535\u5b50\u90ae\u4ef6\u5730\u5740","fail-login":"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u548c\u5bc6\u7801\u3002","invalid-email":"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff01","invalid-password":"\u8bf7\u8f93\u5165\u5bc6\u7801\u3002","or":"\u6216\u8005"},"okta-register":{"button-account":"\u5df2\u6709\u5e10\u6237\uff1f","button-email":"\u7528\u7535\u5b50\u90ae\u4ef6\u6ce8\u518c","button-login":"\u767b\u5f55","disclaimer":"\u6ce8\u518c\u4f1f\u8bfa\u7ea2\u9152\u5e10\u6237\u5373\u8868\u793a\u60a8\u540c\u610f","disclaimer-cont":"\u548c","email":"\u7535\u5b50\u90ae\u4ef6","empty-email":"\u8bf7\u8f93\u5165\u7535\u5b50\u90ae\u4ef6\u5730\u5740","error-name":"\u8bf7\u8f93\u5165\u60a8\u7684\u5168\u540d","header-email":"\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u5b50\u90ae\u7bb1","header-invest":"\u8461\u8404\u9152\u6295\u8d44\uff0c\u5373\u523b\u542f\u822a\uff01","header-name":"\u8bf7\u8f93\u5165\u60a8\u7684\u5168\u540d","header-password":"\u521b\u5efa\u5bc6\u7801","international":"\u9002\u7528\u4e8e\u6240\u6709\u56fd\u9645\u5ba2\u6237","invalid-email":"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff01","newsletter":"\u60a8\u4e5f\u540c\u610f\u5b9a\u671f\u63a5\u6536\u6211\u4eec\u7684\u6700\u65b0\u8d44\u8baf","password":"\u5bc6\u7801","password-char":"8\u4e2a\u5b57\u7b26","password-cont":"\u548c","password-min":"\u81f3\u5c11","password-num":"\u4e00\u4e2a\u6570\u5b57","password-special":"\u4e00\u4e2a\u7279\u6b8a\u5b57\u7b26","password-upper":"\u4e00\u4e2a\u5927\u5199\u5b57\u6bcd","placeholder-first":"\u540d","placeholder-last":"\u59d3","privacy":"\u9690\u79c1\u653f\u7b56","show-password":"\u663e\u793a\u5bc6\u7801","submit":"\u7ee7\u7eed","subscribe":"\u6b22\u8fce\u8ba2\u9605\u6211\u4eec\u7684\u6700\u65b0\u8d44\u8baf\u3002","terms":"\u670d\u52a1\u6761\u6b3e"},"okta-reset":{"button-back":"\u8fd4\u56de\u767b\u5f55\u9875\u9762","button-submit":"\u53d1\u9001\u6307\u4ee4","email-empty":"\u8bf7\u8f93\u5165\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002","email-invalid":"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff01","email-placeholder":"\u7535\u5b50\u90ae\u4ef6","message":"\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\uff0c\u6211\u4eec\u5c06\u5411\u60a8\u53d1\u9001\u5982\u4f55\u91cd\u8bbe\u5bc6\u7801\u7684\u8bf4\u660e\u3002","title":"\u91cd\u7f6e\u5bc6\u7801"},"referral-confirmation":{"depositCta":"\u73b0\u5728\u6295\u8d44\u4fbf\u53ef\u9a6c\u4e0a\u5f97\u5230\uff01","welcomeToVinovest":"\u6b22\u8fce\u8bbf\u95eeVinovest\u3002\u611f\u8c22\u60a8\u670b\u53cb\u7684\u5927\u529b\u652f\u6301\uff0c\u60a8\u5df2\u83b7\u5f97Vinovest\u4e09\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f\uff01","woohooTitle":"\u606d\u559c\u60a8\uff01\u60a8\u67093\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f"},"uppercase":"{{text, uppercase}}","welcomeToVinovest":"\u6b22\u8fce\u8bbf\u95eeVinovest\u3002\u611f\u8c22\u60a8\u670b\u53cb\u7684\u5927\u529b\u652f\u6301\uff0c\u60a8\u5df2\u83b7\u5f97Vinovest\u4e09\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f\uff01","woohooTitle":"\u606d\u559c\u60a8\uff01\u60a8\u67093\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f"}')},337:function(e){e.exports=JSON.parse('{"backLink":"\u56de\u5230\u9996\u9875","subtitle":"\u8be5\u9875\u9762\u4e22\u5931\u6216\u60a8\u7ec4\u88c5\u94fe\u63a5\u4e0d\u6b63\u786e","title":"\u627e\u4e0d\u5230\u7f51\u9875"}')},338:function(e){e.exports=JSON.parse('{"account-value":{"title":"\u8d26\u6237\u603b\u503c","today":"\u4eca\u5929\u7684\u3002","tooltip":"\u60a8\u7684\u8d26\u6237\u603b\u503c\u663e\u793a\u5728\u6b64\u56fe\u8868\u4e2d\u3002\u6240\u6709\u7684\u62bc\u91d1\u548c\u4f30\u8ba1\u7684\u8461\u8404\u9152\u4ef7\u503c\u5c06\u5728\u8fd9\u91cc\u663e\u793a\u3002"},"all":"\u5168\u90e8","american":"\u7f8e\u56fd","auto-invest":{"description":"\u81ea\u52a8\u6295\u8d44\u53ef\u4ee5\u8ba9\u60a8\u6309\u8d2d\u5165\u8bc1\u5238\u7684\u7f8e\u5143\u4ef7\u683c\u5e73\u5747\u8ba1\u7b97\u6cd5\u8f7b\u677e\u5730\u5bf9\u8461\u8404\u9152\u7ec4\u5408\u8fdb\u884c\u957f\u671f\u7684\u6295\u8d44\u3002\u60a8\u53ea\u9700\u9009\u62e9\u6295\u8d44\u91d1\u989d\u548c\u60f3\u8981\u7684\u6295\u8d44\u5468\u671f\uff08\u6bcf\u5468\uff0c\u6bcf\u6708\u7b49\uff09\u5373\u53ef\u5f00\u59cb\u3002","description_uppercase":"$ t\uff08auto-invest.description\uff0c\u5927\u5199\uff09","enroll-button":"\u7acb\u5373\u8282\u7701{{percentage}} \uff05","title":"\u8bbe\u7f6e\u81ea\u52a8\u6295\u8d44\u53ef\u4ee5\u5e2e\u60a8\u8282\u7701{{percentage}}%\u7684\u8d39\u7528"},"book-call":{"book-button":"\u6765\u7535\u9884\u7ea6","subtitle":"\u4e86\u89e3\u6709\u5173\u5efa\u7acb\u8461\u8404\u9152\u6295\u8d44\u7ec4\u5408\u4ee5\u62b5\u5fa1\u9632\u8303\u4e0d\u786e\u5b9a\u7684\u5e02\u573a\u73af\u5883","title":"\u8bf7\u7535\u8bdd\u9884\u7ea6\u6211\u4eec\u7684\u8461\u8404\u9152\u4e13\u5bb6"},"bordeaux":"\u6ce2\u5c14\u591a\u8461\u8404\u9152","burgundy":"\u52c3\u826e\u7b2c\u8461\u8404\u9152","california":"\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde","champagne":"\u9999\u69df","deposit-banner-list":{"pending-message":"\u60a8\u6709\u4e00\u7b14\u8d44\u91d1\u6b63\u5728\u5904\u7406\u4e2d\u3002\u60a8\u7684\u94f6\u884c\u901a\u5e38\u4f1a\u57282-4\u4e2a\u5de5\u4f5c\u65e5\u5185\u786e\u8ba4\u8d44\u91d1\uff0c\u5e76\u5c06\u5176\u8f6c\u5165\u60a8\u7684\u4f1f\u8bfa\u7ea2\u9152\u5e10\u6237\u3002\u8bf7\u8bbf\u95ee","pending-message-cont":"\u70b9\u51fb\u5e76\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f","pending-message-mobile":"\u60a8\u7684\u8d44\u91d1\u6b63\u5728\u5904\u7406\u4e2d\u3002\u8bf7\u8bbf\u95ee","pending-message-mobile-cont":"\u70b9\u51fb\u5e76\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f","sourced-wine-message":"\u8d44\u91d1\u5df2\u5230\u8d26\uff01\u6211\u4eec\u7684AI\u7b97\u6cd5\u6b63\u5728\u4ece5000\u4e2a\u4e0d\u540c\u7684\u4f9b\u5e94\u5546\u4e2d\u5e2e\u60a8\u641c\u5bfb\u62e5\u6709\u6700\u4f18\u4ef7\u683c\u7684\u8461\u8404\u9152\u3002\u9274\u4e8e\u6b64\u7c7b\u8d44\u4ea7\u7684\u81ea\u8eab\u5c5e\u6027\uff0c\u8be5\u8fc7\u7a0b\u6700\u591a\u53ef\u80fd\u9700\u89813\u5468\u7684\u65f6\u95f4\u3002\u8bf7\u8bbf\u95ee","sourced-wine-message-cont":"\u70b9\u51fb\u5e76\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f","sourced-wine-message-mobile":"\u8d44\u91d1\u5df2\u5230\u8d26\uff01\u8bf7\u8bbf\u95ee","transaction-link":"\u4ea4\u6613"},"diversification":{"add-funds-2":"\u5230\u60a8\u7684\u8d26\u6237","add-funds-link":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","addFunds":"\u968f\u7740\u65f6\u95f4\u4e0d\u65ad\u63d0\u5347\u60a8\u6295\u8d44\u7684\u591a\u5143\u5316","description-bar":"\u4e3a\u60a8\u4e70\u8fdb\u8461\u8404\u9152\u540e\uff0c\u60a8\u5c31\u4f1a\u770b\u5230\u6309\u5730\u533a\u5212\u5206\u7684\u8461\u8404\u9152\u7ec6\u5206\u4fe1\u606f","title":"\u591a\u5143\u5316"},"historical-returns":{"returns":"\u6536\u76ca\u5386\u53f2\u8bb0\u5f55"},"italian":"\u610f\u5927\u5229\u7684","personal-snapshot":{"account-level":"\u8d26\u6237\u7ea7\u522b","friend":"\u670b\u53cb","investing":"\u6b63\u5728\u6295\u8d44","investment-plan":"\u6295\u8d44\u65b9\u6848","net-returns":"\u8fc4\u4eca\u4e3a\u6b62\u7684\u51c0\u6536\u76ca","not-investing":"\u5c1a\u672a\u8bbe\u5b9a","snapshot-header":"\u8fd9\u662f\u60a8\u7684\u8d26\u6237\u5feb\u7167","welcome":"\u6b22\u8fce","wine_collection":"\u60a8\u7684\u8461\u8404\u9152\u6536\u85cf"},"piedmont":"\u76ae\u57c3\u8499\u7279","quality-value":{"authenticity-header":"\u771f\u5b9e\u6027","description":"\u6211\u4eec\u4e0e\u917f\u9152\u5382\u4ee5\u53ca\u503c\u5f97\u4fe1\u8d56\u7684\u884c\u4e1a\u5408\u4f5c\u4f19\u4f34\u76f4\u63a5\u5408\u4f5c\uff0c\u4ee5\u6b64\u786e\u4fdd\u6211\u4eec\u8d2d\u4e70\u7684\u6bcf\u4e00\u74f6\u8461\u8404\u9152\u90fd\u8d27\u771f\u4ef7\u5b9e\u4e14\u6709\u4ea7\u5730\u53ef\u5faa\u3002","insurance-description":"Vinovest\u6709\u5168\u9762\u7684\u4fdd\u9669\uff0c\u56e0\u6b64\u53ef\u4ee5\u786e\u4fdd\u80fd\u5728\u9047\u5230\u7834\u635f\u6216\u88ab\u76d7\u7684\u4e8b\u6545\u4e4b\u65f6\u80fd\u5b8c\u5168\u4ee5\u5e02\u573a\u4ef7\u503c\u8fdb\u884c\u66ff\u6362\u3002","insurance-header":"\u5168\u989d\u4fdd\u9669","stored-description":"\u6211\u4eec\u6700\u5148\u8fdb\u7684\u5b58\u50a8\u8bbe\u65bd\u53ef\u786e\u4fdd\u60a8\u7684\u8461\u8404\u9152\u65f6\u523b\u5904\u4e8e\u5b8c\u7f8e\u9648\u917f\u72b6\u6001\u3002","stored-header":"\u5b8c\u7f8e\u5b58\u50a8"},"recommended-banner":{"fund":"\u5411\u60a8\u7684\u5e10\u6237\u6ce8\u8d44","investing":"\u6b63\u5728\u6295\u8d44","investment":"\u6295\u8d44","plan":"\u65b9\u6848\u662f","recommend":"\u60a8\u63a8\u8350\u7684"},"referal":{"message":"\u5f53\u60a8\u4e0e\u670b\u53cb\u5206\u4eab\u60a8\u7684\u552f\u4e00\u63a8\u8350\u4eba\u65f6\uff0c\u4f60\u4eec\u4fe9\u90fd\u4f1a\u53c2\u52a0\u62bd\u5956\u6d3b\u52a8\uff0c\u4ee5\u5728\u60a8\u7684\u8461\u8404\u9152\u6295\u8d44\u7ec4\u5408\u4e2d\u6dfb\u52a0$ 1000\u7684Vinovest\u4fe1\u7528\u989d\u5ea6\u3002\u6210\u529f\u63a8\u8350\u7684\u6b21\u6570\u8d8a\u591a\uff0c\u83b7\u80dc\u7684\u673a\u4f1a\u5c31\u8d8a\u5927\u3002\u6210\u529f\u63a8\u8350\u662f\u6307\u670b\u53cb\u4f7f\u7528\u60a8\u7684\u94fe\u63a5\u5e76\u4e3a\u4ed6\u4eec\u7684\u8d26\u6237\u6ce8\u8d44\u3002\u83b7\u5956\u8005\u5c06\u88ab\u968f\u673a\u9009\u62e9\u5e76\u5ba3\u5e032020\u5e7411\u670820\u65e5\u3002","sharelink":"\u83b7\u53d6\u5206\u4eab\u94fe\u63a5","win":"\u8d62\u53d6{{currencySymbol}} {{value}}"},"referral-module":{"earn":"\u8d62\u5f97\u5956\u52b1\u3002","earn-description":"\u60a8\u53ea\u9700\u6210\u529f\u9080\u8bf71\u4f4d\u670b\u53cb\u52a0\u5165Vinovest\uff0c\u60a8\u548c\u60a8\u7684\u670b\u53cb\u5373\u53ef\u83b7\u5f9790\u5929\u7684\u65e0\u670d\u52a1\u8d39\u6295\u8d44\u671f\u3002","invite":"\u9080\u8bf7\u3002","learn":"\u4e86\u89e3\u66f4\u591a"},"rest":"\u5176\u4ed6\u56fd\u5bb6/\u5730\u533a","rest_of_world":"\u4e16\u754c\u5176\u4ed6\u5730\u533a","returns-box":{"all":"\u6240\u6709\u65f6\u95f4","appreciation":"\u6b23\u8d4f","fees":"\u8d39\u7528","title":"\u6536\u76ca","total":"\u5171\u8ba1","ytd":"2021\u5e74\u81f3\u4eca","ytd_upper":"$ t\uff08returns-box.ytd\uff0c\u5927\u5199\uff09"},"rewards-box":{"cycles":"\u514d\u624b\u7eed\u8d39\u7684\u4ed8\u6b3e\u5468\u671f","cycles-message":"\u60a8\u4e0a\u4e2a\u6708\u7684\u5956\u52b1\u662f","cycles-period":"\u6708\u4efd","fees-description":"\u9080\u8bf7\u5df2\u63a5\u53d7","fees-title":"\u8282\u7701\u7684\u7ba1\u7406\u8d39","link":"\u590d\u5236\u94fe\u63a5","link-mobile":"\u590d\u5236","snapshot-description":"\u5f53\u60a8\u7684\u670b\u53cb\u901a\u8fc7\u60a8\u7684\u9080\u8bf7\u94fe\u63a5\u4e3a\u81ea\u5df1\u7684\u4f1f\u8bfa\u7ea2\u9152\u5e10\u6237\u6ce8\u8d44\u65f6\uff0c\u60a8\u548c\u60a8\u7684\u670b\u53cb\u4f1a\u83b7\u5f973\u4e2a\u6708\u514d\u8d39\u7684\u8461\u8404\u9152\u5b58\u50a8\u548c\u7ba1\u7406\u670d\u52a1\u3002","title":"\u5956\u52b1"},"rhone":"\u7f57\u7eb3\u6cb3","south_australia":"\u5357\u6fb3\u5927\u5229\u4e9a","whiskey-banner":{"early-access":"\u62a2\u5148\u4f53\u9a8c\uff01","learn-more":"\u4e86\u89e3\u66f4\u591a","whiskey-investing":"\u5a01\u58eb\u5fcc\u6295\u8cc7"},"wine-expert":"\u8461\u8404\u9152\u4e13\u5bb6"}')},339:function(e){e.exports=JSON.parse('{"add-funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","buttons":{"arrow-first":"\u52a0\u8f7d","arrow-second":"\u66f4\u591a"},"cellar-list":{"add-funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","bottle":"\u6bcf\u74f6","case":"\u6bcf\u7bb1","futures":"\uff08\u8461\u8404\u9152\u671f\u8d27\uff09","power":"\u8d2d\u4e70\u529b"},"condition":{"authentic":"\u771f\u6b63\u7684","coverage":"\u5168\u989d\u4fdd\u9669","excellent":"\u51fa\u8272\u7684","insurance":"\u4fdd\u9669","title":"\u6761\u4ef6","verfication":"\u9a8c\u8bc1"},"description":{"read":"\u7ee7\u7eed\u9605\u8bfb"},"graphical-price-history":{"title":"\u6bcf\u7bb1\u4f30\u8ba1\u4ef7\u683c","tooltip":"\u9884\u4f30\u4ef7\u683c\u662f\u8fd1\u671f\u5728\u5e02\u573a\u4e0a\u8d2d\u4e70\u8be5\u8461\u8404\u9152\u7684\u6700\u597d\u5e73\u5747\u4ef7\u683c\u3002"},"hero":{"futures":"\uff08\u8461\u8404\u9152\u671f\u8d27\uff09","learn":"\u4e86\u89e3\u66f4\u591a","pending-learn":"\u4e86\u89e3\u66f4\u591a","title":"\u4e3b\u6253\uff1a\u51fa\u81ea\u60a8\u7684\u9152\u7a96"},"wine-bottles-totals":{"bottle":"\u74f6","bottles":"\u8461\u8404\u9152","case":"\u60c5\u51b5","of":"\u7684"},"wine-cellar-model":{"average-hold":"\u5e73\u5747\u6301\u6709\u65f6\u95f4","contact":"\u60f3\u53c2\u89c2\u60a8\u7684\u8461\u8404\u9152\u5417\uff1f\u6211\u4eec\u6b22\u8fce\u60a8\u5230\u8bbf\u6211\u4eec\u7684\u4ed3\u50a8\u8bbe\u65bd\u5e76\u5341\u5206\u4e50\u610f\u4e3a\u60a8\u505a\u597d\u76f8\u5e94\u7684\u5b89\u6392\u3002\u8bf7","contact-contd":"\u4ee5\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002","contact-link":"\u8bf7\u8054\u7cfb\u6211\u4eec","cost":"\u5e73\u5747\u6210\u672c\u57fa\u51c6","percentage-portfolio":"%\u7684\u6295\u8d44","position":"\u60a8\u7684\u5934\u5bf8","position-total":"\u603b\u5934\u5bf8","quantity":"\u6570\u91cf","storage":"\u5b58\u50a8\u5730\u70b9"},"wine-cellar":{"buttons":{"load":"\u7ee7\u7eed\u52a0\u8f7d"},"cellar-view-toggle":{"grid":"\u7f51\u683c","List":"\u5217\u8868","list":"\u5217\u8868"},"empty-cellar":{"add-funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","empty":"\u5f00\u59cb\u7b51\u9020\u4e13\u5c5e\u60a8\u81ea\u5df1\u7684\u9152\u7a96\uff01","funded":"\u5f53\u6211\u4eec\u4e3a\u60a8\u5bfb\u627e\u6536\u76ca\u826f\u597d\u7684\u4ea4\u6613\u65f6\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85"},"list-view-titles":{"avg-cost":"\u5e73\u5747\u6210\u672c","basis":"\u57fa\u7840","position":"\u5934\u5bf8","quantity":"\u6570\u91cf","tooltip-cost-basis":"\u8fd9\u662f\u6bcf\u74f6\u7684\u5e73\u5747\u8d2d\u4e70\u4ef7\u683c\u3002","tooltip-position":"\u5934\u5bf8\u603b\u989d\u662f\uff0c\u6240\u62e5\u6709\u7684\u8461\u8404\u9152\u9884\u4f30\u4ef7\u503c\u6263\u6389\u624b\u7eed\u8d39\u540e\u518d\u52a0\u4e0a\u5f85\u5b8c\u6210\u7684\u8ba2\u5355\u91d1\u989d","tooltip-quantity":"\u6570\u91cf\u6307\u7684\u662f\u60a8\u62e5\u6709\u7684\u8461\u8404\u9152\u74f6\u6216\u8461\u8404\u9152\u7bb1\u7684\u6570\u91cf\u3002\u8461\u8404\u9152\u7bb1\u7684\u89c4\u683c\u67093\u74f6\u30016\u74f6\u300112\u74f6\uff0c\u800c\u8461\u8404\u9152\u7684\u4ef7\u683c\u5219\u4f1a\u56e0\u8461\u8404\u9152\u7bb1\u89c4\u683c\u7684\u4e0d\u540c\u800c\u53d1\u751f\u53d8\u5316\u3002","total":"\u5168\u90e8\u7684","wine":"\u8461\u8404\u9152"},"title":"\u60a8\u7684\u9152\u7a96","totals":{"basis":"\u57fa\u7840","bottles":"\u8461\u8404\u9152","cell_total":"\u5408\u8ba1","cost":"\u6210\u672c","position":"\u5934\u5bf8","quantity_title":"\u6570\u91cf","tooltip-position":"\u5934\u5bf8\u603b\u989d\u662f\uff0c\u6240\u62e5\u6709\u7684\u8461\u8404\u9152\u9884\u4f30\u4ef7\u503c\u6263\u6389\u624b\u7eed\u8d39\u540e\u518d\u52a0\u4e0a\u5f85\u5b8c\u6210\u7684\u8ba2\u5355\u91d1\u989d","tooltip-quantity":"\u6570\u91cf\u6307\u7684\u662f\u60a8\u62e5\u6709\u7684\u8461\u8404\u9152\u74f6\u6216\u8461\u8404\u9152\u7bb1\u7684\u6570\u91cf\u3002\u8461\u8404\u9152\u7bb1\u7684\u89c4\u683c\u67093\u74f6\u30016\u74f6\u300112\u74f6\uff0c\u800c\u8461\u8404\u9152\u7684\u4ef7\u683c\u5219\u4f1a\u56e0\u8461\u8404\u9152\u7bb1\u89c4\u683c\u7684\u4e0d\u540c\u800c\u53d1\u751f\u53d8\u5316\u3002","tooltip-total-cost":"\u8fd9\u662f\u60a8\u6240\u8d2d\u4e70\u7684\u8461\u8404\u9152\u603b\u8d39\u7528\u3002","total":"\u5168\u90e8\u7684","total_title":"\u5168\u90e8\u7684"}},"wine-maker-notes":{"title":"\u917f\u9152\u5e08\u968f\u7b14"}}')},340:function(e){e.exports=JSON.parse('{"button_cancel":"\u53d6\u6d88","button_save":"\u4fdd\u5b58","buttons":{"continue":"\u7ee7\u7eed","next":"\u4e0b\u4e00\u9879"},"error_post":"\u6682\u65f6\u65e0\u6cd5\u66f4\u65b0\u60a8\u7684\u4fe1\u606f\u3002","plans":{"aggressive_investing":"\u8fdb\u53d6\u578b\u6295\u8d44","aggressive":["\u6b63\u5728\u5bfb\u627e\u4f18\u8d28\u7684\u8461\u8404\u9152\u6295\u8d44\u7ec4\u5408\uff0c\u5e76\u5c06\u76ee\u6807\u671d\u9ad8\u589e\u957f\u8461\u8404\u9152\u7c7b\u503e\u659c","\u6709\u4e00\u4e2a\u4e2d\u957f\u671f\u7684\u65f6\u95f4\u8868","\u5df2\u6709\u6295\u8d44\u5176\u4ed6\u53ef\u66ff\u4ee3\u6027\u8d44\u4ea7\u7c7b\u522b\u7684\u7ecf\u9a8c"],"balanced_investing":"\u5e73\u8861\u6295\u8d44","balanced":["\u6b63\u5728\u5bfb\u627e\u591a\u5143\u5316\u7a0b\u5ea6\u6700\u9ad8\u7684\u8461\u8404\u9152\u4f73\u917f\u7ec4\u5408","\u6709\u4e00\u4e2a\u4e2d\u957f\u671f\u7684\u65f6\u95f4\u8868","\u53ef\u80fd\u5728\u80a1\u5e02\u4ee5\u5916\u7684\u5730\u65b9\u6295\u8d44\u66f4\u663e\u964c\u751f"],"conservative_investing":"\u4fdd\u5b88\u6295\u8d44","conservative":["\u6b63\u5728\u5bfb\u627e\u4f18\u8d28\u7684\u8461\u8404\u9152\u6295\u8d44\u7ec4\u5408\u8fdb\u884c\u4f18\u5316\u4ee5\u5b9e\u73b0\u4e0b\u884c\u4fdd\u62a4","\u6709\u4e00\u4e2a\u957f\u671f\u7684\u65f6\u95f4\u8868","\u60f3\u8981\u62e5\u6709\u5168\u7403\u7ecf\u8fc7\u5386\u53f2\u9a8c\u8bc1\u7684\u591a\u5143\u5316\u8461\u8404\u9152\u7ec4\u5408"],"your-portfolio":{"great":"\u592a\u597d\u4e86\uff0c\u82e5\u4f60...","label":"\u8fd9\u662f\u60a8\u81ea\u5236\u7684\u65b9\u6848","next-button":"\u4e0b\u4e00\u9879"}},"quiz":{"options":{"question-options":[{"name":"investingStyle","options":["\u4fdd\u5b88\u578b","\u7a33\u5065\u578b","\u8fdb\u53d6\u578b"],"text":"\u60a8\u5982\u4f55\u5f62\u5bb9\u81ea\u5df1\u7684\u6295\u8d44\u98ce\u683c\uff1f"},{"multiple":"1","name":"goalsWithVinovest","options":["\u83b7\u5f97\u6bd4\u6211\u7684\u5176\u4ed6\u6295\u8d44\u66f4\u9ad8\u7684\u98ce\u9669\u8c03\u6574\u540e\u6536\u76ca","\u5229\u7528\u5176\u4ed6\u8d44\u4ea7\u7c7b\u522b\u5b9e\u73b0\u591a\u5143\u5316","\u6295\u8d44\u6211\u70ed\u7231\u7684\u4e8b\u7269"],"text":"\u60a8\u52a0\u5165Vinovest\u7684\u4e3b\u8981\u52a8\u529b\u662f\u4ec0\u4e48\uff1f"},{"name":"anticipatedCashAccess","options":["\u4e0d\u52303\u5e74","3\u81f37\u5e74","7\u5e74\u4ee5\u4e0a"],"text":"\u60a8\u9884\u8ba1\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u8461\u8404\u9152\u5151\u73b0\uff1f\\\\n"}],"question1":["\u4fdd\u5b88\u7684","\u7f13\u548c","\u6311\u8845\u7684"],"question2":["\u83b7\u5f97\u6bd4\u6211\u5176\u4ed6\u7684\u6295\u8d44\u66f4\u9ad8\u7684\u98ce\u9669\u8c03\u6574\u540e\u6536\u76ca","\u5229\u7528\u5176\u4ed6\u8d44\u4ea7\u7c7b\u522b\u5b9e\u73b0\u591a\u5143\u5316","\u6295\u8d44\u6211\u70ed\u7231\u7684\u4e8b\u7269"],"question3":["\u4e0d\u52303\u5e74","3\u81f37\u5e74","7\u5e74\u4ee5\u4e0a"]}},"your_portfolio":{"plan_subtitle":"\u6211\u4eec\u5c06\u771f\u5fc3\u611f\u8c22\uff0c\u82e5\u60a8...","plan_title":"\u8fd9\u662f\u60a8\u7684\u81ea\u5b9a\u4e49\u65b9\u6848"}}')},341:function(e){e.exports=JSON.parse('{"title":"\u6761\u6b3e\u53ca\u7ec6\u5219","general":{"title":"\u7efc\u8ff0","paragraph1":"\u5728Vinovest\uff0c\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u4f1a\u5458\u63d0\u4f9b\u4e00\u6d41\u4f53\u9a8c\uff0c\u5e76\u79c9\u627f\u6700\u9ad8\u4e13\u4e1a\u6c34\u51c6\u3002\u4e0b\u5217\u6761\u6b3e\u53ca\u7ec6\u5219\uff08\u4ee5\u4e0b\u7b80\u79f0\u201c\u6761\u6b3e\u201d\uff09\u5728\u60a8\u4e0eVinovest\u3001\u5176\u5173\u8054\u65b9\u3001\u4ee5\u53caVinovest\u53ca\u5176\u5173\u8054\u65b9\u7684\u6bcd\u516c\u53f8\u548c\u5b50\u516c\u53f8\uff08\u7edf\u79f0\u4e3a\u201cVinovest\u201d\u6216\u201c\u6211\u4eec\u201d\uff09\u4e4b\u95f4\uff0c\u5c31\u60a8\u4f7f\u7528\u672c\u7f51\u7ad9\uff08\u4ee5\u4e0b\u7b80\u79f0\u201cVinovest\u7f51\u7ad9\u201d\uff09\u53ca\u8be5\u5e73\u53f0\u4e0a\u63d0\u4f9b\u7684\u670d\u52a1\uff08\u4e0eVinovest\u7f51\u7ad9\u7edf\u79f0\u4e3a\u201c\u670d\u52a1\u201d\uff09\uff0c\u5305\u62ec\u4efb\u4f55\u5185\u5bb9\uff08\u5b9a\u4e49\u89c1\u4e0b\u6587\uff09\uff0c\u6784\u6210\u6709\u7ea6\u675f\u529b\u7684\u534f\u8bae\u3002\u5982\u60a8\u4e0d\u540c\u610f\u8be5\u7b49\u6761\u6b3e\uff0c\u8bf7\u52ff\u4e3a\u4efb\u4f55\u76ee\u7684\u4f7f\u7528\u6216\u8bbf\u95eeVinovest\u7f51\u7ad9\u6216\u670d\u52a1\u3002\u9002\u7528\u4e8e\u7279\u5b9a\u670d\u52a1\u3001Vinovest\u7f51\u7ad9\u7279\u5b9a\u533a\u57df\u3001\u6216\u7279\u5b9a\u5185\u5bb9\u6216\u4ea4\u6613\u7684\u9644\u52a0\u653f\u7b56\u3001\u6761\u6b3e\u548c\u6761\u4ef6\uff0c\u4e5f\u53ef\u80fd\u53d1\u5e03\u5728Vinovest\u7f51\u7ad9\u7684\u7279\u5b9a\u533a\u57df\u4e2d\uff0c\u4e0e\u672c\u6761\u6b3e\u4e00\u540c\u7ea6\u675f\u60a8\u5bf9\u8be5\u7b49\u533a\u57df\u7684\u4f7f\u7528\u3002\u4efb\u4f55\u6b64\u7c7b\u9644\u52a0\u653f\u7b56\u3001\u6761\u6b3e\u548c\u6761\u4ef6\u5747\u7eb3\u5165\u5230\u672c\u6761\u6b3e\u4e4b\u4e2d\u3002\u5982\u672c\u6761\u6b3e\u4e0e\u8be5\u7b49\u9644\u52a0\u653f\u7b56\u3001\u6761\u6b3e\u548c\u6761\u4ef6\u4e4b\u95f4\u5b58\u5728\u4efb\u4f55\u4e0d\u4e00\u81f4\u4e4b\u5904\uff0c\u5e94\u4ee5Vinovest\u7f51\u7ad9\u4e2d\u8be5\u7b49\u7279\u5b9a\u533a\u57df\u6240\u9002\u7528\u7684\u8be5\u7b49\u9644\u52a0\u653f\u7b56\u3001\u6761\u6b3e\u548c\u6761\u4ef6\u4e3a\u51c6\u3002Vinovest\u4fdd\u7559\u56e0\u7528\u6237\u8fdd\u53cd\u672c\u6761\u6b3e\u6216Vinovest\u7f51\u7ad9\u4e0a\u516c\u5e03\u7684\u5176\u4ed6\u6761\u6b3e\u800c\u53d6\u6d88\u548c/\u6216\u7ec8\u6b62\u4efb\u4f55\u7528\u6237\u8d26\u6237\u7684\u6743\u5229\u3002\u5728Vinovest\u7f51\u7ad9\u6216\u4e0eVinovest\u6709\u5173\u7684\u4efb\u4f55\u5176\u4ed6\u7f51\u7ad9\u4e0a\uff0c\u6216\u5728\u4e0e\u6211\u4eec\u56e2\u961f\u4efb\u4f55\u4eba\u5458\u8054\u7cfb\u65f6\uff0c\u6211\u4eec\u51b3\u4e0d\u5bb9\u5fcd\u4efb\u4f55\u6b3a\u8bc8\u884c\u4e3a\u3001\u521b\u5efa\u591a\u4e2a\u8d26\u6237\u4ee5\u83b7\u5f97\u989d\u5916\u79ef\u5206\u3001\u6ee5\u53d1\u5783\u573e\u90ae\u4ef6\u3001\u53d1\u9001\u717d\u52a8\u6027\u4fe1\u606f\u3001\u8fc7\u5ea6\u4f7f\u7528\u4eb5\u6e0e\u6216\u4fae\u8fb1\u6027\u8bed\u8a00\u7b49\u884c\u4e3a\u3002","paragraph2":"\u60a8\u5fc5\u987b\u5e74\u6ee121\u5468\u5c81\uff08\u6216\u5176\u4ed6\u4f9d\u636e\u60a8\u6240\u5728\u5730\u6cd5\u5f8b\u786e\u5b9a\u7684\u76f8\u5e94\u5e74\u9f84\uff09\uff0c\u65b9\u53ef\u4f7f\u7528Vinovest\u7f51\u7ad9\u5e76\u901a\u8fc7\u672c\u670d\u52a1\u8d2d\u4e70\u8461\u8404\u9152\u3002\u4ea4\u4ed8\u65f6\u53ef\u80fd\u9700\u8981\u51fa\u793a\u653f\u5e9c\u7b7e\u53d1\u7684\u6709\u6548\u8eab\u4efd\u8bc1\u4ef6\u3002","paragraph3":"\u8461\u8404\u9152\u9500\u552e\u662f\u7531\u4e00\u5bb6\u6709\u6267\u7167\u7684\u9152\u5382\u8fdb\u884c\u7684\uff0c\u5176\u8d1f\u8d23\u62db\u63fd\u5ba2\u6237\u3001\u62a5\u4ef7\u3001\u63a5\u5355\u3001\u917f\u9020\u53ca\u4ea4\u8d27\uff0c\u5e76\u63a5\u6536\u6240\u6709\u8ba2\u5355\u3002\u4e3a\u89e3\u51b3\u7f8e\u56fd\u5404\u5dde\u53ef\u80fd\u5b58\u5728\u7684\u9152\u7cbe\u996e\u6599\u6cd5\u5f8b\u5173\u6ce8\u95ee\u9898\uff0cVinovest\u5c06\u901a\u8fc7\u5373\u65f6\u6298\u4ef7\u65b9\u5f0f\u652f\u4ed8\u65b0\u4f1a\u5458\u63a8\u8350\u5956\u52b1\u548c\u6298\u51cf\u8fd0\u8d39\uff0c\u4e14\u8be5\u7b49\u5373\u65f6\u6298\u4ef7\u5c06\u6298\u51cf\u6389\u73b0\u6709\u4f1a\u5458\u6240\u8d2d\u4e70\u7684\u5404\u9879\u4ea7\u54c1\u7684\u90e8\u5206\u4ef7\u683c\u3002\u4e0a\u8ff0\u89c4\u5b9a\u5728\u6cd5\u5f8b\u7981\u6b62\u7684\u5730\u65b9\u65e0\u6548\u3002","paragraph4":"Vinovest\u7f51\u7ad9\u4ea6\u5c06\u63d0\u4f9b\u4ef7\u683c\u53ca\u5e02\u573a\u4fe1\u606f\u3002\u5c3d\u7ba1\u6211\u4eec\u4f1a\u5c3d\u529b\u5411\u60a8\u63d0\u4f9b\u51c6\u786e\u7684\u4fe1\u606f\uff0c\u4f46\u6211\u4eec\u65e0\u6cd5\u5411\u60a8\u4fdd\u8bc1\uff0c\u6211\u4eec\u5411\u60a8\u63d0\u4f9b\u7684\u4efb\u4f55\u5e02\u573a\u548c\u4ef7\u503c\u4fe1\u606f\u5728\u60a8\u83b7\u53d6\u8be5\u7b49\u4fe1\u606f\u4e4b\u65e5\u4ecd\u662f\u51c6\u786e\u7684\uff0c\u5e76\u4e14\u6211\u4eec\u6ca1\u6709\u4e49\u52a1\u66f4\u65b0\u8be5\u7b49\u4fe1\u606f\uff0c\u4e5f\u6ca1\u6709\u4e49\u52a1\u5728\u8be5\u7b49\u4fe1\u606f\u53d1\u751f\u4efb\u4f55\u53d8\u5316\u65f6\u901a\u77e5\u60a8\u3002"},"privacy":{"title":"\u9690\u79c1","paragraph1":"\u60a8\u5bf9Vinovest\u7f51\u7ad9\u548c\u670d\u52a1\u7684\u4f7f\u7528\u5747\u5e94\u9075\u5b88\u6211\u4eec\u5728","paragraph2":"\u4e0a\u53d1\u5e03\u7684\u9690\u79c1\u58f0\u660e\uff0c\u4e14\u8be5\u9690\u79c1\u58f0\u660e\u7ecf\u63f4\u5f15\u7eb3\u5165\u672c\u6761\u6b3e\u4e4b\u4e2d\uff0c\u5176\u9002\u7528\u4e8eVinovest\u5bf9\u4e2a\u4eba\u4fe1\u606f\u7684\u6536\u96c6\u3001\u4f7f\u7528\u3001\u62ab\u9732\u53ca\u5176\u4ed6\u5904\u7406\u3002"},"account":{"title":"\u60a8\u7684\u8d26\u6237","registration":"\u6ce8\u518c\u3002","membership":"\u4f1a\u5458\u4fe1\u606f\u53d8\u66f4\u3002","payment":"\u4ed8\u6b3e\u3002","paragraph1":"\u5982\u60a8\u5e0c\u671b\u4f7f\u7528Vinovest\u670d\u52a1\uff0c\u60a8\u987b\u540c\u610f\u6309\u7167Vinovest\u7f51\u7ad9\u4e0a\u7684\u8981\u6c42\u5b8c\u6210\u521d\u59cb\u6ce8\u518c\u6d41\u7a0b\uff0c\u5e76\u63d0\u4f9b\u51c6\u786e\u3001\u5b8c\u6574\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u60a8\u4f9d\u6cd5\u767b\u8bb0\u7684\u59d3\u540d\u3001\u5e74\u9f84\u3001\u8d26\u5355\u5730\u5740\u3001\u9001\u8d27\u5730\u5740\uff08\u5982\u4e0d\u540c\uff09\u3001\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3001\u7535\u8bdd\u53f7\u7801\u7b49\u3002\u5728\u4f7f\u7528\u6216\u901a\u8fc7\u6211\u4eec\u7684\u670d\u52a1\u8fdb\u884c\u8d2d\u4e70\u65f6\uff0c\u60a8\u5fc5\u987b\u5728\u63d0\u4ea4\u60a8\u7684\u8ba2\u5355\u65f6\u63d0\u4f9b\u4f7f\u7528\u4fe1\u7528\u5361\u6216\u5176\u4ed6\u4ed8\u6b3e\u5361\u65f6\u6240\u9700\u7684\u5b8c\u6574\u51c6\u786e\u4fe1\u606f\u3001\u6216\u94f6\u884c\u4fe1\u606f\uff0c\u5305\u62ec\u6301\u5361\u4eba/\u8d26\u6237\u6301\u6709\u4eba\u7684\u59d3\u540d\u3001\u4ed8\u6b3e\u5361\u53f7/\u8d26\u53f7\u3001\u5230\u671f\u65e5\uff08\u5982\u9002\u7528\uff09\uff0c\u4e14\u5728\u5fc5\u8981\u60c5\u51b5\u4e0b\uff0c\u8fd8\u9700\u63d0\u4f9b\u4fe1\u7528\u5361\u5b89\u5168\u7801\u3002\u60a8\u5411Vinovest\u58f0\u660e\u5e76\u4fdd\u8bc1\uff0c\u60a8\u5728\u4f7f\u7528\u6216\u901a\u8fc7Vinovest\u670d\u52a1\u8fdb\u884c\u7684\u4efb\u4f55\u8d2d\u4e70\u6240\u4f7f\u7528\u7684\u4ed8\u6b3e\u5361\u6216\u8d26\u6237\u5747\u7ecf\u8fc7\u6388\u6743\u4e14\u5408\u6cd5\u3002\u5728\u521d\u59cb\u6ce8\u518c\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u5fc5\u987b\u9009\u62e9\u8bbf\u95ee\u670d\u52a1\u65f6\u5c06\u4f7f\u7528\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002\u4e3a\u4fdd\u62a4\u60a8\u7684\u6743\u76ca\uff0c\u60a8\u5fc5\u987b\u5bf9\u60a8\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u8fdb\u884c\u4fdd\u5bc6\u3002\u5982\u60a8\u5f97\u77e5\u6216\u6000\u7591\u7528\u6237\u540d\u6216\u5bc6\u7801\u7684\u5b89\u5168\u6027\u53d7\u5230\u7834\u574f\uff0c\u60a8\u5fc5\u987b\u7acb\u5373\u901a\u77e5Vinovest\u3002\u60a8\u5e94\u5bf9\u56e0\u672a\u80fd\u4fdd\u62a4\u597d\u60a8\u7684\u7528\u6237\u540d\u6216\u5bc6\u7801\u800c\u5f15\u8d77\u7684\u4efb\u4f55\u635f\u5931\u6216\u635f\u5bb3\u8d1f\u8d23\u3002","paragraph2":"\u60a8\u5e94\u8d1f\u8d23\u66f4\u65b0\u60a8\u7684\u6ce8\u518c\u4fe1\u606f\u3001\u652f\u4ed8\u670d\u52a1\u6216\u4ed8\u6b3e\u5361\u4fe1\u606f\uff08\u89c6\u60c5\u51b5\u800c\u5b9a\uff09\uff0c\u5e76\u8d1f\u8d23\u786e\u4fdd\u60a8\u6ce8\u518c\u4fe1\u606f\u4e2d\u7684\u8d26\u5355\u5730\u5740\u4e0e\u652f\u4ed8\u670d\u52a1\u6216\u4ed8\u6b3e\u5361\u7684\u8d26\u5355\u5730\u5740\u4e00\u81f4\u3002\u60a8\u4ea6\u5e94\u8d1f\u8d23\u53ca\u65f6\u901a\u77e5\u60a8\u7684\u652f\u4ed8\u670d\u52a1\u63d0\u4f9b\u5546\u6216\u4ed8\u6b3e\u5361\u53d1\u5361\u673a\u6784\u6709\u5173\u60a8\u7684\u8d26\u5355\u4fe1\u606f\u7684\u4efb\u4f55\u53d8\u66f4\uff0c\u6216\u60a8\u7684\u652f\u4ed8\u670d\u52a1\u8d26\u6237\u6216\u4ed8\u6b3e\u5361\u53f7\u4e22\u5931\u3001\u88ab\u76d7\u6216\u88ab\u672a\u7ecf\u6388\u6743\u4f7f\u7528\u7684\u4efb\u4f55\u60c5\u51b5\u3002","paragraph3":"\u60a8\u4e3a\u8ba2\u5355\u652f\u4ed8\u7684\u603b\u91d1\u989d\u662f\u60a8\u6240\u9009\u62e9\u7684\u4ea7\u54c1\u6216\u4e3a\u60a8\u9009\u62e9\u7684\u4ea7\u54c1\u7684\u4ef7\u683c\u3001\u6240\u6709\u9002\u7528\u7a0e\u6b3e\u4ee5\u53ca\u8fd0\u8f93\u548c\u624b\u7eed\u8d39\u7684\u603b\u548c\u3002\u5728\u60a8\u63d0\u4ea4\u8ba2\u5355\u65f6\u5373\u5e94\u652f\u4ed8\u8d27\u6b3e\uff0c\u4e14\u60a8\u7279\u6b64\u6388\u6743Vinovest\u5c4a\u65f6\u4ece\u60a8\u7684\u4ed8\u6b3e\u5361\u4e0a\u5212\u6263\u8be5\u7b14\u6b3e\u9879\u3002","paragraph4":"\u6240\u6709\u9152\u7c7b\u6e05\u5355\u4ec5\u4f9b21\u5468\u5c81\uff08\u6216\u5176\u4ed6\u4f9d\u636e\u60a8\u6240\u5728\u5730\u6cd5\u5f8b\u786e\u5b9a\u7684\u76f8\u5e94\u5e74\u9f84\uff09\u6216\u4ee5\u4e0a\u5e74\u9f84\u7684\u4eba\u58eb\u4f7f\u7528\u3002Vinovest\u4fdd\u7559\u81ea\u884c\u914c\u60c5\u51b3\u5b9a\u62d2\u7edd\u670d\u52a1\u3001\u7ec8\u6b62\u8d26\u6237\u3001\u5220\u9664\u6216\u7f16\u8f91\u5185\u5bb9\u6216\u53d6\u6d88\u8ba2\u5355\u7684\u6743\u5229\u3002Vinovest\u4f1a\u4f9d\u6cd5\u63d0\u4f9b\u6240\u6709\u670d\u52a1\uff0c\u60a8\u6240\u8981\u6c42\u7684\u8461\u8404\u9152\u53d1\u8d27\u53ef\u80fd\u4f1a\u56e0\u60a8\u6240\u5904\u53f8\u6cd5\u7ba1\u8f96\u533a\u5185\u9002\u7528\u7684\u8054\u90a6\u3001\u5dde\u3001\u53bf\u3001\u5e02\u548c\u5730\u65b9\u6cd5\u5f8b\u800c\u88ab\u6682\u505c\u6216\u65e0\u6cd5\u53d1\u8d27\u3002\u5728\u6b64\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c06\u6682\u505c\u53d1\u8d27\uff0c\u76f4\u81f3\u6211\u4eec\u80fd\u591f\u8fbe\u5230\u76f8\u5173\u6cd5\u5f8b\u8981\u6c42\u4e3a\u6b62\u3002"},"program":{"title":"VINOVEST\u8ba1\u5212","paragraph1":"\u5f53\u60a8\u5728Vinovest\u5f00\u7acb\u8d26\u6237\u65f6\uff0c\u60a8\u5c06\u5411\u60a8\u7684Vinovest\u8d26\u6237\u4e2d\u5b58\u5165\u8d44\u91d1\u3002\u6b64\u540e\uff0c\u60a8\u5c06\u6388\u6743\u6211\u4eec\u6839\u636e\u60a8\u5b58\u5165\u7684\u91d1\u989d\u63d0\u4f9b\u4e00\u5957\u8461\u8404\u9152\u8d2d\u4e70\u5efa\u8bae\u3002\u60a8\u4e86\u89e3\uff0c\u6211\u4eec\u5c06\u8d2d\u4e70\u771f\u6b63\u7684\u8461\u8404\u9152\u5e76\u5c06\u5176\u50a8\u5b58\u5728\u6211\u4eec\u7684\u5b89\u5168\u8bbe\u65bd\u4e2d\u3002\u8fd9\u4e9b\u8461\u8404\u9152\u5f52\u60a8\u800c\u975eVinovest\u6240\u6709\uff1b\u662f\u60a8\u800c\u975eVinovest\u7684\u8d44\u4ea7\u3002\u6211\u4eec\u53ea\u662f\u4e3a\u60a8\u4fdd\u5b58\u8461\u8404\u9152\u3002\u50a8\u5b58\u7684\u8461\u8404\u9152\u90fd\u6709\u4e00\u4efd\u4fdd\u5355\uff0c\u4ee5\u5176\u5f53\u524d\u5e02\u503c\u5168\u989d\u6295\u4fdd\uff0c\u5e76\u4e14\u6bcf\u5e74\u66f4\u65b0\u4f30\u503c\u3002\u60a8\u6388\u6743\u6211\u4eec\u4ee3\u8868\u60a8\u51fa\u552e\u8461\u8404\u9152\u3002\u6211\u4eec\u5c06\u4ece\u60a8\u8d26\u6237\u7684\u5269\u4f59\u6b3e\u9879\u4e2d\u6263\u9664Vinovest\u5c31\u4e0a\u8ff0\u670d\u52a1\u6536\u53d6\u7684\u7ba1\u7406\u8d39\u3002\u5982\u5728\u60a8\u652f\u4ed8\u7ba1\u7406\u8d39\u540e\u8fd8\u6709\u5269\u4f59\u91d1\u989d\uff0c\u60a8\u53ef\u5c06\u8be5\u7b49\u91d1\u989d\u4fdd\u7559\u5728\u60a8\u7684\u8d26\u6237\u4e2d\u6216\u8981\u6c42\u9000\u8fd8\u7ed9\u60a8\u3002","paragraph2":{"sentence1":"\u60a8\u6bcf\u6b21\u767b\u5f55\u60a8\u7684\u8d26\u6237\u65f6\uff0c\u80fd\u770b\u5230\u60a8\u7684\u8461\u8404\u9152\u7ec4\u5408\u7684\u6e05\u7b97\u4ef7\u503c\u3002\u60a8\u53ef\u968f\u65f6\u8981\u6c42\u6211\u4eec\u6e05\u7b97\u60a8\u7684\u8461\u8404\u9152\u7ec4\u5408\u3002","sentence2":"\u60a8\u8ba4\u53ef\uff0c\u60a8\u6240\u8d2d\u4e70\u7684\u8461\u8404\u9152\u7684\u4ef7\u503c\u4e0d\u4f1a\u5fc5\u7136\u589e\u503c\u6216\u8d2c\u503c\uff0c\u5e76\u4e14\u8fd9\u4e0eVinovest\u63d0\u4f9b\u7684\u670d\u52a1\u65e0\u4efb\u4f55\u5173\u7cfb\u3002","sentence3":"\u5982\u60a8\u8981\u6c42\u6e05\u7b97\u60a8\u7684\u8461\u8404\u9152\u7ec4\u5408\uff0c\u6211\u4eec\u5c06\u5c3d\u529b\u5728\u5207\u5b9e\u53ef\u884c\u7684\u60c5\u51b5\u4e0b\u5c3d\u5feb\u5b8c\u6210\u6e05\u7b97\uff0c\u4f46\u65e0\u8bba\u5982\u4f55\u5747\u5c06\u5728\u60a8\u63d0\u51fa\u8981\u6c42\u540e\u56db\u5468\u5185\u5b8c\u6210\u3002","sentence4":"\u5982\u60a8\u9009\u62e9\u5728\u9996\u6b21\u4e3a\u60a8\u7684\u8d26\u6237\u8d2d\u4e70\u8461\u8404\u9152\u540e60\u65e5\u5185\u6e05\u7b97\uff0c\u6211\u4eec\u5c06\u6536\u53d63%\u7684\u63d0\u524d\u6e05\u7b97\u9500\u552e\u8d39\u7528\uff0c\u8ba1\u7b97\u65b9\u5f0f\u4e3a3%*\u6e05\u7b97\u65f6\u8d26\u6237\u8461\u8404\u9152\u7684\u603b\u4ef7\u503c\u3002\u5bf9\u4e8e\u9996\u6b21\u8d2d\u4e70\u8461\u8404\u9152\u540e\u8d85\u8fc760\u65e5\u7684\u6d3b\u8dc3\u8d26\u6237\u6301\u6709\u4eba\uff0c\u6211\u4eec\u4e0d\u4f1a\u6536\u53d6\u989d\u5916\u7684\u9500\u552e\u8d39\u7528","rest":"\u4e00\u7ecf\u6e05\u7b97\uff0c\u6211\u4eec\u4f1a\u5c06\u8d44\u91d1\u5b58\u5165\u60a8\u7684\u8d26\u6237\uff0c\u6b64\u540e\u60a8\u53ef\u968f\u65f6\u63d0\u53d6\u8be5\u7b49\u8d44\u91d1\u3002\\n\u6b64\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u8981\u6c42\u6211\u4eec\u5c06\u60a8\u7684\u8461\u8404\u9152\u8fd0\u9001\u7ed9\u60a8\u4ee5\u4f9b\u6d88\u8d39\uff08\u6bcf\u6b21\u81f3\u5c11\u4e00\u7bb1\uff09\u3002\u5728\u6b64\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c06\u5728\u5207\u5b9e\u53ef\u884c\u7684\u60c5\u51b5\u4e0b\u5c3d\u5feb\u88c5\u8fd0\uff0c\u8d39\u7528\u7531\u60a8\u627f\u62c5\u5e76\u5c06\u4ece\u60a8\u8d26\u6237\u7684\u73b0\u91d1\u4f59\u989d\u4e2d\u6263\u9664\uff08\u5305\u62ec\u8fd0\u8d39\u3001\u5173\u7a0e\u3001\u589e\u503c\u7a0e\u3001\u8fdb\u53e3\u7a0e\u548c\u5176\u4ed6\u7a0e\u6b3e\uff09\u3002\u8461\u8404\u9152\u7684\u8fd0\u8f93\u548c\u914d\u9001\u59cb\u7ec8\u53d7\u8461\u8404\u9152\u53d1\u8fd0\u5730\u533a\u7684\u6cd5\u5f8b\u7ba1\u8f96\uff08\u65e0\u8bba\u662f\u8054\u90a6\u3001\u5dde\u3001\u53bf\u3001\u5e02\u6cd5\u5f8b\u8fd8\u662f\u5730\u65b9\u6cd5\u5f8b\uff09\u3002"},"paragraph3":"\u60a8\u8ba4\u53ef\uff0c\u60a8\u7684\u8461\u8404\u9152\u7ec4\u5408\u6536\u85cf\u4ef7\u503c\u4f1a\u56e0\u4efb\u4f55\u8461\u8404\u9152\u8fd0\u9001\u7ed9\u60a8\u7528\u4e8e\u6d88\u8d39\u800c\u4e0b\u964d\u3002\\nVinovest\u8ba1\u5212\u7684\u5185\u5bb9\u4ee5\u53caVinovest\u63d0\u4f9b\u7684\u670d\u52a1\u5e94\u4ee5\u672c\u6761\u6b3e\u5185\u5bb9\u4e3a\u51c6\uff0cVinovest\u7f51\u7ad9\u9875\u9762\u6216\u6211\u4eec\u5411\u60a8\u63d0\u4f9b\u7684\u4efb\u4f55\u4fe1\u606f\u5982\u6709\u4e0e\u672c\u6761\u6b3e\u5185\u5bb9\u4e0d\u4e00\u81f4\u4e4b\u5904\uff0c\u9664\u53e6\u6709\u4e66\u9762\u534f\u8bae\u5916\uff0c\u5747\u4ee5\u672c\u6761\u6b3e\u5185\u5bb9\u4e3a\u51c6\u3002\u4e3a\u907f\u514d\u6b67\u4e49\uff0cVinovest\u6240\u63d0\u4f9b\u7684\u670d\u52a1\u4ece\u672a\u4ea6\u672a\u6709\u610f\u5411\u5305\u542b\u5177\u6709\u8bc1\u5238\u3001\u7968\u636e\u3001\u671f\u8d27\u3001\u884d\u751f\u54c1\u3001\u503a\u5238\u6216\u5176\u4ed6\u91d1\u878d\u8d44\u4ea7\u6295\u8d44\u5c5e\u6027\u7684\u5185\u5bb9\u3002Vinovest\u4ec5\u5411\u60a8\u63d0\u4f9b\u8461\u8404\u9152\u7684\u8d2d\u4e70\u53ca\u6536\u85cf\u7ba1\u7406\u670d\u52a1\uff0c\u6240\u6536\u53d6\u7684\u5404\u9879\u8d39\u7528\u5747\u4f9d\u6b64\u4ea7\u751f\u3002Vinovest\u4e0d\u5bf9\u8461\u8404\u9152\u7684\u4ef7\u503c\u4f5c\u4efb\u4f55\u627f\u8bfa\u548c\u62c5\u4fdd\u3002","last-sentence":""},"risk":{"title":"\u635f\u5931\u98ce\u9669","paragraph1":"\u4eceVinovest\u8d2d\u4e70\u7684\u6240\u6709\u4ea7\u54c1\u90fd\u5177\u6709\u6295\u673a\u6027\u3002\u60a8\u6240\u8d2d\u4e70\u7684\u8461\u8404\u9152\u4ef7\u683c\u53ef\u80fd\u4f1a\u4e0b\u964d\u6216\u5b8c\u5168\u5931\u53bb\u4ef7\u503c\u3002\u5982\u60a8\u8981\u6c42\u4ea4\u8d27\uff0c\u6211\u4eec\u5c06\u6839\u636e\u8fd0\u8f93\u5408\u540c\u8fdb\u884c\u4ea4\u8d27\u3002\u8fd9\u610f\u5473\u7740\uff0c\u8be5\u7b49\u4ea7\u54c1\u7684\u635f\u5931\u98ce\u9669\u548c\u6240\u6709\u6743\u5c06\u5728\u6211\u4eec\u4ea4\u4ed8\u627f\u8fd0\u4eba\u65f6\u8f6c\u79fb\u7ed9\u60a8\u3002"},"disclaimer":{"title":"\u514d\u8d23\u58f0\u660e","paragraph1":"VINOVEST\u7f51\u7ad9\u548c\u670d\u52a1\u3001\u4ee5\u53ca\u901a\u8fc7VINOVEST\u7f51\u7ad9\u548c\u670d\u52a1\u63d0\u4f9b\u7684\u5185\u5bb9\uff0c\u5747\u662f\u5728\u201c\u73b0\u72b6\u201d\u548c\u201c\u73b0\u6709\u201d\u7684\u57fa\u7840\u4e0a\u5411\u60a8\u63d0\u4f9b\uff0c\u5e76\u4e0d\u9644\u5e26\u4efb\u4f55\u5f62\u5f0f\u7684\u4fdd\u8bc1\uff0c\u4e14VINOVEST\u5728\u6b64\u5426\u8ba4\u6240\u6709\u660e\u793a\u6216\u6697\u793a\u3001\u6cd5\u5b9a\u6216\u5176\u4ed6\u5f62\u5f0f\u7684\u4fdd\u8bc1\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u9002\u9500\u6027\u3001\u7279\u5b9a\u7528\u9014\u9002\u7528\u6027\u3001\u51c6\u786e\u6027\u548c\u4e0d\u4fb5\u6743\u65b9\u9762\u7684\u4efb\u4f55\u6697\u793a\u4fdd\u8bc1\u3002VINOVEST\u6216\u4e0eVINOVEST\u6709\u5173\u8054\u7684\u4efb\u4f55\u4eba\u58eb\u5747\u672a\u5c31VINOVEST\u7f51\u7ad9\u6216\u5176\u5185\u5bb9\u7684\u5b8c\u6574\u6027\u3001\u5b89\u5168\u6027\u3001\u53ef\u9760\u6027\u3001\u8d28\u91cf\u3001\u51c6\u786e\u6027\u6216\u53ef\u7528\u6027\u4f5c\u51fa\u4efb\u4f55\u58f0\u660e\u6216\u4fdd\u8bc1\u3002\u5728\u4e0d\u9650\u5236\u4e0a\u8ff0\u89c4\u5b9a\u7684\u60c5\u51b5\u4e0b\uff0cVINOVEST\u6216\u4e0eVINOVEST\u6709\u5173\u8054\u7684\u4efb\u4f55\u4eba\u58eb\u5747\u672a\u58f0\u660e\u6216\u4fdd\u8bc1VINOVEST\u7f51\u7ad9\u3001\u670d\u52a1\u6216\u5185\u5bb9\u5c06\u662f\u51c6\u786e\u3001\u53ef\u9760\u3001\u65e0\u9519\u6216\u4e0d\u95f4\u65ad\u7684\uff0c\u4ea6\u672a\u58f0\u660e\u6216\u4fdd\u8bc1\u7f3a\u9677\u5fc5\u5c06\u5f97\u5230\u7ea0\u6b63\uff0c\u7f51\u7ad9\u6216\u652f\u6301\u7f51\u7ad9\u7684\u670d\u52a1\u5668\u6ca1\u6709\u75c5\u6bd2\u6216\u5176\u4ed6\u6709\u5bb3\u7ec4\u4ef6\uff0c\u6216VINOVEST\u7f51\u7ad9\u6216\u5176\u5185\u5bb9\u5fc5\u5c06\u5728\u5176\u4ed6\u65b9\u9762\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u6216\u671f\u671b\u3002"},"liability":{"title":"\u8d23\u4efb\u9650\u5236","paragraph1":"VINOVEST\u3001\u5176\u8bb8\u53ef\u65b9\u6216\u5185\u5bb9\u63d0\u4f9b\u5546\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\u5747\u65e0\u987b\u6839\u636e\u4efb\u4f55\u6cd5\u5f8b\u7406\u8bba\u627f\u62c5\u56e0\u60a8\u4f7f\u7528\u6216\u65e0\u6cd5\u4f7f\u7528VINOVEST\u7f51\u7ad9\u548c\u670d\u52a1\u6216\u4efb\u4f55\u5185\u5bb9\u800c\u4ea7\u751f\u7684\u6216\u4e0e\u4e4b\u76f8\u5173\u7684\u4efb\u4f55\u7c7b\u578b\u7684\u635f\u5bb3\u8d54\u507f\uff0c\u5305\u62ec\u4efb\u4f55\u7c7b\u578b\u7684\u76f4\u63a5\u3001\u95f4\u63a5\u3001\u7279\u6b8a\u3001\u9644\u5e26\u3001\u540e\u679c\u6027\u3001\u60e9\u6212\u6027\u6216\u60e9\u7f5a\u6027\u7684\u635f\u5bb3\u8d54\u507f\uff0c\u65e0\u8bba\u8be5\u7b49\u635f\u5bb3\u8d54\u507f\u662f\u56e0\u4fb5\u6743\uff08\u5305\u62ec\u758f\u5ffd\uff09\u3001\u8fdd\u7ea6\u8fd8\u662f\u5176\u4ed6\u539f\u56e0\u9020\u6210\u7684\uff0c\u4e14\u5373\u4f7f\u8be5\u7b49\u635f\u5bb3\u8d54\u507f\u53ef\u4ee5\u9884\u89c1\u3002\u4f7f\u7528VINOVEST\u7f51\u7ad9\u3001\u670d\u52a1\u6216\u5176\u5185\u5bb9\u7684\u98ce\u9669\u5747\u7531\u60a8\u81ea\u884c\u627f\u62c5\u3002"},"indemnification":{"title":"\u8d54\u507f","paragraph1":"\u5bf9\u4e8e\u56e0\u60a8\u8fdd\u53cd\u672c\u6761\u6b3e\u6216\u4f7f\u7528Vinovest\u7f51\u7ad9\u6216\u670d\u52a1\u800c\u4ea7\u751f\u7684\u4efb\u4f55\u4e3b\u5f20\u3001\u8d23\u4efb\u3001\u635f\u5bb3\u8d54\u507f\u3001\u5224\u51b3\u3001\u88c1\u51b3\u3001\u635f\u5931\u3001\u6210\u672c\u3001\u5f00\u652f\u6216\u8d39\u7528\uff08\u5305\u62ec\u5408\u7406\u7684\u5f8b\u5e08\u8d39\uff09\uff0c\u60a8\u540c\u610f\u4e3aVinovest\u53ca\u5176\u9ad8\u7ba1\u3001\u8463\u4e8b\u3001\u96c7\u5458\u3001\u4ee3\u7406\u4eba\u3001\u8bb8\u53ef\u65b9\u548c\u5185\u5bb9\u63d0\u4f9b\u5546\u8fa9\u62a4\uff0c\u7ed9\u4e88\u8d54\u507f\u5e76\u4f7f\u4e4b\u514d\u4e8e\u56e0\u6b64\u53d7\u5230\u635f\u5bb3\u3002"},"trademarks":{"title":"\u5546\u6807","paragraph1":"Vinovest\u7f51\u7ad9\u548c\u670d\u52a1\u4e0a\u5c55\u793a\u7684\u5546\u6807\u548c\u670d\u52a1\u6807\u5fd7\u5747\u662fVinovest\u53ca\u5176\u8bb8\u53ef\u65b9\u7684\u5df2\u6ce8\u518c\u548c\u672a\u6ce8\u518c\u5546\u6807\u3001\u670d\u52a1\u6807\u5fd7\u548c\u5546\u4e1a\u5916\u89c2\u3002\u6b64\u5916\uff0cVinovest\u7f51\u7ad9\u548c\u670d\u52a1\u4e2d\u5305\u542b\u7684\u6216\u901a\u8fc7Vinovest\u7f51\u7ad9\u548c\u670d\u52a1\u63d0\u4f9b\u7684\u56fe\u5f62\u3001\u6807\u8bc6\u3001\u9875\u9762\u6807\u9898\u3001\u6309\u94ae\u56fe\u6807\u3001\u811a\u672c\u548c\u670d\u52a1\u540d\u79f0\u5747\u662fVinovest\u6216\u6211\u4eec\u5408\u4f5c\u4f19\u4f34\u7684\u5546\u6807\u3001\u670d\u52a1\u6807\u5fd7\u6216\u5546\u4e1a\u5916\u89c2\u3002\u8be5\u7b49\u5546\u6807\u3001\u670d\u52a1\u6807\u5fd7\u548c\u5546\u4e1a\u5916\u89c2\u4e0d\u5f97\u7528\u4e8e\u9664Vinovest\u4ee5\u5916\u7684\u4efb\u4f55\u4ea7\u54c1\u6216\u670d\u52a1\uff0c\u6216\u4ee5\u4efb\u4f55\u53ef\u80fd\u5bfc\u81f4\u5ba2\u6237\u6df7\u6dc6\u7684\u65b9\u5f0f\u4f7f\u7528\uff0c\u6216\u4ee5\u4efb\u4f55\u8d2c\u4f4e\u6216\u8bcb\u6bc1Vinovest\u7684\u65b9\u5f0f\u4f7f\u7528\u3002\u4efb\u4f55\u670d\u52a1\u4e2d\u51fa\u73b0\u7684\u5e76\u975e\u5f52Vinovest\u6240\u6709\u7684\u5546\u6807\uff0c\u5747\u5f52\u5176\u5404\u81ea\u6240\u6709\u8005\u6240\u6709\uff0c\u4e14\u8be5\u7b49\u6240\u6709\u8005\u4e0eVinovest\u53ef\u80fd\u5b58\u5728\u6216\u4e0d\u5b58\u5728\u5173\u8054\u3001\u8054\u7cfb\u6216\u53d7Vinovest\u8d5e\u52a9\u7684\u5173\u7cfb\u3002"},"copywrite":{"title":"\u7248\u6743","paragraph1":"Vinovest\u7f51\u7ad9\u548c\u670d\u52a1\u4e2d\u5305\u542b\u7684\u6216\u901a\u8fc7Vinovest\u7f51\u7ad9\u548c\u670d\u52a1\u63d0\u4f9b\u7684\u6240\u6709\u5185\u5bb9\uff0c\u5982\u6587\u672c\u3001\u56fe\u5f62\u3001\u6807\u8bc6\u3001\u6309\u94ae\u56fe\u6807\u3001\u56fe\u50cf\u3001\u97f3\u9891\u526a\u8f91\u3001\u6570\u5b57\u4e0b\u8f7d\u548c\u6570\u636e\u6c47\u7f16\uff0c\u5747\u5f52Vinovest\u6216\u5176\u5185\u5bb9\u63d0\u4f9b\u5546\u6240\u6709\uff0c\u5e76\u53d7\u7f8e\u56fd\u548c\u56fd\u9645\u7248\u6743\u6cd5\u4fdd\u62a4\u3002Vinovest\u7f51\u7ad9\u548c\u670d\u52a1\u4e2d\u5305\u542b\u7684\u6216\u901a\u8fc7Vinovest\u7f51\u7ad9\u548c\u670d\u52a1\u63d0\u4f9b\u7684\u6240\u6709\u5185\u5bb9\u7684\u6c47\u7f16\u662fVinovest\u7684\u4e13\u6709\u8d22\u4ea7\uff0c\u5e76\u53d7\u7f8e\u56fd\u548c\u56fd\u9645\u7248\u6743\u6cd5\u4fdd\u62a4\u3002"},"submitted-works":{"title":"\u63d0\u4ea4\u7684\u8d44\u6599\u53ca\u60f3\u6cd5","paragraph1":"\u60a8\u901a\u8fc7\u672c\u670d\u52a1\u6216\u60a8\u4e3a\u54cd\u5e94Vinovest\u7f51\u7ad9\u4e0a\u7684\u5f81\u96c6\u800c\u5411\u6211\u4eec\u62ab\u9732\u6216\u63d0\u4f9b\u7684\u6240\u6709\u610f\u89c1\u3001\u5efa\u8bae\u3001\u60f3\u6cd5\u3001\u56fe\u7eb8\u3001\u56fe\u50cf\u3001\u6982\u5ff5\u6216\u5176\u4ed6\u4fe1\u606f\u6216\u8d44\u6599\u5747\u5e94\u89c6\u4e3aVinovest\u6240\u6709\u3002"},"links":{"title":"\u94fe\u63a5\u81f3\u7b2c\u4e09\u65b9\u7f51\u7ad9","paragraph1":"Vinovest\u7f51\u7ad9\u6216\u670d\u52a1\u53ef\u80fd\u5305\u542b\u8df3\u8f6c\u5230\u7b2c\u4e09\u65b9\u7f51\u7ad9\u7684\u94fe\u63a5\u3002\u8be5\u7b49\u94fe\u63a5\u4ec5\u4e3a\u65b9\u4fbf\u60a8\u4f7f\u7528\u800c\u63d0\u4f9b\u3002Vinovest\u5bf9\u7b2c\u4e09\u65b9\u7f51\u7ad9\u5e76\u65e0\u63a7\u5236\u6743\uff0c\u4e14\u6211\u4eec\u5bf9\u8be5\u7b49\u7f51\u7ad9\u7684\u5185\u5bb9\u6216\u7b2c\u4e09\u65b9\u7f51\u7ad9\u7684\u9690\u79c1\u884c\u4e3a\u5e76\u4e0d\u627f\u62c5\u4efb\u4f55\u8d23\u4efb\u3002\u5982\u60a8\u51b3\u5b9a\u901a\u8fc7Vinovest\u7f51\u7ad9\u4e0a\u7684\u94fe\u63a5\u8bbf\u95ee\u7b2c\u4e09\u65b9\u7f51\u7ad9\uff0c\u5219\u5b8c\u5168\u7531\u60a8\u81ea\u884c\u627f\u62c5\u98ce\u9669\uff0c\u4e14\u60a8\u5bf9\u8be5\u7b49\u7f51\u7ad9\u7684\u4f7f\u7528\u5e94\u9075\u5b88\u8be5\u7b49\u7f51\u7ad9\u7684\u6761\u6b3e\u548c\u7ec6\u5219\u4ee5\u53ca\u9690\u79c1\u653f\u7b56\u3002"},"disputes":{"title":"\u4e89\u8bae","paragraph1":"\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u672c\u6761\u5185\u5bb9\u3002\u672c\u6761\u6d89\u53ca\u60a8\u6240\u4eab\u6709\u7684\u6743\u5229\uff0c\u4ea6\u6d89\u53ca\u5bf9\u60a8\u548cVinovest\u53ef\u80fd\u5bf9\u5f7c\u6b64\u63d0\u51fa\u4e3b\u5f20\u7684\u88c1\u5224\u65b9\u5f0f\u3002"},"arbitration":{"title":"\u4ef2\u88c1\u534f\u8bae","paragraph1":"\u60a8\u4e0eVinovest\u540c\u610f\uff0c\u6211\u4eec\u4e4b\u95f4\u5c31\u672c\u7248\u6216\u5148\u524d\u7248\u672c\u7684Vinovest\u6761\u6b3e\u3001\u60a8\u5bf9Vinovest\u7f51\u7ad9\u6216\u670d\u52a1\u7684\u4f7f\u7528\u3001\u6216\u7531Vinovest\u6216\u901a\u8fc7Vinovest\u7f51\u7ad9\u6216\u670d\u52a1\u51fa\u552e\u6216\u7ecf\u9500\u7684\u4efb\u4f55\u4ea7\u54c1\uff0c\u800c\u4ea7\u751f\u6216\u53ef\u80fd\u4ea7\u751f\u7684\u6cd5\u5f8b\u6216\u8861\u5e73\u6cd5\u4e0a\u7684\u4efb\u4f55\u4e3b\u5f20\u6216\u4e89\u8bae\uff0c\u5747\u5c06\u901a\u8fc7\u5177\u6709\u7ea6\u675f\u529b\u7684\u4ef2\u88c1\u89e3\u51b3\uff0c\u800c\u975e\u901a\u8fc7\u6cd5\u9662\u89e3\u51b3\u3002\u8054\u90a6\u4ef2\u88c1\u6cd5\u9002\u7528\u4e8e\u672c\u534f\u8bae\u3002","paragraph2":"\u4ef2\u88c1\u4e2d\u4e0d\u8bbe\u6cd5\u5b98\u6216\u966a\u5ba1\u56e2\uff0c\u800c\u4e14\u6cd5\u9662\u5bf9\u4ef2\u88c1\u88c1\u51b3\u7684\u5ba1\u67e5\u4ea6\u53d7\u9650\u5236\u3002\u7136\u800c\uff0c\u4ef2\u88c1\u5458\u53ef\u6839\u636e\u4e2a\u4eba\u60c5\u51b5\u4f5c\u51fa\u4e0e\u6cd5\u9662\u76f8\u540c\u7684\u635f\u5bb3\u8d54\u507f\u548c\u6551\u6d4e\uff08\u5305\u62ec\u7981\u4ee4\u548c\u5ba3\u544a\u6027\u6551\u6d4e\u6216\u6cd5\u5b9a\u635f\u5bb3\u8d54\u507f\uff09\u7684\u88c1\u51b3\uff0c\u4f46\u5fc5\u987b\u5982\u6cd5\u9662\u4e00\u822c\u9075\u5faa\u672c\u6761\u6b3e\u3002","paragraph3":"\u82e5\u8981\u542f\u52a8\u4ef2\u88c1\u7a0b\u5e8f\uff0c\u60a8\u5fc5\u987b\u5411Vinovest\u53d1\u51fa\u4ef2\u88c1\u7533\u8bf7\u4e66\uff0c\u5e76\u9648\u8ff0\u60a8\u7684\u4e3b\u5f20\u3002\u4ef2\u88c1\u5c06\u7531\u7f8e\u56fd\u53f8\u6cd5\u4ef2\u88c1\u4e0e\u8c03\u89e3\u670d\u52a1\u80a1\u4efd\u6709\u9650\u516c\u53f8\uff08\u7b80\u79f0JAMS\uff09\u8fdb\u884c\u3002JAMS\u89c4\u5219\u53ef\u5728jamsadr.com\u7f51\u7ad9\u6216\u62e8\u62531-800-352-5267\u83b7\u53d6\u3002\u6240\u6709\u7533\u8bf7\u8d39\u3001\u624b\u7eed\u8d39\u548c\u4ef2\u88c1\u8d39\u5747\u5c06\u6839\u636eJAMS\u89c4\u5219\u652f\u4ed8\u3002","paragraph4":"\u4ef2\u88c1\u5ba1\u7406\u5c06\u5728\u60a8\u7684\u5c45\u4f4f\u56fd\u6216\u53cc\u65b9\u4e00\u81f4\u540c\u610f\u7684\u5176\u4ed6\u5730\u70b9\u4e3e\u884c\u3002\u60a8\u6216Vinovest\u4ea6\u53ef\u9009\u62e9\u901a\u8fc7\u7535\u8bdd\u6216\u4ec5\u57fa\u4e8e\u4e66\u9762\u9648\u8ff0\u7684\u65b9\u5f0f\u8fdb\u884c\u4ef2\u88c1\uff0c\u8be5\u9009\u62e9\u5c06\u5bf9\u60a8\u548cVinovest\u5177\u6709\u7ea6\u675f\u529b\uff0c\u4f46\u4ef2\u88c1\u5458\u6709\u6743\u51b3\u5b9a\u8981\u6c42\u5f53\u9762\u5ba1\u7406\u3002","paragraph5":"\u4ef2\u88c1\u5458\u5c06\u6839\u636e\u9002\u7528\u6cd5\u5f8b\u5bf9\u6240\u6709\u7684\u8bf7\u6c42\u4f5c\u51fa\u88c1\u51b3\u3002\u4ef2\u88c1\u5458\u4e0d\u53d7\u6d89\u53ca\u5176\u4ed6Vinovest\u4f1a\u5458\u7684\u4ef2\u88c1\u88c1\u51b3\u5148\u4f8b\u7684\u7ea6\u675f\uff0c\u4f46\u5728\u9002\u7528\u6cd5\u5f8b\u8981\u6c42\u7684\u60c5\u51b5\u4e0b\uff0c\u53d7\u6d89\u53ca\u540c\u4e00\u4f4dVinovest\u4f1a\u5458\u7684\u4ef2\u88c1\u88c1\u51b3\u5148\u4f8b\u7684\u7ea6\u675f\u3002\u4ef2\u88c1\u5458\u7684\u88c1\u51b3\u5e94\u4e3a\u7ec8\u5c40\u88c1\u51b3\uff0c\u5177\u6709\u7ea6\u675f\u529b\uff0c\u4efb\u4f55\u6709\u7ba1\u8f96\u6743\u7684\u6cd5\u9662\u5747\u53ef\u5bf9\u4ef2\u88c1\u5458\u7684\u88c1\u51b3\u4f5c\u51fa\u5224\u51b3\u3002"},"class-action-prohibition":{"title":"\u7981\u6b62\u96c6\u4f53\u8bc9\u8bbc\u3001\u4ee3\u8868\u8bc9\u8bbc\u53ca\u5408\u5e76\u8bc9\u8bbc","paragraph1":"\u60a8\u4e0eVinovest\u540c\u610f\uff0c\u6bcf\u4e00\u65b9\u4ec5\u53ef\u57fa\u4e8e\u4e2a\u4eba\u7406\u7531\u5411\u5bf9\u65b9\u63d0\u51fa\u4e3b\u5f20\uff0c\u800c\u4e0d\u80fd\u4f5c\u4e3a\u4efb\u4f55\u58f0\u79f0\u7684\u96c6\u4f53\u8bc9\u8bbc\u6216\u4ee3\u8868\u8bc9\u8bbc\u4e2d\u7684\u539f\u544a\u6216\u96c6\u4f53\u6210\u5458\u3002\u9664\u975e\u60a8\u4e0eVinovest\u53e6\u6709\u7ea6\u5b9a\uff0c\u4ef2\u88c1\u5458\u4e0d\u5f97\u5408\u5e76\u8d85\u8fc7\u4e00\u65b9\u7684\u4e3b\u5f20\uff0c\u4e14\u4e0d\u5f97\u88c1\u51b3\u6216\u88c1\u5b9a\u4efb\u4f55\u5f62\u5f0f\u7684\u4ee3\u8868\u8bc9\u8bbc\u3001\u96c6\u4f53\u8bc9\u8bbc\u6216\u5408\u5e76\u8bc9\u8bbc\u3002\u4ef2\u88c1\u5458\u4ec5\u53ef\u4e3a\u652f\u6301\u63d0\u51fa\u4e3b\u5f20\u7684\u4e2a\u4eba\u800c\u88c1\u5b9a\u6551\u6d4e\uff08\u5305\u62ec\u91d1\u94b1\u6551\u6d4e\u3001\u7981\u4ee4\u6551\u6d4e\u548c\u5ba3\u544a\u6027\u6551\u6d4e\uff09\uff0c\u524d\u63d0\u662f\u8be5\u7b49\u6551\u6d4e\u6709\u4e8b\u5b9e\u548c\u6cd5\u5f8b\u4f9d\u636e\u3002\u4ef2\u88c1\u5458\u88c1\u5b9a\u7684\u4efb\u4f55\u6551\u6d4e\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6Vinovest\u4f1a\u5458\u3002\\nVinovest\u5747\u653e\u5f03\u7531\u966a\u5ba1\u56e2\u5ba1\u7406\u7684\u4efb\u4f55\u6743\u5229\u3002\u60a8\u4e0eVinovest\u4ea6\u540c\u610f\uff0c\u60a8\u6216\u6211\u4eec\u53ef\u4ee5\u5c31\u7981\u6b62\u4fb5\u72af\u6216\u5176\u4ed6\u6ee5\u7528\u77e5\u8bc6\u4ea7\u6743\u7684\u884c\u4e3a\u5411\u6cd5\u9662\u63d0\u8d77\u8bc9\u8bbc\u3002"},"law":{"title":"\u9002\u7528\u6cd5\u5f8b\u53ca\u53f8\u6cd5\u7ba1\u8f96\u6743","paragraph1":"\u4e0e\u672c\u6761\u6b3e\u6216\u672c\u6761\u6b3e\u5148\u524d\u7248\u672c\u3001\u60a8\u5bf9Vinovest\u7f51\u7ad9\u6216\u670d\u52a1\u7684\u4f7f\u7528\u3001\u6216\u7531Vinovest\u6216\u901a\u8fc7Vinovest\u7f51\u7ad9\u6216\u670d\u52a1\u51fa\u552e\u6216\u7ecf\u9500\u7684\u4efb\u4f55\u4ea7\u54c1\u800c\u6709\u5173\u7684\u4efb\u4f55\u4e89\u8bae\u6216\u4e3b\u5f20\uff0c\u5747\u5e94\u9002\u7528\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde\u6cd5\u5f8b\u5e76\u6839\u636e\u8be5\u6cd5\u5f8b\u89e3\u91ca\uff0c\u800c\u4e0d\u8003\u8651\u4efb\u4f55\u6cd5\u5f8b\u9009\u62e9\u6216\u6cd5\u5f8b\u51b2\u7a81\u89c4\u5b9a\u6216\u89c4\u5219\u3002","paragraph2":"\u9664\u975e\u60a8\u4e0eVinovest\u53e6\u6709\u7ea6\u5b9a\uff0c\u5982\u4e0a\u8ff0\u4ef2\u88c1\u534f\u8bae\u88ab\u5224\u5b9a\u4e3a\u4e0d\u9002\u7528\u4e8e\u60a8\u6216\u67d0\u9879\u7279\u5b9a\u7684\u4e3b\u5f20\u6216\u4e89\u8bae\uff0c\u56e0\u672c\u6761\u6b3e\u6216\u672c\u6761\u6b3e\u5148\u524d\u7248\u672c\u3001\u60a8\u5bf9Vinovest\u7f51\u7ad9\u6216\u670d\u52a1\u7684\u4f7f\u7528\u3001\u6216\u7531Vinovest\u6216\u901a\u8fc7Vinovest\u7f51\u7ad9\u6216\u670d\u52a1\u51fa\u552e\u6216\u7ecf\u9500\u7684\u4efb\u4f55\u4ea7\u54c1\u800c\u5f15\u8d77\u7684\u6216\u4e0e\u4e4b\u76f8\u5173\u7684\u4efb\u4f55\u6cd5\u5f8b\u8bc9\u8bbc\u3001\u8d77\u8bc9\u6216\u6cd5\u5f8b\u7a0b\u5e8f\uff0c\u5e94\u6392\u4ed6\u6027\u5730\u5728\u4f4d\u4e8e\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde\u6d1b\u6749\u77f6\u5e02\u7684\u8054\u90a6\u6216\u5dde\u6cd5\u9662\u63d0\u8d77\u3002\u5bf9\u4e8e\u4e0a\u8ff0\u6cd5\u9662\u5bf9\u60a8\u884c\u4f7f\u7ba1\u8f96\u6743\u53ca\u5c06\u4e0a\u8ff0\u6cd5\u9662\u4f5c\u4e3a\u5ba1\u5224\u5730\uff0c\u60a8\u540c\u610f\u653e\u5f03\u5c31\u6b64\u63d0\u51fa\u4efb\u4f55\u5f02\u8bae\u7684\u6743\u5229\u3002"},"severability":{"title":"\u5f03\u6743\u53ca\u53ef\u5206\u5272\u6027","paragraph1":"Vinovest\u5bf9\u672c\u6761\u6b3e\u7684\u653e\u5f03\u4e0d\u5e94\u88ab\u89c6\u4e3a\u5bf9\u8be5\u7b49\u6761\u6b3e\u6216\u4efb\u4f55\u5176\u4ed6\u6761\u6b3e\u6216\u7ec6\u5219\u7684\u8fdb\u4e00\u6b65\u6216\u6301\u7eed\u653e\u5f03\uff0cVinovest\u672a\u80fd\u4e3b\u5f20\u672c\u6761\u6b3e\u9879\u4e0b\u7684\u67d0\u9879\u6743\u5229\u6216\u7ea6\u5b9a\uff0c\u4e0d\u5f97\u6784\u6210\u5bf9\u8be5\u9879\u6743\u5229\u6216\u7ea6\u5b9a\u7684\u653e\u5f03\u3002\u5982\u5177\u6709\u5408\u6cd5\u7ba1\u8f96\u6743\u7684\u6cd5\u9662\u56e0\u4efb\u4f55\u539f\u56e0\u8ba4\u5b9a\u672c\u6761\u6b3e\u4e2d\u7684\u4efb\u4f55\u7ea6\u5b9a\u65e0\u6548\u3001\u975e\u6cd5\u6216\u4e0d\u53ef\u6267\u884c\uff0c\u5219\u8be5\u7ea6\u5b9a\u5e94\u88ab\u5220\u9664\uff0c\u6216\u88ab\u9650\u5236\u5728\u6700\u4f4e\u9650\u5ea6\u5185\uff0c\u4ee5\u4f7f\u672c\u6761\u6b3e\u4e2d\u7684\u5176\u4f59\u7ea6\u5b9a\u7ee7\u7eed\u5b8c\u5168\u6709\u6548\u3002"},"agreement":{"title":"\u5b8c\u6574\u534f\u8bae","paragraph1":"\u672c\u6761\u6b3e\u53ca\u6211\u4eec\u7684\u9690\u79c1\u58f0\u660e\u6784\u6210\u60a8\u4e0eVinovest\u4e4b\u95f4\u5173\u4e8eVinovest\u670d\u52a1\u7684\u552f\u4e00\u4e14\u5b8c\u6574\u7684\u534f\u8bae\uff0c\u5e76\u53d6\u4ee3\u6240\u6709\u5148\u524d\u548c\u540c\u671f\u7684\u6709\u5173\u672c\u7f51\u7ad9\u7684\u6240\u6709\u4e66\u9762\u548c\u53e3\u5934\u8c05\u89e3\u3001\u534f\u8bae\u3001\u9648\u8ff0\u548c\u4fdd\u8bc1\u3002"},"modifications":{"title":"\u4fee\u6539","paragraph1":"Vinovest\u4fdd\u7559\u968f\u65f6\u4fee\u6539\u672c\u6761\u6b3e\u7684\u6743\u5229\u3002\u5982Vinovest\u5bf9\u672c\u6761\u6b3e\u4f5c\u51fa\u91cd\u5927\u4fee\u6539\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u5728\u672c\u6761\u6b3e\u6587\u672c\u4e0a\u65b9\u6216\u5728Vinovest.co\u7f51\u7ad9\u4e0a\uff08\u89c6\u60c5\u51b5\u800c\u5b9a\uff09\u53d1\u5e03\u4e3a\u671f\u4e09\u5341\uff0830\uff09\u5929\u7684\u663e\u8457\u516c\u544a\u6765\u901a\u77e5\u60a8\uff0c\u4e14\u8be5\u7b49\u516c\u544a\u5c06\u88ab\u89c6\u4e3a\u5c31\u8be5\u7b49\u4fee\u6539\u4f5c\u51fa\u5145\u5206\u901a\u77e5\u3002","paragraph2":"\u672c\u6761\u6b3e\u7684\u6700\u65b0\u66f4\u65b0\u65e5\u671f\u5217\u4e8e\u672c\u9875\u9876\u90e8\u3002"},"contact":{"title":"\u8054\u7cfb\u65b9\u5f0f","paragraph1":"\u5982\u60a8\u5bf9\u672c\u6761\u6b3e\u6216Vinovest\u7f51\u7ad9\u6216\u670d\u52a1\u6709\u4efb\u4f55\u7591\u95ee\u6216\u610f\u89c1\uff0c\u656c\u8bf7\u901a\u8fc7\u4ee5\u4e0b\u8054\u7cfb\u65b9\u5f0f\u81f4\u51fd\u3001\u81f4\u7535\u6216\u5411\u6211\u4eec\u53d1\u9001\u7535\u5b50\u90ae\u4ef6:"},"address":{"name":"Vinovest, Inc.","street":"9900 Culver Blvd","city-state-zip":"Culver City, CA 90232","phone":"949-415-8730","email":"help@vinovest.co"}}')},342:function(e){e.exports=JSON.parse('{"buttons":{"fee_free":"\u514d\u670d\u52a1\u8d39\u6295\u8d44\uff0c\u5c31\u73b0\u5728\uff01","wine_certificate":"\u8461\u8404\u9152\u8bc1\u4e66"},"details":{"early_withdrawal":"\u63d0\u524d\u63d0\u6b3e","management":"\u7ba1\u7406"},"items":{"adjust":"\u8c03\u6574","buy":"\u8d2d\u4e70","completed":"\u5b8c\u5168\u7684","deposit":"\u4fdd\u8bc1\u91d1","fee":"\u8d39\u7528","fee-credit":"\u8d39\u7528\u62b5\u514d","free":"\u514d\u8d39","funds":"\u8d44\u91d1","in-progress":"\u8fdb\u884c\u4e2d","monthly":"\u6bcf\u6708","pending":"\u4fdd\u8bc1\u91d1","purchase":"\u8d2d\u4e70","sold":"\u5df2\u51fa\u552e","sourcing":"\u91c7\u8d2d\u8461\u8404\u9152","wine":"\u8461\u8404\u9152","withdrawn":"\u5df2\u64a4\u9500"},"labels":{"bottles":"\u8461\u8404\u9152","case_size":"1\u4f8b","date":"\u65e5\u671f","ml":"ML","price_per_bottle":"\u6bcf\u74f6\u4ef7\u683c","quantity":"\u6570\u91cf","size":"\u5c3a\u5bf8","vintage":"\u5e74\u4efd"},"messages":{"empty":"\u60a8\u5b8c\u6210\u7684\u4ea4\u6613\u5c06\u4f1a\u5728\u6b64\u663e\u793a\u3002","empty_transaction":"\u6682\u65e0\u5f85\u5904\u7406\u7684\u4ea4\u6613\u3002","failed":"\u4ea4\u6613\u5931\u8d25\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002","no_match":"\u672a\u627e\u5230\u5339\u914d\u9879\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002","pending":"\u7b49\u5f85\u4e2d"},"section":{"empty":"\u60a8\u5c1a\u672a\u8fdb\u884c\u4efb\u4f55\u4ea4\u6613","fund":"\u5411\u60a8\u7684\u8d26\u6237\u6ce8\u8d44"},"title":"\u4ea4\u6613","transactions-header":{"all_time":"\u6240\u6709\u65f6\u95f4","all_transactions":"\u6240\u6709\u4ea4\u6613","buy":"\u8d2d\u4e70","current_year":"\u4eca\u5e74","deposit":"\u4fdd\u8bc1\u91d1","fee":"\u8d39\u7528","last_90":"\u6700\u8fd190\u5929","last_month":"\u4e0a\u4e2a\u6708","month":"\u8fd9\u4e2a\u6708","previous_year":"\u53bb\u5e74","sell":"\u51fa\u552e","withdraw":"\u63d0\u53d6"},"transactions-list":{"amount":"\u6570\u989d","date":"\u65e5\u671f","description":"\u63cf\u8ff0","failed":"\u5931\u8d25","pending":"\u7b49\u5f85\u4e2d","type":"\u7c7b\u578b"},"wine-details":{"bottle":"\u74f6","s":"s"}}')},343:function(e){e.exports=JSON.parse('{"back_link":"\u8fd4\u56de\u9996\u9875","subtitle":"\u9875\u9762\u7f3a\u5931\u6216\u94fe\u63a5\u9519\u8bef\u3002","title":"\u627e\u4e0d\u5230\u8be5\u9875\u9762"}')},344:function(e){e.exports=JSON.parse('{"account_auto_invest":{"subtitle":"\u67e5\u770b\u60a8\u7684\u5e10\u5355\u8bb0\u5f55\u5e76\u7ba1\u7406\u81ea\u52a8\u6295\u8d44","title":"\u7ba1\u7406\u81ea\u52a8\u6295\u8d44"},"account_email":{"email":"\u7535\u5b50\u90ae\u4ef6\u5730\u5740","error_invalid_email":"\u90ae\u4ef6\u5730\u5740\u65e0\u6548","label_email":"\u7535\u5b50\u90ae\u4ef6\u5730\u5740","notice":"\u4f1f\u8bfa\u7ea2\u9152\u5c06\u4f7f\u7528\u6b64\u7535\u5b50\u90ae\u4ef6\u5411\u60a8\u53d1\u9001\u6709\u5173\u60a8\u5e10\u6237\u72b6\u6001\u7684\u91cd\u8981\u4fe1\u606f\uff0c\u56e0\u6b64\u8bf7\u786e\u4fdd\u8f93\u5165\u6700\u8fd1\u5e38\u7528\u7684\u90ae\u4ef6\u5730\u5740\u3002","placeholder_email":"\u4f8b\u5982\uff1aexample@email.com","updated":"\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u5df2\u66f4\u65b0"},"account_investment_plan":{"notice":"\u8bf7\u6ce8\u610f\uff1a\u60a8\u7684\u6295\u8d44\u8ba1\u5212\u51b3\u5b9a\u4e86\u60a8\u7684\u8d44\u91d1\u5728\u6df7\u5408\u6295\u8d44\u4e2d\u88ab\u5206\u914d\u7684\u6bd4\u4f8b\u3002\u8fd9\u53ea\u4f1a\u5f71\u54cd\u672a\u6765\u7684\u6295\u8d44\uff0c\u4e0d\u4f1a\u91cd\u65b0\u5e73\u8861\u60a8\u7684\u5f53\u524d\u7684\u5934\u5bf8\u3002","title":"\u6295\u8d44\u8ba1\u5212","updated":"\u60a8\u7684\u6295\u8d44\u8ba1\u5212\u5df2\u66f4\u65b0"},"account_mobile":{"error_invalid":"\u7535\u8bdd\u53f7\u7801\u65e0\u6548","label":"\u7535\u8bdd\u53f7\u7801","success_updated":"\u60a8\u7684\u7535\u8bdd\u53f7\u7801\u5df2\u66f4\u65b0","title":"\u624b\u673a\u53f7\u7801"},"account_personal_information":{"description_address":"\u8be5\u5730\u5740\u5e94\u8be5\u53ef\u7528\u4e8e\u7a0e\u6536\u76ee\u7684\u3002","label_address":"\u5730\u5740","label_city":"\u57ce\u5e02","label_country":"\u56fd\u5bb6","label_first":"\u540d","label_fullname":"\u5168\u540d","label_last":"\u59d3","label_state":"\u5dde","label_zip":"\u90ae\u7f16","placeholder_address":"\u4f8b\u5982\uff1a\u67d0\u5927\u8857123\u53f7","placeholder_city":"\u4f8b\u5982\uff1a\u65e7\u91d1\u5c71","placeholder_first":"\u4f8b\u5982\uff1a\u7ea6\u7ff0","placeholder_last":"\u4f8b\u5982\uff1a\u53f2\u5bc6\u65af","placeholder_zip":"\u4f8b\u5982\uff1a90103","success":"\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u5df2\u66f4\u65b0","title":"\u4e2a\u4eba\u4fe1\u606f"},"account_settings":{"auto_invest":"\u81ea\u52a8\u6295\u8d44","sell_wine":"\u51fa\u552e\u60a8\u7684\u8461\u8404\u9152"},"accountsettings":{"sell":"\u51fa\u552e\u60a8\u7684\u8461\u8404\u9152"},"button_cancel":"\u53d6\u6d88","button_save":"\u4fdd\u5b58","disclaimer":"\u60a8\u7684\u6240\u6709\u4fe1\u606f\u90fd\u5df2\u83b7\u5f97\u5b89\u5168\u4fdd\u62a4\u3002\u6211\u4eec\u7edd\u4e0d\u4f1a\u5c06\u60a8\u7684\u6570\u636e\u53d1\u9001\u7ed9\u8425\u9500\u670d\u52a1\u63d0\u4f9b\u5546\u6216\u8005\u5411\u60a8\u53d1\u9001\u5783\u573e\u90ae\u4ef6","error_post":"\u6682\u65f6\u65e0\u6cd5\u66f4\u65b0\u60a8\u7684\u4fe1\u606f\u3002","grand_cru":"\u7279\u7ea7\u56ed","main":{"account":"\u5e10\u6237","logout":"\u9000\u51fa\u767b\u5f55","user_settings":"\u7528\u6237\u8bbe\u7f6e"},"myaccount":{"edit":"\u7f16\u8f91","editbutton":"\u7f16\u8f91"},"not_provided":"\u5c1a\u672a\u63d0\u4f9b","password":{"button_cancel":"\u53d6\u6d88","button_change":"\u66f4\u6539","current_password":"\u5f53\u524d\u5bc6\u7801\u4e0d\u6b63\u786e\u3002\u8981\u66f4\u65b0\u5bc6\u7801\uff0c\u5fc5\u987b\u5148\u8f93\u5165\u6b63\u786e\u7684\u5f53\u524d\u5bc6\u7801\u3002","error_and":"\u548c","error_at_least":"\u81f3\u5c11","error_characters":"8\u4e2a\u5b57\u7b26","error_number":"\u4e00\u4e2a\u6570\u5b57","error_special":"\u4e00\u4e2a\u7279\u6b8a\u5b57\u7b26","error_upper":"\u4e00\u4e2a\u5927\u5199\u5b57\u6bcd","label_confirm_password":"\u786e\u8ba4\u65b0\u5bc6\u7801","label_current_password":"\u5f53\u524d\u5bc6\u7801","label_new_password":"\u65b0\u5bc6\u7801","match":"\u5bc6\u7801\u4e0d\u5339\u914d\u3002","notice":"\u8981\u66f4\u6539\u5bc6\u7801\uff0c\u8bf7\u5148\u8f93\u5165\u5f53\u524d\u5bc6\u7801\uff0c\u7136\u540e\u4f7f\u7528\u4ee5\u4e0b\u8868\u5355\u521b\u5efa\u65b0\u5bc6\u7801\u3002","required_criteria":"\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\u3002","retype_password":"\u518d\u6b21\u8f93\u5165\u60a8\u7684\u65b0\u5bc6\u7801\u3002","success_update":"\u60a8\u7684\u5bc6\u7801\u5df2\u66f4\u65b0\u3002","title":"\u5bc6\u7801"},"premium":"\u6ea2\u4ef7","sell_your_wine":{"description":{"description":"\u5b8c\u6210\u8be5\u8fc7\u7a0b\u9700\u89812-4\u5468\u7684\u65f6\u95f4\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002","portfolio_sold":"\u6211\u4eec\u5df2\u6536\u5230\u5173\u4e8e\u60a8\u5e0c\u671b\u51fa\u552e\u5168\u90e8\u8461\u8404\u9152\u7684\u7533\u8bf7\u3002","sell_portfolio":"\u5982\u679c\u60a8\u60f3\u6e05\u7b97\u548c/\u6216\u63d0\u53d6\u8d44\u91d1\uff0c\u8bf7\u70b9\u51fb\u4ee5\u4e0b\u6309\u94ae\u3002"},"liquidation":{"full":"\u6211\u4eec\u5df2\u6536\u5230\u5173\u4e8e\u60a8\u5e0c\u671b\u51fa\u552e\u5168\u90e8\u8461\u8404\u9152\u7684\u7533\u8bf7\u3002","neither":"\u5982\u679c\u60a8\u60f3\u6e05\u7b97\u548c/\u6216\u63d0\u53d6\u8d44\u91d1\uff0c\u8bf7\u70b9\u51fb\u4ee5\u4e0b\u6309\u94ae\u3002","partial":"\u6211\u4eec\u5df2\u6536\u5230\u5173\u4e8e\u60a8\u5e0c\u671b\u51fa\u552e\u90e8\u5206\u8461\u8404\u9152\u7684\u7533\u8bf7\u3002"},"sell_button":{"disabled":"\u51fa\u552e\u60a8\u7684\u8461\u8404\u9152","enabled":"\u8fdb\u884c\u4e2d"},"support":{"notsold":"\u5982\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7\u67e5\u770b\u6211\u4eec\u7684","notsold_email_message":"\u5ba2\u6237\u652f\u6301\u9875\u9762","sold":"\u5982\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7","sold_email_message":"\u8bf7\u4e0e\u6211\u4eec\u7684\u652f\u6301\u56e2\u961f\u8054\u7cfb"}},"sellyourwine":{"description":{"description":"\u8be5\u8fc7\u7a0b\u5b8c\u6210\u9700\u89812-4\u5468\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002","portfolio-sold":"\u6211\u4eec\u5df2\u6536\u5230\u60a8\u51fa\u552e\u5168\u90e8\u8461\u8404\u9152\u7684\u7533\u8bf7\u3002","sell-portfolio":"\u5982\u679c\u60a8\u60f3\u6e05\u7b97\u548c/\u6216\u63d0\u53d6\u8d44\u91d1\uff0c\u8bf7\u5355\u51fb\u4e0b\u9762\u7684\u6309\u94ae\u3002"},"sellbutton":{"disabled":"\u51fa\u552e\u60a8\u7684\u8461\u8404\u9152","enabled":"\u8fdb\u884c\u4e2d"},"support":{"notsold":"\u5982\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7\u67e5\u770b\u6211\u4eec\u7684","notsold-email-message":"\u652f\u6301\u9875\u9762","sold":"\u5982\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7","sold-email-message":"\u8bf7\u4e0e\u6211\u4eec\u7684\u652f\u6301\u56e2\u961f\u8054\u7cfb"}},"standard":"\u6807\u51c6","support":{"help_support":"\u5e2e\u52a9\u652f\u6301","privacy_policy":"\u9690\u79c1\u653f\u7b56","terms_condition":"\u6761\u6b3e\u53ca\u7ec6\u5219","title":"\u5ba2\u6237\u652f\u6301"},"title":"\u7528\u6237\u8bbe\u7f6e","update_info":{"complete_message":"\u60a8\u7684\u7535\u8bdd\u53f7\u7801\u5df2\u66f4\u65b0\uff01"},"updateinfo":{"complete-message":"\u60a8\u7684\u7535\u8bdd\u53f7\u7801\u5df2\u66f4\u65b0\uff01"},"user_settings":{"account":"\u4e2a\u4eba\u4fe1\u606f","investment_plan":"\u6295\u8d44\u8ba1\u5212","logout":"\u767b\u51fa","password":"\u5bc6\u7801","phone":"\u624b\u673a\u53f7\u7801"},"usersettings":{"account":"\u4e2a\u4eba\u4fe1\u606f","phone":"\u624b\u673a\u53f7\u7801"}}')},345:function(e){e.exports=JSON.parse('{"price_history":{"average_price":"\u5e73\u5747\u4ef7\u683c","benchmark":"\u53c2\u8003\u57fa\u51c6\u70b9","benchmark_wine_name":"\u7eb3\u5e15\u8c37\uff0c\u6ce2\u5c14\u591a\u8461\u8404\u9152\u6df7\u917f","current_wine":"\u5f53\u524d\u7684\u8461\u8404\u9152","current_wine_name":"\u7f8e\u56fd\u7eb3\u5e15\u8c37\u4f5c\u54c1\u4e00\u53f7","hide_benchmark":"\u9690\u85cf\u53c2\u8003\u57fa\u51c6\u70b9","price_history":"\u4ef7\u683c\u5386\u53f2\u8bb0\u5f55"},"pricehistory":{"averageprice":"\u5e73\u5747\u4ef7\u683c","benchmark":"\u53c2\u8003\u57fa\u51c6","currentwine":"\u5f53\u524d\u7684\u8461\u8404\u9152","hidebenchmark":"\u9690\u85cf\u53c2\u8003\u57fa\u51c6","pricehistory":"\u4ef7\u683c\u8bb0\u5f55"}}')},346:function(e){e.exports=JSON.parse('{"account":"\u5e10\u6237","calendly":{"book":"\u6b22\u8fce\u6765\u7535\u4e0e\u6211\u4eec\u7684\u8461\u8404\u9152\u4e13\u5bb6\u8fdb\u884c\u4e00\u5bf9\u4e00\u6c9f\u901a\u3002\u5efa\u7acb\u8461\u8404\u9152\u6295\u8d44\u7ec4\u5408\u4ee5\u5bf9\u6297\u5e02\u573a\u7684\u4e0d\u786e\u5b9a\u6027\u3002","mobile-book":"\u6b22\u8fce\u6765\u7535\u4e0e\u6211\u4eec\u7684\u8461\u8404\u9152\u4e13\u5bb6\u8fdb\u884c\u4e00\u5bf9\u4e00\u6c9f\u901a\u3002"},"copywrite":"\u4f1f\u8bfa\u7ea2\u9152\u3002\u7248\u6743\u6240\u6709\u3002","currency":"\u7f8e\u5143","currency_symbol":"HK$","currencySymbol":"HK$","date-format":{"month":"\u6708/\u5e74","standard":"\u6708/\u65e5/\u5e74"},"date":{"short":"{{ date, short }}"},"documents":"\u6587\u4ef6\u8d44\u6599","duration":"{{ count, duration}} {{ unit, duration}}","en_currency":"\u7f8e\u5143","error-boundry":{"button-retry":"\u8bf7\u518d\u8bd5\u4e00\u6b21","description":"\u5f88\u62b1\u6b49\uff01\u4f3c\u4e4e\u6211\u4eec&apos;\u51fa\u73b0\u4e86\u4e00\u70b9\u95ee\u9898\u3002","error":"\u9519\u8bef\u4fe1\u606f","hold":"\u8bf7\u7b49\u5f85\u7247\u523b\u4e4b\u540e\u518d\u8bd5","title":"\u4e0d\u662f\u60a8\uff0c\u800c\u662f\u6211\u4eec"},"footer":{"and":"\u548c","button-about":"\u5173\u4e8e\u6211\u4eec","button-faq":"\u5e38\u95ee\u95ee\u9898","button-home":"\u4e3b\u9875","button-privacy":"\u9690\u79c1\u653f\u7b56","button-terms":"\u670d\u52a1\u6761\u6b3e","button-terms-conditions":"\u6761\u6b3e\u53ca\u7ec6\u5219","button-website":"\u4f1f\u8bfa\u7ea2\u9152","disclaimer-1":"\u4f1f\u8bfa\u7ea2\u9152\uff08Vinovest\uff09\u8fd0\u8425\u7f51\u7ad9\u5728","disclaimer-2":"\u4f7f\u7528\u672c\u5e73\u53f0\u5373\u8868\u793a\u60a8\u63a5\u53d7\u6211\u4eec\u7684","disclaimer-3":"\u8fc7\u53bb\u7684\u8868\u73b0\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u5c06\u6765\u7684\u7ed3\u679c\u3002\u4efb\u4f55\u5386\u53f2\u6536\u76ca\u3001\u9884\u671f\u6536\u76ca\u6216\u6982\u7387\u9884\u6d4b\u90fd\u65e0\u6cd5\u53cd\u6620\u672a\u6765\u7684\u771f\u5b9e\u8868\u73b0\u3002\u8d2d\u4e70\u8461\u8404\u9152\u81ea\u5e26\u98ce\u9669\uff0c\u5e76\u53ef\u80fd\u5bfc\u81f4\u90e8\u5206\u8d22\u52a1\u635f\u5931\u3002\u5c3d\u7ba1\u6211\u4eec\u4f1a\u4f7f\u7528\u53ef\u9760\u7684\u7b2c\u4e09\u65b9\u6570\u636e\uff0c\u4f46\u6211\u4eec\u65e0\u6cd5\u4fdd\u8bc1\u7531\u6295\u8d44\u8005\u6216\u5176\u4ed6\u7b2c\u4e09\u65b9\u63d0\u4f9b\u7684\u6570\u636e\u7684\u51c6\u786e\u6027\u6216\u5b8c\u6574\u6027\u3002","disclaimer-4":"\u4f1f\u8bfa\u7ea2\u9152\u6216\u5176\u4efb\u4f55\u9644\u5c5e\u516c\u53f8\u5747\u4e0d\u63d0\u4f9b\u7a0e\u52a1\u54a8\u8be2\uff0c\u4e5f\u4e0d\u4ee5\u4efb\u4f55\u65b9\u5f0f\u8868\u793a\u6b64\u5904\u6240\u8ff0\u7ed3\u679c\u4f1a\u5bfc\u81f4\u4efb\u4f55\u7279\u5b9a\u7684\u7a0e\u52a1\u540e\u679c\u3002\u6f5c\u5728\u6295\u8d44\u8005\u5e94\u6839\u636e\u81ea\u5df1\u7684\u5177\u4f53\u60c5\u51b5\u5c31\u7a0e\u6536\u4e8b\u5b9c\u5411\u60a8\u7684\u7a0e\u52a1\u987e\u95ee\u54a8\u8be2\u3002 \u4f1f\u8bfa\u7ea2\u9152\u6216\u5176\u4efb\u4f55\u9644\u5c5e\u516c\u53f8\u5747\u4e0d\u5bf9\u4efb\u4f55\u6295\u8d44\u8005\u7684\u4efb\u4f55\u6295\u8d44\u627f\u62c5\u4efb\u4f55\u7a0e\u6536\u540e\u679c\u3002"},"invite":"\u9080\u8bf7","months":{"april":"\u56db\u6708","august":"\u516b\u6708","december":"\u5341\u4e8c\u6708","february":"\u4e8c\u6708","january":"\u4e00\u6708","july":"\u4e03\u6708","june":"\u516d\u6708","march":"\u884c\u8fdb","may":"\u53ef\u80fd","november":"\u5341\u4e00\u6708","october":"\u5341\u6708","september":"\u4e5d\u6708"},"navigation":{"funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d"},"overview":"\u6982\u89c8","phone-number-capture":{"error":"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u8bdd\u53f7\u7801","error-region":"\u63d0\u4f9b\u7684\u5b57\u7b26\u4e32\u4f3c\u4e4e\u4e0d\u662f\u7535\u8bdd\u53f7\u7801","title":"\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u8bdd\u53f7\u7801"},"portfolio":"\u6295\u8d44\u7ec4\u5408","transactions":"\u4ea4\u6613\u8bb0\u5f55","uppercase":"{{ text, uppercase }}","utils":{"constants":{"aggressive":"\u6311\u8845\u7684","bank_transfer":"\u94f6\u884c\u8f6c\u5e10","conservative":"\u4fdd\u5b88\u7684","credit_card":"\u4fe1\u7528\u5361","funds_added":"\u8865\u5145\u8d44\u91d1","funds_withdrew":"\u8d44\u91d1\u63d0\u53d6","moderate":"\u7f13\u548c","pending_deposit":"\u5f85\u5b9a\u5b58\u6b3e","rebalance_add":"\u91cd\u65b0\u5e73\u8861\u6dfb\u52a0","trade_settlement_purchase":"\u8d38\u6613\u7ed3\u7b97\u8d2d\u4e70","trade_settlement_sell":"\u8d38\u6613\u7ed3\u7b97\u51fa\u552e","transfer_in":"\u8f6c\u5165","transfer_out":"\u8f6c\u51fa","vinovest_monthly_fee":"\u6700\u4fbf\u5b9c\u7684\u6708\u8d39","wine_purchase":"\u8461\u8404\u9152\u8d2d\u4e70","wine_sold":"\u5356\u9152"},"shared":{"bottle":"%1$s\u74f6","bottle_plural":"%1$s\u74f6","case":"%1$s\u6848\u4f8b","case_plural":"%1$s\u6848\u4f8b"}},"zh_CN_currency":"\u4eba\u6c11\u5e01","zh_Hans_HK_currency":"\u6e2f\u5e01"}')},347:function(e){e.exports=JSON.parse('{"en":"\u7f8e\u5143","zh_CN":"\u4eba\u6c11\u5e01","zh_Hans_HK":"\u6e2f\u5e01"}')},348:function(e){e.exports=JSON.parse('{"ach_fee":"\u81ea\u52a8\u6e05\u7b97\u624b\u7eed\u8d39","add_funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","alert_message":"\u76ee\u524d\uff0c\u94f6\u884c\u7535\u6c47\u4e0d\u9002\u7528\u4e8e\u81ea\u52a8\u6295\u8d44","alipay":"\u652f\u4ed8\u5b9d","amount":"\u6570\u989d","amountvalidation":"\u8bf7\u81f3\u5c11\u8f93\u5165 $ {{minValue}} {{currency}}","arrow":"\u7bad\u5934","average_deposit":"\u5e73\u5747\u5f00\u6237\u91d1\u989d","back":"\u8fd4\u56de","bank_wire":"\u94f6\u884c\u7535\u6c47","bank":{"aba_number":"ABA\u6c47\u6b3e\u8def\u7ebf\u53f7\u7801","aba_number_value":"084106768","acct_number":"\u5e10\u53f7","bank_address":"\u94f6\u884c\u5730\u5740","beneficiary_name_value":"\u4f1f\u8bfa\u7ea2\u9152","domestic":{"acct_number_value":"9800534046","bank_address_value":"\u7530\u7eb3\u897f\u5dde\u5b5f\u83f2\u65af\u5e02\u767d\u6768\u5927\u90536070\u53f7200\u5ba4\uff0c\u90ae\u7f1638119","bank_name":"\u94f6\u884c\u540d\u79f0","bank_name_value":"Evolve\u94f6\u884c\u4e0e\u4fe1\u6258\u516c\u53f8","beneficiary_addr":"\u6536\u6b3e\u4eba\u5730\u5740","beneficiary_addr_value":"\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde\u5361\u5c14\u5f17\u5e02\u5361\u5c14\u5f17\u5927\u90539900\u53f7PHE\u516c\u5bd3\uff0c\u90ae\u7f1690232","beneficiary_name":"\u6536\u6b3e\u4eba\u59d3\u540d"},"international":{"account_number_value":"3302798623","bank_address_value":"\u7f8e\u56fd\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde\u5723\u514b\u62c9\u62c9\u5e02\u5854\u65af\u66fc\u8def3003\u53f7\uff0c\u90ae\u7f1695054","bank_name":"\u6536\u6b3e\u94f6\u884c/\u4ee3\u7406\u94f6\u884c\uff08\u4ed8\u6b3e\u81f3\uff09\uff1a","bank_name_value":"\u7845\u8c37\u94f6\u884c","beneficiary":"\u6536\u6b3e\u4eba","beneficiary_addr":"\u6536\u6b3e\u94f6\u884c\u5730\u5740","beneficiary_address_value":"\u6536\u6b3e\u94f6\u884c\u5730\u5740","beneficiary_name":"\u6536\u6b3e\u94f6\u884c","memo":"\u5c06\u6b64\u5907\u5fd8\u5f55\u6dfb\u52a0\u5230\u53d1\u8d77\u4eba\u81f3\u53d7\u76ca\u4eba\u4fe1\u606f(OBI)/\u8fdb\u4e00\u6b65\u4fe1\u7528/\u7279\u522b\u8bf4\u660e\u4e00\u680f\u4e2d\u3002","memo_value":"\u81f3\u4f1f\u8bfa\u7ea2\u9152\u5728\u7845\u8c37\u94f6\u884c\u7684\u8d26\u6237\uff1a3302798623","swift_code":"SWIFT\u4ee3\u7801","swift_code_value":"SVBKUS6S"},"type_acct":"\u5e10\u6237\u7c7b\u578b","type_acct_value":"\u6b63\u5728\u68c0\u67e5"},"bitpay_error":"\u60a8\u7684Bitpay\u4ed8\u6b3e\u672a\u901a\u8fc7\u3002\u8bf7\u5c1d\u8bd5\u5176\u4ed6\u4ed8\u6b3e\u65b9\u5f0f\uff0c\u6216\u8005\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002","bitpay_warning":"\u6682\u65f6\u65e0\u6cd5\u751f\u6210Bitpay\u53d1\u7968\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002","card_namep_laceholder":"\u4fe1\u7528\u5361\u6301\u5361\u4eba\u59d3\u540d","cc_name_length":"\u540d\u79f0\u957f\u5ea6\u4e0d\u80fd\u5927\u4e8e26\u3002","cc_name_length_min":"\u540d\u79f0\u957f\u5ea6\u5fc5\u987b\u5927\u4e8e2\u3002","cc_name_placeholder":"\u4fe1\u7528\u5361\u6301\u5361\u4eba\u59d3\u540d","check_instructions":"\u8981\u901a\u8fc7\u652f\u7968\u4e3a\u60a8\u7684\u8d26\u6237\u6ce8\u8d44\uff0c\u8bf7\u9075\u5faa\u4ee5\u4e0b\u64cd\u4f5c\u8bf4\u660e\u3002","completetransfer":"\u5b8c\u6210\u8f6c\u8d26","confirmation":"\u8f6c\u8d26\u5df2\u542f\u52a8","connect_bank":"\u7ed1\u5b9a\u94f6\u884c\u8d26\u6237","continue":"\u7ee7\u7eed{{currencySymbol}} {{amount}}","credit":"\u4fe1\u7528\u5361\u624b\u7eed\u8d39","credit_card":"\u4fe1\u7528\u5361","crypto":"\u52a0\u5bc6\u8d27\u5e01","date":"\u65e5\u671f","domestic_wire_description":"\u60a8\u53ef\u4ee5\u901a\u8fc7\u94f6\u884c\u8f6c\u5e10\u5c06\u8d44\u91d1\u6ce8\u5165\u60a8\u7684\u5e10\u6237\u3002\u8bf7\u6c47\u6b3e\u81f3\u8be5\u5e10\u6237\uff0c\u5e76\u63d0\u4f9b\u60a8\u8f6c\u5e10\u65f6\u663e\u793a\u7684\u53c2\u8003\u7f16\u53f7\u3002","domestic_wire_print":"\u56fd\u5185\u7535\u6c47","domestic_wire_tip":"\u53c2\u8003\u7f16\u53f7\u662f\u5206\u914d\u7ed9\u4efb\u4f55\u91d1\u878d\u4ea4\u6613\uff08\u5305\u62ec\u4f7f\u7528\u4fe1\u7528\u5361\u6216\u501f\u8bb0\u5361\u8fdb\u884c\u7684\u91d1\u878d\u4ea4\u6613\uff09\u7684\u552f\u4e00\u6807\u8bc6\u7b26","domestic_wire_transfer":"\u56fd\u9645\u94f6\u884c\u7535\u6c47\u8f6c\u8d26","done":"\u5b8c\u6210","enter_credit_card":"\u8f93\u5165\u4fe1\u7528\u5361\u5361\u53f7","enterCreditCard":{"nameplaceholder":"\u884c\u7528\u5361\u6301\u5361\u4eba\u59d3\u540d"},"failed":"\u8f6c\u8d26\u5931\u8d25","failed_line1":"\u60a8\u7684\u8f6c\u8d26\u5c1a\u672a\u5b8c\u6210\u3002","failed_line2":"\u8bf7\u68c0\u67e5\u60a8\u7684\u94f6\u884c\u8d26\u6237\u662f\u5426\u7ed1\u5b9a\u6210\u529f\u4ee5\u53ca\u4ed8\u6b3e\u65b9\u5f0f\uff0c\u7136\u540e\u8bf7\u91cd\u8bd5\u3002","fee":"\u8d39\u7528","feebanner":"\u8bbe\u7f6e\u81ea\u52a8\u6295\u8d44\u53ef\u4ee5\u8ba9\u60a8\u8282\u7701{{percentage}}","feePercentage":"2.9\uff05","frequency":"\u5468\u671f","info":"\u4fe1\u606f","instructions":"\u8bf7\u53c2\u8003\u8bf4\u660e","international_bank_wire":"\u56fd\u9645\u94f6\u884c\u7535\u6c47","international_wire_transfer":"\u56fd\u9645\u94f6\u884c\u7535\u6c47\u8f6c\u8d26","intl_description":"\u60a8\u53ef\u4ee5\u901a\u8fc7\u94f6\u884c\u8f6c\u5e10\u5c06\u8d44\u91d1\u5b58\u5165\u60a8\u7684\u5e10\u6237\u3002\u8bf7\u6c47\u6b3e\u81f3\u8be5\u5e10\u6237\uff0c\u5e76\u63d0\u4f9b\u60a8\u8f6c\u5e10\u65f6\u663e\u793a\u7684\u53c2\u8003\u7f16\u53f7\u3002","intl_tip":"\u53c2\u8003\u7f16\u53f7\u662f\u5206\u914d\u7ed9\u4efb\u4f55\u91d1\u878d\u4ea4\u6613\uff08\u5305\u62ec\u4f7f\u7528\u4fe1\u7528\u5361\u6216\u501f\u8bb0\u5361\u8fdb\u884c\u7684\u91d1\u878d\u4ea4\u6613\uff09\u7684\u552f\u4e00\u6807\u8bc6\u7b26","lower_add":"$ t\uff08add_funds\uff0c\u5927\u5199\uff09","mail_check":"\u90ae\u5bc4\u652f\u7968","mail_check_deposit":"\u90ae\u5bc4\u652f\u7968\u4ee5\u6ce8\u8d44","mail_check_example":"\u90ae\u5bc4\u652f\u7968\u793a\u4f8b","mail_to":"\u8bf7\u90ae\u5bc4\u81f3","memo":"\u5907\u5fd8\u5f55","memo_value":"\u8bf7\u5c06\u4e0e\u60a8\u7684\u4f1f\u8bfa\u7ea2\u9152\u5e10\u6237\u5173\u8054\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u6dfb\u52a0\u8fdb\u53c2\u8003\u5907\u5fd8\u5f55\u5185\u3002","minimum_check_limit_reminder":"\u6ce8\u8d44\u4e3a1000\u7f8e\u91d1\u8d77\u3002\u5e73\u5747\u5f00\u6237\u91d1\u989d\u4e3a5000\u7f8e\u91d1\u3002","new":"\u65b0\u7684","new_payment_source":"\u6dfb\u52a0\u65b0\u7684\u4ed8\u6b3e\u65b9\u5f0f","next":"\u4e0b\u4e00\u9879","option":"\u9009\u62e9\u5468\u671f","otheramount":"\u5176\u4ed6\u91d1\u989d","pay_order":"\u652f\u4ed8\u8ba2\u5355","placeholder":"\u4f8b\u5982\uff0c{{currencySymbol}} {{amount}}","portfolio_tooltip":"\u5386\u53f2\u6570\u636e\u663e\u793a\uff0c\u91d1\u989d\u8d85\u8fc710000\u7f8e\u5143\u7684\u6295\u8d44\u8868\u73b0\u8981\u660e\u663e\u4f18\u4e8e\u4f4e\u4e8e10000\u7f8e\u5143\u7684\u6295\u8d44\u3002","print_path":"\u56fd\u9645\u7535\u6c47","questions":"\u5982\u6709\u95ee\u9898\uff0c\u6b22\u8fce\u5411\u6211\u4eec\u7684\u4e13\u5bb6\u54a8\u8be2\u3002","receiving_bank_dtls":"\u6536\u6b3e\u94f6\u884c\u660e\u7ec6","retry":"\u8bf7\u91cd\u8bd5","review":"\u7f8e\u56fd\u4fe1\u7528\u5361\u7684\u624b\u7eed\u8d39\u4e3a2.9\uff05\u3002\u56fd\u9645\u4fe1\u7528\u5361\u4f1a\u518d\u989d\u5916\u6536\u53d61-2\uff05","review_tooltip":"\u7f8e\u56fd\u4fe1\u7528\u5361\u4f1a\u6536\u53d6{{feePercentage}}%\u7684\u4fe1\u7528\u5361\u624b\u7eed\u8d39\u3002\\\\n\u56fd\u9645\u4fe1\u7528\u5361\u4f1a\u518d\u989d\u5916\u6536\u53d6{{minFeeAdditional}} - {{maxFeeAdditional}} \uff05","review_transfer":"\u67e5\u770b\u60a8\u7684\u8f6c\u5e10","reviewTranfer":{"amount":{"title":"[%key_id:83269566%]"},"completetransfer":"\u5b8c\u6210\u8f6c\u8d26","date":{"title":"\u65e5\u671f","tooltip":"\u5bf9\u4e8e\u7f8e\u56fd\u4fe1\u7528\u5361\u4f1a\u6536\u53d6{{feePercentage}}%\u7684\u4fe1\u7528\u5361\u624b\u7eed\u8d39\u3002\\\\n\u5bf9\u4e8e\u5176\u4ed6\u56fd\u9645\u4fe1\u7528\u5361\u4f1a\u989d\u5916\u518d\u6536\u53d6{{minFeeAdditional}} - {{maxFeeAdditional}} \uff05"},"frequency":{"description":"\u60a8\u7684\u7b2c\u4e00\u6b21\u8f6c\u8d26\u5df2\u5b89\u6392\u5728\u5982\u4e0b\u65e5\u671f\u8fdb\u884c\uff0c\u4e4b\u540e\u5c06\u6839\u636e\u60a8\u81ea\u5df1\u9009\u62e9\u7684\u8f6c\u8d26\u5468\u671f\u6765\u8fdb\u884c\u5b9a\u671f\u8f6c\u8d26\u3002","title":"[%key_id:83269562%]"},"paymentTypeFeeLabel":{"ach":"\u81ea\u52a8\u6e05\u7b97\u624b\u7eed\u8d39","credit":"\u4fe1\u7528\u5361\u624b\u7eed\u8d39","default":"\u8d39\u7528"},"source":{"title":"[%key_id:83269560%]"}},"rootdeposit":{"add-funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","credit-card":"\u8f93\u5165\u4fe1\u7528\u5361\u5361\u53f7","failed":"\u8f6c\u8d26\u5931\u8d25","review-transfer":"\u67e5\u770b\u60a8\u7684\u8f6c\u5e10","select-source":"\u9009\u62e9\u8d44\u91d1\u6765\u6e90"},"select_other":"\u5176\u4ed6\u91d1\u989d","select_source":"\u9009\u62e9\u8d44\u91d1\u6765\u6e90","selectSource":{"alert-message":"\u76ee\u524d\uff0c\u94f6\u884c\u7535\u6c47\u4e0d\u9002\u7528\u4e8e\u81ea\u52a8\u6295\u8d44","back":"\u8fd4\u56de","bank-wire":"\u94f6\u884c\u7535\u6c47","connect-bank":"\u7ed1\u5b9a\u94f6\u884c\u8d26\u6237","credit-card":"\u4fe1\u7528\u5361"},"source":"\u6765\u6e90","transfer_description":"\u60a8\u7684\u9996\u6b21\u8f6c\u8d26\u5df2\u5b89\u6392\u5728\u5982\u4e0b\u65e5\u671f\u8fdb\u884c\uff0c\u4e4b\u540e\u5c06\u6839\u636e\u60a8\u81ea\u5df1\u9009\u62e9\u7684\u8f6c\u8d26\u5468\u671f\u6765\u8fdb\u884c\u5b9a\u671f\u8f6c\u8d26\u3002","transfer_message_line1":"\u60a8\u7684{{currencySymbol}} {{amount}}\u8f6c\u8d26\u5df2\u7ecf\u542f\u52a8","transfer_message_line2":"\u6700\u591a\u53ef\u80fd\u9700\u8981{{minDay}} - {{maxDay}}\u5929\u624d\u80fd\u6263\u9664","transfer_message_line3":"\u4ece\u60a8\u7684\u8d26\u6237","us_bank_wire":"\u7f8e\u56fd\u94f6\u884c\u7535\u6c47","vinovest":"\u4f1f\u8bfa\u7ea2\u9152","vinovest_address":{"city_state":"\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde\u5361\u5c14\u5f17\u5e02\uff0c\u90ae\u7f1690232","name":"\u4f1f\u8bfa\u7ea2\u9152","street":"\u5361\u5c14\u5f17\u5927\u90539900\u53f7 PHE\u5355\u5143\uff0c"},"wire_description":"\u5230\u8d26\u540e\u97005\u4e2a\u5de5\u4f5c\u65e5\u7684\u65f6\u95f4\u8fdb\u884c\u5904\u7406\u3002\u8bf7","wire_description_contd":"\u5982\u6709\u4efb\u4f55\u7591\u95ee\u3002","wire_mail_link":"\u6b22\u8fce\u4e0e\u6211\u4eec\u8054\u7cfb","wire_transfer_type":"\u9009\u62e9\u7535\u6c47\u8f6c\u8d26\u7c7b\u578b","wire_transfer":{"button_done":"\u5b8c\u6210","download":"\u4e0b\u8f7d\u5e76\u6253\u5370","field":"\u53c2\u8003\u5b57\u6bb5"}}')},349:function(e){e.exports=JSON.parse('{"documents":"\u6587\u4ef6\u8d44\u6599","empty_button":"\u4e3a\u60a8\u7684\u5e10\u6237\u6ce8\u8d44","empty_title":"\u60a8\u5c1a\u672a\u6709\u4efb\u4f55\u6587\u4ef6\u3002","empty":{"button":"\u4e3a\u60a8\u7684\u5e10\u6237\u6ce8\u8d44","title":"\u60a8\u5c1a\u672a\u6709\u4efb\u4f55\u6587\u4ef6\u3002"},"error":"\u63d0\u53d6\u60a8\u7684{{document}}\u65f6\u51fa\u73b0\u95ee\u9898\u3002\u8bf7\u91cd\u8bd5\u6216\u5728\u8fd9\u91cc\u4e0e\u6211\u4eec\u804a\u5929\u{1f449}","error_options":{"account_statement":"\u5e10\u6237\u5bf9\u5e10\u5355","account_statements":"\u5e10\u6237\u5bf9\u5e10\u5355","available_month":"\u53ef\u7528\u6708\u4efd\u9009\u9879"},"issued":"\u53d1\u884c\u65e5\u671f","list_title":"\u6807\u9898","listTitle":"\u6807\u9898","loadmore":"\u52a0\u8f7d\u66f4\u591a","mobile_statements":"\u58f0\u660e","mobileStatements":"\u58f0\u660e","statement":"\u8d26\u6237\u5bf9\u8d26\u5355","statements":"\u8d26\u6237\u5bf9\u8d26\u5355"}')},350:function(e){e.exports=JSON.parse('{"cheersToYouBoth":"\u4e3a\u4f60\u4eec\u4fe9\u5e72\u676f\uff01 \u{1f942}","copied":"\u5df2\u590d\u5236\uff01","copyCTA":"\u590d\u5236","finewine":"\u4e0a\u7b49\u8461\u8404\u9152","get3MonthsOfNoFees":"\u83b7\u5f973\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f\u3002","helpEveryoneGrowTheirMoney":"\u8ba9\u60a8\u7684\u6bcf\u4e2a\u670b\u53cb\u90fd\u80fd\u6709\u6240\u6536\u76ca\u3002\u5f53\u60a8\u7684\u670b\u53cb\u901a\u8fc7\u60a8\u7684\u9080\u8bf7\u94fe\u63a5\u5728Vinovest\u7684\u8d26\u6237\u4e0a\u6ce8\u8d44\u65f6\uff0c\u60a8\u5c06\u989d\u5916\u83b7\u5f973\u4e2a\u6708\u7684\u514d\u8d39\u8461\u8404\u9152\u5b58\u50a8\u548c\u7ba1\u7406\u670d\u52a1\u3002\u6700\u7686\u5927\u6b22\u559c\u7684\u662f\uff0c\u60a8\u7684\u670b\u53cb\u4e5f\u5c06\u83b7\u5f973\u4e2a\u6708\u7684\u514d\u8d39\u8be5\u670d\u52a1\uff01","investing":"\u6b63\u5728\u6295\u8d44","monthsManagedFree":"\u514d\u8d39\u7ba1\u7406\u6570\u6708","shareInviteLink":"\u5206\u4eab\u9080\u8bf7\u94fe\u63a5","shareTheWealth":"\u5206\u4eab\u8d22\u5bcc","social_share_msg":"\u6211\u4e0e\u4f1f\u8bfa\u7ea2\u9152\u5171\u540c\u7ba1\u7406\u4f18\u8d28\u8461\u8404\u9152\u6295\u8d44\u7ec4\u5408\u3002\u4f7f\u7528\u6b64\u94fe\u63a5\u53ef\u83b7\u5f973\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u4f1f\u8bfa\u7ea2\u9152\u6295\u8d44\u4ea4\u6613\u5e73\u53f0\u4f7f\u7528\u6743","social_summary":"\u5982\u679c\u60a8\u5982\u6b64\u505a\uff0c\u6211\u4eec\u4f1a\u83b7\u5f97\u5956\u52b1","successfulInvites":"\u9080\u8bf7\u6210\u529f","wine":"\u8461\u8404\u9152"}')},351:function(e){e.exports=JSON.parse('{"welcome.hello":"\u60a8\u597d"}')},352:function(e){e.exports=JSON.parse('{"acknowlege":"\u786e\u8ba4\u5e76\u7ee7\u7eed","advisor":"\u6295\u8d44\u987e\u95ee","back":"\u8fd4\u56de","before_you_request":{"choose_the_option":{"description":"\u6211\u60f3\u8981...","index":"0","next":"\u8461\u8404\u9152\u9009\u62e9","prev":"/ before_you_liquidate_your_portfolio","subPage":"\u9009\u9879\u9009\u62e9","title":"\u8bf7\u9009\u62e9\u4e0e\u60a8\u7684\u76ee\u6807\u6700\u76f8\u7b26\u7684\u9009\u9879"},"confirm_liquidation":{"description":"\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u6211\u4eec\u5df2\u5411\u60a8\u5173\u8054\u7684\u7535\u5b50\u90ae\u4ef6\u53d1\u9001\u4e86\u4e00\u5c01\u786e\u8ba4\u51fd\u3002\u5728\u60a8\u6253\u5f00\u7535\u5b50\u90ae\u4ef6\u7684\u786e\u8ba4\u51fd\u5e76\u70b9\u51fb\u786e\u8ba4\u4e4b\u524d\uff0c\u60a8\u7684\u6e05\u7b97\u8fc7\u7a0b\u5c1a\u672a\u5b8c\u6210\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u5783\u573e\u90ae\u4ef6\u6587\u4ef6\u5939\u3002","index":"3","next":"/","prev":"\u65e0\u6548","subPage":"\u6e05\u7b97\u786e\u8ba4","title":"\u786e\u8ba4\u6e05\u7b97"},"confirm_your_wines":{"description":"\u5728\u5e02\u573a\u4e0a\u51fa\u552e\u8461\u8404\u9152\u901a\u5e38\u9700\u89812\u52304\u5468\u7684\u65f6\u95f4\u3002","index":"2","next":"\u6e05\u7b97\u786e\u8ba4","prev":"\u8461\u8404\u9152\u9009\u62e9","subPage":"\u8461\u8404\u9152\u786e\u8ba4","title":"\u786e\u8ba4\u60a8\u5c06\u88ab\u51fa\u552e\u7684\u8461\u8404\u9152"},"feedback_options":{"completed":{"description":"\u4ea4\u6613\u5b8c\u6210\u65f6\uff0c\u6211\u4eec\u4f1a\u901a\u77e5\u60a8","feedback":"\u6211\u4eec\u975e\u5e38\u91cd\u89c6\u60a8\u7684\u5b9d\u8d35\u610f\u89c1\uff0c\u82e5\u662f\u60a8\u80fd\u544a\u77e5\u6211\u4eec\u7533\u8bf7\u8461\u8404\u9152\u5151\u73b0\u7684\u539f\u56e0\uff0c\u6211\u4eec\u5c06\u4e0d\u80dc\u611f\u6fc0\u3002\u6211\u4eec\u4fdd\u8bc1\uff0c\u60a8\u7684\u53cd\u9988\u5c06\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u516c\u5f00\uff0c\u56e0\u6b64\u5b83\u4eec\u4e0d\u4f1a\u5bf9\u60a8\u7684\u7533\u8bf7\u4ea7\u751f\u4efb\u4f55\u7684\u5f71\u54cd\u3002","leave_feedback_placeholder":"\u60a8\u7684\u53cd\u9988\uff08\u53ef\u9009\uff09","title":"\u60a8\u7684\u8461\u8404\u9152\u5c06\u88ab\u5b89\u6392\u51fa\u552e"},"option1":"\u6211\u56e0\u5e02\u573a\u73af\u5883\u539f\u56e0\u8981\u6c42\u51fa\u552e","option2":"\u6211\u56e0\u4e2a\u4eba\u539f\u56e0\u8981\u6c42\u51fa\u552e","option3":"\u6211\u5bf9Vinovest\u7684\u7ecf\u9a8c\u4e0d\u592a\u6ee1\u610f","option4":"\u6211\u7684\u8d39\u7528/\u8d26\u6237\u6536\u8d39\u592a\u9ad8","option5":"\u6211\u9009\u62e9\u4e0d\u56de\u7b54","sharpe_ratio":{"other":""},"support":{"email":"\u9020\u8bbf","email_rest":"\u53ef\u56de\u7b54\u4efb\u4f55\u95ee\u9898\u7684\u9875\u9762","mobile_email":"\u7535\u5b50\u90ae\u4ef6","mobile_questions":"\u5982\u6709\u7591\u95ee","support":"\u652f\u6301"}},"select_wines":{"bottle":"\u74f6","case":"\u7bb1","description":"\u5728\u5e02\u573a\u4e0a\u51fa\u552e\u8461\u8404\u9152\u901a\u5e38\u9700\u89812\u52304\u5468\u7684\u65f6\u95f4\u3002","holdings":{"quantity":"\u6570\u91cf","sell":"\u51fa\u552e","title":"\u60a8\u7684\u8461\u8404\u9152"},"index":"1","next":"\u8461\u8404\u9152\u786e\u8ba4","note":"\u6ce8\u610f\uff1a\u8bf7\u6c42\u5b8c\u5168\u6e05\u7b97\u4f1a\u81ea\u52a8\u53d6\u6d88\u6240\u6709\u7b49\u5f85\u7684\u8ba2\u5355\u3002\u8981\u67e5\u770b\u60a8\u7684\u8ba2\u5355\u5386\u53f2\u8bb0\u5f55\uff0c\u60a8\u53ef\u4ee5\u4ece","prev":"\u9009\u9879\u9009\u62e9","sell_wine":"\u51fa\u552e\u6211\u7684\u8461\u8404\u9152","sell_wine_button":"\u51fa\u552e\u6211\u7684\u8461\u8404\u9152","subPage":"\u8461\u8404\u9152\u9009\u62e9","title":"\u9009\u62e9\u8981\u51fa\u552e\u7684\u8461\u8404\u9152","transaction_tab":"\u4ea4\u6613\u6807\u7b7e"},"sell_options":{"all":"\u51fa\u552e\u6240\u6709\u6211\u7684\u8461\u8404\u9152\u85cf\u54c1","note":"\u6ce8\u610f\uff1a\u8bf7\u6c42\u5b8c\u5168\u6e05\u7b97\u4f1a\u81ea\u52a8\u53d6\u6d88\u6240\u6709\u7b49\u5f85\u7684\u8ba2\u5355\u3002\u8981\u67e5\u770b\u60a8\u7684\u8ba2\u5355\u5386\u53f2\u8bb0\u5f55\uff0c\u60a8\u53ef\u4ee5\u4ece","some":"\u51fa\u552e\u90e8\u5206\u6211\u7684\u8461\u8404\u9152\u85cf\u54c1","transaction":"\u4ea4\u6613\u6807\u7b7e"}},"book_call":"\u7acb\u5373\u6765\u7535\u54a8\u8be2","choose_details":"\u6211\u60f3\u8981...","choose_title":"\u8bf7\u9009\u62e9\u4e0e\u60a8\u7684\u76ee\u6807\u6700\u76f8\u7b26\u7684\u9009\u9879","choose-the-option":{"description":"\u6211\u60f3\u8981...","index":"0","next":"\u7cbe\u9009\u8461\u8404\u9152","prev":"/\u5728\u60a8\u6e05\u7b97\u60a8\u7684\u6295\u8d44\u4e4b\u524d","subPage":"\u9009\u9879\u9009\u62e9","title":"\u8bf7\u9009\u62e9\u4e0e\u60a8\u7684\u76ee\u6807\u6700\u76f8\u7b26\u7684\u9009\u9879"},"confirm_details":"\u901a\u5e38\uff0c\u5728\u5e02\u573a\u4e0a\u51fa\u552e\u8461\u8404\u9152\u9700\u89812-4\u5468\u7684\u65f6\u95f4\u3002","confirm_title":"\u786e\u8ba4\u60a8\u5c06\u88ab\u51fa\u552e\u7684\u8461\u8404\u9152","confirm-liquidation":{"description":"\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u6211\u4eec\u5df2\u5411\u60a8\u5173\u8054\u7684\u7535\u5b50\u90ae\u4ef6\u53d1\u9001\u4e86\u4e00\u5c01\u786e\u8ba4\u51fd\u3002\u5728\u60a8\u6253\u5f00\u7535\u5b50\u90ae\u4ef6\u7684\u786e\u8ba4\u51fd\u5e76\u70b9\u51fb\u786e\u8ba4\u4e4b\u524d\uff0c\u60a8\u7684\u6e05\u7b97\u8fc7\u7a0b\u5c1a\u672a\u5b8c\u6210\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u5783\u573e\u90ae\u4ef6\u6587\u4ef6\u5939\u3002","index":"3","next":"/","prev":"\u65e0\u6548","subPage":"\u6e05\u7b97\u786e\u8ba4","title":"\u786e\u8ba4\u6e05\u7b97"},"confirm-your-wines":{"description":"\u901a\u5e38\uff0c\u5728\u5e02\u573a\u4e0a\u51fa\u552e\u8461\u8404\u9152\u9700\u89812-4\u5468\u7684\u65f6\u95f4\u3002","index":"2","next":"\u6e05\u7b97\u786e\u8ba4","prev":"\u7cbe\u9009\u8461\u8404\u9152","subPage":"\u786e\u8ba4\u60a8\u7684\u8461\u8404\u9152","title":"\u786e\u8ba4\u60a8\u5c06\u88ab\u51fa\u552e\u7684\u8461\u8404\u9152"},"contact_support":"\u8bf7\u4e0e\u6211\u4eec\u7684\u652f\u6301\u56e2\u961f\u8054\u7cfb","corp_bonds":"\u516c\u53f8\u503a\u5238","did_not_get_email":"\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6","early_penalty":"\u63d0\u524d\u6e05\u7b97\u7f5a\u6b3e","fee_description":"\u4eab\u53d73\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f\u3002\u6211\u4eec\u5f88\u9ad8\u5174\u770b\u5230\u60a8\u80fd\u8fdb\u884c\u957f\u671f\u6295\u8d44\u3002","fee_next_button":"\u524d\u5f80\u6982\u89c8","fee_title":"\u606d\u559c\u60a8","feedback-options":{"before-you-request":{"acknowlege":"\u786e\u8ba4\u5e76\u7ee7\u7eed","back":"\u8fd4\u56de","sharpe-ratio-description":"\u590f\u666e\u6bd4\u7387\u8861\u91cf\u7684\u662f\u98ce\u9669\u8c03\u6574\u540e\u6536\u76ca\u3002\u6bd4\u7387\u8d8a\u5927\uff0c\u8868\u793a\u5728\u8003\u8651\u8d44\u4ea7\u98ce\u9669\u7684\u60c5\u51b5\u4e0b\u6536\u76ca\u5c31\u4f1a\u8d8a\u9ad8\u3002","sharpe-ratio":{"year":"\u590f\u666e\u6bd4\u7387\uff08 {{startYear}} - {{endYear}} \uff09"},"sticky-box":{"advisor":"\u6295\u8d44\u987e\u95ee","book-call":"\u7acb\u5373\u6765\u7535\u54a8\u8be2","liz":"\u4e3d\u5179\xb7\u9053\u8482\xb7\u7c73\u5207\u5c14","subtitle":"\u6b22\u8fce\u6765\u7535\u54a8\u8be2\u5373\u5c06\u63a8\u51fa\u7684\u9650\u91cf\u8461\u8404\u9152\u548c\u671f\u8d27\u3002","title":"\u672c\u6708\u53d1\u884c\u7684\u7f8e\u9152\u6536\u76ca\u4e30\u539a\uff0c\u673a\u4f1a\u96be\u5f97\uff0c\u4e0d\u53ef\u9519\u8fc7\uff01"},"title":"\u7533\u8bf7\u6295\u8d44\u6e05\u7b97\u4e4b\u524d\u987b\u4e86\u89e3\u7684\u4e8b\u9879"},"completed":{"description":"\u4ea4\u6613\u5b8c\u6210\u65f6\uff0c\u6211\u4eec\u4f1a\u901a\u77e5\u60a8","feedback":"\u6211\u4eec\u975e\u5e38\u91cd\u89c6\u60a8\u7684\u5b9d\u8d35\u610f\u89c1\uff0c\u82e5\u662f\u60a8\u80fd\u544a\u77e5\u6211\u4eec\u7533\u8bf7\u8461\u8404\u9152\u5151\u73b0\u7684\u539f\u56e0\uff0c\u6211\u4eec\u5c06\u4e0d\u80dc\u611f\u6fc0\u3002\u6211\u4eec\u4fdd\u8bc1\uff0c\u60a8\u7684\u53cd\u9988\u5c06\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u516c\u5f00\uff0c\u56e0\u6b64\u5b83\u4eec\u4e0d\u4f1a\u5bf9\u60a8\u7684\u7533\u8bf7\u4ea7\u751f\u4efb\u4f55\u7684\u5f71\u54cd\u3002","leave-feedback-placeholder":"\u60a8\u7684\u53cd\u9988\uff08\u53ef\u9009\uff09","title":"\u60a8\u7684\u8461\u8404\u9152\u5c06\u88ab\u5b89\u6392\u51fa\u552e"},"confirm-liquidation":{"contact-support":"\u8bf7\u4e0e\u6211\u4eec\u7684\u652f\u6301\u56e2\u961f\u8054\u7cfb","did-not-receive":"\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6","please":"\u8bf7","resend-email":"\u91cd\u65b0\u53d1\u9001\u7535\u5b50\u90ae\u4ef6"},"fee-congrats":{"description":"\u4eab\u53d73\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f\u3002\u6211\u4eec\u5f88\u9ad8\u5174\u770b\u5230\u60a8\u80fd\u8fdb\u884c\u957f\u671f\u6295\u8d44\u3002","next-button":"\u524d\u5f80\u6982\u89c8","title":"\u606d\u559c\u60a8"},"option1":"\u6211\u56e0\u5e02\u573a\u73af\u5883\u539f\u56e0\u8981\u6c42\u51fa\u552e","option2":"\u6211\u56e0\u4e2a\u4eba\u539f\u56e0\u8981\u6c42\u51fa\u552e","option3":"\u6211\u5bf9Vinovest\u7684\u7ecf\u9a8c\u4e0d\u592a\u6ee1\u610f","option4":"\u6211\u7684\u8d39\u7528/\u8d26\u6237\u6536\u8d39\u592a\u9ad8","option5":"\u6211\u9009\u62e9\u4e0d\u56de\u7b54","subscribe":{"label":"\u8ba2\u9605Vinovest\u6700\u65b0\u8d44\u8baf"},"support":{"email":"\u8bf7\u8bbf\u95ee","email-rest":"\u53ef\u56de\u7b54\u4efb\u4f55\u95ee\u9898\u7684\u9875\u9762","mobile-email":"\u7535\u5b50\u90ae\u4ef6","mobile-questions":"\u5982\u6709\u7591\u95ee","support":"\u652f\u6301"}},"fine_wine":"\u4e0a\u7b49\u8461\u8404\u9152","gold":"\u9ec4\u91d1","gov_bonds":"\u653f\u5e9c\u503a\u5238","hk_equitities":"\u9999\u6e2f\u80a1\u7968","irs":"\u60a8\u8fdb\u884c\u7684\u4efb\u4f55\u5151\u73b0\u90fd\u4f1a\u4e0a\u62a5\u7ed9\u7f8e\u56fd\u56fd\u5185\u7a0e\u52a1\u7f72\uff0c\u60a8\u7684\u6536\u76ca\u53ef\u80fd\u4f1a\u88ab\u5f81\u7a0e\u3002\u4f1f\u8bfa\u7ea2\u9152\u4e0d\u63d0\u4f9b\u7a0e\u52a1\u54a8\u8be2\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u5bf9\u6b64\u7a0e\u52a1\u4e8b\u5b9c\u5c1a\u6709\u7591\u95ee\uff0c\u8bf7\u5728\u7ee7\u7eed\u4e0b\u4e00\u6b65\u64cd\u4f5c\u4e4b\u524d\u5411\u60a8\u7684\u8d22\u52a1\u987e\u95ee\u6216\u7a0e\u52a1\u4e13\u5bb6\u8fdb\u884c\u54a8\u8be2\u3002","liquid_details":"\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u6211\u4eec\u5df2\u5411\u60a8\u5173\u8054\u7684\u7535\u5b50\u90ae\u4ef6\u53d1\u9001\u4e86\u4e00\u5c01\u786e\u8ba4\u51fd\u3002\u5728\u60a8\u6253\u5f00\u7535\u5b50\u90ae\u4ef6\u7684\u786e\u8ba4\u51fd\u5e76\u70b9\u51fb\u786e\u8ba4\u4e4b\u524d\uff0c\u60a8\u7684\u6e05\u7b97\u8fc7\u7a0b\u5c1a\u672a\u5b8c\u6210\u3002\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u7535\u5b50\u90ae\u4ef6\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u5783\u573e\u90ae\u4ef6\u6587\u4ef6\u5939\u3002","liquid_title":"\u786e\u8ba4\u6e05\u7b97","liquidate_info":"\u7533\u8bf7\u6295\u8d44\u6e05\u7b97\u4e4b\u524d\u987b\u4e86\u89e3\u7684\u4e8b\u9879","liz":"\u4e3d\u5179\xb7\u9053\u8482\xb7\u7c73\u5207\u5c14","nature_asset":"\u9274\u4e8e\u6b64\u7c7b\u8d44\u4ea7\u81ea\u8eab\u5c5e\u6027\uff0c\u4e00\u65e6\u60a8\u5f00\u59cb\u51fa\u552e\u8461\u8404\u9152\uff0c\u6211\u4eec\u5c31\u4f1a\u4e3a\u60a8\u5bfb\u627e\u4e70\u5bb6\u3002\u5982\u679c\u5728\u6211\u4eec\u7684AI\u7b97\u6cd5\u8fd8\u672a\u8ba4\u4e3a\u60a8\u7684\u8461\u8404\u9152\u9002\u5b9c\u51fa\u552e\u4e4b\u65f6\uff0c\u60a8\u9009\u62e9\u4e86\u51fa\u552e\uff0c\u90a3\u4e48\u60a8\u7684\u8461\u8404\u9152\u5f88\u53ef\u80fd\u8fd8\u672a\u8fbe\u5230\u6700\u4f73\u53e3\u611f\u65f6\u673a\u3002\u6211\u4eec\u65e0\u6cd5\u4fdd\u8bc1\u60a8\u6295\u8d44\u7684\u8461\u8404\u9152\u4f1a\u4fdd\u6301\u76ee\u524d\u7684\u5b9a\u4ef7\u3002\u6700\u7ec8\u51fa\u552e\u4ef7\u683c\u901a\u5e38\u4ecb\u4e8e\u6211\u4eec\u7684\u6cbd\u76d8\u4ef7\u548c\u4e70\u65b9\u7684\u51fa\u4ef7\u4e4b\u95f4\u3002","oil":"\u77f3\u6cb9","optional_feedback":"\u60a8\u7684\u53cd\u9988\uff08\u53ef\u9009\uff09","penalty":"\u5982\u679c\u60a8\u9700\u8981\u5728\u9996\u6b21\u6ce8\u8d44\u540e\u768460\u5929\u5185\u63d0\u6b3e\uff0c\u6211\u4eec\u4f1a\u6536\u53d63\uff05\u7684\u63d0\u524d\u6e05\u7b97\u670d\u52a1\u8d39\u7528\u3002\u6d3b\u52a8\u5e10\u6237\u6301\u6709\u4eba\u572860\u5929\u540e\u5219\u65e0\u9700\u652f\u4ed8\u989d\u5916\u7684\u9500\u552e\u8d39\u7528\u3002","please":"\u8bf7","resend_email":"\u91cd\u65b0\u53d1\u9001\u7535\u5b50\u90ae\u4ef6","select_details":"\u901a\u5e38\uff0c\u5728\u5e02\u573a\u4e0a\u51fa\u552e\u8461\u8404\u9152\u9700\u89812-4\u5468\u7684\u65f6\u95f4\u3002","select_title":"\u9009\u62e9\u8981\u51fa\u552e\u7684\u8461\u8404\u9152","select-wines":{"description":"\u901a\u5e38\uff0c\u5728\u5e02\u573a\u4e0a\u51fa\u552e\u8461\u8404\u9152\u9700\u89812-4\u5468\u7684\u65f6\u95f4\u3002","holdings":{"quantity":"\u6570\u91cf","sell":"\u51fa\u552e","title":"\u60a8\u7684\u8461\u8404\u9152"},"index":"1","next":"\u786e\u8ba4\u60a8\u7684\u8461\u8404\u9152","note":"\u6ce8\u610f\uff1a\u8bf7\u6c42\u5b8c\u5168\u6e05\u7b97\u4f1a\u81ea\u52a8\u53d6\u6d88\u6240\u6709\u7b49\u5f85\u7684\u8ba2\u5355\u3002\u8981\u67e5\u770b\u60a8\u7684\u8ba2\u5355\u5386\u53f2\u8bb0\u5f55\uff0c\u60a8\u53ef\u4ee5\u4ece","prev":"\u9009\u9879\u9009\u62e9","sell-wine-button":"\u51fa\u552e\u6211\u7684\u8461\u8404\u9152","subPage":"\u7cbe\u9009\u8461\u8404\u9152","title":"\u9009\u62e9\u8981\u51fa\u552e\u7684\u8461\u8404\u9152","transaction-tab":"\u4ea4\u6613\u6807\u7b7e"},"sell-options":{"all":"\u51fa\u552e\u6240\u6709\u6211\u7684\u8461\u8404\u9152\u85cf\u54c1","note":"\u6ce8\u610f\uff1a\u8bf7\u6c42\u5b8c\u5168\u6e05\u7b97\u4f1a\u81ea\u52a8\u53d6\u6d88\u6240\u6709\u7b49\u5f85\u7684\u8ba2\u5355\u3002\u8981\u67e5\u770b\u60a8\u7684\u8ba2\u5355\u5386\u53f2\u8bb0\u5f55\uff0c\u60a8\u53ef\u4ee5\u4ece","some":"\u51fa\u552e\u90e8\u5206\u6211\u7684\u8461\u8404\u9152\u85cf\u54c1","transactionTab":"\u4ea4\u6613\u6807\u7b7e"},"sharpe_ratio_description":"\u590f\u666e\u6bd4\u7387\u8861\u91cf\u7684\u662f\u98ce\u9669\u8c03\u6574\u540e\u6536\u76ca\u3002\u6bd4\u7387\u8d8a\u5927\uff0c\u8868\u793a\u5728\u8003\u8651\u8d44\u4ea7\u98ce\u9669\u7684\u60c5\u51b5\u4e0b\u6536\u76ca\u5c31\u4f1a\u8d8a\u9ad8\u3002","sharpe_ratio_year":"\u590f\u666e\u6bd4\u7387\uff08 %1$s _ %1$s \uff09","sticky_box_subtitle":"\u6b22\u8fce\u6765\u7535\u54a8\u8be2\u5373\u5c06\u63a8\u51fa\u7684\u9650\u91cf\u8461\u8404\u9152\u548c\u671f\u8d27\u3002","sticky_box_title":"\u672c\u6708\u53d1\u884c\u7684\u7f8e\u9152\u6536\u76ca\u4e30\u539a\uff0c\u673a\u4f1a\u96be\u5f97\uff0c\u4e0d\u53ef\u9519\u8fc7\uff01","subscribe":"\u8ba2\u9605Vinovest\u6700\u65b0\u8d44\u8baf","taxable":"\u5151\u73b0\u53ef\u80fd\u9700\u8981\u5f81\u7a0e","UK Equitites":"\u82f1\u56fd\u80a1\u7968","us_equities":"\u7f8e\u56fd\u80a1\u7968","vinovest_algo":"\u4f1f\u8bfa\u7ea2\u9152\u7b97\u6cd5\u548c\u6e05\u7b97","wine_longterm":"\u8461\u8404\u9152\u6295\u8d44\u662f\u4e00\u9879\u957f\u671f\u6295\u8d44","wine_longterm_explain":"\u4f18\u8d28\u8461\u8404\u9152\u662f\u4e00\u79cd\u9002\u5408\u957f\u671f\u6295\u8d44\u7684\u8d44\u4ea7\u7c7b\u522b\uff0c\u5b83\u4f9d\u636e\u4f9b\u5e94\u91cf\u7684\u51cf\u5c11\u548c\u4ea7\u54c1\u8d28\u91cf\u7684\u63d0\u9ad8\u6765\u63a8\u52a8\u5b9a\u4ef7\u3002\u8461\u8404\u9152\u8d8a\u65e9\u51fa\u552e\uff0c\u60a8\u6240\u80fd\u83b7\u5f97\u7684\u6536\u76ca\u53ef\u80fd\u8d8a\u53d7\u9650\uff0c\u4e14\u8fd8\u4f1a\u8ba9\u6295\u8d44\u8005\u9762\u4e34\u989d\u5916\u7684\u7f5a\u6b3e\u548c\u5f81\u7a0e\u3002\u540c\u4f18\u8d28\u8461\u8404\u9152\u4e00\u6837\uff0c\u8461\u8404\u9152\u6295\u8d44\u4e5f\u9700\u8981\u65f6\u95f4\u915d\u917f\u53d1\u9175\uff0c\u8d8a\u6709\u8010\u5fc3\uff0c\u6536\u76ca\u624d\u80fd\u8d8a\u9ad8\uff01","wine_market_returns":"\u4f18\u8d28\u8461\u8404\u9152\u4e0d\u4ec5\u53ef\u4ee5\u5e26\u6765\u9ad8\u4e8e\u5e02\u573a\u7684\u6536\u76ca\uff0c\u8fd9\u7c7b\u8d44\u4ea7\u8fd8\u53ef\u4ee5\u5e26\u6765\u98ce\u9669\u8c03\u6574\u540e\u7684\u5f3a\u52b2\u6536\u76ca\u3002\u5f53\u6295\u8d44\u53e6\u7c7b\u8d44\u4ea7\u65f6\uff0c\u8fd9\u4e00\u70b9\u5c24\u4e3a\u91cd\u8981\uff0c\u56e0\u4e3a\u53e6\u7c7b\u8d44\u4ea7\u901a\u5e38\u88ab\u89c6\u4e3a\u62b5\u6297\u5176\u4ed6\u6295\u8d44\u8d44\u4ea7\u6ce2\u52a8\u7684\u4e00\u79cd\u65b9\u5f0f\u3002","wines_scheduled":"\u60a8\u7684\u8461\u8404\u9152\u5c06\u88ab\u5b89\u6392\u51fa\u552e"}')},353:function(e){e.exports=JSON.parse('{"depositCta":"\u5373\u523b\u6ce8\u8d44\u4ee5\u7acb\u5373\u83b7\u5f97\uff01","google-signin":{"button-label":"\u7528\u8c37\u6b4c","login":"\u767b\u5f55","signup":"\u6ce8\u518c"},"okta-check":{"button":"\u524d\u5f80\u9996\u9875","message":"\u8bf7\u67e5\u770b\u6536\u4ef6\u7bb1\u4e2d\u7684\u6536\u5230\u7684\u94fe\u63a5\u5e76\u91cd\u8bbe\u5bc6\u7801\u3002\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u6b64\u94fe\u63a5\u5c06\u572860\u5206\u949f\u540e\u5931\u6548\u3002\u60a8\u7684\u7535\u5b50\u90ae\u7bb1\u9700\u8981\u51e0\u5206\u949f\u63a5\u6536\u90ae\u4ef6\uff0c\u8bf7\u7a0d\u540e\u3002","title":"\u8bf7\u68c0\u67e5\u60a8\u7684\u6536\u4ef6\u7bb1"},"okta-login":{"button-create":"\u521b\u5efa\u65b0\u5e10\u6237","button-forgot":"\u5fd8\u4e86\u5bc6\u7801\uff1f","button-login":"\u767b\u5f55","empty-email":"\u8bf7\u8f93\u5165\u7535\u5b50\u90ae\u4ef6\u5730\u5740","fail-login":"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u548c\u5bc6\u7801\u3002","invalid-email":"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff01","invalid-password":"\u8bf7\u8f93\u5165\u5bc6\u7801\u3002","or":"\u6216\u8005"},"okta-register":{"button-account":"\u5df2\u6709\u8d26\u6237\uff1f","button-email":"\u7528\u7535\u5b50\u90ae\u4ef6\u6ce8\u518c","button-login":"\u767b\u5f55","disclaimer":"\u6ce8\u518c\u4f1f\u8bfa\u7ea2\u9152\u5e10\u6237\u5373\u8868\u793a\u60a8\u540c\u610f","disclaimer-cont":"\u548c","email":"\u7535\u5b50\u90ae\u4ef6","empty-email":"\u8bf7\u8f93\u5165\u7535\u5b50\u90ae\u4ef6\u5730\u5740","error-name":"\u8bf7\u8f93\u5165\u60a8\u7684\u5168\u540d","header-email":"\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u5b50\u90ae\u7bb1","header-invest":"\u8461\u8404\u9152\u6295\u8d44\uff0c\u5373\u523b\u542f\u822a\uff01","header-name":"\u8bf7\u8f93\u5165\u60a8\u7684\u5168\u540d","header-password":"\u521b\u5efa\u5bc6\u7801","international":"\u9002\u7528\u4e8e\u6240\u6709\u56fd\u9645\u5ba2\u6237","invalid-email":"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff01","newsletter":"\u60a8\u4e5f\u540c\u610f\u5b9a\u671f\u63a5\u6536\u6211\u4eec\u7684\u6700\u65b0\u8d44\u8baf","password":"\u5bc6\u7801","password-char":"8\u4e2a\u5b57\u7b26","password-cont":"\u548c","password-min":"\u81f3\u5c11","password-num":"\u4e00\u4e2a\u6570\u5b57","password-special":"\u4e00\u4e2a\u7279\u6b8a\u5b57\u7b26","password-upper":"\u4e00\u4e2a\u5927\u5199\u5b57\u6bcd","placeholder-first":"\u540d","placeholder-last":"\u59d3","privacy":"\u9690\u79c1\u653f\u7b56","show-password":"\u663e\u793a\u5bc6\u7801","submit":"\u7ee7\u7eed","subscribe":"\u6b22\u8fce\u8ba2\u9605\u6211\u4eec\u7684\u6700\u65b0\u8d44\u8baf\u3002","terms":"\u670d\u52a1\u6761\u6b3e"},"okta-reset":{"button-back":"\u8fd4\u56de\u767b\u5f55\u9875\u9762","button-submit":"\u53d1\u9001\u6307\u4ee4","email-empty":"\u8bf7\u8f93\u5165\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002","email-invalid":"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff01","email-placeholder":"\u7535\u5b50\u90ae\u4ef6","message":"\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\uff0c\u6211\u4eec\u5c06\u5411\u60a8\u53d1\u9001\u5982\u4f55\u91cd\u8bbe\u5bc6\u7801\u7684\u8bf4\u660e\u3002","title":"\u91cd\u7f6e\u5bc6\u7801"},"referral-confirmation":{"depositCta":"\u5373\u523b\u6ce8\u8d44\u4ee5\u7acb\u5373\u83b7\u5f97\uff01","welcomeToVinovest":"\u6b22\u8fce\u6765\u5230Vinovest\u3002\u611f\u8c22\u60a8\u670b\u53cb\u7684\u5927\u529b\u652f\u6301\uff0c\u60a8\u5df2\u83b7\u5f97Vinovest\u4e09\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f\uff01","woohooTitle":"\u606d\u559c\u60a8\uff01\u60a8\u67093\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f"},"uppercase":"{{text, uppercase}}","welcomeToVinovest":"\u6b22\u8fce\u6765\u5230Vinovest\u3002\u611f\u8c22\u60a8\u670b\u53cb\u7684\u5927\u529b\u652f\u6301\uff0c\u60a8\u5df2\u83b7\u5f97Vinovest\u4e09\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f\uff01","woohooTitle":"\u606d\u559c\u60a8\uff01\u60a8\u67093\u4e2a\u6708\u7684\u514d\u670d\u52a1\u8d39\u6295\u8d44\u671f"}')},354:function(e){e.exports=JSON.parse('{"backLink":"\u8fd4\u56de\u9996\u9875","subtitle":"\u9875\u9762\u7f3a\u5931\u6216\u94fe\u63a5\u9519\u8bef\u3002","title":"\u627e\u4e0d\u5230\u8be5\u9875\u9762"}')},355:function(e){e.exports=JSON.parse('{"account-value":{"title":"\u8d26\u6237\u603b\u503c","today":"\u4eca\u5929\u7684\u3002","tooltip":"\u6b64\u56fe\u8868\u4f1a\u663e\u793a\u60a8\u7684\u8d26\u6237\u603b\u503c\u3002\u8fd9\u91cc\u80fd\u770b\u5230\u6240\u6709\u7684\u4fdd\u8bc1\u91d1\u548c\u9884\u8ba1\u7684\u8461\u8404\u9152\u4ef7\u503c\u3002"},"all":"\u5168\u90e8","american":"\u7f8e\u56fd","auto-invest":{"description":"\u81ea\u52a8\u6295\u8d44\u53ef\u4ee5\u8ba9\u60a8\u6309\u8d2d\u5165\u8bc1\u5238\u7684\u7f8e\u5143\u4ef7\u683c\u5e73\u5747\u8ba1\u7b97\u6cd5\u8f7b\u677e\u5730\u8fdb\u884c\u8461\u8404\u9152\u7684\u957f\u671f\u6295\u8d44\u3002\u60a8\u53ea\u9700\u9009\u62e9\u6295\u8d44\u91d1\u989d\u548c\u60f3\u8981\u7684\u6295\u8d44\u5468\u671f\uff08\u6bcf\u5468\uff0c\u6bcf\u6708\u7b49\uff09\u5373\u53ef\u5f00\u59cb\u3002","description_uppercase":"$ t\uff08auto-invest.description\uff0c\u5927\u5199\uff09","enroll-button":"\u7acb\u5373\u8282\u7701{{percentage}} \uff05","title":"\u8bbe\u7f6e\u81ea\u52a8\u6295\u8d44\u53ef\u4ee5\u8ba9\u60a8\u8282\u7701{{percentage}}"},"book-call":{"book-button":"\u7acb\u5373\u6765\u7535\u54a8\u8be2","subtitle":"\u4e86\u89e3\u6709\u5173\u5efa\u7acb\u8461\u8404\u9152\u7ec4\u5408\u6295\u8d44\u4ee5\u62b5\u5fa1\u5bf9\u6297\u5e02\u573a\u73af\u5883\u7684\u4e0d\u786e\u5b9a\u6027","title":"\u6b22\u8fce\u6765\u7535\u9884\u7ea6\u6211\u4eec\u7684\u8461\u8404\u9152\u4e13\u5bb6"},"bordeaux":"\u6ce2\u5c14\u591a\u8461\u8404\u9152","burgundy":"\u52c3\u826e\u7b2c\u8461\u8404\u9152","california":"\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde","champagne":"\u9999\u69df","deposit-banner-list":{"pending-message":"\u60a8\u6709\u4e00\u7b14\u8d44\u91d1\u6b63\u5728\u5904\u7406\u4e2d\u3002\u60a8\u7684\u94f6\u884c\u901a\u5e38\u4f1a\u57282-4\u4e2a\u5de5\u4f5c\u65e5\u5185\u786e\u8ba4\u60a8\u7684\u8d44\u91d1\uff0c\u5e76\u5c06\u5176\u8f6c\u5165\u60a8\u7684\u4f1f\u8bfa\u7ea2\u9152\u5e10\u6237\u3002\u8bf7\u8bbf\u95ee","pending-message-cont":"\u70b9\u51fb\u53ef\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f","pending-message-mobile":"\u60a8\u7684\u8d44\u91d1\u6b63\u5728\u5904\u7406\u4e2d\u3002\u8bf7\u8bbf\u95ee","pending-message-mobile-cont":"\u70b9\u51fb\u53ef\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f","sourced-wine-message":"\u8d44\u91d1\u5df2\u5230\u8d26\uff01\u6211\u4eec\u7684AI\u7b97\u6cd5\u6b63\u5728\u4ece5000\u4e2a\u4e0d\u540c\u7684\u4f9b\u5e94\u5546\u4e2d\u4e3a\u60a8\u641c\u5bfb\u62e5\u6709\u6700\u4f18\u4ef7\u683c\u7684\u8461\u8404\u9152\u3002\u9274\u4e8e\u6b64\u7c7b\u8d44\u4ea7\u7684\u81ea\u8eab\u5c5e\u6027\uff0c\u8be5\u8fc7\u7a0b\u6700\u591a\u53ef\u80fd\u9700\u89813\u5468\u7684\u65f6\u95f4\u3002\u8bf7\u8bbf\u95ee","sourced-wine-message-cont":"\u70b9\u51fb\u53ef\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f","sourced-wine-message-mobile":"\u8d44\u91d1\u5df2\u5230\u8d26\uff01\u8bf7\u8bbf\u95ee","transaction-link":"\u4ea4\u6613"},"diversification":{"add-funds-2":"\u5230\u60a8\u7684\u8d26\u6237","add-funds-link":"\u589e\u52a0\u8d44\u91d1","addFunds":"\u968f\u7740\u65f6\u95f4\u9010\u6e10\u591a\u5143\u5316\u60a8\u7684\u6295\u8d44","description-bar":"\u4e3a\u60a8\u4e70\u8fdb\u8461\u8404\u9152\u4e4b\u540e\uff0c\u60a8\u4f1a\u770b\u5230\u6309\u5730\u533a\u5212\u5206\u7684\u8461\u8404\u9152\u7ec6\u5206\u4fe1\u606f","title":"\u591a\u6837\u5316"},"historical-returns":{"returns":"\u5386\u53f2\u6536\u76ca"},"italian":"\u610f\u5927\u5229\u7684","personal-snapshot":{"account-level":"\u8d26\u6237\u7ea7\u522b","friend":"\u670b\u53cb","investing":"\u6b63\u5728\u6295\u8d44","investment-plan":"\u6295\u8d44\u65b9\u6848","net-returns":"\u8fc4\u4eca\u4e3a\u6b62\u7684\u51c0\u6536\u76ca","not-investing":"\u5c1a\u672a\u8bbe\u5b9a","snapshot-header":"\u8fd9\u662f\u60a8\u7684\u8d26\u6237\u5feb\u7167","welcome":"\u6b22\u8fce","wine_collection":"\u60a8\u7684\u8461\u8404\u9152\u6536\u85cf"},"piedmont":"\u76ae\u57c3\u8499\u7279","quality-value":{"authenticity-header":"\u771f\u5b9e\u6027","description":"\u6211\u4eec\u4e0e\u917f\u9152\u5382\u4ee5\u53ca\u503c\u5f97\u4fe1\u8d56\u7684\u884c\u4e1a\u5408\u4f5c\u4f19\u4f34\u76f4\u63a5\u5408\u4f5c\uff0c\u4ee5\u6b64\u786e\u4fdd\u6211\u4eec\u6240\u8d2d\u4e70\u7684\u6bcf\u4e00\u74f6\u8461\u8404\u90fd\u8d27\u771f\u4ef7\u503c\u4e14\u6709\u4ea7\u5730\u53ef\u5faa\u3002","insurance-description":"Vinovest\u6709\u5168\u9762\u7684\u4fdd\u9669\uff0c\u4ee5\u4fbf\u5728\u53d1\u751f\u7834\u635f\u6216\u88ab\u76d7\u4e8b\u6545\u4e4b\u65f6\u80fd\u4ee5\u5e02\u573a\u4ef7\u503c\u8fdb\u884c\u5168\u90e8\u66ff\u6362\u3002","insurance-header":"\u5168\u989d\u4fdd\u9669","stored-description":"\u6211\u4eec\u6700\u5148\u8fdb\u7684\u5b58\u50a8\u8bbe\u65bd\u53ef\u786e\u4fdd\u60a8\u7684\u8461\u8404\u9152\u65f6\u523b\u5904\u4e8e\u5b8c\u7f8e\u7684\u9648\u917f\u72b6\u6001\u3002","stored-header":"\u5b8c\u7f8e\u5b58\u50a8"},"recommended-banner":{"fund":"\u5411\u60a8\u7684\u5e10\u6237\u6ce8\u8d44","investing":"\u6b63\u5728\u6295\u8d44","investment":"\u6295\u8d44","plan":"\u65b9\u6848\u662f","recommend":"\u60a8\u7684\u63a8\u8350"},"referal":{"message":"\u5f53\u60a8\u4e0e\u670b\u53cb\u5206\u4eab\u60a8\u7684\u4e13\u5c5e\u94fe\u63a5\u65f6\uff0c\u60a8\u548c\u60a8\u7684\u670b\u53cb\u90fd\u53ef\u4ee5\u53c2\u52a0\u62bd\u5956\u6d3b\u52a8\uff0c\u800c\u4e14\u60a8\u6709\u673a\u4f1a\u4e3a\u60a8\u7684\u8461\u8404\u9152\u6295\u8d44\u8d62\u5f97$1000\u7684Vinovest\u4fe1\u7528\u989d\u5ea6\u3002\u60a8\u5206\u4eab\u6210\u529f\u7684\u6b21\u6570\u8d8a\u591a\uff0c\u83b7\u80dc\u7684\u6982\u7387\u5c31\u8d8a\u5927\u3002\u5206\u4eab\u6210\u529f\u6307\u7684\u662f\u60a8\u7684\u670b\u53cb\u70b9\u51fb\u60a8\u5206\u4eab\u7684\u94fe\u63a5\u5e76\u4e3a\u4ed6\u4eec\u7684\u8d26\u6237\u6ce8\u8d44\u3002\u6211\u4eec\u4f1a\u968f\u673a\u62bd\u53d6\u4f18\u80dc\u8005\u5e76\u4e8e2020\u5e7411\u670820\u65e5\u516c\u5e03\u3002","sharelink":"\u83b7\u53d6\u5206\u4eab\u94fe\u63a5","win":"\u8d62\u53d6{{currencySymbol}} {{value}}"},"referral-module":{"earn":"\u8d62\u53d6\u5956\u52b1\u3002","earn-description":"\u60a8\u6bcf\u6210\u529f\u9080\u8bf71\u4f4d\u670b\u53cb\u52a0\u5165Vinovest\uff0c\u60a8\u548c\u60a8\u670b\u53cb\u5c06\u5373\u523b\u83b7\u5f9790\u5929\u7684\u65e0\u670d\u52a1\u8d39\u6295\u8d44\u671f\u3002","invite":"\u9080\u8bf7\u3002","learn":"\u4e86\u89e3\u66f4\u591a"},"rest":"\u5176\u4ed6\u56fd\u5bb6/\u5730\u533a","rest_of_world":"\u4e16\u754c\u5176\u4ed6\u5730\u533a","returns-box":{"all":"\u6240\u6709\u65f6\u95f4","appreciation":"\u9274\u8d4f","fees":"\u8d39\u7528","title":"\u6536\u76ca","total":"\u5171\u8ba1","ytd":"2021\u5e74\u8fc4\u4eca","ytd_upper":"$ t\uff08returns-box.ytd\uff0c\u5927\u5199\uff09"},"rewards-box":{"cycles":"\u514d\u670d\u52a1\u8d39\u7684\u4ed8\u6b3e\u5468\u671f","cycles-message":"\u60a8\u4e0a\u4e2a\u6708\u7684\u5956\u52b1\u662f","cycles-period":"\u6708\u4efd","fees-description":"\u9080\u8bf7\u5df2\u63a5\u53d7","fees-title":"\u8282\u7701\u7684\u7ba1\u7406\u8d39","link":"\u590d\u5236\u94fe\u63a5","link-mobile":"\u590d\u5236","snapshot-description":"\u5f53\u60a8\u7684\u670b\u53cb\u901a\u8fc7\u60a8\u7684\u9080\u8bf7\u94fe\u63a5\u4e3a\u81ea\u5df1\u7684\u4f1f\u8bfa\u7ea2\u9152\u5e10\u6237\u6ce8\u8d44\u65f6\uff0c\u60a8\u548c\u60a8\u7684\u670b\u53cb\u4f1a\u83b7\u5f973\u4e2a\u6708\u514d\u8d39\u7684\u8461\u8404\u9152\u5b58\u50a8\u548c\u7ba1\u7406\u670d\u52a1\u3002","title":"\u5956\u52b1"},"rhone":"\u7f57\u7eb3\u6cb3","south_australia":"\u5357\u6fb3\u5927\u5229\u4e9a","whiskey-banner":{"early-access":"\u62a2\u5148\u4f53\u9a8c\uff01","learn-more":"\u4e86\u89e3\u66f4\u591a","whiskey-investing":"\u5a01\u58eb\u5fcc\u6295\u8d44"},"wine-expert":"\u8461\u8404\u9152\u4e13\u5bb6"}')},356:function(e){e.exports=JSON.parse('{"add-funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","buttons":{"arrow-first":"\u52a0\u8f7d","arrow-second":"\u66f4\u591a"},"cellar-list":{"add-funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","bottle":"\u6bcf\u74f6","case":"\u6bcf\u7bb1","futures":"\uff08\u8461\u8404\u9152\u671f\u8d27\uff09","power":"\u8d2d\u4e70\u529b"},"condition":{"authentic":"\u771f\u6b63\u7684","coverage":"\u5168\u989d\u4fdd\u9669","excellent":"\u51fa\u8272\u7684","insurance":"\u4fdd\u9669","title":"\u6761\u4ef6","verfication":"\u9a8c\u8bc1"},"description":{"read":"\u7ee7\u7eed\u9605\u8bfb"},"graphical-price-history":{"title":"\u6bcf\u7bb1\u4f30\u4ef7","tooltip":"\u9884\u4f30\u4ef7\u683c\u662f\u8fd1\u671f\u5728\u5e02\u573a\u4e0a\u8d2d\u4e70\u8be5\u8461\u8404\u9152\u7684\u6700\u597d\u5747\u4ef7\u3002"},"hero":{"futures":"\uff08\u8461\u8404\u9152\u671f\u8d27\uff09","learn":"\u4e86\u89e3\u66f4\u591a","pending-learn":"\u4e86\u89e3\u66f4\u591a","title":"\u4e3b\u63a8\uff1a\u6765\u81ea\u60a8\u81ea\u5df1\u7684\u9152\u7a96"},"wine-bottles-totals":{"bottle":"\u74f6","bottles":"\u74f6","case":"\u7bb1","of":"\u7684"},"wine-cellar-model":{"average-hold":"\u5e73\u5747\u6301\u6709\u65f6\u95f4","contact":"\u60f3\u53c2\u89c2\u60a8\u7684\u8461\u8404\u9152\u5417\uff1f\u6211\u4eec\u5341\u5206\u6b22\u8fce\u60a8\u80fd\u5230\u8bbf\u6211\u4eec\u7684\u4ed3\u50a8\u8bbe\u65bd\u5e76\u4e50\u610f\u505a\u597d\u76f8\u5e94\u7684\u5b89\u6392\u3002\u8bf7","contact-contd":"\u4ee5\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002","contact-link":"\u8054\u7cfb\u6211\u4eec","cost":"\u5e73\u5747\u6210\u672c\u57fa\u51c6","percentage-portfolio":"%\u7684\u6295\u8d44","position":"\u60a8\u7684\u5934\u5bf8","position-total":"\u603b\u5934\u5bf8","quantity":"\u6570\u91cf","storage":"\u5b58\u50a8\u5730\u70b9"},"wine-cellar":{"buttons":{"load":"\u52a0\u8f7d\u66f4\u591a"},"cellar-view-toggle":{"grid":"\u7f51\u683c","List":"\u5217\u8868","list":"\u5217\u8868"},"empty-cellar":{"add-funds":"\u589e\u52a0\u6295\u8d44\u91d1\u989d","empty":"\u5f00\u59cb\u7b51\u9020\u60a8\u81ea\u5df1\u7684\u9152\u7a96\uff01","funded":"\u5f53\u6211\u4eec\u5728\u5e2e\u60a8\u5bfb\u627e\u6536\u76ca\u826f\u597d\u7684\u4ea4\u6613\u65f6\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85"},"list-view-titles":{"avg-cost":"\u5e73\u5747\u6210\u672c","basis":"\u57fa\u51c6","position":"\u5934\u5bf8","quantity":"\u6570\u91cf","tooltip-cost-basis":"\u8fd9\u662f\u6bcf\u74f6\u7684\u5e73\u5747\u8d2d\u4e70\u4ef7\u683c\u3002","tooltip-position":"\u5934\u5bf8\u603b\u989d\u662f\uff0c\u6240\u62e5\u6709\u8461\u8404\u9152\u9884\u4f30\u4ef7\u503c\u6263\u9664\u6389\u670d\u52a1\u8d39\u7528\u4e4b\u540e\u518d\u52a0\u4e0a\u672a\u5b8c\u6210\u7684\u8ba2\u5355\u91d1\u989d","tooltip-quantity":"\u6570\u91cf\u6307\u7684\u662f\u60a8\u6240\u62e5\u6709\u7684\u8461\u8404\u9152\u74f6\u6216\u8461\u8404\u9152\u7bb1\u7684\u6570\u91cf\u3002\u8461\u8404\u9152\u7bb1\u7684\u89c4\u683c\u67093\u74f6\u30016\u74f6\u300112\u74f6\uff0c\u800c\u8461\u8404\u9152\u7684\u4ef7\u683c\u5219\u6839\u636e\u8461\u8404\u9152\u7bb1\u7684\u89c4\u683c\u4e0d\u540c\u800c\u53d1\u751f\u53d8\u5316\u3002","total":"\u603b\u7684","wine":"\u8461\u8404\u9152"},"title":"\u60a8\u7684\u9152\u7a96","totals":{"basis":"\u57fa\u51c6","bottles":"\u74f6","cell_total":"\u5408\u8ba1","cost":"\u6210\u672c","position":"\u5934\u5bf8","quantity_title":"\u6570\u91cf","tooltip-position":"\u5934\u5bf8\u603b\u989d\u662f\uff0c\u6240\u62e5\u6709\u8461\u8404\u9152\u9884\u4f30\u4ef7\u503c\u6263\u9664\u6389\u670d\u52a1\u8d39\u7528\u4e4b\u540e\u518d\u52a0\u4e0a\u672a\u5b8c\u6210\u7684\u8ba2\u5355\u91d1\u989d","tooltip-quantity":"\u6570\u91cf\u6307\u7684\u662f\u60a8\u6240\u62e5\u6709\u7684\u8461\u8404\u9152\u74f6\u6216\u8461\u8404\u9152\u7bb1\u7684\u6570\u91cf\u3002\u8461\u8404\u9152\u7bb1\u7684\u89c4\u683c\u67093\u74f6\u30016\u74f6\u300112\u74f6\uff0c\u800c\u8461\u8404\u9152\u7684\u4ef7\u683c\u5219\u6839\u636e\u8461\u8404\u9152\u7bb1\u7684\u89c4\u683c\u4e0d\u540c\u800c\u53d1\u751f\u53d8\u5316\u3002","tooltip-total-cost":"\u8fd9\u662f\u60a8\u6240\u4e70\u8fdb\u7684\u8461\u8404\u9152\u7684\u603b\u8d39\u7528\u3002","total":"\u5168\u90e8\u7684","total_title":"\u603b\u7684"}},"wine-maker-notes":{"title":"\u917f\u9152\u5e08\u968f\u7b14"}}')},357:function(e){e.exports=JSON.parse('{"button_cancel":"\u53d6\u6d88","button_save":"\u4fdd\u5b58","buttons":{"continue":"\u7ee7\u7eed","next":"\u4e0b\u4e00\u9879"},"error_post":"\u6682\u65f6\u65e0\u6cd5\u66f4\u65b0\u60a8\u7684\u4fe1\u606f\u3002","plans":{"aggressive_investing":"\u8fdb\u53d6\u578b\u6295\u8d44","aggressive":["\u6b63\u5728\u5bfb\u627e\u4f18\u8d28\u8461\u8404\u9152\u7ec4\u5408\u6295\u8d44\uff0c\u5e76\u5c06\u76ee\u6807\u671d\u9ad8\u589e\u957f\u7684\u8461\u8404\u9152\u7c7b\u522b\u503e\u659c","\u6709\u4e00\u4e2a\u4e2d\u957f\u671f\u7684\u65f6\u95f4\u8868","\u5df2\u6709\u6295\u8d44\u5176\u4ed6\u66ff\u4ee3\u8d44\u4ea7\u7c7b\u522b\u7684\u7ecf\u9a8c"],"balanced_investing":"\u5e73\u8861\u6295\u8d44","balanced":["\u6b63\u5728\u5bfb\u627e\u591a\u5143\u5316\u7a0b\u5ea6\u6700\u9ad8\u7684\u8461\u8404\u9152\u4f73\u917f\u7ec4\u5408","\u6709\u4e00\u4e2a\u4e2d\u957f\u671f\u7684\u65f6\u95f4\u8868","\u53ef\u80fd\u5bf9\u5728\u80a1\u5e02\u4ee5\u5916\u7684\u5730\u65b9\u6295\u8d44\u66f4\u964c\u751f"],"conservative_investing":"\u4fdd\u5b88\u6295\u8d44","conservative":["\u6b63\u5728\u5bfb\u627e\u4f18\u8d28\u8461\u8404\u9152\u7ec4\u5408\u5e76\u8fdb\u884c\u4f18\u5316\u4ee5\u5b9e\u73b0\u4e0b\u884c\u4fdd\u62a4","\u6709\u4e00\u4e2a\u957f\u671f\u7684\u65f6\u95f4\u8868","\u60f3\u8981\u62e5\u6709\u5168\u7403\u7ecf\u8fc7\u5386\u53f2\u9a8c\u8bc1\u7684\u591a\u5143\u5316\u8461\u8404\u9152\u7ec4\u5408"],"your-portfolio":{"great":"\u771f\u662f\u592a\u597d\u4e86\uff0c\u82e5\u60a8...","label":"\u8fd9\u662f\u60a8\u81ea\u5b9a\u4e49\u7684\u65b9\u6848","next-button":"\u4e0b\u4e00\u9879"}},"quiz":{"options":{"question-options":[{"name":"investingStyle","options":["\u4fdd\u5b88\u578b","\u7a33\u5065\u578b","\u8fdb\u53d6\u578b"],"text":"\u60a8\u5982\u4f55\u5f62\u5bb9\u81ea\u5df1\u7684\u6295\u8d44\u98ce\u683c\uff1f"},{"multiple":"1","name":"goalsWithVinovest","options":["\u83b7\u5f97\u6bd4\u6211\u5176\u4ed6\u7684\u6295\u8d44\u66f4\u9ad8\u7684\u98ce\u9669\u8c03\u6574\u540e\u6536\u76ca","\u5229\u7528\u5176\u4ed6\u8d44\u4ea7\u7c7b\u522b\u8fdb\u884c\u591a\u5143\u5316\u6295\u8d44","\u6295\u8d44\u6211\u70ed\u7231\u7684\u4e8b\u7269"],"text":"\u60a8\u52a0\u5165Vinovest\u7684\u4e3b\u8981\u52a8\u529b\u662f\u4ec0\u4e48\uff1f"},{"name":"anticipatedCashAccess","options":["\u4e0d\u52303\u5e74","3\u81f37\u5e74","7\u5e74\u4ee5\u4e0a"],"text":"\u60a8\u9884\u8ba1\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u5151\u73b0\u60a8\u4e70\u8fdb\u7684\u8461\u8404\u9152\uff1f\\\\n"}],"question1":["\u4fdd\u5b88\u7684","\u7f13\u548c","\u6311\u8845\u7684"],"question2":["\u83b7\u5f97\u6bd4\u6211\u5176\u4ed6\u7684\u6295\u8d44\u66f4\u9ad8\u7684\u98ce\u9669\u8c03\u6574\u540e\u6536\u76ca","\u5229\u7528\u53e6\u7c7b\u8d44\u4ea7\u7c7b\u522b\u8fdb\u884c\u591a\u5143\u5316\u6295\u8d44","\u6295\u8d44\u6211\u70ed\u7231\u7684\u4e8b\u7269"],"question3":["\u4e0d\u52303\u5e74","3\u81f37\u5e74","7\u5e74\u4ee5\u4e0a"]}},"your_portfolio":{"plan_subtitle":"\u6211\u4eec\u5c06\u771f\u5fc3\u611f\u8c22\uff0c\u82e5\u60a8...","plan_title":"\u8fd9\u662f\u60a8\u7684\u81ea\u5b9a\u4e49\u65b9\u6848"}}')},358:function(e){e.exports=JSON.parse('{"buttons":{"fee_free":"\u514d\u670d\u52a1\u8d39\u6295\u8d44\uff0c\u5c31\u73b0\u5728\uff01","wine_certificate":"\u8461\u8404\u9152\u8bc1\u4e66"},"details":{"early_withdrawal":"\u63d0\u524d\u9000\u6b3e","management":"\u7ba1\u7406"},"items":{"adjust":"\u8c03\u6574","buy":"\u8d2d\u4e70","completed":"\u5b8c\u5168\u7684","deposit":"\u4fdd\u8bc1\u91d1","fee":"\u8d39\u7528","fee-credit":"\u8d39\u7528\u62b5\u514d","free":"\u514d\u8d39","funds":"\u8d44\u91d1","in-progress":"\u8fdb\u884c\u4e2d","monthly":"\u6bcf\u6708","pending":"\u4fdd\u8bc1\u91d1","purchase":"\u8d2d\u4e70","sold":"\u51fa\u552e","sourcing":"\u91c7\u8d2d\u8461\u8404\u9152","wine":"\u8461\u8404\u9152","withdrawn":"\u5df2\u64a4\u9500"},"labels":{"bottles":"\u74f6","case_size":"1\u4f8b","date":"\u65e5\u671f","ml":"ML","price_per_bottle":"\u6bcf\u74f6\u4ef7\u683c","quantity":"\u6570\u91cf","size":"\u5c3a\u5bf8","vintage":"\u5e74\u4efd"},"messages":{"empty":"\u60a8\u5b8c\u6210\u7684\u4ea4\u6613\u4f1a\u5728\u6b64\u663e\u793a\u3002","empty_transaction":"\u5c1a\u672a\u6709\u5f85\u5904\u7406\u7684\u4ea4\u6613","failed":"\u4ea4\u6613\u5931\u8d25\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002","no_match":"\u6682\u65e0\u5339\u914d\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002","pending":"\u7b49\u5f85\u4e2d"},"section":{"empty":"\u60a8\u5c1a\u672a\u6709\u4efb\u4f55\u4ea4\u6613","fund":"\u5411\u60a8\u7684\u8d26\u6237\u6ce8\u8d44"},"title":"\u4ea4\u6613\u8bb0\u5f55","transactions-header":{"all_time":"\u6240\u6709\u65f6\u95f4","all_transactions":"\u6240\u6709\u4ea4\u6613","buy":"\u8d2d\u4e70","current_year":"\u4eca\u5e74","deposit":"\u4fdd\u8bc1\u91d1","fee":"\u8d39\u7528","last_90":"\u6700\u8fd190\u5929","last_month":"\u4e0a\u4e2a\u6708","month":"\u8fd9\u4e2a\u6708","previous_year":"\u53bb\u5e74","sell":"\u51fa\u552e","withdraw":"\u63d0\u53d6"},"transactions-list":{"amount":"\u6570\u989d","date":"\u65e5\u671f","description":"\u63cf\u8ff0","failed":"\u5931\u8d25","pending":"\u7b49\u5f85\u4e2d","type":"\u7c7b\u578b"},"wine-details":{"bottle":"\u74f6","s":"s"}}')},359:function(e,t,i){"use strict";(function(e){function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class n{constructor(t={}){i(this,"type",void 0),i(this,"testing",void 0),i(this,"instance",void 0),i(this,"errors",void 0),i(this,"process",void 0),this.instance=this.init(t),this.errors=[],this.process=e,this.testing="test"===this.process.env.NODE_ENV||"testing"===this.process.env.NODE_ENV,this.process.on("exit",(()=>{throw new Error(this.errors)}))}init(t){return e.on("beforeExit",(()=>{if(this.errors&&this.errors.length)throw new Error(JSON.stringify(this.errors))})),this.instance?this.instance:this}log(e){if("i18next::translator: missingKey"===e[0]&&this.testing){const t=e[1],i=e[2],n=e[3],a=new Error(`Error finding translations there is a missing key!\n\n                 Cannot find: \n                 Language: ${t}\n                 Namespace: ${i}\n                 Key: ${n}\n                ${JSON.stringify(e)}\n                `);this.errors.push(a)}this.testing&&"i18next: initialized"===e[0]||this.output("log",e)}warn(e){if(e[0].includes("i18next::interpolator: missed")&&this.testing){const t=new Error(`Error finding translations there is a missing key!\n\n                 Cannot find: \n                 ${JSON.stringify(e)}\n                `);this.errors.push(t)}this.output("warn",e)}error(e){this.output("error",e)}output(e,t){var i,n;console&&console[e]&&"production"!==(null===(i=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,APP_ENV:"production",APP_GTM_APPEND:"",APP_SENTRY_TRACING_RATE:"0.05"}))||void 0===i?void 0:i.NODE_ENV)&&"production"!==(null===(n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,APP_ENV:"production",APP_GTM_APPEND:"",APP_SENTRY_TRACING_RATE:"0.05"}))||void 0===n?void 0:n.APP_ENV)&&console[e].apply(console,t)}}i(n,"type",void 0),i(n,"cb",void 0),n.type="logger",t.a=n}).call(this,i(93))},376:function(e,t,i){e.exports=i.p+"static/media/linkedin.4380255a.svg"},377:function(e,t,i){e.exports=i.p+"static/media/twitter.4adc9d05.svg"},378:function(e,t,i){e.exports=i.p+"static/media/facebook.af494846.svg"},379:function(e,t,i){e.exports=i.p+"static/media/instagram.12ea2b21.svg"},380:function(e,t){e.exports="data:image/png;base64,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"},381:function(e,t){e.exports="data:image/png;base64,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"},382:function(e,t,i){e.exports=i.p+"static/media/Stat_wine_left.b4649911.svg"},383:function(e,t,i){e.exports=i.p+"static/media/Stat_wine_right.9a04b633.svg"},384:function(e,t,i){e.exports=i.p+"static/media/v3-logo.695879f8.svg"},385:function(e,t,i){e.exports=i.p+"static/media/v3logoGreen.9f679c12.svg"},386:function(e,t,i){e.exports=i.p+"static/media/v3logoBrown.ed3084ae.svg"},387:function(e,t,i){e.exports=i.p+"static/media/v3logoLight.ff06d828.svg"},388:function(e,t,i){e.exports=i.p+"static/media/referral-badge.f485d912.svg"},391:function(e){e.exports=JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":40,"w":200,"h":200,"nm":"vv_loading","ddd":0,"#assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"beige 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":19,"s":[100,60,0],"to":[0,0,0],"ti":[0,0,0]},{"t":28,"s":[100,60,0]}],"ix":2},"a":{"a":0,"k":[0,10,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":19,"s":[100,100,100]},{"t":28,"s":[100,200,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.937254961799,0.866666726505,0.780392216701,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[10,-10],"ix":2},"a":{"a":0,"k":[10,-10],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":19,"op":44,"st":4,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"blue","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[80,90,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.772549079446,0.835294177485,0.894117706897,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":0,"s":[-10,-10],"to":[0,0],"ti":[0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":8,"s":[-10,-10],"to":[6.667,0],"ti":[-6.667,0]},{"t":16,"s":[30,-10]}],"ix":2},"a":{"a":0,"k":[-10,-10],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":8,"s":[300,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":16,"s":[100,100]},{"t":28,"s":[100,500]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"green","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[130,80,0],"to":[0,6.667,0],"ti":[0,-8.333,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":12,"s":[130,120,0],"to":[0,8.333,0],"ti":[0,-6.667,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":16,"s":[130,130,0],"to":[0,3.102,0],"ti":[0.028,0.083,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":19,"s":[130,160,0],"to":[-0.02,-0.06,0],"ti":[-0.31,-0.033,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":22,"s":[130,160,0],"to":[2.399,0.252,0],"ti":[0,0,0]},{"t":28,"s":[90,160,0]}],"ix":2},"a":{"a":0,"k":[10,-10,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[100,250,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":19,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":22,"s":[300,100,100]},{"t":28,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.878431432387,0.898039275525,0.803921628466,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.015,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"bordoux","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[130,120,0],"to":[0,6.667,0],"ti":[0,-6.667,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":7,"s":[130,160,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":8,"s":[130,160,0],"to":[-6.667,0,0],"ti":[6.667,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":12,"s":[90,160,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":16,"s":[90,160,0],"to":[0,-6.667,0],"ti":[0,6.667,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":22,"s":[90,120,0],"to":[0,0,0],"ti":[0,0,0]},{"t":28,"s":[90,120,0]}],"ix":2},"a":{"a":0,"k":[10,-10,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":7,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":12,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":22,"s":[100,200,100]},{"t":28,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.901960844152,0.788235353956,0.788235353956,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.015,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"beige","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[130,180,0],"to":[-6.667,0,0],"ti":[-0.333,0.167,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":7,"s":[90,180,0],"to":[0.211,-0.105,0],"ti":[0,6.667,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":12,"s":[90,140,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":16,"s":[90,140,0],"to":[0,-6.667,0],"ti":[0,6.667,0]},{"t":22,"s":[90,100,0]}],"ix":2},"a":{"a":0,"k":[10,10,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":7,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":12,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[100,300,100]},{"t":22,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.937254961799,0.866666726505,0.780392216701,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[10,-10],"ix":2},"a":{"a":0,"k":[10,-10],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0}],"markers":[{"tm":0,"cm":"9","dr":0}]}')},392:function(e,t,i){e.exports=i.p+"static/media/user.fcffcf1e.svg"},394:function(e,t,i){e.exports=i.p+"static/media/Vinovest-Mono.b3a2bbea.otf"},395:function(e,t,i){e.exports=i.p+"static/media/wire-bank.b3f54063.svg"},396:function(e,t,i){e.exports=i.p+"static/media/credit-card.cef62443.svg"},397:function(e,t,i){e.exports=i.p+"static/media/crypto.d8be564d.svg"},399:function(e,t,i){e.exports=i.p+"static/media/domestic.fbf4b4eb.svg"},400:function(e,t,i){e.exports=i.p+"static/media/globe.17d25e42.svg"},401:function(e,t,i){e.exports=i.p+"static/media/pdf.4617d307.svg"},402:function(e,t,i){e.exports=i.p+"static/media/check.3a5c76f3.svg"},403:function(e,t,i){e.exports=i.p+"static/media/arrowDeposit.7eee42b5.svg"},405:function(e,t,i){e.exports=i.p+"static/media/balloon-envelope.95ab3f49.svg"},406:function(e,t,i){e.exports=i.p+"static/media/close-icon.4dcddfd4.svg"},41:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i(0),a=i(18),o=i(27);const r=()=>Object(n.useCallback)((()=>{const e=Object(a.g)(),t=Object.assign({},e,{push:null,nativePush:e.push});return t.push=t=>e.push(Object(o.e)(t)),t}),[])()},42:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n=i(1).e.button`
    font-family: VinovestMono;
    text-transform: uppercase;
    background-color: ${e=>e.theme.colors.burntOrange};
    font-size: ${e=>e.theme.typography.size.md}px;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.white};
    width: 100%;
    border: none;
    padding: 12px 0;
    outline: 0;
    cursor: pointer;
    pointer-events: ${e=>e.disabled?"none":"initial"};
    &:hover {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.6s ease-in-out;
    }
    &:disabled {
        background-color: ${e=>e.theme.colors.lightGray};
    }
`},430:function(e,t,i){"use strict"},436:function(e,t,i){e.exports=i(665)},450:function(e,t,i){},56:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var n=i(0),a=i.n(n),o=i(1),r=i(5),s=i.n(r),l=i(113),c=i.n(l),d=i(12);const u=Object(n.memo)((({isLoading:e,disabled:t,onClick:i,CTA:n})=>a.a.createElement(p,{disabled:e||t,onClick:i},e?a.a.createElement(c.a,{size:8,margin:"10px",color:"#828282",loading:e}):n))),p=Object(o.e)(d.g)`
    margin-top: 32px;
    @media screen and (min-width: 768px) {
        margin-top: 40px;
        max-width: initial;
    }
`;u.defaultProps={isLoading:!1,disabled:!1},u.propTypes={isLoading:s.a.bool,disabled:s.a.bool,onClick:s.a.func.isRequired,CTA:s.a.string.isRequired}},57:function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}));var n=i(0),a=i.n(n),o=({style:e={},fill:t="#A3A3A3"})=>a.a.createElement("svg",{width:"10",height:"16",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:e},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.29961 7.8918L1.59961 15.5918L0.0996093 14.1918L6.39961 7.8918L0.0996088 1.5918L1.59961 0.191797L9.29961 7.8918Z",fill:t})),r=()=>a.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{cx:"17.5",cy:"17.5",r:17,stroke:"#80CB83",strokeWidth:"2px"}),a.a.createElement("path",{d:"M10 17.1538L14.9 22L24 13",stroke:"#80CB83",strokeWidth:"2px"}))},665:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(37),r=i.n(o),s=(i(441),i(442),i(443),i(448),i(18)),l=i(44),c=(i(449),i(450),i(72),i(144)),d=i(409),u=i(36),p=i(365),h=i.n(p),m=i(20);function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class g{static build(e){return new g(e)}constructor(e){f(this,"getLwin7ContentfulData",(e=>{const t=Array.from(new Set(e.map((e=>e.slice(0,7)))));return this.contentfulClient.getEntries({content_type:"lwin7","fields.lwin7[in]":t.join(",")})})),f(this,"getLwin7Descriptions",(async e=>{const t=await this.getLwin7ContentfulData(e);let i={};try{i=t.items.reduce(((e,{fields:{displayName:t,description:i,lwin7:n}})=>({...e,[n]:t||i})),{})}catch(n){i={}}return i})),f(this,"getWinesFromContentful",(async e=>{let t;const i=e,n=this.contentfulClient.getEntries({content_type:"vintage","fields.lwin11[in]":i.join(",")}),a=this.getLwin7ContentfulData(e),o=this.contentfulClient.getEntries({content_type:"critic","fields.lwin11[in]":i.join(",")});try{const i=await Promise.all([n,a,o]),r=i[0].items.reduce(((e,{fields:t})=>({...e,[t.lwin11]:{...t}})),{}),s=i[1].items.reduce(((e,{fields:t})=>({...e,[t.lwin7]:{...t}})),{}),l=i[2].items.reduce(((e,{fields:t})=>({...e,[t.lwin11]:e[t.lwin11]?[...e[t.lwin11],t]:[t]})),{});t={ok:!0,data:e.reduce(((e,t)=>({...e,[t]:{...s[t.slice(0,7)],...r[t],critics:l[t]}})),{})}}catch(r){t={ok:!1}}return t})),f(this,"getPortfolio",(async(e,t)=>{let i;const n=await fetch(`${this.config.apiEndpoint}/v1/portfolio?range=${t}`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{i=await n.json()}catch(a){i=void 0}return{ok:n.ok,data:i}})),f(this,"getPortfolioTotals",(async(e,t,i="1w")=>{let n;const a=await fetch(`${this.config.apiEndpoint}/v1/portfolio/${t}?range=${i}`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{n=await a.json()}catch(o){n=void 0}return{ok:a.ok,data:n}})),f(this,"getPortfolioFeatured",(async(e,t)=>{let i;const n=await fetch(`${this.config.apiEndpoint}/v1/portfolio/${t}/featured`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{i=await n.json()}catch(a){i=void 0}return{ok:n.ok,data:i}})),f(this,"getPortfolioWines",(async(e,t,i)=>{let n;const a=i?new URLSearchParams(i):null,o=await fetch(`${this.config.apiEndpoint}/v1/portfolio/${t}/wines${a?`?${a.toString()}`:""}`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{n=await o.json()}catch(r){n=void 0}return{ok:o.ok,data:n}})),f(this,"getWinesInLiquidationProcess",(async(e,t)=>{let i;const n=await fetch(`${this.config.apiEndpoint}/v1/portfolio/${t}/liquidate/wines`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{i=await n.json()}catch(a){i=void 0}return{ok:n.ok,data:i}})),f(this,"postWinesToLiquidate",(async(e,t,i=[])=>{let n;const a=await fetch(`${this.config.apiEndpoint}/v1/portfolio/${t}/liquidate/wines`,{method:"POST",headers:new Headers({Authorization:`Bearer ${e}`}),body:JSON.stringify({wines:i})});try{n=await a.json()}catch(o){n=void 0}return{ok:a.ok,data:n}})),f(this,"putConfirmWinesLiquidation",(async(e,t)=>{let i;const n=await fetch(`${this.config.apiEndpoint}/v1/portfolio/${t}/liquidate/wines/confirm`,{method:"PUT",headers:new Headers({Authorization:`Bearer ${e}`})});try{i=await n.json()}catch(a){i=void 0}return{ok:n.ok,data:i}})),f(this,"putConfirmWinesLiquidationResendEmail",(async(e,t)=>{let i;const n=await fetch(`${this.config.apiEndpoint}/v1/portfolio/${t}/liquidate/wines/resend`,{method:"PUT",headers:new Headers({Authorization:`Bearer ${e}`})});try{i=await n.json()}catch(a){i=void 0}return{ok:n.ok,data:i}})),f(this,"getPortfolioWineToCollection",(async(e,t,i,n="6m")=>{let a;const o=await fetch(`${this.config.apiEndpoint}/v1/portfolio/${t}/wines/${i}?range=${n}`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{a=await o.json(),a.range=n}catch(r){a=void 0}return{ok:o.ok,data:a}})),f(this,"fetchVineyardBackground",(async e=>{let t;try{const i=await this.contentfulClient.getEntries({content_type:"lwin7","fields.lwin7":e});t=(await this.contentfulClient.getEntries({content_type:"producer","fields.lwin7s.sys.id":i.items[0].sys.id})).items[0].fields}catch(i){}return t})),f(this,"getShouldShowAccountSubscription",(async(e,t)=>{let i;const n=await fetch(`${this.config.apiEndpoint}/v1/accounts/${t}/subscription`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{i=await n.json()}catch(a){i=void 0}return{ok:n.ok,data:i}})),f(this,"getSavedPaymentMethodsAndSources",(e=>fetch(`${this.config.apiEndpoint}/v2/accounts`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})}))),f(this,"getPendingTransfers",(async(e,t)=>{const i=await fetch(`${this.config.apiEndpoint}/v1/transfers/${t}/pending`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});return{ok:i.ok,data:await i.json()}})),f(this,"getBidsActive",(async(e,t)=>{try{const i=await fetch(`${this.config.apiEndpoint}/v1/portfolio/${t}/bids/active`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})}),n=await i.json(),a=await this.getLwin7Descriptions(n.bids.map((({lwin18:e})=>e)));return{ok:i.ok,data:n.bids.map((e=>({...e,description:a[e.lwin18.slice(0,7)]||""})))}}catch(i){return{ok:!1}}})),f(this,"getDeposits",(async(e,t,i)=>{const n=Object.entries(i||{}).map((([e,t])=>`${e}=${t}`));let a;const o=await fetch(`${this.config.apiEndpoint}/v2/portfolio/${t}/fees${n.length?`?${n.join("&")}`:""}`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{a=await o.json();const e=await this.getLwin7Descriptions(a.fees.filter((({meta:e})=>e&&e.lwin18)).map((({meta:e})=>e.lwin18)));Object.entries(e).length&&(a={...a,fees:a.fees.map((t=>t.meta&&t.meta.lwin18?{...t,meta:{...t.meta,name:e[Object(m.i)(t.meta.lwin18)],vintage:Object(m.k)(t.meta.lwin18)}}:t))})}catch(r){a=null}return{ok:o.ok,data:a}})),f(this,"getUserProfile",(async(e,t)=>{const i=await fetch(`${this.config.apiEndpoint}/v1/user/${e}/profile`,{method:"GET",headers:new Headers({Authorization:`Bearer ${t}`})});return{ok:i.ok,data:await i.json()}})),f(this,"getUserInformation",(async(e,t)=>{const i=await fetch(`${this.config.apiEndpoint}/v1/user/${e}/information`,{method:"GET",headers:new Headers({Authorization:`Bearer ${t}`})});return{ok:i.ok,data:await i.json()}})),f(this,"getReferenceKey",(e=>fetch(`${this.config.apiEndpoint}/v1/user/key`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})}))),f(this,"getPlaidLink",(async(e,t)=>await fetch(`${this.config.apiEndpoint}/v1/accounts/${t}/plaid/link`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})}))),f(this,"createV2ACHAccount",(async(e,t,i)=>await fetch(`${this.config.apiEndpoint}/v2/accounts`,{method:"POST",headers:new Headers({Authorization:`Bearer ${e}`}),body:JSON.stringify({publicToken:t,accountID:i.account_id})}))),f(this,"createV2TransferWithInterval",(async(e,t,i)=>{const n=`${this.config.apiEndpoint}/v2/accounts/${t}/transfer`;return await fetch(n,{method:"POST",headers:new Headers({Authorization:`Bearer ${e}`}),body:JSON.stringify(i)})})),f(this,"getStripeSetupIntentToken",(e=>{const t=`${this.config.apiEndpoint}/v1/payments`;return fetch(t,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})})})),f(this,"getBitpayInvoice",(({profileId:e,depositAmtInCents:t,jwt:i})=>{const n={amount:{amount:t,currency:"USD"},redirect:"https://vinovest.co"};return fetch(`${this.config.apiEndpoint}/v1/accounts/${e}/bitpay/invoice`,{method:"POST",headers:new Headers({Authorization:`Bearer ${i}`}),body:JSON.stringify(n)})})),f(this,"createStripePaymentIntent",(async(e,t)=>await fetch(`${this.config.apiEndpoint}/v1/payments`,{method:"POST",headers:new Headers({Authorization:`Bearer ${e}`}),body:JSON.stringify({amount:t})}))),f(this,"updateUserProfile",((e,t,i)=>fetch(`${this.config.apiEndpoint}/v1/user/${e}/profile`,{method:"PUT",headers:new Headers({Authorization:`Bearer ${t}`}),body:JSON.stringify(i)}))),f(this,"createOktaAccount",(async e=>{const{firstName:t,lastName:i,email:n,password:a}=e,o=await fetch(`${this.config.apiEndpoint}/v1/user`,{method:"POST",body:JSON.stringify({firstName:t,lastName:i,email:n,password:a,login:n})});if(204===o.status)return{code:o.status};return await o.json()})),f(this,"exchangeCodeToToken",(async e=>{const t=await fetch(`${this.config.issuer}/v1/token`,{method:"POST",headers:new Headers({accept:"application/json","content-type":"application/x-www-form-urlencoded; charset=UTF-8"}),body:new URLSearchParams({grant_type:"authorization_code",client_id:this.config.clientId,redirect_uri:this.config.redirectUri,code:e,code_verifier:"M25iVXpKU3puUjFaYWg3T1NDTDQtcW1ROUY5YXlwalNoc0hhakxifmZHag"})});return await t.json()})),f(this,"getPaymentSelfServicePortalURI",(async(e,t=window.location.href)=>await fetch(`${this.config.apiEndpoint}/v1/portal`,{method:"POST",headers:new Headers({Authorization:`Bearer ${e}`}),body:JSON.stringify({returnUrl:t})}))),f(this,"linkReferralInviteCode",((e,t,i)=>fetch(`${this.config.apiEndpoint}/v1/user/${t}/referral`,{method:"PUT",headers:new Headers({Authorization:`Bearer ${e}`}),body:JSON.stringify({referrerId:i})}))),f(this,"getUserReferralProfileStatus",((e,t)=>fetch(`${this.config.apiEndpoint}/v1/user/${t}/referral/status`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})}))),f(this,"getAccountStatements",(async(e,t)=>{const i=Object.entries(t||{}).map((([e,t])=>`${e}=${t}`));let n;const a=await fetch(`${this.config.apiEndpoint}/v1/documents/monthly${i.length?`?${i.join("&")}`:""}`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{n=await a.json()}catch(o){n=void 0}return{ok:a.ok,data:n}})),f(this,"getWineCertificates",(async(e,t)=>{const i=Object.entries(t||{}).map((([e,t])=>`${e}=${t}`));let n;const a=await fetch(`${this.config.apiEndpoint}/v1/documents/certificates${i.length?`?${i.join("&")}`:""}`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{n=await a.json()}catch(o){n=void 0,u.b(new Error("Could not fetch wine certificates"),{extra:a.status})}return{data:n}})),f(this,"getAccountStatementsMonths",(async e=>{let t;const i=await fetch(`${this.config.apiEndpoint}/v1/documents/monthly/filters`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{t=await i.json()}catch(n){t=void 0}return{ok:i.ok,data:t}})),f(this,"getDocumentItem",(async(e,t)=>{let i;const n=await fetch(`${this.config.apiEndpoint}/v1/documents/${t}`,{method:"GET",headers:new Headers({Authorization:`Bearer ${e}`})});try{i=await n.json()}catch(a){i=void 0}return{ok:n.ok,data:i}})),f(this,"getBlogCategoriesFromContentful",(async()=>{let e;try{return e=await this.contentfulClient.getEntries({content_type:"blogPostGroup",include:0}),{data:e.items.map((({fields:e})=>e)),ok:!0}}catch(t){return{ok:!1}}})),f(this,"getBlogsListFromContentful",(async({skip:e,limit:t,category:i,filterIds:n})=>{let a;const o={content_type:"pageBlogPost",skip:e,limit:t,select:"fields.blogAuthor,fields.heroImage,fields.slug,fields.postTitle,fields.postDate",order:"-fields.postDate"};i&&(o["metadata.tags.sys.id[in]"]=i),n&&(o["sys.id[in]"]=n);try{a=await this.contentfulClient.getEntries(o);const{items:e,...t}=a;return{data:{items:e.map((({fields:e,sys:{id:t}})=>({...e,id:t}))),...t},ok:!0}}catch(r){return{ok:!1}}})),f(this,"getArticleFromContentful",(async e=>{let t;try{return t=await this.contentfulClient.getEntries({content_type:"pageBlogPost","fields.slug":e}),t.items.length?{data:{...t.items[0].fields,id:t.items[0].sys.id},ok:!0}:{ok:!1,error:"PAGE_NOT_FOUND"}}catch(i){return{ok:!1,error:i}}})),f(this,"getSupportCategoriesFromContentful",(async()=>{let e;try{return e=await this.contentfulClient.getEntries({content_type:"supportCategory"}),{data:e.items.map((({fields:e})=>e)),ok:!0}}catch(t){return{ok:!1}}})),f(this,"getNewsListFromContentful",(async()=>{let e;try{return e=await this.contentfulClient.getEntries({content_type:"press",order:"-fields.date"}),{data:e,ok:!0}}catch(t){return{ok:!1}}})),f(this,"searchFAQArticles",(async e=>{let t;try{return t=await this.algoliaSearchSupportIndex.search(e),{data:t,ok:!0}}catch(i){return{ok:!1}}})),this.config=e;const t={space:e.contentfulSpace,accessToken:e.contentfulAccessToken};let{algoliaSearchIndex:i}=e.algoliaSearchIndex;"production"===e.env&&"https://vinovest-web-client-camel-web-client.releaseapp.io"!==window.location.origin||(t.host="preview.contentful.com",t.accessToken="6_FkLcOgH0Zo8_q8K00d9bY6KTd7f0XMDxXl-pfvmfM",i="dev_HELP"),this.contentfulClient=Object(d.a)(t),this.algoliaSearchClient=h()(e.algoliaSearchId,e.algoliaSearchKey),this.algoliaSearchSupportIndex=this.algoliaSearchClient.initIndex(i)}}var b=i(122);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=i(680),v=i(681),w=i(408),x=i(108);class k{static build(e,t){return new k(e,t)}constructor(e,t){const{dsn:i,release:n,tracesSampleRate:a=.05,environment:o="production",tracingOrigins:r}=e.sentry;y.a({dsn:i,release:n,tracesSampleRate:a,environment:e.env,integrations:[new w.a.BrowserTracing({routingInstrumentation:v.a(t,x.a,s.f),tracingOrigins:r})]})}}var E=i(70),O=i.n(E),_=i(13);function C(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const S="deposit_started",A="identify_user",j="login_complete",T="quiz_action",P="quiz_completed",I="referral_action",L="registration_complete",N="banner_action",V="ecommerce_transaction",D="appointment_scheduled",z="liquidation_flow_newsletter_checkbox",B="liquidation_feedback",R="liquidation_no_feedback",F="liquidation_newsletter_opt_in",M="footer_newsletter",q="contact_us_form",W="have_1000_question",H="pixel_registration_success",U="pixel_enter_phone",Y="pixel_click_fund_account",G="pixel_fund_account",J="pixel_get_started",$="a/b-phone-test";class K{static build(e){const t=new K(e);return t.addCalendly(t),t}constructor(e){C(this,"_getUserInformation",(async function(e){window.passPixelData721=null;const{userInformationEntity:t}=e.user;let i=t.data;const n=e=>{window.passPixelData721={Fn:e.firstName,Ln:e.lastName,Pn:e.primaryPhone,Em:e.email}};if(!Object.entries(i||{}).length)try{i=await e.user.fetchUserInformation(),n(i)}catch(a){return null}return n(i),i})),C(this,"_trackFbPixel",(async function(e,t){await this._getUserInformation(e)&&window.passPixelData721&&t()})),this.eventIdentifier="CUSTOM",this.ctx=e,this.trackPixelGetStarted=this.trackPixelGetStarted.bind(this)}_dispatchEvent(e,t){this.ctx.dataLayer.push({event:this.eventIdentifier,EVENT_NAME:e,ATTRS:t})}_dispatchEcommerceTransaction(e){this.ctx.dataLayer.push({event:this.eventIdentifier,EVENT_NAME:V,transactionId:e.id,transactionTotal:e.value,transactionProducts:[{name:e.method,sku:e.frequency,price:e.value,quantity:1}]})}trackRegistrationComplete(){this._dispatchEvent(L)}trackLoginComplete(){this._dispatchEvent(j)}trackDepositStarted(){this._dispatchEvent(S)}trackDepositAdded(e){this._dispatchEcommerceTransaction(e)}trackUserIdentified(e){this._dispatchEvent(A,e)}trackQuizAction(e){this._dispatchEvent(T,{action:e})}trackQuizCompleted(e){this._dispatchEvent(P,e)}trackReferralAction(e){this._dispatchEvent(I,{action:e})}trackBannerAction(e){this._dispatchEvent(N,{action:e})}trackAppointmentScheduled(){this._dispatchEvent(D)}trackLiquidationFlowNewsletter(){this._dispatchEvent(z)}liquidationFeedback(e){this._dispatchEvent(B,e)}liquidationNoFeedback(){this._dispatchEvent(R)}liquidationNewsletterOptIn(e){this._dispatchEvent(F,e)}addCalendly(e){window.addEventListener("message",(t=>{"calendly.event_scheduled"===t.data.event&&e.trackAppointmentScheduled()}),!1)}trackCreatePassword(e){this._trackFbPixel(e,(()=>{this._dispatchEvent(H)}))}trackEnterPhone(e,t){this._trackFbPixel(e,(()=>{window.passPixelData721.Pn=t,this._dispatchEvent(U)}))}trackHave1000question(e,t){this._trackFbPixel(e,(()=>{window.passPixelData721.answer=t,this._dispatchEvent(W)}))}trackDepositStartedSecondPixel(e){this._trackFbPixel(e,(()=>{this._dispatchEvent(Y)}))}trackFundAccountPurchase(e,t){this._trackFbPixel(e,(()=>{window.passPixelData721.value=t,window.passPixelData721.currency="USD",this._dispatchEvent(G)}))}trackPixelGetStarted(e,t){window.passPixelData721={};const i=O.a.get(_.c.KEY);i&&(window.passPixelData721.Em=i),e&&(window.passPixelData721.Em=e),t&&(window.passPixelData721.SignUpWiaGoogle=!0),this._dispatchEvent(J)}footerNewsletter(e){this._dispatchEvent(M,{Segment:"Newsletter",...e})}contactUsForm(e){this._dispatchEvent(q,{Segment:"Contact-Us-Form",...e})}trackEnterPhoneABTest(){this._dispatchEvent($)}}var Z=i(17);let Q;!function(e){e.Calendly="calendly",e.CalendlyPageViewEvent="calendly.profile_page_viewed",e.CalendlyEventViewEvent="calendly.event_type_viewed",e.CalendlyDateTimeSelectEvent="calendly.date_and_time_selected",e.CalendlyScheduledEvent="calendly.event_scheduled",e.PageView="profile_viewed",e.EventView="event_viewed",e.DateTimeSelect="date_and_time_selected",e.Scheduled="event_scheduled"}(Q||(Q={}));class X{static build(e){const t=new X(e);return t.addCalendly(),t}constructor(e){Z.a.init(null===e||void 0===e?void 0:e.postHogKey,{api_host:"https://app.posthog.com"})}addCalendly(){try{window.addEventListener("message",(function(e){if(function(e){return e.data.event&&0===e.data.event.indexOf("calendly")}(e)){const{event:t}=e.data,{CalendlyPageViewEvent:i,CalendlyScheduledEvent:n,CalendlyEventViewEvent:a,CalendlyDateTimeSelectEvent:o,PageView:r,EventView:s,DateTimeSelect:l,Scheduled:c,Calendly:d}=Q;switch(t){case i:return Z.a.capture(d,{progress:r});case a:return Z.a.capture(d,{progress:s});case o:return Z.a.capture(d,{progress:l});case n:return Z.a.capture(d,{progress:c})}}}))}catch(e){}}}var ee=i(43);class te{static build(e){return new te(e)}constructor(e){const{serviceBell:t}=e;ee.a.init(t.publicToken,t.options)}}var ie=i(31),ne=i(49),ae=i(375),oe=i.n(ae),re=i(23),se=i(59),le=i(11),ce=i(683),de=i(1),ue=i(27),pe=i(8),he=i(10),me=i(7);const fe=de.e.footer`
    font-family: VinovestMedium;
    width: 100%;
    margin-top: ${({withbanner:e})=>e?"0":"48px"};
    padding: ${({withbanner:e})=>e?"98px 128px":"50px 128px"};
    color: #fae8d1;
    background-color: #242e35;
    ${({embed:e})=>e||""}

    @media screen and (max-width: 1300px) {
        padding: ${({withbanner:e})=>e?"60px 45px 52px":"20px 45px 52px"};
    }

    @media screen and (max-width: 1024px) {
        padding-bottom: ${({withbanner:e})=>e?"52px":"110px"};
    }

    @media screen and (max-width: 767px) {
        padding: ${({withbanner:e})=>e?"70px 24px 45px":"38px 24px 110px"};
    }

    a {
        transition: 0.3s;
        &:hover {
            opacity: 0.5;
        }
    }
`,ge=de.e.div`
    max-width: 1440px;
    margin: 0 auto;
    background-color: #fae8d1;
    display: grid;
    grid-template-columns: minmax(275px, 1fr) minmax(275px, 1fr) 1fr 1fr;
    grid-template-rows: max-content max-content max-content max-content;
    gap: 1px 1px;
    grid-template-areas:
        "a a c c"
        "a a d d"
        "b b d d"
        "b b d d";

    .a {
        grid-area: a;
        background-color: #242e35;
    }
    .b {
        grid-area: b;
        background-color: #242e35;
    }
    .c {
        grid-area: c;
        background-color: #242e35;
    }
    .d {
        grid-area: d;
        background-color: #242e35;
    }

    @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "a a"
            "b c"
            "b d";
        gap: 0 0;
        background-color: transparent;

        .a {
            padding: 0 9px;
            padding: ${({withbanner:e})=>e?"border-top: 1px solid #fae8d1;":""};
            border-bottom: 1px solid #fae8d1;
        }

        .b {
            border-right: 1px solid #fae8d1;
        }
        .c {
            border-bottom: 1px solid #fae8d1;
        }
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            "a"
            "b"
            "c"
            "d";
        background-color: transparent;
        gap: 0px 0px;
    }
`,be=de.e.h3`
    font-family: Roslindaledisplaycondensed, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    margin: 0;

    @media screen and (max-width: 1300px) {
        font-size: 28px;
        line-height: 44px;
    }

    @media screen and (max-width: 767px) {
        font-size: 24px;
        line-height: 34px;
    }
`,ye=de.e.div`
    padding-right: 40px;
    padding-bottom: 41px;
    margin-top: 40px;

    @media screen and (max-width: 1024px) {
        margin-top: 30px;
        padding-right: 0;
    }

    @media screen and (max-width: 767px) {
        padding-right: 0;
        padding-top: 0;
        padding-bottom: 32px;
        margin-top: 0;
        border-bottom: 1px solid #fae8d1;
    }
`,ve=de.e.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 53px;
    max-width: 663.5px;
    width: 100%;

    ${be} {
        margin-bottom: 15px;
    }

    @media screen and (max-width: 1024px) {
        padding-bottom: 42px;
        max-width: 100%;
    }

    @media screen and (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 24px 42px;
        grid-template-areas:
            ". ."
            ". .";
    }
`,we=de.e.nav`
    display: flex;
    flex-direction: column;

    a {
        text-decoration: none;
        font-style: normal;
        font-weight: normal;
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        color: inherit;
        text-align: left;

        &:not(:last-child) {
            margin-bottom: 4px;
        }

        @media screen and (max-width: 1300px) {
            font-size: 14px;
            line-height: 27px;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) {
            width: 150px;
        }

        @media screen and (max-width: 767px) {
            line-height: 33px;
            width: fit-content;
        }
        @media screen and (min-width: 375px) {
            font-size: 16px;
        }
      
        @media screen and (min-width: 320px) {
            font-size: 15px;
        }
    }
`,xe=(de.e.div`
    border: 1px solid #fae8d1;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px 15px;
    margin-right: 10px;
    width: fit-content;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    display: flex;
    justify-content: space-around;
    max-width: 259px;
    width: 100%;

    span {
        &.withBorder {
            border-right: 1px solid #fae8d1;
        }
    }

    @media screen and (max-width: 767px) {
        max-width: 100%;
        margin-right: 0;
    }
`,de.e.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    padding-right: 27px;

    @media screen and (max-width: 1024px) {
        padding-right: 0;
    }
`);var ke=({title:e,navItems:t})=>a.a.createElement("div",null,a.a.createElement(be,null,e),a.a.createElement(we,null,t.map((e=>e.isLink?a.a.createElement(re.b,{key:e.path,to:e.path},e.title):a.a.createElement("a",{key:e.path,href:e.path},e.title))))),Ee=i(670),Oe=i(376),_e=i.n(Oe),Ce=i(377),Se=i.n(Ce),Ae=i(378),je=i.n(Ae),Te=i(379),Pe=i.n(Te);const Ie=[{icon:Se.a,href:"https://twitter.com/Vinovest1",name:"twitter"},{icon:je.a,href:"https://www.facebook.com/vinovestofficial/",name:"facebook"},{icon:Pe.a,href:"https://www.instagram.com/vinovest_official/",name:"instagram"},{icon:_e.a,href:"https://www.linkedin.com/company/vinovest",name:"linkedin"}],Le=de.e.ul`
    display: flex;
    list-style: none;
    margin: 0;
    align-items: center;
    padding: 10px 0;
    align-self: center;
    font-family: FavoritStd;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;

    @media screen and (max-width: 1024px) {
        padding: 0;
        font-size: 14px;
        line-height: 28px;
    }

    @media screen and (max-width: 767px) {
        padding: 0;
        margin-top: 38px;
    }

    span {
        margin-right: 29px;
    }
    li {
        display: flex;
        align-items: flex-end;
        margin-right: 20px;

        a {
            display: flex;
            align-items: flex-end;
        }

        img {
            width: 18px;
            height: 18px;
            object-fit: contain;
        }
    }
    
`;var Ne=()=>{const{t:e}=Object(Ee.a)("footer");return a.a.createElement(Le,null,a.a.createElement("span",null,e("follow")),Ie.map((e=>a.a.createElement("li",{key:e.name},a.a.createElement("a",{href:e.href,rel:"noopener noreferrer",target:"_blank"},a.a.createElement("img",{src:e.icon,alt:e.name}))))))};const Ve=Object(le.a)((()=>{const e=Object(pe.f)(),{isAuthenticated:t}=e.auth,i=a.a.useMemo((()=>{return e=t,[{title:he.a.t("footer:company.title"),navItems:[{title:he.a.t("footer:company.home"),path:e?me.a.vinovestHome:"/",isLink:!0},{title:he.a.t("footer:company.about"),path:me.a.aboutUs,isLink:!0},{title:he.a.t("footer:company.vinovest-council"),path:me.a.council,isLink:!0},{title:he.a.t("footer:company.careers"),path:me.a.careers,isLink:!0},{title:he.a.t("footer:company.press"),path:me.a.press,isLink:!0}]},{title:he.a.t("footer:learn.title"),navItems:[{title:he.a.t("footer:learn.why-wine"),path:me.a.whyWine,isLink:!0},{title:he.a.t("footer:learn.how-it-works"),path:me.a.howItWorks,isLink:!0},{title:he.a.t("footer:learn.vinovest-100"),path:me.a.vinovest100Index,isLink:!0},{title:he.a.t("footer:learn.pricing"),path:me.a.pricing,isLink:!0}]},{title:he.a.t("footer:services.title"),navItems:[{title:he.a.t("footer:services.guarantee"),path:me.a.satisfaction,isLink:!0},{title:he.a.t("footer:services.sustainability"),path:me.a.sustainability,isLink:!0},{title:he.a.t("footer:services.wine-futures"),path:me.a.wineFutures,isLink:!0},{title:he.a.t("footer:services.for-advisors"),path:me.a.advisors,isLink:!0},{title:he.a.t("footer:services.whiskeyvest"),path:"https://www.whiskeyvest.co/",isLink:!1}]},{title:he.a.t("footer:resources.title"),navItems:[{title:he.a.t("footer:resources.blog"),path:me.a.blog,isLink:!0},{title:he.a.t("footer:resources.help"),path:me.a.help,isLink:!0},{title:he.a.t("footer:resources.contact-us"),path:me.a.contactUs,isLink:!0},{title:he.a.t("footer:resources.privacy-policy"),path:me.a.privacyPolicy,isLink:!0},{title:he.a.t("footer:resources.terms"),path:me.a.terms,isLink:!0},{title:he.a.t("footer:resources.accessibility"),path:me.a.accessibility,isLink:!0}]}];var e}),[t]);return a.a.createElement(ve,null,i.map((({title:e,navItems:t})=>a.a.createElement(ke,{key:e,navItems:t,title:e}))))})),De=()=>a.a.createElement(xe,null,a.a.createElement(Ne,null));var ze=()=>a.a.createElement(ye,null,a.a.createElement(Ve,null),a.a.createElement(De,null));const Be=[{title:"Champagne (Taste, Best Bottles, Prices 2021)",link:"/blog/champagne"},{title:"How to Make a Mimosa (Recipe, Wine Ideas, Serving)",link:"/blog/mimosa"},{title:"Easy Sangria Recipes (Tips, Best Wines)",link:"/blog/sangria"},{title:"Malbec Wine - Winemaking, Best Wines, Prices (2021)",link:"/blog/malbec-wine"},{title:"Sauvignon Blanc (Best Wines, Taste, Prices 2021)",link:"/blog/sauvignon-blanc"}],Re=de.e.div`
    padding-top: 28px;
    padding-bottom: 39px;

    ${be} {
        padding-bottom: 9px;
    }

    @media screen and (max-width: 1024px) {
        padding-top: 29px;
        padding-right: 40px;
    }

    @media screen and (max-width: 767px) {
        padding-top: 31px;
        padding-bottom: 42px;
        border-bottom: 1px solid #fae8d1;

        ${be} {
            padding-bottom: 11px;
        }
    }
`,Fe=Object(de.e)(re.b)`
    text-decoration: none;
    color: inherit;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    margin-top: 6px;
    display: block;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }

    @media screen and (max-width: 1024px) {
        margin-top: 20px;
    }

    @media screen and (max-width: 767px) {
        font-size: 12px;
        line-height: 20px;
        margin-top: 17px;
    }
    @media screen and (min-width: 375px) {
        font-size: 16px;
    }
  
    @media screen and (min-width: 320px) {
        font-size: 15px;
     }
`;var Me=()=>{const{t:e}=Object(Ee.a)("footer");return a.a.createElement(Re,null,a.a.createElement(be,null,e("recent-articles.title")),Be.map((({title:e,link:t})=>a.a.createElement(Fe,{key:e,to:t},e))))};const qe=Object(le.a)((()=>{const e=Object(pe.f)(),{t}=Object(Ee.a)("footer"),[i,n]=a.a.useState(""),[o,r]=a.a.useState(!1);return a.a.createElement(We,null,a.a.createElement(be,null,t("newsletter.title")),a.a.createElement(He,{onSubmit:t=>{t.preventDefault(),e.tracking.gtm.footerNewsletter({email:i,id:i}),n(""),r(!0)}},o?a.a.createElement("div",{className:"isSubscribed"},t("newsletter.subscribed")):a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{placeholder:t("newsletter.email"),value:i,onChange:({target:e})=>{n(e.value)},type:"email",required:!0}),a.a.createElement("button",null,a.a.createElement("svg",{width:"35",height:"22",viewBox:"0 0 35 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("line",{x1:"8.74228e-08",y1:"11",x2:"32",y2:"11",stroke:"#242E35",strokeWidth:"2"}),a.a.createElement("path",{d:"M23 1L33 11L23 21",stroke:"#242E35",strokeWidth:"2"}))))))})),We=de.e.div`
    padding-top: 28px;
    padding-bottom: 47px;
    padding-left: 66px;

    ${be} {
        margin-bottom: 17px;
    }

    @media screen and (max-width: 1300px) {
        padding-left: 30px;
    }

    @media screen and (max-width: 1024px) {
        padding-top: 29px;
    }

    @media screen and (max-width: 767px) {
        padding-left: 0;
        padding-top: 54px;
        padding-bottom: 40px;

        ${be} {
            margin-bottom: 22px;
        }
    }
`,He=de.e.form`
    max-width: 371px;
    width: 100%;
    height: 60px;
    border: 1px solid #fae8d1;
    display: flex;
    position: relative;

    @media screen and (max-width: 767px) {
        max-width: 100%;
    }

    .isSubscribed {
        background-color: #fae8d1;
        color: #242e35;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        padding: 16px 24px;
        width: calc(100% - 60px);
        height: 100%;
        outline: 0;
        border: 0;
        flex-shrink: 1;
        background: transparent;
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #fae8d1;

        &::placeholder {
            font-family: VinovestMedium;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 26px;
            color: #fae8d1;
        }
    }

    button {
        width: 60px;
        height: 100%;
        flex-shrink: 0;
        outline: 0;
        border: 0;
        background: #fae8d1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }
`;var Ue=qe,Ye=i(380),Ge=i.n(Ye),Je=i(381),$e=i.n(Je);const Ke=de.e.div`
    padding-top: 30px;
    padding-bottom: 47px;
    padding-left: 66px;

    ${be} {
        margin-bottom: 29px;
    }

    @media screen and (max-width: 1300px) {
        padding-left: 30px;
    }

    @media screen and (max-width: 767px) {
        padding: 0;
    }

    .accreditedBBB {
        /* max-width: 150px; */
        display: block;
        position: relative;
        overflow: hidden;
        width: 150px;
        height: 68px;
        margin: 0px;
        padding: 0px;

        .accreditedImg {
            padding: 0px;
            border: none;
        }
    }

    .fbi_newsletter {
        border-radius: 0px !important;
    }
`,Ze=de.e.div`
    display: flex;
    align-items: center;

    &.last {
        margin-top: 21px;
        margin-bottom: 45px;
    }
    @media screen and (max-width: 1024px) {
        &.last {
            margin-top: 21px;
            margin-bottom: 36px;
        }
    }

    .imgWrap {
        width: 40px;
        margin-right: 26px;

        img {
            display: block;
            flex-shrink: 0;
            height: auto;
            width: 100%;
        }
    }

    .links {
        a {
            font-family: VinovestMedium;
            text-decoration: none;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
            display: block;
            color: #fae8d1;
        }

        .bottomLink {
            color: #7edf83;
        }
    }
`;var Qe=()=>{const{t:e}=Object(Ee.a)("footer");return a.a.useEffect((()=>{try{window.bbbprotocol="https:"==document.location.protocol?"https://":"http://",function(){var e=document.createElement("script");e.src=`${window.bbbprotocol}seal-sanjose.bbb.org${unescape("%2Flogo%2Fvinovest-1284751.js")}`,e.type="text/javascript",e.async=!0;var t=document.getElementsByTagName("script"),i=(t=t[t.length-1]).parentNode;i.insertBefore(e,i.nextSibling)}()}catch(e){}}),[]),a.a.createElement(Ke,null,a.a.createElement(be,null,e("support.title")),a.a.createElement(Ze,null,a.a.createElement("div",{className:"imgWrap"},a.a.createElement("img",{src:Ge.a,width:"44",height:"40",alt:"Elaine Lau"})),a.a.createElement("div",{className:"links"},a.a.createElement("a",{href:"mailto:hello@vinovest.co?subject=I've%20got%20a%20question%20about%20Vinovest"},"hello@vinovest.co"),a.a.createElement("a",{className:"bottomLink",href:"mailto:hello@vinovest.co?subject=I've%20got%20a%20question%20about%20Vinovest"},e("support.reply")))),a.a.createElement(Ze,{className:"last"},a.a.createElement("div",{className:"imgWrap"},a.a.createElement("img",{src:$e.a,width:"44",height:"40",alt:"Lauren Bletcher"})),a.a.createElement("div",{className:"links"},a.a.createElement("a",{href:"tel:+1415-275-0965"},"+1 \xa0415-275-0965"),a.a.createElement("a",{className:"bottomLink",href:"tel:+1949-415-8730"},e("support.hours")))),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"bbblink",className:"accreditedBBB ruhzbum",href:"https://www.bbb.org/us/ca/culver-city/profile/wholesale-wine/vinovest-inc-1216-1284751#bbbseal",title:"Vinovest Inc., Wholesale Wine, Culver City, CA"},a.a.createElement("img",{className:"accreditedImg",id:"bbblinkimg",src:"https://seal-sanjose.bbb.org/logo/ruhzbum/vinovest-1284751.png",width:"300",height:"68",alt:"Vinovest Inc., Wholesale Wine, Culver City, CA"})))},Xe=i(218),et=i(382),tt=i.n(et),it=i(383),nt=i.n(it);const at=de.e.div`
    width: 100%;
    color: #242e35;
    padding-left: 24px;
    padding-right: 24px;
    position: relative;

    &::before {
        content: " ";
        display: block;
        position: absolute;
        height: 50%;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #242e35;
    }

    @media screen and (max-width: 767px) {
        &::before {
            height: 229px;
        }
    }
`,ot=de.e.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 980px;
    margin: 0 auto;
    padding: 80px 0;
    background-color: #efddc7;
    align-items: center;
    z-index: 1;

    h2 {
        font-family: Roslindaledisplaycondensed, sans-serif;
        font-size: 64px;
        line-height: 84px;
        font-weight: 500;
        text-align: center;
        margin: 0;
        color: #242e35;
    }

    p {
        margin: 0;
        padding: 23px 0 47px;
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
    }

    .glass {
        mix-blend-mode: multiply;
        position: absolute;
        left: auto;
        top: auto;
        right: 15.23%;
        bottom: 0;
    }
    .glass1 {
        left: 15.22%;
        right: auto;
    }

    @media screen and (max-width: 767px) {
        padding: 80px 0 0;

        h2 {
            font-size: 44px;
            line-height: 64px;
            padding: 0 10px;
        }

        p {
            padding: 24px 51px 31px;
        }

        .glass1 {
            display: none;
        }

        .glass2 {
            position: static;
            left: auto;
            right: auto;
            margin-top: 55px;
        }
    }
`;var rt=()=>{const{t:e}=Object(Ee.a)("footer");return a.a.createElement(at,null,a.a.createElement(ot,null,a.a.createElement("h2",null,e("banner.simple-investing")),a.a.createElement("p",null,e("banner.intelligently-diversify")),a.a.createElement(Xe.a,{colors:["#242E35","#FAE8D1"]},"GET STARTED"),a.a.createElement("img",{className:"glass glass1",src:tt.a,alt:"two glasses"}),a.a.createElement("img",{className:"glass glass2",src:nt.a,alt:"three glasses"})))};var st=({embed:e})=>{const t=Object(pe.f)(),{pathname:i}=Object(s.h)(),n=t.auth.isAuthenticated||Object(m.b)(),o=["/login","/reset_password","/signup"].includes(window.location.pathname)||window.location.pathname.includes("/deposit");return!(!i.includes("personalize")&&!o)||window.location.pathname.includes("/implicit")?null:a.a.createElement("div",null,!n&&a.a.createElement(rt,null),a.a.createElement(fe,{embed:e,withbanner:n?0:1},a.a.createElement(ge,null,a.a.createElement("div",{className:"a",withbanner:n?0:1},a.a.createElement(ze,null)),a.a.createElement("div",{className:"b"},a.a.createElement(Me,null)),a.a.createElement("div",{className:"c"},a.a.createElement(Ue,null)),a.a.createElement("div",{className:"d"},a.a.createElement(Qe,null)))))};var lt=({offset:e=40,skipOffset:t=0})=>{const[i,n]=a.a.useState(!1),[o,r]=a.a.useState(window.scrollY),s=a.a.useRef(i),l=()=>{const i=window.scrollY>=e;s.current!==i&&n(i),r(window.scrollY<=t?window.scrollY:t)};return a.a.useEffect((()=>{s.current=i}),[i]),a.a.useEffect((()=>(window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l))),[]),{isSticky:i,topOffset:o}};function ct(){return(ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var dt=a.a.createElement("path",{d:"M17 0.999999L24 8M24 8L17 15M24 8L0.500001 8",stroke:"#FAE8D1",strokeLinecap:"round",strokeLinejoin:"round"});const ut=({svgRef:e,title:t,...i})=>a.a.createElement("svg",ct({width:25,height:16,viewBox:"0 0 25 16",fill:"none",ref:e},i),t?a.a.createElement("title",null,t):null,dt),pt=a.a.forwardRef(((e,t)=>a.a.createElement(ut,ct({svgRef:t},e))));i.p;const ht=Object(le.a)((({offset:e})=>{const t=Object(pe.f)(),i=Object(pe.a)(),o=Object(pe.d)(),[r,s]=Object(n.useState)(!1),{t:l}=Object(Ee.a)("common"),c=Object(n.useCallback)((()=>{Z.a.capture("calendly",{component:"CalendlyBanner",progress:"launch"}),t.tracking.gtm.trackBannerAction("Click Banner"),window.Calendly.showPopupWidget(i.calendly.url)}),[i,t.tracking.gtm]);return Object(n.useEffect)((()=>{setTimeout((()=>{t.tracking.gtm.trackBannerAction("View Banner"),s(!0)}),1500)}),[]),a.a.createElement(mt,{role:"button",onClick:c,shouldExpand:r,offset:e},a.a.createElement(ft,null,l(o?"calendly.mobile-book":"calendly.book")," "),a.a.createElement(pt,null))})),mt=de.e.button`
    margin-top: -${({offset:e})=>e}px;
    transition: height 0.3s ease-out, margin 0.3s;
    padding: 0;
    height: ${e=>e.shouldExpand?"60px":"0px"};
    opacity: ${e=>e.shouldExpand?"1":"0"};
    color: ${({theme:e})=>e.colors.mainInnerTaupe};
    background: ${({theme:e})=>e.colors.mainAccentBlue};
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`,ft=de.e.div`
    margin-right: 20px;
`;var gt=i(42),bt=i(86);de.d`
    text-decoration: none;
    outline: none;
    border: none;
`;const yt=de.e.div`
    height: 100%;
`,vt=de.e.div`
    &.transparent,
    &.light,
    &.green,
    &.blue,
    &.darkBlue {
        position: absolute;
    }
    height: ${({height:e})=>e||"64px"};

    a:not(.active) {
        transition: 0.3s;
        &:hover {
            opacity: 0.5;
        }
    }
`,wt=de.e.nav`
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;

    .transparent,
    .light,
    .green,
    .blue,
    .darkBlue {
        color: ${({sticky:e})=>e?"#242E35":"#EFDDC7"};
    }

    .transparent {
        ${({sticky:e})=>!e&&"text-shadow: 0px 0px 2px #242E35;"};

        color: ${({sticky:e})=>e?"#242E35":"#efddc7"};
        @media screen and (max-width: 1023px) {
            ${({sticky:e})=>e?"background-color: #fff":"background-color: transparent"};
        }
    }

    .light {
        @media screen and (max-width: 1023px) {
            ${({sticky:e})=>e?"background-color: #fff":"background-color: #efddc7"};
        }
        color: #242e35;
    }

    .green {
        @media screen and (max-width: 1023px) {
            ${({sticky:e})=>e?"background-color: #fff":"background-color: #e0e5cd"};
        }
        color: ${({sticky:e})=>e?"#242E35":"#513011"};
    }

    .blue {
        @media screen and (max-width: 1023px) {
            ${({sticky:e})=>e?"background-color: #fff":"background-color: #c5d5e4"};
        }
        color: ${({sticky:e})=>e?"#242E35":"#3c400c"};
    }

    .darkBlue {
        color: ${({sticky:e})=>e?"#242E35":"#efddc7"};
        @media screen and (max-width: 1023px) {
            ${({sticky:e})=>e?"background-color: #fff":"background-color: #242e35"};
        }

        &__constant {
            background-color: #fff;
            color: #242e35;
        }
    }
`,xt=de.e.nav`
    z-index: 10;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0 16px;
    height: ${({height:e})=>e||"64px"};

    &.withConstantShadow {
        box-shadow: 0px 4px 32px rgba(36, 46, 53, 0.1);
    }

    &.withBorder {
        border-bottom: 1px solid #eeeeee;
        box-shadow: none;
    }

    @media screen and (min-width: 1024px) {
        justify-content: flex-start;
        padding: 0 16px;

        @media screen and (min-width: 1100px) {
            padding: 0 40px;
        }
    }
`,kt=de.e.div`
    display: flex;
    position: relative;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    min-height: 64px;

    @media screen and (max-width: 1023px) {
        ${yt} {
            transition: height 0.2s;
            position: absolute;
            left: 50%;
            height: 100%;
            transform: translateX(-50%);
        }
    }

    @media screen and (min-width: 1024px) {
        justify-content: center;
        width: 104px;
        max-width: initial;
    }
`,Et=de.e.div`
    display: none;
    ${e=>e.theme.media.greaterThan("medium")`
        display: flex;
        align-items: center;
        width: 100%;
  `}
`,Ot=de.e.div`
    display: flex;
    align-items: center;
    text-align: right;
    margin-left: auto;

    ${gt.a},
    ${bt.b}.login {
        border-radius: 3px;
        padding: 12px 20px;
        padding-top: 12px;
        margin-left: 20px;
        line-height: 18px;
        font-size: 14px;
        white-space: nowrap;
    }

    ${bt.b}.login {
        border: 1px solid #242e35;
        box-sizing: border-box;
        border-radius: 3px;
        color: #242e35;
        text-shadow: none;
        margin: 0;
        border: 1px solid #242e35;

        &.light {
            border: 1px solid #242e35;
            color: #242e35;
        }

        &.green {
            border: 1px solid #513011;
            color: #513011;
        }

        &.blue {
            border: 1px solid #3c400c;
            color: #3c400c;
        }

        &.darkBlue {
            border: 1px solid #efddc7;
            color: #efddc7;
        }
    }

    ${bt.b}.account {
        margin: 0;
        padding: 0;
        border: 0;
        width: 38px;
        height: 38px;

        &:after {
            display: none;
        }
    }
`,_t=de.e.div`
    display: flex;
    align-items: center;
    padding: 0 0 0 58px;
    width: 100%;
`,Ct=de.e.div`
    width: 25px;
    height: 25px;
    border-radius: 25px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #ffffff;
    background: #a4465d;
    display: flex;
    justify-content: center;
    align-items: center;
`,St=Object(de.e)(Ct)`
    position: absolute;
    top: ${({top:e})=>e||0};
    right: 0;
    transform: translate(100%, -100%);
    transition: top 0.3s;
`,At=de.e.div`
    overflow: hidden;
    position: relative;

    &.sticky {
        box-shadow: 0px 4px 32px rgba(36, 46, 53, 0.1);

        animation: delayBoxShadow 0.7s linear;

        @keyframes delayBoxShadow {
            0% {
                box-shadow: none;
            }

            80% {
                box-shadow: 0px 4px 32px transparent;
            }

            100% {
                box-shadow: 0px 4px 32px rgba(36, 46, 53, 0.1);
            }
        }
    }
`,jt=de.e.div`
    width: 100%;

    &.outFromHtml {
        position: absolute;
        top: 0;
        left: 0;
    }

    &.openNavBar {
        transform: translateY(0%);
        transition: transform 0.7s;
        z-index: 1;
        opacity: 1;
    }

    &.closeBavBar {
        transition: transform 0.5s;
        transform: translateY(-101%);
        opacity: 1;
    }
`;var Tt=i(106);const Pt=e=>e,It=[{to:"/",label:he.a.t("common:overview"),exact:!0,isActive:Pt},{to:"/portfolio",label:he.a.t("common:portfolio"),exact:!0,isActive:Pt},...ie.a.feature.transactionsFeed.enabled?[{to:"/transactions",label:he.a.t("common:transactions"),exact:!0,isActive:Pt}]:[],{to:"/documents/account_statements",label:he.a.t("common:documents"),exact:!0,isActive:(e,t)=>t.pathname.includes("/documents")},{to:"/invite",label:he.a.t("common:invite"),exact:!0,isActive:(e,t)=>"/invite"===t.pathname}],Lt=[{to:"/why-wine",label:he.a.t("common:why-wine"),exact:!0,isActive:Pt},{to:"/how-it-works",label:he.a.t("common:how-it-works"),exact:!0,isActive:Pt},{to:"/about-us",label:he.a.t("common:about"),exact:!0,isActive:Pt},{to:"/blog",label:he.a.t("common:blog"),exact:!0,isActive:Pt},{to:"/help",label:he.a.t("common:help"),exact:!0,isActive:Pt}],Nt=Object(le.a)((({open:e,toggleMobileNavMenu:t,authenticated:i})=>{const{t:n}=Object(Ee.a)("common"),o=Object(s.g)(),r=Object(pe.f)(),l=e=>{o.push(e),t()};return a.a.useEffect((()=>(document.querySelector("body").style.overflow=e?"hidden":"auto",()=>{document.querySelector("body").style.overflow="auto"})),[e]),a.a.createElement(Vt,{className:e?"open":""},a.a.createElement(Dt,null,a.a.createElement(zt,null,a.a.createElement(Bt,null,a.a.createElement("button",{onClick:t,type:"button"},a.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M15 1L1 15",stroke:"#FAE8D1",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M15 15L1 1",stroke:"#FAE8D1",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.a.createElement("div",{className:"V3LogoWrapper",onClick:()=>{l("/")}},a.a.createElement(Tt.a,{type:"light"})))),Lt.map((({label:e,withHref:t,...i})=>a.a.createElement(zt,{key:e},t?a.a.createElement(Ft,{href:i.to},e):a.a.createElement(Mt,{onClick:()=>l(i.to)},e)))),a.a.createElement("div",{className:"btnContainer"},!i&&a.a.createElement(gt.a,{className:"whiteTransparent",onClick:()=>{l("/login")}},n("login:login")),a.a.createElement(gt.a,{onClick:()=>{r.user.signUpModalToggle(!0),Z.a.capture("click_get_started",{})}},n("get-started")))))})),Vt=de.e.div`
    position: fixed;
    background: #242e35;
    right: 0;
    left: 0;
    height: 100%;
    z-index: 9999;
    top: -110%;
    bottom: 110%;
    transition: 0.8s;
    overflow: auto;

    &.open {
        top: 0;
        bottom: 0;
    }

    .btnContainer {
        flex-shrink: 0;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        padding: 44px 0 20px;
    }

    ${gt.a} {
        border-radius: 3px;
        height: 50px;
        width: 100%;
        max-width: 154px;
        margin: 10px;

        &.whiteTransparent {
            background-color: transparent;
            border: 1px solid #fff;
        }
    }
`,Dt=de.e.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    .V3LogoWrapper {
        height: 100%;
    }
`,zt=de.e.div`
    flex-shrink: 0;
    height: 81px;
    border-bottom: 1px solid #efddc7;
    padding: 0 24px;
    display: flex;
    align-items: center;
    color: #efddc7;

    a {
        font-family: VinovestMono;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`,Bt=de.e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    button {
        background: transparent;
        border: 0;
        outline: 0;
        position: absolute;
        left: 33px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }
`,Rt="    \n    font-family: VinovestMono;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 26px;\n    display: flex;\n    align-items: center;\n    text-transform: uppercase;\n    color: #EFDDC7;\n",Ft=de.e.a`
    ${Rt};
    text-decoration: none;
`,Mt=de.e.button`
    ${Rt};
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`;var qt=Nt;const Wt=de.e.svg`
    background-color: transparent !important;

    &.light {
        line {
            stroke: #242e35;
        }
    }

    &.green {
        line {
            stroke: #513011;
        }
    }

    &.blue {
        line {
            stroke: #3c400c;
        }
    }

    &.darkBlue {
        line {
            stroke: #efddc7;
        }
    }
`;var Ht=({colorClassName:e})=>a.a.createElement(Wt,{width:"32",height:"22",viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e},a.a.createElement("line",{y1:"1",x2:"32",y2:"1",strokeWidth:"2"}),a.a.createElement("line",{y1:"11",x2:"32",y2:"11",strokeWidth:"2"}),a.a.createElement("line",{y1:"21",x2:"32",y2:"21",strokeWidth:"2"})),Ut=i(388),Yt=i.n(Ut);const Gt=({condition:e,children:t})=>{const{search:i}=Object(s.h)();return e?a.a.createElement(re.b,{to:{pathname:"/",search:i}},t):t},Jt=({routetoInvite:e,toggleMobileNavMenu:t,classNameHeader:i,isOnboarding:n,logoType:o,isSticky:r,pathname:s,isAddFunds:l,authenticated:c,routeToDeposit:d,routeToSignup:u})=>{const{t:p}=Object(Ee.a)("common");return a.a.createElement(kt,{className:r?"sticky":""},!s.includes("personalize")&&!l&&a.a.createElement(a.a.Fragment,null,c?a.a.createElement(Zt,{onClick:e},a.a.createElement("img",{src:Yt.a,alt:"referral-badge"})):a.a.createElement($t,{onClick:t},a.a.createElement(Ht,{colorClassName:i||"light"}))),a.a.createElement(yt,{isCompact:r},a.a.createElement(Gt,{condition:!n},a.a.createElement(Tt.a,{isCompact:r,type:r?"standard":o}))),r&&!s.includes("personalize")&&!l&&!c&&a.a.createElement(Kt,null,a.a.createElement(gt.a,{id:"nav-deposit-button",onClick:u},p("get-started"))),!s.includes("personalize")&&!l&&c&&a.a.createElement(Kt,null,a.a.createElement(gt.a,{id:"nav-deposit-button",onClick:d},p("navigation.funds"))))},$t=de.e.div`
    height: fit-content;
    &:hover {
        cursor: pointer;
    }
`,Kt=de.e.div`
    height: fit-content;
    #nav-deposit-button {
        height: 37px;
        line-height: initial;
        font-size: 12px;
        padding: 7px 10px 6px;
        @media screen and (max-width: 340px) {
            white-space: nowrap;
            position: relative;
            right: -9px;
        }
    }
`,Zt=de.e.a`
    height: fit-content;
    cursor: pointer;
`;var Qt=({heightMobile:e,routetoInvite:t,toggleMobileNavMenu:i,classNameHeader:n,isOnboarding:o,logoType:r,isSticky:s,pathname:l,isAddFunds:c,authenticated:d,routeToDeposit:u,routeToSignup:p})=>a.a.createElement(At,{className:s||c?"sticky":""},a.a.createElement(jt,{className:s||c?"openNavBar":"closeBavBar"},a.a.createElement(xt,{isSticky:!0,height:e,className:"darkBlue darkBlue__constant sticky"},a.a.createElement(Jt,{routetoInvite:t,toggleMobileNavMenu:i,classNameHeader:"light",isOnboarding:o,logoType:r,isSticky:!0,pathname:l,isAddFunds:c,authenticated:d,routeToDeposit:u,routeToSignup:p}))),!c&&a.a.createElement(jt,{className:"outFromHtml "+(s?"closeBavBar":"openNavBar")},a.a.createElement(xt,{isSticky:!1,height:e},a.a.createElement(Jt,{routetoInvite:t,toggleMobileNavMenu:i,classNameHeader:n,isOnboarding:o,logoType:r,isSticky:!1,pathname:l,isAddFunds:c,authenticated:d,routeToDeposit:u,routeToSignup:p})))),Xt=i(12),ei=i(392),ti=i.n(ei);const ii={to:"/account",label:"Account",exact:!0,isActive:(e,t)=>"/account"===t.pathname};var ni=i(125);function ai(){return(ai=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}const oi=Object(le.a)((({authenticated:e,linkClassName:t,isSticky:i})=>{const n=Object(pe.f)(),{t:o}=Object(Ee.a)(["common"]),{pathname:r,search:l}=Object(s.h)(),c=Object(pe.b)("/deposit/add-funds",ni.a.AddFunds);if(r.includes("personalize"))return null;const d=n.transfer.pendingDeposits.length,u=Object(m.b)(),p=e||u?It:Lt;return a.a.createElement(_t,null,a.a.createElement(Et,null,p.map((({label:e,withHref:n,...o})=>a.a.createElement(a.a.Fragment,{key:e},n?a.a.createElement(Xt.f,{href:o.to,className:i?"":t},e):a.a.createElement(Xt.h,{to:{pathname:o.to,search:l},isActive:o.isActive,exact:o.exact,className:i?"":t},"Transactions"===e&&d?a.a.createElement(St,null,d):null,e))))),a.a.createElement(Ot,null,e?a.a.createElement(a.a.Fragment,null,a.a.createElement(Xt.h,ai({},ii,{className:"account"}),a.a.createElement("img",{src:ti.a,alt:"account"})),a.a.createElement(gt.a,{id:"nav-deposit-button",onClick:c},o("navigation.funds"))):a.a.createElement(a.a.Fragment,null,a.a.createElement(Xt.h,{to:"/login",className:`login ${i?"":t}`},o("login:login")),a.a.createElement(gt.a,{id:"nav-deposit-button",onClick:()=>n.user.signUpModalToggle(!0)},o("common:get-started")))))})),ri=({isSticky:e,isOnboarding:t,logoType:i,authenticated:n,classNameHeader:o,height:r,isAddFunds:s})=>a.a.createElement(xt,{isSticky:e,height:r,className:`${o} ${s?"withBorder":""}`},a.a.createElement(kt,null,a.a.createElement(yt,{isCompact:e},a.a.createElement(Gt,{condition:!t},a.a.createElement(Tt.a,{isCompact:e,type:i})))),!s&&a.a.createElement(oi,{authenticated:n,linkClassName:o,isSticky:e}));var si=({classNameHeader:e,isOnboarding:t,logoType:i,isSticky:n,height:o,isAddFunds:r,authenticated:s,pagesWithAnimation:l})=>l?a.a.createElement(At,{className:n?"sticky":""},a.a.createElement(jt,{className:"outFromHtml "+(n?"closeBavBar":"openNavBar")},a.a.createElement(ri,{isSticky:!1,isOnboarding:t,logoType:i,authenticated:s,classNameHeader:e,height:o,isAddFunds:r})),a.a.createElement(jt,{className:""+(n?"openNavBar":"closeBavBar")},a.a.createElement(ri,{isSticky:!0,isOnboarding:t,logoType:"standard",authenticated:s,classNameHeader:"darkBlue darkBlue__constant sticky",height:o,isAddFunds:r}))):a.a.createElement(ri,{isSticky:!0,isOnboarding:t,logoType:i,authenticated:s,classNameHeader:"darkBlue darkBlue__constant "+(n?"withConstantShadow":""),height:o,isAddFunds:r});const li=["/vinovest-100-index","/why-wine","/advisors","/wine-futures","/home","/about-us","/how-it-works","/sustainability","/"],ci=Object(le.a)((({shouldShowCalendlyBanner:e})=>{const t=Object(pe.f)(),{pathname:i}=Object(s.h)(),o=Object(pe.b)("/deposit/add-funds",ni.a.AddFunds),r=Object(pe.b)("/invite"),[l,c]=a.a.useState(!1),d=()=>c((e=>!e)),u=Object(pe.d)(1023),p=Object(n.useMemo)((()=>i.includes("personalize")),[i]),h=Object(n.useMemo)((()=>i.includes("deposit")),[i]),f=t.auth.isAuthenticated||Object(m.b)(),{isSticky:g,topOffset:b}=lt({offset:60,skipOffset:e?60:0}),y=e?"150px":"90px",v=e?"140px":"80px",{classNameHeader:w,logoType:x}=(({authenticated:e,isMobile:t,pathname:i,isSticky:n})=>{let a="",o="standard";return!e&&["/home","/"].includes(i)&&(a=t?"light":"transparent",n||t||(o="light")),["/home"].includes(i)&&(a=t?"light":"transparent",n||t||(o="light")),["/about-us"].includes(i)&&(a="light"),i.includes("/how-it-works")&&(a="green",o="brown"),i.includes("/sustainability")&&(a="blue",o="green"),["/vinovest-100-index","/why-wine","/advisors","/wine-futures"].includes(i)&&(a="darkBlue",o="light"),{classNameHeader:a,logoType:o}})({authenticated:f,isMobile:u,pathname:i,isSticky:g}),k=["/login","/reset_password","/signup"].includes(window.location.pathname)||window.location.pathname.includes("/implicit"),E=a.a.useMemo((()=>f?li.slice(0,li.length-1):li),[f]).includes(i);return a.a.createElement(a.a.Fragment,null,u&&a.a.createElement(qt,{open:l,toggleMobileNavMenu:d,authenticated:f}),!k&&a.a.createElement(vt,{height:u?v:y,className:w},a.a.createElement(wt,{sticky:g},e&&a.a.createElement(ht,{offset:b}),u?a.a.createElement(Qt,{className:w,heightMobile:"80px",routetoInvite:r,toggleMobileNavMenu:d,classNameHeader:w,isOnboarding:p,logoType:x,isSticky:g||f&&!E,pathname:i,isAddFunds:h,authenticated:f,routeToDeposit:o,routeToSignup:()=>t.user.signUpModalToggle(!0)}):a.a.createElement(si,{classNameHeader:w,isOnboarding:p,logoType:x,isSticky:g,height:"90px",isAddFunds:h,authenticated:f,pagesWithAnimation:E}))))})),di=()=>a.a.createElement("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 1C19.6273 1 25 6.37273 25 13C25 19.6273 19.6273 25 13 25C6.37273 25 1 19.6273 1 13C1 6.37273 6.37273 1 13 1V1Z",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.9984 17.3632V17.3632C10.5886 17.3632 8.63477 15.4094 8.63477 12.9996V10.8177C8.63477 8.40792 10.5886 6.4541 12.9984 6.4541C15.4082 6.4541 17.362 8.40792 17.362 10.8177V12.9996C17.362 15.4094 15.4082 17.3632 12.9984 17.3632V17.3632Z",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M19 23.5C17.9182 22.0251 16.2748 20.5 14.4731 20.5H11.5227C9.70632 20.5 8.08277 21.9967 7 23.492",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}));var ui=i(57);const pi={overview:{svg:()=>a.a.createElement("svg",{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.64706 1L0.999996 9V22H6.7647V15H12.5294V22H18.2941V9L9.64706 1Z",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),path:"/",title:he.a.t("common:overview")},portfolio:{svg:()=>a.a.createElement("svg",{width:"14",height:"24",viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M6 6H8",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.71429 8.36364V1H5.28571V8.36364L2.93029 10.1628C1.71057 11.0939 1 12.5045 1 13.996V23H13V13.996C13 12.5045 12.2894 11.0939 11.0697 10.1628L8.71429 8.36364Z",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),path:"/portfolio",title:he.a.t("common:portfolio")},transactions:{svg:()=>a.a.createElement("svg",{width:"22",height:"21",viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 5.11768H14.7641H1Z",fill:"white"}),a.a.createElement("path",{d:"M1 5.11768H14.7641",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 15.7051H7.23593H21Z",fill:"white"}),a.a.createElement("path",{d:"M21 15.7051H7.23593",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.117 9.23492V1L20.9991 5.11746L15.117 9.23492Z",fill:"white",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.88208 11.5879V19.8228L1 15.7053L6.88208 11.5879Z",fill:"white",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),path:"/transactions",title:he.a.t("common:transactions")},documents:{svg:({isActive:e})=>e?a.a.createElement("svg",{width:"24",height:"23",viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.27278 3.86379H1.50009V3.38653C1.50009 2.06831 2.56822 1.00018 3.88643 1.00018C5.20465 1.00018 6.27278 2.06831 6.27278 3.38653V3.86379Z",fill:"#A86D37",stroke:"#A86D37",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.0455 19.1364V19.6137C11.0455 21.7614 8.65912 22 8.65912 22H20.1136C21.4318 22 22.4999 20.9319 22.4999 19.6137V19.1364H11.0455Z",fill:"#A86D37",stroke:"#A86D37",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.6363 19.1362V3.38634C19.6363 2.06813 18.5682 1 17.25 1H3.88644C5.20466 1 6.27279 2.06813 6.27279 3.38634V19.6135C6.27279 20.9317 7.34091 21.9998 8.65913 21.9998H19.6363",fill:"#A86D37"}),a.a.createElement("path",{d:"M19.6363 19.1362V3.38634C19.6363 2.06813 18.5682 1 17.25 1H3.88644C5.20466 1 6.27279 2.06813 6.27279 3.38634V19.6135C6.27279 20.9317 7.34091 21.9998 8.65913 21.9998H19.6363",stroke:"#A86D37",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M10.0909 5.77289H15.8181",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M10.0909 9.591H15.8181",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M10.0909 13.4092H15.8181",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})):a.a.createElement("svg",{width:"24",height:"23",viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.0454 19.1365V19.6137C11.0454 21.7615 8.65903 22.0001 8.65903 22.0001H20.1135C21.4317 22.0001 22.4998 20.932 22.4998 19.6137V19.1365H11.0454V19.1365Z",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.27278 3.86385H1.50009V3.38659C1.50009 2.06837 2.56822 1.00024 3.88643 1.00024V1.00024C5.20465 1.00024 6.27278 2.06837 6.27278 3.38659V3.86385V3.86385Z",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M19.6363 19.1362V3.38634C19.6363 2.06813 18.5682 1 17.25 1H3.88644C5.20466 1 6.27279 2.06813 6.27279 3.38634V19.6135C6.27279 20.9317 7.34091 21.9998 8.65913 21.9998H19.6363",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M10.0909 5.77283H15.8181",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M10.0909 9.59106H15.8181",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M10.0909 13.4092H15.8181",stroke:"#242E35",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),path:"/documents/account_statements",title:he.a.t("common:documents")},account:{svg:di,path:"/account",title:he.a.t("common:account")}},hi=({nav:e,isInverted:t,cancelFill:i,exceptiveActive:o,updates:r,onClick:l,keepInactive:c})=>{const{pathname:d,search:u}=Object(s.h)(),p=Object(n.useMemo)((()=>pi[e]),[e]),h=Object(n.useMemo)((()=>p.svg),[p]),m=Object(n.useMemo)((()=>p.title),[p]),f=d===p.path||o;return a.a.createElement(yi,{isActive:f&&!c,isInverted:t,cancelFill:i},r?a.a.createElement(vi,null,r):null,a.a.createElement(ue.a,{to:{pathname:p.path,search:u},onClick:e=>l(e)},a.a.createElement(h,{isActive:f&&!c}),a.a.createElement("span",null,m)))},mi=e=>{const{t}=Object(Ee.a)("account"),i=Object(pe.c)();return a.a.createElement(wi,{className:[e.className,e.height]},a.a.createElement(xi,null,a.a.createElement(ki,null,t("main.user_settings")),a.a.createElement(ue.a,{to:"/account",onClick:t=>e.onClick(t)},t("user_settings.account"),a.a.createElement(ui.b,{fill:"#242E35"})),a.a.createElement(ue.a,{to:"/account/email",onClick:t=>e.onClick(t)},t("account_email.email"),a.a.createElement(ui.b,{fill:"#242E35"})),a.a.createElement(ue.a,{to:"/account/phone",onClick:t=>e.onClick(t)},t("user_settings.phone"),a.a.createElement(ui.b,{fill:"#242E35"}))),a.a.createElement(xi,null,a.a.createElement(ki,null,t("main.account")),a.a.createElement(ue.a,{to:"/account/investment-plan",onClick:t=>e.onClick(t)},t("account_investment_plan.title"),a.a.createElement(ui.b,{fill:"#242E35"})),a.a.createElement(ue.a,{to:"/account/auto-invest",onClick:t=>e.onClick(t)},t("account_settings.auto_invest"),a.a.createElement(ui.b,{fill:"#242E35"})),a.a.createElement(ue.a,{to:"/account/sell",onClick:t=>e.onClick(t)},t("account_settings.sell_wine"),a.a.createElement(ui.b,{fill:"#242E35"}))),a.a.createElement(xi,null,a.a.createElement(ki,null,t("support.title")),a.a.createElement("a",{href:"https://www.vinovest.co/faq",onClick:t=>e.onClick(t)},t("support.help_support"),a.a.createElement(ui.b,{fill:"#242E35"})),a.a.createElement("a",{href:"https://www.vinovest.co/terms-conditions",onClick:t=>e.onClick(t)},t("support.terms_condition"),a.a.createElement(ui.b,{fill:"#242E35"})),a.a.createElement("a",{href:"https://www.vinovest.co/privacy-policy",onClick:t=>e.onClick(t)},t("support.privacy_policy"),a.a.createElement(ui.b,{fill:"#242E35"}))),a.a.createElement("button",{type:"button",className:"accent",onClick:i},t("main.logout")))},fi=Object(le.a)((({shouldShowCalendlyBanner:e})=>{const t=Object(pe.f)(),i=Object(pe.a)(),{pathname:o}=Object(s.h)(),r=Object(n.useMemo)((()=>t.auth.isAuthenticated),[t.auth.isAuthenticated]),[l,c]=Object(n.useState)(!1),d=()=>c(!l),u=()=>c(!1),p=e?"tall":"short",{t:h}=Object(Ee.a)("account");return!r||o.includes("personalize")||o.includes("deposit")?null:a.a.createElement(a.a.Fragment,null,a.a.createElement(mi,{onClick:d,className:l?"open":"",height:p}),a.a.createElement(gi,null,a.a.createElement(hi,{nav:"overview",onClick:u,keepInactive:l}),a.a.createElement(hi,{nav:"portfolio",onClick:u,keepInactive:l}),i.feature.transactionsFeed.enabled&&a.a.createElement(hi,{nav:"transactions",updates:t.transfer.pendingDeposits.length,onClick:u,keepInactive:l}),a.a.createElement(hi,{nav:"documents",exceptiveActive:o.includes("documents"),cancelFill:!0,onClick:u,keepInactive:l}),a.a.createElement(bi,{className:l?"active":"",onClick:d},a.a.createElement(di,null),a.a.createElement("span",null,h("main.account")))))})),gi=de.e.div`
    height: 65px;
    background: ${e=>e.theme.colors.white};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
    z-index: 3000000000;

    width: 100%;
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;
`,bi=de.e.button`
    background: transparent;
    border: 0;
    font-size: 10px;
    line-height: 21px;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        margin-bottom: 4px;
    }

    &.active {
        color: ${e=>e.theme.colors.burntOrange};

        svg {
            fill: ${e=>e.theme.colors.burntOrange};

            path {
                stroke: #fff;
            }
        }
    }
`,yi=de.e.div`
    position: relative;
    a {
        text-decoration: none;
        color: #242e35;
        font-size: 10px;
        line-height: 21px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    svg {
        margin-bottom: 4px;
    }
    ${e=>e.isActive&&!e.cancelFill&&`svg {\n            fill: ${e.theme.colors.burntOrange};\n            path {\n                stroke: ${e.isInverted?"white":e.theme.colors.burntOrange};\n            }\n        }\n\n    `}
    ${e=>e.isActive&&`span {\n            color: ${e.theme.colors.burntOrange};\n        }\n    `}
`,vi=Object(de.e)(Ct)`
    position: absolute;
    top: -6px;
    right: 0;
    transform: translateX(50%);
`,wi=de.e.div`
    background: #fff;
    bottom: 65px;
    border-top: 1px solid #eee;
    overflow-x: hidden;
    padding: 0 1.5rem;
    position: fixed;
    right: 0;
    transition: 0.5s;
    transform: translateX(1200px);
    width: 100%;
    z-index: 10;

    &.open {
        transform: translateX(0px);
    }

    &.tall {
        top: 124px;
    }

    &.short {
        top: 64px;
    }

    .accent {
        color: ${e=>e.theme.colors.burntOrange};
    }

    a,
    button {
        font-family: FavoritMonoStd;
        background: transparent;
        display: flex;
        justify-content: space-between;
        font-size: 0.875rem;
        outline: none;
        border: none;
        color: ${e=>e.emphasis?e.theme.colors.burntOrange:e.theme.colors.mainAccentBlue};
        cursor: pointer;
        text-transform: uppercase;
        padding: 1rem 0;
        text-decoration: none;
        text-align: left;
        width: 100%;
    }
`,xi=de.e.div`
    border-bottom: 1px solid #eee;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`,ki=de.e.div`
    font-size: 1.25rem;
    font-family: RoslindaleDisplayCondensed;
    padding: 1rem 0;
`;var Ei=i(682),Oi=i(156),_i=i.n(Oi);var Ci=e=>{const{t}=Object(Ee.a)("common"),{error:i,componentStack:a,resetError:o}=e;return n.createElement(Si,null,n.createElement(Ai,null,t("error-boundry.title")),n.createElement(ji,{src:_i.a}),n.createElement(Ti,null,n.createElement("p",null,t("error-boundry.description")),n.createElement("p",null,t("error-boundry.hold"))),n.createElement(Li,{onClick:()=>{window.location.href="/login",o()}},t("error-boundry.button-retry")),n.createElement(Pi,null,t("error-boundry.error")),n.createElement(Ii,null,`"${i}"`))};const Si=de.e.div`
    font-family: ${e=>e.theme.fonts.body};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;
    height: 90vh;
    padding: 15px;
    color: ${e=>e.theme.colors.mainAccentBlue};
    ${e=>e.theme.media.greaterThan("768px")`
    height: 80vh;
  `}
`,Ai=de.e.div`
    font-family: ${e=>e.theme.fonts.title};
    margin-bottom: 32px;

    font-size: 36px;
    ${e=>e.theme.media.greaterThan("768px")`
    font-size: 42px;
  `}
`,ji=de.e.img`
    margin-bottom: 32px;
`,Ti=de.e.div`
    text-align: center;
    margin-bottom: 28px;

    font-size: 16px;
    line-height: 24px;
    ${e=>e.theme.media.greaterThan("768px")`
    font-size: 18px;
    line-height: 30px;
  `}

    p {
        margin: 0;
    }
`,Pi=de.e.label`
    font-family: ${e=>e.theme.fonts.label};
    font-size: 12px;
    text-transform: uppercase;
    width: 100%;
    text-align: left;
    max-width: 500px;
`,Ii=de.e.div`
    background: ${e=>e.theme.colors.lightGray};
    font-family: ${e=>e.theme.fonts.label};
    text-transform: uppercase;
    font-size: 12px;
    line-height: 18px;
    padding: 20px;
    width: 100%;
    max-width: 500px;
`,Li=Object(de.e)(Xt.g)`
    margin: 0 0 72px 0 !important;
    max-width: 500px !important;
`;var Ni=i(101);var Vi=function({children:e,disabled:t}){const{startDate:i,endDate:a}=Object(ie.b)(),{user:o}=Object(Ni.a)(),r=Object(s.j)({path:[me.a.liquidation,me.a.beforeYouRequest],strict:!0,sensitive:!0}),l=((e,t,{startTime:i,endTime:a,timeDisabled:o})=>{const r=new Date;return Object(n.useCallback)((()=>{(function(e,t,i){const n=e.getUTCHours(),a=t.getUTCHours(),o=i.getUTCHours();return n>=a||n<=o}(r,i,a)||o)&&e()}),[...t,e,i,a,r])})((()=>null!==r&&void 0!==r&&r.path&&!t?(ee.a.alert({...null===o||void 0===o?void 0:o.oktaUserInfo}),ee.a.show()):ee.a.hide()),[r],{startTime:i,endTime:a});return n.useEffect(l,[r]),n.createElement(n.Fragment,null,e)};var Di=({isSecure:e=!1,isProtected:t=(()=>!1),redirectTo:i="/",...a})=>{const o=e?ne.b:s.b;return n.createElement(Ei.a,{fallback:({error:e,componentStack:t,resetError:i})=>n.createElement(Ci,{error:e,resetError:i})},n.createElement(Vi,null,n.createElement(o,a)))},zi=i(212),Bi=i(404),Ri=i(6),Fi=i.n(Ri);const Mi=Fi.a.map(Fi.a.values(zi.b).reverse(),(e=>`@media (min-width: ${e})`)),qi=Object(Bi.a)(Mi),Wi={alerts:{success:"#f0f3e4",error:"#fceeee"},colors:{black:"#000",white:"#FFFFFF",gray:"#636363",green:"#27AE60",red:"#FF4D00",dark:"#242424",lighterGray:"#EEEEEE",lightGray:"#E5E5E5",borderGray:"#CACCCE",disclaimerGray:"#A3A3A3",labelGray:"#767A7F",darkGray:"#707070",darkGrayNeutrals:"#A8ABAD",dark30:"#384147",gray50:"#5B646B",burntOrange:"#A86D37",mainAccentBlue:"#242E35",mainInnerTaupe:"#FAE8D1",lightBlue:"#C5D5E4",darkGreen:"#3C400C",darkBrown:"#513011",lightGreenBeige:"#E0E5CD",lighterGreen:"#448B47",lightPink:"#E6C9C9",lightRed:"#fceeee",darkRed:"#953536",lightGreen:"#f0f3e4"},fonts:{title:"RoslindaleDisplayCondensed",body:"VinovestMedium",label:"VinovestMono"},shadow:{base:"0px 4px 20px rgba(0, 0, 0, 0.3)",v2:"0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08)"},typography:{size:{xs:10,sm:12,md:14,lg:16,xl:18}},borderRadius:4,media:zi.a,mq:qi,modules:{borderRadius:"10px",boxShadow:"0px 4px 40px rgba(0, 0, 0, 0.1)"}};var Hi=i(2),Ui=i(405),Yi=i.n(Ui),Gi=i(103);const Ji="You've Been Invited!",$i="When you deposit now, your 3 months of free wine storage + management will be applied as soon as your transfer clears!",Ki="Deposit And Claim Your Reward",Zi=({showPendingInviteModal:e})=>{const[t,i]=Object(n.useState)(!1);Object(n.useEffect)((()=>{e&&i(!0)}),[e]);const o=Object(n.useCallback)((()=>{i(!1)}),[]),r=Object(n.useCallback)((()=>{o(),document.getElementById("nav-deposit-button").click()}),[o]);return t?a.a.createElement(Gi.a,{isOpen:t,onClose:o},a.a.createElement(Qi,null,a.a.createElement(Xi,null,Ji),a.a.createElement(en,{src:Yi.a}),a.a.createElement(tn,null,$i),a.a.createElement(gt.a,{onClick:r},Ki))):null},Qi=de.e.div`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 36px;

    background: ${e=>e.theme.colors.white};
`,Xi=de.e.div`
    font-family: RoslindaleDisplayCondensed;
    font-size: 29px;
    line-height: 36px;
    margin-bottom: 36px;
`,en=de.e.img`
    margin-bottom: 36px;
`,tn=de.e.div`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 36px;
`;var nn=i(297),an=i(88);i(430);const on=({onClose:e})=>a.a.createElement(Gi.a,{isOpen:!0,onClose:e,additionalStyles:" \n\n    background: transparent;\n    border-radius: 0px;\n    box-shadow: none;\n    width: 100%;\n    max-width: 660px;\n    margin: auto;\n\n    .closeIcon {\n        top: 41px;\n        right: 41px\n    }\n\n    @media screen and (min-width: 1024px) {\n        max-width: 860px;\n    }\n"},a.a.createElement(Xt.e,{in:!0},a.a.createElement(sn,null,a.a.createElement(rn,null),a.a.createElement(cn,null,a.a.createElement(nn.a,{modalMode:!0}))))),rn=()=>{const{t:e}=Object(Ee.a)(["invite"]);return a.a.createElement(ln,null,a.a.createElement(dn,null,a.a.createElement("div",null,e("shareTheWealth")),a.a.createElement("div",null,e("get3MonthsOfNoFees"))),a.a.createElement(un,null,a.a.createElement(an.b,null),a.a.createElement(an.a,null)),a.a.createElement(pn,null,e("helpEveryoneGrowTheirMoney")),a.a.createElement(pn,{className:"gupMobile"},e("cheersToYouBoth")))},sn=de.e.div`
    width: auto;
    padding: 50px 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 11px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    ${({theme:e})=>e.media.greaterThan("1024px")`
        padding: 78px 53px 104px;
        margin: 0;
    `}
`,ln=de.e.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,cn=de.e.div`
    width: 100%;
    max-width: 478px;
`,dn=de.e.div`
    font-family: RoslindaleDisplayCondensed;
    text-align: center;
    font-size: 32px;
    line-height: 41px;
    position: relative;
    z-index: 1;
    margin-bottom: 17px;

    ${({theme:e})=>e.media.greaterThan("1024px")`
        font-size: 48px;
        line-height: 64px;
        margin-bottom: 24px;
    `}
`,un=de.e.div`
    display: none;
    justify-content: space-between;

    svg {
        max-width: 124px;
        width: 100%;
    }

    ${({theme:e})=>e.media.greaterThan("1024px")`
       display: flex;
       top: 0;
        right:53px;
        left: 53px;
        position: absolute;
    `}
`,pn=de.e.div`
    margin-bottom: 26px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #000000;
    max-width: 637px;
    width: 100%;

    &.gupMobile {
        margin-bottom: 9px;
    }

    ${({theme:e})=>e.media.greaterThan("1024px")`
        font-size: 16px;
        line-height: 26px;

        &.gupMobile {
            margin-bottom: 26px;
        }
    `}
`;var hn=i(228);var mn=()=>{const{pathname:e}=Object(s.h)(),t=Object(pe.a)();return Object(n.useEffect)((()=>{["/about-us","/blog"].includes(e)||window.scrollTo(0,0),window.localStorage.getItem(t.saveLastRouterPaths)||window.localStorage.setItem(t.saveLastRouterPaths,"[]");const i=JSON.parse(window.localStorage.getItem(t.saveLastRouterPaths)),n=[i[i.length-1],e];window.localStorage.setItem(t.saveLastRouterPaths,JSON.stringify(n))}),[t.saveLastRouterPaths,e]),null};var fn=Object(le.a)((()=>{const e=Object(pe.f)(),t=Object(s.h)(),i=a.a.useMemo((()=>["/reset_password","/login","/signup"].includes(t.pathname)||e.user.signUpModalWindow||e.auth.isAuthenticated),[t.pathname,e.auth.isAuthenticated,e.user.signUpModalWindow]);return a.a.useEffect((()=>{if(i){let e=10,t=null,i=null;const n=()=>{t=window._omapp.campaigns&&window._omapp.campaigns.iismieus4wp30gzhg2yh,t&&t.off()};return window._omapp?n():i=setInterval((()=>{e--&&!window._omapp||clearInterval(i),window._omapp&&n()}),500),()=>{i&&clearInterval(i),t&&window._omapp&&window._omapp.campaigns&&!window._omapp.campaigns.iismieus4wp30gzhg2yh&&(window._omapp.campaigns.iismieus4wp30gzhg2yh=t,window._omapp.reset())}}}),[i]),null})),gn=i(298),bn=i.n(gn),yn=i(225),vn=i(214),wn=i(107);const xn=de.e.div`
  width: 100%;
  max-width: 340px;
  
  ${({theme:e})=>e.media.greaterThan("320px")`
        max-width: 270px;
        font-size: 32px;
    `}
  ${({theme:e})=>e.media.greaterThan("375px")`
        max-width: 340px;
    `}
  ${({theme:e})=>e.media.greaterThan("414px")`
        max-width: 367px;
    `}
`,kn=Object(de.e)(wn.a)`
  width: 100%;
  
  ${({theme:e})=>e.media.greaterThan("768px")`
        max-width: 367px;
        margin: 0;
    `}
`,En=Object(de.e)(vn.f)`
  color: #242e35;
  font-size: 38px;
  margin: 20px 0px 10px;
  font-weight: 500;
  width: 100%;

  ${({theme:e})=>e.media.greaterThan("320px")`
        font-size: 32px;
    `} 
  ${({theme:e})=>e.media.greaterThan("375px")`
        font-size: 34px;
    `}
  ${({theme:e})=>e.media.greaterThan("768px")`
        font-size: 38px;
    `}
`,On=de.e.input`
  padding: 8px 12px;
  margin-bottom: 25px;
  border: 2px solid #242424;
  font-size: 20px;
  width: 100%;
  height: 60px;
  color: #242e35;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #242e35;
  }
`,_n=de.e.p`
  font-family: FavoritStd;
  width: 100%;
  margin-top: 13px;
  color: #a3a3a3;
  font-size: 11px;
  line-height: 20px;
  text-align: left;
  font-weight: 500;
  text-transform: uppercase;

  a {
    text-decoration: underline;
    color: #a3a3a3;
    text-transform: uppercase;
  }
`,Cn=de.e.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 11px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  
  ${({theme:e})=>e.media.greaterThan("320px")`
        padding-top: 70px;
        margin: 0;
    `}
  ${({theme:e})=>e.media.greaterThan("375px")`
        padding-top: 70px;
        margin: 0;
    `}

  ${({theme:e})=>e.media.greaterThan("1024px")`
        padding: 110px 53px 20px;
        margin: 0;
    `}
`,Sn=de.e.div`
  margin-top: 60px;
  margin-bottom: 8px;
  font-family: Favoritmonostd, sans-serif;
  color: #242e35;
  text-align: center;
  font-size: 11px;
  text-transform: uppercase;
`;var An=Object(le.a)((()=>{const{t:e}=Object(Ee.a)(["sign-up-modal"]),t=Object(pe.f)(),[i,n]=a.a.useState(""),o=Object(pe.b)("/signup"),r=()=>{t.user.signUpModalToggle(!1)};return t.user.signUpModalWindow?a.a.createElement(Gi.a,{isOpen:!0,additionalStyles:"\n    width: 100%;\n    box-shadow: none;\n    max-height: 575px;\n    max-width: 500px;\n    margin: 0 9px;    \n",onClose:()=>{t.user.signUpModalToggle()}},a.a.createElement(Xt.e,{in:!0},a.a.createElement(Cn,null,a.a.createElement(xn,null,a.a.createElement(En,null,e("title")),a.a.createElement("form",{onSubmit:e=>{e.preventDefault(),document.cookie=`${_.c.KEY}=${i};domain=${_.c.CONFIG.domain};path=${_.c.CONFIG.path};`,n(""),o(),r()}},a.a.createElement(On,{required:!0,type:"email",placeholder:e("email_placeholder"),value:i,onChange:e=>{n(e.target.value)}}),a.a.createElement(kn,null,e("email_placeholder"))),a.a.createElement(_n,null,e("disclaimer")," ",a.a.createElement(re.b,{onClick:r,to:me.a.privacyPolicy},e("privacy"))," ",e("end")," ",a.a.createElement(re.b,{onClick:r,to:me.a.terms},e("terms"))," ","."),a.a.createElement(Sn,null,e("available_to_clients")),a.a.createElement(yn.l,{src:bn.a,alt:"flags"}))))):null}));const jn="fUYARp2LTwqfdf7DVVe9Zw";var Tn=({setVariant:e,oktaUserEntity:t})=>{const i=Object(s.h)().pathname.includes("personalize"),n=a.a.useMemo((()=>{const{email:e}=Object(Hi.e)(t);return`${e}_storePhoneNumberABVariant`}),[t]);return a.a.useEffect((()=>{let t,a=0;if(i)e(window.localStorage.getItem(n)||"0");else if(void 0!==window.google_optimize&&!window.google_optimize.get(jn)){return(async()=>{window.dataLayer&&(await window.dataLayer.push({event:"CheckPhoneNumberABVariant"}),t=setInterval((()=>{if(void 0!==window.google_optimize){const i=window.google_optimize.get(jn);i?(e(i),window.localStorage.setItem(n,i),clearInterval(t)):++a>20&&(e("0"),clearInterval(t))}}),100))})(),()=>{clearInterval(t)}}}),[]),null};function Pn(){return(Pn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}const In=()=>{localStorage.setItem(_.e.KEY,JSON.stringify(oe()(window.location,["pathname","search"])));const e=O.a.get(_.c.KEY)?"signup":"login";window.location.href=`/${e}`},Ln=Object(le.a)((()=>{const e=Object(pe.f)(),t=Object(s.h)(),{oktaAuth:i,authState:o}=Object(ne.d)(),r=Object(pe.d)(1023),l=Object(pe.b)(),c=Object(n.useMemo)((()=>Object(Hi.f)(e.user.oktaUserEntity).isDone()&&Object(Hi.f)(e.user.profileEntity).isDone()),[e.user.oktaUserEntity,e.user.profileEntity]),d=Object(n.useMemo)((()=>!("Standard"===e.portfolio.accountLevel&&e.portfolio.totalAccountValue>0||!e.auth.isAuthenticated)&&["/","/portfolio","/invite"].includes(t.pathname)),[t,e.portfolio.totalAccountValue,e.portfolio.accountLevel,e.auth.isAuthenticated]),p=Object(n.useMemo)((()=>e.referral.hasPendingReferralInvite&&["/"].includes(t.pathname)&&!e.transfer.transferInProgress),[t,e.referral.hasPendingReferralInvite,e.transfer.transferInProgress]);Object(n.useEffect)((()=>{e.auth.accessToken||e.auth.checkAndSetAJwt(o)}),[o,e.auth,e.auth.isAuthenticated]),Object(n.useEffect)((()=>{const e=new URLSearchParams(t.search).get("grsf");e&&O.a.set(_.f.KEY,e,_.f.CONFIG)}),[t]),Object(n.useEffect)((()=>{e.auth.isAuthenticated&&(async()=>{await e.user.requestUserDetailsFromOkta(i),e.transfer.fetchBidsActive(),e.transfer.fetchShouldShowAccountSubscriptionEntity(),await Promise.all([e.user.fetchProfile(),e.deposit.fetchReferenceKey(),e.portfolio.fetchPortfolioTotals()]),await e.referral.pollForUserReferralDetails(4),await e.referral.validateReferralInviteIfExists()})()}),[o,i,e,e.auth.isAuthenticated]),Object(n.useEffect)((()=>{if(Object(Hi.f)(e.user.oktaUserEntity).isDone()){const t=localStorage.getItem(_.a.KEY);t===_.a.SIGNUP&&(e.tracking.gtm.trackRegistrationComplete(),e.tracking.gtm.trackCreatePassword(e)),t===_.a.LOGIN&&e.tracking.gtm.trackLoginComplete();const{status:i,...n}=e.user.oktaUserEntity,{sub:a,...o}=e.user.oktaUserInfo;Z.a.identify(a,{...o}),Object(u.c)(n),ee.a.identify(a,{displayName:o.name,...o}),localStorage.removeItem(_.a.KEY)}}),[e.user.oktaUserEntity,e.tracking.gtm,e]),Object(n.useEffect)((()=>{c&&e.user.needsOnboarding&&e.user.phoneNumberABVariant&&!t.pathname.includes("personalize")&&("0"===e.user.phoneNumberABVariant?l("/personalize/start"):l("/personalize/enter-number"))}),[c,e.user.needsOnboarding,l,e.user.phoneNumberABVariant,t.pathname]);const h=!!["/print"].filter((e=>t.pathname.includes(e))).length,m=(e.user.needsOnboarding||t.pathname.includes("personalize"))&&e.user.oktaUserEntity.data&&e.user.oktaUserEntity.data.email;return a.a.createElement("div",{id:"page-wrap"},m&&a.a.createElement(Tn,{setVariant:e.user.setPhoneNumberABVariant,oktaUserEntity:e.user.oktaUserEntity}),!h&&a.a.createElement(ci,{shouldShowCalendlyBanner:d}),a.a.createElement(An,null),a.a.createElement("main",null,a.a.createElement(n.Suspense,{fallback:a.a.createElement(hn.a,{loading:!0})},a.a.createElement(ue.d,null,x.a.map(((e,t)=>a.a.createElement(Di,Pn({},e,{key:e.path})))))),a.a.createElement(Zi,{showPendingInviteModal:p})),!h&&a.a.createElement(a.a.Fragment,null,a.a.createElement(st,null),r&&a.a.createElement(fi,{shouldShowCalendlyBanner:d}),e.referral.referralInviteModalWindowOpen&&a.a.createElement(on,{onClose:e.referral.toggleReferralInviteModalWindowOpen})))}));var Nn=Object(ce.a)((({oktaAuthInstance:e})=>a.a.createElement(de.b,{theme:Wi},a.a.createElement(re.a,null,a.a.createElement(mn,null),a.a.createElement(fn,null),a.a.createElement(ne.c,{onAuthRequired:In,oktaAuth:e},a.a.createElement("div",{id:"outer-container"},a.a.createElement(ue.c,null,a.a.createElement(Ln,null)),a.a.createElement(se.a,{autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,draggable:!0})))))));var Vn,Dn,zn,Bn=new(i(120).OktaAuth)({pkce:ie.a.pkce,redirectUri:ie.a.redirectUri,clientId:ie.a.clientId,issuer:ie.a.issuer,scopes:ie.a.scopes});i(431),i(432);zn=ie.a,te.build(zn),("production"===(null===(Vn=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,APP_ENV:"production",APP_GTM_APPEND:"",APP_SENTRY_TRACING_RATE:"0.05"}))||void 0===Vn?void 0:Vn.NODE_ENV)||"production"===(null===(Dn=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,APP_ENV:"production",APP_GTM_APPEND:"",APP_SENTRY_TRACING_RATE:"0.05"}))||void 0===Dn?void 0:Dn.APP_ENV))&&Object.keys(console).map((e=>{console[e]instanceof Function&&(console[e]=(...e)=>{})}));const Rn=Object(l.a)(),Fn=((e,t)=>{const i=k.build(e,t),n=K.build(window);return X.build(e),{sentry:i,gtm:n}})(ie.a,Rn),Mn=g.build(ie.a),qn=b.a.build(Mn,Fn);r.a.render(n.createElement(c.a,{value:ie.a},n.createElement(b.c,{value:qn},n.createElement(s.c,{history:Rn},n.createElement(Nn,{oktaAuthInstance:Bn})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))},7:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={home:"/",portfolio:"/portfolio",account:"/account",invite:"/invite",login:"/login",signup:"/signup",deposit:"/deposit",transactions:"/transactions",documentsPage:"/documents",beforeYouRequest:"/before-you-liquidate-your-portfolio",liquidation:"/liquidation",scheduledWines:"/scheduled-wines",print:"/print",whyWine:"/why-wine",aboutUs:"/about-us",council:"/advisory-council",advisors:"/advisors",contactUs:"/contact-us",howItWorks:"/how-it-works",sustainability:"/sustainability",pricing:"/pricing",adSlider:"/advisory-council/:id",satisfaction:"/the-vinovest-satisfaction-guarantee",wineFutures:"/wine-futures",terms:"/terms-conditions",vinovestHome:"/home",vinovest100Index:"/vinovest-100-index",privacyPolicy:"/privacy-policy",careers:"/careers",contactSupport:"/contact-support",help:"/help",press:"/press",helpCategory:"/help-category",blog:"/blog",accessibility:"/accessibility",support:"/support",supportCategory:"/support-category"}},72:function(e,t,i){"use strict";var n=i(83),a=i.n(n),o=i(10),r=i(123),s=i(678),l=i(121),c=i(25),d={name:"path",find(e){let t;if("undefined"!==typeof window){const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(i instanceof Array)if("number"===typeof e.lookupFromPathIndex){if("string"!==typeof i[e.lookupFromPathIndex])return;const n=i[e.lookupFromPathIndex].replace("/",""),a=c.j[n];a&&(t=a)}else{const e=i[0].replace("/",""),n=c.j[e];t=n||"en"}}return t}},u={name:"storage",find:e=>window.localStorage||window.sessionStorage?window.sessionStorage.getItem(e):void 0};function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class h{constructor(e,t={}){p(this,"type",void 0),p(this,"detectors",void 0),p(this,"services",void 0),p(this,"options",void 0),p(this,"i18nOptions",void 0),p(this,"storageKey",void 0),this.type="languageDetector",this.detectors={},this.addDetector(d),this.addDetector(u),this.storageKey=c.e,this.init(e,t)}init(e,t={},i={}){this.services=e,this.options={},this.i18nOptions=i}addDetector(e){this.detectors[e.name]=e}detect(e=[]){const{storage:t,path:i}=this.detectors;return i.find(this.options)}cacheUserLanguage(e,t=[]){window.localStorage.setItem(this.storageKey,e),window.sessionStorage.setItem(this.storageKey,e)}}p(h,"type",void 0),h.type="languageDetector";var m=h,f=i(359);const g=o.a;g.use(m).use(f.a).use(r.e).init({returnObjects:!0,debug:!0,fallbackLng:["en"],saveMissing:!0,parseMissingKeyHandler:e=>`translation_key_not_found-${e}`,resources:c.h,ns:c.g.default,react:{bindI18n:"loaded languageChanged",bindI18nStore:"added",useSuspense:!0},interpolation:{escapeValue:!1,format(e,t,i){if(Object(s.a)(e)){const n=c.f[i];return"short"===t?Object(l.a)(e,"PP",{locale:n}):Object(l.a)(e,t,{locale:n})}return"uppercase"===t&&"string"===typeof e?e.toLocaleUpperCase():e instanceof Date?a()(e).format(t):"capitalize"===t&&"string"===typeof e?e.toLocaleLowerCase().replace(/^[a-z]/,(e=>e.toLocaleUpperCase())):e&&"lowercase"===t&&"string"===typeof e?e.toLocaleLowerCase():e}}},(e=>{0})),g.loadNamespaces(c.g.async,(e=>{e&&console.error(e)})),g.on("languageChanged",(e=>{a.a.locale(e),g.locale=c.d[e]||"en",g.route=c.i[g.language]?`/${c.i[g.language]}`:""})),g.locale=c.d[g.language]||"en",g.route=c.i[g.language]?`/${c.i[g.language]}`:"";t.a=g},8:function(e,t,i){"use strict";i.d(t,"d",(function(){return r})),i.d(t,"e",(function(){return s})),i.d(t,"i",(function(){return l})),i.d(t,"h",(function(){return m})),i.d(t,"a",(function(){return f.b})),i.d(t,"g",(function(){return g.a})),i.d(t,"c",(function(){return k})),i.d(t,"f",(function(){return x.a})),i.d(t,"b",(function(){return _}));var n=i(0),a=i.n(n);var o=i(368);var r=e=>Object(o.useMediaQuery)({query:`(max-width: ${e||768}px)`});var s=(e,t)=>{Object(n.useEffect)((()=>{const i=i=>{e.current&&!e.current.contains(i.target)&&t(i)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}}),[e,t])};var l=e=>{const[t,i]=a.a.useState(e),n=a.a.useCallback((()=>i((e=>!e))),[]),o=a.a.useCallback((e=>i(e)),[]);return a.a.useEffect((()=>{o(e)}),[e]),[t,n,o]};var c=i(1),d=i(369),u=i.n(d),p=i(370),h=i.n(p);var m=e=>{const t=Object(n.useContext)(c.a);if(void 0===t)throw new Error("useTheme must be used within a ThemeProvider");return(e?h()(e):u.a)(t)};var f=i(144),g=i(217),b=i(49),y=i(41),v=i(17),w=i(36),x=i(101);const k=()=>{const{oktaAuth:e}=Object(b.d)(),t=Object(y.a)(),i=Object(x.a)();return async()=>{try{await Promise.all([e.signOut("/"),i.auth.resetStateOnLogout()]),v.a.reset(),t.push("/login")}catch(n){w.b(new Error(`User signout failed: ${n}`))}}};var E=i(18),O=i(27);const _=(e,t)=>{const i=Object(E.g)(),a=Object(E.h)();return Object(n.useCallback)((n=>{const o={pathname:Object(O.e)(e)||Object(O.e)(n),search:a.search};i.push(o),v.a.capture(t,{})}),[e,a.search,i,t])}},86:function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return l}));var n=i(1),a=i(27);const o="active",r='\n    font-family: "VinovestMono";\n    text-transform: uppercase;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 22px;\n    margin: 0 40px 0 0;\n    text-align: center;\n    color: inherit;\n    cursor: pointer;\n    text-decoration: none;\n    position: relative;\n',s=Object(n.e)(a.b).attrs({activeClassName:o})`
    ${r};

    &.${o} {
        &:after {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            content: "";
            display: block;
            margin: 0 auto;
            width: 26px;
            border-bottom: 2px solid ${({theme:e})=>e.colors.mainAccentBlue};
            padding-bottom: 5px;
        }
        &.transparent {
            &:after {
                border-bottom: 2px solid #efddc7;
            }
        }

        &.light {
            &:after {
                border-bottom: 2px solid #242e35;
            }
        }

        &.green {
            &:after {
                border-bottom: 2px solid #513011;
            }
        }

        &.blue {
            &:after {
                border-bottom: 2px solid #3c400c;
            }
        }

        &.darkBlue {
            &:after {
                border-bottom: 2px solid #EFDDC7;
            }
        }
    }
`,l=n.e.a`
    ${r};
`},87:function(e,t,i){e.exports=i.p+"static/media/orange-right-arrow.6c1a3e04.svg"},88:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return r})),i.d(t,"e",(function(){return s})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return c}));var n=i(0),a=i.n(n);const o=()=>a.a.createElement("svg",{width:"213",height:"281",viewBox:"0 0 213 281",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M82.0152 146.856C73.9765 147.898 71.9668 141.215 71.9668 137.744C75.735 113.877 86.202 97.3944 114.673 93.9222C143.143 90.4499 160.309 131.235 159.89 137.744C159.472 144.253 156.541 143.819 151.935 146.856C148.586 153.799 140.212 153.365 131.839 149.894C114.254 159.874 103.368 149.894 99.1812 146.856C93.7383 152.931 87.8768 148.592 82.0152 146.856Z",fill:"#EFDDC7"}),a.a.createElement("path",{d:"M119.97 229.659H111.188",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M112.329 204.438C108.15 210.93 97.1359 223.951 101.722 229.758C107.122 235.211 129.043 258.649 139.329 269.685C142.367 272.256 144.85 271.061 148.954 266.547C150.046 265.346 154.122 260.234 155.541 258.203M144.124 243.392H125.829C122.936 235.925 116.572 218.851 114.258 210.281C111.944 201.711 116.018 200.676 120.043 204.438C120.043 204.438 132.149 214.287 141.489 222.633",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M135.779 243.712L140.171 263.912",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M114.351 88.2601C81.6865 88.2739 64.6391 122.071 67.2759 142.091C68.28 149.715 73.0401 151.703 75.9222 151.703C89.3721 182.464 101.861 194.96 112.429 204.573M114.351 88.2601C154.7 88.243 168.771 130.406 165.268 142.091C162.386 151.703 154.7 151.703 153.74 151.703M114.351 88.2601C120.851 88.2573 130.512 111.523 132.604 143.58C134.12 166.805 122.607 194.081 112.429 204.573M114.351 88.2601C106.602 88.2634 84.4022 149.736 112.429 204.573M153.74 151.703C152.779 155.548 142.807 160.715 132.385 155.006C126.998 161.154 108.555 161.593 98.814 151.703C92.3067 159.397 70.3498 155.006 81.3283 120.753C87.4762 104.066 99.9399 88.2573 114.351 88.2573C128.761 88.2573 153.74 115.175 153.74 151.703ZM153.74 151.703C153.74 165.098 132.604 191.885 112.429 204.573",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("ellipse",{cx:"162.853",cy:"237.663",rx:"19.3551",ry:"27.6501",transform:"rotate(-30 162.853 237.663)",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M178.951 260.338C190.364 253.748 193.027 237.136 185.391 223.911C177.756 210.686 163 205.859 151.586 212.449",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M172.36 232.639C167.876 229.461 158.718 227.513 157.338 232.311C155.613 238.31 171.128 236.923 169.773 241.635C168.417 246.348 152.868 244.1 153.73 241.101",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M165.678 225.84L159.023 248.976",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("ellipse",{cx:"195.351",cy:"175.643",rx:"9.3517",ry:"13.3596",transform:"rotate(-30 195.351 175.643)",fill:"#C5D5E4"}),a.a.createElement("ellipse",{cx:"202.856",cy:"270.02",rx:"6.32092",ry:"9.02988",transform:"rotate(-30 202.856 270.02)",fill:"#E6C9C9"}),a.a.createElement("ellipse",{cx:"77.2625",cy:"203.753",rx:"6.32092",ry:"9.02988",transform:"rotate(-30 77.2625 203.753)",fill:"#E0E5CD"}),a.a.createElement("path",{d:"M116.157 78.6571C133.918 47.3204 102.788 -2.92531 63.3453 33.0092C34.788 59.0266 87.7414 57.8644 93.8465 40.0013C99.1867 24.3762 76.1076 4.16385 10.9845 8.61853",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"6 6"})),r=()=>a.a.createElement("svg",{width:"247",height:"260",viewBox:"0 0 247 260",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M68.6466 121.538C70.6022 128.836 54.088 156.29 46.7897 158.246C39.4914 160.202 25.721 145.592 23.7655 138.294C21.8099 130.996 26.141 123.494 33.4393 121.538C40.7375 119.583 66.691 114.24 68.6466 121.538Z",fill:"#E0E5CD"}),a.a.createElement("path",{d:"M162.932 108.545C172.088 99.3885 195.969 108.424 216.272 128.727C236.574 149.029 225.428 176.533 216.272 185.689C207.116 194.845 159.736 236.572 139.434 216.27C119.131 195.967 153.776 117.701 162.932 108.545Z",fill:"#E6C9C9"}),a.a.createElement("path",{d:"M46.0755 193.926C62.3542 188.982 138.204 185.609 131.166 200.964C124.128 216.318 97.3525 122.052 107.182 98.4688C102.79 104.883 85.2823 134.015 24.0702 154.781C22.139 156.695 21.5834 156.903 21.547 156.767",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M148.386 161.041C151.441 172.443 157.348 199.376 155.312 199.922C152.056 200.794 143.62 173.665 141.011 164.471C148.168 162.408 161.458 154.453 157.355 139.142C154.596 128.844 146.62 125.116 139.472 124.242M139.472 124.242C135.992 123.816 132.709 124.067 130.318 124.564C127.864 116.493 118.98 88.7609 122.97 88.9987C125.822 88.2345 133.596 111.907 133.191 118.996C132.786 126.085 104.084 96.6803 113.769 88.8479C118.791 84.7869 124.027 84.7906 126.31 86.7969C128.593 88.8032 134.651 107.335 139.472 124.242Z",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M151.246 158.676C154.417 168.883 160.898 191.441 158.958 203.746C152.959 205.789 143.081 207.773 139.863 199.26C121.882 151.705 127.596 138.826 121.568 139.132C115.54 139.438 115.484 160.402 97.9235 168.162C83.8749 174.371 46.7338 182.897 29.9193 186.384C27.3954 180.223 22.269 165.651 21.9541 156.658C17.2858 158.781 2.76378 164.855 7.67381 183.179C11.6018 197.839 26.6277 197.45 33.6497 195.423L35.4169 197.132L41.525 195.495C45.0822 210.399 54.7782 241.699 65.1047 247.661C83.6474 243.565 99.4994 237.572 91.885 228.701C84.2707 219.83 81.7982 218.747 78.6418 213.482C72.9408 215.01 72.0466 216.559 71.0938 214.632C70.3316 213.09 66.0052 205.957 63.9373 202.583L71.2671 200.619L76.1441 208.002L72.9452 209.281",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M166.15 157.931C251.244 172.708 251.479 75.5139 196.367 64.2391C133.738 51.4265 2.55491 100.2 57.2608 42.0135",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"6 6"}),a.a.createElement("path",{d:"M64.0957 17.4868L69.7586 25.0341L72.2522 38.8694L76.1005 30.5865L100.714 18.1498L73.1553 24.124L88.9354 42.2552L112.331 11.814L64.0957 17.4868Z",stroke:"#112D47",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M167.325 23.0234C173.248 27.3986 168.037 33.1421 166.305 35.4865C164.573 37.831 158.368 36.1848 152.445 31.8096C146.522 27.4345 143.125 21.9871 144.856 19.6427C146.588 17.2982 161.403 18.6482 167.325 23.0234Z",fill:"#C5D5E4"})),s=()=>a.a.createElement("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.64314 3.72422L8.67999 4.32976L8.06582 4.25561C5.83023 3.97138 3.87717 3.00746 2.2189 1.38857L1.4082 0.5853L1.19938 1.17848C0.757175 2.50078 1.03969 3.89723 1.96095 4.83643C2.45229 5.35547 2.34174 5.42962 1.49418 5.12067C1.19938 5.0218 0.941427 4.94766 0.91686 4.98473C0.830876 5.07124 1.12568 6.19581 1.35906 6.64069C1.67843 7.25859 2.32946 7.86413 3.04189 8.22251L3.64378 8.50674L2.93134 8.5191C2.24347 8.5191 2.2189 8.53146 2.2926 8.79098C2.53827 9.59424 3.50867 10.4469 4.58961 10.8177L5.35118 11.0772L4.68788 11.4727C3.7052 12.0411 2.55056 12.3624 1.39591 12.3871C0.843159 12.3995 0.388672 12.4489 0.388672 12.486C0.388672 12.6096 1.88725 13.3016 2.75938 13.5735C5.37575 14.3768 8.48346 14.0307 10.8173 12.659C12.4756 11.6827 14.1338 9.74254 14.9077 7.86413C15.3253 6.86314 15.743 5.03416 15.743 4.15675C15.743 3.58828 15.7798 3.51413 16.4677 2.83445C16.873 2.43899 17.2538 2.00646 17.3275 1.88288C17.4504 1.64808 17.4381 1.64808 16.8116 1.85817C15.7675 2.22891 15.6201 2.17948 16.136 1.62337C16.5168 1.22791 16.9713 0.511153 16.9713 0.301067C16.9713 0.263994 16.7871 0.325783 16.5782 0.437005C16.3571 0.560584 15.8658 0.745954 15.4973 0.857175L14.834 1.06726L14.2321 0.659448C13.9005 0.437005 13.4337 0.189846 13.188 0.115698C12.5616 -0.0573131 11.6034 -0.0325972 11.0384 0.16513C9.50298 0.721238 8.53259 2.15476 8.64314 3.72422Z",fill:"white"})),l=()=>a.a.createElement("svg",{width:"9",height:"17",viewBox:"0 0 9 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.79777 16.3197V8.15888H8.05047L8.349 5.34663H5.79777L5.80159 3.93907C5.80159 3.20559 5.87128 2.81257 6.92476 2.81257H8.33305V0H6.08003C3.37379 0 2.42127 1.36425 2.42127 3.65848V5.34694H0.734375V8.1592H2.42127V16.3197H5.79777Z",fill:"white"})),c=()=>a.a.createElement("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M4.50253 16H0.978069V5.31762H4.50253V16ZM2.7384 3.86044C1.6114 3.86044 0.697266 2.98185 0.697266 1.92111C0.697266 1.4116 0.912314 0.92296 1.2951 0.562681C1.67789 0.202403 2.19706 0 2.7384 0C3.27975 0 3.79892 0.202403 4.18171 0.562681C4.56449 0.92296 4.77954 1.4116 4.77954 1.92111C4.77954 2.98185 3.86503 3.86044 2.7384 3.86044ZM17.6935 16H14.1766V10.7999C14.1766 9.56057 14.15 7.97125 12.3442 7.97125C10.5117 7.97125 10.2309 9.31771 10.2309 10.7106V16H6.71026V5.31762H10.0905V6.77479H10.1399C10.6104 5.93549 11.7598 5.04976 13.4746 5.04976C17.0416 5.04976 17.6973 7.26052 17.6973 10.132V16H17.6935Z",fill:"white"}))}},[[436,7,8]]]);
//# sourceMappingURL=main.1974a246.chunk.js.map
(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[18,50],{1327:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(1),l=n(11),r=n(8),s=n(12),c=n(103),p=n(6),d=n(696),m=n.n(d),h=n(2),x=n(216),u=n.n(x);const g="#3C400C",f="#4F1C28",b="#112D47",w="#A86D37",y=({long:e,color:t})=>i.a.createElement(j,{viewBox:"0 0 130 130"},i.a.createElement(k,{cx:"65",cy:"65",r:"47.5",long:300-e,colorOfLine:t,offset:e})),E=380/34,v=o.e.div`
    border-radius: 50%;
    position: relative;
    width: 100%;
    height: 100%;

    .svgText {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transform: rotate(45deg);
    }
`,k=o.e.circle`
    stroke-dashoffset: -${({offset:e})=>e||0}px;
    stroke: #f3f7fa;
    stroke: ${({colorOfLine:e})=>e};
    stroke-width: 4;
    fill: transparent;
    stroke-dasharray: ${({long:e})=>e}px 360px;
`,j=o.e.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: rotate(-150deg);
`,O=o.e.text`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
`,C=o.e.div`
    padding: 0;
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    color: ${({color:e})=>e};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1023px) {
        font-size: 20px;
    }
`;var z=({index:e,name:t="",score:n})=>{const a=(e=>{const t=e+1;let n;return n=t%4===0?f:t%3===0?b:t%2===0?w:g,n})(e),o=t.toUpperCase().slice(0,33),l=E*o.length+(20-E*o.length/4.8);return i.a.createElement(v,null,i.a.createElement(y,{long:t?l:0,color:a}),i.a.createElement("svg",{className:"svgText",viewBox:"0 0 70 70",width:"100%"},i.a.createElement("path",{d:"M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0",fill:"transparent",id:"tophalf"}),i.a.createElement(O,{style:{fontSize:"7px"}},i.a.createElement("textPath",{xlinkHref:"#tophalf",startOffset:"0%",fill:a},o))),i.a.createElement(C,{className:"svgTextScore",color:a},n))};const M=(e,t,n)=>{const a=(e,t)=>t+1===e.length?0:t+1,i=a(e,t);return i===n?a(e,i):i},T=o.e.div`
    width: 100%;
    height: 100%;
    perspective: 600px;
    position: relative;

    .icon {
        transform: rotateY(${({deg:e})=>e}deg);
        transition: 1s;
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
    }

    .icon__face {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .icon__face--front {
        transform: rotateY(0deg) translateZ(1px);
    }
    .icon__face--back {
        transform: rotateY(180deg) translateZ(0px);
    }
`;var $=({data:e=[]})=>{if(e.length<1)return null;const[t,n]=i.a.useState({deg:0}),[a,o]=i.a.useState({front:0,back:1,isFrontSide:!0});return i.a.useEffect((()=>{const t=setInterval((()=>{"undefined"!==typeof document.hidden&&document.hidden||o((t=>t.isFrontSide?{...t,front:M(e,t.front,t.back),isFrontSide:!t.isFrontSide}:{...t,back:M(e,t.back,t.front),isFrontSide:!t.isFrontSide}))}),4e3);return()=>clearInterval(t)}),[e]),i.a.useEffect((()=>{n((e=>({deg:e.deg-180})))}),[a]),e.length<2?i.a.createElement(T,null,i.a.createElement("div",{className:"icon"},i.a.createElement("div",{className:"icon__face icon__face--front"},i.a.createElement(z,{name:e[a.front].name,score:e[a.front].score,index:a.front})))):i.a.createElement(T,{deg:t.deg},i.a.createElement("div",{className:"icon"},i.a.createElement("div",{className:"icon__face icon__face--front"},i.a.createElement(z,{name:e[a.front].name,score:e[a.front].score,index:a.front})),i.a.createElement("div",{className:"icon__face icon__face--back"},i.a.createElement(z,{name:e[a.back].name,score:e[a.back].score,index:a.back}))))},V=n(670);var F=({lwin18:e,total:t,sizeByML:n,hideCount:a,bottles:o})=>{const{t:l}=Object(V.a)(["portfolio"]),r=e&&+e.slice(11,13),s=t&&(t.bottleCount/r).toFixed(0);return i.a.createElement(i.a.Fragment,null,r>1?i.a.createElement(i.a.Fragment,null,!a&&s," ",l("wine-bottles-totals.case"),s>1&&"s"," ",l("wine-bottles-totals.of")," ",r," ",o&&l("wine-bottles-totals.bottles")," (",n.toLowerCase(),")"):i.a.createElement(i.a.Fragment,null,!a&&t.bottleCount," ",l("wine-bottles-totals.bottle"),t.bottleCount>1&&"s"," (",n.toLowerCase(),")"))};const P=o.e.div`
    display: grid;
    grid-template-columns: 40% 18% 21% 21%;
    text-align: right;
    grid-template-areas: ". . . .";
`,R=Object(o.e)(P)`
    color: ${e=>e.theme.colors.mainAccentBlue};
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    padding-bottom: 16px;
    border-bottom: 1px solid #caccce;
    transition: 0.5s;
    margin-bottom: 38px;
    ${e=>e.pale&&"opacity: 0.3;"};
`,S=o.e.div`
    margin-right: 30px;
`,D=o.f`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,A=o.d`
    animation: ${D} 1.5s ease-in-out;
`,N=o.e.div`
    width: 100%;
    background-color: #f3f7fa;
    padding-bottom: 53px;
    position: relative;

    @media screen and (max-width: 1023px) {
        padding-bottom: 36px;
    }
`,L=o.e.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 462px;

    @media screen and (max-width: 1023px) {
        height: 263px;
    }

    &:after {
        content: "";
        background-image: ${({backgroundImage:e})=>e};
        background-repeat: no-repeat;
        background-position-x: 127px;
        background-position-y: bottom;
        background-size: 694.61px;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: 1;
        ${A};

        @media screen and (max-width: 1023px) {
            background-size: 100%;
            background-position: center;
            height: 263px;
        }
    }
`,W=o.e.h2`
    margin: 0;
    padding: 0;
    text-align: center;
    padding: 99px 127px 0px;
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 60px;
    min-height: 74px;
    color: #242e35;
    box-sizing: content-box;

    @media screen and (max-width: 1023px) {
        font-size: 32px;
        line-height: 41px;
        min-height: 50px;
        padding: 79px 23px 0;
    }
`,B=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #4f1c28;
    margin-bottom: 45px;

    @media screen and (max-width: 1023px) {
        font-size: 14px;
        line-height: 21px;
        margin: 16px 0;
    }
`,I=o.e.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 440.8px;
    padding-bottom: 31.9px;
    z-index: 2;

    img {
        object-fit: scale-down;
    }

    @media screen and (max-width: 1023px) {
        width: 263px;
        height: 263px;
        padding-bottom: 0;
    }
`,q=o.e.div`
    height: 151px;
    width: 151px;
    position: absolute;
    bottom: 56.31px;
    right: 81.45px;
    z-index: 2;

    @media screen and (max-width: 1023px) {
        height: 100px;
        width: 100px;
        bottom: 30px;
        right: 45px;
    }

    @media screen and (max-width: 700px) {
        height: 70px;
        width: 70px;
        bottom: 36px;
        right: 31px;
    }
`;var _=({hero:e,mask:t,wineData:n,displayName:a,critics:o})=>{const{t:l}=Object(V.a)(["portfolio"]);return i.a.createElement(N,null,i.a.createElement(W,null,a," ",n.isFuture?l("hero.futures"):n.lwin11.slice(-4)),i.a.createElement(B,null,i.a.createElement(F,{lwin18:n.lwin18,total:n.total,sizeByML:n.sizeByML,hideCount:!0,bottles:!0})),i.a.createElement(L,{backgroundImage:`url(${t})`},i.a.createElement(I,null,i.a.createElement("img",{src:e,alt:"hero"}))),i.a.createElement(q,null,i.a.createElement($,{data:o||[]})))},G=n(20);const H=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: ${e=>e.negative?e.theme.colors.darkRed:e.theme.colors.lighterGreen};
    ${({styles:e})=>e}
`;var U=({amount:e,percents:t,styles:n,positive:a})=>i.a.createElement(H,{negative:!a,styles:n},a?"+":"",e," (",t,"%)"),X=n(1335),Y=n(102),Q=n(1311),Z=n(1312),J=n(1339),K=n(1313),ee=n(1317),te=n(1318),ne=n(1316),ae=n(1319),ie=n(1310),oe=n(1288),le=n(5),re=n.n(le);function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}re.a.bool,re.a.number,re.a.number,re.a.object,re.a.func,re.a.func,re.a.func;var pe=n(164),de=n.n(pe),me=n(749);const he=Object(X.a)("%b %d, '%y"),xe=Object(X.a)("%b ' %y"),ue=Object(X.a)("%b %d"),ge={top:40,right:0,bottom:0,left:0},fe=({margin:e=ge,showTooltip:t,hideTooltip:n,tooltipData:o,tooltipTop:l,tooltipLeft:s,stock:c,tooltipOpen:p,onChange:d,parentWidth:m,parentHeight:h,setSharedTooltipData:x,showTickFormat:u,rangeByMonths:g})=>{const f=Object(r.h)("colors"),{yScale:b,yMax:w,xScale:y,xStock:E,yStock:v,handleTooltip:k}=Object(me.a)({data:c,width:m,height:h,margin:e,showTooltip:t});if(Object(a.useEffect)((()=>{d(p?{yData:v(o),xData:he(E(o))}:{yData:null})}),[p,o]),Object(a.useEffect)((()=>{x&&x(o)}),[o]),!c.length)return null;if(m<10)return null;const j=m-e.left-e.right,O=h-e.top-e.bottom,C=Object(oe.a)({range:[0,j],domain:Object(ie.a)(c,(e=>new Date(e.date)))});return Object(a.useEffect)((()=>{const e=document.querySelectorAll(".vx-axis-tick");for(let t=0;t<e.length;t++){const n=e[t].getElementsByTagName("tspan")[0],a=+n.getAttribute("x");a>=m-56&&n.setAttribute("x",a-35),a<=0&&n.setAttribute("x",a+35)}}),[]),i.a.createElement("svg",{height:h,width:m,className:"class"},i.a.createElement("rect",{x:0,y:0,height:h,width:m,fill:"#ffffff",rx:14}),i.a.createElement("defs",null,i.a.createElement(Q.a,{bottom:"0",from:"#3C400C",to:"#3C400C",id:"gradient"})),i.a.createElement(Z.a,null,i.a.createElement(K.a,{data:c,x:e=>y(E(e)),y:e=>b(v(e)),yScale:b,strokeWidth:2,stroke:"url(#gradient)",fill:"url(#gradient)",curve:ne.a}),i.a.createElement(ee.a,{x:0,y:0,width:m,height:h,fill:"transparent",rx:14,data:c,onTouchStart:k,onTouchMove:k,onMouseMove:k,onMouseLeave:n}),o&&x&&i.a.createElement("g",null,i.a.createElement(te.a,{from:{x:s,y:l},to:{x:s,y:w-33},stroke:"#E6C9C9",strokeWidth:2,style:{pointerEvents:"none"}}),i.a.createElement("circle",{cx:s,cy:l+1,r:4,fill:"black",fillOpacity:.1,stroke:"black",strokeOpacity:.1,strokeWidth:2,style:{pointerEvents:"none"}}),i.a.createElement("circle",{cx:s,cy:l<13?l+(13-l):l,r:11,fill:"#3C400C",stroke:"#E6C9C9",strokeWidth:4,style:{pointerEvents:"none"}}))),u&&i.a.createElement(J.a,{top:O-33,hideAxisLine:!0,hideTicks:!0,hideZero:!0,numTicks:5,scale:C,orientation:"bottom",tickFormat:g?xe:ue,tickLabelProps:()=>({fill:f.lightPink,lineHeight:"21px",fontSize:11,textAnchor:"middle",fontFamily:"VinovestMono",letterSpacing:"0.025em"})}))};fe.defaultProps={onChange:de.a};var be,we,ye=(be=Object(ae.a)(fe),void 0===we&&(we={style:{position:"relative",width:"inherit",height:"inherit"}}),function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0},n.updateTooltip=n.updateTooltip.bind(ce(n)),n.showTooltip=n.showTooltip.bind(ce(n)),n.hideTooltip=n.hideTooltip.bind(ce(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.updateTooltip=function(e){var t=e.tooltipOpen,n=e.tooltipLeft,a=e.tooltipTop,i=e.tooltipData;this.setState((function(e){return se({},e,{tooltipOpen:t,tooltipLeft:n,tooltipTop:a,tooltipData:i})}))},o.showTooltip=function(e){var t=e.tooltipLeft,n=e.tooltipTop,a=e.tooltipData;this.updateTooltip({tooltipOpen:!0,tooltipLeft:t,tooltipTop:n,tooltipData:a})},o.hideTooltip=function(){this.updateTooltip({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})},o.render=function(){return i.a.createElement("div",we,i.a.createElement(be,se({updateTooltip:this.updateTooltip,showTooltip:this.showTooltip,hideTooltip:this.hideTooltip},this.state,this.props)))},a}(i.a.PureComponent)),Ee=n(804),ve=n.n(Ee);const ke=Object(X.a)("%b ' %d"),je=o.e.div`
    height: 233px;
    width: 100%;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 1023px) {
        height: 193px;
        bottom: 62px;
    }
`,Oe=o.e.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    top: -10px;
    left: 0px;
    padding-top: 45px;
    padding-left: 39px;
    padding-right: 35px;

    button {
        border: 0;
        background: 0;
        outline: 0;
    }

    @media screen and (max-width: 1023px) {
        padding: 28px 21px;
    }
`,Ce=o.e.div`
    margin: 0 0 0 5px;
    padding-bottom: 2px;
    height: 18px;
`,ze=o.e.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media screen and (max-width: 1023px) {
        flex-direction: column;
        align-items: flex-start;
    }
`,Me=o.e.div`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #242e35;
    display: flex;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 1023px) {
        line-height: 16px;
    }
`,Te=o.e.div`
    ${({today:e})=>e?"color: #767a7f;":"color: #448B47;"}
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.005em;
    font-family: VinovestMedium;
    display: flex;

    * {
        line-height: 26px !important;
    }

    @media screen and (max-width: 1023px) {
        margin-top: 7px;
        font-size: 14px;
        line-height: 21px;

        * {
            line-height: 21px !important;
        }
    }
`,$e=o.e.div`
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 60px;
    color: #242e35;
    margin-right: 23px;

    @media screen and (max-width: 1023px) {
        font-size: 32px;
        line-height: 41px;
        margin-top: 9px;
    }
`,Ve=o.e.div`
    flex-grow: 1;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #242e35;

    @media screen and (max-width: 1023px) {
        position: absolute;
        bottom: 0;
        justify-content: space-around;
        height: 62px;
        width: 100%;
        font-size: 11px;
    }
`,Fe=o.e.div`
    margin-right: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 26px;
    ${({selected:e})=>e?"background: #242E35; color: white;":""}
    transition: 0.5s;
    padding: 2px;

    &:hover {
        cursor: pointer;
        background: #242e35;
        color: white;
    }

    @media screen and (max-width: 1023px) {
        min-width: 26px;
        height: 26px;
    }
`;var Pe=({stock:e,selectedRange:t,fetchHistoricalPricing:n,lwin18:o})=>{const{t:l}=Object(V.a)(["portfolio"]),s=Object(r.d)(1023),c=["1w","1m","6m","1y","all"],[d,m]=Object(a.useState)();let h=e&&e.length?e[e.length-1].price:0;d&&(h=d.price);const x=e&&!!e.length&&(e=>ke(new Date(e)))(d?d.date:e[e.length-1].date),u=x===ke(new Date),g=d?Object(p.get)(d,"priceDifference",0):Object(p.get)(e[e.length-1],"priceDifference",0),f=d?Object(p.get)(d,"priceDifferencePercents","0.0"):Object(p.get)(e[e.length-1],"priceDifferencePercents","0.0");return i.a.createElement(i.a.Fragment,null,i.a.createElement(Oe,null,i.a.createElement(ze,null,s&&i.a.createElement(Me,null,l("graphical-price-history.title")," ",+o.slice(11,13)," "),i.a.createElement($e,{className:"title-text"},Object(G.c)(h)),i.a.createElement(Te,{today:u},i.a.createElement(U,{amount:Object(G.c)(+g),percents:f,styles:"\n    font-family: VinovestMedium;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 26px;\n    margin-right: 3px;\n",positive:+g>=0})," ",u&&"Today"," ",x),!s&&i.a.createElement(Ve,null,c.map((e=>i.a.createElement(Fe,{key:e,selected:e.toUpperCase()===t.toUpperCase(),onClick:()=>n(e)},e))))),!s&&i.a.createElement(Me,null,l("graphical-price-history.title")," ",+o.slice(11,13)," ",!s&&i.a.createElement(Ce,null,i.a.createElement(Y.a,{text:l("graphical-price-history.tooltip")},i.a.createElement("img",{src:ve.a,alt:"grey-hyphen"}))))),i.a.createElement(je,null,e&&!!e.length&&i.a.createElement(ye,{isMobile:s,stock:e,margin:{top:0,left:0,right:0,bottom:0},setSharedTooltipData:!s&&m,showTickFormat:!s,rangeByMonths:["6m","1y","all"].includes(t)})),s&&i.a.createElement(Ve,null,c.map((e=>i.a.createElement(Fe,{key:e,selected:e.toUpperCase()===t.toUpperCase(),onClick:()=>n(e)},e)))))},Re=n(913),Se=n.n(Re);const De=o.e.div`
    width: 100%;
    padding: 90px 71px 32px;
    display: grid;
    grid-template-columns: 227.29px 227.29px 227.29px;
    row-gap: 19px;
    grid-template-areas: ". . .";
    justify-content: space-between;

    @media screen and (max-width: 1023px) {
        grid-template-columns: 1fr 1fr 1fr;
        padding: 44px 7px 17.95px 7px;
        row-gap: 0;
    }
`,Ae=o.e.div`
    width: 100%;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #242e35;

    img {
        margin-left: 9px;
        width: 14px;
    }

    @media screen and (max-width: 1023px) {
        font-size: 9.17434px;
        line-height: 17px;

        img {
            margin: 0;
            width: 6.89px;
        }
    }
`,Ne=o.e.div`
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 41px;
    display: flex;
    justify-content: center;
    color: #242e35;

    @media screen and (max-width: 1023px) {
        font-size: 18.3487px;
        line-height: 29px;
    }
`;var Le=()=>{const{t:e}=Object(V.a)("portfolio");return i.a.createElement(De,null,i.a.createElement(Ae,null,e("condition.title")," ",i.a.createElement("img",{src:Se.a,alt:"tick"})),i.a.createElement(Ae,null,e("condition.verfication")," ",i.a.createElement("img",{src:Se.a,alt:"tick"})),i.a.createElement(Ae,null,e("condition.insurance")," ",i.a.createElement("img",{src:Se.a,alt:"tick"})),i.a.createElement(Ne,null,e("condition.excellent")),i.a.createElement(Ne,null,e("condition.authentic")),i.a.createElement(Ne,null,e("condition.coverage")))};const We=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0.005em;
    color: #384147;
    padding: 44px 182px 26px;

    button {
        background: transparent;
        border: 0;
        outline: 0;
        color: ${e=>e.theme.colors.burntOrange};
        padding: 0;

        &:hover {
            cursor: pointer;
        }
    }

    @media screen and (max-width: 1023px) {
        padding: 18px 21px 0;
        font-size: 11px;
        line-height: 21px;
        max-width: 353px;
        margin: 0 auto;
    }
`;var Be=({text:e="",length:t=96,updateHeight:n=(()=>{})})=>{const{t:o}=Object(V.a)(["portfolio"]),[l,r]=Object(a.useState)(!1),s=i.a.useRef(null);return i.a.useEffect((()=>{s&&n(),s||(s=!0)}),[l]),i.a.createElement(We,null,l?e:e.slice(0,t),!l&&e&&e.length>=t&&i.a.createElement("span",null,"..."," ",i.a.createElement("button",{type:"button",onClick:()=>r((e=>!e))},o("description.read"))))};const Ie=({profit:e,percents:t})=>i.a.createElement(Qe,{negative:e<0},+e<0?`-${Object(G.c)(+e/100*-1)}`:`+${Object(G.c)(+e/100)}`," (",t>=0?t:-1*t,"%)"),qe=o.e.div`
    padding: 40px 32px 43px;

    @media screen and (max-width: 1023px) {
        padding: 30px 17px 31px;
    }
`,_e=o.e.div`
    min-height: 74px;
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: #242e35;

    @media screen and (max-width: 1023px) {
        min-height: 43px;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
    }
`,Ge=o.e.div`
    margin-top: 5px;
    border-top: 1px solid #eeeeee;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: ". . .";

    @media screen and (max-width: 1023px) {
        margin-top: 21px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: ". .";
    }
`,He=o.e.div`
    min-height: 188px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    color: #242e35;

    @media screen and (min-width: 1024px) {
        :nth-of-type(3n) {
            border-right: 0;
        }
    }

    @media screen and (max-width: 1023px) {
        min-height: 140px;

        :nth-of-type(2n) {
            border-right: 0;
        }
    }
`,Ue=o.e.div`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.025em;
    text-transform: uppercase;

    @media screen and (max-width: 1023px) {
        font-size: 11px;
        line-height: 16px;
    }
`,Xe=o.e.div`
    margin-top: 11px;
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;

    @media screen and (max-width: 1023px) {
        font-size: 24px;
        line-height: 32px;
    }
`,Ye=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.005em;
    color: #5b646b;

    @media screen and (max-width: 1023px) {
        font-size: 11px;
        line-height: 21px;
    }
`,Qe=o.e.div`
    margin-top: 5px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: right;
    letter-spacing: 0.005em;
    color: ${e=>e.negative?e.theme.colors.darkRed:e.theme.colors.lighterGreen};

    @media screen and (max-width: 1023px) {
        font-size: 11px;
        line-height: 21px;
    }
`,Ze=o.e.div`
    max-width: 457px;
    width: 100%;
    margin: 29px auto 0;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #242e35;

    a {
        border: 0;
        outline: 0;
        background: transparent;
        color: ${e=>e.theme.colors.burntOrange};
        text-decoration: none;

        &:hover {
            cursor: pointer;
        }
    }

    @media screen and (max-width: 1023px) {
        width: 100%;
        max-width: 276px;
        width: 100%;
        font-size: 11px;
        line-height: 21px;
        margin: 26px auto 0;
    }
`;var Je=({wineData:e})=>{const{t}=Object(V.a)(["portfolio"]),{total:n,lwin18:a,sizeByML:o,holdDuration:l}=e,r=a&&+a.slice(11,13),s=r?(n.bottleCount/r).toFixed(0):n.bottleCount,c=n.positionTotal.amount-s*n.averageCostBasis.amount;return i.a.createElement(qe,null,i.a.createElement(_e,null,t("wine-cellar-model.position")),i.a.createElement(Ge,null,i.a.createElement(He,null,i.a.createElement(Ue,null,t("wine-cellar-model.quantity")),i.a.createElement(Xe,null,s),i.a.createElement(Ye,null,i.a.createElement(F,{lwin18:a,total:n,sizeByML:o,hideCount:!0}))),i.a.createElement(He,null,i.a.createElement(Ue,null,t("wine-cellar-model.cost")),i.a.createElement(Xe,null,Object(G.c)(n.averageCostBasis.amount/100)),i.a.createElement(Ye,null,r>1?"Per Case":"Per Bottle")),i.a.createElement(He,null,i.a.createElement(Ue,null,t("wine-cellar-model.position-total")),i.a.createElement(Xe,null,Object(G.c)(n.positionTotal.amount/100)),i.a.createElement(Ie,{profit:c,percents:n.positionTotalPercentage})),i.a.createElement(He,null,i.a.createElement(Ue,null,t("wine-cellar-model.average-hold")),i.a.createElement(Xe,null,l)),i.a.createElement(He,null,i.a.createElement(Ue,null,t("wine-cellar-model.percentage-portfolio")),i.a.createElement(Xe,null,n.portfolioPercentage,"%")),i.a.createElement(He,null,i.a.createElement(Ue,null,t("wine-cellar-model.storage")),i.a.createElement(Xe,null,e.storageLocation))),i.a.createElement(Ze,null,t("wine-cellar-model.contact")," ",i.a.createElement("a",{href:"mailto:ir@vinovest.co"},t("wine-cellar-model.contact-link"))," ",t("wine-cellar-model.contact-contd")))};const Ke=o.e.div`
    padding: 40px 32px 0;

    @media screen and (max-width: 1023px) {
        padding: 30px 17px 0;
    }
`,et=o.e.div`
    min-height: 74px;
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: #242e35;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 17px;

    @media screen and (max-width: 1023px) {
        min-height: 64px;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        padding-bottom: 21px;
        margin-bottom: 10px;
    }
`,tt=o.e.div`
    border-top: 1px solid #eeeeee;
    min-height: 220px;
    display: flex;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.005em;
    color: #242e35;

    &.noBorder {
        border: 0;
    }

    .svgContainer {
        margin-top: 7px;
        width: 148.81px;
        height: 148.81px;
        flex-shrink: 0;
        margin: 27px 27px 27px 15px;
    }

    .description {
        padding: 27px 0 27px 20.18px;
        flex-grow: 1;
    }

    h2 {
        margin: 0;
        padding: 0;
        font-family: RoslindaleDisplayCondensed;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
    }

    p {
        margin-top: 15px;
    }

    @media screen and (max-width: 1023px) {
        font-size: 11px;
        line-height: 21px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        min-height: fit-content;

        .description,
        .svgContainer {
            padding: 0;
            margin: 0;
        }
        .svgContainer {
            margin-top: 29px;
            width: 65px;
            height: 65px;
        }

        h2 {
            margin-top: 21px;
            font-size: 20px;
            line-height: 32px;
        }

        p {
            margin-top: 20px;
            margin-bottom: 31px;
        }
    }
`;var nt=({critics:e=[]})=>{const{t}=Object(V.a)(["portfolio"]);return i.a.createElement(Ke,null,i.a.createElement(et,null,t("wine-maker-notes.title")),e.map((({name:e,score:t,description:n},a)=>i.a.createElement(tt,{key:n,className:a?"":"noBorder"},i.a.createElement("div",{className:"svgContainer"},i.a.createElement(z,{name:e,score:t,index:a})),i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,e),i.a.createElement("p",null,n))))))},at=n(805),it=n.n(at),ot=n(724),lt=n.n(ot);const rt=o.e.div`
    position: relative;
    outline: 0;
    height: 100%;

    ${({padding:e})=>e?"\n    padding-bottom: 64px;\n    @media screen and (max-width: 1023px) {\n        padding-bottom: 31px;\n    }\n":"padding: 0"}
`,st=o.e.div`
    border: 1px solid #eeeeee;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 40px 52px 0;

    @media screen and (max-width: 1023px) {
        margin: 18px 10px 0;
    }
`,ct=Object(o.e)(st)`
    padding-top: 118px;
    overflow: hidden;
    position: relative;
    height: 360px;

    @media screen and (max-width: 1023px) {
        height: 390px;
    }
`,pt=o.e.div`
    border-bottom: 1px solid #eeeeee;
    margin: 0 59px;

    @media screen and (max-width: 1023px) {
        margin: 0 17px;
    }
`,dt=o.e.div`
    width: 100%;
    height: ${({isMobile:e})=>e?"2836px":"3221px"};
    display: block;
`;var mt=Object(l.a)((({wine:e,showContent:t,wineContentfulData:n,heroMask:a,producerDescription:o,updateHeight:l})=>{const{lwin18:s}=e,{displayName:c,critics:d,bottleImage:m}=n,x=Object(p.get)(m,"fields.file.url",lt.a),g=Object(r.f)(),f=Object(h.f)(g.portfolio.winesCollectionEntity).isPending(),b=g.portfolio.winesCollectionEntity.data[s]&&Object(h.f)(g.portfolio.winesCollectionEntity.data[s]).isPending(),w=Object(r.d)(1023);i.a.useEffect((()=>{g.portfolio.winesCollection[s]||f||!t||g.portfolio.fetchPortfolioWineToCollection(s)}),[s,f,t]);const y=g.portfolio.winesCollection[s]&&g.portfolio.winesCollection[s].data;return i.a.createElement(rt,{padding:y},y&&t?i.a.createElement(i.a.Fragment,null,i.a.createElement(_,{hero:x,mask:a||it.a,wineData:y,displayName:c,critics:d}),i.a.createElement(Le,null),o&&i.a.createElement(i.a.Fragment,null,i.a.createElement(pt,null),i.a.createElement(Be,{text:o,updateHeight:l})),i.a.createElement(ct,null,b?i.a.createElement(dt,null,i.a.createElement(u.a,{style:{position:"absolute",top:0,right:0,bottom:0,left:0}})):i.a.createElement(Pe,{stock:y.historical.pricing,selectedRange:y.range,fetchHistoricalPricing:e=>{g.portfolio.fetchPortfolioWineToCollection(s,e)},lwin18:s})),i.a.createElement(st,null,i.a.createElement(Je,{wineData:y})),d&&i.a.createElement(st,null,i.a.createElement(nt,{critics:d}))):i.a.createElement(u.a,{style:{width:"100%",height:w?"2836px":"3221px",display:"block"}}))}));const ht=o.e.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    background-color: #fff;
    border-radius: 50%;
    border: 0;
    outline: 0;
    transform: translateX(-50%);
    position: absolute;
    top: 50vh;
    transform: translateY(-50%);
    transition: 1s;
    filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.15));

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        cursor: default;
        opacity: 0.3;
    }

    ${e=>e.reverse?"\n    left: -50px;    \n    transform: translateX(-100%);\n\n    &:before {\n        display: none;\n    }\n\n    @media screen and (max-width: 1138px) {\n        left: 0px;\n        transform: translateX(-25%);\n    }\n\n    @media screen and (max-width: 1023px) {\n        left: 0px;\n        transform: translateX(1%);\n    }\n":"\n    right: -50px;\n    transform: translateX(100%);\n\n    &:before {\n        display: none;\n    }\n    svg {\n        transform: rotate(180deg);\n    }\n\n    @media screen and (max-width: 1138px) {\n        right: 0px;\n        transform: translateX(25%);\n    }\n\n    @media screen and (max-width: 1023px) {\n        right: 0px;\n        transform: translateX(-1%);\n    }\n"}
`,xt=o.e.div`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #242e35;
`;var ut=({onClick:e,className:t,reverse:n,fetchData:a,disabled:o})=>{const{t:l}=Object(V.a)(["portfolio"]),r=["arrow"];return t&&r.push(t),i.a.createElement(i.a.Fragment,null,i.a.createElement(ht,{onClick:e,className:r.join(" "),reverse:n,disabled:o},a?i.a.createElement(xt,null,l("buttons.arrow-first")," ",i.a.createElement("br",null)," ",l("buttons.arrow-second")):i.a.createElement("svg",{width:"28",height:"18",viewBox:"0 0 28 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M27.269 9.00012L2.29337 9.00012",stroke:"#242E35",strokeWidth:"2"}),i.a.createElement("path",{d:"M9.31776 16.8051L1.51288 9.00018L9.31776 1.1953",stroke:"#242E35",strokeWidth:"2"}))))};n(431),n(432);const gt=Object(l.a)((({wines:e,goToSlide:t,fetchWinesData:n,speed:a=500,closeModal:o})=>{const l=i.a.useRef(null),s=Object(r.f)(),{winesContentfulCollection:c,winesCollection:d}=s.portfolio,x=Object(h.f)(s.portfolio.winesCollectionEntity).isPending(),[u,g]=i.a.useState(0),[f,b]=i.a.useState(0),w=()=>{l.current.slickGoTo(u,!0)};i.a.useEffect((()=>{l.current.slickGoTo(t,!0),g(t)}),[t]);const y=(t=>{const n=t=>e.length>t&&e[t]&&`${t}`;return[n(t-1)||n(e.length-1),n(t),n(t+1)||0].map((e=>+e))})(u),E=e=>y.includes(e),v=i.a.useRef(null);return i.a.useEffect((()=>{const e=setTimeout((()=>{v&&g(f)}),a);return v||(v=!0),()=>clearTimeout(e)}),[f]),i.a.createElement(i.a.Fragment,null,i.a.createElement(bt,{className:"portfolioSlider"},i.a.createElement(wt,null,i.a.createElement(ft,null,i.a.createElement(m.a,{ref:l,className:"slider-view-container",infinite:!0,autoplay:!1,slidesToShow:1,slidesToScroll:1,arrows:!1,beforeChange:(e,t)=>b(t),speed:a,adaptiveHeight:!0},e.map(((e,t)=>i.a.createElement(i.a.Fragment,{key:t},i.a.createElement(mt,{wine:e,i:t,showContent:E(t),wineContentfulData:c[e.lwin11]||{},heroMask:Object(p.get)(d,`${e.lwin18}.data.producerData.vineyardBackground.fields.file.url`),producerDescription:Object(p.get)(d,`${e.lwin18}.data.producerData.description`),updateHeight:w})))))))),e.length>1&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ut,{onClick:()=>{l.current.slickPrev()},reverse:!0}),i.a.createElement(ut,{disabled:+u===e.length-1&&x,onClick:+u===e.length-1&&n.nextPageToken?async()=>{n.fetchPortfolioWines()}:()=>{l.current.slickNext()},fetchData:+u===e.length-1&&n.nextPageToken||+u===e.length-1&&e.length&&x})))})),ft=o.e.div`
    width: 100%;
    position: relative;
    background: #fff;
    border-radius: 20px;
    -webkit-mask-image: -webkit-radial-gradient(white, black);

    @media screen and (max-width: 1023px) {
        border-radius: 10px;
    }
`,bt=o.e.div`
    height: 100vh;
    overflow: auto;
    width: 100%;
    margin: 0 auto;
    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
`,wt=o.e.div`
    padding: 50px 0;
    width: 100%;
    background: transparent;
    position: static;
`;var yt=gt;const Et=o.e.div`
    width: 904px;
    margin: 0 auto;
    border-radius: 0px;

    @media screen and (max-width: 1023px) {
        width: 100%;
    }
`;var vt=({wines:e,closeModal:t,goToSlide:n,fetchWinesData:a})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{isOpen:!0,onClose:t,borderRadius:0,additionalStyles:"\n    background: transparent;\n    border-radius: 0px;\n    box-shadow: none;\n\n    .closeIcon {\n        top: 73px;\n    }\n    \n    @media screen and (max-width: 1023px) { \n        max-width: 600px; \n        width: 100%;\n        padding: 0 17px;\n        background: transparent;\n        box-shadow: none;\n\n        .closeIcon {\n            right: 40px;\n        }\n    }\n"},i.a.createElement(Et,null,i.a.createElement(yt,{wines:e,goToSlide:n,fetchWinesData:a,closeModal:t})))),kt=n(108);const jt=o.e.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 172px;
    height: 44px;
    padding: 5px;
    background: ${e=>e.theme.colors.lighterGray};
    border-radius: 4px;

    @media screen and (min-width: 1024px) {
    }
`,Ot=o.e.div`
    position: relative;
    width: 81px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: ${e=>e.selected?e.theme.colors.mainAccentBlue:e.theme.colors.darkGrayNeutrals};

    &:hover {
        ${e=>e.selected?"pointer-events: none;":"cursor: pointer;"};
    }
`,Ct=o.e.div`
    position: absolute;
    background: ${e=>e.theme.colors.white};
    width: 81px;
    height: 34px;
    transition: 0.5s;
    ${e=>e.toRight?"left: 86px":"left: 5px"};
    border-radius: 4px;
`,zt=o.e.div`
    width: 16px;
    height: 16px;
    margin-right: 9px;

    div {
        background: ${e=>e.selected?e.theme.colors.mainAccentBlue:e.theme.colors.darkGrayNeutrals};
    }
`,Mt=Object(o.e)(zt)`
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;

    div {
        flex-shrink: 0;
        width: 7px;
        height: 7px;
    }
`,Tt=Object(o.e)(zt)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        flex-shrink: 0;
        width: 100%;
        height: 3.2px;
    }
`;var $t=({selected:e="grid",toggle:t})=>{const{t:n}=Object(V.a)("portfolio");return i.a.createElement(jt,null,i.a.createElement(Ct,{toRight:"list"===e}),i.a.createElement(Ot,{selected:"grid"===e,onClick:t},i.a.createElement(Mt,{selected:"grid"===e},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)),n("wine-cellar.cellar-view-toggle.grid")),i.a.createElement(Ot,{selected:"list"===e,onClick:t},i.a.createElement(Tt,{selected:"list"===e},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)),n("wine-cellar.cellar-view-toggle.list")))};o.e.div`
    border: 1px solid ${e=>e.theme.colors.lighterGray};
    background: ${e=>e.theme.colors.lighterGray};
    box-sizing: border-box;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px;
    overflow: hidden;

    @media screen and (max-width: 1023px) {
        border-radius: 10px;
        margin-top: 11px;
    }
`;const Vt=Object(o.e)(P)`
    text-align: right;
    background: ${e=>e.theme.colors.white};
    border: 1px solid ${e=>e.theme.colors.lighterGray};
    box-sizing: border-box;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px;
    padding: 21px 0 20px;
    min-height: 120px;
    cursor: pointer;
`,Ft=o.e.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 11px;
    min-height: 90px;
    padding: 16px 23px 15px 0;
    cursor: pointer;
`,Pt=Object(o.e)(S)`
    padding-top: 11px;
    line-height: 26px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${e=>e.theme.colors.dark30};

    @media screen and (max-width: 1023px) {
        font-size: 14px;
        line-height: 18px;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        flex-shrink: 0;
        padding: 5px 0;
    }
`,Rt=Object(o.e)(Pt)`
    display: flex;
    padding: 0;
    flex-direction: column;
    justify-content: center;
`,St=o.e.div`
    margin-top: 5px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: right;
    letter-spacing: 0.005em;
    color: ${e=>e.negative?e.theme.colors.darkRed:e.theme.colors.lighterGreen};

    @media screen and (max-width: 1023px) {
        font-size: 11px;
        line-height: 21px;
        margin-top: 0px;
    }
`,Dt=Object(o.e)(St)`
    color: #242e35;
`,At=Object(o.e)(S)`
    display: flex;
    align-items: center;
    padding-left: 14px;
    text-align: left;

    @media screen and (max-width: 1023px) {
        padding: 0;
        margin: 0;
        align-items: stretch;
    }
`,Nt=o.e.img`
    height: 79px;
    width: 79px;
    display: block;
    object-fit: scale-down;
    flex-shrink: 0;
    border: 0;
    ${e=>e.addFunds&&"padding: 13px;"};

    @media screen and (max-width: 1023px) {
        height: 59px;
        width: 59px;
    }
`,Lt=o.e.div`
    color: ${e=>e.theme.colors.dark30};
    margin-left: 17px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.005em;

    @media screen and (max-width: 1023px) {
        font-size: 14px;
        line-height: 21px;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px 0;
    }
`,Wt=o.e.div`
    margin-top: 5px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: left;
    letter-spacing: 0.005em;

    @media screen and (max-width: 1023px) {
        font-size: 11px;
        line-height: 21px;
        margin-top: 6px;
        color: #5b646b;
    }
`,Bt=Object(o.e)(Wt)`
    color: ${e=>e.theme.colors.burntOrange} !important;
    text-transform: none;

    &:hover {
        cursor: pointer;
    }
`;var It=n(806),qt=n.n(It),_t=n(914),Gt=n.n(_t);const Ht=({withFund:e,children:t,width:n="85px"})=>i.a.createElement(i.a.Fragment,null,e?i.a.createElement(Xt,null,i.a.createElement("div",null,i.a.createElement(u.a,{style:{width:n,height:"17px",justifySelf:"center"}}))):t),Ut=({isMobile:e,withFund:t})=>i.a.createElement(i.a.Fragment,null,e?i.a.createElement(Ft,null,i.a.createElement(At,null,i.a.createElement(Yt,{src:t?Gt.a:qt.a,alt:"bottle"}),i.a.createElement(Lt,null,i.a.createElement(u.a,{style:{width:"100px",height:"17px"}}),i.a.createElement(u.a,{style:{width:"62px",height:"17px"}}))),i.a.createElement(Ht,{withFund:t},i.a.createElement(Pt,null,i.a.createElement(u.a,{style:{width:"36px",height:"17px"}}),i.a.createElement(Dt,null,i.a.createElement(u.a,{style:{width:"109px",height:"17px"}}))))):i.a.createElement(Vt,null,i.a.createElement(At,null,i.a.createElement(Nt,{src:t?Gt.a:qt.a,alt:"bottle"}),i.a.createElement(Lt,null,i.a.createElement(u.a,{style:{width:"141px",height:"17px"}}),i.a.createElement("br",null),!t&&i.a.createElement(u.a,{style:{width:"82px",height:"17px"}}))),i.a.createElement(Ht,{withFund:t},i.a.createElement(Pt,null,i.a.createElement(u.a,{style:{width:"36px",height:"17px"}}),i.a.createElement(Dt,null,i.a.createElement(u.a,{style:{width:"109px",height:"17px"}})))),i.a.createElement(Ht,{withFund:t},i.a.createElement(Pt,null,i.a.createElement(u.a,{style:{width:"85px",height:"17px"}}),i.a.createElement(Dt,null,i.a.createElement(u.a,{style:{width:"109px",height:"17px"}})))),i.a.createElement(Ht,{withFund:t,width:"99px"},i.a.createElement(Pt,null,i.a.createElement(u.a,{style:{width:"85px",height:"17px"}}),i.a.createElement(Dt,null,i.a.createElement(u.a,{style:{width:"109px",height:"17px"}})))))),Xt=Object(o.e)(Pt)`
    display: flex;
    flex-direction: row !important;
    padding-top: 0;
    align-items: center !important;
    justify-content: flex-end !important;
`,Yt=Object(o.e)(Nt)`
    padding: 9px;
`;var Qt=({sizeByML:e,wine:t,src:n,addFunds:a,addFundsHandler:o})=>i.a.createElement(At,null,i.a.createElement(Nt,{src:n,alt:"bottle",addFunds:!!a}),i.a.createElement(Lt,null,t,e&&i.a.createElement(Wt,null,e),a&&i.a.createElement(Bt,{onClick:o},a))),Zt=n(807),Jt=n.n(Zt);const Kt=Object(o.e)(Pt)`
    justify-content: center !important;
`;var en=({isMobile:e,preload:t,routeToDeposit:n,cash:a})=>{const{t:o}=Object(V.a)(["portfolio"]);return t?i.a.createElement(Ut,{isMobile:e,withFund:!0}):i.a.createElement(i.a.Fragment,null,e?i.a.createElement(Ft,null,i.a.createElement(Qt,{lwin11:"",addFunds:o("cellar-list.add-funds"),wine:o("cellar-list.power"),src:Jt.a,addFundsHandler:n}),i.a.createElement(Kt,null,"$",a)):i.a.createElement(Vt,null,i.a.createElement(Qt,{lwin11:"",addFunds:o("cellar-list.add-funds"),wine:o("cellar-list.power"),src:Jt.a,addFundsHandler:n}),i.a.createElement(Rt,null,"-"),i.a.createElement(Rt,null,"-"),i.a.createElement(Rt,null,"$",a)))},tn=n(125);const nn=e=>"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1),an=({amount:e,profit:t,percents:n})=>i.a.createElement(Pt,null,i.a.createElement("div",null,e),i.a.createElement(St,{negative:t<0},t<0?`-${Object(G.c)(+t/100*-1)}`:`+${Object(G.c)(+t/100)}`," (",n>=0?n:-1*n,"%)"));var on=({wines:e,openModal:t,cash:n,winesContentfulCollection:a,preloadWines:o})=>{const{t:l}=Object(V.a)("portfolio"),s=Object(r.b)("/deposit/add-funds",tn.a.AddFunds),c=Object(r.d)(1023);return i.a.createElement("div",null,e.map((({lwin11:e,lwin18:n,sizeByML:o,total:r,preload:s,isFuture:d},m)=>{const h=nn(Object(p.get)(a,`${e}.country`,"")),x=nn(Object(p.get)(a,`${e}.region`,"")),u=Object(p.get)(a,`${e}.displayName`,""),g=Object(p.get)(a,`${e}.bottleImage.fields.file.url`,""),f=n&&+n.slice(11,13);if(s)return i.a.createElement(Ut,{key:s,isMobile:c});const b=f?(r.bottleCount/f).toFixed(0):r.bottleCount,w=r.positionTotal.amount-b*r.averageCostBasis.amount;return i.a.createElement(i.a.Fragment,{key:`${n} ${m}`},c?i.a.createElement(Ft,{onClick:()=>t(m)},i.a.createElement(Qt,{sizeByML:i.a.createElement(F,{lwin18:n,total:r,sizeByML:o}),wine:`${u} ${d?l("cellar-list.futures"):e.slice(-4)}`,src:g||lt.a}),i.a.createElement(an,{amount:Object(G.c)(+r.positionTotal.amount/100),profit:w,percents:r.positionTotalPercentage})):i.a.createElement(Vt,{onClick:()=>t(m)},i.a.createElement(Qt,{sizeByML:`${x?`${x},`:""} ${h}`,wine:`${u} ${d?l("cellar-list.futures"):e.slice(-4)}`,src:g||lt.a}),i.a.createElement(Pt,null,b,i.a.createElement(Dt,null,i.a.createElement(F,{lwin18:n,total:r,sizeByML:o,hideCount:!0}))),i.a.createElement(Pt,null,Object(G.c)(+r.averageCostBasis.amount/100),i.a.createElement(Dt,null,l(f>1?"cellar-list.case":"cellar-list.bottle"))),i.a.createElement(an,{amount:Object(G.c)(+r.positionTotal.amount/100),profit:w,percents:r.positionTotalPercentage})))})),i.a.createElement(en,{isMobile:c,preload:o,routeToDeposit:s,cash:n}))},ln=n(42);const rn=()=>i.a.createElement(cn,null,i.a.createElement(u.a,{style:{borderRadius:"0",height:"20px",width:"58%",display:"block",margin:"0 auto"}}),i.a.createElement("img",{src:qt.a,alt:"bottle",width:"27.5%"}),i.a.createElement("div",null,i.a.createElement(u.a,{style:{borderRadius:"0",height:"20px",width:"58%",display:"block",margin:"0 auto"}}),i.a.createElement(u.a,{style:{borderRadius:"0",height:"20px",width:"36%",display:"block",margin:"9px auto 0"}}))),sn=({children:e,routeToDeposit:t})=>i.a.createElement(pn,null,i.a.createElement(u.a,{style:{borderRadius:"0",height:"20px",width:"58%",display:"block",margin:"0 auto"}}),i.a.createElement(dn,null,i.a.createElement(u.a,{circle:!0,style:{borderRadius:"0",height:"100px",width:"100px",display:"block",margin:"0 auto"}})),i.a.createElement("div",null,i.a.createElement(u.a,{style:{borderRadius:"0",height:"20px",width:"58%",display:"block",margin:"0 auto 42px"}}),i.a.createElement(mn,null,e))),cn=o.e.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 29px 0 22px;
    background: #fff;
    border-radius: 10px;

    span,
    div {
        display: block;
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        img {
            height: 160px;
        }
    }
`,pn=Object(o.e)(cn)`
    border-radius: 10px;

    @media screen and (max-width: 767px) {
        padding: 29px 0 0;
    }
`,dn=o.e.div`
    height: 100px;
    width: 100px !important;
    overflow: hidden;
    border-radius: 50px;
`,mn=o.e.div`
    width: fit-content !important;
    margin: 0 auto 18px;

    button {
        max-width: 100% !important;
        margin: 0;
        background: #a86d37 !important;
    }
`,hn=({amount:e,percents:t})=>{const{t:n}=Object(V.a)(["portfolio"]);return i.a.createElement(En,null,e," ",i.a.createElement("span",{className:"hide"},"_"),i.a.createElement(vn,{negative:t<0},t>=0&&"+",t,"%"))},xn=({cash:e,routeToDeposit:t})=>{const{t:n}=Object(V.a)(["portfolio"]);return i.a.createElement(wn,null,i.a.createElement(fn,null,i.a.createElement("h2",null,n("cellar-list.power")),i.a.createElement("p",null,n("cellar-list.disclaimer"))),i.a.createElement(jn,{src:Jt.a,alt:"buying power"}),i.a.createElement("div",null,i.a.createElement(On,null,"$",e),i.a.createElement(Cn,{onClick:t},n("cellar-list.add-funds"))))},un=o.e.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 34px 39px;
    grid-template-areas: ". . . .";
    margin-top: 36px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: ". . .  ";
    }
    @media screen and (max-width: 835px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: ". . .";
        gap: 20px 25px;
        margin-top: 0px;
    }
    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: ". . . ";
        gap: 13px 13px;
        margin-top: 0px;
    }

    @media screen and (max-width: 575px) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: ". .";
        gap: 13px 13px;
        margin-top: 0px;
    }

    @media screen and (max-width: 320px) {
        grid-template-columns: 1fr;
        grid-template-areas: ".";
        gap: 13px 13px;
        margin-top: 0px;
    }
`,gn=o.e.div`
    height: 550px;
    background: ${e=>e.theme.colors.white};
    border: 1px solid ${e=>e.theme.colors.lighterGray};
    box-sizing: border-box;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: ${e=>e.theme.colors.mainAccentBlue};

    h2 {
        margin: 0;
        margin-top: 30px;
        height: 60px;
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.005em;
        padding: 0 33px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media screen and (max-width: 767px) {
        height: 360px;
        display: flex;
        flex-direction: column;
        padding-bottom: 15px;

        h2 {
            height: 39px;
            margin-top: 20.39px;
            font-size: 14px;
            line-height: 21px;
            width: 100%;
            padding: 0 10px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 482px;
    }
`,fn=o.e.div`
    display: flex;
    flex-direction: column;
`,bn=o.e.img`
    display: block;
    margin: 29px auto 0;
    height: 343px;
    width: 100%;
    object-fit: scale-down;

    @media screen and (max-width: 767px) {
        height: 199.11px;
        margin-top: 16.5px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 265.59px;
        margin-top: 13px;
    }
`,wn=Object(o.e)(gn)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-bottom: 40px;

    p {
        width: 161px;
        height: 56px;
        font-family: Vinovest;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.005em;
        color: #767a7f;
        margin-top: 21px;
    }
    h2 {
        height: 18px;
        color: ${e=>e.theme.colors.dark30};
    }

    @media screen and (max-width: 767px) {
        justify-content: space-around;
        padding: 55px 0 68px;

        h2 {
            overflow: unset;
            padding: 0;
            height: 18px;
            font-size: 14px;
            line-height: 21px;
        }
    }
`,yn=o.e.div`
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 33px 31px 33px;

    @media screen and (max-width: 767px) {
        padding: 0 21px;
        margin: 0;
        align-items: center;
        flex-direction: column;
        justify-content: flex-end;
        flex-grow: 1;
    }
`,En=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: ${e=>e.theme.colors.dark30};
    display: flex;
    justify-content: center;

    .hide {
        opacity: 0;
        color: transparent;
    }

    @media screen and (max-width: 767px) {
        font-size: 11px;
        line-height: 21px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        margin-top: 9px;
    }
`,vn=o.e.span`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.005em;
    color: ${e=>e.negative?e.theme.colors.darkRed:e.theme.colors.lighterGreen};
`,kn=o.e.div`
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 25px;
    font-size: 14px;

    @media screen and (max-width: 767px) {
        font-size: 11px;
        line-height: 21px;
    }
`,jn=o.e.img`
    width: 100px;

    @media screen and (max-width: 767px) {
        width: 60px;
    }
`,On=o.e.div`
    margin-top: 20px;
    color: ${e=>e.theme.colors.dark30};

    @media screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 26px;
        margin-top: 21px;
    }
`,Cn=Object(o.e)(ln.a)`
    width: 169px;
    height: 47px;
    margin: 34px auto 0;

    @media screen and (max-width: 767px) {
        margin-top: 39px;
        width: 116px;
        height: 30px;
        font-size: 11px;
        line-height: 16px;
        padding: 0;
    }
`;var zn=({wines:e,openModal:t,cash:n,winesContentfulCollection:a,preloadWines:o})=>{const{t:l}=Object(V.a)(["portfolio"]),s=e=>Object(p.get)(a,`${e}.bottleImage.fields.file.url`,""),c=Object(r.b)("/deposit/add-funds",tn.a.AddFunds);return i.a.createElement(un,null,e.map((({lwin18:e,lwin11:n,sizeByML:o,total:l,isFuture:r,preload:c},d)=>i.a.createElement(gn,{style:c?{background:"#eee"}:{cursor:"pointer"},key:`${e} ${d}`,onClick:()=>t(d)},c?i.a.createElement(rn,null):i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,Object(p.get)(a,`${n}.displayName`)," ",r?" (Wine Futures)":n.slice(-4)),i.a.createElement(bn,{src:s(n)||lt.a,alt:"wine"}),i.a.createElement(yn,null,i.a.createElement(kn,null,i.a.createElement(F,{lwin18:e,total:l,sizeByML:o})),i.a.createElement(hn,{amount:Object(G.c)(+l.positionTotal.amount/100),percents:l.positionTotalPercentage})))))),o?i.a.createElement(gn,null,i.a.createElement(sn,null,i.a.createElement(Cn,{onClick:c},l("cellar-list.add-funds")))):i.a.createElement(xn,{cash:n,routeToDeposit:c}))};const Mn=o.e.span`
    white-space: nowrap;
`,Tn=Object(o.e)(R)`
    @media screen and (max-width: 1023px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        border: 0;
    }
`,$n=Object(o.e)(S)`
    @media screen and (max-width: 1023px) {
        margin-right: 18px;
        padding-left: 14px;
        margin-top: 9px;
        margin-bottom: 6px;
    }
`;var Vn=({cellarViewState:e})=>{const{t}=Object(V.a)(["portfolio"]),n=Object(r.d)(1023),a=Object(r.d)(1024);return i.a.createElement(Tn,{pale:"grid"===e},i.a.createElement($n,{style:{paddingLeft:"14px",textAlign:"left"}},t("wine-cellar.list-view-titles.wine")),!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(S,null,i.a.createElement(Mn,null,t("wine-cellar.list-view-titles.quantity")," ",i.a.createElement(Y.a,{text:t("wine-cellar.list-view-titles.tooltip-quantity")},i.a.createElement("img",{src:ve.a,alt:"info"})))),i.a.createElement(S,null,t("wine-cellar.list-view-titles.avg-cost")," ",i.a.createElement(Mn,null,t("wine-cellar.list-view-titles.basis")," ",i.a.createElement(Y.a,{text:t("wine-cellar.list-view-titles.tooltip-cost-basis")},i.a.createElement("img",{src:ve.a,alt:"info"}))))),i.a.createElement(i.a.Fragment,null,i.a.createElement($n,null,t("wine-cellar.list-view-titles.position")," ",i.a.createElement(Mn,null,t("wine-cellar.list-view-titles.total")," ",i.a.createElement(Y.a,{toRight:a,text:t("wine-cellar.list-view-titles.tooltip-position")},i.a.createElement("img",{src:ve.a,alt:"info"}))))))},Fn=n(915),Pn=n.n(Fn);const Rn=({title:e,value:t,className:n,withRightGup:a})=>i.a.createElement(Nn,{className:n,end:"true"},i.a.createElement(Bn,null,e),i.a.createElement(In,{nowWrap:!0,withRightGup:a},t)),Sn=({wide:e})=>{const t=Object(r.d)(767),n=Object(r.d)(1024);let a=["90px","135px"];return t?a=["45px","67.5px"]:n&&(a=["75px","90px"]),i.a.createElement(u.a,{style:{height:t?"15px":"20px",width:e?a[0]:a[1],display:"block",margin:"0 0 0 auto",background:"#303941"}})},Dn=o.e.div`
    position: sticky;
    top: calc(100vh - 145px);

    @media screen and (max-width: 767px) {
        top: calc(100vh - 175px);
    }

    @media screen and (min-width: 768px) and (max-width: 768px) {
        top: calc(100vh - 237px);
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
        top: calc(100vh - 200px);
    }
`,An=Object(o.e)(P)`
    height: 100px;
    background: ${e=>e.theme.colors.mainAccentBlue};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin-top: 33px;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;

    @media screen and (max-width: 767px) {
        height: 64px;
        padding: 0 22px 0 24px;
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0px 0px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        height: 110px;
    }
`,Nn=Object(o.e)(S)`
    @media screen and (max-width: 767px) {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: ${({end:e})=>e?"flex-end":"flex-start"};
        justify-content: space-between;
        padding: 0;
    }
`,Ln=o.e.span`
    white-space: nowrap;
`,Wn=o.e.div`
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: ${e=>e.theme.colors.mainInnerTaupe};
    text-align: left;
    margin-left: 48px;

    @media screen and (max-width: 767px) {
        margin: 0;
        font-size: 20px;
        line-height: 32px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 32px;
        line-height: 41px;
    }
`,Bn=o.e.div`
    height: 32px;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.025em;
    text-align: right;
    text-transform: uppercase;
    color: ${e=>e.theme.colors.mainInnerTaupe};
    white-space: nowrap;
    max-width: 100%;

    @media screen and (max-width: 767px) {
        height: fit-content;
        padding: 0;
        margin: 5px 0 0 0;
        font-size: 11px;
        line-height: 16px;
        white-space: nowrap;
    }
`,In=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    letter-spacing: 0.005em;
    color: ${e=>e.theme.colors.mainInnerTaupe};
    ${({nowWrap:e})=>e?"white-space: nowrap;":""}

    @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 21px;
        margin: 4px 0 0 0;
        height: fit-content;

        ${({withRightGup:e})=>e?"margin-right: 16px;":""}
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 20px;
        line-height: 36px;
    }
`;var qn=Object(l.a)((({preload:e})=>{const{t}=Object(V.a)(["portfolio"]),n=Object(r.d)(767),a=Object(r.d)(1024),{bottleCount:o="0",costBasis:l,positionTotal:s}={...Object(r.f)().portfolio.totals},c=i.a.createElement(i.a.Fragment,null,!n&&t("wine-cellar.totals.position")," ",i.a.createElement(Ln,null,t(n?"wine-cellar.totals.position":"wine-cellar.totals.total")," ",i.a.createElement(Y.a,{text:t("wine-cellar.totals.tooltip-position"),toRight:a},i.a.createElement("img",{src:Pn.a,alt:"info"})))),p=i.a.createElement(i.a.Fragment,null,!n&&t("wine-cellar.totals.total_title")," ",t("wine-cellar.totals.cost")," ",i.a.createElement(Ln,null,t("wine-cellar.totals.basis")," ",i.a.createElement(Y.a,{text:t("wine-cellar.totals.tooltip-total-cost")},i.a.createElement("img",{src:Pn.a,alt:"info"})))),d=i.a.createElement(i.a.Fragment,null,i.a.createElement(Ln,null,t("wine-cellar.totals.total_title")," ",i.a.createElement(Y.a,{text:t("wine-cellar.totals.tooltip-quantity")},i.a.createElement("img",{src:Pn.a,alt:"info"}))));return e?i.a.createElement(Dn,null,i.a.createElement(An,null,i.a.createElement(Nn,{className:"titleCellTotals"},i.a.createElement(Wn,null,i.a.createElement(u.a,{style:{height:"38px",width:n?"67.5px":"135px",display:"block",background:"#303941"}}))),!n&&i.a.createElement(Rn,{className:"titleCellValue-a",title:i.a.createElement(Sn,null),value:i.a.createElement(Sn,{wide:!0})}),i.a.createElement(Rn,{className:"titleCellValue-b",title:i.a.createElement(Sn,null),value:i.a.createElement(Sn,{wide:!0})}),i.a.createElement(Rn,{className:"titleCellValue-d",title:i.a.createElement(Sn,null),value:i.a.createElement(Sn,{wide:!0})}))):i.a.createElement(Dn,null,i.a.createElement(An,null,i.a.createElement(Nn,{className:"titleCellTotals"},i.a.createElement(Wn,null,t("wine-cellar.totals.cell_total"))),!n&&i.a.createElement(Rn,{className:"titleCellValue-a",title:d,value:+o?t("common:utils.shared.bottle",{count:o}):"---"}),i.a.createElement(Rn,{className:"titleCellValue-b",title:p,value:`${l&&l.amount?Object(G.c)(l.amount/100):"---"}`,withRightGup:!0}),i.a.createElement(Rn,{className:"titleCellValue-d",title:c,value:`${s&&s.amount?Object(G.c)(s.amount/100):"---"}`})))}));var _n=({mobileMax:e,isTablet:t})=>e?i.a.createElement(u.a,{style:{marginBottom:"32px",height:"32px",width:"142.61px",display:"block"}}):t?i.a.createElement(u.a,{style:{height:"39px",width:"180px",display:"block"}}):i.a.createElement(u.a,{style:{height:"39px",width:"323px",display:"block"}}),Gn=n(699);const Hn=o.e.div`
    width: 100%;
    padding: 53px 100px 191px 100px;
    position: relative;

    @media screen and (max-width: 767px) {
        padding: 0 10px 80px;
    }
    @media screen and (max-width: 1024px) {
        padding: 0 10px 133px;
    }
`,Un=o.e.div`
    width: 100%;
    padding: 46px 0 0;

    @media screen and (max-width: 767px) {
        padding: 0;
    }
`,Xn=o.e.div`
    width: 100%;
    position: absolute;
    top: ${({top:e})=>e};
`,Yn=o.e.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        padding: 32px 10px 40px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        flex-direction: row;
        padding: 65px 7px 28px 17px;
    }
`,Qn=o.e.h2`
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 60px;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 767px) {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 32px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 32px;
        line-height: 41px;
        margin-bottom: 0;
    }
`,Zn=o.e.button`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #a8abad;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #242e35;
    max-width: 335px;
    margin: 51px auto 0;
    width: 100%;
    height: 50px;
    background: transparent;
    outline: 0;
    transition: 0.5s;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.7;
        cursor: default;
    }
`;var Jn=n(916),Kn=n.n(Jn);const ea=o.e.div`
    min-height: 741px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 135px;
    }

    @media screen and (max-width: 767px) {
        min-height: 408px;

        img {
            margin-top: 39px;
        }
    }
`,ta=Object(o.e)(ln.a)`
    height: 44px;
    width: 135px;
    font-size: 16px;
    line-height: 23px;
    margin-top: 34px;
`,na=o.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #242e35;
    margin-top: 34px;

    @media screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 26px;
    }
`;var aa=({hasMoney:e})=>{const{t}=Object(V.a)(["portfolio"]),n=Object(r.b)("/deposit/add-funds",tn.a.AddFunds);return i.a.createElement(ea,null,i.a.createElement("img",{src:Kn.a,alt:"empty icon"}),i.a.createElement(na,null,t(e?"wine-cellar.empty-cellar.funded":"wine-cellar.empty-cellar.empty")),i.a.createElement(ta,{onClick:n},t("wine-cellar.empty-cellar.add-funds")))};const ia=[{preload:"preload-1"},{preload:"preload-2"},{preload:"preload-3"},{preload:"preload-4"}];var oa=Object(l.a)((({wines:e,openModal:t,fetchWinesData:n})=>{const{t:o}=Object(V.a)(["portfolio"]),l=Object(r.f)(),[s,c]=Object(a.useState)("grid"),{mobileMax:p,tablet:d}=kt.b,m=Object(r.d)(d),x=Object(r.d)(),u=Object(r.d)(p),{cash:g,winesContentfulCollection:f}=l.portfolio,[b,w]=Object(Gn.a)({}),y=Object(h.f)(l.portfolio.winesListEntity).isPending(),E=l.user.oktaUserInfo.sub,v=(y||!E)&&!e.length,{totalAccountValue:k}=l.portfolio;let j=!1,O=x?"750px":"1000px";return e.length<=4&&!u&&(O="list"===s?"400px":"800px"),w&&w.boundingClientRect&&(j=!!(w.intersectionRatio||w.boundingClientRect.top<0)),i.a.createElement(i.a.Fragment,null,i.a.createElement(Hn,null,i.a.createElement(Yn,null,v?i.a.createElement(_n,{mobileMax:u,isTablet:m}):i.a.createElement(Qn,null,o("wine-cellar.title")),i.a.createElement($t,{selected:s,toggle:()=>c((e=>"grid"===e?"list":"grid"))})),j&&i.a.createElement(qn,{preload:!(E&&!v)}),i.a.createElement(Un,null,("list"===s||!m)&&i.a.createElement(Vn,{cellarViewState:s}),i.a.createElement(Xn,{ref:b,top:O}),e.length||y||v?i.a.createElement("div",null,"list"===s?i.a.createElement(on,{wines:y||v?[...e,...ia]:e,winesContentfulCollection:f,openModal:t,cash:g,preloadWines:v}):i.a.createElement(zn,{wines:y||v?[...e,...ia]:e,winesContentfulCollection:f,openModal:t,cash:g,preloadWines:v})):i.a.createElement(aa,{hasMoney:k})),m&&n.nextPageToken&&!y&&i.a.createElement(Zn,{type:"button",onClick:n.fetchPortfolioWines},o("wine-cellar.buttons.load"))))})),la=n(702);function ra(e,t,n){if(n.current){const a=n.current.getBoundingClientRect(),{width:i,height:o}=a,l=e-a.x,r=t-a.y,s=i/2,c=o/2;return[i/2>s- -1*l?l:-(i-l)+s,o/2>c- -1*r?r:-(o-r)+c]}return[e-window.document.innerWidth,t-window.document.innerHeight]}var sa=()=>{const[{xy:e},t]=Object(la.b)((()=>({xy:[0,0],config:{mass:10,tension:550,friction:140}}))),n=Object(r.f)(),a=n.portfolio.winesList.wines.length&&n.portfolio.featuredWine.lwin18,o=Object(h.f)(n.portfolio.featuredWineEntity).isPending(),l=Object(h.f)(n.portfolio.featuredWineEntity).isDone(),{lwin11:s,percentReturn:c,returnText:d,lwin18:m}=n.portfolio.featuredWine,{winesContentfulCollection:x,winesCollection:u}=n.portfolio;i.a.useEffect((()=>{n.auth.isAuthenticated&&n.user.oktaUserInfo&&n.user.oktaUserInfo.sub&&(o||l||n.portfolio.fetchPortfolioFeatured())}),[n.auth.isAuthenticated,n.user.oktaUserInfo.sub]);const g=s?Object(p.get)(x,`${s}.displayName`,""):"",f=s?Object(p.get)(x,`${s}.critics`,[]):[],b=Object(p.get)(x,`${s}.bottleImage.fields.file.url`,""),w=Object(p.get)(u,`${m}.data.producerData.vineyardBackground.fields.file.url`,it.a),y=Object(p.get)(u,`${m}.data.producerData.description`),E=Object(p.get)(u,`${m}.data.isFuture`);return{calcHoverPositions:ra,translate1:(e,t)=>`translate3d(${.05*-e}px,${.05*-t}px,0)`,translate2:(e,t)=>`translate3d(${.05*e}px,${.05*t}px,0)`,xy:e,set:t,learnMoreActive:a,isPending:o,isDone:l,lwin11:s,percentReturn:c,returnText:d,lwin18:m,winesContentfulCollection:x,winesCollection:u,displayName:g,critics:f,bottleImage:b,heroMask:w,producerDescription:y,cursor:a?{cursor:"pointer"}:{},checkPending:o||!l,isFuture:E}};const ca=o.e.div`
    background-color: #f3f7fa;
    width: 100%;
    overflow: hidden;
    position: relative;
`,pa=o.e.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 96px 130px 61px 135px;
    display: flex;
    justify-content: space-between;
    background-repeat: no-repeat;
    background-position: top 130px right 130px;
    position: relative;
    background-size: 688px;
    z-index: 1;

    @media screen and (max-width: 767px) {
        padding: 31px 36px 0;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-position: center bottom 62.85px;
        background-size: 340px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        background-position: top 100px right;
        padding: 73px 58px 63px 71px;
        background-size: 504px;
    }
`,da=o.e.div`
    max-width: 480px;
    p {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.005em;
        color: #384147;
        margin-bottom: 45px;
        font-family: VinovestMedium;
    }
    h1 {
        margin: 0;
        font-family: RoslindaleDisplayCondensed;
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 84px;
        margin-bottom: 19px;
        display: inline-flex;

        &.lowerCase {
            font-size: 45px;
            line-height: 60px;
        }
    }
    @media screen and (max-width: 767px) {
        max-width: 100%;
        width: 100%;
        padding-bottom: 0;
        h1 {
            width: 100%;
            font-size: 32px;
            line-height: 41px;
            text-align: center;
            display: flex;
            justify-content: center;
            margin-bottom: 18px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        padding-bottom: 0;
        p {
            font-size: 14px;
            line-height: 21px;
            margin: 0;
        }
        h1 {
            font-size: 36px;
            line-height: 54px;
            margin-bottom: 23px;
        }
    }
`,ma=Object(o.e)(la.a.div)`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #4f1c28;
    margin-bottom: 15px;
    @media screen and (max-width: 767px) {
        font-size: 11px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.025em;
        margin-bottom: 11px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 11px;
        line-height: 16px;
        margin-bottom: 7px;
    }
`,ha=Object(o.e)(la.a.div)`
    display: flex;
`,xa=o.e.button`
    font-family: VinovestMono;
    border: 1px solid #a8abad;
    background: none;
    color: #242e35;
    width: 151px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    transition: 0.5s;
    margin-bottom: 21px;
    padding-top: 2px;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
    &:disabled {
        cursor: default;
        opacity: 0.6;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        margin-top: 23px;
        margin-bottom: 0px;
        font-size: 11px;
        line-height: 16px;
        width: 151px;
        height: 36px;
    }
`,ua=Object(o.e)(xa)`
    font-size: 14px;
    line-height: 18px;
    height: 36px;
    margin-top: 22px;
`,ga=o.e.div`
    display: flex;
    justify-content: center;
    height: fit-content;
    img {
        object-fit: contain;
        height: 455px;
        width: 455px;
        @media screen and (min-width: 768px) and (max-width: 1024px) {
            width: 374px;
            height: 349px;
        }
    }
    @media screen and (max-width: 767px) {
        position: relative;
        top: 0;
        right: 0;
        width: 252.97px;
        flex-shrink: 0;
        height: 252.97px;
        img {
            height: 252.97px;
        }
    }
`,fa=Object(o.e)(ga)`
    position: relative;
    right: 100px;
    height: fit-content;

    @media screen and (max-width: 767px) {
        position: relative;
        top: 0;
        right: 0;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        right: -8px;
        top: -22px;
    }
`,ba=o.e.div`
    height: 151px;
    width: 151px;
    position: absolute;
    bottom: -29px;
    right: -107.5px;

    @media screen and (max-width: 767px) {
        height: 70px;
        width: 70px;
        bottom: -10px;
        right: -55px;
    }
    @media screen and (max-width: 374px) {
        right: -35px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        height: 120px;
        width: 120px;
        right: -20px;

        .svgTextScore {
            font-size: 30px;
        }
    }
`,wa=Object(o.e)(Object(la.a)(pa))`
    position: absolute;
    bottom: 0px;
    right: 0px;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: #f3f7fa;
    ${A};
`,ya=({height:e})=>i.a.createElement(u.a,{style:{width:"100%",height:e}}),Ea=()=>{const{t:e}=Object(V.a)(["portfolio"]);return i.a.createElement(Ma,null,i.a.createElement(u.a,{style:{height:"11px",width:"60%",margin:"10px auto",display:"block"}}),i.a.createElement(u.a,{style:{height:"15px",width:"70%",margin:"20px auto",display:"block"}}),i.a.createElement(u.a,{style:{height:"15px",width:"70%",margin:"10px auto",display:"block"}}),i.a.createElement(u.a,{style:{height:"230px",width:"80%",margin:"40px auto 40px",display:"block"}}),i.a.createElement(ua,{disabled:!0,className:"learnMoreMobile"},e("hero.pending-learn")))},va=()=>{const{t:e}=Object(V.a)(["portfolio"]);return i.a.createElement(Ta,null,i.a.createElement(Oa,{styles:"max-width: 159px; margin-top: 21px;"},i.a.createElement(ya,{height:"15px"})),i.a.createElement(za,null,i.a.createElement(ya,{height:"30px"})),i.a.createElement(za,null,i.a.createElement(ya,{height:"30px"})),i.a.createElement(Oa,{styles:"max-width: 259px; margin-top: 21px;"},i.a.createElement(ya,{height:"15px"})),i.a.createElement(Oa,{styles:"max-width: 259px; margin-top: 13px;"},i.a.createElement(ya,{height:"15px"})),i.a.createElement(Oa,{styles:"max-width: 159px; margin-top: 13px; margin-bottom: 20px"},i.a.createElement(ya,{height:"15px"})),i.a.createElement(xa,{disabled:!0}," ",e("hero.pending-learn")))},ka=()=>{const{t:e}=Object(V.a)(["portfolio"]);return i.a.createElement(Ma,null,i.a.createElement(Ca,null,i.a.createElement(ya,{height:"15px"})),i.a.createElement(za,null,i.a.createElement(ya,{height:"39px"})),i.a.createElement(za,null,i.a.createElement(ya,{height:"39px"})),i.a.createElement(Oa,{styles:"max-width: 359px; margin-top: 41px;"},i.a.createElement(ya,{height:"15px"})),i.a.createElement(Oa,{styles:"max-width: 359px; margin-top: 13px;"},i.a.createElement(ya,{height:"15px"})),i.a.createElement(Oa,{styles:"margin-top: 13px; margin-bottom: 60px"},i.a.createElement(ya,{height:"15px"})),i.a.createElement(xa,{disabled:!0}," ",e("hero.pending-learn")))},ja=Object(o.e)(ca)`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    height: ${({height:e})=>e||"650px"};
    padding: ${({padding:e})=>e||"95px 100px 98px"};

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`,Oa=o.e.div`
    max-width: 249px;
    width: 100%;
    ${({styles:e})=>e||""}
`,Ca=Object(o.e)(Oa)`
    margin-top: 22px;
    margin-bottom: 52px;
`,za=o.e.div`
    max-width: 359px;
    width: 100%;
    margin-top: 30px;

    @media screen and (max-width: 767px) {
        max-width: 159px;
    }
`,Ma=Object(o.e)(ca)`
    max-width: 477px;
    width: 100%;
    margin-right: 118px;

    @media screen and (max-width: 767px) {
        margin: 0 auto;

        .learnMoreMobile {
            margin: 0 auto;
        }
    }

    @media screen and (min-width: 1024px) {
        margin-left: 39px;
    }
`,Ta=Object(o.e)(ca)`
    max-width: 477px;
    width: 100%;
    margin-right: 60px;
    flex-shrink: 1;
`,$a=Object(o.e)(ca)`
    max-width: 720px;
    width: 100%;
`;var Va=({isMobile:e,isTablet:t})=>i.a.createElement(ja,{height:e?"490px":t?"485px":"650px",padding:e?"31px 10px 21px":t?"73px 71px 63px":"95px 100px 98px"},e?i.a.createElement(Ea,null):t?i.a.createElement(va,null):i.a.createElement(ka,null),!e&&i.a.createElement($a,null,i.a.createElement(ya,{height:e?"253px":t?"349px":"453px"})));var Fa=({onClick:e,disabled:t,children:n})=>{const a=i.a.cloneElement(n,{onClick:t=>{t.stopPropagation(),e()}});return i.a.createElement(i.a.Fragment,null,t?n:a)};const Pa=Object(o.e)(la.a.div)`
    position: absolute;
    right: -82px;
    top: 52px;
    min-width: 150px;
    padding: 9px 19px 11px 21px;
    background: #242e35;
    color: #efddc7;
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.4));

    .arrow {
        background: #242e35;
        height: 100px;
        width: 2px;
        position: absolute;
        left: 0;
        position: absolute;
        right: 0;
        bottom: -100%;
        transform: rotate(-135deg) translate(24px, -24px);
    }
    .heroPercents {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .heroPercentsNum {
        font-family: RoslindaleDisplayCondensed;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
        color: #efddc7;
    }
    .heroPercentsCircle {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #efddc7;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 6.37px;
    }
    .heroMonthReturn {
        white-space: nowrap;
        font-family: VinovestMono;
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        min-height: 16px;
        letter-spacing: 0.025em;
        text-transform: uppercase;
        color: #efddc7;
    }
    @media screen and (max-width: 767px) {
        right: -51px;
        top: 36px;
        min-width: 115px;
        padding: 11px 7px 8.39px 12px;
        .arrow {
            height: 22.63px;
            width: 2px;
            left: 0;
            right: 0;
            bottom: -15%;
            transform: rotate(-135deg) translate(0px, -10px);
            &:after {
                content: "";
                position: absolute;
                top: -8px;
                left: -3px;
                width: 5px;
                height: 5px;
                background: #fae8d1;
                border: 2px solid #242e35;
                border-radius: 50%;
            }
        }
        .heroPercentsNum {
            font-size: 26px;
            line-height: 35px;
        }
        .heroPercentsCircle {
            width: 24.84px;
            height: 24.84px;
        }
        .heroMonthReturn {
            font-size: 9px;
            line-height: 13px;
            min-height: 13px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        right: -3px;
        top: 12px;
        min-width: 115px;
        padding: 11px 7px 8.39px 12px;
        .arrow {
            height: 58px;
            bottom: -76%;
            transform: rotate(-135deg) translate(18px, -4px);
            &:after {
                content: "";
                position: absolute;
                top: -8px;
                left: -3px;
                width: 5px;
                height: 5px;
                background: #fae8d1;
                border: 2px solid #242e35;
                border-radius: 50%;
            }
        }
        .heroPercentsNum {
            font-size: 26px;
            line-height: 38px;
        }
        .heroPercentsCircle {
            width: 24.84px;
            height: 24.84px;
        }
        .heroMonthReturn {
            font-size: 9px;
            line-height: 13px;
            min-height: 13px;
        }
    }
    @media screen and (max-width: 360px) {
        right: -35px;
        .arrow {
            height: 10px;
            bottom: -5%;
            transform: rotate(-135deg) translate(0px, -5px);
        }
    }
`;var Ra=({percentReturn:e,returnText:t,cursor:n,onClick:a=(()=>{}),style:o})=>i.a.createElement(Pa,{style:{...o,...n},onClick:a},i.a.createElement("div",{className:"arrow"}),i.a.createElement("div",{className:"heroPercents"},i.a.createElement("div",{className:"heroPercentsNum"},+e>=0&&"+",e,"%"),i.a.createElement("div",{className:"heroPercentsCircle"},i.a.createElement("svg",{width:"14",height:"10",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M1.00006 8L7.00006 2L13.0001 8",stroke:"#242E35",strokeWidth:"2"})))),i.a.createElement("div",{className:"heroMonthReturn"},t));var Sa=Object(l.a)((function({toggleModal:e}){const t=i.a.useRef(null),{t:n}=Object(V.a)(["portfolio"]),a=Object(r.d)(767),o=Object(r.d)(1024),{calcHoverPositions:l,translate1:s,translate2:c,xy:p,set:d,learnMoreActive:m,lwin11:h,percentReturn:x,returnText:u,displayName:g,critics:f,bottleImage:b,heroMask:w,producerDescription:y,cursor:E,checkPending:v,isFuture:k}=sa();return i.a.createElement(ca,null,v&&i.a.createElement(Va,{isMobile:a,isTablet:o}),!v&&h&&i.a.createElement("div",null,i.a.createElement(wa,{style:{backgroundImage:`url(${w})`,transform:p.interpolate(c),...E}}),i.a.createElement(pa,null,i.a.createElement(da,null,i.a.createElement(ma,null,n("hero.title")," "),i.a.createElement(Fa,{onClick:e,disabled:!m},i.a.createElement("h1",{style:E,className:!o&&g&&g.length>40?"lowerCase":""},g," ",k?n("hero.futures"):h.slice(-4))),!a&&y&&i.a.createElement(Fa,{onClick:e,disabled:!m},i.a.createElement(la.a.p,{style:E},y.length>96?`${y.slice(0,96)}...`:y)),!a&&i.a.createElement(ha,null,i.a.createElement(xa,{onClick:e,disabled:!m},n("hero.learn")))),i.a.createElement(fa,null,i.a.createElement(ga,{ref:t,onMouseMove:({clientX:e,clientY:n})=>d({xy:l(e,n,t)})},i.a.createElement(Fa,{onClick:e,disabled:!m},i.a.createElement(la.a.img,{src:b||lt.a,alt:"hero",style:{...E,transform:p.interpolate(s)}})),x&&i.a.createElement(Fa,{onClick:e,disabled:!m},i.a.createElement(Ra,{percentReturn:x,returnText:u,cursor:E,style:{transform:p.interpolate(s)}})),i.a.createElement(ba,null,i.a.createElement($,{data:f})))),a&&i.a.createElement(ua,{onClick:e,disabled:!m},n("hero.learn")))))}));const Da=Object(l.a)((()=>{const{t:e}=Object(V.a)(["portfolio"]),t=Object(r.f)(),[n,o]=Object(a.useState)(null),[l,c]=Object(a.useState)(!1),p=e=>o({index:e}),{winesList:d}=t.portfolio,m={fetchPortfolioWines:()=>d.nextPageToken&&t.portfolio.fetchPortfolioWines(),nextPageToken:d.nextPageToken};return i.a.createElement(s.e,{in:!0},i.a.createElement(i.a.Fragment,null,i.a.createElement(Sa,{toggleModal:()=>{if(t.portfolio.featuredWine){const{lwin18:e}=t.portfolio.featuredWine,n=d.wines.findIndex((t=>t.lwin18===e));n>=0?p(n):c(!0)}}}),i.a.createElement(Aa,null,i.a.createElement(oa,{wines:d.wines,openModal:p,fetchWinesData:m})),(n||l)&&i.a.createElement(vt,{wines:l?[t.portfolio.featuredWine]:d.wines,isModal:n||l,closeModal:()=>{o(null),c(!1)},goToSlide:l?0:n.index,fetchWinesData:m})))})),Aa=o.e.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
    padding-bottom: 0;
    color: ${e=>e.theme.colors.mainAccentBlue};
`;t.default=Da},699:function(e,t,n){"use strict";var a=n(0);t.a=({root:e=null,rootMargin:t,threshold:n=0})=>{const[i,o]=Object(a.useState)({}),l=Object(a.useRef)(null),r=Object(a.useRef)(new window.IntersectionObserver((([e])=>o(e)),{root:e,rootMargin:t,threshold:n}));return Object(a.useEffect)((()=>{const{current:e}=r;return e.disconnect(),l.current&&e.observe(l.current),()=>e.disconnect()}),[l.current]),[l,i]}},702:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return be})),n.d(t,"b",(function(){return I}));var o=n(0),l=n.n(o);const r={arr:Array.isArray,obj:e=>"[object Object]"===Object.prototype.toString.call(e),fun:e=>"function"===typeof e,str:e=>"string"===typeof e,num:e=>"number"===typeof e,und:e=>void 0===e,nul:e=>null===e,set:e=>e instanceof Set,map:e=>e instanceof Map,equ(e,t){if(typeof e!==typeof t)return!1;if(r.str(e)||r.num(e))return e===t;if(r.obj(e)&&r.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;let n;for(n in e)if(!(n in t))return!1;for(n in t)if(e[n]!==t[n])return!1;return!r.und(n)||e===t}};function s(){const e=Object(o.useState)(!1)[1];return Object(o.useCallback)((()=>e((e=>!e))),[])}function c(e,t){return r.und(e)||r.nul(e)?t:e}function p(e){return r.und(e)?[]:r.arr(e)?e:[e]}function d(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return r.fun(e)?e(...n):e}function m(e){const t=function(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,i(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(e);if(r.und(t))return a({to:t},e);const n=Object.keys(e).reduce(((n,i)=>r.und(t[i])?a({},n,{[i]:e[i]}):n),{});return a({to:t},n)}class h{constructor(){this.payload=void 0,this.children=[]}getAnimatedValue(){return this.getValue()}getPayload(){return this.payload||this}attach(){}detach(){}getChildren(){return this.children}addChild(e){0===this.children.length&&this.attach(),this.children.push(e)}removeChild(e){const t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()}}class x extends h{constructor(){super(...arguments),this.payload=[],this.attach=()=>this.payload.forEach((e=>e instanceof h&&e.addChild(this))),this.detach=()=>this.payload.forEach((e=>e instanceof h&&e.removeChild(this)))}}class u extends h{constructor(){super(...arguments),this.payload={},this.attach=()=>Object.values(this.payload).forEach((e=>e instanceof h&&e.addChild(this))),this.detach=()=>Object.values(this.payload).forEach((e=>e instanceof h&&e.removeChild(this)))}getValue(e){void 0===e&&(e=!1);const t={};for(const n in this.payload){const a=this.payload[n];(!e||a instanceof h)&&(t[n]=a instanceof h?a[e?"getAnimatedValue":"getValue"]():a)}return t}getAnimatedValue(){return this.getValue(!0)}}let g,f;function b(e,t){g={fn:e,transform:t}}function w(e){f=e}let y,E=e=>"undefined"!==typeof window?window.requestAnimationFrame(e):-1;function v(e){y=e}let k,j=()=>Date.now();function O(e){k=e}let C,z,M=e=>e.current;function T(e){C=e}class $ extends u{constructor(e,t){super(),this.update=void 0,this.payload=e.style?a({},e,{style:C(e.style)}):e,this.update=t,this.attach()}}let V=!1;const F=new Set,P=()=>{if(!V)return!1;let e=j();for(let t of F){let n=!1;for(let a=0;a<t.configs.length;a++){let i,o,l=t.configs[a];for(let t=0;t<l.animatedValues.length;t++){let a=l.animatedValues[t];if(a.done)continue;let r=l.fromValues[t],s=l.toValues[t],c=a.lastPosition,p=s instanceof h,d=Array.isArray(l.initialVelocity)?l.initialVelocity[t]:l.initialVelocity;if(p&&(s=s.getValue()),l.immediate)a.setValue(s),a.done=!0;else if("string"!==typeof r&&"string"!==typeof s){if(void 0!==l.duration)c=r+l.easing((e-a.startTime)/l.duration)*(s-r),i=e>=a.startTime+l.duration;else if(l.decay)c=r+d/(1-.998)*(1-Math.exp(-(1-.998)*(e-a.startTime))),i=Math.abs(a.lastPosition-c)<.1,i&&(s=c);else{o=void 0!==a.lastTime?a.lastTime:e,d=void 0!==a.lastVelocity?a.lastVelocity:l.initialVelocity,e>o+64&&(o=e);let t=Math.floor(e-o);for(let e=0;e<t;++e){d+=1*((-l.tension*(c-s)+-l.friction*d)/l.mass)/1e3,c+=1*d/1e3}let n=!(!l.clamp||0===l.tension)&&(r<s?c>s:c<s),p=Math.abs(d)<=l.precision,m=0===l.tension||Math.abs(s-c)<=l.precision;i=n||p&&m,a.lastVelocity=d,a.lastTime=e}p&&!l.toValues[t].done&&(i=!1),i?(a.value!==s&&(c=s),a.done=!0):n=!0,a.setValue(c),a.lastPosition=c}else a.setValue(s),a.done=!0}t.props.onFrame&&(t.values[l.name]=l.interpolation.getValue())}t.props.onFrame&&t.props.onFrame(t.values),n||(F.delete(t),t.stop(!0))}return F.size?z?z():E(P):V=!1,V};function R(e,t,n){if("function"===typeof e)return e;if(Array.isArray(e))return R({range:e,output:t,extrapolate:n});if(y&&"string"===typeof e.output[0])return y(e);const a=e,i=a.output,o=a.range||[0,1],l=a.extrapolateLeft||a.extrapolate||"extend",r=a.extrapolateRight||a.extrapolate||"extend",s=a.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,a,i,o,l,r,s){let c=s?s(e):e;if(c<t){if("identity"===l)return c;"clamp"===l&&(c=t)}if(c>n){if("identity"===r)return c;"clamp"===r&&(c=n)}if(a===i)return a;if(t===n)return e<=t?a:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),a===-1/0?c=-c:i===1/0?c+=a:c=c*(i-a)+a;return c}(e,o[t],o[t+1],i[t],i[t+1],s,l,r,a.map)}}class S extends x{constructor(e,t,n,a){super(),this.calc=void 0,this.payload=e instanceof x&&!(e instanceof S)?e.getPayload():Array.isArray(e)?e:[e],this.calc=R(t,n,a)}getValue(){return this.calc(...this.payload.map((e=>e.getValue())))}updateConfig(e,t,n){this.calc=R(e,t,n)}interpolate(e,t,n){return new S(this,e,t,n)}}function D(e,t){"update"in e?t.add(e):e.getChildren().forEach((e=>D(e,t)))}class A extends h{constructor(e){var t;super(),t=this,this.animatedStyles=new Set,this.value=void 0,this.startPosition=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.startTime=void 0,this.lastTime=void 0,this.done=!1,this.setValue=function(e,n){void 0===n&&(n=!0),t.value=e,n&&t.flush()},this.value=e,this.startPosition=e,this.lastPosition=e}flush(){0===this.animatedStyles.size&&D(this,this.animatedStyles),this.animatedStyles.forEach((e=>e.update()))}clearStyles(){this.animatedStyles.clear()}getValue(){return this.value}interpolate(e,t,n){return new S(this,e,t,n)}}class N extends x{constructor(e){super(),this.payload=e.map((e=>new A(e)))}setValue(e,t){void 0===t&&(t=!0),Array.isArray(e)?e.length===this.payload.length&&e.forEach(((e,n)=>this.payload[n].setValue(e,t))):this.payload.forEach((n=>n.setValue(e,t)))}getValue(){return this.payload.map((e=>e.getValue()))}interpolate(e,t){return new S(this,e,t)}}let L=0;class W{constructor(){this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=()=>this.interpolations,this.id=L++}update(e){if(!e)return this;const t=m(e),n=t.delay,o=void 0===n?0:n,l=t.to,s=i(t,["delay","to"]);if(r.arr(l)||r.fun(l))this.queue.push(a({},s,{delay:o,to:l}));else if(l){let e={};Object.entries(l).forEach((t=>{let n=t[0];const i=a({to:{[n]:t[1]},delay:d(o,n)},s),l=e[i.delay]&&e[i.delay].to;e[i.delay]=a({},e[i.delay],i,{to:a({},l,i.to)})})),this.queue=Object.values(e)}return this.queue=this.queue.sort(((e,t)=>e.delay-t.delay)),this.diff(s),this}start(e){if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach((e=>{let t=e.from,n=void 0===t?{}:t,i=e.to,o=void 0===i?{}:i;r.obj(n)&&(this.merged=a({},n,this.merged)),r.obj(o)&&(this.merged=a({},this.merged,o))}));const t=this.local=++this.guid,n=this.localQueue=this.queue;this.queue=[],n.forEach(((a,o)=>{let l=a.delay,s=i(a,["delay"]);const c=a=>{o===n.length-1&&t===this.guid&&a&&(this.idle=!0,this.props.onRest&&this.props.onRest(this.merged)),e&&e()};let p=r.arr(s.to)||r.fun(s.to);l?setTimeout((()=>{t===this.guid&&(p?this.runAsync(s,c):this.diff(s).start(c))}),l):p?this.runAsync(s,c):this.diff(s).start(c)}))}else r.fun(e)&&this.listeners.push(e),this.props.onStart&&this.props.onStart(),t=this,F.has(t)||F.add(t),V||(V=!0,E(z||P));var t;return this}stop(e){return this.listeners.forEach((t=>t(e))),this.listeners=[],this}pause(e){var t;return this.stop(!0),e&&(t=this,F.has(t)&&F.delete(t)),this}runAsync(e,t){var n=this;e.delay;let o=i(e,["delay"]);const l=this.local;let s=Promise.resolve(void 0);if(r.arr(o.to))for(let i=0;i<o.to.length;i++){const e=i,t=a({},o,m(o.to[e]));r.arr(t.config)&&(t.config=t.config[e]),s=s.then((()=>{if(l===this.guid)return new Promise((e=>this.diff(t).start(e)))}))}else if(r.fun(o.to)){let e,t=0;s=s.then((()=>o.to((n=>{const i=a({},o,m(n));if(r.arr(i.config)&&(i.config=i.config[t]),t++,l===this.guid)return e=new Promise((e=>this.diff(i).start(e)))}),(function(e){return void 0===e&&(e=!0),n.stop(e)})).then((()=>e))))}s.then(t)}diff(e){this.props=a({},this.props,e);let t=this.props,n=t.from,i=void 0===n?{}:n,o=t.to,l=void 0===o?{}:o,s=t.config,m=void 0===s?{}:s,h=t.reverse,x=t.attach,u=t.reset,g=t.immediate;if(h){var b=[l,i];i=b[0],l=b[1]}this.merged=a({},i,this.merged,l),this.hasChanged=!1;let w=x&&x(this);if(this.animations=Object.entries(this.merged).reduce(((e,t)=>{let n=t[0],o=t[1],l=e[n]||{};const s=r.num(o),h=r.str(o)&&!o.startsWith("#")&&!/\d/.test(o)&&!f[o],x=r.arr(o),b=!s&&!x&&!h;let E=r.und(i[n])?o:i[n],v=s||x||h?o:1,k=d(m,n);w&&(v=w.animations[n].parent);let O,C=l.parent,z=l.interpolation,M=p(w?v.getPayload():v),T=o;b&&(T=y({range:[0,1],output:[o,o]})(1));let $=z&&z.getValue();const V=!r.und(C)&&l.animatedValues.some((e=>!e.done)),F=!r.equ(T,$),P=!r.equ(T,l.previous),R=!r.equ(k,l.config);if(u||P&&F||R){if(s||h)C=z=l.parent||new A(E);else if(x)C=z=l.parent||new N(E);else if(b){let e=l.interpolation&&l.interpolation.calc(l.parent.value);e=void 0===e||u?E:e,l.parent?(C=l.parent,C.setValue(0,!1)):C=new A(0);const t={output:[e,o]};l.interpolation?(z=l.interpolation,l.interpolation.updateConfig(t)):z=C.interpolate(t)}return M=p(w?v.getPayload():v),O=p(C.getPayload()),u&&!b&&C.setValue(E,!1),this.hasChanged=!0,O.forEach((e=>{e.startPosition=e.value,e.lastPosition=e.value,e.lastVelocity=V?e.lastVelocity:void 0,e.lastTime=V?e.lastTime:void 0,e.startTime=j(),e.done=!1,e.animatedStyles.clear()})),d(g,n)&&C.setValue(b?v:o,!1),a({},e,{[n]:a({},l,{name:n,parent:C,interpolation:z,animatedValues:O,toValues:M,previous:T,config:k,fromValues:p(C.getValue()),immediate:d(g,n),initialVelocity:c(k.velocity,0),clamp:c(k.clamp,!1),precision:c(k.precision,.01),tension:c(k.tension,170),friction:c(k.friction,26),mass:c(k.mass,1),duration:k.duration,easing:c(k.easing,(e=>e)),decay:k.decay})})}return F?e:(b&&(C.setValue(1,!1),z.updateConfig({output:[T,T]})),C.done=!0,this.hasChanged=!0,a({},e,{[n]:a({},e[n],{previous:T})}))}),this.animations),this.hasChanged){this.configs=Object.values(this.animations),this.values={},this.interpolations={};for(let e in this.animations)this.interpolations[e]=this.animations[e].interpolation,this.values[e]=this.animations[e].interpolation.getValue()}return this}destroy(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0}}const B=(e,t)=>{const n=Object(o.useRef)(!1),a=Object(o.useRef)(),i=r.fun(t),l=Object(o.useMemo)((()=>{let n;return a.current&&(a.current.map((e=>e.destroy())),a.current=void 0),[new Array(e).fill().map(((e,a)=>{const o=new W,l=i?d(t,a,o):t[a];return 0===a&&(n=l.ref),o.update(l),n||o.start(),o})),n]}),[e]),s=l[0],c=l[1];a.current=s;Object(o.useImperativeHandle)(c,(()=>({start:()=>Promise.all(a.current.map((e=>new Promise((t=>e.start(t)))))),stop:e=>a.current.forEach((t=>t.stop(e))),get controllers(){return a.current}})));const p=Object(o.useMemo)((()=>e=>a.current.map(((t,n)=>{t.update(i?d(e,n,t):e[n]),c||t.start()}))),[e]);Object(o.useEffect)((()=>{n.current?i||p(t):c||a.current.forEach((e=>e.start()))})),Object(o.useEffect)((()=>(n.current=!0,()=>a.current.forEach((e=>e.destroy())))),[]);const m=a.current.map((e=>e.getValues()));return i?[m,p,e=>a.current.forEach((t=>t.pause(e)))]:m},I=e=>{const t=r.fun(e),n=B(1,t?e:[e]),a=n[0],i=n[1],o=n[2];return t?[a[0],i,o]:a};class q extends u{constructor(e){void 0===e&&(e={}),super(),!e.transform||e.transform instanceof h||(e=g.transform(e)),this.payload=e}}const _={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},G="[-+]?\\d*\\.?\\d+",H=G+"%";function U(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}const X=new RegExp("rgb"+U(G,G,G)),Y=new RegExp("rgba"+U(G,G,G,G)),Q=new RegExp("hsl"+U(G,H,H)),Z=new RegExp("hsla"+U(G,H,H,G)),J=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,K=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ee=/^#([0-9a-fA-F]{6})$/,te=/^#([0-9a-fA-F]{8})$/;function ne(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ae(e,t,n){const a=n<.5?n*(1+t):n+t-n*t,i=2*n-a,o=ne(i,a,e+1/3),l=ne(i,a,e),r=ne(i,a,e-1/3);return Math.round(255*o)<<24|Math.round(255*l)<<16|Math.round(255*r)<<8}function ie(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function oe(e){return(parseFloat(e)%360+360)%360/360}function le(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function re(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function se(e){let t=function(e){let t;return"number"===typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ee.exec(e))?parseInt(t[1]+"ff",16)>>>0:_.hasOwnProperty(e)?_[e]:(t=X.exec(e))?(ie(t[1])<<24|ie(t[2])<<16|ie(t[3])<<8|255)>>>0:(t=Y.exec(e))?(ie(t[1])<<24|ie(t[2])<<16|ie(t[3])<<8|le(t[4]))>>>0:(t=J.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=te.exec(e))?parseInt(t[1],16)>>>0:(t=K.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Q.exec(e))?(255|ae(oe(t[1]),re(t[2]),re(t[3])))>>>0:(t=Z.exec(e))?(ae(oe(t[1]),re(t[2]),re(t[3]))|le(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const ce=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,pe=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,de=new RegExp(`(${Object.keys(_).join("|")})`,"g");let me={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const he=["Webkit","Ms","Moz","O"];function xe(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||me.hasOwnProperty(e)&&me[e]?(""+t).trim():t+"px"}me=Object.keys(me).reduce(((e,t)=>(he.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),me);const ue={};T((e=>new q(e))),O("div"),v((e=>{const t=e.output.map((e=>e.replace(pe,se))).map((e=>e.replace(de,se))),n=t[0].match(ce).map((()=>[]));t.forEach((e=>{e.match(ce).forEach(((e,t)=>n[t].push(+e)))}));const i=t[0].match(ce).map(((t,i)=>R(a({},e,{output:n[i]}))));return e=>{let n=0;return t[0].replace(ce,(()=>i[n++](e))).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,((e,t,n,a,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(a)}, ${i})`))}})),w(_),b(((e,t)=>{if(!e.nodeType||void 0===e.setAttribute)return!1;{const o=t.style,l=t.children,r=t.scrollTop,s=t.scrollLeft,c=i(t,["style","children","scrollTop","scrollLeft"]),p="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName;void 0!==r&&(e.scrollTop=r),void 0!==s&&(e.scrollLeft=s),void 0!==l&&(e.textContent=l);for(let t in o)if(o.hasOwnProperty(t)){var n=0===t.indexOf("--"),a=xe(t,o[t],n);"float"===t&&(t="cssFloat"),n?e.style.setProperty(t,a):e.style[t]=a}for(let t in c){const n=p?t:ue[t]||(ue[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())));"undefined"!==typeof e.getAttribute(n)&&e.setAttribute(n,c[t])}}}),(e=>e));var ge,fe;const be=(ge=e=>Object(o.forwardRef)(((t,n)=>{const c=s(),p=Object(o.useRef)(!0),d=Object(o.useRef)(null),m=Object(o.useRef)(null),h=Object(o.useCallback)((e=>{const t=d.current;d.current=new $(e,(()=>{let e=!1;m.current&&(e=g.fn(m.current,d.current.getAnimatedValue())),m.current&&!1!==e||c()})),t&&t.detach()}),[]);Object(o.useEffect)((()=>()=>{p.current=!1,d.current&&d.current.detach()}),[]),Object(o.useImperativeHandle)(n,(()=>M(m,p,c))),h(t);const x=d.current.getValue(),u=(x.scrollTop,x.scrollLeft,i(x,["scrollTop","scrollLeft"])),f=(b=e,!r.fun(b)||b.prototype instanceof l.a.Component?e=>m.current=function(e,t){return t&&(r.fun(t)?t(e):r.obj(t)&&(t.current=e)),e}(e,n):void 0);var b;return l.a.createElement(e,a({},u,{ref:f}))})),void 0===(fe=!1)&&(fe=!0),e=>(r.arr(e)?e:Object.keys(e)).reduce(((e,t)=>{const n=fe?t[0].toLowerCase()+t.substring(1):t;return e[n]=ge(n),e}),ge))(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"])},724:function(e,t,n){e.exports=n.p+"static/media/bottle.d730be0a.svg"},749:function(e,t,n){"use strict";var a=n(0),i=n(1288),o=n(1307),l=n(1308),r=n(220),s=n.n(r),c=n(900);const p=(e,t)=>Math.min(...e.map(t)),d=(e,t)=>Math.max(...e.map(t)),m=e=>new Date(e.date),h=e=>e.price,x=Object(c.a)((e=>new Date(e.date))).left;t.a=({data:e,width:t,height:n,margin:r,showTooltip:c})=>{const u=t-r.left-r.right,g=n-r.top-r.bottom,f=Object(i.a)({range:[0,u],domain:(b=e,w=m,[p(b,w),d(b,w)])});var b,w;const y=Object(o.a)({range:[g,0],domain:[0,d(e,h)+g/3],nice:!0}),E=t=>{const{x:n}=Object(l.a)(t),a=f.invert(n),i=x(e,a,1),o=e[i-1],r=e[i];let p=o;r&&r.date&&(p=a-m(o.date)>m(r.date)-a?r:o),c({tooltipData:p,tooltipLeft:n,tooltipTop:y(s()(p,"price"))})};return Object(a.useMemo)((()=>({yMax:g,xMax:u,yScale:y,handleTooltip:E,xScale:f,yStock:h,xStock:m})),[g,u,t,n])}},804:function(e,t,n){e.exports=n.p+"static/media/info.a5d7164e.svg"},805:function(e,t,n){e.exports=n.p+"static/media/hero.de96d86b.svg"},806:function(e,t,n){e.exports=n.p+"static/media/bottleSkeleton.ca58f633.svg"},807:function(e,t,n){e.exports=n.p+"static/media/buyingPower.5fc36518.svg"},913:function(e,t,n){e.exports=n.p+"static/media/tick.9fa1c99b.svg"},914:function(e,t,n){e.exports=n.p+"static/media/circle.bc05a3fd.svg"},915:function(e,t,n){e.exports=n.p+"static/media/infoTotal.51013a88.svg"},916:function(e,t,n){e.exports=n.p+"static/media/emptyCellar.3a46abc5.svg"}}]);
//# sourceMappingURL=18.e086a8c9.chunk.js.map
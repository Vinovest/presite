(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[30],{687:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(6);const r={title:Object(i.get)(document.querySelector("title"),"innerText"),description:Object(i.get)(document.querySelector('[name="description"]'),"content")},s=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:c(t)})),{}),l=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:c(t)})),{});function c(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(i.get)(t,"content"),tagSelector:e};const a=document.createElement("meta");return a.setAttribute("property",e),a.setAttribute("content",""),{createNode:a,tagSelector:e}}const d=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},m=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(o.a.useEffect((()=>{const a=document.querySelector("title"),n=document.querySelector('[name="description"]');return a.innerHTML=e||r.title,n.content=t||r.description,Object.values(l).forEach(d(e)),Object.values(s).forEach(d(t)),()=>{a.innerHTML=r.title,n.content=r.description,Object.values(l).forEach(m()),Object.values(s).forEach(m())}}),[t,e]),null)},718:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(8),r=a(1);const s=()=>{const[e,t]=Object(n.useState)(!1),a=Object(i.a)(),r=Object(n.useCallback)((()=>{window.Calendly.showPopupWidget(a.calendly.ceoUrl)}),[a]),s=()=>t(!e);return o.a.createElement(c,{className:"overflow_Wrapper"},o.a.createElement(l,{className:e?"mouseIn":"mouseOut",onMouseEnter:()=>s(),onMouseLeave:()=>s(),onClick:r},o.a.createElement("h3",{className:"bannerTitle recomended"},o.a.createElement("span",{className:"sp_hide_mobile"},"Not sure which plan is best for you? "),o.a.createElement("span",{className:"sp_only_mobile"},"Undecided?")),o.a.createElement("div",{className:"contentWrapper"},o.a.createElement("h3",{className:"bannerTitle"},"Talk to a wine investor expert!"),o.a.createElement("div",{className:"arrowWrapper"},o.a.createElement("svg",{width:"100%",height:"22",viewBox:"0 0 380 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("line",{x1:"-8.74228e-08",y1:"11",x2:"377",y2:"11",stroke:"#242E35",strokeWidth:"2"}),o.a.createElement("path",{d:"M368 1L378 11L368 21",stroke:"#242E35",strokeWidth:"2"})))),o.a.createElement("div",{className:"circle1"}),o.a.createElement("div",{className:"circle2"})))},l=r.e.div`
    display: flex;
    cursor: pointer;
    position: relative;
    max-width: 980px;
    padding: 44px 20px;
    border: 4px solid #242e35;
    line-height: 150%;
    margin: 0 auto 0 auto;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 991px) {
        padding: 40px 20px;
    }

    .sp_only_mobile {
        display: none;
    }

    .bannerTitle {
        margin-top: 20px;
        margin-bottom: 10px;
        background-color: transparent !important;
        font-family: Roslindaledisplaycondensed, sans-serif;
        font-size: 34px;
        font-weight: 500;
    }
    .recomended {
        margin-right: 10px;
    }
    .contentWrapper {
        position: relative;
        display: inline-block;
        font-weight: 500;
        text-transform: none;
    }
    .arrowWrapper {
        position: absolute;
        left: 0;
        top: auto;
        right: 0;
        bottom: -23px;
    }
    .circle1 {
        position: absolute;
        left: 14.28%;
        bottom: -50px;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        z-index: -1;
        background-color: #efddc7;
    }
    .circle2 {
        position: absolute;
        left: auto;
        z-index: -1;
        top: -48px;
        border-radius: 50%;
        right: -6.42%;
        bottom: auto;
        width: 138px;
        height: 138px;
        background-color: #e6c9c9;
    }
    @media screen and (max-width: 991px) {
        .circle2 {
            top: 0;
            right: 0;
            transform: translate(50%, -34.78%);
        }
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        .sp_hide_mobile {
            display: none;
        }
        .bannerTitle {
            text-align: center;
            font-size: 24px;
        }
        .sp_only_mobile {
            display: block;
        }
    }
`,c=r.e.div`
    /* overflow: hidden; */
    padding: 46px 8.888% 0px 8.888%;

    @keyframes mouseIn {
        0% {
            background-color: transparent;
            color: rgb(36, 46, 53);
            stroke: rgb(36, 46, 53);
        }
        50% {
            background-color: rgb(36, 46, 53);
            color: rgb(36, 46, 53);
            stroke: rgb(36, 46, 53);
        }

        100% {
            background-color: rgb(36, 46, 53);
            color: rgb(255, 255, 255);
            stroke: rgb(255, 255, 255);
        }
    }
    @keyframes mouseOut {
        0% {
            background-color: rgb(36, 46, 53);
            color: rgb(255, 255, 255);
            stroke: rgb(255, 255, 255);
        }
        50% {
            background-color: transparent;
            color: rgb(255, 255, 255);
            stroke: rgb(255, 255, 255);
        }
        100% {
            background-color: transparent;
            color: rgb(36, 46, 53);
            stroke: rgb(36, 46, 53);
        }
    }
    .mouseIn {
        animation: mouseIn 0.2s ease forwards;
    }
    .mouseIn line,
    .mouseIn path,
    .mouseIn h3 {
        animation: mouseIn 0.2s ease forwards;
    }
    .mouseOut {
        animation: mouseOut 0.2s ease forwards;
    }
    .mouseOut line,
    .mouseOut path,
    .mouseOut h3 {
        animation: mouseOut 0.2s ease forwards;
    }
    @media screen and (max-width: 991px) {
        padding: 46px 6.666% 0px;
    }
    @media screen and (max-width: 768px) {
    }
`;s.styled={OverWrapper:c},t.a=s},781:function(e,t,a){e.exports=a.p+"static/media/whiteBottle.b793d159.png"},782:function(e,t,a){e.exports=a.p+"static/media/goldBottle.208bc9ef.png"},783:function(e,t,a){e.exports=a.p+"static/media/blackBottle.5eb9e488.png"},846:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(1),r=a(696),s=a.n(r),l=a(8),c=a(217),d=a(214),m=a(218),p=a(718),u=a(781),g=a.n(u),x=a(782),b=a.n(x),h=a(783),f=a.n(h);const w=[{img:g.a,title:"Standard",balance:"$1,000 MINIMUM BALANCE",annual:"2.85% ANNUAL FEE",colors:["rgb(36, 46, 53)","rgb(238, 239, 239)"],benefits:["Algorithmically-selected portfolios","Our guarantee for 100% authentic wines in excellent condition","Access to network of world-class wine storage facilities","Enrollment in our carbon offset program","Full insurance to protect your wines"]},{img:b.a,title:"Premium",balance:"$50,000 MINIMUM BALANCE",annual:"2.5% ANNUAL FEE",colors:["rgb(36, 46, 53)","rgb(239,221,199)"],benefits:["All of the benefits of our Standard plan","Dedicated portfolio advisor","Customized portfolio construction options in addition to our proprietary algorithms","Access to wine futures","Access to rare, auction - only wines","Exclusive invites to Vinovest wine tastings and events"]},{img:f.a,title:"Grand Cru",balance:"$250,000 MINIMUM BALANCE",annual:"2.25% ANNUAL FEE",colors:["rgb(239,221,199)","rgb(36, 46, 53)"],benefits:["All the benefits of our Premium plan","Preferred access to the rarest, most exclusive wine releases only available at this level","Personalized quarterly portfolio insight reports","Access to our Vinovest Advisory Council"]}];var k=a(687);const y=({embed:e})=>{const t=Object(l.d)(767),a=o.a.useRef(),{hasRevealed:n}=Object(c.a)({ref:a}),i=n?"runAnimation":"";return o.a.createElement(v,{ref:a},!e&&o.a.createElement(k.a,{title:"Vinovest | Pricing",description:"With 13.6% annualized returns over the past 15 years, fine wine has outperformed most global equities and is less volatile than real estate or gold."}),o.a.createElement(d.i,null,"ADD WINE TO YOUR PORTFOLIO"),o.a.createElement(d.d,{as:e?"h2":"h1"},"Our offerings"),t?o.a.createElement(s.a,{className:"slider",accessibility:!0,infinite:!0,autoplay:!1,slidesToShow:t?1:3,slidesToScroll:1,arrows:!0,dots:!0,dotsClass:"embed_slick_dts"},w.map(((e,t)=>o.a.createElement(_,{key:e.title,className:i,delay:t+1},o.a.createElement(E,{item:e,idx:t}))))):o.a.createElement(N,{width:e?"1143px":""},w.map(((e,t)=>o.a.createElement(E,{key:e.title,className:i,item:e,idx:t})))),t&&o.a.createElement(d.f,null,"Swipe right to see more plans!"),o.a.createElement(p.a,null))},E=({item:e,idx:t})=>o.a.createElement("div",{className:`slide_wrap slide_wrap${t}`},o.a.createElement("div",{className:"imgWrap"},o.a.createElement("img",{src:e.img,className:"img",alt:"item",height:"240",width:"305"})),o.a.createElement(d.h,{className:`card_title${t}`},e.title),o.a.createElement("div",{className:`condWrap condWrap${t}`},o.a.createElement(d.i,{className:"scheme"},e.balance),o.a.createElement(d.i,{className:"scheme"},e.annual)),o.a.createElement(m.a,{colors:e.colors},"GET STARTED"),o.a.createElement("ul",null,e.benefits.map((e=>o.a.createElement("li",{key:e.trim(),className:"benList"},o.a.createElement(d.e,null,e)))))),v=i.e.section`
    padding: 100px 8.888% 100px;
    margin: 0 auto;
    overflow: hidden;
    color: #242e35;

    .slide_wrap {
        padding: 0 26px 26px;
        max-width: 357px;
        width: 100%;
        outline: none !important;
        display: flex !important;
        flex-direction: column;
        align-items: center;
        min-height: 953px;
        color: #242e35;
        height: 100%;
    }

    ${d.d} {
        font-size: 64px;
        text-align: center;
        margin-bottom: 0px;

        @media screen and (max-width: 767px) {
            font-size: 48px;
            line-height: 54px;
            margin-bottom: 70px;
        }
    }
    ${d.i} {
        font-size: 18px;
        line-height: 178%;
        text-align: center;
        display: block;
        margin: 0 auto 25px;
    }
    .slick-track {
        max-width: 1062px;
    }
    .slick-slide {
        max-width: 357px;
    }
    .slick-track {
        display: flex;
        justify-content: space-between;
    }
    .slick-slide:not(:last-child) {
        margin-right: 36px;
    }
    .slide_wrap0 {
        background-color: #eeefef;
    }
    .slide_wrap1 {
        background-color: #efddc7;
    }
    .slide_wrap2 {
        background-color: #242e35;
        color: #efddc7;
    }
    .imgWrap {
        max-width: 305px;
        margin-bottom: 20px;
    }
    img {
        width: 100%;
    }
    ul {
        padding: 0;
        margin: 0;
    }
    li {
        list-style: none;
    }
    ${d.h} {
        font-size: 45px;
        margin-bottom: 25px;
        color: inherit;
    }

    .scheme {
        font-size: 14px;
        line-height: 225%;
        margin-bottom: 0;
    }
    .condWrap {
        margin-bottom: 40px;
        height: 85px;
        width: 97%;
        padding-top: 20px;
        border-top: 1px solid #242e35;
    }
    .condWrap2 {
        border-top: 1px solid #efddc7;
    }
    ${m.a.styled.WithLayers} {
        margin-bottom: 40px;
        min-width: 180px;
        width: 86%;
        max-width: 255px;
    }
    ${d.e} {
        font-size: 16px;
        font-family: "Favoritstd", sans-serif;
    }
    .benList:not(:last-child) {
        margin-bottom: 16px;
    }
    .slider {
        margin-bottom: 80px;
    }
    ${p.a.styled.OverWrapper} {
        margin-bottom: 0;
    }
    .slick_dts,
    .embed_slick_dts {
        display: flex !important;
        justify-content: center;
        margin: 10px auto 0;
    }
    .slick_dts button {
        background-color: #eeefef;
        border: none;
        outline: none;
        height: 30px;
        font-family: "Favoritstd", sans-serif;
        font-size: 18px;
    }
    .slick_dts button {
        margin-right: 2px;
    }
    .slick_dts .slick-active button {
        box-sizing: border-box;
        border: 2px solid orange !important;
    }
    .embed_slick_dts button {
        background-color: transparent;
        color: transparent !important;
        width: 16px;
        height: 16px;
        border-radius: 50% !important;
        margin: 0 8px;
        padding: 0;
        cursor: pointer;
        border: 2px solid #242e35;
        overflow: hidden;
    }

    .embed_slick_dts .slick-active button {
        background-color: #242e35;
        color: transparent !important;
    }

    @media screen and (max-width: 991px) {
        padding: 100px 6.666% 220px;
        .slick-track {
            max-width: unset;
        }
        .slick-slide {
            max-width: 100%;
            padding: 0 1px;
        }
        .slick-slide:not(:last-child) {
            margin-right: 0px;
        }
        .slide_wrap {
            max-width: 100%;
            min-height: fit-content;
        }
        .slider {
            margin-bottom: 40px;
        }
        ${d.f} {
            font-size: 24px;
            margin-bottom: 80px;
        }
        .overflow_Wrapper {
            padding: 30px 0 0;
        }
    }

    @media screen and (max-width: 991px) {
        .slide_wrap {
            min-height: 953px;
        }
    }
`,N=i.e.div`
    margin: 0 auto;
    max-width: ${({width:e})=>e||"968px"};
    display: grid;
    margin-top: 104px;
    grid-auto-columns: 1fr;
    grid-column-gap: 34px;
    grid-row-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin-bottom: 60px;

    @media screen and (max-width: 991px) {
        display: block;
    }
`,_=i.e.div`
    &.runAnimation {
        animation: fromBottomPricingAnimation ${({delay:e})=>.3*e}s linear;

        @keyframes fromBottomPricingAnimation {
            0% {
                opacity: 0;
                transform: translateY(20%);
            }

            20% {
                opacity: 0;
                transform: translateY(20%);
            }

            100% {
                opacity: 1;
                transform: translateY(0%);
            }
        }
    }
`;y.styled={Section:v,WideScreenWrapper:N};t.default=y}}]);
//# sourceMappingURL=30.5ef7cc20.chunk.js.map
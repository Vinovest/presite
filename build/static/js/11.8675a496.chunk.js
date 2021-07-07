(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[11],{1253:function(e,t,n){e.exports=n.p+"static/media/savePercents.0e6e00ab.svg"},1254:function(e,t,n){e.exports=n.p+"static/media/cross.45c684d6.svg"},1255:function(e,t,n){e.exports=n.p+"static/media/money.8fd42b6a.svg"},1256:function(e,t,n){e.exports=n.p+"static/media/pig.e6a0c593.svg"},1257:function(e,t,n){e.exports=n.p+"static/media/null-graph.55ddc9b3.svg"},1258:function(e,t,n){e.exports=n.p+"static/media/carat-left.eb3c9639.svg"},1259:function(e,t,n){e.exports=n.p+"static/media/carat-right.2d5c4420.svg"},1260:function(e,t,n){var a={"./DRC-romanee-conti-1999.svg":1261,"./carruades-lafite-2017.svg":1262,"./chateau-angelus-2009.svg":1263,"./chateau-calon-segur-1996.svg":1264,"./pape-clement-2005.svg":1265,"./petite-mouton-2015.svg":1266,"./sassicaia-2017.svg":1267,"./suduiraut-2018.svg":1268,"./vieux-telegraphe-chateauneuf-du-pape-2000.svg":1269};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=1260},1261:function(e,t,n){e.exports=n.p+"static/media/DRC-romanee-conti-1999.b49d21aa.svg"},1262:function(e,t,n){e.exports=n.p+"static/media/carruades-lafite-2017.84b324e8.svg"},1263:function(e,t,n){e.exports=n.p+"static/media/chateau-angelus-2009.9b82595c.svg"},1264:function(e,t,n){e.exports=n.p+"static/media/chateau-calon-segur-1996.dd141c74.svg"},1265:function(e,t,n){e.exports=n.p+"static/media/pape-clement-2005.40a2ff87.svg"},1266:function(e,t,n){e.exports=n.p+"static/media/petite-mouton-2015.023ac0ab.svg"},1267:function(e,t,n){e.exports=n.p+"static/media/sassicaia-2017.a998d53d.svg"},1268:function(e,t,n){e.exports=n.p+"static/media/suduiraut-2018.2ed0b8e4.svg"},1269:function(e,t,n){e.exports=n.p+"static/media/vieux-telegraphe-chateauneuf-du-pape-2000.2922ca56.svg"},1270:function(e,t,n){e.exports=n.p+"static/media/balloon-microphone-hero.16b8d4f6.svg"},1271:function(e,t,n){e.exports=n.p+"static/media/bottle-palm.74ae20bc.svg"},1272:function(e,t,n){e.exports=n.p+"static/media/bottle-guage.dd474636.svg"},1273:function(e,t,n){e.exports=n.p+"static/media/hunter@2x.85bb5576.png"},1274:function(e,t,n){e.exports=n.p+"static/media/liz@2x.f6baa449.png"},1275:function(e,t,n){e.exports=n.p+"static/media/lorenzo@2x.3d9edb75.png"},1276:function(e,t,n){e.exports=n.p+"static/media/arrow.4ef256e6.svg"},1277:function(e,t,n){e.exports=n.p+"static/media/whiskey.96850bf4.svg"},1328:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(1),o=n(11),s=n(8),l=n(12),c=n(222),p=n(216),d=n.n(p),m=n(670),u=n(2),f=n(20);const h=r.e.div`
    background: ${e=>e.theme.colors.white};
    border: 1px solid ${e=>e.theme.colors.lighterGray};
    border-radius: ${e=>e.theme.modules.borderRadius};
    box-shadow: ${e=>e.theme.modules.boxShadow};
    color: ${e=>e.theme.colors.mainAccentBlue};

    width: 100%;
    margin: 15px 0;
    height: ${e=>e.isRow?"initial":"300px"};
    padding: 22px;
    ${e=>e.theme.media.greaterThan("768px")`
        height: 375px;
        padding: 30px;
    `}
    ${e=>e.theme.media.greaterThan("1020px")`
        max-width: ${e.isRow?"initial":"calc(50% - 25px)"};
        height: 490px;
        padding: 52px 43px 30px 59px;
    `}
    ${e=>e.theme.media.greaterThan("1441px")`
       margin-bottom: 50px;
    `}

    .title-text {
        font-family: ${e=>e.theme.fonts.title};
        font-size: 32px;
        font-weight: 500;
        ${e=>e.theme.media.greaterThan("768px")`
            font-size: 48px;
        `}
        ${e=>e.theme.media.greaterThan("1441px")`
            font-size: 64px;
            line-height: 65px; 
        `}
    }

    .title-text_small {
        font-family: ${e=>e.theme.fonts.title};
        font-size: 32px;
        ${e=>e.theme.media.greaterThan("768px")`
            font-size: 48px;
        `}
        ${e=>e.theme.media.greaterThan("1441px")`
            font-size: 45px;
            line-height: 60px; 
        `}
    }

    .subtitle-text {
        font-family: ${e=>e.theme.fonts.title};
        font-size: 24px;
        ${e=>e.theme.media.greaterThan("768px")`
            font-size: 28px;
        `}
    }
`,g=r.e.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: ${e=>e.theme.fonts.title};
    background: rgba(197, 213, 228, 0.4); /** #C5D5E4 @ 40% opacity */
    border-radius: 10px;
    padding: 0 70px;
    margin: 30px 0 15px 0;
    padding: 20px;
    line-height: 24px;
    font-size: 21px;
    flex-direction: column;
    text-align: center;
    #plan-banner-label-container {
        margin-bottom: 21px;
    }

    width: 100%;

    max-width: 476px;
    ${e=>e.theme.media.greaterThan("768px")`
    max-width: initial;
    padding: 37px 70px;
    line-height: 60px;
    font-size: 45px;
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 50px;

    #plan-banner-label-container { margin-bottom: 0 }
`}

    #investing-plan-label {
        color: ${e=>e.theme.colors.burntOrange};
    }
`;var x=n(13),b=n(125);const v=Object(o.a)((()=>{const{t:e}=Object(m.a)(["overview"]),t=Object(s.f)(),n=Object(s.d)(),r=Object(s.b)(),o=Object(a.useMemo)((()=>{const n=Object(u.e)(t.user.profileEntity);return Object(f.a)(n.investingStyle)?`${x.g[n.investingStyle.toUpperCase()]} ${e("recommended-banner.investing")}`:""}),[t.user.profileEntity,e]),l=Object(a.useCallback)((()=>{r("/deposit/add-funds",b.a.AddFunds)}),[r]);return i.a.createElement(g,null,i.a.createElement("div",{id:"plan-banner-label-container"},e("recommended-banner.recommend")," ",!n&&e("recommended-banner.investment")," ",e("recommended-banner.plan"),i.a.createElement("br",null),i.a.createElement("span",{role:"heading","data-name":"investing-plan-label",id:"investing-plan-label"},o||i.a.createElement(d.a,null))),i.a.createElement(y,{onClick:l},e("recommended-banner.fund")))})),y=Object(r.e)(l.g)`
    margin: 0px !important;

    ${e=>e.theme.media.greaterThan("768px")`
        margin-right: 28px !important;
        height: 60px !important;
    `}
`;var w=n(17),E=n(41),j=n(1253),O=n.n(j),k=n(1254),T=n.n(k);const $=Object(r.e)(g)`
    padding: 25px 20px 37px;
    min-height: 204px;
    background: #fff;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    flex-direction: column !important;
    position: relative;

    ${e=>e.theme.media.greaterThan("769px")`
        padding: 40px 45px 33.2px 69px;
        flex-direction: row !important;
        justify-content: space-around;
        align-items: center;
    `}

    .title {
        font-family: RoslindaleDisplayCondensed;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 41px;
        color: #242e35;

        ${e=>e.theme.media.greaterThan("769px")`
            font-size: 36px;
            line-height: 54px;
        `}
    }

    .description {
        font-family: FavoritStd;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.005em;
        color: #242e35;

        ${e=>e.theme.media.greaterThan("769px")`
            font-size: 16px;
            line-height: 26px;
            margin-top: 14px;
        `}
    }

    &.isClosing {
        transition: 0.3s;
        height: 0px;
        min-height: 0px;
        overflow: hidden;
        padding: 0;
        margin: 0;
        border: 0;
        opacity: 0;
    }
`,R=r.e.button`
    width: 10.48px;
    height: 10.48px;
    position: absolute;
    top: 19px;
    right: 16.52px;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;

    &:hover {
        cursor: pointer;
    }

    ${e=>e.theme.media.greaterThan("769px")`
        width: 15.81px;
        height: 15.81px;
        top: 24px;
        right: 30.19px;
    `}

    img {
        position: absolute;
        top: 0;
        right: 0;
        object-fit: cover;
        width: 100%;
    }
`,z=r.e.img`
    width: 175px;
    display: block;
    margin: 40px auto;

    ${e=>e.theme.media.greaterThan("769px")`
        margin: 0 40px;
        flex-shrink: 0;
    `}
`,V=Object(r.e)(l.g)`
    width: 100%;
    height: 44px;
    margin-top: 20px !important;

    ${e=>e.theme.media.greaterThan("769px")`
        width: 216px;
        height: 50px;
        margin-top: 0 !important;
        flex-shrink: 0;
    `}
`;var M=n(27),N=n(703);const F=Object(o.a)((()=>{const{t:e}=Object(m.a)(["overview"]),t=Object(s.d)(),n=Object(s.f)();return i.a.createElement(i.a.Fragment,null,n.transfer.pendingDeposits.length?i.a.createElement(C,null,i.a.createElement(N.a.TransactionTypeIcon,{type:x.h.funds_added,width:"60px"}),i.a.createElement("div",null,t?i.a.createElement(i.a.Fragment,null,e("deposit-banner-list.pending-message-mobile")," ",i.a.createElement(M.a,{to:"/transactions"}," ",e("deposit-banner-list.transaction-link"))," ",e("deposit-banner-list.pending-message-mobile-cont")," "):i.a.createElement(i.a.Fragment,null,e("deposit-banner-list.pending-message")," ",i.a.createElement(M.a,{to:"/transactions"},e("deposit-banner-list.transaction-link")," ")," ",e("deposit-banner-list.pending-message-cont")))):null,n.transfer.sourcingWines.length?i.a.createElement(C,null,i.a.createElement(N.a.TransactionTypeIcon,{type:x.h.sourcing_wine,width:"60px"}),i.a.createElement("div",null,t?i.a.createElement(i.a.Fragment,null,e("deposit-banner-list.sourced-wine-message-mobile")," ",i.a.createElement(M.a,{to:"./transactions"},e("deposit-banner-list.transaction-link")," ")," ",e("deposit-banner-list.pending-message-mobile-cont")):i.a.createElement(i.a.Fragment,null,e("deposit-banner-list.sourced-wine-message")," ",i.a.createElement(M.a,{to:"./transactions"},e("deposit-banner-list.transaction-link")," ")," ",e("deposit-banner-list.sourced-wine-message-cont")))):null)})),C=Object(r.e)(g)`
    padding: 30px 24px;
    background: #fff;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    flex-direction: row !important;

    div {
        margin-left: 20px;
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.005em;
        color: #242e35;
        font-size: 14px;
        line-height: 21px;
        text-align: left;

        a {
            text-decoration: none;
            color: #a86d37;
        }
    }

    ${e=>e.theme.media.greaterThan("769px")`
        padding: 20px 62px;

        div {
            margin-left: 23px;
            font-size: 16px;
            line-height: 26px;
        }
    `}
`;var _=n(7);const D=Object(o.a)((()=>{const{t:e}=Object(m.a)(["overview"]),t=Object(s.f)(),n=Object(s.d)(),r=Object(a.useMemo)((()=>{const n=Object(u.e)(t.user.oktaUserEntity);return Object(f.a)(n.given_name)||e("personal-snapshot.friend")}),[t.user.oktaUserEntity]),o=Object(a.useMemo)((()=>{const n=Object(u.e)(t.user.profileEntity),a=Object(f.a)(n.investingStyle);return a?`${a} ${e("personal-snapshot.investing")}`:"Not yet set"}),[t.user.profileEntity]),l=Object(a.useMemo)((()=>{const e=Object(u.f)(t.portfolio.totalsEntity),n=Object(u.f)(t.user.profileEntity),a=Object(u.f)(t.user.oktaUserEntity);return e.isPending()||n.isPending()||a.isPending()}),[t.portfolio.totalsEntity,t.user.profileEntity,t.user.oktaUserEntity]);return i.a.createElement(h,null,i.a.createElement(S,{className:"title-text","data-testid":"name-header"},l?i.a.createElement(d.a,{count:n?1:2}):i.a.createElement(i.a.Fragment,null,e("personal-snapshot.welcome"),", ",!n&&i.a.createElement("br",null),r)),i.a.createElement(A,null,i.a.createElement(q,null,e("personal-snapshot.snapshot-header")),l?i.a.createElement(d.a,{count:3,height:"40px"}):i.a.createElement(i.a.Fragment,null,i.a.createElement(U,null,i.a.createElement("span",{className:"row-label"},e("personal-snapshot.wine_collection")),i.a.createElement("span",{className:"row-value","data-testid":"net-returns"},i.a.createElement(P,{to:_.a.portfolio},e("common:utils.shared.bottle",{count:t.portfolio.totals.bottleCount})))),i.a.createElement(U,null,i.a.createElement("span",{className:"row-label"},e("personal-snapshot.account-level")),i.a.createElement("span",{className:"row-value","data-testid":"account-level"},t.portfolio.accountLevel)),i.a.createElement(U,null,i.a.createElement("span",{className:"row-label"},e("personal-snapshot.investment-plan")),i.a.createElement("span",{className:"row-value","data-testid":"investment-plan"},o)))))})),P=Object(r.e)(M.a)`
    text-decoration: none;
    color: ${e=>e.theme.colors.burntOrange};
`,S=r.e.div`
    text-align: center;
    margin-bottom: 16px;

    ${e=>e.theme.media.greaterThan("768px")`
        text-align: left;
    `}

    .title-text {
        ${e=>e.theme.media.greaterThan("1024px")`
            font-size: 65px;
        `}
    }
`,A=r.e.div`
    margin-top: 24px;
    ${e=>e.theme.media.greaterThan("1441px")`
            margin-bottom: 60px;
        `}
`,q=r.e.div`
    font-family: ${e=>e.theme.fonts.label};
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 18px;

    text-align: center;
    ${e=>e.theme.media.greaterThan("768px")`
        text-align: left;     
    `}
    ${e=>e.theme.media.greaterThan("1441px")`
        font-size: 14px;  
        line-height: 18px;  
    `}
`,U=r.e.div`
    font-size: 14px;
    display: flex;
    border-top: 1px solid ${e=>e.theme.colors.borderGray};
    padding: 18px 0;
    ${e=>e.theme.media.greaterThan("1441px")`
        font-size: 16px;  
        line-height: 26px;  
        padding: 25px 0;
        padding-top: 28px;
    `}
    .row-label {
        margin-right: auto;
    }
    .row-value {
        margin-left: auto;
    }
`;var B=n(6),W=n.n(B);const L=Object(o.a)((()=>{const{t:e}=Object(m.a)(["overview"]),t=Object(s.f)(),{fees:n,netChange:a,ytdFees:r,ytdNetChange:o}=t.portfolio.totals.returns||{},l=e=>Object(B.get)(e,"amount",0)/100,c=i.a.useMemo((()=>{const t=e=>{const t=l(e);return+t?Object(f.c)(t):"-"},i=e=>+e?Object(f.c)(e):"-";return[{label:"",ytd:e("returns-box.ytd"),all:e("returns-box.all")},{label:e("returns-box.appreciation"),ytd:t(o),all:t(a)},{label:e("returns-box.fees"),ytd:t(r),all:t(n)},{label:e("returns-box.total"),ytd:i(l(o)+l(r)),all:i(l(a)+l(n))}]}),[n,a,r,o]),p=e=>e?{}:{borderTop:0};return i.a.createElement(I,null,i.a.createElement(G,null,e("returns-box.title")),i.a.createElement(H,null,c.map((({label:e,ytd:t,all:n},a)=>i.a.createElement(i.a.Fragment,{key:e},i.a.createElement("div",{className:"row-label",style:p(a)},e),i.a.createElement("div",{className:"row-value",style:p(a)},t),i.a.createElement("div",{className:"row-value",style:p(a)},n))))))})),I=Object(r.e)(h)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: fit-content;

    @media (min-width: 1020px) {
        padding: 41px 43px 30px 59px;
    }
`,G=r.e.div`
    font-size: 32px;
    line-height: 41px;
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    color: #242e35;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 45px;
        line-height: 60px;
    `}
`,H=r.e.div`
    font-size: 14px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: ". . .";
    font-family: FavoritStd;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #242e35;

    .row-label {
        padding: 18px 0;
        text-align: left;
        font-family: "VinovestMedium";
        border-top: 1px solid ${e=>e.theme.colors.borderGray};
    }
    .row-value {
        padding: 18px 0;
        border-top: 1px solid ${e=>e.theme.colors.borderGray};
        text-align: right;
        font-family: VinovestMedium;
    }

    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 16px;
        line-height: 26px;

        .row-label {
            padding: 22px 0;
        }
        .row-value {
            padding: 22px 0;
        }
    `}
`;var Y=L,X=n(1255),J=n.n(X),K=n(1256),Q=n.n(K);const Z=Object(o.a)((()=>{const{t:e}=Object(m.a)(["overview","common"]),t=Object(s.f)(),{monthsManagedFreeCount:n,successfulReferralCount:a,referralProfileDetails:r}=t.referral,{shareUrl:o}=t.referral.referralProfileDetails,[l,c]=i.a.useState(""),p=i.a.useRef(null),d=Object(s.d)(),u=i.a.useCallback((e=>{t.tracking.gtm.trackReferralAction("Copy URL to clipboard"),c("COPIED!"),p.current.select(),document.execCommand("copy"),e.target.focus(),setTimeout((()=>{c("")}),900)}),[c,t.tracking.gtm]);return i.a.createElement(ee,null,i.a.createElement(te,null,i.a.createElement(ne,null,e("rewards-box.title")," "),i.a.createElement(ae,null,e("rewards-box.snapshot-description")," ",i.a.createElement("span",{role:"img","aria-labelledby":"cups"},"\u{1f942}"))),i.a.createElement(ie,null,i.a.createElement(re,null,i.a.createElement("img",{src:Q.a,alt:"pig"}),i.a.createElement("div",{className:"descriptionWrapper"},i.a.createElement("div",{className:"description"},e("rewards-box.fees-title")),i.a.createElement("div",{className:"dataMessage"},a," ",e("rewards-box.fees-description"))),i.a.createElement("div",{className:"amount"},r.savedFees||`${e("common:currencySymbol")}0`)),i.a.createElement(oe,null,i.a.createElement("img",{src:J.a,alt:"money"}),i.a.createElement("div",{className:"descriptionWrapper"},i.a.createElement("div",{className:"description"},e("rewards-box.cycles")),r.endFreeFees&&i.a.createElement("div",{className:"dataMessage"},e("rewards-box.cycles-message"),r.endFreeFees)),i.a.createElement("div",{className:"amount"},n||0," ",e("rewards-box.cycles-period")))),i.a.createElement(se,null,i.a.createElement(le,{ref:p,value:o,readOnly:!0}),i.a.createElement(ce,{onClick:u,disabled:!o},i.a.createElement("span",{style:l?{opacity:0}:{}},e(d?"rewards-box.link-mobile":"rewards-box.link")),i.a.createElement("span",{className:"copyStatus"},l))))})),ee=Object(r.e)(h)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: fit-content;

    @media screen and (max-width: 914px) {
        min-height: 436px;
    }

    @media (min-width: 1020px) {
        padding: 44px 55px 48px 55px;
    }
`,te=r.e.div``,ne=r.e.div`
    font-size: 32px;
    line-height: 41px;
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    color: #242e35;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${e=>e.theme.media.greaterThan("1024px")`
        font-size: 45px;
        line-height: 60px;
    `}
`,ae=r.e.div`
    margin-top: 13px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.005em;
`,ie=r.e.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,re=r.e.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;
    border-radius: 9px;
    background: #eaeedd;
    color: #3c400c;
    padding: 10px 13.74px;

    img {
        width: 32px;
        display: none;
        flex-shrink: 0;
    }

    .amount {
        font-family: RoslindaleDisplayCondensed;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
    }

    .descriptionWrapper {
        flex-grow: 1;
    }

    .description {
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.005em;
    }

    .dataMessage {
        font-family: VinovestMedium;
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 21px;
        letter-spacing: 0.005em;
    }

    ${e=>e.theme.media.greaterThan("1024px")`
        padding: 10px 24px;

        img {
            margin: 0 19px 0 0;
            display: block;
        }

        .amount {
            font-size: 24px;
            line-height: 32px;
        }
    `}
`,oe=Object(r.e)(re)`
    background: #dce6ef;
    color: #112d47;
    margin-top: 16px;
`,se=r.e.div`
    display: flex;
    align-items: center;
`,le=r.e.input`
    border: 0;
    border-radius: 3px;
    padding: 16px 21px;
    font-family: "VinovestMedium";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.005em;
    color: #242e35;
    height: 44px;
    flex-grow: 1;
    margin-right: 11px;
    background: #eeeeee;
    width: 60%;
    flex-grow: 1;
    flex-shrink: 1;
`,ce=r.e.button`
    border: 0;
    border-radius: 3px;
    outline: 0;
    min-width: 63px;
    width: fit-content;
    height: 44px;
    background: #a86d37;
    font-family: "VinovestMono";
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #ffffff;

    .copyStatus {
        position: absolute;
    }

    ${e=>e.theme.media.greaterThan("1024px")`
        padding: 20px;
        font-size: 14px;
        line-height: 18px;
    `}

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        cursor: default;
    }
`;var pe=Z,de=n(301),me=n(1311),ue=n(1313),fe=n(1318),he=n(1317),ge=n(1316),xe=n(1288),be=n(1307),ve=n(215),ye=n.n(ve),we=n(5),Ee=n.n(we),je=n(1312),Oe=n(1309);function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Te(e){var t=e.top,n=void 0===t?0:t,a=e.left,r=void 0===a?0:a,o=e.scale,s=e.height,l=e.stroke,c=void 0===l?"#eaf0f6":l,p=e.strokeWidth,d=void 0===p?1:p,m=e.strokeDasharray,u=e.className,f=e.numTicks,h=void 0===f?10:f,g=e.lineStyle,x=e.offset,b=e.tickValues,v=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues"]),y=o.ticks?o.ticks(h):o.domain();return b&&(y=b),i.a.createElement(je.a,{className:ye()("vx-columns",u),top:n,left:r},y.map((function(e,t){var n=x?o(e)+x:o(e),a=new Oe.a({x:n,y:0}),r=new Oe.a({x:n,y:s});return i.a.createElement(fe.a,ke({key:"column-line-"+e+"-"+t,from:a,to:r,stroke:c,strokeWidth:d,strokeDasharray:m,style:g},v))})))}Te.propTypes={top:Ee.a.number,left:Ee.a.number,className:Ee.a.string,stroke:Ee.a.string,strokeWidth:Ee.a.oneOfType([Ee.a.string,Ee.a.number]),strokeDasharray:Ee.a.string,numTicks:Ee.a.number,lineStyle:Ee.a.object,offset:Ee.a.number,scale:Ee.a.func.isRequired,height:Ee.a.number.isRequired,tickValues:Ee.a.array};var $e=n(1339),Re=n(1319),ze=n(1310),Ve=n(832),Me=n(1335),Ne=n(83),Fe=n.n(Ne),Ce=n(1257),_e=n.n(Ce),De=n(292),Pe=n.n(De),Se=n(749),Ae=n(299),qe=["years","months","weeks","days","hours","minutes","seconds"];function Ue(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var n=t.format||qe,a=t.locale||Ae.a,i=t.zero||!1,r=t.delimiter||" ",o=n.reduce((function(t,n){var r="x".concat(n.replace(/(^.)/,(function(e){return e.toUpperCase()})));return"number"===typeof e[n]&&(i||e[n])?t.concat(a.formatDistance(r,e[n])):t}),[]).join(r);return o}var Be=n(25),We=n(10),Le=n(202),Ie=n(37),Ge=n.n(Ie);function He(){return(He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var Ye={top:0,right:0,bottom:0,left:0,width:0,height:0};Ee.a.shape({top:Ee.a.number.isRequired,right:Ee.a.number.isRequired,bottom:Ee.a.number.isRequired,left:Ee.a.number.isRequired,width:Ee.a.number.isRequired,height:Ee.a.number.isRequired}),Ee.a.func;function Xe(){return(Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Je(e){var t=e.className,n=e.top,a=e.left,r=e.style,o=e.children,s=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["className","top","left","style","children"]);return i.a.createElement("div",Xe({className:ye()("vx-tooltip-portal",t),style:Xe({position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none",top:n,left:a},r)},s),o)}function Ke(){return(Ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}Je.propTypes={left:Ee.a.oneOfType([Ee.a.number,Ee.a.string]),top:Ee.a.oneOfType([Ee.a.number,Ee.a.string]),className:Ee.a.string,style:Ee.a.object,children:Ee.a.any};var Qe=Ee.a.shape({top:Ee.a.number.isRequired,right:Ee.a.number.isRequired,bottom:Ee.a.number.isRequired,left:Ee.a.number.isRequired,width:Ee.a.number.isRequired,height:Ee.a.number.isRequired}),Ze=Ke({},{getRects:Ee.a.func,rect:Qe,parentRect:Qe},{},{left:Ee.a.oneOfType([Ee.a.number,Ee.a.string]),top:Ee.a.oneOfType([Ee.a.number,Ee.a.string]),className:Ee.a.string,style:Ee.a.object,children:Ee.a.any},{offsetLeft:Ee.a.number,offsetTop:Ee.a.number});function et(e){var t=e.left,n=e.top,a=e.offsetLeft,r=void 0===a?10:a,o=e.offsetTop,s=void 0===o?10:o,l=e.rect,c=e.parentRect,p=(e.getRects,e.children),d=e.style,m=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["left","top","offsetLeft","offsetTop","rect","parentRect","getRects","children","style"]),u=t,f=n;return l&&c&&(u=r+l.right>c.right||r+l.right>window.innerWidth?u-l.width-r:u+r,f=s+l.bottom>c.bottom||s+l.bottom>window.innerHeight?f-l.height-s:f+s),u=Math.round(u),f=Math.round(f),i.a.createElement(Je,Ke({style:Ke({top:0,transform:"translate("+u+"px, "+f+"px)"},d)},m),p)}et.propTypes=Ze,et.defaultProps={};var tt=function(e){var t=function(t){var n,a;function r(e){var n;return(n=t.call(this,e)||this).state={rect:void 0,parentRect:void 0},n.getRects=n.getRects.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}a=t,(n=r).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var o=r.prototype;return o.componentDidMount=function(){var e=this;this.node=Ge.a.findDOMNode(this),this.setState((function(){return e.getRects()}))},o.getRects=function(){if(!this.node)return this.state;var e=this.node,t=e.parentNode;return{rect:e.getBoundingClientRect?e.getBoundingClientRect():Ye,parentRect:t&&t.getBoundingClientRect?t.getBoundingClientRect():Ye}},o.render=function(){return i.a.createElement(e,He({getRects:this.getRects},this.state,this.props))},r}(i.a.PureComponent);return t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,t.displayName="withBoundingRects("+(e.displayName||"")+")",t}(et);Fe()(nt).format("MMM DD, YYYY");var nt;const at=Object(o.a)((()=>{const{t:e}=Object(m.a)(["overview","common"]),t=Object(s.f)(),n=Object(s.h)("colors"),a=Object(s.a)(),r=Object(s.d)(1023),o=/en/.test(We.a.language)?f.n:Be.f[We.a.language],l=[Ue({days:1},{locale:o}),Ue({months:1},{locale:o}),Ue({months:6},{locale:o}),Ue({years:1},{locale:o}),e("all")],{selectedRange:c="",pending:p,bottleCount:u}=t.portfolio.totals,[h,g]=i.a.useState(),x=t.portfolio.userPriceHistory||[],b=h?W.a.get(h,"priceDifference",0):W.a.get(x[x.length-1],"priceDifference",0),v=h?h.tooltipDate:Object(Le.b)(new Date,Le.a.shortMonthDayandYear);return p?i.a.createElement(ct,null,i.a.createElement(d.a,{style:{position:"absolute",minHeight:"100%",minWidth:"100%",top:0,left:0}})):i.a.createElement(ct,null,t.portfolio.totalsEntity.status.isDone()?i.a.createElement(pt,null,i.a.createElement("div",{className:"title-text"},h?Object(f.c)(+W.a.get(t.portfolio.totals,"cash.amount",0)/100+ +W.a.get(h,"price",0)):Object(f.c)(t.portfolio.totalAccountValue)),i.a.createElement("div",{className:"varient",id:"performance-display-subheader","data-test-id":"performance-display-sub"},i.a.createElement("div",{style:{color:+b>=0?"#448B47":"#953536"}},+b>=0&&"+",Object(f.c)(+b)))):i.a.createElement(d.a,{style:{minHeight:"41px"}}),i.a.createElement(dt,null,i.a.createElement("div",{id:"label-copy"},e("account-value.title"),i.a.createElement("img",{src:Pe.a,id:"label-icon",alt:"info-bubble","data-tip":"info-bubble","data-background-color":n.darkBrown,"data-text-color":n.lightGreenBeige,"data-effect":"solid"})),!r&&i.a.createElement(ft,null,l.map((e=>i.a.createElement(ht,{key:e,selected:e.toUpperCase()===c.toUpperCase(),onClick:()=>t.portfolio.updatePortfolioTotalsRange(e)},e))))),W.a.isEmpty(t.portfolio.userPriceHistory)||!a.feature.accountValueGraph.enabled?i.a.createElement(mt,{src:_e.a}):i.a.createElement(ut,null,i.a.createElement(lt,{priceHistory:t.portfolio.userPriceHistory,isMobile:r,setSharedTooltipData:g,sharedTooltipData:h,date:v})),i.a.createElement(de.a,{className:"info-tooltip"},e("account-value.tooltip")),r&&i.a.createElement(ft,null,l.map((e=>i.a.createElement(ht,{key:e,selected:e.toUpperCase()===c.toUpperCase(),onClick:()=>t.portfolio.updatePortfolioTotalsRange(e),blind:+u?"":"background: transparent !important; color: #A8ABAD !important;"},e)))))})),it=e=>new Date(e.date),rt=e=>e.price,ot=Object(Me.a)("%b'%y"),st=e=>ot(e),lt=Object(Re.a)((({priceHistory:e,parentHeight:t,parentWidth:n,margin:r={top:0,right:0,bottom:0,left:0},isMobile:o,setSharedTooltipData:l,date:c})=>{const[p,d]=i.a.useState(null),m=Object(s.h)("colors"),{handleTooltip:u,yMax:f}=Object(Se.a)({data:e,width:n,height:t,margin:r,showTooltip:({tooltipData:e,...t})=>{l(e),d(t)}}),h=Object(a.useMemo)((()=>n-r.left-r.right),[n,r.left,r.right]),g=Object(a.useMemo)((()=>t-r.top-r.bottom),[t,r.top,r.bottom]),x=Object(a.useMemo)((()=>Object(xe.a)({range:[0,h],domain:Object(ze.a)(e,it)})),[h,e]),b=Object(a.useMemo)((()=>Object(be.a)({domain:[0,(Object(Ve.a)(e,rt)||0)+g/3],range:[g,0],nice:!0})),[g,e]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("svg",{height:t,width:n},i.a.createElement("rect",{x:0,y:0,width:n,height:t,fill:"transparent",rx:10}),i.a.createElement(me.a,{id:"chart-fill",from:m.darkGreen,to:m.darkGreen}),i.a.createElement(ue.a,{curve:ge.a,data:e,x:e=>x(it(e)),y:e=>b(rt(e)),yScale:b,strokeWidth:1,stroke:"url(#chart-fill)",fill:"url(#chart-fill)"}),!o&&i.a.createElement(Te,{top:-25,scale:x,height:g,numTicks:4,strokeDasharray:"3,3",stroke:m.lightPink,strokeOpacity:.3,pointerEvents:"none"}),i.a.createElement($e.a,{top:g-30,left:17,hideAxisLine:!0,hideTicks:!0,hideZero:!0,numTicks:4,scale:x,orientation:"bottom",tickFormat:st,tickLabelProps:()=>({fill:m.lightPink,fontSize:10,textAnchor:"middle",fontFamily:"VinovestMono"})}),p&&i.a.createElement("g",null,i.a.createElement(fe.a,{from:{x:p.tooltipLeft,y:p.tooltipTop},to:{x:p.tooltipLeft,y:f-33},stroke:"#E6C9C9",strokeWidth:2,style:{pointerEvents:"none"}}),i.a.createElement("circle",{cx:p.tooltipLeft,cy:p.tooltipTop+1,r:4,fill:"black",fillOpacity:.1,stroke:"black",strokeOpacity:.1,strokeWidth:2,style:{pointerEvents:"none"}}),i.a.createElement("circle",{cx:p.tooltipLeft,cy:p.tooltipTop<13?p.tooltipTop+(13-p.tooltipTop):p.tooltipTop,r:11,fill:"#3C400C",stroke:"#E6C9C9",strokeWidth:4,style:{pointerEvents:"none"}})),i.a.createElement(he.a,{x:0,y:0,width:n,height:t,fill:"transparent",rx:14,data:e,onTouchStart:u,onTouchMove:u,onMouseMove:u,onMouseLeave:()=>{l(null),d(null)}})),p&&i.a.createElement(tt,{key:Math.random(),top:p.tooltipTop-64,left:p.tooltipLeft,style:{borderRadius:"20px",boxShadow:"0px 4px 40px rgba(0, 0, 0, 0.1)",padding:"8px 20px",color:"#242E35",fontFamily:"VinovestMono",fontSize:"14px"}},c))})),ct=Object(r.e)(h)`
    height: 391px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .info-tooltip {
        box-shadow: -8px 8px 24px rgba(36, 46, 53, 0.16) !important;
        opacity: 1 !important;
        max-width: 228px !important;
        padding: 18px !important;
        border-radius: 10px !important;
        line-height: 18px !important;
    }
`,pt=r.e.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    #display-hyphen {
        margin: 0 10px;
        ${e=>e.theme.media.greaterThan("768px")`
            margin: 0 12px;
        `}
    }

    #performance-display-subheader,
    .date {
        font-size: 0.75rem;

        ${e=>e.theme.media.greaterThan("768px")`
            font-size: 1rem;
        `}
    }

    .title-text {
        ${e=>e.theme.media.greaterThan("1024px")`
            font-size: 65px;
        `}
    }

    .varient {
        text-align: right;
    }
`,dt=r.e.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    #label-icon {
        width: 15px;
        margin-left: 10px;
        cursor: pointer;
    }
    #label-copy {
        display: flex;
        flex-shrink: 0;
        font-family: ${e=>e.theme.fonts.label};
        text-transform: uppercase;
        font-size: 12px;

        ${e=>e.theme.media.greaterThan("768px")`
            font-size: 14px;
        `}

        ${e=>e.theme.media.greaterThan("1024px")`
            width: 60%
        `}
    }
`,mt=r.e.img`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
`,ut=r.e.div`
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 58px;
    left: 0;
    text-transform: uppercase;
    height: 171px;
    width: 100%;

    ${e=>e.theme.media.greaterThan("1023px")`
        height: 247px;
        bottom: 0;
    `};
`,ft=r.e.div`
    flex-grow: 1;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    display: flex;
    height: 58px;
    align-items: center;
    justify-content: space-around;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #242e35;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    ${e=>e.theme.media.greaterThan("1024px")`
        font-size: 14px;
        height: auto;
        justify-content: space-between;
        position: static;
        width: 40%;

    `}
`,ht=r.e.div`
    ${({selected:e})=>e?"background: #242E35; color: #fff;":""}
    align-items: center;
    display: flex;
    height: 26px;
    justify-content: center;
    margin-right: 0.9vw;
    min-width: 26px;
    padding: 2px;
    transition: 0.5s;

    ${e=>e.theme.media.greaterThan("1024px")`
        margin-right: 0;
    `}

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        cursor: pointer;
        background: #242e35;
        color: #fff;
    }

    ${({blind:e})=>e};
`;var gt=n(696),xt=n.n(gt),bt=n(1258),vt=n.n(bt),yt=n(1259),wt=n.n(yt);const Et=n(1260),jt=W.a.shuffle(W.a.map(Et.keys(),(e=>({name:e.slice(2).replace(".svg","").split("-").map(W.a.capitalize).join(" "),src:Et(e)}))));function Ot(){return(Ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const kt=({name:e,src:t})=>{const[n,r]=Object(a.useState)(!0);return i.a.createElement("div",{key:e,className:"thumb-container"},i.a.createElement("img",{src:t,alt:`${e}-thumbnail`,className:"thumb-img",onLoad:()=>r(!1)}),i.a.createElement("span",{className:"thumb-label"},e),n&&i.a.createElement(d.a,{style:{height:"220px",width:"220px",position:"absolute",top:0,left:0}}))},Tt=Object(r.e)(h)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .carousel .slide {
        background: none;
    }
`,$t=r.e.img``,Rt=r.e.div`
    display: flex;
    justify-content: space-around;

    width: 100%;
    height: 100%;

    .slider-view-container {
        height: 90%;
        width: 95%;
        margin-top: 18px;
        padding: 20px;
    }

    .thumb-container {
        position: relative;
        display: flex !important;
        flex-direction: column;
        align-items: center;
    }
    .thumb-img {
        height: 200px;
    }
    .thumb-label {
        font-size: 14px;
        text-align: center;
    }
`;var zt=n(1270),Vt=n.n(zt);const Mt=Object(r.e)(h)`
    display: flex;
    justify-content: space-around;
    align-items: center;

    flex-direction: column;
    ${e=>e.theme.media.greaterThan("768px")`
        flex-direction: row;
    `}
`,Nt=r.e.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    text-align: center;
    ${e=>e.theme.media.greaterThan("768px")`
        text-align: left;
        height: 100%;
        width: 45%;

    `}
`,Ft=Object(r.e)(Nt)`
    justify-content: center;

    p {
        line-height: 32px;
        margin: 24px 0 0;

        font-size: 15px;
        ${e=>e.theme.media.greaterThan("768px")`
            font-size: 16px;
        `}
        ${e=>e.theme.media.greaterThan("1441px")`
            font-size: 20px;
            line-height: 36px;
        `}
    }
`,Ct=Object(r.e)(Nt)`
    align-items: center;
    justify-content: space-around;

    flex-direction: column-reverse;
    margin-top: 18px;
    ${e=>e.theme.media.greaterThan("768px")`
        flex-direction: column;
        margin-top: 0;
    `}
`,_t=r.e.img`
    height: 200px;

    margin-top: 18px;
    ${e=>e.theme.media.greaterThan("768px")`
        margin-top: 0;
    `}
`,Dt=r.e.span`
    font-family: ${e=>e.theme.fonts.title};
    font-size: 32px;
    ${e=>e.theme.media.greaterThan("768px")`
            font-size: 48px;
        `}
    ${e=>e.theme.media.greaterThan("1441px")`
            font-size: 64px;
            line-height: 84px; 
        `}
`;var Pt=n(296),St=n.n(Pt),At=n(1271),qt=n.n(At),Ut=n(1272),Bt=n.n(Ut);function Wt(){return(Wt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const Lt=({header:e,description:t,svg:n})=>i.a.createElement(Gt,null,i.a.createElement("img",{className:"prop-img",src:n,alt:"prop-img"}),i.a.createElement("span",{className:"prop-header"},e),i.a.createElement("span",{className:"prop-desc"},t)),It=Object(r.e)(h)`
    text-align: center;
    border: none;
    box-shadow: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-direction: column;
    ${e=>e.theme.media.greaterThan("768px")`
        flex-direction: row;
    `}
`,Gt=r.e.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 280px;
    padding: 12px;

    .prop-img {
        height: 50%;
    }
    .prop-header {
        font-family: ${e=>e.theme.fonts.title};
        font-size: 28px;
        margin-top: 18px;
        ${e=>e.theme.media.greaterThan("1441px")`
            font-size: 32px;
            margin-top: 41px;
    `}
    }
    .prop-desc {
        font-family: ${e=>e.theme.fonts.body};
        font-size: 14px;
        margin-top: 18px;
        line-height: 24px;
        ${e=>e.theme.media.greaterThan("1441px")`
            font-size: 16px;
            margin-top: 26px;
    `}
    }
`;var Ht=n(101),Yt=n(1273),Xt=n.n(Yt),Jt=n(1274),Kt=n.n(Jt),Qt=n(1275),Zt=n.n(Qt);const en=r.e.div`
    position: relative;
    height: 160px;
    width: 236px;
    margin: 18px 0 42px 0;
    ${e=>e.theme.media.greaterThan("768px")`
        margin-top: 0;
        min-height: 200px;
        width: 296px;      
    `}
`,tn=r.e.div`
    position: absolute;

    img {
        width: 100%;
    }
`,nn=Object(r.e)(tn)`
    width: 27.57%;
    top: 0;
    left: 20%;
`,an=Object(r.e)(tn)`
    width: 33.02%;
    bottom: 0;
    left: 0;
`,rn=Object(r.e)(tn)`
    width: 51.09%;
    bottom: 2%;
    right: 0;
`,on=r.e.div`
    border-radius: 50%;
    position: absolute;
    background: #fae8d1;
    width: 9.78px;
    height: 9.78px;
    left: 5px;
    top: 31%;
    ${e=>e.theme.media.greaterThan("768px")`
        width: 12.79px;
        height: 12.79px;
    `}
`,sn=Object(r.e)(on)`
    left: 58%;
    top: 6%;
`,ln=r.e.div`
    border-radius: 50%;
    position: absolute;
    background: #fae8d1;
    width: 14.34px;
    height: 14.34px;
    right: 45%;
    bottom: 2%;

    ${e=>e.theme.media.greaterThan("768px")`
        width: 18.76px;
        height: 18.76px;
    `}
`;var cn=()=>{const{t:e}=Object(m.a)(["overview"]);return i.a.createElement(en,null,i.a.createElement(nn,null,i.a.createElement("img",{src:Zt.a,alt:e("wine-expert")})),i.a.createElement(an,null,i.a.createElement("img",{src:Xt.a,alt:e("wine-expert")})),i.a.createElement(rn,null,i.a.createElement("img",{src:Kt.a,alt:e("wine-expert")})),i.a.createElement(on,null),i.a.createElement(sn,null),i.a.createElement(ln,null))};const pn=Object(r.e)(h)`
    display: flex;
    justify-content: space-around;
    align-items: center;

    flex-direction: column;
    ${e=>e.theme.media.greaterThan("768px")`
        flex-direction: row;
    `}
`,dn=r.e.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    text-align: center;
    ${e=>e.theme.media.greaterThan("768px")`
        text-align: left;
        height: 100%;
        width: 45%;
    `}
`,mn=Object(r.e)(dn)`
    justify-content: center;

    p {
        line-height: 32px;
        margin: 24px 0 0;

        font-size: 15px;
        ${e=>e.theme.media.greaterThan("768px")`
            font-size: 16px;
        `}
        ${e=>e.theme.media.greaterThan("1441px")`
            font-size: 20px;
            line-height: 36px;
        `}
    }
`,un=Object(r.e)(dn)`
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-top: 18px;
    ${e=>e.theme.media.greaterThan("768px")`
        margin-top: 0;
    `}
`,fn=r.e.span`
    font-family: ${e=>e.theme.fonts.title};
    font-size: 32px;
    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 48px;
    `}
    ${e=>e.theme.media.greaterThan("1441px")`
        font-size: 64px;
        line-height: 84px; 
    `}
`,hn=r.e.button`
    font-family: VinovestMono;
    height: 50px;
    background: ${({theme:e})=>e.colors.burntOrange};
    opacity: ${e=>e.disabled?.7:1};
    color: ${({theme:e})=>e.colors.white};
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    width: 100%;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    pointer-events: ${e=>e.disabled?"none":"initial"};
    transition: box-shadow 0.3s ease-in-out;
    :hover {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    }
    :focus {
        outline: 0;
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
        margin: 0 auto;
        max-width: ${e=>e.fullWidth?"initial":"300px"};
    }
    :disabled {
        background: ${({theme:e})=>e.colors.lightGray};
    }
`,gn=r.e.div`
    height: 235px;
    margin-top: 35px;
    margin-bottom: 20px;
    position: relative;

    ${e=>e.theme.media.greaterThan("767px")`
        margin-bottom: 0px;
        height: 311px;
    `};
`,xn=r.e.div`
    pointer-events: none;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #767a7f;
    position: absolute;
    z-index: 1;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 271px;
    width: 100%;

    ${e=>e.theme.media.greaterThan("767px")`
        max-width:100%;
        top: 76px;
        font-size: 16px;
        line-height: 26px;
    `}
`,bn=r.e.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`,vn=r.e.div`
    position: absolute;
    top: 0;
    bottom: -15px;
    left: 0;
    right: -15px;
    overflow: scroll;

    ${e=>e.theme.media.greaterThan("767px")`
        margin-top: 7px;
    `}
`,yn=r.e.div`
    min-width: 680px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
`,wn=r.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    width: 80px;
    position: relative;

    ${e=>e.theme.media.greaterThan("1023px")`
        width: 100px;
        font-size: 14px;
        line-height: 18px;
    `}

    .DiversificationBarRegion {
        color: #242e35;
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        padding-top: 19px;
        height: 35%;

        ${e=>e.theme.media.greaterThan("767px")`
            height: 30%;
        `}
    }
`,En=r.e.div`
    height: 65%;
    color: #000000;
    border-bottom: solid 1px #c5d5e4;
    position: relative;

    ${e=>e.theme.media.greaterThan("767px")`
        height: 70%;
    `}

    .DiversificationBarPercentage {
        position: absolute;
        z-index: 1;
        bottom: 18px;
        left: 50%;
        transform: translateX(-50%);

        ${e=>e.theme.media.greaterThan("1023px")`
            bottom: 13px;
        `}
    }

    .DiversificationBarPercentageGraph {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: ${({height:e})=>e}%;
        background: #c5d5e4;
    }
`;var jn=({data:e=[]})=>{const{t}=Object(m.a)(["overview"]),n=e.length?e:(e=>[{percentage:"0",region:e("bordeaux")},{percentage:"0",region:e("burgundy")},{percentage:"0",region:e("rhone")},{percentage:"0",region:e("champagne")},{percentage:"0",region:e("italian")},{percentage:"0",region:e("american")},{percentage:"0",region:e("rest")}])(t);return i.a.createElement(gn,null,!e.length&&i.a.createElement(xn,null,t("diversification.description-bar")),i.a.createElement(bn,null,i.a.createElement(vn,null,i.a.createElement(yn,null,n.map((({percentage:e,region:t})=>i.a.createElement(wn,{key:t},i.a.createElement(En,{height:e},i.a.createElement("div",{className:"DiversificationBarPercentage"},e,"%"),i.a.createElement("div",{className:"DiversificationBarPercentageGraph"})),i.a.createElement("div",{className:"DiversificationBarRegion"},t))))))))};const On=Object(o.a)((()=>{const{t:e}=Object(m.a)(["overview"]),t=Object(s.f)();return i.a.createElement(kn,{isRow:!0},i.a.createElement("span",{className:"title-text_small"},e("diversification.title")),i.a.createElement(jn,{data:t.portfolio.regionDiversityBreakdown}),i.a.createElement(Tn,null,e("diversification.addFunds")," ",i.a.createElement(M.a,{to:"deposit/add-funds"},e("diversification.add-funds-link"))," ",e("diversification.add-funds-2")))})),kn=Object(r.e)(h)`
    display: flex;
    flex-direction: column;
    height: fit-content !important;
    padding: 26px 22px 34px;

    span {
        ${e=>e.theme.media.greaterThan("768px")`
            margin-top: 5px;
        `};
    }
`,Tn=r.e.div`
    font-size: 14px;

    a {
        text-decoration: none;
        color: ${e=>e.theme.colors.burntOrange};
    }

    ${e=>e.theme.media.greaterThan("768px")`
        margin-bottom: 17px;
    `};

    ${e=>e.theme.media.greaterThan("1441px")`
        font-size: 20px;
        line-height: 36px
    `};
`;var $n=n(785),Rn=n(1276),zn=n.n(Rn);const Vn=[{num:306},{num:237},{num:28},{num:55},{num:94}],Mn=({end:e,sequenceNumber:t})=>{const{countUp:n}=Object($n.useCountUp)({start:0,end:e,delay:0,duration:3});return i.a.createElement(Fn,{className:`counter_${t}`,width:`${e}`.length<=2?"80px":""},i.a.createElement("div",{className:"tooltip-top"},i.a.createElement("span",null,n,"%")," ",i.a.createElement("div",{className:"tooltip-arrow-wrapper"},i.a.createElement("img",{className:"tooltip-arrow",src:zn.a,alt:"countUp"}))),i.a.createElement("div",{className:`pointer pointer_${t}`}))},Nn=r.e.div`
    max-width: 100%;
    max-width: fit-content;
    max-height: fit-content;
    margin: 0 0 0 auto;
    position: relative;
    align-self: flex-end;
    animation: WhiskeyAnimation 1.5s linear;

    @keyframes WhiskeyAnimation {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .bottle {
        position: absolute;

        &:hover {
            cursor: pointer;
        }
    }
    .bottle1 {
        top: 29%;
        left: 31.5%;
        width: 9%;
        height: 34%;
    }
    .bottle2 {
        top: 34%;
        left: 44.5%;
        width: 7%;
        height: 43%;
    }
    .bottle3 {
        top: 46.5%;
        left: 57%;
        width: 6.5%;
        height: 47%;
    }
    .bottle4 {
        top: 25%;
        left: 66.5%;
        width: 8%;
        height: 39%;
    }
    .bottle5 {
        top: 39.5%;
        left: 77.5%;
        width: 6%;
        height: 46%;
    }

    @media screen and (max-width: 1000px) {
        margin: 0;
        margin-right: 5%;
    }
`,Fn=r.e.div`
    position: absolute;
    z-index: 2;
    display: flex;
    padding: 10.15px 13.05px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #efddc7;
    min-width: ${({width:e})=>e||"95px"};
    top: -80px;
    left: 50%;
    transform: translateX(23%);

    &.counter_5 {
        transform: translateX(-50%);
    }

    .tooltip-top {
        position: relative;
        z-index: 1;
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        font-family: Roslindaledisplaycondensed, sans-serif;
        font-size: 16px;
        line-height: 16px;
        color: #3a4002;
    }
    .tooltip-arrow-wrapper {
        width: 17.79px;
        height: 17.79px;
        border-radius: 50%;
        display: flex;
        margin-left: 11px;
    }
    .tooltip-arrow {
        display: block;
        width: 100%;
    }

    .pointer {
        width: 2px;
        height: 30px;
        background-color: #efddc7;
        position: absolute;
        transform: translate(0%, 73%) rotate(45deg);
        left: -10px;

        &:after {
            content: " ";
            display: block;
            position: absolute;
            bottom: -9px;
            left: 50%;
            border-radius: 50%;
            border: 2px solid #efddc7;
            background-color: transparent;
            width: 7px;
            height: 7px;
            transform: translate(-50%, 5%);
        }

        &.pointer_5 {
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 73%);
        }
    }
`;var Cn=({children:e})=>{const[t,n]=i.a.useState({num:2,pause:!1});return i.a.useEffect((()=>{const e=setInterval((()=>n((e=>e.pause?e:e.num<Vn.length-1?{...e,num:e.num+1}:{...e,num:0}))),5e3);return()=>clearInterval(e)}),[]),i.a.createElement(Nn,null,e,Vn.map((({num:e,year:a},r)=>i.a.createElement("div",{key:e,className:`bottle bottle${r+1}`,onMouseOver:()=>n({num:r,pause:!0}),onMouseLeave:()=>n((e=>({...e,pause:!1})))},t.num===r&&i.a.createElement(Mn,{end:e,sequenceNumber:r+1,year:a})))))},_n=n(1277),Dn=n.n(_n);const Pn=Object(r.e)(h)`
    padding: 0 !important;
    height: auto !important;
    min-height: 387px;
    position: relative;
    background: #3a4002;
    display: flex;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`,Sn=r.e.img`
    display: block;
    max-width: 100%;
    user-drag: none;
    user-select: none;
`,An=r.e.div`
    color: #fae8d1;
    padding: 107px 0 40px 93px;
    position: relative;
    z-index: 1;
    pointer-events: none;
    position: absolute;

    @media screen and (max-width: 1000px) {
        padding: 22px;
        width: 100%;
        text-align: center;
        position: relative;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }
`,qn=r.e.div`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
    margin-top: 7px;
    pointer-events: none;
`,Un=r.e.div`
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 84px;
    pointer-events: none;

    @media screen and (max-width: 1000px) {
        font-size: 50px;
        line-height: 70px;
    }

    @media screen and (max-width: 768px) {
        font-size: 35px;
        line-height: 65px;
    }
`,Bn=r.e.a`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    color: #fae8d1;
    min-width: 158px;
    min-height: 42px;
    padding: 10px;
    border: 1px solid #fae8d1;
    background: transparent;
    outline: 0;
    transition: 0.3s;
    margin-top: 29px;
    pointer-events: all;
    text-decoration: none;
    width: fit-content;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    @media screen and (max-width: 1000px) {
        margin: 0 auto;
        margin-top: 10px;
    }
`,Wn={AutoInvestBanner:()=>{const{t:e}=Object(m.a)(["overview"]),[t,n]=i.a.useState(!1),a=Object(s.d)(),r=Object(E.a)(),o=Object(s.f)(),l=o.transfer.shouldShowAccountSubscription&&(()=>{const e=localStorage.getItem("closingAutoInvestBannerMilliseconds");return!e||+e+6048e5<Date.now()})(),c=({show:e})=>i.a.createElement(i.a.Fragment,null,e&&i.a.createElement(z,{src:O.a,alt:"save 5%"}));return i.a.createElement(i.a.Fragment,null,l?i.a.createElement($,{className:t?"isClosing":""},i.a.createElement(R,{onClick:()=>{n(!0),setTimeout((()=>{o.transfer.hideAccountSubscriptionBanner(),localStorage.setItem("closingAutoInvestBannerMilliseconds",`${Date.now()}`)}),300)}},i.a.createElement("img",{src:T.a,alt:"close banner"})),i.a.createElement("div",null,i.a.createElement("div",{className:"title"},e("auto-invest.title",{amount:5})),i.a.createElement(c,{show:a}),i.a.createElement("div",{className:"description"},e("auto-invest.description"))),i.a.createElement(c,{show:!a}),i.a.createElement(V,{onClick:()=>{o.deposit.setDepositFrequencyKey("monthly (Most Popular)"),o.deposit.setUserSelectedFrequency(!0),r.push("/deposit/add-funds"),w.a.capture(b.a.AddFunds)}},e("auto-invest.enroll-button",{amount:5}))):null)},RecommendedPlanBanner:v,PersonalSnapshot:D,ReturnsBox:Y,RewardsBox:pe,AccountValueGraph:at,HistoricalReturnsCarousel:()=>{const{t:e}=Object(m.a)(["overview"]),t=Object(s.d)();return i.a.createElement(Tt,{isRow:!0},i.a.createElement("span",{className:"subtitle-text"},e("historical-returns.returns")),i.a.createElement(Rt,null,i.a.createElement(xt.a,{className:"slider-view-container",accessibility:!0,infinite:!0,autoplay:!0,adaptiveHeight:!0,slidesToShow:t?1:3,slidesToScroll:1,arrows:!0,prevArrow:i.a.createElement($t,{src:vt.a,alt:"back-arrow"}),nextArrow:i.a.createElement($t,{src:wt.a,alt:"next-arrow"})},jt.map((e=>i.a.createElement(kt,Ot({},e,{key:e.name})))))))},ReferralModule:()=>{const{t:e}=Object(m.a)(["overview"]),t=Object(s.b)(),n=Object(a.useCallback)((()=>{t("/invite")}),[t]);return i.a.createElement(Mt,{isRow:!0},i.a.createElement(Ft,null,i.a.createElement(Dt,null,e("referral-module.invite"),i.a.createElement("br",null),e("referral-module.earn")),i.a.createElement("p",null,e("referral-module.earn-description"))),i.a.createElement(Ct,null,i.a.createElement(_t,{src:Vt.a,alt:"balloon-microphone-hero"}),i.a.createElement(l.g,{onClick:n},e("referral-module.learn"))))},QualityValueProps:()=>{const{t:e}=Object(m.a)(["overview"]),t=[{header:e("quality-value.insurance-header"),description:e("quality-value.insurance-description"),svg:St.a},{header:e("quality-value.authenticity-header"),description:e("quality-value.description"),svg:qt.a},{header:e("quality-value.stored-header"),description:e("quality-value.stored-description"),svg:Bt.a}];return i.a.createElement(It,{isRow:!0},t.map((e=>i.a.createElement(Lt,Wt({key:e.header},e)))))},BookACall:()=>{const{t:e}=Object(m.a)(["overview"]),t=Object(Ht.a)(),n=Object(s.a)(),r=Object(a.useCallback)((()=>{w.a.capture("calendly",{component:"BookACall",progress:"launch"}),window.Calendly.showPopupWidget(n.calendly.url)}),[n]);return i.a.createElement(i.a.Fragment,null,t.transfer.hasMadeTransfers?i.a.createElement(pn,{isRow:!0},i.a.createElement(mn,null,i.a.createElement(fn,null,e("book-call.title")),i.a.createElement("p",null,e("book-call.subtitle"))),i.a.createElement(un,null,i.a.createElement(cn,null),i.a.createElement(hn,{onClick:r},e("book-call.book-button")))):null)},RegionDiversityGraph:On,DepositBannersList:F,WhiskeyVestBanner:()=>{const{t:e}=Object(m.a)("overview");return i.a.createElement(Pn,{isRow:!0},i.a.createElement(An,null,i.a.createElement(qn,null,e("whiskey-banner.early-access")),i.a.createElement(Un,null,e("whiskey-banner.whiskey-investing")),i.a.createElement(Bn,{href:"https://www.whiskeyvest.co/"},e("whiskey-banner.learn-more"))),i.a.createElement(Cn,null,i.a.createElement(Sn,{src:Dn.a,alt:"whiskey"})))}},Ln=Object(o.a)((()=>{const e=Object(s.f)();return a.useEffect((()=>{Object(c.a)()}),[]),a.createElement(l.e,{in:!0},a.createElement(In,null,e.skeleton.getOverviewModules.map((e=>{const t=Wn[e.type];return a.createElement(t,{key:e.type,role:"listitem",name:"overview-module"})}))))})),In=r.e.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 12px;
    justify-content: center;

    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 48px;
        padding: 67px 12px 0;
    `}
    ${e=>e.theme.media.greaterThan("920px")`
        justify-content: space-between;
    `}
`;t.default=Ln},703:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(216),o=n.n(r),s=n(1),l=n(670),c=n(13),p=n(768),d=n.n(p),m=n(769),u=n.n(m),f=n(770),h=n.n(f),g=n(771),x=n.n(g),b=n(772),v=n.n(b),y=n(773),w=n.n(y),E=n(774),j=n.n(E),O=n(775),k=n.n(O),T=n(776),$=n.n(T),R=n(777),z=n.n(R);const V={[c.h.sourcing_wine]:$.a,[c.h.wine_purchase]:u.a,[c.h.funds_added]:h.a,[c.h.pending_deposit]:h.a,[c.h.vinovest_monthly_fee]:x.a,[c.h.trade_settlement_purchase]:x.a,[c.h.transfer_in]:x.a,[c.h.early_withdrawl_60_day]:x.a,[c.h.vinovest_monthly_fee_waived]:x.a,[c.h.wine_shipped]:x.a,[c.h.wine_sold]:w.a,[c.h.funds_withdrew]:j.a,feeCredit:v.a,[c.h.rebalance_add]:d.a,foundWineForYou:z.a},M=(e,t)=>(e=>({[c.h.sourcing_wine]:e("transactions:items.sourcing"),[c.h.wine_purchase]:e("transactions:items.buy"),[c.h.funds_added]:e("transactions:items.deposit"),[c.h.pending_deposit]:e("transactions:items.pending"),[c.h.vinovest_monthly_fee]:e("transactions:items.fee"),[c.h.wine_sold]:e("transactions:transactions-header.sell"),[c.h.funds_withdrew]:e("transactions:items.withdrawn"),feeCredit:e("transactions:items.fee-credit"),[c.h.trade_settlement_purchase]:e("transactions:items.fee"),[c.h.transfer_in]:e("transactions:items.fee"),[c.h.early_withdrawl_60_day]:e("transactions:items.fee"),[c.h.vinovest_monthly_fee_waived]:e("transactions:items.fee"),[c.h.wine_shipped]:e("transactions:items.fee"),[c.h.rebalance_add]:e("transactions:items.adjust")}))(t)[e]||e,N=({type:e,width:t})=>i.a.createElement(C,{src:V[e]||k.a,alt:e,width:t}),F=({type:e,uppercase:t,skeleton:n,index:a})=>{const{t:r}=Object(l.a)();return i.a.createElement(_,null,i.a.createElement(N,{type:e}),i.a.createElement(D,{uppercase:t},n?i.a.createElement(o.a,{style:{height:"20px",width:a%2?"57px":"80px",display:"block",margin:"0"}}):M(e,r)))};F.typeLabel=M,F.TransactionTypeIcon=N;const C=s.e.img`
    display: inline-block;
    width: ${({width:e})=>e||"42px"};
    height: ${({width:e})=>e||"42px"};
    flex-shrink: 0;
`,_=s.e.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    img {
        margin-right: 27px;
    }
`,D=s.e.span`
    ${({uppercase:e})=>e?"text-transform: uppercase;":""}
    min-width: 42px;
`;t.a=F},749:function(e,t,n){"use strict";var a=n(0),i=n(1288),r=n(1307),o=n(1308),s=n(220),l=n.n(s),c=n(900);const p=(e,t)=>Math.min(...e.map(t)),d=(e,t)=>Math.max(...e.map(t)),m=e=>new Date(e.date),u=e=>e.price,f=Object(c.a)((e=>new Date(e.date))).left;t.a=({data:e,width:t,height:n,margin:s,showTooltip:c})=>{const h=t-s.left-s.right,g=n-s.top-s.bottom,x=Object(i.a)({range:[0,h],domain:(b=e,v=m,[p(b,v),d(b,v)])});var b,v;const y=Object(r.a)({range:[g,0],domain:[0,d(e,u)+g/3],nice:!0}),w=t=>{const{x:n}=Object(o.a)(t),a=x.invert(n),i=f(e,a,1),r=e[i-1],s=e[i];let p=r;s&&s.date&&(p=a-m(r.date)>m(s.date)-a?s:r),c({tooltipData:p,tooltipLeft:n,tooltipTop:y(l()(p,"price"))})};return Object(a.useMemo)((()=>({yMax:g,xMax:h,yScale:y,handleTooltip:w,xScale:x,yStock:u,xStock:m})),[g,h,t,n])}},768:function(e,t,n){e.exports=n.p+"static/media/adjustment.8d7a2dcb.svg"},769:function(e,t,n){e.exports=n.p+"static/media/buy.987ddd6f.svg"},770:function(e,t,n){e.exports=n.p+"static/media/deposit.c0b341e2.svg"},771:function(e,t,n){e.exports=n.p+"static/media/fee.6152d6df.svg"},772:function(e,t,n){e.exports=n.p+"static/media/feeCredit.9df7aaf9.svg"},773:function(e,t,n){e.exports=n.p+"static/media/sell.73d8605a.svg"},774:function(e,t,n){e.exports=n.p+"static/media/withdrawal.67ecf056.svg"},775:function(e,t,n){e.exports=n.p+"static/media/empty.33eca861.svg"},776:function(e,t,n){e.exports=n.p+"static/media/sourcingWine.48bf99a8.svg"},777:function(e,t,n){e.exports=n.p+"static/media/foundWineForYou.04d82de6.svg"},785:function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(5)),r=n(0),o=a(r),s=a(n(786)),l=a(n(787));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?h(e):t}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){i=!0,r=l}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e,t){var n=t.decimal,a=t.decimals,i=t.duration,r=t.easingFn,o=t.end,s=t.formattingFn,c=t.prefix,p=t.separator,d=t.start,m=t.suffix,u=t.useEasing;return new l(e,d,o,a,i,{decimal:n,easingFn:r,formattingFn:s,separator:p,prefix:c,suffix:m,useEasing:u,useGrouping:!!p})},v=function(e){function t(){var e,n;c(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return d(h(n=g(this,(e=u(t)).call.apply(e,[this].concat(i)))),"createInstance",(function(){return"function"===typeof n.props.children&&s(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),b(n.containerRef.current,n.props)})),d(h(n),"pauseResume",(function(){var e=h(n),t=e.reset,a=e.restart,i=e.update,r=n.props.onPauseResume;n.instance.pauseResume(),r({reset:t,start:a,update:i})})),d(h(n),"reset",(function(){var e=h(n),t=e.pauseResume,a=e.restart,i=e.update,r=n.props.onReset;n.instance.reset(),r({pauseResume:t,start:a,update:i})})),d(h(n),"restart",(function(){n.reset(),n.start()})),d(h(n),"start",(function(){var e=h(n),t=e.pauseResume,a=e.reset,i=e.restart,r=e.update,o=n.props,s=o.delay,l=o.onEnd,c=o.onStart,p=function(){return n.instance.start((function(){return l({pauseResume:t,reset:a,start:i,update:r})}))};s>0?n.timeoutId=setTimeout(p,1e3*s):p(),c({pauseResume:t,reset:a,update:r})})),d(h(n),"update",(function(e){var t=h(n),a=t.pauseResume,i=t.reset,r=t.restart,o=n.props.onUpdate;n.instance.update(e),o({pauseResume:a,reset:i,start:r})})),d(h(n),"containerRef",o.createRef()),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,i=t.suffix,r=t.prefix,o=t.redraw,s=t.duration,l=t.separator,c=t.decimals,p=t.decimal;return s!==e.duration||n!==e.end||a!==e.start||i!==e.suffix||r!==e.prefix||l!==e.separator||c!==e.decimals||p!==e.decimal||o}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,i=t.suffix,r=t.prefix,o=t.duration,s=t.separator,l=t.decimals,c=t.decimal,p=t.preserveValue;o===e.duration&&a===e.start&&i===e.suffix&&r===e.prefix&&s===e.separator&&l===e.decimals&&c===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(p||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,i=this.containerRef,r=this.pauseResume,s=this.reset,l=this.restart,c=this.update;return"function"===typeof t?t({countUpRef:i,pauseResume:r,reset:s,start:l,update:c}):o.createElement("span",{className:n,ref:i,style:a})}}])&&p(n.prototype,a),i&&p(n,i),t}(r.Component);d(v,"propTypes",{decimal:i.string,decimals:i.number,delay:i.number,easingFn:i.func,end:i.number.isRequired,formattingFn:i.func,onEnd:i.func,onStart:i.func,prefix:i.string,redraw:i.bool,separator:i.string,start:i.number,startOnMount:i.bool,suffix:i.string,style:i.object,useEasing:i.bool,preserveValue:i.bool}),d(v,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var y={innerHTML:null};t.default=v,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},v.defaultProps,{},e),n=t.start,a=t.formattingFn,i=x(r.useState("function"===typeof a?a(n):n),2),o=i[0],s=i[1],l=r.useRef(null),c=function(){var e=l.current;if(null!==e)return e;var n=function(){var e=b(y,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);s(e)},e}();return l.current=n,n},p=function(){var e=t.onReset;c().reset(),e({pauseResume:f,start:u,update:h})},u=function e(){var n=t.onStart,a=t.onEnd;c().reset(),c().start((function(){a({pauseResume:f,reset:p,start:e,update:h})})),n({pauseResume:f,reset:p,update:h})},f=function(){var e=t.onPauseResume;c().pauseResume(),e({reset:p,start:u,update:h})},h=function(e){var n=t.onUpdate;c().update(e),n({pauseResume:f,reset:p,start:u})};return r.useEffect((function(){var e=t.delay,n=t.onStart,a=t.onEnd;if(t.startOnMount)var i=setTimeout((function(){n({pauseResume:f,reset:p,update:h}),c().start((function(){clearTimeout(i),a({pauseResume:f,reset:p,start:u,update:h})}))}),1e3*e);return p}),[]),{countUp:o,start:u,pauseResume:f,reset:p,update:h}}},786:function(e,t,n){"use strict";var a=function(){};e.exports=a},787:function(e,t,n){var a,i;void 0===(i="function"===typeof(a=function(e,t,n){return function(e,t,n,a,i,r){function o(e){var t,n,a,i,r,o,s=e<0;if(e=Math.abs(e).toFixed(c.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?c.options.decimal+t[1]:"",c.options.useGrouping){for(i="",r=0,o=n.length;r<o;++r)0!==r&&r%3===0&&(i=c.options.separator+i),i=n[o-r-1]+i;n=i}return c.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]}))),(s?"-":"")+c.options.prefix+n+a+c.options.suffix}function s(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t}function l(e){return"number"==typeof e&&!isNaN(e)}var c=this;if(c.version=function(){return"1.9.3"},c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var p in c.options)r.hasOwnProperty(p)&&null!==r[p]&&(c.options[p]=r[p]);""===c.options.separator?c.options.useGrouping=!1:c.options.separator=""+c.options.separator;for(var d=0,m=["webkit","moz","ms","o"],u=0;u<m.length&&!window.requestAnimationFrame;++u)window.requestAnimationFrame=window[m[u]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[m[u]+"CancelAnimationFrame"]||window[m[u]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-d)),i=window.setTimeout((function(){e(n+a)}),a);return d=n+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),c.initialize=function(){return!!c.initialized||(c.error="",c.d="string"==typeof e?document.getElementById(e):e,c.d?(c.startVal=Number(t),c.endVal=Number(n),l(c.startVal)&&l(c.endVal)?(c.decimals=Math.max(0,a||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(i)||2e3,c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.initialized=!0,!0):(c.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(c.error="[CountUp] target is null or undefined",!1))},c.printValue=function(e){var t=c.options.formattingFn(e);"INPUT"===c.d.tagName?this.d.value=t:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=t:this.d.innerHTML=t},c.count=function(e){c.startTime||(c.startTime=e),c.timestamp=e;var t=e-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.options.easingFn(t,0,c.startVal-c.endVal,c.duration):c.frameVal=c.options.easingFn(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(t/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(e){c.initialize()&&(c.callback=e,c.rAF=requestAnimationFrame(c.count))},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.initialized=!1,c.initialize()&&(cancelAnimationFrame(c.rAF),c.printValue(c.startVal))},c.update=function(e){if(c.initialize()){if(!l(e=Number(e)))return void(c.error="[CountUp] update() - new endVal is not a number: "+e);c.error="",e!==c.frameVal&&(cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=e,c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count))}},c.initialize()&&c.printValue(c.startVal)}})?a.call(t,n,t,e):a)||(e.exports=i)},832:function(e,t,n){"use strict";function a(e,t){let n;if(void 0===t)for(const a of e)null!=a&&(n<a||void 0===n&&a>=a)&&(n=a);else{let a=-1;for(let i of e)null!=(i=t(i,++a,e))&&(n<i||void 0===n&&i>=i)&&(n=i)}return n}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=11.8675a496.chunk.js.map
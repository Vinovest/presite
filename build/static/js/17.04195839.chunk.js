(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[17],{1015:function(e,t,a){e.exports=a.p+"static/media/feeFree.668a80a4.svg"},1329:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(11),r=a(1),l=a(8),o=a(699),d=a(12),c=a(216),p=a.n(c),m=a(670),h=a(49),u=a(2);const g=r.e.div`
    position: relative;
    width: 100%;
`,f=r.e.div`
    padding: 0 15px;
    height: 40px;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    color: #242e35;
    border: 1px solid #a8abad;
`,x=r.e.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`,w=r.e.div`
    padding-bottom: 85px;
    background: #fff;
`,b=r.e.div`
    padding: 19px 29px 14px;
    border-bottom: 1px solid #eeeeee;
`,y=r.e.div`
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    padding: 5px;
`;var v=({options:e,selected:t,selectedLabel:a,onChange:n})=>{const[s,r]=i.a.useState(!1),l=e=>e.currentTarget===e.target&&r((e=>!e));return i.a.createElement(g,null,i.a.createElement(f,{onClick:l},i.a.createElement("span",null,a||t)," ",i.a.createElement("svg",{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M1 1L7 7L13 1",stroke:"#242E35",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),s&&i.a.createElement(x,{onClick:l},i.a.createElement(w,null,i.a.createElement(b,null,e.map(((a,s)=>i.a.createElement(y,{key:a.label,onClick:e=>{e.stopPropagation(),n(a),r((e=>!e))},style:s===e.length-1?{border:0}:{}},i.a.createElement("span",null,a.label),t===a.value&&i.a.createElement("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M1 5.23529L4.80952 9L11 1",stroke:"#242E35",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))))))))},E=a(13);var _=r.e.div`
    margin-top: 55px;
    width: 100%;
    flex-shrink: 0;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.025em;

    span {
        text-transform: uppercase;
        margin-bottom: -2px;
        white-space: nowrap;
    }

    button {
        border: 1px solid #a8abad;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
    }

    ul {
        min-width: 100%;
        box-shadow: unset;
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
        border-top: 1px solid #eeeeee;
        padding: 0;
        margin-top: 9px;
        ${e=>e.theme.media.greaterThan("768px")`
            min-width: ${({desktopWidth:e})=>e||"132px"};
            width: ${({desktopWidth:e})=>e||"132px"};
        `}
    }

    li {
        border: 1px solid #eeeeee;
        border-top: 0;
        border-bottom: 1px solid #eeeeee;
        height: 40px;
        padding: 0 16px;

        span {
            text-transform: uppercase;
            white-space: nowrap;
        }
    }

    ${e=>e.theme.media.greaterThan("768px")`
        margin: 0;
        width: ${({desktopWidth:e})=>e||"132px"};
    `}
`,k=a(1015),j=a.n(k);const O=Object(s.a)((({withAnimation:e,maxWidth:t,empty:a})=>{const{t:n}=Object(m.a)(["transactions"]),s=Object(l.f)();return i.a.createElement(C,{disabled:a,className:e?"withAnimation":"",maxWidth:t,onClick:s.referral.toggleReferralInviteModalWindowOpen},!a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,n("buttons.fee_free")," ")," ",i.a.createElement("img",{src:j.a,alt:"fee free icon"})))})),C=r.e.button`
    padding: 11px 0;
    max-width: ${({maxWidth:e})=>e||"334px"};
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #242e35;
    outline: 0;
    border: 0;
    padding: 5px;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #fae8d1;
    transition: 0.3s;

    img {
        margin-left: 10px;
    }

    span {
        display: block;
        margin-bottom: -2.5px;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    &.withAnimation {
        animation: GetFeeFreeBtnAnimation 300ms;

        @media screen and (min-width: 1024px) {
            position: absolute;
            right: 25px;

            @keyframes GetFeeFreeBtnAnimation {
                0% {
                    opacity: 0;
                }
                99% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }
    }
`;var W=O;const L=i.a.createContext(null),D=Object(s.a)((({depositsPending:e})=>{const{t}=Object(m.a)(["transactions"]),a=[{label:t("transactions-header.all_transactions"),value:""},{label:t("transactions-header.buy"),value:E.h.wine_purchase},{label:t("transactions-header.sell"),value:E.h.wine_sold},{label:t("transactions-header.deposit"),value:E.h.funds_added},{label:t("transactions-header.withdraw"),value:E.h.funds_withdrew},{label:t("transactions-header.fee"),value:E.h.vinovest_monthly_fee}],s=[{label:t("transactions-header.all_time"),value:""},{label:t("transactions-header.month"),value:"month"},{label:t("transactions-header.last_month"),value:"last_month"},{label:t("transactions-header.last_90"),value:"last_90"},{label:t("transactions-header.current_year"),value:"current_year"},{label:t("transactions-header.previous_year"),value:"previous_year"}],r=Object(l.f)(),{range:o,type:c}=r.transfer.deposits,{detailsId:h,setDetailsId:u}=i.a.useContext(L),g=i.a.useRef(null),f=Object(l.d)(767),x=Object(l.d)(1024),w=()=>{r.transfer.deposits.fees.some((({id:e})=>e===h))&&u(null)},b=e=>{w(),r.transfer.fetchDeposits({pageToken:0,type:e.value,range:o})},y=e=>{w(),r.transfer.fetchDeposits({pageToken:0,type:c,range:e.value})},k=s.find((({value:e})=>e===o)),j=a.find((({value:e})=>e===c));return Object(n.useEffect)((()=>{g.current=!0}),[]),i.a.createElement(I,null,!f&&i.a.createElement(i.a.Fragment,null,e?i.a.createElement(p.a,{style:{height:"40px",width:"240px",display:"block",marginRight:"34px"}}):i.a.createElement(_,{desktopWidth:"240px"},i.a.createElement(d.d,{options:a,selectedInParent:c,selectedLabel:j.label,onChange:b,selectedBackground:"#EEF2F7"})),i.a.createElement("div",{className:"TransactionsDropDownWide"},e?i.a.createElement(p.a,{style:{height:"40px",width:"173px",display:"block"}}):i.a.createElement(_,{desktopWidth:"173px"},i.a.createElement(d.d,{options:s,selectedInParent:o,selectedLabel:k.label,onChange:y,selectedBackground:"#EEF2F7"})))),f&&i.a.createElement(i.a.Fragment,null,e?i.a.createElement(M,null,i.a.createElement(p.a,{style:{position:"static",height:"39px",width:"100%",display:"block"}})):i.a.createElement($,null,i.a.createElement(v,{options:a,selected:c,selectedLabel:j.label,onChange:b})),e?i.a.createElement(M,null,i.a.createElement(p.a,{style:{position:"static",height:"39px",width:"100%",display:"block"}})):i.a.createElement($,null,i.a.createElement(v,{options:s,selected:o,selectedLabel:k.label,onChange:y}))),(!h||f)&&(!x||f)&&i.a.createElement(W,{withAnimation:g.current?"withAnimation":"",maxWidth:f?"100%":"334px",empty:e}))})),I=r.e.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    padding: 0 25px;
    position: relative;
    z-index: 1;

    .TransactionsDropDownWide {
        flex-grow: 1;
    }

    ${_} {
        ${"padding: 11px 0;"};
        margin: 0 30px 0 0 !important;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        padding: 0 30px;
        margin-bottom: 0;
    }

    @media screen and (max-width: 767px) {
        margin: 14px 0 0;
        margin-top: 30px;
        padding: 0 20px;
    }
`,$=r.e.div`
    width: 100%;
    padding: 0 0 30px;
`,M=r.e.div`
    width: 100%;
    height: 39px;
    margin: 0 0 30px;
`;var F=D,z=a(20);var A=({colors:e=[],amount:t})=>i.a.createElement("span",{style:{color:+t>=0?e[0]||"#448B47":e[1]||"#953536"}},+t>=0&&"+",Object(z.c)(+t)),N=a(703),T=a(10);const P=[E.h.trade_settlement_purchase,E.h.transfer_in,E.h.vinovest_monthly_fee_waived],G=r.e.div`
    width: 100%;
    padding: 36px 0 0;
`,R=r.e.div`
    padding: 0 25px 40px;
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #242e35;

    @media screen and (max-width: 767px) {
        padding: 0 20px 40px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        padding: 0 30px 23px;
    }
`,S=r.e.div`
    display: grid;
    grid-template-columns: 135fr 225fr 202fr 138fr;
    grid-template-areas: ". . . .";
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.005em;
    color: #242e35;
    white-space: nowrap;
    border-bottom: 1px solid #eeeeee;
    padding: 13px 3px 13px 0;

    &.shrinkGridDesktop {
        @media screen and (min-width: 1025px) and (max-width: 1200px) {
            font-size: 13px;
        }
    }

    .gridCell,
    .gridCellOverflow {
        height: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .gridCellOverflow {
        overflow: hidden;
    }

    span.ellipsis {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .lastGridCell {
        text-align: right;
        padding-right: 0;
    }
`,V=Object(r.e)(S)`
    grid-template-columns: 222fr 93fr;
    grid-template-areas: ". .";
    gap: 0 5px;
`,B=r.e.div`
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;

    img {
        margin-right: 15px;
    }
`,U=r.e.div`
    padding: 0 25px;
    background-color: transparent;
    transition: 0.3s;
    border-radius: 10px;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }

    &.withTitles:hover {
        opacity: 1;
        cursor: default;
    }

    &.selectedGridWrapper {
        background-color: #eef2f7;
        opacity: 1;
        position: relative;

        @media screen and (min-width: 1025px) {
            &:after {
                position: absolute;
                top: 50%;
                right: -50px;
                transform: translateY(-50%);
                content: " ";
                display: block;
                width: 0px;
                height: 0px;
                border-top: 9px solid transparent;
                border-bottom: 9px solid transparent;
                border-left: 9px solid #c5d5e4;
            }
        }

        ${S} {
            border-bottom: 1px solid transparent;
        }
    }

    .textEllipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        display: block;
    }

    .underText {
        font-size: 14px;
        line-height: 21px;
    }

    @media screen and (max-width: 767px) {
        padding: 0 20px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        padding: 0 30px;
    }
`,q=Object(r.e)(S)`
    font-size: 14px;
    line-height: 18px;
    padding-top: 0;
    padding-bottom: 8px;
    font-family: VinovestMono;
    text-transform: uppercase;
`,Y=r.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.005em;
    color: #242e35;
    width: 80%;
    height: 205px;
    margin: 0 auto;
    text-align: center;

    @media screen and (max-width: 767px) {
        height: 236px;
    }
`,J=r.e.span`
    color: #ff4d00;
`,H=({type:e,typeLabel:t,description:a,amount:n,date:s})=>i.a.createElement(V,null,i.a.createElement(B,null,i.a.createElement(N.a.TransactionTypeIcon,{type:e}),i.a.createElement("div",{style:{overflow:"hidden",width:"100%"}},i.a.createElement("div",{className:"textEllipsis"},t),i.a.createElement("span",{className:"underText textEllipsis"},a))),i.a.createElement("div",{className:"gridCell lastGridCell"},n,i.a.createElement("span",{className:"underText"}," ",s," "))),K=({type:e,description:t,amount:a,date:n,detailsId:s})=>i.a.createElement(S,{className:s?"shrinkGridDesktop":""},i.a.createElement("div",{className:"gridCell"},n),i.a.createElement("div",{className:"gridCell"},i.a.createElement(N.a,{type:e,skeleton:"show-skeleton"===e,index:s})),i.a.createElement("div",{className:"gridCell gridCellOverflow"},i.a.createElement("span",{className:"ellipsis"},t," ")),i.a.createElement("div",{className:"gridCell lastGridCell"},a)),Q=({createdAt:e,type:t,meta:a,money:{amount:n},id:s,status:r,name:o})=>{const{setDetailsId:d,detailsId:c}=i.a.useContext(L),p=Object(l.d)(767),{t:h}=Object(m.a)(["transactions"]),u=null!==a&&void 0!==a&&a.quantity?`${a.quantity} ${h("wine-details.of")} ${a.bottles}`:i.a.createElement(A,{amount:+n/100,colors:[null,"#242E35"]}),g=(({type:e,name:t,meta:a,t:n})=>{let i=N.a.typeLabel(e,n);return"wine_purchase"===e&&(i=null===a||void 0===a?void 0:a.name),P.includes(e)&&t&&(i=`${t.charAt(0).toUpperCase()}${t.slice(1)}`),e===E.h.early_withdrawl_60_day&&(i=n("details.early_withdrawal")),i})({type:t,name:o,meta:a,t:h}),f="failed"===r?i.a.createElement(J,null,h("transactions-list.failed")," "):h("transactions-list.pending"),x=e?Object(z.f)(e):f;return i.a.createElement(i.a.Fragment,{key:s},i.a.createElement(U,{onClick:()=>d((e=>e===s?null:s)),className:c===s?"selectedGridWrapper":""},p?i.a.createElement(H,{type:t,typeLabel:N.a.typeLabel(t,h),description:g,amount:u,date:x}):i.a.createElement(K,{detailsId:c,type:t,description:g,amount:u,date:x})))},X=({maxWidth:e,height:t})=>i.a.createElement(p.a,{style:{height:t||"20px",maxWidth:e||"58px",width:"100%",display:"inline-block",margin:"0"}});var Z=a(6);const ee=({isMobile:e,pendingLength:t=0})=>{const a=Object(n.useMemo)((()=>Object(Z.range)(t)),[t]);return i.a.createElement(i.a.Fragment,null,a.map((t=>i.a.createElement(i.a.Fragment,{key:t},e?i.a.createElement(U,null,i.a.createElement(H,{type:"show-skeleton",typeLabel:i.a.createElement(X,null),description:i.a.createElement(X,{maxWidth:"81px"}),amount:i.a.createElement(X,null),date:i.a.createElement(X,null)})):i.a.createElement(U,null,i.a.createElement(K,{type:"show-skeleton",description:i.a.createElement(X,{maxWidth:"81px"}),amount:i.a.createElement(X,null),date:i.a.createElement(X,null)}))))))},te=({itemsSourcing:e,id:t})=>{const{setDetailsId:a,detailsId:s}=Object(n.useContext)(L),r=Object(l.d)(767),{t:o}=Object(m.a)(["transactions"]),d=`${o("wine-details.sourcing")} ${e} ${e>1?`${o("wine-details.more_cases")}`:`${o("wine-details.more_case")}`}`;return i.a.createElement(i.a.Fragment,{key:t},i.a.createElement(U,{onClick:()=>a((e=>e===t?null:t)),className:s===t?"selectedGridWrapper":""},r?i.a.createElement(H,{type:"sourcing_wine",typeLabel:o("items.sourcing"),description:d,amount:o("messages.pending"),date:i.a.createElement("span",{className:"underText"},o("messages.pending"))}):i.a.createElement(K,{detailsId:s,type:"sourcing_wine",description:d,amount:o("messages.pending"),date:o("messages.pending")})))};var ae=({title:e,transactions:t=[],emptyMessage:a,isPending:n,pendingLength:s,sourcingWine:r})=>{var o;const d=Object(l.d)(767),{t:c}=Object(m.a)(["transactions"]),p=(e,a,s)=>!n||null!==t&&void 0!==t&&t.length?e:i.a.createElement(X,{height:a,maxWidth:s}),h=null===r||void 0===r?void 0:r.length;return i.a.createElement(G,null,i.a.createElement(R,null,p(e,"27px","111px")),!d&&i.a.createElement(U,{className:"withTitles"},i.a.createElement(q,null,i.a.createElement("div",null,p(c("transactions-list.date"))),i.a.createElement("div",null,p(c("transactions-list.type"))),i.a.createElement("div",null,p(c("transactions-list.description"))),i.a.createElement("div",{className:"lastGridCell title"},p(c("transactions-list.amount"))))),h>0&&i.a.createElement(te,{id:null===(o=r[0])||void 0===o?void 0:o.id,itemsSourcing:h}),t?t.map((e=>i.a.createElement(Q,{createdAt:e.createdAt,type:e.type,meta:e.meta,money:e.money,id:e.id,status:e.status,name:e.name,key:e.id}))):i.a.createElement(ee,{isMobile:d,pendingLength:s}),0===(null===t||void 0===t?void 0:t.length)&&i.a.createElement(Y,null,a),n&&i.a.createElement(ee,{isMobile:d,pendingLength:s}))};const ne=Object(s.a)((()=>{const{t:e}=Object(m.a)(["transactions"]),t=Object(l.f)(),a=Object(l.d)(1024),s=Object(l.d)(767),{oktaAuth:r}=Object(h.d)(),{type:o,range:d}=t.transfer.deposits,c=Object(u.f)(t.transfer.depositsEntity),g=(c.isPending()||!c.isDone())&&!t.transfer.deposits.fees.length,[f,x]=Object(n.useState)(null),[w,b]=Object(n.useState)(null);Object(n.useEffect)((()=>{(async()=>{await t.user.requestUserDetailsFromOkta(r),await Promise.all([t.transfer.fetchPendingTransfers(),t.transfer.fetchBidsActive()]),x(t.transfer.pendingDeposits),b(t.transfer.sourcingWines)})()}),[r,t.transfer,t.user]);const y=t.transfer.deposits.fees;return i.a.createElement(ie,null,i.a.createElement(se,null,i.a.createElement(re,null,g?i.a.createElement(p.a,{style:{height:"39px",width:"187px",display:"inline-block",padding:"10px 0 9px"}}):e("title")),a&&!s&&i.a.createElement(W,{maxWidth:"308px",empty:g})),i.a.createElement(F,{depositsPending:g}),i.a.createElement(ae,{title:e("messages.pending"),pendingLength:3,emptyMessage:e("messages.empty_transaction"),transactions:f,sourcingWine:w}),i.a.createElement(ae,{pendingLength:10,title:e("items.completed"),transactions:y,emptyMessage:(o||d)&&c.isSuccess()?e("messages.no_match"):e("messages.empty"),isPending:c.isPending()||!c.isDone(),isDone:c.isDone()}))})),ie=r.e.div`
    width: 100%;
`,se=r.e.div`
    width: 100%;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        margin-bottom: 14px;
        padding: 0 30px;
    }

    @media screen and (max-width: 767px) {
        padding: 0 20px;
    }
`,re=r.e.h1`
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 60px;
    color: #242e35;
    margin-bottom: 35px;
    margin-top: 0;

    @media screen and (max-width: 767px) {
        font-size: 32px;
        line-height: 41px;
        margin-bottom: 50px;
        padding: 0;
    }
`;var le=ne;const oe=e=>i.a.createElement("svg",{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M9.32043 1V12.7124",stroke:e.stroke,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.a.createElement("path",{d:"M4.9259 8.52942L9.32057 12.7124L13.7152 8.52942",stroke:e.stroke,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.a.createElement("path",{d:"M1.19043 12.2942V16.0589H18V12.2942",stroke:e.stroke,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),de=e=>{const{t}=Object(m.a)(["transactions"]),a=Object(l.f)(),n=!Object(l.d)(1024),s=a.documents.accountWineCertificateEntity.data.documents.find((({id:t})=>t===e.transactionDocumentID));return i.a.createElement(ce,{onClick:()=>{a.documents.getDocumentItem(s.id,s.name,n)}},i.a.createElement(oe,{stroke:"#4f81b0"}),t("buttons.wine_certificate"))},ce=r.e.button`
    background: none;
    border: none;
    color: #4f81b0;
    cursor: pointer;
    padding: 1rem 0;

    svg {
        margin-right: 0.5rem;
        vertical-align: bottom;
    }
`,pe=(e,t,a)=>["funds_added","funds_withdrew"].includes(e)?t(`currency:${a}`,{locale:"en"}):["vinovest_monthly_fee"].includes(e)?t("details.management"):"sourcing_wine"===e?t("wine-details.sourcing_wine_statement"):N.a.typeLabel(e,t),me=Object(s.a)((({detailsId:e})=>{var t,a,n;const{t:s}=Object(m.a)(["transactions"]),r=Object(l.f)();let o=null;if(e&&(o=r.transfer.deposits.fees&&r.transfer.deposits.fees.find((({id:t})=>t===e))||r.transfer.pendingDeposits&&r.transfer.pendingDeposits.find((({id:t})=>t===e))||r.transfer.sourcingWines&&r.transfer.sourcingWines.find((({id:t})=>t===e))),!o)return null;const d=null===(t=o)||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.certificateDocID;return i.a.createElement(ue,null,i.a.createElement(N.a,{type:o.type,uppercase:!0}),!(null!==(n=o.meta)&&void 0!==n&&n.quantity)&&i.a.createElement(ge,null,i.a.createElement(A,{amount:+o.money.amount/100,colors:[null,"#242E35"]})),i.a.createElement(fe,null),i.a.createElement(xe,null,"sourcing_wine"===o.type?pe(o.type,s,T.a.language):Object(Z.get)(o.meta,"name",pe(o.type,s,T.a.language)),Object(Z.get)(o.meta,"vintage","")),o.meta&&[E.h.wine_purchase,E.h.wine_sold].includes(o.type)&&i.a.createElement(he,{lwin18:o.meta.lwin18,amount:o.money.amount,meta:o.meta,t:s}),"failed"===o.status?i.a.createElement(we,{className:"failed"},s("messages.failed")):i.a.createElement(we,null,s("labels.date"),": ",o.createdAt?Object(z.f)(o.createdAt):s("messages.pending")),"sourcing_wine"===o.type&&i.a.createElement(we,null,s("transactions-list.amount"),": ",s("messages.pending")),d&&i.a.createElement(de,{transactionDocumentID:d}))})),he=({lwin18:e,amount:t,t:a})=>{const n=+Object(z.h)(e),s=+Object(z.g)(e)+a("labels.ml");return i.a.createElement(i.a.Fragment,null,i.a.createElement(we,null,a("labels.size"),": ",s),i.a.createElement(we,null,a("labels.quantity"),": ",a("labels.case_size")," ",n," ",a("labels.bottles")),+t?i.a.createElement(we,null,a("labels.price_per_bottle"),": ",Object(z.c)(+Math.abs(t)/100/n)):null)},ue=r.e.div`
    width: 100%;
    max-width: 400px;
    padding: 28px 39px 82px;
    margin: 0 auto;
`,ge=r.e.div`
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 60px;
    display: flex;
    align-items: center;
    padding: 33px 0 0;
`,fe=r.e.div`
    padding: 0 0 28px;
    border-bottom: 1px solid #eeeeee;
`,xe=r.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.005em;
    color: #242e35;
    margin: 20px 0 18px;

    &:first-letter {
        text-transform: uppercase;
    }
`,we=r.e.div`
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    padding: 4px 0;
    display: flex;
    align-items: center;
    letter-spacing: 0.005em;
    color: #5b646b;

    &.failed {
        color: #ff4d00;
    }
`;var be=me,ye=a(103);const ve=r.e.div`
    width: 100%;
    padding: 11px;
    margin: 0 auto;
    border-radius: 0px;
`;var Ee=({children:e,onClose:t})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(ye.a,{isOpen:!0,onClose:t,borderRadius:0,additionalStyles:"\n    background: transparent;\n    border-radius: 0px;\n    box-shadow: none;\n    width: 100%;\n    max-width: 400px;\n    margin: auto;\n\n    .closeIcon {\n        top: 31px;\n        right: 31px\n    }\n\n"},i.a.createElement(ve,null,e)));const _e=Object(s.a)((()=>{const e=Object(l.f)(),[t,a]=Object(n.useState)(null),s=Object(l.d)(1024),r={detailsId:t,setDetailsId:a};Object(n.useEffect)((()=>{e.auth.isAuthenticated&&e.user.oktaUserInfo&&e.user.oktaUserInfo.sub&&(e.transfer.deposits.fees&&e.transfer.deposits.fees.length||(e.transfer.fetchDeposits({type:"",range:""}),e.documents.fetchWineCertificates({type:"",range:""}),e.documents.fetchAccountStatements({year:"",pageSize:10})),e.transfer.bidsActive.length||e.transfer.fetchBidsActive())}),[e.auth.isAuthenticated,e.documents,e.transfer,e.user.oktaUserInfo,e.user.oktaUserInfo.sub]);const[c,p]=Object(o.a)({});return Object(n.useEffect)((()=>{p.intersectionRatio&&(e.transfer.fetchDeposits({},!0),e.documents.fetchWineCertificates({},!0))}),[p.intersectionRatio,e.documents,e.transfer]),i.a.createElement(d.e,{in:!0},i.a.createElement(ke,null,i.a.createElement(je,null,i.a.createElement(L.Provider,{value:r},i.a.createElement(Ce,{className:t&&!s?"narrow":""},i.a.createElement(le,null)),i.a.createElement(Le,{className:t&&!s?"open":""},i.a.createElement(be,{detailsId:t})))),i.a.createElement("div",{ref:c}),t&&s&&i.a.createElement(Ee,{onClose:()=>a(null)},i.a.createElement(We,null,i.a.createElement(be,{detailsId:t})))))}));t.default=_e;const ke=r.e.div`
    width: 100%;
    max-width: 1260px;
    padding: 0;
    margin: 0 auto;
`,je=r.e.div`
    margin: 58px 10px 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`,Oe="\n    background: #ffffff;\n    border: 1px solid #eeeeee;\n    box-sizing: border-box;\n    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n",Ce=r.e.div`
    ${Oe};
    width: 100%;
    transition: width 0.3s;
    padding: 48px 25px 138px;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        padding: 56px 0 58px;
    }

    @media screen and (max-width: 767px) {
        padding: 33px 0 58px;
    }

    &.narrow {
        width: 64.5%;
    }
`,We=r.e.div`
    ${Oe};
    max-width: 400px;
    padding: 11px;
    width: 100%;
    min-height: 400px;
    height: fit-content;
`,Le=r.e.div`
    width: 0%;
    overflow: hidden;
    transition: width 0.3s;

    &.open {
        position: sticky;
        top: 100px;
        ${Oe};
        width: 32.25%;
        overflow: auto;
        transition: width 0.3s;
        min-height: 400px;
        height: fit-content;
    }
`},699:function(e,t,a){"use strict";var n=a(0);t.a=({root:e=null,rootMargin:t,threshold:a=0})=>{const[i,s]=Object(n.useState)({}),r=Object(n.useRef)(null),l=Object(n.useRef)(new window.IntersectionObserver((([e])=>s(e)),{root:e,rootMargin:t,threshold:a}));return Object(n.useEffect)((()=>{const{current:e}=l;return e.disconnect(),r.current&&e.observe(r.current),()=>e.disconnect()}),[r.current]),[r,i]}},703:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(216),r=a.n(s),l=a(1),o=a(670),d=a(13),c=a(768),p=a.n(c),m=a(769),h=a.n(m),u=a(770),g=a.n(u),f=a(771),x=a.n(f),w=a(772),b=a.n(w),y=a(773),v=a.n(y),E=a(774),_=a.n(E),k=a(775),j=a.n(k),O=a(776),C=a.n(O),W=a(777),L=a.n(W);const D={[d.h.sourcing_wine]:C.a,[d.h.wine_purchase]:h.a,[d.h.funds_added]:g.a,[d.h.pending_deposit]:g.a,[d.h.vinovest_monthly_fee]:x.a,[d.h.trade_settlement_purchase]:x.a,[d.h.transfer_in]:x.a,[d.h.early_withdrawl_60_day]:x.a,[d.h.vinovest_monthly_fee_waived]:x.a,[d.h.wine_shipped]:x.a,[d.h.wine_sold]:v.a,[d.h.funds_withdrew]:_.a,feeCredit:b.a,[d.h.rebalance_add]:p.a,foundWineForYou:L.a},I=(e,t)=>(e=>({[d.h.sourcing_wine]:e("transactions:items.sourcing"),[d.h.wine_purchase]:e("transactions:items.buy"),[d.h.funds_added]:e("transactions:items.deposit"),[d.h.pending_deposit]:e("transactions:items.pending"),[d.h.vinovest_monthly_fee]:e("transactions:items.fee"),[d.h.wine_sold]:e("transactions:transactions-header.sell"),[d.h.funds_withdrew]:e("transactions:items.withdrawn"),feeCredit:e("transactions:items.fee-credit"),[d.h.trade_settlement_purchase]:e("transactions:items.fee"),[d.h.transfer_in]:e("transactions:items.fee"),[d.h.early_withdrawl_60_day]:e("transactions:items.fee"),[d.h.vinovest_monthly_fee_waived]:e("transactions:items.fee"),[d.h.wine_shipped]:e("transactions:items.fee"),[d.h.rebalance_add]:e("transactions:items.adjust")}))(t)[e]||e,$=({type:e,width:t})=>i.a.createElement(F,{src:D[e]||j.a,alt:e,width:t}),M=({type:e,uppercase:t,skeleton:a,index:n})=>{const{t:s}=Object(o.a)();return i.a.createElement(z,null,i.a.createElement($,{type:e}),i.a.createElement(A,{uppercase:t},a?i.a.createElement(r.a,{style:{height:"20px",width:n%2?"57px":"80px",display:"block",margin:"0"}}):I(e,s)))};M.typeLabel=I,M.TransactionTypeIcon=$;const F=l.e.img`
    display: inline-block;
    width: ${({width:e})=>e||"42px"};
    height: ${({width:e})=>e||"42px"};
    flex-shrink: 0;
`,z=l.e.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    img {
        margin-right: 27px;
    }
`,A=l.e.span`
    ${({uppercase:e})=>e?"text-transform: uppercase;":""}
    min-width: 42px;
`;t.a=M},768:function(e,t,a){e.exports=a.p+"static/media/adjustment.8d7a2dcb.svg"},769:function(e,t,a){e.exports=a.p+"static/media/buy.987ddd6f.svg"},770:function(e,t,a){e.exports=a.p+"static/media/deposit.c0b341e2.svg"},771:function(e,t,a){e.exports=a.p+"static/media/fee.6152d6df.svg"},772:function(e,t,a){e.exports=a.p+"static/media/feeCredit.9df7aaf9.svg"},773:function(e,t,a){e.exports=a.p+"static/media/sell.73d8605a.svg"},774:function(e,t,a){e.exports=a.p+"static/media/withdrawal.67ecf056.svg"},775:function(e,t,a){e.exports=a.p+"static/media/empty.33eca861.svg"},776:function(e,t,a){e.exports=a.p+"static/media/sourcingWine.48bf99a8.svg"},777:function(e,t,a){e.exports=a.p+"static/media/foundWineForYou.04d82de6.svg"}}]);
//# sourceMappingURL=17.04195839.chunk.js.map
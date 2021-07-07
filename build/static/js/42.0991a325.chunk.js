(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[42],{1340:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(11),r=n(670),l=n(12),s=n(216),c=n.n(s),p=n(20),d=n(8),m=n(42),h=n(1),x=n(125);const g=()=>{const{t:e}=Object(r.a)(["documents"]),t=Object(d.b)("/deposit/add-funds",x.a.AddFunds);return i.a.createElement(u,null,i.a.createElement(f,null,e("empty_title")),i.a.createElement(b,{onClick:t},e("empty_button")))},u=h.e.div`
    min-height: 558px;
    padding-top: 169px;

    ${e=>e.theme.media.greaterThan("768px")`
        padding-top: 201px; 
        min-height:  766px; 
    `};
`,f=h.e.div`
    width: 223px;
    text-align: center;
    margin: 0 auto;
    ${e=>e.theme.media.greaterThan("768px")`
        width: fit-content;
    `};
`,b=Object(h.e)(m.a)`
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    display: block;
    letter-spacing: 0.025em;
    width: 237px;
    height: 60px;
    margin: 26px auto 0 auto;

    ${e=>e.theme.media.greaterThan("768px")`
        width: 400px;
    `};
`,w=h.e.div`
    margin-top: 55px;
    position: relative;

    ${e=>e.theme.media.greaterThan("768px")`
        display: none;
    `}
`,y=h.e.div`
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

    ${e=>e.theme.media.greaterThan("768px")`
        display: none;
    `}
`,v=h.e.div`
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

    ${e=>e.theme.media.greaterThan("768px")`
        display: none;
    `}
`,E=h.e.div`
    padding-bottom: 85px;
    background: #fff;

    ${e=>e.theme.media.greaterThan("768px")`
        display: none;
    `}
`,k=h.e.div`
    padding: 19px 29px 14px;
    border-bottom: 1px solid #eeeeee;

    ${e=>e.theme.media.greaterThan("768px")`
        display: none;
    `}
`,j=h.e.div`
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    padding: 5px;

    ${e=>e.theme.media.greaterThan("768px")`
        display: none;
    `}
`;var T=({options:e,selected:t,onChange:n})=>{const{t:a}=Object(r.a)(["documents"]),[o,l]=i.a.useState(!1),s=e=>e.currentTarget===e.target&&l((e=>!e));return i.a.createElement(w,null,i.a.createElement(y,{onClick:s},i.a.createElement("span",null,t)," ",i.a.createElement("svg",{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M1 1L7 7L13 1",stroke:"#242E35",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o&&i.a.createElement(v,{onClick:s},i.a.createElement(E,null,i.a.createElement(k,null,e.map(((a,o)=>i.a.createElement(j,{key:a.label,onClick:e=>{e.stopPropagation(),n(a),l((e=>!e))},style:o===e.length-1?{border:0}:{}},i.a.createElement("span",null,a.label),t===a.value&&i.a.createElement("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M1 5.23529L4.80952 9L11 1",stroke:"#242E35",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))))))))},O=n(2),$=n(699),M=n(686),S=n(25),z=n(10);const P=Object(M.a)({locale:S.f[z.a.language]}," MMMM yyyy");var A=({initPageSize:e})=>{const{t}=Object(r.a)(["documents","overview"]),n=Object(d.d)(),a=!Object(d.d)(1024),o=Object(d.f)(),l=Object(O.f)(o.documents.accountStatementsEntity).isPending(),s=Object(O.f)(o.documents.accountStatementsEntity).isDone();i.a.useEffect((()=>{o.auth.isAuthenticated&&o.user.oktaUserInfo&&o.user.oktaUserInfo.sub&&(l||s||(o.documents.fetchAccountStatements({year:"",pageSize:e}),o.documents.fetchAccountStatementMonths()))}),[o.auth.isAuthenticated,o.user.oktaUserInfo.sub]);const{accountStatementsMonths:c,accountStatements:p}=o.documents,m=o.documents.accountStatements.documents&&o.documents.accountStatements.documents.map((({id:e,name:t,date:n,pending:a})=>({id:e,name:P(new Date(n)),date:n,pending:a})))||[],{nextPageToken:h}=o.documents.accountStatements,x=[{label:t("overview:all"),value:""},...c],g=p.year,u=()=>{h&&o.documents.fetchAccountStatements({pageToken:h,year:g,pageSize:e},!0)},f=x.find((({value:e})=>e===g))||{},[b,w]=Object($.a)({});return i.a.useEffect((()=>{w.intersectionRatio&&h&&!n&&u()}),[w.intersectionRatio]),{isMobile:n,store:o,isPending:l,isDone:s,accountStatementsMonths:c,accountStatements:p,documentList:m,nextPageToken:h,options:x,currentYear:g,onFilterHandler:t=>{o.documents.fetchAccountStatements({pageToken:0,year:t.value,pageSize:e})},onFetchNextPage:u,currentOption:f,setNode:b,entry:w,isDesktop:a}};const L=h.e.div`
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 12px;
    font-family: VinovestMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.005em;

    ${e=>e.theme.media.greaterThan("768px")`
        padding-bottom: 17px;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        flex-wrap: no-wrap;
        flex-direction: row;
    `}
`,C=Object(h.e)(L)`
    padding: 14px 0 11px;
    flex-direction: row;

    ${e=>e.theme.media.greaterThan("768px")`
        padding: 22px 0 24px;
        flex-direction: row;
    `}
`,F=h.e.div`
    display: flex;
    flex-direction: row:
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.025em;
    text-transform: uppercase;

    ${e=>e.theme.media.greaterThan("768px")`
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
    `}
`,D=h.e.div`
    text-align: left;
    color: ${e=>e.theme.colors.burntOrange};
    text-decoration: none;
    flex-grow: 1;

    span {
        width: fit-content;

        &:hover {
            cursor: pointer;
        }
    }
`,I=h.e.div`
    width: 106px;
    text-align: right;
    white-space: nowrap;
`,R=h.e.button`
    margin: 48px auto 0;
    width: 229px;
    height: 44px;
    border: 2px solid #caccce;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #242e35;
    background: transparent;
    outline: 0;
    transition: 0.5s;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }

    ${e=>e.theme.media.greaterThan("768px")`
        height: 60px;           
    `};
`,V=h.e.div`
    margin: 41px 10px 0;

    ${e=>e.theme.media.greaterThan("768px")`        
        margin: 58px 10px 0;        
    `};
`,_=h.e.div`
    max-width: 1240px;
    margin: 0 auto;
    background-color: ${({theme:e})=>e.colors.white};
    color: ${({theme:e})=>e.colors.mainAccentBlue};
    padding: 33px 19px 41px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    ${e=>e.theme.media.greaterThan("768px")`
        padding: 46px 60px 46px;               
    `};
`,N=h.e.h1`
    font-family: RoslindaleDisplayCondensed;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 41px;
    margin: 0;
    padding: 0;

    ${e=>e.theme.media.greaterThan("768px")`
        font-size: 45px;
        line-height: 45px;
        margin-bottom: 15px;
        align-self: flex-start;
    `};
`,H=h.e.div`
    width: 100%;
    margin-top: 35px;
    ${e=>e.theme.media.greaterThan("768px")`
        display: flex;
        flex-direction: row-reverse;
        /*justify-content: space-between; Add this back in when renabling link*/
   `}
`,B=(h.e.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${e=>e.theme.media.greaterThan("768px")`
        justify-content: flex-start;
    `}
`,Object(h.e)(l.h)`
    margin: 0 15.5px;

    ${e=>e.theme.media.greaterThan("768px")`
        margin: 0;
        margin-right: 62px;
    `}
`,h.e.div`
    margin-top: 55px;
    width: 100%;
    flex-shrink: 0;
    font-family: VinovestMono;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.025em;

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
            min-width: 132px;
            width: 132px;
        `}
    }

    li {
        border: 1px solid #eeeeee;
        border-top: 0;
        border-bottom: 1px solid #eeeeee;
        height: 40px;
        padding: 0 16px;
    }

    ${e=>e.theme.media.greaterThan("768px")`
        margin: 0;
        width: 132px;
    `}
`),U=h.e.div`
    margin-top: 27px;
    flex-grow: 1;
    width: 100%;
    ${({minHeight:e})=>e?`min-height: ${e};`:""}

    ${e=>e.theme.media.greaterThan("768px")`
    margin-top:  51px;`}
`,J=[...new Array(10)].map(((e,t)=>t)),W=({isMobile:e})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{width:"140px",height:e?"17px":"18px"}),i.a.createElement(c.a,{width:"40px",height:e?"17px":"18px"})),Y=Object(o.a)((()=>{const{t:e}=Object(r.a)(["documents"]),{isMobile:t,store:n,isPending:a,isDone:o,accountStatementsMonths:s,documentList:d,nextPageToken:m,options:h,currentYear:x,onFilterHandler:u,onFetchNextPage:f,currentOption:b,setNode:w,isDesktop:y}=A({initPageSize:10});return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null,o?e("documents"):i.a.createElement(c.a,{style:{height:"39px",width:"187px",display:"inline-block",padding:"10px 0 9px"}})),i.a.createElement(H,null,!!s.length&&!t&&(o?i.a.createElement(B,null,i.a.createElement(l.d,{options:h,selectedInParent:x,selectedLabel:b.label,onChange:u})):i.a.createElement(c.a,{style:{height:"39px",width:"238px",display:"inline-block"}})),!!s.length&&t&&i.a.createElement(T,{options:h,selected:x||b.label,onChange:u})),i.a.createElement(U,{minHeight:!t&&m?"80vh":""},o?i.a.createElement(L,null,i.a.createElement(F,null,e("list_title")),i.a.createElement(F,null,e("issued"))):i.a.createElement(L,null,i.a.createElement(c.a,{style:{height:"36px",width:"144px",display:"inline-block",marginRight:"20px"}}),i.a.createElement(c.a,{style:{height:"36px",width:"144px",display:"inline-block"}})),d.length||a?i.a.createElement(i.a.Fragment,null,d.map((({id:a,name:o,date:r,pending:l})=>i.a.createElement(C,{key:a},l?i.a.createElement(W,{isMobile:t}):i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{onClick:()=>{n.documents.getDocumentItem(a,o,y)}},i.a.createElement("span",null,o," ",e("statement"))),i.a.createElement(I,null,Object(p.f)(r)))))),a&&J.map((e=>i.a.createElement(C,{key:e},i.a.createElement(W,{isMobile:t}))))):i.a.createElement(g,null),m&&t&&i.a.createElement(R,{type:"button",onClick:f},e("loadmore"))),i.a.createElement("div",{ref:w}))})),q=e=>[{to:"/documents/account_statements",label:e("documents"),labelMobile:e("mobile_statements"),exact:!0,isActive:(e,t)=>"/documents/account_statements"===t.pathname,search:""}],G=Object(o.a)((()=>{const{t:e}=Object(r.a)(["documents","common"]);return i.a.createElement(l.e,{in:!0},i.a.createElement(V,null,i.a.createElement(_,null,i.a.createElement(Y,{documentNav:q(e)}))))}));t.default=G},699:function(e,t,n){"use strict";var a=n(0);t.a=({root:e=null,rootMargin:t,threshold:n=0})=>{const[i,o]=Object(a.useState)({}),r=Object(a.useRef)(null),l=Object(a.useRef)(new window.IntersectionObserver((([e])=>o(e)),{root:e,rootMargin:t,threshold:n}));return Object(a.useEffect)((()=>{const{current:e}=l;return e.disconnect(),r.current&&e.observe(r.current),()=>e.disconnect()}),[r.current]),[r,i]}}}]);
//# sourceMappingURL=42.0991a325.chunk.js.map
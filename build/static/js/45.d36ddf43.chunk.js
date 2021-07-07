(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[45],{1333:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return K}));var a=r(0),n=r.n(a),l=r(5),c=r.n(l),i=r(1278),o=r(8),m=r(1);var s=m.e.div`
    background: ${e=>e.theme.colors.black};
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .date {
        color: #bdbdbd;
        font-size: ${e=>e.theme.typography.size.xs}px;
    }

    .price {
        color: ${e=>e.theme.colors.white};
        font-size: ${e=>e.theme.typography.size.xs}px;
    }
`;var d=m.e.div`
    width: 13px;
    height: 13px;
    border-radius: 100%;
    background-color: ${e=>e.color};
    margin-right: 18px;
`;const h=m.e.strong`
    font-weight: 500;
    font-size: ${e=>e.theme.typography.size.xl}px;
    letter-spacing: 0.005em;
`;var p={Meta:m.e.small`
    font-weight: 500;
    font-size: ${e=>e.theme.typography.size.sm}px;
    letter-spacing: 0.005em;
    color: #bdbdbd;
    margin: 0 4px;
`,Strong:h};var u=m.e.hr`
    height: 2px;
    background-color: #f1f1f1;
    width: 100%;
    margin-top: 12px;
    margin-bottom: 32px;
    padding: 0;
    border: none;
`;var g=m.e.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;const f=m.e.div`
    width: 90%;
    margin: auto;
`,y=m.e.div`
    display: flex;
    justify-content: space-between;
    padding-right: 45px;
`,v=m.e.div`
    border: 1px solid #f1f1f1;
    padding: 28px 0 28px 16px;
`;var E=r(83),b=r.n(E),x=r(220),k=r.n(x),w=r(670);const D="MMM YYYY",B=e=>b()(new Date(e)).format(D),_=[{date:B("2017-09-03"),currentWine:4e3,benchmark:3e3},{date:B("2018-09-03"),currentWine:4020,benchmark:1e3},{date:B("2019-09-03"),currentWine:4500,benchmark:3800},{date:B("2016-09-03"),currentWine:2e3,benchmark:1500},{date:B("2015-09-03"),currentWine:4200,benchmark:1e3},{date:B("2014-09-03"),currentWine:3e3,benchmark:2e3}],z=({active:e,payload:t})=>{const{t:r}=Object(w.a)(["chart"]),a=k()(t,["0","payload"]),l=k()(t,["0","dataKey"]);if(e&&a){const{date:e}=a,t=a[l];return n.a.createElement(s,null,n.a.createElement("span",{className:"date"},e),n.a.createElement("p",{className:"price"},"Average price:",n.a.createElement("strong",null,"$",t.toLocaleString())))}return null},S=e=>{const{x:t,y:r,payload:a}=e,l=b()(a.value,D);return n.a.createElement("g",{transform:`translate(${t},${r})`,height:150},n.a.createElement("text",{x:"0",y:"0",height:120,fill:"#828282",textAnchor:"middle"},n.a.createElement("tspan",{x:"0",dy:"1.2em",fontSize:12},l.format("DD MMM")),n.a.createElement("tspan",{x:"0",dy:"1.2em",fontSize:10},l.format("YYYY"))))},$=e=>{const{x:t,y:r,payload:a}=e;return n.a.createElement("g",{transform:`translate(${t},${r})`,height:150},n.a.createElement("text",{x:"-15",y:"0",height:120,fill:"#828282",fontWeight:500,fontSize:12,textAnchor:"middle"},a.value.toLocaleString("en-US",{style:"currency",currency:"USD",maximumSignificantDigits:1})))},M=({showBenchmark:e,data:t=_})=>{const r=Object(o.h)("colors");return n.a.createElement(i.d,{width:"100%",height:300},n.a.createElement(i.c,{width:"100%",height:300,data:t},n.a.createElement(i.a,{stroke:"#BDBDBD",horizontal:!1,strokeDasharray:"0"}),n.a.createElement(i.f,{stroke:"#F1F1F1",dataKey:"date",tick:S,tickFormatter:e=>b()(e,D).format("DD ".concat(D))}),n.a.createElement(i.g,{stroke:"#F1F1F1",tick:$}),n.a.createElement(i.e,{content:n.a.createElement(z,null)}),n.a.createElement(i.b,{type:"monotone",dataKey:"currentWine",dot:!1,stroke:r.green,activeDot:{stroke:r.black,fill:r.green,strokeWidth:4,r:10}}),e&&n.a.createElement(i.b,{type:"monotone",dataKey:"benchmark",activeDot:!1,dot:!1,stroke:"#BDBDBD"})))};M.defaultProps={data:_,showBenchmark:!0},M.propTypes={data:c.a.arrayOf(c.a.object),showBenchmark:c.a.bool};var j=M;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var W=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 8C1 8 5 1 11 1C17 1 21 8 21 8C21 8 17 15 11 15C5 15 1 8 1 8Z",stroke:"#242424"}),O=n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 5C12.657 5 14 6.343 14 8C14 9.657 12.657 11 11 11C9.343 11 8 9.657 8 8C8 6.343 9.343 5 11 5V5Z",stroke:"#242424"});const R=({svgRef:e,title:t,...r})=>n.a.createElement("svg",C({width:22,height:16,viewBox:"0 0 22 16",fill:"none",ref:e},r),t?n.a.createElement("title",null,t):null,W,O),Y=n.a.forwardRef(((e,t)=>n.a.createElement(R,C({svgRef:t},e))));r.p;var F=r(12);var A=({benchmark:e,current:t})=>{const{t:r}=Object(w.a)(["chart"]),n=null!==e&&void 0!==e?e:r("price_history.benchmark_wine_name"),l=null!==t&&void 0!==t?t:r("price_history.current_wine_name"),[c,i]=Object(o.i)(!0);return a.createElement(f,null,a.createElement("h1",null,r("price_history.average_price")),a.createElement(v,null,a.createElement(j,{showBenchmark:c,width:"100%",height:500}),a.createElement("div",{style:{paddingLeft:65}},a.createElement(u,null),a.createElement(y,null,a.createElement("div",null,a.createElement(g,null,a.createElement(d,{color:"#27AE60"}),a.createElement(p.Strong,null,l),a.createElement(p.Meta,null,r("price_history.price_history"),"e")),a.createElement(g,null,a.createElement(d,{color:"#BDBDBD"}),a.createElement(p.Strong,null,n),a.createElement(p.Meta,null,r("price_history.current_wine")))),a.createElement(F.i,{style:{alignSelf:"flex-end"},uppercase:!0,onClick:i},a.createElement(Y,{style:{marginRight:10}})," ",r("price_history.hide_benchmark"),"k")))))};var K=()=>n.a.createElement("div",null,n.a.createElement(A,null))}}]);
//# sourceMappingURL=45.d36ddf43.chunk.js.map
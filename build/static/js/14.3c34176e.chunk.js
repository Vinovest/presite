(this["webpackJsonpvinovest-web-client"]=this["webpackJsonpvinovest-web-client"]||[]).push([[14],{1048:function(e,t,n){e.exports=n.p+"static/media/percentsIcon.1471f071.svg"},1049:function(e,t,n){e.exports=n.p+"static/media/bottleIcon.e7a0002c.svg"},1050:function(e,t,n){e.exports=n.p+"static/media/insuranceIcon.5c2fa440.svg"},1051:function(e,t,n){e.exports=n.p+"static/media/graph.20c8a656.svg"},1052:function(e,t,n){e.exports=n.p+"static/media/winePerforms.ef6db939.jpeg"},1053:function(e,t,n){e.exports=n.p+"static/media/diamond.2e09fb5d.svg"},1054:function(e,t,n){e.exports=n.p+"static/media/target.3b9dfe0c.svg"},1055:function(e,t,n){e.exports=n.p+"static/media/flower.c956c546.svg"},1056:function(e,t,n){e.exports=n.p+"static/media/HandShakeIcon.66f226da.svg"},1057:function(e,t,n){e.exports=n.p+"static/media/WorldIcon.a3f67179.svg"},1058:function(e,t,n){e.exports=n.p+"static/media/PartyIcon.a9c173b8.svg"},1059:function(e,t,n){e.exports=n.p+"static/media/whineComposition.85a69cb6.jpg"},1342:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(670),r=n(10),l=n(719),c=n(1048),d=n.n(c),s=n(1049),p=n.n(s),m=n(1050),g=n.n(m);const x=[{header:r.a.t("why-wine:why_wine.quyality.header_1"),description:r.a.t("why-wine:why_wine.quyality.description_1"),svg:d.a},{header:r.a.t("why-wine:why_wine.quyality.header_2"),description:r.a.t("why-wine:why_wine.quyality.description_2"),svg:p.a},{header:r.a.t("why-wine:why_wine.quyality.header_3"),description:r.a.t("why-wine:why_wine.quyality.description_3"),svg:g.a}];var h=()=>{const{t:e}=Object(o.a)("why-wine");return i.a.createElement(l.d,{valueProps:x,title:e("why_wine.quyality.title"),description:e("why_wine.quyality.description")})},f=n(1),u=n(214),w=n(688),y=n(217),b=n(1051),v=n.n(b);const E=f.e.div`
    &.runAnimation {
        animation: bottomFade 2s ease-in-out;
    }

    @keyframes bottomFade {
        0% {
            transform: translateY(20%);
        }

        100% {
            transform: translateY(0%);
        }
    }

    @media screen and (max-width: 991px) {
        margin-top: 168px;
    }
`,_=f.e.div`
    position: relative;

    .imagesContainer {
        width: 100%;
    }

    img {
        width: 100%;
        display: block;
    }

    .wineLineBig {
        padding-top: 37px;
    }
`,k=f.e.div`
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: 0;
    left: 4.09%;
    font-family: VinovestMono, sans-serif;
    color: #3c400c;
    font-size: 18px;
    line-height: 178%;

    @media screen and (max-width: 767px) {
        display: none;
    }
`,N=f.e.div`
    display: flex;
    justify-content: space-around;
    margin-top: -1px;
    width: 100%;
    font-family: VinovestMono, sans-serif;
    color: #242e35;
    font-size: 20px;
    line-height: 160%;
    font-weight: 500;
    color: #e6c9c9;
    background-color: #3c400c;
    position: relative;
    padding: 30px 0 30px 25px;

    @media screen and (max-width: 767px) {
        div {
            display: none;
        }
    }
`,$=f.e.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 78.125%;
    transform: translate(-50%, 0);
    align-items: center;
    display: flex;
    flex-direction: column;

    .box {
        width: 178px;
        margin-top: -72px;
        position: absolute;
        display: flex;
        border-radius: 8px;
        box-shadow: 0 8px 24px 0 rgb(36 46 53 / 16%);

        &__left {
            display: flex;
            padding: 18px 6px;
            justify-content: center;
            align-items: center;
            background-color: #3c400c;
            font-family: VinovestMono, sans-serif;
            color: #fff;
            font-size: 18px;
            line-height: 178%;
            writing-mode: vertical-lr;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        &__right {
            display: flex;
            padding: 16px;
            flex-direction: column;
            justify-content: center;

            div {
                font-family: VinovestMono, sans-serif;
                color: #000;
                font-size: 13px;
                line-height: 185%;
                text-transform: uppercase;
            }
        }

        &:after {
            content: " ";
            display: block;
            position: absolute;
            left: 50%;
            bottom: 0;
            border-top: 11px solid #fff;
            border-right: 11px solid transparent;
            border-left: 11px solid transparent;
            transform: translate(-50%, 100%);
        }

        &.runAnimation {
            animation: boxAppear 2s linear;
        }

        @keyframes boxAppear {
            0% {
                margin-top: -52px;
                opacity: 0;
            }
            74% {
                margin-top: -52px;
                opacity: 0;
            }
            85% {
                margin-top: -52px;
                opacity: 1;
            }
            100% {
                margin-top: -72px;
            }
        }

        @media screen and (max-width: 430px) {
            right: -35px;

            &:after {
                left: 80%;
            }
        }
    }

    .line {
        top: 37px;
        bottom: 0;
        position: absolute;
        background-color: #3c400c;
        width: 2px;

        &:before {
            content: " ";
            display: block;
            position: absolute;
            left: 50%;
            top: 0;
            right: 0;
            bottom: auto;
            width: 17px;
            height: 17px;
            border: 2px solid #3c400c;
            border-radius: 50%;
            background-color: #fff;
            transform: translate(-50%, -50%);
        }

        &.runAnimation {
            animation: lineGrowth 1s ease-in-out;
        }

        @keyframes lineGrowth {
            0% {
                top: 100%;
            }
            100% {
                top: 37px;
            }
        }
    }
`;var j=()=>{const e=i.a.useRef(),{hasRevealed:t}=Object(y.a)({ref:e}),n=t?"runAnimation":"",{t:a}=Object(o.a)("why-wine");return i.a.createElement(E,{ref:e,className:n},i.a.createElement(_,null,i.a.createElement("div",{className:"imagesContainer"},i.a.createElement("img",{className:"wineLineBig",src:v.a,alt:"wine line"})),i.a.createElement(k,null,i.a.createElement("div",null,"2000%"),i.a.createElement("div",null,"1500%"),i.a.createElement("div",null,"1000%"),i.a.createElement("div",null,"500%")),i.a.createElement($,{className:n},i.a.createElement("div",{className:`box ${n}`},i.a.createElement("div",{className:"box__left"},"2012"),i.a.createElement("div",{className:"box__right"},i.a.createElement("div",null," ",a("why_wine.steady_yields.label_wine"),": 2020%"),i.a.createElement("div",null,a("why_wine.steady_yields.label_sp500"),": 490%"))),i.a.createElement("div",{className:`line ${n}`})))," ",i.a.createElement(N,null,["88","90","92","94","96","98","00","02","04","06","08","10","12","14","16","18"].map((e=>i.a.createElement("div",{key:e},e)))))};const A=f.e.div`
    width: 100%;
    padding-top: 139px;
    color: #242e35;
    text-align: center;

    ${u.g},
    ${u.h},
    ${u.a} {
        margin-left: auto;
        margin-right: auto;
        padding: 0 20px 0;
    }

    ${u.g} {
        margin-bottom: 24px;
    }

    ${u.h} {
        &.runAnimation {
            animation: fadeFromBottom 0.5s ease-out;
        }
    }

    ${u.a} {
        margin: 40px auto 40px;

        &.runAnimation {
            animation: fadeFromBottom 0.8s ease-out;
        }

        @media screen and (max-width: 479px) {
            display: none;
        }
    }
`,I=f.e.div`
    margin: 0 auto;
    width: fit-content;
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 56px;
    grid-row-gap: 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    padding: 0 20px 0;

    @media screen and (max-width: 479px) {
        display: flex;
        width: 100%;
        margin-top: 64px;
        justify-content: space-between;
        justify-items: start;
        flex-wrap: wrap;
        grid-column-gap: 0px;
        grid-template-columns: 1fr auto;
    }

    .option {
        display: flex;
        padding: 24px;
        align-items: center;

        &__text {
            display: block;
            flex-grow: 1;
            margin-right: 37px;
            font-family: Roslindaledisplaycondensed, sans-serif;
            font-size: 32px;
            line-height: 150%;
            font-weight: 500;

            @media screen and (max-width: 767px) {
                margin-right: 0;
                font-size: 24px;
                line-height: 167%;
            }
        }

        &__bigCircle {
            display: flex;
            width: 58px;
            height: 58px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color: #e0e5cd;
            font-size: 18px;
            line-height: 178%;

            @media screen and (max-width: 767px) {
                width: 40px;
                height: 40px;
                margin-left: 13px;
                font-size: 12px;
                line-height: 267%;
            }
        }

        &:before {
            content: " ";
            display: block;
            width: 24px;
            height: 24px;
            margin-right: 16px;
            border-radius: 50%;
            background-color: #3c400c;

            @media screen and (max-width: 767px) {
                width: 16px;
                height: 16px;
                flex: 0 0 auto;
            }
        }
        &.runAnimation {
            animation: fadeFromBottom 0.6s linear;
        }

        &--selected {
            &.runAnimation {
                animation: ${w.a} 1s linear;
            }

            border-radius: 110px;
            box-shadow: 0 8px 24px 0 rgb(36 46 53 / 16%);

            &:before {
                background-color: #e6c9c9;
            }
        }

        @keyframes fadeFromBottom {
            0% {
                opacity: 0;
                transform: translateY(50%);
            }

            100% {
                opacity: 1;
                transform: translateY(0%);
            }
        }
    }
`;var O=()=>{const e=i.a.useRef(),{hasRevealed:t}=Object(y.a)({ref:e}),n=t?"runAnimation":"",{t:a}=Object(o.a)("why-wine");return i.a.createElement(A,null,i.a.createElement("div",{ref:e},i.a.createElement(u.g,null,a("why_wine.steady_yields.top_description")),i.a.createElement(u.h,{className:n},a("why_wine.steady_yields.title")),i.a.createElement(u.a,{className:n},a("why_wine.steady_yields.description")),i.a.createElement(I,null,i.a.createElement("div",{className:`option option--selected ${n}`},i.a.createElement("span",{className:"option__text"},a("why_wine.steady_yields.graph_text")),i.a.createElement("div",{className:"option__bigCircle"},"13%")),i.a.createElement("div",{className:`option ${n}`},i.a.createElement("span",{className:"option__text"},a("why_wine.steady_yields.label_sp500"))))),i.a.createElement(j,null))},z=n(1052),R=n.n(z),B=n(1053),S=n.n(B),q=n(1054),P=n.n(q),C=n(1055),F=n.n(C);const T=f.e.div`
    background-color: #3c400c;
`,J=f.e.h3`
    font-family: Roslindaledisplaycondensed, sans-serif;
    font-size: 34px;
    font-weight: 500;
    margin: 0;
    padding: 20px 42px;
    padding-bottom: 10px;
    color: #e6c9c9;
    text-align: center;

    .h3_highlight {
        color: #e0e5cd;
        text-decoration: underline;
    }

    @media screen and (max-width: 767px) {
        font-size: 24px;
        line-height: 167%;
    }
`,Y=f.e.div`
    display: flex;
    margin-top: 76px;
    align-items: center;
    justify-content: center;
    color: #e6c9c9;
    padding-right: 8.88%;

    .winePerformsJpg {
        flex-shrink: 1;
        max-width: 839px;
        width: 64%;
        margin-left: -12.18%;
        margin-right: 3.57%;
    }

    .content {
        padding-bottom: 40px;
        max-width: 585px;
        width: 48%;

        ${u.g} {
            margin-bottom: 24px;

            &.runAnimation {
                animation: ${w.a} 0.6s linear;
            }
        }

        ${u.h} {
            color: #e6c9c9;
            text-align: left;
            padding-left: 42px;
            padding-right: 42px;

            &.runAnimation {
                animation: ${w.a} 0.8s linear;
            }

            @media screen and (max-width: 991px) {
                text-align: center;
            }
            @media screen and (min-width: 991px) {
                padding-left: 0;
            }
        }

        ${u.a} {
            &.runAnimation {
                animation: ${w.a} 1s linear;
            }

            margin-top: 24px;
            margin-bottom: 40px;
            padding-left: 42px;
            padding-right: 42px;

            @media screen and (min-width: 991px) {
                padding-left: 0;
            }
        }
    }

    @media screen and (max-width: 991px) {
        margin-top: 144px;
        padding-right: 0;
        flex-direction: column-reverse;

        ${u.g},
        ${u.h},
        ${u.a} {
            width: 100%;
            text-align: center;
            max-width: 100%;
        }
        .winePerformsJpg,
        .content {
            width: 100%;
            max-width: 100%;
        }
        .winePerformsJpg {
            margin-right: 0;
        }
    }
`,M=f.e.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 585px;
    margin: 0 auto;
    width: 100%;
    padding-bottom: 10px;
    font-family: Roslindaledisplaycondensed, sans-serif;
    font-size: 32px;
    line-height: 150%;
    font-weight: 500;
    justify-content: space-between;

    &.runAnimation {
        animation: ${w.a} 1s linear;
    }

    .factor {
        margin-top: 21px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        height: 215px;

        div {
            margin-top: 20px;
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: space-around;

        .factor--grow {
            order: -1;
            width: 100%;
        }
    }
`;var V=()=>{const e=i.a.useRef(),{hasRevealed:t}=Object(y.a)({ref:e}),n=t?"runAnimation":"",{t:a}=Object(o.a)("why-wine");return i.a.createElement(T,{ref:e},i.a.createElement(J,null,a("why_wine.outpreform.title_1"),i.a.createElement("span",{className:"h3_highlight"}," ",a("why_wine.outpreform.title_2"))," ",a("why_wine.outpreform.title_3")," ",i.a.createElement("span",{className:"h3_highlight"},a("why_wine.outpreform.title_4"))),i.a.createElement(Y,null,i.a.createElement("img",{className:"winePerformsJpg",src:R.a,alt:"winePerformsJpg"}),i.a.createElement("div",{className:"content"},i.a.createElement(u.g,{className:n}," ",a("why_wine.outpreform.top_description")," "),i.a.createElement(u.h,{className:n}," ",a("why_wine.outpreform.title")," "),i.a.createElement(u.a,{className:n},a("why_wine.outpreform.description")),i.a.createElement(M,{className:n},i.a.createElement("div",{className:"factor "},i.a.createElement("img",{className:"factorIcon",src:S.a,alt:"factor icon"}),i.a.createElement("div",null," ",a("why_wine.outpreform.scarcity")," ")),i.a.createElement("div",{className:"factor"},i.a.createElement("img",{className:"factorIcon",src:F.a,alt:"factor icon"}),i.a.createElement("div",null," ",a("why_wine.outpreform.aging")," ")),i.a.createElement("div",{className:"factor factor--grow"},i.a.createElement("img",{className:"factorIcon",src:P.a,alt:"factor icon"})," ",i.a.createElement("div",null," ",a("why_wine.outpreform.brand")," "))))))},L=n(1056),W=n.n(L),H=n(1057),X=n.n(H),G=n(1058),D=n.n(G);const K=f.e.div`
    padding-right: 8.888%;
    padding-left: 8.888%;
    padding-bottom: 120px;

    @media screen and (max-width: 991px) {
        padding-right: 6.666%;
        padding-left: 6.666%;
    }
`,Q=f.e.h3`
    margin: 0;
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: Roslindaledisplaycondensed, sans-serif;
    font-size: 32px;
    line-height: 150%;
    font-weight: 500;
`,U=f.e.div`
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 160%;
    font-family: Favoritstd, sans-serif;
    font-weight: 500;
`,Z=f.e.div`
    width: 100%;
    margin: 0 auto;
    padding-top: 160px;
    padding-bottom: 100px;
    color: #242e35;
    display: none;

    ${u.g} {
        margin-left: auto;
        margin-right: auto;
    }

    .mainTitle {
        text-align: center;
        &.runAnimation {
            animation: ${w.a} 1.5s ease-out;
        }
    }

    .box {
        max-width: 100%;
        margin-left: 0;
        padding-top: 0;
        padding-bottom: 40px;
        background-color: #e0e5cd;
        &.runAnimation {
            animation: ${w.a} 1.5s ease-out;
        }

        ${Q}, ${U} {
            padding-left: 24px;
            padding-right: 24px;
        }

        ${U} {
            font-size: 18px;
        }
    }
    .boxImg {
        position: relative;
        left: 50%;
        top: 0;
        margin-bottom: 40px;
        transform: translateX(-50%);
        width: 105%;
        max-width: 360px;
    }

    .yellowBox {
        margin-top: 163px;
        background-color: #e0e5cd;
        color: #513011;

        .boxImg {
            margin-top: -99px;
        }
    }
    .blueBox {
        margin-top: 216px;
        background-color: #c5d5e4;
        color: #4f1c28;

        .boxImg {
            margin-top: -153px;
        }
    }
    .redBox {
        margin-top: 264px;
        background-color: #e6c9c9;
        color: #3c400c;

        .boxImg {
            margin-top: -200px;
        }
    }

    @media screen and (max-width: 991px) {
        display: block;
    }
`,ee=f.e.div`
    max-width: 1184px;
    width: 100%;
    margin: 0 auto;
    padding-top: 312px;
    padding-bottom: 100px;
    color: #242e35;

    display: block;

    @media screen and (max-width: 991px) {
        display: none;
    }

    .top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &__left {
            display: flex;
            flex-direction: column;
            width: 65%;
        }

        &__right {
            width: 31%;
        }
    }
    .mainTitle {
        margin: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        max-width: 473px;
        min-height: 535px;

        &.runAnimation {
            animation: ${w.a} 0.8s ease-out;
        }
    }
    .yellowBox {
        position: relative;
        margin: 0;
        background: #e0e5cd;
        padding: 160px 44px 80px;
        background-color: #e0e5cd;
        color: #513011;

        &.runAnimation {
            animation: ${w.a} 1.2s ease-out;
        }

        .handShakeIconSvg {
            width: 110%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .blueBox {
        position: relative;
        padding: 80px 0;
        padding-right: 42px;
        padding-left: 39.69072164948454%;
        background-color: #c5d5e4;
        color: #4f1c28;

        &.runAnimation {
            animation: ${w.a} 1.6s ease-out;
        }

        .worldIconSvg {
            width: 46.8%;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateX(-26%);
        }
    }
    .redBox {
        width: 56.29%;
        padding: 80px 0;
        padding-right: 42px;
        background-color: #e6c9c9;
        margin-top: 128px;
        margin-left: 34.45%;
        color: #3c400c;
        padding-left: 16%;
        position: relative;

        &.runAnimation {
            animation: ${w.a} 2s ease-out;
        }

        .partyIconSvg {
            width: 46.8%;
            position: absolute;
            top: 10px;
            left: 0;
            transform: translateX(-48%);
        }
    }

    @media screen and (max-width: 991px) {
        margin-top: 160px;
        margin-bottom: 478px;
    }
`,te=Object(f.e)(u.h)`
    text-align: left;

    @media screen and (max-width: 991px) {
        text-align: center;
    }
`;var ne=()=>{const e=i.a.useRef(),{hasRevealed:t}=Object(y.a)({ref:e}),n=t?"runAnimation":"",{t:a}=Object(o.a)("why-wine"),r=i.a.createElement("div",{className:`mainTitle ${n}`},i.a.createElement(u.g,null,a("why_wine.network.title_1")),i.a.createElement(te,null,a("why_wine.network.description_1"))),l=i.a.createElement("div",{className:`yellowBox box ${n}`},i.a.createElement("img",{className:"handShakeIconSvg boxImg",src:W.a,alt:"hand shake icon"}),i.a.createElement(Q,null,a("why_wine.network.title_2")),i.a.createElement(U,null,a("why_wine.network.description_2"))),c=i.a.createElement("div",{className:`blueBox box ${n}`},i.a.createElement("img",{className:"worldIconSvg boxImg",src:X.a,alt:"World icon"}),i.a.createElement(Q,null,a("why_wine.network.title_3")),i.a.createElement(U,null,a("why_wine.network.description_3"))),d=i.a.createElement("div",{className:`redBox box ${n}`},i.a.createElement("img",{className:"partyIconSvg boxImg",src:D.a,alt:"Party icon"}),i.a.createElement(Q,null,a("why_wine.network.title_4")),i.a.createElement(U,null,a("why_wine.network.description_4")));return i.a.createElement(K,null,i.a.createElement("div",{ref:e},i.a.createElement(Z,null,r,l,c,d),i.a.createElement(ee,null,i.a.createElement("div",{className:"top"},i.a.createElement("div",{className:"top__left"},r,c),i.a.createElement("div",{className:"top__right"},l)),d)))},ae=n(218),ie=n(687),oe=n(1059),re=n.n(oe);const le=f.e.div`
    padding-top: 180px;
    padding-right: 8.888%;
    padding-left: 8.888%;
    background-color: #242e35;
    color: #efddc7;
    height: 1003px;
    background-image: url(${re.a});
    background-repeat: no-repeat;
    background-position: bottom left 29%;
    background-size: 90%;
    text-align: center;

    .gup {
        display: none;
    }

    ${u.b} {
        margin: 24px auto 40px;
        max-width: 650px;
        width: fit-content;

        @media screen and (max-width: 991px) {
            margin-right: 0;
            margin-left: 0;
        }
    }

    @media screen and (max-width: 991px) {
        height: 716px;
        padding-right: 6.666%;
        padding-left: 6.666%;
        padding-top: 120px;
    }

    @media screen and (max-width: 767px) {
        height: auto;
        background-size: 220%;
        background-position: bottom left 12%;

        .gup {
            display: block;
            height: 92vw;
        }
    }
`;var ce=()=>{const{t:e}=Object(o.a)("why-wine");return i.a.createElement(le,null,i.a.createElement(ie.a,{title:"Why Invest In Wine | Vinovest",description:"Find out why wine is a perfect long-term investment that consistently outperforms the stock market. Discover why Vinovest is the easiest way to invest in wine."}),i.a.createElement(u.d,null,e("why_wine.outpreform.hero_title")),i.a.createElement(u.b,null,e("why_wine.outpreform.hero_description")),i.a.createElement(ae.a,null,e("why_wine.outpreform.hero_button")),i.a.createElement("div",{className:"gup"}))};t.default=()=>i.a.createElement("div",null,i.a.createElement(ce,null),i.a.createElement(O,null),i.a.createElement(V,null),i.a.createElement(h,null),i.a.createElement(ne,null))},687:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(6);const r={title:Object(o.get)(document.querySelector("title"),"innerText"),description:Object(o.get)(document.querySelector('[name="description"]'),"content")},l=["og:description","twitter:description"].reduce(((e,t)=>({...e,[t]:d(t)})),{}),c=["og:title","twitter:title"].reduce(((e,t)=>({...e,[t]:d(t)})),{});function d(e){const t=document.querySelector(`[property="${e}"]`);if(t)return{node:t,content:Object(o.get)(t,"content"),tagSelector:e};const n=document.createElement("meta");return n.setAttribute("property",e),n.setAttribute("content",""),{createNode:n,tagSelector:e}}const s=e=>t=>{t.node?t.node.content=e||t.node.content:(document.getElementsByTagName("head")[0].appendChild(t.createNode),t.createNode.content=e)},p=()=>e=>{if(e.node)e.node.content=e.content;else try{document.head.removeChild(e.createNode)}catch(t){}};t.a=({title:e,description:t})=>(i.a.useEffect((()=>{const n=document.querySelector("title"),a=document.querySelector('[name="description"]');return n.innerHTML=e||r.title,a.content=t||r.description,Object.values(c).forEach(s(e)),Object.values(l).forEach(s(t)),()=>{n.innerHTML=r.title,a.content=r.description,Object.values(c).forEach(p()),Object.values(l).forEach(p())}}),[t,e]),null)},688:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=n(1).f`  
  0% {
    opacity: 0;
    transform: translateY(50%);
  }

  50% {
    opacity: 0;
    transform: translateY(50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`},719:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return h}));var a=n(0),i=n.n(a),o=n(1),r=n(214);n.d(t,"e",(function(){return r.h}));var l=n(688),c=n(217);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const s=({valueProps:e})=>{const t=i.a.useRef(),{hasRevealed:n}=Object(c.a)({ref:t});return i.a.createElement(x,{ref:t,isRow:!0},e.map(((e,t)=>i.a.createElement(p,d({key:e.header},e,{index:t,hasRevealed:n})))))},p=({header:e,description:t,svg:n,index:a,hasRevealed:o,imgClassName:r})=>i.a.createElement(h,{index:a+1,className:o?"runAnimations":""},i.a.createElement("img",{className:`prop-img ${r}`,src:n,alt:"prop-img"}),i.a.createElement("span",{className:"prop-header"},e),i.a.createElement("span",{className:"prop-desc"},t)),m=({valueProps:e,title:t,description:n})=>i.a.createElement(g,null,i.a.createElement(r.g,null,n),i.a.createElement(r.h,null,t),i.a.createElement(s,{valueProps:e})),g=o.e.div`
    padding-right: 8.888%;
    padding-left: 8.888%;
    color: #242e35;

    ${r.g},
    ${r.h} {
        margin-left: auto;
        margin-right: auto;
    }
    padding-top: 225px;

    @media screen and (max-width: 991px) {
        padding-top: 110px;
        text-align: center;
        padding-right: 6.666%;
        padding-left: 6.666%;
    }
`,x=o.e.div`
    text-align: center;
    border: none;
    box-shadow: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 43.74px;
    max-width: 1200px;
    width: 100%;
    flex-direction: column;

    ${e=>e.theme.media.greaterThan("991px")`
        flex-direction: row;
        align-items: stretch;
    `}
`,h=o.e.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 28.7%;
    width: 100%;
    padding: 12px;

    &.runAnimations {
        animation: ${l.a} ${({index:e})=>.5*e}s ease-out;
    }

    .prop-img {
        margin-top: 43px;
        height: 120px;
        max-width: 129px;
        width: 100%;
        margin-bottom: 23px;

        @media screen and (max-width: 767px) {
            margin-bottom: 27.8px;
        }
    }
    .prop-header {
        margin-top: 20px;
        margin-bottom: 10px;
        font-family: Roslindaledisplaycondensed, sans-serif;
        font-size: 32px;
        line-height: 150%;
        font-weight: 500;
        color: #242e35;
    }
    .prop-desc {
        font-family: ${e=>e.theme.fonts.body};
        font-size: 16px;
        line-height: 24px;
        color: #242e35;
    }

    @media screen and (max-width: 991px) {
        max-width: 330px;
        padding: 0;
        padding-bottom: 64px;
    }
`}}]);
//# sourceMappingURL=14.3c34176e.chunk.js.map
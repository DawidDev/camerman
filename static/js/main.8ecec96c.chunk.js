(this.webpackJsonpcameraman=this.webpackJsonpcameraman||[]).push([[0],{27:function(n,e,t){},36:function(n,e,t){},48:function(n,e,t){"use strict";t.r(e);var i,a,c,s,o,r,l,d,m,u,p,x,b,j,h=t(1),g=t.n(h),f=t(28),O=t.n(f),w=(t(36),t(6)),v=t(5),k=t(14),y=t(0),z=v.a.div(i||(i=Object(w.a)(["\n    width: 100%;\n    background-color: #1F1F1F;\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding: 30px;\n\n    .social-footer {\n        width: 100%;\n        text-align: center;\n\n        i {\n            font-size: 40px;\n            margin: 0 20px;\n        }\n    }\n\n    p {\n        font-size: 25px;\n    }\n"]))),N=function(){return Object(y.jsxs)(z,{children:[Object(y.jsxs)("div",{className:"social-footer",children:[Object(y.jsx)("i",{children:Object(y.jsx)(k.b,{})}),Object(y.jsx)("i",{children:Object(y.jsx)(k.a,{})}),Object(y.jsx)("i",{children:Object(y.jsx)(k.c,{})})]}),Object(y.jsx)("p",{children:"NAME SURNAME"})]})},F=t(11),P=t(17),S=v.a.ul(a||(a=Object(w.a)(["\nlist-style: none;\ndisplay: flex;\nflex-flow: row nowrap;\nalign-items: center;\ncolor: #fff;\n\nli {\n    font-size: 17px;\n    margin-left: 20px;\n}\n\nli a {\n    text-decoration: none;\n    color: #fff;\n}\n\nbutton {\n    border: none;\n    padding: 3px 7px;\n    background-color: #9C0189;\n    font-size: 17px;\n    color: #fff;\n    margin-right: 0;\n}\n\n@media (max-width: 768px) {\n    align-items: center; \n    padding: 15vh 0 15vh 5vh;\n    flex-wrap: wrap;\n    list-style: none;\n    background-color: #181818;\n    transform: ",";\n    position: fixed;\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 100vw;\n    transition: transform 0.3s ease-in-out;\n\n\n    li {\n        color: white;\n        width: 100%;\n        font-size: 40px;\n    }\n\n    button {\n        font-size: 40px;\n    }\n}\n"])),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),C=function(n){var e=n.open;return Object(y.jsxs)(S,{open:e,children:[Object(y.jsx)("li",{children:Object(y.jsx)(P.b,{to:"/",exact:!0,children:"Home"})}),Object(y.jsx)("li",{children:"O mnie"}),Object(y.jsx)("li",{children:"Jak pracuje"}),Object(y.jsx)("li",{children:"Portfolio"}),Object(y.jsx)("li",{children:Object(y.jsx)(P.b,{to:"/offer-and-price",exact:!0,children:"Oferta i cennik"})}),Object(y.jsx)("li",{children:Object(y.jsx)("button",{children:"Kontakt"})})]})},q=v.a.div(c||(c=Object(w.a)(["\n    width: 3rem;\n    height: 3rem;\n    position: fixed;\n    right: 28px;\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n    z-index: 2;\n    display: none;\n\n    @media (max-width: 768px) {\n        display: flex;\n    }\n\n    div {\n        width: 100%;\n        height: 0.25rem;\n        background-color: ",";\n        border-radius: 10px;\n        transform-origin: 1px;\n        transition: all 0.3s linear;\n\n        &:nth-child(1) {\n         transform: ",";\n        }\n\n        &:nth-child(2) {\n            transform: ",";\n        }\n    }\n"])),(function(n){return n.open?"#9C0189;":"#fff"}),(function(n){return n.open?"rotate(31deg)":"rotate(0deg)"}),(function(n){return n.open?"rotate(-31deg)":"rotate(0deg)"})),L=function(){var n=Object(h.useState)(!1),e=Object(F.a)(n,2),t=e[0],i=e[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(q,{open:t,onClick:function(){i(!t)},children:[Object(y.jsx)("div",{}),Object(y.jsx)("div",{})]}),Object(y.jsx)(C,{open:t})]})},A=v.a.nav(s||(s=Object(w.a)(["\nmargin: 0 auto;\nwidth: 100%;\nmax-width: 1600px;\nheight: 90px;\npadding: 0 20px;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\n\n.logo {\n    display: flex;\n    font-size: 25px;\n    font-weight: 900;\n    letter-spacing: 2px;\n    width: auto;\n    color: #fff;\n}\n\n"]))),I=function(){return Object(y.jsxs)(A,{children:[Object(y.jsx)("div",{className:"logo",children:"Name Surname"}),Object(y.jsx)(L,{})]})},M=v.a.div(o||(o=Object(w.a)(["\n    width: 100%;\n    position: fixed;\n    z-index: 10;\n"]))),B=function(){return Object(y.jsx)(M,{children:Object(y.jsx)(I,{})})},D=(t(27),t(8)),V=t.p+"static/media/jumbutron-1.3494098a.jpg",J=t.p+"static/media/jumbutron-2.1daf8bc6.jpg",_=v.a.div(r||(r=Object(w.a)(["\n    width: 100%;\n    height: 100vh;\n    min-height: 500px;\n    max-height: 900px;\n    background-image: ",";\n    //background-image: url(",");\n    background-position: center;\n    transition-delay: 2s;\n"])),(function(n){var e=n.typeBackground;return"url(".concat("homePage"===e?V:J,")")}),V),E=v.a.div(l||(l=Object(w.a)(["\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1600px;\n    //border: 1px solid red;\n    height: 100%;\n    padding-top: 90px;\n    color: #fff;\n    display: flex;\n    align-items: center;\n\n    .social-block {\n        width: 10%;\n        height: 100%;\n        //border: 1px solid yellow;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        padding: 30vh 0;\n        float: left;\n\n        i {\n            width: 100%;\n            text-align: center;\n            font-size: 35px;  \n        }\n    }\n\n    .header-block {\n        color: #fff;\n        //border: 1px solid red;\n        height: 100%;\n        width: 90%;\n        float: left;\n        height: auto;\n        margin-left: 20px;\n\n        h1 {\n            font-size: 70px;\n            font-weight: 600;\n            text-transform: uppercase;\n        }\n\n        h3 {\n            font-size: 40px;\n            font-weight: 600;\n        }\n    }\n\n    @media (max-width: 768px) {\n        display: flex;\n        flex-wrap: wrap-reverse;\n        align-items: flex-start;\n\n        .social-block {\n            width: auto;\n            height: auto;\n            padding: 0;\n            transform: translateY(-100%);\n            margin-left: 20px;\n\n            i {\n                width: auto;\n                margin-right: 20px;\n                font-size: 40px;\n            }\n        }\n\n        .header-block {\n            transform: translateY(60%);\n\n            h1 {\n                font-size: 50px;\n            }\n\n            h3 {\n                font-size: 30px;\n            }\n        }\n    }\n"]))),T=function(n){var e=n.type,t=Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"social-block",children:[Object(y.jsx)("i",{children:Object(y.jsx)(k.b,{})}),Object(y.jsx)("i",{children:Object(y.jsx)(k.a,{})}),Object(y.jsx)("i",{children:Object(y.jsx)(k.c,{})})]}),Object(y.jsxs)("div",{className:"header-block",children:[Object(y.jsx)("h1",{children:"Camerman Name"}),Object(y.jsx)("h3",{children:"Camerman"})]})]}),i=Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"social-block",children:[Object(y.jsx)("i",{children:Object(y.jsx)(k.b,{})}),Object(y.jsx)("i",{children:Object(y.jsx)(k.a,{})}),Object(y.jsx)("i",{children:Object(y.jsx)(k.c,{})})]}),Object(y.jsx)("div",{className:"header-block",children:Object(y.jsx)("h1",{children:"Offer and price"})})]});return Object(y.jsx)(_,{typeBackground:e,children:Object(y.jsx)(E,{children:"homePage"===e?t:i})})},R=t.p+"static/media/me-1.934babbc.jpg",K=t.p+"static/media/me-2.fa7a0df3.jpg",Y=v.a.div(d||(d=Object(w.a)(["\n    width: 100%;\n    max-width: 1400px;\n    //border: 1px solid red;\n    margin: 0 auto;\n    padding: 70px 10px 70px 10px;\n    overflow: auto;\n    color: #181818;\n\n    .block-1 {\n        width: 60%;\n        float: left;\n\n        h4 {\n            font-size: 40px;\n            margin: 20px 0;\n        }\n\n        img {\n            width: 95%;\n            max-height: 370px;\n            object-fit: cover;\n        }\n\n        .column-txt {\n            column-count: 2;\n            column-width: 250px;\n            column-gap: 30px;\n        }\n\n        button {\n            border: none;\n            padding: 3px 7px;\n            background-color: #9C0189;\n            font-size: 17px;\n            color: #fff;\n            float: right;\n            display: none;\n        }\n    }\n\n    .block-2 {\n        width: 40%;\n        float: left;\n        padding: 0 0 0 10px;\n\n        img {\n            width: 100%;\n            object-fit: cover;\n            float: right;\n            max-height: 650px;\n        }\n    }\n\n    @media (max-width: 768px) {\n        \n        .block-1 {\n            width: 100%;\n\n            img {\n                width: 100%;\n            }\n\n            .column-txt{\n                column-count: 1;\n            }\n\n            .read-more-target {\n                opacity: ",";\n                max-height: 0;\n                font-size: ",";\n                transition: .25s ease;\n            }\n\n            button {\n                display: inline-block;\n            }\n        }\n\n        .block-2 {\n            display: none;\n        }\n    }\n\n"])),(function(n){return!1===n.readMore?"0":"1"}),(function(n){return!1===n.readMore?"0":"15px"})),U=function(){var n=Object(h.useState)(!1),e=Object(F.a)(n,2),t=e[0],i=e[1];return console.log(t),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(Y,{readMore:t,children:[Object(y.jsxs)("div",{className:"block-1",children:[Object(y.jsx)("img",{src:R,alt:""}),Object(y.jsx)("h4",{children:"About me"}),Object(y.jsxs)("div",{className:"column-txt",children:[Object(y.jsxs)("p",{className:"read-more-wrap",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ullamcorper nibh. Cras posuere dignissim lorem, a lacinia quam viverra non.  ",Object(y.jsx)("span",{className:"read-more-target",children:" Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet tincidunt nibh, in euismod elit. Aliquam quis lacus fermentum, dictum massa et, pharetra lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis a velit posuere, pharetra dolor viverra, venenatis lectus. Phasellus at bibendum mi. Duis eu felis dictum, luctus magna eget, cursus magna. Nam consectetur faucibus sapien, vitae luctus dui facilisis at."})," "]}),Object(y.jsx)("button",{onClick:i.bind(undefined,!t),children:"Read more"})]})]}),Object(y.jsx)("div",{className:"block-2",children:Object(y.jsx)("img",{src:K,alt:""})})]})})},X=t.p+"static/media/background.fb9f19a0.jpg",G=v.a.div(m||(m=Object(w.a)(["\n    width: 100%;\n    min-height: 150px;\n    background-color: silver;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-image: ",';\n    background-position: center;\n    background-size: 100% auto;\n    position: relative;\n    margin-bottom: 70px;\n\n    ::before{\n        content: "";\n        position: absolute;\n        top: 0; left: 0;\n        width: 100%; height: 100%;\n        background-color: #181818;\n        opacity: ',";\n    }\n\n    .block {\n        width: 100%;\n        padding: 20px;\n        max-width: 1400px;\n        display: flex;\n        justify-content: space-around;\n        z-index: 1;\n\n        p {\n            font-size: 30px;\n            font-weight: 600;\n            color: #fff;\n            text-align: center;\n        }\n\n        button {\n            border: none;\n            padding: 3px 7px;\n            background-color: #9C0189;\n            font-size: 20px;\n            color: #fff;\n            float: right;\n            height: 40px;\n            width: 120px;\n        }\n\n        button:hover {\n            cursor: pointer;\n        }\n\n    }\n\n    @media (max-width: 768px) {\n        .block {\n            flex-wrap: wrap;\n            p {\n                font-size: 25px;\n                width: 100%;\n                margin-bottom: 15px;\n            }\n        }\n    }\n"])),(function(n){return"contact"===n.typeBackground?"url(".concat(X,")"):" "}),(function(n){return"contact"===n.typeBackground?"0.5":"1"})),H=Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"block",children:[Object(y.jsx)("p",{children:"Nagrajmy pi\u0119kne chwile z twojego \u017cycia"}),Object(y.jsx)("button",{children:"Kontakt"})]})}),W=Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"block",children:[Object(y.jsx)("p",{children:"Sprawd\u017a moj\u0105 ofert\u0119 i cennik"}),Object(y.jsx)("button",{children:"Sprawd\u017a"})]})}),Q=function(n){var e=n.type,t="contact"===e?H:W;return Object(y.jsx)(G,{typeBackground:e,children:t})},Z=v.a.div(u||(u=Object(w.a)(["\n    width: 20%;\n    min-width: 200px;\n    height: auto;\n    margin-top: 25px;\n    padding: 0 10px 5px 10px;\n    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.66);\n    transition: 0.25s;\n\n    h5 {\n        font-size: 20px;\n        font-weight: 400;\n        text-align: center;\n        padding: 10px;\n    }\n\n    p {\n        font-size: 14px;\n    }\n\n    :hover {\n        box-shadow: 0px 0px 11px 0px  #9C0189;\n    }\n\n    @media (max-width: 768px) {\n        width: 80%;\n\n        h5 {\n            font-size: 30px;\n        }\n\n        p {\n            font-size: 15px;\n            margin: 0 20px 20px 20px;\n        }\n    }\n\n"]))),$=[{title:"Uj\u0119cia z drona",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit."},{title:"Video 4k",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit."},{title:"Monta\u017c filmu",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit."},{title:"Nowoczesno\u015b\u0107",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit."}],nn=function(){var n=$.map((function(n){return Object(y.jsxs)(Z,{children:[Object(y.jsx)("h5",{children:n.title}),Object(y.jsx)("p",{children:n.txt})]},n.title)}));return Object(y.jsx)(y.Fragment,{children:n})},en=v.a.div(p||(p=Object(w.a)(["\n    width: 100%;\n    margin-bottom: 70px;\n    padding: 0 10px;\n\n    .block, .block-2 {\n        width: 100%;\n        max-width: 1400px;\n        margin: 0 auto;\n\n        h3 {\n            font-size: 40px;\n            margin-bottom: 20px;\n        }\n    }\n\n    .block-2 {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n    }\n\n\n"]))),tn=function(){return Object(y.jsxs)(en,{children:[Object(y.jsxs)("div",{className:"block",children:[Object(y.jsx)("h3",{children:"Jak pracuje"}),Object(y.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ullamcorper nibh. Cras posuere dignissim lorem, a lacinia quam viverra non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet tincidunt nibh, in euismod elit. Aliquam quis lacus fermentum, dictum massa et, pharetra lacus. "})]}),Object(y.jsx)("div",{className:"block-2",children:Object(y.jsx)(nn,{})})]})},an=v.a.div(x||(x=Object(w.a)(["\n    max-width: 1400px;\n    //border: 1px solid red;\n    margin: 0 auto;\n    padding: 0 10px 70px 10px;\n    overflow: auto;\n    color: #181818;\n\n    h3 {\n        font-size: 40px;\n    }\n\n    .row {\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n    }\n    .video {\n        max-width: 500px;\n        width: 100%;\n        min-width: 200px;\n        height: 300px;\n        background-color: silver;\n        margin: 20px;\n    }\n\n    p {\n        width: 100%;\n        text-align: center;\n    }\n\n    @media (max-width: 768px) {\n        .video {\n            height: 170px;\n            margin: 10px;\n        }\n\n        p {\n            margin-top: 15px;\n        }\n    }\n"]))),cn=function(){return Object(y.jsxs)(an,{children:[Object(y.jsx)("h3",{children:"Portfolio"}),Object(y.jsxs)("div",{className:"main-block",children:[Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"video"}),Object(y.jsx)("div",{className:"video"})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"video"}),Object(y.jsx)("div",{className:"video"})]})]}),Object(y.jsxs)("p",{children:["Je\u015bli chcesz zobaczy\u0107 wi\u0119cej moich film\xf3w odwied\u017a m\xf3j kana\u0142 na ",Object(y.jsx)("strong",{children:"YouTube"})]})]})},sn=t(54),on=t(56),rn=(t(44),t(45),t(46),t(47),t(55)),ln=t(50),dn=t(51),mn=t(52),un=t(53);rn.a.use([ln.a,dn.a,mn.a,un.a]);var pn,xn=v.a.div(b||(b=Object(w.a)(["\n    width: 100%;\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 10px 20px 10px;\n\n    h3 {\n        font-size: 40px;\n        margin-bottom: 10px;\n    }\n"]))),bn=v.a.div(j||(j=Object(w.a)(["\n    margin: 20px 20px;\n    padding: 0 10px 5px 10px;\n    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.66);\n    padding: 20px 25px;\n\n    h6 {\n        font-size: 20px;\n        margin-bottom: 10px;\n    }\n"]))),jn=[{id:1,names:"Anna i \u0141ukasz",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi."},{id:2,names:"Anna i Tomasz",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi."},{id:3,names:"Gabriela i Patryk",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi."},{id:4,names:"Iwona i Rados\u0142aw",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi."},{id:5,names:"Anita i Mi\u0142osz",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi."},{id:6,names:"Justyna i Dawid",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi."},{id:7,names:"Oliwia i Maciej",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi."},{id:8,names:"Anna i \u0141ukasz",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi."}],hn=function(){var n=jn.map((function(n){return Object(y.jsx)(sn.a,{children:Object(y.jsxs)(bn,{children:[Object(y.jsx)("h6",{children:n.names}),Object(y.jsx)("p",{children:n.txt})]})},n.id)}));return Object(y.jsxs)(xn,{children:[Object(y.jsx)("h3",{children:"Referencje"}),Object(y.jsx)(on.a,{breakpoints:{250:{slidesPerView:1},480:{slidesPerView:1},780:{slidesPerView:2},1e3:{slidesPerView:3}},pagination:{clickable:!0},scrollbar:{draggable:!0},navigation:!0,mousewheel:!0,keyboard:!0,slidesPerView:2,className:"mySwiper",children:n})]})},gn=void 0,fn=v.a.div(pn||(pn=Object(w.a)(["\n    width: 100%;\n    margin-bottom: 70px;\n    padding: 0 10px;\n\n    .block {\n        width: 100%;\n        max-width: 1200px;\n        margin: 0 auto;\n\n        h3 {\n            font-size: 40px;\n            margin-bottom: 20px;\n        }\n\n        .block-buttons {\n            button {\n                color: #1F1F1F;\n                border: 1px solid #1F1F1F;\n                background-color: transparent;\n                outline: none;\n                padding: 5px 10px;\n                margin: 15px;\n                transition: 0.25s;\n                font-size: 17px;\n            }\n            \n            button:hover {\n                cursor: pointer;\n                opacity: 0.8;\n            }\n\n            .checked {\n                background-color: #9C0189;\n                color: #fff;\n                border: none !important;\n            }\n        }\n    }\n\n    .block-inputs {\n        form {\n            display: flex;\n            position: relative;\n            padding-bottom: 80px;\n            min-height: 200px;\n            justify-content: space-around;\n            \n\n            input, textarea {\n                width: 100%;\n                border: 1px solid #1F1F1F;\n                margin-bottom: 10px;\n                padding: 5px 7px;\n                outline: none;\n            }\n\n            textarea{\n                height: 100%;\n                resize: none;\n            }\n\n            input {\n                height: 35px;\n            }\n\n            button {\n                position: absolute;\n                bottom: 15px;\n                background-color: #9C0189;\n                border: none;\n                font-size: 17px;\n                color: #fff;\n                padding: 10px 50px;\n                transition: 0.25s;\n            }\n            .column-1 {\n                display: flex;\n                flex-wrap: wrap;\n                width: 30%;\n            }\n\n            .column-2 {\n                width: 50%;\n            }\n\n            button:hover {\n                opacity: 0.8;\n                cursor: pointer;\n            }\n        }\n    }\n    @media (max-width: 768px) {\n        .block{\n            .block-buttons {\n                display: flex;\n                flex-direction: column;\n                margin-bottom: 20px;\n\n                button {\n                    margin: 5px;\n                    font-size: 17px;\n                }\n            }\n        }\n\n        form {\n            flex-wrap: wrap; \n            padding: 0 20px;\n\n            input, textarea {\n                font-size: 20px;\n            }\n         }\n\n        .column-1, .column-2 {\n            width: 100% !important;\n        } \n    }\n    \n"]))),On=function(n){var e=n.type,t=n.setIsSent,i=Object(h.useState)(""),a=Object(F.a)(i,2),c=a[0],s=a[1],o=Object(h.useState)(new Date),r=Object(F.a)(o,2),l=r[0],d=r[1],m=Object(h.useState)(""),u=Object(F.a)(m,2),p=u[0],x=u[1],b=Object(h.useState)(""),j=Object(F.a)(b,2),g=j[0],f=j[1],O=Object(h.useState)(0),w=Object(F.a)(O,2),v=w[0],k=w[1],z=Object(h.useState)(""),N=Object(F.a)(z,2),P=N[0],S=N[1],C=function(n){var e=n.target.value;switch(n.target.name){case"name":console.log("zmieniam imie "+e),t(!1),s(e);break;case"date":console.log("zmieniam date "+e),d(e),t(!1);break;case"location_1":console.log("zmieniam lokalizacje 1 "+e),x(e),t(!1);break;case"location_2":console.log("zmieniam lokalizacje_2 "+e),f(e),t(!1);break;case"guests":console.log("zmieniam go\u015bci "+e),k(e),t(!1);break;case"message":console.log("zmieniam wiadomo\u015b\u0107 "+e),S(e),t(!1)}},q=[Object(y.jsx)("input",{placeholder:"imie i nazwisko",type:"text",name:"name",value:c,onChange:C.bind(gn),required:!0}),Object(y.jsx)("input",{type:"date",name:"date",value:l,onChange:C.bind(gn),required:!0}),Object(y.jsx)("input",{placeholder:"Miejsce \u015blubu",type:"text",name:"location_1",value:p,onChange:C.bind(gn),required:!0}),Object(y.jsx)("input",{placeholder:"miejsce zabawy weselnej",type:"text",name:"location_2",value:g,onChange:C.bind(gn),required:!0}),Object(y.jsx)("input",{placeholder:"liczba go\u015bci",type:"number",name:"guests",value:v,onChange:C.bind(gn),required:!0}),Object(y.jsx)("textarea",{placeholder:"tre\u015b\u0107 wiadomo\u015bci",type:"textarea",name:"message",value:P,onChange:C.bind(gn),required:!0}),Object(y.jsx)("input",{placeholder:"miejsce imprezy",type:"text",name:"location_1",value:p,onChange:C.bind(gn),required:!0})],L=Object(y.jsxs)(y.Fragment,{children:[q[0],q[1],q[2],q[3],q[4]]}),A=Object(y.jsxs)(y.Fragment,{children:[q[0],q[1],q[6],q[4]]}),I=Object(y.jsx)(y.Fragment,{children:q[0]}),M="wedding"===e?L:"party"===e?A:I;return Object(y.jsxs)("form",{onSubmit:function(n){n.preventDefault(),s(""),d(new Date),x(""),f(""),k(0),S(""),t(!0),console.log("Message sended")},children:[Object(y.jsx)("div",{className:"column-1",children:M}),Object(y.jsx)("div",{className:"column-2",children:q[5]}),Object(y.jsx)("button",{type:"submit",children:"Wy\u015blij"})]})},wn=function(){var n=Object(h.useState)("wedding"),e=Object(F.a)(n,2),t=e[0],i=e[1],a=Object(h.useState)(!1),c=Object(F.a)(a,2),s=c[0],o=c[1];Object(h.useEffect)((function(){!function(n){var e=document.querySelectorAll(".choseFormBtn");switch(e.forEach((function(n){return n.classList.remove("checked")})),t){case"wedding":e[0].classList.add("checked");break;case"party":e[1].classList.add("checked");break;case"other":e[2].classList.add("checked")}}()}));var r=[{id:1,title:"\u015alub/wesele",value:"wedding"},{id:2,title:"Impreza okoliczno\u015bciowa",value:"party"},{id:3,title:"Inny temat",value:"other"}].map((function(n){return Object(y.jsx)("button",{className:"choseFormBtn",id:n.id,onClick:function(e){i(n.value)},children:n.title},n.id)}));return console.log(t),Object(y.jsx)(fn,{children:Object(y.jsxs)("div",{className:"block",children:[Object(y.jsx)("h3",{children:"Kontakt"}),Object(y.jsx)("div",{className:"block-buttons",children:r}),Object(y.jsxs)("div",{className:"block-inputs",children:[Object(y.jsx)(On,{type:t,setIsSent:o}),s?"Twoja wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana. Postaram si\u0119 odpowiedzie\u0107 tak szybko jak to mo\u017cliwe.":null]})]})})},vn=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(T,{type:"homePage"}),Object(y.jsx)(U,{}),Object(y.jsx)(Q,{type:"contact"}),Object(y.jsx)(tn,{}),Object(y.jsx)(cn,{}),Object(y.jsx)(Q,{type:"offer"}),Object(y.jsx)(hn,{}),Object(y.jsx)(wn,{})]})},kn=function(n){n.type;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(T,{type:"offerPage"})})},yn=function(){return Object(y.jsxs)(D.c,{children:[Object(y.jsx)(D.a,{path:"/",exact:!0,component:vn}),Object(y.jsx)(D.a,{path:"/offer-and-price",component:kn})]})},zn=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(P.a,{basename:"/cameraman",children:[Object(y.jsx)(B,{}),Object(y.jsx)(yn,{})]}),Object(y.jsx)(N,{})]})},Nn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;t(n),i(n),a(n),c(n),s(n)}))};O.a.render(Object(y.jsx)(g.a.StrictMode,{children:Object(y.jsx)(zn,{})}),document.getElementById("root")),Nn()}},[[48,1,2]]]);
//# sourceMappingURL=main.8ecec96c.chunk.js.map
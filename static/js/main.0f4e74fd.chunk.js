(this["webpackJsonpwookie-web"]=this["webpackJsonpwookie-web"]||[]).push([[0],{217:function(e,c,a){},218:function(e,c,a){},219:function(e,c,a){},226:function(e,c,a){},227:function(e,c,a){},228:function(e,c,a){},235:function(e,c,a){},236:function(e,c,a){},237:function(e,c,a){},238:function(e,c,a){},242:function(e,c,a){"use strict";a.r(c);var s=a(1),t=a(0),r=a.n(t),n=a(81),i=a.n(n),o=(a(217),a(218),a(11)),l=(a(219),a(28)),j=a(187),d=a(188),h=a(189),b=a(45),p=a(196),m=a.n(p),u=a(150),O=a.n(u),x=a(151),f=a.n(x),g=a(197),v=a.n(g),w=a(20);function y(){return Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("img",{src:"".concat("/wookie-web","/images/wookieLogo.jpg"),className:"main-logo",alt:""})})}function N(){var e=Object(t.useState)(!1),c=Object(o.a)(e,2),a=c[0],r=c[1];return Object(s.jsx)("div",{id:"nav-menu",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/story",children:"Our Story"})}),Object(s.jsx)("li",{children:Object(s.jsxs)("span",{className:"sub-menu-header",onClick:function(){return r(!a)},children:["Wookie Products",Object(s.jsx)("b",{className:"caret"})]})}),a&&Object(s.jsxs)("ul",{className:"sub-menu",children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/cakes",children:"Cakes"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/cookies",children:"Wookie Cookies"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/burgers",children:"Wookie Burgers"})})]}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/help",children:"FAQ And Help"})})]})})}function k(e){var c=Object(t.useState)(!1),a=Object(o.a)(c,2),r=a[0],n=a[1],i=e.showNavMenu;null==i&&(i=!0);var l=Object(w.e)();return Object(t.useEffect)((function(){n(!1)}),[l]),Object(s.jsxs)("div",{id:"header",className:"container-fluid p-0 main-header-wrapper",children:[Object(s.jsxs)("div",{className:"d-lg-none",children:[Object(s.jsx)(j.a,{position:"static",children:Object(s.jsxs)(d.a,{children:[Object(s.jsx)("div",{className:"hamburger-wrapper",children:Object(s.jsx)(h.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return n(!r)},className:"hamburger-icon",children:Object(s.jsx)(m.a,{})})}),Object(s.jsx)("div",{className:"main-logo-wrapper",children:Object(s.jsx)(y,{})})]})}),Object(s.jsx)(b.a,{docked:!1,onRequestChange:function(){return n(r)},open:r,onClose:function(){return n(!1)},children:Object(s.jsxs)("div",{children:[Object(s.jsx)(h.a,{size:"large",color:"inherit","aria-label":"menu",onClick:function(){return n(!r)},className:"cross-icon",children:Object(s.jsx)(v.a,{})}),Object(s.jsx)(N,{})]})})]}),Object(s.jsxs)("div",{id:"desktop-header",className:"d-none d-lg-block",children:[Object(s.jsxs)("div",{className:"desktop-logo-wrapper",children:[Object(s.jsx)(y,{}),Object(s.jsxs)("span",{className:"desktop-right-logo-outer-wrapper",children:[Object(s.jsxs)("span",{className:"desktop-right-logo-inner-wrapper",children:[Object(s.jsx)(O.a,{}),Object(s.jsx)("span",{className:"desktop-right-logo-text",children:"@TheWookieBakery"})]}),Object(s.jsxs)("span",{className:"desktop-right-logo-inner-wrapper",children:[Object(s.jsx)(f.a,{}),Object(s.jsx)("span",{className:"desktop-right-logo-text",children:"+65 945 945 45"})]})]})]}),i&&Object(s.jsx)("div",{id:"main-menu",children:Object(s.jsx)(N,{})})]})]})}function C(e){var c=e.showNavMenu;return null!=c&&void 0!=c||(c=!0),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(k,{showNavMenu:e.showNavMenu}),Object(s.jsx)("div",{className:"pt-3",children:Object(s.jsxs)("div",{className:"row",children:[c&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"col-lg-2"}),Object(s.jsx)("div",{className:"col-lg-10",children:Object(s.jsx)("div",{className:"body-wrapper",children:e.component})})]}),!c&&Object(s.jsx)("div",{className:"body-wrapper",children:e.component})]})})]})}var q=a(58),I=a(50),F=a(51),L=a(80),B=a(79),S=(a(226),function(e){Object(L.a)(a,e);var c=Object(B.a)(a);function a(e){return Object(I.a)(this,a),c.call(this,e)}return Object(F.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"cake-card col-md-6 col-lg-4",children:[Object(s.jsx)(l.b,{to:"/cake/".concat(this.props.cakeId),children:Object(s.jsx)("div",{className:"cake-card-img-wrapper",children:Object(s.jsx)("img",{src:"".concat("/wookie-web","/images/cakes/").concat(this.props.image),alt:"",className:"cake-card-img"})})}),Object(s.jsxs)("div",{className:"cake-card-info-wrapper",children:[Object(s.jsx)(l.b,{to:"/cake/".concat(this.props.cakeId),children:Object(s.jsx)("span",{className:"cake-card-title",children:this.props.name})}),Object(s.jsxs)("p",{className:"cake-card-price",children:["SGD ",this.props.price.sixInch," - SGD ",this.props.price.eightInch]})]})]})})}}]),a}(r.a.Component)),D=0,W=1,T=[{id:"roseLychee",name:"Rose Lychee",type:D,price:{sixInch:61.3,eightInch:96.3},imageFileName:"roseLychee.jpg",description:["Our signature item features 3 layers of soft sponge with quality rose infused fresh cream, sandwiched with the juiciest of lychees.","Decorated with love using Herbal leaves, twigs and dried roses.","Brew the dried rose for a cup of hot rose tea and enjoy it with a slice of our Signature rose lychee cake."]},{id:"yuzuRaspberry",name:"Yuzu Raspberry",type:D,price:{sixInch:61.3,eightInch:96.3},imageFileName:"yuzuRaspberry.jpg",description:["Love Yuzu? This is the cake for you.","3 layers of soft sponge sandwiched with raspberry cream cheese and fresh cream.","Topped with freeze dried raspberries and herbal leaves and twigs."]},{id:"strawberryShortcake",name:"Strawberry Shortcake",type:D,price:{sixInch:61.3,eightInch:96.3},imageFileName:"strawberryShortcake.jpg",description:["Strawberry Short Cake is one of our Top Sellers.","3 layers of very soft sponge sandwiched with chunky fresh strawberries.","Little Sour sweet strawberries with creamy and milky fresh cream.","The perfect choice for strawberry shortcake lovers."]},{id:"earlgreyAppleLemon",name:"Earl Grey Apple Lemon",type:D,price:{sixInch:61.3,eightInch:96.3},imageFileName:"earlgreyAppleLemon.jpg",description:["Earl Grey infused fresh cream with apple pie filling, vanilla sponge & lemon curd.","A simple yet elegant cake."]},{id:"saltedCaramelBanana",name:"Banana Cake with Salted Caramel",type:D,price:{sixInch:61.3,eightInch:96.3},imageFileName:"saltedCaramelBanana.jpg",description:["3 layers of soft and moist banana cake with creamy fresh cream. Filled with walnuts and dark Belgian chocolate chips.","Topped with home-made salted caramel and almond flakes."]},{id:"chrysanthemumWolfberry",name:"Chrysanthemum with Wolfberry and Honey",type:D,price:{sixInch:61.3,eightInch:96.3},imageFileName:"chrysanthemumWolfberry.jpg",description:["Chrysanthemum infused fresh cream with premium wolfberries, dried longans and ginko nuts sandwiched between 3 layers of soft fluffy vanilla sponge.","Enjoy the natural sweetness from Australian Honey and wolfberry toppings."]},{id:"blueberryLavender",name:"Blueberry Lavender",type:D,price:{sixInch:61.3,eightInch:96.3},imageFileName:"blueberryLavender.jpg",description:["Relax your body and mind with a slice of Lavender Cake.","3 layers of soft and fluffy vanilla sponge cake sandwiched with blueberry lavender fresh cream.","Topped with fresh Blueberries."]},{id:"belgianChocolateCC",name:"Belgian Chocolate Cake with Cookie & Cream",type:D,price:{sixInch:61.3,eightInch:96.3},imageFileName:"belgianChocolateCC.jpg",description:["Taste the goodness of the very best Belgian chocolate with cookie & cream.","3 thick layers of vanilla sponge cake sandwiched with loads of oreo cookies.","Topped with chocolate chips and Belgian chocolate sauce."]},{id:"theLoveLog",name:"The Love Log",type:W,price:{sixInch:76.3,eightInch:119.3},imageFileName:"theLoveLog.jpg",description:["Handcrafted with love, the LOVE LOG presents a Rose infused fresh cream layered with juicy lychee.","Self-craved wood grains and dusted with rose petals and herbal leaves and twigs."]},{id:"belgianChocolateJGF",name:"Belgian Chocolate Cake with Japanese Gold Flakes",type:W,price:{sixInch:76.3,eightInch:119.3},imageFileName:"belgianChocolateJGF.jpg",description:["Delicately-textured chocolate sponge laced with decadent chocolate ganache together with crunchy twist, our Belgian chocolate cake remains on of the Wookie Bakery\u2019s top seller."]}];function A(e){var c,a=[],s=Object(q.a)(T);try{for(s.s();!(c=s.n()).done;){var t=c.value;t.type==e&&a.push(t)}}catch(r){s.e(r)}finally{s.f()}return a}a(227);function H(){var e,c=A(D),a=[],t=A(W),r=[],n=0,i=Object(q.a)(c);try{for(i.s();!(e=i.n()).done;){var o=e.value;a.push(Object(s.jsx)(S,{price:o.price,name:o.name,image:o.imageFileName,cakeId:o.id,description:o.description},n)),n++}}catch(h){i.e(h)}finally{i.f()}var l,j=Object(q.a)(t);try{for(j.s();!(l=j.n()).done;){var d=l.value;r.push(Object(s.jsx)(S,{price:d.price,name:d.name,image:d.imageFileName,cakeId:d.id,description:d.description},n)),n++}}catch(h){j.e(h)}finally{j.f()}return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"col-lg-6 cake-section-wrapper",children:Object(s.jsx)("h1",{className:"section-title",children:"Regular Cakes"})}),Object(s.jsx)("div",{children:a}),Object(s.jsx)("div",{className:"col-lg-6 cake-section-wrapper",children:Object(s.jsx)("h1",{className:"section-title",children:"Premium Cakes"})}),Object(s.jsx)("div",{children:r})]})}function G(){return Object(s.jsx)(C,{component:Object(s.jsx)(H,{})})}a(228);function P(){return Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{className:"cake-page-description",children:"Please Whatsapp 945 945 45 for order and delivery"}),Object(s.jsx)("li",{className:"cake-page-description",children:"$10 per address. Delivery time 12pm to 5pm. Re-delivery charge at $10. CBD area extra $5 or pickup at Yishun without delivery charge."}),Object(s.jsx)("li",{className:"cake-page-description",children:"Payment via PayNow to UEN 53419046D, please screenshot and whatsapp to us at 945 945 45 upon payment"})]})}function R(){var e,c=function(e){var c,a=Object(q.a)(T);try{for(a.s();!(c=a.n()).done;){var s=c.value;if(s.id==e)return s}}catch(t){a.e(t)}finally{a.f()}return null}(Object(w.g)().cakeId),a=[],t=0,r=Object(q.a)(c.description);try{for(r.s();!(e=r.n()).done;){var n=e.value;a.push(Object(s.jsx)("p",{className:"cake-page-description",children:n},t)),t++}}catch(i){r.e(i)}finally{r.f()}return Object(s.jsxs)("div",{className:"cake-page-wrapper row",children:[Object(s.jsx)("div",{className:"col-md-5 cake-img-wrapper",children:Object(s.jsx)("img",{src:"".concat("/wookie-web","/images/cakes/").concat(c.imageFileName),alt:"",className:"cake-page-img"})}),Object(s.jsxs)("div",{className:"col-md-7 cake-description-wrapper",children:[Object(s.jsx)("h3",{className:"cake-title",children:c.name}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"cake-price",children:[Object(s.jsxs)("p",{children:['6" diameter: SGD ',c.price.sixInch]}),Object(s.jsxs)("p",{children:['8" diameter: SGD ',c.price.eightInch]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"cake-page-description-wrapper",children:[a,Object(s.jsx)("hr",{}),Object(s.jsx)(P,{})]})]})]})}function E(){return Object(s.jsx)(C,{component:Object(s.jsx)(R,{})})}a(229),a(235);var Y=function(e){Object(L.a)(a,e);var c=Object(B.a)(a);function a(){return Object(I.a)(this,a),c.apply(this,arguments)}return Object(F.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"burgers-component",className:"col-lg-6",children:[Object(s.jsx)("h1",{className:"section-title",children:"Wookie Burger 2.0"}),Object(s.jsx)("img",{src:"".concat("/wookie-web","/images/burgers/burger2.jpg"),alt:"",className:"page-img"}),Object(s.jsx)("img",{src:"".concat("/wookie-web","/images/burgers/burger0.jpg"),alt:"",className:"carousel-img"}),Object(s.jsx)("img",{src:"".concat("/wookie-web","/images/burgers/burger1.jpg"),alt:"",className:"carousel-img"})]})}}]),a}(r.a.Component);function z(){return Object(s.jsx)(C,{component:Object(s.jsx)(Y,{})})}var $=function(e){Object(L.a)(a,e);var c=Object(B.a)(a);function a(){return Object(I.a)(this,a),c.apply(this,arguments)}return Object(F.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"col-lg-6",children:Object(s.jsx)("h1",{className:"section-title",children:"Wookie Cookies"})})}}]),a}(r.a.Component);function J(){return Object(s.jsx)(C,{component:Object(s.jsx)($,{})})}a(236);function M(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"common-page-title",children:"Faq and Help"}),Object(s.jsxs)("div",{className:"faq-sub-section",children:[Object(s.jsx)("h1",{className:"faq-sub-section-title",children:"Ordering"}),Object(s.jsxs)("div",{className:"faq-sub-section-contents",children:[Object(s.jsxs)("div",{className:"faq-qna-wrapper",children:[Object(s.jsx)("li",{className:"faq-question",children:"How do I order?"}),Object(s.jsx)("p",{className:"faq-answer",children:"Please Whatsapp 945 945 45 for order and delivery."})]}),Object(s.jsxs)("div",{className:"faq-qna-wrapper",children:[Object(s.jsx)("li",{className:"faq-question",children:"How do I pay?"}),Object(s.jsx)("p",{className:"faq-answer",children:"You can pay via PayNow to UEN 53419046D. Screenshot and WhatsApp us at 945 945 45 upon payment."})]})]})]}),Object(s.jsxs)("div",{className:"faq-sub-section",children:[Object(s.jsx)("h1",{className:"faq-sub-section-title",children:"Delivery"}),Object(s.jsxs)("div",{className:"faq-sub-section-contents",children:[Object(s.jsxs)("div",{className:"faq-qna-wrapper",children:[Object(s.jsx)("li",{className:"faq-question",children:"Do you provide delivery service?"}),Object(s.jsx)("p",{className:"faq-answer",children:"Yes! For your convenience, we provide delivery services at $10 per address, and an extra $5 for CBD areas."}),Object(s.jsx)("p",{className:"faq-answer",children:"Delivery time varies from 12pm to 5pm. Re-deliveries cost $10."})]}),Object(s.jsxs)("div",{className:"faq-qna-wrapper",children:[Object(s.jsx)("li",{className:"faq-question",children:"Can I pickup my order?"}),Object(s.jsx)("p",{className:"faq-answer",children:"Yes! You can pickup your order at Yishun without delivery charges."})]})]})]}),Object(s.jsxs)("div",{className:"faq-sub-section",children:[Object(s.jsx)("h1",{className:"faq-sub-section-title",children:"Care Guide"}),Object(s.jsxs)("div",{className:"faq-sub-section-contents",children:[Object(s.jsxs)("div",{className:"faq-qna-wrapper",children:[Object(s.jsx)("li",{className:"faq-question",children:"Cookie Care"}),Object(s.jsx)("p",{className:"faq-answer",children:"Our cookies are best eaten fresh!"}),Object(s.jsx)("p",{className:"faq-answer",children:"For storage, store in air tight container and place in chiller for up to 3 days."}),Object(s.jsx)("p",{className:"faq-answer",children:"Warm up in preheated oven or air fryer at 150 degrees for 2-3 minutes or until warm."})]}),Object(s.jsxs)("div",{className:"faq-qna-wrapper",children:[Object(s.jsx)("li",{className:"faq-question",children:"Cake Care"}),Object(s.jsx)("p",{className:"faq-answer",children:"Our cakes are best consumed once taken out from fridge. No stabilisers are used in baking process, so cream will get soft when in room temperature."}),Object(s.jsx)("p",{className:"faq-answer",children:"Cakes are to be refridgerated upon receiving."})]})]})]})]})}function Q(){return Object(s.jsx)(C,{component:Object(s.jsx)(M,{})})}var U=function(e){Object(L.a)(a,e);var c=Object(B.a)(a);function a(){return Object(I.a)(this,a),c.apply(this,arguments)}return Object(F.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"col-lg-6",children:Object(s.jsx)("h1",{className:"section-title",children:"Our Story"})})}}]),a}(r.a.Component);function V(){return Object(s.jsx)(C,{component:Object(s.jsx)(U,{})})}a(237);function K(){return Object(s.jsxs)("div",{id:"not-found",children:[Object(s.jsx)("p",{className:"not-found-text",children:"Page Not Found"}),Object(s.jsx)("p",{className:"not-found-code",children:"404"}),Object(s.jsx)(l.b,{to:"/",children:"Back to Home"})]})}function X(){return Object(s.jsx)(C,{showNavMenu:!1,component:Object(s.jsx)(K,{})})}function Z(){var e=Object(w.e)();return Object(t.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var _=a(89),ee=a(277),ce=(a(238),a(198)),ae=a.n(ce);function se(){return Object(s.jsxs)("div",{id:"footer",children:[Object(s.jsxs)("ul",{className:"footer-nav",children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/help",children:"FAQ And Help"})})]}),Object(s.jsxs)("div",{className:"social-icons-wrapper",children:[Object(s.jsx)(ae.a,{className:"icon"}),Object(s.jsx)(O.a,{className:"icon"}),Object(s.jsx)(f.a,{className:"icon"})]})]})}var te=Object(_.b)({palette:{primary:{main:"#fff"},secondary:{main:"#000"}},shadows:Array(25).fill("none")});var re=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)(ee.a,{theme:te,children:[Object(s.jsx)(Z,{}),Object(s.jsxs)(w.c,{children:[Object(s.jsx)(w.a,{path:"/",element:Object(s.jsx)(G,{})}),Object(s.jsx)(w.a,{path:"/cakes",element:Object(s.jsx)(G,{})}),Object(s.jsx)(w.a,{path:"/cake/:cakeId",element:Object(s.jsx)(E,{})}),Object(s.jsx)(w.a,{path:"/burgers",element:Object(s.jsx)(z,{})}),Object(s.jsx)(w.a,{path:"/cookies",element:Object(s.jsx)(J,{})}),Object(s.jsx)(w.a,{path:"/story",element:Object(s.jsx)(V,{})}),Object(s.jsx)(w.a,{path:"/help",element:Object(s.jsx)(Q,{})}),Object(s.jsx)(w.a,{path:"*",element:Object(s.jsx)(X,{})})]})]}),Object(s.jsx)(se,{})]})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,278)).then((function(c){var a=c.getCLS,s=c.getFID,t=c.getFCP,r=c.getLCP,n=c.getTTFB;a(e),s(e),t(e),r(e),n(e)}))};i.a.render(Object(s.jsx)(l.a,{basename:"/",children:Object(s.jsx)(re,{})}),document.getElementById("root")),ne()}},[[242,1,2]]]);
//# sourceMappingURL=main.0f4e74fd.chunk.js.map
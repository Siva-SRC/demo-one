(this["webpackJsonplove-proposal"]=this["webpackJsonplove-proposal"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),i=a(20),o=a.n(i),r=(a(28),a(29),a(21)),l=a(10),u=a(11),j=a(9),m=a(13),b=a(12),h=(a(30),a(31),function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).play=function(){n.setState({play:!0,pause:!1}),n.audio.play()},n.pause=function(){n.setState({play:!1,pause:!0}),n.audio.pause()},n.state={play:!1,pause:!0},n.url="unswasam.mp3",n.audio=new Audio(n.url),n}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"love",children:[Object(n.jsx)("h1",{className:"love__heading",children:"I love you di Jillu"}),Object(n.jsx)("img",{src:"https://lh3.googleusercontent.com/F96tur3je2TF4SiKMWPcCSw5v_324EMrq0brfu4tuM0uPY1ESzGdso7GPOP7DNqTmGqjmECcc8XVkciSCV5pWdRM6VauCGhiISDyNY4Xp5pouR77AgyzgBDtJ84nwolsoM4ZX0GoVTMpXsi0IvLXv-xXRz3O_yBoD3AYz5fWlizKEtZ0nh8LAjLUdE8dCTJV4CjTfIOkQGDuJZ2wmAHZQvHFMFgA3iruwYkjXUogeYerK8A0udS8rZhmEfoDWuzp3E98fkyTmgBh7Vfs4U1iyh3wXzEDYhziM2m0mr28ClDHnDQuUhA3coOeY_hXcgc4OZzYlBAM5TkVIn2pKRfDxn4cFpDj6tPCpioy3XZDWB2hiJOa6otNycPkOSyZPH-QCXR6USI7QZoi93ACNFEVFftJ41CfrQQWpxpTCe0zcagS4Bih3Dw78FMuMiwuudVESjjfT1pLwJTyDbtcCgLABCtI2nNoWOxWOYYEaS5FgasmNqGWXTN02VTVpCg_fi2OODDK8E840DuEfb2ibkAVPlEqbnz6xDGpByuJ50NiV6_Csfbj5G9YJlLcg5lAS4R_1WLAHUqhboEeuOA2YybWsZodsQYBJJqDCwErveka_i5dezWDrfchCEw0CjQIFmAdmB3s7ntcj_aCclpzuO3K4LE2NUR5w1T3QRO0560ba3reAMUugQjStv8W7rtvbg=w702-h936-no?authuser=1",alt:"",className:"love__image"}),Object(n.jsx)("h2",{children:"This is for you"}),Object(n.jsx)("button",{onClick:this.play,className:"love__button",children:"Click here"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:this.pause,className:"love__button2",children:"Stop"})]})}}]),a}(s.a.Component)),d=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).afterEnterValue=function(t){t.preventDefault();var a=t.target.name,n=t.target.value.toLowerCase();e.setState(Object(r.a)({},a,n))},e.onSubmit=function(t){t.preventDefault(),""===e.state.firstname||""===e.state.secondname||""===e.state.mobileno?alert("Field cannot be empty"):"narmatha"===e.state.firstname&&"govindaraj"===e.state.secondname&&"9566824764"===e.state.mobileno?(e.setState({match:!0}),alert("Entries matched succesfully"),e.state.match=!1,window.location="/love"):(alert("Entries doesn't match"),e.state.match=!1)},e.state={firstname:"",secondname:"",mobileno:""},e.state.match=!1,e.afterEnterValue=e.afterEnterValue.bind(Object(j.a)(e)),e.onSubmit=e.onSubmit.bind(Object(j.a)(e)),e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"DEMO",children:Object(n.jsxs)("div",{className:"demo",children:[Object(n.jsx)("h1",{className:"demo__heading",children:"Sign in"}),Object(n.jsx)("p",{className:"demo__label required ",children:"Enter your First Name : "}),Object(n.jsx)("input",{onChange:this.afterEnterValue,className:"demo__input",type:"text",name:"firstname"}),Object(n.jsx)("p",{className:"demo__label",children:"Enter your Second Name : "}),Object(n.jsx)("input",{onChange:this.afterEnterValue,className:"demo__input",type:"text",name:"secondname"}),Object(n.jsx)("p",{className:"demo__label",children:"Enter your Mobile No : "}),Object(n.jsx)("input",{onChange:this.afterEnterValue,className:"demo__input",type:"text",name:"mobileno"}),Object(n.jsx)("button",{className:"demo__button",type:"submit",onClick:this.onSubmit,children:"Submit"})]})})}}]),a}(s.a.Component),p=a(16),O=a(2);var f=function(){return Object(n.jsx)(p.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(O.c,{children:[Object(n.jsx)(O.a,{path:"/love",children:Object(n.jsx)(h,{})}),Object(n.jsx)(O.a,{path:"/",children:Object(n.jsx)(d,{})})]})})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),v()}},[[37,1,2]]]);
//# sourceMappingURL=main.562f7346.chunk.js.map
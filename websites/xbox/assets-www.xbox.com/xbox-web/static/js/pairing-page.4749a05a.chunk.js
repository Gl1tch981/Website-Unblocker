(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[43],{"450d":function(e,i,n){"use strict";n.d(i,"a",(function(){return c}));n("jQ/y");var t=n("ERkP"),a=n("/arO");const o=[];function c(){const e=Object(t.useMemo)(()=>new a.a("useDisableBodyScrolling"),[]),i=Object(t.useRef)(Symbol("id"));o.includes(i.current)||o.push(i.current),Object(t.useEffect)(()=>{const n=i.current;return document.body.classList.add("xgp-disable-scrolling"),()=>{const i=o.indexOf(n);-1===i?e.error("Hook was not present in hook ref"):o.splice(i,1),0===o.length&&(e.debug("All hooks unmounted - Enabling scrolling"),document.body.classList.remove("xgp-disable-scrolling"))}},[e])}},"6oBz":function(e,i,n){e.exports=n.p+"static/media/pairing-controller.8998e27b.svg"},"72pq":function(e,i,n){"use strict";n.r(i),n.d(i,"PairingPage",(function(){return m}));n("kYxP");var t=n("jg1C"),a=n("y8Az"),o=n("YPmG"),c=n("opV4"),l=n("zCf4"),r=n("2g5M"),s=n("ZYNy"),_=n("450d"),d=n("HrFl"),u=n("Z4B9"),g=n("bc7W"),b=n("6oBz"),j=n.n(b),p="PairingPage-module__bodyText___2jXBY",P="PairingPage-module__caption___15vNv";const m=()=>{const[e,i,n,b,m,O,x,y,h]=Object(u.d)("Pairing_Title","Pairing_Examples","Pairing_MoreControllers","Pairing_CaptionXbox","Pairing_CaptionPairLocation","Pairing_PairControllerButton","Pairing_SkipButton","Pairing_BuyControllerButton","Pairing_ControllerAlt"),C=Object(g.c)("PairingPage"),{isTizen:v}=Object(s.a)(),A=Object(r.a)(),{gamepadConnected:N}=Object(d.a)();return Object(_.a)(),Object(t.jsxs)(g.a,{location:"PairingPage",children:[Object(t.jsx)(a.BodyTrappable,{}),Object(t.jsxs)("div",{className:"PairingPage-module__page___3qVqz",children:[Object(t.jsx)("div",{className:"PairingPage-module__title___3U5qe",children:e}),Object(t.jsxs)("div",{className:"PairingPage-module__body___c0txD",children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("div",{className:p,children:i}),Object(t.jsx)("div",{className:p,children:n})]}),Object(t.jsxs)("div",{className:"PairingPage-module__pictureSection___9y8TG",children:[Object(t.jsx)("img",{className:"PairingPage-module__controllerImage___neNkp",src:j.a,alt:h}),Object(t.jsx)("div",{className:P,children:b}),Object(t.jsx)("div",{className:P,children:m})]})]}),Object(t.jsxs)(a.FocusGroup,{className:"PairingPage-module__buttonRow___13Mt3",exitDirections:[],extendsScreenBounds:!0,children:[Object(t.jsx)(o.a,{as:"button",isCallToAction:!0,buttonType:c.c.Primary,overlayMode:c.d.Acrylic,className:"PairingPage-module__button___lzbw_",disabled:!v,onClick:()=>{if(v){const e="com.samsung.tv.quickpanel",i=[new tizen.ApplicationControlData("DeeplinkType",["landing"]),new tizen.ApplicationControlData("SubType",["Setting"])],n=new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/default",null,null,null,i);tizen.application.launchAppControl(n,e)}},children:O}),Object(t.jsx)(o.a,{href:A,as:"a",isCallToAction:!0,buttonType:c.c.Primary,overlayMode:c.d.Acrylic,className:"PairingPage-module__button___lzbw_",onClick:()=>{C.trackLink(A,"SkipForNowButton")},children:x}),Object(t.jsx)(o.a,{as:"button",isCallToAction:!0,buttonType:c.c.Primary,overlayMode:c.d.Acrylic,className:"PairingPage-module__button___lzbw_",onClick:()=>{},children:y})]})]}),N&&Object(t.jsx)(l.c,{to:A})]})};i.default=m}}]);
//# sourceMappingURL=pairing-page.4749a05a.chunk.js.map
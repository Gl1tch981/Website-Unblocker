(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[157],{"367Y":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a("TDSj"),n=a("IxJm");const i=()=>{const{top:e,left:t,bottom:a,right:i}=Object(n.b)();return{top:e+c.g,bottom:a+c.g,left:t,right:i}}},UC4C:function(e,t,a){"use strict";var c=a("3Zg0"),n=a("ERkP");t.a=function(e){var{title:t,titleId:a}=e,i=Object(c.a)(e,["title","titleId"]);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2048 2048",width:"1em",height:"1em","aria-labelledby":a},i),t?n.createElement("title",{id:a},t):null,n.createElement("path",{d:"M1504 128q113 0 212 42t173 117 116 173 43 212q0 109-41 208t-118 177l-865 864-865-864Q82 980 41 881T0 672q0-113 42-212t117-173 173-116 212-43q109 0 208 41t177 118q24 24 47 48t48 48q24-24 47-48t48-48q77-77 176-118t209-41zm294 838q59-59 90-135t31-159q0-87-32-162t-88-131-132-87-163-32q-82 0-158 30t-136 88l-186 186-186-186q-60-60-134-91t-160-31q-86 0-162 32t-132 89-89 133-33 162q0 83 31 159t91 135l774 774 774-774z"}))}},aTjb:function(e,t,a){"use strict";a.r(t),a.d(t,"MediaPage",(function(){return Pe}));var c=a("Czhu"),n=(a("kYxP"),a("x4t0"),a("jg1C")),i=a("y8Az"),o=a("sZmG"),r=a("ERkP"),s=a("zCf4"),l=a("jdKi"),d=a("ehix"),m=a("Iuhp"),_=a("367Y"),u=a("Z4B9"),j=a("ij1g"),b=a("bc7W"),O=a("MsLz"),g=a("u7eo"),p=a("RPGs"),x=a("Tbsf");const h=e=>t=>{const{useSelector:a,useDispatch:c,useStore:n,client:i}=Object(r.useContext)(e),o=a(i.commonSelectors.getCurrentUser),s=Object(x.a)("feed",e),l=null===s||void 0===s?void 0:s.feedSelectors,d=Object(r.useMemo)(()=>l?l.getLinkPreviewLCE:()=>g.LCE_NOT_REQUESTED,[l]),m=Object(r.useCallback)(e=>d(e,t),[d,t]),_=Object(r.useMemo)(()=>s?s.actions.getLinkPreview.start(t,!o):void 0,[s,t,o]);return Object(p.a)(m,_,void 0,{useSelector:a,useDispatch:c,useStore:n})};const{useFeedItem:v}=(C=O.a,{useFeedItem:h(C)});var C;a("KqXw"),a("MvUL");const I=e=>null===e||void 0===e?void 0:e.replace("http://images-eds/","https://images-eds-ssl/");var M=a("KM+F"),y=a("Ii2K"),N=a("YPmG"),f=a("opV4"),P=a("3Zg0");var w=function(e){var{title:t,titleId:a}=e,c=Object(P.a)(e,["title","titleId"]);return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2048 2048",width:"1em",height:"1em","aria-labelledby":a},c),t?r.createElement("title",{id:a},t):null,r.createElement("path",{d:"M1024 512q150 0 292 39t272 107 246 163 214 203q-98 110-213 203t-246 162-273 108-292 39q-150 0-292-39t-272-107-247-162T0 1024q97-109 213-203t246-162 273-108 292-39zm384 512q0-79-30-149t-82-122-123-83-149-30q-80 0-149 30t-122 82-83 123-30 149q0 80 30 149t82 122 122 83 150 30q79 0 149-30t122-82 83-122 30-150zm-1231 0q94 91 200 166t227 127q-45-64-68-139t-24-154q0-78 23-153t69-140q-120 51-226 126t-201 167zm1267 293q120-51 226-126t201-167q-94-91-200-166t-227-127q45 64 68 139t24 154q0 78-23 153t-69 140zm-420-165q-27 0-50-10t-40-27-28-41-10-50q0-27 10-50t27-40 41-28 50-10q27 0 50 10t40 27 28 41 10 50q0 27-10 50t-27 40-41 28-50 10z"}))},S=a("u6gr"),T=a("+fqW"),k=a("rCAx"),E=a("ABCy"),B=a("7YiD"),L=a("5At6"),U=(a("JtPf"),a("/arO")),q=a("Xapl");const D=new U.a("useIncrementGameClipViewCount"),G=e=>()=>{const{useSelector:t,client:a}=Object(r.useContext)(e),c=Object(x.a)("media",e),n=Object(r.useRef)([]),i=t(a.commonSelectors.getCurrentUser),o=Object(r.useCallback)(async e=>{try{await(null===c||void 0===c?void 0:c.incrementViewCountForGameClip(e))}catch(t){const e=Object(q.a)(t);D.error("Failed to increment gameclip view count",e)}},[c]);return Object(r.useEffect)(()=>{if(i&&c&&0!==n.current.length){for(const e of n.current)o(e);n.current.length=0}},[i,o,c]),Object(r.useCallback)(e=>{c&&i?o(e):n.current.includes(e)||n.current.push(e)},[i,o,c])},A=new U.a("useIncrementScreenshotViewCount"),F=e=>()=>{const{useSelector:t,client:a}=Object(r.useContext)(e),c=Object(x.a)("media",e),n=Object(r.useRef)([]),i=t(a.commonSelectors.getCurrentUser),o=Object(r.useCallback)(async e=>{try{await(null===c||void 0===c?void 0:c.incrementViewCountForScreenshot(e))}catch(t){const e=Object(q.a)(t);A.error("Failed to increment screenshot view count",e)}},[c]);return Object(r.useEffect)(()=>{if(i&&c&&0!==n.current.length){for(const e of n.current)o(e);n.current.length=0}},[i,o,c]),Object(r.useCallback)(e=>{c&&i?o(e):n.current.includes(e)||n.current.push(e)},[i,o,c])};const{useIncrementGameClipViewCount:W,useIncrementScreenshotViewCount:R}=function(e){return{useIncrementGameClipViewCount:G(e),useIncrementScreenshotViewCount:F(e)}}(O.a);const V=e=>{let{screenshotId:t,imageUri:a}=e;const c=R(),i=Object(r.useCallback)(()=>{c(t)},[c,t]),o=Object(u.c)("MediaItem_Screenshot");return Object(n.jsx)("img",{src:a,className:"ImageMediaItem-module__mediaElement___2CNtM",alt:o,onLoad:i})};var z=a("ZxrL"),H=a("UC4C");var K=function(e){var{title:t,titleId:a}=e,c=Object(P.a)(e,["title","titleId"]);return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2048 2048",width:"1em",height:"1em","aria-labelledby":a},c),t?r.createElement("title",{id:a},t):null,r.createElement("path",{d:"M0 128h2048v1408H730l-474 475v-475H0V128zm1920 1280V256H128v1152h256v294l293-294h1243z"}))},Z=a("I6Fe"),Q="PureMediaCaption-module__captionRow___2XTQw";const X=e=>{let{authorInfo:t,timeLongAgoString:a,captionText:c}=e;const i=Object(u.c)("MediaItem_Gamer_Picture");return!c||0===c.length&&a?a?Object(n.jsx)("div",{className:Q,children:Object(n.jsx)("div",{className:"PureMediaCaption-module__postedDate___3f-bF",children:a})}):null:Object(n.jsxs)("div",{className:Q,children:[Object(n.jsx)(y.a,{containerClassName:"PureMediaCaption-module__gamerPic___2yq10",size:32,src:t.gamerpicUrl,alt:i}),Object(n.jsxs)("div",{className:"PureMediaCaption-module__inlineColumn___AKsQi",children:[Object(n.jsxs)("div",{className:"PureMediaCaption-module__gamertagDateRow___26Lti",children:[Object(n.jsx)("div",{className:"PureMediaCaption-module__gamertagText___E6Vm7",children:t.gamertag}),t.modernGamertagSuffix&&Object(n.jsxs)("div",{className:"PureMediaCaption-module__gamertagSuffixText___gDlRE",children:["#",t.modernGamertagSuffix]}),a&&Object(n.jsx)("div",{className:"PureMediaCaption-module__inlinePostedDate___3gjoc",children:a})]}),c&&Object(n.jsx)("div",{className:"PureMediaCaption-module__captionText___3-0sd",children:c})]})]})},Y=e=>{let{authorInfo:t,postedDate:a,captionText:c}=e;const i=Object(Z.a)(a);return Object(n.jsx)(X,{authorInfo:t,timeLongAgoString:i,captionText:c})};var J="MediaItemFooter-module__iconWrapper___1q8j8";const $=e=>Object(n.jsxs)("div",{className:e.className,"aria-label":e.accessibilityLabel,"aria-hidden":!e.accessibilityLabel,children:[Object(n.jsx)(M.a,{className:"MediaItemFooter-module__icon___3b03z",icon:e.icon,"aria-hidden":!0}),Object(n.jsx)("div",{className:"MediaItemFooter-module__metadataCount___HeRBt","aria-hidden":!0,children:e.count})]}),ee=e=>{let{item:t}=e;const[a,c,i,r,s,l]=Object(u.d)("MediaItem_LikeCount_Singular","MediaItem_LikeCount_Plural","MediaItem_CommentCount_Singular","MediaItem_CommentCount_Plural","MediaItem_ViewCount_Singular","MediaItem_ViewCount_Plural"),d=Object(B.a)(S.a.EnableMediaEngagement),m=1===t.likeCount?a:Object(o.format)(c,"".concat(t.likeCount)),_=1===t.commentCount?i:Object(o.format)(r,"".concat(t.commentCount)),j=1===t.viewCount?s:Object(o.format)(l,"".concat(t.viewCount));return Object(n.jsxs)("div",{className:"MediaItemFooter-module__footerWrapper___2iVPc",children:[Object(n.jsxs)("div",{className:"MediaItemFooter-module__metadataRow___1QDFF",children:[d&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)($,{className:J,count:t.likeCount,icon:t.hasLiked?z.a:H.a,accessibilityLabel:m}),Object(n.jsx)($,{className:J,count:t.commentCount,icon:K,accessibilityLabel:_})]}),Object(n.jsx)($,{className:J,count:t.viewCount,icon:w,accessibilityLabel:j})]}),t.authorInfo&&Object(n.jsx)(Y,{authorInfo:t.authorInfo,postedDate:t.postedDateInMs,captionText:t.ugcCaption})]})};var te=a("9t/a"),ae=a("yTpl"),ce=a("fOw4");const ne=()=>{const e=Object(u.c)("MediaItem_SignInToPlay_Button"),t=Object(ce.a)(),a=Object(b.c)("SignInToPlayButton"),c=Object(r.useCallback)(()=>{a.trackLink(t,"SignInUrl")},[t,a]);return Object(n.jsx)(N.a,{as:"a",isCallToAction:!0,className:"Button-module__button___3QSAG",buttonType:f.c.Brand,onClick:c,href:t,children:e})};var ie=a("6dmx"),oe=a("iCX8");const re=()=>{const e=Object(u.c)("Play"),t=Object(r.useCallback)(()=>{},[]);return Object(n.jsx)(ie.a,{as:"button",isCallToAction:!0,className:"Button-module__playButton___2XNvg",buttonType:f.c.Brand,icon:oe.a,iconClassName:"Button-module__buttonIcon___1IaWU",onClick:t,children:e})};var se=a("T9Qd"),le=a("FFSX"),de="PurePlayOnWebBanner-module__bannerLeft___2-A45",me="PurePlayOnWebBanner-module__bannerRight___1Fxv-",_e="PurePlayOnWebBanner-module__gameArt___2bdVa";const ue=()=>Object(n.jsxs)("div",{className:"PurePlayOnWebBanner-module__banner___2flXJ",children:[Object(n.jsxs)("div",{className:de,children:[Object(n.jsx)(k.a,{className:_e}),Object(n.jsx)(k.a,{className:"PurePlayOnWebBanner-module__skeletonGameTitle___1zRTB"})]}),Object(n.jsx)("div",{className:me,children:Object(n.jsx)(le.a,{})})]}),je=e=>{let{isLoading:t,titleArtUri:a,titleName:c,contextualButton:i}=e;return t?Object(n.jsx)(ue,{}):Object(n.jsx)("div",{className:"PurePlayOnWebBanner-module__container___gO1nl",children:Object(n.jsxs)("div",{className:"PurePlayOnWebBanner-module__innerContent___3ZBsQ",children:[Object(n.jsxs)("div",{className:de,children:[Object(n.jsx)(se.a,{className:_e,src:a,alt:c}),Object(n.jsx)("div",{className:"PurePlayOnWebBanner-module__gameTitle___lbXmo",children:c})]}),Object(n.jsx)("div",{className:me,children:i})]})})};var be,Oe=a("LaAp"),ge=a("rqmH");!function(e){e.Loading="Loading",e.None="None",e.SignIn="SignIn",e.GamepassUpsell="GamepassUpsell",e.Play="Play"}(be||(be={}));const pe=e=>{let{titleData:t}=e;var a;const{state:c,productId:i}=function(e){const[t,{loading:a}]=Object(ge.a)([e]),c=Object(l.a)(),[n,{loading:i}]=Object(Oe.a)(),o=Object(r.useMemo)(()=>({state:be.Loading}),[]),s=Object(r.useMemo)(()=>({state:be.None}),[]),d=Object(r.useMemo)(()=>({state:be.GamepassUpsell}),[]),m=Object(r.useMemo)(()=>({state:be.SignIn}),[]);return Object(r.useMemo)(()=>{if(a||i)return o;const r=t?t[e]:null;return r?c?n?{state:be.Play,productId:r}:d:m:s},[t,a,s,c,n,i,o,m,d,e])}(t.titleId),o=Object(r.useMemo)(()=>{switch(c){case be.GamepassUpsell:return Object(n.jsx)(ae.a,{});case be.SignIn:return Object(n.jsx)(ne,{});case be.Play:return Object(n.jsx)(re,{});default:return null}},[c]);if(c===be.None||c===be.Play&&!i)return null;const s=null!==(a=t.imageUri&&Object(te.getResizeUrl)(t.imageUri,48,48))&&void 0!==a?a:"";return Object(n.jsx)(je,{isLoading:c===be.Loading,titleName:t.name,titleArtUri:s,contextualButton:o})};var xe=a("EJyY"),he=a("tbJl");const ve=e=>{let{clipId:t,contentUri:a,posterUri:c}=e;const i=Object(u.c)("Play"),o=W(),{0:s,1:l}=Object(r.useState)(!1),d=Object(r.useRef)(null),{0:m,1:_}=Object(r.useState)(!0),j=Object(r.useCallback)(()=>{d.current&&(d.current.controls=!0),_(!1)},[]),b=Object(r.useCallback)(()=>{d.current&&(d.current.controls=!1),_(!0)},[]),O=()=>{d.current&&d.current.paused&&d.current.play()},{0:g,1:p}=Object(r.useState)(0),x=Object(r.useCallback)(e=>{p(.7*e.currentTarget.duration)},[]),h=Object(r.useCallback)(e=>{e.currentTarget.currentTime>=g&&!s&&(o(t),l(!0))},[t,g,s,o]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"VideoMediaItem-module__videoWrapper___1kjjd",children:[Object(n.jsx)("video",{ref:d,className:"VideoMediaItem-module__mediaElement___3hHWs",src:a,loop:!0,autoPlay:!0,muted:!0,onLoadedMetadata:x,onTimeUpdate:h,onPlay:j,onPause:b,poster:c,onClick:O}),m&&Object(n.jsx)(xe.a,{as:"button",className:"VideoMediaItem-module__videoPlayButton___20KPT","aria-label":i,buttonType:f.c.Primary,overlayMode:f.d.Acrylic,icon:he.a,iconClassName:"VideoMediaItem-module__videoPlayButtonIcon___3ZCoT",onClick:O})]})})};var Ce="MediaItem-module__lightText___29w_o";const Ie=e=>{let{info:t,showRealName:a}=e;return Object(n.jsxs)("div",{className:"MediaItem-module__row___36dDq",children:[Object(n.jsx)("div",{className:"MediaItem-module__gamertag___1eCXR",children:t.gamertag}),t.modernGamertagSuffix&&Object(n.jsxs)("div",{className:Ce,children:["#",t.modernGamertagSuffix]}),a&&t.name&&Object(n.jsx)("div",{className:"MediaItem-module__realName___3FFsN",children:t.name})]})},Me=()=>Object(n.jsxs)("div",{className:"MediaItem-module__container___3pSm8",children:[Object(n.jsxs)("div",{className:"MediaItem-module__headerWrapper___2L1wY",children:[Object(n.jsx)(k.a,{className:"MediaItem-module__gamerPicSkeleton___1gfyY"}),Object(n.jsxs)("div",{className:"MediaItem-module__headerInfoWrapper___32ZpE",children:[Object(n.jsx)(k.a,{className:"MediaItem-module__gamertagSkeleton___WGS41"}),Object(n.jsx)(k.a,{className:"MediaItem-module__titleNameSkeleton___2MrFE"})]})]}),Object(n.jsx)(k.a,{className:"MediaItem-module__mediaElementSkeleton___3wIdF"}),Object(n.jsx)("div",{className:"MediaItem-module__footerWrapper___3ZjT7",children:Object(n.jsxs)("div",{className:"MediaItem-module__infoRow___O30Vy",children:[Object(n.jsx)("div",{className:"MediaItem-module__iconWrapper___SdSsR",children:Object(n.jsx)(M.a,{className:"MediaItem-module__icon___2xhCF",icon:w})}),Object(n.jsx)(k.a,{className:"MediaItem-module__viewCountSkeleton___2tS5B"}),Object(n.jsx)("div",{className:"MediaItem-module__postedDateSkeletonWrapper___upItP",children:Object(n.jsx)(k.a,{className:"MediaItem-module__postedDateSkeleton___DhEhD"})})]})})]}),ye=e=>{let{item:t,isSignedIn:a}=e;var c,i;const[o,s]=Object(u.d)("MediaItem_Gamer_Picture","Report_Label"),l=Object(B.a)(S.a.EnableMediaPlayOnWeb),d=Object(T.a)(L.a.Report),m=Object(r.useCallback)(()=>{var e,a,c;d({xuid:t.authorXuid,gamertag:null!==(a=null===(e=t.authorInfo)||void 0===e?void 0:e.gamertag)&&void 0!==a?a:"",realName:null===(c=t.authorInfo)||void 0===c?void 0:c.name,contextType:E.a.ActivityFeed,evidenceId:t.locator})},[null===(c=t.authorInfo)||void 0===c?void 0:c.gamertag,null===(i=t.authorInfo)||void 0===i?void 0:i.name,t.authorXuid,t.locator,d]),_="GameClip"===t.type||"Screenshot"===t.type,j="GameClip"===t.type,b="Screenshot"===t.type,O=I(t.originalContentUri),g=I(t.previewThumbnailUri);return _&&t.authorInfo?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"MediaItem-module__container___3pSm8",children:[Object(n.jsxs)("div",{className:"MediaItem-module__headerWrapper___2L1wY",children:[Object(n.jsx)(y.a,{containerClassName:"MediaItem-module__gamerPic___4bEk-",size:64,src:t.authorInfo.gamerpicUrl,alt:o}),Object(n.jsxs)("div",{className:"MediaItem-module__headerInfoWrapper___32ZpE",children:[Object(n.jsx)(Ie,{info:t.authorInfo,showRealName:!0}),Object(n.jsx)("div",{className:Ce,children:t.title.name})]}),a&&Object(n.jsx)("div",{className:"MediaItem-module__optionsWrapper___14xhl",children:Object(n.jsx)(N.a,{as:"button",isCallToAction:!0,onClick:m,className:"MediaItem-module__reportButton___3o5Hh",buttonType:f.c.Tertiary,children:s})})]}),Object(n.jsx)("div",{className:"MediaItem-module__mediaWrapper___38sm7",children:j?Object(n.jsx)(ve,{clipId:t.clipId,contentUri:t.originalContentUri,posterUri:g}):b&&O?Object(n.jsx)(V,{screenshotId:t.screenshotId,imageUri:O}):null}),l&&Object(n.jsx)(pe,{titleData:t.title}),Object(n.jsx)(ee,{item:t})]})}):null};var Ne;!function(e){e.Loading="Loading",e.Display="Display",e.GenericError="GenericError",e.Private="Private",e.AnonPrivate="AnonPrivate"}(Ne||(Ne={}));const fe=e=>{let{imageClassName:t,message:a,showSignInButton:c}=e;return Object(n.jsxs)("div",{className:"MediaPage-module__errorContainer___23YQQ",children:[Object(n.jsx)("div",{className:t}),Object(n.jsx)("div",{className:"MediaPage-module__errorMessage___38zo4",children:a}),c&&Object(n.jsx)(m.a,{className:"MediaPage-module__signInButton___UTt2A"})]})},Pe=()=>{const{locator:e}=Object(s.m)(),[t,{loading:a}]=v(e),[m,O,g]=Object(u.d)("MediaPage_GenericError","MediaPage_PrivateContentError","MediaPage_PrivateContentAnonError"),p=Object(b.c)("MediaPage"),x=Object(l.a)(),h=Object(s.k)();Object(i.useBButtonHandler)(Object(r.useCallback)(()=>(h.goBack(),!0),[h]));const C=Object(_.a)(),M=null===t||void 0===t?void 0:t.item,y=(e=>{const t=Object(u.c)("MediaItem_Share_Description"),a=null===e||void 0===e?void 0:e.authorInfo,c=a&&a.gamertag?a.modernGamertagSuffix?"".concat(a.gamertag,"#").concat(a.modernGamertagSuffix):"".concat(a.gamertag):void 0,n=c&&e?"".concat(c," | ").concat(e.title.name):void 0,i=e&&e.ugcCaption?e.ugcCaption:c?Object(o.format)(t,c):void 0,r=c?"".concat(c):void 0,s=I(null===e||void 0===e?void 0:e.previewThumbnailUri),l=Object(u.c)("Xbox"),d=Object(u.c)("Media_Clip_Keyword",l),m=Object(u.c)("Media_Clip_Keyword",e?e.title.name:""),_=Object(u.c)("Media_Screenshot_Keyword",l),j=Object(u.c)("Media_Screenshot_Keyword",e?e.title.name:"");return{socialMediaTitle:n,description:i,browserTitle:r,imageUrl:s,siteName:l,keywords:"".concat("GameClip"===(null===e||void 0===e?void 0:e.type)?"".concat(d,", ").concat(m):"".concat("Screenshot"===(null===e||void 0===e?void 0:e.type)?"".concat(_,", ").concat(j):""))}})(M),N=Object(r.useMemo)(()=>!M||"GameClip"!==M.type&&"Screenshot"!==M.type?null===M?x?Ne.Private:Ne.AnonPrivate:a?Ne.Loading:Ne.GenericError:Ne.Display,[M,x,a]);return Object(r.useEffect)(()=>{[Ne.Private,Ne.AnonPrivate,Ne.GenericError].includes(N)&&p.trackUserAction(b.b.FailedToDisplayMediaPage,N)},[N,p]),e?Object(n.jsx)(b.a,{location:"MediaPage",children:Object(n.jsxs)("div",{className:"MediaPage-module__outerContainer___1PAN1",children:[Object(n.jsx)(d.a,Object(c.a)({},y)),Object(n.jsx)(i.BodyScrollable,{scrollOffsets:C}),Object(n.jsx)(i.BodyTrappable,{}),Object(n.jsxs)("div",{className:"MediaPage-module__container___QiNZB",children:[N===Ne.Loading&&Object(n.jsx)(Me,{}),N===Ne.Display&&Object(n.jsx)(ye,{item:M,isSignedIn:x}),N===Ne.GenericError&&Object(n.jsx)(fe,{imageClassName:"MediaPage-module__genericError___2VW-E",message:m}),N===Ne.Private&&Object(n.jsx)(fe,{imageClassName:"MediaPage-module__privateContentError___305Jg",message:O}),N===Ne.AnonPrivate&&Object(n.jsx)(fe,{imageClassName:"MediaPage-module__privateContentError___305Jg",message:g,showSignInButton:!0})]})]})}):Object(n.jsx)(s.c,{to:j.Home.getLink()})};t.default=Pe},ehix:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var c=a("Czhu"),n=(a("kYxP"),a("jQ/y"),a("jg1C")),i=a("sZmG"),o=a("Vgyk"),r=a("uDfI"),s=a("u6gr"),l=a("7YiD"),d=a("zCf4");var m=a("Z4B9"),_=a("QFa6"),u=a.n(_),j=a("5TZK");const b=e=>{const{locale:t}=Object(r.useSelector)(i.getMarketInfo),a=(()=>{const{origin:e}=Object(r.useSelector)(i.getRequestInfo),{locale:t}=Object(r.useSelector)(i.getMarketInfo),{pathname:a}=Object(d.l)();return"".concat(null!==e&&void 0!==e?e:"https://www.xbox.com","https://www.xbox.com/").concat(null!==t&&void 0!==t?t:"en-US").concat(a)})(),n=Object(l.a)(s.a.HideBetaReferences),o=Object(m.c)(n?"Page_Title_HideBeta":"Page_Title"),[_,j,b]=Object(m.d)(n?"Home_Description_HideBeta":"Home_Description","Home_Primary_Keyword","Home_Secondary_Keyword"),O="".concat(j,", ").concat(b),g=e.siteName||o;return Object(c.a)(Object(c.a)({},e),{},{socialMediaTitle:"".concat(e.socialMediaTitle?"".concat(e.socialMediaTitle," | "):"").concat(g),description:e.description||_,keywords:e.keywords||O,imageUrl:e.imageUrl||u.a,siteName:g,twitterCardType:e.twitterCardType||"summary_large_image",locale:e.locale||t,url:e.url||a})},O=e=>{const t=b(e);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j.a,{title:t.browserTitle,siteName:t.siteName,insertGameBarCharacters:e.insertGameBarCharacters}),Object(n.jsxs)(o.a,{children:[Object(n.jsx)("meta",{name:"description",content:t.description}),Object(n.jsx)("meta",{name:"keywords",content:t.keywords}),t.noIndexTag&&Object(n.jsx)("meta",{name:"robots",content:"noindex"}),Object(n.jsx)("meta",{property:"twitter:title",content:t.socialMediaTitle}),Object(n.jsx)("meta",{property:"twitter:description",content:t.description}),Object(n.jsx)("meta",{property:"twitter:image",content:t.imageUrl}),Object(n.jsx)("meta",{property:"twitter:site",content:t.siteName}),Object(n.jsx)("meta",{property:"twitter:card",content:t.twitterCardType}),Object(n.jsx)("meta",{property:"og:title",content:t.socialMediaTitle}),Object(n.jsx)("meta",{property:"og:description",content:t.description}),Object(n.jsx)("meta",{property:"og:image",content:t.imageUrl}),Object(n.jsx)("meta",{property:"og:url",content:t.url}),Object(n.jsx)("meta",{property:"og:site_name",content:t.siteName}),Object(n.jsx)("meta",{property:"og:locale",content:t.locale}),Object(n.jsx)("meta",{property:"og:type",content:"website"})]})]})}}}]);
//# sourceMappingURL=vendors~media-page.5c1012ab.chunk.js.map
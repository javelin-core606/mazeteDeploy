var W=Object.defineProperty,G=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var z=(u,s,l)=>s in u?W(u,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[s]=l,P=(u,s)=>{for(var l in s||(s={}))Q.call(s,l)&&z(u,l,s[l]);if(M)for(var l of M(s))X.call(s,l)&&z(u,l,s[l]);return u},q=(u,s)=>G(u,U(s));import{u as I,r as i,v as Y,a as v,j as e,b as c,A as Z,T as V,c as ee,d as te,F as H,e as ae,B as ue,R as se,f as O,g as re,h as ie}from"./vendor.0a773880.js";const le=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function l(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=l(n);fetch(n.href,a)}};le();const ne="https://mazete-api-dev.pechakucha.ai";function oe(){const u=I();return i.exports.useEffect(()=>{let s=Y();var l=JSON.stringify({register_id:s}),o={method:"post",url:`${ne}/register_id`,headers:{"Content-Type":"application/json"},data:l};v(o).then(n=>{localStorage.setItem("register_id",s)}).catch(n=>{u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}),e("div",{className:"container",children:c("div",{className:"container-wrap",children:[e("div",{className:"top-header",children:e("h1",{children:"\u30DE\u305C\u3066"})}),c("div",{className:"top-banner",children:[e("img",{src:"/assets/image/top-banner-img01.png",alt:"",className:"top-banner01"}),e("img",{src:"/assets/image/top-banner-img02.png",alt:"",className:"top-banner02"}),e("img",{src:"/assets/image/top-banner-img03.png",alt:"",className:"top-banner03"}),e("img",{src:"/assets/image/top-banner-img04.png",alt:"",className:"top-banner04"}),e("div",{className:"top-banner-text",children:"\u203B\u30B5\u30FC\u30D3\u30B9\u5185\u5BB9\u4F1D\u308F\u308B\u30A4\u30E9\u30B9\u30C8\u5916\u6CE8"})]}),e("a",{href:"/select",className:"start-btn",children:"\u30B9\u30BF\u30FC\u30C8"}),e("div",{className:"top-banner-border"}),c("div",{className:"top-delusion",children:[e("div",{className:"top-delusion-title",children:"\u307F\u3093\u306A\u306E\u5984\u60F3"}),c("div",{className:"top-delusion-body",children:[e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img01.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img02.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img03.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img04.png",alt:"",className:"top-delusion-img"})})]})]})]})})}const k="https://mazete-api-dev.pechakucha.ai",ce=ee({stringify:u=>u.kana+u.label});function de(){const u=I(),[s,l]=i.exports.useState(1),[o,n]=i.exports.useState([]),[a,h]=i.exports.useState(null),[F,$]=i.exports.useState(!1),[y,D]=i.exports.useState([]),[T,B]=i.exports.useState([]),[m,f]=i.exports.useState([]),[b,N]=i.exports.useState([]),[A,C]=i.exports.useState([]),[E,x]=i.exports.useState(null);i.exports.useEffect(()=>{let r=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${r}px`);let t=localStorage.register_id||null;t||window.location.assign("/");let p=JSON.stringify({user_id:t,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),d={method:"post",url:`${k}/get_chara_list`,headers:{"Content-Type":"application/json"},data:p};v(d).then(g=>{D(g.data.chara_list)}).catch(g=>{u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let _=JSON.stringify({user_id:t,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),j={method:"post",url:`${k}/get_world_list`,headers:{"Content-Type":"application/json"},data:_};v(j).then(g=>{B(g.data.world_list)}).catch(g=>{u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let S={method:"post",url:`${k}/get_autocomplete_chara`,headers:{"Content-Type":"application/json"},data:{}};v(S).then(g=>{N(g.data.auto_complete),C(g.data.auto_complete)}).catch(g=>{});let w={method:"post",url:`${k}/get_autocomplete_world`,headers:{"Content-Type":"application/json"},data:{}};v(w).then(g=>{f(g.data.auto_complete)}).catch(g=>{})},[]),i.exports.useEffect(()=>{a&&o.length>0&&$(!0)},[o,a]);const L=r=>{let t=o,p=y.filter(d=>d.chara_id==r)[0];if(t.map(d=>d.chara_id).includes(r)){for(let d=0;d<t.length;d++)t[d].chara_id===r&&(t.splice(d,1),d--);n([...t])}else t.length<3&&(t.push(p),n([...t]))},J=()=>{let r=localStorage.register_id||null,t=JSON.stringify({user_id:r,chosen_chara_ids:o.map(d=>d.chara_id).toString(),chosen_world_ids:[a.world_id].toString()}),p={method:"post",url:`${k}/generate_outline`,headers:{"Content-Type":"application/json"},data:t};v(p).then(d=>{localStorage.setItem("outline_id",d.data.outline_id),localStorage.setItem("background",a.img_url),localStorage.setItem("user_list",JSON.stringify(o.map(_=>_.img_url))),window.location.assign("/synopsis")}).catch(d=>{u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},R=r=>{r.preventDefault();let t=localStorage.register_id||null,p=E,d=o.map(S=>S.chara_id).toString(),_="";a&&(_=[a.world_id].toString());let j=JSON.stringify({user_id:t,search_query:p,chosen_chara_ids:d,chosen_world_ids:_});if(s==1){let S={method:"post",url:`${k}/get_chara_list`,headers:{"Content-Type":"application/json"},data:j};v(S).then(w=>{D(w.data.chara_list)}).catch(w=>{u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}else{let S={method:"post",url:`${k}/get_world_list`,headers:{"Content-Type":"application/json"},data:j};v(S).then(w=>{B(w.data.world_list)}).catch(w=>{u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}};return e("div",{className:"container",id:"character_select",children:c("div",{className:"container-wrap",children:[c("div",{className:"preview",children:[c("div",{className:"preview-part",onClick:()=>{l(1),C(b),x(null)},children:[c("div",{className:"preview-img-part",children:[o.map(r=>e("img",{src:r.img_url,alt:""},r.chara_id)),o.length==0&&e("img",{src:"/assets/image/default-avatar.png"})]}),e("div",{className:s===1?"preview-title-part active":"preview-title-part",children:"\u30AD\u30E3\u30E9"})]}),c("div",{className:"preview-part",onClick:()=>{l(2),C(m),x(null)},children:[e("div",{className:"preview-img-part",children:e("img",{src:a!=null?a.img_url:"/assets/image/point-bg.png",alt:""})}),e("div",{className:s===2?"preview-title-part active":"preview-title-part",children:"\u4E16\u754C"})]})]}),c("div",{className:"point-select",children:[e("div",{className:"point-search",children:c("form",{onSubmit:R,children:[e(Z,{value:E,onChange:(r,t)=>{typeof t=="string"?x({label:t}):t&&t.inputValue?x({label:t.inputValue}):x(t)},filterOptions:(r,t)=>ce(r,t),selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:A,getOptionLabel:r=>typeof r=="string"?r:r.label,renderOption:(r,t)=>e("li",q(P({},r),{children:t.label})),renderInput:r=>e(V,q(P({},r),{label:""}))}),e("button",{className:"search-btn",children:e("img",{src:"/assets/image/point-search.png",alt:""})})]})}),c("div",{className:"point-body",children:[s===1&&e("div",{className:"point-body-wrap",children:y.map((r,t)=>e("div",{style:{backgroundImage:`url(${r.img_url})`},onClick:()=>L(r.chara_id),className:`${o.map(p=>p.chara_id).includes(r.chara_id)?"active":""} character-item`,children:e("span",{})},t))}),s==2&&e("div",{className:"point-body-wrap",children:T.map((r,t)=>e("div",{style:{backgroundImage:`url(${r.img_url})`},className:`${(a==null?void 0:a.img_url)==r.img_url?"active":""} location-item`,onClick:p=>{h(r)},children:e("span",{})},t))}),e("button",{onClick:J,className:`character-add-btn ${F?"active":""}`,disabled:!F,children:"\u30DE\u305C\u308B"})]})]})]})})}const K="https://mazete-api-dev.pechakucha.ai";function pe(){const u=I(),s=i.exports.useRef(),[l,o]=i.exports.useState(!1),[n,a]=i.exports.useState(!0),[h,F]=i.exports.useState(`\u30D3\u30EB\u306E\u5C4B\u4E0A\u306B\u3042\u3064\u3081\u3089\u308C\u305F\u30B4\u30F3\u9054\u3002

\u5229\u6839\u5DDD\u304B\u3089\u9244\u9AA8\u306E\u4E0A\u3092\u6E21\u3063\u3066\u3001\u5411\u3053\u3046\u306E\u30D3\u30EB\u3078\u884C\u3051\u305F\u3082\u306E\u306B\u8CDE\u91D1\u304C\u3082\u3089\u3048\u308B\u3068\u8AAC\u660E\u3092\u53D7\u3051\u308B\u3002

\u30B4\u30F3\u9054\u306F\u3044\u304B\u306B\u3057\u3066\u3053\u306E\u5371\u6A5F\u3092\u4E57\u308A\u8D8A\u3048\u308B\u306E\u304B\uFF1F`),[$,y]=i.exports.useState([]),[D,T]=i.exports.useState(null);i.exports.useEffect(()=>{let m=localStorage.register_id||null,f=localStorage.outline_id||null,b=localStorage.background||null,N=localStorage.user_list||null;console.log(N,b),(!N||!b)&&u("/select",{state:{}}),T(b),y(JSON.parse(N));let A=JSON.stringify({user_id:m,outline_id:f}),C={method:"post",url:`${K}/get_outline`,headers:{"Content-Type":"application/json"},data:A};v(C).then(E=>{E.data.generated&&E.data.outline&&!E.data.error?(a(!1),F(E.data.outline)):u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(E=>{u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]);const B=()=>{let m=localStorage.register_id||null,f=localStorage.outline_id||null,b=JSON.stringify({user_id:m,outline_id:f,outline:h}),N={method:"post",url:`${K}/generate_story`,headers:{"Content-Type":"application/json"},data:b};v(N).then(A=>{window.location.assign(`/talk/${A.data.story_id}`)}).catch(A=>{u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return i.exports.useEffect(()=>{s.current&&l&&s.current.focus()},[l]),e("div",{className:"container",id:"loading_synposis",children:c("div",{className:"container-wrap",children:[e("div",{className:`ls-top ${l?"editing":""}`,children:e("div",{className:"\r ",style:{backgroundImage:`url(${D}`},children:e("div",{className:"ls-top-body",children:$.map((m,f)=>e("div",{className:"ls-top-item",children:e("img",{src:m,alt:""})},f))})})}),c("div",{className:"ls-main",children:[e("div",{className:"ls-main-title",children:"\u3042\u3089\u3059\u3058"}),c("div",{className:"ls-main-loading-text",children:[n&&c("div",{className:"ls-main-loading-part",children:[e("img",{src:"/assets/image/white-loading.gif",alt:""}),e("span",{children:"\u4E0B\u66F8\u304D\u6E96\u5099\u4E2D"})]}),!n&&e("textarea",{ref:s,className:"ls-main-loading-wrap",value:h,disabled:!l,onChange:m=>{F(m.target.value)},onBlur:()=>{o(!1)}})]}),!l&&c("a",{className:"ls-main-edit-btn",onClick:()=>{s.current.focus(),o(!0)},children:[e("span",{children:"\u7DE8\u96C6"}),e("img",{src:"/assets/image/edit-icon.png",alt:""})]}),!l&&e("button",{onClick:B,className:n?"ls-main-making-btn":"ls-main-making-btn active",disabled:n,children:"\u3053\u306E\u4E16\u754C\u7DDA\u306B\u5165\u308B"})]})]})})}const me="https://mazete-api-dev.pechakucha.ai";function ge(u){return new Promise(s=>setTimeout(s,u))}function he(){const u=I(),[s,l]=i.exports.useState(!0),[o,n]=i.exports.useState(null),[a,h]=i.exports.useState(0),[F,$]=i.exports.useState(null),[y,D]=i.exports.useState(null),[T,B]=i.exports.useState([]),[m,f]=i.exports.useState(!1),[b,N]=i.exports.useState(!1),[A,C]=i.exports.useState(!1);let{story_id:E}=te();i.exports.useEffect(()=>{let t=localStorage.register_id||null,p=JSON.stringify({user_id:t,story_id:E}),d={method:"post",url:`${me}/get_story`,headers:{"Content-Type":"application/json"},data:p};v(d).then(_=>{l(!1),_.data.generated&&!_.data.error?(l(!1),n(_.data)):u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(_=>{u("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]),i.exports.useEffect(()=>{o&&x()},[o,a]);const x=()=>{let t=o.story;D(t[a].chara_img_url),$(t[a].position),t[a].multiple?(f(!0),B(t[a].content)):(f(!1),L(t[a].content))},L=async t=>{C(!0);for(var p=0;p<t.length;)B([t.substring(0,p+1)]),p++,await ge(75);C(!1),o.story.length-1==a&&N(!0)},J=t=>{m&&(f(!1),L(t))},R=()=>{!A&&!m&&o.story.length-1>a&&h(a+1)},r=()=>{console.log(a),a===0&&u("/synopsis",{state:{}}),a!=0&&!A&&(h(a-1),N(!1))};return c(H,{children:[s&&c("div",{className:"container",id:"loading_adventure",children:[e("div",{className:"container-wrap",children:c("div",{className:"la-wrap",children:[e("img",{src:"/assets/image/black-loading.gif",alt:""}),e("span",{children:"\u6E96\u5099\u4E2D"})]})}),e("button",{className:"back-to-btn",onClick:r,children:e("img",{src:"/assets/image/back-to-img.svg",alt:""})})]}),!s&&c("div",{className:"container",id:"adventure_state",children:[c("div",{className:"container-wrap",onClick:R,children:[e("div",{className:"as-thumb",style:{backgroundImage:`url(${o==null?void 0:o.background_url})`},children:y&&e("img",{src:y,alt:"",className:`as-thumb-character ${F==0?"lb":F==1?"mb":"rb"}`})}),e("div",{className:"as-text",children:T.map((t,p)=>e("div",{className:"as-text-wrap",onClick:()=>{J(t)},children:t},p))}),!b&&c("div",{className:"text-select-btn-group",children:[!m&&e("a",{className:"next-btn",children:"\u30BF\u30C3\u30D7\u3057\u3066\u6B21\u3078\xA0\xA0\u25B6"}),m&&e("a",{className:"next-btn active",children:"\u9078\u629E\u3057\u3066\u4E0B\u3055\u3044\xA0\xA0\u25B6"})]}),b&&c("div",{className:"text-select-btn-group",children:[e("a",{href:"",className:"final-btn",children:"\u3082\u3046\u4E00\u5EA6\u898B\u308B"}),e("a",{href:"",className:"final-btn",children:"\u3053\u306E\u7269\u8A9E\u3092\u30B7\u30A7\u30A2\u3059\u308B"})]})]}),e("button",{className:"back-to-btn",onClick:r,children:e("img",{src:"/assets/image/back-to-img.svg",alt:""})})]})]})}function fe(){const u=ae();return console.log(u),e("div",{className:"flex-center position-ref full-height full-width bg-white",children:e("div",{className:"message",style:{padding:"10px"},dangerouslySetInnerHTML:{__html:u.state.message}})})}function _e(){return e(ue,{children:c(se,{children:[e(O,{path:"/",element:e(oe,{})}),e(O,{path:"/select",element:e(de,{})}),e(O,{path:"/synopsis",element:e(pe,{})}),e(O,{path:"/talk/:id",element:e(he,{})}),e(O,{path:"/error",element:e(fe,{})})]})})}function ve(){return e(H,{children:e(_e,{})})}re.render(e(ie.StrictMode,{children:e(ve,{})}),document.getElementById("root"));
import{R as e,z as s,W as r,j as t,k as o,F as i,aj as l,a0 as a,A as n,a as c,b as d,v as u,r as m,ad as p,a9 as h,ao as x,J as f,f as g}from"./index-ae48b77e.js";import{t as b,f as j,a8 as v,R as k,s as w,v as C}from"./app-6c1e0ad4.js";import{W as $,s as N,A as _}from"./Loader2-918749a8.js";import{B as y}from"./Button-93446193.js";import{a as P,s as S,m as R}from"./viewports-02ebc782.js";import{I}from"./Icon-1575f594.js";import{W as U,C as z}from"./modal.constants-197ec555.js";const T="/assets/IllustrationPower-92920737.svg",E=$`
  0%{
      background-color: ${e(s,.12)};
  }
  50%{
      background-color: ${e(s,.36)};
      box-shadow: 0 0 12px ${e(s,.36)};
      color: ${r};
      border-color: ${e(s,.9)};
  }
  100%{
      background-color: ${e(s,.12)};
  }
`,D=N(y)`
  border: 1px solid transparent;
  transition: border-color 0.15s ease-out;
  animation: ${E} 3s linear infinite;

  &:hover {
    border: 1px solid ${e(s,.9)};
  }

  ${e=>e.$big&&_`
      padding: 12px 24px;
      font-size: 16px;
      line-height: 24px;
    `}
`,L=N.ul`
  ${P(_`
    ${e=>e.$inline&&_`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      `}
  `)}
`,O=N.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,M=N(I)`
  margin-inline-end: 8px;
`,A=(e,s={})=>t.jsx(i,{id:e,values:{s:e=>t.jsxs("span",{children:[" ",e," "]}),b:e=>t.jsx("b",{children:e}),sm:e=>t.jsxs("small",{children:[" ",e," "]}),...s}});function W({onClickClose:e,onClickUnlock:s,source:r,addon:o,...i}){const a=l.useVariant("trial_premium");return t.jsx(U,{...i,open:i.visible,className:"w-[780px] max-w-full relative !p-0",onClose:e,children:t.jsx(q,{title:t.jsxs(t.Fragment,{children:[t.jsx(J,{children:A(o?"premium.modal.abt.discovered.addon":"premium.modal.abt.discovered")}),t.jsx(J,{children:A("premium.modal.abt.upgradeUnlock")})]}),image:t.jsx(F,{$src:"/assets/IllustrationPower-92920737.svg"}),perks:t.jsxs(V,{children:[t.jsx(G,{children:A("premium.modal.abt.refundable")}),t.jsx(G,{children:A("premium.modal.abt.transferable")}),t.jsx(G,{children:A("premium.modal.abt.features")}),t.jsx(G,{children:A("premium.modal.abt.cancel")})]}),onClickClose:e,onClickUnlock:s,showActions:!0,showClose:!0,source:r,variant:a,className:"min-h-[468px]"})})}const q=({title:e,image:s,perks:r,onClickClose:o,onClickUnlock:l,showActions:n,showClose:c,source:d,variant:u,className:m})=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:`flex ${m}`,children:[c&&t.jsx(z,{className:"absolute top-6 right-6 h-2.5 w-2.5",onClick:()=>o&&o()}),s,t.jsxs(B,{children:[e,r,n&&t.jsxs(K,{children:[t.jsx(a,{event:"upgrade_to_premium_click",data:{origin:d??""},children:t.jsx(Q,{$big:!0,icon:"GetPremium",theme:"premium",onClick:()=>l&&l(),children:t.jsx(i,{id:"premium.modal.abt.cta"})})}),t.jsx(H,{theme:"linkSecondary",onClick:()=>o&&o(),children:t.jsx(i,{id:"premium.modal.notNow"})})]})]})]})}),B=N.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  ${S(_`
    overflow-y: auto;
    justify-content: flex-start;
  `)}
`,F=N.div`
  flex: 1 1;
  background: url(${e=>e.$src}) no-repeat -328px 0;
  background-color: #17181e;
  background-size: 218%;
  /* min-height: 465px; */
  max-width: 340px;

  ${R(_`
    display: none;
  `)}
`,V=N(L)`
  margin: 32px 0 6px;
`,G=N((({color:e,children:s,...r})=>t.jsxs(O,{...r,children:[t.jsx(M,{icon:"Tick",main:e||o})," ",s]})))`
  margin-bottom: 16px;

  span {
    color: ${r};
  }
`,J=N.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
  color: #f2f4fb;

  b {
    color: ${s};
    font-weight: normal;
  }
`,H=N(y)`
  color: ${r};
`,K=N.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  ${R(_`
    flex-direction: column;
    align-items: flex-start;
  `)}
`,Q=N(D)`
  margin-right: 24px;

  ${R(_`
    margin-right: 0;
    margin-bottom: 16px;
  `)}
`,X=e=>t.jsx(W,{...e});class Y extends n.Component{static defaultProps={image:"/assets/premium-header-0e3bcc08.svg",title:"premium.modal.defaultTitle",subtitle:"premium.modal.defaultSubtitle",closeOnUnlock:!1};componentDidMount(){this.props.visible&&(b("premium_modal_open",this.props.guildID,{source:this.props.source,addon:this.props.addon}),j.openPremiumModal(this.props.source,this.props.guild))}onClickUnlock=()=>{b("premium_modal_go",this.props.guildID,{source:this.props.source,addon:this.props.addon});const e=new URLSearchParams;this.props.source&&e.append("s",this.props.source),this.props.addon&&e.append("addon",this.props.addon),this.props.navigate(`/${this.props.locale}/dashboard/${this.props.guildID}/premium?${e.toString()}`),this.props.closeOnUnlock&&this.props.onRequestClose()};onClickClose=()=>{this.props.onRequestClose()};render(){return t.jsx(X,{guildID:this.props.guildID,onRequestClose:this.props.onRequestClose,visible:this.props.visible,title:"MEE6 Premium",source:this.props.source,onClickClose:this.onClickClose,onClickUnlock:this.onClickUnlock,addon:this.props.addon})}}Y.defaultProps={image:"/assets/premium-header-0e3bcc08.svg",title:"premium.modal.defaultTitle",subtitle:"premium.modal.defaultSubtitle",closeOnUnlock:!1};const Z=e=>{const s=c(),{locale:r}=d();return t.jsx(Y,{...e,navigate:s,locale:r})},ee="/assets/StarsLeft-8a5587c4.svg",se="/assets/StarsRight-9dfe626c.svg",re=({isOpen:e,source:s,theme:r,image:o,onClose:i,children:l})=>(u(),d(),t.jsxs(U,{open:e,onClose:i,noStyle:!0,className:"max-w-3xl w-full overflow-visible px-6 sm:px-0",children:[t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 rounded-lg overflow-hidden relative",children:[t.jsx("div",{className:"bg-gradient-to-br from-ai-default to-ai-light hidden lg:block max-h-[200px] lg:max-h-full lg:col-span-2 pl-5 py-5 overflow-hidden relative",children:o}),t.jsxs("div",{className:"col-span-3 bg-dark-900 relative p-10 overflow-hidden z-1",children:[l,t.jsx("div",{className:"absolute w-[200px] h-[200px] top-0 left-0 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-premiumPlus-default blur-[100px] rounded-full pointer-events-none -z-1"}),t.jsx("div",{className:"cursor-pointer absolute top-7 right-9",onClick:i,children:t.jsx(z,{className:"w-2 text-dark-300"})})]})]}),t.jsx("img",{src:ee,className:"absolute pointer-events-none -top-10 -left-4 lg:-top-14 lg:-left-12 sm:block z-1"}),t.jsx("img",{src:se,className:"absolute pointer-events-none right-0 -top-10 lg:-top-16 lg:-right-16 sm:block z-1"})]})),te=n.createContext({setShowPremium:(e,s=null)=>{},setPremiumSource:e=>{}}),oe=e=>{const{guild:s,isPremium:r}=u(),{setShowPremium:t,setPremiumSource:o}=m.useContext(te);return{showPremium:(e,s=null)=>(o(e),t(!0,s),!1),isPremium:()=>p(s)||!!e&&!!s?.plugins[e]&&s?.plugins[e].config.has_free_premium_privilege}},ie=({children:e})=>{const[s,r]=m.useState(!1),[o,i]=m.useState(null),[l,a]=m.useState(void 0),[n,c]=m.useState(!1),{guild:d}=u(),[p,g]=m.useState(!1),k=m.useRef(null),w=m.useRef(null);m.useEffect((()=>{s&&((async()=>{try{const e=await v(Object.assign({"../../../comps/premium/themes/default.tsx":()=>h((()=>import("./default-c84e03d7.js")),["assets/default-c84e03d7.js","assets/index-ae48b77e.js","assets/index-7b51c977.css","assets/app-6c1e0ad4.js","assets/Loader2-918749a8.js","assets/modal.constants-197ec555.js","assets/modal-d7fe36af.css","assets/moment-e0d604bc.js","assets/app-605fcdcb.css"]),"../../../comps/premium/themes/emojis.tsx":()=>h((()=>import("./emojis-5122fffa.js")),["assets/emojis-5122fffa.js","assets/index-ae48b77e.js","assets/index-7b51c977.css","assets/app-6c1e0ad4.js","assets/Loader2-918749a8.js","assets/modal.constants-197ec555.js","assets/modal-d7fe36af.css","assets/moment-e0d604bc.js","assets/app-605fcdcb.css","assets/crown-43f440d9.js"])}),`../../../comps/premium/themes/${l}.tsx`);k.current=e.default,w.current=e.Image,c(!1)}catch(e){c(!0)}finally{g(!0)}})(),b("premium_modal_open",d?.id,{source:l}),x("premium_modal_view",{origin:l},d),f.trackPremiumModal(l||"unknown").catch(console.error),f.trackPremiumInteraction(`modal-${l||"unknown"}`).catch(console.error),j.openPremiumModal(l||"unknown",d))}),[s]);return t.jsxs(te.Provider,{value:{setShowPremium:(e,s=null)=>{i(s),r(e)},setPremiumSource:a},children:[n?t.jsx(Z,{guildID:d?.id,guild:d,visible:s,source:l,onRequestClose:()=>{a(void 0),r(!1)},addon:o,closeOnUnlock:!0}):t.jsx(re,{isOpen:s,source:l,theme:l,onClose:()=>{a(void 0),r(!1)},image:p&&w.current&&t.jsx(w.current,{}),children:p&&k.current&&t.jsx(k.current,{onClose:()=>{a(void 0),r(!1)}})}),e]})},le=()=>{const e=c(),{locale:s}=d(),{guild:r}=u(),t=r?.buffs?.includes("mee6_nft_collection")||r?.buffs?.includes("mee6_web3_buff");return{passEnabled:t,withNFT:o=>{t?o?.with():o?.without?o?.without():e(`/${s}/dashboard/${r?.id}/web3-subscription`)}}},ae=({children:e,onChange:s,className:r,defaultValue:o=0})=>{const[i,l]=m.useState(o),a=m.useRef(null),n=m.useRef([]),c=m.useRef(null),d=e?.flat().filter((e=>"Tab"===e?.type?.displayName));m.useEffect((()=>{const e=n.current[i];if(null==e||!a.current)return;const s=c?.current?.scrollLeft??0,r=c.current.getBoundingClientRect(),t=e.getBoundingClientRect().left-r.left;a.current.style.width=e.offsetWidth+"px",a.current.style.left=t+s+"px"}),[i,n.current[i]]),k((()=>s&&s(i)),[i]);const u=()=>{if(!c.current)return!1;const{scrollWidth:e,clientWidth:s}=c.current;return e>s};return t.jsxs("div",{className:"relative",children:[u()&&t.jsx("div",{className:"absolute bg-gradient-to-r from-dark-700 via-dark-700 to-transparent w-12 top-0 left-0 flex justify-start transform cursor-pointer z-10",onClick:()=>c.current.scrollTo({left:c.current.scrollLeft-200,behavior:"smooth"}),children:t.jsx(w,{className:"text-dark-300"})}),t.jsxs("div",{ref:c,className:`${r} relative flex items-center justify-start border-b border-solid border-grey-400 overflow-auto no-scrollbar ${u()?"px-6":""}`,children:[d.map(((e,s)=>t.jsx(ne,{ref:e=>n.current&&(n.current[s]=e),...e.props,selected:s===i,onClick:()=>l(s)},s))),t.jsx("div",{ref:a,className:"h-0.5 bg-dark-100 rounded-full absolute bottom-0 transition-all duration-200"})]}),u()&&t.jsx("div",{className:"absolute bg-gradient-to-r from-transparent via-dark-700 to-dark-700 w-12 top-0 right-0 flex justify-end transform translate-x-2 cursor-pointer",onClick:()=>c.current.scrollTo({left:c.current.scrollLeft+200,behavior:"smooth"}),children:t.jsx(C,{className:"text-dark-300"})}),d[i]?.props?.children&&t.jsx("div",{className:"mt-4",children:d[i].props.children})]})},ne=n.forwardRef(((e,s)=>{const[r,o]=m.useState(!1);return t.jsx("div",{ref:s,className:g("transition-all duration-200 hover:text-dark-100 font-medium capitalize text-base cursor-pointer flex items-center justify-start whitespace-nowrap",{"!text-white":e.selected,"text-dark-400 ":!e.selected}),onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:e.onClick,children:t.jsxs("div",{className:"px-4 pb-3 flex items-center justify-start whitespace-nowrap",children:[e.icon&&e.icon,t.jsx(i,{id:e.label})]})})}));ne.displayName="Tab";export{T as I,q as P,ee as S,ae as T,le as a,ne as b,se as c,ie as d,oe as u};

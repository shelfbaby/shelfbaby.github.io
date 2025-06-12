import{s as t,A as e}from"./Loader2-918749a8.js";import{b as o,j as i,F as n,a0 as r,x as a,W as l,L as s,T as m,ai as p}from"./index-ae48b77e.js";import{m as x,n as c,d}from"./viewports-02ebc782.js";import{x as h,y as f}from"./app-6c1e0ad4.js";const g={target:"_blank",rel:"noopener noreferrer"},u=[{title:"header.plugins",links:[{to:"/plugins/management",text:"home.footer.link.management"},{to:"/plugins/utilities",text:"home.footer.link.utilities"},{to:"/plugins/social-connectors",text:"home.footer.link.socialConnectors"},{to:"/plugins/engagement-and-fun",text:"home.footer.link.engagementFun"},{to:"/characters",text:"home.footer.link.characters"}]},{title:"home.footer.mee6.title",links:[{to:"/premium?s=footer",text:"home.footer.link.premium"},{to:"/custom-bot",text:"home.footer.link.customBot"},{to:{pathname:"https://discord.gg/mee6"},external:!0,text:"home.footer.link.supportServer"},{to:{pathname:"https://help.mee6.xyz/"},external:!0,text:"home.footer.link.helpDesk"},{to:{pathname:"mailto:support@mee6.bot"},external:!0,text:"home.footer.link.supportContact"}]},{title:"home.footer.company.title",links:[{to:"/careers",text:"home.footer.link.careers",tag:"home.footer.link.careers.hiring"},{to:{pathname:"/terms.html"},external:!0,text:"home.footer.link.terms"},{to:{pathname:"/privacy.html"},external:!0,text:"home.footer.link.policy"},{to:{pathname:"https://mee6.notion.site/Bug-bounty-program-47c17360a9ce498d8caf37035004cf80"},external:!0,text:"home.footer.link.bugBounty"},{to:{pathname:"mailto:hi@mee6bot.com"},external:!0,text:"home.footer.link.contact"}]}],j=t(t.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1240px;
  width: 100%;

  ${x(e`
    padding: 0 16px;
  `)}
`)`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 80px;

  ${c(e`
    flex-direction: column;
  `)}

  ${x(e`
    padding-top: 40px;
    padding-bottom: 40px;
  `)}
`,k=t.div`
  display: flex;
  flex-direction: column;
`,b=t.div`
  margin-top: 24px;
  flex: 1 1;
  max-width: 260px;
`,y=t.div`
  color: ${a};
`,v=t.div`
  ${d(e`
    position: absolute;
    left: 40px;
    bottom: 80px;
  `)}

  ${c(e`
    margin-top: 40px;
  `)}
`,$=t.div`
  display: flex;

  ${c(e`
    justify-content: space-between;
    margin-top: 40px;
  `)}

  ${x(e`
    flex-direction: column;
  `)}
`,w=t.div`
  margin-left: 80px;

  ${c(e`
    flex: 1 1;
    margin-left: 0;
  `)}

  ${x(e`
    margin-top: 8px;
  `)}
`,F=t.div`
  color: ${l};
  margin-bottom: 24px;
`,N=t.ul`
  margin: 0;
  list-style: none;
`,B=t(s)`
  display: block;
  color: ${m};
  transition: color 0.15s ease-out;

  &:hover {
    color: ${p};
  }
`,_=t("a")`
  display: block;
  color: ${m};
  transition: color 0.15s ease-out;
  margin-bottom: 16px;
  &:hover {
    color: ${p};
  }
`,C=t(B)`
  margin-bottom: 16px;
`;function D({className:t}){const{locale:e}=o();return i.jsx("footer",{className:t,children:i.jsxs(j,{children:[i.jsxs(k,{children:[i.jsx(h,{}),i.jsx(b,{children:i.jsx(n,{id:"home.footer.pitch"})})]}),i.jsx($,{children:u.map((t=>i.jsxs(w,{children:[i.jsx(F,{children:i.jsx(n,{id:t.title})}),i.jsx(N,{children:t.links.map((t=>i.jsx(r,{event:"footer_click",data:{label:t.text.replace("home.footer.link.","")},children:t.external?i.jsx(_,{target:"_blank",href:t.to?.pathname,children:i.jsx(n,{id:t.text})}):i.jsxs(C,{to:`/${e}${t.to}`,..."string"!=typeof t.to?g:{},children:[i.jsx(n,{id:t.text}),t.tag&&i.jsx("div",{className:"inline-block text-xs text-dark-100 font-semibold uppercase bg-brand-hover rounded px-2 py-1 ml-2",children:i.jsx(n,{id:t.tag})})]})},t.text)))})]},t.title)))}),i.jsxs(v,{children:[i.jsx(f,{direction:"top"}),i.jsx(y,{children:i.jsx(n,{id:"home.footer.copyright",values:{year:(new Date).getFullYear()}})})]})]})})}export{D as F};

(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{54:function(e,t,n){e.exports=n(87)},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),c=(n(59),n(7)),i=n(14),u=n(13),s=n(12),m=(n(60),n(61),n(8)),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={title:a.props.title,size:a.props.size,marginTop:a.props.marginTop,toggle:0},a}return Object(i.a)(n,[{key:"onMouseEnter",value:function(){this.setState({toggle:1})}},{key:"onMouseLeave",value:function(){this.setState({toggle:0})}},{key:"render",value:function(){var e=this,t=this.state.toggle;return r.a.createElement("div",{className:"button",onMouseEnter:function(){return e.onMouseEnter()},onMouseLeave:function(){return e.onMouseLeave()}},r.a.createElement(m.Spring,{from:{fontSize:this.state.size,marginTop:this.state.marginTop},to:{color:t?"black":"rgb(70, 70, 70)"},config:{friction:10}},(function(t){return r.a.createElement("h1",{style:t},e.state.title)})),r.a.createElement(m.Spring,{from:{opacity:0,backgroundColor:"black"},to:{opacity:t?1:0,width:t?"100%":"0%",left:t?"0%":"50%"},config:m.config.gentle},(function(e){return r.a.createElement("div",{style:e,id:"underline"})})))}}]),n}(r.a.Component),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={toggle:window.pageYOffset},a}return Object(i.a)(n,[{key:"handleScroll",value:function(){this.setState({toggle:window.pageYOffset})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll.bind(this))}},{key:"render",value:function(){var e=this.state.toggle;return r.a.createElement(m.Spring,{to:{boxShadow:e?"0 0px 5px 5px rgba(100, 100, 100, 0.19)":"0 0px 0px 0px white",borderBottom:e?"0px solid white":"1px solid #ccc"},config:m.config.gentle},(function(e){return r.a.createElement("nav",{style:e},r.a.createElement("a",{href:"#about-me"},r.a.createElement(p,{title:"Jordan Tay",size:"25px",marginTop:"10%"})),r.a.createElement("div",{className:"nav-menu"},r.a.createElement("ul",{className:"nav-items"},r.a.createElement("li",null,r.a.createElement("a",{href:"#projects"},r.a.createElement(p,{title:"Projects",size:"17px",marginTop:"15%"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact"},r.a.createElement(p,{title:"Contact",size:"17px",marginTop:"15%"}))))))}))}}]),n}(r.a.Component),E=(n(77),r.a.Component,n(15)),f=(n(78),n(5));var b=function(){var e=Object(a.useState)(0),t=Object(E.a)(e,2),n=t[0],l=t[1],o=Object(f.b)({boxShadow:n?"0 10px 20px 0px rgba(0, 0, 0, 0.19)":"0 0px 0px 0px white"});return r.a.createElement("div",{id:"about-me"},r.a.createElement("h1",{className:"about-header"},"About Me"),r.a.createElement("hr",null),r.a.createElement("div",{className:"about-container"},r.a.createElement(f.a.div,{style:o,className:"about-card",onMouseEnter:function(){return l(1)},onMouseLeave:function(){return l(0)}},r.a.createElement("div",{className:"about-card-content"},r.a.createElement("h1",null,"Hello!"),r.a.createElement("hr",null),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))};n(79);var h=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Rhythmap"))},v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Personal Website"))},g=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"ARM11"))},x=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"LinkUp"))},j=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"TOS Game"))},y=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Minesweeper"))},O=function(){var e=Object(a.useState)(null),t=Object(E.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(null),c=Object(E.a)(o,2),i=c[0],u=c[1],s=["Rhythmap","Personal Website","ARM11 Assembler and Emulator (Group Project)","LinkUp (IC Hack)","TOS Game","Minesweeper"],m=Object(f.c)(s.length,s.map((function(e,t){return{boxShadow:n===t||i===t?"0 0px 20px 0px rgba(0, 0, 0, 0.19)":"0 0px 0px 0px white",transform:i===t?"scale(0.95)":"scale(0.9)"}}))),p=Object(a.useState)(0),d=Object(E.a)(p,2),b=d[0],O=d[1],k=Object(f.b)({boxShadow:b?"0 10px 20px 0px rgba(0, 0, 0, 0.19)":"0 0px 0px 0px white"}),w=Object(f.b)({opacity:null!==i?0:1}),N=[r.a.createElement(h,null),r.a.createElement(v,null),r.a.createElement(g,null),r.a.createElement(x,null),r.a.createElement(j,null),r.a.createElement(y,null)],S=Object(f.c)(N.length,N.map((function(e,t){return{filter:null!==i?"blur(0px)":"blur(8px)",transform:"translateY(".concat(-311*i,"px) scale(").concat(1-Math.abs(t-i)/(2*N.length),")")}})));return r.a.createElement("div",{id:"projects"},r.a.createElement("h1",{className:"project-header"},"Projects"),r.a.createElement("hr",null),r.a.createElement("div",{className:"cards-container"},r.a.createElement("div",{className:"project-list"},m.map((function(e,t){return r.a.createElement(f.a.div,{key:t,onClick:function(){return u(t)},onMouseEnter:function(){return l(t)},onMouseLeave:function(){return l(null)},style:e,className:"project-list-item"},r.a.createElement("h2",null,s[t]))}))),r.a.createElement(f.a.div,{style:k,className:"project-description",onMouseEnter:function(){return O(1)},onMouseLeave:function(){return O(0)}},r.a.createElement(f.a.div,{style:w,className:"project-description-cover"},r.a.createElement("h4",null,"Project description"),r.a.createElement("p",null,"(Inspired by Smart Stack)")),S.map((function(e,t){return r.a.createElement(f.a.div,{key:t,style:e,className:"project-description-item"},N[t])})))))},k=(n(80),n(111)),w=n(110),N=n(109),S=n(39),M=n.n(S),T=n(49),C=n.n(T),L=n(48),q=n.n(L),P=n(50),z=n.n(P),U=n(51),A=n.n(U);var G=function(e){var t=Object(a.useState)(0),n=Object(E.a)(t,2),l=n[0],o=n[1],c=Object(a.useState)(0),i=Object(E.a)(c,2),u=i[0],s=i[1],p=Object(a.useState)(0),d=Object(E.a)(p,2),b=d[0],h=d[1],v=Object(a.useState)(0),g=Object(E.a)(v,2),x=g[0],j=g[1],y=Object(a.useState)(0),O=Object(E.a)(y,2),S=O[0],T=O[1],L=Object(f.b)({boxShadow:l?"0 10px 20px 0px rgba(0, 0, 0, 0.19)":"0 0px 0px 0px white"}),P=Object(f.b)({filter:u?"blur(8px)":"blur(0px)",opacity:u?.8:1}),U=Object(f.b)({opacity:u?1:0,zIndex:u?1:-1});return r.a.createElement("div",{id:"contact"},r.a.createElement("h1",{className:"contact-header"},"Contact"),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-container",onMouseEnter:function(){o(1)},onMouseLeave:function(){o(0)},onClick:function(){s((function(e){return!e}))}},r.a.createElement(f.a.div,{style:L,className:"card-stack-top"},r.a.createElement(f.a.div,{style:P,className:"card-stack-top-content"},r.a.createElement("h1",null,"Contact"),r.a.createElement("hr",null),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),r.a.createElement(f.a.div,{style:U,className:"card-stack-bottom"},r.a.createElement("div",{className:"card-stack-bottom-content"},r.a.createElement("h2",null,"Hello"),r.a.createElement("div",{className:"icon-list"},r.a.createElement("a",{href:"https://www.github.com",className:"circular-link",target:"_blank",rel:"noopener noreferrer",onClick:function(){s((function(e){return!e}))}},r.a.createElement(w.a,{title:r.a.createElement("span",{className:"button-tooltip"},"GitHub"),TransitionComponent:N.a,TransitionProps:{timeout:600}},r.a.createElement(k.a,{className:"icon-button",onMouseEnter:function(){return T(1)},onMouseLeave:function(){return T(0)}},r.a.createElement(m.Transition,{items:S,from:{position:"absolute",opacity:1},enter:{opacity:1},leave:{opacity:0}},(function(e){return e?function(e){return r.a.createElement(M.a,{style:e,id:"github-after"})}:function(e){return r.a.createElement(M.a,{style:e})}}))))),r.a.createElement("a",{href:"https://www.gmail.com",className:"circular-link",target:"_blank",rel:"noopener noreferrer",onClick:function(){s((function(e){return!e}))}},r.a.createElement(w.a,{title:r.a.createElement("span",{className:"button-tooltip"},"Send me an email"),TransitionComponent:N.a,TransitionProps:{timeout:600}},r.a.createElement(k.a,{className:"icon-button",onMouseEnter:function(){return j(1)},onMouseLeave:function(){return j(0)}},r.a.createElement(m.Transition,{items:x,from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}},(function(e){return e?function(e){return r.a.createElement(q.a,{style:e})}:function(e){return r.a.createElement(C.a,{style:e})}}))))),r.a.createElement("a",{href:"https://www.drive.google.com",className:"circular-link",target:"_blank",rel:"noopener noreferrer",onClick:function(){s((function(e){return!e}))}},r.a.createElement(w.a,{title:r.a.createElement("span",{className:"button-tooltip"},"CV"),TransitionComponent:N.a,TransitionProps:{timeout:600}},r.a.createElement(k.a,{className:"icon-button",onMouseEnter:function(){return h(1)},onMouseLeave:function(){return h(0)}},r.a.createElement(m.Transition,{items:b,from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}},(function(e){return e?function(e){return r.a.createElement(z.a,{style:e})}:function(e){return r.a.createElement(A.a,{style:e})}}))))))))))};var H=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"app"},r.a.createElement(b,null),r.a.createElement(O,null),r.a.createElement(G,null)))};o.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.f23a5f8d.chunk.js.map
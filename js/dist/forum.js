module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=20)}([function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionsUserPage"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/Navigation"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),o=n(1),r=n(16),i=n(17),c=n.n(i),l=n(3),u=n.n(l),p=n(4),d=n.n(p),f=n(7),h=n.n(f),b=n(8),g=n.n(b),x=n(9),y=n.n(x),v=n(5),N=n.n(v),B=n(10),_=n.n(B),j=n(11),I=n.n(j),k=n(12),T=n.n(k),L=n(6),O=n.n(L),D=n(13),P=n.n(D),w=n(14),R=n.n(w),S=n(2),A=n.n(S),E=n(15),M=n.n(E),C=n(18),z=n.n(C),U=n(19),q=n.n(U);a.a.initializers.add("vascan/digi-ui",(function(){function t(){if(a.a.current.matches(A.a))return m("a",{id:"menu_open_id",class:"Button Button--icon hasIcon",title:"Menu",active:"false",type:"button",onclick:e.bind(this)},m("i",{class:"fas fa-bars Button-icon"}))}function e(){var t=document.getElementsByClassName("IndexPage-nav")[0];t.classList.contains("openMenu_class")?t.classList.remove("openMenu_class"):t.classList.add("openMenu_class")}Object(r.extend)(c.a.prototype,"sidebarItems",(function(t){t.has("controls")&&t.remove("controls"),t.add("Imaginii",u.a.component({title:"Imaginii",className:"Button Button--primary",onclick:function(){for(var t=0;t<e.length;t++)null!=e[t]&&(0==e[t].getElementsByTagName("img").length?e[t].style.display="none":e[t].style.display="block")}.bind(this)},"Imaginii")),t.add("Text transliterat",u.a.component({title:"Text transliterat",className:"Button Button--primary",onclick:function(){for(var t=0;t<e.length;t++)null!=e[t]&&(0!=e[t].getElementsByTagName("img").length||/[^a-z][а-я]/.test(e[t].innerHTML)?e[t].style.display="none":e[t].style.display="block")}.bind(this)},"Text transliterat")),t.add("Text in chirilica",u.a.component({title:"Text in chirilica",className:"Button Button--primary",onclick:function(){for(var t=0;t<e.length;t++)null!=e[t]&&(0==e[t].getElementsByTagName("img").length&&/[^a-z][а-я]/.test(e[t].innerHTML)?e[t].style.display="block":e[t].style.display="none")}.bind(this)},"Text in chirilica"));var e=document.getElementsByClassName("PostStream-item")[0];e=document.getElementsByClassName("Post-body")[0],e=document.getElementsByTagName("p")})),Object(o.extend)(A.a.prototype,"init",(function(){})),Object(o.extend)(A.a.prototype,"sidebarItems",(function(t){})),Object(o.extend)(A.a.prototype,"actionItems",(function(t){t.has("refresh")&&t.remove("refresh"),t.has("markAllAsRead")&&t.remove("markAllAsRead")})),Object(o.extend)(A.a.prototype,"viewItems",(function(t){t.has("sort")&&t.remove("sort"),t.add("jumbotron",m("div",{class:"jumbotron_class"})),t.add("Text_title_center_block",m("p",{class:"Text_title_center_block_class"},m("span",null," What's new")))})),Object(o.override)(z.a.prototype,"view",(function(){var e=a.a.history,n=a.a.pane;return m("div",{className:"Navigation ButtonGroup "+(this.attrs.className||""),onmouseenter:n&&n.show.bind(n),onmouseleave:n&&n.onmouseleave.bind(n)},e.canGoBack()?[this.getBackButton(),this.getPaneButton()]:[t(),this.getDrawerButton()])})),Object(o.extend)(d.a.prototype,"view",(function(t){var e;try{(a.a.current.matches(A.a)||a.a.current.matches(M.a))&&((e=t.children[2].attrs.className.split(" "))[0]+="--grid",t.children[2].attrs.className=e.join(" "),(e=t.children[2].children[0].attrs.className.split(" "))[0]+="--grid",t.children[2].children[0].attrs.className=e.join(" "),(e=t.children[2].children[2].attrs.className.split(" "))[0]+="--grid",t.children[2].children[2].attrs.className=e.join(" "),(e=t.children[2].children[2].children[0].attrs.className.split(" "))[0]+="--grid",t.children[2].children[2].children[0].attrs.className=e.join(" "))}catch(t){}})),Object(o.extend)(q.a.prototype,"view",(function(t){var e;try{(a.a.current.matches(A.a)||a.a.current.matches(M.a))&&((e=t.children[0].attrs.className.split(" "))[0]+="--grid",t.children[0].attrs.className=e.join(" "))}catch(t){}}))})),Object(o.override)(d.a.prototype,"view",(function(){var t=this.attrs.discussion,e=t.user(),n=t.isUnread(),s=t.isRead(),o=!this.showRepliesCount()&&n,r=0,i=h.a.controls(t,this).toArray(),c=this.elementAttrs();if(this.attrs.params.q){var l=t.mostRelevantPost();l&&(r=l.number());var u=escapeRegExp(this.attrs.params.q);this.highlightRegExp=new RegExp(u+"|"+u.trim().replace(/\s+/g,"|"),"gi")}else r=Math.min(t.lastPostNumber(),(t.lastReadPostNumber()||0)+1);return m("div",c,i.length?g.a.component({icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"},i):"",m("span",{className:"Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic"+(n?"":" disabled"),onclick:this.markAsRead.bind(this)},y()("fas fa-check")),m("div",{className:"DiscussionListItem-content Slidable-content"+(n?" unread":"")+(s?" read":"")},m(N.a,{href:e?a.a.route.discussion(t,r):"#",className:"DiscussionListItem-author",title:_()(a.a.translator.trans("core.forum.discussion_list.started_text",{user:e,ago:I()(t.createdAt())}))},e.data.attributes.avatarUrl="",T()(e,{title:""})),m("ul",{className:"DiscussionListItem-badges badges"},O()(t.badges().toArray())),m(N.a,{href:a.a.route.discussion(t,r),className:"DiscussionListItem-main"},m("h3",{className:"DiscussionListItem-title"},P()(t.title(),this.highlightRegExp)),m("ul",{className:"DiscussionListItem-info"},O()(this.infoItems().toArray()))),m("span",{tabindex:"0",role:"button",className:"DiscussionListItem-count",onclick:this.markAsRead.bind(this),title:o?a.a.translator.trans("core.forum.discussion_list.mark_as_read_tooltip"):""},R()(t[o?"unreadCount":"replyCount"]()))))}))}]);
//# sourceMappingURL=forum.js.map
module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=24)}([function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionsUserPage"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e){t.exports=flarum.core.compat["components/Navigation"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["components/ComposerBody"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.extensions["fof-upload"]},function(t,e,n){"use strict";n.r(e);var o=n(0),s=n.n(o),a=n(1),i=n(10),r=n(11),c=n.n(r),l=n(3),u=n.n(l),d=n(5),p=n.n(d),f=n(12),h=n.n(f),b=n(13),g=n.n(b),v=n(14),y=n.n(v),x=n(7),N=n.n(x),B=n(15),_=n.n(B),j=n(16),k=n.n(j),C=(n(9),n(4)),I=n.n(C),L=n(17),w=n.n(L),O=n(18),T=n.n(O),P=n(2),E=n.n(P),D=n(8),M=n.n(D),A=n(19),R=n.n(A),S=n(20),z=n.n(S),q=n(21),F=n.n(q),G=n(22),H=n.n(G),U=n(6),J=n.n(U);function K(){s.a.current.matches(E.a)&&(document.getElementsByClassName("textarea_create_post")[0].value.length>0?document.getElementsByClassName("fof-upload-button")[0].classList.remove("big_upload_icon"):document.getElementsByClassName("fof-upload-button")[0].classList.add("big_upload_icon"))}s.a.initializers.add("vascan/digi-ui",(function(){function t(){if(s.a.current.matches(E.a))return m("a",{id:"menu_open_id",class:"Button Button--icon hasIcon",title:"Menu",active:"false",type:"button",onclick:e.bind(this)},m("i",{class:"fas fa-bars Button-icon"}))}function e(){var t=document.getElementsByClassName("IndexPage-nav")[0];t.classList.contains("openMenu_class")?t.classList.remove("openMenu_class"):t.classList.add("openMenu_class")}Object(i.extend)(c.a.prototype,"sidebarItems",(function(t){t.has("controls")&&t.remove("controls"),t.add("Imagini",u.a.component({title:"Imagini",className:"Button Button--primary",onclick:function(){for(var t=0;t<e.length;t++)null!=e[t]&&(0==e[t].getElementsByTagName("img").length?e[t].style.display="none":e[t].style.display="block")}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.images"))),t.add("Text transliterat",u.a.component({title:"Text transliterat",className:"Button Button--primary",onclick:function(){for(var t=0;t<e.length;t++)null!=e[t]&&(0!=e[t].getElementsByTagName("img").length||/[^a-z][а-я]/.test(e[t].innerHTML)?e[t].style.display="none":e[t].style.display="block")}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.trans_text"))),t.add("Text in chirilica",u.a.component({title:"Text in chirilica",className:"Button Button--primary",onclick:function(){for(var t=0;t<e.length;t++)null!=e[t]&&(0==e[t].getElementsByTagName("img").length&&/[^a-z][а-я]/.test(e[t].innerHTML)?e[t].style.display="block":e[t].style.display="none")}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.cyr_text")));var e=document.getElementsByClassName("PostStream-item")[0];e=document.getElementsByClassName("Post-body")[0],e=document.getElementsByTagName("p")})),Object(a.extend)(E.a.prototype,"init",(function(){})),Object(a.extend)(E.a.prototype,"sidebarItems",(function(t){})),Object(a.extend)(E.a.prototype,"actionItems",(function(t){t.has("refresh")&&t.remove("refresh"),t.has("markAllAsRead")&&t.remove("markAllAsRead")})),Object(a.extend)(E.a.prototype,"viewItems",(function(t){t.has("sort")&&t.remove("sort"),t.add("jumbotron",m("div",{class:"jumbotron_class"})),t.add("Text_title_center_block",m("p",{class:"Text_title_center_block_class"},m("span",null," ",s.a.translator.trans("digi-ui.forum.what_is_new"))))})),Object(a.override)(R.a.prototype,"view",(function(){var e=s.a.history,n=s.a.pane;return m("div",{className:"Navigation ButtonGroup "+(this.attrs.className||""),onmouseenter:n&&n.show.bind(n),onmouseleave:n&&n.onmouseleave.bind(n)},e.canGoBack()?[this.getBackButton(),this.getPaneButton()]:[t(),this.getDrawerButton()])})),Object(a.extend)(p.a.prototype,"view",(function(t){var e;try{(s.a.current.matches(E.a)||s.a.current.matches(M.a))&&((e=t.children[2].attrs.className.split(" "))[0]+="--grid",t.children[2].attrs.className=e.join(" "),(e=t.children[2].children[0].attrs.className.split(" "))[0]+="--grid",t.children[2].children[0].attrs.className=e.join(" "),(e=t.children[2].children[2].attrs.className.split(" "))[0]+="--grid",t.children[2].children[2].attrs.className=e.join(" "),(e=t.children[2].children[2].children[0].attrs.className.split(" "))[0]+="--grid",t.children[2].children[2].children[0].attrs.className=e.join(" "))}catch(t){}})),Object(a.extend)(z.a.prototype,"view",(function(t){var e;try{(s.a.current.matches(E.a)||s.a.current.matches(M.a))&&((e=t.children[0].attrs.className.split(" "))[0]+="--grid",t.children[0].attrs.className=e.join(" "))}catch(t){}})),Object(a.override)(n(23).components.FileManagerButton.prototype,"view",(function(t){return s.a.current.matches(E.a)?u.a.component({className:"Button fof-upload-button Button--icon big_upload_icon",onclick:this.fileManagerButtonClicked.bind(this),icon:"fas fa-folder-open",title:s.a.translator.trans("fof-upload.forum.buttons.media")}):u.a.component({className:"Button fof-upload-button Button--icon",onclick:this.fileManagerButtonClicked.bind(this),icon:"fas fa-folder-open",title:s.a.translator.trans("fof-upload.forum.buttons.media")})})),Object(a.extend)(J.a.prototype,"oninput",K),Object(a.override)(J.a.prototype,"buildEditorParams",(function(){var t=this;return{classNames:["FormControl","Composer-flexible","TextEditor-editor",this.attrs.class1],disabled:this.disabled,placeholder:this.attrs.placeholder||"",value:this.value,oninput:this.oninput.bind(this),inputListeners:[],onsubmit:function(){t.onsubmit(),m.redraw()}}})),Object(a.override)(F.a.prototype,"view",(function(){return m("div",{when:this.hasChanges.bind(this)},m("div",{className:"ComposerBody "+(this.attrs.className||"")},m("div",{className:"ComposerBody-content"},m("ul",{className:"ComposerBody-header"},I()(this.headerItems().toArray())),m("div",{className:"ComposerBody-editor"},J.a.component({class1:"textarea_create_post",submitLabel:this.attrs.submitLabel,placeholder:"",disabled:this.loading||this.attrs.disabled,composer:this.composer,preview:this.jumpToPreview&&this.jumpToPreview.bind(this),onchange:this.composer.fields.content,onsubmit:this.onsubmit.bind(this),value:this.composer.fields.content()}))),H.a.component({className:"ComposerBody-loading"+(this.loading?" active":"")})))}))})),Object(a.override)(p.a.prototype,"view",(function(){var t=this.attrs.discussion,e=t.user(),n=t.isUnread(),o=t.isRead(),a=!this.showRepliesCount()&&n,i=0,r=h.a.controls(t,this).toArray(),c=this.elementAttrs();if(this.attrs.params.q){var l=t.mostRelevantPost();l&&(i=l.number());var u=escapeRegExp(this.attrs.params.q);this.highlightRegExp=new RegExp(u+"|"+u.trim().replace(/\s+/g,"|"),"gi")}else i=Math.min(t.lastPostNumber(),(t.lastReadPostNumber()||0)+1);return m("div",c,r.length?g.a.component({icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"},r):"",m("span",{className:"Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic"+(n?"":" disabled"),onclick:this.markAsRead.bind(this)},y()("fas fa-check")),m("div",{className:"DiscussionListItem-content Slidable-content"+(n?" unread":"")+(o?" read":"")},m(N.a,{href:e?s.a.route.discussion(t,i):"#",className:"DiscussionListItem-author",title:_()(s.a.translator.trans("core.forum.discussion_list.started_text",{user:e,ago:k()(t.createdAt())}))},m("span",{class:"Avatar "})),m("ul",{className:"DiscussionListItem-badges badges"},I()(t.badges().toArray())),m(N.a,{href:s.a.route.discussion(t,i),className:"DiscussionListItem-main"},m("h3",{className:"DiscussionListItem-title"},w()(t.title(),this.highlightRegExp)),m("ul",{className:"DiscussionListItem-info"},I()(this.infoItems().toArray()))),m("span",{tabindex:"0",role:"button",className:"DiscussionListItem-count",onclick:this.markAsRead.bind(this),title:a?s.a.translator.trans("core.forum.discussion_list.mark_as_read_tooltip"):""},T()(t[a?"unreadCount":"replyCount"]()))))}))}]);
//# sourceMappingURL=forum.js.map
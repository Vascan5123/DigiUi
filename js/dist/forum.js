module.exports=function(t){var e={};function s(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=24)}([function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionsUserPage"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e){t.exports=flarum.core.compat["components/Navigation"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["components/ComposerBody"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.extensions["fof-upload"]},function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),o=s(1),i=s(10),r=s(11),l=s.n(r),c=s(3),u=s.n(c),d=s(5),p=s.n(d),g=s(12),f=s.n(g),h=s(13),y=s.n(h),b=s(14),B=s.n(b),N=s(7),v=s.n(N),x=s(15),E=s.n(x),_=s(16),C=s.n(_),T=(s(9),s(4)),P=s.n(T),L=s(17),j=s.n(L),I=s(18),k=s.n(I),S=s(2),O=s.n(S),w=s(8),D=s.n(w),M=s(19),A=s.n(M),R=s(20),z=s.n(R),q=s(21),F=s.n(q),G=s(22),H=s.n(G),U=s(6),J=s.n(U);function K(){a.a.current.matches(O.a)&&(document.getElementsByClassName("textarea_create_post")[0].value.length>0?document.getElementsByClassName("fof-upload-button")[0].classList.remove("big_upload_icon"):document.getElementsByClassName("fof-upload-button")[0].classList.add("big_upload_icon"))}a.a.initializers.add("vascan/digi-ui",(function(){function t(){if(a.a.current.matches(O.a))return m("a",{id:"menu_open_id",class:"Button Button--icon hasIcon",title:"Menu",active:"false",type:"button",onclick:e.bind(this)},m("i",{class:"fas fa-bars Button-icon"}))}function e(){var t=document.getElementsByClassName("IndexPage-nav")[0];t.classList.contains("openMenu_class")?t.classList.remove("openMenu_class"):t.classList.add("openMenu_class")}Object(i.extend)(l.a.prototype,"sidebarItems",(function(t){t.has("controls")&&t.remove("controls"),t.add("Imagini_button",u.a.component({id:"Button_text_imagini",title:"Imagini",className:"Button Button--primary",onclick:function(){if(!document.getElementById("Button_text_imagini").classList.contains("disabled")){var t=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");if(t.length>0){for(var s=0;s<t.length;s++)t[s].style.display="none";for(var n=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img"),a=0;a<n.length;a++)n[a].style.display="block"}else{console.log("span not found");for(var o=0;o<e.length;o++)null!=e[o]&&(0==e[o].getElementsByTagName("img").length?e[o].style.display="none":e[o].style.display="block")}}}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.images"))),t.add("Text transliterat_button",u.a.component({id:"Button_text_transliterat",title:"Text transliterat",className:"Button Button--primary",onclick:function(){if(!document.getElementById("Button_text_transliterat").classList.contains("disabled"))if(document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span").length>0){for(var t=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),s=0;s<t.length;s++)t[s].classList.contains("transliterat")&&(t[s].style.display="block");for(var n=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img"),a=0;a<n.length;a++)n[a].style.display="none";for(var o=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),i=0;i<o.length;i++)o[i].classList.contains("chirilic")&&(o[i].style.display="none")}else{console.log("span not found");for(var r=0;r<e.length;r++)null!=e[r]&&(0!=e[r].getElementsByTagName("img").length||/[^a-z][а-я]/.test(e[r].innerHTML)?e[r].style.display="none":e[r].style.display="block")}}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.trans_text"))),t.add("Text in chirilica_button",u.a.component({id:"Button_text_chirilica",title:"Text in chirilica",className:"Button Button--primary",onclick:function(){if(!document.getElementById("Button_text_chirilica").classList.contains("disabled"))if(document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span").length>0){for(var t=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),s=0;s<t.length;s++)t[s].classList.contains("chirilic")&&(t[s].style.display="block");for(var n=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img"),a=0;a<n.length;a++)n[a].style.display="none";for(var o=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),i=0;i<o.length;i++)o[i].classList.contains("transliterat")&&(o[i].style.display="none")}else{console.log("span not found");for(var r=0;r<e.length;r++)null!=e[r]&&(0==e[r].getElementsByTagName("img").length&&/[^a-z][а-я]/.test(e[r].innerHTML)?e[r].style.display="block":e[r].style.display="none")}}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.cyr_text")));var e=document.getElementsByClassName("PostStream-item")[0];e=document.getElementsByClassName("Post-body")[0],e=document.getElementsByTagName("p");var s=document.getElementsByClassName("Post-body")[0];if(s){var n=document.getElementById("Button_text_imagini");(s=document.getElementsByClassName("Post-body")[0].getElementsByTagName("img")).length<1&&n.classList.add("disabled")}if(document.getElementsByClassName("transliterat").length<1){var a=document.getElementById("Button_text_transliterat");a&&a.classList.add("disabled")}if(document.getElementsByClassName("chirilic").length<1){var o=document.getElementById("Button_text_chirilica");o&&o.classList.add("disabled")}})),Object(o.extend)(O.a.prototype,"init",(function(){})),Object(o.extend)(O.a.prototype,"sidebarItems",(function(t){})),Object(o.extend)(O.a.prototype,"actionItems",(function(t){t.has("refresh")&&t.remove("refresh"),t.has("markAllAsRead")&&t.remove("markAllAsRead")})),Object(o.extend)(O.a.prototype,"viewItems",(function(t){t.has("sort")&&t.remove("sort"),t.add("jumbotron",m("div",{class:"jumbotron_class"})),t.add("Text_title_center_block",m("p",{class:"Text_title_center_block_class"},m("span",null," ",a.a.translator.trans("digi-ui.forum.what_is_new"))))})),Object(o.override)(A.a.prototype,"view",(function(){var e=a.a.history,s=a.a.pane;return m("div",{className:"Navigation ButtonGroup "+(this.attrs.className||""),onmouseenter:s&&s.show.bind(s),onmouseleave:s&&s.onmouseleave.bind(s)},e.canGoBack()?[this.getBackButton(),this.getPaneButton()]:[t(),this.getDrawerButton()])})),Object(o.extend)(p.a.prototype,"view",(function(t){var e;try{(a.a.current.matches(O.a)||a.a.current.matches(D.a))&&((e=t.children[2].attrs.className.split(" "))[0]+="--grid",t.children[2].attrs.className=e.join(" "),(e=t.children[2].children[0].attrs.className.split(" "))[0]+="--grid",t.children[2].children[0].attrs.className=e.join(" "),(e=t.children[2].children[2].attrs.className.split(" "))[0]+="--grid",t.children[2].children[2].attrs.className=e.join(" "),(e=t.children[2].children[2].children[0].attrs.className.split(" "))[0]+="--grid",t.children[2].children[2].children[0].attrs.className=e.join(" "))}catch(t){}})),Object(o.extend)(z.a.prototype,"view",(function(t){var e;try{(a.a.current.matches(O.a)||a.a.current.matches(D.a))&&((e=t.children[0].attrs.className.split(" "))[0]+="--grid",t.children[0].attrs.className=e.join(" "))}catch(t){}})),Object(o.override)(s(23).components.FileManagerButton.prototype,"view",(function(t){return a.a.current.matches(O.a)?u.a.component({className:"Button fof-upload-button Button--icon big_upload_icon",onclick:this.fileManagerButtonClicked.bind(this),icon:"fas fa-folder-open",title:a.a.translator.trans("fof-upload.forum.buttons.media")}):u.a.component({className:"Button fof-upload-button Button--icon",onclick:this.fileManagerButtonClicked.bind(this),icon:"fas fa-folder-open",title:a.a.translator.trans("fof-upload.forum.buttons.media")})})),Object(o.extend)(J.a.prototype,"oninput",K),Object(o.override)(J.a.prototype,"buildEditorParams",(function(){var t=this;return{classNames:["FormControl","Composer-flexible","TextEditor-editor",this.attrs.class1],disabled:this.disabled,placeholder:this.attrs.placeholder||"",value:this.value,oninput:this.oninput.bind(this),inputListeners:[],onsubmit:function(){t.onsubmit(),m.redraw()}}})),Object(o.override)(F.a.prototype,"view",(function(){return m("div",{className:"ComposerBody "+(this.attrs.className||"")},m("div",{className:"ComposerBody-content"},m("ul",{className:"ComposerBody-header"},P()(this.headerItems().toArray())),m("div",{className:"ComposerBody-editor"},J.a.component({class1:"textarea_create_post",submitLabel:this.attrs.submitLabel,placeholder:"",disabled:this.loading||this.attrs.disabled,composer:this.composer,preview:this.jumpToPreview&&this.jumpToPreview.bind(this),onchange:this.composer.fields.content,onsubmit:this.onsubmit.bind(this),value:this.composer.fields.content()}))),H.a.component({className:"ComposerBody-loading"+(this.loading?" active":"")}))}))})),Object(o.override)(p.a.prototype,"view",(function(){var t=this.attrs.discussion,e=t.user(),s=t.isUnread(),n=t.isRead(),o=!this.showRepliesCount()&&s,i=0,r=f.a.controls(t,this).toArray(),l=this.elementAttrs();if(this.attrs.params.q){var c=t.mostRelevantPost();c&&(i=c.number());var u=escapeRegExp(this.attrs.params.q);this.highlightRegExp=new RegExp(u+"|"+u.trim().replace(/\s+/g,"|"),"gi")}else i=Math.min(t.lastPostNumber(),(t.lastReadPostNumber()||0)+1);return m("div",l,r.length?y.a.component({icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"},r):"",m("span",{className:"Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic"+(s?"":" disabled"),onclick:this.markAsRead.bind(this)},B()("fas fa-check")),m("div",{className:"DiscussionListItem-content Slidable-content"+(s?" unread":"")+(n?" read":"")},m(v.a,{href:e?a.a.route.discussion(t,i):"#",className:"DiscussionListItem-author",title:E()(a.a.translator.trans("core.forum.discussion_list.started_text",{user:e,ago:C()(t.createdAt())}))},m("span",{class:"Avatar "})),m("ul",{className:"DiscussionListItem-badges badges"},P()(t.badges().toArray())),m(v.a,{href:a.a.route.discussion(t,i),className:"DiscussionListItem-main"},m("h3",{className:"DiscussionListItem-title"},j()(t.title(),this.highlightRegExp)),m("ul",{className:"DiscussionListItem-info"},P()(this.infoItems().toArray()))),m("span",{tabindex:"0",role:"button",className:"DiscussionListItem-count",onclick:this.markAsRead.bind(this),title:o?a.a.translator.trans("core.forum.discussion_list.mark_as_read_tooltip"):""},k()(t[o?"unreadCount":"replyCount"]()))))}))}]);
//# sourceMappingURL=forum.js.map
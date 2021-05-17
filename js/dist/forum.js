module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}([function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionsUserPage"]},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(24))},function(t,e){t.exports=flarum.core.compat["components/UserPage"]},function(t,e){t.exports=flarum.core.compat["components/Navigation"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["components/ComposerBody"]},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,e){t.exports=flarum.extensions["fof-upload"]},function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),o=n(1),i=n(10),r=n(11),l=n.n(r),c=n(3),u=n.n(c),d=n(4),p=n.n(d),f=n(12),g=n.n(f),y=n(13),h=n.n(y),b=n(14),B=n.n(b),v=n(6),N=n.n(v),x=n(15),E=n.n(x),_=n(16),j=n.n(_),P=(n(9),n(5)),T=n.n(P),C=n(17),L=n.n(C),S=n(18),k=n.n(S),I=n(19),O="object"==typeof self&&self&&self.Object===Object&&self,w=(I.a||O||Function("return this")()).Symbol;var A=function(t,e){for(var n=-1,a=null==t?0:t.length,s=Array(a);++n<a;)s[n]=e(t[n],n,t);return s},D=Array.isArray,M=Object.prototype,R=M.hasOwnProperty,F=M.toString,U=w?w.toStringTag:void 0;var q=function(t){var e=R.call(t,U),n=t[U];try{t[U]=void 0;var a=!0}catch(t){}var s=F.call(t);return a&&(e?t[U]=n:delete t[U]),s},z=Object.prototype.toString;var G=function(t){return z.call(t)},H=w?w.toStringTag:void 0;var $=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?q(t):G(t)};var J=function(t){return null!=t&&"object"==typeof t};var K=function(t){return"symbol"==typeof t||J(t)&&"[object Symbol]"==$(t)},Q=w?w.prototype:void 0,V=Q?Q.toString:void 0;var W=function t(e){if("string"==typeof e)return e;if(D(e))return A(e,t)+"";if(K(e))return V?V.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var X=function(t){return null==t?"":W(t)},Y=/[\\^$.*+?()[\]{}|]/g,Z=RegExp(Y.source);var tt=function(t){return(t=X(t))&&Z.test(t)?t.replace(Y,"\\$&"):t},et=n(2),nt=n.n(et),at=n(20),st=n.n(at),ot=n(7),it=n.n(ot),rt=n(21),lt=n.n(rt),ct=n(22),mt=n.n(ct),ut=n(23),dt=n.n(ut),pt=(n(25),n(8)),ft=n.n(pt);n(26),n(27);function gt(){s.a.current.matches(nt.a)&&(document.getElementsByClassName("textarea_create_post")[0].value.length>0?document.getElementsByClassName("fof-upload-button")[0].classList.remove("big_upload_icon"):document.getElementsByClassName("fof-upload-button")[0].classList.add("big_upload_icon"))}s.a.initializers.add("vascan/digi-ui",(function(){function t(){if(!s.a.current.matches(st.a))return m("a",{id:"menu_open_id",class:"Button Button--icon hasIcon",title:"Menu",active:"false",type:"button",onclick:e.bind(this)},m("i",{class:"fas fa-bars Button-icon"}))}function e(){var t=document.getElementsByClassName("IndexPage-nav")[0];t.classList.contains("openMenu_class")?t.classList.remove("openMenu_class"):t.classList.add("openMenu_class")}Object(i.extend)(l.a.prototype,"sidebarItems",(function(t){t.has("controls")&&t.remove("controls"),t.add("Imagini_button",u.a.component({id:"Button_text_imagini",title:"Imagini",className:"Button Button--primary",onclick:function(){if(!document.getElementById("Button_text_imagini").classList.contains("disabled")){var t=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");if(t.length>0){for(var n=0;n<t.length;n++)t[n].style.display="none";for(var a=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img"),s=0;s<a.length;s++)a[s].style.display="block"}else{console.log("span not found");for(var o=0;o<e.length;o++)null!=e[o]&&(0==e[o].getElementsByTagName("img").length?e[o].style.display="none":e[o].style.display="block")}}}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.images"))),t.add("Text transliterat_button",u.a.component({id:"Button_text_transliterat",title:"Text transliterat",className:"Button Button--primary",onclick:function(){if(!document.getElementById("Button_text_transliterat").classList.contains("disabled"))if(document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span").length>0){for(var t=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),n=0;n<t.length;n++)t[n].classList.contains("transliterat")&&(t[n].style.display="block");for(var a=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img"),s=0;s<a.length;s++)a[s].style.display="none";for(var o=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),i=0;i<o.length;i++)o[i].classList.contains("chirilic")&&(o[i].style.display="none")}else{console.log("span not found");for(var r=0;r<e.length;r++)null!=e[r]&&(0!=e[r].getElementsByTagName("img").length||/[^a-z][а-я]/.test(e[r].innerHTML)?e[r].style.display="none":e[r].style.display="block")}}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.trans_text"))),t.add("Text in chirilica_button",u.a.component({id:"Button_text_chirilica",title:"Text in chirilica",className:"Button Button--primary",onclick:function(){if(!document.getElementById("Button_text_chirilica").classList.contains("disabled"))if(document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span").length>0){for(var t=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),n=0;n<t.length;n++)t[n].classList.contains("chirilic")&&(t[n].style.display="block");for(var a=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img"),s=0;s<a.length;s++)a[s].style.display="none";for(var o=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),i=0;i<o.length;i++)o[i].classList.contains("transliterat")&&(o[i].style.display="none")}else{console.log("span not found");for(var r=0;r<e.length;r++)null!=e[r]&&(0==e[r].getElementsByTagName("img").length&&/[^a-z][а-я]/.test(e[r].innerHTML)?e[r].style.display="block":e[r].style.display="none")}}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.cyr_text")));var e=document.getElementsByClassName("PostStream-item")[0];e=document.getElementsByClassName("Post-body")[0],e=document.getElementsByTagName("p");var n=document.getElementsByClassName("Post-body")[0];if(n){var a=document.getElementById("Button_text_imagini");(n=document.getElementsByClassName("Post-body")[0].getElementsByTagName("img")).length<1&&a.classList.add("disabled")}if(document.getElementsByClassName("transliterat").length<1){var s=document.getElementById("Button_text_transliterat");s&&s.classList.add("disabled")}if(document.getElementsByClassName("chirilic").length<1){var o=document.getElementById("Button_text_chirilica");o&&o.classList.add("disabled")}})),Object(o.extend)(nt.a.prototype,"init",(function(){})),Object(o.extend)(nt.a.prototype,"view",(function(t){t.children[1].children[0].children[0].attrs.className="IndexPage-nav sideNav openMenu_class"})),Object(o.extend)(nt.a.prototype,"actionItems",(function(t){t.has("refresh")&&t.remove("refresh"),t.has("markAllAsRead")&&t.remove("markAllAsRead")})),Object(o.extend)(nt.a.prototype,"viewItems",(function(t){t.has("sort")&&t.remove("sort"),console.log(),t.add("jumbotron",m("div",{class:"jumbotron_class"})),t.add("Text_title_center_block",m("p",{class:"Text_title_center_block_class"},m("span",null," ",s.a.translator.trans("digi-ui.forum.what_is_new"))))})),Object(o.override)(lt.a.prototype,"view",(function(){var e=s.a.history,n=s.a.pane;return m("div",{className:"Navigation ButtonGroup "+(this.attrs.className||""),onmouseenter:n&&n.show.bind(n),onmouseleave:n&&n.onmouseleave.bind(n)},e.canGoBack()?[this.getBackButton(),this.getPaneButton()]:[t(),this.getDrawerButton()])})),Object(o.extend)(p.a.prototype,"view",(function(t){var e;try{(s.a.current.matches(nt.a)||s.a.current.matches(it.a))&&((e=t.children[2].attrs.className.split(" "))[0]+="--grid",t.children[2].attrs.className=e.join(" "),(e=t.children[2].children[0].attrs.className.split(" "))[0]+="--grid",t.children[2].children[0].attrs.className=e.join(" "),(e=t.children[2].children[2].attrs.className.split(" "))[0]+="--grid",t.children[2].children[2].attrs.className=e.join(" "),(e=t.children[2].children[2].children[0].attrs.className.split(" "))[0]+="--grid",t.children[2].children[2].children[0].attrs.className=e.join(" "))}catch(t){}})),Object(o.extend)(mt.a.prototype,"view",(function(t){var e;try{(s.a.current.matches(nt.a)||s.a.current.matches(it.a))&&((e=t.children[0].attrs.className.split(" "))[0]+="--grid",t.children[0].attrs.className=e.join(" "))}catch(t){}})),Object(o.override)(n(28).components.FileManagerButton.prototype,"view",(function(t){return s.a.current.matches(nt.a)?u.a.component({className:"Button fof-upload-button Button--icon big_upload_icon",onclick:this.fileManagerButtonClicked.bind(this),icon:"fas fa-folder-open",title:s.a.translator.trans("fof-upload.forum.buttons.media")}):u.a.component({className:"Button fof-upload-button Button--icon",onclick:this.fileManagerButtonClicked.bind(this),icon:"fas fa-folder-open",title:s.a.translator.trans("fof-upload.forum.buttons.media")})})),Object(o.extend)(ft.a.prototype,"oninput",gt),Object(o.override)(ft.a.prototype,"buildEditorParams",(function(){var t=this;return{classNames:["FormControl","Composer-flexible","TextEditor-editor",this.attrs.class1],disabled:this.disabled,placeholder:this.attrs.placeholder||"",value:this.value,oninput:this.oninput.bind(this),inputListeners:[],onsubmit:function(){t.onsubmit(),m.redraw()}}})),Object(o.extend)(dt.a.prototype,"view",(function(t){t.children[0].children.shift()}))})),Object(o.override)(p.a.prototype,"view",(function(){var t=this.attrs.discussion,e=t.user(),n=t.isUnread(),a=t.isRead(),o=!this.showRepliesCount()&&n,i=0,r=g.a.controls(t,this).toArray(),l=this.elementAttrs();if(this.attrs.params.q){var c=t.mostRelevantPost();c&&(i=c.number()),console.log(this.attrs.params.q);var u=tt(this.attrs.params.q);this.highlightRegExp=new RegExp(u+"|"+u.trim().replace(/\s+/g,"|"),"gi")}else i=Math.min(t.lastPostNumber(),(t.lastReadPostNumber()||0)+1);return m("div",l,r.length?h.a.component({icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"},r):"",m("span",{className:"Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic"+(n?"":" disabled"),onclick:this.markAsRead.bind(this)},B()("fas fa-check")),m("div",{className:"DiscussionListItem-content Slidable-content"+(n?" unread":"")+(a?" read":"")},m(N.a,{href:e?s.a.route.discussion(t,i):"#",className:"DiscussionListItem-author",title:E()(s.a.translator.trans("core.forum.discussion_list.started_text",{user:e,ago:j()(t.createdAt())}))},m("span",{class:"Avatar "})),m("ul",{className:"DiscussionListItem-badges badges"},T()(t.badges().toArray())),m(N.a,{href:s.a.route.discussion(t,i),className:"DiscussionListItem-main"},m("h3",{className:"DiscussionListItem-title"},L()(t.title(),this.highlightRegExp)),m("ul",{className:"DiscussionListItem-info"},T()(this.infoItems().toArray()))),m("span",{tabindex:"0",role:"button",className:"DiscussionListItem-count",onclick:this.markAsRead.bind(this),title:o?s.a.translator.trans("core.forum.discussion_list.mark_as_read_tooltip"):""},k()(t[o?"unreadCount":"replyCount"]()))))}))}]);
//# sourceMappingURL=forum.js.map
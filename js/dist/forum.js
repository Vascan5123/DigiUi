module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=25)}([function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionsUserPage"]},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(23))},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["components/ComposerBody"]},function(t,e){t.exports=flarum.core.compat["tags/components/TagHero"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=flarum.extensions["fof-upload"]},function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),o=n(1),r=n(9),i=n(10),l=n.n(i),c=n(3),u=n.n(c),d=n(4),p=n.n(d),f=n(11),g=n.n(f),y=n(12),h=n.n(y),b=n(13),B=n.n(b),N=n(5),v=n.n(N),x=n(14),E=n.n(x),_=n(15),T=n.n(_),j=(n(22),n(6)),C=n.n(j),P=n(16),S=n.n(P),O=n(17),k=n.n(O),L=n(18),I="object"==typeof self&&self&&self.Object===Object&&self,w=(L.a||I||Function("return this")()).Symbol;var A=function(t,e){for(var n=-1,a=null==t?0:t.length,s=Array(a);++n<a;)s[n]=e(t[n],n,t);return s},D=Array.isArray,R=Object.prototype,M=R.hasOwnProperty,H=R.toString,q=w?w.toStringTag:void 0;var z=function(t){var e=M.call(t,q),n=t[q];try{t[q]=void 0;var a=!0}catch(t){}var s=H.call(t);return a&&(e?t[q]=n:delete t[q]),s},F=Object.prototype.toString;var U=function(t){return F.call(t)},$=w?w.toStringTag:void 0;var G=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":$&&$ in Object(t)?z(t):U(t)};var J=function(t){return null!=t&&"object"==typeof t};var K=function(t){return"symbol"==typeof t||J(t)&&"[object Symbol]"==G(t)},Q=w?w.prototype:void 0,V=Q?Q.toString:void 0;var W=function t(e){if("string"==typeof e)return e;if(D(e))return A(e,t)+"";if(K(e))return V?V.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var X=function(t){return null==t?"":W(t)},Y=/[\\^$.*+?()[\]{}|]/g,Z=RegExp(Y.source);var tt=function(t){return(t=X(t))&&Z.test(t)?t.replace(Y,"\\$&"):t},et=n(2),nt=n.n(et),at=n(7),st=n.n(at),ot=n(19),rt=n.n(ot),it=n(20),lt=n.n(it),ct=n(21),mt=n.n(ct),ut=n(8),dt=n.n(ut);function pt(){if(s.a.current.matches(nt.a)){var t=document.getElementsByClassName("textarea_create_post")[0].value;t?t.length>0?document.getElementsByClassName("fof-upload-button")[0].classList.remove("big_upload_icon"):document.getElementsByClassName("fof-upload-button")[0].classList.add("big_upload_icon"):document.getElementsByClassName("fof-upload-button")[0].classList.remove("big_upload_icon")}}s.a.initializers.add("vascan/digi-ui",(function(){Object(r.extend)(l.a.prototype,"sidebarItems",(function(t){t.has("controls")&&t.remove("controls"),t.add("Imagini_button",u.a.component({id:"Button_text_imagini",title:"Imagini",className:"Button Button--primary",onclick:function(){if(!document.getElementById("Button_text_imagini").classList.contains("disabled")){var t=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span");if(t.length>0){for(var n=0;n<t.length;n++)t[n].style.display="none";for(var a=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img"),s=0;s<a.length;s++)a[s].style.display="block"}else{console.log("span not found");for(var o=0;o<e.length;o++)null!=e[o]&&(0==e[o].getElementsByTagName("img").length?e[o].style.display="none":e[o].style.display="block")}}}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.images"))),t.add("Text transliterat_button",u.a.component({id:"Button_text_transliterat",title:"Text transliterat",className:"Button Button--primary",onclick:function(){if(!document.getElementById("Button_text_transliterat").classList.contains("disabled"))if(document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span").length>0){for(var t=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),n=0;n<t.length;n++)t[n].classList.contains("transliterat")&&(t[n].style.display="block");for(var a=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img"),s=0;s<a.length;s++)a[s].style.display="none";for(var o=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),r=0;r<o.length;r++)o[r].classList.contains("chirilic")&&(o[r].style.display="none")}else{console.log("span not found");for(var i=0;i<e.length;i++)null!=e[i]&&(0!=e[i].getElementsByTagName("img").length||/[^a-z][а-я]/.test(e[i].innerHTML)?e[i].style.display="none":e[i].style.display="block")}}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.trans_text"))),t.add("Text in chirilica_button",u.a.component({id:"Button_text_chirilica",title:"Text in chirilica",className:"Button Button--primary",onclick:function(){if(!document.getElementById("Button_text_chirilica").classList.contains("disabled"))if(document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span").length>0){for(var t=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),n=0;n<t.length;n++)t[n].classList.contains("chirilic")&&(t[n].style.display="block");for(var a=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("img"),s=0;s<a.length;s++)a[s].style.display="none";for(var o=document.getElementsByClassName("PostStream-item")[0].getElementsByClassName("Post-body")[0].getElementsByTagName("p")[0].getElementsByTagName("span"),r=0;r<o.length;r++)o[r].classList.contains("transliterat")&&(o[r].style.display="none")}else{console.log("span not found");for(var i=0;i<e.length;i++)null!=e[i]&&(0==e[i].getElementsByTagName("img").length&&/[^a-z][а-я]/.test(e[i].innerHTML)?e[i].style.display="block":e[i].style.display="none")}}.bind(this)},app.translator.trans("digi-ui.forum.postui.buttons.cyr_text")));var e=document.getElementsByClassName("PostStream-item")[0];e=document.getElementsByClassName("Post-body")[0],e=document.getElementsByTagName("p");var n=document.getElementsByClassName("Post-body")[0];if(n){var a=document.getElementById("Button_text_imagini");(n=document.getElementsByClassName("Post-body")[0].getElementsByTagName("img")).length<1&&a.classList.add("disabled")}if(document.getElementsByClassName("transliterat").length<1){var s=document.getElementById("Button_text_transliterat");s&&s.classList.add("disabled")}if(document.getElementsByClassName("chirilic").length<1){var o=document.getElementById("Button_text_chirilica");o&&o.classList.add("disabled")}})),Object(o.extend)(nt.a.prototype,"init",(function(){})),Object(o.extend)(nt.a.prototype,"actionItems",(function(t){t.has("refresh")&&t.remove("refresh"),t.has("markAllAsRead")&&t.remove("markAllAsRead")})),Object(o.extend)(nt.a.prototype,"viewItems",(function(t){t.has("sort")&&t.remove("sort"),console.log(),t.add("jumbotron",m("div",{class:"jumbotron_class"})),t.add("Text_title_center_block",m("p",{class:"Text_title_center_block_class"},m("span",null," ",s.a.translator.trans("digi-ui.forum.what_is_new"))))})),Object(o.extend)(p.a.prototype,"view",(function(t){var e;try{(s.a.current.matches(nt.a)||s.a.current.matches(st.a))&&((e=t.children[2].attrs.className.split(" "))[0]+="--grid",t.children[2].attrs.className=e.join(" "),(e=t.children[2].children[0].attrs.className.split(" "))[0]+="--grid",t.children[2].children[0].attrs.className=e.join(" "),(e=t.children[2].children[2].attrs.className.split(" "))[0]+="--grid",t.children[2].children[2].attrs.className=e.join(" "),(e=t.children[2].children[2].children[0].attrs.className.split(" "))[0]+="--grid",t.children[2].children[2].children[0].attrs.className=e.join(" "))}catch(t){}})),Object(o.extend)(rt.a.prototype,"view",(function(t){var e;try{(s.a.current.matches(nt.a)||s.a.current.matches(st.a))&&((e=t.children[0].attrs.className.split(" "))[0]+="--grid",t.children[0].attrs.className=e.join(" "))}catch(t){}})),Object(o.override)(n(24).components.FileManagerButton.prototype,"view",(function(t){return s.a.current.matches(nt.a)?u.a.component({className:"Button fof-upload-button Button--icon big_upload_icon",onclick:this.fileManagerButtonClicked.bind(this),icon:"fas fa-folder-open",title:s.a.translator.trans("fof-upload.forum.buttons.media")}):u.a.component({className:"Button fof-upload-button Button--icon",onclick:this.fileManagerButtonClicked.bind(this),icon:"fas fa-folder-open",title:s.a.translator.trans("fof-upload.forum.buttons.media")})})),Object(o.extend)(lt.a.prototype,"view",(function(t){t.children[0].children[1].children[1].children[0].attrs.class1="textarea_create_post"})),Object(o.extend)(dt.a.prototype,"oninput",pt),Object(o.extend)(dt.a.prototype,"buildEditorParams",(function(t){t.classNames.push(this.attrs.class1)})),Object(o.extend)(nt.a.prototype,"viewItems",(function(t){window.location.href.includes("/t/")&&(t.has("jumbotron")&&t.remove("jumbotron"),t.has("Text_title_center_block")&&t.remove("Text_title_center_block"),Object(o.extend)(mt.a.prototype,"view",(function(t){t.attrs.className="Hero TagHero2"})))}))})),Object(o.override)(p.a.prototype,"view",(function(){var t=this.attrs.discussion,e=t.user(),n=t.isUnread(),a=t.isRead(),o=!this.showRepliesCount()&&n,r=0,i=g.a.controls(t,this).toArray(),l=this.elementAttrs();if(this.attrs.params.q){var c=t.mostRelevantPost();c&&(r=c.number()),console.log(this.attrs.params.q);var u=tt(this.attrs.params.q);this.highlightRegExp=new RegExp(u+"|"+u.trim().replace(/\s+/g,"|"),"gi")}else r=Math.min(t.lastPostNumber(),(t.lastReadPostNumber()||0)+1);return m("div",l,i.length?h.a.component({icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"},i):"",m("span",{className:"Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic"+(n?"":" disabled"),onclick:this.markAsRead.bind(this)},B()("fas fa-check")),m("div",{className:"DiscussionListItem-content Slidable-content"+(n?" unread":"")+(a?" read":"")},m(v.a,{href:e?s.a.route.discussion(t,r):"#",className:"DiscussionListItem-author",title:E()(s.a.translator.trans("core.forum.discussion_list.started_text",{user:e,ago:T()(t.createdAt())}))},m("span",{class:"Avatar "})),m("ul",{className:"DiscussionListItem-badges badges"},C()(t.badges().toArray())),m(v.a,{href:s.a.route.discussion(t,r),className:"DiscussionListItem-main"},m("h3",{className:"DiscussionListItem-title"},S()(t.title(),this.highlightRegExp)),m("ul",{className:"DiscussionListItem-info"},C()(this.infoItems().toArray()))),m("span",{tabindex:"0",role:"button",className:"DiscussionListItem-count",onclick:this.markAsRead.bind(this),title:o?s.a.translator.trans("core.forum.discussion_list.mark_as_read_tooltip"):""},k()(t[o?"unreadCount":"replyCount"]()))))}))}]);
//# sourceMappingURL=forum.js.map
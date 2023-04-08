"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["github-elements"],{10361:(e,t,i)=>{var n=i(57611),s=i(38257),r=i(14840),a=i(57260),o=i(13002),l=i(73921),u=i(27034),d=i(51941),h=i(88309),c=i(40987),p=i(57852),m=i(88823);window.IncludeFragmentElement.prototype.fetch=e=>(e.headers.append("X-Requested-With","XMLHttpRequest"),window.fetch(e));var f=i(97895),g=i(76006),v=function(e,t,i,n){var s,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r<3?s(a):r>3?s(t,i,a):s(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let b=class GitCloneHelpElement extends HTMLElement{updateURL(e){let t=e.currentTarget,i=t.getAttribute("data-url")||"";if(this.helpField.value=i,t.matches(".js-git-protocol-clone-url"))for(let e of this.helpTexts)e.textContent=i;for(let e of this.cloneURLButtons)e.classList.remove("selected");t.classList.add("selected")}};function w(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function y(e,t){return t.get?t.get.call(e):t.value}function E(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=i}}function x(e,t,i){if(!t.has(e))throw TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function C(e,t){var i=x(e,t,"get");return y(e,i)}function L(e,t,i){w(e,t),t.set(e,i)}function M(e,t,i){var n=x(e,t,"set");return E(e,n,i),i}function _(e,t){let i=[],n=0;for(let s=0;s<e.length;s++){let r=e[s],a=t.indexOf(r,n);if(-1===a)break;n=a+1,i.push(a)}return i}v([g.fA],b.prototype,"helpField",void 0),v([g.GO],b.prototype,"helpTexts",void 0),v([g.GO],b.prototype,"cloneURLButtons",void 0),b=v([g.Ih],b);var k=new WeakMap,T=new WeakMap,A=new WeakMap,S=new WeakMap;let q=class MarkedTextElement extends HTMLElement{get query(){return this.ownerInput?this.ownerInput.value:this.getAttribute("query")||""}set query(e){this.setAttribute("query",e)}get ownerInput(){let e=this.ownerDocument.getElementById(this.getAttribute("data-owner-input")||"");return e instanceof HTMLInputElement?e:null}connectedCallback(){this.handleEvent(),this.ownerInput?.addEventListener("input",this),M(this,A,new MutationObserver(()=>this.handleEvent()))}handleEvent(){C(this,S)&&cancelAnimationFrame(C(this,S)),M(this,S,requestAnimationFrame(()=>this.mark()))}disconnectedCallback(){this.ownerInput?.removeEventListener("input",this),C(this,A).disconnect()}mark(){let e=this.textContent||"",t=this.query;if(e===C(this,k)&&t===C(this,T))return;M(this,k,e),M(this,T,t),C(this,A).disconnect();let i=0,n=document.createDocumentFragment();for(let s of(this.positions||_)(t,e)){if(Number(s)!==s||s<i||s>e.length)continue;let t=e.slice(i,s);""!==t&&n.appendChild(document.createTextNode(e.slice(i,s))),i=s+1;let r=document.createElement("mark");r.textContent=e[s],n.appendChild(r)}n.appendChild(document.createTextNode(e.slice(i))),this.replaceChildren(n),C(this,A).observe(this,{attributes:!0,childList:!0,subtree:!0})}constructor(...e){super(...e),L(this,k,{writable:!0,value:""}),L(this,T,{writable:!0,value:""}),L(this,A,{writable:!0,value:void 0}),L(this,S,{writable:!0,value:void 0})}};q.observedAttributes=["query","data-owner-input"],window.customElements.get("marked-text")||(window.MarkedTextElement=q,window.customElements.define("marked-text",q));var I=i(81775);let j=class PasswordStrengthElement extends HTMLElement{connectedCallback(){this.addEventListener("input",z)}disconnectedCallback(){this.removeEventListener("input",z)}};function z(e){let t=e.currentTarget;if(!(t instanceof j))return;let i=e.target;if(!(i instanceof HTMLInputElement))return;let n=i.form;if(!(n instanceof HTMLFormElement))return;let s=N(i.value,{minimumCharacterCount:Number(t.getAttribute("minimum-character-count")),passphraseLength:Number(t.getAttribute("passphrase-length"))});if(s.valid){i.setCustomValidity("");let e=t.querySelector("dl.form-group");e&&(e.classList.remove("errored"),e.classList.add("successed"))}else i.setCustomValidity(t.getAttribute("invalid-message")||"Invalid");H(t,s),(0,I.G)(n)}function N(e,t){let i={valid:!1,hasMinimumCharacterCount:e.length>=t.minimumCharacterCount,hasMinimumPassphraseLength:0!==t.passphraseLength&&e.length>=t.passphraseLength,hasLowerCase:/[a-z]/.test(e),hasNumber:/\d/.test(e)};return i.valid=i.hasMinimumPassphraseLength||i.hasMinimumCharacterCount&&i.hasLowerCase&&i.hasNumber,i}function H(e,t){let i=e.querySelector("[data-more-than-n-chars]"),n=e.querySelector("[data-min-chars]"),s=e.querySelector("[data-number-requirement]"),r=e.querySelector("[data-letter-requirement]"),a=e.getAttribute("error-class")?.split(" ").filter(e=>e.length>0)||[],o=e.getAttribute("pass-class")?.split(" ").filter(e=>e.length>0)||[];for(let e of[i,n,s,r])e?.classList.remove(...a,...o);if(t.hasMinimumPassphraseLength&&i)i.classList.add(...o);else if(t.valid)n.classList.add(...o),s.classList.add(...o),r.classList.add(...o);else{let e=t.hasMinimumCharacterCount?o:a,l=t.hasNumber?o:a,u=t.hasLowerCase?o:a;i?.classList.add(...a),n.classList.add(...e),s.classList.add(...l),r.classList.add(...u)}}window.customElements.get("password-strength")||(window.PasswordStrengthElement=j,window.customElements.define("password-strength",j));var R=i(87551),W=function(e,t,i,n){var s,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r<3?s(a):r>3?s(t,i,a):s(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let F=class PollIncludeFragmentElement extends u.Z{async fetch(e,t=1e3){let i=await super.fetch(e);return 202===i.status?(await new Promise(e=>setTimeout(e,t)),this.fetch(e,1.5*t)):i}connectedCallback(){super.connectedCallback(),this.retryButton&&this.retryButton.addEventListener("click",()=>{this.refetch()})}};W([g.fA],F.prototype,"retryButton",void 0),F=W([g.Ih],F);var P=i(10160),O=i(46426);let B=/\s|\(|\[/;function V(e,t,i){let n=e.lastIndexOf(t,i-1);if(-1===n)return;let s=e.lastIndexOf(" ",i-1);if(s>n)return;let r=e.lastIndexOf("\n",i-1);if(r>n)return;let a=e[n-1];if((0,O.c)("SLASH_COMMANDS_NEW_LINE")){if(a&&"\n"!==a)return}else if(a&&!B.test(a))return;let o=e.substring(n+t.length,i);return{word:o,position:n+t.length,beginningOfLine:D(a)}}let D=e=>void 0===e||/\n/.test(e),$=["position:absolute;","overflow:auto;","word-wrap:break-word;","top:0px;","left:-9999px;"],G=["box-sizing","font-family","font-size","font-style","font-variant","font-weight","height","letter-spacing","line-height","max-height","min-height","padding-bottom","padding-left","padding-right","padding-top","border-bottom","border-left","border-right","border-top","text-decoration","text-indent","text-transform","width","word-spacing"],Z=new WeakMap;function X(e,t){let i,n;let s=e.nodeName.toLowerCase();if("textarea"!==s&&"input"!==s)throw Error("expected textField to a textarea or input");let r=Z.get(e);if(r&&r.parentElement===e.parentElement)r.textContent="";else{r=document.createElement("div"),Z.set(e,r);let t=window.getComputedStyle(e),i=$.slice(0);"textarea"===s?i.push("white-space:pre-wrap;"):i.push("white-space:nowrap;");for(let e=0,n=G.length;e<n;e++){let n=G[e];i.push(`${n}:${t.getPropertyValue(n)};`)}r.style.cssText=i.join(" ")}let a=document.createElement("span");if(a.style.cssText="position: absolute;",a.textContent="\xa0","number"==typeof t){let s=e.value.substring(0,t);s&&(i=document.createTextNode(s)),(s=e.value.substring(t))&&(n=document.createTextNode(s))}else{let t=e.value;t&&(i=document.createTextNode(t))}if(i&&r.appendChild(i),r.appendChild(a),n&&r.appendChild(n),!r.parentElement){if(!e.parentElement)throw Error("textField must have a parentElement to mirror");e.parentElement.insertBefore(r,e)}return r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft,{mirror:r,marker:a}}function U(e,t=e.selectionEnd){let{mirror:i,marker:n}=X(e,t),s=i.getBoundingClientRect(),r=n.getBoundingClientRect();return setTimeout(()=>{i.remove()},5e3),{top:r.top-s.top,left:r.left-s.left}}let Q=new WeakMap,K=class SlashCommandExpander{destroy(){this.input.removeEventListener("paste",this.onpaste),this.input.removeEventListener("input",this.oninput),this.input.removeEventListener("keydown",this.onkeydown),this.input.removeEventListener("blur",this.onblur)}activate(e,t){this.input===document.activeElement&&this.setMenu(e,t)}deactivate(){let e=this.menu,t=this.combobox;return!!e&&!!t&&(this.menu=null,this.combobox=null,e.removeEventListener("combobox-commit",this.oncommit),e.removeEventListener("mousedown",this.onmousedown),t.destroy(),e.remove(),!0)}setMenu(e,t){this.deactivate(),this.menu=t,t.id||(t.id=`text-expander-${Math.floor(1e5*Math.random()).toString()}`),this.expander.append(t);let i=t.querySelector(".js-command-list-container");i?this.combobox=new P.Z(this.input,i):this.combobox=new P.Z(this.input,t);let{top:n,left:s}=U(this.input,e.position),r=parseInt(window.getComputedStyle(this.input).fontSize);t.style.top=`${n+r}px`,t.style.left=`${s}px`,this.combobox.start(),t.addEventListener("combobox-commit",this.oncommit),t.addEventListener("mousedown",this.onmousedown),this.combobox.navigate(1)}setValue(e){if(null==e)return;let t=this.match;if(!t)return;let{cursor:i,value:n}=this.replaceCursorMark(e);n=n?.length===0?n:`${n} `;let s=t.position-t.key.length,r=t.position+t.text.length;this.input.focus();let a=!1;try{this.input.setSelectionRange(s,r),a=document.execCommand("insertText",!1,n)}catch(e){a=!1}if(!a){let e=this.input.value.substring(0,t.position-t.key.length),i=this.input.value.substring(t.position+t.text.length);this.input.value=e+n+i}this.deactivate(),i=s+(i||n.length),this.input.selectionStart=i,this.input.selectionEnd=i}replaceCursorMark(e){let t=/%cursor%/gm,i=t.exec(e);return i?{cursor:i.index,value:e.replace(t,"")}:{cursor:null,value:e}}async onCommit({target:e}){if(!(e instanceof HTMLElement)||!this.combobox)return;let t=this.match;if(!t)return;let n={item:e,key:t.key,value:null},s=new CustomEvent("text-expander-value",{cancelable:!0,detail:n}),r=!this.expander.dispatchEvent(s),{onValue:a}=await i.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(i.bind(i,72564));await a(this.expander,t.key,e),!r&&n.value&&this.setValue(n.value)}onBlur(){if(this.interactingWithMenu){this.interactingWithMenu=!1;return}this.deactivate()}onPaste(){this.justPasted=!0}async delay(e){return new Promise(t=>setTimeout(t,e))}async onInput(){if(this.justPasted){this.justPasted=!1;return}let e=this.findMatch();if(e){if(this.match=e,await this.delay(this.appropriateDelay(this.match)),this.match!==e)return;let t=await this.notifyProviders(e);if(!this.match)return;t?this.activate(e,t):this.deactivate()}else this.match=null,this.deactivate()}appropriateDelay(e){return(0,O.c)("SLASH_COMMANDS_DELAY")?250:e.beginningOfLine?0:""!==e.text?0:250}findMatch(){let e=this.input.selectionEnd,t=this.input.value;for(let i of this.expander.keys){let n=V(t,i,e);if(n)return{text:n.word,key:i,position:n.position,beginningOfLine:n.beginningOfLine}}}async notifyProviders(e){let t=[],n=e=>t.push(e),s=new CustomEvent("text-expander-change",{cancelable:!0,detail:{provide:n,text:e.text,key:e.key}}),r=!this.expander.dispatchEvent(s);if(r)return;let{onChange:a}=await i.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(i.bind(i,72564));a(this.expander,e.key,n,e.text);let o=await Promise.all(t),l=o.filter(e=>e.matched).map(e=>e.fragment);return l[0]}onMousedown(){this.interactingWithMenu=!0}onKeydown(e){"Escape"===e.key&&this.deactivate()&&(e.stopImmediatePropagation(),e.preventDefault())}constructor(e,t){this.expander=e,this.input=t,this.combobox=null,this.menu=null,this.match=null,this.justPasted=!1,this.oninput=this.onInput.bind(this),this.onpaste=this.onPaste.bind(this),this.onkeydown=this.onKeydown.bind(this),this.oncommit=this.onCommit.bind(this),this.onmousedown=this.onMousedown.bind(this),this.onblur=this.onBlur.bind(this),this.interactingWithMenu=!1,t.addEventListener("paste",this.onpaste),t.addEventListener("input",this.oninput),t.addEventListener("keydown",this.onkeydown),t.addEventListener("blur",this.onblur)}},Y=class SlashCommandExpanderElement extends HTMLElement{get keys(){let e=this.getAttribute("keys");return e?e.split(" "):[]}connectedCallback(){let e=this.querySelector('input[type="text"], textarea');if(!(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement))return;let t=new K(this,e);Q.set(this,t)}disconnectedCallback(){let e=Q.get(this);e&&(e.destroy(),Q.delete(this))}setValue(e){let t=Q.get(this);t&&t.setValue(e)}setMenu(e,t=!1){let i=Q.get(this);i&&i.match&&(t&&(i.interactingWithMenu=!0),i.setMenu(i.match,e))}closeMenu(){let e=Q.get(this);e&&e.setValue("")}isLoading(){let e=this.getElementsByClassName("js-slash-command-expander-loading")[0];if(e){let t=e.cloneNode(!0);t.classList.remove("d-none"),this.setMenu(t)}}showError(){let e=this.getElementsByClassName("js-slash-command-expander-error")[0];if(e){let t=e.cloneNode(!0);t.classList.remove("d-none"),this.setMenu(t)}}};window.customElements.get("slash-command-expander")||(window.SlashCommandExpanderElement=Y,window.customElements.define("slash-command-expander",Y));var J=function(e,t,i,n){var s,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r<3?s(a):r>3?s(t,i,a):s(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ee=class TextSuggesterElement extends HTMLElement{acceptSuggestion(){this.suggestion?.textContent&&(this.input.value=this.suggestion.textContent,this.input.dispatchEvent(new Event("input")),this.suggestionContainer&&(this.suggestionContainer.hidden=!0),this.input.focus())}};function et(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function ei(e,t){return t.get?t.get.call(e):t.value}function en(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=i}}function es(e,t,i){if(!t.has(e))throw TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function er(e,t){var i=es(e,t,"get");return ei(e,i)}function ea(e,t,i){et(e,t),t.set(e,i)}function eo(e,t,i){var n=es(e,t,"set");return en(e,n,i),i}function el(e){return Boolean(e instanceof Set||e&&"object"==typeof e&&"size"in e&&"add"in e&&"delete"in e&&"clear"in e)}J([g.fA],ee.prototype,"input",void 0),J([g.fA],ee.prototype,"suggestionContainer",void 0),J([g.fA],ee.prototype,"suggestion",void 0),ee=J([g.Ih],ee);var eu=new WeakMap,ed=new WeakMap,eh=new WeakMap,ec=new WeakMap,ep=new WeakMap,em=new WeakMap;let ef=class VirtualFilterInputElement extends HTMLElement{static get observedAttributes(){return["src","loading","data-property","aria-owns"]}get filtered(){if(er(this,em))return er(this,em);if(this.hasAttribute("aria-owns")){let e=this.ownerDocument.getElementById(this.getAttribute("aria-owns")||"");e&&el(e)&&eo(this,em,e)}return eo(this,em,er(this,em)||new Set)}set filtered(e){eo(this,em,e)}get input(){return this.querySelector("input, textarea")}get src(){return this.getAttribute("src")||""}set src(e){this.setAttribute("src",e)}get loading(){return"lazy"===this.getAttribute("loading")?"lazy":"eager"}set loading(e){this.setAttribute("loading",e)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",e)}get property(){return this.getAttribute("data-property")||""}set property(e){this.setAttribute("data-property",e)}reset(){this.filtered.clear(),eo(this,ep,new Set)}clear(){this.input&&(this.input.value="",this.input.dispatchEvent(new Event("input")))}attributeChangedCallback(e,t,i){let n=this.isConnected&&this.src,s="eager"===this.loading,r=t!==i;("src"===e||"data-property"===e)&&r&&(eo(this,eh,null),er(this,ec)&&clearTimeout(er(this,ec))),n&&s&&("src"===e||"loading"===e||"accept"===e||"data-property"===e)&&r?(cancelAnimationFrame(er(this,ed)),eo(this,ed,requestAnimationFrame(()=>this.load()))):"aria-owns"===e&&eo(this,em,null)}connectedCallback(){this.src&&"eager"===this.loading&&(cancelAnimationFrame(er(this,ed)),eo(this,ed,requestAnimationFrame(()=>this.load())));let e=this.input;if(!e)return;let t=this.getAttribute("aria-owns");null!==t&&this.attributeChangedCallback("aria-owns","",t),e.setAttribute("autocomplete","off"),e.setAttribute("spellcheck","false"),this.src&&"lazy"===this.loading&&(document.activeElement===e?this.load():e.addEventListener("focus",()=>{this.load()},{once:!0})),e.addEventListener("input",this)}disconnectedCallback(){this.input?.removeEventListener("input",this)}handleEvent(e){"input"===e.type&&(er(this,ec)&&clearTimeout(er(this,ec)),eo(this,ec,window.setTimeout(()=>this.filterItems(),(this.input?.value?.length,300))))}async load(){er(this,eu)?.abort(),eo(this,eu,new AbortController);let{signal:e}=er(this,eu);if(!this.src)throw Error("missing src");if(await new Promise(e=>setTimeout(e,0)),!e.aborted){this.dispatchEvent(new Event("loadstart"));try{let t=await this.fetch(this.request(),{signal:e,headers:{"X-Requested-With":"XMLHttpRequest"}});if(location.origin+this.src!==t.url)return;if(!t.ok)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);eo(this,ep,new Set((await t.json())[this.property])),eo(this,eh,null),this.dispatchEvent(new Event("loadend"))}catch(t){if(e.aborted){this.dispatchEvent(new Event("loadend"));return}throw(async()=>{this.dispatchEvent(new Event("error")),this.dispatchEvent(new Event("loadend"))})(),t}this.filtered.clear(),this.filterItems()}}request(){return new Request(this.src,{method:"GET",credentials:"same-origin",headers:{Accept:this.accept||"application/json"}})}fetch(e,t){return fetch(e,t)}filterItems(){let e;let t=this.input?.value.trim()??"",i=er(this,eh);if(eo(this,eh,t),t!==i){for(let n of(this.dispatchEvent(new CustomEvent("virtual-filter-input-filter")),i&&t.includes(i)?e=this.filtered:(e=er(this,ep),this.filtered.clear()),e))this.filter(n,t)?this.filtered.add(n):this.filtered.delete(n);this.dispatchEvent(new CustomEvent("virtual-filter-input-filtered"))}}constructor(...e){super(...e),ea(this,eu,{writable:!0,value:void 0}),ea(this,ed,{writable:!0,value:0}),ea(this,eh,{writable:!0,value:null}),ea(this,ec,{writable:!0,value:void 0}),ea(this,ep,{writable:!0,value:new Set}),ea(this,em,{writable:!0,value:null}),this.filter=(e,t)=>String(e).includes(t)}};function eg(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function ev(e,t){return t.get?t.get.call(e):t.value}function eb(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=i}}function ew(e,t,i){if(!t.has(e))throw TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function ey(e,t){var i=ew(e,t,"get");return ev(e,i)}function eE(e,t,i){eg(e,t),t.set(e,i)}function ex(e,t,i){var n=ew(e,t,"set");return eb(e,n,i),i}window.customElements.get("virtual-filter-input")||(window.VirtualFilterInputElement=ef,window.customElements.define("virtual-filter-input",ef));let eC=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&t.target instanceof eI&&"eager"===t.target.updating&&t.target.update()});var eL=new WeakMap,eM=new WeakMap,e_=new WeakMap,ek=new WeakMap,eT=new WeakMap,eA=new WeakMap,eS=new WeakMap;let eq=Symbol.iterator,eI=class VirtualListElement extends HTMLElement{static get observedAttributes(){return["data-updating","aria-activedescendant"]}get updating(){return"lazy"===this.getAttribute("data-updating")?"lazy":"eager"}set updating(e){this.setAttribute("data-updating",e)}get size(){return ey(this,eM).size}get range(){let e=this.getBoundingClientRect().height,{scrollTop:t}=this,i=`${t}-${e}`;if(ey(this,eT).has(i))return ey(this,eT).get(i);let n=0,s=0,r=0,a=0,o=ey(this,e_);for(let i of ey(this,eM)){let l=o.get(i)||ey(this,ek);if(r+l<t)r+=l,n+=1,s+=1;else if(a-l<e)a+=l,s+=1;else if(a>=e)break}return[n,s]}get list(){let e=this.querySelector("ul, ol, tbody");if(!e)throw Error("virtual-list must have a container element inside: any of <ul>, <ol>, <tbody>");return e}attributeChangedCallback(e,t,i){if(t===i||!this.isConnected)return;let n="data-sorted"===e&&this.hasAttribute("data-sorted");if(("data-updating"===e&&"eager"===i||n)&&this.update(),"aria-activedescendant"===e){let e=this.getIndexByElementId(i);this.dispatchEvent(new ActiveDescendantChangedEvent(e,i)),"eager"===this.updating&&this.update()}}connectedCallback(){this.addEventListener("scroll",()=>this.update()),this.updateSync=this.updateSync.bind(this),eC.observe(this)}update(){ey(this,eS)&&cancelAnimationFrame(ey(this,eS)),!ey(this,eL)&&this.hasAttribute("data-sorted")?ex(this,eS,requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("virtual-list-sort",{cancelable:!0}))&&this.sort()})):ex(this,eS,requestAnimationFrame(this.updateSync))}renderItem(e){let t={item:e,fragment:document.createDocumentFragment()};return this.dispatchEvent(new CustomEvent("virtual-list-render-item",{detail:t})),t.fragment.children[0]}recalculateHeights(e){let t=this.list;if(!t)return;let i=this.renderItem(e);if(!i)return;t.append(i);let n=t.children[0].getBoundingClientRect().height;t.replaceChildren(),n&&(ex(this,ek,n),ey(this,e_).set(e,n))}getIndexByElementId(e){if(!e)return -1;let t=0;for(let[,i]of ey(this,eA)){if(i.id===e||i.querySelector(`#${e}`))return t;t++}return -1}updateSync(){let e=this.list,[t,i]=this.range;if(i<t)return;let n=!this.dispatchEvent(new CustomEvent("virtual-list-update",{cancelable:!0}));if(n)return;let s=new Map,r=ey(this,eA),a=-1,o=!0,l=0,u=0,d=0;for(let e of ey(this,eM)){if(-1!==a||Number.isFinite(ey(this,ek))&&0!==ey(this,ek)||this.recalculateHeights(e),a+=1,d=ey(this,e_).get(e)||ey(this,ek),a<t){l+=d,u=l;continue}if(a>i){o=!1;break}let n=null;if(r.has(e))n=r.get(e);else{if(!(n=this.renderItem(e)))continue;n.querySelector("[aria-setsize]")?.setAttribute("aria-setsize",ey(this,eM).size.toString()),n.querySelector("[aria-posinset]")?.setAttribute("aria-posinset",(a+1).toString()),r.set(e,n)}n.querySelector("[tabindex]")?.setAttribute("data-scrolltop",u.toString()),u+=d,s.set(e,n)}e.replaceChildren(...s.values()),e.style.paddingTop=`${l}px`;let h=this.size*ey(this,ek);e.style.height=`${h||0}px`;let c=!1,p=this.getBoundingClientRect().bottom;for(let[e,t]of s){let{height:i,bottom:n}=t.getBoundingClientRect();c=c||n>=p,ey(this,e_).set(e,i)}let m=!o&&this.size>s.size;if(m&&!c)return ey(this,eT).delete(`${this.scrollTop}-${this.getBoundingClientRect().height}`),this.update();this.dispatchEvent(new RenderedEvent(r)),this.dispatchEvent(new CustomEvent("virtual-list-updated"))}resetRenderCache(){ex(this,eA,new Map)}has(e){return ey(this,eM).has(e)}add(e){return ey(this,eM).add(e),ex(this,eL,!1),Number.isFinite(ey(this,ek))||this.recalculateHeights(e),this.resetRenderCache(),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update(),this}delete(e){let t=ey(this,eM).delete(e);return ex(this,eL,!1),ey(this,e_).delete(e),this.resetRenderCache(),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update(),t}clear(){ey(this,eM).clear(),ey(this,e_).clear(),ex(this,ek,1/0),ex(this,eL,!0),this.resetRenderCache(),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update()}forEach(e,t){for(let i of this)e.call(t,i,i,this)}entries(){return ey(this,eM).entries()}values(){return ey(this,eM).values()}keys(){return ey(this,eM).keys()}[eq](){return ey(this,eM)[Symbol.iterator]()}sort(e){return ex(this,eM,new Set(Array.from(this).sort(e))),ex(this,eL,!0),this.dispatchEvent(new Event("virtual-list-data-updated")),"eager"===this.updating&&this.update(),this}constructor(...e){super(...e),eE(this,eL,{writable:!0,value:!1}),eE(this,eM,{writable:!0,value:new Set}),eE(this,e_,{writable:!0,value:new Map}),eE(this,ek,{writable:!0,value:1/0}),eE(this,eT,{writable:!0,value:new Map}),eE(this,eA,{writable:!0,value:new Map}),eE(this,eS,{writable:!0,value:0})}};let ActiveDescendantChangedEvent=class ActiveDescendantChangedEvent extends Event{constructor(e,t){super("virtual-list-activedescendant-changed"),this.index=e,this.id=t}};let RenderedEvent=class RenderedEvent extends Event{constructor(e){super("virtual-list-rendered"),this.rowsCache=e}};window.customElements.get("virtual-list")||(window.VirtualListElement=eI,window.customElements.define("virtual-list",eI));var ej=function(e,t,i,n){var s,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r<3?s(a):r>3?s(t,i,a):s(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ez=class VisiblePasswordElement extends HTMLElement{show(){this.input.type="text",this.input.focus(),this.showButton.hidden=!0,this.hideButton.hidden=!1}hide(){this.input.type="password",this.input.focus(),this.hideButton.hidden=!0,this.showButton.hidden=!1}};ej([g.fA],ez.prototype,"input",void 0),ej([g.fA],ez.prototype,"showButton",void 0),ej([g.fA],ez.prototype,"hideButton",void 0),ez=ej([g.Ih],ez);var eN=i(22490);let eH=eN.Z.createPolicy("include-fragment-element",{createHTML:e=>e});window.IncludeFragmentElement.setCSPTrustedTypesPolicy(eH)},81775:(e,t,i)=>{i.d(t,{G:()=>u});var n=i(254),s=i(36071),r=i(59753);function a(e){let t=e.getAttribute("data-required-value"),i=e.getAttribute("data-required-value-prefix");if(e.value===t)e.setCustomValidity("");else{let n=t;i&&(n=i+n),e.setCustomValidity(n)}}(0,n.q6)("[data-required-value]",function(e){let t=e.currentTarget;a(t)}),(0,r.on)("change","[data-required-value]",function(e){let t=e.currentTarget;a(t),u(t.form)}),(0,n.q6)("[data-required-trimmed]",function(e){let t=e.currentTarget;""===t.value.trim()?t.setCustomValidity(t.getAttribute("data-required-trimmed")):t.setCustomValidity("")}),(0,r.on)("change","[data-required-trimmed]",function(e){let t=e.currentTarget;""===t.value.trim()?t.setCustomValidity(t.getAttribute("data-required-trimmed")):t.setCustomValidity(""),u(t.form)}),(0,n.ZG)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]",e=>{let t=e.checkValidity();function i(){let i=e.checkValidity();i!==t&&e.form&&u(e.form),t=i}e.addEventListener("input",i),e.addEventListener("blur",function t(){e.removeEventListener("input",i),e.removeEventListener("blur",t)})});let o=new WeakMap;function l(e){o.get(e)||(e.addEventListener("change",()=>u(e)),o.set(e,!0))}function u(e){let t=e.checkValidity();for(let i of e.querySelectorAll("button[data-disable-invalid]"))i.disabled=!t}(0,s.N7)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(e){let t=e.form;t&&(l(t),e.disabled=!t.checkValidity())}}),(0,s.N7)("input[data-required-change], textarea[data-required-change]",function(e){let t="radio"===e.type&&e.form?e.form.elements.namedItem(e.name).value:null;function i(i){let n=e.form;if(i&&"radio"===e.type&&n&&t)for(let i of n.elements.namedItem(e.name))i instanceof HTMLInputElement&&i.setCustomValidity(e.value===t?"unchanged":"");else e.setCustomValidity(e.value===(t||e.defaultValue)?"unchanged":"")}e.addEventListener("input",i),e.addEventListener("change",i),i(),e.form&&u(e.form)}),document.addEventListener("reset",function(e){if(e.target instanceof HTMLFormElement){let t=e.target;setTimeout(()=>u(t))}})},97895:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(47142);let s=(e,t,i)=>{if(!(0,n.CD)(e,t))return-1/0;let s=(0,n.Gs)(e,t);return s<i?-1/0:s},r=(e,t,i)=>{e.textContent="";let s=0;for(let r of(0,n.m7)(t,i)){let t=i.slice(s,r);""!==t&&e.appendChild(document.createTextNode(i.slice(s,r))),s=r+1;let n=document.createElement("mark");n.textContent=i[r],e.appendChild(n)}e.appendChild(document.createTextNode(i.slice(s)))},a=new WeakMap,o=new WeakMap,l=new WeakMap,u=e=>{if(!l.has(e)&&e instanceof HTMLElement){let t=(e.getAttribute("data-value")||e.textContent||"").trim();return l.set(e,t),t}return l.get(e)||""},d=class FuzzyListElement extends HTMLElement{connectedCallback(){let e=this.querySelector("ul");if(!e)return;let t=new Set(e.querySelectorAll("li")),i=this.querySelector("input");i instanceof HTMLInputElement&&i.addEventListener("input",()=>{this.value=i.value});let s=new MutationObserver(e=>{let i=!1;for(let s of e)if("childList"===s.type&&s.addedNodes.length){for(let e of s.addedNodes)if(e instanceof HTMLLIElement&&!t.has(e)){let s=u(e);i=i||(0,n.CD)(this.value,s),t.add(e)}}i&&this.sort()});s.observe(e,{childList:!0});let r={handler:s,items:t,lazyItems:new Map,timer:null};o.set(this,r)}disconnectedCallback(){let e=o.get(this);e&&(e.handler.disconnect(),o.delete(this))}addLazyItems(e,t){let i=o.get(this);if(!i)return;let{lazyItems:s}=i,{value:r}=this,a=!1;for(let i of e)s.set(i,t),a=a||Boolean(r)&&(0,n.CD)(r,i);a&&this.sort()}sort(){let e=a.get(this);e&&(e.aborted=!0);let t={aborted:!1};a.set(this,t);let{minScore:i,markSelector:n,maxMatches:d,value:h}=this,c=o.get(this);if(!c||!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort",{cancelable:!0,detail:h})))return;let{items:p,lazyItems:m}=c,f=this.hasAttribute("mark-selector"),g=this.querySelector("ul");if(!g)return;let v=[];if(h){for(let e of p){let t=u(e),n=s(h,t,i);n!==-1/0&&v.push({item:e,score:n})}for(let[e,t]of m){let n=s(h,e,i);n!==-1/0&&v.push({text:e,render:t,score:n})}v.sort((e,t)=>t.score-e.score).splice(d)}else{let e=v.length;for(let t of p){if(e>=d)break;v.push({item:t,score:1}),e+=1}for(let[t,i]of m){if(e>=d)break;v.push({text:t,render:i,score:1}),e+=1}}requestAnimationFrame(()=>{if(t.aborted)return;let e=g.querySelector('input[type="radio"]:checked');g.textContent="";let i=0,s=()=>{if(t.aborted)return;let a=Math.min(v.length,i+100),o=document.createDocumentFragment();for(let e=i;e<a;e+=1){let t=v[e],i=null;if("render"in t&&"text"in t){let{render:e,text:n}=t;i=e(n),p.add(i),l.set(i,n),m.delete(n)}else"item"in t&&(i=t.item);i instanceof HTMLElement&&(f&&r(n&&i.querySelector(n)||i,f?h:"",u(i)),o.appendChild(i))}i=a;let d=!1;if(e instanceof HTMLInputElement)for(let t of o.querySelectorAll('input[type="radio"]:checked'))t instanceof HTMLInputElement&&t.value!==e.value&&(t.checked=!1,d=!0);if(g.appendChild(o),e&&d&&e.dispatchEvent(new Event("change",{bubbles:!0})),a<v.length)requestAnimationFrame(s);else{g.hidden=0===v.length;let e=this.querySelector("[data-fuzzy-list-show-on-empty]");e&&(e.hidden=v.length>0),this.dispatchEvent(new CustomEvent("fuzzy-list-sorted",{detail:v.length}))}};s()})}get value(){return this.getAttribute("value")||""}set value(e){this.setAttribute("value",e)}get markSelector(){return this.getAttribute("mark-selector")||""}set markSelector(e){e?this.setAttribute("mark-selector",e):this.removeAttribute("mark-selector")}get minScore(){return Number(this.getAttribute("min-score")||0)}set minScore(e){Number.isNaN(e)||this.setAttribute("min-score",String(e))}get maxMatches(){return Number(this.getAttribute("max-matches")||1/0)}set maxMatches(e){Number.isNaN(e)||this.setAttribute("max-matches",String(e))}static get observedAttributes(){return["value","mark-selector","min-score","max-matches"]}attributeChangedCallback(e,t,i){if(t===i)return;let n=o.get(this);n&&(n.timer&&window.clearTimeout(n.timer),n.timer=window.setTimeout(()=>this.sort(),100))}},h=d;window.customElements.get("fuzzy-list")||(window.FuzzyListElement=d,window.customElements.define("fuzzy-list",d))},254:(e,t,i)=>{i.d(t,{ZG:()=>o,q6:()=>u,w4:()=>l});var n=i(8439);let s=!1,r=new n.Z;function a(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of r.matches(t))e.data.call(null,t)}function o(e,t){s||(s=!0,document.addEventListener("focus",a,!0)),r.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function l(e,t,i){function n(t){let s=t.currentTarget;s&&(s.removeEventListener(e,i),s.removeEventListener("blur",n))}o(t,function(t){t.addEventListener(e,i),t.addEventListener("blur",n)})}function u(e,t){function i(e){let{currentTarget:n}=e;n&&(n.removeEventListener("input",t),n.removeEventListener("blur",i))}o(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",i)})}},87551:(e,t,i)=>{function n(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}function s(e){let t=(e.getAttribute("data-platforms")||"").split(","),i=n();return Boolean(i&&t.includes(i))}i.d(t,{X:()=>n}),(0,i(36071).N7)(".js-remove-unless-platform",function(e){s(e)||e.remove()})},46426:(e,t,i)=>{i.d(t,{$:()=>l,c:()=>a});var n=i(15205);let s=(0,n.Z)(r);function r(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}let a=(0,n.Z)(o);function o(e){return -1!==s().indexOf(e)}let l={isFeatureEnabled:a}},86283:(e,t,i)=>{i.d(t,{Qg:()=>n.Qg,W6:()=>n.W6,cF:()=>n.cF,iG:()=>s.iG,jX:()=>s.jX,n4:()=>s.n4});var n=i(35647),s=i(73614)},73614:(e,t,i)=>{i.d(t,{iG:()=>s,jX:()=>r,n4:()=>n});let n="undefined"==typeof document?void 0:document,s="undefined"==typeof window?void 0:window,r="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},35647:(e,t,i)=>{i.d(t,{Qg:()=>r,W6:()=>s,cF:()=>a});var n=i(73614);let s=void 0===n.n4,r=!s;function a(){return!!s||Boolean(n.n4.querySelector('react-app[data-ssr="true"]'))}},22490:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(86283);function s(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let r={createHTML:s("createHTML"),createScript:s("createScript"),createScriptURL:s("createScriptURL")},a={createPolicy:(e,t)=>({name:e,...r,...t})},o=globalThis.trustedTypes??a,l=!1;n.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||l||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),l=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_github_relative-time-element_dist_index_js","vendors-node_modules_fzy_js_index_js-node_modules_github_markdown-toolbar-element_dist_index_js","vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-44ef1e","vendors-node_modules_github_details-dialog-element_dist_index_js-node_modules_github_memoize_-8664b7","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-menu-element_-bb7a4e","vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_text-ex-3415a8","vendors-node_modules_github_tab-container-element_dist_index_js-node_modules_github_auto-comp-bf192d","vendors-node_modules_primer_view-components_app_components_primer_primer_js-node_modules_gith-6a1af4"],()=>t(10361));var i=e.O()}]);
//# sourceMappingURL=github-elements-6127322f69ac.js.map
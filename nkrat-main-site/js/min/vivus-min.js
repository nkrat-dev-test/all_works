"use strict";function Vivus(t,e,i){this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(i),this.isReady&&this.init()}var requestAnimFrame,cancelAnimFrame,parsePositiveInt;Vivus.LINEAR=function(t){return t},Vivus.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},Vivus.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},Vivus.EASE_IN=function(t){return Math.pow(t,3)},Vivus.EASE_OUT_BOUNCE=function(t){var e=-Math.cos(t*(.5*Math.PI))+1,i=Math.pow(e,1.5),n=Math.pow(1-t,2),r=-Math.abs(Math.cos(i*(2.5*Math.PI)))+1;return 1-n+r*n},Vivus.prototype.setElement=function(t,e){if("undefined"==typeof t)throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=t,e&&e.file){var i=document.createElement("object");i.setAttribute("type","image/svg+xml"),i.setAttribute("data",e.file),i.setAttribute("width","100%"),i.setAttribute("height","100%"),t.appendChild(i),t=i}switch(t.constructor){case window.SVGSVGElement:case window.SVGElement:this.el=t,this.isReady=!0;break;case window.HTMLObjectElement:if(this.el=t.contentDocument&&t.contentDocument.querySelector("svg"),this.el)return void(this.isReady=!0);var n=this;t.addEventListener("load",function(){if(n.el=t.contentDocument&&t.contentDocument.querySelector("svg"),!n.el)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");n.isReady=!0,n.init()});break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},Vivus.prototype.setOptions=function(t){var e=["delayed","async","oneByOne","scenario","scenario-sync"],i=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(t=t||{},t.type&&-1===e.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&-1===i.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||i[0],this.isIE=-1!==window.navigator.userAgent.indexOf("MSIE")||-1!==window.navigator.userAgent.indexOf("Trident/")||-1!==window.navigator.userAgent.indexOf("Edge/"),this.duration=parsePositiveInt(t.duration,120),this.delay=parsePositiveInt(t.delay,null),this.dashGap=parsePositiveInt(t.dashGap,2),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.ignoreInvisible=t.hasOwnProperty("ignoreInvisible")?!!t.ignoreInvisible:!1,this.animTimingFunction=t.animTimingFunction||Vivus.LINEAR,this.pathTimingFunction=t.pathTimingFunction||Vivus.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},Vivus.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},Vivus.prototype.mapping=function(){var t,e,i,n,r,s,a,o;for(o=s=a=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)i=e[t],this.isInvisible(i)||(r={el:i,length:Math.ceil(i.getTotalLength())},isNaN(r.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",i):(s+=r.length,this.map.push(r),i.style.strokeDasharray=r.length+" "+(r.length+this.dashGap),i.style.strokeDashoffset=r.length,this.isIE&&(r.length+=this.dashGap),this.renderPath(t)));for(s=0===s?1:s,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(e.length>1?e.length-1:1),t=0;t<this.map.length;t++){switch(r=this.map[t],this.type){case"delayed":r.startAt=this.delayUnit*t,r.duration=this.duration-this.delay;break;case"oneByOne":r.startAt=a/s*this.duration,r.duration=r.length/s*this.duration;break;case"async":r.startAt=0,r.duration=this.duration;break;case"scenario-sync":i=e[t],n=this.parseAttr(i),r.startAt=o+(parsePositiveInt(n["data-delay"],this.delayUnit)||0),r.duration=parsePositiveInt(n["data-duration"],this.duration),o=void 0!==n["data-async"]?r.startAt:r.startAt+r.duration,this.frameLength=Math.max(this.frameLength,r.startAt+r.duration);break;case"scenario":i=e[t],n=this.parseAttr(i),r.startAt=parsePositiveInt(n["data-start"],this.delayUnit)||0,r.duration=parsePositiveInt(n["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,r.startAt+r.duration)}a+=r.length,this.frameLength=this.frameLength||this.duration}},Vivus.prototype.drawer=function(){var t=this;this.currentFrame+=this.speed,this.currentFrame<=0?(this.stop(),this.reset(),this.callback(this)):this.currentFrame>=this.frameLength?(this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy(),this.callback(this)):(this.trace(),this.handle=requestAnimFrame(function(){t.drawer()}))},Vivus.prototype.trace=function(){var t,e,i,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)i=this.map[t],e=(n-i.startAt)/i.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),i.progress!==e&&(i.progress=e,i.el.style.strokeDashoffset=Math.floor(i.length*(1-e)),this.renderPath(t))},Vivus.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],i=e.el.cloneNode(!0);e.el.parentNode.replaceChild(i,e.el),e.el=i}},Vivus.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new Pathformer(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},Vivus.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},Vivus.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},Vivus.prototype.reset=function(){return this.setFrameProgress(0)},Vivus.prototype.finish=function(){return this.setFrameProgress(1)},Vivus.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},Vivus.prototype.play=function(t){if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return this.speed=t||1,this.handle||this.drawer(),this},Vivus.prototype.stop=function(){return this.handle&&(cancelAnimFrame(this.handle),delete this.handle),this},Vivus.prototype.destroy=function(){var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},Vivus.prototype.isInvisible=function(t){var e,i=t.getAttribute("data-ignore");return null!==i?"false"!==i:this.ignoreInvisible?(e=t.getBoundingClientRect(),!e.width&&!e.height):!1},Vivus.prototype.parseAttr=function(t){var e,i={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)e=t.attributes[n],i[e.name]=e.value;return i},Vivus.prototype.isInViewport=function(t,e){var i=this.scrollY(),n=i+this.getViewportH(),r=t.getBoundingClientRect(),s=r.height,a=i+r.top,o=a+s;return e=e||0,n>=a+s*e&&o>=i},Vivus.prototype.docElem=window.document.documentElement,Vivus.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return e>t?e:t},Vivus.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}(),parsePositiveInt=function(t,e){var i=parseInt(t,10);return i>=0?i:e};
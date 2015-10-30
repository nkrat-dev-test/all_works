!function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,i){var n=(new Date).getTime(),s=Math.max(0,16-(n-t)),r=window.setTimeout(function(){e(n+s)},s);return t=n+s,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-22
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var n,s,r,a,o,l=function(t){var e,n=t.split("."),s=i;for(e=0;n.length>e;e++)s[n[e]]=s=s[n[e]]||{};return s},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],n=t.length;for(e=0;e!==n;i.push(t[e++]));return i},c=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),f={},p=function(n,s,r,a){this.sc=f[n]?f[n].sc:[],f[n]=this,this.gsClass=null,this.func=r;var o=[];this.check=function(h){for(var _,u,c,m,d=s.length,v=d;--d>-1;)(_=f[s[d]]||new p(s[d],[])).gsClass?(o[d]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&r)for(u=("com.greensock."+n).split("."),c=u.pop(),m=l(u.join("."))[c]=this.gsClass=r.apply(r,o),a&&(i[c]=m,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+n.split(".").pop(),[],function(){return m}):n===e&&"undefined"!=typeof module&&module.exports&&(module.exports=m)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,n){return new p(t,e,i,n)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],w=v("easing.Ease",function(t,e,i,n){this._func=t,this._type=i||0,this._power=n||0,this._params=e?g.concat(e):g},!0),y=w.map={},P=w.register=function(t,e,i,n){for(var s,r,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(r=l[_],s=n?v("easing."+r,null,!0):h.easing[r]||{},a=u.length;--a>-1;)o=u[a],y[r+"."+o]=y[o+r]=s[o]=t.getRatio?t:t[o]||new t};for(r=w.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,n=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?n*=n:2===i?n*=n*n:3===i?n*=n*n*n:4===i&&(n*=n*n*n*n),1===e?1-n:2===e?n:.5>t?n/2:1-n/2},n=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=n.length;--s>-1;)r=n[s]+",Power"+s,P(new w(null,null,1,s),r,"easeOut",!0),P(new w(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),P(new w(null,null,3,s),r,"easeInOut");y.linear=h.easing.Linear.easeIn,y.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=b.prototype,r.addEventListener=function(t,e,i,n,s){s=s||0;var r,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)r=h[l],r.c===e&&r.s===i?h.splice(l,1):0===_&&s>r.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:n,pr:s}),this!==a||o||a.wake()},r.removeEventListener=function(t,e){var i,n=this._listeners[t];if(n)for(i=n.length;--i>-1;)if(n[i].c===e)return void n.splice(i,1)},r.dispatchEvent=function(t){var e,i,n,s=this._listeners[t];if(s)for(e=s.length,i=this._eventTarget;--e>-1;)n=s[e],n.up?n.c.call(n.s||i,{type:t,target:i}):n.c.call(n.s||i)};var A=t.requestAnimationFrame,k=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},x=S();for(n=["ms","moz","webkit","o"],s=n.length;--s>-1&&!A;)A=t[n[s]+"RequestAnimationFrame"],k=t[n[s]+"CancelAnimationFrame"]||t[n[s]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,n,s,r,l,h=this,u=S(),m=e!==!1&&A,f=500,p=33,d=function(t){var e,a,o=S()-x;o>f&&(u+=o-p),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=r?.004:r-e),a=!0),t!==!0&&(s=n(d)),a&&h.dispatchEvent("tick")};b.call(h),h.time=h.frame=0,h.tick=function(){d(!0)},h.lagSmoothing=function(t,e){f=t||1/_,p=Math.min(e,f,0)},h.sleep=function(){null!=s&&(m&&k?k(s):clearTimeout(s),n=c,s=null,h===a&&(o=!1))},h.wake=function(){null!==s?h.sleep():h.frame>10&&(x=S()-f+5),n=0===i?c:m&&A?A:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),d(2)},h.fps=function(t){return arguments.length?(i=t,r=1/(i||60),l=this.time+r,void h.wake()):i},h.useRAF=function(t){return arguments.length?(h.sleep(),m=t,void h.fps(i)):m},h.fps(t),setTimeout(function(){m&&(!s||5>h.frame)&&h.useRAF(!1)},1500)}),r=h.Ticker.prototype=new h.events.EventDispatcher,r.constructor=h.Ticker;var C=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,Q){o||a.wake();var i=this.vars.useFrames?G:Q;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=C.ticker=new h.Ticker,r=C.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var R=function(){o&&S()-x>2e3&&a.wake(),setTimeout(R,2e3)};R(),r.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,n){if("on"===(t||"").substr(0,2)){var s=this.vars;if(1===arguments.length)return s[t];null==e?delete s[t]:(s[t]=e,s[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,s[t+"Scope"]=n),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var n=this._totalDuration,s=this._timeline;if(t>n&&!i&&(t=n),this._startTime=(this._paused?this._pauseTime:s._time)-(this._reversed?n-t:t)/this._timeScale,s._dirty||this._uncache(!1),s._timeline)for(;s._timeline;)s._timeline._time!==(s._startTime+s._totalTime)/s._timeScale&&s.totalTime(s._totalTime,!0),s=s._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),F.length&&B())}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),n=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=n,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==n&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var E=v("core.SimpleTimeline",function(t){C.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=E.prototype=new C,r.constructor=E,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,n;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(n=t._startTime;i&&i._startTime>n;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var n,s=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;s;)n=s._next,(s._active||t>=s._startTime&&!s._paused)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=n},r.rawTime=function(){return o||a.wake(),this._totalTime};var D=v("TweenLite",function(e,i,n){if(C.call(this,i,n),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var s,r,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?j[D.defaultOverwrite]:"number"==typeof l?l>>0:j[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],s=0;a.length>s;s++)r=a[s],r?"string"!=typeof r?r.length&&r!==t&&r[0]&&(r[0]===t||r[0].nodeType&&r[0].style&&!r.nodeType)?(a.splice(s--,1),this._targets=a=a.concat(u(r))):(this._siblings[s]=$(r,this,!1),1===l&&this._siblings[s].length>1&&X(r,this,null,1,this._siblings[s])):(r=a[s--]=D.selector(r),"string"==typeof r&&a.splice(s+1,1)):a.splice(s--,1);else this._propLookup={},this._siblings=$(e,this,!1),1===l&&this._siblings.length>1&&X(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),I=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,n={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!M[i]||M[i]&&M[i]._autoCSS)||(n[i]=t[i],delete t[i]);t.css=n};r=D.prototype=new C,r.constructor=D,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=r._lazy=!1,D.version="1.13.1",D.defaultEase=r._ease=new w(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=!0,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var F=[],L={},O=D._internals={isArray:m,isSelector:I,lazyTweens:F},M=D._plugins={},N=O.tweenLookup={},U=0,q=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1},j={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=C._rootFramesTimeline=new E,Q=C._rootTimeline=new E,B=O.lazyRender=function(){var t=F.length;for(L={};--t>-1;)n=F[t],n&&n._lazy!==!1&&(n.render(n._lazy,!1,!0),n._lazy=!1);F.length=0};Q._startTime=a.time,G._startTime=a.frame,Q._active=G._active=!0,setTimeout(B,1),C._updateRoot=D.render=function(){var t,e,i;if(F.length&&B(),Q.render((a.time-Q._startTime)*Q._timeScale,!1,!1),G.render((a.frame-G._startTime)*G._timeScale,!1,!1),F.length&&B(),!(a.frame%120)){for(i in N){for(e=N[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete N[i]}if(i=Q._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",C._updateRoot);var $=function(t,e,i){var n,s,r=t._gsTweenID;if(N[r||(t._gsTweenID=r="t"+U++)]||(N[r]={target:t,tweens:[]}),e&&(n=N[r].tweens,n[s=n.length]=e,i))for(;--s>-1;)n[s]===e&&n.splice(s,1);return N[r].tweens},X=function(t,e,i,n,s){var r,a,o,l;if(1===n||n>=4){for(l=s.length,r=0;l>r;r++)if((o=s[r])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===n)break;return a}var h,u=e._startTime+_,c=[],m=0,f=0===e._duration;for(r=s.length;--r>-1;)(o=s[r])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||Y(e,0,f),0===Y(o,h,f)&&(c[m++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(c[m++]=o)));for(r=m;--r>-1;)o=c[r],2===n&&o._kill(i,t)&&(a=!0),(2!==n||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},Y=function(t,e,i){for(var n=t._timeline,s=n._timeScale,r=t._startTime;n._timeline;){if(r+=n._startTime,s*=n._timeScale,n._paused)return-100;n=n._timeline}return r/=s,r>e?r-e:i&&r===e||!t._initted&&2*_>r-e?_:(r+=t.totalDuration()/t._timeScale/s)>e+_?0:r-e-_};r._init=function(){var t,e,i,n,s,r=this.vars,a=this._overwrittenProps,o=this._duration,l=!!r.immediateRender,h=r.ease;if(r.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),s={};for(n in r.startAt)s[n]=r.startAt[n];if(s.overwrite=!1,s.immediateRender=!0,s.lazy=l&&r.lazy!==!1,s.startAt=s.delay=null,this._startAt=D.to(this.target,0,s),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(r.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{i={};for(n in r)q[n]&&"autoCSS"!==n||(i[n]=r[n]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&r.lazy!==!1,i.immediateRender=l,this._startAt=D.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1)}if(this._ease=h=h?h instanceof w?h:"function"==typeof h?new w(h,r.easeParams):y[h]||D.defaultEase:D.defaultEase,r.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,r.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,n,s){var r,a,o,l,h,_;if(null==e)return!1;L[e._gsTweenID]&&B(),this.vars.css||e.style&&e!==t&&e.nodeType&&M.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(r in this.vars){if(_=this.vars[r],q[r])_&&(_ instanceof Array||_.push&&m(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[r]=_=this._swapSelfInParams(_,this));else if(M[r]&&(l=new M[r])._onInitTween(e,this.vars[r],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:r,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[r]=h={_next:this._firstPT,t:e,p:r,f:"function"==typeof e[r],n:r,pg:!1,pr:0},h.s=h.f?e[r.indexOf("set")||"function"!=typeof e["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(e[r]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return s&&this._kill(s,e)?this._initProps(e,i,n,s):this._overwrite>1&&this._firstPT&&n.length>1&&X(e,this,i,this._overwrite,n)?(this._kill(i,e),this._initProps(e,i,n,s)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[e._gsTweenID]=!0),o)},r.render=function(t,e,i){var n,s,r,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(n=!0,s="onComplete"),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_)&&h!==t&&(i=!0,h>_&&(s="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0&&h!==_)&&(s="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,c=this._easeType,m=this._easePower;(1===c||3===c&&u>=.5)&&(u=1-u),3===c&&(u*=2),1===m?u*=u:2===m?u*=u*u:3===m?u*=u*u*u:4===m&&(u*=u*u*u*u),this.ratio=1===c?1-u:2===c?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,F.push(this),void(this._lazy=t);this._time&&!n?this.ratio=this._ease.getRatio(this._time/l):n&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):s||(s="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||T))),r=this._firstPT;r;)r.f?r.t[r.p](r.c*this.ratio+r.s):r.t[r.p]=r.c*this.ratio+r.s,r=r._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||n)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||T)),s&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this.vars[s].apply(this.vars[s+"Scope"]||this,this.vars[s+"Params"]||T),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var i,n,s,r,a,o,l,h;if((m(e)||I(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],n=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,n=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==n&&"all"!==n&&t!==a&&("object"!=typeof t||!t._tempKill);for(s in l)(r=a[s])&&(r.pg&&r.t._kill(l)&&(o=!0),r.pg&&0!==r.t._overwriteProps.length||(r._prev?r._prev._next=r._next:r===this._firstPT&&(this._firstPT=r._next),r._next&&(r._next._prev=r._prev),r._next=r._prev=null),delete a[s]),h&&(n[s]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=this._lazy=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,n=this._targets;if(n)for(i=n.length;--i>-1;)this._siblings[i]=$(n[i],this,!0);else this._siblings=$(this.target,this,!0)}return C.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,n){return n.startAt=i,n.immediateRender=0!=n.immediateRender&&0!=i.immediateRender,new D(t,e,n)},D.delayedCall=function(t,e,i,n,s){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:n,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:n,immediateRender:!1,useFrames:s,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,n,s,r;if((m(t)||I(t))&&"number"!=typeof t[0]){for(i=t.length,n=[];--i>-1;)n=n.concat(D.getTweensOf(t[i],e));for(i=n.length;--i>-1;)for(r=n[i],s=i;--s>-1;)r===n[s]&&n.splice(i,1)}else for(n=$(t).concat(),i=n.length;--i>-1;)(n[i]._gc||e&&!n[i].isActive())&&n.splice(i,1);return n},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var n=D.getTweensOf(t,e),s=n.length;--s>-1;)n[s]._kill(i,t)};var H=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=H.prototype},!0);if(r=H.prototype,H.version="1.10.1",H.API=2,r._firstPT=null,r._addTween=function(t,e,i,n,s,r){var a,o;return null!=n&&(a="number"==typeof n||"="!==n.charAt(1)?Number(n)-i:parseInt(n.charAt(0)+"1",10)*Number(n.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:s||e,r:r},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,n=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):n>e&&e>-n&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,n=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;n;)null!=t[n.n]&&(n._next&&(n._next._prev=n._prev),n._prev?(n._prev._next=n._next,n._prev=null):this._firstPT===n&&(this._firstPT=n._next)),n=n._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,n,s,r,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,n=s;n&&n.pr>o.pr;)n=n._next;(o._prev=n?n._prev:r)?o._prev._next=o:s=o,(o._next=n)?n._prev=o:r=o,o=a}o=e._firstPT=s}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},H.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===H.API&&(M[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,n=t.priority||0,s=t.overwriteProps,r={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){H.call(this,i,n),this._overwriteProps=s||[]},t.global===!0),o=a.prototype=new H(i);o.constructor=a,a.API=t.API;for(e in r)"function"==typeof t[e]&&(o[r[e]]=t[e]);return a.version=t.version,H.activate([a]),a},n=t._gsQueue){for(s=0;n.length>s;s++)n[s]();for(r in f)f[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite"),$(function(){function t(){u=window.innerWidth,c=window.innerHeight,d={x:u/1,y:c/1},m=document.getElementById("spiders"),m.width=u,m.height=c,f=m.getContext("2d"),p=[];for(var t=0;u>t;t+=u/15)for(var e=0;c>e;e+=c/15){var i=t+Math.random()*u/15,n=e+Math.random()*c/15,s={x:i,originX:i,y:n,originY:n};p.push(s)}for(var r=0;r<p.length;r++){for(var a=[],o=p[r],l=0;l<p.length;l++){var v=p[l];if(o!=v){for(var g=!1,T=0;4>T;T++)g||void 0==a[T]&&(a[T]=v,g=!0);for(var T=0;4>T;T++)g||_(o,v)<_(o,a[T])&&(a[T]=v,g=!0)}}o.closest=a}for(var r in p){var w=new h(p[r],3+1*Math.random(),"rgba(255,255,255,1)");p[r].circle=w}}function e(){"ontouchstart"in window||window.addEventListener("mousemove",i),window.addEventListener("scroll",n),window.addEventListener("resize",s)}function i(t){var e=posy=0;t.pageX||t.pageY?(e=t.pageX,posy=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,posy=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),d.x=e,d.y=posy}function n(){v=document.body.scrollTop>c?!1:!0}function s(){u=window.innerWidth,c=window.innerHeight,m.width=u,m.height=c}function r(){a();for(var t in p)o(p[t])}function a(){if(v){f.clearRect(0,0,u,c);for(var t in p)Math.abs(_(d,p[t]))<2e3?(p[t].active=.2,p[t].circle.active=.5):Math.abs(_(d,p[t]))<2e4?(p[t].active=.1,p[t].circle.active=.3):Math.abs(_(d,p[t]))<7e4?(p[t].active=.02,p[t].circle.active=.09):Math.abs(_(d,p[t]))<14e4?(p[t].active=0,p[t].circle.active=.02):(p[t].active=0,p[t].circle.active=0),l(p[t]),p[t].circle.draw()}requestAnimationFrame(a)}function o(t){TweenLite.to(t,1+1*Math.random(),{x:t.originX-50+100*Math.random(),y:t.originY-50+100*Math.random(),onComplete:function(){o(t)}})}function l(t){if(t.active)for(var e in t.closest)f.beginPath(),f.moveTo(t.x,t.y),f.lineTo(t.closest[e].x,t.closest[e].y),f.strokeStyle="rgba(255,255,255,"+t.active+")",f.stroke()}function h(t,e,i){var n=this;!function(){n.pos=t||null,n.radius=e||null,n.color=i||null}(),this.draw=function(){n.active&&(f.beginPath(),f.arc(n.pos.x,n.pos.y,n.radius,0,2*Math.PI,!1),f.fillStyle="rgba(255,255,255,"+n.active+")",f.fill())}}function _(t,e){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)}var u,c,m,f,p,d,v=!0;t(),r(),e()});
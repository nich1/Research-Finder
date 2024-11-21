function Vp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Hp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nd={exports:{}},Io={},rd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),Wp=Symbol.for("react.portal"),Kp=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),qp=Symbol.for("react.profiler"),Qp=Symbol.for("react.provider"),Yp=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),Xp=Symbol.for("react.suspense"),Zp=Symbol.for("react.memo"),em=Symbol.for("react.lazy"),eu=Symbol.iterator;function tm(e){return e===null||typeof e!="object"?null:(e=eu&&e[eu]||e["@@iterator"],typeof e=="function"?e:null)}var id={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},od=Object.assign,sd={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=sd,this.updater=n||id}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ad(){}ad.prototype=Qn.prototype;function za(e,t,n){this.props=e,this.context=t,this.refs=sd,this.updater=n||id}var $a=za.prototype=new ad;$a.constructor=za;od($a,Qn.prototype);$a.isPureReactComponent=!0;var tu=Array.isArray,ld=Object.prototype.hasOwnProperty,ba={current:null},ud={key:!0,ref:!0,__self:!0,__source:!0};function cd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ld.call(t,r)&&!ud.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qr,type:e,key:o,ref:s,props:i,_owner:ba.current}}function nm(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function rm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nu=/\/+/g;function Yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rm(""+e.key):t.toString(36)}function Ti(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qr:case Wp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Yo(s,0):r,tu(i)?(n="",e!=null&&(n=e.replace(nu,"$&/")+"/"),Ti(i,t,n,"",function(u){return u})):i!=null&&(Ba(i)&&(i=nm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(nu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",tu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Yo(o,a);s+=Ti(o,t,n,l,i)}else if(l=tm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Yo(o,a++),s+=Ti(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ai(e,t,n){if(e==null)return e;var r=[],i=0;return Ti(e,r,"","",function(o){return t.call(n,o,i++)}),r}function im(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Ci={transition:null},om={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:ba};function dd(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:ai,forEach:function(e,t,n){ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ai(e,function(){t++}),t},toArray:function(e){return ai(e,function(t){return t})||[]},only:function(e){if(!Ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Qn;D.Fragment=Kp;D.Profiler=qp;D.PureComponent=za;D.StrictMode=Gp;D.Suspense=Xp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=om;D.act=dd;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=od({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ld.call(t,l)&&!ud.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:Yp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qp,_context:e},e.Consumer=e};D.createElement=cd;D.createFactory=function(e){var t=cd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Jp,render:e}};D.isValidElement=Ba;D.lazy=function(e){return{$$typeof:em,_payload:{_status:-1,_result:e},_init:im}};D.memo=function(e,t){return{$$typeof:Zp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};D.unstable_act=dd;D.useCallback=function(e,t){return de.current.useCallback(e,t)};D.useContext=function(e){return de.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return de.current.useDeferredValue(e)};D.useEffect=function(e,t){return de.current.useEffect(e,t)};D.useId=function(){return de.current.useId()};D.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return de.current.useMemo(e,t)};D.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};D.useRef=function(e){return de.current.useRef(e)};D.useState=function(e){return de.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return de.current.useTransition()};D.version="18.3.1";rd.exports=D;var A=rd.exports;const fd=Hp(A),sm=Vp({__proto__:null,default:fd},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am=A,lm=Symbol.for("react.element"),um=Symbol.for("react.fragment"),cm=Object.prototype.hasOwnProperty,dm=am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fm={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)cm.call(t,r)&&!fm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lm,type:e,key:o,ref:s,props:i,_owner:dm.current}}Io.Fragment=um;Io.jsx=hd;Io.jsxs=hd;nd.exports=Io;var R=nd.exports,xs={},pd={exports:{}},Te={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,O){var x=k.length;k.push(O);e:for(;0<x;){var G=x-1>>>1,X=k[G];if(0<i(X,O))k[G]=O,k[x]=X,x=G;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var O=k[0],x=k.pop();if(x!==O){k[0]=x;e:for(var G=0,X=k.length,oi=X>>>1;G<oi;){var qt=2*(G+1)-1,Qo=k[qt],Qt=qt+1,si=k[Qt];if(0>i(Qo,x))Qt<X&&0>i(si,Qo)?(k[G]=si,k[Qt]=x,G=Qt):(k[G]=Qo,k[qt]=x,G=qt);else if(Qt<X&&0>i(si,x))k[G]=si,k[Qt]=x,G=Qt;else break e}}return O}function i(k,O){var x=k.sortIndex-O.sortIndex;return x!==0?x:k.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,d=null,m=3,g=!1,y=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=k)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function v(k){if(w=!1,p(k),!y)if(n(l)!==null)y=!0,Go(S);else{var O=n(u);O!==null&&qo(v,O.startTime-k)}}function S(k,O){y=!1,w&&(w=!1,f(P),P=-1),g=!0;var x=m;try{for(p(O),d=n(l);d!==null&&(!(d.expirationTime>O)||k&&!De());){var G=d.callback;if(typeof G=="function"){d.callback=null,m=d.priorityLevel;var X=G(d.expirationTime<=O);O=e.unstable_now(),typeof X=="function"?d.callback=X:d===n(l)&&r(l),p(O)}else r(l);d=n(l)}if(d!==null)var oi=!0;else{var qt=n(u);qt!==null&&qo(v,qt.startTime-O),oi=!1}return oi}finally{d=null,m=x,g=!1}}var T=!1,C=null,P=-1,z=5,L=-1;function De(){return!(e.unstable_now()-L<z)}function er(){if(C!==null){var k=e.unstable_now();L=k;var O=!0;try{O=C(!0,k)}finally{O?tr():(T=!1,C=null)}}else T=!1}var tr;if(typeof c=="function")tr=function(){c(er)};else if(typeof MessageChannel<"u"){var Zl=new MessageChannel,Bp=Zl.port2;Zl.port1.onmessage=er,tr=function(){Bp.postMessage(null)}}else tr=function(){E(er,0)};function Go(k){C=k,T||(T=!0,tr())}function qo(k,O){P=E(function(){k(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Go(S))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var x=m;m=O;try{return k()}finally{m=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,O){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var x=m;m=k;try{return O()}finally{m=x}},e.unstable_scheduleCallback=function(k,O,x){var G=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?G+x:G):x=G,k){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=x+X,k={id:h++,callback:O,priorityLevel:k,startTime:x,expirationTime:X,sortIndex:-1},x>G?(k.sortIndex=x,t(u,k),n(l)===null&&k===n(u)&&(w?(f(P),P=-1):w=!0,qo(v,x-G))):(k.sortIndex=X,t(l,k),y||g||(y=!0,Go(S))),k},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(k){var O=m;return function(){var x=m;m=O;try{return k.apply(this,arguments)}finally{m=x}}}})(gd);md.exports=gd;var hm=md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=A,ke=hm;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vd=new Set,Pr={};function gn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Pr[e]=t,e=0;e<t.length;e++)vd.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ls=Object.prototype.hasOwnProperty,mm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ru={},iu={};function gm(e){return Ls.call(iu,e)?!0:Ls.call(ru,e)?!1:mm.test(e)?iu[e]=!0:(ru[e]=!0,!1)}function vm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ym(e,t,n,r){if(t===null||typeof t>"u"||vm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Va=/[\-:]([a-z])/g;function Ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Va,Ha);re[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Va,Ha);re[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Va,Ha);re[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wa(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ym(t,n,i,r)&&(n=null),r||i===null?gm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,li=Symbol.for("react.element"),_n=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),Ka=Symbol.for("react.strict_mode"),Ds=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),wd=Symbol.for("react.context"),Ga=Symbol.for("react.forward_ref"),Ms=Symbol.for("react.suspense"),Us=Symbol.for("react.suspense_list"),qa=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),_d=Symbol.for("react.offscreen"),ou=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=ou&&e[ou]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Jo;function cr(e){if(Jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var Xo=!1;function Zo(e,t){if(!e||Xo)return"";Xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Xo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function wm(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function Fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case _n:return"Portal";case Ds:return"Profiler";case Ka:return"StrictMode";case Ms:return"Suspense";case Us:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wd:return(e.displayName||"Context")+".Consumer";case yd:return(e._context.displayName||"Context")+".Provider";case Ga:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qa:return t=e.displayName||null,t!==null?t:Fs(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return Fs(e(t))}catch{}}return null}function _m(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fs(t);case 8:return t===Ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Em(e){var t=Ed(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ui(e){e._valueTracker||(e._valueTracker=Em(e))}function Sd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ed(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function js(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Id(e,t){t=t.checked,t!=null&&Wa(e,"checked",t,!1)}function zs(e,t){Id(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$s(e,t.type,n):t.hasOwnProperty("defaultValue")&&$s(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function au(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $s(e,t,n){(t!=="number"||Bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(dr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function kd(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function uu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Td(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Td(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,Cd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sm=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Sm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function Pd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function Rd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Im=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vs(e,t){if(t){if(Im[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ws=null;function Qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,Ln=null,Dn=null;function cu(e){if(e=Jr(e)){if(typeof Ks!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ro(t),Ks(e.stateNode,e.type,t))}}function Nd(e){Ln?Dn?Dn.push(e):Dn=[e]:Ln=e}function Ad(){if(Ln){var e=Ln,t=Dn;if(Dn=Ln=null,cu(e),t)for(e=0;e<t.length;e++)cu(t[e])}}function Od(e,t){return e(t)}function xd(){}var es=!1;function Ld(e,t,n){if(es)return e(t,n);es=!0;try{return Od(e,t,n)}finally{es=!1,(Ln!==null||Dn!==null)&&(xd(),Ad())}}function Nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Gs=!1;if(ut)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Gs=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Gs=!1}function km(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var vr=!1,Vi=null,Hi=!1,qs=null,Tm={onError:function(e){vr=!0,Vi=e}};function Cm(e,t,n,r,i,o,s,a,l){vr=!1,Vi=null,km.apply(Tm,arguments)}function Pm(e,t,n,r,i,o,s,a,l){if(Cm.apply(this,arguments),vr){if(vr){var u=Vi;vr=!1,Vi=null}else throw Error(_(198));Hi||(Hi=!0,qs=u)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function du(e){if(vn(e)!==e)throw Error(_(188))}function Rm(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return du(i),e;if(o===r)return du(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Md(e){return e=Rm(e),e!==null?Ud(e):null}function Ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ud(e);if(t!==null)return t;e=e.sibling}return null}var Fd=ke.unstable_scheduleCallback,fu=ke.unstable_cancelCallback,Nm=ke.unstable_shouldYield,Am=ke.unstable_requestPaint,q=ke.unstable_now,Om=ke.unstable_getCurrentPriorityLevel,Ya=ke.unstable_ImmediatePriority,jd=ke.unstable_UserBlockingPriority,Wi=ke.unstable_NormalPriority,xm=ke.unstable_LowPriority,zd=ke.unstable_IdlePriority,ko=null,Ge=null;function Lm(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:Um,Dm=Math.log,Mm=Math.LN2;function Um(e){return e>>>=0,e===0?32:31-(Dm(e)/Mm|0)|0}var di=64,fi=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=fr(a):(o&=s,o!==0&&(r=fr(o)))}else s=n&~i,s!==0?r=fr(s):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),i=1<<n,r|=e[n],t&=~i;return r}function Fm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-$e(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Fm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $d(){var e=di;return di<<=1,!(di&4194240)&&(di=64),e}function ts(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function zm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$e(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ja(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function bd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bd,Xa,Vd,Hd,Wd,Ys=!1,hi=[],At=null,Ot=null,xt=null,Ar=new Map,Or=new Map,St=[],$m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&Xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bm(e,t,n,r,i){switch(t){case"focusin":return At=ir(At,e,t,n,r,i),!0;case"dragenter":return Ot=ir(Ot,e,t,n,r,i),!0;case"mouseover":return xt=ir(xt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ar.set(o,ir(Ar.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Or.set(o,ir(Or.get(o)||null,e,t,n,r,i)),!0}return!1}function Kd(e){var t=Zt(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Dd(n),t!==null){e.blockedOn=t,Wd(e.priority,function(){Vd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Js(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ws=r,n.target.dispatchEvent(r),Ws=null}else return t=Jr(n),t!==null&&Xa(t),e.blockedOn=n,!1;t.shift()}return!0}function pu(e,t,n){Pi(e)&&n.delete(t)}function Bm(){Ys=!1,At!==null&&Pi(At)&&(At=null),Ot!==null&&Pi(Ot)&&(Ot=null),xt!==null&&Pi(xt)&&(xt=null),Ar.forEach(pu),Or.forEach(pu)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Bm)))}function xr(e){function t(i){return or(i,e)}if(0<hi.length){or(hi[0],e);for(var n=1;n<hi.length;n++){var r=hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&or(At,e),Ot!==null&&or(Ot,e),xt!==null&&or(xt,e),Ar.forEach(t),Or.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)Kd(n),n.blockedOn===null&&St.shift()}var Mn=gt.ReactCurrentBatchConfig,Gi=!0;function Vm(e,t,n,r){var i=U,o=Mn.transition;Mn.transition=null;try{U=1,Za(e,t,n,r)}finally{U=i,Mn.transition=o}}function Hm(e,t,n,r){var i=U,o=Mn.transition;Mn.transition=null;try{U=4,Za(e,t,n,r)}finally{U=i,Mn.transition=o}}function Za(e,t,n,r){if(Gi){var i=Js(e,t,n,r);if(i===null)ds(e,t,r,qi,n),hu(e,r);else if(bm(i,e,t,n,r))r.stopPropagation();else if(hu(e,r),t&4&&-1<$m.indexOf(e)){for(;i!==null;){var o=Jr(i);if(o!==null&&Bd(o),o=Js(e,t,n,r),o===null&&ds(e,t,r,qi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ds(e,t,r,null,n)}}var qi=null;function Js(e,t,n,r){if(qi=null,e=Qa(r),e=Zt(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qi=e,null}function Gd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Om()){case Ya:return 1;case jd:return 4;case Wi:case xm:return 16;case zd:return 536870912;default:return 16}default:return 16}}var Pt=null,el=null,Ri=null;function qd(){if(Ri)return Ri;var e,t=el,n=t.length,r,i="value"in Pt?Pt.value:Pt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ri=i.slice(e,1<r?1-r:void 0)}function Ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function mu(){return!1}function Ce(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pi:mu,this.isPropagationStopped=mu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Ce(Yn),Yr=W({},Yn,{view:0,detail:0}),Wm=Ce(Yr),ns,rs,sr,To=W({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(ns=e.screenX-sr.screenX,rs=e.screenY-sr.screenY):rs=ns=0,sr=e),ns)},movementY:function(e){return"movementY"in e?e.movementY:rs}}),gu=Ce(To),Km=W({},To,{dataTransfer:0}),Gm=Ce(Km),qm=W({},Yr,{relatedTarget:0}),is=Ce(qm),Qm=W({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ym=Ce(Qm),Jm=W({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xm=Ce(Jm),Zm=W({},Yn,{data:0}),vu=Ce(Zm),eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ng[e])?!!t[e]:!1}function nl(){return rg}var ig=W({},Yr,{key:function(e){if(e.key){var t=eg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?Ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),og=Ce(ig),sg=W({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yu=Ce(sg),ag=W({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),lg=Ce(ag),ug=W({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cg=Ce(ug),dg=W({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=Ce(dg),hg=[9,13,27,32],rl=ut&&"CompositionEvent"in window,yr=null;ut&&"documentMode"in document&&(yr=document.documentMode);var pg=ut&&"TextEvent"in window&&!yr,Qd=ut&&(!rl||yr&&8<yr&&11>=yr),wu=String.fromCharCode(32),_u=!1;function Yd(e,t){switch(e){case"keyup":return hg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function mg(e,t){switch(e){case"compositionend":return Jd(t);case"keypress":return t.which!==32?null:(_u=!0,wu);case"textInput":return e=t.data,e===wu&&_u?null:e;default:return null}}function gg(e,t){if(Sn)return e==="compositionend"||!rl&&Yd(e,t)?(e=qd(),Ri=el=Pt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qd&&t.locale!=="ko"?null:t.data;default:return null}}var vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vg[e.type]:t==="textarea"}function Xd(e,t,n,r){Nd(r),t=Qi(t,"onChange"),0<t.length&&(n=new tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Lr=null;function yg(e){cf(e,0)}function Co(e){var t=Tn(e);if(Sd(t))return e}function wg(e,t){if(e==="change")return t}var Zd=!1;if(ut){var os;if(ut){var ss="oninput"in document;if(!ss){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),ss=typeof Su.oninput=="function"}os=ss}else os=!1;Zd=os&&(!document.documentMode||9<document.documentMode)}function Iu(){wr&&(wr.detachEvent("onpropertychange",ef),Lr=wr=null)}function ef(e){if(e.propertyName==="value"&&Co(Lr)){var t=[];Xd(t,Lr,e,Qa(e)),Ld(yg,t)}}function _g(e,t,n){e==="focusin"?(Iu(),wr=t,Lr=n,wr.attachEvent("onpropertychange",ef)):e==="focusout"&&Iu()}function Eg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Lr)}function Sg(e,t){if(e==="click")return Co(t)}function Ig(e,t){if(e==="input"||e==="change")return Co(t)}function kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:kg;function Dr(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ls.call(t,i)||!Ve(e[i],t[i]))return!1}return!0}function ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tu(e,t){var n=ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ku(n)}}function tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nf(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tg(e){var t=nf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tf(n.ownerDocument.documentElement,n)){if(r!==null&&il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Tu(n,o);var s=Tu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cg=ut&&"documentMode"in document&&11>=document.documentMode,In=null,Xs=null,_r=null,Zs=!1;function Cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zs||In==null||In!==Bi(r)||(r=In,"selectionStart"in r&&il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_r&&Dr(_r,r)||(_r=r,r=Qi(Xs,"onSelect"),0<r.length&&(t=new tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},as={},rf={};ut&&(rf=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Po(e){if(as[e])return as[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rf)return as[e]=t[n];return e}var of=Po("animationend"),sf=Po("animationiteration"),af=Po("animationstart"),lf=Po("transitionend"),uf=new Map,Pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){uf.set(e,t),gn(t,[e])}for(var ls=0;ls<Pu.length;ls++){var us=Pu[ls],Pg=us.toLowerCase(),Rg=us[0].toUpperCase()+us.slice(1);Bt(Pg,"on"+Rg)}Bt(of,"onAnimationEnd");Bt(sf,"onAnimationIteration");Bt(af,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(lf,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pm(r,t,void 0,e),e.currentTarget=null}function cf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ru(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ru(i,a,u),o=l}}}if(Hi)throw e=qs,Hi=!1,qs=null,e}function $(e,t){var n=t[ia];n===void 0&&(n=t[ia]=new Set);var r=e+"__bubble";n.has(r)||(df(t,e,2,!1),n.add(r))}function cs(e,t,n){var r=0;t&&(r|=4),df(n,e,r,t)}var gi="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[gi]){e[gi]=!0,vd.forEach(function(n){n!=="selectionchange"&&(Ng.has(n)||cs(n,!1,e),cs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,cs("selectionchange",!1,t))}}function df(e,t,n,r){switch(Gd(t)){case 1:var i=Vm;break;case 4:i=Hm;break;default:i=Za}n=i.bind(null,t,n,e),i=void 0,!Gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ds(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Zt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ld(function(){var u=o,h=Qa(n),d=[];e:{var m=uf.get(e);if(m!==void 0){var g=tl,y=e;switch(e){case"keypress":if(Ni(n)===0)break e;case"keydown":case"keyup":g=og;break;case"focusin":y="focus",g=is;break;case"focusout":y="blur",g=is;break;case"beforeblur":case"afterblur":g=is;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lg;break;case of:case sf:case af:g=Ym;break;case lf:g=cg;break;case"scroll":g=Wm;break;case"wheel":g=fg;break;case"copy":case"cut":case"paste":g=Xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=yu}var w=(t&4)!==0,E=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Nr(c,f),v!=null&&w.push(Ur(c,v,p)))),E)break;c=c.return}0<w.length&&(m=new g(m,y,null,n,h),d.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Ws&&(y=n.relatedTarget||n.fromElement)&&(Zt(y)||y[ct]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Zt(y):null,y!==null&&(E=vn(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=gu,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=yu,v="onPointerLeave",f="onPointerEnter",c="pointer"),E=g==null?m:Tn(g),p=y==null?m:Tn(y),m=new w(v,c+"leave",g,n,h),m.target=E,m.relatedTarget=p,v=null,Zt(h)===u&&(w=new w(f,c+"enter",y,n,h),w.target=p,w.relatedTarget=E,v=w),E=v,g&&y)t:{for(w=g,f=y,c=0,p=w;p;p=wn(p))c++;for(p=0,v=f;v;v=wn(v))p++;for(;0<c-p;)w=wn(w),c--;for(;0<p-c;)f=wn(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=wn(w),f=wn(f)}w=null}else w=null;g!==null&&Nu(d,m,g,w,!1),y!==null&&E!==null&&Nu(d,E,y,w,!0)}}e:{if(m=u?Tn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=wg;else if(Eu(m))if(Zd)S=Ig;else{S=Eg;var T=_g}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Sg);if(S&&(S=S(e,u))){Xd(d,S,n,h);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&$s(m,"number",m.value)}switch(T=u?Tn(u):window,e){case"focusin":(Eu(T)||T.contentEditable==="true")&&(In=T,Xs=u,_r=null);break;case"focusout":_r=Xs=In=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,Cu(d,n,h);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":Cu(d,n,h)}var C;if(rl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Sn?Yd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Qd&&n.locale!=="ko"&&(Sn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Sn&&(C=qd()):(Pt=h,el="value"in Pt?Pt.value:Pt.textContent,Sn=!0)),T=Qi(u,P),0<T.length&&(P=new vu(P,e,null,n,h),d.push({event:P,listeners:T}),C?P.data=C:(C=Jd(n),C!==null&&(P.data=C)))),(C=pg?mg(e,n):gg(e,n))&&(u=Qi(u,"onBeforeInput"),0<u.length&&(h=new vu("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=C))}cf(d,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Nr(e,n),o!=null&&r.unshift(Ur(e,o,i)),o=Nr(e,t),o!=null&&r.push(Ur(e,o,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Nr(n,o),l!=null&&s.unshift(Ur(n,l,a))):i||(l=Nr(n,o),l!=null&&s.push(Ur(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ag=/\r\n?/g,Og=/\u0000|\uFFFD/g;function Au(e){return(typeof e=="string"?e:""+e).replace(Ag,`
`).replace(Og,"")}function vi(e,t,n){if(t=Au(t),Au(e)!==t&&n)throw Error(_(425))}function Yi(){}var ea=null,ta=null;function na(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ra=typeof setTimeout=="function"?setTimeout:void 0,xg=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,Lg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(Dg)}:ra;function Dg(e){setTimeout(function(){throw e})}function fs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xr(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Jn,Fr="__reactProps$"+Jn,ct="__reactContainer$"+Jn,ia="__reactEvents$"+Jn,Mg="__reactListeners$"+Jn,Ug="__reactHandles$"+Jn;function Zt(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xu(e);e!==null;){if(n=e[Ke])return n;e=xu(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[Ke]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ro(e){return e[Fr]||null}var oa=[],Cn=-1;function Vt(e){return{current:e}}function b(e){0>Cn||(e.current=oa[Cn],oa[Cn]=null,Cn--)}function j(e,t){Cn++,oa[Cn]=e.current,e.current=t}var bt={},ae=Vt(bt),me=Vt(!1),an=bt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function Ji(){b(me),b(ae)}function Lu(e,t,n){if(ae.current!==bt)throw Error(_(168));j(ae,t),j(me,n)}function ff(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,_m(e)||"Unknown",i));return W({},n,r)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,an=ae.current,j(ae,e),j(me,me.current),!0}function Du(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=ff(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,b(me),b(ae),j(ae,e)):b(me),j(me,n)}var et=null,No=!1,hs=!1;function hf(e){et===null?et=[e]:et.push(e)}function Fg(e){No=!0,hf(e)}function Ht(){if(!hs&&et!==null){hs=!0;var e=0,t=U;try{var n=et;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,No=!1}catch(i){throw et!==null&&(et=et.slice(e+1)),Fd(Ya,Ht),i}finally{U=t,hs=!1}}return null}var Pn=[],Rn=0,Zi=null,eo=0,Pe=[],Re=0,ln=null,nt=1,rt="";function Yt(e,t){Pn[Rn++]=eo,Pn[Rn++]=Zi,Zi=e,eo=t}function pf(e,t,n){Pe[Re++]=nt,Pe[Re++]=rt,Pe[Re++]=ln,ln=e;var r=nt;e=rt;var i=32-$e(r)-1;r&=~(1<<i),n+=1;var o=32-$e(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,nt=1<<32-$e(t)+i|n<<i|r,rt=o+e}else nt=1<<o|n<<i|r,rt=e}function ol(e){e.return!==null&&(Yt(e,1),pf(e,1,0))}function sl(e){for(;e===Zi;)Zi=Pn[--Rn],Pn[Rn]=null,eo=Pn[--Rn],Pn[Rn]=null;for(;e===ln;)ln=Pe[--Re],Pe[Re]=null,rt=Pe[--Re],Pe[Re]=null,nt=Pe[--Re],Pe[Re]=null}var Se=null,Ee=null,B=!1,je=null;function mf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ee=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,Ee=null,!0):!1;default:return!1}}function sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(B){var t=Ee;if(t){var n=t;if(!Mu(e,t)){if(sa(e))throw Error(_(418));t=Lt(n.nextSibling);var r=Se;t&&Mu(e,t)?mf(r,n):(e.flags=e.flags&-4097|2,B=!1,Se=e)}}else{if(sa(e))throw Error(_(418));e.flags=e.flags&-4097|2,B=!1,Se=e}}}function Uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function yi(e){if(e!==Se)return!1;if(!B)return Uu(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!na(e.type,e.memoizedProps)),t&&(t=Ee)){if(sa(e))throw gf(),Error(_(418));for(;t;)mf(e,t),t=Lt(t.nextSibling)}if(Uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Se?Lt(e.stateNode.nextSibling):null;return!0}function gf(){for(var e=Ee;e;)e=Lt(e.nextSibling)}function Hn(){Ee=Se=null,B=!1}function al(e){je===null?je=[e]:je.push(e)}var jg=gt.ReactCurrentBatchConfig;function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function wi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fu(e){var t=e._init;return t(e._payload)}function vf(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Ft(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,v){return c===null||c.tag!==6?(c=_s(p,f.mode,v),c.return=f,c):(c=i(c,p),c.return=f,c)}function l(f,c,p,v){var S=p.type;return S===En?h(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&Fu(S)===c.type)?(v=i(c,p.props),v.ref=ar(f,c,p),v.return=f,v):(v=Ui(p.type,p.key,p.props,null,f.mode,v),v.ref=ar(f,c,p),v.return=f,v)}function u(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Es(p,f.mode,v),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function h(f,c,p,v,S){return c===null||c.tag!==7?(c=sn(p,f.mode,v,S),c.return=f,c):(c=i(c,p),c.return=f,c)}function d(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=_s(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case li:return p=Ui(c.type,c.key,c.props,null,f.mode,p),p.ref=ar(f,null,c),p.return=f,p;case _n:return c=Es(c,f.mode,p),c.return=f,c;case _t:var v=c._init;return d(f,v(c._payload),p)}if(dr(c)||nr(c))return c=sn(c,f.mode,p,null),c.return=f,c;wi(f,c)}return null}function m(f,c,p,v){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case li:return p.key===S?l(f,c,p,v):null;case _n:return p.key===S?u(f,c,p,v):null;case _t:return S=p._init,m(f,c,S(p._payload),v)}if(dr(p)||nr(p))return S!==null?null:h(f,c,p,v,null);wi(f,p)}return null}function g(f,c,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(c,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case li:return f=f.get(v.key===null?p:v.key)||null,l(c,f,v,S);case _n:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,S);case _t:var T=v._init;return g(f,c,p,T(v._payload),S)}if(dr(v)||nr(v))return f=f.get(p)||null,h(c,f,v,S,null);wi(c,v)}return null}function y(f,c,p,v){for(var S=null,T=null,C=c,P=c=0,z=null;C!==null&&P<p.length;P++){C.index>P?(z=C,C=null):z=C.sibling;var L=m(f,C,p[P],v);if(L===null){C===null&&(C=z);break}e&&C&&L.alternate===null&&t(f,C),c=o(L,c,P),T===null?S=L:T.sibling=L,T=L,C=z}if(P===p.length)return n(f,C),B&&Yt(f,P),S;if(C===null){for(;P<p.length;P++)C=d(f,p[P],v),C!==null&&(c=o(C,c,P),T===null?S=C:T.sibling=C,T=C);return B&&Yt(f,P),S}for(C=r(f,C);P<p.length;P++)z=g(C,f,P,p[P],v),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?P:z.key),c=o(z,c,P),T===null?S=z:T.sibling=z,T=z);return e&&C.forEach(function(De){return t(f,De)}),B&&Yt(f,P),S}function w(f,c,p,v){var S=nr(p);if(typeof S!="function")throw Error(_(150));if(p=S.call(p),p==null)throw Error(_(151));for(var T=S=null,C=c,P=c=0,z=null,L=p.next();C!==null&&!L.done;P++,L=p.next()){C.index>P?(z=C,C=null):z=C.sibling;var De=m(f,C,L.value,v);if(De===null){C===null&&(C=z);break}e&&C&&De.alternate===null&&t(f,C),c=o(De,c,P),T===null?S=De:T.sibling=De,T=De,C=z}if(L.done)return n(f,C),B&&Yt(f,P),S;if(C===null){for(;!L.done;P++,L=p.next())L=d(f,L.value,v),L!==null&&(c=o(L,c,P),T===null?S=L:T.sibling=L,T=L);return B&&Yt(f,P),S}for(C=r(f,C);!L.done;P++,L=p.next())L=g(C,f,P,L.value,v),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?P:L.key),c=o(L,c,P),T===null?S=L:T.sibling=L,T=L);return e&&C.forEach(function(er){return t(f,er)}),B&&Yt(f,P),S}function E(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===En&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case li:e:{for(var S=p.key,T=c;T!==null;){if(T.key===S){if(S=p.type,S===En){if(T.tag===7){n(f,T.sibling),c=i(T,p.props.children),c.return=f,f=c;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&Fu(S)===T.type){n(f,T.sibling),c=i(T,p.props),c.ref=ar(f,T,p),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}p.type===En?(c=sn(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Ui(p.type,p.key,p.props,null,f.mode,v),v.ref=ar(f,c,p),v.return=f,f=v)}return s(f);case _n:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Es(p,f.mode,v),c.return=f,f=c}return s(f);case _t:return T=p._init,E(f,c,T(p._payload),v)}if(dr(p))return y(f,c,p,v);if(nr(p))return w(f,c,p,v);wi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=_s(p,f.mode,v),c.return=f,f=c),s(f)):n(f,c)}return E}var Wn=vf(!0),yf=vf(!1),to=Vt(null),no=null,Nn=null,ll=null;function ul(){ll=Nn=no=null}function cl(e){var t=to.current;b(to),e._currentValue=t}function la(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){no=e,ll=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(ll!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(no===null)throw Error(_(308));Nn=e,no.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var en=null;function dl(e){en===null?en=[e]:en.push(e)}function wf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,dl(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _f(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,dl(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function Ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}function ju(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ro(e,t,n,r){var i=e.updateQueue;Et=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,h=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(m=t,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(g,d,m);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(g,d,m):y,m==null)break e;d=W({},d,m);break e;case 2:Et=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=d):h=h.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cn|=s,e.lanes=s,e.memoizedState=d}}function zu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Xr={},qe=Vt(Xr),jr=Vt(Xr),zr=Vt(Xr);function tn(e){if(e===Xr)throw Error(_(174));return e}function hl(e,t){switch(j(zr,t),j(jr,e),j(qe,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bs(t,e)}b(qe),j(qe,t)}function Kn(){b(qe),b(jr),b(zr)}function Ef(e){tn(zr.current);var t=tn(qe.current),n=Bs(t,e.type);t!==n&&(j(jr,e),j(qe,n))}function pl(e){jr.current===e&&(b(qe),b(jr))}var V=Vt(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=[];function ml(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var Oi=gt.ReactCurrentDispatcher,ms=gt.ReactCurrentBatchConfig,un=0,H=null,Y=null,Z=null,oo=!1,Er=!1,$r=0,zg=0;function ie(){throw Error(_(321))}function gl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function vl(e,t,n,r,i,o){if(un=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oi.current=e===null||e.memoizedState===null?Vg:Hg,e=n(r,i),Er){o=0;do{if(Er=!1,$r=0,25<=o)throw Error(_(301));o+=1,Z=Y=null,t.updateQueue=null,Oi.current=Wg,e=n(r,i)}while(Er)}if(Oi.current=so,t=Y!==null&&Y.next!==null,un=0,Z=Y=H=null,oo=!1,t)throw Error(_(300));return e}function yl(){var e=$r!==0;return $r=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function xe(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?H.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(_(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function br(e,t){return typeof t=="function"?t(e):t}function gs(e){var t=xe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((un&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,H.lanes|=h,cn|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ve(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,cn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vs(e){var t=xe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ve(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Sf(){}function If(e,t){var n=H,r=xe(),i=t(),o=!Ve(r.memoizedState,i);if(o&&(r.memoizedState=i,pe=!0),r=r.queue,wl(Cf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Br(9,Tf.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(_(349));un&30||kf(n,t,i)}return i}function kf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tf(e,t,n,r){t.value=n,t.getSnapshot=r,Pf(t)&&Rf(e)}function Cf(e,t,n){return n(function(){Pf(t)&&Rf(e)})}function Pf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function Rf(e){var t=dt(e,1);t!==null&&be(t,e,1,-1)}function $u(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=Bg.bind(null,H,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nf(){return xe().memoizedState}function xi(e,t,n,r){var i=We();H.flags|=e,i.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function Ao(e,t,n,r){var i=xe();r=r===void 0?null:r;var o=void 0;if(Y!==null){var s=Y.memoizedState;if(o=s.destroy,r!==null&&gl(r,s.deps)){i.memoizedState=Br(t,n,o,r);return}}H.flags|=e,i.memoizedState=Br(1|t,n,o,r)}function bu(e,t){return xi(8390656,8,e,t)}function wl(e,t){return Ao(2048,8,e,t)}function Af(e,t){return Ao(4,2,e,t)}function Of(e,t){return Ao(4,4,e,t)}function xf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lf(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4,4,xf.bind(null,t,e),n)}function _l(){}function Df(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mf(e,t){var n=xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uf(e,t,n){return un&21?(Ve(n,t)||(n=$d(),H.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function $g(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ms.transition;ms.transition={};try{e(!1),t()}finally{U=n,ms.transition=r}}function Ff(){return xe().memoizedState}function bg(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jf(e))zf(t,n);else if(n=wf(e,t,n,r),n!==null){var i=ue();be(n,e,r,i),$f(n,t,r)}}function Bg(e,t,n){var r=Ut(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jf(e))zf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ve(a,s)){var l=t.interleaved;l===null?(i.next=i,dl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=wf(e,t,i,r),n!==null&&(i=ue(),be(n,e,r,i),$f(n,t,r))}}function jf(e){var t=e.alternate;return e===H||t!==null&&t===H}function zf(e,t){Er=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $f(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}var so={readContext:Oe,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Vg={readContext:Oe,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xi(4194308,4,xf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return xi(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bg.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:_l,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=$g.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=We();if(B){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ee===null)throw Error(_(349));un&30||kf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bu(Cf.bind(null,r,o,e),[e]),r.flags|=2048,Br(9,Tf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=We(),t=ee.identifierPrefix;if(B){var n=rt,r=nt;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hg={readContext:Oe,useCallback:Df,useContext:Oe,useEffect:wl,useImperativeHandle:Lf,useInsertionEffect:Af,useLayoutEffect:Of,useMemo:Mf,useReducer:gs,useRef:Nf,useState:function(){return gs(br)},useDebugValue:_l,useDeferredValue:function(e){var t=xe();return Uf(t,Y.memoizedState,e)},useTransition:function(){var e=gs(br)[0],t=xe().memoizedState;return[e,t]},useMutableSource:Sf,useSyncExternalStore:If,useId:Ff,unstable_isNewReconciler:!1},Wg={readContext:Oe,useCallback:Df,useContext:Oe,useEffect:wl,useImperativeHandle:Lf,useInsertionEffect:Af,useLayoutEffect:Of,useMemo:Mf,useReducer:vs,useRef:Nf,useState:function(){return vs(br)},useDebugValue:_l,useDeferredValue:function(e){var t=xe();return Y===null?t.memoizedState=e:Uf(t,Y.memoizedState,e)},useTransition:function(){var e=vs(br)[0],t=xe().memoizedState;return[e,t]},useMutableSource:Sf,useSyncExternalStore:If,useId:Ff,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ua(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),i=Ut(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(be(t,e,i,r),Ai(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),i=Ut(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(be(t,e,i,r),Ai(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=Ut(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,r),t!==null&&(be(t,e,r,n),Ai(t,e,r))}};function Bu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,o):!0}function bf(e,t,n){var r=!1,i=bt,o=t.contextType;return typeof o=="object"&&o!==null?o=Oe(o):(i=ge(t)?an:ae.current,r=t.contextTypes,o=(r=r!=null)?Vn(e,i):bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function ca(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},fl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Oe(o):(o=ge(t)?an:ae.current,i.context=Vn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ua(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oo.enqueueReplaceState(i,i.state,null),ro(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=wm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ys(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function da(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kg=typeof WeakMap=="function"?WeakMap:Map;function Bf(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lo||(lo=!0,Ea=r),da(e,t)},n}function Vf(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){da(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){da(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sv.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ku(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var Gg=gt.ReactCurrentOwner,pe=!1;function le(e,t,n,r){t.child=e===null?yf(t,null,n,r):Wn(t,e.child,n,r)}function Gu(e,t,n,r,i){n=n.render;var o=t.ref;return Un(t,i),r=vl(e,t,n,r,o,i),n=yl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(B&&n&&ol(t),t.flags|=1,le(e,t,r,i),t.child)}function qu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Rl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Hf(e,t,o,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Dr,n(s,r)&&e.ref===t.ref)return ft(e,t,i)}return t.flags|=1,e=Ft(o,r),e.ref=t.ref,e.return=t,t.child=e}function Hf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Dr(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,ft(e,t,i)}return fa(e,t,n,r,i)}function Wf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(On,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j(On,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,j(On,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,j(On,_e),_e|=r;return le(e,t,i,n),t.child}function Kf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fa(e,t,n,r,i){var o=ge(n)?an:ae.current;return o=Vn(t,o),Un(t,i),n=vl(e,t,n,r,o,i),r=yl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(B&&r&&ol(t),t.flags|=1,le(e,t,n,i),t.child)}function Qu(e,t,n,r,i){if(ge(n)){var o=!0;Xi(t)}else o=!1;if(Un(t,i),t.stateNode===null)Li(e,t),bf(t,n,r),ca(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=ge(n)?an:ae.current,u=Vn(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vu(t,s,r,u),Et=!1;var m=t.memoizedState;s.state=m,ro(t,r,s,i),l=t.memoizedState,a!==r||m!==l||me.current||Et?(typeof h=="function"&&(ua(t,n,h,r),l=t.memoizedState),(a=Et||Bu(t,n,a,r,m,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,_f(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ue(t.type,a),s.props=u,d=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Oe(l):(l=ge(n)?an:ae.current,l=Vn(t,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||m!==l)&&Vu(t,s,r,l),Et=!1,m=t.memoizedState,s.state=m,ro(t,r,s,i);var y=t.memoizedState;a!==d||m!==y||me.current||Et?(typeof g=="function"&&(ua(t,n,g,r),y=t.memoizedState),(u=Et||Bu(t,n,u,r,m,y,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ha(e,t,n,r,o,i)}function ha(e,t,n,r,i,o){Kf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Du(t,n,!1),ft(e,t,o);r=t.stateNode,Gg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Wn(t,e.child,null,o),t.child=Wn(t,null,a,o)):le(e,t,a,o),t.memoizedState=r.state,i&&Du(t,n,!0),t.child}function Gf(e){var t=e.stateNode;t.pendingContext?Lu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lu(e,t.context,!1),hl(e,t.containerInfo)}function Yu(e,t,n,r,i){return Hn(),al(i),t.flags|=256,le(e,t,n,r),t.child}var pa={dehydrated:null,treeContext:null,retryLane:0};function ma(e){return{baseLanes:e,cachePool:null,transitions:null}}function qf(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(V,i&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Do(s,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ma(n),t.memoizedState=pa,e):El(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ft(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ft(a,o):(o=sn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ma(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=pa,r}return o=e.child,e=o.sibling,r=Ft(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function El(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _i(e,t,n,r){return r!==null&&al(r),Wn(t,e.child,null,n),e=El(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ys(Error(_(422))),_i(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Do({mode:"visible",children:r.children},i,0,null),o=sn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wn(t,e.child,null,s),t.child.memoizedState=ma(s),t.memoizedState=pa,o);if(!(t.mode&1))return _i(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=ys(o,r,void 0),_i(e,t,s,r)}if(a=(s&e.childLanes)!==0,pe||a){if(r=ee,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dt(e,i),be(r,e,i,-1))}return Pl(),r=ys(Error(_(421))),_i(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=av.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ee=Lt(i.nextSibling),Se=t,B=!0,je=null,e!==null&&(Pe[Re++]=nt,Pe[Re++]=rt,Pe[Re++]=ln,nt=e.id,rt=e.overflow,ln=t),t=El(t,r.children),t.flags|=4096,t)}function Ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),la(e.return,t,n)}function ws(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Qf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(le(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ju(e,n,t);else if(e.tag===19)Ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ws(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ws(t,!0,n,null,o);break;case"together":ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qg(e,t,n){switch(t.tag){case 3:Gf(t),Hn();break;case 5:Ef(t);break;case 1:ge(t.type)&&Xi(t);break;case 4:hl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;j(to,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?qf(e,t,n):(j(V,V.current&1),e=ft(e,t,n),e!==null?e.sibling:null);j(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Wf(e,t,n)}return ft(e,t,n)}var Yf,ga,Jf,Xf;Yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ga=function(){};Jf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(qe.current);var o=null;switch(n){case"input":i=js(e,i),r=js(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=bs(e,i),r=bs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}Vs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Xf=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yg(e,t,n){var r=t.pendingProps;switch(sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&Ji(),oe(t),null;case 3:return r=t.stateNode,Kn(),b(me),b(ae),ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&(ka(je),je=null))),ga(e,t),oe(t),null;case 5:pl(t);var i=tn(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Jf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return oe(t),null}if(e=tn(qe.current),yi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ke]=t,r[Fr]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)$(hr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":su(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":lu(r,o),$("invalid",r)}Vs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,a,e),i=["children",""+a]):Pr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":ui(r),au(r,o,!0);break;case"textarea":ui(r),uu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Td(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ke]=t,e[Fr]=r,Yf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Hs(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)$(hr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":su(e,r),i=js(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),$("invalid",e);break;case"textarea":lu(e,r),i=bs(e,r),$("invalid",e);break;default:i=r}Vs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Rd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rr(e,l):typeof l=="number"&&Rr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&$("scroll",e):l!=null&&Wa(e,o,l,s))}switch(n){case"input":ui(e),au(e,r,!1);break;case"textarea":ui(e),uu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Xf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=tn(zr.current),tn(qe.current),yi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return oe(t),null;case 13:if(b(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ee!==null&&t.mode&1&&!(t.flags&128))gf(),Hn(),t.flags|=98560,o=!1;else if(o=yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[Ke]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else je!==null&&(ka(je),je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?J===0&&(J=3):Pl())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return Kn(),ga(e,t),e===null&&Mr(t.stateNode.containerInfo),oe(t),null;case 10:return cl(t.type._context),oe(t),null;case 17:return ge(t.type)&&Ji(),oe(t),null;case 19:if(b(V),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)lr(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=io(e),s!==null){for(t.flags|=128,lr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>qn&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=io(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!B)return oe(t),null}else 2*q()-o.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=V.current,j(V,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Cl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Jg(e,t){switch(sl(t),t.tag){case 1:return ge(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),b(me),b(ae),ml(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pl(t),null;case 13:if(b(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(V),null;case 4:return Kn(),null;case 10:return cl(t.type._context),null;case 22:case 23:return Cl(),null;case 24:return null;default:return null}}var Ei=!1,se=!1,Xg=typeof WeakSet=="function"?WeakSet:Set,I=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function va(e,t,n){try{n()}catch(r){K(e,t,r)}}var Xu=!1;function Zg(e,t){if(ea=Gi,e=nf(),il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,d=e,m=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++h===r&&(l=s),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Gi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,E=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ue(t.type,w),E);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){K(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=Xu,Xu=!1,y}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&va(t,n,o)}i=i.next}while(i!==r)}}function xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zf(e){var t=e.alternate;t!==null&&(e.alternate=null,Zf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[Fr],delete t[ia],delete t[Mg],delete t[Ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function eh(e){return e.tag===5||e.tag===3||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}function _a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_a(e,t,n),e=e.sibling;e!==null;)_a(e,t,n),e=e.sibling}var te=null,Fe=!1;function yt(e,t,n){for(n=n.child;n!==null;)th(e,t,n),n=n.sibling}function th(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:se||An(n,t);case 6:var r=te,i=Fe;te=null,yt(e,t,n),te=r,Fe=i,te!==null&&(Fe?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Fe?(e=te,n=n.stateNode,e.nodeType===8?fs(e.parentNode,n):e.nodeType===1&&fs(e,n),xr(e)):fs(te,n.stateNode));break;case 4:r=te,i=Fe,te=n.stateNode.containerInfo,Fe=!0,yt(e,t,n),te=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&va(n,t,s),i=i.next}while(i!==r)}yt(e,t,n);break;case 1:if(!se&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,yt(e,t,n),se=r):yt(e,t,n);break;default:yt(e,t,n)}}function ec(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xg),t.forEach(function(r){var i=lv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Fe=!1;break e;case 3:te=a.stateNode.containerInfo,Fe=!0;break e;case 4:te=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(te===null)throw Error(_(160));th(o,s,i),te=null,Fe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nh(t,e),t=t.sibling}function nh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),He(e),r&4){try{Sr(3,e,e.return),xo(3,e)}catch(w){K(e,e.return,w)}try{Sr(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:Me(t,e),He(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(Me(t,e),He(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{Rr(i,"")}catch(w){K(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Id(i,o),Hs(a,s);var u=Hs(a,o);for(s=0;s<l.length;s+=2){var h=l[s],d=l[s+1];h==="style"?Rd(i,d):h==="dangerouslySetInnerHTML"?Cd(i,d):h==="children"?Rr(i,d):Wa(i,h,d,u)}switch(a){case"input":zs(i,o);break;case"textarea":kd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?xn(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?xn(i,!!o.multiple,o.defaultValue,!0):xn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fr]=o}catch(w){K(e,e.return,w)}}break;case 6:if(Me(t,e),He(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){K(e,e.return,w)}}break;case 3:if(Me(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xr(t.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:Me(t,e),He(e);break;case 13:Me(t,e),He(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(kl=q())),r&4&&ec(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(se=(u=se)||h,Me(t,e),se=u):Me(t,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(I=e,h=e.child;h!==null;){for(d=I=h;I!==null;){switch(m=I,g=m.child,m.tag){case 0:case 11:case 14:case 15:Sr(4,m,m.return);break;case 1:An(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){K(r,n,w)}}break;case 5:An(m,m.return);break;case 22:if(m.memoizedState!==null){nc(d);continue}}g!==null?(g.return=m,I=g):nc(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pd("display",s))}catch(w){K(e,e.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){K(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Me(t,e),He(e),r&4&&ec(e);break;case 21:break;default:Me(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(eh(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rr(i,""),r.flags&=-33);var o=Zu(e);_a(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Zu(e);wa(e,a,s);break;default:throw Error(_(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ev(e,t,n){I=e,rh(e)}function rh(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ei;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||se;a=Ei;var u=se;if(Ei=s,(se=l)&&!u)for(I=i;I!==null;)s=I,l=s.child,s.tag===22&&s.memoizedState!==null?rc(i):l!==null?(l.return=s,I=l):rc(i);for(;o!==null;)I=o,rh(o),o=o.sibling;I=i,Ei=a,se=u}tc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):tc(e)}}function tc(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&zu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&xr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}se||t.flags&512&&ya(t)}catch(m){K(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function nc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function rc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xo(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{ya(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{ya(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var tv=Math.ceil,ao=gt.ReactCurrentDispatcher,Sl=gt.ReactCurrentOwner,Ae=gt.ReactCurrentBatchConfig,M=0,ee=null,Q=null,ne=0,_e=0,On=Vt(0),J=0,Vr=null,cn=0,Lo=0,Il=0,Ir=null,he=null,kl=0,qn=1/0,Ze=null,lo=!1,Ea=null,Mt=null,Si=!1,Rt=null,uo=0,kr=0,Sa=null,Di=-1,Mi=0;function ue(){return M&6?q():Di!==-1?Di:Di=q()}function Ut(e){return e.mode&1?M&2&&ne!==0?ne&-ne:jg.transition!==null?(Mi===0&&(Mi=$d()),Mi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Gd(e.type)),e):1}function be(e,t,n,r){if(50<kr)throw kr=0,Sa=null,Error(_(185));Qr(e,n,r),(!(M&2)||e!==ee)&&(e===ee&&(!(M&2)&&(Lo|=n),J===4&&It(e,ne)),ve(e,r),n===1&&M===0&&!(t.mode&1)&&(qn=q()+500,No&&Ht()))}function ve(e,t){var n=e.callbackNode;jm(e,t);var r=Ki(e,e===ee?ne:0);if(r===0)n!==null&&fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fu(n),t===1)e.tag===0?Fg(ic.bind(null,e)):hf(ic.bind(null,e)),Lg(function(){!(M&6)&&Ht()}),n=null;else{switch(bd(r)){case 1:n=Ya;break;case 4:n=jd;break;case 16:n=Wi;break;case 536870912:n=zd;break;default:n=Wi}n=dh(n,ih.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ih(e,t){if(Di=-1,Mi=0,M&6)throw Error(_(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Ki(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=co(e,r);else{t=r;var i=M;M|=2;var o=sh();(ee!==e||ne!==t)&&(Ze=null,qn=q()+500,on(e,t));do try{iv();break}catch(a){oh(e,a)}while(1);ul(),ao.current=o,M=i,Q!==null?t=0:(ee=null,ne=0,t=J)}if(t!==0){if(t===2&&(i=Qs(e),i!==0&&(r=i,t=Ia(e,i))),t===1)throw n=Vr,on(e,0),It(e,r),ve(e,q()),n;if(t===6)It(e,r);else{if(i=e.current.alternate,!(r&30)&&!nv(i)&&(t=co(e,r),t===2&&(o=Qs(e),o!==0&&(r=o,t=Ia(e,o))),t===1))throw n=Vr,on(e,0),It(e,r),ve(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Jt(e,he,Ze);break;case 3:if(It(e,r),(r&130023424)===r&&(t=kl+500-q(),10<t)){if(Ki(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ra(Jt.bind(null,e,he,Ze),t);break}Jt(e,he,Ze);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-$e(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tv(r/1960))-r,10<r){e.timeoutHandle=ra(Jt.bind(null,e,he,Ze),r);break}Jt(e,he,Ze);break;case 5:Jt(e,he,Ze);break;default:throw Error(_(329))}}}return ve(e,q()),e.callbackNode===n?ih.bind(null,e):null}function Ia(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=co(e,t),e!==2&&(t=he,he=n,t!==null&&ka(t)),e}function ka(e){he===null?he=e:he.push.apply(he,e)}function nv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ve(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~Il,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function ic(e){if(M&6)throw Error(_(327));Fn();var t=Ki(e,0);if(!(t&1))return ve(e,q()),null;var n=co(e,t);if(e.tag!==0&&n===2){var r=Qs(e);r!==0&&(t=r,n=Ia(e,r))}if(n===1)throw n=Vr,on(e,0),It(e,t),ve(e,q()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,he,Ze),ve(e,q()),null}function Tl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(qn=q()+500,No&&Ht())}}function dn(e){Rt!==null&&Rt.tag===0&&!(M&6)&&Fn();var t=M;M|=1;var n=Ae.transition,r=U;try{if(Ae.transition=null,U=1,e)return e()}finally{U=r,Ae.transition=n,M=t,!(M&6)&&Ht()}}function Cl(){_e=On.current,b(On)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xg(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ji();break;case 3:Kn(),b(me),b(ae),ml();break;case 5:pl(r);break;case 4:Kn();break;case 13:b(V);break;case 19:b(V);break;case 10:cl(r.type._context);break;case 22:case 23:Cl()}n=n.return}if(ee=e,Q=e=Ft(e.current,null),ne=_e=t,J=0,Vr=null,Il=Lo=cn=0,he=Ir=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}en=null}return e}function oh(e,t){do{var n=Q;try{if(ul(),Oi.current=so,oo){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oo=!1}if(un=0,Z=Y=H=null,Er=!1,$r=0,Sl.current=null,n===null||n.return===null){J=1,Vr=t,Q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Wu(s);if(g!==null){g.flags&=-257,Ku(g,s,a,o,t),g.mode&1&&Hu(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Hu(o,u,t),Pl();break e}l=Error(_(426))}}else if(B&&a.mode&1){var E=Wu(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ku(E,s,a,o,t),al(Gn(l,a));break e}}o=l=Gn(l,a),J!==4&&(J=2),Ir===null?Ir=[o]:Ir.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Bf(o,l,t);ju(o,f);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Mt===null||!Mt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Vf(o,a,t);ju(o,v);break e}}o=o.return}while(o!==null)}lh(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(1)}function sh(){var e=ao.current;return ao.current=so,e===null?so:e}function Pl(){(J===0||J===3||J===2)&&(J=4),ee===null||!(cn&268435455)&&!(Lo&268435455)||It(ee,ne)}function co(e,t){var n=M;M|=2;var r=sh();(ee!==e||ne!==t)&&(Ze=null,on(e,t));do try{rv();break}catch(i){oh(e,i)}while(1);if(ul(),M=n,ao.current=r,Q!==null)throw Error(_(261));return ee=null,ne=0,J}function rv(){for(;Q!==null;)ah(Q)}function iv(){for(;Q!==null&&!Nm();)ah(Q)}function ah(e){var t=ch(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?lh(e):Q=t,Sl.current=null}function lh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jg(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Q=null;return}}else if(n=Yg(n,t,_e),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);J===0&&(J=5)}function Jt(e,t,n){var r=U,i=Ae.transition;try{Ae.transition=null,U=1,ov(e,t,n,r)}finally{Ae.transition=i,U=r}return null}function ov(e,t,n,r){do Fn();while(Rt!==null);if(M&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(zm(e,o),e===ee&&(Q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,dh(Wi,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ae.transition,Ae.transition=null;var s=U;U=1;var a=M;M|=4,Sl.current=null,Zg(e,n),nh(n,e),Tg(ta),Gi=!!ea,ta=ea=null,e.current=n,ev(n),Am(),M=a,U=s,Ae.transition=o}else e.current=n;if(Si&&(Si=!1,Rt=e,uo=i),o=e.pendingLanes,o===0&&(Mt=null),Lm(n.stateNode),ve(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lo)throw lo=!1,e=Ea,Ea=null,e;return uo&1&&e.tag!==0&&Fn(),o=e.pendingLanes,o&1?e===Sa?kr++:(kr=0,Sa=e):kr=0,Ht(),null}function Fn(){if(Rt!==null){var e=bd(uo),t=Ae.transition,n=U;try{if(Ae.transition=null,U=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,uo=0,M&6)throw Error(_(331));var i=M;for(M|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:Sr(8,h,o)}var d=h.child;if(d!==null)d.return=h,I=d;else for(;I!==null;){h=I;var m=h.sibling,g=h.return;if(Zf(h),h===u){I=null;break}if(m!==null){m.return=g,I=m;break}I=g}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,I=f;break e}I=o.return}}var c=e.current;for(I=c;I!==null;){s=I;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,I=p;else e:for(s=c;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xo(9,a)}}catch(S){K(a,a.return,S)}if(a===s){I=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}if(M=i,Ht(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{U=n,Ae.transition=t}}return!1}function oc(e,t,n){t=Gn(n,t),t=Bf(e,t,1),e=Dt(e,t,1),t=ue(),e!==null&&(Qr(e,1,t),ve(e,t))}function K(e,t,n){if(e.tag===3)oc(e,e,n);else for(;t!==null;){if(t.tag===3){oc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Gn(n,e),e=Vf(t,e,1),t=Dt(t,e,1),e=ue(),t!==null&&(Qr(t,1,e),ve(t,e));break}}t=t.return}}function sv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(J===4||J===3&&(ne&130023424)===ne&&500>q()-kl?on(e,0):Il|=n),ve(e,t)}function uh(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=ue();e=dt(e,t),e!==null&&(Qr(e,t,n),ve(e,n))}function av(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uh(e,n)}function lv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),uh(e,n)}var ch;ch=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Qg(e,t,n);pe=!!(e.flags&131072)}else pe=!1,B&&t.flags&1048576&&pf(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var i=Vn(t,ae.current);Un(t,n),i=vl(null,t,r,e,i,n);var o=yl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,Xi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fl(t),i.updater=Oo,t.stateNode=i,i._reactInternals=t,ca(t,r,e,n),t=ha(null,t,r,!0,o,n)):(t.tag=0,B&&o&&ol(t),le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=cv(r),e=Ue(r,e),i){case 0:t=fa(null,t,r,e,n);break e;case 1:t=Qu(null,t,r,e,n);break e;case 11:t=Gu(null,t,r,e,n);break e;case 14:t=qu(null,t,r,Ue(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),fa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Qu(e,t,r,i,n);case 3:e:{if(Gf(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,_f(e,t),ro(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Gn(Error(_(423)),t),t=Yu(e,t,r,n,i);break e}else if(r!==i){i=Gn(Error(_(424)),t),t=Yu(e,t,r,n,i);break e}else for(Ee=Lt(t.stateNode.containerInfo.firstChild),Se=t,B=!0,je=null,n=yf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=ft(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return Ef(t),e===null&&aa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,na(r,i)?s=null:o!==null&&na(r,o)&&(t.flags|=32),Kf(e,t),le(e,t,s,n),t.child;case 6:return e===null&&aa(t),null;case 13:return qf(e,t,n);case 4:return hl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Gu(e,t,r,i,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,j(to,r._currentValue),r._currentValue=s,o!==null)if(Ve(o.value,s)){if(o.children===i.children&&!me.current){t=ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=at(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),la(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),la(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Un(t,n),i=Oe(i),r=r(i),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),qu(e,t,r,i,n);case 15:return Hf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Li(e,t),t.tag=1,ge(r)?(e=!0,Xi(t)):e=!1,Un(t,n),bf(t,r,i),ca(t,r,i,n),ha(null,t,r,!0,e,n);case 19:return Qf(e,t,n);case 22:return Wf(e,t,n)}throw Error(_(156,t.tag))};function dh(e,t){return Fd(e,t)}function uv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new uv(e,t,n,r)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cv(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ga)return 11;if(e===qa)return 14}return 2}function Ft(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Rl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case En:return sn(n.children,i,o,t);case Ka:s=8,i|=8;break;case Ds:return e=Ne(12,n,t,i|2),e.elementType=Ds,e.lanes=o,e;case Ms:return e=Ne(13,n,t,i),e.elementType=Ms,e.lanes=o,e;case Us:return e=Ne(19,n,t,i),e.elementType=Us,e.lanes=o,e;case _d:return Do(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yd:s=10;break e;case wd:s=9;break e;case Ga:s=11;break e;case qa:s=14;break e;case _t:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=_d,e.lanes=n,e.stateNode={isHidden:!1},e}function _s(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Es(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ts(0),this.expirationTimes=ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nl(e,t,n,r,i,o,s,a,l){return e=new dv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(o),e}function fv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fh(e){if(!e)return bt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ge(n))return ff(e,n,t)}return t}function hh(e,t,n,r,i,o,s,a,l){return e=Nl(n,r,!0,e,i,o,s,a,l),e.context=fh(null),n=e.current,r=ue(),i=Ut(n),o=at(r,i),o.callback=t??null,Dt(n,o,i),e.current.lanes=i,Qr(e,i,r),ve(e,r),e}function Mo(e,t,n,r){var i=t.current,o=ue(),s=Ut(i);return n=fh(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(i,t,s),e!==null&&(be(e,i,s,o),Ai(e,i,s)),s}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Al(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}function hv(){return null}var ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}Uo.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Mo(e,t,null,null)};Uo.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Mo(null,e,null,null)}),t[ct]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&Kd(e)}};function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ac(){}function pv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fo(s);o.call(u)}}var s=hh(t,r,e,0,null,!1,!1,"",ac);return e._reactRootContainer=s,e[ct]=s.current,Mr(e.nodeType===8?e.parentNode:e),dn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=fo(l);a.call(u)}}var l=Nl(e,0,!1,null,null,!1,!1,"",ac);return e._reactRootContainer=l,e[ct]=l.current,Mr(e.nodeType===8?e.parentNode:e),dn(function(){Mo(t,l,n,r)}),l}function jo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=fo(s);a.call(l)}}Mo(t,s,e,i)}else s=pv(n,t,e,i,r);return fo(s)}Bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Ja(t,n|1),ve(t,q()),!(M&6)&&(qn=q()+500,Ht()))}break;case 13:dn(function(){var r=dt(e,1);if(r!==null){var i=ue();be(r,e,1,i)}}),Al(e,1)}};Xa=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ue();be(t,e,134217728,n)}Al(e,134217728)}};Vd=function(e){if(e.tag===13){var t=Ut(e),n=dt(e,t);if(n!==null){var r=ue();be(n,e,t,r)}Al(e,t)}};Hd=function(){return U};Wd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Ks=function(e,t,n){switch(t){case"input":if(zs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ro(r);if(!i)throw Error(_(90));Sd(r),zs(r,i)}}}break;case"textarea":kd(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};Od=Tl;xd=dn;var mv={usingClientEntryPoint:!1,Events:[Jr,Tn,Ro,Nd,Ad,Tl]},ur={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gv={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Md(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{ko=Ii.inject(gv),Ge=Ii}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xl(t))throw Error(_(200));return fv(e,t,null,n)};Te.createRoot=function(e,t){if(!xl(e))throw Error(_(299));var n=!1,r="",i=ph;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nl(e,1,!1,null,null,n,!1,r,i),e[ct]=t.current,Mr(e.nodeType===8?e.parentNode:e),new Ol(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Md(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return dn(e)};Te.hydrate=function(e,t,n){if(!Fo(t))throw Error(_(200));return jo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!xl(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ph;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=hh(t,null,e,1,n??null,i,!1,o,s),e[ct]=t.current,Mr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Uo(t)};Te.render=function(e,t,n){if(!Fo(t))throw Error(_(200));return jo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(_(40));return e._reactRootContainer?(dn(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Te.unstable_batchedUpdates=Tl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return jo(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function mh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mh)}catch(e){console.error(e)}}mh(),pd.exports=Te;var vv=pd.exports,lc=vv;xs.createRoot=lc.createRoot,xs.hydrateRoot=lc.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}var Nt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nt||(Nt={}));const uc="popstate";function yv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ta("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vh(i)}return _v(t,n,null,e)}function we(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wv(){return Math.random().toString(36).substr(2,8)}function cc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ta(e,t,n,r){return n===void 0&&(n=null),ho({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zo(t):t,{state:n,key:t&&t.key||r||wv()})}function vh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _v(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Nt.Pop,l=null,u=h();u==null&&(u=0,s.replaceState(ho({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function d(){a=Nt.Pop;let E=h(),f=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:f})}function m(E,f){a=Nt.Push;let c=Ta(w.location,E,f);n&&n(c,E),u=h()+1;let p=cc(c,u),v=w.createHref(c);try{s.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}o&&l&&l({action:a,location:w.location,delta:1})}function g(E,f){a=Nt.Replace;let c=Ta(w.location,E,f);n&&n(c,E),u=h();let p=cc(c,u),v=w.createHref(c);s.replaceState(p,"",v),o&&l&&l({action:a,location:w.location,delta:0})}function y(E){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof E=="string"?E:vh(E);return c=c.replace(/ $/,"%20"),we(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return a},get location(){return e(i,s)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(uc,d),l=E,()=>{i.removeEventListener(uc,d),l=null}},createHref(E){return t(i,E)},createURL:y,encodeLocation(E){let f=y(E);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:g,go(E){return s.go(E)}};return w}var dc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(dc||(dc={}));function Ev(e,t,n){return n===void 0&&(n="/"),Sv(e,t,n,!1)}function Sv(e,t,n,r){let i=typeof t=="string"?zo(t):t,o=_h(i.pathname||"/",n);if(o==null)return null;let s=yh(e);Iv(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=Dv(o);a=xv(s[l],u,r)}return a}function yh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=jn([r,l.relativePath]),h=n.concat(l);o.children&&o.children.length>0&&(we(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),yh(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Av(u,o.index),routesMeta:h})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of wh(o.path))i(o,s,l)}),t}function wh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=wh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Iv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ov(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kv=/^:[\w-]+$/,Tv=3,Cv=2,Pv=1,Rv=10,Nv=-2,fc=e=>e==="*";function Av(e,t){let n=e.split("/"),r=n.length;return n.some(fc)&&(r+=Nv),t&&(r+=Cv),n.filter(i=>!fc(i)).reduce((i,o)=>i+(kv.test(o)?Tv:o===""?Pv:Rv),r)}function Ov(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function xv(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",d=hc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),m=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=hc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:jn([o,d.pathname]),pathnameBase:Mv(jn([o,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(o=jn([o,d.pathnameBase]))}return s}function hc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Lv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:m,isOptional:g}=h;if(m==="*"){let w=a[d]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[d];return g&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Lv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Dv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return gh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _h(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),Mv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function Uv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Eh=["post","put","patch","delete"];new Set(Eh);const Fv=["get",...Eh];new Set(Fv);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}const jv=A.createContext(null),zv=A.createContext(null),Sh=A.createContext(null),$o=A.createContext(null),bo=A.createContext({outlet:null,matches:[],isDataRoute:!1}),Ih=A.createContext(null);function Ll(){return A.useContext($o)!=null}function $v(){return Ll()||we(!1),A.useContext($o).location}function bv(e,t){return Bv(e,t)}function Bv(e,t,n,r){Ll()||we(!1);let{navigator:i}=A.useContext(Sh),{matches:o}=A.useContext(bo),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=$v(),h;if(t){var d;let E=typeof t=="string"?zo(t):t;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||we(!1),h=E}else h=u;let m=h.pathname||"/",g=m;if(l!=="/"){let E=l.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(E.length).join("/")}let y=Ev(e,{pathname:g}),w=Gv(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:jn([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:jn([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&w?A.createElement($o.Provider,{value:{location:po({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Nt.Pop}},w):w}function Vv(){let e=Jv(),t=Uv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},t),n?A.createElement("pre",{style:i},n):null,o)}const Hv=A.createElement(Vv,null);class Wv extends A.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?A.createElement(bo.Provider,{value:this.props.routeContext},A.createElement(Ih.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Kv(e){let{routeContext:t,match:n,children:r}=e,i=A.useContext(jv);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(bo.Provider,{value:t},r)}function Gv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||we(!1),s=s.slice(0,Math.min(s.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let d=s[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:m,errors:g}=n,y=d.route.loader&&m[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((h,d,m)=>{let g,y=!1,w=null,E=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||Hv,l&&(u<0&&m===0?(Xv("route-fallback",!1),y=!0,E=null):u===m&&(y=!0,E=d.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,m+1)),c=()=>{let p;return g?p=w:y?p=E:d.route.Component?p=A.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=h,A.createElement(Kv,{match:d,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?A.createElement(Wv,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var Ca=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ca||{});function qv(e){let t=A.useContext(zv);return t||we(!1),t}function Qv(e){let t=A.useContext(bo);return t||we(!1),t}function Yv(e){let t=Qv(),n=t.matches[t.matches.length-1];return n.route.id||we(!1),n.route.id}function Jv(){var e;let t=A.useContext(Ih),n=qv(Ca.UseRouteError),r=Yv(Ca.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}const pc={};function Xv(e,t,n){!t&&!pc[e]&&(pc[e]=!0)}function Fi(e){we(!1)}function Zv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Nt.Pop,navigator:o,static:s=!1,future:a}=e;Ll()&&we(!1);let l=t.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:l,navigator:o,static:s,future:po({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=zo(r));let{pathname:h="/",search:d="",hash:m="",state:g=null,key:y="default"}=r,w=A.useMemo(()=>{let E=_h(h,l);return E==null?null:{location:{pathname:E,search:d,hash:m,state:g,key:y},navigationType:i}},[l,h,d,m,g,y,i]);return w==null?null:A.createElement(Sh.Provider,{value:u},A.createElement($o.Provider,{children:n,value:w}))}function ey(e){let{children:t,location:n}=e;return bv(Pa(t),n)}new Promise(()=>{});function Pa(e,t){t===void 0&&(t=[]);let n=[];return A.Children.forEach(e,(r,i)=>{if(!A.isValidElement(r))return;let o=[...t,i];if(r.type===A.Fragment){n.push.apply(n,Pa(r.props.children,o));return}r.type!==Fi&&we(!1),!r.props.index||!r.props.children||we(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Pa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ty="6";try{window.__reactRouterVersion=ty}catch{}const ny="startTransition",mc=sm[ny];function ry(e){let{basename:t,children:n,future:r,window:i}=e,o=A.useRef();o.current==null&&(o.current=yv({window:i,v5Compat:!0}));let s=o.current,[a,l]=A.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},h=A.useCallback(d=>{u&&mc?mc(()=>l(d)):l(d)},[l,u]);return A.useLayoutEffect(()=>s.listen(h),[s,h]),A.createElement(Zv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var gc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gc||(gc={}));var vc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vc||(vc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},iy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,h=o>>2,d=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[h],n[d],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(kh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):iy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw new oy;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class oy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sy=function(e){const t=kh(e);return Th.encodeByteArray(t,!0)},Ch=function(e){return sy(e).replace(/\./g,"")},Ph=function(e){try{return Th.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=()=>ay().__FIREBASE_DEFAULTS__,uy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},cy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ph(e[1]);return t&&JSON.parse(t)},Dl=()=>{try{return ly()||uy()||cy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},dy=e=>{var t,n;return(n=(t=Dl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Rh=()=>{var e;return(e=Dl())===null||e===void 0?void 0:e.config},Nh=e=>{var t;return(t=Dl())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function py(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ah(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function my(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gy(){const e=ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Oh(){try{return typeof indexedDB=="object"}catch{return!1}}function xh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function vy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="FirebaseError";class Xe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=yy,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?wy(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Xe(i,a,r)}}function wy(e,t){return e.replace(_y,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const _y=/\{\$([^}]+)}/g;function Ey(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Hr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(yc(o)&&yc(s)){if(!Hr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function mr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Sy(e,t){const n=new Iy(e,t);return n.subscribe.bind(n)}class Iy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ky(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ss),i.error===void 0&&(i.error=Ss),i.complete===void 0&&(i.complete=Ss);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ky(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ss(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=1e3,Cy=2,Py=4*60*60*1e3,Ry=.5;function wc(e,t=Ty,n=Cy){const r=t*Math.pow(n,e),i=Math.round(Ry*r*(Math.random()-.5)*2);return Math.min(Py,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e){return e&&e._delegate?e._delegate:e}class Je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new fy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Oy(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ay(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ay(e){return e===Xt?void 0:e}function Oy(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ny(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const Ly={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Dy=F.INFO,My={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Uy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=My[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ml{constructor(t){this.name=t,this._logLevel=Dy,this._logHandler=Uy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ly[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Fy=(e,t)=>t.some(n=>e instanceof n);let _c,Ec;function jy(){return _c||(_c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zy(){return Ec||(Ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lh=new WeakMap,Ra=new WeakMap,Dh=new WeakMap,Is=new WeakMap,Ul=new WeakMap;function $y(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(jt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Lh.set(n,e)}).catch(()=>{}),Ul.set(t,e),t}function by(e){if(Ra.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Ra.set(e,t)}let Na={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ra.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Dh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function By(e){Na=e(Na)}function Vy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ks(this),t,...n);return Dh.set(r,t.sort?t.sort():[t]),jt(r)}:zy().includes(e)?function(...t){return e.apply(ks(this),t),jt(Lh.get(this))}:function(...t){return jt(e.apply(ks(this),t))}}function Hy(e){return typeof e=="function"?Vy(e):(e instanceof IDBTransaction&&by(e),Fy(e,jy())?new Proxy(e,Na):e)}function jt(e){if(e instanceof IDBRequest)return $y(e);if(Is.has(e))return Is.get(e);const t=Hy(e);return t!==e&&(Is.set(e,t),Ul.set(t,e)),t}const ks=e=>Ul.get(e);function Mh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=jt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(jt(s.result),l.oldVersion,l.newVersion,jt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Wy=["get","getKey","getAll","getAllKeys","count"],Ky=["put","add","delete","clear"],Ts=new Map;function Sc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ts.get(t))return Ts.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ky.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wy.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ts.set(t,o),o}By(e=>({...e,get:(t,n,r)=>Sc(t,n)||e.get(t,n,r),has:(t,n)=>!!Sc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Aa="@firebase/app",Ic="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Ml("@firebase/app"),Qy="@firebase/app-compat",Yy="@firebase/analytics-compat",Jy="@firebase/analytics",Xy="@firebase/app-check-compat",Zy="@firebase/app-check",e0="@firebase/auth",t0="@firebase/auth-compat",n0="@firebase/database",r0="@firebase/data-connect",i0="@firebase/database-compat",o0="@firebase/functions",s0="@firebase/functions-compat",a0="@firebase/installations",l0="@firebase/installations-compat",u0="@firebase/messaging",c0="@firebase/messaging-compat",d0="@firebase/performance",f0="@firebase/performance-compat",h0="@firebase/remote-config",p0="@firebase/remote-config-compat",m0="@firebase/storage",g0="@firebase/storage-compat",v0="@firebase/firestore",y0="@firebase/vertexai-preview",w0="@firebase/firestore-compat",_0="firebase",E0="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="[DEFAULT]",S0={[Aa]:"fire-core",[Qy]:"fire-core-compat",[Jy]:"fire-analytics",[Yy]:"fire-analytics-compat",[Zy]:"fire-app-check",[Xy]:"fire-app-check-compat",[e0]:"fire-auth",[t0]:"fire-auth-compat",[n0]:"fire-rtdb",[r0]:"fire-data-connect",[i0]:"fire-rtdb-compat",[o0]:"fire-fn",[s0]:"fire-fn-compat",[a0]:"fire-iid",[l0]:"fire-iid-compat",[u0]:"fire-fcm",[c0]:"fire-fcm-compat",[d0]:"fire-perf",[f0]:"fire-perf-compat",[h0]:"fire-rc",[p0]:"fire-rc-compat",[m0]:"fire-gcs",[g0]:"fire-gcs-compat",[v0]:"fire-fst",[w0]:"fire-fst-compat",[y0]:"fire-vertex","fire-js":"fire-js",[_0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map,I0=new Map,xa=new Map;function kc(e,t){try{e.container.addComponent(t)}catch(n){ht.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pt(e){const t=e.name;if(xa.has(t))return ht.debug(`There were multiple attempts to register component ${t}.`),!1;xa.set(t,e);for(const n of mo.values())kc(n,e);for(const n of I0.values())kc(n,e);return!0}function Xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ze(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new yn("app","Firebase",k0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=E0;function Uh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Oa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=Rh()),!n)throw zt.create("no-options");const o=mo.get(i);if(o){if(Hr(n,o.options)&&Hr(r,o.config))return o;throw zt.create("duplicate-app",{appName:i})}const s=new xy(i);for(const l of xa.values())s.addComponent(l);const a=new T0(n,r,s);return mo.set(i,a),a}function Fh(e=Oa){const t=mo.get(e);if(!t&&e===Oa&&Rh())return Uh();if(!t)throw zt.create("no-app",{appName:e});return t}function Qe(e,t,n){var r;let i=(r=S0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ht.warn(a.join(" "));return}pt(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="firebase-heartbeat-database",P0=1,Wr="firebase-heartbeat-store";let Cs=null;function jh(){return Cs||(Cs=Mh(C0,P0,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Wr)}catch(n){console.warn(n)}}}}).catch(e=>{throw zt.create("idb-open",{originalErrorMessage:e.message})})),Cs}async function R0(e){try{const n=(await jh()).transaction(Wr),r=await n.objectStore(Wr).get(zh(e));return await n.done,r}catch(t){if(t instanceof Xe)ht.warn(t.message);else{const n=zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ht.warn(n.message)}}}async function Tc(e,t){try{const r=(await jh()).transaction(Wr,"readwrite");await r.objectStore(Wr).put(t,zh(e)),await r.done}catch(n){if(n instanceof Xe)ht.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ht.warn(r.message)}}}function zh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=1024,A0=30*24*60*60*1e3;class O0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Cc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=A0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ht.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cc(),{heartbeatsToSend:r,unsentEntries:i}=x0(this._heartbeatsCache.heartbeats),o=Ch(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return ht.warn(n),""}}}function Cc(){return new Date().toISOString().substring(0,10)}function x0(e,t=N0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Pc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class L0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oh()?xh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await R0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Pc(e){return Ch(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(e){pt(new Je("platform-logger",t=>new Gy(t),"PRIVATE")),pt(new Je("heartbeat",t=>new O0(t),"PRIVATE")),Qe(Aa,Ic,e),Qe(Aa,Ic,"esm2017"),Qe("fire-js","")}D0("");var M0="firebase",U0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(M0,U0,"app");const $h="@firebase/installations",Fl="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=1e4,Bh=`w:${Fl}`,Vh="FIS_v2",F0="https://firebaseinstallations.googleapis.com/v1",j0=60*60*1e3,z0="installations",$0="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fn=new yn(z0,$0,b0);function Hh(e){return e instanceof Xe&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh({projectId:e}){return`${F0}/projects/${e}/installations`}function Kh(e){return{token:e.token,requestStatus:2,expiresIn:V0(e.expiresIn),creationTime:Date.now()}}async function Gh(e,t){const r=(await t.json()).error;return fn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qh({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function B0(e,{refreshToken:t}){const n=qh(e);return n.append("Authorization",H0(t)),n}async function Qh(e){const t=await e();return t.status>=500&&t.status<600?e():t}function V0(e){return Number(e.replace("s","000"))}function H0(e){return`${Vh} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Wh(e),i=qh(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Vh,appId:e.appId,sdkVersion:Bh},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Qh(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Kh(u.authToken)}}else throw await Gh("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=/^[cdef][\w-]{21}$/,La="";function q0(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Q0(e);return G0.test(n)?n:La}catch{return La}}function Q0(e){return K0(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map;function Xh(e,t){const n=Bo(e);Zh(n,t),Y0(n,t)}function Zh(e,t){const n=Jh.get(e);if(n)for(const r of n)r(t)}function Y0(e,t){const n=J0();n&&n.postMessage({key:e,fid:t}),X0()}let nn=null;function J0(){return!nn&&"BroadcastChannel"in self&&(nn=new BroadcastChannel("[Firebase] FID Change"),nn.onmessage=e=>{Zh(e.data.key,e.data.fid)}),nn}function X0(){Jh.size===0&&nn&&(nn.close(),nn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="firebase-installations-database",ew=1,hn="firebase-installations-store";let Ps=null;function jl(){return Ps||(Ps=Mh(Z0,ew,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(hn)}}})),Ps}async function go(e,t){const n=Bo(e),i=(await jl()).transaction(hn,"readwrite"),o=i.objectStore(hn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Xh(e,t.fid),t}async function ep(e){const t=Bo(e),r=(await jl()).transaction(hn,"readwrite");await r.objectStore(hn).delete(t),await r.done}async function Vo(e,t){const n=Bo(e),i=(await jl()).transaction(hn,"readwrite"),o=i.objectStore(hn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Xh(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(e){let t;const n=await Vo(e.appConfig,r=>{const i=tw(r),o=nw(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===La?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function tw(e){const t=e||{fid:q0(),registrationStatus:0};return tp(t)}function nw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=rw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:iw(e)}:{installationEntry:t}}async function rw(e,t){try{const n=await W0(e,t);return go(e.appConfig,n)}catch(n){throw Hh(n)&&n.customData.serverCode===409?await ep(e.appConfig):await go(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function iw(e){let t=await Rc(e.appConfig);for(;t.registrationStatus===1;)await Yh(100),t=await Rc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await zl(e);return r||n}return t}function Rc(e){return Vo(e,t=>{if(!t)throw fn.create("installation-not-found");return tp(t)})}function tp(e){return ow(e)?{fid:e.fid,registrationStatus:0}:e}function ow(e){return e.registrationStatus===1&&e.registrationTime+bh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw({appConfig:e,heartbeatServiceProvider:t},n){const r=aw(e,n),i=B0(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Bh,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Qh(()=>fetch(r,a));if(l.ok){const u=await l.json();return Kh(u)}else throw await Gh("Generate Auth Token",l)}function aw(e,{fid:t}){return`${Wh(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(e,t=!1){let n;const r=await Vo(e.appConfig,o=>{if(!np(o))throw fn.create("not-registered");const s=o.authToken;if(!t&&cw(s))return o;if(s.requestStatus===1)return n=lw(e,t),o;{if(!navigator.onLine)throw fn.create("app-offline");const a=fw(o);return n=uw(e,a),a}});return n?await n:r.authToken}async function lw(e,t){let n=await Nc(e.appConfig);for(;n.authToken.requestStatus===1;)await Yh(100),n=await Nc(e.appConfig);const r=n.authToken;return r.requestStatus===0?$l(e,t):r}function Nc(e){return Vo(e,t=>{if(!np(t))throw fn.create("not-registered");const n=t.authToken;return hw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function uw(e,t){try{const n=await sw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await go(e.appConfig,r),n}catch(n){if(Hh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ep(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await go(e.appConfig,r)}throw n}}function np(e){return e!==void 0&&e.registrationStatus===2}function cw(e){return e.requestStatus===2&&!dw(e)}function dw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+j0}function fw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function hw(e){return e.requestStatus===1&&e.requestTime+bh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(e){const t=e,{installationEntry:n,registrationPromise:r}=await zl(t);return r?r.catch(console.error):$l(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(e,t=!1){const n=e;return await gw(n),(await $l(n,t)).token}async function gw(e){const{registrationPromise:t}=await zl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(e){if(!e||!e.options)throw Rs("App Configuration");if(!e.name)throw Rs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Rs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Rs(e){return fn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="installations",yw="installations-internal",ww=e=>{const t=e.getProvider("app").getImmediate(),n=vw(t),r=Xn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_w=e=>{const t=e.getProvider("app").getImmediate(),n=Xn(t,rp).getImmediate();return{getId:()=>pw(n),getToken:i=>mw(n,i)}};function Ew(){pt(new Je(rp,ww,"PUBLIC")),pt(new Je(yw,_w,"PRIVATE"))}Ew();Qe($h,Fl);Qe($h,Fl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="analytics",Sw="firebase_id",Iw="origin",kw=60*1e3,Tw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Ml("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ie=new yn("analytics","Analytics",Cw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(e){if(!e.startsWith(bl)){const t=Ie.create("invalid-gtag-resource",{gtagURL:e});return ye.warn(t.message),""}return e}function ip(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Rw(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Nw(e,t){const n=Rw("firebase-js-sdk-policy",{createScriptURL:Pw}),r=document.createElement("script"),i=`${bl}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Aw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ow(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await ip(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){ye.error(a)}e("config",i,o)}async function xw(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await ip(n);for(const l of s){const u=a.find(d=>d.measurementId===l),h=u&&t[u.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){ye.error(o)}}function Lw(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await xw(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await Ow(e,t,n,r,a,l)}else if(o==="consent"){const[a,l]=s;e("consent",a,l)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){ye.error(a)}}return i}function Dw(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Lw(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Mw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(bl)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=30,Fw=1e3;class jw{constructor(t={},n=Fw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const op=new jw;function zw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function $w(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:zw(r)},o=Tw.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ie.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function bw(e,t=op,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ie.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ie.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Hw;return setTimeout(async()=>{a.abort()},n!==void 0?n:kw),sp({appId:r,apiKey:i,measurementId:o},s,a,t)}async function sp(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=op){var o;const{appId:s,measurementId:a}=e;try{await Bw(r,t)}catch(l){if(a)return ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await $w(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!Vw(u)){if(i.deleteThrottleMetadata(s),a)return ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?wc(n,i.intervalMillis,Uw):wc(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,d),ye.debug(`Calling attemptFetch again in ${h} millis`),sp(e,d,r,i)}}function Bw(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ie.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Vw(e){if(!(e instanceof Xe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Hw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ww(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(){if(Oh())try{await xh()}catch(e){return ye.warn(Ie.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ye.warn(Ie.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Gw(e,t,n,r,i,o,s){var a;const l=bw(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ye.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ye.error(g)),t.push(l);const u=Kw().then(g=>{if(g)return r.getId()}),[h,d]=await Promise.all([l,u]);Mw(o)||Nw(o,h.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[Iw]="firebase",m.update=!0,d!=null&&(m[Sw]=d),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t){this.app=t}_delete(){return delete Tr[this.app.options.appId],Promise.resolve()}}let Tr={},Ac=[];const Oc={};let Ns="dataLayer",Qw="gtag",xc,ap,Lc=!1;function Yw(){const e=[];if(Ah()&&e.push("This is a browser extension environment."),vy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ie.create("invalid-analytics-context",{errorInfo:t});ye.warn(n.message)}}function Jw(e,t,n){Yw();const r=e.options.appId;if(!r)throw Ie.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ie.create("no-api-key");if(Tr[r]!=null)throw Ie.create("already-exists",{id:r});if(!Lc){Aw(Ns);const{wrappedGtag:o,gtagCore:s}=Dw(Tr,Ac,Oc,Ns,Qw);ap=o,xc=s,Lc=!0}return Tr[r]=Gw(e,Ac,Oc,t,xc,Ns,n),new qw(e)}function Xw(e=Fh()){e=vt(e);const t=Xn(e,vo);return t.isInitialized()?t.getImmediate():Zw(e)}function Zw(e,t={}){const n=Xn(e,vo);if(n.isInitialized()){const i=n.getImmediate();if(Hr(t,n.getOptions()))return i;throw Ie.create("already-initialized")}return n.initialize({options:t})}function e_(e,t,n,r){e=vt(e),Ww(ap,Tr[e.app.options.appId],t,n,r).catch(i=>ye.error(i))}const Dc="@firebase/analytics",Mc="0.10.8";function t_(){pt(new Je(vo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Jw(r,i,n)},"PUBLIC")),pt(new Je("analytics-internal",e,"PRIVATE")),Qe(Dc,Mc),Qe(Dc,Mc,"esm2017");function e(t){try{const n=t.getProvider(vo).getImmediate();return{logEvent:(r,i,o)=>e_(n,r,i,o)}}catch(n){throw Ie.create("interop-component-reg-failed",{reason:n})}}}t_();function Bl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n_=lp,up=new yn("auth","Firebase",lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Ml("@firebase/auth");function r_(e,...t){yo.logLevel<=F.WARN&&yo.warn(`Auth (${ei}): ${e}`,...t)}function ji(e,...t){yo.logLevel<=F.ERROR&&yo.error(`Auth (${ei}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e,...t){throw Hl(e,...t)}function Be(e,...t){return Hl(e,...t)}function Vl(e,t,n){const r=Object.assign(Object.assign({},n_()),{[t]:n});return new yn("auth","Firebase",r).create(t,{appName:e.name})}function lt(e){return Vl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function i_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Le(e,"argument-error"),Vl(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return up.create(e,...t)}function N(e,t,...n){if(!e)throw Hl(t,...n)}function it(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ji(t),new Error(t)}function mt(e,t){e||it(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function o_(){return Uc()==="http:"||Uc()==="https:"}function Uc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o_()||Ah()||"connection"in navigator)?navigator.onLine:!0}function a_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,n){this.shortDelay=t,this.longDelay=n,mt(n>t,"Short delay should be less than long delay!"),this.isMobile=hy()||my()}get(){return s_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(e,t){mt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=new ti(3e4,6e4);function Wt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Kt(e,t,n,r,i={}){return dp(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Zr(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},o);return py()||(u.referrerPolicy="no-referrer"),cp.fetch()(fp(e,e.config.apiHost,n,a),u)})}async function dp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},l_),t);try{const i=new d_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ki(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ki(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw ki(e,"user-disabled",s);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vl(e,h,u);Le(e,h)}}catch(i){if(i instanceof Xe)throw i;Le(e,"network-request-failed",{message:String(i)})}}async function ni(e,t,n,r,i={}){const o=await Kt(e,t,n,r,i);return"mfaPendingCredential"in o&&Le(e,"multi-factor-auth-required",{_serverResponse:o}),o}function fp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Wl(e.config,i):`${e.config.apiScheme}://${i}`}function c_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class d_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),u_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ki(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Be(e,t,r);return i.customData._tokenResponse=n,i}function Fc(e){return e!==void 0&&e.enterprise!==void 0}class f_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return c_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function h_(e,t){return Kt(e,"GET","/v2/recaptchaConfig",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(e,t){return Kt(e,"POST","/v1/accounts:delete",t)}async function hp(e,t){return Kt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function m_(e,t=!1){const n=vt(e),r=await n.getIdToken(t),i=Kl(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Cr(As(i.auth_time)),issuedAtTime:Cr(As(i.iat)),expirationTime:Cr(As(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function As(e){return Number(e)*1e3}function Kl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ji("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ph(n);return i?JSON.parse(i):(ji("Failed to decode base64 JWT payload"),null)}catch(i){return ji("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jc(e){const t=Kl(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Xe&&g_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function g_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Kr(e,hp(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?pp(o.providerUserInfo):[],a=w_(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Ma(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,d)}async function y_(e){const t=vt(e);await wo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function w_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function pp(e){return e.map(t=>{var{providerId:n}=t,r=Bl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(e,t){const n=await dp(e,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=fp(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function E_(e,t){return Kt(e,"POST","/v2/accounts:revokeToken",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):jc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){N(t.length!==0,"internal-error");const n=jc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await __(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new zn;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new zn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ot{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Bl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new v_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ma(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Kr(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return m_(this,t)}reload(){return y_(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ot(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(lt(this.auth));const t=await this.getIdToken();return await Kr(this,p_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:p,emailVerified:v,isAnonymous:S,providerData:T,stsTokenManager:C}=n;N(p&&C,t,"internal-error");const P=zn.fromJSON(this.name,C);N(typeof p=="string",t,"internal-error"),wt(d,t.name),wt(m,t.name),N(typeof v=="boolean",t,"internal-error"),N(typeof S=="boolean",t,"internal-error"),wt(g,t.name),wt(y,t.name),wt(w,t.name),wt(E,t.name),wt(f,t.name),wt(c,t.name);const z=new ot({uid:p,auth:t,email:m,emailVerified:v,displayName:d,isAnonymous:S,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:P,createdAt:f,lastLoginAt:c});return T&&Array.isArray(T)&&(z.providerData=T.map(L=>Object.assign({},L))),E&&(z._redirectEventId=E),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new zn;i.updateFromServerResponse(n);const o=new ot({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await wo(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];N(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?pp(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new zn;a.updateFromIdToken(r);const l=new ot({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ma(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Map;function st(e){mt(e instanceof Function,"Expected a class definition");let t=zc.get(e);return t?(mt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,zc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}mp.type="NONE";const $c=mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e,t,n){return`firebase:${e}:${t}:${n}`}class $n{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=zi(this.userKey,i.apiKey,o),this.fullPersistenceKey=zi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ot._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new $n(st($c),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||st($c);const s=zi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const h=await u._get(s);if(h){const d=ot._fromJSON(t,h);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new $n(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new $n(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ep(t))return"Blackberry";if(Sp(t))return"Webos";if(vp(t))return"Safari";if((t.includes("chrome/")||yp(t))&&!t.includes("edge/"))return"Chrome";if(_p(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gp(e=ce()){return/firefox\//i.test(e)}function vp(e=ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yp(e=ce()){return/crios\//i.test(e)}function wp(e=ce()){return/iemobile/i.test(e)}function _p(e=ce()){return/android/i.test(e)}function Ep(e=ce()){return/blackberry/i.test(e)}function Sp(e=ce()){return/webos/i.test(e)}function Gl(e=ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function S_(e=ce()){var t;return Gl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function I_(){return gy()&&document.documentMode===10}function Ip(e=ce()){return Gl(e)||_p(e)||Sp(e)||Ep(e)||/windows phone/i.test(e)||wp(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(e,t=[]){let n;switch(e){case"Browser":n=bc(ce());break;case"Worker":n=`${bc(ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ei}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(e,t={}){return Kt(e,"GET","/v2/passwordPolicy",Wt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=6;class P_{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:C_,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bc(this),this.idTokenSubscription=new Bc(this),this.beforeStateQueue=new k_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $n.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await hp(this,{idToken:t}),r=await ot._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(ze(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await wo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=a_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ze(this.app))return Promise.reject(lt(this));const n=t?vt(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ze(this.app)?Promise.reject(lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await T_(this),n=new P_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new yn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await E_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&st(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&r_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gt(e){return vt(e)}class Bc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Sy(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function N_(e){Ho=e}function Tp(e){return Ho.loadJS(e)}function A_(){return Ho.recaptchaEnterpriseScript}function O_(){return Ho.gapiScript}function x_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const L_="recaptcha-enterprise",D_="NO_RECAPTCHA";class M_{constructor(t){this.type=L_,this.auth=Gt(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{h_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new f_(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Fc(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(D_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Fc(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=A_();l.length!==0&&(l+=a),Tp(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Vc(e,t,n,r=!1){const i=new M_(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ua(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Vc(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Vc(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(e,t){const n=Xn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Hr(o,t??{}))return i;Le(i,"already-initialized")}return n.initialize({options:t})}function F_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function j_(e,t,n){const r=Gt(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Cp(t),{host:s,port:a}=z_(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$_()}function Cp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function z_(e){const t=Cp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Hc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Hc(s)}}}function Hc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function $_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(t){return it("not implemented")}_linkToIdToken(t,n){return it("not implemented")}_getReauthenticationResolver(t){return it("not implemented")}}async function b_(e,t){return Kt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(e,t){return ni(e,"POST","/v1/accounts:signInWithPassword",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(e,t){return ni(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}async function H_(e,t){return ni(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends ql{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Gr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Gr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ua(t,n,"signInWithPassword",B_);case"emailLink":return V_(t,{email:this._email,oobCode:this._password});default:Le(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ua(t,r,"signUpPassword",b_);case"emailLink":return H_(t,{idToken:n,email:this._email,oobCode:this._password});default:Le(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t){return ni(e,"POST","/v1/accounts:signInWithIdp",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="http://localhost";class pn extends ql{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new pn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Le("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Bl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new pn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return bn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,bn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,bn(t,n)}buildRequest(){const t={requestUri:W_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Zr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function G_(e){const t=pr(mr(e)).link,n=t?pr(mr(t)).deep_link_id:null,r=pr(mr(e)).deep_link_id;return(r?pr(mr(r)).link:null)||r||n||t||e}class Ql{constructor(t){var n,r,i,o,s,a;const l=pr(mr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=K_((i=l.mode)!==null&&i!==void 0?i:null);N(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=G_(t);try{return new Ql(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(t,n){return Gr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ql.parseLink(n);return N(r,"argument-error"),Gr._fromEmailAndCode(t,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Yl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends ri{constructor(){super("facebook.com")}static credential(t){return pn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kt.credential(t.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends ri{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return pn._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return tt.credentialFromTaggedObject(t)}static credentialFromError(t){return tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return tt.credential(n,r)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends ri{constructor(){super("github.com")}static credential(t){return pn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tt.credential(t.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends ri{constructor(){super("twitter.com")}static credential(t,n){return pn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(e,t){return ni(e,"POST","/v1/accounts:signUp",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await ot._fromIdTokenResponse(t,r,i),s=Wc(r);return new mn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Wc(r);return new mn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Wc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends Xe{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new _o(t,n,r,i)}}function Pp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(e,o,t,r):o})}async function Q_(e,t,n=!1){const r=await Kr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return mn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(e,t,n=!1){const{auth:r}=e;if(ze(r.app))return Promise.reject(lt(r));const i="reauthenticate";try{const o=await Kr(e,Pp(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=Kl(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),mn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Le(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(e,t,n=!1){if(ze(e.app))return Promise.reject(lt(e));const r="signIn",i=await Pp(e,r,t),o=await mn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function J_(e,t){return Rp(Gt(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(e){const t=Gt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function X_(e,t,n){if(ze(e.app))return Promise.reject(lt(e));const r=Gt(e),s=await Ua(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",q_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Np(e),l}),a=await mn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function Z_(e,t,n){return ze(e.app)?Promise.reject(lt(e)):J_(vt(e),Zn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Np(e),r})}function eE(e,t,n,r){return vt(e).onIdTokenChanged(t,n,r)}function tE(e,t,n){return vt(e).beforeAuthStateChanged(t,n)}const Eo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=1e3,rE=10;class Op extends Ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ip(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);I_()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,rE):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},nE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Op.type="LOCAL";const iE=Op;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp extends Ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}xp.type="SESSION";const Lp=xp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Wo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await oE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Jl("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(h),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function aE(e){Ye().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function lE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uE(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function cE(){return Dp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="firebaseLocalStorageDb",dE=1,So="firebaseLocalStorage",Up="fbase_key";class ii{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(e,t){return e.transaction([So],t?"readwrite":"readonly").objectStore(So)}function fE(){const e=indexedDB.deleteDatabase(Mp);return new ii(e).toPromise()}function Fa(){const e=indexedDB.open(Mp,dE);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(So,{keyPath:Up})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(So)?t(r):(r.close(),await fE(),t(await Fa()))})})}async function Kc(e,t,n){const r=Ko(e,!0).put({[Up]:t,value:n});return new ii(r).toPromise()}async function hE(e,t){const n=Ko(e,!1).get(t),r=await new ii(n).toPromise();return r===void 0?null:r.value}function Gc(e,t){const n=Ko(e,!0).delete(t);return new ii(n).toPromise()}const pE=800,mE=3;class Fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fa(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>mE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wo._getInstance(cE()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await lE(),!this.activeServiceWorker)return;this.sender=new sE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||uE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fa();return await Kc(t,Eo,"1"),await Gc(t,Eo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>hE(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ko(i,!1).getAll();return new ii(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fp.type="LOCAL";const gE=Fp;new ti(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(e,t){return t?st(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends ql{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return bn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return bn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function vE(e){return Rp(e.auth,new Xl(e),e.bypassAuthState)}function yE(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Y_(n,new Xl(e),e.bypassAuthState)}async function wE(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Q_(n,new Xl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return vE;case"linkViaPopup":case"linkViaRedirect":return wE;case"reauthViaPopup":case"reauthViaRedirect":return yE;default:Le(this.auth,"internal-error")}}resolve(t){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new ti(2e3,1e4);async function EE(e,t,n){if(ze(e.app))return Promise.reject(Be(e,"operation-not-supported-in-this-environment"));const r=Gt(e);i_(e,t,Yl);const i=jp(r,n);return new rn(r,"signInViaPopup",t,i).executeNotNull()}class rn extends zp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const t=Jl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,_E.get())};t()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="pendingRedirect",$i=new Map;class IE extends zp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=$i.get(this.auth._key());if(!t){try{const r=await kE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}$i.set(this.auth._key(),t)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kE(e,t){const n=PE(t),r=CE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function TE(e,t){$i.set(e._key(),t)}function CE(e){return st(e._redirectPersistence)}function PE(e){return zi(SE,e.config.apiKey,e.name)}async function RE(e,t,n=!1){if(ze(e.app))return Promise.reject(lt(e));const r=Gt(e),i=jp(r,t),s=await new IE(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=10*60*1e3;class AE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!OE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!$p(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=NE&&this.cachedEventUids.clear(),this.cachedEventUids.has(qc(t))}saveEventToCache(t){this.cachedEventUids.add(qc(t)),this.lastProcessedEventTime=Date.now()}}function qc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function $p({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function OE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $p(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xE(e,t={}){return Kt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DE=/^https?/;async function ME(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xE(e);for(const n of t)try{if(UE(n))return}catch{}Le(e,"unauthorized-domain")}function UE(e){const t=Da(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!DE.test(n))return!1;if(LE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new ti(3e4,6e4);function Qc(){const e=Ye().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function jE(e){return new Promise((t,n)=>{var r,i,o;function s(){Qc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qc(),n(Be(e,"network-request-failed"))},timeout:FE.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ye().gapi)===null||o===void 0)&&o.load)s();else{const a=x_("iframefcb");return Ye()[a]=()=>{gapi.load?s():n(Be(e,"network-request-failed"))},Tp(`${O_()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw bi=null,t})}let bi=null;function zE(e){return bi=bi||jE(e),bi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=new ti(5e3,15e3),bE="__/auth/iframe",BE="emulator/auth/iframe",VE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WE(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Wl(t,BE):`https://${e.config.authDomain}/${bE}`,r={apiKey:t.apiKey,appName:e.name,v:ei},i=HE.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Zr(r).slice(1)}`}async function KE(e){const t=await zE(e),n=Ye().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:WE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Be(e,"network-request-failed"),a=Ye().setTimeout(()=>{o(s)},$E.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qE=500,QE=600,YE="_blank",JE="http://localhost";class Yc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XE(e,t,n,r=qE,i=QE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},GE),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ce().toLowerCase();n&&(a=yp(u)?YE:n),gp(u)&&(t=t||JE,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[g,y])=>`${m}${g}=${y},`,"");if(S_(u)&&a!=="_self")return ZE(t||"",a),new Yc(null);const d=window.open(t||"",a,h);N(d,e,"popup-blocked");try{d.focus()}catch{}return new Yc(d)}function ZE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="__/auth/handler",t1="emulator/auth/handler",n1=encodeURIComponent("fac");async function Jc(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ei,eventId:i};if(t instanceof Yl){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Ey(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,d]of Object.entries(o||{}))s[h]=d}if(t instanceof ri){const h=t.getScopes().filter(d=>d!=="");h.length>0&&(s.scopes=h.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await e._getAppCheckToken(),u=l?`#${n1}=${encodeURIComponent(l)}`:"";return`${r1(e)}?${Zr(a).slice(1)}${u}`}function r1({config:e}){return e.emulator?Wl(e,t1):`https://${e.authDomain}/${e1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="webStorageSupport";class i1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lp,this._completeRedirectFn=RE,this._overrideRedirectResult=TE}async _openPopup(t,n,r,i){var o;mt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Jc(t,n,r,Da(),i);return XE(t,s,Jl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Jc(t,n,r,Da(),i);return aE(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(mt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await KE(t),r=new AE(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Os,{type:Os},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Os];s!==void 0&&n(!!s),Le(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ME(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ip()||vp()||Gl()}}const o1=i1;var Xc="@firebase/auth",Zc="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l1(e){pt(new Je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;N(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kp(e)},u=new R_(r,i,o,l);return F_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),pt(new Je("auth-internal",t=>{const n=Gt(t.getProvider("auth").getImmediate());return(r=>new s1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Xc,Zc,a1(e)),Qe(Xc,Zc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=5*60,c1=Nh("authIdTokenMaxAge")||u1;let ed=null;const d1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>c1)return;const i=n==null?void 0:n.token;ed!==i&&(ed=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function f1(e=Fh()){const t=Xn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=U_(e,{popupRedirectResolver:o1,persistence:[gE,iE,Lp]}),r=Nh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=d1(o.toString());tE(n,s,()=>s(n.currentUser)),eE(n,a=>s(a))}}const i=dy("auth");return i&&j_(n,`http://${i}`),n}function h1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}N_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Be("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",h1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l1("Browser");const p1={apiKey:"AIzaSyDviHmbNMxNtzvG5ZvZBOqgt2tt2fCxcOU",authDomain:"research-finder-1000.firebaseapp.com",projectId:"research-finder-1000",storageBucket:"research-finder-1000.firebasestorage.app",messagingSenderId:"90727380837",appId:"1:90727380837:web:7ac4c1b13e26cfecb3538c",measurementId:"G-7MKKN551YC"},bp=Uh(p1);Xw(bp);const ja=f1(bp),m1=new tt,g1=()=>{const e=async()=>{try{await EE(ja,m1),console.log("User signed in with Google")}catch(t){console.error("Error signing in with Google:",t.message)}};return R.jsx("button",{onClick:e,className:"google-signin-button",children:"Sign In with Google"})},td=({mode:e})=>{const t=e==="register",[n,r]=A.useState(""),[i,o]=A.useState(""),[s,a]=A.useState(""),l=async()=>{try{t?(await X_(ja,n,i),a("User registered successfully")):(await Z_(ja,n,i),a("User signed in successfully"))}catch(u){a(`Error: ${u.message}`)}};return R.jsx("div",{className:"auth-container",children:R.jsxs("div",{className:"auth",children:[R.jsx("h3",{children:t?"Register":"Sign In"})," ",R.jsx("input",{type:"text",placeholder:"Email",value:n,onChange:u=>r(u.target.value)}),R.jsx("input",{type:"password",placeholder:"Password",value:i,onChange:u=>o(u.target.value)}),R.jsx("button",{onClick:l,children:t?"Register":"Sign In"})," ",R.jsx("p",{children:s})," ",R.jsxs("div",{style:{marginTop:"20px"},children:[R.jsxs("p",{children:["Or ",t?"register":"sign in"," with Google"]}),R.jsx(g1,{isRegister:t})," "]}),R.jsxs("p",{children:[t?"Already have an account?":"Don't have an account?"," ",R.jsx("span",{style:{color:"blue",cursor:"pointer"},children:R.jsx("a",{href:t?"/signin":"/register",style:{color:"blue",textDecoration:"underline"},children:t?"Sign In":"Register"})})]})]})})};function v1(){return R.jsxs("div",{className:"home-container",children:[R.jsxs("header",{className:"home-header",children:[R.jsx("div",{className:"logo",children:"Research Finder"}),R.jsx("input",{type:"text",placeholder:"Search research postings...",className:"search-bar"}),R.jsxs("div",{className:"header-buttons",children:[R.jsx("button",{className:"btn",children:"Sign In"}),R.jsx("button",{className:"btn btn-primary",children:"Post a Research Position"})]})]}),R.jsxs("div",{className:"main-content",children:[R.jsxs("aside",{className:"sidebar",children:[R.jsx("h3",{children:"Filters"}),R.jsxs("ul",{children:[R.jsx("li",{children:"Department"}),R.jsx("li",{children:"Research Type"}),R.jsx("li",{children:"Location"})]})]}),R.jsxs("div",{className:"postings-container",children:[R.jsx("h2",{children:"Research Opportunities"}),R.jsxs("div",{className:"posting",children:[R.jsx("h3",{children:"Machine Learning Internship"}),R.jsx("p",{children:"Department: Computer Science"}),R.jsx("p",{children:"Description: Work on cutting-edge AI projects..."}),R.jsx("button",{className:"btn btn-secondary",children:"View Details"})]}),R.jsxs("div",{className:"posting",children:[R.jsx("h3",{children:"Climate Change Research"}),R.jsx("p",{children:"Department: Environmental Studies"}),R.jsx("p",{children:"Description: Join our team in studying global climate change..."}),R.jsx("button",{className:"btn btn-secondary",children:"View Details"})]})]})]}),R.jsxs("footer",{className:"home-footer",children:[R.jsx("p",{children:"© 2024 Research Finder. All rights reserved."}),R.jsx("a",{href:"/terms",children:"Terms of Service"}),R.jsx("a",{href:"/help",children:"Help"})]})]})}function y1(){return R.jsx(ry,{children:R.jsxs(ey,{children:[R.jsx(Fi,{path:"/",element:R.jsx(v1,{})})," ",R.jsx(Fi,{path:"/signin",element:R.jsx(td,{mode:"signin"})})," ",R.jsx(Fi,{path:"/register",element:R.jsx(td,{mode:"register"})})," "]})})}xs.createRoot(document.getElementById("root")).render(R.jsx(fd.StrictMode,{children:R.jsx(y1,{})}));

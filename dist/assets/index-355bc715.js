function qp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var od={exports:{}},To={},sd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zr=Symbol.for("react.element"),Jp=Symbol.for("react.portal"),Xp=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),em=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),rm=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),om=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),tu=Symbol.iterator;function am(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ld=Object.assign,ud={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=ud,this.updater=n||ad}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cd(){}cd.prototype=Yn.prototype;function $a(e,t,n){this.props=e,this.context=t,this.refs=ud,this.updater=n||ad}var ba=$a.prototype=new cd;ba.constructor=$a;ld(ba,Yn.prototype);ba.isPureReactComponent=!0;var nu=Array.isArray,dd=Object.prototype.hasOwnProperty,Ba={current:null},fd={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)dd.call(t,r)&&!fd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zr,type:e,key:o,ref:s,props:i,_owner:Ba.current}}function lm(e,t){return{$$typeof:Zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zr}function um(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ru=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?um(""+e.key):t.toString(36)}function Ni(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Zr:case Jp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Zo(s,0):r,nu(i)?(n="",e!=null&&(n=e.replace(ru,"$&/")+"/"),Ni(i,t,n,"",function(u){return u})):i!=null&&(Va(i)&&(i=lm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ru,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",nu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Zo(o,a);s+=Ni(o,t,n,l,i)}else if(l=am(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Zo(o,a++),s+=Ni(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function di(e,t,n){if(e==null)return e;var r=[],i=0;return Ni(e,r,"","",function(o){return t.call(n,o,i++)}),r}function cm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},xi={transition:null},dm={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:xi,ReactCurrentOwner:Ba};function pd(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:di,forEach:function(e,t,n){di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return di(e,function(){t++}),t},toArray:function(e){return di(e,function(t){return t})||[]},only:function(e){if(!Va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Yn;D.Fragment=Xp;D.Profiler=em;D.PureComponent=$a;D.StrictMode=Zp;D.Suspense=im;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dm;D.act=pd;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ld({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)dd.call(t,l)&&!fd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Zr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:nm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tm,_context:e},e.Consumer=e};D.createElement=hd;D.createFactory=function(e){var t=hd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:rm,render:e}};D.isValidElement=Va;D.lazy=function(e){return{$$typeof:sm,_payload:{_status:-1,_result:e},_init:cm}};D.memo=function(e,t){return{$$typeof:om,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=xi.transition;xi.transition={};try{e()}finally{xi.transition=t}};D.unstable_act=pd;D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.3.1";sd.exports=D;var I=sd.exports;const md=Yp(I),fm=qp({__proto__:null,default:md},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=I,pm=Symbol.for("react.element"),mm=Symbol.for("react.fragment"),gm=Object.prototype.hasOwnProperty,vm=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ym={key:!0,ref:!0,__self:!0,__source:!0};function gd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)gm.call(t,r)&&!ym.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:pm,type:e,key:o,ref:s,props:i,_owner:vm.current}}To.Fragment=mm;To.jsx=gd;To.jsxs=gd;od.exports=To;var y=od.exports,Us={},vd={exports:{}},Te={},yd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,A){var O=C.length;C.push(A);e:for(;0<O;){var G=O-1>>>1,Z=C[G];if(0<i(Z,A))C[G]=A,C[O]=Z,O=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var A=C[0],O=C.pop();if(O!==A){C[0]=O;e:for(var G=0,Z=C.length,ui=Z>>>1;G<ui;){var Kt=2*(G+1)-1,Xo=C[Kt],Gt=Kt+1,ci=C[Gt];if(0>i(Xo,O))Gt<Z&&0>i(ci,Xo)?(C[G]=ci,C[Gt]=O,G=Gt):(C[G]=Xo,C[Kt]=O,G=Kt);else if(Gt<Z&&0>i(ci,O))C[G]=ci,C[Gt]=O,G=Gt;else break e}}return A}function i(C,A){var O=C.sortIndex-A.sortIndex;return O!==0?O:C.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,d=null,p=3,g=!1,v=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=C)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function w(C){if(_=!1,m(C),!v)if(n(l)!==null)v=!0,Yo(k);else{var A=n(u);A!==null&&Jo(w,A.startTime-C)}}function k(C,A){v=!1,_&&(_=!1,h(N),N=-1),g=!0;var O=p;try{for(m(A),d=n(l);d!==null&&(!(d.expirationTime>A)||C&&!De());){var G=d.callback;if(typeof G=="function"){d.callback=null,p=d.priorityLevel;var Z=G(d.expirationTime<=A);A=e.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&r(l),m(A)}else r(l);d=n(l)}if(d!==null)var ui=!0;else{var Kt=n(u);Kt!==null&&Jo(w,Kt.startTime-A),ui=!1}return ui}finally{d=null,p=O,g=!1}}var P=!1,R=null,N=-1,z=5,L=-1;function De(){return!(e.unstable_now()-L<z)}function rr(){if(R!==null){var C=e.unstable_now();L=C;var A=!0;try{A=R(!0,C)}finally{A?ir():(P=!1,R=null)}}else P=!1}var ir;if(typeof c=="function")ir=function(){c(rr)};else if(typeof MessageChannel<"u"){var eu=new MessageChannel,Qp=eu.port2;eu.port1.onmessage=rr,ir=function(){Qp.postMessage(null)}}else ir=function(){S(rr,0)};function Yo(C){R=C,P||(P=!0,ir())}function Jo(C,A){N=S(function(){C(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Yo(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var O=p;p=A;try{return C()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,A){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=p;p=C;try{return A()}finally{p=O}},e.unstable_scheduleCallback=function(C,A,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=O+Z,C={id:f++,callback:A,priorityLevel:C,startTime:O,expirationTime:Z,sortIndex:-1},O>G?(C.sortIndex=O,t(u,C),n(l)===null&&C===n(u)&&(_?(h(N),N=-1):_=!0,Jo(w,O-G))):(C.sortIndex=Z,t(l,C),v||g||(v=!0,Yo(k))),C},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(C){var A=p;return function(){var O=p;p=A;try{return C.apply(this,arguments)}finally{p=O}}}})(wd);yd.exports=wd;var wm=yd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m=I,ke=wm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _d=new Set,xr={};function pn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(xr[e]=t,e=0;e<t.length;e++)_d.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),js=Object.prototype.hasOwnProperty,Em=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iu={},ou={};function Sm(e){return js.call(ou,e)?!0:js.call(iu,e)?!1:Em.test(e)?ou[e]=!0:(iu[e]=!0,!1)}function Im(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function km(e,t,n,r){if(t===null||typeof t>"u"||Im(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ha=/[\-:]([a-z])/g;function Wa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ha,Wa);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ha,Wa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ha,Wa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ka(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(km(t,n,i,r)&&(n=null),r||i===null?Sm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=_m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fi=Symbol.for("react.element"),En=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Ga=Symbol.for("react.strict_mode"),Fs=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),Sd=Symbol.for("react.context"),Qa=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),$s=Symbol.for("react.suspense_list"),qa=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),Id=Symbol.for("react.offscreen"),su=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,es;function hr(e){if(es===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);es=t&&t[1]||""}return`
`+es+e}var ts=!1;function ns(e,t){if(!e||ts)return"";ts=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ts=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hr(e):""}function Tm(e){switch(e.tag){case 5:return hr(e.type);case 16:return hr("Lazy");case 13:return hr("Suspense");case 19:return hr("SuspenseList");case 0:case 2:case 15:return e=ns(e.type,!1),e;case 11:return e=ns(e.type.render,!1),e;case 1:return e=ns(e.type,!0),e;default:return""}}function bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case En:return"Portal";case Fs:return"Profiler";case Ga:return"StrictMode";case zs:return"Suspense";case $s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sd:return(e.displayName||"Context")+".Consumer";case Ed:return(e._context.displayName||"Context")+".Provider";case Qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qa:return t=e.displayName||null,t!==null?t:bs(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return bs(e(t))}catch{}}return null}function Cm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bs(t);case 8:return t===Ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pm(e){var t=kd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hi(e){e._valueTracker||(e._valueTracker=Pm(e))}function Td(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bs(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cd(e,t){t=t.checked,t!=null&&Ka(e,"checked",t,!1)}function Vs(e,t){Cd(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hs(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hs(e,t,n){(t!=="number"||Wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(pr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function Pd(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,Nd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rm=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){Rm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function xd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function Ad(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Nm=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gs(e,t){if(t){if(Nm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qs=null;function Ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Dn=null,Mn=null;function du(e){if(e=ni(e)){if(typeof Ys!="function")throw Error(E(280));var t=e.stateNode;t&&(t=xo(t),Ys(e.stateNode,e.type,t))}}function Od(e){Dn?Mn?Mn.push(e):Mn=[e]:Dn=e}function Ld(){if(Dn){var e=Dn,t=Mn;if(Mn=Dn=null,du(e),t)for(e=0;e<t.length;e++)du(t[e])}}function Dd(e,t){return e(t)}function Md(){}var rs=!1;function Ud(e,t,n){if(rs)return e(t,n);rs=!0;try{return Dd(e,t,n)}finally{rs=!1,(Dn!==null||Mn!==null)&&(Md(),Ld())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Js=!1;if(lt)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Js=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Js=!1}function xm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var _r=!1,Ki=null,Gi=!1,Xs=null,Am={onError:function(e){_r=!0,Ki=e}};function Om(e,t,n,r,i,o,s,a,l){_r=!1,Ki=null,xm.apply(Am,arguments)}function Lm(e,t,n,r,i,o,s,a,l){if(Om.apply(this,arguments),_r){if(_r){var u=Ki;_r=!1,Ki=null}else throw Error(E(198));Gi||(Gi=!0,Xs=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fu(e){if(mn(e)!==e)throw Error(E(188))}function Dm(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fu(i),e;if(o===r)return fu(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Fd(e){return e=Dm(e),e!==null?zd(e):null}function zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zd(e);if(t!==null)return t;e=e.sibling}return null}var $d=ke.unstable_scheduleCallback,hu=ke.unstable_cancelCallback,Mm=ke.unstable_shouldYield,Um=ke.unstable_requestPaint,Q=ke.unstable_now,jm=ke.unstable_getCurrentPriorityLevel,Ja=ke.unstable_ImmediatePriority,bd=ke.unstable_UserBlockingPriority,Qi=ke.unstable_NormalPriority,Fm=ke.unstable_LowPriority,Bd=ke.unstable_IdlePriority,Co=null,Ge=null;function zm(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Bm,$m=Math.log,bm=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-($m(e)/bm|0)|0}var mi=64,gi=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=mr(a):(o&=s,o!==0&&(r=mr(o)))}else s=n&~i,s!==0?r=mr(s):o!==0&&(r=mr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Vm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ze(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Vm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vd(){var e=mi;return mi<<=1,!(mi&4194240)&&(mi=64),e}function is(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Wm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Xa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wd,Za,Kd,Gd,Qd,ea=!1,vi=[],Nt=null,xt=null,At=null,Lr=new Map,Dr=new Map,Et=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pu(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function ar(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ni(t),t!==null&&Za(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gm(e,t,n,r,i){switch(t){case"focusin":return Nt=ar(Nt,e,t,n,r,i),!0;case"dragenter":return xt=ar(xt,e,t,n,r,i),!0;case"mouseover":return At=ar(At,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Lr.set(o,ar(Lr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Dr.set(o,ar(Dr.get(o)||null,e,t,n,r,i)),!0}return!1}function qd(e){var t=Jt(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=jd(n),t!==null){e.blockedOn=t,Qd(e.priority,function(){Kd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qs=r,n.target.dispatchEvent(r),qs=null}else return t=ni(n),t!==null&&Za(t),e.blockedOn=n,!1;t.shift()}return!0}function mu(e,t,n){Ai(e)&&n.delete(t)}function Qm(){ea=!1,Nt!==null&&Ai(Nt)&&(Nt=null),xt!==null&&Ai(xt)&&(xt=null),At!==null&&Ai(At)&&(At=null),Lr.forEach(mu),Dr.forEach(mu)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,ea||(ea=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Qm)))}function Mr(e){function t(i){return lr(i,e)}if(0<vi.length){lr(vi[0],e);for(var n=1;n<vi.length;n++){var r=vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&lr(Nt,e),xt!==null&&lr(xt,e),At!==null&&lr(At,e),Lr.forEach(t),Dr.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)qd(n),n.blockedOn===null&&Et.shift()}var Un=mt.ReactCurrentBatchConfig,Yi=!0;function qm(e,t,n,r){var i=U,o=Un.transition;Un.transition=null;try{U=1,el(e,t,n,r)}finally{U=i,Un.transition=o}}function Ym(e,t,n,r){var i=U,o=Un.transition;Un.transition=null;try{U=4,el(e,t,n,r)}finally{U=i,Un.transition=o}}function el(e,t,n,r){if(Yi){var i=ta(e,t,n,r);if(i===null)ps(e,t,r,Ji,n),pu(e,r);else if(Gm(i,e,t,n,r))r.stopPropagation();else if(pu(e,r),t&4&&-1<Km.indexOf(e)){for(;i!==null;){var o=ni(i);if(o!==null&&Wd(o),o=ta(e,t,n,r),o===null&&ps(e,t,r,Ji,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ps(e,t,r,null,n)}}var Ji=null;function ta(e,t,n,r){if(Ji=null,e=Ya(r),e=Jt(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ji=e,null}function Yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jm()){case Ja:return 1;case bd:return 4;case Qi:case Fm:return 16;case Bd:return 536870912;default:return 16}default:return 16}}var Ct=null,tl=null,Oi=null;function Jd(){if(Oi)return Oi;var e,t=tl,n=t.length,r,i="value"in Ct?Ct.value:Ct.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Oi=i.slice(e,1<r?1-r:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function gu(){return!1}function Ce(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yi:gu,this.isPropagationStopped=gu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Ce(Jn),ti=W({},Jn,{view:0,detail:0}),Jm=Ce(ti),os,ss,ur,Po=W({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(os=e.screenX-ur.screenX,ss=e.screenY-ur.screenY):ss=os=0,ur=e),os)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),vu=Ce(Po),Xm=W({},Po,{dataTransfer:0}),Zm=Ce(Xm),eg=W({},ti,{relatedTarget:0}),as=Ce(eg),tg=W({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),ng=Ce(tg),rg=W({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ig=Ce(rg),og=W({},Jn,{data:0}),yu=Ce(og),sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lg[e])?!!t[e]:!1}function rl(){return ug}var cg=W({},ti,{key:function(e){if(e.key){var t=sg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ag[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dg=Ce(cg),fg=W({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=Ce(fg),hg=W({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),pg=Ce(hg),mg=W({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gg=Ce(mg),vg=W({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=Ce(vg),wg=[9,13,27,32],il=lt&&"CompositionEvent"in window,Er=null;lt&&"documentMode"in document&&(Er=document.documentMode);var _g=lt&&"TextEvent"in window&&!Er,Xd=lt&&(!il||Er&&8<Er&&11>=Er),_u=String.fromCharCode(32),Eu=!1;function Zd(e,t){switch(e){case"keyup":return wg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function Eg(e,t){switch(e){case"compositionend":return ef(t);case"keypress":return t.which!==32?null:(Eu=!0,_u);case"textInput":return e=t.data,e===_u&&Eu?null:e;default:return null}}function Sg(e,t){if(In)return e==="compositionend"||!il&&Zd(e,t)?(e=Jd(),Oi=tl=Ct=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xd&&t.locale!=="ko"?null:t.data;default:return null}}var Ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ig[e.type]:t==="textarea"}function tf(e,t,n,r){Od(r),t=Xi(t,"onChange"),0<t.length&&(n=new nl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Ur=null;function kg(e){hf(e,0)}function Ro(e){var t=Cn(e);if(Td(t))return e}function Tg(e,t){if(e==="change")return t}var nf=!1;if(lt){var ls;if(lt){var us="oninput"in document;if(!us){var Iu=document.createElement("div");Iu.setAttribute("oninput","return;"),us=typeof Iu.oninput=="function"}ls=us}else ls=!1;nf=ls&&(!document.documentMode||9<document.documentMode)}function ku(){Sr&&(Sr.detachEvent("onpropertychange",rf),Ur=Sr=null)}function rf(e){if(e.propertyName==="value"&&Ro(Ur)){var t=[];tf(t,Ur,e,Ya(e)),Ud(kg,t)}}function Cg(e,t,n){e==="focusin"?(ku(),Sr=t,Ur=n,Sr.attachEvent("onpropertychange",rf)):e==="focusout"&&ku()}function Pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(Ur)}function Rg(e,t){if(e==="click")return Ro(t)}function Ng(e,t){if(e==="input"||e==="change")return Ro(t)}function xg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:xg;function jr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!js.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cu(e,t){var n=Tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tu(n)}}function of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sf(){for(var e=window,t=Wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wi(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ag(e){var t=sf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&of(n.ownerDocument.documentElement,n)){if(r!==null&&ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Cu(n,o);var s=Cu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Og=lt&&"documentMode"in document&&11>=document.documentMode,kn=null,na=null,Ir=null,ra=!1;function Pu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ra||kn==null||kn!==Wi(r)||(r=kn,"selectionStart"in r&&ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&jr(Ir,r)||(Ir=r,r=Xi(na,"onSelect"),0<r.length&&(t=new nl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},cs={},af={};lt&&(af=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function No(e){if(cs[e])return cs[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in af)return cs[e]=t[n];return e}var lf=No("animationend"),uf=No("animationiteration"),cf=No("animationstart"),df=No("transitionend"),ff=new Map,Ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){ff.set(e,t),pn(t,[e])}for(var ds=0;ds<Ru.length;ds++){var fs=Ru[ds],Lg=fs.toLowerCase(),Dg=fs[0].toUpperCase()+fs.slice(1);Bt(Lg,"on"+Dg)}Bt(lf,"onAnimationEnd");Bt(uf,"onAnimationIteration");Bt(cf,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(df,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mg=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function Nu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Lm(r,t,void 0,e),e.currentTarget=null}function hf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Nu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Nu(i,a,u),o=l}}}if(Gi)throw e=Xs,Gi=!1,Xs=null,e}function $(e,t){var n=t[la];n===void 0&&(n=t[la]=new Set);var r=e+"__bubble";n.has(r)||(pf(t,e,2,!1),n.add(r))}function hs(e,t,n){var r=0;t&&(r|=4),pf(n,e,r,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[_i]){e[_i]=!0,_d.forEach(function(n){n!=="selectionchange"&&(Mg.has(n)||hs(n,!1,e),hs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,hs("selectionchange",!1,t))}}function pf(e,t,n,r){switch(Yd(t)){case 1:var i=qm;break;case 4:i=Ym;break;default:i=el}n=i.bind(null,t,n,e),i=void 0,!Js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ps(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Jt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ud(function(){var u=o,f=Ya(n),d=[];e:{var p=ff.get(e);if(p!==void 0){var g=nl,v=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":g=dg;break;case"focusin":v="focus",g=as;break;case"focusout":v="blur",g=as;break;case"beforeblur":case"afterblur":g=as;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=pg;break;case lf:case uf:case cf:g=ng;break;case df:g=gg;break;case"scroll":g=Jm;break;case"wheel":g=yg;break;case"copy":case"cut":case"paste":g=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wu}var _=(t&4)!==0,S=!_&&e==="scroll",h=_?p!==null?p+"Capture":null:p;_=[];for(var c=u,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=Or(c,h),w!=null&&_.push(zr(c,w,m)))),S)break;c=c.return}0<_.length&&(p=new g(p,v,null,n,f),d.push({event:p,listeners:_}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==qs&&(v=n.relatedTarget||n.fromElement)&&(Jt(v)||v[ut]))break e;if((g||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Jt(v):null,v!==null&&(S=mn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=vu,w="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=wu,w="onPointerLeave",h="onPointerEnter",c="pointer"),S=g==null?p:Cn(g),m=v==null?p:Cn(v),p=new _(w,c+"leave",g,n,f),p.target=S,p.relatedTarget=m,w=null,Jt(f)===u&&(_=new _(h,c+"enter",v,n,f),_.target=m,_.relatedTarget=S,w=_),S=w,g&&v)t:{for(_=g,h=v,c=0,m=_;m;m=wn(m))c++;for(m=0,w=h;w;w=wn(w))m++;for(;0<c-m;)_=wn(_),c--;for(;0<m-c;)h=wn(h),m--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=wn(_),h=wn(h)}_=null}else _=null;g!==null&&xu(d,p,g,_,!1),v!==null&&S!==null&&xu(d,S,v,_,!0)}}e:{if(p=u?Cn(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=Tg;else if(Su(p))if(nf)k=Ng;else{k=Pg;var P=Cg}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Rg);if(k&&(k=k(e,u))){tf(d,k,n,f);break e}P&&P(e,p,u),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Hs(p,"number",p.value)}switch(P=u?Cn(u):window,e){case"focusin":(Su(P)||P.contentEditable==="true")&&(kn=P,na=u,Ir=null);break;case"focusout":Ir=na=kn=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,Pu(d,n,f);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":Pu(d,n,f)}var R;if(il)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else In?Zd(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Xd&&n.locale!=="ko"&&(In||N!=="onCompositionStart"?N==="onCompositionEnd"&&In&&(R=Jd()):(Ct=f,tl="value"in Ct?Ct.value:Ct.textContent,In=!0)),P=Xi(u,N),0<P.length&&(N=new yu(N,e,null,n,f),d.push({event:N,listeners:P}),R?N.data=R:(R=ef(n),R!==null&&(N.data=R)))),(R=_g?Eg(e,n):Sg(e,n))&&(u=Xi(u,"onBeforeInput"),0<u.length&&(f=new yu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=R))}hf(d,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Or(e,n),o!=null&&r.unshift(zr(e,o,i)),o=Or(e,t),o!=null&&r.push(zr(e,o,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Or(n,o),l!=null&&s.unshift(zr(n,l,a))):i||(l=Or(n,o),l!=null&&s.push(zr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ug=/\r\n?/g,jg=/\u0000|\uFFFD/g;function Au(e){return(typeof e=="string"?e:""+e).replace(Ug,`
`).replace(jg,"")}function Ei(e,t,n){if(t=Au(t),Au(e)!==t&&n)throw Error(E(425))}function Zi(){}var ia=null,oa=null;function sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var aa=typeof setTimeout=="function"?setTimeout:void 0,Fg=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,zg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch($g)}:aa;function $g(e){setTimeout(function(){throw e})}function ms(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),We="__reactFiber$"+Xn,$r="__reactProps$"+Xn,ut="__reactContainer$"+Xn,la="__reactEvents$"+Xn,bg="__reactListeners$"+Xn,Bg="__reactHandles$"+Xn;function Jt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lu(e);e!==null;){if(n=e[We])return n;e=Lu(e)}return t}e=n,n=e.parentNode}return null}function ni(e){return e=e[We]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function xo(e){return e[$r]||null}var ua=[],Pn=-1;function Vt(e){return{current:e}}function b(e){0>Pn||(e.current=ua[Pn],ua[Pn]=null,Pn--)}function F(e,t){Pn++,ua[Pn]=e.current,e.current=t}var bt={},le=Vt(bt),ge=Vt(!1),sn=bt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function eo(){b(ge),b(le)}function Du(e,t,n){if(le.current!==bt)throw Error(E(168));F(le,t),F(ge,n)}function mf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Cm(e)||"Unknown",i));return W({},n,r)}function to(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,sn=le.current,F(le,e),F(ge,ge.current),!0}function Mu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=mf(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,b(ge),b(le),F(le,e)):b(ge),F(ge,n)}var et=null,Ao=!1,gs=!1;function gf(e){et===null?et=[e]:et.push(e)}function Vg(e){Ao=!0,gf(e)}function Ht(){if(!gs&&et!==null){gs=!0;var e=0,t=U;try{var n=et;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}et=null,Ao=!1}catch(i){throw et!==null&&(et=et.slice(e+1)),$d(Ja,Ht),i}finally{U=t,gs=!1}}return null}var Rn=[],Nn=0,no=null,ro=0,Pe=[],Re=0,an=null,nt=1,rt="";function Qt(e,t){Rn[Nn++]=ro,Rn[Nn++]=no,no=e,ro=t}function vf(e,t,n){Pe[Re++]=nt,Pe[Re++]=rt,Pe[Re++]=an,an=e;var r=nt;e=rt;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var o=32-ze(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,nt=1<<32-ze(t)+i|n<<i|r,rt=o+e}else nt=1<<o|n<<i|r,rt=e}function sl(e){e.return!==null&&(Qt(e,1),vf(e,1,0))}function al(e){for(;e===no;)no=Rn[--Nn],Rn[Nn]=null,ro=Rn[--Nn],Rn[Nn]=null;for(;e===an;)an=Pe[--Re],Pe[Re]=null,rt=Pe[--Re],Pe[Re]=null,nt=Pe[--Re],Pe[Re]=null}var Se=null,Ee=null,B=!1,Fe=null;function yf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ee=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=an!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,Ee=null,!0):!1;default:return!1}}function ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function da(e){if(B){var t=Ee;if(t){var n=t;if(!Uu(e,t)){if(ca(e))throw Error(E(418));t=Ot(n.nextSibling);var r=Se;t&&Uu(e,t)?yf(r,n):(e.flags=e.flags&-4097|2,B=!1,Se=e)}}else{if(ca(e))throw Error(E(418));e.flags=e.flags&-4097|2,B=!1,Se=e}}}function ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Si(e){if(e!==Se)return!1;if(!B)return ju(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sa(e.type,e.memoizedProps)),t&&(t=Ee)){if(ca(e))throw wf(),Error(E(418));for(;t;)yf(e,t),t=Ot(t.nextSibling)}if(ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Se?Ot(e.stateNode.nextSibling):null;return!0}function wf(){for(var e=Ee;e;)e=Ot(e.nextSibling)}function Hn(){Ee=Se=null,B=!1}function ll(e){Fe===null?Fe=[e]:Fe.push(e)}var Hg=mt.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fu(e){var t=e._init;return t(e._payload)}function _f(e){function t(h,c){if(e){var m=h.deletions;m===null?(h.deletions=[c],h.flags|=16):m.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Ut(h,c),h.index=0,h.sibling=null,h}function o(h,c,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<c?(h.flags|=2,c):m):(h.flags|=2,c)):(h.flags|=1048576,c)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,m,w){return c===null||c.tag!==6?(c=Is(m,h.mode,w),c.return=h,c):(c=i(c,m),c.return=h,c)}function l(h,c,m,w){var k=m.type;return k===Sn?f(h,c,m.props.children,w,m.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===wt&&Fu(k)===c.type)?(w=i(c,m.props),w.ref=cr(h,c,m),w.return=h,w):(w=$i(m.type,m.key,m.props,null,h.mode,w),w.ref=cr(h,c,m),w.return=h,w)}function u(h,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ks(m,h.mode,w),c.return=h,c):(c=i(c,m.children||[]),c.return=h,c)}function f(h,c,m,w,k){return c===null||c.tag!==7?(c=rn(m,h.mode,w,k),c.return=h,c):(c=i(c,m),c.return=h,c)}function d(h,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Is(""+c,h.mode,m),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fi:return m=$i(c.type,c.key,c.props,null,h.mode,m),m.ref=cr(h,null,c),m.return=h,m;case En:return c=ks(c,h.mode,m),c.return=h,c;case wt:var w=c._init;return d(h,w(c._payload),m)}if(pr(c)||or(c))return c=rn(c,h.mode,m,null),c.return=h,c;Ii(h,c)}return null}function p(h,c,m,w){var k=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(h,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fi:return m.key===k?l(h,c,m,w):null;case En:return m.key===k?u(h,c,m,w):null;case wt:return k=m._init,p(h,c,k(m._payload),w)}if(pr(m)||or(m))return k!==null?null:f(h,c,m,w,null);Ii(h,m)}return null}function g(h,c,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,a(c,h,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fi:return h=h.get(w.key===null?m:w.key)||null,l(c,h,w,k);case En:return h=h.get(w.key===null?m:w.key)||null,u(c,h,w,k);case wt:var P=w._init;return g(h,c,m,P(w._payload),k)}if(pr(w)||or(w))return h=h.get(m)||null,f(c,h,w,k,null);Ii(c,w)}return null}function v(h,c,m,w){for(var k=null,P=null,R=c,N=c=0,z=null;R!==null&&N<m.length;N++){R.index>N?(z=R,R=null):z=R.sibling;var L=p(h,R,m[N],w);if(L===null){R===null&&(R=z);break}e&&R&&L.alternate===null&&t(h,R),c=o(L,c,N),P===null?k=L:P.sibling=L,P=L,R=z}if(N===m.length)return n(h,R),B&&Qt(h,N),k;if(R===null){for(;N<m.length;N++)R=d(h,m[N],w),R!==null&&(c=o(R,c,N),P===null?k=R:P.sibling=R,P=R);return B&&Qt(h,N),k}for(R=r(h,R);N<m.length;N++)z=g(R,h,N,m[N],w),z!==null&&(e&&z.alternate!==null&&R.delete(z.key===null?N:z.key),c=o(z,c,N),P===null?k=z:P.sibling=z,P=z);return e&&R.forEach(function(De){return t(h,De)}),B&&Qt(h,N),k}function _(h,c,m,w){var k=or(m);if(typeof k!="function")throw Error(E(150));if(m=k.call(m),m==null)throw Error(E(151));for(var P=k=null,R=c,N=c=0,z=null,L=m.next();R!==null&&!L.done;N++,L=m.next()){R.index>N?(z=R,R=null):z=R.sibling;var De=p(h,R,L.value,w);if(De===null){R===null&&(R=z);break}e&&R&&De.alternate===null&&t(h,R),c=o(De,c,N),P===null?k=De:P.sibling=De,P=De,R=z}if(L.done)return n(h,R),B&&Qt(h,N),k;if(R===null){for(;!L.done;N++,L=m.next())L=d(h,L.value,w),L!==null&&(c=o(L,c,N),P===null?k=L:P.sibling=L,P=L);return B&&Qt(h,N),k}for(R=r(h,R);!L.done;N++,L=m.next())L=g(R,h,N,L.value,w),L!==null&&(e&&L.alternate!==null&&R.delete(L.key===null?N:L.key),c=o(L,c,N),P===null?k=L:P.sibling=L,P=L);return e&&R.forEach(function(rr){return t(h,rr)}),B&&Qt(h,N),k}function S(h,c,m,w){if(typeof m=="object"&&m!==null&&m.type===Sn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fi:e:{for(var k=m.key,P=c;P!==null;){if(P.key===k){if(k=m.type,k===Sn){if(P.tag===7){n(h,P.sibling),c=i(P,m.props.children),c.return=h,h=c;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===wt&&Fu(k)===P.type){n(h,P.sibling),c=i(P,m.props),c.ref=cr(h,P,m),c.return=h,h=c;break e}n(h,P);break}else t(h,P);P=P.sibling}m.type===Sn?(c=rn(m.props.children,h.mode,w,m.key),c.return=h,h=c):(w=$i(m.type,m.key,m.props,null,h.mode,w),w.ref=cr(h,c,m),w.return=h,h=w)}return s(h);case En:e:{for(P=m.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(h,c.sibling),c=i(c,m.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=ks(m,h.mode,w),c.return=h,h=c}return s(h);case wt:return P=m._init,S(h,c,P(m._payload),w)}if(pr(m))return v(h,c,m,w);if(or(m))return _(h,c,m,w);Ii(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,m),c.return=h,h=c):(n(h,c),c=Is(m,h.mode,w),c.return=h,h=c),s(h)):n(h,c)}return S}var Wn=_f(!0),Ef=_f(!1),io=Vt(null),oo=null,xn=null,ul=null;function cl(){ul=xn=oo=null}function dl(e){var t=io.current;b(io),e._currentValue=t}function fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){oo=e,ul=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(ul!==e)if(e={context:e,memoizedValue:t,next:null},xn===null){if(oo===null)throw Error(E(308));xn=e,oo.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return t}var Xt=null;function fl(e){Xt===null?Xt=[e]:Xt.push(e)}function Sf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fl(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function If(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,fl(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function Di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n)}}function zu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var i=e.updateQueue;_t=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,f=u=l=null,a=o;do{var p=a.lane,g=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,_=a;switch(p=t,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(g,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,p=typeof v=="function"?v.call(g,d,p):v,p==null)break e;d=W({},d,p);break e;case 2:_t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=d):f=f.next=g,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);un|=s,e.lanes=s,e.memoizedState=d}}function $u(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ri={},Qe=Vt(ri),br=Vt(ri),Br=Vt(ri);function Zt(e){if(e===ri)throw Error(E(174));return e}function pl(e,t){switch(F(Br,t),F(br,e),F(Qe,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ks(t,e)}b(Qe),F(Qe,t)}function Kn(){b(Qe),b(br),b(Br)}function kf(e){Zt(Br.current);var t=Zt(Qe.current),n=Ks(t,e.type);t!==n&&(F(br,e),F(Qe,n))}function ml(e){br.current===e&&(b(Qe),b(br))}var V=Vt(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vs=[];function gl(){for(var e=0;e<vs.length;e++)vs[e]._workInProgressVersionPrimary=null;vs.length=0}var Mi=mt.ReactCurrentDispatcher,ys=mt.ReactCurrentBatchConfig,ln=0,H=null,Y=null,ee=null,lo=!1,kr=!1,Vr=0,Wg=0;function oe(){throw Error(E(321))}function vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function yl(e,t,n,r,i,o){if(ln=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mi.current=e===null||e.memoizedState===null?qg:Yg,e=n(r,i),kr){o=0;do{if(kr=!1,Vr=0,25<=o)throw Error(E(301));o+=1,ee=Y=null,t.updateQueue=null,Mi.current=Jg,e=n(r,i)}while(kr)}if(Mi.current=uo,t=Y!==null&&Y.next!==null,ln=0,ee=Y=H=null,lo=!1,t)throw Error(E(300));return e}function wl(){var e=Vr!==0;return Vr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Oe(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,Y=e;else{if(e===null)throw Error(E(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function Hr(e,t){return typeof t=="function"?t(e):t}function ws(e){var t=Oe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((ln&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,H.lanes|=f,un|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,un|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _s(e){var t=Oe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Be(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Tf(){}function Cf(e,t){var n=H,r=Oe(),i=t(),o=!Be(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,_l(Nf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Wr(9,Rf.bind(null,n,r,i,t),void 0,null),te===null)throw Error(E(349));ln&30||Pf(n,t,i)}return i}function Pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rf(e,t,n,r){t.value=n,t.getSnapshot=r,xf(t)&&Af(e)}function Nf(e,t,n){return n(function(){xf(t)&&Af(e)})}function xf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Af(e){var t=ct(e,1);t!==null&&$e(t,e,1,-1)}function bu(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=Qg.bind(null,H,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Of(){return Oe().memoizedState}function Ui(e,t,n,r){var i=He();H.flags|=e,i.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var i=Oe();r=r===void 0?null:r;var o=void 0;if(Y!==null){var s=Y.memoizedState;if(o=s.destroy,r!==null&&vl(r,s.deps)){i.memoizedState=Wr(t,n,o,r);return}}H.flags|=e,i.memoizedState=Wr(1|t,n,o,r)}function Bu(e,t){return Ui(8390656,8,e,t)}function _l(e,t){return Oo(2048,8,e,t)}function Lf(e,t){return Oo(4,2,e,t)}function Df(e,t){return Oo(4,4,e,t)}function Mf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uf(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,Mf.bind(null,t,e),n)}function El(){}function jf(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ff(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zf(e,t,n){return ln&21?(Be(n,t)||(n=Vd(),H.lanes|=n,un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Kg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ys.transition;ys.transition={};try{e(!1),t()}finally{U=n,ys.transition=r}}function $f(){return Oe().memoizedState}function Gg(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bf(e))Bf(t,n);else if(n=Sf(e,t,n,r),n!==null){var i=ce();$e(n,e,r,i),Vf(n,t,r)}}function Qg(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bf(e))Bf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Be(a,s)){var l=t.interleaved;l===null?(i.next=i,fl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Sf(e,t,i,r),n!==null&&(i=ce(),$e(n,e,r,i),Vf(n,t,r))}}function bf(e){var t=e.alternate;return e===H||t!==null&&t===H}function Bf(e,t){kr=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n)}}var uo={readContext:Ae,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},qg={readContext:Ae,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4194308,4,Mf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ui(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gg.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:bu,useDebugValue:El,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=bu(!1),t=e[0];return e=Kg.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=He();if(B){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),te===null)throw Error(E(349));ln&30||Pf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bu(Nf.bind(null,r,o,e),[e]),r.flags|=2048,Wr(9,Rf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=te.identifierPrefix;if(B){var n=rt,r=nt;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yg={readContext:Ae,useCallback:jf,useContext:Ae,useEffect:_l,useImperativeHandle:Uf,useInsertionEffect:Lf,useLayoutEffect:Df,useMemo:Ff,useReducer:ws,useRef:Of,useState:function(){return ws(Hr)},useDebugValue:El,useDeferredValue:function(e){var t=Oe();return zf(t,Y.memoizedState,e)},useTransition:function(){var e=ws(Hr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Cf,useId:$f,unstable_isNewReconciler:!1},Jg={readContext:Ae,useCallback:jf,useContext:Ae,useEffect:_l,useImperativeHandle:Uf,useInsertionEffect:Lf,useLayoutEffect:Df,useMemo:Ff,useReducer:_s,useRef:Of,useState:function(){return _s(Hr)},useDebugValue:El,useDeferredValue:function(e){var t=Oe();return Y===null?t.memoizedState=e:zf(t,Y.memoizedState,e)},useTransition:function(){var e=_s(Hr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Tf,useSyncExternalStore:Cf,useId:$f,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ha(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lo={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=Mt(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&($e(t,e,i,r),Di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=Mt(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&($e(t,e,i,r),Di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=Mt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lt(e,i,r),t!==null&&($e(t,e,r,n),Di(t,e,r))}};function Vu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,o):!0}function Hf(e,t,n){var r=!1,i=bt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=ve(t)?sn:le.current,r=t.contextTypes,o=(r=r!=null)?Vn(e,i):bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Lo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Lo.enqueueReplaceState(t,t.state,null)}function pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},hl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=ve(t)?sn:le.current,i.context=Vn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ha(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Lo.enqueueReplaceState(i,i.state,null),so(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=Tm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xg=typeof WeakMap=="function"?WeakMap:Map;function Wf(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fo||(fo=!0,Ta=r),ma(e,t)},n}function Kf(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ma(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ma(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fv.bind(null,e,t,n),t.then(e,e))}function Ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var Zg=mt.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?Ef(t,null,n,r):Wn(t,e.child,n,r)}function Qu(e,t,n,r,i){n=n.render;var o=t.ref;return jn(t,i),r=yl(e,t,n,r,o,i),n=wl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(B&&n&&sl(t),t.flags|=1,ue(e,t,r,i),t.child)}function qu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Nl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Gf(e,t,o,r,i)):(e=$i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(s,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function Gf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(jr(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,dt(e,t,i)}return ga(e,t,n,r,i)}function Qf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(On,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(On,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(On,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,F(On,_e),_e|=r;return ue(e,t,i,n),t.child}function qf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ga(e,t,n,r,i){var o=ve(n)?sn:le.current;return o=Vn(t,o),jn(t,i),n=yl(e,t,n,r,o,i),r=wl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(B&&r&&sl(t),t.flags|=1,ue(e,t,n,i),t.child)}function Yu(e,t,n,r,i){if(ve(n)){var o=!0;to(t)}else o=!1;if(jn(t,i),t.stateNode===null)ji(e,t),Hf(t,n,r),pa(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=ve(n)?sn:le.current,u=Vn(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hu(t,s,r,u),_t=!1;var p=t.memoizedState;s.state=p,so(t,r,s,i),l=t.memoizedState,a!==r||p!==l||ge.current||_t?(typeof f=="function"&&(ha(t,n,f,r),l=t.memoizedState),(a=_t||Vu(t,n,a,r,p,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,If(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ue(t.type,a),s.props=u,d=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ae(l):(l=ve(n)?sn:le.current,l=Vn(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Hu(t,s,r,l),_t=!1,p=t.memoizedState,s.state=p,so(t,r,s,i);var v=t.memoizedState;a!==d||p!==v||ge.current||_t?(typeof g=="function"&&(ha(t,n,g,r),v=t.memoizedState),(u=_t||Vu(t,n,u,r,p,v,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return va(e,t,n,r,o,i)}function va(e,t,n,r,i,o){qf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Mu(t,n,!1),dt(e,t,o);r=t.stateNode,Zg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Wn(t,e.child,null,o),t.child=Wn(t,null,a,o)):ue(e,t,a,o),t.memoizedState=r.state,i&&Mu(t,n,!0),t.child}function Yf(e){var t=e.stateNode;t.pendingContext?Du(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Du(e,t.context,!1),pl(e,t.containerInfo)}function Ju(e,t,n,r,i){return Hn(),ll(i),t.flags|=256,ue(e,t,n,r),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jf(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(V,i&1),e===null)return da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Uo(s,r,0,null),e=rn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wa(n),t.memoizedState=ya,e):Sl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ev(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ut(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ut(a,o):(o=rn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?wa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ya,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sl(e,t){return t=Uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&ll(r),Wn(t,e.child,null,n),e=Sl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ev(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Es(Error(E(422))),ki(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Uo({mode:"visible",children:r.children},i,0,null),o=rn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wn(t,e.child,null,s),t.child.memoizedState=wa(s),t.memoizedState=ya,o);if(!(t.mode&1))return ki(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=Es(o,r,void 0),ki(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),$e(r,e,i,-1))}return Rl(),r=Es(Error(E(421))),ki(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ee=Ot(i.nextSibling),Se=t,B=!0,Fe=null,e!==null&&(Pe[Re++]=nt,Pe[Re++]=rt,Pe[Re++]=an,nt=e.id,rt=e.overflow,an=t),t=Sl(t,r.children),t.flags|=4096,t)}function Xu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fa(e.return,t,n)}function Ss(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Xf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ue(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xu(e,n,t);else if(e.tag===19)Xu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ss(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ao(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ss(t,!0,n,null,o);break;case"together":Ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ji(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tv(e,t,n){switch(t.tag){case 3:Yf(t),Hn();break;case 5:kf(t);break;case 1:ve(t.type)&&to(t);break;case 4:pl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(io,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Jf(e,t,n):(F(V,V.current&1),e=dt(e,t,n),e!==null?e.sibling:null);F(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Qf(e,t,n)}return dt(e,t,n)}var Zf,_a,eh,th;Zf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_a=function(){};eh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(Qe.current);var o=null;switch(n){case"input":i=Bs(e,i),r=Bs(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=Ws(e,i),r=Ws(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}Gs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};th=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nv(e,t,n){var r=t.pendingProps;switch(al(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&eo(),se(t),null;case 3:return r=t.stateNode,Kn(),b(ge),b(le),gl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&(Ra(Fe),Fe=null))),_a(e,t),se(t),null;case 5:ml(t);var i=Zt(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)eh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return se(t),null}if(e=Zt(Qe.current),Si(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[$r]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<gr.length;i++)$(gr[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":au(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":uu(r,o),$("invalid",r)}Gs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,a,e),i=["children",""+a]):xr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":hi(r),lu(r,o,!0);break;case"textarea":hi(r),cu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[We]=t,e[$r]=r,Zf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Qs(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<gr.length;i++)$(gr[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":au(e,r),i=Bs(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),$("invalid",e);break;case"textarea":uu(e,r),i=Ws(e,r),$("invalid",e);break;default:i=r}Gs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Ad(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ar(e,l):typeof l=="number"&&Ar(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&$("scroll",e):l!=null&&Ka(e,o,l,s))}switch(n){case"input":hi(e),lu(e,r,!1);break;case"textarea":hi(e),cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)th(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Zt(Br.current),Zt(Qe.current),Si(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ei(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return se(t),null;case 13:if(b(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Ee!==null&&t.mode&1&&!(t.flags&128))wf(),Hn(),t.flags|=98560,o=!1;else if(o=Si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[We]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Fe!==null&&(Ra(Fe),Fe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?J===0&&(J=3):Rl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Kn(),_a(e,t),e===null&&Fr(t.stateNode.containerInfo),se(t),null;case 10:return dl(t.type._context),se(t),null;case 17:return ve(t.type)&&eo(),se(t),null;case 19:if(b(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)dr(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ao(e),s!==null){for(t.flags|=128,dr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Qn&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ao(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!B)return se(t),null}else 2*Q()-o.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=V.current,F(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Pl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function rv(e,t){switch(al(t),t.tag){case 1:return ve(t.type)&&eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),b(ge),b(le),gl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ml(t),null;case 13:if(b(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(V),null;case 4:return Kn(),null;case 10:return dl(t.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var Ti=!1,ae=!1,iv=typeof WeakSet=="function"?WeakSet:Set,T=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ea(e,t,n){try{n()}catch(r){K(e,t,r)}}var Zu=!1;function ov(e,t){if(ia=Yi,e=sf(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,d=e,p=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++f===r&&(l=s),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},Yi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,S=v.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ue(t.type,_),S);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=Zu,Zu=!1,v}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ea(t,n,o)}i=i.next}while(i!==r)}}function Do(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nh(e){var t=e.alternate;t!==null&&(e.alternate=null,nh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[$r],delete t[la],delete t[bg],delete t[Bg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rh(e){return e.tag===5||e.tag===3||e.tag===4}function ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}var ne=null,je=!1;function vt(e,t,n){for(n=n.child;n!==null;)ih(e,t,n),n=n.sibling}function ih(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Co,n)}catch{}switch(n.tag){case 5:ae||An(n,t);case 6:var r=ne,i=je;ne=null,vt(e,t,n),ne=r,je=i,ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?ms(e.parentNode,n):e.nodeType===1&&ms(e,n),Mr(e)):ms(ne,n.stateNode));break;case 4:r=ne,i=je,ne=n.stateNode.containerInfo,je=!0,vt(e,t,n),ne=r,je=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ea(n,t,s),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!ae&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,vt(e,t,n),ae=r):vt(e,t,n);break;default:vt(e,t,n)}}function tc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iv),t.forEach(function(r){var i=pv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,je=!1;break e;case 3:ne=a.stateNode.containerInfo,je=!0;break e;case 4:ne=a.stateNode.containerInfo,je=!0;break e}a=a.return}if(ne===null)throw Error(E(160));ih(o,s,i),ne=null,je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)oh(t,e),t=t.sibling}function oh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ve(e),r&4){try{Tr(3,e,e.return),Do(3,e)}catch(_){K(e,e.return,_)}try{Tr(5,e,e.return)}catch(_){K(e,e.return,_)}}break;case 1:Me(t,e),Ve(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(Me(t,e),Ve(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{Ar(i,"")}catch(_){K(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Cd(i,o),Qs(a,s);var u=Qs(a,o);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?Ad(i,d):f==="dangerouslySetInnerHTML"?Nd(i,d):f==="children"?Ar(i,d):Ka(i,f,d,u)}switch(a){case"input":Vs(i,o);break;case"textarea":Pd(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Ln(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[$r]=o}catch(_){K(e,e.return,_)}}break;case 6:if(Me(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){K(e,e.return,_)}}break;case 3:if(Me(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(_){K(e,e.return,_)}break;case 4:Me(t,e),Ve(e);break;case 13:Me(t,e),Ve(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tl=Q())),r&4&&tc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||f,Me(t,e),ae=u):Me(t,e),Ve(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(d=T=f;T!==null;){switch(p=T,g=p.child,p.tag){case 0:case 11:case 14:case 15:Tr(4,p,p.return);break;case 1:An(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(_){K(r,n,_)}}break;case 5:An(p,p.return);break;case 22:if(p.memoizedState!==null){rc(d);continue}}g!==null?(g.return=p,T=g):rc(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xd("display",s))}catch(_){K(e,e.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){K(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Me(t,e),Ve(e),r&4&&tc(e);break;case 21:break;default:Me(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ar(i,""),r.flags&=-33);var o=ec(e);ka(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ec(e);Ia(e,a,s);break;default:throw Error(E(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sv(e,t,n){T=e,sh(e)}function sh(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ti;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=Ti;var u=ae;if(Ti=s,(ae=l)&&!u)for(T=i;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?ic(i):l!==null?(l.return=s,T=l):ic(i);for(;o!==null;)T=o,sh(o),o=o.sibling;T=i,Ti=a,ae=u}nc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):nc(e)}}function nc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Do(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$u(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$u(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Mr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ae||t.flags&512&&Sa(t)}catch(p){K(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function rc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function ic(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Do(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{Sa(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{Sa(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var av=Math.ceil,co=mt.ReactCurrentDispatcher,Il=mt.ReactCurrentOwner,xe=mt.ReactCurrentBatchConfig,M=0,te=null,q=null,re=0,_e=0,On=Vt(0),J=0,Kr=null,un=0,Mo=0,kl=0,Cr=null,pe=null,Tl=0,Qn=1/0,Ze=null,fo=!1,Ta=null,Dt=null,Ci=!1,Pt=null,ho=0,Pr=0,Ca=null,Fi=-1,zi=0;function ce(){return M&6?Q():Fi!==-1?Fi:Fi=Q()}function Mt(e){return e.mode&1?M&2&&re!==0?re&-re:Hg.transition!==null?(zi===0&&(zi=Vd()),zi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Yd(e.type)),e):1}function $e(e,t,n,r){if(50<Pr)throw Pr=0,Ca=null,Error(E(185));ei(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Mo|=n),J===4&&St(e,re)),ye(e,r),n===1&&M===0&&!(t.mode&1)&&(Qn=Q()+500,Ao&&Ht()))}function ye(e,t){var n=e.callbackNode;Hm(e,t);var r=qi(e,e===te?re:0);if(r===0)n!==null&&hu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hu(n),t===1)e.tag===0?Vg(oc.bind(null,e)):gf(oc.bind(null,e)),zg(function(){!(M&6)&&Ht()}),n=null;else{switch(Hd(r)){case 1:n=Ja;break;case 4:n=bd;break;case 16:n=Qi;break;case 536870912:n=Bd;break;default:n=Qi}n=ph(n,ah.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ah(e,t){if(Fi=-1,zi=0,M&6)throw Error(E(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=qi(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=po(e,r);else{t=r;var i=M;M|=2;var o=uh();(te!==e||re!==t)&&(Ze=null,Qn=Q()+500,nn(e,t));do try{cv();break}catch(a){lh(e,a)}while(1);cl(),co.current=o,M=i,q!==null?t=0:(te=null,re=0,t=J)}if(t!==0){if(t===2&&(i=Zs(e),i!==0&&(r=i,t=Pa(e,i))),t===1)throw n=Kr,nn(e,0),St(e,r),ye(e,Q()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!lv(i)&&(t=po(e,r),t===2&&(o=Zs(e),o!==0&&(r=o,t=Pa(e,o))),t===1))throw n=Kr,nn(e,0),St(e,r),ye(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:qt(e,pe,Ze);break;case 3:if(St(e,r),(r&130023424)===r&&(t=Tl+500-Q(),10<t)){if(qi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=aa(qt.bind(null,e,pe,Ze),t);break}qt(e,pe,Ze);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ze(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*av(r/1960))-r,10<r){e.timeoutHandle=aa(qt.bind(null,e,pe,Ze),r);break}qt(e,pe,Ze);break;case 5:qt(e,pe,Ze);break;default:throw Error(E(329))}}}return ye(e,Q()),e.callbackNode===n?ah.bind(null,e):null}function Pa(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=po(e,t),e!==2&&(t=pe,pe=n,t!==null&&Ra(t)),e}function Ra(e){pe===null?pe=e:pe.push.apply(pe,e)}function lv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Be(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~kl,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function oc(e){if(M&6)throw Error(E(327));Fn();var t=qi(e,0);if(!(t&1))return ye(e,Q()),null;var n=po(e,t);if(e.tag!==0&&n===2){var r=Zs(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=Kr,nn(e,0),St(e,t),ye(e,Q()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,pe,Ze),ye(e,Q()),null}function Cl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Qn=Q()+500,Ao&&Ht())}}function cn(e){Pt!==null&&Pt.tag===0&&!(M&6)&&Fn();var t=M;M|=1;var n=xe.transition,r=U;try{if(xe.transition=null,U=1,e)return e()}finally{U=r,xe.transition=n,M=t,!(M&6)&&Ht()}}function Pl(){_e=On.current,b(On)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fg(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:Kn(),b(ge),b(le),gl();break;case 5:ml(r);break;case 4:Kn();break;case 13:b(V);break;case 19:b(V);break;case 10:dl(r.type._context);break;case 22:case 23:Pl()}n=n.return}if(te=e,q=e=Ut(e.current,null),re=_e=t,J=0,Kr=null,kl=Mo=un=0,pe=Cr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Xt=null}return e}function lh(e,t){do{var n=q;try{if(cl(),Mi.current=uo,lo){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lo=!1}if(ln=0,ee=Y=H=null,kr=!1,Vr=0,Il.current=null,n===null||n.return===null){J=1,Kr=t,q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Ku(s);if(g!==null){g.flags&=-257,Gu(g,s,a,o,t),g.mode&1&&Wu(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var _=new Set;_.add(l),t.updateQueue=_}else v.add(l);break e}else{if(!(t&1)){Wu(o,u,t),Rl();break e}l=Error(E(426))}}else if(B&&a.mode&1){var S=Ku(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Gu(S,s,a,o,t),ll(Gn(l,a));break e}}o=l=Gn(l,a),J!==4&&(J=2),Cr===null?Cr=[o]:Cr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Wf(o,l,t);zu(o,h);break e;case 1:a=l;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dt===null||!Dt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Kf(o,a,t);zu(o,w);break e}}o=o.return}while(o!==null)}dh(n)}catch(k){t=k,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function uh(){var e=co.current;return co.current=uo,e===null?uo:e}function Rl(){(J===0||J===3||J===2)&&(J=4),te===null||!(un&268435455)&&!(Mo&268435455)||St(te,re)}function po(e,t){var n=M;M|=2;var r=uh();(te!==e||re!==t)&&(Ze=null,nn(e,t));do try{uv();break}catch(i){lh(e,i)}while(1);if(cl(),M=n,co.current=r,q!==null)throw Error(E(261));return te=null,re=0,J}function uv(){for(;q!==null;)ch(q)}function cv(){for(;q!==null&&!Mm();)ch(q)}function ch(e){var t=hh(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?dh(e):q=t,Il.current=null}function dh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rv(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,q=null;return}}else if(n=nv(n,t,_e),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);J===0&&(J=5)}function qt(e,t,n){var r=U,i=xe.transition;try{xe.transition=null,U=1,dv(e,t,n,r)}finally{xe.transition=i,U=r}return null}function dv(e,t,n,r){do Fn();while(Pt!==null);if(M&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Wm(e,o),e===te&&(q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ci||(Ci=!0,ph(Qi,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=xe.transition,xe.transition=null;var s=U;U=1;var a=M;M|=4,Il.current=null,ov(e,n),oh(n,e),Ag(oa),Yi=!!ia,oa=ia=null,e.current=n,sv(n),Um(),M=a,U=s,xe.transition=o}else e.current=n;if(Ci&&(Ci=!1,Pt=e,ho=i),o=e.pendingLanes,o===0&&(Dt=null),zm(n.stateNode),ye(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fo)throw fo=!1,e=Ta,Ta=null,e;return ho&1&&e.tag!==0&&Fn(),o=e.pendingLanes,o&1?e===Ca?Pr++:(Pr=0,Ca=e):Pr=0,Ht(),null}function Fn(){if(Pt!==null){var e=Hd(ho),t=xe.transition,n=U;try{if(xe.transition=null,U=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,ho=0,M&6)throw Error(E(331));var i=M;for(M|=4,T=e.current;T!==null;){var o=T,s=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:Tr(8,f,o)}var d=f.child;if(d!==null)d.return=f,T=d;else for(;T!==null;){f=T;var p=f.sibling,g=f.return;if(nh(f),f===u){T=null;break}if(p!==null){p.return=g,T=p;break}T=g}}}var v=o.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}T=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,T=h;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){s=T;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,T=m;else e:for(s=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Do(9,a)}}catch(k){K(a,a.return,k)}if(a===s){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(M=i,Ht(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Co,e)}catch{}r=!0}return r}finally{U=n,xe.transition=t}}return!1}function sc(e,t,n){t=Gn(n,t),t=Wf(e,t,1),e=Lt(e,t,1),t=ce(),e!==null&&(ei(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Gn(n,e),e=Kf(t,e,1),t=Lt(t,e,1),e=ce(),t!==null&&(ei(t,1,e),ye(t,e));break}}t=t.return}}function fv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>Q()-Tl?nn(e,0):kl|=n),ye(e,t)}function fh(e,t){t===0&&(e.mode&1?(t=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):t=1);var n=ce();e=ct(e,t),e!==null&&(ei(e,t,n),ye(e,n))}function hv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fh(e,n)}function pv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),fh(e,n)}var hh;hh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,tv(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&vf(t,ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ji(e,t),e=t.pendingProps;var i=Vn(t,le.current);jn(t,n),i=yl(null,t,r,e,i,n);var o=wl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,to(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hl(t),i.updater=Lo,t.stateNode=i,i._reactInternals=t,pa(t,r,e,n),t=va(null,t,r,!0,o,n)):(t.tag=0,B&&o&&sl(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ji(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gv(r),e=Ue(r,e),i){case 0:t=ga(null,t,r,e,n);break e;case 1:t=Yu(null,t,r,e,n);break e;case 11:t=Qu(null,t,r,e,n);break e;case 14:t=qu(null,t,r,Ue(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),ga(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Yu(e,t,r,i,n);case 3:e:{if(Yf(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,If(e,t),so(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Gn(Error(E(423)),t),t=Ju(e,t,r,n,i);break e}else if(r!==i){i=Gn(Error(E(424)),t),t=Ju(e,t,r,n,i);break e}else for(Ee=Ot(t.stateNode.containerInfo.firstChild),Se=t,B=!0,Fe=null,n=Ef(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=dt(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return kf(t),e===null&&da(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,sa(r,i)?s=null:o!==null&&sa(r,o)&&(t.flags|=32),qf(e,t),ue(e,t,s,n),t.child;case 6:return e===null&&da(t),null;case 13:return Jf(e,t,n);case 4:return pl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Qu(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,F(io,r._currentValue),r._currentValue=s,o!==null)if(Be(o.value,s)){if(o.children===i.children&&!ge.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=at(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),fa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jn(t,n),i=Ae(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),qu(e,t,r,i,n);case 15:return Gf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),ji(e,t),t.tag=1,ve(r)?(e=!0,to(t)):e=!1,jn(t,n),Hf(t,r,i),pa(t,r,i,n),va(null,t,r,!0,e,n);case 19:return Xf(e,t,n);case 22:return Qf(e,t,n)}throw Error(E(156,t.tag))};function ph(e,t){return $d(e,t)}function mv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new mv(e,t,n,r)}function Nl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gv(e){if(typeof e=="function")return Nl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qa)return 11;if(e===qa)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $i(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Nl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return rn(n.children,i,o,t);case Ga:s=8,i|=8;break;case Fs:return e=Ne(12,n,t,i|2),e.elementType=Fs,e.lanes=o,e;case zs:return e=Ne(13,n,t,i),e.elementType=zs,e.lanes=o,e;case $s:return e=Ne(19,n,t,i),e.elementType=$s,e.lanes=o,e;case Id:return Uo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ed:s=10;break e;case Sd:s=9;break e;case Qa:s=11;break e;case qa:s=14;break e;case wt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function rn(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Uo(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Id,e.lanes=n,e.stateNode={isHidden:!1},e}function Is(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function ks(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=is(0),this.expirationTimes=is(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=is(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xl(e,t,n,r,i,o,s,a,l){return e=new vv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hl(o),e}function yv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mh(e){if(!e)return bt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ve(n))return mf(e,n,t)}return t}function gh(e,t,n,r,i,o,s,a,l){return e=xl(n,r,!0,e,i,o,s,a,l),e.context=mh(null),n=e.current,r=ce(),i=Mt(n),o=at(r,i),o.callback=t??null,Lt(n,o,i),e.current.lanes=i,ei(e,i,r),ye(e,r),e}function jo(e,t,n,r){var i=t.current,o=ce(),s=Mt(i);return n=mh(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(i,t,s),e!==null&&($e(e,i,s,o),Di(e,i,s)),s}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Al(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function wv(){return null}var vh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}Fo.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));jo(e,t,null,null)};Fo.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){jo(null,e,null,null)}),t[ut]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&qd(e)}};function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lc(){}function _v(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=mo(s);o.call(u)}}var s=gh(t,r,e,0,null,!1,!1,"",lc);return e._reactRootContainer=s,e[ut]=s.current,Fr(e.nodeType===8?e.parentNode:e),cn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=mo(l);a.call(u)}}var l=xl(e,0,!1,null,null,!1,!1,"",lc);return e._reactRootContainer=l,e[ut]=l.current,Fr(e.nodeType===8?e.parentNode:e),cn(function(){jo(t,l,n,r)}),l}function $o(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=mo(s);a.call(l)}}jo(t,s,e,i)}else s=_v(n,t,e,i,r);return mo(s)}Wd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mr(t.pendingLanes);n!==0&&(Xa(t,n|1),ye(t,Q()),!(M&6)&&(Qn=Q()+500,Ht()))}break;case 13:cn(function(){var r=ct(e,1);if(r!==null){var i=ce();$e(r,e,1,i)}}),Al(e,1)}};Za=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=ce();$e(t,e,134217728,n)}Al(e,134217728)}};Kd=function(e){if(e.tag===13){var t=Mt(e),n=ct(e,t);if(n!==null){var r=ce();$e(n,e,t,r)}Al(e,t)}};Gd=function(){return U};Qd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Ys=function(e,t,n){switch(t){case"input":if(Vs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xo(r);if(!i)throw Error(E(90));Td(r),Vs(r,i)}}}break;case"textarea":Pd(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Dd=Cl;Md=cn;var Ev={usingClientEntryPoint:!1,Events:[ni,Cn,xo,Od,Ld,Cl]},fr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sv={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fd(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Co=Pi.inject(Sv),Ge=Pi}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(t))throw Error(E(200));return yv(e,t,null,n)};Te.createRoot=function(e,t){if(!Ll(e))throw Error(E(299));var n=!1,r="",i=vh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xl(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,Fr(e.nodeType===8?e.parentNode:e),new Ol(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Fd(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return cn(e)};Te.hydrate=function(e,t,n){if(!zo(t))throw Error(E(200));return $o(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Ll(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=vh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=gh(t,null,e,1,n??null,i,!1,o,s),e[ut]=t.current,Fr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fo(t)};Te.render=function(e,t,n){if(!zo(t))throw Error(E(200));return $o(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!zo(e))throw Error(E(40));return e._reactRootContainer?(cn(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Te.unstable_batchedUpdates=Cl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return $o(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function yh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yh)}catch(e){console.error(e)}}yh(),vd.exports=Te;var Iv=vd.exports,uc=Iv;Us.createRoot=uc.createRoot,Us.hydrateRoot=uc.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gr.apply(this,arguments)}var Rt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rt||(Rt={}));const cc="popstate";function kv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Na("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_h(i)}return Cv(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tv(){return Math.random().toString(36).substr(2,8)}function dc(e,t){return{usr:e.state,key:e.key,idx:t}}function Na(e,t,n,r){return n===void 0&&(n=null),Gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zn(t):t,{state:n,key:t&&t.key||r||Tv()})}function _h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Cv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Rt.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(Gr({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function d(){a=Rt.Pop;let S=f(),h=S==null?null:S-u;u=S,l&&l({action:a,location:_.location,delta:h})}function p(S,h){a=Rt.Push;let c=Na(_.location,S,h);n&&n(c,S),u=f()+1;let m=dc(c,u),w=_.createHref(c);try{s.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}o&&l&&l({action:a,location:_.location,delta:1})}function g(S,h){a=Rt.Replace;let c=Na(_.location,S,h);n&&n(c,S),u=f();let m=dc(c,u),w=_.createHref(c);s.replaceState(m,"",w),o&&l&&l({action:a,location:_.location,delta:0})}function v(S){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof S=="string"?S:_h(S);return c=c.replace(/ $/,"%20"),X(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let _={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(cc,d),l=S,()=>{i.removeEventListener(cc,d),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let h=v(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(S){return s.go(S)}};return _}var fc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fc||(fc={}));function Pv(e,t,n){return n===void 0&&(n="/"),Rv(e,t,n,!1)}function Rv(e,t,n,r){let i=typeof t=="string"?Zn(t):t,o=Ih(i.pathname||"/",n);if(o==null)return null;let s=Eh(e);Nv(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=$v(o);a=Fv(s[l],u,r)}return a}function Eh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(X(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=on([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Eh(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Uv(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Sh(o.path))i(o,s,l)}),t}function Sh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Sh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Nv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:jv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xv=/^:[\w-]+$/,Av=3,Ov=2,Lv=1,Dv=10,Mv=-2,hc=e=>e==="*";function Uv(e,t){let n=e.split("/"),r=n.length;return n.some(hc)&&(r+=Mv),t&&(r+=Ov),n.filter(i=>!hc(i)).reduce((i,o)=>i+(xv.test(o)?Av:o===""?Lv:Dv),r)}function jv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Fv(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=pc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),p=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=pc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:on([o,d.pathname]),pathnameBase:Kv(on([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=on([o,d.pathnameBase]))}return s}function pc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:p,isOptional:g}=f;if(p==="*"){let _=a[d]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function zv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $v(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ih(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function bv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zn(e):e;return{pathname:n?n.startsWith("/")?n:Bv(n,t):t,search:Gv(r),hash:Qv(i)}}function Bv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ts(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hv(e,t){let n=Vv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zn(e):(i=Gr({},e),X(!i.pathname||!i.pathname.includes("?"),Ts("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),Ts("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),Ts("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=bv(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const on=e=>e.join("/").replace(/\/\/+/g,"/"),Kv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kh=["post","put","patch","delete"];new Set(kh);const Yv=["get",...kh];new Set(Yv);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qr.apply(this,arguments)}const Dl=I.createContext(null),Jv=I.createContext(null),bo=I.createContext(null),Bo=I.createContext(null),er=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Th=I.createContext(null);function Vo(){return I.useContext(Bo)!=null}function Ch(){return Vo()||X(!1),I.useContext(Bo).location}function Ph(e){I.useContext(bo).static||I.useLayoutEffect(e)}function Rh(){let{isDataRoute:e}=I.useContext(er);return e?cy():Xv()}function Xv(){Vo()||X(!1);let e=I.useContext(Dl),{basename:t,future:n,navigator:r}=I.useContext(bo),{matches:i}=I.useContext(er),{pathname:o}=Ch(),s=JSON.stringify(Hv(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return Ph(()=>{a.current=!0}),I.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Wv(u,JSON.parse(s),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:on([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,s,o,e])}function Zv(e,t){return ey(e,t)}function ey(e,t,n,r){Vo()||X(!1);let{navigator:i}=I.useContext(bo),{matches:o}=I.useContext(er),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Ch(),f;if(t){var d;let S=typeof t=="string"?Zn(t):t;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||X(!1),f=S}else f=u;let p=f.pathname||"/",g=p;if(l!=="/"){let S=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=Pv(e,{pathname:g}),_=oy(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:on([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:on([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&_?I.createElement(Bo.Provider,{value:{location:Qr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Rt.Pop}},_):_}function ty(){let e=uy(),t=qv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,o)}const ny=I.createElement(ty,null);class ry extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?I.createElement(er.Provider,{value:this.props.routeContext},I.createElement(Th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iy(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(Dl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(er.Provider,{value:t},r)}function oy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||X(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let d=s[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:p,errors:g}=n,v=d.route.loader&&p[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,d,p)=>{let g,v=!1,_=null,S=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||ny,l&&(u<0&&p===0?(dy("route-fallback",!1),v=!0,S=null):u===p&&(v=!0,S=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,p+1)),c=()=>{let m;return g?m=_:v?m=S:d.route.Component?m=I.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=f,I.createElement(iy,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?I.createElement(ry,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Nh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nh||{}),go=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(go||{});function sy(e){let t=I.useContext(Dl);return t||X(!1),t}function ay(e){let t=I.useContext(Jv);return t||X(!1),t}function ly(e){let t=I.useContext(er);return t||X(!1),t}function xh(e){let t=ly(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function uy(){var e;let t=I.useContext(Th),n=ay(go.UseRouteError),r=xh(go.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function cy(){let{router:e}=sy(Nh.UseNavigateStable),t=xh(go.UseNavigateStable),n=I.useRef(!1);return Ph(()=>{n.current=!0}),I.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Qr({fromRouteId:t},o)))},[e,t])}const mc={};function dy(e,t,n){!t&&!mc[e]&&(mc[e]=!0)}function _n(e){X(!1)}function fy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rt.Pop,navigator:o,static:s=!1,future:a}=e;Vo()&&X(!1);let l=t.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:o,static:s,future:Qr({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Zn(r));let{pathname:f="/",search:d="",hash:p="",state:g=null,key:v="default"}=r,_=I.useMemo(()=>{let S=Ih(f,l);return S==null?null:{location:{pathname:S,search:d,hash:p,state:g,key:v},navigationType:i}},[l,f,d,p,g,v,i]);return _==null?null:I.createElement(bo.Provider,{value:u},I.createElement(Bo.Provider,{children:n,value:_}))}function hy(e){let{children:t,location:n}=e;return Zv(xa(t),n)}new Promise(()=>{});function xa(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;let o=[...t,i];if(r.type===I.Fragment){n.push.apply(n,xa(r.props.children,o));return}r.type!==_n&&X(!1),!r.props.index||!r.props.children||X(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=xa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const py="6";try{window.__reactRouterVersion=py}catch{}const my="startTransition",gc=fm[my];function gy(e){let{basename:t,children:n,future:r,window:i}=e,o=I.useRef();o.current==null&&(o.current=kv({window:i,v5Compat:!0}));let s=o.current,[a,l]=I.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=I.useCallback(d=>{u&&gc?gc(()=>l(d)):l(d)},[l,u]);return I.useLayoutEffect(()=>s.listen(f),[s,f]),I.createElement(fy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var vc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vc||(vc={}));var yc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yc||(yc={}));const vy=({filters:e,onFilterChange:t})=>y.jsxs("aside",{className:"sidebar",children:[y.jsx("h3",{children:"Filters"}),y.jsx("ul",{children:e.map((n,r)=>y.jsx("li",{children:y.jsxs("label",{children:[y.jsx("input",{type:"checkbox",value:n.value,onChange:()=>t(n.value)}),n.label]})},r))})]});function yy(){const e=Rh();return y.jsxs("header",{className:"home-header",children:[y.jsx("div",{className:"logo",onClick:()=>e("/"),children:"Research Finder"}),y.jsx("input",{type:"text",placeholder:"Search research postings...",className:"search-bar"}),y.jsx("div",{className:"header-buttons",children:y.jsx("button",{className:"btn sign-in-button",onClick:()=>e("/signin"),children:"Sign In"})})]})}function wy(){const[e,t]=I.useState([]),[n,r]=I.useState([]),[i,o]=I.useState([]),[s,a]=I.useState(!0),[l,u]=I.useState(null),f=[{label:"Department",value:"department"},{label:"Research Type",value:"researchType"},{label:"Location",value:"location"}];I.useEffect(()=>{(async()=>{a(!0),u(null);try{const g=await fetch("https://research-finder-server.vercel.app/posts");if(!g.ok)throw new Error(`Error fetching posts: ${g.statusText}`);const v=await g.json();t(v),r(v)}catch(g){console.error("Error fetching posts:",g),u("Failed to load research opportunities.")}finally{a(!1)}})()},[]);const d=p=>{const g=i.includes(p)?i.filter(v=>v!==p):[...i,p];if(o(g),g.length===0)r(e);else{const v=e.filter(_=>g.every(S=>_.body.toLowerCase().includes(S.toLowerCase())));r(v)}};return y.jsxs("div",{className:"home-container",children:[y.jsx(yy,{}),y.jsxs("div",{className:"main-content",children:[y.jsx(vy,{filters:f,selectedFilters:i,onFilterChange:d}),y.jsxs("div",{className:"postings-container",children:[y.jsx("h2",{children:"Research Opportunities"}),s&&y.jsx("p",{children:"Loading research opportunities..."}),l&&y.jsx("p",{className:"error",children:l}),!s&&!l&&n.length===0&&y.jsx("p",{children:"No research opportunities match your filters."}),!s&&!l&&n.length>0&&n.map(p=>y.jsxs("div",{className:"post-card",children:[y.jsx("h3",{children:p.title}),y.jsx("p",{children:p.body}),y.jsxs("p",{children:[y.jsx("strong",{children:"Compensation:"})," ",p.compensation||"Not specified"]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Organization:"})," ",p.organization||"Unknown"]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Researcher:"})," ",p.researcherName||"Unknown"]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Work Type:"})," ",p.workType||"Not specified"]})]},p.id))]})]}),y.jsxs("footer",{className:"home-footer",children:[y.jsx("p",{children:"© 2024 Research Finder. All rights reserved."}),y.jsx("a",{href:"/terms",children:"Terms of Service"}),y.jsx("a",{href:"/help",children:"Help"})]})]})}const _y=()=>{const[e,t]=I.useState([]),[n,r]=I.useState(!0),[i,o]=I.useState(null);return I.useEffect(()=>{(async()=>{r(!0),o(null);try{const a=await fetch("http://localhost:3000/inbox");if(!a.ok)throw new Error("Failed to fetch messages");const l=await a.json();t(l)}catch(a){console.error("Error fetching messages:",a),o("Failed to load inbox. Please try again later.")}finally{r(!1)}})()},[]),y.jsxs("div",{className:"user-page",children:[y.jsx("h1",{children:"Welcome, [User Name]"}),y.jsxs("section",{className:"user-info",children:[y.jsx("h2",{children:"Your Information"}),y.jsx("p",{children:"Email: user@example.com"}),y.jsx("p",{children:"Member since: January 2024"})]}),y.jsxs("section",{className:"user-inbox",children:[y.jsx("h2",{children:"Inbox"}),n&&y.jsx("p",{children:"Loading messages..."}),i&&y.jsx("p",{className:"error",children:i}),!n&&!i&&e.length===0&&y.jsx("p",{children:"Your inbox is empty."}),!n&&!i&&e.length>0&&y.jsx("ul",{children:e.map(s=>y.jsxs("li",{className:"inbox-message",children:[y.jsx("strong",{children:s.sender}),": ",s.text,y.jsx("p",{className:"timestamp",children:s.timestamp})]},s.id))})]})]})};/**
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
 */const Ah=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ey=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=o>>2,d=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(p=64)),r.push(n[f],n[d],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ah(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ey(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw new Sy;const p=o<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Sy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iy=function(e){const t=Ah(e);return Oh.encodeByteArray(t,!0)},Lh=function(e){return Iy(e).replace(/\./g,"")},Dh=function(e){try{return Oh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ky(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ty=()=>ky().__FIREBASE_DEFAULTS__,Cy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Py=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Dh(e[1]);return t&&JSON.parse(t)},Ml=()=>{try{return Ty()||Cy()||Py()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ry=e=>{var t,n;return(n=(t=Ml())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Mh=()=>{var e;return(e=Ml())===null||e===void 0?void 0:e.config},Uh=e=>{var t;return(t=Ml())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Ny{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Ay(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Oy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ly(){const e=de();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Fh(){try{return typeof indexedDB=="object"}catch{return!1}}function zh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Dy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const My="FirebaseError";class Xe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=My,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Uy(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Xe(i,a,r)}}function Uy(e,t){return e.replace(jy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const jy=/\{\$([^}]+)}/g;function Fy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(wc(o)&&wc(s)){if(!qr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wc(e){return e!==null&&typeof e=="object"}/**
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
 */function ii(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function vr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function yr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function zy(e,t){const n=new $y(e,t);return n.subscribe.bind(n)}class $y{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");by(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Cs),i.error===void 0&&(i.error=Cs),i.complete===void 0&&(i.complete=Cs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function by(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Cs(){}/**
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
 */const By=1e3,Vy=2,Hy=4*60*60*1e3,Wy=.5;function _c(e,t=By,n=Vy){const r=t*Math.pow(n,e),i=Math.round(Wy*r*(Math.random()-.5)*2);return Math.min(Hy,r+i)}/**
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
 */function gt(e){return e&&e._delegate?e._delegate:e}class Je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class Ky{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ny;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qy(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gy(e){return e===Yt?void 0:e}function Qy(e){return e.instantiationMode==="EAGER"}/**
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
 */class qy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ky(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(j||(j={}));const Yy={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Jy=j.INFO,Xy={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Zy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Xy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ul{constructor(t){this.name=t,this._logLevel=Jy,this._logHandler=Zy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const e0=(e,t)=>t.some(n=>e instanceof n);let Ec,Sc;function t0(){return Ec||(Ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n0(){return Sc||(Sc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $h=new WeakMap,Aa=new WeakMap,bh=new WeakMap,Ps=new WeakMap,jl=new WeakMap;function r0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(jt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&$h.set(n,e)}).catch(()=>{}),jl.set(t,e),t}function i0(e){if(Aa.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Aa.set(e,t)}let Oa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Aa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function o0(e){Oa=e(Oa)}function s0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Rs(this),t,...n);return bh.set(r,t.sort?t.sort():[t]),jt(r)}:n0().includes(e)?function(...t){return e.apply(Rs(this),t),jt($h.get(this))}:function(...t){return jt(e.apply(Rs(this),t))}}function a0(e){return typeof e=="function"?s0(e):(e instanceof IDBTransaction&&i0(e),e0(e,t0())?new Proxy(e,Oa):e)}function jt(e){if(e instanceof IDBRequest)return r0(e);if(Ps.has(e))return Ps.get(e);const t=a0(e);return t!==e&&(Ps.set(e,t),jl.set(t,e)),t}const Rs=e=>jl.get(e);function Bh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=jt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(jt(s.result),l.oldVersion,l.newVersion,jt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const l0=["get","getKey","getAll","getAllKeys","count"],u0=["put","add","delete","clear"],Ns=new Map;function Ic(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ns.get(t))return Ns.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=u0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||l0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ns.set(t,o),o}o0(e=>({...e,get:(t,n,r)=>Ic(t,n)||e.get(t,n,r),has:(t,n)=>!!Ic(t,n)||e.has(t,n)}));/**
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
 */class c0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(d0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function d0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const La="@firebase/app",kc="0.10.13";/**
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
 */const ft=new Ul("@firebase/app"),f0="@firebase/app-compat",h0="@firebase/analytics-compat",p0="@firebase/analytics",m0="@firebase/app-check-compat",g0="@firebase/app-check",v0="@firebase/auth",y0="@firebase/auth-compat",w0="@firebase/database",_0="@firebase/data-connect",E0="@firebase/database-compat",S0="@firebase/functions",I0="@firebase/functions-compat",k0="@firebase/installations",T0="@firebase/installations-compat",C0="@firebase/messaging",P0="@firebase/messaging-compat",R0="@firebase/performance",N0="@firebase/performance-compat",x0="@firebase/remote-config",A0="@firebase/remote-config-compat",O0="@firebase/storage",L0="@firebase/storage-compat",D0="@firebase/firestore",M0="@firebase/vertexai-preview",U0="@firebase/firestore-compat",j0="firebase",F0="10.14.1";/**
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
 */const Da="[DEFAULT]",z0={[La]:"fire-core",[f0]:"fire-core-compat",[p0]:"fire-analytics",[h0]:"fire-analytics-compat",[g0]:"fire-app-check",[m0]:"fire-app-check-compat",[v0]:"fire-auth",[y0]:"fire-auth-compat",[w0]:"fire-rtdb",[_0]:"fire-data-connect",[E0]:"fire-rtdb-compat",[S0]:"fire-fn",[I0]:"fire-fn-compat",[k0]:"fire-iid",[T0]:"fire-iid-compat",[C0]:"fire-fcm",[P0]:"fire-fcm-compat",[R0]:"fire-perf",[N0]:"fire-perf-compat",[x0]:"fire-rc",[A0]:"fire-rc-compat",[O0]:"fire-gcs",[L0]:"fire-gcs-compat",[D0]:"fire-fst",[U0]:"fire-fst-compat",[M0]:"fire-vertex","fire-js":"fire-js",[j0]:"fire-js-all"};/**
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
 */const vo=new Map,$0=new Map,Ma=new Map;function Tc(e,t){try{e.container.addComponent(t)}catch(n){ft.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ht(e){const t=e.name;if(Ma.has(t))return ft.debug(`There were multiple attempts to register component ${t}.`),!1;Ma.set(t,e);for(const n of vo.values())Tc(n,e);for(const n of $0.values())Tc(n,e);return!0}function tr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ke(e){return e.settings!==void 0}/**
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
 */const b0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new gn("app","Firebase",b0);/**
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
 */class B0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const oi=F0;function Vh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Da,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=Mh()),!n)throw Ft.create("no-options");const o=vo.get(i);if(o){if(qr(n,o.options)&&qr(r,o.config))return o;throw Ft.create("duplicate-app",{appName:i})}const s=new qy(i);for(const l of Ma.values())s.addComponent(l);const a=new B0(n,r,s);return vo.set(i,a),a}function Hh(e=Da){const t=vo.get(e);if(!t&&e===Da&&Mh())return Vh();if(!t)throw Ft.create("no-app",{appName:e});return t}function qe(e,t,n){var r;let i=(r=z0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ft.warn(a.join(" "));return}ht(new Je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const V0="firebase-heartbeat-database",H0=1,Yr="firebase-heartbeat-store";let xs=null;function Wh(){return xs||(xs=Bh(V0,H0,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Yr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),xs}async function W0(e){try{const n=(await Wh()).transaction(Yr),r=await n.objectStore(Yr).get(Kh(e));return await n.done,r}catch(t){if(t instanceof Xe)ft.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ft.warn(n.message)}}}async function Cc(e,t){try{const r=(await Wh()).transaction(Yr,"readwrite");await r.objectStore(Yr).put(t,Kh(e)),await r.done}catch(n){if(n instanceof Xe)ft.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ft.warn(r.message)}}}function Kh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const K0=1024,G0=30*24*60*60*1e3;class Q0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Y0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Pc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=G0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ft.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pc(),{heartbeatsToSend:r,unsentEntries:i}=q0(this._heartbeatsCache.heartbeats),o=Lh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return ft.warn(n),""}}}function Pc(){return new Date().toISOString().substring(0,10)}function q0(e,t=K0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Rc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Y0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fh()?zh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await W0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Rc(e){return Lh(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function J0(e){ht(new Je("platform-logger",t=>new c0(t),"PRIVATE")),ht(new Je("heartbeat",t=>new Q0(t),"PRIVATE")),qe(La,kc,e),qe(La,kc,"esm2017"),qe("fire-js","")}J0("");var X0="firebase",Z0="10.14.1";/**
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
 */qe(X0,Z0,"app");const Gh="@firebase/installations",Fl="0.6.9";/**
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
 */const Qh=1e4,qh=`w:${Fl}`,Yh="FIS_v2",ew="https://firebaseinstallations.googleapis.com/v1",tw=60*60*1e3,nw="installations",rw="Installations";/**
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
 */const iw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},dn=new gn(nw,rw,iw);function Jh(e){return e instanceof Xe&&e.code.includes("request-failed")}/**
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
 */function Xh({projectId:e}){return`${ew}/projects/${e}/installations`}function Zh(e){return{token:e.token,requestStatus:2,expiresIn:sw(e.expiresIn),creationTime:Date.now()}}async function ep(e,t){const r=(await t.json()).error;return dn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ow(e,{refreshToken:t}){const n=tp(e);return n.append("Authorization",aw(t)),n}async function np(e){const t=await e();return t.status>=500&&t.status<600?e():t}function sw(e){return Number(e.replace("s","000"))}function aw(e){return`${Yh} ${e}`}/**
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
 */async function lw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Xh(e),i=tp(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Yh,appId:e.appId,sdkVersion:qh},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await np(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Zh(u.authToken)}}else throw await ep("Create Installation",l)}/**
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
 */function rp(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function uw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const cw=/^[cdef][\w-]{21}$/,Ua="";function dw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=fw(e);return cw.test(n)?n:Ua}catch{return Ua}}function fw(e){return uw(e).substr(0,22)}/**
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
 */function Ho(e){return`${e.appName}!${e.appId}`}/**
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
 */const ip=new Map;function op(e,t){const n=Ho(e);sp(n,t),hw(n,t)}function sp(e,t){const n=ip.get(e);if(n)for(const r of n)r(t)}function hw(e,t){const n=pw();n&&n.postMessage({key:e,fid:t}),mw()}let en=null;function pw(){return!en&&"BroadcastChannel"in self&&(en=new BroadcastChannel("[Firebase] FID Change"),en.onmessage=e=>{sp(e.data.key,e.data.fid)}),en}function mw(){ip.size===0&&en&&(en.close(),en=null)}/**
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
 */const gw="firebase-installations-database",vw=1,fn="firebase-installations-store";let As=null;function zl(){return As||(As=Bh(gw,vw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fn)}}})),As}async function yo(e,t){const n=Ho(e),i=(await zl()).transaction(fn,"readwrite"),o=i.objectStore(fn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&op(e,t.fid),t}async function ap(e){const t=Ho(e),r=(await zl()).transaction(fn,"readwrite");await r.objectStore(fn).delete(t),await r.done}async function Wo(e,t){const n=Ho(e),i=(await zl()).transaction(fn,"readwrite"),o=i.objectStore(fn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&op(e,a.fid),a}/**
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
 */async function $l(e){let t;const n=await Wo(e.appConfig,r=>{const i=yw(r),o=ww(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Ua?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yw(e){const t=e||{fid:dw(),registrationStatus:0};return lp(t)}function ww(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(dn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=_w(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ew(e)}:{installationEntry:t}}async function _w(e,t){try{const n=await lw(e,t);return yo(e.appConfig,n)}catch(n){throw Jh(n)&&n.customData.serverCode===409?await ap(e.appConfig):await yo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ew(e){let t=await Nc(e.appConfig);for(;t.registrationStatus===1;)await rp(100),t=await Nc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await $l(e);return r||n}return t}function Nc(e){return Wo(e,t=>{if(!t)throw dn.create("installation-not-found");return lp(t)})}function lp(e){return Sw(e)?{fid:e.fid,registrationStatus:0}:e}function Sw(e){return e.registrationStatus===1&&e.registrationTime+Qh<Date.now()}/**
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
 */async function Iw({appConfig:e,heartbeatServiceProvider:t},n){const r=kw(e,n),i=ow(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:qh,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await np(()=>fetch(r,a));if(l.ok){const u=await l.json();return Zh(u)}else throw await ep("Generate Auth Token",l)}function kw(e,{fid:t}){return`${Xh(e)}/${t}/authTokens:generate`}/**
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
 */async function bl(e,t=!1){let n;const r=await Wo(e.appConfig,o=>{if(!up(o))throw dn.create("not-registered");const s=o.authToken;if(!t&&Pw(s))return o;if(s.requestStatus===1)return n=Tw(e,t),o;{if(!navigator.onLine)throw dn.create("app-offline");const a=Nw(o);return n=Cw(e,a),a}});return n?await n:r.authToken}async function Tw(e,t){let n=await xc(e.appConfig);for(;n.authToken.requestStatus===1;)await rp(100),n=await xc(e.appConfig);const r=n.authToken;return r.requestStatus===0?bl(e,t):r}function xc(e){return Wo(e,t=>{if(!up(t))throw dn.create("not-registered");const n=t.authToken;return xw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Cw(e,t){try{const n=await Iw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await yo(e.appConfig,r),n}catch(n){if(Jh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ap(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await yo(e.appConfig,r)}throw n}}function up(e){return e!==void 0&&e.registrationStatus===2}function Pw(e){return e.requestStatus===2&&!Rw(e)}function Rw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tw}function Nw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function xw(e){return e.requestStatus===1&&e.requestTime+Qh<Date.now()}/**
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
 */async function Aw(e){const t=e,{installationEntry:n,registrationPromise:r}=await $l(t);return r?r.catch(console.error):bl(t).catch(console.error),n.fid}/**
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
 */async function Ow(e,t=!1){const n=e;return await Lw(n),(await bl(n,t)).token}async function Lw(e){const{registrationPromise:t}=await $l(e);t&&await t}/**
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
 */function Dw(e){if(!e||!e.options)throw Os("App Configuration");if(!e.name)throw Os("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Os(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Os(e){return dn.create("missing-app-config-values",{valueName:e})}/**
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
 */const cp="installations",Mw="installations-internal",Uw=e=>{const t=e.getProvider("app").getImmediate(),n=Dw(t),r=tr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jw=e=>{const t=e.getProvider("app").getImmediate(),n=tr(t,cp).getImmediate();return{getId:()=>Aw(n),getToken:i=>Ow(n,i)}};function Fw(){ht(new Je(cp,Uw,"PUBLIC")),ht(new Je(Mw,jw,"PRIVATE"))}Fw();qe(Gh,Fl);qe(Gh,Fl,"esm2017");/**
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
 */const wo="analytics",zw="firebase_id",$w="origin",bw=60*1e3,Bw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bl="https://www.googletagmanager.com/gtag/js";/**
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
 */const we=new Ul("@firebase/analytics");/**
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
 */const Vw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ie=new gn("analytics","Analytics",Vw);/**
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
 */function Hw(e){if(!e.startsWith(Bl)){const t=Ie.create("invalid-gtag-resource",{gtagURL:e});return we.warn(t.message),""}return e}function dp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Ww(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Kw(e,t){const n=Ww("firebase-js-sdk-policy",{createScriptURL:Hw}),r=document.createElement("script"),i=`${Bl}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Gw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Qw(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await dp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){we.error(a)}e("config",i,o)}async function qw(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await dp(n);for(const l of s){const u=a.find(d=>d.measurementId===l),f=u&&t[u.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){we.error(o)}}function Yw(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await qw(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await Qw(e,t,n,r,a,l)}else if(o==="consent"){const[a,l]=s;e("consent",a,l)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){we.error(a)}}return i}function Jw(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Yw(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Xw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Bl)&&n.src.includes(e))return n;return null}/**
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
 */const Zw=30,e_=1e3;class t_{constructor(t={},n=e_){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const fp=new t_;function n_(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function r_(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:n_(r)},o=Bw.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ie.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function i_(e,t=fp,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ie.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ie.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new a_;return setTimeout(async()=>{a.abort()},n!==void 0?n:bw),hp({appId:r,apiKey:i,measurementId:o},s,a,t)}async function hp(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=fp){var o;const{appId:s,measurementId:a}=e;try{await o_(r,t)}catch(l){if(a)return we.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await r_(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!s_(u)){if(i.deleteThrottleMetadata(s),a)return we.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?_c(n,i.intervalMillis,Zw):_c(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,d),we.debug(`Calling attemptFetch again in ${f} millis`),hp(e,d,r,i)}}function o_(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ie.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function s_(e){if(!(e instanceof Xe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class a_{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function l_(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function u_(){if(Fh())try{await zh()}catch(e){return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function c_(e,t,n,r,i,o,s){var a;const l=i_(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&we.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>we.error(g)),t.push(l);const u=u_().then(g=>{if(g)return r.getId()}),[f,d]=await Promise.all([l,u]);Xw(o)||Kw(o,f.measurementId),i("js",new Date);const p=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return p[$w]="firebase",p.update=!0,d!=null&&(p[zw]=d),i("config",f.measurementId,p),f.measurementId}/**
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
 */class d_{constructor(t){this.app=t}_delete(){return delete Rr[this.app.options.appId],Promise.resolve()}}let Rr={},Ac=[];const Oc={};let Ls="dataLayer",f_="gtag",Lc,pp,Dc=!1;function h_(){const e=[];if(jh()&&e.push("This is a browser extension environment."),Dy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ie.create("invalid-analytics-context",{errorInfo:t});we.warn(n.message)}}function p_(e,t,n){h_();const r=e.options.appId;if(!r)throw Ie.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)we.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ie.create("no-api-key");if(Rr[r]!=null)throw Ie.create("already-exists",{id:r});if(!Dc){Gw(Ls);const{wrappedGtag:o,gtagCore:s}=Jw(Rr,Ac,Oc,Ls,f_);pp=o,Lc=s,Dc=!0}return Rr[r]=c_(e,Ac,Oc,t,Lc,Ls,n),new d_(e)}function m_(e=Hh()){e=gt(e);const t=tr(e,wo);return t.isInitialized()?t.getImmediate():g_(e)}function g_(e,t={}){const n=tr(e,wo);if(n.isInitialized()){const i=n.getImmediate();if(qr(t,n.getOptions()))return i;throw Ie.create("already-initialized")}return n.initialize({options:t})}function v_(e,t,n,r){e=gt(e),l_(pp,Rr[e.app.options.appId],t,n,r).catch(i=>we.error(i))}const Mc="@firebase/analytics",Uc="0.10.8";function y_(){ht(new Je(wo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return p_(r,i,n)},"PUBLIC")),ht(new Je("analytics-internal",e,"PRIVATE")),qe(Mc,Uc),qe(Mc,Uc,"esm2017");function e(t){try{const n=t.getProvider(wo).getImmediate();return{logEvent:(r,i,o)=>v_(n,r,i,o)}}catch(n){throw Ie.create("interop-component-reg-failed",{reason:n})}}}y_();function Vl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function mp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w_=mp,gp=new gn("auth","Firebase",mp());/**
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
 */const _o=new Ul("@firebase/auth");function __(e,...t){_o.logLevel<=j.WARN&&_o.warn(`Auth (${oi}): ${e}`,...t)}function bi(e,...t){_o.logLevel<=j.ERROR&&_o.error(`Auth (${oi}): ${e}`,...t)}/**
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
 */function Le(e,...t){throw Wl(e,...t)}function be(e,...t){return Wl(e,...t)}function Hl(e,t,n){const r=Object.assign(Object.assign({},w_()),{[t]:n});return new gn("auth","Firebase",r).create(t,{appName:e.name})}function zt(e){return Hl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function E_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Le(e,"argument-error"),Hl(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return gp.create(e,...t)}function x(e,t,...n){if(!e)throw Wl(t,...n)}function it(e){const t="INTERNAL ASSERTION FAILED: "+e;throw bi(t),new Error(t)}function pt(e,t){e||it(t)}/**
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
 */function ja(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function S_(){return jc()==="http:"||jc()==="https:"}function jc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function I_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S_()||jh()||"connection"in navigator)?navigator.onLine:!0}function k_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class si{constructor(t,n){this.shortDelay=t,this.longDelay=n,pt(n>t,"Short delay should be less than long delay!"),this.isMobile=xy()||Oy()}get(){return I_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kl(e,t){pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class vp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const C_=new si(3e4,6e4);function vn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wt(e,t,n,r,i={}){return yp(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=ii(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},o);return Ay()||(u.referrerPolicy="no-referrer"),vp.fetch()(wp(e,e.config.apiHost,n,a),u)})}async function yp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},T_),t);try{const i=new R_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ri(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ri(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ri(e,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Hl(e,f,u);Le(e,f)}}catch(i){if(i instanceof Xe)throw i;Le(e,"network-request-failed",{message:String(i)})}}async function Ko(e,t,n,r,i={}){const o=await Wt(e,t,n,r,i);return"mfaPendingCredential"in o&&Le(e,"multi-factor-auth-required",{_serverResponse:o}),o}function wp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Kl(e.config,i):`${e.config.apiScheme}://${i}`}function P_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(be(this.auth,"network-request-failed")),C_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ri(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=be(e,t,r);return i.customData._tokenResponse=n,i}function Fc(e){return e!==void 0&&e.enterprise!==void 0}class N_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return P_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function x_(e,t){return Wt(e,"GET","/v2/recaptchaConfig",vn(e,t))}/**
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
 */async function A_(e,t){return Wt(e,"POST","/v1/accounts:delete",t)}async function _p(e,t){return Wt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Nr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function O_(e,t=!1){const n=gt(e),r=await n.getIdToken(t),i=Gl(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Nr(Ds(i.auth_time)),issuedAtTime:Nr(Ds(i.iat)),expirationTime:Nr(Ds(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ds(e){return Number(e)*1e3}function Gl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dh(n);return i?JSON.parse(i):(bi("Failed to decode base64 JWT payload"),null)}catch(i){return bi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zc(e){const t=Gl(e);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Jr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Xe&&L_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function L_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class D_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fa{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Jr(e,_p(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Ep(o.providerUserInfo):[],a=U_(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Fa(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,d)}async function M_(e){const t=gt(e);await Eo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function U_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ep(e){return e.map(t=>{var{providerId:n}=t,r=Vl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function j_(e,t){const n=await yp(e,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=wp(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function F_(e,t){return Wt(e,"POST","/v2/accounts:revokeToken",vn(e,t))}/**
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
 */class zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):zc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){x(t.length!==0,"internal-error");const n=zc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await j_(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new zn;return r&&(x(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(x(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new zn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function yt(e,t){x(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ot{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Vl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Fa(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,t));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return O_(this,t)}reload(){return M_(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ot(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(zt(this.auth));const t=await this.getIdToken();return await Jr(this,A_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:m,emailVerified:w,isAnonymous:k,providerData:P,stsTokenManager:R}=n;x(m&&R,t,"internal-error");const N=zn.fromJSON(this.name,R);x(typeof m=="string",t,"internal-error"),yt(d,t.name),yt(p,t.name),x(typeof w=="boolean",t,"internal-error"),x(typeof k=="boolean",t,"internal-error"),yt(g,t.name),yt(v,t.name),yt(_,t.name),yt(S,t.name),yt(h,t.name),yt(c,t.name);const z=new ot({uid:m,auth:t,email:p,emailVerified:w,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:N,createdAt:h,lastLoginAt:c});return P&&Array.isArray(P)&&(z.providerData=P.map(L=>Object.assign({},L))),S&&(z._redirectEventId=S),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new zn;i.updateFromServerResponse(n);const o=new ot({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Eo(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];x(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Ep(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new zn;a.updateFromIdToken(r);const l=new ot({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Fa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
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
 */const $c=new Map;function st(e){pt(e instanceof Function,"Expected a class definition");let t=$c.get(e);return t?(pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$c.set(e,t),t)}/**
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
 */class Sp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Sp.type="NONE";const bc=Sp;/**
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
 */function Bi(e,t,n){return`firebase:${e}:${t}:${n}`}class $n{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Bi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Bi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ot._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new $n(st(bc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||st(bc);const s=Bi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const d=ot._fromJSON(t,f);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new $n(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new $n(o,t,r))}}/**
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
 */function Bc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Cp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ip(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Rp(t))return"Blackberry";if(Np(t))return"Webos";if(kp(t))return"Safari";if((t.includes("chrome/")||Tp(t))&&!t.includes("edge/"))return"Chrome";if(Pp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ip(e=de()){return/firefox\//i.test(e)}function kp(e=de()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Tp(e=de()){return/crios\//i.test(e)}function Cp(e=de()){return/iemobile/i.test(e)}function Pp(e=de()){return/android/i.test(e)}function Rp(e=de()){return/blackberry/i.test(e)}function Np(e=de()){return/webos/i.test(e)}function Ql(e=de()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function z_(e=de()){var t;return Ql(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function $_(){return Ly()&&document.documentMode===10}function xp(e=de()){return Ql(e)||Pp(e)||Np(e)||Rp(e)||/windows phone/i.test(e)||Cp(e)}/**
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
 */function Ap(e,t=[]){let n;switch(e){case"Browser":n=Bc(de());break;case"Worker":n=`${Bc(de())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${r}`}/**
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
 */class b_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function B_(e,t={}){return Wt(e,"GET","/v2/passwordPolicy",vn(e,t))}/**
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
 */const V_=6;class H_{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:V_,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class W_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vc(this),this.idTokenSubscription=new Vc(this),this.beforeStateQueue=new b_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $n.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await _p(this,{idToken:t}),r=await ot._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ke(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Eo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=k_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ke(this.app))return Promise.reject(zt(this));const n=t?gt(t):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ke(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await B_(this),n=new H_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new gn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await F_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&st(t)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ap(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&__(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yn(e){return gt(e)}class Vc{constructor(t){this.auth=t,this.observer=null,this.addObserver=zy(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K_(e){Go=e}function Op(e){return Go.loadJS(e)}function G_(){return Go.recaptchaEnterpriseScript}function Q_(){return Go.gapiScript}function q_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Y_="recaptcha-enterprise",J_="NO_RECAPTCHA";class X_{constructor(t){this.type=Y_,this.auth=yn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{x_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new N_(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Fc(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(J_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Fc(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=G_();l.length!==0&&(l+=a),Op(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Hc(e,t,n,r=!1){const i=new X_(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Wc(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Hc(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Hc(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
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
 */function Z_(e,t){const n=tr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(qr(o,t??{}))return i;Le(i,"already-initialized")}return n.initialize({options:t})}function eE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function tE(e,t,n){const r=yn(e);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Lp(t),{host:s,port:a}=nE(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||rE()}function Lp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function nE(e){const t=Lp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Kc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Kc(s)}}}function Kc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function rE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class ql{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(t){return it("not implemented")}_linkToIdToken(t,n){return it("not implemented")}_getReauthenticationResolver(t){return it("not implemented")}}async function iE(e,t){return Wt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function oE(e,t){return Ko(e,"POST","/v1/accounts:signInWithPassword",vn(e,t))}/**
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
 */async function sE(e,t){return Ko(e,"POST","/v1/accounts:signInWithEmailLink",vn(e,t))}async function aE(e,t){return Ko(e,"POST","/v1/accounts:signInWithEmailLink",vn(e,t))}/**
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
 */class Xr extends ql{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Xr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Xr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wc(t,n,"signInWithPassword",oE);case"emailLink":return sE(t,{email:this._email,oobCode:this._password});default:Le(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wc(t,r,"signUpPassword",iE);case"emailLink":return aE(t,{idToken:n,email:this._email,oobCode:this._password});default:Le(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function bn(e,t){return Ko(e,"POST","/v1/accounts:signInWithIdp",vn(e,t))}/**
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
 */const lE="http://localhost";class hn extends ql{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Le("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Vl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new hn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return bn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,bn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,bn(t,n)}buildRequest(){const t={requestUri:lE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ii(n)}return t}}/**
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
 */function uE(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cE(e){const t=vr(yr(e)).link,n=t?vr(yr(t)).deep_link_id:null,r=vr(yr(e)).deep_link_id;return(r?vr(yr(r)).link:null)||r||n||t||e}class Yl{constructor(t){var n,r,i,o,s,a;const l=vr(yr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,d=uE((i=l.mode)!==null&&i!==void 0?i:null);x(u&&f&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=cE(t);try{return new Yl(n)}catch{return null}}}/**
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
 */class nr{constructor(){this.providerId=nr.PROVIDER_ID}static credential(t,n){return Xr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Yl.parseLink(n);return x(r,"argument-error"),Xr._fromEmailAndCode(t,r.code,r.tenantId)}}nr.PROVIDER_ID="password";nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends Jl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class It extends ai{constructor(){super("facebook.com")}static credential(t){return hn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
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
 */class tt extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return hn._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return tt.credentialFromTaggedObject(t)}static credentialFromError(t){return tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return tt.credential(n,r)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
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
 */class kt extends ai{constructor(){super("github.com")}static credential(t){return hn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kt.credential(t.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class Tt extends ai{constructor(){super("twitter.com")}static credential(t,n){return hn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
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
 */class qn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await ot._fromIdTokenResponse(t,r,i),s=Gc(r);return new qn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Gc(r);return new qn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Gc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class So extends Xe{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,So.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new So(t,n,r,i)}}function Dp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(e,o,t,r):o})}async function dE(e,t,n=!1){const r=await Jr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qn._forOperation(e,"link",r)}/**
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
 */async function fE(e,t,n=!1){const{auth:r}=e;if(Ke(r.app))return Promise.reject(zt(r));const i="reauthenticate";try{const o=await Jr(e,Dp(r,i,t,e),n);x(o.idToken,r,"internal-error");const s=Gl(o.idToken);x(s,r,"internal-error");const{sub:a}=s;return x(e.uid===a,r,"user-mismatch"),qn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Le(r,"user-mismatch"),o}}/**
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
 */async function Mp(e,t,n=!1){if(Ke(e.app))return Promise.reject(zt(e));const r="signIn",i=await Dp(e,r,t),o=await qn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function hE(e,t){return Mp(yn(e),t)}/**
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
 */async function pE(e){const t=yn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function mE(e,t,n){return Ke(e.app)?Promise.reject(zt(e)):hE(gt(e),nr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pE(e),r})}function gE(e,t,n,r){return gt(e).onIdTokenChanged(t,n,r)}function vE(e,t,n){return gt(e).beforeAuthStateChanged(t,n)}const Io="__sak";/**
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
 */class Up{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yE=1e3,wE=10;class jp extends Up{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);$_()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,wE):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},yE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}jp.type="LOCAL";const _E=jp;/**
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
 */class Fp extends Up{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Fp.type="SESSION";const zp=Fp;/**
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
 */function EE(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Qo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await EE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
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
 */function Xl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class SE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Xl("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ye(){return window}function IE(e){Ye().location.href=e}/**
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
 */function $p(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function kE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TE(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function CE(){return $p()?self:null}/**
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
 */const bp="firebaseLocalStorageDb",PE=1,ko="firebaseLocalStorage",Bp="fbase_key";class li{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qo(e,t){return e.transaction([ko],t?"readwrite":"readonly").objectStore(ko)}function RE(){const e=indexedDB.deleteDatabase(bp);return new li(e).toPromise()}function za(){const e=indexedDB.open(bp,PE);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ko,{keyPath:Bp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ko)?t(r):(r.close(),await RE(),t(await za()))})})}async function Qc(e,t,n){const r=qo(e,!0).put({[Bp]:t,value:n});return new li(r).toPromise()}async function NE(e,t){const n=qo(e,!1).get(t),r=await new li(n).toPromise();return r===void 0?null:r.value}function qc(e,t){const n=qo(e,!0).delete(t);return new li(n).toPromise()}const xE=800,AE=3;class Vp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await za(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>AE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $p()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(CE()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await kE(),!this.activeServiceWorker)return;this.sender=new SE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||TE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await za();return await Qc(t,Io,"1"),await qc(t,Io),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>NE(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=qo(i,!1).getAll();return new li(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vp.type="LOCAL";const OE=Vp;new si(3e4,6e4);/**
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
 */function Hp(e,t){return t?st(t):(x(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Zl extends ql{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return bn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return bn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function LE(e){return Mp(e.auth,new Zl(e),e.bypassAuthState)}function DE(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),fE(n,new Zl(e),e.bypassAuthState)}async function ME(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),dE(n,new Zl(e),e.bypassAuthState)}/**
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
 */class Wp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return LE;case"linkViaPopup":case"linkViaRedirect":return ME;case"reauthViaPopup":case"reauthViaRedirect":return DE;default:Le(this.auth,"internal-error")}}resolve(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const UE=new si(2e3,1e4);async function jE(e,t,n){if(Ke(e.app))return Promise.reject(be(e,"operation-not-supported-in-this-environment"));const r=yn(e);E_(e,t,Jl);const i=Hp(r,n);return new tn(r,"signInViaPopup",t,i).executeNotNull()}class tn extends Wp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const t=Xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,UE.get())};t()}}tn.currentPopupAction=null;/**
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
 */const FE="pendingRedirect",Vi=new Map;class zE extends Wp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Vi.get(this.auth._key());if(!t){try{const r=await $E(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Vi.set(this.auth._key(),t)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $E(e,t){const n=VE(t),r=BE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bE(e,t){Vi.set(e._key(),t)}function BE(e){return st(e._redirectPersistence)}function VE(e){return Bi(FE,e.config.apiKey,e.name)}async function HE(e,t,n=!1){if(Ke(e.app))return Promise.reject(zt(e));const r=yn(e),i=Hp(r,t),s=await new zE(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const WE=10*60*1e3;class KE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!GE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Kp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(be(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=WE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yc(t))}saveEventToCache(t){this.cachedEventUids.add(Yc(t)),this.lastProcessedEventTime=Date.now()}}function Yc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Kp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function GE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kp(e);default:return!1}}/**
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
 */async function QE(e,t={}){return Wt(e,"GET","/v1/projects",t)}/**
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
 */const qE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YE=/^https?/;async function JE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await QE(e);for(const n of t)try{if(XE(n))return}catch{}Le(e,"unauthorized-domain")}function XE(e){const t=ja(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!YE.test(n))return!1;if(qE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ZE=new si(3e4,6e4);function Jc(){const e=Ye().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function e1(e){return new Promise((t,n)=>{var r,i,o;function s(){Jc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Jc(),n(be(e,"network-request-failed"))},timeout:ZE.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ye().gapi)===null||o===void 0)&&o.load)s();else{const a=q_("iframefcb");return Ye()[a]=()=>{gapi.load?s():n(be(e,"network-request-failed"))},Op(`${Q_()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Hi=null,t})}let Hi=null;function t1(e){return Hi=Hi||e1(e),Hi}/**
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
 */const n1=new si(5e3,15e3),r1="__/auth/iframe",i1="emulator/auth/iframe",o1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},s1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a1(e){const t=e.config;x(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Kl(t,i1):`https://${e.config.authDomain}/${r1}`,r={apiKey:t.apiKey,appName:e.name,v:oi},i=s1.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ii(r).slice(1)}`}async function l1(e){const t=await t1(e),n=Ye().gapi;return x(n,e,"internal-error"),t.open({where:document.body,url:a1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:o1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=be(e,"network-request-failed"),a=Ye().setTimeout(()=>{o(s)},n1.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const u1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},c1=500,d1=600,f1="_blank",h1="http://localhost";class Xc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p1(e,t,n,r=c1,i=d1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},u1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=de().toLowerCase();n&&(a=Tp(u)?f1:n),Ip(u)&&(t=t||h1,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[g,v])=>`${p}${g}=${v},`,"");if(z_(u)&&a!=="_self")return m1(t||"",a),new Xc(null);const d=window.open(t||"",a,f);x(d,e,"popup-blocked");try{d.focus()}catch{}return new Xc(d)}function m1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const g1="__/auth/handler",v1="emulator/auth/handler",y1=encodeURIComponent("fac");async function Zc(e,t,n,r,i,o){x(e.config.authDomain,e,"auth-domain-config-required"),x(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:oi,eventId:i};if(t instanceof Jl){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Fy(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,d]of Object.entries(o||{}))s[f]=d}if(t instanceof ai){const f=t.getScopes().filter(d=>d!=="");f.length>0&&(s.scopes=f.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),u=l?`#${y1}=${encodeURIComponent(l)}`:"";return`${w1(e)}?${ii(a).slice(1)}${u}`}function w1({config:e}){return e.emulator?Kl(e,v1):`https://${e.authDomain}/${g1}`}/**
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
 */const Ms="webStorageSupport";class _1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zp,this._completeRedirectFn=HE,this._overrideRedirectResult=bE}async _openPopup(t,n,r,i){var o;pt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Zc(t,n,r,ja(),i);return p1(t,s,Xl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Zc(t,n,r,ja(),i);return IE(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(pt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await l1(t),r=new KE(t);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ms,{type:Ms},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ms];s!==void 0&&n(!!s),Le(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return xp()||kp()||Ql()}}const E1=_1;var ed="@firebase/auth",td="1.7.9";/**
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
 */class S1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function I1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k1(e){ht(new Je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;x(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ap(e)},u=new W_(r,i,o,l);return eE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ht(new Je("auth-internal",t=>{const n=yn(t.getProvider("auth").getImmediate());return(r=>new S1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(ed,td,I1(e)),qe(ed,td,"esm2017")}/**
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
 */const T1=5*60,C1=Uh("authIdTokenMaxAge")||T1;let nd=null;const P1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>C1)return;const i=n==null?void 0:n.token;nd!==i&&(nd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function R1(e=Hh()){const t=tr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Z_(e,{popupRedirectResolver:E1,persistence:[OE,_E,zp]}),r=Uh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=P1(o.toString());vE(n,s,()=>s(n.currentUser)),gE(n,a=>s(a))}}const i=Ry("auth");return i&&tE(n,`http://${i}`),n}function N1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}K_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=be("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",N1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k1("Browser");const x1={apiKey:"AIzaSyDviHmbNMxNtzvG5ZvZBOqgt2tt2fCxcOU",authDomain:"research-finder-1000.firebaseapp.com",projectId:"research-finder-1000",storageBucket:"research-finder-1000.firebasestorage.app",messagingSenderId:"90727380837",appId:"1:90727380837:web:7ac4c1b13e26cfecb3538c",measurementId:"G-7MKKN551YC"},Gp=Vh(x1);m_(Gp);const rd=R1(Gp),A1=new tt,id=({mode:e})=>{const t=Rh(),n=e==="register",[r,i]=I.useState(""),[o,s]=I.useState(""),[a,l]=I.useState(""),u=async()=>{try{n||(await mE(rd,r,o),l("Sign-in successful!"))}catch(d){l(`Error: ${d.message}`)}},f=async()=>{try{const d=await jE(rd,A1);console.log("Google Sign-In Result:",d.user),l(`Welcome ${d.user.displayName}!`)}catch(d){console.error("Error during Google Sign-In:",d.message),l(`Error: ${d.message}`)}};return y.jsx("div",{className:"auth-container",children:y.jsxs("div",{className:"auth-card",children:[y.jsx("h2",{children:n?"Register":"Sign In"}),y.jsxs("p",{children:["Welcome! Please ",n?"register":"sign in"," to continue."]}),y.jsxs("button",{className:"auth-google-button",onClick:f,children:[y.jsx("img",{src:"/assets/google-icon.png",alt:"Google icon",className:"google-icon"}),"Continue with Google"]}),y.jsx("div",{className:"auth-divider",children:y.jsx("span",{children:"or"})}),y.jsx("input",{type:"email",placeholder:"Email address",value:r,onChange:d=>i(d.target.value)}),y.jsx("input",{type:"password",placeholder:"Password",value:o,onChange:d=>s(d.target.value)}),y.jsx("button",{className:"auth-submit-button",onClick:u,children:n?"Register":"Sign In"}),y.jsx("p",{className:"auth-message",children:a}),y.jsxs("p",{className:"auth-toggle",children:[n?"Already have an account?":"Don't have an account?"," ",y.jsx("a",{href:n?"/signin":"/register",children:n?"Sign In":"Register"})]}),y.jsx("button",{className:"auth-return-home",onClick:()=>t("/"),children:"Return to Home Page"})]})})};const O1=({data:e})=>{const{title:t,body:n,compensation:r,organization:i,researcherName:o,workType:s}=e;return y.jsxs("div",{className:"feed-display-card",style:{border:"1px solid #ccc",padding:"15px",marginBottom:"15px",borderRadius:"8px"},children:[y.jsx("h3",{style:{marginBottom:"10px",color:"#333"},children:t||"Untitled"}),y.jsx("p",{children:n||"No description available."}),y.jsxs("p",{children:[y.jsx("strong",{children:"Compensation:"})," ",r||"Not specified"]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Organization:"})," ",i||"Unknown"]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Researcher:"})," ",o||"Unknown"]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Work Type:"})," ",s||"Not specified"]})]})};function L1(){const[e,t]=I.useState([]),[n,r]=I.useState(!0),[i,o]=I.useState(null);return I.useEffect(()=>{(async()=>{r(!0),o(null);try{const a=await fetch("https://research-finder-server.vercel.app/posts");if(!a.ok)throw new Error(`Error fetching posts: ${a.statusText}`);const l=await a.json();t(l)}catch(a){console.error("Error fetching posts:",a),o("Failed to fetch posts. Please try again later.")}finally{r(!1)}})()},[]),y.jsxs("div",{className:"feed-container",style:{padding:"20px",maxWidth:"800px",margin:"0 auto"},children:[n&&y.jsx("p",{children:"Loading posts..."}),i&&y.jsx("p",{className:"feed-error",children:i}),!n&&!i&&e.length===0&&y.jsx("p",{children:"No posts available at the moment."}),!n&&!i&&e.length>0&&y.jsx("div",{className:"feed-list",children:e.map(s=>y.jsx(O1,{data:s},s.id))})]})}function D1(){return y.jsx(gy,{children:y.jsxs("div",{children:[y.jsxs("header",{style:{textAlign:"center",padding:"10px",backgroundColor:"#f0f0f0"},children:[y.jsx("h1",{children:"Research Finder App"}),y.jsx("p",{style:{fontStyle:"italic",color:"#555"},children:"🚀 Progress Update: Firebase and Frontend Integration Ongoing!"})]}),y.jsxs(hy,{children:[y.jsx(_n,{path:"/",element:y.jsx(wy,{})}),y.jsx(_n,{path:"/user",element:y.jsx(_y,{})}),y.jsx(_n,{path:"/signin",element:y.jsx(id,{mode:"signin"})}),y.jsx(_n,{path:"/register",element:y.jsx(id,{mode:"register"})}),y.jsx(_n,{path:"/feed",element:y.jsx(L1,{})})," "]}),y.jsx("footer",{style:{textAlign:"center",marginTop:"20px",padding:"10px",backgroundColor:"#f0f0f0"},children:y.jsx("p",{children:"© 2024 Research Finder Project - Capstone"})})]})})}Us.createRoot(document.getElementById("root")).render(y.jsx(md.StrictMode,{children:y.jsx(D1,{})}));

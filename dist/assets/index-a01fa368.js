function bp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qc={exports:{}},_s={},Yc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),Bp=Symbol.for("react.portal"),Vp=Symbol.for("react.fragment"),Hp=Symbol.for("react.strict_mode"),Wp=Symbol.for("react.profiler"),Kp=Symbol.for("react.provider"),Gp=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),Qp=Symbol.for("react.suspense"),Yp=Symbol.for("react.memo"),Jp=Symbol.for("react.lazy"),Gl=Symbol.iterator;function Xp(e){return e===null||typeof e!="object"?null:(e=Gl&&e[Gl]||e["@@iterator"],typeof e=="function"?e:null)}var Jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xc=Object.assign,Zc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Zc,this.updater=n||Jc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ed(){}ed.prototype=qn.prototype;function Ma(e,t,n){this.props=e,this.context=t,this.refs=Zc,this.updater=n||Jc}var ja=Ma.prototype=new ed;ja.constructor=Ma;Xc(ja,qn.prototype);ja.isPureReactComponent=!0;var ql=Array.isArray,td=Object.prototype.hasOwnProperty,Ua={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)td.call(t,r)&&!nd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qr,type:e,key:s,ref:o,props:i,_owner:Ua.current}}function Zp(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fa(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function em(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ql=/\/+/g;function Gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?em(""+e.key):t.toString(36)}function Ti(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qr:case Bp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Gs(o,0):r,ql(i)?(n="",e!=null&&(n=e.replace(Ql,"$&/")+"/"),Ti(i,t,n,"",function(u){return u})):i!=null&&(Fa(i)&&(i=Zp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ql,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ql(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Gs(s,a);o+=Ti(s,t,n,l,i)}else if(l=Xp(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Gs(s,a++),o+=Ti(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ai(e,t,n){if(e==null)return e;var r=[],i=0;return Ti(e,r,"","",function(s){return t.call(n,s,i++)}),r}function tm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Ci={transition:null},nm={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:Ua};function id(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:ai,forEach:function(e,t,n){ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ai(e,function(){t++}),t},toArray:function(e){return ai(e,function(t){return t})||[]},only:function(e){if(!Fa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=qn;D.Fragment=Vp;D.Profiler=Wp;D.PureComponent=Ma;D.StrictMode=Hp;D.Suspense=Qp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nm;D.act=id;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xc({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ua.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)td.call(t,l)&&!nd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qr,type:e.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:Gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kp,_context:e},e.Consumer=e};D.createElement=rd;D.createFactory=function(e){var t=rd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:qp,render:e}};D.isValidElement=Fa;D.lazy=function(e){return{$$typeof:Jp,_payload:{_status:-1,_result:e},_init:tm}};D.memo=function(e,t){return{$$typeof:Yp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};D.unstable_act=id;D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.3.1";Yc.exports=D;var E=Yc.exports;const sd=$p(E),rm=bp({__proto__:null,default:sd},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im=E,sm=Symbol.for("react.element"),om=Symbol.for("react.fragment"),am=Object.prototype.hasOwnProperty,lm=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,um={key:!0,ref:!0,__self:!0,__source:!0};function od(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)am.call(t,r)&&!um.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:sm,type:e,key:s,ref:o,props:i,_owner:lm.current}}_s.Fragment=om;_s.jsx=od;_s.jsxs=od;Qc.exports=_s;var g=Qc.exports,Ao={},ad={exports:{}},Te={},ld={exports:{}},ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,A){var O=C.length;C.push(A);e:for(;0<O;){var G=O-1>>>1,Z=C[G];if(0<i(Z,A))C[G]=A,C[O]=Z,O=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var A=C[0],O=C.pop();if(O!==A){C[0]=O;e:for(var G=0,Z=C.length,si=Z>>>1;G<si;){var Wt=2*(G+1)-1,Ks=C[Wt],Kt=Wt+1,oi=C[Kt];if(0>i(Ks,O))Kt<Z&&0>i(oi,Ks)?(C[G]=oi,C[Kt]=O,G=Kt):(C[G]=Ks,C[Wt]=O,G=Wt);else if(Kt<Z&&0>i(oi,O))C[G]=oi,C[Kt]=O,G=Kt;else break e}}return A}function i(C,A){var O=C.sortIndex-A.sortIndex;return O!==0?O:C.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,p=3,v=!1,y=!1,_=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=C)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function w(C){if(_=!1,m(C),!y)if(n(l)!==null)y=!0,Hs(k);else{var A=n(u);A!==null&&Ws(w,A.startTime-C)}}function k(C,A){y=!1,_&&(_=!1,h(N),N=-1),v=!0;var O=p;try{for(m(A),d=n(l);d!==null&&(!(d.expirationTime>A)||C&&!Le());){var G=d.callback;if(typeof G=="function"){d.callback=null,p=d.priorityLevel;var Z=G(d.expirationTime<=A);A=e.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&r(l),m(A)}else r(l);d=n(l)}if(d!==null)var si=!0;else{var Wt=n(u);Wt!==null&&Ws(w,Wt.startTime-A),si=!1}return si}finally{d=null,p=O,v=!1}}var P=!1,R=null,N=-1,z=5,L=-1;function Le(){return!(e.unstable_now()-L<z)}function tr(){if(R!==null){var C=e.unstable_now();L=C;var A=!0;try{A=R(!0,C)}finally{A?nr():(P=!1,R=null)}}else P=!1}var nr;if(typeof c=="function")nr=function(){c(tr)};else if(typeof MessageChannel<"u"){var Kl=new MessageChannel,zp=Kl.port2;Kl.port1.onmessage=tr,nr=function(){zp.postMessage(null)}}else nr=function(){I(tr,0)};function Hs(C){R=C,P||(P=!0,nr())}function Ws(C,A){N=I(function(){C(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Hs(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var O=p;p=A;try{return C()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,A){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=p;p=C;try{return A()}finally{p=O}},e.unstable_scheduleCallback=function(C,A,O){var G=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=O+Z,C={id:f++,callback:A,priorityLevel:C,startTime:O,expirationTime:Z,sortIndex:-1},O>G?(C.sortIndex=O,t(u,C),n(l)===null&&C===n(u)&&(_?(h(N),N=-1):_=!0,Ws(w,O-G))):(C.sortIndex=Z,t(l,C),y||v||(y=!0,Hs(k))),C},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(C){var A=p;return function(){var O=p;p=A;try{return C.apply(this,arguments)}finally{p=O}}}})(ud);ld.exports=ud;var cm=ld.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm=E,ke=cm;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cd=new Set,Cr={};function pn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Cr[e]=t,e=0;e<t.length;e++)cd.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oo=Object.prototype.hasOwnProperty,fm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yl={},Jl={};function hm(e){return Oo.call(Jl,e)?!0:Oo.call(Yl,e)?!1:fm.test(e)?Jl[e]=!0:(Yl[e]=!0,!1)}function pm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mm(e,t,n,r){if(t===null||typeof t>"u"||pm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var za=/[\-:]([a-z])/g;function ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(za,ba);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(za,ba);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(za,ba);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function $a(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mm(t,n,i,r)&&(n=null),r||i===null?hm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,li=Symbol.for("react.element"),wn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),Lo=Symbol.for("react.profiler"),dd=Symbol.for("react.provider"),fd=Symbol.for("react.context"),Va=Symbol.for("react.forward_ref"),Do=Symbol.for("react.suspense"),Mo=Symbol.for("react.suspense_list"),Ha=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),hd=Symbol.for("react.offscreen"),Xl=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=Xl&&e[Xl]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,qs;function dr(e){if(qs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qs=t&&t[1]||""}return`
`+qs+e}var Qs=!1;function Ys(e,t){if(!e||Qs)return"";Qs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function gm(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Ys(e.type,!1),e;case 11:return e=Ys(e.type.render,!1),e;case 1:return e=Ys(e.type,!0),e;default:return""}}function jo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case wn:return"Portal";case Lo:return"Profiler";case Ba:return"StrictMode";case Do:return"Suspense";case Mo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fd:return(e.displayName||"Context")+".Consumer";case dd:return(e._context.displayName||"Context")+".Provider";case Va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ha:return t=e.displayName||null,t!==null?t:jo(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return jo(e(t))}catch{}}return null}function vm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jo(t);case 8:return t===Ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ym(e){var t=pd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ui(e){e._valueTracker||(e._valueTracker=ym(e))}function md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uo(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gd(e,t){t=t.checked,t!=null&&$a(e,"checked",t,!1)}function Fo(e,t){gd(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zo(e,t.type,n):t.hasOwnProperty("defaultValue")&&zo(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zo(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(fr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function vd(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $o(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,wd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wm=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){wm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function _d(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function Sd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_d(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _m=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(e,t){if(t){if(_m[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Vo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ho=null;function Wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wo=null,Ln=null,Dn=null;function ru(e){if(e=Jr(e)){if(typeof Wo!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ts(t),Wo(e.stateNode,e.type,t))}}function Ed(e){Ln?Dn?Dn.push(e):Dn=[e]:Ln=e}function Id(){if(Ln){var e=Ln,t=Dn;if(Dn=Ln=null,ru(e),t)for(e=0;e<t.length;e++)ru(t[e])}}function kd(e,t){return e(t)}function Td(){}var Js=!1;function Cd(e,t,n){if(Js)return e(t,n);Js=!0;try{return kd(e,t,n)}finally{Js=!1,(Ln!==null||Dn!==null)&&(Td(),Id())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ko=!1;if(at)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){Ko=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{Ko=!1}function Sm(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var gr=!1,Bi=null,Vi=!1,Go=null,Em={onError:function(e){gr=!0,Bi=e}};function Im(e,t,n,r,i,s,o,a,l){gr=!1,Bi=null,Sm.apply(Em,arguments)}function km(e,t,n,r,i,s,o,a,l){if(Im.apply(this,arguments),gr){if(gr){var u=Bi;gr=!1,Bi=null}else throw Error(S(198));Vi||(Vi=!0,Go=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function iu(e){if(mn(e)!==e)throw Error(S(188))}function Tm(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return iu(i),e;if(s===r)return iu(i),t;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Rd(e){return e=Tm(e),e!==null?Nd(e):null}function Nd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nd(e);if(t!==null)return t;e=e.sibling}return null}var xd=ke.unstable_scheduleCallback,su=ke.unstable_cancelCallback,Cm=ke.unstable_shouldYield,Pm=ke.unstable_requestPaint,q=ke.unstable_now,Rm=ke.unstable_getCurrentPriorityLevel,Ka=ke.unstable_ImmediatePriority,Ad=ke.unstable_UserBlockingPriority,Hi=ke.unstable_NormalPriority,Nm=ke.unstable_LowPriority,Od=ke.unstable_IdlePriority,Ss=null,He=null;function xm(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Ss,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Lm,Am=Math.log,Om=Math.LN2;function Lm(e){return e>>>=0,e===0?32:31-(Am(e)/Om|0)|0}var di=64,fi=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=hr(a):(s&=o,s!==0&&(r=hr(s)))}else o=n&~i,o!==0?r=hr(o):s!==0&&(r=hr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function Dm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Fe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Dm(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ld(){var e=di;return di<<=1,!(di&4194240)&&(di=64),e}function Xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function jm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function Dd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Md,qa,jd,Ud,Fd,Qo=!1,hi=[],Rt=null,Nt=null,xt=null,Nr=new Map,xr=new Map,_t=[],Um="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ou(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function sr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&qa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fm(e,t,n,r,i){switch(t){case"focusin":return Rt=sr(Rt,e,t,n,r,i),!0;case"dragenter":return Nt=sr(Nt,e,t,n,r,i),!0;case"mouseover":return xt=sr(xt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Nr.set(s,sr(Nr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xr.set(s,sr(xr.get(s)||null,e,t,n,r,i)),!0}return!1}function zd(e){var t=Jt(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pd(n),t!==null){e.blockedOn=t,Fd(e.priority,function(){jd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ho=r,n.target.dispatchEvent(r),Ho=null}else return t=Jr(n),t!==null&&qa(t),e.blockedOn=n,!1;t.shift()}return!0}function au(e,t,n){Pi(e)&&n.delete(t)}function zm(){Qo=!1,Rt!==null&&Pi(Rt)&&(Rt=null),Nt!==null&&Pi(Nt)&&(Nt=null),xt!==null&&Pi(xt)&&(xt=null),Nr.forEach(au),xr.forEach(au)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Qo||(Qo=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,zm)))}function Ar(e){function t(i){return or(i,e)}if(0<hi.length){or(hi[0],e);for(var n=1;n<hi.length;n++){var r=hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&or(Rt,e),Nt!==null&&or(Nt,e),xt!==null&&or(xt,e),Nr.forEach(t),xr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)zd(n),n.blockedOn===null&&_t.shift()}var Mn=mt.ReactCurrentBatchConfig,Ki=!0;function bm(e,t,n,r){var i=j,s=Mn.transition;Mn.transition=null;try{j=1,Qa(e,t,n,r)}finally{j=i,Mn.transition=s}}function $m(e,t,n,r){var i=j,s=Mn.transition;Mn.transition=null;try{j=4,Qa(e,t,n,r)}finally{j=i,Mn.transition=s}}function Qa(e,t,n,r){if(Ki){var i=Yo(e,t,n,r);if(i===null)lo(e,t,r,Gi,n),ou(e,r);else if(Fm(i,e,t,n,r))r.stopPropagation();else if(ou(e,r),t&4&&-1<Um.indexOf(e)){for(;i!==null;){var s=Jr(i);if(s!==null&&Md(s),s=Yo(e,t,n,r),s===null&&lo(e,t,r,Gi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lo(e,t,r,null,n)}}var Gi=null;function Yo(e,t,n,r){if(Gi=null,e=Wa(r),e=Jt(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function bd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rm()){case Ka:return 1;case Ad:return 4;case Hi:case Nm:return 16;case Od:return 536870912;default:return 16}default:return 16}}var Tt=null,Ya=null,Ri=null;function $d(){if(Ri)return Ri;var e,t=Ya,n=t.length,r,i="value"in Tt?Tt.value:Tt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ri=i.slice(e,1<r?1-r:void 0)}function Ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function lu(){return!1}function Ce(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pi:lu,this.isPropagationStopped=lu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ja=Ce(Qn),Yr=W({},Qn,{view:0,detail:0}),Bm=Ce(Yr),Zs,eo,ar,Es=W({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(Zs=e.screenX-ar.screenX,eo=e.screenY-ar.screenY):eo=Zs=0,ar=e),Zs)},movementY:function(e){return"movementY"in e?e.movementY:eo}}),uu=Ce(Es),Vm=W({},Es,{dataTransfer:0}),Hm=Ce(Vm),Wm=W({},Yr,{relatedTarget:0}),to=Ce(Wm),Km=W({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gm=Ce(Km),qm=W({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qm=Ce(qm),Ym=W({},Qn,{data:0}),cu=Ce(Ym),Jm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zm[e])?!!t[e]:!1}function Xa(){return eg}var tg=W({},Yr,{key:function(e){if(e.key){var t=Jm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xa,charCode:function(e){return e.type==="keypress"?Ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ng=Ce(tg),rg=W({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=Ce(rg),ig=W({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xa}),sg=Ce(ig),og=W({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ag=Ce(og),lg=W({},Es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ug=Ce(lg),cg=[9,13,27,32],Za=at&&"CompositionEvent"in window,vr=null;at&&"documentMode"in document&&(vr=document.documentMode);var dg=at&&"TextEvent"in window&&!vr,Bd=at&&(!Za||vr&&8<vr&&11>=vr),fu=String.fromCharCode(32),hu=!1;function Vd(e,t){switch(e){case"keyup":return cg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function fg(e,t){switch(e){case"compositionend":return Hd(t);case"keypress":return t.which!==32?null:(hu=!0,fu);case"textInput":return e=t.data,e===fu&&hu?null:e;default:return null}}function hg(e,t){if(Sn)return e==="compositionend"||!Za&&Vd(e,t)?(e=$d(),Ri=Ya=Tt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bd&&t.locale!=="ko"?null:t.data;default:return null}}var pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pg[e.type]:t==="textarea"}function Wd(e,t,n,r){Ed(r),t=qi(t,"onChange"),0<t.length&&(n=new Ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,Or=null;function mg(e){nf(e,0)}function Is(e){var t=kn(e);if(md(t))return e}function gg(e,t){if(e==="change")return t}var Kd=!1;if(at){var no;if(at){var ro="oninput"in document;if(!ro){var mu=document.createElement("div");mu.setAttribute("oninput","return;"),ro=typeof mu.oninput=="function"}no=ro}else no=!1;Kd=no&&(!document.documentMode||9<document.documentMode)}function gu(){yr&&(yr.detachEvent("onpropertychange",Gd),Or=yr=null)}function Gd(e){if(e.propertyName==="value"&&Is(Or)){var t=[];Wd(t,Or,e,Wa(e)),Cd(mg,t)}}function vg(e,t,n){e==="focusin"?(gu(),yr=t,Or=n,yr.attachEvent("onpropertychange",Gd)):e==="focusout"&&gu()}function yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Is(Or)}function wg(e,t){if(e==="click")return Is(t)}function _g(e,t){if(e==="input"||e==="change")return Is(t)}function Sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:Sg;function Lr(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oo.call(t,i)||!be(e[i],t[i]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yu(e,t){var n=vu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vu(n)}}function qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qd(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function el(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Eg(e){var t=Qd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qd(n.ownerDocument.documentElement,n)){if(r!==null&&el(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=yu(n,s);var o=yu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ig=at&&"documentMode"in document&&11>=document.documentMode,En=null,Jo=null,wr=null,Xo=!1;function wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xo||En==null||En!==$i(r)||(r=En,"selectionStart"in r&&el(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Lr(wr,r)||(wr=r,r=qi(Jo,"onSelect"),0<r.length&&(t=new Ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},io={},Yd={};at&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function ks(e){if(io[e])return io[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yd)return io[e]=t[n];return e}var Jd=ks("animationend"),Xd=ks("animationiteration"),Zd=ks("animationstart"),ef=ks("transitionend"),tf=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){tf.set(e,t),pn(t,[e])}for(var so=0;so<_u.length;so++){var oo=_u[so],kg=oo.toLowerCase(),Tg=oo[0].toUpperCase()+oo.slice(1);$t(kg,"on"+Tg)}$t(Jd,"onAnimationEnd");$t(Xd,"onAnimationIteration");$t(Zd,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(ef,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cg=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function Su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,km(r,t,void 0,e),e.currentTarget=null}function nf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Su(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Su(i,a,u),s=l}}}if(Vi)throw e=Go,Vi=!1,Go=null,e}function b(e,t){var n=t[ra];n===void 0&&(n=t[ra]=new Set);var r=e+"__bubble";n.has(r)||(rf(t,e,2,!1),n.add(r))}function ao(e,t,n){var r=0;t&&(r|=4),rf(n,e,r,t)}var gi="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[gi]){e[gi]=!0,cd.forEach(function(n){n!=="selectionchange"&&(Cg.has(n)||ao(n,!1,e),ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,ao("selectionchange",!1,t))}}function rf(e,t,n,r){switch(bd(t)){case 1:var i=bm;break;case 4:i=$m;break;default:i=Qa}n=i.bind(null,t,n,e),i=void 0,!Ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function lo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jt(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Cd(function(){var u=s,f=Wa(n),d=[];e:{var p=tf.get(e);if(p!==void 0){var v=Ja,y=e;switch(e){case"keypress":if(Ni(n)===0)break e;case"keydown":case"keyup":v=ng;break;case"focusin":y="focus",v=to;break;case"focusout":y="blur",v=to;break;case"beforeblur":case"afterblur":v=to;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sg;break;case Jd:case Xd:case Zd:v=Gm;break;case ef:v=ag;break;case"scroll":v=Bm;break;case"wheel":v=ug;break;case"copy":case"cut":case"paste":v=Qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=du}var _=(t&4)!==0,I=!_&&e==="scroll",h=_?p!==null?p+"Capture":null:p;_=[];for(var c=u,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=Rr(c,h),w!=null&&_.push(Mr(c,w,m)))),I)break;c=c.return}0<_.length&&(p=new v(p,y,null,n,f),d.push({event:p,listeners:_}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Ho&&(y=n.relatedTarget||n.fromElement)&&(Jt(y)||y[lt]))break e;if((v||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Jt(y):null,y!==null&&(I=mn(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=uu,w="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=du,w="onPointerLeave",h="onPointerEnter",c="pointer"),I=v==null?p:kn(v),m=y==null?p:kn(y),p=new _(w,c+"leave",v,n,f),p.target=I,p.relatedTarget=m,w=null,Jt(f)===u&&(_=new _(h,c+"enter",y,n,f),_.target=m,_.relatedTarget=I,w=_),I=w,v&&y)t:{for(_=v,h=y,c=0,m=_;m;m=yn(m))c++;for(m=0,w=h;w;w=yn(w))m++;for(;0<c-m;)_=yn(_),c--;for(;0<m-c;)h=yn(h),m--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=yn(_),h=yn(h)}_=null}else _=null;v!==null&&Eu(d,p,v,_,!1),y!==null&&I!==null&&Eu(d,I,y,_,!0)}}e:{if(p=u?kn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=gg;else if(pu(p))if(Kd)k=_g;else{k=yg;var P=vg}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=wg);if(k&&(k=k(e,u))){Wd(d,k,n,f);break e}P&&P(e,p,u),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&zo(p,"number",p.value)}switch(P=u?kn(u):window,e){case"focusin":(pu(P)||P.contentEditable==="true")&&(En=P,Jo=u,wr=null);break;case"focusout":wr=Jo=En=null;break;case"mousedown":Xo=!0;break;case"contextmenu":case"mouseup":case"dragend":Xo=!1,wu(d,n,f);break;case"selectionchange":if(Ig)break;case"keydown":case"keyup":wu(d,n,f)}var R;if(Za)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Sn?Vd(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Bd&&n.locale!=="ko"&&(Sn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Sn&&(R=$d()):(Tt=f,Ya="value"in Tt?Tt.value:Tt.textContent,Sn=!0)),P=qi(u,N),0<P.length&&(N=new cu(N,e,null,n,f),d.push({event:N,listeners:P}),R?N.data=R:(R=Hd(n),R!==null&&(N.data=R)))),(R=dg?fg(e,n):hg(e,n))&&(u=qi(u,"onBeforeInput"),0<u.length&&(f=new cu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=R))}nf(d,t)})}function Mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Rr(e,n),s!=null&&r.unshift(Mr(e,s,i)),s=Rr(e,t),s!=null&&r.push(Mr(e,s,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Rr(n,s),l!=null&&o.unshift(Mr(n,l,a))):i||(l=Rr(n,s),l!=null&&o.push(Mr(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Pg=/\r\n?/g,Rg=/\u0000|\uFFFD/g;function Iu(e){return(typeof e=="string"?e:""+e).replace(Pg,`
`).replace(Rg,"")}function vi(e,t,n){if(t=Iu(t),Iu(e)!==t&&n)throw Error(S(425))}function Qi(){}var Zo=null,ea=null;function ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var na=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,ku=typeof Promise=="function"?Promise:void 0,xg=typeof queueMicrotask=="function"?queueMicrotask:typeof ku<"u"?function(e){return ku.resolve(null).then(e).catch(Ag)}:na;function Ag(e){setTimeout(function(){throw e})}function uo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ar(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Yn,jr="__reactProps$"+Yn,lt="__reactContainer$"+Yn,ra="__reactEvents$"+Yn,Og="__reactListeners$"+Yn,Lg="__reactHandles$"+Yn;function Jt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tu(e);e!==null;){if(n=e[Ve])return n;e=Tu(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[Ve]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ts(e){return e[jr]||null}var ia=[],Tn=-1;function Bt(e){return{current:e}}function $(e){0>Tn||(e.current=ia[Tn],ia[Tn]=null,Tn--)}function F(e,t){Tn++,ia[Tn]=e.current,e.current=t}var bt={},le=Bt(bt),ge=Bt(!1),sn=bt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function Yi(){$(ge),$(le)}function Cu(e,t,n){if(le.current!==bt)throw Error(S(168));F(le,t),F(ge,n)}function sf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,vm(e)||"Unknown",i));return W({},n,r)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,sn=le.current,F(le,e),F(ge,ge.current),!0}function Pu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=sf(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,$(ge),$(le),F(le,e)):$(ge),F(ge,n)}var Xe=null,Cs=!1,co=!1;function of(e){Xe===null?Xe=[e]:Xe.push(e)}function Dg(e){Cs=!0,of(e)}function Vt(){if(!co&&Xe!==null){co=!0;var e=0,t=j;try{var n=Xe;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,Cs=!1}catch(i){throw Xe!==null&&(Xe=Xe.slice(e+1)),xd(Ka,Vt),i}finally{j=t,co=!1}}return null}var Cn=[],Pn=0,Xi=null,Zi=0,Pe=[],Re=0,on=null,et=1,tt="";function Gt(e,t){Cn[Pn++]=Zi,Cn[Pn++]=Xi,Xi=e,Zi=t}function af(e,t,n){Pe[Re++]=et,Pe[Re++]=tt,Pe[Re++]=on,on=e;var r=et;e=tt;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var s=32-Fe(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,et=1<<32-Fe(t)+i|n<<i|r,tt=s+e}else et=1<<s|n<<i|r,tt=e}function tl(e){e.return!==null&&(Gt(e,1),af(e,1,0))}function nl(e){for(;e===Xi;)Xi=Cn[--Pn],Cn[Pn]=null,Zi=Cn[--Pn],Cn[Pn]=null;for(;e===on;)on=Pe[--Re],Pe[Re]=null,tt=Pe[--Re],Pe[Re]=null,et=Pe[--Re],Pe[Re]=null}var Ee=null,Se=null,B=!1,Ue=null;function lf(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ru(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Se=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Se=null,!0):!1;default:return!1}}function sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oa(e){if(B){var t=Se;if(t){var n=t;if(!Ru(e,t)){if(sa(e))throw Error(S(418));t=At(n.nextSibling);var r=Ee;t&&Ru(e,t)?lf(r,n):(e.flags=e.flags&-4097|2,B=!1,Ee=e)}}else{if(sa(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,Ee=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function yi(e){if(e!==Ee)return!1;if(!B)return Nu(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ta(e.type,e.memoizedProps)),t&&(t=Se)){if(sa(e))throw uf(),Error(S(418));for(;t;)lf(e,t),t=At(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ee?At(e.stateNode.nextSibling):null;return!0}function uf(){for(var e=Se;e;)e=At(e.nextSibling)}function Vn(){Se=Ee=null,B=!1}function rl(e){Ue===null?Ue=[e]:Ue.push(e)}var Mg=mt.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function wi(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xu(e){var t=e._init;return t(e._payload)}function cf(e){function t(h,c){if(e){var m=h.deletions;m===null?(h.deletions=[c],h.flags|=16):m.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Mt(h,c),h.index=0,h.sibling=null,h}function s(h,c,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<c?(h.flags|=2,c):m):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,m,w){return c===null||c.tag!==6?(c=yo(m,h.mode,w),c.return=h,c):(c=i(c,m),c.return=h,c)}function l(h,c,m,w){var k=m.type;return k===_n?f(h,c,m.props.children,w,m.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===yt&&xu(k)===c.type)?(w=i(c,m.props),w.ref=lr(h,c,m),w.return=h,w):(w=ji(m.type,m.key,m.props,null,h.mode,w),w.ref=lr(h,c,m),w.return=h,w)}function u(h,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=wo(m,h.mode,w),c.return=h,c):(c=i(c,m.children||[]),c.return=h,c)}function f(h,c,m,w,k){return c===null||c.tag!==7?(c=nn(m,h.mode,w,k),c.return=h,c):(c=i(c,m),c.return=h,c)}function d(h,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=yo(""+c,h.mode,m),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case li:return m=ji(c.type,c.key,c.props,null,h.mode,m),m.ref=lr(h,null,c),m.return=h,m;case wn:return c=wo(c,h.mode,m),c.return=h,c;case yt:var w=c._init;return d(h,w(c._payload),m)}if(fr(c)||rr(c))return c=nn(c,h.mode,m,null),c.return=h,c;wi(h,c)}return null}function p(h,c,m,w){var k=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(h,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case li:return m.key===k?l(h,c,m,w):null;case wn:return m.key===k?u(h,c,m,w):null;case yt:return k=m._init,p(h,c,k(m._payload),w)}if(fr(m)||rr(m))return k!==null?null:f(h,c,m,w,null);wi(h,m)}return null}function v(h,c,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,a(c,h,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case li:return h=h.get(w.key===null?m:w.key)||null,l(c,h,w,k);case wn:return h=h.get(w.key===null?m:w.key)||null,u(c,h,w,k);case yt:var P=w._init;return v(h,c,m,P(w._payload),k)}if(fr(w)||rr(w))return h=h.get(m)||null,f(c,h,w,k,null);wi(c,w)}return null}function y(h,c,m,w){for(var k=null,P=null,R=c,N=c=0,z=null;R!==null&&N<m.length;N++){R.index>N?(z=R,R=null):z=R.sibling;var L=p(h,R,m[N],w);if(L===null){R===null&&(R=z);break}e&&R&&L.alternate===null&&t(h,R),c=s(L,c,N),P===null?k=L:P.sibling=L,P=L,R=z}if(N===m.length)return n(h,R),B&&Gt(h,N),k;if(R===null){for(;N<m.length;N++)R=d(h,m[N],w),R!==null&&(c=s(R,c,N),P===null?k=R:P.sibling=R,P=R);return B&&Gt(h,N),k}for(R=r(h,R);N<m.length;N++)z=v(R,h,N,m[N],w),z!==null&&(e&&z.alternate!==null&&R.delete(z.key===null?N:z.key),c=s(z,c,N),P===null?k=z:P.sibling=z,P=z);return e&&R.forEach(function(Le){return t(h,Le)}),B&&Gt(h,N),k}function _(h,c,m,w){var k=rr(m);if(typeof k!="function")throw Error(S(150));if(m=k.call(m),m==null)throw Error(S(151));for(var P=k=null,R=c,N=c=0,z=null,L=m.next();R!==null&&!L.done;N++,L=m.next()){R.index>N?(z=R,R=null):z=R.sibling;var Le=p(h,R,L.value,w);if(Le===null){R===null&&(R=z);break}e&&R&&Le.alternate===null&&t(h,R),c=s(Le,c,N),P===null?k=Le:P.sibling=Le,P=Le,R=z}if(L.done)return n(h,R),B&&Gt(h,N),k;if(R===null){for(;!L.done;N++,L=m.next())L=d(h,L.value,w),L!==null&&(c=s(L,c,N),P===null?k=L:P.sibling=L,P=L);return B&&Gt(h,N),k}for(R=r(h,R);!L.done;N++,L=m.next())L=v(R,h,N,L.value,w),L!==null&&(e&&L.alternate!==null&&R.delete(L.key===null?N:L.key),c=s(L,c,N),P===null?k=L:P.sibling=L,P=L);return e&&R.forEach(function(tr){return t(h,tr)}),B&&Gt(h,N),k}function I(h,c,m,w){if(typeof m=="object"&&m!==null&&m.type===_n&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case li:e:{for(var k=m.key,P=c;P!==null;){if(P.key===k){if(k=m.type,k===_n){if(P.tag===7){n(h,P.sibling),c=i(P,m.props.children),c.return=h,h=c;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===yt&&xu(k)===P.type){n(h,P.sibling),c=i(P,m.props),c.ref=lr(h,P,m),c.return=h,h=c;break e}n(h,P);break}else t(h,P);P=P.sibling}m.type===_n?(c=nn(m.props.children,h.mode,w,m.key),c.return=h,h=c):(w=ji(m.type,m.key,m.props,null,h.mode,w),w.ref=lr(h,c,m),w.return=h,h=w)}return o(h);case wn:e:{for(P=m.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(h,c.sibling),c=i(c,m.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=wo(m,h.mode,w),c.return=h,h=c}return o(h);case yt:return P=m._init,I(h,c,P(m._payload),w)}if(fr(m))return y(h,c,m,w);if(rr(m))return _(h,c,m,w);wi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,m),c.return=h,h=c):(n(h,c),c=yo(m,h.mode,w),c.return=h,h=c),o(h)):n(h,c)}return I}var Hn=cf(!0),df=cf(!1),es=Bt(null),ts=null,Rn=null,il=null;function sl(){il=Rn=ts=null}function ol(e){var t=es.current;$(es),e._currentValue=t}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){ts=e,il=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(il!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(ts===null)throw Error(S(308));Rn=e,ts.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var Xt=null;function al(e){Xt===null?Xt=[e]:Xt.push(e)}function ff(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,al(t)):(n.next=i.next,i.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ut(e,n)}return i=r.interleaved,i===null?(t.next=t,al(r)):(t.next=i.next,i.next=t),r.interleaved=t,ut(e,n)}function xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ga(e,n)}}function Au(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ns(e,t,n,r){var i=e.updateQueue;wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,f=u=l=null,a=s;do{var p=a.lane,v=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(p=t,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(v,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(v,d,p):y,p==null)break e;d=W({},d,p);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,l=d):f=f.next=v,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);ln|=o,e.lanes=o,e.memoizedState=d}}function Ou(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Xr={},We=Bt(Xr),Ur=Bt(Xr),Fr=Bt(Xr);function Zt(e){if(e===Xr)throw Error(S(174));return e}function ul(e,t){switch(F(Fr,t),F(Ur,e),F(We,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$o(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$o(t,e)}$(We),F(We,t)}function Wn(){$(We),$(Ur),$(Fr)}function pf(e){Zt(Fr.current);var t=Zt(We.current),n=$o(t,e.type);t!==n&&(F(Ur,e),F(We,n))}function cl(e){Ur.current===e&&($(We),$(Ur))}var V=Bt(0);function rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=[];function dl(){for(var e=0;e<fo.length;e++)fo[e]._workInProgressVersionPrimary=null;fo.length=0}var Ai=mt.ReactCurrentDispatcher,ho=mt.ReactCurrentBatchConfig,an=0,H=null,Y=null,ee=null,is=!1,_r=!1,zr=0,jg=0;function se(){throw Error(S(321))}function fl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function hl(e,t,n,r,i,s){if(an=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ai.current=e===null||e.memoizedState===null?bg:$g,e=n(r,i),_r){s=0;do{if(_r=!1,zr=0,25<=s)throw Error(S(301));s+=1,ee=Y=null,t.updateQueue=null,Ai.current=Bg,e=n(r,i)}while(_r)}if(Ai.current=ss,t=Y!==null&&Y.next!==null,an=0,ee=Y=H=null,is=!1,t)throw Error(S(300));return e}function pl(){var e=zr!==0;return zr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Oe(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=ee===null?H.memoizedState:ee.next;if(t!==null)ee=t,Y=e;else{if(e===null)throw Error(S(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function br(e,t){return typeof t=="function"?t(e):t}function po(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((an&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,H.lanes|=f,ln|=f}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,ln|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);be(s,t.memoizedState)||(me=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function mf(){}function gf(e,t){var n=H,r=Oe(),i=t(),s=!be(r.memoizedState,i);if(s&&(r.memoizedState=i,me=!0),r=r.queue,ml(wf.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,$r(9,yf.bind(null,n,r,i,t),void 0,null),te===null)throw Error(S(349));an&30||vf(n,t,i)}return i}function vf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yf(e,t,n,r){t.value=n,t.getSnapshot=r,_f(t)&&Sf(e)}function wf(e,t,n){return n(function(){_f(t)&&Sf(e)})}function _f(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function Sf(e){var t=ut(e,1);t!==null&&ze(t,e,1,-1)}function Lu(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=zg.bind(null,H,e),[t.memoizedState,e]}function $r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ef(){return Oe().memoizedState}function Oi(e,t,n,r){var i=Be();H.flags|=e,i.memoizedState=$r(1|t,n,void 0,r===void 0?null:r)}function Ps(e,t,n,r){var i=Oe();r=r===void 0?null:r;var s=void 0;if(Y!==null){var o=Y.memoizedState;if(s=o.destroy,r!==null&&fl(r,o.deps)){i.memoizedState=$r(t,n,s,r);return}}H.flags|=e,i.memoizedState=$r(1|t,n,s,r)}function Du(e,t){return Oi(8390656,8,e,t)}function ml(e,t){return Ps(2048,8,e,t)}function If(e,t){return Ps(4,2,e,t)}function kf(e,t){return Ps(4,4,e,t)}function Tf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cf(e,t,n){return n=n!=null?n.concat([e]):null,Ps(4,4,Tf.bind(null,t,e),n)}function gl(){}function Pf(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rf(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nf(e,t,n){return an&21?(be(n,t)||(n=Ld(),H.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Ug(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=ho.transition;ho.transition={};try{e(!1),t()}finally{j=n,ho.transition=r}}function xf(){return Oe().memoizedState}function Fg(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Af(e))Of(t,n);else if(n=ff(e,t,n,r),n!==null){var i=ce();ze(n,e,r,i),Lf(n,t,r)}}function zg(e,t,n){var r=Dt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Af(e))Of(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,be(a,o)){var l=t.interleaved;l===null?(i.next=i,al(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ff(e,t,i,r),n!==null&&(i=ce(),ze(n,e,r,i),Lf(n,t,r))}}function Af(e){var t=e.alternate;return e===H||t!==null&&t===H}function Of(e,t){_r=is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ga(e,n)}}var ss={readContext:Ae,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},bg={readContext:Ae,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4194308,4,Tf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fg.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:Lu,useDebugValue:gl,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Lu(!1),t=e[0];return e=Ug.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Be();if(B){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),te===null)throw Error(S(349));an&30||vf(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Du(wf.bind(null,r,s,e),[e]),r.flags|=2048,$r(9,yf.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Be(),t=te.identifierPrefix;if(B){var n=tt,r=et;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$g={readContext:Ae,useCallback:Pf,useContext:Ae,useEffect:ml,useImperativeHandle:Cf,useInsertionEffect:If,useLayoutEffect:kf,useMemo:Rf,useReducer:po,useRef:Ef,useState:function(){return po(br)},useDebugValue:gl,useDeferredValue:function(e){var t=Oe();return Nf(t,Y.memoizedState,e)},useTransition:function(){var e=po(br)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:mf,useSyncExternalStore:gf,useId:xf,unstable_isNewReconciler:!1},Bg={readContext:Ae,useCallback:Pf,useContext:Ae,useEffect:ml,useImperativeHandle:Cf,useInsertionEffect:If,useLayoutEffect:kf,useMemo:Rf,useReducer:mo,useRef:Ef,useState:function(){return mo(br)},useDebugValue:gl,useDeferredValue:function(e){var t=Oe();return Y===null?t.memoizedState=e:Nf(t,Y.memoizedState,e)},useTransition:function(){var e=mo(br)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:mf,useSyncExternalStore:gf,useId:xf,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function la(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=Dt(e),s=ot(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ot(e,s,i),t!==null&&(ze(t,e,i,r),xi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=Dt(e),s=ot(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ot(e,s,i),t!==null&&(ze(t,e,i,r),xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=Dt(e),i=ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ot(e,i,r),t!==null&&(ze(t,e,r,n),xi(t,e,r))}};function Mu(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,s):!0}function Df(e,t,n){var r=!1,i=bt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ae(s):(i=ve(t)?sn:le.current,r=t.contextTypes,s=(r=r!=null)?Bn(e,i):bt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function ua(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ll(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ae(s):(s=ve(t)?sn:le.current,i.context=Bn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(la(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Rs.enqueueReplaceState(i,i.state,null),ns(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=gm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function go(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vg=typeof WeakMap=="function"?WeakMap:Map;function Mf(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){as||(as=!0,_a=r),ca(e,t)},n}function jf(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ca(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ca(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=rv.bind(null,e,t,n),t.then(e,e))}function Fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var Hg=mt.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?df(t,null,n,r):Hn(t,e.child,n,r)}function bu(e,t,n,r,i){n=n.render;var s=t.ref;return jn(t,i),r=hl(e,t,n,r,s,i),n=pl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(B&&n&&tl(t),t.flags|=1,ue(e,t,r,i),t.child)}function $u(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!kl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Uf(e,t,s,r,i)):(e=ji(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(o,r)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=Mt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Lr(s,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,ct(e,t,i)}return da(e,t,n,r,i)}function Ff(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(xn,_e),_e|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(xn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,F(xn,_e),_e|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,F(xn,_e),_e|=r;return ue(e,t,i,n),t.child}function zf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function da(e,t,n,r,i){var s=ve(n)?sn:le.current;return s=Bn(t,s),jn(t,i),n=hl(e,t,n,r,s,i),r=pl(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(B&&r&&tl(t),t.flags|=1,ue(e,t,n,i),t.child)}function Bu(e,t,n,r,i){if(ve(n)){var s=!0;Ji(t)}else s=!1;if(jn(t,i),t.stateNode===null)Li(e,t),Df(t,n,r),ua(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=ve(n)?sn:le.current,u=Bn(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ju(t,o,r,u),wt=!1;var p=t.memoizedState;o.state=p,ns(t,r,o,i),l=t.memoizedState,a!==r||p!==l||ge.current||wt?(typeof f=="function"&&(la(t,n,f,r),l=t.memoizedState),(a=wt||Mu(t,n,a,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,hf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Me(t.type,a),o.props=u,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ae(l):(l=ve(n)?sn:le.current,l=Bn(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&ju(t,o,r,l),wt=!1,p=t.memoizedState,o.state=p,ns(t,r,o,i);var y=t.memoizedState;a!==d||p!==y||ge.current||wt?(typeof v=="function"&&(la(t,n,v,r),y=t.memoizedState),(u=wt||Mu(t,n,u,r,p,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return fa(e,t,n,r,s,i)}function fa(e,t,n,r,i,s){zf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Pu(t,n,!1),ct(e,t,s);r=t.stateNode,Hg.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Hn(t,e.child,null,s),t.child=Hn(t,null,a,s)):ue(e,t,a,s),t.memoizedState=r.state,i&&Pu(t,n,!0),t.child}function bf(e){var t=e.stateNode;t.pendingContext?Cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cu(e,t.context,!1),ul(e,t.containerInfo)}function Vu(e,t,n,r,i){return Vn(),rl(i),t.flags|=256,ue(e,t,n,r),t.child}var ha={dehydrated:null,treeContext:null,retryLane:0};function pa(e){return{baseLanes:e,cachePool:null,transitions:null}}function $f(e,t,n){var r=t.pendingProps,i=V.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(V,i&1),e===null)return oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=As(o,r,0,null),e=nn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=pa(n),t.memoizedState=ha,e):vl(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Wg(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Mt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mt(a,s):(s=nn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?pa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=ha,r}return s=e.child,e=s.sibling,r=Mt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vl(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _i(e,t,n,r){return r!==null&&rl(r),Hn(t,e.child,null,n),e=vl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wg(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=go(Error(S(422))),_i(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=As({mode:"visible",children:r.children},i,0,null),s=nn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Hn(t,e.child,null,o),t.child.memoizedState=pa(o),t.memoizedState=ha,s);if(!(t.mode&1))return _i(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=go(s,r,void 0),_i(e,t,o,r)}if(a=(o&e.childLanes)!==0,me||a){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ut(e,i),ze(r,e,i,-1))}return Il(),r=go(Error(S(421))),_i(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=iv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Se=At(i.nextSibling),Ee=t,B=!0,Ue=null,e!==null&&(Pe[Re++]=et,Pe[Re++]=tt,Pe[Re++]=on,et=e.id,tt=e.overflow,on=t),t=vl(t,r.children),t.flags|=4096,t)}function Hu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function vo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Bf(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ue(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hu(e,n,t);else if(e.tag===19)Hu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&rs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vo(t,!0,n,null,s);break;case"together":vo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kg(e,t,n){switch(t.tag){case 3:bf(t),Vn();break;case 5:pf(t);break;case 1:ve(t.type)&&Ji(t);break;case 4:ul(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?$f(e,t,n):(F(V,V.current&1),e=ct(e,t,n),e!==null?e.sibling:null);F(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Ff(e,t,n)}return ct(e,t,n)}var Vf,ma,Hf,Wf;Vf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ma=function(){};Hf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(We.current);var s=null;switch(n){case"input":i=Uo(e,i),r=Uo(e,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=bo(e,i),r=bo(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qi)}Bo(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&b("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Wf=function(e,t,n,r){n!==r&&(t.flags|=4)};function ur(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gg(e,t,n){var r=t.pendingProps;switch(nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&Yi(),oe(t),null;case 3:return r=t.stateNode,Wn(),$(ge),$(le),dl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(Ia(Ue),Ue=null))),ma(e,t),oe(t),null;case 5:cl(t);var i=Zt(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Hf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=Zt(We.current),yi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ve]=t,r[jr]=s,e=(t.mode&1)!==0,n){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)b(pr[i],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Zl(r,s),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},b("invalid",r);break;case"textarea":tu(r,s),b("invalid",r)}Bo(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&vi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vi(r.textContent,a,e),i=["children",""+a]):Cr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&b("scroll",r)}switch(n){case"input":ui(r),eu(r,s,!0);break;case"textarea":ui(r),nu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ve]=t,e[jr]=r,Vf(e,t,!1,!1),t.stateNode=e;e:{switch(o=Vo(n,r),n){case"dialog":b("cancel",e),b("close",e),i=r;break;case"iframe":case"object":case"embed":b("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)b(pr[i],e);i=r;break;case"source":b("error",e),i=r;break;case"img":case"image":case"link":b("error",e),b("load",e),i=r;break;case"details":b("toggle",e),i=r;break;case"input":Zl(e,r),i=Uo(e,r),b("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),b("invalid",e);break;case"textarea":tu(e,r),i=bo(e,r),b("invalid",e);break;default:i=r}Bo(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sd(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wd(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pr(e,l):typeof l=="number"&&Pr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Cr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&b("scroll",e):l!=null&&$a(e,s,l,o))}switch(n){case"input":ui(e),eu(e,r,!1);break;case"textarea":ui(e),nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?On(e,!!r.multiple,s,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Wf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Zt(Fr.current),Zt(We.current),yi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(s=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return oe(t),null;case 13:if($(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Se!==null&&t.mode&1&&!(t.flags&128))uf(),Vn(),t.flags|=98560,s=!1;else if(s=yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Ve]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),s=!1}else Ue!==null&&(Ia(Ue),Ue=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?J===0&&(J=3):Il())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return Wn(),ma(e,t),e===null&&Dr(t.stateNode.containerInfo),oe(t),null;case 10:return ol(t.type._context),oe(t),null;case 17:return ve(t.type)&&Yi(),oe(t),null;case 19:if($(V),s=t.memoizedState,s===null)return oe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ur(s,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=rs(e),o!==null){for(t.flags|=128,ur(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(V,V.current&1|2),t.child}e=e.sibling}s.tail!==null&&q()>Gn&&(t.flags|=128,r=!0,ur(s,!1),t.lanes=4194304)}else{if(!r)if(e=rs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ur(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!B)return oe(t),null}else 2*q()-s.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,ur(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=q(),t.sibling=null,n=V.current,F(V,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return El(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function qg(e,t){switch(nl(t),t.tag){case 1:return ve(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),$(ge),$(le),dl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cl(t),null;case 13:if($(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(V),null;case 4:return Wn(),null;case 10:return ol(t.type._context),null;case 22:case 23:return El(),null;case 24:return null;default:return null}}var Si=!1,ae=!1,Qg=typeof WeakSet=="function"?WeakSet:Set,T=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function ga(e,t,n){try{n()}catch(r){K(e,t,r)}}var Wu=!1;function Yg(e,t){if(Zo=Ki,e=Qd(),el(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++u===i&&(a=o),p===s&&++f===r&&(l=o),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ea={focusedElem:e,selectionRange:n},Ki=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,I=y.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:Me(t.type,_),I);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return y=Wu,Wu=!1,y}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ga(t,n,s)}i=i.next}while(i!==r)}}function Ns(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function va(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kf(e){var t=e.alternate;t!==null&&(e.alternate=null,Kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[jr],delete t[ra],delete t[Og],delete t[Lg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi));else if(r!==4&&(e=e.child,e!==null))for(ya(e,t,n),e=e.sibling;e!==null;)ya(e,t,n),e=e.sibling}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}var ne=null,je=!1;function gt(e,t,n){for(n=n.child;n!==null;)qf(e,t,n),n=n.sibling}function qf(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Ss,n)}catch{}switch(n.tag){case 5:ae||Nn(n,t);case 6:var r=ne,i=je;ne=null,gt(e,t,n),ne=r,je=i,ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(je?(e=ne,n=n.stateNode,e.nodeType===8?uo(e.parentNode,n):e.nodeType===1&&uo(e,n),Ar(e)):uo(ne,n.stateNode));break;case 4:r=ne,i=je,ne=n.stateNode.containerInfo,je=!0,gt(e,t,n),ne=r,je=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ga(n,t,o),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!ae&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,gt(e,t,n),ae=r):gt(e,t,n);break;default:gt(e,t,n)}}function Gu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qg),t.forEach(function(r){var i=sv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,je=!1;break e;case 3:ne=a.stateNode.containerInfo,je=!0;break e;case 4:ne=a.stateNode.containerInfo,je=!0;break e}a=a.return}if(ne===null)throw Error(S(160));qf(s,o,i),ne=null,je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qf(t,e),t=t.sibling}function Qf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),$e(e),r&4){try{Sr(3,e,e.return),Ns(3,e)}catch(_){K(e,e.return,_)}try{Sr(5,e,e.return)}catch(_){K(e,e.return,_)}}break;case 1:De(t,e),$e(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(De(t,e),$e(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{Pr(i,"")}catch(_){K(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gd(i,s),Vo(a,o);var u=Vo(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Sd(i,d):f==="dangerouslySetInnerHTML"?wd(i,d):f==="children"?Pr(i,d):$a(i,f,d,u)}switch(a){case"input":Fo(i,s);break;case"textarea":vd(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?On(i,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?On(i,!!s.multiple,s.defaultValue,!0):On(i,!!s.multiple,s.multiple?[]:"",!1))}i[jr]=s}catch(_){K(e,e.return,_)}}break;case 6:if(De(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){K(e,e.return,_)}}break;case 3:if(De(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ar(t.containerInfo)}catch(_){K(e,e.return,_)}break;case 4:De(t,e),$e(e);break;case 13:De(t,e),$e(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_l=q())),r&4&&Gu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||f,De(t,e),ae=u):De(t,e),$e(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(d=T=f;T!==null;){switch(p=T,v=p.child,p.tag){case 0:case 11:case 14:case 15:Sr(4,p,p.return);break;case 1:Nn(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){K(r,n,_)}}break;case 5:Nn(p,p.return);break;case 22:if(p.memoizedState!==null){Qu(d);continue}}v!==null?(v.return=p,T=v):Qu(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_d("display",o))}catch(_){K(e,e.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){K(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:De(t,e),$e(e),r&4&&Gu(e);break;case 21:break;default:De(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pr(i,""),r.flags&=-33);var s=Ku(e);wa(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ku(e);ya(e,a,o);break;default:throw Error(S(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jg(e,t,n){T=e,Yf(e)}function Yf(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Si;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=Si;var u=ae;if(Si=o,(ae=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?Yu(i):l!==null?(l.return=o,T=l):Yu(i);for(;s!==null;)T=s,Yf(s),s=s.sibling;T=i,Si=a,ae=u}qu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):qu(e)}}function qu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Ns(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ou(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ou(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ar(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||t.flags&512&&va(t)}catch(p){K(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Qu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Yu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ns(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var s=t.return;try{va(t)}catch(l){K(t,s,l)}break;case 5:var o=t.return;try{va(t)}catch(l){K(t,o,l)}}}catch(l){K(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var Xg=Math.ceil,os=mt.ReactCurrentDispatcher,yl=mt.ReactCurrentOwner,xe=mt.ReactCurrentBatchConfig,M=0,te=null,Q=null,re=0,_e=0,xn=Bt(0),J=0,Br=null,ln=0,xs=0,wl=0,Er=null,pe=null,_l=0,Gn=1/0,Je=null,as=!1,_a=null,Lt=null,Ei=!1,Ct=null,ls=0,Ir=0,Sa=null,Di=-1,Mi=0;function ce(){return M&6?q():Di!==-1?Di:Di=q()}function Dt(e){return e.mode&1?M&2&&re!==0?re&-re:Mg.transition!==null?(Mi===0&&(Mi=Ld()),Mi):(e=j,e!==0||(e=window.event,e=e===void 0?16:bd(e.type)),e):1}function ze(e,t,n,r){if(50<Ir)throw Ir=0,Sa=null,Error(S(185));Qr(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(xs|=n),J===4&&St(e,re)),ye(e,r),n===1&&M===0&&!(t.mode&1)&&(Gn=q()+500,Cs&&Vt()))}function ye(e,t){var n=e.callbackNode;Mm(e,t);var r=Wi(e,e===te?re:0);if(r===0)n!==null&&su(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&su(n),t===1)e.tag===0?Dg(Ju.bind(null,e)):of(Ju.bind(null,e)),xg(function(){!(M&6)&&Vt()}),n=null;else{switch(Dd(r)){case 1:n=Ka;break;case 4:n=Ad;break;case 16:n=Hi;break;case 536870912:n=Od;break;default:n=Hi}n=ih(n,Jf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jf(e,t){if(Di=-1,Mi=0,M&6)throw Error(S(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Wi(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=us(e,r);else{t=r;var i=M;M|=2;var s=Zf();(te!==e||re!==t)&&(Je=null,Gn=q()+500,tn(e,t));do try{tv();break}catch(a){Xf(e,a)}while(1);sl(),os.current=s,M=i,Q!==null?t=0:(te=null,re=0,t=J)}if(t!==0){if(t===2&&(i=qo(e),i!==0&&(r=i,t=Ea(e,i))),t===1)throw n=Br,tn(e,0),St(e,r),ye(e,q()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!Zg(i)&&(t=us(e,r),t===2&&(s=qo(e),s!==0&&(r=s,t=Ea(e,s))),t===1))throw n=Br,tn(e,0),St(e,r),ye(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:qt(e,pe,Je);break;case 3:if(St(e,r),(r&130023424)===r&&(t=_l+500-q(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=na(qt.bind(null,e,pe,Je),t);break}qt(e,pe,Je);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Fe(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xg(r/1960))-r,10<r){e.timeoutHandle=na(qt.bind(null,e,pe,Je),r);break}qt(e,pe,Je);break;case 5:qt(e,pe,Je);break;default:throw Error(S(329))}}}return ye(e,q()),e.callbackNode===n?Jf.bind(null,e):null}function Ea(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=us(e,t),e!==2&&(t=pe,pe=n,t!==null&&Ia(t)),e}function Ia(e){pe===null?pe=e:pe.push.apply(pe,e)}function Zg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!be(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~wl,t&=~xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Ju(e){if(M&6)throw Error(S(327));Un();var t=Wi(e,0);if(!(t&1))return ye(e,q()),null;var n=us(e,t);if(e.tag!==0&&n===2){var r=qo(e);r!==0&&(t=r,n=Ea(e,r))}if(n===1)throw n=Br,tn(e,0),St(e,t),ye(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,pe,Je),ye(e,q()),null}function Sl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Gn=q()+500,Cs&&Vt())}}function un(e){Ct!==null&&Ct.tag===0&&!(M&6)&&Un();var t=M;M|=1;var n=xe.transition,r=j;try{if(xe.transition=null,j=1,e)return e()}finally{j=r,xe.transition=n,M=t,!(M&6)&&Vt()}}function El(){_e=xn.current,$(xn)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ng(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:Wn(),$(ge),$(le),dl();break;case 5:cl(r);break;case 4:Wn();break;case 13:$(V);break;case 19:$(V);break;case 10:ol(r.type._context);break;case 22:case 23:El()}n=n.return}if(te=e,Q=e=Mt(e.current,null),re=_e=t,J=0,Br=null,wl=xs=ln=0,pe=Er=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xt=null}return e}function Xf(e,t){do{var n=Q;try{if(sl(),Ai.current=ss,is){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}is=!1}if(an=0,ee=Y=H=null,_r=!1,zr=0,yl.current=null,n===null||n.return===null){J=1,Br=t,Q=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Fu(o);if(v!==null){v.flags&=-257,zu(v,o,a,s,t),v.mode&1&&Uu(s,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){Uu(s,u,t),Il();break e}l=Error(S(426))}}else if(B&&a.mode&1){var I=Fu(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),zu(I,o,a,s,t),rl(Kn(l,a));break e}}s=l=Kn(l,a),J!==4&&(J=2),Er===null?Er=[s]:Er.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=Mf(s,l,t);Au(s,h);break e;case 1:a=l;var c=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Lt===null||!Lt.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=jf(s,a,t);Au(s,w);break e}}s=s.return}while(s!==null)}th(n)}catch(k){t=k,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(1)}function Zf(){var e=os.current;return os.current=ss,e===null?ss:e}function Il(){(J===0||J===3||J===2)&&(J=4),te===null||!(ln&268435455)&&!(xs&268435455)||St(te,re)}function us(e,t){var n=M;M|=2;var r=Zf();(te!==e||re!==t)&&(Je=null,tn(e,t));do try{ev();break}catch(i){Xf(e,i)}while(1);if(sl(),M=n,os.current=r,Q!==null)throw Error(S(261));return te=null,re=0,J}function ev(){for(;Q!==null;)eh(Q)}function tv(){for(;Q!==null&&!Cm();)eh(Q)}function eh(e){var t=rh(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?th(e):Q=t,yl.current=null}function th(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qg(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Q=null;return}}else if(n=Gg(n,t,_e),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);J===0&&(J=5)}function qt(e,t,n){var r=j,i=xe.transition;try{xe.transition=null,j=1,nv(e,t,n,r)}finally{xe.transition=i,j=r}return null}function nv(e,t,n,r){do Un();while(Ct!==null);if(M&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(jm(e,s),e===te&&(Q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ei||(Ei=!0,ih(Hi,function(){return Un(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xe.transition,xe.transition=null;var o=j;j=1;var a=M;M|=4,yl.current=null,Yg(e,n),Qf(n,e),Eg(ea),Ki=!!Zo,ea=Zo=null,e.current=n,Jg(n),Pm(),M=a,j=o,xe.transition=s}else e.current=n;if(Ei&&(Ei=!1,Ct=e,ls=i),s=e.pendingLanes,s===0&&(Lt=null),xm(n.stateNode),ye(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(as)throw as=!1,e=_a,_a=null,e;return ls&1&&e.tag!==0&&Un(),s=e.pendingLanes,s&1?e===Sa?Ir++:(Ir=0,Sa=e):Ir=0,Vt(),null}function Un(){if(Ct!==null){var e=Dd(ls),t=xe.transition,n=j;try{if(xe.transition=null,j=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,ls=0,M&6)throw Error(S(331));var i=M;for(M|=4,T=e.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:Sr(8,f,s)}var d=f.child;if(d!==null)d.return=f,T=d;else for(;T!==null;){f=T;var p=f.sibling,v=f.return;if(Kf(f),f===u){T=null;break}if(p!==null){p.return=v,T=p;break}T=v}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var I=_.sibling;_.sibling=null,_=I}while(_!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sr(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,T=h;break e}T=s.return}}var c=e.current;for(T=c;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ns(9,a)}}catch(k){K(a,a.return,k)}if(a===o){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(M=i,Vt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Ss,e)}catch{}r=!0}return r}finally{j=n,xe.transition=t}}return!1}function Xu(e,t,n){t=Kn(n,t),t=Mf(e,t,1),e=Ot(e,t,1),t=ce(),e!==null&&(Qr(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)Xu(e,e,n);else for(;t!==null;){if(t.tag===3){Xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Kn(n,e),e=jf(t,e,1),t=Ot(t,e,1),e=ce(),t!==null&&(Qr(t,1,e),ye(t,e));break}}t=t.return}}function rv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>q()-_l?tn(e,0):wl|=n),ye(e,t)}function nh(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=ce();e=ut(e,t),e!==null&&(Qr(e,t,n),ye(e,n))}function iv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nh(e,n)}function sv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),nh(e,n)}var rh;rh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Kg(e,t,n);me=!!(e.flags&131072)}else me=!1,B&&t.flags&1048576&&af(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var i=Bn(t,le.current);jn(t,n),i=hl(null,t,r,e,i,n);var s=pl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(s=!0,Ji(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ll(t),i.updater=Rs,t.stateNode=i,i._reactInternals=t,ua(t,r,e,n),t=fa(null,t,r,!0,s,n)):(t.tag=0,B&&s&&tl(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=av(r),e=Me(r,e),i){case 0:t=da(null,t,r,e,n);break e;case 1:t=Bu(null,t,r,e,n);break e;case 11:t=bu(null,t,r,e,n);break e;case 14:t=$u(null,t,r,Me(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),da(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Bu(e,t,r,i,n);case 3:e:{if(bf(t),e===null)throw Error(S(387));r=t.pendingProps,s=t.memoizedState,i=s.element,hf(e,t),ns(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Kn(Error(S(423)),t),t=Vu(e,t,r,n,i);break e}else if(r!==i){i=Kn(Error(S(424)),t),t=Vu(e,t,r,n,i);break e}else for(Se=At(t.stateNode.containerInfo.firstChild),Ee=t,B=!0,Ue=null,n=df(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===i){t=ct(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return pf(t),e===null&&oa(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ta(r,i)?o=null:s!==null&&ta(r,s)&&(t.flags|=32),zf(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&oa(t),null;case 13:return $f(e,t,n);case 4:return ul(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),bu(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,F(es,r._currentValue),r._currentValue=o,s!==null)if(be(s.value,o)){if(s.children===i.children&&!ge.current){t=ct(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ot(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),aa(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),aa(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jn(t,n),i=Ae(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),$u(e,t,r,i,n);case 15:return Uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Li(e,t),t.tag=1,ve(r)?(e=!0,Ji(t)):e=!1,jn(t,n),Df(t,r,i),ua(t,r,i,n),fa(null,t,r,!0,e,n);case 19:return Bf(e,t,n);case 22:return Ff(e,t,n)}throw Error(S(156,t.tag))};function ih(e,t){return xd(e,t)}function ov(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new ov(e,t,n,r)}function kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function av(e){if(typeof e=="function")return kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Va)return 11;if(e===Ha)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ji(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")kl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case _n:return nn(n.children,i,s,t);case Ba:o=8,i|=8;break;case Lo:return e=Ne(12,n,t,i|2),e.elementType=Lo,e.lanes=s,e;case Do:return e=Ne(13,n,t,i),e.elementType=Do,e.lanes=s,e;case Mo:return e=Ne(19,n,t,i),e.elementType=Mo,e.lanes=s,e;case hd:return As(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dd:o=10;break e;case fd:o=9;break e;case Va:o=11;break e;case Ha:o=14;break e;case yt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function nn(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function As(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=hd,e.lanes=n,e.stateNode={isHidden:!1},e}function yo(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function wo(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xs(0),this.expirationTimes=Xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tl(e,t,n,r,i,s,o,a,l){return e=new lv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ne(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ll(s),e}function uv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sh(e){if(!e)return bt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ve(n))return sf(e,n,t)}return t}function oh(e,t,n,r,i,s,o,a,l){return e=Tl(n,r,!0,e,i,s,o,a,l),e.context=sh(null),n=e.current,r=ce(),i=Dt(n),s=ot(r,i),s.callback=t??null,Ot(n,s,i),e.current.lanes=i,Qr(e,i,r),ye(e,r),e}function Os(e,t,n,r){var i=t.current,s=ce(),o=Dt(i);return n=sh(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(i,t,o),e!==null&&(ze(e,i,o,s),xi(e,i,o)),o}function cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cl(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function cv(){return null}var ah=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pl(e){this._internalRoot=e}Ls.prototype.render=Pl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Os(e,t,null,null)};Ls.prototype.unmount=Pl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){Os(null,e,null,null)}),t[lt]=null}};function Ls(e){this._internalRoot=e}Ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&zd(e)}};function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function dv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=cs(o);s.call(u)}}var o=oh(t,r,e,0,null,!1,!1,"",ec);return e._reactRootContainer=o,e[lt]=o.current,Dr(e.nodeType===8?e.parentNode:e),un(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=cs(l);a.call(u)}}var l=Tl(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=l,e[lt]=l.current,Dr(e.nodeType===8?e.parentNode:e),un(function(){Os(t,l,n,r)}),l}function Ms(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=cs(o);a.call(l)}}Os(t,o,e,i)}else o=dv(n,t,e,i,r);return cs(o)}Md=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(Ga(t,n|1),ye(t,q()),!(M&6)&&(Gn=q()+500,Vt()))}break;case 13:un(function(){var r=ut(e,1);if(r!==null){var i=ce();ze(r,e,1,i)}}),Cl(e,1)}};qa=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=ce();ze(t,e,134217728,n)}Cl(e,134217728)}};jd=function(e){if(e.tag===13){var t=Dt(e),n=ut(e,t);if(n!==null){var r=ce();ze(n,e,t,r)}Cl(e,t)}};Ud=function(){return j};Fd=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};Wo=function(e,t,n){switch(t){case"input":if(Fo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ts(r);if(!i)throw Error(S(90));md(r),Fo(r,i)}}}break;case"textarea":vd(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};kd=Sl;Td=un;var fv={usingClientEntryPoint:!1,Events:[Jr,kn,Ts,Ed,Id,Sl]},cr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hv={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rd(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{Ss=Ii.inject(hv),He=Ii}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rl(t))throw Error(S(200));return uv(e,t,null,n)};Te.createRoot=function(e,t){if(!Rl(e))throw Error(S(299));var n=!1,r="",i=ah;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tl(e,1,!1,null,null,n,!1,r,i),e[lt]=t.current,Dr(e.nodeType===8?e.parentNode:e),new Pl(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Rd(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return un(e)};Te.hydrate=function(e,t,n){if(!Ds(t))throw Error(S(200));return Ms(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Rl(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ah;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=oh(t,null,e,1,n??null,i,!1,s,o),e[lt]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ls(t)};Te.render=function(e,t,n){if(!Ds(t))throw Error(S(200));return Ms(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Ds(e))throw Error(S(40));return e._reactRootContainer?(un(function(){Ms(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Te.unstable_batchedUpdates=Sl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ds(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ms(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function lh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lh)}catch(e){console.error(e)}}lh(),ad.exports=Te;var pv=ad.exports,tc=pv;Ao.createRoot=tc.createRoot,Ao.hydrateRoot=tc.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const nc="popstate";function mv(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return ka("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ch(i)}return vv(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gv(){return Math.random().toString(36).substr(2,8)}function rc(e,t){return{usr:e.state,key:e.key,idx:t}}function ka(e,t,n,r){return n===void 0&&(n=null),Vr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:n,key:t&&t.key||r||gv()})}function ch(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function vv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Pt.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(Vr({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=Pt.Pop;let I=f(),h=I==null?null:I-u;u=I,l&&l({action:a,location:_.location,delta:h})}function p(I,h){a=Pt.Push;let c=ka(_.location,I,h);n&&n(c,I),u=f()+1;let m=rc(c,u),w=_.createHref(c);try{o.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function v(I,h){a=Pt.Replace;let c=ka(_.location,I,h);n&&n(c,I),u=f();let m=rc(c,u),w=_.createHref(c);o.replaceState(m,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function y(I){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof I=="string"?I:ch(I);return c=c.replace(/ $/,"%20"),X(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let _={get action(){return a},get location(){return e(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(nc,d),l=I,()=>{i.removeEventListener(nc,d),l=null}},createHref(I){return t(i,I)},createURL:y,encodeLocation(I){let h=y(I);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:v,go(I){return o.go(I)}};return _}var ic;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ic||(ic={}));function yv(e,t,n){return n===void 0&&(n="/"),wv(e,t,n,!1)}function wv(e,t,n,r){let i=typeof t=="string"?Jn(t):t,s=hh(i.pathname||"/",n);if(s==null)return null;let o=dh(e);_v(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=Av(s);a=Nv(o[l],u,r)}return a}function dh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(X(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=rn([r,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(X(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dh(s.children,t,f,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Pv(u,s.index),routesMeta:f})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of fh(s.path))i(s,o,l)}),t}function fh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=fh(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function _v(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Rv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Sv=/^:[\w-]+$/,Ev=3,Iv=2,kv=1,Tv=10,Cv=-2,sc=e=>e==="*";function Pv(e,t){let n=e.split("/"),r=n.length;return n.some(sc)&&(r+=Cv),t&&(r+=Iv),n.filter(i=>!sc(i)).reduce((i,s)=>i+(Sv.test(s)?Ev:s===""?kv:Tv),r)}function Rv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Nv(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,f=s==="/"?t:t.slice(s.length)||"/",d=oc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),p=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=oc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:rn([s,d.pathname]),pathnameBase:Uv(rn([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=rn([s,d.pathnameBase]))}return o}function oc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:p,isOptional:v}=f;if(p==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return v&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function xv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),uh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Av(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return uh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ov(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jn(e):e;return{pathname:n?n.startsWith("/")?n:Lv(n,t):t,search:Fv(r),hash:zv(i)}}function Lv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _o(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Mv(e,t){let n=Dv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jn(e):(i=Vr({},e),X(!i.pathname||!i.pathname.includes("?"),_o("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),_o("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),_o("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=Ov(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const rn=e=>e.join("/").replace(/\/\/+/g,"/"),Uv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ph=["post","put","patch","delete"];new Set(ph);const $v=["get",...ph];new Set($v);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(this,arguments)}const Nl=E.createContext(null),Bv=E.createContext(null),js=E.createContext(null),Us=E.createContext(null),Xn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),mh=E.createContext(null);function Fs(){return E.useContext(Us)!=null}function xl(){return Fs()||X(!1),E.useContext(Us).location}function gh(e){E.useContext(js).static||E.useLayoutEffect(e)}function vh(){let{isDataRoute:e}=E.useContext(Xn);return e?ty():Vv()}function Vv(){Fs()||X(!1);let e=E.useContext(Nl),{basename:t,future:n,navigator:r}=E.useContext(js),{matches:i}=E.useContext(Xn),{pathname:s}=xl(),o=JSON.stringify(Mv(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return gh(()=>{a.current=!0}),E.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=jv(u,JSON.parse(o),s,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:rn([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,o,s,e])}function Hv(e,t){return Wv(e,t)}function Wv(e,t,n,r){Fs()||X(!1);let{navigator:i}=E.useContext(js),{matches:s}=E.useContext(Xn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=xl(),f;if(t){var d;let I=typeof t=="string"?Jn(t):t;l==="/"||(d=I.pathname)!=null&&d.startsWith(l)||X(!1),f=I}else f=u;let p=f.pathname||"/",v=p;if(l!=="/"){let I=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(I.length).join("/")}let y=yv(e,{pathname:v}),_=Yv(y&&y.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:rn([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:rn([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return t&&_?E.createElement(Us.Provider,{value:{location:Hr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Pt.Pop}},_):_}function Kv(){let e=ey(),t=bv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,s)}const Gv=E.createElement(Kv,null);class qv extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Xn.Provider,{value:this.props.routeContext},E.createElement(mh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qv(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Nl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Xn.Provider,{value:t},r)}function Yv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||X(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:p,errors:v}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,d,p)=>{let v,y=!1,_=null,I=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||Gv,l&&(u<0&&p===0?(ny("route-fallback",!1),y=!0,I=null):u===p&&(y=!0,I=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,p+1)),c=()=>{let m;return v?m=_:y?m=I:d.route.Component?m=E.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=f,E.createElement(Qv,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?E.createElement(qv,{location:n.location,revalidation:n.revalidation,component:_,error:v,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var yh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(yh||{}),ds=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ds||{});function Jv(e){let t=E.useContext(Nl);return t||X(!1),t}function Xv(e){let t=E.useContext(Bv);return t||X(!1),t}function Zv(e){let t=E.useContext(Xn);return t||X(!1),t}function wh(e){let t=Zv(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function ey(){var e;let t=E.useContext(mh),n=Xv(ds.UseRouteError),r=wh(ds.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ty(){let{router:e}=Jv(yh.UseNavigateStable),t=wh(ds.UseNavigateStable),n=E.useRef(!1);return gh(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Hr({fromRouteId:t},s)))},[e,t])}const ac={};function ny(e,t,n){!t&&!ac[e]&&(ac[e]=!0)}function Qt(e){X(!1)}function ry(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pt.Pop,navigator:s,static:o=!1,future:a}=e;Fs()&&X(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:s,static:o,future:Hr({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Jn(r));let{pathname:f="/",search:d="",hash:p="",state:v=null,key:y="default"}=r,_=E.useMemo(()=>{let I=hh(f,l);return I==null?null:{location:{pathname:I,search:d,hash:p,state:v,key:y},navigationType:i}},[l,f,d,p,v,y,i]);return _==null?null:E.createElement(js.Provider,{value:u},E.createElement(Us.Provider,{children:n,value:_}))}function iy(e){let{children:t,location:n}=e;return Hv(Ta(t),n)}new Promise(()=>{});function Ta(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let s=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Ta(r.props.children,s));return}r.type!==Qt&&X(!1),!r.props.index||!r.props.children||X(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ta(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const sy="6";try{window.__reactRouterVersion=sy}catch{}const oy="startTransition",lc=rm[oy];function ay(e){let{basename:t,children:n,future:r,window:i}=e,s=E.useRef();s.current==null&&(s.current=mv({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=E.useCallback(d=>{u&&lc?lc(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>o.listen(f),[o,f]),E.createElement(ry,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var uc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(uc||(uc={}));var cc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cc||(cc={}));const ly=({filters:e,renderFilter:t})=>g.jsxs("aside",{className:"sidebar",children:[g.jsx("h3",{children:"Filters"}),g.jsx("ul",{children:e.map((n,r)=>g.jsx("li",{children:t(n)},r))})]});const uy=(e,t)=>e.length===0?t:t.filter(n=>e.every(r=>n.body.toLowerCase().includes(r.toLowerCase())));function cy(){const[e,t]=E.useState([]),[n,r]=E.useState([]),[i,s]=E.useState([]),[o,a]=E.useState(!0),[l,u]=E.useState(null),f=[{label:"Department",value:"department"},{label:"Research Type",value:"researchType"},{label:"Location",value:"location"}];E.useEffect(()=>{(async()=>{a(!0),u(null);try{const v=await fetch("https://research-finder-server.vercel.app/posts");if(!v.ok)throw new Error(`Error fetching posts: ${v.statusText}`);const y=await v.json();t(y),r(y)}catch(v){console.error("Error fetching posts:",v),u("Failed to load research opportunities.")}finally{a(!1)}})()},[]);const d=p=>{const v=i.includes(p)?i.filter(y=>y!==p):[...i,p];s(v),r(uy(v,e))};return g.jsx("div",{className:"home-container",children:g.jsxs("div",{className:"main-content",children:[g.jsx(ly,{filters:f,renderFilter:p=>g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",value:p.value,onChange:()=>d(p.value)}),p.label]})}),g.jsxs("div",{className:"postings-container",children:[g.jsx("h2",{children:"Research Opportunities"}),o&&g.jsx("p",{children:"Loading research opportunities..."}),l&&g.jsx("p",{className:"error",children:l}),!o&&!l&&n.length===0&&g.jsx("p",{children:"No research opportunities match your filters."}),!o&&!l&&n.length>0&&n.map(p=>g.jsxs("div",{className:"post-card",children:[g.jsx("h3",{children:p.title}),g.jsx("p",{children:p.body}),g.jsxs("p",{children:[g.jsx("strong",{children:"Compensation:"})," ",p.compensation||"Not specified"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Organization:"})," ",p.organization||"Unknown"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Researcher:"})," ",p.researcherName||"Unknown"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Work Type:"})," ",p.workType||"Not specified"]})]},p.id))]})]})})}const dy=()=>{const[e,t]=E.useState([]),[n,r]=E.useState(!0),[i,s]=E.useState(null);return E.useEffect(()=>{(async()=>{r(!0),s(null);try{const a=await fetch("http://localhost:3000/inbox");if(!a.ok)throw new Error("Failed to fetch messages");const l=await a.json();t(l)}catch(a){console.error("Error fetching messages:",a),s("Failed to load inbox. Please try again later.")}finally{r(!1)}})()},[]),g.jsxs("div",{className:"user-page",children:[g.jsx("h1",{children:"Welcome, [User Name]"}),g.jsxs("section",{className:"user-info",children:[g.jsx("h2",{children:"Your Information"}),g.jsx("p",{children:"Email: user@example.com"}),g.jsx("p",{children:"Member since: January 2024"})]}),g.jsxs("section",{className:"user-inbox",children:[g.jsx("h2",{children:"Inbox"}),n&&g.jsx("p",{children:"Loading messages..."}),i&&g.jsx("p",{className:"error",children:i}),!n&&!i&&e.length===0&&g.jsx("p",{children:"Your inbox is empty."}),!n&&!i&&e.length>0&&g.jsx("ul",{children:e.map(o=>g.jsxs("li",{className:"inbox-message",children:[g.jsx("strong",{children:o.sender}),": ",o.text,g.jsx("p",{className:"timestamp",children:o.timestamp})]},o.id))})]})]})};/**
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
 */const _h=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},fy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Sh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(p=64)),r.push(n[f],n[d],n[p],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):fy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new hy;const p=s<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class hy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const py=function(e){const t=_h(e);return Sh.encodeByteArray(t,!0)},Eh=function(e){return py(e).replace(/\./g,"")},Ih=function(e){try{return Sh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function my(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gy=()=>my().__FIREBASE_DEFAULTS__,vy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},yy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ih(e[1]);return t&&JSON.parse(t)},Al=()=>{try{return gy()||vy()||yy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},wy=e=>{var t,n;return(n=(t=Al())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},kh=()=>{var e;return(e=Al())===null||e===void 0?void 0:e.config},Th=e=>{var t;return(t=Al())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class _y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Ey(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ch(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Iy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ky(){const e=de();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ph(){try{return typeof indexedDB=="object"}catch{return!1}}function Rh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Ty(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Cy="FirebaseError";class Ye extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Cy,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Py(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ye(i,a,r)}}function Py(e,t){return e.replace(Ry,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ry=/\{\$([^}]+)}/g;function Ny(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Wr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(dc(s)&&dc(o)){if(!Wr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dc(e){return e!==null&&typeof e=="object"}/**
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
 */function Zr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function xy(e,t){const n=new Ay(e,t);return n.subscribe.bind(n)}class Ay{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Oy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=So),i.error===void 0&&(i.error=So),i.complete===void 0&&(i.complete=So);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Oy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function So(){}/**
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
 */const Ly=1e3,Dy=2,My=4*60*60*1e3,jy=.5;function fc(e,t=Ly,n=Dy){const r=t*Math.pow(n,e),i=Math.round(jy*r*(Math.random()-.5)*2);return Math.min(My,r+i)}/**
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
 */function Ht(e){return e&&e._delegate?e._delegate:e}class Qe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Uy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new _y;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zy(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fy(e){return e===Yt?void 0:e}function zy(e){return e.instantiationMode==="EAGER"}/**
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
 */class by{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Uy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const $y={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},By=U.INFO,Vy={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Hy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Vy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ol{constructor(t){this.name=t,this._logLevel=By,this._logHandler=Hy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$y[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Wy=(e,t)=>t.some(n=>e instanceof n);let hc,pc;function Ky(){return hc||(hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gy(){return pc||(pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nh=new WeakMap,Ca=new WeakMap,xh=new WeakMap,Eo=new WeakMap,Ll=new WeakMap;function qy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(jt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Nh.set(n,e)}).catch(()=>{}),Ll.set(t,e),t}function Qy(e){if(Ca.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ca.set(e,t)}let Pa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ca.get(e);if(t==="objectStoreNames")return e.objectStoreNames||xh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Yy(e){Pa=e(Pa)}function Jy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Io(this),t,...n);return xh.set(r,t.sort?t.sort():[t]),jt(r)}:Gy().includes(e)?function(...t){return e.apply(Io(this),t),jt(Nh.get(this))}:function(...t){return jt(e.apply(Io(this),t))}}function Xy(e){return typeof e=="function"?Jy(e):(e instanceof IDBTransaction&&Qy(e),Wy(e,Ky())?new Proxy(e,Pa):e)}function jt(e){if(e instanceof IDBRequest)return qy(e);if(Eo.has(e))return Eo.get(e);const t=Xy(e);return t!==e&&(Eo.set(e,t),Ll.set(t,e)),t}const Io=e=>Ll.get(e);function Ah(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=jt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(jt(o.result),l.oldVersion,l.newVersion,jt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Zy=["get","getKey","getAll","getAllKeys","count"],e0=["put","add","delete","clear"],ko=new Map;function mc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ko.get(t))return ko.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=e0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zy.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ko.set(t,s),s}Yy(e=>({...e,get:(t,n,r)=>mc(t,n)||e.get(t,n,r),has:(t,n)=>!!mc(t,n)||e.has(t,n)}));/**
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
 */class t0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function n0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ra="@firebase/app",gc="0.10.13";/**
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
 */const dt=new Ol("@firebase/app"),r0="@firebase/app-compat",i0="@firebase/analytics-compat",s0="@firebase/analytics",o0="@firebase/app-check-compat",a0="@firebase/app-check",l0="@firebase/auth",u0="@firebase/auth-compat",c0="@firebase/database",d0="@firebase/data-connect",f0="@firebase/database-compat",h0="@firebase/functions",p0="@firebase/functions-compat",m0="@firebase/installations",g0="@firebase/installations-compat",v0="@firebase/messaging",y0="@firebase/messaging-compat",w0="@firebase/performance",_0="@firebase/performance-compat",S0="@firebase/remote-config",E0="@firebase/remote-config-compat",I0="@firebase/storage",k0="@firebase/storage-compat",T0="@firebase/firestore",C0="@firebase/vertexai-preview",P0="@firebase/firestore-compat",R0="firebase",N0="10.14.1";/**
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
 */const Na="[DEFAULT]",x0={[Ra]:"fire-core",[r0]:"fire-core-compat",[s0]:"fire-analytics",[i0]:"fire-analytics-compat",[a0]:"fire-app-check",[o0]:"fire-app-check-compat",[l0]:"fire-auth",[u0]:"fire-auth-compat",[c0]:"fire-rtdb",[d0]:"fire-data-connect",[f0]:"fire-rtdb-compat",[h0]:"fire-fn",[p0]:"fire-fn-compat",[m0]:"fire-iid",[g0]:"fire-iid-compat",[v0]:"fire-fcm",[y0]:"fire-fcm-compat",[w0]:"fire-perf",[_0]:"fire-perf-compat",[S0]:"fire-rc",[E0]:"fire-rc-compat",[I0]:"fire-gcs",[k0]:"fire-gcs-compat",[T0]:"fire-fst",[P0]:"fire-fst-compat",[C0]:"fire-vertex","fire-js":"fire-js",[R0]:"fire-js-all"};/**
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
 */const fs=new Map,A0=new Map,xa=new Map;function vc(e,t){try{e.container.addComponent(t)}catch(n){dt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ft(e){const t=e.name;if(xa.has(t))return dt.debug(`There were multiple attempts to register component ${t}.`),!1;xa.set(t,e);for(const n of fs.values())vc(n,e);for(const n of A0.values())vc(n,e);return!0}function Zn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function nt(e){return e.settings!==void 0}/**
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
 */const O0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new gn("app","Firebase",O0);/**
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
 */class L0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const ei=N0;function Oh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Na,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=kh()),!n)throw Ut.create("no-options");const s=fs.get(i);if(s){if(Wr(n,s.options)&&Wr(r,s.config))return s;throw Ut.create("duplicate-app",{appName:i})}const o=new by(i);for(const l of xa.values())o.addComponent(l);const a=new L0(n,r,o);return fs.set(i,a),a}function Lh(e=Na){const t=fs.get(e);if(!t&&e===Na&&kh())return Oh();if(!t)throw Ut.create("no-app",{appName:e});return t}function Ke(e,t,n){var r;let i=(r=x0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}ft(new Qe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const D0="firebase-heartbeat-database",M0=1,Kr="firebase-heartbeat-store";let To=null;function Dh(){return To||(To=Ah(D0,M0,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Kr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ut.create("idb-open",{originalErrorMessage:e.message})})),To}async function j0(e){try{const n=(await Dh()).transaction(Kr),r=await n.objectStore(Kr).get(Mh(e));return await n.done,r}catch(t){if(t instanceof Ye)dt.warn(t.message);else{const n=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});dt.warn(n.message)}}}async function yc(e,t){try{const r=(await Dh()).transaction(Kr,"readwrite");await r.objectStore(Kr).put(t,Mh(e)),await r.done}catch(n){if(n instanceof Ye)dt.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dt.warn(r.message)}}}function Mh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const U0=1024,F0=30*24*60*60*1e3;class z0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wc();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=F0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){dt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wc(),{heartbeatsToSend:r,unsentEntries:i}=b0(this._heartbeatsCache.heartbeats),s=Eh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return dt.warn(n),""}}}function wc(){return new Date().toISOString().substring(0,10)}function b0(e,t=U0){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_c(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_c(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ph()?Rh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await j0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function _c(e){return Eh(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function B0(e){ft(new Qe("platform-logger",t=>new t0(t),"PRIVATE")),ft(new Qe("heartbeat",t=>new z0(t),"PRIVATE")),Ke(Ra,gc,e),Ke(Ra,gc,"esm2017"),Ke("fire-js","")}B0("");var V0="firebase",H0="10.14.1";/**
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
 */Ke(V0,H0,"app");const jh="@firebase/installations",Dl="0.6.9";/**
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
 */const Uh=1e4,Fh=`w:${Dl}`,zh="FIS_v2",W0="https://firebaseinstallations.googleapis.com/v1",K0=60*60*1e3,G0="installations",q0="Installations";/**
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
 */const Q0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cn=new gn(G0,q0,Q0);function bh(e){return e instanceof Ye&&e.code.includes("request-failed")}/**
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
 */function $h({projectId:e}){return`${W0}/projects/${e}/installations`}function Bh(e){return{token:e.token,requestStatus:2,expiresIn:J0(e.expiresIn),creationTime:Date.now()}}async function Vh(e,t){const r=(await t.json()).error;return cn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Hh({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Y0(e,{refreshToken:t}){const n=Hh(e);return n.append("Authorization",X0(t)),n}async function Wh(e){const t=await e();return t.status>=500&&t.status<600?e():t}function J0(e){return Number(e.replace("s","000"))}function X0(e){return`${zh} ${e}`}/**
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
 */async function Z0({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=$h(e),i=Hh(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:zh,appId:e.appId,sdkVersion:Fh},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Wh(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Bh(u.authToken)}}else throw await Vh("Create Installation",l)}/**
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
 */function Kh(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function ew(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const tw=/^[cdef][\w-]{21}$/,Aa="";function nw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=rw(e);return tw.test(n)?n:Aa}catch{return Aa}}function rw(e){return ew(e).substr(0,22)}/**
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
 */function zs(e){return`${e.appName}!${e.appId}`}/**
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
 */const Gh=new Map;function qh(e,t){const n=zs(e);Qh(n,t),iw(n,t)}function Qh(e,t){const n=Gh.get(e);if(n)for(const r of n)r(t)}function iw(e,t){const n=sw();n&&n.postMessage({key:e,fid:t}),ow()}let en=null;function sw(){return!en&&"BroadcastChannel"in self&&(en=new BroadcastChannel("[Firebase] FID Change"),en.onmessage=e=>{Qh(e.data.key,e.data.fid)}),en}function ow(){Gh.size===0&&en&&(en.close(),en=null)}/**
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
 */const aw="firebase-installations-database",lw=1,dn="firebase-installations-store";let Co=null;function Ml(){return Co||(Co=Ah(aw,lw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(dn)}}})),Co}async function hs(e,t){const n=zs(e),i=(await Ml()).transaction(dn,"readwrite"),s=i.objectStore(dn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&qh(e,t.fid),t}async function Yh(e){const t=zs(e),r=(await Ml()).transaction(dn,"readwrite");await r.objectStore(dn).delete(t),await r.done}async function bs(e,t){const n=zs(e),i=(await Ml()).transaction(dn,"readwrite"),s=i.objectStore(dn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&qh(e,a.fid),a}/**
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
 */async function jl(e){let t;const n=await bs(e.appConfig,r=>{const i=uw(r),s=cw(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Aa?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function uw(e){const t=e||{fid:nw(),registrationStatus:0};return Jh(t)}function cw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(cn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=dw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:fw(e)}:{installationEntry:t}}async function dw(e,t){try{const n=await Z0(e,t);return hs(e.appConfig,n)}catch(n){throw bh(n)&&n.customData.serverCode===409?await Yh(e.appConfig):await hs(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function fw(e){let t=await Sc(e.appConfig);for(;t.registrationStatus===1;)await Kh(100),t=await Sc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jl(e);return r||n}return t}function Sc(e){return bs(e,t=>{if(!t)throw cn.create("installation-not-found");return Jh(t)})}function Jh(e){return hw(e)?{fid:e.fid,registrationStatus:0}:e}function hw(e){return e.registrationStatus===1&&e.registrationTime+Uh<Date.now()}/**
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
 */async function pw({appConfig:e,heartbeatServiceProvider:t},n){const r=mw(e,n),i=Y0(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Fh,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Wh(()=>fetch(r,a));if(l.ok){const u=await l.json();return Bh(u)}else throw await Vh("Generate Auth Token",l)}function mw(e,{fid:t}){return`${$h(e)}/${t}/authTokens:generate`}/**
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
 */async function Ul(e,t=!1){let n;const r=await bs(e.appConfig,s=>{if(!Xh(s))throw cn.create("not-registered");const o=s.authToken;if(!t&&yw(o))return s;if(o.requestStatus===1)return n=gw(e,t),s;{if(!navigator.onLine)throw cn.create("app-offline");const a=_w(s);return n=vw(e,a),a}});return n?await n:r.authToken}async function gw(e,t){let n=await Ec(e.appConfig);for(;n.authToken.requestStatus===1;)await Kh(100),n=await Ec(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ul(e,t):r}function Ec(e){return bs(e,t=>{if(!Xh(t))throw cn.create("not-registered");const n=t.authToken;return Sw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function vw(e,t){try{const n=await pw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await hs(e.appConfig,r),n}catch(n){if(bh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yh(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await hs(e.appConfig,r)}throw n}}function Xh(e){return e!==void 0&&e.registrationStatus===2}function yw(e){return e.requestStatus===2&&!ww(e)}function ww(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+K0}function _w(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Sw(e){return e.requestStatus===1&&e.requestTime+Uh<Date.now()}/**
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
 */async function Ew(e){const t=e,{installationEntry:n,registrationPromise:r}=await jl(t);return r?r.catch(console.error):Ul(t).catch(console.error),n.fid}/**
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
 */async function Iw(e,t=!1){const n=e;return await kw(n),(await Ul(n,t)).token}async function kw(e){const{registrationPromise:t}=await jl(e);t&&await t}/**
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
 */function Tw(e){if(!e||!e.options)throw Po("App Configuration");if(!e.name)throw Po("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Po(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Po(e){return cn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Zh="installations",Cw="installations-internal",Pw=e=>{const t=e.getProvider("app").getImmediate(),n=Tw(t),r=Zn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Rw=e=>{const t=e.getProvider("app").getImmediate(),n=Zn(t,Zh).getImmediate();return{getId:()=>Ew(n),getToken:i=>Iw(n,i)}};function Nw(){ft(new Qe(Zh,Pw,"PUBLIC")),ft(new Qe(Cw,Rw,"PRIVATE"))}Nw();Ke(jh,Dl);Ke(jh,Dl,"esm2017");/**
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
 */const ps="analytics",xw="firebase_id",Aw="origin",Ow=60*1e3,Lw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fl="https://www.googletagmanager.com/gtag/js";/**
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
 */const we=new Ol("@firebase/analytics");/**
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
 */const Dw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ie=new gn("analytics","Analytics",Dw);/**
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
 */function Mw(e){if(!e.startsWith(Fl)){const t=Ie.create("invalid-gtag-resource",{gtagURL:e});return we.warn(t.message),""}return e}function ep(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function jw(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Uw(e,t){const n=jw("firebase-js-sdk-policy",{createScriptURL:Mw}),r=document.createElement("script"),i=`${Fl}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Fw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function zw(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await ep(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){we.error(a)}e("config",i,s)}async function bw(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await ep(n);for(const l of o){const u=a.find(d=>d.measurementId===l),f=u&&t[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){we.error(s)}}function $w(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await bw(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await zw(e,t,n,r,a,l)}else if(s==="consent"){const[a,l]=o;e("consent",a,l)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){we.error(a)}}return i}function Bw(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=$w(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Vw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Fl)&&n.src.includes(e))return n;return null}/**
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
 */const Hw=30,Ww=1e3;class Kw{constructor(t={},n=Ww){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const tp=new Kw;function Gw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function qw(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Gw(r)},s=Lw.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ie.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Qw(e,t=tp,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ie.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ie.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Xw;return setTimeout(async()=>{a.abort()},n!==void 0?n:Ow),np({appId:r,apiKey:i,measurementId:s},o,a,t)}async function np(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=tp){var s;const{appId:o,measurementId:a}=e;try{await Yw(r,t)}catch(l){if(a)return we.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await qw(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Jw(u)){if(i.deleteThrottleMetadata(o),a)return we.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?fc(n,i.intervalMillis,Hw):fc(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,d),we.debug(`Calling attemptFetch again in ${f} millis`),np(e,d,r,i)}}function Yw(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ie.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Jw(e){if(!(e instanceof Ye)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Xw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Zw(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function e_(){if(Ph())try{await Rh()}catch(e){return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return we.warn(Ie.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function t_(e,t,n,r,i,s,o){var a;const l=Qw(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&we.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>we.error(v)),t.push(l);const u=e_().then(v=>{if(v)return r.getId()}),[f,d]=await Promise.all([l,u]);Vw(s)||Uw(s,f.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Aw]="firebase",p.update=!0,d!=null&&(p[xw]=d),i("config",f.measurementId,p),f.measurementId}/**
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
 */class n_{constructor(t){this.app=t}_delete(){return delete kr[this.app.options.appId],Promise.resolve()}}let kr={},Ic=[];const kc={};let Ro="dataLayer",r_="gtag",Tc,rp,Cc=!1;function i_(){const e=[];if(Ch()&&e.push("This is a browser extension environment."),Ty()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ie.create("invalid-analytics-context",{errorInfo:t});we.warn(n.message)}}function s_(e,t,n){i_();const r=e.options.appId;if(!r)throw Ie.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)we.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ie.create("no-api-key");if(kr[r]!=null)throw Ie.create("already-exists",{id:r});if(!Cc){Fw(Ro);const{wrappedGtag:s,gtagCore:o}=Bw(kr,Ic,kc,Ro,r_);rp=s,Tc=o,Cc=!0}return kr[r]=t_(e,Ic,kc,t,Tc,Ro,n),new n_(e)}function o_(e=Lh()){e=Ht(e);const t=Zn(e,ps);return t.isInitialized()?t.getImmediate():a_(e)}function a_(e,t={}){const n=Zn(e,ps);if(n.isInitialized()){const i=n.getImmediate();if(Wr(t,n.getOptions()))return i;throw Ie.create("already-initialized")}return n.initialize({options:t})}function l_(e,t,n,r){e=Ht(e),Zw(rp,kr[e.app.options.appId],t,n,r).catch(i=>we.error(i))}const Pc="@firebase/analytics",Rc="0.10.8";function u_(){ft(new Qe(ps,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return s_(r,i,n)},"PUBLIC")),ft(new Qe("analytics-internal",e,"PRIVATE")),Ke(Pc,Rc),Ke(Pc,Rc,"esm2017");function e(t){try{const n=t.getProvider(ps).getImmediate();return{logEvent:(r,i,s)=>l_(n,r,i,s)}}catch(n){throw Ie.create("interop-component-reg-failed",{reason:n})}}}u_();function zl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ip(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c_=ip,sp=new gn("auth","Firebase",ip());/**
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
 */const ms=new Ol("@firebase/auth");function d_(e,...t){ms.logLevel<=U.WARN&&ms.warn(`Auth (${ei}): ${e}`,...t)}function Ui(e,...t){ms.logLevel<=U.ERROR&&ms.error(`Auth (${ei}): ${e}`,...t)}/**
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
 */function ht(e,...t){throw bl(e,...t)}function Ge(e,...t){return bl(e,...t)}function op(e,t,n){const r=Object.assign(Object.assign({},c_()),{[t]:n});return new gn("auth","Firebase",r).create(t,{appName:e.name})}function Ft(e){return op(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return sp.create(e,...t)}function x(e,t,...n){if(!e)throw bl(t,...n)}function rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ui(t),new Error(t)}function pt(e,t){e||rt(t)}/**
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
 */function Oa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function f_(){return Nc()==="http:"||Nc()==="https:"}function Nc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function h_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(f_()||Ch()||"connection"in navigator)?navigator.onLine:!0}function p_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ti{constructor(t,n){this.shortDelay=t,this.longDelay=n,pt(n>t,"Short delay should be less than long delay!"),this.isMobile=Sy()||Iy()}get(){return h_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $l(e,t){pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class ap{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const m_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const g_=new ti(3e4,6e4);function ni(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function vn(e,t,n,r,i={}){return lp(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zr(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},s);return Ey()||(u.referrerPolicy="no-referrer"),ap.fetch()(cp(e,e.config.apiHost,n,a),u)})}async function lp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},m_),t);try{const i=new y_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ki(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ki(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ki(e,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw op(e,f,u);ht(e,f)}}catch(i){if(i instanceof Ye)throw i;ht(e,"network-request-failed",{message:String(i)})}}async function up(e,t,n,r,i={}){const s=await vn(e,t,n,r,i);return"mfaPendingCredential"in s&&ht(e,"multi-factor-auth-required",{_serverResponse:s}),s}function cp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?$l(e.config,i):`${e.config.apiScheme}://${i}`}function v_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class y_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),g_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ki(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ge(e,t,r);return i.customData._tokenResponse=n,i}function xc(e){return e!==void 0&&e.enterprise!==void 0}class w_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return v_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function __(e,t){return vn(e,"GET","/v2/recaptchaConfig",ni(e,t))}/**
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
 */async function S_(e,t){return vn(e,"POST","/v1/accounts:delete",t)}async function dp(e,t){return vn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Tr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function E_(e,t=!1){const n=Ht(e),r=await n.getIdToken(t),i=Bl(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Tr(No(i.auth_time)),issuedAtTime:Tr(No(i.iat)),expirationTime:Tr(No(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function No(e){return Number(e)*1e3}function Bl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ih(n);return i?JSON.parse(i):(Ui("Failed to decode base64 JWT payload"),null)}catch(i){return Ui("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ac(e){const t=Bl(e);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Gr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ye&&I_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function I_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class k_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class La{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Gr(e,dp(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?fp(s.providerUserInfo):[],a=C_(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new La(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,d)}async function T_(e){const t=Ht(e);await gs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function C_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function fp(e){return e.map(t=>{var{providerId:n}=t,r=zl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function P_(e,t){const n=await lp(e,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=cp(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ap.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function R_(e,t){return vn(e,"POST","/v2/accounts:revokeToken",ni(e,t))}/**
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
 */class Fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ac(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){x(t.length!==0,"internal-error");const n=Ac(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await P_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fn;return r&&(x(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Fn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
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
 */function vt(e,t){x(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class it{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=zl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new La(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,t));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return E_(this,t)}reload(){return T_(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new it(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await gs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(Ft(this.auth));const t=await this.getIdToken();return await Gr(this,S_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:m,emailVerified:w,isAnonymous:k,providerData:P,stsTokenManager:R}=n;x(m&&R,t,"internal-error");const N=Fn.fromJSON(this.name,R);x(typeof m=="string",t,"internal-error"),vt(d,t.name),vt(p,t.name),x(typeof w=="boolean",t,"internal-error"),x(typeof k=="boolean",t,"internal-error"),vt(v,t.name),vt(y,t.name),vt(_,t.name),vt(I,t.name),vt(h,t.name),vt(c,t.name);const z=new it({uid:m,auth:t,email:p,emailVerified:w,displayName:d,isAnonymous:k,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:N,createdAt:h,lastLoginAt:c});return P&&Array.isArray(P)&&(z.providerData=P.map(L=>Object.assign({},L))),I&&(z._redirectEventId=I),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Fn;i.updateFromServerResponse(n);const s=new it({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await gs(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];x(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Fn;a.updateFromIdToken(r);const l=new it({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new La(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const Oc=new Map;function st(e){pt(e instanceof Function,"Expected a class definition");let t=Oc.get(e);return t?(pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Oc.set(e,t),t)}/**
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
 */class hp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}hp.type="NONE";const Lc=hp;/**
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
 */function Fi(e,t,n){return`firebase:${e}:${t}:${n}`}class zn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?it._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new zn(st(Lc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||st(Lc);const o=Fi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const d=it._fromJSON(t,f);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zn(s,t,r))}}/**
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
 */function Dc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wp(t))return"Blackberry";if(_p(t))return"Webos";if(mp(t))return"Safari";if((t.includes("chrome/")||gp(t))&&!t.includes("edge/"))return"Chrome";if(yp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pp(e=de()){return/firefox\//i.test(e)}function mp(e=de()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gp(e=de()){return/crios\//i.test(e)}function vp(e=de()){return/iemobile/i.test(e)}function yp(e=de()){return/android/i.test(e)}function wp(e=de()){return/blackberry/i.test(e)}function _p(e=de()){return/webos/i.test(e)}function Vl(e=de()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function N_(e=de()){var t;return Vl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function x_(){return ky()&&document.documentMode===10}function Sp(e=de()){return Vl(e)||yp(e)||_p(e)||wp(e)||/windows phone/i.test(e)||vp(e)}/**
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
 */function Ep(e,t=[]){let n;switch(e){case"Browser":n=Dc(de());break;case"Worker":n=`${Dc(de())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ei}/${r}`}/**
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
 */class A_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function O_(e,t={}){return vn(e,"GET","/v2/passwordPolicy",ni(e,t))}/**
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
 */const L_=6;class D_{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:L_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class M_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mc(this),this.idTokenSubscription=new Mc(this),this.beforeStateQueue=new A_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await dp(this,{idToken:t}),r=await it._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await gs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=p_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(nt(this.app))return Promise.reject(Ft(this));const n=t?Ht(t):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(Ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return nt(this.app)?Promise.reject(Ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await O_(this),n=new D_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new gn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await R_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&st(t)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ep(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&d_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function er(e){return Ht(e)}class Mc{constructor(t){this.auth=t,this.observer=null,this.addObserver=xy(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $s={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function j_(e){$s=e}function Ip(e){return $s.loadJS(e)}function U_(){return $s.recaptchaEnterpriseScript}function F_(){return $s.gapiScript}function z_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const b_="recaptcha-enterprise",$_="NO_RECAPTCHA";class B_{constructor(t){this.type=b_,this.auth=er(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{__(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new w_(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;xc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o($_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&xc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=U_();l.length!==0&&(l+=a),Ip(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function jc(e,t,n,r=!1){const i=new B_(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function V_(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await jc(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jc(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
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
 */function H_(e,t){const n=Zn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wr(s,t??{}))return i;ht(i,"already-initialized")}return n.initialize({options:t})}function W_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function K_(e,t,n){const r=er(e);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=kp(t),{host:o,port:a}=G_(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||q_()}function kp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function G_(e){const t=kp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Uc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Uc(o)}}}function Uc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function q_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Tp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(t){return rt("not implemented")}_linkToIdToken(t,n){return rt("not implemented")}_getReauthenticationResolver(t){return rt("not implemented")}}/**
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
 */async function bn(e,t){return up(e,"POST","/v1/accounts:signInWithIdp",ni(e,t))}/**
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
 */const Q_="http://localhost";class fn extends Tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=zl(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return bn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,bn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,bn(t,n)}buildRequest(){const t={requestUri:Q_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Zr(n)}return t}}/**
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
 */class Cp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ri extends Cp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends ri{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class Ze extends ri{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return fn._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ze.credentialFromTaggedObject(t)}static credentialFromError(t){return Ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ze.credential(n,r)}catch{return null}}}Ze.GOOGLE_SIGN_IN_METHOD="google.com";Ze.PROVIDER_ID="google.com";/**
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
 */class It extends ri{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
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
 */class kt extends ri{constructor(){super("twitter.com")}static credential(t,n){return fn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */async function Y_(e,t){return up(e,"POST","/v1/accounts:signUp",ni(e,t))}/**
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
 */class hn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await it._fromIdTokenResponse(t,r,i),o=Fc(r);return new hn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Fc(r);return new hn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Fc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class vs extends Ye{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vs.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new vs(t,n,r,i)}}function Pp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vs._fromErrorAndOperation(e,s,t,r):s})}async function J_(e,t,n=!1){const r=await Gr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return hn._forOperation(e,"link",r)}/**
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
 */async function X_(e,t,n=!1){const{auth:r}=e;if(nt(r.app))return Promise.reject(Ft(r));const i="reauthenticate";try{const s=await Gr(e,Pp(r,i,t,e),n);x(s.idToken,r,"internal-error");const o=Bl(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(e.uid===a,r,"user-mismatch"),hn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
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
 */async function Z_(e,t,n=!1){if(nt(e.app))return Promise.reject(Ft(e));const r="signIn",i=await Pp(e,r,t),s=await hn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}/**
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
 */async function eS(e){const t=er(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function tS(e,t,n){if(nt(e.app))return Promise.reject(Ft(e));const r=er(e),o=await V_(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Y_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&eS(e),l}),a=await hn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function nS(e,t,n,r){return Ht(e).onIdTokenChanged(t,n,r)}function rS(e,t,n){return Ht(e).beforeAuthStateChanged(t,n)}const ys="__sak";/**
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
 */class Rp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ys,"1"),this.storage.removeItem(ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iS=1e3,sS=10;class Np extends Rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);x_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,sS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},iS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Np.type="LOCAL";const oS=Np;/**
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
 */class xp extends Rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}xp.type="SESSION";const Ap=xp;/**
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
 */function aS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Bs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await aS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
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
 */function Hl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class lS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Hl("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qe(){return window}function uS(e){qe().location.href=e}/**
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
 */function Op(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function cS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function fS(){return Op()?self:null}/**
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
 */const Lp="firebaseLocalStorageDb",hS=1,ws="firebaseLocalStorage",Dp="fbase_key";class ii{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vs(e,t){return e.transaction([ws],t?"readwrite":"readonly").objectStore(ws)}function pS(){const e=indexedDB.deleteDatabase(Lp);return new ii(e).toPromise()}function Da(){const e=indexedDB.open(Lp,hS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ws,{keyPath:Dp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ws)?t(r):(r.close(),await pS(),t(await Da()))})})}async function zc(e,t,n){const r=Vs(e,!0).put({[Dp]:t,value:n});return new ii(r).toPromise()}async function mS(e,t){const n=Vs(e,!1).get(t),r=await new ii(n).toPromise();return r===void 0?null:r.value}function bc(e,t){const n=Vs(e,!0).delete(t);return new ii(n).toPromise()}const gS=800,vS=3;class Mp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Da(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>vS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Op()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(fS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await cS(),!this.activeServiceWorker)return;this.sender=new lS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||dS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Da();return await zc(t,ys,"1"),await bc(t,ys),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>mS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Vs(i,!1).getAll();return new ii(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mp.type="LOCAL";const yS=Mp;new ti(3e4,6e4);/**
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
 */function wS(e,t){return t?st(t):(x(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Wl extends Tp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return bn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return bn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function _S(e){return Z_(e.auth,new Wl(e),e.bypassAuthState)}function SS(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),X_(n,new Wl(e),e.bypassAuthState)}async function ES(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),J_(n,new Wl(e),e.bypassAuthState)}/**
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
 */class jp{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _S;case"linkViaPopup":case"linkViaRedirect":return ES;case"reauthViaPopup":case"reauthViaRedirect":return SS;default:ht(this.auth,"internal-error")}}resolve(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IS=new ti(2e3,1e4);class An extends jp{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const t=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,IS.get())};t()}}An.currentPopupAction=null;/**
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
 */const kS="pendingRedirect",zi=new Map;class TS extends jp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=zi.get(this.auth._key());if(!t){try{const r=await CS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}zi.set(this.auth._key(),t)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CS(e,t){const n=NS(t),r=RS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PS(e,t){zi.set(e._key(),t)}function RS(e){return st(e._redirectPersistence)}function NS(e){return Fi(kS,e.config.apiKey,e.name)}async function xS(e,t,n=!1){if(nt(e.app))return Promise.reject(Ft(e));const r=er(e),i=wS(r,t),o=await new TS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const AS=10*60*1e3;class OS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!LS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Up(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=AS&&this.cachedEventUids.clear(),this.cachedEventUids.has($c(t))}saveEventToCache(t){this.cachedEventUids.add($c(t)),this.lastProcessedEventTime=Date.now()}}function $c(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Up({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function LS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Up(e);default:return!1}}/**
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
 */async function DS(e,t={}){return vn(e,"GET","/v1/projects",t)}/**
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
 */const MS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jS=/^https?/;async function US(e){if(e.config.emulator)return;const{authorizedDomains:t}=await DS(e);for(const n of t)try{if(FS(n))return}catch{}ht(e,"unauthorized-domain")}function FS(e){const t=Oa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jS.test(n))return!1;if(MS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const zS=new ti(3e4,6e4);function Bc(){const e=qe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function bS(e){return new Promise((t,n)=>{var r,i,s;function o(){Bc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bc(),n(Ge(e,"network-request-failed"))},timeout:zS.get()})}if(!((i=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=qe().gapi)===null||s===void 0)&&s.load)o();else{const a=z_("iframefcb");return qe()[a]=()=>{gapi.load?o():n(Ge(e,"network-request-failed"))},Ip(`${F_()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw bi=null,t})}let bi=null;function $S(e){return bi=bi||bS(e),bi}/**
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
 */const BS=new ti(5e3,15e3),VS="__/auth/iframe",HS="emulator/auth/iframe",WS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GS(e){const t=e.config;x(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?$l(t,HS):`https://${e.config.authDomain}/${VS}`,r={apiKey:t.apiKey,appName:e.name,v:ei},i=KS.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zr(r).slice(1)}`}async function qS(e){const t=await $S(e),n=qe().gapi;return x(n,e,"internal-error"),t.open({where:document.body,url:GS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(e,"network-request-failed"),a=qe().setTimeout(()=>{s(o)},BS.get());function l(){qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const QS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YS=500,JS=600,XS="_blank",ZS="http://localhost";class Vc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function e1(e,t,n,r=YS,i=JS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},QS),{width:r.toString(),height:i.toString(),top:s,left:o}),u=de().toLowerCase();n&&(a=gp(u)?XS:n),pp(u)&&(t=t||ZS,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[v,y])=>`${p}${v}=${y},`,"");if(N_(u)&&a!=="_self")return t1(t||"",a),new Vc(null);const d=window.open(t||"",a,f);x(d,e,"popup-blocked");try{d.focus()}catch{}return new Vc(d)}function t1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const n1="__/auth/handler",r1="emulator/auth/handler",i1=encodeURIComponent("fac");async function Hc(e,t,n,r,i,s){x(e.config.authDomain,e,"auth-domain-config-required"),x(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ei,eventId:i};if(t instanceof Cp){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ny(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,d]of Object.entries(s||{}))o[f]=d}if(t instanceof ri){const f=t.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),u=l?`#${i1}=${encodeURIComponent(l)}`:"";return`${s1(e)}?${Zr(a).slice(1)}${u}`}function s1({config:e}){return e.emulator?$l(e,r1):`https://${e.authDomain}/${n1}`}/**
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
 */const xo="webStorageSupport";class o1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ap,this._completeRedirectFn=xS,this._overrideRedirectResult=PS}async _openPopup(t,n,r,i){var s;pt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hc(t,n,r,Oa(),i);return e1(t,o,Hl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Hc(t,n,r,Oa(),i);return uS(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await qS(t),r=new OS(t);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xo,{type:xo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xo];o!==void 0&&n(!!o),ht(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=US(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sp()||mp()||Vl()}}const a1=o1;var Wc="@firebase/auth",Kc="1.7.9";/**
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
 */class l1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function u1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c1(e){ft(new Qe("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ep(e)},u=new M_(r,i,s,l);return W_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ft(new Qe("auth-internal",t=>{const n=er(t.getProvider("auth").getImmediate());return(r=>new l1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(Wc,Kc,u1(e)),Ke(Wc,Kc,"esm2017")}/**
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
 */const d1=5*60,f1=Th("authIdTokenMaxAge")||d1;let Gc=null;const h1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>f1)return;const i=n==null?void 0:n.token;Gc!==i&&(Gc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function p1(e=Lh()){const t=Zn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=H_(e,{popupRedirectResolver:a1,persistence:[yS,oS,Ap]}),r=Th("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=h1(s.toString());rS(n,o,()=>o(n.currentUser)),nS(n,a=>o(a))}}const i=wy("auth");return i&&K_(n,`http://${i}`),n}function m1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}j_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Ge("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",m1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c1("Browser");const g1={apiKey:"AIzaSyDviHmbNMxNtzvG5ZvZBOqgt2tt2fCxcOU",authDomain:"research-finder-1000.firebaseapp.com",projectId:"research-finder-1000",storageBucket:"research-finder-1000.firebasestorage.app",messagingSenderId:"90727380837",appId:"1:90727380837:web:7ac4c1b13e26cfecb3538c",measurementId:"G-7MKKN551YC"},Fp=Oh(g1);o_(Fp);const v1=p1(Fp);new Ze;const qc=({mode:e})=>{const t=vh(),n=e==="register",[r,i]=E.useState(""),[s,o]=E.useState(""),[a,l]=E.useState(""),[u,f]=E.useState(""),d="https://research-finder-server.vercel.app",p=async()=>{if(s!==a){f("Passwords don't match!");return}try{const _=(await tS(v1,r,s)).user,I={userEmail:_.email,provider:"email",creationDate:new Date().toISOString(),userID:_.uid},h=await fetch(`${d}/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});if(h.ok)f("Account created successfully! Redirecting to home..."),setTimeout(()=>t("/"),3e3);else{const c=await h.json();throw new Error(c.message||"Failed to create account.")}}catch(y){y.code==="auth/email-already-in-use"?f("This email is already registered. Please sign in or use a different email address."):f(`Error: ${y.message}`)}},v=async()=>{f("Sign In functionality unchanged.")};return g.jsx("div",{className:"auth-container",children:g.jsxs("div",{className:"auth-card",children:[g.jsx("h2",{children:n?"Register":"Sign In"}),g.jsxs("p",{children:["Welcome! Please ",n?"register":"sign in"," to continue."]}),n?g.jsxs(g.Fragment,{children:[g.jsx("input",{type:"email",placeholder:"Email address",value:r,onChange:y=>i(y.target.value),required:!0}),g.jsx("input",{type:"password",placeholder:"Create Password",value:s,onChange:y=>o(y.target.value),required:!0}),g.jsx("input",{type:"password",placeholder:"Confirm Password",value:a,onChange:y=>l(y.target.value),required:!0}),g.jsx("button",{className:"auth-submit-button",onClick:p,children:"Register"})]}):g.jsxs(g.Fragment,{children:[g.jsxs("button",{className:"auth-google-button",children:[g.jsx("img",{src:"/assets/google-icon.png",alt:"Google icon",className:"google-icon"}),"Sign In with Google"]}),g.jsx("div",{className:"auth-divider",children:g.jsx("span",{children:"or"})}),g.jsx("input",{type:"email",placeholder:"Email address",value:r,onChange:y=>i(y.target.value),required:!0}),g.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:y=>o(y.target.value),required:!0}),g.jsx("button",{className:"auth-submit-button",onClick:v,children:"Sign In"})]}),g.jsx("p",{className:"auth-message",children:u}),g.jsxs("p",{className:"auth-toggle",children:[n?"Already have an account?":"Don't have an account?"," ",g.jsx("a",{href:n?"/signin":"/register",children:n?"Sign In":"Register"})]}),g.jsx("button",{className:"auth-return-home",onClick:()=>t("/"),children:"Return to Home Page"})]})})};const y1=({data:e})=>{const{title:t,body:n,compensation:r,organization:i,researcherName:s,workType:o}=e;return g.jsxs("div",{className:"feed-display-card",children:[g.jsx("h3",{className:"feed-display-title",children:t||"Untitled"}),g.jsx("p",{children:n||"No description available."}),g.jsxs("p",{children:[g.jsx("strong",{children:"Compensation:"})," ",r||"Not specified"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Organization:"})," ",i||"Unknown"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Researcher:"})," ",s||"Unknown"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Work Type:"})," ",o||"Not specified"]})]})};function w1(){const[e,t]=E.useState([]),[n,r]=E.useState(!0),[i,s]=E.useState(null);return E.useEffect(()=>{(async()=>{r(!0),s(null);try{const a=await fetch("https://research-finder-server.vercel.app");if(!a.ok)throw new Error(`Error fetching posts: ${a.statusText}`);const l=await a.json();t(l)}catch(a){console.error("Error fetching posts:",a),s("Failed to fetch posts. Please try again later.")}finally{r(!1)}})()},[]),g.jsxs("div",{className:"feed-container",children:[n&&g.jsx("p",{children:"Loading posts..."}),i&&g.jsx("p",{className:"feed-error",children:i}),!n&&!i&&e.length===0&&g.jsx("p",{children:"No posts available at the moment."}),!n&&!i&&e.length>0&&g.jsx("div",{className:"feed-list",children:e.map(o=>g.jsx(y1,{data:o},o.id))})]})}const _1=({onSearchResults:e})=>{const[t,n]=E.useState(""),r=s=>{n(s.target.value)},i=async()=>{if(t)try{const s=await fetch(`https://research-finder-server.vercel.app/search/posts?q=${encodeURIComponent(t)}`);if(!s.ok)throw new Error("Failed to fetch search results");const o=await s.json();e(o)}catch(s){console.error("Error searching posts:",s)}};return g.jsx("div",{className:"home-header",children:g.jsxs("div",{className:"search-container",children:[g.jsx("input",{type:"text",placeholder:"Search for posts...",className:"search-bar",value:t,onChange:r}),g.jsx("button",{className:"search-button",onClick:i,children:"Search"})]})})};function S1(){const e=vh(),t=n=>{n.trim()!==""&&e(`/search?query=${encodeURIComponent(n)}`)};return g.jsxs("header",{className:"home-header",children:[g.jsx("h1",{children:"Research Finder App"}),g.jsx(_1,{onSearch:t})," ",g.jsxs("div",{className:"header-buttons",children:[g.jsx("button",{className:"btn home-button",onClick:()=>e("/"),children:"Home"}),g.jsx("button",{className:"btn sign-in-button",onClick:()=>e("/signin"),children:"Sign In"}),g.jsx("button",{className:"btn register-button",onClick:()=>e("/register"),children:"Register"})]})]})}const E1=()=>{const e=xl(),t=new URLSearchParams(e.search).get("q"),[n,r]=E.useState([]),[i,s]=E.useState(!1),[o,a]=E.useState(null);return E.useEffect(()=>{t&&(async()=>{s(!0),a(null);try{const u=await fetch(`https://research-finder-server.vercel.app/search/posts?q=${encodeURIComponent(t)}`);if(!u.ok)throw new Error("Failed to fetch search results");const f=await u.json();r(f)}catch(u){console.error("Error fetching search results:",u),a("Failed to load search results. Please try again later.")}finally{s(!1)}})()},[t]),g.jsxs("div",{children:[g.jsxs("h1",{children:['Search Results for "',t||"",'"']}),i?g.jsx("p",{children:"Loading..."}):o?g.jsx("p",{style:{color:"red"},children:o}):n.length>0?g.jsx("ul",{children:n.map(l=>g.jsxs("li",{children:[g.jsx("h3",{children:l.title||"No Title Available"}),g.jsx("p",{children:l.body||"No Description Available"}),g.jsxs("p",{children:[g.jsx("strong",{children:"Organization:"})," ",l.organization||"N/A"]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Work Type:"})," ",l.workType||"N/A"]})]},l.id))}):g.jsx("p",{children:"No results found."})]})};const I1=()=>g.jsxs("footer",{className:"footer",children:[g.jsxs("div",{className:"footer-links",children:[g.jsx("a",{href:"/terms",children:"Terms of Service"}),g.jsx("a",{href:"/help",children:"Help"})]}),g.jsxs("div",{className:"social-links",children:[g.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"}),g.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"}),g.jsx("p",{children:"© 2024 Research Finder. All rights reserved."})]})]});function k1(){return g.jsx(ay,{children:g.jsxs("div",{children:[g.jsx(S1,{}),g.jsx("main",{style:{padding:"20px"},children:g.jsxs(iy,{children:[g.jsx(Qt,{path:"/",element:g.jsx(cy,{})}),g.jsx(Qt,{path:"/user",element:g.jsx(dy,{})}),g.jsx(Qt,{path:"/signin",element:g.jsx(qc,{mode:"signin"})}),g.jsx(Qt,{path:"/register",element:g.jsx(qc,{mode:"register"})}),g.jsx(Qt,{path:"/feed",element:g.jsx(w1,{})}),g.jsx(Qt,{path:"/search",element:g.jsx(E1,{})})," "]})}),g.jsx(I1,{})]})})}Ao.createRoot(document.getElementById("root")).render(g.jsx(sd.StrictMode,{children:g.jsx(k1,{})}));

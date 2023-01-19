function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("c55OR",(function(n,r){e(n.exports,"default",(function(){return f}));var i=o("jkMrE"),s=o("g6yUq"),a=o("gMe87");o("2shzp");var u=o("bRlFp");u.default.defaults.baseURL="https://api.themoviedb.org/3";var c=new WeakMap,l=new WeakMap,d=new WeakMap;class f{async fetchPopularMovie(e){const n=`trending/movie/day?page=${t(i)(this,l)}&language=${e}`,{data:r}=await u.default.get(n,t(i)(this,d));return r}async fetchSearchMovie(e){const n=`search/movie/?query=${t(i)(this,c)}&page=${t(i)(this,l)}&language=${e}`,{data:r}=await u.default.get(n,t(i)(this,d));return r}async fetchMoviesGenres(e){const{data:{genres:n}}=await u.default.get(`genre/movie/list?language=${e}`,t(i)(this,d));return n}async fetchMoviesDiscover(e,n,r){const{data:o}=await u.default.get(`discover/movie?${e}=${n}&page=${t(i)(this,l)}&language=${r}`,t(i)(this,d));return o}async fetchMovieDetails(e,n){const r=`movie/${e}?language=${n}`,{data:o}=await u.default.get(r,t(i)(this,d));return o}async fetchMovieTrailer(e){const n=`movie/${e}/videos?`,{data:r}=await u.default.get(n,t(i)(this,d));return r}get query(){return t(i)(this,c)}set query(e){t(a)(this,c,e)}get page(){return t(i)(this,l)}set page(e){t(a)(this,l,e)}constructor(){t(s)(this,c,{writable:!0,value:""}),t(s)(this,l,{writable:!0,value:1}),t(s)(this,d,{writable:!0,value:{params:{api_key:"b5dbc40d665affe8ed0bac71106b3fa8"}}})}}})),o.register("jkMrE",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var i=n.default(e,t,"get");return r.default(e,i)};var n=i(o("fExtF")),r=i(o("iaRLo"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("g6yUq",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){r.default(e,t),t.set(e,n)};var n,r=(n=o("7K24o"))&&n.__esModule?n:{default:n}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("gMe87",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,i){var o=n.default(e,t,"set");return r.default(e,o,i),i};var n=i(o("fExtF")),r=i(o("3LGG3"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),o.register("2shzp",(function(t,n){e(t.exports,"default",(function(){return o("bRlFp").default}));var r=o("bRlFp");const{Axios:i,AxiosError:s,CanceledError:a,isCancel:u,CancelToken:c,VERSION:l,all:d,Cancel:f,isAxiosError:h,spread:p,toFormData:g,AxiosHeaders:m,HttpStatusCode:y,formToJSON:v,mergeConfig:b}=r.default})),o.register("bRlFp",(function(t,n){e(t.exports,"default",(function(){return _}));var r=o("2bBga"),i=o("djt5d"),s=o("6zSb1"),a=o("d0EKm"),u=o("hqlPG"),c=o("4bmvb"),l=o("83xK9"),d=o("2sjhC"),f=o("ksuZT"),h=o("50GW0"),p=o("aewVa"),g=o("121rJ"),m=o("av9gA"),y=o("gNhGc"),v=o("gbTL1"),b=o("jd7iQ");const w=function e(t){const n=new(0,s.default)(t),o=(0,i.default)(s.default.prototype.request,n);return r.default.extend(o,s.default.prototype,n,{allOwnKeys:!0}),r.default.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e((0,a.default)(t,n))},o}(u.default);w.Axios=s.default,w.CanceledError=l.default,w.CancelToken=d.default,w.isCancel=f.default,w.VERSION=h.VERSION,w.toFormData=p.default,w.AxiosError=g.default,w.Cancel=w.CanceledError,w.all=function(e){return Promise.all(e)},w.spread=m.default,w.isAxiosError=y.default,w.mergeConfig=a.default,w.AxiosHeaders=v.default,w.formToJSON=e=>(0,c.default)(r.default.isHTMLForm(e)?new FormData(e):e),w.HttpStatusCode=b.default,w.default=w;var _=w})),o.register("2bBga",(function(t,r){e(t.exports,"default",(function(){return D}));var i=o("djt5d");const{toString:s}=Object.prototype,{getPrototypeOf:a}=Object,u=(c=Object.create(null),e=>{const t=s.call(e);return c[t]||(c[t]=t.slice(8,-1).toLowerCase())});var c;const l=e=>(e=e.toLowerCase(),t=>u(t)===e),d=e=>t=>typeof t===e,{isArray:f}=Array,h=d("undefined");const p=l("ArrayBuffer");const g=d("string"),m=d("function"),y=d("number"),v=e=>null!==e&&"object"==typeof e,b=e=>{if("object"!==u(e))return!1;const t=a(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},w=l("Date"),_=l("File"),E=l("Blob"),I=l("FileList"),T=l("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),f(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function O(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n,A=e=>!h(e)&&e!==R;const k=(C="undefined"!=typeof Uint8Array&&a(Uint8Array),e=>C&&e instanceof C);var C;const N=l("HTMLFormElement"),x=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),L=l("RegExp"),P=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)};var D={isArray:f,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||s.call(e)===t||m(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:g,isNumber:y,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:b,isUndefined:h,isDate:w,isFile:_,isBlob:E,isRegExp:L,isFunction:m,isStream:e=>v(e)&&m(e.pipe),isURLSearchParams:T,isTypedArray:k,isFileList:I,forEach:S,merge:function e(){const{caseless:t}=A(this)&&this||{},n={},r=(r,i)=>{const o=t&&O(n,i)||i;b(n[o])&&b(r)?n[o]=e(n[o],r):b(r)?n[o]=e({},r):f(r)?n[o]=r.slice():n[o]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(S(t,((t,r)=>{n&&m(t)?e[r]=(0,i.default)(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,o,s;const u={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],r&&!r(s,e,t)||u[s]||(t[s]=e[s],u[s]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:l,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:N,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:P,freezeMethods:e=>{P(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:O,global:R,isContextDefined:A,toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=f(e)?[]:{};return S(e,((e,t)=>{const o=n(e,r+1);!h(o)&&(i[t]=o)})),t[r]=void 0,i}}return e};return n(e,0)}}})),o.register("djt5d",(function(t,n){function r(e,t){return function(){return e.apply(t,arguments)}}e(t.exports,"default",(function(){return r}))})),o.register("6zSb1",(function(t,n){e(t.exports,"default",(function(){return p}));var r=o("2bBga"),i=o("2RNjJ"),s=o("5Dm7L"),a=o("eQ5d8"),u=o("d0EKm"),c=o("1ZTQa"),l=o("6zj0X"),d=o("gbTL1");const f=l.default.validators;class h{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,u.default)(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:o}=t;let s;void 0!==n&&l.default.assertOptions(n,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1),void 0!==i&&l.default.assertOptions(i,{encode:f.function,serialize:f.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&r.default.merge(o.common,o[t.method]),s&&r.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=d.default.concat(s,o);const c=[];let h=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(h=h&&e.synchronous,c.unshift(e.fulfilled,e.rejected))}));const p=[];let g;this.interceptors.response.forEach((function(e){p.push(e.fulfilled,e.rejected)}));let m,y=0;if(!h){const e=[a.default.bind(this),void 0];for(e.unshift.apply(e,c),e.push.apply(e,p),m=e.length,g=Promise.resolve(t);y<m;)g=g.then(e[y++],e[y++]);return g}m=c.length;let v=t;for(y=0;y<m;){const e=c[y++],t=c[y++];try{v=e(v)}catch(e){t.call(this,e);break}}try{g=a.default.call(this,v)}catch(e){return Promise.reject(e)}for(y=0,m=p.length;y<m;)g=g.then(p[y++],p[y++]);return g}getUri(e){e=(0,u.default)(this.defaults,e);const t=(0,c.default)(e.baseURL,e.url);return(0,i.default)(t,e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new(0,s.default),response:new(0,s.default)}}}r.default.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request((0,u.default)(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request((0,u.default)(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)}));var p=h})),o.register("2RNjJ",(function(t,n){e(t.exports,"default",(function(){return a}));var r=o("2bBga"),i=o("hz3Ym");function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(e,t,n){if(!t)return e;const o=n&&n.encode||s,a=n&&n.serialize;let u;if(u=a?a(t,n):r.default.isURLSearchParams(t)?t.toString():new(0,i.default)(t,n).toString(o),u){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+u}return e}})),o.register("hz3Ym",(function(t,n){e(t.exports,"default",(function(){return u}));var r=o("aewVa");function i(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function s(e,t){this._pairs=[],e&&(0,r.default)(e,this,t)}const a=s.prototype;a.append=function(e,t){this._pairs.push([e,t])},a.toString=function(e){const t=e?function(t){return e.call(this,t,i)}:i;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var u=s})),o.register("aewVa",(function(t,n){e(t.exports,"default",(function(){return f}));var r=o("2bBga"),i=o("121rJ"),s=o("cHBTa"),a=o("ihoyg").Buffer;function u(e){return r.default.isPlainObject(e)||r.default.isArray(e)}function c(e){return r.default.endsWith(e,"[]")?e.slice(0,-2):e}function l(e,t,n){return e?e.concat(t).map((function(e,t){return e=c(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const d=r.default.toFlatObject(r.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var f=function(e,t,n){if(!r.default.isObject(e))throw new TypeError("target must be an object");t=t||new(s.default||FormData);const o=(n=r.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!r.default.isUndefined(t[e])}))).metaTokens,f=n.visitor||v,h=n.dots,p=n.indexes,g=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((m=t)&&r.default.isFunction(m.append)&&"FormData"===m[Symbol.toStringTag]&&m[Symbol.iterator]);var m;if(!r.default.isFunction(f))throw new TypeError("visitor must be a function");function y(e){if(null===e)return"";if(r.default.isDate(e))return e.toISOString();if(!g&&r.default.isBlob(e))throw new(0,i.default)("Blob is not supported. Use a Buffer instead.");return r.default.isArrayBuffer(e)||r.default.isTypedArray(e)?g&&"function"==typeof Blob?new Blob([e]):a.from(e):e}function v(e,n,i){let s=e;if(e&&!i&&"object"==typeof e)if(r.default.endsWith(n,"{}"))n=o?n:n.slice(0,-2),e=JSON.stringify(e);else if(r.default.isArray(e)&&function(e){return r.default.isArray(e)&&!e.some(u)}(e)||r.default.isFileList(e)||r.default.endsWith(n,"[]")&&(s=r.default.toArray(e)))return n=c(n),s.forEach((function(e,i){!r.default.isUndefined(e)&&null!==e&&t.append(!0===p?l([n],i,h):null===p?n:n+"[]",y(e))})),!1;return!!u(e)||(t.append(l(i,n,h),y(e)),!1)}const b=[],w=Object.assign(d,{defaultVisitor:v,convertValue:y,isVisitable:u});if(!r.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!r.default.isUndefined(n)){if(-1!==b.indexOf(n))throw Error("Circular reference detected in "+i.join("."));b.push(n),r.default.forEach(n,(function(n,o){!0===(!(r.default.isUndefined(n)||null===n)&&f.call(t,n,r.default.isString(o)?o.trim():o,i,w))&&e(n,i?i.concat(o):[o])})),b.pop()}}(e),t}})),o.register("121rJ",(function(t,n){e(t.exports,"default",(function(){return u}));var r=o("2bBga");function i(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.default.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const s=i.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{a[e]={value:e}})),Object.defineProperties(i,a),Object.defineProperty(s,"isAxiosError",{value:!0}),i.from=(e,t,n,o,a,u)=>{const c=Object.create(s);return r.default.toFlatObject(e,c,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),i.call(c,e.message,t,n,o,a),c.cause=e,c.name=e.name,u&&Object.assign(c,u),c};var u=i})),o.register("cHBTa",(function(n,r){e(n.exports,"default",(function(){return i}));var i=t(o("FHeSn"))})),o.register("FHeSn",(function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData})),o.register("ihoyg",(function(t,n){var r,i;e(t.exports,"Buffer",(function(){return r}),(function(e){return r=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(e){return i=e}));var s=o("hqZtu"),a=o("5WQj6");const u="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=d,i=50;const c=2147483647;function l(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,d.prototype),t}function d(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return f(e,t,n)}function f(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!d.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|v(e,t);let r=l(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(X(e,Uint8Array)){const t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return g(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(X(e,ArrayBuffer)||e&&X(e.buffer,ArrayBuffer))return m(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(X(e,SharedArrayBuffer)||e&&X(e.buffer,SharedArrayBuffer)))return m(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return d.from(r,t,n);const i=function(e){if(d.isBuffer(e)){const t=0|y(e.length),n=l(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?l(0):g(e);if("Buffer"===e.type&&Array.isArray(e.data))return g(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return d.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function h(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return h(e),l(e<0?0:0|y(e))}function g(e){const t=e.length<0?0:0|y(e.length),n=l(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function m(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,d.prototype),r}function y(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function v(e,t){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||X(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return G(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Q(e).length;default:if(i)return r?-1:G(e).length;t=(""+t).toLowerCase(),i=!0}}function b(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return L(this,t,n);case"utf8":case"utf-8":return k(this,t,n);case"ascii":return N(this,t,n);case"latin1":case"binary":return x(this,t,n);case"base64":return A(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function w(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function _(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=d.from(t,r)),d.isBuffer(t))return 0===t.length?-1:E(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):E(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function E(e,t,n,r,i){let o,s=1,a=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;s=2,a/=2,u/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let r=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===r?0:o-r)){if(-1===r&&(r=o),o-r+1===u)return r*s}else-1!==r&&(o-=o-r),r=-1}else for(n+u>a&&(n=a-u),o=n;o>=0;o--){let n=!0;for(let r=0;r<u;r++)if(c(e,o+r)!==c(t,r)){n=!1;break}if(n)return o}return-1}function I(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const o=t.length;let s;for(r>o/2&&(r=o/2),s=0;s<r;++s){const r=parseInt(t.substr(2*s,2),16);if(Z(r))return s;e[n+s]=r}return s}function T(e,t,n,r){return Y(G(t,e.length-n),e,n,r)}function S(e,t,n,r){return Y(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function O(e,t,n,r){return Y(Q(t),e,n,r)}function R(e,t,n,r){return Y(function(e,t){let n,r,i;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function A(e,t,n){return 0===t&&n===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,n))}function k(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=n){let n,r,a,u;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[i+1],128==(192&n)&&(u=(31&t)<<6|63&n,u>127&&(o=u));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(u=(15&t)<<12|(63&n)<<6|63&r,u>2047&&(u<55296||u>57343)&&(o=u));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(u=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,u>65535&&u<1114112&&(o=u))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o),i+=s}return function(e){const t=e.length;if(t<=C)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=C));return n}(r)}d.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),d.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}}),Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.byteOffset}}),d.poolSize=8192,d.from=function(e,t,n){return f(e,t,n)},Object.setPrototypeOf(d.prototype,Uint8Array.prototype),Object.setPrototypeOf(d,Uint8Array),d.alloc=function(e,t,n){return function(e,t,n){return h(e),e<=0?l(e):void 0!==t?"string"==typeof n?l(e).fill(t,n):l(e).fill(t):l(e)}(e,t,n)},d.allocUnsafe=function(e){return p(e)},d.allocUnsafeSlow=function(e){return p(e)},d.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==d.prototype},d.compare=function(e,t){if(X(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),X(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return d.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=d.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(X(t,Uint8Array))i+t.length>r.length?(d.isBuffer(t)||(t=d.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!d.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},d.byteLength=v,d.prototype._isBuffer=!0,d.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)w(this,t,t+1);return this},d.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},d.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},d.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?k(this,0,e):b.apply(this,arguments)},d.prototype.toLocaleString=d.prototype.toString,d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===d.compare(this,e)},d.prototype.inspect=function(){let e="";const t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},u&&(d.prototype[u]=d.prototype.inspect),d.prototype.compare=function(e,t,n,r,i){if(X(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),u=this.slice(r,i),c=e.slice(t,n);for(let e=0;e<a;++e)if(u[e]!==c[e]){o=u[e],s=c[e];break}return o<s?-1:s<o?1:0},d.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},d.prototype.indexOf=function(e,t,n){return _(this,e,t,n,!0)},d.prototype.lastIndexOf=function(e,t,n){return _(this,e,t,n,!1)},d.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let o=!1;for(;;)switch(r){case"hex":return I(this,e,t,n);case"utf8":case"utf-8":return T(this,e,t,n);case"ascii":case"latin1":case"binary":return S(this,e,t,n);case"base64":return O(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const C=4096;function N(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function x(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function L(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=ee[e[r]];return i}function P(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function D(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function U(e,t,n,r,i,o){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function M(e,t,n,r,i){q(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function B(e,t,n,r,i){q(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function j(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function F(e,t,n,r,i){return t=+t,n>>>=0,i||j(e,0,n,4),a.write(e,t,n,r,23,4),n+4}function $(e,t,n,r,i){return t=+t,n>>>=0,i||j(e,0,n,8),a.write(e,t,n,r,52,8),n+8}d.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,d.prototype),r},d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return r},d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),this[e]},d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]|this[e+1]<<8},d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]<<8|this[e+1]},d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},d.prototype.readBigUInt64LE=te((function(e){W(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||J(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),d.prototype.readBigUInt64BE=te((function(e){W(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||J(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),d.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},d.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=t,i=1,o=this[e+--r];for(;r>0&&(i*=256);)o+=this[e+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},d.prototype.readInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},d.prototype.readInt16LE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},d.prototype.readInt16BE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},d.prototype.readInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},d.prototype.readInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},d.prototype.readBigInt64LE=te((function(e){W(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||J(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),d.prototype.readBigInt64BE=te((function(e){W(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||J(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),d.prototype.readFloatLE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!0,23,4)},d.prototype.readFloatBE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!1,23,4)},d.prototype.readDoubleLE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!0,52,8)},d.prototype.readDoubleBE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!1,52,8)},d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){U(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){U(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||U(this,e,t,1,255,0),this[t]=255&e,t+1},d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||U(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||U(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||U(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||U(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},d.prototype.writeBigUInt64LE=te((function(e,t=0){return M(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeBigUInt64BE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);U(this,e,t,n,r-1,-r)}let i=0,o=1,s=0;for(this[t]=255&e;++i<n&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+n},d.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);U(this,e,t,n,r-1,-r)}let i=n-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+n},d.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||U(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},d.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||U(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},d.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||U(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},d.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||U(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},d.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||U(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},d.prototype.writeBigInt64LE=te((function(e,t=0){return M(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeBigInt64BE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeFloatLE=function(e,t,n){return F(this,e,t,!0,n)},d.prototype.writeFloatBE=function(e,t,n){return F(this,e,t,!1,n)},d.prototype.writeDoubleLE=function(e,t,n){return $(this,e,t,!0,n)},d.prototype.writeDoubleBE=function(e,t,n){return $(this,e,t,!1,n)},d.prototype.copy=function(e,t,n,r){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},d.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!d.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const o=d.isBuffer(e)?e:d.from(e,r),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=o[i%s]}return this};const V={};function H(e,t,n){V[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function z(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function q(e,t,n,r,i,o){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(o+1)}${r}`:`>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new V.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){W(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||J(t,e.length-(n+1))}(r,i,o)}function W(e,t){if("number"!=typeof e)throw new V.ERR_INVALID_ARG_TYPE(t,"number",e)}function J(e,t,n){if(Math.floor(e)!==e)throw W(e,n),new V.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new V.ERR_BUFFER_OUT_OF_BOUNDS;throw new V.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}H("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),H("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),H("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=z(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=z(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const K=/[^+/0-9A-Za-z-_]/g;function G(e,t){let n;t=t||1/0;const r=e.length;let i=null;const o=[];for(let s=0;s<r;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Q(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(K,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Y(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function X(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),o.register("hqZtu",(function(t,n){var r,i;e(t.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=d(e),i=r[0],o=r[1],u=new a(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),c=0,l=o>0?i-4:i;for(n=0;n<l;n+=4)t=s[e.charCodeAt(n)]<<18|s[e.charCodeAt(n+1)]<<12|s[e.charCodeAt(n+2)]<<6|s[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=s[e.charCodeAt(n)]<<2|s[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===o&&(t=s[e.charCodeAt(n)]<<10|s[e.charCodeAt(n+1)]<<4|s[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,a=0,u=n-r;a<u;a+=s)i.push(f(e,a,a+s>u?u:a+s));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],s[u.charCodeAt(c)]=c;function d(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function f(e,t,n){for(var r,i,s=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return s.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63})),o.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",(function(){return r}),(function(e){return r=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,d=n?i-1:0,f=n?-1:1,h=e[t+d];for(d+=f,o=h&(1<<-l)-1,h>>=-l,l+=a;l>0;o=256*o+e[t+d],d+=f,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+e[t+d],d+=f,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(h?-1:1);s+=Math.pow(2,r),o-=c}return(h?-1:1)*s*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,d=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:o-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),(t+=s+d>=1?f/u:f*Math.pow(2,1-d))*u>=2&&(s++,u/=2),s+d>=l?(a=0,s=l):s+d>=1?(a=(t*u-1)*Math.pow(2,i),s+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,i),s=0));i>=8;e[n+h]=255&a,h+=p,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+h]=255&s,h+=p,s/=256,c-=8);e[n+h-p]|=128*g}})),o.register("5Dm7L",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("2bBga");var i=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){r.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}}})),o.register("eQ5d8",(function(t,n){e(t.exports,"default",(function(){return d}));var r=o("bhEpd"),i=o("ksuZT"),s=o("hqlPG"),a=o("83xK9"),u=o("gbTL1"),c=o("enpjQ");function l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,a.default)(null,e)}function d(e){l(e),e.headers=u.default.from(e.headers),e.data=r.default.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return c.default.getAdapter(e.adapter||s.default.adapter)(e).then((function(t){return l(e),t.data=r.default.call(e,e.transformResponse,t),t.headers=u.default.from(t.headers),t}),(function(t){return(0,i.default)(t)||(l(e),t&&t.response&&(t.response.data=r.default.call(e,e.transformResponse,t.response),t.response.headers=u.default.from(t.response.headers))),Promise.reject(t)}))}})),o.register("bhEpd",(function(t,n){e(t.exports,"default",(function(){return a}));var r=o("2bBga"),i=o("hqlPG"),s=o("gbTL1");function a(e,t){const n=this||i.default,o=t||n,a=s.default.from(o.headers);let u=o.data;return r.default.forEach(e,(function(e){u=e.call(n,u,a.normalize(),t?t.status:void 0)})),a.normalize(),u}})),o.register("hqlPG",(function(t,n){e(t.exports,"default",(function(){return h}));var r=o("2bBga"),i=o("121rJ"),s=o("2wfLM"),a=o("aewVa"),u=o("5tcKT"),c=o("hdo0R"),l=o("4bmvb");const d={"Content-Type":void 0};const f={transitional:s.default,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,o=r.default.isObject(e);o&&r.default.isHTMLForm(e)&&(e=new FormData(e));if(r.default.isFormData(e))return i&&i?JSON.stringify((0,l.default)(e)):e;if(r.default.isArrayBuffer(e)||r.default.isBuffer(e)||r.default.isStream(e)||r.default.isFile(e)||r.default.isBlob(e))return e;if(r.default.isArrayBufferView(e))return e.buffer;if(r.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,u.default)(e,this.formSerializer).toString();if((s=r.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return(0,a.default)(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),function(e,t,n){if(r.default.isString(e))try{return(t||JSON.parse)(e),r.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||f.transitional,n=t&&t.forcedJSONParsing,o="json"===this.responseType;if(e&&r.default.isString(e)&&(n&&!this.responseType||o)){const n=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw i.default.from(e,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.default.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.default.forEach(["post","put","patch"],(function(e){f.headers[e]=r.default.merge(d)}));var h=f})),o.register("2wfLM",(function(t,n){e(t.exports,"default",(function(){return r}));var r={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("5tcKT",(function(t,n){e(t.exports,"default",(function(){return a}));var r=o("2bBga"),i=o("aewVa"),s=o("hdo0R");function a(e,t){return(0,i.default)(e,new s.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return s.default.isNode&&r.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}})),o.register("hdo0R",(function(t,n){e(t.exports,"default",(function(){return u}));var r=o("9matH"),i=o("eN04z");const s=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var u={isBrowser:!0,classes:{URLSearchParams:r.default,FormData:i.default,Blob:Blob},isStandardBrowserEnv:s,isStandardBrowserWebWorkerEnv:a,protocols:["http","https","file","blob","url","data"]}})),o.register("9matH",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("hz3Ym"),i="undefined"!=typeof URLSearchParams?URLSearchParams:r.default})),o.register("eN04z",(function(t,n){e(t.exports,"default",(function(){return r}));var r=FormData})),o.register("4bmvb",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("2bBga");var i=function(e){function t(e,n,i,o){let s=e[o++];const a=Number.isFinite(+s),u=o>=e.length;if(s=!s&&r.default.isArray(i)?i.length:s,u)return r.default.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!a;i[s]&&r.default.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],o)&&r.default.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}(i[s])),!a}if(r.default.isFormData(e)&&r.default.isFunction(e.entries)){const n={};return r.default.forEachEntry(e,((e,i)=>{t(function(e){return r.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null}})),o.register("gbTL1",(function(t,n){e(t.exports,"default",(function(){return h}));var r=o("2bBga"),i=o("9cPEm");const s=Symbol("internals");function a(e){return e&&String(e).trim().toLowerCase()}function u(e){return!1===e||null==e?e:r.default.isArray(e)?e.map(u):String(e)}function c(e,t,n,i){return r.default.isFunction(i)?i.call(this,t,n):r.default.isString(t)?r.default.isString(i)?-1!==t.indexOf(i):r.default.isRegExp(i)?i.test(t):void 0:void 0}let l=Symbol.iterator,d=Symbol.toStringTag;class f{set(e,t,n){const o=this;function s(e,t,n){const i=a(t);if(!i)throw new Error("header name must be a non-empty string");const s=r.default.findKey(o,i);(!s||void 0===o[s]||!0===n||void 0===n&&!1!==o[s])&&(o[s||t]=u(e))}const c=(e,t)=>r.default.forEach(e,((e,n)=>s(e,n,t)));return r.default.isPlainObject(e)||e instanceof this.constructor?c(e,t):r.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?c((0,i.default)(e),t):null!=e&&s(t,e,n),this}get(e,t){if(e=a(e)){const n=r.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(r.default.isFunction(t))return t.call(this,e,n);if(r.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=a(e)){const n=r.default.findKey(this,e);return!(!n||t&&!c(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function o(e){if(e=a(e)){const o=r.default.findKey(n,e);!o||t&&!c(0,n[o],o,t)||(delete n[o],i=!0)}}return r.default.isArray(e)?e.forEach(o):o(e),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return r.default.forEach(this,((i,o)=>{const s=r.default.findKey(n,o);if(s)return t[s]=u(i),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=u(i),n[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return r.default.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&r.default.isArray(n)?n.join(", "):n)})),t}[l](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[d](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[s]=this[s]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=a(e);t[i]||(!function(e,t){const n=r.default.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[i]=!0)}return r.default.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}f.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),r.default.freezeMethods(f.prototype),r.default.freezeMethods(f);var h=f})),o.register("9cPEm",(function(t,n){e(t.exports,"default",(function(){return i}));const r=o("2bBga").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var i=e=>{const t={};let n,i,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),i=e.substring(o+1).trim(),!n||t[n]&&r[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t}})),o.register("ksuZT",(function(t,n){function r(e){return!(!e||!e.__CANCEL__)}e(t.exports,"default",(function(){return r}))})),o.register("83xK9",(function(t,n){e(t.exports,"default",(function(){return s}));var r=o("121rJ");function i(e,t,n){r.default.call(this,null==e?"canceled":e,r.default.ERR_CANCELED,t,n),this.name="CanceledError"}o("2bBga").default.inherits(i,r.default,{__CANCEL__:!0});var s=i})),o.register("enpjQ",(function(t,n){e(t.exports,"default",(function(){return c}));var r=o("2bBga"),i=o("1gvAv"),s=o("9VVcb"),a=o("121rJ");const u={http:i.default,xhr:s.default};r.default.forEach(u,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var c={getAdapter:e=>{e=r.default.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let o=0;o<t&&(n=e[o],!(i=r.default.isString(n)?u[n.toLowerCase()]:n));o++);if(!i){if(!1===i)throw new(0,a.default)(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(r.default.hasOwnProp(u,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!r.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:u}})),o.register("1gvAv",(function(t,n){e(t.exports,"default",(function(){return r}));var r=null})),o.register("9VVcb",(function(t,n){e(t.exports,"default",(function(){return v}));var r=o("2bBga"),i=o("1TQad"),s=o("kTwUV"),a=o("2RNjJ"),u=o("1ZTQa"),c=o("g3yOT"),l=o("2wfLM"),d=o("121rJ"),f=o("83xK9"),h=o("8wMQb"),p=o("hdo0R"),g=o("gbTL1"),m=o("5OiBb");function y(e,t){let n=0;const r=(0,m.default)(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,u=r(a);n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&o<=s?(s-o)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var v="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let o=e.data;const m=g.default.from(e.headers).normalize(),v=e.responseType;let b;function w(){e.cancelToken&&e.cancelToken.unsubscribe(b),e.signal&&e.signal.removeEventListener("abort",b)}r.default.isFormData(o)&&(p.default.isStandardBrowserEnv||p.default.isStandardBrowserWebWorkerEnv)&&m.setContentType(!1);let _=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.set("Authorization","Basic "+btoa(t+":"+n))}const E=(0,u.default)(e.baseURL,e.url);function I(){if(!_)return;const r=g.default.from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),o={data:v&&"text"!==v&&"json"!==v?_.response:_.responseText,status:_.status,statusText:_.statusText,headers:r,config:e,request:_};(0,i.default)((function(e){t(e),w()}),(function(e){n(e),w()}),o),_=null}if(_.open(e.method.toUpperCase(),(0,a.default)(E,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,"onloadend"in _?_.onloadend=I:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(I)},_.onabort=function(){_&&(n(new(0,d.default)("Request aborted",d.default.ECONNABORTED,e,_)),_=null)},_.onerror=function(){n(new(0,d.default)("Network Error",d.default.ERR_NETWORK,e,_)),_=null},_.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||l.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new(0,d.default)(t,r.clarifyTimeoutError?d.default.ETIMEDOUT:d.default.ECONNABORTED,e,_)),_=null},p.default.isStandardBrowserEnv){const t=(e.withCredentials||(0,c.default)(E))&&e.xsrfCookieName&&s.default.read(e.xsrfCookieName);t&&m.set(e.xsrfHeaderName,t)}void 0===o&&m.setContentType(null),"setRequestHeader"in _&&r.default.forEach(m.toJSON(),(function(e,t){_.setRequestHeader(t,e)})),r.default.isUndefined(e.withCredentials)||(_.withCredentials=!!e.withCredentials),v&&"json"!==v&&(_.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",y(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",y(e.onUploadProgress)),(e.cancelToken||e.signal)&&(b=t=>{_&&(n(!t||t.type?new(0,f.default)(null,e,_):t),_.abort(),_=null)},e.cancelToken&&e.cancelToken.subscribe(b),e.signal&&(e.signal.aborted?b():e.signal.addEventListener("abort",b)));const T=(0,h.default)(E);T&&-1===p.default.protocols.indexOf(T)?n(new(0,d.default)("Unsupported protocol "+T+":",d.default.ERR_BAD_REQUEST,e)):_.send(o||null)}))}})),o.register("1TQad",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("121rJ");function i(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new(0,r.default)("Request failed with status code "+n.status,[r.default.ERR_BAD_REQUEST,r.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),o.register("kTwUV",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("2bBga"),i=o("hdo0R").default.isStandardBrowserEnv?{write:function(e,t,n,i,o,s){const a=[];a.push(e+"="+encodeURIComponent(t)),r.default.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.default.isString(i)&&a.push("path="+i),r.default.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("1ZTQa",(function(t,n){e(t.exports,"default",(function(){return s}));var r=o("iUwU6"),i=o("91vFE");function s(e,t){return e&&!(0,r.default)(t)?(0,i.default)(e,t):t}})),o.register("iUwU6",(function(t,n){function r(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}e(t.exports,"default",(function(){return r}))})),o.register("91vFE",(function(t,n){function r(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}e(t.exports,"default",(function(){return r}))})),o.register("g3yOT",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("2bBga"),i=o("hdo0R").default.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=r.default.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}})),o.register("8wMQb",(function(t,n){function r(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}e(t.exports,"default",(function(){return r}))})),o.register("5OiBb",(function(t,n){e(t.exports,"default",(function(){return r}));var r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const u=Date.now(),c=r[s];i||(i=u),n[o]=a,r[o]=u;let l=s,d=0;for(;l!==o;)d+=n[l++],l%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),u-i<t)return;const f=c&&u-c;return f?Math.round(1e3*d/f):void 0}}})),o.register("d0EKm",(function(t,n){e(t.exports,"default",(function(){return a}));var r=o("2bBga"),i=o("gbTL1");const s=e=>e instanceof i.default?e.toJSON():e;function a(e,t){t=t||{};const n={};function i(e,t,n){return r.default.isPlainObject(e)&&r.default.isPlainObject(t)?r.default.merge.call({caseless:n},e,t):r.default.isPlainObject(t)?r.default.merge({},t):r.default.isArray(t)?t.slice():t}function o(e,t,n){return r.default.isUndefined(t)?r.default.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function a(e,t){if(!r.default.isUndefined(t))return i(void 0,t)}function u(e,t){return r.default.isUndefined(t)?r.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function c(n,r,o){return o in t?i(n,r):o in e?i(void 0,n):void 0}const l={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c,headers:(e,t)=>o(s(e),s(t),!0)};return r.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const s=l[i]||o,a=s(e[i],t[i],i);r.default.isUndefined(a)&&s!==c||(n[i]=a)})),n}})),o.register("6zj0X",(function(t,n){e(t.exports,"default",(function(){return u}));var r=o("50GW0"),i=o("121rJ");const s={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{s[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const a={};s.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r.VERSION+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new(0,i.default)(o(r," has been removed"+(t?" in "+t:"")),i.default.ERR_DEPRECATED);return t&&!a[r]&&(a[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var u={assertOptions:function(e,t,n){if("object"!=typeof e)throw new(0,i.default)("options must be an object",i.default.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],a=t[s];if(a){const t=e[s],n=void 0===t||a(t,s,e);if(!0!==n)throw new(0,i.default)("option "+s+" must be "+n,i.default.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new(0,i.default)("Unknown option "+s,i.default.ERR_BAD_OPTION)}},validators:s}})),o.register("50GW0",(function(t,n){e(t.exports,"VERSION",(function(){return r}));const r="1.2.2"})),o.register("2sjhC",(function(t,n){e(t.exports,"default",(function(){return s}));var r=o("83xK9");class i{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new i((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,i,o){n.reason||(n.reason=new(0,r.default)(e,i,o),t(n.reason))}))}}var s=i})),o.register("av9gA",(function(t,n){function r(e){return function(t){return e.apply(null,t)}}e(t.exports,"default",(function(){return r}))})),o.register("gNhGc",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("2bBga");function i(e){return r.default.isObject(e)&&!0===e.isAxiosError}})),o.register("jd7iQ",(function(t,n){e(t.exports,"default",(function(){return i}));const r={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(r).forEach((([e,t])=>{r[t]=e}));var i=r})),o.register("9XGHe",(function(n,r){e(n.exports,"default",(function(){return d}));var i=o("c55OR"),s=o("1K9LT"),a=o("iuZ0p"),u=(s=o("1K9LT"),o("ai8PQ"));const c=new(0,i.default);async function l(e){const t=await c.fetchMoviesGenres(s.default);return e.map((e=>{for(let n=0;n<t.length;n+=1)if(e===t[n].id||e.id===t[n].id)return t[n].name}))}async function d(e){return(await Promise.all(e.map((async({poster_path:e,release_date:n,genre_ids:r,title:i,id:o,genres:s})=>{const c=r?await l(r):await l(s),d=`https://image.tmdb.org/t/p/w500/${e}`,f=t(a),h=c.length<=3?c.join(", "):`${c[0]}, ${c[1]}, ${u.default?"Інші":"Other"}`;return`<li class="movies__item" data-id="${o}">\n        <a href="#" class="movies__link">\n          <img src="${e?d:f}" class="movies__img" alt="${i}" />\n\n          <div class="movies__info">\n            <h3 class="movies__title">${i}</h3>\n            <p class="movies__text">${0!==h.length?h:""+(u.default?"Жанр: невідомо":"Genre: unknown")} | ${n?new Date(n).getFullYear():""+(u.default?"Рік: невідомо":"Year: unknown")}</p>\n          </div>\n        </a>\n      </li>`})))).join("")}})),o.register("1K9LT",(function(t,n){e(t.exports,"default",(function(){return i}));let r=JSON.parse(localStorage.getItem("user-setting"));r||(r=location.href=`${window.location.pathname}#'en-US'`);var i=r.lang})),o.register("iuZ0p",(function(e,t){e.exports=new URL(o("kyEFX").resolve("bfHyM"),import.meta.url).toString()})),o.register("ai8PQ",(function(t,n){e(t.exports,"default",(function(){return r}));var r="uk-UA"===o("1K9LT").default})),o.register("fPwhI",(function(t,n){function r(e){e.textContent=""}function i(e){e.innerHTML=""}e(t.exports,"clearContent",(function(){return r})),e(t.exports,"clearHTML",(function(){return i}))})),o.register("iyY7Y",(function(t,n){e(t.exports,"default",(function(){return w}));var r=o("krGWQ"),i=o("9B8F0"),s=o("eWCmQ"),a=o("c55OR"),u=o("611E6"),c=o("d1cJf"),l=o("ir5Il"),d=o("gmD1w"),f=o("1K9LT"),h=o("ai8PQ"),p=o("fPwhI");r.default.movies.addEventListener("click",w);const g="watched",m="queue",y=new(0,a.default),v=JSON.parse(localStorage.getItem(g))||[],b=JSON.parse(localStorage.getItem(m))||[];async function w(e){try{if(e.preventDefault(),e.target===e.currentTarget)return;r.default.body.classList.add("disable-scroll"),r.default.modalClose.addEventListener("click",c.onCloseModal),r.default.backdrop.addEventListener("click",c.onCloseModalBackdrop),document.addEventListener("keydown",c.onCloseModalEsc),r.default.backdrop.classList.remove("is-hidden"),s.Loading.standard(),(0,p.clearHTML)(r.default.modalMovie);const t=JSON.parse(localStorage.getItem("auth"));let n=e.target.closest(".movies__item").dataset.id;const o=await y.fetchMovieDetails(n,f.default),{results:a}=await y.fetchMovieTrailer(n);(0,u.default)(o,a),s.Loading.remove();const l=document.getElementById("addToWatchedBtn"),d=document.getElementById("addToQueueBtn"),h=document.querySelector(".modal__trailer-btn");t?(l.style.display="block",d.style.display="block"):(l.style.display="none",d.style.display="none"),h.addEventListener("click",(()=>{!function(e){document.removeEventListener("keydown",c.onCloseModalEsc);const t=e.find((e=>"Official Trailer"===e.name)),n=i.create(`<iframe class="video-trailer" width="640" height="480" frameborder="0" allowfullscreen allow='autoplay'\n            src="https://www.youtube.com/embed/${t?t.key:"zwBpUdZ0lrQ"}?autoplay=1" >\n          </iframe>`,{onShow:e=>{window.addEventListener("keydown",(function t(n){"Escape"===n.code&&(e.close(),window.removeEventListener("keydown",t),document.addEventListener("keydown",c.onCloseModalEsc))}))}});n.show()}(a)})),l.addEventListener("click",(()=>{_(l,n,"watched","перегляду",v,g)})),d.addEventListener("click",(()=>{_(d,n,"queue","черги",b,m)}))}catch(e){s.Notify.failure(`${e.message}`)}}function _(e,t,n,r,i,o){e.textContent===`Add to ${n}`||e.textContent===`Додати до ${r}`?(h.default?e.textContent=`Видалити з ${r}`:e.textContent=`Remove from ${n}`,(0,l.default)(i,t,o),E()):(h.default?e.textContent=`Додати до ${r}`:e.textContent=`Add to ${n}`,(0,d.default)(i,t,o),E())}function E(){"/filmoteka-command-project/library.html"===window.location.pathname&&location.reload()}})),o.register("9B8F0",(function(e,t){e.exports=function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var u=void 0;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,(function(e){return i(t[s][1][e]||e)}),l,l.exports,e,t,n,r)}return n[s].exports}for(var o=void 0,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},o=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=o,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return o.appendChild(e)}));var s=i(o,"IMG"),a=i(o,"VIDEO"),u=i(o,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===u&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===o(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var a={element:function(){return n},visible:function(){return o(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:s};return a}},{}]},{},[1])(1)})),o.register("611E6",(function(n,r){e(n.exports,"default",(function(){return u}));var i=o("krGWQ"),s=o("iuZ0p"),a=o("ai8PQ");function u(e,n){const{poster_path:r,original_title:o,title:u,vote_average:c,vote_count:l,popularity:d,genres:f,overview:h,id:p}=e,g=c.toFixed(1),m=d.toFixed(1),y=f.map((e=>e.name)).join(", "),v=JSON.parse(localStorage.getItem("watched"))||[],b=JSON.parse(localStorage.getItem("queue"))||[],w=v.includes(p.toString()),_=b.includes(p.toString()),E=`\n        <div class="modal__img-container">\n          <img class="modal__image" src='${r?`https://image.tmdb.org/t/p/w500/${r}`:t(s)}' alt="${u}" width="264" height="374"/>\n          <button class="modal__trailer-btn" type="button">\n            <svg width="100" height="100" viewBox="-35.2 -41.333 305.067 248">\n              <path fill="red" d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85"/>\n              <path fill="#fff" d="m93.333 117.559 61.333-34.89-61.333-34.894z"/>\n            </svg>\n          </button>  \n        </div>\n        \n        <div class="modal__wrapper">\n            <h2 class="modal__title">${u||o||"Information is not available"}</h2>\n            <ul class="modal__list">\n            <li class="modal__item">\n                <p class="modal__text lang-rating">${a.default?"Рейтинг / Голосів":"Vote / Votes"}</p>\n                <div class="modal__vote-container">\n                <span class="modal__info modal__info--accent">${g||"Information is not available"}</span>\n                <span>/</span>\n                <span class="modal__info modal__info--noaccent">${l||""+(a.default?"Інформація не доступна":"Information is not available")}</span>\n                </div>\n            </li>\n\n            <li class="modal__item">\n                <p class="modal__text lang-popularity">${a.default?"Популярність":"Popularity"}</p>\n                <span class="modal__info">${m||""+(a.default?"Інформація не доступна":"Information is not available")}</span>\n            </li>\n\n            <li class="modal__item">\n                <p class="modal__text lang-original">${a.default?"Оригінальна назва":"Original Title"}</p>\n                <span class="modal__info">${o||u||""+(a.default?"Інформація не доступна":"Information is not available")}</span>\n            </li>\n\n            <li class="modal__item">\n                <p class="modal__text lang-genre">${a.default?"Жанр":"Genre"}</p>\n                <span class="modal__info">${0!==f.length?y:""+(a.default?"Інформація не доступна":"Information is not available")}</span>\n            </li>\n            </ul>\n\n            <div class="modal__desc">\n            <p class="modal__desc-title">${a.default?"Опис":"About"}</p>\n            <p class="modal__desc-text">${h||""+(a.default?"Інформація не доступна":"Information is not available")}</p>\n            <p class="modal__movie-id is-hidden">${p}</p>\n\n            <div class="modal__buttons-container">\n              <button type="button" class="modal__btn" id="addToWatchedBtn">${w?""+(a.default?"Видалити з перегляду":"Remove from watched"):""+(a.default?"Додати до перегляду":"Add to watched")}</button>\n              <button type="button" class="modal__btn" id="addToQueueBtn">${_?""+(a.default?"Видалити з черги":"Remove from queue"):""+(a.default?"Додати до черги":"Add to queue")}</button>\n                   \n            </div>\n            </div>\n        </div>`;i.default.modalMovie.innerHTML=E}})),o.register("ir5Il",(function(t,n){function r(e,t,n){e&&(e.includes(t.toString())||e.push(t),localStorage.setItem(n,JSON.stringify(e)))}e(t.exports,"default",(function(){return r}))})),o.register("gmD1w",(function(t,n){function r(e,t,n){const r=e.indexOf(t);e.splice(r,1),localStorage.setItem(n,JSON.stringify(e))}e(t.exports,"default",(function(){return r}))})),o.register("jux6J",(function(t,n){e(t.exports,"signUpWithGoogle",(function(){return i})),e(t.exports,"signOutFromGoogle",(function(){return s})),o("eyjy7");var r=o("2YDLC");function i(e){const t=(0,r.n)(e),n=new(0,r.Q)(e);(0,r.c)(t,n).then((e=>{const t=r.Q.credentialFromResult(e).accessToken;localStorage.setItem("auth",JSON.stringify(t)),location.reload()})).catch((e=>{const t=e.message;Notify.failure(`${t}`)}))}function s(e){const t=(0,r.n)(e);(0,r.y)(t).then((()=>{localStorage.removeItem("auth"),location.href="index.html"})).catch((e=>{Notify.failure(`${e.message}`)}))}})),o.register("eyjy7",(function(t,n){e(t.exports,"getAuth",(function(){return o("2YDLC").n})),e(t.exports,"GoogleAuthProvider",(function(){return o("2YDLC").Q})),e(t.exports,"signInWithPopup",(function(){return o("2YDLC").c})),e(t.exports,"signOut",(function(){return o("2YDLC").y})),o("1iO0g")})),o.register("1iO0g",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return o("2YDLC").Q})),e(t.exports,"getAuth",(function(){return o("2YDLC").n})),e(t.exports,"signInWithPopup",(function(){return o("2YDLC").c})),e(t.exports,"signOut",(function(){return o("2YDLC").y})),o("ffjl9"),o("ix4Jr"),o("7vF8m"),o("4a6xH");o("2YDLC")})),o.register("ffjl9",(function(t,r){e(t.exports,"base64urlEncodeWithoutPadding",(function(){return u})),e(t.exports,"base64Decode",(function(){return c})),e(t.exports,"getUA",(function(){return l})),e(t.exports,"isMobileCordova",(function(){return d})),e(t.exports,"isBrowserExtension",(function(){return f})),e(t.exports,"isReactNative",(function(){return h})),e(t.exports,"isIE",(function(){return p})),e(t.exports,"isIndexedDBAvailable",(function(){return g})),e(t.exports,"validateIndexedDBOpenable",(function(){return m})),e(t.exports,"getDefaultEmulatorHost",(function(){return b})),e(t.exports,"getDefaultAppConfig",(function(){return w})),e(t.exports,"getExperimentalSetting",(function(){return _})),e(t.exports,"Deferred",(function(){return E})),e(t.exports,"FirebaseError",(function(){return I})),e(t.exports,"ErrorFactory",(function(){return T})),e(t.exports,"isEmpty",(function(){return O})),e(t.exports,"deepEqual",(function(){return R})),e(t.exports,"querystring",(function(){return k})),e(t.exports,"querystringDecode",(function(){return C})),e(t.exports,"extractQuerystring",(function(){return N})),e(t.exports,"createSubscribe",(function(){return x})),e(t.exports,"getModularInstance",(function(){return D}));var i=o("4TNnu");
/**
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
 */const s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,c=i>>2,l=(3&i)<<4|s>>4;let d=(15&s)<<2|u>>6,f=63&u;a||(f=64,o||(d=64)),r.push(n[c],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==a)throw Error();const u=i<<2|o>>4;if(r.push(u),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){return function(e){const t=s(e);return a.encodeByteArray(t,!0)}(e).replace(/\./g,"")},c=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function d(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function h(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){try{return"object"==typeof indexedDB}catch(e){return!1}}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
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
 */
const y=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,v=()=>{try{return y()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&c(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=v())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},w=()=>{var e;return null===(e=v())||void 0===e?void 0:e.config},_=e=>{var t;return null===(t=v())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class E{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class I extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(S,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new I(r,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const S=/\{\$([^}]+)}/g;
/**
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
 */function O(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(A(n)&&A(o)){if(!R(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function A(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function k(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function C(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function N(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function x(e,t){const n=new L(e,t);return n.subscribe.bind(n)}class L{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function P(){}
/**
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
 */
/**
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
 */
function D(e){return e&&e._delegate?e._delegate:e}})),o.register("4TNnu",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&h())}function h(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("ix4Jr",(function(t,n){e(t.exports,"_registerComponent",(function(){return y})),e(t.exports,"_getProvider",(function(){return v})),e(t.exports,"SDK_VERSION",(function(){return E})),e(t.exports,"initializeApp",(function(){return I})),e(t.exports,"getApp",(function(){return T})),e(t.exports,"registerVersion",(function(){return S}));var r=o("4a6xH"),i=o("7vF8m"),s=o("ffjl9"),a=o("cCiiD");s=o("ffjl9");
/**
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
 */
class u{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const c="@firebase/app",l="0.9.0",d=new(0,i.Logger)("@firebase/app"),f="[DEFAULT]",h={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e){const t=e.name;if(g.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;g.set(t,e);for(const t of p.values())m(t,e);return!0}function v(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const b={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},w=new(0,s.ErrorFactory)("app","Firebase",b);
/**
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
 */
class _{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}}
/**
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
 */const E="9.15.0";function I(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:f,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw w.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.getDefaultAppConfig)()),!n)throw w.create("no-options");const a=p.get(o);if(a){if((0,s.deepEqual)(n,a.options)&&(0,s.deepEqual)(i,a.config))return a;throw w.create("duplicate-app",{appName:o})}const u=new(0,r.ComponentContainer)(o);for(const e of g.values())u.addComponent(e);const c=new _(n,i,u);return p.set(o,c),c}function T(e="[DEFAULT]"){const t=p.get(e);if(!t&&e===f)return I();if(!t)throw w.create("no-app",{appName:e});return t}function S(e,t,n){var i;let o=null!==(i=h[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}y(new(0,r.Component)(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
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
 */
const O="firebase-heartbeat-store";let R=null;function A(){return R||(R=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(O)}}).catch((e=>{throw w.create("idb-open",{originalErrorMessage:e.message})}))),R}async function k(e,t){try{const n=(await A()).transaction(O,"readwrite"),r=n.objectStore(O);return await r.put(t,C(e)),n.done}catch(e){if(e instanceof s.FirebaseError)d.warn(e.message);else{const t=w.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}function C(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class N{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=x();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=x(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),P(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),P(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function x(){return(new Date).toISOString().substring(0,10)}class L{async runIndexedDBEnvironmentCheck(){return!!(0,s.isIndexedDBAvailable)()&&(0,s.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await A()).transaction(O).objectStore(O).get(C(e))}catch(e){if(e instanceof s.FirebaseError)d.warn(e.message);else{const t=w.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return k(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function P(e){return(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var D;D="",y(new(0,r.Component)("platform-logger",(e=>new u(e)),"PRIVATE")),y(new(0,r.Component)("heartbeat",(e=>new N(e)),"PRIVATE")),S(c,l,D),S(c,l,"esm2017"),S("fire-js","")})),o.register("4a6xH",(function(t,n){e(t.exports,"Component",(function(){return i})),e(t.exports,"ComponentContainer",(function(){return u}));var r=o("ffjl9");class i{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class a{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,r.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===s?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class u{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),o.register("7vF8m",(function(t,n){e(t.exports,"LogLevel",(function(){return i})),e(t.exports,"Logger",(function(){return l})),e(t.exports,"setLogLevel",(function(){return d})),e(t.exports,"setUserLogHandler",(function(){return f}));
/**
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
 */
const r=[];var i,o;(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,u={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=u[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}}function d(e){r.forEach((t=>{t.setLogLevel(e)}))}function f(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}})),o.register("cCiiD",(function(t,n){e(t.exports,"openDB",(function(){return i}));var r=o("ekHjI");r=o("ekHjI");function i(e,t,{blocked:n,upgrade:i,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),u=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(e=>{i((0,r.w)(a.result),e.oldVersion,e.newVersion,(0,r.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),u.then((e=>{s&&e.addEventListener("close",(()=>s())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),u}const s=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],u=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(u.get(t))return u.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!s.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return u.set(t,o),o}(0,r.r)((e=>({...e,get:(t,n,r)=>c(t,n)||e.get(t,n,r),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),o.register("ekHjI",(function(t,n){e(t.exports,"w",(function(){return p})),e(t.exports,"r",(function(){return d}));let r,i;const o=new WeakMap,s=new WeakMap,a=new WeakMap,u=new WeakMap,c=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return s.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){l=e(l)}function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),p(o.get(this))}:function(...t){return p(e.apply(g(this),t))}:function(t,...n){const r=e.call(g(this),t,...n);return a.set(r,t.sort?t.sort():[t]),p(r)}}function h(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(s.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));s.set(e,t)}(e),t=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,l):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(p(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),c.set(t,e),t}(e);if(u.has(e))return u.get(e);const t=h(e);return t!==e&&(u.set(e,t),c.set(t,e)),t}const g=e=>c.get(e)})),o.register("2YDLC",(function(t,n){e(t.exports,"Q",(function(){return ke})),e(t.exports,"y",(function(){return je})),e(t.exports,"c",(function(){return bt})),e(t.exports,"n",(function(){return en}));var r=o("ffjl9"),i=o("ix4Jr"),s=o("7vF8m"),a=o("l73V3"),u=o("4a6xH");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,d=new(0,r.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),f=new(0,s.Logger)("@firebase/auth");function h(e,...t){f.logLevel<=s.LogLevel.ERROR&&f.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
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
 */function p(e,...t){throw v(e,...t)}function g(e,...t){return v(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n});return new(0,r.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function y(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return d.create(e,...t)}function b(e,t,...n){if(!e)throw v(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function _(e,t){e||w(t)}
/**
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
 */const E=new Map;function I(e){_(e instanceof Function,"Expected a class definition");let t=E.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,E.set(e,t),t)}
/**
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
 */
/**
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
 */
function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===O()||"https:"===O()}function O(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */
/**
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
 */
class R{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(S()||(0,r.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}}
/**
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
 */function A(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class k{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},N=new R(3e4,6e4);
/**
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
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return P(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.querystring)(Object.assign({key:e.config.apiKey},s)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),k.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},o))}))}async function P(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},C),t);try{const t=new M(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw B(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw B(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);p(e,a)}}catch(t){if(t instanceof r.FirebaseError)throw t;p(e,"network-request-failed")}}async function D(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&p(e,"multi-factor-auth-required",{_serverResponse:o}),o}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?A(e.config,i):`${e.config.apiScheme}://${i}`}class M{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),N.get())}))}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */
/**
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
 */
function j(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function F(e){return 1e3*Number(e)}function $(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.base64Decode)(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(e){return h("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
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
 */
async function V(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class H{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
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
 */class z{_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
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
 */async function q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await V(e,async function(e,t){return L(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));b(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,a.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const u=(c=e.providerData,l=s,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const d=e.isAnonymous,f=!(e.email&&o.passwordHash||(null==u?void 0:u.length)),h=!!d&&f,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new z(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,p)}
/**
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
 */
class W{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(void 0!==e.idToken,"internal-error"),b(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=$(e);return b(t,"internal-error"),b(void 0!==t.exp,"internal-error"),b(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:o}=await
/**
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
 */
async function(e,t){const n=await P(e,{},(async()=>{const n=(0,r.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=U(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new W;return n&&(b("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(b("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(b("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new W,this.toJSON())}_performRefresh(){return w("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
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
 */function J(e,t){b("string"==typeof e||void 0===e,"internal-error",{appName:t})}class K{async getIdToken(e){const t=await V(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,r.getModularInstance)(e),i=await n.getIdToken(t),o=$(i);b(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"==typeof o.firebase?o.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:o,token:i,authTime:j(F(o.auth_time)),issuedAtTime:j(F(o.iat)),expirationTime:j(F(o.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,r.getModularInstance)(e);await q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new K(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await V(this,async function(e,t){return L(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=t.createdAt)&&void 0!==u?u:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:I}=t;b(v&&I,e,"internal-error");const T=W.fromJSON(this.name,I);b("string"==typeof v,e,"internal-error"),J(l,e.name),J(d,e.name),b("boolean"==typeof w,e,"internal-error"),b("boolean"==typeof _,e,"internal-error"),J(f,e.name),J(h,e.name),J(p,e.name),J(g,e.name),J(m,e.name),J(y,e.name);const S=new K({uid:v,auth:e,email:d,emailVerified:w,displayName:l,isAnonymous:_,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new W;r.updateFromServerResponse(t);const i=new K({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await q(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,a.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new z(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
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
 */class G{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}G.type="NONE";const Q=G;
/**
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
 */function Y(e,t,n){return`firebase:${e}:${t}:${n}`}class X{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?K._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new X(I(Q),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||I(Q);const o=Y(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=K._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new X(i,e,n)):new X(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Y(this.userKey,r.apiKey,i),this.fullPersistenceKey=Y("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
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
 */function Z(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(re(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(oe(t))return"Blackberry";if(se(t))return"Webos";if(te(t))return"Safari";if((t.includes("chrome/")||ne(t))&&!t.includes("edge/"))return"Chrome";if(ie(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ee(e=(0,r.getUA)()){return/firefox\//i.test(e)}function te(e=(0,r.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ne(e=(0,r.getUA)()){return/crios\//i.test(e)}function re(e=(0,r.getUA)()){return/iemobile/i.test(e)}function ie(e=(0,r.getUA)()){return/android/i.test(e)}function oe(e=(0,r.getUA)()){return/blackberry/i.test(e)}function se(e=(0,r.getUA)()){return/webos/i.test(e)}function ae(e=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ue(e=(0,r.getUA)()){return ae(e)||ie(e)||se(e)||oe(e)||/windows phone/i.test(e)||re(e)}
/**
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
 */
function ce(e,t=[]){let n;switch(e){case"Browser":n=Z((0,r.getUA)());break;case"Worker":n=`${Z((0,r.getUA)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${o}`}
/**
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
 */class le{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
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
 */class de{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=I(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await X.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await q(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.getModularInstance)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(I(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,r.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&I(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await X.create(this,[I(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return b(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new he(this),this.idTokenSubscription=new he(this),this.beforeStateQueue=new le(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function fe(e){return(0,r.getModularInstance)(e)}class he{get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.createSubscribe)((e=>this.observer=e))}}function pe(e,t,n){const r=fe(e);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=ge(t),{host:s,port:a}=function(e){const t=ge(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:me(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:me(t)}}}(t),u=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function ge(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function me(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ye{toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
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
 */async function ve(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
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
 */
class be extends ye{static _fromEmailAndPassword(e,t){return new be(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new be(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
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
 */
return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
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
 */
return async function(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ve(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
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
 */async function we(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
/**
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
 */class _e extends ye{static _fromParams(e){const t=new _e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,a.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new _e(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return we(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,we(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,we(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
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
 */const Ee={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class Ie extends ye{static _fromVerification(e,t){return new Ie({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ie({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ee)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ie({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
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
 */class Te{static parseLink(e){const t=function(e){const t=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).link,n=t?(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id:null,i=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id;return(i?(0,r.querystringDecode)((0,r.extractQuerystring)(i)).link:null)||i||n||t||e}(e);try{return new Te(t)}catch(e){return null}}constructor(e){var t,n,i,o,s,a;const u=(0,r.querystringDecode)((0,r.extractQuerystring)(e)),c=null!==(t=u.apiKey)&&void 0!==t?t:null,l=null!==(n=u.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=u.mode)&&void 0!==i?i:null);b(c&&l&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=l,this.continueUrl=null!==(o=u.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=u.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=u.tenantId)&&void 0!==a?a:null}}
/**
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
 */
class Se{static credential(e,t){return be._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Te.parseLink(t);return b(n,"argument-error"),be._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Se.PROVIDER_ID}}Se.PROVIDER_ID="password",Se.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Se.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Oe{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
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
 */class Re extends Oe{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
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
 */
class Ae extends Re{static credential(e){return _e._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Ae.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ae.PROVIDER_ID="facebook.com";
/**
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
 */
class ke extends Re{static credential(e,t){return _e._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ke.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}ke.GOOGLE_SIGN_IN_METHOD="google.com",ke.PROVIDER_ID="google.com";
/**
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
 */
class Ce extends Re{static credential(e){return _e._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ce.GITHUB_SIGN_IN_METHOD="github.com",Ce.PROVIDER_ID="github.com";
/**
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
 */
class Ne extends Re{static credential(e,t){return _e._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ne.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Ne.TWITTER_SIGN_IN_METHOD="twitter.com",Ne.PROVIDER_ID="twitter.com";
/**
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
 */
class xe{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await K._fromIdTokenResponse(e,n,r),o=Le(n);return new xe({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Le(n);return new xe({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Le(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class Pe extends r.FirebaseError{static _fromErrorAndOperation(e,t,n,r){return new Pe(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Pe.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function De(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pe._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function Ue(e,t,n=!1){const r=await V(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xe._forOperation(e,"link",r)}
/**
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
 */
async function Me(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await V(e,De(r,i,t,e),n);b(o.idToken,r,"internal-error");const s=$(o.idToken);b(s,r,"internal-error");const{sub:a}=s;return b(e.uid===a,r,"user-mismatch"),xe._forOperation(e,i,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&p(r,"user-mismatch"),e}}
/**
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
 */async function Be(e,t,n=!1){const r="signIn",i=await De(e,r,t),o=await xe._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function je(e){return(0,r.getModularInstance)(e).signOut()}new WeakMap;const Fe="__sak";
/**
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
 */class $e{_isAvailable(){try{return this.storage?(this.storage.setItem(Fe,"1"),this.storage.removeItem(Fe),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
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
 */class Ve extends $e{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);(0,r.isIE)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,r.getUA)();return te(e)||ae(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ue(),this._shouldAllowMigration=!0}}Ve.type="LOCAL";const He=Ve;
/**
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
 */class ze extends $e{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}ze.type="SESSION";const qe=ze;
/**
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
 */
/**
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
 */
class We{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new We(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
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
 */
function Je(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */We.receivers=[];class Ke{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const u=Je("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
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
 */function Ge(){return window}
/**
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
 */
function Qe(){return void 0!==Ge().WorkerGlobalScope&&"function"==typeof Ge().importScripts}
/**
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
 */
const Ye="firebaseLocalStorageDb",Xe="firebaseLocalStorage",Ze="fbase_key";class et{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function tt(e,t){return e.transaction([Xe],t?"readwrite":"readonly").objectStore(Xe)}function nt(){const e=indexedDB.open(Ye,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Xe,{keyPath:Ze})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Xe)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Ye);return new et(e).toPromise()}(),t(await nt()))}))}))}async function rt(e,t,n){const r=tt(e,!0).put({[Ze]:t,value:n});return new et(r).toPromise()}function it(e,t){const n=tt(e,!0).delete(t);return new et(n).toPromise()}class ot{async _openDb(){return this.db||(this.db=await nt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=We._getInstance(Qe()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ke(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nt();return await rt(e,Fe,"1"),await it(e,Fe),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>rt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=tt(e,!1).get(t),r=await new et(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>it(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=tt(e,!1).getAll();return new et(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}ot.type="LOCAL";const st=ot;
/**
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
 */function at(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
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
 */
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)}))}function ut(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
ut("rcb"),new R(3e4,6e4);
/**
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
 */
const ct="recaptcha";async function lt(e,t,n){var r;const i=await n.verify();try{let o;if(b("string"==typeof i,e,"argument-error"),b(n.type===ct,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){b("enroll"===t.type,e,"internal-error");const n=await
/**
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
 */
function(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;b(n,e,"missing-multi-factor-info");const s=await function(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class dt{verifyPhoneNumber(e,t){return lt(this.auth,e,(0,r.getModularInstance)(t))}static credential(e,t){return Ie._fromVerification(e,t)}static credentialFromResult(e){const t=e;return dt.credentialFromTaggedObject(t)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ie._fromTokenResponse(t,n):null}constructor(e){this.providerId=dt.PROVIDER_ID,this.auth=fe(e)}}
/**
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
 */
function ft(e,t){return t?I(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */dt.PROVIDER_ID="phone",dt.PHONE_SIGN_IN_METHOD="phone";class ht extends ye{_getIdTokenResponse(e){return we(e,this._buildIdpRequest())}_linkToIdToken(e,t){return we(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return we(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function pt(e){return Be(e.auth,new ht(e),e.bypassAuthState)}function gt(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Me(n,new ht(e),e.bypassAuthState)}async function mt(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Ue(n,new ht(e),e.bypassAuthState)}
/**
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
 */class yt{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pt;case"linkViaPopup":case"linkViaRedirect":return mt;case"reauthViaPopup":case"reauthViaRedirect":return gt;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
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
 */const vt=new R(2e3,1e4);async function bt(e,t,n){const r=fe(e);y(e,t,Oe);const i=ft(r,n);return new wt(r,"signInViaPopup",t,i).executeNotNull()}class wt extends yt{async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=Je();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,vt.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}}wt.currentPopupAction=null;
/**
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
 */
const _t=new Map;class Et extends yt{async execute(){let e=_t.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=St(t),r=Tt(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}_t.set(this.auth._key(),e)}return this.bypassAuthState||_t.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function It(e,t){_t.set(e._key(),t)}function Tt(e){return I(e._redirectPersistence)}function St(e){return Y("pendingRedirect",e.config.apiKey,e.name)}
/**
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
 */async function Ot(e,t,n=!1){const r=fe(e),i=ft(r,t),o=new Et(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}class Rt{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kt(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!kt(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(At(e))}saveEventToCache(e){this.cachedEventUids.add(At(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function At(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function kt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Ct=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nt=/^https?/;async function xt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return L(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Lt(e))return}catch(e){}p(e,"unauthorized-domain")}function Lt(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Nt.test(n))return!1;if(Ct.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const Pt=new R(3e4,6e4);function Dt(){const e=Ge().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ut=null;function Mt(e){return Ut=Ut||function(e){return new Promise(((t,n)=>{var r,i,o;function s(){Dt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dt(),n(g(e,"network-request-failed"))},timeout:Pt.get()})}if(null===(i=null===(r=Ge().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Ge().gapi)||void 0===o?void 0:o.load)){const t=ut("iframefcb");return Ge()[t]=()=>{gapi.load?s():n(g(e,"network-request-failed"))},at(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Ut=null,e}))}(e),Ut}
/**
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
 */const Bt=new R(5e3,15e3),jt={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ft=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $t(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,o={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},s=Ft.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.querystring)(o).slice(1)}`}
/**
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
 */
const Vt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ht{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function zt(e,t,n,i=500,o=600){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const c=Object.assign(Object.assign({},Vt),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.getUA)().toLowerCase();n&&(u=ne(l)?"_blank":n),ee(l)&&(t=t||"http://localhost",c.scrollbars="yes");const d=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,r.getUA)()){var t;return ae(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==u)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",u),new Ht(null);const f=window.open(t||"",u,d);b(f,e,"popup-blocked");try{f.focus()}catch(e){}return new Ht(f)}const qt="emulator/auth/handler";function Wt(e,t,n,o,s,a){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.SDK_VERSION,eventId:s};if(t instanceof Oe){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",(0,r.isEmpty)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))u[e]=t}if(t instanceof Re){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);const c=u;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];return`${function({config:e}){return e.emulator?A(e,qt):`https://${e.authDomain}/__/auth/handler`}
/**
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
 */(e)}?${(0,r.querystring)(c).slice(1)}`}const Jt="webStorageSupport";const Kt=class{async _openPopup(e,t,n,r){var i;_(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return zt(e,Wt(e,t,n,T(),r),Je())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Wt(e,t,n,T(),r),Ge().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Mt(e),n=Ge().gapi;return b(n,e,"internal-error"),t.open({where:document.body,url:$t(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jt,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),o=Ge().setTimeout((()=>{r(i)}),Bt.get());function s(){Ge().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new Rt(e);return t.register("authEvent",(t=>{b(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jt,{type:Jt},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ue()||te()||ae()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qe,this._completeRedirectFn=Ot,this._overrideRedirectResult=It}};var Gt="@firebase/auth",Qt="0.21.0";
/**
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
 */
class Yt{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
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
 */
/**
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
 */
const Xt=(0,r.getExperimentalSetting)("authIdTokenMaxAge")||300;let Zt=null;function en(e=(0,i.getApp)()){const t=(0,i._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,i._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.deepEqual)(i,null!=t?t:{}))return e;p(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Kt,persistence:[st,He,qe]}),o=(0,r.getExperimentalSetting)("authTokenSyncURL");if(o){const e=(s=o,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Xt)return;const r=null==t?void 0:t.token;Zt!==r&&(Zt=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){(0,r.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){(0,r.getModularInstance)(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const a=(0,r.getDefaultEmulatorHost)("auth");return a&&pe(n,`http://${a}`),n}var tn;tn="Browser",(0,i._registerComponent)(new(0,u.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{b(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),b(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:tn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ce(tn)},s=new de(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(I);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,i._registerComponent)(new(0,u.Component)("auth-internal",(e=>{const t=fe(e.getProvider("auth").getImmediate());return new Yt(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(Gt,Qt,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(tn)),(0,i.registerVersion)(Gt,Qt,"esm2017")})),o.register("l73V3",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),o.register("8lXmX",(function(t,n){e(t.exports,"app",(function(){return r})),o("gKkQl");const r=(0,o("ix4Jr").initializeApp)({apiKey:"AIzaSyDmJ4-dsNeYfju7UGbKCBelQu0yDTY7HvQ",authDomain:"filmoteka-project-692be.firebaseapp.com",projectId:"filmoteka-project-692be",storageBucket:"filmoteka-project-692be.appspot.com",messagingSenderId:"387583714893",appId:"1:387583714893:web:72ce0f43106b12031d9e04"})})),o.register("gKkQl",(function(t,n){e(t.exports,"initializeApp",(function(){return o("ix4Jr").initializeApp})),e(t.exports,"registerVersion",(function(){return o("ix4Jr").registerVersion}));o("ix4Jr");
/**
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
 */
(0,o("ix4Jr").registerVersion)("firebase","9.15.0","app")})),o("kyEFX").register(JSON.parse('{"iuQel":"index.23836ec9.js","bfHyM":"default.23045a4e.jpg"}'));
//# sourceMappingURL=index.23836ec9.js.map

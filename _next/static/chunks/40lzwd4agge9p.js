(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,991733,(__turbopack_context__,module,exports)=>{!function(){var __webpack_modules__={285:function(__unused_webpack_module,exports){var indexOf=function(M,L){if(M.indexOf)return M.indexOf(L);for(var R=0;R<M.length;R++)if(M[R]===L)return R;return -1},Object_keys=function(M){if(Object.keys)return Object.keys(M);var L=[];for(var R in M)L.push(R);return L},forEach=function(M,L){if(M.forEach)return M.forEach(L);for(var R=0;R<M.length;R++)L(M[R],R,M)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(M,L,R){Object.defineProperty(M,L,{writable:!0,enumerable:!1,configurable:!0,value:R})}}catch(M){return function(M,L,R){M[L]=R}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];function Context(){}Context.prototype={};var Script=exports.Script=function(M){if(!(this instanceof Script))return new Script(M);this.code=M};Script.prototype.runInContext=function(M){if(!(M instanceof Context))throw TypeError("needs a 'context' argument.");var L=document.createElement("iframe");L.style||(L.style={}),L.style.display="none",document.body.appendChild(L);var R=L.contentWindow,O=R.eval,A=R.execScript;!O&&A&&(A.call(R,"null"),O=R.eval),forEach(Object_keys(M),function(L){R[L]=M[L]}),forEach(globals,function(L){M[L]&&(R[L]=M[L])});var E=Object_keys(R),T=O.call(R,this.code);return forEach(Object_keys(R),function(L){(L in M||-1===indexOf(E,L))&&(M[L]=R[L])}),forEach(globals,function(L){L in M||defineProp(M,L,R[L])}),document.body.removeChild(L),T},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(M){var L=Script.createContext(M),R=this.runInContext(L);return M&&forEach(Object_keys(L),function(R){M[R]=L[R]}),R},forEach(Object_keys(Script.prototype),function(M){exports[M]=Script[M]=function(L){var R=Script(L);return R[M].apply(R,[].slice.call(arguments,1))}}),exports.isContext=function(M){return M instanceof Context},exports.createScript=function(M){return exports.Script(M)},exports.createContext=Script.createContext=function(M){var L=new Context;return"object"==typeof M&&forEach(Object_keys(M),function(R){L[R]=M[R]}),L}}};"u">typeof __nccwpck_require__&&(__nccwpck_require__.ab="/ROOT/node_modules/.pnpm/next@16.4.5_@babel+core@7.28.5_@types+node@20.19.25_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.103.1/node_modules/next/dist/compiled/vm-browserify/");var __webpack_exports__={};__webpack_modules__[285](0,__webpack_exports__),module.exports=__webpack_exports__}()},904015,(M,L,R)=>{L.exports={seed:"13628364118019185653",holes:["e4d0670953fadb5e82380f70c0fc439573a4ca3277a9eab31987c0217c179afd","614d938b9377c6c7fa24e0aa1bc3ceb90bf37d331c88fe84cbf709276d161c29","67722fd1ca70bccebdd6787527e384b2233ce111066d0c2ebf8273b0c1120af6","f072223e54bfd680acafa5424c50c2da79bef404281f5dc34be3ea9aa70f0240","1d3ab39cc26d8989303a179e7b7d01c46e89cc3ba50996b9608e0367447f60ca","f972a30da24905b217c2c75212e3a3ee24f6aa96ffafb055414a1b27314b80b1","14837b5e8f3812a696837b3c9dfd2afcb57b65b6270393047fb41bead7d3a9b2","c0a4e865cd3a02d725eb9ff070a8090c1a8c2189b6b4921907ea50b8b278dfc6","f5a718c753f11e1e0889c5363aafed39d47e15895f8bfe294604df2729e8eb4f","b511813a9b6e7bc9eb2fd18d32b1ca9c5c1de065dbaafac42cbe3099f6520708","e263ab6c6e040442016e946922746c2371922adaef4b6e1f1d7c654e9bbd2022","f9b9e5d848dd227e9aa9ac21a5dc22ccc6fa4ed504ff942254d47545d651b136","6b2fa3d15d604c85cc5ec250eb726784293595bfb28d94e20c0cdd40bb3ccc09","fda8a31f628da0a81a9c0109c81db9c9701a99b7128f6d72da66035b54cd70c1","4c5d22be1e3ffb4159e6807ec4385a78c07cf090b0e4483fa7f1ab7988ecd8a4","9ea31be43aba305bce83fb69c0b7157a8601157fc5cb4a7bf1dce1b551ed7682","a38889011756f9cb0e9ee7a436dfa08c936c74278973546a246b9a18d70cdf3a","b89e98c2e190a02a7920db3239e6bc9e5b75dfdd9f315de9bb1b8b12093ea95f","633d0594c1ac56fb39b0c72aaf8edd4365e2f65665488ca7a70b9e9dad3f6865","5ece2b46fc965ee387ce86a0dbc8505015c75628158c91dfb323b783c38ab3fb","8add2a4c4da2fc393aa3df8235b6fee65fd8a24cfb4e26e7ff85d028623473db","276dfdee86c525e68f2f34b5d633ebab6c3ca97f500511d8c91c84ac0e905e9f","3c83355b49a70dcb298665cbe262b487eb5e0174c49b4f50e0b388f96381fa53","88f6fe29a0c26e2dd2a4be6ba63e98703b6615a839fdbaac178b8b2fe689be1a","d461c28237327b2d2d42cd3c0f043d6f8ad223d87616eff5fbd6d437425d2c8a","01f377ba618bff5a4d9e45a661cc98b11cfd8e268fe8c6e76336f591006afc5d","2ea67dc0b1746eff0019d33beda42573d280d80f72657ba63f5d6165818564a9","3a9a3a62b9e24be13f84eed17e85424c63af8be4f4e053f029f695eb10a3852f","2fce7d2fabcb48d4be59ee0b1f26eb8ae0675ca5ffd4d87920a87e31b888a46f","63a023540ecd45f392606105b1b356ab1b57fd8c5431c9eac80c52dce0815f26","b44f3335dbc48112da3c668a3a2e81a4cb4e3dc475d98910f2c25f912165668d","a5570a26a11628aaa5cb0244bbdcc9976a80e3f1eeff11f4194dc24dd4c86476","cc04f701ee1c7e8074a9eee3de423097eca478bb073390b5bd55ba80190b209b","8eb102ab579e41af371ca64b67a74559217de5f74b39ae21a581bdedf541f9e0","697718ed29ad2bd6945a1973f368eb4e5bcc52ba51842a187ab289523e1b7777","50682c497bb2976d0b6abd7c89448d2f7f689352cf635c81851ade27aa7aa74c","f4efbf598c4ae7d34f14616d23574ae703ef196ffd0dcfbd985e2e26d76136ce","46d1879b768bd8b38af699213c0daae6140954bd0af50d492332e7bc308c3702","a7897c97000e5989b5bacb1eba30d33694c8f75612764b4266d0c65c6210da4d","2c026a79d29f74af8cbfbc36266e5628656710a006883a96ae77c5371bcadc7a","41ea820734d4f860efa6bc278dc2eb2afe70b982a1268693c7b3d52daa47a835","5cf70859c370ec3a740809f14dd546bee2ee4be6df64b3e59b3a923db3f21477","bde7a89d6fe74dc1afb59311c02064db20b3119374ea54182ee7691580bb120e","6bc8cc7f792ce2020684099ed4d77526eedc04d2ab28283fb47e5d014267fb86","0bfa387257bb1df8937cfb4a27caf53971422c238fcf0d3c9abc40a917ce14d5","06a67179587590e8a0b415d918f273eb9bc28fbfc462689d26dea86120b28f55","643b6a1b7fc284bdd056f8b0efbfdb45ae7762c879e7e3287a18c34930a39643","99335107aa5f6860cc64727971f32d9c5d864d9728067e75652d0496914d6cc1","52558a21e693187aee036fa12e749ba5545bb93a0fb07a33d967e179d14a42cb","7767842696d2f781faf593b4d30f5e3aa65de9e7afe96c8cbd76706190648c06","bfdf26ba2fc4e54ab04aacfb632f02b7e3362d7eb6c1b1b94cbf05e205dcb4e1","18d9e28839b3555ab8c1adb629f8740140b55dbda407d683ff45995d52c9752c","fb89733f0ddab05384871f8fe397882c2c8f333b67c2a4f09a88f2b324fde1e1","663878a47e035512808d914466edd98f4f9ebc01110e115764fa153f1f4d639c","591706db7d07ef9a1c40fe79e74336529a8ca21d3ad881bdf7d9740b174d48fa","40fd2fa5e922f617360a909d280d79fdad54581abcf6b330dc98d2343705a1d8","d78588063217e6f40c29340e28688017c6a8b6ab226eb63f27525d6600a72b74","e04a31200164bf2ef3730156b4c472d07e717b28a10af7da4eeb67495474b702","16aa5d78711eae5696c44eeda9cc6c4706ae1a7c86938a482ef995b00195715d","37d5193346b934b8165699c26b0e60cd548819ac0f157b5011cc2b21495b3537","8e73ec224c219cc1b57ba936768a5a53ce68a082fc757319d065442b3703bad6","5856f3cfcb902908c0260933dfbdc909d58842d4f8526c97616cb2feb0b5c5cb","d50c9572ff8ae3fa508213eb4ea8af933caa434e0b44b3d8eb9e756d2f7abaeb","b37f6027d2b32d86d86653435695ecedc0800b596995a04d2e52b95695764e5f","fd11a8bd5c75f2df0e72ab0f88840f104fa12778956d88b84aa5433783bd6669","c1c2967173940c68d0475bf6a51ab5cb42c70e33184aafb57fe6883fabc51f5f"]}},3091,M=>{"use strict";let L,R,O,A,E,T,I,z,_,N,D,U,C,P,H,G,F,W;var B,$,q=M.i(990314),j=M.i(966128);M.i(144054);var K=M.i(423270),Y=M.i(820984),V=M.i(758045),X=M.i(415809);let Z=[0x9747b28c,0x5bd1e995],Q=(M,L)=>M<<L|M>>>32-L,J=M=>Math.imul(Q(Math.imul(M,0xcc9e2d51),15),0x1b873593),ee=(M,L)=>Math.imul(Q(M^J(L),13),5)+0xe6546b64>>>0;function et(M,L,R,O){let A,E=M=>R[M]??0,T=-4&O,I=M;for(let M=0;M<T;M+=4)I=ee(I,E(M)|E(M+1)<<8|E(M+2)<<16|E(M+3)<<24);let z=0;for(let M=O-1;M>=T;M-=1)z=z<<8|E(M);return O>T&&(I^=J(z)),A=I^L+O,A^=A>>>16,A=Math.imul(A,0x85ebca6b),A^=A>>>13,A=Math.imul(A,0xc2b2ae35),(A^=A>>>16)>>>0}let ea=/^(?:0|[1-9]\d*)$/,er=M=>ea.test(M);function es(M){if(!er(M))throw Error(`Not a world number: ${JSON.stringify(M)}`)}function el(M){es(M);let L=function(M){let L=Uint8Array.from(M,M=>M.codePointAt(0)??0),[R,O]=Z.map(M=>et(M>>>0,0,L,L.length));return ee(ee(0,R??0),O??0)}(M),R=new TextEncoder,O=new Uint8Array(64);return M=>{3*M.length>O.length&&(O=new Uint8Array(3*M.length));let{written:A}=R.encodeInto(M,O);return et(L,8,O,A)}}let eo=M=>1n<<BigInt(M-1),en=(M,L,R)=>{let O=eo(M);return L>=0n&&R>=0n&&L<O&&R<O},ei=({n:M,x:L,y:R})=>`${M}/${L}/${R}`,ef=(M,L)=>M.reduceRight((M,R)=>M*L+R,0),ec=[3.3871328727963665,133.14166789178438,1971.5909503065513,13731.69376550946,45921.95393154987,67265.7709270087,33430.57558358813,2509.0809287301227],eu=[1,42.31333070160091,687.1870074920579,5394.196021424751,21213.794301586597,39307.89580009271,28729.085735721943,5226.495278852854],eh=[1.4234371107496835,4.630337846156546,5.769497221460691,3.6478483247632045,1.2704582524523684,.2417807251774506,.022723844989269184,7745450142783414e-19],ed=[1,2.053191626637759,1.6763848301838038,.6897673349851,.14810397642748008,.015198666563616457,5475938084995345e-19,10507500716444169e-25],em=[6.657904643501103,5.463784911164114,1.7848265399172913,.29656057182850487,.026532189526576124,.0012426609473880784,27115555687434876e-21,20103343992922881e-23],ep=[1,.599832206555888,.1369298809227358,.014875361290850615,7868691311456133e-19,18463183175100548e-21,1421511758316446e-22,20442631033899397e-31],ev=M=>(function(M){let L,R=M-.5;if(.425>=Math.abs(R)){let M=.180625-R*R;return R*ef(ec,M)/ef(eu,M)}let O=Math.sqrt(-Math.log(Math.min(M,1-M)));return O<=5?(O-=1.6,L=ef(eh,O)/ef(ed,O)):(O-=5,L=ef(em,O)/ef(ep,O)),R<0?-L:L})((M+.5)/0x100000000),eg=M=>({kind:"leaf",decode:M}),eb=M=>({kind:"struct",fields:M}),ew=(M,L)=>eg(R=>{let O,A;return O=R,(A=M)+(O+.5)/0x100000000*(L-A)}),ex=M=>{if(!Number.isInteger(M)||M<1||M>2097152)throw Error(`Cannot pick among ${M}`);return eg(L=>Math.floor(L*M/0x100000000))},ey=(M,L)=>({kind:"over",key:M,of:L}),ek=function(M){if(Array.isArray(M))return{segments:L=>{if(!M.includes(L))throw Error(`Not a key of [${M.join(", ")}]: ${L}`);return L}};let L=Object.entries(M);return{segments:M=>L.map(([L,R])=>R(M[L])).join("/")}},eS=M=>{if("number"!=typeof M||!Number.isSafeInteger(M))throw TypeError(`Not a safe integer: ${String(M)}`);return String(M)},eM=M=>{if("bigint"!=typeof M)throw TypeError(`Not a bigint: ${String(M)}`);return M.toString()},eL=(M,L)=>""===M?L:`${M}/${L}`;function eR(M,L){return function M(L,R,O){if("leaf"===L.kind)return L.decode(O(R));if("wide"===L.kind)return BigInt(O(eL(R,"0")))<<32n|BigInt(O(eL(R,"1")));if("over"===L.kind){let{key:A,of:E}=L;return{at:L=>M(E,eL(R,A.segments(L)),O)}}if("table"===L.kind){let{slots:M,segmentsAt:A,leaf:E,lookup:T}=L,I=new Float64Array(M);for(let L=0;L<M;L+=1)I[L]=E.decode(O(eL(R,A(L))));return T(I)}return Object.fromEntries(Object.entries(L.fields).map(([L,A])=>[L,M(A,eL(R,L),O)]))}(M,"",L)}let eO=M=>{var L;let R,O;return L={hole:ek({n:eS,x:eM,y:eM})},es(M),R=new TextEncoder,O=async L=>Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",R.encode(`${M}/${L}`))),M=>M.toString(16).padStart(2,"0")).join(""),Object.fromEntries(Object.entries(L).map(([M,L])=>[M,{at:async R=>O(`${M}/${L.segments(R)}`)}]))},eA=Y.z.object({seed:V.z.string().refine(er,"Not a world number"),holes:X.z.array(V.z.string().regex(/^[\da-f]{64}$/)).readonly()}),eE=({qx:M,qy:L})=>({u:(M+.5)/2,v:(L+.5)/2}),eT=[{qx:0,qy:0},{qx:1,qy:0},{qx:0,qy:1},{qx:1,qy:1}],eI=({n:M,x:L,y:R},{qx:O,qy:A})=>({n:M+1,x:2n*L+BigInt(O),y:2n*R+BigInt(A)});async function ez(M,L,R,O){let A=M.holes[L-1];if(void 0===A)return null;let{hole:E}=eO(M.seed),T=await Promise.all(eT.map(async({qx:M,qy:A})=>E.at({n:L,x:2n*R+BigInt(M),y:2n*O+BigInt(A)})));return eT[T.indexOf(A)]??null}async function e_(M,L){let R=new Map(await Promise.all(L.map(async L=>[ei(L),await ez(M,L.n,L.x,L.y)])));return M=>{let L=R.get(ei(M));if(void 0===L)throw Error(`No hole resolved for room ${ei(M)}`);return L}}function eN(M){let L=0n,R=0;for(let[O,A]of M){if(O<0n||O>>BigInt(A)!==0n)throw RangeError(`${String(O)} does not fit ${String(A)} bits`);L=L<<BigInt(A)|O,R+=A}let O=Math.ceil(R/8);return L<<=BigInt(8*O-R),Uint8Array.from({length:O},(M,R)=>Number(L>>BigInt((O-1-R)*8)&255n))}function eD(M,L){let R=M.reduce((M,L)=>M<<BigInt(8)|BigInt(L),0n),O=L.reduce((M,L)=>M+L,0),A=BigInt(8*M.length-O);if((R&(1n<<A)-1n)!==0n)return null;R>>=A;let E=[];for(let M of L.toReversed())E.unshift(R&(1n<<BigInt(M))-1n),R>>=BigInt(M);return E}let eU=M=>1===M?[]:[M-1,M-1],eC=M=>[M-1,M-1,16,16,12,8],eP=M=>Math.ceil(M.reduce((M,L)=>M+L,0)/8),eH=2*Math.PI,eG=Math.PI/2,eF=M=>BigInt(Math.min(65535,Math.max(0,Math.floor(65536*M)))),eW=M=>(Number(M)+.5)/65536,eB=(...M)=>{let L=new Uint8Array(M.reduce((M,L)=>M+L.length,0)),R=0;for(let O of M)L.set(O,R),R+=O.length;return L},e$=async M=>new Uint8Array(await crypto.subtle.digest("SHA-256",M)),eq=(M,L)=>new TextEncoder().encode(`cube-address/${L}/${M.seed}/`);async function ej(M,L,R){let O=await Promise.all(Array.from({length:Math.ceil(R/32)},async(R,O)=>e$(eB(eq(M,"key"),L,Uint8Array.of(O)))));return eB(...O).slice(0,R)}let eK=async(M,L)=>(await e$(eB(eq(M,"check"),L))).slice(0,3),eY=(M,L)=>M.map((M,R)=>M^(L[R]??0)),eV=M=>btoa(String.fromCodePoint(...M)).replaceAll("+","-").replaceAll("/","_").replace(/=+$/,"");async function eX(M,{hatch:L,at:{n:R,x:O,y:A,u:E,v:T,yaw:I,elevation:z}}){if(!Number.isInteger(R)||R<1||R>M.holes.length+1)throw RangeError(`Floor ${String(R)} is not in the world`);if(null===L!=(1===R))throw RangeError(`Floor ${String(R)} takes a hatch below floor 1 only`);let _=eB(Uint8Array.of(R),eN(null===L?[]:[[L.x,R-1],[L.y,R-1]])),N=eN([[O,R-1],[A,R-1],[eF(E),16],[eF(T),16],[BigInt((Math.round(I/eH*4096)%4096+4096)%4096),12],[BigInt(Math.min(127,Math.max(-127,Math.trunc(z/eG*127)))+127),8]]),D=eB(_,await eK(M,eB(_,N))),U=await ej(M,D,N.length);return eV(eB(D,eY(N,U)))}async function eZ(M,L){let R=function(M){if(!/^[\w-]*$/.test(M)||M.length%4==1)return null;let L=atob(M.replaceAll("-","+").replaceAll("_","/")),R=Uint8Array.from(L,M=>M.codePointAt(0)??0);return eV(R)===M?R:null}(L),O=R?.[0];if(null===R||void 0===O||O<1||O>M.holes.length+1)return null;let A=1+eP(eU(O)),E=eP(eC(O));if(R.length!==A+E+3)return null;let T=R.subarray(0,A),I=R.subarray(0,A+3),z=await ej(M,I,E),_=eY(R.subarray(I.length),z);if((await eK(M,eB(T,_))).some((M,L)=>M!==I[A+L]))return null;let N=eD(T.subarray(1),eU(O)),D=eD(_,eC(O));if(null===N||null===D)return null;let[U,C,P,H,G,F]=D;if(void 0===U||void 0===C||void 0===P||void 0===H||void 0===G||void 0===F||F>BigInt(254))return null;let[W,B]=N,$=void 0===W||void 0===B?null:{x:W,y:B};return null===$||await eQ(M,O-1,$)?{hatch:$,at:{n:O,x:U,y:C,u:eW(P),v:eW(H),yaw:Number(G)/4096*eH,elevation:(Number(F)-127)/127*eG}}:null}async function eQ(M,L,{x:R,y:O}){let{hole:A}=eO(M.seed);return await A.at({n:L,x:R,y:O})===M.holes[L-1]}function eJ(M,L){let R=L.n-M.n;if(R>=0){let O=1n<<BigInt(R),A=1/Number(O);return{east:Number(L.x-M.x*O)*A,south:Number(L.y-M.y*O)*A,roomSide:A}}let O=1n<<BigInt(-R);return{east:Number(L.x*O-M.x),south:Number(L.y*O-M.y),roomSide:Number(O)}}let e0=(M,L)=>.5*(2**(M-L)-1),e2=-e0(1,2);function e1(M){let L=M.u<.5?0:1,R=M.v<.5?0:1;return{...M,n:M.n+1,x:2n*M.x+BigInt(L),y:2n*M.y+BigInt(R),u:2*M.u-L,v:2*M.v-R,eyeAbove:2*(M.eyeAbove+e2),scale:2*M.scale}}function e3(M,L){let{east:R,south:O,roomSide:A}=eJ(M,L);return{origin:[R,e0(M.n,L.n),O],roomSide:A}}let e5=M=>Math.min(1,Math.max(0,M)),e4=(M,L,R)=>e5((M-L)/(R-L)),e6=M=>{let L=e5(M);return L*L*(3-2*L)},e8=(M,L,R)=>M+(L-M)*R,e7=(M,L,R)=>e6(e4(R,M,L)),e9={ground:6360,top:6460,rayleigh:{scatter:[.005802,.013558,.0331],height:8},mie:{scatter:[.04,.043,.047],absorb:[.004,.004,.0045],height:1.2,g:.8},ozone:{absorb:[65e-5,.001881,85e-6],centre:25,half:15},albedo:[.04,.05,.065]},te={width:128,height:64},tt={width:8,height:24},ta=e9.ground,tr=e9.top,ts=Math.sqrt(tr*tr-ta*ta),tl=M=>[M(0),M(1),M(2)],to=M=>({rayleigh:Math.exp(-M/e9.rayleigh.height),mie:Math.exp(-M/e9.mie.height),ozone:Math.max(0,1-Math.abs(M-e9.ozone.centre)/e9.ozone.half)}),tn=M=>{let L=to(M);return{rayleigh:tl(M=>e9.rayleigh.scatter[M]*L.rayleigh),mie:tl(M=>e9.mie.scatter[M]*L.mie)}},ti=M=>{let L=to(M);return tl(M=>e9.rayleigh.scatter[M]*L.rayleigh+(e9.mie.scatter[M]+e9.mie.absorb[M])*L.mie+e9.ozone.absorb[M]*L.ozone)},tf=(M,L)=>-M*L+Math.sqrt(Math.max(0,M*M*(L*L-1)+tr*tr)),tc=(M,L)=>{let R=M*M*(L*L-1)+ta*ta;return L<0&&R>=0?-M*L-Math.sqrt(R):null},tu=({width:M,height:L},R)=>{let O=new Float32Array(M*L*4);for(let A=0;A<L;A++)for(let E=0;E<M;E++){let T=R(E/(M-1),A/(L-1));O.set([...T,1],(A*M+E)*4)}return{width:M,height:L,data:O}},th=(M,L,R)=>{let O=e5(L)*(M.width-1),A=e5(R)*(M.height-1),E=Math.min(Math.floor(O),M.width-2),T=Math.min(Math.floor(A),M.height-2),I=O-E,z=A-T,_=(L,R,O)=>M.data[((T+R)*M.width+E+L)*4+O]??0;return tl(M=>(_(0,0,M)*(1-I)+_(1,0,M)*I)*(1-z)+(_(0,1,M)*(1-I)+_(1,1,M)*I)*z)},td=M=>{let L=null;return()=>(L??={value:M()}).value},tm=td(()=>tu(te,(M,L)=>{let R,O,A,E,{r:T,mu:I}=(E=(A=tr-(O=Math.hypot(R=L*ts,ta)))+M*(R+ts-A),{r:O,mu:Math.min(1,Math.max(-1,0===E?1:(ts*ts-R*R-E*E)/(2*O*E)))}),z=((M,L)=>{let R=tf(M,L)/40,O=[0,0,0];for(let A=0;A<40;A++){let E=(A+.5)*R,T=ti(Math.max(0,Math.sqrt(E*E+2*M*L*E+M*M)-ta));for(let M of[0,1,2])O[M]=(O[M]??0)+T[M]*R}return tl(M=>O[M]??0)})(T,I);return tl(M=>Math.exp(-z[M]))})),tp=(M,L)=>{let R,O;return null!==tc(M,L)?[0,0,0]:th(tm(),...(R=Math.sqrt(Math.max(0,M*M-ta*ta)),O=tr-M,[(tf(M,L)-O)/(R+ts-O),R/ts]))},tv=(M,L,R)=>Math.sqrt(Math.max(0,R*R+2*M*L*R+M*M)),tg=1/(4*Math.PI),tb=({r:M,mu:L,sun:R,between:O},A,E,T)=>{let I=[0,0,0],z=[1,1,1],_=0;for(let N=0;N<E;N++){let D=A*((N+1)/E)**2,U=D-_,C=_+.5*U;_=D;let P=tv(M,L,C),H=ti(Math.max(0,P-ta)),G=tl(M=>Math.exp(-H[M]*U)),F=tl(M=>(z[M]??0)*(1-G[M])/Math.max(H[M],1e-9)),W=T(P,(M*R+C*O)/P,F);for(let M of[0,1,2])I[M]=(I[M]??0)+F[M]*W[M],z[M]=(z[M]??0)*G[M]}return{light:tl(M=>I[M]??0),through:tl(M=>z[M]??0)}},tw=(M,L)=>{let R=tc(M,L);return null===R?{reach:tf(M,L),lands:!1}:{reach:R,lands:!0}},tx=M=>{let L=tp(ta,M);return tl(R=>e9.albedo[R]*L[R]*Math.max(0,M)/Math.PI)},ty=td(()=>tu(tt,(M,L)=>((M,L)=>{let R=[0,0,0],O=[0,0,0];for(let A=0;A<6;A++)for(let E=0;E<6;E++){let T=1-2*(A+.5)/6,I=T*L+Math.sqrt(Math.max(0,(1-T*T)*(1-L*L)))*Math.cos(Math.PI*(E+.5)/6),{reach:z,lands:_}=tw(M,T),N=[0,0,0],D=tb({r:M,mu:T,sun:L,between:I},z,16,(M,L,R)=>{let O=tn(M-ta),A=tp(M,L);for(let M of[0,1,2])N[M]=(N[M]??0)+R[M]*(O.rayleigh[M]+O.mie[M]);return tl(M=>(O.rayleigh[M]+O.mie[M])*A[M]*tg)}),U=_?tx((M*L+z*I)/ta):[0,0,0];for(let M of[0,1,2])R[M]=(R[M]??0)+(D.light[M]+D.through[M]*U[M])/36,O[M]=(O[M]??0)+(N[M]??0)/36}return tl(M=>(R[M]??0)/(1-Math.min(.95,O[M]??0)))})(ta+.01+L*L*(tr-ta-.02),-.2+.7*M))),tk=(M,L)=>M[0]*L[0]+M[1]*L[1]+M[2]*L[2],tS=(M,L)=>[M[1]*L[2]-M[2]*L[1],M[2]*L[0]-M[0]*L[2],M[0]*L[1]-M[1]*L[0]],tM=(M,L,R=1)=>[M[0]+L[0]*R,M[1]+L[1]*R,M[2]+L[2]*R],tL=(M,L)=>[M[0]*L,M[1]*L,M[2]*L],tR=([M,L,R])=>{let O=Math.hypot(M,L,R);return[M/O,L/O,R/O]},tO=(M,L,...R)=>({id:M,listing:L,needs:R}),tA=M=>`vec3f(${M.map(M=>M.toFixed(4)).join(", ")})`,tE=M=>Number.isInteger(M)?M.toFixed(1):String(M),tT=M=>`vec${String(M.length)}f(${M.map(M=>tE(M)).join(", ")})`;function tI(M){let L=new Map,R=M=>{let O=L.get(M.id);if(void 0!==O){if(O!==M)throw Error(`Two WGSL pieces are both named ${M.id}`);return}for(let L of M.needs)R(L);L.set(M.id,M)};for(let L of M)R(L);return[...L.values()].map(({listing:M})=>M.trim()).join("\n\n")}let tz=1,t_=([M,L,R],O)=>{let[A,E]=function(M,L,R){switch((R%4+4)%4){case 1:return[-L,M];case 2:return[-M,-L];case 3:return[L,-M];default:return[M,L]}}(M,R,O);return[A,L,E]},tN=([M,L,R],O,A)=>{let E=O/2,[T,,I]=A([M-E,0,R-E]);return[T+E,L,I+E]},tD=(M,L=1,R=tz)=>tN(M,L,M=>((M,L=tz)=>t_(M,-L))(M,R)),tU=(M,L=1,R=tz)=>tN(M,L,M=>((M,L=tz)=>t_(M,L))(M,R)),tC=(M,L=tz)=>M+L*Math.PI/2;function tP(M){let[L,,R]=M([1,0,0]),[O,,A]=M([0,0,1]);return`mat2x2f(${tE(L)}, ${tE(R)}, ${tE(O)}, ${tE(A)})`}let tH=tO("outside/turn-numbers",`
const ROOM_TO_SHELL = ${tP(M=>((M,L=tz)=>t_(M,-L))(M))};
const SHELL_TO_ROOM = ${tP(M=>((M,L=tz)=>t_(M,L))(M))};
const TURN_ABOUT = vec2f(${tE(2.5)});
`),tG={from:.274,to:1.244,height:2.1},tF=(()=>{let{height:M}=tG,[L,,R]=tU([5,0,tG.from],5),[O,,A]=tU([5,0,tG.to],5),E=Math.abs(L-O)>Math.abs(R-A),[T,I]=E?[L,O]:[R,A],z=(E?R:L)>2.5;return{wall:E?z?"south":"north":z?"east":"west",from:Math.min(T,I),to:Math.max(T,I),height:M}})(),tW=5*.988,tB=tG.to-tG.from,t$=[{facing:[0,1,0],axis:1,plane:0},{facing:[0,-1,0],axis:1,plane:5*.46},{facing:[0,0,1],axis:2,plane:0},{facing:[0,0,-1],axis:2,plane:5},{facing:[1,0,0],axis:0,plane:0}],tq=tO("cube/shared/cube-boundary/shell-turn",`
/// A way in the room frame as the shell frame has it.
fn turnedToShell(way: vec3f) -> vec3f {
  let flat = ROOM_TO_SHELL * way.xz;
  return vec3f(flat.x, way.y, flat.y);
}

/// A way in the shell frame as the room frame has it.
fn turnedToRoom(way: vec3f) -> vec3f {
  let flat = SHELL_TO_ROOM * way.xz;
  return vec3f(flat.x, way.y, flat.y);
}

/// A point of the room frame, in metres from the north-west corner of floor
/// 1's room, in the shell frame, from the cube's north-west corner.
fn toShell(p: vec3f) -> vec3f {
  let flat = ROOM_TO_SHELL * (p.xz - TURN_ABOUT) + TURN_ABOUT;
  return vec3f(flat.x, p.y, flat.y);
}

/// A point of the shell frame in the room frame.
fn toRoom(p: vec3f) -> vec3f {
  let flat = SHELL_TO_ROOM * (p.xz - TURN_ABOUT) + TURN_ABOUT;
  return vec3f(flat.x, p.y, flat.y);
}
`,tH),tj=e9.ground+.002,tK=(M,L)=>{let R=tk(M,L),{reach:O,lands:A}=tw(tj,M[1]),E={r:tj,mu:M[1],sun:L[1],between:R},T=[0,0,0],I=[0,0,0],{light:z,through:_}=tb(E,O,32,(M,L,R)=>{let O=tn(M-e9.ground),A=tp(M,L),E=th(ty(),(L- -.2)/.7,Math.sqrt(e5((M-ta)/(tr-ta))));for(let M of[0,1,2])T[M]=(T[M]??0)+R[M]*O.rayleigh[M]*A[M],I[M]=(I[M]??0)+R[M]*O.mie[M]*A[M];return tl(M=>(O.rayleigh[M]+O.mie[M])*E[M])}),N=A?tx((tj*L[1]+O*R)/e9.ground):[0,0,0];return{rayleigh:tl(M=>T[M]??0),mie:tl(M=>I[M]??0),many:tl(M=>z[M]+_[M]*N[M])}},tY=(M,L)=>{var R,O;let A,E,T,I;return R=tK(M,L),E=3/(16*Math.PI)*(1+(A=O=tk(M,L))*A),I=3/(8*Math.PI)*((1-(T=e9.mie.g)*T)*(1+O*O))/((2+T*T)*(1+T*T-2*T*O)**1.5),tl(M=>R.rayleigh[M]*E+R.mie[M]*I+R.many[M])},tV=(M,L)=>{let R=Math.hypot(M[0],M[2]),O=[0,0,0];for(let A=0;A<8;A++){let E=Math.sqrt((A+.5)/8),T=Math.sqrt(1-E*E);for(let A=0;A<8;A++){let I=Math.PI*(A+.5)/8,z=tY([T*Math.cos(I),L*E,T*Math.sin(I)],[R,M[1],0]);for(let M of[0,1,2])O[M]=(O[M]??0)+z[M]}}return tl(M=>(O[M]??0)*Math.PI/64)},tX=4*Math.PI/180,tZ=Math.PI/4,tQ=Math.PI/180,tJ=9*tQ,t0=-31*tQ,t2=[Math.cos(tJ)*Math.cos(t0),Math.sin(tJ),Math.cos(tJ)*Math.sin(t0)],t1=(R=8/Math.max(...L=tp(tj,t2[1])),O=M=>tl(L=>M[L]*R),{white:R,sun:O(L),sky:O(tV(t2,1)),ground:O(tV(t2,-1)),horizon:O((M=>{let L=Math.hypot(M[0],M[2]),R=[0,0,0];for(let O=0;O<8;O++){let A=tZ+(Math.PI-tZ)*(O+.5)/8,E=tY([Math.cos(tX)*Math.cos(A),Math.sin(tX),Math.cos(tX)*Math.sin(A)],[L,M[1],0]);for(let M of[0,1,2])R[M]=(R[M]??0)+E[M]}return tl(M=>(R[M]??0)*Math.PI/8)})(t2))}),t3=t1.white,t5=t1.sun,t4=t1.sky,t6=t1.ground,t8=t1.horizon,t7=tO("outside/sun",`
const SUN_DIR = ${tT(t2)};
const SUN_LIGHT = ${tT(t5)};
const SKY_FILL = ${tT(t4)};
const GROUND_FILL = ${tT(t6)};
const HORIZON_FILL = ${tT(t8)};
`),t9=ek({n:eS,level:eS,x:eM,y:eM}),ae=["north","east","south","west"],at=ek(ae),aa=eb({block:ey(t9,eb({omit:ex(ae.length),door:ey(at,{kind:"wide"})}))}),ar=Number(64n)+2;function as(M){let L=1;for(;(M>>BigInt(L-1)&1n)===1n;)L+=1;return L}function al(M,L,R){if(!Number.isInteger(M)||M<1)throw Error(`Not a floor: ${M}`);if(M>ar)throw RangeError(`Floor ${M}'s doors need ${M-2} bits; roll.wide() has ${64n}`);let O=eo(M);if(L<0n||R<0n||L>=O||R>=O)throw Error(`Not a room of floor ${M}: (${L}, ${R})`);return O}let ao=(M,L,R,O)=>({n:M,level:L,x:R>>BigInt(L),y:O>>BigInt(L)});function an(M,L,R,O){if(R+1n>=al(L,R,O))throw Error(`No wall east of (${R}, ${O})`);return af(M,ao(L,as(R),R,O),O,"north","south")}function ai(M,L,R,O){if(O+1n>=al(L,R,O))throw Error(`No wall south of (${R}, ${O})`);return af(M,ao(L,as(O),R,O),R,"west","east")}function af(M,L,R,O,A){let E=1n<<BigInt(L.level-1),T=R&(E<<1n)-1n,I=T<E,{omit:z,door:_}=M.block.at(L),N=I?O:A;return ae[z]!==N&&_.at(N)*(1n<<BigInt(L.level-1))>>64n===(I?T:T-E)}let ac=[0,1,0],au=(M,L)=>tM(M,L);function ah(M,L,R,O){return{corners:[M,au(M,L),au(au(M,L),R),au(M,R)],normal:tR(tS(L,R)),room:O}}let ad=(M,L,R,O,A,E)=>({...ah(M,L,R,O),surface:A,...void 0===E?{}:{paint:E}});function am(M,[L,R,O],A,E,T){let I=(M,L,R)=>ad(M,L,R,A,E,T);return[I(M,R,L),I(au(M,O),L,R),I(M,O,R),I(au(M,L),R,O),I(M,L,O),I(au(M,R),O,L)]}let ap=M=>Math.hypot(...M);function av(M,L,{surface:R,paint:O,sides:A,arc:E}){let[T,I]=E??[0,1],z=void 0===E,_=M.map(M=>Array.from({length:A+1},(L,R)=>(({centre:M,wide:L,thick:R},O)=>{let A=2*Math.PI*O;return au(M,au(tL(L,Math.cos(A)),tL(R,Math.sin(A))))})(M,T+(I-T)*R/A))),N=L=>Math.min(Math.max(L,0),M.length-1),D=(M,L)=>{let R=_[N(M)],O=z?(L+A)%A:Math.min(Math.max(L,0),A),E=R?.[O];if(void 0===E)throw RangeError("A loft needs a ring");return E},U=L=>{let R=M[N(L)];if(void 0===R)throw RangeError("A loft needs a ring");return R.centre};return M.slice(1).flatMap((M,E)=>Array.from({length:A},(M,A)=>{let T=[[E,A],[E,A+1],[E+1,A+1],[E+1,A]],[I,z,_,N]=T.map(([M,L])=>D(M,L)),[C,P,H,G]=T.map(([M,L])=>((M,L)=>{let R=tS(tM(D(M,L+1),D(M,L-1),-1),tM(D(M+1,L),D(M-1,L),-1)),O=tM(D(M,L),U(M),-1);if(1e-18>ap(R)||1e-12>ap(O)){let L=M>0?M:M+1,R=tM(U(L),U(L-1),-1);return tR(M>0?R:tL(R,-1))}let A=tR(R);return 0>tk(A,O)?tL(A,-1):A})(M,L));if(!I||!z||!_||!N||!C||!P||!H||!G)throw RangeError("A loft quad has four corners");let F=tR(au(au(C,P),au(H,G))),W=tk(tS(tM(_,I,-1),tM(N,z,-1)),F)>=0;return{corners:W?[I,z,_,N]:[I,N,_,z],normals:W?[C,P,H,G]:[C,G,H,P],normal:F,room:L,surface:R,...void 0===O?{}:{paint:O}}}))}let ag=[1316120,0xc6c8cc];function ab(M,L,R,O){let A=tR(tS(L,Math.abs(L[1])>.9?[1,0,0]:ac)),E=tS(L,A),T=.0024*R,I=.006*R-T,z=(R,O)=>({centre:au(M,tL(L,R)),wide:tL(A,O),thick:tL(E,O)});return[1,-1].flatMap((M,L)=>av([...Array.from({length:4},(L,R)=>{let O=Math.PI/2*(1-R/4);return z(M*(I+T*Math.sin(O)),T*Math.max(Math.cos(O),.02))}),z(M*I,T),z(0,T)],O,{surface:"plastic",paint:ag[L]??ag[0],sides:8}))}function aw(M,L,R){let{qx:O,qy:A}=R,{u:E,v:T}=eE(R),I=1-2*O,z=1-2*A;return!function(M,{n:L,x:R,y:O},A){return 0===A?0n===R||!an(M,L,R-1n,O):R===eo(L)-1n||!an(M,L,R,O)}(M,L,O)?!function(M,{n:L,x:R,y:O},A){return 0===A?0n===O||!ai(M,L,R,O-1n):O===eo(L)-1n||!ai(M,L,R,O)}(M,L,A)?{mount:"post",at:{u:O+.03*I,v:A+.03*z/2},facing:{u:I,v:0}}:{mount:"y-wall",at:{u:E,v:A},facing:{u:0,v:z}}:{mount:"x-wall",at:{u:O,v:T},facing:{u:I,v:0}}}let ax=.2+.014;function ay({mount:M,at:L,facing:R}){let O=[R.u,0,R.v],A=[R.v,0,-R.u],E=.012*("post"!==M);return{out:O,along:A,footU:L.u+O[0]*E,footV:L.v+O[2]*E}}function ak(M){let{out:L,along:R,footU:O,footV:A}=ay(M);return{centre:[O+.0161*L[0],.2+4e-4+.0024,A+.0161*L[2]],axis:tR([.9393727128473789*R[0]+.34289780745545134*L[0],0,.9393727128473789*R[2]+.34289780745545134*L[2]])}}let aS={u:.5,v:.5,gapSide:.16};function aM(M,L,R,O,A){return(function({east:M,south:L,roomSide:R},O){if(null===O)return[[M,L,R,R]];let A=R*O.gapSide/2,E=M+R*O.u-A,T=L+R*O.v-A,I=2*A;return[[M,L,E-M,R],[E+I,L,M+R-E-I,R],[E,L,I,T-L],[E,T+I,I,L+R-T-I]]})(M,R).map(([M,R,E,T])=>{let I=[M,L,R],z=[E,0,0],_=[0,0,T];return"ceiling"===A?ad(I,z,_,O,A):ad(I,_,z,O,A)})}function aL(M,L,R,O,A,E){let T=[0,R,0],I=Math.hypot(L[0],L[2]),z=R=>[M[0]-L[2]/I*R,M[1],M[2]+L[0]/I*R];return[...null===A?[]:[ad(z(O),L,T,A,"wall")],...null===E?[]:[ad(z(-O),T,L,E,"wall")]]}function aR(M,L,R){let O=new Set(R.map(M=>ei(M))),A=M=>!O.has(ei(M));return R.flatMap(R=>(function(M,L,R,O){let{n:A,x:E,y:T}=R,I=eo(A)-1n,{east:z,south:_,roomSide:N}=eJ(L,R),D=e0(L.n,A),U=.46*N,C=.012*N,P=[0,0,N],H=[N,0,0],G=(M,L)=>en(A,E+M,T+L)?{n:A,x:E+M,y:T+L}:null,F=0n===E||O({n:A,x:E-1n,y:T})&&!an(M,A,E-1n,T),W=0n===T||O({n:A,x:E,y:T-1n})&&!ai(M,A,E,T-1n),B={east:E!==I&&an(M,A,E,T)?[]:aL([z+N,D,_],P,U,C,R,G(1n,0n)),south:T!==I&&ai(M,A,E,T)?[]:aL([z,D,_+N],H,U,C,G(0n,1n),R),west:F?aL([z,D,_],P,U,C,G(-1n,0n),R):[],north:W?aL([z,D,_],H,U,C,R,G(0n,-1n)):[]};return 1===A&&(B[tF.wall]=function(M,L,R){let[O,A,E]=M,T=L/5,I=.46*L,[z,_,N]=[tF.from*T,tF.to*T,tF.height*T],D=.012*L,{wall:U}=tF,C="east"===U||"south"===U?L-D:D,P="east"===U||"west"===U,H="west"===U||"south"===U;return[[0,z,0,I],[_,L,0,I],[z,_,N,I]].map(([M,L,T,I])=>{let z=P?[O+C,A+T,E+M]:[O+M,A+T,E+C],_=P?[0,0,L-M]:[L-M,0,0],N=[0,I-T,0];return H?ad(z,N,_,R,"wall"):ad(z,_,N,R,"wall")})}([z,D,_],N,R)),Object.values(B).flat()})(M,L,R,A))}let aO={n:1,x:0n,y:0n},aA=M=>[...M.near,...M.below,...null===M.overhead?[]:[M.overhead]],aE=M=>[...new Map(M.map(M=>[ei(M),M])).values()],aT=({n:M,x:L,y:R})=>({n:M-1,x:L>>1n,y:R>>1n}),aI=2*Math.PI,az=Math.PI/2,a_=([M,L],[R,O])=>[M-R,L-O],aN=[[1,0],[0,1],[-1,0],[0,-1]],aD=({n:M,x:L,y:R},[O,A])=>({n:M,x:L+BigInt(O),y:R+BigInt(A)});function aU(M,{n:L,x:R,y:O},[A,E]){return 1===A?M.isOpenEast(L,R,O):-1===A?M.isOpenEast(L,R-1n,O):1===E?M.isOpenSouth(L,R,O):M.isOpenSouth(L,R,O-1n)}let aC=(M,L)=>Math.hypot(Math.max(0,Math.abs(M)-1),Math.max(0,Math.abs(L)-1)),aP=(M,L)=>({u:0-M,v:0-L});function aH([M,L],R){let O=.2*!!R;return{at:{u:(1+M)/2-M*O,v:(1+L)/2-L*O},facing:aP(M,L),onPost:R}}function aG(M,L){let R=void 0===L?0:(M.indexOf(L)+2)%4,O=[...M.slice(R),...M.slice(0,R)],A=O.find(M=>"wall"===M.is);if(void 0!==A)return aH(A.step,!1);let[E={step:aN[0]}]=O;return aH(E.step,!0)}function aF(M,L,R,{width:O,height:A,hungAt:E},T,{origin:I,roomSide:z}){let _=[L.v,0,-L.u],N=(M,L,A)=>I[M]+(L+A*R-_[M]*O/2)*z;return ah([N(0,M.u,L.u),I[1]+(E-A/2)*z,N(2,M.v,L.v)],tL(_,O*z),[0,A*z,0],T)}function aW({at:M,facing:L,onPost:R},O,A,E){return R?[aF(M,L,.012,O,A,E),aF(M,aP(L.u,L.v),.012,O,A,E)]:[aF(M,L,.014,O,A,E)]}function aB(M,L){if(M.n<2)return!1;let R=aT(M),O=L(R);return null!==O&&ei(eI(R,O))===ei(M)}function a$(M,L){let R=new Map;return(O,A,E)=>{let T=ei({n:O,x:A,y:E}),I=R.get(T);if(void 0!==I)return I;let z=L(M,O,A,E);return R.size>=4096&&R.clear(),R.set(T,z),z}}function aq(M){let L=a$(M,an),R=a$(M,ai);return{isOpenEast:(M,R,O)=>en(M,R,O)&&en(M,R+1n,O)&&L(M,R,O),isOpenSouth:(M,L,O)=>en(M,L,O)&&en(M,L,O+1n)&&R(M,L,O)}}let aj=(A=M.i(904015).default,eA.parse(A)),aK=M=>Math.max(1e7/8**(M-2),4.99),aY={width:.3,height:.15,hungAt:.3},aV=eb({room:ey(ek({n:eS,x:eM,y:eM}),eb({grain:eg(M=>M),lamp:ew(0,1)}))}),aX=Date.UTC(2026,10,1,12);var aZ=M.i(754118);let aQ=M=>Math.atan2(Math.sin(M),Math.cos(M)),aJ=2*Math.PI,a0=M=>(M%aJ+aJ)%aJ,a2=(M,L)=>M+aQ(L-M),a1=tO("cube/shared/shader/hash",`
fn mix32(x: u32) -> u32 {
  var h = x;
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  return h;
}

/// \`a\` and \`b\` hashed into one word.
fn hashOf(a: u32, b: u32) -> u32 {
  return mix32(a ^ mix32(b + 0x9e3779b9u));
}

/// A word as a number in [0, 1).
fn unitOf(h: u32) -> f32 {
  return f32(h >> 8u) / 16777216.0;
}

/// The word of lattice cell \`cell\` under \`salt\`.
fn cellHash(cell: vec2i, salt: u32) -> u32 {
  return hashOf(hashOf(bitcast<u32>(cell.x), bitcast<u32>(cell.y)), salt);
}

/// The word of lattice point \`point\` under \`salt\` in one round of the
/// mixer: for a lattice read many times a pixel, where \`cellHash\`'s four
/// rounds a point are the whole cost.
fn pointHash(point: vec3i, salt: u32) -> u32 {
  let spread =
    bitcast<vec3u>(point) * vec3u(0x9e3779b1u, 0x85ebca77u, 0xc2b2ae3du);
  return mix32(spread.x + spread.y + spread.z + salt);
}

/// Smooth noise in [0, 1), one lattice cell per unit of \`p\`.
fn valueNoise(p: vec2f, salt: u32) -> f32 {
  let cell = vec2i(floor(p));
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  let a = unitOf(cellHash(cell, salt));
  let b = unitOf(cellHash(cell + vec2i(1, 0), salt));
  let c = unitOf(cellHash(cell + vec2i(0, 1), salt));
  let d = unitOf(cellHash(cell + vec2i(1, 1), salt));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

/// \`octaves\` of valueNoise, each twice as fine and half as strong, in [0, 1).
fn fbm(p: vec2f, salt: u32, octaves: i32) -> f32 {
  var sum = 0.0;
  var weight = 0.5;
  var at = p;
  for (var octave = 0; octave < octaves; octave++) {
    sum += weight * valueNoise(at, salt + u32(octave));
    at *= 2.0;
    weight *= 0.5;
  }
  return sum / (1.0 - 2.0 * weight);
}

/// The point lattice cell \`cell\` holds, \`word\` being its \`cellHash\`.
fn cellPoint(cell: vec2i, word: u32) -> vec2f {
  return vec2f(cell) + vec2f(unitOf(word), unitOf(mix32(word)));
}

/// Cells of a unit lattice, one point in each: x is the distance to the
/// nearest point, y that point's own random number in [0, 1).
fn worley(p: vec2f, salt: u32) -> vec2f {
  let cell = vec2i(floor(p));
  var nearest = vec2f(8.0, 0.0);
  for (var dy = -1; dy <= 1; dy++) {
    for (var dx = -1; dx <= 1; dx++) {
      let other = cell + vec2i(dx, dy);
      let word = cellHash(other, salt);
      let distance = length(cellPoint(other, word) - p);
      if (distance < nearest.x) {
        nearest = vec2f(distance, unitOf(mix32(word ^ 0xa5a5a5a5u)));
      }
    }
  }
  return nearest;
}

/// How far \`p\` stands from the nearest wall between \`worley\`'s cells: 0 on
/// the web of walls, rising into each cell.
fn cellWalls(p: vec2f, salt: u32) -> f32 {
  let cell = vec2i(floor(p));
  var first = 8.0;
  var second = 8.0;
  for (var dy = -1; dy <= 1; dy++) {
    for (var dx = -1; dx <= 1; dx++) {
      let other = cell + vec2i(dx, dy);
      let distance = length(cellPoint(other, cellHash(other, salt)) - p);
      if (distance < first) {
        second = first;
        first = distance;
      } else if (distance < second) {
        second = distance;
      }
    }
  }
  return second - first;
}
`);M.i(991733);let{sin:a3,cos:a5,sqrt:a4,exp:a6,log:a8,pow:a7,abs:a9,floor:re,min:rt,max:ra,tanh:rr,atan2:rs}=Math,rl=tO("cube/entities/island/land/model/island-ease",`
fn sq(v: f32) -> f32 {
  return v * v;
}

/// \`k\`-wide smooth \`max(a, 0)\`.
fn softPlus(a: f32, k: f32) -> f32 {
  return k * (max(a / k, 0.0) + log(1.0 + exp(-abs(a / k))));
}

fn softMin(a: f32, b: f32, k: f32) -> f32 {
  return a - softPlus(a - b, k);
}

fn softMax(a: f32, b: f32, k: f32) -> f32 {
  return a + softPlus(b - a, k);
}

/// A smooth step from 0 to 1 about \`v\` = 0, finite however large \`v\` is.
fn eased(v: f32) -> f32 {
  return 0.5 + 0.5 * tanh(clamp(v, -20.0, 20.0));
}
`),ro=2*Math.PI,rn=eb({reach:ew(.18,.62),bearing:ew(0,ro),height:ew(-.1,.3),along:ew(4,9),across:ew(2.5,5)}),ri=el("0"),rf=eR(eb({lobes:ew(0,ro),bays:ew(0,ro),cusps:ew(0,ro),dunes:eb(Object.fromEntries(Array.from({length:9},(M,L)=>[`${L}`,rn])))}),M=>ri(`island/${M}`)),rc=[-28,24],ru=tO("outside/island-height-numbers",`
const ISLAND_WEST = ${tE(66)};
const ISLAND_EAST = ${tE(23)};
const ISLAND_NORTH = ${tE(28)};
const ISLAND_SOUTH = ${tE(22)};
const ISLAND_TURN = ${tE(8)};
const ISLAND_LOBES = ${tE(.05)};
const ISLAND_BAYS = ${tE(.03)};
const ISLAND_CUSPS = ${tE(.012)};
const ISLAND_CUSP_COUNT = ${tE(27)};
const ISLAND_LOBES_START = ${tE(rf.lobes)};
const ISLAND_BAYS_START = ${tE(rf.bays)};
const ISLAND_CUSPS_START = ${tE(rf.cusps)};
const ISLAND_REACH = ${tE(24)};
const ISLAND_SLOPE = ${tE(.11)};
const ISLAND_GENTLE = ${tE(.6)};
const ISLAND_GENTLE_X = ${tE(rc[0])};
const ISLAND_GENTLE_Z = ${tE(rc[1])};
const ISLAND_GENTLE_OVER = ${tE(22)};
const ISLAND_BERM = ${tE(.9)};
const ISLAND_LIP = ${tE(.09)};
const ISLAND_TERRACE = ${tE(1.3)};
const ISLAND_INLAND = ${tE(.45)};
const ISLAND_DEEP = ${tE(11)};
const ISLAND_DEEP_OVER = ${tE(70)};
const ISLAND_CREST_OVER = ${tE(7)};
`),rh=Object.values(rf.dunes).map(M=>{let{reach:L,bearing:R,height:O,along:A,across:E}=M,T=Math.cos(R),I=Math.sin(R);return{x:L*T*(T<0?66:23),z:L*I*(I<0?28:22),height:O,along:A,across:E}}),rd=M=>M*M,rm=(M,L)=>L*(Math.max(M/L,0)+Math.log(1+Math.exp(-Math.abs(M/L)))),rp=(M,L,R)=>M+(L-M)*R,rv=M=>.5+.5*Math.tanh(Math.min(Math.max(M,-20),20));function rg(M,L){let R,O,A=rv(M/8),E=rv(L/8),T=rp(66,23,A),I=rp(28,22,E),z=Math.atan2(L,M),_=1+.05*Math.cos(3*z+rf.lobes)+.03*Math.cos(5*z+rf.bays)+.012*Math.cos(27*z+rf.cusps),N=(rd(M/T)+rd(L/I))*_,D=24*(1-N)/(1+Math.sqrt(N+.05)),[U,C]=rc,P=.11*(1-.6*Math.exp(-(rd(M-U)+rd(L-C))/rd(22))),H=(O=(R=P*D)-rm(R-.9,.12))+rm(-1.3-O,.25),G=.09*Math.exp(-rd((P*D-.9)/.2)),F=.45*rv((D-10)/3),W=rm(-D-10,6)/70,B=H+G+F+-11*W*W/(1+W*W);for(let R of rh)B+=R.height*Math.exp(-(rd((M-R.x)/R.along)+rd((L-R.z)/R.across)));return B}let rb=1.6-rg(0,0),rw=([M,L])=>rg(M,L)+rb*Math.exp(-(rd(M)+rd(L))/rd(7)),rx=tO("outside/island-height",`
/// Metres over still sea level at \`xz\` of the world's ground plane, negative
/// under water.
fn islandHeight(xz: vec2f) -> f32 {
  let x = xz.x;
  let z = xz.y;
  let east = eased(x / ISLAND_TURN);
  let south = eased(z / ISLAND_TURN);
  let a = mix(ISLAND_WEST, ISLAND_EAST, east);
  let b = mix(ISLAND_NORTH, ISLAND_SOUTH, south);
  let theta = atan2(z, x);
  let wobble = 1.0
    + ISLAND_LOBES * cos(3.0 * theta + ISLAND_LOBES_START)
    + ISLAND_BAYS * cos(5.0 * theta + ISLAND_BAYS_START)
    + ISLAND_CUSPS * cos(ISLAND_CUSP_COUNT * theta + ISLAND_CUSPS_START);
  let q = (sq(x / a) + sq(z / b)) * wobble;
  let d = ISLAND_REACH * (1.0 - q) / (1.0 + sqrt(q + 0.05));
  let m = ISLAND_SLOPE * (1.0 - ISLAND_GENTLE
    * exp(-(sq(x - ISLAND_GENTLE_X) + sq(z - ISLAND_GENTLE_Z)) / sq(ISLAND_GENTLE_OVER)));
  let face = softMax(softMin(m * d, ISLAND_BERM, 0.12), -ISLAND_TERRACE, 0.25);
  let lip = ISLAND_LIP * exp(-sq((m * d - ISLAND_BERM) / 0.2));
  let inland = ISLAND_INLAND * eased((d - 10.0) / 3.0);
  let off = softPlus(-d - 10.0, 6.0) / ISLAND_DEEP_OVER;
  let deep = -ISLAND_DEEP * off * off / (1.0 + off * off);
  var h = face + lip + inland + deep;
${rh.map(M=>(({x:M,z:L,height:R,along:O,across:A})=>`  h += ${tE(R)} * exp(-(sq((x - ${tE(M)}) / ${tE(O)}) + sq((z - ${tE(L)}) / ${tE(A)})));`)(M)).join("\n")}
  h += ${tE(rb)} * exp(-(sq(x) + sq(z)) / sq(ISLAND_CREST_OVER));
  return h;
}
`,rl,ru),ry=[0,0],rk=[ry[0]-2.5,rw(ry)+1.1+2.5,ry[1]-2.5],rS=M=>{let[L,R,O]=tD(M);return[rk[0]+5*L,rk[1]+5*R,rk[2]+5*O]},rM=([M,L,R])=>tU([(M-rk[0])/5,(L-rk[1])/5,(R-rk[2])/5]),rL={min:[rk[0],rk[1]-2.5,rk[2]],max:[rk[0]+5,rk[1]+2.5,rk[2]+5]},rR={min:[rL.max[0],rk[1],rk[2]+tG.from],max:[rL.max[0],rk[1]+tG.height,rk[2]+tG.to]},rO=function([M,L]){let R=R=>[ry[0]+M*R,ry[1]+L*R],O=0,A=200;for(let M=0;M<40;M+=1){let M=(O+A)/2;rw(R(M))>.34?O=M:A=M}return R(O)}([-Math.SQRT1_2,Math.SQRT1_2]),rA=[rO[0],.34,rO[1]],rE=tO("outside/world",`
const CUBE_AT = ${tT(rk)};
const CUBE_METRES = ${tE(5)};
const CUBE_MIN = ${tT(rL.min)};
const CUBE_MAX = ${tT(rL.max)};
const DOORWAY_MIN = ${tT(rR.min)};
const DOORWAY_MAX = ${tT(rR.max)};

fn toWorld(c: vec3f) -> vec3f {
  return CUBE_AT + toShell(c * CUBE_METRES);
}

fn toCube(w: vec3f) -> vec3f {
  return toRoom(w - CUBE_AT) / CUBE_METRES;
}
`,tq),rT=Math.atan(4),rI={across:.032,through:.07},rz={tall:.03,through:.03},r_=function(){let M=rk[2]+(tG.from+tG.to)/2,L=[rL.max[0]+rI.through/(2*Math.sin(rT)),rk[1]-.01,M],R=[L[0]+1,0,M];for(let O=0;O<8;O+=1){let O=rw([R[0],M])-.04;R=[L[0]+(L[1]-O)/Math.tan(rT),O,M]}let O=Math.hypot(L[0]-R[0],L[1]-R[1]),A=Math.floor((O-.27-.2)/.29),E=O-.27-.29*A,T=Array.from({length:A+1},(M,A)=>tM(R,tM(L,R,-1),(E+.29*A)/O));return{foot:R,top:L,rungs:T,length:O,lowest:E,highest:O-.27,wide:.4,stile:rI,rung:rz,pitch:.29}}(),rN=tL(tM(r_.top,r_.foot,-1),1/r_.length),rD=[0,0,1],rU=[rN[1],-rN[0],0],rC=tO("outside/ladder",`
const LADDER_FOOT = ${tT(r_.foot)};
const LADDER_UP = ${tT(rN)};
const LADDER_ACROSS = ${tT(rD)};
const LADDER_OUT = ${tT(rU)};
/// Its length, its stiles' middles apart, a stile's width across, and the
/// rungs' pitch.
const LADDER_SIZE = vec4f(${tE(r_.length)}, ${tE(.4)}, ${tE(rI.across)}, ${tE(.29)});
/// How far up the stiles the lowest and the highest rung are, and a rung's height.
const LADDER_RUNGS = vec3f(${tE(r_.lowest)}, ${tE(r_.highest)}, ${tE(rz.tall)});
`),rP=2*Math.PI,rH=3600/420,rG=3600/420*9.81/rP,rF=[Math.SQRT1_2,-Math.SQRT1_2],rW=[[31,13,1],[53,17,1],[89,17,1]],rB=[[19,9,.22],[37,9,.16],[61,13,.1]],r$=M=>eb({cycles:ex(M),weight:ew(.75,1.25),start:ew(0,1)}),rq=M=>eb({slow:r$(M[0]?.[1]??1),middle:r$(M[1]?.[1]??1),quick:r$(M[2]?.[1]??1)}),rj=el("0"),rK=eR(eb({drift:rq(rW),sets:rq(rB)}),M=>rj(`island/sea/swell/${M}`));function rY({slow:M,middle:L,quick:R},O,A,E){let T=[M,L,R].map(({cycles:M,weight:L,start:R},A)=>{let[E=1,,T=1]=O[A]??[];return{cycles:E+M,share:T*L,start:R}}),I=T.reduce((M,{share:L})=>M+L,0);return T.map(({cycles:M,share:L,start:R})=>[M,A*L/I*E(M),R])}let rV=rY(rK.drift,rW,.165,M=>420/(rP*M)),rX=rY(rK.sets,rB,.47,()=>1),rZ=(M,L)=>M.reduce((M,[R,O,A])=>M+O*Math.sin(rP*(R*L/3600+A)),0),rQ=M=>M.map(([M,L,R])=>`${tE(L)} * sin(${tE(rP)} * fract(${tE(M)} * tau / ${tE(3600)} + ${tE(R)}))`).join("\n    + "),rJ=M=>420*M/3600+rZ(rV,M),r0=(1-Math.exp(-3))/3,r2=tO("outside/swell",`
fn swellDrift(tau: f32) -> f32 {
  return ${rQ(rV)};
}

fn setsAt(tau: f32) -> f32 {
  return 1.0
    + ${rQ(rX)};
}
`),r1=tO("outside/swell-course",`
const SWELL_RUNS = ${tT(rF)};
const SWELL_RUNS_X = ${tE(rF[0])};
const SWELL_RUNS_Z = ${tE(rF[1])};
/// Seconds the open swell takes over a metre.
const SWELL_PACE = ${tE(1/rG)};
`),r3=tO("outside/swell-numbers",`
const SEA_GRAVITY = ${tE(9.81)};
const SWELL_HEIGHT = ${tE(.4)};
const HOUR_SECONDS = ${tE(3600)};
const RADIANS_A_TURN = ${tE(rP)};
const WAVES = ${tE(420)};
const PERIOD = ${tE(rH)};
const BORE_FACE = ${tE(.955)};
const BORE_FACE_SPAN = ${tE(1-.955)};
const BORE_FALL = ${tE(3)};
const BORE_MEAN = ${tE(r0)};
`),r5=tO("cube/entities/island/sea/swell/model/swell-train",`
/// How many crests have passed a point whose own time is \`tau\` seconds.
fn turnsAt(tau: f32) -> f32 {
  return WAVES * tau / HOUR_SECONDS + swellDrift(tau);
}

/// The moment, in a point's own time, that crest \`n\` passes it.
fn crestOf(n: f32) -> f32 {
  var tau = n * PERIOD;
  for (var i = 0; i < 5; i++) {
    tau = (n - swellDrift(tau)) * PERIOD;
  }
  return tau;
}

/// A wave that has felt the bottom, at \`phase\` turns after its crest: crests
/// sharpened and troughs flattened by \`sharp\` in [0, 1), the height from crest
/// to trough staying 2 (Abreu et al. 2010, skewed with no asymmetry).
fn peaked(phase: f32, sharp: f32) -> f32 {
  let blunt = sqrt(1.0 - sharp * sharp);
  let swing = cos(RADIANS_A_TURN * phase);
  return blunt * (swing - sharp / (1.0 + blunt)) / (1.0 - sharp * swing);
}

/// A broken wave at \`phase\` turns after its front passed: highest just behind
/// the front, falling away, then the next front's steep face.
fn bore(phase: f32) -> f32 {
  let face = clamp((phase - BORE_FACE) / BORE_FACE_SPAN, 0.0, 1.0);
  let rise = face * face * (3.0 - 2.0 * face);
  let fall = exp(-BORE_FALL * phase);
  return 2.1 * (fall + (1.0 - fall) * rise - BORE_MEAN);
}
`,r2,r3),r4=[[4.5,3,.07],[10,6,.1],[21,12,.12]],r6=eb({longer:ew(0,1),start:ew(0,1)}),r8=el("0"),r7=eR(eb({short:r6,middle:r6,long:r6}),M=>r8(`island/sea/cusps/${M}`)),r9=[r7.short,r7.middle,r7.long].map(({longer:M,start:L},R)=>{let[O=1,A=0,E=0]=r4[R]??[];return[1/(O+A*M),E,L]}),se=tO("outside/shore-cusped",`
fn cusped(across: f32) -> f32 {
  return 1.0
    + ${r9.map(([M,L,R])=>`${tE(L)} * sin(${tE(rP)} * (${tE(M)} * across + ${tE(R)}))`).join("\n    + ")};
}
`),st=tO("cube/entities/island/sea/cusp/model/shore-cusps",`
/// \`cusped\` at \`xz\` in the world frame.
fn cuspAt(xz: vec2f) -> f32 {
  return cusped(xz.x * SWELL_RUNS_Z - xz.y * SWELL_RUNS_X);
}
`,se,r1),sa=1/12,sr=Math.sqrt(30/9.81)/(1/12),ss=tO("outside/water-level-numbers",`
const SWELL_FEELS = ${tE(30)};
const BEACH_SLOPE = ${tE(sa)};
const SHORE_SHALLOWEST = ${tE(.3)};
const SHORE_LAG = ${tE(sr)};
const SHORE_FACING_REACH = ${tE(4)};
const SHORE_LEE = ${tE(.3)};
const SHOALS_FROM = ${tE(4.55)};
const SURF_SHARE = ${tE(.62)};
const BREAKS_FROM = ${tE(.8)};
const BREAKS_TO = ${tE(1.15)};
const RUNUP_SHARE = ${tE(.55)};
const SHEET_THICK = ${tE(1.5)};
const SHEET_GATHERS = ${tE(.5)};
const SHEET_REACHES = ${tE(.6)};
const SHEET_SINKS = ${tE(.1)};
const SHEET_SINKS_UNDER = ${tE(.01)};
const DRY_UNDER = ${tE(.03)};
const SHORE_ROUND = ${tE(.012)};
`),sl=M=>Math.max(-M,0)+.3;function so(M){let L=Math.sqrt(Math.min(M/30,1));return sr*(1-L)*(1-L)}let sn=(M,L)=>M*Math.max(1,(4.55/sl(L))**.25);function si(M,L,R,O){let A=function(M){let L=M*rH;for(let R=0;R<5;R+=1)L=(M-rZ(rV,L))*rH;return L}(M),E=L-A,T=Math.sqrt(19.62*(.55*.4*O*(1+rZ(rX,A)))),I=Math.max(R,0)/sa,z=T-4.905*sa*E-I/Math.max(E,.001);return E<=0||z<=0?0:1.5*z*z/88.29*e7(0,.5,E)*Math.exp(Math.min(R,0)/.25)}function sf(M){let{bed:L,shelter:R,tongue:O}=function(M){var L,R,O;let A,E,T=rw(M),[I,z]=(([M,L])=>[(rw([M+4,L])-rw([M-4,L]))/8,(rw([M,L+4])-rw([M,L-4]))/8])(M),_=(L=I*rF[0]+z*rF[1],R=Math.hypot(I,z),A=sr*(1-Math.sqrt(Math.min((O=sl(T))/30,1)))/Math.sqrt(30*O),((E=1/rG)+A*L)/Math.sqrt(E*E+2*E*A*L+A*A*R*R));return{bed:T,tau:0-(M[0]*rF[0]+M[1]*rF[1])/rG-so(sl(T)),towardSwell:_,shelter:e8(.3,1,e7(-.6,.7,_)),tongue:(([M,L])=>{let R;return R=M*rF[1]-L*rF[0],r9.reduce((M,[L,O,A])=>M+O*Math.sin(rP*(L*R+A)),1)})(M)}}(M),A=M[0]*rF[0]+M[1]*rF[1];return M=>(function(M,L,R,O,A){let E=A-M/rG-so(sl(L)),T=R*O,I=Math.floor(rJ(E)),z=Math.max(si(I,E,L,T),si(I-1,E,L,T)),_=L<0?function(M,L,R){var O;let A,E,T,I,z=.2*R*(1+rZ(rX,M)),_=sn(z,L)/Math.max(-(.31*L),1e-4),N=.31*Math.max(-L,0),D=Math.min(sn(z,L),N),U=rJ(M),C=U-Math.floor(U);return D*e8((A=Math.sqrt(1-(O=.75*Math.min(_,1))*O),A*((E=Math.cos(rP*C))-O/(1+A))/(1-O*E)),(T=Math.min(Math.max((C-.955)/(1-.955),0),1),2.1*((I=Math.exp(-3*C))+T*T*(3-2*T)*(1-I)-r0)),e7(.8,1.15,_))}(E,L,R):L-.03*e7(0,.05,L);if(z<=0)return _;let N=Math.max(L,0)+z-(L<0?.1*(1-e7(0,.01,z)):0);return e8(_,.5*(_+N+Math.sqrt((_-N)*(_-N)+144e-6)),e7(-.6,-.1,L))})(A,L,R,O,M)}let sc=tO("cube/entities/island/shore/level/model/water-level",`
/// The greater of two levels, rounded where they cross.
fn shoreOver(a: f32, b: f32) -> f32 {
  return 0.5 * (a + b + sqrt((a - b) * (a - b) + SHORE_ROUND * SHORE_ROUND));
}

/// The depth a wave is timed over where the bed stands at \`bed\`.
fn shoreDepth(bed: f32) -> f32 {
  return max(-bed, 0.0) + SHORE_SHALLOWEST;
}

/// Seconds water \`depth\` deep has held a wave back since deep water.
fn shoreDelay(depth: f32) -> f32 {
  let q = sqrt(min(depth / SWELL_FEELS, 1.0));
  return SHORE_LAG * (1.0 - q) * (1.0 - q);
}

/// How fast that delay grows as the water shallows, seconds per metre.
fn shoreSlowing(depth: f32) -> f32 {
  let q = sqrt(min(depth / SWELL_FEELS, 1.0));
  return SHORE_LAG * (1.0 - q) / sqrt(depth * SWELL_FEELS);
}

/// How squarely the waves at a point still run with the open swell: 1 on the
/// beach that faces it, −1 in the island's lee.
fn shoreFacing(along: f32, steep: f32, bed: f32) -> f32 {
  let slow = shoreSlowing(shoreDepth(bed));
  let pace = SWELL_PACE;
  let ahead = pace + slow * along;
  return
    ahead / sqrt(
      pace * pace + 2.0 * pace * slow * along + slow * slow * steep * steep,
    );
}

/// What a shore facing the swell by \`facing\` keeps of a wave's height.
fn sheltered(facing: f32) -> f32 {
  return mix(SHORE_LEE, 1.0, smoothstep(-0.6, 0.7, facing));
}

/// The open swell's amplitude, metres, on a shore keeping \`shelter\` of it.
fn swellAmplitude(tau: f32, shelter: f32) -> f32 {
  return 0.5 * SWELL_HEIGHT * shelter * setsAt(tau);
}

/// A wave of amplitude \`open\` as the shallowing bed has stood it up.
fn shoaled(open: f32, bed: f32) -> f32 {
  return open * max(1.0, pow(SHOALS_FROM / shoreDepth(bed), 0.25));
}

/// How far a wave of amplitude \`open\` has gone toward breaking, 0 to 1 and past.
fn steepness(open: f32, bed: f32) -> f32 {
  return shoaled(open, bed) / max(0.5 * SURF_SHARE * -bed, 1e-4);
}

/// How broken a wave \`steep\` toward breaking is: 0 unbroken, 1 a bore.
fn breaking(steep: f32) -> f32 {
  return smoothstep(BREAKS_FROM, BREAKS_TO, steep);
}

/// How high up the sand, metres, the wave that landed at \`landed\` runs.
fn swashReach(landed: f32, shelter: f32) -> f32 {
  return RUNUP_SHARE * SWELL_HEIGHT * shelter * setsAt(landed);
}

/// How broken the waves are over a bed at \`bed\` in a point's own time \`tau\`.
fn brokenAt(tau: f32, bed: f32, shelter: f32) -> f32 {
  return breaking(steepness(swellAmplitude(tau, shelter), bed));
}

/// The waves' surface over a bed below the still sea, metres about it.
fn surfLevel(tau: f32, bed: f32, shelter: f32) -> f32 {
  let open = swellAmplitude(tau, shelter);
  let steep = steepness(open, bed);
  let limit = 0.5 * SURF_SHARE * max(-bed, 0.0);
  let tall = min(shoaled(open, bed), limit);
  let turns = turnsAt(tau);
  let phase = turns - floor(turns);
  let shape =
    mix(peaked(phase, 0.75 * min(steep, 1.0)), bore(phase), breaking(steep));
  return tall * shape;
}

/// How deep wave \`n\`'s sheet lies on sand at \`bed\`, in a point's own time
/// \`tau\`: nothing before the wave lands or past its tongue's tip.
fn sheetDepth(n: f32, tau: f32, bed: f32, shelter: f32) -> f32 {
  let landed = crestOf(n);
  let since = tau - landed;
  let launch = sqrt(2.0 * SEA_GRAVITY * swashReach(landed, shelter));
  let up = max(bed, 0.0) / BEACH_SLOPE;
  let thin =
    launch - 0.5 * SEA_GRAVITY * BEACH_SLOPE * since - up / max(since, 1e-3);
  if (since <= 0.0 || thin <= 0.0) {
    return 0.0;
  }
  return
    SHEET_THICK
      / (9.0 * SEA_GRAVITY)
      * thin
      * thin
      * smoothstep(0.0, SHEET_GATHERS, since)
      * exp(min(bed, 0.0) / 0.25);
}

/// The sea's slow surface where the bed stands at \`bed\`, a point's \`run\`
/// metres along the swell's heading, keeping \`shelter\` of a wave and \`tongue\`
/// of that again in its swash, at \`seconds\`.
fn swellLevel(
  run: f32,
  bed: f32,
  shelter: f32,
  tongue: f32,
  seconds: f32,
) -> f32 {
  let tau = seconds - run * SWELL_PACE - shoreDelay(shoreDepth(bed));
  let thrown = shelter * tongue;
  let n = floor(turnsAt(tau));
  let sheet =
    max(sheetDepth(n, tau, bed, thrown), sheetDepth(n - 1.0, tau, bed, thrown));
  var low = bed - DRY_UNDER * smoothstep(0.0, 0.05, bed);
  if (bed < 0.0) {
    low = surfLevel(tau, bed, shelter);
  }
  if (sheet <= 0.0) {
    return low;
  }
  var top = max(bed, 0.0) + sheet;
  if (bed < 0.0) {
    top -= SHEET_SINKS * (1.0 - smoothstep(0.0, SHEET_SINKS_UNDER, sheet));
  }
  return mix(low, shoreOver(low, top), smoothstep(-SHEET_REACHES, -0.1, bed));
}

/// The bed's rise per metre at \`xz\`, along x and z.
fn shoreRise(xz: vec2f) -> vec2f {
  let reach = SHORE_FACING_REACH;
  return
    vec2f(
      islandHeight(xz + vec2f(reach, 0.0)) - islandHeight(
        xz - vec2f(reach, 0.0),
      ),
      islandHeight(xz + vec2f(0.0, reach)) - islandHeight(
        xz - vec2f(0.0, reach),
      ),
    ) / (2.0 * reach);
}

/// The sea's slow surface at \`xz\` at time \`t\`: metres over the still sea,
/// with the swell, its surf and the swash and no wind wave.
fn waterLevel(xz: vec2f, t: f32) -> f32 {
  let bed = islandHeight(xz);
  let rise = shoreRise(xz);
  let facing = shoreFacing(dot(rise, SWELL_RUNS), length(rise), bed);
  return swellLevel(dot(xz, SWELL_RUNS), bed, sheltered(facing), cuspAt(xz), t);
}
`,rx,st,r2,r5,r1,r3,ss),su=tO("outside/shore-wetness-numbers",`
const WAVES_BACK = ${tE(6)};
const NEVER_WET = ${tE(1e3)};
const DRY_SECONDS = ${tE(28)};
const FILM_FROM = ${tE(.4)};
const FILM_TO = ${tE(5)};
`),sh=tO("cube/entities/island/shore/wetness/model/shore-wetness",`
/// Seconds since a swash sheet last lay on sand \`bed\` metres over the still
/// sea, at a point whose own time is \`tau\` and whose shore keeps \`shelter\` of
/// a wave: 0 while one lies there, \`NEVER_WET\` where none of the last waves
/// reached.
fn drySince(tau: f32, bed: f32, shelter: f32) -> f32 {
  if (bed <= 0.0) {
    return 0.0;
  }
  let n = floor(turnsAt(tau));
  var dry = NEVER_WET;
  for (var back = 0.0; back < WAVES_BACK; back += 1.0) {
    let landed = crestOf(n - back);
    let since = tau - landed;
    let reach = swashReach(landed, shelter);
    // The sheet's tip passes the point going up and again coming down.
    let span = 2.0 * SEA_GRAVITY * (reach - bed);
    if (span > 0.0) {
      let launch = sqrt(2.0 * SEA_GRAVITY * reach);
      let comes = (launch - sqrt(span)) / (SEA_GRAVITY * BEACH_SLOPE);
      let leaves = (launch + sqrt(span)) / (SEA_GRAVITY * BEACH_SLOPE);
      if (since >= comes) {
        dry = min(dry, max(since - leaves, 0.0));
      }
    }
  }
  return dry;
}

/// How damp sand is \`dry\` seconds after the water left it, 1 soaked.
fn dampAfter(dry: f32) -> f32 {
  return exp(-dry / DRY_SECONDS);
}

/// How much of a film of water still stands on it, 1 a mirror.
fn filmAfter(dry: f32) -> f32 {
  return 1.0 - smoothstep(FILM_FROM, FILM_TO, dry);
}

/// Seconds since the swash last lay on the sand at \`xz\` at time \`t\`.
fn shoreDrySince(xz: vec2f, t: f32) -> f32 {
  let bed = islandHeight(xz);
  let rise = shoreRise(xz);
  let facing = shoreFacing(dot(rise, SWELL_RUNS), length(rise), bed);
  let tau = t - dot(xz, SWELL_RUNS) * SWELL_PACE - shoreDelay(shoreDepth(bed));
  return drySince(tau, bed, sheltered(facing) * cuspAt(xz));
}

/// The sand at \`xz\` at time \`t\`: x how damp it is (1 soaked), y how much of
/// a film of water stands on it (1 a mirror).
fn shoreWetness(xz: vec2f, t: f32) -> vec2f {
  let dry = shoreDrySince(xz, t);
  return vec2f(dampAfter(dry), filmAfter(dry));
}
`,rx,st,su,r5,r1,r3,sc,ss),sd=[.45,.3,.25];function sm([M,L],R,O,A){let E=R*Math.PI/180;return{root:[M,L,0],aim:[Math.cos(E),Math.sin(E),0],hinge:[-Math.sin(E),Math.cos(E),0],bones:sd.map(M=>M*O),girth:A}}let sp=tR([.68,.7,.2]),sv=[.6,-.5,.62],sg={root:[2.6,2.7,.3],aim:sp,hinge:tR(tS(au(sv,tL(sp,-tk(sv,sp))),sp)),bones:[4.2,3.4,3],girth:[1.4,.85]},sb=[sm([9.7,3.05],7,7.4,[.92,.72]),sm([10,1],2,8.2,[.95,.74]),sm([9.7,-1.05],-4,7.6,[.9,.7]),sm([9,-2.95],-11,5.9,[.78,.62]),sg],sw={curls:[[.14,.3,.2],[.17,.33,.22],[.2,.36,.24],[.23,.4,.26],[0,.22,.28]],oppose:0,sleeve:28},sx={curls:[[.75,.86,.44],[.95,1.15,.6],[1.1,1.25,.65],[1.2,1.3,.7],[.48,.5,.33]],oppose:.6,sleeve:28},sy={curls:[[1.15,1.35,.5],[1.15,1.4,.55],[1.15,1.4,.55],[.8,1,.7],[0,0,1.3]],oppose:-.9,sleeve:28},sk=[8.6,0,2.5],sS=[[-2.5,0,2.7,1.5],[-.5,0,2.9,1.45],[1.5,.1,3.7,1.6],[4.5,.1,4.2,1.5],[7.5,0,4.3,1.25],[9.6,0,4.2,.95],[10.3,0,3.9,.5],[10.5,0,3.6,.03]],sM={along:[.42,.9,1.06],arc:[.62,.88],paint:0xe9cfc6},sL=([M,L,R],[O,A,E])=>au(au(tL(M,O),tL(L,A)),tL(R,E)),sR=([M,L,R,O])=>({centre:[M,L,0],wide:[0,R,0],thick:[0,0,O]}),sO=[1,0,0];function sA({root:M,aim:L,hinge:R,bones:O},A){let E=tS(L,R),T=M=>au(tL(L,Math.cos(M)),tL(E,Math.sin(M))),I=[],z=M,_=0,N=0;for(let[M,L]of O.entries())N+=A[M]??0,I.push({from:z,before:_,bend:N}),z=au(z,tL(T(N),L)),_+=L;return{inward:E,wayAt:T,joints:I,tip:z,total:_}}let sE=({curls:M,oppose:L})=>M.map((M,R)=>{let O,A=sb[R];if(void 0===A)throw RangeError("A hand has five digits");return[4===R?(O=M=>{let R,O,A=tL(sO,tk(M,sO));return au(A,(R=tM(M,A,-1),au(tL(R,Math.cos(O=-L)),tL(tS(sO,R),Math.sin(O)))))},{...A,aim:O(A.aim),hinge:O(A.hinge)}):A,M]});function sT(M,L){let R=sE(M)[L];if(void 0===R)throw RangeError("A hand has five digits");let[O,A]=R,{inward:E,wayAt:T,joints:I,tip:z}=sA(O,A),_=I.at(-1)?.bend??0,N=O.bones.at(-1)??0,D=au(tL(O.aim,-Math.sin(_)),tL(E,Math.cos(_)));return au(au(z,tL(T(_),-(.3*N))),tL(D,.86*O.girth[1]))}function sI(M,L,R,O,A){let E=M=>tL(sL(L,M),.002*R),T=O=>O.map(({centre:O,wide:A,thick:T})=>({centre:au(M,tL(sL(L,O),.002*R)),wide:E(A),thick:E(T)})),I=sE(A).flatMap(([M,L])=>{let{rings:R,nail:A}=function(M,L){let{aim:R,hinge:O,bones:A,girth:E}=M,{inward:T,wayAt:I,joints:z,total:_}=sA(M,L),N=(M,L,N,D)=>{let U=z[M],C=A[M];if(void 0===U||void 0===C)throw RangeError(`A digit has no bone ${String(M)}`);let P=D??U.bend,H=(U.before+C*L)/_,G=(E[0]+(E[1]-E[0])*H)*N;return{centre:au(U.from,tL(I(U.bend),C*L)),wide:tL(O,G),thick:tL(au(tL(R,-Math.sin(P)),tL(T,Math.cos(P))),.86*G)}},D=A.length-1,U=[N(0,0,1),...z.flatMap((M,L)=>L===D?[N(L,.5,.97),N(L,.8,.94),N(L,.93,.76),N(L,1,.44),N(L,1.03,.03)]:[N(L,.5,.95),N(L+1,0,1.08,(M.bend+(z[L+1]?.bend??M.bend))/2)])],[C,P,H]=sM.along;return{rings:U,nail:[N(D,C,H),N(D,(C+P)/2,H),N(D,P,.93*H)]}}(M,L);return[...av(T(R),O,{surface:"skin",sides:8}),...av(T(A),O,{surface:"skin",...(0,aZ.O)(sM,"paint","arc"),sides:3})]});return[...av(T([[-A.sleeve,0,4.4,3.6],[-12,0,3.9,3],[-3.4,0,3.6,2.5],[-3.2,0,3.85,2.75],[-1.2,0,3.85,2.75],[-.9,0,3.4,2.3],[-.8,0,2.8,1.5]].map(M=>sR(M))),O,{surface:"fabric",sides:12}),...av(T(sS.map(M=>sR(M))),O,{surface:"skin",sides:12}),...I]}let sz={n:1,x:0n,y:0n},s_=["left","right"],sN=[],sD=M=>({pose:M,act:null,pill:null,strode:0,cues:sN}),sU=M=>({...M,walk:0,strafe:0}),sC=[[0,1]],sP=(()=>{let{wall:M,from:L,to:R}=tF;return{isEast:"east"===M||"west"===M,x:"west"===M?-1n:0n,y:"north"===M?-1n:0n,stands:[[0,L/5],[R/5,1]]}})(),sH=(M,L,R,O)=>1===M&&O===sP.isEast&&L===sP.x&&R===sP.y?sP.stands:sC;function sG({n:M,x:L,y:R},O){let A=[];for(let E of[-1,0,1]){let T=BigInt(E);for(let I of[0,1]){let z=BigInt(I-1);if(!O.isOpenEast(M,L+z,R+T))for(let[O,_]of sH(M,L+z,R+T,!0))A.push({a:{u:I,v:E+O},b:{u:I,v:E+_}});if(!O.isOpenSouth(M,L+T,R+z))for(let[O,_]of sH(M,L+T,R+z,!1))A.push({a:{u:E+O,v:I},b:{u:E+_,v:I}})}}return A}function sF(M){if(M>=1)return[M-1,1n];if(M>=0)return[M,0n];let L=M+1;return L<1?[L,-1n]:[0,0n]}let sW=({running:M})=>M?.7/.28:1,sB=89*Math.PI/180,s$=Math.PI/2,sq=Math.PI/3,sj={walk:0,strafe:0,turnKeys:0,tiltKeys:0,yawBy:0,elevationBy:0,running:!1,use:!1,answer:null,goTo:null};function sK(M,L,R){if(!(R>=0)||!Number.isFinite(R))throw RangeError(`Not a frame time: ${R}`);return{yaw:a0(M.yaw+L.yawBy+L.turnKeys*s$*R),elevation:Math.min(sB,Math.max(-sB,M.elevation+L.elevationBy+L.tiltKeys*sq*R))}}function sY(M,L,R){let O=R/Math.max(1,Math.hypot(M.walk,M.strafe)),A=M.walk*O,E=M.strafe*O,T=Math.cos(L),I=Math.sin(L);return[A*T-E*I,A*I+E*T]}function sV(M,L,R,O){let A=sK(M,L,R),E=L.running?.7:.28,[T,I]=sY(L,A.yaw,E*M.scale*R);return function(M,L,R,O){let A=.06*M.scale,E=Math.max(1,Math.ceil(Math.hypot(L,R)/(A/2))),{x:T,y:I,u:z,v:_}=M,N=sG(M,O);for(let D=0;D<E;D+=1){({u:z,v:_}=function(M,L,R){let{u:O,v:A}=M;for(let M=0;M<4;M+=1){let M=!1;for(let E of L){let L=function({a:M,b:L},R){let O=L.u-M.u,A=L.v-M.v,E=Math.min(1,Math.max(0,((R.u-M.u)*O+(R.v-M.v)*A)/(O*O+A*A)));return{u:M.u+E*O,v:M.v+E*A}}(E,{u:O,v:A}),T=Math.hypot(O-L.u,A-L.v);if(T<R&&T>0){let E=R/T;O=L.u+(O-L.u)*E,A=L.v+(A-L.v)*E,M=!0}}if(!M)break}return{u:O,v:A}}({u:z+L/E,v:_+R/E},N,A));let[D,U]=sF(z),[C,P]=sF(_);z=D,_=C,(0n!==U||0n!==P)&&(T+=U,I+=P,N=sG({...M,x:T,y:I},O))}return{...M,x:T,y:I,u:z,v:_}}({...M,...A,eyeAbove:.32*M.scale},T,I,O)}let sX=(M,[L,R],O,A,E=1)=>({...O,roll:0,scale:E,eye:[L,sZ(M,L,R,A,0,E),R],strode:0,paces:0,stroke:0,cues:sN});function sZ(M,L,R,O,A,E){let T=.025*Math.sin(2*Math.PI*O/2.5)+.035*Math.sin(2*Math.PI*A);return Math.max(M.height(L,R)+1.6*E,M.level(L,R,O)+(.14+T)*E)}let sQ=(M,[L,,R],O,A=1)=>M.level(L,R,O)+.14*A>M.height(L,R)+1.6*A,sJ=M=>M>0?"shallows":.12>-M?"wet-sand":"sand",s0={smooth:e6,linear:M=>M,in:M=>M*M,out:M=>M*(2-M)},s2=M=>({x:M("x"),y:M("y"),z:M("z"),yaw:M("yaw"),elevation:M("elevation"),roll:M("roll"),lids:M("lids"),exposure:M("exposure")}),s1=(M,L)=>s2(R=>(function(M,L){let[R]=M;if(void 0===R)throw RangeError("A channel needs a key");let[O,A]=R;for(let[R,E,T]of M){if(L<R)return e8(A,E,s0[T??"smooth"](e4(L,O,R)));[O,A]=[R,E]}return A})(M[R],L));function s3(M,L=[]){return{...s2(L=>{if(M[0]?.[L]===void 0)throw RangeError(`A track's first beat pins its ${L}`);return M.flatMap(M=>{let R=M[L];return void 0===R?[]:[M.ease?[M.mark,R,M.ease]:[M.mark,R]]})}),runs:Math.max(...M.map(({mark:M})=>M)),cues:L}}let s5=2*Math.PI,s4=(M,L)=>M-s5*Math.round((M-L)/s5),s6=([M,L],[R,O])=>({yaw:Math.atan2(O-L,R-M),far:Math.hypot(R-M,O-L)}),s8=({min:M,max:L})=>[(M[0]+L[0])/2,(M[2]+L[2])/2],s7={lids:1,exposure:1},s9=({eye:[M,L,R],yaw:O,elevation:A,roll:E})=>({x:M,y:L,z:R,yaw:O,elevation:A,roll:E,...s7}),le=({x:M,y:L,z:R,yaw:O,elevation:A,roll:E})=>({eye:[M,L,R],yaw:O,elevation:A,roll:E});function lt({land:M,wake:L,cube:R}){let{at:O,seaward:A}=L,[E,T]=[Math.cos(A),Math.sin(A)],I=(L,R)=>{let[A,I]=[O[0]+L*E,O[1]+L*T];return{x:A,y:M.height(A,I)+R,z:I}},z=Math.sign(s4(s6([O[0]+ +E,O[1]+ +T],s8(R)).yaw,A)-A)||1,_={...I(0,.13),yaw:A+.3*z,elevation:.03,roll:1.1*z},N={...I(.68,.8),yaw:A,elevation:-.08};return s3([{mark:0,..._,lids:0,exposure:1.5},{mark:.6,lids:0},{mark:1.3,lids:.35},{mark:1.8,lids:0,ease:"in"},{mark:2.4,lids:0,exposure:1.5},{mark:3.4,lids:1},{mark:4.2,..._,exposure:1},{mark:5.6,...I(.18,.44),yaw:A+.15*z,elevation:-.1,roll:.35*z},{mark:7.2,...N,roll:0},{mark:8,...N},{mark:8.9,...I(1.1,1.02),elevation:-.3,ease:"in"},{mark:10.1,...I(1,1.6),elevation:-.03,ease:"out"},{mark:10.9,yaw:A,elevation:-.03,roll:0}],[[1.6,{cue:"say",moment:"waking"}],[9.2,{cue:"step",strength:.35}],[9.9,{cue:"step",strength:.4}]])}let la=Math.tan(.52),lr=(M,L,R)=>({roamer:M,scene:L,...R,shot:s1(L.track,L.playedFor),cues:sN,entered:!1}),ls=(M,L,R,O)=>sX(R,[M.x,M.z],(0,aZ.O)(M,"yaw","elevation"),O,L),ll={asleep:!1,ladderGone:!0,sawCube:!0,gazeHeld:0},lo={cue:"say",moment:"wonder"};function ln({scene:M,roamer:L,ladderGone:R},{land:O,ladder:A},E){let[T,,I]=L.eye,[z,,_]=A.foot;return null===M&&!R&&!sQ(O,L.eye,E,L.scale)&&1.6>=Math.hypot(T-z,I-_)}let li=(M,L,R)=>e6(e4(M,L,R)),lf=(M,[L,R,O,A])=>li(M,L,R)*(1-li(M,O,A));function lc({u:M,v:L,eyeAbove:R,yaw:O,elevation:A}){let E=Math.cos(A),T=[E*Math.cos(O),Math.sin(A),E*Math.sin(O)],I=[-Math.sin(O),0,Math.cos(O)];return{eye:[M,R,L],ahead:T,right:I,up:tS(I,T)}}let lu=Math.PI/3;function lh(M,L){let[R,,O]=ak(L).centre,[A,E]=[R-M.u,O-M.v];return{yaw:Math.atan2(E,A),away:Math.hypot(A,E)}}function ld(M,L){let{yaw:R,away:O}=lh(M,L);return M.scale>=1&&O<=.2&&Math.abs(aQ(R-M.yaw))<=lu}let lm=({asks:M})=>M?.7:.45;function lp(M){let{stage:L,actFor:R,from:O,wristTurn:A}=M;if("reaching"===L)return{from:"down",to:"shelf",gone:li(R,0,.4),pinch:li(R,.3,.5),wristTurn:0,holds:!1};if("inspecting"===L)return{from:"shelf",to:"eyes",gone:li(R,0,lm(M)),pinch:1,wristTurn:.75*Math.sin(2*Math.PI*Math.max(R-lm(M),0)/2.6),holds:!0};let E="swallowing"===L?.5:.55,T="swallowing"===L?"mouth":"shelf";return R<E?{from:O,to:T,gone:li(R,0,E),pinch:1,wristTurn:A*(1-li(R,0,.6*E)),holds:!0}:{from:T,to:"down",gone:li(R,E+.05,E+.45),pinch:1-li(R,E,E+.15),wristTurn:0,holds:!1}}let lv=(M,L,R)=>({yaw:M.yaw+(L.yaw-M.yaw)*R,elevation:M.elevation+(L.elevation-M.elevation)*R}),lg=(M,L,R)=>{let{wristTurn:O}=lp(M);return{...M,stage:L,from:R,actFor:0,wristTurn:O}};function lb(M,L,R){let{pose:O,act:A}=M,{n:E,x:T,y:I}=O,{stage:z,asks:_,actFor:N,shrinkLook:D,yaw:U,elevation:C}=A,P=N+R,H={yaw:U,elevation:C},G={...A,actFor:P},{pill:F}=M,W=sN;if("reaching"===z&&P>=.5)G=lg(A,"inspecting","shelf"),F={room:{n:E,x:T,y:I}},W=[{cue:"pill"}];else if("inspecting"===z&&P>=lm(A)){let M=_?L.answer:"yes";null!==M&&(G=lg({...A,actFor:P},"yes"===M?"swallowing":"returning","eyes"))}else if("swallowing"===z){if(N<.5&&P>=.5&&(W=[{cue:"swallow"}]),P>=1.1)return{...M,pose:{...O,...H},act:{act:"shrinking",actFor:0,shrinkLook:D,...H},cues:[{cue:"shrink"}]}}else if("returning"===z&&(N<.55&&P>=.55&&(F=null,W=[{cue:"pill"}]),P>=1))return{...M,pose:{...O,...H},act:null,pill:F,cues:W};return{...M,pose:{...O,...function(M){let{stage:L,actFor:R,aim:O,yaw:A,elevation:E}=M,T={yaw:A,elevation:E},I={...O,elevation:-.1};if("reaching"===L)return lv(T,O,li(R,0,.4));if("inspecting"===L)return lv(O,I,li(R,.05,lm(M)));if("swallowing"===L){let M=lv(I,T,li(R,0,.5)),L=lf(R,[.3,.55,.75,1.1]);return{...M,elevation:M.elevation+.28*L}}return R<.55?lv(I,O,li(R,0,.8*.55)):lv(O,T,li(R,.55+.05,1))}(G)},act:G,pill:F,cues:W}}let lw=[0,.036,-.04],lx=[.045,.032,-.09],[ly,lk]=[sT(sx,0),sT(sx,4)],lS=tL(au(ly,lk),.5),lM=tR(tS(tM(lk,ly,-1),[0,0,1])),lL={down:{pill:[.05,.03,-.11],raised:!1},shelf:{pill:null,raised:!1},eyes:{pill:[.062,.006,-.014],raised:!0},mouth:{pill:[.012,0,-.026],raised:!0}},lR=(M,L,R)=>au(M,tL(tM(L,M,-1),R));function lO(M,{eye:L,ahead:R,right:O,up:A},E,T){let I=[R,O,A],z=M=>au(L,tL(sL(I,M),T)),{pill:_,raised:N}=lL[M];return{pill:null===_?E:z(_),arm:z(N?lx:lw),palm:N?tL(R,-1):[0,-1,0]}}let lA={hands:3.3,glance:1.5,turn:!0,side:-1,moment:"first-shrink",sayAt:2.2},lE=eb({room:ey(ek({n:eS,x:eM,y:eM}),eb({handsChance:ew(0,1),hands:ew(1.6,2.4),glanceChance:ew(0,1),glance:ew(1.4,2),turn:ex(2),side:ex(2)}))});function lT({hands:M,glance:L,turn:R,side:O},A){let E=.4+M,T=M>0,I=.4+.45*M;return{aside:L>0?.8*O*Math.sin(2*Math.PI*li(A,E,E+L)):0,toHands:T?lf(A,[.4,1,E-.6,E]):0,handsUp:T?lf(A,[.65,1.25,E-.75,E-.15]):0,turned:T&&R?li(A,I,I+.7):0}}let lI=[.07,.034,-.04],lz=eR(aa,el(aj.seed)),l_=aq(lz),lN=(E=eR(lE,el(aj.seed)),({n:M,x:L,y:R})=>{if(1===M)return lA;let{handsChance:O,hands:A,glanceChance:T,glance:I,turn:z,side:_}=E.room.at({n:M,x:L,y:R});return{hands:O<.5?A:0,glance:T<.5?I:0,turn:1===z,side:1===_?1:-1,moment:"shrink",sayAt:.4}}),{foot:lD,top:lU,rungs:lC,wide:lP}=r_,[lH,lG]=s8(rL),lF={land:{height:(M,L)=>rw([M,L]),level:(M,L,R)=>sf([M,L])(R),solids:[rL]},wake:{at:[rA[0],rA[2]],seaward:Math.atan2(rA[2]-lG,rA[0]-lH)+.3},cube:rL,ladder:{foot:lD,top:lU,rungs:lC.map(([,M])=>M),solid:{min:[rL.max[0],lD[1],lU[2]-lP/2],max:[lD[0],lU[1],lU[2]+lP/2]}},arrival:[rR.min[0]-.9,rR.min[1]+1.6,rR.min[2]+(rR.max[2]-rR.min[2])*.64]},lW=.32/.8,lB=Math.hypot(.16,Math.sqrt(1.6*e2)),l$=(.16+lB)/.8,lq=.04-.03,lj=(M,L)=>Math.min(L+lq,Math.max(L-lq,M)),lK=M=>({n:M,x:0n,y:0n,u:.5,v:.5,eyeAbove:.32,scale:1,yaw:0,elevation:0}),lY=1-1e-9,lV={east:{x:1n,y:0n,sill:{u:1-1e-9}},west:{x:-1n,y:0n,sill:{u:0}},south:{x:0n,y:1n,sill:{v:1-1e-9}},north:{x:0n,y:-1n,sill:{v:0}}}[tF.wall],lX=({x:M,y:L,z:R,yaw:O,elevation:A})=>{let[E,,T]=rM([M,L,R]),I=tC(O);return{n:1,x:0n,y:0n,u:Math.min(lY,e5(E)),v:Math.min(lY,e5(T)),eyeAbove:.32,scale:1,yaw:a0(I),elevation:A}};function lZ(M,{cube:L}){let{x:R,y:O,z:A}=M;return[R,O,A].every((M,R)=>M>(L.min[R]??1/0)&&M<(L.max[R]??-1/0))?lX(M):le(M)}var lQ=M.i(241860);let lJ={runsUnheld:!1,pressedAt:null},l0="cube.runsUnheld",l2=new Map([["run",!0],["walk",!1]]),l1={KeyW:{axis:"walk",sign:1},KeyS:{axis:"walk",sign:-1},KeyD:{axis:"strafe",sign:1},KeyA:{axis:"strafe",sign:-1},ArrowRight:{axis:"turnKeys",sign:1},ArrowLeft:{axis:"turnKeys",sign:-1},ArrowUp:{axis:"tiltKeys",sign:1},ArrowDown:{axis:"tiltKeys",sign:-1}},l3={y:"yes",n:"no"},l5={KeyY:"yes",KeyN:"no"},l4=/^KeyG KeyO KeyT KeyO (?:Digit|Numpad)(\d) (?:Digit|Numpad)(\d)$/u,l6=new Set(["ShiftLeft","ShiftRight"]),l8="cheated_to",l7="awake";async function l9(M,L){let R=M.get(l8);if(null!==R){let M=Number(R),L=aj.holes.length+1;if(!Number.isInteger(M)||M<1||M>L)throw RangeError(`?${l8}= takes a floor from 1 to ${L}`);return{pose:lK(M),hatch:null,resumable:!1,ashore:null}}if(""===L||L===l7)return{pose:lK(1),hatch:null,resumable:!0,ashore:L===l7?"awake":"asleep"};let O=await eZ(aj,L);if(null===O)return null;let{at:A,hatch:E}=O;return{pose:{...A,eyeAbove:.32,scale:1},hatch:E,resumable:!0,ashore:null}}let oe=M=>{globalThis.history.replaceState(null,"",`#${M}`)};var ot=M.i(960860);let oa=["scene","mirrors","resolve","glow","lens"],or=()=>({scene:0,mirrors:0,resolve:0,glow:0,lens:0});function os({passTimes:M,timing:L}){let[R,O]=(0,j.useState)(!1),[A,E]=(0,j.useState)(null);return((0,j.useEffect)(()=>{let M=({code:M,repeat:L,ctrlKey:R,metaKey:A})=>{"KeyF"!==M||L||R||A||(O(M=>!M),E(null))};return globalThis.addEventListener("keydown",M),()=>{globalThis.removeEventListener("keydown",M)}},[]),(0,j.useEffect)(()=>{if(!R)return;let O=0,A=performance.now(),T=0;L(!0);let I=L=>{T+=1;let R=L-A;R>=500&&(E({fps:1e3*T/R,interval:R/T,gpu:M()}),A=L,T=0),O=requestAnimationFrame(I)};return O=requestAnimationFrame(I),()=>{cancelAnimationFrame(O),L(!1)}},[R,M,L]),R)?(0,q.jsx)("p",{className:ot.default.frameRate,children:null===A?"…":(({fps:M,interval:L,gpu:R})=>{let O=`${M.toFixed(0)} fps \xb7 ${L.toFixed(1)} ms`;return null===R?O:`${O}
GPU ms: ${oa.map(M=>`${M} ${R[M].toFixed(2)}`).join(" · ")}`})(A)}):null}var ol=M.i(843199),oo=M.i(880346),on=M.i(846800),oi=M.i(694086),of=M.i(527835);let oc=M=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:M,maximumFractionDigits:M}),ou=oc(0),oh=oc(2);function od(M,L,R){let O=R-1;return Math.max(Math.round((M/L-O)/R),0)*R+O}function om(M){if(!(M>=1)||!Number.isFinite(M))throw RangeError(`Not a price: ${M}`);let L=od(M,1,100);if(L>=100)return ou.format(L);let R=M>=10?1e3:100;return oh.format(.01*od(M,.01,R))}function op(M){if(!(M>0)||!Number.isFinite(M))throw RangeError(`Not a length: ${M}`);return M>=.001?String(Number(M.toPrecision(3))):function(M){let L=Math.floor(Math.log10(M)),R=Number((M/10**L).toPrecision(3)),[O,A]=R>=10?[R/10,L+1]:[R,L];return`${String(O)} \xd7 10${A<0?"⁻":""}${String(Math.abs(A)).replaceAll(/\d/g,M=>"⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(M)]??M)}`}(M)}function ov({offer:M,onBuy:L,onClose:R,copy:O}){let A=M?.room.n??null,E=M?.sign.kind==="yours",T=null===A?0:5/2**(A-1);return(0,q.jsx)(oo.f,{forceColorScheme:"dark",children:(0,q.jsx)(on.f,{opened:null!==A,onClose:R,title:(0,K.f)(E?O.titleYours:O.title,{floor:A}),closeButtonProps:{"aria-label":O.close},centered:!0,children:null!==A&&(0,q.jsxs)(oi.Stack,{gap:"sm",children:[(0,q.jsx)(of.Text,{size:"xl",fw:700,children:(0,K.f)(E?O.paid:O.price,{price:om(aK(A))})}),(0,q.jsx)(of.Text,{c:"dimmed",children:(0,K.f)(O.size,{side:op(T),height:op(.5*T)})}),!E&&(0,q.jsx)(ol.f,{onClick:L,children:O.buy}),(0,q.jsx)(of.Text,{size:"sm",c:"dimmed",children:O.demo})]})})})}var og=M.i(708070);function ob({copy:M,onShown:L}){let[R,O]=(0,j.useState)(!1);return(0,j.useEffect)(()=>{let M=({pointerType:M,buttons:L})=>{"touch"===M&&0!==L&&O(!0)};return globalThis.addEventListener("pointermove",M),()=>{globalThis.removeEventListener("pointermove",M)}},[]),(0,q.jsxs)("div",{className:(0,og.f)(ot.default.controls,R&&ot.default.controlsGone),"aria-hidden":!0,onAnimationEnd:L,children:[(0,q.jsxs)("div",{className:ot.default.controlsHalf,children:[(0,q.jsx)("span",{className:ot.default.controlsStick}),M.walk]}),(0,q.jsxs)("div",{className:ot.default.controlsHalf,children:[(0,q.jsx)("span",{className:ot.default.controlsLook}),M.look]}),(0,q.jsx)("p",{className:ot.default.controlsUse,children:M.use})]})}let ow=null,ox=new Set,oy=M=>{if(ow!==M)for(let L of(ow=M,ox))L()},ok=({pointerType:M})=>{"touch"===M?oy(!0):"mouse"===M&&oy(!1)},oS=()=>{oy(!1)},oM=M=>(0===ox.size&&(globalThis.addEventListener("pointerdown",ok,{capture:!0}),globalThis.addEventListener("keydown",oS,{capture:!0})),ox.add(M),()=>{ox.delete(M),ox.size>0||(globalThis.removeEventListener("pointerdown",ok,{capture:!0}),globalThis.removeEventListener("keydown",oS,{capture:!0}))}),oL=()=>ow??matchMedia("(any-pointer: coarse)").matches,oR=M=>({hour:Math.floor(M/36e5),seconds:M%36e5/1e3}),oO=50*Math.PI/180,oA=(M,L)=>{let R=[1,M];for(let O=2;O<L;O++)R.push(2*M*(R[O-1]??0)-(R[O-2]??0));return R.slice(0,L)},oE=(M,L)=>{let R=L.length,O=(L,R)=>M[L]?.[R]??0;for(let A=0;A<R;A++){let E=A;for(let M=A+1;M<R;M++)Math.abs(O(M,A))>Math.abs(O(E,A))&&(E=M);[M[A],M[E]]=[M[E]??[],M[A]??[]],[L[A],L[E]]=[L[E]??0,L[A]??0];for(let E=A+1;E<R;E++){let T=O(E,A)/O(A,A),I=M[E]??[];for(let M=A;M<R;M++)I[M]=O(E,M)-T*O(A,M);L[E]=(L[E]??0)-T*(L[A]??0)}}let A=Array.from({length:R},()=>0);for(let M=R-1;M>=0;M--){let E=L[M]??0;for(let L=M+1;L<R;L++)E-=O(M,L)*(A[L]??0);A[M]=E/O(M,M)}return A};function oT(M){let L=[Math.hypot(M[0],M[2]),M[1],0],R=[];for(let M=0;M<40;M++){let O=2*M/39-1,A=((O+1)/2)**3,E=Math.sqrt(1-A*A);for(let M=0;M<12;M++){let T=Math.PI*M/11;R.push({dir:[E*Math.cos(T),A,E*Math.sin(T)],toSun:L,axes:[O,Math.cos(T)]})}}return R}let oI=(M,L,R)=>[1,M,M*M,L,L*M,L*M*M,L*L,L*L*M,L*L*M*M,Math.max(R,0)**8],oz=(T=24,I=oT(t2).map(({dir:M,toSun:L,axes:R})=>({basis:((M,L)=>{let R=oA(M,8);return oA(L,3).flatMap(M=>R.map(L=>L*M))})(...R),parts:tK(M,L)})),z=(M,L)=>oE(Array.from({length:T},(M,L)=>Array.from({length:T},(M,R)=>I.reduce((M,{basis:O})=>M+(O[L]??0)*(O[R]??0),0))),Array.from({length:T},(R,O)=>I.reduce((R,{basis:A,parts:E})=>R+(A[O]??0)*Math.log(E[M][L]),0))),{rayleigh:(_=M=>{let[L,R,O]=[z(M,0),z(M,1),z(M,2)];return L.map((M,L)=>[M,R[L]??0,O[L]??0])})("rayleigh"),mie:_("mie"),many:_("many")}),o_=[...oz.rayleigh,...oz.mie,...oz.many],oN=function(M){let L=oT(M).map(({dir:M,toSun:L,axes:R})=>({basis:oI(...R,tk(M,L)),log:tY(M,L).map(M=>Math.log(M))})),R=oI(0,0,0).length,O=M=>oE(Array.from({length:R},(M,O)=>Array.from({length:R},(M,R)=>L.reduce((M,{basis:L})=>M+(L[O]??0)*(L[R]??0),0))),Array.from({length:R},(R,O)=>L.reduce((L,{basis:R,log:A})=>L+(R[O]??0)*(A[M]??0),0))),[A,E,T]=[O(0),O(1),O(2)];return A.map((M,L)=>[M,E[L]??0,T[L]??0])}(t2),oD=Math.hypot(t2[0],t2[2]),oU=[1,4,8],oC=(()=>{let[M,L,R]=oU,O=oU.map(M=>tp(e9.ground+M,t2[1]).map(M=>Math.log(M))),A=(M,L)=>O[M]?.[L]??0,E=R=>(A(1,R)-A(0,R))/(L-M),T=O=>((A(2,O)-A(1,O))/(R-L)-E(O))/(R-M);return[tl(R=>A(0,R)-E(R)*M+T(R)*M*L),tl(R=>E(R)-T(R)*(M+L)),tl(T)]})(),oP=tp(tj,t2[1]),oH=(N=tp(tj,t2[1]+.004),D=tp(tj,t2[1]-.004),tl(M=>Math.log(N[M]/D[M])/.008)),oG=ti(tj-e9.ground).map(M=>M/1e3),oF=tO("sky/clear-sky-fit",`
const SKY_FIT = array<vec3f, ${String(o_.length)}>(
${o_.map(M=>`  ${tT(M)},`).join("\n")}
);
/// The sun's irradiance above the air, in the scene's light.
const SUN_IRRADIANCE = ${tE(t3*Math.PI)};
const SUN_WHITE = ${tE(t3)};
const SUN_BEARING = ${tT([t2[0]/oD,t2[2]/oD])};
const MIE_G = ${tE(e9.mie.g)};

/// One part of the fitted sky at a height and a turn, each −1 to 1: a
/// Chebyshev series in the height, by Clenshaw's recurrence, whose
/// coefficients are a series in the turn.
fn skyPart(part: i32, lift: f32, turn: f32) -> vec3f {
  let first = part * ${String(24)};
  let twice = 2.0 * turn * turn - 1.0;
  var ahead = vec3f(0.0);
  var beyond = vec3f(0.0);
  for (var n = ${String(7)}; n >= 0; n--) {
    let coefficient = SKY_FIT[first + n]
      + turn * SKY_FIT[first + ${String(8)} + n]
      + twice * SKY_FIT[first + ${String(16)} + n];
    if (n == 0) { return exp(coefficient + lift * ahead - beyond); }
    let now = coefficient + 2.0 * lift * ahead - beyond;
    beyond = ahead;
    ahead = now;
  }
  return vec3f(0.0);
}

const SKY_GLANCE = array<vec3f, ${String(oN.length)}>(
${oN.map(M=>`  ${tT(M)},`).join("\n")}
);
const GLANCE_SUNWARD = ${tE(8)};

/// The logarithm of the sun's transmittance \`km\` up: its constant, linear
/// and square coefficients.
const SUN_LOG_FLAT = ${tT(oC[0])};
const SUN_LOG_SLOPE = ${tT(oC[1])};
const SUN_LOG_CURVE = ${tT(oC[2])};

const EYE_SUN = ${tT(oP)};
const EYE_SUN_SLOPE = ${tT(oH)};
const AIR_PER_METRE = ${tT(oG)};
`),oW=tO("cube/widgets/outdoors/stage/lib/clear-sky",`
const PI = 3.141592653589793;

fn rayleighPhase(c: f32) -> f32 {
  return 3.0 / (16.0 * PI) * (1.0 + c * c);
}

/// Cornette and Shanks's phase function for asymmetry \`g\` at cosine \`c\`.
fn miePhase(c: f32, g: f32) -> f32 {
  return
    3.0
      / (8.0 * PI)
      * (1.0 - g * g)
      * (1.0 + c * c)
      / ((2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * c, 1.5));
}

/// The cloudless sky's radiance along unit \`dir\` in the scene's light, the
/// model's own within a few percent; under the horizon it is the horizon's.
fn clearSky(dir: vec3f) -> vec3f {
  let lifted = vec3f(dir.x, max(dir.y, 0.0), dir.z);
  let up = lifted / max(length(lifted), 1e-6);
  let lift = 2.0 * pow(up.y, 1.0 / 3.0) - 1.0;
  let flat = length(up.xz);
  let turn = select(1.0, dot(up.xz, SUN_BEARING) / flat, flat > 1e-5);
  let between = dot(up, SUN_DIR);
  return
    SUN_IRRADIANCE * (skyPart(0, lift, turn) * rayleighPhase(between)
      + skyPart(1, lift, turn) * miePhase(between, MIE_G)
      + skyPart(2, lift, turn));
}

/// The same sky smoothed, in a few dozen operations: what a rough mirror or
/// a matte face gathers.
fn skyGlance(dir: vec3f) -> vec3f {
  let lift = 2.0 * pow(max(dir.y, 0.0), 1.0 / 3.0) - 1.0;
  let flat = length(dir.xz);
  let turn = select(1.0, dot(dir.xz, SUN_BEARING) / flat, flat > 1e-5);
  let sunward = pow(max(dot(dir, SUN_DIR), 0.0), GLANCE_SUNWARD);
  return
    SUN_IRRADIANCE * exp(
      SKY_GLANCE[0]
        + lift * (SKY_GLANCE[1] + lift * SKY_GLANCE[2])
        + turn * (SKY_GLANCE[3]
          + lift * (SKY_GLANCE[4] + lift * SKY_GLANCE[5])
          + turn * (SKY_GLANCE[6] + lift * (SKY_GLANCE[7] + lift * SKY_GLANCE[8])))
        + sunward * SKY_GLANCE[9],
    );
}

/// What a white face square to the sun shows \`km\` kilometres over the sea.
fn sunThrough(km: f32) -> vec3f {
  return
    SUN_WHITE * exp(SUN_LOG_FLAT + km * (SUN_LOG_SLOPE + km * SUN_LOG_CURVE));
}

/// The share of the sun's own light that reaches the eye along a ray near
/// the sun.
fn sunSeen(dir: vec3f) -> vec3f {
  return EYE_SUN * exp(EYE_SUN_SLOPE * (dir.y - SUN_DIR.y));
}

/// The share of light that crosses \`metres\` of the air at the sea's level.
fn airThrough(metres: f32) -> vec3f {
  return exp(-AIR_PER_METRE * metres);
}
`,t7,oF),oB=tO("cube/widgets/outdoors/stage/lib/aerial",`
/// \`colour\`, the light of a surface \`metres\` off along unit \`viewDir\` from the
/// eye, as it arrives through the air between. What the air takes it gives
/// back as the sky's own light at the horizon on that bearing.
fn aerial(colour: vec3f, viewDir: vec3f, metres: f32) -> vec3f {
  let through = airThrough(metres);
  let horizon = clearSky(vec3f(viewDir.x, 0.0, viewDir.z));
  return colour * through + horizon * (1.0 - through);
}
`,oW),o$=.7,oq=2,oj=5,oK=10,oY=35,oV=Math.hypot(t2[0],t2[2]),oX=[-t2[0]/oV,-t2[2]/oV],oZ=[-oV,t2[1],0],oQ=5.4/Math.tan(Math.asin(t2[1])),oJ={open:{behind:-14,ahead:Math.ceil(oQ)+6},shut:{behind:-45,ahead:Math.ceil(oQ)+40}},o0=el("0"),{salt:o2}=eR(eb({salt:ew(0,0x80000000)}),M=>o0(`island/sky/clouds/${M}`)),o1=tO("sky/cloud-noise-numbers",`
const CLOUD_SALT = ${String(Math.floor(o2))}u;
const CLOUD_BASE = ${tE(1.1)};
const CLOUD_CEILING = ${tE(5.4)};
const CLOUD_REACH = ${tE(140)};
const CLOUD_CELL = ${tE(7)};
const CLOUD_BOUND = ${tE(1.7)};
const TILE_CELLS = ${String(5)};
const WIND_AXIS = ${tT(oX)};
const WIND_SIDE = ${tT([-oX[1],oX[0]])};
/// Towards the sun, in the field's axes.
const SUN_IN_FIELD = ${tT(oZ)};
const CLOUD_DRIFT = ${tE(oY/3600)};
const CLOUD_CHANCE = ${tE(.6)};
const CLOUD_RADIUS_LEAST = ${tE(o$)};
const CLOUD_RADIUS_MOST = ${tE(oq)};
const LANE_SHUT_BEHIND = ${tE(oJ.shut.behind)};
const LANE_OPEN_BEHIND = ${tE(oJ.open.behind)};
const LANE_OPEN_AHEAD = ${tE(oJ.open.ahead)};
const LANE_SHUT_AHEAD = ${tE(oJ.shut.ahead)};
const LANE_CLEAR = ${tE(oj)};
const LANE_SPREAD = ${tE(oK-oj)};
`),o3=[{name:"viewProjection",type:"mat4x4f",floats:16,doc:"World to clip."},{name:"inverse",type:"mat4x4f",floats:16,doc:"Clip to world."},{name:"eye",type:"vec4f",floats:4,doc:"The eye in the world; w is 1."},{name:"sun",type:"vec4f",floats:4,doc:"Towards the sun; w is 0."},{name:"clock",type:"vec4f",floats:4,doc:"Seconds into the hour, which hour, the screen's width and height."},{name:"state",type:"vec4f",floats:4,doc:"x is 1 while the ladder stands at the doorway, 0 once it is gone."}],o5=o3.reduce((M,{floats:L})=>M+L,0),o4=tO("outside/frame",`
struct OutdoorFrame {
${o3.map(({name:M,type:L,doc:R})=>`  /// ${R}
  ${M}: ${L},`).join("\n")}
};

@group(0) @binding(0) var<uniform> frame: OutdoorFrame;
`),o6=tO("cube/widgets/outdoors/stage/lib/cloud-noise",`
/// The earth's radius, km.
const EARTH_RADIUS = 6360.0;

struct Cloud {
  /// Its middle on the sea, in the field: along the wind, across it.
  centre: vec2f,
  /// Its footprint's radius, 0 where the cell holds no cloud, and its height.
  radius: f32,
  tall: f32,
  /// What its own billows are salted with.
  seed: u32,
  /// Kilometres from the eye to it, 0 until a ray's walk of the field says.
  off: f32,
}

/// Kilometres the field has drifted down the wind this hour.
fn cloudDrift() -> f32 {
  return frame.clock.x * CLOUD_DRIFT;
}

/// The height over the sea of a point \`at\` km from the eye: the sea falls
/// away under a far cloud, which is what sets cloud banks on the horizon.
fn heightOf(at: vec3f) -> f32 {
  return at.y + dot(at.xz, at.xz) / (2.0 * EARTH_RADIUS);
}

/// A point \`at\` km from the island as the field holds it: x along the wind
/// from where it started the hour, y km over the sea, z across the wind.
fn inField(at: vec3f) -> vec3f {
  return
    vec3f(
      dot(at.xz, WIND_AXIS) - cloudDrift(),
      heightOf(at),
      dot(at.xz, WIND_SIDE),
    );
}

fn wrapped(cell: i32, period: i32) -> i32 {
  return ((cell % period) + period) % period;
}

/// Smooth noise in [0, 1) over a unit lattice whose x repeats every \`period\`
/// cells.
fn cloudNoise2(p: vec2f, period: i32, salt: u32) -> f32 {
  let cell = vec2i(floor(p));
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  let near = wrapped(cell.x, period);
  let far = wrapped(cell.x + 1, period);
  return
    mix(
      mix(
        unitOf(pointHash(vec3i(near, cell.y, 0), salt)),
        unitOf(pointHash(vec3i(far, cell.y, 0), salt)),
        u.x,
      ),
      mix(
        unitOf(pointHash(vec3i(near, cell.y + 1, 0), salt)),
        unitOf(pointHash(vec3i(far, cell.y + 1, 0), salt)),
        u.x,
      ),
      u.y,
    );
}

/// Smooth noise in [0, 1) over a unit lattice whose x repeats every \`period\`
/// cells.
fn cloudNoise(p: vec3f, period: i32, salt: u32) -> f32 {
  let cell = vec3i(floor(p));
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  let near = wrapped(cell.x, period);
  let far = wrapped(cell.x + 1, period);
  let under =
    mix(
      mix(
        unitOf(pointHash(vec3i(near, cell.y, cell.z), salt)),
        unitOf(pointHash(vec3i(far, cell.y, cell.z), salt)),
        u.x,
      ),
      mix(
        unitOf(pointHash(vec3i(near, cell.y, cell.z + 1), salt)),
        unitOf(pointHash(vec3i(far, cell.y, cell.z + 1), salt)),
        u.x,
      ),
      u.z,
    );
  let over =
    mix(
      mix(
        unitOf(pointHash(vec3i(near, cell.y + 1, cell.z), salt)),
        unitOf(pointHash(vec3i(far, cell.y + 1, cell.z), salt)),
        u.x,
      ),
      mix(
        unitOf(pointHash(vec3i(near, cell.y + 1, cell.z + 1), salt)),
        unitOf(pointHash(vec3i(far, cell.y + 1, cell.z + 1), salt)),
        u.x,
      ),
      u.z,
    );
  return mix(under, over, u.y);
}

/// The cloud a cell of the field holds, its \`radius\` 0 where it holds none.
fn cloudIn(cell: vec2i) -> Cloud {
  let word = cellHash(vec2i(wrapped(cell.x, TILE_CELLS), cell.y), CLOUD_SALT);
  let size = unitOf(hashOf(word, 1u));
  let ragged = unitOf(hashOf(word, 2u));
  let broad = mix(CLOUD_RADIUS_LEAST, CLOUD_RADIUS_MOST, size * size);
  let room = 0.5 * CLOUD_CELL - broad * CLOUD_BOUND;
  let nudge =
    vec2f(unitOf(hashOf(word, 3u)), unitOf(hashOf(word, 4u))) * 2.0 - 1.0;
  let centre = (vec2f(cell) + 0.5) * CLOUD_CELL + nudge * room;

  // The lane is the island's, not the field's: it stands still while the
  // clouds go down it, open where the sun's beam crosses the slab and for a
  // way either side of the island, closing far off.
  let toSun = -(centre.x + cloudDrift());
  let open =
    smoothstep(LANE_SHUT_BEHIND, LANE_OPEN_BEHIND, toSun) * (1.0 - smoothstep(
      LANE_OPEN_AHEAD,
      LANE_SHUT_AHEAD,
      toSun,
    ));
  let clear = LANE_CLEAR * open;
  let edge = clear + LANE_SPREAD * (0.35 + 0.65 * ragged);
  let laned =
    mix(
      1.0,
      smoothstep(clear, edge, abs(centre.y)),
      smoothstep(0.0, 0.2, open),
    );
  let away = length(vec2f(toSun, centre.y));
  let stands = laned * (1.0 - smoothstep(0.8 * CLOUD_REACH, CLOUD_REACH, away));
  if (unitOf(word) > CLOUD_CHANCE || stands < 0.3) {
    return Cloud(centre, 0.0, 0.0, 0u, 0.0);
  }

  let radius = broad * stands;
  // The broad ones are the ones that tower.
  let tower =
    mix(0.7, 1.25, unitOf(hashOf(word, 5u))) + 0.8
      * smoothstep(0.6, 1.0, size)
      * ragged;
  let tall = min(radius * tower, (CLOUD_CEILING - CLOUD_BASE) / CLOUD_BOUND);
  return Cloud(centre, radius, tall, hashOf(word, 7u), 0.0);
}
`,o4,a1,o1),{rayleigh:o8,mie:o7}=e9,o9=tO("sky/clouds-numbers",`
const CLOUD_EXTINCTION = ${tE(40)};
const CLOUD_EDGE = ${tE(.18)};
const SKIN = ${tE(.7*Math.sqrt(.0045))};
const BILLOW_BROAD = ${tE(.95)};
const BILLOW_KNOBS = ${tE(.3)};
const BILLOW_FINE = ${tE(.14)};
const BILLOW_REACH = ${tE((1.25+.14)/2)};
const BILLOW_BROAD_SCALE = ${tE(1.4)};
const BILLOW_KNOB_SCALE = ${tE(4.3)};
const BILLOW_FINE_SCALE = ${tE(2.3*4.3)};
const GRAIN_PER_KM = ${tE(350/oY)};
const GRAIN_PERIOD = ${String(350)};
const CIRRUS_HEIGHT = ${tE(9.5)};
const CIRRUS_REACH = ${tE(260)};
const CLOUD_TILE_KM = ${tE(oY)};
const RAYLEIGH_SCATTER = ${tT(o8.scatter)};
const RAYLEIGH_HEIGHT = ${tE(o8.height)};
const MIE_EXTINCTION = ${tT(o7.scatter.map((M,L)=>M+(o7.absorb[L]??0)))};
const MIE_HEIGHT = ${tE(o7.height)};
`),ne=tO("cube/widgets/outdoors/stage/lib/cloud-body",`
/// How far a cloud's own noise pushes its footprint in and out, in radii\xb2.
const BILLOW_HEAP = 2.0;

/// The angle one texel of the quarter-size sky spans, in radians, about.
const SKY_TEXEL = 0.005;

/// How far the billows stood out of the body at the last point
/// \`cloudSolid\` read them.
var<private> relief: f32;

/// A billow lattice never comes round within one cloud.
const BILLOW_PERIOD = 65536;

/// A cloud's body before its billows: over 0 inside, falling about a unit a
/// radius outward. Its footprint is its own noise cut off round its middle,
/// so no two are one shape, and it stands tallest where the footprint is
/// deepest: a heap of domes on one flat base.
fn cloudBody(cloud: Cloud, field: vec3f) -> f32 {
  let up = (field.y - CLOUD_BASE) / cloud.tall;
  // Its crown leans down the wind.
  let within =
    (field.xz - cloud.centre) / cloud.radius - vec2f(0.15 * max(up, 0.0), 0.0);
  let heap =
    0.6 * cloudNoise2(
      within * 1.1 + 40.0,
      BILLOW_PERIOD,
      cloud.seed + 2u,
    ) + 0.4 * cloudNoise2(within * 2.7 + 40.0, BILLOW_PERIOD, cloud.seed + 3u);
  let foot = 0.75 - dot(within, within) + BILLOW_HEAP * (heap - 0.5);
  return foot - up * up - 3.0 * max(-up, 0.0);
}

/// A cloud's body with its billows at a point of the field, in the same
/// units: over 0 inside. Outside their reach it is the body's own, less the
/// reach, which is never under the truth. \`fine\` frays the surface.
fn cloudSolid(cloud: Cloud, field: vec3f, frayed: bool) -> f32 {
  let body = cloudBody(cloud, field);
  if (body < -BILLOW_REACH) {
    return body + BILLOW_REACH;
  }
  let up = clamp((field.y - CLOUD_BASE) / cloud.tall, 0.0, 1.0);
  // Billows are the cloud's own: as many across a small one as a broad one.
  let within =
    vec3f(
      field.x - cloud.centre.x,
      field.y - CLOUD_BASE,
      field.z - cloud.centre.y,
    ) / cloud.radius;
  let broad =
    cloudNoise(within * BILLOW_BROAD_SCALE, BILLOW_PERIOD, cloud.seed) - 0.5;
  // Folded noise: round knobs with creases between, a cauliflower's.
  let knobs =
    abs(
      2.0 * cloudNoise(
        within * BILLOW_KNOB_SCALE,
        BILLOW_PERIOD,
        cloud.seed + 1u,
      ) - 1.0,
    ) - 0.5;
  // No billow stands clear of the body it grew from.
  let held = smoothstep(-BILLOW_REACH, -0.12, body);
  let fine =
    abs(
      2.0 * cloudNoise(
        within * BILLOW_FINE_SCALE,
        BILLOW_PERIOD,
        cloud.seed + 4u,
      ) - 1.0,
    ) - 0.5;
  // The finest billows are only grain where they are narrower than a couple
  // of the sky's texels.
  let texel = cloud.off * SKY_TEXEL / cloud.radius;
  let fined = 1.0 - smoothstep(0.6, 1.4, texel * BILLOW_FINE_SCALE);
  relief =
    held * (BILLOW_BROAD * broad * (0.4 + 0.6 * up)
      + BILLOW_KNOBS * knobs
      + BILLOW_FINE * fine * fined);
  var solid = body + relief;
  if (frayed && solid > -0.12 && fined > 0.0) {
    let grain =
      cloudNoise(field * GRAIN_PER_KM, GRAIN_PERIOD, CLOUD_SALT + 3u) - 0.5;
    solid += 0.03 * grain * fined / cloud.radius;
  }
  return solid;
}

/// The water at a point \`solid\` deep in a cloud, 0 to 1: all of it a little
/// way in, none under the flat base.
fn cloudWater(cloud: Cloud, field: vec3f, solid: f32) -> f32 {
  return
    clamp(solid * cloud.radius / CLOUD_EDGE, 0.0, 1.0) * smoothstep(
      0.0,
      0.05,
      field.y - CLOUD_BASE,
    );
}

/// The cloud between a point and the sun: x its optical depth — the billows
/// just sunward of the point, then the body beyond — and y how squarely the
/// surface at the point faces the sun, −1 to 1, which a body that is near
/// enough a distance gives as its fall toward the sun.
fn towardSun(cloud: Cloud, field: vec3f, solid: f32) -> vec2f {
  let near = field + SUN_IN_FIELD * 0.09;
  let sunward = cloudSolid(cloud, near, false);
  let depth =
    cloudWater(cloud, near, sunward) * 0.18
      + clamp(
        cloudBody(cloud, field + SUN_IN_FIELD * 0.4) * 2.5,
        0.0,
        1.0,
      ) * 0.45
      + clamp(
        cloudBody(cloud, field + SUN_IN_FIELD * 1.0) * 2.5,
        0.0,
        1.0,
      ) * 0.9;
  return
    vec2f(depth * CLOUD_EXTINCTION, (solid - sunward) * cloud.radius / 0.09);
}
`,o6,o1,o9),nt=[{g:.99,share:.02},{g:.95,share:.06}],na=nt[1],nr=oP.map((M,L)=>{let R;return t3*Math.PI*na.share*M*(e9.mie.scatter[L]??0)*e9.mie.height*(1/(Math.sin(R=Math.asin(t2[1]))+.50572*(180*R/Math.PI+6.07995)**-1.6364))}),ns=tO("sky/sun-glow-numbers",`
const GLARE_G = ${tE(nt[0].g)};
const GLARE_SHARE = ${tE(nt[0].share)};
const AUREOLE_G = ${tE(na.g)};
const AUREOLE_SHARE = ${tE(na.share)};
const KASTEN_A = ${tE(.50572)};
const KASTEN_B = ${tE(6.07995)};
const KASTEN_C = ${tE(-1.6364)};
const HAZE_OVERHEAD = ${tT(e9.mie.scatter.map(M=>M*e9.mie.height))};
const SUN_HALO = ${tT(nr)};
`),nl=tO("cube/widgets/outdoors/stage/lib/sun-glow",`
/// The sun's angular radius, radians.
const SUN_RADIUS = 0.2666 * PI / 180.0;

/// What the disc shows at its middle, in the scene's units. The sun itself is
/// some forty-six thousand times a face it lights; a half float and the bloom
/// both want less, and past this the eye could not tell.
const DISC_LIGHT = 600.0;

fn henyey(c: f32, g: f32) -> f32 {
  return (1.0 - g * g) / (4.0 * PI * pow(1.0 + g * g - 2.0 * g * c, 1.5));
}

/// The haze's optical depth for scattering from the eye out along a ray
/// \`lift\` radians over the horizon, by Kasten and Young's air mass.
fn hazeDepth(lift: f32) -> vec3f {
  let degrees = max(lift, 0.0) * 180.0 / PI;
  let mass =
    1.0 / (sin(max(lift, 0.0)) + KASTEN_A * pow(degrees + KASTEN_B, KASTEN_C));
  return HAZE_OVERHEAD * mass;
}

/// The haze's forward lobes, scattered once. Near the sun the way to a
/// droplet and on to the eye is one straight line, so the light is the sun's
/// own through the whole air along \`dir\`.
fn aureole(dir: vec3f) -> vec3f {
  let c = dot(dir, SUN_DIR);
  let lobes =
    GLARE_SHARE * henyey(c, GLARE_G) + AUREOLE_SHARE * henyey(c, AUREOLE_G);
  let lift = asin(clamp(dir.y, -1.0, 1.0));
  let glow = SUN_IRRADIANCE * lobes * sunSeen(dir) * hazeDepth(lift);
  // Nothing round the disc outshines the disc.
  return glow / (1.0 + max(glow.r, max(glow.g, glow.b)) / (DISC_LIGHT * 0.5));
}

/// The aureole's broad lobe alone at the price of one power, for a mirror too
/// rough to show the rest.
fn sunHalo(dir: vec3f) -> vec3f {
  return SUN_HALO * henyey(dot(dir, SUN_DIR), AUREOLE_G);
}

/// The disc, \`edge\` a pixel's width in radians: darker and redder to the
/// limb, redder again toward the horizon, where its light has more air to
/// cross.
fn sunDisc(dir: vec3f, edge: f32) -> vec3f {
  let away = acos(clamp(dot(dir, SUN_DIR), -1.0, 1.0));
  let inside = 1.0 - smoothstep(SUN_RADIUS - edge, SUN_RADIUS + edge, away);
  if (inside <= 0.0) {
    return vec3f(0.0);
  }
  let across = clamp(away / SUN_RADIUS, 0.0, 1.0);
  let limb =
    pow(vec3f(sqrt(1.0 - across * across * 0.98)), vec3f(0.40, 0.50, 0.65));
  let reaching = sunSeen(dir);
  return DISC_LIGHT * limb * reaching / max(sunSeen(SUN_DIR).r, 1e-6) * inside;
}
`,t7,oW,oF,ns),no=tO("cube/widgets/outdoors/stage/lib/clouds-wgsl",`
/// The share of light that crosses the clear air from the eye to a point
/// \`away\` km off and \`h\` km up: the air thins as the way climbs.
fn airBetween(away: f32, h: f32) -> vec3f {
  let up = max(h, 0.01);
  let thin =
    RAYLEIGH_SCATTER
      * RAYLEIGH_HEIGHT
      * (1.0 - exp(-up / RAYLEIGH_HEIGHT))
      / up;
  let haze = MIE_EXTINCTION * MIE_HEIGHT * (1.0 - exp(-up / MIE_HEIGHT)) / up;
  return exp(-(thin + haze) * away);
}

/// How far along a ray climbing at sine \`y\` the sea has fallen \`h\` km below it.
fn reachOf(y: f32, h: f32) -> f32 {
  let bend = (1.0 - y * y) / (2.0 * EARTH_RADIUS);
  return 2.0 * h / (y + sqrt(y * y + 4.0 * bend * h));
}

/// Henyey and Greenstein's phase function for asymmetry \`g\` at cosine \`c\`,
/// against an even scatterer's.
fn henyeyCloud(c: f32, g: f32) -> f32 {
  return (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * c, 1.5);
}

/// How much brighter than an even scatterer a cloud's first scattering is
/// along a ray at cosine \`c\` to the sun: the silver lining and the
/// brightening of a cloud seen with the sun behind the eye.
fn cloudPhase(c: f32) -> f32 {
  return 0.65 * henyeyCloud(c, 0.6) + 0.35 * henyeyCloud(c, -0.3);
}

/// What a cloud sends toward the eye from a point \`h\` km up, per unit of its
/// own extinction: the sun as \`towardSun\` found it, and the sky's fill.
/// \`phase\` is \`cloudPhase\` along the eye's ray, \`rise\` the height within
/// the cloud, \`solid\` the depth inside it and \`stood\` how far the
/// billows stand out of the body there.
fn cloudLight(
  h: f32,
  sun: vec2f,
  phase: f32,
  rise: f32,
  solid: f32,
  stood: f32,
) -> vec3f {
  let depth = sun.x;
  let square = mix(0.3, 1.0, smoothstep(-0.4, 0.9, sun.y));
  let lit =
    square * (0.28 * phase * exp(-depth) + 0.3 * exp(-0.3 * depth)) + 0.1 * exp(
      -0.1 * depth,
    );
  // The sky reaches a cloud's crown freely and its heart hardly at all.
  let open = mix(0.45, 1.0, exp(-4.0 * max(solid, 0.0)));
  // Its underside looks at the sea, its crown at the whole sky.
  let ambient =
    mix(
      HORIZON_FILL * 0.3 + GROUND_FILL,
      SKY_FILL + HORIZON_FILL * 0.2,
      sqrt(rise),
    ) * open;
  // A crease between billows sees less of the sun and of the sky than a knob.
  return
    (sunThrough(h) * lit + ambient) * mix(
      0.62,
      1.2,
      smoothstep(-0.22, 0.12, stood),
    );
}

/// One cloud along a ray from \`eye\` between \`begin\` and \`to\` km, laid
/// over what \`seen\` already holds: rgb the light so far, a what still shows.
fn marchCloud(
  cloud: Cloud,
  eye: vec3f,
  dir: vec3f,
  begin: f32,
  to: f32,
  jitter: f32,
  phase: f32,
  fog: vec3f,
  seen: ptr<function, vec4f>,
) {
  let scale = min(cloud.radius, cloud.tall);
  var gone = begin;
  // Where the ray was last outside the cloud and how far outside, and
  // whether it has stepped since it was last in.
  var before = begin;
  var outside = 0.0;
  var stepped = false;
  // The sample between a crossing's two sides, which places it.
  var between = false;
  // The sample a placed crossing sent the ray on to.
  var landing = false;
  var after = begin;
  var inside = 0.0;
  var lit = 0;
  var shown = vec3f(0.0);
  for (var i = 0; i < 48; i++) {
    if (gone >= to || (*seen).a < 0.02) {
      break;
    }
    let pace = 0.012 + 0.0022 * gone;
    let at = inField(eye + dir * gone);
    let solid = cloudSolid(cloud, at, true);
    if (between) {
      // The crossing is placed: on to a set way under the skin, where a
      // cloud has thickened enough to show its light, so texel after texel
      // samples a cloud at one depth.
      if (solid > 0.0) {
        after = gone;
        inside = solid;
      } else {
        before = gone;
        outside = solid;
      }
      gone = before + (after - before) * outside / (outside - inside) + SKIN;
      between = false;
      landing = true;
      continue;
    }
    // A ray that grazes less of a cloud than the skin's depth still shows
    // the wisp it went through.
    let wisp = landing && solid <= 0.0;
    landing = false;
    if (solid <= 0.0 && !wisp) {
      before = gone;
      outside = solid;
      stepped = true;
      gone += max(-solid * scale * 0.22, pace * (0.6 + 0.4 * jitter));
      continue;
    }
    if (stepped) {
      // Just through the surface: back to where the step crossed it.
      after = gone;
      inside = solid;
      gone = before + (after - before) * outside / (outside - solid);
      stepped = false;
      between = true;
      continue;
    }
    let deep = select(solid, 0.5 * inside, wisp);
    let water = cloudWater(cloud, at, deep);
    let tread =
      select(
        clamp(0.5 / (water * CLOUD_EXTINCTION + 1e-3), pace, 4.0 * pace),
        SKIN,
        wisp,
      );
    let rise = clamp((at.y - CLOUD_BASE) / cloud.tall, 0.0, 1.0);
    // Past its first two samples a cloud's light is its heart's, near enough.
    if (lit < 2) {
      let stood = relief;
      shown =
        cloudLight(at.y, towardSun(cloud, at, deep), phase, rise, deep, stood);
      lit++;
    }
    let kept = exp(-water * CLOUD_EXTINCTION * tread);
    let air = airBetween(gone, at.y);
    *seen =
      vec4f(
        (*seen).rgb + (*seen).a
          * (1.0 - kept)
          * (shown * air + fog * (1.0 - air)),
        (*seen).a * kept,
      );
    gone += tread;
  }
}

/// Where a ray from \`eye\`, both in the field's axes, is inside the bound of
/// \`cloud\`: x where it enters, y where it leaves, x over y where it misses.
fn boundOf(cloud: Cloud, eye: vec3f, dir: vec3f) -> vec2f {
  let reach = vec3f(cloud.radius, cloud.tall, cloud.radius) * CLOUD_BOUND;
  let begin = (eye - vec3f(cloud.centre.x, CLOUD_BASE, cloud.centre.y)) / reach;
  let along = dir / reach;
  let a = dot(along, along);
  let b = dot(begin, along);
  let inside = b * b - a * (dot(begin, begin) - 1.0);
  if (inside <= 0.0) {
    return vec2f(1.0, 0.0);
  }
  let root = sqrt(inside);
  return vec2f((-b - root) / a, (-b + root) / a);
}

/// The cumulus along a ray, cell by cell of the field from the nearest.
fn cumulusAlong(dir: vec3f, jitter: f32, fog: vec3f) -> vec4f {
  var seen = vec4f(0.0, 0.0, 0.0, 1.0);
  if (dir.y <= 0.004) {
    return seen;
  }
  let eye = frame.eye.xyz / 1000.0;
  let first = reachOf(dir.y, CLOUD_BASE);
  let last = min(reachOf(dir.y, CLOUD_CEILING), CLOUD_REACH);
  if (first >= last) {
    return seen;
  }
  let phase = cloudPhase(dot(dir, SUN_DIR));

  // The ray over the sea, in the field's axes, per kilometre of itself.
  let over = vec2f(dot(dir.xz, WIND_AXIS), dot(dir.xz, WIND_SIDE));
  let start = inField(eye).xz;
  let entry = start + over * first;
  var cell = vec2i(floor(entry / CLOUD_CELL));
  let ahead = vec2i(sign(over));
  let stride = CLOUD_CELL / max(abs(over), vec2f(1e-6));
  var next = (vec2f(cell + max(ahead, vec2i(0))) * CLOUD_CELL - entry) / over;
  next = select(next, vec2f(1e9), abs(over) < vec2f(1e-6));
  var gone = first;
  for (var i = 0; i < 44; i++) {
    let leaves = first + min(next.x, next.y);
    var cloud = cloudIn(cell);
    if (cloud.radius > 0.0) {
      // The sea has fallen this far under the cloud, and still falls.
      let off = length(cloud.centre - start);
      cloud.off = off;
      let bound =
        boundOf(
          cloud,
          vec3f(start.x, eye.y + off * off / (2.0 * EARTH_RADIUS), start.y),
          vec3f(over.x, dir.y + off * length(over) / EARTH_RADIUS, over.y),
        );
      let begin = max(bound.x, gone);
      if (begin < bound.y) {
        marchCloud(cloud, eye, dir, begin, bound.y, jitter, phase, fog, &seen);
        if (seen.a < 0.02) {
          break;
        }
      }
    }
    if (leaves >= last) {
      break;
    }
    gone = leaves;
    if (next.x < next.y) {
      next.x += stride.x;
      cell.x += ahead.x;
    } else {
      next.y += stride.y;
      cell.y += ahead.y;
    }
  }
  if (seen.a < 0.02) {
    seen.a = 0.0;
  }
  return seen;
}

/// The ice cloud's sheet where the ray crosses it: streaks, in the patches a
/// wider weather leaves them.
fn cirrusAlong(dir: vec3f, fog: vec3f) -> vec4f {
  let away = reachOf(max(dir.y, 0.0), CIRRUS_HEIGHT);
  if (dir.y <= 0.0 || away > CIRRUS_REACH) {
    return vec4f(0.0, 0.0, 0.0, 1.0);
  }
  let at = inField(frame.eye.xyz / 1000.0 + dir * away).xz / CLOUD_TILE_KM;
  let patches = cloudNoise2(at * vec2f(3.0, 4.0), 3, CLOUD_SALT + 7u);
  // Drawn out askew to the wind, which blows from the sun: streaks along it
  // would fan out of the sun. Sheared, the lattice still closes on the tile.
  let streak = vec2f((at.x + at.y) * 24.0, at.y * 9.0);
  let sheet =
    0.6 * cloudNoise2(streak, 24, CLOUD_SALT + 10u)
      + 0.28 * cloudNoise2(streak * vec2f(3.0, 4.0), 72, CLOUD_SALT + 11u)
      + 0.12 * cloudNoise2(streak * vec2f(6.0, 9.0), 144, CLOUD_SALT + 12u);
  let fade = 1.0 - smoothstep(0.5, 1.0, away / CIRRUS_REACH);
  let cover =
    0.38 * smoothstep(0.5, 0.85, sheet) * smoothstep(0.3, 0.6, patches) * fade;
  let c = dot(dir, SUN_DIR);
  let light =
    sunThrough(CIRRUS_HEIGHT) * (0.16 + 0.1 * henyeyCloud(
      c,
      0.7,
    )) + SKY_FILL * 0.5;
  let air = airBetween(away, CIRRUS_HEIGHT);
  return vec4f((light * air + fog * (1.0 - air)) * cover, 1.0 - cover);
}

/// The sky along unit \`dir\` from the eye without the sun's own disc: rgb its
/// light — the clear air, the glow round the sun, the ice cloud, the cumulus
/// marched — and a the share of the disc that would show through. \`jitter\` in
/// [0, 1) shifts the march's steps.
fn skyAlong(dir: vec3f, jitter: f32) -> vec4f {
  let fog = clearSky(dir);
  let cumulus = cumulusAlong(dir, jitter, fog);
  let cirrus = cirrusAlong(dir, fog);
  let behind = cirrus.rgb + cirrus.a * (fog + aureole(dir));
  return vec4f(cumulus.rgb + cumulus.a * behind, cumulus.a * cirrus.a);
}
`,o4,t7,oW,ne,o6,o1,o9,nl),nn=Math.tan(.2665*Math.PI/180),ni=tO("sun-disc",`const SUN_SPREAD = ${tE(nn)};`),nf=tL(tM(rL.max,rL.min,-1),.5);tM(rL.min,nf);let nc=[[1,0,0],[0,1,0],[0,0,1]].map(M=>{let[L,R,O]=tS(M,t2),A=Math.hypot(L,R,O),E=[L/A,R/A,O/A];return{facing:E,reach:tk(nf,[Math.abs(E[0]),Math.abs(E[1]),Math.abs(E[2])])}}).map(({facing:M,reach:L})=>tT([...M,L])).join(",\n  "),nu=tO("outside/cube-shadow-numbers",`
const SHADOW_CRISP = ${tE(.003)};
const SHADOW_BEHIND = ${tE(.05)};
/// The cube's outline as the sun sees it: the way each pair of its sides
/// faces across the rays, and how far from the cube's middle they stand.
const CUBE_OUTLINE = array<vec4f, 3>(
  ${nc}
);
`),nh=tO("cube/widgets/outdoors/stage/lib/cube-shadow",`
/// How much of the sun the cube leaves \`p\`, the edge as wide as the sun's
/// disc makes it at the distance the shadow has run.
fn boxLight(p: vec3f) -> f32 {
  let off = p - 0.5 * (CUBE_MIN + CUBE_MAX);
  var out = -1e9;
  var back = vec3f(0.0);
  for (var i = 0; i < 3; i++) {
    let side = CUBE_OUTLINE[i];
    let across = dot(side.xyz, off);
    if (abs(across) - side.w > out) {
      out = abs(across) - side.w;
      back = -side.xyz * sign(across);
    }
  }
  // A point beside the outline is judged by the ray of the outline's edge.
  let edge = p + back * (max(out, 0.0) + 0.001);
  let a = (CUBE_MIN - edge) / SUN_DIR;
  let b = (CUBE_MAX - edge) / SUN_DIR;
  let near = min(a, b);
  let far = max(a, b);
  let enters = max(near.x, max(near.y, near.z));
  let leaves = min(far.x, min(far.y, far.z));
  let hit = leaves > max(enters, 0.0);
  let ahead = -dot(off, SUN_DIR);
  let run = select(max(ahead, 0.0), max(enters, 0.0), hit);
  let beside = select(0.0, 1.0, out > 0.0 && ahead > 0.0);
  let behind = select(beside, smoothstep(0.0, SHADOW_BEHIND, leaves), hit);
  let soft = SUN_SPREAD * run + SHADOW_CRISP;
  return 1.0 - (1.0 - smoothstep(-soft, soft, out)) * behind;
}

/// How much of the sun a bar \`half\` wide leaves a point \`off\` from its
/// middle, its edge \`soft\` wide.
fn barLight(off: f32, half: f32, soft: f32) -> f32 {
  return
    (1.0 - smoothstep(half - soft, half + soft, off)) * min(1.0, half / soft);
}

/// How much of the sun the ladder leaves \`p\`.
fn ladderLight(p: vec3f) -> f32 {
  let run = dot(LADDER_FOOT - p, LADDER_OUT) / dot(SUN_DIR, LADDER_OUT);
  let at = p + SUN_DIR * run - LADDER_FOOT;
  let up = dot(at, LADDER_UP);
  let across = abs(dot(at, LADDER_ACROSS));
  let soft = SUN_SPREAD * max(run, 0.0) + SHADOW_CRISP;
  let stiles =
    barLight(
      abs(across - 0.5 * LADDER_SIZE.y),
      0.5 * LADDER_SIZE.z,
      soft,
    ) * barLight(abs(up - 0.5 * LADDER_SIZE.x), 0.5 * LADDER_SIZE.x, soft);
  let step = clamp(up, LADDER_RUNGS.x, LADDER_RUNGS.y) - LADDER_RUNGS.x;
  let rung = LADDER_RUNGS.x + round(step / LADDER_SIZE.w) * LADDER_SIZE.w;
  let rungs =
    barLight(abs(up - rung), 0.5 * LADDER_RUNGS.z, soft) * barLight(
      across,
      0.5 * LADDER_SIZE.y,
      soft,
    );
  return
    1.0 - max(stiles, rungs) * smoothstep(
      SHADOW_BEHIND,
      3.0 * SHADOW_BEHIND,
      run,
    );
}

/// How much of the sun reaches \`p\` in the world frame: 1 in the sun, 0 in
/// the shadow of the cube and its ladder. A point on the cube's own sunlit
/// faces is in the sun; one on the ladder is not in the ladder's shadow.
/// Once the frame says the ladder is gone the cube casts alone.
fn cubeShadow(p: vec3f) -> f32 {
  return boxLight(p) * mix(1.0, ladderLight(p), frame.state.x);
}
`,ni,nu,rE,rC,o4,t7),nd=(tO("cube/widgets/outdoors/stage/lib/daylight",`
/// The light on a matte face at \`p\` in the world frame: the sun where the
/// cube's shadow lets it through, and the sky's fill, more of it the more of
/// the sky the face looks at.
fn daylight(p: vec3f, normal: vec3f) -> vec3f {
  let sun = SUN_LIGHT * max(dot(normal, SUN_DIR), 0.0) * cubeShadow(p);
  return sun + SKY_FILL * (0.5 + 0.5 * normal.y);
}
`,t7,nh),tO("cube/widgets/outdoors/stage/lib/outdoor-stage",`
/// The scene pass's three targets.
struct Scene {
  /// Scene light, and metres from the eye.
  @location(0) light: vec4f,
  /// What a failed reflection shows, and the share mirrored.
  @location(1) mirror: vec4f,
  /// The plane mirrored in, and its blur per metre of reflected ray.
  @location(2) plane: vec4f,
}

/// A point showing \`light\` \`metres\` from the eye and mirroring nothing.
fn lit(light: vec3f, metres: f32) -> Scene {
  return Scene(vec4f(light, metres), vec4f(0.0), vec4f(0.0));
}

/// One triangle over the screen at the far plane.
@vertex
fn backdropVertex(
  @builtin(vertex_index) index: u32,
) -> @builtin(position) vec4f {
  let corner = vec2f(f32((index << 1u) & 2u), f32(index & 2u));
  return vec4f(corner * 2.0 - 1.0, 0.0, 1.0);
}

/// The unit direction from the eye through a pixel.
fn rayThrough(pixel: vec2f) -> vec3f {
  let across = pixel / frame.clock.zw;
  let ndc = vec2f(across.x * 2.0 - 1.0, 1.0 - across.y * 2.0);
  let ahead = frame.inverse * vec4f(ndc, 0.001, 1.0);
  return normalize(ahead.xyz / ahead.w - frame.eye.xyz);
}

/// A point of the world in clip space.
fn clipOf(world: vec3f) -> vec4f {
  return frame.viewProjection * vec4f(world, 1.0);
}

/// A point of the world's distance from the eye.
fn metresTo(world: vec3f) -> f32 {
  return length(world - frame.eye.xyz);
}
`,o4)),nm={height:2.1,thick:.6*Math.PI*((o$+oq)/2)**2*.5/49},np=tO("sky/cloud-veil-numbers",`
const CLOUD_GLANCE_HEIGHT = ${tE(nm.height)};
const CLOUD_GLANCE_THICK = ${tE(nm.thick)};
`),nv=tO("cube/widgets/outdoors/stage/lib/cloud-veil",`
/// The cumulus along \`dir\` as the share of the sky they hide, for a mirror
/// too rough to tell one cloud from the next: thicker toward the horizon,
/// where a ray is longest in their layer, and lost in the air far off. rgb
/// their light, a the share of what is behind them that shows.
fn cloudGlance(dir: vec3f) -> vec4f {
  let y = max(dir.y, 0.02);
  let hidden = 0.7 * (1.0 - exp(-CLOUD_GLANCE_THICK / y));
  let air = airBetween(CLOUD_GLANCE_HEIGHT / y, CLOUD_GLANCE_HEIGHT);
  // Looking away from the sun a cloud shows its lit flank, toward it its shade.
  let lit = 0.22 - 0.12 * dot(dir, SUN_DIR);
  let shown =
    sunThrough(CLOUD_GLANCE_HEIGHT) * lit + SKY_FILL * 0.6 + HORIZON_FILL * 0.1;
  let cover = hidden * max(air.r, max(air.g, air.b));
  return vec4f(shown * cover, 1.0 - cover);
}

/// Each cumulus along \`dir\` where it stands, lit as a whole. rgb their light,
/// a the share of what is behind them that shows.
fn cloudVeil(dir: vec3f) -> vec4f {
  var seen = vec4f(0.0, 0.0, 0.0, 1.0);
  if (dir.y <= 0.004) {
    return seen;
  }
  let eye = frame.eye.xyz / 1000.0;
  let fog = clearSky(dir);
  let phase = cloudPhase(dot(dir, SUN_DIR));
  let start = inField(eye).xz;
  let over = vec2f(dot(dir.xz, WIND_AXIS), dot(dir.xz, WIND_SIDE));
  var last = vec2i(1 << 30);
  for (var i = 0; i < 4; i++) {
    let level = CLOUD_BASE + 0.15 + 0.6 * f32(i);
    let reached = reachOf(dir.y, level);
    if (reached > CLOUD_REACH) {
      continue;
    }
    let cell = vec2i(floor(inField(eye + dir * reached).xz / CLOUD_CELL));
    if (all(cell == last)) {
      continue;
    }
    last = cell;
    let cloud = cloudIn(cell);
    if (cloud.radius <= 0.0) {
      continue;
    }
    // Where the ray passes the cloud's middle is where it is deepest in it.
    let away =
      max(dot(cloud.centre - start, over) / max(dot(over, over), 1e-6), 0.0);
    let field = inField(eye + dir * away);
    let h = field.y;
    let body = cloudBody(cloud, field);
    let cover = smoothstep(-0.05, 0.25, body);
    // A flank is lit where the body thins toward the sun.
    let sunward = cloudBody(cloud, field + SUN_IN_FIELD * 0.5 * cloud.radius);
    let depth = 14.0 * clamp(0.5 + sunward, 0.0, 1.0);
    let rise = clamp((h - CLOUD_BASE) / cloud.tall, 0.0, 1.0);
    let shown =
      cloudLight(h, vec2f(depth, body - sunward), phase, rise, 0.2, 0.2);
    let air = airBetween(away, h);
    seen =
      vec4f(
        seen.rgb + seen.a * cover * (shown * air + fog * (1.0 - air)),
        seen.a * (1.0 - cover),
      );
  }
  return seen;
}
`,o4,t7,oW,o6,o1,np,ne,no),ng=tO("cube/widgets/outdoors/stage/lib/sky",`
/// The sky a mirror shows: the fitted air, the glow round the sun, the ice
/// cloud and each cumulus where it stands, lit as a whole rather than
/// marched. The sun's own disc is in it at lod 0 and gone by a half.
fn skyMirrored(dir: vec3f, lod: f32) -> vec3f {
  let clouds = cloudVeil(dir);
  let air = clearSky(dir);
  let cirrus = cirrusAlong(dir, air);
  var behind = cirrus.rgb + cirrus.a * (air + aureole(dir));
  if (lod < 0.5) {
    behind +=
      sunDisc(dir, 0.0005) * cirrus.a * (1.0 - smoothstep(0.0, 0.5, lod));
  }
  return behind * clouds.a + clouds.rgb;
}

/// The sky as a few dozen operations: the air smoothed, the sun's halo, the
/// clouds as the cover they make toward the horizon, all drawn toward the
/// whole sky's mean as the lobe widens from lod 1 to the widest, 8.
fn skyGathered(dir: vec3f, lod: f32) -> vec3f {
  let clouds = cloudGlance(dir);
  let sky = (skyGlance(dir) + sunHalo(dir)) * clouds.a + clouds.rgb;
  let wide = clamp((lod - 1.0) / 7.0, 0.0, 1.0);
  return mix(sky, SKY_FILL, 0.7 * wide * wide);
}

/// The sky's light along unit \`dir\` at this instant over a lobe of \`lod\`:
/// mirrored under 1, gathered from 1 up, and the two mixed between a half
/// and 1, so a face whose roughness crosses there shows no seam.
fn skyRadiance(dir: vec3f, lod: f32) -> vec3f {
  if (lod >= 1.0) {
    return skyGathered(dir, lod);
  }
  let mirrored = skyMirrored(dir, lod);
  if (lod <= 0.5) {
    return mirrored;
  }
  return mix(mirrored, skyGathered(dir, lod), smoothstep(0.5, 1.0, lod));
}
`,oW,no,nv,nl,t7),nb=tO("outside/stage-numbers",`
const SKY_METRES = ${tE(1e4)};
`),nw=[.42,.063,.022],nx=[.0035,.0048,.0062],ny=nw.map((M,L)=>M+(nx[L]??0)/.0183),nk=tO("sea/water-optics",`
const ABSORB = ${tT(nw)};
const BACKSCATTER = ${tT(nx)};
const ATTENUATE = ${tT(ny)};
`),nS=tO("cube/widgets/outdoors/stage/lib/water-body",`
/// What water returns of light meeting it head on.
const HEAD_ON = 0.0204;
/// What the water's body shows an eye inside it, of the light falling on it.
const DROWNED = vec3f(0.035, 0.13, 0.15);

/// What water reflects of light meeting it at \`cosine\`.
fn fresnel(cosine: f32) -> f32 {
  let away = 1.0 - clamp(cosine, 0.0, 1.0);
  let fifth = away * away * away * away * away;
  return HEAD_ON + (1.0 - HEAD_ON) * fifth;
}

/// What water \`depth\` metres deep keeps of light crossing it, per channel,
/// scattered light that goes on the same way counted in.
fn kept(depth: f32) -> vec3f {
  return exp(-ABSORB * max(depth, 0.0));
}

/// The sun's light let in per unit of level surface.
fn sunEntering() -> vec3f {
  return SUN_LIGHT * frame.sun.y * (1.0 - fresnel(frame.sun.y));
}

/// The body in the open sun: the colour a ray running on through water
/// comes to, whatever lies at its end.
fn drownedBody() -> vec3f {
  return DROWNED * (sunEntering() + SKY_FILL);
}

/// \`colour\` seen through \`metres\` of water, whose scattering blurs a thing
/// out of sight long before it is dark.
fn throughWater(colour: vec3f, metres: f32) -> vec3f {
  let keeps = exp(-ATTENUATE * max(metres, 0.0));
  return colour * keeps + drownedBody() * (vec3f(1.0) - keeps);
}

/// The metres of the segment from \`a\` to \`b\` that lie under the still sea.
fn underStill(a: vec3f, b: vec3f) -> f32 {
  let low = min(a.y, b.y);
  let high = max(a.y, b.y);
  return clamp(-low / max(high - low, 1e-4), 0.0, 1.0) * length(b - a);
}
`,o4,t7,nk),nM=tO("cube/widgets/outdoors/surface/dome/lib/sky-cloud-shader",`
struct Across {
  @builtin(position) position: vec4f,
  /// The screen, 0 to 1 from its top left corner.
  @location(0) screen: vec2f,
}

@vertex
fn cloudVertex(@builtin(vertex_index) index: u32) -> Across {
  let corner = vec2f(f32((index << 1u) & 2u), f32(index & 2u));
  return
    Across(
      vec4f(corner * 2.0 - 1.0, 0.0, 1.0),
      vec2f(corner.x, 1.0 - corner.y),
    );
}

@fragment
fn cloudFragment(across: Across) -> @location(0) vec4f {
  let jitter = unitOf(cellHash(vec2i(across.position.xy), CLOUD_SALT + 10u));
  return skyAlong(rayThrough(across.screen * frame.clock.zw), jitter);
}
`,o4,nd,a1,o1,no),nL=tO("sky/sky-shader-numbers",`
const FAR_METRES = ${tE(2e4)};
`),nR=tO("cube/widgets/outdoors/surface/dome/lib/sky-shader",`
@group(1) @binding(0) var skyTarget: texture_2d<f32>;
@group(1) @binding(1) var skySampler: sampler;

@fragment
fn fragmentMain(@builtin(position) position: vec4f) -> Scene {
  let dir = rayThrough(position.xy);
  let edge = length(fwidth(dir));
  let sky =
    textureSampleLevel(
      skyTarget,
      skySampler,
      position.xy / frame.clock.zw,
      0.0,
    );
  if (dir.y < 0.0) {
    let wets = max(frame.eye.y, 0.0) / -dir.y;
    if (wets < FAR_METRES) {
      let air = airThrough(wets);
      return
        lit(drownedBody() * air + sky.rgb * (vec3f(1.0) - air), SKY_METRES);
    }
  }
  return lit(sky.rgb + sunDisc(dir, edge) * sky.a, SKY_METRES);
}
`,o4,nd,nb,nS,oW,nL,nl),nO=tO("sand/sand-relief-numbers",`
const SAND_WIND = ${tT([.7638152020777741,-.6454349983343707])};
/// Half a turn, in radians.
const SAND_PI = ${tE(Math.PI)};
`),nA=el("0"),{salt:nE}=eR(eb({salt:ew(0,0x80000000)}),M=>nA(`island/sand/${M}`)),nT=tO("sand/sand-salt",`
const SAND_SALT = ${Math.floor(nE)}u;
`),nI=tO("cube/widgets/outdoors/surface/beach/lib/sand-relief",`
/// The ripples' crest to crest, metres.
const RIPPLE_LENGTH = 0.085;
/// The ripples' trough to crest, metres, where they stand full.
const RIPPLE_HEIGHT = 0.0055;
/// The share of a ripple's wavelength its windward face takes; the rest is
/// the lee.
const RIPPLE_STOSS = 0.7;
/// Metres over the sea between which the ripples rise from the smooth sand
/// the swash leaves to their full height.
const RIPPLE_FROM = 0.5;
const RIPPLE_FULL = 0.95;

/// Smooth noise in [0, 1) with its slope: x the value, yz its gradient in \`p\`.
fn noised(p: vec2f, salt: u32) -> vec3f {
  let cell = vec2i(floor(p));
  let f = fract(p);
  let u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  let du = 30.0 * f * f * (f * (f - 2.0) + 1.0);
  let a = unitOf(cellHash(cell, salt));
  let b = unitOf(cellHash(cell + vec2i(1, 0), salt));
  let c = unitOf(cellHash(cell + vec2i(0, 1), salt));
  let d = unitOf(cellHash(cell + vec2i(1, 1), salt));
  let k = a - b - c + d;
  return
    vec3f(
      a + (b - a) * u.x + (c - a) * u.y + k * u.x * u.y,
      du * vec2f(b - a + k * u.y, c - a + k * u.x),
    );
}

/// \`octaves\` of \`noised\`, each turned, twice as fine and half as strong:
/// x in [0, 1), yz the gradient in \`p\`.
fn fbmd(p: vec2f, salt: u32, octaves: i32) -> vec3f {
  let turn = mat2x2f(0.8, 0.6, -0.6, 0.8);
  var sum = vec3f(0.0);
  var weight = 0.5;
  var at = p;
  var back = mat2x2f(1.0, 0.0, 0.0, 1.0);
  for (var octave = 0; octave < octaves; octave++) {
    let n = noised(at, salt + u32(octave));
    sum += weight * vec3f(n.x, back * n.yz);
    at = 2.0 * (turn * at);
    back = 2.0 * (back * transpose(turn));
    weight *= 0.5;
  }
  return sum / (1.0 - 2.0 * weight);
}

/// A height in metres and its slope on the ground plane.
struct Relief {
  height: f32,
  slope: vec2f,
}

/// How much of the dry sand's relief stands at \`h\` metres over the sea: none
/// where the swash runs, all of it on the backshore.
fn sandDryness(h: f32) -> f32 {
  return smoothstep(RIPPLE_FROM, RIPPLE_FULL, h);
}

/// The hummocks: what feet, rain and wind leave between the dunes.
fn sandHummocks(xz: vec2f, h: f32) -> Relief {
  let broad = fbmd(xz / 2.6, SAND_SALT + 0x51u, 2);
  let close = fbmd(xz / 0.55, SAND_SALT + 0x57u, 3);
  // Their trough to crest, metres, on the backshore.
  let stand = 0.05 * (0.25 + 0.75 * sandDryness(h));
  return
    Relief(
      stand * (0.7 * broad.x + 0.3 * close.x - 0.5),
      stand * (0.7 * broad.yz / 2.6 + 0.3 * close.yz / 0.55),
    );
}

/// One train of ripples: x its phase, yz the phase's gradient on the ground.
fn rippleTrain(xz: vec2f, dir: vec2f, wavelength: f32, salt: u32) -> vec3f {
  let k = 2.0 * SAND_PI / wavelength;
  let wander = noised(xz / 0.8, salt);
  let waver = noised(xz / 0.23, salt + 1u);
  // Where crests of two neighbouring runs do not meet, one forks or ends: a
  // step of half a wave across a wandering line.
  let seam = noised(xz / vec2f(0.9, 1.7), salt + 2u);
  // Over metres the crests swing round by tens of degrees and draw apart.
  let bend = noised(xz / 3.1, salt + 3u);
  let fork = smoothstep(0.46, 0.54, seam.x);
  return
    vec3f(
      k * dot(xz, dir)
        + 42.0 * bend.x
        + 5.0 * wander.x
        + 1.2 * waver.x
        + 3.1 * fork,
      k * dir
        + 42.0 * bend.yz / 3.1
        + 5.0 * wander.yz / 0.8
        + 1.2 * waver.yz / 0.23,
    );
}

/// A ripple's section at \`phase\`: x its height in [0, 1], y the height's
/// slope in phase. The windward face climbs slowly and the lee drops fast.
fn rippleSection(phase: f32) -> vec2f {
  let f = fract(phase / (2.0 * SAND_PI));
  let stoss = RIPPLE_STOSS;
  if (f < stoss) {
    let t = f / stoss;
    return
      vec2f(
        0.5 - 0.5 * cos(SAND_PI * t),
        0.5 * sin(SAND_PI * t) / (2.0 * stoss),
      );
  }
  let t = (1.0 - f) / (1.0 - stoss);
  return
    vec2f(
      0.5 - 0.5 * cos(SAND_PI * t),
      -0.5 * sin(SAND_PI * t) / (2.0 * (1.0 - stoss)),
    );
}

/// How much sun reaches a point of a ripple train whose crests stand \`stand\`
/// metres tall, by the crest between it and the sun: 0 in the crest's shadow.
fn rippleSun(train: vec3f, stand: f32, sun: vec3f) -> f32 {
  let run = dot(train.yz, normalize(sun.xz));
  let f = fract(train.x / (2.0 * SAND_PI));
  // The share of a wavelength from here to the next crest sunward.
  let ahead = fract(select(f - RIPPLE_STOSS, RIPPLE_STOSS - f, run > 0.0));
  let rise = stand * (1.0 - rippleSection(train.x).x);
  let ray =
    2.0 * SAND_PI * ahead / max(abs(run), 1e-3) * sun.y / length(sun.xz);
  return smoothstep(-0.25, 0.35, (ray - rise) / max(stand, 1e-5));
}

/// The wind's ripples at a ground point \`h\` metres over the sea.
struct Ripples {
  relief: Relief,
  /// 0 in a trough, 1 on a crest.
  crest: f32,
  /// Metres from trough to crest here.
  stand: f32,
  /// 1 in sun, 0 in the shadow of the next crest sunward.
  sun: f32,
}

/// The share of their full height the ripples stand to at \`xz\`: fields of
/// them between stretches the wind has swept smooth.
fn rippleSwathe(xz: vec2f) -> f32 {
  let field = fbmd(xz / 7.0, SAND_SALT + 0x6du, 2).x;
  let within = noised(xz / 2.3, SAND_SALT + 0x6eu).x;
  return smoothstep(0.46, 0.66, field) * (0.45 + 0.55 * within) + 0.03;
}

/// The wind's ripples at \`xz\`, \`h\` metres over the sea, lit by \`sun\`: two
/// trains crossing at a slant, each holding the ground in turn.
fn sandRipples(xz: vec2f, h: f32, sun: vec3f) -> Ripples {
  let wind = SAND_WIND;
  let veer =
    vec2f(wind.x * 0.9336 - wind.y * 0.3584, wind.x * 0.3584 + wind.y * 0.9336);
  let one = rippleTrain(xz, wind, RIPPLE_LENGTH, SAND_SALT + 0x61u);
  let other = rippleTrain(xz, veer, RIPPLE_LENGTH * 1.45, SAND_SALT + 0x67u);
  let which = smoothstep(0.44, 0.56, noised(xz / 4.3, SAND_SALT + 0x6bu).x);
  let stand = RIPPLE_HEIGHT * sandDryness(h) * rippleSwathe(xz);
  let a = rippleSection(one.x);
  let b = rippleSection(other.x);
  return
    Ripples(
      Relief(
        stand * (mix(a.x, b.x, which) - 0.5),
        stand * mix(a.y * one.yz, b.y * other.yz, which),
      ),
      mix(a.x, b.x, which),
      stand,
      mix(rippleSun(one, stand, sun), rippleSun(other, stand, sun), which),
    );
}
`,a1,nO,nT),nz=tO("cube/widgets/outdoors/surface/beach/lib/sand-colour",`
/// Dry sand's albedo, linear: pale quartz with a little shell in it.
const DRY_SAND = vec3f(0.6, 0.47, 0.31);

/// Dry sand's albedo at a ground point: the beach's broad tones, no grain.
fn sandAlbedo(xz: vec2f) -> vec3f {
  let broad = noised(xz / 11.0, SAND_SALT + 0x91u).x;
  let swathe = noised(xz / 1.9, SAND_SALT + 0x93u).x;
  let pale = vec3f(0.66, 0.6, 0.5);
  let tone = DRY_SAND * (0.9 + 0.2 * swathe);
  return mix(tone, pale, 0.5 * smoothstep(0.35, 0.8, broad));
}

/// \`albedo\` as it shows \`damp\` (0 dry, 1 soaked): darker and deeper.
fn sandWetted(albedo: vec3f, damp: f32) -> vec3f {
  return mix(albedo, 0.6 * pow(albedo, vec3f(1.5)), damp);
}

/// The bed's albedo at ground point \`xz\`, lying \`depth\` metres under the
/// water above it: soaked sand, mottled where the waves have sorted it, unlit.
fn sandBed(xz: vec2f, depth: f32) -> vec3f {
  let sorted = fbmd(xz / 1.7, SAND_SALT + 0x97u, 2).x;
  let shade = 1.0 + 0.3 * (sorted - 0.5) / (1.0 + 0.15 * depth);
  return sandWetted(sandAlbedo(xz), 1.0) * shade;
}
`,nI,nT),n_=tO("cube/widgets/outdoors/surface/sand/material/lib/sand-grain",`
/// A grain's width, metres: coarse beach sand.
const GRAIN_WIDTH = 0.0011;

/// The nearest of a unit lattice's points, one in each cell: xy from \`p\` to
/// it, zw two random numbers of its own in [0, 1).
fn nearestSpeck(p: vec2f, salt: u32) -> vec4f {
  let cell = vec2i(floor(p));
  var nearest = vec4f(8.0, 8.0, 0.0, 0.0);
  for (var dy = -1; dy <= 1; dy++) {
    for (var dx = -1; dx <= 1; dx++) {
      let other = cell + vec2i(dx, dy);
      let word = cellHash(other, salt);
      let to = vec2f(other) + vec2f(unitOf(word), unitOf(mix32(word))) - p;
      if (dot(to, to) < dot(nearest.xy, nearest.xy)) {
        nearest =
          vec4f(
            to,
            unitOf(mix32(word ^ 0xa5a5a5a5u)),
            unitOf(mix32(word ^ 0x3c3c3c3cu)),
          );
      }
    }
  }
  return nearest;
}

/// What the grains do to the sand at one pixel.
struct Grains {
  /// What the albedo is multiplied by.
  tint: vec3f,
  slope: vec2f,
}

/// The grains at \`xz\`, where a pixel covers \`px\` metres of ground: each one
/// drawn near the eye, their speckle further off.
fn sandGrains(xz: vec2f, px: f32) -> Grains {
  var tint = vec3f(1.0);
  var slope = vec2f(0.0);
  let near = 1.0 - smoothstep(0.35, 1.1, px / GRAIN_WIDTH);
  if (near > 0.0) {
    let grain = nearestSpeck(xz / GRAIN_WIDTH, SAND_SALT + 0x71u);
    let kind = grain.z;
    var own = vec3f(0.86 + 0.28 * grain.w);
    if (kind < 0.035) {
      own = vec3f(0.42, 0.37, 0.34);
    } else if (kind > 0.93) {
      own = vec3f(1.3, 1.32, 1.34);
    } else if (kind > 0.75) {
      own = vec3f(1.1, 0.99, 0.85);
    }
    let gap = 1.0 - 0.3 * smoothstep(0.3, 0.62, length(grain.xy));
    tint = mix(tint, own * gap, near);
    slope +=
      near * 0.6 * (vec2f(fract(grain.w * 57.3), fract(grain.z * 113.7)) - 0.5);
  }
  // Past single grains, the speckle of a few to a pixel, then of a handful.
  let size = max(px * 1.6, GRAIN_WIDTH);
  let level = log2(size / GRAIN_WIDTH);
  let lower = floor(level);
  let fine = GRAIN_WIDTH * exp2(lower);
  let blend = level - lower;
  let speckle =
    mix(
      noised(xz / fine, SAND_SALT + 0x73u + u32(lower)),
      noised(xz / (2.0 * fine), SAND_SALT + 0x74u + u32(lower)),
      blend,
    );
  let far = (1.0 - near) / (1.0 + 0.6 * level);
  tint *= 1.0 + far * 0.5 * (speckle.x - 0.5);
  slope += far * 0.55 * speckle.yz;
  return Grains(tint, slope);
}

/// The glint of grain faces that happen to mirror the sun to the eye: 0 where
/// none does. \`half\` is the unit vector halfway between sun and eye, \`px\` the
/// metres of ground under a pixel.
fn sandGlint(xz: vec2f, normal: vec3f, half: vec3f, px: f32) -> f32 {
  let size = max(px * 2.0, 0.0015);
  let level = log2(size);
  let lower = floor(level);
  var glint = 0.0;
  for (var step = 0; step < 2; step++) {
    let scale = exp2(lower + f32(step));
    let at = xz / scale;
    let word =
      cellHash(
        vec2i(floor(at)),
        SAND_SALT + 0x79u + u32(i32(lower) + step + 64),
      );
    let lean = 0.6 * (vec2f(unitOf(word), unitOf(mix32(word))) - 0.5);
    let facet = normalize(normal + vec3f(lean.x, 0.0, lean.y));
    let lit = smoothstep(0.996, 0.9996, dot(facet, half));
    let dot_ = 1.0 - smoothstep(0.12, 0.42, length(fract(at) - 0.5));
    let weight = select(level - lower, 1.0 - (level - lower), step == 0);
    glint +=
      weight * lit * dot_ * (0.4 + 1.6 * unitOf(mix32(word ^ 0x5bd1e995u)));
  }
  return glint;
}

/// The beach's litter at one pixel.
struct Litter {
  /// How much of the pixel it covers.
  cover: f32,
  albedo: vec3f,
  slope: vec2f,
  gloss: f32,
  /// 1 where the sun reaches the sand, 0 in a pebble's shadow.
  sun: f32,
}

/// How thickly the sea has strewn a point \`h\` metres over it: x along the
/// wrack lines high water left, y that and the thin scatter of the foreshore.
fn sandStrewn(xz: vec2f, h: f32) -> vec2f {
  // 0.44 metres over the sea is where the last high water left its line.
  let line = 0.44 + 0.12 * (noised(xz / 7.0, SAND_SALT + 0x83u).x - 0.5);
  let wrack = exp(-sq((h - line) / 0.035));
  let older = 0.35 * exp(-sq((h - line - 0.33) / 0.03));
  let shore = 0.12 * (1.0 - smoothstep(0.5, 1.1, h));
  return
    clamp(vec2f(wrack + older, wrack + older + shore), vec2f(0.0), vec2f(1.0));
}

/// A dried strand of weed seen from a point beside it.
struct Strand {
  /// Metres from the point to the strand's middle line.
  off: f32,
  /// Where along it the nearest of that line is: -1 and 1 its ends.
  along: f32,
  /// Metres across it, signed, and the unit vector that way.
  across: f32,
  side: vec2f,
  /// Its half width there, metres: it thins to a frayed point at each end.
  wide: f32,
}

/// The strand through the middle of a cell, \`to\` metres from that middle, its
/// lie, length, curl and thickness drawn from the cell's \`lot\`.
fn weedStrand(to: vec2f, lot: f32) -> Strand {
  let turn = 2.0 * SAND_PI * lot;
  let along = vec2f(cos(turn), sin(turn));
  let side = vec2f(-along.y, along.x);
  let reach = 0.012 + 0.02 * fract(lot * 41.3);
  let u = clamp(dot(to, along), -reach, reach);
  // A bend one way and a kink the other, so no two lie in the same arc.
  let curl = (fract(lot * 17.9) - 0.5) * 26.0;
  let kink = (fract(lot * 29.3) - 0.5) * 1800.0;
  let v =
    dot(to, side) - curl * (u * u - reach * reach * 0.3) - kink * u * u * u;
  let wide =
    (0.0005 + 0.0007 * fract(lot * 23.7)) * (0.2 + 0.8 * (1.0 - sq(u / reach)));
  return Strand(length(vec2f(dot(to, along) - u, v)), u / reach, v, side, wide);
}

/// Shell fragments, a few pebbles and dried weed: sparse everywhere, gathered
/// along the wrack line.
fn sandLitter(xz: vec2f, h: f32, px: f32, sun: vec3f) -> Litter {
  var litter = Litter(0.0, vec3f(0.0), vec2f(0.0), 0.0, 1.0);
  // Past this nothing strewn on the beach is as wide as a pixel.
  if (px > 0.03) {
    return litter;
  }
  let lines = sandStrewn(xz, h);
  let strewn = lines.y;
  let edge = max(px, 0.0004);

  // Shell fragments: pale angular flakes a few millimetres across.
  if (px < 0.02) {
    let shell = nearestSpeck(xz / 0.045, SAND_SALT + 0x85u);
    if (shell.z < 0.1 + 0.85 * strewn) {
      let turn = 2.0 * SAND_PI * shell.w;
      let to = shell.xy * 0.045;
      let along = vec2f(cos(turn), sin(turn));
      let q = vec2f(dot(to, along), dot(to, vec2f(-along.y, along.x)));
      let radius = 0.0015 + 0.0045 * fract(shell.w * 31.7);
      let d = abs(q.x) + 1.7 * abs(q.y) - radius;
      let cover =
        (1.0 - smoothstep(-edge, edge, d)) * (1.0 - smoothstep(
          0.008,
          0.02,
          px,
        ));
      litter.cover = cover;
      litter.albedo =
        mix(
          vec3f(0.78, 0.74, 0.66),
          vec3f(0.62, 0.5, 0.42),
          fract(shell.w * 7.3),
        );
      litter.slope = 0.5 * along * sign(q.x);
      litter.gloss = 0.35;
    }
  }

  // Pebbles: a rounded stone and the long shadow a low sun gives it.
  let pebble = nearestSpeck(xz / 0.8, SAND_SALT + 0x89u);
  if (pebble.z < 0.03 + 0.3 * strewn) {
    let to = -pebble.xy * 0.8;
    let radius = 0.007 + 0.018 * fract(pebble.w * 13.1);
    let d = length(to);
    if (d < radius + edge) {
      let dome = sqrt(max(radius * radius - d * d, 1e-8));
      let cover =
        (1.0 - smoothstep(radius - edge, radius + edge, d)) * (1.0 - smoothstep(
          0.4,
          1.0,
          px / radius,
        ));
      let tone = 0.12 + 0.3 * fract(pebble.w * 91.7);
      litter.albedo = mix(litter.albedo, tone * vec3f(1.0, 0.95, 0.88), cover);
      litter.slope = mix(litter.slope, -0.7 * to / dome, cover);
      litter.gloss = mix(litter.gloss, 0.2, cover);
      litter.cover = max(litter.cover, cover);
    }
    let away = -normalize(sun.xz);
    let reach = 0.7 * radius * length(sun.xz) / sun.y;
    let t = clamp(dot(to, away) / reach, 0.0, 1.0);
    let off = length(to - away * reach * t) - radius * (1.0 - 0.7 * t);
    litter.sun =
      mix(
        smoothstep(-edge, edge + 0.004 * t, off),
        1.0,
        smoothstep(0.4, 1.0, px / radius),
      );
  }

  // Dried weed: dark curled strands, in clumps, along the wrack lines.
  if (px < 0.012 && lines.x > 0.03) {
    let clump =
      smoothstep(0.4, 0.62, noised(xz / 0.7, SAND_SALT + 0x8bu).x) * lines.x;
    let strand = nearestSpeck(xz / 0.03, SAND_SALT + 0x8du);
    if (strand.z < 0.9 * clump) {
      let to = -strand.xy * 0.03;
      let near = 1.0 - smoothstep(0.004, 0.012, px);
      let body = weedStrand(to, strand.w);
      // A strand thinner than a pixel covers only its share of it.
      let cover =
        (1.0 - smoothstep(body.wide, body.wide + edge, body.off))
          * min(1.0, 2.8 * body.wide / edge)
          * near;
      // Bleached straw to nearly black, and no one strand a single tone.
      let bleached = sq(fract(strand.w * 67.1));
      let tone =
        mix(
          vec3f(0.07, 0.05, 0.03),
          vec3f(0.3, 0.22, 0.11),
          bleached,
        ) * (0.8 + 0.3 * sin(9.0 * body.along + 40.0 * strand.w));
      litter.albedo = mix(litter.albedo, tone, cover);
      // Round in section, so the low sun lights one side of it.
      litter.slope =
        mix(
          litter.slope,
          -1.2 * body.side * clamp(body.across / body.wide, -1.0, 1.0),
          cover,
        );
      litter.gloss = mix(litter.gloss, 0.0, cover);
      litter.cover = max(litter.cover, cover);
      // Lying on the sand, it lays its shadow beside itself: the longer the
      // lower the sun, up to where the grains it falls across break it up.
      let toSun =
        normalize(sun.xz) * min(
          2.0 * body.wide * length(sun.xz) / sun.y,
          3.5 * body.wide + 0.001,
        );
      var shade = 0.0;
      for (var step = 1.0; step <= 3.0; step += 1.0) {
        let thrown = weedStrand(to + toSun * step / 3.0, strand.w);
        shade =
          max(
            shade,
            1.0 - smoothstep(
              thrown.wide,
              thrown.wide + edge + 0.0006 * step,
              thrown.off,
            ),
          );
      }
      litter.sun = min(litter.sun, 1.0 - 0.6 * shade * near * (1.0 - cover));
    }
  }
  return litter;
}
`,rl,a1,nI,nO,nT),nN=tO("cube/widgets/outdoors/surface/sand/material/lib/sand-material",`
/// Metres over still water above which the sea is never asked: always dry.
const SWASH_TOP = 1.1;

/// How wet the sand is at \`xz\`, \`h\` metres over still water, at \`t\` seconds
/// into the hour: x how damp (1 soaked), y how much of a film of water still
/// stands on it (1 a mirror). The sea says where its sheets have lately lain;
/// the sand by the still waterline is damp whatever the waves do.
fn sandWetness(xz: vec2f, h: f32, t: f32) -> vec2f {
  if (h > SWASH_TOP) {
    return vec2f(0.0);
  }
  let shore = shoreWetness(xz, t);
  return vec2f(max(shore.x, 1.0 - smoothstep(0.02, 0.2, h)), shore.y);
}

/// Sun on a rough, dusty surface that throws light back the way it came:
/// what a white face of it shows per unit of sunlight.
fn sandDiffuse(normal: vec3f, sun: vec3f, view: vec3f) -> f32 {
  let toSun = max(dot(normal, sun), 0.0);
  let toEye = max(dot(normal, view), 0.0);
  let around = dot(sun, view) - toSun * toEye;
  // At a low sun both angles graze, where the bare ratio runs away.
  let spread = select(1.0, max(max(toSun, toEye), 0.35), around > 0.0);
  let back = 0.3 * pow(max(dot(sun, view), 0.0), 6.0);
  return toSun * (max(0.75 + 0.35 * around / spread, 0.5) + back);
}

/// The sky's light on a face of the sand.
fn sandFill(normal: vec3f, sun: vec3f) -> vec3f {
  // The sky is brightest and warmest round the sun, so a face turned that way
  // stays the lighter one in shadow too; the rest of it, overhead, is bluer
  // than its mean.
  let sunward = max(dot(normal, normalize(vec3f(sun.x, 0.35, sun.z))), 0.0);
  return
    SKY_FILL * ((0.34 + 0.3 * normal.y) * vec3f(0.9, 0.96, 1.2) + 0.5
      * vec3f(1.3, 0.95, 0.62)
      * sunward);
}

/// What one pixel of sand has to be lit with.
struct SandPoint {
  /// The point in the world, and metres over still water of the shape under it.
  at: vec3f,
  h: f32,
  /// The walked-on shape's slope here.
  slope: vec2f,
  /// \`sandWetness\` here.
  wet: vec2f,
  /// Unit, from the point to the eye.
  view: vec3f,
  /// Metres of ground under a pixel: across the view and along the wind.
  px: f32,
  alongWind: f32,
  /// 1 in sun, 0 in the cube's shadow.
  sun: f32,
}

/// The light a pixel of sand sends to the eye.
fn sandLight(point: SandPoint, sun: vec3f) -> vec3f {
  let xz = point.at.xz;
  let hummocks = sandHummocks(xz, point.h);
  var slope = point.slope + hummocks.slope;

  // The ripples: drawn while a pixel resolves them, their average beyond.
  let drawn = 1.0 - smoothstep(0.2, 0.55, point.alongWind / RIPPLE_LENGTH);
  let dryness = sandDryness(point.h);
  var crest = 0.5;
  var stand = dryness * rippleSwathe(xz);
  var rippleSun = 1.0;
  if (drawn > 0.0) {
    let ripples = sandRipples(xz, point.h, sun);
    slope += drawn * ripples.relief.slope;
    crest = mix(crest, ripples.crest, drawn);
    stand = ripples.stand / RIPPLE_HEIGHT;
    rippleSun = ripples.sun;
  }
  let acrossSun = abs(dot(normalize(sun.xz), SAND_WIND));
  rippleSun = mix(1.0 - 0.42 * stand * acrossSun, rippleSun, drawn);

  var damp = 0.0;
  if (point.wet.x > 0.0) {
    damp =
      smoothstep(
        0.22,
        0.7,
        point.wet.x + 0.35 * (fbmd(xz / 0.35, SAND_SALT + 0x9bu, 3).x - 0.5),
      );
  }
  let film = point.wet.y;
  let grains = sandGrains(xz, point.px);
  let litter = sandLitter(xz, point.h, point.px, sun);
  slope += grains.slope * (1.0 - 0.6 * damp);
  slope = mix(slope, litter.slope, litter.cover);

  // Heavy dark grains gather in the troughs.
  var albedo =
    sandAlbedo(xz) * grains.tint * (1.0 - 0.16 * stand * (1.0 - crest));
  albedo = sandWetted(mix(albedo, litter.albedo, litter.cover), damp);

  let normal = normalize(vec3f(-slope.x, 1.0, -slope.y));
  let direct = SUN_LIGHT * (point.sun * rippleSun * litter.sun);
  let hollow = 1.0 - 0.16 * stand * (1.0 - crest);
  // Sunlit sand lights the shaded faces beside it, warm.
  let bounce =
    SUN_LIGHT * (point.sun * sun.y * 0.3) * DRY_SAND * (1.0 - 0.5 * normal.y);
  var light =
    albedo * (direct * sandDiffuse(normal, sun, point.view) + (sandFill(
      normal,
      sun,
    ) + bounce) * hollow);

  let half = normalize(sun + point.view);
  let dry = 1.0 - damp;
  // Dry quartz throws a broad sheen forward, toward an eye facing the sun.
  let toHalf = max(dot(normal, half), 0.0);
  let sheenLobe =
    0.09 / (SAND_PI * pow(toHalf * toHalf * (0.09 - 1.0) + 1.0, 2.0));
  let grazing = pow(1.0 - max(dot(point.view, half), 0.0), 5.0);
  light +=
    direct
      * dry
      * max(dot(normal, sun), 0.0)
      * (0.04 + 0.96 * grazing)
      * sheenLobe
      * 0.6;
  // Quartz lets a low sun through: seen against it, dry sand glows the sun's
  // colour, most where the eye grazes the ground along the sun's bearing.
  let sunward = max(-dot(normalize(point.view.xz), normalize(sun.xz)), 0.0);
  let through = pow(sunward, 1.5) * pow(1.0 - max(point.view.y, 0.0), 2.0);
  light +=
    direct
      * vec3f(0.8, 0.78, 0.5)
      * (0.17 * dry * through * (0.4 + 0.6 * crest));
  // Glints are a thing of the sand at one's feet and of the sun's own
  // bearing: further off, or to the side, a pixel holds only their average.
  let glints =
    (1.0 - smoothstep(0.0035, 0.009, point.px)) * smoothstep(
      0.55,
      0.9,
      sunward,
    );
  if (glints > 0.0) {
    let white = mix(direct, vec3f(dot(direct, vec3f(0.3, 0.5, 0.2))), 0.6);
    light +=
      white * dry * dry * 3.0 * glints * sandGlint(xz, normal, half, point.px);
  }
  light +=
    direct
      * litter.cover
      * litter.gloss
      * pow(max(dot(normal, half), 0.0), 60.0);

  // Wet sand: a sheen where it is soaked, the sky's mirror where water stands.
  if (damp > 0.0) {
    let level = point.slope + 0.3 * hummocks.slope;
    let flat = normalize(vec3f(-level.x, 1.0, -level.y));
    let lying = normalize(mix(normal, flat, 0.55 + 0.45 * film));
    // How much it mirrors goes by the lie of the sand, not of each grain.
    let facing = max(dot(flat, point.view), 0.0);
    let fresnel = 0.02 + 0.98 * pow(1.0 - facing, 5.0);
    // Even under a film the grains show through it, so the sun's mirror
    // image is a broad path of glare and not a disc.
    let rough = mix(0.24, 0.1, film);
    // Seen at a graze, the faces that would mirror the ground hide behind
    // their neighbours: what shows is the sky just over the horizon.
    let bounced = reflect(-point.view, lying);
    let mirrored =
      skyRadiance(
        normalize(vec3f(bounced.x, max(bounced.y, 0.04), bounced.z)),
        6.0 * rough,
      );
    let a2 = rough * rough * rough * rough;
    let nh = max(dot(lying, half), 0.0);
    let lobe = a2 / (SAND_PI * pow(nh * nh * (a2 - 1.0) + 1.0, 2.0));
    let glare =
      min(direct * (SAND_PI / 4.0) * lobe / max(facing, 0.05), vec3f(60.0));
    let sheen = fresnel * mix(0.9 * damp, 1.0, film);
    light =
      mix(light, mirrored, sheen) + sheen * glare * max(dot(lying, sun), 0.0);
  }
  return light;
}
`,sh,ng,t7,nz,n_,nI,nO,nT),nD={spokes:384,rings:500,inner:.4,growth:1.014},nU=tO("sand/sand-mesh-numbers",`
const SAND_SPOKES = ${String(nD.spokes)}u;
/// The angle between neighbouring spokes, radians.
const SAND_SPOKE_TURN = ${tE(2*Math.PI/nD.spokes)};
const SAND_INNER = ${tE(nD.inner)};
const SAND_GROWTH = ${tE(nD.growth)};
/// \`log(SAND_GROWTH)\`: a ring's spacing over its radius plus \`SAND_INNER\`.
const SAND_GROWTH_LOG = ${tE(Math.log(nD.growth))};
`),nC=tO("cube/widgets/outdoors/surface/sand/mesh/lib/sand-shader",`
/// Metres under still water below which the sea always covers the sand from
/// an eye over the still sea.
const SAND_SUNK = 0.9;

struct SandVertex {
  @builtin(position) clip: vec4f,
  @location(0) at: vec3f,
  /// x metres over still water of the walked-on shape, yz its slope.
  @location(1) shape: vec3f,
}

@vertex
fn vertexMain(@builtin(vertex_index) index: u32) -> SandVertex {
  let ring = f32(index / SAND_SPOKES);
  let bearing = f32(index % SAND_SPOKES) * SAND_SPOKE_TURN;
  let radius = SAND_INNER * (pow(SAND_GROWTH, ring) - 1.0);
  let xz = frame.eye.xz + radius * vec2f(cos(bearing), sin(bearing));
  let h = islandHeight(xz);
  let reach = 0.04 + 0.01 * radius;
  let slope =
    vec2f(
      islandHeight(xz + vec2f(reach, 0.0)) - h,
      islandHeight(xz + vec2f(0.0, reach)) - h,
    ) / reach;

  // The small relief lifts the mesh only where its triangles are finer than it.
  let spacing = (radius + SAND_INNER) * SAND_GROWTH_LOG;
  var lift =
    sandHummocks(xz, h).height * (1.0 - smoothstep(0.04, 0.12, spacing));
  let fine =
    1.0 - smoothstep(RIPPLE_LENGTH / 9.0, RIPPLE_LENGTH / 4.0, spacing);
  if (fine > 0.0) {
    lift += fine * sandRipples(xz, h, frame.sun.xyz).relief.height;
  }

  var out: SandVertex;
  out.at = vec3f(xz.x, h + lift, xz.y);
  out.shape = vec3f(h, slope);
  out.clip = clipOf(out.at);
  return out;
}

@fragment
fn fragmentMain(in: SandVertex) -> Scene {
  let acrossX = dpdx(in.at.xz);
  let acrossY = dpdy(in.at.xz);
  let drowned = frame.eye.y <= 0.0;
  if (in.shape.x < -SAND_SUNK && !drowned) {
    discard;
  }
  let wind = SAND_WIND;
  let toEye = frame.eye.xyz - in.at;
  let far = length(toEye);
  var point: SandPoint;
  point.at = in.at;
  point.h = in.shape.x;
  point.slope = in.shape.yz;
  // A swash sheet's edge is sharper than a triangle is small, so the sea is
  // asked at each pixel.
  point.wet = vec2f(select(0.0, 1.0, in.shape.x < 0.0));
  if (in.shape.x > -0.3 && in.shape.x < SWASH_TOP) {
    point.wet = sandWetness(in.at.xz, in.shape.x, frame.clock.x);
  }
  point.view = toEye / far;
  point.px = sqrt(length(acrossX) * length(acrossY));
  point.alongWind = abs(dot(acrossX, wind)) + abs(dot(acrossY, wind));
  // The shadow's edge rides the hummocks the mesh is too coarse to carry.
  let lifted = in.shape.x + sandHummocks(in.at.xz, in.shape.x).height;
  point.sun = cubeShadow(vec3f(in.at.x, max(in.at.y, lifted), in.at.z));
  let shown = sandLight(point, frame.sun.xyz);
  if (drowned) {
    let wetted = shown * kept(-in.at.y);
    return lit(throughWater(wetted, underStill(frame.eye.xyz, in.at)), far);
  }
  return lit(aerial(shown, -point.view, far), far);
}
`,oB,nh,rx,o4,nd,nS,nN,nU,nI,nO),nP=M=>Math.sqrt(9.81*M*(1+(M/370)**2)),nH=M=>9.81*(1+3*(M/370)**2)/(2*nP(M)),nG=M=>Math.max(1,Math.round(3600*nP(M)/rP));function nF(M,{peakOmega:L,sharpness:R}){let O=M/L,A=Math.exp(-((O-1)**2)/(2*(M<=L?.07:.09)**2));return O**-5*Math.exp(-1.25*O**-4)*R**A}function nW(M){let L=M-1,R=0;for(let[M,O]of[.9999999999998099,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23].entries())R+=0===M?O:O/(L+M);let O=L+7.5;return .5*Math.log(2*Math.PI)+(L+.5)*Math.log(O)-O+Math.log(R)}let nB=(M,{tailBend:L})=>(1+M/10)**L,n$=.001,nq=1e3;function nj(M,L,R=n$,O=nq){let A=Math.log(O/R)/2048,E=0;for(let O=0;O<2048;O+=1){let T=R*Math.exp((O+.5)*A);E+=L(T)*nF(nP(T),M)*nH(T)*nB(T,M)*T*A}return E}let nK=M=>M.significant**2/16/nj(M,()=>1),nY=(M,L=n$,R=nq)=>nK(M)*nj(M,M=>M*M,L,R),nV=[{tileSide:3200,kFrom:0,kTo:.157},{tileSide:200,kFrom:.157,kTo:2.5},{tileSide:25,kFrom:2.5,kTo:20},{tileSide:3.2,kFrom:20,kTo:160}],nX=nV.at(-1)?.kTo??nq,nZ=el("0"),nQ=eR(ey(ek({cascade:eS,p:eS,q:eS}),eb({re:eg(ev),im:eg(ev)})),M=>nZ(`island/sea/waves/${M}`)),nJ=M=>M<128?M:M-256,n0=tO("sea/shore-numbers",`
const OFFSHORE_FROM = ${tE(140)};
const OFFSHORE_TO = ${tE(260)};
const SWELL_DIES_FROM = ${tE(.3)};
const SWELL_DIES_TO = ${tE(3)};
`),n2=-Math.PI/4,n1=function(M,L){let R=-2,O=2;for(let A=0;A<50;A+=1){let A=(R+O)/2;nY({...M,tailBend:A})>L?O=A:R=A}return{...M,tailBend:(R+O)/2}}({peakOmega:22*.0018330685714285715**(1/3),significant:.0056*Math.sqrt(15e3/9.81),sharpness:3.3,towards:-.35,narrowness:12,tailBend:0},.003+.00512*3.5),n3=[{peakOmega:420*rP/3600,significant:.5,sharpness:8,towards:n2,narrowness:40,tailBend:0},n1],n5=nY(n1,nX)/2,n4=tO("sea/tables",`
const CASCADES = ${String(nV.length)}u;
const SIDES = array<f32, ${String(nV.length)}>(${nV.map(({tileSide:M})=>tE(M)).join(", ")});
const SPOKES = ${String(640)}u;
`),n6=tO("cube/widgets/outdoors/surface/sea/water/shore/lib/sea-shore",`
/// 0 by the island, 1 out where the open sea's own swell has taken over.
fn offshore(xz: vec2f) -> f32 {
  return smoothstep(OFFSHORE_FROM, OFFSHORE_TO, length(xz));
}

/// The slow surface the wind's waves ride at \`xz\`, metres over the still sea.
fn level(xz: vec2f) -> f32 {
  let off = offshore(xz);
  if (off >= 1.0) {
    return 0.0;
  }
  return (1.0 - off) * waterLevel(xz, frame.clock.x);
}

/// How much of each cascade water \`depth\` metres deep lets through, \`off\`
/// of the way offshore.
fn calmOver(off: f32, depth: f32) -> vec4f {
  return
    vec4f(
      off,
      smoothstep(SWELL_DIES_FROM, SWELL_DIES_TO, depth),
      smoothstep(0.05, 0.5, depth),
      smoothstep(0.004, 0.05, depth),
    );
}

/// \`calmOver\` at \`xz\` by the still sea's depth there.
fn calm(xz: vec2f) -> vec4f {
  let off = offshore(xz);
  if (off >= 1.0) {
    return vec4f(1.0);
  }
  return calmOver(off, -islandHeight(xz));
}

/// The surf and the swash at one point, now.
struct Shore {
  /// The sand, and the slow surface, metres over the still sea.
  bed: f32,
  level: f32,
  /// The point's own time: the clock less how long the swell takes to reach it.
  tau: f32,
  /// What the island's lee leaves of a wave here, 0.3 to 1.
  shelter: f32,
  /// Turns since the last crest passed, 0 to 1.
  phase: f32,
  /// 0 an unbroken swell, 1 a bore.
  broken: f32,
  /// Seconds since the last wave landed and the one before it, and how deep
  /// each one's sheet lies here.
  since: vec2f,
  sheet: vec2f,
}

/// Everything about the surf and the swash at \`xz\`, now.
fn shoreAt(xz: vec2f) -> Shore {
  var shore: Shore;
  let t = frame.clock.x;
  shore.bed = islandHeight(xz);
  let rise = shoreRise(xz);
  let facing = shoreFacing(dot(rise, SWELL_RUNS), length(rise), shore.bed);
  let depth = shoreDepth(shore.bed);
  shore.shelter = sheltered(facing);
  let tongue = cuspAt(xz);
  shore.tau = t - dot(xz, SWELL_RUNS) * SWELL_PACE - shoreDelay(depth);
  let turns = turnsAt(shore.tau);
  let n = floor(turns);
  shore.phase = turns - n;
  shore.broken = brokenAt(shore.tau, shore.bed, shore.shelter);
  shore.since = shore.tau - vec2f(crestOf(n), crestOf(n - 1.0));
  shore.sheet =
    vec2f(
      sheetDepth(n, shore.tau, shore.bed, shore.shelter * tongue),
      sheetDepth(n - 1.0, shore.tau, shore.bed, shore.shelter * tongue),
    );
  shore.level =
    swellLevel(dot(xz, SWELL_RUNS), shore.bed, shore.shelter, tongue, t);
  return shore;
}
`,rx,o4,st,r5,r1,sc,n0),n8=tO("sea/foam-numbers",`
const SWELL_PERIOD = ${tE(rH)};
`),n7=tO("cube/widgets/outdoors/surface/sea/water/foam/lib/sea-foam",`
/// Seconds over which the foam a breaker leaves behind thins to 1/e.
const TRAIL_LASTS = 2.2;
/// The same for the bubbles it drives under, which outlast the foam on top.
const BUBBLES_LAST = 5.0;
/// And for the foam riding a swash sheet.
const SHEET_LASTS = 3.2;
/// How many times longer than wide the swash draws the lace's cells.
const DRAWN_OUT = 1.8;
/// The still waterline's distance from the island's middle, metres, about.
const SHORE_RADIUS = 30.0;
/// How many times finer the lace is on a swash sheet than out on the surf.
const FOAM_FINER = 2.4;
/// Bubbles to a metre of foam, where it thins enough to show them apart.
const BUBBLES = 38.0;
/// Still depth, metres, by which a breaker's foam rides at full strength.
const SURF_FLOATS = 0.3;
/// How wide a breaker's roller is from front to back, metres, about.
const ROLLER_WIDE = 1.2;
/// A sheet thinner than this, metres, is its own white edge.
const FOAM_EDGE = 0.025;

/// How much of a pixel foam of thickness \`dense\` covers at \`p\` on the
/// lace's own plan: whole at 1 and over, then breaking into patches joined
/// by the threads that bubbles gather into along the walls between cells. A
/// pixel \`blur\` of that plan wide shows the threads and patches narrower
/// than itself as their mean, not as dots.
fn laceAt(p: vec2f, dense: f32, blur: f32) -> f32 {
  let warp =
    vec2f(fbm(p * 0.9, 11u, 3), fbm(p * 0.9 + vec2f(7.7, 3.1), 14u, 3)) - 0.5;
  let fold =
    vec2f(
      valueNoise(p * 3.7, 12u),
      valueNoise(p * 3.7 + vec2f(2.3, 9.1), 13u),
    ) - 0.5;
  let at = p + 0.9 * warp + 0.22 * fold;
  let patches =
    mix(0.5, fbm(at * 0.7, 17u, 4), 1.0 - smoothstep(0.7, 2.8, blur));
  let wide = 0.2 + 2.6 * blur;
  let wider = 0.4 + 9.0 * blur;
  // A thread drawn wider is drawn fainter, toward what the walls cover of
  // the sea on the whole, so the foam a far pixel shows is the near one's.
  // No wall runs whole round its cell: a thread swells, thins and breaks
  // off along its length, and its edge is frayed.
  let run = fbm(at * 1.9, 19u, 3);
  let strand = wide * mix(0.3, 1.15, run);
  let threads =
    smoothstep(0.36, 0.6, run) * mix(
      0.14,
      1.0 - smoothstep(0.0, strand, cellWalls(at * 2.6, 21u)),
      0.2 / wide,
    );
  let frayed =
    (fbm(p * 13.0, 24u, 2) - 0.5) * clamp(1.0 - 13.0 * blur, 0.0, 1.0);
  let fine =
    mix(
      0.29,
      1.0 - smoothstep(0.0, wider, cellWalls(at * 9.0, 22u)),
      0.4 / wider,
    );
  let body = 0.5 * patches + 0.36 * threads + 0.18 * fine + 0.07 * frayed;
  let open = 1.0 - 1.15 * min(dense, 1.0);
  let soft = 0.5 * min(blur, 1.0);
  return
    smoothstep(open - soft, open + 0.3 + soft, body) * smoothstep(
      0.02,
      0.1,
      dense,
    );
}

/// The lace at \`still\`, metres on the sea, in a pixel \`pixel\` metres
/// wide. Out on the surf its plan is the sea's own; on the beach the water
/// that carries it runs up and back, drawing the cells out up the sand, and a
/// sheet's thin foam breaks finer. The beach's plan is laid round the island
/// — metres along the shore by metres out from it — and joins itself on one
/// line in the island's lee.
fn lace(still: vec2f, dense: f32, shore: Shore, pixel: f32) -> f32 {
  if (dense <= 0.02) {
    return 0.0;
  }
  let ashore = smoothstep(-0.35, 0.0, shore.bed);
  var cover = 0.0;
  if (ashore < 1.0) {
    cover = laceAt(still, dense, pixel);
  }
  if (ashore > 0.0) {
    let out = max(length(still), 1.0);
    let round =
      atan2(
        still.x * SWELL_RUNS.y - still.y * SWELL_RUNS.x,
        -dot(still, SWELL_RUNS),
      );
    let beach =
      FOAM_FINER
        * SHORE_RADIUS
        * vec2f(log(out / SHORE_RADIUS) / DRAWN_OUT, round);
    cover =
      mix(
        cover,
        laceAt(beach, dense, FOAM_FINER * SHORE_RADIUS * pixel / out),
        ashore,
      );
  }
  // Where foam thins it comes apart into bubbles, the water between them
  // showing; a pixel wider than a bubble shows their mean.
  let apart =
    smoothstep(0.12, 0.45, cellWalls(still * BUBBLES, 23u)) * clamp(
      1.0 - BUBBLES * pixel,
      0.0,
      1.0,
    );
  return cover * (1.0 - apart * (1.0 - cover));
}

/// How much of a breaker's foam and bubbles the water at a point is deep
/// enough to carry: none where the still sea ends, all of it by
/// \`SURF_FLOATS\` metres deep, so the surf thins into the swash with no edge.
fn surfReaches(shore: Shore) -> f32 {
  return smoothstep(0.0, SURF_FLOATS, -shore.bed);
}

/// How thick the foam lies at \`still\`: the wind's whitecaps, where the
/// surface is squeezed to a point; a breaker's roller and what it leaves; and
/// the swash sheets' edges and backs. Over 1 where it is churning. A pixel
/// \`pixel\` metres wide shows a roller narrower than itself as its share
/// of the pixel.
fn foamThickness(still: vec2f, shore: Shore, squeeze: f32, pixel: f32) -> f32 {
  var dense = smoothstep(0.6, 1.1, -squeeze);
  let afloat = surfReaches(shore);
  if (afloat > 0.0 && shore.broken > 0.0) {
    // The roller's back edge is ragged: each stretch of crest lets go of
    // its foam a little sooner or later than the next.
    let ragged =
      shore.phase - 0.035 * mix(
        0.5,
        fbm(still * 1.7, 31u, 3),
        clamp(1.5 - 2.0 * pixel, 0.0, 1.0),
      );
    let roller =
      max(
        smoothstep(0.93, 0.965, shore.phase),
        1.0 - smoothstep(0.0, 0.035, ragged),
      );
    let trail = 0.75 * exp(-shore.phase * (SWELL_PERIOD / TRAIL_LASTS));
    let share = clamp(ROLLER_WIDE / pixel, 0.4, 1.0);
    dense =
      max(dense, afloat * shore.broken * max(1.4 * share * roller, trail));
  }
  for (var i = 0; i < 2; i++) {
    let sheet = shore.sheet[i];
    if (sheet > 0.0) {
      let since = shore.since[i];
      let edge =
        (1.0 - smoothstep(0.0, FOAM_EDGE, sheet)) * (0.35 + exp(
          -since / SHEET_LASTS,
        ));
      let back = 0.9 * exp(-since / SHEET_LASTS);
      dense = max(dense, max(edge, back) * smoothstep(0.0, 0.004, sheet));
    }
  }
  return dense;
}

/// The share of the water under a breaker's wake that is bubbles.
fn bubbles(shore: Shore) -> f32 {
  return
    surfReaches(shore)
      * shore.broken
      * exp(-shore.phase * (SWELL_PERIOD / BUBBLES_LAST));
}
`,r1,a1,n8,n6),n9=Math.log(40001)/511,ie=tO("sea/surface-numbers",`
const SEA_HUB = ${tE(.5)};
const SEA_GROWTH = ${tE(n9)};
const WAVE_TILE = ${tE(256)};
`),it=tO("cube/widgets/outdoors/surface/sea/water/face/lib/sea-surface",`
/// How far apart the slow surface is read for its own slope, metres.
const SWELL_STEP = 0.4;

struct SeaGrid {
  /// Which way the laid sector's middle spoke points, and its whole angle.
  yaw: f32,
  sector: f32,
}

@group(1) @binding(0) var<uniform> grid: SeaGrid;
@group(1) @binding(1) var waveSampler: sampler;
@group(1) @binding(2) var shiftMap: texture_2d_array<f32>;
@group(1) @binding(3) var slopeMap: texture_2d_array<f32>;
@group(1) @binding(4) var momentMap: texture_2d_array<f32>;

/// How far the wind's waves carry the still surface's point \`still\`, for a
/// mesh whose cells are \`cell\` metres wide there: waves a cell cannot draw
/// are left out.
fn carried(still: vec2f, cell: f32) -> vec3f {
  let quiet = calm(still);
  var shift = vec3f(0.0);
  for (var i = 0u; i < CASCADES; i++) {
    let texel = SIDES[i] / WAVE_TILE;
    let lod = max(log2(2.0 * cell / texel), 0.0);
    shift +=
      quiet[i] * textureSampleLevel(
        shiftMap,
        waveSampler,
        still / SIDES[i],
        i,
        lod,
      ).xyz;
  }
  return shift;
}

struct SeaVarying {
  @builtin(position) clip: vec4f,
  /// The point of the still sea this one was carried from.
  @location(0) still: vec2f,
  @location(1) world: vec3f,
  /// The slow surface's own slope, along x and z.
  @location(2) swell: vec2f,
  /// Clip z and w of the point brought a little toward the eye, which is the
  /// depth a thin sheet of water is drawn at so it lies over the sand's mesh.
  @location(3) lifted: vec2f,
}

/// One point of the sea's mesh, carried by the slow surface and the waves.
@vertex
fn seaVertex(@builtin(vertex_index) index: u32) -> SeaVarying {
  let ring = f32(index / (SPOKES + 1u));
  let spoke = f32(index % (SPOKES + 1u));
  let radius = SEA_HUB * (exp(SEA_GROWTH * ring) - 1.0);
  let angle = grid.yaw + (spoke / f32(SPOKES) - 0.5) * grid.sector;
  let still = frame.eye.xz + radius * vec2f(cos(angle), sin(angle));
  let cell =
    max(SEA_GROWTH * (radius + SEA_HUB), radius * grid.sector / f32(SPOKES));
  var out: SeaVarying;
  let slow = level(still);
  if (offshore(still) < 1.0) {
    let step = SWELL_STEP;
    out.swell =
      vec2f(
        level(still + vec2f(step, 0.0)) - slow,
        level(still + vec2f(0.0, step)) - slow,
      ) / step;
  }
  out.still = still;
  out.world = vec3f(still.x, slow, still.y) + carried(still, cell);
  out.clip = clipOf(out.world);
  let toEye = frame.eye.xyz - out.world;
  let far = length(toEye);
  let lift = (0.01 + 0.001 * far) / max(toEye.y / far, 0.05);
  out.lifted = clipOf(out.world + toEye / far * min(lift, 0.5 * far)).zw;
  return out;
}

/// What the waves under one pixel amount to.
struct Waves {
  /// The mean gradient of the surface's height, along x and z.
  slope: vec2f,
  /// The gradient's variance about that mean, along x and z, and their
  /// covariance: the waves the pixel is too coarse to show.
  spread: vec3f,
  /// How much the surface is squeezed sideways (negative at a sharp crest).
  squeeze: f32,
}

/// The wind's waves about \`still\`, filtered over the pixel's footprint
/// \`across\` and \`down\` the screen, each cascade let through by \`quiet\`.
fn wavesAt(still: vec2f, across: vec2f, down: vec2f, quiet: vec4f) -> Waves {
  var waves: Waves;
  for (var i = 0u; i < CASCADES; i++) {
    let at = still / SIDES[i];
    let dx = across / SIDES[i];
    let dy = down / SIDES[i];
    let slope = textureSampleGrad(slopeMap, waveSampler, at, i, dx, dy);
    let moment = textureSampleGrad(momentMap, waveSampler, at, i, dx, dy).xyz;
    let share = quiet[i];
    waves.slope += share * slope.xy;
    waves.squeeze += share * (slope.z + slope.w);
    waves.spread +=
      share
        * share
        * max(
          moment - vec3f(
            slope.x * slope.x,
            slope.y * slope.y,
            slope.x * slope.y,
          ),
          vec3f(0.0, 0.0, -1.0),
        );
  }
  return waves;
}
`,o4,nd,n6,ie,n4),ia=tO("cube/widgets/outdoors/surface/sea/water/face/lib/sea-light",`
/// The least cosine between a facet's normal and the eye's line it is lit at.
const TURNED = 0.02;
/// The sun's disc, as the spread of slopes that mirror some part of it.
const DISC_SPREAD = 6e-6;

/// The sky map's level whose texels are as wide as the lobe a surface with
/// slope deviation \`deviation\` smears a reflection over — never under 1,
/// below which the sky draws its sun's disc, which is the glitter's to draw.
fn skyLod(deviation: f32) -> f32 {
  return clamp(log2(max(4.0 * deviation, 1e-4) * 512.0 / 3.14159), 1.0, 8.0);
}

/// What a sea surface sends the eye by reflection.
struct Mirrored {
  /// The sky's light, already weighed by how much each facet reflects.
  sky: vec3f,
  /// The mean share reflected, so the rest is what enters the water.
  share: f32,
  /// The area the eye sees of a unit of sea, facets hidden by others left out.
  shown: f32,
}

/// The sky in waves of slope \`waves.slope\` \xb1 \`waves.spread\`, seen along
/// \`toEye\`. Three facets stand for the spread along the line of sight: at
/// a glancing eye the ones leaning away hide behind the ones leaning in, which
/// is why a horizon neither mirrors the sky at its edge nor goes black.
fn mirrored(waves: Waves, toEye: vec3f) -> Mirrored {
  let ahead = normalize(toEye.xz + vec2f(1e-6, 0.0));
  let along =
    sqrt(
      max(
        waves.spread.x * ahead.x * ahead.x
          + waves.spread.y * ahead.y * ahead.y
          + 2.0 * waves.spread.z * ahead.x * ahead.y,
        0.0,
      ),
    );
  let lod = skyLod(sqrt(waves.spread.x + waves.spread.y));
  var out: Mirrored;
  var weight = 0.0;
  for (var i = -1; i <= 1; i++) {
    // Gauss–Hermite: the mean and one point 1.732 deviations either side.
    let lean = waves.slope - 1.7320508 * f32(i) * along * ahead;
    let leant = normalize(vec3f(-lean.x, 1.0, -lean.y));
    // A facet the eye could only see from behind is one the mesh drew too
    // smooth to hide: it shows as the nearest facet that does face the eye.
    let normal =
      normalize(leant + toEye * max(TURNED - dot(leant, toEye), 0.0));
    let facing = dot(normal, toEye);
    let area = select(1.0, 4.0, i == 0) / 6.0 * facing / normal.y;
    var bounce = reflect(-toEye, normal);
    bounce.y = abs(bounce.y);
    let share = fresnel(facing);
    out.sky += area * share * skyRadiance(bounce, lod);
    out.share += area * share;
    weight += area;
  }
  out.shown = max(weight, 1e-4);
  out.sky /= out.shown;
  out.share /= out.shown;
  return out;
}

/// The sun's glitter: the share of facets under the pixel that stand at just
/// the slope that mirrors the sun to the eye, as a Gaussian about the mean
/// slope (Cox & Munk 1954), over the area of sea the eye sees.
fn glitter(waves: Waves, toEye: vec3f, shown: f32) -> vec3f {
  let half = normalize(toEye + frame.sun.xyz);
  if (half.y <= 0.0) {
    return vec3f(0.0);
  }
  let off = -half.xz / half.y - waves.slope;
  let sx = waves.spread.x + DISC_SPREAD;
  let sz = waves.spread.y + DISC_SPREAD;
  let cross = waves.spread.z;
  let det = max(sx * sz - cross * cross, 1e-12);
  let fit =
    (sz * off.x * off.x
      - 2.0 * cross * off.x * off.y
      + sx * off.y * off.y) / det;
  let density = exp(-0.5 * fit) / (6.2831853 * sqrt(det));
  let lifted = half.y * half.y;
  let light =
    fresnel(dot(toEye, half)) * density / (4.0 * shown * lifted * lifted);
  return SUN_LIGHT * min(3.14159 * light, 1200.0);
}

/// What deep water shows of \`falling\`, the light a white face would show
/// under the same sky: what its own scattering returns before absorption
/// takes the rest (Gordon et al. 1975).
fn upwelling(falling: vec3f) -> vec3f {
  return falling * 0.33 * BACKSCATTER / (ABSORB + BACKSCATTER);
}
`,o4,ng,t7,it,nS,nk),ir=tO("sea/numbers",`
const UNSEEN_SPREAD = ${tE(n5)};
`),is=tO("cube/widgets/outdoors/surface/sea/water/face/lib/sea",`
/// Water deeper than this, metres, shows none of its bed.
const BED_SHOWS = 24.0;
/// The cosine of the sun's rays to the vertical once they are in the water.
const SUN_SINKS = 0.67;
/// How strongly a ripple's curve brightens the bed under it.
const CAUSTIC = 4.0;
/// The depth, metres, over which the bed's light pattern fades by 1/e.
const CAUSTIC_FADES = 3.0;
/// The width a ray is blurred over on the bed, per metre of water above.
const CAUSTIC_BLUR = 0.12;
/// What foam returns of the light on it.
const FOAM = 0.8;
/// How much of the sky's light on foam is the horizon's: foam stands in
/// lumps, whose flanks face the horizon and not the zenith.
const FOAM_FLANKS = 0.4;
/// What water full of bubbles returns, of the light a white face would show.
const AERATED = vec3f(0.1, 0.24, 0.22);
/// What a crest a metre thick lets through of the sun behind it.
const CREST_GLOW = vec3f(0.01, 0.1, 0.085);

struct SeaOut {
  @location(0) light: vec4f,
  @location(1) mirror: vec4f,
  @location(2) plane: vec4f,
  @builtin(frag_depth) depth: f32,
}

/// Where a ray entering water \`column\` metres deep at \`start\` meets the bed.
fn bedUnder(start: vec3f, ray: vec3f, column: f32) -> vec3f {
  let sinks = max(-ray.y, 0.2);
  var reach = column / sinks;
  for (var i = 0; i < 3; i++) {
    let at = start + ray * reach;
    reach = max(reach + (at.y - islandHeight(at.xz)) / sinks, 0.0);
  }
  return start + ray * reach;
}

/// How the ripples over \`xz\` gather the sun on a bed \`over\` metres under
/// them, about 1: a crest is a lens, and the deeper the bed the wider the
/// ripples whose light comes to a line on it, until they all blur together.
fn gathered(xz: vec2f, over: f32) -> f32 {
  let quiet = calm(xz);
  var bent = 0.0;
  for (var i = 2u; i < CASCADES; i++) {
    let lod = max(log2(over * (WAVE_TILE * CAUSTIC_BLUR) / SIDES[i]), 0.0);
    let curve =
      textureSampleLevel(slopeMap, waveSampler, xz / SIDES[i], i, lod).zw;
    bent -= quiet[i] * (curve.x + curve.y);
  }
  let strength =
    CAUSTIC * smoothstep(0.0, 0.3, over) * exp(-over / CAUSTIC_FADES);
  return exp(clamp(strength * bent, -1.0, 1.4));
}

/// One pixel of the sea, lit, from above or from under it.
@fragment
fn seaFragment(in: SeaVarying, @builtin(front_facing) above: bool) -> SeaOut {
  let across = dpdx(in.still);
  let down = dpdy(in.still);
  let reach = in.world - frame.eye.xyz;
  let far = length(reach);
  let toEye = -reach / far;

  var shore: Shore;
  shore.bed = -BED_SHOWS;
  let off = offshore(in.still);
  if (off < 1.0) {
    shore = shoreAt(in.still);
  }
  let column = shore.level - shore.bed;
  if (column < 0.002) {
    discard;
  }

  // The ripples a pixel shows ride the water that is there at this moment,
  // a swash sheet included; the mesh keeps to the still depth.
  var quiet = vec4f(1.0);
  if (off < 1.0) {
    quiet = calmOver(off, column);
  }
  var waves = wavesAt(in.still, across, down, quiet);
  waves.slope += in.swell;
  waves.spread += vec3f(UNSEEN_SPREAD, UNSEEN_SPREAD, 0.0);
  let normal = normalize(vec3f(-waves.slope.x, 1.0, -waves.slope.y));
  let sunlit = cubeShadow(in.world);
  let seen = mirrored(waves, toEye);

  let falling = sunEntering() * sunlit + SKY_FILL;
  var under = upwelling(falling);
  if (column < BED_SHOWS) {
    let bed = bedUnder(in.world, refract(-toEye, normal, 0.75), column);
    let through = length(bed - in.world);
    let over = max(shore.level - bed.y, 0.0);
    // The sky is too wide a lamp to come to a line, but its brighter half
    // still gathers a little.
    let gather = gathered(bed.xz, over);
    let lit =
      sandBed(bed.xz, over) * (sunEntering()
        * cubeShadow(bed)
        * kept(over / SUN_SINKS)
        * gather + SKY_FILL * kept(over) * mix(1.0, gather, 0.3));
    let shows = smoothstep(BED_SHOWS, 0.5 * BED_SHOWS, column);
    under =
      mix(
        under,
        lit * kept(through) + under * (vec3f(1.0) - kept(1.5 * through)),
        shows,
      );
  }

  under = mix(under, AERATED * falling, 0.7 * bubbles(shore));
  // Light through a crest that stands between the eye and the sun.
  let against = max(dot(toEye, -frame.sun.xyz), 0.0);
  under +=
    sunlit
      * SUN_LIGHT
      * CREST_GLOW
      * smoothstep(0.05, 0.5, in.world.y)
      * against
      * against
      * against;

  if (!above && frame.eye.y < in.world.y) {
    // The surface from under it: the sky through the window overhead, and
    // round that the water's own body mirrored back down.
    var body = DROWNED * falling;
    let out = refract(-toEye, -normal, 1.333);
    if (dot(out, out) > 0.0) {
      body =
        mix(body, skyRadiance(out, 2.0), 1.0 - fresnel(dot(toEye, -normal)));
    }
    var drowned: SeaOut;
    drowned.light = vec4f(body, min(far, SKY_METRES));
    drowned.depth = in.clip.z;
    return drowned;
  }

  let water =
    seen.sky
      + (1.0 - seen.share) * under
      + sunlit * glitter(waves, toEye, seen.shown);
  // A roller is filtered by the pixel's longer side; the lace by the mean
  // of its two, since a glancing pixel is long one way only.
  let pixel = max(length(across), length(down));
  let thick = foamThickness(in.still, shore, waves.squeeze, pixel);
  // Churning foam stands in lumps, each shading the next from a low sun.
  let lumps = smoothstep(0.3, 0.7, fbm(in.still * 2.3, 43u, 4));
  let heaped = mix(1.0, mix(0.5, 1.08, lumps), smoothstep(0.9, 1.3, thick));
  let white =
    FOAM * (SUN_LIGHT
      * sunlit
      * heaped
      * (0.3 + 0.7 * max(dot(normal, frame.sun.xyz), 0.0)) + mix(
      SKY_FILL,
      HORIZON_FILL,
      FOAM_FLANKS,
    ));
  let foam = lace(in.still, thick, shore, sqrt(length(across) * length(down)));
  // Thin foam is a film the water shows through; churning foam is white.
  let froth = 0.78 + 0.3 * fbm(in.still * 6.0, 41u, 3);
  let colour = mix(water, white * froth * mix(0.8, 1.0, min(thick, 1.0)), foam);

  var out: SeaOut;
  out.light = vec4f(aerial(colour, -toEye, far), min(far, SKY_METRES));
  let ashore = smoothstep(-0.6, -0.2, shore.bed);
  out.depth = mix(in.clip.z, in.lifted.x / in.lifted.y, ashore);
  return out;
}
`,oB,nh,rx,o4,ng,nb,t7,nz,a1,n7,ia,ir,n6,it,ie,n4,nS),il=["side","top","underside","reveal","stile","rung"],io=[[0,1,2],[1,2,0],[2,0,1]],ii=el("0"),{salt:ic}=eR(eb({salt:ew(0,0x80000000)}),M=>ii(`cube/shell/${M}`)),iu=tO("shell/salt",`
const SHELL_SALT = ${Math.floor(ic)}u;
`),ih=tO("cube/widgets/outdoors/surface/shell/lib/shell-material",`
const TURN = 6.2831853;
const HOUR = 3600.0;
/// What the sand shows of the evening, as a face looking down at it gathers
/// it.
const SAND_LIGHT = vec3f(0.72, 0.6, 0.44) * (SUN_LIGHT * SUN_DIR.y + SKY_FILL);

/// What a ray leaving the cube along \`dir\` shows, blurred by \`lod\`: the sky,
/// and under the horizon the sea and the sand.
fn surround(dir: vec3f, lod: f32) -> vec3f {
  let up = normalize(vec3f(dir.x, abs(dir.y) + 0.01, dir.z));
  let sky = skyRadiance(up, lod);
  let sea = sky * 0.45 + vec3f(0.02, 0.05, 0.07);
  let ground = mix(sea, SAND_LIGHT, smoothstep(0.04, 0.3, -dir.y));
  return mix(sky, ground, smoothstep(-0.01, 0.02 + 0.02 * lod, -dir.y));
}

/// \`light\` as the shell gives it back: a low sun and gold sand warm it a
/// little, where their colour taken whole would turn black and grey brown.
fn cooled(light: vec3f) -> vec3f {
  let level = dot(light, vec3f(0.2126, 0.7152, 0.0722));
  return mix(light, level * vec3f(0.95, 1.0, 1.07), 0.8);
}

struct Band {
  /// 1 in a near-black band, 0 in a grey one, between where they blur.
  dark: f32,
  /// How much of the point is the line between two bands.
  line: f32,
  /// Which band, the first 0, and how tall it is, in \`share\`.
  level: f32,
  tall: f32,
  /// 0 where bands are told apart, 1 where a pixel holds several.
  blurred: f32,
}

/// The floors as bands on a face, each half the one before: \`share\` runs from
/// 1 at the first band's start to 0, where they are too many to tell apart.
fn bandAt(share: f32, pixel: f32) -> Band {
  let r = clamp(share, 1e-5, 1.0);
  let level = floor(-log2(r));
  let size = exp2(-level);
  let tall = 0.5 * size;
  let within = (size - r) / tall;
  let blurred = smoothstep(0.3, 1.4, pixel / tall);
  let odd = level - 2.0 * floor(0.5 * level);
  // The line between two bands is 12 mm wide, a share of the cube's 5 m.
  let wide = min(0.0024, 0.1 * tall);
  let edge = min(within, 1.0 - within) * tall;
  let line = 1.0 - smoothstep(wide - pixel, wide + pixel, edge);
  return
    Band(
      mix(1.0 - odd, 0.5, blurred),
      mix(line, 0.3, blurred),
      level,
      tall,
      blurred,
    );
}

/// A sparse lattice of small lights \`cell\` metres apart at \`at\`, each
/// coming and going on a beat of its own.
fn lattice(at: vec2f, cell: f32, salt: u32, pixel: f32) -> f32 {
  let p = at / cell;
  let home = vec2i(floor(p));
  let h = cellHash(home, salt);
  let on = step(0.62, unitOf(h));
  // One in some thirty is a bright one.
  let bright = 1.0 + 6.0 * step(0.965, unitOf(mix32(h + 41u)));
  let off = fract(p) - 0.5;
  let beats = 300.0 + floor(unitOf(mix32(h + 13u)) * 600.0);
  let lit =
    0.5 + 0.5 * cos(
      TURN * (beats * frame.clock.x / HOUR + unitOf(mix32(h + 29u))),
    );
  let size = max(0.02, pixel / cell);
  return
    on
      * bright
      * lit
      * lit
      * (0.02 * 0.02)
      / (size * size)
      * (1.0 - smoothstep(0.0, size, length(off)));
}

struct Face {
  /// The point, the way its face looks, and the unit way to the eye.
  world: vec3f,
  normal: vec3f,
  toEye: vec3f,
  /// The point on its face, in metres, and that face's axes in the world.
  on: vec2f,
  along: vec3f,
  down: vec3f,
  /// How wide a pixel is there, in metres.
  pixel: f32,
  /// How much of the sun reaches it.
  sun: f32,
}

/// The light of a point of the shell's material in band \`band\`; \`depth\`
/// is how many layers of lights stand under its surface where it is black,
/// \`glance\` how much of a mirror it is seen along itself.
fn shellFace(f: Face, band: Band, depth: i32, glance: f32) -> vec3f {
  let facing = dot(f.normal, f.toEye);
  let grazing = pow(1.0 - clamp(facing, 0.0, 1.0), 5.0);
  let towards = max(dot(f.normal, SUN_DIR), 0.0);
  let sunlit = step(0.0, dot(f.normal, SUN_DIR)) * f.sun;

  // The colour of the grey, the black and the line between two bands.
  let base =
    mix(vec3f(0.012, 0.0132, 0.0152), vec3f(0.008, 0.009, 0.011), band.dark);
  let albedo = mix(base, vec3f(0.05, 0.052, 0.058), band.line);
  let fill =
    SKY_FILL * (0.5 + 0.5 * f.normal.y) + SAND_LIGHT * (0.5 - 0.5 * f.normal.y);
  let sunLight = mix(cooled(SUN_LIGHT), SUN_LIGHT, band.dark);
  var light = albedo * (sunLight * towards * f.sun + fill);

  // The mirror in it: sharp in the black, a satin blur in the grey, with a faint
  // cool sheen where a face that mirrors is seen along itself.
  let mirror = mix(0.11, 0.06, band.dark);
  let share = mirror + max(glance - mirror, 0.0) * grazing;
  let blur = mix(3.2, 0.4, band.dark);
  let film =
    vec3f(0.86, 0.97, 1.1) + 0.06 * cos(
      TURN * (vec3f(0.0, 0.33, 0.67)
        + 1.3 * (1.0 - facing)
        + 0.11 * band.level),
    );
  let tint =
    mix(
      vec3f(1.0),
      film,
      0.3 * smoothstep(0.1, 0.5, glance) * (1.0 - facing) * (1.0 - facing),
    );
  let mirrored = surround(reflect(-f.toEye, f.normal), blur);
  // Cooled in the black too: gold sand mirrored whole would turn it brown.
  light += cooled(mirrored) * share * tint;

  // The sun's own sheen on the brushed grey, drawn out down the face.
  let mid = normalize(SUN_DIR + f.toEye);
  let across = dot(mid, f.along);
  let sheen =
    pow(max(1.0 - across * across, 0.0), 400.0) * pow(
      max(dot(f.normal, mid), 0.0),
      24.0,
    );
  let skim = pow(1.0 - max(dot(mid, f.toEye), 0.0), 5.0);
  light +=
    sunLight
      * sunlit
      * (1.0 - band.dark)
      * sheen
      * (0.03 + 0.97 * skim)
      * 0.8
      * tint;

  // The lights under the black, each layer deeper and farther apart.
  let slide =
    vec2f(dot(f.toEye, f.along), dot(f.toEye, f.down)) / max(facing, 0.2);
  let metres = band.tall * 5.0;
  var under = 0.0;
  for (var layer = 0; layer < depth; layer++) {
    let deep = f32(layer + 1);
    let cell = max(0.25 * metres, 0.02) * (0.6 + 0.4 * deep);
    under +=
      lattice(
        f.on - slide * cell * (0.4 + 0.8 * f32(layer)),
        cell,
        SHELL_SALT + 71u + u32(layer),
        f.pixel,
      ) / deep;
  }
  light +=
    vec3f(0.62, 0.84, 1.0)
      * under
      * (0.6 + 0.5 * f32(depth))
      * band.dark
      * (1.0 - band.blurred)
      * (1.0 - band.line);

  // The lines' own light, a beat of it running down the floors each minute.
  let beat =
    0.5 + 0.5 * cos(TURN * (60.0 * frame.clock.x / HOUR - 0.125 * band.level));
  light += vec3f(0.5, 0.78, 1.0) * band.line * (0.45 + 1.4 * pow(beat, 6.0));
  return light;
}
`,o4,ng,t7,a1,iu),id=M=>(il.indexOf(M)-.5).toFixed(1),im=tO("shell/shader-numbers",`
const SHELL_TOP_FROM = ${id("top")};
const SHELL_UNDERSIDE_FROM = ${id("underside")};
const SHELL_REVEAL_FROM = ${id("reveal")};
const SHELL_STILE_FROM = ${id("stile")};
const SHELL_RUNG_FROM = ${id("rung")};
`),ip=tO("cube/widgets/outdoors/surface/shell/lib/shell-shader",`
/// The ladder's wood where the weather has left it brown, and where the sun
/// has bleached it silver.
const WOOD_BROWN = vec3f(0.13, 0.092, 0.06);
const WOOD_SILVER = vec3f(0.19, 0.186, 0.178);

struct ShellVertex {
  @location(0) at: vec3f,
  @location(1) facing: vec3f,
  @location(2) on: vec2f,
  @location(3) kind: f32,
}

struct ShellSeen {
  @builtin(position) clip: vec4f,
  @location(0) world: vec3f,
  @location(1) facing: vec3f,
  @location(2) on: vec2f,
  @location(3) @interpolate(flat) kind: f32,
}

@vertex
fn vertexMain(v: ShellVertex) -> ShellSeen {
  // A ladder that is gone is drawn nowhere: its triangles close to a point.
  let gone = v.kind > SHELL_STILE_FROM && frame.state.x < 0.5;
  let clip = select(clipOf(v.at), vec4f(0.0), gone);
  return ShellSeen(clip, v.at, v.facing, v.on, v.kind);
}

/// How far in from a cap's edge a point of it is: 1 at the edge, 0 at the
/// middle.
fn outward(on: vec2f) -> f32 {
  let off = abs(on / CUBE_METRES - 0.5) * 2.0;
  return max(off.x, off.y);
}

/// The ladder's wood at \`grain\`, metres along a member and round it:
/// its colour there, weathered grey-brown, the grain running along, split
/// by drying checks and carrying the odd knot. \`worn\` is how much hands
/// and feet have rubbed the place smooth and pale.
fn wood(grain: vec2f, worn: f32) -> vec3f {
  // The grain wanders a little from straight, as the tree grew.
  let wander = 0.004 * valueNoise(grain * vec2f(2.5, 9.0), SHELL_SALT + 81u);
  let fibre =
    fbm(vec2f(grain.x * 6.0, (grain.y + wander) * 330.0), SHELL_SALT + 82u, 3);
  let ring =
    0.5 + 0.5 * cos(
      TURN * ((grain.y + wander) * 95.0 + 2.0 * valueNoise(
        grain * vec2f(1.3, 40.0),
        SHELL_SALT + 83u,
      )),
    );
  let bleached = fbm(grain * vec2f(1.7, 30.0), SHELL_SALT + 84u, 3);
  let check =
    smoothstep(
      0.86,
      0.93,
      valueNoise(
        vec2f(grain.x * 3.0, (grain.y + wander) * 260.0),
        SHELL_SALT + 85u,
      ),
    ) * smoothstep(
      0.35,
      0.6,
      valueNoise(grain * vec2f(4.0, 12.0), SHELL_SALT + 86u),
    );
  let knot =
    1.0 - smoothstep(
      0.0,
      0.12,
      worley(grain * vec2f(4.5, 55.0), SHELL_SALT + 87u).x,
    );
  let silver = clamp(0.35 + 0.9 * bleached + 0.4 * worn, 0.0, 1.0);
  var colour = mix(WOOD_BROWN, WOOD_SILVER, silver);
  colour *= 0.5 + 0.45 * fibre + 0.3 * ring * (1.0 - 0.6 * worn);
  colour = mix(colour, WOOD_BROWN * 0.35, 0.8 * knot);
  return colour * (1.0 - 0.75 * check * (1.0 - worn));
}

@fragment
fn fragmentMain(s: ShellSeen) -> Scene {
  let flat = normalize(s.facing);
  var normal = flat;
  let metres = metresTo(s.world);
  let toEye = (frame.eye.xyz - s.world) / metres;
  let pixel = max(length(fwidth(s.world)), 1e-4);
  // A face seen from behind is the inside of the shell, which the rooms are.
  if (dot(flat, toEye) < 0.0) {
    discard;
  }
  var light: vec3f;

  if (s.kind > SHELL_STILE_FROM) {
    // The ladder: its grain runs up a stile and along a rung.
    let off = s.world - LADDER_FOOT;
    let up = dot(off, LADDER_UP);
    let across = dot(off, LADDER_ACROSS);
    let out = dot(off, LADDER_OUT);
    let isRung = s.kind > SHELL_RUNG_FROM;
    var grain: vec2f;
    var worn = 0.0;
    if (isRung) {
      // A rung is a round bar: lit as one, and worn where it is stepped on.
      let step = round((up - LADDER_RUNGS.x) / LADDER_SIZE.w);
      let spoke = vec2f(up - LADDER_RUNGS.x - step * LADDER_SIZE.w, out);
      normal = normalize(LADDER_UP * spoke.x + LADDER_OUT * spoke.y);
      let turn = atan2(spoke.y, spoke.x);
      grain =
        vec2f(across + 7.0 * step, 0.5 * LADDER_RUNGS.z * turn + 0.31 * step);
      worn =
        (1.0 - smoothstep(0.05, 0.16, abs(across))) * smoothstep(
          -0.3,
          0.6,
          cos(turn),
        );
    } else {
      // A stile's four faces are four cuts of one piece: each its own way
      // through the grain, the two stiles two pieces.
      let side = sign(across);
      let through = dot(abs(flat), abs(LADDER_ACROSS));
      grain =
        vec2f(
          up + 11.0 * side,
          mix(across, out, through) + 0.07 * through + 0.19 * side,
        );
      // Hands have rubbed the stiles' edges where a climber holds them.
      worn = 0.35 * smoothstep(0.5, 2.5, up) * (1.0 - through);
    }
    let albedo = wood(grain, worn);
    let sun = cubeShadow(s.world + normal * 0.004);
    let towards = max(dot(normal, SUN_DIR), 0.0);
    let fill =
      SKY_FILL * (0.5 + 0.5 * normal.y) + SAND_LIGHT * (0.5 - 0.5 * normal.y);
    // Rubbed wood takes a dull polish, which the low sun finds.
    let mid = normalize(SUN_DIR + toEye);
    let polish = 0.05 * worn * pow(max(dot(normal, mid), 0.0), 30.0);
    light =
      albedo * (SUN_LIGHT * towards * sun + fill) + SUN_LIGHT * sun * polish;
  } else {
    let sun = cubeShadow(s.world + normal * 0.004);
    var face =
      Face(
        s.world,
        normal,
        toEye,
        s.on,
        cross(vec3f(0.0, -1.0, 0.0), normal),
        vec3f(0.0, -1.0, 0.0),
        pixel,
        sun,
      );
    var band: Band;
    var depth = 2;
    var glance = 0.5;
    var bounce = vec3f(0.0);
    if (s.kind > SHELL_REVEAL_FROM) {
      // The reveal: the grey all the way through the wall.
      band = Band(0.0, 0.0, 1.0, 1.0, 0.0);
      face.along = vec3f(0.0, 0.0, 1.0);
      face.down = vec3f(-1.0, 0.0, 0.0);
    } else if (s.kind > SHELL_UNDERSIDE_FROM) {
      // The underside: the floors go on outward from its middle, over a
      // well of lights.
      let pixelShare = pixel / (0.5 * CUBE_METRES);
      band = bandAt(1.0 - outward(s.on), pixelShare);
      band.dark = mix(1.0, band.dark, 0.35);
      // Its lines are for whoever looks up at it; seen along it from the
      // beach they would run together, so only its rim is lit there.
      let rim = smoothstep(0.98, 0.988, outward(s.on));
      band.line =
        max(band.line * smoothstep(0.08, 0.35, dot(normal, toEye)), rim);
      face.along = vec3f(1.0, 0.0, 0.0);
      face.down = vec3f(0.0, 0.0, 1.0);
      depth = 5;
      // Seen from the beach it is all glance: left a mirror, it would show
      // the sand as bright as the gap under it.
      glance = 0.1;
      // Toward its edges it faces the sand the sun still reaches, which
      // lights it from below.
      bounce =
        cooled(SAND_LIGHT) * 0.035 * smoothstep(0.55, 1.0, outward(s.on));
    } else if (s.kind > SHELL_TOP_FROM) {
      // The top: the first floor's black folds over the edge, and the rest
      // halve inward to the middle.
      band = bandAt(outward(s.on), pixel / (0.5 * CUBE_METRES));
      face.along = vec3f(0.0, 0.0, 1.0);
      face.down = vec3f(1.0, 0.0, 0.0);
    } else {
      band = bandAt(1.0 - s.on.y / CUBE_METRES, pixel / CUBE_METRES);
    }
    light = shellFace(face, band, depth, glance) + bounce;
  }
  return lit(aerial(light, -toEye, metres), metres);
}
`,nd,o4,rE,rC,nh,oB,t7,a1,ih,iu,im),iv=[nR],ig=[nM],ib=[ip],iw=[is];async function ix(M){let{messages:L}=await M.getCompilationInfo(),R=L.filter(({type:M})=>"error"===M);return 0===R.length?null:R.map(({lineNum:M,linePos:L,message:R})=>`${String(M)}:${String(L)} ${R}`).join("; ")}async function iy(M,L,R){let O=M.createShaderModule({label:L,code:R}),A=await ix(O);if(null!==A)throw Error(`${L}: ${A}`);return O}let ik=["sky","sand","shell","sea"],iS=async({device:M,shader:L,pipeline:R})=>{let O=function(){let{spokes:M,rings:L}=nD,R=new Uint32Array((L-1)*M*6),O=0;for(let A=0;A<L-1;A+=1)for(let L=0;L<M;L+=1){let E=A*M+L,T=A*M+(L+1)%M,I=E+M,z=T+M;R.set([E,I,z,E,z,T],O),O+=6}return R}(),A=M.createBuffer({label:"sand indices",size:O.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});M.queue.writeBuffer(A,0,O);let E=await R({label:"sand",module:await L("sand",[nC]),depth:"solid",cullMode:"none"});return{draw(M){M.setPipeline(E),M.setIndexBuffer(A,"uint32"),M.drawIndexed(O.length)},dispose(){A.destroy()}}},iM=tO("cube/widgets/outdoors/scene/wave/field/lib/wave-complex",`
fn times(a: vec2f, b: vec2f) -> vec2f {
  return vec2f(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

/// Two real fields' spectra as one complex one: \`a + i b\`.
fn paired(a: vec2f, b: vec2f) -> vec2f {
  return vec2f(a.x - b.y, a.y + b.x);
}
`),iL=2*nV.length,iR=tO("sea/wave-field-numbers",`
const TAU = ${tE(rP)};
const FIELD_TILE = ${String(256)}u;
const FIELD_HOUR = ${String(3600)}u;
const FIELD_CHOP = ${tE(.92)};
`),iO=tO("cube/widgets/outdoors/scene/wave/field/lib/wave-evolve",`
struct Moment {
  /// Whole seconds into the hour, and the rest of the second.
  whole: u32,
  part: f32,
  /// Metres each cascade's tile spans.
  sides: vec4f,
}

@group(0) @binding(0) var<uniform> moment: Moment;
@group(0) @binding(1) var waves: texture_2d_array<f32>;
@group(0) @binding(2) var turns: texture_2d_array<u32>;
@group(0) @binding(3) var field: texture_storage_2d_array<rgba32float, write>;

fn bin(i: u32) -> f32 {
  return select(f32(i) - f32(FIELD_TILE), f32(i), i < FIELD_TILE / 2u);
}

@compute @workgroup_size(8, 8)
fn evolve(@builtin(global_invocation_id) id: vec3u) {
  let cascade = id.z;
  let at = vec2i(id.xy);
  let wave = textureLoad(waves, at, cascade, 0);
  let n = textureLoad(turns, at, cascade, 0).r;
  // The wave's turns so far this hour, the whole seconds' share in integers
  // so that a late second is as exact as an early one.
  let whole = f32((n * moment.whole) % FIELD_HOUR) / f32(FIELD_HOUR);
  let phase = TAU * fract(whole + f32(n) * moment.part / f32(FIELD_HOUR));
  let spin = vec2f(cos(phase), sin(phase));
  let h = times(wave.xy, vec2f(spin.x, -spin.y)) + times(wave.zw, spin);
  let k = TAU * vec2f(bin(id.x), bin(id.y)) / moment.sides[cascade];
  let size = length(k);
  let unit = select(vec2f(0.0), k / size, size > 0.0);
  let ih = vec2f(-h.y, h.x);
  let shift = FIELD_CHOP * unit;
  // Height Y, shift D = -i k/|k| h, and their gradients along x and z.
  let dx = -shift.x * ih;
  let dz = -shift.y * ih;
  let yx = k.x * ih;
  let yz = k.y * ih;
  let dxx = shift.x * k.x * h;
  let dzz = shift.y * k.y * h;
  let dxz = shift.x * k.y * h;
  textureStore(field, at, 2u * cascade, vec4f(paired(dx, dz), paired(h, dxz)));
  textureStore(
    field,
    at,
    2u * cascade + 1u,
    vec4f(paired(yx, yz), paired(dxx, dzz)),
  );
}
`,iM,iR),iA=tO("cube/widgets/outdoors/scene/wave/field/lib/wave-halve",`
@group(0) @binding(0) var source: texture_2d_array<f32>;
@group(0) @binding(1) var to: texture_storage_2d_array<rgba16float, write>;

@compute @workgroup_size(8, 8)
fn halve(@builtin(global_invocation_id) id: vec3u) {
  let at = vec2i(id.xy) * 2;
  let sum =
    textureLoad(source, at, id.z, 0)
      + textureLoad(source, at + vec2i(1, 0), id.z, 0)
      + textureLoad(source, at + vec2i(0, 1), id.z, 0)
      + textureLoad(source, at + vec2i(1, 1), id.z, 0);
  textureStore(to, vec2i(id.xy), id.z, sum * 0.25);
}
`),iE=tO("cube/widgets/outdoors/scene/wave/field/lib/wave-lay",`
@group(0) @binding(0) var field: texture_2d_array<f32>;
@group(0) @binding(1) var shift: texture_storage_2d_array<rgba16float, write>;
@group(0) @binding(2) var slope: texture_storage_2d_array<rgba16float, write>;
@group(0) @binding(3) var moment: texture_storage_2d_array<rgba16float, write>;

@compute @workgroup_size(8, 8)
fn lay(@builtin(global_invocation_id) id: vec3u) {
  let at = vec2i(id.xy);
  let a = textureLoad(field, at, 2u * id.z, 0);
  let b = textureLoad(field, at, 2u * id.z + 1u, 0);
  textureStore(shift, at, id.z, vec4f(a.x, a.z, a.y, a.w));
  textureStore(slope, at, id.z, b);
  textureStore(moment, at, id.z, vec4f(b.x * b.x, b.y * b.y, b.x * b.y, 0.0));
}
`),iT=tO("cube/widgets/outdoors/scene/wave/field/lib/wave-transform",`
struct Stage {
  stage: u32,
  /// 0 along x, 1 along z.
  axis: u32,
}

@group(0) @binding(0) var<uniform> now: Stage;
@group(0) @binding(1) var source: texture_2d_array<f32>;
@group(0) @binding(2) var to: texture_storage_2d_array<rgba32float, write>;

fn reversed(i: u32) -> u32 {
  return reverseBits(i) >> (32u - firstTrailingBit(FIELD_TILE));
}

fn along(at: vec2u, line: u32) -> vec2u {
  return select(vec2u(line, at.y), vec2u(at.x, line), now.axis == 1u);
}

@compute @workgroup_size(8, 8)
fn transform(@builtin(global_invocation_id) id: vec3u) {
  let line = select(id.x, id.y, now.axis == 1u);
  let span = 2u << now.stage;
  let half = span >> 1u;
  let within = line & (span - 1u);
  let lower = within < half;
  let step = select(within - half, within, lower);
  var first = line - within + step;
  var second = first + half;
  if (now.stage == 0u) {
    first = reversed(first);
    second = reversed(second);
  }
  let a = textureLoad(source, along(id.xy, first), id.z, 0);
  let b = textureLoad(source, along(id.xy, second), id.z, 0);
  let angle = TAU * f32(step) / f32(span);
  let twist = vec2f(cos(angle), sin(angle));
  let turned = vec4f(times(b.xy, twist), times(b.zw, twist));
  textureStore(to, id.xy, id.z, select(a - turned, a + turned, lower));
}
`,iM,iR),iI=tI([iO]),iz=tI([iT]),i_=tI([iE]),iN=tI([iA]),iD=["shift","slope","moment"],iU=Math.log2(256),iC=iU+1,iP=M=>M.createView({dimension:"2d-array"}),iH=(M,L)=>M.createView({dimension:"2d-array",baseMipLevel:L,mipLevelCount:1}),iG=2*Math.PI;function iF({inverse:M,eye:L},R,O){let[A=0,E=0,T=0,I=1]=[0,1,2,3].map(L=>R*(M[L]??0)+O*(M[4+L]??0)+.5*(M[8+L]??0)+(M[12+L]??0));return[A/I-L[0],E/I-L[1],T/I-L[2]]}let iW=async({device:M,shader:L,pipeline:R})=>{let O=function(M,L){let R=nV.length,O=(L,R,O,A=1)=>M.createTexture({size:[256,256,R],format:L,usage:O,mipLevelCount:A}),A=O("rgba32float",R,GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST),E=O("r32uint",R,GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST);for(let R of nV.keys()){let O=function(M,L){let R,O=nV[L];if(void 0===O)throw Error(`No cascade ${String(L)}`);let A=(R=M.map(M=>({sea:M,scale:nK(M)})),{at:(M,L)=>{let O=Math.hypot(M,L);if(O<n$||O>nq)return 0;let A=nP(O),E=Math.atan2(L,M);return R.reduce((M,{sea:L,scale:R})=>{let T,I,z,_;return M+R*nF(A,L)*nH(O)*nB(O,L)/O*(T=A/L.peakOmega,z=Math.exp(nW((I=Math.max(1,L.narrowness*(T<=1?T**5:T**-2.5)))+1)-nW(I+.5)-Math.log(2*Math.sqrt(Math.PI))),_=Math.cos((E-L.towards)/2),z*Math.abs(_)**(2*I))},0)}}),E=rP/O.tileSide,T=(M,R)=>{let T=M*E,I=R*E,z=Math.hypot(T,I);if(z<O.kFrom||z>=O.kTo||0===z)return[0,0];let _=Math.sqrt(A.at(T,I)*E*E/2),{re:N,im:D}=nQ.at({cascade:L,p:M,q:R});return[_*N/Math.SQRT2,_*D/Math.SQRT2]},I=new Float32Array(262144),z=new Uint32Array(65536);for(let M=0;M<256;M+=1)for(let L=0;L<256;L+=1){let R=nJ(L),O=nJ(M),[A,_]=T(R,O),[N,D]=T(-R,-O),U=256*M+L;I.set([A,_,N,-D],4*U),z[U]=nG(Math.hypot(R,O)*E)}return{waves:I,turns:z}}(L,R),T={width:256,height:256};M.queue.writeTexture({texture:A,origin:[0,0,R]},O.waves,{bytesPerRow:4096},T),M.queue.writeTexture({texture:E,origin:[0,0,R]},O.turns,{bytesPerRow:1024},T)}let T=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING,I=[0,1].map(()=>O("rgba32float",iL,T)),z=iD.map(()=>O("rgba16float",R,T,iC)),_=(L,R)=>M.createComputePipeline({layout:"auto",compute:{module:M.createShaderModule({code:L}),entryPoint:R}}),N=(L,R)=>M.createBindGroup({layout:L.getBindGroupLayout(0),entries:R.map((M,L)=>({binding:L,resource:M}))}),D=L=>{let R=M.createBuffer({size:L.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return M.queue.writeBuffer(R,0,L),R},U=new ArrayBuffer(32);new Float32Array(U,16,4).set(nV.map(({tileSide:M})=>M));let C=D(U),P=_(iI,"evolve"),[H,G]=I;if(void 0===H||void 0===G)throw Error("No fields");let F=N(P,[{buffer:C},iP(A),iP(E),iP(H)]),W=_(iz,"transform"),B=[],$=Array.from({length:2*iU},(M,L)=>{let R=D(new Uint32Array([L%iU,Math.floor(L/iU)]).buffer);B.push(R);let[O,A]=L%2==0?[H,G]:[G,H];return N(W,[{buffer:R},iP(O),iP(A)])}),q=_(i_,"lay"),j=N(q,[iP(H),...z.map(M=>iH(M,0))]),K=_(iN,"halve"),Y=z.flatMap(M=>Array.from({length:iC-1},(L,R)=>({group:N(K,[iH(M,R),iH(M,R+1)]),groups:Math.max(1,32>>R+1)}))),[V,X,Z]=z.map(M=>iP(M));if(void 0===V||void 0===X||void 0===Z)throw Error("No maps");return{shift:V,slope:X,moment:Z,run:(L,{seconds:O})=>{new Uint32Array(U,0,1)[0]=Math.floor(O),new Float32Array(U,4,1)[0]=O-Math.floor(O),M.queue.writeBuffer(C,0,U,0,8);let A=L.beginComputePass();for(let M of(A.setPipeline(P),A.setBindGroup(0,F),A.dispatchWorkgroups(32,32,R),A.setPipeline(W),$))A.setBindGroup(0,M),A.dispatchWorkgroups(32,32,iL);for(let{group:M,groups:L}of(A.setPipeline(q),A.setBindGroup(0,j),A.dispatchWorkgroups(32,32,R),A.setPipeline(K),Y))A.setBindGroup(0,M),A.dispatchWorkgroups(L,L,R);A.end()},dispose:()=>{for(let M of[A,E,...I,...z])M.destroy();for(let M of[C,...B])M.destroy()}}}(M,n3),A=M.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},...[2,3,4].map(M=>({binding:M,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d-array"}}))]}),E=await R({label:"sea",module:await L("sea",iw),depth:"solid",vertex:"seaVertex",fragment:"seaFragment",groups:[A],cullMode:"none"}),T=new Float32Array(4),I=M.createBuffer({size:T.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),z=function(){let M=new Uint32Array(1962240),L=0;for(let R=0;R<511;R+=1)for(let O=0;O<640;O+=1){let A=641*R+O,E=A+641;M.set([A,A+1,E,A+1,E+1,E],L),L+=6}return M}(),_=M.createBuffer({size:z.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST});M.queue.writeBuffer(_,0,z);let N=M.createBindGroup({layout:A,entries:[{binding:0,resource:{buffer:I}},{binding:1,resource:M.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:16})},{binding:2,resource:O.shift},{binding:3,resource:O.slope},{binding:4,resource:O.moment}]});return{prepare:(L,R)=>{O.run(L,R);let{yaw:A,sector:E}=function(M){let[L,,R]=iF(M,0,0),O=Math.atan2(R,L),A=0;for(let L=0;L<9;L+=1){let R=2*L/8-1;for(let[L,E]of[[-1,R],[1,R],[R,-1],[R,1]]){let[R,T,I]=iF(M,L,E);T>.05*Math.hypot(R,I)||(A=Math.max(A,Math.abs(aQ(Math.atan2(I,R)-O))))}}let E=2*A*1.15;return{yaw:O,sector:E>.7*iG?iG:E}}(R),z=E/640;T.set([Math.round(A/z)*z,E]),M.queue.writeBuffer(I,0,T)},draw:M=>{M.setPipeline(E),M.setBindGroup(1,N),M.setIndexBuffer(_,"uint32"),M.drawIndexed(z.length)},dispose:()=>{O.dispose(),I.destroy(),_.destroy()}}},iB=[3,3,2,1],i$={1:"float32",2:"float32x2",3:"float32x3"},iq=Float32Array.BYTES_PER_ELEMENT,ij="rgba16float",iK={sky:async({device:M,layout:L,frame:R,shader:O,pipeline:A})=>{let E=await O("sky clouds",ig),T=await M.createRenderPipelineAsync({label:"sky clouds",layout:M.createPipelineLayout({bindGroupLayouts:[L]}),vertex:{module:E,entryPoint:"cloudVertex"},fragment:{module:E,entryPoint:"cloudFragment",targets:[{format:ij}]}}),I=M.createBindGroup({layout:L,entries:[{binding:0,resource:{buffer:R}}]}),z=M.createBindGroupLayout({label:"sky backdrop clouds",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]}),_=M.createSampler({magFilter:"linear",minFilter:"linear"}),N=await A({label:"sky",module:await O("sky",iv),depth:"backdrop",vertex:"backdropVertex",groups:[z]}),D=null;return{prepare(L,R,O){let A=L.beginRenderPass({label:"sky clouds",colorAttachments:[{view:((L,R)=>{let O=Math.max(1,Math.ceil(L.width/4/R)),A=Math.max(1,Math.ceil(L.height/4/R));if(D?.width===O&&D.height===A)return D;D?.sky.destroy();let E=M.createTexture({label:"sky clouds",size:[O,A],format:ij,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});return D={width:O,height:A,sky:E,group:M.createBindGroup({layout:z,entries:[{binding:0,resource:E.createView()},{binding:1,resource:_}]})}})(R,O).sky.createView(),loadOp:"clear",storeOp:"store"}]});A.setPipeline(T),A.setBindGroup(0,I),A.draw(3),A.end()},draw(M){null!==D&&(M.setPipeline(N),M.setBindGroup(1,D.group),M.draw(3))},dispose(){D?.sky.destroy()}}},sand:iS,shell:async({device:M,shader:L,pipeline:R})=>{let O,A,E,T=new Float32Array([...function(){let{min:M,max:L}=rL,[R,O]=[L[0]-M[0],L[1]-M[1]],A=[0,-O,0],E=(M,L)=>({corner:M,u:L,v:A,onFace:[0,0],kind:"side"}),T={from:rR.min[2]-M[2],to:rR.max[2]-M[2],head:L[1]-rR.max[1],sill:L[1]-rR.min[1]},I=(R,O,A,E)=>({corner:[L[0],L[1]-A,M[2]+R],u:[0,0,O-R],v:[0,A-E,0],onFace:[R,A],kind:"side"});return[E([M[0],L[1],L[2]],[0,0,-R]),E([L[0],L[1],L[2]],[-R,0,0]),E([M[0],L[1],M[2]],[R,0,0]),I(0,T.from,0,O),I(T.to,R,0,O),I(T.from,T.to,0,T.head),I(T.from,T.to,T.sill,O)]}(),...function(){let{min:M,max:L}=rL,R=L[0]-M[0];return[{corner:[M[0],L[1],M[2]],u:[0,0,R],v:[R,0,0],onFace:[0,0],kind:"top"},{corner:[M[0],M[1],M[2]],u:[R,0,0],v:[0,0,R],onFace:[0,0],kind:"underside"}]}(),...function(){let{min:M,max:L}=rR,[R,O]=[L[1]-M[1],L[2]-M[2]],A=[-.06,0,0],E=rL.max[0];return[{corner:[E,M[1],M[2]],u:[0,R,0],v:A,onFace:[0,0],kind:"reveal"},{corner:[E,M[1],L[2]],u:A,v:[0,R,0],onFace:[0,0],kind:"reveal"},{corner:[E,L[1],M[2]],u:[0,0,O],v:A,onFace:[0,0],kind:"reveal"}]}(),...(O=tM(r_.foot,rN,r_.length/2),[...[-1,1].flatMap(M=>{var L,R;return L=tM(O,rD,M*r_.wide/2),R=[tL(rN,r_.length/2),tL(rD,r_.stile.across/2),tL(rU,r_.stile.through/2)],io.flatMap(([M,O,A])=>[1,-1].map(E=>{let T=tM(L,R[M],E),[I,z]=E>0?[R[O],R[A]]:[R[A],R[O]];return{corner:tM(tM(T,I,-1),z,-1),u:tL(I,2),v:tL(z,2),onFace:[0,0],kind:"stile"}}))}),...r_.rungs.flatMap(M=>{let L,R,O;return L=r_.rung.tall/2,R=M=>{let R=M/8*2*Math.PI;return tM(tL(rN,L*Math.cos(R)),rU,L*Math.sin(R))},O=tM(M,rD,-r_.wide/2),Array.from({length:8},(M,L)=>{let A=R(L);return{corner:tM(O,A),u:tL(rD,r_.wide),v:tM(R(L+1),A,-1),onFace:[0,0],kind:"rung"}})})])].flatMap(M=>(function({corner:M,u:L,v:R,onFace:O,kind:A}){let[E,T,I]=tS(L,R),z=Math.hypot(E,T,I),[_,N]=[Math.hypot(...L),Math.hypot(...R)],D=il.indexOf(A);return[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]].flatMap(([A,U])=>[...tM(tM(M,L,A),R,U),E/z,T/z,I/z,O[0]+A*_,O[1]+U*N,D])})(M))),I=M.createBuffer({label:"shell vertices",size:T.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});M.queue.writeBuffer(I,0,T);let z=await R({label:"shell",module:await L("shell",ib),depth:"solid",buffers:[(A=0,E=iB.map((M,L)=>{let R={shaderLocation:L,offset:A,format:i$[M]};return A+=M*iq,R}),{arrayStride:9*iq,attributes:E})],cullMode:"none"});return{draw:M=>{M.setPipeline(z),M.setVertexBuffer(0,I),M.draw(T.length/9)},dispose:()=>{I.destroy()}}},sea:iW},iY=ik.filter(M=>"sea"!==M),iV=ik.filter(M=>"sea"===M);async function iX(M,{targets:L,depthFormat:R}){let O=M.createBuffer({size:4*o5,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),A=M.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{}}]}),E=M.createBindGroup({layout:A,entries:[{binding:0,resource:{buffer:O}}]}),T={device:M,layout:A,frame:O,shader:async(L,R)=>iy(M,`The outdoor ${L} shader`,`diagnostic(off, derivative_uniformity);
${tI(R)}`),pipeline:async({label:O,module:E,depth:T,vertex:I="vertexMain",fragment:z="fragmentMain",buffers:_=[],groups:N=[],cullMode:D="back"})=>M.createRenderPipelineAsync({label:O,layout:M.createPipelineLayout({bindGroupLayouts:[A,...N]}),vertex:{module:E,entryPoint:I,buffers:_},fragment:{module:E,entryPoint:z,targets:L},primitive:{topology:"triangle-list",cullMode:D},depthStencil:{format:R,depthWriteEnabled:"solid"===T,depthCompare:"solid"===T?"greater":"always"}})},I=new Map(await Promise.all(ik.map(async M=>[M,await iK[M](T)]))),z=(M,L)=>{for(let R of(M.setBindGroup(0,E),L))I.get(R)?.draw(M)};return{prepare:(L,R,A)=>{for(let E of(M.queue.writeBuffer(O,0,function({viewProjection:M,inverse:L,eye:R,sun:O,ladderGone:A,seconds:E,hour:T,width:I,height:z}){let _={viewProjection:M,inverse:L,eye:[...R,1],sun:[...O,0],clock:[E,T,I,z],state:[+(!0!==A),0,0,0]},N=new Float32Array(o5),D=0;for(let{name:M,floats:L}of o3)N.set(_[M],D),D+=L;return N}(R)),I.values()))E.prepare?.(L,R,A)},behind:M=>{z(M,iY)},over:M=>{z(M,iV)},dispose:()=>{for(let M of I.values())M.dispose();O.destroy()}}}function iZ(M,L){let R=new Float32Array(16);for(let O=0;O<4;O+=1)for(let A=0;A<4;A+=1){let E=0;for(let R=0;R<4;R+=1)E+=(M[4*R+A]??0)*(L[4*O+R]??0);R[4*O+A]=E}return R}function iQ(M){let L=(L,R)=>M[4*L+R]??0,R=(M,R)=>((M+R)%2==0?1:-1)*((M,R)=>{let O=[0,1,2,3].filter(L=>L!==M),A=[0,1,2,3].filter(M=>M!==R),[E=0,T=0,I=0]=O,[z=0,_=0,N=0]=A;return L(E,z)*(L(T,_)*L(I,N)-L(I,_)*L(T,N))-L(T,z)*(L(E,_)*L(I,N)-L(I,_)*L(E,N))+L(I,z)*(L(E,_)*L(T,N)-L(T,_)*L(E,N))})(M,R),O=0;for(let M=0;M<4;M+=1)O+=L(M,0)*R(M,0);if(1e-30>Math.abs(O))throw Error("A singular matrix has no inverse");let A=new Float32Array(16);for(let M=0;M<4;M+=1)for(let L=0;L<4;L+=1)A[4*M+L]=R(L,M)/O;return A}let iJ=70*Math.PI/180,i0=24;function i2({yaw:M,elevation:L}){let R=Math.cos(L);return[R*Math.cos(M),Math.sin(L),R*Math.sin(M)]}let i1=(M,L,R,O)=>[M[0]*L+R[0]*O,M[1]*L+R[1]*O,M[2]*L+R[2]*O],i3=(M,L,R,O,{roll:A=0,far:E=i0*O}={})=>{var T,I;let z,_,N,D,U,C,P;return iZ((T=.004*O,z=1/Math.tan(iJ/2),_=E-T,Float32Array.of(z/R,0,0,0,0,z,0,0,0,0,T/_,-1,0,0,T*E/_,0)),(I=i2(M),N=tR([-I[0],-I[1],-I[2]]),D=tR(tS([0,1,0],N)),U=tS(N,D),C=i1(D,Math.cos(A),U,-Math.sin(A)),P=i1(U,Math.cos(A),D,Math.sin(A)),Float32Array.of(C[0],P[0],N[0],0,C[1],P[1],N[1],0,C[2],P[2],N[2],0,-tk(C,L),-tk(P,L),-tk(N,L),1)))},i5=(U=rM([0,0,0]),C=M=>rM(M).map((M,L)=>M-(U[L]??0)),Float32Array.of(...C([1,0,0]),0,...C([0,1,0]),0,...C([0,0,1]),0,...U,1));function i4(M,L,R){let O=L*Math.min(R,1-R),A=L=>{let A=(L+M/30)%12;return R-O*Math.max(-1,Math.min(A-3,9-A,1))};return[A(0),A(8),A(4)]}let i6=M=>[(M>>16&255)/255,(M>>8&255)/255,(255&M)/255],i8=M=>M<=.04045?M/12.92:((M+.055)/1.055)**2.4,i7=([M,L,R])=>[i8(M),i8(L),i8(R)],i9=M=>`#${(([M,L,R])=>Math.round(255*M)<<16|Math.round(255*L)<<8|Math.round(255*R))(M).toString(16).padStart(6,"0")}`,fe=["wall","floor","owned","ceiling","trim","plate","handle","metal","wood","plastic","fabric","glass","screen","paper","foliage","rubber","skin"],ft=M=>M.reduce((M,L,R)=>M|(L?1<<R:0),0),fa=`
fn flagAt(s: Surf, bit: u32) -> bool {
  return ((s.flags >> bit) & 1u) != 0u;
}

/// Whether the room's side \`side\` (0 east, 1 south, 2 west, 3 north) is a closed wall.
fn closedAt(s: Surf, side: u32) -> bool {
  return flagAt(s, side);
}

/// 1 where the room's own lamps work, 0 where they have failed.
fn litOf(s: Surf) -> f32 {
  return f32(flagAt(s, ${String(4)}u));
}

/// Whether the room's side \`side\` opens onto a room whose lamps work.
fn litBeside(s: Surf, side: u32) -> bool {
  return flagAt(s, ${String(5)}u + side);
}

/// Whether the room across corner \`corner\` (0 south-east, 1 south-west,
/// 2 north-west, 3 north-east) has working lamps and a way for their light.
fn litAcross(s: Surf, corner: u32) -> bool {
  return flagAt(s, ${String(9)}u + corner);
}

/// Whether light crosses corner \`corner\` by way of the room through side
/// \`corner\` (\`first\`), or of the one through the side after it.
fn wayAcross(s: Surf, corner: u32, first: bool) -> bool {
  return flagAt(s, ${String(13)}u + corner + select(4u, 0u, first));
}

/// Whether a wall along the line of side \`side\` ends on the room's corner
/// from outside: the room through the side after \`side\` (\`next\`), or
/// through the one before it, has its own side \`side\` closed.
fn wallBeside(s: Surf, side: u32, next: bool) -> bool {
  return flagAt(s, ${String(21)}u + side + select(4u, 0u, next));
}
`,fr=fe.map((M,L)=>`const ${M.toUpperCase()}: u32 = ${String(L)}u;`).join("\n"),fs=tO("core",`
${fr}

/// A room from its floor to its ceiling, in metres: x east, y up, z south.
const ROOM = vec3f(5.0, ${(5*.46).toFixed(3)}, 5.0);

/// The point being shaded, in its own room's terms.
struct Surf {
  /// One of the surface constants above.
  kind: u32,
  /// Metres from the room's north-west floor corner: x east, y up, z south.
  p: vec3f,
  /// Metres across the face: (east, south) on a floor or ceiling, (along, up)
  /// on anything upright. It runs on through neighbouring rooms, so a pattern
  /// drawn in it has no seam at a doorway.
  uv: vec2f,
  normal: vec3f,
  /// The room's own word: what its stains, wear and timing grow from.
  seed: u32,
  /// Read with the flag readers: closedAt, litOf and the rest.
  flags: u32,
  /// The room's column and row on its floor, each modulo 64.
  cell: vec2u,
  /// The face's tint, linear; black where it has none.
  paint: vec3f,
  /// From the eye to the point, unit length, and how far that is in metres.
  view: vec3f,
  far: f32,
  /// The framebuffer pixel, and the same as a 0..1 share of the screen.
  pixel: vec2f,
  screen: vec2f,
  /// Seconds into the hour of the clock every viewer shares, and which hour.
  time: f32,
  hour: u32,
};

/// Metres from the point to its room's sides, in closedAt's order: east,
/// south, west, north.
fn toSides(s: Surf) -> vec4f {
  return vec4f(ROOM.x - s.p.x, ROOM.z - s.p.z, s.p.x, s.p.z);
}

/// Metres from the point to the nearest of its room's sides, wall or not.
fn toNearestSide(s: Surf) -> f32 {
  let away = toSides(s);
  return min(min(away.x, away.y), min(away.z, away.w));
}

/// Metres along an upright face from its room's west or north end.
fn alongWall(s: Surf) -> f32 {
  return select(s.p.x, s.p.z, abs(s.normal.x) > abs(s.normal.z));
}

/// What a surface is: its colour, the light it gives off, how polished it
/// is, 0 (chalk) to 1 (a mirror), and its relief — what is added to the
/// face's normal before it is lit, zero for a flat face.
struct Material {
  albedo: vec3f,
  emission: vec3f,
  gloss: f32,
  relief: vec3f,
};

fn matte(albedo: vec3f) -> Material {
  return Material(albedo, vec3f(0.0), 0.0, vec3f(0.0));
}

fn polished(albedo: vec3f, gloss: f32) -> Material {
  return Material(albedo, vec3f(0.0), gloss, vec3f(0.0));
}

fn glowing(albedo: vec3f, emission: vec3f) -> Material {
  return Material(albedo, emission, 0.0, vec3f(0.0));
}

/// \`m\` with relief: \`height\` is the surface's height at the point in any
/// unit, and \`depth\` how many metres one unit of it stands proud. It
/// flattens with distance, where its grain is finer than a pixel.
fn embossed(s: Surf, m: Material, height: f32, depth: f32) -> Material {
  let dpx = dpdx(s.p);
  let dpy = dpdy(s.p);
  let r1 = cross(dpy, s.normal);
  let r2 = cross(s.normal, dpx);
  let det = dot(dpx, r1);
  let slope = (dpdx(height) * r1 + dpdy(height) * r2) * depth;
  let near = 1.0 / (1.0 + s.far * s.far / 150.0);
  let relief = -slope * sign(det) * near / max(abs(det), 1e-9);
  return Material(m.albedo, m.emission, m.gloss, m.relief + clamp(relief, vec3f(-2.0), vec3f(2.0)));
}

/// \`uv\` within its cell of a lattice of \`size\`, from the cell's middle.
fn repeated(uv: vec2f, size: vec2f) -> vec2f {
  return (fract(uv / size) - 0.5) * size;
}

/// \`x\` within its interval of a row of them \`size\` long, from the middle.
fn spaced(x: f32, size: f32) -> f32 {
  return (fract(x / size) - 0.5) * size;
}

/// What a point mirroring its surroundings leaves for the frame to finish:
/// the share of what lies along its reflection it shows, the plane it
/// reflects off, how many metres the reflection blurs per metre it runs, and
/// \`fallback\`, the lamps' light it shows where the frame cannot see along
/// the reflection.
struct Mirror {
  strength: f32,
  normal: vec3f,
  blur: f32,
  fallback: vec3f,
};

/// The mirror of the point being shaded, none until its light says so; the
/// stage hands it on beside the point's light, and what dims that light on
/// its way to the eye dims \`strength\` with it.
var<private> mirroring: Mirror;

/// The pixel a floor's lens is asked for.
struct Lens {
  /// Its place on the screen, 0 to 1 from the top left, and in pixels.
  uv: vec2f,
  pixel: vec2f,
  /// The screen's size in pixels.
  size: vec2f,
  /// The shared clock, as a Surf has it.
  time: f32,
  hour: u32,
};

// The stage supplies what a lens looks at:
//   fn sceneAt(uv: vec2f) -> vec4f   the lit scene there, and in \`a\` how many
//                                    metres off it is
//   fn glowAt(uv: vec2f) -> vec3f    the scene's bright parts, spread wide

${fa}
`),fl=tO("cube/entities/theme/kit/lib/finish",`
/// 1 within \`width\` metres centred on \`at\`, 0 outside.
fn band(x: f32, at: f32, width: f32) -> f32 {
  return 1.0 - smoothstep(width * 0.5, width * 0.5 + 0.004, abs(x - at));
}

/// Painted plaster: the room's own mottling under a fine roller texture.
fn plaster(s: Surf, colour: vec3f) -> vec3f {
  let mottle = fbm(s.uv * 0.8, s.seed, 4);
  let roller = valueNoise(s.uv * 55.0, 3u);
  return colour * (0.88 + 0.16 * mottle + 0.04 * roller);
}

/// Square tiles \`size\` across with \`joint\` metres between them: x is 1 on a
/// tile and 0 in a joint, y the tile's own random number in [0, 1).
fn tiling(uv: vec2f, size: f32, joint: f32, salt: u32) -> vec2f {
  let at = uv / size;
  let f = fract(at);
  let edge = min(min(f.x, 1.0 - f.x), min(f.y, 1.0 - f.y)) * size;
  return
    vec2f(
      smoothstep(joint * 0.5, joint * 0.5 + 0.003, edge),
      unitOf(cellHash(vec2i(floor(at)), salt)),
    );
}

/// Carpet: pile too fine to count, worn in paths that cross rooms.
fn carpet(s: Surf, colour: vec3f) -> vec3f {
  let pile = valueNoise(s.uv * 240.0, 11u);
  let wear = fbm(s.uv * 0.45, 5u, 3);
  return colour * (0.76 + 0.3 * pile) * (0.82 + 0.3 * wear);
}

/// Damp, 0 to 1: on a wall it runs down from the ceiling in the room's own
/// streaks; on a ceiling it pools in blots.
fn damp(s: Surf) -> f32 {
  if (abs(s.normal.y) > 0.5) {
    return smoothstep(0.62, 0.8, fbm(s.uv * 0.9, s.seed ^ 0x51u, 4));
  }
  let streak = fbm(vec2f(s.uv.x * 3.0, s.uv.y * 0.25), s.seed ^ 0x52u, 3);
  let fall = smoothstep(ROOM.y - 1.6, ROOM.y, s.p.y);
  return smoothstep(0.55, 0.75, streak) * fall;
}
`,fs,a1),fo=tO("cube/entities/theme/kit/lib/scene",`
@group(1) @binding(2) var sceneTexture: texture_2d<f32>;
@group(1) @binding(3) var glowTexture: texture_2d<f32>;
@group(1) @binding(4) var lensSampler: sampler;

fn sceneAt(uv: vec2f) -> vec4f {
  return textureSampleLevel(sceneTexture, lensSampler, uv, 0.0);
}

fn glowAt(uv: vec2f) -> vec3f {
  return textureSampleLevel(glowTexture, lensSampler, uv, 0.0).rgb;
}
`),fn=tO("cube/entities/theme/kit/lib/grade",`
/// The colour seen through air of colour \`air\` that swallows a thing
/// \`reach\` metres off by about two thirds, and the point's mirror dimmed
/// as its light is.
fn haze(colour: vec3f, s: Surf, air: vec3f, reach: f32) -> vec3f {
  let through = exp(-s.far / reach);
  mirroring.strength *= through;
  return mix(air, colour, through);
}

/// The film's curve: scene light \`x\`, none of it negative, to the share of
/// white it prints, past 1 for the brightest.
fn filmic(x: vec3f) -> vec3f {
  return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}

/// Scene light to display colour: a filmic shoulder, then the display's gamma.
fn tonemap(colour: vec3f) -> vec3f {
  let mapped = filmic(max(colour, vec3f(0.0)));
  return pow(clamp(mapped, vec3f(0.0), vec3f(1.0)), vec3f(1.0 / 2.2));
}

/// The scene as a glass lens takes it: the frame plus \`glow\` of its bright
/// parts' spread, its red and blue pulled \`fringe\` of the way apart toward
/// the corners.
fn through(l: Lens, glow: f32, fringe: f32) -> vec3f {
  let off = (l.uv - 0.5) * fringe * dot(l.uv - 0.5, l.uv - 0.5) * 4.0;
  let scene =
    vec3f(sceneAt(l.uv + off).r, sceneAt(l.uv).g, sceneAt(l.uv - off).b);
  return scene + glowAt(l.uv) * glow;
}

/// Film grain in [-1, 1], new 24 times a second.
fn grain(l: Lens) -> f32 {
  let frame = u32(l.time * 24.0);
  let word = hashOf(hashOf(u32(l.pixel.x), u32(l.pixel.y)), frame);
  return unitOf(word) * 2.0 - 1.0;
}

/// 1 in the middle of the screen, falling to \`1 - depth\` in its corners.
fn vignette(l: Lens, depth: f32) -> f32 {
  return 1.0 - depth * smoothstep(0.25, 0.75, length(l.uv - 0.5));
}
`,fs,a1,fo),fi=tO("cube/entities/theme/kit/lib/honeycomb",`
/// How far apart a unit-wide honeycomb's rows lie: √3/2.
const HEX_ROW = 0.8660254;

/// A honeycomb of cells one unit apart: xy is the point's offset from the
/// nearest cell's middle, zw that middle.
fn honeycomb(p: vec2f) -> vec4f {
  let pitch = vec2f(1.0, 2.0 * HEX_ROW);
  let a = repeated(p, pitch);
  let shifted = p - pitch * 0.5;
  let b = repeated(shifted, pitch);
  let off = select(b, a, dot(a, a) < dot(b, b));
  return vec4f(off, p - off);
}
`,fs),ff=tO("cube/entities/theme/kit/lib/light",`
/// A floor's lamps: a square grid of panels in each room's ceiling.
struct Lamps {
  /// Their colour times their strength.
  colour: vec3f,
  /// The light left with every lamp off.
  ambient: vec3f,
  /// Panels along each side of the ceiling, and one panel's size in metres.
  grid: i32,
  size: vec2f,
  /// The share of rooms whose lamps stutter: lit ones dip, failed ones try
  /// to start.
  stutter: f32,
}

/// The shared clock's ticks in a second, in an hour, and in a stuttering
/// room's four-second spell.
const TICK_RATE = 12u;
const HOUR_TICKS = TICK_RATE * 3600u;
const SPELL_TICKS = TICK_RATE * 4u;

/// The lamps of the room \`by\` rooms east and south of the point's right
/// now, 0 to 1, \`lit\` being whether they work. A stuttering room's fits
/// come in four-second spells on the shared clock, so two viewers see the
/// same flash, and are rolled from its place on the floor, so every room
/// around it sees them too.
fn lampLevel(s: Surf, by: vec2i, lit: f32, stutter: f32) -> f32 {
  let place = vec2u(vec2i(s.cell) + by) & vec2u(63u);
  let word = hashOf(place.x | (place.y << 8u), 0x1au);
  if (unitOf(word) >= stutter) {
    return lit;
  }
  let tick = u32(s.time * f32(TICK_RATE)) + s.hour * HOUR_TICKS;
  if (unitOf(hashOf(word ^ 0x77u, tick / SPELL_TICKS)) >= 0.35) {
    return lit;
  }
  let fit = unitOf(hashOf(word, tick));
  return select(lit, 0.75 - 0.6 * lit, fit < 0.3);
}

/// The side a room one step away lies through: 0 east, 1 south, 2 west, 3 north.
fn sideOf(by: vec2i) -> u32 {
  return select(select(3u, 1u, by.y > 0), select(2u, 0u, by.x > 0), by.x != 0);
}

/// The corner a room one step each way lies across: 0 south-east, 1
/// south-west, 2 north-west, 3 north-east.
fn cornerOf(by: vec2i) -> u32 {
  return select(select(2u, 3u, by.x > 0), select(1u, 0u, by.x > 0), by.y > 0);
}

/// The lamps of the room \`by\` rooms away, no farther than one each way,
/// as far as any of their light can enter the point's room: nothing through
/// a closed side or across a corner with no way round it.
fn lampsBeside(s: Surf, by: vec2i, stutter: f32) -> f32 {
  var lit = litOf(s);
  if (by.x != 0 && by.y != 0) {
    let corner = cornerOf(by);
    if (!(wayAcross(s, corner, true) || wayAcross(s, corner, false))) {
      return 0.0;
    }
    lit = f32(litAcross(s, corner));
  } else if (by.x != 0 || by.y != 0) {
    let side = sideOf(by);
    if (closedAt(s, side)) {
      return 0.0;
    }
    lit = f32(litBeside(s, side));
  }
  return lampLevel(s, by, lit, stutter);
}

/// Whether light from a lamp across a corner, \`to\` away from the point,
/// gets to it: it leaves the point's room by one of the corner's two sides,
/// and that way round has to be open.
fn reachesAcross(s: Surf, by: vec2i, to: vec3f) -> bool {
  let edge = vec2f(max(by, vec2i(0))) * ROOM.xz;
  let leaves = (edge - s.p.xz) / to.xz;
  let corner = cornerOf(by);
  // Even corners' first way is through an east or west side.
  return wayAcross(s, corner, (leaves.x < leaves.y) == ((corner & 1u) == 0u));
}

/// 1 inside a lamp panel at ceiling point \`at\` (metres east and south in the
/// room), 0 outside, for \`grid\` panels a side, each \`size\` metres.
fn lampMask(at: vec2f, grid: i32, size: vec2f) -> f32 {
  return 1.0 - smoothstep(0.0, 0.03, panelEdge(at, grid, size));
}

/// \`lampMask\` blurred \`soft\` metres across, as a floor short of glass
/// mirrors it: the panel spreads into a dimmer glow holding the light it
/// had, as the frame's own blur of a panel it shows does, so the two agree
/// where one gives way to the other.
fn lampBlur(at: vec2f, grid: i32, size: vec2f, soft: f32) -> f32 {
  let half = 0.5 * max(soft, 0.03);
  let spread = size / (size + vec2f(soft));
  return
    (1.0 - smoothstep(-half, half, panelEdge(at, grid, size)))
      * spread.x
      * spread.y;
}

/// How far ceiling point \`at\` lies outside the nearest of \`grid\` panels a
/// side, each \`size\` metres: negative inside one.
fn panelEdge(at: vec2f, grid: i32, size: vec2f) -> f32 {
  let pitch = ROOM.xz / f32(grid);
  let off = repeated(at, pitch);
  let edge = abs(off) - size * 0.5;
  return max(edge.x, edge.y);
}

/// How much light a point takes from the lamps of its room and of the
/// eight around it: x what it scatters, y what it throws back at the eye as
/// a highlight, z what hangs in the air about it whichever way it faces and
/// however high it is. A lamp's light dies out a room's side away, so a point on an open edge
/// takes the same from the rooms either side of it.
fn lampReach(s: Surf, normal: vec3f, gloss: f32, lamps: Lamps) -> vec3f {
  let pitch = ROOM.xz / f32(lamps.grid);
  let power = mix(6.0, 600.0, gloss * gloss);
  // A polished floor mirrors the panels themselves, which is its highlight.
  let glinting = gloss > 0.0 && s.normal.y <= 0.9;
  var sum = vec3f(0.0);
  for (var south = -1; south <= 1; south++) {
    for (var east = -1; east <= 1; east++) {
      let by = vec2i(east, south);
      let level = lampsBeside(s, by, lamps.stutter);
      if (level <= 0.0) {
        continue;
      }
      let across = east != 0 && south != 0;
      for (var i = 0; i < lamps.grid; i++) {
        for (var j = 0; j < lamps.grid; j++) {
          let lamp =
            vec3f(
              (f32(east * lamps.grid + i) + 0.5) * pitch.x,
              ROOM.y - 0.05,
              (f32(south * lamps.grid + j) + 0.5) * pitch.y,
            );
          let to = lamp - s.p;
          let h2 = dot(to.xz, to.xz);
          let span = 1.0 - h2 * h2 / (ROOM.x * ROOM.x * ROOM.x * ROOM.x);
          if (span <= 0.0 || (across && !reachesAcross(s, by, to))) {
            continue;
          }
          let shine = level * span * span;
          let d2 = dot(to, to);
          let l = to / sqrt(d2);
          // A panel shines mostly down, and less with distance.
          let falloff = shine * (0.3 + 0.7 * max(l.y, 0.0)) / (1.0 + 0.35 * d2);
          let facing = max(dot(normal, l), 0.0);
          var glint = 0.0;
          if (glinting) {
            let half = normalize(l - s.view);
            glint =
              pow(max(dot(normal, half), 0.0), power) * (power + 8.0) / 25.0;
          }
          sum +=
            vec3f(
              facing * falloff,
              facing * glint * falloff,
              shine / (1.0 + 0.35 * h2),
            );
        }
      }
    }
  }
  return sum;
}

/// The dimming where surfaces meet: a floor or ceiling toward the walls
/// that stand on it — its room's own, and those that end on its corners from
/// the rooms beside, so the dimming runs on across an open edge — and a wall
/// toward the floor, the ceiling and the walls it joins.
fn cornerShade(s: Surf) -> f32 {
  let reach = 0.7;
  let toSide = toSides(s);
  var near = reach;
  if (abs(s.normal.y) > 0.5) {
    for (var side = 0u; side < 4u; side++) {
      if (closedAt(s, side)) {
        near = min(near, toSide[side]);
        continue;
      }
      for (var turn = 1u; turn < 4u; turn += 2u) {
        let end = (side + turn) & 3u;
        if (!closedAt(s, end) && wallBeside(s, side, turn == 1u)) {
          near = min(near, length(vec2f(toSide[side], toSide[end])));
        }
      }
    }
  } else {
    near = min(s.p.y, ROOM.y - s.p.y);
    // The walls a wall joins are the pair it does not run along.
    let first = select(0u, 1u, abs(s.normal.x) > abs(s.normal.z));
    for (var side = first; side < 4u; side += 2u) {
      if (closedAt(s, side)) {
        near = min(near, toSide[side]);
      }
    }
  }
  let dim = 1.0 - smoothstep(0.0, reach, near);
  return 1.0 - 0.45 * dim * dim;
}

/// How much brighter a panel is to look at than the room it lights.
const GLARE = 8.0;

/// What a ceiling gives off at the point: the lamps' glare inside a panel.
fn lampGlow(s: Surf, lamps: Lamps) -> vec3f {
  return
    lamps.colour * (GLARE
      * lampMask(s.p.xz, lamps.grid, lamps.size)
      * lampLevel(s, vec2i(0), litOf(s), lamps.stutter));
}

/// How much of a polished floor's relief bends what it mirrors.
const RIPPLE = 0.15;

/// How many metres a floor's reflection blurs per metre the mirrored ray
/// runs, on a floor of no gloss at all.
const BLUR = 0.15;

/// How much of the lamps' light the air about a point passes on to it.
const FILL = 0.16;

/// How many metres a moulded skin blurs what it mirrors per metre the
/// mirrored ray runs.
const SKIN_BLUR = 0.15;

/// The panels of the point's room and the rooms around as a mirror at it
/// facing \`plane\` shows them, blurred \`blur\` metres a metre.
fn panelsMirrored(s: Surf, plane: vec3f, blur: f32, lamps: Lamps) -> vec3f {
  let ray = reflect(s.view, plane);
  if (ray.y <= 0.001) {
    return vec3f(0.0);
  }
  let hit = s.p + ray * ((ROOM.y - s.p.y) / ray.y);
  // Past the rooms around, the ceiling mirrored is taken for theirs.
  let by = clamp(vec2i(floor(hit.xz / ROOM.xz)), vec2i(-1), vec2i(1));
  let soft = blur * length(hit - s.p);
  return
    lamps.colour
      * (GLARE * lampsBeside(s, by, lamps.stutter))
      * lampBlur(hit.xz, lamps.grid, lamps.size, soft);
}

/// The point lit by the lamps around it: their direct light and what the
/// air passes on, the ambient and their highlights on anything polished. A
/// polished floor is left a mirror, which the frame fills with what it shows
/// along the reflection, or, where it shows nothing there, with the panels
/// of the rooms around mirrored in it.
fn roomLight(s: Surf, m: Material, lamps: Lamps) -> vec3f {
  let normal = normalize(s.normal + m.relief);
  let reach = lampReach(s, normal, m.gloss, lamps);
  let shade = cornerShade(s);
  let light = lamps.ambient + lamps.colour * (reach.x + FILL * reach.z);
  // A polished thing mirrors more the more it is looked along.
  let along = pow(1.0 - max(dot(normal, -s.view), 0.0), 5.0);
  let mirror = m.gloss * (0.04 + 0.96 * along);
  var colour =
    m.albedo * light * shade
      + m.emission
      + lamps.colour * (reach.y * mirror * shade);
  if (s.kind == PLASTIC) {
    // Plastic is too small and too rounded for the frame to mirror in: it
    // carries the panels' own blurred image, which is its highlight.
    colour +=
      panelsMirrored(
        s,
        normal,
        SKIN_BLUR,
        lamps,
      ) * ((0.04 + 0.96 * along) * shade);
  } else if (m.gloss > 0.0 && s.normal.y > 0.9) {
    // The floor mirrors off its plane, its relief only rippling what it
    // shows: relief steep at every joint between boards would throw single
    // pixels' rays onto a panel, and the floor would sparkle.
    let plane = normalize(s.normal + RIPPLE * m.relief);
    let blur = BLUR * (1.0 - m.gloss);
    mirroring =
      Mirror(mirror, plane, blur, panelsMirrored(s, plane, blur, lamps));
  }
  return colour;
}
`,fs,a1),fc=tO("cube/entities/theme/kit/lib/luma",`
fn luma(colour: vec3f) -> f32 {
  return dot(colour, vec3f(0.2126, 0.7152, 0.0722));
}
`),fu=tO("cube/entities/theme/kit/lib/math",`
/// Half a turn, in radians: WGSL has no constant of its own for it.
const PI = 3.14159265;
`),fh=(M,L)=>`haze(${M}, s, AIR, ${L.visibility.toFixed(1)})`,fd=M=>`
fn themeLens(l: Lens) -> vec3f {
  let seen = through(l, ${M.glow.toFixed(3)}, ${M.fringe.toFixed(4)}) * ${M.exposure.toFixed(3)};
  return tonemap(seen) * vignette(l, ${M.vignette.toFixed(3)}) + grain(l) * ${M.noise.toFixed(4)};
}`,fm=(M,L)=>tO(`${M}/ordinary`,`
fn lamps() -> Lamps {
  return Lamps(
    ${tA(L.lamp)},
    ${tA(L.ambient)},
    ${String(L.grid)},
    vec2f(${L.panel.map(M=>M.toFixed(3)).join(", ")}),
    ${L.stutter.toFixed(3)},
  );
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  return ${fh("roomLight(s, m, lamps())",L)};
}
${fd(L)}
`,ff,fn),fp=tO("cube/entities/theme/kit/lib/stuff",`
/// The face's paint, or \`fallback\` where it carries none.
fn painted(s: Surf, fallback: vec3f) -> vec3f {
  return select(fallback, s.paint, dot(s.paint, vec3f(1.0)) > 0.0);
}

/// A floor the viewer bought: \`m\` with a brass line inlaid round the room.
fn ownedMark(s: Surf, m: Material) -> Material {
  let line = 1.0 - smoothstep(0.02, 0.024, abs(toNearestSide(s) - 0.3));
  let brass =
    vec3f(0.62, 0.43, 0.14) * (0.85 + 0.3 * valueNoise(s.uv * 200.0, 36u));
  return
    Material(
      mix(m.albedo, brass, line),
      m.emission,
      mix(m.gloss, 0.7, line),
      m.relief,
    );
}

fn stuff(s: Surf) -> Material {
  let fine = valueNoise(s.uv * 90.0, 31u);
  switch s.kind {
    case PLATE: {
      return
        embossed(
          s,
          polished(vec3f(0.07, 0.08, 0.09) * (0.85 + 0.3 * fine), 0.45),
          fine,
          0.0006,
        );
    }
    case HANDLE: {
      return polished(painted(s, vec3f(0.5, 0.03, 0.025)), 0.6);
    }
    case METAL: {
      let brushed = valueNoise(vec2f(s.uv.x * 6.0, s.uv.y * 300.0), 32u);
      let steel = painted(s, vec3f(0.36, 0.38, 0.4)) * (0.85 + 0.2 * brushed);
      return embossed(s, polished(steel, 0.55), brushed, 0.0004);
    }
    case WOOD: {
      let grain = fbm(vec2f(s.uv.x * 40.0, s.uv.y * 1.5), 33u, 3);
      let wood = painted(s, vec3f(0.3, 0.17, 0.08)) * (0.65 + 0.55 * grain);
      return embossed(s, polished(wood, 0.25), grain, 0.0008);
    }
    case PLASTIC: {
      // Moulded smooth: without a highlight a black one is a hole in the room.
      return
        polished(painted(s, vec3f(0.5, 0.5, 0.48)) * (0.92 + 0.1 * fine), 0.6);
    }
    case FABRIC: {
      let weave = valueNoise(s.uv * 400.0, 34u);
      return matte(painted(s, vec3f(0.22, 0.24, 0.32)) * (0.75 + 0.35 * weave));
    }
    case GLASS: {
      return polished(painted(s, vec3f(0.03, 0.05, 0.06)), 0.95);
    }
    case SCREEN: {
      let frame = u32(s.time * 24.0);
      let snow =
        unitOf(hashOf(cellHash(vec2i(floor(s.uv * 160.0)), s.seed), frame));
      let lit = painted(s, vec3f(0.7, 0.75, 0.8)) * (0.25 + 0.75 * snow);
      return Material(vec3f(0.01), lit, 0.8, vec3f(0.0));
    }
    case PAPER: {
      return matte(painted(s, vec3f(0.7, 0.68, 0.6)) * (0.94 + 0.08 * fine));
    }
    case FOLIAGE: {
      let leaf = valueNoise(s.uv * 30.0, 35u);
      return matte(painted(s, vec3f(0.07, 0.22, 0.06)) * (0.6 + 0.7 * leaf));
    }
    case RUBBER: {
      return polished(painted(s, vec3f(0.02, 0.02, 0.02)), 0.15);
    }
    case SKIN: {
      return
        polished(painted(s, vec3f(0.6, 0.4, 0.3)) * (0.95 + 0.08 * fine), 0.2);
    }
    default: {
      return matte(painted(s, vec3f(0.5, 0.5, 0.48)) * (0.92 + 0.1 * fine));
    }
  }
}
`,fs,a1),fv={pot:{foot:.15,rim:.2,height:.36},stem:.035,lean:.02,out:.36,tall:M=>.5+.6*M,foliage:[{at:[.3,.5],radius:.2},{at:[.3,.85],radius:.34},{at:[.3,1.25],radius:.24},{at:[.3,1.55],radius:.06}],sides:6},fg=eR(eb({outline:ew(0,0x80000000),gaps:ew(0,0x80000000)}),M=>el("0")(`cube/doorway-sun/${M}`)),fb=M=>`${String(Math.floor(M))}u`,fw=`
/// A potted plant's radius \`y\` metres up it, \`tall\` its own draw of
/// height: the pot, the stem, then the foliage's turns. 0 past either end.
fn shrubRadius(y: f32, tall: f32) -> f32 {
  if (y < 0.0) {
    return 0.0;
  }
  if (y < ${fv.pot.height.toFixed(4)}) {
    return mix(${fv.pot.foot.toFixed(4)}, ${fv.pot.rim.toFixed(4)}, y / ${fv.pot.height.toFixed(4)});
  }
${fv.foliage.map(({at:[M,L],radius:R},O)=>{let A=`${M.toFixed(4)} + ${L.toFixed(4)} * tall`,E=fv.foliage[O-1];if(void 0===E)return`  if (y < ${A}) {
    return ${(fv.stem/2).toFixed(4)};
  }`;let T=`${E.at[0].toFixed(4)} + ${E.at[1].toFixed(4)} * tall`;return`  if (y < ${A}) {
    return mix(${E.radius.toFixed(4)}, ${R.toFixed(4)}, (y - (${T})) / (${A} - (${T})));
  }`}).join("\n")}
  return 0.0;
}`,fx=tO("doorway-sun",`
/// The doorway in the shell's east face: its north and south jambs, metres
/// south of the face's north end, and its head over the floor; then the
/// wall's inner and outer faces, metres east.
const DOOR = vec3f(${tG.from.toFixed(4)}, ${tG.to.toFixed(4)}, ${tG.height.toFixed(4)});
const DOOR_FACES = vec2f(${tW.toFixed(4)}, 5.0000);

/// What the doorway shows of the evening outside, as light: sky by the sun,
/// sea and sand.
const SKY_IN = vec3f(3.4, 2.5, 1.8);

/// The most of a mirror the floor is let become, seen along itself.
const SILL_MIRROR = 0.12;

/// How much of the light on a leaf's back comes through it, and its colour.
const LEAF_THROUGH = vec3f(0.16, 0.3, 0.05);

/// How much light a metre of the room's air scatters, and how far forward.
const DUST = 0.007;
const DUST_FORWARD = 0.6;
const SHAFT_STEPS = 12;

/// How far inside the doorway a ray from \`p\` along \`dir\` crosses the plane
/// \`x\` metres east, negative outside it, and how far along the ray that is.
fn doorMargin(p: vec3f, dir: vec3f, x: f32) -> vec2f {
  let far = (x - p.x) / dir.x;
  let hit = p + dir * far;
  return vec2f(min(min(hit.z - DOOR.x, DOOR.y - hit.z), DOOR.z - hit.y), far);
}

/// The share of a beam from \`p\` along \`dir\` that leaves by the doorway,
/// \`spread\` the tangent of half its width: both faces of the wall bound it.
fn throughDoor(p: vec3f, dir: vec3f, spread: f32) -> f32 {
  if (dir.x < 1e-4) {
    return 0.0;
  }
  let outer = doorMargin(p, dir, DOOR_FACES.y);
  // A point in the wall's thickness has only the outer face ahead of it.
  let inner = select(doorMargin(p, dir, DOOR_FACES.x).x, outer.x, p.x > DOOR_FACES.x);
  let soft = max(spread * outer.y, 0.003);
  return smoothstep(-soft, soft, min(inner, outer.x));
}
${fw}

/// How much of a ray from \`p\` along \`dir\` a potted plant lets by, 1 for
/// all of it: \`shrub\` is its axis, metres east and south, and its draw of
/// height. The ray is taken where it passes the axis, so the shadow is the
/// plant's outline from the sun's side, ragged and holed where it is leaves.
fn shrubShade(p: vec3f, dir: vec3f, shrub: vec3f) -> f32 {
  let run = length(dir.xz);
  let flat = dir.xz / run;
  let to = shrub.xy - p.xz;
  let ahead = dot(to, flat);
  let aside = to.x * flat.y - to.y * flat.x;
  let y = p.y + ahead * dir.y / run;
  let radius = shrubRadius(y, shrub.z);
  if (radius <= 0.0 || ahead < -radius) {
    return 1.0;
  }
  let soft = max(SUN_SPREAD * ahead / run, 0.004);
  let leafy = step(${fv.foliage[0].at[0].toFixed(4)} + ${fv.foliage[0].at[1].toFixed(4)} * shrub.z, y);
  let at = vec2f(aside, y);
  // Six flat sides come a little inside the radius their corners stand on.
  let edge = radius * 0.93 * (1.0 - 0.32 * leafy * valueNoise(at * 15.0, ${fb(fg.outline)}));
  let cover = smoothstep(-soft, soft, edge - abs(aside))
    * smoothstep(-radius, radius, ahead);
  // Gaps between leaves, wider toward the outline, which a sun with width
  // blurs into an even thinning the farther the shadow falls.
  let thin = smoothstep(0.1, 0.95, abs(aside) / edge);
  let gaps = smoothstep(0.52, 0.74, valueNoise(at * 11.0, ${fb(fg.gaps)}));
  let sharp = 1.0 / (1.0 + soft * soft * 900.0);
  let open = leafy * thin * 0.9 * mix(0.3, gaps, sharp);
  return 1.0 - cover * (1.0 - open);
}

/// How much of the sun reaches \`p\`: through the doorway, past what stands
/// in the beam.
fn sunAt(p: vec3f) -> f32 {
  return throughDoor(p, SUN_DIR, SUN_SPREAD) * sunShade(p, SUN_DIR);
}

/// How much of a small patch's light reaches \`p\`, per square metre of the
/// patch: the patch at \`at\` facing \`facing\`, the point facing \`normal\`,
/// a little of it reaching round to faces turned just away.
fn patchLight(p: vec3f, normal: vec3f, at: vec3f, facing: vec3f) -> f32 {
  let to = at - p;
  let d2 = dot(to, to);
  let l = to * inverseSqrt(max(d2, 1e-6));
  let lands = max((dot(normal, l) + 0.25) / 1.25, 0.0);
  let leaves = max(-dot(facing, l), 0.0);
  return lands * leaves / (3.14159 * d2 + 0.6);
}

/// The doorway as a light: how much of what it shows falls on \`p\`.
fn doorLight(p: vec3f, normal: vec3f) -> f32 {
  let area = (DOOR.y - DOOR.x) * DOOR.z / 6.0;
  var sum = 0.0;
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
      let at = vec3f(
        DOOR_FACES.x,
        DOOR.z * (f32(j) + 0.5) / 3.0,
        mix(DOOR.x, DOOR.y, (f32(i) + 0.5) / 2.0),
      );
      sum += area * patchLight(p, normal, at, vec3f(-1.0, 0.0, 0.0));
    }
  }
  return sum;
}

/// The sun's light the dust between the eye and the point throws at the
/// eye: the beam as a shaft in the air, strongest looked into. It is added
/// to the point's light, so nothing is blended over anything.
fn sunShaft(s: Surf) -> vec3f {
  let view = turnedToShell(s.view);
  let eye = toShell(s.p) - view * s.far;
  var first = 0.0;
  if (eye.x > DOOR_FACES.x) {
    // An eye outside looks in through the doorway: the air begins at it.
    if (view.x >= 0.0) {
      return vec3f(0.0);
    }
    first = (DOOR_FACES.x - eye.x) / view.x;
  }
  let span = s.far - first;
  if (span <= 0.0) {
    return vec3f(0.0);
  }
  // Each pixel's steps start a different share of a step in, the same every
  // frame, so the shaft's banding becomes a still grain.
  let start = fract(52.9829189 * fract(dot(s.pixel, vec2f(0.06711056, 0.00583715))));
  var lit = 0.0;
  for (var i = 0; i < SHAFT_STEPS; i++) {
    lit += sunAt(eye + view * (first + span * (f32(i) + start) / f32(SHAFT_STEPS)));
  }
  let g = DUST_FORWARD;
  let forward = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * dot(view, SUN_DIR), 1.5);
  return SUN_LIGHT * (DUST * 0.25 * forward * lit * span / f32(SHAFT_STEPS));
}

/// The point lit by the sun through the doorway and by nothing else that
/// shines: the beam where it falls, the doorway's sky and the beam's landing
/// places on the rest, \`ambient\` under it all, and the sun's highlight on
/// anything polished. A polished floor is left a mirror showing the doorway.
fn sunlitRoom(s: Surf, m: Material, ambient: vec3f) -> vec3f {
  let at = toShell(s.p);
  let view = turnedToShell(s.view);
  let normal = turnedToShell(normalize(s.normal + m.relief));
  let door = throughDoor(at, SUN_DIR, SUN_SPREAD);
  let sun = door * sunShade(at, SUN_DIR);
  let facing = max(dot(normal, SUN_DIR), 0.0);
  var direct = SUN_LIGHT * (facing * sun);
  if (s.kind == FOLIAGE) {
    direct += SUN_LIGHT * LEAF_THROUGH * (mix(sun, door, 0.5) * (1.0 - facing));
  }
  let fill = ambient + SKY_IN * doorLight(at, normal) + sunBounce(at, normal);
  let shade = cornerShade(s);
  // A polished thing mirrors more the more it is looked along.
  let along = pow(1.0 - max(dot(normal, -view), 0.0), 5.0);
  let floored = m.gloss > 0.0 && s.normal.y > 0.9 && s.kind != PLASTIC;
  // The doorway and the sun in it are so much brighter than the room that a
  // floor let go all the way to a mirror would show nothing of itself.
  let mirror = min(m.gloss * (0.04 + 0.96 * along), select(1.0, SILL_MIRROR, floored));
  let power = mix(6.0, 600.0, m.gloss * m.gloss);
  let half = normalize(SUN_DIR - view);
  let glint = pow(max(dot(normal, half), 0.0), power) * (power + 8.0) / 25.0;
  var colour = m.albedo * (fill * shade + direct) + m.emission
    + SUN_LIGHT * (facing * sun * glint * mirror);
  if (s.kind == PLASTIC) {
    // Plastic's highlight here is the doorway's sky, mirrored blurred, and
    // held under a mirror's: the sky is bright enough to paint a face white.
    colour += SKY_IN * throughDoor(at, reflect(view, normal), SKIN_BLUR)
      * (min(0.04 + 0.96 * along, 0.2) * shade);
  }
  if (floored) {
    let plane = normalize(s.normal + RIPPLE * m.relief);
    let blur = BLUR * (1.0 - m.gloss);
    // Where the frame cannot follow the reflection out of the doorway, the
    // floor shows the sky it opens on.
    let fallback = SKY_IN * throughDoor(at, turnedToShell(reflect(s.view, plane)), blur);
    mirroring = Mirror(mirror, plane, blur, fallback);
  }
  return colour;
}
`,fs,a1,ff,t7,ni,tq),fy=({shader:M,air:L},...R)=>`diagnostic(off, derivative_uniformity);

${tI([tO("air",`const AIR = ${tA(L)};`),M,fp,fs,...R])}`,fk=tO("cube/entities/theme/dwelling/household/lib/household",`
/// The word of the room's side \`side\` (0 east, 1 south, 2 west, 3 north).
fn sideWord(s: Surf, side: u32) -> u32 {
  return hashOf(s.seed, side + 0x5du);
}

/// The word of the wall an upright point is on: sideWord of the side it closes.
fn wallWord(s: Surf) -> u32 {
  let eastWest = select(0u, 2u, s.normal.x > 0.0);
  let northSouth = select(1u, 3u, s.normal.z > 0.0);
  return
    sideWord(
      s,
      select(northSouth, eastWest, abs(s.normal.x) > abs(s.normal.z)),
    );
}

/// How far \`p\` is outside a box \`half\` each way from the origin; negative inside.
fn boxAway(p: vec2f, half: vec2f) -> f32 {
  let d = abs(p) - half;
  return max(d.x, d.y);
}

/// 1 where \`away\` is negative, 0 past \`soft\`.
fn within(away: f32, soft: f32) -> f32 {
  return 1.0 - smoothstep(0.0, soft, away);
}

/// \`a\` modulo \`n\`, never negative.
fn wrapped(a: i32, n: i32) -> i32 {
  return ((a % n) + n) % n;
}

/// From the nearest lamp of a \`grid\`-a-side ceiling to a floor or ceiling
/// point, in metres east and south.
fn fromLamp(s: Surf, grid: i32) -> vec2f {
  let pitch = ROOM.xz / f32(grid);
  return (fract(s.p.xz / pitch) - 0.5) * pitch;
}

/// How brightly the room's own lamps burn right now, 0 to 1.
fn burning(s: Surf, lamps: Lamps) -> f32 {
  return lampLevel(s, vec2i(0), litOf(s), lamps.stutter);
}

/// A point of a half-drop repeat \`size\` across: xy from its cell's middle,
/// z the cell's own number.
fn halfDrop(uv: vec2f, size: vec2f, salt: u32) -> vec3f {
  let column = floor(uv.x / size.x);
  let v = uv.y / size.y + 0.5 * (column - 2.0 * floor(column * 0.5));
  let q = vec2f(fract(uv.x / size.x) - 0.5, fract(v) - 0.5) * size;
  return vec3f(q, unitOf(cellHash(vec2i(i32(column), i32(floor(v))), salt)));
}

/// A point on one board of a boarded face.
struct Board {
  /// Metres to the board's nearest edge.
  edge: f32,
  /// The board's own number in [0, 1).
  word: f32,
  /// Metres along and across the board, from a start of its own.
  at: vec2f,
}

/// Boards \`width\` across and \`length\` long, laid along x, each row's joints
/// where its own roll puts them.
fn boards(uv: vec2f, width: f32, length: f32, salt: u32) -> Board {
  let row = i32(floor(uv.y / width));
  let along = uv.x / length + unitOf(cellHash(vec2i(row, 0), salt));
  let local = vec2f(fract(along) * length, fract(uv.y / width) * width);
  let word = unitOf(cellHash(vec2i(i32(floor(along)), row), salt + 1u));
  let edge = min(min(local.x, length - local.x), min(local.y, width - local.y));
  return Board(edge, word, local + word * 37.0);
}

/// Blocks \`width\` across and \`ratio\` times as long, laid herringbone.
fn herringbone(uv: vec2f, width: f32, ratio: i32, salt: u32) -> Board {
  let p = uv / width;
  let i = i32(floor(p.x));
  let j = i32(floor(p.y));
  let turn = wrapped(i - j, 2 * ratio);
  var local = vec2f(f32(turn) + fract(p.x), fract(p.y));
  var id = vec2i(i - turn, j);
  if (turn >= ratio) {
    let up = 2 * ratio - 1 - turn;
    local = vec2f(f32(up) + fract(p.y), fract(p.x));
    id = vec2i(i, j - up);
  }
  let word = unitOf(cellHash(id, salt + select(0u, 1u, turn >= ratio)));
  let edge =
    min(min(local.x, f32(ratio) - local.x), min(local.y, 1.0 - local.y));
  return Board(edge * width, word, local * width + word * 37.0);
}

/// Wood's figure at a board point, 0 (the dark of a ring) to 1.
fn figure(at: vec2f, salt: u32) -> f32 {
  let wave = fbm(vec2f(at.x * 1.2, at.y * 9.0), salt, 3);
  let rings = 0.5 + 0.5 * sin(at.y * 70.0 + wave * 16.0);
  let pores = valueNoise(vec2f(at.x * 14.0, at.y * 420.0), salt + 7u);
  return 0.5 * rings + 0.3 * wave + 0.2 * pores;
}
`,fs,a1,ff),fS=tO("cube/entities/theme/dwelling/attic/config/attic",`
fn brickwork(s: Surf) -> Material {
  let y = s.p.y;
  let course = floor(y / 0.075);
  let at = vec2f(s.uv.x / 0.225 + 0.5 * fract(course * 0.5) * 2.0, y / 0.075);
  let f = fract(at);
  let edge = min(min(f.x, 1.0 - f.x) * 0.225, min(f.y, 1.0 - f.y) * 0.075);
  let face = smoothstep(0.004, 0.011, edge);
  let roll = cellHash(vec2i(floor(at)), 0x130u);
  let fired = unitOf(roll);
  let rough = fbm(s.uv * 45.0, 0x131u, 3);
  var brick =
    mix(
      vec3f(0.25, 0.07, 0.04),
      vec3f(0.12, 0.045, 0.035),
      fired * fired,
    ) * (0.7 + 0.5 * rough);
  brick = mix(brick, vec3f(0.3, 0.2, 0.1), step(0.9, unitOf(mix32(roll))));
  let lime =
    smoothstep(
      0.42,
      0.62,
      fbm(s.uv * vec2f(1.6, 2.4), s.seed ^ 0x132u, 4)
        + 0.25 * rough
        - 0.3 * smoothstep(0.3, 2.0, y),
    );
  brick =
    mix(brick, vec3f(0.44, 0.42, 0.36) * (0.8 + 0.25 * rough), 0.85 * lime);
  let soot =
    smoothstep(
      0.6,
      0.8,
      fbm(vec2f(s.uv.x * 0.9, y * 0.35), s.seed ^ 0x133u, 3),
    ) * smoothstep(0.6, ROOM.y, y);
  let mortar = vec3f(0.3, 0.27, 0.21) * (0.7 + 0.4 * rough);
  let albedo = mix(mortar, brick, face) * (1.0 - 0.75 * soot);
  return
    embossed(
      s,
      matte(albedo),
      face * (1.0 + 0.25 * rough + 0.3 * fired) + 0.2 * lime,
      0.006,
    );
}

fn dusty(s: Surf) -> Material {
  let plank = boards(s.uv, 0.19, 3.4, 0x134u);
  let grain = figure(plank.at, 0x135u);
  let gap = smoothstep(0.0, 0.006, plank.edge);
  let pine =
    mix(
      vec3f(0.14, 0.085, 0.04),
      vec3f(0.22, 0.14, 0.065),
      plank.word,
    ) * (0.55 + 0.7 * grain);
  let nail =
    within(
      length(repeated(s.uv, vec2f(0.4, 0.19)) - vec2f(0.0, 0.05)) - 0.005,
      0.003,
    );
  let walked = smoothstep(0.42, 0.6, fbm(s.uv * 0.5, 0x136u, 4));
  let fur = (1.0 - 0.85 * walked) * (0.7 + 0.3 * fbm(s.uv * 7.0, 0x137u, 3));
  var albedo = pine * mix(0.25, 1.0, gap);
  albedo = mix(albedo, vec3f(0.03, 0.025, 0.02), nail);
  albedo = mix(albedo, vec3f(0.2, 0.19, 0.17), 0.75 * fur * gap);
  let floor = polished(albedo, 0.18 * walked * gap);
  return
    embossed(
      s,
      floor,
      gap * (1.0 + 0.2 * grain) + 0.3 * fur + 0.4 * plank.word,
      0.004,
    );
}

fn raftered(s: Surf) -> Material {
  let pitch = 0.6;
  let across = spaced(s.uv.x, pitch);
  let rafter = within(abs(across) - 0.035, 0.004);
  let lath = boards(s.uv.yx, 0.12, 2.2, 0x138u);
  let felt =
    vec3f(0.035, 0.03, 0.028) * (0.6 + 0.8 * fbm(s.uv * 12.0, 0x139u, 3));
  let slat =
    mix(
      felt,
      vec3f(0.1, 0.065, 0.035) * (0.5 + 0.8 * figure(lath.at, 0x13au)),
      smoothstep(0.012, 0.02, lath.edge),
    );
  let oak =
    vec3f(0.16, 0.1, 0.05) * (0.45 + 0.8 * figure(
      vec2f(s.uv.y, across * 2.5),
      0x13bu,
    ));

  let off = fromLamp(s, 1);
  let r = length(off);
  let bulb = within(r - 0.034, 0.004);
  let holder = band(r, 0.05, 0.018);
  let on = burning(s, lamps());
  let glow = lamps().colour * (14.0 * bulb * on);
  var albedo = mix(slat, oak, rafter);
  albedo = mix(albedo, vec3f(0.03), holder);
  albedo = mix(albedo, vec3f(0.5, 0.45, 0.35), bulb);
  return
    embossed(
      s,
      glowing(albedo, glow),
      3.0 * rafter + 0.5 * smoothstep(0.0, 0.02, lath.edge) + 2.0 * holder,
      0.03,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return brickwork(s);
    }
    case FLOOR, OWNED: {
      return dusty(s);
    }
    case CEILING: {
      return raftered(s);
    }
    case TRIM: {
      return
        polished(
          vec3f(0.16, 0.1, 0.05) * (0.45 + 0.8 * figure(
            s.uv.yx * vec2f(1.0, 2.0),
            0x13bu,
          )),
          0.1,
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,fk),fM={name:"Attic",air:i7(i6(2760210)),pillar:.018,dark:.38,sound:{footing:"hollow",hum:0,air:.3,echo:.5},decor:[{thing:"cardboard-box",perRoom:1.6},{thing:"crate",perRoom:.5},{thing:"mattress",perRoom:.3},{thing:"mannequin",perRoom:.15},{thing:"mirror",perRoom:.2},{thing:"rug",perRoom:.2},{thing:"tank",perRoom:.2},{thing:"ladder",perRoom:.2}],shader:{...fS,needs:[...fS.needs,fm("attic",{lamp:[3.6,2.3,1.05],ambient:[.006,.004,.003],grid:1,panel:[.1,.1],stutter:.12,visibility:15,exposure:1.1,glow:.3,fringe:.006,vignette:.5,noise:.026})]}},fL=tO("cube/entities/theme/dwelling/bathroom/config/bathroom",`
const GLAZED = 0.15;

fn glazed(s: Surf) -> Material {
  let y = s.p.y;
  let at = vec2f(s.uv.x, y);
  let pencil = band(y, 1.065, 0.03);
  let tile = tiling(at, GLAZED, 0.005, 0xc0u);
  let q = repeated(at, vec2f(GLAZED));
  let low = within(y - 1.05, 0.002);
  let gone = step(0.996, tile.y) * (1.0 - pencil);
  let mint = vec3f(0.2, 0.4, 0.33);
  let white = vec3f(0.56, 0.57, 0.53);
  let craze = worley(at * 70.0 + tile.y * 31.0, 0xc1u).x;
  var face =
    mix(white, mint, low)
      * (0.9 + 0.14 * fract(tile.y * 9.0))
      * (0.93 + 0.1 * smoothstep(0.0, 0.3, craze));
  face = mix(face, vec3f(0.012, 0.014, 0.014), pencil);
  let comb = 0.5 + 0.5 * cos(at.x * 700.0);
  let bed = vec3f(0.22, 0.2, 0.17) * (0.7 + 0.4 * comb);
  let rising = 1.0 - smoothstep(0.0, 0.5, y) + smoothstep(1.9, ROOM.y, y);
  let mould = rising * fbm(at * 5.0, s.seed ^ 0xc2u, 3);
  let grout =
    mix(
      vec3f(0.3, 0.3, 0.27),
      vec3f(0.03, 0.035, 0.025),
      clamp(1.6 * mould, 0.0, 1.0),
    );
  let seam =
    tile.x * (1.0 - pencil) + pencil * band(fract(at.x / 0.2) * 0.2, 0.1, 0.19);
  let scale =
    smoothstep(
      0.6,
      0.75,
      fbm(vec2f(at.x * 11.0, y * 0.6), s.seed ^ 0xc3u, 3),
    ) * (1.0 - smoothstep(0.2, 1.6, y));
  var albedo = mix(grout, mix(face, bed, gone), seam);
  albedo = mix(albedo, vec3f(0.42, 0.33, 0.2), 0.5 * scale);
  let pillow = seam * (1.0 - 14.0 * dot(q, q) / GLAZED) * (1.0 - gone);
  let wall = polished(albedo, 0.85 * seam * (1.0 - gone) * (1.0 - 0.6 * scale));
  return
    embossed(
      s,
      wall,
      0.5 * seam + pillow - 0.6 * gone * seam + 0.1 * gone * comb,
      0.004,
    );
}

fn mosaic(s: Surf) -> Material {
  let hex = honeycomb(s.uv / 0.05);
  let reach = max(dot(abs(hex.xy), vec2f(0.5, HEX_ROW)), abs(hex.x));
  let joint = smoothstep(0.0, 0.07, 0.5 - reach);
  let column = i32(round(hex.z * 2.0));
  let row = i32(round(hex.w / HEX_ROW));
  let dot6 =
    wrapped(column + 3 * (wrapped(row, 4) / 2), 6) == 0 && wrapped(row, 2) == 0;
  let word = unitOf(cellHash(vec2i(column, row), 0xc4u));
  let china =
    select(
      vec3f(0.5, 0.5, 0.46),
      vec3f(0.02, 0.025, 0.03),
      dot6,
    ) * (0.9 + 0.14 * word);
  let dirt = fbm(s.uv * 1.6, 0xc5u, 3);
  let grout = vec3f(0.16, 0.15, 0.12) * (0.5 + 0.7 * dirt);

  let pool = smoothstep(0.42, 0.6, fbm(s.uv * 0.6, 0xc6u, 3));
  let drip = worley(s.uv * 0.9, 0xc7u);
  let beat = fract(s.time * (0.25 + 0.2 * drip.y) + drip.y * 7.0);
  let ring =
    sin((drip.x - beat * 0.5) * 90.0)
      * within(abs(drip.x - beat * 0.5) - 0.05, 0.05)
      * (1.0 - beat);
  let floor =
    polished(
      mix(grout, china, joint) * (1.0 - 0.3 * pool),
      mix(0.55 * joint, 0.96, pool),
    );
  return
    embossed(
      s,
      floor,
      (joint + 0.5 * word) * (1.0 - pool) + 0.8 * ring * pool,
      0.002,
    );
}

fn mouldy(s: Surf) -> Material {
  let spot = worley(s.uv * 38.0, 0xc8u);
  let wet =
    clamp(
      damp(s) + smoothstep(0.6, 0.8, fbm(s.uv * 0.5, s.seed ^ 0xc9u, 4)),
      0.0,
      1.0,
    );
  let colony = within(spot.x - 0.3 * spot.y, 0.12) * wet;
  let blister = smoothstep(0.55, 0.7, fbm(s.uv * 6.0, s.seed ^ 0xcau, 3)) * wet;
  let paint = vec3f(0.5, 0.52, 0.5) * (0.92 + 0.08 * fbm(s.uv * 3.0, 0xcbu, 2));
  var albedo = mix(paint, vec3f(0.03, 0.04, 0.03), 0.85 * colony);

  let off = fromLamp(s, 2);
  let r = length(off);
  let lens = within(r - 0.13, 0.004);
  let rim = band(r, 0.15, 0.035);
  let guard = lens * max(band(off.x, 0.0, 0.012), band(off.y, 0.0, 0.012));
  let ribs = 0.8 + 0.2 * cos(r * 260.0);
  let glow =
    lamps().colour * (6.0 * lens * ribs * (1.0 - guard) * burning(s, lamps()));
  albedo = mix(albedo, vec3f(0.5, 0.52, 0.5), lens);
  albedo = mix(albedo, vec3f(0.05, 0.055, 0.06), max(rim, guard));
  let ceiling = Material(albedo, glow, 0.35 + 0.3 * wet, vec3f(0.0));
  return
    embossed(
      s,
      ceiling,
      0.4 * blister + 3.0 * rim + 2.0 * guard - 0.15 * colony,
      0.006,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return glazed(s);
    }
    case FLOOR, OWNED: {
      return mosaic(s);
    }
    case CEILING: {
      return mouldy(s);
    }
    case TRIM: {
      return
        polished(
          vec3f(0.5, 0.52, 0.5) * (0.9 + 0.1 * fbm(s.uv * 9.0, 0xcbu, 2)),
          0.6,
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,fl,fp,fk,fi,fs,a1),fR={name:"Bathroom",air:i7(i6(0x9aa8a4)),pillar:.02,dark:.05,sound:{footing:"wet",hum:50,air:.25,echo:2.6},decor:[{thing:"mirror",perRoom:1},{thing:"drain",perRoom:.8},{thing:"pipe",perRoom:.8},{thing:"radiator",perRoom:.3},{thing:"curtain",perRoom:.4},{thing:"wet-floor-sign",perRoom:.1},{thing:"vent",perRoom:.4}],shader:{...fL,needs:[...fL.needs,fm("bathroom",{lamp:[1.25,1.45,1.5],ambient:[.012,.015,.015],grid:2,panel:[.26,.26],stutter:.08,visibility:22,exposure:1,glow:.24,fringe:.004,vignette:.3,noise:.014})]}},fO=tO("cube/entities/theme/dwelling/den/config/den",`
fn lamps() -> Lamps {
  return
    Lamps(
      vec3f(4.4, 2.5, 0.95),
      vec3f(0.008, 0.005, 0.003),
      1,
      vec2f(0.3),
      0.04,
    );
}

fn panelling(s: Surf) -> Material {
  let y = s.p.y;
  let width = 0.14;
  let fx = fract(s.uv.x / width) * width;
  let word = unitOf(cellHash(vec2i(i32(floor(s.uv.x / width)), 0), 0xd0u));
  let groove = within(min(fx, width - fx) - 0.003, 0.005);
  let grain = figure(vec2f(y + word * 23.0, fx + word * 3.0), 0xd1u);
  let knot = worley(vec2f(s.uv.x * 9.0, y * 2.2) + word * 9.0, 0xd2u);
  let eye = within(knot.x - 0.07, 0.05) * step(0.8, knot.y);
  let walnut =
    mix(
      vec3f(0.075, 0.032, 0.013),
      vec3f(0.17, 0.08, 0.03),
      word,
    ) * (0.5 + 0.8 * grain);
  let rail = max(within(y - 0.12, 0.003), within(ROOM.y - 0.09 - y, 0.003));
  let handled =
    1.0 - 0.25 * band(y, 1.1, 0.5) * fbm(s.uv * 3.0, s.seed ^ 0xd3u, 3);
  var albedo =
    mix(walnut, vec3f(0.02, 0.008, 0.004), max(groove, eye) * (1.0 - rail));
  albedo = mix(albedo, vec3f(0.06, 0.026, 0.011) * (0.6 + 0.6 * grain), rail);
  let wall = polished(albedo * handled, 0.42 * (1.0 - groove));
  return
    embossed(
      s,
      wall,
      0.12 * grain - (groove + 0.5 * eye) * (1.0 - rail) + 1.5 * rail,
      0.006,
    );
}

fn shag(s: Surf) -> Material {
  let tuft = worley(s.uv * 95.0, 0xd4u);
  let lie = fbm(s.uv * 5.0, 0xd5u, 3);
  let bald = fbm(s.uv * 0.5, 0xd6u, 3);
  let orange = mix(vec3f(0.2, 0.05, 0.007), vec3f(0.27, 0.11, 0.016), lie);
  let lain = smoothstep(0.55, 0.8, bald);
  let wool =
    mix(orange, vec3f(0.12, 0.04, 0.01), lain)
      * (0.3 + 1.2 * tuft.x)
      * (0.8 + 0.4 * tuft.y);
  return
    embossed(s, matte(wool), (tuft.x + 0.5 * lie) * (1.0 - 0.7 * lain), 0.006);
}

fn beamed(s: Surf) -> Material {
  let pitch = 1.25;
  let across = spaced(s.uv.x, pitch);
  let beam = within(abs(across) - 0.08, 0.004);
  let grain = figure(vec2f(s.uv.y, across * 2.0), 0xd7u);
  let wood = vec3f(0.045, 0.02, 0.009) * (0.5 + 0.9 * grain);
  let stipple = worley(s.uv * 45.0, 0xd8u).x;
  let board =
    vec3f(0.4, 0.3, 0.16)
      * (0.82 + 0.18 * stipple)
      * (1.0 - 0.5 * damp(s))
      * (0.75 + 0.25 * fbm(s.uv * 0.9, s.seed ^ 0xd9u, 3));
  let off = fromLamp(s, 1);
  let r = length(off);
  let globe = within(r - 0.14, 0.006);
  let collar = band(r, 0.155, 0.02);
  let swirl = 0.6 + 0.4 * fbm(off * 30.0, 0xdau, 3);
  let glow =
    lamps().colour * (3.4
      * globe
      * swirl
      * (0.55 + 0.45 * within(r - 0.03, 0.09))
      * burning(s, lamps()));
  var albedo = mix(board, wood, beam);
  albedo = mix(albedo, vec3f(0.3, 0.12, 0.02), globe);
  albedo = mix(albedo, vec3f(0.3, 0.2, 0.05), collar);
  let ceiling = Material(albedo, glow, 0.3 * beam + 0.6 * collar, vec3f(0.0));
  return
    embossed(
      s,
      ceiling,
      3.0 * beam + 0.1 * stipple + 0.3 * beam * grain - 1.0 * globe,
      0.02,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return panelling(s);
    }
    case FLOOR, OWNED: {
      return shag(s);
    }
    case CEILING: {
      return beamed(s);
    }
    case TRIM: {
      return
        polished(
          vec3f(0.06, 0.026, 0.011) * (0.5 + 0.8 * figure(s.uv.yx, 0xd1u)),
          0.42,
        );
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  return haze(roomLight(s, m, lamps()), s, AIR, 34.0);
}

/// The frame off a worn home-video tape. Brightness keeps most of its
/// detail and colour is smeared a few hundredths of the screen to the
/// right; every line sits a little off its neighbours, far off inside a band
/// of snow that rolls up the picture, and the bottom lines tear sideways
/// where the heads switch.
fn themeLens(l: Lens) -> vec3f {
  let line = u32(l.uv.y * 262.0);
  let frame = u32(l.time * 30.0);
  let roll = 1.0 - fract(l.time * 0.045);
  let fault = within(abs(l.uv.y - roll) - 0.012, 0.035);
  let shake = unitOf(hashOf(line, frame)) - 0.5;
  let foot = smoothstep(0.955, 0.975, l.uv.y);
  let tear = foot * (0.05 + 0.03 * sin(l.time * 2.3) + 0.04 * shake);
  let uv = vec2f(l.uv.x + shake * (0.0012 + 0.03 * fault) + tear, l.uv.y);

  let sharp =
    0.5 * sceneAt(uv).rgb + 0.25 * (sceneAt(
      uv + vec2f(0.0016, 0.0),
    ).rgb + sceneAt(uv - vec2f(0.0016, 0.0)).rgb);
  var smear = vec3f(0.0);
  for (var tap = 0; tap < 6; tap++) {
    smear += sceneAt(uv - vec2f(0.0035 * f32(tap) + 0.002, 0.0)).rgb;
  }
  smear = smear / 6.0;
  let weights = vec3f(0.3, 0.59, 0.11);
  let colour =
    smear * clamp(
      dot(sharp, weights) / max(dot(smear, weights), 1e-4),
      0.0,
      3.0,
    );
  let film = tonemap((mix(sharp, colour, 0.85) + glowAt(uv) * 0.22) * 1.15);
  let luma = dot(film, weights);
  var tape =
    (vec3f(luma) + (film - vec3f(luma)) * vec3f(1.35, 1.1, 0.9)) * 0.9 + vec3f(
      0.035,
      0.03,
      0.04,
    );
  tape *= 0.94 + 0.06 * cos(l.uv.y * 262.0 * 6.2831853);
  let snow = unitOf(hashOf(hashOf(u32(l.uv.x * 420.0), line), frame));
  let dropout = step(0.997, unitOf(hashOf(line / 2u, frame))) * step(snow, 0.5);
  tape =
    mix(
      tape,
      vec3f(0.85),
      max(
        fault * step(0.72, snow),
        max(0.7 * foot * step(0.55, snow), dropout),
      ),
    );
  tape += (snow - 0.5) * 0.045;
  return tape * vignette(l, 0.3);
}
`,fs,a1,fl,fp,ff,fk,fn,fo),fA=i7(i6(787971)),fE=tO("cube/entities/theme/dwelling/drawing/config/drawing",`
const SUGAR = vec3f(0.62, 0.57, 0.45);

fn lamps() -> Lamps {
  return Lamps(vec3f(1.0), vec3f(0.0), 1, vec2f(0.4), 0.0);
}

/// \`colour\` scribbled over the paper in strokes leaning \`lean\` radians,
/// the paper's tooth showing through wherever the wax skipped.
fn wax(uv: vec2f, colour: vec3f, lean: f32, salt: u32) -> vec3f {
  let along = vec2f(cos(lean), sin(lean));
  let stroke =
    fbm(
      vec2f(dot(uv, vec2f(-along.y, along.x)) * 26.0, dot(uv, along) * 1.4),
      salt,
      3,
    );
  let tooth = valueNoise(uv * 230.0, salt + 5u);
  let cover = smoothstep(0.2, 0.55, stroke + 0.4 * tooth - 0.12);
  return mix(SUGAR, colour, cover * (0.8 + 0.2 * tooth));
}

/// A line drawn by hand along where \`away\` is nought, \`width\` thick.
fn drawn(uv: vec2f, away: f32, width: f32) -> f32 {
  let wobble = 0.012 * (fbm(uv * 4.0, 0x140u, 2) - 0.5);
  return
    band(away + wobble, 0.0, width) * (0.65 + 0.35 * valueNoise(
      uv * 230.0,
      0x141u,
    ));
}

fn houseWall(s: Surf) -> Material {
  let y = s.p.y;
  let at = vec2f(alongWall(s), y);
  let slot = floor(at.x / 1.66);
  let x = at.x - (slot + 0.5) * 1.66;
  let roll = hashOf(wallWord(s), u32(slot) + 0x142u);
  let what = unitOf(roll);
  let lean = 0.6 + 0.5 * unitOf(mix32(s.seed));
  var crayon = wax(s.uv, vec3f(0.6, 0.42, 0.06), lean, 0x143u);
  var ink = 0.0;

  if (what < 0.55) {
    let pane = boxAway(vec2f(x, y - 1.3), vec2f(0.36, 0.33));
    crayon =
      mix(
        crayon,
        wax(s.uv, vec3f(0.12, 0.3, 0.6), -0.5, 0x144u),
        within(pane, 0.004),
      );
    let drape = max(pane, 0.22 - abs(x) - 0.5 * (y - 1.0));
    crayon =
      mix(
        crayon,
        wax(s.uv, vec3f(0.55, 0.08, 0.1), 1.4, 0x145u),
        within(drape, 0.004) * step(what, 0.3),
      );
    let bars = min(abs(x), abs(y - 1.3));
    ink =
      max(
        drawn(s.uv, pane, 0.014),
        drawn(s.uv, bars, 0.01) * within(pane, 0.004),
      );
  } else if (what < 0.8) {
    let leaf = boxAway(vec2f(x, y - 0.8), vec2f(0.34, 0.86));
    crayon =
      mix(
        crayon,
        wax(s.uv, vec3f(0.3, 0.13, 0.04), 1.57, 0x146u),
        within(leaf, 0.004),
      );
    let knob = length(vec2f(x - 0.22, y - 0.85)) - 0.035;
    crayon = mix(crayon, vec3f(0.6, 0.5, 0.05), within(knob, 0.004));
    ink = max(drawn(s.uv, leaf, 0.014), drawn(s.uv, knob, 0.008));
  }

  let bed = floor(at.x / 0.36);
  let fx = at.x - (bed + 0.5) * 0.36;
  let tall = 0.2 + 0.22 * unitOf(hashOf(wallWord(s), u32(bed) + 0x147u));
  let stem = drawn(s.uv, abs(fx + 0.03 * sin(y * 20.0)), 0.012) * step(y, tall);
  let bloom = length(vec2f(fx, y - tall)) - 0.06;
  let petal = vec3f(0.6, 0.07, 0.1 + 0.4 * unitOf(hashOf(u32(bed), 0x148u)));
  let grass = within(y - 0.07 - abs(spaced(at.x, 0.05)), 0.004);
  crayon = mix(crayon, vec3f(0.07, 0.33, 0.06), max(stem, grass));
  crayon = mix(crayon, wax(s.uv, petal, 0.3, 0x149u), within(bloom, 0.004));
  crayon = mix(crayon, vec3f(0.62, 0.5, 0.05), within(bloom + 0.04, 0.004));
  ink = max(ink, drawn(s.uv, bloom, 0.008));
  return matte(mix(crayon, vec3f(0.03, 0.025, 0.03), ink));
}

fn planked(s: Surf) -> Material {
  let crayon = wax(s.uv, vec3f(0.42, 0.2, 0.05), 0.08, 0x14au);
  let row = (fract(s.uv.y / 0.5) - 0.5) * 0.5;
  let butt = (fract(s.uv.x / 1.7 + 0.37 * floor(s.uv.y / 0.5)) - 0.5) * 1.7;
  let ink = max(drawn(s.uv, row, 0.012), drawn(s.uv, butt, 0.01));
  return matte(mix(crayon, vec3f(0.03, 0.025, 0.03), ink));
}

fn sky(s: Surf) -> Material {
  let puff = fbm(s.uv * 0.9, s.seed ^ 0x14bu, 3) - 0.56;
  var crayon = wax(s.uv, vec3f(0.2, 0.42, 0.7), 0.9, 0x14cu);
  crayon = mix(crayon, mix(SUGAR, vec3f(0.7), 0.6), within(-puff, 0.01));
  var ink = drawn(s.uv, puff, 0.012);
  let off = fromLamp(s, 1);
  let r = length(off);
  let ray = abs(fract(atan2(off.y, off.x) * 1.9098593) - 0.5);
  let up = litOf(s);
  let disc = within(r - 0.3, 0.006);
  let rays = within(ray * r - 0.025, 0.01) * step(0.38, r) * step(r, 0.75) * up;
  let sun = mix(vec3f(0.5, 0.5, 0.56), vec3f(0.75, 0.55, 0.04), up);
  crayon = mix(crayon, wax(s.uv, sun, 0.4, 0x14du), max(disc, rays));
  let smile =
    max(
      abs(length(off - vec2f(0.0, -0.02)) - 0.16) - 0.008,
      -off.y - 0.02 + 0.09,
    );
  let eyes = length(vec2f(abs(off.x) - 0.09, off.y + 0.08)) - 0.022;
  ink =
    max(
      ink,
      max(
        drawn(s.uv, r - 0.3, 0.012),
        max(within(smile, 0.004), within(eyes, 0.004)) * up,
      ),
    );
  return matte(mix(crayon, vec3f(0.03, 0.025, 0.03), ink));
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return houseWall(s);
    }
    case FLOOR, OWNED: {
      return planked(s);
    }
    case CEILING: {
      return sky(s);
    }
    case TRIM: {
      return matte(wax(s.uv, vec3f(0.5, 0.1, 0.08), 1.5, 0x14eu));
    }
    default: {
      let made = stuff(s);
      return
        matte(
          wax(s.uv * 3.0, made.albedo * 1.6 + made.emission * 0.3, 0.7, 0x14fu),
        );
    }
  }
}

/// Nothing here is lit: a face is its crayon, by day where the suns around
/// it are up and by a blue night where they are not, the one turning into
/// the other across a room's width so no line shows at an open side.
fn themeLight(s: Surf, m: Material) -> vec3f {
  let day = smoothstep(0.0, 0.3, lampReach(s, s.normal, 0.0, lamps()).z);
  let face = 0.86 + 0.14 * abs(s.normal.y) + 0.08 * s.normal.x;
  return m.albedo * face * mix(vec3f(0.16, 0.2, 0.42), vec3f(1.0), day);
}

/// The frame as a drawing: the scene's flat colour on paper, and a black
/// wax line wherever the picture turns a corner or one thing stands in front
/// of another, redrawn six times a second by a hand that never repeats itself.
fn themeLens(l: Lens) -> vec3f {
  let take = f32(u32(l.time * 6.0) % 16u);
  let wobble =
    vec2f(
      valueNoise(l.uv * 11.0 + take * 3.1, 0x150u),
      valueNoise(l.uv * 11.0 - take * 2.3, 0x151u),
    ) - 0.5;
  let uv = l.uv + wobble * 0.007;
  let px = vec2f(l.size.y / l.size.x, 1.0) * 0.0035;
  let here = sceneAt(uv);
  let z = 1.0 / max(here.a, 0.05);
  let east = 1.0 / max(sceneAt(uv + vec2f(px.x, 0.0)).a, 0.05);
  let west = 1.0 / max(sceneAt(uv - vec2f(px.x, 0.0)).a, 0.05);
  let north = 1.0 / max(sceneAt(uv - vec2f(0.0, px.y)).a, 0.05);
  let south = 1.0 / max(sceneAt(uv + vec2f(0.0, px.y)).a, 0.05);
  let bend = (abs(east + west - 2.0 * z) + abs(north + south - 2.0 * z)) / z;
  let tooth = valueNoise(l.pixel * 0.45, 0x152u);
  let line = smoothstep(0.012, 0.035, bend) * (0.7 + 0.3 * tooth);
  let page = pow(clamp(here.rgb, vec3f(0.0), vec3f(1.0)), vec3f(1.0 / 2.2));
  let drawing = mix(page, vec3f(0.07, 0.06, 0.07), line);
  return drawing * (0.94 + 0.06 * tooth) * vignette(l, 0.18);
}
`,fs,a1,fl,fp,ff,fk,fn,fo),fT=i7(i6(0xd8cfb8)),fI=tO("cube/entities/theme/dwelling/garage/config/garage",`
/// How far \`w\` is outside the tool that hung in a pegboard bay rolled
/// \`what\`: a hammer, a spanner, a saw, or nothing at all.
fn toolAway(w: vec2f, what: f32) -> f32 {
  if (what < 0.3) {
    return
      min(
        boxAway(w + vec2f(0.0, 0.04), vec2f(0.014, 0.15)),
        boxAway(w - vec2f(0.012, 0.12), vec2f(0.065, 0.024)),
      );
  }
  if (what < 0.55) {
    let jaw =
      max(
        length(w - vec2f(0.0, 0.15)) - 0.036,
        -boxAway(w - vec2f(0.0, 0.175), vec2f(0.014, 0.03)),
      );
    return
      min(
        min(boxAway(w, vec2f(0.012, 0.14)), jaw),
        abs(length(w + vec2f(0.0, 0.15)) - 0.022) - 0.01,
      );
  }
  if (what < 0.75) {
    let blade =
      boxAway(
        vec2f(w.x - 0.04, w.y + (w.x - 0.04) * 0.14),
        vec2f(0.17, 0.05 - (w.x + 0.13) * 0.09),
      );
    return min(blade, boxAway(w + vec2f(0.17, -0.02), vec2f(0.045, 0.06)));
  }
  return 1.0;
}

fn pegboard(s: Surf) -> Material {
  let y = s.p.y;
  let along = alongWall(s);
  let wall = wallWord(s);

  let flake = worley(s.uv * vec2f(38.0, 60.0), 0x110u);
  let strand =
    mix(
      vec3f(0.3, 0.2, 0.09),
      vec3f(0.14, 0.08, 0.03),
      flake.y,
    ) * (0.75 + 0.5 * flake.x);
  let sheet = 1.0 - tiling(vec2f(s.uv.x, y + 0.1), 1.22, 0.004, 0x111u).x;
  let scuffed =
    1.0 - 0.4 * smoothstep(
      0.5,
      0.75,
      fbm(s.uv * vec2f(2.0, 5.0), s.seed ^ 0x112u, 3),
    );

  let pitch = 0.025;
  let hole =
    within(
      length((fract(vec2f(s.uv.x, y) / pitch) - 0.5) * pitch) - 0.0032,
      0.0015,
    ) / (1.0 + s.far * s.far / 12.0);
  let bay = floor(along / 0.62);
  let w = vec2f(along - (bay + 0.5) * 0.62, y - 1.62);
  let roll = hashOf(wall, u32(bay) + 0x113u);
  let away = toolAway(w, unitOf(roll));
  let kept = within(away, 0.004);
  let marker = band(away, 0.0, 0.007);
  let hook = within(length(w - vec2f(0.0, 0.31)) - 0.008, 0.003);
  let dust = 0.8 + 0.12 * fbm(s.uv * 2.0, s.seed ^ 0x114u, 3);
  var board = vec3f(0.48, 0.47, 0.42) * mix(dust, 1.04, kept);
  board = mix(board, vec3f(0.03, 0.05, 0.16), marker);
  board = mix(board, vec3f(0.012), hole);

  let low = within(y - 1.1, 0.003);
  let batten = band(y, 1.1, 0.06);
  var albedo = mix(board, strand * scuffed * (1.0 - 0.7 * sheet), low);
  albedo =
    mix(
      albedo,
      vec3f(0.22, 0.15, 0.07) * (0.6 + 0.5 * fbm(
        vec2f(s.uv.x * 3.0, y * 80.0),
        0x115u,
        3,
      )),
      batten,
    );
  albedo = mix(albedo, vec3f(0.4, 0.42, 0.44), hook * (1.0 - low));
  let gloss = mix(0.2, 0.08, low) + 0.6 * hook * (1.0 - low);
  let height =
    mix(
      -0.6 * hole + 2.0 * hook,
      0.4 * flake.x - 0.8 * sheet,
      low,
    ) + 2.5 * batten;
  return embossed(s, polished(albedo, gloss), height, 0.004);
}

fn slab(s: Surf) -> Material {
  let trowel = fbm(s.uv * 1.8 + 3.0 * fbm(s.uv * 0.4, 0x116u, 2), 0x117u, 4);
  let grit = worley(s.uv * 70.0, 0x118u);
  var concrete =
    vec3f(0.16, 0.16, 0.155) * (0.72 + 0.4 * trowel) * (0.9 + 0.15 * grit.y);
  let joint = 1.0 - tiling(s.uv, 2.5, 0.014, 0x119u).x;
  let bay = fract(s.uv.x / 2.5) * 2.5;
  let line = band(bay, 0.35, 0.1) * step(0.35, fbm(s.uv * 5.0, 0x11au, 3));
  let lane = fract(s.uv.x / 2.5 - 0.14) * 2.5;
  let tread =
    0.6 + 0.4 * step(0.5, fract(s.uv.y / 0.045 + 0.3 * sin(lane * 60.0)));
  let tyre =
    max(band(lane, 0.7, 0.19), band(lane, 2.15, 0.19))
      * tread
      * smoothstep(0.3, 0.6, fbm(s.uv * vec2f(2.0, 0.3), 0x11bu, 3));
  let spot = worley(s.uv * 0.8, s.seed ^ 0x11cu);
  let oil =
    within(spot.x - 0.16 - 0.1 * fbm(s.uv * 5.0, 0x11du, 3), 0.1) * step(
      0.72,
      spot.y,
    );
  let sheen = 0.5 + 0.5 * cos(vec3f(0.0, 2.1, 4.2) + spot.x * 22.0);
  concrete = mix(concrete, vec3f(0.42, 0.33, 0.04), 0.85 * line);
  concrete *= 1.0 - 0.55 * tyre;
  concrete =
    mix(concrete, vec3f(0.012, 0.012, 0.014) + 0.012 * sheen, 0.9 * oil);
  concrete = mix(concrete, vec3f(0.03), joint);
  let floor =
    polished(concrete, mix(0.1 + 0.15 * trowel, 0.8, oil) * (1.0 - joint));
  return
    embossed(
      s,
      floor,
      (0.5 * trowel + 0.15 * grit.x) * (1.0 - oil) - 2.0 * joint,
      0.002,
    );
}

fn boarded(s: Surf) -> Material {
  let seam = 1.0 - tiling(s.uv, 1.2, 0.05, 0x11eu).x;
  let tape = seam * (0.85 + 0.15 * fbm(s.uv * 9.0, 0x11fu, 3));
  let screw =
    within(length((fract(s.uv / 0.3) - 0.5) * 0.3) - 0.006, 0.003) * step(
      abs(fract(s.uv.x / 1.2) - 0.5),
      0.13,
    );
  let stain = smoothstep(0.5, 0.7, fbm(s.uv * 0.7, s.seed ^ 0x120u, 4));
  let ring = band(fbm(s.uv * 0.7, s.seed ^ 0x120u, 4), 0.6, 0.012);
  var paper =
    vec3f(0.3, 0.3, 0.28) * (0.9 + 0.1 * valueNoise(s.uv * 90.0, 0x121u));
  paper = mix(paper, vec3f(0.46, 0.45, 0.42), tape);
  paper = mix(paper, paper * vec3f(0.7, 0.55, 0.35), 0.6 * stain + 0.5 * ring);
  paper = mix(paper, vec3f(0.1), screw);

  let off = fromLamp(s, 1);
  let tube = within(boxAway(off, vec2f(0.75, 0.02)), 0.004);
  let batten = within(boxAway(off, vec2f(0.8, 0.05)), 0.004);
  let chain =
    max(band(off.x, 0.55, 0.008), band(off.x, -0.55, 0.008)) * step(
      abs(off.y),
      0.05,
    );
  let glow = lamps().colour * (3.0 * tube * burning(s, lamps()));
  var albedo = mix(paper, vec3f(0.46, 0.47, 0.46), batten);
  albedo = mix(albedo, vec3f(0.1), chain * (1.0 - tube));
  let ceiling = Material(albedo, glow, 0.4 * batten, vec3f(0.0));
  return
    embossed(s, ceiling, 0.4 * tape + 0.2 * screw + 4.0 * batten + tube, 0.008);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return pegboard(s);
    }
    case FLOOR, OWNED: {
      return slab(s);
    }
    case CEILING: {
      return boarded(s);
    }
    case TRIM: {
      return
        polished(
          vec3f(0.42, 0.33, 0.04)
            * (0.7 + 0.4 * fbm(s.uv * 8.0, 0x11au, 3))
            * step(0.5, fract((s.uv.x + s.uv.y) / 0.3)) + vec3f(0.02),
          0.3,
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,fk),fz={name:"Garage",air:i7(i6(658446)),pillar:.02,dark:.2,sound:{footing:"concrete",hum:100,air:.1,echo:1.6},decor:[{thing:"cardboard-box",perRoom:1},{thing:"ladder",perRoom:.3},{thing:"barrel",perRoom:.3},{thing:"crate",perRoom:.4},{thing:"traffic-cone",perRoom:.2},{thing:"cable-reel",perRoom:.2},{thing:"socket",perRoom:.6},{thing:"fire-extinguisher",perRoom:.2}],shader:{...fI,needs:[...fI.needs,fm("garage",{lamp:[4.3,4.9,4.9],ambient:[.005,.006,.007],grid:1,panel:[1.5,.05],stutter:.25,visibility:40,exposure:1,glow:.18,fringe:.006,vignette:.45,noise:.022})]}},f_=tO("cube/entities/theme/dwelling/grandmother/config/grandmother",`
fn lamps() -> Lamps {
  return
    Lamps(vec3f(4.6, 3.3, 2.0), vec3f(0.012, 0.009, 0.007), 1, vec2f(0.4), 0.0);
}

fn rosePaper(s: Surf) -> Material {
  let y = s.p.y;
  let cell = halfDrop(s.uv, vec2f(0.4, 0.5), 0xa0u);
  let q = cell.xy;
  let r = length(q);
  let turn = atan2(q.y, q.x) + cell.z * 6.0;
  let bloom = within(r - 0.12 - 0.012 * cos(turn * 5.0), 0.004);
  let petal = 0.5 + 0.5 * sin(turn * 3.0 + r * 110.0);
  let heart = within(r - 0.03, 0.012);
  let leafA =
    length((q - vec2f(0.15, -0.07)) * mat2x2f(0.8, 0.6, -1.5, 2.0)) - 0.075;
  let leafB =
    length((q + vec2f(0.14, -0.1)) * mat2x2f(0.8, -0.6, 1.5, 2.0)) - 0.075;
  let leaf = within(min(leafA, leafB), 0.004) * (1.0 - bloom);
  let bud = within(length(abs(q) - vec2f(0.2, 0.25)) - 0.026, 0.004);
  let pin = band(fract(s.uv.x / 0.02) * 0.02, 0.01, 0.002);

  var paper = vec3f(0.47, 0.4, 0.27) * (1.0 - 0.07 * pin);
  paper = mix(paper, vec3f(0.12, 0.2, 0.09) * (0.8 + 0.4 * petal), leaf);
  paper =
    mix(
      paper,
      mix(vec3f(0.42, 0.1, 0.11), vec3f(0.56, 0.27, 0.24), petal),
      bloom,
    );
  paper = mix(paper, vec3f(0.25, 0.04, 0.05), heart * bloom);
  paper = mix(paper, vec3f(0.5, 0.33, 0.12), bud);

  let wall = wallWord(s);
  let middle = vec2f(1.2 + 2.6 * unitOf(wall), 1.42);
  let size =
    vec2f(
      0.2 + 0.25 * unitOf(mix32(wall)),
      0.16 + 0.2 * unitOf(mix32(wall ^ 0x7u)),
    );
  let hung = boxAway(vec2f(alongWall(s), y) - middle, size);
  let kept = within(hung, 0.006) * step(unitOf(mix32(wall ^ 0x1fu)), 0.7);
  let smoke =
    0.62
      + 0.14 * fbm(s.uv * 1.3, s.seed ^ 0xa1u, 3)
      - 0.16 * smoothstep(0.4, ROOM.y, y);
  let outline = band(hung, 0.012, 0.02) * (1.0 - kept);
  paper *=
    mix(
      vec3f(smoke, smoke * 0.94, smoke * 0.78),
      vec3f(1.06),
      kept,
    ) * (1.0 - 0.2 * outline);
  paper = plaster(s, paper);

  let rail = band(y, 1.99, 0.045);
  let frieze = within(2.012 - y, 0.003);
  let skirting = within(y - 0.2, 0.004);
  let wood =
    vec3f(0.11, 0.05, 0.022) * (0.6 + 0.7 * fbm(
      vec2f(s.uv.x * 3.0, y * 90.0),
      0xa2u,
      3,
    ));
  var albedo = mix(paper, plaster(s, vec3f(0.42, 0.35, 0.22)), frieze);
  albedo = mix(albedo, wood, max(rail, skirting));
  let trim = max(rail, skirting);
  let lift = 0.3 * bloom * petal + 0.2 * leaf + 0.1 * pin;
  return
    embossed(
      s,
      polished(albedo, mix(0.05, 0.45, trim)),
      lift * (1.0 - trim) + 6.0 * trim,
      0.003,
    );
}

fn swirlCarpet(s: Surf) -> Material {
  let cell = halfDrop(s.uv, vec2f(0.5, 0.5), 0xa3u);
  let q = cell.xy;
  let r = length(q);
  let turn = atan2(q.y, q.x) * select(-1.0, 1.0, cell.z > 0.5);
  let arm = fract(turn / 3.14159 + r * 9.0);
  let coil = within(r - 0.2, 0.01);
  let lattice =
    within(abs(abs(q.x) + abs(q.y) - 0.27) - 0.014, 0.006) * (1.0 - coil);
  var wool = vec3f(0.075, 0.035, 0.02);
  wool = mix(wool, vec3f(0.36, 0.13, 0.025), coil * step(arm, 0.42));
  wool = mix(wool, vec3f(0.4, 0.27, 0.06), coil * step(arm, 0.14));
  wool = mix(wool, vec3f(0.13, 0.14, 0.04), lattice);
  wool = mix(wool, vec3f(0.3, 0.07, 0.03), within(r - 0.035, 0.008));
  let trodden = 0.75 + 0.35 * fbm(s.uv * 0.5, 0xa4u, 3);
  let pile = valueNoise(s.uv * 260.0, 0xa5u);
  return
    embossed(
      s,
      matte(carpet(s, wool) * trodden * 1.15),
      pile + 0.6 * coil * step(arm, 0.42),
      0.002,
    );
}

fn combed(s: Surf) -> Material {
  let p = s.uv / 0.3;
  let row = floor(p.y * 2.0);
  let upper =
    vec2f(floor(p.x - 0.5 * fract((row + 1.0) * 0.5) * 2.0 + 0.5), row + 1.0);
  let lower = vec2f(floor(p.x - 0.5 * fract(row * 0.5) * 2.0 + 0.5), row);
  let upperAt = vec2f(upper.x + fract((row + 1.0) * 0.5), upper.y * 0.5);
  let lowerAt = vec2f(lower.x + fract(row * 0.5), lower.y * 0.5);
  let near = distance(p, upperAt);
  let fan = select(distance(p, lowerAt), near, near < 0.56);
  let comb = 0.5 + 0.5 * cos(fan * 42.0);
  let off = fromLamp(s, 1);
  let r = length(off);
  let scallop = 0.2 + 0.014 * cos(atan2(off.y, off.x) * 22.0);
  let shade = within(r - scallop, 0.006);
  let tassel = band(r, scallop - 0.012, 0.016);
  let cloth = 0.6 + 0.4 * smoothstep(0.2, 0.0, r);
  let glow =
    lamps().colour
      * vec3f(1.0, 0.82, 0.7)
      * (2.6 * shade * cloth * burning(s, lamps()));
  let white =
    vec3f(0.47, 0.41, 0.29)
      * (0.9 + 0.1 * fbm(s.uv * 2.0, s.seed ^ 0xa6u, 3))
      * (1.0 - 0.5 * damp(s));
  let albedo =
    mix(
      white,
      mix(vec3f(0.5, 0.3, 0.22), vec3f(0.4, 0.26, 0.08), tassel),
      shade,
    );
  return
    embossed(
      s,
      glowing(albedo, glow),
      comb * (1.0 - shade) - 3.0 * shade,
      0.004,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return rosePaper(s);
    }
    case FLOOR, OWNED: {
      return swirlCarpet(s);
    }
    case CEILING: {
      return combed(s);
    }
    case TRIM: {
      return
        polished(
          vec3f(0.11, 0.05, 0.022) * (0.7 + 0.5 * fbm(
            vec2f(s.uv.x * 60.0, s.uv.y * 2.0),
            0xa2u,
            3,
          )),
          0.4,
        );
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  return haze(roomLight(s, m, lamps()), s, AIR, 40.0);
}

/// The frame as a colour print forty years in an album: out of focus by a
/// hair, its blacks gone brown and its cyan gone altogether, struck by light
/// down one edge, specked where the emulsion lifted.
fn themeLens(l: Lens) -> vec3f {
  let px = 2.2 / l.size;
  var seen = through(l, 0.34, 0.01) * 0.4;
  seen +=
    0.15 * (sceneAt(l.uv + px).rgb
      + sceneAt(l.uv - px).rgb
      + sceneAt(l.uv + vec2f(px.x, -px.y)).rgb
      + sceneAt(l.uv - vec2f(px.x, -px.y)).rgb);
  let film = tonemap(seen * 1.1);
  let luma = dot(film, vec3f(0.3, 0.59, 0.11));
  var print = mix(vec3f(luma), film, 0.88);
  print = print * vec3f(0.92, 0.84, 0.68) + vec3f(0.1, 0.065, 0.05);
  let leak = smoothstep(0.72, 1.08, l.uv.x + 0.07 * sin(l.uv.y * 5.0));
  print += vec3f(0.5, 0.17, 0.03) * leak * leak;
  let at = l.uv * vec2f(l.size.x / l.size.y, 1.0);
  let speck = worley(at * 26.0, 0xa7u);
  let lifted = step(speck.x, 0.035) * step(0.965, speck.y);
  let hair =
    band(at.x + 0.02 * sin(at.y * 9.0), 0.31, 0.0015) * step(
      0.55,
      fract(at.y * 1.7),
    );
  print = mix(print, vec3f(0.86, 0.8, 0.68), max(lifted, 0.3 * hair));
  return print * vignette(l, 0.5) + grain(l) * 0.03;
}
`,fs,a1,fl,fp,ff,fk,fn,fo),fN=i7(i6(1839626)),fD=tO("cube/entities/theme/dwelling/guest-room/config/guest-room",`
fn quilted(s: Surf) -> Material {
  let y = s.p.y;
  let size = 0.3;
  let a = fract((s.uv.x + y) / size) - 0.5;
  let b = fract((s.uv.x - y) / size) - 0.5;
  let pillow = pow(max(cos(a * 3.1415927) * cos(b * 3.1415927), 0.0), 0.55);
  let stud = length(vec2f(0.5 - abs(a), 0.5 - abs(b))) * size;
  let button = within(stud - 0.016, 0.003);
  let pucker =
    (0.5 + 0.5 * cos(
      atan2(0.5 - abs(b), 0.5 - abs(a)) * 16.0 + a * 9.0,
    )) * within(stud - 0.09, 0.07);
  let weave = valueNoise(vec2f(s.uv.x * 40.0, y * 900.0), 0x101u);
  let faded = 0.8 + 0.25 * fbm(s.uv * 0.9, s.seed ^ 0x102u, 3);
  let satin =
    vec3f(0.4, 0.15, 0.17)
      * (0.9 + 0.1 * weave)
      * faded
      * (0.72 + 0.28 * pillow);
  let skirting = within(y - 0.15, 0.004);
  let pelmet = within(ROOM.y - 0.1 - y, 0.004);
  let trim = max(skirting, pelmet);
  var albedo = mix(satin, satin * 0.6, button);
  albedo = mix(albedo, vec3f(0.5, 0.47, 0.42), trim);
  let wall = polished(albedo, mix(0.5 + 0.2 * pillow, 0.45, trim));
  let height =
    (pillow
      - 0.12 * pucker
      - 0.35 * button
      + 0.01 * weave) * (1.0 - trim) + 1.4 * trim;
  return embossed(s, wall, height, 0.028);
}

/// The dents a bed's four feet left in the room's carpet, 0 to 1.
fn dented(s: Surf) -> f32 {
  let middle =
    vec2f(
      1.4 + 2.2 * unitOf(s.seed ^ 0x103u),
      1.4 + 2.2 * unitOf(mix32(s.seed ^ 0x104u)),
    );
  let lengthwise = unitOf(mix32(s.seed ^ 0x105u)) > 0.5;
  let half = select(vec2f(0.45, 0.95), vec2f(0.95, 0.45), lengthwise);
  let foot = length(abs(s.p.xz - middle) - half);
  return within(foot - 0.035, 0.012);
}

fn hoovered(s: Surf) -> Material {
  let stripe = 0.36;
  let lane = floor(s.uv.y / stripe);
  let pushed = lane - 2.0 * floor(lane * 0.5);
  let seam = band(fract(s.uv.y / stripe) * stripe, 0.0, 0.01);
  let pile = valueNoise(s.uv * 220.0, 0x106u);
  let nap = fbm(vec2f(s.uv.x * 3.0, s.uv.y * 14.0), 0x107u, 3);
  let tread = smoothstep(0.6, 0.8, fbm(s.uv * 0.4, 0x108u, 3));
  let dent = dented(s);
  let cream =
    vec3f(0.5, 0.45, 0.36)
      * (0.86 + 0.14 * pushed + 0.06 * nap)
      * (1.0 - 0.1 * seam);
  let wool =
    cream * (0.8 + 0.25 * pile) * (1.0 - 0.18 * tread) * (1.0 - 0.4 * dent);
  return
    embossed(
      s,
      matte(wool),
      pile + 0.6 * pushed + 0.5 * nap - 4.0 * dent,
      0.003,
    );
}

fn pleated(s: Surf) -> Material {
  let off = fromLamp(s, 1);
  let r = length(off);
  let turn = atan2(off.y, off.x);
  let pleat = 0.5 + 0.5 * cos(turn * 40.0);
  let shade = within(r - 0.2 - 0.004 * pleat, 0.005);
  let braid = band(r, 0.19, 0.016);
  let rose = within(r - 0.34, 0.006) * (1.0 - shade);
  let leaves = 0.5 + 0.5 * cos(turn * 9.0);
  let glow =
    lamps().colour
      * vec3f(1.0, 0.72, 0.68)
      * (2.4
        * shade
        * (0.55 + 0.25 * pleat + 0.4 * within(r - 0.05, 0.1))
        * burning(s, lamps()));
  let cornice = within(toNearestSide(s) - 0.09, 0.07);
  let white = plaster(s, vec3f(0.5, 0.46, 0.43)) * (1.0 - 0.4 * damp(s));
  var albedo = mix(white, vec3f(0.5, 0.26, 0.26) * (0.7 + 0.3 * pleat), shade);
  albedo = mix(albedo, vec3f(0.42, 0.3, 0.1), braid);
  return
    embossed(
      s,
      glowing(albedo, glow),
      rose * (0.6 + 0.4 * leaves * smoothstep(0.2, 0.34, r))
        + 1.5 * cornice
        - 2.0 * shade,
      0.012,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return quilted(s);
    }
    case FLOOR, OWNED: {
      return hoovered(s);
    }
    case CEILING: {
      return pleated(s);
    }
    case TRIM: {
      return polished(plaster(s, vec3f(0.5, 0.47, 0.42)), 0.45);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,fk),fU={name:"Guest room",air:i7(i6(1444876)),pillar:.016,dark:.06,sound:{footing:"soft",hum:0,air:.02,echo:.12},decor:[{thing:"bed",perRoom:.7},{thing:"wardrobe",perRoom:.6},{thing:"mirror",perRoom:.6},{thing:"curtain",perRoom:.8},{thing:"armchair",perRoom:.3},{thing:"floor-lamp",perRoom:.4},{thing:"mattress",perRoom:.15}],shader:{...fD,needs:[...fD.needs,fm("guest-room",{lamp:[4.3,3,2.5],ambient:[.011,.008,.008],grid:1,panel:[.4,.4],stutter:0,visibility:40,exposure:1,glow:.2,fringe:.004,vignette:.4,noise:.014})]}},fC=tO("cube/entities/theme/dwelling/hallway/config/hallway",`
/// Metres between one door's middle and the next.
const DOOR_PITCH = 1.25;

/// What comes under door \`slot\` of the wall with word \`wall\`: nothing, a
/// lamp left on, or a television.
fn underDoor(wall: u32, slot: f32, time: f32) -> vec3f {
  let word = hashOf(wall, u32(slot) + 0x9u);
  let roll = unitOf(word);
  if (roll > 0.34) {
    return vec3f(0.0);
  }
  if (roll > 0.1) {
    return vec3f(1.0, 0.56, 0.2);
  }
  let frame = unitOf(hashOf(word, u32(time * 7.0)));
  return vec3f(0.3, 0.5, 1.0) * (0.25 + 0.9 * frame);
}

fn doored(s: Surf) -> Material {
  let along = alongWall(s);
  let slot = floor(along / DOOR_PITCH);
  let x = along - (slot + 0.5) * DOOR_PITCH;
  let y = s.p.y;
  let wall = wallWord(s);
  let word = hashOf(wall, u32(slot));

  let stripe = band(fract(along / 0.09) * 0.09, 0.045, 0.01);
  let ground = plaster(s, vec3f(0.03, 0.085, 0.055));
  let gold = vec3f(0.42, 0.29, 0.09);
  let yellowed =
    1.0 - 0.3 * smoothstep(1.2, ROOM.y, y) * fbm(s.uv * 1.7, s.seed ^ 0x91u, 3);
  let paper = mix(ground, gold, 0.8 * stripe) * yellowed;
  let skirting = within(y - 0.16, 0.004);
  let board = vec3f(0.42, 0.39, 0.31);

  let leaf = boxAway(vec2f(x, y - 0.5), vec2f(0.38, 1.52));
  let casing = boxAway(vec2f(x, y - 0.5), vec2f(0.455, 1.6));
  let onLeaf = within(leaf, 0.003);
  let onCasing = within(casing, 0.003);
  let column = abs(x) - 0.185;
  let panel =
    min(
      boxAway(vec2f(column, y - 1.4), vec2f(0.125, 0.5)),
      boxAway(vec2f(column, y - 0.45), vec2f(0.125, 0.27)),
    );
  let sunk = smoothstep(0.0, 0.018, -panel);
  let side = select(-1.0, 1.0, (word & 1u) == 0u);
  let knob = length(vec2f(x - side * 0.3, y - 1.0));
  let onKnob = within(knob - 0.028, 0.003);
  let rose = within(knob - 0.04, 0.003);
  let keyhole =
    within(boxAway(vec2f(x - side * 0.3, y - 0.9), vec2f(0.004, 0.012)), 0.002);

  let tint = unitOf(mix32(word));
  let cream = mix(vec3f(0.5, 0.46, 0.36), vec3f(0.44, 0.36, 0.22), tint * tint);
  let odd = unitOf(mix32(word ^ 0x33u)) > 0.93;
  let paint = select(cream, vec3f(0.16, 0.02, 0.02), odd);
  let brushed = fbm(vec2f(s.uv.x * 90.0, s.uv.y * 4.0), 0x92u, 2);
  let grime =
    1.0 - 0.35 * within(knob - 0.14, 0.12) * fbm(s.uv * 30.0, word, 2);
  let door = paint * (0.9 + 0.12 * brushed) * (1.0 - 0.18 * sunk) * grime;
  let brass = vec3f(0.5, 0.33, 0.08);

  let gap = onLeaf * within(y - 0.014, 0.003);
  let under = underDoor(wall, slot, s.time);
  var albedo = mix(paper, board, skirting);
  albedo = mix(albedo, cream * 0.92, onCasing);
  albedo = mix(albedo, door, onLeaf);
  albedo = mix(albedo, brass * 0.8, rose * onLeaf);
  albedo = mix(albedo, brass, onKnob);
  albedo = mix(albedo, vec3f(0.004), max(keyhole, gap));
  let emission = under * (2.2 * gap + 0.9 * keyhole);
  let gloss = mix(mix(0.06, 0.45, max(onCasing, skirting)), 0.8, onKnob);
  let height =
    0.6 * onCasing
      + 0.3 * skirting
      - 0.5 * onLeaf * (1.0 + sunk)
      + 2.0 * onKnob
      + 0.02 * brushed * onCasing
      + 0.03 * stripe;
  return
    embossed(s, Material(albedo, emission, gloss, vec3f(0.0)), height, 0.02);
}

/// Light from under the doors of the room's closed sides, as the floor takes it.
fn spilled(s: Surf) -> vec3f {
  let toSide = toSides(s);
  var sum = vec3f(0.0);
  for (var side = 0u; side < 4u; side++) {
    if (!closedAt(s, side) || toSide[side] > 1.2) {
      continue;
    }
    let along = select(s.p.x, s.p.z, (side & 1u) == 0u);
    let slot = floor(along / DOOR_PITCH);
    let x = abs(along - (slot + 0.5) * DOOR_PITCH);
    let away = toSide[side];
    let fan = within(x - 0.34 - 0.25 * away, 0.08 + 0.3 * away);
    sum += underDoor(sideWord(s, side), slot, s.time) * fan * exp(-away * 5.0);
  }
  return sum;
}

fn parquet(s: Surf) -> Material {
  let block = herringbone(s.uv, 0.09, 5, 0x93u);
  let grain = figure(block.at, 0x94u);
  let oak =
    mix(
      vec3f(0.1, 0.045, 0.018),
      vec3f(0.2, 0.1, 0.04),
      block.word,
    ) * (0.6 + 0.6 * grain);
  let joint = smoothstep(0.0, 0.003, block.edge);
  let worn = fbm(s.uv * 0.6, 0x95u, 3);
  let floor =
    Material(
      oak * mix(0.35, 1.0, joint),
      oak * spilled(s) * 1.6,
      (0.3 + 0.4 * worn) * joint,
      vec3f(0.0),
    );
  return
    embossed(
      s,
      floor,
      joint + 0.15 * grain + 2.0 * fbm(s.uv * 1.2, 0x96u, 2),
      0.0008,
    );
}

fn rosed(s: Surf) -> Material {
  let off = fromLamp(s, 1);
  let r = length(off);
  let turn = atan2(off.y, off.x);
  let petals = 0.5 + 0.5 * cos(turn * 12.0);
  let rose = within(r - 0.42 - 0.04 * petals, 0.01);
  let rings =
    rose * (0.5 + 0.5 * cos(r * 75.0)) + rose
      * 0.6
      * petals
      * smoothstep(0.2, 0.4, r);
  let coving = within(toNearestSide(s) - 0.1, 0.08);
  let white = plaster(s, vec3f(0.5, 0.47, 0.4)) * (1.0 - 0.45 * damp(s));
  let dome = within(r - 0.17, 0.006);
  let frosted = 0.75 + 0.25 * sqrt(max(1.0 - r * r / 0.03, 0.0));
  let glow = lamps().colour * (3.2 * dome * frosted * burning(s, lamps()));
  let albedo = mix(white, vec3f(0.55, 0.5, 0.4), dome);
  let lip = band(r, 0.18, 0.012);
  let ceiling =
    Material(
      mix(albedo, vec3f(0.4, 0.27, 0.08), lip),
      glow,
      0.6 * lip,
      vec3f(0.0),
    );
  return embossed(s, ceiling, rings + 1.5 * coving - 2.0 * dome, 0.012);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return doored(s);
    }
    case FLOOR, OWNED: {
      return parquet(s);
    }
    case CEILING: {
      return rosed(s);
    }
    case TRIM: {
      return polished(plaster(s, vec3f(0.46, 0.42, 0.33)), 0.4);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,fk),fP={name:"Hallway",air:i7(i6(1314312)),pillar:.016,dark:.1,sound:{footing:"wood",hum:0,air:.05,echo:.7},decor:[{thing:"mirror",perRoom:.4},{thing:"radiator",perRoom:.4},{thing:"rug",perRoom:.6},{thing:"wall-clock",perRoom:.2},{thing:"socket",perRoom:.5},{thing:"potted-plant",perRoom:.2}],shader:{...fC,needs:[...fC.needs,fm("hallway",{lamp:[4.4,3.2,1.8],ambient:[.01,.008,.006],grid:1,panel:[.34,.34],stutter:.06,visibility:45,exposure:1,glow:.16,fringe:.004,vignette:.4,noise:.016})]}},fH=tO("cube/entities/theme/dwelling/kitchen/config/kitchen",`
const TILE = 0.15;

fn splashback(s: Surf) -> Material {
  let y = s.p.y;
  let at = vec2f(s.uv.x, y);
  let tile = tiling(at, TILE, 0.007, 0xb0u);
  let q = repeated(at, vec2f(TILE));
  let row = floor(y / TILE);
  let tiled = within(y - 9.0 * TILE, 0.002);

  let fruit = within(length(q + vec2f(0.0, 0.008)) - 0.036, 0.003);
  let dimple = within(length(q - vec2f(0.012, 0.004)) - 0.004, 0.003);
  let leaf =
    within(
      length((q - vec2f(0.02, 0.04)) * mat2x2f(0.7, 0.7, -1.6, 1.6)) - 0.022,
      0.003,
    );
  let picture = step(0.9, tile.y) * step(row, 7.5);
  let glaze =
    mix(vec3f(0.5, 0.45, 0.33), vec3f(0.46, 0.4, 0.27), fract(tile.y * 7.0));
  var face = glaze;
  face = mix(face, vec3f(0.5, 0.19, 0.02), fruit * picture);
  face = mix(face, vec3f(0.3, 0.09, 0.01), dimple * picture);
  face = mix(face, vec3f(0.08, 0.2, 0.04), leaf * picture);
  face = mix(face, vec3f(0.22, 0.09, 0.025), step(7.5, row));
  let grime = fbm(at * vec2f(9.0, 1.2), s.seed ^ 0xb1u, 3);
  let grout = vec3f(0.13, 0.11, 0.08) * (0.5 + 0.8 * grime);
  let tiles = mix(grout, face * (0.92 + 0.1 * grime), tile.x);
  let pillow = tile.x * (1.0 - 22.0 * dot(q, q) / TILE);

  let chip = worley(s.uv * 55.0, 0xb2u);
  let bump = within(chip.x - 0.22, 0.2) * step(0.45, chip.y);
  let grease =
    smoothstep(1.5, ROOM.y, y) * fbm(
      vec2f(s.uv.x * 2.5, y * 0.8),
      s.seed ^ 0xb3u,
      4,
    );
  let run =
    smoothstep(
      0.62,
      0.7,
      fbm(vec2f(s.uv.x * 14.0, y * 0.7), s.seed ^ 0xb4u, 3),
    ) * grease;
  let mustard =
    plaster(s, vec3f(0.44, 0.29, 0.055))
      * (1.0 - 0.45 * grease)
      * (1.0 - 0.3 * run);

  let wall =
    Material(
      mix(mustard, tiles, tiled),
      vec3f(0.0),
      mix(0.12 + 0.5 * grease, 0.8 * tile.x, tiled),
      vec3f(0.0),
    );
  return
    embossed(s, wall, mix(0.25 * bump + 0.1 * run, 0.5 + pillow, tiled), 0.004);
}

fn vinyl(s: Surf) -> Material {
  let size = 0.3;
  let q = repeated(s.uv, vec2f(size));
  let r = length(q);
  let roundel = within(r - 0.105, 0.003);
  let ring = band(r, 0.085, 0.014);
  let core = within(r - 0.04, 0.003);
  let corner = abs(abs(q.x) - 0.15) + abs(abs(q.y) - 0.15);
  let lozenge = within(corner - 0.05, 0.003);
  var sheet = vec3f(0.1, 0.042, 0.016);
  sheet = mix(sheet, vec3f(0.3, 0.1, 0.016), roundel);
  sheet = mix(sheet, vec3f(0.36, 0.28, 0.13), ring);
  sheet = mix(sheet, vec3f(0.1, 0.042, 0.016), core);
  sheet = mix(sheet, vec3f(0.1, 0.1, 0.03), lozenge);
  let trodden = smoothstep(0.35, 0.75, fbm(s.uv * 0.55, 0xb5u, 3));
  let scratch =
    fbm(vec2f(s.uv.x * 3.0 + s.uv.y * 2.0, s.uv.y * 60.0), 0xb6u, 2);
  let worn = mix(sheet, vec3f(0.3, 0.22, 0.13), 0.45 * trodden * scratch);
  let floor =
    polished(
      worn * (0.85 + 0.2 * valueNoise(s.uv * 170.0, 0xb7u)),
      0.6 - 0.35 * trodden,
    );
  let stipple = valueNoise(s.uv * 320.0, 0xb8u);
  return
    embossed(
      s,
      floor,
      0.03 * stipple + 0.2 * (roundel - ring) + 2.0 * fbm(s.uv * 1.4, 0xb9u, 2),
      0.0008,
    );
}

fn foamTiles(s: Surf) -> Material {
  let size = 0.3;
  let q = repeated(s.uv, vec2f(size));
  let edge = 0.15 - max(abs(q.x), abs(q.y));
  let bevel = smoothstep(0.0, 0.02, edge);
  let star = 0.5 + 0.5 * cos(atan2(q.y, q.x) * 8.0);
  let pressed =
    within(length(q) - 0.06 - 0.03 * star, 0.006) + band(
      max(abs(q.x), abs(q.y)),
      0.115,
      0.008,
    );
  let beads = worley(s.uv * 190.0, 0xbau).x;
  let nicotine = 0.7 + 0.3 * fbm(s.uv * 1.1, s.seed ^ 0xbbu, 3);
  let foam =
    vec3f(0.5, 0.47 * nicotine, 0.36 * nicotine * nicotine)
      * (0.9 + 0.12 * beads)
      * (1.0 - 0.5 * damp(s));

  let off = fromLamp(s, 2);
  let r = length(off);
  let tube = band(r, 0.15, 0.03);
  let fitting = within(r - 0.06, 0.004);
  let on = burning(s, lamps());
  let ends = 0.75 + 0.25 * smoothstep(0.0, 0.5, abs(atan2(off.y, off.x)));
  let glow =
    lamps().colour * (7.0 * tube * ends * on) + vec3f(0.5, 0.12, 0.1)
      * tube
      * (1.0 - ends)
      * 4.0
      * on;
  var albedo =
    mix(foam * mix(0.5, 1.0, bevel), vec3f(0.5, 0.48, 0.42), fitting);
  albedo = mix(albedo, vec3f(0.55), tube);
  return
    embossed(
      s,
      glowing(albedo, glow),
      bevel + 0.3 * pressed + 0.1 * beads + 2.0 * fitting + 1.5 * tube,
      0.006,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return splashback(s);
    }
    case FLOOR, OWNED: {
      return vinyl(s);
    }
    case CEILING: {
      return foamTiles(s);
    }
    case TRIM: {
      return polished(plaster(s, vec3f(0.44, 0.29, 0.055)), 0.45);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,fk),fG={name:"Kitchen",air:i7(i6(1184264)),pillar:.016,dark:.08,sound:{footing:"tile",hum:100,air:.2,echo:.6},decor:[{thing:"wall-clock",perRoom:.5},{thing:"socket",perRoom:1},{thing:"bin",perRoom:.4},{thing:"radiator",perRoom:.3},{thing:"window",perRoom:.3},{thing:"curtain",perRoom:.3},{thing:"vent",perRoom:.4},{thing:"pipe",perRoom:.3}],shader:{...fH,needs:[...fH.needs,fm("kitchen",{lamp:[1.3,1.5,1.12],ambient:[.008,.01,.007],grid:2,panel:[.34,.34],stutter:.22,visibility:42,exposure:1,glow:.14,fringe:.005,vignette:.36,noise:.018})]}},fF=tO("cube/entities/theme/dwelling/laundry/config/laundry",`
fn blockwork(s: Surf) -> Material {
  let y = s.p.y;
  let course = floor(y / 0.2);
  let at = vec2f(s.uv.x / 0.4 + 0.5 * fract(course * 0.5) * 2.0, y / 0.2);
  let f = fract(at);
  let edge = min(min(f.x, 1.0 - f.x) * 0.4, min(f.y, 1.0 - f.y) * 0.2);
  let face = smoothstep(0.004, 0.012, edge);
  let word = unitOf(cellHash(vec2i(floor(at)), 0xe0u));
  let pit = worley(s.uv * 130.0, 0xe1u);
  let pore = within(pit.x - 0.25, 0.1) * step(0.5, pit.y);
  let low = within(y - 1.1, 0.004);
  let coat =
    mix(
      vec3f(0.48, 0.44, 0.33),
      vec3f(0.07, 0.15, 0.2),
      low,
    ) * (0.92 + 0.12 * word);
  let salt =
    (1.0 - smoothstep(0.0, 0.45, y)) * smoothstep(
      0.45,
      0.75,
      fbm(s.uv * vec2f(3.0, 6.0), s.seed ^ 0xe2u, 4),
    );
  let weep =
    smoothstep(0.66, 0.74, fbm(vec2f(s.uv.x * 9.0, y * 0.5), s.seed ^ 0xe3u, 3))
      * smoothstep(ROOM.y, 0.3, y)
      * step(0.5, unitOf(wallWord(s)));
  var albedo = coat * (1.0 - 0.45 * pore) * mix(0.7, 1.0, face);
  albedo = mix(albedo, vec3f(0.5, 0.5, 0.47), 0.8 * salt);
  albedo = mix(albedo, vec3f(0.2, 0.08, 0.025), 0.6 * weep);
  let wall = polished(albedo, (0.45 - 0.3 * pore) * (1.0 - salt) * face);
  return embossed(s, wall, face - 0.25 * pore + 0.3 * salt * pit.x, 0.005);
}

fn floorPaint(s: Surf) -> Material {
  let wear = fbm(s.uv * 0.45, 0xe4u, 4) + 0.12 * fbm(s.uv * 9.0, 0xe5u, 3);
  let bare = smoothstep(0.66, 0.72, wear);
  let grit = worley(s.uv * 60.0, 0xe6u);
  let slab =
    vec3f(0.17, 0.165, 0.15)
      * (0.8 + 0.25 * grit.y)
      * (0.85 + 0.2 * fbm(s.uv * 2.0, 0xe7u, 3));
  let red = vec3f(0.2, 0.04, 0.026) * (0.85 + 0.2 * fbm(s.uv * 30.0, 0xe8u, 2));
  let vein = abs(fbm(s.uv * 0.7, 0xe9u, 4) - 0.5);
  let crack =
    within(vein - 0.0015, 0.002) * smoothstep(
      0.45,
      0.6,
      fbm(s.uv * 0.25, 0xe9u + 9u, 2),
    );
  let joint = 1.0 - tiling(s.uv, 2.5, 0.012, 0xeau).x;
  let wet = smoothstep(0.55, 0.7, fbm(s.uv * 0.8, s.seed ^ 0xebu, 3));
  var albedo = mix(red, slab, bare);
  albedo = mix(albedo, vec3f(0.03, 0.028, 0.025), max(crack, joint));
  albedo *= 1.0 - 0.4 * wet;
  let floor =
    polished(
      albedo,
      mix(mix(0.5, 0.12, bare), 0.9, wet) * (1.0 - max(crack, joint)),
    );
  return
    embossed(
      s,
      floor,
      (0.4 * bare * grit.x
        - 0.5 * bare
        - 2.0 * max(crack, joint)) * (1.0 - wet),
      0.002,
    );
}

fn joisted(s: Surf) -> Material {
  let pitch = 0.4;
  let across = (fract(s.uv.x / pitch) - 0.5) * pitch;
  let joist = within(abs(across) - 0.024, 0.004);
  let plank = boards(s.uv.yx, 0.14, 2.6, 0xecu);
  let deck =
    vec3f(0.07, 0.045, 0.025)
      * (0.5 + 0.7 * figure(plank.at, 0xedu))
      * smoothstep(0.0, 0.006, plank.edge);
  let pine =
    vec3f(0.3, 0.2, 0.09) * (0.55 + 0.6 * figure(
      vec2f(s.uv.y, across * 3.0),
      0xeeu,
    ));
  let pipe = band(fract(s.uv.y / 2.5) * 2.5, 0.9, 0.028);
  let flex =
    band(fract(s.uv.y / 2.5) * 2.5 + 0.03 * sin(s.uv.x * 2.4), 1.7, 0.012);
  let copper =
    vec3f(0.36, 0.14, 0.05) * (0.7 + 0.5 * fbm(
      s.uv * vec2f(4.0, 60.0),
      0xefu,
      2,
    ));

  let off = fromLamp(s, 2);
  let tube = within(boxAway(off, vec2f(0.02, 0.6)), 0.004);
  let batten = within(boxAway(off, vec2f(0.045, 0.66)), 0.004);
  let glow = lamps().colour * (9.0 * tube * burning(s, lamps()));
  var albedo = mix(deck, pine, joist);
  albedo = mix(albedo, copper, pipe);
  albedo = mix(albedo, vec3f(0.42, 0.42, 0.4), flex);
  albedo = mix(albedo, vec3f(0.5, 0.5, 0.47), batten);
  let ceiling = Material(albedo, glow, 0.6 * pipe + 0.4 * batten, vec3f(0.0));
  return
    embossed(
      s,
      ceiling,
      2.5 * joist + 3.5 * pipe + 3.0 * flex + 4.0 * batten + 1.0 * tube,
      0.03,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return blockwork(s);
    }
    case FLOOR, OWNED: {
      return floorPaint(s);
    }
    case CEILING: {
      return joisted(s);
    }
    case TRIM: {
      return
        polished(
          vec3f(0.07, 0.15, 0.2) * (0.85 + 0.2 * fbm(s.uv * 12.0, 0xe1u, 2)),
          0.4,
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,fk),fW={name:"Laundry",air:i7(i6(856080)),pillar:.02,dark:.15,sound:{footing:"concrete",hum:100,air:.55,echo:1.3},decor:[{thing:"pipe",perRoom:1.2},{thing:"drain",perRoom:.6},{thing:"tank",perRoom:.3},{thing:"cardboard-box",perRoom:.5},{thing:"bin",perRoom:.3},{thing:"socket",perRoom:.6},{thing:"ladder",perRoom:.15},{thing:"vent",perRoom:.5}],shader:{...fF,needs:[...fF.needs,fm("laundry",{lamp:[1.5,1.66,1.6],ambient:[.006,.008,.008],grid:2,panel:[.06,1.2],stutter:.2,visibility:36,exposure:1,glow:.16,fringe:.005,vignette:.42,noise:.02})]}},fB=tO("cube/entities/theme/dwelling/nursery/config/nursery",`
/// The moonlight of a landing somewhere, standing in for the big light.
fn lamps() -> Lamps {
  return
    Lamps(
      vec3f(0.2, 0.3, 0.6),
      vec3f(0.003, 0.005, 0.011),
      1,
      vec2f(0.26),
      0.0,
    );
}

/// A five-pointed star's edge: negative inside one \`size\` across at \`q\`.
fn starAway(q: vec2f, size: f32) -> f32 {
  let spoke = abs(cos(atan2(q.x, q.y) * 2.5));
  return length(q) - size * (0.42 + 0.58 * spoke * spoke * spoke);
}

/// A crescent's edge: negative inside one \`size\` across at \`q\`.
fn moonAway(q: vec2f, size: f32) -> f32 {
  return
    max(
      length(q) - size,
      size * 0.85 - length(q - vec2f(size * 0.45, size * 0.2)),
    );
}

/// What the turning lamp with word \`word\` throws along \`out\`, from itself
/// to the point: a star or a moon to each patch of its shade, each its own
/// colour, none straight beneath it.
fn thrown(out: vec3f, word: u32, time: f32) -> vec3f {
  let d = normalize(out);
  let around = atan2(d.z, d.x) / 6.2831853 + time * 0.012 + unitOf(word);
  let down = acos(clamp(-d.y, -1.0, 1.0)) / 1.5707963;
  let p = vec2f(around * 26.0, down * 10.0);
  let cell = vec2i(wrapped(i32(floor(p.x)), 26), i32(floor(p.y)));
  let roll = cellHash(cell, 0xf0u);
  let q =
    fract(p) - 0.5 - 0.3 * (vec2f(unitOf(roll), unitOf(mix32(roll))) - 0.5);
  let kind = unitOf(mix32(roll ^ 0x9u));
  let shape = select(starAway(q, 0.24), moonAway(q, 0.19), kind > 0.8);
  let hue = unitOf(mix32(roll ^ 0x5u));
  let warm = mix(vec3f(1.0, 0.72, 0.25), vec3f(1.0, 0.35, 0.5), step(0.6, hue));
  let colour = mix(warm, vec3f(0.3, 0.75, 1.0), step(0.85, hue));
  return
    colour
      * within(shape, 0.05)
      * step(kind, 0.92)
      * step(0.3, kind)
      * smoothstep(0.12, 0.3, down)
      * (1.0 - smoothstep(0.86, 0.97, down));
}

/// The point lit by the turning lamps of its room and the eight around it,
/// through what is open, as the kit's panels would light it.
fn nightLight(s: Surf, normal: vec3f) -> vec3f {
  var sum = vec3f(0.0);
  for (var south = -1; south <= 1; south++) {
    for (var east = -1; east <= 1; east++) {
      let by = vec2i(east, south);
      let level = lampsBeside(s, by, 0.0);
      if (level <= 0.0) {
        continue;
      }
      let lamp =
        vec3f(
          (f32(east) + 0.5) * ROOM.x,
          ROOM.y - 0.1,
          (f32(south) + 0.5) * ROOM.z,
        );
      let to = lamp - s.p;
      let h2 = dot(to.xz, to.xz);
      let span = 1.0 - h2 * h2 / (ROOM.x * ROOM.x * ROOM.x * ROOM.x);
      if
        (span <= 0.0 || (east != 0 && south != 0 && !reachesAcross(s, by, to)))
      {
        continue;
      }
      let place = vec2u(vec2i(s.cell) + by) & vec2u(63u);
      let word = hashOf(place.x | (place.y << 8u), 0xf1u);
      let d2 = dot(to, to);
      let facing = max(dot(normal, to / sqrt(d2)), 0.0);
      sum +=
        thrown(-to, word, s.time) * (level
          * span
          * span
          * (0.3 + 0.7 * facing)
          / (1.0 + 0.15 * d2));
    }
  }
  return sum;
}

fn starPaper(s: Surf) -> Material {
  let y = s.p.y;
  let cell = halfDrop(s.uv, vec2f(0.3, 0.3), 0xf2u);
  let turned =
    cell.xy * mat2x2f(
      cos(cell.z * 6.0),
      sin(cell.z * 6.0),
      -sin(cell.z * 6.0),
      cos(cell.z * 6.0),
    );
  let motif =
    within(
      select(starAway(turned, 0.05), moonAway(turned, 0.045), cell.z > 0.7),
      0.004,
    );
  let dotted = within(length(abs(cell.xy) - vec2f(0.15)) - 0.008, 0.004);
  var paper = plaster(s, vec3f(0.09, 0.15, 0.3));
  paper = mix(paper, vec3f(0.5, 0.42, 0.2), motif);
  paper = mix(paper, vec3f(0.4, 0.42, 0.45), dotted);

  let pitch = 0.2;
  let flag = floor(s.uv.x / pitch);
  let fx = fract(s.uv.x / pitch) - 0.5;
  let sag = 1.5 + 0.035 * cos(s.uv.x * 2.5132741);
  let hang = sag - y;
  let pennant =
    within(max(-hang, abs(fx) * 0.36 - (0.17 - hang) * 0.5), 0.004) * step(
      hang,
      0.17,
    );
  let string = band(y, sag + 0.004, 0.006);
  let dye = unitOf(cellHash(vec2i(i32(flag), 0), 0xf3u));
  let cloth =
    mix(
      mix(vec3f(0.45, 0.06, 0.05), vec3f(0.5, 0.36, 0.05), step(0.25, dye)),
      mix(vec3f(0.07, 0.3, 0.12), vec3f(0.42, 0.42, 0.4), step(0.75, dye)),
      step(0.5, dye),
    );
  paper = mix(paper, cloth, pennant);
  paper = mix(paper, vec3f(0.4, 0.38, 0.3), string);

  let width = 0.1;
  let groove =
    within(
      min(fract(s.uv.x / width), 1.0 - fract(s.uv.x / width)) * width - 0.003,
      0.003,
    );
  let dado = within(y - 0.86, 0.003);
  let cap = band(y, 0.88, 0.05);
  let wainscot =
    vec3f(0.42, 0.43, 0.42)
      * (1.0 - 0.6 * groove)
      * (0.9 + 0.1 * fbm(s.uv * vec2f(60.0, 3.0), 0xf4u, 2));
  let scribble =
    smoothstep(0.71, 0.73, fbm(s.uv * vec2f(5.0, 22.0), s.seed ^ 0xf5u, 4))
      * step(y, 0.8)
      * step(0.3, y);
  var albedo =
    mix(
      paper,
      mix(wainscot, vec3f(0.5, 0.1, 0.25), 0.7 * scribble),
      max(dado, cap),
    );
  let wall = polished(albedo, 0.05 + 0.35 * max(dado, cap));
  return
    embossed(
      s,
      wall,
      max(dado, cap) * (1.0 - groove) + cap + 0.2 * pennant,
      0.004,
    );
}

fn roadRug(s: Surf) -> Material {
  let size = 2.5;
  let q = (fract(s.uv / size) - 0.5) * size;
  let toEdge = vec2f(size * 0.5) - abs(q);
  let near = min(toEdge.x, toEdge.y);
  let far = max(toEdge.x, toEdge.y);
  let road = within(near - 0.2, 0.006);
  let dash =
    band(near, 0.0, 0.016) * step(0.5, fract(far / 0.24)) * step(0.3, far);
  let kerb = band(near, 0.2, 0.02);
  let island = within(length(toEdge) - 0.1, 0.006);
  let zebra =
    step(0.26, far) * step(far, 0.44) * step(0.5, fract(near / 0.08)) * road;

  let lot = 0.42;
  let cell = floor(q / lot + 0.5);
  let w = q - cell * lot;
  let roll = cellHash(vec2i(cell) + vec2i(floor(s.uv / size)) * 7, 0xf6u);
  let what = unitOf(roll);
  let tint = unitOf(mix32(roll));
  let body = within(boxAway(w + vec2f(0.0, 0.04), vec2f(0.09, 0.06)), 0.004);
  let roof = within(max(abs(w.x) * 0.8 + w.y - 0.1, 0.02 - w.y), 0.004);
  let door = within(boxAway(w + vec2f(0.0, 0.07), vec2f(0.018, 0.03)), 0.003);
  let pond = within(length(w * vec2f(1.0, 1.5)) - 0.12, 0.006);
  let tree = within(length(w) - 0.06, 0.006);
  var lawn = vec3f(0.045, 0.2, 0.05) * (0.85 + 0.3 * fbm(s.uv * 3.0, 0xf7u, 2));
  if (what < 0.4) {
    lawn =
      mix(
        lawn,
        mix(vec3f(0.5, 0.4, 0.1), vec3f(0.42, 0.42, 0.4), step(0.5, tint)),
        body,
      );
    lawn = mix(lawn, vec3f(0.4, 0.05, 0.04), roof);
    lawn = mix(lawn, vec3f(0.05, 0.03, 0.02), door);
  } else if (what < 0.6) {
    lawn = mix(lawn, vec3f(0.02, 0.1, 0.03), tree);
  } else if (what < 0.7) {
    lawn = mix(lawn, vec3f(0.06, 0.2, 0.45), pond);
  }
  var rug = mix(lawn, vec3f(0.1, 0.1, 0.11), road);
  rug = mix(rug, vec3f(0.45, 0.45, 0.42), max(dash, zebra));
  rug = mix(rug, vec3f(0.4, 0.33, 0.06), kerb * (1.0 - road));
  rug = mix(rug, vec3f(0.06, 0.24, 0.06), island);
  let pile = valueNoise(s.uv * 240.0, 0xf8u);
  return embossed(s, matte(carpet(s, rug) * 1.5), pile, 0.0015);
}

fn starred(s: Surf) -> Material {
  let stuck = worley(s.uv * 4.2, 0xf9u);
  let cell = halfDrop(s.uv, vec2f(0.37, 0.41), 0xfau);
  let sticker =
    within(
      starAway(
        cell.xy * mat2x2f(
          cos(cell.z * 9.0),
          sin(cell.z * 9.0),
          -sin(cell.z * 9.0),
          cos(cell.z * 9.0),
        ),
        0.02 + 0.03 * cell.z,
      ),
      0.004,
    )
      * step(0.45, cell.z)
      * step(0.25, stuck.x);
  let fade = 0.5 + 0.5 * sin(s.time * 0.05 + cell.z * 40.0);
  let white = plaster(s, vec3f(0.42, 0.43, 0.46)) * (1.0 - 0.4 * damp(s));
  let off = fromLamp(s, 1);
  let r = length(off);
  let turn = atan2(off.y, off.x) + s.time * 0.075;
  let dome = within(r - 0.13, 0.005);
  let hole = step(0.6, fract(turn * 2.5464791)) * band(r, 0.07, 0.04);
  let base = band(r, 0.14, 0.02);
  let glow =
    vec3f(1.0, 0.72, 0.3) * (dome
      * (0.5 + 5.0 * hole)
      * burning(s, lamps())) + vec3f(0.25, 1.0, 0.4)
      * (0.1 + 0.07 * fade)
      * sticker;
  var albedo = mix(white, vec3f(0.42, 0.5, 0.3), sticker);
  albedo = mix(albedo, vec3f(0.08, 0.1, 0.25), dome);
  albedo = mix(albedo, vec3f(0.4, 0.4, 0.42), base);
  return
    embossed(
      s,
      glowing(albedo, glow),
      0.3 * sticker + 2.0 * base - 1.0 * dome,
      0.004,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return starPaper(s);
    }
    case FLOOR, OWNED: {
      return roadRug(s);
    }
    case CEILING: {
      return starred(s);
    }
    case TRIM: {
      return polished(plaster(s, vec3f(0.42, 0.43, 0.42)), 0.4);
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  let normal = normalize(s.normal + m.relief);
  let lit = roomLight(s, m, lamps()) + m.albedo * nightLight(s, normal) * 1.5;
  return haze(lit, s, AIR, 30.0);
}

fn themeLens(l: Lens) -> vec3f {
  let seen = through(l, 0.3, 0.005) * 1.25;
  let night = tonemap(seen) * vec3f(0.92, 0.98, 1.08);
  return night * vignette(l, 0.5) + grain(l) * 0.028;
}
`,fs,a1,fl,fp,ff,fk,fn),f$=i7(i6(132107)),fq=tO("cube/entities/theme/dwelling/remembered/config/remembered",`
/// How far a pattern has slid at \`uv\` by now, in metres: slowly, and never
/// the same way twice in a row.
fn drift(uv: vec2f, time: f32) -> vec2f {
  let t = time * 0.02;
  return
    0.16 * (vec2f(
      fbm(uv * 0.9 + vec2f(t, -t), 0x160u, 3),
      fbm(uv * 0.9 + vec2f(-t, t * 0.7), 0x161u, 3),
    ) - 0.5);
}

/// The colour a room says its paper was.
fn recalled(seed: u32) -> vec3f {
  let roll = unitOf(mix32(seed ^ 0x162u));
  let rose = vec3f(0.42, 0.22, 0.2);
  let sage = vec3f(0.24, 0.32, 0.2);
  let blue = vec3f(0.2, 0.27, 0.38);
  let ochre = vec3f(0.44, 0.33, 0.14);
  return
    mix(
      mix(rose, sage, smoothstep(0.2, 0.3, roll)),
      mix(blue, ochre, smoothstep(0.7, 0.8, roll)),
      smoothstep(0.45, 0.55, roll),
    );
}

fn unsure(s: Surf) -> Material {
  let y = s.p.y;
  let along = alongWall(s);
  let wall = wallWord(s);
  let slid = s.uv + drift(s.uv, s.time);
  let ground = recalled(s.seed);
  let hold =
    smoothstep(0.3, 0.7, fbm(s.uv * 0.5 + s.time * 0.01, s.seed ^ 0x163u, 3));

  let cell = halfDrop(slid, vec2f(0.36, 0.44), 0x164u);
  let r = length(cell.xy);
  let turn = atan2(cell.y, cell.x);
  let lobes = 3.0 + floor(cell.z * 4.0);
  let motif =
    within(
      r - 0.1 - 0.035 * cos(turn * lobes + s.time * 0.05),
      0.012 + 0.05 * (1.0 - hold),
    );
  let stripe = 0.5 + 0.5 * cos(slid.x * 52.0);
  var paper = ground * (0.9 + 0.12 * stripe * hold);
  paper =
    mix(
      paper,
      mix(ground * 0.45, vec3f(0.5, 0.44, 0.34), cell.z),
      motif * (0.35 + 0.65 * hold),
    );
  paper = plaster(s, paper);

  let middle =
    vec2f(1.0 + 3.0 * unitOf(wall), 1.45 + 0.3 * unitOf(mix32(wall)));
  let half =
    vec2f(
      0.14 + 0.18 * unitOf(mix32(wall ^ 0x165u)),
      0.18 + 0.16 * unitOf(mix32(wall ^ 0x166u)),
    );
  let p = vec2f(along, y) - middle;
  let frame = boxAway(p, half);
  let glass = within(frame + 0.03, 0.004);
  let face =
    exp(
      -dot(p * vec2f(1.5, 1.0), p * vec2f(1.5, 1.0)) / (half.x * half.x * 0.45),
    );
  let shoulders =
    exp(
      -dot(
        (p + vec2f(0.0, half.y)) * vec2f(0.8, 1.6),
        (p + vec2f(0.0, half.y)) * vec2f(0.8, 1.6),
      ) / (half.x * half.x),
    );
  let photo =
    mix(
      vec3f(0.05, 0.045, 0.04),
      vec3f(0.4, 0.33, 0.27),
      clamp(face + 0.6 * shoulders, 0.0, 1.0),
    );
  let hung = step(unitOf(mix32(wall ^ 0x167u)), 0.75);
  paper = mix(paper, vec3f(0.1, 0.06, 0.03), within(frame, 0.004) * hung);
  paper = mix(paper, photo, glass * hung);

  let at = vec2f(0.8 + 3.4 * unitOf(mix32(wall ^ 0x168u)), 0.0);
  let size =
    vec2f(
      0.25 + 0.4 * unitOf(mix32(wall ^ 0x169u)),
      1.1 + 1.1 * unitOf(mix32(wall ^ 0x16au)),
    );
  let q = vec2f(along - at.x, y);
  let leaf = boxAway(q, size);
  let doorway = within(leaf, 0.004) * step(0.35, unitOf(mix32(wall ^ 0x16bu)));
  let knobAt =
    vec2f(
      (unitOf(mix32(wall ^ 0x16cu)) - 0.5) * 1.6 * size.x,
      size.y * unitOf(mix32(wall ^ 0x16du)),
    );
  let knob = within(length(q - knobAt) - 0.03, 0.004) * doorway;
  paper =
    mix(
      paper,
      vec3f(0.44, 0.41, 0.34) * (0.92 + 0.08 * fbm(
        s.uv * vec2f(60.0, 3.0),
        0x16eu,
        2,
      )),
      doorway * (1.0 - glass * hung),
    );
  paper = mix(paper, vec3f(0.45, 0.32, 0.1), knob);

  let skirt =
    0.06 + 0.42 * fbm(
      vec2f(s.uv.x * 0.5 + s.time * 0.004, 0.3),
      s.seed ^ 0x16fu,
      3,
    );
  let skirting = within(y - skirt, 0.004);
  let albedo = mix(paper, vec3f(0.42, 0.39, 0.33), skirting);
  let gloss =
    0.05 + 0.4 * max(skirting, doorway) + 0.5 * glass * hung + 0.4 * knob;
  let height =
    0.5 * skirting
      - 0.3 * doorway
      + 1.0 * knob
      + 0.5 * (within(frame, 0.004) - glass) * hung
      + 0.04 * motif * hold;
  return embossed(s, polished(albedo, min(gloss, 0.9)), height, 0.012);
}

fn halfCarpet(s: Surf) -> Material {
  let slid = s.uv + 2.0 * drift(s.uv * 0.5, s.time);
  let check = (fract(slid.x / 0.8) - 0.5) * (fract(slid.y / 0.8) - 0.5);
  let weave = smoothstep(-0.006, 0.006, check);
  let sure =
    smoothstep(0.35, 0.65, fbm(s.uv * 0.4 - s.time * 0.008, 0x170u, 3));
  let a = vec3f(0.2, 0.13, 0.08);
  let b = vec3f(0.32, 0.25, 0.16);
  let wool = mix(mix(a, b, 0.5), mix(a, b, weave), sure);
  let pile = valueNoise(s.uv * 240.0, 0x171u);
  return embossed(s, matte(carpet(s, wool) * 1.3), pile, 0.0015);
}

fn blank(s: Surf) -> Material {
  let stray =
    (vec2f(
      unitOf(s.seed ^ 0x172u),
      unitOf(mix32(s.seed ^ 0x173u)),
    ) - 0.5) * 1.4;
  let off = fromLamp(s, 1) - stray;
  let r = length(off);
  let size = 0.1 + 0.16 * unitOf(mix32(s.seed ^ 0x174u));
  let dome = within(r - size, 0.03);
  let glow = lamps().colour * (2.6 * dome * burning(s, lamps()));
  let white = plaster(s, vec3f(0.48, 0.45, 0.4)) * (1.0 - 0.3 * damp(s));
  return embossed(s, glowing(white, glow), -dome, 0.006);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return unsure(s);
    }
    case FLOOR, OWNED: {
      return halfCarpet(s);
    }
    case CEILING: {
      return blank(s);
    }
    case TRIM: {
      return polished(plaster(s, vec3f(0.42, 0.39, 0.33)), 0.3);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,fk),fj={name:"Somebody’s house",air:i7(i6(5917498)),pillar:.016,dark:.14,sound:{footing:"carpet",hum:0,air:.08,echo:.9},decor:[{thing:"armchair",perRoom:.4},{thing:"bed",perRoom:.3},{thing:"door",perRoom:.6},{thing:"wall-clock",perRoom:.3},{thing:"tv",perRoom:.2},{thing:"floor-lamp",perRoom:.3},{thing:"mirror",perRoom:.3},{thing:"staircase",perRoom:.05}],shader:{...fq,needs:[...fq.needs,fm("remembered",{lamp:[4.2,3.5,2.7],ambient:[.014,.012,.01],grid:1,panel:[.4,.4],stutter:.05,visibility:18,exposure:1.05,glow:.42,fringe:.014,vignette:.5,noise:.02})]}},fK=tO("cube/entities/theme/edge/pattern/lib/pattern",`
/// A colour's brightness as an eye weighs it.
fn luma(colour: vec3f) -> f32 {
  return dot(colour, vec3f(0.2126, 0.7152, 0.0722));
}

/// The pure colour at \`hue\` turns round the wheel: 0 red, a third green.
fn spectrum(hue: f32) -> vec3f {
  return
    clamp(
      abs(fract(hue + vec3f(0.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0) - 1.0,
      vec3f(0.0),
      vec3f(1.0),
    );
}

/// 1 on the lines of a square grid \`pitch\` metres apart, each \`width\`
/// metres wide and never thinner than a pixel, 0 between them; it fades out
/// where the grid is finer than the pixels showing it.
fn ruled(uv: vec2f, pitch: f32, width: f32) -> f32 {
  let at = uv / pitch;
  let pixel = fwidth(at);
  let off = abs(fract(at - 0.5) - 0.5);
  let half = max(vec2f(width * 0.5 / pitch), pixel * 0.6);
  let line = 1.0 - smoothstep(half, half + pixel, off);
  let fade = 1.0 - smoothstep(0.25, 0.6, max(pixel.x, pixel.y));
  return max(line.x, line.y) * fade;
}

/// 1 on one diagonal of every square of that grid, the line that makes two
/// triangles of it.
fn slashed(uv: vec2f, pitch: f32, width: f32) -> f32 {
  let at = uv / pitch;
  let across = (fract(at.x) - fract(at.y)) * 0.7071;
  let pixel = fwidth((at.x - at.y) * 0.7071);
  let half = max(width * 0.5 / pitch, pixel * 0.6);
  let fade = 1.0 - smoothstep(0.25, 0.6, pixel);
  return (1.0 - smoothstep(half, half + pixel, abs(across))) * fade;
}

/// A chequerboard of squares \`size\` metres across, 0 or 1, going to an even
/// grey where the squares are finer than a pixel.
fn chequer(uv: vec2f, size: f32) -> f32 {
  let at = uv / size;
  let pixel = max(fwidth(at), vec2f(1e-5));
  let wave = abs(fract(at * 0.5) - 0.5) * 2.0;
  let square = clamp((wave - 0.5) / pixel, vec2f(-0.5), vec2f(0.5)) * 2.0;
  let fade = 1.0 - smoothstep(0.5, 1.0, max(pixel.x, pixel.y));
  return 0.5 + 0.5 * square.x * square.y * fade;
}

/// Blocks \`size\` metres laid in running bond, every other course half a
/// block along: x the block's own number, 0 to 1, y the metres to its
/// nearest joint.
fn bonded(uv: vec2f, size: vec2f, salt: u32) -> vec2f {
  let row = floor(uv.y / size.y);
  let at =
    vec2f(uv.x / size.x + 0.5 * (row - 2.0 * floor(row * 0.5)), uv.y / size.y);
  let f = fract(at);
  let edge = min(f, 1.0 - f) * size;
  return vec2f(unitOf(cellHash(vec2i(floor(at)), salt)), min(edge.x, edge.y));
}

/// Metres across the floor a point is from the middle of its room.
fn fromMiddle(s: Surf) -> f32 {
  return length(s.p.xz - ROOM.xz * 0.5);
}
`,fs,a1),fY=tO("cube/entities/theme/edge/screen/lib/screen",`
/// Linear light, 0 to 1, as the display's own numbers.
fn shown(colour: vec3f) -> vec3f {
  return pow(clamp(colour, vec3f(0.0), vec3f(1.0)), vec3f(1.0 / 2.2));
}

fn bayerPair(at: vec2u) -> u32 {
  let x = at.x & 1u;
  let y = at.y & 1u;
  return ((x ^ y) << 1u) | y;
}

/// The 8\xd78 ordered-dither threshold of screen cell \`at\`, in (0, 1).
fn bayer(at: vec2f) -> f32 {
  let cell = vec2u(at);
  let rank =
    (bayerPair(cell) << 4u)
      | (bayerPair(cell >> vec2u(1u)) << 2u)
      | bayerPair(cell >> vec2u(2u));
  return (f32(rank) + 0.5) / 64.0;
}

/// How sharply the scene's depth bends at a pixel, across \`reach\` pixels:
/// 0 on a flat face, 1 along a crease or a silhouette.
fn creaseAt(l: Lens, reach: f32) -> f32 {
  let apart = reach / l.size;
  let here = 1.0 / sceneAt(l.uv).a;
  let east = 1.0 / sceneAt(l.uv + vec2f(apart.x, 0.0)).a;
  let west = 1.0 / sceneAt(l.uv - vec2f(apart.x, 0.0)).a;
  let south = 1.0 / sceneAt(l.uv + vec2f(0.0, apart.y)).a;
  let north = 1.0 / sceneAt(l.uv - vec2f(0.0, apart.y)).a;
  let bend = abs(east + west - 2.0 * here) + abs(south + north - 2.0 * here);
  return smoothstep(0.004, 0.012, bend / max(here, 1e-6));
}

/// A picture tube's lines down the screen, \`count\` of them: 1 on a line's
/// middle, \`1 - depth\` between two.
fn scanned(l: Lens, count: f32, depth: f32) -> f32 {
  let wave = 0.5 + 0.5 * cos(l.uv.y * count * 6.2832);
  return 1.0 - depth * (1.0 - wave);
}
`,fs,fo),fV=tO("cube/entities/theme/edge/clear-colour/config/clear-colour",`
const CLEAR = AIR;

fn lamps() -> Lamps {
  return Lamps(vec3f(1.0), vec3f(0.06), 1, vec2f(0.8, 0.8), 0.0);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL, FLOOR, OWNED, TRIM: {
      return matte(vec3f(0.5));
    }
    case CEILING: {
      return glowing(vec3f(0.5), lampGlow(s, lamps()) * 0.05);
    }
    default: {
      return stuff(s);
    }
  }
}

/// Everything is the clear colour, lighter or darker by the light on it and
/// by what is drawn on it, and is back to the plain colour a few rooms off.
fn themeLight(s: Surf, m: Material) -> vec3f {
  let white = Material(vec3f(1.0), vec3f(0.0), 0.0, m.relief);
  let light = luma(roomLight(s, white, lamps()));
  let drawn = 0.4 + 1.2 * luma(m.albedo);
  // Each way a face can look is its own shade, so a corner shows as a step.
  let facing =
    1.0 + 0.16 * s.normal.y - 0.1 * abs(s.normal.x) + 0.04 * abs(s.normal.z);
  let shade =
    mix(0.5, 1.2, clamp(light * 0.75, 0.0, 1.0))
      * drawn
      * facing
      * cornerShade(s);
  let colour = CLEAR * shade + mix(CLEAR, vec3f(1.0), 0.6) * luma(m.emission);
  return mix(CLEAR, colour, exp(-s.far / 18.0));
}

fn themeLens(l: Lens) -> vec3f {
  let seen = shown(sceneAt(l.uv).rgb + glowAt(l.uv) * 0.3);
  return floor(seen * 28.0 + 0.5) / 28.0;
}
`,fs,fK,fY,fp,ff,fo),fX=i7(i6(6591981)),fZ=tO("cube/entities/theme/edge/cut-paper/config/cut-paper",`
const PAPERS =
  array<vec3f, 6>(
    vec3f(0.85, 0.73, 0.49),
    vec3f(0.71, 0.055, 0.022),
    vec3f(0.81, 0.39, 0.018),
    vec3f(0.006, 0.15, 0.17),
    vec3f(0.008, 0.013, 0.064),
    vec3f(0.85, 0.32, 0.34),
  );

/// The room's paper for its face number \`face\`, 0 to 3: four different
/// papers of the six, so no two faces of a room run together.
fn paperOf(s: Surf, face: u32) -> vec3f {
  let roll = hashOf(s.seed, 0x57u);
  let spread =
    select(vec4u(0u, 2u, 3u, 5u), vec4u(0u, 1u, 3u, 4u), (roll & 64u) != 0u);
  return PAPERS[(roll + spread[face]) % 6u];
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      // The two walls that face each other across a room share a paper.
      return
        matte(paperOf(s, select(2u, 3u, abs(s.normal.x) > abs(s.normal.z))));
    }
    case FLOOR, OWNED: {
      return matte(paperOf(s, 0u));
    }
    case CEILING: {
      let disc = 1.0 - smoothstep(0.78, 0.8, fromMiddle(s));
      return matte(mix(paperOf(s, 1u), vec3f(0.97, 0.93, 0.8), disc));
    }
    case TRIM: {
      return matte(vec3f(0.012));
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  return m.albedo + m.emission;
}

fn themeLens(l: Lens) -> vec3f {
  let ink = max(creaseAt(l, 1.0), creaseAt(l, 2.2));
  let page = mix(sceneAt(l.uv).rgb, vec3f(0.006, 0.006, 0.012), ink);
  return shown(page) * vignette(l, 0.12) + grain(l) * 0.012;
}
`,fs,a1,fK,fY,fp,fn,fo),fQ=i7(i6(0xeee3c8)),fJ=tO("cube/entities/theme/edge/depth-buffer/config/depth-buffer",`
fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL, FLOOR, OWNED, CEILING, TRIM: {
      return matte(vec3f(0.5));
    }
    default: {
      return stuff(s);
    }
  }
}

/// A point passes on only how bright it is, for the lens to mark what is
/// drawn on a face it would otherwise show as bare distance.
fn themeLight(s: Surf, m: Material) -> vec3f {
  return vec3f(luma(m.albedo) + luma(m.emission));
}

/// 1 on the contour at every \`every\` metres of distance \`far\`, a pixel or
/// two wide, fading where contours crowd.
fn contour(far: f32, every: f32) -> f32 {
  let at = far / every;
  let pixel = fwidth(at);
  let line =
    1.0 - smoothstep(pixel * 0.7, pixel * 1.5, abs(fract(at - 0.5) - 0.5));
  return line * (1.0 - smoothstep(0.2, 0.5, pixel));
}

fn themeLens(l: Lens) -> vec3f {
  let scene = sceneAt(l.uv);
  let near = exp(-scene.a / 7.0);
  let level = floor(near * 16.0 + 0.5) / 16.0;
  let drawn = clamp(0.55 + 0.9 * scene.r, 0.3, 1.1);
  var grey = level * drawn;
  // A contour is dark on what is near and light on what is far, so it shows on both.
  let line = max(0.45 * contour(scene.a, 1.0), contour(scene.a, 5.0));
  grey = mix(grey, select(0.0, 0.5, grey < 0.25), line);
  return
    mix(vec3f(0.0, 0.012, 0.03), vec3f(1.0, 0.98, 0.93), grey) * vignette(
      l,
      0.2,
    ) + grain(l) * 0.008;
}
`,fs,fK,fp,fn,fo),f0=tO("cube/entities/theme/edge/greybox/config/greybox",`
/// A measuring grid in \`tone\`: metre squares in two shades, ruled in
/// metres and quarters, a cross on every metre's corner.
fn measured(s: Surf, tone: vec3f, mark: vec3f) -> Material {
  let squares = mix(0.82, 1.0, chequer(s.uv, 1.0));
  let quarters = ruled(s.uv, 0.25, 0.004);
  let metres = ruled(s.uv, 1.0, 0.014);
  let corner = abs(fract(s.uv + 0.5) - 0.5);
  let cross =
    step(max(corner.x, corner.y), 0.09) * step(min(corner.x, corner.y), 0.012);
  let dust = 0.94 + 0.12 * fbm(s.uv * 1.7, s.seed, 3);
  var colour = tone * squares * dust;
  colour = mix(colour, tone * 1.25, 0.5 * quarters);
  colour = mix(colour, mark, max(metres * 0.85, cross));
  return polished(colour, 0.3);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      let orange = vec3f(0.62, 0.21, 0.035);
      // Every wall says how tall it is: a band at one metre, another at two.
      let rule = band(s.p.y, 1.0, 0.03) + band(s.p.y, 2.0, 0.03);
      let m = measured(s, orange, vec3f(0.9, 0.62, 0.36));
      return
        Material(
          mix(m.albedo, vec3f(0.07, 0.03, 0.01), rule),
          m.emission,
          m.gloss,
          m.relief,
        );
    }
    case FLOOR, OWNED: {
      return measured(s, vec3f(0.23, 0.235, 0.24), vec3f(0.5, 0.51, 0.52));
    }
    case CEILING: {
      let m = measured(s, vec3f(0.4, 0.4, 0.4), vec3f(0.62, 0.62, 0.62));
      return Material(m.albedo, lampGlow(s, lamps()), 0.0, m.relief);
    }
    case TRIM: {
      let stripe = step(0.5, fract((s.uv.x + s.uv.y) * 4.0));
      return
        polished(
          mix(vec3f(0.03, 0.03, 0.03), vec3f(0.75, 0.56, 0.04), stripe),
          0.3,
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fK,fl,fp,ff),f2={name:"Greybox",air:i7(i6(2763565)),pillar:.03,dark:0,sound:{footing:"concrete",hum:100,air:.05,echo:1.1},decor:[{thing:"crate",perRoom:.8},{thing:"mannequin",perRoom:.3},{thing:"traffic-cone",perRoom:.3},{thing:"ladder",perRoom:.15},{thing:"staircase",perRoom:.1}],shader:{...f0,needs:[...f0.needs,fm("greybox",{lamp:[1.35,1.35,1.35],ambient:[.02,.02,.02],grid:2,panel:[1,1],stutter:0,visibility:60,exposure:1,glow:.1,fringe:.003,vignette:.3,noise:.01})]}},f1=tO("cube/entities/theme/edge/home/lib/carpet",`
const NIGHT = vec3f(0.008, 0.01, 0.03);
const WOOL = vec3f(0.6, 0.48, 0.3);

// What a carpet's field is dyed: madder twice, since most were red.
const GROUNDS =
  array<vec3f, 6>(
    vec3f(0.3, 0.012, 0.01),
    vec3f(0.3, 0.012, 0.01),
    vec3f(0.13, 0.006, 0.014),
    vec3f(0.1, 0.03, 0.012),
    vec3f(0.008, 0.012, 0.06),
    vec3f(0.012, 0.06, 0.03),
  );

const DYES =
  array<vec3f, 5>(
    vec3f(0.5, 0.27, 0.03),
    vec3f(0.6, 0.15, 0.02),
    vec3f(0.008, 0.01, 0.03),
    vec3f(0.03, 0.13, 0.04),
    vec3f(0.1, 0.24, 0.38),
  );

/// One of the dyes carpet \`roll\` was woven with: neighbouring numbers are
/// always different dyes.
fn dye(i: u32, roll: u32) -> vec3f {
  return DYES[(i + (roll >> 12u)) % 5u];
}

/// The colour at knot \`knot\` of a carpet \`size\` knots, woven the same in
/// all four quarters as the factories wove them: a narrow border, a wide
/// one, a field, a medallion or three in the middle, sometimes a quarter of
/// one in each corner. Which of each, and in what dyes, is \`roll\`'s to say,
/// so no two carpets in the building are the same.
fn woven(knot: vec2i, size: vec2i, roll: u32) -> vec3f {
  let half = size / 2;
  let a = abs(knot - half);
  let gap = half - a;
  let inward = min(gap.x, gap.y);
  let run = select(a.x, a.y, gap.x < gap.y);
  let ground = GROUNDS[roll % 6u];
  let other = GROUNDS[(roll + 3u) % 6u];
  let slant = (a.x + a.y) % 12;
  let counter = ((a.x - a.y) % 12 + 12) % 12;

  if (inward < 2) {
    return NIGHT;
  }
  if (inward < 7) {
    let deep = inward - 2;
    switch (roll >> 3u) % 3u {
      case 0u: {
        return select(WOOL, ground, (slant % 6) < 3);
      }
      case 1u: {
        return select(dye(0u, roll), ground, abs(run % 10 - 5) > deep);
      }
      default: {
        return select(WOOL, dye(1u, roll), (run / 3 + deep / 3) % 2 == 0);
      }
    }
  }
  if (inward < 9) {
    return NIGHT;
  }
  if (inward < 21) {
    let deep = inward - 9;
    switch (roll >> 5u) % 3u {
      case 0u: {
        let hook = (min(slant, 11 - slant) + min(counter, 11 - counter)) % 5;
        return select(select(dye(0u, roll), WOOL, hook == 2), other, hook < 2);
      }
      case 1u: {
        let petal = abs(run % 12 - 6) + abs(deep - 6);
        if (petal < 2) {
          return WOOL;
        }
        if (petal < 4) {
          return dye(0u, roll);
        }
        return select(other, dye(1u, roll), petal == 5);
      }
      default: {
        let band = (deep + abs(run % 12 - 6)) % 6;
        return select(select(WOOL, dye(1u, roll), band < 4), other, band < 2);
      }
    }
  }
  if (inward < 23) {
    return WOOL;
  }

  let inner = half - 23;
  let kind = (roll >> 7u) % 4u;
  var q = vec2i(a.x / 2, a.y);
  if (kind == 2u) {
    q = vec2i(min(a.x, abs(a.x - inner.x * 3 / 5)), a.y);
  }
  let square = max(q.x, q.y);
  let diamond = q.x + q.y;
  var out = diamond;
  var reach = inner.y - 9;
  switch kind {
    case 0u: {
      reach = inner.y - 7;
    }
    case 1u: {
      out = max(square, diamond * 7 / 10);
    }
    case 3u: {
      out = min(square, diamond * 7 / 10);
    }
    default: {}
  }
  if (out < 3) {
    return WOOL;
  }
  if (out < reach) {
    switch (out / 3) % 4 {
      case 0: {
        return other;
      }
      case 1: {
        return WOOL;
      }
      case 2: {
        return dye(0u, roll);
      }
      default: {
        return dye(1u, roll);
      }
    }
  }
  if (out < reach + 3) {
    return WOOL;
  }

  if (((roll >> 9u) & 1u) == 1u) {
    let corner = (inner.x - a.x) / 2 + inner.y - a.y;
    if (corner < 12) {
      return select(other, dye(0u, roll), (corner / 3) % 2 == 0);
    }
    if (corner < 14) {
      return WOOL;
    }
  }

  switch (roll >> 10u) % 3u {
    case 0u: {
      // Small flowers, a lattice of them, each a cross of five knots.
      let flower = abs(a.x % 10 - 5) + abs(a.y % 10 - 5);
      if (flower < 2) {
        return select(dye(0u, roll), WOOL, flower == 0);
      }
      return select(ground, NIGHT, (a.x & a.y & 7) == 7);
    }
    case 1u: {
      // A trellis, a knot of wool where its lines cross.
      if (slant == 0 && counter == 0) {
        return WOOL;
      }
      return select(ground, dye(0u, roll), slant == 0 || counter == 0);
    }
    default: {
      // Roses in staggered rows, two leaves to each.
      let row = a.y / 12;
      let c = vec2i((a.x + 8 * (row % 2)) % 16 - 8, a.y % 12 - 6);
      let rose = abs(c.x) + abs(c.y);
      if (rose < 1) {
        return WOOL;
      }
      if (rose < 3) {
        return dye(1u, roll);
      }
      return select(ground, DYES[3], rose == 4 && c.x * c.y > 0);
    }
  }
}
`),f3=tO("cube/entities/theme/edge/home/config/home",`
const LIME = vec3f(0.5, 0.46, 0.38);

const PAPERS =
  array<vec3f, 3>(
    vec3f(0.5, 0.36, 0.17),
    vec3f(0.3, 0.36, 0.2),
    vec3f(0.5, 0.3, 0.24),
  );

/// The wall under the carpets: striped paper of the room's own colour, a
/// tall oak skirting below it and a stepped plaster cornice under the
/// ceiling.
fn papered(s: Surf) -> Material {
  let tint = PAPERS[hashOf(s.seed, 0x67u) % 3u];
  let stripe = step(0.5, fract(s.uv.x / 0.16));
  let sprig = worley(vec2f(s.uv.x / 0.16, s.uv.y / 0.2), 97u);
  let ochre = plaster(s, tint * mix(1.0, 0.84, stripe));
  let paper =
    mix(tint * vec3f(0.6, 0.33, 0.35), ochre, smoothstep(0.1, 0.13, sprig.x));
  let skirting = 1.0 - smoothstep(0.12, 0.124, s.p.y);
  let up = s.p.y - (ROOM.y - 0.12);
  let cornice = smoothstep(0.0, 0.004, up);
  let oak =
    vec3f(0.16, 0.07, 0.025) * (0.6 + 0.6 * fbm(
      vec2f(s.uv.x * 2.0, s.uv.y * 60.0),
      98u,
      3,
    ));
  let lime = plaster(s, LIME * (0.82 + 0.06 * floor(up / 0.04)));
  let wall =
    polished(
      mix(mix(paper, oak, skirting), lime, cornice),
      mix(0.05, 0.45, skirting),
    );
  let moulded = 3.0 * skirting + 2.0 * cornice * (1.0 + floor(up / 0.04));
  return embossed(s, wall, moulded + 0.2 * fbm(s.uv * 30.0, 99u, 2), 0.004);
}

/// 1 inside the ellipse at \`middle\` with radii \`radii\`, soft at its rim.
fn daub(at: vec2f, middle: vec2f, radii: vec2f) -> f32 {
  return 1.0 - smoothstep(0.92, 1.08, length((at - middle) / radii));
}

/// The official portrait that hung where a carpet did not, of a Leader
/// nobody can name: the paint at \`at\` of the Leader \`roll\` draws, x from
/// -0.76 to 0.76 across the canvas, y from -1 at its foot to 1 at its head.
fn portrayed(at: vec2f, roll: u32) -> vec3f {
  let side = abs(at.x);
  let bald = (roll & 1u) == 1u;
  let capped = ((roll >> 1u) & 3u) == 0u;
  let whiskered = ((roll >> 3u) & 3u) != 0u;
  let bearded = ((roll >> 5u) & 3u) == 0u;
  let medals = i32((roll >> 7u) % 6u);
  let brow = 0.022 + 0.012 * f32((roll >> 10u) % 4u);
  let jaw = 0.27 + 0.02 * f32((roll >> 12u) % 4u);
  let grey = f32((roll >> 14u) % 3u) * 0.5;
  let khaki = ((roll >> 16u) & 1u) == 1u;

  let skin = vec3f(0.5, 0.3, 0.2) * (0.7 + 0.5 * smoothstep(0.4, -0.3, at.x));
  let hair = mix(vec3f(0.02, 0.015, 0.012), vec3f(0.3, 0.29, 0.27), grey);
  let cloth = select(vec3f(0.02, 0.022, 0.03), vec3f(0.1, 0.09, 0.04), khaki);
  let red = vec3f(0.4, 0.01, 0.008);
  let gilt = vec3f(0.55, 0.36, 0.06);

  // A backdrop the colour of a banner in the dark, lighter behind the head.
  var paint =
    mix(
      vec3f(0.1, 0.012, 0.01),
      vec3f(0.035, 0.03, 0.02),
      smoothstep(0.0, 1.3, length(at - vec2f(0.0, 0.2))),
    );

  paint = mix(paint, cloth, daub(at, vec2f(0.0, -1.15), vec2f(0.8, 0.62)));
  // A shirt and tie, or a tunic buttoned to the chin.
  let collar =
    (1.0 - smoothstep(0.0, 0.02, side - (at.y + 0.9) * 0.45)) * step(
      at.y,
      -0.5,
    );
  paint =
    mix(paint, select(vec3f(0.5, 0.48, 0.42), cloth * 1.6, khaki), collar);
  paint =
    mix(
      paint,
      red,
      collar * (1.0 - smoothstep(0.03, 0.05, side)) * f32(!khaki),
    );
  for (var i = 0; i < medals; i++) {
    let pin = vec2f(0.3 + 0.11 * f32(i % 3), -0.72 - 0.12 * f32(i / 3));
    paint =
      mix(paint, select(gilt, red, i % 2 == 1), daub(at, pin, vec2f(0.045)));
  }

  paint = mix(paint, skin * 0.8, daub(at, vec2f(0.0, -0.4), vec2f(0.13, 0.22)));
  paint =
    mix(
      paint,
      skin * 0.9,
      daub(at, vec2f(0.0, 0.08), vec2f(0.36, 0.14)) * step(0.27, side),
    );
  paint =
    mix(
      paint,
      skin,
      daub(
        at,
        vec2f(0.0, 0.1 - 0.1 * step(at.y, 0.1)),
        vec2f(mix(jaw, 0.3, step(0.1, at.y)), 0.42),
      ),
    );

  // Hair over the crown, or what is left of it over the ears.
  let crown =
    daub(at, vec2f(0.0, 0.2), vec2f(0.33, 0.36)) * smoothstep(
      0.3,
      0.36,
      at.y + 0.25 * side,
    );
  let fringe =
    daub(at, vec2f(0.0, 0.2), vec2f(0.33, 0.3))
      * smoothstep(0.24, 0.27, side)
      * step(0.1, at.y);
  paint = mix(paint, hair, select(crown, fringe, bald));

  paint =
    mix(
      paint,
      hair * 0.6,
      daub(
        vec2f(side, at.y),
        vec2f(0.13, 0.19 - 0.2 * (side - 0.13)),
        vec2f(0.09, brow),
      ),
    );
  paint =
    mix(
      paint,
      vec3f(0.01),
      daub(vec2f(side, at.y), vec2f(0.12, 0.11), vec2f(0.035, 0.022)),
    );
  paint =
    mix(paint, skin * 0.6, daub(at, vec2f(0.03, -0.04), vec2f(0.035, 0.12)));
  paint =
    mix(paint, skin * 0.45, daub(at, vec2f(0.0, -0.2), vec2f(0.09, 0.012)));
  if (whiskered) {
    let droop = 0.3 * f32((roll >> 3u) & 3u) - 0.3;
    paint =
      mix(
        paint,
        hair,
        daub(
          vec2f(side, at.y + droop * side),
          vec2f(0.0, -0.15),
          vec2f(0.17, 0.04),
        ),
      );
  }
  if (bearded) {
    paint =
      mix(
        paint,
        hair,
        daub(at, vec2f(0.0, -0.36), vec2f(0.12, 0.17)) * step(at.y, -0.2),
      );
  }
  if (capped) {
    paint =
      mix(paint, cloth * 1.4, daub(at, vec2f(0.0, 0.52), vec2f(0.42, 0.17)));
    paint =
      mix(
        paint,
        red,
        (1.0 - smoothstep(0.34, 0.36, side)) * step(abs(at.y - 0.39), 0.035),
      );
    paint =
      mix(paint, vec3f(0.008), daub(at, vec2f(0.0, 0.33), vec2f(0.3, 0.04)));
    paint = mix(paint, gilt, daub(at, vec2f(0.0, 0.47), vec2f(0.04)));
  }
  // Brushwork, and the dusk every such canvas went.
  return paint * (0.8 + 0.4 * valueNoise(at * vec2f(60.0, 25.0), roll));
}

/// A Leader in a gilt frame, sixty centimetres by eighty, under glass.
fn framed(s: Surf, roll: u32) -> Material {
  let at = (vec2f(alongWall(s), s.p.y) - vec2f(ROOM.x * 0.5, 1.4)) / 0.4;
  let rim = max(abs(at.x) - 0.76, abs(at.y) - 1.0);
  if (rim > 0.14) {
    return papered(s);
  }
  if (rim > 0.0) {
    let gilt = vec3f(0.55, 0.36, 0.06) * (0.6 + 0.5 * cos(rim * 90.0));
    return embossed(s, polished(gilt, 0.5), cos(rim * 90.0), 0.004);
  }
  return polished(portrayed(at, roll), 0.5);
}

fn carpeted(s: Surf) -> Material {
  // Each wall of each room has a carpet of its own, or one in eight a
  // portrait.
  let wall =
    u32(s.normal.x > 0.5)
      + 2u * u32(s.normal.z > 0.5)
      + 4u * u32(abs(s.normal.x) > abs(s.normal.z));
  let roll = hashOf(s.seed, 0x68u + wall);
  // Eighty knots to the metre, hung in the middle of the wall.
  let size =
    vec2i(
      192 + 16 * i32((roll >> 14u) % 4u),
      104 + 8 * i32((roll >> 16u) % 3u),
    );
  let at =
    (vec2f(alongWall(s), s.p.y) - vec2f(ROOM.x * 0.5, 1.3)) / (vec2f(
      size,
    ) / 80.0) + 0.5;
  if ((roll >> 20u) % 8u == 0u) {
    return framed(s, roll >> 23u);
  }
  if (min(at.x, at.y) < 0.0 || max(at.x, at.y) > 1.0) {
    return papered(s);
  }
  let knots = at * vec2f(size);
  let pile = valueNoise(knots * 2.0, 100u);
  let tuft = fract(knots) - 0.5;
  let rug =
    matte(woven(vec2i(floor(knots)), size, roll) * (0.75 + 0.35 * pile));
  return embossed(s, rug, 1.0 - dot(tuft, tuft) * 1.5 + 2.0, 0.003);
}

/// Herringbone: blocks a tenth of a metre by four tenths, each of its own
/// plank, varnished and walked dull down the middle of the room.
fn parquet(s: Surf) -> Material {
  let at = s.uv / 0.1;
  let cell = vec2i(floor(at));
  let k = ((cell.x - cell.y) % 8 + 8) % 8;
  var block = vec2i(cell.x - k, cell.y);
  var local = vec2f(at.x - f32(block.x), fract(at.y));
  if (k >= 4) {
    block = vec2i(cell.x, cell.y + k - 4);
    local = vec2f(f32(block.y) + 1.0 - at.y, fract(at.x));
  }
  let edge = min(min(local.x, 4.0 - local.x), min(local.y, 1.0 - local.y));
  let joint = smoothstep(0.0, 0.05, edge);
  let plank = unitOf(cellHash(block, 101u + u32(k >= 4)));
  let grain = fbm(vec2f(local.x * 1.5 + plank * 30.0, local.y * 14.0), 102u, 3);
  let oak =
    mix(
      vec3f(0.3, 0.14, 0.045),
      vec3f(0.46, 0.25, 0.09),
      plank,
    ) * (0.7 + 0.5 * grain);
  let worn = fbm(s.uv * 0.8, 103u, 3);
  let wood = polished(oak * mix(0.25, 1.0, joint), 0.1 + 0.2 * worn);
  return embossed(s, wood, joint, 0.0006);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return carpeted(s);
    }
    case FLOOR, OWNED: {
      return parquet(s);
    }
    case CEILING: {
      // A plaster rose round the lamp, sixteen petals to it.
      let out = fromMiddle(s);
      let off = s.p.xz - ROOM.xz * 0.5;
      let petals = 0.5 + 0.5 * cos(atan2(off.y, off.x) * 16.0);
      let rings = 0.6 + 0.4 * cos(out * 70.0);
      let rose =
        (1.0 - smoothstep(0.5, 0.56, out))
          * rings
          * mix(1.0, 0.75 + 0.25 * petals, smoothstep(0.3, 0.34, out));
      return
        embossed(
          s,
          glowing(plaster(s, LIME), lampGlow(s, lamps())),
          rose,
          0.02,
        );
    }
    // Door frames in white oil paint, coat over coat.
    case TRIM: {
      return
        polished(
          LIME * (0.9 + 0.2 * fbm(vec2f(s.uv.x * 40.0, s.uv.y * 3.0), 104u, 3)),
          0.35,
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fK,fl,fp,ff,f1),f5={name:"Home",air:i7(i6(1839112)),pillar:.02,dark:0,sound:{footing:"wood",hum:50,air:0,echo:.3},decor:[{thing:"sofa",perRoom:.8},{thing:"armchair",perRoom:.6},{thing:"floor-lamp",perRoom:.6},{thing:"tv",perRoom:.5},{thing:"bookshelf",perRoom:.6},{thing:"rug",perRoom:.5},{thing:"potted-plant",perRoom:.6},{thing:"radiator",perRoom:.4},{thing:"wall-clock",perRoom:.3}],shader:{...f3,needs:[...f3.needs,fm("home",{lamp:[2.5,1.7,.85],ambient:[.014,.008,.004],grid:1,panel:[.4,.4],stutter:0,visibility:45,exposure:1.1,glow:.22,fringe:.003,vignette:.45,noise:.014})]}},f4=tO("cube/entities/theme/edge/missing-texture/config/missing-texture",`
const MAGENTA = vec3f(1.0, 0.0, 0.86);

/// The placeholder in squares \`size\` metres across, giving off \`glow\` of
/// its own colour.
fn missing(s: Surf, size: f32, glow: f32) -> Material {
  let pink = chequer(s.uv, size);
  let colour = mix(vec3f(0.004), MAGENTA, pink);
  return Material(colour * 0.8, colour * glow, 0.5 * (1.0 - pink), vec3f(0.0));
}

/// 1 on the panels of this wall that found their texture.
fn loaded(s: Surf) -> f32 {
  let panel = tiling(s.uv, 1.25, 0.0, s.seed ^ 0x55u);
  return step(0.86, panel.y);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      let wall = missing(s, 0.3125, 0.22);
      let low = 1.0 - smoothstep(1.1, 1.104, s.p.y);
      let meant =
        mix(plaster(s, vec3f(0.5, 0.46, 0.36)), vec3f(0.07, 0.11, 0.05), low);
      let found = loaded(s);
      return
        Material(
          mix(wall.albedo, meant, found),
          wall.emission * (1.0 - found),
          mix(wall.gloss, 0.1 + 0.3 * low, found),
          vec3f(0.0),
        );
    }
    case FLOOR, OWNED: {
      let m = missing(s, 0.625, 0.1);
      return Material(m.albedo, m.emission, 0.75, vec3f(0.0));
    }
    case CEILING: {
      let m = missing(s, 0.625, 0.06);
      return
        Material(m.albedo, m.emission + lampGlow(s, lamps()), 0.0, vec3f(0.0));
    }
    case TRIM: {
      return missing(s, 0.078125, 0.3);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,fK,fl,fp,ff),f6={name:"Missing texture",air:i7(i6(1311252)),pillar:.025,dark:.3,sound:{footing:"hollow",hum:0,air:.02,echo:1.4},decor:[{thing:"door",perRoom:.5},{thing:"exit-sign",perRoom:.2},{thing:"crate",perRoom:.3},{thing:"monolith",perRoom:.1}],shader:{...f4,needs:[...f4.needs,fm("missing-texture",{lamp:[1.25,1.05,1.3],ambient:[.012,.004,.012],grid:2,panel:[.625,.625],stutter:.25,visibility:45,exposure:1,glow:.22,fringe:.006,vignette:.4,noise:.015})]}},f8=tO("cube/entities/theme/edge/normal-map/config/normal-map",`
fn lamps() -> Lamps {
  return Lamps(vec3f(0.12), vec3f(0.0), 2, vec2f(0.8, 0.8), 0.0);
}

/// How high a brick course stands at a wall point: 1 on a brick's face, 0
/// in the mortar, the faces rough.
fn coursed(s: Surf) -> f32 {
  let brick = bonded(s.uv, vec2f(0.42, 0.15), 61u);
  return
    smoothstep(0.004, 0.02, brick.y) * (0.8 + 0.4 * brick.x) + 0.5 * fbm(
      s.uv * 9.0,
      62u,
      3,
    );
}

/// Paving stones, each a shallow pillow.
fn paved(s: Surf) -> f32 {
  let f = fract(s.uv / 0.625) - 0.5;
  let pillow = 1.0 - pow(max(abs(f.x), abs(f.y)) * 2.0, 6.0);
  return pillow + 0.35 * fbm(s.uv * 5.0, 63u, 4);
}

/// A coffered ceiling: square sinkings, stepped twice.
fn coffered(s: Surf) -> f32 {
  let f = abs(fract(s.uv / 1.25) - 0.5) * 2.0;
  let rim = max(f.x, f.y);
  return smoothstep(0.62, 0.7, rim) + smoothstep(0.84, 0.9, rim);
}

fn themeMaterial(s: Surf) -> Material {
  let blank = matte(vec3f(0.5));
  switch s.kind {
    case WALL: {
      return embossed(s, blank, coursed(s), 0.02);
    }
    case FLOOR, OWNED: {
      return embossed(s, blank, paved(s), 0.035);
    }
    case CEILING: {
      return
        embossed(
          s,
          glowing(vec3f(0.5), lampGlow(s, lamps())),
          coffered(s),
          0.06,
        );
    }
    case TRIM: {
      return embossed(s, blank, cos(s.uv.x * 160.0), 0.004);
    }
    default: {
      return stuff(s);
    }
  }
}

/// The direction the point faces as a colour, darker where something is
/// drawn on it and toward a corner, so a room still reads as a room.
fn themeLight(s: Surf, m: Material) -> vec3f {
  let facing = normalize(s.normal + m.relief) * 0.5 + 0.5;
  let drawn = 0.3 + 1.4 * luma(m.albedo);
  let shade = mix(1.0, cornerShade(s), 0.6);
  let colour = pow(facing, vec3f(2.2)) * min(drawn, 1.15) * shade + m.emission;
  return haze(colour, s, AIR, 70.0);
}

fn themeLens(l: Lens) -> vec3f {
  return shown(through(l, 0.12, 0.002)) * vignette(l, 0.25);
}
`,fs,a1,fK,fY,fp,ff,fn),f7=i7(i6(8421631)),f9=(M,L,R)=>tO(`${M}/lit`,`
fn lamps() -> Lamps {
  return ${L};
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  return haze(roomLight(s, m, lamps()), s, AIR, ${R.toFixed(1)});
}
`,ff,fn),ce=tO("cube/entities/theme/edge/one-bit/config/one-bit",`
fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      // Frame-and-panel to shoulder height, plaster above.
      let low = 1.0 - smoothstep(1.2, 1.21, s.p.y);
      let f = abs(repeated(vec2f(s.uv.x, s.p.y), vec2f(0.8, 1.2)));
      let panel = smoothstep(0.0, 0.03, min(0.31 - f.x, 0.5 - f.y));
      let rail = band(s.p.y, 1.24, 0.07);
      let colour = mix(plaster(s, vec3f(0.5, 0.5, 0.5)), vec3f(0.13), low);
      return
        embossed(
          s,
          polished(mix(colour, vec3f(0.3), rail), 0.2 * low),
          low * panel + 1.5 * rail,
          0.02,
        );
    }
    case FLOOR, OWNED: {
      let board = fract(s.uv.x / 0.14);
      let gap = smoothstep(0.0, 0.04, min(board, 1.0 - board));
      let plank = unitOf(cellHash(vec2i(i32(floor(s.uv.x / 0.14)), 0), 87u));
      let grain = fbm(vec2f(s.uv.x * 60.0, s.uv.y * 2.0), 88u, 3);
      let colour =
        vec3f(0.16)
          * (0.55 + 0.5 * plank)
          * (0.7 + 0.5 * grain)
          * mix(0.3, 1.0, gap);
      return embossed(s, polished(colour, 0.45), gap + 0.2 * grain, 0.004);
    }
    case CEILING: {
      let m =
        glowing(
          plaster(s, vec3f(0.16)) * (1.0 - 0.6 * damp(s)),
          lampGlow(s, lamps()),
        );
      return embossed(s, m, ruled(s.uv, 1.25, 0.08), 0.03);
    }
    case TRIM: {
      return polished(vec3f(0.09), 0.3);
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLens(l: Lens) -> vec3f {
  let side = max(floor(l.size.y / 400.0), 1.0);
  let cell = floor(l.pixel / side);
  var snapped = l;
  snapped.uv = (cell + 0.5) * side / l.size;
  let seen =
    luma(tonemap(sceneAt(snapped.uv).rgb * 1.5 + glowAt(snapped.uv) * 0.25));
  let paper = step(bayer(cell), smoothstep(0.1, 0.8, seen));
  // An edge is ruled in whichever of the two shows against where it runs.
  let edge = creaseAt(snapped, side);
  let dotted = mix(paper, step(seen, 0.3), edge);
  return mix(vec3f(0.055, 0.06, 0.12), vec3f(0.9, 0.88, 0.78), dotted);
}
`,fs,a1,fK,fY,fl,fp,ff,fn,fo),ct={name:"One bit",air:i7(i6(263174)),pillar:.03,dark:.25,sound:{footing:"wood",hum:0,air:.05,echo:1.3},decor:[{thing:"door",perRoom:.8},{thing:"window",perRoom:.4},{thing:"bookshelf",perRoom:.4},{thing:"armchair",perRoom:.3},{thing:"wall-clock",perRoom:.3},{thing:"ladder",perRoom:.1}],shader:{...ce,needs:[...ce.needs,f9("one-bit","Lamps(vec3f(2.2), vec3f(0.004), 1, vec2f(0.3, 0.3), 0.3)",35)]}},ca=tO("cube/entities/theme/edge/point-cloud/config/point-cloud",`
/// How much of a returned point shows at \`s\`: points \`dense\` to the metre,
/// thinning in the room's own patches where the beam was lost. Farther off
/// than a pixel can part them they merge into a mist of the same weight.
fn returned(s: Surf, dense: f32) -> f32 {
  let at = s.uv * dense;
  let pixel = fwidth(at.x) + fwidth(at.y);
  let nearest = worley(at, 71u);
  let size = max(0.17, pixel * 0.9);
  let point =
    (1.0 - smoothstep(size * 0.5, size, nearest.x)) * (0.45 + 0.75 * nearest.y);
  let mist = smoothstep(0.35, 1.6, pixel);
  let lost = smoothstep(0.34, 0.5, fbm(s.uv * 0.7, s.seed ^ 0x59u, 3));
  return mix(point, 0.22, mist) * lost;
}

/// 1 on the rings the scanner in the room's middle swept over a floor or
/// ceiling, 0.25 between them.
fn swept(s: Surf) -> f32 {
  let out = fromMiddle(s);
  let ring = abs(fract(out * 3.0 + 0.4 * log(1.0 + out)) - 0.5);
  return mix(0.25, 1.0, 1.0 - smoothstep(0.16, 0.3, ring));
}

/// The colour of a height: violet at the floor through green to red at
/// the ceiling.
fn heightHue(s: Surf) -> vec3f {
  return spectrum(0.76 - 0.76 * clamp(s.p.y / ROOM.y, 0.0, 1.0));
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return matte(vec3f(0.5));
    }
    case FLOOR, OWNED, CEILING: {
      return matte(vec3f(0.5 * swept(s)));
    }
    case TRIM: {
      return matte(vec3f(0.8));
    }
    default: {
      return stuff(s);
    }
  }
}

/// A point shines by how well its surface sent the beam back, which is its
/// brightness; nothing lights anything.
fn themeLight(s: Surf, m: Material) -> vec3f {
  let dense = select(26.0, 34.0, abs(s.normal.y) > 0.5);
  let back = 0.25 + 1.5 * luma(m.albedo) + luma(m.emission);
  return heightHue(s) * (returned(s, dense) * back * 1.6 * exp(-s.far / 34.0));
}

fn themeLens(l: Lens) -> vec3f {
  let seen = through(l, 0.55, 0.002);
  return shown(1.0 - exp(-seen * 1.5)) * vignette(l, 0.3) + grain(l) * 0.006;
}
`,fs,a1,fK,fY,fp,fn),cr=tO("cube/entities/theme/edge/sixteen-colour/config/sixteen-colour",`
const CARD =
  array<vec3f, 16>(
    vec3f(0.0, 0.0, 0.0),
    vec3f(0.0, 0.0, 0.667),
    vec3f(0.0, 0.667, 0.0),
    vec3f(0.0, 0.667, 0.667),
    vec3f(0.667, 0.0, 0.0),
    vec3f(0.667, 0.0, 0.667),
    vec3f(0.667, 0.333, 0.0),
    vec3f(0.667, 0.667, 0.667),
    vec3f(0.333, 0.333, 0.333),
    vec3f(0.333, 0.333, 1.0),
    vec3f(0.333, 1.0, 0.333),
    vec3f(0.333, 1.0, 1.0),
    vec3f(1.0, 0.333, 0.333),
    vec3f(1.0, 0.333, 1.0),
    vec3f(1.0, 1.0, 0.333),
    vec3f(1.0, 1.0, 1.0),
  );

/// Dressed stone in courses: x the block's own number, y 1 on its face
/// and 0 in the joint.
fn ashlar(s: Surf) -> vec2f {
  let block = bonded(s.uv, vec2f(0.92, 0.46), 81u);
  return vec2f(block.x, smoothstep(0.012, 0.03, block.y));
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      let block = ashlar(s);
      let rough = fbm(s.uv * 6.0, 82u, 4);
      let stone =
        vec3f(0.1, 0.22, 0.75) * (0.6 + 0.6 * block.x) * (0.7 + 0.6 * rough);
      let moss =
        smoothstep(0.55, 0.75, fbm(s.uv * 1.6, s.seed, 3)) * (1.0 - smoothstep(
          0.2,
          1.3,
          s.p.y,
        ));
      let face = mix(stone, vec3f(0.03, 0.2, 0.05), moss);
      return
        embossed(
          s,
          matte(mix(vec3f(0.01, 0.012, 0.03), face, block.y)),
          block.y + 0.4 * rough,
          0.02,
        );
    }
    case FLOOR, OWNED: {
      let tile = tiling(s.uv, 0.625, 0.02, 83u);
      let at = vec2i(floor(s.uv / 0.625));
      let red = vec3f(0.36, 0.05, 0.03);
      let buff = vec3f(0.42, 0.26, 0.09);
      let worn = 0.7 + 0.5 * fbm(s.uv * 3.0, 84u, 3);
      let colour = mix(red, buff, f32((at.x + at.y) & 1)) * worn;
      return
        embossed(
          s,
          polished(colour * mix(0.2, 1.0, tile.x), 0.3),
          tile.x,
          0.006,
        );
    }
    case CEILING: {
      let beam = band(fract(s.uv.x / 1.25) * 1.25, 0.625, 0.22);
      let wood =
        vec3f(0.1, 0.05, 0.02) * (0.6 + 0.7 * fbm(
          vec2f(s.uv.x * 30.0, s.uv.y),
          85u,
          3,
        ));
      let m =
        glowing(
          mix(vec3f(0.14, 0.14, 0.16), wood * 3.0, beam),
          lampGlow(s, lamps()),
        );
      return embossed(s, m, beam, 0.05);
    }
    case TRIM: {
      return
        matte(vec3f(0.25, 0.25, 0.27) * (0.7 + 0.5 * fbm(s.uv * 8.0, 86u, 3)));
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLens(l: Lens) -> vec3f {
  // Three hundred and twenty dots across, whatever the screen.
  let side = l.size.x / 320.0;
  let cell = floor(l.pixel / side);
  let at = (cell + 0.5) * side / l.size;
  let wanted =
    tonemap(sceneAt(at).rgb * 0.8 + glowAt(at) * 0.2) + (bayer(
      cell,
    ) - 0.5) * 0.3;
  var best = CARD[0];
  var miss = 1e9;
  for (var index = 0; index < 16; index++) {
    let off = CARD[index] - wanted;
    let d = dot(off * vec3f(0.55, 1.0, 0.45), off);
    if (d < miss) {
      miss = d;
      best = CARD[index];
    }
  }
  return best;
}
`,fs,a1,fK,fY,fl,fp,ff,fn,fo),cs={name:"Sixteen colours",air:i7(i6(131594)),pillar:.035,dark:.2,sound:{footing:"concrete",hum:0,air:.1,echo:2.6},decor:[{thing:"barrel",perRoom:.8},{thing:"crate",perRoom:.6},{thing:"door",perRoom:.6},{thing:"bench",perRoom:.2},{thing:"drain",perRoom:.2}],shader:{...cr,needs:[...cr.needs,f9("sixteen-colours","Lamps(vec3f(2.4, 2.0, 1.2), vec3f(0.01, 0.014, 0.04), 2, vec2f(0.35, 0.35), 0.4)",30)]}},cl=tO("cube/entities/theme/edge/static/config/static",`
/// Snow at a point, 0 to 1, in grains \`grain\` to the metre each way.
fn snow(s: Surf, grain: vec2f, salt: u32) -> f32 {
  let frame = u32(s.time * 24.0) + s.hour * 86400u;
  return unitOf(hashOf(cellHash(vec2i(floor(s.uv * grain)), salt), frame));
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      // A band of the wall loses the picture a moment at a time.
      let frame = u32(s.time * 6.0);
      let row = u32(s.p.y * 9.0);
      let lost = step(0.82, unitOf(hashOf(hashOf(row, s.seed), frame)));
      let combed = snow(s, vec2f(22.0, 130.0), 91u);
      let coarse = snow(s, vec2f(5.0, 130.0), 92u);
      return polished(vec3f(0.05 + 0.6 * mix(combed, coarse, lost)), 0.25);
    }
    case FLOOR, OWNED: {
      return
        polished(
          vec3f(
            0.03 + 0.5 * snow(s, vec2f(110.0), 93u) * snow(s, vec2f(9.0), 94u),
          ),
          0.6,
        );
    }
    case CEILING: {
      return
        glowing(
          vec3f(0.04 + 0.4 * snow(s, vec2f(28.0), 95u)),
          lampGlow(s, lamps()),
        );
    }
    case TRIM: {
      return matte(vec3f(0.02 + 0.1 * snow(s, vec2f(200.0), 96u)));
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLens(l: Lens) -> vec3f {
  let frame = u32(l.time * 24.0);
  // A few rows in a hundred are pulled sideways, new ones every eighth of a second.
  let row = u32(l.uv.y * 90.0);
  let pull = hashOf(row, frame / 3u);
  let torn =
    select(0.0, (unitOf(mix32(pull)) - 0.5) * 0.09, unitOf(pull) < 0.05);
  let at = l.uv + vec2f(torn, 0.0);
  let picture = luma(tonemap(sceneAt(at).rgb * 1.2 + glowAt(at) * 0.3));
  let ghost = luma(tonemap(sceneAt(at - vec2f(0.035, 0.0)).rgb));
  let speck =
    unitOf(hashOf(hashOf(u32(l.pixel.x * 0.5), u32(l.pixel.y * 0.5)), frame));
  // The dark bar of a set that cannot hold the picture still climbs the screen.
  let bar =
    1.0 - 0.35 * smoothstep(
      0.82,
      1.0,
      abs(fract(l.uv.y + l.time * 0.07) - 0.5) * 2.0,
    );
  let grey =
    mix(picture + 0.28 * ghost, speck, 0.3)
      * bar
      * scanned(l, l.size.y / 3.0, 0.3);
  return vec3f(0.92, 1.0, 1.06) * grey * vignette(l, 0.5);
}
`,fs,a1,fK,fY,fp,ff,fn,fo),co={name:"Static",air:i7(i6(1711134)),pillar:.03,dark:.2,sound:{footing:"hollow",hum:15625,air:1,echo:.2},decor:[{thing:"tv",perRoom:1.5},{thing:"sofa",perRoom:.2},{thing:"mannequin",perRoom:.2},{thing:"payphone",perRoom:.2}],shader:{...cl,needs:[...cl.needs,f9("static","Lamps(vec3f(1.5, 1.6, 1.8), vec3f(0.02), 2, vec2f(0.4, 0.4), 0.7)",22)]}},cn=tO("cube/entities/theme/edge/test-card/config/test-card",`
const BARS =
  array<vec3f, 7>(
    vec3f(0.52, 0.52, 0.52),
    vec3f(0.52, 0.52, 0.0),
    vec3f(0.0, 0.52, 0.52),
    vec3f(0.0, 0.52, 0.0),
    vec3f(0.52, 0.0, 0.52),
    vec3f(0.52, 0.0, 0.0),
    vec3f(0.0, 0.0, 0.52),
  );

/// The bars as a wall carries them: seven colours, under them the same in
/// reverse with black between, and at the foot the blacks a set is tuned by.
fn bars(s: Surf) -> vec3f {
  let across = clamp(alongWall(s) / ROOM.x, 0.0, 0.9999);
  let bar = u32(across * 7.0);
  if (s.p.y > 0.78) {
    return BARS[bar];
  }
  if (s.p.y > 0.6) {
    return select(vec3f(0.004), BARS[6u - bar], (bar & 1u) == 0u);
  }
  let foot = u32(across * 28.0);
  if (foot < 5u) {
    return vec3f(0.0, 0.015, 0.07);
  }
  if (foot < 10u) {
    return vec3f(1.0);
  }
  if (foot < 15u) {
    return vec3f(0.03, 0.0, 0.1);
  }
  if (foot < 20u || foot > 23u) {
    return vec3f(0.004);
  }
  return vec3f(0.006 * f32(foot - 19u));
}

/// The floor's rows, a metre and a quarter each: grey steps up, bursts of
/// ever finer stripes, grey steps down, a fine chequer.
fn steps(s: Surf) -> vec3f {
  let row = u32(floor(s.uv.y / 1.25)) & 3u;
  let across = fract(s.uv.x / ROOM.x);
  if (row == 1u) {
    let burst = floor(across * 6.0);
    let fine = 0.32 / exp2(burst);
    return vec3f(mix(0.03, 0.6, chequer(vec2f(s.uv.x, 0.0), fine)));
  }
  if (row == 3u) {
    return vec3f(mix(0.02, 0.5, chequer(s.uv, 0.078125)));
  }
  let rise = floor(select(across, 1.0 - across, row == 2u) * 10.0) / 9.0;
  return vec3f(pow(rise, 2.2) * 0.8 + 0.004);
}

fn tube(colour: vec3f, gloss: f32) -> Material {
  return Material(colour * 0.75, colour * 0.3, gloss, vec3f(0.0));
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return tube(bars(s), 0.3);
    }
    case FLOOR, OWNED: {
      return tube(steps(s), 0.55);
    }
    case CEILING: {
      let out = fromMiddle(s);
      let circle = 1.0 - smoothstep(0.015, 0.03, abs(out - 2.2));
      let lines = max(ruled(s.uv, 0.3125, 0.008), circle);
      let card = tube(mix(vec3f(0.035), vec3f(0.6), lines), 0.0);
      return glowing(card.albedo, card.emission + lampGlow(s, lamps()));
    }
    case TRIM: {
      return tube(vec3f(mix(0.004, 0.6, step(0.5, fract(s.uv.y * 12.0)))), 0.3);
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLens(l: Lens) -> vec3f {
  // The glass bulges, so the picture does.
  let middle = l.uv - 0.5;
  let at = l.uv + middle * dot(middle, middle) * 0.14;
  let inside = step(max(abs(at.x - 0.5), abs(at.y - 0.5)), 0.5);
  // The three guns have drifted apart sideways.
  let drift = vec2f(0.0022, 0.0);
  let beam =
    vec3f(sceneAt(at + drift).r, sceneAt(at).g, sceneAt(at - drift).b) + glowAt(
      at,
    ) * 0.3;
  let mask = 0.86 + 0.14 * cos(l.pixel.x * 2.0944 + vec3f(0.0, 2.0944, 4.1888));
  let hum =
    1.0 - 0.1 * smoothstep(
      0.0,
      0.25,
      abs(fract(at.y - l.time * 0.11) - 0.5) * 2.0 - 0.6,
    );
  let picture =
    tonemap(beam * 1.15) * mask * scanned(l, l.size.y / 3.0, 0.3) * hum;
  return picture * inside * vignette(l, 0.45) + grain(l) * 0.02;
}
`,fs,fK,fY,fp,ff,fn,fo),ci={name:"Test card",air:i7(i6(329224)),pillar:.03,dark:.1,sound:{footing:"hollow",hum:1e3,air:0,echo:.6},decor:[{thing:"tv",perRoom:1},{thing:"wall-clock",perRoom:.4},{thing:"office-chair",perRoom:.3},{thing:"cable-reel",perRoom:.3}],shader:{...cn,needs:[...cn.needs,f9("test-card","Lamps(vec3f(1.1, 1.15, 1.3), vec3f(0.01), 2, vec2f(0.5, 0.5), 0.15)",40)]}},cf=tO("cube/entities/theme/edge/texture-test/config/texture-test",`
/// The test map in squares \`size\` metres across, \`deep\` how strongly coloured.
fn testMap(s: Surf, size: f32, deep: f32) -> Material {
  let at = s.uv / size;
  let square = vec2i(floor(at));
  let f = fract(at) - 0.5;
  // The hue walks the diagonal, so a stretched or mirrored face shows at once.
  let hue = spectrum(f32(square.x + square.y * 3) / 16.0);
  let light = f32((square.x + square.y) & 1);
  var colour = mix(vec3f(0.06), vec3f(0.42), light);
  colour = mix(colour, hue * mix(0.5, 0.95, light), deep);
  let pixel = fwidth(at.x) + fwidth(at.y);
  let ring = 1.0 - smoothstep(0.012, 0.012 + pixel, abs(length(f) - 0.32));
  let cross = 1.0 - smoothstep(0.006, 0.006 + pixel, min(abs(f.x), abs(f.y)));
  let tick =
    step(0.44, max(abs(f.x), abs(f.y))) * step(
      abs(fract(at.x * 8.0) - 0.5),
      0.12,
    );
  let near = 1.0 - smoothstep(0.08, 0.3, pixel);
  let ink = mix(vec3f(0.9), vec3f(0.02), light);
  colour = mix(colour, ink, near * max(ring, max(0.5 * cross, 0.6 * tick)));
  let seam = ruled(s.uv, size, 0.006);
  colour = mix(colour, vec3f(0.01), seam);
  let scuff = 0.9 + 0.2 * fbm(s.uv * 3.0, s.seed, 3);
  return embossed(s, polished(colour * scuff, 0.35), -seam, 0.002);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return testMap(s, 0.5, 0.8);
    }
    case FLOOR, OWNED: {
      let m = testMap(s, 1.0, 0.55);
      return Material(m.albedo, m.emission, 0.6, m.relief);
    }
    case CEILING: {
      let m = testMap(s, 1.25, 0.12);
      return Material(m.albedo, lampGlow(s, lamps()), 0.0, m.relief);
    }
    case TRIM: {
      return polished(vec3f(0.02) + 0.5 * vec3f(chequer(s.uv, 0.05)), 0.3);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fK,fp,ff),cc={name:"Texture test",air:i7(i6(1842210)),pillar:.025,dark:.05,sound:{footing:"hollow",hum:120,air:.05,echo:.9},decor:[{thing:"mannequin",perRoom:.4},{thing:"crate",perRoom:.4},{thing:"monolith",perRoom:.15},{thing:"mirror",perRoom:.2}],shader:{...cf,needs:[...cf.needs,fm("texture-test",{lamp:[1.3,1.32,1.4],ambient:[.015,.015,.018],grid:2,panel:[.6,.6],stutter:.05,visibility:55,exposure:1,glow:.12,fringe:.004,vignette:.35,noise:.012})]}},cu=tO("cube/entities/theme/edge/wireframe/config/wireframe",`
const PHOSPHOR = vec3f(0.08, 1.0, 0.38);
const HOT = vec3f(1.0, 0.72, 0.2);

/// A face as the triangles it is made of, \`pitch\` metres to a square.
fn meshed(uv: vec2f, pitch: f32) -> f32 {
  return max(ruled(uv, pitch, 0.007), 0.55 * slashed(uv, pitch, 0.005));
}

/// 1 along the line \`x\` metres from 0, drawn like the mesh's.
fn edged(x: f32) -> f32 {
  let pixel = fwidth(x);
  return 1.0 - smoothstep(0.012 + pixel * 0.6, 0.012 + pixel * 1.6, abs(x));
}

fn drawn(lines: f32, colour: vec3f) -> Material {
  return glowing(vec3f(0.0), colour * lines * 1.5);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      let edges = max(edged(s.p.y), edged(ROOM.y - s.p.y));
      return drawn(max(meshed(s.uv, ROOM.y / 4.0), edges), PHOSPHOR);
    }
    case FLOOR, OWNED: {
      return drawn(meshed(s.uv, 0.625), PHOSPHOR);
    }
    case CEILING: {
      let panel =
        lampMask(s.p.xz, 2, vec2f(1.0, 0.5)) - lampMask(
          s.p.xz,
          2,
          vec2f(0.94, 0.44),
        );
      let mesh = drawn(0.5 * meshed(s.uv, 1.25), PHOSPHOR);
      return
        glowing(
          vec3f(0.0),
          mesh.emission + HOT * (2.5 * clamp(panel, 0.0, 1.0)),
        );
    }
    case TRIM: {
      return drawn(ruled(s.uv, 0.2, 0.006), PHOSPHOR);
    }
    default: {
      let thing = stuff(s);
      return glowing(thing.albedo, thing.emission * 0.3);
    }
  }
}

/// Lines give off their own light and nothing else gives any: a thing that
/// is not a line shows as a faint glow of its own brightness.
fn themeLight(s: Surf, m: Material) -> vec3f {
  let ghost = PHOSPHOR * (0.3 * luma(m.albedo));
  return (m.emission + ghost) * exp(-s.far / 30.0);
}

fn themeLens(l: Lens) -> vec3f {
  let beam = through(l, 0.9, 0.005);
  return
    shown(1.0 - exp(-beam * 1.4))
      * scanned(l, l.size.y * 0.5, 0.12)
      * vignette(l, 0.35) + grain(l) * 0.008;
}
`,fs,fK,fY,fp,ff,fn),ch=tO("cube/entities/theme/laboratory/agar/config/agar",`
const GEL = vec3f(0.62, 0.3, 0.035);

/// What has grown at a point of the plate, given its \`colony\` cell: x how
/// thick it stands, 0 to 1, y how far into the colony the point is.
fn growth(uv: vec2f, colony: vec2f) -> vec2f {
  let reach = 0.1 + 0.34 * colony.y * colony.y;
  let lobed = colony.x + 0.07 * fbm(uv * 11.0, 402u, 3);
  let big = 1.0 - smoothstep(reach - 0.035, reach, lobed);
  let dot = worley(uv * 8.0, 403u);
  // Pinpoint colonies along the streaks the loop drew.
  let streak = smoothstep(0.55, 0.7, fbm(uv * vec2f(0.5, 2.6), 404u, 2));
  let small = streak * (1.0 - smoothstep(0.16, 0.24, dot.x)) * step(0.3, dot.y);
  return vec2f(max(big, 0.8 * small), clamp(1.0 - lobed / reach, 0.0, 1.0));
}

fn plate(s: Surf) -> Material {
  // x the distance to the colony's own point, y the colony's own number.
  let colony = worley(s.uv * 1.3, 401u);
  let grown = growth(s.uv, colony);
  let depth = fbm(s.uv * 0.5, 405u, 3);
  let gel = GEL * (0.55 + 0.8 * depth);
  // Some colonies clear the gel around them, and the lightbox shows through.
  let halo = step(0.7, colony.y) * (1.0 - smoothstep(0.3, 0.52, colony.x));
  let ring = 0.8 + 0.2 * sin(grown.y * 34.0);
  let kind = colony.y;
  let cream =
    mix(
      mix(vec3f(0.6, 0.55, 0.36), vec3f(0.52, 0.07, 0.05), step(0.55, kind)),
      vec3f(0.16, 0.3, 0.12),
      step(0.85, kind),
    ) * ring;
  let albedo = mix(gel * 0.25, cream, grown.x);
  let lightbox = gel * (0.75 + 0.9 * halo) * (1.0 - 0.96 * grown.x);
  let m = Material(albedo, lightbox, mix(0.45, 0.25, grown.x), vec3f(0.0));
  return embossed(s, m, grown.x * (0.5 + 0.5 * grown.y) + 0.05 * ring, 0.03);
}

/// Condensation, 0 to 1 a drop's height: beads thicker where \`much\` is high.
fn beads(uv: vec2f, much: f32, salt: u32) -> f32 {
  let drop = worley(uv * 28.0, salt);
  let radius = 0.2 + 0.25 * drop.y;
  return
    step(1.0 - much, drop.y) * sqrt(
      max(1.0 - drop.x * drop.x / (radius * radius), 0.0),
    );
}

fn dishWall(s: Surf) -> Material {
  let h = s.p.y;
  let fogged =
    smoothstep(0.3, ROOM.y, h + 0.6 * fbm(s.uv * 0.8, s.seed ^ 0x40u, 3));
  let bead = beads(s.uv, 0.25 + 0.6 * fogged, 406u);
  let run =
    smoothstep(
      0.62,
      0.7,
      fbm(vec2f(s.uv.x * 16.0, s.uv.y * 0.4), s.seed ^ 0x41u, 2),
    ) * fogged;
  // Growth climbs the wall from the gel in a fuzz.
  let climb =
    smoothstep(0.55, 0.3, h + 0.45 * fbm(s.uv * vec2f(2.0, 1.0), 407u, 4));
  let fuzz = climb * (0.6 + 0.4 * valueNoise(s.uv * 140.0, 408u));
  let plastic =
    vec3f(0.46, 0.44, 0.38) * (0.75 + 0.35 * fogged) * (1.0 - 0.35 * run);
  let albedo = mix(plastic, vec3f(0.5, 0.52, 0.4), fuzz);
  let uplit = GEL * 0.9 * exp(-h * 1.5) * (1.0 - 0.7 * fuzz);
  let wall =
    Material(
      albedo,
      uplit,
      mix(0.75, 0.1, max(fuzz, 0.6 * fogged * (1.0 - bead))),
      vec3f(0.0),
    );
  return embossed(s, wall, bead + 0.6 * fuzz - 0.3 * run, 0.005);
}

fn lid(s: Surf) -> Material {
  let bead = beads(s.uv * 0.6, 0.55, 409u);
  let film = fbm(s.uv * 1.2, s.seed ^ 0x42u, 3);
  let plastic = vec3f(0.34, 0.32, 0.27) * (0.7 + 0.5 * film);
  let m =
    Material(
      plastic,
      lampGlow(s, lamps()) * (0.6 + 0.4 * film) * (1.0 - 0.5 * bead),
      0.7 * bead,
      vec3f(0.0),
    );
  return embossed(s, m, bead, 0.012);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return dishWall(s);
    }
    case FLOOR, OWNED: {
      return plate(s);
    }
    case CEILING: {
      return lid(s);
    }
    case TRIM: {
      return polished(vec3f(0.3, 0.29, 0.25), 0.8);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fp,ff),cd={name:"Agar plate",air:i7(i6(1839363)),pillar:.016,dark:.1,sound:{footing:"soft",hum:60,air:.05,echo:.3},decor:[{thing:"tank",perRoom:.3},{thing:"lab-bench",perRoom:.2},{thing:"balloon",perRoom:.1},{thing:"rug",perRoom:.2}],shader:{...ch,needs:[...ch.needs,fm("agar",{lamp:[.75,.66,.46],ambient:[.02,.011,.002],grid:2,panel:[.7,.7],stutter:0,visibility:36,exposure:1.1,glow:.3,fringe:.006,vignette:.4,noise:.014})]}},cm=tO("cube/entities/theme/laboratory/bubble-chamber/config/bubble-chamber",`
/// Straight trails: three families of lines, each at its own slant, one
/// every ninety centimetres or none.
fn rays(uv: vec2f, salt: u32) -> f32 {
  var sum = 0.0;
  for (var family = 0u; family < 3u; family++) {
    let slant = 0.35 + 1.1 * f32(family) + 0.3 * unitOf(mix32(salt + family));
    let across = dot(uv, vec2f(-sin(slant), cos(slant))) / 0.9;
    let word = hashOf(bitcast<u32>(i32(floor(across))), salt + family);
    let at = abs(fract(across) - 0.1 - 0.8 * unitOf(word)) * 0.9;
    sum +=
      step(0.45, unitOf(mix32(word))) * (1.0 - smoothstep(0.003, 0.011, at));
  }
  return sum;
}

/// Curled trails: something light losing its way inward, one to a cell at
/// most, turning left or right.
fn curls(uv: vec2f, salt: u32) -> f32 {
  let scaled = uv / 1.4;
  let cell = vec2i(floor(scaled));
  var sum = 0.0;
  for (var dy = -1; dy <= 1; dy++) {
    for (var dx = -1; dx <= 1; dx++) {
      let other = cell + vec2i(dx, dy);
      let word = cellHash(other, salt);
      if (unitOf(mix32(word ^ 0x52u)) < 0.45) {
        continue;
      }
      let off =
        (scaled
          - vec2f(other)
          - vec2f(unitOf(word), unitOf(mix32(word)))) * 1.4;
      let r = length(off);
      let reach = 0.25 + 0.4 * unitOf(mix32(word ^ 0x99u));
      let handed = select(-1.0, 1.0, (word & 1u) == 1u);
      let pitch = 0.05 + 0.05 * r / reach;
      let turn = r / pitch - handed * atan2(off.y, off.x) / 6.2832;
      let line = 1.0 - smoothstep(0.03, 0.09, abs(fract(turn) - 0.5));
      sum += line * step(r, reach) * smoothstep(0.02, 0.06, r);
    }
  }
  return sum;
}

/// A side of the tank: the trails as strings of bubbles, the crosses the
/// cameras measure from, and the dark liquid behind.
fn tank(s: Surf, salt: u32) -> Material {
  let beaded = 0.45 + 0.55 * step(0.35, valueNoise(s.uv * 170.0, salt + 20u));
  let trail =
    clamp(rays(s.uv, salt) + curls(s.uv, salt + 7u), 0.0, 1.0) * beaded;
  let at = repeated(s.uv, vec2f(1.25));
  let fiducial =
    step(min(abs(at.x), abs(at.y)), 0.004) * step(
      max(abs(at.x), abs(at.y)),
      0.05,
    );
  let depth = fbm(s.uv * 0.7 + vec2f(0.0, s.time * 0.01), salt + 30u, 4);
  let liquid = vec3f(0.004, 0.03, 0.04) * (0.4 + 1.2 * depth);
  let stray = step(0.9965, valueNoise(s.uv * 90.0, salt + 40u));
  let glow =
    vec3f(0.75, 0.95, 1.0) * (1.5 * trail + 0.8 * stray) + vec3f(
      0.01,
      0.05,
      0.06,
    ) * depth;
  let m =
    Material(
      mix(liquid, vec3f(0.5), fiducial),
      glow * (1.0 - fiducial),
      0.75,
      vec3f(0.0),
    );
  return embossed(s, m, 0.3 * depth + trail, 0.003);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return tank(s, 521u);
    }
    case FLOOR, OWNED: {
      return tank(s, 522u);
    }
    case CEILING: {
      let m = tank(s, 523u);
      return
        Material(
          m.albedo,
          m.emission + lampGlow(s, lamps()),
          m.gloss,
          m.relief,
        );
    }
    case TRIM: {
      let bolt = tiling(s.uv, 0.12, 0.05, 524u);
      return embossed(s, polished(vec3f(0.08, 0.09, 0.1), 0.6), bolt.x, 0.004);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),cp={name:"Bubble chamber",air:i7(i6(1288)),pillar:.018,dark:.25,sound:{footing:"metal",hum:25,air:.15,echo:3.5},decor:[{thing:"tank",perRoom:.3},{thing:"pipe",perRoom:.6},{thing:"ladder",perRoom:.15},{thing:"cable-reel",perRoom:.2}],shader:{...cm,needs:[...cm.needs,fm("bubble-chamber",{lamp:[.75,.95,1.1],ambient:[.001,.004,.005],grid:2,panel:[.26,.26],stutter:.5,visibility:50,exposure:1.2,glow:.4,fringe:.008,vignette:.6,noise:.035})]}},cv=tO("cube/entities/theme/laboratory/circuit-board/config/circuit-board",`
/// Copper on the board: x is 1 on a trace or a via's ring, y on the ring
/// alone, z in the via's drilled hole. Traces run in buses, a block of board
/// to each, and change lanes on the diagonal.
fn copper(uv: vec2f, salt: u32) -> vec3f {
  let word = cellHash(vec2i(floor(uv / 1.25)), salt);
  let q = select(uv, uv.yx, (word & 1u) == 1u);
  let pitch = 0.07;
  let run = q.x / 0.62;
  let jog = floor(run) + clamp((fract(run) - 0.5) * 0.62 / pitch, 0.0, 1.0);
  let lane = q.y / pitch + jog;
  let laid = step(0.4, unitOf(hashOf(bitcast<u32>(i32(floor(lane))), word)));
  let trace = laid * (1.0 - smoothstep(0.17, 0.24, abs(fract(lane) - 0.5)));
  let via = worley(uv / 0.31, salt + 1u);
  let drilled = step(0.55, via.y);
  let ring = drilled * (1.0 - smoothstep(0.13, 0.16, via.x));
  let hole = drilled * (1.0 - smoothstep(0.05, 0.07, via.x));
  return vec3f(max(trace, ring), ring, hole);
}

const GOLD = vec3f(0.7, 0.5, 0.14);

/// The green mask, paler where \`copper\` runs under it.
fn solderMask(copper: f32) -> vec3f {
  return mix(vec3f(0.012, 0.085, 0.04), vec3f(0.03, 0.2, 0.09), copper);
}

fn streets(s: Surf) -> Material {
  let metal = copper(s.uv, 441u);
  // Silkscreen: the outline of a part never fitted, one to a cell.
  let cell = s.uv / 0.625;
  let word = cellHash(vec2i(floor(cell)), 442u);
  let size = vec2f(0.12 + 0.2 * unitOf(word), 0.1 + 0.16 * unitOf(mix32(word)));
  let box = abs(fract(cell) - 0.5) - size;
  let fitted = step(0.6, unitOf(mix32(word ^ 0x44u)));
  let outline = fitted * (1.0 - smoothstep(0.0, 0.012, abs(max(box.x, box.y))));
  let pad =
    fitted
      * step(box.y, -0.02)
      * step(abs(box.x + 0.03), 0.02)
      * step(0.3, fract(cell.y * 12.0));
  let weave = valueNoise(s.uv * 220.0, 443u);
  let mask = solderMask(metal.x) * (0.9 + 0.15 * weave);
  var albedo = mix(mask, GOLD, metal.y);
  albedo =
    mix(albedo, vec3f(0.62, 0.64, 0.6), max(outline * (1.0 - metal.y), pad));
  albedo = mix(albedo, vec3f(0.003), metal.z);
  let m =
    polished(
      albedo,
      mix(0.72, 0.85, max(metal.y, pad))
        * (1.0 - metal.z)
        * (1.0 - 0.6 * outline),
    );
  return embossed(s, m, metal.x + 2.0 * pad - 3.0 * metal.z, 0.003);
}

fn towers(s: Surf) -> Material {
  let h = s.p.y;
  let metal = copper(vec2f(s.uv.x, h), 444u);
  let mask = solderMask(metal.x);
  // Gold fingers for a skirting.
  let finger =
    (1.0 - smoothstep(0.3, 0.304, h))
      * step(0.03, h)
      * step(0.25, fract(s.uv.x / 0.09));
  // A chip to each bay, its legs along its foot and its head.
  let across = fract(s.uv.x / 1.25) * 1.25;
  let word = hashOf(bitcast<u32>(i32(floor(s.uv.x / 1.25))), s.seed ^ 0x44u);
  let half = 0.3 + 0.25 * unitOf(word);
  let top = 1.5 + 0.55 * unitOf(mix32(word));
  let box = vec2f(abs(across - 0.625) - half, max(h - top, 0.5 - h));
  let body = 1.0 - smoothstep(0.0, 0.006, max(box.x, box.y));
  let leg =
    (1.0 - smoothstep(0.0, 0.004, box.x))
      * step(0.4, fract(across / 0.05))
      * (1.0 - smoothstep(0.0, 0.004, max(h - top - 0.06, 0.44 - h)))
      * (1.0 - body);
  // Windows: a few lit, and the lit ones change with the minute.
  let pane = vec2f(across, h) / vec2f(0.075, 0.11);
  let lit =
    hashOf(
      cellHash(vec2i(floor(pane)), word),
      u32(s.time / 60.0) / 2u + s.hour,
    );
  let glass =
    body
      * step(box.x, -0.05)
      * step(box.y, -0.08)
      * step(0.25, fract(pane.x))
      * step(0.3, fract(pane.y));
  let on = glass * step(0.86, unitOf(lit));
  let mould = valueNoise(s.uv * 150.0, 445u);
  let notch =
    body * (1.0 - smoothstep(
      0.03,
      0.035,
      length(vec2f(across - 0.625 + half - 0.08, h - top + 0.08)),
    ));
  var albedo = mix(mask, GOLD, max(metal.y * (1.0 - body), finger));
  albedo = mix(albedo, vec3f(0.022, 0.022, 0.025) * (0.8 + 0.4 * mould), body);
  albedo = mix(albedo, vec3f(0.5, 0.52, 0.5), max(leg, 0.3 * notch));
  albedo = mix(albedo, vec3f(0.004), glass);
  let warm =
    mix(
      vec3f(1.0, 0.62, 0.2),
      vec3f(0.6, 0.85, 1.0),
      step(0.8, unitOf(mix32(lit))),
    );
  let gloss = mix(0.7, 0.3, body) + 0.6 * glass + 0.5 * max(leg, finger);
  let wall =
    Material(albedo, warm * 1.6 * on, clamp(gloss, 0.0, 0.95), vec3f(0.0));
  return
    embossed(
      s,
      wall,
      metal.x * (1.0 - body) + 6.0 * body + 3.0 * leg - glass + 2.0 * finger,
      0.004,
    );
}

fn underside(s: Surf) -> Material {
  let joint = worley(s.uv / 0.1, 446u);
  let soldered = step(0.7, joint.y) * (1.0 - smoothstep(0.16, 0.22, joint.x));
  let metal = copper(s.uv, 447u);
  let mask = mix(vec3f(0.008, 0.05, 0.03), vec3f(0.02, 0.12, 0.06), metal.x);
  let m =
    Material(
      mix(mask, vec3f(0.55, 0.57, 0.56), soldered),
      lampGlow(s, lamps()),
      mix(0.5, 0.9, soldered),
      vec3f(0.0),
    );
  return
    embossed(s, m, soldered * (1.0 - joint.x * 3.0) + 0.3 * metal.x, 0.012);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return towers(s);
    }
    case FLOOR, OWNED: {
      return streets(s);
    }
    case CEILING: {
      return underside(s);
    }
    case TRIM: {
      // A capacitor: a blue sleeve with its stripe, crimped near the foot.
      let stripe = band(fract(s.uv.x / 0.3) * 0.3, 0.15, 0.05);
      let sleeve = mix(vec3f(0.02, 0.04, 0.2), vec3f(0.5, 0.52, 0.55), stripe);
      return embossed(s, polished(sleeve, 0.6), band(s.p.y, 0.25, 0.03), -0.01);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),cg={name:"Circuit board",air:i7(i6(133894)),pillar:.03,dark:.12,sound:{footing:"hollow",hum:180,air:.3,echo:1.1},decor:[{thing:"server-rack",perRoom:.8},{thing:"cable-reel",perRoom:.3},{thing:"monolith",perRoom:.2},{thing:"socket",perRoom:1},{thing:"vent",perRoom:.4}],shader:{...cv,needs:[...cv.needs,fm("circuit-board",{lamp:[1.3,1.5,1.2],ambient:[.003,.008,.005],grid:3,panel:[.22,.12],stutter:.1,visibility:48,exposure:1.15,glow:.3,fringe:.006,vignette:.42,noise:.016})]}},cb=tO("cube/entities/theme/laboratory/clean-room/config/clean-room",`
fn accessFloor(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.625, 0.006, 361u);
  let at = fract(s.uv / 0.625);
  let inset = step(0.1, min(min(at.x, 1.0 - at.x), min(at.y, 1.0 - at.y)));
  // One panel in three is drilled for the air going down.
  let vented = step(0.66, tile.y) * inset;
  let near = 1.0 / (1.0 + s.far * s.far / 40.0);
  let hole = 1.0 - smoothstep(0.22, 0.3, length(fract(s.uv / 0.04) - 0.5));
  let drilled = vented * mix(0.3, hole, near);
  let speck = valueNoise(s.uv * 160.0, 362u);
  let vinyl =
    vec3f(0.5, 0.53, 0.55) * (0.93 + 0.1 * speck) * (0.95 + 0.08 * tile.y);
  let albedo =
    mix(vec3f(0.08, 0.09, 0.1), vinyl, tile.x) * (1.0 - 0.9 * drilled);
  let scuff = fbm(s.uv * 1.1, 363u, 3);
  let panel = polished(albedo, (0.8 - 0.35 * scuff) * (1.0 - drilled));
  return embossed(s, panel, tile.x - hole * vented, 0.002);
}

/// The yellow room seen through a wall's window: its lamps, and the dark
/// shapes of what stands under them.
fn yellowRoom(s: Surf, along: f32) -> vec3f {
  let lampRow = band(s.p.y, 1.68, 0.03) * step(0.3, fract(along * 2.5));
  let kit =
    step(
      s.p.y,
      1.1 + 0.45 * unitOf(
        hashOf(bitcast<u32>(i32(floor(along * 9.0))), s.seed ^ 0x24u),
      ),
    );
  let glow = 0.5 + 0.5 * fbm(vec2f(along * 2.0, s.p.y * 2.0), 364u, 3);
  return
    vec3f(1.0, 0.62, 0.04) * (0.5 * glow * (1.0 - 0.85 * kit) + 5.0 * lampRow);
}

fn cleanWall(s: Surf) -> Material {
  let h = s.p.y;
  let bay = floor(s.uv.x / 1.25);
  let across = fract(s.uv.x / 1.25) * 1.25;
  let toSeam = min(across, 1.25 - across);
  let joint = 1.0 - smoothstep(0.004, 0.009, toSeam);
  let peel = fbm(s.uv * 60.0, 365u, 2);
  let white = vec3f(0.6, 0.63, 0.64) * (0.95 + 0.06 * peel);
  // Louvres to knee height take the air back.
  let grille =
    step(0.08, h) * (1.0 - smoothstep(0.52, 0.524, h)) * step(0.1, toSeam);
  let slat = fract(h / 0.04);
  let gap = grille * (1.0 - smoothstep(0.3, 0.45, slat));
  let glazed =
    step(0.55, unitOf(hashOf(bitcast<u32>(i32(bay)), s.seed ^ 0x36u)));
  let pane = max(abs(across - 0.625) - 0.4, abs(h - 1.4) - 0.34);
  let window = glazed * (1.0 - smoothstep(0.0, 0.006, pane));
  let frame = glazed * (1.0 - smoothstep(0.03, 0.036, pane)) - window;
  let steel = vec3f(0.42, 0.44, 0.46);
  var albedo = mix(white, vec3f(0.07, 0.08, 0.09), max(joint, gap));
  albedo = mix(albedo, steel, max(frame, 1.0 - smoothstep(0.06, 0.064, h)));
  albedo = mix(albedo, vec3f(0.015, 0.012, 0.004), window);
  let gloss = mix(0.35 + 0.3 * frame, 0.95, window);
  let wall =
    Material(albedo, yellowRoom(s, s.uv.x) * window, gloss, vec3f(0.0));
  return
    embossed(
      s,
      wall,
      0.04 * peel + slat * grille - 2.0 * joint - 3.0 * window + 2.0 * frame,
      0.004,
    );
}

fn filterCeiling(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.625, 0.03, 366u);
  let near = 1.0 / (1.0 + s.far * s.far / 30.0);
  let mesh = fract(s.uv / 0.02) - 0.5;
  let pleat = mix(0.5, smoothstep(0.1, 0.4, abs(mesh.x)), near);
  let face =
    vec3f(0.5, 0.52, 0.52) * (0.7 + 0.3 * pleat) * (0.94 + 0.06 * tile.y);
  let bar = vec3f(0.55, 0.57, 0.58);
  let ceiling =
    Material(
      mix(bar, face, tile.x),
      lampGlow(s, lamps()),
      0.4 * (1.0 - tile.x),
      vec3f(0.0),
    );
  return embossed(s, ceiling, pleat * tile.x * near - 2.0 * tile.x, 0.004);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return cleanWall(s);
    }
    case FLOOR, OWNED: {
      return accessFloor(s);
    }
    case CEILING: {
      return filterCeiling(s);
    }
    case TRIM: {
      let brushed = valueNoise(vec2f(s.uv.x * 8.0, s.uv.y * 260.0), 367u);
      return polished(vec3f(0.5, 0.52, 0.54) * (0.85 + 0.2 * brushed), 0.6);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),cw={name:"Clean room",air:i7(i6(0xd3e0e4)),pillar:.02,dark:0,sound:{footing:"hollow",hum:120,air:.7,echo:.5},decor:[{thing:"lab-bench",perRoom:.6},{thing:"locker",perRoom:.5},{thing:"vent",perRoom:1},{thing:"bin",perRoom:.3},{thing:"door",perRoom:.4},{thing:"mirror",perRoom:.15}],shader:{...cb,needs:[...cb.needs,fm("clean-room",{lamp:[1.25,1.36,1.42],ambient:[.03,.034,.036],grid:3,panel:[.12,1.35],stutter:0,visibility:34,exposure:1,glow:.2,fringe:.003,vignette:.22,noise:.008})]}},cx=tO("cube/entities/theme/laboratory/cold-room/config/cold-room",`
/// Hoar frost, 0 to 1: needles thick where \`much\` is high.
fn frost(uv: vec2f, much: f32, salt: u32) -> f32 {
  let needles = worley(uv * 26.0, salt);
  let fern = fbm(uv * 7.0, salt + 1u, 4);
  return smoothstep(0.75, 0.35, needles.x + 1.1 * (1.0 - much) - 0.5 * fern);
}

fn treadPlate(s: Surf) -> Material {
  // Raised bars in a herringbone, one every eight centimetres.
  let cell = s.uv / 0.08;
  let at = fract(cell) - 0.5;
  let turned = f32((i32(floor(cell.x)) + i32(floor(cell.y))) & 1);
  let bar =
    mix(
      vec2f(at.x + at.y, at.x - at.y),
      vec2f(at.x - at.y, at.x + at.y),
      turned,
    );
  let raised =
    (1.0 - smoothstep(0.08, 0.14, abs(bar.x))) * (1.0 - smoothstep(
      0.4,
      0.5,
      abs(bar.y),
    ));
  let near = 1.0 / (1.0 + s.far * s.far / 50.0);
  let ice = smoothstep(0.42, 0.6, fbm(s.uv * 0.8, s.seed ^ 0x81u, 4));
  let rime = frost(s.uv, 0.25 + 0.6 * ice, 381u);
  let steel =
    vec3f(0.3, 0.33, 0.36) * (0.8 + 0.3 * valueNoise(s.uv * 120.0, 382u));
  let albedo =
    mix(
      mix(steel, vec3f(0.36, 0.46, 0.52), 0.6 * ice),
      vec3f(0.7, 0.76, 0.8),
      rime,
    );
  let plate = polished(albedo, mix(0.6, 0.92, ice) * (1.0 - 0.9 * rime));
  return
    embossed(s, plate, raised * near * (1.0 - 0.7 * ice) + 0.4 * rime, 0.004);
}

fn coldPanel(s: Surf) -> Material {
  let h = s.p.y;
  let across = fract(s.uv.x / 1.0);
  let rib = abs(fract(s.uv.x / 0.125) - 0.5);
  let ribbed = smoothstep(0.3, 0.42, rib);
  let joint = 1.0 - smoothstep(0.006, 0.012, min(across, 1.0 - across));
  let creep =
    1.0
      - h / ROOM.y
      + 0.5 * fbm(vec2f(s.uv.x * 0.7, 0.0), s.seed ^ 0x82u, 3)
      - 0.35;
  let rime = frost(s.uv, clamp(creep + 0.5 * joint, 0.0, 1.0), 383u);
  let icicle =
    smoothstep(
      0.5,
      0.9,
      fbm(vec2f(s.uv.x * 14.0, s.uv.y * 0.6), s.seed ^ 0x83u, 3),
    ) * smoothstep(1.2, ROOM.y, h);
  let enamel =
    vec3f(0.5, 0.55, 0.58) * (0.9 + 0.1 * ribbed) * (1.0 - 0.8 * joint);
  let albedo = mix(enamel, vec3f(0.72, 0.79, 0.84), max(rime, 0.7 * icicle));
  let sparkle = step(0.985, valueNoise(s.uv * 300.0, 384u)) * rime;
  let wall =
    Material(
      albedo,
      vec3f(0.0),
      mix(0.5, 0.1, rime) + 0.9 * sparkle + 0.4 * icicle,
      vec3f(0.0),
    );
  return
    embossed(s, wall, 0.6 * ribbed + 0.5 * rime + icicle - 2.0 * joint, 0.006);
}

fn rimedCeiling(s: Surf) -> Material {
  let tile = tiling(s.uv, 1.25, 0.012, 385u);
  let rime = frost(s.uv, 0.3 + 0.5 * fbm(s.uv * 0.6, s.seed ^ 0x84u, 3), 386u);
  let albedo =
    mix(vec3f(0.44, 0.49, 0.52) * tile.x, vec3f(0.7, 0.77, 0.82), rime);
  return
    embossed(
      s,
      glowing(albedo, lampGlow(s, lamps())),
      0.5 * rime + tile.x,
      0.004,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return coldPanel(s);
    }
    case FLOOR, OWNED: {
      return treadPlate(s);
    }
    case CEILING: {
      return rimedCeiling(s);
    }
    case TRIM: {
      let rime = frost(s.uv, 0.9 - s.p.y / ROOM.y, 387u);
      return
        polished(
          mix(vec3f(0.36, 0.39, 0.42), vec3f(0.72, 0.79, 0.84), rime),
          0.6 * (1.0 - rime),
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),cy={name:"Cold room",air:i7(i6(0x9ab6c6)),pillar:.02,dark:.15,sound:{footing:"metal",hum:50,air:.8,echo:.9},decor:[{thing:"crate",perRoom:1},{thing:"barrel",perRoom:.5},{thing:"tank",perRoom:.4},{thing:"locker",perRoom:.3},{thing:"pipe",perRoom:.8},{thing:"door",perRoom:.3}],shader:{...cx,needs:[...cx.needs,fm("cold-room",{lamp:[1.5,2,2.4],ambient:[.012,.02,.028],grid:2,panel:[.9,.14],stutter:.1,visibility:21,exposure:1,glow:.3,fringe:.004,vignette:.3,noise:.014})]}},ck=tO("cube/entities/theme/laboratory/small-world/lib/small-world",`
/// The word of the honeycomb cell whose middle is \`middle\`.
fn combHash(middle: vec2f, salt: u32) -> u32 {
  return cellHash(vec2i(round(middle * vec2f(2.0, 1.1547005))), salt);
}

/// A ball of radius \`radius\` seen from above, \`off\` from its middle: its
/// height there, 1 at the top and 0 from its rim outward.
fn dome(off: vec2f, radius: f32) -> f32 {
  return sqrt(max(1.0 - dot(off, off) / (radius * radius), 0.0));
}

/// Cells of a unit lattice grown until they meet: x is how far the point is
/// inside its cell, 0 on the line where two meet, y and z are the cell's own
/// two random numbers in [0, 1), and w is the distance to the cell's own point.
fn shards(p: vec2f, salt: u32) -> vec4f {
  let cell = vec2i(floor(p));
  var first = 8.0;
  var second = 8.0;
  var nearest = 0u;
  for (var dy = -1; dy <= 1; dy++) {
    for (var dx = -1; dx <= 1; dx++) {
      let other = cell + vec2i(dx, dy);
      let word = cellHash(other, salt);
      let point = vec2f(other) + vec2f(unitOf(word), unitOf(mix32(word)));
      let distance = length(point - p);
      if (distance < first) {
        second = first;
        first = distance;
        nearest = word;
      } else if (distance < second) {
        second = distance;
      }
    }
  }
  return
    vec4f(
      second - first,
      unitOf(mix32(nearest ^ 0xa5a5a5a5u)),
      unitOf(mix32(nearest ^ 0x3c3c3c3cu)),
      first,
    );
}
`,a1),cS=tO("cube/entities/theme/laboratory/crystal/config/crystal",`
const INNER_LIGHT = vec3f(0.25, 0.5, 0.9);

/// A wall's own sideways direction, so a facet can be tilted in its plane.
fn alongOf(s: Surf) -> vec3f {
  return vec3f(-s.normal.z, 0.0, s.normal.x);
}

fn facets(s: Surf) -> Material {
  // Tall shards: the lattice is stretched upward.
  let shard = shards(s.uv * vec2f(2.6, 1.1), 431u);
  let seam = 1.0 - smoothstep(0.0, 0.05, shard.x);
  let tilt =
    alongOf(s) * (shard.y - 0.5) * 1.3 + vec3f(0.0, 1.0, 0.0)
      * (shard.z - 0.5)
      * 0.9;
  let veil = fbm(s.uv * 3.0 + shard.y * 30.0, 432u, 4);
  let flaw =
    1.0 - smoothstep(
      0.0,
      0.03,
      abs(fbm(s.uv * 2.0 + shard.z * 9.0, 433u, 3) - 0.5),
    );
  let body =
    mix(
      vec3f(0.12, 0.2, 0.3),
      vec3f(0.5, 0.62, 0.7),
      veil,
    ) * (0.6 + 0.6 * shard.z);
  let albedo =
    mix(
      body,
      vec3f(0.75, 0.85, 0.95),
      max(0.8 * seam, 0.5 * flaw * step(0.5, shard.y)),
    );
  // Light caught inside a shard and let out again along its seams.
  let inner = INNER_LIGHT * 0.12 * (seam + 0.6 * veil * veil);
  return Material(albedo, inner, 0.92 - 0.5 * seam, tilt);
}

fn salt(s: Surf) -> Material {
  // Hopper crystals: squares grown in steps toward their middles.
  let cell = s.uv / 0.9;
  let at = abs(fract(cell) - 0.5) * 2.0;
  let ring = max(at.x, at.y);
  let own = unitOf(cellHash(vec2i(floor(cell)), 434u));
  let steps = 3.0 + floor(own * 4.0);
  let terrace = floor(ring * steps) / steps;
  let riser = 1.0 - smoothstep(0.0, 0.05, fract(ring * steps));
  let cloud = fbm(s.uv * 2.5, 435u, 4);
  let halite =
    mix(vec3f(0.16, 0.2, 0.27), vec3f(0.3, 0.22, 0.24), own)
      * (0.55 + 0.5 * cloud)
      * (0.6 + 0.4 * terrace);
  let albedo = mix(halite, vec3f(0.55, 0.6, 0.66), 0.7 * riser);
  let slab = Material(albedo, INNER_LIGHT * 0.05 * riser, 0.88, vec3f(0.0));
  return embossed(s, slab, terrace - 0.2 * riser, 0.06);
}

fn geode(s: Surf) -> Material {
  let tooth = shards(s.uv * 4.5, 436u);
  let seam = 1.0 - smoothstep(0.0, 0.06, tooth.x);
  let amethyst =
    mix(
      vec3f(0.1, 0.03, 0.2),
      vec3f(0.45, 0.2, 0.62),
      tooth.y,
    ) * (1.3 - tooth.w);
  let glint = pow(tooth.z, 6.0);
  let m =
    Material(
      mix(amethyst, vec3f(0.6, 0.5, 0.75), seam),
      lampGlow(s, lamps()) + vec3f(0.3, 0.1, 0.6) * 0.25 * glint,
      0.85,
      vec3f(0.0),
    );
  return embossed(s, m, 1.0 - tooth.w, 0.1);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return facets(s);
    }
    case FLOOR, OWNED: {
      return salt(s);
    }
    case CEILING: {
      return geode(s);
    }
    case TRIM: {
      let veil = fbm(s.uv * vec2f(8.0, 1.5), 437u, 4);
      return
        Material(
          mix(vec3f(0.3, 0.4, 0.5), vec3f(0.7, 0.8, 0.9), veil),
          INNER_LIGHT * 0.2 * veil,
          0.95,
          vec3f(0.0),
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,a1,ck,fs,fp,ff),cM={name:"Crystal",air:i7(i6(328720)),pillar:.026,dark:.1,sound:{footing:"tile",hum:0,air:.05,echo:3.2},decor:[{thing:"monolith",perRoom:.5},{thing:"mirror",perRoom:.5},{thing:"crate",perRoom:.15},{thing:"staircase",perRoom:.1}],shader:{...cS,needs:[...cS.needs,fm("crystal",{lamp:[1,1.06,1.35],ambient:[.008,.01,.02],grid:3,panel:[.16,.16],stutter:0,visibility:45,exposure:1.1,glow:.35,fringe:.012,vignette:.45,noise:.012})]}},cL=tO("cube/entities/theme/laboratory/darkroom/config/darkroom",`
fn wetConcrete(s: Surf) -> Material {
  let grit = fbm(s.uv * 12.0, 391u, 4);
  let dip = fbm(s.uv * 0.7, s.seed ^ 0x91u, 4);
  let pool = smoothstep(0.44, 0.52, dip);
  let duck = tiling(s.uv, 0.5, 0.03, 392u).x;
  let albedo = vec3f(0.1, 0.1, 0.1) * (0.7 + 0.6 * grit) * (1.0 - 0.6 * pool);
  let slab = polished(albedo, mix(0.45, 0.98, pool));
  return embossed(s, slab, (1.0 - pool) * (grit + 0.6 * duck), 0.003);
}

/// A print on the line: paper with a picture half arrived — a horizon, and
/// something standing on it.
fn print(at: vec2f, word: u32) -> f32 {
  let horizon = 0.35 + 0.3 * unitOf(word);
  let figure =
    (1.0 - smoothstep(0.03, 0.05, abs(at.x - 0.3 - 0.4 * unitOf(mix32(word)))))
      * step(horizon, at.y)
      * step(at.y, horizon + 0.3);
  let ground = step(at.y, horizon) * (0.3 + 0.3 * fbm(at * 9.0, word, 3));
  let sky = step(horizon, at.y) * (0.75 + 0.2 * fbm(at * 4.0, word + 7u, 3));
  let developed = fbm(at * 2.0, word + 3u, 2);
  return
    mix(
      0.85,
      (ground + sky) * (1.0 - 0.8 * figure),
      smoothstep(0.2, 0.7, developed),
    );
}

fn blackout(s: Surf) -> Material {
  let h = s.p.y;
  // Heavy cloth in folds, deeper toward the hem.
  let sway = 0.5 * valueNoise(vec2f(s.uv.x * 1.3, h * 0.6), s.seed ^ 0x92u);
  let fold = sin((s.uv.x + 0.07 * sway * (1.2 - h / ROOM.y)) * 26.0);
  let nap = valueNoise(s.uv * vec2f(500.0, 160.0), 393u);
  let velvet =
    vec3f(0.035, 0.03, 0.03) * (0.6 + 0.5 * nap) * (0.75 + 0.25 * fold);
  let rail = band(h, ROOM.y - 0.08, 0.03);
  // Prints hang from a line at eye height, one every forty centimetres.
  let slot = floor(s.uv.x / 0.4);
  let word = hashOf(bitcast<u32>(i32(slot)), s.seed ^ 0x93u);
  let hung = step(0.45, unitOf(word));
  let at = vec2f((fract(s.uv.x / 0.4) - 0.15) / 0.7, (h - 1.22) / 0.36);
  let inside =
    hung
      * step(0.0, at.x)
      * step(at.x, 1.0)
      * step(0.0, at.y)
      * step(at.y, 1.0);
  let sag = 1.62 - 0.02 * sin(fract(s.uv.x / 0.4) * 3.14159);
  let line = band(h, sag, 0.004);
  let peg = hung * band(fract(s.uv.x / 0.4), 0.5, 0.05) * band(h, 1.59, 0.05);
  var albedo = mix(velvet, vec3f(0.3, 0.3, 0.3), rail);
  albedo = mix(albedo, vec3f(0.5, 0.48, 0.42) * print(at, word), inside);
  albedo = mix(albedo, vec3f(0.4, 0.3, 0.15), max(line, peg));
  let wall = polished(albedo, 0.5 * rail + 0.35 * inside);
  return
    embossed(
      s,
      wall,
      (fold + 0.1 * nap) * (1.0 - inside) + 3.0 * peg,
      0.02 * (1.0 - inside) + 0.002,
    );
}

fn blackCeiling(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.625, 0.01, 394u);
  let board =
    vec3f(0.035, 0.032, 0.03)
      * (0.7 + 0.5 * fbm(s.uv * 30.0, 395u, 3))
      * tile.x;
  // A safelight is a small glass box: bright at its bulb, dull at its rim.
  let off = repeated(s.p.xz, ROOM.xz / 2.0);
  let bulb = exp(-dot(off, off) * 90.0);
  return
    embossed(
      s,
      glowing(board, lampGlow(s, lamps()) * (0.35 + 2.0 * bulb)),
      tile.x,
      0.004,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return blackout(s);
    }
    case FLOOR, OWNED: {
      return wetConcrete(s);
    }
    case CEILING: {
      return blackCeiling(s);
    }
    case TRIM: {
      return polished(vec3f(0.03, 0.03, 0.03), 0.5);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),cR={name:"Darkroom",air:i7(i6(655360)),pillar:.018,dark:.2,sound:{footing:"wet",hum:0,air:.1,echo:.4},decor:[{thing:"lab-bench",perRoom:.8},{thing:"tank",perRoom:.5},{thing:"curtain",perRoom:.6},{thing:"wall-clock",perRoom:.3},{thing:"bin",perRoom:.3},{thing:"drain",perRoom:.4}],shader:{...cL,needs:[...cL.needs,fm("darkroom",{lamp:[2.6,.1,.03],ambient:[.004,5e-4,3e-4],grid:2,panel:[.3,.22],stutter:0,visibility:30,exposure:1.5,glow:.4,fringe:.007,vignette:.5,noise:.03})]}},cO=tO("cube/entities/theme/laboratory/figure/config/figure",`
/// Organelles as a diagram has them: beans with a zigzag inside, a nucleus
/// with its nucleolus, stacks of flattened sacs, dots.
fn organelles(s: Surf) -> Material {
  let site = shards(s.uv * 0.55, 491u);
  let cytoplasm = vec3f(0.62, 0.72, 0.5);
  var albedo = cytoplasm;
  let kind = site.y;
  let turn = site.z * 6.2832;
  let lay = vec2f(cos(turn), sin(turn));
  let along = dot(s.uv, lay);
  let squash =
    site.w * (1.0 + 0.8 * abs(sin(atan2(lay.y, lay.x) * 2.0 + site.z)));
  if (kind < 0.4) {
    // A mitochondrion: orange, its inner folds drawn as a zigzag.
    let bean = 1.0 - smoothstep(0.26, 0.262, squash);
    let fold =
      step(abs(fract(along * 6.0) - 0.5), 0.12) * (1.0 - smoothstep(
        0.17,
        0.172,
        squash,
      ));
    albedo =
      mix(
        albedo,
        mix(vec3f(0.78, 0.42, 0.14), vec3f(0.45, 0.16, 0.06), fold),
        bean,
      );
  } else if (kind < 0.6) {
    // A nucleus: violet, with one dark spot.
    let ball = 1.0 - smoothstep(0.36, 0.362, site.w);
    let spot = 1.0 - smoothstep(0.1, 0.102, site.w);
    albedo =
      mix(
        albedo,
        mix(vec3f(0.5, 0.4, 0.72), vec3f(0.22, 0.14, 0.4), spot),
        ball,
      );
  } else if (kind < 0.82) {
    // Stacked sacs: blue bars, shorter toward the edges of the stack.
    let stack =
      (1.0 - smoothstep(0.3, 0.302, site.w)) * step(
        abs(fract(along * 9.0) - 0.5),
        0.2,
      );
    albedo = mix(albedo, vec3f(0.3, 0.48, 0.72), stack);
  }
  let dotted = worley(s.uv * 9.0, 492u);
  let ribosome =
    step(0.75, dotted.y)
      * (1.0 - smoothstep(0.1, 0.11, dotted.x))
      * step(0.4, site.w);
  albedo = mix(albedo, vec3f(0.3, 0.2, 0.15), ribosome);
  return matte(albedo);
}

/// The membrane as two rows of lollipops, heads out and tails in, and above
/// it the callouts: a rule, and a box with lines for words.
fn bilayer(s: Surf) -> Material {
  let h = s.p.y;
  let across = fract(s.uv.x / 0.14) - 0.5;
  let mid = 0.85;
  let side = sign(h - mid);
  let off = abs(h - mid);
  let head =
    1.0 - smoothstep(0.052, 0.054, length(vec2f(across * 0.14, off - 0.42)));
  let tail =
    step(abs(abs(across) - 0.14), 0.035) * step(0.04, off) * step(off, 0.37);
  let ground =
    mix(vec3f(0.74, 0.8, 0.86), vec3f(0.62, 0.72, 0.5), step(side, 0.0));
  var albedo = mix(ground, vec3f(0.9, 0.84, 0.6), step(off, 0.47));
  albedo = mix(albedo, vec3f(0.35, 0.3, 0.25), tail);
  albedo =
    mix(
      albedo,
      mix(vec3f(0.82, 0.3, 0.26), vec3f(0.3, 0.42, 0.75), step(side, 0.0)),
      head,
    );
  // One callout a bay: a leader from the membrane up to a box of blank lines.
  let bay = fract(s.uv.x / 1.25) * 1.25;
  let word = hashOf(bitcast<u32>(i32(floor(s.uv.x / 1.25))), s.seed ^ 0x49u);
  let called = step(0.35, unitOf(word));
  let leader =
    called
      * step(abs(bay - 0.3), 0.004)
      * step(1.32, h)
      * step(h, 1.7)
      * step(0.5, fract(h * 25.0));
  let box = vec2f(abs(bay - 0.62) - 0.34, abs(h - 1.85) - 0.14);
  let card = called * (1.0 - smoothstep(0.0, 0.003, max(box.x, box.y)));
  let written =
    card
      * step(box.x, -0.04)
      * step(abs(fract((h - 1.71) / 0.07) - 0.5), 0.12)
      * step(fract(bay * 3.1 + unitOf(mix32(word))), 0.8 - 0.3 * step(1.85, h));
  albedo = mix(albedo, vec3f(0.88, 0.86, 0.8), card);
  albedo = mix(albedo, vec3f(0.2, 0.18, 0.2), max(leader, written));
  return matte(albedo);
}

fn pageCeiling(s: Surf) -> Material {
  // Registration crosses, as on a printer's sheet.
  let at = repeated(s.uv, vec2f(1.25));
  let mark =
    step(min(abs(at.x), abs(at.y)), 0.006) * step(
      max(abs(at.x), abs(at.y)),
      0.09,
    );
  return
    glowing(mix(vec3f(0.8, 0.78, 0.7), vec3f(0.2), mark), lampGlow(s, lamps()));
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return bilayer(s);
    }
    case FLOOR, OWNED: {
      return organelles(s);
    }
    case CEILING: {
      return pageCeiling(s);
    }
    case TRIM: {
      return matte(vec3f(0.5, 0.4, 0.72));
    }
    default: {
      let m = stuff(s);
      return Material(m.albedo, m.emission, 0.0, vec3f(0.0));
    }
  }
}

fn lamps() -> Lamps {
  return
    Lamps(
      vec3f(0.8, 0.8, 0.76),
      vec3f(0.3, 0.3, 0.29),
      2,
      vec2f(0.5, 0.5),
      0.0,
    );
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  return haze(roomLight(s, m, lamps()), s, AIR, 90.0);
}

/// The ink where the picture at \`uv\` has an edge: where what is seen
/// steps away in depth, or changes colour.
fn inkAt(l: Lens, uv: vec2f) -> f32 {
  let px = 1.2 / l.size;
  let here = sceneAt(uv);
  let east = sceneAt(uv + vec2f(px.x, 0.0));
  let west = sceneAt(uv - vec2f(px.x, 0.0));
  let south = sceneAt(uv + vec2f(0.0, px.y));
  let north = sceneAt(uv - vec2f(0.0, px.y));
  let step_ =
    abs(east.a + west.a - 2.0 * here.a) + abs(south.a + north.a - 2.0 * here.a);
  let hue = length(east.rgb - west.rgb) + length(south.rgb - north.rgb);
  return
    max(
      smoothstep(0.01, 0.04, step_ / max(here.a, 0.3)),
      smoothstep(0.1, 0.3, hue),
    );
}

/// The frame as a printed figure: each colour flattened to a few tints,
/// shade as hatching, an ink line round everything, on paper.
fn themeLens(l: Lens) -> vec3f {
  let seen = tonemap(sceneAt(l.uv).rgb * 1.1);
  let light = luma(seen);
  let tint = seen / max(light, 0.05);
  let tinted = tint * (floor(light * 5.0 + 0.5) / 5.0);
  let hatch =
    step(light, 0.42) * step(0.6, fract((l.pixel.x + l.pixel.y) / 6.0));
  let tooth =
    valueNoise(l.pixel / 2.5, 493u) * 0.05 + fbm(l.uv * 4.0, 494u, 3) * 0.06;
  let paper = vec3f(0.95, 0.92, 0.84) * (0.92 + tooth);
  let printed =
    paper * mix(tinted * 1.15, vec3f(0.35, 0.33, 0.4), 0.45 * hatch);
  let ink = inkAt(l, l.uv);
  return mix(printed, vec3f(0.07, 0.06, 0.1), ink * 0.92) * vignette(l, 0.12);
}
`,a1,ck,fs,fp,ff,fn,fc,fo),cA=i7(i6(0xe9e2cf)),cE=tO("cube/entities/theme/laboratory/fluorescence/config/fluorescence",`
const DAPI = vec3f(0.08, 0.25, 1.0);
const ACTIN = vec3f(0.1, 1.0, 0.25);
const MITO = vec3f(1.0, 0.12, 0.08);

/// A thin bright thread wherever \`field\` crosses a half.
fn thread(field: f32, width: f32) -> f32 {
  return 1.0 - smoothstep(0.0, width, abs(field - 0.5));
}

/// Cells spread flat on glass: a lit outline, a speckled nucleus, fibres
/// pulled taut across each cell its own way, engines crowding the nucleus.
fn monolayer(s: Surf) -> Material {
  let cell = shards(s.uv * 0.9, 471u);
  let turn = cell.y * 6.2832;
  let lay = dot(s.uv, vec2f(cos(turn), sin(turn)));
  let near = 1.0 / (1.0 + s.far * s.far / 80.0);
  let fibre =
    pow(
      0.5 + 0.5 * sin(lay * 70.0 + 3.0 * fbm(s.uv * 2.0, 472u, 2)),
      6.0,
    ) * near + 0.15 * (1.0 - near);
  let edge = 1.0 - smoothstep(0.0, 0.05, cell.x);
  let chromatin = fbm(s.uv * 16.0, 473u, 3);
  let nucleus =
    (1.0 - smoothstep(0.13, 0.16, cell.w)) * (0.35 + 1.3
      * chromatin
      * chromatin);
  let around =
    smoothstep(0.14, 0.2, cell.w) * (1.0 - smoothstep(0.3, 0.5, cell.w));
  let worm = thread(fbm(s.uv * 5.0, 474u, 3), 0.02) * around;
  let glow =
    DAPI * 1.6 * nucleus
      + ACTIN * (0.9 * edge + 0.35 * fibre * (1.0 - nucleus))
      + MITO * 1.4 * worm;
  return Material(vec3f(0.004), glow, 0.55, vec3f(0.0));
}

/// Nerve cells: bodies with their nuclei, and green processes wandering
/// between them, beaded red where two touch.
fn neurons(s: Surf) -> Material {
  let body = worley(s.uv * 0.8, 475u);
  let soma =
    1.0 - smoothstep(0.1, 0.2, body.x + 0.05 * fbm(s.uv * 6.0, 476u, 2));
  let nucleus = 1.0 - smoothstep(0.05, 0.08, body.x);
  let wander = fbm(s.uv * 0.9, 477u, 4);
  let process =
    thread(wander, 0.012) + 0.6 * thread(fbm(s.uv * 2.1 + 9.0, 478u, 3), 0.014);
  let bead = step(0.8, valueNoise(s.uv * 40.0, 479u)) * thread(wander, 0.03);
  let pulse = 0.75 + 0.25 * sin(s.time * 0.9 + wander * 30.0);
  let glow =
    ACTIN * (0.8 * process * pulse + 0.35 * soma)
      + DAPI * 1.5 * nucleus
      + MITO * 1.6 * bead;
  return Material(vec3f(0.004), glow, 0.2, vec3f(0.0));
}

/// Overhead, what drifted out of focus: soft blue discs.
fn outOfFocus(s: Surf) -> Material {
  let blur = worley(s.uv * 0.7, 480u);
  let disc = step(0.4, blur.y) * (1.0 - smoothstep(0.1, 0.3, blur.x)) * 0.35;
  let speck = step(0.992, valueNoise(s.uv * 60.0, 481u));
  return
    glowing(
      vec3f(0.004),
      lampGlow(s, lamps()) + DAPI * disc + ACTIN * 0.8 * speck,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return neurons(s);
    }
    case FLOOR, OWNED: {
      return monolayer(s);
    }
    case CEILING: {
      return outOfFocus(s);
    }
    case TRIM: {
      let strand =
        thread(fbm(vec2f(s.uv.x * 14.0, s.uv.y * 1.2), 482u, 3), 0.06);
      return glowing(vec3f(0.004), MITO * 0.9 * strand);
    }
    default: {
      let m = stuff(s);
      return
        Material(
          m.albedo,
          m.emission + ACTIN * 0.12 * luma(m.albedo),
          m.gloss,
          m.relief,
        );
    }
  }
}
`,a1,ck,fs,fp,fc,ff),cT={name:"Fluorescence",air:i7(i6(2)),pillar:.02,dark:.3,sound:{footing:"soft",hum:0,air:.05,echo:2.6},decor:[{thing:"balloon",perRoom:.2},{thing:"mannequin",perRoom:.1},{thing:"floor-lamp",perRoom:.2},{thing:"tank",perRoom:.2}],shader:{...cE,needs:[...cE.needs,fm("fluorescence",{lamp:[.22,.1,.9],ambient:[0,0,.002],grid:2,panel:[.2,.2],stutter:0,visibility:45,exposure:1.2,glow:.5,fringe:.004,vignette:.4,noise:.02})]}},cI=tO("cube/entities/theme/laboratory/gel/config/gel",`
const ULTRAVIOLET = vec3f(0.16, 0.03, 0.6);
const STAIN = vec3f(1.0, 0.3, 0.1);

fn transilluminator(s: Surf) -> Material {
  // Tubes forty centimetres apart under frosted glass.
  let tube = 1.0 - abs(fract(s.uv.y / 0.4) - 0.5) * 2.0;
  let frost = fbm(s.uv * 30.0, 481u, 3);
  let scratch =
    1.0 - smoothstep(
      0.0,
      0.006,
      abs(fbm(s.uv * vec2f(1.2, 14.0), 482u, 3) - 0.5),
    );
  let frame = 1.0 - tiling(s.uv, 1.25, 0.03, 483u).x;
  let glow =
    ULTRAVIOLET
      * (0.25 + 1.1 * tube * tube * tube)
      * (0.8 + 0.3 * frost)
      * (1.0 - frame);
  let m =
    Material(
      mix(vec3f(0.02, 0.01, 0.05), vec3f(0.01), frame),
      glow * (1.0 + 2.0 * scratch),
      0.8 - 0.4 * scratch,
      vec3f(0.0),
    );
  return embossed(s, m, frame - scratch, 0.002);
}

fn lanes(s: Surf) -> Material {
  let h = s.p.y;
  let lane = s.uv.x / 0.3;
  let across = fract(lane) - 0.5;
  let word = hashOf(bitcast<u32>(i32(floor(lane))), s.seed ^ 0x48u);
  let inLane = 1.0 - smoothstep(0.3, 0.36, abs(across));
  // Every fifth lane is the ladder: a band at every rung.
  let ladder = (bitcast<u32>(i32(floor(lane))) % 5u) == 0u;
  let run = (h + 0.1 * across * across) / 0.075;
  let rung = hashOf(bitcast<u32>(i32(floor(run))), word);
  let stopped =
    select(step(0.72, unitOf(rung)), f32(u32(floor(run)) % 2u), ladder);
  let thick = 0.12 + 0.3 * unitOf(mix32(rung));
  let within = step(0.3, h) * step(h, 1.95);
  let stripe =
    stopped
      * within
      * inLane
      * (1.0 - smoothstep(thick * 0.5, thick, abs(fract(run) - 0.5)));
  let smear =
    within
      * inLane
      * 0.06
      * unitOf(word)
      * (0.5 + fbm(vec2f(lane * 3.0, h * 2.0), 484u, 2));
  let well = (1.0 - smoothstep(0.3, 0.32, abs(across))) * band(h, 2.06, 0.07);
  let cloud = fbm(s.uv * 2.0, 485u, 3);
  let slab = vec3f(0.03, 0.015, 0.07) * (0.6 + 0.8 * cloud);
  let glow =
    STAIN * (2.2
      * stripe
      * (0.4 + 0.6 * unitOf(mix32(rung ^ 0x9u))) + smear) + ULTRAVIOLET
      * (0.05 + 0.2 * exp(-h * 2.0))
      * (0.6 + 0.6 * cloud);
  let wall =
    Material(
      mix(slab, vec3f(0.004), well),
      glow * (1.0 - well),
      0.7,
      vec3f(0.0),
    );
  return embossed(s, wall, cloud - 4.0 * well, 0.004);
}

fn hood(s: Surf) -> Material {
  let rib = tiling(s.uv, 0.625, 0.02, 486u);
  let black =
    vec3f(0.02, 0.016, 0.03) * (0.6 + 0.5 * fbm(s.uv * 24.0, 487u, 3)) * rib.x;
  return embossed(s, glowing(black, lampGlow(s, lamps())), rib.x, 0.006);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return lanes(s);
    }
    case FLOOR, OWNED: {
      return transilluminator(s);
    }
    case CEILING: {
      return hood(s);
    }
    case TRIM: {
      // The orange shield a reader looks through.
      return Material(vec3f(0.3, 0.1, 0.01), STAIN * 0.12, 0.9, vec3f(0.0));
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),cz={name:"Gel",air:i7(i6(327696)),pillar:.02,dark:.15,sound:{footing:"tile",hum:150,air:.1,echo:.8},decor:[{thing:"lab-bench",perRoom:.4},{thing:"tank",perRoom:.4},{thing:"bin",perRoom:.2},{thing:"socket",perRoom:.5},{thing:"cable-reel",perRoom:.15}],shader:{...cI,needs:[...cI.needs,fm("gel",{lamp:[.35,.12,1.1],ambient:[.004,.001,.012],grid:2,panel:[.08,1.5],stutter:.12,visibility:40,exposure:1.15,glow:.45,fringe:.006,vignette:.45,noise:.02})]}},c_=tO("cube/entities/theme/laboratory/incubator/config/incubator",`
/// A material that is only a temperature: 0 the coldest thing in the frame,
/// 1 the hottest.
fn warm(heat: f32) -> Material {
  return matte(vec3f(clamp(heat, 0.0, 1.0)));
}

/// 1 inside an ellipse of half-axes \`size\` about \`middle\`, soft-edged as
/// warmth is.
fn blot(at: vec2f, middle: vec2f, size: vec2f) -> f32 {
  return 1.0 - smoothstep(0.6, 1.1, length((at - middle) / size));
}

/// The warmth a walker left on the floor: one walks each row of rooms from
/// west to east, a pace every seventy centimetres, and a print fades in
/// twenty seconds.
fn footprints(s: Surf) -> f32 {
  let speed = 0.9;
  let lap = 16.0;
  let path = 2.5 + 0.9 * sin(s.uv.x * 0.45) + 0.3 * sin(s.uv.x * 1.7);
  let pace = floor(s.uv.x / 0.7);
  let foot = f32(i32(pace) & 1) * 2.0 - 1.0;
  let at = vec2f(fract(s.uv.x / 0.7) * 0.7, s.p.z - path - 0.11 * foot);
  let sole =
    blot(at, vec2f(0.4, 0.0), vec2f(0.1, 0.05)) + blot(
      at,
      vec2f(0.24, 0.0),
      vec2f(0.055, 0.04),
    );
  let walker = fract(s.time * speed / lap) * lap;
  let behind = fract((walker - (pace + 0.5) * 0.7) / lap) * lap;
  return clamp(sole, 0.0, 1.0) * exp(-behind / (speed * 20.0));
}

fn warmFloor(s: Surf) -> Material {
  let slab = 0.2 + 0.1 * fbm(s.uv * 0.6, 501u, 3);
  let joist = 0.04 * (1.0 - smoothstep(0.02, 0.06, abs(spaced(s.uv.y, 0.6))));
  return warm(slab - joist + 0.6 * footprints(s));
}

/// A hand laid flat on the wall and taken away.
fn handprint(at: vec2f) -> f32 {
  var hand = blot(at, vec2f(0.0, 0.0), vec2f(0.05, 0.055));
  for (var finger = 0; finger < 4; finger++) {
    let x = (f32(finger) - 1.5) * 0.026;
    hand +=
      blot(
        at,
        vec2f(x, 0.095 - 0.012 * abs(f32(finger) - 1.6)),
        vec2f(0.011, 0.045),
      );
  }
  hand += blot(at, vec2f(-0.065, 0.02), vec2f(0.014, 0.035));
  return clamp(hand, 0.0, 1.0);
}

fn coiledWall(s: Surf) -> Material {
  let h = s.p.y;
  let plasterHeat =
    0.24 + 0.08 * fbm(s.uv * 1.3, s.seed ^ 0x50u, 3) + 0.05 * h / ROOM.y;
  // Hot water goes in at the top run and comes back cooler along the bottom.
  let run = (h - 0.25) / 0.22;
  let coil =
    step(0.0, run) * step(run, 6.0) * exp(-pow((fract(run) - 0.5) * 9.0, 2.0));
  let spent = 0.45 + 0.4 * clamp(run / 6.0, 0.0, 1.0);
  let stud = 0.05 * exp(-pow((fract(s.uv.x / 0.6) - 0.5) * 22.0, 2.0));
  let bay = floor(s.uv.x / 1.25);
  let word = hashOf(bitcast<u32>(i32(bay)), s.seed ^ 0x51u);
  let age = fract(s.time / 90.0 + unitOf(word));
  let touched =
    step(0.7, unitOf(mix32(word)))
      * handprint(
        vec2f(fract(s.uv.x / 1.25) * 1.25 - 0.3 - 0.6 * unitOf(word), h - 1.3),
      )
      * (1.0 - age);
  return warm(plasterHeat + coil * spent * 0.5 - stud + 0.55 * touched);
}

fn warmCeiling(s: Surf) -> Material {
  let duct =
    0.25
      * exp(-pow((fract(s.uv.x / 2.5) - 0.5) * 9.0, 2.0))
      * (0.7 + 0.3 * sin(s.uv.y * 3.0 - s.time * 1.5));
  let m = warm(0.3 + 0.06 * fbm(s.uv * 0.9, 502u, 3) + duct);
  return glowing(m.albedo, lampGlow(s, lamps()));
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return coiledWall(s);
    }
    case FLOOR, OWNED: {
      return warmFloor(s);
    }
    case CEILING: {
      return warmCeiling(s);
    }
    case TRIM: {
      return warm(0.2);
    }
    case METAL, GLASS, PLATE: {
      return warm(0.12 + 0.5 * s.paint.r);
    }
    case SCREEN, SKIN: {
      return warm(0.85);
    }
    default: {
      let m = stuff(s);
      return warm(0.22 + 0.25 * luma(m.albedo) + luma(m.emission));
    }
  }
}

fn lamps() -> Lamps {
  return Lamps(vec3f(0.14), vec3f(0.0), 2, vec2f(1.2, 0.2), 0.0);
}

/// Heat, not light: a thing is as bright as it is warm, a little warmer
/// under a working lamp and a little cooler in a corner, and the air between
/// is as warm as the room.
fn themeLight(s: Surf, m: Material) -> vec3f {
  let reach = lampReach(s, s.normal, 0.0, lamps());
  let heat =
    m.albedo.r + 0.07 * reach.z - 0.06 * (1.0 - cornerShade(s)) + m.emission.r;
  return haze(vec3f(heat), s, vec3f(0.27), 60.0);
}

/// The iron palette of a thermal camera: black through indigo, magenta,
/// orange and yellow to white as \`heat\` goes 0 to 1.
fn iron(heat: f32) -> vec3f {
  let t = clamp(heat, 0.0, 1.0);
  var colour =
    mix(
      vec3f(0.0, 0.0, 0.03),
      vec3f(0.12, 0.0, 0.42),
      smoothstep(0.0, 0.22, t),
    );
  colour = mix(colour, vec3f(0.7, 0.05, 0.45), smoothstep(0.22, 0.45, t));
  colour = mix(colour, vec3f(1.0, 0.5, 0.04), smoothstep(0.45, 0.68, t));
  colour = mix(colour, vec3f(1.0, 0.92, 0.3), smoothstep(0.68, 0.88, t));
  return mix(colour, vec3f(1.0), smoothstep(0.88, 1.0, t));
}

/// The frame as a thermal camera shows it: few pixels, heat as the iron
/// palette, a crosshair, and the palette down the side as the key.
fn themeLens(l: Lens) -> vec3f {
  let cells = vec2f(320.0, 320.0 * l.size.y / l.size.x);
  let coarse = (floor(l.uv * cells) + 0.5) / cells;
  let heat =
    (sceneAt(coarse).r + 0.5 * glowAt(coarse).r - 0.21) * 1.9 + grain(
      l,
    ) * 0.012;
  var colour = iron(heat);
  let aspect = l.size.x / l.size.y;
  let off = (l.uv - 0.5) * vec2f(aspect, 1.0);
  let reticle =
    step(abs(length(off) - 0.03), 0.0015) + step(
      min(abs(off.x), abs(off.y)),
      0.0012,
    )
      * step(0.045, max(abs(off.x), abs(off.y)))
      * step(max(abs(off.x), abs(off.y)), 0.075);
  let key = step(abs(l.uv.x - 0.965), 0.008) * step(abs(l.uv.y - 0.5), 0.3);
  colour = mix(colour, iron(1.0 - (l.uv.y - 0.2) / 0.6), key);
  let rim =
    step(abs(l.uv.x - 0.965), 0.0095) * step(abs(l.uv.y - 0.5), 0.303) - key;
  return
    mix(colour, vec3f(0.9), clamp(reticle + rim, 0.0, 1.0)) * vignette(l, 0.2);
}
`,a1,fs,fp,ff,fn,fc,fo),cN=i7(i6(2623536)),cD=tO("cube/entities/theme/laboratory/membrane/config/membrane",`
/// Lipid heads \`pitch\` metres apart: x a head's height at the point, y the
/// head's own number. Each bobs to its own beat.
fn heads(s: Surf, pitch: f32, salt: u32) -> vec2f {
  let comb = honeycomb(s.uv / pitch);
  let own = unitOf(combHash(comb.zw, salt));
  let bob = 0.85 + 0.15 * sin(s.time * (0.6 + own) + own * 40.0);
  return vec2f(dome(comb.xy, 0.5) * bob, own);
}

/// A protein through the membrane: x how much of the point is protein, y
/// how deep into its pore the point is.
fn protein(uv: vec2f, salt: u32) -> vec2f {
  let site = worley(uv * 0.75, salt);
  let lumpy = site.x + 0.05 * fbm(uv * 9.0, salt + 1u, 3);
  let body = step(0.5, site.y) * (1.0 - smoothstep(0.24, 0.3, lumpy));
  let pore = step(0.72, site.y) * (1.0 - smoothstep(0.06, 0.1, lumpy));
  return vec2f(body, pore);
}

/// A protein's violet, mottled by \`lobe\`.
fn proteinViolet(lobe: f32) -> vec3f {
  return vec3f(0.2, 0.12, 0.5) * (0.5 + lobe);
}

fn leaflet(s: Surf) -> Material {
  let head = heads(s, 0.11, 411u);
  let embedded = protein(s.uv, 412u);
  let lobe = fbm(s.uv * 7.0, 413u, 3);
  let swell = 0.5 + 0.5 * sin(s.uv.x * 1.1 + s.uv.y * 0.7 + s.time * 0.35);
  let lipid =
    mix(
      vec3f(0.5, 0.13, 0.16),
      vec3f(0.72, 0.36, 0.2),
      head.y,
    ) * (0.25 + 0.75 * head.x);
  let albedo =
    mix(
      mix(lipid, proteinViolet(lobe), embedded.x),
      vec3f(0.01, 0.0, 0.02),
      embedded.y,
    );
  let glow =
    vec3f(0.5, 0.75, 1.0)
      * 0.5
      * embedded.y
      * (0.6 + 0.4 * sin(s.time * 1.7 + s.uv.x));
  let wall = Material(albedo, glow, 0.6, vec3f(0.0));
  let height =
    mix(head.x + 0.8 * swell, 1.6 + 1.2 * lobe - 3.0 * embedded.y, embedded.x);
  return embossed(s, wall, height, 0.035);
}

fn rafts(s: Surf) -> Material {
  let head = heads(s, 0.16, 414u);
  // Rafts: islands where the heads stand taller, paler and closer.
  let raft = smoothstep(0.5, 0.56, fbm(s.uv * 0.45, 415u, 3));
  let lipid =
    mix(vec3f(0.42, 0.24, 0.05), vec3f(0.6, 0.5, 0.26), raft)
      * (0.2 + 0.8 * head.x)
      * (0.8 + 0.4 * head.y);
  return embossed(s, polished(lipid, 0.75), head.x + 1.5 * raft, 0.03);
}

fn channels(s: Surf) -> Material {
  let comb = honeycomb(s.uv / 0.07);
  let tail = dome(comb.xy, 0.45);
  let pale = vec3f(0.5, 0.42, 0.2) * (0.3 + 0.7 * tail);
  // A channel is round: the panel's light through a pore.
  let pitch = ROOM.xz / 2.0;
  let off = repeated(s.p.xz, pitch);
  let r = length(off);
  let pore = 1.0 - smoothstep(0.42, 0.5, r);
  let collar = (1.0 - smoothstep(0.7, 0.78, r)) * (1.0 - pore);
  let albedo = mix(pale, proteinViolet(fbm(s.uv * 7.0, 416u, 3)), collar);
  let m = Material(albedo, lampGlow(s, lamps()) * pore, 0.5, vec3f(0.0));
  return embossed(s, m, tail * (1.0 - collar) + 4.0 * collar, 0.012);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return leaflet(s);
    }
    case FLOOR, OWNED: {
      return rafts(s);
    }
    case CEILING: {
      return channels(s);
    }
    case TRIM: {
      let lobe = fbm(s.uv * 7.0, 417u, 3);
      return embossed(s, polished(proteinViolet(lobe), 0.6), lobe, 0.03);
    }
    default: {
      return stuff(s);
    }
  }
}
`,a1,ck,fs,fp,fi,ff),cU={name:"Membrane",air:i7(i6(1311500)),pillar:.03,dark:.08,sound:{footing:"soft",hum:40,air:.25,echo:.6},decor:[{thing:"balloon",perRoom:.3},{thing:"pipe",perRoom:.4},{thing:"mattress",perRoom:.15},{thing:"curtain",perRoom:.2}],shader:{...cD,needs:[...cD.needs,fm("membrane",{lamp:[1.5,1.3,1.45],ambient:[.012,.004,.008],grid:2,panel:[1,1],stutter:0,visibility:30,exposure:1.1,glow:.28,fringe:.006,vignette:.45,noise:.014})]}},cC=tO("cube/entities/theme/laboratory/micrograph/config/micrograph",`
/// A diatom's shell: a sieve of pores, each a smaller sieve, between ribs.
fn sieve(s: Surf) -> Material {
  let comb = honeycomb(s.uv / 0.21);
  let pore = dome(comb.xy, 0.4);
  let fine = honeycomb(s.uv / 0.035);
  let near = 1.0 / (1.0 + s.far * s.far / 40.0);
  let pit = dome(fine.xy, 0.36) * near;
  let rib = 1.0 - smoothstep(0.05, 0.09, abs(spaced(s.uv.x, 1.25)));
  let height = (1.0 - pore) * (1.0 - 0.4 * pit) + 0.8 * rib;
  let m = matte(vec3f(0.3 + 0.35 * height));
  return embossed(s, m, height, 0.05);
}

/// A moth's wing: scales in rows like roof tiles, each finely ridged.
fn scales(s: Surf) -> Material {
  let row = s.uv.y / 0.34;
  let shift = 0.5 * f32(i32(floor(row)) & 1);
  let col = s.uv.x / 0.26 + shift;
  let at = vec2f(fract(col) - 0.5, fract(row));
  let word = cellHash(vec2i(floor(vec2f(col, row))), 461u);
  // The scale's free end is its lower one, rounded and a little ragged.
  let tip = at.y - 1.3 * at.x * at.x;
  let under = 1.0 - smoothstep(0.0, 0.02, tip);
  let near = 1.0 / (1.0 + s.far * s.far / 6.0);
  let ridge = 0.5 + 0.5 * near * sin((at.x + 0.02 * unitOf(word)) * 75.0);
  let torn = step(0.93, unitOf(word));
  let height =
    mix((1.0 - 0.7 * tip + 0.12 * ridge) * (1.0 - 0.8 * torn), 0.2, under);
  let m = matte(vec3f(0.16 + 0.3 * height + 0.1 * ridge * (1.0 - under)));
  return embossed(s, m, height, 0.06);
}

/// Grains of metal: each flat, each at its own height, cracked where they meet.
fn grains(s: Surf) -> Material {
  let piece = shards(s.uv * 2.8, 462u);
  let crack = 1.0 - smoothstep(0.0, 0.05, piece.x);
  let etched = fbm(s.uv * 30.0 + piece.y * 20.0, 463u, 3);
  let m =
    glowing(
      vec3f(0.25 + 0.3 * piece.y + 0.1 * etched) * (1.0 - 0.7 * crack),
      lampGlow(s, lamps()),
    );
  return embossed(s, m, piece.z + 0.1 * etched - crack, 0.04);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return scales(s);
    }
    case FLOOR, OWNED: {
      return sieve(s);
    }
    case CEILING: {
      return grains(s);
    }
    case TRIM: {
      // A bundle of fibres, twisted.
      let fibre = 0.5 + 0.5 * sin((s.uv.x + 0.12 * s.uv.y) * 260.0);
      return embossed(s, matte(vec3f(0.3 + 0.3 * fibre)), fibre, 0.01);
    }
    default: {
      let m = stuff(s);
      return
        Material(
          vec3f(luma(m.albedo) + 0.15),
          vec3f(luma(m.emission)),
          0.0,
          m.relief,
        );
    }
  }
}

fn lamps() -> Lamps {
  return Lamps(vec3f(0.5), vec3f(0.02), 2, vec2f(0.5, 0.5), 0.25);
}

/// An electron picture has no lamps: a face is bright for how steeply the
/// beam meets it, so every edge glows, and the room's light only says how
/// much signal the detector gets from there.
fn themeLight(s: Surf, m: Material) -> vec3f {
  let normal = normalize(s.normal + m.relief);
  let edge = 1.0 - abs(dot(normal, s.view));
  let detector = max(dot(normal, normalize(vec3f(0.35, 0.8, 0.45))), 0.0);
  let reach = lampReach(s, s.normal, 0.0, lamps());
  let gain = 0.3 + 0.7 * clamp(reach.z * 0.9, 0.0, 1.0);
  let signal =
    luma(m.albedo)
      * (0.14 + 1.2 * edge * edge + 0.4 * detector)
      * gain
      * cornerShade(s);
  return haze(vec3f(signal) + m.emission, s, AIR, 32.0);
}

/// The frame as the instrument prints it: grey, scanned line by line with
/// each line a little out of step, and a bar of data along the bottom with
/// the scale.
fn themeLens(l: Lens) -> vec3f {
  let row = u32(l.pixel.y);
  let slip = (unitOf(hashOf(row, u32(l.time * 8.0))) - 0.5) * 0.0025;
  let scanned = Lens(l.uv + vec2f(slip, 0.0), l.pixel, l.size, l.time, l.hour);
  let seen = luma(tonemap(through(scanned, 0.35, 0.0) * 1.25));
  let scan = 0.94 + 0.06 * sin(l.pixel.y * PI);
  let shot = grain(l) * 0.07 * (0.4 + seen);
  var grey = seen * scan * vignette(l, 0.25) + shot;
  let bar = step(0.925, l.uv.y);
  let rule =
    step(abs(l.uv.x - 0.82), 0.09) * step(abs(l.uv.y - 0.965), 0.004) + step(
      abs(abs(l.uv.x - 0.82) - 0.09),
      0.0012,
    ) * step(abs(l.uv.y - 0.965), 0.012);
  // Where the readings are printed: blocks the size of letters, in words.
  let glyph =
    vec2f(l.uv.x * l.size.x / (l.size.y * 0.011), (l.uv.y - 0.95) / 0.03);
  let word = floor(glyph.x / 7.0);
  let inked =
    step(0.03, l.uv.x)
      * step(l.uv.x, 0.62)
      * step(0.0, glyph.y)
      * step(glyph.y, 1.0)
      * step(0.25, fract(glyph.x))
      * step(fract(glyph.x / 7.0), 0.8)
      * step(
        0.3,
        unitOf(hashOf(u32(glyph.x), u32(word) + u32(floor(glyph.y * 5.0)))),
      )
      * step(unitOf(hashOf(u32(word), 46u)), 0.75);
  grey = mix(grey, 0.02 + 0.85 * clamp(rule + inked, 0.0, 1.0), bar);
  return vec3f(grey);
}
`,ck,fp,ff,fn,fi,fc,fu,fs,a1),cP={name:"Micrograph",air:i7(i6(328965)),pillar:.028,dark:.1,sound:{footing:"hollow",hum:220,air:.02,echo:.15},decor:[{thing:"monolith",perRoom:.4},{thing:"pipe",perRoom:.5},{thing:"crate",perRoom:.2},{thing:"ladder",perRoom:.15}],shader:cC},cH=tO("cube/entities/theme/laboratory/stained-section/config/stained-section",`
const EOSIN = vec3f(0.86, 0.36, 0.52);
const HAEMATOXYLIN = vec3f(0.22, 0.1, 0.42);
const GLASS_WHITE = vec3f(0.84, 0.8, 0.82);

/// Muscle cut along its fibres: pink bands with a fine cross-stripe, split
/// by white, their nuclei pushed to the edges.
fn muscle(s: Surf) -> Material {
  let wave =
    s.uv.y + 0.12 * sin(s.uv.x * 1.1) + 0.08 * fbm(s.uv * 0.8, 421u, 3);
  let across = fract(wave / 0.28);
  let fibre = floor(wave / 0.28);
  let split = smoothstep(0.02, 0.05, min(across, 1.0 - across));
  let stripe = 0.92 + 0.08 * sin(s.uv.x * 110.0);
  let own = unitOf(hashOf(bitcast<u32>(i32(fibre)), 422u));
  let nucleus = worley(vec2f(s.uv.x * 2.4, wave * 9.0), 423u);
  let edge = 1.0 - smoothstep(0.1, 0.2, min(across, 1.0 - across));
  let dyed = edge * (1.0 - smoothstep(0.16, 0.22, nucleus.x));
  let pink = EOSIN * (0.8 + 0.3 * own) * stripe;
  let albedo = mix(mix(GLASS_WHITE, pink, split), HAEMATOXYLIN, dyed);
  return embossed(s, polished(albedo, 0.04), split - dyed, 0.004);
}

/// Glands: rings of tall cells round a white lumen, in a field of loose pink
/// cells with one dark nucleus each.
fn glands(s: Surf) -> Material {
  let cell = shards(s.uv * 7.0, 424u);
  let gland = worley(s.uv * 0.9, 425u);
  let ring =
    (1.0 - smoothstep(0.34, 0.37, gland.x)) * smoothstep(0.18, 0.21, gland.x);
  let lumen = 1.0 - smoothstep(0.18, 0.21, gland.x);
  let border = 1.0 - smoothstep(0.0, 0.07, cell.x);
  let cytoplasm = EOSIN * (0.75 + 0.5 * cell.y) * mix(1.0, 0.75, ring);
  let dyed = (1.0 - smoothstep(0.1 + 0.08 * ring, 0.17 + 0.08 * ring, cell.w));
  var albedo = mix(cytoplasm, GLASS_WHITE, 0.7 * border);
  albedo = mix(albedo, HAEMATOXYLIN * (0.8 + 0.6 * cell.z), dyed);
  // Secretion left in the lumen takes the pink weakly.
  let secretion = 0.25 * fbm(s.uv * 6.0, 426u, 3);
  albedo = mix(albedo, mix(GLASS_WHITE, EOSIN, secretion), lumen);
  return
    embossed(
      s,
      polished(albedo, 0.25),
      0.5 * dyed - border - 2.0 * lumen,
      0.004,
    );
}

/// Fat: every cell an empty white bubble in a thin pink wall.
fn fat(s: Surf) -> Material {
  let cell = shards(s.uv * 2.2, 427u);
  let wall = 1.0 - smoothstep(0.02, 0.06, cell.x);
  let dyed =
    wall
      * step(0.75, cell.y)
      * (1.0 - smoothstep(0.0, 0.5, abs(cell.w - 0.45) * 8.0));
  let albedo = mix(mix(GLASS_WHITE, EOSIN, wall), HAEMATOXYLIN, dyed);
  return embossed(s, glowing(albedo, lampGlow(s, lamps())), wall, 0.004);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return glands(s);
    }
    case FLOOR, OWNED: {
      return muscle(s);
    }
    case CEILING: {
      return fat(s);
    }
    case TRIM: {
      // Cartilage: blue-violet, its cells in pairs.
      let nest = worley(s.uv * 9.0, 428u);
      return
        matte(
          mix(
            vec3f(0.5, 0.48, 0.75),
            HAEMATOXYLIN,
            1.0 - smoothstep(0.12, 0.2, nest.x),
          ),
        );
    }
    default: {
      return stuff(s);
    }
  }
}

fn lamps() -> Lamps {
  return
    Lamps(
      vec3f(0.95, 0.95, 0.92),
      vec3f(0.1, 0.09, 0.095),
      2,
      vec2f(1.1, 1.1),
      0.0,
    );
}

/// Light comes through a slide, not onto it: the dyes hold their colour in
/// the corners a lamp would leave dark.
fn themeLight(s: Surf, m: Material) -> vec3f {
  let lit = roomLight(s, m, lamps());
  return haze(mix(lit, m.albedo * 0.9, 0.35), s, AIR, 70.0);
}

/// The frame as an eyepiece gives it: a round field with a hard stop,
/// colours parting toward its rim, dust on the glass and the pointer.
fn themeLens(l: Lens) -> vec3f {
  let aspect = l.size.x / l.size.y;
  let off = (l.uv - 0.5) * vec2f(aspect, 1.0);
  let r = length(off);
  let seen = tonemap(through(l, 0.1, 0.035));
  let mote = worley(off * 5.0, 429u);
  let dust =
    step(0.8, mote.y) * (1.0 - smoothstep(0.0, 0.012, abs(mote.x - 0.06)));
  let pointer =
    step(0.12, off.x) * step(abs(off.y + 0.06 * (off.x - 0.02)), 0.002);
  let stop = 1.0 - smoothstep(0.585, 0.6, r);
  let field =
    seen
      * (1.0 - 0.3 * smoothstep(0.25, 0.6, r))
      * (1.0 - 0.18 * dust)
      * (1.0 - 0.9 * pointer);
  return field * stop + grain(l) * 0.01;
}
`,a1,ck,fs,fp,ff,fn),cG=i7(i6(0xf4eaee)),cF=tO("cube/entities/theme/laboratory/tunnelling-scan/config/tunnelling-scan",`
/// The instrument's colour for a height, 0 the lowest: black, rust, orange,
/// straw, white.
fn scanColour(height: f32) -> vec3f {
  let t = clamp(height, 0.0, 1.0);
  let low =
    mix(
      vec3f(0.01, 0.003, 0.0),
      vec3f(0.45, 0.13, 0.01),
      smoothstep(0.0, 0.4, t),
    );
  let high =
    mix(vec3f(0.85, 0.5, 0.08), vec3f(0.95, 0.9, 0.7), smoothstep(0.7, 1.0, t));
  return mix(low, high, smoothstep(0.35, 0.75, t));
}

/// Atoms \`pitch\` metres apart: x an atom's height at the point; y is 1
/// where one is missing and 2 where a stray one sits on top.
fn lattice(uv: vec2f, pitch: f32, salt: u32) -> vec2f {
  let comb = honeycomb(uv / pitch);
  let own = unitOf(combHash(comb.zw, salt));
  let odd = select(select(0.0, 1.0, own > 0.985), 2.0, own < 0.006);
  return vec2f(dome(comb.xy, 0.58), odd);
}

/// Terraces: the level the surface stands at, in flat steps from -0.5 to
/// about 1.3.
fn terraces(uv: vec2f, salt: u32) -> f32 {
  return floor(fbm(uv * 0.22, salt, 3) * 9.0) / 9.0 * 2.0 - 0.5;
}

/// What the atom at a point adds to the height: \`swell\` for one in its
/// place, nothing for a missing one, more for a stray on top.
fn atomHeight(atom: vec2f, swell: f32) -> f32 {
  let vacancy = step(0.5, atom.y) * step(atom.y, 1.5);
  return swell * atom.x * (1.0 - vacancy) + 0.3 * step(1.5, atom.y) * atom.x;
}

fn scanned(s: Surf, height: f32, depth: f32) -> Material {
  return embossed(s, polished(scanColour(height), 0.45), height, depth);
}

fn corral(s: Surf) -> Material {
  let atom = lattice(s.uv, 0.13, 511u);
  let level = terraces(s.uv, 512u);
  // A ring of forty-eight atoms set down one at a time, in half the rooms.
  let off = s.p.xz - ROOM.xz * 0.5;
  let r = length(off);
  let fenced = step(0.5, unitOf(hashOf(s.seed, 0x51u)));
  let post = fract(atan2(off.y, off.x) * 48.0 / 6.2832) - 0.5;
  let fence =
    fenced * (1.0 - smoothstep(
      0.03,
      0.09,
      length(vec2f(post * 0.2, r - 1.55)),
    ));
  let ripple =
    fenced * step(r, 1.5) * 0.16 * cos(r * 21.0) * (0.4 + 0.6 * exp(-r));
  let height =
    0.28
      + 0.4 * level * (1.0 - fenced * step(r, 1.75))
      + atomHeight(atom, 0.14)
      + ripple
      + 0.55 * fence;
  return scanned(s, height, 0.06);
}

fn stepEdges(s: Surf) -> Material {
  let atom = lattice(s.uv, 0.11, 513u);
  let level = terraces(s.uv * vec2f(1.0, 2.2), 514u);
  // Each scan line is read a little high or low of the last.
  let row = bitcast<u32>(i32(floor(s.p.y / 0.018)));
  let line = (unitOf(hashOf(row, 0x52u)) - 0.5) * 0.05;
  let streak = step(0.97, unitOf(hashOf(row, s.seed))) * 0.25;
  let height = 0.3 + 0.45 * level + atomHeight(atom, 0.16) + line + streak;
  return scanned(s, height, 0.05);
}

fn tip(s: Surf) -> Material {
  let cell = s.uv / 0.19;
  let atom = dome(fract(cell) - 0.5, 0.56);
  let m = scanned(s, 0.12 + 0.22 * atom, 0.05);
  // The tip itself: one atom, right above the middle of the room.
  let off = s.p.xz - ROOM.xz * 0.5;
  let point = 1.0 - smoothstep(0.11, 0.17, length(off));
  return Material(m.albedo, lampGlow(s, lamps()) * point, m.gloss, m.relief);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return stepEdges(s);
    }
    case FLOOR, OWNED: {
      return corral(s);
    }
    case CEILING: {
      return tip(s);
    }
    case TRIM: {
      let atom = lattice(s.uv, 0.09, 515u);
      return scanned(s, 0.55 + 0.3 * atom.x, 0.04);
    }
    default: {
      return stuff(s);
    }
  }
}
`,a1,ck,fs,fp,fi,ff),cW={name:"Tunnelling scan",air:i7(i6(656128)),pillar:.024,dark:.1,sound:{footing:"metal",hum:30,air:.02,echo:1.4},decor:[{thing:"monolith",perRoom:.4},{thing:"balloon",perRoom:.15},{thing:"staircase",perRoom:.15},{thing:"barrel",perRoom:.2}],shader:{...cF,needs:[...cF.needs,fm("tunnelling-scan",{lamp:[2.1,1.75,1.3],ambient:[.012,.006,.002],grid:1,panel:[.34,.34],stutter:0,visibility:38,exposure:1.15,glow:.3,fringe:.005,vignette:.45,noise:.022})]}},cB=tO("cube/entities/theme/laboratory/wafer/config/wafer",`
/// The colour a film \`thickness\` waves thick throws back, looked at
/// \`facing\` on, 1 square to it and 0 along it.
fn thinFilm(thickness: f32, facing: f32) -> vec3f {
  let phase = thickness * (0.55 + 0.45 * facing) * 6.2832;
  return 0.5 + 0.5 * cos(phase * vec3f(1.0, 1.22, 1.5) + vec3f(0.0, 0.7, 1.5));
}

fn dies(s: Surf) -> Material {
  let facing = max(dot(s.normal, -s.view), 0.0);
  let die = s.uv / vec2f(1.25, 0.625);
  let at = fract(die);
  let inset = min(min(at.x, 1.0 - at.x) * 1.25, min(at.y, 1.0 - at.y) * 0.625);
  let lane = 1.0 - smoothstep(0.012, 0.016, inset);
  let ringed = (1.0 - smoothstep(0.05, 0.054, inset)) * (1.0 - lane);
  let padRow = ringed * step(0.45, fract((at.x * 1.25 + at.y * 0.625) / 0.04));
  // A die is blocks: memory in fine stripes, logic in a grey fog of gates.
  let block = s.uv / 0.15625;
  let word = cellHash(vec2i(floor(block)), 451u);
  let kind = unitOf(word);
  let near = 1.0 / (1.0 + s.far * s.far / 60.0);
  let lines = select(s.uv.x, s.uv.y, (word & 2u) == 2u);
  let rows = 0.5 + 0.5 * near * sin(lines * 420.0);
  let gates = valueNoise(s.uv * 190.0, 452u);
  let detail = mix(rows, gates, step(0.55, kind));
  let gutter = 1.0 - tiling(s.uv, 0.15625, 0.006, 453u).x;
  let film = thinFilm(1.1 + 2.6 * kind + 0.25 * detail, facing);
  var albedo = mix(vec3f(0.3, 0.32, 0.36), film, 0.6) * (0.16 + 0.22 * detail);
  albedo = mix(albedo, vec3f(0.035, 0.04, 0.05), max(lane, gutter));
  albedo = mix(albedo, vec3f(0.6, 0.5, 0.2), padRow);
  let m = polished(albedo, 0.96 - 0.3 * max(lane, padRow));
  return
    embossed(s, m, 0.3 * detail * near - gutter - 2.0 * lane + padRow, 0.0012);
}

fn cassette(s: Surf) -> Material {
  let h = s.p.y;
  let facing = max(dot(s.normal, -s.view), 0.0);
  let slot = h / 0.05;
  let word =
    hashOf(
      bitcast<u32>(i32(floor(slot))),
      bitcast<u32>(i32(floor(s.uv.x / 1.25))) ^ s.seed,
    );
  let loaded = step(0.12, unitOf(word));
  let edge = loaded * (1.0 - smoothstep(0.1, 0.18, abs(fract(slot) - 0.5)));
  // The rack's posts, a bay apart, combed to hold the wafers.
  let across = fract(s.uv.x / 1.25) * 1.25;
  let post = 1.0 - smoothstep(0.035, 0.04, min(across, 1.25 - across));
  let comb = post * step(0.5, fract(slot + 0.5));
  let film = thinFilm(1.5 + 3.0 * unitOf(mix32(word)) + 0.4 * s.uv.x, facing);
  let bevel = 1.0 - 2.0 * abs(fract(slot) - 0.5);
  var albedo = mix(vec3f(0.006, 0.006, 0.008), film * 0.8 + 0.1, edge);
  albedo = mix(albedo, vec3f(0.5, 0.48, 0.4) * (0.7 + 0.3 * comb), post);
  let wall = polished(albedo, mix(0.2, 0.95, edge) * (1.0 - 0.6 * post));
  return embossed(s, wall, edge * bevel + 2.0 * post + comb, 0.012);
}

fn yellowCeiling(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.625, 0.02, 454u);
  let near = 1.0 / (1.0 + s.far * s.far / 30.0);
  let mesh =
    mix(0.6, smoothstep(0.15, 0.3, length(fract(s.uv / 0.025) - 0.5)), near);
  let white = vec3f(0.5, 0.5, 0.48) * (0.6 + 0.4 * mesh);
  let m =
    Material(
      mix(vec3f(0.3), white, tile.x),
      lampGlow(s, lamps()),
      0.3,
      vec3f(0.0),
    );
  return embossed(s, m, tile.x + 0.3 * mesh, 0.004);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return cassette(s);
    }
    case FLOOR, OWNED: {
      return dies(s);
    }
    case CEILING: {
      return yellowCeiling(s);
    }
    case TRIM: {
      return polished(vec3f(0.5, 0.48, 0.4), 0.45);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),c$={name:"Wafer",air:i7(i6(1182720)),pillar:.02,dark:.05,sound:{footing:"tile",hum:120,air:.6,echo:.7},decor:[{thing:"monolith",perRoom:.3},{thing:"lab-bench",perRoom:.3},{thing:"locker",perRoom:.3},{thing:"mirror",perRoom:.3},{thing:"vent",perRoom:.5}],shader:{...cB,needs:[...cB.needs,fm("wafer",{lamp:[1.7,1.25,.22],ambient:[.012,.008,5e-4],grid:2,panel:[1.2,.55],stutter:0,visibility:55,exposure:1.05,glow:.2,fringe:.004,vignette:.35,noise:.012})]}},cq=tO("cube/entities/theme/laboratory/wet-lab/config/wet-lab",`
fn sealedVinyl(s: Surf) -> Material {
  let fleck = worley(s.uv * 55.0, 371u);
  let chip = 1.0 - smoothstep(0.2, 0.3, fleck.x);
  let base = vec3f(0.07, 0.2, 0.17) * (0.9 + 0.2 * fbm(s.uv * 3.0, 372u, 3));
  let flecked =
    mix(
      base,
      mix(vec3f(0.3, 0.36, 0.3), vec3f(0.02, 0.06, 0.07), step(0.5, fleck.y)),
      0.7 * chip,
    );
  // Welded seams every two metres, and water standing wherever the floor dips.
  let seam = band(fract(s.uv.x / 2.0) * 2.0, 1.0, 0.012);
  let dip = fbm(s.uv * 0.55, s.seed ^ 0x71u, 4);
  let pool = smoothstep(0.52, 0.6, dip);
  let albedo =
    mix(flecked, vec3f(0.03, 0.09, 0.08), seam) * (1.0 - 0.55 * pool);
  let ripple = valueNoise(s.uv * 9.0 + vec2f(s.time * 0.2, 0.0), 373u);
  let vinyl = polished(albedo, mix(0.35, 0.97, pool));
  return
    embossed(
      s,
      vinyl,
      (1.0 - pool) * (0.5 * chip + 6.0 * dip) + 0.012 * pool * ripple,
      0.0015,
    );
}

fn glazedWall(s: Surf) -> Material {
  let h = s.p.y;
  let tile = tiling(s.uv, 0.15, 0.005, 374u);
  let course = floor(h / 0.15);
  let tiled = 1.0 - smoothstep(1.8, 1.803, h);
  let green = step(8.5, course) * step(course, 9.5);
  let cracked = step(0.94, tile.y);
  let crack =
    cracked * (1.0 - smoothstep(
      0.0,
      0.004,
      abs(fbm(s.uv * 9.0, 375u, 3) - 0.5),
    ));
  let glaze =
    mix(
      vec3f(0.56, 0.57, 0.52),
      vec3f(0.06, 0.26, 0.17),
      green,
    ) * (0.92 + 0.1 * tile.y);
  let grout = vec3f(0.13, 0.14, 0.12);
  let above = plaster(s, vec3f(0.4, 0.43, 0.36));
  // What ran down the wall and dried: iodine, permanganate, something green.
  let run = fbm(vec2f(s.uv.x * 2.2, s.uv.y * 0.18), s.seed ^ 0x72u, 3);
  let drip =
    smoothstep(0.6, 0.72, run) * smoothstep(
      0.1,
      0.9,
      h / ROOM.y + 0.3 * valueNoise(vec2f(s.uv.x * 7.0, 0.0), 376u),
    );
  let dye =
    unitOf(hashOf(bitcast<u32>(i32(floor(s.uv.x * 0.7))), s.seed ^ 0x73u));
  let stain =
    mix(
      mix(vec3f(0.6, 0.38, 0.08), vec3f(0.4, 0.1, 0.4), step(0.4, dye)),
      vec3f(0.2, 0.45, 0.2),
      step(0.75, dye),
    );
  var albedo = mix(above, mix(grout, glaze, tile.x), tiled);
  albedo =
    mix(albedo, albedo * stain, 0.8 * drip)
      * (1.0 - 0.7 * crack)
      * (1.0 - 0.45 * damp(s));
  let wall = polished(albedo, tiled * tile.x * (0.85 - 0.5 * drip) + 0.05);
  return embossed(s, wall, tiled * (tile.x + 0.3 * tile.y) - crack, 0.003);
}

fn stainedCeiling(s: Surf) -> Material {
  let rough = fbm(s.uv * 18.0, 377u, 3);
  let ring = damp(s);
  let white = plaster(s, vec3f(0.42, 0.45, 0.4)) * (1.0 - 0.55 * ring);
  let rust =
    mix(white, white * vec3f(0.8, 0.55, 0.3), smoothstep(0.2, 0.6, ring));
  return embossed(s, glowing(rust, lampGlow(s, lamps())), rough - ring, 0.004);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return glazedWall(s);
    }
    case FLOOR, OWNED: {
      return sealedVinyl(s);
    }
    case CEILING: {
      return stainedCeiling(s);
    }
    case TRIM: {
      let tile = tiling(s.uv, 0.15, 0.005, 378u);
      return
        polished(
          mix(vec3f(0.13, 0.14, 0.12), vec3f(0.07, 0.26, 0.18), tile.x),
          0.8 * tile.x,
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),cj={name:"Wet lab",air:i7(i6(857104)),pillar:.022,dark:.06,sound:{footing:"wet",hum:100,air:.35,echo:1.9},decor:[{thing:"lab-bench",perRoom:1.2},{thing:"tank",perRoom:.4},{thing:"drain",perRoom:.7},{thing:"barrel",perRoom:.2},{thing:"pipe",perRoom:.6},{thing:"fire-extinguisher",perRoom:.2},{thing:"wet-floor-sign",perRoom:.15}],shader:{...cq,needs:[...cq.needs,fm("wet-lab",{lamp:[1.25,1.5,1.3],ambient:[.006,.01,.008],grid:2,panel:[.2,1.5],stutter:.15,visibility:42,exposure:1,glow:.16,fringe:.005,vignette:.36,noise:.016})]}},cK=tO("cube/entities/theme/leisure/shape/lib/shape",`
/// 1 where the signed distance \`d\` is negative, softened across a pixel.
fn inside(d: f32) -> f32 {
  let soft = max(fwidth(d), 0.0015);
  return 1.0 - smoothstep(-soft, soft, d);
}

/// 1 within a line \`width\` metres wide along the zero of \`d\`.
fn stroke(d: f32, width: f32) -> f32 {
  return inside(abs(d) - width * 0.5);
}

/// The distance to a box of half-size \`half\` whose corners round by \`r\`.
fn roundBox(p: vec2f, half: vec2f, r: f32) -> f32 {
  let q = abs(p) - half + r;
  return length(max(q, vec2f(0.0))) + min(max(q.x, q.y), 0.0) - r;
}

fn spun(p: vec2f, angle: f32) -> vec2f {
  let c = cos(angle);
  let n = sin(angle);
  return vec2f(c * p.x - n * p.y, n * p.x + c * p.y);
}

/// Oblong slabs laid in courses, each course \`shift\` of a slab along from
/// the one under it: x is 1 on a slab and 0 in a joint, y the slab's own
/// random number in [0, 1).
fn slabs(uv: vec2f, size: vec2f, joint: f32, salt: u32, shift: f32) -> vec2f {
  let course = floor(uv.y / size.y);
  let at = vec2f(uv.x / size.x + fract(course * shift), uv.y / size.y);
  let f = fract(at);
  let edge = min(min(f.x, 1.0 - f.x) * size.x, min(f.y, 1.0 - f.y) * size.y);
  let soft = max(fwidth(edge), 0.002);
  return
    vec2f(
      smoothstep(joint * 0.5, joint * 0.5 + soft, edge),
      unitOf(cellHash(vec2i(floor(at)), salt)),
    );
}

/// The web of light moving water throws, 0 to 1, at \`t\` seconds.
fn caustics(p: vec2f, t: f32) -> f32 {
  let warp =
    vec2f(
      valueNoise(p * 0.9 + t * 0.15, 221u),
      valueNoise(p * 0.9 - t * 0.12 + 7.3, 222u),
    );
  let a = cellWalls(p * 2.4 + warp * 0.9, 223u);
  let b = cellWalls(p * 3.3 - warp * 0.7 + vec2f(t * 0.08, 3.1), 224u);
  let web =
    pow(1.0 - smoothstep(0.0, 0.34, a), 2.0) + pow(
      1.0 - smoothstep(0.0, 0.3, b),
      2.0,
    );
  return 0.5 * web;
}

/// One of four colours by a number in [0, 1).
fn oneOf(u: f32, a: vec3f, b: vec3f, c: vec3f, d: vec3f) -> vec3f {
  return select(select(d, c, u < 0.75), select(b, a, u < 0.25), u < 0.5);
}

/// How much of a surface's fine detail survives its distance from the eye:
/// 1 up close, falling off sooner the smaller \`reach\` is.
fn fading(s: Surf, reach: f32) -> f32 {
  return 1.0 / (1.0 + s.far * s.far / reach);
}

/// The point \`depth\` metres behind a wall that the eye sees through it:
/// x metres along the wall, running on from room to room, and y metres up.
fn behind(s: Surf, depth: f32) -> vec2f {
  let world = vec2f(s.cell) * ROOM.xz + s.p.xz;
  let eastward = abs(s.normal.z) > 0.5;
  let along = select(world.y, world.x, eastward);
  let slide = select(s.view.z, s.view.x, eastward);
  let into = max(-dot(s.view, s.normal), 0.05);
  return vec2f(along + slide / into * depth, s.p.y + s.view.y / into * depth);
}
`,fs,a1),cY=tO("cube/entities/theme/leisure/airport-gate/config/airport-gate",`
/// The apron at night as it lies along \`view\` from a point \`stand\` metres
/// east and south on the floor: a sodium glow on the horizon, the far
/// terminal's windows, taxiway lights on the ground below and a mast's
/// beacon. The eye stands seven metres over the tarmac.
fn apron(view: vec3f, stand: vec2f, t: f32) -> vec3f {
  let rise = view.y / max(length(view.xz), 1e-4);
  let turn = atan2(view.z, view.x);
  if (rise >= 0.0) {
    let sky =
      mix(
        vec3f(0.06, 0.026, 0.01),
        vec3f(0.002, 0.004, 0.012),
        smoothstep(0.0, 0.1, rise),
      );
    let pane =
      hashOf(bitcast<u32>(i32(floor(turn * 700.0))), u32(rise * 500.0));
    let far =
      step(0.8, unitOf(pane))
        * (1.0 - smoothstep(0.008, 0.02, rise))
        * step(0.003, rise);
    let mast = stroke(turn - 1.1, 0.004) * (1.0 - smoothstep(0.1, 0.102, rise));
    let lit =
      inside(length(vec2f((turn - 1.1) * 0.6, rise - 0.108)) - 0.006) * step(
        0.5,
        fract(t * 0.7),
      );
    return
      mix(sky, vec3f(0.002), mast)
        + vec3f(0.9, 0.7, 0.4) * far * 0.9
        + vec3f(3.0, 0.1, 0.05) * lit;
  }
  let ground = stand + view.xz / -view.y * 7.0;
  let away = length(ground - stand);
  let tarmac =
    vec3f(0.006, 0.007, 0.009) + vec3f(0.012, 0.006, 0.002) * exp(
      -away / 220.0,
    );
  let edge = repeated(ground, vec2f(10.0, 40.0));
  let size = 0.12 + away * 0.0045;
  let blue = inside(length(edge) - size);
  let centre = repeated(ground + vec2f(5.0, 20.0), vec2f(10.0, 40.0));
  let green = inside(length(centre) - size * 0.8);
  let paint = stroke(centre.y, 0.35) * 0.02;
  let reach = exp(-away / 260.0);
  return
    tarmac
      + vec3f(0.6, 0.45, 0.04) * paint
      + (vec3f(0.08, 0.3, 2.6) * blue + vec3f(0.1, 1.7, 0.4) * green) * reach;
}

/// Glass from the sill to the head in aluminium frames, the night outside.
fn glazed(s: Surf) -> Material {
  let h = s.p.y;
  let bay = spaced(s.uv.x, 1.25);
  let upright = 1.0 - stroke(bay, 1.25 - 0.06);
  let rails = max(band(h, 0.48, 0.05), band(h, 2.1, 0.06));
  let sill = 1.0 - smoothstep(0.1, 0.104, h);
  let head = smoothstep(2.13, 2.134, h);
  let frame = max(max(upright, rails), max(sill, head));
  let brushed = valueNoise(vec2f(s.uv.x * 240.0, h * 8.0), 262u);
  let metal =
    mix(
      vec3f(0.26, 0.27, 0.28) * (0.85 + 0.2 * brushed),
      vec3f(0.035, 0.04, 0.045),
      max(sill, head),
    );
  let smear = fbm(vec2f(s.uv.x, h) * 2.3, s.seed ^ 0x63u, 4);
  let film = vec3f(0.012, 0.014, 0.016) + 0.02 * smoothstep(0.55, 0.8, smear);
  let world = vec2f(s.cell) * ROOM.xz + s.p.xz;
  let outside = apron(s.view, world, s.time);
  let pane = Material(film, outside, 0.93, vec3f(0.0));
  let framed = polished(metal, 0.45);
  if (frame > 0.5) {
    return embossed(s, framed, 1.0, 0.03);
  }
  return pane;
}

/// A carpet in slate, flecked with short bars of teal and ochre.
fn dashed(s: Surf) -> Material {
  let size = vec2f(0.6, 0.15);
  let course = floor(s.uv.y / size.y);
  let at = vec2f(s.uv.x / size.x + fract(course * 0.37), s.uv.y / size.y);
  let word = cellHash(vec2i(floor(at)), 263u);
  let bar =
    inside(
      roundBox((fract(at) - 0.5) * size, vec2f(0.19, 0.016), 0.016),
    ) * step(0.45, unitOf(word));
  let ink =
    oneOf(
      unitOf(mix32(word)),
      vec3f(0.02, 0.17, 0.17),
      vec3f(0.33, 0.2, 0.04),
      vec3f(0.2, 0.22, 0.25),
      vec3f(0.02, 0.17, 0.17),
    );
  let pile = valueNoise(s.uv * 240.0, 11u);
  let slate = carpet(s, vec3f(0.035, 0.05, 0.075));
  return
    embossed(s, matte(mix(slate, ink * (0.7 + 0.4 * pile), bar)), pile, 0.0015);
}

/// Aluminium slats with a dark gap between each, the lamps in long slots.
fn slatted(s: Surf) -> Material {
  let slat = abs(spaced(s.uv.x, 0.1));
  let gap = 1.0 - smoothstep(0.006, 0.01, 0.05 - slat);
  let brushed = valueNoise(vec2f(s.uv.x * 20.0, s.uv.y * 300.0), 264u);
  let white = vec3f(0.42, 0.43, 0.44) * (0.85 + 0.2 * brushed);
  let ceiling =
    Material(
      mix(white, vec3f(0.01), gap),
      lampGlow(s, lamps()),
      0.45 * (1.0 - gap),
      vec3f(0.0),
    );
  return embossed(s, ceiling, 1.0 - gap, 0.012);
}

/// A steel column carrying a yellow board at its head with no number on it.
fn numbered(s: Surf) -> Material {
  let board = band(s.p.y, 1.98, 0.3);
  let brushed = valueNoise(vec2f(s.uv.x * 300.0, s.p.y * 5.0), 265u);
  let steel = vec3f(0.33, 0.34, 0.35) * (0.8 + 0.3 * brushed);
  let post =
    Material(
      mix(steel, vec3f(0.6, 0.45, 0.02), board),
      vec3f(0.5, 0.36, 0.02) * board,
      mix(0.6, 0.3, board),
      vec3f(0.0),
    );
  return embossed(s, post, board, 0.01);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return glazed(s);
    }
    case FLOOR, OWNED: {
      return dashed(s);
    }
    case CEILING: {
      return slatted(s);
    }
    case TRIM: {
      return numbered(s);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),cV={name:"Gate",air:i7(i6(856085)),pillar:.03,dark:.15,sound:{footing:"carpet",hum:400,air:.5,echo:1.2},decor:[{thing:"bench",perRoom:2.2},{thing:"bin",perRoom:.5},{thing:"vending-machine",perRoom:.3},{thing:"payphone",perRoom:.2},{thing:"potted-plant",perRoom:.4},{thing:"tv",perRoom:.3},{thing:"wall-clock",perRoom:.2},{thing:"socket",perRoom:.6}],shader:{...cY,needs:[...cY.needs,fm("airport-gate",{lamp:[1.2,1.25,1.3],ambient:[.008,.01,.014],grid:2,panel:[.18,1.8],stutter:.03,visibility:60,exposure:1.1,glow:.22,fringe:.005,vignette:.38,noise:.016})]}},cX=tO("cube/entities/theme/leisure/aquarium-tunnel/config/aquarium-tunnel",`
/// The fish of one layer of a shoal over \`at\` in the water: 0 clear, 1 a
/// fish. Each row swims its own way at its own pace, \`size\` metres long.
fn shoal(at: vec2f, size: f32, t: f32, salt: u32) -> f32 {
  let depth = size * 2.2;
  let berth = size * 4.5;
  let lane = floor(at.y / depth);
  let word = hashOf(bitcast<u32>(i32(lane)), salt);
  let way = select(-1.0, 1.0, unitOf(word) < 0.5);
  let swum = at.x - way * t * size * (0.5 + 1.2 * unitOf(mix32(word)));
  let slot = swum / berth;
  let fish = hashOf(bitcast<u32>(i32(floor(slot))), word);
  let bob = 0.25 * size * sin(t * 1.3 + unitOf(fish) * 40.0);
  var p = vec2f(spaced(swum, berth), spaced(at.y, depth) + bob);
  p.x *= way;
  let trunk = inside(length(vec2f(p.x, p.y * 2.5)) - size * 0.5);
  let fin =
    step(-size * 0.95, p.x)
      * step(p.x, -size * 0.4)
      * inside(abs(p.y) - (-size * 0.38 - p.x) * 0.75);
  return max(trunk, fin) * step(0.4, unitOf(mix32(fish)));
}

/// The tank as seen through a wall: blue going dark with depth, shafts of
/// light leaning through it, two layers of shoal, the great one at the back
/// and the specks that drift down past the glass.
fn tank(s: Surf) -> vec3f {
  let t = s.time;
  let back = behind(s, 9.0);
  let mid = behind(s, 3.0);
  let front = behind(s, 0.5);
  let blue =
    mix(
      vec3f(0.002, 0.014, 0.05),
      vec3f(0.02, 0.22, 0.32),
      smoothstep(-2.0, 5.0, back.y),
    );
  let lean = (back.x + back.y * 0.45) * 0.55;
  let shaft =
    smoothstep(0.5, 0.9, valueNoise(vec2f(lean, t * 0.04), 350u)) * smoothstep(
      -1.0,
      3.5,
      back.y,
    );
  var water = blue * (1.0 + 1.6 * shaft);
  let great =
    repeated(vec2f(back.x - t * 0.3, back.y - 1.6), vec2f(53.0, 200.0));
  let whale =
    max(
      inside(length(vec2f(great.x, great.y * 4.0)) - 4.2),
      inside(abs(great.y) - (great.x - 3.6) * 0.6)
        * step(3.6, great.x)
        * step(great.x, 5.6),
    );
  water = mix(water, vec3f(0.001, 0.006, 0.02), 0.82 * whale);
  water =
    mix(water, blue * 0.35, 0.7 * shoal(back * 0.6 + 40.0, 0.11, t, 351u));
  water =
    mix(water, vec3f(0.002, 0.012, 0.03), 0.9 * shoal(mid, 0.34, t, 352u));
  let speck =
    worley((front + vec2f(0.02 * sin(t * 0.3), t * 0.03)) * 16.0, 353u);
  water +=
    vec3f(0.1, 0.22, 0.25)
      * inside(speck.x / 16.0 - 0.003)
      * step(0.82, speck.y);
  return water;
}

/// Acrylic from a black plinth to a black head, the tank beyond it.
fn windowed(s: Surf) -> Material {
  let h = s.p.y;
  let plinth = 1.0 - smoothstep(0.34, 0.344, h);
  let head = smoothstep(2.16, 2.164, h);
  let joint = stroke(spaced(s.uv.x, 2.5), 0.012);
  if (max(plinth, head) > 0.5) {
    let rock = fbm(vec2f(s.uv.x, h) * 9.0, 354u, 4);
    return
      embossed(
        s,
        polished(vec3f(0.012, 0.014, 0.018) * (0.5 + rock), 0.2),
        rock,
        0.01,
      );
  }
  let scuffed =
    0.006 + 0.02 * smoothstep(
      0.6,
      0.85,
      fbm(vec2f(s.uv.x, h) * 3.0, s.seed ^ 0x55u, 4),
    );
  return
    Material(
      vec3f(scuffed + 0.05 * joint),
      tank(s) * (1.0 - 0.5 * joint),
      0.93,
      vec3f(0.0),
    );
}

/// The water's surface from under it: its bright web, and where the lamp
/// is, the sun.
fn surfaced(s: Surf) -> Material {
  let web = caustics(s.uv * 0.8, s.time);
  let p = s.p.xz - ROOM.xz * 0.5;
  let sun = exp(-dot(p, p) / 0.9) * lampLevel(s, vec2i(0), litOf(s), 0.05);
  let swell = 0.5 + fbm(s.uv * 0.5 + s.time * 0.03, 355u, 3);
  let glow =
    (vec3f(0.004, 0.035, 0.06) + vec3f(
      0.02,
      0.13,
      0.17,
    ) * web) * swell + lamps().colour * (0.75 * sun * (0.5 + web));
  return Material(vec3f(0.01, 0.02, 0.03), glow, 0.0, vec3f(0.0));
}

/// A carpet the colour of deep water, the surface's light moving over it.
fn lapped(s: Surf) -> Material {
  let pile = valueNoise(s.uv * 240.0, 11u);
  let wave = 0.5 + 0.5 * sin(s.uv.x * 9.0 + 2.5 * sin(s.uv.y * 3.1));
  let navy =
    carpet(
      s,
      mix(
        vec3f(0.012, 0.03, 0.07),
        vec3f(0.015, 0.06, 0.1),
        smoothstep(0.75, 0.8, wave),
      ),
    );
  let thrown =
    vec3f(0.005, 0.035, 0.045)
      * caustics(s.uv * 0.7 + 3.0, s.time)
      * (0.6 + 0.6 * pile);
  return embossed(s, glowing(navy, thrown), pile, 0.0015);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return windowed(s);
    }
    case FLOOR, OWNED: {
      return lapped(s);
    }
    case CEILING: {
      return surfaced(s);
    }
    case TRIM: {
      return polished(vec3f(0.012, 0.014, 0.018), 0.5);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),cZ={name:"Aquarium tunnel",air:i7(i6(133650)),pillar:.02,dark:.12,sound:{footing:"carpet",hum:50,air:.25,echo:1.4},decor:[{thing:"bench",perRoom:.8},{thing:"tank",perRoom:.3},{thing:"potted-plant",perRoom:.2},{thing:"bin",perRoom:.2},{thing:"exit-sign",perRoom:.3},{thing:"balloon",perRoom:.1},{thing:"wet-floor-sign",perRoom:.15}],shader:{...cX,needs:[...cX.needs,fm("aquarium-tunnel",{lamp:[.5,1.5,1.9],ambient:[.004,.012,.018],grid:1,panel:[1.2,1.2],stutter:.05,visibility:40,exposure:1.2,glow:.3,fringe:.006,vignette:.45,noise:.018})]}},cQ=tO("cube/entities/theme/leisure/arcade/config/arcade",`
fn lamps() -> Lamps {
  return
    Lamps(
      vec3f(0.75, 0.42, 1.5),
      vec3f(0.012, 0.004, 0.022),
      2,
      vec2f(0.34, 0.34),
      0.12,
    );
}

fn neon(u: f32) -> vec3f {
  return
    oneOf(
      u,
      vec3f(1.0, 0.04, 0.55),
      vec3f(0.03, 0.75, 1.0),
      vec3f(1.0, 0.8, 0.06),
      vec3f(0.25, 1.0, 0.15),
    );
}

/// The carpet's shapes: a squiggle, a triangle, a ring or a zigzag to a
/// cell, each turned its own way.
fn confetti(s: Surf) -> Material {
  let size = 0.42;
  let word = cellHash(vec2i(floor(s.uv / size)), 225u);
  let p = spun(repeated(s.uv, vec2f(size)), unitOf(word) * 6.2832);
  let which = unitOf(mix32(word)) * 4.0;
  var d = abs(length(p) - 0.07) - 0.011;
  if (which < 1.0) {
    d = max(abs(p.y - 0.03 * sin(p.x * 48.0)) - 0.011, abs(p.x) - 0.15);
  } else if (which < 2.0) {
    d = abs(max(abs(p.x) * 0.866 + p.y * 0.5, -p.y) - 0.065) - 0.009;
  } else if (which < 3.0) {
    d =
      max(
        abs(p.y - (abs(fract(p.x * 11.0) - 0.5) - 0.25) * 0.11) - 0.011,
        abs(p.x) - 0.15,
      );
  }
  let fleck = worley(s.uv * 11.0, 226u);
  let speck = inside(fleck.x / 11.0 - 0.011) * step(0.55, fleck.y);
  let ink = max(inside(d), speck);
  let colour =
    neon(
      select(
        unitOf(mix32(word ^ 0x5u)),
        fleck.y * 2.2 - 1.2,
        speck > inside(d),
      ),
    );
  let pile = valueNoise(s.uv * 240.0, 11u);
  let ground = carpet(s, vec3f(0.012, 0.011, 0.045));
  let dyed = mix(ground, colour * (0.3 + 0.2 * pile), ink);
  return embossed(s, glowing(dyed, colour * (0.07 * ink)), pile, 0.0015);
}

/// A carpeted wall with a tube of neon along its head and its foot, each
/// length of tube its own: lit, dead or trying.
fn tubed(s: Surf) -> Material {
  let h = s.p.y;
  let rib = valueNoise(vec2f(s.uv.x * 170.0, h * 6.0), 227u);
  let cloth = vec3f(0.02, 0.011, 0.04) * (0.6 + 0.6 * rib);
  let run = 1.25;
  let word = hashOf(bitcast<u32>(i32(floor(s.uv.x / run))), 228u);
  let luck = unitOf(word);
  let trying = step(0.35, unitOf(hashOf(word, u32(s.time * 9.0))));
  let live = select(select(1.0, trying, luck < 0.2), 0.0, luck < 0.08);
  // A tube stops short of its holders at either end.
  let held = step(0.04, run * 0.5 - abs(spaced(s.uv.x, run)));
  let pink = vec3f(1.0, 0.05, 0.5);
  let cyan = vec3f(0.03, 0.7, 1.0);
  let head = band(h, 1.95, 0.022) * held;
  let foot = band(h, 0.2, 0.022) * held;
  let wash = pink * exp(-abs(h - 1.95) * 6.0) + cyan * exp(-abs(h - 0.2) * 6.0);
  let glow = (pink * head + cyan * foot) * 5.0 + (cloth + 0.012) * wash * 2.4;
  return
    embossed(s, Material(cloth, glow * live, 0.05, vec3f(0.0)), rib, 0.002);
}

/// Black tiles with points of fibre-optic light let into them.
fn starred(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.625, 0.02, 4u);
  let black = vec3f(0.018, 0.016, 0.03) * (0.7 + 0.3 * tile.y);
  let point = worley(s.uv * 13.0, 229u);
  let twinkle =
    0.6 + 0.4 * sin(s.time * (1.0 + 3.0 * point.y) + point.y * 40.0);
  let star = inside(point.x / 13.0 - 0.004) * step(0.78, point.y) * twinkle;
  let glow = lampGlow(s, lamps()) + neon(point.y * 4.5 - 3.5) * (1.6 * star);
  return
    embossed(
      s,
      glowing(mix(vec3f(0.05, 0.045, 0.07), black, tile.x), glow),
      tile.x,
      0.006,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return tubed(s);
    }
    case FLOOR, OWNED: {
      return confetti(s);
    }
    case CEILING: {
      return starred(s);
    }
    case TRIM: {
      return polished(vec3f(0.02, 0.02, 0.03), 0.6);
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  return haze(roomLight(s, m, lamps()), s, AIR, 30.0);
}

/// The frame on a picture tube: its glass bowed, its lines and its triads
/// of phosphor showing, a brighter bar rolling down it.
fn themeLens(l: Lens) -> vec3f {
  let off = l.uv - 0.5;
  let bowed = l.uv + off * dot(off, off) * 0.14;
  let tube = Lens(bowed, l.pixel, l.size, l.time, l.hour);
  let seen = through(tube, 0.5, 0.012) * 2.2;
  let line = 0.78 + 0.22 * cos(l.pixel.y * 2.0944);
  let triad = u32(l.pixel.x) % 3u;
  let mask =
    vec3f(
      select(0.78, 1.12, triad == 0u),
      select(0.78, 1.12, triad == 1u),
      select(0.78, 1.12, triad == 2u),
    );
  let roll =
    1.0 + 0.07 * smoothstep(
      0.08,
      0.0,
      abs(fract(l.uv.y - l.time * 0.11) - 0.5),
    );
  let edge = roundBox(bowed - 0.5, vec2f(0.5), 0.03);
  let glass = 1.0 - smoothstep(-0.012, 0.0, edge);
  return
    (tonemap(seen) * line * mask * roll * vignette(l, 0.45) + grain(
      l,
    ) * 0.03) * glass;
}
`,fs,a1,fl,fp,ff,fn,cK),cJ=i7(i6(525330)),c0=tO("cube/entities/theme/leisure/ball-pit/config/ball-pit",`
fn primary(u: f32) -> vec3f {
  return
    oneOf(
      u,
      vec3f(0.55, 0.03, 0.03),
      vec3f(0.03, 0.14, 0.5),
      vec3f(0.62, 0.45, 0.03),
      vec3f(0.04, 0.36, 0.08),
    );
}

/// A ball's width and its radius, metres.
const BALL = 0.075;
const BALL_RADIUS = 0.039;

/// How far under the floor's plane the heap's top lies at a point, metres:
/// slow dunes, the same for everyone standing there.
fn dune(p: vec2f) -> f32 {
  return
    0.04 * (2.0
      + sin(p.x * 1.7 + 1.9 * sin(p.y * 0.8))
      + sin(p.y * 2.3 + 1.3 * sin(p.x * 1.1)));
}

/// The ball of one cell of one layer of the heap: its centre under the
/// floor's plane, and in \`w\` its own number, 0 to 1. The lower layer sits
/// in the gaps of the upper.
fn ballOf(cell: vec2i, layer: u32) -> vec4f {
  let word = cellHash(cell, 330u + layer);
  let shift = vec2f(f32(word & 0xffffu), f32(word >> 16u)) / 65535.0 - 0.5;
  let at = (vec2f(cell) + 0.5 + 0.5 * f32(layer) + 0.34 * shift) * BALL;
  let down =
    BALL_RADIUS + dune(at) + 0.035 * unitOf(mix32(word)) + 0.05 * f32(layer);
  return vec4f(at.x, -down, at.y, unitOf(word));
}

struct Nearest {
  gap: f32,
  ball: vec4f,
}

/// The ball nearest a point of the heap, and the gap to its skin.
fn nearest(p: vec3f) -> Nearest {
  var best = Nearest(1.0, vec4f(0.0));
  for (var layer = 0u; layer < 2u; layer++) {
    let first = vec2i(floor(p.xz / BALL - 0.5 * f32(layer) - 0.5));
    for (var k = 0; k < 4; k++) {
      let ball = ballOf(first + vec2i(k & 1, k >> 1), layer);
      let gap = length(p - ball.xyz) - BALL_RADIUS;
      if (gap < best.gap) {
        best = Nearest(gap, ball);
      }
    }
  }
  return best;
}

/// Plastic balls a hand across, heaped: the eye's ray is followed under
/// the floor's plane to the ball it lands on, so each is round, hides the
/// ones behind it and lies at its own height.
fn balls(s: Surf) -> Material {
  var p = vec3f(s.uv.x, 0.0, s.uv.y);
  var found = nearest(p);
  for (var i = 0; i < 12; i++) {
    if (found.gap < 0.002 || p.y < -0.3) {
      break;
    }
    p += s.view * found.gap;
    found = nearest(p);
  }
  let round = normalize(p - found.ball.xyz);
  let near = fading(s, 120.0);
  let pit =
    mix(0.22, 1.0, smoothstep(-0.26, -0.03, p.y)) * (0.62 + 0.38 * clamp(
      round.y,
      0.0,
      1.0,
    ));
  let landed = 1.0 - smoothstep(0.004, 0.03, found.gap);
  let plastic = primary(found.ball.w) * pit * mix(0.3, 1.0, landed);
  let heap = mix(vec3f(0.3, 0.24, 0.15) * pit, plastic, mix(0.45, 1.0, near));
  let normal = normalize(mix(s.normal, round, landed * mix(0.35, 1.0, near)));
  return Material(heap, vec3f(0.0), 0.3 * near * landed, normal - s.normal);
}

/// Vinyl pads to the waist, each quilted and its own colour; above them a
/// yellow wall with big dots on it behind a black net.
fn netted(s: Surf) -> Material {
  let h = s.p.y;
  if (h < 1.0) {
    let size = vec2f(0.625, 0.5);
    let at = vec2f(s.uv.x, h) / size;
    let f = abs(fract(at) - 0.5) * 2.0;
    let pillow = pow((1.0 - pow(f.x, 4.0)) * (1.0 - pow(f.y, 4.0)), 0.5);
    let button = smoothstep(0.03, 0.012, length((fract(at) - 0.5) * size));
    let sheen = valueNoise(vec2f(s.uv.x, h) * 180.0, 332u);
    let vinyl =
      primary(unitOf(cellHash(vec2i(floor(at)), 333u)))
        * (0.45 + 0.6 * pillow)
        * (0.93 + 0.1 * sheen);
    return embossed(s, polished(vinyl, 0.4), pillow - 0.4 * button, 0.03);
  }
  let rail = max(band(h, 1.04, 0.08), band(h, 2.2, 0.2));
  let row = floor((h - 1.1) / 0.5);
  let cell = vec2f(s.uv.x + 0.45 * row, h - 1.1) / vec2f(0.9, 0.5);
  let spot = inside(length((fract(cell) - 0.5) * vec2f(0.9, 0.5)) - 0.17);
  let word = cellHash(vec2i(floor(cell)), 334u);
  let wall = mix(plaster(s, vec3f(0.6, 0.5, 0.2)), primary(unitOf(word)), spot);
  let mesh = spun(vec2f(s.uv.x, h), 0.7854);
  let cord = repeated(mesh, vec2f(0.055));
  let net = max(stroke(cord.x, 0.007), stroke(cord.y, 0.007));
  let behind = mix(wall * 0.8, vec3f(0.012), net);
  let padded =
    vec3f(0.03, 0.12, 0.45) * (0.8 + 0.3 * valueNoise(
      vec2f(s.uv.x * 4.0, h * 120.0),
      335u,
    ));
  return
    embossed(
      s,
      polished(mix(behind, padded, rail), 0.1 + 0.3 * rail),
      net + 6.0 * rail,
      0.004,
    );
}

/// White tiles scattered with painted dots, the lamps flush in them.
fn dotted(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.625, 0.012, 4u);
  let spot = worley(s.uv * 2.2, 336u);
  let dot = inside(spot.x / 2.2 - 0.05 - 0.07 * spot.y) * step(0.35, spot.y);
  let white = vec3f(0.56, 0.55, 0.5) * (0.92 + 0.08 * tile.y);
  let painted = mix(white, primary(spot.y * 1.5 - 0.5) * 1.2, dot);
  return
    embossed(
      s,
      glowing(mix(vec3f(0.3), painted, tile.x), lampGlow(s, lamps())),
      tile.x,
      0.005,
    );
}

/// A post wrapped in foam, ringed blue and green.
fn wrapped(s: Surf) -> Material {
  let ring = step(0.5, fract(s.p.y / 0.5));
  let seam = band(fract(s.p.y / 0.25) * 0.25, 0.125, 0.01);
  let foam =
    mix(
      vec3f(0.03, 0.14, 0.5),
      vec3f(0.04, 0.36, 0.08),
      ring,
    ) * (1.0 - 0.5 * seam);
  return embossed(s, polished(foam, 0.35), 1.0 - seam, 0.01);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return netted(s);
    }
    case FLOOR, OWNED: {
      return balls(s);
    }
    case CEILING: {
      return dotted(s);
    }
    case TRIM: {
      return wrapped(s);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),c2={name:"Ball pit",air:i7(i6(1709072)),pillar:.035,dark:.02,sound:{footing:"hollow",hum:100,air:.1,echo:.4},decor:[{thing:"slide",perRoom:.9},{thing:"balloon",perRoom:.8},{thing:"mattress",perRoom:.5},{thing:"ladder",perRoom:.4},{thing:"bench",perRoom:.2},{thing:"wall-clock",perRoom:.1},{thing:"mannequin",perRoom:.05}],shader:{...c0,needs:[...c0.needs,fm("ball-pit",{lamp:[1.15,1.08,.94],ambient:[.014,.013,.011],grid:2,panel:[.625,.625],stutter:0,visibility:60,exposure:1.05,glow:.14,fringe:.004,vignette:.3,noise:.012})]}},c1=tO("cube/entities/theme/leisure/casino/config/casino",`
/// A carpet of ribbons that never run straight, a rosette where they would
/// cross, in purple, teal, crimson and gold.
fn swirled(s: Surf) -> Material {
  let warp =
    vec2f(fbm(s.uv * 0.9, 340u, 3), fbm(s.uv * 0.9 + 5.0, 341u, 3)) - 0.5;
  let p = s.uv + warp * 1.3;
  let ribbon = sin(p.x * 8.0 + 3.0 * sin(p.y * 2.3));
  let edge = 1.0 - smoothstep(0.08, 0.16, abs(abs(ribbon) - 0.55));
  let leaf = repeated(p, vec2f(0.4, 0.3));
  let sprig =
    inside(length(vec2f(leaf.x, leaf.y * 2.2)) - 0.07) * step(abs(ribbon), 0.4);
  let rose = repeated(s.uv, vec2f(1.25));
  let r = length(rose);
  let a = atan2(rose.y, rose.x);
  let petal = r - (0.22 + 0.07 * cos(a * 8.0));
  let pile = valueNoise(s.uv * 240.0, 11u);
  var colour =
    mix(
      vec3f(0.07, 0.012, 0.1),
      vec3f(0.015, 0.14, 0.14),
      step(0.55, abs(ribbon)),
    );
  colour = mix(colour, vec3f(0.4, 0.24, 0.03), max(edge, sprig));
  colour = mix(colour, vec3f(0.3, 0.012, 0.03), inside(petal));
  colour =
    mix(
      colour,
      vec3f(0.4, 0.24, 0.03),
      max(stroke(petal, 0.03), inside(r - 0.06)),
    );
  let worn = 0.55 + 0.25 * fbm(s.uv * 0.45, 5u, 3);
  return embossed(s, matte(colour * (0.72 + 0.4 * pile) * worn), pile, 0.0015);
}

/// How bright the bulb at \`at\` metres from its row is: one in four lit,
/// the lit one moving \`way\` along the row.
fn bulbs(along: f32, up: f32, way: i32, time: f32, salt: u32) -> f32 {
  let pitch = 0.14;
  let index = i32(floor(along / pitch));
  let turn = ((index * way + i32(time * 7.0)) % 4 + 4) % 4;
  let dead = step(unitOf(hashOf(bitcast<u32>(index), salt)), 0.06);
  let bulb = inside(length(vec2f(spaced(along, pitch), up)) - 0.026);
  return bulb * mix(select(0.12, 1.0, turn == 0), 0.0, dead);
}

/// Burgundy lacquer in gilt frames over a dark dado, and a row of bulbs at
/// the head of the wall and at the waist, chasing opposite ways.
fn gilded(s: Surf) -> Material {
  let h = s.p.y;
  let bay = spaced(s.uv.x, 1.25);
  let upper = vec2f(bay, h - 1.52);
  let lower = vec2f(bay, h - 0.5);
  let frame =
    max(
      stroke(roundBox(upper, vec2f(0.5, 0.42), 0.06), 0.03),
      stroke(roundBox(lower, vec2f(0.5, 0.3), 0.0), 0.025),
    );
  let sheen = fbm(vec2f(s.uv.x, h) * 3.0, 342u, 3);
  let lacquer =
    mix(
      vec3f(0.1, 0.008, 0.018),
      vec3f(0.03, 0.006, 0.01),
      1.0 - smoothstep(0.92, 0.924, h),
    ) * (0.8 + 0.4 * sheen);
  let gilt =
    vec3f(0.5, 0.31, 0.06) * (0.7 + 0.5 * valueNoise(
      vec2f(s.uv.x, h) * 80.0,
      343u,
    ));
  let rail =
    max(max(band(h, 0.95, 0.1), band(h, 2.14, 0.12)), band(h, 0.05, 0.1));
  let lit =
    bulbs(s.uv.x, h - 2.14, 1, s.time, 344u) + bulbs(
      s.uv.x + 0.07,
      h - 0.95,
      -1,
      s.time,
      345u,
    );
  let warm = vec3f(1.0, 0.62, 0.22);
  let halo = exp(-abs(h - 2.14) * 9.0) + exp(-abs(h - 0.95) * 9.0);
  let albedo = mix(mix(lacquer, gilt, frame), gilt * 0.5, rail);
  let wall =
    Material(
      albedo,
      warm * (7.0 * lit) + albedo * warm * (0.8 * halo),
      mix(0.75, 0.55, max(frame, rail)),
      vec3f(0.0),
    );
  return embossed(s, wall, 2.0 * frame + 3.0 * rail + 0.1 * sheen, 0.005);
}

/// Squares of gold mirror in dark beading, a downlight in every third.
fn mirrored(s: Surf) -> Material {
  let pane = tiling(s.uv, 0.625, 0.03, 346u);
  let ripple = fbm(s.uv * 3.0 + pane.y * 20.0, 347u, 3);
  let q = repeated(s.uv, vec2f(0.625));
  let lozenge = stroke(abs(q.x) + abs(q.y) - 0.2, 0.012);
  let boss = inside(length(q) - 0.035);
  let gold =
    vec3f(0.2, 0.12, 0.025)
      * (0.6 + 0.6 * ripple)
      * (1.0 + 1.2 * max(lozenge, boss));
  let ceiling =
    Material(
      mix(vec3f(0.02, 0.012, 0.01), gold, pane.x),
      lampGlow(s, lamps()),
      0.6 * pane.x,
      vec3f(0.0),
    );
  return
    embossed(
      s,
      ceiling,
      pane.x + 0.6 * ripple + 2.0 * max(lozenge, boss),
      0.006,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return gilded(s);
    }
    case FLOOR, OWNED: {
      return swirled(s);
    }
    case CEILING: {
      return mirrored(s);
    }
    case TRIM: {
      let flute = 0.5 + 0.5 * cos(s.uv.x * 126.0);
      return
        embossed(
          s,
          polished(vec3f(0.035, 0.008, 0.012) * (0.6 + 0.6 * flute), 0.8),
          flute,
          0.004,
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),c3={name:"Gaming floor",air:i7(i6(1050120)),pillar:.03,dark:.02,sound:{footing:"carpet",hum:60,air:.2,echo:.5},decor:[{thing:"arcade-cabinet",perRoom:2},{thing:"armchair",perRoom:.8},{thing:"potted-plant",perRoom:.4},{thing:"floor-lamp",perRoom:.3},{thing:"mirror",perRoom:.4},{thing:"bin",perRoom:.2},{thing:"payphone",perRoom:.15}],shader:{...c1,needs:[...c1.needs,fm("casino",{lamp:[.75,.5,.26],ambient:[.008,.004,.004],grid:3,panel:[.2,.2],stutter:0,visibility:45,exposure:1.2,glow:.32,fringe:.006,vignette:.42,noise:.018})]}},c5=tO("cube/entities/theme/leisure/cinema-corridor/config/cinema-corridor",`
/// Deep red pile woven with gold rings that overlap, a gold lozenge in the
/// middle of each.
fn ringed(s: Surf) -> Material {
  let pitch = vec2f(0.3);
  let a = repeated(s.uv, pitch);
  let b = repeated(s.uv + 0.15, pitch);
  let rings =
    max(stroke(length(a) - 0.142, 0.01), stroke(length(b) - 0.142, 0.01));
  let lozenge = inside(abs(b.x) + abs(b.y) - 0.035);
  let pile = valueNoise(s.uv * 240.0, 11u);
  let red = carpet(s, vec3f(0.1, 0.008, 0.012));
  let gold =
    vec3f(0.22, 0.12, 0.02)
      * (0.6 + 0.5 * pile)
      * (0.8 + 0.3 * fbm(s.uv * 0.45, 5u, 3));
  let woven = mix(red, gold, max(rings, lozenge));
  return embossed(s, matte(woven), pile + 0.6 * max(rings, lozenge), 0.002);
}

/// The wash a wall light at \`at\` throws up and down the wall, 0 to 1.
fn sconceWash(at: vec2f) -> f32 {
  let spread = 0.06 + 0.3 * abs(at.y);
  return exp(-at.x * at.x / (spread * spread)) * exp(-abs(at.y) * 1.7);
}

/// Pleated velvet over a walnut dado with a brass rail, a wall light either
/// end of the wall and a strip of light where it meets the carpet.
fn draped(s: Surf) -> Material {
  let h = s.p.y;
  let fold = 0.5 + 0.5 * sin(s.uv.x * 57.0 + 1.4 * sin(h * 1.3 + s.uv.x * 3.0));
  let nap = valueNoise(vec2f(s.uv.x * 300.0, h * 40.0), 253u);
  let velvet =
    vec3f(0.09, 0.007, 0.016) * (0.3 + 0.8 * fold) * (0.8 + 0.35 * nap);
  let grain = fbm(vec2f(s.uv.x * 3.0, h * 60.0), 254u, 3);
  let walnut = vec3f(0.09, 0.04, 0.018) * (0.6 + 0.7 * grain);
  let dado = 1.0 - smoothstep(0.85, 0.854, h);
  let rail = band(h, 0.87, 0.035);
  let brass = vec3f(0.55, 0.36, 0.08);
  let strip = band(h, 0.045, 0.014);
  let warm = vec3f(1.0, 0.55, 0.2);
  let run = alongWall(s);
  let near = vec2f(min(abs(run - 0.75), abs(run - 4.25)), h - 1.7);
  let shade = inside(roundBox(near, vec2f(0.06, 0.09), 0.02));
  var albedo = mix(mix(velvet, walnut, dado), brass, max(rail, shade));
  let wash = sconceWash(near) * 3.0 + exp(-max(h - 0.045, 0.0) * 9.0) * 1.2;
  let glow = warm * (5.0 * strip + 2.5 * shade) + albedo * warm * wash;
  let wall =
    Material(albedo, glow, mix(mix(0.02, 0.45, dado), 0.8, rail), vec3f(0.0));
  return
    embossed(
      s,
      wall,
      mix(fold * 4.0, 1.0 + grain * 0.2, dado) + 3.0 * rail + 12.0 * shade,
      0.004,
    );
}

/// Black acoustic tiles, a small downlight let into each third of the room.
fn blacked(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.625, 0.012, 4u);
  let felt = valueNoise(s.uv * 90.0, 255u);
  let black =
    vec3f(0.022, 0.018, 0.017) * (0.7 + 0.5 * felt) * (0.9 + 0.1 * tile.y);
  return
    embossed(
      s,
      glowing(mix(vec3f(0.008), black, tile.x), lampGlow(s, lamps())),
      tile.x + 0.3 * felt,
      0.004,
    );
}

fn fluted(s: Surf) -> Material {
  let flute = 0.5 + 0.5 * cos(s.uv.x * 157.0);
  let cap = band(s.p.y, 0.1, 0.2) + band(s.p.y, ROOM.y - 0.1, 0.2);
  let brass = vec3f(0.3, 0.17, 0.035) * (0.4 + 0.7 * flute);
  return
    embossed(s, polished(brass, 0.75), flute * (1.0 - cap) + 2.0 * cap, 0.004);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return draped(s);
    }
    case FLOOR, OWNED: {
      return ringed(s);
    }
    case CEILING: {
      return blacked(s);
    }
    case TRIM: {
      return fluted(s);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),c4={name:"Cinema corridor",air:i7(i6(787716)),pillar:.03,dark:.08,sound:{footing:"carpet",hum:50,air:.1,echo:.35},decor:[{thing:"door",perRoom:1.2},{thing:"curtain",perRoom:.8},{thing:"exit-sign",perRoom:.5},{thing:"armchair",perRoom:.4},{thing:"bin",perRoom:.3},{thing:"vending-machine",perRoom:.15},{thing:"floor-lamp",perRoom:.15}],shader:{...c5,needs:[...c5.needs,fm("cinema-corridor",{lamp:[.55,.32,.15],ambient:[.006,.003,.002],grid:3,panel:[.13,.13],stutter:.05,visibility:40,exposure:1.25,glow:.3,fringe:.005,vignette:.45,noise:.022})]}},c6=tO("cube/entities/theme/leisure/glow-golf/config/glow-golf",`
const KERB_ORANGE = vec3f(1.0, 0.3, 0.02);
const UNLIT_BLACK = vec3f(0.006, 0.005, 0.012);

fn lamps() -> Lamps {
  return
    Lamps(
      vec3f(0.34, 0.1, 1.1),
      vec3f(0.004, 0.002, 0.012),
      2,
      vec2f(0.1, 1.2),
      0.05,
    );
}

fn dayglo(u: f32) -> vec3f {
  return
    oneOf(
      u,
      vec3f(1.0, 0.05, 0.5),
      vec3f(0.05, 0.8, 1.0),
      vec3f(1.0, 0.75, 0.03),
      vec3f(0.35, 1.0, 0.1),
    );
}

/// Turf: a fairway winding between orange kerbs, a cup in it now and then
/// with a white ring round it, rough either side.
fn turf(s: Surf) -> Material {
  let blade = valueNoise(s.uv * 300.0, 321u);
  let lie = fbm(s.uv * 0.4, 322u, 3) - 0.5;
  let fairway = inside(abs(lie) - 0.05);
  let kerb = stroke(abs(lie) - 0.058, 0.012);
  let spot = worley(s.uv * 0.45, 323u);
  let cup = inside(spot.x / 0.45 - 0.054) * fairway;
  let ring = stroke(spot.x / 0.45 - 0.16, 0.02) * fairway;
  var colour =
    mix(
      vec3f(0.012, 0.016, 0.03),
      vec3f(0.07, 0.5, 0.08),
      fairway,
    ) * (0.6 + 0.6 * blade);
  colour = mix(colour, KERB_ORANGE, kerb);
  colour = mix(colour, vec3f(0.6, 0.62, 0.7), ring);
  colour = mix(colour, vec3f(0.0), cup);
  return embossed(s, matte(colour), blade + 6.0 * kerb - 8.0 * cup, 0.002);
}

/// One thing of the night sky, painted about the middle of its cell.
fn body(p: vec2f, which: f32) -> f32 {
  let r = length(p);
  let a = atan2(p.y, p.x);
  if (which < 1.0) {
    let ringed =
      stroke(
        length(vec2f(p.x + p.y * 0.3, (p.y - p.x * 0.3) * 3.2)) - 0.33,
        0.035,
      );
    return
      max(
        inside(r - 0.19) * (0.55 + 0.45 * step(
          0.0,
          sin(p.y * 46.0 + 2.0 * p.x),
        )),
        ringed,
      );
  }
  if (which < 2.0) {
    return inside(r - (0.07 + 0.09 * pow(abs(cos(a * 2.5)), 3.0)));
  }
  if (which < 3.0) {
    return
      stroke(fract(log(max(r, 0.01)) * 1.3 + a / 6.2832) - 0.5, 0.3) * inside(
        r - 0.3,
      ) + inside(r - 0.04);
  }
  if (which < 4.0) {
    return
      inside(r - 0.18) * (1.0 - inside(length(p - vec2f(0.08, 0.04)) - 0.16));
  }
  let tail =
    inside(abs(p.y + p.x * 0.4) - 0.045 * smoothstep(0.35, -0.1, p.x))
      * step(-0.1, p.x)
      * step(p.x, 0.35);
  return max(inside(length(p + vec2f(0.1, -0.04)) - 0.06), 0.6 * tail);
}

/// A black wall with planets, stars, galaxies, moons and comets on it, and
/// a spatter of small stars between.
fn cosmos(s: Surf) -> Material {
  let size = vec2f(1.25, 1.1);
  let at = vec2f(s.uv.x, s.p.y + 0.2) / size;
  let word = cellHash(vec2i(floor(at)), 324u);
  let p = spun((fract(at) - 0.5) * size, (unitOf(word) - 0.5) * 0.9);
  let shape =
    body(p, unitOf(mix32(word)) * 6.0) * step(unitOf(mix32(word)), 0.84);
  let star = worley(vec2f(s.uv.x, s.p.y) * 14.0, 325u);
  let spatter =
    inside(star.x / 14.0 - 0.003 - 0.007 * star.y * star.y) * step(
      0.72,
      star.y,
    );
  let brush = 0.75 + 0.35 * valueNoise(vec2f(s.uv.x, s.p.y) * 60.0, 326u);
  let paint =
    dayglo(unitOf(mix32(word ^ 0x11u))) * shape * brush + dayglo(
      star.y * 3.0 - 2.0,
    )
      * spatter
      * (1.0 - shape);
  let kerb = band(s.p.y, 0.06, 0.12);
  return polished(mix(UNLIT_BLACK + 0.6 * paint, KERB_ORANGE, kerb), 0.1);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return cosmos(s);
    }
    case FLOOR, OWNED: {
      return turf(s);
    }
    case CEILING: {
      let star = worley(s.uv * 10.0, 327u);
      let spatter =
        inside(star.x / 10.0 - 0.004 - 0.008 * star.y * star.y) * step(
          0.8,
          star.y,
        );
      return
        glowing(
          UNLIT_BLACK + 0.6 * dayglo(star.y * 4.0 - 3.0) * spatter,
          lampGlow(s, lamps()),
        );
    }
    case TRIM: {
      let stripe = step(0.5, fract(s.p.y / 0.3));
      return polished(mix(vec3f(0.01), KERB_ORANGE, stripe), 0.3);
    }
    default: {
      return stuff(s);
    }
  }
}

/// The room under black light: what little the tubes show of it, and every
/// vivid paint shining back far more than it was given.
fn themeLight(s: Surf, m: Material) -> vec3f {
  let lit = roomLight(s, m, lamps());
  let reach = lampReach(s, normalize(s.normal + m.relief), 0.0, lamps());
  let top = max(m.albedo.r, max(m.albedo.g, m.albedo.b));
  let vivid =
    (top - min(m.albedo.r, min(m.albedo.g, m.albedo.b))) / max(top, 0.001);
  let shine =
    m.albedo * (vivid
      * vivid
      * (reach.x + 0.5 * reach.z)
      * 2.6
      * cornerShade(s));
  return haze(lit + shine, s, AIR, 45.0);
}

fn themeLens(l: Lens) -> vec3f {
  let seen = through(l, 0.45, 0.007) * 1.5;
  return tonemap(seen) * vignette(l, 0.45) + grain(l) * 0.02;
}
`,fs,a1,fl,fp,ff,fn,cK),c8=i7(i6(328206)),c7=tO("cube/entities/theme/leisure/gymnasium/config/gymnasium",`
/// Maple strip under varnish, and over it the courts of several games,
/// every room marked out the same.
fn court(s: Surf) -> Material {
  let board = slabs(s.uv.yx, vec2f(1.4, 0.057), 0.0012, 231u, 0.37);
  let grain = fbm(vec2f(s.uv.y * 3.0, s.uv.x * 90.0) + board.y * 30.0, 232u, 3);
  let near = fading(s, 50.0);
  let maple =
    vec3f(0.5, 0.32, 0.15)
      * (0.82 + 0.22 * board.y)
      * (0.8 + 0.3 * mix(0.5, grain, near));
  let q = fract(s.uv / ROOM.xz) * ROOM.xz;
  let white =
    max(
      stroke(q.x - 0.5, 0.05),
      stroke(length(q - vec2f(2.5, 2.5)) - 0.9, 0.05),
    );
  let red =
    max(
      stroke(length(q - vec2f(2.5, 2.5)) - 1.8, 0.05),
      stroke(q.y - 2.5, 0.05),
    );
  let arc = min(length(q - vec2f(2.5, 0.0)), length(q - vec2f(2.5, 5.0))) - 2.2;
  let yellow = max(stroke(arc, 0.04), stroke(q.x - 3.9, 0.04));
  let blue =
    max(
      stroke(roundBox(q - vec2f(2.5, 4.3), vec2f(0.9, 0.7), 0.0), 0.05),
      stroke(q.y - 1.2, 0.05),
    );
  let green = stroke(roundBox(q - vec2f(1.6, 2.5), vec2f(1.3, 2.2), 0.0), 0.04);
  let worn = 0.55 + 0.45 * fbm(s.uv * 1.1, 233u, 3);
  var colour = mix(maple, vec3f(0.03, 0.2, 0.08), green * worn);
  colour = mix(colour, vec3f(0.03, 0.09, 0.33), blue * worn);
  colour = mix(colour, vec3f(0.55, 0.42, 0.04), yellow * worn);
  colour = mix(colour, vec3f(0.42, 0.03, 0.025), red * worn);
  colour = mix(colour, vec3f(0.6, 0.6, 0.56), white * worn);
  let scuff = smoothstep(0.55, 0.8, fbm(s.uv * 1.7, 234u, 3));
  // Joints and grain finer than a pixel would shimmer: they fade with distance.
  let joint = mix(1.0, board.x, near);
  let floor = polished(colour * mix(0.45, 1.0, joint), 0.06 - 0.03 * scuff);
  return
    embossed(
      s,
      floor,
      2.0 * fbm(s.uv * 2.4, 235u, 3) + 0.3 * fbm(s.uv * 11.0, 230u, 2),
      0.003,
    );
}

/// Pine boards to shoulder height under a rail, painted block above.
fn boarded(s: Surf) -> Material {
  let h = s.p.y;
  let plank = slabs(vec2f(h, s.uv.x), vec2f(4.0, 0.09), 0.003, 236u, 0.0);
  let grain = fbm(vec2f(s.uv.x * 70.0, h * 2.0) + plank.y * 20.0, 237u, 3);
  let knot =
    smoothstep(0.045, 0.0, worley(vec2f(s.uv.x * 6.0, h * 1.5), 238u).x);
  let pine =
    vec3f(0.47, 0.27, 0.09)
      * (0.8 + 0.25 * plank.y)
      * (0.72 + 0.4 * grain)
      * (1.0 - 0.6 * knot);
  let block = slabs(s.uv, vec2f(0.4, 0.2), 0.012, 239u, 0.5);
  let pores = valueNoise(s.uv * 120.0, 240u);
  let paint =
    plaster(s, vec3f(0.5, 0.52, 0.4))
      * (0.9 + 0.1 * pores)
      * mix(0.7, 1.0, block.x);
  let low = 1.0 - smoothstep(1.4, 1.404, h);
  let rail = band(h, 1.43, 0.07);
  let skirt = 1.0 - smoothstep(0.12, 0.124, h);
  let wood =
    mix(
      pine * mix(0.4, 1.0, plank.x),
      vec3f(0.16, 0.08, 0.03) * (0.7 + 0.5 * grain),
      max(rail, skirt),
    );
  let wall =
    polished(mix(paint, wood, max(low, rail)), mix(0.3, 0.6, max(low, rail)));
  let height =
    mix(
      block.x + 0.15 * pores,
      plank.x + 0.3 * grain + 3.0 * max(rail, skirt),
      max(low, rail),
    );
  return embossed(s, wall, height, 0.003);
}

/// Wood-wool panels between steel purlins, the lamps behind wire.
fn caged(s: Surf) -> Material {
  let panel = tiling(s.uv, 1.25, 0.02, 241u);
  let strand = worley(s.uv * vec2f(60.0, 22.0), 242u).x;
  let wool =
    vec3f(0.5, 0.47, 0.38) * (0.6 + 0.5 * strand) * (0.92 + 0.08 * panel.y);
  let purlin = band(fract(s.uv.x / 2.5) * 2.5, 1.25, 0.14);
  let steel = vec3f(0.1, 0.16, 0.2);
  let wire = repeated(s.uv, vec2f(0.07));
  let cage = 1.0 - 0.75 * max(stroke(wire.x, 0.008), stroke(wire.y, 0.008));
  let albedo =
    mix(mix(vec3f(0.1), wool, panel.x), steel, purlin) * (1.0 - 0.25 * damp(s));
  let ceiling =
    Material(albedo, lampGlow(s, lamps()) * cage, 0.4 * purlin, vec3f(0.0));
  return
    embossed(
      s,
      ceiling,
      0.4 * strand * (1.0 - purlin) + panel.x - 3.0 * purlin,
      0.006,
    );
}

/// A post padded in blue to above head height.
fn padded(s: Surf) -> Material {
  let pad = 1.0 - smoothstep(1.8, 1.804, s.p.y);
  let seam = band(fract(s.p.y / 0.6) * 0.6, 0.3, 0.008);
  let vinyl =
    vec3f(0.03, 0.1, 0.32)
      * (0.9 + 0.2 * valueNoise(s.uv * 150.0, 243u))
      * (1.0 - 0.5 * seam);
  let post =
    polished(mix(vec3f(0.3, 0.31, 0.3), vinyl, pad), mix(0.5, 0.35, pad));
  return embossed(s, post, pad * (1.0 - seam), 0.006);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return boarded(s);
    }
    case FLOOR, OWNED: {
      return court(s);
    }
    case CEILING: {
      return caged(s);
    }
    case TRIM: {
      return padded(s);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),c9={name:"Gymnasium",air:i7(i6(1446411)),pillar:.03,dark:.03,sound:{footing:"wood",hum:100,air:.12,echo:2.6},decor:[{thing:"bench",perRoom:1},{thing:"chair-stack",perRoom:.5},{thing:"ladder",perRoom:.3},{thing:"traffic-cone",perRoom:.8},{thing:"mattress",perRoom:.4},{thing:"wall-clock",perRoom:.2},{thing:"door",perRoom:.3},{thing:"fire-extinguisher",perRoom:.2}],shader:{...c7,needs:[...c7.needs,fm("gymnasium",{lamp:[1.55,1.42,1.15],ambient:[.012,.011,.009],grid:2,panel:[.7,.7],stutter:.04,visibility:60,exposure:1,glow:.12,fringe:.004,vignette:.32,noise:.012})]}},ue=tO("cube/entities/theme/leisure/ice-rink/config/ice-rink",`
/// The arcs skates leave: each lattice cell a turn round its own point.
fn cut(uv: vec2f, scale: f32, salt: u32) -> f32 {
  let turn = worley(uv * scale, salt);
  return stroke(turn.x / scale - (0.12 + 0.3 * turn.y) / scale, 0.004);
}

/// Ice over the lines of a hockey rink, clouded where it froze fast and
/// scored where it was skated.
fn ice(s: Surf) -> Material {
  let q = fract(s.uv / ROOM.xz) * ROOM.xz;
  let mid = q - ROOM.xz * 0.5;
  let goalmouth =
    min(length(q - vec2f(2.5, 0.0)), length(q - vec2f(2.5, 5.0))) - 0.95;
  let red =
    max(
      max(stroke(mid.x, 0.3), stroke(length(mid) - 1.5, 0.06)),
      stroke(goalmouth, 0.05),
    );
  let blue = max(stroke(q.y - 4.1, 0.3), inside(length(mid) - 0.16));
  let crease = inside(goalmouth);
  let frost = fbm(s.uv * 1.3, 303u, 4);
  let clear = vec3f(0.5, 0.58, 0.62) * (0.8 + 0.35 * frost);
  var colour = mix(clear, vec3f(0.3, 0.5, 0.66), 0.5 * crease);
  colour = mix(colour, vec3f(0.03, 0.1, 0.45), 0.8 * blue);
  colour = mix(colour, vec3f(0.5, 0.03, 0.04), 0.8 * red);
  let cuts =
    max(
      max(cut(s.uv, 0.9, 304u), cut(s.uv + 3.3, 1.7, 305u)),
      cut(s.uv + 7.1, 0.45, 306u),
    );
  let snow = smoothstep(0.55, 0.9, fbm(s.uv * 3.0, 307u, 3));
  let scored =
    mix(colour, vec3f(0.66, 0.7, 0.72), max(0.75 * cuts, 0.5 * snow));
  let sheet = polished(scored, 0.72 * (1.0 - 0.6 * snow) * (1.0 - 0.7 * cuts));
  return
    embossed(
      s,
      sheet,
      2.0 * fbm(s.uv * 2.2, 308u, 3) - 0.6 * cuts + 0.5 * snow,
      0.003,
    );
}

/// Rows of seats in the dark, as far behind the glass as \`at\` was taken.
fn seats(at: vec2f) -> vec3f {
  let row = floor((at.y - 0.4) / 0.42);
  let seat =
    vec2f(fract(at.x / 0.5) - 0.5, fract((at.y - 0.4) / 0.42) - 0.45) * vec2f(
      0.5,
      0.42,
    );
  let back = inside(roundBox(seat, vec2f(0.2, 0.15), 0.06)) * step(0.0, row);
  let word =
    hashOf(bitcast<u32>(i32(floor(at.x / 0.5))), bitcast<u32>(i32(row)));
  let shell =
    mix(
      vec3f(0.012, 0.02, 0.06),
      vec3f(0.05, 0.012, 0.012),
      step(0.93, unitOf(word)),
    );
  return shell * back * exp(-max(row, 0.0) * 0.22);
}

/// White boards with a yellow kick plate and a blue rail, blocks of colour
/// where the sponsors went, and above the rail glass onto the stands.
fn boards(s: Surf) -> Material {
  let h = s.p.y;
  let bay = 2.5;
  let along = fract(s.uv.x / bay) * bay;
  let word = hashOf(bitcast<u32>(i32(floor(s.uv.x / bay))), 309u);
  if (h > 1.13) {
    let post = 1.0 - stroke(spaced(s.uv.x, 1.25), 1.21);
    let haze =
      0.012 + 0.03 * smoothstep(
        0.5,
        0.8,
        fbm(vec2f(s.uv.x, h) * 2.0, s.seed ^ 0x31u, 4),
      );
    let pane =
      Material(vec3f(haze), seats(behind(s, 3.0)) * 2.0, 0.94, vec3f(0.0));
    let metal = polished(vec3f(0.3, 0.31, 0.32), 0.5);
    if (post > 0.5) {
      return embossed(s, metal, 1.0, 0.02);
    }
    return pane;
  }
  let scuff = worley(vec2f(s.uv.x, h) * 7.0, 310u);
  let puck =
    smoothstep(0.03, 0.0, abs(scuff.x - 0.2))
      * step(0.6, scuff.y)
      * exp(-h / 0.5);
  let white =
    vec3f(0.6, 0.61, 0.6) * (0.92 + 0.08 * valueNoise(
      vec2f(s.uv.x * 3.0, h * 90.0),
      311u,
    ));
  let advert =
    inside(
      roundBox(vec2f(along - bay * 0.5, h - 0.63), vec2f(0.85, 0.27), 0.0),
    ) * step(0.4, unitOf(word));
  let ground =
    oneOf(
      unitOf(mix32(word)),
      vec3f(0.45, 0.03, 0.03),
      vec3f(0.03, 0.12, 0.4),
      vec3f(0.55, 0.42, 0.03),
      vec3f(0.03, 0.25, 0.12),
    );
  let emblem =
    max(
      inside(length(vec2f(along - bay * 0.5 + 0.5, h - 0.63)) - 0.14),
      inside(
        roundBox(
          vec2f(along - bay * 0.5 - 0.2, h - 0.63),
          vec2f(0.35, 0.05),
          0.0,
        ),
      ),
    );
  var colour = mix(white, mix(ground, vec3f(0.6), emblem), advert);
  colour = mix(colour, vec3f(0.015), 0.8 * puck);
  let seam = stroke(along - 0.002, 0.008);
  let kick = 1.0 - smoothstep(0.2, 0.204, h);
  let rail = smoothstep(1.06, 1.064, h);
  colour =
    mix(
      mix(colour, vec3f(0.6, 0.44, 0.03), kick),
      vec3f(0.03, 0.09, 0.34),
      rail,
    ) * (1.0 - 0.6 * seam);
  return
    embossed(
      s,
      polished(colour, 0.4 + 0.2 * rail),
      2.0 * rail + kick - seam - 0.5 * puck,
      0.006,
    );
}

/// A dark steel deck on trusses, the lamps hung in the squares between.
fn trussed(s: Surf) -> Material {
  let rib = smoothstep(0.25, 0.4, abs(fract(s.uv.y / 0.18) - 0.5));
  let web = repeated(s.uv, vec2f(2.5));
  let chord = max(stroke(web.x, 0.1), stroke(web.y, 0.1));
  let lace = stroke(abs(web.x) - abs(web.y), 0.03) * (1.0 - chord);
  let deck = vec3f(0.035, 0.045, 0.06) * (0.6 + 0.5 * rib);
  let steel = vec3f(0.11, 0.12, 0.13);
  let ceiling =
    glowing(mix(deck, steel, max(chord, lace)), lampGlow(s, lamps()));
  return embossed(s, ceiling, rib - 4.0 * chord - 2.0 * lace, 0.012);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return boards(s);
    }
    case FLOOR, OWNED: {
      return ice(s);
    }
    case CEILING: {
      return trussed(s);
    }
    case TRIM: {
      let pad = band(s.p.y, 0.6, 1.2);
      return
        polished(mix(vec3f(0.5, 0.5, 0.5), vec3f(0.45, 0.03, 0.03), pad), 0.4);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),ut={name:"Ice rink",air:i7(i6(2502196)),pillar:.02,dark:.05,sound:{footing:"tile",hum:120,air:.4,echo:2.8},decor:[{thing:"bench",perRoom:.8},{thing:"traffic-cone",perRoom:.6},{thing:"door",perRoom:.4},{thing:"wall-clock",perRoom:.2},{thing:"bin",perRoom:.2},{thing:"wet-floor-sign",perRoom:.2},{thing:"vending-machine",perRoom:.1}],shader:{...ue,needs:[...ue.needs,fm("ice-rink",{lamp:[1.2,1.33,1.46],ambient:[.012,.015,.018],grid:2,panel:[.45,.45],stutter:.02,visibility:34,exposure:1,glow:.22,fringe:.004,vignette:.3,noise:.012})]}},ua=tO("cube/entities/theme/leisure/indoor-pool/config/indoor-pool",`
fn lamps() -> Lamps {
  return
    Lamps(
      vec3f(1.05, 1.22, 1.22),
      vec3f(0.008, 0.013, 0.014),
      2,
      vec2f(1.0, 1.0),
      0.05,
    );
}

/// The water's height at a point of its surface, 0 to about 1.5.
fn ripple(p: vec2f, t: f32) -> f32 {
  return
    fbm(p * 1.5 + vec2f(t * 0.21, t * 0.13), 211u, 3) + 0.5 * fbm(
      p * 4.3 - vec2f(t * 0.3, -t * 0.17),
      215u,
      2,
    );
}

/// The pool's floor seen through a hand's depth of moving water.
fn water(s: Surf) -> Material {
  let depth = 0.3;
  let bent = refract(s.view, vec3f(0.0, 1.0, 0.0), 0.75);
  let sink = max(-bent.y, 0.2);
  let wobble =
    vec2f(
      valueNoise(s.uv * 5.0 + s.time * 0.4, 216u),
      valueNoise(s.uv * 5.0 - s.time * 0.35, 217u),
    ) - 0.5;
  let at = s.uv + bent.xz / sink * depth + wobble * 0.05;
  let tile = tiling(at, 0.1, 0.008, 212u);
  let lane = band(fract(at.x / 2.5) * 2.5, 1.25, 0.2);
  let pale = vec3f(0.5, 0.63, 0.62) * (0.9 + 0.1 * tile.y);
  let laid =
    mix(
      vec3f(0.2, 0.26, 0.27),
      mix(pale, vec3f(0.015, 0.04, 0.11), lane),
      tile.x,
    );
  let lit = laid * (0.7 + 1.3 * caustics(at, s.time));
  let seen = lit * exp(-(depth / sink) * vec3f(1.5, 0.3, 0.22));
  return embossed(s, polished(seen, 0.92), ripple(s.uv, s.time), 0.022);
}

fn tiled(s: Surf, size: f32) -> Material {
  let tile = tiling(s.uv, size, 0.006, 213u);
  let h = s.p.y;
  let upright = abs(s.normal.y) < 0.5;
  let stripe = select(0.0, band(h, 1.25, 0.2) + band(h, 0.05, 0.1), upright);
  let white = vec3f(0.6, 0.65, 0.63) * (0.88 + 0.12 * tile.y);
  let blue = vec3f(0.025, 0.15, 0.3) * (0.7 + 0.5 * tile.y);
  let scale =
    select(
      0.0,
      exp(-h / 0.14) * fbm(vec2f(s.uv.x * 6.0, h * 2.0), 214u, 3),
      upright,
    );
  let grout = vec3f(0.3, 0.33, 0.31) * (1.0 - 0.6 * damp(s));
  let glazed =
    mix(
      mix(white, blue, clamp(stripe, 0.0, 1.0)),
      vec3f(0.45, 0.4, 0.28),
      0.7 * scale,
    );
  let wall = polished(mix(grout, glazed, tile.x), 0.8 * tile.x * (1.0 - scale));
  return embossed(s, wall, tile.x * (1.0 + 0.4 * tile.y), 0.002);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL, TRIM: {
      return tiled(s, 0.1);
    }
    case FLOOR, OWNED: {
      return water(s);
    }
    case CEILING: {
      let m = tiled(s, 0.2);
      return Material(m.albedo, lampGlow(s, lamps()), m.gloss * 0.4, m.relief);
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  var colour = roomLight(s, m, lamps());
  if (s.kind == WALL || s.kind == TRIM || s.kind == CEILING) {
    let up = s.kind == CEILING;
    let air = lampReach(s, s.normal, 0.0, lamps()).z;
    let at = select(vec2f(s.uv.x, s.p.y * 1.4), s.uv * 0.8, up);
    let fall = select(exp(-s.p.y / 0.9), 0.22, up);
    colour +=
      m.albedo * lamps().colour * (air * fall * 0.55 * caustics(at, s.time));
  }
  return haze(colour, s, AIR, 32.0);
}

fn themeLens(l: Lens) -> vec3f {
  let seen = through(l, 0.2, 0.005) * 1.05;
  return tonemap(seen) * vignette(l, 0.3) + grain(l) * 0.012;
}
`,fs,a1,fl,fp,ff,fn,cK),ur=i7(i6(1715246)),us=tO("cube/entities/theme/leisure/mall-atrium/config/mall-atrium",`
fn stone(uv: vec2f, own: f32) -> vec3f {
  let cloud = fbm(uv * 1.3 + own * 17.0, 246u, 3);
  let vein =
    1.0 - smoothstep(
      0.0,
      0.07,
      abs(fbm(uv * 2.2 + cloud * 1.6 + own * 31.0, 247u, 4) - 0.5),
    );
  return
    mix(
      vec3f(0.56, 0.5, 0.4) * (0.86 + 0.2 * cloud),
      vec3f(0.27, 0.19, 0.12),
      0.65 * vein,
    );
}

/// Cream marble in big squares, a green diamond let in where four meet, a
/// red granite border round every room.
fn marbled(s: Surf) -> Material {
  let size = 0.8;
  let tile = tiling(s.uv, size, 0.004, 245u);
  let corner = repeated(s.uv + size * 0.5, vec2f(size));
  let diamond = inside(abs(corner.x) + abs(corner.y) - 0.11);
  let speckle = fbm(s.uv * 9.0, 248u, 3);
  let green = vec3f(0.015, 0.075, 0.05) * (0.6 + 0.8 * speckle);
  let q = fract(s.uv / ROOM.xz) * ROOM.xz;
  let border = stroke(roundBox(q - 2.5, vec2f(2.1), 0.0), 0.18);
  let red = vec3f(0.22, 0.06, 0.04) * (0.6 + 0.8 * worley(s.uv * 60.0, 250u).x);
  let laid = mix(mix(stone(s.uv, tile.y), green, diamond), red, border);
  let wear = fbm(s.uv * 0.8, 244u, 3);
  let floor = polished(laid * mix(0.45, 1.0, tile.x), 0.07 - 0.03 * wear);
  return
    embossed(s, floor, 2.0 * fbm(s.uv * 2.2, 243u, 3) + 0.4 * tile.y, 0.003);
}

/// A row of shops: stone piers, a steel shutter down between each pair and
/// a lit sign box over it with nothing on it.
fn shuttered(s: Surf) -> Material {
  let h = s.p.y;
  let bay = 2.5;
  let along = fract(s.uv.x / bay) * bay;
  let word = hashOf(bitcast<u32>(i32(floor(s.uv.x / bay))), 249u);
  let pier = 1.0 - smoothstep(0.16, 0.164, min(along, bay - along));
  let fascia = smoothstep(1.9, 1.904, h);
  let rib = sin(fract(h / 0.075) * 3.1416);
  let brushed = valueNoise(vec2f(s.uv.x * 5.0, h * 260.0), 251u);
  let slot = repeated(vec2f(s.uv.x, h), vec2f(0.045, 0.075));
  let punched =
    inside(roundBox(slot, vec2f(0.014, 0.006), 0.005)) * band(h, 1.25, 0.55);
  let foot = 1.0 - smoothstep(0.07, 0.074, h);
  let steel =
    vec3f(0.36, 0.38, 0.39) * (0.45 + 0.6 * rib) * (0.88 + 0.16 * brushed);
  let open = unitOf(word) < 0.2;
  let shop = select(vec3f(0.0), vec3f(1.6, 1.25, 0.8), open);
  let luck = unitOf(mix32(word));
  let trying = step(0.4, unitOf(hashOf(word, u32(s.time * 11.0))));
  let live = select(select(1.0, trying, luck < 0.22), 0.0, luck < 0.1);
  let tint =
    oneOf(
      unitOf(mix32(word ^ 0x9u)),
      vec3f(1.0, 0.82, 0.74),
      vec3f(0.7, 0.95, 1.0),
      vec3f(1.0, 0.95, 0.6),
      vec3f(0.78, 1.0, 0.8),
    );
  let signBox =
    roundBox(vec2f(along - bay * 0.5, h - 2.1), vec2f(1.0, 0.13), 0.0);
  let frame = max(stroke(signBox, 0.025), 1.0 - inside(signBox));
  let tubes = 0.75 + 0.25 * cos((along - bay * 0.5) * 9.0);
  let sign = tint * (1.5 * tubes * live * (1.0 - frame));
  var albedo =
    mix(mix(steel, vec3f(0.12, 0.125, 0.13), foot), vec3f(0.01), punched);
  var glow = shop * punched;
  var gloss = 0.5;
  var height = rib - punched + 2.0 * foot;
  if (fascia > 0.5) {
    albedo = mix(tint * 0.5, vec3f(0.05, 0.05, 0.055), frame);
    glow = sign;
    gloss = 0.6;
    height = 6.0 * frame + 3.0;
  }
  if (pier > 0.5) {
    albedo =
      stone(vec2f(s.uv.x, h) * 0.8, f32(word & 7u)) * mix(
        1.0,
        0.55,
        band(h, 1.9, 0.05) + foot,
      );
    glow = vec3f(0.0);
    gloss = 0.7;
    height = 8.0;
  }
  return embossed(s, Material(albedo, glow, gloss, vec3f(0.0)), height, 0.004);
}

/// White plaster stepping up to a skylight, its glazing bars across a sky
/// that is the same flat white in every room.
fn skylit(s: Surf) -> Material {
  let d = roundBox(s.p.xz - ROOM.xz * 0.5, vec2f(1.3), 0.0);
  let step1 = smoothstep(0.0, 0.02, d);
  let step2 = smoothstep(0.3, 0.32, d);
  let white =
    plaster(s, vec3f(0.56, 0.55, 0.5))
      * (0.72 + 0.14 * step1 + 0.14 * step2)
      * (1.0 - 0.3 * damp(s));
  let bar = repeated(s.p.xz - ROOM.xz * 0.5, vec2f(0.65));
  let bars = max(stroke(bar.x, 0.035), stroke(bar.y, 0.035));
  let sky = 0.55 + 0.6 * fbm(s.uv * 0.7, 252u, 4);
  let ceiling =
    glowing(
      mix(white, vec3f(0.3), bars * (1.0 - step1)),
      lampGlow(s, lamps())
        * vec3f(0.8, 0.92, 1.08)
        * (0.028 * sky * (1.0 - 0.9 * bars)),
    );
  return embossed(s, ceiling, step1 + step2, 0.04);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return shuttered(s);
    }
    case FLOOR, OWNED: {
      return marbled(s);
    }
    case CEILING: {
      return skylit(s);
    }
    case TRIM: {
      return polished(stone(s.uv * 0.8, 3.0), 0.7);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),ul={name:"Mall atrium",air:i7(i6(1710102)),pillar:.04,dark:.02,sound:{footing:"tile",hum:60,air:.3,echo:3},decor:[{thing:"potted-plant",perRoom:1.4},{thing:"bench",perRoom:.8},{thing:"bin",perRoom:.5},{thing:"mannequin",perRoom:.3},{thing:"vending-machine",perRoom:.2},{thing:"payphone",perRoom:.15},{thing:"wet-floor-sign",perRoom:.2},{thing:"shopping-cart",perRoom:.15}],shader:{...us,needs:[...us.needs,fm("mall-atrium",{lamp:[2.1,2.2,2.35],ambient:[.014,.014,.015],grid:1,panel:[2.6,2.6],stutter:0,visibility:80,exposure:1,glow:.16,fringe:.004,vignette:.3,noise:.012})]}},uo=tO("cube/entities/theme/leisure/metro-platform/config/metro-platform",`
/// Granite flags, and across every room the blistered yellow strip and the
/// white line of a platform's edge.
fn edged(s: Surf) -> Material {
  let flag = tiling(s.uv, 0.6, 0.005, 312u);
  let speck = worley(s.uv * 150.0, 313u);
  let granite =
    vec3f(0.19, 0.19, 0.2) * (0.6 + 0.9 * speck.x) * (0.88 + 0.14 * flag.y);
  let q = fract(s.uv.y / ROOM.z) * ROOM.z;
  let strip = band(q, 0.62, 0.4);
  let dome = repeated(s.uv, vec2f(0.05));
  let blister = smoothstep(0.02, 0.008, length(dome)) * strip;
  let worn = 0.55 + 0.45 * fbm(s.uv * vec2f(0.7, 3.0), 314u, 3);
  let line = band(q, 0.24, 0.08);
  let gum = smoothstep(0.02, 0.012, worley(s.uv * 2.5, 315u).x / 2.5);
  var colour =
    mix(
      granite * mix(0.45, 1.0, flag.x),
      vec3f(0.58, 0.42, 0.03) * (0.8 + 0.25 * blister),
      strip * worn,
    );
  colour = mix(colour, vec3f(0.55, 0.55, 0.52), line * worn);
  colour = mix(colour, vec3f(0.03), 0.8 * gum);
  let floor = polished(colour, 0.05 - 0.03 * strip);
  return
    embossed(
      s,
      floor,
      flag.x + 2.0 * blister + 1.5 * fbm(s.uv * 2.0, 316u, 3),
      0.002,
    );
}

/// What is left on a bill board: \`at\` is metres from the board's middle.
fn bills(at: vec2f, salt: u32) -> vec3f {
  let under = fbm(at * 2.4, salt, 4);
  let over = fbm(at * 3.1 + 9.0, salt ^ 0x5u, 4);
  let ink =
    oneOf(
      unitOf(mix32(salt)),
      vec3f(0.36, 0.14, 0.13),
      vec3f(0.14, 0.22, 0.33),
      vec3f(0.4, 0.33, 0.12),
      vec3f(0.15, 0.27, 0.17),
    );
  let ply =
    vec3f(0.16, 0.1, 0.05) * (0.7 + 0.5 * fbm(
      vec2f(at.x * 30.0, at.y * 2.0),
      salt ^ 0x6u,
      3,
    ));
  let lining =
    vec3f(0.5, 0.47, 0.38) * (0.85 + 0.2 * fbm(at * 14.0, salt ^ 0x7u, 3));
  // Where a sheet tore, the white of its back shows along the tear.
  let bill =
    mix(
      vec3f(0.6, 0.59, 0.55),
      ink * (0.7 + 0.6 * over),
      smoothstep(0.5, 0.53, over),
    );
  let pasted = mix(ply, lining, smoothstep(0.36, 0.38, under));
  return
    mix(
      pasted,
      bill,
      smoothstep(0.46, 0.48, over) * smoothstep(0.36, 0.38, under),
    );
}

/// Cream tiles over a maroon dado, soot down from the head of the wall, a
/// red enamel frieze of blank name plates, and a bill board either end.
fn enamelled(s: Surf) -> Material {
  let h = s.p.y;
  let tile = slabs(s.uv, vec2f(0.2, 0.1), 0.004, 317u, 0.5);
  let craze = 1.0 - 0.25 * smoothstep(0.05, 0.0, cellWalls(s.uv * 40.0, 318u));
  let dado = 1.0 - smoothstep(0.9, 0.904, h);
  let nosing = band(h, 0.925, 0.05);
  let glaze =
    mix(vec3f(0.5, 0.47, 0.35), vec3f(0.13, 0.028, 0.025), dado)
      * (0.85 + 0.2 * tile.y)
      * craze;
  let soot =
    smoothstep(
      0.3,
      0.8,
      fbm(vec2f(s.uv.x * 2.5, h * 0.4), s.seed ^ 0x19u, 4),
    ) * smoothstep(0.9, 2.3, h);
  var colour =
    mix(
      vec3f(0.12, 0.115, 0.1),
      mix(glaze, vec3f(0.01), nosing),
      tile.x,
    ) * (1.0 - 0.65 * soot);
  var gloss = 0.7 * tile.x * (1.0 - 0.7 * soot);
  var height = tile.x;
  let frieze = smoothstep(2.06, 2.064, h);
  let plate =
    inside(
      roundBox(vec2f(spaced(s.uv.x, 2.5), h - 2.18), vec2f(0.7, 0.075), 0.075),
    );
  if (frieze > 0.5) {
    colour =
      mix(
        vec3f(0.42, 0.02, 0.025),
        vec3f(0.6, 0.59, 0.54),
        plate,
      ) * (1.0 - 0.5 * soot);
    gloss = 0.75;
    height = 3.0 + plate;
  }
  let run = alongWall(s);
  let board = vec2f(min(abs(run - 0.85), abs(run - 4.15)), h - 1.45);
  let rim = roundBox(board, vec2f(0.55, 0.5), 0.0);
  if (rim < 0.0) {
    let side = select(0u, 1u, run > 2.5);
    colour =
      mix(
        bills(vec2f(run, h), s.seed ^ side),
        vec3f(0.02),
        1.0 - inside(rim + 0.03),
      ) * (1.0 - 0.4 * soot);
    gloss = 0.08;
    height = 4.0 - 2.0 * inside(rim + 0.03);
  }
  return embossed(s, polished(colour, gloss), height, 0.004);
}

/// A black soffit carrying its cables along the platform, tubes between.
fn cabled(s: Surf) -> Material {
  let q = fract(s.uv.y / 1.25) * 1.25;
  let cable =
    max(max(band(q, 0.2, 0.05), band(q, 0.29, 0.035)), band(q, 0.36, 0.05));
  let tray = band(q, 0.28, 0.3);
  let dust = fbm(s.uv * 5.0, 319u, 3);
  let soffit = vec3f(0.11, 0.105, 0.09) * (0.6 + 0.6 * dust);
  let run = mix(mix(soffit, vec3f(0.2, 0.2, 0.2), tray), vec3f(0.02), cable);
  return
    embossed(
      s,
      glowing(run * (1.0 - 0.4 * damp(s)), lampGlow(s, lamps())),
      -tray - 2.0 * cable + 0.2 * dust,
      0.02,
    );
}

/// A cast-iron column in dark green, riveted, with a cream head.
fn riveted(s: Surf) -> Material {
  let head = smoothstep(1.8, 1.804, s.p.y);
  let dot = repeated(vec2f(s.uv.x, s.p.y), vec2f(0.08, 0.3));
  let rivet = smoothstep(0.016, 0.01, length(dot));
  let chip = step(0.8, fbm(s.uv * 8.0, 320u, 3));
  let paint = mix(vec3f(0.02, 0.085, 0.05), vec3f(0.48, 0.45, 0.34), head);
  let iron = mix(paint, vec3f(0.07, 0.035, 0.02), chip * (1.0 - head));
  return
    embossed(
      s,
      polished(iron, 0.5 * (1.0 - chip)),
      rivet + band(s.p.y, 1.8, 0.06) - 0.3 * chip,
      0.006,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return enamelled(s);
    }
    case FLOOR, OWNED: {
      return edged(s);
    }
    case CEILING: {
      return cabled(s);
    }
    case TRIM: {
      return riveted(s);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),un={name:"Platform",air:i7(i6(921355)),pillar:.035,dark:.06,sound:{footing:"tile",hum:100,air:.7,echo:3.2},decor:[{thing:"bench",perRoom:1},{thing:"bin",perRoom:.5},{thing:"wall-clock",perRoom:.3},{thing:"payphone",perRoom:.2},{thing:"vending-machine",perRoom:.2},{thing:"exit-sign",perRoom:.3},{thing:"pipe",perRoom:.4},{thing:"fire-extinguisher",perRoom:.2}],shader:{...uo,needs:[...uo.needs,fm("metro-platform",{lamp:[1.25,1.42,1.15],ambient:[.02,.023,.018],grid:2,panel:[1.5,.12],stutter:.1,visibility:45,exposure:1.1,glow:.18,fringe:.006,vignette:.42,noise:.02})]}},ui=tO("cube/entities/theme/leisure/painted-sky/config/painted-sky",`
fn lamps() -> Lamps {
  return
    Lamps(
      vec3f(2.7, 2.4, 1.8),
      vec3f(0.07, 0.075, 0.085),
      1,
      vec2f(0.8, 0.8),
      0.0,
    );
}

/// A painter's clouds over \`at\`, 0 (sky) to 1 (the thick of one).
fn paintedCloud(at: vec2f, salt: u32) -> f32 {
  return smoothstep(0.58, 0.64, fbm(at, salt, 4));
}

/// Sky from a pale horizon up, cumulus at head height, two ranges of hills
/// with flowers on the nearer, all of it in emulsion that chips at the foot.
fn mural(s: Surf) -> Material {
  let h = s.p.y;
  let x = s.uv.x;
  let sky =
    mix(
      vec3f(0.5, 0.62, 0.68),
      vec3f(0.08, 0.26, 0.6),
      smoothstep(0.4, 2.3, h),
    );
  let puff = fbm(vec2f(x * 0.8, h * 1.9), 290u, 4) - 0.45 * abs(h - 1.6);
  let cloud = smoothstep(0.38, 0.43, puff);
  let lit =
    mix(
      vec3f(0.42, 0.44, 0.56),
      vec3f(0.74, 0.73, 0.68),
      smoothstep(0.38, 0.62, puff + 0.25 * (h - 1.6)),
    );
  let far = 0.72 + 0.1 * sin(x * 0.8 + 2.0) + 0.05 * sin(x * 2.3);
  let near = 0.42 + 0.13 * sin(x * 1.3) + 0.07 * sin(x * 3.1 + 1.0);
  let bloom = worley(vec2f(x, h) * 9.0, 291u);
  let flower =
    inside(bloom.x / 9.0 - 0.016)
      * step(0.5, bloom.y)
      * inside(h - near + 0.04);
  let petal =
    oneOf(
      bloom.y * 2.0 - 1.0,
      vec3f(0.6, 0.05, 0.04),
      vec3f(0.65, 0.5, 0.04),
      vec3f(0.7, 0.68, 0.62),
      vec3f(0.5, 0.1, 0.4),
    );
  var colour = mix(sky, lit, cloud);
  colour = mix(colour, vec3f(0.1, 0.27, 0.22), inside(h - far));
  colour =
    mix(
      colour,
      vec3f(0.12, 0.36, 0.06) * (0.8 + 0.4 * smoothstep(near - 0.3, near, h)),
      inside(h - near),
    );
  colour = mix(colour, petal, flower);
  let brush = valueNoise(vec2f(x * 14.0, h * 130.0), 292u);
  let chipped =
    step(
      0.9,
      fbm(vec2f(x, h) * 6.0, s.seed ^ 0x93u, 3) + 0.22 * exp(-h / 0.35),
    );
  let coat =
    mix(colour * (0.9 + 0.14 * brush), vec3f(0.36, 0.35, 0.32), chipped);
  return
    embossed(
      s,
      polished(coat, 0.14 * (1.0 - chipped)),
      0.5 * brush - chipped,
      0.002,
    );
}

/// More sky overhead, and round every lamp a sun with its rays painted on.
fn sunned(s: Surf) -> Material {
  let p = s.p.xz - ROOM.xz * 0.5;
  let r = length(p);
  let disc = inside(r - 0.42);
  let wave = 0.06 * sin(atan2(p.y, p.x) * 3.0 + f32(s.seed & 7u));
  let ray =
    step(0.5, fract(atan2(p.y, p.x) * 14.0 / 6.2832))
      * inside(r - 0.98 - wave)
      * (1.0 - inside(r - 0.5));
  let cloud = paintedCloud(s.uv * 0.7, 294u);
  let sky = mix(vec3f(0.07, 0.22, 0.55), vec3f(0.7, 0.7, 0.68), 0.9 * cloud);
  let brush = valueNoise(s.uv * vec2f(120.0, 14.0), 295u);
  let paint = mix(sky, vec3f(0.72, 0.52, 0.04), ray) * (0.9 + 0.14 * brush);
  let level = lampLevel(s, vec2i(0), litOf(s), 0.0);
  return
    embossed(
      s,
      glowing(paint, lamps().colour * (2.2 * disc * level)),
      0.5 * brush,
      0.002,
    );
}

/// Poured rubber crumb: terracotta, with a blue river, green banks and
/// yellow stepping stones laid into it.
fn crumbed(s: Surf) -> Material {
  let crumb = worley(s.uv * 95.0, 296u);
  let lie = fbm(s.uv * 0.33, 297u, 3);
  let river = stroke(lie - 0.5, 0.07);
  let bank = smoothstep(0.64, 0.645, lie);
  let stone = worley(s.uv * 1.1, 298u);
  let step_ = inside(stone.x / 1.1 - 0.16) * step(0.55, stone.y);
  var colour = vec3f(0.3, 0.07, 0.04);
  colour = mix(colour, vec3f(0.05, 0.25, 0.07), bank);
  colour = mix(colour, vec3f(0.03, 0.13, 0.42), river);
  colour = mix(colour, vec3f(0.62, 0.45, 0.03), step_);
  let fleck = mix(0.7, 1.25, crumb.y) * (0.7 + 0.5 * crumb.x);
  return embossed(s, matte(colour * fleck), crumb.x, 0.002);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return mural(s);
    }
    case FLOOR, OWNED: {
      return crumbed(s);
    }
    case CEILING: {
      return sunned(s);
    }
    case TRIM: {
      let stripe = step(0.5, fract((s.p.y + s.uv.x * 0.6) / 0.4));
      return
        polished(
          mix(vec3f(0.6, 0.45, 0.03), vec3f(0.5, 0.04, 0.03), stripe),
          0.55,
        );
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  return haze(roomLight(s, m, lamps()), s, AIR, 70.0);
}

/// How sharply the scene's depth breaks at \`uv\`: 0 across a flat face, 1
/// at an outline or a fold.
fn outline(uv: vec2f, by: vec2f) -> f32 {
  let here = 1.0 / max(sceneAt(uv).a, 0.05);
  let east = 1.0 / max(sceneAt(uv + vec2f(by.x, 0.0)).a, 0.05);
  let west = 1.0 / max(sceneAt(uv - vec2f(by.x, 0.0)).a, 0.05);
  let south = 1.0 / max(sceneAt(uv + vec2f(0.0, by.y)).a, 0.05);
  let north = 1.0 / max(sceneAt(uv - vec2f(0.0, by.y)).a, 0.05);
  let bend = abs(east + west - 2.0 * here) + abs(south + north - 2.0 * here);
  return smoothstep(0.012, 0.05, bend / here);
}

/// The frame as a picture book prints it: flat washes in a few steps of
/// light, an ink line round every thing, the paper showing through.
fn themeLens(l: Lens) -> vec3f {
  let seen = tonemap((sceneAt(l.uv).rgb + glowAt(l.uv) * 0.1) * 1.05);
  let light = max(dot(seen, vec3f(0.3, 0.59, 0.11)), 0.02);
  let stepped = (floor(light * 7.0) + 0.5) / 7.0;
  let wash = mix(seen, seen * (stepped / light), 0.7);
  let wobble =
    (vec2f(
      valueNoise(l.pixel * 0.03, 299u),
      valueNoise(l.pixel * 0.03, 300u),
    ) - 0.5) * 3.0;
  let ink = outline(l.uv + wobble / l.size, 1.6 / l.size);
  let tooth =
    0.93
      + 0.07 * valueNoise(l.pixel * 0.7, 301u)
      + 0.03 * valueNoise(l.pixel * 0.05, 302u);
  return
    mix(wash, vec3f(0.07, 0.05, 0.1), 0.88 * ink) * tooth * vignette(l, 0.18);
}
`,fs,a1,fp,ff,fn,cK,fo),uf=i7(i6(1844272)),uc=tO("cube/entities/theme/leisure/supermarket/config/supermarket",`
/// Waxed vinyl tiles, a red line down every aisle and the grey of trolley
/// wheels along it.
fn waxed(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.3, 0.002, 255u);
  let speck = valueNoise(s.uv * 170.0, 256u);
  let odd = step(0.8, tile.y);
  let pale =
    mix(
      vec3f(0.52, 0.52, 0.46),
      vec3f(0.4, 0.43, 0.42),
      odd,
    ) * (0.9 + 0.12 * speck);
  let line = stroke(fract(s.uv.y / ROOM.z) * ROOM.z - 2.5, 0.1);
  let wheels =
    smoothstep(0.45, 0.75, fbm(vec2f(s.uv.x * 0.3, s.uv.y * 5.0), 257u, 3));
  let laid =
    mix(
      pale,
      vec3f(0.42, 0.03, 0.025),
      line * (0.6 + 0.4 * speck),
    ) * (1.0 - 0.3 * wheels);
  let near = fading(s, 80.0);
  let floor =
    polished(
      laid * (0.72 * mix(1.0, mix(0.6, 1.0, tile.x), near)),
      0.08 - 0.05 * wheels,
    );
  return
    embossed(s, floor, 2.0 * fbm(s.uv * 2.6, 258u, 3) + 0.3 * tile.y, 0.003);
}

/// A product's colour by its number in [0, 1): most loud, some white.
fn branded(u: f32) -> vec3f {
  let loud = 0.5 + 0.5 * cos(6.2832 * (u * 7.0 + vec3f(0.0, 0.33, 0.67)));
  return
    mix(
      loud * loud * 0.75 + 0.02,
      vec3f(0.6, 0.58, 0.5),
      step(0.8, fract(u * 13.0)),
    );
}

/// Five shelves of goods from the plinth to above head height: packets in
/// facings of one kind, gaps where something sold, a price rail under each.
fn shelved(s: Surf) -> Material {
  let h = s.p.y;
  let pitch = 0.36;
  let level = floor((h - 0.15) / pitch);
  let y = h - 0.15 - level * pitch;
  let tier = u32(max(level, 0.0)) + 1u;
  let width = 0.065 + 0.1 * unitOf(hashOf(tier, 259u));
  let slot = s.uv.x / width;
  let word = hashOf(bitcast<u32>(i32(floor(slot))), tier * 977u);
  let facing = hashOf(bitcast<u32>(i32(floor(slot / 6.0))), tier * 613u);
  let tall = 0.17 + 0.13 * unitOf(mix32(facing));
  let x = (fract(slot) - 0.5) * width;
  let sold =
    unitOf(word) < 0.1 + 0.25 * step(0.85, unitOf(mix32(facing ^ 0x3u)));
  let packet =
    inside(
      roundBox(
        vec2f(x, y - 0.03 - tall * 0.5),
        vec2f(width * 0.5 - 0.004, tall * 0.5),
        0.006,
      ),
    );
  let stocked = packet * f32(!sold);
  let colour = branded(unitOf(facing));
  let label = band(y, 0.03 + tall * 0.55, tall * 0.3);
  let mark =
    inside(length(vec2f(x, y - 0.03 - tall * 0.55)) - min(width, tall) * 0.16);
  let print =
    mix(
      mix(colour, vec3f(0.62, 0.6, 0.52), label),
      branded(unitOf(facing) + 0.37),
      mark,
    );
  let depth =
    vec3f(0.035, 0.036, 0.04) * (0.25 + 0.75 * smoothstep(pitch, 0.05, y));
  let rail = 1.0 - smoothstep(0.028, 0.03, y);
  let tag =
    inside(roundBox(vec2f(x, y - 0.014), vec2f(0.022, 0.009), 0.0)) * rail;
  let offer = step(0.9, unitOf(mix32(word)));
  let ticket =
    mix(vec3f(0.6, 0.6, 0.56), vec3f(0.65, 0.5, 0.03), offer) * (1.0 - 0.6
      * step(0.5, fract(x * 260.0))
      * step(abs(x), 0.014));
  let edge = mix(vec3f(0.45, 0.46, 0.46), ticket, tag);
  var albedo = mix(mix(depth, print, stocked), edge, rail);
  var gloss = mix(0.05, 0.4, stocked);
  var height = 3.0 * stocked + 5.0 * rail;
  if (h < 0.15) {
    albedo = vec3f(0.05, 0.05, 0.055);
    gloss = 0.3;
    height = 4.0;
  } else if (h > 1.95) {
    let red = band(h, 2.1, 0.12);
    albedo =
      mix(plaster(s, vec3f(0.55, 0.55, 0.52)), vec3f(0.45, 0.03, 0.025), red);
    gloss = 0.15;
    height = 6.0;
  }
  return embossed(s, polished(albedo, gloss), height, 0.006);
}

/// A white steel deck in ribs, the tubes hung under it in long lines.
fn decked(s: Surf) -> Material {
  let rib = smoothstep(0.25, 0.4, abs(fract(s.uv.x / 0.15) - 0.5));
  let dust = fbm(s.uv * 3.0, 260u, 3);
  let white = vec3f(0.5, 0.51, 0.5) * (0.93 + 0.06 * rib) * (0.85 + 0.2 * dust);
  return
    embossed(
      s,
      glowing(white * (1.0 - 0.3 * damp(s)), lampGlow(s, lamps())),
      rib,
      0.003,
    );
}

/// A white post, its foot in a guard of black and yellow.
fn guarded(s: Surf) -> Material {
  let guard = 1.0 - smoothstep(0.9, 0.904, s.p.y);
  let slash = step(0.5, fract((s.uv.x + s.p.y) / 0.24));
  let chipped = step(0.72, fbm(s.uv * 9.0, 261u, 3)) * guard;
  let warning = mix(vec3f(0.62, 0.45, 0.02), vec3f(0.02), slash);
  let post =
    mix(
      plaster(s, vec3f(0.5, 0.5, 0.48)),
      mix(warning, vec3f(0.3, 0.3, 0.3), chipped),
      guard,
    );
  return
    embossed(
      s,
      polished(post, 0.2 + 0.3 * guard),
      3.0 * guard - chipped,
      0.003,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return shelved(s);
    }
    case FLOOR, OWNED: {
      return waxed(s);
    }
    case CEILING: {
      return decked(s);
    }
    case TRIM: {
      return guarded(s);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),uu={name:"Supermarket, 3 am",air:i7(i6(1184790)),pillar:.03,dark:.05,sound:{footing:"tile",hum:120,air:.45,echo:1.1},decor:[{thing:"shopping-cart",perRoom:1.2},{thing:"cardboard-box",perRoom:.9},{thing:"wet-floor-sign",perRoom:.3},{thing:"crate",perRoom:.4},{thing:"bin",perRoom:.2},{thing:"ladder",perRoom:.15},{thing:"exit-sign",perRoom:.15},{thing:"balloon",perRoom:.1}],shader:{...uc,needs:[...uc.needs,fm("supermarket",{lamp:[1.02,1.15,1.25],ambient:[.012,.014,.016],grid:2,panel:[.16,2.2],stutter:.12,visibility:55,exposure:1.05,glow:.14,fringe:.005,vignette:.3,noise:.014})]}},uh=tO("cube/entities/theme/leisure/underpass/config/underpass",`
/// Concrete flags, and the water lying wherever they have sunk.
fn puddled(s: Surf) -> Material {
  let flag = slabs(s.uv, vec2f(0.9, 0.6), 0.014, 270u, 0.5);
  let grit = valueNoise(s.uv * 130.0, 271u);
  let stain = fbm(s.uv * 0.9, 272u, 4);
  let concrete =
    vec3f(0.2, 0.19, 0.17)
      * (0.7 + 0.25 * flag.y + 0.2 * grit)
      * (0.65 + 0.6 * stain);
  let sunk = fbm(s.uv * 0.5, 273u, 4);
  let pool = smoothstep(0.5, 0.58, sunk + 0.06 * flag.y);
  let soaked = smoothstep(0.38, 0.5, sunk);
  let laid = concrete * mix(0.35, 1.0, flag.x) * (1.0 - 0.45 * soaked);
  let floor =
    polished(
      mix(laid, laid * 0.35, pool),
      mix(0.1 + 0.25 * soaked, 0.96, pool),
    );
  let ripple = fbm(s.uv * 3.0 + s.time * 0.05, 274u, 2);
  return
    embossed(
      s,
      floor,
      mix(1.5 * flag.x + 0.5 * grit + 3.0 * stain, 0.25 * ripple, pool),
      0.004,
    );
}

/// Sprayed lines, 0 to 1: the paths a can took over the wall.
fn sprayed(at: vec2f, salt: u32) -> f32 {
  let path = fbm(at, salt, 3) - 0.5;
  return 1.0 - smoothstep(0.008, 0.028, abs(path));
}

/// Glazed tiles in courses, a green band at the waist and the foot, grime
/// down from the ceiling, tiles gone here and there, and a tag to a wall.
fn grimed(s: Surf) -> Material {
  let h = s.p.y;
  let tile = slabs(s.uv, vec2f(0.15, 0.075), 0.005, 275u, 0.5);
  let green =
    clamp(band(h, 1.2, 0.15) + (1.0 - smoothstep(0.3, 0.304, h)), 0.0, 1.0);
  let glaze =
    mix(
      vec3f(0.47, 0.42, 0.28),
      vec3f(0.03, 0.12, 0.07),
      green,
    ) * (0.85 + 0.2 * tile.y);
  let run = fbm(vec2f(s.uv.x * 3.0, h * 0.35), s.seed ^ 0x76u, 4);
  let grime =
    clamp(
      smoothstep(0.35, 0.8, run) * smoothstep(0.4, 2.3, h) + 0.5 * exp(
        -h / 0.25,
      ),
      0.0,
      1.0,
    );
  let gone =
    step(0.86, tile.y) * smoothstep(
      0.5,
      0.6,
      fbm(s.uv * 0.8, s.seed ^ 0x77u, 3),
    );
  let sand = valueNoise(s.uv * 90.0, 276u);
  let mortar = vec3f(0.17, 0.16, 0.14) * (0.7 + 0.5 * sand);
  let spot = vec2f(s.uv.x, h);
  let area =
    smoothstep(0.5, 0.62, fbm(spot * 0.45, s.seed ^ 0x78u, 2)) * band(
      h,
      1.2,
      1.3,
    );
  let tag =
    max(
      sprayed(spot * 1.5, s.seed ^ 0x79u),
      sprayed(spot * 3.4 + 9.0, s.seed ^ 0x7au),
    ) * area;
  let can =
    oneOf(
      unitOf(mix32(s.seed ^ 0x7bu)),
      vec3f(0.015),
      vec3f(0.4, 0.02, 0.02),
      vec3f(0.5, 0.5, 0.52),
      vec3f(0.03, 0.1, 0.4),
    );
  let dirty = mix(glaze, glaze * vec3f(0.3, 0.22, 0.12), grime);
  let faced = mix(mix(mortar, dirty, tile.x), mortar, gone);
  let wall =
    polished(
      mix(faced, can, 0.85 * tag),
      0.75 * tile.x * (1.0 - gone) * (1.0 - 0.8 * grime) * (1.0 - tag),
    );
  return embossed(s, wall, tile.x * (1.0 - gone) + 0.2 * sand * gone, 0.004);
}

/// Concrete that still shows the boards it was poured against, rust under
/// the lamp and lime where the joints leak.
fn boardMarked(s: Surf) -> Material {
  let plank = slabs(s.uv, vec2f(2.4, 0.14), 0.006, 277u, 0.5);
  let grain = fbm(vec2f(s.uv.x * 1.5, s.uv.y * 55.0) + plank.y * 9.0, 278u, 3);
  let lime =
    smoothstep(
      0.6,
      0.85,
      fbm(vec2f(s.uv.x * 0.6, s.uv.y * 5.0), 279u, 4),
    ) * (1.0 - plank.x * 0.6);
  let grey =
    vec3f(0.15, 0.15, 0.15) * (0.85 + 0.15 * plank.y) * (0.88 + 0.16 * grain);
  let poured =
    mix(
      grey * mix(0.5, 1.0, plank.x),
      vec3f(0.4, 0.38, 0.32),
      0.6 * lime,
    ) * (1.0 - 0.6 * damp(s));
  return
    embossed(
      s,
      glowing(poured, lampGlow(s, lamps())),
      plank.x + 0.6 * grain + lime,
      0.006,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return grimed(s);
    }
    case FLOOR, OWNED: {
      return puddled(s);
    }
    case CEILING: {
      return boardMarked(s);
    }
    case TRIM: {
      let rust =
        smoothstep(0.5, 0.75, fbm(vec2f(s.uv.x * 8.0, s.p.y * 1.2), 280u, 4));
      let foot = 1.0 - smoothstep(0.3, 0.304, s.p.y);
      let post = mix(vec3f(0.19, 0.18, 0.16), vec3f(0.03, 0.1, 0.06), foot);
      return
        embossed(
          s,
          polished(mix(post, vec3f(0.2, 0.07, 0.02), 0.7 * rust), 0.15),
          rust,
          0.003,
        );
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,cK,ff),ud={name:"Underpass",air:i7(i6(1839109)),pillar:.035,dark:.2,sound:{footing:"wet",hum:100,air:.55,echo:2.4},decor:[{thing:"drain",perRoom:.8},{thing:"pipe",perRoom:.8},{thing:"bin",perRoom:.3},{thing:"traffic-cone",perRoom:.3},{thing:"shopping-cart",perRoom:.2},{thing:"cardboard-box",perRoom:.5},{thing:"mattress",perRoom:.15},{thing:"payphone",perRoom:.1}],shader:{...uh,needs:[...uh.needs,fm("underpass",{lamp:[3.4,1.75,.42],ambient:[.008,.004,.001],grid:1,panel:[.5,.22],stutter:.3,visibility:24,exposure:1.15,glow:.3,fringe:.007,vignette:.5,noise:.03})]}},um=tO("cube/entities/theme/workplace/stencil/lib/stencil",`
/// Metres along a wall from its left end, as someone in its room facing it
/// reads it: unlike \`s.uv.x\` it is never mirrored and starts at the corner.
fn wallAlong(s: Surf) -> f32 {
  let right = vec2f(s.normal.z, -s.normal.x);
  return dot(s.p.xz, right) + select(0.0, ROOM.x, right.x + right.y < 0.0);
}

/// Metres from a floor's point to the nearest closed wall of its room; 9
/// in a room with none.
fn wallInset(s: Surf) -> f32 {
  let toSide = toSides(s);
  var inset = 9.0;
  for (var side = 0u; side < 4u; side++) {
    if (closedAt(s, side)) {
      inset = min(inset, toSide[side]);
    }
  }
  return inset;
}

/// How far \`p\` is from the stroke between \`a\` and \`b\`.
fn strokeTo(p: vec2f, a: vec2f, b: vec2f) -> f32 {
  let along = clamp(dot(p - a, b - a) / dot(b - a, b - a), 0.0, 1.0);
  return length(p - mix(a, b, along));
}

/// 1 on the paint of digit \`n\` stencilled into the box x 0..1, y 0..2 (y
/// up), 0 off it: seven strokes with the stencil's bridges between them.
fn stencilDigit(p: vec2f, n: u32) -> f32 {
  if (p.x < -0.2 || p.x > 1.2 || p.y < -0.2 || p.y > 2.2) {
    return 0.0;
  }
  // Strokes lit per digit: top, the right pair, bottom, the left pair, middle.
  var lit =
    array<u32, 10>(
      0x3fu,
      0x06u,
      0x5bu,
      0x4fu,
      0x66u,
      0x6du,
      0x7du,
      0x07u,
      0x7fu,
      0x6fu,
    );
  var starts =
    array<vec2f, 7>(
      vec2f(0.0, 2.0),
      vec2f(1.0, 2.0),
      vec2f(1.0, 1.0),
      vec2f(0.0, 0.0),
      vec2f(0.0, 0.0),
      vec2f(0.0, 1.0),
      vec2f(0.0, 1.0),
    );
  var ends =
    array<vec2f, 7>(
      vec2f(1.0, 2.0),
      vec2f(1.0, 1.0),
      vec2f(1.0, 0.0),
      vec2f(1.0, 0.0),
      vec2f(0.0, 1.0),
      vec2f(0.0, 2.0),
      vec2f(1.0, 1.0),
    );
  let strokes = lit[n % 10u];
  var near = 9.0;
  for (var i = 0u; i < 7u; i++) {
    if (((strokes >> i) & 1u) == 0u) {
      continue;
    }
    let bridge = normalize(ends[i] - starts[i]) * 0.16;
    near = min(near, strokeTo(p, starts[i] + bridge, ends[i] - bridge));
  }
  let soft = clamp(fwidth(p.x), 0.002, 0.2);
  return 1.0 - smoothstep(0.1 - soft, 0.1 + soft, near);
}

/// 1 on every other stripe of a slanted hazard band, stripes \`pitch\` apart.
fn hazard(at: vec2f, pitch: f32) -> f32 {
  let stripe = fract((at.x + at.y) / pitch);
  let soft = clamp(fwidth(at.x + at.y) / pitch, 0.002, 0.5);
  return
    smoothstep(0.5 - soft, 0.5 + soft, stripe) * (1.0 - smoothstep(
      1.0 - soft,
      1.0,
      stripe,
    ));
}
`,fs),up=tO("cube/entities/theme/workplace/conference-hotel/config/conference-hotel",`
fn lamps() -> Lamps {
  return
    Lamps(
      vec3f(1.5, 1.02, 0.56),
      vec3f(0.006, 0.004, 0.002),
      2,
      vec2f(0.2, 0.2),
      0.04,
    );
}

/// Where the wall lights hang: metres up, and along from either end of a wall.
const SCONCE = vec2f(1.25, 1.66);

/// From the nearer wall light to the point on its wall: x along, y up.
fn fromSconce(s: Surf) -> vec2f {
  let along = wallAlong(s);
  return vec2f(min(along, ROOM.x - along) - SCONCE.x, s.p.y - SCONCE.y);
}

fn woven(s: Surf) -> Material {
  // Tufts blur every edge of the pattern by a tuft.
  let tuft = valueNoise(s.uv * 110.0, 141u);
  let q = s.uv / 0.9;
  let c = fract(q) - 0.5;
  let r = length(c) + 0.012 * (tuft - 0.5);
  let a = atan2(c.y, c.x);
  let k = fract(q + 0.5) - 0.5;
  let rk = length(k) + 0.012 * (tuft - 0.5);
  let ak = atan2(k.y, k.x);
  let soft = clamp(fwidth(q.x) + fwidth(q.y), 0.004, 0.2);

  let vine =
    sin(q.x * 12.566 + 1.6 * sin(q.y * 12.566)) * sin(
      q.y * 12.566 + 1.6 * sin(q.x * 12.566),
    );
  let scroll = smoothstep(-soft * 6.0, soft * 6.0, vine - 0.25);
  let rosette = 1.0 - smoothstep(-soft, soft, r - 0.25 - 0.07 * cos(a * 8.0));
  let heart =
    1.0 - smoothstep(-soft, soft, r - 0.1 - 0.03 * cos(a * 8.0 + 3.1416));
  let ring =
    1.0 - smoothstep(
      0.016 - soft,
      0.016 + soft,
      abs(r - 0.4 - 0.015 * cos(a * 16.0)),
    );
  let knot = 1.0 - smoothstep(-soft, soft, rk - 0.09 - 0.05 * cos(ak * 4.0));
  let trellis =
    1.0 - smoothstep(
      0.012 - soft,
      0.012 + soft,
      abs(abs(k.x) + abs(k.y) - 0.27),
    );

  let wine = vec3f(0.1, 0.012, 0.022);
  let navy = vec3f(0.016, 0.02, 0.06);
  let gold = vec3f(0.3, 0.19, 0.055);
  let teal = vec3f(0.012, 0.075, 0.075);
  let cream = vec3f(0.33, 0.27, 0.17);
  var yarn = mix(wine, navy, scroll);
  yarn = mix(yarn, cream, max(ring, trellis));
  yarn = mix(yarn, gold, max(rosette, knot));
  yarn = mix(yarn, teal, heart);

  // Along every wall there is, a border: navy between two gold lines.
  let inset = wallInset(s);
  let border = 1.0 - smoothstep(0.42, 0.43, inset);
  let lines =
    clamp(band(inset, 0.42, 0.035) + band(inset, 0.3, 0.02), 0.0, 1.0);
  yarn = mix(mix(yarn, navy, border), gold, lines);

  let trodden = fbm(s.uv * 0.5, 142u, 3);
  let pile = yarn * (0.66 + 0.5 * tuft) * (0.8 + 0.35 * trodden);
  return embossed(s, matte(pile), tuft + 0.4 * (rosette + ring), 0.002);
}

/// 1 on a damask's figure, 0 on its ground: a leafed spade in every cell
/// of a half-drop lattice.
fn damask(at: vec2f) -> f32 {
  let column = floor(at.x);
  let c =
    vec2f(
      abs(fract(at.x) - 0.5),
      fract(at.y + 0.5 * (column - 2.0 * floor(column * 0.5))) - 0.5,
    );
  let soft = clamp(fwidth(at.x) + fwidth(at.y), 0.004, 0.25);
  let lift = c.y + 0.5;
  let spade =
    0.34
      * pow(sin(3.1416 * lift), 0.7)
      * (0.55 + 0.45 * sin(3.1416 * lift * 1.5));
  let leafed = sin(c.x * 34.0 - c.y * 16.0) * sin(c.y * 30.0 + c.x * 9.0);
  let body =
    smoothstep(-soft, soft, spade - c.x) * smoothstep(
      -soft * 4.0,
      soft * 4.0,
      leafed + 0.45,
    );
  let stem = 1.0 - smoothstep(0.012 - soft, 0.012 + soft, c.x);
  let bud =
    1.0 - smoothstep(
      -soft,
      soft,
      length(vec2f(c.x, c.y - 0.42) * vec2f(1.0, 0.7)) - 0.05,
    );
  return clamp(max(body, max(stem * step(0.0, c.y), bud)), 0.0, 1.0);
}

fn papered(s: Surf) -> Material {
  let h = s.p.y;
  let along = wallAlong(s);
  let fine = valueNoise(s.uv * 150.0, 143u);
  let age = fbm(s.uv * 0.6, s.seed ^ 0x90u, 4);

  // Paper: a satin figure on a matt ground, with the seams of its drops.
  let figure = damask(vec2f(along / 0.44, h / 0.62));
  let drop = 1.0 - smoothstep(0.0, 0.004, abs(spaced(along, 0.53)));
  let ground =
    vec3f(0.4, 0.29, 0.13) * (0.82 + 0.3 * age) * (0.95 + 0.08 * fine);
  let paper =
    mix(ground, ground * vec3f(0.74, 0.66, 0.52), figure)
      * (1.0 - 0.25 * drop)
      * (1.0 - 0.4 * damp(s));

  // Mahogany below the rail: a raised panel to every five-eighths of a metre.
  let x = fract(along / 0.625) * 0.625;
  let edge = min(min(x, 0.625 - x) - 0.075, min(h - 0.2, 0.86 - h));
  let field =
    smoothstep(0.0, 0.03, edge) * (1.0 - 0.35 * smoothstep(0.03, 0.06, edge));
  let groove = 1.0 - smoothstep(0.0, 0.006, abs(edge));
  let grain =
    fbm(vec2f(along * 50.0 + floor(along / 0.625) * 7.0, h * 1.3), 144u, 3);
  let wood =
    vec3f(0.15, 0.045, 0.022) * (0.55 + 0.75 * grain) * (1.0 - 0.6 * groove);
  let low = 1.0 - smoothstep(0.93, 0.934, h);
  let rail = band(h, 0.96, 0.07);
  let skirting = 1.0 - smoothstep(0.13, 0.134, h);

  // Plaster cornice over it all, two beads and a cove.
  let high = smoothstep(2.1, 2.104, h);
  let cove = smoothstep(2.1, 2.3, h);
  let beads = band(h, 2.125, 0.03) + band(h, 2.19, 0.02);
  let plasterwork = vec3f(0.5, 0.44, 0.33) * (0.85 + 0.2 * age);

  // The wall light: a brass plate and a frosted half-shade.
  let off = fromSconce(s);
  let plate =
    (1.0 - smoothstep(0.045, 0.05, abs(off.x))) * band(off.y, -0.1, 0.24);
  let shade =
    1.0 - smoothstep(
      0.0,
      0.008,
      length(
        vec2f(off.x, max(off.y, 0.0) * 0.6 + min(off.y, 0.0) * 1.3),
      ) - 0.085,
    );
  let brass = vec3f(0.5, 0.32, 0.08) * (0.7 + 0.4 * fine);
  let ribbed = 0.8 + 0.2 * cos(off.x * 6.2832 / 0.014);
  let glow =
    vec3f(2.6, 1.55, 0.6) * (shade
      * ribbed
      * (1.0 - smoothstep(-0.02, 0.12, off.y) * 0.5));

  var albedo = mix(mix(paper, wood, low), plasterwork, high);
  albedo =
    mix(
      albedo,
      vec3f(0.12, 0.035, 0.018) * (0.6 + 0.6 * grain),
      clamp(rail + skirting, 0.0, 1.0),
    );
  albedo = mix(mix(albedo, brass, plate), vec3f(0.5, 0.45, 0.35), shade);
  let gloss =
    mix(
      mix(mix(0.04 + 0.3 * figure, 0.55, low), 0.1, high),
      0.75,
      plate * (1.0 - shade),
    );
  let height =
    mix(0.1 * figure, field - 0.5 * groove + 0.1 * grain, low)
      + 1.5 * rail * (1.0 - smoothstep(0.0, 0.035, abs(h - 0.96)))
      + skirting
      + high * (1.5 * cove + 0.6 * beads)
      + 2.0 * plate
      + 6.0 * shade;
  return embossed(s, Material(albedo, glow, gloss, vec3f(0.0)), height, 0.006);
}

fn coffered(s: Surf) -> Material {
  let c = repeated(s.p.xz, vec2f(2.5));
  let d = max(abs(c.x), abs(c.y));
  let r = length(c);
  let age = fbm(s.uv * 0.9, s.seed ^ 0x91u, 4);
  // A beam between coffers, stepped down to each in two mouldings.
  let beam = smoothstep(1.0, 1.035, d);
  let step1 = smoothstep(0.84, 0.875, d);
  let gilt = band(d, 0.935, 0.03);
  let rose = band(r, 0.3, 0.035) + band(r, 0.2, 0.012);
  let cream =
    vec3f(0.5, 0.43, 0.31)
      * (0.8 + 0.25 * age)
      * (1.0 - 0.12 * step1 - 0.1 * beam);
  let can = 1.0 - smoothstep(0.1, 0.108, r);
  let trim = band(r, 0.125, 0.035);
  let level = lampLevel(s, vec2i(0), litOf(s), lamps().stutter);
  let glow = lamps().colour * (GLARE * can * level);
  var albedo =
    mix(cream, vec3f(0.42, 0.3, 0.12), 0.6 * gilt) * (1.0 - 0.5 * damp(s));
  albedo = mix(albedo, vec3f(0.5, 0.48, 0.42), trim);
  let height = -(0.55 * step1 + 0.45 * beam) + 0.06 * rose + 0.03 * age;
  return
    embossed(
      s,
      Material(albedo, glow, 0.25 * gilt + 0.4 * trim, vec3f(0.0)),
      height,
      0.3,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return papered(s);
    }
    case FLOOR, OWNED: {
      return woven(s);
    }
    case CEILING: {
      return coffered(s);
    }
    case TRIM: {
      // A column cased in the wainscot's mahogany, plaster above.
      let grain = fbm(vec2f(s.uv.x * 50.0, s.p.y * 1.3), 145u, 3);
      let wood = vec3f(0.15, 0.045, 0.022) * (0.55 + 0.75 * grain);
      let low = 1.0 - smoothstep(0.93, 0.934, s.p.y);
      let plasterwork =
        vec3f(0.5, 0.44, 0.33) * (0.9 + 0.15 * fbm(s.uv * 2.0, 146u, 3));
      return polished(mix(plasterwork, wood, low), mix(0.08, 0.55, low));
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  var colour = roomLight(s, m, lamps());
  if (s.kind == WALL) {
    // A wall light washes its own wall, up and down from the shade.
    let off = fromSconce(s);
    let spread = 0.16 + 0.55 * abs(off.y);
    let wash =
      exp(-off.x * off.x / (spread * spread)) / (1.0 + 7.0 * off.y * off.y);
    colour += m.albedo * vec3f(1.3, 0.78, 0.3) * (wash * cornerShade(s));
  }
  return haze(colour, s, AIR, 42.0);
}

fn themeLens(l: Lens) -> vec3f {
  let seen = through(l, 0.2, 0.005) * 1.1;
  return
    tonemap(seen) * vec3f(1.03, 1.0, 0.94) * vignette(l, 0.42) + grain(
      l,
    ) * 0.016;
}
`,fs,a1,fl,fp,um,ff,fn),uv=i7(i6(1708040)),ug=tO("cube/entities/theme/workplace/open-plan/config/open-plan",`
fn carpetTiles(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.5, 0.004, 21u);
  let at = vec2i(floor(s.uv / 0.5));
  let turned = f32((at.x + at.y) & 1);
  let blue =
    vec3f(0.045, 0.075, 0.115) * (0.85 + 0.25 * turned) * (0.9 + 0.2 * tile.y);
  let pile = valueNoise(s.uv * 240.0, 11u);
  return
    embossed(
      s,
      matte(carpet(s, blue) * mix(0.55, 1.0, tile.x)),
      pile + tile.x,
      0.0015,
    );
}

fn papered(s: Surf) -> Material {
  let stripe = band(fract(s.uv.x / 0.12) * 0.12, 0.06, 0.012);
  let sage = plaster(s, vec3f(0.3, 0.37, 0.25)) * (1.0 - 0.22 * stripe);
  let stained = mix(sage, sage * vec3f(0.6, 0.5, 0.3), damp(s));
  let skirting = 1.0 - smoothstep(0.1, 0.104, s.p.y);
  let wall =
    polished(
      mix(stained, vec3f(0.025, 0.025, 0.025), skirting),
      mix(0.08, 0.5, skirting),
    );
  let weave = valueNoise(s.uv * vec2f(260.0, 90.0), 22u);
  return embossed(s, wall, stripe + 0.3 * weave + 4.0 * skirting, 0.0012);
}

fn gridCeiling(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.625, 0.024, 4u);
  let fleck = fbm(s.uv * 40.0, 6u, 2);
  let white = vec3f(0.5, 0.51, 0.46) * (0.85 + 0.2 * fleck);
  let bar = vec3f(0.42, 0.42, 0.4);
  let albedo = mix(bar, white, tile.x) * (1.0 - 0.55 * damp(s));
  let ceiling =
    Material(albedo, lampGlow(s, lamps()), 0.3 * (1.0 - tile.x), vec3f(0.0));
  return embossed(s, ceiling, 0.3 * fleck - tile.x, 0.008);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return papered(s);
    }
    case FLOOR, OWNED: {
      return carpetTiles(s);
    }
    case CEILING: {
      return gridCeiling(s);
    }
    case TRIM: {
      return polished(plaster(s, vec3f(0.36, 0.36, 0.33)), 0.2);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),ub={name:"Open plan",air:i7(i6(1053455)),pillar:.03,dark:0,sound:{footing:"carpet",hum:120,air:.3,echo:.5},decor:[{thing:"desk",perRoom:1.2},{thing:"office-chair",perRoom:1.5},{thing:"cubicle-screen",perRoom:.8},{thing:"filing-cabinet",perRoom:.5},{thing:"water-cooler",perRoom:.25},{thing:"copier",perRoom:.25},{thing:"bin",perRoom:.5},{thing:"vent",perRoom:.5}],shader:{...ug,needs:[...ug.needs,fm("open-plan",{lamp:[1.2,1.34,1.22],ambient:[.009,.011,.01],grid:2,panel:[.6,1.2],stutter:0,visibility:45,exposure:1,glow:.12,fringe:.005,vignette:.35,noise:.016})]}},uw=tO("cube/entities/theme/workplace/parking-level/config/parking-level",`
/// 1 on an arrow painted along x, a metre and a bit long, pointing east.
fn arrowMark(at: vec2f) -> f32 {
  let soft = clamp(fwidth(at.x) + fwidth(at.y), 0.003, 0.2);
  let shaft =
    (1.0 - smoothstep(0.07, 0.07 + soft, abs(at.y)))
      * smoothstep(-0.6 - soft, -0.6, at.x)
      * (1.0 - smoothstep(0.1, 0.1 + soft, at.x));
  let head =
    (1.0 - smoothstep(0.0, soft, abs(at.y) - (0.6 - at.x) * 0.48)) * smoothstep(
      0.1 - soft,
      0.1,
      at.x,
    );
  return clamp(shaft + head, 0.0, 1.0);
}

fn tarmac(s: Surf) -> Material {
  let stones = valueNoise(s.uv * 150.0, 91u);
  let patchy = fbm(s.uv * 0.55, 92u, 4);
  let ground =
    vec3f(0.07, 0.07, 0.074) * (0.65 + 0.5 * stones) * (0.7 + 0.6 * patchy);

  // Two bays a room against its north side, the lane along its south.
  let depth = 3.3;
  let bay = i32(floor(s.p.x / 2.5));
  let toLine = abs(fract(s.p.x / 2.5 + 0.5) - 0.5) * 2.5;
  let soft = clamp(fwidth(s.p.x) + fwidth(s.p.z), 0.003, 0.3);
  let sides =
    (1.0 - smoothstep(0.05, 0.05 + soft, toLine)) * (1.0 - smoothstep(
      depth,
      depth + soft,
      s.p.z,
    ));
  let wear = smoothstep(0.3, 0.55, fbm(s.uv * 4.0, 93u, 3) + 0.3 * stones);
  let white = sides * wear;

  let cell = vec2i(s.cell);
  let count = u32(cell.x * 2 + bay + cell.y * 34);
  let middle = (f32(bay) + 0.5) * 2.5;
  // Read from the lane, looking north.
  let figure = vec2f(s.p.x - middle + 0.3, 3.1 - s.p.z) / 0.22;
  let digits =
    stencilDigit(figure, (count / 10u) % 10u) + stencilDigit(
      figure - vec2f(1.6, 0.0),
      count,
    );
  let turned = select(1.0, -1.0, (hashOf(u32(cell.y), 0x94u) & 1u) == 0u);
  let arrow = arrowMark(vec2f((s.p.x - 2.5) * turned, s.p.z - 4.15));
  let yellow = clamp(digits + arrow, 0.0, 1.0) * wear;

  // What cars left: a dark pool in most bays, rubber along the lane.
  let dripAt = vec2f(s.p.x - middle, s.p.z - 1.5) / vec2f(0.5, 0.8);
  let dripping = step(0.35, unitOf(hashOf(count, s.seed)));
  let oil =
    dripping * smoothstep(
      1.2,
      0.2,
      length(dripAt) + 0.9 * fbm(s.uv * 2.5, 95u, 3),
    );
  let tyres =
    smoothstep(
      0.55,
      0.75,
      fbm(vec2f(s.uv.x * 0.35, s.uv.y * 9.0), 96u, 3),
    ) * smoothstep(depth - 0.2, depth + 0.4, s.p.z);
  let wet = smoothstep(0.56, 0.62, fbm(s.uv * 0.38, 97u, 2));

  var albedo = mix(ground, vec3f(0.5, 0.49, 0.45), 0.8 * white);
  albedo = mix(albedo, vec3f(0.55, 0.36, 0.03), 0.8 * yellow);
  albedo *= (1.0 - 0.7 * oil) * (1.0 - 0.5 * tyres) * (1.0 - 0.45 * wet);
  let gloss = max(max(0.1 + 0.15 * patchy, 0.6 * oil), 0.93 * wet);
  return
    embossed(
      s,
      polished(albedo, gloss),
      (0.4 * stones + 0.6 * patchy)
        * (1.0 - oil)
        * (1.0 - smoothstep(0.46, 0.58, fbm(s.uv * 0.38, 97u, 2))),
      0.0015,
    );
}

fn levelWall(s: Surf) -> Material {
  let h = s.p.y;
  let along = wallAlong(s);
  let pour = fbm(s.uv * 0.8, s.seed ^ 0xa1u, 4);
  let pores = valueNoise(s.uv * 70.0, 0xa2u);
  let joint = min(abs(fract(s.uv.x / 1.25 + 0.5) - 0.5) * 1.25, abs(h - 1.2));
  let groove = 1.0 - smoothstep(0.004, 0.014, joint);
  let paint =
    vec3f(0.42, 0.4, 0.35) * (0.72 + 0.4 * pour) * (0.94 + 0.08 * pores);

  let stripe = smoothstep(1.3, 1.304, h) * (1.0 - smoothstep(1.8, 1.804, h));
  let blue = vec3f(0.035, 0.11, 0.36) * (0.8 + 0.35 * pour);
  let flaked = smoothstep(0.35, 0.5, fbm(s.uv * 6.0, 0xa3u, 3) + 0.2 * pores);
  let figure = stencilDigit(vec2f(along - 0.55, h - 1.36) / 0.19, 5u) * flaked;
  let chevrons = (1.0 - smoothstep(0.34, 0.344, h)) * flaked;
  let warning =
    mix(vec3f(0.02), vec3f(0.55, 0.38, 0.03), hazard(vec2f(along, h), 0.36));

  // Exhaust browns a wall from the top; bumpers black it at their height;
  // salts weep white out of its joints.
  let soot = smoothstep(0.9, 2.3, h) * (0.35 + 0.4 * pour);
  let smear = fbm(vec2f(s.uv.x * 1.4, h * 26.0), 0xa4u, 3);
  let bumped = band(h, 0.52, 0.16) * smoothstep(0.45, 0.7, smear);
  let run = fbm(vec2f(s.uv.x * 5.0, h * 0.5), s.seed ^ 0xa5u, 3);
  let salts =
    smoothstep(0.6, 0.78, run) * smoothstep(1.25, 0.2, h) * (1.0 - chevrons);

  var albedo = mix(paint, blue, stripe);
  albedo = mix(albedo, vec3f(0.5, 0.49, 0.45), 0.85 * figure);
  albedo = mix(albedo, warning, chevrons);
  albedo = mix(albedo, vec3f(0.5, 0.48, 0.44), 0.55 * salts);
  albedo *= (1.0 - 0.5 * groove) * (1.0 - soot) * (1.0 - 0.8 * bumped);
  let wall = polished(albedo, 0.05 + 0.25 * stripe + 0.3 * chevrons);
  return
    embossed(
      s,
      wall,
      0.3 * pores + 0.5 * pour - 2.0 * groove + 0.4 * salts,
      0.003,
    );
}

fn ribbedDeck(s: Surf) -> Material {
  // Precast ribs a metre and a quarter apart, the tubes hung between them.
  let rib = abs(spaced(s.p.x, 1.25));
  let web = 1.0 - smoothstep(0.06, 0.2, rib);
  let mottle = fbm(s.uv * 1.6, 0xa6u, 4);
  let concrete =
    vec3f(0.27, 0.26, 0.235)
      * (0.6 + 0.5 * mottle)
      * (0.4 + 0.6 * web)
      * (1.0 - 0.6 * damp(s));
  // A sprinkler main under the ribs, and the conduit that feeds the tubes.
  let main = (s.p.z - 2.5) / 0.04;
  let pipe = 1.0 - smoothstep(0.9, 1.0, abs(main));
  let round = sqrt(max(1.0 - main * main, 0.0));
  let coupling = band(fract(s.uv.x / 2.5) * 2.5, 1.25, 0.1);
  let red =
    vec3f(0.13, 0.014, 0.011) * (0.25 + 0.75 * round) * (1.0 - 0.3 * coupling);
  let feed = (s.p.z - 1.25) / 0.016;
  let conduit = (1.0 - smoothstep(0.8, 1.0, abs(feed))) * (1.0 - web);
  let glow = lampGlow(s, lamps());
  var albedo =
    mix(
      concrete,
      vec3f(0.3, 0.31, 0.32) * (0.4 + 0.6 * sqrt(max(1.0 - feed * feed, 0.0))),
      conduit,
    );
  albedo = mix(albedo, red, pipe);
  let deck = Material(albedo, glow, 0.35 * pipe, vec3f(0.0));
  return embossed(s, deck, web * (1.0 - pipe) + 0.04 * mottle, 0.5);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return levelWall(s);
    }
    case FLOOR, OWNED: {
      return tarmac(s);
    }
    case CEILING: {
      return ribbedDeck(s);
    }
    case TRIM: {
      // A column wears the level's colours where a bumper would find it.
      let pour = fbm(s.uv * vec2f(5.0, 1.0), 0xa7u, 4);
      let concrete = vec3f(0.36, 0.35, 0.31) * (0.6 + 0.5 * pour);
      let guard = 1.0 - smoothstep(0.9, 0.904, s.p.y);
      let stripes =
        mix(
          vec3f(0.02),
          vec3f(0.55, 0.38, 0.03),
          hazard(vec2f(s.uv.x, s.p.y), 0.3),
        );
      let ring = band(s.p.y, 1.55, 0.5);
      let dressed =
        mix(
          mix(concrete, vec3f(0.035, 0.11, 0.36), ring),
          stripes,
          guard * step(0.3, pour),
        );
      return polished(dressed, 0.25 * max(guard, ring));
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,um,ff),ux={name:"Parking level",air:i7(i6(1314054)),pillar:.045,dark:.22,sound:{footing:"concrete",hum:120,air:.4,echo:3.8},decor:[{thing:"traffic-cone",perRoom:.5},{thing:"shopping-cart",perRoom:.15},{thing:"pipe",perRoom:.6},{thing:"drain",perRoom:.5},{thing:"exit-sign",perRoom:.3},{thing:"fire-extinguisher",perRoom:.3},{thing:"barrel",perRoom:.1},{thing:"payphone",perRoom:.05}],shader:{...uw,needs:[...uw.needs,fm("parking-level",{lamp:[1.75,1.1,.48],ambient:[.012,.008,.004],grid:2,panel:[.12,1.3],stutter:.25,visibility:30,exposure:1.05,glow:.22,fringe:.006,vignette:.45,noise:.024})]}},uy=tO("cube/entities/theme/workplace/reception/config/reception",`
fn terrazzo(s: Surf) -> Material {
  let chips = worley(s.uv * 34.0, 7u);
  let chip = 1.0 - smoothstep(0.24, 0.3, chips.x);
  let pale = vec3f(0.5, 0.46, 0.38);
  let dark = vec3f(0.06, 0.05, 0.045);
  let rust = vec3f(0.3, 0.12, 0.07);
  let tone =
    mix(mix(pale, dark, step(0.5, chips.y)), rust, step(0.88, chips.y));
  let ground =
    vec3f(0.2, 0.18, 0.155) * (0.9 + 0.2 * valueNoise(s.uv * 7.0, 8u));
  let strip = tiling(s.uv, 1.25, 0.012, 9u).x;
  let brass = vec3f(0.5, 0.34, 0.1);
  let worn = fbm(s.uv * 0.7, 10u, 3);
  let floor =
    polished(mix(brass, mix(ground, tone, chip), strip), 0.55 + 0.35 * worn);
  return embossed(s, floor, fbm(s.uv * 2.5, 11u, 3), 0.004);
}

fn panelled(s: Surf) -> Material {
  let h = s.p.y;
  let rough = fbm(s.uv * 22.0, 12u, 3);
  let cream = plaster(s, vec3f(0.52, 0.47, 0.36));
  let green = vec3f(0.035, 0.1, 0.07) * (0.92 + 0.16 * rough);
  let oak =
    vec3f(0.2, 0.1, 0.045) * (0.6 + 0.6 * fbm(
      vec2f(s.uv.x * 2.0, h * 70.0),
      13u,
      3,
    ));
  let dado = 1.0 - smoothstep(0.98, 0.984, h);
  let rail = clamp(band(h, 1.02, 0.08) + band(h, 0.06, 0.12), 0.0, 1.0);
  let albedo = mix(mix(cream, green, dado), oak, rail);
  let wall = polished(albedo, mix(mix(0.04, 0.4, dado), 0.5, rail));
  return embossed(s, wall, rough * 0.15 + rail, 0.012);
}

fn tiled(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.625, 0.016, 4u);
  let pin = step(0.72, valueNoise(s.uv * 110.0, 5u));
  let white =
    vec3f(0.58, 0.56, 0.5) * (0.93 + 0.07 * tile.y) * (1.0 - 0.3 * pin);
  let albedo =
    mix(vec3f(0.16, 0.155, 0.14), white, tile.x) * (1.0 - 0.5 * damp(s));
  // The panels are off: milky diffusers, a shade duller than the tiles.
  let panel = lampMask(s.p.xz, 2, vec2f(1.2));
  let prisms = 0.92 + 0.08 * tiling(s.uv, 0.012, 0.004, 6u).x;
  let ceiling =
    polished(
      mix(albedo, vec3f(0.33, 0.34, 0.33) * prisms, panel),
      0.45 * panel,
    );
  return embossed(s, ceiling, (tile.x - 0.2 * pin) * (1.0 - panel), 0.006);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return panelled(s);
    }
    case FLOOR, OWNED: {
      return terrazzo(s);
    }
    case CEILING: {
      return tiled(s);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),uk={name:"Reception",air:i7(i6(1512463)),pillar:.03,dark:0,sound:{footing:"tile",hum:100,air:.15,echo:1.6},decor:[{thing:"potted-plant",perRoom:2},{thing:"bench",perRoom:1},{thing:"wall-clock",perRoom:1},{thing:"notice-board",perRoom:1}],shader:{...uy,needs:[...uy.needs,(B={ambient:[.022,.02,.019],shrubs:[{at:[4.415,.4252],draw:.9588},{at:[.441,.585],draw:.8749}],boxes:[{min:[.1,0,3.42],max:[.5,.42,3.47]},{min:[.09,.42,2.075],max:[.21,.46,3.575]},{min:[.23,.42,2.075],max:[.35,.46,3.575]},{min:[.37,.42,2.075],max:[.49,.46,3.575]},{min:[.07,.58,2.075],max:[.1,.68,3.575]},{min:[.07,.74,2.075],max:[.1,.84,3.575]},{min:[.1,.42,3.42],max:[.14,.86,3.47]}],floor:[.27,.24,.2],walls:[.26,.26,.19],visibility:70,exposure:1.5,glow:.14,fringe:.004,vignette:.3,noise:.012},P=(function(M,L=1.25){let R=tB*tG.height*M[0]/128,O=new Map;for(let R of Array.from({length:128},(M,L)=>{let R=Math.floor(L/8);return[tW,tG.height*(R+.5)/16,tG.from+tB*(L%8+.5)/8]})){let A=function(M,L){let R;for(let O of t$){let A=(M[O.axis]-O.plane)/L[O.axis];A>0&&A<(R?.run??1/0)&&(R={end:O,run:A})}return R}(R,M);if(void 0===A)continue;let{axis:E,facing:T}=A.end,I=tM(R,M,-A.run),z=0===E?I[2]:I[0],_=`${T.join(",")}/${String(Math.floor(z/L))}`,{sum:N,rays:D}=O.get(_)??{sum:[0,0,0],rays:0};O.set(_,{sum:tM(N,I),rays:D+1,facing:T})}return[...O.values()].map(({sum:M,rays:L,facing:O})=>({middle:tL(M,1/L),facing:O,flux:L*R}))})(t2).map(({middle:M,facing:L,flux:R})=>{let O=L[1]>.5?B.floor:B.walls,A=[O[0]*R*t5[0],O[1]*R*t5[1],O[2]*R*t5[2]];return`Bounce(${tA(M)}, ${tA(L)}, ${tA(A)})`}),H=B.shrubs.map(({at:[M,L],draw:R})=>{let[O,,A]=tD([M,0,L],5);return`vec3f(${O.toFixed(4)}, ${A.toFixed(4)}, ${R.toFixed(4)})`}),F=(G=B.boxes.map(({min:M,max:L})=>`Slab(${tA(M)}, ${tA(L)})`)).length>0?G:["Slab(vec3f(-9.0), vec3f(-9.0))"],tO("reception/sunlit",`
/// A part of a thing standing in the beam, as the box it fills.
struct Slab {
  low: vec3f,
  high: vec3f,
};

const SLABS = array<Slab, ${String(F.length)}>(
  ${F.join(",\n  ")},
);

/// How far a ray runs through a box before its shadow begins: a point on
/// a part's own face, its box a hair off the face, sees none of it.
const SLAB_BIAS = 0.003;

/// How much of a ray from \`p\` along \`dir\` passes \`slab\`, its edge
/// softening as the sun's width has it the farther the box. Only the run
/// through the box ahead of \`p\` counts, so a part's faces toward the sun
/// lie in no shadow of its own and those away from it in all of it.
fn slabShade(p: vec3f, dir: vec3f, slab: Slab) -> f32 {
  let a = (slab.low - p) / dir;
  let b = (slab.high - p) / dir;
  let near = min(a, b);
  let far = max(a, b);
  let enters = max(max(near.x, max(near.y, near.z)), 0.0);
  let leaves = min(far.x, min(far.y, far.z));
  let soft = 0.01 + SUN_SPREAD * enters;
  return 1.0 - smoothstep(0.0, soft, leaves - enters - SLAB_BIAS);
}

const SHRUBS = array<vec3f, ${String(H.length)}>(${H.join(", ")});

fn sunShade(p: vec3f, dir: vec3f) -> f32 {
  var shade = 1.0;
  for (var i = 0; i < ${String(H.length)}; i++) {
    shade *= shrubShade(p, dir, SHRUBS[i]);
  }
  for (var i = 0; i < ${String(F.length)}; i++) {
    shade *= slabShade(p, dir, SLABS[i]);
  }
  return shade;
}

/// A place the beam lands: where, the way it faces, and the light it
/// throws back times its size.
struct Bounce {
  at: vec3f,
  facing: vec3f,
  light: vec3f,
};

const BOUNCES = array<Bounce, ${String(P.length)}>(
  ${P.join(",\n  ")},
);

fn sunBounce(p: vec3f, normal: vec3f) -> vec3f {
  var sum = vec3f(0.0);
  for (var i = 0; i < ${String(P.length)}; i++) {
    let bounce = BOUNCES[i];
    sum += bounce.light * patchLight(p, normal, bounce.at, bounce.facing);
  }
  return sum;
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  return ${fh(`sunlitRoom(s, m, ${tA(B.ambient)})`,B)} + sunShaft(s);
}
${fd(B)}
`,fx,fn))]}},uS=tO("cube/entities/theme/workplace/school-corridor/config/school-corridor",`
fn lino(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.3, 0.003, 41u);
  let at = vec2i(floor(s.uv / 0.3));
  let cream = vec3f(0.36, 0.32, 0.23);
  let red = vec3f(0.2, 0.035, 0.025);
  let marble = 0.8 + 0.3 * fbm(s.uv * 14.0 + tile.y * 40.0, 42u, 3);
  let scuff = 1.0 - 0.35 * smoothstep(0.5, 0.8, fbm(s.uv * 1.3, 43u, 3));
  let colour = mix(cream, red, f32((at.x + at.y) & 1)) * marble * scuff;
  let floor = polished(colour * mix(0.5, 1.0, tile.x), 0.8 * scuff);
  return embossed(s, floor, tile.x + 2.0 * fbm(s.uv * 1.8, 48u, 3), 0.0025);
}

fn twoTone(s: Surf) -> Material {
  let h = s.p.y;
  let roller = fbm(s.uv * 26.0, 44u, 3);
  let upper = plaster(s, vec3f(0.44, 0.42, 0.31));
  let teal = vec3f(0.025, 0.14, 0.14) * (0.92 + 0.12 * roller);
  let chipped =
    step(
      0.9,
      fbm(s.uv * 5.0, s.seed ^ 0x45u, 3) + 0.25 * valueNoise(s.uv * 60.0, 46u),
    );
  let low = 1.0 - smoothstep(1.35, 1.354, h);
  let lower = mix(teal, vec3f(0.36, 0.34, 0.29), chipped);
  let painted = mix(upper, lower, low);
  let albedo = mix(painted, vec3f(0.012, 0.04, 0.04), band(h, 1.35, 0.03));
  let stained = mix(albedo, albedo * vec3f(0.55, 0.5, 0.35), damp(s));
  let wall = polished(stained, 0.05 + 0.55 * low * (1.0 - chipped));
  return embossed(s, wall, 0.4 * roller - chipped * low, 0.003);
}

fn peeling(s: Surf) -> Material {
  let crack = worley(s.uv * 2.2, s.seed ^ 0x47u);
  let peel = smoothstep(0.03, 0.0, abs(crack.x - 0.42)) * step(0.6, crack.y);
  let white =
    plaster(s, vec3f(0.44, 0.44, 0.4))
      * (1.0 - 0.5 * peel)
      * (1.0 - 0.6 * damp(s));
  return embossed(s, glowing(white, lampGlow(s, lamps())), -peel, 0.01);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return twoTone(s);
    }
    case FLOOR, OWNED: {
      return lino(s);
    }
    case CEILING: {
      return peeling(s);
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,ff),uM={name:"School corridor",air:i7(i6(725010)),pillar:.025,dark:.12,sound:{footing:"tile",hum:100,air:.1,echo:2.2},decor:[{thing:"locker",perRoom:1.5},{thing:"bench",perRoom:.4},{thing:"radiator",perRoom:.5},{thing:"notice-board",perRoom:.4},{thing:"door",perRoom:.5},{thing:"wet-floor-sign",perRoom:.1},{thing:"exit-sign",perRoom:.15}],shader:{...uS,needs:[...uS.needs,fm("school-corridor",{lamp:[1.3,1.44,1.52],ambient:[.006,.008,.01],grid:2,panel:[.16,1.4],stutter:.3,visibility:38,exposure:1,glow:.16,fringe:.006,vignette:.4,noise:.02})]}},uL=tO("cube/entities/theme/workplace/server-floor/config/server-floor",`
fn lamps() -> Lamps {
  return
    Lamps(
      vec3f(0.3, 0.45, 0.72),
      vec3f(0.003, 0.005, 0.01),
      2,
      vec2f(0.08, 1.5),
      0.1,
    );
}

/// The cold air under the floor, breathing: what its light is times.
fn underfloor(s: Surf) -> vec3f {
  let breath = 0.8 + 0.2 * sin(s.time * 0.9 + f32(s.cell.x + s.cell.y) * 0.7);
  return vec3f(0.03, 0.16, 0.55) * breath;
}

fn racks(s: Surf) -> Material {
  let h = s.p.y;
  let along = wallAlong(s);
  let fine = valueNoise(s.uv * 120.0, 131u);
  if (h > 2.02) {
    // Over the racks: the dark, and a yellow trough of fibre.
    let trough = band(h, 2.14, 0.12);
    let clip = band(fract(along / 0.625) * 0.625, 0.3125, 0.03);
    let yellow =
      vec3f(0.5, 0.36, 0.02) * (0.8 + 0.3 * fine) * (1.0 - 0.6 * clip);
    return
      embossed(
        s,
        polished(mix(vec3f(0.01, 0.011, 0.013), yellow, trough), 0.35 * trough),
        trough,
        0.02,
      );
  }
  let bay = along / 0.625;
  let x = fract(bay);
  let side = u32(s.normal.x * 2.0 + 3.0) + 8u * u32(s.normal.z * 2.0 + 3.0);
  let rack = hashOf(s.seed, u32(bay) + 64u * side);
  let frame =
    1.0 - smoothstep(
      0.022,
      0.028,
      min(min(x, 1.0 - x) * 0.625, min(h - 0.06, 2.02 - h)),
    );
  let grip = band(x, 0.9, 0.025) * band(h, 1.05, 0.22);

  // Behind the door's mesh, a unit to every 4.45 cm, most of them filled.
  let unit = i32(floor(h / 0.0445));
  let word = hashOf(rack, u32(unit));
  let filled = unitOf(word) < 0.72 && unitOf(rack) < 0.9;
  let lip = smoothstep(0.0, 0.006, fract(h / 0.0445) * 0.0445);
  let face =
    select(
      vec3f(0.006),
      vec3f(0.035, 0.037, 0.04) * (0.6 + 0.8 * unitOf(mix32(word))),
      filled,
    );
  let mesh =
    0.55 + 0.45 * smoothstep(
      0.2,
      0.4,
      length(fract(vec2f(along, h) / 0.009) - 0.5),
    );
  let near = 1.0 - smoothstep(0.004, 0.02, fwidth(along) + fwidth(h));
  var albedo = face * lip * mix(0.78, mesh, near);

  // Its lamps: sixteen places across, a few lit, each to its own beat.
  let place = vec2i(i32(floor(x * 16.0)), unit);
  let led = hashOf(word, u32(place.x));
  let beat = u32(s.time * (1.0 + 7.0 * unitOf(mix32(led)))) + s.hour;
  let on = unitOf(hashOf(led, beat)) < select(0.55, 1.0, (led & 3u) == 0u);
  let dot = (fract(vec2f(x * 16.0, h / 0.0445)) - 0.5) * vec2f(0.039, 0.0445);
  let lamp = 1.0 - smoothstep(0.004, 0.008, length(dot));
  let kind = unitOf(mix32(led ^ 0x51u));
  let hue =
    select(
      select(vec3f(0.1, 1.0, 0.25), vec3f(1.0, 0.5, 0.05), kind > 0.7),
      vec3f(0.15, 0.4, 1.0),
      kind > 0.86,
    );
  let alarm = (led & 0xffu) == 7u;
  let lit = filled && unitOf(led) < 0.16 && x > 0.12 && x < 0.84 && on;
  // Lamps smaller than a pixel go out rather than sparkle.
  let shown =
    f32(lit)
      * lamp
      * (1.0 - smoothstep(0.01, 0.035, fwidth(along) + fwidth(h)));
  let glow = select(hue, vec3f(1.0, 0.03, 0.02), alarm) * (5.0 * shown);

  albedo =
    mix(
      mix(albedo, vec3f(0.012, 0.012, 0.014), frame),
      vec3f(0.2, 0.21, 0.22),
      grip,
    );
  let door =
    Material(
      albedo * (0.85 + 0.3 * fine),
      glow,
      0.25 + 0.4 * frame + 0.3 * grip,
      vec3f(0.0),
    );
  return embossed(s, door, frame + 2.0 * grip - 0.5 * (1.0 - lip), 0.004);
}

fn accessFloor(s: Surf) -> Material {
  let tile = tiling(s.uv, 0.625, 0.007, 132u);
  let chips = worley(s.uv * 60.0, 133u);
  let scratch =
    smoothstep(
      0.7,
      0.85,
      fbm(
        vec2f(s.uv.x * 3.0 + s.uv.y * 2.0, s.uv.y * 60.0 - s.uv.x * 40.0),
        134u,
        3,
      ),
    );
  let laminate =
    vec3f(0.17, 0.175, 0.185)
      * (0.8 + 0.1 * tile.y + 0.25 * step(0.3, chips.x) * chips.y)
      * (1.0 - 0.25 * scratch);
  let cold = underfloor(s);
  // One tile in seven is a grille; one in a hundred was lifted and never put back.
  let grille = step(tile.y, 0.14);
  let lifted = step(0.99, tile.y);
  let hole = 1.0 - smoothstep(0.26, 0.36, length(fract(s.uv / 0.03125) - 0.5));
  let near = 1.0 - smoothstep(0.012, 0.05, fwidth(s.uv.x) + fwidth(s.uv.y));
  let open = max(grille * mix(0.35, hole, near), lifted) * tile.x;
  let albedo = mix(vec3f(0.01), laminate, tile.x) * (1.0 - open);
  let depth = fbm(s.uv * 3.0, 135u, 3);
  let glow =
    cold
      * open
      * mix(0.9, 0.25 + 0.5 * depth, lifted) + cold * (0.5 * (1.0 - tile.x));
  let floorTile =
    Material(albedo, glow, 0.62 * tile.x * (1.0 - open), vec3f(0.0));
  return
    embossed(
      s,
      floorTile,
      tile.x * (1.0 + 0.3 * tile.y) - open - 0.2 * scratch,
      0.003,
    );
}

fn cableTrays(s: Surf) -> Material {
  let dust = fbm(s.uv * 2.0, 136u, 3);
  var albedo = vec3f(0.016, 0.018, 0.024) * (0.6 + 0.8 * dust);
  var height = 0.0;
  // A ladder tray down the middle, and what lies in it.
  let across = s.p.x - 2.5;
  let within = 1.0 - smoothstep(0.2, 0.204, abs(across));
  let strand = floor(across / 0.024);
  let word = cellHash(vec2i(i32(strand), i32(s.cell.x)), 137u);
  let sag = 0.012 * sin(s.uv.y * 2.3 + unitOf(word) * 6.0);
  let core = abs(fract((across + sag) / 0.024) - 0.5) * 2.0;
  let kind = unitOf(mix32(word));
  let jacket =
    select(
      select(vec3f(0.02, 0.02, 0.024), vec3f(0.02, 0.06, 0.22), kind > 0.6),
      vec3f(0.4, 0.3, 0.02),
      kind > 0.85,
    );
  let cable = jacket * 0.5 * (0.25 + 0.75 * sqrt(max(1.0 - core * core, 0.0)));
  let rung = band(fract(s.uv.y / 0.3) * 0.3, 0.15, 0.03);
  let rail = band(abs(across), 0.2, 0.025);
  let steel = vec3f(0.22, 0.23, 0.24);
  let ladder = clamp(rail + rung * within, 0.0, 1.0);
  albedo = mix(mix(albedo, cable, within), steel * (0.7 + 0.5 * dust), ladder);
  height = mix(height, 0.5 + 0.3 * (1.0 - core), within) + ladder;
  return
    embossed(
      s,
      Material(albedo, lampGlow(s, lamps()), 0.2 * within, vec3f(0.0)),
      height,
      0.03,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return racks(s);
    }
    case FLOOR, OWNED: {
      return accessFloor(s);
    }
    case CEILING: {
      return cableTrays(s);
    }
    case TRIM: {
      return
        polished(
          vec3f(0.2, 0.21, 0.22) * (0.8 + 0.3 * valueNoise(s.uv * 90.0, 138u)),
          0.3,
        );
    }
    default: {
      return stuff(s);
    }
  }
}

fn themeLight(s: Surf, m: Material) -> vec3f {
  var colour = roomLight(s, m, lamps());
  let normal = normalize(s.normal + m.relief);
  // The floor's glow reaches whatever stands on it, less the higher it is,
  // and the racks' lamps wash the floor at their feet.
  let rising =
    (0.35 + 0.65 * max(-normal.y, 0.0))
      * exp(-s.p.y / 0.55)
      * step(normal.y, 0.5);
  colour += m.albedo * underfloor(s) * (1.2 * rising);
  if (s.normal.y > 0.5) {
    let toSide = toSides(s);
    var wash = 0.0;
    for (var side = 0u; side < 4u; side++) {
      if (closedAt(s, side)) {
        wash += exp(-toSide[side] / 0.45);
      }
    }
    let flicker =
      0.75 + 0.25 * valueNoise(vec2f(s.time * 3.0, f32(s.seed & 255u)), 139u);
    colour += m.albedo * vec3f(0.02, 0.11, 0.05) * (wash * flicker);
  }
  return haze(colour, s, AIR, 24.0);
}

fn themeLens(l: Lens) -> vec3f {
  let seen = through(l, 0.34, 0.008) * 1.35;
  // The shutter rolls against the lamps' flicker: a dim bar climbs the frame.
  let bar = 0.93 + 0.07 * sin((l.uv.y * 2.5 + l.time * 0.6) * 6.2832);
  let graded = tonemap(seen * bar) * vec3f(0.92, 1.0, 1.1);
  let line = 0.985 + 0.015 * sin(l.pixel.y * 3.1416);
  return graded * line * vignette(l, 0.5) + grain(l) * 0.03;
}
`,fs,a1,fl,fp,um,ff,fn),uR=i7(i6(198416)),uO=tO("cube/entities/theme/workplace/service-corridor/config/service-corridor",`
fn blockwork(s: Surf) -> Material {
  let h = s.p.y;
  let row = floor(h / 0.2);
  let at = vec2f(s.uv.x / 0.4 + 0.5 * (row - 2.0 * floor(row * 0.5)), h / 0.2);
  let f = fract(at);
  let joint = min(min(f.x, 1.0 - f.x) * 0.4, min(f.y, 1.0 - f.y) * 0.2);
  let mortar = 1.0 - smoothstep(0.003, 0.013, joint);
  let block = unitOf(cellHash(vec2i(floor(at)), 101u));
  let pores = valueNoise(s.uv * 130.0, 102u);
  let pits = smoothstep(0.78, 0.86, valueNoise(s.uv * 90.0, 103u));
  let grime = fbm(s.uv * 0.9, s.seed ^ 0x68u, 4);

  let low = 1.0 - smoothstep(0.98, 0.984, h);
  let white = vec3f(0.5, 0.5, 0.45) * (0.8 + 0.1 * block + 0.2 * grime);
  let grey = vec3f(0.15, 0.17, 0.17) * (0.85 + 0.1 * block + 0.2 * grime);
  // Trolleys take the paint off below the rail, down to the block.
  let gouge = fbm(vec2f(s.uv.x * 1.1, h * 22.0), 104u, 3);
  let scraped =
    low
      * smoothstep(0.58, 0.66, gouge + 0.12 * pores)
      * smoothstep(0.12, 0.35, h);
  let bare = vec3f(0.3, 0.29, 0.27) * (0.8 + 0.3 * pores);
  // Hands and shoulders grey the white at their height.
  let handled =
    band(h, 1.35, 0.5) * smoothstep(
      0.4,
      0.75,
      fbm(vec2f(s.uv.x * 0.8, h * 3.0), 105u, 3),
    );
  var albedo =
    mix(mix(white * (1.0 - 0.3 * handled), grey, low), bare, scraped);
  albedo *= (1.0 - 0.35 * mortar) * (1.0 - 0.25 * pits) * (1.0 - 0.5 * damp(s));

  // A rubber rail takes what the trolleys would give the wall.
  let rail = band(h, 0.9, 0.16);
  let lip = 1.0 - smoothstep(0.0, 0.08, abs(h - 0.9));
  let nicked =
    smoothstep(0.6, 0.8, fbm(vec2f(s.uv.x * 3.0, h * 40.0), 106u, 3));
  let rubber = vec3f(0.018, 0.018, 0.02) * (1.0 + 2.0 * nicked);
  let skirt = 1.0 - smoothstep(0.1, 0.104, h);
  albedo = mix(mix(albedo, rubber, rail), vec3f(0.02), skirt);

  let wall =
    polished(
      albedo,
      mix(0.12 + 0.3 * low * (1.0 - scraped), 0.3, max(rail, skirt)),
    );
  let height =
    (0.15 * pores - mortar - 0.5 * pits - 0.6 * scraped) * (1.0 - rail)
      + 6.0 * rail * lip
      + 2.0 * skirt;
  return embossed(s, wall, height, 0.004);
}

fn epoxy(s: Surf) -> Material {
  let flow = fbm(s.uv * 1.1, 111u, 4);
  let fleck = valueNoise(s.uv * 170.0, 112u);
  let red = vec3f(0.27, 0.045, 0.03) * (0.75 + 0.4 * flow);
  // Worn down to the slab where everything turns.
  let bared =
    smoothstep(
      0.7,
      0.74,
      fbm(s.uv * 0.45, 113u, 4) + 0.08 * fbm(s.uv * 9.0, 117u, 3),
    );
  let slab =
    vec3f(0.17, 0.17, 0.16) * (0.85 + 0.2 * fleck) * (0.8 + 0.4 * flow);
  // Wheels leave rubber both ways.
  let east =
    smoothstep(0.62, 0.8, fbm(vec2f(s.uv.x * 0.25, s.uv.y * 16.0), 114u, 3));
  let south =
    smoothstep(0.66, 0.82, fbm(vec2f(s.uv.x * 16.0, s.uv.y * 0.25), 115u, 3));
  let tracked = 1.0 - 0.55 * max(east, south);

  // A yellow line keeps trolleys off every wall there is.
  let line =
    band(wallInset(s), 0.4, 0.09) * smoothstep(
      0.3,
      0.5,
      fbm(s.uv * 3.0, 116u, 3) + 0.2 * fleck,
    );
  let cut = 1.0 - smoothstep(0.004, 0.012, toNearestSide(s));

  var albedo =
    mix(mix(red, slab, bared), vec3f(0.55, 0.4, 0.03), line * (1.0 - bared));
  albedo *= tracked * (1.0 - 0.7 * cut);
  let gloss = mix(0.88, 0.25, bared) * (0.75 + 0.25 * tracked);
  return
    embossed(
      s,
      polished(albedo, gloss),
      2.0 * flow - 3.0 * cut - bared * (1.0 + 0.3 * fleck),
      0.0015,
    );
}

fn openDeck(s: Surf) -> Material {
  // Steel decking sprayed black, flutes running south.
  let flute = smoothstep(0.25, 0.75, 0.5 + 0.5 * cos(s.uv.x * 6.2832 / 0.22));
  let spray = valueNoise(s.uv * 60.0, 121u);
  var albedo = vec3f(0.022, 0.022, 0.024) * (0.6 + 0.5 * flute + 0.4 * spray);
  var height = 0.25 * flute;
  var gloss = 0.1;

  // The air duct, galvanised, down the middle; its seams and hangers.
  let across = s.p.z - 2.5;
  let duct = 1.0 - smoothstep(0.36, 0.365, abs(across));
  let spangle = worley(s.uv * 45.0, 122u);
  let seam = band(fract(s.uv.x / 1.25) * 1.25, 0.625, 0.03);
  let zinc =
    vec3f(0.3, 0.32, 0.33) * (0.85 + 0.15 * spangle.y) * (1.0 - 0.5 * seam);
  albedo = mix(albedo, zinc, duct);
  gloss = mix(gloss, 0.5, duct);
  height =
    mix(
      height,
      1.0 + 0.15 * seam + 0.05 * spangle.y,
      1.0 - smoothstep(0.3, 0.37, abs(across)),
    );

  // Three conduits and a sprinkler line keep it company.
  let run = s.p.z - 0.55;
  for (var i = 0; i < 3; i++) {
    let off = (run - f32(i) * 0.07) / 0.02;
    let tube = 1.0 - smoothstep(0.85, 1.0, abs(off));
    let round = sqrt(max(1.0 - off * off, 0.0));
    albedo = mix(albedo, vec3f(0.28, 0.29, 0.3) * (0.3 + 0.7 * round), tube);
    height = mix(height, 0.3 + 0.3 * round, tube);
  }
  let main = (s.p.z - 4.45) / 0.04;
  let pipe = 1.0 - smoothstep(0.9, 1.0, abs(main));
  let body = sqrt(max(1.0 - main * main, 0.0));
  albedo = mix(albedo, vec3f(0.42, 0.04, 0.03) * (0.3 + 0.7 * body), pipe);
  gloss = mix(gloss, 0.4, pipe);
  height = mix(height, 0.4 + 0.4 * body, pipe);

  return
    embossed(
      s,
      Material(albedo, lampGlow(s, lamps()), gloss, vec3f(0.0)),
      height,
      0.12,
    );
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return blockwork(s);
    }
    case FLOOR, OWNED: {
      return epoxy(s);
    }
    case CEILING: {
      return openDeck(s);
    }
    case TRIM: {
      // A steel corner guard to the rail's height, bare paint above.
      let guard = 1.0 - smoothstep(1.2, 1.204, s.p.y);
      let brushed = valueNoise(vec2f(s.uv.x * 8.0, s.p.y * 260.0), 123u);
      let steel = vec3f(0.34, 0.35, 0.36) * (0.75 + 0.3 * brushed);
      let paint =
        vec3f(0.5, 0.5, 0.45) * (0.85 + 0.2 * fbm(s.uv * 3.0, 124u, 3));
      return polished(mix(paint, steel, guard), mix(0.1, 0.6, guard));
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,um,ff),uA={name:"Service corridor",air:i7(i6(1053202)),pillar:.02,dark:.06,sound:{footing:"concrete",hum:100,air:.6,echo:1.8},decor:[{thing:"door",perRoom:1.2},{thing:"crate",perRoom:.5},{thing:"cardboard-box",perRoom:.8},{thing:"shopping-cart",perRoom:.2},{thing:"bin",perRoom:.4},{thing:"fire-extinguisher",perRoom:.3},{thing:"vent",perRoom:.4},{thing:"wet-floor-sign",perRoom:.15},{thing:"mannequin",perRoom:.04},{thing:"ladder",perRoom:.08}],shader:{...uO,needs:[...uO.needs,fm("service-corridor",{lamp:[1.25,1.45,1.3],ambient:[.007,.009,.008],grid:2,panel:[2.36,.09],stutter:.06,visibility:55,exposure:1,glow:.18,fringe:.005,vignette:.38,noise:.016})]}},uE=tO("cube/entities/theme/workplace/stairwell/config/stairwell",`
fn studded(s: Surf) -> Material {
  let at = s.uv / 0.05;
  // Studs finer than a pixel are left out rather than left to shimmer.
  let fine = 1.0 - smoothstep(0.3, 1.1, fwidth(at.x) + fwidth(at.y));
  let stud = (1.0 - smoothstep(0.24, 0.33, length(fract(at) - 0.5))) * fine;
  let grime = fbm(s.uv * 0.9, 61u, 4);
  let dust = smoothstep(0.35, 0.8, fbm(s.uv * 3.1, 62u, 4));
  let rubber =
    vec3f(0.03, 0.042, 0.04) * (0.7 + 0.6 * grime) * (1.0 + 0.9 * stud);
  let trodden =
    mix(rubber, vec3f(0.12, 0.115, 0.1), 0.3 * dust * (1.0 - 0.6 * stud));
  // Every room's edge is a step's edge: a ribbed yellow nosing, worn through.
  let edge = toNearestSide(s);
  let worn = smoothstep(0.38, 0.5, fbm(s.uv * 5.0, 63u, 3));
  let rib = 0.5 + 0.5 * cos(edge * 6.2832 / 0.014);
  let nosing = band(edge, 0.085, 0.09) * worn;
  let yellow = vec3f(0.5, 0.36, 0.03) * (0.55 + 0.45 * rib);
  let floor = polished(mix(trodden, yellow, nosing), mix(0.28, 0.08, dust));
  return embossed(s, floor, stud + 0.4 * nosing * rib + 0.6 * grime, 0.004);
}

fn boardMarked(s: Surf) -> Material {
  let h = s.p.y;
  let along = wallAlong(s);
  let board = h / 0.14;
  let row = i32(floor(board));
  let plank = vec2i(i32(floor(s.uv.x / 2.4 + f32(row) * 0.37)), row);
  let tone = unitOf(cellHash(plank, 71u));
  let grain = fbm(vec2f(s.uv.x * 2.5 + tone * 9.0, h * 80.0), 72u, 3);
  let seam = smoothstep(0.0, 0.07, min(fract(board), 1.0 - fract(board)));
  let pour = fbm(s.uv * 0.7, s.seed ^ 0x73u, 4);
  let raw =
    vec3f(0.2, 0.2, 0.185)
      * (0.6 + 0.2 * tone + 0.22 * grain + 0.4 * pour)
      * (0.82 + 0.18 * seam);
  // The formwork's tie holes, plugged and stained below.
  let tie = vec2f(spaced(s.uv.x, 1.2), spaced(h - 0.3, 0.7));
  let hole = 1.0 - smoothstep(0.016, 0.026, length(tie));
  let weep =
    (1.0 - smoothstep(0.0, 0.03, abs(tie.x)))
      * smoothstep(0.0, -0.3, tie.y)
      * step(tie.y, 0.0);
  let concrete =
    raw * (1.0 - 0.75 * hole) * (1.0 - 0.3 * weep) * (1.0 - 0.45 * damp(s));

  let low = 1.0 - smoothstep(1.1, 1.104, h);
  let roller = fbm(s.uv * 20.0, 74u, 3);
  let chipped =
    step(
      0.84,
      fbm(s.uv * 4.0, s.seed ^ 0x75u, 3) + 0.22 * valueNoise(s.uv * 50.0, 76u),
    );
  let scuffed =
    1.0 - 0.4
      * smoothstep(0.5, 0.2, h)
      * fbm(vec2f(s.uv.x * 1.5, h * 30.0), 77u, 3);
  let grey = vec3f(0.11, 0.15, 0.16) * (0.9 + 0.2 * roller) * scuffed;
  let dado = mix(grey, concrete, chipped);
  let red = vec3f(0.36, 0.03, 0.02) * (0.85 + 0.3 * roller);
  let line = band(h, 1.15, 0.06) * (1.0 - chipped);

  // The floor's number, off to the left where no notice hangs; now and
  // then a room is sure it is some other floor.
  let roll = hashOf(s.seed, 0x78u);
  let number = select(4u, (roll >> 4u) % 10u, roll % 9u == 0u);
  let fade = smoothstep(0.3, 0.5, fbm(s.uv * 9.0, 79u, 3) + 0.25 * grain);
  let figure = stencilDigit(vec2f(along - 0.6, h - 1.36) / 0.32, number) * fade;

  let albedo =
    mix(
      mix(mix(concrete, dado, low), red, line),
      vec3f(0.025, 0.025, 0.03),
      0.85 * figure,
    );
  let wall = polished(albedo, 0.03 + 0.5 * low * (1.0 - chipped) + 0.3 * line);
  let height =
    0.5 * seam + 0.25 * grain - 1.5 * hole + low * (0.5 * roller - chipped);
  return embossed(s, wall, height, 0.004);
}

fn soffit(s: Surf) -> Material {
  // The flight above from below: long treads, short risers.
  let ramp = fract(s.uv.y / 0.3);
  let riser = smoothstep(0.76, 0.8, ramp);
  let saw = select(ramp / 0.78, (1.0 - ramp) / 0.22, ramp > 0.78);
  let off = s.p.xz - ROOM.xz * 0.5;
  let r = length(off);
  // The lamp sits on a flat pad cast into the flight.
  let pad = smoothstep(0.24, 0.4, r);
  let mottle = fbm(s.uv * 3.0, 81u, 4);
  let concrete =
    vec3f(0.21, 0.21, 0.195)
      * (0.65 + 0.5 * mottle)
      * (1.0 - 0.4 * riser * pad)
      * (1.0 - 0.55 * damp(s));
  let glass = 1.0 - smoothstep(0.15, 0.165, r);
  let bezel = band(r, 0.19, 0.045);
  let cage =
    clamp(
      band(off.x, 0.0, 0.014) + band(off.y, 0.0, 0.014) + band(r, 0.085, 0.014),
      0.0,
      1.0,
    );
  let prism = 0.75 + 0.25 * cos(r * 6.2832 / 0.022);
  let level = lampLevel(s, vec2i(0), litOf(s), lamps().stutter);
  let glow =
    lamps().colour * (GLARE * glass * (1.0 - 0.85 * cage) * prism * level);
  let albedo =
    mix(
      mix(concrete, vec3f(0.3, 0.32, 0.28), glass),
      vec3f(0.015),
      clamp(bezel + cage * glass, 0.0, 1.0),
    );
  return embossed(s, glowing(albedo, glow), saw * pad + 0.05 * mottle, 0.16);
}

fn themeMaterial(s: Surf) -> Material {
  switch s.kind {
    case WALL: {
      return boardMarked(s);
    }
    case FLOOR, OWNED: {
      return studded(s);
    }
    case CEILING: {
      return soffit(s);
    }
    case TRIM: {
      let pour = fbm(s.uv * vec2f(6.0, 1.2), 82u, 4);
      return matte(vec3f(0.3, 0.3, 0.28) * (0.65 + 0.5 * pour));
    }
    default: {
      return stuff(s);
    }
  }
}
`,fs,a1,fl,fp,um,ff),uT={1:uk,2:ub,3:uM,4:{name:"Stairwell landing",air:i7(i6(790541)),pillar:.035,dark:.14,sound:{footing:"concrete",hum:50,air:.3,echo:3.4},decor:[{thing:"staircase",perRoom:.35},{thing:"pipe",perRoom:.8},{thing:"fire-extinguisher",perRoom:.4},{thing:"exit-sign",perRoom:.5},{thing:"door",perRoom:.4},{thing:"bin",perRoom:.1},{thing:"traffic-cone",perRoom:.05}],shader:{...uE,needs:[...uE.needs,fm("stairwell",{lamp:[2.1,2.4,1.9],ambient:[.006,.008,.006],grid:1,panel:[.3,.3],stutter:.2,visibility:30,exposure:1.1,glow:.2,fringe:.006,vignette:.45,noise:.022})]}},5:ux,6:uA,7:{name:"Server floor",air:uR,pillar:.02,dark:.4,sound:{footing:"hollow",hum:180,air:.9,echo:.5},decor:[{thing:"server-rack",perRoom:1.6},{thing:"cable-reel",perRoom:.2},{thing:"vent",perRoom:.6},{thing:"crate",perRoom:.15},{thing:"fire-extinguisher",perRoom:.3},{thing:"office-chair",perRoom:.08},{thing:"ladder",perRoom:.06},{thing:"monolith",perRoom:.02}],shader:uL},8:{name:"Conference hotel",air:uv,pillar:.04,dark:.3,sound:{footing:"carpet",hum:60,air:.25,echo:.4},decor:[{thing:"chair-stack",perRoom:.8},{thing:"door",perRoom:1.4},{thing:"potted-plant",perRoom:.6},{thing:"armchair",perRoom:.4},{thing:"mirror",perRoom:.3},{thing:"water-cooler",perRoom:.15},{thing:"whiteboard",perRoom:.15},{thing:"curtain",perRoom:.3},{thing:"payphone",perRoom:.1},{thing:"exit-sign",perRoom:.2}],shader:up},9:fP,10:{name:"Grandmother’s",air:fN,pillar:.016,dark:.06,sound:{footing:"carpet",hum:0,air:.03,echo:.3},decor:[{thing:"armchair",perRoom:1},{thing:"sofa",perRoom:.4},{thing:"floor-lamp",perRoom:.5},{thing:"tv",perRoom:.3},{thing:"wall-clock",perRoom:.4},{thing:"bookshelf",perRoom:.3},{thing:"curtain",perRoom:.5},{thing:"potted-plant",perRoom:.5}],shader:f_},11:fG,12:fR,13:{name:"Den",air:fA,pillar:.016,dark:.1,sound:{footing:"soft",hum:0,air:.04,echo:.2},decor:[{thing:"sofa",perRoom:.8},{thing:"armchair",perRoom:.6},{thing:"tv",perRoom:.6},{thing:"bookshelf",perRoom:.5},{thing:"floor-lamp",perRoom:.4},{thing:"rug",perRoom:.3},{thing:"cardboard-box",perRoom:.2}],shader:fO},14:fW,15:{name:"Nursery, night",air:f$,pillar:.016,dark:.12,sound:{footing:"carpet",hum:0,air:.02,echo:.25},decor:[{thing:"bed",perRoom:.8},{thing:"wardrobe",perRoom:.5},{thing:"bookshelf",perRoom:.4},{thing:"balloon",perRoom:.3},{thing:"curtain",perRoom:.5},{thing:"window",perRoom:.4},{thing:"slide",perRoom:.08},{thing:"cardboard-box",perRoom:.3}],shader:fB},16:fU,17:fz,18:fM,19:{name:"My house",air:fT,pillar:.018,dark:.1,sound:{footing:"hollow",hum:0,air:.02,echo:.15},decor:[{thing:"bed",perRoom:.3},{thing:"sofa",perRoom:.3},{thing:"tv",perRoom:.3},{thing:"potted-plant",perRoom:.5},{thing:"balloon",perRoom:.4},{thing:"armchair",perRoom:.3},{thing:"bookshelf",perRoom:.2}],shader:fE},20:fj,21:{name:"Indoor pool",air:ur,pillar:.035,dark:.04,sound:{footing:"wet",hum:50,air:.35,echo:3.4},decor:[{thing:"pool-ladder",perRoom:.6},{thing:"drain",perRoom:.5},{thing:"bench",perRoom:.3},{thing:"wet-floor-sign",perRoom:.2},{thing:"potted-plant",perRoom:.3},{thing:"wall-clock",perRoom:.15},{thing:"locker",perRoom:.2}],shader:ua},22:{name:"Arcade",air:cJ,pillar:.025,dark:.1,sound:{footing:"carpet",hum:60,air:.15,echo:.6},decor:[{thing:"arcade-cabinet",perRoom:2.4},{thing:"vending-machine",perRoom:.4},{thing:"chair-stack",perRoom:.2},{thing:"bin",perRoom:.3},{thing:"exit-sign",perRoom:.2},{thing:"payphone",perRoom:.15},{thing:"socket",perRoom:.6}],shader:cQ},23:c9,24:ul,25:c4,26:uu,27:cV,28:ud,29:{name:"Playground under a painted sky",air:uf,pillar:.02,dark:.03,sound:{footing:"soft",hum:0,air:.1,echo:.9},decor:[{thing:"slide",perRoom:.7},{thing:"balloon",perRoom:.6},{thing:"bench",perRoom:.5},{thing:"traffic-cone",perRoom:.3},{thing:"ladder",perRoom:.3},{thing:"potted-plant",perRoom:.4},{thing:"bin",perRoom:.2}],shader:ui},30:ut,31:un,32:{name:"Glow golf",air:c8,pillar:.02,dark:0,sound:{footing:"carpet",hum:60,air:.15,echo:.5},decor:[{thing:"traffic-cone",perRoom:.6},{thing:"barrel",perRoom:.5},{thing:"monolith",perRoom:.2},{thing:"balloon",perRoom:.4},{thing:"bench",perRoom:.3},{thing:"bin",perRoom:.2},{thing:"exit-sign",perRoom:.3}],shader:c6},33:c2,34:c3,35:cZ,36:cw,37:cj,38:cy,39:cR,40:cd,41:cU,42:{name:"Stained section",air:cG,pillar:.02,dark:0,sound:{footing:"soft",hum:0,air:.1,echo:.2},decor:[{thing:"lab-bench",perRoom:.3},{thing:"mannequin",perRoom:.08},{thing:"mirror",perRoom:.2},{thing:"bin",perRoom:.1}],shader:cH},43:cM,44:cg,45:c$,46:cP,47:cT,48:cz,49:{name:"Fig. 49",air:cA,pillar:.022,dark:0,sound:{footing:"hollow",hum:0,air:.02,echo:.1},decor:[{thing:"whiteboard",perRoom:.4},{thing:"desk",perRoom:.3},{thing:"bookshelf",perRoom:.3},{thing:"ladder",perRoom:.1}],shader:cO},50:{name:"Incubator",air:cN,pillar:.022,dark:.1,sound:{footing:"carpet",hum:60,air:.45,echo:.3},decor:[{thing:"radiator",perRoom:.8},{thing:"tank",perRoom:.3},{thing:"bed",perRoom:.15},{thing:"pipe",perRoom:.5},{thing:"vent",perRoom:.5},{thing:"office-chair",perRoom:.2}],shader:c_},51:cW,52:cp,53:f2,54:cc,55:f6,56:{name:"Normals",air:f7,pillar:.03,dark:0,sound:{footing:"tile",hum:0,air:.1,echo:1.2},decor:[{thing:"monolith",perRoom:.3},{thing:"barrel",perRoom:.4},{thing:"bench",perRoom:.3},{thing:"staircase",perRoom:.1}],shader:f8},57:{name:"Flat fields",air:fQ,pillar:.035,dark:0,sound:{footing:"soft",hum:0,air:0,echo:.2},decor:[{thing:"armchair",perRoom:.4},{thing:"potted-plant",perRoom:.5},{thing:"floor-lamp",perRoom:.3},{thing:"balloon",perRoom:.2},{thing:"door",perRoom:.4}],shader:fZ},58:{name:"Wireframe",air:[0,0,0],pillar:.03,dark:0,sound:{footing:"hollow",hum:60,air:0,echo:2.4},decor:[{thing:"monolith",perRoom:.3},{thing:"crate",perRoom:.5},{thing:"staircase",perRoom:.15},{thing:"arcade-cabinet",perRoom:.1}],shader:cu},59:{name:"Point cloud",air:[0,0,0],pillar:.03,dark:0,sound:{footing:"hollow",hum:0,air:.02,echo:3},decor:[{thing:"mannequin",perRoom:.4},{thing:"ladder",perRoom:.2},{thing:"chair-stack",perRoom:.3},{thing:"potted-plant",perRoom:.3},{thing:"staircase",perRoom:.1}],shader:ca},60:{name:"Depth buffer",air:[0,0,0],pillar:.04,dark:0,sound:{footing:"soft",hum:0,air:.3,echo:.1},decor:[{thing:"monolith",perRoom:.4},{thing:"mannequin",perRoom:.3},{thing:"bench",perRoom:.3},{thing:"barrel",perRoom:.3},{thing:"staircase",perRoom:.1}],shader:fJ},61:ci,62:cs,63:ct,64:co,65:{name:"Clear colour",air:fX,pillar:.02,dark:.15,sound:{footing:"soft",hum:0,air:0,echo:4},decor:[{thing:"door",perRoom:.3},{thing:"bench",perRoom:.2},{thing:"balloon",perRoom:.15}],shader:fV},66:f5},uI={...uT,...Object.fromEntries([[9,66]].flatMap(([M,L])=>[[M,uT[L]],[L,uT[M]]]))};function uz(M){let L=uI[M];if(void 0===L)throw RangeError(`floor ${String(M)} has no theme`);return L}let u_=tO("cube/pages/cube/lib/lens-stage",`
struct Uniforms {
  viewProjection: mat4x4f,
  /// The eye, in its own frame.
  eye: vec4f,
  /// Seconds into the shared clock's hour, which hour, and the screen's size.
  clock: vec4f,
  /// What the outside's lens is set to: its exposure, how far the eyelids
  /// are open, 0 shut to 1, and how far indoors the eye is, 0 to 1.
  lens: vec4f,
  /// How far the drowsy eye darkens the frame's corners, 0 not at all.
  drowsy: vec4f,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

/// One triangle that covers the screen.
@vertex
fn lensVertex(@builtin(vertex_index) index: u32) -> @builtin(position) vec4f {
  let corner = vec2f(f32((index << 1u) & 2u), f32(index & 2u));
  return vec4f(corner * 2.0 - 1.0, 0.0, 1.0);
}

/// \`colour\` at \`uv\`, darkened towards the corners as far as the drowsy eye
/// says: what hides the blur a turn brings in at the frame's edge.
fn vignetted(colour: vec3f, uv: vec2f) -> vec3f {
  let out = length(uv - 0.5) * 1.25;
  return colour * (1.0 - uniforms.drowsy.x * smoothstep(0.35, 1.0, out));
}

fn lensOf(at: vec4f) -> Lens {
  var l: Lens;
  l.pixel = at.xy;
  l.size = uniforms.clock.zw;
  l.uv = at.xy / l.size;
  l.time = uniforms.clock.x;
  l.hour = u32(uniforms.clock.y);
  return l;
}
`,fs),uN=tO("cube/pages/cube/lib/daylight-lens",`
/// How far the film parts red from blue, as \`through\` takes it: a quarter
/// of a pixel at the frame's lower edge, where the outdoors is sparks and
/// grain a pixel wide that a wider parting would colour.
const FRINGE = 0.0005;

/// Where the outside's film leaves the room's curve, in exposed light, and
/// how slowly it nears white past there: daylight runs from sunlit sand to a
/// sky forty times brighter beside the sun, and the room's shoulder prints
/// all of that range white.
const KNEE = 1.0;
const TAIL = 0.6;

/// Exposed light to display colour: the room's film up to \`KNEE\`, then a
/// tail that keeps telling brighter from bright up to the sun's disc.
fn daylightFilm(colour: vec3f) -> vec3f {
  let x = max(colour, vec3f(0.0));
  let knee = vec3f(KNEE);
  let top = filmic(knee);
  let tail = 1.0 - (1.0 - top) * pow(knee / max(x, knee), vec3f(TAIL));
  return pow(select(filmic(min(x, knee)), tail, x > knee), vec3f(1.0 / 2.2));
}

/// How much of the pixel at \`uv\` shows between eyelids \`open\` of the way open.
fn betweenLids(uv: vec2f, open: f32) -> f32 {
  let across = uv.x - 0.5;
  let gap = open * (0.76 - 0.9 * across * across);
  let soft = 0.02 + 0.14 * (1.0 - open);
  return 1.0 - smoothstep(gap - soft, gap + soft * 0.25, abs(uv.y - 0.5));
}

@fragment
fn lensFragment(@builtin(position) at: vec4f) -> @location(0) vec4f {
  let l = lensOf(at);
  let film = daylightFilm(through(l, 0.03, FRINGE) * uniforms.lens.x);
  let seen = mix(film, themeLens(l), uniforms.lens.z);
  return vec4f(vignetted(seen, l.uv) * betweenLids(l.uv, uniforms.lens.y), 1.0);
}
`,u_,fn),uD=tO("cube/pages/cube/lib/floor-lens",`
@fragment
fn lensFragment(@builtin(position) at: vec4f) -> @location(0) vec4f {
  let l = lensOf(at);
  return vec4f(vignetted(themeLens(l), l.uv), 1.0);
}
`,u_),uU=[{name:"position",type:"vec3f",format:"float32x3",words:3},{name:"normal",type:"vec3f",format:"float32x3",words:3},{name:"local",type:"vec3f",format:"float32x3",words:3},{name:"tex",type:"vec2f",format:"float32x2",words:2},{name:"kind",type:"u32",format:"uint32",words:1},{name:"seed",type:"u32",format:"uint32",words:1},{name:"flags",type:"u32",format:"uint32",words:1},{name:"paint",type:"u32",format:"uint32",words:1},{name:"cell",type:"u32",format:"uint32",words:1}],uC=uU.reduce((M,{words:L})=>M+L,0),uP=M=>uU.slice(0,uU.findIndex(L=>L.name===M)).reduce((M,{words:L})=>M+L,0),uH={arrayStride:4*uC,attributes:uU.map(({name:M,format:L},R)=>({shaderLocation:R,offset:4*uP(M),format:L}))},uG=M=>uU.map(({name:L,type:R},O)=>`  @location(${String(O)})${M&&"u32"===R?" @interpolate(flat)":""} ${L}: ${R},`).join("\n"),uF=tO("pages/cube/vertex",`
struct VertexIn {
${uG(!1)}
};

struct Varying {
  @builtin(position) clip: vec4f,
${uG(!0)}
};

@vertex
fn vertexMain(in: VertexIn) -> Varying {
  var out: Varying;
  out.clip = uniforms.viewProjection * vec4f(in.position, 1.0);
${uU.map(({name:M})=>`  out.${M} = in.${M};`).join("\n")}
  return out;
}
`,u_),uW=tO("cube/pages/cube/lib/floor-stage",`
@group(1) @binding(0) var board: texture_2d<f32>;
@group(1) @binding(1) var boardSampler: sampler;

fn surfOf(in: Varying) -> Surf {
  var s: Surf;
  s.kind = in.kind;
  s.normal = normalize(in.normal);
  s.p = in.local * ROOM.x;
  s.cell = vec2u(in.cell, in.cell >> 8u) & vec2u(63u);
  let wide = vec2f(s.cell) * ROOM.xz + s.p.xz;
  if (abs(s.normal.y) > 0.5) {
    s.uv = wide;
  } else if (abs(s.normal.x) > abs(s.normal.z)) {
    s.uv = vec2f(wide.y, s.p.y);
  } else {
    s.uv = vec2f(wide.x, s.p.y);
  }
  s.seed = in.seed;
  s.flags = in.flags;
  let paint =
    vec3f(
      vec3u(in.paint >> 16u, in.paint >> 8u, in.paint) & vec3u(255u),
    ) / 255.0;
  s.paint = pow(paint, vec3f(2.2));
  let to = in.position - uniforms.eye.xyz;
  s.far = length(to) * ROOM.x;
  s.view = normalize(to);
  s.pixel = in.clip.xy;
  s.screen = in.clip.xy / uniforms.clock.zw;
  s.time = uniforms.clock.x;
  s.hour = u32(uniforms.clock.y);
  return s;
}

/// A point as the scene pass writes it: its light and how far off it is,
/// and its mirror, the share it shows and what the lamps would put there,
/// then the plane it reflects off and how fast the reflection blurs.
struct Scene {
  @location(0) light: vec4f,
  @location(1) mirror: vec4f,
  @location(2) plane: vec4f,
}

/// \`light\`, the theme's for \`s\`, with the mirror it left.
fn sceneOf(s: Surf, light: vec3f) -> Scene {
  return
    Scene(
      vec4f(light, s.far),
      vec4f(mirroring.fallback, mirroring.strength),
      vec4f(mirroring.normal, mirroring.blur),
    );
}

@fragment
fn fragmentMain(in: Varying) -> Scene {
  let s = surfOf(in);
  var m = themeMaterial(s);
  if (s.kind == OWNED) {
    m = ownedMark(s, m);
  }
  return sceneOf(s, themeLight(s, m));
}

@fragment
fn boardFragment(in: Varying) -> Scene {
  let drawn = textureSample(board, boardSampler, in.tex).rgb;
  let s = surfOf(in);
  let m = matte(pow(drawn, vec3f(2.2)));
  return sceneOf(s, themeLight(s, m));
}
`,u_,uF,fs,fp),uB=M=>fy(uz(M),uW,uD),u$={exposure:.3,eyelids:1};function uq(M,L,R){var O;let A="eye"in(O=L)?0:1!==O.n?1:1-Math.min(1,function(M){let L=0,R=0;for(let O=0;O<17;O+=1)for(let A=0;A<13;A+=1){let E=.85*(2*O/16-1),T=.6*(2*A/12-1),I=.5**((E*E+T*T)/.09);R+=I,function(M,L,R){let[O,A,E]=((M,L=tz)=>t_(M,-L))(i2({yaw:M.yaw+L,elevation:M.elevation+R}));if(O<=0)return!1;let[T,I,z]=tD([M.u,M.eyeAbove,M.v]),_=(1-T)/O,N=(z+_*E)*5,D=(I+_*A)*5;return N>tG.from&&N<tG.to&&D>0&&D<tG.height}(M,E,T)&&(L+=I)}return L/R}(O)/.07);return A+(M-A)*Math.exp(-R/(A<M?.5:6))}let uj=(M,{exposure:L,eyelids:R}=u$)=>({exposure:L,eyelids:R,indoors:M}),uK=(M,L)=>M.n===L.n&&M.x===L.x&&M.y===L.y,uY=(M,L)=>uK(M,L)&&M.u===L.u&&M.v===L.v&&M.yaw===L.yaw&&M.elevation===L.elevation;function uV(M,L){return M[Math.floor(L*M.length)]??M[0]}let uX=[0,1,2,3],uZ={0:{base:[1,0,0],along:[0,0,1],into:[-1,0,0]},1:{base:[1,0,1],along:[-1,0,0],into:[0,0,-1]},2:{base:[0,0,1],along:[0,0,-1],into:[1,0,0]},3:{base:[0,0,0],along:[1,0,0],into:[0,0,1]}},uQ=M=>uX[(M+2)%4]??M,uJ=M=>uX[(M+1)%4]??M,u0=({closed:M},L)=>.012*!!M[L],u2=(M,L,R,O)=>{let A=uZ[M];return au(au(au(A.base,tL(A.along,L)),tL(ac,R)),tL(A.into,O))},u1=(M,L,R,O,A)=>u2(L,R,O,u0(M,L)+A),u3=({closed:M})=>uX.filter(L=>M[L]),u5=({closed:M})=>uX.filter(L=>!M[L]),u4=(M,L)=>M[Math.floor(L*M.length)]??null,u6=({closed:M})=>uX.filter(L=>M[L]&&M[uJ(L)]),u8=(M,L)=>(([M,L,R])=>Math.hypot(M,L,R))(tM(L,M,-1)),u7=(M,L,R)=>au(M,tL(tM(L,M,-1),R)),u9=(M,L,R)=>au(tL(M,Math.cos(R)),tL(L,Math.sin(R)));function he(M,L){let R=Math.cos(L),O=Math.sin(L);return L=>au(au(tL(L,R),tL(tS(M,L),O)),tL(M,tk(M,L)*(1-R)))}let ht=(...M)=>L=>{let R=L;for(let L of M)R=L(R);return R},ha=M=>[Math.cos(M),0,Math.sin(M)],hr=(M,L)=>Math.atan2(L[2]-M[2],L[0]-M[0]);function hs(M,L,[R,O,A],E,{stuff:T,tint:I}){let z=E([R,0,0]),_=E([0,O,0]),N=E([0,0,A]);return am(tM(L,tL(au(au(z,_),N),.5),-1),[z,_,N],M,T,I)}let hl=[ac,[1,0,0],[0,0,1]];function ho(M,[L,R],[O,A],E,{stuff:T,tint:I}){let z=tM(R,L,-1),_=tR(z),N=[E,...hl].map(M=>{let L,R;return tM(L=M,tL(R=_,tk(L,R)),-1)}).find(M=>(([M,L,R])=>Math.hypot(M,L,R))(M)>.001);if(void 0===N)return[];let D=tR(N),U=tS(D,_);return am(tM(L,au(tL(D,O/2),tL(U,A/2)),-1),[tL(D,O),z,tL(U,A)],M,T,I)}let hn=Object.freeze([]),hi=Object.freeze([]),hf=Object.freeze({quads:hn,sounds:hi}),hc=(M,L=hi)=>0===M.length&&0===L.length?hf:{quads:M,sounds:L};function hu({sinceEpoch:M,age:L},R,O,A,[E,T]){return L>=E&&L<E+T?[{cue:R,source:O,loudness:A,sinceEpoch:M+E}]:[]}let hh={armSwing:0,splayed:.06};function hd(M,L,R,O,{arms:A,headTurn:E,bowed:T},{clothes:I,flesh:z}){let _=ha(R),N=ha(R+Math.PI/2),D=tL(ac,-1),U=au(L,tL(ac,.48*O)),C=u9(ac,_,T),P=au(U,tL(C,.34*O)),H=.1*O;return[...[-1,1].flatMap(R=>{let A=tL(N,.075*R*O);return ho(M,[au(L,A),au(U,A)],[H,H],N,I)}),...ho(M,[U,P],[.3*O,.14*O],N,I),...A.flatMap(({armSwing:L,splayed:R},A)=>{let E=tL(N,0===A?-1:1),T=u9(u9(D,_,L),E,R),z=au(au(P,tL(C,-.04*O)),tL(E,.19*O));return ho(M,[z,au(z,tL(T,.36*O))],[.08*O,.08*O],_,I)}),...hs(M,au(P,tL(C,.1*O)),[.13*O,.14*O,.12*O],he(ac,-(R+E)),z)]}let hm={clothes:{stuff:"fabric",tint:1447450},flesh:{stuff:"fabric",tint:1972758}},hp={clothes:{stuff:"plastic",tint:0xd8d2c4},flesh:{stuff:"plastic",tint:0xd8d2c4}},hv=[5913122,8027256,3033658,0xc8c2b0],hg=.125,hb={stuff:"skin",tint:4866630},hw={brief:{every:40,chance:1/16},lingering:{every:600,chance:1/12}},hx={wall:M=>u3(M).length>0,opening:M=>u5(M).length>0,corner:M=>u6(M).length>0},hy={ball:{pace:"brief",scare:!1,weight:[5,2],lastsFor:[7,7]},paper:{pace:"brief",scare:!1,weight:[5,3],lastsFor:[12,12]},cat:{pace:"brief",scare:!1,weight:[4,1],lastsFor:[14,14]},phone:{pace:"brief",scare:!1,weight:[3,3],lastsFor:[20,20]},knock:{pace:"brief",scare:!1,weight:[2,4],lastsFor:[5,5],needs:"wall"},footsteps:{pace:"brief",scare:!1,weight:[3,3],lastsFor:[6,6],needs:"opening"},door:{pace:"brief",scare:!1,weight:[3,3],lastsFor:[18,18],needs:"wall"},figure:{pace:"brief",scare:!0,weight:[1.2,3],lastsFor:[6,12]},shadow:{pace:"brief",scare:!0,weight:[1,2.5],lastsFor:[12,16]},hand:{pace:"brief",scare:!0,weight:[.8,2.5],lastsFor:[7,9],needs:"opening"},unfolding:{pace:"brief",scare:!0,weight:[.5,2],lastsFor:[16,16]},corner:{pace:"brief",scare:!0,weight:[0,4],since:30,lastsFor:[20,20],needs:"corner"},balloon:{pace:"lingering",scare:!1,weight:[5,2],lastsFor:[150,240]},chairs:{pace:"lingering",scare:!1,weight:[2,4],lastsFor:[150,240]},mannequin:{pace:"lingering",scare:!0,weight:[1.5,4],lastsFor:[180,300]}},hk=M=>hy[M],hS=Object.keys(hy).filter(M=>M in hy),hM=[0xc81e28,0xe0b81a,1991360,0xe6e2d6,2792010],hL=[.042,.052,.042],hR={stuff:"fabric",tint:0xe0dcd0},hO=Math.PI/4,hA={stuff:"plastic",tint:0x9a5a2a},hE={stuff:"metal"},hT=[0xc0281e,0xd9a41c,1989300,0xe8e4d8],hI=Math.PI/4,hz=[.042,4e-4,.06],h_=[789518,0xb05a1c,5921374,0xd8d4cc];function hN(M,L){let{setting:R,chance:O}=M,A=u4(u5(R),O(L))??uV(uX,O(L));return u1(R,A,.42+.16*O(L,1),0,.07)}let hD={brief:0,lingering:1},hU=eb({phase:ew(0,1),live:ey(ek({pace:eS,beat:eS}),ew(0,1)),draw:ey(ek({pace:eS,beat:eS,turn:eS}),ey(ek(["kind","start","lasts","side","way","spot","u","v","yaw","paint","hold","raise","spread","head","lean"]),ew(0,1)))}),hC=new Map;function hP({grain:M,closed:L},R){let O=uX.reduce((M,R)=>2*M+Number(L[R]),0),A=(128*M+R)*2**uX.length+O,E=hC.get(A);if(void 0!==E)return E;hC.size>=4096&&hC.clear();let T={rolled:eR(hU,el(String(M))),beats:{brief:{beat:0/0,plan:null},lingering:{beat:0/0,plan:null}}};return hC.set(A,T),T}let hH=[.014,.034],hG=[9051930,0xc8c0a8,1184276],hF={ball:M=>{var L,R,O,A;let E,T,{setting:I,age:z,lastsFor:_,chance:N}=M,D=function({setting:M,chance:L}){let R=L=>Number(!M.closed[L])+Number(!M.closed[uQ(L)]),O=Math.max(...uX.map(M=>R(M)));return u4(uX.filter(M=>R(M)===O),L("side"))??0}(M),U=uQ(D),C=u1(I,D,.42+.16*N("spot"),.022,.022),P=1-u0(I,D)-u0(I,U)-.044,H=I.closed[U],G=.7*_,F=.12*Math.sin(Math.PI*e4(z,G,_))*!!H,W=P*(H?e4(z,0,G)-F:z/_),{into:B}=uZ[D];return hc((L=I.room,R=au(C,tL(B,W)),O=he(tS(ac,B),W/.022),A={stuff:"rubber",tint:uV(hT,N("paint"))},T=[E=.044/Math.sqrt(3),E,E],[O,ht(he([1,0,0],hI),he(ac,hI),O),ht(he([0,0,1],hI),he([1,0,0],hI),O)].flatMap(M=>hs(L,R,T,M,A))),H?hu(M,"thud",au(C,tL(B,P)),.35,[G,.4]):[])},paper:M=>{let{setting:L,age:R,lastsFor:O,chance:A}=M,E=R/O*3,T=e6(E%1*2.2),I=(Math.floor(E)+T)/3,z=[.42+.16*A("u"),0,.2+.6*A("v")],_=[.42+.16*A("spot"),0,.2+.6*A("way")],N=.002+.008*Math.sin(Math.PI*T),D=au(u7(z,_,I),tL(ac,N)),U=2*Math.PI*A("yaw")+2.5*I;return hc(hs(L.room,D,hz,he(ac,-U),{stuff:"paper"}),Array.from({length:3},(L,R)=>hu(M,"rustle",D,.2,[R*O/3,1.2])).flat())},cat:M=>{let{setting:L,age:R,lastsFor:O,chance:A}=M,E=hN(M,"side"),T=hN(M,"way"),I=[.42+.16*A("u"),0,.42+.16*A("v")],z=u8(E,I)/.2,_=O-u8(I,T)/.2,N=hr(E,I),D=hr(I,T),U=e6(e4(R,z,z+.6))*(1-e6(e4(R,_-1.2,_-.6))),C=R<z?{at:u7(E,I,R/z),facingYaw:N,sat:0,trod:.2*R}:R<_?{at:I,facingYaw:e8(N,D,e6(e4(R,_-.6,_))),sat:U,trod:0}:{at:u7(I,T,e4(R,_,O)),facingYaw:D,sat:0,trod:(R-_)*.2};return hc(function(M,{at:L,facingYaw:R,sat:O,trod:A},E,T){let I=ha(R),z=ha(R+Math.PI/2),_=au(au(L,tL(I,e8(-.035,-.018,O))),tL(ac,e8(.04,.022,O))),N=au(au(L,tL(I,e8(.035,.015,O))),tL(ac,e8(.04,.062,O))),D=he(ac,-(R+E*O)),U=au(N,au(tL(I,.012),tL(ac,.018))),C=[-1,1].flatMap(L=>hs(M,au(U,D([0,.016,.009*L])),[.006,.01,.006],D,T)),P=.012*(1-O)*Math.sin(90*A),H=[N,_].flatMap((L,R)=>[-1,1].flatMap(O=>{let A=au(L,tL(z,.01*O)),E=P*O*(0===R?1:-1);return ho(M,[[A[0]+I[0]*E,.003,A[2]+I[2]*E],A],[.008,.008],z,T)})),G=.012*Math.sin(40*A),F=u7(au(_,au(au(tL(I,-.02),tL(ac,.05)),tL(z,G))),[_[0]-.05*I[0]+.02*z[0],.006,_[2]-.05*I[2]+.02*z[2]],O);return[...ho(M,[_,N],[.03,.03],z,T),...hs(M,U,[.026,.024,.028],D,T),...C,...H,...ho(M,[_,F],[.007,.007],z,T)]}(L.room,C,2.4*(A("head")-.5),{stuff:"fabric",tint:uV(h_,A("paint"))}),.4>A("hold")?hu(M,"mew",I,.3,[z+2,.7]):[])},phone:M=>{let{setting:L,age:R,lastsFor:O,chance:A}=M,E={stuff:"plastic",tint:uV(hG,A("paint"))},T=[.42+.16*A("u"),0,.42+.16*A("v")],I=he(ac,-(2*Math.PI*A("yaw"))),z=Math.floor((O-2)/3),_=R%3<1.3&&R<3*z?.0015*Math.sin(60*R):0;return hc([...hs(L.room,au(T,[0,.006,0]),[.04,.012,.03],I,E),...hs(L.room,au(T,[_,.017+Math.abs(_),0]),[.012,.008,.045],I,E)],Array.from({length:z},(L,R)=>hu(M,"ring",T,.7,[3*R,1.3])).flat())},knock:M=>{let{setting:L,n:R,chance:O}=M,A=u4(u3(L),O("side"));if(null===A)return hf;let E=u1(L,A,.15+.7*O("spot"),.22,0);return hc(hn,Array.from({length:R>=20?7:3},(L,R)=>hu(M,"knock",E,.5,[.45*R,.3])).flat())},footsteps:M=>{let{setting:L,lastsFor:R,chance:O}=M,A=u4(u5(L),O("side"));return null===A?hf:hc(hn,hu(M,"steps",u1(L,A,.5,0,.05),.5,[0,R]))},door:M=>{let{setting:L,age:R,chance:O}=M,A=u4(u3(L),O("side"));if(null===A)return hf;let{along:E,into:T}=uZ[A],{room:I}=L,z=function({setting:M,chance:L},R){let{base:O,along:A}=uZ[R],[E,,T]=A,I=[.22,.78];if(null===M.hole)return uV(I,L("spot"));let{u:z,v:_}=eE(M.hole);return(z-O[0])*E+(_-O[2])*T<.5?I[1]:I[0]}(M,A)-.08,_=(M,R,O)=>u1(L,A,z+M,R,O),N=u9(E,T,hg*(e6(e4(R,4,6))-e4(R,12,12.4))*(1+.04*Math.sin(9*R))),D=tS(N,ac),U=_(0,0,.003),C=uV(hv,O("paint")),P=M=>am(_(M,0,0),[tL(E,.012),[0,.4+.012,0],tL(T,.01)],I,"trim");return hc([ad(_(0,0,8e-4),tL(E,.16),[0,.4,0],I,"fabric",65793),...P(-.012),...P(.16),...am(_(0,.4,0),[tL(E,.16),[0,.012,0],tL(T,.01)],I,"trim"),...am(U,[tL(N,.16),[0,.396,0],tL(D,.006)],I,"wood",C),...am(au(au(U,tL(N,.82*.16)),au([0,.2,0],tL(D,.006))),[tL(N,.02),[0,.006,0],tL(D,.008)],I,"metal")],[...hu(M,"creak",U,.3,[4,2]),...hu(M,"thud",U,.5,[12.3,.4])])},figure:({setting:M,age:L,chance:R})=>{let O=u4(u3(M),R("side"))??uV(uX,R("side")),A=.35*(.94+.12*R("spot")),E=u1(M,O,.42+.16*R("u"),0,.09);return hc(hd(M.room,E,(M=>{let{into:L}=uZ[M];return Math.atan2(-L[2],-L[0])})(O),A,{arms:[hh,hh],headTurn:.12*Math.sin(.7*L),bowed:.02*Math.sin(.9*L)},hm))},shadow:({setting:M,age:L,lastsFor:R,chance:O})=>{let A=uV(uX,O("side")),{along:E,into:T}=uZ[A],I=.42+.16*O("spot"),z=.15+.3*L/R,_=e6(e4(L,.45*R,.6*R)),N=([L,R],[O,_])=>ad(u2(A,I+O,.0015,z+L),tL(T,R-L),tL(E,_-O),M.room,"fabric",65793);return hc([N([0,.13],[-.016,-.003]),N([0,.13],[.003,.016]),N([.13,.235],[-.022,.022]),N([.245,.29],[-.013,.013]),N([.12,.22],[-.036,-.026]),N([e8(.12,.2,_),.22],[.026,.036]),..._>0?[N([.2,.215],[.022,.022+.09*_])]:[]])},hand:M=>{let{setting:L,n:R,age:O,lastsFor:A,chance:E}=M,T=u4(u5(L),E("side"));if(null===T)return hf;let{along:I,into:z}=uZ[T],_=R>=30,N=_?.03:.018,D=.2+.1*E("spot"),[U,C]=hH,P=.5>E("way")?U:1-C,H=A-1.5;return hc(Array.from({length:_?6:4},(M,R)=>{let A=e6(e4(O,.15*R,1.2+.15*R)),_=.0015*Math.sin(5*O+R),G=(N*(.85+.15*E("raise",R))+_)*A*(1-e6(e4(O,H,H+.5)));return G>5e-4?am(u2(T,P,D+.006*R,0),[tL(I,C-U),[0,.0045,0],tL(z,G)],L.room,"skin",0xb8a89a):[]}).flat(),hu(M,"scrape",u2(T,P,D,0),.15,[H,.5]))},unfolding:M=>{let{setting:L,age:R,chance:O}=M,A=ha(2*Math.PI*O("yaw")),E=tL(ac,-1),T=e6(e4(R,0,6))-e4(R,12,13),I=.06*Math.sin(.8*R),z=[.3+.4*O("u"),.453,.3+.4*O("v")],_=(M,L)=>tL(u9(E,A,M),L),N=[z];for(let M=0;M<5;M+=1){let L=e6(e4(5*T,M,M+1)),R=(M%2==0?1:-1)*1.48,O=N.at(-1)??z;N.push(au(O,_(R*(1-L)+I*L,.068)))}let D=tS(A,ac),U=N.at(-1)??z,C=e6(e4(T,.9,1))*(.5+.2*Math.sin(1.3*R));return hc([...N.slice(1).flatMap((M,R)=>ho(L.room,[N[R]??z,M],[.012,.008],D,hb)),...C>0?[-1,0,1].flatMap(M=>ho(L.room,[U,au(U,_(I+M*C,.03))],[.004,.004],D,hb)):[]],[...hu(M,"creak",z,.4,[0,6]),...hu(M,"scrape",z,.5,[12,1])])},corner:M=>{let{setting:L,age:R,chance:O}=M,A=u4(u6(L),O("side"));if(null===A)return hf;let E=uJ(A),T=e6(e4(R,2,10))-e4(R,17,17.5);if(T<=0)return hf;let{room:I}=L,z=uZ[A].into,_=uZ[E].into,N=.4592,D=au(u2(A,1,.4592,.0128),tL(_,.0128)),U=au(au(z,_),[0,-1,0]),C=au(D,tL(U,.06)),P=1+.03*Math.sin(11*R),H=(M,L,R)=>ad(M,L,R,I,"fabric",65793),G=[0,.12,0];return hc([H(u1(L,A,.868,N-.12,4e-4),tL(uZ[A].along,.12),G),H(u1(L,E,.012,N-.12,4e-4),tL(uZ[E].along,.12),G),H(tM(D,tL(au(z,_),4e-4),-1),tL(z,.12),tL(_,.12)),...hs(I,au(C,tL(U,.05*T*P)),[.12,.12,.12],he(tR(tM(z,_,-1)),.2*T),{stuff:"wall"})],[...hu(M,"creak",C,.5,[2,8]),...hu(M,"thud",C,.7,[17.4,.5])])},balloon:M=>{let{setting:L,age:R,lastsFor:O,chance:A}=M,{room:E}=L,T={stuff:"rubber",tint:uV(hM,A("paint"))},I=[.25+.5*A("u")+.03*Math.sin(.11*R),.46-.042-.003*(1+Math.sin(.9*R)),.25+.5*A("v")+.03*Math.cos(.07*R)],z=au(I,[0,-.03,0]),_=R-(O-.6);if(_>=0){let L=Math.max(.003,z[1]-2.5*_*_);return hc(ho(E,[[z[0],L,z[2]],[z[0]+.12,L,z[2]]],[.002,.002],ac,hR),hu(M,"pop",I,.8,[O-.6,.3]))}let N=.01*Math.sin(.6*R);return hc([...[he(ac,.05*R),ht(he(ac,hO),he(ac,.05*R)),ht(he([1,0,0],hO),he(ac,.05*R))].flatMap(M=>hs(E,I,hL,M,T)),...ho(E,[z,au(z,[N,-.12,N/2])],[.002,.002],[1,0,0],hR)])},chairs:M=>{let{setting:L,age:R,chance:O}=M,A=[O("u"),0,O("v")],E=8+10*O("hold"),T=e6(e4(R,E,E+2.5)),I=2*Math.PI*O("yaw");return hc(Array.from({length:5},(M,R)=>{var E,z;let _,N,D=I+(R+.5*O("spread",R))*2*Math.PI/5,U=e8(.17,.22,O("raise",R)),C=[.5+U*Math.cos(D),0,.5+U*Math.sin(D)],P=2*Math.PI*O("head",R);return E=L.room,z=C,_=he(ac,-e8(P,a2(P,hr(C,A)),T)),[...(N=(M,L,R)=>hs(E,au(z,_(M)),L,_,R))([0,.086,0],[.09,.008,.09],hA),...N([-.041,.135,0],[.008,.09,.09],hA),...[-1,1].flatMap(M=>[-1,1].flatMap(L=>N([.038*M,.041,.038*L],[.008,.082,.008],hE)))]}).flat(),hu(M,"scrape",[.5,0,.5],.6,[E,2.5]))},mannequin:({setting:M,age:L,chance:R})=>{let O=Math.floor(L/60),A=M=>({armSwing:2.6*R("raise",2*O+M),splayed:1.2*R("spread",2*O+M)}),E=[e8(.217,.783,R("u")),.004,.42+.16*R("v")];return hc([ad([E[0]-.04,.004,E[2]-.04],[0,0,.08],[.08,0,0],M.room,"metal"),...hd(M.room,E,2*Math.PI*R("yaw"),.35,{arms:[A(0),A(1)],headTurn:2.4*(R("head",O)-.5),bowed:.3*(R("lean",O)-.5)},hp)])}},hW=Object.keys(hw).filter(M=>M in hw);function hB(M,L){let[R,O,A,E]=aN;return[!aU(M,L,R),!aU(M,L,O),!aU(M,L,A),!aU(M,L,E)]}function h$(M,{origin:[L,R,O],roomSide:A}){let E=([M,E,T])=>[L+M*A,R+E*A,O+T*A];return M.map(M=>{let[L,R,O,A]=M.corners;return{...M,corners:[E(L),E(R),E(O),E(A)]}})}let hq=([M,L,R])=>[M,-R,L],hj=M=>M.map(([M,L,R,O])=>[hq(M),hq(L),hq(R),hq(O)]),hK=(M,L)=>M[Math.floor(L*M.length)]??M[0],hY=[6974010,0xa87a2a,5913130,2775642,8006192,6974064],hV=M=>Math.min(255,M+24),hX=M=>hV(M>>16)<<16|hV(M>>8&255)<<8|hV(255&M),hZ=(M,L)=>({block:R},O)=>{let A=hK(hY,O(0)),E=(M-.4)/L;return[R([0,.1,0],[M,.3,.9],"fabric",A),R([0,.4,0],[M,.45,.25],"fabric",A),R([-M/2+.1,.4,.25],[.2,.2,.65],"fabric",A),R([M/2-.1,.4,.25],[.2,.2,.65],"fabric",A),...Array.from({length:L},(M,O)=>R([(O-(L-1)/2)*E,.4,.25],[E-.02,.12,.62],"fabric",hX(A))),R([0,0,.06],[M-.1,.1,.06],"wood",4861980),R([0,0,.78],[M-.1,.1,.06],"wood",4861980)].flat()},hQ={sofa:{build:hZ(1.9,2)},armchair:{build:hZ(.95,1),cornered:!0},"floor-lamp":{cornered:!0,gap:[.03,.12],build:({prism:M,beam:L},R)=>[M([0,0,.23],.16,.03,"metal",1447706),L([0,.03,.23],[0,1.4,.23],.025,"metal",0xb09a60),M([0,1.36,.23],.21,.3,"paper",0xf0dcb0,{top:.13,lid:hK([0xf0dcb0,0xfff4d0],R(0))})].flat()},tv:{build:({block:M,panel:L,beam:R})=>[M([0,0,0],[1.1,.45,.42],"wood",4861980),M([0,.45,.02],[.72,.56,.38],"plastic",2762274),L([-.32,.51,.401],[.48,0,0],[0,.42,0],"screen",0xc8d4e0),L([.2,.51,.401],[.12,0,0],[0,.42,0],"rubber",1447706),M([.26,.82,.4],[.05,.05,.02],"metal",0xb0b0a8),M([.26,.72,.4],[.05,.05,.02],"metal",0xb0b0a8),R([0,1.01,.2],[-.3,1.45,.16],.012,"metal",0xb0b0a8),R([0,1.01,.2],[.3,1.45,.16],.012,"metal",0xb0b0a8)].flat()},bed:{build:({block:M},L)=>{let R=hK([8006192,2767466,5925434,0xa88a3a,9079440],L(0));return[M([0,0,0],[1,.88,.06],"wood",4861980),M([0,0,.1],[.84,.15,1.85],"wood",1447706),M([0,.15,.06],[.96,.2,1.96],"wood",4861980),M([0,.35,.08],[.9,.17,1.9],"fabric",0xd8d2c0),M([0,.52,.12],[.6,.1,.36],"fabric",0xeeeae0),M([0,.5,.62],[.94,.045,1.38],"fabric",R)].flat()}},mattress:{gap:[.02,.3],build:({slab:M,panel:L},R)=>.45>R(0)?[M([-.45,0,.4],[[.9,0,0],[0,1.86,-.38],[0,.04,.19]],"fabric",0xd8d2c0),...[.15,.4,.65,.9].map(M=>L([-.45,1.86*M+.041,.4+-.38*M+.191],[.9,0,0],[0,.05,-.0102],"fabric",8030880))].flat():[M([-.45,0,0],[[.9,0,0],[0,.19,0],[0,0,1.9]],"fabric",0xd8d2c0),...[.2,.6,1,1.4,1.8].map(M=>L([-.45,.191,M],[.9,0,0],[0,0,-.05],"fabric",8030880))].flat()},wardrobe:{build:({block:M,panel:L,slab:R},O)=>{let A=hK([4861980,6965802,2761244],O(0)),E=.4>O(1),T=(M,R,O)=>L([M,.08,.601],[.57,0,0],[0,1.86,0],R,O);return[M([0,0,0],[1.2,2,.6],"wood",A),M([0,2,0],[1.26,.05,.63],"wood",A),T(.01,"wood",hX(A)),M([.07,1,.6],[.02,.14,.03],"metal",0xb09a60),...E?[T(-.58,"rubber",328966),R([-.58,.08,.6],[[.5132548483410257,0,.24793035444340122],[0,1.86,0],[-.008699310682224605,0,.018008942047053538]],"wood",hX(A))]:[T(-.58,"wood",hX(A)),M([-.07,1,.6],[.02,.14,.03],"metal",0xb09a60)]].flat()}},bookshelf:{build:({block:M,panel:L},R)=>{let O=[8006186,2771562,3824186,0xa88a4a,4864602,0xc8c0a8];return[M([0,0,0],[.9,1.9,.3],"wood",5913634),...Array.from({length:5},(M,A)=>{let E=.1+.36*A;return[L([-.41,E,.301],[.82,0,0],[0,.32,0],"rubber",526086),...[0,1,2].map(M=>L([-.4+.27*M+.04*R(6*A+M),E,.302],[.12+.1*R(6*A+M+3),0,0],[0,.2+.09*R(40+3*A+M),0],"paper",hK(O,R(60+3*A+M))))].flat()})].flat()}},rug:{gap:[.2,.6],turn:.3,build:({panel:M},L)=>{let R=hK([8003364,2046554,5921338,9071162],L(0)),O=(L,R,O)=>M([-.8+L,R,1.1-L],[1.6-2*L,0,0],[0,0,-(1.1-2*L)],"fabric",O);return[O(0,.008,0xd8c8a0),O(.07,.009,R),O(.2,.01,0xd8c8a0),O(.24,.011,R),O(.42,.012,hX(R))].flat()}}},hJ=[0xd02020,0xe8b010,2121928,2134080,0xd050a0],h0={desk:{build:({block:M,panel:L},R)=>{let O=.5>R(0)?1:-1;return[M([0,.7,0],[1.4,.03,.7],"wood",0xb89868),M([-.67,0,.02],[.03,.7,.64],"metal",9080710),M([.67,0,.02],[.03,.7,.64],"metal",9080710),M([0,.3,.02],[1.31,.38,.02],"metal",9080710),M([.44*O,.12,.1],[.4,.58,.56],"metal",0x9a9f96),M([-(.2*O),.73,.2],[.07,.1,.07],"plastic",1842464),M([-(.2*O),.83,.2],[.5,.33,.04],"plastic",1842464),L([-(.2*O)-.23,.85,.241],[.46,0,0],[0,.29,0],"screen",0x9ab8d8),M([-(.2*O),.73,.42],[.4,.02,.13],"plastic",0xd8d8d0)].flat()}},"office-chair":{gap:[.15,.7],turn:Math.PI,build:({block:M},L)=>{let R=hK([2763828,2046554,5906212],L(0));return[M([0,.04,.27],[.6,.04,.06],"plastic",1842464),M([0,.04,0],[.06,.04,.6],"plastic",1842464),M([0,.08,.27],[.06,.34,.06],"metal",9080710),M([0,.42,.07],[.48,.07,.46],"fabric",R),M([0,.55,.07],[.44,.5,.06],"fabric",R),M([-.26,.62,.15],[.05,.03,.3],"plastic",1842464),M([.26,.62,.15],[.05,.03,.3],"plastic",1842464),M([-.26,.49,.28],[.04,.13,.04],"plastic",1842464),M([.26,.49,.28],[.04,.13,.04],"plastic",1842464)].flat()}},"filing-cabinet":{build:({block:M,panel:L},R)=>{let O=hK([9080710,7305834,0xa8a088],R(0));return[M([0,0,0],[.47,1.32,.62],"metal",O),...[0,1,2,3].flatMap(A=>{let E=.04+.32*A,T=A===Math.floor(8*R(1))?.12:.006;return[T>.1?M([0,E,.62],[.43,.29,T],"metal",O):L([-.215,E,.62+T],[.43,0,0],[0,.29,0],"metal",0xb0b4aa),M([0,E+.19,.62+T],[.13,.02,.02],"metal",1842464)]})].flat()}},"water-cooler":{cornered:!0,build:({block:M,panel:L,prism:R})=>[M([0,0,0],[.32,.95,.32],"plastic",0xd8d8d0),R([0,1,.16],.135,.36,"glass",5937872,{top:.12}),R([0,.95,.16],.05,.05,"glass",5937872,{lid:null}),L([-.11,.52,.321],[.22,0,0],[0,.26,0],"rubber",1842464),M([-.05,.68,.32],[.03,.05,.035],"plastic",0xc02020),M([.05,.68,.32],[.03,.05,.035],"plastic",2117824),M([0,.52,.32],[.22,.02,.07],"plastic",0x9a9a94)].flat()},copier:{build:({block:M,panel:L})=>[M([0,0,0],[.6,.6,.6],"plastic",0x9a9a94),M([0,.6,0],[.66,.3,.62],"plastic",0xd8d8d0),M([0,.9,.04],[.6,.07,.44],"plastic",0xb4b4ac),M([.1,.9,.5],[.42,.03,.12],"plastic",1842464),L([.02,.931,.6],[.14,0,0],[0,0,-.08],"screen",8048800),M([-.45,.68,.14],[.24,.02,.36],"plastic",0xb4b4ac),L([-.55,.701,.46],[.2,0,0],[0,0,-.29],"paper",0xf0f0ea),L([-.28,.2,.601],[.56,0,0],[0,.015,0],"rubber",1842464),L([-.28,.4,.601],[.56,0,0],[0,.015,0],"rubber",1842464)].flat()},whiteboard:{build:({block:M,panel:L},R)=>{let O=hK([1714810,8002074,1727018],R(0));return[M([0,1,0],[1.2,.9,.02],"metal",0xb8b8b0),L([-.57,1.03,.021],[1.14,0,0],[0,.84,0],"plastic",0xf2f2ee),M([0,.98,0],[.8,.02,.06],"metal",0xb8b8b0),M([-.2,1,.02],[.12,.02,.02],"plastic",0xc02020),M([.05,1,.02],[.12,.02,.02],"plastic",2113696),...[0,1,2,3].map(M=>L([-.48+.2*R(2+M),1.72-.14*M,.022],[.3+.5*R(6+M),0,0],[0,.012,0],"plastic",O)),L([.1,1.15,.022],[.3,.22,0],[0,.012,0],"plastic",O)].flat()}},"cubicle-screen":{build:({block:M,panel:L},R)=>[M([0,.08,0],[.05,1.4,1.4],"fabric",hK([7043722,8026730,9071194],R(0))),M([0,1.48,0],[.06,.03,1.42],"metal",9080710),M([0,0,1.4],[.06,1.51,.04],"metal",9080710),M([0,0,.2],[.34,.03,.06],"metal",9080710),M([0,0,1.1],[.34,.03,.06],"metal",9080710),L([.026,1,.75],[0,0,-.21],[0,.3,0],"paper",0xf0eee0),L([.026,.95,1.05],[0,0,-.2],[0,.2,0],"paper",0xf0e070),L([-.026,1.05,.5],[0,0,.3],[0,.21,0],"paper",0xe8e8e0)].flat()},bin:{gap:[.02,.2],cornered:!0,build:({block:M,prism:L},R)=>[L([0,0,.17],.13,.32,"plastic",3816512,{top:.16,lid:657930}),....6>R(0)?M([.03,.3,.12],[.12,.06,.1],"paper",0xe8e6dc):[]].flat()},"server-rack":{build:({block:M,panel:L},R)=>[M([0,0,0],[.6,2,1],"metal",1447706),L([-.26,.06,1.001],[.52,0,0],[0,1.88,0],"glass",790548),...Array.from({length:9},(M,O)=>L([-.22,.2+.19*O,1.002],[.1+.34*R(O),0,0],[0,.014,0],"screen",.25>R(20+O)?0xff9020:3211120)),M([0,.9,1],[.03,.2,.03],"metal",9080710)].flat()},"wall-clock":{build:({disc:M,beam:L,panel:R},O)=>{let A=12*O(0),E=(M,R,O)=>L([0,2,.05],[Math.sin(2*M*Math.PI)*R,2+Math.cos(2*M*Math.PI)*R,.05],O,"plastic",1447706);return[M([0,2,0],.17,.04,"plastic",1447706,{lid:0xf0efe8}),...[0,1,2,3].map(M=>{let[L,O]=[[0,.13],[.13,0],[0,-.13],[-.13,0]][M]??[0,0];return R([L-.01,2+O-.01,.041],[.02,0,0],[0,.02,0],"plastic",1447706)}),E(A/12,.08,.016),E(A%1,.12,.01)].flat()}},"notice-board":{build:({block:M,panel:L},R)=>[M([0,1.1,0],[1,.7,.025],"wood",9071176),L([-.47,1.13,.026],[.94,0,0],[0,.64,0],"paper",0xa87848),...Array.from({length:7},(M,O)=>{let A=.1+.12*R(O),E=.1+.16*R(10+O),T=(R(20+O)-.5)*.05;return L([-.44+O%4*.22+.04*R(30+O),1.16+.3*(O<4)+.04*R(40+O),.028],[A,T,0],[-T,E,0],"paper",hK([0xf0eee4,0xf0eee4,0xf2e070,0xf0b0b8,0xb0d8f0],R(50+O)))})].flat()},"exit-sign":{build:({block:M,panel:L})=>{let R=(M,R,O,A)=>L([M,2.14+R,.051],[O,0,0],[0,A,0],"screen",0xd0ffe0),O=(M,R)=>L([M,2.14,.051],[.02,0,0],[R,.1,0],"screen",0xd0ffe0);return[M([0,2.1,0],[.46,.18,.05],"plastic",944688),R(-.19,0,.02,.1),R(-.17,0,.05,.02),R(-.17,.04,.04,.02),R(-.17,.08,.05,.02),O(-.09,.06),O(-.03,-.06),R(.03,0,.02,.1),R(.11,0,.02,.1),R(.08,.08,.08,.02)].flat()}},vent:{build:({block:M,panel:L})=>[M([0,.18,0],[.5,.32,.015],"metal",0xc4c4bc),...Array.from({length:6},(M,R)=>L([-.22,.215+.045*R,.016],[.44,0,0],[0,.025,0],"rubber",657930))].flat()},door:{build:({block:M,panel:L},R)=>{let O=hK([6978154,8018490,0xc8c0a8,4872826,8006186],R(0)),A=.5>R(1)?1:-1;return[M([-.45,0,0],[.07,2.07,.05],"wood",0xe6e4da),M([.45,0,0],[.07,2.07,.05],"wood",0xe6e4da),M([0,2.03,0],[.97,.07,.05],"wood",0xe6e4da),M([0,0,0],[.83,2.03,.035],"wood",O),M([.3*A,1,.035],[.13,.025,.05],"metal",0xb8bcc0),L([.3*A-.03,.93,.036],[.06,0,0],[0,.18,0],"metal",0xb8bcc0),L([-.41,0,.036],[.82,0,0],[0,.2,0],"metal",9079428),L([-.1,1.55,.036],[.2,0,0],[0,.07,0],"paper",0xe8e6dc)].flat()}},radiator:{build:({block:M})=>[...Array.from({length:8},(L,R)=>M([-.42+.12*R,.15,.03],[.09,.6,.09],"metal",0xe6e4da)),M([.55,.17,.05],[.14,.05,.05],"metal",0xb8bcc0)].flat()},socket:{build:({block:M,panel:L})=>[M([0,.28,0],[.16,.09,.012],"plastic",0xe6e4da),...[-.055,-.025,.025,.055].map(M=>L([M-.006,.31,.013],[.012,0,0],[0,.03,0],"rubber",657930))].flat()},"fire-extinguisher":{build:({block:M,prism:L,panel:R,beam:O})=>[M([0,.55,0],[.12,.04,.03],"metal",1447706),L([0,.3,.1],.08,.45,"metal",0xc01410),M([0,.75,.07],[.05,.05,.06],"metal",0xc01410),M([0,.8,.05],[.07,.05,.12],"plastic",1447706),O([.04,.8,.1],[.11,.45,.1],.025,"rubber",1447706),R([-.03,.45,.176],[.06,0,0],[0,.16,0],"paper",0xf0eee4)].flat()},payphone:{build:({block:M,panel:L,beam:R})=>[M([-.27,.9,0],[.02,.95,.3],"plastic",0x9aa8b0),M([.27,.9,0],[.02,.95,.3],"plastic",0x9aa8b0),M([0,1.85,0],[.56,.1,.32],"plastic",2050714),M([0,1.05,0],[.3,.5,.15],"metal",2763824),M([-.09,1.2,.15],[.06,.26,.05],"plastic",789516),R([-.09,1.2,.17],[.02,.92,.12],.015,"metal",0xb8bcc0),L([0,1.2,.151],[.1,0,0],[0,.13,0],"metal",0xb8bcc0),L([0,1.4,.151],[.1,0,0],[0,.04,0],"screen",6344832),L([.02,1.08,.151],[.06,0,0],[0,.05,0],"rubber",1447706)].flat()},pipe:{cornered:!0,build:({block:M,prism:L,disc:R},O)=>{let A=hK([8027256,9058842,3828298],O(0));return[L([-.07,0,.1],.055,2.3,"metal",A,{sides:6,lid:null}),L([.08,0,.07],.03,2.3,"metal",0xb0a890,{sides:6,lid:null}),M([0,.5,0],[.26,.04,.05],"metal",1447706),M([0,1.8,0],[.26,.04,.05],"metal",1447706),L([-.07,1.36,.1],.07,.05,"metal",A,{sides:6}),R([-.07,1.1,.16],.09,.02,"metal",0xc02018),M([-.07,1.085,.1],[.03,.03,.07],"metal",1447706)].flat()}},mirror:{build:({block:M,panel:L})=>[M([0,.95,0],[.6,.92,.02],"wood",3811868),L([-.27,.98,.021],[.54,0,0],[0,.86,0],"glass",0x9aacb4),M([0,.88,0],[.5,.02,.1],"wood",3811868)].flat()},window:{build:({block:M,panel:L},R)=>[L([-.5,.9,.01],[1,0,0],[0,1.1,0],"glass",hK([791588,4864592,0xa8b4b8],R(0))),M([0,.86,0],[1.14,.04,.11],"wood",0xe6e4da),M([0,2,0],[1.1,.05,.05],"wood",0xe6e4da),M([-.525,.9,0],[.05,1.1,.05],"wood",0xe6e4da),M([.525,.9,0],[.05,1.1,.05],"wood",0xe6e4da),M([0,.9,0],[.04,1.1,.035],"wood",0xe6e4da),M([0,1.5,0],[1,.04,.035],"wood",0xe6e4da)].flat()},curtain:{build:({block:M,panel:L},R)=>{let O=hK([0xb08a2a,6954794,5925450,0xc8c0b0],R(0)),A=M=>[-.6+1.2*M/12,M%2==0?.03:.09];return[M([0,2.17,.02],[1.3,.03,.03],"metal",0xb8bcc0),...Array.from({length:12},(M,R)=>{let[E,T]=A(R),[I,z]=A(R+1);return L([E,.08,T],[I-E,0,z-T],[0,2.09,0],"fabric",O)})].flat()}},"potted-plant":{cornered:!0,gap:[.02,.1],build:({prism:M,beam:L},R)=>{let{pot:O,stem:A,lean:E,out:T,foliage:I,sides:z}=fv,_=fv.tall(R(0)),N=hK([2779690,3832368,2054714],R(1));return[M([0,0,T],O.foot,O.height,"plastic",0x9a5030,{top:O.rim,lid:2759184}),L([0,O.height,T],[E,O.height+_,T],A,"wood",4861980),...I.slice(1).map((L,R)=>{let O=I[R]??L,A=(([M,L],R)=>M+L*R)(O.at,_);return M([0===R?0:E,A,T],O.radius,(([M,L],R)=>M+L*R)(L.at,_)-A,"foliage",N,{sides:z,top:L.radius})})].flat()}},"cardboard-box":{gap:[.02,.4],turn:.5,build:({block:M,panel:L},R)=>{let O=(R,O,A,E)=>[...M([R,O,A],[E,.7*E,.8*E],"paper",0xa8824e),...L([R-.03,O+.7*E+.001,A+.8*E],[.06,0,0],[0,0,-(.8*E)],"paper",0xd8c490),...L([R-.03,O+.45*E,A+.8*E+.001],[.06,0,0],[0,.25*E,0],"paper",0xd8c490)];return[O(0,0,0,.55),.5>R(0)?O(.05,.385,.03,.4):[],.35>R(1)?O(.52,0,.06,.38):[]].flat()}},bench:{build:({block:M},L)=>{let R=hK([9067056,6978138,0x9a8a6a],L(0));return[...[.02,.16,.3].map(L=>M([0,.42,L],[1.5,.04,.12],"wood",R)),M([0,.58,0],[1.5,.1,.03],"wood",R),M([0,.74,0],[1.5,.1,.03],"wood",R),...[-.62,.62].flatMap(L=>[M([L,0,.03],[.05,.42,.4],"metal",1447706),M([L,.42,.03],[.05,.44,.04],"metal",1447706)])].flat()}},locker:{build:({block:M,panel:L},R)=>{let O=hK([5925498,5929562,0xa89a78,0xb05a2a,8026744],R(0)),A=Math.floor(6*R(1));return[M([0,0,0],[.92,1.8,.45],"metal",O),...[-.3,0,.3].flatMap((R,E)=>[L([R-.14,.08,.451],[.28,0,0],[0,1.68,0],"metal",E===A?657932:0xc8c8c0),...E===A?[M([R-.14,.08,.45],[.015,1.68,.27],"metal",O)]:[L([R-.1,1.5,.452],[.2,0,0],[0,.02,0],"rubber",1447706),L([R-.1,1.44,.452],[.2,0,0],[0,.02,0],"rubber",1447706),M([R+.1,.9,.45],[.02,.1,.03],"metal",1447706)]])].flat()}},"vending-machine":{build:({block:M,panel:L},R)=>[M([0,0,0],[.9,1.83,.8],"plastic",hK([0xb01c1c,1850010,1866314,0xd8d4c8],R(0))),L([-.39,.55,.801],[.56,0,0],[0,1.15,0],"screen",0xffeec8),...Array.from({length:12},(M,O)=>L([-.36+O%4*.135,.62+.36*Math.floor(O/4),.802],[.09,0,0],[0,.2,0],"plastic",hK([0xc03020,2121920,0xd0a020,3182656,8401040],R(1+O)))),L([-.39,.2,.801],[.56,0,0],[0,.22,0],"rubber",1447706),L([.23,.9,.801],[.14,0,0],[0,.3,0],"metal",0xb0b4b8),L([.24,1.3,.801],[.12,0,0],[0,.06,0],"screen",0xff6030)].flat()},"wet-floor-sign":{gap:[.25,.6],turn:Math.PI,build:({slab:M,panel:L})=>[0,1].flatMap(R=>{let O=0===R?1:-1,A=.2+.16*O,E=.2+.015*O,T=(M,R,T)=>L([-O*(.15-T),.62*M,A+M*(E-A)+.004*O],[O*(.3-2*T),0,0],[0,(R-M)*.62,(R-M)*(E-A)],"plastic",1447706);return[M([-.15,0,1===O?A-.012:A],[[.3,0,0],[0,.62,E-A],[0,0,.012]],"plastic",0xf2c200),T(.25,.6,.06),T(.7,.8,.11)].flat()})},"traffic-cone":{gap:[.1,.6],turn:.8,build:({block:M,prism:L})=>[M([0,0,0],[.36,.03,.36],"rubber",0xe85010),L([0,.03,.18],.13,.5,"plastic",0xf05a10,{top:.03}),L([0,.25,.18],.086,.1,"plastic",0xf0f0e8,{top:.066,lid:null})].flat()},ladder:{cornered:!0,build:({beam:M,block:L})=>[...[-.2,.2].map(L=>M([L,.03,.62],[L,2.1,.03],.05,"metal",0xb0b4b8)),...Array.from({length:6},(M,R)=>{let O=(R+.7)/6.6;return L([0,2.1*O,.62+-.59*O-.02],[.36,.03,.04],"metal",0xb0b4b8)})].flat()},...hQ,"shopping-cart":{gap:[.1,.6],turn:1.2,build:({block:M,panel:L,beam:R})=>[M([0,.5,.12],[.5,.42,.8],"metal",0xc0c4c8),L([-.22,.921,.9],[.44,0,0],[0,0,-.76],"rubber",789518),...[.62,.76].flatMap(M=>[L([.251,M,.9],[0,0,-.76],[0,.03,0],"rubber",1447706),L([-.251,M,.14],[0,0,.76],[0,.03,0],"rubber",1447706)]),M([0,1,0],[.56,.04,.04],"plastic",0xc02020),R([-.23,.12,.2],[-.23,1,.03],.03,"metal",0xc0c4c8),R([.23,.12,.2],[.23,1,.03],.03,"metal",0xc0c4c8),M([0,.1,.12],[.44,.03,.82],"metal",0xc0c4c8),M([0,0,.16],[.46,.1,.08],"rubber",1447706),M([0,0,.82],[.46,.1,.08],"rubber",1447706)].flat()},"arcade-cabinet":{build:({block:M,panel:L,beam:R},O)=>{let A=hK([1317434,1710620,3806266,1325610],O(0)),E=hK(hJ,O(1));return[M([0,0,0],[.66,.9,.75],"wood",A),M([0,.9,0],[.66,.75,.42],"wood",A),M([0,.9,.42],[.66,.07,.4],"wood",2763310),M([0,1.65,0],[.66,.2,.52],"wood",A),L([-.27,1.02,.421],[.54,0,0],[0,.48,0],"screen",hK(hJ,O(2))),L([-.3,1.68,.521],[.6,0,0],[0,.14,0],"screen",E),R([-.15,.97,.6],[-.15,1.05,.6],.02,"metal",0xc0c4c8),M([-.15,1.05,.58],[.045,.045,.045],"plastic",0xd02020),...[.02,.1,.18].map((M,R)=>L([M,.971,.66],[.045,0,0],[0,0,-.045],"plastic",hK(hJ,(R+1)/5))),L([-.12,.3,.751],[.24,0,0],[0,.3,0],"metal",2763310),L([-.06,.44,.752],[.04,0,0],[0,.06,0],"screen",0xff7020),L([.02,.44,.752],[.04,0,0],[0,.06,0],"screen",0xff7020),L([.331,.3,.7],[0,0,-.6],[0,.12,0],"plastic",E),L([-.331,.3,.1],[0,0,.6],[0,.12,0],"plastic",E)].flat()}},"chair-stack":{cornered:!0,build:({block:M,beam:L,slab:R},O)=>{let A=hK([0xd06020,2775706,9079428,0x9a2a2a],O(0)),E=.45+3*.1;return[...Array.from({length:4},(L,R)=>M([0,.45+.1*R,.06+.035*R],[.46,.03,.44],"plastic",A)),R([-.22,.48,.03],[[.44,0,0],[0,E-.45+.42,.125],[0,-.01,.03]],"plastic",A),...[-.2,.2].flatMap(M=>[L([M,.02,.04],[M,E,.2],.025,"metal",0xc0c4c8),L([M,0,.56],[M,E,.56],.025,"metal",0xc0c4c8)])].flat()}},slide:{build:({block:M,slab:L},R)=>{let O=hK(hJ,R(0)),A=hK([2775706,2783802,9079428],R(1)),E=[0,-.92,1.75];return[M([-.27,0,.02],[.04,1.6,.6],"metal",A),M([.27,0,.02],[.04,1.6,.6],"metal",A),M([0,1.05,.02],[.5,.05,.6],"metal",A),...[.3,.6].map(L=>M([-.34,L,.1],[.1,.03,.44],"metal",A)),L([-.25,1.06,.62],[[.5,0,0],[0,.035,.018],E],"plastic",O),L([-.25,1.09,.62],[[.03,0,0],[0,.11,.057],E],"plastic",O),L([.22,1.09,.62],[[.03,0,0],[0,.11,.057],E],"plastic",O),M([0,0,2.3],[.44,.14,.05],"metal",A)].flat()}},"pool-ladder":{build:({beam:M,block:L})=>[...[-.24,.24].flatMap(L=>[M([L,0,.5],[L,.85,.5],.04,"metal",0xc0c4c8),M([L,.85,.5],[L,1.02,.36],.04,"metal",0xc0c4c8),M([L,1.02,.36],[L,1.02,.02],.04,"metal",0xc0c4c8)]),...[.2,.45,.7].map(M=>L([0,M,.45],[.48,.03,.1],"plastic",0xe8e8e0))].flat()},balloon:{gap:[.1,.6],build:({prism:M,block:L,beam:R},O)=>{let A=hK(hJ,O(0)),E=(O(1)-.5)*.2;return[M([0,2,.15],.05,.1,"rubber",A,{sides:6,top:.14,lid:null}),M([0,2.1,.15],.14,.09,"rubber",A,{sides:6,lid:null}),M([0,2.19,.15],.14,.11,"rubber",A,{sides:6,top:.06}),L([0,1.97,.135],[.03,.03,.03],"rubber",A),R([0,1.97,.15],[E,.95,.15],.008,"paper",0xf0f0ea)].flat()}},mannequin:{gap:[.05,.5],turn:.7,build:({block:M,prism:L,beam:R},O)=>{let A=hK([0xd8cdbf,0xc8b8a8,0xe8e4dc,2763308],O(0)),E=O(1),T=[.3+.25*E,.82+.9*E,.2+(O(2)-.3)*.3];return[L([0,0,.2],.2,.025,"metal",0xc0c4c8),M([-.09,.025,.13],[.13,.85,.14],"plastic",A),M([.09,.025,.13],[.13,.85,.14],"plastic",A),M([0,.875,.11],[.36,.58,.19],"plastic",A),M([0,1.455,.16],[.09,.08,.09],"plastic",A),M([0,1.535,.11],[.16,.22,.19],"plastic",A),R([-.22,1.42,.2],[-.25,.82,.22],.09,"plastic",A),R([.22,1.42,.2],T,.09,"plastic",A)].flat()}},"lab-bench":{build:({block:M,panel:L,prism:R,beam:O},A)=>{let E=[3194976,3174608,0xd09020,0xc03080];return[M([0,0,.06],[1.7,.1,.6],"plastic",1447706),M([0,.1,.03],[1.76,.76,.68],"wood",0xa8b4b8),M([0,.86,0],[1.8,.04,.75],"rubber",789518),...[-.585,0,.585].map(M=>L([M-.27,.14,.711],[.54,0,0],[0,.68,0],"wood",0xc0ccd0)),...[-.4,-.22].map((M,L)=>R([M,.9,.4],.07,.17,"glass",hK(E,A(L)),{sides:6,top:.02})),M([-.7,.9,.3],[.16,.03,.22],"metal",1447706),O([-.7,.93,.34],[-.7,1.2,.38],.05,"metal",0xd8d8d0),O([-.7,1.02,.44],[-.7,1.3,.5],.04,"metal",1447706)].flat()}},tank:{build:({block:M,panel:L},R)=>{let O=hK([2050618,2771546,4868639],R(0)),A=-.3+.5*R(1);return[M([0,0,0],[1,.6,.5],"metal",9080722),M([0,.6,.02],[.96,.62,.46],"glass",O),M([0,1.22,0],[1,.04,.5],"metal",1447706),M([0,.58,0],[1,.04,.5],"metal",1447706),L([A,.8,.481],[.1,.03,0],[-.02,.3,0],"skin",0xc8c0a8),L([A+.03,1.08,.481],[.12,0,0],[0,.09,0],"skin",0xc8c0a8),L([A+.3,.7,.481],[.02,0,0],[0,.02,0],"glass",0xa8c8c0),L([A+.32,.86,.481],[.03,0,0],[0,.03,0],"glass",0xa8c8c0),L([A+.29,1.04,.481],[.02,0,0],[0,.02,0],"glass",0xa8c8c0)].flat()}},barrel:{gap:[.02,.3],cornered:!0,build:({prism:M,block:L,panel:R},O)=>{let A=hK([2050682,9058842,0xd0a010,2775610],O(0));return[M([0,0,.3],.29,.88,"metal",A,{lid:3816510}),M([0,.28,.3],.3,.03,"metal",A,{lid:null}),M([0,.58,.3],.3,.03,"metal",A,{lid:null}),L([.12,.88,.26],[.06,.02,.06],"metal",1447706),R([-.09,.36,.572],[.18,0,0],[0,.18,0],"paper",0xf0d020)].flat()}},crate:{gap:[.02,.3],turn:.4,build:({block:M,panel:L})=>[M([0,0,0],[.8,.8,.8],"wood",0xb08a58),L([-.4,0,.801],[.1,0,0],[.7,.8,0],"wood",9070652),L([-.4,0,.802],[.8,0,0],[0,.1,0],"wood",9070652),L([-.4,.7,.802],[.8,0,0],[0,.1,0],"wood",9070652),L([.401,0,.8],[0,0,-.1],[0,.8,-.7],"wood",9070652),L([.402,0,.8],[0,0,-.8],[0,.1,0],"wood",9070652),L([.402,.7,.8],[0,0,-.8],[0,.1,0],"wood",9070652),L([-.401,0,0],[0,0,.1],[0,.8,.7],"wood",9070652),L([-.402,0,0],[0,0,.8],[0,.1,0],"wood",9070652),L([-.402,.7,0],[0,0,.8],[0,.1,0],"wood",9070652),L([-.4,.801,.8],[.1,0,0],[.7,0,-.8],"wood",9070652),L([-.15,.3,.803],[.3,0,0],[0,.05,0],"rubber",1447706)].flat()},drain:{gap:[.3,.8],build:({panel:M},L)=>{let[R,O,A]=.5>L(0)?[.32,.32,5]:[1.2,.18,12];return[M([-R/2,.006,O],[R,0,0],[0,0,-O],"metal",5921882),...Array.from({length:A},(L,E)=>M([-R/2+.03+E*(R-.06)/A,.007,O-.03],[(R-.06)/A*.55,0,0],[0,0,-(O-.06)],"rubber",263172))].flat()}},"cable-reel":{gap:[.02,.3],build:({disc:M,panel:L})=>[M([0,.5,0],.5,.05,"wood",0xb08a58),M([0,.5,.05],.31,.5,"rubber",921104,{lid:null}),M([0,.5,.55],.5,.05,"wood",0xb08a58),L([-.07,.43,.601],[.14,0,0],[0,.14,0],"rubber",328965),...[[-.25,0],[.25,0],[0,-.25],[0,.25]].map(([M=0,R=0])=>L([M-.02,.48+R,.601],[.04,0,0],[0,.04,0],"metal",9080722))].flat()},monolith:{gap:[.3,.7],build:({block:M})=>M([0,0,0],[1,2.25,.25],"glass",263173)},staircase:{build:({panel:M,beam:L})=>[...Array.from({length:10},(L,R)=>{let O=(R+1)*.2,A=(10-R)*.24;return[M([-.45,O,A],[.9,0,0],[0,0,-.24],"plastic",9210500),M([-.45,O-.2,A],[.9,0,0],[0,.2,0],"plastic",9210500),M([.45,0,A],[0,0,-.24],[0,O,0],"plastic",9210500),M([-.45,0,A-.24],[0,0,.24],[0,O,0],"plastic",9210500)].flat()}),L([.45-.03,1.05,2.4],[.45-.03,2.25,.3],.04,"metal",9080722),L([.45-.03,.2,2.38],[.45-.03,1.05,2.38],.04,"metal",9080722)].flat()}},h2=(M,L)=>([R,O,A])=>{let[E,T]=[R-L,A-L];return 0===M?[R,O,A]:1===M?[L-T,O,L+E]:2===M?[L-E,O,L-T]:[L+T,O,L-E]},h1={from:.18,to:.42,least:1/3,most:2/3};function h3(M){let L=M.flatMap(M=>M.corners),R=M=>L.map(L=>L[M]);return{least:[Math.min(...R(0)),Math.min(...R(1)),Math.min(...R(2))],most:[Math.max(...R(0)),Math.max(...R(1)),Math.max(...R(2))]}}let h5=(M,L,R=0)=>[0,1,2].every(O=>M.least[O]<L.most[O]+R&&L.least[O]<M.most[O]+R),h4=(M,L)=>[0,1,2].every(R=>M.least[R]>L.least[R]-1e-9&&M.most[R]<L.most[R]+1e-9),h6=({least:M})=>M[1]>1e-6,h8=({least:M,most:L})=>dt(M[0],M[2],L[0],L[2]),h7=(M,L)=>h6(M)!==h6(L)&&h5(h8(M),h8(L),.06),h9=(M,L)=>!L.some(L=>h5(M,L,-1e-9)),de={least:[.012,0,.012],most:[.988,.46,.988]};function dt(M,L,R,O){return{least:[M,0,L],most:[R,.46,O]}}let da=ew(0,1),dr=eb({thing:ey(ek(["desk","office-chair","filing-cabinet","water-cooler","copier","whiteboard","cubicle-screen","bin","server-rack","potted-plant","wall-clock","notice-board","exit-sign","vent","door","radiator","socket","fire-extinguisher","cardboard-box","bench","locker","vending-machine","payphone","wet-floor-sign","traffic-cone","ladder","pipe","mirror","window","curtain","sofa","armchair","floor-lamp","tv","bed","mattress","wardrobe","bookshelf","rug","shopping-cart","arcade-cabinet","chair-stack","slide","pool-ladder","balloon","mannequin","lab-bench","tank","barrel","crate","drain","cable-reel","monolith","staircase"]),eb({extra:da,item:ey(ek({i:eS}),eb({look:ey(ek({k:eS}),da),turn:ew(-1,1),gap:da,spot:ey(ek({t:eS}),eb({side:da,along:da,end:da}))}))}))}),ds=(M,L,R)=>M.map(M=>{let[O,A,E,T]=M.corners;return{...M,corners:[L(O),L(A),L(E),L(T)],normal:R(M.normal)}}),dl=[[0,1],[1,1],[1,0],[0,0]],dn=[0,1,2,0,2,3],di={position:uP("position"),normal:uP("normal"),local:uP("local"),tex:uP("tex"),kind:uP("kind"),seed:uP("seed"),flags:uP("flags"),paint:uP("paint"),cell:uP("cell")};function df(M,L){let R=M.toSorted((M,L)=>M.room.n-L.room.n),O=new ArrayBuffer(R.length*dn.length*uC*4),A=new Float32Array(O),E=new Uint32Array(O),T=[],I=0;for(let{corners:M,normal:O,normals:z,room:_,surface:N,paint:D}of R){let{origin:R,roomSide:U,seed:C,flags:P,cell:H}=L(_),G=fe.indexOf(N),F=T.at(-1),{n:W}=_;for(let L of(F?.n===W?F.count+=dn.length:T.push({n:W,firstVertex:I/uC,count:dn.length}),dn)){let[T,_,N]=M[L];A.set([T,_,N],I+di.position),A.set(z?.[L]??O,I+di.normal),A.set([(T-R[0])/U,(_-R[1])/U,(N-R[2])/U],I+di.local),A.set(dl[L],I+di.tex),E[I+di.kind]=G,E[I+di.seed]=C,E[I+di.flags]=P,E[I+di.paint]=D??0,E[I+di.cell]=H,I+=uC}}return{data:O,ranges:T}}let dc=[1,2,3,0],du=[3,0,1,2],dh=M=>[M(0),M(1),M(2),M(3)],dd=(1n<<6n)-1n,dm=(M,L,R)=>[M[0]+(L[0]-M[0])*R,M[1]+(L[1]-M[1])*R],dp=(M,L)=>[dm(M,L,.25),dm(M,L,.75)];function dv(M,L=3){let R,O;if(M.length<3)return M;if(R=M[0],O=M.at(-1),M.length>2&&void 0!==R&&void 0!==O&&R[0]===O[0]&&R[1]===O[1]){let R=M.slice(0,-1);for(let M=0;M<L;M+=1)R=function(M){return M.flatMap((L,R)=>dp(L,M[(R+1)%M.length]??L))}(R);let O=R[0];return void 0===O?R:[...R,O]}let A=M;for(let M=0;M<L;M+=1)A=function(M){let L=M.slice(0,-1).flatMap((L,R)=>dp(L,M[R+1]??L)),R=M[0],O=M.at(-1);return void 0===R||void 0===O?[]:[R,...L.slice(1,-1),O]}(A);return A}let dg=(M,L)=>M.map(M=>M.map(M=>L(M))),db=(M,L,R=0,O=0)=>dg(M,([M,A])=>[M*L+R,A*L+O]);function dw(M){let L=M.flat();if(0===L.length)return[0,0,0,0];let R=L.map(([M])=>M),O=L.map(([,M])=>M);return[Math.min(...R),Math.min(...O),Math.max(...R),Math.max(...O)]}let dx=M=>Number.parseInt(M,16)/12;function dy(M){let L=M.startsWith("~"),R=(L?M.slice(1):M).split(" ").map(M=>[dx(M.charAt(0)),dx(M.charAt(1))]);return L?dv(R):R}let dk=M=>({lines:M,advance:dw(M)[2]+.25}),dS=new Map(Object.entries({A:["00 4c 80","13 73"],B:["00 0c","~0c 7c 76 06","~06 86 80 00"],C:["~89 8c 0c 00 80 83"],D:["00 0c","~0c 8c 80 00"],E:["80 00 0c 8c","06 66"],F:["00 0c 8c","06 66"],G:["~89 8c 0c 00 80 85","85 45"],H:["00 0c","80 8c","06 86"],I:["20 2c","00 40","0c 4c"],J:["~6c 60 00 03"],K:["00 0c","8c 05","37 80"],L:["0c 00 80"],M:["00 0c 46 8c 80"],N:["00 0c 80 8c"],O:["~00 80 8c 0c 00"],P:["00 0c","~0c 8c 85 05"],Q:["~00 80 8c 0c 00","53 80"],R:["00 0c","~0c 8c 85 05","45 80"],S:["~8a 8c 0c 06 86 80 00 02"],T:["4c 40","0c 8c"],U:["~0c 00 80 8c"],V:["0c 40 8c"],W:["0c 20 47 60 8c"],X:["00 8c","0c 80"],Y:["0c 46 8c","46 40"],Z:["0c 8c 00 80"],0:["~00 60 6c 0c 00"],1:["09 3c 30","00 60"],2:["~09 0c 6c 66 00","00 60"],3:["~0b 0c 6c 66 26","~26 66 60 00 01"],4:["50 5c 03 73"],5:["6c 0c 07","~07 67 60 00 01"],6:["~6b 6c 0c 00 60 66 06"],7:["0c 6c 20"],8:["~16 56 5c 1c 16","~00 60 66 06 00"],9:["~01 00 60 6c 0c 06 66"],".":["00 01"],",":["11 00"],"!":["0c 04","01 00"],"?":["~09 0c 6c 66 36 34","31 30"],":":["07 08","00 01"],";":["07 08","11 00"],"-":["06 46"],"–":["06 86"],"'":["0c 0a"],'"':["0c 0a","2c 2a"],"(":["~2c 0a 02 20"],")":["~0c 2a 22 00"],"/":["00 6c"],"+":["06 66","39 33"],"=":["04 64","08 68"],"%":["00 6c","~09 29 2c 0c 09","~40 60 63 43 40"],"&":["~80 19 1c 5c 58 04 00 50 84"],"#":["20 3c","50 6c","04 84","08 88"],$:["~6a 6c 0c 06 66 60 00 02","3c 30"],"*":["39 33","07 65","05 67"],"×":["03 69","09 63"],"~":["~05 07 37 35 65 67"],µ:["09 00","~09 03 63 69","69 63"],"→":["06 86","59 86 53"],"←":["86 06","39 06 33"],"↑":["40 4c","19 4c 79"],"↓":["4c 40","13 40 73"]}).map(([M,L])=>[M,dk(L.map(M=>dy(M)))])),dM=dk(["00 60 6c 0c 00"].map(M=>dy(M))),dL={lines:[],advance:.5},dR=[...dS.keys()],dO=eb({sort:ew(0,1),column:ex(3),low:ex(4),high:ex(3),lean:ex(2),reach:ex(3)}),dA=eR(eb({floor:ey(ek({n:eS}),eb({slant:ew(-.22,.22),round:ew(0,1),weights:eb({stem:ew(.3,1),bowl:ew(.2,1),hook:ew(.1,1),bar:ew(.2,1),dot:ew(0,.6)}),glyph:ey(ek({code:eS,attempt:eS}),eb({extra:ex(3),wide:ex(3),spine:dO,second:dO,third:dO,fourth:dO}))}))}),M=>el("0")(`cube/lettering/${M}`)),dE=["stem","bowl","hook","bar","dot"],dT=[0,0,3,6],dI=[12,9,6],dz={stem:({stemCell:M,footCell:L,headCell:R})=>[[M,L],[M,R]],bowl:({stemCell:M,footCell:L,headCell:R,leanCell:O,round:A})=>A?dv([[M,R],[O,R],[O,L],[M,L]]):[[M,R],[O,(R+L)/2],[M,L]],hook({stemCell:M,footCell:L,headCell:R,leanCell:O,round:A,part:E}){let T=0===E.reach?L:R,I=[[M,T],[O,T],[O,T+(T===L?3:-3)]];return A?dv(I):I},bar({footCell:M,headCell:L,wide:R,part:O}){if(0!==O.lean)return[[0,M],[R,L]];let A=M+O.reach*(L-M)/2;return[[0,A],[R,A]]},dot:({leanCell:M,part:L})=>[[M,1.5+3*L.low],[M,2.5+3*L.low]]};function d_(M,L,R,O){let A=M.column*R/2,E=dT[M.low]??0,T=dI[M.high]??12,I=0===A?1:A===R?-1:2*M.lean-1,z=R/2*(A===R/2?1:1+M.reach/2),_=Math.min(Math.max(A+I*z,0),R);return dz[L]({stemCell:A,footCell:E,headCell:T-E>=3?T:12,leanCell:_,wide:R,round:O,part:M})}function dN(M,L,R){let O=M.glyph.at({code:L,attempt:R}),A=4+2*O.wide,E=M.round>.5,T=O.spine.sort<.6?"stem":"bowl",I=[O.second,O.third,O.fourth].slice(0,O.extra+1),z=dg([d_(O.spine,T,A,E),...I.map(L=>d_(L,function(M,L){let R=M*dE.reduce((M,R)=>M+L[R],0);for(let M of dE)if((R-=L[M])<0)return M;return"stem"}(L.sort,M.weights),A,E))],([M,L])=>[M/12,L/12]),_=dg(z,([L,R])=>[L+M.slant*R,R]),[N]=dw(_);return dk(dg(_,([M,L])=>[M-N,L]))}let dD=M=>M.lines.map(M=>M.map(([M,L])=>`${M.toFixed(3)},${L.toFixed(3)}`)).join("|"),dU=dR.filter(M=>/^[\dA-Z]$/.test(M)),dC=new Map,dP=M=>({storey:M,strangeness:e4(M,8,40),looseness:e4(M,53,66)}),dH=dP(1),dG=eR(eb({floor:ey(ek({n:eS}),eb({swap:ey(ek({code:eS}),ew(0,1)),drift:ey(ek({code:eS,piece:eS}),eb({dx:eg(ev),dy:eg(ev),turn:eg(ev)}))}))}),M=>el("0")(`cube/lettering/decay/${M}`));function dF(M,L){let R=M.toUpperCase(),O=R.codePointAt(0)??0,{storey:A,strangeness:E}=L;return function(M,L,R){let{looseness:O,storey:A}=R;if(0===O)return M;let{drift:E}=dG.floor.at({n:A}),T=Math.max(1,Math.round(8*(1-O)/.5)),I=(O>.5?M.lines.flatMap(M=>(function(M,L){let R=[];for(let O=0;O<M.length-1;O+=L)R.push(M.slice(O,O+L+1));return 0===R.length?[M]:R})(M,T)):M.lines).flatMap((M,R)=>{let{dx:A,dy:T,turn:I}=E.at({code:L,piece:R}),[z,_]=function(M){let[L,R]=[0,0];for(let[O,A]of M)L+=O,R+=A;let O=Math.max(M.length,1);return[L/O,R/O]}(M),N=.9*I*O,[D,U]=[Math.cos(N),Math.sin(N)];return dg([M],([M,L])=>{let[R,E]=[M-z,L-_];return[z+R*D-E*U+.3*A*O,_+R*U+E*D+.3*T*O]})});return{...M,lines:I}}((E>0&&dG.floor.at({n:A}).swap.at({code:O})<E?(function(M){let L=dC.get(M);if(void 0!==L)return L;let R=dA.floor.at({n:M}),O=new Set,A=new Map;for(let M of dU){let L=M.codePointAt(0)??0,E=dN(R,L,0);for(let M=1;M<6&&O.has(dD(E));M+=1)E=dN(R,L,M);O.add(dD(E)),A.set(M,E)}return dC.set(M,A),A})(A).get(R):void 0)??(""===M.trim()?dL:dS.get(M)??dS.get(M.toUpperCase())??dM),O,L)}function dW(M,L){let R=[],O=0;for(let A of M){let{lines:M,advance:E}=dF(A,L);R.push(...db(M,1,O)),O+=E}return R}function dB(M,L){let R=0;for(let O of M)R+=dF(O,L).advance;return R}let d$=.286-.011,dq={low:[.014,.062375],high:[.346,.286-.011-.007-.005]},dj=dq.high[0]-dq.low[0],dK=dq.high[1]-dq.low[1],dY=(M,L,R)=>[M[0]+(L[0]-M[0])*R,M[1]+(L[1]-M[1])*R],dV=M=>1.6/2**(M-1),dX=M=>2**(M-1)/5,dZ=[["M",1],["CM",.01],["MM",.001],["µM",1e-6],["NM",1e-9],["PM",1e-12],["FM",1e-15],["AM",1e-18],["ZM",1e-21],["YM",1e-24]],dQ=M=>String(Number(M.toPrecision(2)));function dJ(M){let[L,R]=dZ.find(([,L])=>M>=.9995*L)??dZ.at(-1)??["M",1];return`${dQ(M/R)} ${L}`}let d0=2*Math.PI,d2=(...M)=>{let[L]=M;return void 0===L?[]:dv([...M,L])};function d1(M,L,R,O,A,E){let T=Math.max(4,Math.ceil(28*Math.abs(E-A)));return Array.from({length:T+1},(I,z)=>{let _=(A+(E-A)*z/T)*d0;return[M+R*Math.cos(_),L+O*Math.sin(_)]})}let d3=(M,L,R,O=R)=>d1(M,L,R,O,0,1),d5=(M,L,R,O)=>Array.from({length:O},(A,E)=>d1(M,L,R,R,E/O,(E+.5)/O)),d4=(M,L,R,O)=>[M+R*Math.cos(O*d0),L+R*Math.sin(O*d0)],d6=(M,L,R,O,A,E=0)=>Array.from({length:A},(T,I)=>{let z=E+I/A;return[d4(M,L,R,z),d4(M,L,O,z)]}),d8=(M,L,R,O,A=0)=>Array.from({length:O+1},(E,T)=>d4(M,L,R,A+T/O)),d7=(M,L,R=.012)=>[[M,L],[M,L+R]];function d9(M,L,R,O){let[A,E]=[L[0]-M[0],L[1]-M[1]],T=Math.hypot(A,E)||1,I=Math.ceil(16*R);return Array.from({length:I+1},(L,z)=>{let _=z/I,N=O*Math.sin(_*R*d0);return[M[0]+A*_-E/T*N,M[1]+E*_+A/T*N]})}let me=(M,L,R,O,A=1)=>Array.from({length:O},(E,T)=>d4(M,L,R*((T+.5)/O)**(A/2),.381966*T)),mt=(M,L,R,O,A=dH)=>db(dW(M,A),O,L,R),ma=(M,L,R,O,A)=>Array.from({length:73},(E,T)=>{let I=T/72;return d4(M,L,R*(1+A*Math.sin(I*O*d0)),I)}),mr=[d2([0,.2],[.2,.4],[.7,.38],[1,.22],[.8,.02],[.25,0]),...d1(.5,.2,.47,.18,0,1).map((M,L)=>((...M)=>M)(M,d1(.5,.2,.53,.24,0,1)[L]??M)),d3(.55,.2,.12,.07),d3(.66,.26,.03),((...M)=>dv(M))([.42,.34],[.36,.2],[.44,.12]),...d6(.2,.2,.02,.06,6),...d6(.84,.18,.02,.06,6)],ms=[d3(.5,.5,.38),d3(.5,.5,.43),...d6(.5,.5,.45,.5,44),d3(.56,.55,.1),d7(.58,.56)],ml=[d3(.5,.5,.38),...d6(.5,.5,.38,.5,26),d3(.5,.66,.06,.04),d3(.36,.42,.04,.06),d3(.64,.42,.04,.06)],mo=[ma(.5,.5,.46,5,.1),d3(.5,.52,.17),d7(.52,.54),...[.14,.3,.47,.62,.8].flatMap((M,L)=>{let R;return R=1.1+L%3*.25,[((...M)=>M)(d4(.5,.5,.46,M),d4(.5,.5,R,M+.01)),((...M)=>M)(d4(.5,.5,.6*R,M+.006),d4(.5,.5,.95*R,M+.06)),((...M)=>M)(d4(.5,.5,.75*R,M+.008),d4(.5,.5,1.05*R,M-.04))]}),((...M)=>M)([.96,.5],[2.4,.46],[3.6,.56])],mn=[ma(.5,.5,.46,7,.06),d3(.36,.56,.13,.11),d3(.56,.62,.12,.1),d3(.64,.42,.11,.12),((...M)=>M)([.46,.6],[.48,.62]),((...M)=>M)([.62,.53],[.63,.55]),...me(.5,.5,.4,16).map(([M,L])=>d7(M,L,.008))],mi=[d3(.5,.5,.5),d3(.5,.5,.22),d1(.5,.5,.36,.36,.55,.8),d1(.5,.5,.29,.29,.58,.77)],mf=[d3(.42,.42,.42,.38),d3(.86,.72,.14,.13),d3(.34,.48,.12),d3(.56,.32,.15,.13),d1(.16,.2,.05,.05,0,.5),d1(.5,.74,.05,.05,.5,1)],mc=[d2([0,.18],[0,.36],[1,.36],[1,0],[0,0]),d9([.02,.2],[-1.3,.45],3.5,.06),d9([.02,.16],[-1.4,.1],3.5,.06),d9([.04,.1],[-1.2,-.25],3,.06),d9([.25,.18],[.75,.18],3.5,.07),...[.15,.3,.45,.6,.75,.9].flatMap(M=>[((...M)=>M)([M,.36],[M+.02,.43]),((...M)=>M)([M-.03,0],[M-.05,-.07])])],mu=[d9([-1.25,.3],[2.25,.3],3.5,.26),((...M)=>M)([-1.25,.3],[2.25,.3]),((...M)=>M)([0,.72],[1,.72]),((...M)=>M)([0,.66],[0,.78]),((...M)=>M)([1,.66],[1,.78])],mh=[d8(.5,.5,.34,6,1/12),d8(.5,.5,.26,6,1/12),...d6(.5,.5,.36,.5,54),...d6(.5,.5,.02,.1,5,.05)],md=[((...M)=>M)([.3,1],[.42,.9],[.42,.7],[.3,.6],[.18,.7],[.18,.9],[.3,1]),((...M)=>M)([.24,.58],[.36,.58]),((...M)=>M)([.26,.58],[.26,.2],[.34,.2],[.34,.58]),...[.26,.32,.38,.44,.5].map(M=>((...M)=>M)([.26,M],[.34,M])),((...M)=>M)([.2,.2],[.4,.2],[.38,.16],[.22,.16],[.2,.2]),((...M)=>M)([.3,.16],[.3,.1]),((...M)=>M)([.22,.18],[.06,.36],[0,0]),((...M)=>M)([.38,.18],[.54,.36],[.6,0]),((...M)=>M)([.24,.17],[.14,.3],[.12,0]),((...M)=>M)([.36,.17],[.46,.3],[.48,0])],mm=[d3(.5,.5,.38),...d6(.5,.5,.38,.47,28),...Array.from({length:28},(M,L)=>{let R=L/28;return L%3==0?((...M)=>M)(d4(.5,.5,.47,R-.008),d4(.5,.5,.47,R+.008)):d3(...d4(.5,.5,.485,R),.015)}),...me(.5,.5,.26,8).map(([M,L],R)=>d9([M-.06,L],[M+.06,L+R%2*.04],1.5,.02))],mp=[d8(.5,.5,.5,6,1/12),d8(.5,.5,.26,3,.25),...[.25,7/12,11/12].flatMap(M=>[((...M)=>M)(d4(.5,.5,.26,M),d4(.5,.5,.5,M)),((...M)=>M)(d4(.5,.5,.26,M),d4(.5,.5,.5,M+1/6)),((...M)=>M)(d4(.5,.5,.26,M),d4(.5,.5,.5,M-1/6))])],mv=(M,L)=>{let R=1-2*M-.02;return[d3(.2,1-M,.8*M,M),((...M)=>dv(M))([.05,L+.04],[.07,R],[.33,R],[.35,L+.04]),((...M)=>M)([.12,R-.08],[.13,L]),((...M)=>M)([.28,R-.08],[.27,L]),((...M)=>M)([.13,L],[.14,.01],[.19,.01],[.2,L-.05],[.21,.01],[.26,.01],[.27,L])]},mg=mv(.07,.47),mb=mv(.12,.36),mw=[d3(.45,.33,.27,.12),d3(.8,.42,.1,.09),((...M)=>M)([.73,.48],[.75,.58],[.8,.51]),((...M)=>M)([.82,.51],[.87,.58],[.88,.47]),((...M)=>dv(M))([.19,.36],[.05,.4],[.02,.58],[.1,.6]),((...M)=>M)([.27,.24],[.26,.02],[.31,.02]),((...M)=>M)([.36,.22],[.36,.02],[.41,.02]),((...M)=>M)([.58,.22],[.58,.02],[.63,.02]),((...M)=>M)([.67,.25],[.68,.02],[.73,.02]),d7(.83,.44),((...M)=>M)([.88,.4],[.98,.43]),((...M)=>M)([.88,.39],[.98,.37])],mx=[((...M)=>dv(M))([.04,.06],[.02,.5],[.7,.62],[.8,.22]),((...M)=>M)([.8,.22],[.99,.12],[.82,.06]),((...M)=>M)([.06,.06],[.84,.06]),...d6(.42,.1,.24,.36,15,.04).slice(0,7),...d6(.42,.1,.33,.46,19,.03).slice(0,9),d7(.86,.17),((...M)=>M)([.25,.06],[.25,.01],[.3,.01]),((...M)=>M)([.65,.06],[.65,.01],[.7,.01])],my=[d2([.1,.2],[.3,.5],[.7,.47],[1,.18],[.7,.04],[.2,.04]),d3(.72,.43,.09,.1),d7(.86,.25),((...M)=>dv(M))([.12,.16],[-.2,.08],[-.4,.3],[-.7,.2]),((...M)=>M)([.95,.17],[1.08,.24]),((...M)=>M)([.95,.15],[1.09,.13]),((...M)=>M)([.35,.07],[.33,.01],[.4,.01]),((...M)=>M)([.75,.08],[.76,.01],[.83,.01])],mk=[Array.from({length:Math.ceil(24*2.6)+1},(M,L)=>{let R=L/(24*2.6);return d4(.42,.34,.27+-.25*R,.6-2.6*R)}),((...M)=>dv(M))([.08,.06],[.6,.02],[.86,.04],[.95,.3]),((...M)=>dv(M))([.95,.3],[.9,.36],[.72,.2],[.68,.22]),((...M)=>M)([.03,.02],[.9,.02]),((...M)=>M)([.92,.32],[.99,.5]),((...M)=>M)([.87,.31],[.88,.5])],mS=[((...M)=>dv(M))([.7,.07],[.12,.07],[.12,.21],[1,.21],[1,0],[0,0],[0,.28],[.8,.28])],mM=[d3(.3,.3,.26,.16),((...M)=>M)([.2,.16],[.2,.44]),((...M)=>M)([.32,.14],[.32,.46]),((...M)=>M)([.44,.17],[.44,.43]),d3(.66,.32,.13),d3(.87,.3,.09,.1),d2([.62,.44],[.5,.74],[.2,.74],[.3,.55]),d2([.68,.45],[.74,.68],[.52,.8],[.56,.6]),((...M)=>M)([.92,.38],[.97,.52],[1,.5]),((...M)=>M)([.6,.21],[.55,.08],[.5,.02]),((...M)=>M)([.68,.19],[.68,.08],[.72,.02]),((...M)=>M)([.76,.22],[.82,.1],[.88,.04]),((...M)=>M)([.04,.3],[0,.29])],mL=(M,L,R)=>((...M)=>M)(M,L,R),mR=[d3(.2,.27,.18,.12),d3(.5,.26,.13,.07),d3(.78,.29,.1,.09),mL([.42,.21],[.3,.14],[.22,0]),mL([.5,.19],[.5,.1],[.46,0]),mL([.58,.21],[.68,.12],[.74,0]),mL([.42,.31],[.3,.44],[.2,.42]),mL([.58,.31],[.66,.46],[.74,.44]),((...M)=>M)([.85,.35],[.93,.47],[1,.42]),((...M)=>M)([.82,.37],[.86,.5],[.93,.5])],mO=[d3(.3,.25,.22,.12),((...M)=>M)([.22,.14],[.22,.36]),((...M)=>M)([.34,.13],[.34,.37]),d3(.6,.3,.13,.12),d3(.82,.3,.09,.1),d3(.85,.33,.05,.06),d2([.62,.4],[.3,.64],[0,.52],[.3,.4]),mL([.54,.2],[.46,.1],[.4,0]),mL([.62,.18],[.64,.08],[.6,0]),mL([.68,.2],[.78,.1],[.84,0]),((...M)=>M)([.9,.36],[.96,.42])],mA=[d2([.15,.32],[.3,.66],[.7,.7],[.92,.46],[.8,.24],[.4,.2]),((...M)=>M)([.36,.26],[.34,.62]),((...M)=>M)([.5,.24],[.5,.66]),((...M)=>M)([.64,.25],[.66,.64]),mL([.42,.24],[.16,.14],[.5,.03]),((...M)=>M)([.5,.03],[.62,0]),mL([.6,.24],[.56,.12],[.7,.04]),mL([.74,.25],[.78,.14],[.9,.08]),d7(.82,.44),((...M)=>M)([.9,.4],[1,.36])],mE=[d2([.04,.32],[.1,.52],[.5,.56],[.86,.52],[.98,.36],[.9,.2],[.5,.16],[.1,.18]),d1(.28,.36,.04,.17,-.25,.25),d1(.5,.36,.04,.19,-.25,.25),d1(.72,.36,.04,.17,-.25,.25),...[.14,.36,.58,.8].flatMap(M=>[((...M)=>dv(M))([M,.2],[M-.02,.03],[M+.1,.03],[M+.1,.19]),((...M)=>M)([M+.02,.05],[M,0]),((...M)=>M)([M+.06,.05],[M+.08,0])]),d3(.975,.35,.025,.04),d7(.9,.42)],mT=[d3(.5,.4,.34,.28),d1(.5,.52,.3,.1,.55,.95),...[.05,.15,.35,.45,.55,.65,.85,.95].map(M=>mL(d4(.5,.4,.29,M),d4(.5,.4,.42,M+.02),d4(.5,.4,.5,M-.02))),((...M)=>M)([.82,.44],[.92,.5]),((...M)=>M)([.82,.36],[.92,.32]),...d6(.5,.4,.3,.36,9,.02).slice(0,4)],mI=[d2([.1,.5],[.05,.9],[.5,1.02],[.9,.9],[.86,.5],[.5,.4]),d2([.14,.32],[.12,.06],[.5,-.02],[.82,.08],[.8,.32]),d9([-.8,.38],[1.7,.38],9,.025),((...M)=>dv(M))([.5,.56],[.44,.8],[.6,.9],[.56,1.1],[.7,1.3])],mz=[((...M)=>M)([.45,0],[.45,.45],[.1,.95]),((...M)=>M)([.55,0],[.55,.45],[.9,.95]),((...M)=>M)([.33,.5],[.02,.9]),((...M)=>M)([.67,.5],[.98,.9]),((...M)=>M)([.45,.4],[.55,.4]),((...M)=>M)([.45,.33],[.55,.33]),((...M)=>M)([.28,.69],[.21,.65]),((...M)=>M)([.72,.69],[.79,.65])],m_=(M,L,R)=>[d2(d4(M,L,.25,R),d4(M,L,.29,R+.2),d4(M,L,.24,R+.42),d4(M,L,.3,R+.62),d4(M,L,.25,R+.82)),d9(d4(M,L,.16,R+.1),d4(M,L,.16,R+.4),4,.02),d9(d4(M,L,.14,R+.6),d4(M,L,.17,R+.9),4,.02),d8(M,L,.04,4,R)],mN=[...m_(.29,.71,.1),...m_(.71,.71,.35),...m_(.29,.29,.6),...m_(.71,.29,.85)],mD=1/3.4,mU=(M,L)=>[M,mD*(1+Math.cos((M+L)*d0))],mC=[...[0,.4].map(M=>Array.from({length:129},(L,R)=>mU(R/32-1.5,M))),...Array.from({length:40},(M,L)=>{let R=(L+.5)/10-1.5;return[mU(R,0),mU(R,.4)]})],mP=(M,L,R=.05)=>{let O=Math.hypot(L[0]-M[0],L[1]-M[1])||1,[A,E]=[(L[0]-M[0])/O,(L[1]-M[1])/O];return[[M[0]+A*R,M[1]+E*R],[L[0]-A*R,L[1]-E*R]]},mH=[0,1,2,3,4,5].map(M=>d4(.5,.5,.27,M/6)),mG=[...mH.flatMap((M,L)=>{let R=mH[(L+1)%6]??M,O=d4(.5,.5,.45,L/6+.02);return[d3(...M,.05),mP(M,R),...1===L?[]:[mP(M,O,.045),d3(...O,.04)]]}),...mt("O",.6,.78,.07)],mF=[d3(.5,.5,.5),d8(.5,.5,.17,5,.25),...[0,1,2,3,4].flatMap(M=>{let L=.25+M/5,R=d4(.5,.5,.31,L),O=d4(.5,.5,.42,L+.055),A=d4(.5,.5,.42,L-.055);return[((...M)=>M)(d4(.5,.5,.17,L),R),((...M)=>M)(O,R,A),((...M)=>M)(O,d4(.5,.5,.42,L+.145)),((...M)=>M)(O,d4(.5,.5,.5,L+.07)),((...M)=>M)(A,d4(.5,.5,.5,L-.07))]})],mW=[d3(.5,.42,.3),d3(.2,.68,.19),d3(.8,.68,.19),...mt("O",.45,.36,.12),...mt("H",.16,.63,.1),...mt("H",.76,.63,.1)],mB=M=>[d3(.5,.5,.03),...M.flatMap((L,R)=>{let O=.5*(R+1)/M.length-.03;return[d3(.5,.5,O),...Array.from({length:L},(M,R)=>d3(...d4(.5,.5,O,.07+R/L),.022))]})],m$=mB([2,4]),mq=mB([2]),mj=[...me(.5,.5,.5,260,2.6).map(([M,L])=>d7(M,L,.006)),d3(.5,.5,.012)],mK=me(.5,.5,.5,14).map(([M,L])=>d7(M,L,.006)),mY=[d9([-1.25,.3],[2.25,.3],3.5,.18),d9([-1.25,.3],[2.25,.3],3.5,-.18),((...M)=>M)([0,.66],[1,.66]),((...M)=>M)([0,.6],[0,.72]),((...M)=>M)([1,.6],[1,.72])],mV=(M,L)=>{let R=.5/Math.sqrt(M)/1.05;return me(.5,.5,.5-R,M).flatMap(([O,A],E)=>{let T=E%Math.max(Math.round(M/L),1)==0;return[d3(O,A,R),...T?[((...M)=>M)([O-R/2,A],[O+R/2,A]),((...M)=>M)([O,A-R/2],[O,A+R/2])]:[]]})},mX=mV(60,24),mZ=mV(12,6),mQ=mV(4,2),mJ=[d4(.5,.5,.24,.25),d4(.5,.5,.24,7/12),d4(.5,.5,.24,11/12)],m0=[...d5(.5,.5,.5,30),...mJ.flatMap((M,L)=>{let R=mJ[(L+1)%3]??M;return[d3(...M,.07),d9(M,R,5,.03).slice(14,-14)]}),...mt("U",.47,.71,.06),...mt("U",.265,.35,.06),...mt("D",.68,.35,.06)],m2=[d7(.5,.5,.01),...d5(.5,.5,.5,24)],m1=(M,L)=>"function"==typeof M?M(L):M,m3=[.5,.5],m5=[.5,.7];function m4(M){let[L,R,O,A]=dw(m1(M,1));return[O-L,A-R]}let m6=(M,L,R,O,A=m3,E=m4(O))=>({name:M,metres:L,measured:R,sketch:O,focus:A,body:E}),m8=(M,L,R,O)=>({name:M,metres:L,unsizedNote:R,sketch:O,focus:m3,body:m3}),m7=[.5,.4],m9=[1,.6],pe=[m6("A GROWN-UP",1.7,"TALL",mg,[.2,.86]),m6("A TODDLER",.85,"TALL",mb,[.2,.8]),m6("A CAT",.46,"LONG",mw,[.7,.36]),m6("A HEDGEHOG",.22,"LONG",mx,[.6,.25]),m6("A MOUSE",.09,"LONG WITHOUT ITS TAIL",my,[.6,.25],[1,.5]),m6("A GARDEN SNAIL",.045,"LONG",mk,[.5,.3]),m6("A PAPERCLIP",.03,"LONG",mS,[.5,.14]),m6("A HONEYBEE",.013,"LONG",mM,[.6,.38]),m6("AN ANT",.006,"LONG",mR,[.6,.27]),m6("A FRUIT FLY",.003,"LONG",mO,[.6,.3]),m6("A FLEA",.002,"LONG",mA,[.6,.35]),m6("A WATER BEAR",7e-4,"LONG",mE,[.6,.3]),m6("A DUST MITE",35e-5,"LONG",mT,[.5,.4]),m6("A PARAMECIUM",2e-4,"LONG",mr,[.5,.2]),m6("A HUMAN EGG CELL",1e-4,"ACROSS",ms,m5),m6("A GRAIN OF POLLEN",4e-5,"ACROSS",ml,m5),m6("A NERVE CELL",2e-5,"ACROSS ITS BODY",mo,m3,[1,1]),m6("A WHITE BLOOD CELL",12e-6,"ACROSS",mn,m5),m6("A RED BLOOD CELL",65e-7,"ACROSS",mi,m5),m6("A YEAST CELL",3e-6,"LONG WITH ITS BUD",mf,[.6,.6]),m6("A BACTERIUM",2e-6,"LONG WITHOUT ITS TAILS",mc,[.4,.18],[1,.36]),m6("A WAVE OF RED LIGHT",7e-7,"FROM CREST TO CREST",mu,m7,m9),m6("A GIANT VIRUS",4e-7,"ACROSS",mh,m5),m6("A VIRUS THAT PREYS ON BACTERIA",2e-7,"TALL",md,[.3,.3]),m6("A FLU VIRUS",1e-7,"ACROSS",mm,m5),m6("A POLIO VIRUS",3e-8,"ACROSS",mp,m5),m6("A RIBOSOME",25e-9,"TALL",mI,[.5,.45],[.9,1]),m6("AN ANTIBODY",12e-9,"TALL",mz,[.5,.62]),m6("A PROTEIN: HAEMOGLOBIN",6e-9,"ACROSS",mN,m5),m6("DNA",34e-10,"TO ONE TURN",mC,[.5,.3],[1,.6]),m6("A MOLECULE OF SUGAR",9e-10,"ACROSS",mG),m6("A CAGE OF 60 CARBON ATOMS",71e-11,"ACROSS",mF,m5),m6("A MOLECULE OF WATER",28e-11,"ACROSS",mW,[.5,.55]),m6("A CARBON ATOM",15e-11,"ACROSS",m$,m5),m6("A HYDROGEN ATOM",106e-12,"ACROSS",mj),m6("A HELIUM ATOM",62e-12,"ACROSS",mq,[.72,.6]),m8("THE INSIDE OF AN ATOM",2e-11,"NEARLY ALL OF IT IS EMPTY. NOTHING HERE IS YOUR SIZE.",mK),m6("AN X-RAY",1e-11,"FROM CREST TO CREST",mY,m7,m9),m6("A WAVE OF LIGHT AS HEAVY AS AN ELECTRON",243e-14,"FROM CREST TO CREST",mY,m7,m9),m6("A GAMMA RAY",1e-12,"FROM CREST TO CREST",mY,m7,m9),m6("THE NUCLEUS OF A URANIUM ATOM",15e-15,"ACROSS",mX,m5),m6("THE NUCLEUS OF A CARBON ATOM",55e-16,"ACROSS",mZ,m5),m6("THE NUCLEUS OF A HELIUM ATOM",34e-16,"ACROSS",mQ,m5),m6("A PROTON",17e-16,"ACROSS",m0,m5),m8("THE INSIDE OF A PROTON",1e-16,"QUARKS COME AND GO. NONE OF THEM HAS A SIZE.",M=>me(.5,.5,.46,Math.max(3,21-3*(M-52))).flatMap(([L,R],O)=>{let A=d4(L,R,.11,.137*O+.21*M);return[d3(L,R,.022),d3(...A,.022),d9([L,R],A,3,.014).slice(9,-9)]})),m6("A QUARK",86e-20,"ACROSS AT THE MOST, IF IT HAS A SIZE",m2,m5),m8("?",1e-19,"NOTHING IS KNOWN TO BE YOUR SIZE.",M=>mt("?",.25,0,1,dP(M)))];function pt(M,L){let R=Math.abs(Math.log(M.metres/dV(L)));if(void 0===M.measured)return R;let O=M.metres*dX(L);return R+ +Math.log(Math.max(M.body[0]*O/dj,M.body[1]*O/dK,1))}function pa(M){let L={cost:1/0,path:[]};for(let R of M)R.cost<L.cost&&(L=R);return L}let pr=function(){let M=pe.map((M,L)=>L),L=M.map(M=>({cost:pt(pe[M]??m8("",1,"",[]),1),path:[M]}));for(let R=2;R<=66;R+=1){let O=L;L=M.map(M=>{let L=pa(O.slice(0,M+1).map((L,R)=>({...L,cost:L.cost+.6*(R===M)}))),A=pe[M];return{cost:L.cost+(void 0===A?0:pt(A,R)),path:[...L.path,M]}})}return pa(L).path}(),ps=M=>i4(137.508*M%360,.3,.17),pl=M=>i4(137.508*M%360,.14,.46),po=.36-.028;function pn(M,L,R,O,A="left"){let E=dB(M,L)*R,T=Math.min(1,po/E);return db(dW(M,L),R*T,"left"===A?.014:.346-E*T,O)}function pi([M,L],R,O,A){return L-M<=A-O?(O+A)/2-(M+L)/2:Math.min(Math.max((O+A)/2-R,A-L),O-M)}function pf(M,L,{leftPixel:R,baseline:O,pixelsPerUnit:A,nibPixels:E,inkColour:T}){for(let I of(M.lineWidth=E,M.lineCap="round",M.lineJoin="round",M.strokeStyle=T,M.beginPath(),L))for(let[L,[E,T]]of I.entries()){let I=R+E*A,z=O-T*A;0===L?M.moveTo(I,z):M.lineTo(I,z)}M.stroke()}let pc={width:.36,height:.3,hungAt:.27},pu=eR(aa,el(aj.seed)),ph=aq(pu),pd=eR(aV,el(aj.seed)),pm=M=>uz(M).pillar,pp=(M,L)=>df(M.map(M=>({...M,surface:"paper"})),L);async function pv(M,L,R){let O,A,E,T,I,z,_=function(M,L,R){let{n:O,x:A,y:E}=M,T={n:O,x:A,y:E},I=aE([T,...aN.filter(M=>aU(R,T,M)).map(M=>aD(T,M))].flatMap(M=>(function(M,L,R){let{n:O}=M,A=new Map,E=(M,[T,I],z,_,N)=>{for(let D of(A.set(ei(M),M),aN)){let U=aD(M,D),C=[T+D[0],I+D[1]];if(!en(O,U.x,U.y)||A.has(ei(U))||aC(...C)>L||!aU(R,M,D))continue;let[P,H]=function(M,L,[R,O]){if(0===R){let R=L+ +(O>0);return O>0?[[M,R],[M+1,R]]:[[M+1,R],[M,R]]}let A=M+ +(R>0);return R>0?[[A,L+1],[A,L]]:[[A,L],[A,L+1]]}(T,I,D),G=function(M,L){let R=M;for(let M of L){let L=function(M,[L,R]){if(1e-9>Math.hypot(L,R))return M;let O=Math.atan2(R,L);if("any"===M)return{lo:O-az,hi:O+az};let A=O+aI*Math.round((M.lo+M.hi)/2/aI-O/aI),E=Math.max(M.lo,A-az),T=Math.min(M.hi,A+az);return E<=T+1e-9?{lo:E,hi:Math.max(E,T)}:null}(R,M);if(null===L)return null;R=L}return R}(z,[a_(P,H),..._.map(M=>a_(M,H)),...N.map(M=>a_(P,M))]);null!==G&&E(U,C,G,[..._,P],[...N,H])}};return E(M,[0,0],"any",[],[]),[...A.values()]})(M,L,R))),z=O>1?aT(M):null;return{near:I,above:null===z?[]:aE(I.map(M=>aT(M))),overhead:z,topmost:null!==z&&z.n>1?aT(z):null}}(M,i0,ph),N=await e_(aj,(({near:M,above:L,topmost:R})=>[...M,...L,...null===R?[]:[R]])(_)),D={..._,below:_.near.filter(M=>null!==N(M)).flatMap(M=>(({n:M,x:L,y:R})=>[0n,1n].flatMap(O=>[0n,1n].map(A=>({n:M+1,x:2n*L+A,y:2n*R+O}))))(M))},U=await e_(aj,D.below),C=L=>L.n>M.n?U(L):N(L),P=(O=M=>null!==C(M)||aB(M,C),aA(D).flatMap(M=>{let L=function(M,L,R,O){let A=L.get(ei(R));if(void 0!==A)return{...A,kind:"yours"};if(R.n<2)return null;let E=aN.map(O=>{if(!aU(M,R,O))return{step:O,is:"wall"};let A=ei(aD(R,O));return{step:O,is:L.has(A)?"bought":"open"}}),T=E.filter(M=>"open"===M.is);return T.length>1||O(R)?null:{...aG(E,T[0]),kind:E.some(M=>"bought"===M.is)?"buy-more":"for-sale"}}(ph,R,M,O);return null===L?[]:[{room:M,sign:L}]})),H=new Map(P.filter(({room:L})=>L.n===M.n).map(({room:M,sign:L})=>[ei(M),L])),G=M=>R.has(ei(M)),F=P.flatMap(({room:L,sign:R})=>(function({at:M,onPost:L},{hungAt:R},O,{origin:A,roomSide:E}){if(!L)return[];let T=.02*E;return am([A[0]+(M.u-.01)*E,A[1],A[2]+(M.v-.01)*E],[[T,0,0],[0,R*E,0],[0,0,T]],O,"trim")})(R,aY,L,e3(M,L))),W=(A=new Map,E=M=>pd.room.at(M).lamp>=uz(M.n).dark,T=new Map,I=M=>{let L=ei(M),R=T.get(L)??hB(ph,M);return T.set(L,R),R},L=>{let R,O,T,z,_,N,D=ei(L),U=A.get(D)??{...e3(M,L),seed:pd.room.at(L).grain,flags:function({closed:M,lampsOn:L,litBeside:R,litAcross:O,waysAcross:[A,E],wallsBeside:[T,I]}){return(ft(M)|16*!!L|ft(R)<<5|ft(O)<<9|ft(A)<<13|ft(E)<<17|ft(T)<<21|ft(I)<<25)>>>0}((R=I(L),O=M=>aD(L,aN[M]),T=(M,L)=>!R[M]&&!I(O(M))[L],z=dh(M=>T(M,dc[M])),_=dh(M=>T(dc[M],M)),N=(M,L)=>{let R=O(M);return en(R.n,R.x,R.y)&&I(R)[L]},{closed:R,lampsOn:E(L),litBeside:dh(M=>!R[M]&&E(O(M))),litAcross:dh(M=>(z[M]||_[M])&&E(aD(O(M),aN[dc[M]]))),waysAcross:[z,_],wallsBeside:[dh(M=>N(dc[M],M)),dh(M=>N(du[M],M))]})),cell:(({x:M,y:L})=>Number(M&dd)|Number(L&dd)<<8)(L)};return A.set(D,U),U}),B=[...D.near,...D.below].map(M=>((M,L,R,O)=>{let{grain:A}=L.room.at(R);return{room:R,closed:hB(M,R),hole:O,grain:A}})(ph,pd,M,C(M))),$=B.flatMap(L=>h$((function(M,L){let R=eR(dr,el(String(M.grain))),O=function(M){let L,R,{hole:O,closed:A,room:E}=M,T=(M,L,R)=>dt(M-R,L-R,M+R,L+R),I=function({hole:M,closed:L}){if(null===M)return null;let{u:R,v:O}=eE(M),[A,E,T,I]=L;return(0===M.qx?T:A)?[M.qx,O]:(0===M.qy?I:E)?[R,M.qy]:[M.qx,M.qy]}(M);return[...A.map((M,L)=>(function({least:M,most:L},R){let[O,A]=[h2(R,.5)(M),h2(R,.5)(L)],E=M=>[M(O[0],A[0]),M(O[1],A[1]),M(O[2],A[2])];return{least:E(Math.min),most:E(Math.max)}})(M?{least:[.888,h1.from,h1.least],most:[1,h1.to,h1.most]}:dt(.75,0,1,1),L)),...null===O?[]:[T(eE(O).u,eE(O).v,.19)],...null===I?[]:[T(I[0],I[1],.15)],...1===E.n?[(L=tF.from/5-.03,({east:dt(.75,L,1,R=tF.to/5+.03),south:dt(L,.75,R,1),west:dt(0,L,.25,R),north:dt(L,0,R,.25)})[tF.wall])]:[]]}(M),A=[],E=[],T=0;for(let{thing:I,perRoom:z}of L){let L=h0[I],_=R.thing.at(I),N=Math.floor(z)+ +(_.extra<z%1);for(let R=0;R<N;R+=1){let z=_.item.at({i:R}),N=function(M,L,R){var O;let A,E,T,I=L.build((O=M.room,A=(M,L,R)=>M.map(([M,A,E,T])=>({corners:[tL(M,.2),tL(A,.2),tL(E,.2),tL(T,.2)],normal:tR(tS(tM(A,M,-1),tM(T,M,-1))),room:O,surface:L,...void 0===R?{}:{paint:R}})),E=(M,[L,R,A],E,T)=>am(tL(M,.2),[tL(L,.2),tL(R,.2),tL(A,.2)],O,E,T),T=(M,L,R,O,E,T,I)=>{let{around:z,end:_}=function([M,L,R],O,A,{sides:E=8,top:T=O}){let I=(L,O)=>Array.from({length:E},(A,T)=>{let I=(T+.5)*2*Math.PI/E;return[M+L*Math.sin(I),O,R+L*Math.cos(I)]}),z=I(O,L),_=I(T,L+A),N=(O,A)=>O[A%E]??[M,L,R];return{around:z.map((M,L)=>[M,N(z,L+1),N(_,L+1),N(_,L)]),end:Array.from({length:E/2-1},(M,L)=>[N(_,L),N(_,L+1),N(_,E-2-L),N(_,E-1-L)])}}(L,R,O,I);return[...A(M(z),E,T),...null===I.lid?[]:A(M(_),E,I.lid??T)]},{panel:(M,L,R,A,E)=>[ad(tL(M,.2),tL(L,.2),tL(R,.2),O,A,E)],slab:E,block:([M,L,R],[O,A,T],I,z)=>E([M-O/2,L,R],[[O,0,0],[0,A,0],[0,0,T]],I,z),beam:(M,L,R,O,A)=>{let T=tM(L,M,-1),I=tS(ac,T),z=1e-9>Math.hypot(...I)?[1,0,0]:tR(I),_=tS(tR(T),z);return E(tM(M,tL(au(z,_),R/2),-1),[tL(z,R),tL(_,R),T],O,A)},prism:(M,L,R,O,A,E={})=>T(M=>M,M,L,R,O,A,E),disc:([M,L,R],O,A,E,I,z={})=>T(hj,[M,R,-L],O,A,E,I,z)}),M=>R.look.at({k:M})),z=void 0===L.gap&&void 0===L.turn,_=(M=>{let[L,R]=[Math.cos(M),Math.sin(M)];return([M,O,A])=>[M*L+A*R,O,A*L-M*R]})((L.turn??0)*R.turn),[N,D]=L.gap??[0,0];return{quads:ds(I.filter(({corners:M,normal:L})=>{let R=R=>L[R]<-.99&&M.every(M=>M[R]<1e-9);return!(R(1)||z&&R(2))}),_,_),off:.002+(N+R.gap*(D-N))/5}}(M,L,z);if(!(T+N.quads.length>250))for(let R=0;R<6;R+=1){let _=function({closed:M},{quads:L,off:R},O,A,E){let T=M.flatMap((M,L)=>M?[L]:[]),I=T[Math.floor(A.side*T.length)];if(void 0===I)return null;let z=L=>!0===M[(I+L)%4],_=M=>z(M)?.045:.25,N=h3(L),D=N.most[0]-N.least[0],[U,C]=[_(3),1-_(1)-D],P=L.filter(M=>{let{least:L,most:R}=h3([M]);return R[1]>h1.from+1e-9&&L[1]<h1.to-1e-9}),H=0===P.length?null:h3(P),G=(null===H?[[U,C]]:[[U,Math.min(C,h1.least-(H.most[0]-N.least[0]))],[Math.max(U,h1.most-(H.least[0]-N.least[0])),C]]).filter(([M,L])=>M<=L),F=[...z(3)?[G.at(0)?.[0]]:[],...z(1)?[G.at(-1)?.[1]]:[]],W=F[Math.floor(A.end*F.length)],B=O&&E<2&&void 0!==W?W:function(M,L){let R=L*M.reduce((M,[L,R])=>M+R-L,0);for(let[L,O]of M){if(R<=O-L)return L+R;R-=O-L}return M.at(-1)?.[1]??null}(G,A.along);if(null===B)return null;let $=h2(I,.5);return ds(L,([M,L,O])=>$([.988-R-(O-N.least[2]),L,B+(M-N.least[0])]),([M,L,R])=>h2(I,0)([-R,L,M]))}(M,N,!0===L.cornered,z.spot.at({t:R}),R);if(null===_)continue;let D=h3(_);if(h4(D,de)&&_.every(M=>h9(h3([M]),O))&&!A.some(M=>h5(D,M,.004)||h7(D,M))){A.push(D),E.push({thing:I,quads:_}),T+=_.length;break}}}}return E})(L,uz(L.room.n).decor).map(({quads:M})=>M).flat(),e3(M,L.room)));return{faces:L=>{let R,O,A,E;return df([...(R=L=>{var R,O,A,E,T;let I,z,_,N,D;return R=M,O=L,A=eJ(M,L),E=C(L),T=G(L),I=e0(R.n,O.n),_=.04*(z=A.roomSide/2),N=null===E?null:{...eE(E),gapSide:.08},D=O.n<R.n||O.n===R.n&&null!==N,[...aM(A,I,N,O,T?"owned":"floor"),...null===N?[]:function({east:M,south:L,roomSide:R},{u:O,v:A,gapSide:E},T,I,z){let _=R*E,N=M+R*O-_/2,D=L+R*A-_/2,U=[0,-I,0],C=[_,0,0],P=[0,0,_];return[ad([N,T,D],P,U,z,"trim"),ad([N+_,T,D],U,P,z,"trim"),ad([N,T,D],U,C,z,"trim"),ad([N,T,D+_],C,U,z,"trim")]}(A,N,I,_,O),...(D?eT:[]).flatMap(M=>aM({east:A.east+M.qx*z,south:A.south+M.qy*z,roomSide:z},I-_,M.qx===E?.qx&&M.qy===E.qy?aS:null,eI(O,M),"ceiling"))]},O=eJ(M,aO),A=null===D.topmost?aM(O,e0(M.n,0)-.04*O.roomSide,null,aO,"ceiling"):R(D.topmost),E=aA(D),[...[...D.near,...D.below,...D.above].flatMap(M=>R(M)),...A,...aR(pu,M,D.near),...aR(pu,M,D.below),...null===D.overhead?[]:aR(pu,M,[D.overhead]),...E.flatMap(L=>(function(M,L,R){if(R<=0)return[];let{east:O,south:A,roomSide:E}=eJ(M,L),T=e0(M.n,L.n),I=[0,.46*E,0],z=R*E;return eT.flatMap(({qx:M,qy:R})=>{let _=1-2*M,N=1-2*R,D=O+M*E,U=A+R*E,C=[0,0,N*z],P=[_*z,0,0],H=[D+_*z,T,U],G=[D,T,U+N*z];return _===N?[ad(H,I,C,L,"trim"),ad(G,P,I,L,"trim")]:[ad(H,C,I,L,"trim"),ad(G,I,P,L,"trim")]})})(M,L,pm(L.n))),...E.flatMap(R=>(function(M,L,R,O,A){if(null===O)return[];let{origin:E,roomSide:T}=e3(L,R);return function(M,L,R,O,A){let{mount:E,at:T}=M,I=([M,L,A])=>[R[0]+M*O,R[1]+L*O,R[2]+A*O],{out:z,along:_,footU:N,footV:D}=ay(M),U=[0,1,0],C="post"===E?am(I([T.u<.5?0:.97,0,T.v<.5?0:.97]),[[.03*O,0,0],[0,.5*O,0],[0,0,.03*O]],L,"trim"):[],P=([M,R,A],E,T,C)=>am(I([N-_[0]*M/2+z[0]*T,E,D-_[2]*M/2+z[2]*T]),[tL(_,M*O),tL(U,R*O),tL(z,A*O)],L,C),{centre:H,axis:G}=ak(M);return[...C,...P([.05,.07,.004],ax-.035,0,"plate"),...P([.044,.004,.022],.196,.004,"handle"),...P([.018,4e-4,.018],.2,.006,"paper"),...A?[]:ab(I(H),G,O,L)]}(aw(M,R,O),R,E,T,null!==A&&ei(A.room)===ei(R))})(pu,M,R,C(R),L))]),...F,...$],W)},stood:L=>df([...Map.groupBy(L,({room:M})=>ei(M)).values()].flatMap(L=>void 0===L[0]?[]:h$(L,e3(M,L[0].room))),W),boards:[...function(M,L,{signs:R,sold:O},A){return[...Map.groupBy(L,({room:M,sign:L})=>`${L.kind}/${String(M.n)}`)].flatMap(([L,E])=>{let[T]=E;if(void 0===T)return[];let{n:I}=T.room,{kind:z}=T.sign,_="yours"===z,N=_?O:om(aK(I));return[{id:L,image:()=>(function(M,L,R,O){let A,E,T=new OffscreenCanvas(512,256),I=T.getContext("2d");if(null===I)throw Error("No 2D canvas to draw a sign on");let{board:z,ink:_,price:N}=(A=M,E=L,{board:i4(137.508*A%360,.12,.95),ink:E?i4(150,.6,.3):i4(355,.7,.42),price:i4(137.508*A%360,.6,.18)});I.fillStyle=i9(_),I.fillRect(0,0,512,256),I.fillStyle=i9(z),I.fillRect(14,14,484,228);let D=dP(M),U=(M,L,R,O)=>{let A=dB(M,D),E=Math.min(L,428/A);pf(I,dW(M,D),{leftPixel:(512-A*E)/2,baseline:256*O+E/2,pixelsPerUnit:E,nibPixels:.15*E,inkColour:i9(R)})};return U(R.toUpperCase(),60,_,.36),U(O,50,N,.7),T})(I,_,R[z],N),scenery:pp(E.flatMap(({room:L,sign:R})=>aW(R,aY,L,e3(M,L))),A)}]})}(M,P,L,W),...(z=aA(D).filter(M=>aB(M,C)).map(M=>({room:M,mount:aG(aN.map(L=>({step:L,is:aU(ph,M,L)?"open":"wall"})),void 0)})),[...Map.groupBy(z,({room:M})=>M.n)].map(([L,R])=>({id:`poster/${String(L)}`,image:()=>(function(M){let L=new OffscreenCanvas(1024,Math.round(1024/.36*.3)),R=L.getContext("2d");if(null===R)throw Error("No 2D canvas to paint a poster on");var O=function(M){var L;let R,O,A,E,T=function(M){let L=pe[pr[Math.min(Math.max(M,1),66)-1]??0];if(void 0===L)throw Error(`No poster for floor ${M}`);return L}(M),I=dP(M),[z="",_=""]=function(M,L){var R;let{name:O,metres:A,measured:E,unsizedNote:T}=M;return void 0===E?[O,T??""]:[O,`${dJ(A)} ${E}. ${(R=A/dV(L))>1.25?`${dQ(R)} TIMES YOUR SIZE`:R<.8?`${dQ(1/R)} TIMES SMALLER THAN YOU`:"YOUR SIZE"}.`]}(T,M),N=[[.014,d$-.007],[.346,d$-.007]];return[{part:"paper",sheetWide:.36,sheetTall:.3,tint:i4(137.508*M%360,.16,.9)},{part:"title",strokes:[...pn("ACTUAL SIZE",dH,.011,d$),...pn(`YOU: ${dJ(dV(M))}`,dH,.011,d$,"right"),N],nibWide:.011*.12,tint:pl(M)},function(M,L){let{low:R,high:O}=dq,A=m1(M.sketch,L),[E,T,I,z]=dw(A),_=Math.min(dj/(I-E),dK/(z-T)),N=void 0===M.measured?.8*_:M.metres*dX(L),D=[pi([E*N,I*N],M.focus[0]*N,R[0],O[0]),pi([T*N,z*N],M.focus[1]*N,R[1],O[1])],U=Math.max(I-E,z-T)*N;return{part:"drawing",strokes:function(M,L){let R=[];for(let O of M){let M=[];for(let[A,E]of(R.push(M),O.slice(0,-1).entries())){let T=O[A+1]??E,[I,z]=function(M,L,{low:R,high:O}){let[A,E]=[0,1];for(let T of[0,1]){let I=M[T],z=L[T]-I;if(0===z){if(I<R[T]||I>O[T])return null}else{let[M,L]=[(R[T]-I)/z,(O[T]-I)/z].toSorted((M,L)=>M-L);if((A=Math.max(A,M??0))>(E=Math.min(E,L??1)))return null}}return[A,E]}(E,T,L)??[1,0];(I>0||I>z)&&M.length>0&&(M=[],R.push(M)),I<=z&&(0===M.length&&M.push(dY(E,T,I)),M.push(dY(E,T,z)),z<1&&(M=[],R.push(M)))}}return R.filter(M=>M.length>1)}(db(A,N,...D),dq),nibWide:Math.min(Math.max(U/60,25e-5),.0015),tint:ps(L)}}(T,M),{part:"ruler",strokes:(L=.12/dX(M),R=10**Math.floor(Math.log10(L)),A=(O=([5,2,1].find(M=>M*R<=1.000001*L)??1)*R)*dX(M),E=[0,1,2,3,4,5].map(M=>{let L=.014+A*M/5;return[[L,.047375],[L,.047375+(M%5==0?.005:.0025)]]}),[[[.014,.047375],[.014+A,.047375]],...E,...db(dW(dJ(O),dH),.007,.014+A+.007,.047375)]),nibWide:84e-5,tint:pl(M)},{part:"caption",strokes:[...pn(z,I,.0085,.014+.0085*1.75),...pn(_,I,.0085,.014)],nibWide:.00102,tint:ps(M)}]}(M),A=1024/.36;let E=0;for(let M of O)"paper"===M.part?(E=M.sheetTall,R.fillStyle=i9(M.tint),R.fillRect(0,0,M.sheetWide*A,M.sheetTall*A)):pf(R,M.strokes,{leftPixel:0,baseline:E*A,pixelsPerUnit:A,nibPixels:M.nibWide*A,inkColour:i9(M.tint)});return L})(L),scenery:pp(R.flatMap(({room:L,mount:R})=>aW(R,pc,L,e3(M,L))),W)})))],signOf:M=>H.get(ei(M))??null,settings:B}}let pg={high:1,medium:.75,low:.5},pb={high:"medium",medium:"low",low:"high"},pw="KeyQ";function px({viewProjection:M,eye:L,seconds:R,hour:O,width:A,height:E,outside:T,vignette:I}){let z=new Float32Array(32);return z.set(M,0),z.set([...L,1],16),z.set([R,O,A,E],20),null!==T&&z.set([T.exposure,T.eyelids,T.indoors??0],24),z.set([I],28),z}function py(M,L){let R=M.createBuffer({size:128,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),O=M.createBindGroup({layout:L,entries:[{binding:0,resource:{buffer:R}}]});return{buffer:R,group:O}}let pk=tO("ui/bloom-numbers",`
const BLOOM_LEVELS = 5.0;
`),pS=tO("cube/pages/cube/ui/bloom-pass",`
@group(0) @binding(0) var source: texture_2d<f32>;
@group(0) @binding(1) var sourceSampler: sampler;

struct Varying {
  @builtin(position) clip: vec4f,
  @location(0) uv: vec2f,
}

@vertex
fn vertexMain(@builtin(vertex_index) index: u32) -> Varying {
  let corner = vec2f(f32((index << 1u) & 2u), f32(index & 2u));
  var out: Varying;
  out.clip = vec4f(corner * 2.0 - 1.0, 0.0, 1.0);
  out.uv = vec2f(corner.x, 1.0 - corner.y);
  return out;
}

fn at(uv: vec2f) -> vec3f {
  return textureSampleLevel(source, sourceSampler, uv, 0.0).rgb;
}

/// The source around \`uv\`, \`reach\` texels wide: its middle and four corners.
fn spread(uv: vec2f, reach: f32) -> vec3f {
  let texel = reach / vec2f(textureDimensions(source));
  return
    (at(uv) * 4.0
      + at(uv + texel * vec2f(-1.0, -1.0))
      + at(uv + texel * vec2f(1.0, -1.0))
      + at(uv + texel * vec2f(-1.0, 1.0))
      + at(uv + texel * vec2f(1.0, 1.0))) / 8.0;
}

@fragment
fn bright(in: Varying) -> @location(0) vec4f {
  let colour = spread(in.uv, 1.0);
  let level = max(colour.r, max(colour.g, colour.b));
  let kept = max(level - 1.0, 0.0) / max(level, 1e-4);
  return vec4f(colour * (kept / BLOOM_LEVELS), 1.0);
}

@fragment
fn down(in: Varying) -> @location(0) vec4f {
  return vec4f(spread(in.uv, 1.0), 1.0);
}

@fragment
fn up(in: Varying) -> @location(0) vec4f {
  return vec4f(spread(in.uv, 0.75), 1.0);
}
`,pk);function pM(M){let L=Math.max(1,Math.floor(M)),R=M-L,O=[...R>0?[R]:[],...Array.from({length:L},()=>1)];return O.map((M,L)=>({coverage:M,first:0===L,last:L===O.length-1}))}let pL={coverage:1,first:!0,last:!0};function pR(M,L){let[R=pL,...O]=M,A=L(R);for(let M of O)A=L(M);return A}function pO(M,L,R,{width:O,height:A}){let{timestampWrites:E,...T}=L,I=function(M,{first:L,last:R}){if(void 0===M||L&&R)return M;let{querySet:O,beginningOfPassWriteIndex:A,endOfPassWriteIndex:E}=M,T=L?A:void 0,I=R?E:void 0;if(void 0!==T||void 0!==I)return{querySet:O,...void 0===T?{}:{beginningOfPassWriteIndex:T},...void 0===I?{}:{endOfPassWriteIndex:I}}}(E,R),z=M.beginRenderPass(void 0===I?T:{...T,timestampWrites:I});return R.coverage<1&&z.setScissorRect(0,0,O,Math.max(1,Math.ceil(A*R.coverage))),z}let pA="rgba16float";function pE(M,L,R,O,{keeps:A=!1,stamp:E,scissored:T}={}){let I=pO(M,{colorAttachments:[{view:O,loadOp:A?"load":"clear",storeOp:"store"}],...void 0===E?{}:{timestampWrites:E}},T?.repeat??pL,T??{width:1,height:1});I.setPipeline(L),I.setBindGroup(0,R),I.draw(3),I.end()}let pT=tO("cube/pages/cube/ui/cover",`
@vertex
fn vertexMain(@builtin(vertex_index) index: u32) -> @builtin(position) vec4f {
  let corner = vec2f(f32((index << 1u) & 2u), f32(index & 2u));
  return vec4f(corner * 2.0 - 1.0, 0.0, 1.0);
}
`),pI={2:[0,3,1,2],3:[0,5,7,1,6,8,2,3,4],4:[0,10,2,8,5,15,7,13,1,11,3,9,4,14,6,12]},pz=tO("ui/reflection-numbers",`
const SIGHT = ${String(1e4)};
`),p_=tO("cube/pages/cube/ui/sight-line",`
/// The way from \`eye\` through \`uv\` on the screen, unit length; \`inverse\` takes
/// clip space back to the frame the mesh is in.
fn sightThrough(inverse: mat4x4f, eye: vec3f, uv: vec2f) -> vec3f {
  let along = inverse * vec4f(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, 0.5, 1.0);
  return normalize(along.xyz / along.w - eye);
}
`),pN=tO("cube/pages/cube/ui/drowsy-resolve",`
struct Resolve {
  /// From this frame's clip space back to the frame the mesh is in.
  inverse: mat4x4f,
  /// The last frame's view-projection, as it was drawn whole.
  previous: mat4x4f,
  /// The eye, and how many metres one unit of the frame is.
  eye: vec4f,
  /// The full frame in pixels, the share, the drowsiness.
  size: vec4f,
  /// The pixel each block's fresh sample is, and whether the history holds
  /// the frame before (1) or nothing (0).
  jitter: vec4f,
}

@group(0) @binding(0) var<uniform> resolve: Resolve;
@group(0) @binding(1) var low: texture_2d<f32>;
@group(0) @binding(2) var history: texture_2d<f32>;
@group(0) @binding(3) var trusted: texture_2d<f32>;
@group(0) @binding(4) var linearSampler: sampler;

struct Resolved {
  /// The light, and in \`a\` the metres to what it shows, as the scene keeps it.
  @location(0) light: vec4f,
  @location(1) trust: vec4f,
}

/// Where \`p\` stood on the last frame's screen, 0 to 1 from the top left; z is
/// 0 for a point that was behind the eye.
fn before(p: vec3f) -> vec3f {
  let clip = resolve.previous * vec4f(p, 1.0);
  if (clip.w <= 1e-5) {
    return vec3f(0.0);
  }
  let ndc = clip.xy / clip.w;
  return vec3f(ndc.x * 0.5 + 0.5, 0.5 - ndc.y * 0.5, 1.0);
}

@fragment
fn resolveMain(@builtin(position) at: vec4f) -> Resolved {
  let share = i32(resolve.size.z);
  let drowsy = resolve.size.w;
  let jitter = vec2i(resolve.jitter.xy);
  let p = vec2i(at.xy);
  let lowSize = vec2i(textureDimensions(low));
  let block = clamp((p - jitter) / share, vec2i(0), lowSize - 1);
  let near = textureLoad(low, block, 0);
  let fresh = all(p % share == jitter);
  let lowUv = (vec2f(p - jitter) / f32(share) + 0.5) / vec2f(lowSize);
  var least = vec3f(1e9);
  var most = vec3f(-1e9);
  for (var j = -1; j <= 1; j++) {
    for (var i = -1; i <= 1; i++) {
      let around =
        textureLoad(
          low,
          clamp(block + vec2i(i, j), vec2i(0), lowSize - 1),
          0,
        ).rgb;
      least = min(least, around);
      most = max(most, around);
    }
  }

  let here = (at.xy) / resolve.size.xy;
  let metres = select(SIGHT, near.a, near.a < SIGHT);
  let sight = sightThrough(resolve.inverse, resolve.eye.xyz, here);
  let shown = resolve.eye.xyz + sight * (metres / resolve.eye.w);
  let was = before(shown);
  let front = was.z > 0.0;
  var motion = select(vec2f(0.0), here - was.xy, front);
  motion *= min(1.0, 0.25 / max(length(motion), 1e-6));

  // Where the history has nothing (the strip a turn brings in), the low pass
  // stands in, smeared along the motion like the rest of the frame.
  var smeared = vec3f(0.0);
  for (var k = 0; k < 4; k++) {
    let s = (f32(k) / 3.0 - 0.5) * (0.35 + drowsy * 1.6);
    smeared +=
      textureSampleLevel(low, linearSampler, lowUv + motion * s, 0.0).rgb;
  }
  smeared *= 0.25;

  // Trust fades out towards the old frame's edge so the strip has no seam:
  // only from the edge the motion crossed, three frames of it wide, so a
  // still view keeps its borders sharp.
  let inside = all(was.xy >= vec2f(0.0)) && all(was.xy <= vec2f(1.0));
  let crossed =
    vec2f(
      select(1.0 - was.x, was.x, motion.x > 0.0),
      select(1.0 - was.y, was.y, motion.y > 0.0),
    );
  let fade =
    smoothstep(vec2f(0.0), max(abs(motion) * 3.0, vec2f(1e-4)), crossed);
  // The sky drifts on the wind, which the reprojection does not follow, and
  // its clouds are marched afresh every frame anyway: a still eye takes it
  // from the fresh view, and only a turning one lets it trail.
  let sky = near.a >= SIGHT;
  let turning = smoothstep(0.0005, 0.004, length(motion));
  var trust =
    select(
      0.0,
      fade.x * fade.y,
      front && inside && resolve.jitter.z > 0.5,
    ) * select(1.0, turning, sky);
  var held = smeared;
  if (trust > 0.0) {
    // The lag: the old picture trails the turn.
    let trail = was.xy + motion * 0.55 * drowsy;
    var sum = vec3f(0.0);
    var confidence = 0.0;
    for (var k = 0; k < 4; k++) {
      let uv = trail + motion * ((f32(k) / 3.0 - 0.5) * drowsy * 1.6);
      sum += textureSampleLevel(history, linearSampler, uv, 0.0).rgb;
      confidence += textureSampleLevel(trusted, linearSampler, uv, 0.0).r;
    }
    var past = sum * 0.25;
    // History the fresh neighbourhood disowns (moving water) melts into the
    // smeared fresh view instead of dithering; history that agrees keeps its
    // sharpness.
    let stray = length(past - clamp(past, least, most));
    past = mix(past, smeared, smoothstep(0.0, 0.08, stray) * drowsy);
    past = mix(clamp(past, least, most), past, drowsy);
    trust *= confidence * 0.25;
    held = mix(smeared, past, trust);
  }
  let light =
    select(
      held,
      mix(near.rgb, held, 0.55 * drowsy * trust + 0.5 * (1.0 - trust)),
      fresh,
    );
  return
    Resolved(
      vec4f(light, near.a),
      vec4f(select(trust, 1.0, fresh), 0.0, 0.0, 1.0),
    );
}
`,pz,p_);var pD=M.i(801236),pU=M.i(369963),pC=M.i(514287),pP=M.i(599565),pP=pP;let pH=Y.z.object({drowsy:pD.z.boolean(),share:pU.z.literal([2,3,4]),drowsiness:pC.z.number().min(0).max(1),vignette:pC.z.number().min(0).max(1),slowdown:pC.z.number().min(1).max(16)}),pG={drowsy:!0,share:3,drowsiness:1,vignette:.35,slowdown:1},pF="cube",pW="r16float",pB=M=>({view:M,loadOp:"clear",storeOp:"store"}),p$=tO("cube/pages/cube/ui/halve-pass",`
@group(0) @binding(0) var above: texture_2d<f32>;
@group(0) @binding(1) var aboveSampler: sampler;

@fragment
fn halveMain(@builtin(position) pixel: vec4f) -> @location(0) vec4f {
  let uv = pixel.xy * 2.0 / vec2f(textureDimensions(above));
  return textureSampleLevel(above, aboveSampler, uv, 0.0);
}
`),pq=tO("cube/pages/cube/ui/reflection-pass",`
struct View {
  viewProjection: mat4x4f,
  /// From clip space back to the frame the mesh is in.
  inverse: mat4x4f,
  /// The eye, and how many metres one unit of the frame is.
  eye: vec4f,
  /// The screen in pixels, the projection's focal length, the top blur level.
  size: vec4f,
}

@group(0) @binding(0) var<uniform> view: View;
@group(0) @binding(1) var scene: texture_2d<f32>;
@group(0) @binding(2) var mirror: texture_2d<f32>;
@group(0) @binding(3) var plane: texture_2d<f32>;
@group(0) @binding(4) var blurSampler: sampler;

/// Steps of the walk, and halvings that close in on what it passed behind.
const STEPS = 24;
const CLOSING = 6;
/// How many times its own length the walk's last halving may lie behind a
/// face it met: a face seen edge-on hides much depth in one pixel.
const SLANT = 8.0;
/// The longest walk, in metres.
const REACH = 14.0;
/// How far behind what the scene shows the walk may be, past its own step,
/// and still be taken for having struck it, in metres.
const THICK = 0.4;
/// The share of a distance the scene's half-float depth cannot tell apart.
const BLUNT = 0.004;
/// Pixels the walk goes before anything can hide it.
const LEAVING = 2.0;
/// What \`behind\` says of a point off the screen.
const OFF = -1e9;
/// Levels below the one a blur that wide would pick: a level is a box, and
/// a box blurs harder than an edge spread that wide.
const SHARPEN = 1.0;
/// Samples along the blur's long side, and the longest it runs, as a share
/// of the screen's height.
const TAPS = 5;
const LONGEST = 0.15;

/// Where \`p\` lands on the screen, 0 to 1 from the top left; z is 0 for a
/// point behind the eye.
fn onScreen(p: vec3f) -> vec3f {
  let clip = view.viewProjection * vec4f(p, 1.0);
  if (clip.w <= 1e-5) {
    return vec3f(0.0);
  }
  let ndc = clip.xy / clip.w;
  return vec3f(ndc.x * 0.5 + 0.5, 0.5 - ndc.y * 0.5, 1.0);
}

/// Metres from the eye to what the scene shows at \`texel\`, \`SIGHT\` where
/// it holds infinity or no number, which would spread through every sum.
fn metresAt(texel: vec2i) -> f32 {
  let metres = textureLoad(scene, texel, 0).a;
  return select(SIGHT, metres, metres < SIGHT);
}

/// Metres from the eye to what the scene shows at \`uv\`.
fn sceneFar(uv: vec2f) -> f32 {
  return
    metresAt(
      clamp(vec2i(uv * view.size.xy), vec2i(0), vec2i(view.size.xy) - 1),
    );
}

/// Where the point \`t\` units along the walk lands, and how many metres it
/// lies behind what the scene shows there, past what the scene's depth can
/// tell apart: negative in front, \`OFF\` off the screen. Within \`LEAVING\`
/// pixels of \`origin\`, where the walk set out, it is always in front: a
/// pixel of a floor seen along its length spans more depth than the walk's
/// first steps climb, so the floor there would hide the walk from itself.
fn behind(start: vec3f, ray: vec3f, t: f32, origin: vec2f) -> vec3f {
  let q = start + ray * t;
  let at = onScreen(q);
  if (at.z == 0.0 || any(at.xy < vec2f(0.0)) || any(at.xy > vec2f(1.0))) {
    return vec3f(at.xy, OFF);
  }
  if (length((at.xy - origin) * view.size.xy) < LEAVING) {
    return vec3f(at.xy, -1.0);
  }
  let far = length(q - view.eye.xyz) * view.eye.w;
  let shown = sceneFar(at.xy);
  return vec3f(at.xy, far - shown - (BLUNT * shown + 0.01));
}

/// The walk from \`start\`, seen at \`origin\`, along \`ray\`: where on the
/// screen it struck, how many units it ran, and how far to trust it, 0 where
/// it struck nothing.
fn walk(start: vec3f, ray: vec3f, origin: vec2f) -> vec4f {
  let reach = REACH / view.eye.w;
  var before = 0.0;
  for (var i = 1; i <= STEPS; i++) {
    // Steps lengthen with the walk: short beside the surface it leaves, as
    // long as a far wall's detail on the screen at its end.
    let share = f32(i) / f32(STEPS);
    let t = reach * share * share;
    let out = behind(start, ray, t, origin);
    if (out.z == OFF) {
      return vec4f(0.0);
    }
    if (out.z > 0.0) {
      var near = before;
      var far = t;
      var at = out.xy;
      var past = out.z;
      for (var k = 0; k < CLOSING; k++) {
        let mid = 0.5 * (near + far);
        let probe = behind(start, ray, mid, origin);
        if (probe.z > 0.0) {
          far = mid;
          at = probe.xy;
          past = probe.z;
        } else {
          near = mid;
        }
      }
      // Closed in on a face it met, the walk ends just behind it; still far
      // behind what is shown, it passed behind something standing in front.
      if (past > (far - near) * view.eye.w * SLANT + THICK) {
        return vec4f(0.0);
      }
      let edge = min(min(at.x, 1.0 - at.x), min(at.y, 1.0 - at.y));
      let trust =
        smoothstep(0.0, 0.08, edge) * (1.0 - smoothstep(0.6, 1.0, far / reach));
      return vec4f(at, far, trust);
    }
    before = t;
  }
  return vec4f(0.0);
}

/// The way from the eye through \`uv\` on the screen, unit length.
fn sightAt(uv: vec2f) -> vec3f {
  return sightThrough(view.inverse, view.eye.xyz, uv);
}

/// What the scene shows at \`texel\`, as a point of the frame.
fn shownAt(texel: vec2i) -> vec3f {
  let at = clamp(texel, vec2i(0), vec2i(view.size.xy) - 1);
  let uv = (vec2f(at) + 0.5) / view.size.xy;
  return view.eye.xyz + sightAt(uv) * (metresAt(at) / view.eye.w);
}

/// Metres the face shown at \`texel\` runs across one pixel along \`axis\`,
/// taken toward the neighbour on the same face, the nearer of the two.
fn stride(texel: vec2i, axis: vec2i) -> f32 {
  let p = shownAt(texel);
  let ahead = length(shownAt(texel + axis) - p);
  let back = length(shownAt(texel - axis) - p);
  return max(min(ahead, back) * view.eye.w, 1e-4);
}

/// The scene at \`uv\` blurred \`soft\` metres across the face it shows there,
/// as a rough mirror shows it: a face seen aslant blurs along its slant in
/// fewer pixels than across, so the blur is a level as sharp as its short
/// side, drawn out by taps along its long one.
fn blurred(uv: vec2f, soft: f32) -> vec3f {
  let texel = vec2i(uv * view.size.xy);
  let spread =
    soft / vec2f(stride(texel, vec2i(1, 0)), stride(texel, vec2i(0, 1)));
  let short = min(spread.x, spread.y);
  let long = min(max(spread.x, spread.y), LONGEST * view.size.y);
  // No sharper than the gap between taps, so they run together.
  let level =
    clamp(
      log2(max(max(short, long / f32(TAPS)), 1.0)) - SHARPEN,
      0.0,
      view.size.w,
    );
  let way =
    select(vec2f(0.0, 1.0), vec2f(1.0, 0.0), spread.x > spread.y)
      * long
      / view.size.xy;
  var sum = vec3f(0.0);
  for (var j = 0; j < TAPS; j++) {
    let off = (f32(j) / f32(TAPS - 1) - 0.5) * way;
    sum += textureSampleLevel(scene, blurSampler, uv + off, level).rgb;
  }
  return sum / f32(TAPS);
}

@fragment
fn reflectionMain(@builtin(position) pixel: vec4f) -> @location(0) vec4f {
  let texel = vec2i(pixel.xy);
  let lit = textureLoad(scene, texel, 0);
  let left = textureLoad(mirror, texel, 0);
  if (left.a <= 0.0) {
    return lit;
  }
  let facing = textureLoad(plane, texel, 0);
  let uv = pixel.xy / view.size.xy;
  let sight = sightAt(uv);
  let start = view.eye.xyz + sight * (metresAt(texel) / view.eye.w);
  let struck = walk(start, reflect(sight, normalize(facing.xyz)), uv);
  var shown = left.rgb;
  if (struck.w > 0.0) {
    shown =
      mix(
        left.rgb,
        blurred(struck.xy, facing.w * struck.z * view.eye.w),
        struck.w,
      );
  }
  return vec4f(lit.rgb + left.a * shown, lit.a);
}
`,pz,p_),pj=tI([p$,pT]),pK=tI([pq,pT]),pY=["rgba16float","rgba16float"];function pV(M){let L,R,O,A,E=(L=M.createShaderModule({code:pj}),R=M.createRenderPipeline({layout:"auto",vertex:{module:L,entryPoint:"vertexMain"},fragment:{module:L,entryPoint:"halveMain",targets:[{format:pA}]}}),O=M.createSampler({magFilter:"linear",minFilter:"linear"}),L=>{let A=Array.from({length:L.mipLevelCount},(M,R)=>L.createView({baseMipLevel:R,mipLevelCount:1})),E=A.slice(1).map((E,T)=>({into:E,width:Math.max(1,L.width>>T+1),height:Math.max(1,L.height>>T+1),read:M.createBindGroup({layout:R.getBindGroupLayout(0),entries:[{binding:0,resource:A[T]??E},{binding:1,resource:O}]})}));return{levels:A,fill:(M,L=pL)=>{for(let{into:O,read:A,width:T,height:I}of E)pE(M,R,A,O,{scissored:{repeat:L,width:T,height:I}})}}}),T=(A=M.createShaderModule({code:pK}),M.createRenderPipeline({layout:"auto",vertex:{module:A,entryPoint:"vertexMain"},fragment:{module:A,entryPoint:"reflectionMain",targets:[{format:pA}]}})),I=M.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear"}),z=M.createBuffer({size:160,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),_=null,N=(L,R,O,A=1)=>M.createTexture({size:[L,R],format:O,mipLevelCount:A,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});return{attachments:(L,R,O)=>{let{chain:A,mirror:D,plane:U}=((L,R)=>{if(_?.width===L&&_.height===R)return _;for(let M of _?.textures??[])M.destroy();let O=Math.min(6,Math.floor(Math.log2(Math.max(L,R)))+1),A=N(L,R,pA,O),[D,U]=pY,C=N(L,R,D),P=N(L,R,U),H=N(L,R,pA),G=C.createView(),F=P.createView();return _={width:L,height:R,textures:[A,C,P,H],chain:E(A),mirror:G,plane:F,lit:H.createView(),reflecting:M.createBindGroup({layout:T.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:z}},{binding:1,resource:A.createView()},{binding:2,resource:G},{binding:3,resource:F},{binding:4,resource:I}]})}})(L,R),[C]=A.levels;if(void 0===C)throw Error("The scene has no levels");let P={r:0,g:0,b:0,a:0};return[{view:C,clearValue:O},{view:D,clearValue:P},{view:U,clearValue:P}].map(M=>({...M,loadOp:"clear",storeOp:"store"}))},run:(L,{viewProjection:R,eye:O},A,E=pL)=>{if(null===_)throw Error("No scene was drawn to reflect");let{width:I,height:N,chain:D,reflecting:U,lit:C}=_,P=Math.hypot(R[1]??0,R[5]??0,R[9]??0),H=new Float32Array(40);return H.set(R,0),H.set(iQ(R),16),H.set([...O,5],32),H.set([I,N,P,D.levels.length-1],36),M.queue.writeBuffer(z,0,H),D.fill(L,E),pE(L,T,U,C,{stamp:A,scissored:{repeat:E,width:I,height:N}}),C},dispose:()=>{for(let M of _?.textures??[])M.destroy();z.destroy()}}}let pX="depth32float",pZ=[pA,...pY].map(M=>({format:M}));function pQ(M){let L=null;return{of:({width:R,height:O})=>{if(L?.width===R&&L.height===O)return L.view;L?.texture.destroy();let A=M.createTexture({size:[R,O],format:pX,usage:GPUTextureUsage.RENDER_ATTACHMENT});return(L={width:R,height:O,texture:A,view:A.createView()}).view},dispose:()=>{L?.texture.destroy()}}}function pJ(M,{reflection:L,depth:R,clear:[O,A,E],size:T,stamp:I},z){return pO(M,{colorAttachments:L.attachments(T.width,T.height,{r:O,g:A,b:E,a:1e4}),depthStencilAttachment:{view:R.of(T),depthClearValue:0,depthLoadOp:"clear",depthStoreOp:"discard"},...void 0===I?{}:{timestampWrites:I}},z,T)}let p0=tO("cube/pages/cube/ui/underlay",`
struct Underlay {
  viewProjection: mat4x4f,
  /// From clip space back to the frame the mesh is in.
  inverse: mat4x4f,
  /// The eye, and how many metres one unit of the frame is.
  eye: vec4f,
  /// The frame in pixels.
  size: vec4f,
}

@group(0) @binding(0) var<uniform> underlay: Underlay;
@group(0) @binding(1) var outside: texture_2d<f32>;

struct Laid {
  @location(0) light: vec4f,
  @location(1) mirror: vec4f,
  @location(2) plane: vec4f,
  @builtin(frag_depth) depth: f32,
}

@fragment
fn underlayMain(@builtin(position) at: vec4f) -> Laid {
  let seen = textureLoad(outside, vec2i(at.xy), 0);
  let uv = at.xy / underlay.size.xy;
  let sight = sightThrough(underlay.inverse, underlay.eye.xyz, uv);
  let shown = underlay.eye.xyz + sight * (seen.a / underlay.eye.w);
  let clip = underlay.viewProjection * vec4f(shown, 1.0);
  // Where sight ends is the far plane: 0, the clip depth being reversed.
  let near = seen.a < SIGHT && clip.w > 0.0;
  let depth = select(0.0, clamp(clip.z / clip.w, 0.0, 1.0), near);
  return Laid(seen, vec4f(0.0), vec4f(0.0), depth);
}
`,pz,p_);async function p2(M,L){let R=await M.lost;"destroyed"!==R.reason&&L(Error(`WebGPU device lost: ${R.message}`))}async function p1(M,L,R){var O;let A,E,T,I,z,_,N,D,U,C,P,H,G,F,W,B,$,q,j,K,Y,V,X,Z,Q,J,ee,et,ea,er,es,el,eo,en,ei,ef,ec,eu,eh,ed,em;if(!("gpu"in navigator))return null;let ep=await navigator.gpu.requestAdapter();if(null===ep)return null;let ev=ep.features.has("timestamp-query"),eg=await ep.requestDevice({requiredFeatures:ev?["timestamp-query"]:[]});p2(eg,R).catch(M=>{R((0,lQ.a)(M))});let eb=ev?(A=eg.createQuerySet({type:"timestamp",count:6}),E=6*BigInt64Array.BYTES_PER_ELEMENT,T=eg.createBuffer({size:E,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),I=eg.createBuffer({size:E,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),z=!1,_=!1,N=!1,D=!1,U=!1,C=or(),P=0,H=async()=>{var M;let L,R;await I.mapAsync(GPUMapMode.READ);let O=BigInt64Array.from(new BigInt64Array(I.getMappedRange()));I.unmap();let A=(M=N,L=M=>Number(O[M]??0n),{scene:(R=(M,R)=>Math.max(L(R)-L(M),0)/1e6)(0,1),mirrors:R(1,2),resolve:M?R(2,3):0,glow:R(M?3:2,4),lens:R(4,5)});for(let M of oa)C[M]+=A[M];P+=1,z=!1},{stamping:()=>U,timing:M=>{U=M,C=or(),P=0},scene:{querySet:A,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},mirrors:{querySet:A,endOfPassWriteIndex:2},resolve:{querySet:A,endOfPassWriteIndex:3},lens:{querySet:A,beginningOfPassWriteIndex:4,endOfPassWriteIndex:5},copy:(M,L)=>{(_=!z)&&(z=!0,N=L,M.resolveQuerySet(A,0,6,T,0),M.copyBufferToBuffer(T,0,I,0,E))},read:()=>{_&&(_=!1,H().catch(M=>{D||R((0,lQ.a)(M))}))},take:()=>{if(0===P)return null;let M=or();for(let L of oa)M[L]=C[L]/P;return C=or(),P=0,M},dispose:()=>{D=!0,A.destroy(),T.destroy(),I.destroy()}}):null,ew=M.getContext("webgpu");if(null===ew)return null;let ex=navigator.gpu.getPreferredCanvasFormat();ew.configure({device:eg,format:ex,alphaMode:"opaque"});let{layouts:ey,prepare:ek,outsideLens:eS,of:eM}=(G={uniform:eg.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{}}]}),board:eg.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]}),lens:eg.createBindGroupLayout({entries:[{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]})},F=eg.createPipelineLayout({bindGroupLayouts:[G.uniform,G.lens]}),W=eg.createPipelineLayout({bindGroupLayouts:[G.uniform]}),B=eg.createPipelineLayout({bindGroupLayouts:[G.uniform,G.board]}),$=async M=>eg.createRenderPipelineAsync({layout:F,vertex:{module:M,entryPoint:"lensVertex"},fragment:{module:M,entryPoint:"lensFragment",targets:[{format:ex}]}}),q=async()=>$(await iy(eg,"The outside lens's shader",fy(uz(1),uW,uN))),j=null,K=new Map,Y=new Map,V=async M=>{let R=await iy(eg,`Floor ${String(M)}'s shader`,L(M)),O=async(M,L)=>eg.createRenderPipelineAsync({layout:M,vertex:{module:R,entryPoint:"vertexMain",buffers:[uH]},fragment:{module:R,entryPoint:L,targets:pZ},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{format:pX,depthWriteEnabled:!0,depthCompare:"greater"}}),[A,E,T]=await Promise.all([O(W,"fragmentMain"),O(B,"boardFragment"),$(R)]),I={faces:A,boards:E,lens:T};return Y.set(M,I),I},{layouts:G,outsideLens:async()=>j??=q(),prepare:async M=>{await Promise.all(M.map(async M=>{let L=K.get(M)??V(M);return K.set(M,L),L}))},of:M=>{let L=Y.get(M);if(void 0===L)throw Error(`Floor ${String(M)} is drawn before it was prepared`);return L}}),eL=(X=null,Z=null,Q=async()=>{let[M,L]=await Promise.all([iX(eg,{targets:pZ,depthFormat:pX}),eS()]);X={layers:M,lens:L}},{prepare:async()=>Z??=Q(),made:()=>{if(null===X)throw Error("The outside is drawn before it was prepared");return X},dispose:()=>{X?.layers.dispose()}}),eR=py(eg,ey.uniform),eO=py(eg,ey.uniform),eA=eg.createSampler({magFilter:"linear",minFilter:"linear"}),eE=({data:M,ranges:L},R)=>{if(0===M.byteLength)return null;let O=eg.createBuffer({size:M.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});return eg.queue.writeBuffer(O,0,M),{buffer:O,runs:L.map(M=>({...M,pipeline:eM(M.n)[R]}))}},eT=null,eI=null,ez=[],e_=(J=eg.createShaderModule({code:tI([pS])}),ee=eg.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}}]}),et=eg.createSampler({magFilter:"linear",minFilter:"linear"}),er=(ea=(M,L)=>eg.createRenderPipeline({layout:eg.createPipelineLayout({bindGroupLayouts:[ee]}),vertex:{module:J,entryPoint:"vertexMain"},fragment:{module:J,entryPoint:M,targets:[{format:pA,...L?{blend:{color:{srcFactor:"one",dstFactor:"one"},alpha:{srcFactor:"one",dstFactor:"one"}}}:{}}]}}))("bright",!1),es=ea("down",!1),el=ea("up",!0),eo=M=>eg.createBindGroup({layout:ee,entries:[{binding:0,resource:M},{binding:1,resource:et}]}),en=[],ei="",ef=null,{run:(M,L,R,O,A=pL)=>{let E=`${String(R)}x${String(O)}`;if(E!==ei){for(let{texture:M}of(ei=E,en))M.destroy();en=Array.from({length:5},(M,L)=>{let A={width:Math.max(1,R>>L+1),height:Math.max(1,O>>L+1)},E=eg.createTexture({size:[A.width,A.height],format:pA,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),T=E.createView();return{...A,texture:E,view:T,read:eo(T)}})}ef?.view!==L&&(ef={view:L,read:eo(L)});let[T,...I]=en;if(void 0===T)throw Error("The bloom has no levels");let z=M=>({repeat:A,...M});pE(M,er,ef.read,T.view,{scissored:z(T)});let _=T;for(let L of I)pE(M,es,_.read,L.view,{scissored:z(L)}),_=L;for(let L of en.toReversed().slice(1))pE(M,el,_.read,L.view,{keeps:!0,scissored:z(L)}),_=L;return T.view},dispose:()=>{for(let{texture:M}of en)M.destroy()}}),eN=pV(eg),eD=pV(eg),eU=pQ(eg),eC=pQ(eg),eP=(ec=eg.createShaderModule({code:tI([p0,pT])}),eu=eg.createRenderPipeline({layout:"auto",vertex:{module:ec,entryPoint:"vertexMain"},fragment:{module:ec,entryPoint:"underlayMain",targets:pZ},depthStencil:{format:pX,depthWriteEnabled:!0,depthCompare:"always"}}),eh=eg.createBuffer({size:160,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),ed=new Map,{draw:(M,L,{viewProjection:R,eye:O},{width:A,height:E})=>{let T=new Float32Array(40);T.set(R,0),T.set(iQ(R),16),T.set([...O,5],32),T.set([A,E],36),eg.queue.writeBuffer(eh,0,T),M.setPipeline(eu),M.setBindGroup(0,(M=>{let L=ed.get(M);if(void 0!==L)return L;ed.size>=2&&ed.clear();let R=eg.createBindGroup({layout:eu.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:eh}},{binding:1,resource:M}]});return ed.set(M,R),R})(L)),M.draw(3)},dispose:()=>{eh.destroy(),ed.clear()}}),eH=function(M){let L,R,{settings:O,console:A}=(L=pG,{settings:()=>L,console:{setDrowsy:(R=M=>R=>{let O=pH.safeParse({...L,[M]:R});if(!O.success)throw Error(pP.prettifyError(O.error));return L=O.data})("drowsy"),setShare:R("share"),setDrowsiness:R("drowsiness"),setVignette:R("vignette"),setSlowdown:R("slowdown"),settings:()=>L}}),E=(Reflect.set(globalThis,pF,A),{dispose:()=>{Reflect.get(globalThis,pF)===A&&Reflect.deleteProperty(globalThis,pF)}}),T=M.createShaderModule({code:tI([pN,pT])}),I=M.createRenderPipeline({layout:"auto",vertex:{module:T,entryPoint:"vertexMain"},fragment:{module:T,entryPoint:"resolveMain",targets:[{format:pA},{format:pW}]}}),z=M.createSampler({magFilter:"linear",minFilter:"linear"}),_=M.createBuffer({size:176,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),N=null,D=0,U=null,C=0,P={x:0,y:0},H=null,G=()=>{N?.dispose(),N=null,U=null,H=null};return{repeats:()=>pM(O().slowdown),vignette:()=>null===N?0:O().vignette,lowPass:(L,R)=>{var A;let E,T,{drowsy:I,share:z}=O();if(!I||null===R)return G(),null;(({width:L,height:R},O,A)=>{if(N?.width===L&&N.height===R&&N.share===O&&N.drowsing===A)return;G();let E=O=>M.createTexture({size:[L,R],format:O,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),T=[E(pA),E(pA),E(pW),E(pW)],[I,z,_,D]=T.map(M=>M.createView());if(!I||!z||!_||!D)throw Error("The history has fewer frames than it was made with");return N={width:L,height:R,share:O,drowsing:A,dispose:()=>{for(let M of T)M.destroy()},light:[I,z],trust:[_,D]}})(L,z,R),A=C,P={x:(T=(E=pI[z])[A%E.length]??0)%z,y:Math.floor(T/z)},C+=1;let _=(({width:M,height:L},R)=>({width:Math.ceil(M/R),height:Math.ceil(L/R)}))(L,z),D=P;return{..._,share:z,drowsing:R,shift:M=>(function(M,{x:L,y:R},O,A,E){let T=O.width/(E*A.width),I=O.height/(E*A.height),z=T-1-(2*L+1-E)/(E*A.width),_=1-I+(2*R+1-E)/(E*A.height),N=Float32Array.from(M);for(let L=0;L<4;L+=1){let R=4*L,O=M[R+3]??0;N[R]=T*(M[R]??0)+z*O,N[R+1]=I*(M[R+1]??0)+_*O}return N})(M,D,L,_,z)}},resolve:(L,R,{viewProjection:A,eye:E},T)=>{if(null===N)throw Error("The drowsy eye resolves a frame it did not start");let{width:C,height:G,share:F,light:W,trust:B}=N,$=new Float32Array(44);$.set(iQ(A),0),$.set(U??A,16),$.set([...E,5],32),$.set([C,G,F,O().drowsiness],36),$.set([P.x,P.y,+(null!==U)],40),M.queue.writeBuffer(_,0,$);let q=+(0===D),j=((L,R)=>{if(H?.lit===L&&H.of===R)return H.groups;let O=O=>M.createBindGroup({layout:I.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:_}},{binding:1,resource:L},{binding:2,resource:R.light[O]},{binding:3,resource:R.trust[O]},{binding:4,resource:z}]});return(H={lit:L,of:R,groups:[O(0),O(1)]}).groups})(R,N)[D];for(let M of pM(O().slowdown)){let R=pO(L,{colorAttachments:[pB(W[q]),pB(B[q])],...void 0===T?{}:{timestampWrites:T}},M,{width:C,height:G});R.setPipeline(I),R.setBindGroup(0,j),R.draw(3),R.end()}return U=Float32Array.from(A),D=q,W[q]},dispose:()=>{E.dispose(),G(),_.destroy()}}}(eg),eG=(O=ey.board,em=new Map,{groupOf:({id:M,image:L})=>{let R=em.get(M);if(void 0!==R)return R.group;let A=L(),E=eg.createTexture({size:[A.width,A.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});eg.queue.copyExternalImageToTexture({source:A},{texture:E},[A.width,A.height]);let T=eg.createBindGroup({layout:O,entries:[{binding:0,resource:E.createView()},{binding:1,resource:eA}]});return em.set(M,{texture:E,group:T}),T},keepOnly:M=>{for(let[L,{texture:R}]of em)M.has(L)||(R.destroy(),em.delete(L))},dispose:()=>{for(let{texture:M}of em.values())M.destroy();em.clear()}}),eF=(M,{buffer:L,runs:R})=>{for(let{pipeline:O,firstVertex:A,count:E}of(M.setVertexBuffer(0,L),R))M.setPipeline(O),M.draw(E,1,A)},eW=(M,L)=>{for(let R of(M.setBindGroup(0,L),null!==eT&&eF(M,eT),null!==eI&&eF(M,eI),ez))M.setBindGroup(1,R.group),eF(M,R)};return{adapter:`${ep.info.vendor} ${ep.info.architecture}`.trim(),prepare:ek,upload:M=>{let L=eE(M,"faces");eT?.buffer.destroy(),eT=L},uploadMoving:M=>{let L=eE(M,"faces");eI?.buffer.destroy(),eI=L},uploadBoards:M=>{let L=M.flatMap(M=>{let L=eE(M.scenery,"boards");return null===L?[]:[{...L,group:eG.groupOf(M)}]});for(let{buffer:M}of ez)M.destroy();ez=L,eG.keepOnly(new Set(M.map(({id:M})=>M)))},prepareOutside:eL.prepare,draw:({viewProjection:L,eye:R,clear:O,lens:A,outdoors:E,detail:T,waking:I,seconds:z,hour:_})=>{let N=(0,aZ.O)(M,"width","height"),D=null===E?null:I?"all":"outside",U=eH.lowPass(N,D),C=U??N,P=M=>U?.shift(M)??M,H="number"==typeof A,G={seconds:z,hour:_,outside:H?null:A};eg.queue.writeBuffer(eR.buffer,0,px({...G,...N,viewProjection:L,eye:R,vignette:eH.vignette()}));let F={viewProjection:P(L),eye:R};null!==U&&eg.queue.writeBuffer(eO.buffer,0,px({...G,...U,...F,vignette:0}));let W=(null===U?eR:eO).group,B=eH.repeats(),$=eb?.stamping()===!0?eb:null,q=eg.createCommandEncoder(),j=null===E?null:eL.made().layers;if(null!==E){let M=P(E.viewProjection);j?.prepare(q,{...E,viewProjection:M,inverse:iQ(M),sun:t2,seconds:z,hour:_,...C},null===U?T:T/U.share)}let K=U?.drowsing==="outside",Y={reflection:eN,depth:eU,clear:O,size:C};pR(B,M=>{let L=$?.scene,R=pJ(q,{...Y,stamp:L},M);j?.behind(R),K||eW(R,W),j?.over(R),R.end()});let V=pR(B,M=>eN.run(q,F,$?.mirrors,M)),X={viewProjection:L,eye:R},Z=null===U?V:eH.resolve(q,V,X,$?.resolve),Q={reflection:eD,depth:eC,size:N},J=K?pR(B,M=>{let L=pJ(q,{...Q,clear:O},M);return eP.draw(L,Z,X,N),eW(L,eR.group),L.end(),eD.run(q,X,void 0,M)}):Z,ee=pR(B,M=>e_.run(q,J,N.width,N.height,M)),et=eg.createBindGroup({layout:ey.lens,entries:[{binding:2,resource:J},{binding:3,resource:ee},{binding:4,resource:eA}]});pR(B,M=>{let L=pO(q,{colorAttachments:[{view:ew.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store"}],...null===$?{}:{timestampWrites:$.lens}},M,N);L.setPipeline(H?eM(A).lens:eL.made().lens),L.setBindGroup(0,eR.group),L.setBindGroup(1,et),L.draw(3),L.end()}),$?.copy(q,null!==U),eg.queue.submit([q.finish()]),$?.read()},drawn:async()=>eg.queue.onSubmittedWorkDone(),...{passTimes:()=>eb?.take()??null,timing:M=>{eb?.timing(M)}},dispose:()=>{for(let{buffer:M}of(eb?.dispose(),eL.dispose(),eT?.buffer.destroy(),eI?.buffer.destroy(),eU.dispose(),eC.dispose(),eN.dispose(),eD.dispose(),eP.dispose(),eH.dispose(),e_.dispose(),eR.buffer.destroy(),eO.buffer.destroy(),ez))M.destroy();eG.dispose(),eg.destroy()}}}let p3={n:1,x:0n,y:0n,u:.5,v:.5,yaw:0,elevation:0,scale:1,eyeAbove:0},p5=()=>null,p4=M=>M.eyeAbove<0?e1(M):M;function p6(M){let L=M>>>0;return L^=L>>>16,L=Math.imul(L,0x7feb352d)>>>0,L^=L>>>15,L=Math.imul(L,0x846ca68b)>>>0,(L^=L>>>16)>>>0}let p8=2*Math.PI;function p7(M){let L=0;return()=>2*((p6((M^p6((L+=1)+0x9e3779b9))>>>0)>>>8)/0x1000000)-1}let p9=M=>(M()+1)/2;function ve(M,L){let R=0,O=0,A=-1,E=0;return(T,I,z)=>{I!==A&&(A=I,E=Math.tan(Math.PI*Math.min(I,.45*L)/L));let _=1/z,N=1/(1+E*(E+_)),D=E*N,U=T-O,C=N*R+D*U,P=O+D*R+E*D*U;return(R=2*C-R,O=2*P-O,"low"===M)?P:"band"===M?_*C:T-_*C-P}}let vt=(M,L)=>M<0?0:Math.exp(-6.9*M/L),va=M=>M<=0||M>=1?0:Math.sin(Math.PI*M)**2,vr=(M,L)=>Math.max(1,Math.round(M*L));function vs(M,L,R){let O=vr(M,L),A=Math.max(1,Math.min(O,Math.round(.004*L))),E=new Float32Array(O);for(let M=0;M<O;M+=1)E[M]=Math.tanh(R(M/L,M))*Math.min(1,(O-1-M)/A);return E}let vl=({hz:M,dies:L,force:R},O,A=1)=>O<0?0:R*Math.sin(p8*M*A*O)*vt(O,L),vo={carpet:{seconds:.16,thump:{hz:70,dies:.05,force:.5},scuff:{hz:900,dies:.07,force:.4,resonance:.7,sweep:0},click:0,modes:[]},tile:{seconds:.14,thump:{hz:110,dies:.03,force:.35},scuff:{hz:3200,dies:.03,force:.5,resonance:1.2,sweep:0},click:.5,modes:[{hz:1900,dies:.03,force:.15}]},concrete:{seconds:.16,thump:{hz:90,dies:.04,force:.55},scuff:{hz:1800,dies:.05,force:.5,resonance:.8,sweep:0},click:.25,modes:[]},wood:{seconds:.24,thump:{hz:140,dies:.06,force:.55},scuff:{hz:1200,dies:.04,force:.3,resonance:1,sweep:0},click:.2,modes:[{hz:310,dies:.09,force:.35},{hz:540,dies:.06,force:.2}]},metal:{seconds:.7,thump:{hz:120,dies:.04,force:.3},scuff:{hz:2500,dies:.03,force:.25,resonance:1,sweep:0},click:.4,modes:[{hz:523,dies:.5,force:.3},{hz:1187,dies:.35,force:.22},{hz:1931,dies:.25,force:.15},{hz:2764,dies:.18,force:.1}]},wet:{seconds:.26,thump:{hz:80,dies:.04,force:.35},scuff:{hz:1100,dies:.14,force:.7,resonance:2.5,sweep:1.4},click:0,modes:[]},soft:{seconds:.22,thump:{hz:55,dies:.09,force:.6},scuff:{hz:400,dies:.1,force:.25,resonance:.7,sweep:0},click:0,modes:[]},hollow:{seconds:.5,thump:{hz:75,dies:.16,force:.7},scuff:{hz:1e3,dies:.04,force:.25,resonance:.8,sweep:0},click:.1,modes:[{hz:150,dies:.22,force:.4},{hz:226,dies:.16,force:.2}]},sand:{seconds:.3,thump:{hz:46,dies:.07,force:.4},scuff:{hz:2600,dies:.16,force:.55,resonance:.5,sweep:-.9},click:0,modes:[]},"wet-sand":{seconds:.28,thump:{hz:62,dies:.06,force:.55},scuff:{hz:1500,dies:.12,force:.5,resonance:1.4,sweep:.8},click:0,modes:[]},shallows:{seconds:.45,thump:{hz:70,dies:.05,force:.3},scuff:{hz:1900,dies:.3,force:.8,resonance:.6,sweep:-.7},click:0,modes:[]}},vn=M=>vo[M].seconds;function vi(M,L,R,O){let{seconds:A,thump:E,scuff:T,click:I,modes:z}=vo[M],_=p7(R),N=1+.08*_(),D=z.map(()=>N*(1+.02*_())),U=.3+.7*e5(L),C=ve("band",O);return vs(A,O,M=>{let L=C(_(),T.hz*N*2**(T.sweep*M/T.dies),T.resonance)*Math.min(1,M/5e-4)*vt(M,T.dies)*T.force,R=z.reduce((L,R,O)=>L+vl(R,M,D[O]),0),O=_()*Math.min(1,M/5e-4)*vt(M,.004)*I*U;return U*(vl(E,M,N)+2*L+R+O)})}let vf=[620,1080],vc={hz:48,dies:.18,force:.9},vu=[{hz:2350,dies:.03,force:.5},{hz:3900,dies:.022,force:.35},{hz:6100,dies:.015,force:.2}],vh=[{hz:190,dies:.06,force:.7},{hz:420,dies:.035,force:.35}],vd={aluminium:{seconds:.55,modes:[{hz:286,dies:.16,force:.3},{hz:742,dies:.4,force:.34},{hz:1388,dies:.34,force:.26},{hz:2217,dies:.26,force:.18},{hz:3470,dies:.16,force:.1}],rattle:{hz:3100,dies:.09,force:.5,resonance:1.2}},wood:{seconds:.32,modes:[{hz:212,dies:.07,force:.5},{hz:498,dies:.05,force:.34},{hz:1130,dies:.03,force:.16}],rattle:{hz:1300,dies:.07,force:.35,resonance:2.5}}},vm={hand:{push:.55,weight:{hz:150,dies:.03,force:.15},pitch:1.12},foot:{push:1,weight:{hz:78,dies:.07,force:.6},pitch:1}};function vp(M,L,R){let O=R.u-M.u,A=R.v-M.v,E=Math.hypot(O,A);return 0===E?{rightward:0,roomsAway:E}:{rightward:(A*Math.cos(L)-O*Math.sin(L))/E,roomsAway:E}}let vv=new Set(["step","jump","landing","breath","grunt","swallow"]),vg={step:.55,jump:.4,landing:.8,pill:.45,swallow:.5,rung:.6,splash:.7,breath:.35,grunt:.5,shrink:.6};function vb(M,L,R){let O=vr(M,L),A=new Float32Array(O),E=0;return{rate:L,seconds:M,samples:A,render:M=>{let L=Math.min(O,E+M);for(;E<L;E+=1)A[E]=R(E,O);return E===O}}}function vw(M,L,R,O){let A=vr(M,R),E=vr(L,R),T=new Float32Array(A+E),I=new Float32Array(A),z=0;return{rate:R,seconds:M,samples:I,render:M=>{if(z===T.length)return!0;let L=Math.min(T.length,z+M);for(;z<L;z+=1)T[z]=O(z,A);return!(z<T.length)&&((()=>{let M=0;for(let L=0;L<A;L+=1){let R=T[L]??0,O=L/E,z=O<1?Math.sqrt(O)*R+Math.sqrt(1-O)*(T[A+L]??0):R;I[L]=z,M+=z*z}let L=.2/Math.sqrt(M/A||1);for(let M=0;M<A;M+=1)I[M]=Math.tanh((I[M]??0)*L)})(),!0)}}}let vx=Array.from({length:6},(M,L)=>Math.sin(Math.PI*L/6)),vy=Array.from({length:6},(M,L)=>Math.cos(Math.PI*L/6)),vk=Array.from({length:6},(M,L)=>2**(-.4*L));function vS({tuned:M,throb:L,weight:R},O,A,E){let T=E?O:1-O,I=(E?1:-1)*p8*A*22*M*2**T/Math.LN2,z=Math.PI*L*O*A,_=2*Math.cos(z)*2**(-.4*T),N=Math.sin(Math.PI*T/6),D=Math.cos(Math.PI*T/6),U=0;for(let M=0;M<6;M+=1){let L=(vx[M]??0)*D+(vy[M]??0)*N;U+=L*L*(vk[M]??0)*Math.sin(I*2**M+z)}return R*_*U}let vM=[36,36.5],vL=([M,L],R,O)=>[M+O*Math.cos(R),L+O*Math.sin(R)],vR=(M,L)=>(M(L+.1)-M(L-.1))/.2;function vO(M,L){let R=Array.from({length:12},(R,O)=>M(L+.1-.2*O));return Array.from({length:11},(M,L)=>((R[L]??0)-(R[L+1]??0))/.2)}let vA={breaking:1.6,running:.5,draining:1.8};function vE({swing:M},L,R){let O=L/M.atShore;return{breaking:e5(R/M.overBar)**2,running:e5(O),draining:e5(-O)}}let vT=ew(0,1),vI=eb({gusts:eb({a:vT,b:vT,c:vT,d:vT,e:vT}),wash:eb({left:vT,right:vT})}),vz=el("0"),v_=eR(vI,M=>vz(`cube/sound/weather/${M}`)),vN=v_.wash,vD=[{turns:23,starts:v_.gusts.a,weight:1},{turns:41,starts:v_.gusts.b,weight:.9},{turns:73,starts:v_.gusts.c,weight:.7},{turns:127,starts:v_.gusts.d,weight:.5},{turns:211,starts:v_.gusts.e,weight:.3}],vU=vD.reduce((M,{weight:L})=>M+L,0),vC=["roar","hiss","fizz","wash","wind","buffet","hum","under"],vP={breaking:11,running:7,draining:4};function vH(M,L,R){M.leftEar+=L*(1-R)/2,M.rightEar+=L*(1+R)/2}let vG=({leftEar:M,rightEar:L},R)=>({leftEar:Math.min(1,R*Math.sqrt(M)),rightEar:Math.min(1,R*Math.sqrt(L))}),vF=M=>({leftEar:M,rightEar:M});function vW(M,L,R){let{at:O,gaze:A}=L,E=function({coast:M},{at:L,gaze:R},O){let A={breaking:{leftEar:0,rightEar:0},running:{leftEar:.02,rightEar:.02},draining:{leftEar:0,rightEar:0}},E={u:L[0],v:L[1]};for(let L of M.shore){let T=function(M,L,R){let O=vO(L.water.shore,R),A=vO(L.water.breaks,R),E=vE(M,O[0]??0,A[0]??0);for(let L=1;L<=10;L+=1){let R=.2*L,T=vE(M,O[L]??0,A[L]??0);for(let M of["breaking","running","draining"])E[M]=Math.max(E[M],T[M]*Math.exp(-3*R/vA[M]))}return E}(M,L,O);for(let M of["breaking","running","draining"]){let[O,I]="breaking"===M?L.breaks:L.shore,{rightward:z,roomsAway:_}=vp(E,R,{u:O,v:I});vH(A[M],T[M]/(1+(_/vP[M])**2),z*e5(_/3))}}return A}(M,L,R),T={u:O[0],v:O[1]},I=Math.abs(O[0]-M.cube[0]),z=Math.abs(O[1]-M.cube[1]),_=Math.hypot(Math.max(0,I-2.5),Math.max(0,z-2.5)),N=e5((2.5-Math.max(I,z))/1.2),D=vp(T,A,{u:M.cube[0],v:M.cube[1]}),U={leftEar:0,rightEar:0};vH(U,1/(1+(_/3.5)**2),.85*D.rightward*e5(D.roomsAway/5));let C=function(M){let L=M/3600,R=0;for(let{turns:M,starts:O,weight:A}of vD)R+=A*Math.sin(p8*(M*L+O));return e5((R/vU+.12)/.62)**2}(R),P=vp(T,A,{u:O[0]+-.8,v:O[1]+.6}).rightward,H=(.5+.5*C)**1.5*(1-.5*N),G=(.2+.8*C)*(1-.7*N),F=M=>1+.15*Math.sin(p8*(17*R/3600+M));return{layers:{roar:vG(E.breaking,.84),hiss:vG(E.running,.95),fizz:vG(E.draining,.8),wash:{leftEar:.08*F(vN.left),rightEar:.08*F(vN.right)},wind:{leftEar:.16*H*(1-.25*P),rightEar:.16*H*(1+.25*P)},buffet:{leftEar:.3*G*(.3+.7*Math.max(0,-P)),rightEar:.3*G*(.3+.7*Math.max(0,P))},hum:vG(U,.62),under:vF(.35*N)},muffle:2e4,humMuffle:2e4}}let vB={roar:16e3,hiss:32e3,fizz:32e3,wash:24e3,wind:24e3,buffet:8e3,hum:8e3,under:8e3},v$={roar:function(M,L){let R=p7(M),O=p7(M+1),A=ve("low",L),E=ve("band",L),T=ve("band",L),I=ve("low",L);return vw(12,1,L,()=>{let M=R();return(.4+2.4*I(Math.abs(O()),5,.7))*(1.6*A(M,620,.6)+.8*E(M,170,.8))+.9*T(M,58,1.1)})},hiss:function(M,L){let R=p7(M),O=p7(M+1),A=ve("high",L),E=ve("low",L),T=ve("low",L);return vw(10,1,L,()=>(.5+1.6*T(Math.abs(O()),45,.7))*E(A(R(),1700,.7),8500,.7))},fizz:function(M,L){let R=p7(M),O=p7(M+1),A=ve("band",L),E=ve("high",L),T=Math.exp(-6.9/(.004*L)),I=new Float64Array(12),z=new Float64Array(12),_=new Float64Array(12),N=0;return vw(9,1,L,()=>{let M=R();p9(O)<900/L&&(z[N]=2400*4**p9(O)/L,_[N]=.3+.7*p9(O),I[N]=0,N=(N+1)%12);let D=0;for(let M=0;M<12;M+=1){let L=_[M]??0;I[M]=(I[M]??0)+(z[M]??0),D+=L*Math.sin(p8*(I[M]??0)),_[M]=L*T}return D+.1*E(M,5200,.7)+.35*A(M,430,.9)})},wash:function(M,L){let R=p7(M),O=p8*p9(R),A=ve("low",L),E=ve("low",L),T=ve("low",L);return vw(20,2,L,(M,L)=>{let I=R();return(1+.22*Math.sin(2*p8*M/L+O))*(A(I,240,.5)+.6*E(I,1100,.5)+.2*T(I,3600,.5))})},wind:function(M,L){let R=p7(M),O=[p8*p9(R),p8*p9(R)],A=ve("band",L),E=ve("low",L),T=ve("high",L);return vw(15,1.5,L,(M,L)=>{let I=R(),z=p8*M/L,_=.45*Math.sin(z+O[0])+.25*Math.sin(3*z+O[1]);return 1.2*A(I,480*2**_,1.3)+.35*E(I,170,.6)+.05*T(I,3200,.7)})},buffet:function(M,L){let R=p7(M),O=p7(M+1),A=ve("low",L),E=ve("low",L);return vw(8,1,L,()=>Math.max(0,5*E(Math.abs(O()),7,.9)-1.4)*A(R(),110,.9))}},vq=M=>[M,M],vj=new Set(["roar","hiss","fizz","wash","wind","buffet"]),vK=Math.SQRT1_2,vY=[(rL.min[0]+rL.max[0])/2,(rL.min[2]+rL.max[2])/2],vV={coast:(W=function({islandHeight:M,waterAt:L},R,O=16){let A=[];for(let E=0;E<O;E+=1){let T,I,z=2*Math.PI*E/O;for(let L=0;L<=200;L+=.5){let O=M(vL(R,z,L));if(void 0===T){O<=0&&L>0&&(T=L);continue}if(O<=-.6||L-T>=25){I=L;break}}if(void 0!==T){let M={shore:vL(R,z,T),breaks:vL(R,z,I??T)};A.push({...M,water:{shore:L(M.shore),breaks:L(M.breaks)}})}}return A}($={islandHeight:rw,waterAt:sf},vY,32),{sea:$,shore:W,swing:function(M){let L={atShore:1e-6,overBar:1e-6};for(let{water:R}of M)for(let M=0;M<240;M+=.5)L.atShore=Math.max(L.atShore,Math.abs(vR(R.shore,M))),L.overBar=Math.max(L.overBar,vR(R.breaks,M));return L}(W)}),cube:vY},vX={footing:"sand",hum:0,air:0,echo:.12},vZ=[rL.max[0],rL.min[2]+(tG.from+tG.to)/2];var vQ=M.i(377160);let vJ=el("0");function v0(M,L,R){let O=M.createBuffer(L.length,L[0]?.length??1,R);for(let[M,R]of L.entries())O.getChannelData(M).set(R);return O}let v2=new WeakMap;function v1(M,L,R,O){let A=new AudioBufferSourceNode(M,{buffer:L,loop:!0}),E=new GainNode(M,{gain:R});for(let M of(A.connect(E),O))E.connect(M);return A.start(),A}function v3({context:M},L,R){let O=M.currentTime;L.level.gain.setValueAtTime(L.level.gain.value,O),L.level.gain.linearRampToValueAtTime(R,O+1)}let v5=ew(0,1);function v4(M){let L=el(String(Math.abs(Math.trunc(M))));return M=>v5.decode(L(`voice/${M}`))}let v6=(M,L)=>R=>M(`${L}/${R}`),v8=(M,L)=>M[Math.floor(L*M.length)]??M[0],v7=(M,L,R)=>M+Math.floor(R*(L-M+1)),v9=["iy","ih","eh","ae","aa","ao","uh","uw","ah","ax","er","ey","ay","ow","aw","oy","w","y","r","l","m","n","ng","f","v","th","dh","s","z","sh","zh","hh","p","b","t","d","k","g","ch","jh","pau"],ge=(M,L,R,O,A)=>({manner:"vowel",voiced:!0,formants:[M,L,R],millis:O,...A&&{glide:A}}),gt=[240,900,2200],ga=[240,1700,2700],gr=[240,2e3,2600],gs=[240,2200,2450],gl=(M,L)=>({manner:M,voiced:L}),go={core:4e3,width:5e3},gn={core:4500,width:4500},gi={core:6e3,width:2600},gf={core:2700,width:1300},gc={core:1100,width:2200},gu={core:4300,width:2600},gh={core:2100,width:1e3},gd={iy:ge(270,2290,3010,120),ih:ge(390,1990,2550,90),eh:ge(530,1840,2480,100),ae:ge(660,1720,2410,130),aa:ge(730,1090,2440,130),ao:ge(570,840,2410,130),uh:ge(440,1020,2240,90),uw:ge(300,870,2240,120),ah:ge(640,1190,2390,100),ax:ge(500,1500,2500,60),er:ge(490,1350,1690,120),ey:ge(480,1900,2500,170,[330,2200,2700]),ay:ge(730,1200,2500,180,[400,2e3,2600]),ow:ge(540,1e3,2400,170,[380,800,2300]),aw:ge(730,1250,2500,180,[430,900,2300]),oy:ge(550,850,2400,180,[380,2e3,2600]),w:{...gl("approximant",!0),formants:[290,610,2150],millis:65},y:{...gl("approximant",!0),formants:[260,2070,3020],millis:60},r:{...gl("approximant",!0),formants:[310,1060,1380],millis:70},l:{...gl("approximant",!0),formants:[310,1050,2880],millis:65},m:{...gl("nasal",!0),formants:[250,900,2200],millis:75},n:{...gl("nasal",!0),formants:[250,1700,2700],millis:70},ng:{...gl("nasal",!0),formants:[250,2200,2450],millis:80},f:{...gl("fricative",!1),formants:gt,millis:95,hissing:{...go,loudness:.22}},v:{...gl("fricative",!0),formants:gt,millis:65,hissing:{...go,loudness:.12}},th:{...gl("fricative",!1),formants:ga,millis:90,hissing:{...gn,loudness:.18}},dh:{...gl("fricative",!0),formants:ga,millis:50,hissing:{...gn,loudness:.08}},s:{...gl("fricative",!1),formants:ga,millis:110,hissing:{...gi,loudness:1}},z:{...gl("fricative",!0),formants:ga,millis:80,hissing:{...gi,loudness:.6}},sh:{...gl("fricative",!1),formants:gr,millis:115,hissing:{...gf,loudness:.9}},zh:{...gl("fricative",!0),formants:gr,millis:80,hissing:{...gf,loudness:.5}},hh:{...gl("breath",!1),formants:[500,1500,2500],millis:70},p:{...gl("stop",!1),formants:gt,millis:60,hissing:{...gc,loudness:.5}},b:{...gl("stop",!0),formants:gt,millis:55,hissing:{...gc,loudness:.35}},t:{...gl("stop",!1),formants:ga,millis:50,hissing:{...gu,loudness:.9}},d:{...gl("stop",!0),formants:ga,millis:45,hissing:{...gu,loudness:.6}},k:{...gl("stop",!1),formants:gs,millis:55,hissing:{...gh,loudness:.9}},g:{...gl("stop",!0),formants:gs,millis:50,hissing:{...gh,loudness:.6}},ch:{...gl("affricate",!1),formants:gr,millis:40,hissing:{...gf,loudness:.9}},jh:{...gl("affricate",!0),formants:gr,millis:35,hissing:{...gf,loudness:.55}},pau:{...gl("pause",!1),formants:[500,1500,2500],millis:180}},gm=M=>"vowel"===gd[M].manner,gp=v9.filter(M=>gm(M)),gv=v9.filter(M=>!gm(M)&&"pau"!==M),gg=[["tion",["sh","ax","n"]],["ough",["ow"]],["igh",["ay"]],["tch",["ch"]],["th",["th"]],["sh",["sh"]],["ch",["ch"]],["ph",["f"]],["wh",["w"]],["ck",["k"]],["ng",["ng"]],["qu",["k","w"]],["ee",["iy"]],["ea",["iy"]],["oo",["uw"]],["ou",["aw"]],["ow",["ow"]],["oi",["oy"]],["oy",["oy"]],["ai",["ey"]],["ay",["ey"]],["au",["ao"]],["aw",["ao"]],["ar",["aa","r"]],["or",["ao","r"]],["er",["er"]],["ir",["er"]],["ur",["er"]],["ce",["s","eh"]],["ci",["s","ih"]],["a",["ae"]],["b",["b"]],["c",["k"]],["d",["d"]],["e",["eh"]],["f",["f"]],["g",["g"]],["h",["hh"]],["i",["ih"]],["j",["jh"]],["k",["k"]],["l",["l"]],["m",["m"]],["n",["n"]],["o",["aa"]],["p",["p"]],["q",["k"]],["r",["r"]],["s",["s"]],["t",["t"]],["u",["ah"]],["v",["v"]],["w",["w"]],["x",["k","s"]],["y",["iy"]],["z",["z"]]],gb={a:"ey",e:"iy",i:"ay",o:"ow",u:"uw"},gw=/^(?<head>[a-z]*)(?<vowel>[aeiou])(?<last>[^aeiouwy])e$/,gx=(M,L)=>gg.find(([R])=>M.startsWith(R,L));function gy(M){let L=[],R=+!!M.startsWith("y");for(1===R&&L.push("y");R<M.length;){let O=gx(M,R);O&&L.push(...O[1]),R+=O?O[0].length:1}return L.filter((M,R)=>gm(M)||M!==L[R-1])}let gk={iy:"ee",ih:"i",eh:"e",ae:"a",aa:"ah",ao:"aw",uh:"u",uw:"oo",ah:"u",ax:"a",er:"ur",ey:"ay",ay:"ai",ow:"o",aw:"ow",oy:"oi",w:"w",y:"y",r:"r",l:"l",m:"m",n:"n",ng:"ng",f:"f",v:"v",th:"th",dh:"dh",s:"s",z:"z",sh:"sh",zh:"zh",hh:"h",p:"p",b:"b",t:"t",d:"d",k:"k",g:"g",ch:"ch",jh:"j",pau:""},gS=M=>M.map(({phone:M})=>gk[M]).join(""),gM={a:"ax",again:"ax g eh1 n",ah:"aa1",all:"ao1 l",am:"ae m",and:"ae n d",anyone:"eh1 n iy w ah n",are:"aa r",attention:"ax t eh1 n sh ax n",back:"b ae1 k",before:"b ih f ao1 r",below:"b ih l ow1",body:"b aa1 d iy",building:"b ih1 l d ih ng",built:"b ih1 l t",carpet:"k aa1 r p ax t",chairs:"ch eh1 r z",cleaning:"k l iy1 n ih ng",closed:"k l ow1 z d",closing:"k l ow1 z ih ng",come:"k ah1 m",course:"k ao1 r s",deep:"d iy1 p",desk:"d eh1 s k",do:"d uw1",does:"d ah z",door:"d ao1 r",doors:"d ao1 r z",down:"d aw1 n",eight:"ey1 t",everyone:"eh1 v r iy w ah n",feed:"f iy1 d",fine:"f ay1 n",five:"f ay1 v",floor:"f l ao1 r",for:"f ao r",four:"f ao1 r",front:"f r ah1 n t",go:"g ow1",goes:"g ow1 z",going:"g ow1 ih ng",ha:"hh aa1",hatch:"hh ae1 ch",have:"hh ae1 v",hello:"hh ax l ow1",here:"hh iy1 r",how:"hh aw1",huh:"hh ah1",hup:"hh ah1 p",i:"ay1",in:"ih n",is:"ih z",it:"ih t",kept:"k eh1 p t",la:"l aa1",left:"l eh1 f t",lift:"l ih1 f t",light:"l ay1 t",loo:"l uw1",lost:"l ao1 s t",me:"m iy1",mind:"m ay1 n d",mm:"m m m",more:"m ao1 r",must:"m ah1 s t",next:"n eh1 k s t",nice:"n ay1 s",nine:"n ay1 n",no:"n ow1",not:"n aa1 t",now:"n aw1",of:"ax v",oh:"ow1",okay:"ow k ey1",on:"aa1 n",one:"w ah1 n",oof:"uw1 f",or:"ao r",order:"ao1 r d er",out:"aw1 t",ow:"aw1",owner:"ow1 n er",please:"p l iy1 z",progress:"p r aa1 g r eh s",quiet:"k w ay1 ax t",right:"r ay1 t",room:"r uw1 m",same:"s ey1 m",seriously:"s iy1 r iy ax s l iy",seven:"s eh1 v ax n",six:"s ih1 k s",size:"s ay1 z",small:"s m ao1 l",smaller:"s m ao1 l er",so:"s ow1",someone:"s ah1 m w ah n",staff:"s t ae1 f",stay:"s t ey1",still:"s t ih1 l",sure:"sh uh1 r",thank:"th ae1 ng k",thanks:"th ae1 ng k s",that:"dh ae1 t",the:"dh ax",there:"dh eh1 r",things:"th ih1 ng z",this:"dh ih1 s",three:"th r iy1",to:"t uw",two:"t uw1",visitors:"v ih1 z ih t er z",waiting:"w ey1 t ih ng",was:"w ah z",way:"w ey1",we:"w iy",what:"w ah1 t",where:"w eh1 r",who:"hh uw1",why:"w ay1",will:"w ih l",wtf:"w ah1 t dh ax f ah1 k",yeah:"y ae1",you:"y uw1",zero:"z iy1 r ow"};function gL(M){let L,R,O=gM[M.toLowerCase()];return{spelling:M,sounds:void 0===O?(R=(L=function(M){let L=gw.exec(M)?.groups;if(!L)return gy(M);let{head:R="",vowel:O="",last:A=""}=L;return[...gy(R),gb[O]??"ax",...gy(A)]}(M.toLowerCase().replaceAll(/[^a-z]/g,""))).findIndex(M=>gm(M)),L.map((M,L)=>L===R?{phone:M,stress:!0}:{phone:M})):O.split(" ").map(M=>{let L=M.endsWith("1"),R=L?M.slice(0,-1):M;if(!v9.includes(R))throw Error(`Not a phone: ${M}`);return L?{phone:R,stress:L}:{phone:R}})}}let gR={phone:"pau"},gO={announcement:["attention please","this floor is now closed","please go down to the next floor","you are now smaller","visitors please stay the same size","this lift is out of order","thank you for waiting","will the owner of a small body please come back for it","cleaning in progress","all staff please come to the front desk","there is no floor below this one","the doors are closing","have a nice way down","please do not feed the chairs","the building thanks you"],hello:["hello?","hello? anyone?","is someone there?","hello, hello?","where is everyone?","who left the light on?"]},gA=["zero","one","two","three","four","five","six","seven","eight","nine"],gE={iy:["ih","ey"],ih:["iy","eh"],eh:["ih","ae"],ae:["eh","aa"],aa:["ae","ao"],ao:["aa","ow"],uh:["uw","ah"],uw:["uh","ow"],ah:["aa","ax"],ax:["ah","ih"],er:["ax","ah"],ey:["iy","ay"],ay:["oy","ey"],ow:["uw","aw"],aw:["ow","aa"],oy:["ay","ow"]},gT={p:"b",b:"p",t:"d",d:"t",k:"g",g:"k",s:"sh",sh:"s",z:"zh",zh:"z",f:"th",th:"f",v:"dh",dh:"v",l:"r",r:"l",m:"n",n:"ng",w:"v",ch:"jh",jh:"ch"},gI=(M,L,R)=>M.map(M=>({phone:M,rank:L(`has/${M}`)})).toSorted((M,L)=>M.rank-L.rank).slice(0,R).map(({phone:M})=>M),gz=["first","last","penult"],g_=(M,L)=>M[Math.floor(L*M.length)]??"ax",gN=new Set(["w","y","r","l"]),gD=M=>M,gU=(M,L,R=.08)=>({phone:"hh",beats:M,loud:L,ease:R}),gC=(M,[L,R],O,A={})=>({phone:M,note:L,slide:R,beats:O,...A}),gP=M=>({text:"ugh…",phones:[gC("ah",[2,-2],.5,{ease:.08}),gC("ax",[-2,-7-2*M("depth")],1.1+M("long"),{ease:.25}),gU(1.1,.6,.3)]}),gH=M=>({text:"(sigh)",phones:[gU(.4,.5,.15),gU(1.3+M("long"),.9,.35)]}),gG=()=>({text:"(exhale)",phones:[gU(.7,.5,.2)]}),gF=()=>({text:"hm.",phones:[gU(.12,.5,.03),gC("m",[1,-4],.7,{ease:.1})]}),gW=()=>({text:"hm?",phones:[gC("m",[-1,6],.55,{ease:.06})]}),gB=M=>{let L=v7(2,5,M("count")),R=.3>M("asks"),O=v7(0,3,M("from")),A=Array.from({length:L},(A,E)=>{let T=E===L-1,I=T?R?6:-5:v7(-2,2,M(`turn/${E}`)),z=O;return O+=T?I:Math.round(I/2),[gC("m",[z,z],.14,{loud:.7}),gC("ax",[z,z+I],T?.5:.28,{loud:.6,ease:.04})]}).flat();return{text:`${Array.from({length:L},()=>"hm").join("-")}${R?"?":"…"}`,phones:A}},g$=[gW,M=>{let L=v7(1,2,M("count"));return{text:Array.from({length:L},()=>"heh").join(" "),phones:Array.from({length:L},(M,L)=>[gU(.2,.9,.02),gC("eh",[3-3*L,1-3*L],.22,{loud:.8})]).flat()}},gP,()=>({text:"pff",phones:[{phone:"p"},{phone:"f",beats:1,loud:1.6,ease:.15}]}),M=>({text:"tsk",phones:[{phone:"t"},{phone:"s",beats:.1},{phone:"pau",beats:.4},...gH(M).phones]}),gF,gH,M=>({text:"mm",phones:[gC("m",[-2,-6],.9+M("long"),{loud:.8,ease:.2})]}),gG],gq=[()=>({text:"oof",phones:[gC("uh",[4,-3],.3),{phone:"f",beats:.6,loud:1.4,ease:.1}]}),()=>({text:"hup",phones:[gU(.12,.8,.02),gC("ah",[5,2],.2),{phone:"p"}]}),()=>({text:"mf",phones:[gC("m",[2,-2],.3),{phone:"f",beats:.35,loud:1.3,ease:.06}]}),()=>({text:"ah",phones:[gC("aa",[3,-4],.35,{ease:.05}),gU(.4,.4,.12)]}),gG],gj=[gB,gB,gB,gF,gW,gH],gK=({text:M,phones:L})=>({text:M,phones:L,tune:"flat"}),gY=/^(?<letters>[^!,.?]*)(?<mark>[!,.?]*)$/;function gV(M,L){let R=M.map(({word:M,mark:L})=>M.spelling+L).join(" ");return{text:R,phones:M.flatMap(({word:L,rest:R},O)=>R&&O<M.length-1?[...L.sounds,gR]:L.sounds),tune:L??(R.endsWith("?")?"rise":"fall")}}let gX=(M,L)=>{let R=function(M){let L,R,O,A,E,T,I,z,_;if(M<=8)return gD;let N=v4(M),D=Math.min(1,(M-8)/12),U=(L=new Map([...gp,...gv].map(M=>{let L;return[M,(L=gE[M])?N(`drift/${M}`)<D?v8(L,N(`drift/${M}/to`)):M:N(`bend/${M}`)<.45*D?gT[M]??M:M]})),R=M=>L.get(M)??M,M=>{let L=M.sounds.map(M=>({...M,phone:R(M.phone)}));return L.every(({phone:L},R)=>L===M.sounds[R]?.phone)?M:{spelling:gS(L),sounds:L}});if(M<20)return U;let C=(O=gI(gv,N,v7(6,11,N("consonants"))),A=gI(gp,N,v7(3,6,N("vowels"))),E=.55+.4*N("onset"),T=.1+.5*N("coda"),I=.4*N("cluster"),z=v8(gz,N("lean")),_=O.filter(M=>gN.has(M)),M=>{let L=M.sounds.filter(({phone:M})=>gm(M)),R=Math.max(1,L.length),D={first:0,last:R-1,penult:Math.max(0,R-2)},U=v6(N,`coin/${M.spelling.toLowerCase()}`),C=Array.from({length:R},(M,R)=>{var N,C;let P,H,{note:G,beats:F}=L[R]??{};return N=v6(U,String(R)),C={phone:g_(A,U(`${R}/v`)),...R===D[z]&&{stress:!0},...void 0!==G&&{note:G},...void 0!==F&&{beats:F}},H=(P=N("onset")<E?g_(O,N("c")):void 0)&&!gN.has(P)&&_.length>0&&N("cluster")<I?g_(_,N("cc")):void 0,[...P?[{phone:P}]:[],...H?[{phone:H}]:[],C,...N("coda")<T?[{phone:g_(O,N("k"))}]:[]]}).flat();return{spelling:gS(C),sounds:C}}),P=.5+.5*(M-20)/5;return M=>N(`coins/${M.spelling.toLowerCase()}`)<P?C(M):U(M)}(L);return M.map(M=>({...M,word:R(M.word)}))},gZ=M=>(L,R)=>((M,L=1)=>gV(gX(M.split(/\s+/).filter(Boolean).map(M=>{let{letters:L=M,mark:R=""}=gY.exec(M)?.groups??{};return{word:gL(L),mark:R,rest:""!==R}}),L),void 0))(v8(gO[M],R("line")),L),gQ=(M,L,R)=>({...M,sounds:M.sounds.map(M=>gm(M.phone)?{...M,note:L,beats:R}:M)}),gJ=[0,2,4,7,9,12,14],g0=[[2,1],[1,1,1],[1,2],[3]],g2=[-2,-1,-1,0,1,1,2],g1={waking:(M,L)=>gK({text:"mmh… ugh…",phones:[gU(.5,.35,.2),gC("m",[-3,-1],.6+.4*L("hum"),{loud:.6,ease:.2}),gC("ax",[-1,-5],.7,{loud:.8,ease:.15}),gC("ah",[-4,-9-2*L("depth")],1.2+L("long"),{ease:.3}),gU(1.3,.5,.35)]}),wonder:(M,L)=>gK(gW()),"first-shrink":(M,L)=>gK({text:"huh? huh?!",phones:[gU(.2,.7,.03),gC("ah",[-1,8],.55),gU(.5,.35,.12),{phone:"pau",beats:.5},gU(.15,.8,.03),gC("ah",[3,13],.65),gU(.6,.4,.15)]}),"second-shrink":(M,L)=>gK(gP(L)),shrink:(M,L)=>{var R;let O,A;return R=L("which"),O=Math.min(4,g$.length),A=Math.round(Math.min(1,Math.max(0,(M-3)/30))*(g$.length-O)),gK((g$[A+Math.floor(R*O)]??g$[0])(L))},landing:(M,L)=>gK(v8(gq,L("which"))(L)),mutter:(M,L)=>gK(v8(gj,L("which"))(L)),announcement:(M,L)=>({...gZ("announcement")(M,L),chime:!0}),numbers:function(M,L){return gV(gX(Array.from({length:5},(M,R)=>({word:gL(v8(gA,L(`digit/${R}`))),mark:"",rest:!0})),M),"flat")},hello:gZ("hello"),laugh:function(M,L){return gV(Array.from({length:v7(3,6,L("count"))},(M,R)=>({word:gQ(gL("ha"),8-2*R+v7(-1,1,L(`step/${R}`)),.35),mark:"",rest:!1})),"flat")},lullaby:function(M,L){let R=[0,1].flatMap(M=>v8(g0,L(`bar/${M}`))),O=v7(2,4,L("from"));return gV(gX(R.map((M,R)=>{let A=v8(g2,L(`step/${R}`));return O=Math.min(gJ.length-1,Math.max(0,O+A)),{word:gQ(gL(.6>L(`syllable/${R}`)?"la":"loo"),gJ[O]??0,M),mark:"",rest:!1}}),M),"flat")}};function g3(M){let L=1,R=0,O=0,A=0,E=0;return{tune:(A,E)=>{let T=A<.47*M;O=T?-Math.exp(-2*Math.PI*E/M):0,L=1-(R=T?2*Math.exp(-Math.PI*E/M)*Math.cos(2*Math.PI*A/M):0)-O},run:M=>{let T=L*M+R*A+O*E;return E=A,A=T,T}}}function g5(M,L){let R=0,O=1;return A=>((R+=A*O/M)>=1&&(R-=Math.floor(R),O=L()),R)}let g4={throat:function({voice:M,sampling:L,random:R,hush:O}){let A=1,E=0,T=g5(L,()=>(A=1+.06*M.unsteady*R(),1+.012*M.unsteady*R())),I=1-Math.exp(-2*Math.PI*5e3*(1-.7*M.airy)/L);return(L,z,_)=>{let N=T(L);E+=I*((N<.4?.16/.4*Math.sin(Math.PI*N/.4):N<.56?-Math.sin(Math.PI/2*((N-.4)/.16)):0)*A-E);let D=N<.56?M.airy:.3*M.airy;return E*z+R()*O*.18*(_+D*z)}},whisper:({random:M,hush:L})=>(R,O,A)=>M()*L*.288*(O+A),buzz:function({sampling:M,random:L,hush:R}){let O=g5(M,()=>1);return(M,A,E)=>(.1>O(M)?1:-.1/.9)*.5*A+L()*R*.18*E}},g6=[[.083,.34],[.147,.22],[.231,.13]],g8=(M,L)=>1-Math.exp(-2*Math.PI*M/L),g7=[659.3,523.3],g9={voicing:0,breath:0,hiss:0,damp:1,melt:0},be=M=>M?.manner==="vowel"||M?.manner==="approximant",bt=new Set([gd.k,gd.g]),ba=(M,L)=>(R,O)=>[{...g9,...M,seconds:O,ramp:L}],br=(M,L)=>({...g9,voicing:.18*!!M.voiced,damp:4,seconds:L,ramp:.008}),bs=(M,L,R,O,A)=>{let E=((M,{after:L})=>bt.has(M)&&L&&be(L)?{core:Math.min(2800,Math.max(1300,1.1*L.formants[1])),width:900}:M.hissing)(M,L);return{...g9,hiss:M.hissing?.loudness??0,voicing:M.voiced?A:0,seconds:R,ramp:O,...E&&{band:E}}},bl={vowel:ba({voicing:1},.012),approximant:ba({voicing:.8},.012),nasal:ba({voicing:.8,damp:14},.006),breath:ba({breath:.8,damp:1.6},.015),pause:ba({},.01),fricative:(M,L,R)=>[{...bs(M,R,L,.012,.4),damp:M.voiced?1.5:1}],stop:(M,L,R)=>[br(M,L),bs(M,R,M.voiced?.008:.012,.002,.3),...M.voiced?[]:[(({before:M,after:L})=>{let R=be(L),O=M===gd.s;return{...g9,breath:R?.7:.35,damp:1.6,seconds:R&&!O?.04:.02,ramp:.006}})(R)]],affricate:(M,L,R)=>[br(M,L),bs(M,R,M.voiced?.055:.075,.004,.3)]},bo=M=>M.reduce((M,{seconds:L})=>M+L,0),bn=M=>({...g9,seconds:M,ramp:.01}),bi=[430,800,2700],bf=[470,1270,1600],bc=M=>M?.spec.manner==="nasal";function bu(M,L){let R=[],O=0;for(let{band:A,seconds:E}of M)A&&R.push([O,L(A)],[O+E,L(A)]),O+=E;return R}function bh(M,L,R){let O=new Float32Array(L).fill(M[0]?.[1]??R),A=0;for(let E=0;E<L;E+=1){let L=.001*E;for(;A<M.length&&(M[A]?.[0]??0)<=L;)A+=1;let[T,I]=M[A-1]??M[0]??[0,R],[z,_]=M[A]??[T,I];O[E]=z>T?I+(_-I)*(L-T)/(z-T):I}return O}let bd={f1:0,f2:1,f3:2},bm=[70,100,150],bp=[[3500,250],[4500,300]],bv=[12.7,7.1,4.7],bg=M=>Math.sqrt(M/16e3);function bb({sampling:M,random:L}){let R,O,A,E,T,I,z,_=bg(M),N=(R=0,O=0,A=0,E=0,T=0,I=0,z=0,{tune:(L,E)=>{let T=Math.min(L,.47*M),I=Math.exp(-Math.PI*E/M);R=(1-I*I)/2,O=2*I*Math.cos(2*Math.PI*T/M),A=-I*I},run:M=>{let L=R*(M-T)+O*I+A*z;return T=E,E=M,z=I,I=L,L}});return{tune:M=>{N.tune(M("hissCentre"),M("hissWidth"))},run:M=>1.25*N.run(L()*_*M)}}let bw=[1,.6,.35];function bx(M,L){let R=1-2*Math.PI*40/L,O=0,A=0,E=0;for(let[L,T]of M.entries())A=T-O+R*A,O=T,M[L]=A,E=Math.max(E,Math.abs(A));return E>0?M.map(M=>.9*M/E):M}let by=["visitor","building","somewhere"],bk=["buzz","whistle","whisper","whistle"],bS=(M,L,R)=>M+(L-M)*R,bM={child:{hertz:[265,340],tract:[1.3,1.45]},woman:{hertz:[185,245],tract:[1.13,1.22]},man:{hertz:[88,135],tract:[.92,1.02]}},bL=["child","woman","man"],bR=el(aj.seed),bO={n:1,x:0n,y:0n},bA=async()=>new Promise(M=>{requestAnimationFrame(()=>{M()})});M.s(["CubeCanvas",0,function({canvas:M,unsupported:L,floor:R,nowhere:O,ways:A,pill:E,offer:T,tapped:I,controls:z}){let _=(0,j.useRef)(null),[N,D]=(0,j.useState)(null),[U,C]=(0,j.useState)(!1),[P,H]=(0,j.useState)(!1),[G,F]=(0,j.useState)(null),[W,B]=(0,j.useState)(null),[$,Y]=(0,j.useState)(null),[V,X]=(0,j.useState)(null),Z=(0,j.useSyncExternalStore)(oM,oL,()=>!1),[Q,J]=(0,j.useState)(!1),[ee,et]=(0,j.useState)(!1),ea=(0,j.useRef)(!1),[er,es]=(0,j.useState)(null),el=(0,j.useRef)(new Map),eo=(0,j.useRef)(null),en=(0,j.useCallback)(()=>eo.current?.passTimes()??null,[]),ef=(0,j.useCallback)(M=>{eo.current?.timing(M)},[]);if(null!==N)throw N;let ec=(M,L)=>(0,q.jsx)("button",{type:"button",className:ot.default.key,onClick:()=>{eo.current?.answer(M)},children:L});if((0,j.useEffect)(()=>{let M=_.current;if(null===M)return;let L=new URLSearchParams(globalThis.location.search),R=!0;return l9(L,globalThis.location.hash.slice(1)).then(O=>{if(R){if(null===O)return void H(!0);eo.current=function(M,{pose:L,hatch:R,resumable:O,ashore:A},E,T,{setFloor:I,setFailure:z,setMissing:_,setInReach:N,setWay:D,setPill:U,setFree:C,open:P,offering:H}){let G,F,W,B,$,q,j,K,Y,V,X,Z,Q,J,ee,et,ea,er,es,el,eo,en,ef,ec,eu,eh,ed,em,ep,ev,eg,eb,ew,ex=E?null:(G=new Set,F=new Set,B=null===(W=function(){try{return l2.get(localStorage.getItem(l0)??"")??null}catch{return null}}())?lJ:{...lJ,runsUnheld:W},$=null!==W,q=0,j=0,K=!1,Y=null,V=null,X=[],Z=null,Q=null,J=0,ee=0,et=!1,ea=!1,er=L=>{if(!(ea="touch"===L.pointerType))return;let{pointerId:R,clientX:O,clientY:A,timeStamp:E}=L,T={id:R,x:O,y:A,landed:E,strayed:0},{left:I,width:z}=M.getBoundingClientRect();if(O<I+z/2){if(null!==Z)return;Z={...T,dx:0,dy:0}}else{if(null!==Q)return;Q=T}M.setPointerCapture(R)},es=M=>{let{pointerId:L,clientX:R,clientY:O}=M;Z?.id===L?(Z.dx=R-Z.x,Z.dy=O-Z.y,Z.strayed=Math.max(Z.strayed,Math.hypot(Z.dx,Z.dy))):Q?.id===L&&(J+=(R-Q.x)*.006,ee-=(O-Q.y)*.006,Q.strayed+=Math.hypot(R-Q.x,O-Q.y),Q.x=R,Q.y=O)},el=M=>{let{pointerId:L,timeStamp:R,type:O}=M,A=Z?.id===L?Z:Q?.id===L?Q:null;null===A||("pointerup"===O&&R-A.landed<300&&A.strayed<12&&(et=!0),A===Z?Z=null:Q=null)},M.addEventListener("pointerdown",er),M.addEventListener("pointermove",es),M.addEventListener("pointerup",el),M.addEventListener("pointercancel",el),eo={read(){let M=null===Z?0:Math.hypot(Z.dx,Z.dy),L=Math.max(56,M),R={walk:null===Z?0:-Z.dy/L,strafe:null===Z?0:Z.dx/L,running:M>100,yawBy:J,elevationBy:ee,use:et};return J=0,ee=0,et=!1,R},touching:()=>ea,dispose(){M.removeEventListener("pointerdown",er),M.removeEventListener("pointermove",es),M.removeEventListener("pointerup",el),M.removeEventListener("pointercancel",el)}},en=()=>{document.pointerLockElement===M||eo.touching()||Promise.resolve(M.requestPointerLock()).catch(M=>{z((0,lQ.a)(M))})},ef=L=>{document.pointerLockElement===M&&(q+=.0025*L.movementX,j-=.0025*L.movementY)},ec=M=>{var L,R;let O,{code:A,key:E,type:T,ctrlKey:I,metaKey:z,repeat:_,target:N,timeStamp:D}=M,U=N instanceof HTMLElement&&(N.isContentEditable||N instanceof HTMLTextAreaElement||N instanceof HTMLSelectElement||N instanceof HTMLInputElement&&!["button","checkbox","radio","range","reset","submit"].includes(N.type))||I||z;if("keydown"===T&&!_&&!U){X=[...X,A].slice(-6);let M=l4.exec(X.join(" "));null!==M&&(V=Number(`${M[1]??""}${M[2]??""}`),X=[])}if("keydown"!==T||_||U||(Y=(L=E,R=A,O=L.toLowerCase(),(/^[a-z]$/u.test(O)?Object.hasOwn(l3,O)?l3[O]:null:Object.hasOwn(l5,R)?l5[R]:null)??Y)),"KeyE"===A&&"keydown"===T&&!_){if(U)return;M.preventDefault(),K=!0;return}if(l6.has(A)){if("keyup"===T?F.delete(A):F.add(A),"keydown"===T&&!_&&!U){let M=function(M,L){let{runsUnheld:R,pressedAt:O}=M;return null!==O&&L-O<=.3?{runsUnheld:!R,pressedAt:null}:{runsUnheld:R,pressedAt:L}}(B,D/1e3);M.runsUnheld!==B.runsUnheld&&function(M){try{localStorage.setItem(l0,M?"run":"walk")}catch{}}(M.runsUnheld),B=M,$=!0}return}!Object.hasOwn(l1,A)||("keyup"===T?G.delete(A):U||(M.preventDefault(),G.add(A)))},eu=()=>{G.clear(),F.clear()},M.addEventListener("click",en),document.addEventListener("mousemove",ef),globalThis.addEventListener("keydown",ec),globalThis.addEventListener("keyup",ec),globalThis.addEventListener("blur",eu),{read(){let{walk:M,strafe:L,yawBy:R,elevationBy:O,running:A,use:E}=eo.read(),T={walk:M,strafe:L,turnKeys:0,tiltKeys:0,yawBy:q+R,elevationBy:j+O,running:A||B.runsUnheld!==F.size>0,use:K||E,answer:Y,goTo:V};for(let M of G){let{axis:L,sign:R}=l1[M];T[L]+=R}return q=0,j=0,K=!1,Y=null,V=null,T},shifted:()=>$,say:M=>{Y=M},dispose(){eo.dispose(),M.removeEventListener("click",en),document.removeEventListener("mousemove",ef),globalThis.removeEventListener("keydown",ec),globalThis.removeEventListener("keyup",ec),globalThis.removeEventListener("blur",eu),document.pointerLockElement===M&&document.exitPointerLock()}}),ey=null===ex?null:(eh=function(){let M,L,R,O,A,E=1,T=0;function I(){if(void 0===M||void 0===L)return;let R=M.place;void 0!==R&&function(M,L){v3(M,L,0);let[R]=L.loops;for(let O of(R?.addEventListener("ended",()=>{L.level.disconnect()}),L.loops))O.stop(M.context.currentTime+1)}(M,R),M.place=function({context:M,master:L},R){let O=M.sampleRate,A=new GainNode(M,{gain:0});A.connect(L);let E=new ConvolverNode(M,{buffer:v0(M,["left","right"].map(M=>(function(M,L,R){let O=Math.max(.08,M),A=p7(L),E=vr(O,R),T=ve("low",R),I=new Float32Array(E),z=0,_=0;for(let M=0;M<E;M+=1){let L=M/E;M%64==0&&(_=800+9e3*Math.exp(-3*L));let R=T(A(),_,.7)*vt(L,1);I[M]=R,z+=R*R}let N=Math.min(E-1,.06*(1+O)*R);for(let M=0;M<6;M+=1){let L=Math.floor(p9(A)*N),R=(I[L]??0)+(0>A()?-1:1)/(2+M);z+=R*R-(I[L]??0)**2,I[L]=R}let D=1/Math.sqrt(z);return I.map(M=>M*D)})(R.echo,vJ(`echo/${R.echo}/${M}`),O)),O)}),T=new GainNode(M,{gain:2.5});E.connect(T).connect(A);let I=new GainNode(M,{gain:.5});I.connect(E);let z=[v1(M,(0,vQ.f)(v2,M,()=>v0(M,[function(M,L){let R=p7(M),O=vr(4,L),A=vr(.5,L),E=ve("low",L),T=ve("band",L),I=new Float32Array(O+A);for(let M=0;M<I.length;M+=1){let L=R(),A=1+.25*Math.sin(p8*M/O);I[M]=A*(.5*E(L,900,.6)+.8*T(L,320,.9))}let z=new Float32Array(O);for(let M=0;M<O;M+=1){let L=I[M]??0,R=M/A,E=R<1?Math.sqrt(R)*L+Math.sqrt(1-R)*(I[O+M]??0):L;z[M]=Math.tanh(E)}return z}(vJ("air"),M.sampleRate)],M.sampleRate)),.16*R.air,[A,I])];return R.hum>0&&z.push(v1(M,v0(M,[function(M,L,R){if(!(M>0))return new Float32Array(1);let O=p7(L),A=Math.max(1,Math.round(2*M)),E=vr(A/M,R),T=Array.from({length:Math.max(1,Math.min(40,Math.floor(5e3/M)))},(L,R)=>{let A=R+1,E=1+4*Math.exp(-(((A*M-2800)/900)**2));return{k:A,level:(1===A?1:(A%2==1?.5:.3)/A**.9)*E*(.4+.6*p9(O)),phase:p8*p9(O)}}),I=T.reduce((M,{level:L})=>M+L,0),z=Float64Array.from({length:4096},(M,L)=>T.reduce((M,{k:R,level:O,phase:A})=>M+O*Math.sin(R*p8*L/4096+A),0)),_=new Float32Array(E);for(let M=0;M<E;M+=1){let L=A*M/E%1*4096,R=Math.floor(L),O=z[R]??0,T=O+(L-R)*((z[(R+1)%4096]??0)-O),N=1+.06*Math.sin(3*p8*M/E);_[M]=.6/I*N*T}return _}(R.hum,vJ(`hum/${R.hum}`),O)],O),.05,[A,I])),{send:E,level:A,loops:z}}(M,L),v3(M,M.place,1)}function z(L,R,{loudness:O=1,balance:A=0,reverb:E=0},T=1,I=0){if(M?.context.state!=="running")return;let{context:_,master:N,place:D}=M,U=new AudioBufferSourceNode(_,{buffer:v0(_,[L],R),playbackRate:T}),C=new StereoPannerNode(_,{pan:A}),P=new GainNode(_,{gain:O});U.connect(C).connect(P).connect(N);let H=new GainNode(_,{gain:O*E});void 0!==D&&C.connect(H).connect(D.send),U.addEventListener("ended",()=>{P.disconnect(),H.disconnect()}),U.start(0,I*T)}return{unlock(){if(void 0===M){if("u"<typeof AudioContext)return;let L=new AudioContext,R=new GainNode(L,{gain:.8});R.connect(new DynamicsCompressorNode(L,{threshold:-14,knee:12,ratio:4,attack:.004,release:.2})).connect(L.destination),M={context:L,master:R,place:void 0},I()}M.context.resume().catch(reportError)},setPlace(M,R){let O;E=R;let A=void 0===L||(O=L).hum!==M.hum||O.air!==M.air||O.echo!==M.echo;L=M,A&&I()},cue(R,O=0){if(M?.context.state!=="running"||void 0===L)return;let A="seed"in R?R.seed:vJ(`${R.kind}/${T+=1}`),I=M.context.sampleRate,{playbackRate:_,...N}=function(M,L){if("from"in M){let{rightward:L,roomsAway:R}=M.from;return{loudness:e5(M.loud)/(1+(R/.6)**2),balance:L*e5(R/.3),reverb:e5(.35+.5*R),playbackRate:1}}let R=vv.has(M.kind)?Math.min(1,Math.max(.25,L)):1;return{loudness:vg[M.kind]*Math.sqrt(R),balance:0,reverb:.3,playbackRate:R**-.35}}(R,E);z(function(M,L,R,O){var A,E,T;switch(M.kind){case"step":return vi(M.footing,M.strength,R,O);case"jump":let I,z,_;return I=p7(R),z=ve("band",O),_=ve("band",O),vs(.22,O,M=>{let L=M/.22;return 1.2*(z(I(),1700-800*L,1.4)*va(L/.6))+.8*(_(I(),500+900*L,.8)*va(L))});case"landing":let N,D,U,C,P;return A=M.speed,D=[vi(L,N=e5(A/1),R,O),vi(L,.85*N,R+1,O)],U=p7(R+2),C=ve("band",O),P=Math.round(.028*O),vs(Math.max(vn(L)+.028,.3),O,(M,L)=>{let R=D.reduce((M,R,O)=>M+(R[L-O*P]??0),0),O=N*N*C(U(),1200,1)*va((M-.03)/.22);return R+N*vl(vc,M)+O});case"pill":let H,G,F,W,B,$;return G=1+.08*(H=p7(R))(),F=.07*(1+.2*H()),W=ve("band",O),B=ve("band",O),$=(M,L)=>L*(vu.reduce((L,R)=>L+vl(R,M,G),0)+.5*H()*vt(M,.003)),vs(F+.12,O,M=>.6*W(H(),3400,.8)*va(M/F)+.5*B(H()*vt(M,.004),420*G,5)+$(M,.6)+$(M-F,1));case"swallow":let q,j,K,Y,V,X,Z;return j=1+.1*(q=p7(R))(),K=.09+.02*q(),Y=ve("band",O),V=ve("band",O),X=ve("band",O),Z=0,vs(.62,O,M=>{let L=1.5*Y(q(),2100*j,4)*vt(M,.012),R=(M-K)/.17,A=j*(230+520*(2*R-1)**2+260*R);return Z+=A/O,L+va(R)**.7*(.9*Math.sin(p8*Z)+V(q(),2.2*A,6))+.5*X(q(),1500,1)*va((M-.34)/.28)});case"rung":return function(M,L,R,O){let{seconds:A,modes:E,rattle:T}=vd[M],{push:I,weight:z,pitch:_}=vm[L],N=p7(R),D=_*(1+.05*N()),U=E.map(()=>.55+.45*Math.abs(N())),C=ve("band",O),P=.02+.015*Math.abs(N());return vs(A,O,M=>I*(E.reduce((L,R,O)=>L+(U[O]??1)*vl(R,M,D),0)+.5*N()*vt(M,.006)+T.force*C(N(),T.hz*D,T.resonance)*vt(M-P,T.dies)+vl(z,M)))}(M.ladder,M.limb,R,O);case"splash":let Q,J,ee,et,ea,er,es;return E=M.strength,Q=e5(E),J=p7(R),ee=.45+.75*Q,et=Array.from({length:Math.round(4+14*Q)},()=>({closes:.03+(ee-.12)*p9(J)**1.6,hz:(520+2400*p9(J)**2)*(1.3-.5*Q),force:.12+.3*p9(J),dies:.045})),ea=ve("low",O),er=ve("band",O),es=ve("high",O),vs(ee,O,M=>{let L=M/ee,R=2.2*Q*ea(J(),260-90*Q,.9)*vt(M,.07),O=(.5+.9*Q)*er(J(),(2600-900*Q)*2**(-1.6*L),.6)*va(.12+.88*L)**.5*vt(M,1.4*ee),A=.35*es(J(),4200,.7)*va((L-.15)/.85),E=0;for(let{closes:L,hz:R,force:O,dies:A}of et){let T=M-L;T<0||T>2*A||(E+=O*Math.sin(R*(1+4*T)*p8*T)*vt(T,A))}return(.3+.7*Q)*(R+O+A+E)});case"breath":let el,eo,en,ei,ef;return T=M.effort,el=e5(T),en=(2.6-1.4*el)*(1+.08*(eo=p7(R))()),ei=.12+.5*el,ef=ve("band",O),vs(en,O,M=>{let L=M/en,R=va(L/.42);return ei*(.7*R+va((L-.48)/.52))*3*ef(eo(),R>0?2300-500*el:1400-400*el,1.1)});case"grunt":let ec,eu,eh,ed,em;return eu=105*(1+.12*(ec=p7(R))()),eh=.26*(1+.15*ec()),ed=vf.map(()=>ve("band",O)),em=0,vs(eh,O,M=>{let L=M/eh,R=(em+=eu*(1-.3*L)/O)%1*2-1+.3*ec(),A=ed.reduce((M,L,O)=>M+L(R,vf[O]??0,5),0);return 1.6*va(.08+.92*L)**.6*A});case"shrink":let ep,ev,eg,eb,ew;return ev=98*(1+.04*(ep=p7(R))()),eg=ve("band",O),eb=[0,0,0],ew=(M,L)=>{let R=(eb[M]??0)+L/O;return eb[M]=R,Math.sin(p8*R)},vs(3,O,M=>{let L=M/3,R=ev*2**L,O=.6+.4*ew(2,4+12*L*L),A=ew(0,R)+.8*ew(1,R*Math.SQRT2*1.01),E=eg(ep(),400*8**L,4)*L,T=Math.sin(41*p8*M);return va(L)**.6*(.3*O*A+.9*E+.3*T)});case"ring":let ex;return ex=1+.06*p7(R)(),vs(1.25,O,M=>{let L=M%.65,R=M<1.1?Math.min(1,L/.005,Math.max(0,(.45-L)/.02)):0,O=Math.sin(440*p8*ex*M)+Math.sin(480*p8*ex*M)+.4*Math.sin(1760*p8*ex*M);return .3*R*(.6+.4*Math.sin(20*p8*M))*O});case"knock":let ey,ek,eS;return ek=1+.1*(ey=p7(R))(),vs(.17*(eS=Array.from({length:2+Math.floor(3*p9(ey))},(M,L)=>.17*L+.02*ey()+.02)).length+.15,O,M=>eS.reduce((L,R)=>L+vh.reduce((L,O)=>L+vl(O,M-R,ek),0)+.3*ey()*vt(M-R,.004),0));case"thud":let eM,eL,eR,eO;return eL=52*(1+.15*(eM=p7(R))()),eR=ve("low",O),eO=0,vs(.7,O,M=>.9*(Math.sin(p8*(eO+=eL*(.6+.4*vt(M,.2))/O))*vt(M,.4))+1.5*eR(eM(),220,.7)*vt(M,.12));case"steps":let eA,eE,eT,eI;return eA=p7(R),eE=Array.from({length:6},(M,A)=>({at:Math.round((.52*A+.03*eA()+.03)*O),samples:vi(L,.6-.08*A,R+1+A,O)})),eT=ve("low",O),vs(eI=3.12+vn(L),O,(M,L)=>{let R=M/eI;return 2*(1-.8*R)*eT(eE.reduce((M,{at:R,samples:O})=>M+(O[L-R]??0),0),6e3*.12**R,.7)});case"creak":let ez,e_,eN,eD,eU,eC;return e_=1+.2*(ez=p7(R))(),eN=ve("band",O),eD=ve("band",O),eU=0,eC=0,vs(1.6,O,M=>{let L=M/1.6;eC+=(ez()-eC)*(8/O),eU+=(22+30*L+60*eC)/O;let R=+(eU%1<.08);eU%=1;let A=eN(R,720*e_,9)+.6*eD(R,1650*e_,12);return 1.8*va(L)**.5*A});case"rustle":let eP,eH,eG;return eP=p7(R),eH=Array.from({length:26},()=>({at:1.2*(.5+Math.asin(2*p9(eP)-1)/Math.PI*.9),force:.4+.6*p9(eP)})),eG=ve("high",O),vs(1.25,O,M=>{let L=eH.reduce((L,{at:R,force:O})=>L+O*vt(M-R,.025),0);return 1.6*eG(eP()*L,2800,.8)});case"pop":let eF,eW,eB;return eW=70*(1+.2*(eF=p7(R))()),eB=ve("low",O),vs(.35,O,M=>{let L=eB(eF(),5200*vt(M,.05)+300,.7),R=Math.sin(p8*eW*M)*vt(M,.12);return 3*L*vt(M,.06)+.8*R});case"mew":let e$,eq,ej,eK,eY;return eq=1+.12*(e$=p7(R))(),ej=ve("band",O),eK=ve("band",O),eY=0,vs(.7,O,M=>{let L=M/.7,R=eq*(520+300*Math.sin(Math.PI*Math.min(1,1.4*L))),A=2*(eY=(eY+R/O)%1)-1+.08*e$(),E=1-.6*L,T=ej(A,900+500*E,6)+.7*eK(A,2200+900*E,8);return 1.4*va(L)**.5*T});case"scrape":let eV,eX,eZ,eQ;return eX=1+.15*(eV=p7(R))(),eZ=ve("band",O),eQ=ve("low",O),vs(.9,O,M=>{let L=M/.9,R=.55+.45*Math.sin(p8*(17+6*L)*M)**2,O=eV();return va(L)**.4*R*(2.4*eZ(O,520*eX,2.5)+3*eQ(O,140,.9))});default:throw TypeError(`Not a cue: ${String(M)}`)}}(R,L.footing,A,I),I,N,_,O)},setOutside(L,E){var T,I,z,_,N,D;if(null===L){A?.stop(),A=void 0;return}if(void 0===R){let M,L,A,E,_,N;z=R={roar:(M=M=>[v$[M](vJ(`${M}/left`),vB[M]),v$[M](vJ(`${M}/right`),vB[M])])("roar"),hiss:M("hiss"),fizz:M("fizz"),wash:M("wash"),wind:M("wind"),buffet:M("buffet"),hum:vq((T=vB.hum,L=[{tuned:1,throb:.25,weight:.33},{tuned:(1+Math.sqrt(5))/2,throb:.35,weight:.18}],vb(120,T,(M,R)=>{let O=M/R,A=0;for(let M of L)A+=vS(M,O,120,!1);return A}))),under:vq((I=vB.under,A={tuned:1.5,throb:.2,weight:.13},vb(60,I,(M,L)=>{let R=M/L,O=60*R,E=0;for(let M of vM)E+=.2*Math.sin(p8*M*O);return vS(A,R,60,!0)+E})))},_=vC.flatMap(M=>z[M]),(N=()=>{let M=performance.now()+4;for(;_.length>0&&performance.now()<M;)(_[0]?.render(8192)??!0)&&_.shift();E=_.length>0?setTimeout(N):void 0})(),O=()=>{clearTimeout(E)}}if(M?.context.state==="running"){let O,T,I,z;(A??=(_=M.context,N=M.master,D=R,(O=new GainNode(_,{gain:0})).connect(N),O.gain.setTargetAtTime(1,_.currentTime,.5),(T=new BiquadFilterNode(_,{type:"lowpass",frequency:2e4,Q:vK})).connect(O),(I=new BiquadFilterNode(_,{type:"lowpass",frequency:2e4,Q:2.5})).connect(O),z=new Map,{set:(M,L)=>{let R=_.currentTime;for(let A of(T.frequency.setTargetAtTime(M.muffle,R,.05),I.frequency.setTargetAtTime(M.humMuffle,R,.05),vC)){let E=z.get(A);if(void 0===E){if(void 0===(E=function(M,L){let R=D[M];if(!R.every(M=>M.render(0)))return;let A=new GainNode(_,{gain:0});A.gain.setTargetAtTime(1,_.currentTime,.5);let E="hum"===M?I:O;A.connect(vj.has(M)?T:E);let z=new ChannelMergerNode(_,{numberOfInputs:2});z.connect(A);let N=[],U=(M,R)=>{let O=new GainNode(_,{gain:0});O.connect(z,0,M);let A=_.createBuffer(1,R.samples.length,R.rate);A.getChannelData(0).set(R.samples);let E=new AudioBufferSourceNode(_,{buffer:A,loop:!0});return E.connect(O),E.start(0,L%R.seconds),N.push(E),O};return{sources:N,ears:[U(0,R[0]),U(1,R[1])]}}(A,L)))continue;z.set(A,E)}let{leftEar:N,rightEar:U}=M.layers[A];for(let[M,L]of[N,U].entries()){let O=E.ears[M]?.gain;void 0!==O&&O.setTargetAtTime(L,R,L<O.value?.07:.06)}}},stop:()=>{let M=_.currentTime;for(let{sources:L}of(O.gain.setTargetAtTime(0,M,.5),z.values()))for(let R of L)R.stop(M+1.5);setTimeout(()=>{O.disconnect()},1500)}})).set(L,E)}},play(M,L,R={}){z(M,L,R)},dispose(){O?.(),M?.context.close().catch(reportError),M=void 0}}}(),ed=()=>{eh.unlock()},M.addEventListener("pointerdown",ed),globalThis.addEventListener("keydown",ed),em=new Map,ep=-1/0,ev=!1,eg=(M,L)=>{var R,O;let A,E,T,I,z,{n:_,x:N,y:D}="eye"in L?bO:L,{grain:U}=pd.room.at({n:_,x:N,y:D}),C=g1[M](_,v6(v4(U),`${_}/${M}`));eh.play((T=function(M,L){var R,O;let A,E,T,I,z,_,N,D,U,C,P,H,G,F,W=(R=L.tempo,E=(A=M.phones.map(({phone:M})=>gd[M])).findLastIndex(({manner:M})=>"vowel"===M),T=.02,z=(I=M.phones.map((M,L)=>{let O=A[L]??gd.pau,I=function(M,L,R,O){if(void 0!==M.beats)return .45*M.beats;if("vowel"!==L.manner){let M="approximant"===L.manner&&!be(O);return L.millis/1e3*(R?1.15:1)*(M?1.6:1)}let A=!0===M.stress?1.2:.85;return L.millis/1e3*A*(R?1.35:1)}(M,O,-1!==E&&L>=E,A[L+1])/R,{loud:z=1,ease:_=0}=M,N=bl[O.manner](O,I,{before:A[L-1],after:A[L+1]}).map(M=>({...M,voicing:M.voicing*z,breath:M.breath*z,hiss:M.hiss*z,melt:_})),D=T;return T+=bo(N),{sound:M,spec:O,starts:D,pieces:N}})).flatMap(M=>M.pieces),D=Math.ceil((N=bo(_=[bn(.02),...z,bn(Math.max(.06,2*(z.at(-1)?.melt??0)))]))/.001),U=(M,R)=>{var O;return bh((O=bd[M],I.flatMap((M,L)=>{let R=function(M,L){let R=M[L]?.spec;if(!R||"breath"===R.manner||"pause"===R.manner)return;let O=M[L+1]?.spec;if(R===gd.l&&!be(O))return bi;if(R===gd.r&&!be(O))return bf;if(be(R))return R.formants;let A=M[L-1]?.spec,E=be(O)?O?.formants:be(A)?A?.glide??A?.formants:void 0,[T,I,z]=R.formants;return E?[T,I+.4*(E[1]-I),z+.4*(E[2]-z)]:R.formants}(I,L);if(!R)return[];let A=bo(M.pieces),E=L=>M.starts+L*A,[T,z]=function(M,L,R){let O=M[L];if(!O)return[0,1];let{spec:A,pieces:E}=O,T=0===R;if(be(A))return[T&&bc(M[L-1])?.08:.3,T&&bc(M[L+1])?.92:.72];if("nasal"===A.manner&&T)return[.03,.97];let[I,z]=E;if("stop"===A.manner&&I&&z){let M=bo(E);return[.1*I.seconds/M,(I.seconds+z.seconds)/M]}return[.15,.85]}(I,L,O),{glide:_}=M.spec;return _?[[E(Math.min(T,.2)),R[O]],[E(.45),R[O]],[E(Math.max(z,.9)),_[O]]]:[[E(T),R[O]],[E(z),R[O]]]})).map(([M,R])=>[M,R*L.tract]),D,R*L.tract)},C=(M,L)=>bh(function(M,L){let R=[],O=0;for(let[A,E]of M.entries()){let T=M[A-1];if(T){let M=Math.min(Math.max(Math.min(E.ramp,T.ramp),E.melt,T.melt),E.seconds/2,T.seconds/2);R.push([O-M,L(T)],[O+M,L(E)])}O+=E.seconds}return R}(_,M),D,L),{ticks:D,curves:{f1:U("f1",500),f2:U("f2",1500),f3:U("f3",2500),damp:C(M=>M.damp,1),voicing:C(M=>M.voicing,0),breath:C(M=>M.breath,0),hiss:C(M=>M.hiss,0),hissCentre:bh(bu(_,M=>M.core),D,3e3),hissWidth:bh(bu(_,M=>M.width),D,2e3),semitones:bh((O=L.lilt,P="flat"===M.tune?0:O,H=I.findLastIndex(({spec:M})=>"vowel"===M.manner),I.flatMap(({sound:L,spec:R,starts:O,pieces:A},E)=>{let T=bo(A);if(void 0!==L.note)return[[O,L.note],[O+T,L.slide??L.note]];if("vowel"!==R.manner)return[];let I=P*(1.5+-(O/N*4)+2.5*(!0===L.stress));return E!==H?[[O+T/2,I]]:"rise"===M.tune?[[O+.2*T,I-P],[O+T,I+7*Math.max(P,.5)]]:[[O+.3*T,I],[O+T,I-4*P]]})),D,0)}}),B=(M,L)=>{let R=Math.min(W.ticks-1,Math.floor(L)),O=W.curves[M],A=O[R]??0;return A+((O[R+1]??A)-A)*(L-R)},$=new Float32Array(Math.round(.001*W.ticks*32e3)),q=(G=Math.floor(0x100000000*v4(L.seed)(`utter/${M.text}`))>>>0||1,()=>(G^=G<<13,G^=G>>>17,((G^=G<<5)>>>0)/0x80000000-1)),j="whistle"===(F={voice:L,sampling:32e3,random:q}).voice.source?function(M){let{sampling:L}=M,R=bb(M),O=[0,0,0],A=[0,0,0];return{shape:M=>{A=[M("f1"),M("f2"),M("f3")].map(M=>2*Math.PI*Math.min(M,L/2)/L),R.tune(M)},sound:(M,L,E)=>{let T=0;for(let[M,L]of bw.entries()){let R=(O[M]??0)+(A[M]??0);O[M]=R,T+=L*Math.sin(R)}return .5*T*(M+.6*L)+R.run(E)}}}(F):function(M,L){let{voice:R,sampling:O}=L,A=g4[M]({...L,hush:bg(O)}),E=bm.map(()=>g3(O)),T=bp.map(([M,L])=>{let A=g3(O);return A.tune(M*R.tract,L),A}),I=bb(L),z=R.hertz;return{shape:(M,L)=>{let O=[M("f1"),M("f2"),M("f3")],A=1+2*M("breath");for(let[L,R]of E.entries()){let E=(bm[L]??100)*(0===L?A:M("damp"));R.tune(O[L]??0,E)}I.tune(M);let T=bv.reduce((M,R)=>M+Math.sin(2*Math.PI*R*L),0);z=R.hertz*2**(M("semitones")/12)*(1+.012*R.unsteady*T/bv.length)},sound:(M,L,R)=>{let O=A(z,M,L);for(let M of E)O=M.run(O);for(let M of T)O=M.run(O);return O+I.run(R)}}}(F.voice.source,F),K=32,Y=-1;for(let M=0;M<$.length;M+=1){let L=M/K,R=Math.floor(L);R!==Y&&(j.shape(M=>B(M,R),.001*R),Y=R),$[M]=j.sound(B("voicing",L),B("breath",L),B("hiss",L))}return bx($,32e3)}(C,(R="visitor",E=v4(A=_+1e3*by.indexOf(R)),O={..._>49?{source:v8(bk,E("source")),hertz:bS(45,420,E("pitch")**2),tract:bS(.6,1.7,E("tract")),tempo:bS(.6,1.2,E("pace")),airy:bS(0,.6,E("breath")),lilt:bS(0,.4,E("lilt")),unsteady:0}:({visitor:()=>{let M;return{source:"throat",hertz:bS(124,108,M=Math.min(1,(_-1)/39)),tract:1,tempo:bS(1,.82,M),airy:bS(.55,.8,M),lilt:1,unsteady:1}},building:()=>{let M;return{source:"throat",hertz:bS(105,190,M=E("pitch")),tract:bS(.97,1.14,M),tempo:bS(.86,.98,E("pace")),airy:.1,lilt:bS(.45,.8,E("lilt")),unsteady:.3}},somewhere:()=>((M,L)=>{let{hertz:R,tract:O}=bM[v8(bL,L("throat"))],A=L("pitch");return{source:M>=24&&.25>L("whisper")?"whisper":"throat",hertz:bS(R[0],R[1],A),tract:bS(O[0],O[1],A),tempo:bS(.78,1.05,L("pace")),airy:bS(.1,.5,L("breath")),lilt:bS(.5,1,L("lilt")),unsteady:1}})(_,E)})[R](),piped:false,seed:A})),I=!0===C.chime?function(M){let L=new Float32Array(Math.round((.42*g7.length+.38+.35)*32e3));for(let[R,O]of g7.entries()){let A=O*M/150,E=Math.round(.42*R*32e3);for(let M=E;M<L.length;M+=1){let R=(M-E)/32e3,O=2*Math.PI*A*R,T=Math.sin(O)+.3*Math.sin(2.76*O);L[M]=(L[M]??0)+.5*T*Math.exp(-R/(.38/3))}}return L}(O.hertz):new Float32Array(0),(z=new Float32Array(I.length+T.length)).set(I.map(M=>.5*M),0),z.set(T,I.length),O.piped?bx(function(M){let L=new Float32Array(M.length+Math.round(14400)),R=g8(380,32e3),O=g8(3200,32e3),A=[0,0],E=[0,0],T=M.map(M=>{let L=M;for(let M of[0,1])A[M]=(A[M]??0)+R*(L-(A[M]??0)),L-=A[M]??0,E[M]=(E[M]??0)+O*(L-(E[M]??0)),L=E[M]??0;return L}),I=0;for(let M of T)I=Math.max(I,Math.abs(M));if(0===I)return L;for(let[M,R]of T.entries()){let O=Math.tanh(2.2*R/I);for(let[R,A]of(L[M]=(L[M]??0)+O,g6)){let E=M+Math.round(32e3*R);L[E]=(L[E]??0)+A*O}}return L}(z),32e3):z),32e3)},{body:(M,L)=>{let{sound:R,scale:O}=function(M){if("eye"in M)return{sound:vX,scale:1};let{sound:L}=uz(M.n);return{sound:L,...(0,aZ.O)(M,"scale")}}(L);for(let A of(eh.setPlace(R,O),M)){let M=function(M,L){if("say"===M.cue)return null;if("step"===M.cue){let{strength:R,ground:O}=M;return{kind:"step",strength:R,footing:O??L.footing}}if("rung"===M.cue)return{kind:"rung",...(0,aZ.O)(M,"limb"),ladder:"wood"};if("splash"===M.cue)return{kind:"splash",...(0,aZ.O)(M,"strength")};if("landing"===M.cue){let{speed:L}=M;return{kind:"landing",speed:L}}return{kind:M.cue}}(A,R);if(null!==M&&eh.cue(M),"say"!==A.cue)continue;let{moment:O}=A;eg("shrink"===O&&ev?"second-shrink":O,L),("first-shrink"===O||"shrink"===O)&&(ev="first-shrink"===O)}},outside:(M,L)=>{let R=performance.now();if(R-ep<50)return;ep=R;let{seconds:O}=oR(L);eh.setOutside(function(M,L,R){if("eye"in L){let{eye:O,yaw:A}=L;return vW(M,{at:[O[0],O[2]],gaze:A},R)}return L.n>4?null:function({layers:M},{floorsBelow:L}){let R,O=L>0?.25*.5**(L-1)*Math.hypot(M.hum.leftEar,M.hum.rightEar):0;return{layers:{...{roar:(R=()=>vF(0))("roar"),hiss:R(),fizz:R(),wash:R(),wind:R(),buffet:R(),hum:R(),under:R()},hum:vF(O/Math.SQRT2)},muffle:50,humMuffle:L>0?2e4:50}}(vW(M,{at:vZ,gaze:0},R),{floorsBelow:L.n-1})}(vV,M,O),O)},rooms:(M,L,R)=>{let O=R/1e3;for(let[M,L]of em)O-L>60&&em.delete(M);for(let{room:R,cue:A,source:E,loudness:T,sinceEpoch:I}of M){if(R.n!==L.n)continue;let M=`${ei(R)}/${A}/${String(I)}`;if(em.has(M))continue;em.set(M,I);let z={u:Number(R.x-L.x)+E[0],v:Number(R.y-L.y)+E[2]};eh.cue({kind:A,seed:bR(M),from:vp(L,L.yaw,z),loud:T},Math.max(0,O-I))}},dispose:()=>{M.removeEventListener("pointerdown",ed),globalThis.removeEventListener("keydown",ed),eh.dispose()}}),ek=(eb=new Map,ew=new Set,M=>{let L=ei(M),R=eb.get(L);if(void 0!==R)return R;if(!ew.has(L)){ew.add(L);let{n:R,x:O,y:A}=M;ez(aj,R,O,A).then(M=>{let E;eb.set(L,M&&{quarter:M,shelf:aw(lz,E={n:R,x:O,y:A},M),shrinkLook:lN(E)})}).catch(z)}return null}),eS=E?aX:null,eM=null!==ex&&O,eL=()=>{var M,O;let A,E,T,I,_,N;return M=L.n,O=async M=>eX(aj,M),A=M,E=R,T=null,I=null,_=0,N=0,(M,L,R)=>{if(_+=R,!L)return;let{n:D,x:U,y:C}=M;if(D===A+1)A=D,E={x:U,y:C};else if(D!==A)return void z(Error(`Floor ${String(D)} was not landed on from ${String(A)}`));let P=(({n:M,x:L,y:R,u:O,v:A,yaw:E,elevation:T})=>({n:M,x:L,y:R,u:O,v:A,yaw:E,elevation:T}))(M),H=null!==I&&!uY(P,I);if(I=P,null!==T&&(uY(P,T)||uK(P,T)&&H&&_<.5))return;T=P,_=0;let G=N+=1;O({hatch:E,at:P}).then(M=>{G===N&&oe(M)}).catch(z)}},eR=eM&&null===A?eL():null,eO=()=>eS??Date.now(),eA=null===A||null===ex?null:("asleep"===A?function(M,L){let{land:R,wake:O}=M;return lr(sX(R,O.at,{yaw:O.seaward,elevation:0},L),{track:lt(M),playedFor:0,into:"island"},{asleep:!0,ladderGone:!1,sawCube:!1,gazeHeld:0})}:function(M,L){let R=lt(M);return((M,{land:L},R,O)=>{let A=ls(M,1,L,R);return{roamer:A,scene:null,asleep:!1,ladderGone:O,sawCube:O,gazeHeld:0,shot:s9(A),cues:sN,entered:!1}})(s1(R,R.runs),M,L,!1)})(lF,oR(Date.now()).seconds),eT=null===eA,eI=+(null===eA),e_=[],eN=!1,eD=M=>{M instanceof KeyboardEvent&&M.code===pw||(eN=!0)};eA?.asleep===!0&&(globalThis.addEventListener("keydown",eD),M.addEventListener("pointerdown",eD,{once:!0}));let eU=sD(L),eC="unseen",eP=null,eH=null,eG=!1,eF=0,eW=(L,R,O)=>{let A=R(L),E=null!==A&&function(M,{at:L}){let R=L.u-M.u,O=L.v-M.v,A=Math.hypot(R,O);return!(A>.48)&&Math.cos(M.yaw)*R+Math.sin(M.yaw)*O>=A*Math.cos(oO)}(L,A);if(I(L.n),N(E?A.kind:null),!E||!O)return E;let{n:T,x:z,y:_}=L;return P({room:{n:T,x:z,y:_},sign:A}),document.pointerLockElement===M&&document.exitPointerLock(),!0},eB=(M,L)=>{let{pose:R}=M;eI=uq(eI,R,L);let O={pose:R,ladderGone:eT,taken:(({pill:M})=>M)(M),moving:function({pose:M,act:L}){return L?.act==="taking"?function(M,L){let R,O,A,{n:E,x:T,y:I,scale:z}=M,_={n:E,x:T,y:I},{from:N,to:D,gone:U,pinch:C,wristTurn:P,holds:H}=lp(L),G=ak(L.shelf),F=lc(M),[W,B]=[lO(N,F,G.centre,z),lO(D,F,G.centre,z)],$=lR(W.pill,B.pill,U),q=lR(W.arm,B.arm,U),j=tR(tM($,q,-1)),K=lR(W.palm,B.palm,U),Y=(R=tR(tM(K,tL(j,tk(K,j)),-1)),au(tL(R,Math.cos(P)),tL(tS(j,R),Math.sin(P)))),V=[j,tS(j,Y),Y],X=tM($,tL(sL(V,lS),.002*z),-1),Z=Math.hypot(...tM(X,q,-1))/(.002*z),Q=sI(X,V,z,_,{...(O=(M,L)=>M*(1-C)+L*C,{curls:[(A=M=>sw.curls[M].map((L,R)=>O(L,sx.curls[M][R]??L)))(0),A(1),A(2),A(3),A(4)],oppose:O(sw.oppose,sx.oppose),sleeve:O(sw.sleeve,sx.sleeve)}),sleeve:Z});if(!H)return Q;let J=sL(V,lM);return[...Q,...ab($,tR(lR(tL(G.axis,0>tk(G.axis,J)?-1:1),J,"shelf"===N?li(U,0,.35):"shelf"===D?1-li(U,.65,1):1)),1,_)]}(M,L):L?.act==="shrinking"?function(M,L,R){let{handsUp:O,turned:A}=lT(L,R);if(O<=0)return[];let{n:E,x:T,y:I,scale:z}=M,{eye:_,ahead:N,right:D,up:U}=lc(M),[C,P,H]=lI;return[1,-1].flatMap(M=>{let L=[N,tL(D,M),U],R=au(_,tL(sL(L,[C,P,H-(1-O)*.09]),z)),G=tR(sL(L,[.9,-.3,.45])),F=L[1],W=tR(au(F,tL(G,-tk(F,G)))),B=tS(G,W),$=0>tk(B,N)?B:tL(B,-1),q=A*Math.PI,[j,K]=[Math.cos(q),Math.sin(q)];return sI(R,[G,au(tL(W,j),tL($,K)),au(tL($,j),tL(W,-K))],z,{n:E,x:T,y:I},sw)})}(M,L.shrinkLook,L.actFor):[]}(M)};return 1===R.n?{...O,lens:uj(eI)}:O},e$=function(M,{start:L,copy:R,bought:O,onFrame:A,onHeard:E,now:T,onError:I,onUnsupported:z}){var _;let N,D,U,C,P,H=L,G=null,F=[],W=[],B=null,$=null,q=null,j=null,K=null,Y={},V={},X=!1,Z=null,Q=(_=()=>Z,N=!1,{timed:{passTimes:()=>_()?.passTimes()??null,timing:M=>{N=M,_()?.timing(M)}},settle:M=>{M.timing(N)}}),J=0,ee=M=>`${ei(M)}#${String(J)}`,et=null,ea="",er=null,es=0,el=performance.now(),eo=!1,en=Promise.withResolvers(),{hinted:ef,...ec}=(D="high",U=null,C="high",globalThis.addEventListener("keydown",P=({code:M,repeat:L,ctrlKey:R,metaKey:O})=>{M!==pw||L||R||O||(D=pb[D],U=performance.now())}),{ratioFor:M=>{let L,R;return L=C=M?D:"high",R=globalThis.devicePixelRatio,pg[L]*R},detail:()=>pg[C],hinted:M=>{let L;return null!==U&&performance.now()-U<2e3?(L=D,`quality-${L}`):M},dispose:()=>{globalThis.removeEventListener("keydown",P)}}),eu=()=>null===G?"":ei(G.room),eh=async(M,L)=>{let A=await pv(M,R,O()),E=eu(),T=A.faces(G),I=[...new Set([T,...A.boards.map(M=>M.scenery)].flatMap(({ranges:M})=>M.map(({n:M})=>M))),M.n];await Promise.all([Z?.prepare(I),1===M.n?Z?.prepareOutside():null]),eo||null===Z||(Z.upload(T),Z.uploadBoards(A.boards),ea=E,et={key:L,pose:M,mesh:A,lenses:new Set(I)})},ed=M=>{let L=ee(M);if(er?.key!==L){let R=eh(M,L);R.catch(I),er={key:L,done:R}}return er},em=()=>{if(null===Z)return;let L=q??$,R=null===L?p4(H):p3;if(et?.key!==ee(R)&&ed(R),null===et||Math.abs(et.pose.n-R.n)>1)return;let O=1===et.pose.n;if(null!==L&&!O)return;eu()!==ea&&(Z.upload(et.mesh.faces(G)),ea=eu());let{lenses:A,mesh:I}=et,z=oR(T()),{quads:_,heard:N}=function({settings:M},L){let R=[],O=[];for(let A of M){let{room:M}=A,E=function(M,L,R){let O=(({hour:M,seconds:L})=>3600*M+L)(R),A=hW.flatMap(R=>{let A=function(M,L,R,O){let A=hP(M,L),E=Math.floor(O/hw[R].every+A.rolled.phase),T=A.beats[R];T.beat!==E&&(T.beat=E,T.plan=function({rolled:M},L,R,O,A){let{every:E,chance:T}=hw[O];if(M.live.at({pace:hD[O],beat:A})>=T)return null;let I=function(M,L,R,O){let{rolled:A}=hP(M,L);return(M,L=0)=>A.draw.at({pace:hD[R],beat:O,turn:L}).at(M)}(L,R,O,A),z=function(M,L,R,O){let A=hS.filter(L=>hy[L].pace===M).filter(M=>(function(M,L){let{needs:R}=hk(M);return void 0===R||hx[R](L)})(M,L)).map(M=>({kind:M,weight:function(M,L){let{weight:R,since:O=1}=hk(M);if(L<O)return 0;let[A,E]=R;return e8(A,E,Math.min(1,(L-O)/(ar-O)))}(M,R)})),E=O*A.reduce((M,{weight:L})=>M+L,0);for(let{kind:M,weight:L}of A)if((E-=L)<0)return M;return null}(O,L,R,I("kind"));if(null===z)return null;let _=function(M,L){let[R,O]=hk(M).lastsFor;return e8(R,O,L)}(z,I("lasts"));return{kind:z,lastsFor:_,sinceEpoch:(A-M.phase)*E+I("start")*(E-_),chance:I}}(A,M,L,R,E));let{plan:I}=T;return null!==I&&O>=I.sinceEpoch&&O<I.sinceEpoch+I.lastsFor?I:null}(M,L,R,O);if(null===A)return[];let{kind:E,sinceEpoch:T,lastsFor:I,chance:z}=A;return[hF[E]({setting:M,n:L,sinceEpoch:T,lastsFor:I,age:O-T,chance:z})].filter(M=>M!==hf)}),[E,...T]=A;return void 0===E?hf:0===T.length?E:{quads:A.flatMap(({quads:M})=>M),sounds:A.flatMap(({sounds:M})=>M)}}(A,M.n,L);for(let L of(R.push(...E.quads),E.sounds))O.push({...L,room:M})}return{quads:R,heard:O}}(I,z);E(N,L?.outside??H);let D=[...F,...W,..._].filter(({room:M})=>A.has(M.n));(D.length>0||X)&&(Z.uploadMoving(I.stood(D)),X=D.length>0);let{width:U,height:C}=M,{eye:P,side:B}=null===L?function(M,L){let{east:R,south:O,roomSide:A}=eJ(M,L);return{eye:[R+L.u*A,e0(M.n,L.n)+L.eyeAbove*A,O+L.v*A],side:A}}(et.pose,R):{eye:rM(L.outside.eye),side:1},Q=B*R.scale,J=R.n-Math.log2(R.scale),er=O&&(null!==L||1===R.n),es={viewProjection:i3(null===L?R:(({yaw:M,elevation:L})=>({yaw:tC(M),elevation:L}))(L.outside),P,U/C,Q,er?{roll:L?.outside.roll,far:4e3}:{}),eye:P};Z.draw({...es,clear:function(M,L){let R=Math.floor(L),O=L-R,A=M(R);if(0===O)return A;let E=M(R+1);return[A[0]+(E[0]-A[0])*O,A[1]+(E[1]-A[1])*O,A[2]+(E[2]-A[2])*O]}(M=>uz(M).air,J),detail:ec.detail(),waking:null!==L,lens:L?.lens??(er?K??j:null)??(A.has(R.n)?R.n:et.pose.n),outdoors:er?{...null===L?(({viewProjection:M,eye:L})=>({viewProjection:iZ(M,i5),eye:rS(L)}))(es):(({eye:M,yaw:L,elevation:R,roll:O},A)=>({viewProjection:i3({yaw:L,elevation:R},M,A,5,{roll:O,far:2e4}),eye:M}))(L.outside,U/C),...null===q?Y:V}:null,...z}),en.resolve()},ep=()=>{let L=ec.ratioFor(null!==q||null!==$||1===p4(H).n),R=Math.max(1,Math.round(M.clientWidth*L)),O=Math.max(1,Math.round(M.clientHeight*L));M.width!==R&&(M.width=R),M.height!==O&&(M.height=O)},ev=M=>{let L=Math.min((M-el)/1e3,.1);el=M;let{outside:R,lens:O,ladderGone:E,...T}=A(H,L,et?.mesh.signOf??p5);({pose:H,taken:G,moving:F}=T),G??=B,Y={ladderGone:E},j=O??null,$=void 0===R?null:{outside:R,lens:O??u$},ep(),em(),es=requestAnimationFrame(ev)};(async()=>{let L=await p1(M,uB,I);eo?L?.dispose():null===L?z():(Z=L,Q.settle(Z),es=requestAnimationFrame(ev))})().catch(M=>{I((0,lQ.a)(M))});let eg=async M=>{await ed(M).done,ep(),em(),await Z?.drawn()};return{ready:async()=>en.promise,setPose:async(M,{moving:L=[],lens:R=null,taken:O=null}={})=>{await en.promise,H=M,W=L,B=O,G=O,q=null,K=R,await eg(p4(M))},setEye:async(M,L=u$,{moving:R=[],...O}={})=>{await en.promise,q={outside:M,lens:L},W=R,V=O,K=null,await eg(p3)},adapter:()=>Z?.adapter??"none",...Q.timed,hinted:ef,refresh:()=>{J+=1},dispose:()=>{eo=!0,cancelAnimationFrame(es),ec.dispose(),Z?.dispose()}}}(M,{start:L,...T,onFrame:null===ex?(M,L,R)=>(eG?(I(null),N(null)):eW(M,R,null!==eH),eH?.resolve(),eH=null,{pose:M,taken:null,moving:[]}):(M,L,R)=>{var O,A;let E=ex.read(),T=H()?sj:E;if(null!==eA){let R=((M,L,R)=>{let{seconds:O}=oR(eO()),A=function(M,L,R,O,A,E){let{scene:T,roamer:I,ladderGone:z,asleep:_,sawCube:N,gazeHeld:D}=M;if(_&&!E)return{...M,cues:sN};let U={asleep:!1,ladderGone:z,sawCube:N,gazeHeld:0};if(null!==T){let{track:M,playedFor:L,into:E}=T,z=L+R,_=s1(M,z),N=(({cues:M,runs:L},R,O)=>M.filter(([M])=>M>=R&&(M<O||O>=L)).map(([,M])=>M))(M,L,z).map(M=>(function(M,{x:L,y:R,z:O},A,E,T){return"step"!==M.cue||void 0!==M.ground?M:R-E.height(L,O)>(1.6+.3)*A?M:{...M,ground:sJ(E.level(L,O,T)-E.height(L,O))}})(M,_,I.scale,A.land,O)),D=z>=M.runs;return{roamer:D?{...I,...le(_),strode:0,paces:0,stroke:0,cues:N}:I,scene:D?null:{...T,playedFor:z},...U,shot:_,cues:N,entered:D&&"island"!==E}}let C={...M,...U,entered:!1};if(L.use&&ln(C,A,O)){var P,H,G;let M,L,R;return lr(I,{track:(P=s9(I),M=s1(H=function({land:M,ladder:L,arrival:R,cube:O}){let{foot:A,top:E,rungs:T}=L,{yaw:I,far:z}=s6([A[0],A[2]],[E[0],E[2]]),[_,N]=[Math.cos(I),Math.sin(I)],D=[A[0]-.5*_,A[2]-.5*N],U=T.map((M,L)=>{let R=M+1.5,O=Math.min((R-E[1])/(E[1]-A[1])*z-.2,-.1),T=L%2==0?1:-1;return{mark:.5+.56*(L+1),x:E[0]+O*_-.035*T*N,y:R,z:E[2]+O*N+.035*T*_,roll:.025*T}}),C=.5+.56*(T.length+1),P=I+.87*(Math.sign(s4(s6([A[0],A[2]],s8(O)).yaw,I)-I)||1),[H,G,F]=R;return s3([{mark:0,x:D[0],y:M.height(...D)+1.6,z:D[1],yaw:I,elevation:0,roll:0,...s7},{mark:.5,yaw:I,elevation:.3,exposure:1},...U,{mark:.5+(C-.5)*.7,yaw:P},{mark:C-1.12,elevation:.2},{mark:C,x:E[0]-.1*_,y:E[1]+1.6-.12,z:E[2]-.1*N,yaw:I,elevation:0,roll:0,exposure:1},{mark:C+1.5,x:H,y:G,z:F,yaw:I,elevation:0},{mark:C+2.3}],[...T.flatMap((M,L)=>{let R=.5+.56*L;return[[R+.196,{cue:"rung",limb:"hand"}],[R+.85*.56,{cue:"rung",limb:"foot"}]]}),[C-.1,{cue:"step",strength:.5}],[C+.9,{cue:"step",strength:.4}]])}(A),0),L=s4(P.yaw,M.yaw),G=s3([{mark:0,...P,yaw:L},{mark:.8,...M}]),R=G.runs,{...s2(M=>{let L;return[...G[M],...(L=H[M],L.map(([M,...L])=>[M+R,...L]))]}),runs:R+H.runs,cues:[...G.cues,...H.cues.map(([M,L])=>[M+R,L])]}),playedFor:0,into:"cube"},U)}let F=function(M,L,R,O,A){let{scale:E,eye:[T,I,z],paces:_}=M,N=sK(M,L,R),D=(M,L)=>A.level(M,L,O)-A.height(M,L),U=5*e8(L.running?.7:.28,.7*.32,e6(e4(D(T,z),0,1.3*E)))*E,C=3.5*E,[P,H]=sY(L,N.yaw,U*R),[G,F]=function(M,L,R,O){let A=[M,L];for(let M of[0,1])for(let{min:[M,,L],max:[E,,T]}of R){let[R,I]=A,z=Math.min(E,Math.max(M,R)),_=Math.min(T,Math.max(L,I)),[N,D]=[R-z,I-_],U=Math.hypot(N,D);if(U>=O)continue;if(U>0){let M=O/U;A=[z+N*M,_+D*M];continue}let C=[[R-M,[M-O,I]],[E-R,[E+O,I]],[I-L,[R,L-O]],[T-I,[R,T+O]]],P=C[0];for(let M of C)M[0]<P[0]&&(P=M);[,A]=P}return A}(T+P,z+H,A.solids,.3*E),W=Math.hypot(G-T,F-z),B=sQ(A,[G,I,F],O,E),$=M.stroke+(B?W/(1.5*E):0),q=e8(I,sZ(A,G,F,O,$,E),1-Math.exp(-R/.12)),j=M.strode+W,K=(B?1.5:.75*sW(L))*E,Y=j>=K&&R>0,V=D(G,F),X=R>0?Math.min(1,W/R/C):0,Z=B?{cue:"splash",strength:.25+.5*X}:V>.25*E?{cue:"splash",strength:e8(.2,.7,X)}:{cue:"step",strength:X,ground:sJ(V)};return{...N,roll:0,scale:E,eye:[G,q,F],strode:Y?j%K:j,paces:_+ +!!Y,stroke:$,cues:Y?[Z]:sN}}(I,L,R,O,(({land:M,ladder:L},R)=>R?M:{...M,solids:[...M.solids,L.solid]})(A,z)),W=Math.hypot(aQ(F.yaw-I.yaw),F.elevation-I.elevation)<=.1*R?D+R:0,B=!N&&W>=.4&&function({eye:[M,L,R],yaw:O,elevation:A},{min:E,max:T}){let[I,z]=[Math.cos(O),Math.sin(O)],[_,N]=[Math.cos(A),Math.sin(A)];return[E[0],T[0]].every(O=>[E[1],T[1]].every(A=>[E[2],T[2]].every(E=>{let[T,D,U]=[O-M,A-L,E-R],C=T*I+U*z,P=C*_+D*N;return P>0&&Math.abs(-T*z+U*I)<=la*P&&Math.abs(D*_-C*N)<=la*P})))}(F,A.cube);return{...C,roamer:F,shot:s9(F),gazeHeld:W,sawCube:N||B,cues:B?[...F.cues,lo]:F.cues}}(M,L,R,O,lF,eN),{cues:E,shot:T,entered:z,asleep:_}=A;if(ey?.body(E,le(T)),z){eA=null,e_=[];let M=lX(T);if(null!==eP){let{u:L,v:R,yaw:O,elevation:A}=M,E={...eP,pose:{...eP.pose,u:L,v:R,yaw:O,elevation:A}};return eP=null,E}return eT=!0,eM&&(eR??=eL()),sD(M)}return null!==M.scene&&null===A.scene&&!A.ladderGone&&eM&&oe(l7),eA=A,e_=(({scene:M,shot:{x:L,y:R,z:O},roamer:{scale:A}},{ladder:E,cube:T})=>M?.into==="cube"&&L>T.max[0]?function(M,{foot:L,top:R,rungs:O},A){let[,E,T]=M,I=((M,L=tz)=>t_(M,L))(tL(rU,-1));return s_.flatMap((z,_)=>{var N,D,U,C,P,H;let G,F,W,B,$,[q]=O.filter((M,L)=>L%2===_).toSorted((M,L)=>Math.abs(M-E)-Math.abs(L-E)),j="left"===z?1:-1;if(void 0===q)return[];let K=(q-L[1])/(R[1]-L[1]),Y=[L[0]+(R[0]-L[0])*K,q,L[2]+.11*j*A],V=[M[0],E-.22*A,T+.19*j*A];return Math.hypot(Y[0]-V[0],Y[1]-V[1])>.7*A?[]:(N=rM(Y),D=I,U=rM(V),C=z,P=A,H=sz,G=tR(tM(N,U,-1)),F=tR(tM(D,tL(G,tk(D,G)),-1)),W="right"===C?tS(G,F):tS(F,G),sI($=tM(N,tL(sL(B=[G,W,F],sk),.002*P),-1),B,P,H,{...sy,sleeve:Math.hypot(...tM($,U,-1))/(.002*P)}))})}([L,R,O],E,A):[])(A,lF),I(null),N(null),U(null),C(!_&&null===A.scene),D(_?"wake":(({scene:M})=>M?.into==="sill"&&M.playedFor>=1)(A)?"gone":ln(A,lF,O)?"climb":null),null})(eA,T,L);if(null===R){let{shot:R}=eA;return eI=uq(eI,lZ(R,lF),L),{pose:M,taken:null,moving:e_,outside:le(R),lens:uj(eI,(({exposure:M,lids:L})=>({exposure:u$.exposure*M,eyelids:L}))(R)),ladderGone:eT}}return eB(eU=R,L)}let z=ek(M),_=(({n:M,x:L,y:R})=>1===M&&L===lV.x&&R===lV.y)((eU=function(M,L){let{pose:R,act:O,pill:A}=M;return null===A||O?.act==="taking"||null!==L&&function(M,L){let{eye:R,ahead:O}=lc(M);return tk(O,tR(tM(ak(L).centre,R,-1)))>.3153223623952687}(R,L.shelf)?M:{...M,pill:null}}(function(M,L,R,O,A){let{pose:E,act:T}=M;return T?.act==="taking"?lb({...M,act:T},L,R):T?.act==="shrinking"?function(M,L,R,O){let{pose:A,act:E}=M,{shrinkLook:T,actFor:I,yaw:z,elevation:_}=E,N=I+R,D=(({hands:M,glance:L})=>M+L>0?.4+M+L:0)(T),U=sV(I<D?{...A,yaw:z,elevation:_}:A,sU(L),R,O),C=N<D?(({aside:M,toHands:L},R,O)=>({yaw:R+M,elevation:O+(-1-O)*L}))(lT(T,N),z,_):(0,aZ.O)(U,"yaw","elevation"),{sayAt:P,moment:H}=T,G=2**-li(N,0,2),F=N>=Math.max(2,D);return{...M,pose:{...A,...C,scale:G,eyeAbove:.32*G},act:F?null:{...E,actFor:N},cues:I<P&&N>=P?[{cue:"say",moment:H}]:sN}}({...M,act:T},L,R,O):T?.act==="falling"?function(M,L,R,O){var A,E;let T,{pose:I,act:z}=M,_=z.actFor+R,N=sV(I,sU(L),R,O);return _>=l$?{...sD({...e1({...N,...z.to}),scale:1,eyeAbove:.32}),act:{act:"landing",actFor:0},cues:[{cue:"landing",speed:lB/.5},{cue:"say",moment:"landing"}]}:{...M,pose:{...N,...(A=z.from,E=z.to,T=li(_,0,lW),{u:A.u+(E.u-A.u)*T,v:A.v+(E.v-A.v)*T}),eyeAbove:Math.max(-e2,.16*_-.4*_*_)+.32*I.scale},act:{...z,actFor:_},cues:sN}}({...M,act:T},L,R,O):null===T&&null!==L.goTo&&L.goTo>=1&&L.goTo<=ar?sD({...lK(L.goTo),...(0,aZ.O)(E,"yaw","elevation")}):null===T&&L.use&&A&&ld(E,A.shelf)?lb(function(M,L){let{pose:R}=M,{n:O,yaw:A,elevation:E,eyeAbove:T}=R,[,I]=ak(L.shelf).centre,z=lh(R,L.shelf);return{...M,act:{act:"taking",stage:"reaching",actFor:0,asks:1===O,...L,yaw:A,elevation:E,aim:{yaw:a2(A,z.yaw),elevation:Math.atan2(I-T,z.away)},from:"down",wristTurn:0},cues:sN}}(M,A),L,R):function(M,L,R,O,A){let E,{pose:T,act:I}=M,z=sV(T,L,R,O),_=(I?.actFor??0)+R,N=null!==I&&_<.5,D=N?{...z,eyeAbove:.32*(1-.3*Math.sin(Math.PI*Math.min(1,Math.max(0,_/.5))**.6))}:z,U=Math.hypot(Number(D.x-T.x)+D.u-T.u,Number(D.y-T.y)+D.v-T.v)/T.scale,C=M.strode+U,P=.15*sW(L),H=C>=P&&R>0,G=H?[{cue:"step",strength:Math.min(1,U/R/.7)}]:sN,F={...M,pose:D,strode:H?C%P:C};if(N)return{...F,act:{act:"landing",actFor:_},cues:G};if(D.scale<1&&null!==A&&(E=eE(A.quarter),.055>Math.abs(D.u-E.u)&&.055>Math.abs(D.v-E.v))){let M,L=(0,aZ.O)(D,"u","v");return{...F,act:{act:"falling",actFor:0,from:L,to:(M=eE(A.quarter),{u:lj(L.u,M.u),v:lj(L.v,M.v)})},cues:[...G,{cue:"jump"}]}}return{...F,act:null,cues:G}}(M,L,R,O,A)}({...eU,pose:M},T,L,l_,z),z)).pose);_&&(eU={...eU,pose:{...eU.pose,x:0n,y:0n,...lV.sill}});let{pose:P,cues:G}=eU;ey?.body(G,P);let F=(({act:M})=>null===M)(eU);T.goTo===P.n&&P.n!==M.n&&(eM=!1,eR=null,O=P.n,globalThis.history.replaceState(null,"",`?${l8}=${String(O)}`)),eW(P,R,T.use&&F),U((({act:M})=>M?.act==="taking"&&M.asks&&"inspecting"===M.stage&&M.actFor>=.7)(A=eU)?"ask":(({act:M})=>null===M)(A)&&null!==z&&ld(P,z.shelf)?"take":null),C(!0);let W=P.n>=3&&!ex.shifted()&&eF<6;if(W&&(eF+=L),D(W?"run":null),"seen"===eC&&0===T.walk&&0===T.strafe&&(eC="free"),_&&"seen"!==eC){let M=(({u:M,v:L,eyeAbove:R,yaw:O,elevation:A})=>{let[E,T,I]=rS([M,R,L]);return{x:E,y:T,z:I,yaw:((M,L=tz)=>M-L*Math.PI/2)(O),elevation:A,roll:0,...s7}})(P),L=oR(eO()).seconds;if("unseen"===eC){let R;eP=eU,eC="seen",R=P.scale,eA=lr(ls(M,R,lF.land,L),{track:function(M,L,{cube:R,ladder:O}){let A=R.max[0]+.25*L,E=M.y-.1*L,[T,I,z]=O.foot,{yaw:_,far:N}=s6([A,M.z],[T,z]),D={x:A,y:E,yaw:s4(_,M.yaw),elevation:Math.atan2(I-E,N)};return s3([{mark:0,...M,roll:0},{mark:.7,...D},{mark:1.9,...D},{mark:3.2,...(0,aZ.O)(M,"y","yaw","elevation"),x:R.max[0]-.5*L}],[[1.3,{cue:"say",moment:"wonder"}]])}(M,R,lF),playedFor:0,into:"sill"},ll)}else{let R;R=P.scale,eA=lr(ls(M,R,lF.land,L),{track:function(M,L,{land:R,cube:O}){let A=O.max[0]+.5*L,E=1.6*L,T=R.height(A,M.z)+E,{y:I}=M,z=Math.sqrt(2*Math.max(0,I-T)/9.8),_=.2+z;return s3([{mark:0,...M,roll:0},{mark:.2,x:O.max[0]+.15*L,y:I},{mark:_,x:A,exposure:1,ease:"linear"},{mark:_,y:T,ease:"in"},{mark:_+.12,y:T-.3*E,ease:"out"},{mark:_+.55,y:T}],[[_,{cue:"landing",speed:9.8*z/5}]])}(M,R,lF),playedFor:0,into:"island"},ll)}}return eR?.(P,F,L),eB(eU,L)},onHeard:(M,L)=>{let R=eO();ey?.outside(null===eA?L:lZ(eA.shot,lF),R),null===eA&&ey?.rooms(M,eU.pose,R)},now:eO,onError:z,onUnsupported:()=>{_(!0)}});if(E){let{ready:M,setPose:L,setEye:R,adapter:O}=e$;Object.assign(globalThis,{__cubePlay:{ready:M,setPose:async(...M)=>(eG=!1,L(...M)),setEye:async(...M)=>(eG=!0,R(...M)),setPill:async M=>{U(M),await bA(),await bA()},adapter:O,setClock:M=>{eS=M},press:async()=>(eH??=Promise.withResolvers()).promise}})}return{...e$,answer:M=>{ex?.say(M)},dispose:()=>{ex?.dispose(),globalThis.removeEventListener("keydown",eD),M.removeEventListener("pointerdown",eD),ey?.dispose(),e$.dispose()}}}(M,O,L.has("play"),{copy:T,bought:()=>el.current},{setFloor:F,setFailure:D,setMissing:C,setInReach:B,setWay:M=>{Y(eo.current?.hinted(M)??M)},setPill:X,setFree:et,open:M=>{ea.current=!0,es(M)},offering:()=>ea.current})}}).catch(D),()=>{R=!1,eo.current?.dispose(),eo.current=null}},[T]),P)return(0,q.jsx)("p",{className:ot.default.notice,children:O});if(U)return(0,q.jsx)("p",{className:ot.default.notice,children:L});let eu=Z?{ways:{...A,...I.ways,run:""},pill:{...E,...I.pill},offer:{...T,...I.offer}}:{ways:A,pill:E,offer:T};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("canvas",{ref:_,className:ot.default.cube,"aria-label":M,tabIndex:0}),null!==G&&(0,q.jsx)("p",{className:ot.default.floor,"aria-live":"polite",children:(0,K.f)(R,{floor:G})}),(0,q.jsx)(os,{passTimes:en,timing:ef}),(0,q.jsx)("p",{className:ot.default.hint,"aria-live":"polite",children:"ask"===V?(0,K.f)(eu.pill.ask,{yes:ec("yes",Z?I.answers.yes:"Y"),no:ec("no",Z?I.answers.no:"N")}):null===V?null===er?"yours"===W?eu.offer.hintYours:null===W?null===$?"":eu.ways[$]:eu.offer.hint:"":eu.pill[V]}),Z&&!Q&&ee&&(0,q.jsx)(ob,{copy:z,onShown:()=>{J(!0)}}),(0,q.jsx)(ov,{offer:er,onBuy:()=>{if(null===er)return;let{room:M,sign:L}=er,{at:R,facing:O,onPost:A}=L;el.current.set(ei(M),{at:R,facing:O,onPost:A}),eo.current?.refresh(),es({room:M,sign:{...L,kind:"yours"}})},onClose:()=>{ea.current=!1,es(null)},copy:T})]})}],3091)},960860,M=>{M.v({controls:"_8YLbsG_controls","controls-fade":"_8YLbsG_controls-fade",controlsGone:"_8YLbsG_controlsGone",controlsHalf:"_8YLbsG_controlsHalf",controlsLook:"_8YLbsG_controlsLook",controlsStick:"_8YLbsG_controlsStick",controlsUse:"_8YLbsG_controlsUse",cube:"_8YLbsG_cube",floor:"_8YLbsG_floor",frameRate:"_8YLbsG_frameRate",hint:"_8YLbsG_hint",key:"_8YLbsG_key",notice:"_8YLbsG_notice"})}]);
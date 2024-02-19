if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const b=e=>s(e,c),f={module:{uri:c},exports:n,require:b};i[c]=Promise.all(a.map((e=>f[e]||b(e)))).then((e=>(r(...e),n)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Framework7Icons-Regular.a42aa071.woff2",revision:"4a39aba9fb8a2f831fa437780e1a058a"},{url:"assets/Framework7Icons-Regular.eba1e821.woff",revision:"d03b787b6492fa2b0141c43fb7e56689"},{url:"assets/index.a2342c54.js",revision:"49eabcb832825d101913dc5e271ae999"},{url:"assets/index.fa444a6e.css",revision:"62f08254151c53442de3f6183c45ce99"},{url:"assets/material-icons.007b0812.woff",revision:"e638a36a512bd6e2156d4f6239ac82ac"},{url:"assets/material-icons.0c2c69ba.woff2",revision:"711d2f5ad280152c452254fb15d127af"},{url:"assets/menu-bubble.5439ce4c.svg",revision:"6e645ef0d2f897a070958219661cf224"},{url:"firebase-messaging-sw-back.js",revision:"918bffdf3c84a616bd9a8ccdae68b86e"},{url:"firebase-messaging-sw-org.js",revision:"94d73e5409d4a981fc86a463532cd716"},{url:"firebase-messaging-sw.js",revision:"c3685a176e28b989853f4ebb7f411cc4"},{url:"icons/128x128.png",revision:"55cfad33862b9577ad273c931b455c54"},{url:"icons/144x144.png",revision:"fdc126b98f2641dd5f95f169f435ed8a"},{url:"icons/152x152.png",revision:"f8a10da53b10178a88ebd87c3ef1d4c2"},{url:"icons/192x192.png",revision:"64f97f1c8bc282a39132c840076b06ed"},{url:"icons/256x256.png",revision:"21c544235be965f28fd09af1faa3fe0b"},{url:"icons/512x512.png",revision:"3d847af504d03e1d178ba5bfeb17f3f6"},{url:"icons/apple-touch-icon.png",revision:"21c544235be965f28fd09af1faa3fe0b"},{url:"icons/favicon.png",revision:"55cfad33862b9577ad273c931b455c54"},{url:"images/burgers/big-tasty.png",revision:"4f6a563048b18c61e05784902295d758"},{url:"images/burgers/bigmac-bacon.png",revision:"62da6c5ce02a07a3413c477a08abe386"},{url:"images/burgers/bigmac.png",revision:"dc5c827f65b4034fa4b07b00cbc74a90"},{url:"images/burgers/cheeseburger.png",revision:"58bd2e12fa919f5a44f2cc0bd9891dd2"},{url:"images/burgers/chicken-premier.png",revision:"8c1bab23be3eb602c7397216236af258"},{url:"images/burgers/chickenburger.png",revision:"d5bfceb72a49d5a76029051d66596d87"},{url:"images/burgers/double-cheeseburger.png",revision:"a5ae5208b245fdc86d490bf42b36f1fc"},{url:"images/burgers/filet-o-fish.png",revision:"1438f17f1e3cf35b2071e9d7a8c48f34"},{url:"images/desserts/apple-pie.png",revision:"73b083cb50e063b17c2093ae965a8393"},{url:"images/desserts/chocolate-donut.png",revision:"1d9459e7cb9c1793bf64a93ed225cd94"},{url:"images/desserts/cinnamon-bun.png",revision:"13cfd5bb10838a90cba44afebca3ec17"},{url:"images/desserts/raspberry-pie.png",revision:"dc3fc6cc325a956cd8531cc6f3342ab3"},{url:"images/desserts/vanilla-donut.png",revision:"38ae42c89f3ddbd3ebda0113dcbe39e2"},{url:"images/drinks/7up.png",revision:"8d90c2c2467d51e6f41087ea80161c71"},{url:"images/drinks/aqua.png",revision:"baa1819b95ff7a1feff314db9c753313"},{url:"images/drinks/mirinda.png",revision:"b59b40adfb2c2b83c95f25af9d6d529b"},{url:"images/drinks/pepsi.png",revision:"65faf87717a76234bcb45136b8f223c2"},{url:"images/pattern.png",revision:"4ea896fc222f3522c421f68513b75ebd"},{url:"images/pizza/diablo.png",revision:"f8dde19bbb385893f2f03db9a96f9c35"},{url:"images/pizza/margherita.png",revision:"e677b388cfac36cf37c7bbc9b8ccbaf4"},{url:"images/pizza/mix.png",revision:"cba75483d059325762b8a3e8f62dc96a"},{url:"images/pizza/pepperoni.png",revision:"ed7f34a1b20c6086381da06d5fb55604"},{url:"images/slide-1.jpg",revision:"38d3e7cc00d8970f7973ab0bf4c150b0"},{url:"images/slide-2.jpg",revision:"45ec3865a490833207686ae4d74cdb25"},{url:"images/slide-3.jpg",revision:"872b7f68f19840b440a267eb4531c3ca"},{url:"index.html",revision:"8e47344a24fcadd3627d0ca3ac588c8b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map


// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var firebaseConfig = {
  apiKey: "AIzaSyAvFS8Ub2XZz-kpVawQuDgKI1YUU8VJdPo",
  authDomain: "area-4b.firebaseapp.com",
  databaseURL: "https://area-4b-default-rtdb.firebaseio.com",
  projectId: "area-4b",
  storageBucket: "area-4b.appspot.com",
  messagingSenderId: "1064234590151",
  appId: "1:1064234590151:web:f61cddcd37a69740a683e2"
  /* apiKey: "XXXX",
  authDomain: "XXXX",
  databaseURL: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX",
  measurementId: "XXXX" */
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Background message received [firebase-messaging-sw.js]: ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/icons/192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


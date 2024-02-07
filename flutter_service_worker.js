'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8be3389c7e8515280e1f5585d8197e36",
"index.html": "8340b4f09986bafa6ed0be9193bc652c",
"/": "8340b4f09986bafa6ed0be9193bc652c",
"main.dart.js": "c1beb7f7d3eaa1f969bacbff3494c070",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "16f0cdac0d9009ef34e47ac39561eacc",
"icons/Icon-192.png": "7f969470326150d277ab6977bd80ab46",
"icons/Icon-maskable-192.png": "7f969470326150d277ab6977bd80ab46",
"icons/Icon-maskable-512.png": "f85ab049c1df0c3e67e153d73946661f",
"icons/Icon-512.png": "f85ab049c1df0c3e67e153d73946661f",
"manifest.json": "b6686ac03c1d01d8e574163e14fbfa4d",
".git/config": "8902a8dd0b8357765cf9f6bab9ef3557",
".git/objects/68/f6513b207b175d5457407337e4e3c9d99b5f5d": "892ffe3fd7e9903fb61ecd6285503a6e",
".git/objects/03/5627fb3f952ea17a50d172774e788ac375a38d": "6ea75795f19c3c8455eb709664feb3a1",
".git/objects/69/8333e5d5603b0155925e5cbe31767682b7704a": "a429bb9d67bec48ee43756574d41169b",
".git/objects/3d/daaed1aa0a55fcbb93b0de569ddb7e4814dcdc": "af12babc68be0a9380254845fbd624ac",
".git/objects/94/ed1fd4a599a18cee95fa213994076a614b8761": "20a226cb77869029581898c40ad69707",
".git/objects/60/b878e9c1b96b4f8121960c9fb7ff86351ca6c5": "0147362a14c4a028ff14b7e5538baa53",
".git/objects/05/2ad26dd047140bc9ee1a228d7d84b0d0ba8793": "8191fc7950dde9f3e6a4ad9cae3162a2",
".git/objects/a4/3783741200f976f4abcf3c58ab762eae5c6555": "cbb16e9ae483085ba69158758f57c0e0",
".git/objects/a4/4c21532d993c4aaa1ac9907bfb504883d57b05": "667bfa2aa8e9d47b6e26b7e3244ac88a",
".git/objects/b2/c57897c7fe7a4b0edd4f2c74a6e2d9d20bfd16": "4f9244766549fc73a0c6907bf7cc83cb",
".git/objects/be/8287f99eeaba8c089a889e63ee40e99c2eb8fd": "7d6948f82de47ac12122ff8e288a17a6",
".git/objects/b3/cc473acdc6ed325be1ab862ecf896514ac1e65": "fb28aa233b1f7b71ebd7d4f6eefa67b3",
".git/objects/da/e278b130d8723547ca69818b29831251ebfcee": "1052bce03e2785145bb56c5549aeee57",
".git/objects/da/9a8e591fa3ce8b4a59af1e97e91253a91b43eb": "8687d61cba3268536da6299176d1dc64",
".git/objects/b4/076e7ce153e63c2d47057b03467c386236d004": "385bf38320a3356884adf42f4e7fcd3e",
".git/objects/c0/d7102ffb6b09ecbfb8b797834d5a5de4dd040d": "b47aad698d647d7c06fd05c43aaea26f",
".git/objects/fc/26cf6a73b5ab438258016fea2ae751329b8d09": "27615a189693788c75cfb73e982b5542",
".git/objects/f2/ff3f20e80692c2162accdda21dc6f490dd46ca": "93a9389e7381a443e73d81c6ed7e8eec",
".git/objects/ca/ed72eb6cd4c0461327bca0348a5c2ba977eda8": "ab4843fa8c34004e1b9cb9ec4ec05a08",
".git/objects/e4/59d5fbe754ae80f042adbf4770be359b432c14": "9496ed47c6ca6de7aaceece35afa4842",
".git/objects/pack/pack-19df352fe4db44661f95ea0d2618dd4d7cbf5cea.idx": "a4bc5fe0b05e882950075f3077c8d630",
".git/objects/pack/pack-19df352fe4db44661f95ea0d2618dd4d7cbf5cea.pack": "5e1c9d8f3560390cba7b81ba455d3eea",
".git/objects/29/e11043bc1bc236698a943c6e366ec771a0575a": "f91fa5ad55ffaf14180e298802314e4f",
".git/objects/16/22b1182737ccd9b849b1731bf779f39ed5cc9c": "10a9a8ce4038ce8b3f967c472f631c9a",
".git/objects/1f/c6c200399131959d1a2ef516073f9973bafb9c": "73dfee9a429f743474a0c18479014679",
".git/objects/80/c18e14462baf3c9c6fc044d984beb715a5d5f5": "392f427a01513e857e8cfb16cbddb5bc",
".git/objects/17/7728ae23ac9848abeabffcde4d28a7564adcff": "073ff98e1c748cb6d9d05c5b2c3df2ad",
".git/objects/8f/ac06d06eb3b789ea90e6db5334d647d6c67b54": "a583d3bde7f53cd082c80b4670b86d56",
".git/objects/19/4e0e4b0061cad51482e741585c7cf3ac313267": "11e65d97d4d992af0fdf27a31269fb89",
".git/objects/21/60bc9c3e928e6f7ca209dbc7ede45838700620": "7671db8970cd870bf566e4201f955029",
".git/objects/81/bc68579c67d0178b0f67b7ad310cc277f86a70": "e22a81ab7d08f52073c1e2a355147964",
".git/objects/07/99a1dae545c71a0e944e440fec27494ccdc228": "866ed7a9e3fb89458b2748b3841b96cd",
".git/objects/36/45a2db25062ee90c2c078fb56a326d51277313": "c88db2d4d4ef38140d7c3cc7920b6d1d",
".git/objects/5d/5d503853124af399faaebad4f09abb8ede0474": "ea16070a97bdce067cb23c8bc4e1fe8d",
".git/objects/91/a1d172dbce005c8cd35cc0cc193f7a3014428a": "6dd52d2aa9ec3d09cc7da355cee92851",
".git/objects/65/a2a99d22f1651d2101f70dc49c4ee8404becfd": "bab64778f897ca93530926a014f23d9a",
".git/objects/3a/82b34c5e5f902ffb6df2ade27c9e5b5ada3324": "2c3f11112dcc9024011b62b86629767d",
".git/objects/30/de0d40eadecbf01f59c205ae9498c0711f15f2": "44a840ccf13f729c6b488475988ae4c2",
".git/objects/99/d41670cb392e876a79728e806f9b45a2e9bf9d": "e01fdd34dd0be509797895b788c48138",
".git/objects/52/d203d3d1e0aebad9aa551b23165c725bbe7c14": "d91adea7cca884b2d9dd545e428083d2",
".git/objects/97/58e0ee4070a091effbcdea728754da5f8d792f": "799697406f8b9f844975166275f32980",
".git/objects/d4/d9e3f57ee0511f1ebbc225e0eb61372c51b48b": "1e7d4d26bdc84cc4e89425fbf0630e0e",
".git/objects/a0/d129a2e6c65c66f9a85b98274efe932586da4c": "0b90f2808df6fce240de04a3b3c07ca1",
".git/objects/b1/859868a001bf1754277a705cb1d42b7d2579ab": "0bba34638e27d71ef34b1f1a84324101",
".git/objects/b1/d350ff2b83e62211c3295858ca49c031bd3fe6": "10746207f7bd9ffb6a73b3ef2e4ca5a2",
".git/objects/b6/cee13eba6854ffc4c24261edfca999743f1321": "d6bb290ac24dde15fe571cb4f3649f1a",
".git/objects/d5/324227cf6384953396ba74eece30b66ebfdc1b": "46acd36f356fa985be7a30bd501d030b",
".git/objects/aa/2f09603040860248e2d1f12c99b6acd429caa6": "a434951b7d9a4aec8f4b8938fe717a21",
".git/objects/b0/21b70284d8a6fcc7f64630f30e926d991d858c": "fc7b03c49a2e6fe756d4f714a32ef889",
".git/objects/a1/e70e7f48c77fec2e9a87abbfddb52e5f691e30": "896d14f3d272c3bde63d03bd6b395dd8",
".git/objects/ef/4f25dc0b7aaa80d3da5ab2a97dbc876492becb": "224751ac1f50a78d1c1f8627fd546b43",
".git/objects/c4/994c6d9df24fb4187b422b38989369a1f4adb8": "4fdecbfebf483ba117b2bbc38d290313",
".git/objects/e1/82128afa203523b9f40ee497ef863ef66a5fbc": "64af63dae69e95152b0d5a26d6dfe8da",
".git/objects/fa/b03ce69463b51a1136ec73d95029dae96446e6": "534beb3d3ae2b1d5835b53fd3e862a8f",
".git/objects/c2/0743063764592178217a4b3b0b1c49df63dde4": "5ba57a03b806349b8dea55af8cfb9c79",
".git/objects/f6/adace5e23a2d4b9a82c611619f9477b63a04d5": "776711a4453d7bb326a084e9f8609c67",
".git/objects/f6/6b599528620fece8fbde6727d99c3ece812f6e": "00919aa980401734a2262016eb2c6b6b",
".git/objects/e7/c6362b80dc4d073c0cfb25bcdf10399b467da8": "d5849f73b33fad13ddac0c9beab93ac5",
".git/objects/41/624e64fb0e2d4054e118614f347f26510bdb79": "b1e09b3879d24ec50011bf2eba9e6183",
".git/objects/1e/3f57e2b21fb440bdd090567d5ced21762b297a": "f4ed21d35477aa703bfbde65c8596605",
".git/objects/8d/570245f5014b04d5ec8b5bacf0cd6259b4dbdc": "f9960471b8541a36a53ef4594c101f5a",
".git/objects/71/2118c2347e19acc91d6abd0925f6a1af1f6ef4": "6723591aa68981b8fa565137585dab8b",
".git/objects/76/8221c987a3a2b3286bdb08eb224c07cfe43667": "4eb889a5d53e764817939d3d687332c5",
".git/objects/49/6845c1c73ca9cdd97208e85a190e47ef092720": "0a0e0c656d21c9f0103b65f7f2c8b2c9",
".git/objects/2e/ef6097c70de35acd6ba86e1ecba43e01469ce9": "1d4179d0f4a447d5cdabacc313621803",
".git/objects/47/38b139d02153ee6861951966049b619b1eeef0": "1bd8b9e9211425dffbcdb287df99eb09",
".git/objects/78/59912f0d00185b90f7fc76593435955b5f0dfb": "db9c01bd060776a84ac0604e3e0c3f3c",
".git/objects/13/79d96a9d321fc7fbf9dfdf2a59c5359217abc1": "174afb37262f02b1fddcf8743bdd3ab2",
".git/objects/25/58023390ca1e6cc411acf55d147e625fe2db9d": "482617661481723e8d2335fe8e4a657c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c06c43dd79fd15cd5c9483e92ee8b4ff",
".git/logs/refs/heads/main": "c06c43dd79fd15cd5c9483e92ee8b4ff",
".git/logs/refs/remotes/origin/HEAD": "b1c26e3c958042a6bea694308e0708b3",
".git/logs/refs/remotes/origin/main": "aa7996fc3b6cbcd363a71d9efecdf3ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a25d0515610fc17bf9c61dbaa85c323c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a25d0515610fc17bf9c61dbaa85c323c",
".git/index": "e3c49b36ddcfad4f32f678064fa1f907",
".git/packed-refs": "c1267d5dd35b93aee6f902a4ee3b5d95",
".git/COMMIT_EDITMSG": "cf50063bd1845008d6517fc11c9caecd",
".git/FETCH_HEAD": "da7f86ac711cbb2410d03a924dead2f8",
"assets/AssetManifest.json": "ec8b6578dcf66ede265a93d169c9169d",
"assets/NOTICES": "8e52c048333501bb7a1477919d7ba445",
"assets/FontManifest.json": "89c4347af99efe99b623e4d241777d8d",
"assets/AssetManifest.bin.json": "b48d32acd73c714e67415653f4e59a4a",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "abe6122de44fd3500e9ab00f82ef99d7",
"assets/fonts/MaterialIcons-Regular.otf": "3ba9dbb3e8e035d8b20493a2ddb02945",
"assets/assets/svg/search.svg": "93908ae1d286be70b16bbb2e4f44ef52",
"assets/assets/svg/distance.svg": "04ebe03355fa88675711ef92640eff04",
"assets/assets/svg/home.svg": "cf6b258752d57b52ec605c3eb56d4936",
"assets/assets/svg/sleep.svg": "6430bf754369547fb87ecb09b7adf9c4",
"assets/assets/svg/steps.svg": "99d568f08403d1fc3301694015861139",
"assets/assets/svg/burn.svg": "17878d64166afc53d13e59310ef0715c",
"assets/assets/svg/setting.svg": "45d4d8a6a8dbdc4c57b46de74ae672bd",
"assets/assets/svg/more.svg": "beac4b50442fde8b2e171116f03f0b4e",
"assets/assets/svg/signout.svg": "f00d50221b54596fcc1f85ac83590583",
"assets/assets/svg/exercise.svg": "742d6c5a839fbdd352ba279d7a41a86c",
"assets/assets/svg/profile.svg": "4c8bbe7a24e05b79fd5228d16f8346d8",
"assets/assets/svg/history.svg": "86fcbe39b9bce9664e88283b1a260b98",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/idirect_logo.png": "aa486cd2903e15f391340b5caa455a65",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/2.0x/avatar.png": "5aad78214cf890564ddc640ba02c561f",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/3.0x/avatar.png": "5aad78214cf890564ddc640ba02c561f",
"assets/assets/images/avatar.png": "5aad78214cf890564ddc640ba02c561f",
"assets/assets/fonts/IBMPlexSans-Medium.ttf": "424d6e28fe50c7fb5d665d4b0fdf0cb1",
"assets/assets/fonts/IBMPlexSans-SemiBold.ttf": "f1f29edcd875f315e596c24b9fbb8c19",
"assets/assets/fonts/IBMPlexSans-ExtraLight.ttf": "89293b5a931434322648d5ccb769202f",
"assets/assets/fonts/IBMPlexSans-Thin.ttf": "a825187b19b83404f4be06879a9895eb",
"assets/assets/fonts/IBMPlexSans-Light.ttf": "341cd5ba84b31a9a949eac15e96e2bf5",
"assets/assets/fonts/IBMPlexSans-Regular.ttf": "2470b0f5dce95a820b228c5bdfc95eca",
"assets/assets/fonts/IBMPlexSans-Bold.ttf": "999fb50e1c3537c3e5039f3cf8579347",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

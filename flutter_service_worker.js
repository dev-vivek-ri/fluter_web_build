'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8be3389c7e8515280e1f5585d8197e36",
"index.html": "01b1130413c03ac2b18f467a3d4f9d4d",
"/": "01b1130413c03ac2b18f467a3d4f9d4d",
"main.dart.js": "c8c9f25b6b1a68b1a5eced14c6ca1318",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "16f0cdac0d9009ef34e47ac39561eacc",
"icons/Icon-192.png": "7f969470326150d277ab6977bd80ab46",
"icons/Icon-maskable-192.png": "7f969470326150d277ab6977bd80ab46",
"icons/Icon-maskable-512.png": "f85ab049c1df0c3e67e153d73946661f",
"icons/Icon-512.png": "f85ab049c1df0c3e67e153d73946661f",
"manifest.json": "53bf13577ecf3823155eafcbb2ca1457",
".git/config": "8902a8dd0b8357765cf9f6bab9ef3557",
".git/objects/03/5627fb3f952ea17a50d172774e788ac375a38d": "6ea75795f19c3c8455eb709664feb3a1",
".git/objects/69/8333e5d5603b0155925e5cbe31767682b7704a": "a429bb9d67bec48ee43756574d41169b",
".git/objects/3d/daaed1aa0a55fcbb93b0de569ddb7e4814dcdc": "af12babc68be0a9380254845fbd624ac",
".git/objects/05/2ad26dd047140bc9ee1a228d7d84b0d0ba8793": "8191fc7950dde9f3e6a4ad9cae3162a2",
".git/objects/a4/3783741200f976f4abcf3c58ab762eae5c6555": "cbb16e9ae483085ba69158758f57c0e0",
".git/objects/be/8287f99eeaba8c089a889e63ee40e99c2eb8fd": "7d6948f82de47ac12122ff8e288a17a6",
".git/objects/fc/26cf6a73b5ab438258016fea2ae751329b8d09": "27615a189693788c75cfb73e982b5542",
".git/objects/f2/ff3f20e80692c2162accdda21dc6f490dd46ca": "93a9389e7381a443e73d81c6ed7e8eec",
".git/objects/e4/59d5fbe754ae80f042adbf4770be359b432c14": "9496ed47c6ca6de7aaceece35afa4842",
".git/objects/pack/pack-19df352fe4db44661f95ea0d2618dd4d7cbf5cea.idx": "a4bc5fe0b05e882950075f3077c8d630",
".git/objects/pack/pack-19df352fe4db44661f95ea0d2618dd4d7cbf5cea.pack": "5e1c9d8f3560390cba7b81ba455d3eea",
".git/objects/80/c18e14462baf3c9c6fc044d984beb715a5d5f5": "392f427a01513e857e8cfb16cbddb5bc",
".git/objects/81/bc68579c67d0178b0f67b7ad310cc277f86a70": "e22a81ab7d08f52073c1e2a355147964",
".git/objects/5d/5d503853124af399faaebad4f09abb8ede0474": "ea16070a97bdce067cb23c8bc4e1fe8d",
".git/objects/30/de0d40eadecbf01f59c205ae9498c0711f15f2": "44a840ccf13f729c6b488475988ae4c2",
".git/objects/52/d203d3d1e0aebad9aa551b23165c725bbe7c14": "d91adea7cca884b2d9dd545e428083d2",
".git/objects/a0/d129a2e6c65c66f9a85b98274efe932586da4c": "0b90f2808df6fce240de04a3b3c07ca1",
".git/objects/d5/324227cf6384953396ba74eece30b66ebfdc1b": "46acd36f356fa985be7a30bd501d030b",
".git/objects/ef/4f25dc0b7aaa80d3da5ab2a97dbc876492becb": "224751ac1f50a78d1c1f8627fd546b43",
".git/objects/c4/994c6d9df24fb4187b422b38989369a1f4adb8": "4fdecbfebf483ba117b2bbc38d290313",
".git/objects/fa/b03ce69463b51a1136ec73d95029dae96446e6": "534beb3d3ae2b1d5835b53fd3e862a8f",
".git/objects/c2/0743063764592178217a4b3b0b1c49df63dde4": "5ba57a03b806349b8dea55af8cfb9c79",
".git/objects/f6/adace5e23a2d4b9a82c611619f9477b63a04d5": "776711a4453d7bb326a084e9f8609c67",
".git/objects/f6/6b599528620fece8fbde6727d99c3ece812f6e": "00919aa980401734a2262016eb2c6b6b",
".git/objects/e7/c6362b80dc4d073c0cfb25bcdf10399b467da8": "d5849f73b33fad13ddac0c9beab93ac5",
".git/objects/41/624e64fb0e2d4054e118614f347f26510bdb79": "b1e09b3879d24ec50011bf2eba9e6183",
".git/objects/8d/570245f5014b04d5ec8b5bacf0cd6259b4dbdc": "f9960471b8541a36a53ef4594c101f5a",
".git/objects/71/2118c2347e19acc91d6abd0925f6a1af1f6ef4": "6723591aa68981b8fa565137585dab8b",
".git/objects/2e/ef6097c70de35acd6ba86e1ecba43e01469ce9": "1d4179d0f4a447d5cdabacc313621803",
".git/objects/78/59912f0d00185b90f7fc76593435955b5f0dfb": "db9c01bd060776a84ac0604e3e0c3f3c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b391ebad806e0126d30d2e297c2871a",
".git/logs/refs/heads/main": "7b391ebad806e0126d30d2e297c2871a",
".git/logs/refs/remotes/origin/HEAD": "cf57cadd853734c06a05a87ca96d7e9b",
".git/logs/refs/remotes/origin/main": "fe8775782a5ca2a02fb496af1aa9da7d",
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
".git/refs/heads/main": "730d3158ff2e941f23cc16e6529a6e2d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "730d3158ff2e941f23cc16e6529a6e2d",
".git/index": "00192fe93a9993c5802aa8bba97f2c0b",
".git/packed-refs": "c1267d5dd35b93aee6f902a4ee3b5d95",
".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/FETCH_HEAD": "2be774a42a6d26454ea305cbbc2c06b9",
"assets/AssetManifest.json": "50b85ed11d07cbe067f572e0768c0ef3",
"assets/NOTICES": "4079c209dd4d2e2657bb881bcbcf4acb",
"assets/FontManifest.json": "89c4347af99efe99b623e4d241777d8d",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6d30ef6c9b2949c63fb94599674745a0",
"assets/fonts/MaterialIcons-Regular.otf": "190790979425c7fc7f8f624ecfb1e042",
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
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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

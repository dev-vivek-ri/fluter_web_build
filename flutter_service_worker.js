'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8be3389c7e8515280e1f5585d8197e36",
"index.html": "e65bf45736e90571d72e1c2ed8807830",
"/": "e65bf45736e90571d72e1c2ed8807830",
"main.dart.js": "f920a0f91c63f9e85fc4275631ae9d28",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "16f0cdac0d9009ef34e47ac39561eacc",
"icons/Icon-192.png": "7f969470326150d277ab6977bd80ab46",
"icons/Icon-maskable-192.png": "7f969470326150d277ab6977bd80ab46",
"icons/Icon-maskable-512.png": "f85ab049c1df0c3e67e153d73946661f",
"icons/Icon-512.png": "f85ab049c1df0c3e67e153d73946661f",
"manifest.json": "53bf13577ecf3823155eafcbb2ca1457",
".git/ORIG_HEAD": "dac336c6174ff9173244a981a3d89e52",
".git/config": "d5974593ed0a8da2152c80cc5c7b7d43",
".git/objects/0c/107689132012976cd73718eddd738f4c9d7227": "644b70f4a4923f08299a955bcd3a6c27",
".git/objects/66/d24751325120d41bd0d4b065bc5ad68e8c4cb4": "8602582dcf16335279b71913fd5f8403",
".git/objects/66/0d9f5de6493764ff69d9a48e474ba969d0d13d": "df0f83deeab5abf06b84da4a373f8940",
".git/objects/3b/b46b55403710ca5b732789a59e6d23e76c3e9b": "d3a69ddfcd63ead20998bc1a3623fd63",
".git/objects/3b/15512a4b716809e40ecf5cf8a5f6b31a4cff2c": "74741b76373c9e8a164ee6f21c8f25f5",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6a/dd7e14e5bb8013bafef1011747171064830d64": "0da617dc6a2959027d0adb7a76927d6c",
".git/objects/35/2eef317611842b12536b3c25ee352bb61ce7fc": "08c12ff13fb7c67302c067ac852bbe81",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/2096736a17d4daf0b94342c14a58af0eb6068b": "b71491abb708b50dd1db0d67f10b061a",
".git/objects/3d/688c769e0b7887aa66833c58b4a28a1e3f7005": "9e3c251b4f758fc85c85a1bcdfb26f88",
".git/objects/58/0fc3d16d99ee641bd27b473496f44a9fc6f983": "68d95cd3bda48927aca5cf3a76553e75",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0e/f0c4e3e1cad86e432908a7935d1009039e2aa6": "a03f2cec42353a2e0e6f0eb9f7ddb01d",
".git/objects/0e/91384c02f12dde98f5efd8e7539377935b0856": "d3a337411abc85f39fbd163ce0b70029",
".git/objects/60/83aed07410105c5cabfa9f377e2fa1ebbfb76a": "b52109e6d0324ff7c97299691e492d2c",
".git/objects/5a/cff7a06dd897efae9786e01777f171cce19544": "122f888df26cce04ebfc7ba73058d292",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9c/134ba3c66f22c85031dc64634957db4a9f6de0": "880b8892fa6289bd4a3fe9a440aaf786",
".git/objects/a3/1e6fc41fcc10815b5e581a00fe9a0e224ade19": "b27806c07b6b416e1d15cbe4b5753246",
".git/objects/b5/b54f052741fe6128e7ec0a81ce83a1024f402e": "5f2ebfa923747953d7e7b5d16c68b357",
".git/objects/b5/c6ca710c937527ca8d2d344214243d6db33832": "1e6ca9406fc3150067eabb10040766e1",
".git/objects/b2/e0448a732996455c407ea9f8357c4457258be9": "d418d1bd69d2c47a25edb51909452553",
".git/objects/d9/703a0ee79b6c84fb3fb51afffb7a1a24f5062a": "fea21a28c985647991a741e1c5c21c5c",
".git/objects/d9/a62835c7e5a60e7e364bac0da98c2dd1cc74ed": "d1a73672a74220bae36aee56591f47db",
".git/objects/ac/7967765cf409d4cf2e36a56e1adc1d3d3aed11": "0ff8804ffb2b8bd352e54143e3e807be",
".git/objects/ad/89c858729a9772a5bad85106a3d3c28732e742": "8ab5d93325d2c1666cb39465c7b58544",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/b3/d32eb03a1c46aafbbcc8533ca8f3711ec042d5": "8ca136fef8894c4c96a4bd62a97785e8",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/b55d7066c50466c49605f817e9f26550f3013f": "ce406a7681bb2c038f6b365831db1b68",
".git/objects/e2/b3a308b61d353e831db97775ec934882d0afe2": "543629f7414f5ac173c8bef4229bd47b",
".git/objects/eb/583f1ce1c6aae0d06a698283a592195a8fbab5": "0ea934d5c2205f36af44cf8677be2dfe",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/5e8bf107e38c53d63c7b640f5928aeaf14368e": "86e77cdce684dfdfad190e0207ade810",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f2/405482d1c68f26131eb93aff6dbf1e1a0d1d8c": "08bd8d4df7f1d384d85c9fe84468ab0c",
".git/objects/f2/c19ae8052f998b2152a9b8c1c147a74cd983e1": "ab414096efe322a8397c690b3fe34105",
".git/objects/e3/bf571f4f387e40ed16421b19a4e86106a11eda": "bcc184b08e51765b4231a01339c01561",
".git/objects/e3/8317f93c5c0ae3f1c797664113e1e1b598e641": "7895d069b5be1a89b9de4a309685a379",
".git/objects/ca/88af560e2d3cf9f26d36b199e2c5b22bf7a55a": "34ffab5dedbe74a67d462f83986f23c1",
".git/objects/ec/75fc86cb945dbe7f677a58bab3b623c05057ac": "8e758e1b549f1ac59a3c39ee803e3374",
".git/objects/20/5331eeb7217355f103e03c4de3313d195fc2d2": "3141c4527502280c2ca354674dbd9a53",
".git/objects/27/9a9cf3572280b58202e0d45c814454c8107931": "07b29ffdaf3f1adc2f725c38024526b1",
".git/objects/4b/81147717708668a9bb326f14a2a3ae112e17a9": "bf3f50c0226aff5172347107ed06d15a",
".git/objects/7c/3e8bad2e664f484ce2388309a65ad35e501206": "9fccda2d564607243d1f5ccfcc1cb87a",
".git/objects/80/ded6fa7191520fda446120baf3b7faef17cf32": "dea07cbb6e2201b5ee62691d8e5a27ce",
".git/objects/7b/42377e4eb116fa115fce31585d4eb0373e566c": "c8c42c71d84a436f3b3aee83416838d6",
".git/objects/10/8ce1df70dc054a71e922919609e92724b833f6": "c8768753457e5fccdfd676fd696dad24",
".git/objects/19/3d78bfe154380e3830dcbceb1dd061c7a33cb7": "ce6f88c37c6a793094e5385a8476f5a0",
".git/objects/19/9b4e391e958b574249b09ec97e60a0e3f7ab72": "4395369278fb076f59270d6226ee7119",
".git/objects/26/7e65b43ae079f731db88702b3d1246d15d8a09": "4699a117157300b32ef862455a1c954d",
".git/objects/21/02246c319bd9b9397c32c096ce46b867138f60": "d36124143d99c32c8d67d255e6bb7847",
".git/objects/44/b19cd9bf46aeec1c5969fd8fddcc9d74b595b8": "e11c5f53f8a5a0955737d35523941219",
".git/objects/44/e363dbac89342c665f5b47815fd61849c942d9": "f918812eadf6b98d3bd04b3997a21cb5",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/88/035f8983741ff349af6e1df4b18ad4a4654c20": "031750a16868a86aab56b5101e5cfc57",
".git/objects/07/b7d05a5e82799bc2831dbc1413599e33e08cab": "3b5d5eeb47c7e4533ab8b93100dcedb0",
".git/objects/6e/0d884c683b3c94ecc5fb0d5bc55ac5dcd2d9d4": "70a41efa6080bd5ee1e5d9cb675e8450",
".git/objects/5c/eb6a02e368bc22eaa1d81386d84de70f0528cf": "d1789f558f9b9b0199f22687e5b17012",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/30/e41779c2d92b51006a1ae8a168caf6c719d590": "f6dabdedf93e61fccb413916a02508a9",
".git/objects/5b/4aef3e287acb787ccb2f463b0ecc972258809a": "cf1cfe75d99f39ba2c44428fad86938d",
".git/objects/6d/4e9cd0fab42d7ba87b92c3e3b606847e91fab9": "aa9e4e0f7504d6cf00351583dd9d5852",
".git/objects/01/11aea29902a091cefa042bcab4e77f0d538e3f": "8a34b1dd15ac93f0979b8835833a651d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/d9f5471e7bf383b9609fd4be00cbc82182b2e3": "081c33e2e72acc612ab13592932b5728",
".git/objects/6c/782469c23ac272e4f758dc8c33199de7ace7b6": "2ec65123cbee5b4a1eb837d5ba4d0607",
".git/objects/97/e5dc9af6e1093966c5cd42d608fd6fbb6a0c59": "769bbf0edfb872ed024f198c9d8d02c4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/0202ad3e2828d816fb17a602dd971a037ea800": "b359944ea744d2264bb70183805d215d",
".git/objects/b1/da44f1a12d84ba78db8498718f34d6a1b928d1": "e7112b1fa79acd0ea9a6df244dfe579d",
".git/objects/b6/5164de707ffeaf0adfca5fca65532bf97e6903": "b0c794f74453ae77a83e942b9d58d94f",
".git/objects/d5/20bbd61dd7f6ed0d31837fd456073ffcab3724": "4694e50d805c5f2907e5c18323a0e80b",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b0/7c7fa087a32ddf7b00071d43965d6ab1854fdf": "97b73ba3502e4a47a7c971696d341651",
".git/objects/ef/10fbdc93e9064fc677ed62870bf11955eb36b8": "a06f48264c11e57951040081c4c3dc93",
".git/objects/ef/dcc95e7d623fa03affd4a71088da47f041a087": "bef854d19cc40b6cbfc2521f0f451f89",
".git/objects/e1/173751dec2aacb205cedd6f90cb822c24eb175": "b812d8badf267bd8eea4feeaf615a789",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/f7/8a2d78f5f8627c4932ecade15874d68e85b932": "8a39ff3ae75b93650a1d7aff804a3d56",
".git/objects/fa/cbe2b259738a58876348d42e9a94d06ee72bf1": "06424b5eae9a14a6394d8f0033b9bc2b",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e7/5fae6c854ad1793ba48f75f036c741a1a7341c": "56b6f1eb032eb17fc235cc07a78e9b7a",
".git/objects/cb/fbe9283c721db77e11a2cc7ad8aa82de15d1b1": "9b3b394b3f8bf7f8ba444e18e048bc63",
".git/objects/f8/eb9eb1f44ae3813fa4c43e5af00c34e60803e5": "492b0a950feb48229dc3bd00def44d4d",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/5831290a7b64def597ed94b87069881eb1b3a8": "7c27f9f5921cab11e60336e8086e4cab",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/8fd44282a26b4fe7b24031a9ad15dc6ac2c724": "5f0793fa1ba2c23dd630435269885f6a",
".git/objects/77/1b0cd773bde6facfe67eecb4625b377e1037d2": "d8962e417a1cf5e6de263a9e66d42902",
".git/objects/70/9394e896fafb2d11780d43f383e33849239f2d": "2b9ecb59d267c8698d8fc9f5a3d78c61",
".git/objects/1e/177f8b2083a3723e0876e93b1ed62c6bd462e6": "78c36ade3263ceb97af4a338d44770e9",
".git/objects/24/f71f96009adcaa7935f5837221c4bdca6444c9": "721b768a839dc84718988b38a1842ff0",
".git/objects/12/119a538f78cc98ba539b432d5c2e880bec846c": "49ffdc2aa16690a378a06b635fb9e7bc",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/457868df56486768c4b7fcc4bd71ce2f44ea17": "c7fcb1ddd7f4d3abf65ea95320a86ea0",
".git/objects/71/cad9d3be95f8fddee4b660c38ab9b28180159c": "d6821c8423e5992549013f10b9a08690",
".git/objects/82/826e1e4f31cdfb8f85eac8d4fd77aeecaa0e12": "8bfed4eaf36f33a3a7be1940b3ac8b88",
".git/objects/2e/72fcf18c06adf61a44fb72b84f0aa613ca629d": "37b3e4c9d6acdc1daca44cb6d106dab3",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/47/9b56f632d39320c17dcca33c3c4b3f2f0ffbe5": "d8161ce5c38a5c565373a5a0d33e46ee",
".git/objects/7a/0b8d4f41fc758c30a95a4046764de0749d953b": "be3eabfcfd95ea14a8bb30e47c1a5780",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45bcd026a3943f849d6109f36503340e",
".git/logs/refs/heads/main": "2d31370725e8d879be60e6cfef635b19",
".git/logs/refs/remotes/origin/HEAD": "7c82e6b58b7947b9167e553096f43fbf",
".git/logs/refs/remotes/origin/main": "24783d15e5dab6c36434b0100e2b1e02",
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
".git/refs/heads/main": "5bd6b26fff15b37c3e7b6e1ef562c06b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5bd6b26fff15b37c3e7b6e1ef562c06b",
".git/index": "48e42bd7bc647b4d1784356ceb927c4a",
".git/COMMIT_EDITMSG": "cf50063bd1845008d6517fc11c9caecd",
".git/FETCH_HEAD": "32b246c6610d95da71046fde9da30e19",
"assets/AssetManifest.json": "50b85ed11d07cbe067f572e0768c0ef3",
"assets/NOTICES": "fe7bfe5bcc19cab507893093c828a0d2",
"assets/FontManifest.json": "89c4347af99efe99b623e4d241777d8d",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6d30ef6c9b2949c63fb94599674745a0",
"assets/fonts/MaterialIcons-Regular.otf": "08e808ed2ff2b3187b54841623035735",
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
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
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

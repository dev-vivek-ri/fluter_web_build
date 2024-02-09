'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8be3389c7e8515280e1f5585d8197e36",
"index.html": "fd4c24e9273872124e37f61fb9c62a9f",
"/": "fd4c24e9273872124e37f61fb9c62a9f",
"main.dart.js": "1de04634dfe1e698faccabe7e008087f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "16f0cdac0d9009ef34e47ac39561eacc",
"icons/Icon-192.png": "7f969470326150d277ab6977bd80ab46",
"icons/Icon-maskable-192.png": "7f969470326150d277ab6977bd80ab46",
"icons/Icon-maskable-512.png": "f85ab049c1df0c3e67e153d73946661f",
"icons/Icon-512.png": "f85ab049c1df0c3e67e153d73946661f",
"manifest.json": "b6686ac03c1d01d8e574163e14fbfa4d",
".git/ORIG_HEAD": "2dd9c351bdf465c95c9fdb84be6e2db4",
".git/config": "8902a8dd0b8357765cf9f6bab9ef3557",
".git/objects/59/8632b9b56c86dd8bddfb3b26fe0a50d919ffa6": "d89a35e6dac52de3dc47fa0d0ba360b5",
".git/objects/66/be181c738dae2831b21f32a59669d3ad7fee99": "fea1059fbeb3e6b97c5d2f642c1a0bcd",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/68/0d9d2ee1b7d485f6bd29ff741239669e22570a": "fdbf73e53deef46bd6a5eef9123966e8",
".git/objects/68/f6513b207b175d5457407337e4e3c9d99b5f5d": "892ffe3fd7e9903fb61ecd6285503a6e",
".git/objects/6f/76ffe0e5fd195597c093cb4b2e1e678b6b9d0b": "34039504d9dc87caa359302fbc36c55b",
".git/objects/03/5627fb3f952ea17a50d172774e788ac375a38d": "6ea75795f19c3c8455eb709664feb3a1",
".git/objects/9b/b84fcb74b0e577052bb85906649e1b4e346b0b": "def1ade8ef5436c7c59b62a156deb4c9",
".git/objects/9e/3fd8b245e1711288860d9752ef38f5bee7aee6": "e6c83a812d7be29ee3a0c52d0613afd4",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/d9f1038867071f69e567ba2afb1910338e63fa": "fa70fc9f9bf093c4098fee5c6c1bba8b",
".git/objects/32/2e2f54192a3f69dde718f14f541cd73c1bb05d": "565c27e1da7c2f031f2372e8cadd6f4f",
".git/objects/69/8333e5d5603b0155925e5cbe31767682b7704a": "a429bb9d67bec48ee43756574d41169b",
".git/objects/3d/daaed1aa0a55fcbb93b0de569ddb7e4814dcdc": "af12babc68be0a9380254845fbd624ac",
".git/objects/94/ed1fd4a599a18cee95fa213994076a614b8761": "20a226cb77869029581898c40ad69707",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/b878e9c1b96b4f8121960c9fb7ff86351ca6c5": "0147362a14c4a028ff14b7e5538baa53",
".git/objects/05/2ad26dd047140bc9ee1a228d7d84b0d0ba8793": "8191fc7950dde9f3e6a4ad9cae3162a2",
".git/objects/9d/f2733f1689039b443a35380f2f9c0996f55c0d": "f1afe4068d7173487cd6f4a2dd73d738",
".git/objects/a4/3783741200f976f4abcf3c58ab762eae5c6555": "cbb16e9ae483085ba69158758f57c0e0",
".git/objects/a4/4c21532d993c4aaa1ac9907bfb504883d57b05": "667bfa2aa8e9d47b6e26b7e3244ac88a",
".git/objects/b5/5d7fdaf5142b81e392fbcd4951752342039782": "7a45bac1e7adaebf176d9a6d64d4d278",
".git/objects/b2/c57897c7fe7a4b0edd4f2c74a6e2d9d20bfd16": "4f9244766549fc73a0c6907bf7cc83cb",
".git/objects/b2/27972000ea38ce388966dcbcbb4b1dc2729dcd": "97c05e94b3e914cab4d7dc17a7a0d5c8",
".git/objects/ac/f487bc144cb1edec5e88c511923d3181914d1e": "a5b796d831e7d500786fe15c0f3dfafa",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/0a749c12a2558121a7c8f9d9010e8d478ab993": "314db6b66c6f120e720223547e6a261d",
".git/objects/be/8287f99eeaba8c089a889e63ee40e99c2eb8fd": "7d6948f82de47ac12122ff8e288a17a6",
".git/objects/be/9f1456dc6a68b9290a2a8e326d96e8066f945a": "71011181d88cbb2ae5b84122c115c7d6",
".git/objects/b3/cc473acdc6ed325be1ab862ecf896514ac1e65": "fb28aa233b1f7b71ebd7d4f6eefa67b3",
".git/objects/df/c61535e26d2cfce4df2c8d44a94949479e91b3": "a70e4d3490664ff572e254023713042e",
".git/objects/da/e278b130d8723547ca69818b29831251ebfcee": "1052bce03e2785145bb56c5549aeee57",
".git/objects/da/9a8e591fa3ce8b4a59af1e97e91253a91b43eb": "8687d61cba3268536da6299176d1dc64",
".git/objects/b4/076e7ce153e63c2d47057b03467c386236d004": "385bf38320a3356884adf42f4e7fcd3e",
".git/objects/e2/135a57d5b7149f9efdf20b31fe4823ff55b906": "c59318b8dd616b5b9c6da982daef15f4",
".git/objects/e2/8edcf0b92af328efa909e0e87986eb325945d1": "df417867f2d340f3966a43b75f1fb544",
".git/objects/c0/d7102ffb6b09ecbfb8b797834d5a5de4dd040d": "b47aad698d647d7c06fd05c43aaea26f",
".git/objects/fc/26cf6a73b5ab438258016fea2ae751329b8d09": "27615a189693788c75cfb73e982b5542",
".git/objects/f2/ff3f20e80692c2162accdda21dc6f490dd46ca": "93a9389e7381a443e73d81c6ed7e8eec",
".git/objects/f5/48e5a6cd8cf867058c5ec6208bffcc7356f86f": "64e35a86340b1552cfbc679ac3222822",
".git/objects/ca/ed72eb6cd4c0461327bca0348a5c2ba977eda8": "ab4843fa8c34004e1b9cb9ec4ec05a08",
".git/objects/e4/59d5fbe754ae80f042adbf4770be359b432c14": "9496ed47c6ca6de7aaceece35afa4842",
".git/objects/c6/babb3496f109a6268dda2d8d3fa948e5172c0d": "9b9dfcb0d532bfc3abfcefea362623e3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/pack/pack-19df352fe4db44661f95ea0d2618dd4d7cbf5cea.idx": "a4bc5fe0b05e882950075f3077c8d630",
".git/objects/pack/pack-19df352fe4db44661f95ea0d2618dd4d7cbf5cea.pack": "5e1c9d8f3560390cba7b81ba455d3eea",
".git/objects/29/e11043bc1bc236698a943c6e366ec771a0575a": "f91fa5ad55ffaf14180e298802314e4f",
".git/objects/7c/cb8c4ec9c768e4d32694487afd5df86f8f4700": "3f3dcf4c11edb0ba3d071f35d5573a38",
".git/objects/16/22b1182737ccd9b849b1731bf779f39ed5cc9c": "10a9a8ce4038ce8b3f967c472f631c9a",
".git/objects/1f/c6c200399131959d1a2ef516073f9973bafb9c": "73dfee9a429f743474a0c18479014679",
".git/objects/80/c18e14462baf3c9c6fc044d984beb715a5d5f5": "392f427a01513e857e8cfb16cbddb5bc",
".git/objects/28/844f2f025bef0b340acccb7afe1c1007559b2e": "f9f6620e2b3ddb56eddc9ec4fe3f6a50",
".git/objects/17/5a8d9f3e0279561bc4f9436ecdb60c1462b068": "ac1db860766998ddaefbc42e08378e8f",
".git/objects/17/7728ae23ac9848abeabffcde4d28a7564adcff": "073ff98e1c748cb6d9d05c5b2c3df2ad",
".git/objects/8f/ac06d06eb3b789ea90e6db5334d647d6c67b54": "a583d3bde7f53cd082c80b4670b86d56",
".git/objects/19/4e0e4b0061cad51482e741585c7cf3ac313267": "11e65d97d4d992af0fdf27a31269fb89",
".git/objects/26/c6eacdbcd57565c949d1a8b3bf90831ece1fd8": "bd7dd448a42c1e3f44fec7f3f1e8aa3d",
".git/objects/21/60bc9c3e928e6f7ca209dbc7ede45838700620": "7671db8970cd870bf566e4201f955029",
".git/objects/75/3eba1e97b36fb6dabeac5b70ef71a0d0a5f62b": "8195e392024dfaa4aa1427ceb298be72",
".git/objects/81/bc68579c67d0178b0f67b7ad310cc277f86a70": "e22a81ab7d08f52073c1e2a355147964",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/07/99a1dae545c71a0e944e440fec27494ccdc228": "866ed7a9e3fb89458b2748b3841b96cd",
".git/objects/36/45a2db25062ee90c2c078fb56a326d51277313": "c88db2d4d4ef38140d7c3cc7920b6d1d",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/5d/5d503853124af399faaebad4f09abb8ede0474": "ea16070a97bdce067cb23c8bc4e1fe8d",
".git/objects/91/a1d172dbce005c8cd35cc0cc193f7a3014428a": "6dd52d2aa9ec3d09cc7da355cee92851",
".git/objects/65/a2a99d22f1651d2101f70dc49c4ee8404becfd": "bab64778f897ca93530926a014f23d9a",
".git/objects/3a/82b34c5e5f902ffb6df2ade27c9e5b5ada3324": "2c3f11112dcc9024011b62b86629767d",
".git/objects/30/de0d40eadecbf01f59c205ae9498c0711f15f2": "44a840ccf13f729c6b488475988ae4c2",
".git/objects/6d/2b8af19d8d9d6ba6b2ec620ef0510f1957caf2": "fde851083319c239cd64a7b97195fb21",
".git/objects/6d/b2532c98428994d778ee58384fa831e536d67f": "a0ba744a6d272ebe75e6382500735a90",
".git/objects/06/955b2dfe4251a61b62637e41ffc0d79475a02d": "86b7b0bb30f20eeb7bb51afd62fd7d1b",
".git/objects/99/0fda50078489995e3a82e0c549d5cbcb7933f5": "8058136661806d874c49df77a8d79e07",
".git/objects/99/d41670cb392e876a79728e806f9b45a2e9bf9d": "e01fdd34dd0be509797895b788c48138",
".git/objects/99/b7aab7b24b882ee82099ceb4da2afc97de52d8": "4394d32907a4e5b6e3dba70026c2d745",
".git/objects/52/40856969fcc4cd447b7af82bff4c0e6cee0aae": "f71d3342a1b31bf78892f5ab5fed042b",
".git/objects/52/d203d3d1e0aebad9aa551b23165c725bbe7c14": "d91adea7cca884b2d9dd545e428083d2",
".git/objects/97/58e0ee4070a091effbcdea728754da5f8d792f": "799697406f8b9f844975166275f32980",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/0a/9042e750e694523cd77ad75d629664ad7e33b8": "e710fad43e572ff1d04e13a27239764b",
".git/objects/bf/560cdf9afec6981c53d94a1b65d5590335245d": "f9805cf1f2d64329a4b30ebd41e59991",
".git/objects/d4/d9e3f57ee0511f1ebbc225e0eb61372c51b48b": "1e7d4d26bdc84cc4e89425fbf0630e0e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a0/f7d74d654faeb2187678d55c38c4b971f132b0": "e98b19517cd625f68fe55ee512943743",
".git/objects/a0/d129a2e6c65c66f9a85b98274efe932586da4c": "0b90f2808df6fce240de04a3b3c07ca1",
".git/objects/b1/859868a001bf1754277a705cb1d42b7d2579ab": "0bba34638e27d71ef34b1f1a84324101",
".git/objects/b1/d350ff2b83e62211c3295858ca49c031bd3fe6": "10746207f7bd9ffb6a73b3ef2e4ca5a2",
".git/objects/dc/f5374a1346ac837e11f21f597d12c01e2380c1": "60da52794213f69e53500430997debdf",
".git/objects/b6/cee13eba6854ffc4c24261edfca999743f1321": "d6bb290ac24dde15fe571cb4f3649f1a",
".git/objects/d5/324227cf6384953396ba74eece30b66ebfdc1b": "46acd36f356fa985be7a30bd501d030b",
".git/objects/d2/629c14bd80d09cf3c39fc392714e73d9d42fa8": "af4ecb35d8575a41bc9d8cc68a9e2720",
".git/objects/aa/2f09603040860248e2d1f12c99b6acd429caa6": "a434951b7d9a4aec8f4b8938fe717a21",
".git/objects/a8/ccdd38031b4b673161ff1b8a8fa7f48f25f89c": "33086e669d0d7301d154851ef09bcbe1",
".git/objects/b0/21b70284d8a6fcc7f64630f30e926d991d858c": "fc7b03c49a2e6fe756d4f714a32ef889",
".git/objects/a1/5a6a9f7717cf234ded0146e3788389b9db6ef1": "8334f8acdd7d3ee8d8555fc0100434fa",
".git/objects/a1/e70e7f48c77fec2e9a87abbfddb52e5f691e30": "896d14f3d272c3bde63d03bd6b395dd8",
".git/objects/ef/4f25dc0b7aaa80d3da5ab2a97dbc876492becb": "224751ac1f50a78d1c1f8627fd546b43",
".git/objects/c4/994c6d9df24fb4187b422b38989369a1f4adb8": "4fdecbfebf483ba117b2bbc38d290313",
".git/objects/e1/82128afa203523b9f40ee497ef863ef66a5fbc": "64af63dae69e95152b0d5a26d6dfe8da",
".git/objects/fa/b03ce69463b51a1136ec73d95029dae96446e6": "534beb3d3ae2b1d5835b53fd3e862a8f",
".git/objects/ff/42892ca507b5e46b9c197b0de5668ead4618af": "590e68d365bdb097d2161ec5005ab453",
".git/objects/c2/0743063764592178217a4b3b0b1c49df63dde4": "5ba57a03b806349b8dea55af8cfb9c79",
".git/objects/f6/adace5e23a2d4b9a82c611619f9477b63a04d5": "776711a4453d7bb326a084e9f8609c67",
".git/objects/f6/6b599528620fece8fbde6727d99c3ece812f6e": "00919aa980401734a2262016eb2c6b6b",
".git/objects/e7/c6362b80dc4d073c0cfb25bcdf10399b467da8": "d5849f73b33fad13ddac0c9beab93ac5",
".git/objects/f8/344880a1a8e716cec5f5974e1fde40889c0649": "3204868069b7f62bb4c6b95e16d9d722",
".git/objects/46/1b03043bc686efe77a9146c0de660a2fb95bbf": "c2492f5a881f73daacda1b8c95d55f02",
".git/objects/41/624e64fb0e2d4054e118614f347f26510bdb79": "b1e09b3879d24ec50011bf2eba9e6183",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/3f57e2b21fb440bdd090567d5ced21762b297a": "f4ed21d35477aa703bfbde65c8596605",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/570245f5014b04d5ec8b5bacf0cd6259b4dbdc": "f9960471b8541a36a53ef4594c101f5a",
".git/objects/71/cb90de04e5cf35f0e5ae1b1bb222b676f240d6": "b4fd13617d4d4dea2bfb3059b8bcfab0",
".git/objects/71/2118c2347e19acc91d6abd0925f6a1af1f6ef4": "6723591aa68981b8fa565137585dab8b",
".git/objects/76/8221c987a3a2b3286bdb08eb224c07cfe43667": "4eb889a5d53e764817939d3d687332c5",
".git/objects/49/6845c1c73ca9cdd97208e85a190e47ef092720": "0a0e0c656d21c9f0103b65f7f2c8b2c9",
".git/objects/2e/ef6097c70de35acd6ba86e1ecba43e01469ce9": "1d4179d0f4a447d5cdabacc313621803",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/3d1c92fa0f23f6e3584592adaefbac7ab81934": "d3f06f0e763c35954a3ad8f4d7e8f1eb",
".git/objects/47/38b139d02153ee6861951966049b619b1eeef0": "1bd8b9e9211425dffbcdb287df99eb09",
".git/objects/78/59912f0d00185b90f7fc76593435955b5f0dfb": "db9c01bd060776a84ac0604e3e0c3f3c",
".git/objects/13/79d96a9d321fc7fbf9dfdf2a59c5359217abc1": "174afb37262f02b1fddcf8743bdd3ab2",
".git/objects/8e/c35a9d4029e096751b078fb638289434d0889f": "8484017ae4d7ee7a4e3fd452fe68b9cd",
".git/objects/25/69267322f013f675e3388dfe4be32abae40904": "4b7727d626f55692ab44140e0f5b4a77",
".git/objects/25/58023390ca1e6cc411acf55d147e625fe2db9d": "482617661481723e8d2335fe8e4a657c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "21464b676fd6b73d3f7a944fdb3e9911",
".git/logs/refs/heads/main": "21464b676fd6b73d3f7a944fdb3e9911",
".git/logs/refs/remotes/origin/HEAD": "69b072b800db5fb18e0565e7bfebea4d",
".git/logs/refs/remotes/origin/main": "5b7eabe267ad1e84afcce68a3d1ef5df",
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
".git/refs/heads/main": "43cdc6c891bded5db4481f033a2b94d4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "43cdc6c891bded5db4481f033a2b94d4",
".git/index": "ee80a0493799c62f409b66d5a7474b5e",
".git/packed-refs": "c1267d5dd35b93aee6f902a4ee3b5d95",
".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/FETCH_HEAD": "2567b8fb6751b2be2fdfd1bee697dad1",
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

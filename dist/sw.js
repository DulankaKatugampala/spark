/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-9637eeee'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "android/android-launchericon-144-144.png",
    "revision": "e7c9b1d8dcb39ffb7da8d7f50bd73291"
  }, {
    "url": "android/android-launchericon-192-192.png",
    "revision": "de50ea08db6264fccdf4c851726f5de5"
  }, {
    "url": "android/android-launchericon-48-48.png",
    "revision": "fee696f5a4c5181d1fc3cc4f5c1c11b6"
  }, {
    "url": "android/android-launchericon-512-512.png",
    "revision": "d87753c957031474b1fc44fe4d739f77"
  }, {
    "url": "android/android-launchericon-72-72.png",
    "revision": "e314217fe6be0c832be703ff2d406542"
  }, {
    "url": "android/android-launchericon-96-96.png",
    "revision": "c1ffccc099286025a6ffc4e132c484f3"
  }, {
    "url": "assets/AboutView-DIMzqIj6.js",
    "revision": null
  }, {
    "url": "assets/AboutView-ug8e6cRs.css",
    "revision": null
  }, {
    "url": "assets/index-x6itbcqJ.css",
    "revision": null
  }, {
    "url": "assets/index-XUCkVmBB.js",
    "revision": null
  }, {
    "url": "favicon.ico",
    "revision": "1ba2ae710d927f13d483fd5d1e548c9b"
  }, {
    "url": "index.html",
    "revision": "76476aa139f85945bbcce3c9dad2e4f9"
  }, {
    "url": "ios/100.png",
    "revision": "949029648616d5da0c151e9dbadb5a93"
  }, {
    "url": "ios/1024.png",
    "revision": "3d4f8432e5e804c9f6025552b97564b0"
  }, {
    "url": "ios/114.png",
    "revision": "25c14144b93bba5859b62e3d589b555c"
  }, {
    "url": "ios/120.png",
    "revision": "58ce2b1174f7ce85ad32a83176b9006c"
  }, {
    "url": "ios/128.png",
    "revision": "91c1346177c6ff8d839eb66b3e0471a2"
  }, {
    "url": "ios/144.png",
    "revision": "e7c9b1d8dcb39ffb7da8d7f50bd73291"
  }, {
    "url": "ios/152.png",
    "revision": "60778de512c7ce80397d0b21d605e12d"
  }, {
    "url": "ios/16.png",
    "revision": "2b1f6ace84fce1e0bc5f580b7c671789"
  }, {
    "url": "ios/167.png",
    "revision": "506cade668f26bb45c234ba55869b69b"
  }, {
    "url": "ios/180.png",
    "revision": "500650c179558cf4c34099d728d0515d"
  }, {
    "url": "ios/192.png",
    "revision": "de50ea08db6264fccdf4c851726f5de5"
  }, {
    "url": "ios/20.png",
    "revision": "5cd6b70cef7654b94a0a27a43b93ce38"
  }, {
    "url": "ios/256.png",
    "revision": "3ba885b1b80e71121e6fe9e7c0416831"
  }, {
    "url": "ios/29.png",
    "revision": "c1981958aa8ac398c47d8cbbd853df39"
  }, {
    "url": "ios/32.png",
    "revision": "691bf4d877d5c0587fdd8099aa52c132"
  }, {
    "url": "ios/40.png",
    "revision": "5080df3e249b7efceed5f52ed93901d3"
  }, {
    "url": "ios/50.png",
    "revision": "6037c77e6e5eea57513fcb0fb2dc625f"
  }, {
    "url": "ios/512.png",
    "revision": "d87753c957031474b1fc44fe4d739f77"
  }, {
    "url": "ios/57.png",
    "revision": "90553282bb0d534109dbbec0607e08b5"
  }, {
    "url": "ios/58.png",
    "revision": "da5dc74ccac842dbb8968875fbe4b3d1"
  }, {
    "url": "ios/60.png",
    "revision": "39df67350943fe84fa6a97242a5dbd0c"
  }, {
    "url": "ios/64.png",
    "revision": "35873014d84fa16acd3cdf4ac080981f"
  }, {
    "url": "ios/72.png",
    "revision": "e314217fe6be0c832be703ff2d406542"
  }, {
    "url": "ios/76.png",
    "revision": "f645fecff335185311863a29fd25fdf8"
  }, {
    "url": "ios/80.png",
    "revision": "b64404b468b9d0227c74fa3119aa718c"
  }, {
    "url": "ios/87.png",
    "revision": "e229063b76ccf2a70921f8a0539791f9"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "windows11/LargeTile.scale-100.png",
    "revision": "d20747c2a3abd15ec7f1a47e2309d272"
  }, {
    "url": "windows11/LargeTile.scale-125.png",
    "revision": "133710e0063ed72fd7c43735c94ce383"
  }, {
    "url": "windows11/LargeTile.scale-150.png",
    "revision": "d0ea668699d46c528bb73536a084c751"
  }, {
    "url": "windows11/LargeTile.scale-200.png",
    "revision": "f6eb9692f720547378173b18d0ee272f"
  }, {
    "url": "windows11/LargeTile.scale-400.png",
    "revision": "5740243269666308c58df9693c5a2685"
  }, {
    "url": "windows11/SmallTile.scale-100.png",
    "revision": "0ec419677496e65c262937206bbde47c"
  }, {
    "url": "windows11/SmallTile.scale-125.png",
    "revision": "2f17b06917d95cdf48db0fe981e048bf"
  }, {
    "url": "windows11/SmallTile.scale-150.png",
    "revision": "9226aae7d3b618f4b70c706abd4489c3"
  }, {
    "url": "windows11/SmallTile.scale-200.png",
    "revision": "0a9693b615f55c696f2d843b3d46f929"
  }, {
    "url": "windows11/SmallTile.scale-400.png",
    "revision": "213bb0f4b229cd71713be0a345eba8d9"
  }, {
    "url": "windows11/SplashScreen.scale-100.png",
    "revision": "4616d1f924a459e78552d905ba1d739f"
  }, {
    "url": "windows11/SplashScreen.scale-125.png",
    "revision": "0c1a9b06f60b94155f331282e4787211"
  }, {
    "url": "windows11/SplashScreen.scale-150.png",
    "revision": "6a41cabe095e8fa86263bfe5acb170c4"
  }, {
    "url": "windows11/SplashScreen.scale-200.png",
    "revision": "70119788c6ae9828922defd19f0b62ea"
  }, {
    "url": "windows11/SplashScreen.scale-400.png",
    "revision": "d0ff129245deeb5cf4fed83be2115293"
  }, {
    "url": "windows11/Square150x150Logo.scale-100.png",
    "revision": "cb7a710974682260f1bfe2358c7d9862"
  }, {
    "url": "windows11/Square150x150Logo.scale-125.png",
    "revision": "66d809a1861975b06e8fd1a5177f072b"
  }, {
    "url": "windows11/Square150x150Logo.scale-150.png",
    "revision": "e88d2669aa448abcff72a4a23af62d9a"
  }, {
    "url": "windows11/Square150x150Logo.scale-200.png",
    "revision": "57dc162de58ebb861b23db76f479f4ca"
  }, {
    "url": "windows11/Square150x150Logo.scale-400.png",
    "revision": "407e0b00c5be5aeef0aaecf2db31eaf1"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
    "revision": "8c555296122a15c120568c2b55a301bb"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
    "revision": "3ae826f0f8d9c79d7f96a1e567c2f390"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
    "revision": "dc5afb6855c335db11b59c4bf693a72a"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
    "revision": "b2675b4ecdffbe3598e97b71ada21b58"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
    "revision": "2d35bf5c5c67903123403df560ae644f"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
    "revision": "8d0298dd22b8824a4d1864e984654aa9"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
    "revision": "21351ac06b772471f79fd140e0eb76f2"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
    "revision": "ea77c5d6c00fcd092c05797a885f9e6a"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
    "revision": "4210bf48a6b31278ce22ccdd0477aa21"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
    "revision": "09471d9698c8ac0962fb5732d61881d6"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
    "revision": "dab18e457efd1f59817d094321119432"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
    "revision": "7c4d5375a03d0df7c987e5a1eca2c805"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
    "revision": "902e94be3fc983138deb499c46e7faca"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
    "revision": "96d3d6dc1885fd2196e67059cf8cdf48"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
    "revision": "df458470b6ba38d672bdc2e0356fa545"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
    "revision": "8c555296122a15c120568c2b55a301bb"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
    "revision": "3ae826f0f8d9c79d7f96a1e567c2f390"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
    "revision": "dc5afb6855c335db11b59c4bf693a72a"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
    "revision": "b2675b4ecdffbe3598e97b71ada21b58"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
    "revision": "2d35bf5c5c67903123403df560ae644f"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
    "revision": "8d0298dd22b8824a4d1864e984654aa9"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
    "revision": "21351ac06b772471f79fd140e0eb76f2"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
    "revision": "ea77c5d6c00fcd092c05797a885f9e6a"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
    "revision": "4210bf48a6b31278ce22ccdd0477aa21"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
    "revision": "09471d9698c8ac0962fb5732d61881d6"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
    "revision": "dab18e457efd1f59817d094321119432"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
    "revision": "7c4d5375a03d0df7c987e5a1eca2c805"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
    "revision": "902e94be3fc983138deb499c46e7faca"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
    "revision": "96d3d6dc1885fd2196e67059cf8cdf48"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
    "revision": "df458470b6ba38d672bdc2e0356fa545"
  }, {
    "url": "windows11/Square44x44Logo.scale-100.png",
    "revision": "4210bf48a6b31278ce22ccdd0477aa21"
  }, {
    "url": "windows11/Square44x44Logo.scale-125.png",
    "revision": "2242fc6248e35d47aeafec9db46677bc"
  }, {
    "url": "windows11/Square44x44Logo.scale-150.png",
    "revision": "e21af6f275a5c929613dbec6a14045ce"
  }, {
    "url": "windows11/Square44x44Logo.scale-200.png",
    "revision": "80d7ec32c3ef7f7e09790554b6af908d"
  }, {
    "url": "windows11/Square44x44Logo.scale-400.png",
    "revision": "38445267723e62737dc66c00de0b822a"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-16.png",
    "revision": "8c555296122a15c120568c2b55a301bb"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-20.png",
    "revision": "3ae826f0f8d9c79d7f96a1e567c2f390"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-24.png",
    "revision": "dc5afb6855c335db11b59c4bf693a72a"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-256.png",
    "revision": "b2675b4ecdffbe3598e97b71ada21b58"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-30.png",
    "revision": "2d35bf5c5c67903123403df560ae644f"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-32.png",
    "revision": "8d0298dd22b8824a4d1864e984654aa9"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-36.png",
    "revision": "21351ac06b772471f79fd140e0eb76f2"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-40.png",
    "revision": "ea77c5d6c00fcd092c05797a885f9e6a"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-44.png",
    "revision": "4210bf48a6b31278ce22ccdd0477aa21"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-48.png",
    "revision": "09471d9698c8ac0962fb5732d61881d6"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-60.png",
    "revision": "dab18e457efd1f59817d094321119432"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-64.png",
    "revision": "7c4d5375a03d0df7c987e5a1eca2c805"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-72.png",
    "revision": "902e94be3fc983138deb499c46e7faca"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-80.png",
    "revision": "96d3d6dc1885fd2196e67059cf8cdf48"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-96.png",
    "revision": "df458470b6ba38d672bdc2e0356fa545"
  }, {
    "url": "windows11/StoreLogo.scale-100.png",
    "revision": "6037c77e6e5eea57513fcb0fb2dc625f"
  }, {
    "url": "windows11/StoreLogo.scale-125.png",
    "revision": "2576e3aadde066aaeb2f8cf6abd99499"
  }, {
    "url": "windows11/StoreLogo.scale-150.png",
    "revision": "9612bb45336205243c6d3870520bb245"
  }, {
    "url": "windows11/StoreLogo.scale-200.png",
    "revision": "949029648616d5da0c151e9dbadb5a93"
  }, {
    "url": "windows11/StoreLogo.scale-400.png",
    "revision": "fe46e61877dd8e86f623a516ef2df8ad"
  }, {
    "url": "windows11/Wide310x150Logo.scale-100.png",
    "revision": "4188359d9433ca4dea99508a8647137c"
  }, {
    "url": "windows11/Wide310x150Logo.scale-125.png",
    "revision": "99a680e95b1feed9dff3f1ccf68a1b79"
  }, {
    "url": "windows11/Wide310x150Logo.scale-150.png",
    "revision": "3f3c6060108dc717204d46260614be1a"
  }, {
    "url": "windows11/Wide310x150Logo.scale-200.png",
    "revision": "4616d1f924a459e78552d905ba1d739f"
  }, {
    "url": "windows11/Wide310x150Logo.scale-400.png",
    "revision": "70119788c6ae9828922defd19f0b62ea"
  }, {
    "url": "windows11/SmallTile.scale-100.png",
    "revision": "0ec419677496e65c262937206bbde47c"
  }, {
    "url": "windows11/SmallTile.scale-125.png",
    "revision": "2f17b06917d95cdf48db0fe981e048bf"
  }, {
    "url": "windows11/SmallTile.scale-150.png",
    "revision": "9226aae7d3b618f4b70c706abd4489c3"
  }, {
    "url": "windows11/SmallTile.scale-200.png",
    "revision": "0a9693b615f55c696f2d843b3d46f929"
  }, {
    "url": "windows11/SmallTile.scale-400.png",
    "revision": "213bb0f4b229cd71713be0a345eba8d9"
  }, {
    "url": "windows11/Square150x150Logo.scale-100.png",
    "revision": "cb7a710974682260f1bfe2358c7d9862"
  }, {
    "url": "windows11/Square150x150Logo.scale-125.png",
    "revision": "66d809a1861975b06e8fd1a5177f072b"
  }, {
    "url": "windows11/Square150x150Logo.scale-150.png",
    "revision": "e88d2669aa448abcff72a4a23af62d9a"
  }, {
    "url": "windows11/Square150x150Logo.scale-200.png",
    "revision": "57dc162de58ebb861b23db76f479f4ca"
  }, {
    "url": "windows11/Square150x150Logo.scale-400.png",
    "revision": "407e0b00c5be5aeef0aaecf2db31eaf1"
  }, {
    "url": "windows11/Wide310x150Logo.scale-100.png",
    "revision": "4188359d9433ca4dea99508a8647137c"
  }, {
    "url": "windows11/Wide310x150Logo.scale-125.png",
    "revision": "99a680e95b1feed9dff3f1ccf68a1b79"
  }, {
    "url": "windows11/Wide310x150Logo.scale-150.png",
    "revision": "3f3c6060108dc717204d46260614be1a"
  }, {
    "url": "windows11/Wide310x150Logo.scale-200.png",
    "revision": "4616d1f924a459e78552d905ba1d739f"
  }, {
    "url": "windows11/Wide310x150Logo.scale-400.png",
    "revision": "70119788c6ae9828922defd19f0b62ea"
  }, {
    "url": "windows11/LargeTile.scale-100.png",
    "revision": "d20747c2a3abd15ec7f1a47e2309d272"
  }, {
    "url": "windows11/LargeTile.scale-125.png",
    "revision": "133710e0063ed72fd7c43735c94ce383"
  }, {
    "url": "windows11/LargeTile.scale-150.png",
    "revision": "d0ea668699d46c528bb73536a084c751"
  }, {
    "url": "windows11/LargeTile.scale-200.png",
    "revision": "f6eb9692f720547378173b18d0ee272f"
  }, {
    "url": "windows11/LargeTile.scale-400.png",
    "revision": "5740243269666308c58df9693c5a2685"
  }, {
    "url": "windows11/Square44x44Logo.scale-100.png",
    "revision": "4210bf48a6b31278ce22ccdd0477aa21"
  }, {
    "url": "windows11/Square44x44Logo.scale-125.png",
    "revision": "2242fc6248e35d47aeafec9db46677bc"
  }, {
    "url": "windows11/Square44x44Logo.scale-150.png",
    "revision": "e21af6f275a5c929613dbec6a14045ce"
  }, {
    "url": "windows11/Square44x44Logo.scale-200.png",
    "revision": "80d7ec32c3ef7f7e09790554b6af908d"
  }, {
    "url": "windows11/Square44x44Logo.scale-400.png",
    "revision": "38445267723e62737dc66c00de0b822a"
  }, {
    "url": "windows11/StoreLogo.scale-100.png",
    "revision": "6037c77e6e5eea57513fcb0fb2dc625f"
  }, {
    "url": "windows11/StoreLogo.scale-125.png",
    "revision": "2576e3aadde066aaeb2f8cf6abd99499"
  }, {
    "url": "windows11/StoreLogo.scale-150.png",
    "revision": "9612bb45336205243c6d3870520bb245"
  }, {
    "url": "windows11/StoreLogo.scale-200.png",
    "revision": "949029648616d5da0c151e9dbadb5a93"
  }, {
    "url": "windows11/StoreLogo.scale-400.png",
    "revision": "fe46e61877dd8e86f623a516ef2df8ad"
  }, {
    "url": "windows11/SplashScreen.scale-100.png",
    "revision": "4616d1f924a459e78552d905ba1d739f"
  }, {
    "url": "windows11/SplashScreen.scale-125.png",
    "revision": "0c1a9b06f60b94155f331282e4787211"
  }, {
    "url": "windows11/SplashScreen.scale-150.png",
    "revision": "6a41cabe095e8fa86263bfe5acb170c4"
  }, {
    "url": "windows11/SplashScreen.scale-200.png",
    "revision": "70119788c6ae9828922defd19f0b62ea"
  }, {
    "url": "windows11/SplashScreen.scale-400.png",
    "revision": "d0ff129245deeb5cf4fed83be2115293"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-16.png",
    "revision": "8c555296122a15c120568c2b55a301bb"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-20.png",
    "revision": "3ae826f0f8d9c79d7f96a1e567c2f390"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-24.png",
    "revision": "dc5afb6855c335db11b59c4bf693a72a"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-30.png",
    "revision": "2d35bf5c5c67903123403df560ae644f"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-32.png",
    "revision": "8d0298dd22b8824a4d1864e984654aa9"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-36.png",
    "revision": "21351ac06b772471f79fd140e0eb76f2"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-40.png",
    "revision": "ea77c5d6c00fcd092c05797a885f9e6a"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-44.png",
    "revision": "4210bf48a6b31278ce22ccdd0477aa21"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-48.png",
    "revision": "09471d9698c8ac0962fb5732d61881d6"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-60.png",
    "revision": "dab18e457efd1f59817d094321119432"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-64.png",
    "revision": "7c4d5375a03d0df7c987e5a1eca2c805"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-72.png",
    "revision": "902e94be3fc983138deb499c46e7faca"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-80.png",
    "revision": "96d3d6dc1885fd2196e67059cf8cdf48"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-96.png",
    "revision": "df458470b6ba38d672bdc2e0356fa545"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-256.png",
    "revision": "b2675b4ecdffbe3598e97b71ada21b58"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
    "revision": "8c555296122a15c120568c2b55a301bb"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
    "revision": "3ae826f0f8d9c79d7f96a1e567c2f390"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
    "revision": "dc5afb6855c335db11b59c4bf693a72a"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
    "revision": "2d35bf5c5c67903123403df560ae644f"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
    "revision": "8d0298dd22b8824a4d1864e984654aa9"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
    "revision": "21351ac06b772471f79fd140e0eb76f2"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
    "revision": "ea77c5d6c00fcd092c05797a885f9e6a"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
    "revision": "4210bf48a6b31278ce22ccdd0477aa21"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
    "revision": "09471d9698c8ac0962fb5732d61881d6"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
    "revision": "dab18e457efd1f59817d094321119432"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
    "revision": "7c4d5375a03d0df7c987e5a1eca2c805"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
    "revision": "902e94be3fc983138deb499c46e7faca"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
    "revision": "96d3d6dc1885fd2196e67059cf8cdf48"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
    "revision": "df458470b6ba38d672bdc2e0356fa545"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
    "revision": "b2675b4ecdffbe3598e97b71ada21b58"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
    "revision": "8c555296122a15c120568c2b55a301bb"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
    "revision": "3ae826f0f8d9c79d7f96a1e567c2f390"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
    "revision": "dc5afb6855c335db11b59c4bf693a72a"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
    "revision": "2d35bf5c5c67903123403df560ae644f"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
    "revision": "8d0298dd22b8824a4d1864e984654aa9"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
    "revision": "21351ac06b772471f79fd140e0eb76f2"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
    "revision": "ea77c5d6c00fcd092c05797a885f9e6a"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
    "revision": "4210bf48a6b31278ce22ccdd0477aa21"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
    "revision": "09471d9698c8ac0962fb5732d61881d6"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
    "revision": "dab18e457efd1f59817d094321119432"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
    "revision": "7c4d5375a03d0df7c987e5a1eca2c805"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
    "revision": "902e94be3fc983138deb499c46e7faca"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
    "revision": "96d3d6dc1885fd2196e67059cf8cdf48"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
    "revision": "df458470b6ba38d672bdc2e0356fa545"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
    "revision": "b2675b4ecdffbe3598e97b71ada21b58"
  }, {
    "url": "android/android-launchericon-512-512.png",
    "revision": "d87753c957031474b1fc44fe4d739f77"
  }, {
    "url": "android/android-launchericon-192-192.png",
    "revision": "de50ea08db6264fccdf4c851726f5de5"
  }, {
    "url": "android/android-launchericon-144-144.png",
    "revision": "e7c9b1d8dcb39ffb7da8d7f50bd73291"
  }, {
    "url": "android/android-launchericon-96-96.png",
    "revision": "c1ffccc099286025a6ffc4e132c484f3"
  }, {
    "url": "android/android-launchericon-72-72.png",
    "revision": "e314217fe6be0c832be703ff2d406542"
  }, {
    "url": "android/android-launchericon-48-48.png",
    "revision": "fee696f5a4c5181d1fc3cc4f5c1c11b6"
  }, {
    "url": "ios/16.png",
    "revision": "2b1f6ace84fce1e0bc5f580b7c671789"
  }, {
    "url": "ios/20.png",
    "revision": "5cd6b70cef7654b94a0a27a43b93ce38"
  }, {
    "url": "ios/29.png",
    "revision": "c1981958aa8ac398c47d8cbbd853df39"
  }, {
    "url": "ios/32.png",
    "revision": "691bf4d877d5c0587fdd8099aa52c132"
  }, {
    "url": "ios/40.png",
    "revision": "5080df3e249b7efceed5f52ed93901d3"
  }, {
    "url": "ios/50.png",
    "revision": "6037c77e6e5eea57513fcb0fb2dc625f"
  }, {
    "url": "ios/57.png",
    "revision": "90553282bb0d534109dbbec0607e08b5"
  }, {
    "url": "ios/58.png",
    "revision": "da5dc74ccac842dbb8968875fbe4b3d1"
  }, {
    "url": "ios/60.png",
    "revision": "39df67350943fe84fa6a97242a5dbd0c"
  }, {
    "url": "ios/64.png",
    "revision": "35873014d84fa16acd3cdf4ac080981f"
  }, {
    "url": "ios/72.png",
    "revision": "e314217fe6be0c832be703ff2d406542"
  }, {
    "url": "ios/76.png",
    "revision": "f645fecff335185311863a29fd25fdf8"
  }, {
    "url": "ios/80.png",
    "revision": "b64404b468b9d0227c74fa3119aa718c"
  }, {
    "url": "ios/87.png",
    "revision": "e229063b76ccf2a70921f8a0539791f9"
  }, {
    "url": "ios/100.png",
    "revision": "949029648616d5da0c151e9dbadb5a93"
  }, {
    "url": "ios/114.png",
    "revision": "25c14144b93bba5859b62e3d589b555c"
  }, {
    "url": "ios/120.png",
    "revision": "58ce2b1174f7ce85ad32a83176b9006c"
  }, {
    "url": "ios/128.png",
    "revision": "91c1346177c6ff8d839eb66b3e0471a2"
  }, {
    "url": "ios/144.png",
    "revision": "e7c9b1d8dcb39ffb7da8d7f50bd73291"
  }, {
    "url": "ios/152.png",
    "revision": "60778de512c7ce80397d0b21d605e12d"
  }, {
    "url": "ios/167.png",
    "revision": "506cade668f26bb45c234ba55869b69b"
  }, {
    "url": "ios/180.png",
    "revision": "500650c179558cf4c34099d728d0515d"
  }, {
    "url": "ios/192.png",
    "revision": "de50ea08db6264fccdf4c851726f5de5"
  }, {
    "url": "ios/256.png",
    "revision": "3ba885b1b80e71121e6fe9e7c0416831"
  }, {
    "url": "ios/512.png",
    "revision": "d87753c957031474b1fc44fe4d739f77"
  }, {
    "url": "ios/1024.png",
    "revision": "3d4f8432e5e804c9f6025552b97564b0"
  }, {
    "url": "manifest.webmanifest",
    "revision": "68a7111d069d28fd15d9a1bf17838c51"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));

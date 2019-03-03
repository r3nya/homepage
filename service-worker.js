/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "apple-touch-icon.6d55c191.png",
    "revision": "c0533cfeb78081e10f3bdc9f0355559d"
  },
  {
    "url": "favicon-16x16.96afa5a2.png",
    "revision": "c1af262f31a83138f28e1dc25a8edd55"
  },
  {
    "url": "favicon-32x32.5162115c.png",
    "revision": "545e503dd5cbfe3c69e49530645ee3b5"
  },
  {
    "url": "index.html",
    "revision": "c42f393bff04820f004678a53bba8929"
  },
  {
    "url": "main.28b48f46.css",
    "revision": "3e43767c20a75fe1e6b135801f2ab1c9"
  },
  {
    "url": "/",
    "revision": "464ba6b6780cdca0addf018388449038"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");

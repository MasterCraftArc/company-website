// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-equip-js": () => import("./../../../src/pages/equip.js" /* webpackChunkName: "component---src-pages-equip-js" */),
  "component---src-pages-equip-old-js": () => import("./../../../src/pages/equipOld.js" /* webpackChunkName: "component---src-pages-equip-old-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-info-js": () => import("./../../../src/pages/info.js" /* webpackChunkName: "component---src-pages-info-js" */)
}


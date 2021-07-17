
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/wadedesir/Documents/Github/website/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/wadedesir/Documents/Github/website/src/pages/contact.js")),
  "component---src-pages-equip-js": preferDefault(require("/Users/wadedesir/Documents/Github/website/src/pages/equip.js")),
  "component---src-pages-equip-old-js": preferDefault(require("/Users/wadedesir/Documents/Github/website/src/pages/equipOld.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/wadedesir/Documents/Github/website/src/pages/index.js")),
  "component---src-pages-info-js": preferDefault(require("/Users/wadedesir/Documents/Github/website/src/pages/info.js"))
}


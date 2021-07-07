
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/wadedesir/Documents/Github/website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/wadedesir/Documents/Github/website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/wadedesir/Documents/Github/website/src/pages/index.js")),
  "component---src-pages-info-js": preferDefault(require("/Users/wadedesir/Documents/Github/website/src/pages/info.js"))
}


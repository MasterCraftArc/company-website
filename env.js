require("dotenv").config();

module.exports = {
  G_UNIVERSAL: process.env.G_UNIVERSAL || "development",
  G_4_TAG: process.env.G_4_TAG || "development",
  TAG_MGR_ID: process.env.TAG_MGR_ID || "development",
  SITEMAP_URL: process.env.SITEMAP_URL || "https://du-develop.com",
};

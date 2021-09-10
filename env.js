require("dotenv").config();

module.exports = {
  TAG_MGR_ID: process.env.TAG_MGR_ID || "development",
  SITEMAP_URL: process.env.SITEMAP_URL || "https://du-develop.com",
};

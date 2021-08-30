require("dotenv").config();

module.exports = {
  G_UNIVERSAL: process.env.G_UNIVERSAL || "development",
  G_4_TAG: process.env.G_4_TAG || "development",
};

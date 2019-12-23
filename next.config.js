const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: config => {
    config.resolve.alias["@components"] = path.resolve(__dirname, "components");
    return config;
  }
};

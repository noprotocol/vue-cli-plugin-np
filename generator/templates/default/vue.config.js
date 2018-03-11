/* global __dirname */
/* eslint-disable import/no-commonjs, import/no-nodejs-modules */

const path = require("path");
const artisan = process.argv.indexOf("--artisan") !== -1;
let target;
if (artisan) {
  target = "http://localhost:8000";
} else {
  target = "http://localhost/" + path.basename(__dirname) + "/public";
}

module.exports = {
  devServer: {
    proxy: {
      "/api": { target }
    }
  }
};

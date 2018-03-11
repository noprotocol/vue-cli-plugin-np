module.exports = (api, opts, rootOpts) => {
  const fs = require("fs");
  const rimraf = require("rimraf");

  api.extendPackage({
    scripts: {
      dev: "vue-cli-service serve --open"
    }
  });

  api.extendPackage({
    devDependencies: {
      eslint: "^4.18.2",
      "eslint-config-esnext": "^2.0.0",
      "eslint-config-prettier": "^2.9.0",
      "eslint-config-recommended": "^2.0.0",
      "eslint-plugin-babel": "^4.1.2",
      "eslint-plugin-import": "^2.9.0",
      "eslint-plugin-only-warn": "^1.0.1",
      "eslint-plugin-prettier": "^2.6.0",
      "eslint-plugin-vue": "^4.3.0"
    }
  });

  api.extendPackage({
    babel: {
      env: {
        test: {
          plugins: ["babel-plugin-transform-es2015-modules-commonjs"]
        }
      }
    }
  });

  api.extendPackage({
    eslintConfig: {
      env: {
        browser: true,
        jest: true
      },
      parserOptions: {
        parser: "babel-eslint"
      },
      extends: ["recommended/esnext", "plugin:vue/recommended", "prettier"],
      plugins: ["vue", "only-warn"],
      rules: {
        "vue/max-attributes-per-line": 0
      },
      globals: {
        process: true
      }
    }
  });

  api.extendPackage({
    jest: {
      roots: ["src"]
    }
  });

  api.render("./templates/default");

  rimraf(api.resolve("./src/views"), () => {});
  rimraf(api.resolve("./src/store.js"), () => {});
  rimraf(api.resolve("./tests/unit"), () => {});
};

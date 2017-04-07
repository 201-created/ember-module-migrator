module.exports = {
  app: {
    utils: {
      'nested.js': 'nested util',
      'single.js': 'single util',
      'derived-nested.js': 'import NestedUtil from "./nested";',
      'derived-single.js': 'import SingleUtil from "./single";'
    },
    routes: {
      'application.js': 'import NestedUtil from "my-app/app/utils/nested"; import SingleUtil from "my-app/app/utils/single";',
      'index.js': 'import ApplicationRoute from "./application";',
      post: {
        'index.js': 'import ApplicationRoute from "../application";'
      }
    }
  },
  tests: {
    unit: {
      utils: {
        'nested-test.js': 'nested util test'
      }
    }
  }
};

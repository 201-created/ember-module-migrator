module.exports = {
  src: {
    ui: {
      routes: {
        'application.js': 'import NestedUtil from "my-app/src/ui/utils/nested/util"; import SingleUtil from "my-app/src/ui/utils/single";',
        'index.js': 'import ApplicationRoute from "./application";',
        post: {
          'index.js': 'import ApplicationRoute from "../application";'
        }
      }
    },
    utils: {
      'derived-nested.js': 'import NestedUtil from "./nested/util";',
      'derived-single.js': 'import SingleUtil from "./single";',
      nested: {
        'util.js': 'nested util',
        'util-unit-test.js': 'nested util test'
      },
      'single.js': 'single util'
    }
  }
};

module.exports = {
  src: {
    data: {
      application: {
        'model.js': '//app model ss',
        'adapter.js': '// app adapter ss',
      },
      post: {
        'model.js': 'import ApplicationModel from "../application/model";',
        'adapter.js': 'import ApplicationAdapter from "../application/adapter";',
      }
    },
    ui: {
      routes: {
        'application.js': 'import NestedUtil from "../../utils/nested/util"; import SingleUtil from "../../utils/single";',
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

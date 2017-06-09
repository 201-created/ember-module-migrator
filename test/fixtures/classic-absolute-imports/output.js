module.exports = {
  src: {
    data: {
      models: {
        application: {
          'adapter.js': '// application adapter'
        },
        post: {
          'model.js': '// post',
          'adapter.js': 'import ApplicationAdapter from "my-app/src/data/models/application/adapter";'
        }
      }
    },
    ui: {
      routes: {
        'application.js': 'import NestedUtil from "my-app/src/utils/nested/util"; import SingleUtil from "my-app/src/utils/single";'
      }
    },
    utils: {
      nested: {
        'util.js': 'nested util',
        'util-unit-test.js': 'nested util test'
      },
      'single.js': 'single util'
    }
  }
};

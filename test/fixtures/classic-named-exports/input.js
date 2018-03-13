module.exports = {
  app: {
    // ensure we do not rewrite main files
    'app.js': 'export default App',
    'router.js': 'export default Router',
    helpers: {
      'titleize.js': 'import { helper } from \'@ember/component/helper\';\nexport default helper(function() { });',
      'capitalize.js': 'import { helper } from \'@ember/component/helper\';\nexport default helper(function() { });'
    }
  },

  tests: {
    integration: {
      helpers: {
        'capitalize-test.js': '"capitalize helper test"'
      }
    }
  }
};

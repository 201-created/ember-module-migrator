module.exports = {
  src: {
    ui: {
      components: {
        'titleize.js': 'export const helper = helper(function() { });',
        'capitalize': {
          'helper.js': 'export default helper(function() { });',
          'helper-integration-test.js': 'capitalize helper test'
        }
      }
    }
  }
};

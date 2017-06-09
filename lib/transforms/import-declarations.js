function transformer(file, api) {
  var j = api.jscodeshift;

  return j(file.source)
    .find(j.ImportDeclaration)
    .find(j.Literal)
    .forEach(function(path) {
      var importPath = path.value.value + '.js';
      var appName = file.appName;
      var targetFileInfo = file.fileInfos.find(function(f) {

        // Drop app/ prefix from path
        // TODO better would be to store improt path on fileInfo
        var match = f.sourceRelativePath.match(/(app\/)?(.*)/);
        var path = match && match[2] ? match[2] : f.sourceRelativePath;
        path = appName + '/' + path;
        return path === importPath;
      });

      if (!targetFileInfo) {
        // TODO error message
        return;
      }

      var newImportPath = appName + '/' + targetFileInfo.destRelativePath;
      // TODO better way to remove extension
      newImportPath = newImportPath.slice(0, newImportPath.length - 3);
      j(path).replaceWith(j.literal(newImportPath));
    })
    .toSource();

}

module.exports = transformer;

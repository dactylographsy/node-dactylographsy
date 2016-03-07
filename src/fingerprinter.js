var
  path = require('path'),
  fs = require('fs'),
  _ = require('lodash'),
  crypto = require('crypto'),
  FileAnalyzer = require('./file-analyzer');

function Fingerprinter(root, devPaths) {
  this.devPaths = devPaths;
  this.fileAnalyzer = new FileAnalyzer(root);
};

Fingerprinter.prototype.hashFiles = function(files) {
  var
    _that = this,
    _prints = {};

  files.forEach(function(file) {
    var
      _hash = crypto.createHash('sha256'),
      _digest;

    _hash.setEncoding('hex');
    _hash.update(fs.readFileSync(file));

    _digest = _hash.digest('hex');

    _prints[_digest] = {
      hash: _digest,
      file: path.basename(file),
      path: _.difference(
        path.dirname(file).split('/'),
        this.devPaths
      ).join('/'),
      extension: path.extname(file)
    };

    _that.fileAnalyzer.duplicate(file, _digest);
  }, this);

  return _prints;
};

Fingerprinter.prototype.hashManifest = function(manifest) {
  var
    _hash = crypto.createHash('sha256'),
    _digest;

  _hash.setEncoding('hex');
  _hash.update(manifest);

  return _hash.digest('hex');
};

module.exports = Fingerprinter;

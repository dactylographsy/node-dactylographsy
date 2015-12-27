var
  fs = require('fs'),
  Fingerprinter = require('./fingerprinter');

function Persister(packageMeta, root, location, rootUrl, packageUrl) {
  this._packageMeta = packageMeta;
  this._root = root;
  this._location = location;
  this._rootUrl = rootUrl;
  this._packageUrl = packageUrl;

  this.fingerprinter = new Fingerprinter(root, []);
}

Persister.prototype.write = function(hashes) {
  var manifest = {};

  manifest.package = this._packageMeta;
  manifest.hashes = hashes;
  manifest.rootUrl = this._rootUrl;
  manifest.packageUrl = this._packageUrl;
  manifest.version = this.fingerprinter.hashManifest(JSON.stringify(manifest));

  var manifestAsJson = JSON.stringify(manifest, null, 2);

  fs.writeFileSync(this._root + '/' + this._location, manifestAsJson);

  return manifestAsJson;
};

Persister.prototype.read = function() {
  var json = fs.readFileSync(this._root + '/' + this._location);

  return JSON.parse(json);
};

module.exports = Persister;

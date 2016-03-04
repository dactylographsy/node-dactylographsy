var expect = require('chai').expect,
    fs = require('fs');

var Fingerprinter = require('../src/fingerprinter'),
    manifest,
    fingerprinter;

manifest = function(file) {
  var
    _hashes = fingerprinter.hashFiles([
      file
    ]);

  return {
    hash: '3838ea0c67133131750683037344bedf562296679eeddd92e271994e45e9cede',
    hashes: _hashes
  };
};

describe('Fingerprinter', function() {
  beforeEach(function() {
    fingerprinter = new Fingerprinter('./test/fixtures', []);
  });

  it('hashes a set of files', function() {
    var
      _manifest = manifest('./test/fixtures/persister.json');
    expect(_manifest.hashes[_manifest.hash].hash).to.equal(_manifest.hash);
    expect(_manifest.hashes[_manifest.hash].extension).to.equal('.json');
    expect(_manifest.hashes[_manifest.hash].file).to.equal('persister.json');
    expect(_manifest.hashes[_manifest.hash].path).to.equal('./test/fixtures');
  });

  it('hashes the overall manifest', function() {
    expect(fingerprinter.hashManifest("{}")).to.be.a.string;
  });
});

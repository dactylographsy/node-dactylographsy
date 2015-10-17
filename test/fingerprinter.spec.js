var expect = require('chai').expect,
    fs = require('fs');

var Fingerprinter = require('../src/fingerprinter'),
    fingerprinter;

describe('Fingerprinter', function() {
  beforeEach(function() {
    fingerprinter = new Fingerprinter('./test/fixtures', []);
  });

  it('hashes a set of files', function() {
    var
      _hashes,
      _file = './test/fixtures/persister.json',
      _hash = '3a90e37bec40e44950bedfa81318520c7af53568';

    _hashes = fingerprinter.hashFiles([
      _file
    ]);

    expect(_hashes[_hash].hash).to.equal(_hash);
    expect(_hashes[_hash].extension).to.equal('.json');
    expect(_hashes[_hash].file).to.equal('persister.json');
    expect(_hashes[_hash].path).to.equal('./test/fixtures');
  });
});

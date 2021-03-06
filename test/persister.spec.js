var expect = require('chai').expect,
    fs = require('fs');

var Persister = require('../src/persister'),
    persister;

var
  root = './test/fixtures',
  rootUrl = 'singularity',
  packageUrl = 'timelapse',
  file = 'persister.json';

describe('Persister', function() {
  before(function() {
  })

  beforeEach(function() {
    persister = new Persister('None', root, file, rootUrl, packageUrl);
  });

  it('creates a file as a store', function() {
    var written = JSON.parse(persister.write({}));

    expect(written).to.be.an.object;
  });

  it('reads from a file as a store', function() {
    var written = JSON.parse(persister.write({
      foo: 'bar'
    }));

    expect(written).to.be.an.object;

    var read = persister.read();

    expect(read.hashes.foo).to.equal('bar');
  });

  it('writes the rootUrl to the manifest', function() {
    var written = JSON.parse(persister.write({
      foo: 'bar'
    }));

    expect(written).to.be.an.object;
    expect(written.rootUrl).to.equal(rootUrl);

    var read = persister.read();

    expect(read.rootUrl).to.equal(rootUrl);
  });

  it('writes the packageUrl to the manifest', function() {
    var written = JSON.parse(persister.write({
      foo: 'bar'
    }));

    expect(written).to.be.an.object;
    expect(written.packageUrl).to.equal(packageUrl);

    var read = persister.read();

    expect(read.packageUrl).to.equal(packageUrl);
  });

  it('writes the version to the manifest', function() {
    var written = JSON.parse(persister.write({
      foo: 'bar'
    }));

    expect(written).to.be.an.object;
    expect(written.version).to.be.a.string;

    var read = persister.read();

    expect(read.version).to.equal(written.version);
  });
});

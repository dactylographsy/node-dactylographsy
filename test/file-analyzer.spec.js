var expect = require('chai').expect,
    fs = require('fs'),
    FileAnalyzer = require('../src/file-analyzer'),
    fileAnalyzer;

describe('FileAnalyzer', function() {
  beforeEach(function() {
    fileAnalyzer = new FileAnalyzer();
  });

  it('returns files and omits directories', function() {
    var glob = [{
      src: ['./test/fixtures']
    }];

    var files = fileAnalyzer.getFiles(glob);

    expect(files).to.have.length(0);
  });
});

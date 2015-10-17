var expect = require('chai').expect,
    fs = require('fs'),
    FileAnalyzer = require('../src/file-analyzer'),
    fileAnalyzer;

describe('FileAnalyzer', () => {
  beforeEach(() => {
    fileAnalyzer = new FileAnalyzer();
  });

  it('returns files and omits directories', () => {
    var glob = [{
      src: ['./test/fixtures']
    }];

    var files = fileAnalyzer.getFiles(glob);

    expect(files).to.have.length(0);
  });
});

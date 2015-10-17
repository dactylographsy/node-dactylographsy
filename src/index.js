var
  fs = require('fs'),
  fileAnalyzer = require('./file-analyzer'),
  fingerprinter = require('./fingerprinter'),
  persister = require('./persister');

module.exports = {
  VERSION: fs.readFileSync('./package.json').version,
  FileAnalyzer: fileAnalyzer,
  Fingerprinter: fingerprinter,
  Persister: persister
}

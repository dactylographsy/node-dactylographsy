/*
* node-dactylographsy
* https://github.com/dactylographsy/node-dactylographsy
*
* Copyright (c) 2016 tdeekens
* Licensed under the MIT license.
*/

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

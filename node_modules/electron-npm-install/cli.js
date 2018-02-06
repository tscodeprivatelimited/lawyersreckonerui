#!/usr/bin/env node

var install = require("./index.js");
var program = require('commander');

var pkg = null;

program
  .version(require("./package.json").version)
  .usage("[options] <directory>")
  .arguments("<directory>")
  .action((dir) => {
    pkg = dir;
  })
  .option("--electron <version>", "Electron version")
  .option("--arch <arch>",        "target architecture")
  .option("--disturl <url>",      "Electron headers URL")
  .option("--cache <path>",       "npm cache directory")
  .parse(process.argv);

install(pkg, {
  electron: program.electron,
  arch: program.arch,
  disturl: program.disturl,
  cache: program.cache
}, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
});

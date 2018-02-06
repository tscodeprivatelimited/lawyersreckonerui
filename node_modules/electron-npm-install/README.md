# electron-npm-install

An API (and command-line tool) to execute `npm install` inside of Electron projects, configured properly to build native dependencies with the right versions of V8 and Node to work in Electron.

## Installation

```
npm install --save electron-npm-install
```
    
## Usage

```js
var install = require('electron-npm-install');
    
install("node_modules/my-native-dep", function(err) {
  if (err) {
    console.log('Installation failed.');
  } else {
    console.log('Installation succeeded!'); 
  }       
});
```
    
## API

### install(pkg, done)

Run `npm install` where:

- `pkg` is the path to the package to install, or `null` for current directory (default: `null`)
- `opts` is an options object (default: `{}`)
  - `opts.electron` is the Electron version (default: local electron's `package.json` `"version"`)
  - `opts.arch` is the target architecture (default: `process.arch`)
  - `opts.disturl` is the URL for downloading Electron headers (default: `"https://atom.io/download/electron"`)
  - `opts.cache` is the path for the cache directory (default: `"~/.electron-npm"`)
- `done` is a function called when the command has finished (default: do nothing)

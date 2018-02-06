var spawn  = require('child_process').spawn;
var cmd    = process.platform === 'win32' ? 'npm.cmd' : 'npm';
var path   = require('path');
var fs     = require('fs');
var mkdirp = require('mkdirp');
var os     = require('os');

function error(msg, cmd, args, opts, stderr, prev) {
  var err = new Error(msg);

  err.cmd     = cmd;
  err.args    = args;
  err.opts    = opts;
  err.stderr  = stderr;

  if (prev) {
    err.prev = prev;
  }

  return err;
}

const possibleModuleNames = ['electron', 'electron-prebuilt', 'electron-prebuilt-compile'];

function locateElectronPrebuilt() {
  let electronPath;

  // Attempt to locate modules by path
  let foundModule = possibleModuleNames.some((moduleName) => {
    electronPath = path.join(__dirname, '..', '..', moduleName);
    return fs.existsSync(electronPath);
  });

  // Return a path if we found one
  if (foundModule) return electronPath;

  // Attempt to locate modules by require
  foundModule = possibleModuleNames.some((moduleName) => {
    try {
      electronPath = path.join(require.resolve(moduleName), '..');
    } catch (e) {
      return false;
    }
    return fs.existsSync(electronPath);
  });

  // Return a path if we found one
  if (foundModule) return electronPath;
  return null;
}

function getElectronVersion() {
  let electron = locateElectronPrebuilt();
  if (!electron) {
    return null;
  }
  return require(path.join(electron, 'package.json')).version;
}

module.exports = function install(pkg, opts, done) {
  if (typeof pkg === 'object') {
    done = opts;
    opts = pkg;
    pkg = null;
  } else if (typeof pkg === 'function') {
    done = pkg;
    opts = {};
    pkg = null;
  }

  if (typeof opts === 'function') {
    done = opts;
    opts = {};
  }

  var stderr = "";

  let electron = opts.electron || getElectronVersion();
  if (!electron) {
    throw new Error('could not determine electron version');
  }

  let arch = opts.arch || process.arch;

  let disturl = opts.disturl || "https://atom.io/download/electron";

  let cache = opts.cache || path.join(os.homedir(), ".electron-npm");

  mkdirp(cache, function(err) {
    if (err) {
      return done(err);
    }

    var spawnOpts = {
      env: Object.assign({}, process.env, {
        npm_config_target: electron,
        npm_config_arch: arch,
        npm_config_target_arch: arch,
        npm_config_disturl: disturl,
        npm_config_runtime: 'electron',
        npm_config_build_from_source: true,
        npm_config_cache: cache
      })
    };

    if (pkg !== null) {
      spawnOpts.cwd = pkg;
    }

    spawn(cmd, ['install'], spawnOpts)
      .on('error', function(prev) {
        done(error("NPM failed due to an error: " + prev, cmd, [], spawnOpts, stderr, prev));
      })
      .on('close', function(code) {
        if (code !== 0 || stderr.indexOf('ERR') !== -1) { //https://github.com/npm/npm/issues/4752
          done(error('NPM exited due to an error.', cmd, [], spawnOpts, stderr));
        } else {
          done(null);
        }
      })
      .stderr.on('data', function(data) {
        stderr += String(data);
      });
  });
};

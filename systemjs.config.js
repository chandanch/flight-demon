/**
 * @description 
 * System configuration for the project
 * Add neccessary third party modules if required 
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    // the output folder, where all the scripts are bundled
    'app':                        'dist', 
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' }
  };
  
  // all the core angular packages are added here
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
  ];

  // Load all the js files indivdually when requested:
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundle all the js files 
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Uses UMD for module packing
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);

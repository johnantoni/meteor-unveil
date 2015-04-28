Package.describe({
  name: 'johnantoni:meteor-unveil',
  summary: 'A very lightweight jQuery plugin to lazy load images',
  version: '0.0.1',
  git: 'https://github.com/johnantoni/meteor-unveil',
  documentation: 'README.md'
});

Package.on_use(function(api) {
  api.add_files([
    'unveil/jquery.unveil.js'
  ], ['client']);
});

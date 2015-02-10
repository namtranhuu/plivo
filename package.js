Package.describe({
    name: 'namthhd:plivo',
    summary: 'Plivo NodeJS helper library for Meteor',
    version: '0.0.1',
    git: 'https://github.com/namtranhuu/plivo'
});

Npm.depends({
    "plivo-node": '0.3.0'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0.3.1');
    api.export('Plivo');
    api.addFiles('plivo.js', 'server');
});

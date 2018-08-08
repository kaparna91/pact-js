var path = require('path');
module.exports = function (config) {
    config.set({
        frameworks: ['browserify', 'jasmine', 'pact'],
        plugins: [
            'karma-*',
            '@pact-foundation/karma-pact'
        ],
        files: [
            'test/**/*.pact.spec.js',
            'test/spec/pact/client.js',
            'node_modules/@pact-foundation/pact/pact-web.js'
        ],
        pact: [{
            port: 1234,
            consumer: 'KarmaJasmineConsumer',
            provider: 'KarmaJasmineProvider',
            logLevel: 'DEBUG',
            log: path.resolve(process.cwd(), 'logs', 'pact.log'),
            dir: path.resolve(process.cwd(), 'pacts')
        }],
        browsers: ['PhantomJS_without_security'],
        customLaunchers: {
            PhantomJS_without_security: {
                base: 'PhantomJS',
                flags: ['--web-security=no']
            }
        }

    })
};
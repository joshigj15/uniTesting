// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();
// Express server
var app = express();
var PORT = process.env.PORT || 4000;
var DIST_FOLDER = join(process.cwd(), 'dist');
var _a = require('./dist/server/main'), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
// Our index.html we'll use as our template
var template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
app.engine('html', function (_, options, callback) {
    renderModuleFactory(AppServerModuleNgFactory, {
        // Our index.html
        document: template,
        url: options.req.url,
        // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
        extraProviders: [
            provideModuleMap(LAZY_MODULE_MAP)
        ]
    }).then(function (html) {
        callback(null, html);
    });
});
app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));
// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
// All regular routes use the Universal engine
app.get('*', function (req, res) {
    res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req: req });
});
// Start up the Node server
app.listen(PORT, function () {
    console.log("Node server listening on http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map
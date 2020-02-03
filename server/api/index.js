const articleApi = require('./article');

function api(server) {
    server.use('/api/v1', articleApi);
}

module.exports = api;
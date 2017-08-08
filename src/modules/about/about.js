'use strict';

const Path = require('path');

const aboutUs = (request, reply) => {
    console.log('request: ', JSON.stringify(request.params.user))
    reply.file(Path.resolve(__dirname, 'about.html'));
}

module.exports = {
    aboutUs
};
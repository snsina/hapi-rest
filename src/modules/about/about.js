'use strict';

const aboutUs = (request, reply) => {
    reply.file('about.html');
}

module.exports = {
    aboutUs
};
'use strict';

const joi = require('joi');
const handlers = require('../modules');

const routes = (server) => [
    {
        path: '/',
        method: 'GET',
        config: {
            handler: handlers.hello.hello.sayHello
        }
    },
    {
        path: '/about/{user}',
        method: 'GET',
        config: {
            handler: handlers.about.about.aboutUs,
            tags: ['about']
        }
    }
];

module.exports = routes;
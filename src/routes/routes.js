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
        path: '/about',
        method: 'GET',
        config: {
            handler: handlers.about.about.aboutUs
        }
    }
];

module.exports = routes;
'use strict';

const joi = require('joi');
const handlers = require('../handlers');

const routes = (server) => [
    {
        path: '/',
        method: 'GET',
        config: {
            handler: handlers.hello.sayHello
        }
    }
];

module.exports = routes;
'use strict';

const joi = require('joi');

const routes = (server) => [
    {
        path: '/',
        method: 'GET',
        config: {
            handler: (req, reply) => {
                reply("hello from inside the routes")
            }
        }
    }
];

module.exports = routes;
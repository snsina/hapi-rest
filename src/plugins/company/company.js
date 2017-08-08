'use strict';

const company = {
    register: function(server, options, next) {
        const plugins = server.plugins;

        server.dependency('printHello', (server, after) => {
            console.log('it happened the dependecy');
            return after();
        });        
        server.route({
            method: 'GET',
            path: '/company',
            handler: function(req, reply) {
                let string = plugins.printHello.toUpper('about our company');
                reply(string);
            }
        });
        next();
    }
};

company.register.attributes = {
    name: 'company',
    version: '1.0.0'
};

module.exports = company;
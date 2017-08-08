'use strict';

const hello = {
    register: function(server, options, next) {
        const toUpper = (param) => {
            return param.toUpperCase();
        }
        server.expose({toUpper: toUpper});
        console.log('Hello printed now');
        next();
    }
};

hello.register.attributes = {
    name: 'printHello'
};

module.exports = hello;
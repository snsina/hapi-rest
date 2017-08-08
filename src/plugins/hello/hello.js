'use strict';

const hello = {
    register: function(register, options, next) {
        console.log('Options: ', JSON.stringify(options))
        next();
    }
};

hello.register.attributes = {
    name: 'hello',
    version: '1.0'
};

module.exports = hello;
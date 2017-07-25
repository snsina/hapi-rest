'use strict';

const sayHello = (req, reply) => {
    reply("Hello from handler module");
};

module.exports = {
    sayHello
}
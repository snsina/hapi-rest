const Hapi = require('hapi');
const routes = require('./src/routes/routes');
const inert = require('inert');

const server = new Hapi.Server();
server.connection({
    port: 3000,
    host: '0.0.0.0'
});

server.register(inert, () => {});

server.route(routes(server));

server.start((err) => {
    if(err) {
        throw err;
    }
    console.log("Server is running at: ", server.info.uri);
})
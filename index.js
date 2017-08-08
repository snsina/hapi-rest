const Hapi = require('hapi');
const routes = require('./src/routes/routes');
const inert = require('inert');
const hello = require('./src/plugins/hello/hello');
const company = require('./src/plugins/company/company');
const printHello = require('./src/plugins/print/hello');
const env = process.env;

const plugins = [
    {
        register: hello,
        options: {
            name: "Hi",
            routes: {
                prefix: '/api/v1'
            },
            once: true
            
        }
    },
    {
        register: printHello
    },
    {
        register: company
    },
    {
        register: inert
    }
];
console.log('env: ', JSON.stringify(env.USER))
const server = new Hapi.Server({
    load: {
        sampleInterval: 1000
    }
});
server.connection({
    port: 3000,
    host: '0.0.0.0'
});

server.register(plugins , () => {});

server.route(routes(server));

server.start((err) => {
    if(err) {
        throw err;
    }
    console.log("Server is running at: ", server.info.uri);
})
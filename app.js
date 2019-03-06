const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi.js');
require('env2')('./.env');
const server =new Hapi.Server();

server.connection({
    port:config.port,
    host:config.host
})
const init = async ()=>{
    server.route([
        ...routesHelloHapi
    ])

    await server.start();
    console.log(`server is running at:${server.info.uri}`)
}
init();
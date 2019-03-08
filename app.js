const Hapi = require('hapi');
require('env2')('./.env');  //【问题】必须放在config前面，否则提供的服务地址会为类似http://DESKTOP-28AU4HV:65169
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi.js');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
const pluginHapiSwagger = require('./plugins/hapi-swagger'); //引入swagger配置模块
const server =new Hapi.Server();

server.connection({
    port:config.port,
    host:config.host
})
const init = async ()=>{
    await server.register([ //在系统中使用hapi-swagger
        ...pluginHapiSwagger
    ])

    server.route([
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders
    ])

    await server.start();
    console.log(`server is running at:${server.info.uri}`)
}
init();
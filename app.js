const Hapi = require('hapi');
const server =new Hapi.Server();

server.connection({
    port:'3000',
    host:'127.0.0.1'
})
const init = async ()=>{
    server.route([
        {
            method:'GET',
            path:'/',
            handler:(req,res)=>{
                res('hello Hapi,Yeah!!!!')
            }
        }
    ])

    await server.start();
    console.log(`server is running at:${server.info.uri}`)
}
init();
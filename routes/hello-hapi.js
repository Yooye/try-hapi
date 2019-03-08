module.exports=[
    {
        method:'GET',
        path:'/',
        handler:(req,res)=>{
            res('hello Hapi,Yeah!!!!!!')
        },
        config:{
            tags:['api','tests'],
            description:'这是一个用以测试hapi运行状态的接口'
        }
    }
]
const todoRouter=require('./todos/todoRouter');

async function v1Router(fastify,options){
    console.log("hello");
    fastify.register(todoRouter,{prefix:'/todos'});
}
module.exports=v1Router;
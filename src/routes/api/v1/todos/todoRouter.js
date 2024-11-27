const { getAlltodos, createTodo, getOne } = require("../../../../controllers/todoController");

async function todoRouter(fastify,options){
 
    fastify.get('/',getAlltodos);
    fastify.post('/',createTodo);
    fastify.get('/:id',getOne);
}
module.exports=todoRouter;
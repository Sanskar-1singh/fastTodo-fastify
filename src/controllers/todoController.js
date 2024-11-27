const fastify = require("fastify");

async function getAlltodos(req,res){
    const {todoService}=this;
    const response=await todoService.getAll();
    return res.status(200).send({response});
}

async function createTodo(req,res){
    const {todoService}=this;
    const response= await todoService.create(req.body.todotext);
     return res.status(201).send({response});
}
async function getOne(req,res){
    const {todoService}=this;
    const response=await todoService.getOne(req.params.id);
    return res.status(200).send({response});
}

module.exports={
    getAlltodos,
    createTodo ,
    getOne
}
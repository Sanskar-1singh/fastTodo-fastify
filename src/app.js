const fp=require('fastify-plugin');

const apiRouter=require('./routes/api/apiRouter');
const todoService = require('./services/todoService');
const todoRepository=require('./repsoitory/todorepo');
const db = require('./db');

async function app(fastify,options){

   await fastify.register(db);
   await fastify.register(todoRepository);
   await fastify.register(todoService);
   await fastify.register(apiRouter,{prefix:'/api'});
}

module.exports=fp(app);
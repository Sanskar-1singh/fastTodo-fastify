const {PORT}=require('./config/serverConfig')
const fastify=require('fastify')({logger:true});
const app=require('./app');
fastify.register(app);

fastify.listen({port:PORT},(err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`server is up at port ${PORT}`);
})
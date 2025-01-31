import express from 'express';
import connectToMongoDB from './connect.js';
import todoRoutes from './routes/todo.js';
import cors from 'cors'
const app=express();
const port=9000

connectToMongoDB().then((connectMessage)=>{
    console.log(connectMessage);
    app.use(express.json());  // ✅ Ensure JSON parsing middleware is applied
    app.use(cors())
    app.use(express.json());
    app.use(todoRoutes)
    
    app.listen(port,()=>{
        console.log("Server running on port: "+port)
    })
}).catch((e)=>{
    console.log("Error: "+e)
})
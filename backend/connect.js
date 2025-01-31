
import mongoose from "mongoose";

const connectToMongoDB=()=>mongoose.connect('mongodb+srv://krishna:alkjhfdlkadajkhdsfja@cluster0.fc3ri.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0%22').then(async()=>{
    return Promise.resolve("Connected to MongoDB")
}).catch((e)=>{
    return Promise.reject(e)
})


export default connectToMongoDB
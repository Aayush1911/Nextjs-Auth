import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection=mongoose.connection
        connection.on('connected',()=>{
            console.log('MongoDB connected');
        })
        connection.on('error',(err)=>{
            console.log('MongoDB connection error , please make sure db is up and running'+err);
            process.exit()
        })
    }catch(err){
        console.log('Something gets wrong in connecting to DB');
        console.log(err);
    }
}

import mongoose from 'mongoose';


const connectToDatabase = async () => {
  
    const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/'; 
  
};

export { connectToDatabase };




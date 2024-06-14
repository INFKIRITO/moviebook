import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://aman970909:Singh234&@cluster0.n6emq7o.mongodb.net/moviebook?retryWrites=true&w=majority&appName=Cluster0');
    console.log(
      `Connected To MongoDB Database ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error in MongoDB: ${error}`);
  }
};

export default connectDB;



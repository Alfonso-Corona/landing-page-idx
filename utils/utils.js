import mongoose from "mongoose";

const connection = {};

const connetcToDb = async () => {
  try {
    if(connection.isConnected){
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("New connection");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export default connetcToDb;
//import mongoose from "mongoose";
const { mongoose } = require("mongoose");

const connection = {};

const connetcToDb = async () => {
  try {
    if(connection.isConnected){
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    console.log('pasa por aca', db);
    connection.isConnected = db.connections[0].readyState;
    console.log("New connection");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export default connetcToDb;
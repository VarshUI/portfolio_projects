import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://varsh98bm:VARSH98@cluster0.9yxa9.mongodb.net/todos"
); //connection to the db

//connecting to the db
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
}); // defining the schemas for the data which we will enter

const todo = mongoose.model("todos", todoSchema); //export the model so that you can use it in other parts of your application
export { todo };

import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://varsh98bm:VARSH98@cluster0.9yxa9.mongodb.net/todos"
);

//connecting to the db
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
}); // defining the schema

const todo = mongoose.model("todos", todoSchema); //export the model so that you can use it in other parts of your application
export { todo };

import express from "express"; //initializes an empty express app
// const { createTodo, updateTodo } = require("./types");
// const { todo } = require("./db");
import { createTodo, updateTodo } from "./types.js"; // Use .js extension for ES modules
import { todo } from "./db.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json()); //(MIDDLEWARE)makes sure post end point works and you can parse the body if it's empty json
//middleware defines the lifestyle of an http request
//middleware in express is a function that has the access to the request, response and the next middleware function is the request-response cycle
//it can perform tasks like logging, authentication, validation(this is where zod is used), error handling

//body{
// title:string;
// desc: string;
//}
app.post("/todo", async function (req, res) {
  //post handler
  // route created
  const createPayload = req.body; // grabs the request assuming it is json
  const parsedPayload = createTodo.safeParse(createPayload); //uses Zod validation safeParse() from the schema createTodo. safeParse() returns an object if the validation is passed or failed.
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  }); //creates the new todo with the data entered by the user
  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async function (req, res) {
  //inside route handler
  const todos = await todo.find({}); //await while you get it from the db
  res.json({
    msg: "todo created here",
  });
});
app.put("/completed", async function (req, res) {
  // route created. put is used to update existing resources
  const updatePayload = req.body;
  const updateParsedPayload = updateTodo.safe(updatePayload);
  if (!updateParsedPayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todos marked as completed",
  });
});
app.listen(3000);

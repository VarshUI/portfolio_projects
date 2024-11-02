import { z } from "zod"; // helps to define schemas which checks if the data meets the expected structure and types
//difference b/w Zod and mongoose is that mongoose is used for mongoDB and zod is used for application level before the data reaches the DB
const createTodo = z.object({
  title: z.string(),
  description: z.string(), //we do not need completed object because we wouldn't give the status initially it will be false
});
const updateTodo = z.object({
  id: z.string(),
});

export { createTodo, updateTodo };

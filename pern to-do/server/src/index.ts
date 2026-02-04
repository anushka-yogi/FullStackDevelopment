import express from "express";
import cors from "cors"; // allow frontend
import { PrismaClient } from "@prisma/client"; // to communicate with database
const app = express();
const prisma = new PrismaClient(); // Database Manager (Client) create kiya
app.use(express.json()); // allow server to read json
app.use(cors()); // Frontend (React) ko connect karne ki permission
// 1. get all to-do's
app.get("/todos", async (req, res) => {
  const allTodos = await prisma.todo.findMany({
    orderBy: { createdAt: "asc" },
  }); // all todos in database
  res.json(allTodos);
});
// 2. save new todo
app.post("/todos", async (req, res) => {
  const { task } = req.body; // get the task user sent
  try {
    const newTodo = await prisma.todo.create({
      data: {
        task: task,
      },
    });
    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create to-do" });
  }
});
// 3. update completion status or update task title
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  const dataToUpdate: { task?: string; completed?: boolean } = {};
  if (task !== undefined) {
    dataToUpdate.task = task;
  }
  if (completed !== undefined) {
    dataToUpdate.completed = completed;
  }
  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: parseInt(id),
      },
      data: dataToUpdate,
    });
    res.json(updatedTodo);
  } catch (error) {
    res.status(404).json({ error: "Todo not found or invalid ID." });
  }
});
// 4. delete a todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.todo.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Todo not found or invalid Id" });
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

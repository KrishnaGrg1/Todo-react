import { Router } from "express";
import todoController from "../controllers/todo.js";

const todoRoutes=Router();

todoRoutes.post('/add',todoController.add);

todoRoutes.get('/todos',todoController.get);

todoRoutes.put('/completed',todoController.updateTodo);

export default todoRoutes;
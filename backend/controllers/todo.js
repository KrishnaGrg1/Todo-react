import Todo from "../models/todo.js";
import todoValidation from "../validations/todo.js";

const add = async (req, res) => {
  try {
    const { title, description } = req.body;

    const ValidationResult = todoValidation.addTodo.validate(req.body, {
      abortEarly: false
    });
    if (ValidationResult.error) {
      throw new Error("Validation error:" + ValidationResult.error.message);
    }
    const todo = await Todo.create({ title, description });

    return res.status(201).json({
      message: "Successfully created todo",
      todo
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

const get = async (req, res) => {
  try {
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.body;
    const ValidationResult = todoValidation.updateTodo.validate(req.body, {
      abortEarly: false
    });
    if (ValidationResult.error) {
      throw new Error("Validation error: " + ValidationResult.error);
    }
    
    const existingTodo = await Todo.findOne({_id:req.body.id});
    if (!existingTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    if(existingTodo.completed===true){
        throw new Error ("Todo is already completed!")
    }

    existingTodo.completed = true; // Dynamically update based on input
    await existingTodo.save();

    return res.status(200).json({
      message: "Todo successfully updated!",
      todo: existingTodo
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

const todoController = { add, updateTodo, get };

export default todoController;

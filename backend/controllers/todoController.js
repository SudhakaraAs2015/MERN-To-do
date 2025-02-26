const Todo = require("../model/Todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  const todo = new Todo({
    title,
  });
  try {
    const saveTodo = await todo.save();
    res.status(201).json(saveTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTodo =async(req,res)=>{
    const {id} = req.params;

    try{
      await Todo.findByIdAndDelete(id)
       res.json({message: "Todo Deleted"})
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};

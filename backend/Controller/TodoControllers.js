const Todomodel = require("../Models/TodoModel");

const addToDo = async (req, res) => {
    try {
       console.log(req.body);
       
        const { todo } = req.body;

     
        if (!todo) {
            return res.status(400).json({ error: "Todo is required" });
        }


        const newTodo = new Todomodel({
            todotitle: todo 
        });

       
        const saved = await newTodo.save();

      
        if (saved) {
            return res.status(200).json({ message: "Todo added successfully", todo: saved });
        } else {
            return res.status(400).json({ error: "Failed to add todo" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error", details: error.message });
    }
};

const listTodos =async (req,res)=>{
try {
    const todos = await Todomodel.find()
    return res.status(200).json(todos)
} catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error", details: error.message });
}
}

module.exports = {
    addToDo,
    listTodos
};

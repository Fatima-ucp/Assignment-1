const express = require('express');
const app = express();
const port = 5500;

app.use(express.json());

//Tasks array
let tasks = [
    {
        id: 1,
        taskName: "Learn Express.js"
    },
    {
        id: 2,
        taskName: "Study API testing"
    }
];

//POST request to add a new task
app.post('/addTask', (req,res)=>{
    const {taskName} = req.body;

    if(!taskName){
        return
        res.status(400).json({error:'Task name is required'});
    }

    let newId = 1;
    if(tasks.length> 0){
        let maxId= 0;
        tasks.forEach(task => {
            if(task.id > maxId) 
                maxId  = task.id;
        });
        newId = maxId + 1;
    }

    const newTask = {
        id: newId, taskName
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

//GET endpoint to retrieve all tasks
app.get('/tasks', (req,res) => {
    res.json(tasks);
});

//DELETE endpoint to remove  task by ID
app.delete('/task/:id', (req,res) => {
    const taskId = parseInt(req.params.id);
    const initialLength = tasks.length;

    tasks = tasks.filter(task => task.id !== taskId);
    if(tasks.length === initialLength) {
        return 
        res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
});

//Start the server
app.listen(port, () => {
    console.log("Server running on PORT:", port);
});
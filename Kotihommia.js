import React, {useState, useEffect} from 'react';

//apufunktio Local Storagen käsittelyyn
const loadTasksFromStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveTasksToStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const App = () => {
    const [tasks, setTasks] = useState(loadTasksFromStorage);

    //Päivitetään Local Storage aina kun tehtäviä päivitetään
    useEffect(() => {
        saveTasksToStorage(tasks);
    }, [tasks]);

    //Tehtävän tilan vaihtaminen
    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        setTasks(newTasks);
    };

    //Tehtävän lisääminen
    const addTask = (taskName) => {
        setTasks([...tasks, {name: taskName, done: false}]);
    };

return (
<div>
    <h1>Kotityölista</h1>
    <ul>
        {tasks.map((task, index) => (
         <li key={index}>
            <label>
                <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(index)}
                />
                {task.name}
            </label>
         </li>   
        ))}
    </ul>
    <button onClick={() => addTask('Uusi tehtävä')}>Lisää uusi tehtävä</button>
</div>
);
};

export default App;


import React, { useState, useEffect } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Replace with your Django API URL if different
        const apiUrl = 'http://localhost:8000/todos/';

        fetch(apiUrl)
            .then(response => {
                // Check if the request was successful
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;







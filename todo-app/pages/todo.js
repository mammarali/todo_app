import { useState } from "react";
import styles from '@/styles/Home.module.css'


export default function Todo() {


    const [userInput, setUserInput] = useState(''); // Initializes input state of text box and saves as userInput.
    const [todoList, setTodoList] = useState([]); // Initializes input state of Todo List and saves as todoList.

    // Gets user input from text box and saves as userInput
    const inputTodo = (e) => {
        e.preventDefault();

        setUserInput(e.target.value);
    }

    // Gets consecutive user inputs and appends in to a list as todoList 
    const addTodo = (e) => {
        e.preventDefault();

        setTodoList([
            userInput,
            ...todoList
        ])
        setUserInput('')
    }

    // Compares Index of  "Delete button" and corresponding "Todo Item", and updates the Todo List after deletion of items
    const deleteTodo = (todo) => {
        const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo));

        setTodoList(updatedArr);
    }


    return (
        <>
            {/* Input text box to get user input */}
            <form>
                <input type="text" value={userInput} placeholder='Enter a todo item' onChange={inputTodo}></input>
                <button onClick={addTodo}>Add</button>


            </form>

            <ul style={{ listStyleType: "none", padding: 0 }}>
                {/* 1. This block of code does the follwowing tasks
                 1. Checks to see if the Todo List is empty, then it returns 'Empty String', other wise it returns Unordered list of Todo's from todoList.
                 2. It provides the option for deleting the Todo item 
                 3. It includes CSS Button styling by importing Module.css styles from Style directory */}
                {
                    todoList.length >= 1 ? todoList.map((todo, idx) => {
                        return <li className={styles.li} key={idx}>{todo}
                            <button className={styles.deleteButton} onClick={(e) => {
                                e.preventDefault();
                                deleteTodo(todo);

                            }}>Delete</button>
                        </li>
                    })
                        : ''
                }


            </ul>
        </>
    )




}
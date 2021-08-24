// Import libs
import React, { useState } from 'react';
import { v1 } from 'uuid';

// Import styled components
import { Normalize } from './components/Styles/Normalize';
import { GlobalStyle } from './components/Styles/GlobalStyle';

// Import components
import { Todolist, TodolistItemsType } from './components/Todolist/Todolist';

// Import images
import { ReactComponent as Checkbox } from './images/checkbox.svg';

// Import main styles
import './fonts/fonts.css';
import './main.css';

export const App: React.FC = () => {
	const [ todos, setTodos ] = useState<TodolistItemsType[]>([
		{id: v1(), title: 'Cucumbers', completed: false,},
		{id: v1(), title: 'Tomatoes', completed: true,},
		{id: v1(), title: 'Beets', completed: false,},
		{id: v1(), title: 'Bananas', completed: true,},
		{id: v1(), title: 'Melon', completed: false,},
	]);

	const changeTodoStatus = (id: string) => setTodos(todos.map(todo => todo.id === id ? {
		...todo,
		completed: !todo.completed,
	} : {...todo}));

	const removeTodo = (id: string) => setTodos(todos.filter(todo => todo.id !== id));

	const addTodo = (title: string) => {
		const newTodo: TodolistItemsType = {
			id: v1(),
			title,
			completed: false,
			animation: true,
		};

		setTodos([ newTodo, ...todos ]);

		setTimeout(() => {
			const newTodoCopy = newTodo;
			newTodoCopy.animation = false;

			setTodos([ newTodoCopy, ...todos ]);
		}, 800);

	};

	return (
		<>
			<Normalize />
			<GlobalStyle />
			<Checkbox />
			<Todolist
				title="Grocery list"
				todos={ todos }
				changeTodoStatus={ changeTodoStatus }
				removeTodo={ removeTodo }
				addTodo={ addTodo }
			/>
		</>
	);
};
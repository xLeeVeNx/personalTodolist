// Import libs
import React, { useState } from 'react';
import styled from 'styled-components';
import { v1 } from 'uuid';

// Import styled components
import { Normalize } from './components/Styles/Normalize';
import { GlobalStyle } from './components/Styles/GlobalStyle';

// Import components and types
import { Todolist, TodolistItemsType } from './components/Todolist/Todolist';
import { TodolistInput } from './components/Todolist/TodolistInput/TodolistInput';

// Import images
import { ReactComponent as Checkbox } from './images/checkbox.svg';

// Import main styles
import './fonts/fonts.css';
import './main.css';

// Types
export type filterValueType = 'All' | 'Active' | 'Completed';
type todosType = {
	[key: string]: TodolistItemsType[],
};
type todolistType = {
	id: string,
	title: string,
	filterValue: filterValueType,
	animation?: boolean,
};

// Styled components
const TodoLists = styled.div`
  margin: 50px 0 80px;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 400px);
  grid-gap: 30px 40px;
`;
const TodolistBox = styled.div`
  margin: 80px auto 0;

  max-width: 400px;
`;

// Main code
export const App: React.FC = () => {
	const todolistID_1 = v1();
	const todolistID_2 = v1();

	const [ todos, setTodos ] = useState<todosType>({
		[todolistID_1]: [
			{id: v1(), title: 'Cucumbers', completed: false},
			{id: v1(), title: 'Tomatoes', completed: true},
			{id: v1(), title: 'Beets', completed: false},
			{id: v1(), title: 'Bananas', completed: true},
			{id: v1(), title: 'Melon', completed: false},
		],
		[todolistID_2]: [
			{id: v1(), title: 'JavaScript', completed: true},
			{id: v1(), title: 'React', completed: true},
			{id: v1(), title: 'Redux', completed: false},
			{id: v1(), title: 'TypeScript', completed: true},
			{id: v1(), title: 'Storybook', completed: true},
		],
	});
	const [ todoLists, setTodoLists ] = useState<todolistType[]>([
		{id: todolistID_1, title: 'Grocery list', filterValue: 'All'},
		{id: todolistID_2, title: 'What to learn', filterValue: 'All'},
	]);

	const removeTodo = (todoID: string) => {
		setTodoLists(todoLists.filter(todolist => todolist.id !== todoID));

		delete todos[todoID];
	};
	const addTodo = (todoTitle: string) => {
		const newTodolist: todolistType = {
			id: v1(),
			title: todoTitle,
			filterValue: 'All',
			animation: true,
		};

		setTodoLists([ newTodolist, ...todoLists ]);
		setTodos({[newTodolist.id]: [], ...todos});

		setTimeout(() => {
			setTodoLists([ {...newTodolist, animation: false}, ...todoLists ]);
		}, 800);
	};
	const editTodoTitle = (todoID: string, newTodoTitle: string) => setTodoLists(todoLists.map(todolist => todolist.id === todoID ? {
		...todolist,
		title: newTodoTitle,
	} : todolist));
	const changeTaskStatus = (todoID: string, taskID: string) => {
		todos[todoID] = todos[todoID].map(task => task.id === taskID ?
			{
				...task,
				completed: !task.completed,
			}
			: task);

		setTodos({...todos});
	};
	const removeTask = (todoID: string, taskID: string) => {
		todos[todoID] = todos[todoID].filter(task => task.id !== taskID);

		setTodos({...todos});
	};
	const addTask = (todoID: string, taskTitle: string) => {
		const newTask: TodolistItemsType = {
			id: v1(),
			title: taskTitle,
			completed: false,
			animation: true,
		};

		todos[todoID] = [ newTask, ...todos[todoID] ];

		setTodos({...todos});

		setTimeout(() => {
			todos[todoID][0].animation = false;

			setTodos({...todos});
		}, 800);

	};
	const editTaskTitle = (todoID: string, taskID: string, newTaskTitle: string) => {
		todos[todoID] = todos[todoID].map(task => task.id === taskID ? {...task, title: newTaskTitle} : task);
		setTodos({...todos});
	};
	const setFilterValue = (todoID: string, filterValue: filterValueType) => setTodoLists(todoLists.map(todolist => todolist.id === todoID ? {
		...todolist,
		filterValue,
	} : todolist));
	const todolistComponents = todoLists.map(todolist => {
		const filteredTasks = todolist.filterValue === 'Active' ? todos[todolist.id].filter(task => !task.completed)
			: todolist.filterValue === 'Completed' ? todos[todolist.id].filter(task => task.completed) : todos[todolist.id];

		return <Todolist
			key={ todolist.id }
			todoID={ todolist.id }
			title={ todolist.title }
			todos={ filteredTasks }
			removeTodo={ removeTodo }
			editTodoTitle={editTodoTitle}
			changeTaskStatus={ changeTaskStatus }
			removeTask={ removeTask }
			addTask={ addTask }
			editTaskTitle={ editTaskTitle }
			filterValue={ todolist.filterValue }
			setFilterValue={ setFilterValue }
			animation={ todolist.animation ? todolist.animation : false }
		/>;
	});

	return (
		<>
			<Normalize />
			<GlobalStyle />
			<Checkbox />
			<TodolistBox>
				<TodolistInput addItem={ addTodo } placeholder="Enter a new todo title" />
			</TodolistBox>
			<TodoLists>
				{
					todolistComponents
				}
			</TodoLists>
		</>
	);
};
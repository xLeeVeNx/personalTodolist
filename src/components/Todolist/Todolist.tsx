// Import react
import React, { useState } from 'react';

// Import styled components
import styled from 'styled-components';

// Import types
import { filterValueType } from '../../App';

// Import components
import { TodolistLogo } from './TodolistLogo';
import { TodolistInput } from './TodolistInput/TodolistInput';
import { TodolistItem } from './TodolistItem/TodolistItem';
import { TodolistFilter } from './TodolistFilter/TodolistFilter';
import { TodolistClose } from './TodolistClose/TodolistClose';
import { TodolistTitle } from './TodolistTitle/TodolistTitle';

const TodoListWrapper = styled.div`
  max-width: 400px;
  width: 100%;
`;
const TodoList = styled.div`
  position: relative;

  padding: 20px 20px 0 20px;

  background-color: #FFFFFF;

  border-radius: 5px;
`;
const TodoListItems = styled.div`
  padding: 10px;
  margin: 0 -10px;

  height: 360px;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    background-color: #FFFFFF;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FFFFFF;
  }
`;

export type TodolistItemsType = {
	id: string,
	title: string,
	completed: boolean,
	animation?: boolean,
};
type TodolistPropsType = {
	todoID: string,
	title: string,
	todos: TodolistItemsType[],
	removeTodo: (todoID: string) => void,
	editTodoTitle: (todoID: string, newTodoTitle: string) => void,
	changeTaskStatus: (todoID: string, taskID: string) => void,
	removeTask: (todoID: string, taskID: string) => void,
	addTask: (todoID: string, taskTitle: string) => void,
	editTaskTitle: (todoID: string, taskID: string, newTaskTitle: string) => void,
	filterValue: filterValueType,
	setFilterValue: (todoID: string, value: filterValueType) => void,
	animation: boolean,
};

export const Todolist: React.FC<TodolistPropsType> = props => {
	const [ deleteTodolist, setDeleteTodolist ] = useState<boolean>(false);

	const addTask = (taskTitle: string) => {
		props.addTask(props.todoID, taskTitle);
	};
	const editTodoTitle = (newTodoTitle: string) => props.editTodoTitle(props.todoID, newTodoTitle);

	return (
		<TodoListWrapper
			className={ `${ deleteTodolist ? 'bounceOutLeft2' : '' } ${ props.animation ? 'bounceInRight' : '' }` }>
			<TodolistLogo />
			<TodolistTitle title={ props.title } editTodoTitle={ editTodoTitle } />
			<TodoList>
				<TodolistFilter todoID={ props.todoID } filterValue={ props.filterValue }
				                setFilterValue={ props.setFilterValue } />
				<TodolistInput addItem={ addTask } placeholder="Enter a new task title" />
				<TodoListItems>
					{
						props.todos.map(todo => <TodolistItem
								key={ todo.id }
								todoID={ props.todoID }
								taskID={ todo.id }
								title={ todo.title }
								completed={ todo.completed }
								changeTaskStatus={ props.changeTaskStatus }
								removeTask={ props.removeTask }
								editTaskTitle={ props.editTaskTitle }
								animation={ todo.animation ? todo.animation : false }
							/>,
						)
					}
				</TodoListItems>
				<TodolistClose todoID={ props.todoID } removeTodo={ props.removeTodo } deleteTodolist={ deleteTodolist }
				               setDeleteTodolist={ setDeleteTodolist } />
			</TodoList>
		</TodoListWrapper>
	);
};
import React from 'react';

import styled from 'styled-components';

import close from '../../../images/close.svg';

const TodoListClose = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;

  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  background-color: #FFFFFF;
  border-radius: 50%;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);

  border: none;
  cursor: pointer;
`;

const TodoListCloseImage = styled.img`
  width: 20px;
  height: 20px;

  object-fit: cover;
`;

type propsType = {
	todoID: string,
	removeTodo: (todoID: string) => void,
	deleteTodolist: boolean,
	setDeleteTodolist: (value: boolean) => void,
}

export const TodolistClose: React.FC<propsType> = props => {
	const removeTodoHandler = () => {
		props.setDeleteTodolist(true);

		setTimeout(() => props.removeTodo(props.todoID), 800);
	}
	return (
		<TodoListClose onClick={removeTodoHandler}>
			<TodoListCloseImage src={ close } alt="Close icon" />
		</TodoListClose>
	);
};
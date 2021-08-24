// Import react
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

// Import styled components
import styled from 'styled-components';

// Import images
import logo from '../../images/logo.svg';
import { TodolistItem } from './TodolistItem';

const TodoListWrapper = styled.div`
  max-width: 400px;
  width: 100%;
`;

const TodoListTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 26px;

  color: #FFFFFF;
  text-align: center;
  
  -webkit-text-stroke: 0.7px #622994;
`;

const TodoListLogo = styled.img`
  margin: 0 auto 5px;

  width: 50px;
  height: 50px;

  object-fit: cover;
`;

const TodoList = styled.div`
  position: relative;

  padding: 20px;

  background-color: #FFFFFF;

  border-radius: 5px;

  overflow: hidden;
`;

const TodoListBox = styled.div`
  margin-bottom: 50px;

  display: flex;
`;

const TodoListInput = styled.input`
  padding: 15px 10px;

  max-width: 100%;
  width: 100%;

  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  border-radius: 5px 0 0 5px;
  border: none;
  outline: none;
`;

const TodoListButton = styled.button`
  position: relative;
  padding: 0;

  display: block;
  max-width: 50px;
  width: 100%;

  background-color: transparent;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  border: none;
  border-radius: 0 5px 5px 0;

  cursor: pointer;

  overflow: hidden;
  transition: 0.3s all ease;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;

    width: 0;
    height: 100%;

    background-color: #622994;

    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &:hover:before {
    width: 100%;
  }

  &:hover {
    color: white;
  }
`;

const TodoListText = styled.div`
  position: relative;
  z-index: 1;
`;

const TodoListInputError = styled.div`
  position: absolute;
  top: 85px;
  left: 80px;

  font-size: 14px;

  color: #AD4F44;
`;

type TodolistPropsType = {
	title: string,
	todos: TodolistItemsType[],
	changeTodoStatus: (id: string) => void,
	removeTodo: (id: string) => void,
	addTodo: (title: string) => void,
};

export type TodolistItemsType = {
	id: string,
	title: string,
	completed: boolean,
	animation?: boolean,
};

export const Todolist: React.FC<TodolistPropsType> = props => {
	const [ inputValue, setInputValue ] = useState('');
	const [ inputError, setInputError ] = useState('');

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.currentTarget.value);
		setInputError('');
	};

	const addTodo = () => {
		props.addTodo(inputValue.trim());
		setInputValue('');
	};

	const onClickButtonHandler = () => {
		if (inputValue.trim()) {
			addTodo();
			return;
		}

		setInputError('Oops! Please, enter the item\'s name');
	};

	const onKeyPressInputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		if (inputValue.trim()) {
			event.charCode === 13 && addTodo();
			return;
		}

		setInputError('Oops! Please, enter the item\'s name');
	};

	return (
		<TodoListWrapper>
			<TodoListLogo src={ logo } alt="Todolist logo" />
			<TodoListTitle>{ props.title }</TodoListTitle>
			<TodoList>
				<TodoListBox>
					<TodoListInput type="text" placeholder="Enter a new todo" value={ inputValue }
					               onChange={ onChangeInputHandler } onKeyPress={ onKeyPressInputHandler } />
					<TodoListButton onClick={ onClickButtonHandler }>
						<TodoListText>+</TodoListText>
					</TodoListButton>
				</TodoListBox>
				<TodoListInputError className={ inputError && 'tada' }>{ inputError }</TodoListInputError>
				{
					props.todos.map(todo => <TodolistItem
							key={ todo.id }
							id={ todo.id }
							title={ todo.title }
							completed={ todo.completed }
							changeTodoStatus={ props.changeTodoStatus }
							removeTodo={ props.removeTodo }
							animation={ todo.animation ? todo.animation : false }
						/>,
					)
				}
			</TodoList>
		</TodoListWrapper>
	);
};
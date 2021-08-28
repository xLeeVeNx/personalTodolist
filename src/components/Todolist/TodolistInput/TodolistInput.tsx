import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import styled from 'styled-components';

const TodoListBox = styled.div`
  margin-bottom: 35px;

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
const TodoListInputError = styled.div`
  position: absolute;
  top: 140px;
  left: calc(50% - 115px);

  font-size: 14px;

  color: orangered;
`;
const TodoListButton = styled.button`
  position: relative;
  padding: 0;

  display: block;
  max-width: 50px;
  width: 100%;

  background-color: #FFFFFF;
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

    background-color: #1EA1FF;

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

type propsType = {
	addItem: (taskTitle: string) => void,
	placeholder: string,
}

export const TodolistInput: FC<propsType> = props => {
	const [ inputValue, setInputValue ] = useState('');
	const [ inputError, setInputError ] = useState('');

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.currentTarget.value);
		setInputError('');
	};
	const addTodo = () => {
		props.addItem(inputValue.trim());
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
		<>
			<TodoListBox>
				<TodoListInput type="text" placeholder={props.placeholder} value={ inputValue }
				               onChange={ onChangeInputHandler } onKeyPress={ onKeyPressInputHandler } />
				<TodoListButton onClick={ onClickButtonHandler }>
					<TodoListText>+</TodoListText>
				</TodoListButton>
			</TodoListBox>

			<TodoListInputError className={ inputError && 'bounceIn' }>{ inputError }</TodoListInputError>
		</>
	);
};
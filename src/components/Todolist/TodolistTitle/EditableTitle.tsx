import React, { ChangeEvent, useState } from 'react';
import { TodolistOptions } from '../TodolistItem/TodolistOptions';
import styled from 'styled-components';

const TodoListTitle = styled.h3`
  margin: 0 10px 0 7px;

  font-weight: 400;
  font-size: 14px;

  color: #135156;
  
  word-break: break-word;
`;

const TodoListInput = styled.input`
  padding: 0;
  margin: 0 10px 0 7px;

  flex-grow: 1;

  font-size: 14px;

  background-color: transparent;
  color: #135156;

  border: none;
  border-radius: 5px;

  outline: #1EA1FF 2px solid;
`;

type propsType = {
	title: string,
	editItemTitle: (newTaskTitle: string) => void,
	removeTask: () => void,
	setBounceOutLeft: (value: boolean) => void,
}

export const EditableTitle: React.FC<propsType> = props => {
	const [ inputValue, setInputValue ] = useState(props.title);
	const [ editable, setEditable ] = useState<boolean>(false);

	const onBlurEditableHandler = () => {
		setEditable(false);
		props.editItemTitle(inputValue);
	};
	const onChangeValueHandler = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value);

	return (
		<>
			{
				editable ? <TodoListInput className="todo__title" autoFocus value={ inputValue }
				                          onBlur={ onBlurEditableHandler } onChange={ onChangeValueHandler } />
					: <TodoListTitle className="todo__title">{ props.title }</TodoListTitle>
			}
			<TodolistOptions removeTask={ props.removeTask } setBounceOutLeft={ props.setBounceOutLeft }
			                 setEditable={ setEditable } />
		</>
	);
};
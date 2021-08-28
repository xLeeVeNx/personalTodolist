import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { EditIcon } from '../TodolistItem/TodolistIcons';

const TodoListBox = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const TodoListInput = styled.input`
  padding: 0;

  font-size: 24px;

  background-color: transparent;
  color: #FFFFFF;

  border: none;
`;
const TodoListTitle = styled.h2`
  margin-right: 10px;

  font-size: 24px;

  color: #FFFFFF;
  text-align: center;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const TodoListIcon = styled.div`
  width: 20px;
  height: 20px;
`;

type propsType = {
	title: string,
	editTodoTitle: (newTodoTitle: string) => void,
}

export const TodolistTitle: React.FC<propsType> = props => {
	const [ inputValue, setInputValue ] = useState(props.title);
	const [ editable, setEditable ] = useState<boolean>(false);

	const onBlurEditableHandler = () => {
		setEditable(false);
		props.editTodoTitle(inputValue);
	};
	const onChangeValueHandler = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value);

	return (
		<TodoListBox>
			{
				editable ? <TodoListInput className="todo__title" autoFocus value={ inputValue }
				                          onBlur={ onBlurEditableHandler } onChange={ onChangeValueHandler } />
					: <TodoListTitle>{ props.title }</TodoListTitle>
			}
			<TodoListIcon>
				<EditIcon fill="white" setEditable={ setEditable } />
			</TodoListIcon>
		</TodoListBox>
	);
};
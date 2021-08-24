// Import libs
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { DeleteIcon, SettingIcon } from '../Sprites';

type TodolistItemPropsType = {
	title: string,
	id: string,
	completed: boolean,
	changeTodoStatus: (id: string) => void,
	removeTodo: (id: string) => void,
	animation?: boolean,
};

const TodoListItem = styled.div`
  position: relative;

  padding: 15px 10px;

  display: flex;
  align-items: center;

  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const TodoListBox = styled.label`
  cursor: pointer;
`;

const TodoListInput = styled.input`
  position: absolute;

  width: 1px;
  height: 1px;

  overflow: hidden;
  clip: rect(0 0 0 0);
`;

const TodoListCheckbox = styled.span`
  margin-top: -1px;

  display: block;
  width: 15px;
  height: 15px;

  border: 2px solid #8E8E8E;

  border-radius: 3px;
`;

const TodoListTitle = styled.h3`
  margin: 0 10px 0 7px;

  font-weight: 400;
  font-size: 14px;

  color: #135156;
`;

const TodoListOptions = styled.div`
  margin-left: auto;

  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 50px;
  width: 100%;
`;

export const TodolistItem: React.FC<TodolistItemPropsType> = props => {
	const [ flipInX, setFlipInX ] = useState<boolean>(false);
	const [ bounceOutLeft, setBounceOutLeft ] = useState<boolean>(false);

	return (
		<>
			<TodoListItem
				className={ `${ flipInX || props.animation ? 'flipInX' : '' } ${ props.completed ? 'completed' : '' } ${ bounceOutLeft ? 'bounceOutLeft' : '' }` }>
				<TodoListBox>
					<TodoListInput type="checkbox"
					               checked={ props.completed }
					               disabled={ flipInX }
					               onChange={ () => {
						               props.changeTodoStatus(props.id);
						               setFlipInX(true);
						               setTimeout(() => setFlipInX(false), 800);
					               } }
					/>
					<TodoListCheckbox />
				</TodoListBox>
				<TodoListTitle className="todo__title">{ props.title }</TodoListTitle>
				<TodoListOptions>
					<SettingIcon />
					<DeleteIcon id={ props.id } removeTodo={ props.removeTodo } setBounceOutLeft={ setBounceOutLeft } />
				</TodoListOptions>
			</TodoListItem>
		</>
	)
		;
};
// Import libs
import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { EditableTitle } from '../TodolistTitle/EditableTitle';

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

  border: 2px solid #1EA1FF;

  border-radius: 3px;
`;

type propsType = {
	todoID: string,
	taskID: string,
	title: string,
	completed: boolean,
	changeTaskStatus: (todoID: string, taskID: string) => void,
	removeTask: (todoID: string, taskID: string) => void,
	editTaskTitle: (todoID: string, taskID: string, newTaskTitle: string) => void,
	animation: boolean,
};

export const TodolistItem: FC<propsType> = props => {
	const [ flipInX, setFlipInX ] = useState<boolean>(false);
	const [ bounceOutLeft, setBounceOutLeft ] = useState<boolean>(false);

	const onChangeInputHandler = () => {
		props.changeTaskStatus(props.todoID, props.taskID);
		setFlipInX(true);
		setTimeout(() => setFlipInX(false), 800);
	};
	const removeTask = () => props.removeTask(props.todoID, props.taskID);
	const editTaskTitle = (newTaskTitle: string) => props.editTaskTitle(props.todoID, props.taskID, newTaskTitle);

	return (
		<>
			<TodoListItem
				className={ `${ flipInX || props.animation ? 'flipInX' : '' } ${ props.completed ? 'completed' : '' } ${ bounceOutLeft ? 'bounceOutLeft' : '' }` }>
				<TodoListBox>
					<TodoListInput type="checkbox"
					               checked={ props.completed }
					               disabled={ flipInX }
					               onChange={ onChangeInputHandler }
					/>
					<TodoListCheckbox className="checkbox" />
				</TodoListBox>
				<EditableTitle title={ props.title } editItemTitle={ editTaskTitle } removeTask={ removeTask }
				               setBounceOutLeft={ setBounceOutLeft }
				/>
			</TodoListItem>
		</>
	)
		;
};
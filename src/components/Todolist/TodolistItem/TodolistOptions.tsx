import React from 'react';
import styled from 'styled-components';
import { DeleteIcon, EditIcon } from './TodolistIcons';

const TodoListOptions = styled.div`
  margin-left: auto;

  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 50px;
  width: 100%;
`;

type propsType = {
	removeTask: () => void,
	setBounceOutLeft: (value: boolean) => void,
	setEditable: (value: boolean) => void,
}

export const TodolistOptions: React.FC<propsType> = ({setBounceOutLeft, ...props}) => {
	return (
		<TodoListOptions>
			<EditIcon setEditable={props.setEditable} />
			<DeleteIcon removeTask={ props.removeTask }
			            setBounceOutLeft={ setBounceOutLeft } />
		</TodoListOptions>
	);
};
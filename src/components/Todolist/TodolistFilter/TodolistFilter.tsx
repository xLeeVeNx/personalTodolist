import React, { FC } from 'react';
import styled from 'styled-components';
import { TodolistButton } from './TodolistButton';
import { filterValueType } from '../../../App';

const TodoListFilter = styled.div`
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
`;

type propsType = {
	todoID: string,
	filterValue: filterValueType,
	setFilterValue: (todoID: string, value: filterValueType) => void,
}

export const TodolistFilter: FC<propsType> = props => {
	return (
		<TodoListFilter>
			<TodolistButton todoID={props.todoID} text="All" filterValue={props.filterValue} setFilterValue={ props.setFilterValue } />
			<TodolistButton todoID={props.todoID} text="Active" filterValue={props.filterValue} setFilterValue={ props.setFilterValue } />
			<TodolistButton todoID={props.todoID} text="Completed" filterValue={props.filterValue} setFilterValue={ props.setFilterValue } />
		</TodoListFilter>
	);
};
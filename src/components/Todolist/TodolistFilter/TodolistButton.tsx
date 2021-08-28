import React, { FC } from 'react';
import styled from 'styled-components';
import { filterValueType } from '../../../App';

const TodoListButton = styled.button`
  padding: 10px 0;
  
  max-width: 110px;
  width: 100%;
  
  color: #135156;
  background-color: transparent;

  border-radius: 5px;
  border: none;
  
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  cursor: pointer;

  .active {
    color: #FFFFFF;
    background-color: #622994;
  }
`;

type propsType = {
	todoID: string,
	text: filterValueType,
	filterValue: filterValueType,
	setFilterValue: (todoID: string, value: filterValueType) => void,
}

export const TodolistButton: FC<propsType> = props => {
	const onClickButtonHandler = () => {
		props.setFilterValue(props.todoID, props.text);
	}
	return (
		<TodoListButton className={props.filterValue === props.text ? 'active' : ''} onClick={onClickButtonHandler}>{props.text}</TodoListButton>
	);
};
import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.svg';

const TodoListLogo = styled.img`
  margin: 0 auto 5px;

  width: 50px;
  height: 50px;

  object-fit: cover;
`;


export const TodolistLogo = () => {
	return <TodoListLogo src={ logo } alt="Todolist logo" />
};
import React from 'react';

import { Normalize } from './components/Styles/Normalize';
import { GlobalStyle } from './components/Styles/GlobalStyle';

import logo from './images/logo.svg';

export const App = () => {
	return (
		<>
			<Normalize />
			<GlobalStyle />
			<ul>
				<li>1</li>
				<li>1</li>
				<li>1</li>
			</ul>
			<p>fdsfdsfds</p>
			<h1>Hello react</h1>
			<img src={ logo } alt="" />
		</>
	);
};
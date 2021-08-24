import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  cursor: pointer;
`;

type DeleteIconPropsType = {
	id: string,
	removeTodo: (id: string) => void,
	setBounceOutLeft: (value: boolean) => void,
}

export const DeleteIcon: React.FC<DeleteIconPropsType> = props => {
	const removeTodo = () => {
		props.setBounceOutLeft(true);
		setTimeout(() => props.removeTodo(props.id), 900);
	};

	return (
		<Svg onClick={removeTodo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20px" height="20px">
			<linearGradient id="fbsFAcPTNuInJg1GESjdha" x1="32" x2="32" y1="7.001" y2="56.998"
			                gradientUnits="userSpaceOnUse"
			                spreadMethod="reflect">
				<stop offset="0" stopColor="#1a6dff" />
				<stop offset="1" stopColor="#c822ff" />
			</linearGradient>
			<path className="delete" fill="url(#fbsFAcPTNuInJg1GESjdha)"
			      d="M49.757,56.999c-0.768,0-1.536-0.292-2.121-0.877L32,40.485L16.364,56.121 c-1.17,1.169-3.073,1.169-4.243,0l-4.243-4.243c-1.17-1.17-1.17-3.073,0-4.243L23.515,32L7.879,16.364 c-1.17-1.17-1.17-3.073,0-4.243l4.243-4.243c1.169-1.17,3.072-1.171,4.243,0L32,23.515L47.636,7.879c1.17-1.171,3.073-1.17,4.243,0 l4.243,4.243c1.17,1.17,1.17,3.073,0,4.243L40.485,32l15.636,15.636c1.17,1.17,1.17,3.073,0,4.243l-4.243,4.243 C51.293,56.706,50.525,56.999,49.757,56.999z M32,37.657l17.05,17.05c0.39,0.39,1.025,0.389,1.415,0l4.243-4.243 c0.39-0.39,0.39-1.024,0-1.415L37.657,32l17.05-17.05c0.39-0.39,0.39-1.024,0-1.415l-4.243-4.243c-0.39-0.39-1.025-0.391-1.415,0 L32,26.343L14.95,9.293c-0.39-0.39-1.025-0.389-1.415,0l-4.243,4.243c-0.39,0.39-0.39,1.024,0,1.415L26.343,32L9.293,49.05 c-0.39,0.39-0.39,1.024,0,1.415l4.243,4.243c0.389,0.389,1.024,0.39,1.415,0L32,37.657z" />
			<linearGradient id="fbsFAcPTNuInJg1GESjdhb" x1="32" x2="32" y1="11.94" y2="52.06"
			                gradientUnits="userSpaceOnUse"
			                spreadMethod="reflect">
				<stop offset="0" stopColor="#6dc7ff" />
				<stop offset="1" stopColor="#e6abff" />
			</linearGradient>
			<path className="delete" fill="url(#fbsFAcPTNuInJg1GESjdhb)"
			      d="M52.061 14.061L49.939 11.939 32 29.879 14.061 11.939 11.939 14.061 29.879 32 11.939 49.939 14.061 52.061 32 34.121 49.939 52.061 52.061 49.939 34.121 32z" />
		</Svg>
	);
};

export const SettingIcon: React.FC = () => {
	return (
		<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20px" height="20px">
			<linearGradient id="0O0q6J4HBgQKyT39nvTa~a" x1="46.807" x2="46.807" y1="9.849" y2="24.215"
			                gradientUnits="userSpaceOnUse" spreadMethod="reflect">
				<stop offset="0" stopColor="#6dc7ff" />
				<stop offset="1" stopColor="#e6abff" />
			</linearGradient>
			<path className="setting" fill="url(#0O0q6J4HBgQKyT39nvTa~a)"
			      d="M49.482,24.392l-9.874-9.874l4.232-4.232c0.39-0.39,1.021-0.39,1.411,0l8.464,8.464 c0.39,0.39,0.39,1.021,0,1.411L49.482,24.392z" />
			<linearGradient id="0O0q6J4HBgQKyT39nvTa~b" x1="32" x2="32" y1="8.084" y2="55.83"
			                gradientUnits="userSpaceOnUse"
			                spreadMethod="reflect">
				<stop offset="0" stopColor="#1a6dff" />
				<stop offset="1" stopColor="#c822ff" />
			</linearGradient>
			<path className="setting" fill="url(#0O0q6J4HBgQKyT39nvTa~b)"
			      d="M50.697,25.999l4.428-4.428c1.167-1.167,1.167-3.065,0-4.232l-8.464-8.464 c-1.167-1.167-3.065-1.167-4.232,0l-4.428,4.428c-0.664-0.175-1.4-0.011-1.92,0.509l-1.411,1.411c-0.52,0.52-0.684,1.256-0.509,1.92 L11.198,40.106l-0.508,0.508l-0.2,0.2l-2.373,9.967c-0.343,1.442,0.078,2.928,1.126,3.976s2.534,1.469,3.976,1.125l9.967-2.373 l0.2-0.2l0.508-0.508l22.964-22.964c0.664,0.175,1.4,0.011,1.92-0.509l1.411-1.411C50.708,27.399,50.872,26.663,50.697,25.999z M47.367,27.92L36.081,16.634l1.411-1.411l11.285,11.285L47.367,27.92z M23.46,50.414c-0.28-1.063-0.682-2.077-1.198-3.034 l20.872-20.872l2.116,2.116L23.46,50.414z M14.916,53.428c-0.12-1.074-0.58-2.115-1.405-2.939c-0.825-0.825-1.865-1.285-2.939-1.405 l0.698-2.931c1.649,0.266,3.173,1.036,4.357,2.22c1.184,1.184,1.954,2.709,2.22,4.357L14.916,53.428z M17.038,46.962 c-1.447-1.447-3.301-2.396-5.306-2.75l0.463-1.943c2.382,0.441,4.533,1.562,6.254,3.282s2.841,3.872,3.282,6.254l-1.943,0.463 C19.433,50.263,18.485,48.409,17.038,46.962z M19.859,44.141c-0.477-0.477-0.987-0.907-1.517-1.304l20.561-20.561l2.821,2.821 L21.163,45.658C20.766,45.128,20.336,44.618,19.859,44.141z M16.62,41.738c-0.957-0.516-1.971-0.918-3.034-1.198l21.79-21.79 l2.116,2.116L16.62,41.738z M43.84,10.286c0.389-0.389,1.022-0.389,1.411,0l8.464,8.464c0.389,0.389,0.389,1.022,0,1.411 l-4.232,4.232l-9.874-9.874L43.84,10.286z" />
		</Svg>
	);
};
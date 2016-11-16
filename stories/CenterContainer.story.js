import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CenterContainer from '../src/containers/CenterContainer';

const style = {
	container: {
		height: '100vh',
		width: '100vw',
	},
	div: {
		margin: '10px',
		width: '100px',
		height: '100px',
		background: 'gold',
	},
};
storiesOf('Containers', module)
	.add('CenterContainer horizontal and vertical', () => (
		<CenterContainer style={style.container}>
			<div style={style.div} />
			<div style={style.div} />
		</CenterContainer>
	))
	.add('CenterContainer horizontal', () => (
		<CenterContainer
			style={style.container}
			vertical={false}
		>
			<div style={style.div} />
			<div style={style.div} />
		</CenterContainer>
	))
	.add('CenterContainer vertical', () => (
		<CenterContainer
			style={style.container}
			horizontal={false}
		>
			<div style={style.div} />
			<div style={style.div} />
		</CenterContainer>
	));

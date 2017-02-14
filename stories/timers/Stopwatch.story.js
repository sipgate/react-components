import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Stopwatch from '../../src/timers/Stopwatch';

storiesOf('Timers', module)
	.add('StopWatch', () => (
		<Stopwatch />
	))
	.add('StopWatch with custom time at 1:40', () => {
		const startTime = new Date();
		const aMinuteAgo = startTime.getTime() - 100000;
		startTime.setTime(aMinuteAgo);
		return (
			<Stopwatch start={startTime}/>
		);
	})
	.add('StopWatch with custom time hour at 2:46:40', () => {
		const startTime = new Date();
		const aMinuteAgo = startTime.getTime() - 10000000;
		startTime.setTime(aMinuteAgo);
		return (
			<Stopwatch start={startTime}/>
		);
	});

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Stopwatch from '../../src/timers/Stopwatch';

storiesOf('Timers', module)
	.add('StopWatch', () => (
		<Stopwatch />
	));

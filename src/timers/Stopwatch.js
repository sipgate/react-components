import React from 'react';
import { sprintf } from 'sprintf-js/src/sprintf';

export class Stopwatch extends React.Component {

	static propTypes = {
		style: React.PropTypes.object,
		className: React.PropTypes.string,
		start: React.PropTypes.instanceOf(Date),
	};

	static defaultProps = {
		style: {},
	};

	state = {
		elapsed: 0,
		startTime: new Date(),
		timer: null,
	};

	componentWillMount() {
		const startTime = this.props.start || new Date();
		this.setState({
			elapsed: this.calculateElapsedSeconds(startTime),
			startTime: startTime,
			timer: setInterval(() => {
				this.setState({
					elapsed: this.calculateElapsedSeconds(this.state.startTime),
				});
			}, 500),
		});
	}

	calculateElapsedSeconds = (startTime) => {
		const now = new Date();
		const timeDiff = now.getTime() - startTime.getTime();

		return Math.abs(timeDiff / 1000);
	};

	componentWillUnmount() {
		clearInterval(this.state.timer);
	}

	getTimeDiffString = () => {
		const seconds = Math.floor(this.state.elapsed % 60);
		const minutes = Math.floor(this.state.elapsed / 60) % 60;
		const hours = Math.floor(this.state.elapsed / 3600);

		let timeString = '';

		if(hours > 0) {
			timeString += sprintf('%02d', hours) + ':';
		}

		timeString += sprintf('%02d', minutes) + ':' + sprintf('%02d', seconds);

		return timeString;
	};

	render() {
		return (
			<span style={this.props.style} className={this.props.className}>
				{this.getTimeDiffString()}
			</span>
		);
	}
}

export default Stopwatch;

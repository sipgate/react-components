import React from 'react';
import Radium from 'radium';
import moment from 'moment-timezone';
import { sprintf } from 'sprintf-js/src/sprintf';

export class Stopwatch extends React.Component {
	static propTypes = {
		style: React.PropTypes.object,
	}

	static defaultProps = {
		style: {},
	}

	componentWillMount() {
		this.setState({
			elapsed: 0,
			startTime: moment(),
			timer: setInterval(() => {
				this.setState({
					elapsed: moment.duration(
						moment().diff(this.state.startTime)
					).asSeconds(),
				});
			}, 500),
		});
	}
	componentWillUnmount() {
		clearInterval(this.state.timer);
	}

	getDiffString = () => {
		const duration = moment.duration(this.state.elapsed, 'seconds');

		if (duration.hours() > 0) {
			return duration.hours() + ':' + sprintf('%02d', duration.minutes()) + ':' + sprintf('%02d', duration.seconds());
		}

		return duration.minutes() + ':' + sprintf('%02d', duration.seconds());
	}

	render() {
		return (
			<span style={this.props.style}>
				{this.getDiffString()}
			</span>
		);
	}
}

export default Radium(Stopwatch);

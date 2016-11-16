import React from 'react';

const alignItems = (direction, horizontal, vertical) => {
	return (direction === 'row' && vertical)
		|| (direction === 'column' && horizontal);
};
const justifyContent = (direction, horizontal, vertical) => {
	return (direction === 'row' && horizontal)
		|| (direction === 'column' && vertical);
};

const CenterContainer = (props) => {
	const { style, direction, horizontal, vertical, children, ...other } = props;
	const containerStyle = {
		display: 'flex',
		flexDirection: props.direction,
		alignItems: alignItems(direction, horizontal, vertical) ? 'center' : 'stretch',
		justifyContent: justifyContent(direction, horizontal, vertical) ? 'center' : 'stretch',
		...style,
	};

	return (
		<div style={containerStyle} {...other}>
			{children}
		</div>
	);
};
CenterContainer.propTypes = {
	children: React.PropTypes.node,
	style: React.PropTypes.object,
	direction: React.PropTypes.string,
	vertical: React.PropTypes.bool,
	horizontal: React.PropTypes.bool,
};
CenterContainer.defaultProps = {
	style: {},
	direction: 'row',
	vertical: true,
	horizontal: true,
};


export default CenterContainer;

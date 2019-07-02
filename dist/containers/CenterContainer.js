'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alignItems = function alignItems(direction, horizontal, vertical) {
	return direction === 'row' && vertical || direction === 'column' && horizontal;
};
var justifyContent = function justifyContent(direction, horizontal, vertical) {
	return direction === 'row' && horizontal || direction === 'column' && vertical;
};

var CenterContainer = function CenterContainer(props) {
	var style = props.style,
	    direction = props.direction,
	    horizontal = props.horizontal,
	    vertical = props.vertical,
	    children = props.children,
	    other = (0, _objectWithoutProperties3.default)(props, ['style', 'direction', 'horizontal', 'vertical', 'children']);

	var containerStyle = (0, _extends3.default)({
		display: 'flex',
		flexDirection: props.direction,
		alignItems: alignItems(direction, horizontal, vertical) ? 'center' : 'stretch',
		justifyContent: justifyContent(direction, horizontal, vertical) ? 'center' : 'stretch'
	}, style);

	return _react2.default.createElement(
		'div',
		(0, _extends3.default)({ style: containerStyle }, other),
		children
	);
};
CenterContainer.propTypes = {
	children: _react2.default.PropTypes.node,
	style: _react2.default.PropTypes.object,
	direction: _react2.default.PropTypes.string,
	vertical: _react2.default.PropTypes.bool,
	horizontal: _react2.default.PropTypes.bool
};
CenterContainer.defaultProps = {
	style: {},
	direction: 'row',
	vertical: true,
	horizontal: true
};

exports.default = CenterContainer;
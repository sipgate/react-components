'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Stopwatch = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sprintf = require('sprintf-js/src/sprintf');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stopwatch = exports.Stopwatch = function (_React$Component) {
	(0, _inherits3.default)(Stopwatch, _React$Component);

	function Stopwatch() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Stopwatch);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Stopwatch.__proto__ || (0, _getPrototypeOf2.default)(Stopwatch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			elapsed: 0,
			startTime: new Date(),
			timer: null
		}, _this.calculateElapsedSeconds = function (startTime) {
			var now = new Date();
			var timeDiff = now.getTime() - startTime.getTime();

			return Math.abs(timeDiff / 1000);
		}, _this.getTimeDiffString = function () {
			var seconds = Math.floor(_this.state.elapsed % 60);
			var minutes = Math.floor(_this.state.elapsed / 60) % 60;
			var hours = Math.floor(_this.state.elapsed / 3600);

			var timeString = '';

			if (hours > 0) {
				timeString += (0, _sprintf.sprintf)('%02d', hours) + ':';
			}

			timeString += (0, _sprintf.sprintf)('%02d', minutes) + ':' + (0, _sprintf.sprintf)('%02d', seconds);

			return timeString;
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Stopwatch, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			var startTime = this.props.start || new Date();
			this.setState({
				elapsed: this.calculateElapsedSeconds(startTime),
				startTime: startTime,
				timer: setInterval(function () {
					_this2.setState({
						elapsed: _this2.calculateElapsedSeconds(_this2.state.startTime)
					});
				}, 500)
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.state.timer);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'span',
				{ style: this.props.style, className: this.props.className },
				this.getTimeDiffString()
			);
		}
	}]);
	return Stopwatch;
}(_react2.default.Component);

Stopwatch.propTypes = {
	style: _react2.default.PropTypes.object,
	className: _react2.default.PropTypes.string,
	start: _react2.default.PropTypes.instanceOf(Date)
};
Stopwatch.defaultProps = {
	style: {}
};
exports.default = Stopwatch;
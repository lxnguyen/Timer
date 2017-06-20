const React = require('react');

const CountdownForm = React.createClass({
	onSubmit: function (e) {
		e.preventDefault();
		let str = this.refs.time.value;
		
		// Check to see if the time is valid
		if (str.match(/^[0-9]*$/)) {
			// Resets the clock
			this.refs.time.value = '';

			// Re-renders the clock
			this.props.onSetCountdown(parseInt(str, 10));
		}
	},
	render: function() {
		return (
			<div className="countdown-clock">
				<form ref='form' onSubmit={this.onSubmit}>
					<input type="text" ref="time" placeholder="Enter Seconds"/>
					<button className="button expanded">Enter</button>
				</form>
			</div>
		)		
	}
});
module.exports = CountdownForm;

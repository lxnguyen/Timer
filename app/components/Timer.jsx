const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
	getInitialState: function () {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},
	handleStatusChange: function (newStatus) {
		this.setState({
			timerStatus: newStatus
		});
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started':
					this.handleStart();
					break;
				case 'stopped':
					this.setState({
						count: 0
					})
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	componentWillUnmount: function () {
		clearInterval(this.timer);
	},
	handleStart: function() {
		this.timer = setInterval(() => {
			this.setState({
				count: this.state.count + 1
			})
		}, 1000);
	},
	render: function() {
		let {count, timerStatus} = this.state;
		return (
			<div>
				<h1 className="pageTitle">Timer</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		)		
	}
});
module.exports = Timer;

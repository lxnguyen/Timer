const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
	render: function() {
		return (
			<nav className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li>
							<IndexLink to="/" className="menu-text">Timer App </IndexLink>
						</li>
						<li>
							<IndexLink to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
						</li>
						<li>
							<Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
						</li>
					</ul>
				</div>
			</nav>
		)		
	}
});
module.exports = Nav;

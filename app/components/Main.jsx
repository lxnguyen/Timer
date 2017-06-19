const React = require('react');
const Nav = require('Nav');

const Main = (props) => {
	return(
		<div>
			<Nav/>
			<div className="main-app">
				{props.children}
			</div>
		</div>
	)
}

module.exports = Main;
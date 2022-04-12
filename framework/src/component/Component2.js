import React from 'react';
const msg="Use js in HTML";
class Component2 extends React.Component {
	render() {
		return (
			<div>
				{msg}
			</div>
		)
	}
}
export default Component2;

/* equivalent to the following
export default class Component1 extends React.Component {
	render() {
		return (
			<div>
				{msg}
			</div>
		)
	}
}
*/
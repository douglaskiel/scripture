import React from 'react';

class StateIntro extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "TobyMac",
			otherName: "Newsboys",
			anotherName: "Fireflight"
		}
	}
	changeNameOne(event) {
		this.setState({name: event.target.value})
	}

	changeNameTwo(event) {
		this.setState({otherName: event.target.value})
	}

	changeNameThree(event) {
		this.setState({anotherName: event.target.value})
	}

	render() {
		return (
		  <div>
			<h3>State</h3>
			<p>Use the input field to see the state change.</p>
			<input type="text" onChange={this.changeNameOne.bind(this)} />
			<input type="text" onChange={this.changeNameTwo.bind(this)} />
			<input type="text" onChange={this.changeNameThree.bind(this)} />
			<p>{this.state.name} and {this.state.otherName} and {this.state.anotherName} are the greatest musicians on the planet!</p>
			<hr />
		  </div>
		);
	}
}

export default StateIntro;
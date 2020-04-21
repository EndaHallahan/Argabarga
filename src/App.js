import React, { Component } from 'react';
import './scss/index.scss';
import HeadContainer from "./components/HeadContainer.js";
import Spinner from "./components/Spinner.js";
import InfoBox from "./components/InfoBox.js";
import projects from "./assets/projects.json"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curSel: null
		}
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.resetSelection = this.resetSelection.bind(this);
	}
	handleSelectChange(e) {
		let projIndex = e.target.dataset.index;
		this.setState({
			...this.state,
			curSel: parseInt(projIndex)
		});
	}
	resetSelection() {
		this.setState({
			...this.state,
			curSel: null
		});
	}
	render() {
    	return (
        	<div className="App">
        		<HeadContainer />
        		<Spinner
        			projects = {projects}
        			curSel = {this.state.curSel}
        			handleSelectChange = {this.handleSelectChange}
        		/>
        		<InfoBox
        			project = {this.state.curSel !== null ? projects[this.state.curSel] : null}
        			resetSelection = {this.resetSelection}
        		/>
        	</div>
     	);
  	}
}

export default App;

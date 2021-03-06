import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Spinnee from "./Spinnee.js";

class Spinner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			degRot: 0,
			isRotating: true
		}
		this.step = this.step.bind(this);
		this.rotate = this.rotate.bind(this);
		this.toggleRotation = this.toggleRotation.bind(this);
	}
	rotate(deg) {
		if (this.state.isRotating) {
			let toRot = this.state.degRot + deg;
			if (toRot >= 36500) {toRot = toRot - 36500;}
			this.setState({
				...this.state,
				degRot: toRot
			});
		}
	}
	step(timestamp) {
		this.rotate(.2);
		window.requestAnimationFrame(this.step);
	}
	toggleRotation() {
		this.setState({
			...this.state,
			isRotating: this.state.isRotating !== true
		});
	}
  	componentDidMount() {
		window.requestAnimationFrame(this.step);
	}
	render() {
		let lenOffset = 180 / this.props.projects.length;
		return (
			<div id="spinner">
				<div id="box">
					<div id="scene">
						<div id="cubo" className={this.state.isRotating ? null : "paused"}>
							<div id="cubo-top" className="cubo-face"></div>
							<div id="cubo-north" className="cubo-face"></div>
							<div id="cubo-south" className="cubo-face"></div>
							<div id="cubo-east" className="cubo-face"></div>
							<div id="cubo-west" className="cubo-face"></div>
							<div id="cubo-bottom" className="cubo-face"></div>
						</div>
					</div>
				</div>
				{	
					this.props.projects.map((project, i) => {
						let rotationOffset = this.state.degRot - (i * lenOffset);
						return (
							<Spinnee 
								key = {i}
								index = {i}
								project = {project}
								thisSelected = {this.props.curSel === i}
								handleSelectChange = {this.props.handleSelectChange}
								rotation = {rotationOffset}
							/>
						);
					})
				}
				<div 
					className = "pause-button"
					
				>
					<span
						onClick = {this.toggleRotation}
						aria-label= {this.state.isRotating ? "pause button" : "play button"}
					>
						{this.state.isRotating ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
					</span>
				</div>
			</div>
		);
	}
}

export default Spinner;
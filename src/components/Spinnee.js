import React, { Component } from 'react';

class Spinnee extends Component {
	constructor(props) {
		super(props);
		this.getZDist = this.getZDist.bind(this);
	}
	getZDist() {
		/* 
			This may seem like a lot of work when you could just use translateZ. 
			However, translateZ and perspective don't like to play nice with rotations.
			Trust me, it was the first thing I tried.
		*/
		let hyp = 350 - (this.props.project.trans_x/100 * 700);
		let theta = this.props.rotation * Math.PI/180;
		let op = (Math.sin(theta) * hyp);
		return op;
	}
	render() {
		let zDist = this.getZDist();
		return (
			<div 
				className="spin-container"
				style = {{
					transform: `rotateY(${this.props.rotation}deg)`,
					zIndex: Math.floor(zDist)
				}}
			>
				<button 
					data-index = {this.props.index}
					className = {(this.props.thisSelected ? "selected" : "") + " spinnee"}
					style = {{
						transform: `rotateY(${0 - this.props.rotation}deg) scale(${(zDist/1000) * 1.2 + 1})`,
						left: this.props.project.trans_x + "%",
						top: this.props.project.trans_y + "%"
					}}
					onClick = {this.props.handleSelectChange}
				>{this.props.project.title}</button>
			</div>
		);
	}
}

export default Spinnee;
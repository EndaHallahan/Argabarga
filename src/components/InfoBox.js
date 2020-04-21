import React, { Component } from 'react';

class InfoBox extends Component {
	constructor(props) {
		super(props);
		this.infoBoxChild = React.createRef();
	}
	componentDidUpdate() {
		if (this.props.project !== null) {
			this.infoBoxChild.current.scrollIntoView(true);
		}
	}
	render() {
		if (this.props.project !== null) {
			return (
				<div id="info-box" ref={this.infoBoxChild}>
					<h1>{this.props.project.title}</h1>

					<h3>{this.props.project.header}</h3>

					{this.props.project.image.url ? 
						<img 
							src = {this.props.project.image.url} 
							alt = {this.props.project.image.alt} 
						/> 
						: null}

					{
						this.props.project.body.map((para, i) => {
							return (
								<p key={i}>{para}</p>
							);
						})
					}

					<ul>
						{
							this.props.project.links.map((link, i) => {
								return (
									<li key={i}>
										<a href={link.url}>{link.type}</a>
									</li>
								);
							})
						}
					</ul>

					<div className="topper">
						<a href = "#top">Back To Top</a>
					</div>
				</div>
			);
		} else {
			return (
				<div id="info-box">
					<div className="instructions">Click a project to learn more.</div>
				</div>
			);
		}
	}
}

export default InfoBox;
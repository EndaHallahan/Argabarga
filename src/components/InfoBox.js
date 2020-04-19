import React, { Component } from 'react';

class InfoBox extends Component {
	constructor(props) {
		super(props);
		this.infoBoxChild = React.createRef();
	}
	componentDidUpdate() {
		this.infoBoxChild.current.scrollIntoView(true);
	}
	render() {
		if (this.props.project !== null) {
			return (
				<div id="info-box" ref={this.infoBoxChild}>
					<h1>{this.props.project.title}</h1>

					<h3>{this.props.project.header}</h3>

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
						<a href="#top">Back To Top</a>
					</div>
				</div>
			);
		} else {
			return (
				<div id="info-box">

				</div>
			);
		}
	}
}

export default InfoBox;
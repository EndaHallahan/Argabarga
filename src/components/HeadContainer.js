import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import resume from '../assets/Enda-Hallahan-Resume-2020.pdf'

class App extends Component {
	render() {
    	return (
        	<header id="top">
        		<h1><a href="/">Argabarga</a></h1>
        		<span className="right">
        			<a href={resume}>Resume</a>
        			<span className="divider"></span>
        			<a 
        				href = "https://www.linkedin.com/in/enda-hallahan/"
        				title = "LinkedIn"
        			>
        				<FontAwesomeIcon icon={faLinkedin} />
        			</a>
        			<a 
        				href = "https://github.com/EndaHallahan"
        				title = "GitHub"
        			>
        				<FontAwesomeIcon icon={faGithub} />
        			</a>
        		</span>
        	</header>
     	);
  	}
}

export default App;

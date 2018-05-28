import React, { Component } from 'react';

class NoMatch extends Component {
    render(){
	return (
	    <div id="content">
		<div className="menubar">
		    <div className="sidebar-toggler visible-xs">
			<i className="ion-navicon"></i>
		    </div>

		    <div className="page-title">
			404
		    </div>
		</div>

		<div className="content-wrapper">
		</div>
	    </div>
	);
    }
}

export default NoMatch;

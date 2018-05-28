import React, { Component } from 'react';

import Calendario from '../components/Calendar.jsx';

class Calendar extends Component {
    render(){
	return (
	    <div id="content">
		<div className="menubar">
		    <div className="sidebar-toggler visible-xs">
			<i className="ion-navicon"></i>
		    </div>

		    <div className="page-title">
			Calendario
		    </div>
		</div>

		<div className="content-wrapper">
		    <Calendario/>
		</div>
	    </div>
	);
    }
}

export default Calendar;

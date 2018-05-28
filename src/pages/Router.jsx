import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import NoMatch from './NoMatch.jsx';
import Calendar from './Calendar.jsx';

class Routing extends Component {
    render(){
	return (
	    <Router>
		<div>
		    <div id="sidebar-clear" className="main-sidebar">
			<div className="current-user">
			    <Link to="/" className="name">
				<span>
				    Jesus Flores
				    <i className="fa fa-chevron-down"></i>
				</span>
			    </Link>
			    <ul className="menu">
				<li>
				    <a href="signup.html">Sign out</a>
				</li>
			    </ul>
			</div>
			<div className="menu-section">
			    <h3>General</h3>
			    <ul>
				<li>
				    <Link to="/">
					<i className="ion-calendar"></i>
					<span>Calendario</span>
				    </Link>
				</li>
			    </ul>
			</div>
		    </div>
		    <Switch>
			<Route exact path="/" component={Calendar}/>
			<Route component={NoMatch}/>
		    </Switch>
		</div>
	    </Router>
	);
    }
}

export default Routing;

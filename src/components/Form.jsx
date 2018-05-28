import React, { Component } from 'react';
import serialize from 'form-serialize';

import SalasApi from '../utils/Api.js';

class Form extends Component {
    constructor(props){
	super(props);

	this.request = new SalasApi();

	this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event){
	event.preventDefault();
	console.log("envio");
	const formData = serialize(event.target, { hash: true });
	await this.request.getData('v1/usuario/', formData, 'POST');
    }

    render() {
	return(
	    <form onSubmit={this.handleSubmit} autoComplete="off">
		{ this.props.children }
	    </form>
	);
    }
}

export default Form;

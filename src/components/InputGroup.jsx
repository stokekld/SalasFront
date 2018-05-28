import React, { Component } from 'react';

class InputGroup extends Component {
    constructor(props){
	super(props);
    }

    render(){
	return (
	    <div className="fields">
		<strong>{ this.props.title }</strong>
		<input className="form-control" name={ this.props.name } type={ this.props.type } placeholder={ this.props.placeholder } />
	    </div>
	);
    }
};

export default InputGroup;

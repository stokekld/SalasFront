import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import InputGroup from '../components/InputGroup.jsx';
import Form from '../components/Form.jsx';

class Login extends Component {
    constructor(props){
	super(props);
    }

    render(){
	return(
	    <div className="content">
		<Form>
		    <InputGroup name="user" title="Usuario" type="text" placeholder="Ingresa tu Usuario"/>
		    <InputGroup name="password" title="Contraseña" type="password" placeholder="Password"/>
		    <div className="actions">
			<button className="btn btn-primary btn-lg" type="submit">Entrar</button>
		    </div>
		</Form>
	    </div>
	);
    }
}

export default Login;

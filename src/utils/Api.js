import fetch from 'isomorphic-fetch';

class SalasApi {
    constructor(){
	this.baseUrl = 'http://leeloo.test.server/';
    }

    async getData(resource, body, method='GET'){

	await fetch('http://leeloo.test.server/v1/usuario/auth', {
	    mode: 'cors',
	    method: method,
	    headers: {
		'X-Requested-With': "XMLHttpRequest",
		'Content-Type': "application/json"
	    },
	    body: JSON.stringify(body)
	})
	.then((response) => {
	    console.log("response")
	    console.log(response.status);

	    return response.json();
	})
	.then((body) => {
	    console.log("body");
	    console.log(body);
	})
	.catch((error) => {
	    console.log("error");
	    console.log(error);
	});


    }

}

export default SalasApi;

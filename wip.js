// adapted from help.magicapp.org/knowledgebase/articles/1161940
// work in progress -- not finished
// javascript code for magicapp api
auth = {'username': 'apitest@magicapp.org', 'password': 'apitest'}
url = 'https://api.magicapp.org/authenticate'

// use XHR API, built-in browser object
var xhr = new XMLHttpRequest();

// send get with required header
xhr.open('GET', url);
xhr.setRequestHeader("X-Auth-Token", auth);
xhr.send();
console.log(xhr.response);

// code to try
xhr.open("POST", yourUrl);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: value
}));

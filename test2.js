var request = require("request");

var options = {
  method: 'POST',
  url: 'https://YOUR_DOMAIN/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  form: {
    grant_type: 'authorization_code',
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    code: 'YOUR_AUTHORIZATION_CODE',
    redirect_uri: 'https://YOUR_APP/callback'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

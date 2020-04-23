import requests

import json

auth = {'username': 'apitest@magicapp.org', 'password': 'apitest'}

url = 'https://api.magicapp.org/authenticate'

r = requests.options(url)

token = r.cookies['XSRF-TOKEN']
cookies = {'XSRF-TOKEN': token}
headers = {'X-XSRF-TOKEN': token, 'Referer': url}

r = requests.post(url, data=auth, headers=headers, cookies=cookies)

authToken = r.json()['token']
headers['X-Auth-Token'] = authToken

# r = requests.get('https://www.magicapp.org/api/v1/guidelines/2', headers=headers)
r = requests.get('https://app.magicapp.org/api/v1/recommendations/59519', headers=headers)

print(r.status_code)     # To print http response code
print(r.text)            # To print formatted JSON response

# send var r.text to KO from here (?)

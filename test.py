import requests

import json

while True:
  num = input("Please enter a guideline id: ")
  try:
    val = int(num)
    print("Input is an integer number.")
    print("Input number is: ", val)
    break;
  except ValueError:
    try:
      float(num)
      print("Input is an float number.")
      print("Input number is: ", val)
      break;
    except ValueError:
      print ("This is not a number. Please enter a valid number")

# input for specific recommendation from MAGIC App

auth = {'username': 'apitest@magicapp.org', 'password': 'apitest'}

url = 'https://api.magicapp.org/authenticate'

r = requests.options(url)

token = r.cookies['XSRF-TOKEN']
cookies = {'XSRF-TOKEN': token}
headers = {'X-XSRF-TOKEN': token, 'Referer': url}

r = requests.post(url, data=auth, headers=headers, cookies=cookies)

authToken = r.json()['token']
headers['X-Auth-Token'] = authToken

# add input recommendations
# r = requests.get('https://www.magicapp.org/api/v1/guidelines/2', headers=headers)
# r = requests.get('https://app.magicapp.org/api/v1/recommendations/59519', headers=headers)
r = requests.get('https://app.magicapp.org/api/v1/recommendations/' + num, headers=headers)


print(r.status_code)     # To print http response code
print(r.text)            # To print formatted JSON response


with open("test_one.js") as f, open("index.js", 'w') as o:
    data=f.read()
    data = data.replace("var rec;","var rec = "+r.text)
    o.write(data)

# start the beginnings of the yaml files (?)

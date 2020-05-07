# check if requests module installed
try:
    import json, subprocess, requests
except ModuleNotFoundError:
    manual = input("""
    Missing requests module ...
    Download it yourself?

    Type 'no' to try auto-install: """)
    if manual == 'no':
        subprocess.call('pip install requests')
    else:
        print('\n Please manually install the requests module. \n')
        raise ModuleNotFoundError()

# consult user for specific resource number
while True:
  num = input("\n Please enter a guideline id: ")
  try:
    val = int(num)
    print("\n Input is an integer number. \n Input number is:", val)
    break;
  except ValueError:
    try:
      float(num)
      print("\n Input is an float number. \n Input number is:", val)
      break;
    except ValueError:
      print ("\n This is not a number. \n Please enter a valid number")

# api login for MAGIC App
auth = {'username': 'apitest@magicapp.org', 'password': 'apitest'}
url = 'https://api.magicapp.org/authenticate'
r = requests.options(url)

try:
    token = r.cookies['XSRF-TOKEN']
except KeyError:
    print('\n Sorry, the MagicApp API may be down... or not reachable right now \n')
cookies = {'XSRF-TOKEN': token}
headers = {'X-XSRF-TOKEN': token, 'Referer': url}

r = requests.post(url, data=auth, headers=headers, cookies=cookies)
authToken = r.json()['token']
headers['X-Auth-Token'] = authToken

# lookup and send back specific resource to the user
# r = requests.get('https://www.magicapp.org/api/v1/guidelines/2', headers=headers)
# r = requests.get('https://app.magicapp.org/api/v1/recommendations/59519', headers=headers)
r = requests.get('https://app.magicapp.org/api/v1/recommendations/' + num, headers=headers)
print(r.status_code)     # To print http response code
print(r.text)            # To print formatted JSON response

# save results to index.js file
with open("baseindex.js") as f, open("index.js", 'w') as o:
    data = f.read()
    data = data.replace("var rec;","var rec = "+r.text)
    o.write(data)

# start the beginnings of the yaml files (?)

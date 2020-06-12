# magicapi
The [MAGICApp API](https://app.magicapp.org/#/guidelines) is utilized in this repository collection to send guideline recommendation(s) to Knowledge Objects (KO). 

## File Structure
From a file-system perspective, all KOs conform to the following hierarchical structure of folders and files:

myfirstKO\
|--metadata.json\
|--service.yaml\
|--deployment.yaml\
|--src\
&nbsp;&nbsp;&nbsp;|--payload_file_1\
&nbsp;&nbsp;&nbsp;.\
&nbsp;&nbsp;&nbsp;.\
&nbsp;&nbsp;&nbsp;.\
&nbsp;&nbsp;&nbsp;|-payload_file_n


Every KO has:
a metadata.json file with descriptive information
a service.yaml file describing an API service in the OpenAPI 3.0 format
a deployment.yaml file specifying the runtime environment(s), the entry point, etc.


## How to Run Tests
By running the test.py file with the corresponding baseindex.js for the Knowledge Object will create an index.js file for the KO with the recommendation(s) retrieved from the MAGICApp. 

Copy this index.js into the src folder of the KO and compress the KO into a .zip file to upload
it into the [KGrid Library](http://library.kgrid.org/).

Once uploaded to the KGrid Library, locate the KO and click on the Live Demo icon to send the KO to the Activator. 

From there, click the button that leads to Swagger Editor to Try Out the Knowledge Object. 



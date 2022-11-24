
# Documentation

The is an Azure APIM widget that can be used for Demo purposes and is not meant to be deployed in production. It displays products from your APIM portal in a card layout. 

## Description
This widget get the Products of your APIM instance and displays them in a card layout (powered by Bootstrap) Details on the API call can be found on: https://learn.microsoft.com/en-us/rest/api/apimanagement/current-ga/product/get?tabs=JavaScript#productcontract


## Prerequist

You will need node version 14 or higher to run this widget in APIM Dev Portal.
Test the widget locally: npm start
Set config in the deploy.js file under resourceID: /<subscriptionID>/resourceGroups/<your resource group>/providers/Microsoft.ApiManagement/service/<your APIM Service name>


## Deploy to APIM Dev Portal

Deploy the custom widget to the developer portal:
'npm run deploy'


## Test locally

npm start

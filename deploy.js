const {deployNodeJS} = require("@azure/api-management-custom-widgets-tools")

const serviceInformation = {
	"resourceId": "subscriptions/b440bfa4-dfff-49d9-97e0-5f16463ebc5/resourceGroups/APIM_POC_LG/providers/Microsoft.ApiManagement/service/APIMPOCLG",
	"managementApiEndpoint": "https://management.azure.com"
}
const name = "card-tiles"
const fallbackConfigPath = "./static/config.msapim.json"

deployNodeJS(serviceInformation, name, fallbackConfigPath)

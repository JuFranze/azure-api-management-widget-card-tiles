const {deployNodeJS} = require("@azure/api-management-custom-widgets-tools")

const serviceInformation = {
	"resourceId": "",
	"managementApiEndpoint": "https://management.azure.com"
}
const name = "card-tiles"
const fallbackConfigPath = "./static/config.msapim.json"

deployNodeJS(serviceInformation, name, fallbackConfigPath)

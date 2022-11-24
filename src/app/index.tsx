import {useEffect, useState} from "react"
import {useRequest, useSecrets, useValues} from "../hooks"
import { Product } from "../values"


const App = () => {
  const values = useValues()
  const {userId} = useSecrets()
  const request = useRequest()
  //State variable to store products empty on first render and updated after API call
  const [products, setProducts] = useState<Product[]>([]);


  // query products from APIM portal via API 
  const fetchData = () => {
    return request('/products')
    .then(response => response.json())
    .then(response =>{
      console.log(response.value)
      setProducts(response.value)
    })
    .catch(e=>{
      console.error("could not retrieve products from APIM", e)
    })
  }


  useEffect(() => {

    fetchData();
    //console.log("Products: ", products)
   
  }, [userId])


  return (
  <section className="row">
    {products && products.length > 0 && products.map((product, index) => (
        <div className="col col-3" key={index}>
          <div className="card text-center" >
            <img className="card-img-top" src="https://www.easier.com/uploads/cache/thumbs/0/2/0/973/400x400/13021/legal-and-general.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title"> {product.properties.displayName}</h5>
              <p className="card-text">{product.properties.description}</p>
              <a target="_parent" href= {"https://apimpoclg.developer.azure-api.net/product#product="+ product.name} className="btn btn-primary">Explore</a>
              <p className="card-text"><small className="text-muted">{product.properties.approvalRequired ? 'Approval required' : ''}</small></p>
            </div>
          </div>
        </div>
     ))}
  </section>
 
    
  )
}

export default App

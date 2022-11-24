import {useEffect, useState} from "react"
import {useRequest, useSecrets, useValues} from "../hooks"
import {Axios} from "axios"; 


const App = () => {
  const values = useValues()
  const {userId} = useSecrets()
  const request = useRequest()
  const [defaultEmail, setDefaultEmail] = useState<string | undefined>()
  //State variable to store products empty on first render and updated after API call
  const [products, setProducts] = useState([]);


  // Option 1: using request
   //query products from APIM Portal 
   //use promise chaining
  const fetchData = () => {
    return request('/products')
    .then(response => response.json())
    .then(response =>{console.log(response.value)})
    .then(response => setProducts(products))
    .then(products => {console.log(products)})
    .catch(e=>{
      console.error("could not retrieve products from APIM", e)
    })
  }

  //Option 2: Axios use await method to make the call async
  const fetchProducts = async()=>{
    const response = await Axios ('/products');
    setProducts(response.data)
    console.log(response.value)
  }

  //runs after first render
  //array is empty at beginning
  useEffect(() => {

    //fetchData();
    fetchProducts();
    console.log("Products: ", products)
   
  }, [userId, products, request])

  if (products == undefined) return <div className="loading"> Loading</div>


  return (
  <section> API Cards
     {products && products.length > 0 && products.map((product, index) => (
        <div className="col col-3" key={index}>
          <div className="card text-center" >
            <div className="card-body">
              <img className="card-img-top" src="https://www.easier.com/uploads/cache/thumbs/0/2/0/973/400x400/13021/legal-and-general.jpg" alt="Card image cap"/>
              <h5 className="card-title">Card title </h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a target="_parent" href="https://apimpoclg.developer.azure-api.net/product#product=internal" className="btn btn-primary">Explore</a>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      ))}
  </section>
 
    
  )
}

export default App

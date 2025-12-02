const fetchData= async ()=>{
  try{
    const res= await fetch('https://dummyjson.com/products?limit=9')
    const data=await res.json()
    console.log(data.products)
    displayData(data.products)
  }catch(err){
    console.log(err)
  }
}
fetchData()

const products=document.getElementById('Products')

function displayData(dataz){
  dataz.forEach((v,i)=>{
  const pDiv=document.createElement('div')
  pDiv.classList.add('card')
  const image=document.createElement('img')
  image.classList.add('card-img-top','img-thumbnail')

  const name=document.createElement('h2')
  name.classList.add('card-title','fs-6')
  const price=document.createElement('h2')
  price.textContent="$"+v.price
  price.classList.add('card-text','fs-6')
  const cart=document.createElement('button')
  cart.textContent='Add to cart'
  cart.classList.add( 'btn', 'btn-outline-primary','mb-0')
  cart.addEventListener('click',()=>addcartitems(v))
  image.src=v.images[0]
  image.alt=v.title
  name.textContent=v.title
  // n.className="fs-6"
  pDiv.append(image,name,price,cart)
  products.appendChild(pDiv)
  

  })

  
}


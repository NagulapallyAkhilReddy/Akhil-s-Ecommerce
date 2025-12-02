const fetchData= async (url)=>{
  try{
    const res= await fetch(url)
    const data=await res.json()
    console.log(data.products)
    displayData(data.products)
  }catch(err){
    console.log(err)
  }
}
fetchData('https://dummyjson.com/products')

const mainProducts=document.getElementById('mainProducts')


function displayData(dataz){
  mainProducts.textContent=" "
  dataz.forEach((v,i)=>{
  const mainDiv=document.createElement('div')
  mainDiv.classList.add('card')
  const image=document.createElement('img')
  image.classList.add('card-img-top','img-thumbnail')

  const name=document.createElement('h2')
  const link=document.createElement('a')
  link.href=`./product.html?pid=${v.id}`
  name.classList.add('card-title','fs-6','h-2')
  const price=document.createElement('h2')
  link.appendChild(name)
  link.classList.add('card-title','fs-6','h-2')
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
  mainDiv.append(image,link,price,cart)
  mainProducts.appendChild(mainDiv)
  

  })

  
}

const fetchCatList=async()=>{
  const resL=await fetch('https://dummyjson.com/products/category-list')
  const dataL=await resL.json()
  console.log(dataL)
   displayCatList(dataL)
}
fetchCatList()
const categories=document.getElementById('categories')
function displayCatList(datazL){
  datazL.forEach((v,i)=>{
    const l=document.createElement('option')
    l.textContent=v
    categories.appendChild(l)

  })
}

categories.addEventListener('change',(e)=>
{
   fetchData(`https://dummyjson.com/products/category/${e.target.value}`);
  

})

const searchItem=document.getElementById('searchItem')
document.getElementById('searchForm').addEventListener('submit',(e)=>
{
  e.preventDefault()
  fetchData(`https://dummyjson.com/products/search?q=${searchItem.value}`)
})


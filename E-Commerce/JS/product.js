const params=new URLSearchParams(window.location.search)
console.log(params.get('pid'))
const pid=params.get('pid')

const fetchData= async (url)=>{
  try{
    const res= await fetch(url)
    const data=await res.json()
    console.log(data)
    displayData(data)
  }catch(err){
    console.log(err)
  }
}
fetchData(`https://dummyjson.com/products/${pid}`)

const productmainDiv=document.getElementById('productmainDiv')

function displayData(obj){
const rightDiv=document.createElement('div')
const title=document.createElement('h2')
title.textContent=obj.title
const price=document.createElement('p')
price.textContent=obj.price
const description=document.createElement('p')
description.textContent=obj.description
const cart=document.createElement('button')
cart.textContent='Add to Cart'
cart.classList.add("btn","btn-primary")
rightDiv.append(title,price,description,cart)
cart.addEventListener('click',()=>addcartitems(obj))

const leftDiv=document.createElement('div')
const Image=document.createElement('img')
Image.classList.add('img-thumbnail')
Image.src=obj.images[0]
Image.alt=obj.title
leftDiv.appendChild(Image)
productmainDiv.append(leftDiv,rightDiv)
}




let arr= JSON.parse(localStorage.getItem('cartitems'))??[];

function addcartitems(product){
   arr.push(product)
   localStorage.setItem('cartitems',JSON.stringify(arr))  
   localStorage.setItem('count',arr.length  )
   document.getElementById('cartcount').textContent=localStorage.getItem('count')
}
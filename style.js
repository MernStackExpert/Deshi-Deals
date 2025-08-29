
// const cartButton = document.getElementsByClassName("cart-btn")

// for(const button of cartButton){
//   button.addEventListener('click' , function(){
//   alert("hello")
// })
// }


document.getElementById("product-box-container").addEventListener('click' , function(event){
   if(event.target.className.includes("cart-btn")){
    const cartBtn = event.target
    
    const productPrice = cartBtn.parentNode.parentNode.children[2].children[0].innerText

    const productImg = cartBtn.parentNode.parentNode.parentNode.children[0].children[0].src

    const productName = cartBtn.parentNode.parentNode.children[0].innerText

    const productCartContainer = document.getElementById("product-cart-container");

    const newCart = document.createElement("div");

    newCart.innerHTML =`
     <div class="h-[80px] w-full flex justify-between items-center bg-[#f4f1f1] pr-[10px]  mt-[15px] rounded-lg">
                  <img class="w-[96px] h-[70px]" src="${productImg}" alt="product">
                  <div class="space-y-5">
                    <h1 class="font-[600]">${productName}</h1>
                    <p><span>${productPrice}</span> tk</p>
                  </div>
                </div>
    `

    productCartContainer.append(newCart)

    const totalQuantity = document.getElementById("total-quantity");

    totalQuantity.innerText++

    const totalPrice = document.getElementById("total-price").innerText;

    const finalPrice =  Number(totalPrice) + Number(productPrice);

    document.getElementById("total-price").innerText = finalPrice

    alert("Product Added ✅")
   }

})


document.getElementById("make-purchase").addEventListener('click' , function(){
  if(document.getElementById("product-cart-container").innerText !== ""){
  alert("Purchases ✅✅")
  document.getElementById("product-cart-container").innerText = "";
  }else{
    alert("Plese Add Some Product 🔴")
  }
})
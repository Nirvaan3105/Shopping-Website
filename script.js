const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active')
    })
}
if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active')
    })
}




if(!localStorage.getItem("cart")){
    localStorage.setItem("cart",[]); 
}



let items = {
    1:{
    name: "Men's Fashion t-shirt",
    price: 139,
    img: "img/products/f1.jpg",
    },
    2:{
        name: "Men's Fashion t-shirt",
        price: 142,
        img: "img/products/f2.jpg",
    },
    3:{
        name: "Men's Fashion t-shirt",
        price: 123,
        img: "img/products/f3.jpg",
    },
    4:{
        name: "Men's Fashion t-shirt",
        price: 119,
        img: "img/products/f4.jpg"
    }
}


function addCart(id) {

    let qty = document.querySelector("input").value

    let cartItem = {
        id: id,
        qty: Number(qty)
    }
    
    let items = localStorage.getItem("cart")
    if(!items)
        {
            items= []
        }
        else{
            items= JSON.parse(items)
        }

    items.push(cartItem)
    localStorage.setItem("cart",JSON.stringify(items))

}



let cartPage = window.location
if(cartPage.pathname == "/cart.html"){


    fillCart()
    function updateQty(e,a){
        
            
            
            let cartItems = localStorage.getItem("cart")
            if(!cartItems)
            {
                cartItems= []
            }
            else{
                cartItems= JSON.parse(cartItems)
            }
            
            let item = cartItems.find(i=>i.id==a)
            let i = cartItems.indexOf(item)
            cartItems[i].qty = Number(e.target.value)
            localStorage.setItem("cart",JSON.stringify(cartItems));
            fillCart()
    }

    function removeItem(id){
        let cartItems = localStorage.getItem("cart")
        if(!cartItems)
        {
            cartItems= []
        }
        else{
            cartItems= JSON.parse(cartItems)
        }
        // let item = cartItems.find(i=>i.id==id)
        // let i = cartItems.indexOf(item)
        // delete cartItems[i]
        let newArr = []
        cartItems.forEach(i=>{
            if(i.id!=id){
                newArr.push(i)
            }
        })
        localStorage.setItem("cart",JSON.stringify(newArr));
        fillCart()
    }

    function fillCart(){
        document.getElementById("cart-items").innerHTML=""
        let cartItems = localStorage.getItem("cart")
        let total = 0;
        if(!cartItems)
        {
            cartItems= []
        }
        else{
            cartItems= JSON.parse(cartItems)
        }
        
        cartItems.forEach((i)=>{
            let amt = Number(items[i.id].price) * Number(i.qty);
            total +=amt
            let div = `<tr class="trow" id="${i.id}">
            <td><a href="#"><i class="far fa-times-circle cart-remove" onclick="removeItem(${i.id})"></i></a></td>
            <td><img src="${items[i.id].img}" alt=""></td>
            <td>${items[i.id].name}</td>
            <td>${items[i.id].price}</td>
            <td><input class="qty" type="number" val="${i.id}" value=${i.qty} onchange="updateQty(event,${i.id})" min="1"></td>
            <td class="total">${amt}</td>
        </tr>`
        
        document.getElementById("cart-items").innerHTML+=div
        
        })
        document.getElementById("cart-total").innerText= `$${total}`
        document.getElementById("final-price").innerText= `$${total}`
    }
}


var MainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName('small-img');
console.log("running");
smallImg[0].onmouseover = function(){
    MainImg.src = smallImg[0].src;
}
smallImg[1].onmouseover = function(){
    MainImg.src = smallImg[1].src;
}
smallImg[2].onmouseover = function(){
    MainImg.src = smallImg[2].src;
}
smallImg[3].onmouseover = function(){
    MainImg.src = smallImg[3].src;
}
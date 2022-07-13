const product =[
    {
        id: 1,
        img: "img/products/f1.jpg",
        spans:"adidas",
        title:"adidas skirt L",
        price:"$23",

    },
    {
        id: 2,
        img: "img/products/f2.jpg",
        spans:"nike",
        title:"big boss brother t-shirt",
        price:"$67",

    },
    {
        id: 3,
        img: "img/products/f3.jpg",
        spans:"zara",
        title:"women outdoor skirt",
        price:"$123",

    },
    {
        id: 4,
        img: "img/products/f4.jpg",
        spans:"zara",
        title:"men outdoor t-shir",
        price:"$45",

    },
    {
        id: 5,
        img: "img/products/f5.jpg",
        spans:"glory",
        title:"asdi writer book",
        price:"$55",

    },
    {
        id: 6,
        img: "img/products/f6.jpg",
        spans:"beauty-Mom",
        title:"alloha lorem shirt",
        price:"$267",

    },
    {
        id: 7,
        img: "img/products/f7.jpg",
        spans:"LCW",
        title:"arten coster coat",
        price:"$854",

    },
    {
        id: 8,
        img: "img/products/f8.jpg",
        spans:"koton",
        title:"pantol for men ",
        price:"$59",

    },
]
const arriv =[
    {
        id: 1,
        img: "img/products/n1.jpg",
        spans:"adidas",
        title:"adidas skirt L",
        price:"$23",

    },
    {
        id: 2,
        img: "img/products/n2.jpg",
        spans:"nike",
        title:"big boss brother t-shirt",
        price:"$67",

    },
    {
        id: 3,
        img: "img/products/n3.jpg",
        spans:"zara",
        title:"women outdoor skirt",
        price:"$123",

    },
    {
        id: 4,
        img: "img/products/n4.jpg",
        spans:"zara",
        title:"men outdoor t-shir",
        price:"$45",

    },
    {
        id: 5,
        img: "img/products/n5.jpg",
        spans:"glory",
        title:"asdi writer book",
        price:"$55",

    },
    {
        id: 6,
        img: "img/products/n6.jpg",
        spans:"beauty-Mom",
        title:"alloha lorem shirt",
        price:"$267",

    },
    {
        id: 7,
        img: "img/products/n7.jpg",
        spans:"LCW",
        title:"arten coster coat",
        price:"$854",

    },
    {
        id: 8,
        img: "img/products/n8.jpg",
        spans:"koton",
        title:"pantol for men ",
        price:"$59",

    },
] 

const displayArivvels= document.querySelector(".arrivals")
const displayProduct = document.querySelector(".pro-container")

const showBar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const closeBar = document.getElementById("close")

if(bar){
    bar.addEventListener("click",function(){
        nav.classList.add("active")
    })
}
if(close){
    close.addEventListener("click",function(){
        nav.classList.remove("active")
        
    })
}


window.addEventListener("DOMContentLoaded",function(){
    getArrivals(arriv)
})
window.addEventListener("DOMContentLoaded",function(){
    getProduct(product)
})
function getArrivals(item){
    let setArrivals = item.map(function(chosee){
        return`  
        <div class="pro">
            <img src=${chosee.img} alt="">
            <div class="description">
            <span>${chosee.spans}</span>
            <h5>${chosee.title} </h5>
            <div class="star"> 
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
            </div>
            <h4>${chosee.price}</h4>
            </div>
            <a href="#"> <i class="fal fa-shoping-cart cart">ad</i></a>
        </div>
        `
    })
    setArrivals = setArrivals.join("")
    displayArivvels.innerHTML = setArrivals
}
function getProduct(item){
    let setProduct = item.map(function(chosee){
        return` 
        <div class="pro">
        <img src=${chosee.img} alt="">
        <div class="description">
          <span>${chosee.spans}</span>
          <h5>${chosee.title} </h5>
          <div class="star"> 
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
            <i class="fas fa-star"> </i>
          </div>
          <h4>${chosee.price}</h4>
        </div>
        <a href="#"> <i class="fal fa-shoping-cart cart">ad</i></a>
    </div>
        `
    })
    setProduct = setProduct.join("")
    displayProduct.innerHTML = setProduct
}


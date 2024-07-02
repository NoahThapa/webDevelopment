const up = document.getElementById("top");
up.addEventListener('click', function() {
    const homeElement = document.getElementById("home");

    homeElement.scrollIntoView({
        behavior: 'smooth'
    });
});



const Up = document.getElementById("topp");
Up.addEventListener('click', function() {   
    const homeElement = document.getElementById("home");    
    homeElement.scrollIntoView({
        behavior: 'smooth' 
    });
});




const Uup = document.getElementById("toppp");
Uup.addEventListener('click', function() {   
    const homeElement = document.getElementById("home");    
    homeElement.scrollIntoView({
        behavior: 'smooth' 
    });
});

const product = document.getElementById("product-link");
product.addEventListener('click',function(){
    const productElement = document.getElementById("product")
    productElement.scrollIntoView({
        behavior:"smooth"
    });
});
const explore = document.getElementById("explore");
explore.addEventListener('click',function(){
    const exploreElement = document.getElementById("product")
    exploreElement.scrollIntoView({
        behavior:"smooth"
    });
});

const review = document.getElementById("review-link");
review.addEventListener('click',function(){
    const reviewElement = document.getElementById("review")
    reviewElement.scrollIntoView({
        behavior:"smooth"
    });
})

const contact = document.getElementById("contact-link");
contact.addEventListener('click',function(){
    const contactElement = document.getElementById("contact")
    contactElement.scrollIntoView({
        behavior:"smooth"
    });
});

const buy = document.getElementById("buy")
buy.addEventListener('click',function(){
    alert('Product is currently out of stock!!!')
})
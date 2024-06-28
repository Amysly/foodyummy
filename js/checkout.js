import { products } from './product.js';
import { cartItems } from './cart.js';
import { navbarToggler } from './index.js';

navbarToggler();

let addRecipient = document.getElementById('Recipient');
let deliveryAddress = document.getElementById ('delivery-add');
let formContainer = document.querySelector('.form-container');
let checkOutBody = document.querySelector('.checkout');
let closeMenuIcon = document.querySelector('.close-icon');
let closeMenuIconTwo = document.querySelector('.close-icon-two');
let formTwo = document.querySelector('.form-two');


addRecipient.addEventListener('click',function (e) {
   if (e.target.className === 'add-reci') {
     formContainer.style.display = 'block';
     checkOutBody.style.filter = 'blur(2px)';
   }
})

closeMenuIcon.addEventListener('click',function () {
    formContainer.style.display = 'none';
    checkOutBody.style.filter = 'blur(0px)';
       
});

closeMenuIconTwo.addEventListener('click',function () {
    formTwo.style.display = 'none';
    checkOutBody.style.filter = 'blur(0px)';
});

deliveryAddress.addEventListener('click',function (e) {
    if (e.target.className === 'btn-del') {
      formTwo.style.display = 'block';
      checkOutBody.style.filter = 'blur(2px)';
    }
 })


    const myName = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const submit = document.getElementById('submit');

    submit.addEventListener('click', function (e) {
        e.preventDefault();

       if (myName.trim() === "") {
            alert("Name can't be blank");
            return false;
        }

        if (email.trim() === "") {
            alert("email can't be blank");
            return false;
        }

        if (phone.trim() === "") {
            alert("phone number can't be blank");
            return false;
        }else if (isNaN(phone)) {
            alert("it must be a number");
            return false;
        } else if(phone.length > 11){
            alert("phone number is more than 11");
        }else if(phone.length < 11){
            alert("phone number is less than 11")
        }else{
            return true
        }
      
    });





let checkOutProduct = '';

cartItems.forEach((cartItem) => {
    const productId = cartItem;
  
    let matchingProduct = '';
  
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
      console.log(matchingProduct);
    });
        let checkOutSummary = `
            <div class="second-con">
                <h3>Your order from</h3>
                <div class="border-line"></div>
                <div>
                    <div class="price-item">
                        <h3>${matchingProduct.name}</h3>
                          <div><i class="fa-solid fa-trash-can"></i></div>
                        <h3>${matchingProduct.price}</h3>
                    </div>
                    <div class="quantity-container">
                        <button class="subtract-button" data-index="">-</button>
                        <button class="item-quantity" data-index="">0</button>
                        <button class="add-button" data-index="">+</button>
                    </div>
                    <div class="border-line"></div>
                </div>
                <div class="item-summary">
                    <h3>Items total:</h3>
                    <h3>0.0</h3> <!-- Replace with actual calculation -->
                </div>
                <div class="item-summary">
                    <h3>Discount:</h3>
                    <h3>0.0</h3> <!-- Replace with actual calculation -->
                </div>
                <div class="item-summary">
                    <h3>Delivery charge:</h3>
                    <h3>0.0</h3> <!-- Replace with actual calculation -->
                </div>
                <div class="border-line"></div>
                <div class="item-summary">
                    <h3>Total:</h3>
                    <h3>0.0</h3> <!-- Replace with actual calculation -->
                </div>
            </div>
        `;
        checkOutProduct += checkOutSummary;
        
    
});

//console.log(checkOutProduct);

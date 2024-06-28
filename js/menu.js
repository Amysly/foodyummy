import { products } from './product.js';
import { cartItems } from './cart.js';
import { navbarToggler } from './index.js';

navbarToggler();

let cartQuantity= 0;

document.addEventListener('DOMContentLoaded', () => {
    const searchMenu = document.getElementById('search-menu');
    const cartMessage = document.querySelector('.cart-message');
    const productContainer = document.querySelector('.js-product-item');

    if (!searchMenu || !cartMessage || !productContainer) {
        console.error('Required DOM elements are missing.');
        return;
    }

    searchMenu.addEventListener('keyup', (e) => {
        const searchText = e.target.value.toLowerCase();
        const menuLists = document.querySelectorAll('.food-items');

        menuLists.forEach((menuList) => {
            const searchItem = menuList.textContent.toLowerCase();
            menuList.style.display = searchItem.includes(searchText) ? 'block' : 'none';
            if (searchItem.includes(searchText)) {
                menuList.style.width = '400px';
            }
        });
    });

    let allProducts = '';

    products.forEach((product, index) => {
        let productSummary = `
            <div class="food-items">
                <img src="${product.image}" alt="${product.name}">
                <div class="details">
                    <div class="details-sub">
                        <h5>${product.name}</h5>
                        <h5 class="price">${product.price}</h5>
                    </div>
                    <div class="quantity-container">
                        <button class="subtract-button" data-index="${index}">-</button>
                        <button class="item-quantity" data-index="${index}">1</button>
                        <button class="add-button" data-index="${index}">+</button>
                    </div>
                    <p>Freshly made burger with fries</p>
                    <button class="add-to-cart" data-product="${product.id}">Add To Cart</button>
                </div>
            </div>
        `;

        allProducts += productSummary;
    });

    productContainer.innerHTML = allProducts;

    // Add event listeners to all add and subtract buttons
    const subtractButtons = document.querySelectorAll('.subtract-button');
    const addButtons = document.querySelectorAll('.add-button');

    subtractButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            const itemQuantity = document.querySelector(`.item-quantity[data-index="${index}"]`);
            let quantity = Number(itemQuantity.innerHTML);

            if (quantity > 1) {
                quantity--;
                itemQuantity.innerHTML = quantity;
                cartQuantity--;
                updateCartQuantityDisplay();
            }
        });
    });

    addButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            const itemQuantity = document.querySelector(`.item-quantity[data-index="${index}"]`);
            let quantity = Number(itemQuantity.innerHTML);

           quantity++;
            itemQuantity.innerHTML = quantity;
            cartQuantity;
        });
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((button ,index) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.product;
           const product = products.find(p => p.id === productId);
            const itemQuantity = document.querySelector(`.item-quantity[data-index="${index}"]`);
            let buttonItemQuantity = itemQuantity.textContent;
            console.log(buttonItemQuantity);
            let quantity = Number(itemQuantity.innerHTML);
        cartItems.push(product);
               
                cartQuantity +=quantity
                displayMessage('Item has been added to the cart');
                updateCartQuantityDisplay();
            
        });
    });

    function updateCartQuantityDisplay() {
        const cartQuantityElement = document.querySelector('.cart-quantity');
        if (cartQuantityElement) {
            cartQuantityElement.innerHTML = cartQuantity;
        }
    }

    function displayMessage(message) {
        cartMessage.innerHTML = message;
        cartMessage.style.backgroundColor = 'black';

        setTimeout(() => {
            cartMessage.innerHTML = '';
            cartMessage.style.backgroundColor = '';
        }, 2000);
    }
});

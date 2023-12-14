"use strict"

let buttonForAdd = document.getElementsByClassName("product__quantity-control product__quantity-control_inc");

let buttonForDelet = document.getElementsByClassName("product__quantity-control product__quantity-control_dec");

let amtOfProduct = document.getElementsByClassName("product__quantity-value");

let buttonForBasket = document.getElementsByClassName("product__add");

let imageForProduct = document.getElementsByClassName("product__image");

let cartOfProduct = document.getElementsByClassName("cart__products");

let cartOfProductItem = cartOfProduct.item(0);

let product = document.getElementsByClassName("product");

let cartProduct = document.getElementsByClassName("cart__product");

let cartProductImage = document.getElementsByClassName("cart__product-image");

let cartProductCount = document.getElementsByClassName("cart__product-count");

for (let i = 0; i < buttonForAdd.length; i++) {
	
	let buttonForAddItem = buttonForAdd.item(i);
	let buttonForDeletItem = buttonForDelet.item(i);
	let amtOfProductItem = amtOfProduct.item(i);
	let buttonForBasketItem = buttonForBasket.item(i);
	let imageForProductItem = imageForProduct.item(i);
	let productItem = product.item(i);
	
	function addProduct() {
	    if (buttonForAddItem.closest(".product__quantity-controls") === amtOfProductItem.closest(".product__quantity-controls")) {
			amtOfProductItem.textContent = Number(amtOfProductItem.textContent) + 1;
		} if (Number(amtOfProductItem.textContent) < 0) {
			amtOfProductItem.textContent = 0;
		}
	}
	
	function deleteProduct() {
	    if (buttonForDeletItem.closest(".product__quantity-controls") === amtOfProductItem.closest(".product__quantity-controls")) {
			amtOfProductItem.textContent = Number(amtOfProductItem.textContent) - 1;
		} if (Number(amtOfProductItem.textContent) < 0) {
			amtOfProductItem.textContent = 0;
		}
	}
	
	function addToBasket() {
		
		if (buttonForBasketItem.closest(".product__quantity-controls") === imageForProductItem.closest(".product__quantity-controls")) {
						
			for (let j = 0; j < cartProduct.length + 1; j++) {
		        let cartProductItemInBasket = cartProduct.item(j);
				let cartProductCountItem = cartProductCount.item(j);
				if (cartProductItemInBasket !== null && cartProductItemInBasket.dataset.id === productItem.dataset.id) {
					cartProductCountItem.textContent = Number(cartProductCountItem.textContent) + Number(amtOfProductItem.textContent);
		        }
			}
		
		    cartOfProductItem.innerHTML += `
                <div class="cart__product">
                    <img class="cart__product-image">
                    <div class="cart__product-count">${amtOfProductItem.textContent}</div>
                </div>
            `;
		
		    let cartProductItem = cartProduct.item(i);
		    cartProductItem.dataset.id = productItem.dataset.id;
		
			let cartProductImageItem = cartProductImage.item(i);
		    cartProductImageItem.src = imageForProductItem.src;
		
	    }
			
    }
			
	buttonForAddItem.addEventListener('click', addProduct);
	
	buttonForDeletItem.addEventListener('click', deleteProduct);
	
	buttonForBasketItem.addEventListener('click', addToBasket);
	
}

export default function cart() {
	const cart = document.getElementById("js-cart");
	const cartList = document.getElementById("js-cart-list");
	const initCartBtn = document.getElementById("js-cart-btn");

	function initCart() {
		this.classList.toggle("active");
		cart.classList.toggle("active");
	}
  
	initCartBtn.addEventListener("click", initCart);

	function update() {
		addEvents();
		updateTotal();
	}

	function addEvents() {
		const removeBtn = cart.querySelectorAll(".remove");
		removeBtn.forEach((btn) => btn.addEventListener("click", deleteItem));

		const addCartButtons = document.querySelectorAll("[data-control-cart]");
		addCartButtons.forEach((btn) => btn.addEventListener("click", addItem));
	}

	function deleteItem() {}

	function addItem(element) {
		element = this.parentElement.parentElement;
		let imgFront = element.querySelector("[data-control-cart='image']").src;
		let title = element.querySelector("[data-control-cart='title']").innerHTML;
		let price = element.querySelector("[data-control-cart='price']").innerHTML;

		const cartItem = createCartItem(imgFront, title, price);
		const listItem = document.createElement("li");
		listItem.classList.add("cart-item");
		listItem.innerHTML = cartItem;
		cartList.append(listItem);
	}

	function updateTotal() {}

	function createCartItem(imgFront, title, price) {
		return `
    <div class="cart-item-image">
      <img src="${imgFront}" alt="suit">
    </div>
    <div class="cart-item-info">
      <h2 class="cart-item-title">${title}</h2>
      <span class="cart-item-price">${price}</span>
      <div class="cart-item-quantity">
        <button class="decrement">-</button>
        <span class="quantity">1</span>
        <button class="increment">+</button>
      </div>
    </div>
    <button class="remove">
      <span class="material-symbols-outlined">delete</span>
    </button>`;
	}
	return update();
}

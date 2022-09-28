export default function cart() {
	const cart = document.getElementById("js-cart");
	const initCartBtn = document.getElementById("js-cart-btn");
	const tooltip = document.querySelector(".tooltip");

	function initCart() {
		this.classList.toggle("active");
		cart.classList.toggle("active");
		tooltip.classList.remove("active");
	}

	initCartBtn.addEventListener("click", initCart);
}

export function cartEvents() {
	function update() {
		updateTotal();
	}

	const cartList = document.getElementById("js-cart-list");

	function addEvents() {
		const removeBtn = cartList.querySelectorAll(".remove");
		removeBtn.forEach((btn) => btn.addEventListener("click", deleteItem));

		const addCartButtons = document.querySelectorAll(
			"[data-control-cart='btn']"
		);
		addCartButtons.forEach((btn) => btn.addEventListener("click", addItem));

		const quantityBtns = document.querySelectorAll(".cart-item-quantity");
		quantityBtns.forEach((btn) => {
			btn.addEventListener("click", handleQuantity);
		});
	}
	addEvents();

	function deleteItem() {
		this.parentElement.parentElement.remove();
		update();
	}

	function addItem(element) {
		element = this.parentElement.parentElement;
		let imgFront = element.querySelector("[data-control-cart='wide']").src;
		let title = element.querySelector("[data-control-cart='title']").innerHTML;
		let price = element.querySelector("[data-control-cart='price']").innerHTML;

		const cartItem = createCartItem(imgFront, title, price);
		const listItem = document.createElement("li");
		listItem.classList.add("cart-item");
		listItem.innerHTML = cartItem;
		cartList.appendChild(listItem);
		addEvents();
		updateTotal();
	}

	function handleQuantity(e) {
		if (e.target.classList.contains("increment")) {
			e.target.parentElement.querySelector(".quantity").innerText++;
			update();
		} else {
			e.target.parentElement.querySelector(".quantity").innerText--;
			update();
		}
	}

	function updateTotal() {
		const empty = document.querySelector(".empty");
		const cartItens = document.querySelectorAll(".cart-item");
		const subtotal = document.getElementById("subtotal");
		const total = document.getElementById("total");
		const cartCounter = document.querySelector(".cart-counter");
		let totalQuantity = 0;
		let totalPrice = 0;

		cartItens.forEach((item) => {
			const priceElement = item.querySelector(".cart-item-price");
			const quantityElement = item.querySelector(".quantity");

			const quantity = +quantityElement.innerHTML;
			const price = +priceElement.innerHTML.slice(2);
			totalPrice += price * quantity;
			totalQuantity += quantity;

			if (quantity === 0) {
				item.remove();
			}
		});

		if (totalQuantity >= 1) {
			empty.classList.add("hide");
		} else {
			empty.classList.remove("hide");
		}

		cartCounter.innerText = totalQuantity;
		subtotal.innerHTML = `$ ${totalPrice}.00`;
		total.innerHTML = `$ ${totalPrice + 8}.00`;

		// TOOLTIP

		const cart = document.getElementById("js-cart");
		if (!cart.classList.contains("active")) {
			const tooltip = document.querySelector(".tooltip");
			tooltip.classList.add("active");

			function closeTooltip() {
				tooltip.classList.remove("active");
			}

			setTimeout(closeTooltip, 8000);
		}
	}

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
			<button class="remove">
      <span class="material-symbols-outlined">delete</span>
    </button>
    </div>`;
	}
}

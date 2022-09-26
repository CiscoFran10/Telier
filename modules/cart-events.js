export default function cartEvents() {
	const cartList = document.getElementById("js-cart-list");

	function update() {
		addEvents();
		updateTotal();
	}

	function modalBtn() {
		const initModal = document.querySelectorAll(".card .images");
		initModal.forEach((item) =>
			item.addEventListener("click", () => {
				const modalBtn = document.querySelector(".modal-btn");
				console.log(modalBtn);
				modalBtn.addEventListener("click", addItem);
			})
		);
	}
	modalBtn();

	function addEvents() {
		const removeBtn = cartList.querySelectorAll(".remove");
		removeBtn.forEach((btn) => btn.addEventListener("click", deleteItem));

		const addCartButtons = document.querySelectorAll("[data-control-cart]");
		addCartButtons.forEach((btn) => btn.addEventListener("click", addItem));
	}
	addEvents();

	function deleteItem() {
		this.parentElement.parentElement.remove();
		update();
	}

	function addItem(element) {
		element = this.parentElement.parentElement;
		let imgFront = element.querySelector("[data-control-cart='image']").src;
		let title = element.querySelector("[data-control-cart='title']").innerHTML;
		let price = element.querySelector("[data-control-cart='price']").innerHTML;

		const cartItem = createCartItem(imgFront, title, price);
		const listItem = document.createElement("li");
		listItem.classList.add("cart-item");
		listItem.innerHTML = cartItem;
		cartList.appendChild(listItem);
		update();
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
			<button class="remove">
      <span class="material-symbols-outlined">delete</span>
    </button>
    </div>`;
	}
	return addItem;
}

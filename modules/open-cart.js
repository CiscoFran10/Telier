export default function openCart() {
	const cart = document.getElementById("js-cart");
	const initCartBtn = document.getElementById("js-cart-btn");

	function initCart() {
		this.classList.toggle("active");
		cart.classList.toggle("active");
	}

	initCartBtn.addEventListener("click", initCart);
}

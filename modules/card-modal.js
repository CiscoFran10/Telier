import { cartEvents } from "./cart.js";
import { database } from "./database.js/products.js";

export function cardModal() {
	const modalContainer = document.querySelector(".modal-container");
	const cards = document.querySelectorAll(".card .images");

	cards.forEach((card) => {
		card.addEventListener("click", openModal);
	});

	function openModal(e) {
		const cardId = e.target.parentElement.parentElement.getAttribute("id");
		const card = database.filter((item) => item.id === +cardId);

		card.map((item) => {
			let { title, description, imageFront, imageBack, price } = item;

			let wide = (modalContainer.querySelector(
				"[data-control-cart='wide']"
			).src = imageFront);
			let small = (modalContainer.querySelector(
				"[data-control-cart='small']"
			).src = imageBack);
			let scale = (modalContainer.querySelector(
				"[data-control-cart='scale']"
			).src = imageFront);

			let modalTitle = (modalContainer.querySelector(
				"[data-control-cart='title']"
			).innerHTML = title);
			let modalPrice = (modalContainer.querySelector(
				"[data-control-cart='price']"
			).innerHTML = "$ " + price);

			// let modalDescription = document.querySelector(
			// 	"[data-control-cart='description']"
			// );
			// modalDescription = description;
		});

		modalContainer.classList.toggle("ativo");
	}

	function closeModal(e) {
		const closeBtn = document.querySelector(".close");
		if (e.target === closeBtn || e.target === modalContainer) {
			modalContainer.classList.remove("ativo");
		}
	}
	modalContainer.addEventListener("click", closeModal);
}

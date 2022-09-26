import cartEvents from "./cart-events.js";

export default function cardModal() {
	const modalContainer = document.querySelector(".modal-container");
	const cards = document.querySelectorAll(".card .images");

	cards.forEach((card) => {
		card.addEventListener("click", openModal);
	});

	function openModal(element) {
		element = this.parentElement;
		let imgFront = element.querySelector(".img-front").src;
		let imageBack = element.querySelector(".img-hover").src;
		let title = element.querySelector(".card-title").innerHTML;
		let price = element.querySelector(".card-price").innerHTML;
		// let description = element.querySelector(".card-description").innerHTML;

		const modal = createModal(imgFront, imageBack, title, price);

		modalContainer.innerHTML = modal;
		modalContainer.classList.toggle("ativo");
	}

	function closeModal(e) {
		const closeBtn = document.querySelector(".close");
		if (e.target === closeBtn || e.target === modalContainer) {
			modalContainer.classList.remove("ativo");
		}
	}
	modalContainer.addEventListener("click", closeModal);

	function createModal(imgFront, imageBack, title, price) {
		return `<div class="modal">
    <button class="close">X</button>
    <div class="modal-images">
		<div class="wide"><img data-control-cart="image" src="${imgFront}" alt="img-1"></div>
		<div class="small"><img src="${imageBack}" alt="img-2"></div>
		<div class="scale"><img src="${imgFront}" alt="img-3"></div>
    </div>
    <div class="modal-info">
		<h2 class="modal-title" data-control-cart="title">${title}</h2>
      <p class="modal-description">Sharpen up your formalwear with Jeff Banks this season, the epitome of the quintessential English gentleman. Designed for any occasion, this lightweight, breathable linen suit jacket is the perfect summer piece.</p>
      <span class="modal-price" data-control-cart="price">${price}</span>
      <button class="modal-btn">Add to Cart +</button>
			</div>
			</div>
			`;
	}
}

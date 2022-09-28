import { cardModal } from "./card-modal.js";
import { cartEvents } from "./cart.js";
import { database } from "./database.js/products.js";

export default function filterShop() {
	function generateCards(data) {
		const grid = document.querySelector(".products");
		return (grid.innerHTML = data
			.map((item) => {
				let { title, imageFront, imageBack, price, id } = item;
				return `<div class="card" id="${id}">
			<div class="images">
				<img class="img-front" data-control-cart='wide' src="${imageFront}" alt="product">
				<img class="img-hover"  src="${imageBack}">
			</div>
			<h2 class="card-title" data-control-cart="title">${title}</h2>
			<div class="flex">
				<span class="card-price" data-control-cart="price">$ ${price}.00</span>
				<button data-control-cart="btn">Add to Cart</button>
			</div>
		</div>`;
			})
			.join(" "));
	}

	function filter() {
		const suits = database.filter((item) => item.category.includes("suit"));
		const shoes = database.filter((item) => item.category.includes("shoe"));
		const accessories = database.filter((item) =>
			item.category.includes("accessory")
		);

		const navBtn = document.querySelectorAll(".nav-list .btn");

		navBtn[0].classList.add("active");
		generateCards(database);
		cardModal();
		cartEvents();

		function filterItens(e) {
			navBtn.forEach((btn) => btn.classList.remove("active"));
			e.target.classList.add("active");

			if (e.target.id === "suits-btn") {
				generateCards(suits);
				cardModal();
				cartEvents();
			} else if (e.target.id === "shoes-btn") {
				generateCards(shoes);
				cardModal();
				cartEvents();
			} else if (e.target.id === "accessory-btn") {
				generateCards(accessories);
				cardModal();
				cartEvents();
			} else if (e.target.id === "all-btn") {
				generateCards(database);
				cardModal();
				cartEvents();
			}
		}

		navBtn.forEach((btn) => btn.addEventListener("click", filterItens));
	}
	filter();

	function search() {
		const searchBtn = document.getElementById("search-btn");
		searchBtn.addEventListener("click", openSearch);
		const searchInput = document.getElementById("search-input");

		const notFound = document.querySelector(".not-found");

		function openSearch(e) {
			e.preventDefault();

			if (searchInput.classList.contains("ativo")) {
				searchItens();
			}

			searchInput.classList.add("ativo");
			searchInput.focus();
		}

		function searchItens() {
			let searchValue = searchInput.value.toLowerCase();

			if (searchValue) {
				const filter = generateCards(
					database.filter((item) =>
						item.title.toLowerCase().includes(searchValue)
					)
				);
				cardModal();
				cartEvents();

				if (filter === "") {
					notFound.classList.add("show");
				} else {
					notFound.classList.remove("show");
				}

				function verificaInput() {
					if (searchInput.value === "") {
						generateCards(database);
						notFound.classList.remove("show");
						cardModal();
						cartEvents();
					}
				}
				searchInput.addEventListener("keyup", verificaInput);
			}
		}

		function closeInput(e) {
			if (e.target !== searchBtn && e.target !== searchInput) {
				searchInput.classList.remove("ativo");
			}
		}
		window.addEventListener("click", closeInput);
	}
	search();
}

export default function filterShop() {
	const database = [
		{
			title: "Jeff Banks Classic Beige Suit",
			imageFront: "./img/suit-1/suit-front.jpg",
			imageBack: "./img/suit-1/suit-back.jpg",
			price: 244,
			category: "suit",
		},
		{
			title: "Racing Green Tailored Navy Suit",
			imageFront: "./img/suit-2/suit-front.jpg",
			imageBack: "./img/suit-2/suit-back.jpg",
			price: 340,
			category: "suit",
		},
		{
			title: "Antique Rogue Light Blue Suit",
			imageFront: "./img/suit-3/suit-front.jpg",
			imageBack: "./img/suit-3/suit-back.jpg",
			price: 144,
			category: "suit",
		},
		{
			title: "Ben Sherman Slim Grey Suit",
			imageFront: "./img/suit-4/suit-front.jpg",
			imageBack: "./img/suit-4/suit-back.jpg",
			price: 544,
			category: "suit",
		},
		{
			title: "Racing Green Black Twill Suit",
			imageFront: "./img/suit-5/suit-front.jpg",
			imageBack: "./img/suit-5/suit-back.jpg",
			price: 644,
			category: "suit",
		},
		{
			title: "Limehaus Slim Pink Texture Suit",
			imageFront: "./img/suit-6/suit-front.jpg",
			imageBack: "./img/suit-6/suit-back.jpg",
			price: 150,
			category: "suit",
		},
		{
			title: "Jack & Jones White Faux Trainer",
			imageFront: "./img/shoes/shoe-1.jpg",
			imageBack: "./img/shoes/shoe-1-back.jpg",
			price: 134,
			category: "shoe",
		},
		{
			title: "Racing Green Black Brogues",
			imageFront: "./img/shoes/shoe-2.jpg",
			imageBack: "./img/shoes/shoe-2-back.jpg",
			price: 44,
			category: "shoe",
		},
		{
			title: "Racing Green Tan Brogues",
			imageFront: "./img/shoes/shoe-3.jpg",
			imageBack: "./img/shoes/shoe-3-back.jpg",
			price: 46,
			category: "shoe",
		},
		{
			title: "Black Slip on Formal Shoes",
			imageFront: "./img/shoes/shoe-4.jpg",
			imageBack: "./img/shoes/shoe-4-back.jpg",
			price: 32,
			category: "shoe",
		},
		{
			title: "Ben Sherman Fulford Loafers",
			imageFront: "./img/shoes/shoe-5.jpg",
			imageBack: "./img/shoes/shoe-5-back.jpg",
			price: 20,
			category: "shoe",
		},
		{
			title: "Tan Lace up Brogues",
			imageFront: "./img/shoes/shoe-6.jpg",
			imageBack: "./img/shoes/shoe-6-back.jpg",
			price: 24,
			category: "shoe",
		},
		{
			title: "Jeff Banks Navy Melton Cap",
			imageFront: "./img/acessorios/hat-1.jpg",
			imageBack: "./img/acessorios/hat-1.jpg",
			price: 10,
			category: "accessory",
		},
		{
			title: "Jeff Banks Herringbone Baker",
			imageFront: "./img/acessorios/hat-2.jpg",
			imageBack: "./img/acessorios/hat-2.jpg",
			price: 14,
			category: "accessory",
		},
		{
			title: "Gibson London Brown Hat",
			imageFront: "./img/acessorios/hat-3.jpg",
			imageBack: "./img/acessorios/hat-3.jpg",
			price: 24,
			category: "accessory",
		},
		{
			title: "Gray Herringbone Baker",
			imageFront: "./img/acessorios/hat-4.jpg",
			imageBack: "./img/acessorios/hat-4.jpg",
			price: 20,
			category: "accessory",
		},
		{
			title: "Black Bifold Colour Panel",
			imageFront: "./img/acessorios/wallet-1.jpg",
			imageBack: "./img/acessorios/wallet-1.jpg",
			price: 10,
			category: "accessory",
		},
		{
			title: "Tan Crocodile Card Holder",
			imageFront: "./img/acessorios/wallet-2.jpg",
			imageBack: "./img/acessorios/wallet-2.jpg",
			price: 44,
			category: "accessory",
		},
		{
			title: "Black Bifold Front Card Slot",
			imageFront: "./img/acessorios/wallet-3.jpg",
			imageBack: "./img/acessorios/wallet-3.jpg",
			price: 14,
			category: "accessory",
		},
		{
			title: "Jeff Banks Bifold Wallet",
			imageFront: "./img/acessorios/wallet-4.jpg",
			imageBack: "./img/acessorios/wallet-4.jpg",
			price: 30,
			category: "accessory",
		},
	];

	function generateCards(data) {
		const grid = document.querySelector(".products");
		return (grid.innerHTML = data
			.map((item) => {
				let { title, imageFront, imageBack, price } = item;
				return `<div class="card">
			<div class="images">
				<img class="img-front" src="${imageFront}" alt="product">
				<img class="img-hover" src="${imageBack}">
			</div>
			<h2 class="card-title">${title}</h2>
			<div class="flex">
				<span class="card-price">$ ${price}.00</span>
				<button>Add to Cart</button>
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

		function filterItens(e) {
			navBtn.forEach((btn) => btn.classList.remove("active"));
			e.target.classList.add("active");

			if (e.target.id === "suits-btn") {
				generateCards(suits);
			} else if (e.target.id === "shoes-btn") {
				generateCards(shoes);
			} else if (e.target.id === "accessory-btn") {
				generateCards(accessories);
			} else if (e.target.id === "all-btn") {
				generateCards(database);
			}
		}

		navBtn.forEach((btn) => btn.addEventListener("click", filterItens));
	}
	filter();

	function search() {
		const searchInput = document.getElementById("search-input");
		const searchBtn = document.getElementById("search-btn");
		searchBtn.addEventListener("click", searchItens);

		function searchItens(e) {
			e.preventDefault();

			searchInput.classList.add("ativo");

			window.addEventListener("click", closeInput);

			function closeInput(e) {
				if (e.target !== searchBtn && e.target !== searchInput) {
					searchInput.classList.remove("ativo");
				}
			}

			let searchValue = searchInput.value.toLowerCase();

			if (searchValue) {
				generateCards(
					database.filter((item) =>
						item.title.toLowerCase().includes(searchValue)
					)
				);
			}
			function verificaInput() {
				if (searchInput.value === "") {
					generateCards(database);
				}
			}
			searchInput.addEventListener("keyup", verificaInput);
		}
	}
	search();
}

const navBar = document.getElementById("nav-bar");
const breadCrumb = document.querySelector(".breadcrumb");

// const navHeight = navBar.offsetHeight - -10;

// breadCrumb.style.marginTop = navHeight + "px";

/* product chart size section */

const sizeText = document.querySelector(".product-page-size-chart div span");
const sizeButtons = document.querySelectorAll(".product-size-chart button");

sizeButtons.forEach((button) => {
	button.addEventListener("click", () => {
		sizeText.innerText = button.innerText;
		button.classList.add("highlight");

		sizeButtons.forEach((otherButton) => {
			if (otherButton !== button) {
				otherButton.classList.remove("highlight");
			}
		});
	});
});

/* ---------------------------------------------------------------------------------------------------------- */

/* image thubnail gallery */

var swiper = new Swiper(".mySwiperThumb", {
	loop: true,
	spaceBetween: 15,
	slidesPerView: "auto",
	freeMode: true,
	watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
	loop: true,
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
});

/* product page qty */
const negativeBtn = document.querySelector(".negative");
const positiveBtn = document.querySelector(".positive");
const qty = document.querySelector(".product-page-qty-buttons span");

negativeBtn.addEventListener("click", () => {
	if (qty.innerText > 1) {
		qty.innerText--;
	}
});

positiveBtn.addEventListener("click", () => {
	qty.innerText++;
});

/* product-page-freaquently-bought-together slider */

var swiper = new Swiper(".mySwiperBoughtTogether", {
	slidesPerView: "auto",
	spaceBetween: 30,
});

/* freaquently-bought-together checkbox */
const checkbox = document.querySelectorAll(
	".product-page-freaquently-bought-together-card input"
);

const productCard = document.querySelectorAll(
	".product-page-freaquently-bought-together-card"
);

productCard.forEach((productCard, index) => {
	productCard.addEventListener("click", () => {
		if (checkbox[index].checked) {
			checkbox[index].checked = false;
		} else {
			checkbox[index].checked = true;
		}
	});
});

/* freaquently-bought-together price */
// const productPriceText = document.querySelector(
// 	".product-page-price > span"
// ).innerHTML;
// const productPrice = productPriceText.replace("AED", "");

/* user review images section */
var swiper = new Swiper(".userImageSlider", {
	freeMode: true,
	spaceBetween: 15,
	slidesPerView: "auto",
});

/* --------------------------------------------------------- */

/* review questions search */
const searchIcon = document.querySelector(".product-page-question-search img");
const searchInput = document.querySelector(
	".product-page-question-search input"
);

searchIcon.addEventListener("click", () => {
	searchInput.classList.add("show");

	document.addEventListener("click", (e) => {
		if (!searchIcon.contains(e.target) && !searchInput.contains(e.target)) {
			searchInput.classList.remove("show");
		}
	});
});

/* mobile view bottom menu bar */

const navMenu = document.querySelector(".icons-container");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navMenu.classList.add("hide");
	} else {
		navMenu.classList.remove("hide");
	}
	lastScrollTop = scrollTop;
});

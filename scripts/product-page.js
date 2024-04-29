const navBar = document.getElementById("nav-bar");
const breadCrumb = document.querySelector(".breadcrumb");


const navHeight = navBar.offsetHeight - -15;

breadCrumb.style.marginTop = navHeight + "px";

/* product chart size section */

const sizeText = document.querySelector(".product-page-size-chart div span")
const sizeButtons = document.querySelectorAll(".product-size-chart button");

sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        sizeText.innerText = button.innerText;
        button.classList.add('highlight')

        sizeButtons.forEach((otherButton) => {
            if (otherButton !== button) {
                otherButton.classList.remove('highlight')
            }
        });
    });
});

/* ---------------------------------------------------------------------------------------------------------- */

/* image thubnail gallery */

var swiper = new Swiper(".mySwiperThumb", {
	loop: true,
	spaceBetween: 15,
	slidesPerView: 'auto',
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

/* ------------------------------------------------------------------------------------------- */
/* user review images section */
var swiper = new Swiper(".userImageSlider", {
	freeMode: true,
	spaceBetween: 15,
	slidesPerView:'auto'
});

/* --------------------------------------------------------- */

/* review questions search */
const searchIcon = document.querySelector(".product-page-question-search img");
const searchInput = document.querySelector(".product-page-question-search input");

searchIcon.addEventListener("click", () => {
	searchInput.classList.add("show");
	
	
	document.addEventListener("click", (e) => {
		if (!searchIcon.contains(e.target) && !searchInput.contains(e.target)) {
			searchInput.classList.remove("show");
		}
	});
	
	
});


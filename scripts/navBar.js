const navMenu = document.querySelector(".icons-container");
const navBar = document.getElementById("nav-bar");
const mainBanner = document.getElementById("main-banner-section");
const activeLinks = document.querySelectorAll(
	".nav-slider .swiper-wrapper .swiper-slide a"
);
const category = document.querySelector(".cat");
const categoryContainer = document.querySelector(".categories-container");
const catClose = document.querySelector(".cat-close");

category.addEventListener("touchstart", () => {
	categoryContainer.classList.add("show");
});

window.addEventListener("click", (e) => {
	if (!categoryContainer.contains(e.target)) {
		categoryContainer.classList.remove("show");
	}
});

const navHeight = navBar.offsetHeight - 1;

mainBanner.style.marginTop = navHeight + "px";



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

function activeLink() {
	activeLinks.forEach((link) => link.classList.remove("active"));
	this.classList.add("active");
}

activeLinks.forEach((link) => link.addEventListener("click", activeLink));


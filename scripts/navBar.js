const navMenu = document.querySelector(".icons-container");
const navBar = document.getElementById("nav-bar");
const mainBanner = document.getElementById("main-banner-section");

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

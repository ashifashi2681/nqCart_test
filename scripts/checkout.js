const navBar = document.getElementById("nav-bar");
const navMenu = document.querySelector(".icons-container");
const checkoutSection = document.querySelector("#checkout-section");

// const navHeight = navBar.offsetHeight - -0;

// checkoutSection.style.marginTop = navHeight + "px";

/* nav slider */
const swiperNavSlider = new Swiper(".nav-slider", {
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	speed: 5000,
	slidesPerView: "auto",
	spaceBetween: 15,
	freeMode: true,
});

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

// check box style toggle

const checkBoxes = document.querySelectorAll(
	".billing-address > div > label input"
);

checkBoxes.forEach((checkBox, i) => {
	checkBox.addEventListener("change", function () {
		checkBoxes.forEach((check) => {
			check.parentElement.classList.remove("active");
			if (checkBox.checked) {
				checkBox.parentElement.classList.add("active");
			}
		});
	});
});

/* stepper indicator */
const completeOrderBtn = document.querySelector(".checkout-btn");
const checkoutModalContainer = document.querySelector(
	".chekout-modal-container"
);
completeOrderBtn.addEventListener("click",()=> {
	// console.log('first')
	window.scrollTo(0,0)
	checkoutModalContainer.classList.add("active")
	completeOrderBtn.classList.add("active");

})

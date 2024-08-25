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


// login and register form
// const navLoginBtn = document.querySelector(".login > span:last-child");
const navLoginBtn = document.querySelector(".login");
const loginRegisterContainer = document.querySelector(
	".login-register-form-overlay"
);
const loginRegisterClsBtn = document.querySelector(
	".login-register-form-cls-btn"
);


const loginBtn = document.querySelector(".register-form-footer-text > span");
const registerBtn = document.querySelector(".login-form-footer-text > span");



navLoginBtn.addEventListener("click", () => {
	loginRegisterContainer.classList.add("active");
});

loginRegisterClsBtn.addEventListener("click", () => {
	loginRegisterContainer.classList.remove("active");
});

// render each form at one time
registerBtn.addEventListener("click", () => {
	document.querySelector(".login-form").style.display = "none";
	document.querySelector(".register-form").style.display = "block"
})

loginBtn.addEventListener("click", () => {
	document.querySelector(".login-form").style.display = "block";
	document.querySelector(".register-form").style.display = "none"
})
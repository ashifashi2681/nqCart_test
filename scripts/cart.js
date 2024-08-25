const navBar = document.getElementById("nav-bar");
const navMenu = document.querySelector(".icons-container");
const cartSection = document.querySelector("#cart-section");

// const navHeight = navBar.offsetHeight - -0;

// cartSection.style.marginTop = navHeight + "px";

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

/* ~~~~~~~~~~~~~~~element position change below 900px~~~~~~~~~~~~~~~~~~~~~ */
const dltBtns = document.querySelectorAll(".cart-product-delete");
const qtys = document.querySelectorAll(".cart-product-qty");
const cartFooterContainer = document.querySelectorAll(".cart-product-footer");

const orginalPositions = Array.from(dltBtns).map((btn) => ({
	parent: btn.parentNode,
	nextSibling: btn.nextSibling,
}));

const qtyOrginalPositions = Array.from(qtys).map((qty) => ({
	parent: qty.parentNode,
	nextSibling: qty.nextSibling,
}));

function positionChange(e) {
	if (e.matches) {
		cartFooterContainer.forEach((container, index) => {
			container.appendChild(dltBtns[index]);
			container.appendChild(qtys[index]);
		});
	} else {
		dltBtns.forEach((btn, i) => {
			const orginalPosition = orginalPositions[i];
			const { parent, nextSibling } = orginalPosition;
			if (nextSibling) {
				parent.insertBefore(btn, nextSibling);
			} else {
				parent.appendChild(btn);
			}
		});
		qtys.forEach((qty, i) => {
			const orginalPosition = qtyOrginalPositions[i];
			const { parent, nextSibling } = orginalPosition;
			if (nextSibling) {
				parent.insertBefore(qty, nextSibling);
			} else {
				parent.appendChild(qty);
			}
		});
	}
}

/* get media query */
const mediaQuery = window.matchMedia("(max-width: 900px)");

mediaQuery.addEventListener("change", positionChange);

positionChange(mediaQuery);

/* ~~~~~~~~~~~~~~~element position change below 480px~~~~~~~~~~~~~~~~~~~~~ */
const cartPrices = document.querySelectorAll(".cart-product-price");

const priceOrginalPositions = Array.from(cartPrices).map((price) => ({
	parent: price.parentNode,
	nextSibling: price.nextSibling,
}));

function positionChange2(e) {
	if (e.matches) {
		cartFooterContainer.forEach((container, index) => {
			container.appendChild(cartPrices[index]);
		});
	} else {
		cartPrices.forEach((price, i) => {
			const orginalPosition = priceOrginalPositions[i];
			const { parent, nextSibling } = orginalPosition;
			if (nextSibling) {
				parent.insertBefore(price, nextSibling);
			} else {
				parent.appendChild(price);
			}
		});
	}
}

const mediaQuery2 = window.matchMedia("(max-width: 480px)");

mediaQuery2.addEventListener("change", positionChange2);

positionChange2(mediaQuery2);

/* mobile view modal */
// const continueBtn = document.querySelector(".cart-continue");
// const cartRight = document.querySelector(".cart-right");
// const cartContainer = document.querySelector(".cart-right-container");
// continueBtn.addEventListener("click", () => {
// 	cartRight.classList.toggle("active");
	
// 	document.body.style.overflow = "hidden";
// });

// cartRight.addEventListener("click", (e) => {
// 	if (!cartContainer.contains(e.target)) {
// 		cartRight.classList.remove("active");
// 		document.body.style.overflow = "";
// 	}
// });



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
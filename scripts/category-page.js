const navBar = document.getElementById("nav-bar");
const breadCrumb = document.querySelector(".breadcrumb");

const navHeight = navBar.offsetHeight - -10;

breadCrumb.style.marginTop = navHeight + "px";

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

/* filter accordian functon */
const filterTitleBtn = document.querySelectorAll(".filter-sec-head");

filterTitleBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		const filterSecBody = btn.nextElementSibling;
		const arrow = btn.getElementsByTagName("img")[0];
		filterSecBody.classList.toggle("hide");

		if (filterSecBody.classList.contains("hide")) {
			arrow.style.rotate = "180deg";
		} else {
			arrow.style.rotate = "0deg";
		}
	});
});

/* category page curousel */
const swiperSub = new Swiper(".cat-banner", {
	speed: 500,
	navigation: {
		nextEl: ".sub-next",
		prevEl: ".sub-prev",
	},
	slidesPerView: 4,
	spaceBetween: 5,
	breakpoints: {
		480: {
			slidesPerView: 5,
			spaceBetween: 5,
		},
		768: {
			slidesPerView: 6,
			spaceBetween: 5,
		},
		900: {
			slidesPerView: 6,
			spaceBetween: 10,
		},
	},
});

/* category pagination */
const totalProducts = document.querySelectorAll(".product-card").length;
const paginationcontainer = document.querySelector(".pagination-buttons");
const perPage = 2;
const totalPage = Math.ceil(totalProducts / perPage);

let pages = [];

for (let i = 1; i <= totalPage; i++) {
	pages.push(i);
}

pages.forEach((page) => {
	const btn = document.createElement("button");
	btn.classList.add("pagination-btn");
	btn.innerHTML = page;
	paginationcontainer.append(btn);
});

// active link style
const paginationBtn = document.querySelectorAll(".pagination-btn");

function activeBtn() {
	paginationBtn.forEach((btn) => {
		btn.classList.remove("active");
		this.classList.add("active");
	});
}

paginationBtn.forEach((btn) => {
	btn.addEventListener("click", activeBtn);
});

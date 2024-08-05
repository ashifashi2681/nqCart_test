const navBar = document.getElementById("nav-bar");
const navMenu = document.querySelector(".icons-container");
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
	slidesPerView: 3,
	spaceBetween: 5,
	breakpoints: {
		480: {
			slidesPerView: 4,
			spaceBetween: 5,
		},
		768: {
			slidesPerView: 5,
			spaceBetween: 5,
		},
		900: {
			slidesPerView: 5,
			spaceBetween: 10,
		},
	},
});

/* custom select & options */
const selectWrapper = document.querySelector(".sort-dropdown");
const selectBtnText = document.querySelector(".sort-btn");
const options = document.querySelectorAll(".sort-option");

selectWrapper.addEventListener("click", () => {
	selectWrapper.classList.toggle("active");
});

options.forEach((option) => {
	selectBtnText.querySelector("span").innerText = options[0].innerHTML;
	option.addEventListener("click", () => {
		selectBtnText.querySelector("span").innerText = option.innerText;
	});
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

// make position absolute to its sibling div on mobile devices (filter and sort section on mobile view)

const cat_page_main = document.querySelector(".cat-page-main");
const sort_desc_p = document.querySelector(".sort-desc");
const referenceNode = cat_page_main.children[1];
const orginal_sort_desc_parent = sort_desc_p.parentNode;
const orginal_next_sibling_sort_desc = sort_desc_p.nextSibling;

const cat_sort_head = document.querySelector(".cat-sort-head");
const cat_filter_body_section = document.querySelector(".filter-head");
const originalParent = cat_filter_body_section.parentNode;
const originalNextSibling = cat_filter_body_section.nextSibling;

function positionAbsolute(e) {
	if (!cat_sort_head || !cat_filter_body_section) {
		console.error("Required elements not found");
		return;
	}
	// console.log(e.matches);
	if (e.matches) {
		cat_sort_head.appendChild(cat_filter_body_section);
		cat_page_main.insertBefore(sort_desc_p, referenceNode);
	} else {
		if (originalNextSibling || orginal_next_sibling_sort_desc) {
			orginal_sort_desc_parent.insertBefore(
				sort_desc_p,
				orginal_next_sibling_sort_desc
			);

			originalParent.insertBefore(
				cat_filter_body_section,
				originalNextSibling
			);
		} else {
			originalParent.appendChild(cat_filter_body_section);
		}
	}
}

// get media query
const mediaQuery = window.matchMedia("(max-width:768px )");

mediaQuery.addEventListener("change", positionAbsolute);

positionAbsolute(mediaQuery);

/* mobile view bottom filter & sort bar */
const filterBody_overlay = document.querySelector(".cat-page-filter");
const sortBody = document.querySelector(".sort-body");
const filterBody = document.querySelector(".filter-body");

cat_filter_body_section.addEventListener("click", () => {
	filterBody_overlay.classList.toggle("active");
	// sortBody.classList.toggle("active");
	document.body.style.overflow = "hidden";
});
filterBody_overlay.addEventListener("click", (e) => {
	if (!filterBody.contains(e.target)) {
		filterBody_overlay.classList.remove("active");
		// sortBody.classList.remove("active");
		document.body.style.overflow = "";
	}
});

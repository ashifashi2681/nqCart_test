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

/* main banner */
const swiperMain = new Swiper(".main-banner", {
	speed: 1000,
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".main-next",
		prevEl: ".main-prev",
	},
	autoplay: {
		delay: 5000,
	},
});

/* sub banner */
const swiperSub = new Swiper(".sub-banner", {
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
			slidesPerView: 8,
			spaceBetween: 10,
		},
	},
});

/* top offers */
const swiperTopOffer = new Swiper(".top-offer", {
	speed: 500,
	autoplay: {
		delay: 4000,
	},
	slidesPerView: 2,
	spaceBetween: 5,
	breakpoints: {
		480: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
		901: {
			slidesPerView: 5,
			spaceBetween: 15,
		},
	},
});

/* choose by brand */
const swiperChooseByBrand = new Swiper(".choose-brand", {
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	speed: 5000,
	freeMode: true,
	navigation: {
		nextEl: ".brand-next",
		prevEl: ".brand-prev",
	},
	slidesPerView: 3,
	spaceBetween: 5,
	breakpoints: {
		480: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 5,
			spaceBetween: 10,
		},
		901: {
			slidesPerView: 6,
			spaceBetween: 10,
		},
		
	},
});



/* product swiper */
const swiperProduct = new Swiper(".product-swiper", {
	speed: 500,
	slidesPerView: 'auto',
	freeMode: true,
});


/* image thumb gallery */

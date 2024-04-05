const titles = document.querySelectorAll(".footer-right-contents p");
const scrollTop = document.querySelector(".footer-sroll-up");


scrollTop.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

titles.forEach((title) => {
	title.addEventListener("click", () => {
		title.nextElementSibling.classList.toggle("show");
		console.log("first");
		titles.forEach((otherTitle) => {
			if (otherTitle !== title) {
				otherTitle.nextElementSibling.classList.remove("show");
			}
		});
	});
});

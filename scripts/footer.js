const titles = document.querySelectorAll(".footer-right-contents p");

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

// check box style toggle

	const checkBoxes = document.querySelectorAll(
		".billing-address > div > label input"
	);

	checkBoxes.forEach((checkBox, i) => {
		checkBox.addEventListener("change", function () {
			checkBoxes.forEach((check) => {
                check.parentElement.classList.remove("active")
                if(checkBox.checked) {
                    checkBox.parentElement.classList.add("active")
                }
            })
		});
	});


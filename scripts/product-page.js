const navBar = document.getElementById("nav-bar");
const breadCrumb = document.querySelector(".breadcrumb");


const navHeight = navBar.offsetHeight - -15;

breadCrumb.style.marginTop = navHeight + "px";

/* product chart size section */

const sizeText = document.querySelector(".product-page-size-chart div span")
const sizeButtons = document.querySelectorAll(".product-size-chart button");

sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        sizeText.innerText = button.innerText;
        button.classList.add('highlight')

        sizeButtons.forEach((otherButton) => {
            if (otherButton !== button) {
                otherButton.classList.remove('highlight')
            }
        });
    });
});





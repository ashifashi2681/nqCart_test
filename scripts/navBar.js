const navMenu = document.querySelector(".icons-container");

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
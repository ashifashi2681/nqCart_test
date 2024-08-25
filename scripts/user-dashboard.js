/* toggling user dashboard sections class */

const profileBtns = document.querySelectorAll(".user-dashboard-menu > button");
const userDashboardSections = document.querySelectorAll(
	"#user-dashboard-right-section"
);

const backBtn = document.querySelector(
	".user-dashboard-profile-section-header > span"
);

profileBtns.forEach((btn, index) => {
	btn.addEventListener("click", () => {
		if (index === 4) {
			return;
		}

		userDashboardSections.forEach((dashboard) => {
			dashboard.classList.remove("active");
		});
		profileBtns.forEach((btn) => {
			btn.classList.remove("btnActive");
		});

		userDashboardSections[index].classList.add("active");
		btn.classList.add("btnActive");

		profileBtns.forEach((bt) => {
			bt.addEventListener("click", () => {
				if (bt !== btn) {
					userDashboardSections[index].classList.remove("active");
					btn.classList.remove("btnActive");
				}
			});
		});
	});
});

// back button
backBtn.addEventListener("click", () => {
	userDashboardSections.forEach((dashboard) => {
		dashboard.classList.remove("active");
	});
	profileBtns.forEach((btn) => {
		btn.classList.remove("btnActive");
	});
});

/* logout */
const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
	// console.log("logout clicked")
});

function back() {
	console.log("first");
}



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
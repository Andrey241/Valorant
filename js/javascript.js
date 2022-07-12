// const agents = document.querySelectorAll(".main__charaster-agent");

// agents.forEach((item) =>
// 	item.addEventListener("mouseover", (e) => {
// 		const skill = e.target.querySelector(".main__charaster-skills");
// 		skill.style.background = "white";
// 	})
// );
// agents.forEach((item) =>
// 	item.addEventListener("mouseout", (e) => {
// 		const skill = e.target.querySelector(".main__charaster-skills");
// 		skill.style.background = "#1f2326";
// 	})
// );

const swiper = new Swiper(".swiper", {
	allowTouchMove: true,
	scrollbar: {
		el: ".swiper-scrollbar",
		draggable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			enabled: false,
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: false,
			},
		},
		768: {
			slidesPerView: 3,
		},
		1201: {
			slidesPerView: 4,
		},
	},
});

const swiper2 = new Swiper(".swiper-skills", {
	allowTouchMove: true,
	spaceBetween: 0,
	navigation: {
		nextEl: ".swiper-skills-next",
		prevEl: ".swiper-button-prev",
	},
	mousewheel: {
		invert: true,
	},
	loop: true,
	breakpoints: {
		0: {
			enabled: false,
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: false,
			},
		},
		768: {
			slidesPerView: 2,
		},
		1201: {
			slidesPerView: 3,
		},
	},
});

window.addEventListener("mouseover", () => {
	console.log("width: " + window.screen.availWidth);
	console.log("Height: " + window.screen.availHeight);
});

const burger = document.querySelector("#burger");
burger.addEventListener("click", function () {
	document.querySelector(".nav__list").classList.toggle("active");
	document.querySelector("body").classList.toggle("hidden");
	burger.classList.toggle("bg-red");
});

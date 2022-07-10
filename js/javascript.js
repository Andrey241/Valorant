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
	slidesPerView: 4,

	scrollbar: {
		el: ".swiper-scrollbar",
		draggable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	mousewheel: {
		invert: true,
	},
});

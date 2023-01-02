const accordionTitles = document.querySelectorAll(".accordionTitle");

accordionTitles.forEach((accordionTitle) => {
	accordionTitle.addEventListener("click", () => {
		if (accordionTitle.classList.contains("is-open")) {
			accordionTitle.classList.remove("is-open");
		} else {
			const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
			accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
				accordionTitleWithIsOpen.classList.remove("is-open");
			});
			accordionTitle.classList.add("is-open");
		}
	});
});
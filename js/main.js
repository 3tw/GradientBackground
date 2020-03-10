$(document).ready(function () {
	let $sectionA = $("#section-a");
	let $sectionB = $("#section-b");
	let $sectionC = $("#section-c");
	
	// Calculate when section enters the screen
	function isVisible(section) {
		let sectionTop = section.offset().top;
		// let sectionBottom = sectionTop + section.outerHeight();
		let screenTop = $(window).scrollTop();
		let screenBottom = screenTop + $(window).height();
		let titleBottom = $(".title").offset().top + $(".title").outerHeight();
		/* console.log(
			"screenTop: " + screenTop +
			"\n screenBottom: " + screenBottom +
			"\n sectionTop: " + sectionTop +
			"\n sectionBotom: " + sectionBottom +
			"\n titleBottom: " + titleBottom 	
		) */
		return (sectionTop + 100) < screenBottom && sectionTop > (titleBottom + 60);
	}
	// Animate section
	function showSection(section) {
		if (isVisible(section)) {
			section.removeClass("hidden")
			section.addClass("visible")
		} else {
			section.removeClass("visible")
			section.addClass("hidden")
		}
	}
	// Event listeners
	$(window).scroll(function() {
		showSection($sectionA);
		showSection($sectionB);
		showSection($sectionC);
	})
})
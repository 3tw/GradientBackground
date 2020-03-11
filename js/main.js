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
		if ((sectionTop + 160) < screenBottom && sectionTop > (titleBottom + 100)) {
			return 2 
		}
		else if ((sectionTop + 100) < screenBottom && sectionTop > (titleBottom + 40)) {
			return 1
		} else {
			return false
		}
	}
	// Animate section
	function showSection(section) {
		if (isVisible(section) == 1) {
			section.addClass("half-visible")
			section.removeClass("hidden")
			section.removeClass("visible")
		} 
		else if (isVisible(section) == 2){
			section.addClass("visible")
			section.removeClass("half-visible")
		} else {
			section.removeClass("half-visible")
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
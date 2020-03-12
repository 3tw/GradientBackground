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
		
		// Main section
		if ((sectionTop + 150) <= screenBottom && sectionTop >= (titleBottom + 60)) {
			return 3
		}
		// Entry bottom
		else if ((sectionTop + 80) < screenBottom && (sectionTop + 100) > screenBottom) {
			return 2
		}
		// Entry top
		else if (sectionTop > (titleBottom + 15) && sectionTop < (titleBottom + 60)) {
			return 4
		}
		//Off on top
		else if (sectionTop <= (titleBottom + 15)) {
			return 5
		}
		// Off on bottom
		else if ((sectionTop + 80) >= screenBottom) {
			return 1
		}
	}
	// Animate section
	function showSection(section) {
		// Off on bottom
		if (isVisible(section) == 1) {
			section.removeClass("half-visible");
			section.removeClass("scale")
			section.addClass("hidden");
			section.addClass("initial-scale");
		}
		// Entry bottom
		else if (isVisible(section) == 2) {
			section.addClass("half-visible");
			section.addClass("initial-scale");
			section.removeClass("scale");
			section.removeClass("hidden");
			section.removeClass("visible");
		} 
		// Main section
		else if (isVisible(section) == 3){
			section.addClass("visible");
			section.addClass("scale");
			section.removeClass("initial-scale")
			section.removeClass("half-visible");
		} 
		// Entry top
		if (isVisible(section) == 4) {
			section.addClass("half-visible");
			section.removeClass("hidden");
			section.removeClass("visible");
		} 
		// Off on top
		else if (isVisible(section) == 5) {
			section.removeClass("half-visible");
			section.addClass("scale");
			section.addClass("hidden");
		} 
	}
	// Event listeners
	$(window).scroll(function() {
		showSection($sectionA);
		showSection($sectionB);
		showSection($sectionC);
	})
})
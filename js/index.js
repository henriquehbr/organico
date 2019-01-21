$(document).ready(function() {

	// Event handlers
	$(document).on("click", "#scroll-up-btn", function(e) {
		e.preventDefault();
		e.stopPropagation();
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	});

	$(document).on("click", ".goto-section2", function(e) {
		e.preventDefault();
		e.stopPropagation();
		window.scroll({
			top: $("#section2").offset().top,
			left: 0,
			behavior: "smooth"
		});
	});

	$(document).on("click", ".goto-section3", function(e) {
		e.preventDefault();
		e.stopPropagation();
		window.scroll({
			top: $("#section3").offset().top,
			left: 0,
			behavior: "smooth"
		});
	});

	$(document).on("scroll", function(e) {
		e.preventDefault();
		e.stopPropagation();
		if ($(document).scrollTop() > 257.328125) {
			$("#scroll-up-btn").show();
		} else {
			$("#scroll-up-btn").hide();
		}
	});
});

if ($(document).scrollTop() > 257.328125) {
	$("#scroll-up-btn").show();
} else {
	$("#scroll-up-btn").hide();
}

$("#section2").find(".card").first().show();
$(".slideshow-indicators i").eq(0).attr("class", "fas fa-circle");

$(document).on("click", ".slideshow-indicators i", function(e) {
	$(".slideshow-indicators i").attr("class", "far fa-circle");
	$(e.target).attr("class", "fas fa-circle");
	$("#section2").children(".card").css("display", "none");
	$("#section2").children(".card").eq($(e.target).attr("data-page")).css("display", "block");
});
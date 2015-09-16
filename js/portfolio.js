window.onload = function() {
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});

	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}
	// anchor tag
	$("#portfolio").click(function() {
	   scrollToAnchor('portfolioSection');
	});
	//hover effect for collage
	$("#contentEmailBtn").mouseenter(function() {
		$('#collageEmailText').css({'opacity': 1});
	});
	$("#contentEmailBtn").mouseleave(function() {
		$('#collageEmailText').css({'opacity': 0});
	});

	$("#contentBannerBtn").mouseenter(function() {
		$('#collageBannerText').css({'opacity': 1});
	});
	$("#contentBannerBtn").mouseleave(function() {
		$('#collageBannerText').css({'opacity': 0});
	});

	$("#contentIpadBtn").mouseenter(function() {
		$('#collageIpadText').css({'opacity': 1});
	});
	$("#contentIpadBtn").mouseleave(function() {
		$('#collageIpadText').css({'opacity': 0});
	});

	$("#contentBoxingBtn").mouseenter(function() {
		$('#collageBoxingText').css({'opacity': 1});
	});
	$("#contentBoxingBtn").mouseleave(function() {
		$('#collageBoxingText').css({'opacity': 0});
	});

	//closeModal
	$("#closeModal").click(function() {
		$('.modal').fadeTo("fast", 0);
		$('.modal').css({'display': 'none'});
	});

	//collage button click
	$("#contentEmailBtn").click(function() {
		$('#responsiveEmailModal').css({'display': 'block'});
		$('#responsiveEmailModal').fadeTo("fast", 1);
	});

	$("#contentBannerBtn").click(function() {
		$('#bannerModal').css({'display': 'block'});
		$('#bannerModal').fadeTo("fast", 1);
	});

	$("#contentIpadBtn").click(function() {
		$('#mobileModal').css({'display': 'block'});
		$('#mobileModal').fadeTo("fast", 1);
	});

	$("#contentBoxingBtn").click(function() {
		$('#aboutModal').css({'display': 'block'});
		$('#aboutModal').fadeTo("fast", 1);
	});
};



window.onload = function() {
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    })

	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	// anchor tag
	$("#portfolio").click(function(e) {
		e.preventDefault();
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
	$(".closeModal").click(function() {
		$('.modal').fadeTo(500, 0, function(){
		   $('.modal').css("visibility", "hidden");   
		   $('html').css({'overflow': 'scroll'});
		});
	});

	//collage button click
	$("#contentEmailBtn").click(function() {
		$('#responsiveEmailModal').css({'visibility': 'visible'}).fadeTo("fast", 1);
		$('html').css({'overflow': 'hidden'});
	});

	$("#contentBannerBtn").click(function() {
		$('#bannerModal').css({'visibility': 'visible'}).fadeTo("fast", 1);
		$('html').css({'overflow': 'hidden'});
	});

	$("#contentIpadBtn").click(function() {
		$('#mobileModal').css({'visibility': 'visible'}).fadeTo("fast", 1);
		$('html').css({'overflow': 'hidden'});
	});

	$("#contentBoxingBtn").click(function() {
		$('#aboutModal').css({'visibility': 'visible'}).fadeTo("fast", 1);
		$('html').css({'overflow': 'hidden'});
	});

	$(".hamburger").click(function() {
		var toggleWidth = $(".navContainer").width() == 250 ? "35px" : "250px";
		var toggleHight = $(".navContainer").height() == 250 ? "35px" : "250px";
        $('.navContainer').animate({width: toggleWidth, height: toggleHight});
 		$('.menuPanel').toggle('active');
	});
};





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
	$(".closeModal").click(function() {
		$('.modal').fadeTo(500, 0, function(){
		   $('.modal').css("visibility", "hidden");   
		});
	});

	//collage button click
	$("#contentEmailBtn").click(function() {
		$('#responsiveEmailModal').css({'visibility': 'visible'}).fadeTo("fast", 1);
	});

	$("#contentBannerBtn").click(function() {
		$('#bannerModal').css({'visibility': 'visible'}).fadeTo("fast", 1);
	});

	$("#contentIpadBtn").click(function() {
		$('#mobileModal').css({'visibility': 'visible'}).fadeTo("fast", 1);
	});

	$("#contentBoxingBtn").click(function() {
		$('#aboutModal').css({'visibility': 'visible'}).fadeTo("fast", 1);
	});

	$(".hamburger").click(function() {
		var toggleWidth = $(".navContainer").width() == 350 ? "40px" : "350px";
		var toggleHight = $(".navContainer").height() == 340 ? "40px" : "340px";
        $('.navContainer').animate({width: toggleWidth, height: toggleHight});
 		$('.menuPanel').toggle('active');
	});
};

//Hamburger icon animation
var el = document.querySelectorAll('.hamburger');
for(i=0; i<=el.length; i++) {;
  el[i].addEventListener('click', function() {
    this.classList.toggle('active');
  }, false);
}





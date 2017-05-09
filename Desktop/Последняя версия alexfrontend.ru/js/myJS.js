/* Скрипт для прилипающего меню*/
$('.header').sticky({
	topSpacing: 0
});


history.pushState('', document.title, window.location.pathname);

/*Скрипт для якорных ссылок*/
$("[href^='#']").click(function() {
var idtop = $($(this).attr("href")).offset().top;
$('html,body').animate(
    // Time animation
    {scrollTop: idtop}, 1000);
return false;
});



/* easyPieChart и его запуск в нужное время*/
$(document).scroll(function (e) {
   if (($(this).scrollTop() + $(window).height()) >= $('#forChartLoad').position().top) {
      $(function() {
	    	$('.chart').easyPieChart({
	        	animate: {
			duration: 1700,
			enabled: true
			},
	        	barColor: '#DEB887',
	        	size: 140,
	        	scaleColor: '#BC8F8F',
	        	lineCap: 'butt',
	        	lineWidth: 8,
	        	scaleLength: 5,
	        	trackWidth: undefined,
	        	rotate: 0,
	    	});
	});
   }
});






/* Мобильно меню*/

$('.menuButton').click (function () {
    		if($('.mobileMenu').is(':visible'))
    		   $('.mobileMenu').hide ();
    		else 
    			$('.mobileMenu').show ();
    	});
window.onresize = function(event) {
    		$('.mobileMenu').hide ();
};

new WOW().init();

$(document).ready(function() {

	//E-mail Ajax Send
	$("#contactForm").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function sweet() {
			swal({
  				title: 'Спасибо!',
  				/*text: 'Do you want to continue',*/
  				type: 'succes',
  				confirmButtonText: 'Окей'
			});
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
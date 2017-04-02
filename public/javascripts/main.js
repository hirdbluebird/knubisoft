$(document).ready(function(){
	$('#carousel').carousel({
		interval: 4000
	});

	$('.carousel-inner .item').first().addClass('active'); 
	$('.carousel-indicators li').first().addClass('active');
	$('.pagination li:nth-child(4)').addClass('active');
})
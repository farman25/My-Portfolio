//  event pada saat link di clik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	//  tangkap elemen ybs
	var elemanTujuan = $(tujuan);

	// pindahkan scroll
	$('html').animate({
		scrollTop: elemanTujuan.offset().top -50}, 1000, 'swing');
	

e.preventDefault();
});

// About
$(window).on('load', function() {
$('.pkiri').addClass('pmuncul'); 
$('.pkanan').addClass('pmuncul');
});

// untuk menyimpan parallax
$(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        // jumbotron

        $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
        });

        $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
        });

        $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
        });


        // portfolio
        if( wScroll > $('.portfolio').offset().top - 300 ) {
                $('.portfolio .thumbnail').each(function(i) {
                        setTimeout(function() {
                         $('.portfolio .thumbnail').eq(i).addClass('muncul');
                        }, 300 * (i+1));
                });
               // $('.portfolio .thumbnail').addClass('muncul')
        }
});
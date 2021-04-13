/**BURGER**/

    $(document).ready(function() {
        $('.mobile__burger').click(function(event) {
            $('.mobile__burger,.menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    });

/**BURGER**/
$(function(){
    $('.heroes_slick_slider').slick({
        arrows: false,
        dots:true,
        dotsClass:'header-dots',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 991,
              settings: {
                infinite: true,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                infinite: true,
                dots: true,
                arrows: false,
              }
            },
            {
                breakpoint: 320,
                settings: {
                  infinite: true,
                  dots: true,
                  arrows: false,
                }
              }
          ]

    })

})
// SLOW-SCKROLL
$(".links").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 800);
});
// SLOW-SCKROLL
(function($) {
  $(function() {
    
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.seasons_blocks').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
  })(jQuery);
//   <div class="tabs">
  
//   <ul class="tabs__caption">
//     <li class="active">1-я вкладка</li>
//     <li>2-я вкладка</li>
//   </ul>
  
//   <div class="tabs__content active">
//     Содержимое первого блока
//   </div>
  
//   <div class="tabs__content">
//     Содержимое второго блока
//   </div>
  
// </div><!-- .tabs-->
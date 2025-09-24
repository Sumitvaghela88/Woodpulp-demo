
  $(document).ready(function () {
    const scrollBox = $('.scroll-content');
    const scrollAmount = 250;
    const scrollInterval = 3000; // 3 seconds

    // Manual scroll buttons
    $('.scroll-btn.left').on('click', function () {
      scrollBox.stop().animate({ scrollLeft: '-=' + scrollAmount }, 400);
    });

    $('.scroll-btn.right').on('click', function () {
      scrollBox.stop().animate({ scrollLeft: '+=' + scrollAmount }, 400);
    });

    // Auto-scroll logic
    function autoScroll() {
      const maxScroll = scrollBox[0].scrollWidth - scrollBox.outerWidth();
      let currentScroll = scrollBox.scrollLeft();

      if (currentScroll >= maxScroll - 10) {
        // Scroll back to start
        scrollBox.animate({ scrollLeft: 0 }, 800);
      } else {
        // Scroll forward
        scrollBox.animate({ scrollLeft: '+=' + scrollAmount }, 800);
      }
    }

    setInterval(autoScroll, scrollInterval);
  });
// scroll buttone logic :
  const scrollBtn = document.getElementById('scrollBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
// testimonule 
 $(document).ready(function(){
      $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive:{
          0:{ items:1 },
          768:{ items:2 },
          992:{ items:3 }
        }
      });
    });
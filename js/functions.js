;
(function ($) {

  /**
   * jQuery function to prevent default anchor event and take the href * and the title to make a share popup
   *
   * @param  {[object]} e           [Mouse event]
   * @param  {[integer]} intWidth   [Popup width defalut 500]
   * @param  {[integer]} intHeight  [Popup height defalut 400]
   * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
   */
  $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {

    // Prevent default anchor event
    e.preventDefault();

    // Set values for window
    intWidth = intWidth || '500';
    intHeight = intHeight || '400';
    strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
      strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
      objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
  }

  /* ================================================== */

  $(document).ready(function ($) {
    $('.share .box').on("click", function (e) {
      $(this).customerPopup(e);
    });
  });

}(jQuery));

var $ = jQuery.noConflict();
$('#menu').click(function () {
  if (this.checked) {
    $("body").css("overflow", "hidden");
  } else {

    $("body").css("overflow", "auto");
  }
});

var $ = jQuery.noConflict();
$('#menu').click(function () {
  if (this.checked) {
    $("body").css("overflow", "hidden");
  } else {

    $("body").css("overflow", "auto");
  }
});

(function ($) {
  var wh = window.innerHeight,

    $menu = $('nav')


  // Keep adding code here
  // init
  var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0.70
    }
  });
  var ctrldois = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0.15
    }
  });
  var ctrltres = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0.9
    }
  });




  new ScrollMagic.Scene({
    triggerElement: "#dois"
  })
    .setClassToggle("#dois", "active") // add class toggle
    // add indicators (requires plugin)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: "#tres"
  })
    .setClassToggle("#tres", "active") // add class toggle
    // add indicators (requires plugin)
    .addTo(ctrl);
  new ScrollMagic.Scene({
    triggerElement: "#cinco"
  })
    .setClassToggle("#cinco", "active") // add class toggle
    // add indicators (requires plugin)
    .addTo(ctrl);


  // iPhone intro animation Tween
  var banner = new TimelineMax();
  banner
    .to("#banner .item", 1, {
      yPercent: -10,
      ease: Power1.easeInOut
    }, '0');

  // iPhone back to stylesheet position
  new ScrollMagic.Scene({
    duration: '80%'
  })
    .setTween(banner)
    .triggerElement($('#banner')[0])
    //.addIndicators()
    .addTo(ctrldois);


  // iPhone intro animation Tween
  var lookbook = new TimelineMax();
  lookbook
    .from(".lookbook-home .titulo-back-fade", 1, {
      yPercent: 100,
      ease: Power1.easeInOut
    }, '0')
    .from(".lookbook-home .item", 1, {
      yPercent: 30,
      ease: Power1.easeInOut
    }, '0');

  // iPhone back to stylesheet position
  new ScrollMagic.Scene({
    duration: '100%'
  })
    .setTween(lookbook)
    .triggerElement($('.lookbook-home')[0])
    //.addIndicators()
    .addTo(ctrl);

  // pagina single joias
  var lookbook = new TimelineMax();
  lookbook
    .from(".single-joia .titulo-back-fade", 1, {
      yPercent: 200,
      ease: Power1.easeInOut
    }, '0')
    .from(".single-joia .um", 1, {
      yPercent: 5,
      ease: Power1.easeInOut
    }, '0')
    .from(".single-joia .dois", 1, {
      yPercent: 90,
      ease: Power1.easeInOut
    }, '0')
    .from(".single-joia .tres", 1, {
      yPercent: 40,
      ease: Power1.easeInOut
    }, '0')
    .from(".single-joia .box", 1, {
      yPercent: -5,
      ease: Power1.easeInOut
    }, '0');

  // iPhone back to stylesheet position
  new ScrollMagic.Scene({
    duration: '100%'
  })
    .setTween(lookbook)
    .triggerElement($('.single-joia')[0])
    //.addIndicators()
    .addTo(ctrl);


  // pag joias
  var lookbook = new TimelineMax();
  lookbook
    .from(".joias .titulo-back-fade", 1, {
      yPercent: 200,
      ease: Power1.easeInOut
    }, '0');

  // iPhone back to stylesheet position
  new ScrollMagic.Scene({
    duration: '100%'
  })
    .setTween(lookbook)
    .triggerElement($('.single-joia')[0])
    //.addIndicators()
    .addTo(ctrl);

  // pag joias
  var lookbook = new TimelineMax();
  lookbook
    .from(".ourives .titulo-back-fade", 1, {
      yPercent: 80,
      ease: Power1.easeInOut
    }, '0');

  // iPhone back to stylesheet position
  new ScrollMagic.Scene({
    duration: '100%'
  })
    .setTween(lookbook)
    .triggerElement($('.single-joia')[0])
    //.addIndicators()
    .addTo(ctrl);




})(jQuery);

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname ==
      this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});


$(document).ready(scripthome);
$(document).ajaxComplete(scripthome);

function scripthome () {
  if ($('#portfolio-home').length) {



    (function ($) {
      var wh = window.innerHeight

      // Keep adding code here
      // init
      var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 0.50
        }
      });
      var ctrldois = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 0.80
        }
      });
      var ctrltres = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 0.9
        }
      });

      // iPhone intro animation Tween
      var banner = new TimelineMax();
      banner
        .to("#bg", 1, {
          backgroundColor: '#B8E986',
          ease: Power1.easeInOut
        }, '0');

      // iPhone back to stylesheet position
      new ScrollMagic.Scene({
        duration: '50%'
      })
        .setTween(banner)
        .triggerElement($('#portfolio-home')[0])
        //.addIndicators()
        .addTo(ctrldois);
      // iPhone intro animation Tween
      var banner = new TimelineMax();
      banner
        .to("#bg", 1, {
          backgroundColor: '#0CA5CF',
          ease: Power1.easeInOut
        }, '0');

      // iPhone back to stylesheet position
      new ScrollMagic.Scene({
        duration: '50%'
      })
        .setTween(banner)
        .triggerElement($('#blog-home')[0])
        //.addIndicators()
        .addTo(ctrldois);


    })(jQuery);


  }
};
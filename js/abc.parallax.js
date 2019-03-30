// Pretty simple huh?
$(document).ready(function () {
  $('.scene').parallax();
});

(function () {

  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote () {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
      .fadeIn(1400)
      .delay(3000)
      .fadeOut(1600, showNextQuote);
  }

  showNextQuote();

})();
// (function() {

//     var ibages = $(".ibages");
//     var quoteIndex = -1;

//     function showNextQuote() {
//         ++quoteIndex;
//         ibages.eq(quoteIndex % ibages.length)
//             .fadeIn(800)
//             .delay(2500)
//             .fadeOut(1600, showNextQuote);
//     }

//     showNextQuote();

// })();
// (function() {

//     var ibagesdois = $(".ibagesdois");
//     var quoteIndex = -1;

//     function showNextQuote() {
//         ++quoteIndex;
//         ibagesdois.eq(quoteIndex % ibagesdois.length)
//             .fadeIn(800)
//             .delay(2500)
//             .fadeOut(1600, showNextQuote);
//     }

//     showNextQuote();

// })();
// (function() {

//     var ibagestres = $(".ibagestres");
//     var quoteIndex = -1;

//     function showNextQuote() {
//         ++quoteIndex;
//         ibagestres.eq(quoteIndex % ibagestres.length)
//             .fadeIn(800)
//             .delay(2500)
//             .fadeOut(1600, showNextQuote);
//     }

//     showNextQuote();

// })();
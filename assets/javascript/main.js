$(document).ready(function() {

  new WOW().init();

  $("#racer")
    .delay(300)
    .animate({
      left: "+=-30"
      },
    300
  );

  $('#one-countdown')
    .prop('number', 10)
    .delay(600)
    .animateNumber({
      number: 1
      },
    1500
  );

  $('#two-countdown')
    .prop('number', 10)
    .delay(900)
    .animateNumber({
      number: 2
      },
    1500
  );

  $('#three-countdown')
    .prop('number', 10)
    .delay(1200)
    .animateNumber({
      number: 3
      },
    1500
  );

  $('#four-countdown')
    .prop('number', 10)
    .delay(1300)
    .animateNumber({
      number: 4
      },
    1500
  );
});

$(document).ready(function() {

  // Default dropdown action to show/hide dropdown content
  $('.js-dropp-action').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('js-open');
    $(this).parent().next('.dropp-body').toggleClass('js-open');
  });

  // Using as fake input select dropdown
  $('label').click(function() {
    $(this).addClass('js-open').siblings().removeClass('js-open');
    $('.dropp-body,.js-dropp-action').removeClass('js-open');
  });
  // get the value of checked input radio and display as dropp title
  $('input[name="day"]').change(function() {
    var value = $("input[name='day']:checked").val();
    $('.js-value-day').text(value);
  });

  $('input[name="month"]').change(function() {
    var value = $("input[name='month']:checked").val();
    $('.js-value-month').text(value);
  });

  // show pop-up
  function mostrarPop(id) {
    $('.overlay-item').hide();
    $('.overlay').fadeIn();
    $(`#pop-up-${id}`).fadeIn();
  }

  // get sign
  $('#btn-zodiacal').on('click', function(){
    var checkDay = $("input[name='day']:checked");
    var checkMonth = $("input[name='month']:checked");

    // Validate selects
    if( checkDay.length > 0 && checkMonth.length > 0 ) {

      var valueDay = $("input[name='day']:checked").val();
      var valueMonth = $("input[name='month']:checked").val();

      if ( ( valueDay >= 21 && valueMonth == "Marzo" ) || ( valueDay <= 20 && valueMonth == "Abril" ) ) {
        mostrarPop('aries');
      } else if ( ( valueDay >= 21 && valueMonth == "Abril" ) || ( valueDay <= 21 && valueMonth == "Mayo" ) ) {
        mostrarPop('tauro');
      } else if ( ( valueDay >= 22 && valueMonth == "Mayo" ) || ( valueDay <= 21 && valueMonth == "Junio" ) ) {
        mostrarPop('geminis');
      } else if ( ( valueDay >= 22 && valueMonth == "Junio" ) || ( valueDay <= 23 && valueMonth == "Julio" ) ) {
        mostrarPop('cancer');
      } else if ( ( valueDay >= 24 && valueMonth == "Julio" ) || ( valueDay <= 23 && valueMonth == "Agosto" ) ) {
        mostrarPop('leo');
      } else if ( ( valueDay >= 24 && valueMonth == "Agosto" ) || ( valueDay <= 22 && valueMonth == "Septiembre" ) ) {
        mostrarPop('virgo');
      } else if ( ( valueDay >= 23 && valueMonth == "Septiembre" ) || ( valueDay <= 22 && valueMonth == "Octubre" ) ) {
        mostrarPop('libra');
      } else if ( ( valueDay >= 23 && valueMonth == "Octubre" ) || ( valueDay <= 22 && valueMonth == "Noviembre" ) ) {
        mostrarPop('escorpio');
      } else if ( ( valueDay >= 23 && valueMonth == "Noviembre" ) || ( valueDay <= 21 && valueMonth == "Diciembre" ) ) {
        mostrarPop('sagitario');
      } else if ( ( valueDay >= 22 && valueMonth == "Diciembre" ) || ( valueDay <= 19 && valueMonth == "Enero" ) ) {
        mostrarPop('capricornio');
      } else if ( ( valueDay >= 20 && valueMonth == "Enero" ) || ( valueDay <= 19 && valueMonth == "Febrero" ) ) {
        mostrarPop('acuario');
      } else if ( ( valueDay >= 20 && valueMonth == "Febrero" ) || ( valueDay <= 20 && valueMonth == "Marzo" ) ) {
        mostrarPop('piscis');
      }

    }else {
      alert("Todas las opciones son obligatorias...")
    }

  });

  // Hide overlay
  $('.overlay-item button').on('click', function(){
    $('.overlay').fadeOut();
  });

});

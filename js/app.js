//jQuery forcefully included with Webpack
//import { jQuery, $ } from 'jquery';
import 'bootstrap';

import { initJwtView } from './jwtview';

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
  $("body").addClass("mac");
} else {
  $("body").addClass("pc");
}

$(".jwt-playground .tab-link a").click(function() {
  var container = $(this).parentsUntil(".jwt-playground").parent();
  if (!$(this).parent().hasClass("current")) {
    container.find(".tab-nav .current").removeClass("current")
    $(this).parent().addClass("current")
    container.find(".tab-content .box-content").removeClass('current')
    $($(this).attr("href")).addClass('current');
  };
  return false;
});

//Inizialize bootstrap widgets
$('[data-toggle="tooltip"]').tooltip();

// 07012015
$(".debugger-jwt .algorithm select").change(function() {
  $('.debugger-jwt .algorithm input[value="'+$(this).val()+'"]').parent().trigger("click");
  $('.debugger-jwt .algorithm input[value="'+$(this).val()+'"]').change();
});

$(".debugger-jwt .algorithm select").change(function(){var a=$('.debugger-jwt .algorithm input[value="'+$(this).val()+'"]');a.prop("checked",!0)})
// end 07012015

if(navigator.platform.toLowerCase().indexOf('mac') !== -1) {
    var e = $('.keyboard-info span');
    var text = e.text();
    e.text(text.replace('Ctrl', 'Cmd'));
}

$(document).ready(function() {
    initJwtView();

    //Google Analytics
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-37952868-23']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = 'https://ssl.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
    })();
});

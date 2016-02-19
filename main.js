'use strict';
(function ($) {
  var getEmail = function () {
    return atob("dGltLmcuZ3JlZW5lQGdtYWlsLmNvbQ==");
  };

  var mailLink = function (email) {
    return 'mailto:' + email;
  };

  $(function () {
    $('.email-link').attr('href', mailLink(getEmail()));
  });
})(jQuery);

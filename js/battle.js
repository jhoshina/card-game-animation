(function($, window) {

  var raiseCard = function() {
    var dfd = $.Deferred();
    $('.card:last').one('webkitTransitionEnd', function() {
      dfd.resolve();
    });
    $('.card').removeClass('hidden');
    return dfd.promise();
  };

  var awakeTitle = function() {
    var dfd = $.Deferred();
    $('#title').one('webkitTransitionEnd', function() {
      dfd.resolve();
    }).removeClass('hidden');
    return dfd.promise();
  };

  var flashBackground = function() {
    var dfd = $.Deferred();
    $('#title-bg').one('webkitTransitionEnd', function() {
      dfd.resolve();
    }).removeClass('hidden');
    return dfd.promise();
  };

  $(window).on('load', function() {
    $.Deferred(function(dfd) {
      dfd
        .then(raiseCard)
        .then(awakeTitle)
        .then(flashBackground)
      ;
    }).resolve();
  });

})(jQuery, this);

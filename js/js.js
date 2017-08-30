
  $('#menu').on('click', 'li:not(.contact) a', function(e) {
    e.preventDefault();
    var fragment = this.href;

    fragment = fragment.replace('#', ' #');
    $('#details').load(fragment);

    $('#menu a.current').removeClass('current');
    $(this).addClass('current');
  });


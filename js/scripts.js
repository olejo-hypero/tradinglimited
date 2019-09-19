    $(document).ready(function() {
        var res = $(".right-menu");
        $(".knop").on("click", funk);

        $(document).click(function(e) {
            if ($(e.target).closest(res).length || $(e.target).closest('.knop').length) return;
            res.fadeOut(100);
            e.stopPropagation();
        });

        function funk() {
            if (res.css("display") == "none") {
                res.fadeIn(300);
            } else {
                res.fadeOut(300);
            }
        }
    });


    $(document).ready(function() {
        $('.top-menu').each(function(index) {
            $(this).prev().addClass('collapsible').click(function() {
                if ($(this).next().css('display') == 'none') {
                    $(this).next().slideDown(300, function() {
                        $(this).prev().removeClass('collapsed').addClass('expanded');
                    });
                } else {
                    $(this).next().slideUp(300, function() {
                        $(this).prev().removeClass('expanded').addClass('collapsed');
                        $(this).find('ul').each(function() {
                            $(this).hide().prev().removeClass('expanded').addClass('collapsed');
                        });
                    });
                }
                return false;
            });
        });
    });

            $(document).ready(function() {
                  $('.go_to').click(function() {
                      var scroll_el = $(this).attr('href');
                      if ($(scroll_el).length != 0) {
                          $('html, body').animate({
                              scrollTop: $(scroll_el).offset().top
                          }, 500);
                      }
                      return false;
                  });
              });

            $(document).ready(function() {
                $('.achievements p').readmore({
                  maxHeight: 220,
                  moreLink: '<a href="#" title="Читать полностью"><i class="fa fa-angle-double-down" aria-hidden="true"></i></a>',
                  lessLink: '<a href="#" title="Скрыть"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>'
            });
            });

            $(document).ready(function() {
                $('.history-company p').readmore({
                  maxHeight: 150,
                  moreLink: '<a href="#" title="Читать полностью"><i class="fa fa-angle-double-down" aria-hidden="true"></i></a>',
                  lessLink: '<a href="#" title="Скрыть"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>'
            });
            });

!(function ($) {
  var t = function () {
      var t = [];
      return (
        $("img").each(function () {
          var a = $(this).data("alt");
          t.push(a);
        }),
        t
      );
    },
    a = t(),
    r = [];
  $.each(a, function (t) {
    (r[t] = new Image()), (r[t].src = a[t]);
  }),
    $("figure").on("click", function () {
      var t = $(this),
        a = t.index(),
        r = t.children("img"),
        i = r.attr("src"),
        n = r.attr("data-alt"),
        c = n.split(".");
      "gif" === c[1] ? r.attr("src", r.data("alt")).attr("data-alt", i) : r.attr("src", n).attr("data-alt", r.data("alt")), t.toggleClass("play");
    });
})(jQuery);

$(function() {
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
    dataType: "json",
    success: function(info) {
      console.log(info);
      var htmlStr = template("tpl1", info);
      $(".ul-wrapper ul").html(htmlStr);

      var $ul = $(".ul-wrapper ul");
      var $lis = $ul.children();

      var total = 0;
      $lis.each(function(index, element) {
        total += $(this).width();
      });
      $ul.width(total);

      new IScroll(".bcj_nav .ul-wrapper", {
        scrollX: true,
        scrollY: false
      });
      render(0);
    }
  });

  $(".ul-wrapper ul").on("click", "a", function() {
    $(".ul-wrapper li a").removeClass("active");
    var id = $(this)
      .parent()
      .data("id");

    console.log(id);
    $(this).addClass("active");
    render(id);
  });

  function render(titleid) {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
      data: {
        titleid: titleid
      },
      dataType: "json",
      success: function(info) {
        console.log(info);
        var htmlStr = template("tpl2", info);
        $(".pro_list ul").html(htmlStr);
      }
    });
  }

  $(".to_top").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      500
    );
  });
});

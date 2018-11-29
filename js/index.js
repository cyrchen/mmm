$(function () {
    $.ajax({
        type: "get",
        url: "http://192.168.27.42:9090/api/getindexmenu",
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("navTpl", info);
            $(".mm_nav ul").html(htmlStr);
            $(".more").nextAll().hide();
        }
    });
    $(".mm_nav ul").on("click", ".more", function () {
        $(".more").nextAll().slideToggle();
    })

    $.ajax({
        type: "get",
        url: "http://192.168.27.42:9090/api/getmoneyctrl",
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("disTpl", info);
            $(".discount_content ul").html(htmlStr);
        }
    })

    $(".to_top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    })

})
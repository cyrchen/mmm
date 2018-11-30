$(function () {

    var productid = location.search.slice(11);
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getmoneyctrlproduct",
        data: {
            productid: productid
        },
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("tpl", info);
            $(".product_content").html(htmlStr);
        }
    });

    $(".to_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    })
})
$(function () {

    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getinlanddiscount",
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("tpl", info);
            $(".product_content ul").html(htmlStr);
        }
    });

    $(".to_top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    })

})
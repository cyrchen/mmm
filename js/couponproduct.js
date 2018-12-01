$(function () {

    var couponid = location.search.slice(10);
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getcouponproduct",
        data: {
            couponid: couponid
        },
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("tpl", info);
            $(".mm_content ul").html(htmlStr);
        }
    })
})
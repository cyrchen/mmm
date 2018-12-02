$(function () {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getbrandtitle",
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("tpl", info);
            $(".mm_category ul").html(htmlStr);
        }
    })
})
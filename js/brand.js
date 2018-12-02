$(function () {

    var brandtitleid = location.search.slice(14);
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getbrand",
        data: {
            brandtitleid: brandtitleid
        },
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("tpl1", info);
            $(".list ul").html(htmlStr);
        }
    });

    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getbrandproductlist",
        data: {
            brandtitleid: brandtitleid,
            pagesize: 4
        },
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("tpl2", info);
            $(".product_list ul").html(htmlStr);

        }
    });


    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getproductcom",
        data: {
            productid: 1
        },
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("tpl3", info);
            $(".common ul").html(htmlStr);
        }
    })
})
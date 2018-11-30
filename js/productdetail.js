$(function () {

    var categoryid;

    var str = location.search;
    str = decodeURI(str);
    str = str.slice("?");
    var arr = str.split("&");
    var str1 = +arr[0].split("=")[1];
    var str2 = arr[1].split("=")[1];

    var productid = str1;



    $('.lay2').text(str2);
    $.ajax({
        type: "get",
        url: "http:/127.0.0.1:9090/api/getproduct",
        data: {
            productid: productid
        },
        dataType: "json",
        success: function (info) {
            console.log(info);
            categoryid = info.result[0].categoryId;
            var htmlStr = template("productTpl", info);
            $(".product_show").html(htmlStr);
            // console.log(categoryid);
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:9090/api/getcategorybyid",
                data: {
                    categoryid: categoryid,
                },
                dataType: "json",
                success: function (info) {
                    console.log(info);
                    $('.lay').text(info.result[0].category);
                    // console.log(info.category);
                }

            })
        }
    });




    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getproductcom",
        data: {
            productid: productid
        },
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("comTpl", info);
            $(".ass_ms").html(htmlStr);
        }
    })


})
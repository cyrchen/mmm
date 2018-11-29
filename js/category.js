$(function () {



    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getcategorytitle",
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("titleTpl", info);
            $(".mm_category ul").html(htmlStr);

            $(".getCategory").on("click", function () {
                var id = $(this).data("id");
                if ($(this).next().find("li").length == 0) {
                    renderCategory(id);
                } else {
                    $(this).next().slideToggle();
                }
            })
        }
    });

    function renderCategory(id) {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getcategory",
            data: {
                titleid: id
            },
            dataType: "json",
            success: function (info) {
                console.log(info);
                $ul = $("a[index=" + id + "]").next();
                var htmlStr = template("listTpl", info);
                $ul.html(htmlStr);
                $ul.css({
                    "display": "none"
                });
                $ul.slideDown();
            }
        })
    }

    $(".to_top").on("click", function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    })




})
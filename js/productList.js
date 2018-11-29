$(function () {

    var categoryid = location.search.slice(12);
    var totalCount;
    var pagesize = 10;
    var pageid = 1;


    $.ajax({
        type: "get",
        url: "http://192.168.27.42:9090/api/getcategorybyid",
        data: {
            categoryid: categoryid
        },
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template("tpl1", info);
            $(".mm_nav .nav_l").html(htmlStr);
        }
    });

    rander();

    function rander() {
        $.ajax({
            type: "get",
            url: "http://192.168.27.42:9090/api/getproductlist",
            data: {
                categoryid: categoryid,
                pageid: pageid
            },
            dataType: "json",
            success: function (info) {
                console.log(info);
                var htmlStr = template("tpl2", info);
                $(".mm_product ul").html(htmlStr);
                var optionStr;
                var end = Math.ceil(info.totalCount / info.pagesize);
                console.log(end);
                for (var i = 1; i <= end; i++) {
                    optionStr += "<option a=" + i + " value=" + i + ">" + i + "/" + end + "</option>";

                }
                $('select').html(optionStr);
                $('option[a=' + pageid + ']').prop('selected', 'ture');
            }
        });
    }

    $('select').on('change', function () {
        var id = $(this).val();
        pageid = id;
        rander();
    });
    $(".prev").click(function () {
        pageid--;
        rander();
    });
    $(".next").click(function () {
        pageid++;
        rander();
    })


    $(".to_top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    })

})
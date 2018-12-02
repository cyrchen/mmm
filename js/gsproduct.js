$(function () {

    var shopid = 0;
    var areaid = 0;
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getgsshop',
        dataType: "json",
        success: function (info) {
            console.log(info);
            var nav_shop = template('nav-shop', info);
            $('.box_nav li:first-child ul').html(nav_shop);
            rander(shopid, areaid);
        }
    });
    $.ajax({
        url: "http://127.0.0.1:9090/api/getgsshoparea",
        dataType: 'json',
        success: function (info) {
            console.log(info);
            var nav_shop1 = template('nav-adress', info);
            $('.box_nav li:nth-child(2) ul').html(nav_shop1);
        }
    });

    function rander(shopid, areaid) {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getgsproduct',
            data: {
                shopid: shopid,
                areaid: areaid
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var Str = template('content', info);
                $('.main ul').html(Str);
            }
        });
    }

    $('.box_nav li:first-child ul').on('click', 'li', function () {
        shopid = $(this).attr('data-shopId');
        var i = $(this).find('a').text();
        $('.box_nav li:first-child ul').siblings().text(i);
        console.log(i);
        console.log(shopid);
    });
    $('.box_nav li:nth-child(2) ul').on('click', 'li', function () {
        var i = $(this).find('a').text();
        $('.box_nav li:nth-child(2) ul').siblings().text(i);
        areaid = $(this).attr('data-areaId');
        console.log(areaid)
        rander(shopid, areaid)
    });

});
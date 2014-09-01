var button_click = function(){
    $("#product_list").hide();
    $("#shopping_car").hide();
    $("#payment_page").hide();
    $("#home").find("button").on('click',function(){
        $("#home").hide();
        $("#product_list").show();
        $('#bar').find('li').removeClass("active");
        $('#bar').find('li').eq(2).addClass("active");
        product_list();
    });
    $('#bar').find('#shopping_cart').on('click',function(){
        var bought_list = JSON.parse(localStorage.lists);
        $("#product_list").hide();
        $("#payment_page").hide();
        $("#home").hide();
        $("#shopping_car").show();
        $('#bar').find('li').removeClass("active");
        $('#bar').find('li').eq(3).addClass("active");
        shopping_cart(bought_list);
    });
    $('#bar').find('#index').on('click',function(){
        $("#product_list").hide();
        $("#payment_page").hide();
        $("#shopping_car").hide();
        $('#bar').find('li').removeClass("active");
        $('#bar').find('li').eq(1).addClass("active");
        $("#home").show();
    });

    $('#bar').find('#list').on('click',function(){
        $("#payment_page").hide();
        $("#home").hide();
        $("#shopping_car").hide();
        $("#product_list").show();
        $('#bar').find('li').removeClass("active");
        $('#bar').find('li').eq(2).addClass("active");
        product_list();
    });
    $('#shopping_car ').find('#payment').on('click', function () {
        var time = new Time().get_time();
        $("#home").hide();
        $("#shopping_car").hide();
        $("#product_list").hide();
        $('#bar').find('li').removeClass("active");
        $('#bar').find('li').eq(3).addClass("active");
        $("#payment_page").show()
            .find('#time').text(time);
        show_payment();
    });

    $('#payment_page').find('#pay').on('click', function () {
        initialization();
        $("#payment_page").hide();
        $("#home").hide();
        $("#shopping_car").hide();
        $("#product_list").show();
        $('#bar').find('li').removeClass("active");
        $('#bar').find('li').eq(2).addClass("active");
        product_list();
        refresh_car_num();
    });
};
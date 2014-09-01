var show_head_bar = function(){
    $("#product_list").hide();
    $("#shopping_car").hide();
    $("#payment_page").hide();
    $("#home").find("button").on('click',function(){
        $("#home").hide();
        $("#product_list").show();
        product_list();
    });
    $('#bar').find('#shopping_cart').on('click',function(){
        var bought_list = JSON.parse(localStorage.lists);
        $("#product_list").hide();
        $("#payment_page").hide();
        $("#home").hide();
        $("#shopping_car").show();
        show_list(bought_list);
        change_num();

    });
    $('#bar').find('#index').on('click',function(){
        $("#product_list").hide();
        $("#payment_page").hide();
        $("#shopping_car").hide();
        $("#home").show();
    });

    $('#bar').find('#list').on('click',function(){
        $("#payment_page").hide();
        $("#home").hide();
        $("#shopping_car").hide();
        $("#product_list").show();
        product_list();
    });
};
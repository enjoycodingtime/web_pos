$(document).ready(function(){
    $("#product_list").hide();
    $("#shopping_car").hide();
    $("#payment_page").hide();
    $("#home").find("button").on('click',function(){
        $("#home").hide();
        $("#product_list").show();
    });
    $("#product_list").find("#coke").on('click',function(){
       var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    $("#product_list").find("#sprite").on('click',function(){
        var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    $("#product_list").find("#apple").on('click',function(){
        var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    $("#product_list").find("#lychee").on('click',function(){
        var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    $("#product_list").find("#battery").on('click',function(){
        var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    $("#product_list").find("#instant_noodles").on('click',function(){
        var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    });

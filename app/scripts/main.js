$(document).ready(function(){
    localStorage.lists = JSON.stringify({
        coke:0,
        sprite:0,
        apple:0,
        lychee:0,
        battery:0,
        instant_noodles:0
    });
    $("#product_list").hide();
    $("#shopping_car").hide();
    $("#payment_page").hide();
    $("#home").find("button").on('click',function(){
        $("#home").hide();
        $("#product_list").show();
    });
    $('#bar').find('#shopping_cart').on('click',function(){
        var bought_list = JSON.parse(localStorage.lists);
        $("#product_list").hide();
        $("#payment_page").hide();
        $("#home").hide();
        $("#shopping_car").show();
        show_list(bought_list);
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
    });
    $("#product_list").find("#coke").on('click',function(){
        var lists = JSON.parse(localStorage.lists );
        lists.coke = parseInt(lists.coke)+1;
        localStorage.lists = JSON.stringify(lists);
       var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    $("#product_list").find("#sprite").on('click',function(){
        var lists = JSON.parse(localStorage.lists );
        lists.sprite = parseInt(lists.sprite)+1;
        localStorage.lists = JSON.stringify(lists);
        var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    $("#product_list").find("#apple").on('click',function(){
        var lists = JSON.parse(localStorage.lists );
        lists.apple = parseInt(lists.apple)+1;
        localStorage.lists = JSON.stringify(lists);
        var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    $("#product_list").find("#lychee").on('click',function(){
        var lists = JSON.parse(localStorage.lists );
        lists.lychee = parseInt(lists.lychee)+1;
        localStorage.lists = JSON.stringify(lists);
        var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    $("#product_list").find("#battery").on('click',function(){
        var lists = JSON.parse(localStorage.lists );
        lists.battery = parseInt(lists.battery)+1;
        localStorage.lists = JSON.stringify(lists);
        var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    $("#product_list").find("#instant_noodles").on('click',function(){
        var lists = JSON.parse(localStorage.lists );
        lists.instant_noodles = parseInt(lists.instant_noodles)+1;
        localStorage.lists = JSON.stringify(lists);
        var car_number = +$('#bar').find('#car_number').text()+1;
        $('#bar').find('#car_number').text(car_number);
    });
    });
var show_list = function(bought_list){

        $("#shopping_car").find("#items").html("<table class='table table-bordered'>" +
            "<tr id='drinks'><td>" +"<h2>"+'饮料'+"</h1>"+
            "</td></tr>"+
            "<tr id='drinks'><<td>名称</td><td>单价（元）</td><td>单位</td><td>数量</td><td>小计</td></tr>"+
            "<tr id='car_coke'><td>可口可乐</td><td>3</td><td>瓶</td><td id='coke_num'></td><td id='coke_count'> </td></tr>"+
            "<tr id='car_sprite'><td>雪碧</td><td>3</td><td>瓶</td><td id='sprite_num'></td><td id='sprite_count'></td></tr>"+
            "<tr id='fruits'><td>" +"<h2>"+'水果'+"</h1>"+
            "</td></tr>"+
            "<tr id='fruits'><<td>名称</td><td>单价（元）</td><td>单位</td><td>数量</td><td>小计</td></tr>"+
            "<tr id='car_apple'><td>苹果</td><td>5.5</td><td>斤</td><td id='apple_num'></td><td id='apple_count'> </td></tr>"+
            "<tr id='car_lychee'><td>荔枝</td><td>15</td><td>斤</td><td id='lychee_num'></td><td id='lychee_count'></td></tr>"+
            "<tr id='tools'><td>" +"<h2>"+'生活用品'+"</h1>"+
            "</td></tr>"+
            "<tr id='tools'><<td>名称</td><td>单价（元）</td><td>单位</td><td>数量</td><td>小计</td></tr>"+
            "<tr id='car_battery'><td>电池</td><td>2</td><td>个</td><td id='battery_num'></td><td id='battery_count'></td></tr>"+
            "<tr id='foods'><td>" +"<h2>"+'食品'+"</h1>"+
            "</td></tr>"+
            "<tr id='foods'><<td>名称</td><td>单价（元）</td><td>单位</td><td>数量</td><td>小计</td></tr>"+
            "<tr id='car_instant_noodles'><td>方便面</td><td>4.5</td><td>袋</td><td id='instant_noodles_num'></td><td id='instant_noodles_count'></td></tr>"+
            "</table>");
        if(bought_list.coke ==0 && bought_list.sprite ==0 ){
            $("#shopping_car").find("#items").find('table').find('tr#drinks').hide();
        }
        if(bought_list.coke == 0){
            $("#shopping_car").find("#items").find('table').find('tr#car_coke').hide();
        }
        if(bought_list.sprite == 0){
            $("#shopping_car").find("#items").find('table').find('tr#car_sprite').hide();
        }
        if(bought_list.apple ==0 && bought_list.lychee ==0 ){
            $("#shopping_car").find("#items").find('table').find('tr#fruits').hide();
       }
        if(bought_list.apple == 0){
            $("#shopping_car").find("#items").find('table').find('tr#car_apple').hide();
    }
        if(bought_list.lychee == 0){
            $("#shopping_car").find("#items").find('table').find('tr#car_lychee').hide();
    }
        if(bought_list.battery ==0 ){
            $("#shopping_car").find("#items").find('table').find('tr#tools').hide();
            $("#shopping_car").find("#items").find('table').find('tr#car_battery').hide();
    }

        if(bought_list.instant_noodles == 0){
          $("#shopping_car").find("#items").find('table').find('tr#foods').hide();
          $("#shopping_car").find("#items").find('table').find('tr#car_instant_noodles').hide();
     }
        $("#shopping_car").find("#items").find('table').find('tr#car_coke').find('td#coke_num').text(bought_list.coke);
        $("#shopping_car").find("#items").find('table').find('tr#car_coke').find('td#coke_count').text(bought_list.coke *3);
        $("#shopping_car").find("#items").find('table').find('tr#car_sprite').find('td#sprite_num').text(bought_list.sprite);
        $("#shopping_car").find("#items").find('table').find('tr#car_sprite').find('td#sprite_count').text(bought_list.sprite*3);
        $("#shopping_car").find("#items").find('table').find('tr#car_apple').find('td#apple_num').text(bought_list.apple);
        $("#shopping_car").find("#items").find('table').find('tr#car_apple').find('td#apple_count').text(bought_list.apple*5.5);
        $("#shopping_car").find("#items").find('table').find('tr#car_lychee').find('td#lychee_num').text(bought_list.lychee);
        $("#shopping_car").find("#items").find('table').find('tr#car_lychee').find('td#lychee_count').text(bought_list.lychee*15);
        $("#shopping_car").find("#items").find('table').find('tr#car_battery').find('td#battery_num').text(bought_list.battery);
        $("#shopping_car").find("#items").find('table').find('tr#car_battery').find('td#battery_count').text(bought_list.battery*2);
        $("#shopping_car").find("#items").find('table').find('tr#car_instant_noodles').find('td#car_instant_noodles_num').text(bought_list.instant_noodles);
        $("#shopping_car").find("#items").find('table').find('tr#car_instant_noodles').find('td#car_instant_noodles_count').text(bought_list.instant_noodles*2);
    var count = bought_list.coke*3+bought_list.sprite*3+bought_list.apple*5.5+bought_list.lychee*15+bought_list.battery*2+bought_list.instant_noodles*4.5;
    $("#shopping_car").find('span#count').text(count);
    console.log(count);

};

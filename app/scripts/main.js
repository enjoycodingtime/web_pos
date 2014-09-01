$(document).ready(function(){
    initialization();
    show_head_bar();

    $('#shopping_car ').find('#payment').on('click',function(){
        var time = new Time().get_time();
        $("#home").hide();
        $("#shopping_car").hide();
        $("#product_list").hide();
        $("#payment_page").show()
            .find('#time').text(time);
        show_payment();
    });

    $('#payment_page').find('#pay').on('click',function(){
        initialization();
        $("#payment_page").hide();
        $("#home").hide();
        $("#shopping_car").hide();
        $("#product_list").show();
        $('#bar').find('#car_number').text(0);
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
            "<tr id='car_coke'><td>可口可乐</td><td>3</td><td>瓶</td><td><button id='coke_lower'>-</button><span  id='coke_num'></span><button id='coke_add'>+</button></td><td id='coke_count'> </td></tr>"+
            "<tr id='car_sprite'><td>雪碧</td><td>3</td><td>瓶</td><td><button id='sprite_lower'>-</buttons><span  id='sprite_num'></span><button id='sprite_add'>+</button></td><td id='sprite_count'></td></tr>"+
            "<tr id='fruits'><td>" +"<h2>"+'水果'+"</h1>"+
            "</td></tr>"+
            "<tr id='fruits'><<td>名称</td><td>单价（元）</td><td>单位</td><td>数量</td><td>小计</td></tr>"+
            "<tr id='car_apple'><td>苹果</td><td>5.5</td><td>斤</td><td><button id='apple_lower'>-</button><span  id='apple_num'></span><button id='apple_add'>+</button></td><td id='apple_count'> </td></tr>"+
            "<tr id='car_lychee'><td>荔枝</td><td>15</td><td>斤</td><td><button id='lychee_lower'>-</button><span  id='lychee_num'></span><button id='lychee_add'>+</button></td><td id='lychee_count'></td></tr>"+
            "<tr id='tools'><td>" +"<h2>"+'生活用品'+"</h1>"+
            "</td></tr>"+
            "<tr id='tools'><<td>名称</td><td>单价（元）</td><td>单位</td><td>数量</td><td>小计</td></tr>"+
            "<tr id='car_battery'><td>电池</td><td>2</td><td>个</td><td><button id='battery_lower'>-</button><span  id='battery_num'></span><button id='battery_add'>+</button></td><td id='battery_count'></td></tr>"+
            "<tr id='foods'><td>" +"<h2>"+'食品'+"</h1>"+
            "</td></tr>"+
            "<tr id='foods'><<td>名称</td><td>单价（元）</td><td>单位</td><td>数量</td><td>小计</td></tr>"+
            "<tr id='car_instant_noodles'><td>方便面</td><td>4.5</td><td>袋</td><td><button id='instant_noodles_lower'>-</button><span  id='instant_noodles_num'></span><button id='instant_noodles_add'>+</button></td><td id='instant_noodles_count'></td></tr>"+
            "</table>");
        if(bought_list.coke ==0 && bought_list.sprite ==0 ){
            $("#shopping_car").find('tr#drinks').hide();
        }
        if(bought_list.coke == 0){
            $("#shopping_car").find('tr#car_coke').hide();
        }
        if(bought_list.sprite == 0){
            $("#shopping_car").find('tr#car_sprite').hide();
        }
        if(bought_list.apple ==0 && bought_list.lychee ==0 ){
            $("#shopping_car").find('tr#fruits').hide();
       }
        if(bought_list.apple == 0){
            $("#shopping_car").find('tr#car_apple').hide();
         }
        if(bought_list.lychee == 0){
            $("#shopping_car").find('tr#car_lychee').hide();
         }
        if(bought_list.battery ==0 ){
            $("#shopping_car").find('tr#tools').hide();
            $("#shopping_car").find('tr#car_battery').hide();
         }
        if(bought_list.instant_noodles == 0){
          $("#shopping_car").find('tr#foods').hide();
          $("#shopping_car").find('tr#car_instant_noodles').hide();
         }

        $("#shopping_car").find('span#coke_num').text(bought_list.coke);
        $("#shopping_car").find('td#coke_count').text(bought_list.coke *3);
        $("#shopping_car").find('td').find('span#sprite_num').text(bought_list.sprite);
        $("#shopping_car").find('td#sprite_count').text(bought_list.sprite*3);
        $("#shopping_car").find('td').find('span#apple_num').text(bought_list.apple);
        $("#shopping_car").find('td#apple_count').text(bought_list.apple*5.5);
        $("#shopping_car").find('td').find('span#lychee_num').text(bought_list.lychee);
        $("#shopping_car").find('td#lychee_count').text(bought_list.lychee*15);
        $("#shopping_car").find('span#battery_num').text(bought_list.battery);
        $("#shopping_car").find('td#battery_count').text(bought_list.battery*2);
        $("#shopping_car").find('span#instant_noodles_num').text(bought_list.instant_noodles);
        $("#shopping_car").find('td#instant_noodles_count').text(bought_list.instant_noodles*2);
    var count = bought_list.coke*3+bought_list.sprite*3+bought_list.apple*5.5+bought_list.lychee*15+bought_list.battery*2+bought_list.instant_noodles*4.5;
    $("#shopping_car").find('span#count').text(count);

};

var show_payment = function() {
    var bought_list = JSON.parse(localStorage.lists);
    $("#payment_page").find("p").first().html("<table class='table table-bordered'>" +
        "<tr><td>分类</td><td>名称</td><td>单价（元）</td><td>单位</td><td>数量</td><td>小计</td></tr>"+
        "<tr id='car_coke'><td>饮料</td><td>可口可乐</td><td>3</td><td>瓶</td><td><span  id='coke_num'></span></td><td id='coke_count'> </td></tr>" +
        "<tr id='car_sprite'><td>饮料</td><td>雪碧</td><td>3</td><td>瓶</td><td><span  id='sprite_num'></span></td><td id='sprite_count'></td></tr>" +
        "<tr id='car_apple'><td>水果</td><td>苹果</td><td>5.5</td><td>斤</td><td><span  id='apple_num'></span></td><td id='apple_count'> </td></tr>" +
        "<tr id='car_lychee'><td>水果</td><td>荔枝</td><td>15</td><td>斤</td><td><span  id='lychee_num'></span></td><td id='lychee_count'></td></tr>" +
        "<tr id='car_battery'><td>生活用品</td><td>电池</td><td>2</td><td>个</td><td><span  id='battery_num'></span></td><td id='battery_count'></td></tr>" +
        "<tr id='car_instant_noodles'><td>食品</td><td>方便面</td><td>4.5</td><td>袋</td><td><span  id='instant_noodles_num'></span></td><td id='instant_noodles_count'></td></tr>" +
        "</table>");
    $("#payment_page").find("p").last().html("<table class='table table-bordered'>" +
        "<tr><td>分类</td><td>名称</td><td>数量</td></tr>"+
        "<tr id='sale_coke'><td>饮料</td><td>可口可乐</td><td><span  id='sale_coke_num'></span></td></tr>" +
        "<tr id='sale_sprite'><td>饮料</td><td>雪碧</td><td><span  id='sale_sprite_num'></span></td></tr>" +
        "<tr id='sale_instant_noodles'><td>食品</td><td>方便面</td><td><span  id='sale_instant_noodles_num'></span></td></tr>" +
        "</table>");

    if (bought_list.coke == 0) {
        $("#payment_page").find('tr#car_coke').hide();
    }
    if (bought_list.sprite == 0) {
        $("#payment_page").find('tr#car_sprite').hide();
    }

    if (bought_list.apple == 0) {
        $("#payment_page").find('tr#car_apple').hide();
    }
    if (bought_list.lychee == 0) {
        $("#payment_page").find('tr#car_lychee').hide();
    }
    if (bought_list.battery == 0) {
        $("#payment_page").find('tr#car_battery').hide();
    }
    if (bought_list.instant_noodles == 0) {
        $("#payment_page").find('tr#car_instant_noodles').hide();
    }

    if (bought_list.coke <= 2) {
        $("#payment_page").find('tr#sale_coke').hide();
    }
    if (bought_list.sprite <= 2) {
        $("#payment_page").find('tr#sale_sprite').hide();
    }
    if (bought_list.instant_noodles <= 2) {
        $("#payment_page").find('tr#sale_instant_noodles').hide();
    }

    $("#payment_page").find('span#sale_coke_num').text(parseInt(bought_list.coke/3));
    $("#payment_page").find('span#sale_sprite_num').text(parseInt(bought_list.sprite/3));
    $("#payment_page").find('span#sale_instant_noodles_num').text(parseInt(bought_list.instant_noodles/3));
    var coke_cut = 0,
        sprite_cut = 0,
        instant_noodles_cut = 0;
    $("#payment_page").find('span#coke_num').text(bought_list.coke);
    if(bought_list.coke >=3){
        coke_cut = parseInt(bought_list.coke/3) *3;
        var price = (bought_list.coke-parseInt(bought_list.coke/3))*3+'元'+'（原价：'+bought_list.coke *3+"元）";
        $("#payment_page").find('td#coke_count').text(price);
    }else{
        $("#payment_page").find('td#coke_count').text(bought_list.coke *3);
    }
    $("#payment_page").find('span#sprite_num').text(bought_list.sprite);
    if(bought_list.sprite >=3){
        sprite_cut = parseInt(bought_list.sprite/3)*3;
        var price = (bought_list.sprite-parseInt(bought_list.sprite/3))*3+'元'+'（原价：'+bought_list.sprite *3+"元）";
        $("#payment_page").find('td#sprite_count').text(price);
    }else{
        $("#payment_page").find('td#sprite_count').text(bought_list.sprite *3);
    }
    if(bought_list.instant_noodles >=3){
        instant_noodles_cut = parseInt(bought_list.instant_noodles/3)*4.5;
        var price = (bought_list.instant_noodles-parseInt(bought_list.instant_noodles/3))*4.5+'元'+'（原价：'+bought_list.instant_noodles *4.5+"元）";
        $("#payment_page").find('td#instant_noodles_count').text(price);
    }else{
        $("#payment_page").find('td#instant_noodles_count').text(bought_list.instant_noodles *4.5);
    }

    $("#payment_page").find('span#apple_num').text(bought_list.apple);
    $("#payment_page").find('td').find('span#apple_num').text(bought_list.apple);
    $("#payment_page").find('td#apple_count').text(bought_list.apple*5.5);
    $("#payment_page").find('td').find('span#lychee_num').text(bought_list.lychee);
    $("#payment_page").find('td#lychee_count').text(bought_list.lychee*15);
    $("#payment_page").find('span#battery_num').text(bought_list.battery);
    $("#payment_page").find('td#battery_count').text(bought_list.battery*2);
    $("#payment_page").find('span#instant_noodles_num').text(bought_list.instant_noodles);
    var all_count = bought_list.coke*3+bought_list.sprite*3+bought_list.apple*5.5+bought_list.lychee*15+bought_list.battery*2+bought_list.instant_noodles*4.5-(coke_cut+sprite_cut+instant_noodles_cut);
    $("#payment_page").find('#all_counts').text('总计：'+all_count.toFixed(2));
    $("#payment_page").find('#cut_count').text('节省：'+(coke_cut+sprite_cut+instant_noodles_cut).toFixed(2));

};

var show_count =function(bought_list){
    var count = bought_list.coke*3+bought_list.sprite*3+bought_list.apple*5.5+bought_list.lychee*15+bought_list.battery*2+bought_list.instant_noodles*4.5;
    $("#shopping_car").find('span#count').text(count);
};

var add_num = function(item){
    var lists = JSON.parse(localStorage.lists );
    lists[item] = parseInt(lists[item])+1;
    localStorage.lists = JSON.stringify(lists);
};
var lower_num = function(item){
    var lists = JSON.parse(localStorage.lists );
    if(lists[item] == 0){
        alert("can't lower because the number is 0");
            return;
    }
    lists[item] = parseInt(lists[item])-1;
    localStorage.lists = JSON.stringify(lists);
};
var change_num = function(){
    $("#shopping_car").find('button#coke_add').on('click',function(){
        add_num('coke');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#coke_num').text(new_num.coke);
        $("#shopping_car").find('td#coke_count').text(new_num.coke *3);
        show_count(new_num);
    });
    $("#shopping_car").find('button#coke_lower').on('click',function(){
        lower_num('coke');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#coke_num').text(new_num.coke);
        $("#shopping_car").find('td#coke_count').text(new_num.coke *3);
        show_count(new_num);
    });
    $("#shopping_car").find('button#sprite_add').on('click',function(){
        add_num('sprite');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#sprite_num').text(new_num.sprite);
        $("#shopping_car").find('td#sprite_count').text(new_num.sprite *3);
        show_count(new_num);
    });
    $("#shopping_car").find('button#sprite_lower').on('click',function(){
        lower_num('sprite');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#sprite_num').text(new_num.sprite);
        $("#shopping_car").find('td#sprite_count').text(new_num.sprite *3);
        show_count(new_num);
    });
    $("#shopping_car").find('button#apple_add').on('click',function(){
        add_num('apple');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#apple_num').text(new_num.apple);
        $("#shopping_car").find('td#apple_count').text(new_num.apple *3);
        show_count(new_num);
    });
    $("#shopping_car").find('button#apple_lower').on('click',function(){
        lower_num('apple');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#apple_num').text(new_num.apple);
        $("#shopping_car").find('td#apple_count').text(new_num.apple *3);
        show_count(new_num);
    });
      $("#shopping_car").find('button#lychee_add').on('click',function(){
        add_num('lychee');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#lychee_num').text(new_num.lychee);
        $("#shopping_car").find('td#lychee_count').text(new_num.lychee *3);
          show_count(new_num);
    });
    $("#shopping_car").find('button#lychee_lower').on('click',function(){
        lower_num('lychee');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#lychee_num').text(new_num.lychee);
        $("#shopping_car").find('td#lychee_count').text(new_num.lychee *3);
        show_count(new_num);
    });
      $("#shopping_car").find('button#battery_add').on('click',function(){
        add_num('battery');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#battery_num').text(new_num.battery);
        $("#shopping_car").find('td#battery_count').text(new_num.battery *3);
          show_count(new_num);
    });
    $("#shopping_car").find('button#battery_lower').on('click',function(){
        lower_num('battery');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#battery_num').text(new_num.battery);
        $("#shopping_car").find('td#battery_count').text(new_num.battery *3);
        show_count(new_num);
    });
    $("#shopping_car").find('button#instant_noodles_add').on('click',function(){
        add_num('instant_noodles');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#instant_noodles_num').text(new_num.instant_noodles);
        $("#shopping_car").find('td#instant_noodles_count').text(new_num.instant_noodles *3);
        show_count(new_num);
    });
    $("#shopping_car").find('button#instant_noodles_lower').on('click',function(){
        lower_num('instant_noodles');
        var new_num = JSON.parse(localStorage.lists);
        $("#shopping_car").find('span#instant_noodles_num').text(new_num.instant_noodles);
        $("#shopping_car").find('td#instant_noodles_count').text(new_num.instant_noodles *3);
        show_count(new_num);
    });
};

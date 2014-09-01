var product_list = function(){
    var allItems = loadAllItems(),
        button = '<button type="button" class="btn btn-info">加入购物车</button>';
    var bar =$("#product_list").find("tr").first().html();
    $("#product_list").find("table").html('<tr>'+bar+'</tr>');
    _(allItems).each(function(item){
        var table_row = "<tr>"+
            "<td>"+item.sort+"</td>"+
            "<td>"+item.name+"</td>"+
            "<td>"+item.unit+"</td>"+
            "<td>"+item.price+"</td>"+
            "<td>"+button+"</td>"+
            "</tr>";
        $("#product_list").find("table").append(table_row);
    });
    $('#product_list').find('button').on('click',function(){
        var name = $(this).closest('tr').find('td').eq(1).text();
        add_num(name);
        refresh_car_num();
    });
};
var add_num = function(item){
    var lists = JSON.parse(localStorage.lists );
    lists[item] = parseInt(lists[item])+1;
    localStorage.lists = JSON.stringify(lists);
};
var lower_num = function(item){
    var lists = JSON.parse(localStorage.lists );
    if(lists[item] == 1){
        alert("can't lower because the number is 1");
        return;
    }
    lists[item] = parseInt(lists[item])-1;
    localStorage.lists = JSON.stringify(lists);
};
var refresh_car_num = function(){
    var lists = JSON.parse(localStorage.lists );
    var num = 0;
     _(lists).each(function(list){
        num = list+num;
    });
    $('#bar').find('#car_number').text(num);
};
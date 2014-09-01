var product_list = function(){
    var allItems = loadAllItems(),
        button = '<button type="button" class="btn btn-info">加入购物车</button>';
    $("#product_list").find("table").html($("#product_list").find("tr").first().html());
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
var refresh_car_num = function(){
    var car_number = +$('#bar').find('#car_number').text()+1;
    $('#bar').find('#car_number').text(car_number);
};
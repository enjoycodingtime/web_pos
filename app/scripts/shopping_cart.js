var shopping_cart = function(bought_list){
    var allItems = loadAllItems(),
        lower_button = '<button type="button" class="btn btn-default">-</button>',
        add_button = '<button type="button" class="btn btn-default">+</button>',
        all_count = 0;
    var bar =$("#shopping_car").find("tr").first().html();
    $("#shopping_car").find("table").html('<tr>'+bar+'</tr>');
    allItems = _(allItems).each(function(item){
        item.num = bought_list[item.name];
    });
    allItems = _(allItems).filter(function(num){
                return num.num !=0;
    });
    _(allItems).each(function(item){
        var table_row = "<tr>"+
            "<td>"+item.sort+"</td>"+
            "<td>"+item.name+"</td>"+
            "<td>"+item.price+"</td>"+
            "<td>"+item.unit+"</td>"+
            "<td>"+lower_button+' '+item.num+' '+add_button+"</td>"+
            "<td>"+item.num * item.price+"</td>"+
            "</tr>";
        all_count += item.num * item.price;
        $("#shopping_car").find("table").append(table_row);
    });
    $("#shopping_car").find("span").text(all_count);
    $('#shopping_car').find('button').on('click',function(){
        var add_or_lower = $(this).text();
        var name = $(this).closest('tr').find('td').eq(1).text();
        if(add_or_lower == "+"){
            add_num(name);
        }else{
            lower_num(name);
        }
        var lists =JSON.parse(localStorage.lists );
        shopping_cart(lists);
        refresh_car_num();
    });
};
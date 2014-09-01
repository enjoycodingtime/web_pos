var show_payment = function(){
    var time = new Time().get_time(),
        allItems = loadAllItems(),
        promotions = loadPromotions()[0].barcodes,
        all_count = 0,
        cut_count = 0,
        bought_list = JSON.parse(localStorage.lists);
    $('#payment_page').find('#time').text(time);
    var bar =$("#payment_page").find("tr").first().html();
    $("#payment_page").find("table").eq(0).html('<tr>'+bar+'</tr>');
    cut_bar = "<tr><td>分类</td><td>名称</td><td>数量</td></tr>";
    $("#payment_page").find("table").eq(1).html(cut_bar);
    allItems = _(allItems).each(function(item){
        item.num = bought_list[item.name];
    });
    allItems = _(allItems).filter(function(num){
        return num.num !=0;
    });
    _(allItems).each(function(item){
        var cut_price = parseInt(item.num/3)*item.price,
            count = item.num * item.price,
            table_row = "<tr>"+
            "<td>"+item.sort+"</td>"+
            "<td>"+item.name+"</td>"+
            "<td>"+item.price+"</td>"+
            "<td>"+item.unit+"</td>"+
            "<td>"+item.num+"</td>"+
            "<td>"+count+"</td>"+
            "</tr>";
        var promotion = _.find(promotions,function(num){ return num == item.barcode;});
        if(promotion){
            if(item.num>=3){
                var now_price = (count-parseInt(item.num/3)*item.price)+'(原价：'+ count+"元）";
                table_row = "<tr>"+
                    "<td>"+item.sort+"</td>"+
                    "<td>"+item.name+"</td>"+
                    "<td>"+item.price+"</td>"+
                    "<td>"+item.unit+"</td>"+
                    "<td>"+item.num+"</td>"+
                    "<td>"+now_price+"</td>"+
                    "</tr>";
                cut_row = "<tr>"+
                    "<td>"+item.sort+"</td>"+
                    "<td>"+item.name+"</td>"+
                    "<td>"+parseInt(item.num/3)+"</td>"+
                    "</tr>";
                $("#payment_page").find("table").eq(1).append(cut_row);
            }
        };
        all_count +=(count-cut_price);
        cut_count += cut_price;
        $("#payment_page").find("table").eq(0).append(table_row);
    });

    $("#payment_page").find("div#all_counts").text('总计：'+all_count);
    $("#payment_page").find("div#cut_count").text('节省：'+cut_count);
//    +'(原价：'+ count+"元）"+"
};
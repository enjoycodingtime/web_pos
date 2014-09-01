var initialization = function(){
    var allItems = loadAllItems();
    var list = {};
    for(var index in allItems){
        var name = allItems[index].name;
        list[name] =0;
    }
    localStorage.lists = JSON.stringify(list);
};
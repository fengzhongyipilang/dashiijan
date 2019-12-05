var category = {

    //文章显示
    show: function(callback) {
        $.get(apis.category_show, function(res) {
            callback(res);
        })
    }
}
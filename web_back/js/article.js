var article = {

    //发布
    get: function(data, callback) {
        $.get(apis.article_get, data, function(res) {
            callback(res);
        });
    },

    //添加
    add: function() {

    },

}
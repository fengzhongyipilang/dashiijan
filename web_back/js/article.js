var article = {

    //发布
    get: function(data, callback) {
        $.get(apis.article_get, data, function(res) {
            callback(res);
        });
    },

    //添加
    add: function(fd, callback) {
        $.ajax({
            type: 'post',
            url: apis.article_add,
            data: fd,
            success: function(res) {
                callback(res)
            },
            processData: false,
            contentType: false
        })
    },

}
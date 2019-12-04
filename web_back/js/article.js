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

    //删除
    delete: function(id, callback) {
        $.get(apis.article_delete, { id }, function(res) {
            callback(res);
        })
    },

    //编辑
    edit: function(id, callback) {
        $.ajax({
            type: 'post',
            url: apis.article_edit,
            data: fd,
            success: function(res) {
                callback(res)
            },
            processData: false,
            contentType: false
        })
    }
}
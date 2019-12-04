var category = {

    //获取

    get: function(callback) {
        $.ajax({
            url: apis.category_get,
            type: 'get',
            success: function(res) {
                callback(res);
            }
        })
    },

    //新增

    add: function(name, slug, callback) {
        $.ajax({
            url: apis.category_add,
            type: 'post',
            data: {
                name: name,
                slug: slug
            },
            success: function(res) {
                callback(res);
            }

        })
    },

    //修改
    edit: function(id, name, slug, callback) {
        $.ajax({
            url: apis.category_edit,
            type: 'post',
            data: {
                id: id,
                name: name,
                slug: slug
            },
            success: function(res) {
                callback(res)
            }
        })
    },
    //删除
    delete: function(myid, callback) {

        $.ajax({
            url: apis.category_delete,
            type: 'post',
            data: {
                id: myid
            },
            success: function(res) {
                callback(res)
            }
        })
    }

}
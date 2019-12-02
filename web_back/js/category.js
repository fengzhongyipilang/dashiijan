var baseUrl = 'http://localhost:8000/'

var category = {

    //获取

    get: function(callback) {
        $.ajax({
            url: baseUrl + 'admin/category_search',
            type: 'get',
            success: function(res) {
                callback(res);
            }
        })
    },

    //新增

    add: function(name, slug, callback) {
        $.ajax({
            url: baseUrl + 'admin/category_add',
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

    //删除
    delete: function(myid, callback) {

        $.ajax({
            url: baseUrl + 'admin/category_delete',
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
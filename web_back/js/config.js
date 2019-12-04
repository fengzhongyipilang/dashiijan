var baseUrl = 'http://localhost:8000/'

var apis = {
    category_get: baseUrl + 'admin/category_search',
    category_add: baseUrl + 'admin/category_add',
    category_edit: baseUrl + 'admin/category_edit',
    category_delete: baseUrl + 'admin/category_delete',
    user_loginout: baseUrl + 'admin/logout',
    user_login: baseUrl + 'admin/login',
    user_getinfo: baseUrl + 'admin/getuser',

    //文章相关接口
    article_get: baseUrl + 'admin/search',

    //增加文章
    article_add: baseUrl + 'admin/article_publish',

    //删除文章
    article_delete: baseUrl + 'admin/article_delete',

    //编辑文章
    article_edit: baseUrl + 'admin/article_edit',
    //根据id获取文章
}
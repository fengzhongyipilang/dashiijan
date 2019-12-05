//接口基地址
var baseUrl = 'http://localhost:8000/';

var apis = {

    //分类接口 
    category_show: baseUrl + 'category',

    //文章接口
    article_hopbic: baseUrl + 'hotpic',
    article_article: baseUrl + 'article',
    article_search: baseUrl + 'search',
    //咨询接口
    article_late: baseUrl + 'latest',

    //排行接口
    article_rank: baseUrl + 'rank',

    //评论接口
    article_pinlun: baseUrl + 'latest_comment',

    //焦点关注接口
    article_focus: baseUrl + 'focus',

    //发表留言
    article_fabiao: baseUrl + 'post_comment',

    //评论列表接口
    article_liuyanlist: baseUrl + 'get_comments'
}
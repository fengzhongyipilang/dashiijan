var article = {
    hopbic: function(callback) {
        $.get(apis.article_hopbic, function(res) {
            callback(res)
        })
    },

    late: function(callback) {
        $.get(apis.article_late, function(res) {
            callback(res)
        })
    },
    rank: function(callback) {
        $.get(apis.article_rank, function(res) {
            callback(res)
        })
    },
    article: function(id, callback) {
        $.get(apis.article_article, { id }, function(res) {
            callback(res)
        })
    },

    //文章最新评论

    pinlun: function(callback) {
        $.get(apis.article_pinlun, function(res) {
            callback(res)
        })
    },

    //焦点关注
    focus: function(callback) {
        $.get(apis.article_focus, function(res) {
            callback(res)
        })
    },

    search: function(data, callback) {
        $.get(apis.article_search, function(res) {
            callback(res)
        })
    },
    fabiao: function(data, callback) {
        $.post(apis.article_fabiao, data, function(res) {
            callback(res)
        })
    },
    liuyanlist: function(article_id, callback) {
        $.get(apis.article_liuyanlist, function(res) {
            callback(res)
        })
    }


}
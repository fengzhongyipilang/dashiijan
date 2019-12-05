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
    }

}
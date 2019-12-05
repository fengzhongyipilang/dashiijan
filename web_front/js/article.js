var article = {
    hopbic: function(callback) {
        $.get(apis.article_hopbic, function(res) {
            callback(res)
        })
    }
}
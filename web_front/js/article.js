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
    }
}
var user = {
    loginout: function(callback) {
        $.ajax({
            url: apis.user_loginout,
            type: 'post',
            success: function(res) {
                callback(res);
            }
        })
    },

    getinfo: function(callback) {
        $.ajax({
            url: apis.user_getinfo,
            type: 'get',
            success: function(res) {
                callback(res)
            }
        })
    },

    login: function(username, password, callback) {
        $.ajax({
            url: apis.user_login,
            data: {
                user_name: username,
                password: password
            },
            type: 'post',
            success: function(res) {
                callback(res)
            }
        })
    }
}
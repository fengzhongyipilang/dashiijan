var baseUrl = 'http://localhost:8000/'

var user = {
    loginout: function(callback) {
        $.ajax({
            url: 'http://localhost:8000/admin/logout',
            type: 'post',
            success: function(res) {
                callback(res);
            }
        })
    },

    getinfo: function(callback) {
        $.ajax({
            url: 'http://localhost:8000/admin/getuser',
            type: 'get',
            success: function(res) {
                callback(res)
            }
        })
    },

    login: function(username, password, callback) {
        $.ajax({
            url: 'http://localhost:8000/admin/login',
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
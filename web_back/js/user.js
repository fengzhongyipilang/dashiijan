var baseUrl = 'http://localhost:8000/'

var user = {
    loginout: function() {
        $.ajax({
            url: 'http://localhost:8000/admin/logout',
            type: 'post',
            success: function(res) {
                if (res.code === 200) {
                    location.href = 'login.html'
                }
            }
        })
    },

    getinfo: function() {
        $.ajax({
            url: 'http://localhost:8000/admin/getuser',
            type: 'get',
            success: function(res) {
                if (res.code == 200) {
                    $('.touxiang').prop('src', res.data.user_pic);
                    $('#myname').text(res.data.nickname).css('font-style', 'normal')
                }
            }
        })
    },

    login: function(username, password) {
        $.ajax({
            url: 'http://localhost:8000/admin/login',
            data: {
                user_name: username,
                password: password
            },
            type: 'post',
            success: function(res) {

                $('#myModal').modal('show');
                $('#myMsg').text(res.msg);
                if (res.code === 200) {
                    location.href = 'index.html'
                }

            }
        })
    }
}
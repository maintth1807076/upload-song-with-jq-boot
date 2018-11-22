
//
// function createSong(jsSong) {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 201) {
//             var song = JSON.parse(this.responseText);
//             alert(`Lưu thành công bài hát ${song.name}`);
//         } else if (this.readyState == 4 && (this.status == 401 || this.status == 403)) {
//             alert('This action required logged in to continue!')
//             window.location.href = "login.html";
//         }
//     }
//     xhr.open('POST', CREATE_SONG_API, true);
//     xhr.setRequestHeader("Content-type", "application/json");
//     xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('token-key'));
//     xhr.send(JSON.stringify(jsSong));
// }
//
var validater = $('#song-form').validate({
    // rules: {
    //     'firstName': {
    //         required: true,
    //         minlength: 2,
    //         maxlength: 15
    //     },
    //     'lastName': {
    //         required: true,
    //         minlength: 2,
    //         maxlength: 15
    //     },
    //     'email': {
    //         required: true,
    //         email: true
    //     },
    //     'password': {
    //         required: true,
    //         minlength: 2,
    //         maxlength: 15
    //     },
    //     'confirm-password': {
    //         equalTo: '[name="password"]'
    //     }
    // },
    // messages: {
    //     'firstName': {
    //         required: 'Vui lòng nhập tên của bạn.',
    //         minlength: 'Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
    //         maxlength: 'Tên quá dài, vui lòng nhập nhiều nhất {0} ký tự',
    //     },
    //     'lastName': {
    //         required: 'Vui lòng nhập họ của bạn.',
    //         minlength: 'Họ quá ngắn, vui lòng nhập ít nhất {0} ký tự',
    //         maxlength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} ký tự',
    //     },
    //     'email': {
    //         required: 'Vui lòng email của bạn.',
    //         email: 'Vui lòng nhập email đúng định dạng'
    //     },
    //     'password': {
    //         required: 'Vui lòng nhập password.',
    //         minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
    //         maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
    //     },
    //     'confirm-password': {
    //         equalTo: 'Password và confirm không giống nhao.'
    //     }
    // },
    submitHandler: function (form,event) {
        event.preventDefault();
        var senderObject = {
            name: $(form["name"]).val(),
            singer: $(form["singer"]).val(),
            description: $(form["description"]).val(),
            author: $(form["author"]).val(),
            thumbnail: $(form["thumbnail"]).val(),
            link: $(form["link"]).val(),
        };
        //alert(JSON.stringify(senderObject));
        $.ajax({
            type: "POST",
            url: CREATE_SONG_API,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            headers: { 'authorization': 'Basic ' + localStorage.getItem('token')},
            success: function (data, textStatus, jqXHR) {
                console.log('success');
                alert('dang ki thanh cong');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('error');
                // if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                //     $('#summary').text(please fix ${Object.keys(jqXHR.responseJSON.error).length} below!);
                //     validater.showErrors(jqXHR.responseJSON.error);
                // }
            }
        });
        return false;
    }
});


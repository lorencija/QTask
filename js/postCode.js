$(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        success: function (allList) {
            let id_number = $.urlParam('name');
            let a = allList[id_number - 1];
            $('.container').append('<div class="row infoLine"><div class="col-lg-6 col-md-6 col-sm-12 infoElement">User ID - '
                + a['userId'] + '</div><div class="col-lg-6 col-md-6 col-sm-12 infoElement">ID - '
                + a['id'] + '</div></div><div class="row infoLine postTitle"><div class="col-lg-12 col-md-12 col-sm-12">'
                + a['title'] + '</div></div><div class="row infoLine postCont"><div class="col-lg-12 col-md-12 col-sm-12">'
                + a['body'] + '</div></div>');
        }
    });
});

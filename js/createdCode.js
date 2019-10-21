$(document).ready(function () {
    let id_number = parseInt($.urlParam('name')) + 1;
    $("a[href='new.html']").attr('href', 'new.html?name=' + id_number);

    obj = JSON.parse(localStorage.object);

    $('#newPost').append('<div class="row infoLine"><div class="col-lg-6 col-md-6 col-sm-12 infoElement">User ID - '
        + obj.userId + '</div><div class="col-lg-6 col-md-6 col-sm-12 infoElement">ID - '
        + obj.id + '</div></div><div class="row infoLine"><div class="col-lg-12 col-md-12 col-sm-12">'
        + obj.title + '</div></div><div class="row infoLine postCont"><div class="col-lg-12 col-md-12 col-sm-12">'
        + obj.body + '</div></div>');

});

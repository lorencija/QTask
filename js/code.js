$(document).ready(function () {

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
        success: function (allList) {

            $.each(allList, function (i, listItem) {

                $('#items').append('<tr class="clickable-row" id="' + listItem.id +
                    '"><th scope="row">' + listItem.id + '</th><td>' + listItem.userId +
                    '</td><td>' + listItem.title + '</td></tr>');
            });

        },
        complete: function (data) {
            $(".clickable-row").click(function () {
                let id_value = $(this).attr('id');
                window.location = 'post.html?name=' + id_value;
            });
        }
    });

}); 

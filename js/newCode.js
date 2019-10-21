$(document).ready(function () {
    let id_number = $.urlParam('name');
    $('#inputID').attr('value', id_number);
});

function getData() {
    feald1 = $('#inputUserID').val();
    feald2 = $('#inputID').val();
    feald3 = $('#inputTitle').val();
    feald4 = $('#inputBody').val();
}

function createJson() {
    json = {
        "userId": feald1,
        "id": feald2,
        "title": feald3,
        "body": feald4
    };
}

function sentJson() {
    $.post('result.php', json, function () {
        localStorage.object = JSON.stringify(json);
        window.location = 'createdPost.html?name=' + json.id;
    })
}

function validateForm() {
    let param = Number.isInteger(parseInt(feald1));
    if ((feald1 == "") || (!param)) {
        $('#erruserId').replaceWith('<div class="errors" id="erruserId">User Id must be integer number</div>');

        return false;
    } else if (feald3 == "") {
        $('#erruserId').replaceWith('<div class="errors" id="erruserId"></div>');
        $('#errTitle').replaceWith('<div class="errors" id="errTitle">Title must be filled out</div>');

        return false;
    } else if (feald4 == "") {
        $('#erruserId').replaceWith('<div class="errors" id="erruserId"></div>');
        $('#errTitle').replaceWith('<div class="errors" id="errTitle"></div>');
        $('#errBody').replaceWith('<div class="errors" id="errBody">Body must be filled out</div>');

        return false;
    } else
        return true;
}

$('[value=Save]').click(function () {
    getData();
    createJson();
    if (validateForm()) {
        sentJson();
    }
});

$(document).ready(function () {
    $("form#signup").submit(function (event) {
        event.preventDefault();
        var email = $('input#email').val();
        $('#signup').hide();
        $('#solution').prepend('<p> Thank you ,' + email + 'has been added to our list.Thanks cuz</p>');
    });
});

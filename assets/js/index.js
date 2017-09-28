$(function () {

    // Apps menu dropdown toggle
    $("#menu-icon-apps").on('click', function () {
        $("#apps-dropdown").toggleClass();
    });

    // Query Options dropdown toggle
    $("#query-options-anchor").on('click', function () {
        $("#query-options-dropdown").toggleClass();
    });

});
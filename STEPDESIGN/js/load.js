
$(function () {
    x=3;
    $('#testimonialLists li').slice(0, 3).show();
    $('#loadMore').on('click', function (e) {
        e.preventDefault();
        x = x+3;
        $('#testimonialLists li').slice(0, x).slideDown();
        if($('#testimonialLists li').length == x) {
        	$('#loadMore').hide();
        }
    });
});

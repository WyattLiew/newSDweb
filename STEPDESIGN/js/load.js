
$(function () {
    x=6;
    $('#testimonialLists li').slice(0, 6).show();
    $('#loadMore').on('click', function (e) {
        e.preventDefault();
        x = x+6;
        $('#testimonialLists li').slice(0, x).slideDown();
        if($('#testimonialLists li').length <= x) {
        	$('#loadMore').hide();
        }
    });
});


$(document).ready(function() {
    $('#content-placeholder').load('pages/color-palette.html');

    // Toggle link visibility based on selected category
    $('.sidebar__category').click(function() {
        $('.sidebar__category').removeClass('sidebar__category--active');
        $(this).addClass('sidebar__category--active');

        $('.sidebar__collapsable').slideUp(300);
        $(this).next('.sidebar__collapsable').slideDown(300);
    });

    // Load in page content based on sidebar item selection
    $('.sidebar__item').click(function() {
        $('.sidebar__item').removeClass('sidebar__item--active');
        $(this).addClass('sidebar__item--active');

        let pageId = $(this).attr('id');
        let pageUrl = 'pages/' + pageId + '.html';
        $('#content-placeholder').load(pageUrl, function() {
            // Reset scroll position to top
            $(window).scrollTop(0);
        });
    });

    // Load in page content based on inline anchor selection
    $(document).on('click', '.anchor-inline', function() {
        let pageId = $(this).attr('id');
        let pageUrl = 'pages/' + pageId + '.html';
        $('#content-placeholder').load(pageUrl, function() {
            // Reset scroll position to top
            $(window).scrollTop(0);
        });
    });
});
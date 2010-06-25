$( function() {

    // Banner ad
//    $('table:first').remove();

    // Navigation
//    $('div#logostrip')
  //      .parent('div.borderwrap')
    //    .remove();

    // Quick Links bar
    //$('div#userlinks').remove();

    // Google ads
    $('p > ins').remove();

    // Navigation
    $('div#navstrip').css({'margin': '0', 'padding': '0'});

    // Subforum listing
    $('div.borderwrap#fo_3')
        .insertAfter('div.borderwrap:last')
        .before('<br />');

    $('div.borderwrap#fc_3')
        .insertAfter('div.borderwrap:last')
        .before('<br />');

    // Thread listing subheaders
    $('td.darkrow1').children('b:contains("Important Topics")')
        .parents('tr').remove();
    
    $('td.darkrow1').children('b:contains("Forum Topics")')
        .parents('tr').remove();

    // Pinned topics
    $('td.row1').children('div:contains("Important:")')
        .parents('tr').remove();

    // Topic title
    $('td.row1 > div a')
        .filter(function() { return this.id.match(/tid-link-\d+/); })
        .css({'text-decoration': 'none',
              'font-size': '12px'});

    // Topic subtitle
    $('div.desc > span')
        .filter(function() { return this.id.match(/tid-desc-\d+/); })
        .css({'color': '#888'});

    // Thread icons
    $('table.ipbtable tr:first-child > th:contains("Topic Title")')
        .prev().remove();

    $('table.ipbtable tr > td.row1:first-child')
        .filter(function() { return this.id.match(/tid-folder-\d+/); })
        .next().remove();

    // Line breaks
    $('script[src="jscripts/ipb_forum.js"]').next('br').remove();
    $('table.ipbtable').prev('br').remove();
});

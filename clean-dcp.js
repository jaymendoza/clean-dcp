$(function() {

    // Thread listing subheaders
    $('td.darkrow1').children('b:contains("Important Topics")')
        .parents('tr').remove();
    
    $('td.darkrow1').children('b:contains("Forum Topics")')
        .parents('tr').remove();

    // Pinned topics
    $('td.row1').children('div:contains("Important:")')
        .parents('tr').remove();

    // All topics
    $('td.row1 > div > span > a')
        .filter(function() { return this.id.match(/tid-link-\d+/); })
      .css('text-decoration', 'none');

    // Unread topics
/*    $('td.row1 > div > a > img')
        .filter(function() { return this.src.match(/newpost/); })
           .hide()
        .parent('a').next('span').children('a')
           .css('color', '#000');
*/

    // Topic subtitle
    $('div.desc > span')
        .filter(function() { return this.id.match(/tid-desc-\d+/); })
          .css({'color': '#888'});

});

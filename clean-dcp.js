$(function() {

    // Thread listing subheaders
    $('td.darkrow1').children('b:contains("Important Topics")')
        .parents('tr').remove();
    
    $('td.darkrow1').children('b:contains("Forum Topics")')
        .parents('tr').remove();

    // Pinned topics
    $('td.row1').children('div:contains("Important:")')
        .parents('tr').remove();

    // Topic title
//    $('td.row1 > div a')
  //      .filter(function() { return this.id.match(/tid-link-\d+/); })
    //    .css({'text-decoration': 'none',
      //        'font-size': '12px'});

    // Topic subtitle
    $('div.desc > span')
        .filter(function() { return this.id.match(/tid-desc-\d+/); })
        .css({'color': '#888'});

});

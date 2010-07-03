$(function() {

    // Thread listing subheaders
    $('td.darkrow1').children('b:contains("Important Topics")')
        .parents('tr').remove();
    
    $('td.darkrow1').children('b:contains("Forum Topics")')
        .parents('tr').remove();

    // Pinned topics
    $('td.row1').children('div:contains("Important:")')
        .parents('tr').remove();
});

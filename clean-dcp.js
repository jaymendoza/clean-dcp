$(function() {
    // Thread listing subheaders
    $('table.ipbtable td.darkrow1').children('b:contains("Important Topics")')
        .parents('tr').remove();
    
    $('table.ipbtable td.darkrow1').children('b:contains("Forum Topics")')
        .parents('tr').remove();

    // Pinned topics
    $('table.ipbtable td.row1').children('div:contains("Important:")')
        .parents('tr').remove();
});

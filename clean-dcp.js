// ==UserScript==
// @name           Clean DCP
// @namespace      http://jaymendoza.net
// @include        http://*.drumcorpsplanet.com/forums/*
// ==/UserScript==

$(function() {
    $('table:first').remove();
    $('div#userlinks').remove();
    $('p > ins').remove();

    $('div#logostrip')
        .parent('div.borderwrap')
        .remove();

    $('div#navstrip').css({'margin': '0', 'padding': '0'});

    $('div#fo_3')
        .insertAfter('div.borderwrap:last')
        .before('<br />');

    $('div#fc_3')
        .insertAfter('div.borderwrap:last')
        .before('<br />');

    $('td.darkrow1').children('b:contains("Important Topics")')
        .parents('tr').remove();
    
    $('td.darkrow1').children('b:contains("Forum Topics")')
        .parents('tr').remove();

    $('td.row1').children('div:contains("Important:")')
        .parents('tr').remove();

    $('td.row1 > div a')
        .filter(function() { return this.id.match(/tid-link-\d+/); })
        .css({'text-decoration': 'none',
              'font-size': '12px'});

    $('div.desc > span')
        .filter(function() { return this.id.match(/tid-desc-\d+/); })
        .css({'color': '#888'});

    $('th:contains("Topic Title")')
        .prev().remove();

    $('td')
        .filter(function() { return this.id.match(/tid-folder-\d+/); })
        .next().remove();

    $('script[src="jscripts/ipb_forum.js"]').next('br').remove();
    $('table.ipbtable').prev('br').remove();
});

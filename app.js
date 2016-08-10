'use strict';

var ticObj = {
    x: '"X.png"',
    o: '"O.png"'
}

var newObj = Object.create(ticObj);

$(document).ready(function () {

    $('div').click(function (event) {
        event.preventDefault(event);
        if ($(event.target).is('div')) {
            var html = '<img class="' + 'img"' + 'src = ' + newObj.x + '>';
            var id = 'div' + '.' + event.target.id;
            $(id).html(html);
        } else if ($(event.target).is('img')) {
            if (event.target.src) {
                if ((event.target.src).includes("X.png")) {
                    var html = '<img class="' + 'img"' + 'src = ' + newObj.o + '>';
                    var id = event.currentTarget;
                    $(id).html(html);
                } else if ((event.target.src).includes("O.png")) {
                    var html = '<img class="' + 'img"' + 'src = ' + newObj.x + '>';
                    var id = event.currentTarget;
                    $(id).html(html);
                }
            }
        }
    });
});

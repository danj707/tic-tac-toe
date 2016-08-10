'use strict';

var ticObj = {
    x: '"X.png"',
    o: '"O.png"'
}

var newObj = Object.create(ticObj);

$(document).ready(function () {


    $('div').on("click", "div,img", function (event) {
        event.preventDefault();

        if (event.target.src = "X.png") {
            var divID = $('img').parent("div").attr("id");
            alert(divID);
            var html = '<img class="' + 'img"' + 'src = ' + newObj.o + '>';
            divID = '"div.' + divID + '"';
            alert(event.target);
            //$(event.target).parent('div').html(html);

            //alert("return a O in DIV: " + event.target.src);
            //alert(html);
        } else if (event.target.src = "O.png") {
            var html = '<img class="' + 'img"' + 'src = ' + newObj.x + '>';
            $(this).html(html);
            alert("return an X");
        } else {
            var html = '<img src="">';
            $(this).html(html);
            alert("hide the image");
        }

    });

    //    $('div').click(function (event) {
    //        event.preventDefault();
    //
    //        //clicking should cycle through X, O and display:none
    //        var html = '<img class="' + 'img"' + 'src = ' + newObj.x + '>';
    //        //var id = 'div' + '.' + event.target.id;
    //        $(this).html(html);
    //    });

});

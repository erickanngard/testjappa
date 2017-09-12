$(document).ready(function() {
    var bild2 = $("#bild2").attr("src");
    $("#bild1").attr("src",bild2);
});

$(document).ready(function() {
    $("#bild1").css({
        "border-color": "black",
        "border-width": "1px",
        "border-style": "solid"
    });
});
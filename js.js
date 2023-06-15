$(function(){
$(".hour").knob({
    "min" : 0,
    "max" : 24,
    "width" : 300,
    "height" : 300,
    "fgColor" : "#fcf403",
    "displayInput" : false,
    "thickness" : 0.20,
    "bgColor" : "#CDCDCD",
});



$(".minute").knob({
    "min" : 0,
    "max" : 60,
    "width" : 200,
    "height" : 200,
    "fgColor" : "#0388fc",
    "displayInput" : false,
    "thickness" : 0.30,
    "bgColor" : "#CDCDCD",
});



$(".second").knob({
    "min" : 0,
    "max" : 60,
    "width" : 100,
    "height" : 100,
    "fgColor" : "#94fc03",
    "displayInput" : false,
    "thickness" : 0.50,
    "bgColor" : "#CDCDCD",
});



});

function clock(){
    var $s = $(".second"),
     $m = $(".minute"),
     $h = $(".hour");


     var d = new Date(),
     s = d.getSeconds(),
     m = d.getMinutes(),
     h = d.getHours();


     $s.val(s).trigger("change");
     $m.val(m).trigger("change");
     $h.val(h).trigger("change");

     setTimeout("clock()", 1000);
}

clock()
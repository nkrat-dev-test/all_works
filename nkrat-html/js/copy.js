$("#to-1").html($("#from-1").html());



$("#to-about-title").html($("#from-about-title").html());
$("#to-about-text").html($("#from-about-text").html());
$("#to-wwd-title").html($("#from-wwd-title").html());


$("#in-app-title-1").html($("#out-app-title-1").html());
$("#in-app-title-2").html($("#out-app-title-2").html());
$("#in-app-desc-1").html($("#out-app-desc-1").html());
$("#in-app-desc-2").html($("#out-app-desc-2").html());

var a = 0;
while (a < 10) {
  $("#to-title-"+a).html($("#from-title-"+a).html());
  $("#to-cont-"+a).html($("#from-cont-"+a).html());
  a++;
}




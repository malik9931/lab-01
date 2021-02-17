"use strict";
let colorList = [
  "white",
  "green",
  "olive",
  "navy",
  "teal",
  "aquamarine",
  "purple",
  "gray",
];
$(document).ready(function () {
  // This will fire when document is ready:
  $(window).resize(function () {
    // This will fire each time the window is resized:
    if ($(window).width() >= 768) {
      // if larger or equal
      $("div").show();
    } else if ($(window).width() <= 768 && $(window).width() >= 482) {
      // This is for Tablet
      for (let i = 0; i < 9; i++) {
        $("div:eq(" + i + ")").attr(
          "style",
          "background-color:" + colorList[i]
        );
      }
    } else if ($(window).width() <= 481) {
      // This is for phones
      for (let i = 0; i < 9; i++) {
        $("div:eq(" + i + ")").attr(
          "style",
          "background-color:" + get_rand_color()
        );
      }
    }
  });
});

function get_rand_color() {
  var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
  
}


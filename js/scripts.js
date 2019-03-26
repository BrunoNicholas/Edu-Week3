
/*
$(document).ready(function() {
  $("button#green").click(function() {
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").addClass("red-background");
  });
});
*/

/*
$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
*/
/*
$(document).ready(function() {
  $("button#green").click(function() {
    $("body").css("background-color", "green");
  });

  $("button#yellow").click(function() {
  	$("body").css("background-color", "yellow");
  });

  $("button#red").click(function() {
  	$("body").css("background-color", "red");
  });
});
*/

// ........... colors.js

/*
$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul").prepend("<li>Hello!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye!</li>");
  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
  });
});
*/


/*
$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });

  $('li').css('background-color', 'green');
});
*/
$("ul#user").children("li").first().click(function() {
  $(this).remove();
});
$("ul#webpage").children("li").first().click(function() {
  $(this).remove();
});


//$(document).ready(function() {
//  $(".clickable").click(function() {
//    $("#walrus-showing").slideToggle(3000);
//    $("#walrus-hidden").slideToggle(3000);
//  });
//});



let plays = 1;

$(".submit").click(function() {

  $(".quiz").hide();
  
  let energy = $(".input-energy").val();
  let social = $(".input-social").val();

  if (energy <= 5 && social === "By yourself") {
    $(".result").text("You are Hobie Brown!");
    $(".result_hobie").show();
  }

  if (energy <= 5 && social === "With friends") {
    $(".result").text("You are Miles Morales!");
    $(".result_miles").show();
  }

  if (energy >= 6 && social === "By yourself") {
    $(".result").text("You are Gwen Stacy!");
    $(".result_gwen").show();
  }

  if (energy >= 6 && social === "With friends") {
    $(".result").text("You are Pavitr Prabakar!");
    $(".result_pav").show();
  }
    
    
    $(".count").text("You have taken this quiz " + plays + " times");
    $(".count").show();
    
    $(".reset").show();

});

$(".reset").click(function() {
    $(".count").hide();
    $(".reset").hide();
    $(".result_hobie").hide();
    $(".result_miles").hide();
    $(".result_gwen").hide();
    $(".result_pav").hide();
    $(".quiz").show();
    plays++;
});
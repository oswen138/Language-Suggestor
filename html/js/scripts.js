//function to calculate the result of the survey form
$(document).ready(function() {
    $("form#form").submit(function(event) {
    event.preventDefault();

    const form1 = parseInt($("select#form1").val());
    const form2 = parseInt($("select#form2").val());
    const form3 = parseInt($("select#form3").val());
    const form4 = parseInt($("select#form4").val());
    const form5 = parseInt($("select#form5").val());
    const form6 = parseInt($("select#form6").val());

    if ((form1 === 1) && (form2 === 1) && (form3 === 1) && (form4 === 1) && (form5 === 1) && (form6 === 1)) {
      $("#img5").hide()
      $("#img4").hide()
      $("#img1").hide()
      $("#img2").hide()
      $("#img3").show();
    } else if ((form1 === 2) && (form2 === 2) && (form3 === 2) && (form4 === 2) && (form5 === 2) && (form6 === 2)) {
      $("#img5").hide()
      $("#img4").hide()
      $("#img3").hide()
      $("#img1").hide()
      $("#img2").show();
    } else if ((form1 === 3) && (form2 === 3) && (form3 === 3) && (form4 === 3 && (form5 === 3) && (form6 === 3)) ){
      $("#img1").hide()
      $("#img2").hide()
      $("#img3").hide()
      $("#img5").hide()
      $("#img4").show();
    } else if ((form1 === 3) && (form2 === 1) && (form3 === 1) && (form4 === 2 && (form5 === 3) && (form6 === 2)) ){
      $("#img4").hide()
      $("#img5").hide()
      $("#img3").hide()
      $("#img2").hide()
      $("#img1").show();
    } else if ((form1 === 1) && (form2 === 2) && (form3 === 3) && (form4 === 1 && (form5 === 2) && (form6 === 3)) ){
      $("#img5").hide()
      $("#img4").hide()
      $("#img2").hide()
      $("#img3").hide()
      $("#img1").show();
    } else if ((form1 === 2) && (form2 === 3) && (form3 === 1) && (form4 === 3 && (form5 === 3) && (form6 === 2)) ){
      $("#img1").hide()
      $("#img2").hide()
      $("#img3").hide()
      $("#img5").hide()
      $("#img4").show();
    } else if ((form1 === 3) && (form2 === 3) && (form3 === 2) && (form4 === 2 && (form5 === 1) && (form6 === 1)) ){
      $("#img5").hide()
      $("#img1").hide()
      $("#img2").hide()
      $("#img3").hide()
      $("#img4").show();
    } else if ((form1 === 2) && (form2 === 1) && (form3 === 3) && (form4 === 1 && (form5 === 3) && (form6 === 3)) ){
      $("#img1").hide()
      $("#img5").hide()
      $("#img4").hide()
      $("#img3").hide()
      $("#img2").show();
    } else {
      $("#img5").hide()
      $("#img5").show();
    }

  });
});


   
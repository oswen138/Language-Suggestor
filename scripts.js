//function to calculate the result of the survey form
$(document).ready(function () {
  $("form").submit(function () {

  function result() {
    //initialize variables for each answer
    var d1
    var d2
    var d3
    var sys1
    var sys2
    var sys3
    var c1
    var c2
    var c3
    var l1
    var l2
    var l3
    var s1
    var s2
    var s3
    var e1
    var e2
    var e3
    var red
    var orange 
    var blue

    //list of selectors on the page
    var choices = document.getElementsByName('')

















    event.preventDefault();
    const donut = $("input#donut").val();
    const system = $("input#system").val();
    const classes = $("input#classes").val();
    const libraries = $("input#classes").val();
    const speed = $("input#speed").val();
    const error = $("input#error").val();
    const color = $("input:radio[name=color]:checked").val();
   
    $('input[type=radio][name="color"]').change(function () {
      const color = $("input[type=radio][name=color]:checked").val();
      if (color === "Green") {
        document.getElementsByClassName("this-is-a-class").show();
        $('.elephant').hide();
        $('.lion').hide();
      } else if (animal === "Elephant") {
        $('.giraffe').hide();
        $('.elephant').show();
        $('.lion').hide();
      } else {
        $('.giraffe').hide();
        $('.elephant').hide();
        $('.lion').show();
        //$('.hide').not('.lion').hide();
      }
    });
  });

    parse int

  });
});
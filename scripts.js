$(document).ready(function () {
  $("form").submit(function () {
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
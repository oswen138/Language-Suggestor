//function to calculate the result of the survey form
$(document).ready(function() {
  $("form").submit(function () {

    const donut = parseInt($("#donut").val());
    const system = parseInt($("#system").val());
    const syntax = parseInt($("#syntax").val());
    const library = parseInt($("#library").val());
    const speed = parseInt($("#speed").val());
    const error = parseInt($("#error").val());
    const color = parseInt($("input:radio[name=color]:checked").val());

    if (donut === d3)







    if (donut == "d1" + system == "sys1" && syntax == "c1" && library == "l1" && speed == "s1" && error === "e" && color == "blue") {
      $('#answer').text("Python");
      $("#img1").show();;
    } else if (donut == 'd2' + system == 'sys2' + syntax == 'c2' + library ==='l2' + speed === 's2' + error === 'e2' + color === 'blue') {
      $('#answer').text("Python");
      $("#img3").show();;
    } else {
    $('#answer').text("animal");
    $("#img2").show();;
    }

    event.preventDefault();
  });
});


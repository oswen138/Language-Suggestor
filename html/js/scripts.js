//function to calculate the result of the survey form
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    const donut = parseInt($("input#donut").val());
    const system = parseInt($("input#system").val());
    const syntax = parseInt($("input#syntax").val());
    const library = parseInt($("input#library").val());
    const speed = parseInt($("input#speed").val());
    const error = parseInt($("input#error").val());
    const color = parseInt($("input:radio[name=color]:checked").val());

    if (donut === "1" + system === "1" + syntax === "1" + library === "1" + speed === "1" + error === "1" + color === "blue" <=1) {
      $('#answer').text("Go");
      $("#img3").show();
      }
      else if (donut === "2" & system === "2" + syntax === "2" + library === "2" + speed === "2" + error === "2" + color === "red") {
      $('#answer').text("Ruby");
      $("#img2").show();
      }
      else if (donut === "3" + system === "3" + syntax === "3" + library === "3" + speed === "3" + error === "3" + color === "orange") {
        $('#answer').text("Python");
        $("#img2").show();
      }
      else if (donut === "3" || system === "2" || syntax === "1" + library === "1"|| speed === "2" || error === "3" || color === "red") {
        $('#answer').text("Swift");
        $("#img4").show();
      }
      else {
      $('#answer').text("none suit you");
      $("#img5").show();
      }
  });
});


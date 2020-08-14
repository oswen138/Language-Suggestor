//function to calculate the result of the survey form
$(document).ready(function() {
  $("form").submit(function () {

    const donut = parseInt($("donut").val());
    const system = parseInt($("#system").val());
    const syntax = parseInt($("#syntax").val());
    const library = parseInt($("#library").val());
    const speed = parseInt($("#speed").val());
    const errpr = parseInt($("#error").val());
    const color = parseInt($("input:radio[name=color]:checked").val());

    if (donut === "1" + system === "1" + syntax === "1" + library === "1" + speed === "1" + error === "1" + color === "blue" <=1) {
      $('#answer').text("Python");
      $("#img1").show();
    }
      else if (donut === "2" + system === "2" + syntax === "2" + library === "2" + speed === "2" + error === "2" + color === "blue" >=3) {
        $('#answer').text("animal");
        $("#img2").show();
      }
      else {
        $('#answer').text("none suit you");
      }
    event.preventDefault();
  });
});


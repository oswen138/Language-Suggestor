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

    if (donut === 'd1' && system === 'sys1' && syntax === 'c1' && library ==='l1' && speed === 's1' && error === 'e1' && color === 'red') {
      $('#answer').text("Python");
      $('#picture').attr('src', "https://i.insider.com/5ab53db4095b111a068b45b6?width=1100&format=jpeg&auto=webp");

    } else {
      $('#answer').text("Ruby");
      document.getElementById('#python');
    }

    event.preventDefault();
  });
});


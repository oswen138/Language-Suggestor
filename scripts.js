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
   
    if (color === 'blue' || food === 'hotdog') {
      //alert('in blue');

      $('#answer').text("Chandler");
      $('#friendpicture').attr('src', "css/img");
    }
    else if (color === 'red' && food === 'salad') {
      //alert('in red');
      $('#answer').text("Phoebe");
      $('#friendpicture').attr('src', "https://i.insider.com/5ab53db4095b111a068b45b6?width=1100&format=jpeg&auto=webp");
    }
    else if (color === 'yellow' || food === 'turkeysandwich') {
      // alert('in yellow');
      $('#answer').text("Ross");
      $('#friendpicture').attr('src', "https://vignette.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg/revision/latest/top-crop/width/360/height/360?cb=20180424154547");
    }
    else {
      //alert('in else');
      $('#answer').text("Monica");
      $('#friendpicture').attr('src', "https://upload.wikimedia.org/wikipedia/en/d/d0/Courteney_Cox_as_Monica_Geller.jpg");
    }


    const flavor = $("input:radio[name=flavor]:checked").val();
    
    parse int

  });
});
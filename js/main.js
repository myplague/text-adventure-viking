$("#selection button").click(function(){
  var y = $("input[name='radio-valor']:checked").val();
  if (y == 0){
    window.location = "frankiafalse.html"
  }
  if (y == 1){
    window.location = "GranBretanafalse.html"
  }
  if (y == 2){
    window.location = "vikingosunidos.html"
  }
  if (y == 3){
    window.location = "civilwar.html"
      }
})

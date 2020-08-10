function Snackbar(str) {
  document.body.innerHTML += '<div id="snackbar">'+str+'</div>';
  var x = document.getElementById("snackbar");
  x.className = "show";

  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

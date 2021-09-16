var images = ["aaji.jpeg", "baba.jpeg", "aai.jpeg", "me.jpeg", "janu (2).jpeg"];

var i = 0;
function nextslide() {
  if (i == 5) {
    i = 0;
  }

  document.getElementById("album").src = images[i];
  i++;
}

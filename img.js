let date = new Date();
let hours = date.getHours();
let wakeUp = document.getElementById("wakeUp");
let lnch = document.getElementById("lnchtime");
let n = document.getElementById("n");
let sleep = document.getElementById("sleep");

if (parseInt(wakeUp.value) === hours) {
  document.getElementById("settime").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
  document.getElementById("images").src = "/IMG/Component 30 – 1.jpg";
}
if (parseInt(lnchtime.value) === hours) {
  document.getElementById("settime").innerText = "LET'S HAVE SOME LUNCH !!";
  document.getElementById("images").src = "IMG/2nd page.png";
}
if (parseInt(n.value) === hours) {
  document.getElementById("settime").innerText = "GET SOME TEA..!STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  document.getElementById("images").src = "./IMG/lunch cup.png";
}
if (parseInt(sleep.value)===hours) {
  document.getElementById("settime").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
  document.getElementById("images").src = "./IMG/goodnight.png";

}
let hh = document.getElementById("hrs");
let mm = document.getElementById("mins");
let ss = document.getElementById("secs");
let AMPM = document.querySelector(".sub7");

let wakeup = document.querySelector(".msg_ChangeWith_SetAlarm");
let message = document.querySelector(".msg_ChangeWith_realTime");

function theTimer() {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  hh.innerHTML = hours;
  mm.innerHTML = minutes;
  ss.innerHTML = seconds;

  // To change content below the clock
  if (hours >= 4 && hours < 10) {
    message.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
  } else if (hours >= 10 && hours < 16) {
    message.innerHTML = " LET'S HAVE SOME LUNCH !!";
  } else if (hours >= 16 && hours < 20) {
    message.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  } else {
    message.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
  }

  // to make clock in 12 hrs format
  if (hh.innerHTML > 12) {
    hh.innerHTML = hh.innerHTML - 12;
    AMPM.innerHTML = "PM";
  }
}
setInterval(() => {
  theTimer();
}, 1000);

but1 = document.querySelector(".setAlarm");

but1.addEventListener("click", () => {
  let d = new Date();
  let hours = d.getHours();

  let img = document.querySelector("#theImage");

  let night = document.getElementById("night");
  let ntext = night.options[night.selectedIndex].textContent;
  let nPrint = document.querySelector("#nighttime");
  nPrint.textContent = ntext;

  let nap = document.getElementById("nap");
  let naptext = nap.options[nap.selectedIndex].textContent;
  let napPrint = document.querySelector("#naptime");
  napPrint.textContent = naptext;

  let lunch = document.getElementById("lunch");
  let ltext = lunch.options[lunch.selectedIndex].textContent;
  let lPrint = document.querySelector("#lunchtime");
  lPrint.textContent = ltext;

  let morn = document.getElementById("morning");
  let mtext = morn.options[morn.selectedIndex].textContent;
  let mPrint = document.querySelector("#waketime");
  mPrint.textContent = mtext;

  // to change the text and image based on selected option

  if (parseInt(morn.value) === hours) {
    wakeup.innerHTML = "GOOD MORNING!! WAKE UP !!";
    img.src = "./Images/Component 30 – 1.png";
  } else if (parseInt(lunch.value) === hours) {
    wakeup.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    img.src = "./Images/Component 31 – 1.png";
  } else if (parseInt(nap.value) === hours) {
    wakeup.innerHTML = "GOOD EVENING !!";
    img.src = "./Images/lunch_image.png";
  } else if (parseInt(night.value) === hours) {
    wakeup.innerHTML = "GOOD NIGHT !!";
    img.src = "./Images/Component 32 – 1.png";
    console.log(wakeup.innerHTML);
  }
});

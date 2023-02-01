function ClockStart(){
  var dateTime=new Date();
  var hrs=dateTime.getHours();
  var mins=dateTime.getMinutes();
  var sec=dateTime.getSeconds();

  if(hrs>=12){
      session.innerText = 'PM';
  }
  else{
      session.innerText = 'AM';
  }
  document.getElementById('hours').innerText = hrs;
  document.getElementById('minutes').innerText = mins;
  document.getElementById('seconds').innerText = sec; 
  
  
//   // for set alarm for party time.
   let button =document.getElementById("button");
   button.addEventListener("mouseover" , function(){
      this.innerText="Party Time";
   })
   button.addEventListener("mouseout" , function(){
      this.innerText="Set Alarm";
   })

  //for Greeting
let greeting=document.getElementById("greeting")
if(00<hrs && hrs<12){
 greeting.innerText="GOOD MORNING!! WAKE UP !!"
}
if(hrs>=12 && hrs<16){
  greeting.innerText="GOOD AFTERNOON!!"
  }
if(hrs>=16 && hrs<20){
greeting.innerText="GOOD EVENING!!"
}
if(hrs >= 20 && hrs < 24 ){
  greeting.innerText="GOOD NIGHT!!"  
}
 
}
setInterval(ClockStart,1000); 
//    //for  
 button.addEventListener("click",function(){
    let date = new Date();
    let hours = date.getHours();
  let wakeUp = document.getElementById("wakeUp");
  let lnch = document.getElementById("lnchtime");
  let n = document.getElementById("n");
  let sleep = document.getElementById("sleep");
  // D:\prepbyte classes\project\project no 3\IMG\Component1.jpg
    if (parseInt(wakeUp.value) === hours) {
      document.getElementById("settime").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
      document.getElementById("images").style.backgroundImage = "url('./IMG/Component1.jpg')";
    }
    if (parseInt(lnchtime.value) === hours) {
      document.getElementById("settime").innerText = "LET'S HAVE SOME LUNCH !!";
      document.getElementById("images").style.backgroundImage = "url('./IMG/Component2.jpg')";
    }
    if (parseInt(n.value) === hours) {
      document.getElementById("settime").innerText = "GET SOME TEA..!STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
      document.getElementById("images").style.backgroundImage = "url('./IMG/lunch.jpg')";
    }
    if (parseInt(sleep.value)===hours) {
      document.getElementById("settime").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
      document.getElementById("images").style.backgroundImage = "url('./IMG/Component3.jpg')";
    }
    let timing = document.getElementsByClassName("timing");
    timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
    timing[1].innerText = lnchtime.options[lnch.selectedIndex].text;
    timing[2].innerText = n.options[n.selectedIndex].text;
    timing[3].innerText = sleep.options[sleep.selectedIndex].text;
  })
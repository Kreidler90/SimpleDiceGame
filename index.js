function throwDice(){
  var num = Math.ceil(Math.random()*6);
  console.info( num );
  return num;
}

//check for Navigation Timing API support
if (window.performance) {
  console.info("window.performance works fine on this browser");
}
  if (performance.navigation.type == 1) {
    console.info( "This page is reloaded" );
    var dice1 = throwDice();
    console.info( "images/dice"+dice1.toString()+".png" );

    document.getElementsByClassName("img1")[0].src = "images/dice"+dice1.toString()+".png";
    var dice2 = throwDice();
    document.getElementsByClassName("img2")[0].src = "images/dice"+dice2.toString()+".png";

    if(dice1 < dice2)
    {
      console.info( "P2 wins" );
      document.getElementById("winner").innerText = "P2 wins";
    }
    if(dice1 > dice2)
    {
      console.info( "P1 wins" );
      document.getElementById("winner").innerText = "P1 wins";

    }
    if(dice1 === dice2)
    {
      console.info( "P1+P2 Win" );
      document.getElementById("winner").innerText = "Draw";

    }




  } else {
    console.info( "This page is not reloaded");
  }

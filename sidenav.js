function openNav() {

  if(document.getElementById("mySidenav").style.width == "0px"){
    console.log(document.getElementById("mySidenav").style.width + "test")
    console.log("true");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  }
  else {
    console.log(document.getElementById("mySidenav").style.width + "testststs");
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";

  }
}

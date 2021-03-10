function openNav() {

  if(document.getElementById("mySidenav").style.width == "250px"){
    console.log(document.getElementById("mySidenav").style.width + "test")
    console.log("true");
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";

  }
  else {
    console.log(document.getElementById("mySidenav").style.width + "testststs");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "150px";

  }
}

function extendfunc(){
  if(document.getElementById("block1"))
}

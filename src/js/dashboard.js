function openNav() {
    if(document.getElementById("mySidenav").style.width == "0px"){
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("mySidenav").style.paddingLeft = "35px";
    }
    else {
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("main").style.marginLeft = "0px";
      document.getElementById("mySidenav").style.paddingLeft = "0px";
    }
  }
  
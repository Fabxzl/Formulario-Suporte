var signin_page = document.querySelector(".login");
var left = document.querySelector(".left");
var btn = document.querySelector("#btn-submit");
var btn2 = document.querySelector("#btn-submit-cadastro");
var btn3= document.querySelector("#button3");
var ambulance = document.querySelector(".fa-ambulance");
var descrip = document.querySelector("#desc");
var mail = document.querySelector("#mail");
var globe = document.querySelector(".fa-globe");


function signup(){
    signin_page.classList.add("active");
}
  function back(){
    signin_page.classList.remove("active");
}
  function green(){
    left.style.background = "#28B463";
    btn.style.background = "#28B463";
    btn2.style.background = "#28B463";
    btn3.style.background = "#28B463";
    ambulance.style.color = "#28B463";
    descrip.style.color = "#F4F6F6";
    mail.style.color = "#F4F6F6";
    globe.style.color = "#F4F6F6";
}

 function red(){
    left.style.background = "#EC7063";
    btn.style.background = "#EC7063";
    btn2.style.background = "#EC7063";
    btn3.style.background = "#EC7063";
    ambulance.style.color = "#EC7063";
    descrip.style.color = "#F4F6F6";
    mail.style.color = "#F4F6F6";
    globe.style.color = "#F4F6F6";
}

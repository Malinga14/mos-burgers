
var password;

document.getElementById("adminLogIn").onclick = function(){

    password = document.getElementById("password").value;

    if(password=="Mp123"){
        window.location.href="admin_dashboard.html";
    }

}

document.getElementById("cashierLogIn").onclick = function(){

    password = document.getElementById("password").value;

    if(password=="Mp123"){
        window.location.href="cashier_dashboard.html";
    }

}

document.getElementById("btnHome").onclick = function(){

        window.location.href="index.html";

}
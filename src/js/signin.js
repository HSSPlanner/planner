function eraseCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

$(document).ready(function () {
    setCognitoLink();
    verifyUser();
});

function setCognitoLink() {
    var url = 'https://plannerapp.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=61ggq8mghu85ej5gv737u258pu&redirect_uri='+'http://localhost/hssplanner/Planner/dashboard.html';
    if(document.getElementById("signInButton")){
        document.getElementById("signInButton").href = url;
    }
}

function ajaxGet(url, callBackFunction) {
    return $.ajax({
        url: url,
        type: "GET",
        dataType: "JSON",
        success: function (data) {
            callBackFunction(data);
        }
    });
}

function verifyToken(data) {
    if (data.statusCode != undefined && data.statusCode == 200) {
        var body = JSON.parse(data.body);
        setCookie("email", body.email, (1/24))
    }
    else{

        eraseCookie("id_token")
        eraseCookie("email");
    }
}

function verifyUser() {
    if (getCookie("id_token") == undefined) {
        console.log("new")
        var id_token = new URLSearchParams(window.location.hash.substring(1)).get('id_token');
        if (id_token != null) {
            const url = 'https://wh7cs7r1b6.execute-api.us-east-1.amazonaws.com/live/test?token=' + id_token;
            console.log(url)
            ajaxGet(url, verifyToken);
            setCookie("id_token", id_token, (1/24));
        }
    }
    else {
        console.log("cookie")
        const url = 'https://wh7cs7r1b6.execute-api.us-east-1.amazonaws.com/live/test?token=' + getCookie("id_token");
        console.log(url)
        ajaxGet(url,verifyToken);
    }
}

function logOut(){
    eraseCookie("id_token")
    eraseCookie("email");
    location.href="http://localhost/hssplanner/Planner/index.html"
}



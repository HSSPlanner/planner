function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    // console.log(id_token)
    var url = "https://oauth2.googleapis.com/tokeninfo?id_token="+id_token
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        var object = JSON.parse(xhr.responseText);
        console.log(object)
    };
    xhr.send('idtoken=' + id_token);



}
function test(){
    console.log("poggies")
}
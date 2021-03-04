var button_forgot = document.getElementById("forgot");
var button_login = document.getElementById("login");
button_forgot.addEventListener("click", hide_signIn);
button_login.addEventListener("click", hide_signUp);


function hide_signIn(event) {
    event.preventDefault();
    document.getElementById("id_signUp").style.left = "0%";
    document.getElementById("id_signIn").style.left = "-100%";
}
function hide_signUp(e) {
    event.preventDefault();
    document.getElementById("id_signUp").style.left = "100%";
    document.getElementById("id_signIn").style.left = "0%";
}
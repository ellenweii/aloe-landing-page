const redirect_button = document.getElementById("redirect-btn");

redirect_button.addEventListener("click", handle_redirect);

function handle_redirect() {
  window.location.href = "email.html";
}

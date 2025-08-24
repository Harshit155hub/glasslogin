document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");
  
  if (username === "admin" && password === "1234") {
    message.textContent = "Login successful!";
    message.style.color = "lightgreen";
  } else {
    message.textContent = "Invalid username or password.";
    message.style.color = "red";
  }
});
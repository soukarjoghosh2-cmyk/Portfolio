function toggleTheme() {
  document.body.classList.toggle("dark");
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg");

  if (name === "" || email === "") {
    msg.innerHTML = "Please fill all fields!";
    msg.style.color = "red";
    return false;
  }

  msg.innerHTML = "Message sent successfully!";
  msg.style.color = "green";
  return false;
}

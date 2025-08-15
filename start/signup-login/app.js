function signup() {
  var firstName = document.getElementById("fName").value.trim();
  var lastName = document.getElementById("lName").value.trim();
  var age = document.getElementById("age").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();

  if (!firstName || !lastName || !age || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  var stdData = {
    firstName,
    lastName,
    age,
    email,
    password,
  };

  let oldData = JSON.parse(localStorage.getItem("data")) || [];
  oldData.push(stdData);
  localStorage.setItem("data", JSON.stringify(oldData));
  location.href = "login.html";
}


function login() {
  var loginEmail = document.getElementById('loginEmail').value.trim();
  var loginPassword = document.getElementById('loginPassword').value.trim();

  var getData = JSON.parse(localStorage.getItem('data')) || [];

  for (var i = 0; i < getData.length; i++) {
    if (getData[i].email === loginEmail && getData[i].password === loginPassword) {
      console.log('Login successful!');
      window.location.href = "home.html";
      return;
    }
  }

  alert("Invalid email or password.");
}

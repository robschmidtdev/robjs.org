// Form.js

export const submit = () => {
  // Get the values of the email and password inputs
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("pwd")

  const email = emailInput.value
  const password = passwordInput.value

  // make f.e. an API call to perform a login
  console.log("Email:", email)
  console.log("Password:", password)

  // Clear the input fields
  emailInput.value = ""
  passwordInput.value = ""

  emailInput.blur();
  passwordInput.blur();
}

export const Form = () => {
    return `
      <div class="Form">
        <div class="mb-3 mt-3">
          <label for="email" class="form-label text-dark">Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label text-dark">Password:</label>
          <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
        </div>
        <button class="btn btn-primary" onclick="example4.Form.submit()">Login</button> <!-- used here -->
      </div>
    `
};
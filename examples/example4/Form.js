// Form.js

export const submit = () => {
  const email = document.getElementById("email").value
  const password = document.getElementById("pwd").value

  // make an api call and perform a login
  console.log("Email:", email)
  console.log("Password:", password)
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
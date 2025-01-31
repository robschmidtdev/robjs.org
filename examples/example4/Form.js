// Form.js

export const post = () => {
  // Get the values of the name and message inputs
  const nameInput = document.getElementById("name")
  const name = nameInput.value
  const messageInput = document.getElementById("message")
  const message = messageInput.value

  // make f.e. an API call to perform a login
  alert('Name: ' + name + ', Message: ' + message)

  // Clear the input fields
  nameInput.value = ""
  nameInput.blur()
  messageInput.value = ""
  messageInput.blur()
}

export const Form = (id) => {
    return `
      <div id=${id}>
        <div class="mb-3 mt-3">
          <input type="text" class="form-control" id="name" placeholder="Enter name">
        </div>
        <div class="mb-3">
          <textarea class="form-control" rows="2" id="message" placeholder="Enter your message"></textarea>
        </div>
        <button class="btn btn-primary" onclick="example4.Form.post()">Post</button> <!-- used here -->
      </div>
    `
};
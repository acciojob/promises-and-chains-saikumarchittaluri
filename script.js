//your JS code here. If required.
const userForm = document.getElementById("userForm");

// Function to simulate asynchronous processing
function processUser(age, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // Simulating a 4-second delay
  });
}

// Event listener for form submission
userForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");

  const age = parseInt(ageInput.value, 10);
  const name = nameInput.value;

  // Check if inputs are not empty
  if (!age || !name) {
    alert("Both age and name are required.");
    return;
  }

  processUser(age, name)
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
  
  // Clear form inputs after submission
  ageInput.value = "";
  nameInput.value = "";
});

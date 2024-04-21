document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(username, password)
    .then ((userCredential) => {
        var user = userCredential.user;
        alert('Login Successful');
    })

    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
});
document.getElementById("predictionForm")
.addEventListener("submit", function (event) {
  event.preventDefault();

  var fileInput = document.getElementById("input");
  if (fileInput.files.length === 0) {
    alert("Please upload an image file.");
    return;
  }

  // getting the uploaded image file
  var file = fileInput.files[0];

  // creating a formdata object and appending the file to it
  var formData = new FormData();
  formData.append("file", file);

  // fetching the data from google gemini url
  fetch(
    "https://de06-2607-f010-2a7-301f-4542-3ab5-c94f-7eb.ngrok-free.app/",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        alert('File uploaded successfully!');
      var predictionResultContainer =
        document.getElementById("predictionResult");
      predictionResultContainer.innerHTML = "";

      // displaying the prediction result container
      document.getElementById("predictionResult").style.display =
        "block";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occured while fetching data.");
    });
});

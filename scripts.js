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
document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // 1 user input
    var input1 = document.getElementById('input1').value;
    // can add more variables for additional input fields

    // sending data to ML model ?
    var predictionResult = predict(input1);

    // display the result from model
    document.getElementById('predictionResult').innerHTML = '<p>Prediction Result: ' + predictionResult + '</p>';
});

// predict function for model
function predict(input1) {
    // add call to ML model with the user inputted data and get the prediction result
    // replace with model's logic
    return prediction;
}
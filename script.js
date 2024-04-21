function submitForm(event) {
    event.preventDefault();
    console.log(event);
  
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];
  
    const formData = new FormData();
    formData.append("file", file);
  
    fetch("https://e3c4-2607-f010-2a7-301f-4542-3ab5-c94f-7eb.ngrok-free.app/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occured while fetching data.");
      });
  }
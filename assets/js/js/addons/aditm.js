document.getElementById("addItem-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    var inputImage = document.getElementById("inputImage");
    var hiddenImageData = document.getElementById("hiddenImageData");

    var file = inputImage.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // Encode the image to Base64 and assign it to the hidden input
            hiddenImageData.value = e.target.result;

            // Now you can submit the form
            document.getElementById("addItem-form").submit();
        };
        reader.readAsDataURL(file); // Read the selected file as data URL
    }
});

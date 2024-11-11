// Get modal elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeBtn = document.getElementsByClassName("close")[0];
var nextBtn = document.querySelector('.next-modal');
var prevBtn = document.querySelector('.prev-modal');

// Attach click event to all images with class 'open-modal'
var images = document.querySelectorAll('.open-modal');
var imageArray = Array.from(images);
var currentIndex = 0;

// Function to open the modal and display the image
function openModal(index) {
    modal.style.display = "block";
    modalImg.src = imageArray[index].href; // Set image source for the modal
    currentIndex = index;
}

// Close the modal when the user clicks the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the image
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Event listeners for next/previous buttons
nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % imageArray.length; // Loop to first image if at the end
    openModal(currentIndex);
}

prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length; // Loop to last image if at the start
    openModal(currentIndex);
}

// Attach click event to each image to open the modal
images.forEach(function(image, index) {
    image.onclick = function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        openModal(index); // Open the modal at the clicked image's index
    };
});




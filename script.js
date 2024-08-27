$(document).ready(function(){
    // Hide images initially
    $('.animated-image').hide();
    
    // Function to animate images
    function animateImages() {
      $('.animated-image').each(function(index) {
        $(this).delay(200 * index).fadeIn(500); // Adjust delay and duration as needed
      });
    }
    
    // Call the animation function when the page loads
    animateImages();
  });
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  $("#submitContact").click(function() {
    event.preventDefault();
    if (!$("#inputName").val()) {
      $("#inputName").attr("placeholder", "Hey, Name is Required! :D");
      return;
    }
    if (!$("#inputComment").val()) {
      $("#inputComment").attr("placeholder", "Hey, Comment is Required! :D");
      return;
    }

    var contactData = $("#sendEmail").serialize();
    $.post({
        url: "send-mail.php",
        data: contactData,
        success: function(data) {
            $("#mail-status").html(data);
        }
    });
  });
});

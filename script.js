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

  // Get form values - client side test
  $("#submitContact").click(function() {
    var name = $("#inputName").val();
    var comment = $("#inputComment").val();
    var email = $("#inputEmail").val();

    // Check email's validity and blank comment
    if (email.search("@") < 0 || $("#inputComment").val() == "") {
      alert("Please enter proper email and/or comment.");
      return;
    }

    // Mask email address from spam
    var myUserName = "nam.dinhviet";
    var myDomain = "gmail.com";
    $("#sendEmail").attr("action", "mailto:" + myUserName + "@" + myDomain);
    // Remove it from the HTML document
    // $("#sendEmail").removeAttr("action");
  });
});
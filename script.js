//  Email validation
function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Submission function
function validate() {
  let email = $("#email").val();

// Change value of 'submit' input
// Log form data into console
  if (validateEmail(email)) {
    $("#validate").val("Submitting...");
    console.log(document.querySelector("#email").value
  );
    console.log(document.querySelector("#interested").value
  );
  $("input").prop('disabled', true);
  $(".invalid").addClass("hide");

// 2 second timer
// Confirmation message
    setTimeout(function(){
      $(".confirmation").addClass("show");
      $(".input-field").addClass("hide");
    }, 2000);

// Error message
  } else {
    $(".invalid").addClass("show");
  }
  return false;
}

// Run submission function
$("#validate").on("click", validate);

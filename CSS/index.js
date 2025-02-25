$("document").ready(function () {
  // use keyup event on email field
  $("#email").keyup(function () {
    if (validateEmail()) {
      // if the email is validated
      // setting the border green
      $("#email").css("border", "2px solid green");
      // and set label
      $("#emailMsg").html("<p class='text-success'>Valid</p>");
    } else {
      // if the email is not validated
      // set border red
      $("#emailMsg").html(
        "<p class='text-danger'>Please provide a valid email</p>"
      );
    }
  });

  function validateEmail() {
    // get value of input email
    var email = $("#email").val();
    // use reular expression
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  $("#errorIcon").hide();
  $("#btn").click(function () {
    const email = $("#email").val();
    var emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (emailPattern.test(email)) {
      alert("Successfully submitted 👍");
      location.reload();
    } else {
      $("#errorIcon").show();
      $("#email").css("border", "2px solid red");
      $("#emailMsg").html(
        "<p class='text-danger'>Please provide a valid email</p>"
      );
    }
  });
});

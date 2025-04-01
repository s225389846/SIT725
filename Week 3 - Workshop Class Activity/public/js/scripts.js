const clickMe = () => {
  alert("Thanks for clicking. Currently the information is not available.");
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#clickMeButton").click(() => {
    clickMe();
  });

  // Initialize modals
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);

  // Attach submitForm function to the submit button
  $("#formSubmit").click(function (e) {
    e.preventDefault(); // Prevent default form submission (page reload)
    submitForm(); // Call the submitForm function
  });
});

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.size = $("#size").val();
  formData.color = $("#color").val();
  formData.email = $("#email").val();
  formData.contact = $("#contact").val();
  console.log("Form Data Submitted: ", formData); // This will print the form data
};

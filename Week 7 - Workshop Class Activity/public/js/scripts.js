const clickMe = () => {
  alert("Thanks for clicking. Currently the information is not available.");
};

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s12 m6 l4 center-align">' +
      '<div class="card medium">' +
      '<div class="card-image waves-effect waves-block waves-light">' +
      '<img class="activator" src="' +
      item.image +
      '">' +
      "</div>" +
      '<div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span>' +
      '<p><a href="#">' +
      item.link +
      "</a></p>" +
      "</div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text" style="color: black;">' +
      item.description +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>";
    $("#card-section").append(itemToAppend);
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#clickMeButton").click(() => {
    clickMe();
  });
  getProjects();
  $(".modal").modal();
  $("#formSubmit").click(() => {
    submitForm();
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
  console.log("Form Data Submitted: ", formData);
};

const getProjects = () => {
  $.get("/api/projects", (response) => {
    if (response.statusCode === 200) {
      addCards(response.data);
    } else {
      console.log("Error: Could not load projects");
    }
  });
};

// connect to the socket
let socket = io();
socket.on("emitting", (msg) => {
  console.log("Message: " + msg);
});

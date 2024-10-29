$(document).ready(function () {
  let getData = localStorage.getItem("getData");

  if (getData) {
    let list = JSON.parse(getData);
    for (let i = 0; i < list.length; i++) {
      $("ul").append(
        "<li>" + list[i] + "<button class='remove-btn'>X</button></li>"
      );
    }
  }
});

$(".add-button").on("click", add);

function add() {
  let inputValue = $(".add").val().trim(); // Directly get the input value
  let getData = localStorage.getItem("getData");
  let list;

  if (getData) {
    list = JSON.parse(getData);
  } else {
    list = [];
  }

  if (inputValue !== "") {
    $("ul").append(
      "<li>" + inputValue + "<button class='remove-btn'>X</button></li>"
    );

    $(".add").val(""); // Clear the input after adding

    list.push(inputValue);
    localStorage.setItem("getData", JSON.stringify(list)); // Store the updated list in localStorage
  } else {
    alert("Please enter a value before adding to the list.");
  }
}

// Delegated event listener for remove buttons
$(document).on("click", ".remove-btn", function () {
  let itemText = $(this).parent().text().replace("X", "").trim();
  let getData = JSON.parse(localStorage.getItem("getData"));
  getData = getData.filter((item) => item !== itemText);

  localStorage.setItem("getData", JSON.stringify(getData));
  $(this).parent().remove();
});
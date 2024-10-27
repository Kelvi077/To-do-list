$(document).ready(function () {
  let getData = localStorage.getItem("getData");

  if (getData) {
    let list = JSON.parse(getData);
    for (let i = 0; i < list.length; i++) {
      $("ul").append("<li>" + list[i] + "</li>");
    }
  }
});

$(".add-button").on("click", add);

let list;

function add() {
  let data = $(".add").serializeArray(); // Move data retrieval here
  let getData = localStorage.getItem("getData");

  if (getData) {
    list = JSON.parse(getData);
  } else {
    list = [];
  }

  if (data[0].value.trim() !== "") {
    $("ul").append("<li>" + data[0].value + "</li>");
    $(".add").val(""); // Clear the input after adding

    list.push(data[0].value);

    localStorage.setItem("getData", JSON.stringify(list));
  } else {
    alert("Please enter a value before adding to the list.");
  }
}

// get the id attribute of the html element //
const friendsList = document.getElementById("list");

list.addEventListener("click", function(event) {
  const listItem = event.target; // determine the clicked element in listItem // 
  const firstLetter = listItem.textContent.charAt(0).toLowerCase(); //get the firstletter using charAt and convert it to lowercase//

  if (["a", "e", "i", "o", "u"].includes(firstLetter)) { //if the first letter of the listitem include vowels change the background color of the list item to red//
    listItem.style.backgroundColor = "red";
  } else {
    listItem.style.backgroundColor = "green"; // else change  to green//
  }
});


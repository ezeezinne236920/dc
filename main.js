var form = document.getElementById("addform");
var items = document.getElementById("items");
var filter = document.getElementById("filter");
// form submit event

// form submit event
form.addEventListener("submit", addItem);
// delete event
items.addEventListener("click", removeItem);
// items.addEventListener("click", changeli/);
// filter event
filter.addEventListener("keyup", filterItems);
// add item function
function addItem(e) {
  e.preventDefault();

  //get input value
  var newItem = document.getElementById("inputid").value;
  //create new li element
  var li = document.createElement("li");
  //add class name

  li.setAttribute("title", "list-group-items stay");
  //  let us create tect node for this li that we have created

  var liText = document.createTextNode(newItem);
  li.appendChild(liText);

  //create delete button element
  var deletebtn = document.createElement("button");
  //   add classes to the delete button
  deletebtn.style.color = "yellow";
  deletebtn.style.backgroundColor = "green";
  deletebtn.className = "btn-sm delete float-right";

  // append text node
  deletebtn.appendChild(document.createTextNode("X"));
  //   append button to li
  li.appendChild(deletebtn);

  //    append li to the list
  document.getElementById("items").appendChild(li);
}
//remove item function

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Ogbeni, you sure? no go do pass your self oo")) {
      var li = e.target.parentElement;
      items.removeChild(li);
    }
    if (e.target.classList.contains("stay")) {
      if (confirm("are you from the delete family?")) {
        console.log("stay put comrade!");
        items.appendChild(li);
      }
    }
  }
  // change the narrative of the created li

  // console.log(4);
}
// function changeli() {}
// filter items function
function filterItems(e) {
  // convert to lowercase
  var text = e.target.value.toLowerCase();
  //  get lis
  var itemul = items.getElementsByTagName("li");
  // console.log(itemul);
  // convert html collection that i got after this console.log to an array

  Array.from(itemul).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

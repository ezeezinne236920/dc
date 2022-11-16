// examine  the document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.dir(document.body);
// console.dir(document.all);
// console.dir(document.all[10]);
// document.all[10].textContent = "error code"; // this is not the way you want ot dothis
// console.log(document.forms);
// console.log(document.images).

// // get element by id
// console.log(document.getElementById("headerTitle"));
// var headerTitle = document.getElementById("headerTitle");
// console.log(headerTitle);
// headerTitle.textContent = "hello";
// headerTitle.innerText = "ahgoyin!";
// you should know that innerText and textContent are almost the same. the only differnce is that innertext obeys the stylings(css) whereas texrtContent disregards it
// headerTitle.innerHTML = "<h3>goodbye!</>";
// console.log(
//   ((document.querySelector("#headerTitle").innerHTML =
//     "<p>stopeet joooor</p>").style.backgroundColor = " red")
// );
// headerTitle.style.borderBottom = "solid 3px #000";
// notice that the borderBottom, typically written as border-bottom in css is changed to chemo case in javascript

// GETELEMENTSBYCLASSNAME
// Notice that this case is now a plural form of element!   remember also the  differnce between id and class\
// var items = document.getElementsByClassName("list-group-items");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello human!";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "yellow";
// }

// get elemenet by tagname

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello human!";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "yellow";
// }

// var anaconda = document.querySelector("#anaconda");
// console.log(anaconda);
// // anaconda.innerHTML = "this is another one!";
// anaconda.style.color = "red";
// anaconda.style.fontSize = "1.9rem";
// anaconda.style.alignItem = "center";

var button = document.getElementById("button");
var box = document.getElementById("box");
var output = document.getElementById("output");
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mouseup", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.style.marginTop = "50px";

// function buttonClick(e) {
// console.log(
//   (document.getElementById("headerTitle").textContent = "I am amazing!")
// );
// // // document.querySelector("headerTitle").style.backgroundColor = "purple";
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.clientX);
// console.log(e.altkey);
// console.log(e.shiftKey);
// console.log(e.ctrlKey);
// }
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave",  runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector("form");
// var select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("paste", runEvent);
// itemInput.addEventListener("input", runEvent);
// select.addEventListener("change", runEvent);

// form.addEventListener("submit", runEvent);
// function runEvent(e) {
//   console.log("Event Type: " + e.type);
//   e.preventDefault();
// console.log(e.target.value);
// document.body.style.display = "none";
// output.innerHTML = "<h3>" + e.target.value + "</h3>";
// output.innerHTML =
//   "<h3>MouseX: " + e.offsetX + " </h3><h3><MouseY: " + e.offsetY + "</h3>";
// // box.style.background = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
// document.all[8].style.background =
//   "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
// }
// console.log(document.all);
// var buttonRight = item.document.getElementsByClassName("float-right");
// var list = document.getElementsByTagName("li").textContent;
// console.log(buttonRight);
// buttonRight.style.backgroundColor = "green";
// for (let i = 0; i < buttonRight.length; i++) {
//   buttonRight[i].style.backgroundColor = "green";
//   buttonRight[i].style.color = "yellow";
// }
// Array.from(list).forEach(function (item) {
//   button.style.backgroundColor = "green";
// });

function addToDo() {
  let inputText = document.querySelector(".inputList").value;
  let added = document.querySelector(".DoSomething");

  let li = document.createElement("li");

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(inputText));
  let btn = document.createElement("button");
  btn.appendChild(document.createTextNode("x"));
  li.appendChild(p);
  li.appendChild(btn);

  if (inputText === "") {
    alert("You must write something");
  } else {
    added.appendChild(li);
  }

  btn.onclick = function () {
    let div = this.parentElement;
    div.remove();
  };

  li.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
}

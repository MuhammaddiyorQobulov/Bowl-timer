const input = document.querySelector("input");
const btn = document.querySelector("button");
const section = document.querySelector("section");
const body = document.querySelector("body");

function takeValue() {
  btn.addEventListener("click", (e) => {
    let value = null;
    e.preventDefault();
    if (input.value && input.value > 0) {
      value = Math.floor(input.value);
      input.value = "";
    } else {
      alert("Natural Son Kiritin!!!");
      return;
    }

    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = value;
    section.appendChild(box);
    time(value, box);
  });
}
takeValue();

function time(value, box) {
  setTimeout(() => {
    if (value == 1) {
      box.style.display = "none";
      return;
    }
    if (value == 2) {
      box.style.background = "red";
    }
    if (value == 3) {
      box.style.background = "orange";
    }
    value--;
    box.innerHTML = value;
    time(value, box);
  }, 1000);
}

body.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    btn.click();
  }
});

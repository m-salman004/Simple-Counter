// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("Decrease")) {
      count--;
    } else if (styles.contains("Increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "black";
    }
    if (count < 0) {
      value.style.color = "black";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});

/* eslint-disable */
// import "bootstrap";
import "./styles.css";

// import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/4K.png";

window.onload = () => {
  document.getElementById("boton-3d").addEventListener("click", () => {
    document.getElementById("excuseOutput").innerHTML = generateExcuse();
  });
};

function generateExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  return excuse;
}

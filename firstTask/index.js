import "./index.css";
import { l, animate } from "./cube";
class Control {
  constructor(name) {
    this.name = name;
  }

  run() {
    document.querySelector(`.runButton`).addEventListener("click", () => {
      let start = document.querySelector(".from").value;
      let finsish = document.querySelector(".to").value;
      document.querySelector(
        `${this.name}`
      ).style.transform = ` matrix(1, 0, 0, 1, ${start}, 0)`;
      document.querySelector(`${this.name}`).style.transition = `${
        document.querySelector(".speed").value
      }s`;
      document.querySelector(
        `${this.name}`
      ).style.transform = ` matrix(1, 0, 0, 1, ${finsish}, 0)`;
    });
  }
}
let check = new Control(".block");
check.run();
l();
animate();

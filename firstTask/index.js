import "./index.css";
import { model, animate, cube, renderer, scene, camera } from "./cube";

function run(start, finish, speed) {
  document.querySelector(`.runButton`).addEventListener("click", () => {
    start = document.querySelector(".from").value;
    finish = document.querySelector(".to").value;
    speed = document.querySelector(".speed").value;
    cube.position.x = +start;
    let req = 0;
    (function move() {
      req = requestAnimationFrame(move);

      cube.position.x += +speed;
      if (+cube.position.x > +finish) {
        cancelAnimationFrame(req);
        req = 0;
      }

      renderer.render(scene, camera);
    })();
  });
}

function dynamic(start, finish, speed) {
  document.querySelector(`.dynamic`).addEventListener("click", () => {
    start = document.querySelector(".from").value;
    finish = document.querySelector(".to").value;
    speed = document.querySelector(".speed").value;
    cube.position.x = +start;
    let req = 0;
    let addSpeed = 0;
    (function move() {
      req = requestAnimationFrame(move);

      cube.position.x += addSpeed;
      addSpeed += 0.001;
      if (addSpeed >= +speed) {
        addSpeed === +speed;
      }
      if (+cube.position.x > +finish) {
        cancelAnimationFrame(req);

        req = 0;
      }

      renderer.render(scene, camera);
    })();
  });
}

run();
model();
dynamic();
animate();

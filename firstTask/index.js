import "./index.css";
import { l, animate, cube, renderer, scene, camera } from "./cube";

function run() {
  document.querySelector(`.runButton`).addEventListener("click", () => {
    let start = document.querySelector(".from").value;
    let finish = document.querySelector(".to").value;
    let speed = document.querySelector(".speed").value;
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
      console.log(cube.position.x);
    })();
  });
}

run();
l();
animate();

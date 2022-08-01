import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

export function l() {
  renderer.setSize(700, 500);
  document.querySelector(".block").appendChild(renderer.domElement);

  cube.position.x = -6;
  cube.position.y = 5;

  scene.add(cube);
  camera.position.z = 10;
  renderer.render(scene, camera);
}

export function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube.position.x += 0.01;
  renderer.render(scene, camera);
}

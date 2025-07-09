import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

//create scene
const scene = new THREE.Scene();
//create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//create controls
const controls = new OrbitControls(camera, renderer.domElement);

//set camera positon
camera.position.set(0, 0, 30);
controls.update();
//create geometry
const sphereGeometry = new THREE.SphereGeometry(10, 32, 32);

//create sunMaterial and mesh
const sunMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
scene.add(sunMesh);
renderer.render(scene, camera);
function animate() {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}
animate();

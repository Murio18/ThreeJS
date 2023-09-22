import * as THREE from 'three';

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
export const renderer = new THREE.WebGLRenderer();
export const allSegments = [];
let allMaterials = [];
let allTextures = ["https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
	"https://images.unsplash.com/photo-1695179509800-b1c240fd52ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
	"https://images.unsplash.com/photo-1695112177667-751454684f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
	"https://plus.unsplash.com/premium_photo-1695185954894-e9382c6f4da8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
	"https://images.unsplash.com/photo-1694627382334-4c3406a84b79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
	"https://images.unsplash.com/photo-1694619362413-4979885b4f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"];

camera.position.z = 10;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let circleSegments = 9;
const radius = 6;
const angleIncrement = (2 * Math.PI) / circleSegments;
export const originalColor = "white";

function createTextures() {
	allTextures.forEach(element => {
		const texture = new THREE.TextureLoader().load(element);
		const b = new THREE.Vector2();
		texture
		const material = new THREE.MeshBasicMaterial({ map: texture });
		allMaterials.push(material);
	});
}

createTextures()

function createCircle() {
	for (let i = 2; i < circleSegments - 1; i++) {
		const geometry = new THREE.CircleGeometry(radius, 128, angleIncrement * i, angleIncrement);
		const circle = new THREE.Mesh(geometry, allMaterials[i - 2]);
		scene.add(circle);
		allSegments.push(circle);
		circle.rotation.z = -0.35
		// const box = new THREE.BoxHelper(circle, 0xffff00);  //Help box//
		// scene.add(box);
	}
}

createCircle();

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}


animate();

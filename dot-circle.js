import { allSegments, camera, originalColor, scene } from "./main.js";
import * as THREE from 'three';
let circleSegments = 9;
const radius = 6;
const angleIncrement = (2 * Math.PI) / circleSegments;

function createRing() {
    const circleOutside = new THREE.CircleGeometry(radius, 128, 1.03, ringLenght);
    const borderMaterial = new THREE.LineDashedMaterial({
        color: 0x000000, // Border color
        linewidth: 0.1,    // Border line width
        dashSize: 0.2,   // Size of the dots
        gapSize: 2     // Size of the gaps between dots
    });
    const circleMesh = new THREE.Line(circleOutside, borderMaterial);
    circleMesh.computeLineDistances(); // Compute dashed pattern
    scene.add(circleMesh);
    // ring.rotation.z = 
}

function createCircle() {
	for (let i = 2; i < circleSegments - 1; i++) {
		const geometry = new THREE.CircleGeometry(radius, 128, angleIncrement * i, angleIncrement);
        const borderMaterial = new THREE.LineDashedMaterial({
            color: 0x000000, // Border color
            linewidth: 0.1,    // Border line width
            dashSize: 0.2,   // Size of the dots
            gapSize: 2     // Size of the gaps between dots
        });
		const circle = new THREE.Line(geometry, borderMaterial);
		scene.add(circle);
		// allSegments.push(circle);
		circle.rotation.z = -0.35
	}
}

// createCircle()
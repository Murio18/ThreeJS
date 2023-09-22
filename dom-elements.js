import { allSegments, camera, originalColor } from "./main.js";
import * as THREE from 'three';


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
// const color3 = new THREE.Color(0x000000ff);

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(allSegments);

    allSegments.forEach((segment) => {
        segment.material.color.set("white");
    });

    if (intersects.length > 0) {
        const selectedObject = intersects[0].object;
        // selectedObject.material.color.set(color3); // Change color to red when hovered
        console.log(intersects)
    }
}

document.addEventListener('mousemove', onMouseMove, false);
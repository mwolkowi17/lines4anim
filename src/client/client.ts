import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { lineform } from './lineclass';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { divsform } from './divsclass';
import TWEEN from '@tweenjs/tween.js'
import { LabelDiv,LabelDiv4,LabelDiv6,LabelDiv7 } from './divs';

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 50


const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const line1 = new lineform(-7.5, 0, 0, 0, 20, 3)
const line2 = new lineform(-7.5, 0, 0, 10, 0, 0)
const line3 = new lineform(10, 0, 0, 0, 20, 3)
const line4 = new lineform(-7.5, 0, 0, 0, 0, 10)
const line5 = new lineform(0, 0, 10, 0, 20, 3)
const line6 = new lineform(0, 0, 10, 10, 0, 0)

export const figure1 = new THREE.Group();

figure1.add(line1.main)
figure1.add(line2.main)
figure1.add(line3.main)
figure1.add(line4.main)
figure1.add(line5.main)
figure1.add(line6.main)

scene.add(figure1)

const Label = new CSS2DObject(LabelDiv);
Label.position.set(-7.5, 0, 0);

const Label4 = new CSS2DObject(LabelDiv4);
Label4.position.set(0, 20, 3);

const Label6 = new CSS2DObject(LabelDiv6);
Label6.position.set(10, 0, 0);

const Label7 = new CSS2DObject(LabelDiv7);
Label7.position.set(0, 0, 10);

figure1.add(Label);

figure1.add(Label4);

figure1.add(Label6);

figure1.add(Label7);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
document.body.appendChild(labelRenderer.domElement);

//const controls = new OrbitControls(camera, labelRenderer.domElement)


// new TWEEN.Tween(figure1.rotation)
//     .to({ x: -Math.PI / 2, y: 0, z: 0 }, 1000)
//     .start()

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    render()
}

function animate() {
    requestAnimationFrame(animate)

    figure1.rotation.x += 0.005
    figure1.rotation.y += 0.005

    //controls.update()
    TWEEN.update()
    render()
}

function render() {
    renderer.render(scene, camera)
    labelRenderer.render(scene, camera);

}

animate()
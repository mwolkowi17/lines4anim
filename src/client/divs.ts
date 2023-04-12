import { figure1 } from "./client";
import TWEEN from '@tweenjs/tween.js'


export const LabelDiv = document.createElement('div');
LabelDiv.className = 'label';
LabelDiv.textContent = 'Element1';
LabelDiv.style.backgroundColor = 'transparent';
LabelDiv.style.color = 'white';
LabelDiv.style.cursor = 'pointer';

LabelDiv.addEventListener('pointerdown', () => {
	console.log('Element 1 clicked')
	new TWEEN.Tween(figure1.rotation)
	.to({ x: 0, y: Math.PI*(11 / 18), z: 0 }, 1000)
	.start()
	//alert('Element 1 clicked')
})



export const LabelDiv4 = document.createElement('div');
LabelDiv4.className = 'label';
LabelDiv4.textContent = 'Element4';
LabelDiv4.style.backgroundColor = 'transparent';
LabelDiv4.style.color = 'white';
LabelDiv4.style.cursor = 'pointer';

LabelDiv4.addEventListener('pointerdown', () => {
	console.log('Element 4 clicked')
	new TWEEN.Tween(figure1.rotation)
	.to({ x: Math.PI / 2, y: 0, z: 0 }, 1000)
	.start()
	//alert('Element 4 clicked')
})



export const LabelDiv6 = document.createElement('div');
LabelDiv6.className = 'label';
LabelDiv6.textContent = 'Element6';
LabelDiv6.style.backgroundColor = 'transparent';
LabelDiv6.style.color = 'white';
LabelDiv6.style.cursor = 'pointer';

LabelDiv6.addEventListener('pointerdown', () => {
	console.log('Element 6 clicked')
	new TWEEN.Tween(figure1.rotation)
	.to({ x: 0 , y: -Math.PI*(11 / 18), z: 0 }, 1000)
	.start()
	//alert('Element 6 clicked')
})

export const LabelDiv7 = document.createElement('div');
LabelDiv7.className = 'label';
LabelDiv7.textContent = 'Element7';
LabelDiv7.style.backgroundColor = 'transparent';
LabelDiv7.style.color = 'white';
LabelDiv7.style.cursor = 'pointer';

LabelDiv7.addEventListener('pointerdown', () => {
	console.log('Element 7 clicked')
	new TWEEN.Tween(figure1.rotation)
	.to({ x: 0 , y: 0, z: 0 }, 1000)
	.start()
	//alert('Element 7 clicked')
})








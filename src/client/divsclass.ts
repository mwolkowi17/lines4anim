
import { figure1 } from "./client";
import TWEEN from '@tweenjs/tween.js'

export class divsform {
    main: HTMLElement = document.createElement('div');
    NameClass: string
    Text: string

    constructor(nameclass: string, text: string) {
        this.NameClass = nameclass;
        this.Text = text;
        this.main.className = this.NameClass;
        this.main.textContent = this.Text;
        this.main.style.backgroundColor = 'transparent';
        this.main.style.color = 'white';
        this.main.style.cursor = 'pointer';

        this.main.addEventListener('pointerdown', () => {
            console.log(this.Text + ' clicked')
            new TWEEN.Tween(figure1.rotation)
                .to({ x: -Math.PI / 2, y: 0, z: 0 }, 1000)
                .start()
        })
    }

}
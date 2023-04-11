import * as THREE from 'three'

export class lineform {
    main: THREE.Line
    ax: number
    ay: number
    az: number
    bx: number
    by: number
    bz: number

    constructor(onex: number, oney: number, onez: number, twox: number, twoy: number, twoz: number) {
        this.ax = onex
        this.ay = oney
        this.az = onez
        this.bx = twox
        this.by = twoy
        this.bz = twoz

        const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

        const points = [];
        points.push(new THREE.Vector3(this.ax, this.ay, this.az));
        points.push(new THREE.Vector3(this.bx, this.by, this.bz));

        const geometry = new THREE.BufferGeometry().setFromPoints( points );

        this.main=new THREE.Line( geometry, material );

    }
}
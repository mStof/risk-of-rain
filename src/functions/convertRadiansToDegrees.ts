import * as THREE from "three";
type RotationType = number | THREE.Euler | [x: number, y: number, z: number, order?: THREE.EulerOrder | undefined] | readonly [x: number, y: number, z: number, order?: THREE.EulerOrder | undefined] | Readonly<THREE.Euler> | undefined


export function convertRadiansToDegrees(x:number, y:number, z:number):RotationType {
    const xRad = x * (Math.PI / 180);
    const yRad = y * (Math.PI / 180);
    const zRad = z * (Math.PI / 180);
    return [xRad,yRad,zRad];
}
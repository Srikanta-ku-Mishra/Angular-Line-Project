import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CubePoints } from 'src/Constants/points/cubepoints';
// import { LinePoint, LinePoints } from 'src/points/points';
// import { LinePoints } from 'src/points/points';
import * as THREE from 'three';
import { Vector3 } from 'three';
// import { Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit, AfterViewInit {
  //#region Canvas
  private camera!: THREE.PerspectiveCamera;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  @ViewChild('canvas')
  private canvasRef!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  //#endregion

  //#region Inputs
  // cube properties
  @Input()
  public rotationSpeedX: number = 0.01;
  @Input()
  public rotationSpeedY: number = 0.01;
  @Input()
  public size: number = 200;
  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;
  //#endregion

  //#region Method 1(using different classes)
  private line1() {
    // const controls = new OrbitControls(this.camera , this.renderer.domElement)
    const linematerial = new THREE.LineBasicMaterial({ color: 0x00ff00 })
    const points: THREE.Vector3[] = [];
    points[0] = new THREE.Vector3(-0.5, 0, 0)
    points[1] = new THREE.Vector3(0.5, 0, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private line2() {
    const linematerial = new THREE.LineBasicMaterial({ color: 0x00ff00 })
    const points1: THREE.Vector3[] = [];
    points1[0] = new THREE.Vector3(-0.5, 0.25, 0)
    points1[1] = new THREE.Vector3(0.5, 0.25, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points1);
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private line3() {
    const linematerial = new THREE.LineBasicMaterial({ color: 0x00ff00 })
    const points1: THREE.Vector3[] = [];
    points1[0] = new THREE.Vector3(-0.5, 0.5, 0)
    points1[1] = new THREE.Vector3(0.5, 0.5, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points1);
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private line4() {
    const linematerial = new THREE.LineBasicMaterial({ color: 0x00ff00 })
    const points1: THREE.Vector3[] = [];
    points1[0] = new THREE.Vector3(-0.5, 0.75, 0)
    points1[1] = new THREE.Vector3(0.5, 0.75, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points1);
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private line5() {
    const linematerial = new THREE.LineBasicMaterial({ color: 0x00ff00 })
    const points1: THREE.Vector3[] = [];
    points1[0] = new THREE.Vector3(-0.2, -0.2, 0)
    points1[1] = new THREE.Vector3(-0.2, 0.95, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points1);
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private line6() {
    const linematerial = new THREE.LineBasicMaterial({ color: 0x00ff00 })
    const points1: THREE.Vector3[] = [];
    points1[0] = new THREE.Vector3(0.2, -0.2, 0)
    points1[1] = new THREE.Vector3(0.2, 0.95, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points1);
    const line = new THREE.Line(linegeometry, linematerial);
    console.log(points1)
    return line;
  }
  //#endregion

  //#region practicing

  // private cubeshape : number[] = CubePoints;  //extra practices
  // private loader = new THREE.TextureLoader();  // for texture loader
  // private geometry  = new THREE.BoxGeometry(this.cubeshape)
  // private material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  // private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  // private linepnt : number[] = [];
  // private line() {
  //   this.linepnt.push(-0.5, 0, 0)
  //   console.log(this.linepnt)

  //   const linematerial = new THREE.LineBasicMaterial({ color: 0x00ff00 });

  //#endregion

  //#region Createscene
  // Create the scene
  /** 
  *@private
  *@memberof linecomponent

  */
  private createScene() {
    // const controls = new OrbitControls(this.camera , this.renderer)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000)
    // this.scene.add(this.cube);
    // this.cube.position.set(0,2,0)
    let line1 = this.line1();
    let line2 = this.line2();
    let line3 = this.line3();
    let line4 = this.line4();
    let line5 = this.line5();
    let line6 = this.line6();
    this.scene.add(line1, line2, line3, line4, line5, line6)
    let aspectRatio = this.getAspectRatio()
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
    //  console.log(this.points)

  }
  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  // private animatecube() {
  //   this.cube.rotation.x += this.rotationSpeedX;
  //   this.cube.rotation.y += this.rotationSpeedY;
  // }
  //#endregion

  //#region Render Function
  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: LineComponent = this;
    (function render() {
      requestAnimationFrame(render);
      // component.animatecube();
      component.renderer.render(component.scene, component.camera);
    }());
  }
  //#endregion

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();

  }

  constructor() {

  }

  ngOnInit(): void {

  }

}

import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Aqua, Green, Red } from 'src/Constants/ColorConstant/ColorConstant';
import { CubePoints } from 'src/Constants/points/CubePoints';
import { LinePoints } from 'src/Constants/points/LinePoints';
import * as THREE from 'three';
import { Vector3 } from 'three';
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

  //#region line Method 1(By putting coordinates in the class)
  private line1() {
    // const controls = new OrbitControls(this.camera , this.renderer.domElement)
    const linematerial = new THREE.LineBasicMaterial({ color: Green })
    const points: THREE.Vector3[] = [];
    points[0] = new THREE.Vector3(-0.5, 0, 0)
    points[1] = new THREE.Vector3(0.5, 0, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private line2() {
    const linematerial = new THREE.LineBasicMaterial({ color: Green })
    const points1: THREE.Vector3[] = [];
    points1[0] = new THREE.Vector3(-0.5, 0.25, 0)
    points1[1] = new THREE.Vector3(0.5, 0.25, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points1);
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private line3() {
    const linematerial = new THREE.LineBasicMaterial({ color: Green })
    const points1: THREE.Vector3[] = [];
    points1[0] = new THREE.Vector3(-0.5, 0.5, 0)
    points1[1] = new THREE.Vector3(0.5, 0.5, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points1);
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private line4() {
    const linematerial = new THREE.LineBasicMaterial({ color: Green })
    const points1: THREE.Vector3[] = [];
    points1[0] = new THREE.Vector3(-0.5, 0.75, 0)
    points1[1] = new THREE.Vector3(0.5, 0.75, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points1);
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private line5() {
    const linematerial = new THREE.LineBasicMaterial({ color: Green })
    const points1: THREE.Vector3[] = [];
    points1[0] = new THREE.Vector3(-0.2, -0.2, 0)
    points1[1] = new THREE.Vector3(-0.2, 0.95, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points1);
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private line6() {
    const linematerial = new THREE.LineBasicMaterial({ color: Green })
    const points1: THREE.Vector3[] = [];
    points1[0] = new THREE.Vector3(0.2, -0.2, 0)
    points1[1] = new THREE.Vector3(0.2, 0.95, 0)
    const linegeometry = new THREE.BufferGeometry().setFromPoints(points1);
    const line = new THREE.Line(linegeometry, linematerial);
    console.log(points1)
    return line;
  }
  //#endregion

  //#region line Method 2(Taking coordinates from Linepoints)
  private drawLineX1() {
    const linepoints = LinePoints;
    console.log(linepoints);
    var new2: number[] = [];
    linepoints.forEach(point => {
      // console.log(point.line1.point1.x, point.line1.point1.y, point.line1.point1.z)
      new2.push(point.lineX1.point1.x, point.lineX1.point1.y, point.lineX1.point1.z);
      new2.push(point.lineX1.point2.x, point.lineX1.point2.y, point.lineX1.point2.z);
    });
    // console.log(new2);
    const lpoint: Vector3[] = [];
    lpoint.push(new THREE.Vector3(new2[0], new2[1], new2[2]));
    lpoint.push(new THREE.Vector3(new2[3], new2[4], new2[5]));
    // console.log(lpoint);
    const linematerial = new THREE.MeshBasicMaterial({ color: Red })
    const linegeometry = new THREE.BufferGeometry().setFromPoints(lpoint)
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private drawLineX2() {
    const linepoints = LinePoints;
    console.log(linepoints);
    var new2: number[] = [];
    linepoints.forEach(point => {
      // console.log(point.line1.point1.x, point.line1.point1.y, point.line1.point1.z)
      new2.push(point.lineX2.point1.x, point.lineX2.point1.y, point.lineX2.point1.z);
      new2.push(point.lineX2.point2.x, point.lineX2.point2.y, point.lineX2.point2.z);
    });
    // console.log(new2);
    const lpoint: Vector3[] = [];
    lpoint.push(new THREE.Vector3(new2[0], new2[1], new2[2]));
    lpoint.push(new THREE.Vector3(new2[3], new2[4], new2[5]));
    // console.log(lpoint);
    const linematerial = new THREE.MeshBasicMaterial({ color: Red })
    const linegeometry = new THREE.BufferGeometry().setFromPoints(lpoint)
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private drawLineX3() {
    const linepoints = LinePoints;
    console.log(linepoints);
    var new2: number[] = [];
    linepoints.forEach(point => {
      // console.log(point.line1.point1.x, point.line1.point1.y, point.line1.point1.z)
      new2.push(point.LineX3.point1.x, point.LineX3.point1.y, point.LineX3.point1.z);
      new2.push(point.LineX3.point2.x, point.LineX3.point2.y, point.LineX3.point2.z);
    });
    // console.log(new2);
    const lpoint: Vector3[] = [];
    lpoint.push(new THREE.Vector3(new2[0], new2[1], new2[2]));
    lpoint.push(new THREE.Vector3(new2[3], new2[4], new2[5]));
    // console.log(lpoint);
    const linematerial = new THREE.MeshBasicMaterial({ color: Red })
    const linegeometry = new THREE.BufferGeometry().setFromPoints(lpoint)
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private drawLineY1() {
    const linepoints = LinePoints;
    console.log(linepoints);
    var new2: number[] = [];
    linepoints.forEach(point => {
      // console.log(point.line1.point1.x, point.line1.point1.y, point.line1.point1.z)
      new2.push(point.lineY1.point1.x, point.lineY1.point1.y, point.lineY1.point1.z);
      new2.push(point.lineY1.point2.x, point.lineY1.point2.y, point.lineY1.point2.z);
    });
    // console.log(new2);
    const lpoint: Vector3[] = [];
    lpoint.push(new THREE.Vector3(new2[0], new2[1], new2[2]));
    lpoint.push(new THREE.Vector3(new2[3], new2[4], new2[5]));
    // console.log(lpoint);
    const linematerial = new THREE.MeshBasicMaterial({ color: Red })
    const linegeometry = new THREE.BufferGeometry().setFromPoints(lpoint)
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  private drawLineY2() {
    const linepoints = LinePoints;
    console.log(linepoints);
    var new2: number[] = [];
    linepoints.forEach(point => {
      // console.log(point.line1.point1.x, point.line1.point1.y, point.line1.point1.z)
      new2.push(point.lineY2.point1.x, point.lineY2.point1.y, point.lineY2.point1.z);
      new2.push(point.lineY2.point2.x, point.lineY2.point2.y, point.lineY2.point2.z);
    });
    // console.log(new2);
    const lpoint: Vector3[] = [];
    lpoint.push(new THREE.Vector3(new2[0], new2[1], new2[2]));
    lpoint.push(new THREE.Vector3(new2[3], new2[4], new2[5]));
    // console.log(lpoint);
    const linematerial = new THREE.MeshBasicMaterial({ color: Red })
    const linegeometry = new THREE.BufferGeometry().setFromPoints(lpoint)
    const line = new THREE.Line(linegeometry, linematerial);
    return line;
  }
  //#endregion

  //#region Drawing cube(By taking width, length and height values from CubeHelper)
  // Fetching Cube data from Cubepoints
  private cube() {
    const newpoints = CubePoints;
    console.log(newpoints);
    var new1: number[] = [];
    newpoints.forEach(point => {
      console.log(point.point.x, point.point.y, point.point.z)
      new1.push(point.point.x, point.point.y, point.point.z);
    });
    console.log(new1);
    console.log(new1[0], new1[1], new1[2])
    const cubematerial = new THREE.MeshBasicMaterial({ wireframe: true, color: Aqua })
    const cubegeometry = new THREE.BoxGeometry(new1[0], new1[1], new1[2]);
    const cube = new THREE.Mesh(cubegeometry, cubematerial);
    return cube;
  }
  //#endregion

  //#region practice of loops
  // private linesnew() {
  //   const linepoints = LinePoints;
  //   var new2: number[] = [];
  //   var i = 0;
  //   for (i = 0; i < 3; i++) {
  //     if (i = 1) {
  //       linepoints.forEach(point => {
  //         console.log(point.line1.point1.x, point.line1.point1.y, point.line1.point1.z)
  //         new2.push(point.line1.point1.x, point.line1.point1.y, point.line1.point1.z);
  //         new2.push(point.line1.point2.x, point.line1.point2.y, point.line1.point2.z);
  //       });
  //     }
  //     if (i = 2) {
  //       linepoints.forEach(point => {
  //         new2.push(point.line2.point1.x, point.line2.point1.y, point.line2.point1.z);
  //         new2.push(point.line2.point2.x, point.line2.point2.y, point.line2.point2.z);
  //       });
  //     }
  //     console.log(new2)
  //     const lpoint: Vector3[] = [];
  //     lpoint.push(new THREE.Vector3(new2[0], new2[1], new2[2]));
  //     lpoint.push(new THREE.Vector3(new2[3], new2[4], new2[5]));
  //     console.log(lpoint);
  //     const linematerial = new THREE.MeshBasicMaterial({ color: 0xffffff })
  //     const linegeometry = new THREE.BufferGeometry().setFromPoints(lpoint)
  //     const line = new THREE.Line(linegeometry, linematerial);
  //     new2.splice(0 , new2.length);
  //     return line;
  //   }
  // }
  //#endregion

  //#region OrbitControls
  private orbitcontrol() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.camera.position.set(0, 0, 200);
    controls.enableDamping = true;
    return controls;
  }
  //#endregion

  //#region Createscene
  // Create the scene
  /** 
  *@private
  *@memberof linecomponent

  */
  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000)
    let line1 = this.line1();
    let line2 = this.line2();
    let line3 = this.line3();
    let line4 = this.line4();
    let line5 = this.line5();
    let line6 = this.line6();
    let cube1 = this.cube();
    let newlineX1 = this.drawLineX1();
    let newlineX2 = this.drawLineX2();
    let newlineX3 = this.drawLineX3();
    let newlineY1 = this.drawLineY1();
    let newlineY2 = this.drawLineY2();
    // this.linesnew();
    // let newlinetest = this.linesnew();
    cube1.position.set(2, 0, 0);
    this.scene.add(line1, line2, line3, line4, line5, line6, cube1, newlineX1, newlineX2, newlineX3, newlineY1, newlineY2)
    let aspectRatio = this.getAspectRatio()
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
    return cube1;

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
    let control = this.orbitcontrol();
    (function render() {
      requestAnimationFrame(render);
      // component.animatecube();
      control.update();
      
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

import * as THREE from 'three'
import { Mesh } from 'three'
import './style.css'

//Scene
const scene = new THREE.Scene()

//Object

const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

group.add(cube1)

// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// )
// cube2.position.x = -2

// group.add(cube2)



// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0x0000ff })
// )
// cube3.position.x = 2

// group.add(cube3)

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)


// scene.add(mesh)

// //Position

// // mesh.position.x = 0.7;
// // mesh.position.y = -0.6;
// // mesh.position.z = 1
// mesh.position.set(0.7, -0.6, -1)

// //Scale

// // mesh.scale.x = 3
// // mesh.scale.y = 1
// // mesh.scale.z = 1

// mesh.scale.set(2, .5, .5)


// // Rotation

// // mesh.rotation.reorder('YXZ')
// mesh.rotation.set(0, 0, 0)

//Axes helper (creates x y and z axis)
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)

//Sizes

const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.x = 1
// camera.position.y = 1
scene.add(camera)

// camera.lookAt(mesh.position)
//Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)

//Clock
const clock = new THREE.Clock()

//Animations

const tick = () => {

    //Clock
    const elapsedTime = clock.getElapsedTime()

    //Update Object
    cube1.rotation.y = Math.cos(elapsedTime)
    cube1.rotation.x = Math.sin(elapsedTime)

    // cube1.position.y = Math.cos(elapsedTime)
    // cube1.position.x = Math.sin(elapsedTime)


    camera.position.x = Math.sin(elapsedTime)
    camera.position.y = Math.cos(elapsedTime)

    camera.lookAt(cube1.position)


    //Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()
import * as THREE from 'three'
import { Mesh } from 'three'
import './style.css'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


console.log(OrbitControls)
/**
 * Cursor
 */

const cursor =
{
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = -(event.clientY / sizes.height)
})


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
const canvas = document.querySelector('canvas.webgl')
//Sizes

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    //update size of the window on change!
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //Update camera

    camera.aspect = sizes.width / sizes.height

    camera.updateProjectionMatrix()

    //Update Renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// window.addEventListener('dbclick', () => {
//     const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

//     if (!fullscreenElement) {
//         if (canvas.requestFullscreen()) {
//             canvas.requestFullscreen()
//         }
//         else if (canvas.webkitRequestFullscreen()) {
//             canvas.webkitRequestFullscreen()
//         }

//     }
//     else if (document.exitFullscreen) {
//         document.exitFullscreen()
//     }
// })

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)



camera.position.z = 3
camera.lookAt(cube1.position)

scene.add(camera)

// camera.lookAt(mesh.position)

//Controls

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

//Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//Clock
const clock = new THREE.Clock()
// gsap.to(cube1.position, { duration: 1, delay: 2, y: 1 })
// gsap.to(cube1.position, { duration: 1, delay: 3, x: 1 })
//Animations

const tick = () => {
    //Clock
    const elapsedTime = clock.getElapsedTime()

    //Update Object
    // cube1.rotation.y = elapsedTime
    // cube1.rotation.x = elapsedTime

    // cube1.position.y = Math.cos(elapsedTime)
    // cube1.position.x = Math.sin(elapsedTime)

    //Update camera

    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = Math.cos(cursor.y * Math.PI * 2) * 3

    // camera.lookAt(new THREE.Vector3())

    // Update Controls
    controls.update()
    //Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()
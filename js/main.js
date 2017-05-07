var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var test=true;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//var cube = new THREE.Mesh( geometry, material );
if(test==true){
var cube = new THREE.Mesh(geometry, material);
cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
cube.position.x = -1;
cube.position.y = 0;
cube.position.z = 0;
cube.castShadow = cube.receiveShadow = true;
scene.add(cube);

var cube1 = new THREE.Mesh(geometry, material);
cube1.rotation.x = cube.rotation.z = Math.PI * 0.1;
cube1.position.x = 0;
cube1.position.y = 0;
cube1.position.z = 0;
cube1.castShadow = cube.receiveShadow = true;
scene.add(cube1);
//scene.add( cube );
}
camera.position.z = 5;

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
}
render();

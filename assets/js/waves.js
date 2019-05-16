(function () {
  if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
  }

  var SEPARATION = 100, AMOUNTX = 100, AMOUNTY = 80;
  var container = document.getElementById("particles");
  var camera, scene, renderer;
  var particles, count = 0;

  init();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 1, 10000);
    camera.position.x = 0;
    camera.position.y = 300;
    camera.position.z = 900;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e0e0e);

    var numParticles = AMOUNTX * AMOUNTY;
    var positions = new Float32Array(numParticles * 3);
    var scales = new Float32Array(numParticles);

    var i = 0, j = 0;
    for (var ix = 0; ix < AMOUNTX; ix++) {

      for (var iy = 0; iy < AMOUNTY; iy++) {

        positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z

        scales[j] = 1;

        i += 3;
        j++;

      }

    }

    var geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.addAttribute('scale', new THREE.BufferAttribute(scales, 1));

    var material = new THREE.ShaderMaterial({
      uniforms: {
        color: {value: new THREE.Color(0xffffff)}
      },
      vertexShader: document.getElementById('vertexshader').textContent,
      fragmentShader: document.getElementById('fragmentshader').textContent
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
  }

  function onWindowResize() {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    camera.lookAt(new THREE.Vector3(0, -300, 0));

    var positions = particles.geometry.attributes.position.array;
    var scales = particles.geometry.attributes.scale.array;

    var i = 0, j = 0;

    for (var ix = 0; ix < AMOUNTX; ix++) {
      for (var iy = 0; iy < AMOUNTY; iy++) {
        positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
        scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 8 + (Math.sin((iy + count) * 0.5) + 1) * 8;
        i += 3;
        j++;
      }
    }

    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.scale.needsUpdate = true;

    renderer.render(scene, camera);

    count += 0.025;
  }
}());
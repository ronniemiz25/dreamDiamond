<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dream Diamond</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/all.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="css/jquery.fancybox.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/owl.carousel.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/stellarnav.css">
    <link rel="icon" href="images/favicon.jpg">
    <style>
    body {
      margin: 0;
      overflow: hidden;
    }
    canvas {
      display: block;
    }
  </style>


</head>

<body id="main">



    <!---HEADER-->
    <header class="menumain" id="navbar_top">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-6 col-sm-4 col-md-4 col-lg-4">
                    <div class="logo-main">
                        <span class="custom-logo-link">
                            <a href="#main" class="hash">
                                <img src="images/logo-white.webp" alt="" class="img-fluid">
                            </a>
                        </span>
                    </div>
                </div>
                <div class="col-6 col-sm-8 col-md-8 col-lg-8">
                    <div class="d-flex flex-wrap justify-content-end align-items-center">
                        <div class="menu">
                            <!-- <div class="stellarnav">
                                <ul>
                                    <li><a href="#">Menu 1</a></li>
                                    <li><a href="#">Menu 2</a></li>
                                    <li><a href="#">Menu 3</a></li>
                                    <li><a href="#">Menu 4</a></li>
                                </ul>
                            </div> -->
                        </div>
                        <!-- <div class="menu-buttons">
                            <a href="#" class="btn btn-outline-light" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"><span>Enquire Now</span><i
                                    class="fa-solid fa-arrow-right"></i></a>
                        </div> -->
                    </div>

                </div>
            </div>
        </div>
    </header>
    <!---HEADER-->

    


  


    <!---FOOTER--->
    <footer>
        <div class="container">

        </div>
        <div class="copyright text-center">
            <p>Jain Group © 2025. All Rights Reserved.
            </p>
        </div>
    </footer>
    <!---FOOTER--->

    <script src="js/jquery-min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    <script src="js/jquery.inputmask.bundle.min.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script src="js/stellarnav.js"></script>
    <script src="js/custom.js"></script>
    <script src="js/scrolltofixed-min.js"></script>
    <script src="js/wow.min.js"></script>
    <script>
        new WOW().init();
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r152/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.152.0/examples/js/loaders/OBJLoader.js"></script>
    <script>
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.HemisphericLight(0xffffff, 0x444444, 1);
    light.position.set(0, 20, 0);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Load the .obj file from AWS URL
    const loader = new THREE.OBJLoader();
    loader.load(
      'https://templetcreatives.s3.eu-north-1.amazonaws.com/dream_diamond/obj/diamond.obj', // URL to the OBJ file
      function (object) {
        object.scale.set(0.5, 0.5, 0.5); // Adjust scale if needed
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      function (error) {
        console.error('An error occurred while loading the model:', error);
      }
    );

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  </script>
</body>

</html>

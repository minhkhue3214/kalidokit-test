// test thử thay thế PIXI from PixiJs renderer
// import * as PIXI from 'pixi.js';
// test thử thay thế live2d model
// import { Live2DModel } from 'pixi-live2d-display';

// Live2D SDK
// import * from './Live2dSDK/live2dcubismcore.min.js'; //2
// import './Live2dSDK/live2d.min.js'; //3
// import "./Live2dSDK/live2dcubismcore.min.js";
console.log("this", this);

// // console.log(Live2DCubismCore);
// // import { Live2DModel } from 'pixi-live2d-display';
// // // PixiJS Renderer
import * as PIXI from './PixiJS_Renderer/pixi.min.js'; //4
// import 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js'; //4
// // console.log("PIXI",PIXI);
// // // PixiJS Live2D Plugin
import './PixiJs_Live2d_Plugin/index.min.js'; //5
// import 'https://cdn.jsdelivr.net/npm/pixi-live2d-display/dist/index.min.js'; //5
// // // Mediapipe or Tensorflow.js
import { FaceMesh } from './mediapipe/face_mesh.js'; //6
import './mediapipe/drawing_utils.js'; //7
import { Camera } from './mediapipe/camera_utils.js'; //8

// import './models/hibiki/runtime/hibiki.model3.json'
//Kalidokit
import * as Kalidokit from "./mediapipe/kalidokit.umd.js"; //1

// const script1 = document.createElement("script")
// const script2 = document.createElement("script")
// const script3 = document.createElement("script")
// const script4 = document.createElement("script")
// const script5 = document.createElement("script")
// const script6 = document.createElement("script")
// const script7 = document.createElement("script")
// const script8 = document.createElement("script")

// const scriptCreate = async () => {
  // script1.src = "https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js";
//   script2.src = "https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js";
//   script3.src = "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js";
//   script4.src = "https://cdn.jsdelivr.net/npm/pixi-live2d-display/dist/index.min.js";
//   script5.src = "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js";
//   script6.src = "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js";
//   script7.src = "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js";
//   script8.src = "https://cdn.jsdelivr.net/npm/kalidokit@1.1/dist/kalidokit.umd.js";
//   script1.async = true
//   script2.async = true
//   script3.async = true
//   script4.async = true
//   script5.async = true
//   script6.async = true
//   script7.async = true
//   script8.async = true
//   const promise1 = new Promise((resolve) => {
//     script1.addEventListener('load', () => {
//       console.log("loaded1");
//       resolve(true);
//     })
//   })
//   const promise2 = new Promise((resolve) => {
//     script1.addEventListener('load', () => {
//       console.log("loaded2");
//       resolve(true);
//     })
//   })
//   const promise3 = new Promise((resolve) => {
//     script1.addEventListener('load', () => {
//       console.log("loaded3");
//       resolve(true);
//     })
//   })
//   const promise4 = new Promise((resolve) => {
//     script1.addEventListener('load', () => {
//       console.log("loaded4");
//       resolve(true);
//     })
//   })
//   const promise5 = new Promise((resolve) => {
//     script1.addEventListener('load', () => {
//       console.log("loaded5");
//       resolve(true);
//     })
//   })
//   const promise6 = new Promise((resolve) => {
//     script1.addEventListener('load', () => {
//       console.log("loaded6");
//       resolve(true);
//     })
//   })
//   const promise7 = new Promise((resolve) => {
//     script1.addEventListener('load', () => {
//       console.log("loaded7");
//       resolve(true);
//     })
//   })
//   const promise8 = new Promise((resolve) => {
//     script1.addEventListener('load', () => {
//       console.log("loaded8");
//       resolve(true);
//     })
//   })

//   await Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8]).then((values) => {
//     console.log("promise all");
//   });

//   document.head.appendChild(script1)
//   document.head.appendChild(script2)
//   document.head.appendChild(script3)
//   document.head.appendChild(script4)
//   document.head.appendChild(script5)
//   document.head.appendChild(script6)
//   document.head.appendChild(script7)
//   document.head.appendChild(script8)
// }

// scriptCreate();

function App() {

  const {
    Application,
    live2d: { Live2DModel },
  } = PIXI;

  // Kalidokit provides a simple easing function
  // (linear interpolation) used for animation smoothness
  // you can use a more advanced easing function if you want

  // import './models/'
  const {
    Face,
    Vector: { lerp },
    Utils: { clamp },
  } = Kalidokit;

  // Url to Live2D
  const modelUrl = './models/hibiki/runtime/hibiki.model3.json';
  // console.log("modelUrl",modelUrl);

  let currentModel, facemesh;

  const videoElement = document.querySelector(".input_video");
  (async function main() {
    // create pixi application
    const app = new PIXI.Application({
      view: document.getElementById("live2d"),
      autoStart: true,
      backgroundAlpha: 0,
      backgroundColor: 0xffffff,
      resizeTo: window,
    });

    // load live2d model
    console.log("still run here 1");
    console.log("test", Live2DModel.from(modelUrl, { autoInteract: false }));
    currentModel = await Live2DModel.from(modelUrl, { autoInteract: false });
    console.log("currentModel", currentModel);
    currentModel.scale.set(0.4);
    currentModel.interactive = true;
    currentModel.anchor.set(0.5, 0.5);
    currentModel.position.set(window.innerWidth * 0.5, window.innerHeight * 0.8);

    // Add events to drag model
    // currentModel.on("pointerdown", (e) => {
    //     currentModel.offsetX = e.data.global.x - currentModel.position.x;
    //     currentModel.offsetY = e.data.global.y - currentModel.position.y;
    //     currentModel.dragging = true;
    // });
    // currentModel.on("pointerup", (e) => {
    //     currentModel.dragging = false;
    // });
    // currentModel.on("pointermove", (e) => {
    //     if (currentModel.dragging) {
    //         currentModel.position.set(e.data.global.x - currentModel.offsetX, e.data.global.y - currentModel.offsetY);
    //     }
    // });

    // Add mousewheel events to scale model
    // document.querySelector("#live2d").addEventListener("wheel", (e) => {
    //     e.preventDefault();
    //     currentModel.scale.set(clamp(currentModel.scale.x + event.deltaY * -0.001, -0.5, 10));
    // });

    // add live2d model to stage
    app.stage.addChild(currentModel);

    // create media pipe facemesh instance
    facemesh = new FaceMesh({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      },
    });

    // set facemesh config
    facemesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    // pass facemesh callback function
    facemesh.onResults(onResults);

    startCamera();
  })();

  const onResults = (results) => {
    // drawResults(results.multiFaceLandmarks[0]);
    animateLive2DModel(results.multiFaceLandmarks[0]);
  };

  // draw connectors and landmarks on output canvas
  // const drawResults = (points) => {
  //     if (!guideCanvas || !videoElement || !points) return;
  //     guideCanvas.width = videoElement.videoWidth;
  //     guideCanvas.height = videoElement.videoHeight;
  //     let canvasCtx = guideCanvas.getContext("2d");
  //     canvasCtx.save();
  //     canvasCtx.clearRect(0, 0, guideCanvas.width, guideCanvas.height);
  //     // Use `Mediapipe` drawing functions
  //     drawConnectors(canvasCtx, points, FACEMESH_TESSELATION, {
  //         color: "#C0C0C070",
  //         lineWidth: 1,
  //     });
  //     if (points && points.length === 478) {
  //         //draw pupils
  //         drawLandmarks(canvasCtx, [points[468], points[468 + 5]], {
  //             color: "#ffe603",
  //             lineWidth: 2,
  //         });
  //     }
  // };

  const animateLive2DModel = (points) => {
    if (!currentModel || !points) return;

    let riggedFace;

    if (points) {
      // use kalidokit face solver
      riggedFace = Face.solve(points, {
        runtime: "mediapipe",
        video: videoElement,
      });
      rigFace(riggedFace, 0.5);
    }
  };

  // update live2d model internal state
  const rigFace = (result, lerpAmount = 0.7) => {
    if (!currentModel || !result) return;
    const coreModel = currentModel.internalModel.coreModel;

    currentModel.internalModel.motionManager.update = (...args) => {
      // disable default blink animation
      // currentModel.internalModel.eyeBlink = undefined;

      coreModel.setParameterValueById(
        "PARAM_EYE_BALL_X",
        lerp(result.pupil.x, coreModel.getParameterValueById("PARAM_EYE_BALL_X"), lerpAmount)
      );
      coreModel.setParameterValueById(
        "PARAM_EYE_BALL_Y",
        lerp(result.pupil.y, coreModel.getParameterValueById("PARAM_EYE_BALL_Y"), lerpAmount)
      );

      // X and Y axis rotations are swapped for Live2D parameters
      // because it is a 2D system and KalidoKit is a 3D system
      coreModel.setParameterValueById(
        "PARAM_ANGLE_X",
        lerp(result.head.degrees.y, coreModel.getParameterValueById("PARAM_ANGLE_X"), lerpAmount)
      );
      coreModel.setParameterValueById(
        "PARAM_ANGLE_Y",
        lerp(result.head.degrees.x, coreModel.getParameterValueById("PARAM_ANGLE_Y"), lerpAmount)
      );
      coreModel.setParameterValueById(
        "PARAM_ANGLE_Z",
        lerp(result.head.degrees.z, coreModel.getParameterValueById("PARAM_ANGLE_Z"), lerpAmount)
      );

      // update body params for models without head/body param sync
      const dampener = 0.3;
      coreModel.setParameterValueById(
        "PARAM_BODY_ANGLE_X",
        lerp(result.head.degrees.y * dampener, coreModel.getParameterValueById("PARAM_BODY_ANGLE_X"), lerpAmount)
      );
      coreModel.setParameterValueById(
        "PARAM_BODY_ANGLE_Y",
        lerp(result.head.degrees.x * dampener, coreModel.getParameterValueById("PARAM_BODY_ANGLE_Y"), lerpAmount)
      );
      // coreModel.setParameterValueById(
      //     "PARAM_BODY_ANGLE_Z",
      //     lerp(result.head.degrees.z * dampener, coreModel.getParameterValueById("PARAM_BODY_ANGLE_Z"), lerpAmount)
      // );

      // Simple example without winking.
      // Interpolate based on old blendshape, then stabilize blink with `Kalidokit` helper function.
      let stabilizedEyes = Kalidokit.Face.stabilizeBlink(
        {
          l: lerp(result.eye.l, coreModel.getParameterValueById("PARAM_EYE_L_OPEN"), 0.2),
          r: lerp(result.eye.r, coreModel.getParameterValueById("PARAM_EYE_R_OPEN"), 0.2),
        },
        result.head.y
      );
      // eye blink
      coreModel.setParameterValueById("PARAM_EYE_L_OPEN", stabilizedEyes.l);
      coreModel.setParameterValueById("PARAM_EYE_R_OPEN", stabilizedEyes.r);

      // mouth
      // coreModel.setParameterValueById(
      //     "PARAM_TONGUE",
      //     lerp(result.mouth.y, coreModel.getParameterValueById("PARAM_TONGUE"),0)
      // );

      // mouth
      coreModel.setParameterValueById(
        "PARAM_MOUTH_OPEN_Y",
        lerp(result.mouth.y, coreModel.getParameterValueById("PARAM_MOUTH_OPEN_Y"), 0.3)
      );
      // Adding 0.3 to ParamMouthForm to make default more of a "smile"
      coreModel.setParameterValueById(
        "PARAM_MOUTH_FORM",
        0.3 + lerp(result.mouth.x, coreModel.getParameterValueById("PARAM_MOUTH_FORM"), 0.3)
      );
    };
  };

  // start camera using mediapipe camera utils
  const startCamera = () => {
    const camera = new Camera(videoElement, {
      onFrame: async () => {
        await facemesh.send({ image: videoElement });
      },
      width: 640,
      height: 480,
    });
    camera.start();
  };


  return (
    <div className="App">
      <div className="preview">
        <video className="input_video" width="1280px" height="720px"></video>
      </div>
      <canvas id="live2d"></canvas>
    </div>
  );
}

export default App;

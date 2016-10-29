/* globals document, requestAnimationFrame */
import * as PIXI from "pixi.js";
import "css/main";

const renderer = new PIXI.WebGLRenderer(800, 600);

const stage = new PIXI.Container();

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

function animate() {
  // start the timer for the next animation loop
  requestAnimationFrame(animate);

  // this is the main render call that makes pixi draw your container and its children.
  renderer.render(stage);
}

requestAnimationFrame(animate);

/* globals document, requestAnimationFrame */
import * as PIXI from "pixi.js";
import "css/main";
import protagonistImage from "assets/sprites/protagonist-normal.png";

const renderer = new PIXI.WebGLRenderer(800, 600);

const stage = new PIXI.Container();

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view);

const player = PIXI.Sprite.from(protagonistImage);

// Setup the position and scale of the player
player.position.x = 400;
player.position.y = 300;

player.scale.x = 2;
player.scale.y = 2;

// Add the player to the scene we are building.
stage.addChild(player);

function animate() {
  // start the timer for the next animation loop
  requestAnimationFrame(animate);

  player.rotation += 0.01;

  // this is the main render call that makes pixi draw your container and its children.
  renderer.render(stage);
}

requestAnimationFrame(animate);

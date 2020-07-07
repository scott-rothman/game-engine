import { Controller } from './scripts/controller.js';
import { Actor } from './scripts/actor.js';

const controller = new Controller();
const actor = new Actor();

const FRAME_DURATION = (1/60) * 1000;
const loop = window.setInterval(() => {
  window.requestAnimationFrame(() => {
    if (controller.directions.has('L')) {
      actor.moveLeft(); 
    }
  
    if (controller.directions.has('R')) {
      actor.moveRight();
    }

    if (controller.directions.has('S_L')) {
      actor.shootLeft();
    }

    if (controller.directions.has('S_R')) {
      actor.shootRight();
    }
  });
}, FRAME_DURATION);
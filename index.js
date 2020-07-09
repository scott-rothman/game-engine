import { Controller } from './scripts/controller.js';
import { Actor } from './scripts/actor.js';

const controller = new Controller();
const actor = new Actor();

const FRAME_DURATION = (1/60) * 1000;
const loop = window.setInterval(() => {
  window.requestAnimationFrame(() => {
    if (!controller.input.has('L') &&
        !controller.input.has('R')) {
          actor.idle();
    }

    if (controller.input.has('L')) {
      actor.moveLeft(); 
    }
  
    if (controller.input.has('R')) {
      actor.moveRight();
    }

    if (controller.input.has('S_L')) {
      actor.shootLeftArm();
    } else {
      actor.lowerLeftArm();
    }

    if (controller.input.has('S_R')) {
      actor.shootRightArm();
    } else {
      actor.lowerRightArm();
    }

    if (controller.input.has('J')) {
      actor.jump();
    } else {
      actor.fall();
    }
  });
}, FRAME_DURATION);

window.addEventListener('buttonReleased', async (e) => {
  if (e.detail.key ==='J') {
    await delay(150);
    actor.isFalling = true;
  }
});

function delay(duration) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve();
    }, duration);
  });
}
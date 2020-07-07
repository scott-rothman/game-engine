const UP = 87;
const DOWN = 83;
const LEFT = 65;
const RIGHT = 68;

export class Actor {
  constructor() {
    this.actor = document.querySelector('.actor');
    this.walkingDirection;
    this.positionY = this.actor.getBoundingClientRect().top;
    this.positionX = this.actor.getBoundingClientRect().left;

    const leftArmElem = document.querySelector('.actor__arm--left');
    const rightArmElem = document.querySelector('.actor__arm--right');

    this.leftArm = {
      elem: leftArmElem,
      rotation: 20,
    }

    this.rightArm = {
      elem: rightArmElem,
      rotation: -20,
    }
    
  }

  moveLeft() {
    this.actor.classList.add('facing-left');
    this.actor.classList.add('walking');
    this.actor.classList.remove('facing-right');
    this.walkingDirection = 'L';
    this.positionX = this.positionX - 10;
    this.actor.style.left = `${this.positionX}px`;
  }

  moveRight() {
    this.actor.classList.add('facing-right');
    this.actor.classList.add('walking');
    this.actor.classList.remove('facing-left');
    this.walkingDirection = 'R';
    this.positionX = this.positionX + 10;
    this.actor.style.left = `${this.positionX}px`;
  }

  idle() {
    this.actor.classList.remove('facing-right');
    this.actor.classList.remove('facing-left');
    this.actor.classList.remove('walking');
    this.actor.classList.add('idle');
  }

  shootLeft() {
    const rotationMin = 20;
    const rotateMax = 150;
    const rate = 5;

    let curRotation = this.leftArm
  }
}


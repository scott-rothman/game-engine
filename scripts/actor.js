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

  shootLeftArm() {
    const rotationMin = 20;
    const rotationMax = 150;
    const rate = 5;

    this.leftArm.rotation += rate;
    if (this.leftArm.rotation >= rotationMax) {
      this.leftArm.rotation = rotationMax;
    } else if (this.leftArm.rotation <= rotationMin) {
      this.leftArm.rotation = rotationMin;
    } 

    this.leftArm.elem.style.transform = `rotate(${this.leftArm.rotation}deg)`;    
  }

  shootRightArm() {
    const rotationMin = -20;
    const rotationMax = -150;
    const rate = -5;

    this.rightArm.rotation += rate;
    if (this.rightArm.rotation <= rotationMax) {
      this.rightArm.rotation = rotationMax;
    } else if (this.rightArm.rotation >= rotationMin) {
      this.rightArm.rotation = rotationMin;
    } 

    this.rightArm.elem.style.transform = `rotate(${this.rightArm.rotation}deg)`;    
  }

  lowerLeftArm() {
    const rotationMin = 20;
    const rotationMax = 150;
    const rate = 5;

    this.leftArm.rotation -= rate;
    if (this.leftArm.rotation >= rotationMax) {
      this.leftArm.rotation = rotationMax;
    } else if (this.leftArm.rotation <= rotationMin) {
      this.leftArm.rotation = rotationMin;
    } 

    this.leftArm.elem.style.transform = `rotate(${this.leftArm.rotation}deg)`;
  }

  lowerRightArm() {
    const rotationMin = -20;
    const rotationMax = -150;
    const rate = -5;

    this.rightArm.rotation -= rate;
    if (this.rightArm.rotation <= rotationMax) {
      this.rightArm.rotation = rotationMax;
    } else if (this.rightArm.rotation >= rotationMin) {
      this.rightArm.rotation = rotationMin;
    } 

    this.rightArm.elem.style.transform = `rotate(${this.rightArm.rotation}deg)`;
  }
}


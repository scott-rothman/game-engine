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

    this.jumpIsSet = true;
    this.isJumping = false;
    this.isFalling = false;
    this.curJumpDestination = 0;
    this.curJumpOrigin = 0;
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

  jump() {
    const JUMP_DURATION = 500;
    const JUMP_MAX = 300;

    const curPosY = window.innerHeight - this.actor.getBoundingClientRect().bottom;
    let JUMP_RATE = ((1 - (curPosY/300)) * 20) + 5;
    if (JUMP_RATE <= 5) {
      JUMP_RATE = 5;
    }

    console.log(JUMP_RATE);    

    if (this.jumpIsSet) {
      this.jumpIsSet = false;
      this.isJumping = true;
    }

    if (this.isJumping) {
      if (curPosY >= JUMP_MAX) {
        this.isJumping = false;
        this.isFalling = true;
      } else {
        let moveToY = curPosY + JUMP_RATE;
        this.actor.style.bottom = `${moveToY}px`;
      }
    }

    if (this.isFalling) {
      if (curPosY <= 0) {
        this.isFalling = false;
        this.jumpIsSet = true;
      } else {
        let moveToY = curPosY - JUMP_RATE;
        this.actor.style.bottom = `${moveToY}px`;
      }
    }
  }

  fall() {
    const curPosY = window.innerHeight - this.actor.getBoundingClientRect().bottom;
    let JUMP_RATE = ((1 - (curPosY/300)) * 20) + 5;
    if (JUMP_RATE <= 5) {
      JUMP_RATE = 5;
    }

    if (curPosY <= 0) {
      this.jumpIsSet = true;
    } else {
      let moveToY = curPosY - JUMP_RATE;
      this.actor.style.bottom = `${moveToY}px`;
    }

  }
}


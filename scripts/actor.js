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
}


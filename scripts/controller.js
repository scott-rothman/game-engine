const UP = 87;
const DOWN = 83;
const LEFT = 65;
const RIGHT = 68;
const SHOOT_LEFT = 97;
const SHOOT_RIGHT = 98;
const JUMP = 99;

export class Controller {
  constructor() {
    
    this.input = new Set([]);
    this.lastInput = '';

    this.buttonReleased = new CustomEvent("buttonReleased", {
      detail: {
        key: ''
      }
    });
    

    window.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case LEFT:
          this.input.add('L');
          break;
        case RIGHT:
            this.input.add('R');
          break;
        case SHOOT_LEFT:
          this.input.add('S_L');
          break;
        case SHOOT_RIGHT:
          this.input.add('S_R');
          break;
        case JUMP:
          this.input.add('J');
          break;
        default:
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case LEFT:
          this.input.delete('L');
          this.buttonReleased.detail.key = 'L';
          window.dispatchEvent(this.buttonReleased);
          break;
        case RIGHT:
          this.input.delete('R');
          this.buttonReleased.detail.key = 'R';
          window.dispatchEvent(this.buttonReleased);
          break;
        case SHOOT_LEFT:
          this.input.delete('S_L');
          this.buttonReleased.detail.key = 'S_L';
          window.dispatchEvent(this.buttonReleased);
          break;
        case SHOOT_RIGHT:
          this.input.delete('S_R');
          this.buttonReleased.detail.key = 'S_R';
          window.dispatchEvent(this.buttonReleased);
          break;
        case JUMP:
          this.input.delete('J');
          this.buttonReleased.detail.key = 'J';
          window.dispatchEvent(this.buttonReleased);
          break;
        default:
          break;
      }
    });
  }
}


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
          break;
        case RIGHT:
          this.input.delete('R');
          break;
        case SHOOT_LEFT:
          this.input.delete('S_L');
          break;
        case SHOOT_RIGHT:
          this.input.delete('S_R');
          break;
        case JUMP:
          this.input.delete('J');
          break;
        default:
          break;
      }
    });
  }
}


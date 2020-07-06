const UP = 87;
const DOWN = 83;
const LEFT = 65;
const RIGHT = 68;

export class Controller {
  constructor() {
    
    this.directions = new Set([]);

    window.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case LEFT:
          this.directions.add('L');
          break;
        case RIGHT:
            this.directions.add('R');
          break;
        default:
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case LEFT:
          this.directions.delete('L');
          break;
        case RIGHT:
          this.directions.delete('R');
          break;
        default:
          break;
      }
    });
  }
}


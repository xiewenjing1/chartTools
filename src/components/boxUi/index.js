import { boxSize } from './config/size';
import { nomalBorder } from './config/style';

export class CreatBox {
  constructor (options) {
    const { size, style, type } = options;
    this.boxSize = boxSize[size] || boxSize['middle'];
    this.boxBorder = style || nomalBorder;
    this.boxType = type || 'div';
    this.$box = null;
    this.boxId = 0;
  };
  creatBox () {
    this.$box = document.createElement(this.boxType);
    this.boxId++;
    this.$box.id = this.boxId;
  };
  addSize () {
    if (this.$box) {
      this.$box.style.height = this.boxSize.height;
      this.$box.style.width = this.boxSize.width;
      this.$box.style.backgroundColor = 'skyblue';
      this.$box.className = 'chartTest';
    }
  };
  addBorder () {
    if (this.$box) {
      this.$box.style.border = this.boxBorder;
    }
  };
  completeBox () {
    this.creatBox();
    this.addSize();
    this.addBorder();
    return this.$box;
  };
};

export default function rendBox (options) {
  const boxRend = new CreatBox(options || {});
  return boxRend.completeBox();
};

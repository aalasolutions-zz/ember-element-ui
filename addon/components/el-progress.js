import Component from '@glimmer/component';
import {computed} from "@ember/object";
import {htmlSafe} from '@ember/template';
import {tracked} from '@glimmer/tracking';

export default class ElProgressComponent extends Component {
  @tracked width;
  @tracked strokeWidth;
  @tracked showText = true;

  @computed('args.strokeWidth')
  get _strokeWidth(){
    return this.args.strokeWidth || 6;
  }

  @computed('args.width')
  get _width(){
    return this.args.width || 126;
  }

  @computed('args.type')
  get _type(){
    return this.args.type || 'line';
  }

  @computed('args.status', '_type')
  get iconClass() {
    if ((this._type || 'line') === 'line') {
      return this.args.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-close';
    } else {
      return this.args.status === 'success' ? 'el-icon-check' : 'el-icon-close';
    }
  }

  @computed('_strokeWidth', '_width')
  get relativeStrokeWidth() {
    return (this._strokeWidth / this._width * 100).toFixed(1);
  }

  @computed('relativeStrokeWidth')
  get trackPath() {
    const radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
    return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
  }

  @computed('relativeStrokeWidth')
  get perimeter() {
    const radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
    return 2 * Math.PI * radius;
  }

  @computed('args.{color,status}')
  get stroke() {
    let ret;
    if (this.args.color) {
      ret = this.args.color;
    } else {
      switch (this.args.status) {
        case 'success':
          ret = '#13ce66';
          break;
        case 'exception':
          ret = '#ff4949';
          break;
        default:
          ret = '#20a0ff';
      }
    }
    return ret;
  }

  @computed('args.{status,textInside}', 'showText', '_type')
  get className() {
    let classNames = '';

    if (this._type) {
      classNames += ` el-progress--${this._type}`;
    }
    if (this.args.status) {
      classNames += ` is-${this.args.status}`;
    } else {
      if (!this.showText) { // todo: default is true
        classNames += ` el-progress--without-text`;
      }
      if (this.args.textInside) {
        classNames += ` el-progress--text-inside`;
      }
    }

    return classNames;
  }

  @computed('args.textInside', 'showText')
  get showTextInside() {
    return this.showText && this.args.textInside;
  }

  @computed('args.status')
  get showStatus() {
    return !this.args.status;
  }

  @computed('argsstatus')
  get statusIsText() {
    return this.args.status === 'text';
  }

  @computed('_type')
  get isTypeLine() {
    return this._type === 'line';
  }

  @computed('_type')
  get isTypeCircle() {
    return this._type !== 'line';
  }

  @computed('args.textInside', 'showText')
  get progressText() {
    return !this.args.textInside && this.showText;
  }

  @computed('_strokeWidth')
  get strokeWidthStyle() {
    let _strokeWidth = this._strokeWidth;
    return htmlSafe(`height: ${_strokeWidth}px`);
  }

  @computed('args.{percentage,color}')
  get barStyle() {
    const style = {};
    style.width = this.args.percentage + '%';
    style.backgroundColor = this.args.color;
    return htmlSafe(`width: ${style.width}; background-color: ${style.backgroundColor}`);
  }

  @computed('_width')
  get circleStyle() {
    let width = this._width;
    return htmlSafe(`height: ${width}px; width: ${width}px`);
  }

  @computed('_type', '_strokeWidth', '_width')
  get progressTextStyle() {
    let size = this._type === 'line'
      ? 12 + this._strokeWidth * 0.4
      : this._width * 0.111111 + 2;
    return htmlSafe(`fontSize: ${size}px`);
  }

  @computed('args.percentage', 'perimeter')
  get circlePathStyle() {
    const perimeter = this.perimeter;

    let strokeDasharray = `${perimeter}px,${perimeter}px`;
    let strokeDashoffset = (1 - this.args.percentage / 100) * perimeter + 'px';
    let transition = 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease';

    return htmlSafe(`stroke-dasharray: ${strokeDasharray}; stroke-dashoffset: ${strokeDashoffset}; transition: ${transition}`);
  }
}

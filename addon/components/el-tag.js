import Component from '@glimmer/component';
import {action, computed} from "@ember/object";
import {tracked} from '@glimmer/tracking';

import transition from "../utils/transition";

export default class ElTagComponent extends Component {
  @tracked
  isClosed = false;

  @computed('args.{type,size}')
  get className() {
    let classNames = '';
    if (this.args.type) {
      classNames += ` el-tag--${this.args.type}`;
    }
    if (this.args.size) {
      classNames += ` el-tag--${this.args.size}`;
    }
    return classNames;
  }

  @action
  handleClose(dom) {

    let e = dom.target.closest('.el-tag');
    let transitionEvent = transition('animation');
    e.addEventListener(transitionEvent, () => {
      this.isClosed = true;
      if (typeof this.args.close === 'function') {
        this.args.close();
      }
    });
    e.classList.add('animate__animated');
    e.classList.add('animate__flipOutY');
  }
}

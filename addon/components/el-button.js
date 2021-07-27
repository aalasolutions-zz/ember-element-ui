import Component from '@glimmer/component';
import {action, computed} from "@ember/object";

export default class ElButtonComponent extends Component {

  @computed('args.{colors,size,disabled,autofocus}')
  get className() {

    let classNames = 'el-button';

    if (this.args.loading)
      classNames += ' is-loading';
    if (this.args.plain)
      classNames += ' is-plain';
    if (this.args.round)
      classNames += ' is-round';
    if (this.args.circle)
      classNames += ' is-circle';

    classNames += ' el-button--' + (this.args.color || 'default');

    if (this.args.size) {
      classNames += ` el-button--${this.args.size}`;
    }

    if (this.args.loading || this.args.disabled) {
      classNames += ` is-disabled`;
    }

    return classNames;
  }


  @computed('args.{icon,loading}')
  get showIcon() {
    return !!(this.args.icon && !this.args.loading);
  }


  @action
  click() {
    if (typeof this.args.click === 'function') {
      this.args.click();
    }
  }
}

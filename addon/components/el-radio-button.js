import Component from '@glimmer/component';
import {action, computed} from "@ember/object";
import {tracked} from '@glimmer/tracking';

export default class ElRadioButtonComponent extends Component {

  @computed('args.{model,label}')
  get isChecked() {
    return this.args.model === this.args.label;
  }

  @computed('args.size')
  get sizeClass() {
    return this.args.size ? 'el-radio-button--' + this.args.size : "";
  }

  @action
  changed(value, name) {
    if (typeof this.args.action === 'function') {
      this.args.action(value, name);
    }
  }
}

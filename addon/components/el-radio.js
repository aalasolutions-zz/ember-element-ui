import Component from '@glimmer/component';
import {action, computed} from "@ember/object";
import {tracked} from '@glimmer/tracking';

export default class ElRadioComponent extends Component {


  @tracked model = null;
  @tracked label = null;
  @tracked name = null;
  @tracked change = null;
  @tracked border = false;
  @tracked item = '';
  @tracked size = '';

  @computed('args.{model,label}')
  get isChecked() {
    return this.args.model === this.args.label;
  }

  @computed('args.size')
  get sizeClass() {
    return this.args.size ? 'el-radio--' + this.args.size : "";
  }

  @action
  changed(value, name) {
    if (typeof this.args.action === 'function') {
      this.args.action(value, name);
    }
  }
}

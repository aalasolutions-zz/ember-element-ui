import Component from '@glimmer/component';
import {action, computed} from "@ember/object";
import {tracked} from '@glimmer/tracking';

export default class ElCheckboxComponent extends Component {

  // todo: focus

  @tracked value = null;


  constructor(owner, args) {
    super(owner, args);
    this.value = this.modelGet();
  }

  @computed('args.{falseLabel,trueLabel}')
  get isLabelProvided() {
    return this.args.falseLabel || this.args.trueLabel;
  }

  @computed('args.{model,label,trueLabel,checked}')
  get isChecked() {
    if (typeof this.args.checked === "boolean") {
      return this.args.checked;
    }

    if (typeof this.args.model === "boolean") {
      return this.args.model;
    } else if (Array.isArray(this.args.model)) {
      return this.args.model.indexOf(this.args.label) > -1;
    } else if (this.args.model !== null && this.args.model !== undefined) {
      return this.args.model === this.args.trueLabel;
    }

    return !!this.args.model;
  }

  @computed('args.{size,parent,parent.size}')
  get checkboxSize() {
    let size = this.args.parent
      ? this.args.parent.size || this.args.size
      : this.args.size;

    return size ? 'el-checkbox-button--' + size : '';
  }

  @computed('args.indeterminate')
  get compTabIndex() {
    return this.args.indeterminate ? 0 : false;
  }

  @computed('args.indeterminate')
  get compRole() {
    return this.args.indeterminate ? 'checkbox' : false;
  }

  @computed('args.indeterminate')
  get compAriaChecked() {
    return this.args.indeterminate ? 'mixed' : false;
  }

  @computed('args.{min,max,parent}', 'isChecked')
  get isLimitDisabled() {
    if (this.args.parent) {
      return !!(this.args.parent.max || this.args.parent.min) &&
        (this.args.model.length >= this.args.parent.max && !this.isChecked) ||
        (this.args.model.length <= this.args.parent.min && this.isChecked);
    }

    return false

  }

  @computed('args.{parent,disabled,parent.disabled}', 'isLimitDisabled')
  get isDisabled() {
    return this.args.parent
      ? this.args.parent.disabled || this.args.disabled || this.isLimitDisabled
      : this.args.disabled;
  }

  @action
  changed(value, name) {
    if (this.get('action')) {
      this.get('action')(value, name);
    }
  }

  @action
  handleChange(ev) {
    if (this.isLimitExceeded) return;
    let value;
    if (typeof this.args.checked === "boolean") {
      value = !this.args.checked;
    } else {
      if (ev.target.checked) {
        value = this.args.trueLabel === undefined ? true : this.args.trueLabel;
      } else {
        value = this.args.falseLabel === undefined ? false : this.args.falseLabel;
      }
    }

    set(this, 'value', value);
    this.modelSet(this.value);
    if (typeof this.args.action === 'function') {
      this.args.action(this.value);
    }
  }


  modelGet() {

    if (this.parent) {
      const model = this.model;
      if (typeof model === "boolean") {
        return model;
      } else if (Array.isArray(model)) {
        return model.indexOf(this.label) > -1;
      } else if (model !== null && model !== undefined) {
        return model === this.trueLabel;
      }
    }

    return this.model;
  }

  modelSet(val) {
    if (this.parent) {
      this.isLimitExceeded = this.parent.min !== undefined && val.length < this.parent.min;
      this.isLimitExceeded = this.parent.max !== undefined && val.length > this.parent.max;

      if (Array.isArray(this.model) && this.isLimitExceeded === false && !this.model.includes(this.label)) {
        this.model = [...this.model, this.label];
      } else {
        const index = this.model.indexOf(this.label);
        this.model.splice(index, 1);
        this.model = [...this.model];
      }
    } else {
      this.value = val;
      this.model = val;
    }
  }

}

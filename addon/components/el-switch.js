import Component  from '@glimmer/component';
import {action, computed} from "@ember/object";
import {htmlSafe} from '@ember/template';
import { tracked } from '@glimmer/tracking';

export default class ElSwitchComponent extends Component {

  @tracked model;

  constructor(owner, args) {
    super(owner, args);
    this.model = this.args.model;
  }

  // disabled         : false,
  @computed ("args.disabled")
  get isDisabled() {
    return this.args.disabled || false;
  }
  // activeIconClass  : '',
  @computed ("args.activeIconClass")
  get activeIconClass() {
    return this.args.activeIconClass || '';
  }
  // inactiveIconClass: '',
  @computed ("args.inactiveIconClass")
  get inactiveIconClass() {
    return this.args.inactiveIconClass || '';
  }
  // activeText       : '',
  @computed ("args.activeText")
  get activeText() {
    return this.args.activeText || '';
  }
  // inactiveText     : '',
  @computed ("args.inactiveText")
  get inactiveText() {
    return this.args.inactiveText || '';
  }
  // activeValue      : true,
  @computed ("args.activeValue")
  get activeValue() {
    return this.args.activeValue || true;
  }
  // inactiveValue    : false,
  @computed ("args.inactiveValue")
  get inactiveValue() {
    return this.args.inactiveValue || false;
  }
  // validateEvent    : true,
  @computed ("args.validateEvent")
  get validateEvent() {
    return this.args.validateEvent || true;
  }
  // activeColor      : '',
  @computed ("args.activeColor")
  get activeColor() {
    return this.args.activeColor || '';
  }
  // inactiveColor    : '',
  @computed ("args.inactiveColor")
  get inactiveColor() {
    return this.args.inactiveColor || '';
  }

  get isChecked() {
    return !!this.model;
  }

  get notChecked() {
    return !this.model;
  }

  get isInactive() {
    return this.inactiveIconClass || this.inactiveText;
  }

  get notInactiveIconClass() {
    return !this.inactiveIconClass;
  }

  get isInactiveText() {
    return this.notInactiveIconClass && this.inactiveText;
  }

  get isActive() {
    return this.activeIconClass && this.activeText;
  }

  get notActiveIconClass() {
    return !this.activeIconClass;
  }

  get isActiveText() {
    return this.notActiveIconClass && this.activeText;
  }

  get spanStyle() {
    const color = this.model ? this.activeColor : this.inactiveColor;
    const width = this.width || 40;
    return htmlSafe(`background: ${color}; border-color: ${color}; width: ${width}px;`);
  }

  @action 
  handleAction () {
    if(!this.isDisabled)
    this.model  = !this.model;
  }

}

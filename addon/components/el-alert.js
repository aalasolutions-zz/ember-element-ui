import Component from '@glimmer/component';
import {action, computed} from "@ember/object";
import {tracked} from '@glimmer/tracking';

import transition from "../utils/transition";


export default class ElAlertComponent extends Component {

  @tracked TYPE_CLASSES_MAP = null;
  @tracked isClosed = false;

  constructor(owner, args) {
    super(owner, args);

    this.TYPE_CLASSES_MAP = {
      'success': 'el-icon-success',
      'warning': 'el-icon-warning',
      'error': 'el-icon-error'
    }
  }

  @computed('args.type')
  get typeClass() {
    return `el-alert--${(this.args.type || 'info')}`;
  }

  @computed('args.effect')
  get effectClass() {
    return `is-${(this.args.effect || 'light')}`;
  }

  @computed('args.type')
  get iconClass() {
    let typeClass = (this.args.type || 'info');
    return this.TYPE_CLASSES_MAP[typeClass] || 'el-icon-info'
  }

  @computed('args.description')
  get isBigIcon() {
    return this.args.description ? 'is-big' : '';
  }

  @computed('args.description')
  get isBoldTitle() {
    return this.args.description ? 'is-bold' : '';
  }

  @computed('args.closable')
  get isClosable() {
    return typeof this.args.closable === 'boolean' ? this.args.closable : true;
  }

  @action
  close(dom) {
    let e = dom.target.closest('.el-alert');

    let transitionEvent = transition('animation');
    e.addEventListener(transitionEvent, () => {
      this.isClosed = true;
      if (typeof this.args.action === 'function') {
        this.args.action();
      }
    });

    e.classList.add('animate__animated');
    e.classList.remove('animate__fadeIn');
    e.classList.add('animate__fadeOut');
  }

}

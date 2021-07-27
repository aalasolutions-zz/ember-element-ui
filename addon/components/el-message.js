import Component from '@glimmer/component';
import {computed,action} from "@ember/object";
import {htmlSafe} from '@ember/template';
import {inject as service} from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ElMessageComponent extends Component {
  @service('message') messagesService;
  @tracked messageObj;

  @computed('args.messageObj.dismiss')
  get _messageObj() {
    return this.args.messageObj || null;
  }

  @computed('_messageObj.dismiss')
  get className() {
    let classNames = '';
    if (this._messageObj.type && !this._messageObj.iconClass) {
      classNames += ` el-message--${this._messageObj.type}`;
    }
  
    if (this._messageObj.dismiss) {
      classNames += ` fadeOutUpElCustom `;
    } else {
      classNames += ` fadeInDownElCustom `;
    }
    return classNames;
  }

  @computed('_messageObj')
  get typeClass() {
    let typeMap = {
      success: 'success',
      info: 'info',
      warning: 'warning',
      error: 'error',
    };
    return this._messageObj.type && !this._messageObj.iconClass
      ? `el-message__icon el-icon-${typeMap[this._messageObj.type]}`
      : '';
  }
  @computed('_messageObj')
  get messageHTML() {
    return htmlSafe(this._messageObj.message);
  }

  @action
  close() {
    this.close();
  }
  close() {
    this.messagesService.removeMessage(this._messageObj);
  }
  @action
  mouseEnter() {
    if (this._messageObj.autoClear) {
      this.messagesService.clearTimer(this._messageObj);
    }
  }
  @action
  mouseLeave() {
    if (this._messageObj.autoClear) {
      this.messagesService.startTimer(this._messageObj);
    }
  }
};

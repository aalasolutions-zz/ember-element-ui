import Component from '@glimmer/component';
import {computed,action, set} from "@ember/object";
import {inject as service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { and } from '@ember/object/computed';

export default class ElMessageBoxComponent extends Component {
  @tracked messageObj;

  constructor(owner, args) {
    super(owner, args);
    this.messageObj = this._messageObj
    // this.args.element.focus();
  }

  @service('message-box') messagesService;

  @computed('args.messageObj')
  get _messageObj() {
    return this.args.messageObj || null;
  }

  // attributeBindings: ['role',
  //   'ariaModal:aria-modal',
  //   'ariaLabel',
  //   'tabindex',
  // ],
  // @tracked ariaModal =true
  // @tracked tabindex= -1

  @computed('title')
  get ariaLabel() {
    return this.args.title || 'dialog';
  }

  @computed('_messageObj.dismiss')
  get className() {
    let classNames = '';

    if (this._messageObj.dismiss) {
      classNames += ` fadeOut50 `;
    } else {
      classNames += ` fadeIn50 `;
    }

    return classNames;
  }

  @computed('_messageObj')
  get icon() {
    let typeMap = {
      success: 'success',
      info: 'info',
      warning: 'warning',
      error: 'error',
    };
    let type = this._messageObj.type;
    return (
      this._messageObj.iconClass ||
      (type && typeMap[type] ? `el-icon-${typeMap[type]}` : '')
    );
  }

  @and('_messageObj.center', 'icon') isIconCenter;
  @computed('_messageObj', 'icon')
  get isIconCenter2() {
    let icon = this.icon;
    let center = this._messageObj.center;
    let message = this._messageObj.message;

    return icon && !center && message;
  }

  @computed('_messageObj')
  get confirmButtonClasses() {
    return `el-button--primary ${this._messageObj.confirmButtonClass}`;
  }

  @computed('_messageObj')
  get cancelButtonClasses() {
    return `${this._messageObj.cancelButtonClass}`;
  }

  @computed('_messageObj.dismiss')
  get getClassNameForBox() {
    let classNames = 'animated ';
    if (this._messageObj.customClass) {
      classNames += ' ' + this._messageObj.customClass;
    }
    if (this._messageObj.center) {
      classNames += ' el-message-box--center';
    }
    if (this._messageObj.dismiss) {
      classNames += ` fadeOutUpElCustomBox `;
    } else {
      classNames += ` fadeInDownElCustomBox `;
    }

    return classNames;
  }

  // didInsertElement(){
  //   // get(this, 'element').focus();
  //   this.args.element.focus()
  // }

  doClose() {
    // this.onClose && this.onClose();

    // get(this, 'messagesService').removeMessage(get(this, 'messageObj'));
    this.messagesService.removeMessage(this._messageObj);
    if (this.lockScroll) {
      setTimeout(this.restoreBodyStyle, 200);
    }

    set(this, 'opened', true);

    this.doAfterClose();
    // setTimeout(() => {
    //   if (this.action) this.callback(this.action, this);
    // });
  }

  doAfterClose() {
    let currentMsg = this._messageObj;
    if (currentMsg.resolve) {
      let action = this.args.action;
      if (action === 'confirm') {
        if (this.currentMsg.showInput) {
          currentMsg.resolve({ value: this.currentMsg.inputValue, action });
        } else {
          currentMsg.resolve(action);
        }
      } else if (
        currentMsg.reject &&
        (action === 'cancel' || action === 'close')
      ) {
        currentMsg.reject(action);
      }
    }
  }

  handleAction(action) {
    if (
      this._messageObj.type === 'prompt' &&
      action === 'confirm' &&
      !this.validate()
    ) {
      return;
    }
    set(this, 'action', action);
    if (typeof this._messageObj.beforeClose === 'function') {
      // this.close = this.doClose();
      this._messageObj.beforeClose(action, this._messageObj, this);
    } else {
      this.doClose();
    }
  }

  validate() {

    if (this._messageObj.type === 'prompt') {
      const inputPattern = this._messageObj.inputPattern;
      if (
        inputPattern &&
        !inputPattern.test(this._messageObj.inputValue || '')
      ) {
        set(this, 'errorMessage', this._messageObj.inputErrorMessage);
        set(this, 'inputErrorClass', 'invalid');
        return false;
      }
      const inputValidator = this._messageObj.inputValidator;
      if (typeof inputValidator === 'function') {
        const validateResult = inputValidator(this._messageObj.inputValue);
        if (validateResult === false || typeof validateResult === 'string') {
          set(this, 'errorMessage', this._messageObj.inputErrorMessage);
          set(this, 'inputErrorClass', 'invalid');
          return false;
        }
      }
    }

    set(this, 'errorMessage', '');
    set(this, 'inputErrorClass', '');
    return true;
  }

  @action
  handleWrapperClick() {
    if (this.args.closeOnClickModal) {
      this.handleAction(
        this._messageObj.distinguishCancelAndClose ? 'close' : 'cancel'
      );
    }
  }
  // handleInputEnter(e,f) {
  //   console.log(e, f);
  //   // if (get(this, 'inputType') !== 'textarea') {
  //   //   return this.handleAction('confirm');
  //   // }
  // },

  // getFirstFocus() {
  //   const btn = this.$el.querySelector('.el-message-box__btns .el-button');
  //   const title = this.$el.querySelector('.el-message-box__btns .el-message-box__title');
  //   return btn || title;
  // },
  // getInputElement() {
  //   const inputRefs = this.$refs.input.$refs;
  //   return inputRefs.input || inputRefs.textarea;
  // },
  @action
  close() {
    this.handleAction(
      this._messageObj.distinguishCancelAndClose ? 'close' : 'cancel'
    );
  }

  @action
  handleActions(action) {
    this.handleAction(action);
  }

  click(e) {
    if (
      e.target.classList.contains('el-message-box__wrapper') &&
      this._messageObj.closeOnClickModal
    ) {
      this.handleAction(
        this._messageObj.distinguishCancelAndClose ? 'close' : 'cancel'
      );
    }
  }
  keyUp(e) {
    if (e.keyCode === 27 && this._messageObj.closeOnPressEscape) {
      this.handleAction(
        this._messageObj.distinguishCancelAndClose ? 'close' : 'cancel'
      );
    }
  }
};

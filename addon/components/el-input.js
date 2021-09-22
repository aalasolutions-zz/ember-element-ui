import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action, computed, set} from "@ember/object";

export default class ElInputComponent extends Component{

  @tracked value;

  constructor(owner, args) {
    super(owner, args);
    this.value = this._value;
  }

  @computed('args.value')
  get _value () {
    return this.args.value || null;
  }

  @computed('args.size')
  get _size () {
    return this.args.size || null;
  }

  @computed('args.resize')
  get _resize () {
    return this.args.resize || null;
  }

  @computed('args.disabled')
  get _disabled () {
    return this.args.disabled || false;
  }

  @computed('args.readonly')
  get _readonly () {
    return this.args.readonly || false;
  }

  @computed('args.type')
  get _type () {
    return this.args.type || 'text';
  }

  @computed('args.autosize')
  get _autosize () {
    return this.args.autosize || false;
  }

  @computed('args.autocomplete')
  get _autocomplete () {
    return this.args.autocomplete || 'off';
  }

  @computed('args.validateEvent')
  get _validateEvent () {
    return this.args.validateEvent || true;
  }

  @computed('args.suffixIcon')
  get _suffixIcon () {
    return this.args.suffixIcon || null;
  }

  @computed('args.prefixIcon')
  get _prefixIcon () {
    return this.args.prefixIcon || null;
  }

  @computed('args.label')
  get _label () {
    return this.args.label || null;
  }

  @computed('args.clearable')
  get _clearable () {
    return this.args.clearable || false;
  }

  @computed('args.tabindex')
  get _tabindex () {
    return this.args.tabindex || '';
  }

  @computed('args.placeholder')
  get _placeholder () {
    return this.args.placeholder || '';
  }

  @computed('args.prepend')
  get _prepend () {
    return this.args.prepend || null;
  }

  @computed('args.append')
  get _append () {
    return this.args.append || null;
  }

  @computed('args.customClass')
  get _customClass () {
    return this.args.customClass || '';
  }

  get _isGroup () {
    return !!(this._prepend || this._append)
  }

  @computed('args.prefix')
  get _isPrefix () {
    return !!(this.prefix || this._prefixIcon)
  }

  @computed('args.suffix')
  get _isSuffix () {
    return !!(this.suffix || this._suffixIcon)
  }

  get _showClear () {
    return this._clearable &&
      !this._disabled &&
      !this._readonly &&
      this.value !== ''
  }

  @computed('args.{validateState,needStatusIcon}')
  get _isShowSuffixIcon () {
    return !!(
      this._suffixIcon || 
      this._showClear || 
      (
        this.validateState && 
        this.needStatusIcon)
      );
  }

  get _getClassName () {

    let classNames = '';
    classNames += this._type === 'textarea' ? 'el-textarea' : 'el-input';

    if (this._size) {
      classNames += ` el-input--${this._size}`;
    }

    return classNames;
  }


  @action
  clear() {
    set(this, 'value', '')
  }

}

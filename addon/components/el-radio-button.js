import Component from '@ember/component';
import layout from '../templates/components/el-radio-button';
import {computed} from '@ember/object';

export default Component.extend({
  layout,

  tagName: 'label',
  classNames: ['el-radio-button'],

  classNameBindings: [
    'isChecked:is-checked',
    'disabled:is-disabled',
    'sizeClass'
  ],
  attributeBindings: [
    'role',
    'isChecked:aria-checked'
  ],
  role: 'radio',

  model: null,
  label: null,
  name: null,
  change: null,
  item: '',

  size: '',

  isChecked: computed('model', 'label', function () {
    return this.get('model') === this.get('label');
  }),

  sizeClass: computed('size', function () {

    if (this.get('size')) {
      return 'el-radio-button--' + this.get('size');
    }
    // return this.get('model') === this.get('label');
  }),

  actions: {
    changed(value, name) {
      if (this.get('action')) {
        this.get('action')(value, name);
      }
    }
  }
});

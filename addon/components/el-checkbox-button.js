import Component from '@ember/component';
import layout from '../templates/components/el-checkbox-button';
import {computed} from '@ember/object';

export default Component.extend({
  layout,

  tagName: 'label',
  classNames: ['el-checkbox-button '],

  classNameBindings: [
    'isChecked:is-checked',
    'disabled:is-disabled',
    'sizeClass'
  ],
  attributeBindings: [
    'role',
    'isChecked:aria-checked'
  ],
  role: 'checkbox',

  model: null,
  name: null,
  change: null,
  item: '',

  size: '',

  isChecked: computed('model', 'label', function () {
    return !!this.get('model');
  }),

  sizeClass: computed('size', function () {
    return this.get('size') ? 'el-checkbox-button--' + this.get('size') : "";
  }),

  actions: {
    changed(value, name) {
      if (this.get('action')) {
        this.get('action')(value, name);
      }
    }
  }
});

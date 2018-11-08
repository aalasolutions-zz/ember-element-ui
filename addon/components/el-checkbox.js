import Component from '@ember/component';
import layout from '../templates/components/el-checkbox';
import {computed} from '@ember/object';

export default Component.extend({
  layout,

  tagName: 'label',
  classNames: ['el-checkbox'],

  classNameBindings: [
    'isChecked:is-checked',
    'disabled:is-disabled',
    'border:is-bordered',
    'sizeClass',
  ],

  attributeBindings: [
    'role',
    'isChecked:aria-checked'
  ],
  role: 'checkbox',

  model: null,
  name: null,
  change: null,
  border: false,
  item: '',
  size: '',

  isChecked: computed('model', function () {
    return !!this.get('model');
  }),

  sizeClass: computed('size', function () {

    if(this.get('size')){
      return 'el-checkbox--' + this.get('size');
    }
  }),
  actions: {
    changed(value, name) {
      console.log(name, value, this.get('model'), this.get('label'));
      if (this.get('action')) {
        this.get('action')(value, name);
      }
    }
  }
});

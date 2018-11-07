import Component from '@ember/component';
import layout from '../templates/components/el-radio-button';
import {computed} from '@ember/object';
import {isEqual} from '@ember/utils';
import {run} from '@ember/runloop';

export default Component.extend({
  layout,

  tagName: 'label',
  classNames: ['el-radio-button'],

  classNameBindings: [
    'isChecked:is-checked',
    'disabled:is-disabled',
    'sizeClass'
  ],

  model: null,
  label: null,

  change: null,
  item: '',

  size: '',

  isChecked: computed('model', 'label', function () {
    console.warn(this.get('model') , this.get('label'), this.get('model') === this.get('label'));
    return this.get('model') === this.get('label');
  }),

  sizeClass: computed('size', function () {

    if(this.get('size')){
      return 'el-radio-button--' + this.get('size');
    }
    // return this.get('model') === this.get('label');
  }),

  actions: {
    changed(value, name) {
      if (this.get('change')) {
        this.get('change')(value, name);
      }
    }
  }
});

import Component from '@ember/component';
import layout from '../templates/components/el-radio';
import {computed} from '@ember/object';
import {isEqual} from '@ember/utils';
import {run} from '@ember/runloop';

export default Component.extend({
  layout,

  tagName: 'label',
  classNames: ['el-radio'],

  classNameBindings: [
    'isChecked:is-checked',
    'disabled:is-disabled',
    'border:is-bordered',
    'sizeClass',
  ],

  model: null,
  label: null,

  change: null,
  border: false,
  item: '',
  size: '',

  isChecked: computed('model', 'label', function () {
    return this.get('model') === this.get('label');
  }),

  sizeClass: computed('size', function () {

    if(this.get('size')){
      return 'el-radio--' + this.get('size');
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

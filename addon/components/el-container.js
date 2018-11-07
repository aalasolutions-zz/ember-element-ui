import Component from '@ember/component';
import layout from '../templates/components/el-container';
import {computed, get} from "@ember/object";

export default Component.extend({
  layout,
  tagName: 'section',
  direction: null,
  classNames: ['el-container'],
  classNameBindings: ['getClassName'],

  getClassName: computed('direction', function () {
    if (get(this, 'direction') === 'vertical') {
      return 'is-vertical';
    }
  }),


});

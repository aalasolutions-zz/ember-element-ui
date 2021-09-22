import Component from '@ember/component';
import layout from '../templates/components/el-card-body';
import {computed, get} from "@ember/object";
import {htmlSafe} from '@ember/template';

export default Component.extend({
  layout,
  classNames: ['el-card__body'],

  attributeBindings: ['style'],
  style: computed('bodyStyle', function () {
    return htmlSafe(get(this, 'bodyStyle'));
  }),

});

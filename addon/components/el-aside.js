import Component from '@ember/component';
import layout from '../templates/components/el-aside';
import {computed, get} from "@ember/object";
import {htmlSafe} from '@ember/template';

export default Component.extend({
  layout,
  tagName: 'aside',
  classNames: ['el-aside'],
  width: '300px',

  attributeBindings: ['style'],

  style: computed('width', function () {
    return htmlSafe(get(this, 'width'));
  }),

});

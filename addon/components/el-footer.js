import Component from '@ember/component';
import layout from '../templates/components/el-footer';
import {computed, get} from "@ember/object";
import {htmlSafe} from '@ember/template';

export default Component.extend({
  layout,
  tagName: 'footer',
  classNames: ['el-footer'],
  height: '60px',


  attributeBindings: ['style', 'dataComponent:data-component'],
  dataComponent: 'el-footer',

  style: computed('height', function () {
    return htmlSafe(get(this, 'height'));
  }),
});

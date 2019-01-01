import Component from '@ember/component';
import layout from '../templates/components/el-table-colgroup';

export default Component.extend({
  layout,
  tagName: 'col',

  attributeBindings: ['width'],
  width: null,
});

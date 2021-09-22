import Component from '@ember/component';
import layout from '../templates/components/el-radio-group';

export default Component.extend({
  layout,
  classNames: ['el-radio-group'],
  model: null,
  size: '',
  fill: '#409EFF',


  attributeBindings: ['role'],
  role: 'radiogroup',
});

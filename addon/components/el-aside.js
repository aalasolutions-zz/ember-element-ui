import Component from '@ember/component';
import layout from '../templates/components/el-aside';

export default Component.extend({
  layout,
  tagName: 'aside',
  classNames: ['el-aside'],
  width: '300px',
});

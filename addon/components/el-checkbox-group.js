import Component from '@ember/component';

export default Component.extend({
  classNames: ['el-checkbox-group'],
  attributeBindings: [
    'role',
    'ariaLabel',
    'style'
  ],
  role: 'group',
  ariaLabel: "checkbox-group",

  model: null,
  disabled: false,
  min: Number,
  max: Number,
  size: null,
  textColor: '',
  fill: '#409EFF',

  parent: null,
  init() {
    this._super(...arguments);
    this.set('parent', this);
  },


});

import Component from '@ember/component';
import layout from '../templates/components/el-switch';
import { computed, get, set } from "@ember/object";
import { htmlSafe } from '@ember/template';

export default Component.extend({
  layout,
  classNames       : ['el-switch'],
  tagName          : 'label',

  id               : '',
  name             : '',
  disabled         : false,
  width            : '',
  activeIconClass  : '',
  inactiveIconClass: '',
  activeText       : '',
  inactiveText     : '',
  activeValue      : true,
  inactiveValue    : false,
  validateEvent    : true,
  activeColor      : '',
  inactiveColor    : '',
  model            : false,



  isChecked: computed('model', function () {
    return !!this.get('model');
  }),

  notChecked: computed('model', function () {
    return !!!this.get('model');
  }),

  isInactive: computed.or('inactiveIconClass', 'inactiveText'),
  notinactiveIconClass: computed('inactiveIconClass' ,function () {
    return !!!this.get('inactiveIconClass');
  }),
  isInactiveText: computed.and('notinactiveIconClass', 'inactiveText'),


  isActive: computed.or('activeIconClass', 'activeText'),
  notActiveIconClass: computed('isActive', function () {
    return !!!this.get('activeIconClass');
  }),
  isActiveText: computed.and('notActiveIconClass', 'activeText'),


  backgroundColor: computed("isChecked", "inactiveColor","activeColor", function () {
    let color =  this.get("model") ? this.get("activeColor"):this.get("inactiveColor")
    return htmlSafe(`background: ${color}; border-color:${color};`);
  }),

  getWidth: computed("width", "isChecked", function () {
    let width = this.get("width")
    if (width=='') { width = 40; }
    return htmlSafe(`width: ${width}px;`);
  })


});

import Component from '@ember/component';
import layout from '../templates/components/el-divider';
import { computed, get } from "@ember/object";

export default Component.extend({
  layout,
  classNames       : ['el-divider'],
  classNameBindings: ['getClassName'],


  direction      : "horizontal",
  contentPosition: "center",

  getClassName: computed('direction', function () {
    return 'el-divider--' + get(this, 'direction') ;
  }),
});

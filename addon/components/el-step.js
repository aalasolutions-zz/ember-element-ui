import Component from '@ember/component';
import layout from '../templates/components/el-step';
import { computed, get, set } from "@ember/object";

export default Component.extend({
  layout,
  classNames    : ['el-step'],
  title         : '',
  icon          : "",
  description   : "",
  status        : "",
  index         : -1,
  lineStyle     : {},
  internalStatus: '',
  didReceiveAttrs() {
    get(this, "stepsIncrement")();
  },

  cssClassHandler: computed("simple", "direction", function () {
    let classes = '';
    classes += get(this, "simple") ? 'el-steps--simple' : `el-steps--${get(this, "direction")}` + " ";
    return classes;

  }),

});

import Component from '@ember/component';
import { computed, get, set } from "@ember/object";
import layout from '../templates/components/el-steps';
import EmberObject from '@ember/object';

export default Component.extend({
  layout,
  classNames   : ['el-steps'],
  space        : null,
  active       : null,
  alignCenter  : null,
  simple       : null,
  steps        : 0,
  stepOffset   : null,
  direction    : 'horizontal',
  finishStatus : 'finish',
  processStatus: 'process',
  parentAtribute: null,
  didReceiveAttrs() {
    set(this, "stepoffset", 0);

    // let allAtributes = [
    //   "space",
    //   "active",
    //   "alignCenter",
    //   "simple",
    //   "steps",
    //   "stepOffset",
    //   "direction",
    //   "finishStatus",
    //   "processStatus"
    // ];

    // let a = allAtributes.map((obj) => {
    //   return EmberObject.create({ [obj]: get(this, `${obj}`) });
    // });
    // set(this, "parentAtribute", a);
  },


  directionHandler: computed("simple", "direction", function () {
    return get(this, "simple") ? 'el-steps--simple' : `el-steps--${get(this, "direction")}`;
  }),


  actions: {

    stepsIncrement() {
      set(this, "steps", get(this, "steps") + 1);
      return get(this,"steps");
    }
  }

});

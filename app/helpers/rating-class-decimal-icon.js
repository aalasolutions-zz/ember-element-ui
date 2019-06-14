import Helper from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default Helper.extend({

  compute(params) {

      let item = params[0];
      let value = params[1];
      let allowHalf = params[2];
      let pointerAtLeftHalf = params[3];
      let currentValue = params[4];
      let rateDisabled = params[5];
      let showWhenAllowHalf = rateDisabled && allowHalf && pointerAtLeftHalf && item - 0.5 <= currentValue && item > currentValue;
      return  showWhenAllowHalf;

  }
});

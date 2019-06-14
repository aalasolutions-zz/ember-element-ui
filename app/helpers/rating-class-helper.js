import Helper from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default Helper.extend({

  compute(params) {
      let item          = params[0];
      let classes       = params[1];
      let style         = params[2];
      let lowThreshold  = params[3];
      let highThreshold = params[4];
      let max           = params[5];
      let colors        = params[6];
      let currentValue  = params[7];
      let color         = "rgb(247, 186, 42)";
      if (style) {
        if (colors.length == 3) {
          if (currentValue <= lowThreshold) {
            color = colors[0];
          } else if (currentValue <= highThreshold) {
            color = colors[1];
          } else {
            color = colors[2];
          }
          return htmlSafe(`color: ${color};`)
        }
        if (classes[item - 1] == "el-icon-star-on") {
          return htmlSafe(`color: ${color};`)
        }
        return;
      }

      return classes[item - 1];
  }
});

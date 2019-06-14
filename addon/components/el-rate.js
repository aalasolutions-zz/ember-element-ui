import Component from '@ember/component';
import layout from '../templates/components/el-rate';
import { computed } from "@ember/object";
import { htmlSafe } from '@ember/template';
import { typeOf } from '@ember/utils';

export default Component.extend({
  layout,
  classNames: ['el-rate'],

  voidIconClass        : 'el-icon-star-off',
  colors               : ["rgb(247, 186, 42)"],
  voidColor            : '#C6D1DE',
  disabledVoidColor    : '#EFF2F7',
  iconClasses          : ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'],
  disabledVoidIconClass: null,
  textColor            : '#1f2d3d',
  texts                : [],
  value                : 0,
  lowThreshold         : 2,
  highThreshold        : 4,
  max                  : 5,
  disabled             : false,
  allowHalf            : false,
  showText             : false,
  showScore            : false,
  scoreTemplate        : '{value}',
  pointerAtLeftHalf    : true,
  hoverIndex: -1,

  currentValue: computed('value', function () {
    return  this.get("value");
  }),

  rateDisabled: computed("value", function () {
    return !!this.get("disabled") ;
  }),

  disabledVoidIconClassMap: computed("voidIconClass","currentValue", function () {
    let disabledVoidIconClass = this.get("disabledVoidIconClass");
    if (disabledVoidIconClass == null) {
      this.set("disabledVoidIconClass", this.get("voidIconClass"));
    }
  }),

  valueDecimal:computed("value",function() {
    return this.get("value") * 100 - Math.floor(this.get("value")) * 100;
  }),

  text: computed('value',"currentValue", function () {
    let result = '';
    if (this.get("showScore")) {
      result = this.get("scoreTemplate").replace(/\{\s*value\s*\}/, this.get("rateDisabled")
        ? this.get("value")
        : this.get("currentValue"));
    } else if (this.get("showText")) {
      result = this.get("texts")[Math.ceil(this.get("currentValue")) - 1];
    }
    return result;
  }),

  decimalStyle: computed("rateDisabled", function(){
    let width = '';
    if (this.get("rateDisabled")) {
      width = `${this.get("valueDecimal")}%`;
    } else if (this.get("allowHalf")) {
      width = '50%';
    }
    let color = this.get("colorMap");
    return htmlSafe(`color: ${color}; width: ${width};`);

  }),

  activeColor: computed("currentValue", function () {
    return this.getValueFromMap(this.get("currentValue"), this.get("colorMap"));
  }),

  maxNumberOfTimes: computed('max', function () {
    let max = this.get("max");
    let maxObj = [];

      for (let i = 0; i < max; i++){
        maxObj.push(i+1);
      }
    return maxObj;
  }),

  classMap: computed("iconClasses", "value", function () {
    let iconClasses = this.get("iconClasses");
    return Array.isArray(iconClasses) ? {
      [this.get("lowThreshold")]: iconClasses[0],
      [this.get("highThreshold")]: { value: iconClasses[1], excluded: true },
      [this.get("max")]: iconClasses[2]
      } : this.get("iconClasses");
  }),

  decimalIconClass: computed("classMap", function() {
    return this.getValueFromMap(this.get("value"), this.get("classMap"));
  }),

  activeClass: computed("classMap", "currentValue", function () {
    return this.getValueFromMap(this.get("currentValue"), this.get("classMap"));
  }),

  colorMap: computed(function () {
    let colors = this.get("colors");
    let color = null;

    if (colors.length == 3) {
      if (this.get("currentValue") <= this.get("lowThreshold")) {
        color = colors[0];
      } else if (this.get("currentValue") <= this.get("highThreshold")) {
        color = colors[1];
      } else {
        color = colors[2];
      }
    } else {
      color = colors[0];
    }
    return color;
  }),

  voidClass: computed("classMap", "currentValue", function () {
    return this.get("rateDisabled") ? this.get("disabledVoidIconClass") : this.get("voidIconClass");
  }),

  classes: computed('currentValue',"voidClass", function () {
    let result = [];
    let i = 0;
    let threshold = this.get("currentValue");

    if (this.get("allowHalf") && this.get("currentValue") !== Math.floor(this.get("currentValue"))) {
      threshold--;
    }

    for (; i < threshold; i++) {
      result.push(this.get("activeClass"));
    }
    for (; i < this.max; i++) {
      result.push(this.get("voidClass"));
    }
    return result;
  }
  ),

  showTextScore: computed.or("showText", "showScore"),

  textSpanStyle: computed("textColor","text", function () {
    let color = this.get("textColor");
    return htmlSafe(`color: ${color};`)

  }),

  iconStyle: computed("value", function () {
    return this.getIconStyle();
  }),

  getValueFromMap(value, map) {
    const matchedKeys = Object.keys(map)
      .filter(key => {
        const excluded = false;
        return excluded ? value < key : value <= key;
      })
      .sort((a, b) => a - b);
    const matchedValue = map[matchedKeys[0]];
    if (typeOf(matchedValue) == "object") {
      return matchedValue.value;
    } else {
      return (matchedValue || '');
    }
  },

  spanCursor: computed("rateDisabled", function () {
    let rateDisabled = this.get("rateDisabled");
    if (rateDisabled) {
      return htmlSafe(`cursor:auto;`)
    } else {
      return htmlSafe(`cursor:pointer;`)
    }

  }),

  actions: {

    setCurrentValue(item) {
      if (this.get("rateDisabled")) {
        return;
      }
      this.set("currentValue", item);
    },

    resetCurrentValue() {

      this.set("currentValue", this.get("value"));
    },

    selectValue(item) {
      if (this.get("rateDisabled")) {
        return;
      }
      this.set("value", item);
    }
}
});











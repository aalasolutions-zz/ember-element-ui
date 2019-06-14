import Controller from '@ember/controller';

export default Controller.extend({
  tableAttributes: [
    { attribute: 'value', desc: "binding value", type: "number", val: '-', def: '0' },
    { attribute: 'max', desc: "max rating score", type: "number", val: '-', def: '5' },
    { attribute: 'disabled', desc: "whether Rate is read-only", type: "boolean", val: '-', def: 'false' },
    { attribute: 'allowHalf	', desc: "whether picking half start is allowed", type: "boolean", val: '-', def: 'false' },
    { attribute: 'lowThreshold	', desc: "threshold value between low and medium level. The value itself will be included in low level", type: "number", val: '-', def: '2' },
    { attribute: 'highThreshold		', desc: "threshold value between medium and high level. The value itself will be included in high level", type: "number", val: '-', def: '4' },
    { attribute: 'colors', desc: "colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color", type: "array/object	", val: '-', def: '#F7BA2A' },
    { attribute: 'voidColor', desc: "color of unselected icons	", type: "string", val: '-', def: '	#C6D1DE' },
    { attribute: 'iconClasses', desc: "class names of icons. If array, ot should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon class", type: "array/object	", val: '-', def: "['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on']" },
    { attribute: 'voidIconClass', desc: "class name of unselected icons", type: "string", val: '-', def: "el-icon-star-off" },
    { attribute: 'disabledVoidIconClass', desc: "class name of unselected read-only icons", type: "string", val: '-', def: "el-icon-star-on" },
    { attribute: 'showText	', desc: "whether to display texts", type: "boolean", val: '-', def: "false" },
    { attribute: 'showScore', desc: "whether to display current score. show-score and show-text cannot be true at the same time", type: "string", val: '-', def: "#1F2D3D" },
    { attribute: 'textColor	', desc: "color of texts	", type: "boolean", val: '-', def: "false" },
    { attribute: 'texts	', desc: "text array", type: "array", val: '-', def: "-" },
  ],
  colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
  colors2: ['#99A9BF', '#F7BA2A', 'green'],
  texts: ['oops', 'disappointed', 'normal', 'good', 'great'],
  iconClasses: ['el-icon-warning', 'el-icon-warning', 'el-icon-success'],
  value1: 4,
  value2: 0,
});

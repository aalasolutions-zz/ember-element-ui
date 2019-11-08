import Controller from '@ember/controller';
import {computed} from "@ember/object";

export default Controller.extend({
  checked: true,

  checkList: ['selected and disabled', 'Option A'],

  cityOptions: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
  checkedCities: ['Shanghai', 'Beijing'],

  cityOptionsInt: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
  checkedCitiesInt: ['Shanghai', 'Beijing'],

  checkedCitiesButton1: ['Shanghai',],
  checkedCitiesButton2: ['Shanghai',],
  checkedCitiesButton3: ['Shanghai',],
  checkedCitiesButton4: [],




  checked1: true,
  checked2: false,
  checked3: true,
  checked4: false,

  checkboxGroup1: [],
  checkboxGroup2: [],

  cbAttributes: [
    {attribute: 'model', desc: "binding value", type: "string / number / boolean", val: '-', def: '-'},
    {attribute: 'label', desc: "value of the Checkbox when used inside a checkbox-group", type: "string / number / boolean", val: '-', def: '-'},
    {attribute: 'trueLabel', desc: "value of the Checkbox if it's checked", type: "string / number", val: '-', def: '-'},
    {attribute: 'falseLabel', desc: "value of the Checkbox if it's not checked	", type: "string / number", val: '-', def: '-'},
    {attribute: 'disabled', desc: "whether the Checkbox is disabled", type: "boolean", val: '-', def: 'false'},
    {attribute: 'border', desc: "whether to add a border around Checkbox", type: "boolean", val: '-', def: 'false'},
    {attribute: 'size', desc: "size of the Checkbox, only works when border is true", type: "string", val: 'medium / small / mini', def: '-'},
    {attribute: 'name', desc: "native 'name' attribute", type: "string", val: '-', def: '-'},
    {attribute: 'checked', desc: "if the Checkbox is checked", type: "boolean", val: '-', def: 'false'},
    {attribute: 'indeterminate', desc: "same as indeterminate in native checkbox", type: "boolean", val: '-', def: 'false'},
  ],
  cbEvents: [
    {attribute: 'action', desc: "triggers when the binding value changes", type: "the updated value"},
  ],

  cbgAttributes: [
    {attribute: 'model', desc: "binding value", type: "array", val: '-', def: '-'},
    {attribute: 'size', desc: "size of the Checkbox, only works when border is true", type: "string", val: 'medium / small / mini', def: '-'},
    {attribute: 'disabled', desc: "whether the Checkbox is disabled", type: "boolean", val: '-', def: 'false'},
    {attribute: 'min', desc: "minimum number of checkbox checked", type: "number", val: '-', def: '-'},
    {attribute: 'max', desc: "maximum number of checkbox checked", type: "number", val: '-', def: '-'},
    {attribute: 'textColor', desc: "font color when button is active", type: "string", val: '-', def: '-'},
    {attribute: 'fill', desc: "border and background color when button is active", type: "string", val: '-', def: '#409EFF'},
  ],
  cbgEvents: [
    {attribute: 'action', desc: "triggers when the binding value changes", type: "the updated value"},
  ],

  cbbAttributes: [
    {attribute: 'model', desc: "binding value", type: "string / number / boolean", val: '-', def: '-'},
    {attribute: 'label', desc: "value of the Checkbox when used inside a checkbox-group", type: "string / number / boolean", val: '-', def: '-'},
    {attribute: 'trueLabel', desc: "value of the Checkbox if it's checked", type: "string / number", val: '-', def: '-'},
    {attribute: 'falseLabel', desc: "value of the Checkbox if it's not checked	", type: "string / number", val: '-', def: '-'},
    {attribute: 'disabled', desc: "whether the Checkbox is disabled", type: "boolean", val: '-', def: 'false'},
    {attribute: 'name', desc: "native 'name' attribute", type: "string", val: '-', def: '-'},
    {attribute: 'checked', desc: "if the Checkbox is checked", type: "boolean", val: '-', def: 'false'},
  ],

  isIndeterminate: computed('cityOptionsInt', 'checkedCitiesInt', function () {
    return this.checkedCitiesInt.length ? this.checkedCitiesInt.length !== this.cityOptionsInt.length : false;
  }),
  checkAll: computed('cityOptionsInt', 'checkedCitiesInt', function () {
    return this.checkedCitiesInt.length === this.cityOptionsInt.length;
  }),
  actions: {
    handleCheckAllChange(e) {
      this.set('checkedCitiesInt', e ? [...this.cityOptionsInt] : []);
    },
  }
});

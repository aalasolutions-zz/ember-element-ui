import Controller from '@ember/controller';

export default Controller.extend({
  tableAttributes:[
    {attribute: 'value', desc: "display value", type: "string, number", val: '-', def: '-'},
    {attribute: 'max', desc: "maximum value, shows '{max}+' when exceeded. Only works if value is a Number", type: "number", val: '-', def: '-'},
    {attribute: 'isDot', desc: "iif a little dot is displayed", type: "boolean", val: '-', def: 'false'},
    {attribute: 'hidden', desc: "hidden badge", type: "boolean", val: '-', def: 'false'},
    {attribute: 'type', desc: "button type", type: "string", val: 'primary / success / warning / danger / info', def: '-'},
  ],
});

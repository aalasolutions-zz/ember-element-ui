import Controller from '@ember/controller';

export default Controller.extend({
  strokeWidth: 50,
  columns:[
    {name: `Attribute`, valuePath: `attribute`},
    {name: `Description`, valuePath: `desc`},
    {name: `Type`, valuePath: `type`},
    {name: `Accepted Values`, valuePath: `val`},
    {name: `Default`, valuePath: `def`}
  ],
  rows:[
    {attribute: 'percentage', desc: "percentage, required", type: "number", val: '0-100', def: '0'},
    {attribute: 'type', desc: "the type of progress bar", type: "string", val: 'line/circle', def: 'line'},
    {attribute: 'strokeWidth', desc: "the width of progress bar", type: "number", val: '-', def: '6'},
    {attribute: 'textInside', desc: "whether to place the percentage inside progress bar, only works when type is 'line'", type: "boolean", val: '-', def: 'false'},
    {attribute: 'status', desc: "the current status of progress bar", type: "string", val: 'success/exception/text', def: '-'},
    {attribute: 'color', desc: "background color of progress bar. Overrides status prop", type: "string", val: '-', def: '-'},
    {attribute: 'width', desc: "the canvas width of circle progress bar", type: "number", val: '-', def: '126'},
    {attribute: 'showText', desc: "whether to show percentage", type: "boolean", val: '-', def: 'true'},
  ],

});

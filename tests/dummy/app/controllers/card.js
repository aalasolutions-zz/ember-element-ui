import Controller from '@ember/controller';

export default Controller.extend({
  tableAttributes:[
    {attribute: 'header', desc: "title of the card. Also accepts a DOM passed by slot#header", type: "string", val: '-', def: '-'},
    {attribute: 'bodyStyle', desc: "CSS style of body", type: "object", val: '-', def: '{ padding: \'20px\' }'},
    {attribute: 'shadow', desc: "when to show card shadows", type: "string", val: 'always / hover / never', def: 'always'},
  ],
});

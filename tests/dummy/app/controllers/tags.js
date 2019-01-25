import Controller from '@ember/controller';

export default Controller.extend({

  tableAttributes:[
    {attribute: 'type', desc: "theme", type: "string", val: 'success/info/warning/danger', def: '-'},
    {attribute: 'closable', desc: "whether Tag can be removed", type: "boolean", val: '-', def: 'false'},
    {attribute: 'disableTransitions', desc: "whether to disable animations", type: "boolean", val: '-', def: 'false'},
    {attribute: 'hit', desc: "whether Tag has a highlighted border", type: "boolean", val: '-', def: 'false'},
    {attribute: 'color', desc: "background color of the Tag", type: "string", val: '-', def: '-'},
    {attribute: 'size', desc: "tag size", type: "string", val: 'medium / small / mini', def: '-'},
  ],
  tableEvents:[
    {event: 'close', desc: "triggers when Tag is removed", param: "--"},
  ],
  actions:{
    handleTag(a,b,c,d){
      console.log(a, b, c, d);
    }
  }
});

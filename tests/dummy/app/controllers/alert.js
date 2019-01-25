import Controller from '@ember/controller';

export default Controller.extend({

  tableAttributes:[
    {attribute: 'title', desc: "title", type: "string", val: '-', def: '-'},
    {attribute: 'type', desc: "component type", type: "string", val: 'success/warning/info/error', def: 'info'},
    {attribute: 'description', desc: "descriptive text. Can also be passed with the default block component", type: "string", val: '-', def: '-'},
    {attribute: 'closable', desc: "if closable or not", type: "boolean", val: '-', def: 'true'},
    {attribute: 'center', desc: "whether to center the text", type: "boolean", val: '-', def: 'false'},
    {attribute: 'closeText', desc: "customized close button text", type: "string", val: '-', def: '-'},
    {attribute: 'showIcon', desc: "if a type icon is displayed", type: "boolean", val: '-', def: 'false'},


    // {attribute: '', desc: "", type: "", val: '', def: ''},

  ],

  tableEvents:[
    {event: 'close', desc: "triggers when Tag is removed", param: "--"},
  ],

  actions:{
    hello(item){
      alert('Alert closed');
    }
  }
});

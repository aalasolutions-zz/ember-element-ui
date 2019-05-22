import Controller from '@ember/controller';

export default Controller.extend({
  tableAttributes: [
    { attribute: 'direction', desc: "Set divider's direction", type: "string", val: 'horizontal / vertical', def: 'horizontal' },
    { attribute: 'contentPosition', desc: "customize the content on the divider line", type: "String", val: 'left / right / center', def: 'center' },
  ],
});

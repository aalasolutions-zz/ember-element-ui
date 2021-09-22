import Controller from '@ember/controller';

export default Controller.extend({
  columns:[
    {name: `Attribute`, valuePath: `attribute`},
    {name: `Description`, valuePath: `desc`},
    {name: `Type`, valuePath: `type`},
    {name: `Accepted Values`, valuePath: `val`},
    {name: `Default`, valuePath: `def`}
  ],
  rows: [
    { attribute: 'size', desc: "button size", type: "medium / small / mini", val: '-', def: '-' },
    { attribute: 'color', desc: "button type", type: "string", val: 'primary / success / warning / danger / info / text', def: '-' },
    { attribute: 'plain', desc: "determine whether it's a plain button", type: "boolean", val: '-', def: 'false' },
    { attribute: 'round', desc: "determine whether it's a round button", type: "boolean", val: '-', def: 'false' },
    { attribute: 'circle', desc: "determine whether it's a circle button", type: "boolean", val: '-', def: 'false' },
    { attribute: 'loading', desc: "determine whether it's loading	", type: "boolean", val: '-', def: 'false' },
    { attribute: 'disabled', desc: "disable the button", type: "boolean", val: '-', def: 'false' },
    { attribute: 'icon', desc: "icon", type: "string", val: 'icon-name', def: '-' },
  ],
});

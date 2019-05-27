import Controller from '@ember/controller';

export default Controller.extend({
  tableAttributes: [
    { attribute: 'model', desc: "binding value", type: "boolean / string / number", val: '-', def: '-' },
    { attribute: 'disabled', desc: "whether Switch is disabled", type: "boolean", val: '-', def: 'false' },
    { attribute: 'width', desc: "width of Switch", type: "number", val: '-', def: '40' },
    { attribute: 'activeIconClass', desc: "class name of the icon displayed when in on state, overrides activeText", type: "string", val: 'icon-name', def: '-' },
    { attribute: 'inactiveIconClass', desc: "class name of the icon displayed when in off state, overrides inactiveText", type: "string", val: 'icon-name', def: '-' },
    { attribute: 'activeText	', desc: "text displayed when in on state", type: "string", val: '-', def: '-' },
    { attribute: 'inactiveText	', desc: "text displayed when in off state", type: "string", val: '-', def: '-' },
    { attribute: 'activeColor		', desc: "background color when in on state", type: "string", val: '-', def: '#409EFF' },
    { attribute: 'inactiveColor			', desc: "background color when in off state", type: "string", val: '-', def: '#C0CCDA' },
  ],
});

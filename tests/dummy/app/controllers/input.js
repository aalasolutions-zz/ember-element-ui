import Controller from '@ember/controller';

export default Controller.extend({
  tableAttributes: [
    { attribute: 'placeholder', desc: "placeholder of Input", type: "string", val: '-', def: '-' },
    { attribute: 'clearable', desc: "whether to show clear button", type: "boolean", val: '-', def: 'false' },
    { attribute: 'disabled', desc: "whether input is disabled", type: "boolean", val: '-', def: 'false' },
    { attribute: 'prefixIcon', desc: "prefix icon", type: "string", val: 'icon-name', def: '-' },
    { attribute: 'suffixIcon', desc: "suffix icon", type: "string", val: 'icon-name', def: '-' },
  ],
});

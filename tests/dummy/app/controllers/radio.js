import Controller from '@ember/controller';

export default Controller.extend({
  value    : "Female",
  sports   : "Cricket",
  subject  : "English",
  framework: "Ember",
  IntSports: "Hockey",


  columns:[
    {name: `Attribute`, valuePath: `attribute`},
    {name: `Description`, valuePath: `desc`},
    {name: `Type`, valuePath: `type`},
    {name: `Accepted Values`, valuePath: `val`},
    {name: `Default`, valuePath: `def`}
  ],

  rows: [
    { attribute: 'value / model', desc: "binding value", type: "string", val: '-', def: '-' },
    { attribute: 'label', desc: "the value of Radio", type: "string", val: '-', def: '-' },
    { attribute: 'disabled', desc: "whether Radio is disabled	", type: "boolean", val: '-', def: 'false' },
    { attribute: 'border', desc: "whether to add a border around Radio	", type: "boolean", val: '-', def: 'false' },
    { attribute: 'size', desc: "size of the Radio, only works when border is true", type: "string", val: 'medium / small / mini', def: '-' },
  ],
  actions: {
    checkVal(val, item) {
      if (item == "gender") {
        this.set("value", val);
      } else if (item == "sports") {
        this.set("sports", val);
      } else if (item == "subject") {
        this.set("subject", val);
      } else if (item == "framework") {
        this.set("framework", val);
      } else if (item == "IntSports") {
        this.set("IntSports", val);
      }
    }


}

});

Ember Element UI
==============================================================================

Implementation of eleme.io in Ember

Installation
------------------------------------------------------------------------------

```
ember install ember-element-ui
```


Elements
------------------------------------------------------------------------------

#### Basic 
- [ ] Layout
  - [ ] el-row `{{el-row}}`
    - [ ] gutter `{{el-row gutter=20}}`
    - [x] type `{{el-row type="flex"}}`
    - [x] justify `{{el-row justify="end"}}` start/end/center/space-around/space-between
    - [x] align `{{el-row align="middle"}}` top/middle/bottom
    - [x] tag - Skipped it
  - [x] el-col `{{el-col}}`
    - [x] span `{{el-col span=4}}`
    - [x] offset `{{el-col offset=4}}`
    - [x] push `{{el-col push=4}}`
    - [x] pull `{{el-col pull=4}}`
    - [x] xs `{{el-col xs=4}}`
    - [x] sm `{{el-col sm=4}}`
    - [x] md `{{el-col md=4}}`
    - [x] lg `{{el-col lg=4}}`
    - [x] xl `{{el-col xl=4}}`
    - [x] tag - Skipped it
- [ ] Layout Container 
  - [ ] el-container `{{el-container}}`
    - [x] direction`{{el-container direction="vertical"}}`
      - [ ] Auto change direction to vertical if it have header or footer 
  - [x] el-header `{{el-header}}`
    - [ ] height
  - [x] el-aside `{{el-aside}}`
    - [ ] width
  - [x] el-footer `{{el-footer}}`
    - [ ] height
- [x] Colors
- [x] Typography
- [x] Icons : http://element.eleme.io/#/en-US/component/icon
- [x] Button `{{el-button}}`
  - [x] size `{{el-button size="small"}}` medium / small / mini
  - [x] type: changed it to `color` `{{el-button color="danger"}}` primary / success / warning / danger / info / text
  - [x] plain `{{el-button plain=true}}`
  - [x] round `{{el-button round=true}}`
  - [x] circle `{{el-button circle=true}}`
  - [x] loading `{{el-button loading=true}}`
  - [x] disabled `{{el-button disabled=true}}`
  - [x] icon `{{el-button icon="el-icon-star-on"}}` You can user Font Awesome icons as well `fa fa-bars`
  - [ ] autofocus `{{el-button autofocus=true}}`
  - [x] native-type: changed it to `type`
  
#### Form
- [ ] Radios
  - [x] Radio  `{{el-radio}}`
    - [x] Attributes
      - [x] label `{{el-radio label="first_name"}}`
      - [x] disabled `{{el-radio disabled=true}}`
      - [x] border `{{el-radio border=true}}`
      - [x] size `{{el-radio size="small"}}`
      - [x] name `{{el-radio name="optName"}}`
    - [x] Events
      - [x] change: changed to `action` `{{el-radio action=(action "handleChange")}}`
  - [x] Radio Button  `{{el-radio-button}}`
      - [x] Attributes
        - [x] label `{{el-radio-button label="first_name"}}`
        - [x] disabled `{{el-radio-button disabled=true}}`
        - [x] size `{{el-radio-button size="small"}}`
        - [x] name `{{el-radio-button name="optName"}}`
      - [x] Events
        - [x] change: changed to `action` `{{el-radio action=(action "handleChange")}}`
  - [ ] Radio Group `{{el-radio-group}}`
    - [ ] Attributes
      - [x] size: `{{el-radio-group size="medium"}}`
      - [x] disabled: `{{el-radio-group disabled=true}}`
      - [ ] text-color: 
      - [ ] fill:
    - [ ] Group Events
        - [ ] change: 
    ```hbs
      {{#el-radio-group model=var1 size="small" as |group|}}
        {{#group.option label="Windows" action=(action 'handleResponse')}} Windows {{/group.option}}
        {{#group.option label="XP" action=(action 'handleResponse') }} XP {{/group.option}}
        {{#group.option label="Mac" disabled=true action=(action (mut var1)) }} Mac {{/group.option}}
      {{/el-radio-group}}
    ```
- [ ] Checkboxes
  - [ ] Checkbox  `{{el-checkbox}}`
    - [x] Attributes
      - [ ] label skipped it
      - [ ] true-label 
      - [ ] false-label 
      - [x] disabled `{{el-checkbox disabled=true}}`
      - [x] border `{{el-checkbox border=true}}`
      - [x] size `{{el-checkbox size="small"}}`
      - [x] name `{{el-checkbox name="optName"}}`
      - [x] checked: changed it to `model` `{{el-checkbox model=varName}}`
      - [ ] indeterminate: 
    - [ ] Events
      - [ ] change
  - [x] Checkbox Button  `{{el-checkbox-button}}`
    - [x] Attributes
      - [x] label `{{el-checkbox-button label="first_name"}}`
      - [ ] true-label 
      - [ ] false-label 
      - [x] disabled `{{el-checkbox-button disabled=true}}`
      - [x] size `{{el-checkbox-button size="small"}}`
      - [x] name `{{el-checkbox-button name="optName"}}`
      - [ ] checked: changed it to `model` `{{el-checkbox-button model=varName}}`
    - [ ] Events
      - [ ] change: 
  - [ ] Checkbox Group `{{el-checkbox-group}}`
    - [ ] Attributes
      - [x] size: `{{el-checkbox-group size="medium"}}`
      - [x] disabled: `{{el-checkbox-group disabled=true}}`
      - [ ] min: 
      - [ ] max: 
      - [ ] text-color: 
      - [ ] fill:
    - [ ] Group Events
        - [ ] change: 
    ```hbs
      {{#el-checkbox-group size="small" as |group|}}
        {{#group.option model=vWindows> Windows {{/group.option}}
        {{#group.option model=vXP> XP {{/group.option}}
        {{#group.option disabled=true model=vMac> Mac {{/group.option}}
      {{/el-checkbox-group}}
    ```
- [ ] Input
- [ ] InputNumber
- [ ] Select
- [ ] Cascader
- [ ] Switch
- [ ] Slider
- [ ] TimePicker
- [ ] DatePicker
- [ ] DateTimePicker
- [ ] Upload
- [ ] Rate
- [ ] ColorPicker
- [ ] Transfer
- [ ] Form

#### Data
- [ ] Table
- [ ] Tag
- [ ] Progress
- [ ] Tree
- [ ] Pagination
- [ ] Badge

#### Notice
- [ ] Alert
- [ ] Loading
- [ ] Message
- [ ] MessageBox
- [ ] Notification

#### Navigation
- [ ] NavMenu
- [ ] Tabs
- [ ] Breadcrumb
- [ ] Dropdown
- [ ] Steps

#### Others
- [ ] Dialog
- [ ] Tooltip
- [ ] Popover
- [ ] Card
- [ ] Carousel
- [ ] Collapse


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-element-ui`
* `yarn install`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

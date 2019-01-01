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
    - [x] ~~tag~~ - Skipped it
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
    - [x] ~~tag~~ - Skipped it
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
      - [ ] ~~label~~ skipped it
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
  - [ ] input `{{el-input}}`
    - [x] type `{{el-input type="password"}}`
    - [x] value `{{el-input value=var_name}}`
    - [ ] maxlength
    - [ ] minlength
    - [x] placeholder `{{el-input placeholder="Enter Login"}}`
    - [x] clearable `{{el-input clearable=true}}`
      - [ ] On hover and on Focus events
    - [x] disabled `{{el-input disabled=true}}`
    - [x] size `{{el-input size="small"}}`
    - [x] prefix-icon `{{el-input prefixIcon="fa fa-bars"}}`
    - [x] suffix-icon `{{el-input suffixIcon="fa fa-bars"}}`
    - [x] autocomplete `{{el-input autocomplete="off"}}`
    - [x] name `{{el-input name="username"}}`
    - [x] readonly `{{el-input readonly=true}}`
    - [ ] max
    - [ ] min
    - [ ] step
    - [ ] resize
    - [ ] form
    - [ ] label
    - [ ] tabindex
    - [ ] when type is text only
      - [x] prefix
      - [x] suffix
      - [x] prepend
      - [x] append
    - [ ] input events
      - [ ] blur
      - [ ] focus
      - [ ] change
      - [ ] clear
    - [ ] input methods
      - [ ] focus
      - [ ] blur
      - [ ] select
  - [ ] input autocomplete
    - [ ] placeholder
    - [ ] disabled
    - [ ] value-key
    - [ ] icon
    - [ ] value
    - [ ] debounce
    - [ ] placement
    - [ ] fetch-suggestions
    - [ ] popper-class
    - [ ] trigger-on-focus
    - [ ] name
    - [ ] select-when-unmatched
    - [ ] label
    - [ ] prefix-icon
    - [ ] suffix-icon
    - [ ] hide-loading
    - [ ] popper-append-to-body
    - [ ] prefix
    - [ ] suffix
    - [ ] prepend
    - [ ] append
    - [ ] Events
      - [ ] select
    - [ ] Method
      - [ ] focus
  - [ ] text area `{{el-input-textarea}}`
    - [ ] rows
    - [ ] autosize
    - [ ] name
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
- [x] Tag `{{#el-tag}}Tag #{{/el-tag}}`
  - [x] attributes
    - [x] type `{{#el-tag type='warning'}}Tag #{{/el-tag}}`
    - [x] closeable `{{#el-tag closeable=true}}Tag #{{/el-tag}}`
    - [x] hit `{{#el-tag hit=true}}Tag #{{/el-tag}}`
    - [x] ~~color~~ skipped it
    - [x] size `{{#el-tag size="medium"}}Tag #{{/el-tag}}`
  - [x] events
    - [x] close `{{#el-tag close=(action 'tagAction')}}Tag #{{/el-tag}}`  
- [x] Progress `{{el-progress}}`
  - [x] percentage `{{el-progress percentage=50}}`
  - [x] type `{{el-progress type='circle'}}`
  - [x] strokeWidth `{{el-progress strokeWidth=20}}`
  - [x] textInside `{{el-progress textInside=true}}`
  - [x] status `{{el-progress status='success'}}`
  - [x] color `{{el-progress color='rgba(145,115,200,0.5)'}}`
  - [x] width `{{el-progress width='150'}}` *only for circle type*
  - [x] showText `{{el-progress showText=true}}`
- [ ] Tree
- [ ] Pagination
- [x] Badge `{{#el-badge}}`
  - [x] value `{{#el-badge value="new"}}content{/el-badge}}`
  - [x] max `{{#el-badge value=15 max=20}}content{/el-badge}}`
  - [x] isDot `{{#el-badge isDot=true}}content{/el-badge}}`
  - [x] hidden `{{#el-badge hidden=true}}content{/el-badge}}`
  - [x] type `{{#el-badge type="danger"}}content{/el-badge}}`
  

#### Notice
- [x] Alert `{{el-alert}}`
  - [x] Attributes 
    - [x] title  `{{el-alert title="Alert Title"}}`
    - [x] type  `{{el-alert title="Alert Title" type="warning"}}`
    - [x] description `{{el-alert title="Alert Title" type="warning" description="Alert Description"}}`
    - [x] closable `{{el-alert title="Alert Title" closeable=false}}`
    - [x] center `{{el-alert title="Alert Title" type="warning" center=true}}`
    - [x] closeText `{{el-alert title="Alert Title" type="warning" closeText="Sure"}}`
    - [x] showIcon `{{el-alert title="Alert Title" type="warning" showIcon=true}}`
  - [x] Block Content 
    - [x] Custom content `{{#el-alert title="Alert Title" type="warning" showIcon=true}} Custom Content {{/el-alert}}`
  - [x] Event
    - [x] close `{{#el-alert title="Hi" action=(action "handleChange") }}`
- [ ] Loading
- [ ] Message
- [ ] MessageBox
- [ ] Notification

#### Navigation
- [ ] NavMenu
  - [ ] Menu `{{el-menu}}`
    - [x] Attributes
      - [x] mode `{{el-menu mode="horizontal"}}`
      - [x] collapse `{{el-menu collpase=true}}` 
      - [ ] background-color
      - [ ] text-color
      - [ ] active-text-color
      - [ ] default-active
      - [ ] default-opened
      - [ ] unique-opened
      - [ ] menu-trigger
      - [ ] router
      - [ ] collapse transition
    - [ ] Methods
      - [ ] open
      - [ ] close
    - [ ] Events
      - [ ] select
      - [ ] open
      - [ ] close
  - [x] Menu Item `{{el-menu-item}}`
    - [x] title `{{el-menu-item title="Logout"}}`
    - [x] icon `{{el-menu-item  title="Logout" icon='el-icon-xxxx'}}`
    - [x] disabled `{{el-menu-item  title="Logout" disabled=true}}`
    - [x] click: changed to `action` `{{el-menu-item  title="Logout" icon='el-icon-xxxx' action=(action "logout")}}`
  - [x] Menu Item Route `{{el-menu-item-route}}`
    - [x] title `{{#el-menu-item-route linkto='logout'}} Logout {{/el-menu-item-route}}`
    - [x] icon `{{#el-menu-item-route  linkto='logout' icon='el-icon-xxxx'}} Logout {{/el-menu-item-route}}`
    - [x] disabled `{{#el-menu-item-route  linkto='logout' disabled=true}} Logout {{/el-menu-item-route}}`
  - [ ] Submenu `{{el-submenu}}`
    - [x] icon `{{el-submenu icon="el-icon-location"}}`
    - [x] title `{{el-submenu icon="el-icon-location" title="Member Settings"}}`
    - [ ] disabled 
    - [ ] popper-class
    - [ ] show-timeout
    - [ ] hide-timeout
    - [ ] popper-append-to-body
  - [ ] Menu Groups
    - [ ] title
- [ ] Tabs
- [ ] Breadcrumb
- [ ] Dropdown
- [ ] Steps

#### Others
- [ ] Dialog
- [ ] Tooltip
- [ ] Popover
- [X] Card
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

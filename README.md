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

####Basic 
- [ ] Layout
  - [ ] el-row `{{el-row}}`
    - [ ] gutter `{{el-row gutter=20}}`
    - [x] type `{{el-row type="flex"}}`
    - [x] justify `{{el-row justify="end"}}` start/end/center/space-around/space-between
    - [x] align `{{el-row align="middle"}}` top/middle/bottom
    - [ ] tag - Skipped it
  - [ ] el-col
    - [ ] span
    - [ ] offset
    - [ ] push
    - [ ] pull
    - [ ] xs
    - [ ] sm
    - [ ] md
    - [ ] lg
    - [ ] xl
    - [ ] tag
- [ ] Layout Container
  - [x] el-container: direction
  - [ ] el-header: height
  - [ ] el-aside: width
  - [ ] el-footer: height
- [x] Colors
- [x] Typography
- [x] Icons
- [x] Button
  - [x] size
  - [x] type: changed it to `color`
  - [x] plain
  - [x] round
  - [x] circle
  - [x] loading
  - [x] disabled
  - [x] icon
  - [x] autofocus
  - [x] native-type: changed it to `type`
  
####Form
- [ ] Radio
  - [ ] Attributes
    - [x] label
    - [x] disabled
    - [x] border
    - [x] size
    - [ ] name



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

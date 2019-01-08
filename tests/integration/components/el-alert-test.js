import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | el-alert', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{el-alert}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#el-alert}}
        template block text
      {{/el-alert}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it checks iconClass', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });



    this.set('title', "Alert Title");
    this.set('icon', "warning");
    this.set('showIcon', true);



    await render(hbs`{{el-alert title=title type=icon showIcon=showIcon}}`);
    assert.equal(this.element.textContent.trim(), 'Alert Title');

    await render(hbs`{{el-alert title=title showIcon=showIcon}}`);
    assert.equal(this.element.textContent.trim(), 'Alert Title');

  });

  test('it checks big bold icon and title', async function(assert) {

    this.set('description', "warning");

    await render(hbs`{{el-alert  description=description}}`);

    assert.equal(this.element.textContent.trim(), 'warning');


    await click('.el-alert__closebtn');

  });

});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | el-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{el-button}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#el-button}}
        template block text
      {{/el-button}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });


  test('it checks size', async function(assert) {

    this.set('size', "small");
    this.set('disabled', false);

    await render(hbs`
    {{#el-button size=size disabled=disabled}}
       Master
    {{/el-button}}
    `
    );

    assert.equal(this.element.textContent.trim(), 'Master');


    this.set('loading', true);

    await render(hbs`
    {{#el-button size=size loading=loading disabled=disabled}}
       Master
    {{/el-button}}
    `
    );

    assert.equal(this.element.textContent.trim(), 'Master');


    this.set('icon', "arrow");

    await render(hbs`
    {{#el-button size=size disabled=disabled icon=icon}}
       Master
    {{/el-button}}
    `
    );

    assert.equal(this.element.textContent.trim(), 'Master');



  });
  test('click event', async function(assert) {

    this.set('size', "small");
    this.set('disabled', false);
    this.set('icon', "arrow");

    this.set('externalAction', (actual) => {
      assert.equal(actual, undefined);
    });


    await render(hbs`
    {{#el-button size=size disabled=disabled icon=icon action=externalAction}}
       Master
    {{/el-button}}
    `
    );

    assert.equal(this.element.textContent.trim(), 'Master');

    await click('.el-button');


    await render(hbs`
    {{#el-button size=size disabled=disabled icon=icon }}
       Master
    {{/el-button}}
    `
    );

    assert.equal(this.element.textContent.trim(), 'Master');

    await click('.el-button');



  });

});

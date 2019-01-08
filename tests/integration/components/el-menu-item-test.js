import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {click, render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | el-menu-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{el-menu-item}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#el-menu-item}}
        template block text
      {{/el-menu-item}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');


    this.set('submenu', true);

    await render(hbs`{{el-menu-item submenu=submenu}}`);
    assert.equal(this.element.textContent.trim(), '');


    await click(this.element);


  });
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-loader', 'Integration | Component | app loader', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-loader}}`);

  assert.equal(this.$('.app-loader').length, 1);

  // Template block usage:
  this.render(hbs`
    {{#app-loader}}
      template block text
    {{/app-loader}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') > -1);
});

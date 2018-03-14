import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('random-gif', 'Integration | Component | random gif', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{random-gif}}`);

  assert.equal(this.$('.random-gif').length, 1);

  // Template block usage:
  this.render(hbs`
    {{#random-gif}}
      template block text
    {{/random-gif}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') > -1);
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nav-bar}}`);

  assert.equal(this.$().text().replace(/(\r\n|\n|\r)/gm,"").replace(/ +/g, ' ').trim(), 'Toggle navigation LogBook About');

  // Template block usage:
  this.render(hbs`
    {{#nav-bar}}
      template block text
    {{/nav-bar}}
  `);

  assert.equal(this.$().text().replace(/(\r\n|\n|\r)/gm,"").replace(/ +/g, ' ').trim(), 'Toggle navigation LogBook About');
});


import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('format-datetime', 'helper:format-datetime', {
  integration: true
});

test('format mm:ss time', function(assert) {
  this.set('ms', '100000');
  this.set('format', 'MM:SS');

  this.render(hbs`{{format-datetime ms format}}`);

  assert.equal(this.$().text().trim(), '01:40');
});

test('format hh:mm:ss time', function(assert) {
  this.set('ms', '10000000');
  this.set('format', 'HH:MM:SS');

  this.render(hbs`{{format-datetime ms format}}`);

  assert.equal(this.$().text().trim(), '02:46:40');
});


import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timer-user-controls', 'Integration | Component | timer user controls', {
    integration: true
});

test('start/stop action should switch the start/stop buttons', function(assert) {
    this.render(hbs`{{timer-user-controls}}`);

    assert.equal(this.$('.duration').text(), "00:00.000");
    assert.equal(this.$('.startbutton').length, 1);
    assert.equal(this.$('.stopbutton').length, 0);
    assert.equal(this.$('.startbutton').text(), 'Start');

    this.$('.startbutton').click();

    assert.equal(this.$('.startbutton').length, 0);
    assert.equal(this.$('.stopbutton').length, 1);
    assert.equal(this.$('.stopbutton').text(), 'Stop');

    this.$('.stopbutton').click();

    assert.equal(this.$('.startbutton').length, 1);
    assert.equal(this.$('.stopbutton').length, 0);
    assert.equal(this.$('.startbutton').text(), 'Start');
});
$(function () {
  'use strict'

  QUnit.module('sanitizer', {
    afterEach: function () {
      $('#qunit-fixture').html('')
    }
  })

  QUnit.test('should export a default white list', function (assert) {
    assert.expect(1)

    assert.ok(Sanitizer.DefaultWhitelist)
  })

  QUnit.test('should sanitize template by removing tags with XSS', function (assert) {
    assert.expect(1)

    var template = [
      '<div>',
      '  <a href="javascript:alert(7)">Click me</a>',
      '  <span>Some content</span>',
      '</div>'
    ].join('')

    var result = Sanitizer.sanitizeHtml(template, Sanitizer.DefaultWhitelist, null)

    assert.strictEqual(result.indexOf('script'), -1)
  })
})

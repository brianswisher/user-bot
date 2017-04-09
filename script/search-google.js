module.exports = {
  'Google Search:apple user test': function (client) {
    client
      .url('https://www.google.com/')
      .setValue('input[name="q"]', 'apple')
      .click('input[type="submit"]')
        .assert.containsText('body', 'apple')
      .end()
  }
}

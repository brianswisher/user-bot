const host = 'https://www.google.com/'

module.exports = {
  'Google Search:apple user test': function (client) {
    client
      .url(host)
      .setValue('input[name="q"]', 'apple')
      .click('input[type="submit"]')
        .assert.containsText('body', 'apple')

    client.end()
  }
}

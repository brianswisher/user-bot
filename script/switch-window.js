const host = 'http://www.google.com'

module.exports = {
  'user test': function(client) {
    client
      .url(host)
      .waitForElementVisible('body', 1000)
      .execute(function(newWindow){
        window.open('http://www.twitter.com', null, "height=1024,width=768")
      }, [host])
      .assert.urlContains('google')
      .window_handles(function(result) {
        const temp = result.value[1]

        this.switchWindow(temp)
      })
      .assert.urlContains('twitter')
      .end()
  }
}

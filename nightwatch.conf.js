const SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: './bin/selenium-server-standalone-2.53.0.jar',
  host: '127.0.0.1',
  port: 4444,
  cli_args: {
    'webdriver.chrome.driver': './bin/chromedriver'
  }
}

const CHROME_CONFIGURATION = {
  browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true
}

const DEFAULT_CONFIGURATION = {
  launch_url: 'http://127.0.0.1:5000',
  selenium_port: 4444,
  selenium_host: 'localhost',
  desiredCapabilities: CHROME_CONFIGURATION
}

const ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION
}

module.exports = {
  src_folders: ['script'],
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS
}

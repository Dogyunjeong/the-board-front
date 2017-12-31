// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  // 'default e2e tests': function test(browser) {
  //   // automatically uses dev Server port from /config.index.js
  //   // default: http://localhost:8080
  //   // see nightwatch.conf.js
  //   const devServer = browser.globals.devServerURL;
  //   console.log(browser.globals.devServerURL);
  //   browser
  //     .url(devServer)
  //     .waitForElementVisible('#app', 5000)
  //     .assert.elementPresent('.hello')
  //     .assert.containsText('h1', 'Welcome to Your Vue.js App')
  //     .assert.elementCount('img', 1)
  //     .end();
  // },\

  'create-task test': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;
    const task = {
      title: 'this is creating task test',
      detail: 'test test test /// test test tsetse \' test',
      start: new Date(),
      end: new Date(),
    };

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#add-task-button')
      .click('#add-task-button')
      .waitForElementVisible('#create-task-form', 5000)
      .assert.elementPresent('#create-task-form')
      .setValue('input[name=title]', task.title)
      .setValue('input[name=assigned-teams-0]', 'true')
      .setValue('input[name=assigned-teams-2]', 'true')
      .setValue('textarea[name=detail]', task.detail)
      .setValue('input[name=start]', task.start)
      .setValue('input[name=end]', task.end)
      .click('#create-task-submit-button')
      .end();
  },
};

Feature: Endorsements
@TypeScriptScenario

Scenario: Test Application
  Given I open the environment 'local'
  Given I have loaded the app
  When I enter a long url of 'http://google.com'
  And I click the shorten url button
  And I wait for 1 seconds
  Then I should see my shortened url

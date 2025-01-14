@ou @ou_vle @qtype @qtype_pmatchjme
Feature: Test exporting pattern match with JME questions
  As a teacher
  In order to be able to reuse my pattern match with JME questions
  I need to export them

  Background:
    Given the following "users" exist:
      | username | firstname | lastname | email                |
      | teacher1 | T1        | Teacher1 | teacher1@example.com |
    And the following "courses" exist:
      | fullname | shortname | category |
      | Course 1 | C1        | 0        |
    And the following "course enrolments" exist:
      | user     | course | role           |
      | teacher1 | C1     | editingteacher |
    And the following "question categories" exist:
      | contextlevel | reference | name           |
      | Course       | C1        | Test questions |
    And the following "questions" exist:
      | questioncategory | qtype     | name         | template |
      | Test questions   | pmatchjme | Draw benzene | benzene  |
    And I log in as "teacher1"
    And I am on "Course 1" course homepage

  @javascript
  Scenario: Export a pattern match with JME question
    When I navigate to "Question bank" in current page administration
    And I select "Export" from the "Question bank tertiary navigation" singleselect
    And I set the field "id_format_xml" to "1"
    And I press "Export questions to file"
    And following "click here" should download between "1325" and "1600" bytes
    # If the download step is the last in the scenario then we can sometimes run
    # into the situation where the download page causes a http redirect but behat
    # has already conducted its reset (generating an error). By putting a logout
    # step we avoid behat doing the reset until we are off that page.
    And I log out

@ou @ou_vle @qtype @qtype_pmatchjme
Feature: Test importing pattern match with JME questions
  As a teacher
  In order to reuse pattern match with JME questions
  I need to import them

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
    And I log in as "teacher1"
    And I am on "Course 1" course homepage

  @javascript @_file_upload
  Scenario: import pattern match with JME question.
    When I navigate to "Question bank" in current page administration
    And I select "Import" from the "Question bank tertiary navigation" singleselect
    And I set the field "id_format_xml" to "1"
    And I upload "question/type/pmatchjme/tests/fixtures/testquestion.moodle.xml" file to "Import" filemanager
    And I press "id_submitbutton"
    Then I should see "Parsing questions from import file."
    And I should see "Importing 1 questions from file"
    And I should see "Draw ethanol"
    And I press "Continue"
    And I should see "Imported molecular editor question"

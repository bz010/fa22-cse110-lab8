# FA22_CSE110_Lab8
### Completed by Ben Zhang
## Check Knowledge Questions:

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
    1. Within a Github action that runs whenever code is pushed, because it can ensure that we will test the codes automatically everytime when we pushed the codes to the repo. This will help me to avoid the crush error and need to re-roll back a lot to fix the code. 
2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
    - No, because unit test is more suitible to check function return for checking the correct output and quicker compared to E2E.
3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    - No. because the message input from user is unknown and it can be anything, unit test cannot cover it all. E2E test will be more suitible for testing "message".
4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
    - Yes, I will use unit test because I can easily write tests that have input over 80 characters and under to identify if the input is 80 characters or not. It is easy to test max-length with unit test.
# countdown-timer-
Create a countdown timer 
The user provides the starting point of the countdown timer and accordingly the timer sets off, decrementing by 1 every second until it reaches 0. 
You are given an Input field that takes input from the user (#timeCount).
This input field should take an integer and should trigger the countdown timer when enter key is pressed in the keyboard
The timer should be triggered by keyboard-event(keyDown) after the input is typed.
When enter is pressed, the div(#current-time) gets updated with the initial value of the timer(the rounded off input or 0 for invalid input) and then decrements by 1 after each second
Only display the number in div(#current-time), i.e., if 5 seconds are left, it should render 5.
The timer should decrement by 1 every second until it reaches 0. e. g 3, 2, 1, 0
Don't change the structure of the returned HTML component from App.js.
On enter keyboard-event of user timer should start counting depending on the following conditions.
If an integer is given then the time should start counting.
If invalid input is given then display 0 in the output(#current-time).
The timer should stop after it reach to 0 and should continue to display 0 till a new event is triggered.
If the user enter a new input before the last timer is finished then terminate the previous one and start the new one.
If the user types in a floating number, take the floor. Eg: If user types 4.3, the timer should start with 4. If the user types 4.8, the timer should still start with 4

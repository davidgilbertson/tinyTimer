tinyTimer
=========

Use the timer to record the running time for particular areas of your code, then output the results to the console in a neat little table.

![screenshot](https://raw.github.com/davidgilbertson/tinyTimer/master/screenshot.png)

## Installation

Just copy paste the timer object into your code. Obviously you should be adding it your app's namespace.


## Example Usage

timer.start('Load Data', 'This is my first run');

//Some code that takes some time to run

timer.next('Processing data');

//Some code that processes the data

timer.next('Draw to DOM')

//Some code that draws the data to the DOM

timer.stop();

You can visualize your data by typing the following in the console

timer.getHistory();

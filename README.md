# Calculator

Yet another project from The Odin Project curriculum - creating Calculator with standard arithmetic operations,

Built with :
#HTML,
#CSS
#Vanilla JS (focused mostly on the DOM manipulation),

History (for those interested):

11.01.2021
This project requires refreshing my knowledge on everything I've learned so far about JavaScript and is probably even more complicated than Etch-a-Sketch, therefore I am going to update this description with information about any bigger problems I may bump into during my coding.

12.01
Since grid seems to be underrated when it comes to CSS functionalities, I've decided to use it for calculator.
There were some issues with how grid should be constructed to make buttons exact same size, but after some "trial and error" method, it finally looks as intended.
Funny enough, now that I look at it - grid is so much easier and cleaner than flex when it comes to setting up more complicated layouts. I will definitely use it more often in my future projects.

16.01
Managed to finalize basic functionality of application using array as a way to store numbers essential for mathematical operations.
It worked just fine, but code wasn't really self-explanatory. Therefore I had to rebuild it from scratch to make it more readable. I had to adjust names of variables to be more understandable and accurate, as well as getting rid of over-complicated array method to replace it with just two variables (currentOperand & previousOperand) that can be used for multiple mathematical operations, one after another (currentOperand can also store the result of math.op. and use it for further calculations).
I also had some issues with unprecise decimal as well as very large numbers, but managed to work it out with toFixed() and toExponential() methods.

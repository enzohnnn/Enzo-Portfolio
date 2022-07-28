# Changes

I added google analytics tracking to my website. If you take a look at the <head> tags on every page there is a
JS script for the running application.

Then added more info about me at the home page. This included a goals section of the about me. Adding this extra goals section
allowed me to create two classes named `aboutHeader` and `aboutSection` in the form of div tags. This allowed me to style the 
title and body of my goals/bio section the same way reducing code redundancy.

I also went ahead and changed some units to relative units. For example, my picture on my home page is 80% of its size and 
I set the div that is containing that entire section of the screen to have a height of 80vh.

Then under projects I went ahead and looked for one of the projects in my old gradescope and uploaded the files to a GitHub repository. This allowed me to have a link to that specific project because previously clicking on the "Huffman Encoding and Compression Project" took the user to a fake link. 

I added a really small bit of Javascript code to the Contact Me page. Originally my <a> tag in the button sent an email to my school email when clicked. However, clicking the button itself didn't do anything, the user had to click the text. I simply added a small script to send an email when the button is clicked using an by adding an event listener.

That is pretty much all of the changes to my website porfolio for now. I could have done more but the previous parts of the assignment took me nearly 12 hours due to confusion so I will add more in the next iteration.
For the skill assessment, we will be testing out your ability to pick up someone else's code and take it to the next level. 
For the hypothetical situation, a FED has been working on a project but got pulled off so we need your help.

Here's what the FED has to say:

This is where we got to in the cut, but we are having problems and haven't been able to fully test. 
Can you help us resolve the following issues as well as help catch if we missed something?
The client is very particular about having fast page speed, good SEO, and wants interesting interactive pieces.
Support wise they also want to have this page look right in browsers that are over 5% of the browser stats for the US over the past couple of months
Below are the items we haven't been able to get to yet.

Font:
  - We set up the Allura and Alex Brush font family stacks in the CSS but we don't have the fonts included (OK)

Site Logos:
  - We need to account for retina screens

Icons:
  - We haven't been able to add the icons to the setup yet (OK)
  - Hamburger menu, cart, and search icons haven't been added (OK)

Navigation:
  - We haven't setup functionality for the menu toggle to open up the bottom footer area in small screens

Slideshow:
  - We need another slide created from the PSD 
  - The styling isn't right yet for slide content as well
  - We also haven't been able to set up the slide functionality

Footer:
  - We got a fair amount of responsive styles done for the site however the footer isn't quite there yet
  - Social media icons need to be setup so some html changes there to put them in is fine. (OK)
  - Expander accordion Javascript functionality hasn't been setup or styled (OK)
  - Footer bottom area: we unfortunately can't pull the html content out of its location (OK)
     - Can we style up the setup so it matches the desktop and mobile styles (OK)

Responsive:
  - For some reason the site isn't switching over to "mobile" styles in devices
  - Also when you shrink down the browser some sort of content is causing a horizontal scrollbar in smaller screens
  - In between sizes for tablet portrait feel fairly empty, is there something we can style to make them look better


The client is very active in the project and wants a technical breakdown of what you did and how you resolved the missing items. 
So we need a writing assessment as well as the code above. 
They also want to know how the design UI/UX And FED code practices could be improved down the road, so please include that as well in your writing


My changes: 

I first noticed that the normalize is incorrectly displayed on the site because the stylesheet is not properly linked within the relative path.

I also imported the font family Allura and Alex Brush to main.css

I also set variables within the css to make any future changes with font/font-size/color easier.


** Adust logo for retina screens

Cart icon was added. Instead of adding pngs, I usually use svgs, as they are easier to work with, and allows customization when it comes to size, color, etc.
Search icon is not in the images folder.
Hamburger menu not in the images folder.

Added fontawesome to import icons.

Hamburger menu was given a width and height of 2rem.

Gave header-toggles--mobile styling:
display: flex;

gave the icons (links) in header-toggles-mobile a:
display: flex;
justify-content: center;
align-items: center;... to have better alignment.

The shopping cart icon was intentially left smaller because the original design looks like it is smaller than the hamburger menu icon.

Added social icons (pngs) to the Follow Us section.

Set media queries for slide__content and added the mobile slide content on the index.html for the content to display properly for mobile.
- aligned text to center for mobile.

Created a mobile navigation menu,
created a variable for the mobile navigation menu,
also create a variable for the hamburger menu.
Added an event listener which toggles the class of 'active' whenever the hamburger menu is clicked.

Also made a class of 'hidden' with the display: none; which hides the slideshow and the "featured" header simultaneously when the hamburger menu is opened.

Added overflow hidden to the page-wrap which solved the issue of horizontal scrolling.

Overflow hidden created a gap between the image and its parent container so I put a width: 100% on the img to take fill the parent content.

Created an accordion for the footer by selecting all expanders and iterating through.

Each expander__toggle (the h2) clicked displays the expander__pannel as block and when the other is clicked, it is hidden.

I had to create second footer nav, adding a modifier --mobile so the accordion doesn't carry into the desktop footer. 
If any other dev has a better method of doing this.. please let me know. I actually would love to know as it would probably reduce a lot of repetitive HTML and CSS.
- Added appropriate media queries to hide the mobile footer w/ accordion when it's 64em, and show the desktop footer.

By doing this, I had to hide all page-footer__column classes, but I counteracted that by making a visible class (display: block;) and applying it to all other page-footer__column section that I don't want hidden when switching device viewports... again. If another dev has a better way to control this, please let me know.

"Shop Crib Bedding" button was misspelled so the mistake was corrected.

